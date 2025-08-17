import {
  ApplicationConfig,
  provideZonelessChangeDetection,
} from '@angular/core';
import { ENV, EnvironmentConfig } from './env.config';

export const appConfig = (env: EnvironmentConfig): ApplicationConfig => ({
  providers: [
    provideZonelessChangeDetection(),
    { provide: ENV, useValue: env },
  ],
});
