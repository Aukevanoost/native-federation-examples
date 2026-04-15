import {withNativeFederation, shareAll} from '@angular-architects/native-federation-v4/config';

export default withNativeFederation({

  name: 'mfe4',

  exposes: {
    './Component': './projects/mfe4/src/app/app.component.ts',
    './Bootstrap': './projects/mfe4/src/bootstrap.ts',
  },

  shareScope: "ng21",
  shared: {
    ...shareAll(
      { singleton: true, strictVersion: true, requiredVersion: 'auto', build: 'package' },
      {
        overrides: {
          '@angular/core': { singleton: true, strictVersion: true, requiredVersion: 'auto', build: 'package', chunks: true, includeSecondaries: {keepAll: true}},
          '@angular/common': { singleton: true, strictVersion: true, requiredVersion: 'auto',build: 'package', chunks: true, includeSecondaries: {keepAll: true}},

        }
      }
    ),
  },
  chunks: false,
  skip: [
    'rxjs/ajax', 
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Add further packages you don't need at runtime
  ],

  features: { 
    denseChunking: true
  }
});
