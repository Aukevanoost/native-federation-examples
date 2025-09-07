import { a as m, b as v } from "@nf-internal/chunk-4CLCTAJ7";
function y(e, r) { return Object.is(e, r); }
var o = null, g = !1, D = 1, R = null, S = Symbol("SIGNAL");
function d(e) { let r = o; return o = e, r; }
function K() { return o; }
function z() { return g; }
function H(e) { return e[S] !== void 0; }
var N = { version: 0, lastCleanEpoch: 0, dirty: !1, producers: void 0, producersTail: void 0, consumers: void 0, consumersTail: void 0, recomputing: !1, consumerAllowSignalWrites: !1, consumerIsAlwaysLive: !1, kind: "unknown", producerMustRecompute: () => !1, producerRecomputeValue: () => { }, consumerMarkedDirty: () => { }, consumerOnSignalRead: () => { } };
function T(e) { if (g)
    throw new Error(""); if (o === null)
    return; o.consumerOnSignalRead(e); let r = o.producersTail; if (r !== void 0 && r.producer === e)
    return; let n, u = o.recomputing; if (u && (n = r !== void 0 ? r.nextProducer : o.producers, n !== void 0 && n.producer === e)) {
    o.producersTail = n, n.lastReadVersion = e.version;
    return;
} let t = e.consumersTail; if (t !== void 0 && t.consumer === o && (!u || G(t, o)))
    return; let i = p(o), c = { producer: e, consumer: o, nextProducer: n, prevConsumer: t, lastReadVersion: e.version, nextConsumer: void 0 }; o.producersTail = c, r !== void 0 ? r.nextProducer = c : o.producers = c, i && V(e, c); }
function O() { D++; }
function f(e) { if (!(p(e) && !e.dirty) && !(!e.dirty && e.lastCleanEpoch === D)) {
    if (!e.producerMustRecompute(e) && !U(e)) {
        C(e);
        return;
    }
    e.producerRecomputeValue(e), C(e);
} }
function A(e) { if (e.consumers === void 0)
    return; let r = g; g = !0; try {
    for (let n = e.consumers; n !== void 0; n = n.nextConsumer) {
        let u = n.consumer;
        u.dirty || F(u);
    }
}
finally {
    g = r;
} }
function L() { return o?.consumerAllowSignalWrites !== !1; }
function F(e) { e.dirty = !0, A(e), e.consumerMarkedDirty?.(e); }
function C(e) { e.dirty = !1, e.lastCleanEpoch = D; }
function h(e) { return e && (e.producersTail = void 0, e.recomputing = !0), d(e); }
function M(e, r) { if (d(r), !e)
    return; e.recomputing = !1; let n = e.producersTail, u = n !== void 0 ? n.nextProducer : e.producers; if (u !== void 0) {
    if (p(e))
        do
            u = x(u);
        while (u !== void 0);
    n !== void 0 ? n.nextProducer = void 0 : e.producers = void 0;
} }
function U(e) { for (let r = e.producers; r !== void 0; r = r.nextProducer) {
    let n = r.producer, u = r.lastReadVersion;
    if (u !== n.version || (f(n), u !== n.version))
        return !0;
} return !1; }
function J(e) { if (p(e)) {
    let r = e.producers;
    for (; r !== void 0;)
        r = x(r);
} e.producers = void 0, e.producersTail = void 0, e.consumers = void 0, e.consumersTail = void 0; }
function V(e, r) { let n = e.consumersTail, u = p(e); if (n !== void 0 ? (r.nextConsumer = n.nextConsumer, n.nextConsumer = r) : (r.nextConsumer = void 0, e.consumers = r), r.prevConsumer = n, e.consumersTail = r, !u)
    for (let t = e.producers; t !== void 0; t = t.nextProducer)
        V(t.producer, t); }
function x(e) { let r = e.producer, n = e.nextProducer, u = e.nextConsumer, t = e.prevConsumer; if (e.nextConsumer = void 0, e.prevConsumer = void 0, u !== void 0 ? u.prevConsumer = t : r.consumersTail = t, t !== void 0)
    t.nextConsumer = u;
else if (r.consumers = u, !p(r)) {
    let i = r.producers;
    for (; i !== void 0;)
        i = x(i);
} return n; }
function p(e) { return e.consumerIsAlwaysLive || e.consumers !== void 0; }
function w(e) { R?.(e); }
function Q(e) { let r = R; return R = e, r; }
function G(e, r) { let n = r.producersTail; if (n !== void 0) {
    let u = r.producers;
    do {
        if (u === e)
            return !0;
        if (u === n)
            break;
        u = u.nextProducer;
    } while (u !== void 0);
} return !1; }
function X(e, r) { let n = Object.create(q); n.computation = e, r !== void 0 && (n.equal = r); let u = () => { if (f(n), T(n), n.value === s)
    throw n.error; return n.value; }; return u[S] = n, w(n), u; }
var a = Symbol("UNSET"), l = Symbol("COMPUTING"), s = Symbol("ERRORED"), q = v(m({}, N), { value: a, dirty: !0, error: null, equal: y, kind: "computed", producerMustRecompute(e) { return e.value === a || e.value === l; }, producerRecomputeValue(e) { if (e.value === l)
        throw new Error(""); let r = e.value; e.value = l; let n = h(e), u, t = !1; try {
        u = e.computation(), d(null), t = r !== a && r !== s && u !== s && e.equal(r, u);
    }
    catch (i) {
        u = s, e.error = i;
    }
    finally {
        M(e, n);
    } if (t) {
        e.value = r;
        return;
    } e.value = u, e.version++; } });
function W() { throw new Error; }
var b = W;
function I(e) { b(e); }
function Y(e) { b = e; }
var E = null;
function Z(e, r) { let n = Object.create($); n.value = e, r !== void 0 && (n.equal = r); let u = () => _(n); return u[S] = n, w(n), [u, c => P(n, c), c => k(n, c)]; }
function ee(e) { let r = E; return E = e, r; }
function _(e) { return T(e), e.value; }
function P(e, r) { L() || I(e), e.equal(e.value, r) || (e.value = r, j(e)); }
function k(e, r) { L() || I(e), P(e, r(e.value)); }
function re(e) { E?.(e); }
var $ = v(m({}, N), { equal: y, value: void 0, kind: "signal" });
function j(e) { e.version++, O(), A(e), E?.(e); }
function oe(e, r, n) { let u = Object.create(B); u.source = e, u.computation = r, n != null && (u.equal = n); let i = () => { if (f(u), T(u), u.value === s)
    throw u.error; return u.value; }; return i[S] = u, w(u), i; }
function ie(e, r) { f(e), P(e, r), C(e); }
function ce(e, r) { f(e), k(e, r), C(e); }
var B = v(m({}, N), { value: a, dirty: !0, error: null, equal: y, kind: "linkedSignal", producerMustRecompute(e) { return e.value === a || e.value === l; }, producerRecomputeValue(e) { if (e.value === l)
        throw new Error(""); let r = e.value; e.value = l; let n = h(e), u; try {
        let t = e.source(), i = r === a || r === s ? void 0 : { source: e.sourceValue, value: r };
        u = e.computation(t, i), e.sourceValue = t;
    }
    catch (t) {
        u = s, e.error = t;
    }
    finally {
        M(e, n);
    } if (r !== a && u !== s && e.equal(r, u)) {
        e.value = r;
        return;
    } e.value = u, e.version++; } });
function se(e) { let r = d(null); try {
    return e();
}
finally {
    d(r);
} }
function de(e) { }
export { y as a, S as b, d as c, K as d, z as e, H as f, N as g, T as h, O as i, f as j, A as k, L as l, F as m, C as n, h as o, M as p, U as q, J as r, w as s, Q as t, X as u, Y as v, Z as w, ee as x, _ as y, P as z, k as A, re as B, $ as C, oe as D, ie as E, ce as F, se as G, de as H };
/*! Bundled license information:

@angular/core/fesm2022/signal.mjs:
@angular/core/fesm2022/untracked.mjs:
@angular/core/fesm2022/weak_ref.mjs:
  (**
   * @license Angular v20.1.7
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
