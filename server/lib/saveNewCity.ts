import slugify from 'slugify';
import { googleMapsClient } from '../utils/googleMaps';
import { citySchema } from '../utils/yup';
import { Binding } from '../generated/binding';

interface Args {
  countryId: string;
  name: string;
  unsplashId?: string;
  hasura: Binding;
}

/**
 * Save a new city in the database if it does not already exist
 * Use the google maps infos
 */
export const saveNewCity = async ({
  countryId,
  name,
  unsplashId,
  hasura,
}: Args): Promise<string> => {
  const response = await googleMapsClient
    .geocode({ address: name })
    .asPromise();
  if (response.json.results.length === 0) {
    throw new Error(`No city found for name ${name}.`);
  }
  if (response.json.results.length !== 1) {
    throw new Error(`Multiple cities found for name ${name}.`);
  }
  const googleCity = response.json.results[0];

  if (!googleCity.types.includes('locality')) {
    throw new Error(
      `City ${name} with google id ${googleCity.place_id} is not a city.`
    );
  }

  const city = {
    name,
    slug: slugify(name, {
      lower: true,
    }),
    longitude: googleCity.geometry.location.lng,
    latitude: googleCity.geometry.location.lat,
    nb_places: 0,
    unsplash_id: unsplashId || 'I0TDRP0fj6Y',
    google_id: googleCity.place_id,
    country_id: countryId,
  };
  await citySchema.validate(city);
  const newCity = await hasura.mutation.insert_cities(
    { objects: [city] },
    '{ returning { id } }'
  );
  if (!newCity) {
    throw new Error(
      `City with google id ${city.google_id} has not been saved.`
    );
  }
  return newCity.returning[0].id;
};
