var t;
function c() { return t; }
function i(n) { let r = t; return t = n, r; }
function s(n, r) { let e = c(); if (!e)
    throw new Error("Current injector is not set."); if (!n.ɵprov)
    throw new Error("Token is not an injectable"); return e.retrieve(n, r); }
var u = Symbol("NotFound"), o = class extends Error {
    name = "\u0275NotFound";
    constructor(r) { super(r); }
};
function f(n) { return n === u || n?.name === "\u0275NotFound"; }
export { c as a, i as b, s as c, u as d, o as e, f }; /*! Bundled license information:

@angular/core/fesm2022/not_found.mjs:
  (**
   * @license Angular v20.1.7
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
