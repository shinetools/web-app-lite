// eslint-disable-next-line no-var
declare var config: Config;

interface Config {
  firebase: {
    apiKey: string;
    authDomain: string;
    databaseURL: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
  };
  shineApiHost: string;
  graphqlUri: string;
  subscriptionsUri: string;
  bugsnagKey: string;
  segmentKey: string;
  intercomAppId: string;
  downloadHook: string;
}

export = config;
