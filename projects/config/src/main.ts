import { initFederation } from '@angular-architects/native-federation';
import { EnvironmentConfig } from './app/env.config';

const mockEnvironment: EnvironmentConfig = {
  domain: 'https://localhost:4201',
  scopeUrl: '/',
  production: false,
};

initFederation()
  .then(async () => {
    const microFrontend = await import('./bootstrap');
    await microFrontend.bootstrap(mockEnvironment);
  })
  .catch((err) => console.error(err));
