// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  S3_BUCKET: 'finmates.com',
  APP_NAME: 'finmates.com',
  myDomain: 'localhost',
  myPort: 5000,
  apiUrl: 'http://localhost:5000/api',
  s3Bucket: 'https://finmates-bucket.s3.us-east-1.amazonaws.com/',
  whitelist: ['localhost:5000']
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
