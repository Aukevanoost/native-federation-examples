import {
  AppComponent,
  ENV
} from "./chunk-LZEFMY2T.js";

// projects/config/src/bootstrap.ts
import { createApplication } from "@angular/platform-browser";

// projects/config/src/app/app.config.ts
import { provideZonelessChangeDetection } from "@angular/core";
var appConfig = (env) => ({
  providers: [
    provideZonelessChangeDetection(),
    { provide: ENV, useValue: env }
  ]
});

// projects/config/src/bootstrap.ts
import { createCustomElement } from "@angular/elements";
var bootstrap = (env) => createApplication(appConfig(env)).then(({ injector }) => {
  customElements.define("mfe-config", createCustomElement(AppComponent, { injector }));
});
export {
  bootstrap
};
//# sourceMappingURL=bootstrap.js.map
