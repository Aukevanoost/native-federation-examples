import { createApplication } from '@angular/platform-browser';
import { appConfig } from './header.config';
import { createCustomElement } from '@angular/elements';
import { LoadRemoteModule } from "vanilla-native-federation";
import { HeaderComponent } from './header.component';

export const bootstrap = (loader: LoadRemoteModule) => 
  createApplication(appConfig(loader)).then(({injector}) => {
    customElements.define(
      'mfe-header',
      createCustomElement(HeaderComponent, {injector})
    )
  })

export default bootstrap;