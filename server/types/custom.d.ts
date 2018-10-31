declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'production' | 'development' | 'test';
    GOOGLE_API_KEY: string;
    GOOGLE_MAPS_API_KEY: string;
    GOOGLE_RECAPTCHA_SERVER_KEY: string;
    APP_URL: string;
    HASURA_URL: string;
    SLACK_WEBHOOK_URL?: string;
  }

  export interface Process {
    env: ProcessEnv;
  }
}
