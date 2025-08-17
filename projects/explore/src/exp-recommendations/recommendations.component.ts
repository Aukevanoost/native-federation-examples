import {
  Component,
  inject,
  Input,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { fromCDNPipe } from '../shared/from-cdn.pipe';
import { FeaturedHttpService } from '../shared/http/featured-http.service';
import { ENV } from '../shared/env.config';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'exp-recommendations',
  standalone: true,
  imports: [fromCDNPipe, CommonModule],
  providers: [FeaturedHttpService],
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class RecommendationsComponent {
  #env = inject(ENV);
  #http = inject(FeaturedHttpService);

  recommendations = toSignal(this.#http.recommendations$(), {
    initialValue: [],
  });

  url(productSku: string, sku: string) {
    return this.#env.domain + '/product/' + productSku + '/' + sku;
  }
}
