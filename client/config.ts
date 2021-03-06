import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export const config = {
  googleAnalyticsTrackingCode: publicRuntimeConfig.googleAnalyticsTrackingCode,
  googleMapsApiKey: publicRuntimeConfig.googleMapsApiKey,
  googleRecaptchaKey: publicRuntimeConfig.googleRecaptchaKey,
  mapboxToken: publicRuntimeConfig.mapboxToken,
  githubUrl: 'https://github.com/pradel/blockspot',
  twitterUrl: 'https://twitter.com/Blockspotapp',
  telegramUrl: 'https://t.me/blockspotapp',
  appUrl: publicRuntimeConfig.appUrl,
  btcAddress: '35iTy3fHFg94amNu5jSgokpikdBapjukck',
  ethAddress: '0xa60e618864971405148A86cB5fD4fD6c39AC1063',
  bchAddress: 'qrxrlwjl6aueh3kce4u0ygmqz5quuna06g0mvt4pue',
  ltcAddress: 'MWWVv55c6KHrMjQtAAb3YyxhDFQ42uCPJd',
  categories: ['bar', 'restaurant', 'shop', 'other'],
  heightFooter: 40,
  widthColumn: 400,
  basePx: 16,
  suggestCityUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLScwI8ZMIvbHWXOXj7vhe82WGvzklZ5rz7XPwrPWGsBlCSBdqQ/viewform',
};
