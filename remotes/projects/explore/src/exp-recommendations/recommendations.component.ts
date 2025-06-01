import { Component, inject, Input, signal, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fromCDNPipe } from '../shared/from-cdn.pipe';
import { MFE_ENV } from '../shared/env';
import { FeaturedHttpService } from "../shared/http/featured-http.service";

@Component({
  selector: 'exp-recommendations',
  standalone: true,
  imports: [fromCDNPipe, CommonModule],
  providers: [FeaturedHttpService],
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class RecommendationsComponent {
  #env = inject(MFE_ENV);
  http = inject(FeaturedHttpService);

  #recommendations = signal<any[]>([]);
  recommendations = this.#recommendations.asReadonly();

  @Input() set product(value: string) {
    const skus = value.split(',');
    this.http.recommendations$(skus).subscribe(x => {
      this.#recommendations.set(x)
    });
  }
  constructor() {  }

  url(productSku: string, sku: string) {
    return this.#env + '/product/' + productSku + '/' + sku;
  }  
}
