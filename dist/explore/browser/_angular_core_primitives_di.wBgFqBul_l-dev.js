import { NOT_FOUND, NotFoundError, getCurrentInjector, inject, isNotFound, setCurrentInjector } from "@nf-internal/chunk-WXYJN4O7";
import "@nf-internal/chunk-WDMUDEB6";
// node_modules/@angular/core/fesm2022/primitives/di.mjs
function defineInjectable(opts) {
    return {
        token: opts.token,
        providedIn: opts.providedIn || null,
        factory: opts.factory,
        value: void 0
    };
}
function registerInjectable(ctor, declaration) {
    ctor.ɵprov = declaration;
    return ctor;
}
export { NOT_FOUND, NotFoundError, defineInjectable, getCurrentInjector, inject, isNotFound, registerInjectable, setCurrentInjector };
/*! Bundled license information:

@angular/core/fesm2022/primitives/di.mjs:
  (**
   * @license Angular v20.1.7
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/ 
