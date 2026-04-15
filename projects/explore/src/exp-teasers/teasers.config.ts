import {
  APP_ID,
  ApplicationConfig,
  InjectionToken,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { LoadRemoteModule } from '@softarc/native-federation-orchestrator';
import { ENV, EnvironmentConfig } from '../shared/env.config';

export const MODULE_LOADER = new InjectionToken<LoadRemoteModule>('loader');

export const appConfig = (
  loader: LoadRemoteModule,
  env: EnvironmentConfig,
): ApplicationConfig => ({
  providers: [
    provideZonelessChangeDetection(),
    provideHttpClient(withFetch()),
    { provide: APP_ID, useValue: 'exp-teasers' },
    { provide: ENV, useValue: env },
    { provide: MODULE_LOADER, useValue: loader },
  ],
});
