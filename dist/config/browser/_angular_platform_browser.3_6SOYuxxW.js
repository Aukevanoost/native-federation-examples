import { a as O, b as J } from "@nf-internal/chunk-4CLCTAJ7";
import { ɵDomAdapter as je, ɵsetRootDomAdapter as Ue, ɵparseCookieValue as xe, ɵgetDOM as fe, DOCUMENT as D, ɵPLATFORM_BROWSER_ID as Be, XhrFactory as Fe, CommonModule as Ve } from "@angular/common";
import * as p from "@angular/core";
import { ɵglobal as y, ɵRuntimeError as ze, ɵinternalCreateApplication as pe, PLATFORM_ID as $e, PLATFORM_INITIALIZER as Ge, createPlatformFactory as Ze, platformCore as Ye, InjectionToken as Yt, ɵTESTABILITY_GETTER as G, ɵTESTABILITY as Xe, Testability as Z, NgZone as le, TestabilityRegistry as de, ɵINJECTOR_SCOPE as Ke, ErrorHandler as he, RendererFactory2 as We, ApplicationModule as Je, ɵsetDocument as qe } from "@angular/core";
import { DOCUMENT as te, ɵgetDOM as Ae } from "@angular/common";
import * as c from "@angular/core";
import { InjectionToken as ne, ɵRuntimeError as F, APP_ID as re, CSP_NONCE as oe, PLATFORM_ID as se, ViewEncapsulation as I, ɵTracingService as Oe, RendererStyleFlags2 as L } from "@angular/core";
var S = new ne(""), P = (() => { class n {
    _zone;
    _plugins;
    _eventNameToPlugin = new Map;
    constructor(e, t) { this._zone = t, e.forEach(o => { o.manager = this; }), this._plugins = e.slice().reverse(); }
    addEventListener(e, t, o, s) { return this._findPluginFor(t).addEventListener(e, t, o, s); }
    getZone() { return this._zone; }
    _findPluginFor(e) { let t = this._eventNameToPlugin.get(e); if (t)
        return t; if (t = this._plugins.find(s => s.supports(e)), !t)
        throw new F(5101, !1); return this._eventNameToPlugin.set(e, t), t; }
    static ɵfac = function (t) { return new (t || n)(c.ɵɵinject(S), c.ɵɵinject(c.NgZone)); };
    static ɵprov = c.ɵɵdefineInjectable({ token: n, factory: n.ɵfac });
} return n; })(), v = class {
    _doc;
    constructor(r) { this._doc = r; }
    manager;
}, N = "ng-app-id";
function q(n) { for (let r of n)
    r.remove(); }
function Q(n, r) { let e = r.createElement("style"); return e.textContent = n, e; }
function Ie(n, r, e, t) { let o = n.head?.querySelectorAll(`style[${N}="${r}"],link[${N}="${r}"]`); if (o)
    for (let s of o)
        s.removeAttribute(N), s instanceof HTMLLinkElement ? t.set(s.href.slice(s.href.lastIndexOf("/") + 1), { usage: 0, elements: [s] }) : s.textContent && e.set(s.textContent, { usage: 0, elements: [s] }); }
function V(n, r) { let e = r.createElement("link"); return e.setAttribute("rel", "stylesheet"), e.setAttribute("href", n), e; }
var k = (() => { class n {
    doc;
    appId;
    nonce;
    inline = new Map;
    external = new Map;
    hosts = new Set;
    constructor(e, t, o, s = {}) { this.doc = e, this.appId = t, this.nonce = o, Ie(e, t, this.inline, this.external), this.hosts.add(e.head); }
    addStyles(e, t) { for (let o of e)
        this.addUsage(o, this.inline, Q); t?.forEach(o => this.addUsage(o, this.external, V)); }
    removeStyles(e, t) { for (let o of e)
        this.removeUsage(o, this.inline); t?.forEach(o => this.removeUsage(o, this.external)); }
    addUsage(e, t, o) { let s = t.get(e); s ? s.usage++ : t.set(e, { usage: 1, elements: [...this.hosts].map(i => this.addElement(i, o(e, this.doc))) }); }
    removeUsage(e, t) { let o = t.get(e); o && (o.usage--, o.usage <= 0 && (q(o.elements), t.delete(e))); }
    ngOnDestroy() { for (let [, { elements: e }] of [...this.inline, ...this.external])
        q(e); this.hosts.clear(); }
    addHost(e) { this.hosts.add(e); for (let [t, { elements: o }] of this.inline)
        o.push(this.addElement(e, Q(t, this.doc))); for (let [t, { elements: o }] of this.external)
        o.push(this.addElement(e, V(t, this.doc))); }
    removeHost(e) { this.hosts.delete(e); }
    addElement(e, t) { return this.nonce && t.setAttribute("nonce", this.nonce), typeof ngServerMode < "u" && ngServerMode && t.setAttribute(N, this.appId), e.appendChild(t); }
    static ɵfac = function (t) { return new (t || n)(c.ɵɵinject(te), c.ɵɵinject(re), c.ɵɵinject(oe, 8), c.ɵɵinject(se)); };
    static ɵprov = c.ɵɵdefineInjectable({ token: n, factory: n.ɵfac });
} return n; })(), B = { svg: "http://www.w3.org/2000/svg", xhtml: "http://www.w3.org/1999/xhtml", xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/", math: "http://www.w3.org/1998/Math/MathML" }, $ = /%COMP%/g;
var ie = "%COMP%", Le = `_nghost-${ie}`, Ne = `_ngcontent-${ie}`, He = !0, ae = new ne("", { providedIn: "root", factory: () => He });
function Pe(n) { return Ne.replace($, n); }
function ke(n) { return Le.replace($, n); }
function ce(n, r) { return r.map(e => e.replace($, n)); }
var j = (() => { class n {
    eventManager;
    sharedStylesHost;
    appId;
    removeStylesOnCompDestroy;
    doc;
    platformId;
    ngZone;
    nonce;
    tracingService;
    rendererByCompId = new Map;
    defaultRenderer;
    platformIsServer;
    constructor(e, t, o, s, i, a, l, f = null, u = null) { this.eventManager = e, this.sharedStylesHost = t, this.appId = o, this.removeStylesOnCompDestroy = s, this.doc = i, this.platformId = a, this.ngZone = l, this.nonce = f, this.tracingService = u, this.platformIsServer = typeof ngServerMode < "u" && ngServerMode, this.defaultRenderer = new w(e, i, l, this.platformIsServer, this.tracingService); }
    createRenderer(e, t) { if (!e || !t)
        return this.defaultRenderer; typeof ngServerMode < "u" && ngServerMode && t.encapsulation === I.ShadowDom && (t = J(O({}, t), { encapsulation: I.Emulated })); let o = this.getOrCreateRenderer(e, t); return o instanceof H ? o.applyToHost(e) : o instanceof T && o.applyStyles(), o; }
    getOrCreateRenderer(e, t) { let o = this.rendererByCompId, s = o.get(t.id); if (!s) {
        let i = this.doc, a = this.ngZone, l = this.eventManager, f = this.sharedStylesHost, u = this.removeStylesOnCompDestroy, g = this.platformIsServer, h = this.tracingService;
        switch (t.encapsulation) {
            case I.Emulated:
                s = new H(l, f, t, this.appId, u, i, a, g, h);
                break;
            case I.ShadowDom: return new z(l, f, e, t, i, a, this.nonce, g, h);
            default:
                s = new T(l, f, t, u, i, a, g, h);
                break;
        }
        o.set(t.id, s);
    } return s; }
    ngOnDestroy() { this.rendererByCompId.clear(); }
    componentReplaced(e) { this.rendererByCompId.delete(e); }
    static ɵfac = function (t) { return new (t || n)(c.ɵɵinject(P), c.ɵɵinject(k), c.ɵɵinject(re), c.ɵɵinject(ae), c.ɵɵinject(te), c.ɵɵinject(se), c.ɵɵinject(c.NgZone), c.ɵɵinject(oe), c.ɵɵinject(Oe, 8)); };
    static ɵprov = c.ɵɵdefineInjectable({ token: n, factory: n.ɵfac });
} return n; })(), w = class {
    eventManager;
    doc;
    ngZone;
    platformIsServer;
    tracingService;
    data = Object.create(null);
    throwOnSyntheticProps = !0;
    constructor(r, e, t, o, s) { this.eventManager = r, this.doc = e, this.ngZone = t, this.platformIsServer = o, this.tracingService = s; }
    destroy() { }
    destroyNode = null;
    createElement(r, e) { return e ? this.doc.createElementNS(B[e] || e, r) : this.doc.createElement(r); }
    createComment(r) { return this.doc.createComment(r); }
    createText(r) { return this.doc.createTextNode(r); }
    appendChild(r, e) { (ee(r) ? r.content : r).appendChild(e); }
    insertBefore(r, e, t) { r && (ee(r) ? r.content : r).insertBefore(e, t); }
    removeChild(r, e) { e.remove(); }
    selectRootElement(r, e) { let t = typeof r == "string" ? this.doc.querySelector(r) : r; if (!t)
        throw new F(-5104, !1); return e || (t.textContent = ""), t; }
    parentNode(r) { return r.parentNode; }
    nextSibling(r) { return r.nextSibling; }
    setAttribute(r, e, t, o) { if (o) {
        e = o + ":" + e;
        let s = B[o];
        s ? r.setAttributeNS(s, e, t) : r.setAttribute(e, t);
    }
    else
        r.setAttribute(e, t); }
    removeAttribute(r, e, t) { if (t) {
        let o = B[t];
        o ? r.removeAttributeNS(o, e) : r.removeAttribute(`${t}:${e}`);
    }
    else
        r.removeAttribute(e); }
    addClass(r, e) { r.classList.add(e); }
    removeClass(r, e) { r.classList.remove(e); }
    setStyle(r, e, t, o) { o & (L.DashCase | L.Important) ? r.style.setProperty(e, t, o & L.Important ? "important" : "") : r.style[e] = t; }
    removeStyle(r, e, t) { t & L.DashCase ? r.style.removeProperty(e) : r.style[e] = ""; }
    setProperty(r, e, t) { r != null && (r[e] = t); }
    setValue(r, e) { r.nodeValue = e; }
    listen(r, e, t, o) { if (typeof r == "string" && (r = Ae().getGlobalEventTarget(this.doc, r), !r))
        throw new F(5102, !1); let s = this.decoratePreventDefault(t); return this.tracingService?.wrapEventListener && (s = this.tracingService.wrapEventListener(r, e, s)), this.eventManager.addEventListener(r, e, s, o); }
    decoratePreventDefault(r) { return e => { if (e === "__ngUnwrap__")
        return r; (typeof ngServerMode < "u" && ngServerMode ? this.ngZone.runGuarded(() => r(e)) : r(e)) === !1 && e.preventDefault(); }; }
};
function ee(n) { return n.tagName === "TEMPLATE" && n.content !== void 0; }
var z = class extends w {
    sharedStylesHost;
    hostEl;
    shadowRoot;
    constructor(r, e, t, o, s, i, a, l, f) { super(r, s, i, l, f), this.sharedStylesHost = e, this.hostEl = t, this.shadowRoot = t.attachShadow({ mode: "open" }), this.sharedStylesHost.addHost(this.shadowRoot); let u = o.styles; u = ce(o.id, u); for (let h of u) {
        let E = document.createElement("style");
        a && E.setAttribute("nonce", a), E.textContent = h, this.shadowRoot.appendChild(E);
    } let g = o.getExternalStyles?.(); if (g)
        for (let h of g) {
            let E = V(h, s);
            a && E.setAttribute("nonce", a), this.shadowRoot.appendChild(E);
        } }
    nodeOrShadowRoot(r) { return r === this.hostEl ? this.shadowRoot : r; }
    appendChild(r, e) { return super.appendChild(this.nodeOrShadowRoot(r), e); }
    insertBefore(r, e, t) { return super.insertBefore(this.nodeOrShadowRoot(r), e, t); }
    removeChild(r, e) { return super.removeChild(null, e); }
    parentNode(r) { return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(r))); }
    destroy() { this.sharedStylesHost.removeHost(this.shadowRoot); }
}, T = class extends w {
    sharedStylesHost;
    removeStylesOnCompDestroy;
    styles;
    styleUrls;
    constructor(r, e, t, o, s, i, a, l, f) { super(r, s, i, a, l), this.sharedStylesHost = e, this.removeStylesOnCompDestroy = o; let u = t.styles; this.styles = f ? ce(f, u) : u, this.styleUrls = t.getExternalStyles?.(f); }
    applyStyles() { this.sharedStylesHost.addStyles(this.styles, this.styleUrls); }
    destroy() { this.removeStylesOnCompDestroy && this.sharedStylesHost.removeStyles(this.styles, this.styleUrls); }
}, H = class extends T {
    contentAttr;
    hostAttr;
    constructor(r, e, t, o, s, i, a, l, f) { let u = o + "-" + t.id; super(r, e, t, s, i, a, l, f, u), this.contentAttr = Pe(u), this.hostAttr = ke(u); }
    applyToHost(r) { this.applyStyles(), this.setAttribute(r, this.hostAttr, ""); }
    createElement(r, e) { let t = super.createElement(r, e); return super.setAttribute(t, this.contentAttr, ""), t; }
};
var U = class n extends je {
    supportsDOMEvents = !0;
    static makeCurrent() { Ue(new n); }
    onAndCancel(r, e, t, o) { return r.addEventListener(e, t, o), () => { r.removeEventListener(e, t, o); }; }
    dispatchEvent(r, e) { r.dispatchEvent(e); }
    remove(r) { r.remove(); }
    createElement(r, e) { return e = e || this.getDefaultDocument(), e.createElement(r); }
    createHtmlDocument() { return document.implementation.createHTMLDocument("fakeTitle"); }
    getDefaultDocument() { return document; }
    isElementNode(r) { return r.nodeType === Node.ELEMENT_NODE; }
    isShadowRoot(r) { return r instanceof DocumentFragment; }
    getGlobalEventTarget(r, e) { return e === "window" ? window : e === "document" ? r : e === "body" ? r.body : null; }
    getBaseHref(r) { let e = Qe(); return e == null ? null : et(e); }
    resetBaseElement() { _ = null; }
    getUserAgent() { return window.navigator.userAgent; }
    getCookie(r) { return xe(document.cookie, r); }
}, _ = null;
function Qe() { return _ = _ || document.head.querySelector("base"), _ ? _.getAttribute("href") : null; }
function et(n) { return new URL(n, document.baseURI).pathname; }
var x = class {
    addToWindow(r) { y.getAngularTestability = (t, o = !0) => { let s = r.findTestabilityInTree(t, o); if (s == null)
        throw new ze(5103, !1); return s; }, y.getAllAngularTestabilities = () => r.getAllTestabilities(), y.getAllAngularRootElements = () => r.getAllRootElements(); let e = t => { let o = y.getAllAngularTestabilities(), s = o.length, i = function () { s--, s == 0 && t(); }; o.forEach(a => { a.whenStable(i); }); }; y.frameworkStabilizers || (y.frameworkStabilizers = []), y.frameworkStabilizers.push(e); }
    findTestabilityInTree(r, e, t) { if (e == null)
        return null; let o = r.getTestability(e); return o ?? (t ? fe().isShadowRoot(e) ? this.findTestabilityInTree(r, e.host, !0) : this.findTestabilityInTree(r, e.parentElement, !0) : null); }
}, tt = (() => { class n {
    build() { return new XMLHttpRequest; }
    static ɵfac = function (t) { return new (t || n); };
    static ɵprov = p.ɵɵdefineInjectable({ token: n, factory: n.ɵfac });
} return n; })(), me = (() => { class n extends v {
    constructor(e) { super(e); }
    supports(e) { return !0; }
    addEventListener(e, t, o, s) { return e.addEventListener(t, o, s), () => this.removeEventListener(e, t, o, s); }
    removeEventListener(e, t, o, s) { return e.removeEventListener(t, o, s); }
    static ɵfac = function (t) { return new (t || n)(p.ɵɵinject(D)); };
    static ɵprov = p.ɵɵdefineInjectable({ token: n, factory: n.ɵfac });
} return n; })(), ue = ["alt", "control", "meta", "shift"], nt = { "\b": "Backspace", "\t": "Tab", "\x7F": "Delete", "\x1B": "Escape", Del: "Delete", Esc: "Escape", Left: "ArrowLeft", Right: "ArrowRight", Up: "ArrowUp", Down: "ArrowDown", Menu: "ContextMenu", Scroll: "ScrollLock", Win: "OS" }, rt = { alt: n => n.altKey, control: n => n.ctrlKey, meta: n => n.metaKey, shift: n => n.shiftKey }, ge = (() => { class n extends v {
    constructor(e) { super(e); }
    supports(e) { return n.parseEventName(e) != null; }
    addEventListener(e, t, o, s) { let i = n.parseEventName(t), a = n.eventCallback(i.fullKey, o, this.manager.getZone()); return this.manager.getZone().runOutsideAngular(() => fe().onAndCancel(e, i.domEventName, a, s)); }
    static parseEventName(e) { let t = e.toLowerCase().split("."), o = t.shift(); if (t.length === 0 || !(o === "keydown" || o === "keyup"))
        return null; let s = n._normalizeKey(t.pop()), i = "", a = t.indexOf("code"); if (a > -1 && (t.splice(a, 1), i = "code."), ue.forEach(f => { let u = t.indexOf(f); u > -1 && (t.splice(u, 1), i += f + "."); }), i += s, t.length != 0 || s.length === 0)
        return null; let l = {}; return l.domEventName = o, l.fullKey = i, l; }
    static matchEventFullKeyCode(e, t) { let o = nt[e.key] || e.key, s = ""; return t.indexOf("code.") > -1 && (o = e.code, s = "code."), o == null || !o ? !1 : (o = o.toLowerCase(), o === " " ? o = "space" : o === "." && (o = "dot"), ue.forEach(i => { if (i !== o) {
        let a = rt[i];
        a(e) && (s += i + ".");
    } }), s += o, s === t); }
    static eventCallback(e, t, o) { return s => { n.matchEventFullKeyCode(s, e) && o.runGuarded(() => t(s)); }; }
    static _normalizeKey(e) { return e === "esc" ? "escape" : e; }
    static ɵfac = function (t) { return new (t || n)(p.ɵɵinject(D)); };
    static ɵprov = p.ɵɵdefineInjectable({ token: n, factory: n.ɵfac });
} return n; })();
function ot(n, r) { let e = O({ rootComponent: n }, ve(r)); return pe(e); }
function st(n) { return pe(ve(n)); }
function ve(n) { return { appProviders: [...Se, ...(n?.providers ?? [])], platformProviders: ye }; }
function it() { return [...Ee]; }
function at() { U.makeCurrent(); }
function ct() { return new he; }
function lt() { return qe(document), document; }
var ye = [{ provide: $e, useValue: Be }, { provide: Ge, useValue: at, multi: !0 }, { provide: D, useFactory: lt }], dt = Ze(Ye, "browser", ye);
var Ee = [{ provide: G, useClass: x }, { provide: Xe, useClass: Z, deps: [le, de, G] }, { provide: Z, useClass: Z, deps: [le, de, G] }], Se = [{ provide: Ke, useValue: "root" }, { provide: he, useFactory: ct }, { provide: S, useClass: me, multi: !0, deps: [D] }, { provide: S, useClass: ge, multi: !0, deps: [D] }, j, k, P, { provide: We, useExisting: j }, { provide: Fe, useClass: tt }, []], ut = (() => { class n {
    constructor() { }
    static ɵfac = function (t) { return new (t || n); };
    static ɵmod = p.ɵɵdefineNgModule({ type: n });
    static ɵinj = p.ɵɵdefineInjector({ providers: [...Se, ...Ee], imports: [Ve, Je] });
} return n; })();
import { ɵgetDOM as Te, DOCUMENT as b } from "@angular/common";
import { ɵgetDOM as On } from "@angular/common";
import * as d from "@angular/core";
import { ɵglobal as Me, ApplicationRef as ft, InjectionToken as _e, ɵConsole as rn, Optional as pt, Injector as ht, ɵRuntimeError as Y, SecurityContext as M, ɵallowSanitizationBypassAndThrow as R, ɵunwrapSafeValue as C, ɵ_sanitizeUrl as mt, ɵ_sanitizeHtml as gt, ɵbypassSanitizationTrustHtml as vt, ɵbypassSanitizationTrustStyle as yt, ɵbypassSanitizationTrustScript as Et, ɵbypassSanitizationTrustUrl as St, ɵbypassSanitizationTrustResourceUrl as Mt, ɵwithI18nSupport as wt, ɵwithEventReplay as Tt, ɵwithIncrementalHydration as _t, makeEnvironmentProviders as Dt, ɵwithDomHydration as Rt, ENVIRONMENT_INITIALIZER as cn, inject as ln, NgZone as dn, ɵZONELESS_ENABLED as un, ɵformatRuntimeError as fn, Version as Ct } from "@angular/core";
import { ɵwithHttpTransferCache as De } from "@angular/common/http";
var mn = (() => { class n {
    _doc;
    _dom;
    constructor(e) { this._doc = e, this._dom = Te(); }
    addTag(e, t = !1) { return e ? this._getOrCreateElement(e, t) : null; }
    addTags(e, t = !1) { return e ? e.reduce((o, s) => (s && o.push(this._getOrCreateElement(s, t)), o), []) : []; }
    getTag(e) { return e && this._doc.querySelector(`meta[${e}]`) || null; }
    getTags(e) { if (!e)
        return []; let t = this._doc.querySelectorAll(`meta[${e}]`); return t ? [].slice.call(t) : []; }
    updateTag(e, t) { if (!e)
        return null; t = t || this._parseSelector(e); let o = this.getTag(t); return o ? this._setMetaElementAttributes(e, o) : this._getOrCreateElement(e, !0); }
    removeTag(e) { this.removeTagElement(this.getTag(e)); }
    removeTagElement(e) { e && this._dom.remove(e); }
    _getOrCreateElement(e, t = !1) { if (!t) {
        let i = this._parseSelector(e), a = this.getTags(i).filter(l => this._containsAttributes(e, l))[0];
        if (a !== void 0)
            return a;
    } let o = this._dom.createElement("meta"); return this._setMetaElementAttributes(e, o), this._doc.getElementsByTagName("head")[0].appendChild(o), o; }
    _setMetaElementAttributes(e, t) { return Object.keys(e).forEach(o => t.setAttribute(this._getMetaKeyMap(o), e[o])), t; }
    _parseSelector(e) { let t = e.name ? "name" : "property"; return `${t}="${e[t]}"`; }
    _containsAttributes(e, t) { return Object.keys(e).every(o => t.getAttribute(this._getMetaKeyMap(o)) === e[o]); }
    _getMetaKeyMap(e) { return bt[e] || e; }
    static ɵfac = function (t) { return new (t || n)(d.ɵɵinject(b)); };
    static ɵprov = d.ɵɵdefineInjectable({ token: n, factory: n.ɵfac, providedIn: "root" });
} return n; })(), bt = { httpEquiv: "http-equiv" }, gn = (() => { class n {
    _doc;
    constructor(e) { this._doc = e; }
    getTitle() { return this._doc.title; }
    setTitle(e) { this._doc.title = e || ""; }
    static ɵfac = function (t) { return new (t || n)(d.ɵɵinject(b)); };
    static ɵprov = d.ɵɵdefineInjectable({ token: n, factory: n.ɵfac, providedIn: "root" });
} return n; })();
function Re(n, r) { if (typeof COMPILED > "u" || !COMPILED) {
    let e = Me.ng = Me.ng || {};
    e[n] = r;
} }
var X = class {
    msPerTick;
    numTicks;
    constructor(r, e) { this.msPerTick = r, this.numTicks = e; }
}, K = class {
    appRef;
    constructor(r) { this.appRef = r.injector.get(ft); }
    timeChangeDetection(r) { let e = r && r.record, t = "Change Detection"; e && "profile" in console && typeof console.profile == "function" && console.profile(t); let o = performance.now(), s = 0; for (; s < 5 || performance.now() - o < 500;)
        this.appRef.tick(), s++; let i = performance.now(); e && "profileEnd" in console && typeof console.profileEnd == "function" && console.profileEnd(t); let a = (i - o) / s; return console.log(`ran ${s} change detection cycles`), console.log(`${a.toFixed(2)} ms per check`), new X(a, s); }
}, Ce = "profiler";
function vn(n) { return Re(Ce, new K(n)), n; }
function yn() { Re(Ce, null); }
var we = class {
    static all() { return () => !0; }
    static css(r) { return e => e.nativeElement != null ? At(e.nativeElement, r) : !1; }
    static directive(r) { return e => e.providerTokens.indexOf(r) !== -1; }
};
function At(n, r) { return Te().isElementNode(n) ? n.matches && n.matches(r) || n.msMatchesSelector && n.msMatchesSelector(r) || n.webkitMatchesSelector && n.webkitMatchesSelector(r) : !1; }
var Ot = { pan: !0, panstart: !0, panmove: !0, panend: !0, pancancel: !0, panleft: !0, panright: !0, panup: !0, pandown: !0, pinch: !0, pinchstart: !0, pinchmove: !0, pinchend: !0, pinchcancel: !0, pinchin: !0, pinchout: !0, press: !0, pressup: !0, rotate: !0, rotatestart: !0, rotatemove: !0, rotateend: !0, rotatecancel: !0, swipe: !0, swipeleft: !0, swiperight: !0, swipeup: !0, swipedown: !0, tap: !0, doubletap: !0 }, W = new _e(""), be = new _e(""), It = (() => { class n {
    events = [];
    overrides = {};
    options;
    buildHammer(e) { let t = new Hammer(e, this.options); t.get("pinch").set({ enable: !0 }), t.get("rotate").set({ enable: !0 }); for (let o in this.overrides)
        t.get(o).set(this.overrides[o]); return t; }
    static ɵfac = function (t) { return new (t || n); };
    static ɵprov = d.ɵɵdefineInjectable({ token: n, factory: n.ɵfac });
} return n; })(), Lt = (() => { class n extends v {
    _config;
    _injector;
    loader;
    _loaderPromise = null;
    constructor(e, t, o, s) { super(e), this._config = t, this._injector = o, this.loader = s; }
    supports(e) { return !(!Ot.hasOwnProperty(e.toLowerCase()) && !this.isCustomEvent(e) || !window.Hammer && !this.loader); }
    addEventListener(e, t, o) { let s = this.manager.getZone(); if (t = t.toLowerCase(), !window.Hammer && this.loader) {
        this._loaderPromise = this._loaderPromise || s.runOutsideAngular(() => this.loader());
        let i = !1, a = () => { i = !0; };
        return s.runOutsideAngular(() => this._loaderPromise.then(() => { if (!window.Hammer) {
            a = () => { };
            return;
        } i || (a = this.addEventListener(e, t, o)); }).catch(() => { a = () => { }; })), () => { a(); };
    } return s.runOutsideAngular(() => { let i = this._config.buildHammer(e), a = function (l) { s.runGuarded(function () { o(l); }); }; return i.on(t, a), () => { i.off(t, a), typeof i.destroy == "function" && i.destroy(); }; }); }
    isCustomEvent(e) { return this._config.events.indexOf(e) > -1; }
    static ɵfac = function (t) { return new (t || n)(d.ɵɵinject(b), d.ɵɵinject(W), d.ɵɵinject(d.Injector), d.ɵɵinject(be, 8)); };
    static ɵprov = d.ɵɵdefineInjectable({ token: n, factory: n.ɵfac });
} return n; })(), En = (() => { class n {
    static ɵfac = function (t) { return new (t || n); };
    static ɵmod = d.ɵɵdefineNgModule({ type: n });
    static ɵinj = d.ɵɵdefineInjector({ providers: [{ provide: S, useClass: Lt, multi: !0, deps: [b, W, ht, [new pt, be]] }, { provide: W, useClass: It }] });
} return n; })(), Nt = (() => { class n {
    static ɵfac = function (t) { return new (t || n); };
    static ɵprov = d.ɵɵdefineInjectable({ token: n, factory: function (t) { let o = null; return t ? o = new (t || n) : o = d.ɵɵinject(Ht), o; }, providedIn: "root" });
} return n; })(), Ht = (() => { class n extends Nt {
    _doc;
    constructor(e) { super(), this._doc = e; }
    sanitize(e, t) { if (t == null)
        return null; switch (e) {
        case M.NONE: return t;
        case M.HTML: return R(t, "HTML") ? C(t) : gt(this._doc, String(t)).toString();
        case M.STYLE: return R(t, "Style") ? C(t) : t;
        case M.SCRIPT:
            if (R(t, "Script"))
                return C(t);
            throw new Y(5200, !1);
        case M.URL: return R(t, "URL") ? C(t) : mt(String(t));
        case M.RESOURCE_URL:
            if (R(t, "ResourceURL"))
                return C(t);
            throw new Y(5201, !1);
        default: throw new Y(5202, !1);
    } }
    bypassSecurityTrustHtml(e) { return vt(e); }
    bypassSecurityTrustStyle(e) { return yt(e); }
    bypassSecurityTrustScript(e) { return Et(e); }
    bypassSecurityTrustUrl(e) { return St(e); }
    bypassSecurityTrustResourceUrl(e) { return Mt(e); }
    static ɵfac = function (t) { return new (t || n)(d.ɵɵinject(b)); };
    static ɵprov = d.ɵɵdefineInjectable({ token: n, factory: n.ɵfac, providedIn: "root" });
} return n; })(), m = function (n) { return n[n.NoHttpTransferCache = 0] = "NoHttpTransferCache", n[n.HttpTransferCacheOptions = 1] = "HttpTransferCacheOptions", n[n.I18nSupport = 2] = "I18nSupport", n[n.EventReplay = 3] = "EventReplay", n[n.IncrementalHydration = 4] = "IncrementalHydration", n; }(m || {});
function A(n, r = [], e = {}) { return { ɵkind: n, ɵproviders: r }; }
function Sn() { return A(m.NoHttpTransferCache); }
function Mn(n) { return A(m.HttpTransferCacheOptions, De(n)); }
function wn() { return A(m.I18nSupport, wt()); }
function Tn() { return A(m.EventReplay, Tt()); }
function _n() { return A(m.IncrementalHydration, _t()); }
function Dn(...n) { let r = [], e = new Set; for (let { ɵproviders: o, ɵkind: s } of n)
    e.add(s), o.length && r.push(o); let t = e.has(m.HttpTransferCacheOptions); return Dt([[], Rt(), e.has(m.NoHttpTransferCache) || t ? [] : De({}), r]); }
var Rn = new Ct("20.1.7");
export { ut as BrowserModule, we as By, Nt as DomSanitizer, S as EVENT_MANAGER_PLUGINS, P as EventManager, v as EventManagerPlugin, W as HAMMER_GESTURE_CONFIG, be as HAMMER_LOADER, It as HammerGestureConfig, En as HammerModule, m as HydrationFeatureKind, mn as Meta, ae as REMOVE_STYLES_ON_COMPONENT_DESTROY, gn as Title, Rn as VERSION, ot as bootstrapApplication, st as createApplication, yn as disableDebugTools, vn as enableDebugTools, dt as platformBrowser, Dn as provideClientHydration, it as provideProtractorTestingSupport, Tn as withEventReplay, Mn as withHttpTransferCacheOptions, wn as withI18nSupport, _n as withIncrementalHydration, Sn as withNoHttpTransferCache, U as ɵBrowserDomAdapter, x as ɵBrowserGetTestability, me as ɵDomEventsPlugin, j as ɵDomRendererFactory2, Ht as ɵDomSanitizerImpl, Lt as ɵHammerGesturesPlugin, ge as ɵKeyEventsPlugin, k as ɵSharedStylesHost, On as ɵgetDOM }; /*! Bundled license information:

@angular/platform-browser/fesm2022/dom_renderer.mjs:
@angular/platform-browser/fesm2022/browser.mjs:
@angular/platform-browser/fesm2022/platform-browser.mjs:
  (**
   * @license Angular v20.1.7
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
