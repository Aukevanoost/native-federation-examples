import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { appConfig } from './teasers.config';
import { TeasersComponent } from './teasers.component';
import { LoadRemoteModule } from '@softarc/native-federation-orchestrator';
import { EnvironmentConfig } from '../shared/env.config';

export const bootstrap = (loader: LoadRemoteModule, env: EnvironmentConfig) =>
  createApplication(appConfig(loader, env)).then(({ injector }) => {
    customElements.define(
      'exp-teasers',
      createCustomElement(TeasersComponent, { injector }),
    );
  });
