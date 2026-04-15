import { initFederation } from '@softarc/native-federation-orchestrator';
import { useShimImportMap } from '@softarc/native-federation-orchestrator/options';
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
