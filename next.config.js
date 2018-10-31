const withTypescript = require('@zeit/next-typescript');

let config = {
  publicRuntimeConfig: {
    appUrl: process.env.APP_URL,
    googleAnalyticsTrackingCode: process.env.GOOGLE_ANALYTICS_TRACKING_CODE,
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    googleRecaptchaKey: process.env.GOOGLE_RECAPTCHA_CLIENT_KEY,
    mapboxToken: process.env.MAPBOX_TOKEN,
  },
};
config = withTypescript(config);
module.exports = config;
