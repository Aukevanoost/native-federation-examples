const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: '@tractor-store/events',

  exposes: {
    './bootstrap': './projects/events/src/bootstrap.ts',
    './component': './projects/events/src/app/app.component.ts'
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
