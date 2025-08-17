import { createApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { createCustomElement } from '@angular/elements';
import { EnvironmentConfig } from './app/env.config';
import { AppComponent } from './app/app.component';

export const bootstrap = (env: EnvironmentConfig) =>
  createApplication(appConfig(env)).then(({ injector }) => {
    customElements.define(
      'mfe-config',
      createCustomElement(AppComponent, { injector })
    );
  });
