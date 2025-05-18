import { initFederation } from '@angular-architects/native-federation';

initFederation()
  .catch(err => console.error(err))
  .then(_ => import('./exp-recommendations/recommendations.bootstrap'))
  .then(_ => import('./exp-teasers/teasers.bootstrap'))
  .catch(err => console.error(err));
