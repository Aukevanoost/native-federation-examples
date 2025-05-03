import { createApplication } from '@angular/platform-browser';
import { appConfig } from './homepage.config';
import { createCustomElement } from '@angular/elements';
import { LoadRemoteModule } from "vanilla-native-federation";
import { HomepageComponent } from './homepage.component';

export const bootstrap = (loader: LoadRemoteModule) => 
  createApplication(appConfig(loader)).then(({injector}) => {
    customElements.define(
      'mfe-homepage',
      createCustomElement(HomepageComponent, {injector})
    )
  })

export default bootstrap;