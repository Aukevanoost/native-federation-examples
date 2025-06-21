import { APP_ID, ApplicationConfig, InjectionToken, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { MFE_ENV, Env } from '../shared/env';
import { LoadRemoteModule } from "vanilla-native-federation";

const fallback: Env = {
  cdn: 'http://localhost:4000',
  shell: 'http://localhost:8080',
  api: 'http://localhost:8081/v1',
  mfe: 'http://localhost:4000/teasers'
}

export const MODULE_LOADER = new InjectionToken<LoadRemoteModule<{bootstrap: (loader: LoadRemoteModule) => unknown}>>('loader');

export const appConfig = (loader: LoadRemoteModule): ApplicationConfig => ({
  providers: [
    { provide: APP_ID, useValue: 'exp-teasers' },
    { provide: MFE_ENV, useValue: fallback },
    { provide: MODULE_LOADER, useValue: loader },
    provideZoneChangeDetection({eventCoalescing: true}),
    provideHttpClient(withFetch()),
  ]
});