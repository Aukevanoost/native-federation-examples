const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: '@tractor-store/simple',

  exposes: {
    './bootstrap': './projects/simple/src/bootstrap.ts',
    './component': './projects/simple/src/app/app.component.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    (pkg) => pkg.startsWith('vanilla-native-federation'),
  ],
features: {
  ignoreUnusedDeps: true
}
});
