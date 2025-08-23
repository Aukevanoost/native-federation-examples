import { InjectionToken } from '@angular/core';

export const ENV = new InjectionToken<EnvironmentConfig>('ENV');

export interface EnvironmentConfig {
  production: boolean;
  domain: string;
  scopeUrl: string;
  tag: string;
}
