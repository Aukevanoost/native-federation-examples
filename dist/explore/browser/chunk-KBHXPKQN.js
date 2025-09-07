// projects/explore/src/shared/env.config.ts
import { InjectionToken } from "@angular/core";
var ENV = new InjectionToken("ENV");

// projects/explore/src/shared/from-cdn.pipe.ts
import { inject, Pipe } from "@angular/core";
import * as i0 from "@angular/core";
var fromCDNPipe = class _fromCDNPipe {
  #env = inject(ENV);
  transform(path, size) {
    const url = `${this.trimIfLastChar(this.#env.scopeUrl)}/${this.trimIfFirstChar(path)}`;
    return !!size ? url.replace("[size]", size) : url;
  }
  trimIfFirstChar(raw, needle = "/") {
    return raw.startsWith(needle) ? raw.slice(1) : raw;
  }
  trimIfLastChar(raw, needle = "/") {
    return raw.endsWith(needle) ? raw.slice(0, -1) : raw;
  }
  static \u0275fac = function fromCDNPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _fromCDNPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ i0.\u0275\u0275definePipe({ name: "fromCDN", type: _fromCDNPipe, pure: true });
};

// projects/explore/src/shared/http/featured-http.service.ts
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import * as i02 from "@angular/core";
var FeaturedHttpService = class _FeaturedHttpService {
  teasers$() {
    return of([
      {
        title: "Classic Tractors",
        image: "/img/scene/[size]/classics.webp",
        key: "classic"
      },
      {
        title: "Autonomous Tractors",
        image: "/img/scene/[size]/autonomous.webp",
        key: "autonomous"
      }
    ]);
  }
  recommendations$() {
    return of([
      {
        sku: "AU-01-SI",
        name: "TerraFirma AutoCultivator T-300",
        image: "/img/product/[size]/AU-01-SI.webp",
        productSku: "AU-01"
      },
      {
        sku: "CL-11-SK",
        name: "Scandinavia Sower",
        image: "/img/product/[size]/CL-11-SK.webp",
        productSku: "CL-11"
      },
      {
        sku: "CL-08-GR",
        name: "Holland Hamster",
        image: "/img/product/[size]/CL-08-GR.webp",
        productSku: "CL-08"
      },
      {
        sku: "CL-10-SD",
        name: "Global Gallant",
        image: "/img/product/[size]/CL-10-SD.webp",
        productSku: "CL-10"
      }
    ]);
  }
  static \u0275fac = function FeaturedHttpService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeaturedHttpService)();
  };
  static \u0275prov = /* @__PURE__ */ i02.\u0275\u0275defineInjectable({ token: _FeaturedHttpService, factory: _FeaturedHttpService.\u0275fac });
};

export {
  ENV,
  fromCDNPipe,
  FeaturedHttpService
};
//# sourceMappingURL=chunk-KBHXPKQN.js.map
