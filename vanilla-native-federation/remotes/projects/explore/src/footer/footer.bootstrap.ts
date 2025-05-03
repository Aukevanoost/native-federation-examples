import { createApplication } from '@angular/platform-browser';
import { appConfig } from './footer.config';
import { createCustomElement } from '@angular/elements';
import { LoadRemoteModule } from "vanilla-native-federation";
import { FooterComponent } from './footer.component';

export const bootstrap = (loader: LoadRemoteModule) => 
  createApplication(appConfig(loader)).then(({injector}) => {
    customElements.define(
      'mfe-footer',
      createCustomElement(FooterComponent, {injector})
    )
  })

export default bootstrap;