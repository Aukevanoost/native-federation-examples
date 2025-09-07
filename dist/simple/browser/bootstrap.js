import {
  AppComponent
} from "./chunk-SPRX3FF6.js";

// projects/simple/src/bootstrap.ts
import { createApplication } from "@angular/platform-browser";

// projects/simple/src/app/app.config.ts
import { provideZonelessChangeDetection } from "@angular/core";
var appConfig = {
  providers: [provideZonelessChangeDetection()]
};

// projects/simple/src/bootstrap.ts
import { createCustomElement } from "@angular/elements";
(() => {
  createApplication(appConfig).then(({ injector }) => {
    customElements.define("mfe-simple", createCustomElement(AppComponent, { injector }));
  });
})();
//# sourceMappingURL=bootstrap.js.map
