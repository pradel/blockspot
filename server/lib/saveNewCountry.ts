import slugify from 'slugify';
import { googleMapsClient } from '../utils/googleMaps';
import { countrySchema } from '../utils/yup';
import { Binding } from '../generated/binding';
import { GeocodingResult } from '@google/maps';

interface Args {
  name: string;
  hasura: Binding;
}

/**
 * Save a new country in the database if it does not already exist
 * Use the google maps infos
 */
export const saveNewCountry = async ({
  name,
  hasura,
}: Args): Promise<string> => {
  const response = await googleMapsClient
    .geocode({ address: name })
    .asPromise();
  if (response.json.results.length === 0) {
    throw new Error(`No country found for name ${name}.`);
  }
  if (response.json.results.length !== 1) {
    throw new Error(`Multiple countries found for name ${name}.`);
  }
  const googleCountry: GeocodingResult | null = response.json.results[0];

  if (!googleCountry.types.includes('country')) {
    throw new Error(
      `Country ${name} with google id ${
        googleCountry.place_id
      } is not a country.`
    );
  }

  const country = {
    name,
    slug: slugify(googleCountry.formatted_address, {
      lower: true,
    }),
    longitude: googleCountry.geometry.location.lng,
    latitude: googleCountry.geometry.location.lat,
    google_id: googleCountry.place_id,
  };

  await countrySchema.validate(country);
  const newCountry = await hasura.mutation.insert_countries(
    { objects: [country] },
    '{ returning { id } }'
  );
  if (!newCountry) {
    throw new Error(
      `Country with google id ${country.google_id} has not been saved.`
    );
  }
  return newCountry.returning[0].id;
};
