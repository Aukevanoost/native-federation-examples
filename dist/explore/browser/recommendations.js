import {
  ENV,
  FeaturedHttpService,
  fromCDNPipe
} from "./chunk-KBHXPKQN.js";

// projects/explore/src/exp-recommendations/recommendations.bootstrap.ts
import { createApplication } from "@angular/platform-browser";
import { createCustomElement } from "@angular/elements";

// projects/explore/src/exp-recommendations/recommendations.config.ts
import { APP_ID, InjectionToken, provideZonelessChangeDetection } from "@angular/core";
import { provideHttpClient, withFetch } from "@angular/common/http";
var MODULE_LOADER = new InjectionToken("loader");
var appConfig = (loader, env) => ({
  providers: [
    provideZonelessChangeDetection(),
    provideHttpClient(withFetch()),
    { provide: APP_ID, useValue: "exp-recommendations" },
    { provide: ENV, useValue: env },
    { provide: MODULE_LOADER, useValue: loader }
  ]
});

// projects/explore/src/exp-recommendations/recommendations.component.ts
import { Component, inject, ViewEncapsulation } from "@angular/core";
import { CommonModule } from "@angular/common";
import { toSignal } from "@angular/core/rxjs-interop";
import * as i0 from "@angular/core";
var _forTrack0 = ($index, $item) => $item.sku;
function RecommendationsComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275domElementStart(0, "li", 2)(1, "a", 3);
    i0.\u0275\u0275domElement(2, "img", 4);
    i0.\u0275\u0275pipe(3, "fromCDN");
    i0.\u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const r_r1 = ctx.$implicit;
    const ctx_r1 = i0.\u0275\u0275nextContext();
    i0.\u0275\u0275advance();
    i0.\u0275\u0275domProperty("href", ctx_r1.url(r_r1.productSku, r_r1.sku), i0.\u0275\u0275sanitizeUrl);
    i0.\u0275\u0275advance();
    i0.\u0275\u0275domProperty("src", i0.\u0275\u0275pipeBind2(3, 2, r_r1.image, "400"), i0.\u0275\u0275sanitizeUrl);
  }
}
var RecommendationsComponent = class _RecommendationsComponent {
  #env = inject(ENV);
  #http = inject(FeaturedHttpService);
  recommendations = toSignal(this.#http.recommendations$(), {
    initialValue: []
  });
  url(productSku, sku) {
    return this.#env.domain + "/product/" + productSku + "/" + sku;
  }
  static \u0275fac = function RecommendationsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecommendationsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({ type: _RecommendationsComponent, selectors: [["exp-recommendations"]], features: [i0.\u0275\u0275ProvidersFeature([FeaturedHttpService])], decls: 6, vars: 0, consts: [["data-boundary", "explore", 1, "exp_recommendations"], [1, "exp_recommendations__list"], [1, "exp_recommendation"], [1, "exp_recommendation__link", 3, "href"], ["alt", "", "sizes", "200px", "width", "200", "height", "200", 1, "exp_recommendation__image", 3, "src"]], template: function RecommendationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      i0.\u0275\u0275domElementStart(0, "div", 0)(1, "h2");
      i0.\u0275\u0275text(2, "Recommendations");
      i0.\u0275\u0275domElementEnd();
      i0.\u0275\u0275domElementStart(3, "ul", 1);
      i0.\u0275\u0275repeaterCreate(4, RecommendationsComponent_For_5_Template, 4, 5, "li", 2, _forTrack0);
      i0.\u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      i0.\u0275\u0275advance(4);
      i0.\u0275\u0275repeater(ctx.recommendations());
    }
  }, dependencies: [CommonModule, fromCDNPipe], styles: ['\n\n[_nghost-%COMP%] {\n  --outer-space: 1.5rem;\n  box-sizing: border-box;\n  font-family:\n    "Helvetica Neue",\n    Helvetica,\n    Arial,\n    sans-serif;\n  font-size: 16px;\n  max-width: 1000px;\n  padding: 0;\n}\n.exp_recommendations[_ngcontent-%COMP%] {\n  padding: 1rem;\n  margin: 0 -1rem 3rem;\n}\n.exp_recommendations__list[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  gap: 40px;\n  padding: 0;\n  list-style-type: none;\n}\n@media (max-width: 499px) {\n  .exp_recommendations__list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (min-width: 500px) and (max-width: 999px) {\n  .exp_recommendations__list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n}\n@media (min-width: 1000px) {\n  .exp_recommendations__list[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n.exp_recommendation[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.exp_recommendation__link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: black;\n}\n.exp_recommendation__image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  aspect-ratio: 1/1;\n  display: block;\n}\n.exp_recommendation__name[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n  color: black;\n  text-align: center;\n  display: block;\n}\n@media (min-width: 500px) and (max-width: 999px) {\n  .exp_Recommendation[_ngcontent-%COMP%]:nth-child(4) {\n    display: none;\n  }\n}\n/*# sourceMappingURL=recommendations.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassDebugInfo(RecommendationsComponent, { className: "RecommendationsComponent", filePath: "projects/explore/src/exp-recommendations/recommendations.component.ts", lineNumber: 23 });
})();

// projects/explore/src/exp-recommendations/recommendations.bootstrap.ts
var bootstrap = (loader, env) => createApplication(appConfig(loader, env)).then(({ injector }) => {
  customElements.define("exp-recommendations", createCustomElement(RecommendationsComponent, { injector }));
});
export {
  bootstrap
};
//# sourceMappingURL=recommendations.js.map
