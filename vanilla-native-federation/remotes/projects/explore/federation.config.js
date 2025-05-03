const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: 'explore',

  exposes: {
    './homepage': './projects/explore/src/homepage/homepage.bootstrap.ts',
    './header': './projects/explore/src/header/header.bootstrap.ts',
    './footer': './projects/explore/src/footer/footer.bootstrap.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket'
  ]
  
});
