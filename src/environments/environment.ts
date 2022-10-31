// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'portfolio-ecb4e',
    appId: '1:1093484796820:web:f5b3e9fb9512ab6e6f0d81',
    storageBucket: 'portfolio-ecb4e.appspot.com',
    locationId: 'southamerica-east1',
    apiKey: 'AIzaSyC-n1upadVo-aUep-aoKur2Iobo_5ASRjg',
    authDomain: 'portfolio-ecb4e.firebaseapp.com',
    messagingSenderId: '1093484796820',
    measurementId: 'G-M8LHPMWKK4',
  },
  production: false,

  //URL: 'http://localhost:8080/'
  URL: 'https://portfolio-gl-backend.herokuapp.com/'
  
  //URL: url de heroku


};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
