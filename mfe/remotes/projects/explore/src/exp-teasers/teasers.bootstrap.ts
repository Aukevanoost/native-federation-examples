import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { appConfig } from './teasers.config';
import { TeasersComponent } from './teasers.component';
import { LoadRemoteModule } from 'vanilla-native-federation';
import 'zone.js';

export const bootstrap = (loader: LoadRemoteModule) => 
  createApplication(appConfig(loader)).then(({injector}) => {
    customElements.define(
      'exp-teasers', 
      createCustomElement(TeasersComponent, {injector})
    )
  })