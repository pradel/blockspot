import { PlaceDetailsResult } from '@google/maps';
import { get } from 'lodash';
import slugify from 'slugify';
import { googleMapsClient } from '../utils/googleMaps';
import { placeSchema } from '../utils/yup';
import { Binding } from '../generated/binding';
import { saveNewCountry } from './saveNewCountry';
import { saveNewCity } from './saveNewCity';
import { Category } from '../types';

interface Args {
  googleId: string;
  category: Category;
  cityId?: string;
  hasura: Binding;
}

export const saveNewPlace = async ({
  googleId,
  cityId,
  category,
  hasura,
}: Args): Promise<string> => {
  // TODO if wrong place id, this function throw so catch it properly
  const response = await googleMapsClient
    .place({ placeid: googleId })
    .asPromise();

  const googlePlace: PlaceDetailsResult | null = get(response, 'json.result');
  if (!googlePlace) {
    throw new Error(`Place with google id ${googleId} not found.`);
  }

  // Check place is a real establishment and not a city or country
  if (!googlePlace.types.includes('establishment' as any)) {
    throw new Error(
      `Place ${
        googlePlace.name
      } with google id ${googleId} is not an establishment.`
    );
  }

  // If city id is not provided we need to create it
  if (!cityId) {
    // Get country and city of the place
    const country = googlePlace.address_components.find(el =>
      el.types.includes('country')
    );
    if (!country) {
      throw new Error(`Could not find the country for ${googlePlace.name}.`);
    }
    const city = googlePlace.address_components.find(el =>
      el.types.includes('locality')
    );
    if (!city) {
      throw new Error(`Could not find the city for ${googlePlace.name}.`);
    }
    // Check country exist or create a new one
    let countryId: string;
    const dbCountry = await hasura.query.countries({
      where: { name: { _eq: country.long_name } },
    });
    if (!dbCountry[0]) {
      countryId = await saveNewCountry({
        name: country.long_name,
        hasura,
      });
    } else {
      countryId = dbCountry[0].id;
    }

    // Check city exist or create a new one
    const dbCity = await hasura.query.cities({
      where: { name: { _eq: city.long_name } },
    });
    if (!dbCity[0]) {
      cityId = await saveNewCity({
        countryId,
        name: city.long_name,
        hasura,
      });
    } else {
      cityId = dbCity[0].id;
    }
  }

  const place = {
    name: googlePlace.name,
    slug: slugify(googlePlace.name, {
      lower: true,
    }),
    address: googlePlace.formatted_address,
    longitude: googlePlace.geometry.location.lng,
    latitude: googlePlace.geometry.location.lat,
    google_id: googlePlace.place_id,
    category,
    city_id: cityId,
  };

  await placeSchema.validate(place);
  const newPlace = await hasura.mutation.insert_places(
    { objects: [place] },
    '{ returning { id } }'
  );
  if (!newPlace) {
    throw new Error(
      `Place with google id ${place.google_id} has not been saved.`
    );
  }
  await hasura.mutation.update_cities({
    where: { id: { _eq: cityId } },
    _inc: { nb_places: 1 },
  });
  return newPlace.returning[0].id;
};
