// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCI9UAYgEAp29c3zWkpkk7Fwr4A2XH6RJQ',
    authDomain: 'angularapp-c9a7f.firebaseapp.com',
    databaseURL: 'https://angularapp-c9a7f.firebaseio.com',
    projectId: 'angularapp-c9a7f',
    storageBucket: 'angularapp-c9a7f.appspot.com',
    messagingSenderId: '150140111487'
  }
};
