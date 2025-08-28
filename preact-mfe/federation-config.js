const {
  withNativeFederation,
  shareAll,
} = require("@softarc/native-federation/build");

module.exports = withNativeFederation({
  name: "react-mfe",

  exposes: {
    "./component": "./src/app"
  },

  shared: {
    'preact': {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
    'preact/jsx-runtime': {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }
  },

  // skip: [
  //   '@softarc/native-federation'
  // ]

  // features: {
  //   ignoreUnusedDeps: true
  // }
});