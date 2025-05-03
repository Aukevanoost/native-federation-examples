import { ApplicationConfig, InjectionToken, provideExperimentalZonelessChangeDetection } from '@angular/core';

import { LoadRemoteModule } from 'vanilla-native-federation';

export const MODULE_LOADER = new InjectionToken<LoadRemoteModule<{bootstrap: (loader: LoadRemoteModule) => unknown}>>('loader');

export const appConfig = (loader: LoadRemoteModule): ApplicationConfig => ({
  providers: [
    { provide: MODULE_LOADER, useValue: loader },
    provideExperimentalZonelessChangeDetection()
  ]
});
