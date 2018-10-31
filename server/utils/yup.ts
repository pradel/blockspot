import * as yup from 'yup';

export const countrySchema = yup.object().shape({
  slug: yup.string().required(),
  name: yup.string().required(),
  latitude: yup.number().required(),
  longitude: yup.number().required(),
  google_id: yup.string().required(),
});

export const citySchema = yup.object().shape({
  slug: yup.string().required(),
  name: yup.string().required(),
  latitude: yup.number().required(),
  longitude: yup.number().required(),
  unsplash_id: yup.string().required(),
  country_id: yup.string().required(),
  google_id: yup.string().required(),
});

export const placeSchema = yup.object().shape({
  slug: yup.string().required(),
  name: yup.string().required(),
  latitude: yup.number().required(),
  longitude: yup.number().required(),
  city_id: yup.string().required(),
  category: yup
    .string()
    .oneOf(['bar', 'restaurant', 'shop', 'other'])
    .required(),
  google_id: yup.string().required(),
});
