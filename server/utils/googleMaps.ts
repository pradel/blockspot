import * as googleMaps from '@google/maps';

export const googleMapsClient = googleMaps.createClient({
  key: process.env.GOOGLE_API_KEY,
  Promise: Promise,
});
