import { initFederation } from 'vanilla-native-federation';
import { useShimImportMap } from 'vanilla-native-federation/options';

initFederation({}, {hostRemoteEntry: {url: "./remoteEntry.json"}, ...useShimImportMap({shimMode: true})})
  .then(async () => {
    const recommendations = await import("./exp-recommendations/recommendations.bootstrap");
    const teasers = await import("./exp-teasers/teasers.bootstrap");
    await teasers.bootstrap(() => Promise.resolve());
  })
  .catch(err => console.error(err));