import { initFederation } from 'vanilla-native-federation';
import { useShimImportMap } from 'vanilla-native-federation/options';
import { EnvironmentConfig } from './shared/env.config';

const mockEnvironment: EnvironmentConfig = {
  domain: 'https://localhost:4201',
  scopeUrl: '/',
  production: true,
};

initFederation(
  {},
  {
    hostRemoteEntry: { url: './remoteEntry.json' },
    ...useShimImportMap({ shimMode: true }),
  }
)
  .then(async ({ loadRemoteModule }) => {
    const recommendations = await import(
      './exp-recommendations/recommendations.bootstrap'
    );
    await recommendations.bootstrap(loadRemoteModule, mockEnvironment);

    const teasers = await import('./exp-teasers/teasers.bootstrap');
    await teasers.bootstrap(loadRemoteModule, mockEnvironment);
  })
  .catch((err) => console.error(err));
