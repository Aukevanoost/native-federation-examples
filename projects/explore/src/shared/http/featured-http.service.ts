import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class FeaturedHttpService {
  public teasers$(): Observable<any> {
    return of([
      {
        title: 'Classic Tractors',
        image: '/img/scene/[size]/classics.webp',
        key: 'classic',
      },
      {
        title: 'Autonomous Tractors',
        image: '/img/scene/[size]/autonomous.webp',
        key: 'autonomous',
      },
    ]);
  }

  public recommendations$(): Observable<any> {
    return of([
      {
        sku: 'AU-01-SI',
        name: 'TerraFirma AutoCultivator T-300',
        image: '/img/product/[size]/AU-01-SI.webp',
        productSku: 'AU-01',
      },
      {
        sku: 'CL-11-SK',
        name: 'Scandinavia Sower',
        image: '/img/product/[size]/CL-11-SK.webp',
        productSku: 'CL-11',
      },
      {
        sku: 'CL-08-GR',
        name: 'Holland Hamster',
        image: '/img/product/[size]/CL-08-GR.webp',
        productSku: 'CL-08',
      },
      {
        sku: 'CL-10-SD',
        name: 'Global Gallant',
        image: '/img/product/[size]/CL-10-SD.webp',
        productSku: 'CL-10',
      },
    ]);
  }
}
