import {
  ENV,
  FeaturedHttpService,
  fromCDNPipe
} from "./chunk-KBHXPKQN.js";

// projects/explore/src/exp-teasers/teasers.bootstrap.ts
import { createApplication } from "@angular/platform-browser";
import { createCustomElement } from "@angular/elements";

// projects/explore/src/exp-teasers/teasers.config.ts
import { APP_ID, InjectionToken, provideZonelessChangeDetection } from "@angular/core";
import { provideHttpClient, withFetch } from "@angular/common/http";
var MODULE_LOADER = new InjectionToken("loader");
var appConfig = (loader, env) => ({
  providers: [
    provideZonelessChangeDetection(),
    provideHttpClient(withFetch()),
    { provide: APP_ID, useValue: "exp-teasers" },
    { provide: ENV, useValue: env },
    { provide: MODULE_LOADER, useValue: loader }
  ]
});

// projects/explore/src/exp-teasers/teasers.component.ts
import { CommonModule } from "@angular/common";
import { Component, inject, ViewEncapsulation } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import * as i0 from "@angular/core";
var _forTrack0 = ($index, $item) => $item.key;
function TeasersComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275domElementStart(0, "a", 1);
    i0.\u0275\u0275domElement(1, "img", 2);
    i0.\u0275\u0275pipe(2, "fromCDN");
    i0.\u0275\u0275domElementStart(3, "p", 3);
    i0.\u0275\u0275text(4);
    i0.\u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const teaser_r1 = ctx.$implicit;
    const ctx_r1 = i0.\u0275\u0275nextContext();
    i0.\u0275\u0275domProperty("href", ctx_r1.url(teaser_r1.key), i0.\u0275\u0275sanitizeUrl)("id", "goto-" + teaser_r1.key);
    i0.\u0275\u0275advance();
    i0.\u0275\u0275domProperty("src", i0.\u0275\u0275pipeBind2(2, 4, teaser_r1.image, "500"), i0.\u0275\u0275sanitizeUrl);
    i0.\u0275\u0275advance(3);
    i0.\u0275\u0275textInterpolate(teaser_r1.title);
  }
}
var TeasersComponent = class _TeasersComponent {
  #env = inject(ENV);
  #http = inject(FeaturedHttpService);
  teasers = toSignal(this.#http.teasers$(), { initialValue: [] });
  url(key) {
    return this.#env.domain + "/products/" + key;
  }
  static \u0275fac = function TeasersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TeasersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({ type: _TeasersComponent, selectors: [["exp-teasers"]], features: [i0.\u0275\u0275ProvidersFeature([FeaturedHttpService])], decls: 3, vars: 0, consts: [[1, "teaser__container"], [1, "teaser__card", 3, "href", "id"], ["width", "500", "sizes", "500px", 1, "teaser__img", 3, "src"], [1, "teaser__title"]], template: function TeasersComponent_Template(rf, ctx) {
    if (rf & 1) {
      i0.\u0275\u0275domElementStart(0, "div", 0);
      i0.\u0275\u0275repeaterCreate(1, TeasersComponent_For_2_Template, 5, 7, "a", 1, _forTrack0);
      i0.\u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      i0.\u0275\u0275advance();
      i0.\u0275\u0275repeater(ctx.teasers());
    }
  }, dependencies: [CommonModule, fromCDNPipe], styles: ['\n\n[_nghost-%COMP%] {\n  --outer-space: 1.5rem;\n  font-family:\n    "Helvetica Neue",\n    Helvetica,\n    Arial,\n    sans-serif;\n  font-size: 16px;\n  max-width: 1000px;\n  padding: 0;\n  display: block;\n}\n.teaser__container[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  position: relative;\n}\n@media (min-width: 500px) {\n  .teaser__container[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 1rem;\n    flex-direction: row;\n  }\n}\n.teaser__card[_ngcontent-%COMP%] {\n  flex: 1;\n  display: block;\n  position: relative;\n  margin-bottom: 2rem;\n  color: inherit;\n  text-align: center;\n  text-decoration: none;\n}\n.teaser__card[_ngcontent-%COMP%]:hover, \n.teaser__card[_ngcontent-%COMP%]:focus {\n  text-decoration: underline;\n}\n.teaser__title[_ngcontent-%COMP%] {\n  line-height: 1.5;\n}\n.teaser__img[_ngcontent-%COMP%] {\n  width: 100%;\n  aspect-ratio: 1000/560;\n  margin-bottom: 0.75rem;\n}\n/*# sourceMappingURL=teasers.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassDebugInfo(TeasersComponent, { className: "TeasersComponent", filePath: "projects/explore/src/exp-teasers/teasers.component.ts", lineNumber: 18 });
})();

// projects/explore/src/exp-teasers/teasers.bootstrap.ts
var bootstrap = (loader, env) => createApplication(appConfig(loader, env)).then(({ injector }) => {
  customElements.define("exp-teasers", createCustomElement(TeasersComponent, { injector }));
});
export {
  bootstrap
};
//# sourceMappingURL=teasers.js.map
