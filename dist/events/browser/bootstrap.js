import {
  AppComponent
} from "./chunk-XI7GF6FV.js";

// projects/events/src/bootstrap.ts
import { createApplication } from "@angular/platform-browser";

// projects/events/src/app/app.config.ts
import { provideZonelessChangeDetection } from "@angular/core";
var appConfig = {
  providers: [provideZonelessChangeDetection()]
};

// projects/events/src/bootstrap.ts
import { createCustomElement } from "@angular/elements";
(() => {
  createApplication(appConfig).then(({ injector }) => {
    customElements.define("mfe-events", createCustomElement(AppComponent, { injector }));
  });
})();
//# sourceMappingURL=bootstrap.js.map
