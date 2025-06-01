import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { appConfig } from './recommendations.config';
import { RecommendationsComponent } from './recommendations.component';
import { LoadRemoteModule } from 'vanilla-native-federation';
import 'zone.js';

export const bootstrap = (loader: LoadRemoteModule) => 
  createApplication(appConfig(loader)).then(({injector}) => {
    customElements.define(
      'exp-recommendations', 
      createCustomElement(RecommendationsComponent, {injector})
    )
  })