import { a as Re, b as be } from "@nf-internal/chunk-YXNFSCUR";
import { a as V, c as ve, d as te } from "@nf-internal/chunk-4CLCTAJ7";
import * as u from "@angular/core";
import { ɵRuntimeError as O, InjectionToken as I, inject as w, NgZone as ct, DestroyRef as dt, ɵformatRuntimeError as cr, PendingTasks as ke, runInInjectionContext as ce, DOCUMENT as xe, makeEnvironmentProviders as lt } from "@angular/core";
import { concatMap as ut, filter as ht, map as $, finalize as Fe, switchMap as ft } from "rxjs/operators";
import { of as je, Observable as de, from as pt } from "rxjs";
var F = class {
}, j = class {
}, R = class e {
    headers;
    normalizedNames = new Map;
    lazyInit;
    lazyUpdate = null;
    constructor(r) {
        r ? typeof r == "string" ? this.lazyInit = () => {
            this.headers = new Map, r.split(`
`).forEach(t => { let n = t.indexOf(":"); if (n > 0) {
                let s = t.slice(0, n), i = t.slice(n + 1).trim();
                this.addHeaderEntry(s, i);
            } });
        } : typeof Headers < "u" && r instanceof Headers ? (this.headers = new Map, r.forEach((t, n) => { this.addHeaderEntry(n, t); })) : this.lazyInit = () => { this.headers = new Map, Object.entries(r).forEach(([t, n]) => { this.setHeaderEntries(t, n); }); } : this.headers = new Map;
    }
    has(r) { return this.init(), this.headers.has(r.toLowerCase()); }
    get(r) { this.init(); let t = this.headers.get(r.toLowerCase()); return t && t.length > 0 ? t[0] : null; }
    keys() { return this.init(), Array.from(this.normalizedNames.values()); }
    getAll(r) { return this.init(), this.headers.get(r.toLowerCase()) || null; }
    append(r, t) { return this.clone({ name: r, value: t, op: "a" }); }
    set(r, t) { return this.clone({ name: r, value: t, op: "s" }); }
    delete(r, t) { return this.clone({ name: r, value: t, op: "d" }); }
    maybeSetNormalizedName(r, t) { this.normalizedNames.has(t) || this.normalizedNames.set(t, r); }
    init() { this.lazyInit && (this.lazyInit instanceof e ? this.copyFrom(this.lazyInit) : this.lazyInit(), this.lazyInit = null, this.lazyUpdate && (this.lazyUpdate.forEach(r => this.applyUpdate(r)), this.lazyUpdate = null)); }
    copyFrom(r) { r.init(), Array.from(r.headers.keys()).forEach(t => { this.headers.set(t, r.headers.get(t)), this.normalizedNames.set(t, r.normalizedNames.get(t)); }); }
    clone(r) { let t = new e; return t.lazyInit = this.lazyInit && this.lazyInit instanceof e ? this.lazyInit : this, t.lazyUpdate = (this.lazyUpdate || []).concat([r]), t; }
    applyUpdate(r) { let t = r.name.toLowerCase(); switch (r.op) {
        case "a":
        case "s":
            let n = r.value;
            if (typeof n == "string" && (n = [n]), n.length === 0)
                return;
            this.maybeSetNormalizedName(r.name, t);
            let s = (r.op === "a" ? this.headers.get(t) : void 0) || [];
            s.push(...n), this.headers.set(t, s);
            break;
        case "d":
            let i = r.value;
            if (!i)
                this.headers.delete(t), this.normalizedNames.delete(t);
            else {
                let o = this.headers.get(t);
                if (!o)
                    return;
                o = o.filter(c => i.indexOf(c) === -1), o.length === 0 ? (this.headers.delete(t), this.normalizedNames.delete(t)) : this.headers.set(t, o);
            }
            break;
    } }
    addHeaderEntry(r, t) { let n = r.toLowerCase(); this.maybeSetNormalizedName(r, n), this.headers.has(n) ? this.headers.get(n).push(t) : this.headers.set(n, [t]); }
    setHeaderEntries(r, t) { let n = (Array.isArray(t) ? t : [t]).map(i => i.toString()), s = r.toLowerCase(); this.headers.set(s, n), this.maybeSetNormalizedName(r, s); }
    forEach(r) { this.init(), Array.from(this.normalizedNames.keys()).forEach(t => r(this.normalizedNames.get(t), this.headers.get(t))); }
};
var K = class {
    encodeKey(r) { return Pe(r); }
    encodeValue(r) { return Pe(r); }
    decodeKey(r) { return decodeURIComponent(r); }
    decodeValue(r) { return decodeURIComponent(r); }
};
function mt(e, r) { let t = new Map; return e.length > 0 && e.replace(/^\?/, "").split("&").forEach(s => { let i = s.indexOf("="), [o, c] = i == -1 ? [r.decodeKey(s), ""] : [r.decodeKey(s.slice(0, i)), r.decodeValue(s.slice(i + 1))], a = t.get(o) || []; a.push(c), t.set(o, a); }), t; }
var yt = /%(\d[a-f0-9])/gi, gt = { 40: "@", "3A": ":", 24: "$", "2C": ",", "3B": ";", "3D": "=", "3F": "?", "2F": "/" };
function Pe(e) { return encodeURIComponent(e).replace(yt, (r, t) => gt[t] ?? r); }
function G(e) { return `${e}`; }
var M = class e {
    map;
    encoder;
    updates = null;
    cloneFrom = null;
    constructor(r = {}) { if (this.encoder = r.encoder || new K, r.fromString) {
        if (r.fromObject)
            throw new O(2805, !1);
        this.map = mt(r.fromString, this.encoder);
    }
    else
        r.fromObject ? (this.map = new Map, Object.keys(r.fromObject).forEach(t => { let n = r.fromObject[t], s = Array.isArray(n) ? n.map(G) : [G(n)]; this.map.set(t, s); })) : this.map = null; }
    has(r) { return this.init(), this.map.has(r); }
    get(r) { this.init(); let t = this.map.get(r); return t ? t[0] : null; }
    getAll(r) { return this.init(), this.map.get(r) || null; }
    keys() { return this.init(), Array.from(this.map.keys()); }
    append(r, t) { return this.clone({ param: r, value: t, op: "a" }); }
    appendAll(r) { let t = []; return Object.keys(r).forEach(n => { let s = r[n]; Array.isArray(s) ? s.forEach(i => { t.push({ param: n, value: i, op: "a" }); }) : t.push({ param: n, value: s, op: "a" }); }), this.clone(t); }
    set(r, t) { return this.clone({ param: r, value: t, op: "s" }); }
    delete(r, t) { return this.clone({ param: r, value: t, op: "d" }); }
    toString() { return this.init(), this.keys().map(r => { let t = this.encoder.encodeKey(r); return this.map.get(r).map(n => t + "=" + this.encoder.encodeValue(n)).join("&"); }).filter(r => r !== "").join("&"); }
    clone(r) { let t = new e({ encoder: this.encoder }); return t.cloneFrom = this.cloneFrom || this, t.updates = (this.updates || []).concat(r), t; }
    init() { this.map === null && (this.map = new Map), this.cloneFrom !== null && (this.cloneFrom.init(), this.cloneFrom.keys().forEach(r => this.map.set(r, this.cloneFrom.map.get(r))), this.updates.forEach(r => { switch (r.op) {
        case "a":
        case "s":
            let t = (r.op === "a" ? this.map.get(r.param) : void 0) || [];
            t.push(G(r.value)), this.map.set(r.param, t);
            break;
        case "d": if (r.value !== void 0) {
            let n = this.map.get(r.param) || [], s = n.indexOf(G(r.value));
            s !== -1 && n.splice(s, 1), n.length > 0 ? this.map.set(r.param, n) : this.map.delete(r.param);
        }
        else {
            this.map.delete(r.param);
            break;
        }
    } }), this.cloneFrom = this.updates = null); }
}, ne = class {
    defaultValue;
    constructor(r) { this.defaultValue = r; }
}, Y = class {
    map = new Map;
    set(r, t) { return this.map.set(r, t), this; }
    get(r) { return this.map.has(r) || this.map.set(r, r.defaultValue()), this.map.get(r); }
    delete(r) { return this.map.delete(r), this; }
    has(r) { return this.map.has(r); }
    keys() { return this.map.keys(); }
};
function Tt(e) { switch (e) {
    case "DELETE":
    case "GET":
    case "HEAD":
    case "OPTIONS":
    case "JSONP": return !1;
    default: return !0;
} }
function Ne(e) { return typeof ArrayBuffer < "u" && e instanceof ArrayBuffer; }
function Me(e) { return typeof Blob < "u" && e instanceof Blob; }
function Oe(e) { return typeof FormData < "u" && e instanceof FormData; }
function Et(e) { return typeof URLSearchParams < "u" && e instanceof URLSearchParams; }
var z = "Content-Type", q = "Accept", le = "X-Request-URL", Le = "text/plain", Ue = "application/json", Ce = `${Ue}, ${Le}, */*`, x = class e {
    url;
    body = null;
    headers;
    context;
    reportProgress = !1;
    withCredentials = !1;
    credentials;
    keepalive = !1;
    cache;
    priority;
    mode;
    redirect;
    responseType = "json";
    method;
    params;
    urlWithParams;
    transferCache;
    timeout;
    constructor(r, t, n, s) { this.url = t, this.method = r.toUpperCase(); let i; if (Tt(this.method) || s ? (this.body = n !== void 0 ? n : null, i = s) : i = n, i) {
        if (this.reportProgress = !!i.reportProgress, this.withCredentials = !!i.withCredentials, this.keepalive = !!i.keepalive, i.responseType && (this.responseType = i.responseType), i.headers && (this.headers = i.headers), i.context && (this.context = i.context), i.params && (this.params = i.params), i.priority && (this.priority = i.priority), i.cache && (this.cache = i.cache), i.credentials && (this.credentials = i.credentials), typeof i.timeout == "number") {
            if (i.timeout < 1 || !Number.isInteger(i.timeout))
                throw new Error("");
            this.timeout = i.timeout;
        }
        i.mode && (this.mode = i.mode), i.redirect && (this.redirect = i.redirect), this.transferCache = i.transferCache;
    } if (this.headers ??= new R, this.context ??= new Y, !this.params)
        this.params = new M, this.urlWithParams = t;
    else {
        let o = this.params.toString();
        if (o.length === 0)
            this.urlWithParams = t;
        else {
            let c = t.indexOf("?"), a = c === -1 ? "?" : c < t.length - 1 ? "&" : "";
            this.urlWithParams = t + a + o;
        }
    } }
    serializeBody() { return this.body === null ? null : typeof this.body == "string" || Ne(this.body) || Me(this.body) || Oe(this.body) || Et(this.body) ? this.body : this.body instanceof M ? this.body.toString() : typeof this.body == "object" || typeof this.body == "boolean" || Array.isArray(this.body) ? JSON.stringify(this.body) : this.body.toString(); }
    detectContentTypeHeader() { return this.body === null || Oe(this.body) ? null : Me(this.body) ? this.body.type || null : Ne(this.body) ? null : typeof this.body == "string" ? Le : this.body instanceof M ? "application/x-www-form-urlencoded;charset=UTF-8" : typeof this.body == "object" || typeof this.body == "number" || typeof this.body == "boolean" ? Ue : null; }
    clone(r = {}) { let t = r.method || this.method, n = r.url || this.url, s = r.responseType || this.responseType, i = r.keepalive ?? this.keepalive, o = r.priority || this.priority, c = r.cache || this.cache, a = r.mode || this.mode, p = r.redirect || this.redirect, g = r.credentials || this.credentials, m = r.transferCache ?? this.transferCache, E = r.timeout ?? this.timeout, y = r.body !== void 0 ? r.body : this.body, d = r.withCredentials ?? this.withCredentials, P = r.reportProgress ?? this.reportProgress, l = r.headers || this.headers, h = r.params || this.params, T = r.context ?? this.context; return r.setHeaders !== void 0 && (l = Object.keys(r.setHeaders).reduce((N, f) => N.set(f, r.setHeaders[f]), l)), r.setParams && (h = Object.keys(r.setParams).reduce((N, f) => N.set(f, r.setParams[f]), h)), new e(t, n, y, { params: h, headers: l, context: T, reportProgress: P, responseType: s, withCredentials: d, transferCache: m, keepalive: i, cache: c, priority: o, timeout: E, mode: a, redirect: p, credentials: g }); }
}, b = function (e) { return e[e.Sent = 0] = "Sent", e[e.UploadProgress = 1] = "UploadProgress", e[e.ResponseHeader = 2] = "ResponseHeader", e[e.DownloadProgress = 3] = "DownloadProgress", e[e.Response = 4] = "Response", e[e.User = 5] = "User", e; }(b || {}), U = class {
    headers;
    status;
    statusText;
    url;
    ok;
    type;
    constructor(r, t = 200, n = "OK") { this.headers = r.headers || new R, this.status = r.status !== void 0 ? r.status : t, this.statusText = r.statusText || n, this.url = r.url || null, this.ok = this.status >= 200 && this.status < 300; }
}, X = class e extends U {
    constructor(r = {}) { super(r); }
    type = b.ResponseHeader;
    clone(r = {}) { return new e({ headers: r.headers || this.headers, status: r.status !== void 0 ? r.status : this.status, statusText: r.statusText || this.statusText, url: r.url || this.url || void 0 }); }
}, A = class e extends U {
    body;
    constructor(r = {}) { super(r), this.body = r.body !== void 0 ? r.body : null; }
    type = b.Response;
    clone(r = {}) { return new e({ body: r.body !== void 0 ? r.body : this.body, headers: r.headers || this.headers, status: r.status !== void 0 ? r.status : this.status, statusText: r.statusText || this.statusText, url: r.url || this.url || void 0 }); }
}, v = class extends U {
    name = "HttpErrorResponse";
    message;
    error;
    ok = !1;
    constructor(r) { super(r, 0, "Unknown Error"), this.status >= 200 && this.status < 300 ? this.message = `Http failure during parsing for ${r.url || "(unknown url)"}` : this.message = `Http failure response for ${r.url || "(unknown url)"}: ${r.status} ${r.statusText}`, this.error = r.error || null; }
}, ue = 200, wt = 204, Be = function (e) { return e[e.Continue = 100] = "Continue", e[e.SwitchingProtocols = 101] = "SwitchingProtocols", e[e.Processing = 102] = "Processing", e[e.EarlyHints = 103] = "EarlyHints", e[e.Ok = 200] = "Ok", e[e.Created = 201] = "Created", e[e.Accepted = 202] = "Accepted", e[e.NonAuthoritativeInformation = 203] = "NonAuthoritativeInformation", e[e.NoContent = 204] = "NoContent", e[e.ResetContent = 205] = "ResetContent", e[e.PartialContent = 206] = "PartialContent", e[e.MultiStatus = 207] = "MultiStatus", e[e.AlreadyReported = 208] = "AlreadyReported", e[e.ImUsed = 226] = "ImUsed", e[e.MultipleChoices = 300] = "MultipleChoices", e[e.MovedPermanently = 301] = "MovedPermanently", e[e.Found = 302] = "Found", e[e.SeeOther = 303] = "SeeOther", e[e.NotModified = 304] = "NotModified", e[e.UseProxy = 305] = "UseProxy", e[e.Unused = 306] = "Unused", e[e.TemporaryRedirect = 307] = "TemporaryRedirect", e[e.PermanentRedirect = 308] = "PermanentRedirect", e[e.BadRequest = 400] = "BadRequest", e[e.Unauthorized = 401] = "Unauthorized", e[e.PaymentRequired = 402] = "PaymentRequired", e[e.Forbidden = 403] = "Forbidden", e[e.NotFound = 404] = "NotFound", e[e.MethodNotAllowed = 405] = "MethodNotAllowed", e[e.NotAcceptable = 406] = "NotAcceptable", e[e.ProxyAuthenticationRequired = 407] = "ProxyAuthenticationRequired", e[e.RequestTimeout = 408] = "RequestTimeout", e[e.Conflict = 409] = "Conflict", e[e.Gone = 410] = "Gone", e[e.LengthRequired = 411] = "LengthRequired", e[e.PreconditionFailed = 412] = "PreconditionFailed", e[e.PayloadTooLarge = 413] = "PayloadTooLarge", e[e.UriTooLong = 414] = "UriTooLong", e[e.UnsupportedMediaType = 415] = "UnsupportedMediaType", e[e.RangeNotSatisfiable = 416] = "RangeNotSatisfiable", e[e.ExpectationFailed = 417] = "ExpectationFailed", e[e.ImATeapot = 418] = "ImATeapot", e[e.MisdirectedRequest = 421] = "MisdirectedRequest", e[e.UnprocessableEntity = 422] = "UnprocessableEntity", e[e.Locked = 423] = "Locked", e[e.FailedDependency = 424] = "FailedDependency", e[e.TooEarly = 425] = "TooEarly", e[e.UpgradeRequired = 426] = "UpgradeRequired", e[e.PreconditionRequired = 428] = "PreconditionRequired", e[e.TooManyRequests = 429] = "TooManyRequests", e[e.RequestHeaderFieldsTooLarge = 431] = "RequestHeaderFieldsTooLarge", e[e.UnavailableForLegalReasons = 451] = "UnavailableForLegalReasons", e[e.InternalServerError = 500] = "InternalServerError", e[e.NotImplemented = 501] = "NotImplemented", e[e.BadGateway = 502] = "BadGateway", e[e.ServiceUnavailable = 503] = "ServiceUnavailable", e[e.GatewayTimeout = 504] = "GatewayTimeout", e[e.HttpVersionNotSupported = 505] = "HttpVersionNotSupported", e[e.VariantAlsoNegotiates = 506] = "VariantAlsoNegotiates", e[e.InsufficientStorage = 507] = "InsufficientStorage", e[e.LoopDetected = 508] = "LoopDetected", e[e.NotExtended = 510] = "NotExtended", e[e.NetworkAuthenticationRequired = 511] = "NetworkAuthenticationRequired", e; }(Be || {});
function re(e, r) { return { body: r, headers: e.headers, context: e.context, observe: e.observe, params: e.params, reportProgress: e.reportProgress, responseType: e.responseType, withCredentials: e.withCredentials, transferCache: e.transferCache, keepalive: e.keepalive, priority: e.priority, cache: e.cache, mode: e.mode, redirect: e.redirect }; }
var he = (() => { class e {
    handler;
    constructor(t) { this.handler = t; }
    request(t, n, s = {}) { let i; if (t instanceof x)
        i = t;
    else {
        let a;
        s.headers instanceof R ? a = s.headers : a = new R(s.headers);
        let p;
        s.params && (s.params instanceof M ? p = s.params : p = new M({ fromObject: s.params })), i = new x(t, n, s.body !== void 0 ? s.body : null, { headers: a, context: s.context, params: p, reportProgress: s.reportProgress, responseType: s.responseType || "json", withCredentials: s.withCredentials, transferCache: s.transferCache, keepalive: s.keepalive, priority: s.priority, cache: s.cache, mode: s.mode, redirect: s.redirect, credentials: s.credentials });
    } let o = je(i).pipe(ut(a => this.handler.handle(a))); if (t instanceof x || s.observe === "events")
        return o; let c = o.pipe(ht(a => a instanceof A)); switch (s.observe || "body") {
        case "body": switch (i.responseType) {
            case "arraybuffer": return c.pipe($(a => { if (a.body !== null && !(a.body instanceof ArrayBuffer))
                throw new O(2806, !1); return a.body; }));
            case "blob": return c.pipe($(a => { if (a.body !== null && !(a.body instanceof Blob))
                throw new O(2807, !1); return a.body; }));
            case "text": return c.pipe($(a => { if (a.body !== null && typeof a.body != "string")
                throw new O(2808, !1); return a.body; }));
            case "json":
            default: return c.pipe($(a => a.body));
        }
        case "response": return c;
        default: throw new O(2809, !1);
    } }
    delete(t, n = {}) { return this.request("DELETE", t, n); }
    get(t, n = {}) { return this.request("GET", t, n); }
    head(t, n = {}) { return this.request("HEAD", t, n); }
    jsonp(t, n) { return this.request("JSONP", t, { params: new M().append(n, "JSONP_CALLBACK"), observe: "body", responseType: "json" }); }
    options(t, n = {}) { return this.request("OPTIONS", t, n); }
    patch(t, n, s = {}) { return this.request("PATCH", t, re(s, n)); }
    post(t, n, s = {}) { return this.request("POST", t, re(s, n)); }
    put(t, n, s = {}) { return this.request("PUT", t, re(s, n)); }
    static ɵfac = function (n) { return new (n || e)(u.ɵɵinject(F)); };
    static ɵprov = u.ɵɵdefineInjectable({ token: e, factory: e.ɵfac });
} return e; })(), vt = /^\)\]\}',?\n/;
function Ae(e) { if (e.url)
    return e.url; let r = le.toLocaleLowerCase(); return e.headers.get(r); }
var Se = new I(""), W = (() => { class e {
    fetchImpl = w(se, { optional: !0 })?.fetch ?? ((...t) => globalThis.fetch(...t));
    ngZone = w(ct);
    destroyRef = w(dt);
    destroyed = !1;
    constructor() { this.destroyRef.onDestroy(() => { this.destroyed = !0; }); }
    handle(t) { return new de(n => { let s = new AbortController; this.doRequest(t, s.signal, n).then(oe, o => n.error(new v({ error: o }))); let i; return t.timeout && (i = this.ngZone.runOutsideAngular(() => setTimeout(() => { s.signal.aborted || s.abort(new DOMException("signal timed out", "TimeoutError")); }, t.timeout))), () => { i !== void 0 && clearTimeout(i), s.abort(); }; }); }
    doRequest(t, n, s) { return te(this, null, function* () { let i = this.createRequestInit(t), o; try {
        let y = this.ngZone.runOutsideAngular(() => this.fetchImpl(t.urlWithParams, V({ signal: n }, i)));
        Rt(y), s.next({ type: b.Sent }), o = yield y;
    }
    catch (y) {
        s.error(new v({ error: y, status: y.status ?? 0, statusText: y.statusText, url: t.urlWithParams, headers: y.headers }));
        return;
    } let c = new R(o.headers), a = o.statusText, p = Ae(o) ?? t.urlWithParams, g = o.status, m = null; if (t.reportProgress && s.next(new X({ headers: c, status: g, statusText: a, url: p })), o.body) {
        let y = o.headers.get("content-length"), d = [], P = o.body.getReader(), l = 0, h, T, N = typeof Zone < "u" && Zone.current, f = !1;
        if (yield this.ngZone.runOutsideAngular(() => te(this, null, function* () { for (;;) {
            if (this.destroyed) {
                yield P.cancel(), f = !0;
                break;
            }
            let { done: k, value: S } = yield P.read();
            if (k)
                break;
            if (d.push(S), l += S.length, t.reportProgress) {
                T = t.responseType === "text" ? (T ?? "") + (h ??= new TextDecoder).decode(S, { stream: !0 }) : void 0;
                let we = () => s.next({ type: b.DownloadProgress, total: y ? +y : void 0, loaded: l, partialText: T });
                N ? N.run(we) : we();
            }
        } })), f) {
            s.complete();
            return;
        }
        let D = this.concatChunks(d, l);
        try {
            let k = o.headers.get(z) ?? "";
            m = this.parseBody(t, D, k, g);
        }
        catch (k) {
            s.error(new v({ error: k, headers: new R(o.headers), status: o.status, statusText: o.statusText, url: Ae(o) ?? t.urlWithParams }));
            return;
        }
    } g === 0 && (g = m ? ue : 0), g >= 200 && g < 300 ? (s.next(new A({ body: m, headers: c, status: g, statusText: a, url: p })), s.complete()) : s.error(new v({ error: m, headers: c, status: g, statusText: a, url: p })); }); }
    parseBody(t, n, s, i) { switch (t.responseType) {
        case "json":
            let o = new TextDecoder().decode(n).replace(vt, "");
            if (o === "")
                return null;
            try {
                return JSON.parse(o);
            }
            catch (c) {
                if (i < 200 || i >= 300)
                    return o;
                throw c;
            }
        case "text": return new TextDecoder().decode(n);
        case "blob": return new Blob([n], { type: s });
        case "arraybuffer": return n.buffer;
    } }
    createRequestInit(t) { let n = {}, s; if (s = t.credentials, t.withCredentials && (s = "include"), t.headers.forEach((i, o) => n[i] = o.join(",")), t.headers.has(q) || (n[q] = Ce), !t.headers.has(z)) {
        let i = t.detectContentTypeHeader();
        i !== null && (n[z] = i);
    } return { body: t.serializeBody(), method: t.method, headers: n, credentials: s, keepalive: t.keepalive, cache: t.cache, priority: t.priority, mode: t.mode, redirect: t.redirect }; }
    concatChunks(t, n) { let s = new Uint8Array(n), i = 0; for (let o of t)
        s.set(o, i), i += o.length; return s; }
    static ɵfac = function (n) { return new (n || e); };
    static ɵprov = u.ɵɵdefineInjectable({ token: e, factory: e.ɵfac });
} return e; })(), se = class {
};
function oe() { }
function Rt(e) { e.then(oe, oe); }
function ze(e, r) { return r(e); }
function bt(e, r) { return (t, n) => r.intercept(t, { handle: s => e(s, n) }); }
function Pt(e, r, t) { return (n, s) => ce(t, () => r(n, i => e(i, s))); }
var fe = new I(""), J = new I(""), pe = new I(""), me = new I("", { providedIn: "root", factory: () => !0 });
function Nt() { let e = null; return (r, t) => { e === null && (e = (w(fe, { optional: !0 }) ?? []).reduceRight(bt, ze)); let n = w(ke); if (w(me)) {
    let i = n.add();
    return e(r, t).pipe(Fe(i));
}
else
    return e(r, t); }; }
var Z = (() => { class e extends F {
    backend;
    injector;
    chain = null;
    pendingTasks = w(ke);
    contributeToStability = w(me);
    constructor(t, n) { super(), this.backend = t, this.injector = n; }
    handle(t) { if (this.chain === null) {
        let n = Array.from(new Set([...this.injector.get(J), ...this.injector.get(pe, [])]));
        this.chain = n.reduceRight((s, i) => Pt(s, i, this.injector), ze);
    } if (this.contributeToStability) {
        let n = this.pendingTasks.add();
        return this.chain(t, s => this.backend.handle(s)).pipe(Fe(n));
    }
    else
        return this.chain(t, n => this.backend.handle(n)); }
    static ɵfac = function (n) { return new (n || e)(u.ɵɵinject(j), u.ɵɵinject(u.EnvironmentInjector)); };
    static ɵprov = u.ɵɵdefineInjectable({ token: e, factory: e.ɵfac });
} return e; })(), Mt = 0, Ie, Ot = "JSONP injected script did not invoke callback.";
var Q = class {
};
function At() { return typeof window == "object" ? window : {}; }
var ye = (() => { class e {
    callbackMap;
    document;
    resolvedPromise = Promise.resolve();
    constructor(t, n) { this.callbackMap = t, this.document = n; }
    nextCallback() { return `ng_jsonp_callback_${Mt++}`; }
    handle(t) { if (t.method !== "JSONP")
        throw new O(2810, !1); if (t.responseType !== "json")
        throw new O(2811, !1); if (t.headers.keys().length > 0)
        throw new O(2812, !1); return new de(n => { let s = this.nextCallback(), i = t.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, `=${s}$1`), o = this.document.createElement("script"); o.src = i; let c = null, a = !1; this.callbackMap[s] = E => { delete this.callbackMap[s], c = E, a = !0; }; let p = () => { o.removeEventListener("load", g), o.removeEventListener("error", m), o.remove(), delete this.callbackMap[s]; }, g = () => { this.resolvedPromise.then(() => { if (p(), !a) {
        n.error(new v({ url: i, status: 0, statusText: "JSONP Error", error: new Error(Ot) }));
        return;
    } n.next(new A({ body: c, status: ue, statusText: "OK", url: i })), n.complete(); }); }, m = E => { p(), n.error(new v({ error: E, status: 0, statusText: "JSONP Error", url: i })); }; return o.addEventListener("load", g), o.addEventListener("error", m), this.document.body.appendChild(o), n.next({ type: b.Sent }), () => { a || this.removeListeners(o), p(); }; }); }
    removeListeners(t) { Ie ??= this.document.implementation.createHTMLDocument(), Ie.adoptNode(t); }
    static ɵfac = function (n) { return new (n || e)(u.ɵɵinject(Q), u.ɵɵinject(xe)); };
    static ɵprov = u.ɵɵdefineInjectable({ token: e, factory: e.ɵfac });
} return e; })();
function Xe(e, r) { return e.method === "JSONP" ? w(ye).handle(e) : r(e); }
var It = (() => { class e {
    injector;
    constructor(t) { this.injector = t; }
    intercept(t, n) { return ce(this.injector, () => Xe(t, s => n.handle(s))); }
    static ɵfac = function (n) { return new (n || e)(u.ɵɵinject(u.EnvironmentInjector)); };
    static ɵprov = u.ɵɵdefineInjectable({ token: e, factory: e.ɵfac });
} return e; })(), _t = /^\)\]\}',?\n/, Dt = RegExp(`^${le}:`, "m");
function kt(e) { return "responseURL" in e && e.responseURL ? e.responseURL : Dt.test(e.getAllResponseHeaders()) ? e.getResponseHeader(le) : null; }
var ie = (() => { class e {
    xhrFactory;
    constructor(t) { this.xhrFactory = t; }
    handle(t) { if (t.method === "JSONP")
        throw new O(-2800, !1); let n = this.xhrFactory; return (typeof ngServerMode < "u" && ngServerMode && n.ɵloadImpl ? pt(n.ɵloadImpl()) : je(null)).pipe(ft(() => new de(i => { let o = n.build(); if (o.open(t.method, t.urlWithParams), t.withCredentials && (o.withCredentials = !0), t.headers.forEach((l, h) => o.setRequestHeader(l, h.join(","))), t.headers.has(q) || o.setRequestHeader(q, Ce), !t.headers.has(z)) {
        let l = t.detectContentTypeHeader();
        l !== null && o.setRequestHeader(z, l);
    } if (t.timeout && (o.timeout = t.timeout), t.responseType) {
        let l = t.responseType.toLowerCase();
        o.responseType = l !== "json" ? l : "text";
    } let c = t.serializeBody(), a = null, p = () => { if (a !== null)
        return a; let l = o.statusText || "OK", h = new R(o.getAllResponseHeaders()), T = kt(o) || t.url; return a = new X({ headers: h, status: o.status, statusText: l, url: T }), a; }, g = () => { let { headers: l, status: h, statusText: T, url: N } = p(), f = null; h !== wt && (f = typeof o.response > "u" ? o.responseText : o.response), h === 0 && (h = f ? ue : 0); let D = h >= 200 && h < 300; if (t.responseType === "json" && typeof f == "string") {
        let k = f;
        f = f.replace(_t, "");
        try {
            f = f !== "" ? JSON.parse(f) : null;
        }
        catch (S) {
            f = k, D && (D = !1, f = { error: S, text: f });
        }
    } D ? (i.next(new A({ body: f, headers: l, status: h, statusText: T, url: N || void 0 })), i.complete()) : i.error(new v({ error: f, headers: l, status: h, statusText: T, url: N || void 0 })); }, m = l => { let { url: h } = p(), T = new v({ error: l, status: o.status || 0, statusText: o.statusText || "Unknown Error", url: h || void 0 }); i.error(T); }, E = m; t.timeout && (E = l => { let { url: h } = p(), T = new v({ error: new DOMException("Request timed out", "TimeoutError"), status: o.status || 0, statusText: o.statusText || "Request timeout", url: h || void 0 }); i.error(T); }); let y = !1, d = l => { y || (i.next(p()), y = !0); let h = { type: b.DownloadProgress, loaded: l.loaded }; l.lengthComputable && (h.total = l.total), t.responseType === "text" && o.responseText && (h.partialText = o.responseText), i.next(h); }, P = l => { let h = { type: b.UploadProgress, loaded: l.loaded }; l.lengthComputable && (h.total = l.total), i.next(h); }; return o.addEventListener("load", g), o.addEventListener("error", m), o.addEventListener("timeout", E), o.addEventListener("abort", m), t.reportProgress && (o.addEventListener("progress", d), c !== null && o.upload && o.upload.addEventListener("progress", P)), o.send(c), i.next({ type: b.Sent }), () => { o.removeEventListener("error", m), o.removeEventListener("abort", m), o.removeEventListener("load", g), o.removeEventListener("timeout", E), t.reportProgress && (o.removeEventListener("progress", d), c !== null && o.upload && o.upload.removeEventListener("progress", P)), o.readyState !== o.DONE && o.abort(); }; }))); }
    static ɵfac = function (n) { return new (n || e)(u.ɵɵinject(be)); };
    static ɵprov = u.ɵɵdefineInjectable({ token: e, factory: e.ɵfac });
} return e; })(), H = new I(""), Je = "XSRF-TOKEN", Ve = new I("", { providedIn: "root", factory: () => Je }), $e = "X-XSRF-TOKEN", Ge = new I("", { providedIn: "root", factory: () => $e }), C = class {
}, We = (() => { class e {
    doc;
    cookieName;
    lastCookieString = "";
    lastToken = null;
    parseCount = 0;
    constructor(t, n) { this.doc = t, this.cookieName = n; }
    getToken() { if (typeof ngServerMode < "u" && ngServerMode)
        return null; let t = this.doc.cookie || ""; return t !== this.lastCookieString && (this.parseCount++, this.lastToken = Re(t, this.cookieName), this.lastCookieString = t), this.lastToken; }
    static ɵfac = function (n) { return new (n || e)(u.ɵɵinject(xe), u.ɵɵinject(Ve)); };
    static ɵprov = u.ɵɵdefineInjectable({ token: e, factory: e.ɵfac });
} return e; })();
function Ke(e, r) { let t = e.url.toLowerCase(); if (!w(H) || e.method === "GET" || e.method === "HEAD" || t.startsWith("http://") || t.startsWith("https://"))
    return r(e); let n = w(C).getToken(), s = w(Ge); return n != null && !e.headers.has(s) && (e = e.clone({ headers: e.headers.set(s, n) })), r(e); }
var _e = (() => { class e {
    injector;
    constructor(t) { this.injector = t; }
    intercept(t, n) { return ce(this.injector, () => Ke(t, s => n.handle(s))); }
    static ɵfac = function (n) { return new (n || e)(u.ɵɵinject(u.EnvironmentInjector)); };
    static ɵprov = u.ɵɵdefineInjectable({ token: e, factory: e.ɵfac });
} return e; })(), _ = function (e) { return e[e.Interceptors = 0] = "Interceptors", e[e.LegacyInterceptors = 1] = "LegacyInterceptors", e[e.CustomXsrfConfiguration = 2] = "CustomXsrfConfiguration", e[e.NoXsrfProtection = 3] = "NoXsrfProtection", e[e.JsonpSupport = 4] = "JsonpSupport", e[e.RequestsMadeViaParent = 5] = "RequestsMadeViaParent", e[e.Fetch = 6] = "Fetch", e; }(_ || {});
function L(e, r) { return { ɵkind: e, ɵproviders: r }; }
function Ye(...e) { let r = [he, ie, Z, { provide: F, useExisting: Z }, { provide: j, useFactory: () => w(Se, { optional: !0 }) ?? w(ie) }, { provide: J, useValue: Ke, multi: !0 }, { provide: H, useValue: !0 }, { provide: C, useClass: We }]; for (let t of e)
    r.push(...t.ɵproviders); return lt(r); }
function xt(e) { return L(_.Interceptors, e.map(r => ({ provide: J, useValue: r, multi: !0 }))); }
var De = new I("");
function qe() { return L(_.LegacyInterceptors, [{ provide: De, useFactory: Nt }, { provide: J, useExisting: De, multi: !0 }]); }
function ae({ cookieName: e, headerName: r }) { let t = []; return e !== void 0 && t.push({ provide: Ve, useValue: e }), r !== void 0 && t.push({ provide: Ge, useValue: r }), L(_.CustomXsrfConfiguration, t); }
function Ze() { return L(_.NoXsrfProtection, [{ provide: H, useValue: !1 }]); }
function Qe() { return L(_.JsonpSupport, [ye, { provide: Q, useFactory: At }, { provide: J, useValue: Xe, multi: !0 }]); }
function Ft() { return L(_.RequestsMadeViaParent, [{ provide: j, useFactory: () => w(F, { skipSelf: !0, optional: !0 }) }]); }
function jt() { return L(_.Fetch, [W, { provide: Se, useExisting: W }, { provide: j, useExisting: W }]); }
var Lt = (() => { class e {
    static disable() { return { ngModule: e, providers: [Ze().ɵproviders] }; }
    static withOptions(t = {}) { return { ngModule: e, providers: ae(t).ɵproviders }; }
    static ɵfac = function (n) { return new (n || e); };
    static ɵmod = u.ɵɵdefineNgModule({ type: e });
    static ɵinj = u.ɵɵdefineInjector({ providers: [_e, { provide: fe, useExisting: _e, multi: !0 }, { provide: C, useClass: We }, ae({ cookieName: Je, headerName: $e }).ɵproviders, { provide: H, useValue: !0 }] });
} return e; })(), Ut = (() => { class e {
    static ɵfac = function (n) { return new (n || e); };
    static ɵmod = u.ɵɵdefineNgModule({ type: e });
    static ɵinj = u.ɵɵdefineInjector({ providers: [Ye(qe())] });
} return e; })(), Ct = (() => { class e {
    static ɵfac = function (n) { return new (n || e); };
    static ɵmod = u.ɵɵdefineNgModule({ type: e });
    static ɵinj = u.ɵɵdefineInjector({ providers: [Qe().ɵproviders] });
} return e; })();
import { inject as B, Injector as Bt, ɵResourceImpl as St, linkedSignal as ge, computed as zt, signal as Xt, ɵencapsulateResourceError as Jt, ɵRuntimeError as it, InjectionToken as at, ɵperformanceMarkFeature as Vt, APP_BOOTSTRAP_LISTENER as $t, ApplicationRef as Gt, TransferState as Wt, makeStateKey as Kt, ɵtruncateMiddle as wr, ɵformatRuntimeError as vr } from "@angular/core";
import { of as Yt } from "rxjs";
import { tap as qt } from "rxjs/operators";
var Pr = (() => { let e = ee("json"); return e.arrayBuffer = ee("arraybuffer"), e.blob = ee("blob"), e.text = ee("text"), e; })();
function ee(e) { return function (t, n) { let s = n?.injector ?? B(Bt); return new Te(s, () => Zt(t, e), n?.defaultValue, n?.parse, n?.equal); }; }
function Zt(e, r) { let t = typeof e == "function" ? e() : e; if (t === void 0)
    return; typeof t == "string" && (t = { url: t }); let n = t.headers instanceof R ? t.headers : new R(t.headers), s = t.params instanceof M ? t.params : new M({ fromObject: t.params }); return new x(t.method ?? "GET", t.url, t.body ?? null, { headers: n, params: s, reportProgress: t.reportProgress, withCredentials: t.withCredentials, keepalive: t.keepalive, cache: t.cache, priority: t.priority, mode: t.mode, redirect: t.redirect, responseType: r, context: t.context, transferCache: t.transferCache, credentials: t.credentials, timeout: t.timeout }); }
var Te = class extends St {
    client;
    _headers = ge({ source: this.extRequest, computation: () => { } });
    _progress = ge({ source: this.extRequest, computation: () => { } });
    _statusCode = ge({ source: this.extRequest, computation: () => { } });
    headers = zt(() => this.status() === "resolved" || this.status() === "error" ? this._headers() : void 0);
    progress = this._progress.asReadonly();
    statusCode = this._statusCode.asReadonly();
    constructor(r, t, n, s, i) { super(t, ({ params: o, abortSignal: c }) => { let a, p = () => a.unsubscribe(); c.addEventListener("abort", p); let g = Xt({ value: void 0 }), m, E = new Promise(d => m = d), y = d => { g.set(d), m?.(g), m = void 0; }; return a = this.client.request(o).subscribe({ next: d => { switch (d.type) {
            case b.Response:
                this._headers.set(d.headers), this._statusCode.set(d.status);
                try {
                    y({ value: s ? s(d.body) : d.body });
                }
                catch (P) {
                    y({ error: Jt(P) });
                }
                break;
            case b.DownloadProgress:
                this._progress.set(d);
                break;
        } }, error: d => { d instanceof v && (this._headers.set(d.headers), this._statusCode.set(d.status)), y({ error: d }), c.removeEventListener("abort", p); }, complete: () => { m && y({ error: new it(991, !1) }), c.removeEventListener("abort", p); } }), E; }, n, i, r), this.client = r.get(he); }
    set(r) { super.set(r), this._headers.set(void 0), this._progress.set(void 0), this._statusCode.set(void 0); }
}, Qt = new at(""), He = "b", et = "h", tt = "s", rt = "st", nt = "u", st = "rt", Ee = new at(""), Ht = ["GET", "HEAD"];
function er(e, r) { let y = B(Ee), { isCacheActive: t } = y, n = ve(y, ["isCacheActive"]), { transferCache: s, method: i } = e; if (!t || s === !1 || i === "POST" && !n.includePostRequests && !s || i !== "POST" && !Ht.includes(i) || !n.includeRequestsWithAuthHeaders && tr(e) || n.filter?.(e) === !1)
    return r(e); let o = B(Wt), c = B(Qt, { optional: !0 }); if (typeof ngServerMode < "u" && !ngServerMode && c)
    throw new it(2803, !1); let a = typeof ngServerMode < "u" && ngServerMode && c ? or(e.url, c) : e.url, p = nr(e, a), g = o.get(p, null), m = n.includeHeaders; if (typeof s == "object" && s.includeHeaders && (m = s.includeHeaders), g) {
    let { [He]: d, [st]: P, [et]: l, [tt]: h, [rt]: T, [nt]: N } = g, f = d;
    switch (P) {
        case "arraybuffer":
            f = new TextEncoder().encode(d).buffer;
            break;
        case "blob":
            f = new Blob([d]);
            break;
    }
    let D = new R(l);
    return Yt(new A({ body: f, headers: D, status: h, statusText: T, url: N }));
} let E = r(e); return typeof ngServerMode < "u" && ngServerMode ? E.pipe(qt(d => { d instanceof A && o.set(p, { [He]: d.body, [et]: rr(d.headers, m), [tt]: d.status, [rt]: d.statusText, [nt]: a, [st]: e.responseType }); })) : E; }
function tr(e) { return e.headers.has("authorization") || e.headers.has("proxy-authorization"); }
function rr(e, r) { if (!r)
    return {}; let t = {}; for (let n of r) {
    let s = e.getAll(n);
    s !== null && (t[n] = s);
} return t; }
function ot(e) { return [...e.keys()].sort().map(r => `${r}=${e.getAll(r)}`).join("&"); }
function nr(e, r) { let { params: t, method: n, responseType: s } = e, i = ot(t), o = e.serializeBody(); o instanceof URLSearchParams ? o = ot(o) : typeof o != "string" && (o = ""); let c = [n, s, r, o, i].join("|"), a = sr(c); return Kt(a); }
function sr(e) { let r = 0; for (let t of e)
    r = Math.imul(31, r) + t.charCodeAt(0) << 0; return r += 2147483648, r.toString(); }
function Nr(e) { return [{ provide: Ee, useFactory: () => (Vt("NgHttpTransferCache"), V({ isCacheActive: !0 }, e)) }, { provide: pe, useValue: er, multi: !0 }, { provide: $t, multi: !0, useFactory: () => { let r = B(Gt), t = B(Ee); return () => { r.whenStable().then(() => { t.isCacheActive = !1; }); }; } }]; }
function or(e, r) { let t = new URL(e, "resolve://").origin, n = r[t]; return n ? e.replace(t, n) : e; }
export { W as FetchBackend, fe as HTTP_INTERCEPTORS, Qt as HTTP_TRANSFER_CACHE_ORIGIN_MAP, j as HttpBackend, he as HttpClient, Ct as HttpClientJsonpModule, Ut as HttpClientModule, Lt as HttpClientXsrfModule, Y as HttpContext, ne as HttpContextToken, v as HttpErrorResponse, b as HttpEventType, _ as HttpFeatureKind, F as HttpHandler, X as HttpHeaderResponse, R as HttpHeaders, M as HttpParams, x as HttpRequest, A as HttpResponse, U as HttpResponseBase, Be as HttpStatusCode, K as HttpUrlEncodingCodec, ie as HttpXhrBackend, C as HttpXsrfTokenExtractor, ye as JsonpClientBackend, It as JsonpInterceptor, Pr as httpResource, Ye as provideHttpClient, jt as withFetch, xt as withInterceptors, qe as withInterceptorsFromDi, Qe as withJsonpSupport, Ze as withNoXsrfProtection, Ft as withRequestsMadeViaParent, ae as withXsrfConfiguration, pe as ɵHTTP_ROOT_INTERCEPTOR_FNS, Z as ɵHttpInterceptingHandler, Z as ɵHttpInterceptorHandler, me as ɵREQUESTS_CONTRIBUTE_TO_STABILITY, Nr as ɵwithHttpTransferCache }; /*! Bundled license information:

@angular/common/fesm2022/module.mjs:
@angular/common/fesm2022/http.mjs:
  (**
   * @license Angular v20.1.7
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
