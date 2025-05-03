import { initFederation, config } from 'vanilla-native-federation';

initFederation({}, {
  hostRemoteEntry: { url: "./remoteEntry.json" },
  ...config.useShimImportMap({ shimMode: true })
})
  .then(async ({loadRemoteModule}) => {
    await import('./header/header.bootstrap');
    const home = await import('./homepage/homepage.bootstrap')
    await home.bootstrap(loadRemoteModule);
  })
  .catch(err => console.error(err));
