import { CommonModule } from '@angular/common';
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { fromCDNPipe } from '../shared/from-cdn.pipe';
import { MFE_ENV } from '../shared/env';
import { FeaturedHttpService } from "../shared/http/featured-http.service";

import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'exp-teasers',
  standalone: true,
  imports: [CommonModule, fromCDNPipe],
  providers: [FeaturedHttpService],
  templateUrl: './teasers.component.html',
  styleUrls: ['./teasers.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TeasersComponent {
  #env = inject(MFE_ENV);
  #http = inject(FeaturedHttpService);

  teasers = toSignal(this.#http.teasers$(), { initialValue: [] });

  url(key: string) {
    return this.#env.shell + '/products/' + key;
  }
}