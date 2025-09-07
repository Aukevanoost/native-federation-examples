import { a as ec, b as Ke, f as tc } from "@nf-internal/chunk-NBAXJWZT";
import { C as rc, D as oc, E as wp, F as Np, G as _p, H as MC, b as re, c as A, d as gi, g as Vr, h as mi, o as Zt, p as bn, q as Rn, r as At, u as yi, v as Cp, w as Mp, z as nc } from "@nf-internal/chunk-TMJ3XJ2K";
import { a as U, b as Ce, d as Rt } from "@nf-internal/chunk-4CLCTAJ7";
import { BehaviorSubject as wC, Observable as NC } from "rxjs";
import { setActiveConsumer as An } from "@angular/core/primitives/signals";
import { isNotFound as _C } from "@angular/core/primitives/di";
var Ii = "https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss", T = class extends Error {
    code;
    constructor(t, n) { super(xn(t, n)), this.code = t; }
};
function SC(e) { return `NG0${Math.abs(e)}`; }
function xn(e, t) { return `${SC(e)}${t ? ": " + t : ""}`; }
var Se = globalThis;
function P(e) { for (let t in e)
    if (e[t] === P)
        return t; throw Error(""); }
function Ap(e, t) { for (let n in t)
    t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]); }
function He(e) {
    if (typeof e == "string")
        return e;
    if (Array.isArray(e))
        return `[${e.map(He).join(", ")}]`;
    if (e == null)
        return "" + e;
    let t = e.overriddenName || e.name;
    if (t)
        return `${t}`;
    let n = e.toString();
    if (n == null)
        return "" + n;
    let r = n.indexOf(`
`);
    return r >= 0 ? n.slice(0, r) : n;
}
function Di(e, t) { return e ? t ? `${e} ${t}` : e : t || ""; }
function bC(e, t = 100) { if (!e || t < 1 || e.length <= t)
    return e; if (t == 1)
    return e.substring(0, 1) + "..."; let n = Math.round(t / 2); return e.substring(0, n) + "..." + e.substring(e.length - n); }
var RC = P({ __forward_ref__: P });
function Gr(e) { return e.__forward_ref__ = Gr, e.toString = function () { return He(this()); }, e; }
function O(e) { return Wr(e) ? e() : e; }
function Wr(e) { return typeof e == "function" && e.hasOwnProperty(RC) && e.__forward_ref__ === Gr; }
function Op(e, t, n) { e != t && zr(n, e, t, "=="); }
function xp(e, t) { e == null && zr(t, e, null, "!="); }
function zr(e, t, n, r) { throw new Error(`ASSERTION ERROR: ${e}` + (r == null ? "" : ` [Expected=> ${n} ${r} ${t} <=Actual]`)); }
function F(e) { return { token: e.token, providedIn: e.providedIn || null, factory: e.factory, value: void 0 }; }
var AC = F;
function Qr(e) { return { providers: e.providers || [], imports: e.imports || [] }; }
function Zr(e) { return xC(e, kn); }
function OC(e) { return Zr(e) !== null; }
function xC(e, t) { return e.hasOwnProperty(t) && e[t] || null; }
function kC(e) { let t = e?.[kn] ?? null; return t || null; }
function sc(e) { return e && e.hasOwnProperty(Ur) ? e[Ur] : null; }
var kn = P({ \u0275prov: P }), Ur = P({ \u0275inj: P }), C = class {
    _desc;
    ngMetadataName = "InjectionToken";
    \u0275prov;
    constructor(t, n) { this._desc = t, this.\u0275prov = void 0, typeof n == "number" ? this.__NG_ELEMENT_ID__ = n : n !== void 0 && (this.\u0275prov = F({ token: this, providedIn: n.providedIn || "root", factory: n.factory })); }
    get multi() { return this; }
    toString() { return `InjectionToken ${this._desc}`; }
}, Sp;
function PC(e) { zr("setInjectorProfilerContext should never be called in production mode"); let t = Sp; return Sp = e, t; }
function mc(e) { return e && !!e.\u0275providers; }
var en = P({ \u0275cmp: P }), Yr = P({ \u0275dir: P }), Kr = P({ \u0275pipe: P }), Ti = P({ \u0275mod: P }), Je = P({ \u0275fac: P }), tn = P({ __NG_ELEMENT_ID__: P }), bp = P({ __NG_ENV_ID__: P });
function _(e) { return typeof e == "string" ? e : e == null ? "" : String(e); }
function Ee(e) { return typeof e == "function" ? e.name || e.toString() : typeof e == "object" && e != null && typeof e.type == "function" ? e.type.name || e.type.toString() : _(e); }
var yc = P({ ngErrorCode: P }), kp = P({ ngErrorMessage: P }), Br = P({ ngTokenPath: P });
function vc(e, t) { return Pp("", -200, t); }
function Ci(e, t) { throw new T(-201, !1); }
function LC(e, t) { e[Br] ??= []; let n = e[Br], r; typeof t == "object" && "multi" in t && t?.multi === !0 ? (xp(t.provide, "Token with multi: true should have a provide property"), r = Ee(t.provide)) : r = Ee(t), n[0] !== r && e[Br].unshift(r); }
function FC(e, t) { let n = e[Br], r = e[yc], o = e[kp] || e.message; return e.message = VC(o, r, n, t), e; }
function Pp(e, t, n) { let r = new T(t, e); return r[yc] = t, r[kp] = e, n && (r[Br] = n), r; }
function jC(e) { return e[yc]; }
function VC(e, t, n = [], r = null) { let o = ""; n && n.length > 1 && (o = ` Path: ${n.join(" -> ")}.`); let i = r ? ` Source: ${r}.` : ""; return xn(t, `${e}${i}${o}`); }
var ac;
function Lp() { return ac; }
function ve(e) { let t = ac; return ac = e, t; }
function Ec(e, t, n) { let r = Zr(e); if (r && r.providedIn == "root")
    return r.value === void 0 ? r.value = r.factory() : r.value; if (n & 8)
    return null; if (t !== void 0)
    return t; Ci(e, "Injector"); }
var HC = {}, Yt = HC, cc = "__NG_DI_FLAG__", lc = class {
    injector;
    constructor(t) { this.injector = t; }
    retrieve(t, n) { let r = Kt(n) || 0; try {
        return this.injector.get(t, r & 8 ? null : Yt, r);
    }
    catch (o) {
        if (tc(o))
            return o;
        throw o;
    } }
};
function BC(e, t = 0) { let n = ec(); if (n === void 0)
    throw new T(-203, !1); if (n === null)
    return Ec(e, void 0, t); {
    let r = UC(t), o = n.retrieve(e, r);
    if (tc(o)) {
        if (r.optional)
            return null;
        throw o;
    }
    return o;
} }
function le(e, t = 0) { return (Lp() || BC)(O(e), t); }
function Mi(e) { throw new T(202, !1); }
function D(e, t) { return le(e, Kt(t)); }
function Kt(e) { return typeof e > "u" || typeof e == "number" ? e : 0 | (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4); }
function UC(e) { return { optional: !!(e & 8), host: !!(e & 1), self: !!(e & 2), skipSelf: !!(e & 4) }; }
function uc(e) { let t = []; for (let n = 0; n < e.length; n++) {
    let r = O(e[n]);
    if (Array.isArray(r)) {
        if (r.length === 0)
            throw new T(900, !1);
        let o, i = 0;
        for (let s = 0; s < r.length; s++) {
            let a = r[s], c = $C(a);
            typeof c == "number" ? c === -1 ? o = a.token : i |= c : o = a;
        }
        t.push(le(o, i));
    }
    else
        t.push(le(r));
} return t; }
function Pn(e, t) { return e[cc] = t, e.prototype[cc] = t, e; }
function $C(e) { return e[cc]; }
function Ot(e, t) { let n = e.hasOwnProperty(Je); return n ? e[Je] : null; }
function Fp(e, t, n) { if (e.length !== t.length)
    return !1; for (let r = 0; r < e.length; r++) {
    let o = e[r], i = t[r];
    if (n && (o = n(o), i = n(i)), i !== o)
        return !1;
} return !0; }
function Be(e) { return e.flat(Number.POSITIVE_INFINITY); }
function wi(e, t) { e.forEach(n => Array.isArray(n) ? wi(n, t) : t(n)); }
function Ic(e, t, n) { t >= e.length ? e.push(n) : e.splice(t, 0, n); }
function Jr(e, t) { return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0]; }
function Xr(e, t) { let n = []; for (let r = 0; r < e; r++)
    n.push(t); return n; }
function Dc(e, t, n) { let r = e.length - n; for (; t < r;)
    e[t] = e[t + n], t++; for (; n--;)
    e.pop(); }
function Tc(e, t, n, r) { let o = e.length; if (o == t)
    e.push(n, r);
else if (o === 1)
    e.push(r, e[0]), e[0] = n;
else {
    for (o--, e.push(e[o - 1], e[o]); o > t;) {
        let i = o - 2;
        e[o] = e[i], o--;
    }
    e[t] = n, e[t + 1] = r;
} }
function eo(e, t, n) { let r = Ln(e, t); return r >= 0 ? e[r | 1] = n : (r = ~r, Tc(e, r, t, n)), r; }
function Ni(e, t) { let n = Ln(e, t); if (n >= 0)
    return e[n | 1]; }
function Ln(e, t) { return qC(e, t, 1); }
function qC(e, t, n) { let r = 0, o = e.length >> n; for (; o !== r;) {
    let i = r + (o - r >> 1), s = e[i << n];
    if (t === s)
        return i << n;
    s > t ? o = i : r = i + 1;
} return ~(o << n); }
var ke = {}, k = [], Pe = new C(""), Cc = new C("", -1), Mc = new C(""), $r = class {
    get(t, n = Yt) { if (n === Yt) {
        let o = Pp("", -201);
        throw o.name = "\u0275NotFound", o;
    } return n; }
};
function nn(e) { return e[Ti] || null; }
function _i(e) { let t = nn(e); if (!t)
    throw new T(915, !1); return t; }
function $(e) { return e[en] || null; }
function be(e) { return e[Yr] || null; }
function Ue(e) { return e[Kr] || null; }
function to(e) { let t = $(e) || be(e) || Ue(e); return t !== null && t.standalone; }
function $e(e) { return { \u0275providers: e }; }
function jp(e) { return $e([{ provide: Pe, multi: !0, useValue: e }]); }
function Vp(...e) { return { \u0275providers: Si(!0, e), \u0275fromNgModule: !0 }; }
function Si(e, ...t) { let n = [], r = new Set, o, i = s => { n.push(s); }; return wi(t, s => { let a = s; Ei(a, i, [], r) && (o ||= [], o.push(a)); }), o !== void 0 && Hp(o, i), n; }
function Hp(e, t) { for (let n = 0; n < e.length; n++) {
    let { ngModule: r, providers: o } = e[n];
    wc(o, i => { t(i, r); });
} }
function Ei(e, t, n, r) { if (e = O(e), !e)
    return !1; let o = null, i = sc(e), s = !i && $(e); if (!i && !s) {
    let c = e.ngModule;
    if (i = sc(c), i)
        o = c;
    else
        return !1;
}
else {
    if (s && !s.standalone)
        return !1;
    o = e;
} let a = r.has(o); if (s) {
    if (a)
        return !1;
    if (r.add(o), s.dependencies) {
        let c = typeof s.dependencies == "function" ? s.dependencies() : s.dependencies;
        for (let l of c)
            Ei(l, t, n, r);
    }
}
else if (i) {
    if (i.imports != null && !a) {
        r.add(o);
        let l;
        try {
            wi(i.imports, u => { Ei(u, t, n, r) && (l ||= [], l.push(u)); });
        }
        finally { }
        l !== void 0 && Hp(l, t);
    }
    if (!a) {
        let l = Ot(o) || (() => new o);
        t({ provide: o, useFactory: l, deps: k }, o), t({ provide: Mc, useValue: o, multi: !0 }, o), t({ provide: Pe, useValue: () => le(o), multi: !0 }, o);
    }
    let c = i.providers;
    if (c != null && !a) {
        let l = e;
        wc(c, u => { t(u, l); });
    }
}
else
    return !1; return o !== e && e.providers !== void 0; }
function wc(e, t) { for (let n of e)
    mc(n) && (n = n.\u0275providers), Array.isArray(n) ? wc(n, t) : t(n); }
var GC = P({ provide: String, useValue: P });
function Bp(e) { return e !== null && typeof e == "object" && GC in e; }
function WC(e) { return !!(e && e.useExisting); }
function zC(e) { return !!(e && e.useFactory); }
function Jt(e) { return typeof e == "function"; }
function Up(e) { return !!e.useClass; }
var Nc = new C(""), vi = {}, Rp = {}, ic;
function Fn() { return ic === void 0 && (ic = new $r), ic; }
var _e = class {
}, Xt = class extends _e {
    parent;
    source;
    scopes;
    records = new Map;
    _ngOnDestroyHooks = new Set;
    _onDestroyHooks = [];
    get destroyed() { return this._destroyed; }
    _destroyed = !1;
    injectorDefTypes;
    constructor(t, n, r, o) { super(), this.parent = n, this.source = r, this.scopes = o, fc(t, s => this.processProvider(s)), this.records.set(Cc, On(void 0, this)), o.has("environment") && this.records.set(_e, On(void 0, this)); let i = this.records.get(Nc); i != null && typeof i.value == "string" && this.scopes.add(i.value), this.injectorDefTypes = new Set(this.get(Mc, k, { self: !0 })); }
    retrieve(t, n) { let r = Kt(n) || 0; try {
        return this.get(t, Yt, r);
    }
    catch (o) {
        if (_C(o))
            return o;
        throw o;
    } }
    destroy() { Hr(this), this._destroyed = !0; let t = An(null); try {
        for (let r of this._ngOnDestroyHooks)
            r.ngOnDestroy();
        let n = this._onDestroyHooks;
        this._onDestroyHooks = [];
        for (let r of n)
            r();
    }
    finally {
        this.records.clear(), this._ngOnDestroyHooks.clear(), this.injectorDefTypes.clear(), An(t);
    } }
    onDestroy(t) { return Hr(this), this._onDestroyHooks.push(t), () => this.removeOnDestroy(t); }
    runInContext(t) { Hr(this); let n = Ke(this), r = ve(void 0), o; try {
        return t();
    }
    finally {
        Ke(n), ve(r);
    } }
    get(t, n = Yt, r) { if (Hr(this), t.hasOwnProperty(bp))
        return t[bp](this); let o = Kt(r), i, s = Ke(this), a = ve(void 0); try {
        if (!(o & 4)) {
            let l = this.records.get(t);
            if (l === void 0) {
                let u = JC(t) && Zr(t);
                u && this.injectableDefInScope(u) ? l = On(dc(t), vi) : l = null, this.records.set(t, l);
            }
            if (l != null)
                return this.hydrate(t, l, o);
        }
        let c = o & 2 ? Fn() : this.parent;
        return n = o & 8 && n === Yt ? null : n, c.get(t, n);
    }
    catch (c) {
        let l = jC(c);
        throw l === -200 || l === -201 ? new T(l, null) : c;
    }
    finally {
        ve(a), Ke(s);
    } }
    resolveInjectorInitializers() { let t = An(null), n = Ke(this), r = ve(void 0), o; try {
        let i = this.get(Pe, k, { self: !0 });
        for (let s of i)
            s();
    }
    finally {
        Ke(n), ve(r), An(t);
    } }
    toString() { let t = [], n = this.records; for (let r of n.keys())
        t.push(He(r)); return `R3Injector[${t.join(", ")}]`; }
    processProvider(t) { t = O(t); let n = Jt(t) ? t : O(t && t.provide), r = ZC(t); if (!Jt(t) && t.multi === !0) {
        let o = this.records.get(n);
        o || (o = On(void 0, vi, !0), o.factory = () => uc(o.multi), this.records.set(n, o)), n = t, o.multi.push(t);
    } this.records.set(n, r); }
    hydrate(t, n, r) { let o = An(null); try {
        if (n.value === Rp)
            throw vc(He(t));
        return n.value === vi && (n.value = Rp, n.value = n.factory(void 0, r)), typeof n.value == "object" && n.value && KC(n.value) && this._ngOnDestroyHooks.add(n.value), n.value;
    }
    finally {
        An(o);
    } }
    injectableDefInScope(t) { if (!t.providedIn)
        return !1; let n = O(t.providedIn); return typeof n == "string" ? n === "any" || this.scopes.has(n) : this.injectorDefTypes.has(n); }
    removeOnDestroy(t) { let n = this._onDestroyHooks.indexOf(t); n !== -1 && this._onDestroyHooks.splice(n, 1); }
};
function dc(e) { let t = Zr(e), n = t !== null ? t.factory : Ot(e); if (n !== null)
    return n; if (e instanceof C)
    throw new T(204, !1); if (e instanceof Function)
    return QC(e); throw new T(204, !1); }
function QC(e) { if (e.length > 0)
    throw new T(204, !1); let n = kC(e); return n !== null ? () => n.factory(e) : () => new e; }
function ZC(e) { if (Bp(e))
    return On(void 0, e.useValue); {
    let t = _c(e);
    return On(t, vi);
} }
function _c(e, t, n) { let r; if (Jt(e)) {
    let o = O(e);
    return Ot(o) || dc(o);
}
else if (Bp(e))
    r = () => O(e.useValue);
else if (zC(e))
    r = () => e.useFactory(...uc(e.deps || []));
else if (WC(e))
    r = (o, i) => le(O(e.useExisting), i !== void 0 && i & 8 ? 8 : void 0);
else {
    let o = O(e && (e.useClass || e.provide));
    if (YC(e))
        r = () => new o(...uc(e.deps));
    else
        return Ot(o) || dc(o);
} return r; }
function Hr(e) { if (e.destroyed)
    throw new T(205, !1); }
function On(e, t, n = !1) { return { factory: e, value: t, multi: n ? [] : void 0 }; }
function YC(e) { return !!e.deps; }
function KC(e) { return e !== null && typeof e == "object" && typeof e.ngOnDestroy == "function"; }
function JC(e) { return typeof e == "function" || typeof e == "object" && e.ngMetadataName === "InjectionToken"; }
function fc(e, t) { for (let n of e)
    Array.isArray(n) ? fc(n, t) : n && mc(n) ? fc(n.\u0275providers, t) : t(n); }
function bi(e, t) { let n; e instanceof Xt ? (Hr(e), n = e) : n = new lc(e); let r, o = Ke(n), i = ve(void 0); try {
    return t();
}
finally {
    Ke(o), ve(i);
} }
function Ri() { return Lp() !== void 0 || ec() != null; }
function XC(e) { if (!Ri())
    throw new T(-203, !1); }
var H = 0, y = 1, M = 2, q = 3, ue = 4, ie = 5, se = 6, xt = 7, B = 8, K = 9, qe = 10, S = 11, kt = 12, no = 13, rn = 14, J = 15, Pt = 16, on = 17, et = 18, jn = 19, Sc = 20, ut = 21, Ai = 22, ft = 23, Re = 24, sn = 25, E = 26, bc = 1, Ae = 6, Ge = 7, ro = 8, an = 9, W = 10;
function X(e) { return Array.isArray(e) && typeof e[bc] == "object"; }
function Z(e) { return Array.isArray(e) && e[bc] === !0; }
function Rc(e) { return (e.flags & 4) !== 0; }
function Oe(e) { return e.componentOffset > -1; }
function Vn(e) { return (e.flags & 1) === 1; }
function we(e) { return !!e.template; }
function tt(e) { return (e[M] & 512) !== 0; }
function Ac(e) { return (e.type & 16) === 16; }
function $p(e) { return (e[M] & 32) === 32; }
function nt(e) { return (e[M] & 256) === 256; }
var Oc = "svg", xc = "math";
function x(e) { for (; Array.isArray(e);)
    e = e[H]; return e; }
function oo(e) { for (; Array.isArray(e);) {
    if (typeof e[bc] == "object")
        return e;
    e = e[H];
} return null; }
function cn(e, t) { return x(t[e]); }
function xe(e, t) { return x(t[e.index]); }
function qp(e, t) { let n = e === null ? -1 : e.index; return n !== -1 ? x(t[n]) : null; }
function pt(e, t) { return e.data[t]; }
function Lt(e, t) { return e[t]; }
function io(e, t, n, r) { n >= e.data.length && (e.data[n] = null, e.blueprint[n] = null), t[n] = r; }
function he(e, t) { let n = t[e]; return X(n) ? n : n[H]; }
function Gp(e) { return (e[M] & 4) === 4; }
function Oi(e) { return (e[M] & 128) === 128; }
function Wp(e) { return Z(e[q]); }
function de(e, t) { return t == null ? null : e[t]; }
function kc(e) { e[on] = 0; }
function xi(e) { e[M] & 1024 || (e[M] |= 1024, Oi(e) && Ft(e)); }
function Pc(e, t) { for (; e > 0;)
    t = t[rn], e--; return t; }
function Hn(e) { return !!(e[M] & 9216 || e[Re]?.dirty); }
function ki(e) { e[qe].changeDetectionScheduler?.notify(8), e[M] & 64 && (e[M] |= 1024), Hn(e) && Ft(e); }
function Ft(e) { e[qe].changeDetectionScheduler?.notify(0); let t = dt(e); for (; t !== null && !(t[M] & 8192 || (t[M] |= 8192, !Oi(t)));)
    t = dt(t); }
function so(e, t) { if (nt(e))
    throw new T(911, !1); e[ut] === null && (e[ut] = []), e[ut].push(t); }
function Pi(e, t) { if (e[ut] === null)
    return; let n = e[ut].indexOf(t); n !== -1 && e[ut].splice(n, 1); }
function dt(e) { let t = e[q]; return Z(t) ? t[q] : t; }
function Lc(e) { return e[xt] ??= []; }
function Fc(e) { return e.cleanup ??= []; }
function zp(e, t, n, r) { let o = Lc(t); o.push(n), e.firstCreatePass && Fc(e).push(r, o.length - 1); }
var N = { lFrame: th(null), bindingsEnabled: !0, skipHydrationRootTNode: null }, ao = (function (e) { return e[e.Off = 0] = "Off", e[e.Exhaustive = 1] = "Exhaustive", e[e.OnlyDirtyViews = 2] = "OnlyDirtyViews", e; })(ao || {}), eM = 0, pc = !1;
function Qp() { return N.lFrame.elementDepthCount; }
function Zp() { N.lFrame.elementDepthCount++; }
function jc() { N.lFrame.elementDepthCount--; }
function Li() { return N.bindingsEnabled; }
function co() { return N.skipHydrationRootTNode !== null; }
function Vc(e) { return N.skipHydrationRootTNode === e; }
function Hc() { N.bindingsEnabled = !0; }
function Yp(e) { N.skipHydrationRootTNode = e; }
function Bc() { N.bindingsEnabled = !1; }
function Uc() { N.skipHydrationRootTNode = null; }
function g() { return N.lFrame.lView; }
function R() { return N.lFrame.tView; }
function $c(e) { return N.lFrame.contextLView = e, e[B]; }
function qc(e) { return N.lFrame.contextLView = null, e; }
function b() { let e = Gc(); for (; e !== null && e.type === 64;)
    e = e.parent; return e; }
function Gc() { return N.lFrame.currentTNode; }
function Bn() { let e = N.lFrame, t = e.currentTNode; return e.isParent ? t : t.parent; }
function rt(e, t) { let n = N.lFrame; n.currentTNode = e, n.isParent = t; }
function Wc() { return N.lFrame.isParent; }
function zc() { N.lFrame.isParent = !1; }
function Qc() { return N.lFrame.contextLView; }
function Zc(e) { zr("Must never be called in production mode"), eM = e; }
function Yc() { return pc; }
function Un(e) { let t = pc; return pc = e, t; }
function ge() { let e = N.lFrame, t = e.bindingRootIndex; return t === -1 && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t; }
function ot() { return N.lFrame.bindingIndex; }
function Kc(e) { return N.lFrame.bindingIndex = e; }
function Ie() { return N.lFrame.bindingIndex++; }
function it(e) { let t = N.lFrame, n = t.bindingIndex; return t.bindingIndex = t.bindingIndex + e, n; }
function Kp() { return N.lFrame.inI18n; }
function Jc(e) { N.lFrame.inI18n = e; }
function Jp(e, t) { let n = N.lFrame; n.bindingIndex = n.bindingRootIndex = e, Fi(t); }
function Xp() { return N.lFrame.currentDirectiveIndex; }
function Fi(e) { N.lFrame.currentDirectiveIndex = e; }
function ji(e) { let t = N.lFrame.currentDirectiveIndex; return t === -1 ? null : e[t]; }
function Vi() { return N.lFrame.currentQueryIndex; }
function lo(e) { N.lFrame.currentQueryIndex = e; }
function tM(e) { let t = e[y]; return t.type === 2 ? t.declTNode : t.type === 1 ? e[ie] : null; }
function Xc(e, t, n) { if (n & 4) {
    let o = t, i = e;
    for (; o = o.parent, o === null && !(n & 1);)
        if (o = tM(i), o === null || (i = i[rn], o.type & 10))
            break;
    if (o === null)
        return !1;
    t = o, e = i;
} let r = N.lFrame = eh(); return r.currentTNode = t, r.lView = e, !0; }
function Hi(e) { let t = eh(), n = e[y]; N.lFrame = t, t.currentTNode = n.firstChild, t.lView = e, t.tView = n, t.contextLView = e, t.bindingIndex = n.bindingStartIndex, t.inI18n = !1; }
function eh() { let e = N.lFrame, t = e === null ? null : e.child; return t === null ? th(e) : t; }
function th(e) { let t = { currentTNode: null, isParent: !0, lView: null, tView: null, selectedIndex: -1, contextLView: null, elementDepthCount: 0, currentNamespace: null, currentDirectiveIndex: -1, bindingRootIndex: -1, bindingIndex: -1, currentQueryIndex: 0, parent: e, child: null, inI18n: !1 }; return e !== null && (e.child = t), t; }
function nh() { let e = N.lFrame; return N.lFrame = e.parent, e.currentTNode = null, e.lView = null, e; }
var el = nh;
function Bi() { let e = nh(); e.isParent = !0, e.tView = null, e.selectedIndex = -1, e.contextLView = null, e.elementDepthCount = 0, e.currentDirectiveIndex = -1, e.currentNamespace = null, e.bindingRootIndex = -1, e.bindingIndex = -1, e.currentQueryIndex = 0; }
function rh(e) { return (N.lFrame.contextLView = Pc(e, N.lFrame.contextLView))[B]; }
function ae() { return N.lFrame.selectedIndex; }
function jt(e) { N.lFrame.selectedIndex = e; }
function Le() { let e = N.lFrame; return pt(e.tView, e.selectedIndex); }
function tl() { N.lFrame.currentNamespace = Oc; }
function nl() { N.lFrame.currentNamespace = xc; }
function rl() { nM(); }
function nM() { N.lFrame.currentNamespace = null; }
function ol() { return N.lFrame.currentNamespace; }
var oh = !0;
function uo() { return oh; }
function We(e) { oh = e; }
function hc(e, t = null, n = null, r) { let o = il(e, t, n, r); return o.resolveInjectorInitializers(), o; }
function il(e, t = null, n = null, r, o = new Set) { let i = [n || k, Vp(e)]; return r = r || (typeof e == "object" ? void 0 : He(e)), new Xt(i, t || Fn(), r || null, o); }
var oe = class e {
    static THROW_IF_NOT_FOUND = Yt;
    static NULL = new $r;
    static create(t, n) { if (Array.isArray(t))
        return hc({ name: "" }, n, t, ""); {
        let r = t.name ?? "";
        return hc({ name: r }, t.parent, t.providers, r);
    } }
    static \u0275prov = F({ token: e, providedIn: "any", factory: () => le(Cc) });
    static __NG_ELEMENT_ID__ = -1;
}, ih = new C(""), Fe = (() => { class e {
    static __NG_ELEMENT_ID__ = rM;
    static __NG_ENV_ID__ = n => n;
} return e; })(), qr = class extends Fe {
    _lView;
    constructor(t) { super(), this._lView = t; }
    get destroyed() { return nt(this._lView); }
    onDestroy(t) { let n = this._lView; return so(n, t), () => Pi(n, t); }
};
function rM() { return new qr(g()); }
var Xe = class {
    _console = console;
    handleError(t) { this._console.error("ERROR", t); }
}, st = new C("", { providedIn: "root", factory: () => { let e = D(_e), t; return n => { e.destroyed && !t ? setTimeout(() => { throw n; }) : (t ??= e.get(Xe), t.handleError(n)); }; } }), sl = { provide: Pe, useValue: () => void D(Xe), multi: !0 }, oM = new C("", { providedIn: "root", factory: () => { if (typeof ngServerMode < "u" && ngServerMode)
        return; let e = D(ih).defaultView; if (!e)
        return; let t = D(st), n = i => { t(i.reason), i.preventDefault(); }, r = i => { i.error ? t(i.error) : t(new Error(i.message, { cause: i })), i.preventDefault(); }, o = () => { e.addEventListener("unhandledrejection", n), e.addEventListener("error", r); }; typeof Zone < "u" ? Zone.root.run(o) : o(), D(Fe).onDestroy(() => { e.removeEventListener("error", r), e.removeEventListener("unhandledrejection", n); }); } });
function iM() { return $e([jp(() => void D(oM))]); }
function al(e) { return typeof e == "function" && e[re] !== void 0; }
function sM(e) { return null; }
function Vt(e, t) { let [n, r, o] = Mp(e, t?.equal), i = n, s = i[re]; return i.set = r, i.update = o, i.asReadonly = $n.bind(i), i; }
function $n() { let e = this[re]; if (e.readonlyFn === void 0) {
    let t = () => this();
    t[re] = e, e.readonlyFn = t;
} return e.readonlyFn; }
function cl(e) { return al(e) && typeof e.set == "function"; }
var Me = class {
}, qn = new C("", { providedIn: "root", factory: () => !1 });
var ll = new C(""), Ui = new C("");
function aM(e, t) { if (gi() !== null)
    throw new T(-602, !1); }
var ln = (() => { class e {
    view;
    node;
    constructor(n, r) { this.view = n, this.node = r; }
    static __NG_ELEMENT_ID__ = cM;
} return e; })();
function cM() { return new ln(g(), b()); }
var ht = (() => { class e {
    taskId = 0;
    pendingTasks = new Set;
    destroyed = !1;
    pendingTask = new wC(!1);
    get hasPendingTasks() { return this.destroyed ? !1 : this.pendingTask.value; }
    get hasPendingTasksObservable() { return this.destroyed ? new NC(n => { n.next(!1), n.complete(); }) : this.pendingTask; }
    add() { !this.hasPendingTasks && !this.destroyed && this.pendingTask.next(!0); let n = this.taskId++; return this.pendingTasks.add(n), n; }
    has(n) { return this.pendingTasks.has(n); }
    remove(n) { this.pendingTasks.delete(n), this.pendingTasks.size === 0 && this.hasPendingTasks && this.pendingTask.next(!1); }
    ngOnDestroy() { this.pendingTasks.clear(), this.hasPendingTasks && this.pendingTask.next(!1), this.destroyed = !0, this.pendingTask.unsubscribe(); }
    static \u0275prov = F({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), fo = (() => { class e {
    internalPendingTasks = D(ht);
    scheduler = D(Me);
    errorHandler = D(st);
    add() { let n = this.internalPendingTasks.add(); return () => { this.internalPendingTasks.has(n) && (this.scheduler.notify(11), this.internalPendingTasks.remove(n)); }; }
    run(n) { let r = this.add(); n().catch(this.errorHandler).finally(r); }
    static \u0275prov = F({ token: e, providedIn: "root", factory: () => new e });
} return e; })();
function un(...e) { }
var po = (() => { class e {
    static \u0275prov = F({ token: e, providedIn: "root", factory: () => new gc });
} return e; })(), gc = class {
    dirtyEffectCount = 0;
    queues = new Map;
    add(t) { this.enqueue(t), this.schedule(t); }
    schedule(t) { t.dirty && this.dirtyEffectCount++; }
    remove(t) { let n = t.zone, r = this.queues.get(n); r.has(t) && (r.delete(t), t.dirty && this.dirtyEffectCount--); }
    enqueue(t) { let n = t.zone; this.queues.has(n) || this.queues.set(n, new Set); let r = this.queues.get(n); r.has(t) || r.add(t); }
    flush() { for (; this.dirtyEffectCount > 0;) {
        let t = !1;
        for (let [n, r] of this.queues)
            n === null ? t ||= this.flushQueue(r) : t ||= n.run(() => this.flushQueue(r));
        t || (this.dirtyEffectCount = 0);
    } }
    flushQueue(t) { let n = !1; for (let r of t)
        r.dirty && (this.dirtyEffectCount--, n = !0, r.run()); return n; }
};
import { Subject as Lu, Subscription as Fu } from "rxjs";
import { setActiveConsumer as sh } from "@angular/core/primitives/signals";
import { map as lM } from "rxjs/operators";
var Gn = { JSACTION: "jsaction" };
function ct(e) { return { toString: e }.toString(); }
var Qn = "__annotations__", Zn = "__parameters__", Yn = "__prop__metadata__";
function Uo(e, t, n, r, o) { return ct(() => { let i = ju(t); function s(...a) { if (this instanceof s)
    return i.call(this, ...a), this; let c = new s(...a); return function (u) { return o && o(u, ...a), (u.hasOwnProperty(Qn) ? u[Qn] : Object.defineProperty(u, Qn, { value: [] })[Qn]).push(c), u; }; } return n && (s.prototype = Object.create(n.prototype)), s.prototype.ngMetadataName = e, s.annotationCls = s, s; }); }
function ju(e) { return function (...n) { if (e) {
    let r = e(...n);
    for (let o in r)
        this[o] = r[o];
} }; }
function Er(e, t, n) { return ct(() => { let r = ju(t); function o(...i) { if (this instanceof o)
    return r.apply(this, i), this; let s = new o(...i); return a.annotation = s, a; function a(c, l, u) { let d = c.hasOwnProperty(Zn) ? c[Zn] : Object.defineProperty(c, Zn, { value: [] })[Zn]; for (; d.length <= u;)
    d.push(null); return (d[u] = d[u] || []).push(s), c; } } return o.prototype.ngMetadataName = e, o.annotationCls = o, o; }); }
function Dt(e, t, n, r) { return ct(() => { let o = ju(t); function i(...s) { if (this instanceof i)
    return o.apply(this, s), this; let a = new i(...s); function c(l, u) { if (l === void 0)
    throw new Error("Standard Angular field decorators are not supported in JIT mode."); let d = l.constructor, f = d.hasOwnProperty(Yn) ? d[Yn] : Object.defineProperty(d, Yn, { value: {} })[Yn]; f[u] = f.hasOwnProperty(u) && f[u] || [], f[u].unshift(a); } return c; } return n && (i.prototype = Object.create(n.prototype)), i.prototype.ngMetadataName = e, i.annotationCls = i, i; }); }
var yg = Pn(Er("Inject", e => ({ token: e })), -1), ks = Pn(Er("Optional"), 8), vg = Pn(Er("Self"), 2), Ps = Pn(Er("SkipSelf"), 4), Eg = Pn(Er("Host"), 1);
function te(e) { let t = Se.ng; if (t && t.\u0275compilerFacade)
    return t.\u0275compilerFacade; throw new Error("JIT compiler unavailable"); }
var ah = { \u0275\u0275defineInjectable: F, \u0275\u0275defineInjector: Qr, \u0275\u0275inject: le, \u0275\u0275invalidFactoryDep: Mi, resolveForwardRef: O }, Ig = Function;
function go(e) { return typeof e == "function"; }
var uM = /^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*(arguments|(?:[^()]+\(\[\],)?[^()]+\(arguments\).*)\)/, dM = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{/, fM = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(/, pM = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(\)\s*{[^}]*super\(\.\.\.arguments\)/;
function hM(e) { return uM.test(e) || pM.test(e) || dM.test(e) && !fM.test(e); }
var as = class {
    _reflect;
    constructor(t) { this._reflect = t || Se.Reflect; }
    factory(t) { return (...n) => new t(...n); }
    _zipTypesAndAnnotations(t, n) { let r; typeof t > "u" ? r = Xr(n.length) : r = Xr(t.length); for (let o = 0; o < r.length; o++)
        typeof t > "u" ? r[o] = [] : t[o] && t[o] != Object ? r[o] = [t[o]] : r[o] = [], n && n[o] != null && (r[o] = r[o].concat(n[o])); return r; }
    _ownParameters(t, n) { let r = t.toString(); if (hM(r))
        return null; if (t.parameters && t.parameters !== n.parameters)
        return t.parameters; let o = t.ctorParameters; if (o && o !== n.ctorParameters) {
        let a = typeof o == "function" ? o() : o, c = a.map(u => u && u.type), l = a.map(u => u && ul(u.decorators));
        return this._zipTypesAndAnnotations(c, l);
    } let i = t.hasOwnProperty(Zn) && t[Zn], s = this._reflect && this._reflect.getOwnMetadata && this._reflect.getOwnMetadata("design:paramtypes", t); return s || i ? this._zipTypesAndAnnotations(s, i) : Xr(t.length); }
    parameters(t) { if (!go(t))
        return []; let n = $i(t), r = this._ownParameters(t, n); return !r && n !== Object && (r = this.parameters(n)), r || []; }
    _ownAnnotations(t, n) { if (t.annotations && t.annotations !== n.annotations) {
        let r = t.annotations;
        return typeof r == "function" && r.annotations && (r = r.annotations), r;
    } return t.decorators && t.decorators !== n.decorators ? ul(t.decorators) : t.hasOwnProperty(Qn) ? t[Qn] : null; }
    annotations(t) { if (!go(t))
        return []; let n = $i(t), r = this._ownAnnotations(t, n) || []; return (n !== Object ? this.annotations(n) : []).concat(r); }
    _ownPropMetadata(t, n) { if (t.propMetadata && t.propMetadata !== n.propMetadata) {
        let r = t.propMetadata;
        return typeof r == "function" && r.propMetadata && (r = r.propMetadata), r;
    } if (t.propDecorators && t.propDecorators !== n.propDecorators) {
        let r = t.propDecorators, o = {};
        return Object.keys(r).forEach(i => { o[i] = ul(r[i]); }), o;
    } return t.hasOwnProperty(Yn) ? t[Yn] : null; }
    propMetadata(t) { if (!go(t))
        return {}; let n = $i(t), r = {}; if (n !== Object) {
        let i = this.propMetadata(n);
        Object.keys(i).forEach(s => { r[s] = i[s]; });
    } let o = this._ownPropMetadata(t, n); return o && Object.keys(o).forEach(i => { let s = []; r.hasOwnProperty(i) && s.push(...r[i]), s.push(...o[i]), r[i] = s; }), r; }
    ownPropMetadata(t) { return go(t) ? this._ownPropMetadata(t, $i(t)) || {} : {}; }
    hasLifecycleHook(t, n) { return t instanceof Ig && n in t.prototype; }
};
function ul(e) { return e ? e.map(t => { let r = t.type.annotationCls, o = t.args ? t.args : []; return new r(...o); }) : []; }
function $i(e) { let t = e.prototype ? Object.getPrototypeOf(e.prototype) : null; return (t ? t.constructor : null) || Object; }
var cs = class {
    previousValue;
    currentValue;
    firstChange;
    constructor(t, n, r) { this.previousValue = t, this.currentValue = n, this.firstChange = r; }
    isFirstChange() { return this.firstChange; }
};
function Dg(e, t, n, r) { t !== null ? t.applyValueToInputSignal(t, r) : e[n] = r; }
var Tg = (() => { let e = () => Cg; return e.ngInherit = !0, e; })();
function Cg(e) { return e.type.prototype.ngOnChanges && (e.setInput = mM), gM; }
function gM() { let e = wg(this), t = e?.current; if (t) {
    let n = e.previous;
    if (n === ke)
        e.previous = t;
    else
        for (let r in t)
            n[r] = t[r];
    e.current = null, this.ngOnChanges(t);
} }
function mM(e, t, n, r, o) { let i = this.declaredInputs[r], s = wg(e) || yM(e, { previous: ke, current: null }), a = s.current || (s.current = {}), c = s.previous, l = c[i]; a[i] = new cs(l && l.currentValue, n, c === ke), Dg(e, t, o, n); }
var Mg = "__ngSimpleChanges__";
function wg(e) { return e[Mg] || null; }
function yM(e, t) { return e[Mg] = t; }
var ch = [];
var j = function (e, t = null, n) { for (let r = 0; r < ch.length; r++) {
    let o = ch[r];
    o(e, t, n);
} };
function vM(e, t, n) { let { ngOnChanges: r, ngOnInit: o, ngDoCheck: i } = t.type.prototype; if (r) {
    let s = Cg(t);
    (n.preOrderHooks ??= []).push(e, s), (n.preOrderCheckHooks ??= []).push(e, s);
} o && (n.preOrderHooks ??= []).push(0 - e, o), i && ((n.preOrderHooks ??= []).push(e, i), (n.preOrderCheckHooks ??= []).push(e, i)); }
function Ng(e, t) { for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
    let i = e.data[n].type.prototype, { ngAfterContentInit: s, ngAfterContentChecked: a, ngAfterViewInit: c, ngAfterViewChecked: l, ngOnDestroy: u } = i;
    s && (e.contentHooks ??= []).push(-n, s), a && ((e.contentHooks ??= []).push(n, a), (e.contentCheckHooks ??= []).push(n, a)), c && (e.viewHooks ??= []).push(-n, c), l && ((e.viewHooks ??= []).push(n, l), (e.viewCheckHooks ??= []).push(n, l)), u != null && (e.destroyHooks ??= []).push(n, u);
} }
function Ki(e, t, n) { _g(e, t, 3, n); }
function Ji(e, t, n, r) { (e[M] & 3) === n && _g(e, t, n, r); }
function dl(e, t) { let n = e[M]; (n & 3) === t && (n &= 16383, n += 1, e[M] = n); }
function _g(e, t, n, r) { let o = r !== void 0 ? e[on] & 65535 : 0, i = r ?? -1, s = t.length - 1, a = 0; for (let c = o; c < s; c++)
    if (typeof t[c + 1] == "number") {
        if (a = t[c], r != null && a >= r)
            break;
    }
    else
        t[c] < 0 && (e[on] += 65536), (a < i || i == -1) && (EM(e, n, t, c), e[on] = (e[on] & 4294901760) + c + 2), c++; }
function lh(e, t) { j(4, e, t); let n = A(null); try {
    t.call(e);
}
finally {
    A(n), j(5, e, t);
} }
function EM(e, t, n, r) { let o = n[r] < 0, i = n[r + 1], s = o ? -n[r] : n[r], a = e[s]; o ? e[M] >> 14 < e[on] >> 16 && (e[M] & 3) === t && (e[M] += 16384, lh(a, i)) : lh(a, i); }
var tr = -1, mn = class {
    factory;
    name;
    injectImpl;
    resolving = !1;
    canSeeViewProviders;
    multi;
    componentProviders;
    index;
    providerFactory;
    constructor(t, n, r, o) { this.factory = t, this.name = o, this.canSeeViewProviders = n, this.injectImpl = r; }
};
function Ls(e) { return e != null && typeof e == "object" && (e.insertBeforeIndex === null || typeof e.insertBeforeIndex == "number" || Array.isArray(e.insertBeforeIndex)); }
function Sg(e) { return !!(e.type & 128); }
function IM(e) { return (e.flags & 8) !== 0; }
function DM(e) { return (e.flags & 16) !== 0; }
function TM(e, t, n) { let r = 0; for (; r < n.length;) {
    let o = n[r];
    if (typeof o == "number") {
        if (o !== 0)
            break;
        r++;
        let i = n[r++], s = n[r++], a = n[r++];
        e.setAttribute(t, s, a, i);
    }
    else {
        let i = o, s = n[++r];
        CM(i) ? e.setProperty(t, i, s) : e.setAttribute(t, i, s), r++;
    }
} return r; }
function bg(e) { return e === 3 || e === 4 || e === 6; }
function CM(e) { return e.charCodeAt(0) === 64; }
function ar(e, t) { if (!(t === null || t.length === 0))
    if (e === null || e.length === 0)
        e = t.slice();
    else {
        let n = -1;
        for (let r = 0; r < t.length; r++) {
            let o = t[r];
            typeof o == "number" ? n = o : n === 0 || (n === -1 || n === 2 ? uh(e, n, o, null, t[++r]) : uh(e, n, o, null, null));
        }
    } return e; }
function uh(e, t, n, r, o) { let i = 0, s = e.length; if (t === -1)
    s = -1;
else
    for (; i < e.length;) {
        let a = e[i++];
        if (typeof a == "number") {
            if (a === t) {
                s = -1;
                break;
            }
            else if (a > t) {
                s = i - 1;
                break;
            }
        }
    } for (; i < e.length;) {
    let a = e[i];
    if (typeof a == "number")
        break;
    if (a === n) {
        o !== null && (e[i + 1] = o);
        return;
    }
    i++, o !== null && i++;
} s !== -1 && (e.splice(s, 0, t), i = s + 1), e.splice(i++, 0, n), o !== null && e.splice(i++, 0, o); }
function Rg(e) { return e !== tr; }
function ls(e) { return e & 32767; }
function MM(e) { return e >> 16; }
function us(e, t) { let n = MM(e), r = t; for (; n > 0;)
    r = r[rn], n--; return r; }
var Ll = !0;
function ds(e) { let t = Ll; return Ll = e, t; }
var wM = 256, Ag = wM - 1, Og = 5, NM = 0, at = {};
function _M(e, t, n) { let r; typeof n == "string" ? r = n.charCodeAt(0) || 0 : n.hasOwnProperty(tn) && (r = n[tn]), r == null && (r = n[tn] = NM++); let o = r & Ag, i = 1 << o; t.data[e + (o >> Og)] |= i; }
function fs(e, t) { let n = xg(e, t); if (n !== -1)
    return n; let r = t[y]; r.firstCreatePass && (e.injectorIndex = t.length, fl(r.data, e), fl(t, null), fl(r.blueprint, null)); let o = Vu(e, t), i = e.injectorIndex; if (Rg(o)) {
    let s = ls(o), a = us(o, t), c = a[y].data;
    for (let l = 0; l < 8; l++)
        t[i + l] = a[s + l] | c[s + l];
} return t[i + 8] = o, i; }
function fl(e, t) { e.push(0, 0, 0, 0, 0, 0, 0, 0, t); }
function xg(e, t) { return e.injectorIndex === -1 || e.parent && e.parent.injectorIndex === e.injectorIndex || t[e.injectorIndex + 8] === null ? -1 : e.injectorIndex; }
function Vu(e, t) { if (e.parent && e.parent.injectorIndex !== -1)
    return e.parent.injectorIndex; let n = 0, r = null, o = t; for (; o !== null;) {
    if (r = Vg(o), r === null)
        return tr;
    if (n++, o = o[rn], r.injectorIndex !== -1)
        return r.injectorIndex | n << 16;
} return tr; }
function Fl(e, t, n) { _M(e, t, n); }
function SM(e, t) { if (t === "class")
    return e.classes; if (t === "style")
    return e.styles; let n = e.attrs; if (n) {
    let r = n.length, o = 0;
    for (; o < r;) {
        let i = n[o];
        if (bg(i))
            break;
        if (i === 0)
            o = o + 2;
        else if (typeof i == "number")
            for (o++; o < r && typeof n[o] == "string";)
                o++;
        else {
            if (i === t)
                return n[o + 1];
            o = o + 2;
        }
    }
} return null; }
function kg(e, t, n) { if (n & 8 || e !== void 0)
    return e; Ci(t, "NodeInjector"); }
function Pg(e, t, n, r) { if (n & 8 && r === void 0 && (r = null), (n & 3) === 0) {
    let o = e[K], i = ve(void 0);
    try {
        return o ? o.get(t, r, n & 8) : Ec(t, r, n & 8);
    }
    finally {
        ve(i);
    }
} return kg(r, t, n); }
function Lg(e, t, n, r = 0, o) { if (e !== null) {
    if (t[M] & 2048 && !(r & 2)) {
        let s = OM(e, t, n, r, at);
        if (s !== at)
            return s;
    }
    let i = Fg(e, t, n, r, at);
    if (i !== at)
        return i;
} return Pg(t, n, r, o); }
function Fg(e, t, n, r, o) { let i = RM(n); if (typeof i == "function") {
    if (!Xc(t, e, r))
        return r & 1 ? kg(o, n, r) : Pg(t, n, r, o);
    try {
        let s;
        if (s = i(r), s == null && !(r & 8))
            Ci(n);
        else
            return s;
    }
    finally {
        el();
    }
}
else if (typeof i == "number") {
    let s = null, a = xg(e, t), c = tr, l = r & 1 ? t[J][ie] : null;
    for ((a === -1 || r & 4) && (c = a === -1 ? Vu(e, t) : t[a + 8], c === tr || !fh(r, !1) ? a = -1 : (s = t[y], a = ls(c), t = us(c, t))); a !== -1;) {
        let u = t[y];
        if (dh(i, a, u.data)) {
            let d = bM(a, t, n, s, r, l);
            if (d !== at)
                return d;
        }
        c = t[a + 8], c !== tr && fh(r, t[y].data[a + 8] === l) && dh(i, a, t) ? (s = u, a = ls(c), t = us(c, t)) : a = -1;
    }
} return o; }
function bM(e, t, n, r, o, i) { let s = t[y], a = s.data[e + 8], c = r == null ? Oe(a) && Ll : r != s && (a.type & 3) !== 0, l = o & 1 && i === a, u = Xi(a, s, n, c, l); return u !== null ? No(t, s, u, a, o) : at; }
function Xi(e, t, n, r, o) { let i = e.providerIndexes, s = t.data, a = i & 1048575, c = e.directiveStart, l = e.directiveEnd, u = i >> 20, d = r ? a : a + u, f = o ? a + u : l; for (let p = d; p < f; p++) {
    let h = s[p];
    if (p < c && n === h || p >= c && h.type === n)
        return p;
} if (o) {
    let p = s[c];
    if (p && we(p) && p.type === n)
        return c;
} return null; }
function No(e, t, n, r, o) { let i = e[n], s = t.data; if (i instanceof mn) {
    let a = i;
    if (a.resolving) {
        let p = Ee(s[n]);
        throw vc(p);
    }
    let c = ds(a.canSeeViewProviders);
    a.resolving = !0;
    let l = s[n].type || s[n], u, d = a.injectImpl ? ve(a.injectImpl) : null, f = Xc(e, r, 0);
    try {
        i = e[n] = a.factory(void 0, o, s, e, r), t.firstCreatePass && n >= r.directiveStart && vM(n, s[n], t);
    }
    finally {
        d !== null && ve(d), ds(c), a.resolving = !1, el();
    }
} return i; }
function RM(e) { if (typeof e == "string")
    return e.charCodeAt(0) || 0; let t = e.hasOwnProperty(tn) ? e[tn] : void 0; return typeof t == "number" ? t >= 0 ? t & Ag : AM : t; }
function dh(e, t, n) { let r = 1 << e; return !!(n[t + (e >> Og)] & r); }
function fh(e, t) { return !(e & 2) && !(e & 1 && t); }
var Bt = class {
    _tNode;
    _lView;
    constructor(t, n) { this._tNode = t, this._lView = n; }
    get(t, n, r) { return Lg(this._tNode, this._lView, t, Kt(r), n); }
};
function AM() { return new Bt(b(), g()); }
function jg(e) { return ct(() => { let t = e.prototype.constructor, n = t[Je] || jl(t), r = Object.prototype, o = Object.getPrototypeOf(e.prototype).constructor; for (; o && o !== r;) {
    let i = o[Je] || jl(o);
    if (i && i !== n)
        return i;
    o = Object.getPrototypeOf(o);
} return i => new i; }); }
function jl(e) { return Wr(e) ? () => { let t = jl(O(e)); return t && t(); } : Ot(e); }
function OM(e, t, n, r, o) { let i = e, s = t; for (; i !== null && s !== null && s[M] & 2048 && !tt(s);) {
    let a = Fg(i, s, n, r | 2, at);
    if (a !== at)
        return a;
    let c = i.parent;
    if (!c) {
        let l = s[Sc];
        if (l) {
            let u = l.get(n, at, r);
            if (u !== at)
                return u;
        }
        c = Vg(s), s = s[rn];
    }
    i = c;
} return o; }
function Vg(e) { let t = e[y], n = t.type; return n === 2 ? t.declTNode : n === 1 ? e[ie] : null; }
function Fs(e) { return SM(b(), e); }
var Hg = Er("Attribute", e => ({ attributeName: e, __NG_ELEMENT_ID__: () => Fs(e) })), ph = null;
function Hu() { return ph = ph || new as; }
function js(e) { return Bg(Hu().parameters(e)); }
function Bg(e) { return e.map(t => xM(t)); }
function xM(e) { let t = { token: null, attribute: null, host: !1, optional: !1, self: !1, skipSelf: !1 }; if (Array.isArray(e) && e.length > 0)
    for (let n = 0; n < e.length; n++) {
        let r = e[n];
        if (r === void 0)
            continue;
        let o = Object.getPrototypeOf(r);
        if (r instanceof ks || o.ngMetadataName === "Optional")
            t.optional = !0;
        else if (r instanceof Ps || o.ngMetadataName === "SkipSelf")
            t.skipSelf = !0;
        else if (r instanceof vg || o.ngMetadataName === "Self")
            t.self = !0;
        else if (r instanceof Eg || o.ngMetadataName === "Host")
            t.host = !0;
        else if (r instanceof yg)
            t.token = r.token;
        else if (r instanceof Hg) {
            if (r.attributeName === void 0)
                throw new T(204, !1);
            t.attribute = r.attributeName;
        }
        else
            t.token = r;
    }
else
    e === void 0 || Array.isArray(e) && e.length === 0 ? t.token = null : t.token = e; return t; }
function kM(e, t) { let n = null, r = null; e.hasOwnProperty(kn) || Object.defineProperty(e, kn, { get: () => (n === null && (n = te({ usage: 0, kind: "injectable", type: e }).compileInjectable(ah, `ng:///${e.name}/\u0275prov.js`, jM(e, t))), n) }), e.hasOwnProperty(Je) || Object.defineProperty(e, Je, { get: () => { if (r === null) {
        let o = te({ usage: 0, kind: "injectable", type: e });
        r = o.compileFactory(ah, `ng:///${e.name}/\u0275fac.js`, { name: e.name, type: e, typeArgumentCount: 0, deps: js(e), target: o.FactoryTarget.Injectable });
    } return r; }, configurable: !0 }); }
var PM = P({ provide: String, useValue: P });
function hh(e) { return e.useClass !== void 0; }
function LM(e) { return PM in e; }
function gh(e) { return e.useFactory !== void 0; }
function FM(e) { return e.useExisting !== void 0; }
function jM(e, t) { let n = t || { providedIn: null }, r = { name: e.name, type: e, typeArgumentCount: 0, providedIn: n.providedIn }; return (hh(n) || gh(n)) && n.deps !== void 0 && (r.deps = Bg(n.deps)), hh(n) ? r.useClass = n.useClass : LM(n) ? r.useValue = n.useValue : gh(n) ? r.useFactory = n.useFactory : FM(n) && (r.useExisting = n.useExisting), r; }
var VM = Uo("Injectable", void 0, void 0, void 0, (e, t) => kM(e, t));
function HM() { return Ir(b(), g()); }
function Ir(e, t) { return new $o(xe(e, t)); }
var $o = (() => { class e {
    nativeElement;
    constructor(n) { this.nativeElement = n; }
    static __NG_ELEMENT_ID__ = HM;
} return e; })();
function Ug(e) { return e instanceof $o ? e.nativeElement : e; }
function BM() { return this._results[Symbol.iterator](); }
var ps = class {
    _emitDistinctChangesOnly;
    dirty = !0;
    _onDirty = void 0;
    _results = [];
    _changesDetected = !1;
    _changes = void 0;
    length = 0;
    first = void 0;
    last = void 0;
    get changes() { return this._changes ??= new Lu; }
    constructor(t = !1) { this._emitDistinctChangesOnly = t; }
    get(t) { return this._results[t]; }
    map(t) { return this._results.map(t); }
    filter(t) { return this._results.filter(t); }
    find(t) { return this._results.find(t); }
    reduce(t, n) { return this._results.reduce(t, n); }
    forEach(t) { this._results.forEach(t); }
    some(t) { return this._results.some(t); }
    toArray() { return this._results.slice(); }
    toString() { return this._results.toString(); }
    reset(t, n) { this.dirty = !1; let r = Be(t); (this._changesDetected = !Fp(this._results, r, n)) && (this._results = r, this.length = r.length, this.last = r[this.length - 1], this.first = r[0]); }
    notifyOnChanges() { this._changes !== void 0 && (this._changesDetected || !this._emitDistinctChangesOnly) && this._changes.next(this); }
    onDirty(t) { this._onDirty = t; }
    setDirty() { this.dirty = !0, this._onDirty?.(); }
    destroy() { this._changes !== void 0 && (this._changes.complete(), this._changes.unsubscribe()); }
    [Symbol.iterator] = BM;
}, Dr = "ngSkipHydration", UM = "ngskiphydration";
function Bu(e) { let t = e.mergedAttrs; if (t === null)
    return !1; for (let n = 0; n < t.length; n += 2) {
    let r = t[n];
    if (typeof r == "number")
        return !1;
    if (typeof r == "string" && r.toLowerCase() === UM)
        return !0;
} return !1; }
function $g(e) { return e.hasAttribute(Dr); }
function _o(e) { return (e.flags & 128) === 128; }
function Tr(e) { if (_o(e))
    return !0; let t = e.parent; for (; t;) {
    if (_o(e) || Bu(t))
        return !0;
    t = t.parent;
} return !1; }
function qg(e) { return _o(e) || Bu(e) || Tr(e); }
var Vs = (function (e) { return e[e.OnPush = 0] = "OnPush", e[e.Default = 1] = "Default", e; })(Vs || {}), Hs = new Map, $M = 0;
function qM() { return $M++; }
function GM(e) { Hs.set(e[jn], e); }
function Gg(e) { return Hs.get(e) || null; }
function Vl(e) { Hs.delete(e[jn]); }
function WM() { return Hs; }
var hs = class {
    lViewId;
    nodeIndex;
    native;
    component;
    directives;
    localRefs;
    get lView() { return Gg(this.lViewId); }
    constructor(t, n, r) { this.lViewId = t, this.nodeIndex = n, this.native = r; }
};
function Ne(e) { let t = es(e); if (t) {
    if (X(t)) {
        let n = t, r, o, i;
        if (zg(e)) {
            if (r = ZM(n, e), r == -1)
                throw new Error("The provided component was not found in the application");
            o = e;
        }
        else if (zM(e)) {
            if (r = YM(n, e), r == -1)
                throw new Error("The provided directive was not found in the application");
            i = Qg(r, n);
        }
        else if (r = yh(n, e), r == -1)
            return null;
        let s = x(n[r]), a = es(s), c = a && !Array.isArray(a) ? a : mh(n, r, s);
        if (o && c.component === void 0 && (c.component = o, je(c.component, c)), i && c.directives === void 0) {
            c.directives = i;
            for (let l = 0; l < i.length; l++)
                je(i[l], c);
        }
        je(c.native, c), t = c;
    }
}
else {
    let n = e, r = n;
    for (; r = r.parentNode;) {
        let o = es(r);
        if (o) {
            let i = Array.isArray(o) ? o : o.lView;
            if (!i)
                return null;
            let s = yh(i, n);
            if (s >= 0) {
                let a = x(i[s]), c = mh(i, s, a);
                je(a, c), t = c;
                break;
            }
        }
    }
} return t || null; }
function mh(e, t, n) { return new hs(e[jn], t, n); }
var Hl = "__ngContext__";
function je(e, t) { X(t) ? (e[Hl] = t[jn], GM(t)) : e[Hl] = t; }
function es(e) { let t = e[Hl]; return typeof t == "number" ? Gg(t) : t || null; }
function Wg(e) { let t = es(e); return t ? X(t) ? t : t.lView : null; }
function zg(e) { return e && e.constructor && e.constructor.\u0275cmp; }
function zM(e) { return e && e.constructor && e.constructor.\u0275dir; }
function yh(e, t) { let n = e[y]; for (let r = E; r < n.bindingStartIndex; r++)
    if (x(e[r]) === t)
        return r; return -1; }
function QM(e) { if (e.child)
    return e.child; if (e.next)
    return e.next; for (; e.parent && !e.parent.next;)
    e = e.parent; return e.parent && e.parent.next; }
function ZM(e, t) { let n = e[y].components; if (n)
    for (let r = 0; r < n.length; r++) {
        let o = n[r];
        if (he(o, e)[B] === t)
            return o;
    }
else if (he(E, e)[B] === t)
    return E; return -1; }
function YM(e, t) { let n = e[y].firstChild; for (; n;) {
    let r = n.directiveStart, o = n.directiveEnd;
    for (let i = r; i < o; i++)
        if (e[i] === t)
            return n.index;
    n = QM(n);
} return -1; }
function Qg(e, t) { let n = t[y].data[e]; if (n.directiveStart === 0)
    return k; let r = []; for (let o = n.directiveStart; o < n.directiveEnd; o++) {
    let i = t[o];
    zg(i) || r.push(i);
} return r; }
function KM(e, t) { let n = t[y].data[e]; return Oe(n) ? t[n.directiveStart + n.componentOffset] : null; }
function JM(e, t) { let n = e[y].data[t]; if (n && n.localNames) {
    let r = {}, o = n.index + 1;
    for (let i = 0; i < n.localNames.length; i += 2)
        r[n.localNames[i]] = e[o], o++;
    return r;
} return null; }
function Zg(e) { return Kg(e[kt]); }
function Yg(e) { return Kg(e[ue]); }
function Kg(e) { for (; e !== null && !Z(e);)
    e = e[ue]; return e; }
function vh(e) { let t = Ne(e); if (t === null)
    return null; if (t.component === void 0) {
    let n = t.lView;
    if (n === null)
        return null;
    t.component = KM(t.nodeIndex, n);
} return t.component; }
function XM(e) { lw(e); let t = Ne(e), n = t ? t.lView : null; return n === null ? null : n[B]; }
function ew(e) { let t = Ne(e), n = t ? t.lView : null; if (n === null)
    return null; let r; for (; n[y].type === 2 && (r = dt(n));)
    n = r; return tt(n) ? null : n[B]; }
function tw(e) { let t = Ne(e), n = t ? t.lView : null; if (n === null)
    return oe.NULL; let r = n[y].data[t.nodeIndex]; return new Bt(r, n); }
function nw(e) { let t = Ne(e), n = t ? t.lView : null; if (n === null)
    return []; let r = n[y], o = r.data[t.nodeIndex], i = [], s = o.providerIndexes & 1048575, a = o.directiveEnd; for (let c = s; c < a; c++) {
    let l = r.data[c];
    cw(l) && (l = l.type), i.push(l);
} return i; }
function rw(e) { if (e instanceof Text)
    return []; let t = Ne(e), n = t ? t.lView : null; if (n === null)
    return []; let r = n[y], o = t.nodeIndex; return r?.data[o] ? (t.directives === void 0 && (t.directives = Qg(o, n)), t.directives === null ? [] : [...t.directives]) : []; }
var Jg = (function (e) { return e.Angular = "angular", e.ACX = "acx", e.Wiz = "wiz", e; })(Jg || {}), Xg = (function (e) { return e[e.Default = 0] = "Default", e[e.OnPush = 1] = "OnPush", e; })(Xg || {}), em = (function (e) { return e[e.Emulated = 0] = "Emulated", e[e.None = 1] = "None", e; })(em || {});
function ow(e) { let t = Ne(e); if (t === null)
    return {}; if (t.localRefs === void 0) {
    let n = t.lView;
    if (n === null)
        return {};
    t.localRefs = JM(n, t.nodeIndex);
} return t.localRefs || {}; }
function iw(e) { return Ne(e).native; }
function sw(e) { let t = Ne(e), n = t === null ? null : t.lView; if (n === null)
    return []; let r = n[y], o = n[xt], i = r.cleanup, s = []; if (i && o)
    for (let a = 0; a < i.length;) {
        let c = i[a++], l = i[a++];
        if (typeof c == "string") {
            let u = c, d = x(n[l]), f = o[i[a++]], p = i[a++], h = typeof p == "boolean" || p >= 0 ? "dom" : "output", m = typeof p == "boolean" ? p : !1;
            e == d && s.push({ element: e, name: u, callback: f, useCapture: m, type: h });
        }
    } return s.sort(aw), s; }
function aw(e, t) { return e.name == t.name ? 0 : e.name < t.name ? -1 : 1; }
function cw(e) { return e.type !== void 0 && e.declaredInputs !== void 0 && e.resolveHostDirectives !== void 0; }
function lw(e) { if (typeof Element < "u" && !(e instanceof Element))
    throw new Error("Expecting instance of DOM Element"); }
var Bl;
function uw(e) { Bl = e; }
function Tt() { if (Bl !== void 0)
    return Bl; if (typeof document < "u")
    return document; throw new T(210, !1); }
var Ct = new C("", { providedIn: "root", factory: () => dw }), dw = "ng", Uu = new C(""), fw = new C("", { providedIn: "platform", factory: () => "unknown" }), pw = new C(""), hw = new C(""), gw = new C("", { providedIn: "root", factory: () => Tt().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce") || null }), tm = { breakpoints: [16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840], placeholderResolution: 30, disableImageSizeWarning: !1, disableImageLazyLoadWarning: !1 }, mw = new C("", { providedIn: "root", factory: () => tm });
function yw(e) { return e; }
function vw() { let e = new Cn; return (typeof ngServerMode > "u" || !ngServerMode) && (e.store = $u(Tt(), D(Ct))), e; }
var Cn = (() => { class e {
    static \u0275prov = F({ token: e, providedIn: "root", factory: vw });
    store = {};
    onSerializeCallbacks = {};
    get(n, r) { return this.store[n] !== void 0 ? this.store[n] : r; }
    set(n, r) { this.store[n] = r; }
    remove(n) { delete this.store[n]; }
    hasKey(n) { return this.store.hasOwnProperty(n); }
    get isEmpty() { return Object.keys(this.store).length === 0; }
    onSerialize(n, r) { this.onSerializeCallbacks[n] = r; }
    toJson() { for (let n in this.onSerializeCallbacks)
        if (this.onSerializeCallbacks.hasOwnProperty(n))
            try {
                this.store[n] = this.onSerializeCallbacks[n]();
            }
            catch (r) {
                console.warn("Exception in onSerialize callback: ", r);
            } return JSON.stringify(this.store).replace(/</g, "\\u003C"); }
} return e; })();
function $u(e, t) { let n = e.getElementById(t + "-state"); if (n?.textContent)
    try {
        return JSON.parse(n.textContent);
    }
    catch (r) {
        console.warn("Exception while restoring TransferState for app " + t, r);
    } return {}; }
var qu = "h", Gu = "b", nm = "f", rm = "n", qo = "e", Bs = "t", Cr = "c", Go = "x", vt = "r", Us = "i", Wo = "n", Mr = "d", $s = "l", qs = "di", zo = "s", Wu = "p", Gs = "t", Mn = new C(""), om = !1, zu = new C("", { providedIn: "root", factory: () => om }), Qu = new C(""), Ws = new C(""), Zu = !1, Yu = new C(""), Qo = new C("", { providedIn: "root", factory: () => new Map });
var gs = { passive: !0, capture: !0 }, pl = new WeakMap, hl = new WeakMap, Kn = new WeakMap, ms = ["click", "keydown"], ys = ["mouseenter", "mouseover", "focusin"], Wn = null, gl = 0, So = class {
    callbacks = new Set;
    listener = () => { for (let t of this.callbacks)
        t(); };
};
function im(e, t) { let n = hl.get(e); if (!n) {
    n = new So, hl.set(e, n);
    for (let r of ms)
        e.addEventListener(r, n.listener, gs);
} return n.callbacks.add(t), () => { let { callbacks: r, listener: o } = n; if (r.delete(t), r.size === 0) {
    hl.delete(e);
    for (let i of ms)
        e.removeEventListener(i, o, gs);
} }; }
function sm(e, t) { let n = pl.get(e); if (!n) {
    n = new So, pl.set(e, n);
    for (let r of ys)
        e.addEventListener(r, n.listener, gs);
} return n.callbacks.add(t), () => { let { callbacks: r, listener: o } = n; if (r.delete(t), r.size === 0) {
    for (let i of ys)
        e.removeEventListener(i, o, gs);
    pl.delete(e);
} }; }
function Ew() { return new IntersectionObserver(e => { for (let t of e)
    t.isIntersecting && Kn.has(t.target) && Kn.get(t.target).listener(); }); }
function Iw(e, t, n) { let r = Kn.get(e); return Wn = Wn || n(), r || (r = new So, Wn.observe(e), Kn.set(e, r), gl++), r.callbacks.add(t), () => { Kn.has(e) && (r.callbacks.delete(t), r.callbacks.size === 0 && (Wn?.unobserve(e), Kn.delete(e), gl--), gl === 0 && (Wn?.disconnect(), Wn = null)); }; }
var wr = "ngb";
function Ku(e, t, n = null) { if (t.length === 0 || e.nodeType !== Node.ELEMENT_NODE)
    return; let r = e.getAttribute(Gn.JSACTION), o = t.reduce((s, a) => (r?.indexOf(a) ?? -1) === -1 ? s + a + ":;" : s, ""); e.setAttribute(Gn.JSACTION, `${r ?? ""}${o}`); let i = n ?? ""; i !== "" && o.length > 0 && e.setAttribute(wr, i); }
var am = (e, t, n) => { let r = e, o = r.__jsaction_fns ?? new Map, i = o.get(t) ?? []; i.push(n), o.set(t, i), r.__jsaction_fns = o; }, Ju = (e, t) => { let n = e, r = n.getAttribute(wr) ?? "", o = t.get(r) ?? new Set; o.has(n) || o.add(n), t.set(r, o); };
function Dw(e, t) { if (e.length > 0) {
    let n = [];
    for (let o of e)
        t.has(o) && (n = [...n, ...t.get(o)]);
    new Set(n).forEach(Xu);
} }
var Xu = e => { e.removeAttribute(Gn.JSACTION), e.removeAttribute(wr), e.__jsaction_fns = void 0; }, ed = new C("", { providedIn: "root", factory: () => ({}) });
function td(e, t) { let n = t?.__jsaction_fns?.get(e.type); if (!(!n || !t?.isConnected))
    for (let r of n)
        r(e); }
var Ul = new Map;
function cm(e, t) { return Ul.set(e, t), () => Ul.delete(e); }
var Eh = !1, lm = (e, t, n, r) => { };
function Tw(e, t, n, r) { lm(e, t, n, r); }
function um() { Eh || (lm = (e, t, n, r) => { let o = e[K].get(Ct); Ul.get(o)?.(t, n, r); }, Eh = !0); }
var Mt = new C(""), dm = (() => { class e {
    registry = new Map;
    cleanupFns = new Map;
    jsActionMap = D(Qo);
    contract = D(ed);
    add(n, r) { if (this.registry.set(n, r), this.awaitingCallbacks.has(n)) {
        let o = this.awaitingCallbacks.get(n);
        for (let i of o)
            i();
    } }
    get(n) { return this.registry.get(n) ?? null; }
    has(n) { return this.registry.has(n); }
    cleanup(n) { Dw(n, this.jsActionMap); for (let r of n)
        this.registry.delete(r), this.jsActionMap.delete(r), this.invokeTriggerCleanupFns(r), this.hydrating.delete(r), this.awaitingCallbacks.delete(r); this.size === 0 && this.contract.instance?.cleanUp(); }
    get size() { return this.registry.size; }
    addCleanupFn(n, r) { let o = []; this.cleanupFns.has(n) && (o = this.cleanupFns.get(n)), o.push(r), this.cleanupFns.set(n, o); }
    invokeTriggerCleanupFns(n) { let r = this.cleanupFns.get(n) ?? []; for (let o of r)
        o(); this.cleanupFns.delete(n); }
    hydrating = new Map;
    awaitingCallbacks = new Map;
    awaitParentBlock(n, r) { let o = this.awaitingCallbacks.get(n) ?? []; o.push(r), this.awaitingCallbacks.set(n, o); }
    static \u0275prov = F({ token: e, providedIn: null, factory: () => new e });
} return e; })();
function Nr(e) { return (e.flags & 32) === 32; }
var fm = "__nghData__", zs = fm, pm = "__nghDeferData__", Qs = pm;
function hm(e) { return e === fm || e === pm; }
var nr = "ngh", gm = "nghm", mm = () => null;
function Cw(e, t, n = !1) { let r = e.getAttribute(nr); if (r == null)
    return null; let [o, i] = r.split("|"); if (r = n ? i : o, !r)
    return null; let s = i ? `|${i}` : "", a = n ? o : s, c = {}; if (r !== "") {
    let u = t.get(Cn, null, { optional: !0 });
    u !== null && (c = u.get(zs, [])[Number(r)]);
} let l = { data: c, firstChild: e.firstChild ?? null }; return n && (l.firstChild = e, Zs(l, 0, e.nextSibling)), a ? e.setAttribute(nr, a) : e.removeAttribute(nr), l; }
function ym() { mm = Cw; }
function vm(e, t, n = !1) { return mm(e, t, n); }
function nd(e) { let t = e._lView; return t[y].type === 2 ? null : (tt(t) && (t = t[E]), t); }
function Mw(e) { return e.textContent?.replace(/\s/gm, ""); }
function ww(e) { let t = Tt(), n = t.createNodeIterator(e, NodeFilter.SHOW_COMMENT, { acceptNode(i) { let s = Mw(i); return s === "ngetn" || s === "ngtns" ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; } }), r, o = []; for (; r = n.nextNode();)
    o.push(r); for (let i of o)
    i.textContent === "ngetn" ? i.replaceWith(t.createTextNode("")) : i.remove(); }
var Em = (function (e) { return e.Hydrated = "hydrated", e.Skipped = "skipped", e.Mismatched = "mismatched", e; })(Em || {}), Nw = "__ngDebugHydrationInfo__";
function _w(e) { return e[Nw] ?? null; }
function Zs(e, t, n) { e.segmentHeads ??= {}, e.segmentHeads[t] = n; }
function $l(e, t) { return e.segmentHeads?.[t] ?? null; }
function Ys(e) { return e.get(Yu, !1, { optional: !0 }); }
function Im(e, t) { let n = e.data, r = n[qo]?.[t] ?? null; return r === null && n[Cr]?.[t] && (r = rd(e, t)), r; }
function Sw(e, t) { return e.data[qo]?.[t] !== void 0; }
function Dm(e, t) { return e.data[Cr]?.[t] ?? null; }
function rd(e, t) { let n = Dm(e, t) ?? [], r = 0; for (let o of n)
    r += o[vt] * (o[Go] ?? 1); return r; }
function Tm(e) { if (typeof e.disconnectedNodes > "u") {
    let t = e.data[Mr];
    e.disconnectedNodes = t ? new Set(t) : null;
} return e.disconnectedNodes; }
function Ks(e, t) { if (typeof e.disconnectedNodes > "u") {
    let n = e.data[Mr];
    e.disconnectedNodes = n ? new Set(n) : null;
} return !!Tm(e)?.has(t); }
function Js(e, t) { let n = e[se]; return n !== null && !co() && !Nr(t) && !Ks(n, t.index - E); }
function od(e, t) { let n = t, r = e.corruptedTextNodes; n.textContent === "" ? r.set(n, "ngetn") : n.nextSibling?.nodeType === Node.TEXT_NODE && r.set(n, "ngtns"); }
function Cm(e) { let t = []; return e !== null && (e.has(4) && t.push(...ys), e.has(3) && t.push(...ms)), t; }
function bw(e, t) { let n = t.get(Mt), o = t.get(Cn).get(Qs, {}), i = !1, s = e, a = null, c = []; for (; !i && s;) {
    i = n.has(s);
    let l = n.hydrating.get(s);
    if (a === null && l != null) {
        a = l.promise;
        break;
    }
    c.unshift(s), s = o[s][Wu];
} return { parentBlockPromise: a, hydrationQueue: c }; }
function Rw(e) { let t = e.body.querySelectorAll("[jsaction]"), n = new Set, r = [ys.join(":;"), ms.join(":;")].join("|"); for (let o of t) {
    let i = o.getAttribute("jsaction"), s = o.getAttribute("ngb");
    i?.match(r) && s !== null && n.add(o);
} return n; }
function Mm(e, t) { let n = Rw(e), r = t.get(Qo); for (let o of n)
    Ju(o, r); }
var wm = () => ({});
function Aw(e) { let t = e.get(Cn, null, { optional: !0 }); return t !== null ? t.get(Qs, {}) : {}; }
function Nm() { wm = Aw; }
function Ow(e) { return wm(e); }
function xw(e) { return typeof e == "object" && e.trigger === 5; }
function kw(e) { return e[Gs]?.find(n => xw(n))?.delay ?? null; }
function ml(e, t) { return e[Gs]?.includes(t) ?? !1; }
function Pw(e) { return { data: e, hydrate: { idle: ml(e, 0), immediate: ml(e, 1), timer: kw(e), viewport: ml(e, 2) } }; }
function _m(e) { let t = Ow(e), n = new Map; for (let r in t)
    n.set(r, Pw(t[r])); return n; }
function yl(e) { return !!e && e.nodeType === Node.COMMENT_NODE && e.textContent?.trim() === gm; }
function Ih(e) { for (; e && e.nodeType === Node.TEXT_NODE;)
    e = e.previousSibling; return e; }
function Sm(e) { for (let r of e.body.childNodes)
    if (yl(r))
        return; let t = Ih(e.body.previousSibling); if (yl(t))
    return; let n = Ih(e.head.lastChild); if (!yl(n))
    throw new T(-507, !1); }
function bm(e, t) { let n = e.contentQueries; if (n !== null) {
    let r = A(null);
    try {
        for (let o = 0; o < n.length; o += 2) {
            let i = n[o], s = n[o + 1];
            if (s !== -1) {
                let a = e.data[s];
                lo(i), a.contentQueries(2, t[s], s);
            }
        }
    }
    finally {
        A(r);
    }
} }
function ql(e, t, n) { lo(0); let r = A(null); try {
    t(e, n);
}
finally {
    A(r);
} }
function id(e, t, n) { if (Rc(t)) {
    let r = A(null);
    try {
        let o = t.directiveStart, i = t.directiveEnd;
        for (let s = o; s < i; s++) {
            let a = e.data[s];
            if (a.contentQueries) {
                let c = n[s];
                a.contentQueries(1, c, s);
            }
        }
    }
    finally {
        A(r);
    }
} }
var Et = (function (e) { return e[e.Emulated = 0] = "Emulated", e[e.None = 2] = "None", e[e.ShadowDom = 3] = "ShadowDom", e; })(Et || {}), qi;
function Rm() { if (qi === void 0 && (qi = null, Se.trustedTypes))
    try {
        qi = Se.trustedTypes.createPolicy("angular", { createHTML: e => e, createScript: e => e, createScriptURL: e => e });
    }
    catch { } return qi; }
function _r(e) { return Rm()?.createHTML(e) || e; }
function Lw(e) { return Rm()?.createScriptURL(e) || e; }
var Gi;
function sd() { if (Gi === void 0 && (Gi = null, Se.trustedTypes))
    try {
        Gi = Se.trustedTypes.createPolicy("angular#unsafe-bypass", { createHTML: e => e, createScript: e => e, createScriptURL: e => e });
    }
    catch { } return Gi; }
function Dh(e) { return sd()?.createHTML(e) || e; }
function Th(e) { return sd()?.createScript(e) || e; }
function Ch(e) { return sd()?.createScriptURL(e) || e; }
var It = class {
    changingThisBreaksApplicationSecurity;
    constructor(t) { this.changingThisBreaksApplicationSecurity = t; }
    toString() { return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Ii})`; }
}, Gl = class extends It {
    getTypeName() { return "HTML"; }
}, Wl = class extends It {
    getTypeName() { return "Style"; }
}, zl = class extends It {
    getTypeName() { return "Script"; }
}, Ql = class extends It {
    getTypeName() { return "URL"; }
}, Zl = class extends It {
    getTypeName() { return "ResourceURL"; }
};
function wt(e) { return e instanceof It ? e.changingThisBreaksApplicationSecurity : e; }
function Sr(e, t) { let n = Am(e); if (n != null && n !== t) {
    if (n === "ResourceURL" && t === "URL")
        return !0;
    throw new Error(`Required a safe ${t}, got a ${n} (see ${Ii})`);
} return n === t; }
function Am(e) { return e instanceof It && e.getTypeName() || null; }
function Fw(e) { return new Gl(e); }
function jw(e) { return new Wl(e); }
function Vw(e) { return new zl(e); }
function Hw(e) { return new Ql(e); }
function Bw(e) { return new Zl(e); }
function Om(e) { let t = new Kl(e); return Uw() ? new Yl(t) : t; }
var Yl = class {
    inertDocumentHelper;
    constructor(t) { this.inertDocumentHelper = t; }
    getInertBodyElement(t) { t = "<body><remove></remove>" + t; try {
        let n = new window.DOMParser().parseFromString(_r(t), "text/html").body;
        return n === null ? this.inertDocumentHelper.getInertBodyElement(t) : (n.firstChild?.remove(), n);
    }
    catch {
        return null;
    } }
}, Kl = class {
    defaultDoc;
    inertDocument;
    constructor(t) { this.defaultDoc = t, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"); }
    getInertBodyElement(t) { let n = this.inertDocument.createElement("template"); return n.innerHTML = _r(t), n; }
};
function Uw() { try {
    return !!new window.DOMParser().parseFromString(_r(""), "text/html");
}
catch {
    return !1;
} }
var $w = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
function Xs(e) { return e = String(e), e.match($w) ? e : "unsafe:" + e; }
function Nt(e) { let t = {}; for (let n of e.split(","))
    t[n] = !0; return t; }
function Zo(...e) { let t = {}; for (let n of e)
    for (let r in n)
        n.hasOwnProperty(r) && (t[r] = !0); return t; }
var xm = Nt("area,br,col,hr,img,wbr"), km = Nt("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"), Pm = Nt("rp,rt"), qw = Zo(Pm, km), Gw = Zo(km, Nt("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), Ww = Zo(Pm, Nt("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), Jl = Zo(xm, Gw, Ww, qw), ad = Nt("background,cite,href,itemtype,longdesc,poster,src,xlink:href"), zw = Nt("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"), Qw = Nt("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"), Lm = Zo(ad, zw, Qw), Zw = Nt("script,style,template"), Xl = class {
    sanitizedSomething = !1;
    buf = [];
    sanitizeChildren(t) { let n = t.firstChild, r = !0, o = []; for (; n;) {
        if (n.nodeType === Node.ELEMENT_NODE ? r = this.startElement(n) : n.nodeType === Node.TEXT_NODE ? this.chars(n.nodeValue) : this.sanitizedSomething = !0, r && n.firstChild) {
            o.push(n), n = Jw(n);
            continue;
        }
        for (; n;) {
            n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
            let i = Kw(n);
            if (i) {
                n = i;
                break;
            }
            n = o.pop();
        }
    } return this.buf.join(""); }
    startElement(t) { let n = Mh(t).toLowerCase(); if (!Jl.hasOwnProperty(n))
        return this.sanitizedSomething = !0, !Zw.hasOwnProperty(n); this.buf.push("<"), this.buf.push(n); let r = t.attributes; for (let o = 0; o < r.length; o++) {
        let i = r.item(o), s = i.name, a = s.toLowerCase();
        if (!Lm.hasOwnProperty(a)) {
            this.sanitizedSomething = !0;
            continue;
        }
        let c = i.value;
        ad[a] && (c = Xs(c)), this.buf.push(" ", s, '="', wh(c), '"');
    } return this.buf.push(">"), !0; }
    endElement(t) { let n = Mh(t).toLowerCase(); Jl.hasOwnProperty(n) && !xm.hasOwnProperty(n) && (this.buf.push("</"), this.buf.push(n), this.buf.push(">")); }
    chars(t) { this.buf.push(wh(t)); }
};
function Yw(e, t) { return (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) !== Node.DOCUMENT_POSITION_CONTAINED_BY; }
function Kw(e) { let t = e.nextSibling; if (t && e !== t.previousSibling)
    throw Fm(t); return t; }
function Jw(e) { let t = e.firstChild; if (t && Yw(e, t))
    throw Fm(t); return t; }
function Mh(e) { let t = e.nodeName; return typeof t == "string" ? t : "FORM"; }
function Fm(e) { return new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`); }
var Xw = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, eN = /([^\#-~ |!])/g;
function wh(e) { return e.replace(/&/g, "&amp;").replace(Xw, function (t) { let n = t.charCodeAt(0), r = t.charCodeAt(1); return "&#" + ((n - 55296) * 1024 + (r - 56320) + 65536) + ";"; }).replace(eN, function (t) { return "&#" + t.charCodeAt(0) + ";"; }).replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
var Wi;
function jm(e, t) { let n = null; try {
    Wi = Wi || Om(e);
    let r = t ? String(t) : "";
    n = Wi.getInertBodyElement(r);
    let o = 5, i = r;
    do {
        if (o === 0)
            throw new Error("Failed to sanitize html because the input is unstable");
        o--, r = i, i = n.innerHTML, n = Wi.getInertBodyElement(r);
    } while (r !== i);
    let a = new Xl().sanitizeChildren(eu(n) || n);
    return _r(a);
}
finally {
    if (n) {
        let r = eu(n) || n;
        for (; r.firstChild;)
            r.firstChild.remove();
    }
} }
function eu(e) { return "content" in e && tN(e) ? e.content : null; }
function tN(e) { return e.nodeType === Node.ELEMENT_NODE && e.nodeName === "TEMPLATE"; }
var wn = (function (e) { return e[e.NONE = 0] = "NONE", e[e.HTML = 1] = "HTML", e[e.STYLE = 2] = "STYLE", e[e.SCRIPT = 3] = "SCRIPT", e[e.URL = 4] = "URL", e[e.RESOURCE_URL = 5] = "RESOURCE_URL", e; })(wn || {});
function Vm(e) { let t = Yo(); return t ? Dh(t.sanitize(wn.HTML, e) || "") : Sr(e, "HTML") ? Dh(wt(e)) : jm(Tt(), _(e)); }
function Hm(e) { let t = Yo(); return t ? t.sanitize(wn.STYLE, e) || "" : Sr(e, "Style") ? wt(e) : _(e); }
function cd(e) { let t = Yo(); return t ? t.sanitize(wn.URL, e) || "" : Sr(e, "URL") ? wt(e) : Xs(_(e)); }
function ld(e) { let t = Yo(); if (t)
    return Ch(t.sanitize(wn.RESOURCE_URL, e) || ""); if (Sr(e, "ResourceURL"))
    return Ch(wt(e)); throw new T(904, !1); }
function Bm(e) { let t = Yo(); if (t)
    return Th(t.sanitize(wn.SCRIPT, e) || ""); if (Sr(e, "Script"))
    return Th(wt(e)); throw new T(905, !1); }
function Um(e) { return _r(e[0]); }
function $m(e) { return Lw(e[0]); }
function nN(e, t) { return t === "src" && (e === "embed" || e === "frame" || e === "iframe" || e === "media" || e === "script") || t === "href" && (e === "base" || e === "link") ? ld : cd; }
function qm(e, t, n) { return nN(t, n)(e); }
function Yo() { let e = g(); return e && e[qe].sanitizer; }
var rN = /^>|^->|<!--|-->|--!>|<!-$/g, oN = /(<|>)/g, iN = "\u200B$1\u200B";
function sN(e) { return e.replace(rN, t => t.replace(oN, iN)); }
function aN() { return $e([]); }
var cN = { name: "custom-elements" }, lN = { name: "no-errors-schema" }, Gm = !1;
function uN(e) { Gm = e; }
function dN() { return Gm; }
var Wm = !1;
function fN(e) { Wm = e; }
function pN() { return Wm; }
function zm(e) { return e.ownerDocument.defaultView; }
function Qm(e) { return e.ownerDocument; }
function ud(e) { return e.ownerDocument.body; }
var hN = "\uFFFD";
function Jn(e) { return e instanceof Function ? e() : e; }
function gN(e, t, n) { let r = e.length; for (;;) {
    let o = e.indexOf(t, n);
    if (o === -1)
        return o;
    if (o === 0 || e.charCodeAt(o - 1) <= 32) {
        let i = t.length;
        if (o + i === r || e.charCodeAt(o + i) <= 32)
            return o;
    }
    n = o + 1;
} }
var Zm = "ng-template";
function mN(e, t, n, r) { let o = 0; if (r) {
    for (; o < t.length && typeof t[o] == "string"; o += 2)
        if (t[o] === "class" && gN(t[o + 1].toLowerCase(), n, 0) !== -1)
            return !0;
}
else if (dd(e))
    return !1; if (o = t.indexOf(1, o), o > -1) {
    let i;
    for (; ++o < t.length && typeof (i = t[o]) == "string";)
        if (i.toLowerCase() === n)
            return !0;
} return !1; }
function dd(e) { return e.type === 4 && e.value !== Zm; }
function yN(e, t, n) { let r = e.type === 4 && !n ? Zm : e.value; return t === r; }
function vN(e, t, n) { let r = 4, o = e.attrs, i = o !== null ? DN(o) : 0, s = !1; for (let a = 0; a < t.length; a++) {
    let c = t[a];
    if (typeof c == "number") {
        if (!s && !ze(r) && !ze(c))
            return !1;
        if (s && ze(c))
            continue;
        s = !1, r = c | r & 1;
        continue;
    }
    if (!s)
        if (r & 4) {
            if (r = 2 | r & 1, c !== "" && !yN(e, c, n) || c === "" && t.length === 1) {
                if (ze(r))
                    return !1;
                s = !0;
            }
        }
        else if (r & 8) {
            if (o === null || !mN(e, o, c, n)) {
                if (ze(r))
                    return !1;
                s = !0;
            }
        }
        else {
            let l = t[++a], u = EN(c, o, dd(e), n);
            if (u === -1) {
                if (ze(r))
                    return !1;
                s = !0;
                continue;
            }
            if (l !== "") {
                let d;
                if (u > i ? d = "" : d = o[u + 1].toLowerCase(), r & 2 && l !== d) {
                    if (ze(r))
                        return !1;
                    s = !0;
                }
            }
        }
} return ze(r) || s; }
function ze(e) { return (e & 1) === 0; }
function EN(e, t, n, r) { if (t === null)
    return -1; let o = 0; if (r || !n) {
    let i = !1;
    for (; o < t.length;) {
        let s = t[o];
        if (s === e)
            return o;
        if (s === 3 || s === 6)
            i = !0;
        else if (s === 1 || s === 2) {
            let a = t[++o];
            for (; typeof a == "string";)
                a = t[++o];
            continue;
        }
        else {
            if (s === 4)
                break;
            if (s === 0) {
                o += 4;
                continue;
            }
        }
        o += i ? 1 : 2;
    }
    return -1;
}
else
    return TN(t, e); }
function Ym(e, t, n = !1) { for (let r = 0; r < t.length; r++)
    if (vN(e, t[r], n))
        return !0; return !1; }
function IN(e) { let t = e.attrs; if (t != null) {
    let n = t.indexOf(5);
    if ((n & 1) === 0)
        return t[n + 1];
} return null; }
function DN(e) { for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (bg(n))
        return t;
} return e.length; }
function TN(e, t) { let n = e.indexOf(4); if (n > -1)
    for (n++; n < e.length;) {
        let r = e[n];
        if (typeof r == "number")
            return -1;
        if (r === t)
            return n;
        n++;
    } return -1; }
function CN(e, t) { e: for (let n = 0; n < t.length; n++) {
    let r = t[n];
    if (e.length === r.length) {
        for (let o = 0; o < e.length; o++)
            if (e[o] !== r[o])
                continue e;
        return !0;
    }
} return !1; }
function Nh(e, t) { return e ? ":not(" + t.trim() + ")" : t; }
function MN(e) { let t = e[0], n = 1, r = 2, o = "", i = !1; for (; n < e.length;) {
    let s = e[n];
    if (typeof s == "string")
        if (r & 2) {
            let a = e[++n];
            o += "[" + s + (a.length > 0 ? '="' + a + '"' : "") + "]";
        }
        else
            r & 8 ? o += "." + s : r & 4 && (o += " " + s);
    else
        o !== "" && !ze(s) && (t += Nh(i, o), o = ""), r = s, i = i || !ze(r);
    n++;
} return o !== "" && (t += Nh(i, o)), t; }
function wN(e) { return e.map(MN).join(","); }
function NN(e) { let t = [], n = [], r = 1, o = 2; for (; r < e.length;) {
    let i = e[r];
    if (typeof i == "string")
        o === 2 ? i !== "" && t.push(i, e[++r]) : o === 8 && n.push(i);
    else {
        if (!ze(o))
            break;
        o = i;
    }
    r++;
} return n.length && t.push(1, ...n), t; }
var V = {};
function fd(e, t) { return e.createText(t); }
function Km(e, t, n) { e.setValue(t, n); }
function pd(e, t) { return e.createComment(sN(t)); }
function ea(e, t, n) { return e.createElement(t, n); }
function yn(e, t, n, r, o) { e.insertBefore(t, n, r, o); }
function Jm(e, t, n) { e.appendChild(t, n); }
function _h(e, t, n, r, o) { r !== null ? yn(e, t, n, r, o) : Jm(e, t, n); }
function Ko(e, t, n) { e.removeChild(null, t, n); }
function Xm(e) { e.textContent = ""; }
function _N(e, t, n) { e.setAttribute(t, "style", n); }
function SN(e, t, n) { n === "" ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n); }
function ey(e, t, n) { let { mergedAttrs: r, classes: o, styles: i } = n; r !== null && TM(e, t, r), o !== null && SN(e, t, o), i !== null && _N(e, t, i); }
function hd(e, t, n, r, o, i, s, a, c, l, u) { let d = E + r, f = d + o, p = bN(d, f), h = typeof l == "function" ? l() : l; return p[y] = { type: e, blueprint: p, template: n, queries: null, viewQuery: a, declTNode: t, data: p.slice().fill(null, d), bindingStartIndex: d, expandoStartIndex: f, hostBindingOpCodes: null, firstCreatePass: !0, firstUpdatePass: !0, staticViewQueries: !1, staticContentQueries: !1, preOrderHooks: null, preOrderCheckHooks: null, contentHooks: null, contentCheckHooks: null, viewHooks: null, viewCheckHooks: null, destroyHooks: null, cleanup: null, contentQueries: null, components: null, directiveRegistry: typeof i == "function" ? i() : i, pipeRegistry: typeof s == "function" ? s() : s, firstChild: null, schemas: c, consts: h, incompleteFirstPass: !1, ssrId: u }; }
function bN(e, t) { let n = []; for (let r = 0; r < t; r++)
    n.push(r < e ? null : V); return n; }
function ty(e) { let t = e.tView; return t === null || t.incompleteFirstPass ? e.tView = hd(1, null, e.template, e.decls, e.vars, e.directiveDefs, e.pipeDefs, e.viewQuery, e.schemas, e.consts, e.id) : t; }
function ta(e, t, n, r, o, i, s, a, c, l, u) { let d = t.blueprint.slice(); return d[H] = o, d[M] = r | 4 | 128 | 8 | 64 | 1024, (l !== null || e && e[M] & 2048) && (d[M] |= 2048), kc(d), d[q] = d[rn] = e, d[B] = n, d[qe] = s || e && e[qe], d[S] = a || e && e[S], d[K] = c || e && e[K] || null, d[ie] = i, d[jn] = qM(), d[se] = u, d[Sc] = l, d[J] = t.type == 2 ? e[J] : d, d; }
function RN(e, t, n) { let r = xe(t, e), o = ty(n), i = e[qe].rendererFactory, s = md(e, ta(e, o, null, gd(n), r, t, null, i.createRenderer(r, n), null, null, null)); return e[t.index] = s; }
function gd(e) { let t = 16; return e.signals ? t = 4096 : e.onPush && (t = 64), t; }
function Jo(e, t, n, r) { if (n === 0)
    return -1; let o = t.length; for (let i = 0; i < n; i++)
    t.push(r), e.blueprint.push(r), e.data.push(null); return o; }
function md(e, t) { return e[kt] ? e[no][ue] = t : e[kt] = t, e[no] = t, t; }
function ny(e = 1) { ry(R(), g(), ae() + e, !1); }
function ry(e, t, n, r) { if (!r)
    if ((t[M] & 3) === 3) {
        let i = e.preOrderCheckHooks;
        i !== null && Ki(t, i, n);
    }
    else {
        let i = e.preOrderHooks;
        i !== null && Ji(t, i, 0, n);
    } jt(n); }
var na = (function (e) { return e[e.None = 0] = "None", e[e.SignalBased = 1] = "SignalBased", e[e.HasDecoratorInputTransform = 2] = "HasDecoratorInputTransform", e; })(na || {});
function bo(e, t, n, r) { let o = A(null); try {
    let [i, s, a] = e.inputs[n], c = null;
    (s & na.SignalBased) !== 0 && (c = t[i][re]), c !== null && c.transformFn !== void 0 ? r = c.transformFn(r) : a !== null && (r = a.call(t, r)), e.setInput !== null ? e.setInput(t, c, r, n, i) : Dg(t, c, i, r);
}
finally {
    A(o);
} }
var vs = (function (e) { return e[e.Important = 1] = "Important", e[e.DashCase = 2] = "DashCase", e; })(vs || {}), tu;
function yd(e, t) { return tu(e, t); }
function AN(e) { tu === void 0 && (tu = e()); }
function Xn(e, t, n, r, o) { if (r != null) {
    let i, s = !1;
    Z(r) ? i = r : X(r) && (s = !0, r = r[H]);
    let a = x(r);
    e === 0 && n !== null ? o == null ? Jm(t, n, a) : yn(t, n, a, o || null, !0) : e === 1 && n !== null ? yn(t, n, a, o || null, !0) : e === 2 ? Ko(t, a, s) : e === 3 && t.destroyNode(a), i != null && FN(t, e, i, n, o);
} }
function oy(e, t) { iy(e, t), t[H] = null, t[ie] = null; }
function ON(e, t, n, r, o, i) { r[H] = o, r[ie] = t, ra(e, r, n, 1, o, i); }
function iy(e, t) { t[qe].changeDetectionScheduler?.notify(9), ra(e, t, t[S], 2, null, null); }
function xN(e) { let t = e[kt]; if (!t)
    return vl(e[y], e); for (; t;) {
    let n = null;
    if (X(t))
        n = t[kt];
    else {
        let r = t[W];
        r && (n = r);
    }
    if (!n) {
        for (; t && !t[ue] && t !== e;)
            X(t) && vl(t[y], t), t = t[q];
        t === null && (t = e), X(t) && vl(t[y], t), n = t && t[ue];
    }
    t = n;
} }
function vd(e, t) { let n = e[an], r = n.indexOf(t); n.splice(r, 1); }
function Xo(e, t) { if (nt(t))
    return; let n = t[S]; n.destroyNode && ra(e, t, n, 3, null, null), xN(t); }
function vl(e, t) { if (nt(t))
    return; let n = A(null); try {
    t[M] &= -129, t[M] |= 256, t[Re] && At(t[Re]), PN(e, t), kN(e, t), t[y].type === 1 && t[S].destroy();
    let r = t[Pt];
    if (r !== null && Z(t[q])) {
        r !== t[q] && vd(r, t);
        let o = t[et];
        o !== null && o.detachView(e);
    }
    Vl(t);
}
finally {
    A(n);
} }
function kN(e, t) { let n = e.cleanup, r = t[xt]; if (n !== null)
    for (let s = 0; s < n.length - 1; s += 2)
        if (typeof n[s] == "string") {
            let a = n[s + 3];
            a >= 0 ? r[a]() : r[-a].unsubscribe(), s += 2;
        }
        else {
            let a = r[n[s + 1]];
            n[s].call(a);
        } r !== null && (t[xt] = null); let o = t[ut]; if (o !== null) {
    t[ut] = null;
    for (let s = 0; s < o.length; s++) {
        let a = o[s];
        a();
    }
} let i = t[ft]; if (i !== null) {
    t[ft] = null;
    for (let s of i)
        s.destroy();
} }
function PN(e, t) { let n; if (e != null && (n = e.destroyHooks) != null)
    for (let r = 0; r < n.length; r += 2) {
        let o = t[n[r]];
        if (!(o instanceof mn)) {
            let i = n[r + 1];
            if (Array.isArray(i))
                for (let s = 0; s < i.length; s += 2) {
                    let a = o[i[s]], c = i[s + 1];
                    j(4, a, c);
                    try {
                        c.call(a);
                    }
                    finally {
                        j(5, a, c);
                    }
                }
            else {
                j(4, o, i);
                try {
                    i.call(o);
                }
                finally {
                    j(5, o, i);
                }
            }
        }
    } }
function Ed(e, t, n) { return sy(e, t.parent, n); }
function sy(e, t, n) { let r = t; for (; r !== null && r.type & 168;)
    t = r, r = t.parent; if (r === null)
    return n[H]; if (Oe(r)) {
    let { encapsulation: o } = e.data[r.directiveStart + r.componentOffset];
    if (o === Et.None || o === Et.Emulated)
        return null;
} return xe(r, n); }
function ay(e, t, n) { return ly(e, t, n); }
function cy(e, t, n) { return e.type & 40 ? xe(e, n) : null; }
var ly = cy, nu;
function uy(e, t) { ly = e, nu = t; }
function Id(e, t, n, r) { let o = Ed(e, r, t), i = t[S], s = r.parent || t[ie], a = ay(s, r, t); if (o != null)
    if (Array.isArray(n))
        for (let c = 0; c < n.length; c++)
            _h(i, o, n[c], a, !1);
    else
        _h(i, o, n, a, !1); nu !== void 0 && nu(i, r, t, n, o); }
function gn(e, t) { if (t !== null) {
    let n = t.type;
    if (n & 3)
        return xe(t, e);
    if (n & 4)
        return ru(-1, e[t.index]);
    if (n & 8) {
        let r = t.child;
        if (r !== null)
            return gn(e, r);
        {
            let o = e[t.index];
            return Z(o) ? ru(-1, o) : x(o);
        }
    }
    else {
        if (n & 128)
            return gn(e, t.next);
        if (n & 32)
            return yd(t, e)() || x(e[t.index]);
        {
            let r = dy(e, t);
            if (r !== null) {
                if (Array.isArray(r))
                    return r[0];
                let o = dt(e[J]);
                return gn(o, r);
            }
            else
                return gn(e, t.next);
        }
    }
} return null; }
function dy(e, t) { if (t !== null) {
    let r = e[J][ie], o = t.projection;
    return r.projection[o];
} return null; }
function ru(e, t) { let n = W + e + 1; if (n < t.length) {
    let r = t[n], o = r[y].firstChild;
    if (o !== null)
        return gn(r, o);
} return t[Ge]; }
function Dd(e, t, n, r, o, i, s) { for (; n != null;) {
    if (n.type === 128) {
        n = n.next;
        continue;
    }
    let a = r[n.index], c = n.type;
    if (s && t === 0 && (a && je(x(a), r), n.flags |= 2), !Nr(n))
        if (c & 8)
            Dd(e, t, n.child, r, o, i, !1), Xn(t, e, o, a, i);
        else if (c & 32) {
            let l = yd(n, r), u;
            for (; u = l();)
                Xn(t, e, o, u, i);
            Xn(t, e, o, a, i);
        }
        else
            c & 16 ? fy(e, t, r, n, o, i) : Xn(t, e, o, a, i);
    n = s ? n.projectionNext : n.next;
} }
function ra(e, t, n, r, o, i) { Dd(n, r, e.firstChild, t, o, i, !1); }
function LN(e, t, n) { let r = t[S], o = Ed(e, n, t), i = n.parent || t[ie], s = ay(i, n, t); fy(r, 0, t, n, o, s); }
function fy(e, t, n, r, o, i) { let s = n[J], c = s[ie].projection[r.projection]; if (Array.isArray(c))
    for (let l = 0; l < c.length; l++) {
        let u = c[l];
        Xn(t, e, o, u, i);
    }
else {
    let l = c, u = s[q];
    _o(r) && (l.flags |= 128), Dd(e, t, l, u, o, i, !0);
} }
function FN(e, t, n, r, o) { let i = n[Ge], s = x(n); i !== s && Xn(t, e, r, i, o); for (let a = W; a < n.length; a++) {
    let c = n[a];
    ra(c[y], c, e, t, r, i);
} }
function jN(e, t, n, r, o) { if (t)
    o ? e.addClass(n, r) : e.removeClass(n, r);
else {
    let i = r.indexOf("-") === -1 ? void 0 : vs.DashCase;
    o == null ? e.removeStyle(n, r, i) : (typeof o == "string" && o.endsWith("!important") && (o = o.slice(0, -10), i |= vs.Important), e.setStyle(n, r, o, i));
} }
function py(e, t, n, r, o) { let i = ae(), s = r & 2; try {
    jt(-1), s && t.length > E && ry(e, t, E, !1), j(s ? 2 : 0, o, n), n(r, o);
}
finally {
    jt(i), j(s ? 3 : 1, o, n);
} }
function oa(e, t, n) { qN(e, t, n), (n.flags & 64) === 64 && GN(e, t, n); }
function br(e, t, n = xe) { let r = t.localNames; if (r !== null) {
    let o = t.index + 1;
    for (let i = 0; i < r.length; i += 2) {
        let s = r[i + 1], a = s === -1 ? n(t, e) : e[s];
        e[o++] = a;
    }
} }
function VN(e, t, n, r) { let i = r.get(zu, om) || n === Et.ShadowDom, s = e.selectRootElement(t, i); return HN(s), s; }
function HN(e) { hy(e); }
var hy = () => null;
function BN(e) { $g(e) ? Xm(e) : ww(e); }
function gy() { hy = BN; }
function UN(e) { return e === "class" ? "className" : e === "for" ? "htmlFor" : e === "formaction" ? "formAction" : e === "innerHtml" ? "innerHTML" : e === "readonly" ? "readOnly" : e === "tabindex" ? "tabIndex" : e; }
function Td(e, t, n, r, o, i) { let s = t[y]; if (_d(e, s, t, n, r)) {
    Oe(e) && $N(t, e.index);
    return;
} e.type & 3 && (n = UN(n)), Cd(e, t, n, r, o, i); }
function Cd(e, t, n, r, o, i) { if (e.type & 3) {
    let s = xe(e, t);
    r = i != null ? i(r, e.value || "", n) : r, o.setProperty(s, n, r);
}
else
    e.type & 12; }
function $N(e, t) { let n = he(t, e); n[M] & 16 || (n[M] |= 64); }
function qN(e, t, n) { let r = n.directiveStart, o = n.directiveEnd; Oe(n) && RN(t, n, e.data[r + n.componentOffset]), e.firstCreatePass || fs(n, t); let i = n.initialInputs; for (let s = r; s < o; s++) {
    let a = e.data[s], c = No(t, e, s, n);
    if (je(c, t), i !== null && QN(t, s - r, c, a, n, i), we(a)) {
        let l = he(n.index, t);
        l[B] = No(t, e, s, n);
    }
} }
function GN(e, t, n) { let r = n.directiveStart, o = n.directiveEnd, i = n.index, s = Xp(); try {
    jt(i);
    for (let a = r; a < o; a++) {
        let c = e.data[a], l = t[a];
        Fi(a), (c.hostBindings !== null || c.hostVars !== 0 || c.hostAttrs !== null) && WN(c, l);
    }
}
finally {
    jt(-1), Fi(s);
} }
function WN(e, t) { e.hostBindings !== null && e.hostBindings(1, t); }
function Md(e, t) { let n = e.directiveRegistry, r = null; if (n)
    for (let o = 0; o < n.length; o++) {
        let i = n[o];
        Ym(t, i.selectors, !1) && (r ??= [], we(i) ? r.unshift(i) : r.push(i));
    } return r; }
function zN(e, t, n, r, o, i) { let s = xe(e, t); wd(t[S], s, i, e.value, n, r, o); }
function wd(e, t, n, r, o, i, s) { if (i == null)
    e.removeAttribute(t, o, n);
else {
    let a = s == null ? _(i) : s(i, r || "", o);
    e.setAttribute(t, o, a, n);
} }
function QN(e, t, n, r, o, i) { let s = i[t]; if (s !== null)
    for (let a = 0; a < s.length; a += 2) {
        let c = s[a], l = s[a + 1];
        bo(r, n, c, l);
    } }
function ia(e, t, n, r, o) { let i = E + n, s = t[y], a = o(s, t, e, r, n); t[i] = a, rt(e, !0); let c = e.type === 2; return c ? (ey(t[S], a, e), (Qp() === 0 || Vn(e)) && je(a, t), Zp()) : je(a, t), uo() && (!c || !Nr(e)) && Id(s, t, a, e), e; }
function sa(e) { let t = e; return Wc() ? zc() : (t = t.parent, rt(t, !1)), t; }
function my(e, t, n) { return (e === null || we(e)) && (n = oo(n[t.index])), n[S]; }
function Nd(e, t) { let n = e[K]; if (!n)
    return; n.get(st, null)?.(t); }
function _d(e, t, n, r, o) { let i = e.inputs?.[r], s = e.hostDirectiveInputs?.[r], a = !1; if (s)
    for (let c = 0; c < s.length; c += 2) {
        let l = s[c], u = s[c + 1], d = t.data[l];
        bo(d, n[l], u, o), a = !0;
    } if (i)
    for (let c of i) {
        let l = n[c], u = t.data[c];
        bo(u, l, r, o), a = !0;
    } return a; }
function ZN(e, t, n, r, o, i) { let s = null, a = null, c = null, l = !1, u = e.directiveToIndex.get(r.type); if (typeof u == "number" ? s = u : [s, a, c] = u, a !== null && c !== null && e.hostDirectiveInputs?.hasOwnProperty(o)) {
    let d = e.hostDirectiveInputs[o];
    for (let f = 0; f < d.length; f += 2) {
        let p = d[f];
        if (p >= a && p <= c) {
            let h = t.data[p], m = d[f + 1];
            bo(h, n[p], m, i), l = !0;
        }
        else if (p > c)
            break;
    }
} return s !== null && r.inputs.hasOwnProperty(o) && (bo(r, n[s], o, i), l = !0), l; }
function YN(e, t) { let n = he(t, e), r = n[y]; KN(r, n); let o = n[H]; o !== null && n[se] === null && (n[se] = vm(o, n[K])), j(18), aa(r, n, n[B]), j(19, n[B]); }
function KN(e, t) { for (let n = t.length; n < e.blueprint.length; n++)
    t.push(e.blueprint[n]); }
function aa(e, t, n) { Hi(t); try {
    let r = e.viewQuery;
    r !== null && ql(1, r, n);
    let o = e.template;
    o !== null && py(e, t, o, 1, n), e.firstCreatePass && (e.firstCreatePass = !1), t[et]?.finishViewCreation(e), e.staticContentQueries && bm(e, t), e.staticViewQueries && ql(2, e.viewQuery, n);
    let i = e.components;
    i !== null && JN(t, i);
}
catch (r) {
    throw e.firstCreatePass && (e.incompleteFirstPass = !0, e.firstCreatePass = !1), r;
}
finally {
    t[M] &= -5, Bi();
} }
function JN(e, t) { for (let n = 0; n < t.length; n++)
    YN(e, t[n]); }
function Rr(e, t, n, r) { let o = A(null); try {
    let i = t.tView, a = e[M] & 4096 ? 4096 : 16, c = ta(e, i, n, a, null, t, null, null, r?.injector ?? null, r?.embeddedViewInjector ?? null, r?.dehydratedView ?? null), l = e[t.index];
    c[Pt] = l;
    let u = e[et];
    return u !== null && (c[et] = u.createEmbeddedView(i)), aa(i, c, n), c;
}
finally {
    A(o);
} }
function vn(e, t) { return !t || t.firstChild === null || _o(e); }
var Sh = !1, XN = new C("");
function cr(e, t, n, r, o = !1) { for (; n !== null;) {
    if (n.type === 128) {
        n = o ? n.projectionNext : n.next;
        continue;
    }
    let i = t[n.index];
    i !== null && r.push(x(i)), Z(i) && ca(i, r);
    let s = n.type;
    if (s & 8)
        cr(e, t, n.child, r);
    else if (s & 32) {
        let a = yd(n, t), c;
        for (; c = a();)
            r.push(c);
    }
    else if (s & 16) {
        let a = dy(t, n);
        if (Array.isArray(a))
            r.push(...a);
        else {
            let c = dt(t[J]);
            cr(c[y], c, a, r, !0);
        }
    }
    n = o ? n.projectionNext : n.next;
} return r; }
function ca(e, t) { for (let n = W; n < e.length; n++) {
    let r = e[n], o = r[y].firstChild;
    o !== null && cr(r[y], r, o, t);
} e[Ge] !== e[H] && t.push(e[Ge]); }
function yy(e) { if (e[sn] !== null) {
    for (let t of e[sn])
        t.impl.addSequence(t);
    e[sn].length = 0;
} }
var vy = [];
function e_(e) { return e[Re] ?? t_(e); }
function t_(e) { let t = vy.pop() ?? Object.create(r_); return t.lView = e, t; }
function n_(e) { e.lView[Re] !== e && (e.lView = null, vy.push(e)); }
var r_ = Ce(U({}, Vr), { consumerIsAlwaysLive: !0, kind: "template", consumerMarkedDirty: e => { Ft(e.lView); }, consumerOnSignalRead() { this.lView[Re] = this; } });
function o_(e) { let t = e[Re] ?? Object.create(i_); return t.lView = e, t; }
var i_ = Ce(U({}, Vr), { consumerIsAlwaysLive: !0, kind: "template", consumerMarkedDirty: e => { let t = dt(e.lView); for (; t && !Ey(t[y]);)
        t = dt(t); t && xi(t); }, consumerOnSignalRead() { this.lView[Re] = this; } });
function Ey(e) { return e.type !== 2; }
function Iy(e) { if (e[ft] === null)
    return; let t = !0; for (; t;) {
    let n = !1;
    for (let r of e[ft])
        r.dirty && (n = !0, r.zone === null || Zone.current === r.zone ? r.run() : r.zone.run(() => r.run()));
    t = n && !!(e[M] & 8192);
} }
var s_ = 100;
function Sd(e, t = 0) { let r = e[qe].rendererFactory, o = !1; o || r.begin?.(); try {
    a_(e, t);
}
finally {
    o || r.end?.();
} }
function a_(e, t) { let n = Yc(); try {
    Un(!0), ou(e, t);
    let r = 0;
    for (; Hn(e);) {
        if (r === s_)
            throw new T(103, !1);
        r++, ou(e, 1);
    }
}
finally {
    Un(n);
} }
function Dy(e, t) { Zc(t ? ao.Exhaustive : ao.OnlyDirtyViews); try {
    Sd(e);
}
finally {
    Zc(ao.Off);
} }
function Ty(e, t, n, r) { if (nt(t))
    return; let o = t[M], i = !1, s = !1; Hi(t); let a = !0, c = null, l = null; i || (Ey(e) ? (l = e_(t), c = Zt(l)) : gi() === null ? (a = !1, l = o_(t), c = Zt(l)) : t[Re] && (At(t[Re]), t[Re] = null)); try {
    kc(t), Kc(e.bindingStartIndex), n !== null && py(e, t, n, 2, r);
    let u = (o & 3) === 3;
    if (!i)
        if (u) {
            let p = e.preOrderCheckHooks;
            p !== null && Ki(t, p, null);
        }
        else {
            let p = e.preOrderHooks;
            p !== null && Ji(t, p, 0, null), dl(t, 0);
        }
    if (s || c_(t), Iy(t), Cy(t, 0), e.contentQueries !== null && bm(e, t), !i)
        if (u) {
            let p = e.contentCheckHooks;
            p !== null && Ki(t, p);
        }
        else {
            let p = e.contentHooks;
            p !== null && Ji(t, p, 1), dl(t, 1);
        }
    u_(e, t);
    let d = e.components;
    d !== null && wy(t, d, 0);
    let f = e.viewQuery;
    if (f !== null && ql(2, f, r), !i)
        if (u) {
            let p = e.viewCheckHooks;
            p !== null && Ki(t, p);
        }
        else {
            let p = e.viewHooks;
            p !== null && Ji(t, p, 2), dl(t, 2);
        }
    if (e.firstUpdatePass === !0 && (e.firstUpdatePass = !1), t[Ai]) {
        for (let p of t[Ai])
            p();
        t[Ai] = null;
    }
    i || (yy(t), t[M] &= -73);
}
catch (u) {
    throw i || Ft(t), u;
}
finally {
    l !== null && (bn(l, c), a && n_(l)), Bi();
} }
function Cy(e, t) { for (let n = Zg(e); n !== null; n = Yg(n))
    for (let r = W; r < n.length; r++) {
        let o = n[r];
        My(o, t);
    } }
function c_(e) { for (let t = Zg(e); t !== null; t = Yg(t)) {
    if (!(t[M] & 2))
        continue;
    let n = t[an];
    for (let r = 0; r < n.length; r++) {
        let o = n[r];
        xi(o);
    }
} }
function l_(e, t, n) { j(18); let r = he(t, e); My(r, n), j(19, r[B]); }
function My(e, t) { Oi(e) && ou(e, t); }
function ou(e, t) { let r = e[y], o = e[M], i = e[Re], s = !!(t === 0 && o & 16); if (s ||= !!(o & 64 && t === 0), s ||= !!(o & 1024), s ||= !!(i?.dirty && Rn(i)), s ||= !1, i && (i.dirty = !1), e[M] &= -9217, s)
    Ty(r, e, r.template, e[B]);
else if (o & 8192) {
    let a = A(null);
    try {
        Iy(e), Cy(e, 1);
        let c = r.components;
        c !== null && wy(e, c, 1), yy(e);
    }
    finally {
        A(a);
    }
} }
function wy(e, t, n) { for (let r = 0; r < t.length; r++)
    l_(e, t[r], n); }
function u_(e, t) { let n = e.hostBindingOpCodes; if (n !== null)
    try {
        for (let r = 0; r < n.length; r++) {
            let o = n[r];
            if (o < 0)
                jt(~o);
            else {
                let i = o, s = n[++r], a = n[++r];
                Jp(s, i);
                let c = t[i];
                j(24, c), a(2, c), j(25, c);
            }
        }
    }
    finally {
        jt(-1);
    } }
function ei(e, t) { let n = Yc() ? 64 : 1088; for (e[qe].changeDetectionScheduler?.notify(t); e;) {
    e[M] |= n;
    let r = dt(e);
    if (tt(e) && !r)
        return e;
    e = r;
} return null; }
function Ny(e, t, n, r) { return [e, !0, 0, t, null, r, null, n, null, null]; }
function _y(e, t) { let n = W + t; if (n < e.length)
    return e[n]; }
function Ar(e, t, n, r = !0) { let o = t[y]; if (d_(o, t, e, n), r) {
    let s = ru(n, e), a = t[S], c = a.parentNode(e[Ge]);
    c !== null && ON(o, e[ie], a, t, c, s);
} let i = t[se]; i !== null && i.firstChild !== null && (i.firstChild = null); }
function bd(e, t) { let n = Ro(e, t); return n !== void 0 && Xo(n[y], n), n; }
function Ro(e, t) { if (e.length <= W)
    return; let n = W + t, r = e[n]; if (r) {
    let o = r[Pt];
    o !== null && o !== e && vd(o, r), t > 0 && (e[n - 1][ue] = r[ue]);
    let i = Jr(e, W + t);
    oy(r[y], r);
    let s = i[et];
    s !== null && s.detachView(i[y]), r[q] = null, r[ue] = null, r[M] &= -129;
} return r; }
function d_(e, t, n, r) { let o = W + r, i = n.length; r > 0 && (n[o - 1][ue] = t), r < i - W ? (t[ue] = n[o], Ic(n, W + r, t)) : (n.push(t), t[ue] = null), t[q] = n; let s = t[Pt]; s !== null && n !== s && Sy(s, t); let a = t[et]; a !== null && a.insertView(e), ki(t), t[M] |= 128; }
function Sy(e, t) { let n = e[an], r = t[q]; if (X(r))
    e[M] |= 2;
else {
    let o = r[q][J];
    t[J] !== o && (e[M] |= 2);
} n === null ? e[an] = [t] : n.push(t); }
var $t = class {
    _lView;
    _cdRefInjectingView;
    _appRef = null;
    _attachedToViewContainer = !1;
    exhaustive;
    get rootNodes() { let t = this._lView, n = t[y]; return cr(n, t, n.firstChild, []); }
    constructor(t, n) { this._lView = t, this._cdRefInjectingView = n; }
    get context() { return this._lView[B]; }
    set context(t) { this._lView[B] = t; }
    get destroyed() { return nt(this._lView); }
    destroy() { if (this._appRef)
        this._appRef.detachView(this);
    else if (this._attachedToViewContainer) {
        let t = this._lView[q];
        if (Z(t)) {
            let n = t[ro], r = n ? n.indexOf(this) : -1;
            r > -1 && (Ro(t, r), Jr(n, r));
        }
        this._attachedToViewContainer = !1;
    } Xo(this._lView[y], this._lView); }
    onDestroy(t) { so(this._lView, t); }
    markForCheck() { ei(this._cdRefInjectingView || this._lView, 4); }
    detach() { this._lView[M] &= -129; }
    reattach() { ki(this._lView), this._lView[M] |= 128; }
    detectChanges() { this._lView[M] |= 1024, Sd(this._lView); }
    checkNoChanges() { }
    attachToViewContainerRef() { if (this._appRef)
        throw new T(902, !1); this._attachedToViewContainer = !0; }
    detachFromAppRef() { this._appRef = null; let t = tt(this._lView), n = this._lView[Pt]; n !== null && !t && vd(n, this._lView), iy(this._lView[y], this._lView); }
    attachToAppRef(t) { if (this._attachedToViewContainer)
        throw new T(902, !1); this._appRef = t; let n = tt(this._lView), r = this._lView[Pt]; r !== null && !n && Sy(r, this._lView), ki(this._lView); }
};
function f_(e) { return Hn(e._lView) || !!(e._lView[M] & 64); }
function p_(e) { xi(e._lView); }
var Ao = (() => { class e {
    _declarationLView;
    _declarationTContainer;
    elementRef;
    static __NG_ELEMENT_ID__ = h_;
    constructor(n, r, o) { this._declarationLView = n, this._declarationTContainer = r, this.elementRef = o; }
    get ssrId() { return this._declarationTContainer.tView?.ssrId || null; }
    createEmbeddedView(n, r) { return this.createEmbeddedViewImpl(n, r); }
    createEmbeddedViewImpl(n, r, o) { let i = Rr(this._declarationLView, this._declarationTContainer, n, { embeddedViewInjector: r, dehydratedView: o }); return new $t(i); }
} return e; })();
function h_() { return la(b(), g()); }
function la(e, t) { return e.type & 4 ? new Ao(t, e, Ir(e, t)) : null; }
var iu = "<-- AT THIS LOCATION";
function g_(e) { switch (e) {
    case 4: return "view container";
    case 2: return "element";
    case 8: return "ng-container";
    case 32: return "icu";
    case 64: return "i18n";
    case 16: return "projection";
    case 1: return "text";
    case 128: return "@let";
    default: return "<unknown>";
} }
function m_(e, t) {
    let n = `During serialization, Angular was unable to find an element in the DOM:

`, r = `${I_(e, t, !1)}

`, o = T_();
    throw new T(-502, n + r + o);
}
function by(e) {
    let t = "During serialization, Angular detected DOM nodes that were created outside of Angular context and provided as projectable nodes (likely via `ViewContainerRef.createComponent` or `createComponent` APIs). Hydration is not supported for such cases, consider refactoring the code to avoid this pattern or using `ngSkipHydration` on the host element of the component.\n\n", n = `${D_(e)}

`, r = t + n + C_();
    return new T(-503, r);
}
function y_(e) { let t = []; if (e.attrs)
    for (let n = 0; n < e.attrs.length;) {
        let r = e.attrs[n++];
        if (typeof r == "number")
            break;
        let o = e.attrs[n++];
        t.push(`${r}="${Es(o)}"`);
    } return t.join(" "); }
var v_ = new Set(["ngh", "ng-version", "ng-server-context"]);
function E_(e) { let t = []; for (let n = 0; n < e.attributes.length; n++) {
    let r = e.attributes[n];
    v_.has(r.name) || t.push(`${r.name}="${Es(r.value)}"`);
} return t.join(" "); }
function El(e, t = "\u2026") { switch (e.type) {
    case 1: return `#text${e.value ? `(${e.value})` : ""}`;
    case 2:
        let r = y_(e), o = e.value.toLowerCase();
        return `<${o}${r ? " " + r : ""}>${t}</${o}>`;
    case 8: return "<!-- ng-container -->";
    case 4: return "<!-- container -->";
    default: return `#node(${g_(e.type)})`;
} }
function ts(e, t = "\u2026") { let n = e; switch (n.nodeType) {
    case Node.ELEMENT_NODE:
        let r = n.tagName.toLowerCase(), o = E_(n);
        return `<${r}${o ? " " + o : ""}>${t}</${r}>`;
    case Node.TEXT_NODE:
        let i = n.textContent ? Es(n.textContent) : "";
        return `#text${i ? `(${i})` : ""}`;
    case Node.COMMENT_NODE: return `<!-- ${Es(n.textContent ?? "")} -->`;
    default: return `#node(${n.nodeType})`;
} }
function I_(e, t, n) {
    let o = "";
    t.prev ? (o += `  \u2026
`, o += "  " + El(t.prev) + `
`) : t.type && t.type & 12 && (o += `  \u2026
`), n ? (o += "  " + El(t) + `
`, o += `  <!-- container -->  ${iu}
`) : o += "  " + El(t) + `  ${iu}
`, o += `  \u2026
`;
    let i = t.type ? Ed(e[y], t, e) : null;
    return i && (o = ts(i, `
` + o)), o;
}
function D_(e) {
    let n = "", r = e;
    return r.previousSibling && (n += `  \u2026
`, n += "  " + ts(r.previousSibling) + `
`), n += "  " + ts(r) + `  ${iu}
`, e.nextSibling && (n += `  \u2026
`), e.parentNode && (n = ts(r.parentNode, `
` + n)), n;
}
function T_(e) {
    return `To fix this problem:
  * check ${e ? `the "${e}"` : "corresponding"} component for hydration-related issues
  * check to see if your template has valid HTML structure
  * or skip hydration by adding the \`ngSkipHydration\` attribute to its host node in a template

`;
}
function C_() {
    return `Note: attributes are only displayed to better represent the DOM but have no effect on hydration mismatches.

`;
}
function M_(e) { return e.replace(/\s+/gm, ""); }
function Es(e, t = 50) { return e ? (e = M_(e), e.length > t ? `${e.substring(0, t - 1)}\u2026` : e) : ""; }
function Ry(e, t, n) { let r = t.insertBeforeIndex, o = Array.isArray(r) ? r[0] : r; return o === null ? cy(e, t, n) : x(n[o]); }
function Ay(e, t, n, r, o) { let i = t.insertBeforeIndex; if (Array.isArray(i)) {
    let s = r, a = null;
    if (t.type & 3 || (a = s, s = o), s !== null && t.componentOffset === -1)
        for (let c = 1; c < i.length; c++) {
            let l = n[i[c]];
            yn(e, s, l, a, !1);
        }
} }
function Nn(e, t, n, r, o) { let i = e.data[t]; if (i === null)
    i = Rd(e, t, n, r, o), Kp() && (i.flags |= 32);
else if (i.type & 64) {
    i.type = n, i.value = r, i.attrs = o;
    let s = Bn();
    i.injectorIndex = s === null ? -1 : s.injectorIndex;
} return rt(i, !0), i; }
function Rd(e, t, n, r, o) { let i = Gc(), s = Wc(), a = s ? i : i && i.parent, c = e.data[t] = N_(e, a, n, t, r, o); return w_(e, c, i, s), c; }
function w_(e, t, n, r) { e.firstChild === null && (e.firstChild = t), n !== null && (r ? n.child == null && t.parent !== null && (n.child = t) : n.next === null && (n.next = t, t.prev = n)); }
function N_(e, t, n, r, o, i) { let s = t ? t.injectorIndex : -1, a = 0; return co() && (a |= 128), { type: n, index: r, insertBeforeIndex: null, injectorIndex: s, directiveStart: -1, directiveEnd: -1, directiveStylingLast: -1, componentOffset: -1, propertyBindings: null, flags: a, providerIndexes: 0, value: o, attrs: i, mergedAttrs: null, localNames: null, initialInputs: null, inputs: null, hostDirectiveInputs: null, outputs: null, hostDirectiveOutputs: null, directiveToIndex: null, tView: null, next: null, prev: null, projectionNext: null, child: null, parent: t, projection: null, styles: null, stylesWithoutHost: null, residualStyles: void 0, classes: null, classesWithoutHost: null, residualClasses: void 0, classBindings: 0, styleBindings: 0 }; }
function Oy(e, t) { if (e.push(t), e.length > 1)
    for (let n = e.length - 2; n >= 0; n--) {
        let r = e[n];
        xy(r) || __(r, t) && S_(r) === null && b_(r, t.index);
    } }
function xy(e) { return !(e.type & 64); }
function __(e, t) { return xy(t) || e.index > t.index; }
function S_(e) { let t = e.insertBeforeIndex; return Array.isArray(t) ? t[0] : t; }
function b_(e, t) { let n = e.insertBeforeIndex; Array.isArray(n) ? n[0] = t : (uy(Ry, Ay), e.insertBeforeIndex = t); }
function yo(e, t) { let n = e.data[t]; return n === null || typeof n == "string" ? null : n.hasOwnProperty("currentCaseLViewIndex") ? n : n.value; }
function R_(e, t, n) { let r = e.data[t]; r === null ? e.data[t] = n : r.value = n; }
function A_(e, t) { let n = e.insertBeforeIndex; n === null ? (uy(Ry, Ay), n = e.insertBeforeIndex = [null, t]) : (Op(Array.isArray(n), !0, "Expecting array here"), n.push(t)); }
function O_(e, t, n) { let r = Rd(e, n, 64, null, null); return Oy(t, r), r; }
function ua(e, t) { let n = t[e.currentCaseLViewIndex]; return n === null ? n : n < 0 ? ~n : n; }
function x_(e) { return e >>> 17; }
function k_(e) { return (e & 131070) >>> 1; }
function P_(e, t, n) { return e | t << 17 | n << 1; }
function ky(e) { return e === -1; }
function Ad(e, t, n) { e.index = 0; let r = ua(t, n); r !== null ? e.removes = t.remove[r] : e.removes = k; }
function Is(e) { if (e.index < e.removes.length) {
    let t = e.removes[e.index++];
    if (t > 0)
        return e.lView[t];
    {
        e.stack.push(e.index, e.removes);
        let n = ~t, r = e.lView[y].data[n];
        return Ad(e, r, e.lView), Is(e);
    }
}
else
    return e.stack.length === 0 ? null : (e.removes = e.stack.pop(), e.index = e.stack.pop(), Is(e)); }
function L_() { let e = { stack: [], index: -1 }; function t(n, r) { for (e.lView = r; e.stack.length;)
    e.stack.pop(); return Ad(e, n.value, r), Is.bind(null, e); } return t; }
function F_(e, t) { let n = { stack: [], index: -1, lView: t }; return Ad(n, e, t), Is.bind(null, n); }
var j_ = new RegExp(`^(\\d+)*(${Gu}|${qu})*(.*)`);
function V_(e, t) { let n = [e]; for (let r of t) {
    let o = n.length - 1;
    if (o > 0 && n[o - 1] === r) {
        let i = n[o] || 1;
        n[o] = i + 1;
    }
    else
        n.push(r, "");
} return n.join(""); }
function H_(e) { let t = e.match(j_), [n, r, o, i] = t, s = r ? parseInt(r, 10) : o, a = []; for (let [c, l, u] of i.matchAll(/(f|n)(\d*)/g)) {
    let d = parseInt(u, 10) || 1;
    a.push(l, d);
} return [s, ...a]; }
function B_(e) { return !e.prev && e.parent?.type === 8; }
function Il(e) { return e.index - E; }
function Or(e, t) { return !(e.type & 144) && !!t[e.index] && Py(x(t[e.index])); }
function Py(e) { return !!e && !e.isConnected; }
function Ly(e, t) { let n = e.i18nNodes; if (n)
    return n.get(t); }
function U_(e, t, n) { let o = e.data[Wo]?.[n]; return o ? Fy(o, t) : null; }
function ti(e, t, n, r) { let o = Il(r), i = Ly(e, o); if (i === void 0) {
    let s = e.data[Wo];
    if (s?.[o])
        i = Fy(s[o], n);
    else if (t.firstChild === r)
        i = e.firstChild;
    else {
        let a = r.prev === null, c = r.prev ?? r.parent;
        if (B_(r)) {
            let l = Il(r.parent);
            i = $l(e, l);
        }
        else {
            let l = xe(c, n);
            if (a)
                i = l.firstChild;
            else {
                let u = Il(c), d = $l(e, u);
                if (c.type === 2 && d) {
                    let p = rd(e, u) + 1;
                    i = da(p, d);
                }
                else
                    i = l.nextSibling;
            }
        }
    }
} return i; }
function da(e, t) { let n = t; for (let r = 0; r < e; r++)
    n = n.nextSibling; return n; }
function $_(e, t) { let n = e; for (let r = 0; r < t.length; r += 2) {
    let o = t[r], i = t[r + 1];
    for (let s = 0; s < i; s++)
        switch (o) {
            case nm:
                n = n.firstChild;
                break;
            case rm:
                n = n.nextSibling;
                break;
        }
} return n; }
function Fy(e, t) { let [n, ...r] = H_(e), o; if (n === qu)
    o = t[J][H];
else if (n === Gu)
    o = ud(t[J][H]);
else {
    let i = Number(n);
    o = x(t[i + E]);
} return $_(o, r); }
function su(e, t) { if (e === t)
    return []; if (e.parentElement == null || t.parentElement == null)
    return null; if (e.parentElement === t.parentElement)
    return q_(e, t); {
    let n = t.parentElement, r = su(e, n), o = su(n.firstChild, t);
    return !r || !o ? null : [...r, nm, ...o];
} }
function q_(e, t) { let n = [], r = null; for (r = e; r != null && r !== t; r = r.nextSibling)
    n.push(rm); return r == null ? null : n; }
function bh(e, t, n) { let r = su(e, t); return r === null ? null : V_(n, r); }
function jy(e, t, n) { let r = e.parent, o, i, s; for (; r !== null && (Or(r, t) || n?.has(r.index));)
    r = r.parent; r === null || !(r.type & 3) ? (o = s = qu, i = t[J][H]) : (o = r.index, i = x(t[o]), s = _(o - E)); let a = x(t[e.index]); if (e.type & 44) {
    let l = gn(t, e);
    l && (a = l);
} let c = bh(i, a, s); if (c === null && i !== a) {
    let l = i.ownerDocument.body;
    if (c = bh(l, a, Gu), c === null)
        throw m_(t, e);
} return c; }
function Vy(e, t) { let n = e.createNodeIterator(t, NodeFilter.SHOW_COMMENT, { acceptNode: G_ }), r, o = new Map; for (; r = n.nextNode();) {
    let i = "ngh=", s = r?.textContent, a = s?.indexOf(i) ?? -1;
    if (a > -1) {
        let c = s.substring(a + i.length).trim();
        o.set(c, r);
    }
} return o; }
function G_(e) { return e.textContent?.trimStart().startsWith("ngh=") ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; }
var Hy = !1, By = () => { };
function Od(e) { Hy = e; }
function fa() { return Hy; }
function W_(e, t, n, r) { By(e, t, n, r); }
function Uy() { By = K_; }
function $y(e) { return e = e ?? D(oe), e.get(Qu, !1); }
function qy(e, t) { let n = t.i18nChildren.get(e); return n === void 0 && (n = z_(e), t.i18nChildren.set(e, n)), n; }
function z_(e) { let t = new Set; function n(r) { switch (t.add(r.index), r.kind) {
    case 1:
    case 2: {
        for (let o of r.children)
            n(o);
        break;
    }
    case 3: {
        for (let o of r.cases)
            for (let i of o)
                n(i);
        break;
    }
} } for (let r = E; r < e.bindingStartIndex; r++) {
    let o = e.data[r];
    if (!(!o || !o.ast))
        for (let i of o.ast)
            n(i);
} return t.size === 0 ? null : t; }
function Gy(e, t, n) { if (!n.isI18nHydrationEnabled)
    return null; let r = e[y], o = r.data[t]; if (!o || !o.ast)
    return null; let i = r.data[o.parentTNodeIndex]; if (i && qg(i))
    return null; let s = { caseQueue: [], disconnectedNodes: new Set, disjointNodes: new Set }; return au(e, s, n, o.ast), s.caseQueue.length === 0 && s.disconnectedNodes.size === 0 && s.disjointNodes.size === 0 ? null : s; }
function au(e, t, n, r) { let o = null; for (let i of r) {
    let s = Z_(e, t, n, i);
    s && (Q_(o, s) && t.disjointNodes.add(i.index - E), o = s);
} return o; }
function Q_(e, t) { return e && e.nextSibling !== t; }
function Z_(e, t, n, r) { let o = x(e[r.index]); if (!o || Py(o))
    return t.disconnectedNodes.add(r.index - E), null; let i = o; switch (r.kind) {
    case 0: {
        od(n, i);
        break;
    }
    case 1:
    case 2: {
        au(e, t, n, r.children);
        break;
    }
    case 3: {
        let s = e[r.currentCaseLViewIndex];
        if (s != null) {
            let a = s < 0 ? ~s : s;
            t.caseQueue.push(a), au(e, t, n, r.cases[a]);
        }
        break;
    }
} return Y_(e, r); }
function Y_(e, t) { let r = e[y].data[t.index]; return Ls(r) ? gn(e, r) : t.kind === 3 ? F_(r, e)() ?? x(e[t.index]) : x(e[t.index]) ?? null; }
function dn(e, t) { e.currentNode = t; }
function ho(e, t, n) { let r = n.index - E, { disconnectedNodes: o } = e, i = t.currentNode; return t.isConnected ? (e.i18nNodes.set(r, i), o.delete(r)) : o.add(r), i; }
function Dl(e, t) { let n = e.currentNode; for (let r = 0; r < t && n; r++)
    n = n?.nextSibling ?? null; return n; }
function Tl(e, t) { return { currentNode: t, isConnected: e.isConnected }; }
function K_(e, t, n, r) { let o = e[se]; if (!o || !fa() || n && (qg(n) || Ks(o, n.index - E)))
    return; let i = e[y], s = i.data[t]; function a() { if (ky(r)) {
    let p = ti(o, i, e, n);
    return n.type & 8 ? p : p.firstChild;
} return o?.firstChild; } let c = a(), l = Tm(o) ?? new Set, u = o.i18nNodes ??= new Map, d = o.data[$s]?.[t - E] ?? [], f = o.dehydratedIcuData ??= new Map; zn({ hydrationInfo: o, lView: e, i18nNodes: u, disconnectedNodes: l, caseQueue: d, dehydratedIcuData: f }, { currentNode: c, isConnected: !0 }, s.ast), o.disconnectedNodes = l.size === 0 ? null : l; }
function zn(e, t, n) { if (Array.isArray(n)) {
    let r = t;
    for (let o of n) {
        let i = U_(e.hydrationInfo, e.lView, o.index - E);
        i && (r = Tl(t, i)), zn(e, r, o);
    }
}
else {
    if (e.disconnectedNodes.has(n.index - E))
        return;
    switch (n.kind) {
        case 0: {
            let r = ho(e, t, n);
            dn(t, r?.nextSibling ?? null);
            break;
        }
        case 1: {
            zn(e, Tl(t, t.currentNode?.firstChild ?? null), n.children);
            let r = ho(e, t, n);
            dn(t, r?.nextSibling ?? null);
            break;
        }
        case 2: {
            let r = n.index - E, { hydrationInfo: o } = e, i = Im(o, r);
            switch (n.type) {
                case 0: {
                    let s = ho(e, t, n);
                    if (Sw(o, r)) {
                        zn(e, t, n.children);
                        let a = Dl(t, 1);
                        dn(t, a);
                    }
                    else if (zn(e, Tl(t, t.currentNode?.firstChild ?? null), n.children), dn(t, s?.nextSibling ?? null), i !== null) {
                        let a = Dl(t, i + 1);
                        dn(t, a);
                    }
                    break;
                }
                case 1: {
                    ho(e, t, n);
                    let s = Dl(t, i + 1);
                    dn(t, s);
                    break;
                }
            }
            break;
        }
        case 3: {
            let r = t.isConnected ? e.caseQueue.shift() : null, o = { currentNode: null, isConnected: !1 };
            for (let s = 0; s < n.cases.length; s++)
                zn(e, s === r ? t : o, n.cases[s]);
            r !== null && e.dehydratedIcuData.set(n.index, { case: r, node: n });
            let i = ho(e, t, n);
            dn(t, i?.nextSibling ?? null);
            break;
        }
    }
} }
var Wy = () => { };
function J_(e, t, n) { Wy(e, t, n); }
function zy() { Wy = X_; }
function X_(e, t, n) { let r = e[se]?.dehydratedIcuData; r && r.get(t)?.case === n && r.delete(t); }
function eS(e) { let t = e[se]; if (t) {
    let { i18nNodes: n, dehydratedIcuData: r } = t;
    if (n && r) {
        let o = e[S];
        for (let i of r.values())
            tS(o, n, i);
    }
    t.i18nNodes = void 0, t.dehydratedIcuData = void 0;
} }
function tS(e, t, n) { for (let r of n.node.cases[n.case]) {
    let o = t.get(r.index - E);
    o && Ko(e, o, !1);
} }
function pa(e) { let t = e[Ae] ?? [], r = e[q][S], o = []; for (let i of t)
    i.data[qs] !== void 0 ? o.push(i) : Qy(i, r); e[Ae] = o; }
function nS(e) { let { lContainer: t } = e, n = t[Ae]; if (n === null)
    return; let o = t[q][S]; for (let i of n)
    Qy(i, o); }
function Qy(e, t) { let n = 0, r = e.firstChild; if (r) {
    let o = e.data[vt];
    for (; n < o;) {
        let i = r.nextSibling;
        Ko(t, r, !1), r = i, n++;
    }
} }
function ha(e) { pa(e); let t = e[H]; X(t) && Ds(t); for (let n = W; n < e.length; n++)
    Ds(e[n]); }
function Ds(e) { eS(e); let t = e[y]; for (let n = E; n < t.bindingStartIndex; n++)
    if (Z(e[n])) {
        let r = e[n];
        ha(r);
    }
    else
        X(e[n]) && Ds(e[n]); }
function xd(e) { let t = e._views; for (let n of t) {
    let r = nd(n);
    r !== null && r[H] !== null && (X(r) ? Ds(r) : ha(r));
} }
function rS(e, t, n, r) { e !== null && (n.cleanup(t), ha(e.lContainer), xd(r)); }
function oS(e, t) { let n = []; for (let r of t)
    for (let o = 0; o < (r[Go] ?? 1); o++) {
        let i = { data: r, firstChild: null };
        r[vt] > 0 && (i.firstChild = e, e = da(r[vt], e)), n.push(i);
    } return [e, n]; }
var Zy = () => null, Yy = () => null;
function Ky() { Zy = iS, Yy = sS; }
function iS(e, t) { return Xy(e, t) ? e[Ae].shift() : (pa(e), null); }
function Oo(e, t) { return Zy(e, t); }
function sS(e, t, n) { if (t.tView.ssrId === null)
    return null; let r = Oo(e, t.tView.ssrId); return n[y].firstUpdatePass && r === null && aS(n, t), r; }
function Jy(e, t, n) { return Yy(e, t, n); }
function aS(e, t) { let n = t; for (; n;) {
    if (Rh(e, n))
        return;
    if ((n.flags & 256) === 256)
        break;
    n = n.prev;
} for (n = t.next; n && (n.flags & 512) === 512;) {
    if (Rh(e, n))
        return;
    n = n.next;
} }
function Xy(e, t) { let n = e[Ae]; return !t || n === null || n.length === 0 ? !1 : n[0].data[Us] === t; }
function Rh(e, t) { let n = t.tView?.ssrId; if (n == null)
    return !1; let r = e[t.index]; return Z(r) && Xy(r, n) ? (pa(r), !0) : !1; }
var ev = class {
}, ga = class {
}, cu = class {
    resolveComponentFactory(t) { throw new T(917, !1); }
}, ni = class {
    static NULL = new cu;
}, xo = class {
}, cS = (() => { class e {
    destroyNode = null;
    static __NG_ELEMENT_ID__ = () => lS();
} return e; })();
function lS() { let e = g(), t = b(), n = he(t.index, e); return (X(n) ? n : e)[S]; }
var tv = (() => { class e {
    static \u0275prov = F({ token: e, providedIn: "root", factory: () => null });
} return e; })();
function kd(e) { return e.ngModule !== void 0; }
function pn(e) { return !!nn(e); }
function zi(e) { return !!Ue(e); }
function Ah(e) { return !!be(e); }
function vo(e) { return !!$(e); }
function uS(e) { return $(e) ? "component" : be(e) ? "directive" : Ue(e) ? "pipe" : "type"; }
function dS(e, t) { if (Wr(e) && (e = O(e), !e))
    throw new Error(`Expected forwardRef function, imported from "${Ee(t)}", to return a standalone entity or NgModule but got "${Ee(e) || e}".`); if (nn(e) == null) {
    let n = $(e) || be(e) || Ue(e);
    if (n != null) {
        if (!n.standalone)
            throw new Error(`The "${Ee(e)}" ${uS(e)}, imported from "${Ee(t)}", is not standalone. Did you forget to add the standalone: true flag?`);
    }
    else
        throw kd(e) ? new Error(`A module with providers was imported from "${Ee(t)}". Modules with providers are not supported in standalone components imports.`) : new Error(`The "${Ee(e)}" type, imported from "${Ee(t)}", must be a standalone component / directive / pipe or an NgModule. Did you forget to add the required @Component / @Directive / @Pipe or @NgModule annotation?`);
} }
var lu = class {
    ownerNgModule = new Map;
    ngModulesWithSomeUnresolvedDecls = new Set;
    ngModulesScopeCache = new Map;
    standaloneComponentsScopeCache = new Map;
    resolveNgModulesDecls() { if (this.ngModulesWithSomeUnresolvedDecls.size !== 0) {
        for (let t of this.ngModulesWithSomeUnresolvedDecls) {
            let n = nn(t);
            if (n?.declarations)
                for (let r of Jn(n.declarations))
                    vo(r) && this.ownerNgModule.set(r, t);
        }
        this.ngModulesWithSomeUnresolvedDecls.clear();
    } }
    getComponentDependencies(t, n) { this.resolveNgModulesDecls(); let r = $(t); if (r === null)
        throw new Error(`Attempting to get component dependencies for a type that is not a component: ${t}`); if (r.standalone) {
        let o = this.getStandaloneComponentScope(t, n);
        return o.compilation.isPoisoned ? { dependencies: [] } : { dependencies: [...o.compilation.directives, ...o.compilation.pipes, ...o.compilation.ngModules] };
    }
    else {
        if (!this.ownerNgModule.has(t))
            return { dependencies: [] };
        let o = this.getNgModuleScope(this.ownerNgModule.get(t));
        return o.compilation.isPoisoned ? { dependencies: [] } : { dependencies: [...o.compilation.directives, ...o.compilation.pipes] };
    } }
    registerNgModule(t, n) { if (!pn(t))
        throw new Error(`Attempting to register a Type which is not NgModule as NgModule: ${t}`); this.ngModulesWithSomeUnresolvedDecls.add(t); }
    clearScopeCacheFor(t) { this.ngModulesScopeCache.delete(t), this.standaloneComponentsScopeCache.delete(t); }
    getNgModuleScope(t) { if (this.ngModulesScopeCache.has(t))
        return this.ngModulesScopeCache.get(t); let n = this.computeNgModuleScope(t); return this.ngModulesScopeCache.set(t, n), n; }
    computeNgModuleScope(t) { let n = _i(t), r = { exported: { directives: new Set, pipes: new Set }, compilation: { directives: new Set, pipes: new Set } }; for (let o of Jn(n.imports))
        if (pn(o)) {
            let i = this.getNgModuleScope(o);
            Ht(i.exported.directives, r.compilation.directives), Ht(i.exported.pipes, r.compilation.pipes);
        }
        else if (to(o))
            if (Ah(o) || vo(o))
                r.compilation.directives.add(o);
            else if (zi(o))
                r.compilation.pipes.add(o);
            else
                throw new T(980, "The standalone imported type is neither a component nor a directive nor a pipe");
        else {
            r.compilation.isPoisoned = !0;
            break;
        } if (!r.compilation.isPoisoned)
        for (let o of Jn(n.declarations)) {
            if (pn(o) || to(o)) {
                r.compilation.isPoisoned = !0;
                break;
            }
            zi(o) ? r.compilation.pipes.add(o) : r.compilation.directives.add(o);
        } for (let o of Jn(n.exports))
        if (pn(o)) {
            let i = this.getNgModuleScope(o);
            Ht(i.exported.directives, r.exported.directives), Ht(i.exported.pipes, r.exported.pipes), Ht(i.exported.directives, r.compilation.directives), Ht(i.exported.pipes, r.compilation.pipes);
        }
        else
            zi(o) ? r.exported.pipes.add(o) : r.exported.directives.add(o); return r; }
    getStandaloneComponentScope(t, n) { if (this.standaloneComponentsScopeCache.has(t))
        return this.standaloneComponentsScopeCache.get(t); let r = this.computeStandaloneComponentScope(t, n); return this.standaloneComponentsScopeCache.set(t, r), r; }
    computeStandaloneComponentScope(t, n) { let r = { compilation: { directives: new Set([t]), pipes: new Set, ngModules: new Set } }; for (let o of Be(n ?? [])) {
        let i = O(o);
        try {
            dS(i, t);
        }
        catch {
            return r.compilation.isPoisoned = !0, r;
        }
        if (pn(i)) {
            r.compilation.ngModules.add(i);
            let s = this.getNgModuleScope(i);
            if (s.exported.isPoisoned)
                return r.compilation.isPoisoned = !0, r;
            Ht(s.exported.directives, r.compilation.directives), Ht(s.exported.pipes, r.compilation.pipes);
        }
        else if (zi(i))
            r.compilation.pipes.add(i);
        else if (Ah(i) || vo(i))
            r.compilation.directives.add(i);
        else
            return r.compilation.isPoisoned = !0, r;
    } return r; }
    isOrphanComponent(t) { let n = $(t); return !n || n.standalone ? !1 : (this.resolveNgModulesDecls(), !this.ownerNgModule.has(t)); }
};
function Ht(e, t) { for (let n of e)
    t.add(n); }
var lr = new lu, ns = {}, rr = class {
    injector;
    parentInjector;
    constructor(t, n) { this.injector = t, this.parentInjector = n; }
    get(t, n, r) { let o = this.injector.get(t, ns, r); return o !== ns || n === ns ? o : this.parentInjector.get(t, n, r); }
};
function Ts(e, t, n) { let r = n ? e.styles : null, o = n ? e.classes : null, i = 0; if (t !== null)
    for (let s = 0; s < t.length; s++) {
        let a = t[s];
        if (typeof a == "number")
            i = a;
        else if (i == 1)
            o = Di(o, a);
        else if (i == 2) {
            let c = a, l = t[++s];
            r = Di(r, c + ": " + l + ";");
        }
    } n ? e.styles = r : e.stylesWithoutHost = r, n ? e.classes = o : e.classesWithoutHost = o; }
function xr(e, t = 0) { let n = g(); if (n === null)
    return le(e, t); let r = b(); return Lg(r, n, O(e), t); }
function nv() { let e = "invalid"; throw new Error(e); }
function rv(e, t, n, r, o) { let i = r === null ? null : { "": -1 }, s = o(e, n); if (s !== null) {
    let a = s, c = null, l = null;
    for (let u of s)
        if (u.resolveHostDirectives !== null) {
            [a, c, l] = u.resolveHostDirectives(s);
            break;
        }
    hS(e, t, n, a, i, c, l);
} i !== null && r !== null && fS(n, r, i); }
function fS(e, t, n) { let r = e.localNames = []; for (let o = 0; o < t.length; o += 2) {
    let i = n[t[o + 1]];
    if (i == null)
        throw new T(-301, !1);
    r.push(t[o], i);
} }
function pS(e, t, n) { t.componentOffset = n, (e.components ??= []).push(t.index); }
function hS(e, t, n, r, o, i, s) { let a = r.length, c = !1; for (let f = 0; f < a; f++) {
    let p = r[f];
    !c && we(p) && (c = !0, pS(e, n, f)), Fl(fs(n, t), e, p.type);
} IS(n, e.data.length, a); for (let f = 0; f < a; f++) {
    let p = r[f];
    p.providersResolver && p.providersResolver(p);
} let l = !1, u = !1, d = Jo(e, t, a, null); a > 0 && (n.directiveToIndex = new Map); for (let f = 0; f < a; f++) {
    let p = r[f];
    if (n.mergedAttrs = ar(n.mergedAttrs, p.hostAttrs), mS(e, n, t, d, p), ES(d, p, o), s !== null && s.has(p)) {
        let [m, v] = s.get(p);
        n.directiveToIndex.set(p.type, [d, m + n.directiveStart, v + n.directiveStart]);
    }
    else
        (i === null || !i.has(p)) && n.directiveToIndex.set(p.type, d);
    p.contentQueries !== null && (n.flags |= 4), (p.hostBindings !== null || p.hostAttrs !== null || p.hostVars !== 0) && (n.flags |= 64);
    let h = p.type.prototype;
    !l && (h.ngOnChanges || h.ngOnInit || h.ngDoCheck) && ((e.preOrderHooks ??= []).push(n.index), l = !0), !u && (h.ngOnChanges || h.ngDoCheck) && ((e.preOrderCheckHooks ??= []).push(n.index), u = !0), d++;
} gS(e, n, i); }
function gS(e, t, n) { for (let r = t.directiveStart; r < t.directiveEnd; r++) {
    let o = e.data[r];
    if (n === null || !n.has(o))
        Oh(0, t, o, r), Oh(1, t, o, r), kh(t, r, !1);
    else {
        let i = n.get(o);
        xh(0, t, i, r), xh(1, t, i, r), kh(t, r, !0);
    }
} }
function Oh(e, t, n, r) { let o = e === 0 ? n.inputs : n.outputs; for (let i in o)
    if (o.hasOwnProperty(i)) {
        let s;
        e === 0 ? s = t.inputs ??= {} : s = t.outputs ??= {}, s[i] ??= [], s[i].push(r), ov(t, i);
    } }
function xh(e, t, n, r) { let o = e === 0 ? n.inputs : n.outputs; for (let i in o)
    if (o.hasOwnProperty(i)) {
        let s = o[i], a;
        e === 0 ? a = t.hostDirectiveInputs ??= {} : a = t.hostDirectiveOutputs ??= {}, a[s] ??= [], a[s].push(r, i), ov(t, s);
    } }
function ov(e, t) { t === "class" ? e.flags |= 8 : t === "style" && (e.flags |= 16); }
function kh(e, t, n) { let { attrs: r, inputs: o, hostDirectiveInputs: i } = e; if (r === null || !n && o === null || n && i === null || dd(e)) {
    e.initialInputs ??= [], e.initialInputs.push(null);
    return;
} let s = null, a = 0; for (; a < r.length;) {
    let c = r[a];
    if (c === 0) {
        a += 4;
        continue;
    }
    else if (c === 5) {
        a += 2;
        continue;
    }
    else if (typeof c == "number")
        break;
    if (!n && o.hasOwnProperty(c)) {
        let l = o[c];
        for (let u of l)
            if (u === t) {
                s ??= [], s.push(c, r[a + 1]);
                break;
            }
    }
    else if (n && i.hasOwnProperty(c)) {
        let l = i[c];
        for (let u = 0; u < l.length; u += 2)
            if (l[u] === t) {
                s ??= [], s.push(l[u + 1], r[a + 1]);
                break;
            }
    }
    a += 2;
} e.initialInputs ??= [], e.initialInputs.push(s); }
function mS(e, t, n, r, o) { e.data[r] = o; let i = o.factory || (o.factory = Ot(o.type, !0)), s = new mn(i, we(o), xr, null); e.blueprint[r] = s, n[r] = s, yS(e, t, r, Jo(e, n, o.hostVars, V), o); }
function yS(e, t, n, r, o) { let i = o.hostBindings; if (i) {
    let s = e.hostBindingOpCodes;
    s === null && (s = e.hostBindingOpCodes = []);
    let a = ~t.index;
    vS(s) != a && s.push(a), s.push(n, r, i);
} }
function vS(e) { let t = e.length; for (; t > 0;) {
    let n = e[--t];
    if (typeof n == "number" && n < 0)
        return n;
} return 0; }
function ES(e, t, n) { if (n) {
    if (t.exportAs)
        for (let r = 0; r < t.exportAs.length; r++)
            n[t.exportAs[r]] = e;
    we(t) && (n[""] = e);
} }
function IS(e, t, n) { e.flags |= 1, e.directiveStart = t, e.directiveEnd = t + n, e.providerIndexes = t; }
function Pd(e, t, n, r, o, i, s, a) { let c = t[y], l = c.consts, u = de(l, s), d = Nn(c, e, n, r, u); return i && rv(c, t, d, de(l, a), o), d.mergedAttrs = ar(d.mergedAttrs, d.attrs), d.attrs !== null && Ts(d, d.attrs, !1), d.mergedAttrs !== null && Ts(d, d.mergedAttrs, !0), c.queries !== null && c.queries.elementStart(c, d), d; }
function Ld(e, t) { Ng(e, t), Rc(t) && e.queries.elementEnd(t); }
function iv(e, t, n, r, o, i) { let s = t.consts, a = de(s, o), c = Nn(t, e, n, r, a); if (c.mergedAttrs = ar(c.mergedAttrs, c.attrs), i != null) {
    let l = de(s, i);
    c.localNames = [];
    for (let u = 0; u < l.length; u += 2)
        c.localNames.push(l[u], -1);
} return c.attrs !== null && Ts(c, c.attrs, !1), c.mergedAttrs !== null && Ts(c, c.mergedAttrs, !0), t.queries !== null && t.queries.elementStart(t, c), c; }
function ko(e) { return ma(e) ? Array.isArray(e) || !(e instanceof Map) && Symbol.iterator in e : !1; }
function DS(e, t, n) { let r = e[Symbol.iterator](), o = t[Symbol.iterator](); for (;;) {
    let i = r.next(), s = o.next();
    if (i.done && s.done)
        return !0;
    if (i.done || s.done || !n(i.value, s.value))
        return !1;
} }
function sv(e, t) { if (Array.isArray(e))
    for (let n = 0; n < e.length; n++)
        t(e[n]);
else {
    let n = e[Symbol.iterator](), r;
    for (; !(r = n.next()).done;)
        t(r.value);
} }
function ma(e) { return e !== null && (typeof e == "function" || typeof e == "object"); }
function av(e, t) { let n = ko(e), r = ko(t); return n && r ? DS(e, t, av) : !n && (e && (typeof e == "object" || typeof e == "function")) && !r && (t && (typeof t == "object" || typeof t == "function")) ? !0 : Object.is(e, t); }
function lt(e, t, n) { return e[t] = n; }
function ri(e, t) { return e[t]; }
function Q(e, t, n) { if (n === V)
    return !1; let r = e[t]; return Object.is(r, n) ? !1 : (e[t] = n, !0); }
function En(e, t, n, r) { let o = Q(e, t, n); return Q(e, t + 1, r) || o; }
function ya(e, t, n, r, o) { let i = En(e, t, n, r); return Q(e, t + 2, o) || i; }
function Ve(e, t, n, r, o, i) { let s = En(e, t, n, r); return En(e, t + 2, o, i) || s; }
function Eo(e, t, n) { return function r(o) { let i = Oe(e) ? he(e.index, t) : t; ei(i, 5); let s = t[B], a = Ph(t, s, n, o), c = r.__ngNextListenerFn__; for (; c;)
    a = Ph(t, s, c, o) && a, c = c.__ngNextListenerFn__; return a; }; }
function Ph(e, t, n, r) { let o = sh(null); try {
    return j(6, t, n), n(r) !== !1;
}
catch (i) {
    return Nd(e, i), !1;
}
finally {
    j(7, t, n), sh(o);
} }
function cv(e, t, n, r, o, i, s, a) { let c = Vn(e), l = !1, u = null; if (!r && c && (u = TS(t, n, i, e.index)), u !== null) {
    let d = u.__ngLastListenerFn__ || u;
    d.__ngNextListenerFn__ = s, u.__ngLastListenerFn__ = s, l = !0;
}
else {
    let d = xe(e, n), f = r ? r(d) : d;
    Tw(n, f, i, a);
    let p = o.listen(f, i, a), h = r ? m => r(x(m[e.index])) : e.index;
    lv(h, t, n, i, a, p, !1);
} return l; }
function TS(e, t, n, r) { let o = e.cleanup; if (o != null)
    for (let i = 0; i < o.length - 1; i += 2) {
        let s = o[i];
        if (s === n && o[i + 1] === r) {
            let a = t[xt], c = o[i + 2];
            return a && a.length > c ? a[c] : null;
        }
        typeof s == "string" && (i += 2);
    } return null; }
function lv(e, t, n, r, o, i, s) { let a = t.firstCreatePass ? Fc(t) : null, c = Lc(n), l = c.length; c.push(o, i), a && a.push(r, e, l, (l + 1) * (s ? -1 : 1)); }
function CS(e, t, n, r, o) { let i = Eo(e, t, n), s = MS(e, t, r, o, i); }
function MS(e, t, n, r, o) { let i = null, s = null, a = null, c = !1, l = e.directiveToIndex.get(n.type); if (typeof l == "number" ? i = l : [i, s, a] = l, s !== null && a !== null && e.hostDirectiveOutputs?.hasOwnProperty(r)) {
    let u = e.hostDirectiveOutputs[r];
    for (let d = 0; d < u.length; d += 2) {
        let f = u[d];
        if (f >= s && f <= a)
            c = !0, Cs(e, t, f, u[d + 1], r, o);
        else if (f > a)
            break;
    }
} return n.outputs.hasOwnProperty(r) && (c = !0, Cs(e, t, i, r, r, o)), c; }
function Cs(e, t, n, r, o, i) { let s = t[n], a = t[y], l = a.data[n].outputs[r], d = s[l].subscribe(i); lv(e.index, a, t, o, i, d, !0); }
var Ut = Symbol("BINDING"), wS = { kind: "input", requiredVars: 1 }, NS = { kind: "output", requiredVars: 0 };
function _S(e, t, n) { let r = g(), o = Ie(); if (Q(r, o, n)) {
    let i = r[y], s = Le(), a = he(s.index, r);
    ei(a, 1);
    let c = i.directiveRegistry[e], l = ZN(s, i, r, c, t, n);
} }
function uv(e, t) { let n = { [Ut]: wS, update: () => _S(n.targetIdx, e, t()) }; return n; }
function dv(e, t) { let n = { [Ut]: NS, create: () => { let r = g(), o = b(), s = r[y].directiveRegistry[n.targetIdx]; CS(o, r, t, s, e); } }; return n; }
function SS(e, t) { let n = uv(e, t), r = dv(e + "Change", i => t.set(i)); return { [Ut]: { kind: "twoWay", requiredVars: n[Ut].requiredVars + r[Ut].requiredVars }, set targetIdx(i) { n.targetIdx = i, r.targetIdx = i; }, create: r.create, update: n.update }; }
var Ms = class extends ni {
    ngModule;
    constructor(t) { super(), this.ngModule = t; }
    resolveComponentFactory(t) { let n = $(t); return new qt(n, this.ngModule); }
};
function bS(e) { return Object.keys(e).map(t => { let [n, r, o] = e[t], i = { propName: n, templateName: t, isSignal: (r & na.SignalBased) !== 0 }; return o && (i.transform = o), i; }); }
function RS(e) { return Object.keys(e).map(t => ({ propName: e[t], templateName: t })); }
function AS(e, t, n) { let r = t instanceof _e ? t : t?.injector; return r && e.getStandaloneInjector !== null && (r = e.getStandaloneInjector(r) || r), r ? new rr(n, r) : n; }
function OS(e) { let t = e.get(xo, null); if (t === null)
    throw new T(407, !1); let n = e.get(tv, null), r = e.get(Me, null); return { rendererFactory: t, sanitizer: n, changeDetectionScheduler: r, ngReflect: !1 }; }
function xS(e, t) { let n = (e.selectors[0][0] || "div").toLowerCase(); return ea(t, n, n === "svg" ? Oc : n === "math" ? xc : null); }
var qt = class extends ga {
    componentDef;
    ngModule;
    selector;
    componentType;
    ngContentSelectors;
    isBoundToModule;
    cachedInputs = null;
    cachedOutputs = null;
    get inputs() { return this.cachedInputs ??= bS(this.componentDef.inputs), this.cachedInputs; }
    get outputs() { return this.cachedOutputs ??= RS(this.componentDef.outputs), this.cachedOutputs; }
    constructor(t, n) { super(), this.componentDef = t, this.ngModule = n, this.componentType = t.type, this.selector = wN(t.selectors), this.ngContentSelectors = t.ngContentSelectors ?? [], this.isBoundToModule = !!n; }
    create(t, n, r, o, i, s) { j(22); let a = A(null); try {
        let c = this.componentDef, l = kS(r, c, s, i), u = AS(c, o || this.ngModule, t), d = OS(u), f = d.rendererFactory.createRenderer(null, c), p = r ? VN(f, r, c.encapsulation, u) : xS(c, f), h = s?.some(Lh) || i?.some(I => typeof I != "function" && I.bindings.some(Lh)), m = ta(null, l, null, 512 | gd(c), null, null, d, f, u, null, vm(p, u, !0));
        m[E] = p, Hi(m);
        let v = null;
        try {
            let I = Pd(E, m, 2, "#host", () => l.directiveRegistry, !0, 0);
            p && (ey(f, p, I), je(p, m)), oa(l, m, I), id(l, I, m), Ld(l, I), n !== void 0 && LS(I, this.ngContentSelectors, n), v = he(I.index, m), m[B] = v[B], aa(l, m, null);
        }
        catch (I) {
            throw v !== null && Vl(v), Vl(m), I;
        }
        finally {
            j(23), Bi();
        }
        return new ws(this.componentType, m, !!h);
    }
    finally {
        A(a);
    } }
};
function kS(e, t, n, r) { let o = e ? ["ng-version", "20.1.7"] : NN(t.selectors[0]), i = null, s = null, a = 0; if (n)
    for (let u of n)
        a += u[Ut].requiredVars, u.create && (u.targetIdx = 0, (i ??= []).push(u)), u.update && (u.targetIdx = 0, (s ??= []).push(u)); if (r)
    for (let u = 0; u < r.length; u++) {
        let d = r[u];
        if (typeof d != "function")
            for (let f of d.bindings) {
                a += f[Ut].requiredVars;
                let p = u + 1;
                f.create && (f.targetIdx = p, (i ??= []).push(f)), f.update && (f.targetIdx = p, (s ??= []).push(f));
            }
    } let c = [t]; if (r)
    for (let u of r) {
        let d = typeof u == "function" ? u : u.type, f = be(d);
        c.push(f);
    } return hd(0, null, PS(i, s), 1, a, c, null, null, null, [o], null); }
function PS(e, t) { return !e && !t ? null : n => { if (n & 1 && e)
    for (let r of e)
        r.create(); if (n & 2 && t)
    for (let r of t)
        r.update(); }; }
function Lh(e) { let t = e[Ut].kind; return t === "input" || t === "twoWay"; }
var ws = class extends ev {
    _rootLView;
    _hasInputBindings;
    instance;
    hostView;
    changeDetectorRef;
    componentType;
    location;
    previousInputValues = null;
    _tNode;
    constructor(t, n, r) { super(), this._rootLView = n, this._hasInputBindings = r, this._tNode = pt(n[y], E), this.location = Ir(this._tNode, n), this.instance = he(this._tNode.index, n)[B], this.hostView = this.changeDetectorRef = new $t(n, void 0), this.componentType = t; }
    setInput(t, n) { this._hasInputBindings; let r = this._tNode; if (this.previousInputValues ??= new Map, this.previousInputValues.has(t) && Object.is(this.previousInputValues.get(t), n))
        return; let o = this._rootLView, i = _d(r, o[y], o, t, n); this.previousInputValues.set(t, n); let s = he(r.index, o); ei(s, 1); }
    get injector() { return new Bt(this._tNode, this._rootLView); }
    destroy() { this.hostView.destroy(); }
    onDestroy(t) { this.hostView.onDestroy(t); }
};
function LS(e, t, n) { let r = e.projection = []; for (let o = 0; o < t.length; o++) {
    let i = n[o];
    r.push(i != null && i.length ? Array.from(i) : null);
} }
var va = (() => { class e {
    static __NG_ELEMENT_ID__ = FS;
} return e; })();
function FS() { let e = b(); return pv(e, g()); }
var jS = va, fv = class extends jS {
    _lContainer;
    _hostTNode;
    _hostLView;
    constructor(t, n, r) { super(), this._lContainer = t, this._hostTNode = n, this._hostLView = r; }
    get element() { return Ir(this._hostTNode, this._hostLView); }
    get injector() { return new Bt(this._hostTNode, this._hostLView); }
    get parentInjector() { let t = Vu(this._hostTNode, this._hostLView); if (Rg(t)) {
        let n = us(t, this._hostLView), r = ls(t), o = n[y].data[r + 8];
        return new Bt(o, n);
    }
    else
        return new Bt(null, this._hostLView); }
    clear() { for (; this.length > 0;)
        this.remove(this.length - 1); }
    get(t) { let n = Fh(this._lContainer); return n !== null && n[t] || null; }
    get length() { return this._lContainer.length - W; }
    createEmbeddedView(t, n, r) { let o, i; typeof r == "number" ? o = r : r != null && (o = r.index, i = r.injector); let s = Oo(this._lContainer, t.ssrId), a = t.createEmbeddedViewImpl(n || {}, i, s); return this.insertImpl(a, o, vn(this._hostTNode, s)), a; }
    createComponent(t, n, r, o, i, s, a) { let c = t && !go(t), l; if (c)
        l = n;
    else {
        let v = n || {};
        l = v.index, r = v.injector, o = v.projectableNodes, i = v.environmentInjector || v.ngModuleRef, s = v.directives, a = v.bindings;
    } let u = c ? t : new qt($(t)), d = r || this.parentInjector; if (!i && u.ngModule == null) {
        let I = (c ? d : this.parentInjector).get(_e, null);
        I && (i = I);
    } let f = $(u.componentType ?? {}), p = Oo(this._lContainer, f?.id ?? null), h = p?.firstChild ?? null, m = u.create(d, o, h, i, s, a); return this.insertImpl(m.hostView, l, vn(this._hostTNode, p)), m; }
    insert(t, n) { return this.insertImpl(t, n, !0); }
    insertImpl(t, n, r) { let o = t._lView; if (Wp(o)) {
        let a = this.indexOf(t);
        if (a !== -1)
            this.detach(a);
        else {
            let c = o[q], l = new fv(c, c[ie], c[q]);
            l.detach(l.indexOf(t));
        }
    } let i = this._adjustIndex(n), s = this._lContainer; return Ar(s, o, i, r), t.attachToViewContainerRef(), Ic(Cl(s), i, t), t; }
    move(t, n) { return this.insert(t, n); }
    indexOf(t) { let n = Fh(this._lContainer); return n !== null ? n.indexOf(t) : -1; }
    remove(t) { let n = this._adjustIndex(t, -1), r = Ro(this._lContainer, n); r && (Jr(Cl(this._lContainer), n), Xo(r[y], r)); }
    detach(t) { let n = this._adjustIndex(t, -1), r = Ro(this._lContainer, n); return r && Jr(Cl(this._lContainer), n) != null ? new $t(r) : null; }
    _adjustIndex(t, n = 0) { return t ?? this.length + n; }
};
function Fh(e) { return e[ro]; }
function Cl(e) { return e[ro] || (e[ro] = []); }
function pv(e, t) { let n, r = t[e.index]; return Z(r) ? n = r : (n = Ny(r, t, null, e), t[e.index] = n, md(t, n)), hv(n, t, e, r), new fv(n, e, t); }
function VS(e, t) { let n = e[S], r = n.createComment(""), o = xe(t, e), i = n.parentNode(o); return yn(n, i, r, n.nextSibling(o), !1), r; }
var hv = mv, Fd = () => !1;
function gv(e, t, n) { return Fd(e, t, n); }
function mv(e, t, n, r) { if (e[Ge])
    return; let o; n.type & 8 ? o = x(r) : o = VS(t, n), e[Ge] = o; }
function HS(e, t, n) { if (e[Ge] && e[Ae])
    return !0; let r = n[se], o = t.index - E; if (!r || Tr(t) || Ks(r, o))
    return !1; let s = $l(r, o), a = r.data[Cr]?.[o], [c, l] = oS(s, a); return e[Ge] = c, e[Ae] = l, !0; }
function BS(e, t, n, r) { Fd(e, n, t) || mv(e, t, n, r); }
function yv() { hv = BS, Fd = HS; }
var uu = class e {
    queryList;
    matches = null;
    constructor(t) { this.queryList = t; }
    clone() { return new e(this.queryList); }
    setDirty() { this.queryList.setDirty(); }
}, du = class e {
    queries;
    constructor(t = []) { this.queries = t; }
    createEmbeddedView(t) { let n = t.queries; if (n !== null) {
        let r = t.contentQueries !== null ? t.contentQueries[0] : n.length, o = [];
        for (let i = 0; i < r; i++) {
            let s = n.getByIndex(i), a = this.queries[s.indexInDeclarationView];
            o.push(a.clone());
        }
        return new e(o);
    } return null; }
    insertView(t) { this.dirtyQueriesWithMatches(t); }
    detachView(t) { this.dirtyQueriesWithMatches(t); }
    finishViewCreation(t) { this.dirtyQueriesWithMatches(t); }
    dirtyQueriesWithMatches(t) { for (let n = 0; n < this.queries.length; n++)
        Vd(t, n).matches !== null && this.queries[n].setDirty(); }
}, Ns = class {
    flags;
    read;
    predicate;
    constructor(t, n, r = null) { this.flags = n, this.read = r, typeof t == "string" ? this.predicate = WS(t) : this.predicate = t; }
}, fu = class e {
    queries;
    constructor(t = []) { this.queries = t; }
    elementStart(t, n) { for (let r = 0; r < this.queries.length; r++)
        this.queries[r].elementStart(t, n); }
    elementEnd(t) { for (let n = 0; n < this.queries.length; n++)
        this.queries[n].elementEnd(t); }
    embeddedTView(t) { let n = null; for (let r = 0; r < this.length; r++) {
        let o = n !== null ? n.length : 0, i = this.getByIndex(r).embeddedTView(t, o);
        i && (i.indexInDeclarationView = r, n !== null ? n.push(i) : n = [i]);
    } return n !== null ? new e(n) : null; }
    template(t, n) { for (let r = 0; r < this.queries.length; r++)
        this.queries[r].template(t, n); }
    getByIndex(t) { return this.queries[t]; }
    get length() { return this.queries.length; }
    track(t) { this.queries.push(t); }
}, pu = class e {
    metadata;
    matches = null;
    indexInDeclarationView = -1;
    crossesNgTemplate = !1;
    _declarationNodeIndex;
    _appliesToNextNode = !0;
    constructor(t, n = -1) { this.metadata = t, this._declarationNodeIndex = n; }
    elementStart(t, n) { this.isApplyingToNode(n) && this.matchTNode(t, n); }
    elementEnd(t) { this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1); }
    template(t, n) { this.elementStart(t, n); }
    embeddedTView(t, n) { return this.isApplyingToNode(t) ? (this.crossesNgTemplate = !0, this.addMatch(-t.index, n), new e(this.metadata)) : null; }
    isApplyingToNode(t) { if (this._appliesToNextNode && (this.metadata.flags & 1) !== 1) {
        let n = this._declarationNodeIndex, r = t.parent;
        for (; r !== null && r.type & 8 && r.index !== n;)
            r = r.parent;
        return n === (r !== null ? r.index : -1);
    } return this._appliesToNextNode; }
    matchTNode(t, n) { let r = this.metadata.predicate; if (Array.isArray(r))
        for (let o = 0; o < r.length; o++) {
            let i = r[o];
            this.matchTNodeWithReadOption(t, n, US(n, i)), this.matchTNodeWithReadOption(t, n, Xi(n, t, i, !1, !1));
        }
    else
        r === Ao ? n.type & 4 && this.matchTNodeWithReadOption(t, n, -1) : this.matchTNodeWithReadOption(t, n, Xi(n, t, r, !1, !1)); }
    matchTNodeWithReadOption(t, n, r) { if (r !== null) {
        let o = this.metadata.read;
        if (o !== null)
            if (o === $o || o === va || o === Ao && n.type & 4)
                this.addMatch(n.index, -2);
            else {
                let i = Xi(n, t, o, !1, !1);
                i !== null && this.addMatch(n.index, i);
            }
        else
            this.addMatch(n.index, r);
    } }
    addMatch(t, n) { this.matches === null ? this.matches = [t, n] : this.matches.push(t, n); }
};
function US(e, t) { let n = e.localNames; if (n !== null) {
    for (let r = 0; r < n.length; r += 2)
        if (n[r] === t)
            return n[r + 1];
} return null; }
function $S(e, t) { return e.type & 11 ? Ir(e, t) : e.type & 4 ? la(e, t) : null; }
function qS(e, t, n, r) { return n === -1 ? $S(t, e) : n === -2 ? GS(e, t, r) : No(e, e[y], n, t); }
function GS(e, t, n) { if (n === $o)
    return Ir(t, e); if (n === Ao)
    return la(t, e); if (n === va)
    return pv(t, e); }
function vv(e, t, n, r) { let o = t[et].queries[r]; if (o.matches === null) {
    let i = e.data, s = n.matches, a = [];
    for (let c = 0; s !== null && c < s.length; c += 2) {
        let l = s[c];
        if (l < 0)
            a.push(null);
        else {
            let u = i[l];
            a.push(qS(t, u, s[c + 1], n.metadata.read));
        }
    }
    o.matches = a;
} return o.matches; }
function hu(e, t, n, r) { let o = e.queries.getByIndex(n), i = o.matches; if (i !== null) {
    let s = vv(e, t, o, n);
    for (let a = 0; a < i.length; a += 2) {
        let c = i[a];
        if (c > 0)
            r.push(s[a / 2]);
        else {
            let l = i[a + 1], u = t[-c];
            for (let d = W; d < u.length; d++) {
                let f = u[d];
                f[Pt] === f[q] && hu(f[y], f, l, r);
            }
            if (u[an] !== null) {
                let d = u[an];
                for (let f = 0; f < d.length; f++) {
                    let p = d[f];
                    hu(p[y], p, l, r);
                }
            }
        }
    }
} return r; }
function jd(e, t) { return e[et].queries[t].queryList; }
function Ev(e, t, n) { let r = new ps((n & 4) === 4); return zp(e, t, r, r.destroy), (t[et] ??= new du).queries.push(new uu(r)) - 1; }
function Iv(e, t, n) { let r = R(); return r.firstCreatePass && (Tv(r, new Ns(e, t, n), -1), (t & 2) === 2 && (r.staticViewQueries = !0)), Ev(r, g(), t); }
function Dv(e, t, n, r) { let o = R(); if (o.firstCreatePass) {
    let i = b();
    Tv(o, new Ns(t, n, r), i.index), zS(o, e), (n & 2) === 2 && (o.staticContentQueries = !0);
} return Ev(o, g(), n); }
function WS(e) { return e.split(",").map(t => t.trim()); }
function Tv(e, t, n) { e.queries === null && (e.queries = new fu), e.queries.track(new pu(t, n)); }
function zS(e, t) { let n = e.contentQueries || (e.contentQueries = []), r = n.length ? n[n.length - 1] : -1; t !== r && n.push(e.queries.length - 1, t); }
function Vd(e, t) { return e.queries.getByIndex(t); }
function Cv(e, t) { let n = e[y], r = Vd(n, t); return r.crossesNgTemplate ? hu(n, e, t, []) : vv(n, e, r, t); }
function Hd(e, t, n) { let r, o = yi(() => { r._dirtyCounter(); let i = QS(r, e); if (t && i === void 0)
    throw new T(-951, !1); return i; }); return r = o[re], r._dirtyCounter = Vt(0), r._flatValue = void 0, o; }
function Bd(e) { return Hd(!0, !1, e); }
function Ud(e) { return Hd(!0, !0, e); }
function $d(e) { return Hd(!1, !1, e); }
function Mv(e, t) { let n = e[re]; n._lView = g(), n._queryIndex = t, n._queryList = jd(n._lView, t), n._queryList.onDirty(() => n._dirtyCounter.update(r => r + 1)); }
function QS(e, t) { let n = e._lView, r = e._queryIndex; if (n === void 0 || r === void 0 || n[M] & 4)
    return t ? void 0 : k; let o = jd(n, r), i = Cv(n, r); return o.reset(i, Ug), t ? o.first : o._changesDetected || e._flatValue === void 0 ? e._flatValue = o.toArray() : e._flatValue; }
function wv(e) { let t = [], n = new Map; function r(o) { let i = n.get(o); if (!i) {
    let s = e(o);
    n.set(o, i = s.then(a => JS(o, a)));
} return i; } return ur.forEach((o, i) => { let s = []; o.templateUrl && s.push(r(o.templateUrl).then(l => { o.template = l; })); let a = typeof o.styles == "string" ? [o.styles] : o.styles || []; if (o.styles = a, o.styleUrl && o.styleUrls?.length)
    throw new Error("@Component cannot define both `styleUrl` and `styleUrls`. Use `styleUrl` if the component has one stylesheet, or `styleUrls` if it has multiple"); if (o.styleUrls?.length) {
    let l = o.styles.length, u = o.styleUrls;
    o.styleUrls.forEach((d, f) => { a.push(""), s.push(r(d).then(p => { a[l + f] = p, u.splice(u.indexOf(d), 1), u.length == 0 && (o.styleUrls = void 0); })); });
}
else
    o.styleUrl && s.push(r(o.styleUrl).then(l => { a.push(l), o.styleUrl = void 0; })); let c = Promise.all(s).then(() => XS(i)); t.push(c); }), _v(), Promise.all(t).then(() => { }); }
var ur = new Map, Po = new Set;
function ZS(e, t) { Nv(t) && (ur.set(e, t), Po.add(e)); }
function YS(e) { return Po.has(e); }
function Nv(e) { return !!(e.templateUrl && !e.hasOwnProperty("template") || e.styleUrls && e.styleUrls.length || e.styleUrl); }
function _v() { let e = ur; return ur = new Map, e; }
function KS(e) { Po.clear(), e.forEach((t, n) => Po.add(n)), ur = e; }
function Sv() { return ur.size === 0; }
function JS(e, t) { return typeof t == "string" ? t : t.status !== void 0 && t.status !== 200 ? Promise.reject(new T(918, !1)) : t.text(); }
function XS(e) { Po.delete(e); }
var gu = new Map, bv = !0;
function eb(e, t, n) { if (t && t !== n && bv)
    throw new Error(`Duplicate module registered for ${e} - ${He(t)} vs ${He(t.name)}`); }
function qd(e, t) { let n = gu.get(t) || null; eb(t, n, e), gu.set(t, e); }
function Gd(e) { return gu.get(e); }
function tb(e) { bv = !e; }
function Rv(e, t, n) { let r = g(), o = Le(), i = xe(o, r); if (o.type === 2 && t.toLowerCase() === "iframe") {
    let s = i;
    s.src = "", s.srcdoc = _r(""), Ko(r[S], s);
    let a = !1;
    throw new T(-910, a);
} return e; }
var jh = new Set;
function fe(e) { jh.has(e) || (jh.add(e), performance?.mark?.("mark_feature_usage", { detail: { feature: e } })); }
var dr = class {
}, Av = class {
};
function Ov(e, t) { return new fr(e, t ?? null, []); }
var nb = Ov, fr = class extends dr {
    ngModuleType;
    _parent;
    _bootstrapComponents = [];
    _r3Injector;
    instance;
    destroyCbs = [];
    componentFactoryResolver = new Ms(this);
    constructor(t, n, r, o = !0) { super(), this.ngModuleType = t, this._parent = n; let i = nn(t); this._bootstrapComponents = Jn(i.bootstrap), this._r3Injector = il(t, n, [{ provide: dr, useValue: this }, { provide: ni, useValue: this.componentFactoryResolver }, ...r], He(t), new Set(["environment"])), o && this.resolveInjectorInitializers(); }
    resolveInjectorInitializers() { this._r3Injector.resolveInjectorInitializers(), this.instance = this._r3Injector.get(this.ngModuleType); }
    get injector() { return this._r3Injector; }
    destroy() { let t = this._r3Injector; !t.destroyed && t.destroy(), this.destroyCbs.forEach(n => n()), this.destroyCbs = null; }
    onDestroy(t) { this.destroyCbs.push(t); }
}, pr = class extends Av {
    moduleType;
    constructor(t) { super(), this.moduleType = t; }
    create(t) { return new fr(this.moduleType, t, []); }
};
function xv(e, t, n) { return new fr(e, t, n, !1); }
var Lo = class extends dr {
    injector;
    componentFactoryResolver = new Ms(this);
    instance = null;
    constructor(t) { super(); let n = new Xt([...t.providers, { provide: dr, useValue: this }, { provide: ni, useValue: this.componentFactoryResolver }], t.parent || Fn(), t.debugName, new Set(["environment"])); this.injector = n, t.runEnvironmentInitializers && n.resolveInjectorInitializers(); }
    destroy() { this.injector.destroy(); }
    onDestroy(t) { this.injector.onDestroy(t); }
};
function Wd(e, t, n = null) { return new Lo({ providers: e, parent: t, debugName: n, runEnvironmentInitializers: !0 }).injector; }
var rb = (() => { class e {
    _injector;
    cachedInjectors = new Map;
    constructor(n) { this._injector = n; }
    getOrCreateStandaloneInjector(n) { if (!n.standalone)
        return null; if (!this.cachedInjectors.has(n)) {
        let r = Si(!1, n.type), o = r.length > 0 ? Wd([r], this._injector, `Standalone[${n.type.name}]`) : null;
        this.cachedInjectors.set(n, o);
    } return this.cachedInjectors.get(n); }
    ngOnDestroy() { try {
        for (let n of this.cachedInjectors.values())
            n !== null && n.destroy();
    }
    finally {
        this.cachedInjectors.clear();
    } }
    static \u0275prov = F({ token: e, providedIn: "environment", factory: () => new e(le(_e)) });
} return e; })();
function kv(e) { return ct(() => { let t = jv(e), n = Ce(U({}, t), { decls: e.decls, vars: e.vars, template: e.template, consts: e.consts || null, ngContentSelectors: e.ngContentSelectors, onPush: e.changeDetection === Vs.OnPush, directiveDefs: null, pipeDefs: null, dependencies: t.standalone && e.dependencies || null, getStandaloneInjector: t.standalone ? o => o.get(rb).getOrCreateStandaloneInjector(n) : null, getExternalStyles: null, signals: e.signals ?? !1, data: e.data || {}, encapsulation: e.encapsulation || Et.Emulated, styles: e.styles || k, _: null, schemas: e.schemas || null, tView: null, id: "" }); t.standalone && fe("NgStandalone"), Vv(n); let r = e.dependencies; return n.directiveDefs = _s(r, Pv), n.pipeDefs = _s(r, Ue), n.id = ab(n), n; }); }
function Pv(e) { return $(e) || be(e); }
function zd(e) { return ct(() => ({ type: e.type, bootstrap: e.bootstrap || k, declarations: e.declarations || k, imports: e.imports || k, exports: e.exports || k, transitiveCompileScopes: null, schemas: e.schemas || null, id: e.id || null })); }
function ob(e, t) { if (e == null)
    return ke; let n = {}; for (let r in e)
    if (e.hasOwnProperty(r)) {
        let o = e[r], i, s, a, c;
        Array.isArray(o) ? (a = o[0], i = o[1], s = o[2] ?? i, c = o[3] || null) : (i = o, s = o, a = na.None, c = null), n[i] = [r, a, c], t[i] = s;
    } return n; }
function ib(e) { if (e == null)
    return ke; let t = {}; for (let n in e)
    e.hasOwnProperty(n) && (t[e[n]] = n); return t; }
function Lv(e) { return ct(() => { let t = jv(e); return Vv(t), t; }); }
function Fv(e) { return { type: e.type, name: e.name, factory: null, pure: e.pure !== !1, standalone: e.standalone ?? !0, onDestroy: e.type.prototype.ngOnDestroy || null }; }
function jv(e) { let t = {}; return { type: e.type, providersResolver: null, factory: null, hostBindings: e.hostBindings || null, hostVars: e.hostVars || 0, hostAttrs: e.hostAttrs || null, contentQueries: e.contentQueries || null, declaredInputs: t, inputConfig: e.inputs || ke, exportAs: e.exportAs || null, standalone: e.standalone ?? !0, signals: e.signals === !0, selectors: e.selectors || k, viewQuery: e.viewQuery || null, features: e.features || null, setInput: null, resolveHostDirectives: null, hostDirectives: null, inputs: ob(e.inputs, t), outputs: ib(e.outputs), debugInfo: null }; }
function Vv(e) { e.features?.forEach(t => t(e)); }
function _s(e, t) { return e ? () => { let n = typeof e == "function" ? e() : e, r = []; for (let o of n) {
    let i = t(o);
    i !== null && r.push(i);
} return r; } : null; }
var sb = new Map;
function ab(e) { let t = 0, n = typeof e.consts == "function" ? "" : e.consts, r = [e.selectors, e.ngContentSelectors, e.hostVars, e.hostAttrs, n, e.vars, e.decls, e.encapsulation, e.standalone, e.signals, e.exportAs, JSON.stringify(e.inputs), JSON.stringify(e.outputs), Object.getOwnPropertyNames(e.type.prototype), !!e.contentQueries, !!e.viewQuery]; for (let i of r.join("|"))
    t = Math.imul(31, t) + i.charCodeAt(0) << 0; return t += 2147483648, "c" + t; }
function Hv(e) { return Object.getPrototypeOf(e.prototype).constructor; }
function Qd(e) { let t = Hv(e.type), n = !0, r = [e]; for (; t;) {
    let o;
    if (we(e))
        o = t.\u0275cmp || t.\u0275dir;
    else {
        if (t.\u0275cmp)
            throw new T(903, !1);
        o = t.\u0275dir;
    }
    if (o) {
        if (n) {
            r.push(o);
            let s = e;
            s.inputs = Ml(e.inputs), s.declaredInputs = Ml(e.declaredInputs), s.outputs = Ml(e.outputs);
            let a = o.hostBindings;
            a && fb(e, a);
            let c = o.viewQuery, l = o.contentQueries;
            if (c && ub(e, c), l && db(e, l), cb(e, o), Ap(e.outputs, o.outputs), we(o) && o.data.animation) {
                let u = e.data;
                u.animation = (u.animation || []).concat(o.data.animation);
            }
        }
        let i = o.features;
        if (i)
            for (let s = 0; s < i.length; s++) {
                let a = i[s];
                a && a.ngInherit && a(e), a === Qd && (n = !1);
            }
    }
    t = Object.getPrototypeOf(t);
} lb(r); }
function cb(e, t) { for (let n in t.inputs) {
    if (!t.inputs.hasOwnProperty(n) || e.inputs.hasOwnProperty(n))
        continue;
    let r = t.inputs[n];
    r !== void 0 && (e.inputs[n] = r, e.declaredInputs[n] = t.declaredInputs[n]);
} }
function lb(e) { let t = 0, n = null; for (let r = e.length - 1; r >= 0; r--) {
    let o = e[r];
    o.hostVars = t += o.hostVars, o.hostAttrs = ar(o.hostAttrs, n = ar(n, o.hostAttrs));
} }
function Ml(e) { return e === ke ? {} : e === k ? [] : e; }
function ub(e, t) { let n = e.viewQuery; n ? e.viewQuery = (r, o) => { t(r, o), n(r, o); } : e.viewQuery = t; }
function db(e, t) { let n = e.contentQueries; n ? e.contentQueries = (r, o, i) => { t(r, o, i), n(r, o, i); } : e.contentQueries = t; }
function fb(e, t) { let n = e.hostBindings; n ? e.hostBindings = (r, o) => { t(r, o), n(r, o); } : e.hostBindings = t; }
var pb = ["providersResolver"], hb = ["template", "decls", "consts", "vars", "onPush", "ngContentSelectors", "styles", "encapsulation", "schemas"];
function Bv(e) { let t = Hv(e.type), n; we(e) ? n = t.\u0275cmp : n = t.\u0275dir; let r = e; for (let o of pb)
    r[o] = n[o]; if (we(n))
    for (let o of hb)
        r[o] = n[o]; }
function Uv(e) { let t = n => { let r = Array.isArray(e); n.hostDirectives === null ? (n.resolveHostDirectives = gb, n.hostDirectives = r ? e.map(mu) : [e]) : r ? n.hostDirectives.unshift(...e.map(mu)) : n.hostDirectives.unshift(e); }; return t.ngInherit = !0, t; }
function gb(e) { let t = [], n = !1, r = null, o = null; for (let i = 0; i < e.length; i++) {
    let s = e[i];
    if (s.hostDirectives !== null) {
        let a = t.length;
        r ??= new Map, o ??= new Map, $v(s, t, r), o.set(s, [a, t.length - 1]);
    }
    i === 0 && we(s) && (n = !0, t.push(s));
} for (let i = n ? 1 : 0; i < e.length; i++)
    t.push(e[i]); return [t, r, o]; }
function $v(e, t, n) { if (e.hostDirectives !== null)
    for (let r of e.hostDirectives)
        if (typeof r == "function") {
            let o = r();
            for (let i of o)
                Vh(mu(i), t, n);
        }
        else
            Vh(r, t, n); }
function Vh(e, t, n) { let r = be(e.directive); mb(r.declaredInputs, e.inputs), $v(r, t, n), n.set(r, e), t.push(r); }
function mu(e) { return typeof e == "function" ? { directive: O(e), inputs: ke, outputs: ke } : { directive: O(e.directive), inputs: Hh(e.inputs), outputs: Hh(e.outputs) }; }
function Hh(e) { if (e === void 0 || e.length === 0)
    return ke; let t = {}; for (let n = 0; n < e.length; n += 2)
    t[e[n]] = e[n + 1]; return t; }
function mb(e, t) { for (let n in t)
    if (t.hasOwnProperty(n)) {
        let r = t[n], o = e[n];
        e[r] = o;
    } }
function qv(e, t, n, r, o, i, s, a) { if (n.firstCreatePass) {
    e.mergedAttrs = ar(e.mergedAttrs, e.attrs);
    let u = e.tView = hd(2, e, o, i, s, n.directiveRegistry, n.pipeRegistry, null, n.schemas, n.consts, null);
    n.queries !== null && (n.queries.template(n, e), u.queries = n.queries.embeddedTView(e));
} a && (e.flags |= a), rt(e, !1); let c = Gv(n, t, e, r); uo() && Id(n, t, c, e), je(c, t); let l = Ny(c, t, c, e); t[r + E] = l, md(t, l), gv(l, e, t); }
function yb(e, t, n, r, o, i, s, a, c, l, u) { let d = n + E, f; return t.firstCreatePass ? (f = Nn(t, d, 4, s || null, a || null), Li() && rv(t, e, f, de(t.consts, l), Md), Ng(t, f)) : f = t.data[d], qv(f, e, t, n, r, o, i, c), Vn(f) && oa(t, e, f), l != null && br(e, f, u), f; }
function In(e, t, n, r, o, i, s, a, c, l, u) { let d = n + E, f; if (t.firstCreatePass) {
    if (f = Nn(t, d, 4, s || null, a || null), l != null) {
        let p = de(t.consts, l);
        f.localNames = [];
        for (let h = 0; h < p.length; h += 2)
            f.localNames.push(p[h], -1);
    }
}
else
    f = t.data[d]; return qv(f, e, t, n, r, o, i, c), l != null && br(e, f, u), f; }
function Zd(e, t, n, r, o, i, s, a) { let c = g(), l = R(), u = de(l.consts, i); return yb(c, l, e, t, n, r, o, u, void 0, s, a), Zd; }
function Yd(e, t, n, r, o, i, s, a) { let c = g(), l = R(), u = de(l.consts, i); return In(c, l, e, t, n, r, o, u, void 0, s, a), Yd; }
var Gv = Wv;
function Wv(e, t, n, r) { return We(!0), t[S].createComment(""); }
function vb(e, t, n, r) { let o = !Js(t, n); We(o); let i = t[se]?.data[Bs]?.[r] ?? null; if (i !== null && n.tView !== null && n.tView.ssrId === null && (n.tView.ssrId = i), o)
    return Wv(e, t); let s = t[se], a = ti(s, e, t, n); Zs(s, r, a); let c = rd(s, r); return da(c, a); }
function zv() { Gv = vb; }
var ee = (function (e) { return e[e.NOT_STARTED = 0] = "NOT_STARTED", e[e.IN_PROGRESS = 1] = "IN_PROGRESS", e[e.COMPLETE = 2] = "COMPLETE", e[e.FAILED = 3] = "FAILED", e; })(ee || {}), Bh = 0, Eb = 1, G = (function (e) { return e[e.Placeholder = 0] = "Placeholder", e[e.Loading = 1] = "Loading", e[e.Complete = 2] = "Complete", e[e.Error = 3] = "Error", e; })(G || {}), Fo = (function (e) { return e[e.Initial = -1] = "Initial", e; })(Fo || {}), or = 0, _t = 1, mo = 2, Qi = 3, Ib = 4, Db = 5, Ea = 6, Tb = 7, ir = 8, Cb = 9, Kd = (function (e) { return e[e.Manual = 0] = "Manual", e[e.Playthrough = 1] = "Playthrough", e; })(Kd || {});
function oi(e, t, n) { let r = Zv(e); t[r] === null && (t[r] = []), t[r].push(n); }
function rs(e, t) { let n = Zv(e), r = t[n]; if (r !== null) {
    for (let o of r)
        o();
    t[n] = null;
} }
function Qv(e) { rs(1, e), rs(0, e), rs(2, e); }
function Zv(e) { let t = Ib; return e === 1 ? t = Db : e === 2 && (t = Cb), t; }
var Ia = (function (e) { return e[e.CHANGE_DETECTION = 0] = "CHANGE_DETECTION", e[e.AFTER_NEXT_RENDER = 1] = "AFTER_NEXT_RENDER", e; })(Ia || {}), kr = new C(""), Yv = !1, yu = class extends Lu {
    __isAsync;
    destroyRef = void 0;
    pendingTasks = void 0;
    constructor(t = !1) { super(), this.__isAsync = t, Ri() && (this.destroyRef = D(Fe, { optional: !0 }) ?? void 0, this.pendingTasks = D(ht, { optional: !0 }) ?? void 0); }
    emit(t) { let n = A(null); try {
        super.next(t);
    }
    finally {
        A(n);
    } }
    subscribe(t, n, r) { let o = t, i = n || (() => null), s = r; if (t && typeof t == "object") {
        let c = t;
        o = c.next?.bind(c), i = c.error?.bind(c), s = c.complete?.bind(c);
    } this.__isAsync && (i = this.wrapInTimeout(i), o && (o = this.wrapInTimeout(o)), s && (s = this.wrapInTimeout(s))); let a = super.subscribe({ next: o, error: i, complete: s }); return t instanceof Fu && t.add(a), a; }
    wrapInTimeout(t) { return n => { let r = this.pendingTasks?.add(); setTimeout(() => { try {
        t(n);
    }
    finally {
        r !== void 0 && this.pendingTasks?.remove(r);
    } }); }; }
}, mt = yu;
function Kv(e) { let t, n; function r() { e = un; try {
    n !== void 0 && typeof cancelAnimationFrame == "function" && cancelAnimationFrame(n), t !== void 0 && clearTimeout(t);
}
catch { } } return t = setTimeout(() => { e(), r(); }), typeof requestAnimationFrame == "function" && (n = requestAnimationFrame(() => { e(), r(); })), () => r(); }
function Uh(e) { return queueMicrotask(() => e()), () => { e = un; }; }
var Jd = "isAngularZone", Ss = Jd + "_ID", Mb = 0, z = class e {
    hasPendingMacrotasks = !1;
    hasPendingMicrotasks = !1;
    isStable = !0;
    onUnstable = new mt(!1);
    onMicrotaskEmpty = new mt(!1);
    onStable = new mt(!1);
    onError = new mt(!1);
    constructor(t) { let { enableLongStackTrace: n = !1, shouldCoalesceEventChangeDetection: r = !1, shouldCoalesceRunChangeDetection: o = !1, scheduleInRootZone: i = Yv } = t; if (typeof Zone > "u")
        throw new T(908, !1); Zone.assertZonePatched(); let s = this; s._nesting = 0, s._outer = s._inner = Zone.current, Zone.TaskTrackingZoneSpec && (s._inner = s._inner.fork(new Zone.TaskTrackingZoneSpec)), n && Zone.longStackTraceZoneSpec && (s._inner = s._inner.fork(Zone.longStackTraceZoneSpec)), s.shouldCoalesceEventChangeDetection = !o && r, s.shouldCoalesceRunChangeDetection = o, s.callbackScheduled = !1, s.scheduleInRootZone = i, _b(s); }
    static isInAngularZone() { return typeof Zone < "u" && Zone.current.get(Jd) === !0; }
    static assertInAngularZone() { if (!e.isInAngularZone())
        throw new T(909, !1); }
    static assertNotInAngularZone() { if (e.isInAngularZone())
        throw new T(909, !1); }
    run(t, n, r) { return this._inner.run(t, n, r); }
    runTask(t, n, r, o) { let i = this._inner, s = i.scheduleEventTask("NgZoneEvent: " + o, t, wb, un, un); try {
        return i.runTask(s, n, r);
    }
    finally {
        i.cancelTask(s);
    } }
    runGuarded(t, n, r) { return this._inner.runGuarded(t, n, r); }
    runOutsideAngular(t) { return this._outer.run(t); }
}, wb = {};
function Xd(e) { if (e._nesting == 0 && !e.hasPendingMicrotasks && !e.isStable)
    try {
        e._nesting++, e.onMicrotaskEmpty.emit(null);
    }
    finally {
        if (e._nesting--, !e.hasPendingMicrotasks)
            try {
                e.runOutsideAngular(() => e.onStable.emit(null));
            }
            finally {
                e.isStable = !0;
            }
    } }
function Nb(e) { if (e.isCheckStableRunning || e.callbackScheduled)
    return; e.callbackScheduled = !0; function t() { Kv(() => { e.callbackScheduled = !1, vu(e), e.isCheckStableRunning = !0, Xd(e), e.isCheckStableRunning = !1; }); } e.scheduleInRootZone ? Zone.root.run(() => { t(); }) : e._outer.run(() => { t(); }), vu(e); }
function _b(e) { let t = () => { Nb(e); }, n = Mb++; e._inner = e._inner.fork({ name: "angular", properties: { [Jd]: !0, [Ss]: n, [Ss + n]: !0 }, onInvokeTask: (r, o, i, s, a, c) => { if (Sb(c))
        return r.invokeTask(i, s, a, c); try {
        return $h(e), r.invokeTask(i, s, a, c);
    }
    finally {
        (e.shouldCoalesceEventChangeDetection && s.type === "eventTask" || e.shouldCoalesceRunChangeDetection) && t(), qh(e);
    } }, onInvoke: (r, o, i, s, a, c, l) => { try {
        return $h(e), r.invoke(i, s, a, c, l);
    }
    finally {
        e.shouldCoalesceRunChangeDetection && !e.callbackScheduled && !bb(c) && t(), qh(e);
    } }, onHasTask: (r, o, i, s) => { r.hasTask(i, s), o === i && (s.change == "microTask" ? (e._hasPendingMicrotasks = s.microTask, vu(e), Xd(e)) : s.change == "macroTask" && (e.hasPendingMacrotasks = s.macroTask)); }, onHandleError: (r, o, i, s) => (r.handleError(i, s), e.runOutsideAngular(() => e.onError.emit(s)), !1) }); }
function vu(e) { e._hasPendingMicrotasks || (e.shouldCoalesceEventChangeDetection || e.shouldCoalesceRunChangeDetection) && e.callbackScheduled === !0 ? e.hasPendingMicrotasks = !0 : e.hasPendingMicrotasks = !1; }
function $h(e) { e._nesting++, e.isStable && (e.isStable = !1, e.onUnstable.emit(null)); }
function qh(e) { e._nesting--, Xd(e); }
var hr = class {
    hasPendingMicrotasks = !1;
    hasPendingMacrotasks = !1;
    isStable = !0;
    onUnstable = new mt;
    onMicrotaskEmpty = new mt;
    onStable = new mt;
    onError = new mt;
    run(t, n, r) { return t.apply(n, r); }
    runGuarded(t, n, r) { return t.apply(n, r); }
    runOutsideAngular(t) { return t(); }
    runTask(t, n, r, o) { return t.apply(n, r); }
};
function Sb(e) { return Jv(e, "__ignore_ng_zone__"); }
function bb(e) { return Jv(e, "__scheduler_tick__"); }
function Jv(e, t) { return !Array.isArray(e) || e.length !== 1 ? !1 : e[0]?.data?.[t] === !0; }
function Xv(e = "zone.js", t) { return e === "noop" ? new hr : e === "zone.js" ? new z(t) : e; }
var Da = (() => { class e {
    impl = null;
    execute() { this.impl?.execute(); }
    static \u0275prov = F({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), ef = [0, 1, 2, 3], tf = (() => { class e {
    ngZone = D(z);
    scheduler = D(Me);
    errorHandler = D(Xe, { optional: !0 });
    sequences = new Set;
    deferredRegistrations = new Set;
    executing = !1;
    constructor() { D(kr, { optional: !0 }); }
    execute() { let n = this.sequences.size > 0; n && j(16), this.executing = !0; for (let r of ef)
        for (let o of this.sequences)
            if (!(o.erroredOrDestroyed || !o.hooks[r]))
                try {
                    o.pipelinedValue = this.ngZone.runOutsideAngular(() => this.maybeTrace(() => { let i = o.hooks[r]; return i(o.pipelinedValue); }, o.snapshot));
                }
                catch (i) {
                    o.erroredOrDestroyed = !0, this.errorHandler?.handleError(i);
                } this.executing = !1; for (let r of this.sequences)
        r.afterRun(), r.once && (this.sequences.delete(r), r.destroy()); for (let r of this.deferredRegistrations)
        this.sequences.add(r); this.deferredRegistrations.size > 0 && this.scheduler.notify(7), this.deferredRegistrations.clear(), n && j(17); }
    register(n) { let { view: r } = n; r !== void 0 ? ((r[sn] ??= []).push(n), Ft(r), r[M] |= 8192) : this.executing ? this.deferredRegistrations.add(n) : this.addSequence(n); }
    addSequence(n) { this.sequences.add(n), this.scheduler.notify(7); }
    unregister(n) { this.executing && this.sequences.has(n) ? (n.erroredOrDestroyed = !0, n.pipelinedValue = void 0, n.once = !0) : (this.sequences.delete(n), this.deferredRegistrations.delete(n)); }
    maybeTrace(n, r) { return r ? r.run(Ia.AFTER_NEXT_RENDER, n) : n(); }
    static \u0275prov = F({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), jo = class {
    impl;
    hooks;
    view;
    once;
    snapshot;
    erroredOrDestroyed = !1;
    pipelinedValue = void 0;
    unregisterOnDestroy;
    constructor(t, n, r, o, i, s = null) { this.impl = t, this.hooks = n, this.view = r, this.once = o, this.snapshot = s, this.unregisterOnDestroy = i?.onDestroy(() => this.destroy()); }
    afterRun() { this.erroredOrDestroyed = !1, this.pipelinedValue = void 0, this.snapshot?.dispose(), this.snapshot = null; }
    destroy() { this.impl.unregister(this), this.unregisterOnDestroy?.(); let t = this.view?.[sn]; t && (this.view[sn] = t.filter(n => n !== this)); }
};
function eE(e, t) { let n = t?.injector ?? D(oe); return typeof ngServerMode < "u" && ngServerMode ? Ta : (fe("NgAfterRender"), nE(e, n, t, !1)); }
function tE(e, t) { let n = t?.injector ?? D(oe); return typeof ngServerMode < "u" && ngServerMode ? Ta : (fe("NgAfterNextRender"), nE(e, n, t, !0)); }
function Rb(e) { return e instanceof Function ? [void 0, void 0, e, void 0] : [e.earlyRead, e.write, e.mixedReadWrite, e.read]; }
function nE(e, t, n, r) { let o = t.get(Da); o.impl ??= t.get(tf); let i = t.get(kr, null, { optional: !0 }), s = n?.manualCleanup !== !0 ? t.get(Fe) : null, a = t.get(ln, null, { optional: !0 }), c = new jo(o.impl, Rb(e), a?.view, r, s, i?.snapshot(null)); return o.impl.register(c), c; }
var Ta = { destroy() { } };
function ii(e) { return e + 1; }
function De(e, t) { let n = e[y], r = ii(t.index); return e[r]; }
function Ab(e, t, n) { let r = e[y], o = ii(t); e[o] = n; }
function ce(e, t) { let n = ii(t.index); return e.data[n]; }
function Ob(e, t, n) { let r = ii(t); e.data[r] = n; }
function xb(e, t, n) { let r = t[y], o = ce(r, n); switch (e) {
    case G.Complete: return o.primaryTmplIndex;
    case G.Loading: return o.loadingTmplIndex;
    case G.Error: return o.errorTmplIndex;
    case G.Placeholder: return o.placeholderTmplIndex;
    default: return null;
} }
function Eu(e, t) { return t === G.Placeholder ? e.placeholderBlockConfig?.[Bh] ?? null : t === G.Loading ? e.loadingBlockConfig?.[Bh] ?? null : null; }
function rE(e) { return e.loadingBlockConfig?.[Eb] ?? null; }
function Gh(e, t) { if (!e || e.length === 0)
    return t; let n = new Set(e); for (let r of t)
    n.add(r); return e.length === n.size ? e : Array.from(n); }
function kb(e, t) { let n = t.primaryTmplIndex + E; return pt(e, n); }
function oE(e) { return e !== null && typeof e == "object" && typeof e.primaryTmplIndex == "number"; }
function iE(e, t) { let n = null, r = ii(t.index); return E < r && r < e.bindingStartIndex && (n = ce(e, t)), !!n && oE(n); }
function nf(e, t, n) { let r = n.get(z); return Iw(e, () => r.run(t), () => r.runOutsideAngular(() => Ew())); }
function Pb(e, t, n) { return n == null ? e : n >= 0 ? Pc(n, e) : e[t.index][W] ?? null; }
function Lb(e, t) { return cn(E + t, e); }
function Pr(e, t, n, r, o, i, s) { let a = e[K], c = a.get(z), l; function u() { if (nt(e)) {
    l.destroy();
    return;
} let d = De(e, t), f = d[_t]; if (f !== Fo.Initial && f !== G.Placeholder) {
    l.destroy();
    return;
} let p = Pb(e, t, r); if (!p || (l.destroy(), nt(p)))
    return; let h = Lb(p, n), m = o(h, () => { c.run(() => { e !== p && Pi(p, m), i(); }); }, a); e !== p && so(p, m), oi(s, d, m); } l = eE({ read: u }, { injector: a }); }
function Ca(e, t) { let n = t.get(Vb), r = () => n.remove(e); return n.add(e), r; }
var Fb = () => typeof requestIdleCallback < "u" ? requestIdleCallback : setTimeout, jb = () => typeof requestIdleCallback < "u" ? cancelIdleCallback : clearTimeout, Vb = (() => { class e {
    executingCallbacks = !1;
    idleId = null;
    current = new Set;
    deferred = new Set;
    ngZone = D(z);
    requestIdleCallbackFn = Fb().bind(globalThis);
    cancelIdleCallbackFn = jb().bind(globalThis);
    add(n) { (this.executingCallbacks ? this.deferred : this.current).add(n), this.idleId === null && this.scheduleIdleCallback(); }
    remove(n) { let { current: r, deferred: o } = this; r.delete(n), o.delete(n), r.size === 0 && o.size === 0 && this.cancelIdleCallback(); }
    scheduleIdleCallback() { let n = () => { this.cancelIdleCallback(), this.executingCallbacks = !0; for (let r of this.current)
        r(); if (this.current.clear(), this.executingCallbacks = !1, this.deferred.size > 0) {
        for (let r of this.deferred)
            this.current.add(r);
        this.deferred.clear(), this.scheduleIdleCallback();
    } }; this.idleId = this.requestIdleCallbackFn(() => this.ngZone.run(n)); }
    cancelIdleCallback() { this.idleId !== null && (this.cancelIdleCallbackFn(this.idleId), this.idleId = null); }
    ngOnDestroy() { this.cancelIdleCallback(), this.current.clear(), this.deferred.clear(); }
    static \u0275prov = F({ token: e, providedIn: "root", factory: () => new e });
} return e; })();
function Ma(e) { return (t, n) => sE(e, t, n); }
function sE(e, t, n) { let r = n.get(aE), o = n.get(z), i = () => r.remove(t); return r.add(e, t, o), i; }
var aE = (() => { class e {
    executingCallbacks = !1;
    timeoutId = null;
    invokeTimerAt = null;
    current = [];
    deferred = [];
    add(n, r, o) { let i = this.executingCallbacks ? this.deferred : this.current; this.addToQueue(i, Date.now() + n, r), this.scheduleTimer(o); }
    remove(n) { let { current: r, deferred: o } = this; this.removeFromQueue(r, n) === -1 && this.removeFromQueue(o, n), r.length === 0 && o.length === 0 && this.clearTimeout(); }
    addToQueue(n, r, o) { let i = n.length; for (let s = 0; s < n.length; s += 2)
        if (n[s] > r) {
            i = s;
            break;
        } Tc(n, i, r, o); }
    removeFromQueue(n, r) { let o = -1; for (let i = 0; i < n.length; i += 2)
        if (n[i + 1] === r) {
            o = i;
            break;
        } return o > -1 && Dc(n, o, 2), o; }
    scheduleTimer(n) { let r = () => { this.clearTimeout(), this.executingCallbacks = !0; let i = [...this.current], s = Date.now(); for (let c = 0; c < i.length; c += 2) {
        let l = i[c], u = i[c + 1];
        if (l <= s)
            u();
        else
            break;
    } let a = -1; for (let c = 0; c < this.current.length && this.current[c] <= s; c += 2)
        a = c + 1; if (a >= 0 && Dc(this.current, 0, a + 1), this.executingCallbacks = !1, this.deferred.length > 0) {
        for (let c = 0; c < this.deferred.length; c += 2) {
            let l = this.deferred[c], u = this.deferred[c + 1];
            this.addToQueue(this.current, l, u);
        }
        this.deferred.length = 0;
    } this.scheduleTimer(n); }; if (this.current.length > 0) {
        let i = Date.now(), s = this.current[0];
        if (this.timeoutId === null || this.invokeTimerAt && this.invokeTimerAt - s > 16) {
            this.clearTimeout();
            let a = Math.max(s - i, 16);
            this.invokeTimerAt = s, this.timeoutId = n.runOutsideAngular(() => setTimeout(() => n.run(r), a));
        }
    } }
    clearTimeout() { this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null); }
    ngOnDestroy() { this.clearTimeout(), this.current.length = 0, this.deferred.length = 0; }
    static \u0275prov = F({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), Hb = (() => { class e {
    cachedInjectors = new Map;
    getOrCreateInjector(n, r, o, i) { if (!this.cachedInjectors.has(n)) {
        let s = o.length > 0 ? Wd(o, r, i) : null;
        this.cachedInjectors.set(n, s);
    } return this.cachedInjectors.get(n); }
    ngOnDestroy() { try {
        for (let n of this.cachedInjectors.values())
            n !== null && n.destroy();
    }
    finally {
        this.cachedInjectors.clear();
    } }
    static \u0275prov = F({ token: e, providedIn: "environment", factory: () => new e });
} return e; })(), Bb = new C("DEFER_BLOCK_DEPENDENCY_INTERCEPTOR"), cE = new C("");
function wl(e, t, n) { return e.get(Hb).getOrCreateInjector(t, e, n, ""); }
function Ub(e, t, n) { if (e instanceof rr) {
    let o = e.injector, i = e.parentInjector, s = wl(i, t, n);
    return new rr(o, s);
} let r = e.get(_e); if (r !== e) {
    let o = wl(r, t, n);
    return new rr(e, o);
} return wl(e, t, n); }
function yt(e, t, n, r = !1) { let o = n[q], i = o[y]; if (nt(o))
    return; let s = De(o, t), a = s[_t], c = s[Tb]; if (!(c !== null && e < c) && zh(a, e) && zh(s[or] ?? -1, e)) {
    let l = ce(i, t), d = !r && (typeof ngServerMode > "u" || !ngServerMode) && (rE(l) !== null || Eu(l, G.Loading) !== null || Eu(l, G.Placeholder)) ? Iu : lE;
    try {
        d(e, s, n, t, o);
    }
    catch (f) {
        Nd(o, f);
    }
} }
function $b(e, t) { let n = e[Ae]?.findIndex(o => o.data[zo] === t[_t]) ?? -1; return { dehydratedView: n > -1 ? e[Ae][n] : null, dehydratedViewIx: n }; }
function lE(e, t, n, r, o) { j(20); let i = xb(e, o, r); if (i !== null) {
    t[_t] = e;
    let s = o[y], a = i + E, c = pt(s, a), l = 0;
    bd(n, l);
    let u;
    if (e === G.Complete) {
        let h = ce(s, r), m = h.providers;
        m && m.length > 0 && (u = Ub(o[K], h, m));
    }
    let { dehydratedView: d, dehydratedViewIx: f } = $b(n, t), p = Rr(o, c, null, { injector: u, dehydratedView: d });
    if (Ar(n, p, l, vn(c, d)), ei(p, 2), f > -1 && n[Ae]?.splice(f, 1), (e === G.Complete || e === G.Error) && Array.isArray(t[ir])) {
        for (let h of t[ir])
            h();
        t[ir] = null;
    }
} j(21); }
function qb(e, t, n, r, o) { let i = Date.now(), s = o[y], a = ce(s, r); if (t[mo] === null || t[mo] <= i) {
    t[mo] = null;
    let c = rE(a), l = t[Qi] !== null;
    if (e === G.Loading && c !== null && !l) {
        t[or] = e;
        let u = Wh(c, t, r, n, o);
        t[Qi] = u;
    }
    else {
        e > G.Loading && l && (t[Qi](), t[Qi] = null, t[or] = null), lE(e, t, n, r, o);
        let u = Eu(a, e);
        u !== null && (t[mo] = i + u, Wh(u, t, r, n, o));
    }
}
else
    t[or] = e; }
function Wh(e, t, n, r, o) { return sE(e, () => { let s = t[or]; t[mo] = null, t[or] = null, s !== null && yt(s, n, r); }, o[K]); }
function zh(e, t) { return e < t; }
function Lr(e, t) { let n = e[t.index]; yt(G.Placeholder, t, n); }
function Qh(e, t, n) { e.loadingPromise.then(() => { e.loadingState === ee.COMPLETE ? yt(G.Complete, t, n) : e.loadingState === ee.FAILED && yt(G.Error, t, n); }); }
var Iu = null;
function uE(e, t, n, r) { let o = e.consts; n != null && (t.placeholderBlockConfig = de(o, n)), r != null && (t.loadingBlockConfig = de(o, r)), Iu === null && (Iu = qb); }
var os = "__ngAsyncComponentMetadataFn__";
function Gb(e) { return e[os] ?? null; }
function dE(e, t, n) { let r = e; return r[os] = () => Promise.all(t()).then(o => (n(...o), r[os] = null, o)), r[os]; }
function rf(e, t, n, r) { return ct(() => { let o = e; t !== null && (o.hasOwnProperty("decorators") && o.decorators !== void 0 ? o.decorators.push(...t) : o.decorators = t), n !== null && (o.ctorParameters = n), r !== null && (o.hasOwnProperty("propDecorators") && o.propDecorators !== void 0 ? o.propDecorators = U(U({}, o.propDecorators), r) : o.propDecorators = r); }); }
var Wb = (() => { class e {
    log(n) { console.log(n); }
    warn(n) { console.warn(n); }
    static \u0275fac = function (r) { return new (r || e); };
    static \u0275prov = F({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })();
function is(e, t) { let n = e[y]; for (let r = E; r < n.bindingStartIndex; r++)
    if (Z(e[r])) {
        let o = e[r];
        if (!(r === n.bindingStartIndex - 1)) {
            let s = n.data[r], a = ce(n, s);
            if (oE(a)) {
                t.push({ lContainer: o, lView: e, tNode: s, tDetails: a });
                continue;
            }
        }
        X(o[H]) && is(o[H], t);
        for (let s = W; s < o.length; s++)
            is(o[s], t);
    }
    else
        X(e[r]) && is(e[r], t); }
function zb() { return fe("Chrome DevTools profiling"), () => { }; }
var Zh = "ng";
function Qb(e, t) { Zb(e, t); }
function Zb(e, t) { if (typeof COMPILED > "u" || !COMPILED) {
    let n = Se;
    n[Zh] ??= {}, n[Zh][e] = t;
} }
var fE = new C(""), pE = new C(""), Yb = (() => { class e {
    _ngZone;
    registry;
    _isZoneStable = !0;
    _callbacks = [];
    _taskTrackingZone = null;
    _destroyRef;
    constructor(n, r, o) { this._ngZone = n, this.registry = r, Ri() && (this._destroyRef = D(Fe, { optional: !0 }) ?? void 0), of || (gE(o), o.addToWindow(r)), this._watchAngularEvents(), n.run(() => { this._taskTrackingZone = typeof Zone > "u" ? null : Zone.current.get("TaskTrackingZone"); }); }
    _watchAngularEvents() { let n = this._ngZone.onUnstable.subscribe({ next: () => { this._isZoneStable = !1; } }), r = this._ngZone.runOutsideAngular(() => this._ngZone.onStable.subscribe({ next: () => { z.assertNotInAngularZone(), queueMicrotask(() => { this._isZoneStable = !0, this._runCallbacksIfReady(); }); } })); this._destroyRef?.onDestroy(() => { n.unsubscribe(), r.unsubscribe(); }); }
    isStable() { return this._isZoneStable && !this._ngZone.hasPendingMacrotasks; }
    _runCallbacksIfReady() { if (this.isStable())
        queueMicrotask(() => { for (; this._callbacks.length !== 0;) {
            let n = this._callbacks.pop();
            clearTimeout(n.timeoutId), n.doneCb();
        } });
    else {
        let n = this.getPendingTasks();
        this._callbacks = this._callbacks.filter(r => r.updateCb && r.updateCb(n) ? (clearTimeout(r.timeoutId), !1) : !0);
    } }
    getPendingTasks() { return this._taskTrackingZone ? this._taskTrackingZone.macroTasks.map(n => ({ source: n.source, creationLocation: n.creationLocation, data: n.data })) : []; }
    addCallback(n, r, o) { let i = -1; r && r > 0 && (i = setTimeout(() => { this._callbacks = this._callbacks.filter(s => s.timeoutId !== i), n(); }, r)), this._callbacks.push({ doneCb: n, timeoutId: i, updateCb: o }); }
    whenStable(n, r, o) { if (o && !this._taskTrackingZone)
        throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?'); this.addCallback(n, r, o), this._runCallbacksIfReady(); }
    registerApplication(n) { this.registry.registerApplication(n, this); }
    unregisterApplication(n) { this.registry.unregisterApplication(n); }
    findProviders(n, r, o) { return []; }
    static \u0275fac = function (r) { return new (r || e)(le(z), le(hE), le(pE)); };
    static \u0275prov = F({ token: e, factory: e.\u0275fac });
} return e; })(), hE = (() => { class e {
    _applications = new Map;
    registerApplication(n, r) { this._applications.set(n, r); }
    unregisterApplication(n) { this._applications.delete(n); }
    unregisterAllApplications() { this._applications.clear(); }
    getTestability(n) { return this._applications.get(n) || null; }
    getAllTestabilities() { return Array.from(this._applications.values()); }
    getAllRootElements() { return Array.from(this._applications.keys()); }
    findTestabilityInTree(n, r = !0) { return of?.findTestabilityInTree(this, n, r) ?? null; }
    static \u0275fac = function (r) { return new (r || e); };
    static \u0275prov = F({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })();
function gE(e) { of = e; }
var of;
function sf(e) { return !!e && typeof e.then == "function"; }
function mE(e) { return !!e && typeof e.subscribe == "function"; }
var af = new C("");
function Kb(e) { return $e([{ provide: af, multi: !0, useValue: e }]); }
var cf = (() => { class e {
    resolve;
    reject;
    initialized = !1;
    done = !1;
    donePromise = new Promise((n, r) => { this.resolve = n, this.reject = r; });
    appInits = D(af, { optional: !0 }) ?? [];
    injector = D(oe);
    constructor() { }
    runInitializers() { if (this.initialized)
        return; let n = []; for (let o of this.appInits) {
        let i = bi(this.injector, o);
        if (sf(i))
            n.push(i);
        else if (mE(i)) {
            let s = new Promise((a, c) => { i.subscribe({ complete: a, error: c }); });
            n.push(s);
        }
    } let r = () => { this.done = !0, this.resolve(); }; Promise.all(n).then(() => { r(); }).catch(o => { this.reject(o); }), n.length === 0 && r(), this.initialized = !0; }
    static \u0275fac = function (r) { return new (r || e); };
    static \u0275prov = F({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), si = new C("");
function lf() { Cp(() => { let e = ""; throw new T(600, e); }); }
function yE(e) { return e.isBoundToModule; }
var Du = class {
    name;
    token;
    constructor(t, n) { this.name = t, this.token = n; }
}, Jb = 10;
function uf(e, t) { return Array.isArray(t) ? t.reduce(uf, e) : U(U({}, e), t); }
var Qe = (() => { class e {
    _runningTick = !1;
    _destroyed = !1;
    _destroyListeners = [];
    _views = [];
    internalErrorHandler = D(st);
    afterRenderManager = D(Da);
    zonelessEnabled = D(qn);
    rootEffectScheduler = D(po);
    dirtyFlags = 0;
    tracingSnapshot = null;
    allTestViews = new Set;
    autoDetectTestViews = new Set;
    includeAllTestViews = !1;
    afterTick = new Lu;
    get allViews() { return [...(this.includeAllTestViews ? this.allTestViews : this.autoDetectTestViews).keys(), ...this._views]; }
    get destroyed() { return this._destroyed; }
    componentTypes = [];
    components = [];
    internalPendingTask = D(ht);
    get isStable() { return this.internalPendingTask.hasPendingTasksObservable.pipe(lM(n => !n)); }
    constructor() { D(kr, { optional: !0 }); }
    whenStable() { let n; return new Promise(r => { n = this.isStable.subscribe({ next: o => { o && r(); } }); }).finally(() => { n.unsubscribe(); }); }
    _injector = D(_e);
    _rendererFactory = null;
    get injector() { return this._injector; }
    bootstrap(n, r) { return this.bootstrapImpl(n, r); }
    bootstrapImpl(n, r, o = oe.NULL) { return this._injector.get(z).run(() => { j(10); let s = n instanceof ga; if (!this._injector.get(cf).done) {
        let h = "";
        throw new T(405, h);
    } let c; s ? c = n : c = this._injector.get(ni).resolveComponentFactory(n), this.componentTypes.push(c.componentType); let l = yE(c) ? void 0 : this._injector.get(dr), u = r || c.selector, d = c.create(o, [], u, l), f = d.location.nativeElement, p = d.injector.get(fE, null); return p?.registerApplication(f), d.onDestroy(() => { this.detachView(d.hostView), Io(this.components, d), p?.unregisterApplication(f); }), this._loadComponent(d), j(11, d), d; }); }
    tick() { this.zonelessEnabled || (this.dirtyFlags |= 1), this._tick(); }
    _tick() { j(12), this.tracingSnapshot !== null ? this.tracingSnapshot.run(Ia.CHANGE_DETECTION, this.tickImpl) : this.tickImpl(); }
    tickImpl = () => { if (this._runningTick)
        throw new T(101, !1); let n = A(null); try {
        this._runningTick = !0, this.synchronize();
    }
    finally {
        this._runningTick = !1, this.tracingSnapshot?.dispose(), this.tracingSnapshot = null, A(n), this.afterTick.next(), j(13);
    } };
    synchronize() { this._rendererFactory === null && !this._injector.destroyed && (this._rendererFactory = this._injector.get(xo, null, { optional: !0 })); let n = 0; for (; this.dirtyFlags !== 0 && n++ < Jb;)
        j(14), this.synchronizeOnce(), j(15); }
    synchronizeOnce() { this.dirtyFlags & 16 && (this.dirtyFlags &= -17, this.rootEffectScheduler.flush()); let n = !1; if (this.dirtyFlags & 7) {
        let r = !!(this.dirtyFlags & 1);
        this.dirtyFlags &= -8, this.dirtyFlags |= 8;
        for (let { _lView: o } of this.allViews) {
            if (!r && !Hn(o))
                continue;
            let i = r && !this.zonelessEnabled ? 0 : 1;
            Sd(o, i), n = !0;
        }
        if (this.dirtyFlags &= -5, this.syncDirtyFlagsWithViews(), this.dirtyFlags & 23)
            return;
    } n || (this._rendererFactory?.begin?.(), this._rendererFactory?.end?.()), this.dirtyFlags & 8 && (this.dirtyFlags &= -9, this.afterRenderManager.execute()), this.syncDirtyFlagsWithViews(); }
    syncDirtyFlagsWithViews() { if (this.allViews.some(({ _lView: n }) => Hn(n))) {
        this.dirtyFlags |= 2;
        return;
    }
    else
        this.dirtyFlags &= -8; }
    attachView(n) { let r = n; this._views.push(r), r.attachToAppRef(this); }
    detachView(n) { let r = n; Io(this._views, r), r.detachFromAppRef(); }
    _loadComponent(n) { this.attachView(n.hostView); try {
        this.tick();
    }
    catch (o) {
        this.internalErrorHandler(o);
    } this.components.push(n), this._injector.get(si, []).forEach(o => o(n)); }
    ngOnDestroy() { if (!this._destroyed)
        try {
            this._destroyListeners.forEach(n => n()), this._views.slice().forEach(n => n.destroy());
        }
        finally {
            this._destroyed = !0, this._views = [], this._destroyListeners = [];
        } }
    onDestroy(n) { return this._destroyListeners.push(n), () => Io(this._destroyListeners, n); }
    destroy() { if (this._destroyed)
        throw new T(406, !1); let n = this._injector; n.destroy && !n.destroyed && n.destroy(); }
    get viewCount() { return this._views.length; }
    static \u0275fac = function (r) { return new (r || e); };
    static \u0275prov = F({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
function Io(e, t) { let n = e.indexOf(t); n > -1 && e.splice(n, 1); }
function vE(e) { let t = g(), n = b(); if (Lr(t, n), !DE(0, t))
    return; let r = t[K], o = De(t, n), i = e(() => Te(0, t, n), r); oi(0, o, i); }
function EE(e, t) { if (typeof ngServerMode < "u" && ngServerMode)
    return; let n = g(), r = n[K], o = b(), i = n[y], s = ce(i, o); if (s.loadingState === ee.NOT_STARTED) {
    let a = De(n, o), l = e(() => ai(s, n, o), r);
    oi(1, a, l);
} }
function IE(e, t, n) { if (typeof ngServerMode < "u" && ngServerMode)
    return; let r = t[K], o = De(t, n), i = o[Ea], s = e(() => St(r, i), r); oi(2, o, s); }
function ai(e, t, n) { wa(e, t, n); }
function wa(e, t, n) { let r = t[K], o = t[y]; if (e.loadingState !== ee.NOT_STARTED)
    return e.loadingPromise ?? Promise.resolve(); let i = De(t, n), s = kb(o, e); e.loadingState = ee.IN_PROGRESS, rs(1, i); let a = e.dependencyResolverFn, c = r.get(fo).add(); return a ? (e.loadingPromise = Promise.allSettled(a()).then(l => { let u = !1, d = [], f = []; for (let p of l)
    if (p.status === "fulfilled") {
        let h = p.value, m = $(h) || be(h);
        if (m)
            d.push(m);
        else {
            let v = Ue(h);
            v && f.push(v);
        }
    }
    else {
        u = !0;
        break;
    } if (u) {
    if (e.loadingState = ee.FAILED, e.errorTmplIndex === null) {
        let h = new T(-750, !1);
        Nd(t, h);
    }
}
else {
    e.loadingState = ee.COMPLETE;
    let p = s.tView;
    if (d.length > 0) {
        p.directiveRegistry = Gh(p.directiveRegistry, d);
        let h = d.map(v => v.type), m = Si(!1, ...h);
        e.providers = m;
    }
    f.length > 0 && (p.pipeRegistry = Gh(p.pipeRegistry, f));
} }), e.loadingPromise.finally(() => { e.loadingPromise = null, c(); })) : (e.loadingPromise = Promise.resolve().then(() => { e.loadingPromise = null, e.loadingState = ee.COMPLETE, c(); }), e.loadingPromise); }
function DE(e, t) { return !(e === 0 && typeof ngServerMode < "u" && ngServerMode || t[K].get(cE, null, { optional: !0 })?.behavior === Kd.Manual); }
function Te(e, t, n) { let r = t[y], o = t[n.index]; if (!DE(e, t))
    return; let i = De(t, n), s = ce(r, n); switch (Qv(i), s.loadingState) {
    case ee.NOT_STARTED:
        yt(G.Loading, n, o), wa(s, t, n), s.loadingState === ee.IN_PROGRESS && Qh(s, n, o);
        break;
    case ee.IN_PROGRESS:
        yt(G.Loading, n, o), Qh(s, n, o);
        break;
    case ee.COMPLETE:
        yt(G.Complete, n, o);
        break;
    case ee.FAILED:
        yt(G.Error, n, o);
        break;
    default:
} }
function St(e, t, n) { return Rt(this, null, function* () { let r = e.get(Mt); if (r.hydrating.has(t))
    return; let { parentBlockPromise: i, hydrationQueue: s } = bw(t, e); if (s.length === 0)
    return; i !== null && s.shift(), tR(r, s), i !== null && (yield i); let a = s[0]; r.has(a) ? yield Yh(e, s, n) : r.awaitParentBlock(a, () => Rt(null, null, function* () { return yield Yh(e, s, n); })); }); }
function Yh(e, t, n) { return Rt(this, null, function* () { let r = e.get(Mt), o = r.hydrating, i = e.get(ht), s = i.add(); for (let c = 0; c < t.length; c++) {
    let l = t[c], u = r.get(l);
    if (u != null) {
        if (yield rR(u), yield nR(e), Xb(u)) {
            nS(u), Kh(t.slice(c), r);
            break;
        }
        o.get(l).resolve();
    }
    else {
        eR(c, t, r), Kh(t.slice(c), r);
        break;
    }
} let a = t[t.length - 1]; yield o.get(a)?.promise, i.remove(s), n && n(t), rS(r.get(a), t, r, e.get(Qe)); }); }
function Xb(e) { return De(e.lView, e.tNode)[_t] === G.Error; }
function eR(e, t, n) { let r = e - 1, o = r > -1 ? n.get(t[r]) : null; o && ha(o.lContainer); }
function Kh(e, t) { let n = t.hydrating; for (let r in e)
    n.get(r)?.reject(); t.cleanup(e); }
function tR(e, t) { for (let n of t)
    e.hydrating.set(n, Promise.withResolvers()); }
function nR(e) { return new Promise(t => tE(t, { injector: e })); }
function rR(e) { return Rt(this, null, function* () { let { tNode: t, lView: n } = e, r = De(n, t); return new Promise(o => { oR(r, o), Te(2, n, t); }); }); }
function oR(e, t) { Array.isArray(e[ir]) || (e[ir] = []), e[ir].push(t); }
function Y(e, t, n) { return e === 0 ? Jh(t, n) : e === 2 ? !Jh(t, n) : !(typeof ngServerMode < "u" && ngServerMode); }
function iR(e) { return e != null && (e & 1) === 1; }
function Jh(e, t) { let n = e[K], r = ce(e[y], t), o = Ys(n), i = iR(r.flags); if (typeof ngServerMode < "u" && ngServerMode)
    return !o || !i; let a = De(e, t)[Ea] !== null; return !(i && a && o); }
function Gt(e, t) { let n = ce(e, t); return n.hydrateTriggers ??= new Map; }
function TE(e, t, n) { let r = [], o = [], i = [], s = []; for (let [a, c] of t) {
    let l = n.get(a);
    if (l !== void 0) {
        let u = c.data[vt], d = l;
        for (let f = 0; f < u; f++) {
            if (d = d.previousSibling, d.nodeType !== Node.ELEMENT_NODE)
                continue;
            let p = { el: d, blockName: a };
            c.hydrate.idle && r.push(p), c.hydrate.immediate && s.push(p), c.hydrate.timer !== null && (p.delay = c.hydrate.timer, o.push(p)), c.hydrate.viewport && i.push(p);
        }
    }
} sR(e, r), lR(e, s), aR(e, i), cR(e, o); }
function sR(e, t) { for (let n of t) {
    let r = e.get(Mt), i = Ca(() => St(e, n.blockName), e);
    r.addCleanupFn(n.blockName, i);
} }
function aR(e, t) { if (t.length > 0) {
    let n = e.get(Mt);
    for (let r of t) {
        let o = nf(r.el, () => St(e, r.blockName), e);
        n.addCleanupFn(r.blockName, o);
    }
} }
function cR(e, t) { for (let n of t) {
    let r = e.get(Mt), o = () => St(e, n.blockName), s = Ma(n.delay)(o, e);
    r.addCleanupFn(n.blockName, s);
} }
function lR(e, t) { for (let n of t)
    St(e, n.blockName); }
function CE(e, t, n, r, o, i, s, a, c, l) { let u = g(), d = R(), f = e + E, p = In(u, d, e, null, 0, 0), h = u[K]; if (d.firstCreatePass) {
    fe("NgDefer");
    let ye = { primaryTmplIndex: t, loadingTmplIndex: r ?? null, placeholderTmplIndex: o ?? null, errorTmplIndex: i ?? null, placeholderBlockConfig: null, loadingBlockConfig: null, dependencyResolverFn: n ?? null, loadingState: ee.NOT_STARTED, loadingPromise: null, providers: null, hydrateTriggers: null, debug: null, flags: l ?? 0 };
    c?.(d, ye, a, s), Ob(d, f, ye);
} let m = u[f]; gv(m, p, u); let v = null, I = null; if (m[Ae]?.length > 0) {
    let ye = m[Ae][0].data;
    I = ye[qs] ?? null, v = ye[zo];
} let L = [null, Fo.Initial, null, null, null, null, I, v, null, null]; Ab(u, f, L); let pe = null; I !== null && (pe = h.get(Mt), pe.add(I, { lView: u, tNode: p, lContainer: m })); let Ye = () => { Qv(L), I !== null && pe?.cleanup([I]); }; oi(0, L, () => Pi(u, Ye)), so(u, Ye); }
function ME(e) { let t = g(), n = Le(); if (!Y(0, t, n))
    return; let r = Ie(); if (Q(t, r, e)) {
    let o = A(null);
    try {
        let i = !!e, a = De(t, n)[_t];
        i === !1 && a === Fo.Initial ? Lr(t, n) : i === !0 && (a === Fo.Initial || a === G.Placeholder) && Te(0, t, n);
    }
    finally {
        A(o);
    }
} }
function wE(e) { let t = g(), n = Le(); if (!Y(1, t, n))
    return; let r = Ie(); if (Q(t, r, e)) {
    let o = A(null);
    try {
        let i = !!e, s = t[y], a = Le(), c = ce(s, a);
        i === !0 && c.loadingState === ee.NOT_STARTED && ai(c, t, a);
    }
    finally {
        A(o);
    }
} }
function NE(e) { let t = g(), n = Le(); if (!Y(2, t, n))
    return; let r = Ie(), o = R(); if (Gt(o, n).set(6, null), Q(t, r, e))
    if (typeof ngServerMode < "u" && ngServerMode)
        Te(2, t, n);
    else {
        let s = t[K], a = A(null);
        try {
            if (!!e === !0) {
                let u = De(t, n)[Ea];
                St(s, u);
            }
        }
        finally {
            A(a);
        }
    } }
function _E() { let e = g(), t = b(); if (!Y(2, e, t))
    return; Gt(R(), t).set(7, null), typeof ngServerMode < "u" && ngServerMode && Te(2, e, t); }
function SE() { let e = g(), t = b(); Y(0, e, t) && vE(Ca); }
function bE() { let e = g(), t = b(); Y(1, e, t) && EE(Ca); }
function RE() { let e = g(), t = b(); if (!Y(2, e, t))
    return; Gt(R(), t).set(0, null), typeof ngServerMode < "u" && ngServerMode ? Te(2, e, t) : IE(Ca, e, t); }
function AE() { let e = g(), t = b(); if (!Y(0, e, t))
    return; ce(e[y], t).loadingTmplIndex === null && Lr(e, t), Te(0, e, t); }
function OE() { let e = g(), t = b(); if (!Y(1, e, t))
    return; let n = e[y], r = ce(n, t); r.loadingState === ee.NOT_STARTED && wa(r, e, t); }
function xE() { let e = g(), t = b(); if (!Y(2, e, t))
    return; if (Gt(R(), t).set(1, null), typeof ngServerMode < "u" && ngServerMode)
    Te(2, e, t);
else {
    let r = e[K], i = De(e, t)[Ea];
    St(r, i);
} }
function kE(e) { let t = g(), n = b(); Y(0, t, n) && vE(Ma(e)); }
function PE(e) { let t = g(), n = b(); Y(1, t, n) && EE(Ma(e)); }
function LE(e) { let t = g(), n = b(); if (!Y(2, t, n))
    return; Gt(R(), n).set(5, { delay: e }), typeof ngServerMode < "u" && ngServerMode ? Te(2, t, n) : IE(Ma(e), t, n); }
function FE(e, t) { let n = g(), r = b(); Y(0, n, r) && (Lr(n, r), typeof ngServerMode < "u" && ngServerMode || Pr(n, r, e, t, sm, () => Te(0, n, r), 0)); }
function jE(e, t) { let n = g(), r = b(); if (!Y(1, n, r))
    return; let o = n[y], i = ce(o, r); i.loadingState === ee.NOT_STARTED && Pr(n, r, e, t, sm, () => ai(i, n, r), 1); }
function VE() { let e = g(), t = b(); if (!Y(2, e, t))
    return; Gt(R(), t).set(4, null), typeof ngServerMode < "u" && ngServerMode && Te(2, e, t); }
function HE(e, t) { let n = g(), r = b(); Y(0, n, r) && (Lr(n, r), typeof ngServerMode < "u" && ngServerMode || Pr(n, r, e, t, im, () => Te(0, n, r), 0)); }
function BE(e, t) { let n = g(), r = b(); if (!Y(1, n, r))
    return; let o = n[y], i = ce(o, r); i.loadingState === ee.NOT_STARTED && Pr(n, r, e, t, im, () => ai(i, n, r), 1); }
function UE() { let e = g(), t = b(); if (!Y(2, e, t))
    return; Gt(R(), t).set(3, null), typeof ngServerMode < "u" && ngServerMode && Te(2, e, t); }
function $E(e, t) { let n = g(), r = b(); Y(0, n, r) && (Lr(n, r), typeof ngServerMode < "u" && ngServerMode || Pr(n, r, e, t, nf, () => Te(0, n, r), 0)); }
function qE(e, t) { let n = g(), r = b(); if (!Y(1, n, r))
    return; let o = n[y], i = ce(o, r); i.loadingState === ee.NOT_STARTED && Pr(n, r, e, t, nf, () => ai(i, n, r), 1); }
function GE() { let e = g(), t = b(); if (!Y(2, e, t))
    return; Gt(R(), t).set(2, null), typeof ngServerMode < "u" && ngServerMode && Te(2, e, t); }
function df(e, t, n, r) { let o = g(), i = Ie(); if (Q(o, i, t)) {
    let s = R(), a = Le();
    zN(a, o, e, t, n, r);
} return df; }
function WE() { return g()[J][B]; }
var Tu = class {
    destroy(t) { }
    updateValue(t, n) { }
    swap(t, n) { let r = Math.min(t, n), o = Math.max(t, n), i = this.detach(o); if (o - r > 1) {
        let s = this.detach(r);
        this.attach(r, i), this.attach(o, s);
    }
    else
        this.attach(r, i); }
    move(t, n) { this.attach(n, this.detach(t)); }
};
function Nl(e, t, n, r, o) { return e === n && Object.is(t, r) ? 1 : Object.is(o(e, t), o(n, r)) ? -1 : 0; }
function uR(e, t, n) { let r, o, i = 0, s = e.length - 1, a = void 0; if (Array.isArray(t)) {
    let c = t.length - 1;
    for (; i <= s && i <= c;) {
        let l = e.at(i), u = t[i], d = Nl(i, l, i, u, n);
        if (d !== 0) {
            d < 0 && e.updateValue(i, u), i++;
            continue;
        }
        let f = e.at(s), p = t[c], h = Nl(s, f, c, p, n);
        if (h !== 0) {
            h < 0 && e.updateValue(s, p), s--, c--;
            continue;
        }
        let m = n(i, l), v = n(s, f), I = n(i, u);
        if (Object.is(I, v)) {
            let L = n(c, p);
            Object.is(L, m) ? (e.swap(i, s), e.updateValue(s, p), c--, s--) : e.move(s, i), e.updateValue(i, u), i++;
            continue;
        }
        if (r ??= new bs, o ??= eg(e, i, s, n), Cu(e, r, i, I))
            e.updateValue(i, u), i++, s++;
        else if (o.has(I))
            r.set(m, e.detach(i)), s--;
        else {
            let L = e.create(i, t[i]);
            e.attach(i, L), i++, s++;
        }
    }
    for (; i <= c;)
        Xh(e, r, n, i, t[i]), i++;
}
else if (t != null) {
    let c = t[Symbol.iterator](), l = c.next();
    for (; !l.done && i <= s;) {
        let u = e.at(i), d = l.value, f = Nl(i, u, i, d, n);
        if (f !== 0)
            f < 0 && e.updateValue(i, d), i++, l = c.next();
        else {
            r ??= new bs, o ??= eg(e, i, s, n);
            let p = n(i, d);
            if (Cu(e, r, i, p))
                e.updateValue(i, d), i++, s++, l = c.next();
            else if (!o.has(p))
                e.attach(i, e.create(i, d)), i++, s++, l = c.next();
            else {
                let h = n(i, u);
                r.set(h, e.detach(i)), s--;
            }
        }
    }
    for (; !l.done;)
        Xh(e, r, n, e.length, l.value), l = c.next();
} for (; i <= s;)
    e.destroy(e.detach(s--)); r?.forEach(c => { e.destroy(c); }); }
function Cu(e, t, n, r) { return t !== void 0 && t.has(r) ? (e.attach(n, t.get(r)), t.delete(r), !0) : !1; }
function Xh(e, t, n, r, o) { if (Cu(e, t, r, n(r, o)))
    e.updateValue(r, o);
else {
    let i = e.create(r, o);
    e.attach(r, i);
} }
function eg(e, t, n, r) { let o = new Set; for (let i = t; i <= n; i++)
    o.add(r(i, e.at(i))); return o; }
var bs = class {
    kvMap = new Map;
    _vMap = void 0;
    has(t) { return this.kvMap.has(t); }
    delete(t) { if (!this.has(t))
        return !1; let n = this.kvMap.get(t); return this._vMap !== void 0 && this._vMap.has(n) ? (this.kvMap.set(t, this._vMap.get(n)), this._vMap.delete(n)) : this.kvMap.delete(t), !0; }
    get(t) { return this.kvMap.get(t); }
    set(t, n) { if (this.kvMap.has(t)) {
        let r = this.kvMap.get(t);
        this._vMap === void 0 && (this._vMap = new Map);
        let o = this._vMap;
        for (; o.has(r);)
            r = o.get(r);
        o.set(r, n);
    }
    else
        this.kvMap.set(t, n); }
    forEach(t) { for (let [n, r] of this.kvMap)
        if (t(r, n), this._vMap !== void 0) {
            let o = this._vMap;
            for (; o.has(r);)
                r = o.get(r), t(r, n);
        } }
};
function zE(e, t, n, r, o, i, s, a) { fe("NgControlFlow"); let c = g(), l = R(), u = de(l.consts, i); return In(c, l, e, t, n, r, o, u, 256, s, a), Na; }
function Na(e, t, n, r, o, i, s, a) { fe("NgControlFlow"); let c = g(), l = R(), u = de(l.consts, i); return In(c, l, e, t, n, r, o, u, 512, s, a), Na; }
function QE(e, t) { fe("NgControlFlow"); let n = g(), r = Ie(), o = n[r] !== V ? n[r] : -1, i = o !== -1 ? Rs(n, E + o) : void 0, s = 0; if (Q(n, r, e)) {
    let a = A(null);
    try {
        if (i !== void 0 && bd(i, s), e !== -1) {
            let c = E + e, l = Rs(n, c), u = _u(n[y], c), d = Jy(l, u, n), f = Rr(n, u, t, { dehydratedView: d });
            Ar(l, f, s, vn(u, d));
        }
    }
    finally {
        A(a);
    }
}
else if (i !== void 0) {
    let a = _y(i, s);
    a !== void 0 && (a[B] = t);
} }
var Mu = class {
    lContainer;
    $implicit;
    $index;
    constructor(t, n, r) { this.lContainer = t, this.$implicit = n, this.$index = r; }
    get $count() { return this.lContainer.length - W; }
};
function ZE(e) { return e; }
function YE(e, t) { return t; }
var wu = class {
    hasEmptyBlock;
    trackByFn;
    liveCollection;
    constructor(t, n, r) { this.hasEmptyBlock = t, this.trackByFn = n, this.liveCollection = r; }
};
function KE(e, t, n, r, o, i, s, a, c, l, u, d, f) { fe("NgControlFlow"); let p = g(), h = R(), m = c !== void 0, v = g(), I = a ? s.bind(v[J][B]) : s, L = new wu(m, I); v[E + e] = L, In(p, h, e + 1, t, n, r, o, de(h.consts, i), 256), m && In(p, h, e + 2, c, l, u, d, de(h.consts, f), 512); }
var Nu = class extends Tu {
    lContainer;
    hostLView;
    templateTNode;
    operationsCounter = void 0;
    needsIndexUpdate = !1;
    constructor(t, n, r) { super(), this.lContainer = t, this.hostLView = n, this.templateTNode = r; }
    get length() { return this.lContainer.length - W; }
    at(t) { return this.getLView(t)[B].$implicit; }
    attach(t, n) { let r = n[se]; this.needsIndexUpdate ||= t !== this.length, Ar(this.lContainer, n, t, vn(this.templateTNode, r)); }
    detach(t) { return this.needsIndexUpdate ||= t !== this.length - 1, dR(this.lContainer, t); }
    create(t, n) { let r = Oo(this.lContainer, this.templateTNode.tView.ssrId), o = Rr(this.hostLView, this.templateTNode, new Mu(this.lContainer, n, t), { dehydratedView: r }); return this.operationsCounter?.recordCreate(), o; }
    destroy(t) { Xo(t[y], t), this.operationsCounter?.recordDestroy(); }
    updateValue(t, n) { this.getLView(t)[B].$implicit = n; }
    reset() { this.needsIndexUpdate = !1, this.operationsCounter?.reset(); }
    updateIndexes() { if (this.needsIndexUpdate)
        for (let t = 0; t < this.length; t++)
            this.getLView(t)[B].$index = t; }
    getLView(t) { return fR(this.lContainer, t); }
};
function JE(e) { let t = A(null), n = ae(); try {
    let r = g(), o = r[y], i = r[n], s = n + 1, a = Rs(r, s);
    if (i.liveCollection === void 0) {
        let l = _u(o, s);
        i.liveCollection = new Nu(a, r, l);
    }
    else
        i.liveCollection.reset();
    let c = i.liveCollection;
    if (uR(c, e, i.trackByFn), c.updateIndexes(), i.hasEmptyBlock) {
        let l = Ie(), u = c.length === 0;
        if (Q(r, l, u)) {
            let d = n + 2, f = Rs(r, d);
            if (u) {
                let p = _u(o, d), h = Jy(f, p, r), m = Rr(r, p, void 0, { dehydratedView: h });
                Ar(f, m, 0, vn(p, h));
            }
            else
                o.firstUpdatePass && pa(f), bd(f, 0);
        }
    }
}
finally {
    A(t);
} }
function Rs(e, t) { return e[t]; }
function dR(e, t) { return Ro(e, t); }
function fR(e, t) { return _y(e, t); }
function _u(e, t) { return pt(e, t); }
function ff(e, t, n) { let r = g(), o = Ie(); if (Q(r, o, t)) {
    let i = R(), s = Le();
    Td(s, r, e, t, r[S], n);
} return ff; }
function Su(e, t, n, r, o) { _d(t, e, n, o ? "class" : "style", r); }
function _a(e, t, n, r) { let o = g(), i = o[y], s = e + E, a = i.firstCreatePass ? Pd(s, o, 2, t, Md, Li(), n, r) : i.data[s]; if (ia(a, o, e, t, gf), Vn(a)) {
    let c = o[y];
    oa(c, o, a), id(c, a, o);
} return r != null && br(o, a), _a; }
function Sa() { let e = R(), t = b(), n = sa(t); return e.firstCreatePass && Ld(e, n), Vc(n) && Uc(), jc(), n.classesWithoutHost != null && IM(n) && Su(e, n, g(), n.classesWithoutHost, !0), n.stylesWithoutHost != null && DM(n) && Su(e, n, g(), n.stylesWithoutHost, !1), Sa; }
function pf(e, t, n, r) { return _a(e, t, n, r), Sa(), pf; }
function ba(e, t, n, r) { let o = g(), i = o[y], s = e + E, a = i.firstCreatePass ? iv(s, i, 2, t, n, r) : i.data[s]; return ia(a, o, e, t, gf), r != null && br(o, a), ba; }
function Ra() { let e = b(), t = sa(e); return Vc(t) && Uc(), jc(), Ra; }
function hf(e, t, n, r) { return ba(e, t, n, r), Ra(), hf; }
var gf = (e, t, n, r, o) => (We(!0), ea(t[S], r, ol()));
function pR(e, t, n, r, o) { let i = !Js(t, n); if (We(i), i)
    return ea(t[S], r, ol()); let s = t[se], a = ti(s, e, t, n); return Dm(s, o) && Zs(s, o, a.nextSibling), s && (Bu(n) || $g(a)) && Oe(n) && (Yp(n), Xm(a)), a; }
function XE() { gf = pR; }
function Aa(e, t, n) { let r = g(), o = r[y], i = e + E, s = o.firstCreatePass ? Pd(i, r, 8, "ng-container", Md, Li(), t, n) : o.data[i]; if (ia(s, r, e, "ng-container", Ef), Vn(s)) {
    let a = r[y];
    oa(a, r, s), id(a, s, r);
} return n != null && br(r, s), Aa; }
function ci() { let e = R(), t = b(), n = sa(t); return e.firstCreatePass && Ld(e, n), ci; }
function mf(e, t, n) { return Aa(e, t, n), ci(), mf; }
function Oa(e, t, n) { let r = g(), o = r[y], i = e + E, s = o.firstCreatePass ? iv(i, o, 8, "ng-container", t, n) : o.data[i]; return ia(s, r, e, "ng-container", Ef), n != null && br(r, s), Oa; }
function yf() { let e = b(), t = sa(e); return ci; }
function vf(e, t, n) { return Oa(e, t, n), yf(), vf; }
var Ef = (e, t, n, r, o) => (We(!0), pd(t[S], ""));
function hR(e, t, n, r, o) { let i, s = !Js(t, n); if (We(s), s)
    return pd(t[S], ""); let a = t[se], c = ti(a, e, t, n), l = Im(a, o); return Zs(a, o, c), i = da(l, c), i; }
function eI() { Ef = hR; }
function tI() { return g(); }
function If(e, t, n) { let r = g(), o = Ie(); if (Q(r, o, t)) {
    let i = R(), s = Le();
    Cd(s, r, e, t, r[S], n);
} return If; }
function Df(e, t, n) { let r = g(), o = Ie(); if (Q(r, o, t)) {
    let i = R(), s = Le(), a = ji(i.data), c = my(a, s, r);
    Cd(s, r, e, t, c, n);
} return Df; }
var fn = void 0;
function gR(e) { let t = Math.floor(Math.abs(e)), n = e.toString().replace(/^[^.]*\.?/, "").length; return t === 1 && n === 0 ? 1 : 5; }
var mR = ["en", [["a", "p"], ["AM", "PM"], fn], [["AM", "PM"], fn, fn], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], fn, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], fn, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"], ["{1}, {0}", fn, "{1} 'at' {0}", fn], [".", ",", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0%", "\xA4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", gR], sr = {};
function yR(e, t, n) { typeof t != "string" && (n = t, t = e[gr.LocaleId]), t = t.toLowerCase().replace(/_/g, "-"), sr[t] = e, n && (sr[t][gr.ExtraData] = n); }
function Tf(e) { let t = IR(e), n = tg(t); if (n)
    return n; let r = t.split("-")[0]; if (n = tg(r), n)
    return n; if (r === "en")
    return mR; throw new T(701, !1); }
function vR(e) { return Tf(e)[gr.CurrencyCode] || null; }
function nI(e) { return Tf(e)[gr.PluralCase]; }
function tg(e) { return e in sr || (sr[e] = Se.ng && Se.ng.common && Se.ng.common.locales && Se.ng.common.locales[e]), sr[e]; }
function ER() { sr = {}; }
var gr = (function (e) { return e[e.LocaleId = 0] = "LocaleId", e[e.DayPeriodsFormat = 1] = "DayPeriodsFormat", e[e.DayPeriodsStandalone = 2] = "DayPeriodsStandalone", e[e.DaysFormat = 3] = "DaysFormat", e[e.DaysStandalone = 4] = "DaysStandalone", e[e.MonthsFormat = 5] = "MonthsFormat", e[e.MonthsStandalone = 6] = "MonthsStandalone", e[e.Eras = 7] = "Eras", e[e.FirstDayOfWeek = 8] = "FirstDayOfWeek", e[e.WeekendRange = 9] = "WeekendRange", e[e.DateFormat = 10] = "DateFormat", e[e.TimeFormat = 11] = "TimeFormat", e[e.DateTimeFormat = 12] = "DateTimeFormat", e[e.NumberSymbols = 13] = "NumberSymbols", e[e.NumberFormats = 14] = "NumberFormats", e[e.CurrencyCode = 15] = "CurrencyCode", e[e.CurrencySymbol = 16] = "CurrencySymbol", e[e.CurrencyName = 17] = "CurrencyName", e[e.Currencies = 18] = "Currencies", e[e.Directionality = 19] = "Directionality", e[e.PluralCase = 20] = "PluralCase", e[e.ExtraData = 21] = "ExtraData", e; })(gr || {});
function IR(e) { return e.toLowerCase().replace(/_/g, "-"); }
var DR = ["zero", "one", "two", "few", "many"];
function TR(e, t) { let n = nI(t)(parseInt(e, 10)), r = DR[n]; return r !== void 0 ? r : "other"; }
var li = "en-US", CR = "USD", rI = { marker: "element" }, oI = { marker: "ICU" }, gt = (function (e) { return e[e.SHIFT = 2] = "SHIFT", e[e.APPEND_EAGERLY = 1] = "APPEND_EAGERLY", e[e.COMMENT = 2] = "COMMENT", e; })(gt || {}), iI = li;
function sI(e) { typeof e == "string" && (iI = e.toLowerCase().replace(/_/g, "-")); }
function MR() { return iI; }
var Vo = 0, Do = 0;
function wR(e) { e && (Vo = Vo | 1 << Math.min(Do, 31)), Do++; }
function NR(e, t, n) { if (Do > 0) {
    let r = e.data[n], o = Array.isArray(r) ? r : r.update, i = ot() - Do - 1;
    uI(e, t, o, i, Vo);
} Vo = 0, Do = 0; }
function aI(e, t, n) { let r = e[S]; switch (n) {
    case Node.COMMENT_NODE: return pd(r, t);
    case Node.TEXT_NODE: return fd(r, t);
    case Node.ELEMENT_NODE: return ea(r, t, null);
} }
var To = (e, t, n, r) => (We(!0), aI(e, n, r));
function _R(e, t, n, r) { let o = e[se], i = t - E, s = !fa() || !o || co() || Ks(o, i); return We(s), s ? aI(e, n, r) : Ly(o, i); }
function cI() { To = _R; }
function SR(e, t, n, r) { let o = e[S]; for (let i = 0; i < t.length; i++) {
    let s = t[i++], a = t[i], c = (s & gt.COMMENT) === gt.COMMENT, l = (s & gt.APPEND_EAGERLY) === gt.APPEND_EAGERLY, u = s >>> gt.SHIFT, d = e[u], f = !1;
    d === null && (d = e[u] = To(e, u, a, c ? Node.COMMENT_NODE : Node.TEXT_NODE), f = uo()), l && n !== null && f && yn(o, n, d, r, !1);
} }
function lI(e, t, n, r) { let o = n[S], i = null, s; for (let a = 0; a < t.length; a++) {
    let c = t[a];
    if (typeof c == "string") {
        let l = t[++a];
        n[l] === null && (n[l] = To(n, l, c, Node.TEXT_NODE));
    }
    else if (typeof c == "number")
        switch (c & 1) {
            case 0:
                let l = x_(c);
                i === null && (i = l, s = o.parentNode(r));
                let u, d;
                if (l === i ? (u = r, d = s) : (u = null, d = x(n[l])), d !== null) {
                    let m = k_(c), v = n[m];
                    yn(o, d, v, u, !1);
                    let I = yo(e, m);
                    if (I !== null && typeof I == "object") {
                        let L = ua(I, n);
                        L !== null && lI(e, I.create[L], n, n[I.anchorIdx]);
                    }
                }
                break;
            case 1:
                let f = c >>> 1, p = t[++a], h = t[++a];
                wd(o, cn(f, n), null, null, p, h, null);
                break;
            default:
        }
    else
        switch (c) {
            case oI:
                let l = t[++a], u = t[++a];
                if (n[u] === null) {
                    let p = n[u] = To(n, u, l, Node.COMMENT_NODE);
                    je(p, n);
                }
                break;
            case rI:
                let d = t[++a], f = t[++a];
                if (n[f] === null) {
                    let p = n[f] = To(n, f, d, Node.ELEMENT_NODE);
                    je(p, n);
                }
                break;
            default:
        }
} }
function uI(e, t, n, r, o) { for (let i = 0; i < n.length; i++) {
    let s = n[i], a = n[++i];
    if (s & o) {
        let c = "";
        for (let l = i + 1; l <= i + a; l++) {
            let u = n[l];
            if (typeof u == "string")
                c += u;
            else if (typeof u == "number")
                if (u < 0)
                    c += _(t[r - u]);
                else {
                    let d = u >>> 2;
                    switch (u & 3) {
                        case 1:
                            let f = n[++l], p = n[++l], h = e.data[d];
                            typeof h == "string" ? wd(t[S], t[d], null, h, f, c, p) : Td(h, t, f, c, t[S], p);
                            break;
                        case 0:
                            let m = t[d];
                            m !== null && Km(t[S], m, c);
                            break;
                        case 2:
                            bR(e, yo(e, d), t, c);
                            break;
                        case 3:
                            ng(e, yo(e, d), r, t);
                            break;
                    }
                }
        }
    }
    else {
        let c = n[i + 1];
        if (c > 0 && (c & 3) === 3) {
            let l = c >>> 2, u = yo(e, l);
            t[u.currentCaseLViewIndex] < 0 && ng(e, u, r, t);
        }
    }
    i += a;
} }
function ng(e, t, n, r) { let o = r[t.currentCaseLViewIndex]; if (o !== null) {
    let i = Vo;
    o < 0 && (o = r[t.currentCaseLViewIndex] = ~o, i = -1), uI(e, r, t.update[o], n, i);
} }
function bR(e, t, n, r) { let o = RR(t, r); if (ua(t, n) !== o && (dI(e, t, n), n[t.currentCaseLViewIndex] = o === null ? null : ~o, o !== null)) {
    let s = n[t.anchorIdx];
    s && lI(e, t.create[o], n, s), J_(n, t.anchorIdx, o);
} }
function dI(e, t, n) { let r = ua(t, n); if (r !== null) {
    let o = t.remove[r];
    for (let i = 0; i < o.length; i++) {
        let s = o[i];
        if (s > 0) {
            let a = cn(s, n);
            a !== null && Ko(n[S], a);
        }
        else
            dI(e, yo(e, ~s), n);
    }
} }
function RR(e, t) { let n = e.cases.indexOf(t); if (n === -1)
    switch (e.type) {
        case 1: {
            let r = TR(t, MR());
            n = e.cases.indexOf(r), n === -1 && r !== "other" && (n = e.cases.indexOf("other"));
            break;
        }
        case 0: {
            n = e.cases.indexOf("other");
            break;
        }
    } return n === -1 ? null : n; }
var As = /�(\d+):?\d*�/gi, AR = /({\s*�\d+:?\d*�\s*,\s*\S{6}\s*,[\s\S]*})/gi, OR = /�(\d+)�/, fI = /^\s*(�\d+:?\d*�)\s*,\s*(select|plural)\s*,/, Co = "\uFFFD", xR = /�\/?\*(\d+:\d+)�/gi, kR = /�(\/?[#*]\d+):?\d*�/gi, PR = /\uE500/g;
function LR(e) { return e.replace(PR, " "); }
function FR(e, t, n, r, o, i) { let s = Bn(), a = [], c = [], l = [[]], u = [[]]; o = BR(o, i); let d = LR(o).split(kR); for (let f = 0; f < d.length; f++) {
    let p = d[f];
    if ((f & 1) === 0) {
        let h = bu(p);
        for (let m = 0; m < h.length; m++) {
            let v = h[m];
            if ((m & 1) === 0) {
                let I = v;
                I !== "" && jR(u[0], e, s, l[0], a, c, n, I);
            }
            else {
                let I = v;
                if (typeof I != "object")
                    throw new Error(`Unable to parse ICU expression in "${o}" message.`);
                let pe = pI(e, s, l[0], n, a, "", !0).index;
                gI(u[0], e, n, c, t, I, pe);
            }
        }
    }
    else {
        let h = p.charCodeAt(0) === 47, m = p.charCodeAt(h ? 1 : 0), v = E + Number.parseInt(p.substring(h ? 2 : 1));
        if (h)
            l.shift(), u.shift(), rt(Bn(), !1);
        else {
            let I = O_(e, l[0], v);
            l.unshift([]), rt(I, !0);
            let L = { kind: 2, index: v, children: [], type: m === 35 ? 0 : 1 };
            u[0].push(L), u.unshift(L.children);
        }
    }
} e.data[r] = { create: a, update: c, ast: u[0], parentTNodeIndex: t }; }
function pI(e, t, n, r, o, i, s) { let a = Jo(e, r, 1, null), c = a << gt.SHIFT, l = Bn(); t === l && (l = null), l === null && (c |= gt.APPEND_EAGERLY), s && (c |= gt.COMMENT, AN(L_)), o.push(c, i === null ? "" : i); let u = Rd(e, a, s ? 32 : 1, i === null ? "" : i, null); Oy(n, u); let d = u.index; return rt(u, !1), l !== null && t !== l && A_(l, d), u; }
function jR(e, t, n, r, o, i, s, a) { let c = a.match(As), u = pI(t, n, r, s, o, c ? null : a, !1).index; c && Mo(i, a, u, null, 0, null), e.push({ kind: 0, index: u }); }
function VR(e, t, n) { let o = b().index, i = []; if (e.firstCreatePass && e.data[t] === null) {
    for (let s = 0; s < n.length; s += 2) {
        let a = n[s], c = n[s + 1];
        if (c !== "") {
            if (AR.test(c))
                throw new Error(`ICU expressions are not supported in attributes. Message: "${c}".`);
            Mo(i, c, o, a, HR(i), null);
        }
    }
    e.data[t] = i;
} }
function Mo(e, t, n, r, o, i) { let s = e.length, a = s + 1; e.push(null, null); let c = s + 2, l = t.split(As), u = 0; for (let d = 0; d < l.length; d++) {
    let f = l[d];
    if (d & 1) {
        let p = o + parseInt(f, 10);
        e.push(-1 - p), u = u | hI(p);
    }
    else
        f !== "" && e.push(f);
} return e.push(n << 2 | (r ? 1 : 0)), r && e.push(r, i), e[s] = u, e[a] = e.length - c, u; }
function HR(e) { let t = 0; for (let n = 0; n < e.length; n++) {
    let r = e[n];
    typeof r == "number" && r < 0 && t++;
} return t; }
function hI(e) { return 1 << Math.min(e, 31); }
function rg(e) { let t, n = "", r = 0, o = !1, i; for (; (t = xR.exec(e)) !== null;)
    o ? t[0] === `${Co}/*${i}${Co}` && (r = t.index, o = !1) : (n += e.substring(r, t.index + t[0].length), i = t[1], o = !0); return n += e.slice(r), n; }
function BR(e, t) { if (ky(t))
    return rg(e); {
    let n = e.indexOf(`:${t}${Co}`) + 2 + t.toString().length, r = e.search(new RegExp(`${Co}\\/\\*\\d+:${t}${Co}`));
    return rg(e.substring(n, r));
} }
function gI(e, t, n, r, o, i, s) { let a = 0, c = { type: i.type, currentCaseLViewIndex: Jo(t, n, 1, null), anchorIdx: s, cases: [], create: [], remove: [], update: [] }; GR(r, i, s), R_(t, s, c); let l = i.values, u = []; for (let d = 0; d < l.length; d++) {
    let f = l[d], p = [];
    for (let m = 0; m < f.length; m++) {
        let v = f[m];
        if (typeof v != "string") {
            let I = p.push(v) - 1;
            f[m] = `<!--\uFFFD${I}\uFFFD-->`;
        }
    }
    let h = [];
    u.push(h), a = $R(h, t, c, n, r, o, i.cases[d], f.join(""), p) | a;
} a && WR(r, a, s), e.push({ kind: 3, index: s, cases: u, currentCaseLViewIndex: c.currentCaseLViewIndex }); }
function UR(e) { let t = [], n = [], r = 1, o = 0; e = e.replace(fI, function (s, a, c) { return c === "select" ? r = 0 : r = 1, o = parseInt(a.slice(1), 10), ""; }); let i = bu(e); for (let s = 0; s < i.length;) {
    let a = i[s++].trim();
    r === 1 && (a = a.replace(/\s*(?:=)?(\w+)\s*/, "$1")), a.length && t.push(a);
    let c = bu(i[s++]);
    t.length > n.length && n.push(c);
} return { type: r, mainBinding: o, cases: t, values: n }; }
function bu(e) { if (!e)
    return []; let t = 0, n = [], r = [], o = /[{}]/g; o.lastIndex = 0; let i; for (; i = o.exec(e);) {
    let a = i.index;
    if (i[0] == "}") {
        if (n.pop(), n.length == 0) {
            let c = e.substring(t, a);
            fI.test(c) ? r.push(UR(c)) : r.push(c), t = a + 1;
        }
    }
    else {
        if (n.length == 0) {
            let c = e.substring(t, a);
            r.push(c), t = a + 1;
        }
        n.push("{");
    }
} let s = e.substring(t); return r.push(s), r; }
function $R(e, t, n, r, o, i, s, a, c) { let l = [], u = [], d = []; n.cases.push(s), n.create.push(l), n.remove.push(u), n.update.push(d); let p = Om(Tt()).getInertBodyElement(a), h = eu(p) || p; return h ? mI(e, t, n, r, o, l, u, d, h, i, c, 0) : 0; }
function mI(e, t, n, r, o, i, s, a, c, l, u, d) { let f = 0, p = c.firstChild; for (; p;) {
    let h = Jo(t, r, 1, null);
    switch (p.nodeType) {
        case Node.ELEMENT_NODE:
            let m = p, v = m.tagName.toLowerCase();
            if (Jl.hasOwnProperty(v)) {
                _l(i, rI, v, l, h), t.data[h] = v;
                let Ye = m.attributes;
                for (let Xa = 0; Xa < Ye.length; Xa++) {
                    let Qt = Ye.item(Xa), Tp = Qt.name.toLowerCase();
                    !!Qt.value.match(As) ? Lm.hasOwnProperty(Tp) && (ad[Tp] ? Mo(a, Qt.value, h, Qt.name, 0, Xs) : Mo(a, Qt.value, h, Qt.name, 0, null)) : zR(i, h, Qt);
                }
                let ye = { kind: 1, index: h, children: [] };
                e.push(ye), f = mI(ye.children, t, n, r, o, i, s, a, p, h, u, d + 1) | f, og(s, h, d);
            }
            break;
        case Node.TEXT_NODE:
            let I = p.textContent || "", L = I.match(As);
            _l(i, null, L ? "" : I, l, h), og(s, h, d), L && (f = Mo(a, I, h, null, 0, null) | f), e.push({ kind: 0, index: h });
            break;
        case Node.COMMENT_NODE:
            let pe = OR.exec(p.textContent || "");
            if (pe) {
                let Ye = parseInt(pe[1], 10), ye = u[Ye];
                _l(i, oI, "", l, h), gI(e, t, r, o, l, ye, h), qR(s, h, d);
            }
            break;
    }
    p = p.nextSibling;
} return f; }
function og(e, t, n) { n === 0 && e.push(t); }
function qR(e, t, n) { n === 0 && (e.push(~t), e.push(t)); }
function GR(e, t, n) { e.push(hI(t.mainBinding), 2, -1 - t.mainBinding, n << 2 | 2); }
function WR(e, t, n) { e.push(t, 1, n << 2 | 3); }
function _l(e, t, n, r, o) { t !== null && e.push(t), e.push(n, o, P_(0, r, o)); }
function zR(e, t, n) { e.push(t << 1 | 1, n.name, n.value); }
var ig = 0, QR = /\[(�.+?�?)\]/, ZR = /\[(�.+?�?)\]|(�\/?\*\d+:\d+�)/g, YR = /({\s*)(VAR_(PLURAL|SELECT)(_\d+)?)(\s*,)/g, KR = /{([A-Z0-9_]+)}/g, JR = /�I18N_EXP_(ICU(_\d+)?)�/g, XR = /\/\*/, eA = /\d+\:(\d+)/;
function tA(e, t = {}) { let n = e; if (QR.test(e)) {
    let r = {}, o = [ig];
    n = n.replace(ZR, (i, s, a) => { let c = s || a, l = r[c] || []; if (l.length || (c.split("|").forEach(m => { let v = m.match(eA), I = v ? parseInt(v[1], 10) : ig, L = XR.test(m); l.push([I, L, m]); }), r[c] = l), !l.length)
        throw new Error(`i18n postprocess: unmatched placeholder - ${c}`); let u = o[o.length - 1], d = 0; for (let m = 0; m < l.length; m++)
        if (l[m][0] === u) {
            d = m;
            break;
        } let [f, p, h] = l[d]; return p ? o.pop() : u !== f && o.push(f), l.splice(d, 1), h; });
} return Object.keys(t).length && (n = n.replace(YR, (r, o, i, s, a, c) => t.hasOwnProperty(i) ? `${o}${t[i]}${c}` : r), n = n.replace(KR, (r, o) => t.hasOwnProperty(o) ? t[o] : r), n = n.replace(JR, (r, o) => { if (t.hasOwnProperty(o)) {
    let i = t[o];
    if (!i.length)
        throw new Error(`i18n postprocess: unmatched ICU - ${r} with key: ${o}`);
    return i.shift();
} return r; })), n; }
function Cf(e, t, n = -1) { let r = R(), o = g(), i = E + e, s = de(r.consts, t), a = Bn(); if (r.firstCreatePass && FR(r, a === null ? 0 : a.index, o, i, s, n), r.type === 2) {
    let f = o[J];
    f[M] |= 32;
}
else
    o[M] |= 32; let c = r.data[i], l = a === o[ie] ? null : a, u = sy(r, l, o), d = a && a.type & 8 ? o[a.index] : null; W_(o, i, a, n), SR(o, c.create, u, d), Jc(!0); }
function Mf() { Jc(!1); }
function yI(e, t, n) { Cf(e, t, n), Mf(); }
function vI(e, t) { let n = R(), r = de(n.consts, t); VR(n, e + E, r); }
function wf(e) { let t = g(); return wR(Q(t, Ie(), e)), wf; }
function EI(e) { NR(R(), g(), e + E); }
function II(e, t = {}) { return tA(e, t); }
function Nf(e, t, n) { let r = g(), o = R(), i = b(); return bf(o, r, r[S], i, e, t, n), Nf; }
function _f(e, t) { let n = b(), r = g(), o = R(), i = ji(o.data), s = my(i, n, r); return bf(o, r, s, n, e, t), _f; }
function Sf(e, t, n) { let r = g(), o = R(), i = b(); return (i.type & 3 || n) && cv(i, o, r, n, r[S], e, t, Eo(i, r, t)), Sf; }
function bf(e, t, n, r, o, i, s) { let a = !0, c = null; if ((r.type & 3 || s) && (c ??= Eo(r, t, i), cv(r, e, t, s, n, o, i, c) && (a = !1)), a) {
    let l = r.outputs?.[o], u = r.hostDirectiveOutputs?.[o];
    if (u && u.length)
        for (let d = 0; d < u.length; d += 2) {
            let f = u[d], p = u[d + 1];
            c ??= Eo(r, t, i), Cs(r, t, f, p, o, c);
        }
    if (l && l.length)
        for (let d of l)
            c ??= Eo(r, t, i), Cs(r, t, d, o, o, c);
} }
function DI(e = 1) { return rh(e); }
function nA(e, t) { let n = null, r = IN(e); for (let o = 0; o < t.length; o++) {
    let i = t[o];
    if (i === "*") {
        n = o;
        continue;
    }
    if (r === null ? Ym(e, i, !0) : CN(r, i))
        return o;
} return n; }
function TI(e) { let t = g()[J][ie]; if (!t.projection) {
    let n = e ? e.length : 1, r = t.projection = Xr(n, null), o = r.slice(), i = t.child;
    for (; i !== null;) {
        if (i.type !== 128) {
            let s = e ? nA(i, e) : 0;
            s !== null && (o[s] ? o[s].projectionNext = i : r[s] = i, o[s] = i);
        }
        i = i.next;
    }
} }
function CI(e, t = 0, n, r, o, i) { let s = g(), a = R(), c = r ? e + 1 : null; c !== null && In(s, a, c, r, o, i, null, n); let l = Nn(a, E + e, 16, null, n || null); l.projection === null && (l.projection = t), zc(); let d = !s[se] || co(); s[J][ie].projection[l.projection] === null && c !== null ? rA(s, a, c) : d && !Nr(l) && LN(a, s, l); }
function rA(e, t, n) { let r = E + n, o = t.data[r], i = e[r], s = Oo(i, o.tView.ssrId), a = Rr(e, o, void 0, { dehydratedView: s }); Ar(i, a, 0, vn(o, s)); }
function MI(e, t, n, r) { Dv(e, t, n, r); }
function wI(e, t, n) { Iv(e, t, n); }
function NI(e) { let t = g(), n = R(), r = Vi(); lo(r + 1); let o = Vd(n, r); if (e.dirty && Gp(t) === ((o.metadata.flags & 2) === 2)) {
    if (o.matches === null)
        e.reset([]);
    else {
        let i = Cv(t, r);
        e.reset(i, Ug), e.notifyOnChanges();
    }
    return !0;
} return !1; }
function _I() { return jd(g(), Vi()); }
function SI(e, t, n, r, o) { Mv(t, Dv(e, n, r, o)); }
function bI(e, t, n, r) { Mv(e, Iv(t, n, r)); }
function RI(e = 1) { lo(Vi() + e); }
function AI(e) { let t = Qc(); return Lt(t, E + e); }
function Zi(e, t) { return e << 17 | t << 2; }
function Dn(e) { return e >> 17 & 32767; }
function oA(e) { return (e & 2) == 2; }
function iA(e, t) { return e & 131071 | t << 17; }
function Ru(e) { return e | 2; }
function mr(e) { return (e & 131068) >> 2; }
function Sl(e, t) { return e & -131069 | t << 2; }
function sA(e) { return (e & 1) === 1; }
function Au(e) { return e | 1; }
function aA(e, t, n, r, o, i) { let s = i ? t.classBindings : t.styleBindings, a = Dn(s), c = mr(s); e[r] = n; let l = !1, u; if (Array.isArray(n)) {
    let d = n;
    u = d[1], (u === null || Ln(d, u) > 0) && (l = !0);
}
else
    u = n; if (o)
    if (c !== 0) {
        let f = Dn(e[a + 1]);
        e[r + 1] = Zi(f, a), f !== 0 && (e[f + 1] = Sl(e[f + 1], r)), e[a + 1] = iA(e[a + 1], r);
    }
    else
        e[r + 1] = Zi(a, 0), a !== 0 && (e[a + 1] = Sl(e[a + 1], r)), a = r;
else
    e[r + 1] = Zi(c, 0), a === 0 ? a = r : e[c + 1] = Sl(e[c + 1], r), c = r; l && (e[r + 1] = Ru(e[r + 1])), sg(e, u, r, !0), sg(e, u, r, !1), cA(t, u, e, r, i), s = Zi(a, c), i ? t.classBindings = s : t.styleBindings = s; }
function cA(e, t, n, r, o) { let i = o ? e.residualClasses : e.residualStyles; i != null && typeof t == "string" && Ln(i, t) >= 0 && (n[r + 1] = Au(n[r + 1])); }
function sg(e, t, n, r) { let o = e[n + 1], i = t === null, s = r ? Dn(o) : mr(o), a = !1; for (; s !== 0 && (a === !1 || i);) {
    let c = e[s], l = e[s + 1];
    lA(c, t) && (a = !0, e[s + 1] = r ? Au(l) : Ru(l)), s = r ? Dn(l) : mr(l);
} a && (e[n + 1] = r ? Ru(o) : Au(o)); }
function lA(e, t) { return e === null || t == null || (Array.isArray(e) ? e[1] : e) === t ? !0 : Array.isArray(e) && typeof t == "string" ? Ln(e, t) >= 0 : !1; }
var ne = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
function OI(e) { return e.substring(ne.key, ne.keyEnd); }
function uA(e) { return e.substring(ne.value, ne.valueEnd); }
function dA(e) { return PI(e), xI(e, yr(e, 0, ne.textEnd)); }
function xI(e, t) { let n = ne.textEnd; return n === t ? -1 : (t = ne.keyEnd = pA(e, ne.key = t, n), yr(e, t, n)); }
function fA(e) { return PI(e), kI(e, yr(e, 0, ne.textEnd)); }
function kI(e, t) { let n = ne.textEnd, r = ne.key = yr(e, t, n); return n === r ? -1 : (r = ne.keyEnd = hA(e, r, n), r = ag(e, r, n, 58), r = ne.value = yr(e, r, n), r = ne.valueEnd = gA(e, r, n), ag(e, r, n, 59)); }
function PI(e) { ne.key = 0, ne.keyEnd = 0, ne.value = 0, ne.valueEnd = 0, ne.textEnd = e.length; }
function yr(e, t, n) { for (; t < n && e.charCodeAt(t) <= 32;)
    t++; return t; }
function pA(e, t, n) { for (; t < n && e.charCodeAt(t) > 32;)
    t++; return t; }
function hA(e, t, n) { let r; for (; t < n && ((r = e.charCodeAt(t)) === 45 || r === 95 || (r & -33) >= 65 && (r & -33) <= 90 || r >= 48 && r <= 57);)
    t++; return t; }
function ag(e, t, n, r) { return t = yr(e, t, n), t < n && t++, t; }
function gA(e, t, n) { let r = -1, o = -1, i = -1, s = t, a = s; for (; s < n;) {
    let c = e.charCodeAt(s++);
    if (c === 59)
        return a;
    c === 34 || c === 39 ? a = s = cg(e, c, s, n) : t === s - 4 && i === 85 && o === 82 && r === 76 && c === 40 ? a = s = cg(e, 41, s, n) : c > 32 && (a = s), i = o, o = r, r = c & -33;
} return a; }
function cg(e, t, n, r) { let o = -1, i = n; for (; i < r;) {
    let s = e.charCodeAt(i++);
    if (s == t && o !== 92)
        return i;
    s == 92 && o === 92 ? o = 0 : o = s;
} throw new Error; }
function Rf(e, t, n) { return jI(e, t, n, !1), Rf; }
function Af(e, t) { return jI(e, t, null, !0), Af; }
function LI(e) { VI(UI, mA, e, !1); }
function mA(e, t) { for (let n = fA(t); n >= 0; n = kI(t, n))
    UI(e, OI(t), uA(t)); }
function FI(e) { VI(CA, yA, e, !0); }
function yA(e, t) { for (let n = dA(t); n >= 0; n = xI(t, n))
    eo(e, OI(t), !0); }
function jI(e, t, n, r) { let o = g(), i = R(), s = it(2); if (i.firstUpdatePass && BI(i, e, s, r), t !== V && Q(o, s, t)) {
    let a = i.data[ae()];
    $I(i, a, o, o[S], e, o[s + 1] = wA(t, n), r, s);
} }
function VI(e, t, n, r) { let o = R(), i = it(2); o.firstUpdatePass && BI(o, null, i, r); let s = g(); if (n !== V && Q(s, i, n)) {
    let a = o.data[ae()];
    if (qI(a, r) && !HI(o, i)) {
        let c = r ? a.classesWithoutHost : a.stylesWithoutHost;
        c !== null && (n = Di(c, n || "")), Su(o, a, s, n, r);
    }
    else
        MA(o, a, s, s[S], s[i + 1], s[i + 1] = TA(e, t, n), r, i);
} }
function HI(e, t) { return t >= e.expandoStartIndex; }
function BI(e, t, n, r) { let o = e.data; if (o[n + 1] === null) {
    let i = o[ae()], s = HI(e, n);
    qI(i, r) && t === null && !s && (t = !1), t = vA(o, i, t, r), aA(o, i, t, n, s, r);
} }
function vA(e, t, n, r) { let o = ji(e), i = r ? t.residualClasses : t.residualStyles; if (o === null)
    (r ? t.classBindings : t.styleBindings) === 0 && (n = bl(null, e, t, n, r), n = Ho(n, t.attrs, r), i = null);
else {
    let s = t.directiveStylingLast;
    if (s === -1 || e[s] !== o)
        if (n = bl(o, e, t, n, r), i === null) {
            let c = EA(e, t, r);
            c !== void 0 && Array.isArray(c) && (c = bl(null, e, t, c[1], r), c = Ho(c, t.attrs, r), IA(e, t, r, c));
        }
        else
            i = DA(e, t, r);
} return i !== void 0 && (r ? t.residualClasses = i : t.residualStyles = i), n; }
function EA(e, t, n) { let r = n ? t.classBindings : t.styleBindings; if (mr(r) !== 0)
    return e[Dn(r)]; }
function IA(e, t, n, r) { let o = n ? t.classBindings : t.styleBindings; e[Dn(o)] = r; }
function DA(e, t, n) { let r, o = t.directiveEnd; for (let i = 1 + t.directiveStylingLast; i < o; i++) {
    let s = e[i].hostAttrs;
    r = Ho(r, s, n);
} return Ho(r, t.attrs, n); }
function bl(e, t, n, r, o) { let i = null, s = n.directiveEnd, a = n.directiveStylingLast; for (a === -1 ? a = n.directiveStart : a++; a < s && (i = t[a], r = Ho(r, i.hostAttrs, o), i !== e);)
    a++; return e !== null && (n.directiveStylingLast = a), r; }
function Ho(e, t, n) { let r = n ? 1 : 2, o = -1; if (t !== null)
    for (let i = 0; i < t.length; i++) {
        let s = t[i];
        typeof s == "number" ? o = s : o === r && (Array.isArray(e) || (e = e === void 0 ? [] : ["", e]), eo(e, s, n ? !0 : t[++i]));
    } return e === void 0 ? null : e; }
function TA(e, t, n) { if (n == null || n === "")
    return k; let r = [], o = wt(n); if (Array.isArray(o))
    for (let i = 0; i < o.length; i++)
        e(r, o[i], !0);
else if (typeof o == "object")
    for (let i in o)
        o.hasOwnProperty(i) && e(r, i, o[i]);
else
    typeof o == "string" && t(r, o); return r; }
function UI(e, t, n) { eo(e, t, wt(n)); }
function CA(e, t, n) { let r = String(t); r !== "" && !r.includes(" ") && eo(e, r, n); }
function MA(e, t, n, r, o, i, s, a) { o === V && (o = k); let c = 0, l = 0, u = 0 < o.length ? o[0] : null, d = 0 < i.length ? i[0] : null; for (; u !== null || d !== null;) {
    let f = c < o.length ? o[c + 1] : void 0, p = l < i.length ? i[l + 1] : void 0, h = null, m;
    u === d ? (c += 2, l += 2, f !== p && (h = d, m = p)) : d === null || u !== null && u < d ? (c += 2, h = u) : (l += 2, h = d, m = p), h !== null && $I(e, t, n, r, h, m, s, a), u = c < o.length ? o[c] : null, d = l < i.length ? i[l] : null;
} }
function $I(e, t, n, r, o, i, s, a) { if (!(t.type & 3))
    return; let c = e.data, l = c[a + 1], u = sA(l) ? lg(c, t, n, o, mr(l), s) : void 0; if (!Os(u)) {
    Os(i) || oA(l) && (i = lg(c, null, n, o, a, s));
    let d = cn(ae(), n);
    jN(r, s, d, o, i);
} }
function lg(e, t, n, r, o, i) { let s = t === null, a; for (; o > 0;) {
    let c = e[o], l = Array.isArray(c), u = l ? c[1] : c, d = u === null, f = n[o + 1];
    f === V && (f = d ? k : void 0);
    let p = d ? Ni(f, r) : u === r ? f : void 0;
    if (l && !Os(p) && (p = Ni(c, r)), Os(p) && (a = p, s))
        return a;
    let h = e[o + 1];
    o = s ? Dn(h) : mr(h);
} if (t !== null) {
    let c = i ? t.residualClasses : t.residualStyles;
    c != null && (a = Ni(c, r));
} return a; }
function Os(e) { return e !== void 0; }
function wA(e, t) { return e == null || e === "" || (typeof t == "string" ? e = e + t : typeof e == "object" && (e = He(wt(e)))), e; }
function qI(e, t) { return (e.flags & (t ? 8 : 16)) !== 0; }
function GI(e, t = "") { let n = g(), r = R(), o = e + E, i = r.firstCreatePass ? Nn(r, o, 1, t, null) : r.data[o], s = WI(r, n, i, t, e); n[o] = s, uo() && Id(r, n, s, i), rt(i, !1); }
var WI = (e, t, n, r, o) => (We(!0), fd(t[S], r));
function NA(e, t, n, r, o) { let i = !Js(t, n); if (We(i), i)
    return fd(t[S], r); let s = t[se]; return ti(s, e, t, n); }
function zI() { WI = NA; }
function QI(e, t) { let n = !1, r = ot(); for (let i = 1; i < t.length; i += 2)
    n = Q(e, r++, t[i]) || n; if (Kc(r), !n)
    return V; let o = t[0]; for (let i = 1; i < t.length; i += 2)
    o += _(t[i]) + (i + 1 !== t.length ? t[i + 1] : ""); return o; }
function ZI(e, t, n, r = "") { return Q(e, Ie(), n) ? t + _(n) + r : V; }
function YI(e, t, n, r, o, i = "") { let s = ot(), a = En(e, s, n, o); return it(2), a ? t + _(n) + r + _(o) + i : V; }
function KI(e, t, n, r, o, i, s, a = "") { let c = ot(), l = ya(e, c, n, o, s); return it(3), l ? t + _(n) + r + _(o) + i + _(s) + a : V; }
function JI(e, t, n, r, o, i, s, a, c, l = "") { let u = ot(), d = Ve(e, u, n, o, s, c); return it(4), d ? t + _(n) + r + _(o) + i + _(s) + a + _(c) + l : V; }
function XI(e, t, n, r, o, i, s, a, c, l, u, d = "") { let f = ot(), p = Ve(e, f, n, o, s, c); return p = Q(e, f + 4, u) || p, it(5), p ? t + _(n) + r + _(o) + i + _(s) + a + _(c) + l + _(u) + d : V; }
function eD(e, t, n, r, o, i, s, a, c, l, u, d, f, p = "") { let h = ot(), m = Ve(e, h, n, o, s, c); return m = En(e, h + 4, u, f) || m, it(6), m ? t + _(n) + r + _(o) + i + _(s) + a + _(c) + l + _(u) + d + _(f) + p : V; }
function tD(e, t, n, r, o, i, s, a, c, l, u, d, f, p, h, m = "") { let v = ot(), I = Ve(e, v, n, o, s, c); return I = ya(e, v + 4, u, f, h) || I, it(7), I ? t + _(n) + r + _(o) + i + _(s) + a + _(c) + l + _(u) + d + _(f) + p + _(h) + m : V; }
function nD(e, t, n, r, o, i, s, a, c, l, u, d, f, p, h, m, v, I = "") { let L = ot(), pe = Ve(e, L, n, o, s, c); return pe = Ve(e, L + 4, u, f, h, v) || pe, it(8), pe ? t + _(n) + r + _(o) + i + _(s) + a + _(c) + l + _(u) + d + _(f) + p + _(h) + m + _(v) + I : V; }
function Of(e) { return xa("", e), Of; }
function xa(e, t, n) { let r = g(), o = ZI(r, e, t, n); return o !== V && bt(r, ae(), o), xa; }
function xf(e, t, n, r, o) { let i = g(), s = YI(i, e, t, n, r, o); return s !== V && bt(i, ae(), s), xf; }
function kf(e, t, n, r, o, i, s) { let a = g(), c = KI(a, e, t, n, r, o, i, s); return c !== V && bt(a, ae(), c), kf; }
function Pf(e, t, n, r, o, i, s, a, c) { let l = g(), u = JI(l, e, t, n, r, o, i, s, a, c); return u !== V && bt(l, ae(), u), Pf; }
function Lf(e, t, n, r, o, i, s, a, c, l, u) { let d = g(), f = XI(d, e, t, n, r, o, i, s, a, c, l, u); return f !== V && bt(d, ae(), f), Lf; }
function Ff(e, t, n, r, o, i, s, a, c, l, u, d, f) { let p = g(), h = eD(p, e, t, n, r, o, i, s, a, c, l, u, d, f); return h !== V && bt(p, ae(), h), Ff; }
function jf(e, t, n, r, o, i, s, a, c, l, u, d, f, p, h) { let m = g(), v = tD(m, e, t, n, r, o, i, s, a, c, l, u, d, f, p, h); return v !== V && bt(m, ae(), v), jf; }
function Vf(e, t, n, r, o, i, s, a, c, l, u, d, f, p, h, m, v) { let I = g(), L = nD(I, e, t, n, r, o, i, s, a, c, l, u, d, f, p, h, m, v); return L !== V && bt(I, ae(), L), Vf; }
function Hf(e) { let t = g(), n = QI(t, e); return n !== V && bt(t, ae(), n), Hf; }
function bt(e, t, n) { let r = cn(t, e); Km(e[S], r, n); }
function Bf(e, t, n) { cl(t) && (t = t()); let r = g(), o = Ie(); if (Q(r, o, t)) {
    let i = R(), s = Le();
    Td(s, r, e, t, r[S], n);
} return Bf; }
function rD(e, t) { let n = cl(e); return n && e.set(t), n; }
function Uf(e, t) { let n = g(), r = R(), o = b(); return bf(r, n, n[S], o, e, t), Uf; }
var oD = {};
function $f(e) { let t = R(), n = g(), r = e + E, o = Nn(t, r, 128, null, null); return rt(o, !1), io(t, n, r, oD), $f; }
function iD(e) { fe("NgLet"); let t = R(), n = g(), r = ae(); return io(t, n, r, e), e; }
function sD(e) { let t = Qc(), n = Lt(t, E + e); if (n === oD)
    throw new T(314, !1); return n; }
function aD(e, t) { let n = R(), r = g(), o = r[S], i = "data-ng-source-location"; for (let [s, a, c, l] of t) {
    let u = pt(n, s + E), d = cn(s + E, r);
    if (!d.hasAttribute(i)) {
        let f = `${e}@o:${a},l:${c},c:${l}`;
        o.setAttribute(d, i, f);
    }
} }
function cD(e) { return Q(g(), Ie(), e) ? _(e) : V; }
function lD(e, t, n = "") { return ZI(g(), e, t, n); }
function uD(e, t, n, r, o = "") { return YI(g(), e, t, n, r, o); }
function dD(e, t, n, r, o, i, s = "") { return KI(g(), e, t, n, r, o, i, s); }
function fD(e, t, n, r, o, i, s, a, c = "") { return JI(g(), e, t, n, r, o, i, s, a, c); }
function pD(e, t, n, r, o, i, s, a, c, l, u = "") { return XI(g(), e, t, n, r, o, i, s, a, c, l, u); }
function hD(e, t, n, r, o, i, s, a, c, l, u, d, f = "") { return eD(g(), e, t, n, r, o, i, s, a, c, l, u, d, f); }
function gD(e, t, n, r, o, i, s, a, c, l, u, d, f, p, h = "") { return tD(g(), e, t, n, r, o, i, s, a, c, l, u, d, f, p, h); }
function mD(e, t, n, r, o, i, s, a, c, l, u, d, f, p, h, m, v = "") { return nD(g(), e, t, n, r, o, i, s, a, c, l, u, d, f, p, h, m, v); }
function yD(e) { return QI(g(), e); }
function _A(e, t, n) { let r = R(); if (r.firstCreatePass) {
    let o = we(e);
    Ou(n, r.data, r.blueprint, o, !0), Ou(t, r.data, r.blueprint, o, !1);
} }
function Ou(e, t, n, r, o) { if (e = O(e), Array.isArray(e))
    for (let i = 0; i < e.length; i++)
        Ou(e[i], t, n, r, o);
else {
    let i = R(), s = g(), a = b(), c = Jt(e) ? e : O(e.provide), l = _c(e), u = a.providerIndexes & 1048575, d = a.directiveStart, f = a.providerIndexes >> 20;
    if (Jt(e) || !e.multi) {
        let p = new mn(l, o, xr, null), h = Al(c, t, o ? u : u + f, d);
        h === -1 ? (Fl(fs(a, s), i, c), Rl(i, e, t.length), t.push(c), a.directiveStart++, a.directiveEnd++, o && (a.providerIndexes += 1048576), n.push(p), s.push(p)) : (n[h] = p, s[h] = p);
    }
    else {
        let p = Al(c, t, u + f, d), h = Al(c, t, u, u + f), m = p >= 0 && n[p], v = h >= 0 && n[h];
        if (o && !v || !o && !m) {
            Fl(fs(a, s), i, c);
            let I = RA(o ? bA : SA, n.length, o, r, l, e);
            !o && v && (n[h].providerFactory = I), Rl(i, e, t.length, 0), t.push(c), a.directiveStart++, a.directiveEnd++, o && (a.providerIndexes += 1048576), n.push(I), s.push(I);
        }
        else {
            let I = vD(n[o ? h : p], l, !o && r);
            Rl(i, e, p > -1 ? p : h, I);
        }
        !o && r && v && n[h].componentProviders++;
    }
} }
function Rl(e, t, n, r) { let o = Jt(t), i = Up(t); if (o || i) {
    let c = (i ? O(t.useClass) : t).prototype.ngOnDestroy;
    if (c) {
        let l = e.destroyHooks || (e.destroyHooks = []);
        if (!o && t.multi) {
            let u = l.indexOf(n);
            u === -1 ? l.push(n, [r, c]) : l[u + 1].push(r, c);
        }
        else
            l.push(n, c);
    }
} }
function vD(e, t, n) { return n && e.componentProviders++, e.multi.push(t) - 1; }
function Al(e, t, n, r) { for (let o = n; o < r; o++)
    if (t[o] === e)
        return o; return -1; }
function SA(e, t, n, r, o) { return xu(this.multi, []); }
function bA(e, t, n, r, o) { let i = this.multi, s; if (this.providerFactory) {
    let a = this.providerFactory.componentProviders, c = No(r, r[y], this.providerFactory.index, o);
    s = c.slice(0, a), xu(i, s);
    for (let l = a; l < c.length; l++)
        s.push(c[l]);
}
else
    s = [], xu(i, s); return s; }
function xu(e, t) { for (let n = 0; n < e.length; n++) {
    let r = e[n];
    t.push(r());
} return t; }
function RA(e, t, n, r, o, i) { let s = new mn(e, n, xr, null); return s.multi = [], s.index = t, s.componentProviders = 0, vD(s, o, r && !n), s; }
function ED(e, t = []) { return n => { n.providersResolver = (r, o) => _A(r, o ? o(e) : e, t); }; }
function ID(e) { return t => { e.length < 1 || (t.getExternalStyles = n => e.map(o => o + "?ngcomp" + (n ? "=" + encodeURIComponent(n) : "") + "&e=" + t.encapsulation)); }; }
function DD(e, t, n) { let r = e.\u0275cmp; r.directiveDefs = _s(t, Pv), r.pipeDefs = _s(n, Ue); }
function TD(e, t) { return ct(() => { let n = _i(e); n.declarations = Yi(t.declarations || k), n.imports = Yi(t.imports || k), n.exports = Yi(t.exports || k), t.bootstrap && (n.bootstrap = Yi(t.bootstrap)), lr.registerNgModule(e, t); }); }
function Yi(e) { if (typeof e == "function")
    return e; let t = Be(e); return t.some(Wr) ? () => t.map(O).map(ug) : t.map(ug); }
function ug(e) { return kd(e) ? e.ngModule : e; }
function CD(e, t, n) { let r = ge() + e, o = g(); return o[r] === V ? lt(o, r, n ? t.call(n) : t()) : ri(o, r); }
function MD(e, t, n, r) { return xD(g(), ge(), e, t, n, r); }
function wD(e, t, n, r, o) { return kD(g(), ge(), e, t, n, r, o); }
function ND(e, t, n, r, o, i) { return PD(g(), ge(), e, t, n, r, o, i); }
function _D(e, t, n, r, o, i, s) { return LD(g(), ge(), e, t, n, r, o, i, s); }
function SD(e, t, n, r, o, i, s, a) { let c = ge() + e, l = g(), u = Ve(l, c, n, r, o, i); return Q(l, c + 4, s) || u ? lt(l, c + 5, a ? t.call(a, n, r, o, i, s) : t(n, r, o, i, s)) : ri(l, c + 5); }
function bD(e, t, n, r, o, i, s, a, c) { let l = ge() + e, u = g(), d = Ve(u, l, n, r, o, i); return En(u, l + 4, s, a) || d ? lt(u, l + 6, c ? t.call(c, n, r, o, i, s, a) : t(n, r, o, i, s, a)) : ri(u, l + 6); }
function RD(e, t, n, r, o, i, s, a, c, l) { let u = ge() + e, d = g(), f = Ve(d, u, n, r, o, i); return ya(d, u + 4, s, a, c) || f ? lt(d, u + 7, l ? t.call(l, n, r, o, i, s, a, c) : t(n, r, o, i, s, a, c)) : ri(d, u + 7); }
function AD(e, t, n, r, o, i, s, a, c, l, u) { let d = ge() + e, f = g(), p = Ve(f, d, n, r, o, i); return Ve(f, d + 4, s, a, c, l) || p ? lt(f, d + 8, u ? t.call(u, n, r, o, i, s, a, c, l) : t(n, r, o, i, s, a, c, l)) : ri(f, d + 8); }
function OD(e, t, n, r) { return FD(g(), ge(), e, t, n, r); }
function ui(e, t) { let n = e[t]; return n === V ? void 0 : n; }
function xD(e, t, n, r, o, i) { let s = t + n; return Q(e, s, o) ? lt(e, s + 1, i ? r.call(i, o) : r(o)) : ui(e, s + 1); }
function kD(e, t, n, r, o, i, s) { let a = t + n; return En(e, a, o, i) ? lt(e, a + 2, s ? r.call(s, o, i) : r(o, i)) : ui(e, a + 2); }
function PD(e, t, n, r, o, i, s, a) { let c = t + n; return ya(e, c, o, i, s) ? lt(e, c + 3, a ? r.call(a, o, i, s) : r(o, i, s)) : ui(e, c + 3); }
function LD(e, t, n, r, o, i, s, a, c) { let l = t + n; return Ve(e, l, o, i, s, a) ? lt(e, l + 4, c ? r.call(c, o, i, s, a) : r(o, i, s, a)) : ui(e, l + 4); }
function FD(e, t, n, r, o, i) { let s = t + n, a = !1; for (let c = 0; c < o.length; c++)
    Q(e, s++, o[c]) && (a = !0); return a ? lt(e, s, r.apply(i, o)) : ui(e, s); }
function jD(e, t) { let n = R(), r, o = e + E; n.firstCreatePass ? (r = AA(t, n.pipeRegistry), n.data[o] = r, r.onDestroy && (n.destroyHooks ??= []).push(o, r.onDestroy)) : r = n.data[o]; let i = r.factory || (r.factory = Ot(r.type, !0)), s, a = ve(xr); try {
    let c = ds(!1), l = i();
    return ds(c), io(n, g(), o, l), l;
}
finally {
    ve(a);
} }
function AA(e, t) { if (t)
    for (let n = t.length - 1; n >= 0; n--) {
        let r = t[n];
        if (e === r.name)
            return r;
    } }
function VD(e, t, n) { let r = e + E, o = g(), i = Lt(o, r); return di(o, r) ? xD(o, ge(), t, i.transform, n, i) : i.transform(n); }
function HD(e, t, n, r) { let o = e + E, i = g(), s = Lt(i, o); return di(i, o) ? kD(i, ge(), t, s.transform, n, r, s) : s.transform(n, r); }
function BD(e, t, n, r, o) { let i = e + E, s = g(), a = Lt(s, i); return di(s, i) ? PD(s, ge(), t, a.transform, n, r, o, a) : a.transform(n, r, o); }
function UD(e, t, n, r, o, i) { let s = e + E, a = g(), c = Lt(a, s); return di(a, s) ? LD(a, ge(), t, c.transform, n, r, o, i, c) : c.transform(n, r, o, i); }
function $D(e, t, n) { let r = e + E, o = g(), i = Lt(o, r); return di(o, r) ? FD(o, ge(), t, i.transform, n, i) : i.transform.apply(i, n); }
function di(e, t) { return e[y].data[t].pure; }
function qD(e, t) { return la(e, t); }
function GD(e, t) { return () => { try {
    return lr.getComponentDependencies(e, t).dependencies;
}
catch (n) {
    throw console.error(`Computing dependencies in local compilation mode for the component "${e.name}" failed with the exception:`, n), n;
} }; }
function WD(e, t) { let n = $(e); n !== null && (n.debugInfo = t); }
function zD(e, t, n) { let r = `./@ng/component?c=${e}&t=${encodeURIComponent(t)}`; return new URL(r, n).href; }
function QD(e, t, n, r, o = null, i = null) { let s = $(e); t.apply(null, [e, n, ...r]); let { newDef: a, oldDef: c } = OA(s, $(e)); if (e[en] = a, c.tView) {
    let l = WM().values();
    for (let u of l)
        tt(u) && u[q] === null && ss(o, i, a, c, u);
} }
function OA(e, t) { let n = U({}, e); return { newDef: Object.assign(e, t, { directiveDefs: n.directiveDefs, pipeDefs: n.pipeDefs, setInput: n.setInput, type: n.type }), oldDef: n }; }
function ss(e, t, n, r, o) { let i = o[y]; if (i === r.tView) {
    kA(e, t, n, r, o);
    return;
} for (let s = E; s < i.bindingStartIndex; s++) {
    let a = o[s];
    if (Z(a)) {
        X(a[H]) && ss(e, t, n, r, a[H]);
        for (let c = W; c < a.length; c++)
            ss(e, t, n, r, a[c]);
    }
    else
        X(a) && ss(e, t, n, r, a);
} }
function xA(e, t) { e.componentReplaced?.(t.id); }
function kA(e, t, n, r, o) { let i = o[B], s = o[H], a = o[q], c = o[ie], l = o[K].get(z, null), u = () => { if (r.encapsulation === Et.ShadowDom) {
    let h = s.cloneNode(!1);
    s.replaceWith(h), s = h;
} let d = ty(n), f = ta(a, d, i, gd(n), s, c, null, null, null, null, null); PA(a, o, f, c.index), Xo(o[y], o); let p = o[qe].rendererFactory; xA(p, r), f[S] = p.createRenderer(s, n), oy(o[y], o), LA(c), aa(d, f, i), Ty(d, f, d.template, i); }; l === null ? dg(e, t, u) : l.run(() => dg(e, t, u)); }
function dg(e, t, n) {
    try {
        n();
    }
    catch (r) {
        let o = r;
        if (t !== null && o.message) {
            let i = o.message + (o.stack ? `
` + o.stack : "");
            e?.hot?.send?.("angular:invalidate", { id: t, message: i, error: !0 });
        }
        throw r;
    }
}
function PA(e, t, n, r) { for (let o = E; o < e[y].bindingStartIndex; o++) {
    let i = e[o];
    if ((X(i) || Z(i)) && i[ue] === t) {
        i[ue] = n;
        break;
    }
} e[kt] === t && (e[kt] = n), e[no] === t && (e[no] = n), n[ue] = t[ue], t[ue] = null, e[r] = n; }
function LA(e) { if (e.projection !== null) {
    for (let t of e.projection)
        Ls(t) && (t.projectionNext = null, t.flags &= -3);
    e.projection = null;
} }
var me = { \u0275\u0275attribute: df, \u0275\u0275defineComponent: kv, \u0275\u0275defineDirective: Lv, \u0275\u0275defineInjectable: F, \u0275\u0275defineInjector: Qr, \u0275\u0275defineNgModule: zd, \u0275\u0275definePipe: Fv, \u0275\u0275directiveInject: xr, \u0275\u0275getInheritedFactory: jg, \u0275\u0275inject: le, \u0275\u0275injectAttribute: Fs, \u0275\u0275invalidFactory: nv, \u0275\u0275invalidFactoryDep: Mi, \u0275\u0275templateRefExtractor: qD, \u0275\u0275resetView: qc, \u0275\u0275HostDirectivesFeature: Uv, \u0275\u0275NgOnChangesFeature: Tg, \u0275\u0275ProvidersFeature: ED, \u0275\u0275CopyDefinitionFeature: Bv, \u0275\u0275InheritDefinitionFeature: Qd, \u0275\u0275ExternalStylesFeature: ID, \u0275\u0275nextContext: DI, \u0275\u0275namespaceHTML: rl, \u0275\u0275namespaceMathML: nl, \u0275\u0275namespaceSVG: tl, \u0275\u0275enableBindings: Hc, \u0275\u0275disableBindings: Bc, \u0275\u0275elementStart: _a, \u0275\u0275elementEnd: Sa, \u0275\u0275element: pf, \u0275\u0275elementContainerStart: Aa, \u0275\u0275elementContainerEnd: ci, \u0275\u0275domElement: hf, \u0275\u0275domElementStart: ba, \u0275\u0275domElementEnd: Ra, \u0275\u0275domElementContainer: vf, \u0275\u0275domElementContainerStart: Oa, \u0275\u0275domElementContainerEnd: yf, \u0275\u0275domTemplate: Yd, \u0275\u0275domListener: Sf, \u0275\u0275elementContainer: mf, \u0275\u0275pureFunction0: CD, \u0275\u0275pureFunction1: MD, \u0275\u0275pureFunction2: wD, \u0275\u0275pureFunction3: ND, \u0275\u0275pureFunction4: _D, \u0275\u0275pureFunction5: SD, \u0275\u0275pureFunction6: bD, \u0275\u0275pureFunction7: RD, \u0275\u0275pureFunction8: AD, \u0275\u0275pureFunctionV: OD, \u0275\u0275getCurrentView: tI, \u0275\u0275restoreView: $c, \u0275\u0275listener: Nf, \u0275\u0275projection: CI, \u0275\u0275syntheticHostProperty: Df, \u0275\u0275syntheticHostListener: _f, \u0275\u0275pipeBind1: VD, \u0275\u0275pipeBind2: HD, \u0275\u0275pipeBind3: BD, \u0275\u0275pipeBind4: UD, \u0275\u0275pipeBindV: $D, \u0275\u0275projectionDef: TI, \u0275\u0275domProperty: If, \u0275\u0275property: ff, \u0275\u0275pipe: jD, \u0275\u0275queryRefresh: NI, \u0275\u0275queryAdvance: RI, \u0275\u0275viewQuery: wI, \u0275\u0275viewQuerySignal: bI, \u0275\u0275loadQuery: _I, \u0275\u0275contentQuery: MI, \u0275\u0275contentQuerySignal: SI, \u0275\u0275reference: AI, \u0275\u0275classMap: FI, \u0275\u0275styleMap: LI, \u0275\u0275styleProp: Rf, \u0275\u0275classProp: Af, \u0275\u0275advance: ny, \u0275\u0275template: Zd, \u0275\u0275conditional: QE, \u0275\u0275conditionalCreate: zE, \u0275\u0275conditionalBranchCreate: Na, \u0275\u0275defer: CE, \u0275\u0275deferWhen: ME, \u0275\u0275deferOnIdle: SE, \u0275\u0275deferOnImmediate: AE, \u0275\u0275deferOnTimer: kE, \u0275\u0275deferOnHover: FE, \u0275\u0275deferOnInteraction: HE, \u0275\u0275deferOnViewport: $E, \u0275\u0275deferPrefetchWhen: wE, \u0275\u0275deferPrefetchOnIdle: bE, \u0275\u0275deferPrefetchOnImmediate: OE, \u0275\u0275deferPrefetchOnTimer: PE, \u0275\u0275deferPrefetchOnHover: jE, \u0275\u0275deferPrefetchOnInteraction: BE, \u0275\u0275deferPrefetchOnViewport: qE, \u0275\u0275deferHydrateWhen: NE, \u0275\u0275deferHydrateNever: _E, \u0275\u0275deferHydrateOnIdle: RE, \u0275\u0275deferHydrateOnImmediate: xE, \u0275\u0275deferHydrateOnTimer: LE, \u0275\u0275deferHydrateOnHover: VE, \u0275\u0275deferHydrateOnInteraction: UE, \u0275\u0275deferHydrateOnViewport: GE, \u0275\u0275deferEnableTimerScheduling: uE, \u0275\u0275repeater: JE, \u0275\u0275repeaterCreate: KE, \u0275\u0275repeaterTrackByIndex: ZE, \u0275\u0275repeaterTrackByIdentity: YE, \u0275\u0275componentInstance: WE, \u0275\u0275text: GI, \u0275\u0275textInterpolate: Of, \u0275\u0275textInterpolate1: xa, \u0275\u0275textInterpolate2: xf, \u0275\u0275textInterpolate3: kf, \u0275\u0275textInterpolate4: Pf, \u0275\u0275textInterpolate5: Lf, \u0275\u0275textInterpolate6: Ff, \u0275\u0275textInterpolate7: jf, \u0275\u0275textInterpolate8: Vf, \u0275\u0275textInterpolateV: Hf, \u0275\u0275i18n: yI, \u0275\u0275i18nAttributes: vI, \u0275\u0275i18nExp: wf, \u0275\u0275i18nStart: Cf, \u0275\u0275i18nEnd: Mf, \u0275\u0275i18nApply: EI, \u0275\u0275i18nPostprocess: II, \u0275\u0275resolveWindow: zm, \u0275\u0275resolveDocument: Qm, \u0275\u0275resolveBody: ud, \u0275\u0275setComponentScope: DD, \u0275\u0275setNgModuleScope: TD, \u0275\u0275registerNgModuleType: qd, \u0275\u0275getComponentDepsFactory: GD, \u0275setClassDebugInfo: WD, \u0275\u0275declareLet: $f, \u0275\u0275storeLet: iD, \u0275\u0275readContextLet: sD, \u0275\u0275attachSourceLocations: aD, \u0275\u0275interpolate: cD, \u0275\u0275interpolate1: lD, \u0275\u0275interpolate2: uD, \u0275\u0275interpolate3: dD, \u0275\u0275interpolate4: fD, \u0275\u0275interpolate5: pD, \u0275\u0275interpolate6: hD, \u0275\u0275interpolate7: gD, \u0275\u0275interpolate8: mD, \u0275\u0275interpolateV: yD, \u0275\u0275sanitizeHtml: Vm, \u0275\u0275sanitizeStyle: Hm, \u0275\u0275sanitizeResourceUrl: ld, \u0275\u0275sanitizeScript: Bm, \u0275\u0275sanitizeUrl: cd, \u0275\u0275sanitizeUrlOrResourceUrl: qm, \u0275\u0275trustConstantHtml: Um, \u0275\u0275trustConstantResourceUrl: $m, \u0275\u0275validateIframeAttribute: Rv, forwardRef: Gr, resolveForwardRef: O, \u0275\u0275twoWayProperty: Bf, \u0275\u0275twoWayBindingSet: rD, \u0275\u0275twoWayListener: Uf, \u0275\u0275replaceMetadata: QD, \u0275\u0275getReplaceMetadataURL: zD }, er = null;
function ZD(e) { er !== null && (e.defaultEncapsulation !== er.defaultEncapsulation || e.preserveWhitespaces !== er.preserveWhitespaces) || (er = e); }
function FA() { return er; }
function jA() { er = null; }
var wo = [];
function VA(e, t) { wo.push({ moduleType: e, ngModule: t }); }
var Ol = !1;
function YD() { if (!Ol) {
    Ol = !0;
    try {
        for (let e = wo.length - 1; e >= 0; e--) {
            let { moduleType: t, ngModule: n } = wo[e];
            n.declarations && n.declarations.every(KD) && (wo.splice(e, 1), qA(t, n));
        }
    }
    finally {
        Ol = !1;
    }
} }
function KD(e) { return Array.isArray(e) ? e.every(KD) : !!O(e); }
function JD(e, t = {}) { XD(e, t), t.id !== void 0 && qd(e, t.id), VA(e, t); }
function XD(e, t, n = !1) { let r = Be(t.declarations || k), o = null; Object.defineProperty(e, Ti, { configurable: !0, get: () => (o === null && (o = te({ usage: 0, kind: "NgModule", type: e }).compileNgModule(me, `ng:///${e.name}/\u0275mod.js`, { type: e, bootstrap: Be(t.bootstrap || k).map(O), declarations: r.map(O), imports: Be(t.imports || k).map(O).map(fg), exports: Be(t.exports || k).map(O).map(fg), schemas: t.schemas ? Be(t.schemas) : null, id: t.id || null }), o.schemas || (o.schemas = [])), o) }); let i = null; Object.defineProperty(e, Je, { get: () => { if (i === null) {
        let a = te({ usage: 0, kind: "NgModule", type: e });
        i = a.compileFactory(me, `ng:///${e.name}/\u0275fac.js`, { name: e.name, type: e, deps: js(e), target: a.FactoryTarget.NgModule, typeArgumentCount: 0 });
    } return i; }, configurable: !1 }); let s = null; Object.defineProperty(e, Ur, { get: () => { if (s === null) {
        let a = { name: e.name, type: e, providers: t.providers || k, imports: [(t.imports || k).map(O), (t.exports || k).map(O)] };
        s = te({ usage: 0, kind: "NgModule", type: e }).compileInjector(me, `ng:///${e.name}/\u0275inj.js`, a);
    } return s; }, configurable: !1 }); }
function HA(e, t) { let n = `Unexpected "${Ee(e)}" found in the "declarations" array of the`, r = `"${Ee(e)}" is marked as standalone and can't be declared in any NgModule - did you intend to import it instead (by adding it to the "imports" array)?`; return `${n} ${t}, ${r}`; }
var BA = new WeakMap, UA = new WeakMap;
function $A() { BA = new WeakMap, UA = new WeakMap, wo.length = 0, sb.clear(); }
function qA(e, t) { let n = Be(t.declarations || k), r = Gf(e); n.forEach(o => { if (o = O(o), o.hasOwnProperty(en)) {
    let s = $(o);
    qf(s, r);
}
else
    !o.hasOwnProperty(Yr) && !o.hasOwnProperty(Kr) && (o.ngSelectorScope = e); }); }
function qf(e, t) { e.directiveDefs = () => Array.from(t.compilation.directives).map(n => n.hasOwnProperty(en) ? $(n) : be(n)).filter(n => !!n), e.pipeDefs = () => Array.from(t.compilation.pipes).map(n => Ue(n)), e.schemas = t.schemas, e.tView = null; }
function Gf(e) { if (pn(e)) {
    let t = lr.getNgModuleScope(e), n = _i(e);
    return U({ schemas: n.schemas || null }, t);
}
else if (to(e)) {
    if (($(e) || be(e)) !== null)
        return { schemas: null, compilation: { directives: new Set, pipes: new Set }, exported: { directives: new Set([e]), pipes: new Set } };
    if (Ue(e) !== null)
        return { schemas: null, compilation: { directives: new Set, pipes: new Set }, exported: { directives: new Set, pipes: new Set([e]) } };
} throw new Error(`${e.name} does not have a module def (\u0275mod property)`); }
function fg(e) { return kd(e) ? e.ngModule : e; }
var xl = 0;
function eT(e, t) {
    let n = null;
    ZS(e, t), nT(e, t), Object.defineProperty(e, en, { get: () => {
            if (n === null) {
                let r = te({ usage: 0, kind: "component", type: e });
                if (Nv(t)) {
                    let u = [`Component '${e.name}' is not resolved:`];
                    throw t.templateUrl && u.push(` - templateUrl: ${t.templateUrl}`), t.styleUrls && t.styleUrls.length && u.push(` - styleUrls: ${JSON.stringify(t.styleUrls)}`), t.styleUrl && u.push(` - styleUrl: ${t.styleUrl}`), u.push("Did you run and wait for 'resolveComponentResources()'?"), new Error(u.join(`
`));
                }
                let o = FA(), i = t.preserveWhitespaces;
                i === void 0 && (o !== null && o.preserveWhitespaces !== void 0 ? i = o.preserveWhitespaces : i = !1);
                let s = t.encapsulation;
                s === void 0 && (o !== null && o.defaultEncapsulation !== void 0 ? s = o.defaultEncapsulation : s = Et.Emulated);
                let a = t.templateUrl || `ng:///${e.name}/template.html`, c = rT(e, t), l = Ce(U({}, c), { typeSourceSpan: r.createParseSourceSpan("Component", e.name, a), template: t.template || "", preserveWhitespaces: i, styles: typeof t.styles == "string" ? [t.styles] : t.styles || k, animations: t.animations, declarations: [], changeDetection: t.changeDetection, encapsulation: s, interpolation: t.interpolation, viewProviders: t.viewProviders || null, hasDirectiveDependencies: !c.isStandalone || t.imports != null && t.imports.length > 0 });
                xl++;
                try {
                    if (l.usesInheritance && oT(e), n = r.compileComponent(me, a, l), l.isStandalone) {
                        let u = Be(t.imports || k), { directiveDefs: d, pipeDefs: f } = GA(e, u);
                        n.directiveDefs = d, n.pipeDefs = f, n.dependencies = () => u.map(O);
                    }
                }
                finally {
                    xl--;
                }
                if (xl === 0 && YD(), WA(e)) {
                    let u = Gf(e.ngSelectorScope);
                    qf(n, u);
                }
                if (t.schemas)
                    if (l.isStandalone)
                        n.schemas = t.schemas;
                    else
                        throw new Error(`The 'schemas' was specified for the ${Ee(e)} but is only valid on a component that is standalone.`);
                else
                    l.isStandalone && (n.schemas = []);
            }
            return n;
        }, set: r => { n = r; }, configurable: !1 });
}
function GA(e, t) { return { directiveDefs: () => vo(e) ? [...lr.getStandaloneComponentScope(e, t).compilation.directives].map(i => $(i) || be(i)).filter(i => i !== null) : [], pipeDefs: () => vo(e) ? [...lr.getStandaloneComponentScope(e, t).compilation.pipes].map(i => Ue(i)).filter(i => i !== null) : [] }; }
function WA(e) { return e.ngSelectorScope !== void 0; }
function Wf(e, t) { let n = null; nT(e, t || {}), Object.defineProperty(e, Yr, { get: () => { if (n === null) {
        let r = tT(e, t || {});
        n = te({ usage: 0, kind: "directive", type: e }).compileDirective(me, r.sourceMapUrl, r.metadata);
    } return n; }, configurable: !1 }); }
function tT(e, t) { let n = e && e.name, r = `ng:///${n}/\u0275dir.js`, o = te({ usage: 0, kind: "directive", type: e }), i = rT(e, t); return i.typeSourceSpan = o.createParseSourceSpan("Directive", n, r), i.usesInheritance && oT(e), { metadata: i, sourceMapUrl: r }; }
function nT(e, t) { let n = null; Object.defineProperty(e, Je, { get: () => { if (n === null) {
        let r = tT(e, t), o = te({ usage: 0, kind: "directive", type: e });
        n = o.compileFactory(me, `ng:///${e.name}/\u0275fac.js`, { name: r.metadata.name, type: r.metadata.type, typeArgumentCount: 0, deps: js(e), target: o.FactoryTarget.Directive });
    } return n; }, configurable: !1 }); }
function zA(e) { return Object.getPrototypeOf(e.prototype) === Object.prototype; }
function rT(e, t) { let n = Hu(), r = n.ownPropMetadata(e); return { name: e.name, type: e, selector: t.selector !== void 0 ? t.selector : null, host: t.host || ke, propMetadata: r, inputs: t.inputs || k, outputs: t.outputs || k, queries: pg(e, r, iT), lifecycle: { usesOnChanges: n.hasLifecycleHook(e, "ngOnChanges") }, typeSourceSpan: null, usesInheritance: !zA(e), exportAs: YA(t.exportAs), providers: t.providers || null, viewQueries: pg(e, r, sT), isStandalone: t.standalone === void 0 ? !0 : !!t.standalone, isSignal: !!t.signals, hostDirectives: t.hostDirectives?.map(o => typeof o == "function" ? { directive: o } : o) || null }; }
function oT(e) { let t = Object.prototype, n = Object.getPrototypeOf(e.prototype).constructor; for (; n && n !== t;)
    !be(n) && !$(n) && JA(n) && Wf(n, null), n = Object.getPrototypeOf(n); }
function QA(e) { return typeof e == "string" ? cT(e) : O(e); }
function ZA(e, t) { return { propertyName: e, predicate: QA(t.selector), descendants: t.descendants, first: t.first, read: t.read ? t.read : null, static: !!t.static, emitDistinctChangesOnly: !!t.emitDistinctChangesOnly, isSignal: !!t.isSignal }; }
function pg(e, t, n) { let r = []; for (let o in t)
    if (t.hasOwnProperty(o)) {
        let i = t[o];
        i.forEach(s => { if (n(s)) {
            if (!s.selector)
                throw new Error(`Can't construct a query for the property "${o}" of "${Ee(e)}" since the query selector wasn't defined.`);
            if (i.some(aT))
                throw new Error("Cannot combine @Input decorators with query decorators");
            r.push(ZA(o, s));
        } });
    } return r; }
function YA(e) { return e === void 0 ? null : cT(e); }
function iT(e) { let t = e.ngMetadataName; return t === "ContentChild" || t === "ContentChildren"; }
function sT(e) { let t = e.ngMetadataName; return t === "ViewChild" || t === "ViewChildren"; }
function aT(e) { return e.ngMetadataName === "Input"; }
function cT(e) { return e.split(",").map(t => t.trim()); }
var KA = ["ngOnChanges", "ngOnInit", "ngOnDestroy", "ngDoCheck", "ngAfterViewInit", "ngAfterViewChecked", "ngAfterContentInit", "ngAfterContentChecked"];
function JA(e) { let t = Hu(); if (KA.some(r => t.hasLifecycleHook(e, r)))
    return !0; let n = t.propMetadata(e); for (let r in n) {
    let o = n[r];
    for (let i = 0; i < o.length; i++) {
        let s = o[i], a = s.ngMetadataName;
        if (aT(s) || iT(s) || sT(s) || a === "Output" || a === "HostBinding" || a === "HostListener")
            return !0;
    }
} return !1; }
function lT(e, t) { let n = null, r = null; Object.defineProperty(e, Je, { get: () => { if (r === null) {
        let o = hg(e, t), i = te({ usage: 0, kind: "pipe", type: o.type });
        r = i.compileFactory(me, `ng:///${o.name}/\u0275fac.js`, { name: o.name, type: o.type, typeArgumentCount: 0, deps: js(e), target: i.FactoryTarget.Pipe });
    } return r; }, configurable: !1 }), Object.defineProperty(e, Kr, { get: () => { if (n === null) {
        let o = hg(e, t);
        n = te({ usage: 0, kind: "pipe", type: o.type }).compilePipe(me, `ng:///${o.name}/\u0275pipe.js`, o);
    } return n; }, configurable: !1 }); }
function hg(e, t) { return { type: e, name: e.name, pipeName: t.name, pure: t.pure !== void 0 ? t.pure : !0, isStandalone: t.standalone === void 0 ? !0 : !!t.standalone }; }
var uT = Uo("Directive", (e = {}) => e, void 0, void 0, (e, t) => Wf(e, t)), XA = Uo("Component", (e = {}) => U({ changeDetection: Vs.Default }, e), uT, void 0, (e, t) => eT(e, t)), eO = Uo("Pipe", e => U({ pure: !0 }, e), void 0, void 0, (e, t) => lT(e, t)), tO = Dt("Input", e => e ? typeof e == "string" ? { alias: e } : e : {}), nO = Dt("Output", e => ({ alias: e })), rO = Dt("HostBinding", e => ({ hostPropertyName: e })), oO = Dt("HostListener", (e, t) => ({ eventName: e, args: t })), iO = Uo("NgModule", e => e, void 0, void 0, (e, t) => JD(e, t)), xs = class {
    ngModuleFactory;
    componentFactories;
    constructor(t, n) { this.ngModuleFactory = t, this.componentFactories = n; }
}, sO = (() => { class e {
    compileModuleSync(n) { return new pr(n); }
    compileModuleAsync(n) { return Promise.resolve(this.compileModuleSync(n)); }
    compileModuleAndAllComponentsSync(n) { let r = this.compileModuleSync(n), o = nn(n), i = Jn(o.declarations).reduce((s, a) => { let c = $(a); return c && s.push(new qt(c)), s; }, []); return new xs(r, i); }
    compileModuleAndAllComponentsAsync(n) { return Promise.resolve(this.compileModuleAndAllComponentsSync(n)); }
    clearCache() { }
    clearCacheFor(n) { }
    getModuleId(n) { }
    static \u0275fac = function (r) { return new (r || e); };
    static \u0275prov = F({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), dT = new C(""), ku = class {
}, aO = (() => { class e {
    zone = D(z);
    changeDetectionScheduler = D(Me);
    applicationRef = D(Qe);
    applicationErrorHandler = D(st);
    _onMicrotaskEmptySubscription;
    initialize() { this._onMicrotaskEmptySubscription || (this._onMicrotaskEmptySubscription = this.zone.onMicrotaskEmpty.subscribe({ next: () => { this.changeDetectionScheduler.runningTick || this.zone.run(() => { try {
            this.applicationRef.dirtyFlags |= 1, this.applicationRef._tick();
        }
        catch (n) {
            this.applicationErrorHandler(n);
        } }); } })); }
    ngOnDestroy() { this._onMicrotaskEmptySubscription?.unsubscribe(); }
    static \u0275fac = function (r) { return new (r || e); };
    static \u0275prov = F({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), fT = new C("", { factory: () => !1 });
function ka({ ngZoneFactory: e, ignoreChangesOutsideZone: t, scheduleInRootZone: n }) { return e ??= () => new z(Ce(U({}, Pa()), { scheduleInRootZone: n })), [{ provide: z, useFactory: e }, { provide: Pe, multi: !0, useFactory: () => { let r = D(aO, { optional: !0 }); return () => r.initialize(); } }, { provide: Pe, multi: !0, useFactory: () => { let r = D(lO); return () => { r.initialize(); }; } }, t === !0 ? { provide: ll, useValue: !0 } : [], { provide: Ui, useValue: n ?? Yv }, { provide: st, useFactory: () => { let r = D(z), o = D(_e), i; return s => { r.runOutsideAngular(() => { o.destroyed && !i ? setTimeout(() => { throw s; }) : (i ??= o.get(Xe), i.handleError(s)); }); }; } }]; }
function cO(e) { let t = e?.ignoreChangesOutsideZone, n = e?.scheduleInRootZone, r = ka({ ngZoneFactory: () => { let o = Pa(e); return o.scheduleInRootZone = n, o.shouldCoalesceEventChangeDetection && fe("NgZone_CoalesceEvent"), new z(o); }, ignoreChangesOutsideZone: t, scheduleInRootZone: n }); return $e([{ provide: fT, useValue: !0 }, { provide: qn, useValue: !1 }, r]); }
function Pa(e) { return { enableLongStackTrace: !1, shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1, shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1 }; }
var lO = (() => { class e {
    subscription = new Fu;
    initialized = !1;
    zone = D(z);
    pendingTasks = D(ht);
    initialize() { if (this.initialized)
        return; this.initialized = !0; let n = null; !this.zone.isStable && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (n = this.pendingTasks.add()), this.zone.runOutsideAngular(() => { this.subscription.add(this.zone.onStable.subscribe(() => { z.assertNotInAngularZone(), queueMicrotask(() => { n !== null && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (this.pendingTasks.remove(n), n = null); }); })); }), this.subscription.add(this.zone.onUnstable.subscribe(() => { z.assertInAngularZone(), n ??= this.pendingTasks.add(); })); }
    ngOnDestroy() { this.subscription.unsubscribe(); }
    static \u0275fac = function (r) { return new (r || e); };
    static \u0275prov = F({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
var La = (() => { class e {
    applicationErrorHandler = D(st);
    appRef = D(Qe);
    taskService = D(ht);
    ngZone = D(z);
    zonelessEnabled = D(qn);
    tracing = D(kr, { optional: !0 });
    disableScheduling = D(ll, { optional: !0 }) ?? !1;
    zoneIsDefined = typeof Zone < "u" && !!Zone.root.run;
    schedulerTickApplyArgs = [{ data: { __scheduler_tick__: !0 } }];
    subscriptions = new Fu;
    angularZoneId = this.zoneIsDefined ? this.ngZone._inner?.get(Ss) : null;
    scheduleInRootZone = !this.zonelessEnabled && this.zoneIsDefined && (D(Ui, { optional: !0 }) ?? !1);
    cancelScheduledCallback = null;
    useMicrotaskScheduler = !1;
    runningTick = !1;
    pendingRenderTaskId = null;
    constructor() { this.subscriptions.add(this.appRef.afterTick.subscribe(() => { this.runningTick || this.cleanup(); })), this.subscriptions.add(this.ngZone.onUnstable.subscribe(() => { this.runningTick || this.cleanup(); })), this.disableScheduling ||= !this.zonelessEnabled && (this.ngZone instanceof hr || !this.zoneIsDefined); }
    notify(n) { if (!this.zonelessEnabled && n === 5)
        return; let r = !1; switch (n) {
        case 0: {
            this.appRef.dirtyFlags |= 2;
            break;
        }
        case 3:
        case 2:
        case 4:
        case 5:
        case 1: {
            this.appRef.dirtyFlags |= 4;
            break;
        }
        case 6: {
            this.appRef.dirtyFlags |= 2, r = !0;
            break;
        }
        case 12: {
            this.appRef.dirtyFlags |= 16, r = !0;
            break;
        }
        case 13: {
            this.appRef.dirtyFlags |= 2, r = !0;
            break;
        }
        case 11: {
            r = !0;
            break;
        }
        case 9:
        case 8:
        case 7:
        case 10:
        default: this.appRef.dirtyFlags |= 8;
    } if (this.appRef.tracingSnapshot = this.tracing?.snapshot(this.appRef.tracingSnapshot) ?? null, !this.shouldScheduleTick(r))
        return; let o = this.useMicrotaskScheduler ? Uh : Kv; this.pendingRenderTaskId = this.taskService.add(), this.scheduleInRootZone ? this.cancelScheduledCallback = Zone.root.run(() => o(() => this.tick())) : this.cancelScheduledCallback = this.ngZone.runOutsideAngular(() => o(() => this.tick())); }
    shouldScheduleTick(n) { return !(this.disableScheduling && !n || this.appRef.destroyed || this.pendingRenderTaskId !== null || this.runningTick || this.appRef._runningTick || !this.zonelessEnabled && this.zoneIsDefined && Zone.current.get(Ss + this.angularZoneId)); }
    tick() { if (this.runningTick || this.appRef.destroyed)
        return; if (this.appRef.dirtyFlags === 0) {
        this.cleanup();
        return;
    } !this.zonelessEnabled && this.appRef.dirtyFlags & 7 && (this.appRef.dirtyFlags |= 1); let n = this.taskService.add(); try {
        this.ngZone.run(() => { this.runningTick = !0, this.appRef._tick(); }, void 0, this.schedulerTickApplyArgs);
    }
    catch (r) {
        this.taskService.remove(n), this.applicationErrorHandler(r);
    }
    finally {
        this.cleanup();
    } this.useMicrotaskScheduler = !0, Uh(() => { this.useMicrotaskScheduler = !1, this.taskService.remove(n); }); }
    ngOnDestroy() { this.subscriptions.unsubscribe(), this.cleanup(); }
    cleanup() { if (this.runningTick = !1, this.cancelScheduledCallback?.(), this.cancelScheduledCallback = null, this.pendingRenderTaskId !== null) {
        let n = this.pendingRenderTaskId;
        this.pendingRenderTaskId = null, this.taskService.remove(n);
    } }
    static \u0275fac = function (r) { return new (r || e); };
    static \u0275prov = F({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
function uO() { return fe("NgZoneless"), $e([{ provide: Me, useExisting: La }, { provide: z, useClass: hr }, { provide: qn, useValue: !0 }, { provide: Ui, useValue: !1 }, []]); }
function dO() { return typeof $localize < "u" && $localize.locale || li; }
var zf = new C("", { providedIn: "root", factory: () => D(zf, { optional: !0, skipSelf: !0 }) || dO() }), fO = new C("", { providedIn: "root", factory: () => CR }), pO = new C(""), hO = new C(""), pT = (function (e) { return e[e.Error = 0] = "Error", e[e.Warning = 1] = "Warning", e[e.Ignore = 2] = "Ignore", e; })(pT || {}), Pu = class {
    name;
    callback;
    constructor(t, n) { this.name = t, this.callback = n; }
};
function gO(e) { return e.map(t => t.nativeElement); }
var Bo = class {
    nativeNode;
    constructor(t) { this.nativeNode = t; }
    get parent() { let t = this.nativeNode.parentNode; return t ? new Tn(t) : null; }
    get injector() { return tw(this.nativeNode); }
    get componentInstance() { let t = this.nativeNode; return t && (vh(t) || ew(t)); }
    get context() { return vh(this.nativeNode) || XM(this.nativeNode); }
    get listeners() { return sw(this.nativeNode).filter(t => t.type === "dom"); }
    get references() { return ow(this.nativeNode); }
    get providerTokens() { return nw(this.nativeNode); }
}, Tn = class extends Bo {
    constructor(t) { super(t); }
    get nativeElement() { return this.nativeNode.nodeType == Node.ELEMENT_NODE ? this.nativeNode : null; }
    get name() { let t = Ne(this.nativeNode), n = t ? t.lView : null; return n !== null ? n[y].data[t.nodeIndex].value : this.nativeNode.nodeName; }
    get properties() { let t = Ne(this.nativeNode), n = t ? t.lView : null; if (n === null)
        return {}; let r = n[y].data, o = r[t.nodeIndex], i = {}; return mO(this.nativeElement, i), vO(i, o, n, r), i; }
    get attributes() { let t = {}, n = this.nativeElement; if (!n)
        return t; let r = Ne(n), o = r ? r.lView : null; if (o === null)
        return {}; let i = o[y].data[r.nodeIndex].attrs, s = []; if (i) {
        let a = 0;
        for (; a < i.length;) {
            let c = i[a];
            if (typeof c != "string")
                break;
            let l = i[a + 1];
            t[c] = l, s.push(c.toLowerCase()), a += 2;
        }
    } for (let a of n.attributes)
        s.includes(a.name) || (t[a.name] = a.value); return t; }
    get styles() { return this.nativeElement?.style ?? {}; }
    get classes() { let t = {}, r = this.nativeElement.className; return (typeof r != "string" ? r.baseVal.split(" ") : r.split(" ")).forEach(i => t[i] = !0), t; }
    get childNodes() { let t = this.nativeNode.childNodes, n = []; for (let r = 0; r < t.length; r++) {
        let o = t[r];
        n.push(vr(o));
    } return n; }
    get children() { let t = this.nativeElement; if (!t)
        return []; let n = t.children, r = []; for (let o = 0; o < n.length; o++) {
        let i = n[o];
        r.push(vr(i));
    } return r; }
    query(t) { return this.queryAll(t)[0] || null; }
    queryAll(t) { let n = []; return gg(this, t, n, !0), n; }
    queryAllNodes(t) { let n = []; return gg(this, t, n, !1), n; }
    triggerEventHandler(t, n) { let r = this.nativeNode, o = []; this.listeners.forEach(i => { if (i.name === t) {
        let s = i.callback;
        s.call(r, n), o.push(s);
    } }), typeof r.eventListeners == "function" && r.eventListeners(t).forEach(i => { if (i.toString().indexOf("__ngUnwrap__") !== -1) {
        let s = i("__ngUnwrap__");
        return o.indexOf(s) === -1 && s.call(r, n);
    } }); }
};
function mO(e, t) { if (e) {
    let n = Object.getPrototypeOf(e), r = Node.prototype;
    for (; n !== null && n !== r;) {
        let o = Object.getOwnPropertyDescriptors(n);
        for (let i in o)
            if (!i.startsWith("__") && !i.startsWith("on")) {
                let s = e[i];
                yO(s) && (t[i] = s);
            }
        n = Object.getPrototypeOf(n);
    }
} }
function yO(e) { return typeof e == "string" || typeof e == "boolean" || typeof e == "number" || e === null; }
function gg(e, t, n, r) { let o = Ne(e.nativeNode), i = o ? o.lView : null; if (i !== null) {
    let s = i[y].data[o.nodeIndex];
    hn(s, i, t, n, r, e.nativeNode);
}
else
    Qf(e.nativeNode, t, n, r); }
function hn(e, t, n, r, o, i) { let s = qp(e, t); if (e.type & 11) {
    if (kl(s, n, r, o, i), Oe(e)) {
        let c = he(e.index, t);
        c && c[y].firstChild && hn(c[y].firstChild, c, n, r, o, i);
    }
    else
        e.child && hn(e.child, t, n, r, o, i), s && Qf(s, n, r, o);
    let a = t[e.index];
    Z(a) && mg(a, n, r, o, i);
}
else if (e.type & 4) {
    let a = t[e.index];
    kl(a[Ge], n, r, o, i), mg(a, n, r, o, i);
}
else if (e.type & 16) {
    let a = t[J], l = a[ie].projection[e.projection];
    if (Array.isArray(l))
        for (let u of l)
            kl(u, n, r, o, i);
    else if (l) {
        let u = a[q], d = u[y].data[l.index];
        hn(d, u, n, r, o, i);
    }
}
else
    e.child && hn(e.child, t, n, r, o, i); if (i !== s) {
    let a = e.flags & 2 ? e.projectionNext : e.next;
    a && hn(a, t, n, r, o, i);
} }
function mg(e, t, n, r, o) { for (let i = W; i < e.length; i++) {
    let s = e[i], a = s[y].firstChild;
    a && hn(a, s, t, n, r, o);
} }
function kl(e, t, n, r, o) { if (o !== e) {
    let i = vr(e);
    if (!i)
        return;
    (r && i instanceof Tn && t(i) && n.indexOf(i) === -1 || !r && t(i) && n.indexOf(i) === -1) && n.push(i);
} }
function Qf(e, t, n, r) { let o = e.childNodes, i = o.length; for (let s = 0; s < i; s++) {
    let a = o[s], c = vr(a);
    c && ((r && c instanceof Tn && t(c) && n.indexOf(c) === -1 || !r && t(c) && n.indexOf(c) === -1) && n.push(c), Qf(a, t, n, r));
} }
function vO(e, t, n, r) { let o = t.propertyBindings; if (o !== null)
    for (let i = 0; i < o.length; i++) {
        let s = o[i], c = r[s].split(hN), l = c[0];
        if (c.length > 1) {
            let u = c[1];
            for (let d = 1; d < c.length - 1; d++)
                u += _(n[s + d - 1]) + c[d + 1];
            e[l] = u;
        }
        else
            e[l] = n[s];
    } }
var Pl = "__ng_debug__";
function vr(e) { return e instanceof Node ? (e.hasOwnProperty(Pl) || (e[Pl] = e.nodeType == Node.ELEMENT_NODE ? new Tn(e) : new Bo(e)), e[Pl]) : null; }
var fi = class {
    destroyed = !1;
    listeners = null;
    errorHandler = D(Xe, { optional: !0 });
    destroyRef = D(Fe);
    constructor() { this.destroyRef.onDestroy(() => { this.destroyed = !0, this.listeners = null; }); }
    subscribe(t) { if (this.destroyed)
        throw new T(953, !1); return (this.listeners ??= []).push(t), { unsubscribe: () => { let n = this.listeners?.indexOf(t); n !== void 0 && n !== -1 && this.listeners?.splice(n, 1); } }; }
    emit(t) { if (this.destroyed) {
        console.warn(xn(953, !1));
        return;
    } if (this.listeners === null)
        return; let n = A(null); try {
        for (let r of this.listeners)
            try {
                r(t);
            }
            catch (o) {
                this.errorHandler?.handleError(o);
            }
    }
    finally {
        A(n);
    } }
};
function EO(e) { return e.destroyRef; }
function Ze(e) { return _p(e); }
function _n(e, t) { return yi(e, t?.equal); }
var Zf = class {
    [re];
    constructor(t) { this[re] = t; }
    destroy() { this[re].destroy(); }
};
function mT(e, t) { let n = t?.injector ?? D(oe), r = t?.manualCleanup !== !0 ? n.get(Fe) : null, o, i = n.get(ln, null, { optional: !0 }), s = n.get(Me); return i !== null ? (o = TO(i.view, s, e), r instanceof qr && r._lView === i.view && (r = null)) : o = CO(e, n.get(po), s), o.injector = n, r !== null && (o.onDestroyFn = r.onDestroy(() => o.destroy())), new Zf(o); }
var yT = Ce(U({}, Vr), { consumerIsAlwaysLive: !0, consumerAllowSignalWrites: !0, dirty: !0, hasRun: !1, cleanupFns: void 0, zone: null, kind: "effect", onDestroyFn: un, run() { if (this.dirty = !1, this.hasRun && !Rn(this))
        return; this.hasRun = !0; let e = r => (this.cleanupFns ??= []).push(r), t = Zt(this), n = Un(!1); try {
        this.maybeCleanup(), this.fn(e);
    }
    finally {
        Un(n), bn(this, t);
    } }, maybeCleanup() { if (!this.cleanupFns?.length)
        return; let e = A(null); try {
        for (; this.cleanupFns.length;)
            this.cleanupFns.pop()();
    }
    finally {
        this.cleanupFns = [], A(e);
    } } }), IO = Ce(U({}, yT), { consumerMarkedDirty() { this.scheduler.schedule(this), this.notifier.notify(12); }, destroy() { At(this), this.onDestroyFn(), this.maybeCleanup(), this.scheduler.remove(this); } }), DO = Ce(U({}, yT), { consumerMarkedDirty() { this.view[M] |= 8192, Ft(this.view), this.notifier.notify(13); }, destroy() { At(this), this.onDestroyFn(), this.maybeCleanup(), this.view[ft]?.delete(this); } });
function TO(e, t, n) { let r = Object.create(DO); return r.view = e, r.zone = typeof Zone < "u" ? Zone.current : null, r.notifier = t, r.fn = n, e[ft] ??= new Set, e[ft].add(r), r.consumerMarkedDirty(r), r; }
function CO(e, t, n) { let r = Object.create(IO); return r.fn = e, r.scheduler = t, r.notifier = n, r.zone = typeof Zone < "u" ? Zone.current : null, r.scheduler.add(r), r.notifier.notify(12), r; }
var MO = e => e;
function Yf(e, t) { if (typeof e == "function") {
    let n = oc(e, MO, t?.equal);
    return hT(n);
}
else {
    let n = oc(e.source, e.computation, e.equal);
    return hT(n);
} }
function hT(e) { let t = e[re], n = e; return n.set = r => wp(t, r), n.update = r => Np(t, r), n.asReadonly = $n.bind(e), n; }
var vT = !0;
function wO(e) { let t = e.request, n = e.params ?? t ?? (() => null); return new Fa(n, _O(e), e.defaultValue, e.equal ? NO(e.equal) : void 0, e.injector ?? D(oe), vT); }
var Kf = class {
    value;
    constructor(t) { this.value = t, this.value.set = this.set.bind(this), this.value.update = this.update.bind(this), this.value.asReadonly = $n; }
    isError = _n(() => this.status() === "error");
    update(t) { this.set(t(Ze(this.value))); }
    isLoading = _n(() => this.status() === "loading" || this.status() === "reloading");
    isValueDefined = _n(() => this.isError() ? !1 : this.value() !== void 0);
    hasValue() { return this.isValueDefined(); }
    asReadonly() { return this; }
}, Fa = class extends Kf {
    loaderFn;
    equal;
    pendingTasks;
    state;
    extRequest;
    effectRef;
    pendingController;
    resolvePendingTask = void 0;
    destroyed = !1;
    unregisterOnDestroy;
    constructor(t, n, r, o, i, s = vT) { super(_n(() => { let a = this.state().stream?.(); if (!a || this.state().status === "loading" && this.error())
        return r; if (!Jf(a)) {
        if (s)
            throw new Xf(this.error());
        return r;
    } return a.value; }, { equal: o })), this.loaderFn = n, this.equal = o, this.extRequest = Yf({ source: t, computation: a => ({ request: a, reload: 0 }) }), this.state = Yf({ source: this.extRequest, computation: (a, c) => { let l = a.request === void 0 ? "idle" : "loading"; return c ? { extRequest: a, status: l, previousStatus: gT(c.value), stream: c.value.extRequest.request === a.request ? c.value.stream : void 0 } : { extRequest: a, status: l, previousStatus: "idle", stream: void 0 }; } }), this.effectRef = mT(this.loadEffect.bind(this), { injector: i, manualCleanup: !0 }), this.pendingTasks = i.get(fo), this.unregisterOnDestroy = i.get(Fe).onDestroy(() => this.destroy()); }
    status = _n(() => gT(this.state()));
    error = _n(() => { let t = this.state().stream?.(); return t && !Jf(t) ? t.error : void 0; });
    set(t) { if (this.destroyed)
        return; let n = Ze(this.error), r = Ze(this.state); if (!n) {
        let o = Ze(this.value);
        if (r.status === "local" && (this.equal ? this.equal(o, t) : o === t))
            return;
    } this.state.set({ extRequest: r.extRequest, status: "local", previousStatus: "local", stream: Vt({ value: t }) }), this.abortInProgressLoad(); }
    reload() { let { status: t } = Ze(this.state); return t === "idle" || t === "loading" ? !1 : (this.extRequest.update(({ request: n, reload: r }) => ({ request: n, reload: r + 1 })), !0); }
    destroy() { this.destroyed = !0, this.unregisterOnDestroy(), this.effectRef.destroy(), this.abortInProgressLoad(), this.state.set({ extRequest: { request: void 0, reload: 0 }, status: "idle", previousStatus: "idle", stream: void 0 }); }
    loadEffect() { return Rt(this, null, function* () { let t = this.extRequest(), { status: n, previousStatus: r } = Ze(this.state); if (t.request === void 0)
        return; if (n !== "loading")
        return; this.abortInProgressLoad(); let o = this.resolvePendingTask = this.pendingTasks.add(), { signal: i } = this.pendingController = new AbortController; try {
        let s = yield Ze(() => this.loaderFn({ params: t.request, request: t.request, abortSignal: i, previous: { status: r } }));
        if (i.aborted || Ze(this.extRequest) !== t)
            return;
        this.state.set({ extRequest: t, status: "resolved", previousStatus: "resolved", stream: s });
    }
    catch (s) {
        if (i.aborted || Ze(this.extRequest) !== t)
            return;
        this.state.set({ extRequest: t, status: "resolved", previousStatus: "error", stream: Vt({ error: tp(s) }) });
    }
    finally {
        o?.(), o = void 0;
    } }); }
    abortInProgressLoad() { Ze(() => this.pendingController?.abort()), this.pendingController = void 0, this.resolvePendingTask?.(), this.resolvePendingTask = void 0; }
};
function NO(e) { return (t, n) => t === void 0 || n === void 0 ? t === n : e(t, n); }
function _O(e) { return SO(e) ? e.stream : t => Rt(null, null, function* () { try {
    return Vt({ value: yield e.loader(t) });
}
catch (n) {
    return Vt({ error: tp(n) });
} }); }
function SO(e) { return !!e.stream; }
function gT(e) { switch (e.status) {
    case "loading": return e.extRequest.reload === 0 ? "loading" : "reloading";
    case "resolved": return Jf(e.stream()) ? "resolved" : "error";
    default: return e.status;
} }
function Jf(e) { return e.error === void 0; }
function tp(e) { return e instanceof Error ? e : new ep(e); }
var Xf = class extends Error {
    constructor(t) { super(t.message, { cause: t }); }
}, ep = class extends Error {
    constructor(t) { super(String(t), { cause: t }); }
};
var sp = { JSACTION: "__jsaction", OWNER: "__owner" }, TT = {};
function bO(e) { return e[sp.JSACTION]; }
function ET(e, t) { e[sp.JSACTION] = t; }
function RO(e) { return TT[e]; }
function AO(e, t) { TT[e] = t; }
var w = { AUXCLICK: "auxclick", CHANGE: "change", CLICK: "click", CLICKMOD: "clickmod", CLICKONLY: "clickonly", DBLCLICK: "dblclick", FOCUS: "focus", FOCUSIN: "focusin", BLUR: "blur", FOCUSOUT: "focusout", SUBMIT: "submit", KEYDOWN: "keydown", KEYPRESS: "keypress", KEYUP: "keyup", MOUSEUP: "mouseup", MOUSEDOWN: "mousedown", MOUSEOVER: "mouseover", MOUSEOUT: "mouseout", MOUSEENTER: "mouseenter", MOUSELEAVE: "mouseleave", MOUSEMOVE: "mousemove", POINTERUP: "pointerup", POINTERDOWN: "pointerdown", POINTEROVER: "pointerover", POINTEROUT: "pointerout", POINTERENTER: "pointerenter", POINTERLEAVE: "pointerleave", POINTERMOVE: "pointermove", POINTERCANCEL: "pointercancel", GOTPOINTERCAPTURE: "gotpointercapture", LOSTPOINTERCAPTURE: "lostpointercapture", ERROR: "error", LOAD: "load", UNLOAD: "unload", TOUCHSTART: "touchstart", TOUCHEND: "touchend", TOUCHMOVE: "touchmove", INPUT: "input", SCROLL: "scroll", TOGGLE: "toggle", CUSTOM: "_custom" }, OO = [w.MOUSEENTER, w.MOUSELEAVE, "pointerenter", "pointerleave"], xO = [w.CLICK, w.DBLCLICK, w.FOCUSIN, w.FOCUSOUT, w.KEYDOWN, w.KEYUP, w.KEYPRESS, w.MOUSEOVER, w.MOUSEOUT, w.SUBMIT, w.TOUCHSTART, w.TOUCHEND, w.TOUCHMOVE, "touchcancel", "auxclick", "change", "compositionstart", "compositionupdate", "compositionend", "beforeinput", "input", "select", "copy", "cut", "paste", "mousedown", "mouseup", "wheel", "contextmenu", "dragover", "dragenter", "dragleave", "drop", "dragstart", "dragend", "pointerdown", "pointermove", "pointerup", "pointercancel", "pointerover", "pointerout", "gotpointercapture", "lostpointercapture", "ended", "loadedmetadata", "pagehide", "pageshow", "visibilitychange", "beforematch"], CT = [w.FOCUS, w.BLUR, w.ERROR, w.LOAD, w.TOGGLE], $a = e => CT.indexOf(e) >= 0, kO = xO.concat(CT), MT = e => kO.indexOf(e) >= 0;
function PO(e) { return e === w.MOUSEENTER ? w.MOUSEOVER : e === w.MOUSELEAVE ? w.MOUSEOUT : e === w.POINTERENTER ? w.POINTEROVER : e === w.POINTERLEAVE ? w.POINTEROUT : e; }
function LO(e, t, n, r) { let o = !1; $a(t) && (o = !0); let i = typeof r == "boolean" ? { capture: o, passive: r } : o; return e.addEventListener(t, n, i), { eventType: t, handler: n, capture: o, passive: r }; }
function FO(e, t) { if (e.removeEventListener) {
    let n = typeof t.passive == "boolean" ? { capture: t.capture } : t.capture;
    e.removeEventListener(t.eventType, t.handler, n);
}
else
    e.detachEvent && e.detachEvent(`on${t.eventType}`, t.handler); }
function jO(e) { e.preventDefault ? e.preventDefault() : e.returnValue = !1; }
var IT = typeof navigator < "u" && /Macintosh/.test(navigator.userAgent);
function VO(e) { return e.which === 2 || e.which == null && e.button === 4; }
function HO(e) { return IT && e.metaKey || !IT && e.ctrlKey || VO(e) || e.shiftKey; }
function BO(e, t, n) { let r = e.relatedTarget; return (e.type === w.MOUSEOVER && t === w.MOUSEENTER || e.type === w.MOUSEOUT && t === w.MOUSELEAVE || e.type === w.POINTEROVER && t === w.POINTERENTER || e.type === w.POINTEROUT && t === w.POINTERLEAVE) && (!r || r !== n && !n.contains(r)); }
function UO(e, t) { let n = {}; for (let r in e) {
    if (r === "srcElement" || r === "target")
        continue;
    let o = r, i = e[o];
    typeof i != "function" && (n[o] = i);
} return e.type === w.MOUSEOVER ? n.type = w.MOUSEENTER : e.type === w.MOUSEOUT ? n.type = w.MOUSELEAVE : e.type === w.POINTEROVER ? n.type = w.POINTERENTER : n.type = w.POINTERLEAVE, n.target = n.srcElement = t, n.bubbles = !1, n._originalEvent = e, n; }
var $O = typeof navigator < "u" && /iPhone|iPad|iPod/.test(navigator.userAgent), Ba = class {
    element;
    handlerInfos = [];
    constructor(t) { this.element = t; }
    addEventListener(t, n, r) { $O && (this.element.style.cursor = "pointer"), this.handlerInfos.push(LO(this.element, t, n(this.element), r)); }
    cleanUp() { for (let t = 0; t < this.handlerInfos.length; t++)
        FO(this.element, this.handlerInfos[t]); this.handlerInfos = []; }
}, qO = { NAMESPACE_ACTION_SEPARATOR: ".", EVENT_ACTION_SEPARATOR: ":" };
function Wt(e) { return e.eventType; }
function ap(e, t) { e.eventType = t; }
function Va(e) { return e.event; }
function wT(e, t) { e.event = t; }
function NT(e) { return e.targetElement; }
function _T(e, t) { e.targetElement = t; }
function ST(e) { return e.eic; }
function GO(e, t) { e.eic = t; }
function WO(e) { return e.timeStamp; }
function zO(e, t) { e.timeStamp = t; }
function Ha(e) { return e.eia; }
function bT(e, t, n) { e.eia = [t, n]; }
function np(e) { e.eia = void 0; }
function ja(e) { return e[1]; }
function QO(e) { return e.eirp; }
function RT(e, t) { e.eirp = t; }
function AT(e) { return e.eir; }
function OT(e, t) { e.eir = t; }
function xT(e) { return { eventType: e.eventType, event: e.event, targetElement: e.targetElement, eic: e.eic, eia: e.eia, timeStamp: e.timeStamp, eirp: e.eirp, eiack: e.eiack, eir: e.eir }; }
function ZO(e, t, n, r, o, i, s, a) { return { eventType: e, event: t, targetElement: n, eic: r, timeStamp: o, eia: i, eirp: s, eiack: a }; }
var rp = class e {
    eventInfo;
    constructor(t) { this.eventInfo = t; }
    getEventType() { return Wt(this.eventInfo); }
    setEventType(t) { ap(this.eventInfo, t); }
    getEvent() { return Va(this.eventInfo); }
    setEvent(t) { wT(this.eventInfo, t); }
    getTargetElement() { return NT(this.eventInfo); }
    setTargetElement(t) { _T(this.eventInfo, t); }
    getContainer() { return ST(this.eventInfo); }
    setContainer(t) { GO(this.eventInfo, t); }
    getTimestamp() { return WO(this.eventInfo); }
    setTimestamp(t) { zO(this.eventInfo, t); }
    getAction() { let t = Ha(this.eventInfo); if (t)
        return { name: t[0], element: t[1] }; }
    setAction(t) { if (!t) {
        np(this.eventInfo);
        return;
    } bT(this.eventInfo, t.name, t.element); }
    getIsReplay() { return QO(this.eventInfo); }
    setIsReplay(t) { RT(this.eventInfo, t); }
    getResolved() { return AT(this.eventInfo); }
    setResolved(t) { OT(this.eventInfo, t); }
    clone() { return new e(xT(this.eventInfo)); }
}, YO = {}, KO = /\s*;\s*/, JO = w.CLICK, op = class {
    a11yClickSupport = !1;
    clickModSupport = !0;
    syntheticMouseEventSupport;
    updateEventInfoForA11yClick = void 0;
    preventDefaultForA11yClick = void 0;
    populateClickOnlyAction = void 0;
    constructor({ syntheticMouseEventSupport: t = !1, clickModSupport: n = !0 } = {}) { this.syntheticMouseEventSupport = t, this.clickModSupport = n; }
    resolveEventType(t) { this.clickModSupport && Wt(t) === w.CLICK && HO(Va(t)) ? ap(t, w.CLICKMOD) : this.a11yClickSupport && this.updateEventInfoForA11yClick(t); }
    resolveAction(t) { AT(t) || (this.populateAction(t, NT(t)), OT(t, !0)); }
    resolveParentAction(t) { let n = Ha(t), r = n && ja(n); np(t); let o = r && this.getParentNode(r); o && this.populateAction(t, o); }
    populateAction(t, n) { let r = n; for (; r && r !== ST(t) && (r.nodeType === Node.ELEMENT_NODE && this.populateActionOnElement(r, t), !Ha(t));)
        r = this.getParentNode(r); let o = Ha(t); if (o && (this.a11yClickSupport && this.preventDefaultForA11yClick(t), this.syntheticMouseEventSupport && (Wt(t) === w.MOUSEENTER || Wt(t) === w.MOUSELEAVE || Wt(t) === w.POINTERENTER || Wt(t) === w.POINTERLEAVE)))
        if (BO(Va(t), Wt(t), ja(o))) {
            let i = UO(Va(t), ja(o));
            wT(t, i), _T(t, ja(o));
        }
        else
            np(t); }
    getParentNode(t) { let n = t[sp.OWNER]; if (n)
        return n; let r = t.parentNode; return r?.nodeName === "#document-fragment" ? r?.host ?? null : r; }
    populateActionOnElement(t, n) { let r = this.parseActions(t), o = r[Wt(n)]; o !== void 0 && bT(n, o, t), this.a11yClickSupport && this.populateClickOnlyAction(t, n, r); }
    parseActions(t) { let n = bO(t); if (!n) {
        let r = t.getAttribute(Gn.JSACTION);
        if (!r)
            n = YO, ET(t, n);
        else {
            if (n = RO(r), !n) {
                n = {};
                let o = r.split(KO);
                for (let i = 0; i < o.length; i++) {
                    let s = o[i];
                    if (!s)
                        continue;
                    let a = s.indexOf(qO.EVENT_ACTION_SEPARATOR), c = a !== -1, l = c ? s.substr(0, a).trim() : JO, u = c ? s.substr(a + 1).trim() : s;
                    n[l] = u;
                }
                AO(r, n);
            }
            ET(t, n);
        }
    } return n; }
    addA11yClickSupport(t, n, r) { this.a11yClickSupport = !0, this.updateEventInfoForA11yClick = t, this.preventDefaultForA11yClick = n, this.populateClickOnlyAction = r; }
}, kT = (function (e) { return e[e.I_AM_THE_JSACTION_FRAMEWORK = 0] = "I_AM_THE_JSACTION_FRAMEWORK", e; })(kT || {}), ip = class {
    dispatchDelegate;
    actionResolver;
    eventReplayer;
    eventReplayScheduled = !1;
    replayEventInfoWrappers = [];
    constructor(t, { actionResolver: n, eventReplayer: r } = {}) { this.dispatchDelegate = t, this.actionResolver = n, this.eventReplayer = r; }
    dispatch(t) { let n = new rp(t); this.actionResolver?.resolveEventType(t), this.actionResolver?.resolveAction(t); let r = n.getAction(); if (r && XO(r.element, n) && jO(n.getEvent()), this.eventReplayer && n.getIsReplay()) {
        this.scheduleEventInfoWrapperReplay(n);
        return;
    } this.dispatchDelegate(n); }
    scheduleEventInfoWrapperReplay(t) { this.replayEventInfoWrappers.push(t), !this.eventReplayScheduled && (this.eventReplayScheduled = !0, Promise.resolve().then(() => { this.eventReplayScheduled = !1, this.eventReplayer(this.replayEventInfoWrappers); })); }
};
function XO(e, t) { return e.tagName === "A" && (t.getEventType() === w.CLICK || t.getEventType() === w.CLICKMOD); }
var PT = Symbol.for("propagationStopped"), cp = { REPLAY: 101 };
var ex = "`preventDefault` called during event replay.";
var tx = "`composedPath` called during event replay.", Ua = class {
    dispatchDelegate;
    clickModSupport;
    actionResolver;
    dispatcher;
    constructor(t, n = !0) { this.dispatchDelegate = t, this.clickModSupport = n, this.actionResolver = new op({ clickModSupport: n }), this.dispatcher = new ip(r => { this.dispatchToDelegate(r); }, { actionResolver: this.actionResolver }); }
    dispatch(t) { this.dispatcher.dispatch(t); }
    dispatchToDelegate(t) { for (t.getIsReplay() && ox(t), nx(t); t.getAction();) {
        if (ix(t), $a(t.getEventType()) && t.getAction().element !== t.getTargetElement() || (this.dispatchDelegate(t.getEvent(), t.getAction().name), rx(t)))
            return;
        this.actionResolver.resolveParentAction(t.eventInfo);
    } }
};
function nx(e) { let t = e.getEvent(), n = e.getEvent().stopPropagation.bind(t), r = () => { t[PT] = !0, n(); }; Sn(t, "stopPropagation", r), Sn(t, "stopImmediatePropagation", r); }
function rx(e) { return !!e.getEvent()[PT]; }
function ox(e) { let t = e.getEvent(), n = e.getTargetElement(), r = t.preventDefault.bind(t); Sn(t, "target", n), Sn(t, "eventPhase", cp.REPLAY), Sn(t, "preventDefault", () => { throw r(), new Error(ex + ""); }), Sn(t, "composedPath", () => { throw new Error(tx + ""); }); }
function ix(e) { let t = e.getEvent(), n = e.getAction()?.element; n && Sn(t, "currentTarget", n, { configurable: !0 }); }
function Sn(e, t, n, { configurable: r = !1 } = {}) { Object.defineProperty(e, t, { value: n, configurable: r }); }
function LT(e, t) { e.ecrd(n => { t.dispatch(n); }, kT.I_AM_THE_JSACTION_FRAMEWORK); }
function sx(e) { return e?.q ?? []; }
function ax(e) { e && (DT(e.c, e.et, e.h), DT(e.c, e.etc, e.h, !0)); }
function DT(e, t, n, r) { for (let o = 0; o < t.length; o++)
    e.removeEventListener(t[o], n, r); }
var cx = !1, FT = (() => { class e {
    static MOUSE_SPECIAL_SUPPORT = cx;
    containerManager;
    eventHandlers = {};
    browserEventTypeToExtraEventTypes = {};
    dispatcher = null;
    queuedEventInfos = [];
    constructor(n) { this.containerManager = n; }
    handleEvent(n, r, o) { let i = ZO(n, r, r.target, o, Date.now()); this.handleEventInfo(i); }
    handleEventInfo(n) { if (!this.dispatcher) {
        RT(n, !0), this.queuedEventInfos?.push(n);
        return;
    } this.dispatcher(n); }
    addEvent(n, r, o) { if (n in this.eventHandlers || !this.containerManager || !e.MOUSE_SPECIAL_SUPPORT && OO.indexOf(n) >= 0)
        return; let i = (a, c, l) => { this.handleEvent(a, c, l); }; this.eventHandlers[n] = i; let s = PO(r || n); if (s !== n) {
        let a = this.browserEventTypeToExtraEventTypes[s] || [];
        a.push(n), this.browserEventTypeToExtraEventTypes[s] = a;
    } this.containerManager.addEventListener(s, a => c => { i(n, c, a); }, o); }
    replayEarlyEvents(n = window._ejsa) { n && (this.replayEarlyEventInfos(n.q), ax(n), delete window._ejsa); }
    replayEarlyEventInfos(n) { for (let r = 0; r < n.length; r++) {
        let o = n[r], i = this.getEventTypesForBrowserEventType(o.eventType);
        for (let s = 0; s < i.length; s++) {
            let a = xT(o);
            ap(a, i[s]), this.handleEventInfo(a);
        }
    } }
    getEventTypesForBrowserEventType(n) { let r = []; return this.eventHandlers[n] && r.push(n), this.browserEventTypeToExtraEventTypes[n] && r.push(...this.browserEventTypeToExtraEventTypes[n]), r; }
    handler(n) { return this.eventHandlers[n]; }
    cleanUp() { this.containerManager?.cleanUp(), this.containerManager = null, this.eventHandlers = {}, this.browserEventTypeToExtraEventTypes = {}, this.dispatcher = null, this.queuedEventInfos = []; }
    registerDispatcher(n, r) { this.ecrd(n, r); }
    ecrd(n, r) { if (this.dispatcher = n, this.queuedEventInfos?.length) {
        for (let o = 0; o < this.queuedEventInfos.length; o++)
            this.handleEventInfo(this.queuedEventInfos[o]);
        this.queuedEventInfos = null;
    } }
} return e; })();
function jT(e, t = window) { return sx(t._ejsas?.[e]); }
function lp(e, t = window) { t._ejsas && (t._ejsas[e] = void 0); }
import "rxjs";
import "@angular/core/primitives/signals";
import "@angular/core/primitives/di";
import "rxjs/operators";
typeof globalThis.ngServerMode > "u" && (globalThis.ngServerMode = typeof window > "u");
var Ka = Symbol("InputSignalNode#UNSET"), oC = Ce(U({}, rc), { transformFn: void 0, applyValueToInputSignal(e, t) { nc(e, t); } }), GP = Symbol();
function iC(e, t) { let n = Object.create(oC); n.value = e, n.transformFn = t?.transform; function r() { if (mi(n), n.value === Ka) {
    let o = null;
    throw new T(-950, o);
} return n.value; } return r[re] = n, r; }
var Fr = (function (e) { return e[e.Directive = 0] = "Directive", e[e.Component = 1] = "Component", e[e.Injectable = 2] = "Injectable", e[e.Pipe = 3] = "Pipe", e[e.NgModule = 4] = "NgModule", e; })(Fr || {});
var VT = class {
    attributeName;
    constructor(t) { this.attributeName = t; }
    __NG_ELEMENT_ID__ = () => Fs(this.attributeName);
    toString() { return `HostAttributeToken ${this.attributeName}`; }
}, lx = new C("");
lx.__NG_ELEMENT_ID__ = e => { let t = b(); if (t === null)
    throw new T(204, !1); if (t.type & 2)
    return t.value; if (e & 8)
    return null; throw new T(204, !1); };
function WP(e) { return new fi; }
function HT(e, t) { return iC(e, t); }
function ux(e) { return iC(Ka, e); }
var zP = (HT.required = ux, HT);
function BT(e, t) { return Bd(t); }
function dx(e, t) { return Ud(t); }
var QP = (BT.required = dx, BT);
function ZP(e, t) { return $d(t); }
function UT(e, t) { return Bd(t); }
function fx(e, t) { return Ud(t); }
var YP = (UT.required = fx, UT);
function KP(e, t) { return $d(t); }
function sC(e, t) { let n = Object.create(oC), r = new fi; n.value = e; function o() { return mi(n), $T(n.value), n.value; } return o[re] = n, o.asReadonly = $n.bind(o), o.set = i => { n.equal(n.value, i) || (nc(n, i), r.emit(i)); }, o.update = i => { $T(n.value), o.set(i(n.value)); }, o.subscribe = r.subscribe.bind(r), o.destroyRef = r.destroyRef, o; }
function $T(e) { if (e === Ka)
    throw new T(952, !1); }
function qT(e, t) { return sC(e, t); }
function px(e) { return sC(Ka, e); }
var JP = (qT.required = px, qT), aC = !0, jr = class {
}, XP = Dt("ContentChildren", (e, t = {}) => U({ selector: e, first: !1, isViewQuery: !1, descendants: !1, emitDistinctChangesOnly: aC }, t), jr), eL = Dt("ContentChild", (e, t = {}) => U({ selector: e, first: !0, isViewQuery: !1, descendants: !0 }, t), jr), tL = Dt("ViewChildren", (e, t = {}) => U({ selector: e, first: !1, isViewQuery: !0, descendants: !0, emitDistinctChangesOnly: aC }, t), jr), nL = Dt("ViewChild", (e, t) => U({ selector: e, first: !0, isViewQuery: !0, descendants: !0 }, t), jr), fp = class {
    full;
    major;
    minor;
    patch;
    constructor(t) { this.full = t; let n = t.split("."); this.major = n[0], this.minor = n[1], this.patch = n.slice(2).join("."); }
}, rL = new fp("20.1.7");
function hx(e, t, n) { let r = new pr(n); return Promise.resolve(r); }
function GT(e) { for (let t = e.length - 1; t >= 0; t--)
    if (e[t] !== void 0)
        return e[t]; }
var Wa = new C(""), gx = new C("");
function pi(e) { return !e.moduleRef; }
function cC(e) { let t = pi(e) ? e.r3Injector : e.moduleRef.injector, n = t.get(z); return n.run(() => { pi(e) ? e.r3Injector.resolveInjectorInitializers() : e.moduleRef.resolveInjectorInitializers(); let r = t.get(st), o; if (n.runOutsideAngular(() => { o = n.onError.subscribe({ next: r }); }), pi(e)) {
    let i = () => t.destroy(), s = e.platformInjector.get(Wa);
    s.add(i), t.onDestroy(() => { o.unsubscribe(), s.delete(i); });
}
else {
    let i = () => e.moduleRef.destroy(), s = e.platformInjector.get(Wa);
    s.add(i), e.moduleRef.onDestroy(() => { Io(e.allPlatformModules, e.moduleRef), o.unsubscribe(), s.delete(i); });
} return yx(r, n, () => { let i = t.get(ht), s = i.add(), a = t.get(cf); return a.runInitializers(), a.donePromise.then(() => { let c = t.get(zf, li); if (sI(c || li), !t.get(gx, !0))
    return pi(e) ? t.get(Qe) : (e.allPlatformModules.push(e.moduleRef), e.moduleRef); if (pi(e)) {
    let u = t.get(Qe);
    return e.rootComponent !== void 0 && u.bootstrap(e.rootComponent), u;
}
else
    return lC?.(e.moduleRef, e.allPlatformModules), e.moduleRef; }).finally(() => void i.remove(s)); }); }); }
var lC;
function WT() { lC = mx; }
function mx(e, t) { let n = e.injector.get(Qe); if (e._bootstrapComponents.length > 0)
    e._bootstrapComponents.forEach(r => n.bootstrap(r));
else if (e.instance.ngDoBootstrap)
    e.instance.ngDoBootstrap(n);
else
    throw new T(-403, !1); t.push(e); }
function yx(e, t, n) { try {
    let r = n();
    return sf(r) ? r.catch(o => { throw t.runOutsideAngular(() => e(o)), o; }) : r;
}
catch (r) {
    throw t.runOutsideAngular(() => e(r)), r;
} }
var uC = (() => { class e {
    _injector;
    _modules = [];
    _destroyListeners = [];
    _destroyed = !1;
    constructor(n) { this._injector = n; }
    bootstrapModuleFactory(n, r) { let o = r?.scheduleInRootZone, i = () => Xv(r?.ngZone, Ce(U({}, Pa({ eventCoalescing: r?.ngZoneEventCoalescing, runCoalescing: r?.ngZoneRunCoalescing })), { scheduleInRootZone: o })), s = r?.ignoreChangesOutsideZone, a = [ka({ ngZoneFactory: i, ignoreChangesOutsideZone: s }), { provide: Me, useExisting: La }, sl], c = xv(n.moduleType, this.injector, a); return WT(), cC({ moduleRef: c, allPlatformModules: this._modules, platformInjector: this.injector }); }
    bootstrapModule(n, r = []) { let o = uf({}, r); return WT(), hx(this.injector, o, n).then(i => this.bootstrapModuleFactory(i, o)); }
    onDestroy(n) { this._destroyListeners.push(n); }
    get injector() { return this._injector; }
    destroy() { if (this._destroyed)
        throw new T(404, !1); this._modules.slice().forEach(r => r.destroy()), this._destroyListeners.forEach(r => r()); let n = this._injector.get(Wa, null); n && (n.forEach(r => r()), n.clear()), this._destroyed = !0; }
    get destroyed() { return this._destroyed; }
    static \u0275fac = function (r) { return new (r || e)(le(oe)); };
    static \u0275prov = F({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })(), zt = null, dC = new C("");
function vx(e) { if (zt && !zt.get(dC, !1))
    throw new T(400, !1); lf(), zt = e; let t = e.get(uC); return pC(e), t; }
function Ex(e, t, n = []) { let r = `Platform: ${t}`, o = new C(r); return (i = []) => { let s = Dp(); if (!s || s.injector.get(dC, !1)) {
    let a = [...n, ...i, { provide: o, useValue: !0 }];
    e ? e(a) : vx(fC(a, r));
} return Ix(o); }; }
function fC(e = [], t) { return oe.create({ name: t, providers: [{ provide: Nc, useValue: "platform" }, { provide: Wa, useValue: new Set([() => zt = null]) }, ...e] }); }
function Ix(e) { let t = Dp(); if (!t)
    throw new T(401, !1); return t; }
function Dp() { return zt?.get(uC) ?? null; }
function oL() { Dp()?.destroy(); }
function Dx(e = []) { if (zt)
    return zt; let t = fC(e); return zt = t, lf(), pC(t), t; }
function iL(e) { return $e([{ provide: Uu, useValue: e, multi: !0 }]); }
function pC(e) { let t = e.get(Uu, null); bi(e, () => { t?.forEach(n => n()); }); }
function sL(e) { return $e([]); }
function aL() { return !1; }
function cL() { }
function lL(e) { let t = Gd(e); if (!t)
    throw hC(e); return new pr(t); }
function uL(e) { let t = Gd(e); if (!t)
    throw hC(e); return t; }
function hC(e) { return new Error(`No module with ID ${e} loaded`); }
var Tx = (() => { class e {
    static __NG_ELEMENT_ID__ = Cx;
} return e; })();
function Cx(e) { return Mx(b(), g(), (e & 16) === 16); }
function Mx(e, t, n) { if (Oe(e) && !n) {
    let r = he(e.index, t);
    return new $t(r, r);
}
else if (e.type & 175) {
    let r = t[J];
    return new $t(r, t);
} return null; }
var pp = class extends Tx {
}, zT = class extends pp {
}, za = class {
    constructor() { }
    supports(t) { return ko(t); }
    create(t) { return new hp(t); }
}, wx = (e, t) => t, hp = class {
    length = 0;
    collection;
    _linkedRecords = null;
    _unlinkedRecords = null;
    _previousItHead = null;
    _itHead = null;
    _itTail = null;
    _additionsHead = null;
    _additionsTail = null;
    _movesHead = null;
    _movesTail = null;
    _removalsHead = null;
    _removalsTail = null;
    _identityChangesHead = null;
    _identityChangesTail = null;
    _trackByFn;
    constructor(t) { this._trackByFn = t || wx; }
    forEachItem(t) { let n; for (n = this._itHead; n !== null; n = n._next)
        t(n); }
    forEachOperation(t) { let n = this._itHead, r = this._removalsHead, o = 0, i = null; for (; n || r;) {
        let s = !r || n && n.currentIndex < QT(r, o, i) ? n : r, a = QT(s, o, i), c = s.currentIndex;
        if (s === r)
            o--, r = r._nextRemoved;
        else if (n = n._next, s.previousIndex == null)
            o++;
        else {
            i || (i = []);
            let l = a - o, u = c - o;
            if (l != u) {
                for (let f = 0; f < l; f++) {
                    let p = f < i.length ? i[f] : i[f] = 0, h = p + f;
                    u <= h && h < l && (i[f] = p + 1);
                }
                let d = s.previousIndex;
                i[d] = u - l;
            }
        }
        a !== c && t(s, a, c);
    } }
    forEachPreviousItem(t) { let n; for (n = this._previousItHead; n !== null; n = n._nextPrevious)
        t(n); }
    forEachAddedItem(t) { let n; for (n = this._additionsHead; n !== null; n = n._nextAdded)
        t(n); }
    forEachMovedItem(t) { let n; for (n = this._movesHead; n !== null; n = n._nextMoved)
        t(n); }
    forEachRemovedItem(t) { let n; for (n = this._removalsHead; n !== null; n = n._nextRemoved)
        t(n); }
    forEachIdentityChange(t) { let n; for (n = this._identityChangesHead; n !== null; n = n._nextIdentityChange)
        t(n); }
    diff(t) { if (t == null && (t = []), !ko(t))
        throw new T(900, !1); return this.check(t) ? this : null; }
    onDestroy() { }
    check(t) { this._reset(); let n = this._itHead, r = !1, o, i, s; if (Array.isArray(t)) {
        this.length = t.length;
        for (let a = 0; a < this.length; a++)
            i = t[a], s = this._trackByFn(a, i), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, i, s, a), r = !0) : (r && (n = this._verifyReinsertion(n, i, s, a)), Object.is(n.item, i) || this._addIdentityChange(n, i)), n = n._next;
    }
    else
        o = 0, sv(t, a => { s = this._trackByFn(o, a), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, a, s, o), r = !0) : (r && (n = this._verifyReinsertion(n, a, s, o)), Object.is(n.item, a) || this._addIdentityChange(n, a)), n = n._next, o++; }), this.length = o; return this._truncate(n), this.collection = t, this.isDirty; }
    get isDirty() { return this._additionsHead !== null || this._movesHead !== null || this._removalsHead !== null || this._identityChangesHead !== null; }
    _reset() { if (this.isDirty) {
        let t;
        for (t = this._previousItHead = this._itHead; t !== null; t = t._next)
            t._nextPrevious = t._next;
        for (t = this._additionsHead; t !== null; t = t._nextAdded)
            t.previousIndex = t.currentIndex;
        for (this._additionsHead = this._additionsTail = null, t = this._movesHead; t !== null; t = t._nextMoved)
            t.previousIndex = t.currentIndex;
        this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null;
    } }
    _mismatch(t, n, r, o) { let i; return t === null ? i = this._itTail : (i = t._prev, this._remove(t)), t = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(r, null), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._reinsertAfter(t, i, o)) : (t = this._linkedRecords === null ? null : this._linkedRecords.get(r, o), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._moveAfter(t, i, o)) : t = this._addAfter(new gp(n, r), i, o)), t; }
    _verifyReinsertion(t, n, r, o) { let i = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(r, null); return i !== null ? t = this._reinsertAfter(i, t._prev, o) : t.currentIndex != o && (t.currentIndex = o, this._addToMoves(t, o)), t; }
    _truncate(t) { for (; t !== null;) {
        let n = t._next;
        this._addToRemovals(this._unlink(t)), t = n;
    } this._unlinkedRecords !== null && this._unlinkedRecords.clear(), this._additionsTail !== null && (this._additionsTail._nextAdded = null), this._movesTail !== null && (this._movesTail._nextMoved = null), this._itTail !== null && (this._itTail._next = null), this._removalsTail !== null && (this._removalsTail._nextRemoved = null), this._identityChangesTail !== null && (this._identityChangesTail._nextIdentityChange = null); }
    _reinsertAfter(t, n, r) { this._unlinkedRecords !== null && this._unlinkedRecords.remove(t); let o = t._prevRemoved, i = t._nextRemoved; return o === null ? this._removalsHead = i : o._nextRemoved = i, i === null ? this._removalsTail = o : i._prevRemoved = o, this._insertAfter(t, n, r), this._addToMoves(t, r), t; }
    _moveAfter(t, n, r) { return this._unlink(t), this._insertAfter(t, n, r), this._addToMoves(t, r), t; }
    _addAfter(t, n, r) { return this._insertAfter(t, n, r), this._additionsTail === null ? this._additionsTail = this._additionsHead = t : this._additionsTail = this._additionsTail._nextAdded = t, t; }
    _insertAfter(t, n, r) { let o = n === null ? this._itHead : n._next; return t._next = o, t._prev = n, o === null ? this._itTail = t : o._prev = t, n === null ? this._itHead = t : n._next = t, this._linkedRecords === null && (this._linkedRecords = new Qa), this._linkedRecords.put(t), t.currentIndex = r, t; }
    _remove(t) { return this._addToRemovals(this._unlink(t)); }
    _unlink(t) { this._linkedRecords !== null && this._linkedRecords.remove(t); let n = t._prev, r = t._next; return n === null ? this._itHead = r : n._next = r, r === null ? this._itTail = n : r._prev = n, t; }
    _addToMoves(t, n) { return t.previousIndex === n || (this._movesTail === null ? this._movesTail = this._movesHead = t : this._movesTail = this._movesTail._nextMoved = t), t; }
    _addToRemovals(t) { return this._unlinkedRecords === null && (this._unlinkedRecords = new Qa), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, this._removalsTail === null ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t; }
    _addIdentityChange(t, n) { return t.item = n, this._identityChangesTail === null ? this._identityChangesTail = this._identityChangesHead = t : this._identityChangesTail = this._identityChangesTail._nextIdentityChange = t, t; }
}, gp = class {
    item;
    trackById;
    currentIndex = null;
    previousIndex = null;
    _nextPrevious = null;
    _prev = null;
    _next = null;
    _prevDup = null;
    _nextDup = null;
    _prevRemoved = null;
    _nextRemoved = null;
    _nextAdded = null;
    _nextMoved = null;
    _nextIdentityChange = null;
    constructor(t, n) { this.item = t, this.trackById = n; }
}, mp = class {
    _head = null;
    _tail = null;
    add(t) { this._head === null ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t); }
    get(t, n) { let r; for (r = this._head; r !== null; r = r._nextDup)
        if ((n === null || n <= r.currentIndex) && Object.is(r.trackById, t))
            return r; return null; }
    remove(t) { let n = t._prevDup, r = t._nextDup; return n === null ? this._head = r : n._nextDup = r, r === null ? this._tail = n : r._prevDup = n, this._head === null; }
}, Qa = class {
    map = new Map;
    put(t) { let n = t.trackById, r = this.map.get(n); r || (r = new mp, this.map.set(n, r)), r.add(t); }
    get(t, n) { let r = t, o = this.map.get(r); return o ? o.get(t, n) : null; }
    remove(t) { let n = t.trackById; return this.map.get(n).remove(t) && this.map.delete(n), t; }
    get isEmpty() { return this.map.size === 0; }
    clear() { this.map.clear(); }
};
function QT(e, t, n) { let r = e.previousIndex; if (r === null)
    return r; let o = 0; return n && r < n.length && (o = n[r]), r + t + o; }
var Za = class {
    constructor() { }
    supports(t) { return t instanceof Map || ma(t); }
    create() { return new yp; }
}, yp = class {
    _records = new Map;
    _mapHead = null;
    _appendAfter = null;
    _previousMapHead = null;
    _changesHead = null;
    _changesTail = null;
    _additionsHead = null;
    _additionsTail = null;
    _removalsHead = null;
    _removalsTail = null;
    get isDirty() { return this._additionsHead !== null || this._changesHead !== null || this._removalsHead !== null; }
    forEachItem(t) { let n; for (n = this._mapHead; n !== null; n = n._next)
        t(n); }
    forEachPreviousItem(t) { let n; for (n = this._previousMapHead; n !== null; n = n._nextPrevious)
        t(n); }
    forEachChangedItem(t) { let n; for (n = this._changesHead; n !== null; n = n._nextChanged)
        t(n); }
    forEachAddedItem(t) { let n; for (n = this._additionsHead; n !== null; n = n._nextAdded)
        t(n); }
    forEachRemovedItem(t) { let n; for (n = this._removalsHead; n !== null; n = n._nextRemoved)
        t(n); }
    diff(t) { if (!t)
        t = new Map;
    else if (!(t instanceof Map || ma(t)))
        throw new T(900, !1); return this.check(t) ? this : null; }
    onDestroy() { }
    check(t) { this._reset(); let n = this._mapHead; if (this._appendAfter = null, this._forEach(t, (r, o) => { if (n && n.key === o)
        this._maybeAddToChanges(n, r), this._appendAfter = n, n = n._next;
    else {
        let i = this._getOrCreateRecordForKey(o, r);
        n = this._insertBeforeOrAppend(n, i);
    } }), n) {
        n._prev && (n._prev._next = null), this._removalsHead = n;
        for (let r = n; r !== null; r = r._nextRemoved)
            r === this._mapHead && (this._mapHead = null), this._records.delete(r.key), r._nextRemoved = r._next, r.previousValue = r.currentValue, r.currentValue = null, r._prev = null, r._next = null;
    } return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty; }
    _insertBeforeOrAppend(t, n) { if (t) {
        let r = t._prev;
        return n._next = t, n._prev = r, t._prev = n, r && (r._next = n), t === this._mapHead && (this._mapHead = n), this._appendAfter = t, t;
    } return this._appendAfter ? (this._appendAfter._next = n, n._prev = this._appendAfter) : this._mapHead = n, this._appendAfter = n, null; }
    _getOrCreateRecordForKey(t, n) { if (this._records.has(t)) {
        let o = this._records.get(t);
        this._maybeAddToChanges(o, n);
        let i = o._prev, s = o._next;
        return i && (i._next = s), s && (s._prev = i), o._next = null, o._prev = null, o;
    } let r = new vp(t); return this._records.set(t, r), r.currentValue = n, this._addToAdditions(r), r; }
    _reset() { if (this.isDirty) {
        let t;
        for (this._previousMapHead = this._mapHead, t = this._previousMapHead; t !== null; t = t._next)
            t._nextPrevious = t._next;
        for (t = this._changesHead; t !== null; t = t._nextChanged)
            t.previousValue = t.currentValue;
        for (t = this._additionsHead; t != null; t = t._nextAdded)
            t.previousValue = t.currentValue;
        this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null;
    } }
    _maybeAddToChanges(t, n) { Object.is(n, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = n, this._addToChanges(t)); }
    _addToAdditions(t) { this._additionsHead === null ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t, this._additionsTail = t); }
    _addToChanges(t) { this._changesHead === null ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t, this._changesTail = t); }
    _forEach(t, n) { t instanceof Map ? t.forEach(n) : Object.keys(t).forEach(r => n(t[r], r)); }
}, vp = class {
    key;
    previousValue = null;
    currentValue = null;
    _nextPrevious = null;
    _next = null;
    _prev = null;
    _nextAdded = null;
    _nextRemoved = null;
    _nextChanged = null;
    constructor(t) { this.key = t; }
};
function ZT() { return new gC([new za]); }
var gC = (() => { class e {
    factories;
    static \u0275prov = F({ token: e, providedIn: "root", factory: ZT });
    constructor(n) { this.factories = n; }
    static create(n, r) { if (r != null) {
        let o = r.factories.slice();
        n = n.concat(o);
    } return new e(n); }
    static extend(n) { return { provide: e, useFactory: r => e.create(n, r || ZT()), deps: [[e, new Ps, new ks]] }; }
    find(n) { let r = this.factories.find(o => o.supports(n)); if (r != null)
        return r; throw new T(901, !1); }
} return e; })();
function YT() { return new mC([new Za]); }
var mC = (() => { class e {
    static \u0275prov = F({ token: e, providedIn: "root", factory: YT });
    factories;
    constructor(n) { this.factories = n; }
    static create(n, r) { if (r) {
        let o = r.factories.slice();
        n = n.concat(o);
    } return new e(n); }
    static extend(n) { return { provide: e, useFactory: r => e.create(n, r || YT()), deps: [[e, new Ps, new ks]] }; }
    find(n) { let r = this.factories.find(o => o.supports(n)); if (r)
        return r; throw new T(901, !1); }
} return e; })(), Nx = [new Za], _x = [new za], dL = new gC(_x), fL = new mC(Nx), pL = Ex(null, "core", []), hL = (() => { class e {
    constructor(n) { }
    static \u0275fac = function (r) { return new (r || e)(le(Qe)); };
    static \u0275mod = zd({ type: e });
    static \u0275inj = Qr({});
} return e; })();
function gL(e) { j(8); try {
    let { rootComponent: t, appProviders: n, platformProviders: r } = e, o = Dx(r), i = [ka({}), { provide: Me, useExisting: La }, sl, ...n || []], s = new Lo({ providers: i, parent: o, debugName: "", runEnvironmentInitializers: !1 });
    return cC({ r3Injector: s.injector, platformInjector: o, rootComponent: t });
}
catch (t) {
    return Promise.reject(t);
}
finally {
    j(9);
} }
var qa = new WeakSet, KT = "", Ga = [];
function JT(e) { return e.get(Ws, Zu); }
function Sx() { let e = [{ provide: Ws, useFactory: () => { let t = !0; if (typeof ngServerMode > "u" || !ngServerMode) {
            let n = D(Ct);
            t = !!window._ejsas?.[n];
        } return t && fe("NgEventReplay"), t; } }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: Pe, useValue: () => { let t = D(Qe), { injector: n } = t; if (!qa.has(t)) {
        let r = D(Qo);
        if (JT(n)) {
            um();
            let o = n.get(Ct), i = cm(o, (s, a, c) => { s.nodeType === Node.ELEMENT_NODE && (am(s, a, c), Ju(s, r)); });
            t.onDestroy(i);
        }
    } }, multi: !0 }, { provide: si, useFactory: () => { let t = D(Qe), { injector: n } = t; return () => { if (!JT(n) || qa.has(t))
        return; qa.add(t); let r = n.get(Ct); t.onDestroy(() => { qa.delete(t), typeof ngServerMode < "u" && !ngServerMode && lp(r); }), t.whenStable().then(() => { if (t.destroyed)
        return; let o = n.get(ed); bx(o, n); let i = n.get(Qo); i.get(KT)?.forEach(Xu), i.delete(KT); let s = o.instance; Ys(n) ? t.onDestroy(() => s.cleanUp()) : s.cleanUp(); }); }; }, multi: !0 }), e; }
var bx = (e, t) => { let n = t.get(Ct), r = window._ejsas[n], o = e.instance = new FT(new Ba(r.c)); for (let a of r.et)
    o.addEvent(a); for (let a of r.etc)
    o.addEvent(a); let i = jT(n); o.replayEarlyEventInfos(i), lp(n); let s = new Ua(a => { Ax(t, a, a.currentTarget); }); LT(o, s); };
function Rx(e, t, n) { let r = new Map, o = t[xt], i = e.cleanup; if (!i || !o)
    return r; for (let s = 0; s < i.length;) {
    let a = i[s++], c = i[s++];
    if (typeof a != "string")
        continue;
    let l = a;
    if (!MT(l))
        continue;
    $a(l) ? n.capture.add(l) : n.regular.add(l);
    let u = x(t[c]);
    s++;
    let d = i[s++];
    (typeof d == "boolean" || d >= 0) && (r.has(u) ? r.get(u).push(l) : r.set(u, [l]));
} return r; }
function Ax(e, t, n) { let r = (n && n.getAttribute(wr)) ?? ""; /d\d+/.test(r) ? Ox(r, e, t, n) : t.eventPhase === cp.REPLAY && td(t, n); }
function Ox(e, t, n, r) { Ga.push({ event: n, currentTarget: r }), St(t, e, xx); }
function xx(e) { let t = [...Ga], n = new Set(e); Ga = []; for (let { event: r, currentTarget: o } of t) {
    let i = o.getAttribute(wr);
    n.has(i) ? td(r, o) : Ga.push({ event: r, currentTarget: o });
} }
var Ep = class {
    views = [];
    indexByContent = new Map;
    add(t) { let n = JSON.stringify(t); if (!this.indexByContent.has(n)) {
        let r = this.views.length;
        return this.views.push(t), this.indexByContent.set(n, r), r;
    } return this.indexByContent.get(n); }
    getAll() { return this.views; }
}, kx = 0;
function yC(e) { return e.ssrId || (e.ssrId = `t${kx++}`), e.ssrId; }
function vC(e, t, n) { let r = []; return cr(e, t, n, r), r.length; }
function Px(e) { let t = []; return ca(e, t), t.length; }
function EC(e, t, n) { let r = e[H]; return r && !r.hasAttribute(Dr) ? Ya(r, e, null, t) : null; }
function IC(e, t, n) { let r = oo(e[H]), o = EC(r, t); if (o === null)
    return; let i = x(r[H]), s = e[q], a = Ya(i, s, null, t), c = r[S], l = `${o}|${a}`; c.setAttribute(i, nr, l); }
function mL(e, t) { let n = e.injector, r = $y(n), o = Ys(n), i = new Ep, s = new Map, a = e._views, c = n.get(Ws, Zu), l = { regular: new Set, capture: new Set }, u = new Map, d = e.injector.get(Ct); for (let h of a) {
    let m = nd(h);
    if (m !== null) {
        let v = { serializedViewCollection: i, corruptedTextNodes: s, isI18nHydrationEnabled: r, isIncrementalHydrationEnabled: o, i18nChildren: new Map, eventTypesToReplay: l, shouldReplayEvents: c, appId: d, deferBlocks: u };
        Z(m) ? IC(m, v) : EC(m, v), Hx(s, t);
    }
} let f = i.getAll(), p = n.get(Cn); if (p.set(zs, f), u.size > 0) {
    let h = {};
    for (let [m, v] of u.entries())
        h[m] = v;
    p.set(Qs, h);
} return l; }
function Lx(e, t, n, r, o) { let i = [], s = ""; for (let a = W; a < e.length; a++) {
    let c = e[a], l, u, d;
    if (tt(c) && (c = c[E], Z(c))) {
        u = Px(c) + 1, IC(c, o);
        let p = oo(c[H]);
        d = { [Us]: p[y].ssrId, [vt]: u };
    }
    if (!d) {
        let p = c[y];
        p.type === 1 ? (l = p.ssrId, u = 1) : (l = yC(p), u = vC(p, c, p.firstChild)), d = { [Us]: l, [vt]: u };
        let h = !1;
        if (iE(n[y], t)) {
            let m = De(n, t), v = ce(n[y], t);
            if (o.isIncrementalHydrationEnabled && v.hydrateTriggers !== null) {
                let I = `d${o.deferBlocks.size}`;
                v.hydrateTriggers.has(7) && (h = !0);
                let L = [];
                ca(e, L);
                let pe = { [vt]: L.length, [zo]: m[_t] }, Ye = Fx(v.hydrateTriggers);
                Ye.length > 0 && (pe[Gs] = Ye), r !== null && (pe[Wu] = r), o.deferBlocks.set(I, pe);
                let ye = x(e);
                ye !== void 0 ? ye.nodeType === Node.COMMENT_NODE && XT(ye, I) : XT(ye, I), h || Ux(v, L, I, o), r = I, d[qs] = I;
            }
            d[zo] = m[_t];
        }
        h || Object.assign(d, DC(e[a], r, o));
    }
    let f = JSON.stringify(d);
    if (i.length > 0 && f === s) {
        let p = i[i.length - 1];
        p[Go] ??= 1, p[Go]++;
    }
    else
        s = f, i.push(d);
} return i; }
function Fx(e) { let t = new Set([0, 1, 2, 5]), n = []; for (let [r, o] of e)
    t.has(r) && (o === null ? n.push(r) : n.push({ trigger: r, delay: o.delay })); return n; }
function hi(e, t, n, r) { let o = t.index - E; e[Wo] ??= {}, e[Wo][o] ??= jy(t, n, r); }
function up(e, t) { let n = typeof t == "number" ? t : t.index - E; e[Mr] ??= [], e[Mr].includes(n) || e[Mr].push(n); }
function DC(e, t = null, n) { let r = {}, o = e[y], i = qy(o, n), s = n.shouldReplayEvents ? Rx(o, e, n.eventTypesToReplay) : null; for (let a = E; a < o.bindingStartIndex; a++) {
    let c = o.data[a], l = a - E, u = Gy(e, a, n);
    if (u) {
        r[$s] ??= {}, r[$s][l] = u.caseQueue;
        for (let d of u.disconnectedNodes)
            up(r, d);
        for (let d of u.disjointNodes) {
            let f = o.data[d + E];
            hi(r, f, e, i);
        }
        continue;
    }
    if (Ls(c) && !Nr(c)) {
        if (Z(e[a]) && c.tView && (r[Bs] ??= {}, r[Bs][l] = yC(c.tView)), Or(c, e) && Bx(c)) {
            up(r, c);
            continue;
        }
        if (Array.isArray(c.projection)) {
            for (let d of c.projection)
                if (d)
                    if (!Array.isArray(d))
                        !Ac(d) && !Tr(d) && (Or(d, e) ? up(r, d) : hi(r, d, e, i));
                    else
                        throw by(x(e[a]));
        }
        if (jx(r, c, e, i), Z(e[a])) {
            let d = e[a][H];
            if (Array.isArray(d)) {
                let f = x(d);
                f.hasAttribute(Dr) || Ya(f, d, t, n);
            }
            r[Cr] ??= {}, r[Cr][l] = Lx(e[a], c, e, t, n);
        }
        else if (Array.isArray(e[a]) && !Sg(c)) {
            let d = x(e[a][H]);
            d.hasAttribute(Dr) || Ya(d, e[a], t, n);
        }
        else if (c.type & 8)
            r[qo] ??= {}, r[qo][l] = vC(o, e, c.child);
        else if (c.type & 144) {
            let d = c.next;
            for (; d !== null && d.type & 144;)
                d = d.next;
            d && !Tr(d) && hi(r, d, e, i);
        }
        else if (c.type & 1) {
            let d = x(e[a]);
            od(n, d);
        }
        if (s && c.type & 2) {
            let d = x(e[a]);
            s.has(d) && Ku(d, s.get(d), t);
        }
    }
} return r; }
function jx(e, t, n, r) { Ac(t) || (t.projectionNext && t.projectionNext !== t.next && !Tr(t.projectionNext) && hi(e, t.projectionNext, n, r), t.prev === null && t.parent !== null && Or(t.parent, n) && !Or(t, n) && hi(e, t, n, r)); }
function Vx(e) { let t = e[B]; return t?.constructor ? $(t.constructor)?.encapsulation === Et.ShadowDom : !1; }
function Ya(e, t, n, r) { let o = t[S]; if ($p(t) && !fa() || Vx(t))
    return o.setAttribute(e, Dr, ""), null; {
    let i = DC(t, n, r), s = r.serializedViewCollection.add(i);
    return o.setAttribute(e, nr, s.toString()), s;
} }
function XT(e, t) { e.textContent = `ngh=${t}`; }
function Hx(e, t) { for (let [n, r] of e)
    n.after(t.createComment(r)); }
function Bx(e) { let t = e; for (; t != null;) {
    if (Oe(t))
        return !0;
    t = t.parent;
} return !1; }
function Ux(e, t, n, r) { let o = Cm(e.hydrateTriggers); for (let i of o)
    r.eventTypesToReplay.regular.add(i); if (o.length > 0) {
    let i = t.filter(s => s.nodeType === Node.ELEMENT_NODE);
    for (let s of i)
        Ku(s, o, n);
} }
var eC = !1, tC = !1, nC = !1;
function $x() { eC || (eC = !0, ym(), XE(), zI(), eI(), zv(), yv(), Ky(), gy()); }
function qx() { tC || (tC = !0, cI(), Uy(), zy()); }
function Gx() { nC || (nC = !0, Nm()); }
function Wx(e) { return e.whenStable(); }
var yL = "ngcm";
function vL() { let e = [{ provide: Mn, useFactory: () => { let t = !0; return (typeof ngServerMode > "u" || !ngServerMode) && (t = !!D(Cn, { optional: !0 })?.get(zs, null)), t && fe("NgHydration"), t; } }, { provide: Pe, useValue: () => { Od(!1), !(typeof ngServerMode < "u" && ngServerMode) && D(Mn) && (Sm(Tt()), $x()); }, multi: !0 }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: zu, useFactory: () => D(Mn) }, { provide: si, useFactory: () => { if (D(Mn)) {
        let t = D(Qe);
        return () => { Wx(t).then(() => { t.destroyed || xd(t); }); };
    } return () => { }; }, multi: !0 }), $e(e); }
function EL() { return [{ provide: Qu, useFactory: () => D(Mn) }, { provide: Pe, useValue: () => { D(Mn) && (qx(), Od(!0), fe("NgI18nHydration")); }, multi: !0 }]; }
function IL() { let e = [Sx(), { provide: Yu, useValue: !0 }, { provide: Mt, useClass: dm }, { provide: Pe, useValue: () => { Gx(), fe("NgIncrementalHydration"); }, multi: !0 }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: si, useFactory: () => { let t = D(oe), n = Tt(); return () => { let r = _m(t), o = Vy(n, n.body); TE(t, r, o), Mm(n, t); }; }, multi: !0 }), e; }
function DL(e) { return typeof e == "boolean" ? e : e != null && e !== "false"; }
function TL(e, t = NaN) { return !isNaN(parseFloat(e)) && !isNaN(Number(e)) ? Number(e) : t; }
var zx = "\u{1F170}\uFE0F", Ja = !1;
function CL(e) { if (!Ja)
    return; let { startLabel: t } = TC(e); performance.mark(t); }
function ML(e) { if (!Ja)
    return; let { startLabel: t, labelName: n, endLabel: r } = TC(e); performance.mark(r), performance.measure(n, t, r), performance.clearMarks(t), performance.clearMarks(r); }
function TC(e) { let t = `${zx}:${e}`; return { labelName: t, startLabel: `start:${t}`, endLabel: `end:${t}` }; }
var rC = !1;
function wL() { if (!rC && (typeof performance > "u" || !performance.mark || !performance.measure)) {
    rC = !0, console.warn("Performance API is not supported on this platform");
    return;
} Ja = !0; }
function NL() { Ja = !1; }
function _L(e) { let t = e; for (; t;) {
    let n = Wg(t);
    if (n !== null)
        for (let r = E; r < n.length; r++) {
            let o = n[r];
            if (!X(o) && !Z(o) || o[H] !== t)
                continue;
            let i = n[y], s = pt(i, r);
            if (Oe(s)) {
                let a = i.data[s.directiveStart + s.componentOffset], c = a.debugInfo?.className || a.type.name;
                if (c)
                    return c;
                break;
            }
        }
    t = t.parentNode;
} return null; }
function SL(e) { }
function bL(e) { return te({ usage: 1, kind: "directive", type: e.type }).compileDirectiveDeclaration(me, `ng:///${e.type.name}/\u0275fac.js`, e); }
function RL(e) { rf(e.type, e.decorators, e.ctorParameters ?? null, e.propDecorators ?? null); }
function AL(e) { dE(e.type, e.resolveDeferredDeps, (...t) => { let n = e.resolveMetadata(...t); rf(e.type, n.decorators, n.ctorParameters, n.propDecorators); }); }
function OL(e) { return te({ usage: 1, kind: "component", type: e.type }).compileComponentDeclaration(me, `ng:///${e.type.name}/\u0275cmp.js`, e); }
function xL(e) { return te({ usage: 1, kind: Qx(e.target), type: e.type }).compileFactoryDeclaration(me, `ng:///${e.type.name}/\u0275fac.js`, e); }
function Qx(e) { switch (e) {
    case Fr.Directive: return "directive";
    case Fr.Component: return "component";
    case Fr.Injectable: return "injectable";
    case Fr.Pipe: return "pipe";
    case Fr.NgModule: return "NgModule";
} }
function kL(e) { return te({ usage: 1, kind: "injectable", type: e.type }).compileInjectableDeclaration(me, `ng:///${e.type.name}/\u0275prov.js`, e); }
function PL(e) { return te({ usage: 1, kind: "NgModule", type: e.type }).compileInjectorDeclaration(me, `ng:///${e.type.name}/\u0275inj.js`, e); }
function LL(e) { return te({ usage: 1, kind: "NgModule", type: e.type }).compileNgModuleDeclaration(me, `ng:///${e.type.name}/\u0275mod.js`, e); }
function FL(e) { return te({ usage: 1, kind: "pipe", type: e.type }).compilePipeDeclaration(me, `ng:///${e.type.name}/\u0275pipe.js`, e); }
function jL(e) { let t = Tt(), n = e.get(Ct), r = $u(t, n), o = {}; for (let [i, s] of Object.entries(r))
    hm(i) || (o[i] = s); return o; }
var dp = Symbol("NOT_SET"), CC = new Set, Zx = Ce(U({}, rc), { consumerIsAlwaysLive: !0, consumerAllowSignalWrites: !0, value: dp, cleanup: null, consumerMarkedDirty() { if (this.sequence.impl.executing) {
        if (this.sequence.lastPhase === null || this.sequence.lastPhase < this.phase)
            return;
        this.sequence.erroredOrDestroyed = !0;
    } this.sequence.scheduler.notify(7); }, phaseFn(e) { if (this.sequence.lastPhase = this.phase, !this.dirty)
        return this.signal; if (this.dirty = !1, this.value !== dp && !Rn(this))
        return this.signal; try {
        for (let o of this.cleanup ?? CC)
            o();
    }
    finally {
        this.cleanup?.clear();
    } let t = []; e !== void 0 && t.push(e), t.push(this.registerCleanupFn); let n = Zt(this), r; try {
        r = this.userFn.apply(null, t);
    }
    finally {
        bn(this, n);
    } return (this.value === dp || !this.equal(this.value, r)) && (this.value = r, this.version++), this.signal; } }), Ip = class extends jo {
    scheduler;
    lastPhase = null;
    nodes = [void 0, void 0, void 0, void 0];
    constructor(t, n, r, o, i, s = null) { super(t, [void 0, void 0, void 0, void 0], r, !1, i, s), this.scheduler = o; for (let a of ef) {
        let c = n[a];
        if (c === void 0)
            continue;
        let l = Object.create(Zx);
        l.sequence = this, l.phase = a, l.userFn = c, l.dirty = !0, l.signal = () => (mi(l), l.value), l.signal[re] = l, l.registerCleanupFn = u => (l.cleanup ??= new Set).add(u), this.nodes[a] = l, this.hooks[a] = u => l.phaseFn(u);
    } }
    afterRun() { super.afterRun(), this.lastPhase = null; }
    destroy() { super.destroy(); for (let t of this.nodes)
        if (t)
            try {
                for (let n of t.cleanup ?? CC)
                    n();
            }
            finally {
                At(t);
            } }
};
function VL(e, t) { if (typeof ngServerMode < "u" && ngServerMode)
    return Ta; let n = t?.injector ?? D(oe), r = n.get(Me), o = n.get(Da), i = n.get(kr, null, { optional: !0 }); o.impl ??= n.get(tf); let s = e; typeof s == "function" && (s = { mixedReadWrite: e }); let a = n.get(ln, null, { optional: !0 }), c = new Ip(o.impl, [s.earlyRead, s.write, s.mixedReadWrite, s.read], a?.view, r, n.get(Fe), i?.snapshot(null)); return o.impl.register(c), c; }
function HL(e, t) { let n = $(e), r = t.elementInjector || Fn(); return new qt(n).create(r, t.projectableNodes, t.hostElement, t.environmentInjector, t.directives, t.bindings); }
function BL(e) { let t = $(e); if (!t)
    return null; let n = new qt(t); return { get selector() { return n.selector; }, get type() { return n.componentType; }, get inputs() { return n.inputs; }, get outputs() { return n.outputs; }, get ngContentSelectors() { return n.ngContentSelectors; }, get isStandalone() { return t.standalone; }, get isSignal() { return t.signals; } }; }
function UL(...e) { return e.reduce((t, n) => Object.assign(t, n, { providers: [...t.providers, ...n.providers] }), { providers: [] }); }
var $L = new C("", { providedIn: "platform", factory: () => null }), qL = new C("", { providedIn: "platform", factory: () => null }), GL = new C("", { providedIn: "platform", factory: () => null });
export { hw as ANIMATION_MODULE_TYPE, si as APP_BOOTSTRAP_LISTENER, Ct as APP_ID, af as APP_INITIALIZER, cf as ApplicationInitStatus, hL as ApplicationModule, Qe as ApplicationRef, Hg as Attribute, dT as COMPILER_OPTIONS, gw as CSP_NONCE, cN as CUSTOM_ELEMENTS_SCHEMA, Vs as ChangeDetectionStrategy, Tx as ChangeDetectorRef, sO as Compiler, ku as CompilerFactory, XA as Component, ga as ComponentFactory, ni as ComponentFactoryResolver, ev as ComponentRef, eL as ContentChild, XP as ContentChildren, fO as DEFAULT_CURRENCY_CODE, ih as DOCUMENT, Tn as DebugElement, Pu as DebugEventListener, Bo as DebugNode, hp as DefaultIterableDiffer, Fe as DestroyRef, uT as Directive, Pe as ENVIRONMENT_INITIALIZER, $o as ElementRef, zT as EmbeddedViewRef, _e as EnvironmentInjector, Xe as ErrorHandler, mt as EventEmitter, lx as HOST_TAG_NAME, Eg as Host, VT as HostAttributeToken, rO as HostBinding, oO as HostListener, Cc as INJECTOR, yg as Inject, VM as Injectable, C as InjectionToken, oe as Injector, tO as Input, gC as IterableDiffers, mC as KeyValueDiffers, zf as LOCALE_ID, pT as MissingTranslationStrategy, xs as ModuleWithComponentFactories, lN as NO_ERRORS_SCHEMA, iO as NgModule, Av as NgModuleFactory, dr as NgModuleRef, Du as NgProbeToken, z as NgZone, ks as Optional, nO as Output, fi as OutputEmitterRef, pw as PACKAGE_ROOT_URL, fw as PLATFORM_ID, Uu as PLATFORM_INITIALIZER, fo as PendingTasks, eO as Pipe, uC as PlatformRef, jr as Query, ps as QueryList, $L as REQUEST, GL as REQUEST_CONTEXT, qL as RESPONSE_INIT, cS as Renderer2, xo as RendererFactory2, vs as RendererStyleFlags2, tv as Sanitizer, wn as SecurityContext, vg as Self, cs as SimpleChange, Ps as SkipSelf, pO as TRANSLATIONS, hO as TRANSLATIONS_FORMAT, Ao as TemplateRef, Yb as Testability, hE as TestabilityRegistry, Cn as TransferState, Ig as Type, rL as VERSION, fp as Version, nL as ViewChild, tL as ViewChildren, va as ViewContainerRef, Et as ViewEncapsulation, pp as ViewRef, eE as afterEveryRender, tE as afterNextRender, VL as afterRenderEffect, gO as asNativeElements, XC as assertInInjectionContext, aM as assertNotInReactiveContext, Ix as assertPlatform, DL as booleanAttribute, _n as computed, YP as contentChild, KP as contentChildren, HL as createComponent, Wd as createEnvironmentInjector, Ov as createNgModule, nb as createNgModuleRef, vx as createPlatform, Ex as createPlatformFactory, AC as defineInjectable, oL as destroyPlatform, mT as effect, cL as enableProdMode, zb as enableProfiling, Gr as forwardRef, vr as getDebugNode, lL as getModuleFactory, uL as getNgModuleById, Dp as getPlatform, Vp as importProvidersFrom, D as inject, zP as input, uv as inputBinding, aL as isDevMode, al as isSignal, to as isStandalone, Yf as linkedSignal, $e as makeEnvironmentProviders, yw as makeStateKey, UL as mergeApplicationConfig, JP as model, TL as numberAttribute, WP as output, dv as outputBinding, pL as platformCore, Kb as provideAppInitializer, iM as provideBrowserGlobalErrorListeners, sL as provideCheckNoChangesConfig, jp as provideEnvironmentInitializer, aN as provideNgReflectAttributes, iL as providePlatformInitializer, cO as provideZoneChangeDetection, uO as provideZonelessChangeDetection, BL as reflectComponentType, O as resolveForwardRef, wO as resource, bi as runInInjectionContext, gE as setTestabilityGetter, Vt as signal, SS as twoWayBinding, Ze as untracked, QP as viewChild, ZP as viewChildren, dC as \u0275ALLOW_MULTIPLE_PLATFORMS, Xg as \u0275AcxChangeDetectionStrategy, em as \u0275AcxViewEncapsulation, Da as \u0275AfterRenderManager, yL as \u0275CLIENT_RENDER_MODE_FLAG, W as \u0275CONTAINER_HEADER_OFFSET, Me as \u0275ChangeDetectionScheduler, La as \u0275ChangeDetectionSchedulerImpl, ga as \u0275ComponentFactory, Wb as \u0275Console, li as \u0275DEFAULT_LOCALE_ID, cE as \u0275DEFER_BLOCK_CONFIG, Bb as \u0275DEFER_BLOCK_DEPENDENCY_INTERCEPTOR, Mt as \u0275DEHYDRATED_BLOCK_REGISTRY, Kd as \u0275DeferBlockBehavior, G as \u0275DeferBlockState, gx as \u0275ENABLE_ROOT_COMPONENT_BOOTSTRAP, po as \u0275EffectScheduler, Jg as \u0275Framework, Em as \u0275HydrationStatus, mw as \u0275IMAGE_CONFIG, tm as \u0275IMAGE_CONFIG_DEFAULTS, Nc as \u0275INJECTOR_SCOPE, GP as \u0275INPUT_SIGNAL_BRAND_WRITE_TYPE, st as \u0275INTERNAL_APPLICATION_ERROR_HANDLER, Mn as \u0275IS_HYDRATION_DOM_REUSE_ENABLED, Yu as \u0275IS_INCREMENTAL_HYDRATION_ENABLED, Qo as \u0275JSACTION_BLOCK_ELEMENT_MAP, ed as \u0275JSACTION_EVENT_CONTRACT, hs as \u0275LContext, gr as \u0275LocaleDataIndex, en as \u0275NG_COMP_DEF, Yr as \u0275NG_DIR_DEF, tn as \u0275NG_ELEMENT_ID, Ur as \u0275NG_INJ_DEF, Ti as \u0275NG_MOD_DEF, Kr as \u0275NG_PIPE_DEF, kn as \u0275NG_PROV_DEF, ns as \u0275NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR, V as \u0275NO_CHANGE, pr as \u0275NgModuleFactory, hr as \u0275NoopNgZone, zx as \u0275PERFORMANCE_MARK_PREFIX, fT as \u0275PROVIDED_NG_ZONE, ht as \u0275PendingTasksInternal, Xt as \u0275R3Injector, as as \u0275ReflectionCapabilities, qt as \u0275Render3ComponentFactory, ws as \u0275Render3ComponentRef, fr as \u0275Render3NgModuleRef, Fa as \u0275ResourceImpl, T as \u0275RuntimeError, re as \u0275SIGNAL, gm as \u0275SSR_CONTENT_INTEGRITY_MARKER, fE as \u0275TESTABILITY, pE as \u0275TESTABILITY_GETTER, aE as \u0275TimerScheduler, Ia as \u0275TracingAction, kr as \u0275TracingService, $t as \u0275ViewRef, Ii as \u0275XSS_SECURITY_URL, qn as \u0275ZONELESS_ENABLED, jm as \u0275_sanitizeHtml, Xs as \u0275_sanitizeUrl, Sr as \u0275allowSanitizationBypassAndThrow, mL as \u0275annotateForHydration, SL as \u0275assertType, Fw as \u0275bypassSanitizationTrustHtml, Bw as \u0275bypassSanitizationTrustResourceUrl, Vw as \u0275bypassSanitizationTrustScript, jw as \u0275bypassSanitizationTrustStyle, Hw as \u0275bypassSanitizationTrustUrl, _v as \u0275clearResolutionOfComponentResourcesQueue, eT as \u0275compileComponent, Wf as \u0275compileDirective, JD as \u0275compileNgModule, XD as \u0275compileNgModuleDefs, hx as \u0275compileNgModuleFactory, lT as \u0275compilePipe, Kt as \u0275convertToBitFlags, hc as \u0275createInjector, Dx as \u0275createOrReusePlatformInjector, dL as \u0275defaultIterableDiffers, fL as \u0275defaultKeyValueDiffers, lr as \u0275depsTracker, av as \u0275devModeEqual, NL as \u0275disableProfiling, wL as \u0275enableProfiling, tp as \u0275encapsulateResourceError, Tf as \u0275findLocaleData, YD as \u0275flushModuleScopingQueueAsMuchAsPossible, xn as \u0275formatRuntimeError, HA as \u0275generateStandaloneInDeclarationsError, Gb as \u0275getAsyncClassMetadataFn, _L as \u0275getClosestComponentName, $ as \u0275getComponentDef, vr as \u0275getDebugNode, is as \u0275getDeferBlocks, rw as \u0275getDirectives, Tt as \u0275getDocument, iw as \u0275getHostElement, Zr as \u0275getInjectableDef, Ne as \u0275getLContext, vR as \u0275getLocaleCurrencyCode, nI as \u0275getLocalePluralCase, EO as \u0275getOutputDestroyRef, Am as \u0275getSanitizationBypassType, jL as \u0275getTransferState, dN as \u0275getUnknownElementStrictMode, pN as \u0275getUnknownPropertyStrictMode, Se as \u0275global, Cx as \u0275injectChangeDetectorRef, gL as \u0275internalCreateApplication, ka as \u0275internalProvideZoneChangeDetection, yE as \u0275isBoundToModule, YS as \u0275isComponentDefPendingResolution, mc as \u0275isEnvironmentProviders, OC as \u0275isInjectable, pn as \u0275isNgModule, sf as \u0275isPromise, mE as \u0275isSubscribable, f_ as \u0275isViewDirty, p_ as \u0275markForRefresh, ct as \u0275noSideEffects, qf as \u0275patchComponentDefWithScope, fe as \u0275performanceMarkFeature, Qb as \u0275publishExternalGlobalUtil, _w as \u0275readHydrationInfo, yR as \u0275registerLocaleData, yt as \u0275renderDeferBlockState, $A as \u0275resetCompiledComponents, jA as \u0275resetJitOptions, wv as \u0275resolveComponentResources, KS as \u0275restoreComponentResolutionQueue, tb as \u0275setAllowDuplicateNgModuleIdsForTest, MC as \u0275setAlternateWeakRefImpl, WD as \u0275setClassDebugInfo, rf as \u0275setClassMetadata, dE as \u0275setClassMetadataAsync, Ke as \u0275setCurrentInjector, uw as \u0275setDocument, PC as \u0275setInjectorProfilerContext, sI as \u0275setLocaleId, uN as \u0275setUnknownElementStrictMode, fN as \u0275setUnknownPropertyStrictMode, CL as \u0275startMeasuring, ML as \u0275stopMeasuring, io as \u0275store, He as \u0275stringify, Gf as \u0275transitiveScopesFor, wa as \u0275triggerResourceLoading, bC as \u0275truncateMiddle, ER as \u0275unregisterLocaleData, wt as \u0275unwrapSafeValue, sM as \u0275unwrapWritableSignal, vL as \u0275withDomHydration, Sx as \u0275withEventReplay, EL as \u0275withI18nSupport, IL as \u0275withIncrementalHydration, Bv as \u0275\u0275CopyDefinitionFeature, ID as \u0275\u0275ExternalStylesFeature, Fr as \u0275\u0275FactoryTarget, Uv as \u0275\u0275HostDirectivesFeature, Qd as \u0275\u0275InheritDefinitionFeature, Tg as \u0275\u0275NgOnChangesFeature, ED as \u0275\u0275ProvidersFeature, ny as \u0275\u0275advance, aD as \u0275\u0275attachSourceLocations, df as \u0275\u0275attribute, FI as \u0275\u0275classMap, Af as \u0275\u0275classProp, WE as \u0275\u0275componentInstance, QE as \u0275\u0275conditional, Na as \u0275\u0275conditionalBranchCreate, zE as \u0275\u0275conditionalCreate, MI as \u0275\u0275contentQuery, SI as \u0275\u0275contentQuerySignal, $f as \u0275\u0275declareLet, CE as \u0275\u0275defer, uE as \u0275\u0275deferEnableTimerScheduling, _E as \u0275\u0275deferHydrateNever, VE as \u0275\u0275deferHydrateOnHover, RE as \u0275\u0275deferHydrateOnIdle, xE as \u0275\u0275deferHydrateOnImmediate, UE as \u0275\u0275deferHydrateOnInteraction, LE as \u0275\u0275deferHydrateOnTimer, GE as \u0275\u0275deferHydrateOnViewport, NE as \u0275\u0275deferHydrateWhen, FE as \u0275\u0275deferOnHover, SE as \u0275\u0275deferOnIdle, AE as \u0275\u0275deferOnImmediate, HE as \u0275\u0275deferOnInteraction, kE as \u0275\u0275deferOnTimer, $E as \u0275\u0275deferOnViewport, jE as \u0275\u0275deferPrefetchOnHover, bE as \u0275\u0275deferPrefetchOnIdle, OE as \u0275\u0275deferPrefetchOnImmediate, BE as \u0275\u0275deferPrefetchOnInteraction, PE as \u0275\u0275deferPrefetchOnTimer, qE as \u0275\u0275deferPrefetchOnViewport, wE as \u0275\u0275deferPrefetchWhen, ME as \u0275\u0275deferWhen, kv as \u0275\u0275defineComponent, Lv as \u0275\u0275defineDirective, F as \u0275\u0275defineInjectable, Qr as \u0275\u0275defineInjector, zd as \u0275\u0275defineNgModule, Fv as \u0275\u0275definePipe, xr as \u0275\u0275directiveInject, Bc as \u0275\u0275disableBindings, hf as \u0275\u0275domElement, vf as \u0275\u0275domElementContainer, yf as \u0275\u0275domElementContainerEnd, Oa as \u0275\u0275domElementContainerStart, Ra as \u0275\u0275domElementEnd, ba as \u0275\u0275domElementStart, Sf as \u0275\u0275domListener, If as \u0275\u0275domProperty, Yd as \u0275\u0275domTemplate, pf as \u0275\u0275element, mf as \u0275\u0275elementContainer, ci as \u0275\u0275elementContainerEnd, Aa as \u0275\u0275elementContainerStart, Sa as \u0275\u0275elementEnd, _a as \u0275\u0275elementStart, Hc as \u0275\u0275enableBindings, GD as \u0275\u0275getComponentDepsFactory, tI as \u0275\u0275getCurrentView, jg as \u0275\u0275getInheritedFactory, zD as \u0275\u0275getReplaceMetadataURL, yI as \u0275\u0275i18n, EI as \u0275\u0275i18nApply, vI as \u0275\u0275i18nAttributes, Mf as \u0275\u0275i18nEnd, wf as \u0275\u0275i18nExp, II as \u0275\u0275i18nPostprocess, Cf as \u0275\u0275i18nStart, le as \u0275\u0275inject, Fs as \u0275\u0275injectAttribute, cD as \u0275\u0275interpolate, lD as \u0275\u0275interpolate1, uD as \u0275\u0275interpolate2, dD as \u0275\u0275interpolate3, fD as \u0275\u0275interpolate4, pD as \u0275\u0275interpolate5, hD as \u0275\u0275interpolate6, gD as \u0275\u0275interpolate7, mD as \u0275\u0275interpolate8, yD as \u0275\u0275interpolateV, nv as \u0275\u0275invalidFactory, Mi as \u0275\u0275invalidFactoryDep, Nf as \u0275\u0275listener, _I as \u0275\u0275loadQuery, rl as \u0275\u0275namespaceHTML, nl as \u0275\u0275namespaceMathML, tl as \u0275\u0275namespaceSVG, DI as \u0275\u0275nextContext, RL as \u0275\u0275ngDeclareClassMetadata, AL as \u0275\u0275ngDeclareClassMetadataAsync, OL as \u0275\u0275ngDeclareComponent, bL as \u0275\u0275ngDeclareDirective, xL as \u0275\u0275ngDeclareFactory, kL as \u0275\u0275ngDeclareInjectable, PL as \u0275\u0275ngDeclareInjector, LL as \u0275\u0275ngDeclareNgModule, FL as \u0275\u0275ngDeclarePipe, jD as \u0275\u0275pipe, VD as \u0275\u0275pipeBind1, HD as \u0275\u0275pipeBind2, BD as \u0275\u0275pipeBind3, UD as \u0275\u0275pipeBind4, $D as \u0275\u0275pipeBindV, CI as \u0275\u0275projection, TI as \u0275\u0275projectionDef, ff as \u0275\u0275property, CD as \u0275\u0275pureFunction0, MD as \u0275\u0275pureFunction1, wD as \u0275\u0275pureFunction2, ND as \u0275\u0275pureFunction3, _D as \u0275\u0275pureFunction4, SD as \u0275\u0275pureFunction5, bD as \u0275\u0275pureFunction6, RD as \u0275\u0275pureFunction7, AD as \u0275\u0275pureFunction8, OD as \u0275\u0275pureFunctionV, RI as \u0275\u0275queryAdvance, NI as \u0275\u0275queryRefresh, sD as \u0275\u0275readContextLet, AI as \u0275\u0275reference, qd as \u0275\u0275registerNgModuleType, JE as \u0275\u0275repeater, KE as \u0275\u0275repeaterCreate, YE as \u0275\u0275repeaterTrackByIdentity, ZE as \u0275\u0275repeaterTrackByIndex, QD as \u0275\u0275replaceMetadata, qc as \u0275\u0275resetView, ud as \u0275\u0275resolveBody, Qm as \u0275\u0275resolveDocument, zm as \u0275\u0275resolveWindow, $c as \u0275\u0275restoreView, Vm as \u0275\u0275sanitizeHtml, ld as \u0275\u0275sanitizeResourceUrl, Bm as \u0275\u0275sanitizeScript, Hm as \u0275\u0275sanitizeStyle, cd as \u0275\u0275sanitizeUrl, qm as \u0275\u0275sanitizeUrlOrResourceUrl, DD as \u0275\u0275setComponentScope, TD as \u0275\u0275setNgModuleScope, iD as \u0275\u0275storeLet, LI as \u0275\u0275styleMap, Rf as \u0275\u0275styleProp, _f as \u0275\u0275syntheticHostListener, Df as \u0275\u0275syntheticHostProperty, Zd as \u0275\u0275template, qD as \u0275\u0275templateRefExtractor, GI as \u0275\u0275text, Of as \u0275\u0275textInterpolate, xa as \u0275\u0275textInterpolate1, xf as \u0275\u0275textInterpolate2, kf as \u0275\u0275textInterpolate3, Pf as \u0275\u0275textInterpolate4, Lf as \u0275\u0275textInterpolate5, Ff as \u0275\u0275textInterpolate6, jf as \u0275\u0275textInterpolate7, Vf as \u0275\u0275textInterpolate8, Hf as \u0275\u0275textInterpolateV, Um as \u0275\u0275trustConstantHtml, $m as \u0275\u0275trustConstantResourceUrl, rD as \u0275\u0275twoWayBindingSet, Uf as \u0275\u0275twoWayListener, Bf as \u0275\u0275twoWayProperty, Rv as \u0275\u0275validateIframeAttribute, wI as \u0275\u0275viewQuery, bI as \u0275\u0275viewQuerySignal };
/*! Bundled license information:

@angular/core/fesm2022/root_effect_scheduler.mjs:
@angular/core/fesm2022/attribute.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/resource.mjs:
@angular/core/fesm2022/primitives/event-dispatch.mjs:
@angular/core/fesm2022/core.mjs:
  (**
   * @license Angular v20.1.7
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)

@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/debug_node.mjs:
@angular/core/fesm2022/core.mjs:
@angular/core/fesm2022/core.mjs:
  (*!
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.dev/license
   *)
*/
