import { inject, Pipe, PipeTransform } from '@angular/core';
import { ENV } from './env.config';

@Pipe({
  name: 'fromCDN',
  standalone: true,
})
export class fromCDNPipe implements PipeTransform {
  #env = inject(ENV);

  transform(path: string, size?: string): string {
    const url = `${this.trimIfLastChar(
      this.#env.scopeUrl
    )}/${this.trimIfFirstChar(path)}`;
    return !!size ? url.replace('[size]', size) : url;
  }

  private trimIfFirstChar(raw: string, needle = '/') {
    return raw.startsWith(needle) ? raw.slice(1) : raw;
  }
  private trimIfLastChar(raw: string, needle = '/') {
    return raw.endsWith(needle) ? raw.slice(0, -1) : raw;
  }
}
