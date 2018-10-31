let requiredEnv = [
  'GOOGLE_API_KEY',
  'GOOGLE_MAPS_API_KEY',
  'GOOGLE_RECAPTCHA_CLIENT_KEY',
  'GOOGLE_RECAPTCHA_SERVER_KEY',
  'MAPBOX_TOKEN',
  'APP_URL',
  'HASURA_URL',
  'HASURA_GRAPHQL_ACCESS_KEY',
  'JWT_SECRET',
  'PG_CONNECTION_STRING',
];
const requiredEnvProduction = ['PGSSLMODE'];

export const checkEnv = () => {
  if (process.env.NODE_ENV === 'production') {
    requiredEnv = requiredEnv.concat(requiredEnvProduction);
  }
  requiredEnv.forEach(key => {
    if (!process.env[key]) {
      throw new Error(`Env ${key} required but not set`);
    }
  });
};
