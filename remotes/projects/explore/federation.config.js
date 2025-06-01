const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: 'explore',

  exposes: {
    './recommendations': './projects/explore/src/exp-recommendations/recommendations.bootstrap.ts',
    './teasers': './projects/explore/src/exp-teasers/teasers.bootstrap.ts',
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
