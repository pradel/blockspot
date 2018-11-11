declare namespace NodeJS {
  interface Process {
    browser: boolean;
  }

  interface Global {
    fetch: any;
  }
}

declare module 'react-google-recaptcha';
declare module 'graphql.macro';
