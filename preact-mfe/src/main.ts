import { initFederation } from '@softarc/native-federation';

(async () => {
  await initFederation();
  await import('./app');
})();
