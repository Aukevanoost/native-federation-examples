import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { appConfig } from './recommendations.config';
import { RecommendationsComponent } from './recommendations.component';
import { LoadRemoteModule } from '@softarc/native-federation-orchestrator';
import { EnvironmentConfig } from '../shared/env.config';

export const bootstrap = (loader: LoadRemoteModule, env: EnvironmentConfig) =>
  createApplication(appConfig(loader, env)).then(({ injector }) => {
    customElements.define(
      'exp-recommendations',
      createCustomElement(RecommendationsComponent, { injector }),
    );
  });
