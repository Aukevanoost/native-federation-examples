import { a as c, b as h } from "@nf-internal/chunk-4CLCTAJ7";
import * as s from "@angular/core";
import { InjectionToken as F, forwardRef as l, ɵisPromise as dt, ɵRuntimeError as ne, untracked as m, computed as O, signal as x, EventEmitter as C, booleanAttribute as re, ChangeDetectorRef as Me, inject as P, ApplicationRef as ct, DestroyRef as ht, afterNextRender as ft, Version as gt } from "@angular/core";
import { ɵgetDOM as pe } from "@angular/common";
import { forkJoin as pt, from as mt, Subject as _t } from "rxjs";
import { map as vt } from "rxjs/operators";
var Ee = (() => { class t {
    _renderer;
    _elementRef;
    onChange = e => { };
    onTouched = () => { };
    constructor(e, i) { this._renderer = e, this._elementRef = i; }
    setProperty(e, i) { this._renderer.setProperty(this._elementRef.nativeElement, e, i); }
    registerOnTouched(e) { this.onTouched = e; }
    registerOnChange(e) { this.onChange = e; }
    setDisabledState(e) { this.setProperty("disabled", e); }
    static ɵfac = function (i) { return new (i || t)(s.ɵɵdirectiveInject(s.Renderer2), s.ɵɵdirectiveInject(s.ElementRef)); };
    static ɵdir = s.ɵɵdefineDirective({ type: t });
} return t; })(), V = (() => { class t extends Ee {
    static ɵfac = (() => { let e; return function (r) { return (e || (e = s.ɵɵgetInheritedFactory(t)))(r || t); }; })();
    static ɵdir = s.ɵɵdefineDirective({ type: t, features: [s.ɵɵInheritDefinitionFeature] });
} return t; })(), g = new F(""), yt = { provide: g, useExisting: l(() => Ct), multi: !0 }, Ct = (() => { class t extends V {
    writeValue(e) { this.setProperty("checked", e); }
    static ɵfac = (() => { let e; return function (r) { return (e || (e = s.ɵɵgetInheritedFactory(t)))(r || t); }; })();
    static ɵdir = s.ɵɵdefineDirective({ type: t, selectors: [["input", "type", "checkbox", "formControlName", ""], ["input", "type", "checkbox", "formControl", ""], ["input", "type", "checkbox", "ngModel", ""]], hostBindings: function (i, r) { i & 1 && s.ɵɵlistener("change", function (a) { return r.onChange(a.target.checked); })("blur", function () { return r.onTouched(); }); }, standalone: !1, features: [s.ɵɵProvidersFeature([yt]), s.ɵɵInheritDefinitionFeature] });
} return t; })(), Vt = { provide: g, useExisting: l(() => we), multi: !0 };
function Dt() { let t = pe() ? pe().getUserAgent() : ""; return /android (\d+)/.test(t.toLowerCase()); }
var bt = new F(""), we = (() => { class t extends Ee {
    _compositionMode;
    _composing = !1;
    constructor(e, i, r) { super(e, i), this._compositionMode = r, this._compositionMode == null && (this._compositionMode = !Dt()); }
    writeValue(e) { let i = e ?? ""; this.setProperty("value", i); }
    _handleInput(e) { (!this._compositionMode || this._compositionMode && !this._composing) && this.onChange(e); }
    _compositionStart() { this._composing = !0; }
    _compositionEnd(e) { this._composing = !1, this._compositionMode && this.onChange(e); }
    static ɵfac = function (i) { return new (i || t)(s.ɵɵdirectiveInject(s.Renderer2), s.ɵɵdirectiveInject(s.ElementRef), s.ɵɵdirectiveInject(bt, 8)); };
    static ɵdir = s.ɵɵdefineDirective({ type: t, selectors: [["input", "formControlName", "", 3, "type", "checkbox"], ["textarea", "formControlName", ""], ["input", "formControl", "", 3, "type", "checkbox"], ["textarea", "formControl", ""], ["input", "ngModel", "", 3, "type", "checkbox"], ["textarea", "ngModel", ""], ["", "ngDefaultControl", ""]], hostBindings: function (i, r) { i & 1 && s.ɵɵlistener("input", function (a) { return r._handleInput(a.target.value); })("blur", function () { return r.onTouched(); })("compositionstart", function () { return r._compositionStart(); })("compositionend", function (a) { return r._compositionEnd(a.target.value); }); }, standalone: !1, features: [s.ɵɵProvidersFeature([Vt]), s.ɵɵInheritDefinitionFeature] });
} return t; })();
function se(t) { return t == null || oe(t) === 0; }
function oe(t) { return t == null ? null : Array.isArray(t) || typeof t == "string" ? t.length : t instanceof Set ? t.size : null; }
var d = new F(""), y = new F(""), At = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, me = class {
    static min(n) { return Fe(n); }
    static max(n) { return Ie(n); }
    static required(n) { return Se(n); }
    static requiredTrue(n) { return Ne(n); }
    static email(n) { return Oe(n); }
    static minLength(n) { return xe(n); }
    static maxLength(n) { return Pe(n); }
    static pattern(n) { return Re(n); }
    static nullValidator(n) { return H(); }
    static compose(n) { return Ue(n); }
    static composeAsync(n) { return He(n); }
};
function Fe(t) { return n => { if (n.value == null || t == null)
    return null; let e = parseFloat(n.value); return !isNaN(e) && e < t ? { min: { min: t, actual: n.value } } : null; }; }
function Ie(t) { return n => { if (n.value == null || t == null)
    return null; let e = parseFloat(n.value); return !isNaN(e) && e > t ? { max: { max: t, actual: n.value } } : null; }; }
function Se(t) { return se(t.value) ? { required: !0 } : null; }
function Ne(t) { return t.value === !0 ? null : { required: !0 }; }
function Oe(t) { return se(t.value) || At.test(t.value) ? null : { email: !0 }; }
function xe(t) { return n => { let e = n.value?.length ?? oe(n.value); return e === null || e === 0 ? null : e < t ? { minlength: { requiredLength: t, actualLength: e } } : null; }; }
function Pe(t) { return n => { let e = n.value?.length ?? oe(n.value); return e !== null && e > t ? { maxlength: { requiredLength: t, actualLength: e } } : null; }; }
function Re(t) { if (!t)
    return H; let n, e; return typeof t == "string" ? (e = "", t.charAt(0) !== "^" && (e += "^"), e += t, t.charAt(t.length - 1) !== "$" && (e += "$"), n = new RegExp(e)) : (e = t.toString(), n = t), i => { if (se(i.value))
    return null; let r = i.value; return n.test(r) ? null : { pattern: { requiredPattern: e, actualValue: r } }; }; }
function H(t) { return null; }
function ke(t) { return t != null; }
function je(t) { return dt(t) ? mt(t) : t; }
function Ge(t) { let n = {}; return t.forEach(e => { n = e != null ? c(c({}, n), e) : n; }), Object.keys(n).length === 0 ? null : n; }
function Te(t, n) { return n.map(e => e(t)); }
function Mt(t) { return !t.validate; }
function Be(t) { return t.map(n => Mt(n) ? n : e => n.validate(e)); }
function Ue(t) { if (!t)
    return null; let n = t.filter(ke); return n.length == 0 ? null : function (e) { return Ge(Te(e, n)); }; }
function ae(t) { return t != null ? Ue(Be(t)) : null; }
function He(t) { if (!t)
    return null; let n = t.filter(ke); return n.length == 0 ? null : function (e) { let i = Te(e, n).map(je); return pt(i).pipe(vt(Ge)); }; }
function le(t) { return t != null ? He(Be(t)) : null; }
function _e(t, n) { return t === null ? [n] : Array.isArray(t) ? [...t, n] : [t, n]; }
function Le(t) { return t._rawValidators; }
function We(t) { return t._rawAsyncValidators; }
function ie(t) { return t ? Array.isArray(t) ? t : [t] : []; }
function L(t, n) { return Array.isArray(t) ? t.includes(n) : t === n; }
function ve(t, n) { let e = ie(n); return ie(t).forEach(r => { L(e, r) || e.push(r); }), e; }
function ye(t, n) { return ie(n).filter(e => !L(t, e)); }
var W = class {
    get value() { return this.control ? this.control.value : null; }
    get valid() { return this.control ? this.control.valid : null; }
    get invalid() { return this.control ? this.control.invalid : null; }
    get pending() { return this.control ? this.control.pending : null; }
    get disabled() { return this.control ? this.control.disabled : null; }
    get enabled() { return this.control ? this.control.enabled : null; }
    get errors() { return this.control ? this.control.errors : null; }
    get pristine() { return this.control ? this.control.pristine : null; }
    get dirty() { return this.control ? this.control.dirty : null; }
    get touched() { return this.control ? this.control.touched : null; }
    get status() { return this.control ? this.control.status : null; }
    get untouched() { return this.control ? this.control.untouched : null; }
    get statusChanges() { return this.control ? this.control.statusChanges : null; }
    get valueChanges() { return this.control ? this.control.valueChanges : null; }
    get path() { return null; }
    _composedValidatorFn;
    _composedAsyncValidatorFn;
    _rawValidators = [];
    _rawAsyncValidators = [];
    _setValidators(n) { this._rawValidators = n || [], this._composedValidatorFn = ae(this._rawValidators); }
    _setAsyncValidators(n) { this._rawAsyncValidators = n || [], this._composedAsyncValidatorFn = le(this._rawAsyncValidators); }
    get validator() { return this._composedValidatorFn || null; }
    get asyncValidator() { return this._composedAsyncValidatorFn || null; }
    _onDestroyCallbacks = [];
    _registerOnDestroy(n) { this._onDestroyCallbacks.push(n); }
    _invokeOnDestroyCallbacks() { this._onDestroyCallbacks.forEach(n => n()), this._onDestroyCallbacks = []; }
    reset(n = void 0) { this.control && this.control.reset(n); }
    hasError(n, e) { return this.control ? this.control.hasError(n, e) : !1; }
    getError(n, e) { return this.control ? this.control.getError(n, e) : null; }
}, u = class extends W {
    name;
    get formDirective() { return null; }
    get path() { return null; }
}, f = class extends W {
    _parent = null;
    name = null;
    valueAccessor = null;
}, $ = class {
    _cd;
    constructor(n) { this._cd = n; }
    get isTouched() { return this._cd?.control?._touched?.(), !!this._cd?.control?.touched; }
    get isUntouched() { return !!this._cd?.control?.untouched; }
    get isPristine() { return this._cd?.control?._pristine?.(), !!this._cd?.control?.pristine; }
    get isDirty() { return !!this._cd?.control?.dirty; }
    get isValid() { return this._cd?.control?._status?.(), !!this._cd?.control?.valid; }
    get isInvalid() { return !!this._cd?.control?.invalid; }
    get isPending() { return !!this._cd?.control?.pending; }
    get isSubmitted() { return this._cd?._submitted?.(), !!this._cd?.submitted; }
}, Et = { "[class.ng-untouched]": "isUntouched", "[class.ng-touched]": "isTouched", "[class.ng-pristine]": "isPristine", "[class.ng-dirty]": "isDirty", "[class.ng-valid]": "isValid", "[class.ng-invalid]": "isInvalid", "[class.ng-pending]": "isPending" }, jn = h(c({}, Et), { "[class.ng-submitted]": "isSubmitted" }), Gn = (() => { class t extends $ {
    constructor(e) { super(e); }
    static ɵfac = function (i) { return new (i || t)(s.ɵɵdirectiveInject(f, 2)); };
    static ɵdir = s.ɵɵdefineDirective({ type: t, selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]], hostVars: 14, hostBindings: function (i, r) { i & 2 && s.ɵɵclassProp("ng-untouched", r.isUntouched)("ng-touched", r.isTouched)("ng-pristine", r.isPristine)("ng-dirty", r.isDirty)("ng-valid", r.isValid)("ng-invalid", r.isInvalid)("ng-pending", r.isPending); }, standalone: !1, features: [s.ɵɵInheritDefinitionFeature] });
} return t; })(), Tn = (() => { class t extends $ {
    constructor(e) { super(e); }
    static ɵfac = function (i) { return new (i || t)(s.ɵɵdirectiveInject(u, 10)); };
    static ɵdir = s.ɵɵdefineDirective({ type: t, selectors: [["", "formGroupName", ""], ["", "formArrayName", ""], ["", "ngModelGroup", ""], ["", "formGroup", ""], ["form", 3, "ngNoForm", ""], ["", "ngForm", ""]], hostVars: 16, hostBindings: function (i, r) { i & 2 && s.ɵɵclassProp("ng-untouched", r.isUntouched)("ng-touched", r.isTouched)("ng-pristine", r.isPristine)("ng-dirty", r.isDirty)("ng-valid", r.isValid)("ng-invalid", r.isInvalid)("ng-pending", r.isPending)("ng-submitted", r.isSubmitted); }, standalone: !1, features: [s.ɵɵInheritDefinitionFeature] });
} return t; })();
var I = "VALID", U = "INVALID", A = "PENDING", S = "DISABLED", _ = class {
}, q = class extends _ {
    value;
    source;
    constructor(n, e) { super(), this.value = n, this.source = e; }
}, R = class extends _ {
    pristine;
    source;
    constructor(n, e) { super(), this.pristine = n, this.source = e; }
}, k = class extends _ {
    touched;
    source;
    constructor(n, e) { super(), this.touched = n, this.source = e; }
}, M = class extends _ {
    status;
    source;
    constructor(n, e) { super(), this.status = n, this.source = e; }
}, z = class extends _ {
    source;
    constructor(n) { super(), this.source = n; }
}, Z = class extends _ {
    source;
    constructor(n) { super(), this.source = n; }
};
function ue(t) { return (Q(t) ? t.validators : t) || null; }
function wt(t) { return Array.isArray(t) ? ae(t) : t || null; }
function de(t, n) { return (Q(n) ? n.asyncValidators : t) || null; }
function Ft(t) { return Array.isArray(t) ? le(t) : t || null; }
function Q(t) { return t != null && !Array.isArray(t) && typeof t == "object"; }
function $e(t, n, e) { let i = t.controls; if (!(n ? Object.keys(i) : i).length)
    throw new ne(1e3, ""); if (!i[e])
    throw new ne(1001, ""); }
function qe(t, n, e) { t._forEachChild((i, r) => { if (e[r] === void 0)
    throw new ne(1002, ""); }); }
var w = class {
    _pendingDirty = !1;
    _hasOwnPendingAsyncValidator = null;
    _pendingTouched = !1;
    _onCollectionChange = () => { };
    _updateOn;
    _parent = null;
    _asyncValidationSubscription;
    _composedValidatorFn;
    _composedAsyncValidatorFn;
    _rawValidators;
    _rawAsyncValidators;
    value;
    constructor(n, e) { this._assignValidators(n), this._assignAsyncValidators(e); }
    get validator() { return this._composedValidatorFn; }
    set validator(n) { this._rawValidators = this._composedValidatorFn = n; }
    get asyncValidator() { return this._composedAsyncValidatorFn; }
    set asyncValidator(n) { this._rawAsyncValidators = this._composedAsyncValidatorFn = n; }
    get parent() { return this._parent; }
    get status() { return m(this.statusReactive); }
    set status(n) { m(() => this.statusReactive.set(n)); }
    _status = O(() => this.statusReactive());
    statusReactive = x(void 0);
    get valid() { return this.status === I; }
    get invalid() { return this.status === U; }
    get pending() { return this.status == A; }
    get disabled() { return this.status === S; }
    get enabled() { return this.status !== S; }
    errors;
    get pristine() { return m(this.pristineReactive); }
    set pristine(n) { m(() => this.pristineReactive.set(n)); }
    _pristine = O(() => this.pristineReactive());
    pristineReactive = x(!0);
    get dirty() { return !this.pristine; }
    get touched() { return m(this.touchedReactive); }
    set touched(n) { m(() => this.touchedReactive.set(n)); }
    _touched = O(() => this.touchedReactive());
    touchedReactive = x(!1);
    get untouched() { return !this.touched; }
    _events = new _t;
    events = this._events.asObservable();
    valueChanges;
    statusChanges;
    get updateOn() { return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change"; }
    setValidators(n) { this._assignValidators(n); }
    setAsyncValidators(n) { this._assignAsyncValidators(n); }
    addValidators(n) { this.setValidators(ve(n, this._rawValidators)); }
    addAsyncValidators(n) { this.setAsyncValidators(ve(n, this._rawAsyncValidators)); }
    removeValidators(n) { this.setValidators(ye(n, this._rawValidators)); }
    removeAsyncValidators(n) { this.setAsyncValidators(ye(n, this._rawAsyncValidators)); }
    hasValidator(n) { return L(this._rawValidators, n); }
    hasAsyncValidator(n) { return L(this._rawAsyncValidators, n); }
    clearValidators() { this.validator = null; }
    clearAsyncValidators() { this.asyncValidator = null; }
    markAsTouched(n = {}) { let e = this.touched === !1; this.touched = !0; let i = n.sourceControl ?? this; this._parent && !n.onlySelf && this._parent.markAsTouched(h(c({}, n), { sourceControl: i })), e && n.emitEvent !== !1 && this._events.next(new k(!0, i)); }
    markAllAsDirty(n = {}) { this.markAsDirty({ onlySelf: !0, emitEvent: n.emitEvent, sourceControl: this }), this._forEachChild(e => e.markAllAsDirty(n)); }
    markAllAsTouched(n = {}) { this.markAsTouched({ onlySelf: !0, emitEvent: n.emitEvent, sourceControl: this }), this._forEachChild(e => e.markAllAsTouched(n)); }
    markAsUntouched(n = {}) { let e = this.touched === !0; this.touched = !1, this._pendingTouched = !1; let i = n.sourceControl ?? this; this._forEachChild(r => { r.markAsUntouched({ onlySelf: !0, emitEvent: n.emitEvent, sourceControl: i }); }), this._parent && !n.onlySelf && this._parent._updateTouched(n, i), e && n.emitEvent !== !1 && this._events.next(new k(!1, i)); }
    markAsDirty(n = {}) { let e = this.pristine === !0; this.pristine = !1; let i = n.sourceControl ?? this; this._parent && !n.onlySelf && this._parent.markAsDirty(h(c({}, n), { sourceControl: i })), e && n.emitEvent !== !1 && this._events.next(new R(!1, i)); }
    markAsPristine(n = {}) { let e = this.pristine === !1; this.pristine = !0, this._pendingDirty = !1; let i = n.sourceControl ?? this; this._forEachChild(r => { r.markAsPristine({ onlySelf: !0, emitEvent: n.emitEvent }); }), this._parent && !n.onlySelf && this._parent._updatePristine(n, i), e && n.emitEvent !== !1 && this._events.next(new R(!0, i)); }
    markAsPending(n = {}) { this.status = A; let e = n.sourceControl ?? this; n.emitEvent !== !1 && (this._events.next(new M(this.status, e)), this.statusChanges.emit(this.status)), this._parent && !n.onlySelf && this._parent.markAsPending(h(c({}, n), { sourceControl: e })); }
    disable(n = {}) { let e = this._parentMarkedDirty(n.onlySelf); this.status = S, this.errors = null, this._forEachChild(r => { r.disable(h(c({}, n), { onlySelf: !0 })); }), this._updateValue(); let i = n.sourceControl ?? this; n.emitEvent !== !1 && (this._events.next(new q(this.value, i)), this._events.next(new M(this.status, i)), this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)), this._updateAncestors(h(c({}, n), { skipPristineCheck: e }), this), this._onDisabledChange.forEach(r => r(!0)); }
    enable(n = {}) { let e = this._parentMarkedDirty(n.onlySelf); this.status = I, this._forEachChild(i => { i.enable(h(c({}, n), { onlySelf: !0 })); }), this.updateValueAndValidity({ onlySelf: !0, emitEvent: n.emitEvent }), this._updateAncestors(h(c({}, n), { skipPristineCheck: e }), this), this._onDisabledChange.forEach(i => i(!1)); }
    _updateAncestors(n, e) { this._parent && !n.onlySelf && (this._parent.updateValueAndValidity(n), n.skipPristineCheck || this._parent._updatePristine({}, e), this._parent._updateTouched({}, e)); }
    setParent(n) { this._parent = n; }
    getRawValue() { return this.value; }
    updateValueAndValidity(n = {}) { if (this._setInitialStatus(), this._updateValue(), this.enabled) {
        let i = this._cancelExistingSubscription();
        this.errors = this._runValidator(), this.status = this._calculateStatus(), (this.status === I || this.status === A) && this._runAsyncValidator(i, n.emitEvent);
    } let e = n.sourceControl ?? this; n.emitEvent !== !1 && (this._events.next(new q(this.value, e)), this._events.next(new M(this.status, e)), this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)), this._parent && !n.onlySelf && this._parent.updateValueAndValidity(h(c({}, n), { sourceControl: e })); }
    _updateTreeValidity(n = { emitEvent: !0 }) { this._forEachChild(e => e._updateTreeValidity(n)), this.updateValueAndValidity({ onlySelf: !0, emitEvent: n.emitEvent }); }
    _setInitialStatus() { this.status = this._allControlsDisabled() ? S : I; }
    _runValidator() { return this.validator ? this.validator(this) : null; }
    _runAsyncValidator(n, e) { if (this.asyncValidator) {
        this.status = A, this._hasOwnPendingAsyncValidator = { emitEvent: e !== !1, shouldHaveEmitted: n !== !1 };
        let i = je(this.asyncValidator(this));
        this._asyncValidationSubscription = i.subscribe(r => { this._hasOwnPendingAsyncValidator = null, this.setErrors(r, { emitEvent: e, shouldHaveEmitted: n }); });
    } }
    _cancelExistingSubscription() { if (this._asyncValidationSubscription) {
        this._asyncValidationSubscription.unsubscribe();
        let n = (this._hasOwnPendingAsyncValidator?.emitEvent || this._hasOwnPendingAsyncValidator?.shouldHaveEmitted) ?? !1;
        return this._hasOwnPendingAsyncValidator = null, n;
    } return !1; }
    setErrors(n, e = {}) { this.errors = n, this._updateControlsErrors(e.emitEvent !== !1, this, e.shouldHaveEmitted); }
    get(n) { let e = n; return e == null || (Array.isArray(e) || (e = e.split(".")), e.length === 0) ? null : e.reduce((i, r) => i && i._find(r), this); }
    getError(n, e) { let i = e ? this.get(e) : this; return i && i.errors ? i.errors[n] : null; }
    hasError(n, e) { return !!this.getError(n, e); }
    get root() { let n = this; for (; n._parent;)
        n = n._parent; return n; }
    _updateControlsErrors(n, e, i) { this.status = this._calculateStatus(), n && this.statusChanges.emit(this.status), (n || i) && this._events.next(new M(this.status, e)), this._parent && this._parent._updateControlsErrors(n, e, i); }
    _initObservables() { this.valueChanges = new C, this.statusChanges = new C; }
    _calculateStatus() { return this._allControlsDisabled() ? S : this.errors ? U : this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(A) ? A : this._anyControlsHaveStatus(U) ? U : I; }
    _anyControlsHaveStatus(n) { return this._anyControls(e => e.status === n); }
    _anyControlsDirty() { return this._anyControls(n => n.dirty); }
    _anyControlsTouched() { return this._anyControls(n => n.touched); }
    _updatePristine(n, e) { let i = !this._anyControlsDirty(), r = this.pristine !== i; this.pristine = i, this._parent && !n.onlySelf && this._parent._updatePristine(n, e), r && this._events.next(new R(this.pristine, e)); }
    _updateTouched(n = {}, e) { this.touched = this._anyControlsTouched(), this._events.next(new k(this.touched, e)), this._parent && !n.onlySelf && this._parent._updateTouched(n, e); }
    _onDisabledChange = [];
    _registerOnCollectionChange(n) { this._onCollectionChange = n; }
    _setUpdateStrategy(n) { Q(n) && n.updateOn != null && (this._updateOn = n.updateOn); }
    _parentMarkedDirty(n) { let e = this._parent && this._parent.dirty; return !n && !!e && !this._parent._anyControlsDirty(); }
    _find(n) { return null; }
    _assignValidators(n) { this._rawValidators = Array.isArray(n) ? n.slice() : n, this._composedValidatorFn = wt(this._rawValidators); }
    _assignAsyncValidators(n) { this._rawAsyncValidators = Array.isArray(n) ? n.slice() : n, this._composedAsyncValidatorFn = Ft(this._rawAsyncValidators); }
}, v = class extends w {
    constructor(n, e, i) { super(ue(e), de(i, e)), this.controls = n, this._initObservables(), this._setUpdateStrategy(e), this._setUpControls(), this.updateValueAndValidity({ onlySelf: !0, emitEvent: !!this.asyncValidator }); }
    controls;
    registerControl(n, e) { return this.controls[n] ? this.controls[n] : (this.controls[n] = e, e.setParent(this), e._registerOnCollectionChange(this._onCollectionChange), e); }
    addControl(n, e, i = {}) { this.registerControl(n, e), this.updateValueAndValidity({ emitEvent: i.emitEvent }), this._onCollectionChange(); }
    removeControl(n, e = {}) { this.controls[n] && this.controls[n]._registerOnCollectionChange(() => { }), delete this.controls[n], this.updateValueAndValidity({ emitEvent: e.emitEvent }), this._onCollectionChange(); }
    setControl(n, e, i = {}) { this.controls[n] && this.controls[n]._registerOnCollectionChange(() => { }), delete this.controls[n], e && this.registerControl(n, e), this.updateValueAndValidity({ emitEvent: i.emitEvent }), this._onCollectionChange(); }
    contains(n) { return this.controls.hasOwnProperty(n) && this.controls[n].enabled; }
    setValue(n, e = {}) { qe(this, !0, n), Object.keys(n).forEach(i => { $e(this, !0, i), this.controls[i].setValue(n[i], { onlySelf: !0, emitEvent: e.emitEvent }); }), this.updateValueAndValidity(e); }
    patchValue(n, e = {}) { n != null && (Object.keys(n).forEach(i => { let r = this.controls[i]; r && r.patchValue(n[i], { onlySelf: !0, emitEvent: e.emitEvent }); }), this.updateValueAndValidity(e)); }
    reset(n = {}, e = {}) { this._forEachChild((i, r) => { i.reset(n ? n[r] : null, { onlySelf: !0, emitEvent: e.emitEvent }); }), this._updatePristine(e, this), this._updateTouched(e, this), this.updateValueAndValidity(e); }
    getRawValue() { return this._reduceChildren({}, (n, e, i) => (n[i] = e.getRawValue(), n)); }
    _syncPendingControls() { let n = this._reduceChildren(!1, (e, i) => i._syncPendingControls() ? !0 : e); return n && this.updateValueAndValidity({ onlySelf: !0 }), n; }
    _forEachChild(n) { Object.keys(this.controls).forEach(e => { let i = this.controls[e]; i && n(i, e); }); }
    _setUpControls() { this._forEachChild(n => { n.setParent(this), n._registerOnCollectionChange(this._onCollectionChange); }); }
    _updateValue() { this.value = this._reduceValue(); }
    _anyControls(n) { for (let [e, i] of Object.entries(this.controls))
        if (this.contains(e) && n(i))
            return !0; return !1; }
    _reduceValue() { let n = {}; return this._reduceChildren(n, (e, i, r) => ((i.enabled || this.disabled) && (e[r] = i.value), e)); }
    _reduceChildren(n, e) { let i = n; return this._forEachChild((r, o) => { i = e(i, r, o); }), i; }
    _allControlsDisabled() { for (let n of Object.keys(this.controls))
        if (this.controls[n].enabled)
            return !1; return Object.keys(this.controls).length > 0 || this.disabled; }
    _find(n) { return this.controls.hasOwnProperty(n) ? this.controls[n] : null; }
};
var Bn = v, Un = t => t instanceof v, X = class extends v {
}, Hn = t => t instanceof X, D = new F("", { providedIn: "root", factory: () => T }), T = "always";
function ee(t, n) { return [...n.path, t]; }
function j(t, n, e = T) { ce(t, n), n.valueAccessor.writeValue(t.value), (t.disabled || e === "always") && n.valueAccessor.setDisabledState?.(t.disabled), St(t, n), Ot(t, n), Nt(t, n), It(t, n); }
function Y(t, n, e = !0) { let i = () => { }; n.valueAccessor && (n.valueAccessor.registerOnChange(i), n.valueAccessor.registerOnTouched(i)), J(t, n), t && (n._invokeOnDestroyCallbacks(), t._registerOnCollectionChange(() => { })); }
function K(t, n) { t.forEach(e => { e.registerOnValidatorChange && e.registerOnValidatorChange(n); }); }
function It(t, n) { if (n.valueAccessor.setDisabledState) {
    let e = i => { n.valueAccessor.setDisabledState(i); };
    t.registerOnDisabledChange(e), n._registerOnDestroy(() => { t._unregisterOnDisabledChange(e); });
} }
function ce(t, n) { let e = Le(t); n.validator !== null ? t.setValidators(_e(e, n.validator)) : typeof e == "function" && t.setValidators([e]); let i = We(t); n.asyncValidator !== null ? t.setAsyncValidators(_e(i, n.asyncValidator)) : typeof i == "function" && t.setAsyncValidators([i]); let r = () => t.updateValueAndValidity(); K(n._rawValidators, r), K(n._rawAsyncValidators, r); }
function J(t, n) { let e = !1; if (t !== null) {
    if (n.validator !== null) {
        let r = Le(t);
        if (Array.isArray(r) && r.length > 0) {
            let o = r.filter(a => a !== n.validator);
            o.length !== r.length && (e = !0, t.setValidators(o));
        }
    }
    if (n.asyncValidator !== null) {
        let r = We(t);
        if (Array.isArray(r) && r.length > 0) {
            let o = r.filter(a => a !== n.asyncValidator);
            o.length !== r.length && (e = !0, t.setAsyncValidators(o));
        }
    }
} let i = () => { }; return K(n._rawValidators, i), K(n._rawAsyncValidators, i), e; }
function St(t, n) { n.valueAccessor.registerOnChange(e => { t._pendingValue = e, t._pendingChange = !0, t._pendingDirty = !0, t.updateOn === "change" && ze(t, n); }); }
function Nt(t, n) { n.valueAccessor.registerOnTouched(() => { t._pendingTouched = !0, t.updateOn === "blur" && t._pendingChange && ze(t, n), t.updateOn !== "submit" && t.markAsTouched(); }); }
function ze(t, n) { t._pendingDirty && t.markAsDirty(), t.setValue(t._pendingValue, { emitModelToViewChange: !1 }), n.viewToModelUpdate(t._pendingValue), t._pendingChange = !1; }
function Ot(t, n) { let e = (i, r) => { n.valueAccessor.writeValue(i), r && n.viewToModelUpdate(i); }; t.registerOnChange(e), n._registerOnDestroy(() => { t._unregisterOnChange(e); }); }
function Ze(t, n) { t == null, ce(t, n); }
function xt(t, n) { return J(t, n); }
function he(t, n) { if (!t.hasOwnProperty("model"))
    return !1; let e = t.model; return e.isFirstChange() ? !0 : !Object.is(n, e.currentValue); }
function Pt(t) { return Object.getPrototypeOf(t.constructor) === V; }
function Xe(t, n) { t._syncPendingControls(), n.forEach(e => { let i = e.control; i.updateOn === "submit" && i._pendingChange && (e.viewToModelUpdate(i._pendingValue), i._pendingChange = !1); }); }
function fe(t, n) { if (!n)
    return null; Array.isArray(n); let e, i, r; return n.forEach(o => { o.constructor === we ? e = o : Pt(o) ? i = o : r = o; }), r || i || e || null; }
function Rt(t, n) { let e = t.indexOf(n); e > -1 && t.splice(e, 1); }
var kt = { provide: u, useExisting: l(() => Ye) }, N = Promise.resolve(), Ye = (() => { class t extends u {
    callSetDisabledState;
    get submitted() { return m(this.submittedReactive); }
    _submitted = O(() => this.submittedReactive());
    submittedReactive = x(!1);
    _directives = new Set;
    form;
    ngSubmit = new C;
    options;
    constructor(e, i, r) { super(), this.callSetDisabledState = r, this.form = new v({}, ae(e), le(i)); }
    ngAfterViewInit() { this._setUpdateStrategy(); }
    get formDirective() { return this; }
    get control() { return this.form; }
    get path() { return []; }
    get controls() { return this.form.controls; }
    addControl(e) { N.then(() => { let i = this._findContainer(e.path); e.control = i.registerControl(e.name, e.control), j(e.control, e, this.callSetDisabledState), e.control.updateValueAndValidity({ emitEvent: !1 }), this._directives.add(e); }); }
    getControl(e) { return this.form.get(e.path); }
    removeControl(e) { N.then(() => { let i = this._findContainer(e.path); i && i.removeControl(e.name), this._directives.delete(e); }); }
    addFormGroup(e) { N.then(() => { let i = this._findContainer(e.path), r = new v({}); Ze(r, e), i.registerControl(e.name, r), r.updateValueAndValidity({ emitEvent: !1 }); }); }
    removeFormGroup(e) { N.then(() => { let i = this._findContainer(e.path); i && i.removeControl(e.name); }); }
    getFormGroup(e) { return this.form.get(e.path); }
    updateModel(e, i) { N.then(() => { this.form.get(e.path).setValue(i); }); }
    setValue(e) { this.control.setValue(e); }
    onSubmit(e) { return this.submittedReactive.set(!0), Xe(this.form, this._directives), this.ngSubmit.emit(e), this.form._events.next(new z(this.control)), e?.target?.method === "dialog"; }
    onReset() { this.resetForm(); }
    resetForm(e = void 0) { this.form.reset(e), this.submittedReactive.set(!1), this.form._events.next(new Z(this.form)); }
    _setUpdateStrategy() { this.options && this.options.updateOn != null && (this.form._updateOn = this.options.updateOn); }
    _findContainer(e) { return e.pop(), e.length ? this.form.get(e) : this.form; }
    static ɵfac = function (i) { return new (i || t)(s.ɵɵdirectiveInject(d, 10), s.ɵɵdirectiveInject(y, 10), s.ɵɵdirectiveInject(D, 8)); };
    static ɵdir = s.ɵɵdefineDirective({ type: t, selectors: [["form", 3, "ngNoForm", "", 3, "formGroup", ""], ["ng-form"], ["", "ngForm", ""]], hostBindings: function (i, r) { i & 1 && s.ɵɵlistener("submit", function (a) { return r.onSubmit(a); })("reset", function () { return r.onReset(); }); }, inputs: { options: [0, "ngFormOptions", "options"] }, outputs: { ngSubmit: "ngSubmit" }, exportAs: ["ngForm"], standalone: !1, features: [s.ɵɵProvidersFeature([kt]), s.ɵɵInheritDefinitionFeature] });
} return t; })();
function Ce(t, n) { let e = t.indexOf(n); e > -1 && t.splice(e, 1); }
function Ve(t) { return typeof t == "object" && t !== null && Object.keys(t).length === 2 && "value" in t && "disabled" in t; }
var E = class extends w {
    defaultValue = null;
    _onChange = [];
    _pendingValue;
    _pendingChange = !1;
    constructor(n = null, e, i) { super(ue(e), de(i, e)), this._applyFormState(n), this._setUpdateStrategy(e), this._initObservables(), this.updateValueAndValidity({ onlySelf: !0, emitEvent: !!this.asyncValidator }), Q(e) && (e.nonNullable || e.initialValueIsDefault) && (Ve(n) ? this.defaultValue = n.value : this.defaultValue = n); }
    setValue(n, e = {}) { this.value = this._pendingValue = n, this._onChange.length && e.emitModelToViewChange !== !1 && this._onChange.forEach(i => i(this.value, e.emitViewToModelChange !== !1)), this.updateValueAndValidity(e); }
    patchValue(n, e = {}) { this.setValue(n, e); }
    reset(n = this.defaultValue, e = {}) { this._applyFormState(n), this.markAsPristine(e), this.markAsUntouched(e), this.setValue(this.value, e), this._pendingChange = !1; }
    _updateValue() { }
    _anyControls(n) { return !1; }
    _allControlsDisabled() { return this.disabled; }
    registerOnChange(n) { this._onChange.push(n); }
    _unregisterOnChange(n) { Ce(this._onChange, n); }
    registerOnDisabledChange(n) { this._onDisabledChange.push(n); }
    _unregisterOnDisabledChange(n) { Ce(this._onDisabledChange, n); }
    _forEachChild(n) { }
    _syncPendingControls() { return this.updateOn === "submit" && (this._pendingDirty && this.markAsDirty(), this._pendingTouched && this.markAsTouched(), this._pendingChange) ? (this.setValue(this._pendingValue, { onlySelf: !0, emitModelToViewChange: !1 }), !0) : !1; }
    _applyFormState(n) { Ve(n) ? (this.value = this._pendingValue = n.value, n.disabled ? this.disable({ onlySelf: !0, emitEvent: !1 }) : this.enable({ onlySelf: !0, emitEvent: !1 })) : this.value = this._pendingValue = n; }
}, Wn = E, jt = t => t instanceof E, Ke = (() => { class t extends u {
    _parent;
    ngOnInit() { this._checkParentType(), this.formDirective.addFormGroup(this); }
    ngOnDestroy() { this.formDirective && this.formDirective.removeFormGroup(this); }
    get control() { return this.formDirective.getFormGroup(this); }
    get path() { return ee(this.name == null ? this.name : this.name.toString(), this._parent); }
    get formDirective() { return this._parent ? this._parent.formDirective : null; }
    _checkParentType() { }
    static ɵfac = (() => { let e; return function (r) { return (e || (e = s.ɵɵgetInheritedFactory(t)))(r || t); }; })();
    static ɵdir = s.ɵɵdefineDirective({ type: t, standalone: !1, features: [s.ɵɵInheritDefinitionFeature] });
} return t; })();
var Gt = { provide: u, useExisting: l(() => Tt) }, Tt = (() => { class t extends Ke {
    name = "";
    constructor(e, i, r) { super(), this._parent = e, this._setValidators(i), this._setAsyncValidators(r); }
    _checkParentType() { !(this._parent instanceof t) && this._parent instanceof Ye; }
    static ɵfac = function (i) { return new (i || t)(s.ɵɵdirectiveInject(u, 5), s.ɵɵdirectiveInject(d, 10), s.ɵɵdirectiveInject(y, 10)); };
    static ɵdir = s.ɵɵdefineDirective({ type: t, selectors: [["", "ngModelGroup", ""]], inputs: { name: [0, "ngModelGroup", "name"] }, exportAs: ["ngModelGroup"], standalone: !1, features: [s.ɵɵProvidersFeature([Gt]), s.ɵɵInheritDefinitionFeature] });
} return t; })(), Bt = { provide: f, useExisting: l(() => Ut) }, De = Promise.resolve(), Ut = (() => { class t extends f {
    _changeDetectorRef;
    callSetDisabledState;
    control = new E;
    static ngAcceptInputType_isDisabled;
    _registered = !1;
    viewModel;
    name = "";
    isDisabled;
    model;
    options;
    update = new C;
    constructor(e, i, r, o, a, p) { super(), this._changeDetectorRef = a, this.callSetDisabledState = p, this._parent = e, this._setValidators(i), this._setAsyncValidators(r), this.valueAccessor = fe(this, o); }
    ngOnChanges(e) { if (this._checkForErrors(), !this._registered || "name" in e) {
        if (this._registered && (this._checkName(), this.formDirective)) {
            let i = e.name.previousValue;
            this.formDirective.removeControl({ name: i, path: this._getPath(i) });
        }
        this._setUpControl();
    } "isDisabled" in e && this._updateDisabled(e), he(e, this.viewModel) && (this._updateValue(this.model), this.viewModel = this.model); }
    ngOnDestroy() { this.formDirective && this.formDirective.removeControl(this); }
    get path() { return this._getPath(this.name); }
    get formDirective() { return this._parent ? this._parent.formDirective : null; }
    viewToModelUpdate(e) { this.viewModel = e, this.update.emit(e); }
    _setUpControl() { this._setUpdateStrategy(), this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this), this._registered = !0; }
    _setUpdateStrategy() { this.options && this.options.updateOn != null && (this.control._updateOn = this.options.updateOn); }
    _isStandalone() { return !this._parent || !!(this.options && this.options.standalone); }
    _setUpStandalone() { j(this.control, this, this.callSetDisabledState), this.control.updateValueAndValidity({ emitEvent: !1 }); }
    _checkForErrors() { this._checkName(); }
    _checkName() { this.options && this.options.name && (this.name = this.options.name), !this._isStandalone() && this.name; }
    _updateValue(e) { De.then(() => { this.control.setValue(e, { emitViewToModelChange: !1 }), this._changeDetectorRef?.markForCheck(); }); }
    _updateDisabled(e) { let i = e.isDisabled.currentValue, r = i !== 0 && re(i); De.then(() => { r && !this.control.disabled ? this.control.disable() : !r && this.control.disabled && this.control.enable(), this._changeDetectorRef?.markForCheck(); }); }
    _getPath(e) { return this._parent ? ee(e, this._parent) : [e]; }
    static ɵfac = function (i) { return new (i || t)(s.ɵɵdirectiveInject(u, 9), s.ɵɵdirectiveInject(d, 10), s.ɵɵdirectiveInject(y, 10), s.ɵɵdirectiveInject(g, 10), s.ɵɵdirectiveInject(Me, 8), s.ɵɵdirectiveInject(D, 8)); };
    static ɵdir = s.ɵɵdefineDirective({ type: t, selectors: [["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""]], inputs: { name: "name", isDisabled: [0, "disabled", "isDisabled"], model: [0, "ngModel", "model"], options: [0, "ngModelOptions", "options"] }, outputs: { update: "ngModelChange" }, exportAs: ["ngModel"], standalone: !1, features: [s.ɵɵProvidersFeature([Bt]), s.ɵɵInheritDefinitionFeature, s.ɵɵNgOnChangesFeature] });
} return t; })();
var $n = (() => { class t {
    static ɵfac = function (i) { return new (i || t); };
    static ɵdir = s.ɵɵdefineDirective({ type: t, selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]], hostAttrs: ["novalidate", ""], standalone: !1 });
} return t; })(), Ht = { provide: g, useExisting: l(() => Lt), multi: !0 }, Lt = (() => { class t extends V {
    writeValue(e) { let i = e ?? ""; this.setProperty("value", i); }
    registerOnChange(e) { this.onChange = i => { e(i == "" ? null : parseFloat(i)); }; }
    static ɵfac = (() => { let e; return function (r) { return (e || (e = s.ɵɵgetInheritedFactory(t)))(r || t); }; })();
    static ɵdir = s.ɵɵdefineDirective({ type: t, selectors: [["input", "type", "number", "formControlName", ""], ["input", "type", "number", "formControl", ""], ["input", "type", "number", "ngModel", ""]], hostBindings: function (i, r) { i & 1 && s.ɵɵlistener("input", function (a) { return r.onChange(a.target.value); })("blur", function () { return r.onTouched(); }); }, standalone: !1, features: [s.ɵɵProvidersFeature([Ht]), s.ɵɵInheritDefinitionFeature] });
} return t; })(), Wt = { provide: g, useExisting: l(() => qt), multi: !0 };
var $t = (() => { class t {
    _accessors = [];
    add(e, i) { this._accessors.push([e, i]); }
    remove(e) { for (let i = this._accessors.length - 1; i >= 0; --i)
        if (this._accessors[i][1] === e) {
            this._accessors.splice(i, 1);
            return;
        } }
    select(e) { this._accessors.forEach(i => { this._isSameGroup(i, e) && i[1] !== e && i[1].fireUncheck(e.value); }); }
    _isSameGroup(e, i) { return e[0].control ? e[0]._parent === i._control._parent && e[1].name === i.name : !1; }
    static ɵfac = function (i) { return new (i || t); };
    static ɵprov = s.ɵɵdefineInjectable({ token: t, factory: t.ɵfac, providedIn: "root" });
} return t; })(), qt = (() => { class t extends V {
    _registry;
    _injector;
    _state;
    _control;
    _fn;
    setDisabledStateFired = !1;
    onChange = () => { };
    name;
    formControlName;
    value;
    callSetDisabledState = P(D, { optional: !0 }) ?? T;
    constructor(e, i, r, o) { super(e, i), this._registry = r, this._injector = o; }
    ngOnInit() { this._control = this._injector.get(f), this._checkName(), this._registry.add(this._control, this); }
    ngOnDestroy() { this._registry.remove(this); }
    writeValue(e) { this._state = e === this.value, this.setProperty("checked", this._state); }
    registerOnChange(e) { this._fn = e, this.onChange = () => { e(this.value), this._registry.select(this); }; }
    setDisabledState(e) { (this.setDisabledStateFired || e || this.callSetDisabledState === "whenDisabledForLegacyCode") && this.setProperty("disabled", e), this.setDisabledStateFired = !0; }
    fireUncheck(e) { this.writeValue(e); }
    _checkName() { this.name && this.formControlName && (this.name, this.formControlName), !this.name && this.formControlName && (this.name = this.formControlName); }
    static ɵfac = function (i) { return new (i || t)(s.ɵɵdirectiveInject(s.Renderer2), s.ɵɵdirectiveInject(s.ElementRef), s.ɵɵdirectiveInject($t), s.ɵɵdirectiveInject(s.Injector)); };
    static ɵdir = s.ɵɵdefineDirective({ type: t, selectors: [["input", "type", "radio", "formControlName", ""], ["input", "type", "radio", "formControl", ""], ["input", "type", "radio", "ngModel", ""]], hostBindings: function (i, r) { i & 1 && s.ɵɵlistener("change", function () { return r.onChange(); })("blur", function () { return r.onTouched(); }); }, inputs: { name: "name", formControlName: "formControlName", value: "value" }, standalone: !1, features: [s.ɵɵProvidersFeature([Wt]), s.ɵɵInheritDefinitionFeature] });
} return t; })(), zt = { provide: g, useExisting: l(() => Zt), multi: !0 }, Zt = (() => { class t extends V {
    writeValue(e) { this.setProperty("value", parseFloat(e)); }
    registerOnChange(e) { this.onChange = i => { e(i == "" ? null : parseFloat(i)); }; }
    static ɵfac = (() => { let e; return function (r) { return (e || (e = s.ɵɵgetInheritedFactory(t)))(r || t); }; })();
    static ɵdir = s.ɵɵdefineDirective({ type: t, selectors: [["input", "type", "range", "formControlName", ""], ["input", "type", "range", "formControl", ""], ["input", "type", "range", "ngModel", ""]], hostBindings: function (i, r) { i & 1 && s.ɵɵlistener("change", function (a) { return r.onChange(a.target.value); })("input", function (a) { return r.onChange(a.target.value); })("blur", function () { return r.onTouched(); }); }, standalone: !1, features: [s.ɵɵProvidersFeature([zt]), s.ɵɵInheritDefinitionFeature] });
} return t; })(), ge = new F(""), Xt = { provide: f, useExisting: l(() => Yt) }, Yt = (() => { class t extends f {
    _ngModelWarningConfig;
    callSetDisabledState;
    viewModel;
    form;
    set isDisabled(e) { }
    model;
    update = new C;
    static _ngModelWarningSentOnce = !1;
    _ngModelWarningSent = !1;
    constructor(e, i, r, o, a) { super(), this._ngModelWarningConfig = o, this.callSetDisabledState = a, this._setValidators(e), this._setAsyncValidators(i), this.valueAccessor = fe(this, r); }
    ngOnChanges(e) { if (this._isControlChanged(e)) {
        let i = e.form.previousValue;
        i && Y(i, this, !1), j(this.form, this, this.callSetDisabledState), this.form.updateValueAndValidity({ emitEvent: !1 });
    } he(e, this.viewModel) && (this.form.setValue(this.model), this.viewModel = this.model); }
    ngOnDestroy() { this.form && Y(this.form, this, !1); }
    get path() { return []; }
    get control() { return this.form; }
    viewToModelUpdate(e) { this.viewModel = e, this.update.emit(e); }
    _isControlChanged(e) { return e.hasOwnProperty("form"); }
    static ɵfac = function (i) { return new (i || t)(s.ɵɵdirectiveInject(d, 10), s.ɵɵdirectiveInject(y, 10), s.ɵɵdirectiveInject(g, 10), s.ɵɵdirectiveInject(ge, 8), s.ɵɵdirectiveInject(D, 8)); };
    static ɵdir = s.ɵɵdefineDirective({ type: t, selectors: [["", "formControl", ""]], inputs: { form: [0, "formControl", "form"], isDisabled: [0, "disabled", "isDisabled"], model: [0, "ngModel", "model"] }, outputs: { update: "ngModelChange" }, exportAs: ["ngForm"], standalone: !1, features: [s.ɵɵProvidersFeature([Xt]), s.ɵɵInheritDefinitionFeature, s.ɵɵNgOnChangesFeature] });
} return t; })(), Kt = { provide: u, useExisting: l(() => Je) }, Je = (() => { class t extends u {
    callSetDisabledState;
    get submitted() { return m(this._submittedReactive); }
    set submitted(e) { this._submittedReactive.set(e); }
    _submitted = O(() => this._submittedReactive());
    _submittedReactive = x(!1);
    _oldForm;
    _onCollectionChange = () => this._updateDomValue();
    directives = [];
    form = null;
    ngSubmit = new C;
    constructor(e, i, r) { super(), this.callSetDisabledState = r, this._setValidators(e), this._setAsyncValidators(i); }
    ngOnChanges(e) { e.hasOwnProperty("form") && (this._updateValidators(), this._updateDomValue(), this._updateRegistrations(), this._oldForm = this.form); }
    ngOnDestroy() { this.form && (J(this.form, this), this.form._onCollectionChange === this._onCollectionChange && this.form._registerOnCollectionChange(() => { })); }
    get formDirective() { return this; }
    get control() { return this.form; }
    get path() { return []; }
    addControl(e) { let i = this.form.get(e.path); return j(i, e, this.callSetDisabledState), i.updateValueAndValidity({ emitEvent: !1 }), this.directives.push(e), i; }
    getControl(e) { return this.form.get(e.path); }
    removeControl(e) { Y(e.control || null, e, !1), Rt(this.directives, e); }
    addFormGroup(e) { this._setUpFormContainer(e); }
    removeFormGroup(e) { this._cleanUpFormContainer(e); }
    getFormGroup(e) { return this.form.get(e.path); }
    addFormArray(e) { this._setUpFormContainer(e); }
    removeFormArray(e) { this._cleanUpFormContainer(e); }
    getFormArray(e) { return this.form.get(e.path); }
    updateModel(e, i) { this.form.get(e.path).setValue(i); }
    onSubmit(e) { return this._submittedReactive.set(!0), Xe(this.form, this.directives), this.ngSubmit.emit(e), this.form._events.next(new z(this.control)), e?.target?.method === "dialog"; }
    onReset() { this.resetForm(); }
    resetForm(e = void 0, i = {}) { this.form.reset(e, i), this._submittedReactive.set(!1), i?.emitEvent !== !1 && this.form._events.next(new Z(this.form)); }
    _updateDomValue() { this.directives.forEach(e => { let i = e.control, r = this.form.get(e.path); i !== r && (Y(i || null, e), jt(r) && (j(r, e, this.callSetDisabledState), e.control = r)); }), this.form._updateTreeValidity({ emitEvent: !1 }); }
    _setUpFormContainer(e) { let i = this.form.get(e.path); Ze(i, e), i.updateValueAndValidity({ emitEvent: !1 }); }
    _cleanUpFormContainer(e) { if (this.form) {
        let i = this.form.get(e.path);
        i && xt(i, e) && i.updateValueAndValidity({ emitEvent: !1 });
    } }
    _updateRegistrations() { this.form._registerOnCollectionChange(this._onCollectionChange), this._oldForm && this._oldForm._registerOnCollectionChange(() => { }); }
    _updateValidators() { ce(this.form, this), this._oldForm && J(this._oldForm, this); }
    static ɵfac = function (i) { return new (i || t)(s.ɵɵdirectiveInject(d, 10), s.ɵɵdirectiveInject(y, 10), s.ɵɵdirectiveInject(D, 8)); };
    static ɵdir = s.ɵɵdefineDirective({ type: t, selectors: [["", "formGroup", ""]], hostBindings: function (i, r) { i & 1 && s.ɵɵlistener("submit", function (a) { return r.onSubmit(a); })("reset", function () { return r.onReset(); }); }, inputs: { form: [0, "formGroup", "form"] }, outputs: { ngSubmit: "ngSubmit" }, exportAs: ["ngForm"], standalone: !1, features: [s.ɵɵProvidersFeature([Kt]), s.ɵɵInheritDefinitionFeature, s.ɵɵNgOnChangesFeature] });
} return t; })(), Jt = { provide: u, useExisting: l(() => Qe) }, Qe = (() => { class t extends Ke {
    name = null;
    constructor(e, i, r) { super(), this._parent = e, this._setValidators(i), this._setAsyncValidators(r); }
    _checkParentType() { tt(this._parent); }
    static ɵfac = function (i) { return new (i || t)(s.ɵɵdirectiveInject(u, 13), s.ɵɵdirectiveInject(d, 10), s.ɵɵdirectiveInject(y, 10)); };
    static ɵdir = s.ɵɵdefineDirective({ type: t, selectors: [["", "formGroupName", ""]], inputs: { name: [0, "formGroupName", "name"] }, standalone: !1, features: [s.ɵɵProvidersFeature([Jt]), s.ɵɵInheritDefinitionFeature] });
} return t; })(), Qt = { provide: u, useExisting: l(() => et) }, et = (() => { class t extends u {
    _parent;
    name = null;
    constructor(e, i, r) { super(), this._parent = e, this._setValidators(i), this._setAsyncValidators(r); }
    ngOnInit() { tt(this._parent), this.formDirective.addFormArray(this); }
    ngOnDestroy() { this.formDirective?.removeFormArray(this); }
    get control() { return this.formDirective.getFormArray(this); }
    get formDirective() { return this._parent ? this._parent.formDirective : null; }
    get path() { return ee(this.name == null ? this.name : this.name.toString(), this._parent); }
    static ɵfac = function (i) { return new (i || t)(s.ɵɵdirectiveInject(u, 13), s.ɵɵdirectiveInject(d, 10), s.ɵɵdirectiveInject(y, 10)); };
    static ɵdir = s.ɵɵdefineDirective({ type: t, selectors: [["", "formArrayName", ""]], inputs: { name: [0, "formArrayName", "name"] }, standalone: !1, features: [s.ɵɵProvidersFeature([Qt]), s.ɵɵInheritDefinitionFeature] });
} return t; })();
function tt(t) { return !(t instanceof Qe) && !(t instanceof Je) && !(t instanceof et); }
var en = { provide: f, useExisting: l(() => tn) }, tn = (() => { class t extends f {
    _ngModelWarningConfig;
    _added = !1;
    viewModel;
    control;
    name = null;
    set isDisabled(e) { }
    model;
    update = new C;
    static _ngModelWarningSentOnce = !1;
    _ngModelWarningSent = !1;
    constructor(e, i, r, o, a) { super(), this._ngModelWarningConfig = a, this._parent = e, this._setValidators(i), this._setAsyncValidators(r), this.valueAccessor = fe(this, o); }
    ngOnChanges(e) { this._added || this._setUpControl(), he(e, this.viewModel) && (this.viewModel = this.model, this.formDirective.updateModel(this, this.model)); }
    ngOnDestroy() { this.formDirective && this.formDirective.removeControl(this); }
    viewToModelUpdate(e) { this.viewModel = e, this.update.emit(e); }
    get path() { return ee(this.name == null ? this.name : this.name.toString(), this._parent); }
    get formDirective() { return this._parent ? this._parent.formDirective : null; }
    _setUpControl() { this.control = this.formDirective.addControl(this), this._added = !0; }
    static ɵfac = function (i) { return new (i || t)(s.ɵɵdirectiveInject(u, 13), s.ɵɵdirectiveInject(d, 10), s.ɵɵdirectiveInject(y, 10), s.ɵɵdirectiveInject(g, 10), s.ɵɵdirectiveInject(ge, 8)); };
    static ɵdir = s.ɵɵdefineDirective({ type: t, selectors: [["", "formControlName", ""]], inputs: { name: [0, "formControlName", "name"], isDisabled: [0, "disabled", "isDisabled"], model: [0, "ngModel", "model"] }, outputs: { update: "ngModelChange" }, standalone: !1, features: [s.ɵɵProvidersFeature([en]), s.ɵɵInheritDefinitionFeature, s.ɵɵNgOnChangesFeature] });
} return t; })();
var nn = { provide: g, useExisting: l(() => it), multi: !0 };
function nt(t, n) { return t == null ? `${n}` : (n && typeof n == "object" && (n = "Object"), `${t}: ${n}`.slice(0, 50)); }
function rn(t) { return t.split(":")[0]; }
var it = (() => { class t extends V {
    value;
    _optionMap = new Map;
    _idCounter = 0;
    set compareWith(e) { this._compareWith = e; }
    _compareWith = Object.is;
    appRefInjector = P(ct).injector;
    destroyRef = P(ht);
    cdr = P(Me);
    _queuedWrite = !1;
    _writeValueAfterRender() { this._queuedWrite || this.appRefInjector.destroyed || (this._queuedWrite = !0, ft({ write: () => { this.destroyRef.destroyed || (this._queuedWrite = !1, this.writeValue(this.value)); } }, { injector: this.appRefInjector })); }
    writeValue(e) { this.cdr.markForCheck(), this.value = e; let i = this._getOptionId(e), r = nt(i, e); this.setProperty("value", r); }
    registerOnChange(e) { this.onChange = i => { this.value = this._getOptionValue(i), e(this.value); }; }
    _registerOption() { return (this._idCounter++).toString(); }
    _getOptionId(e) { for (let i of this._optionMap.keys())
        if (this._compareWith(this._optionMap.get(i), e))
            return i; return null; }
    _getOptionValue(e) { let i = rn(e); return this._optionMap.has(i) ? this._optionMap.get(i) : e; }
    static ɵfac = (() => { let e; return function (r) { return (e || (e = s.ɵɵgetInheritedFactory(t)))(r || t); }; })();
    static ɵdir = s.ɵɵdefineDirective({ type: t, selectors: [["select", "formControlName", "", 3, "multiple", ""], ["select", "formControl", "", 3, "multiple", ""], ["select", "ngModel", "", 3, "multiple", ""]], hostBindings: function (i, r) { i & 1 && s.ɵɵlistener("change", function (a) { return r.onChange(a.target.value); })("blur", function () { return r.onTouched(); }); }, inputs: { compareWith: "compareWith" }, standalone: !1, features: [s.ɵɵProvidersFeature([nn]), s.ɵɵInheritDefinitionFeature] });
} return t; })(), qn = (() => { class t {
    _element;
    _renderer;
    _select;
    id;
    constructor(e, i, r) { this._element = e, this._renderer = i, this._select = r, this._select && (this.id = this._select._registerOption()); }
    set ngValue(e) { this._select != null && (this._select._optionMap.set(this.id, e), this._setElementValue(nt(this.id, e)), this._select._writeValueAfterRender()); }
    set value(e) { this._setElementValue(e), this._select && this._select._writeValueAfterRender(); }
    _setElementValue(e) { this._renderer.setProperty(this._element.nativeElement, "value", e); }
    ngOnDestroy() { this._select && (this._select._optionMap.delete(this.id), this._select._writeValueAfterRender()); }
    static ɵfac = function (i) { return new (i || t)(s.ɵɵdirectiveInject(s.ElementRef), s.ɵɵdirectiveInject(s.Renderer2), s.ɵɵdirectiveInject(it, 9)); };
    static ɵdir = s.ɵɵdefineDirective({ type: t, selectors: [["option"]], inputs: { ngValue: "ngValue", value: "value" }, standalone: !1 });
} return t; })(), sn = { provide: g, useExisting: l(() => rt), multi: !0 };
function be(t, n) { return t == null ? `${n}` : (typeof n == "string" && (n = `'${n}'`), n && typeof n == "object" && (n = "Object"), `${t}: ${n}`.slice(0, 50)); }
function on(t) { return t.split(":")[0]; }
var rt = (() => { class t extends V {
    value;
    _optionMap = new Map;
    _idCounter = 0;
    set compareWith(e) { this._compareWith = e; }
    _compareWith = Object.is;
    writeValue(e) { this.value = e; let i; if (Array.isArray(e)) {
        let r = e.map(o => this._getOptionId(o));
        i = (o, a) => { o._setSelected(r.indexOf(a.toString()) > -1); };
    }
    else
        i = (r, o) => { r._setSelected(!1); }; this._optionMap.forEach(i); }
    registerOnChange(e) { this.onChange = i => { let r = [], o = i.selectedOptions; if (o !== void 0) {
        let a = o;
        for (let p = 0; p < a.length; p++) {
            let B = a[p], te = this._getOptionValue(B.value);
            r.push(te);
        }
    }
    else {
        let a = i.options;
        for (let p = 0; p < a.length; p++) {
            let B = a[p];
            if (B.selected) {
                let te = this._getOptionValue(B.value);
                r.push(te);
            }
        }
    } this.value = r, e(r); }; }
    _registerOption(e) { let i = (this._idCounter++).toString(); return this._optionMap.set(i, e), i; }
    _getOptionId(e) { for (let i of this._optionMap.keys())
        if (this._compareWith(this._optionMap.get(i)._value, e))
            return i; return null; }
    _getOptionValue(e) { let i = on(e); return this._optionMap.has(i) ? this._optionMap.get(i)._value : e; }
    static ɵfac = (() => { let e; return function (r) { return (e || (e = s.ɵɵgetInheritedFactory(t)))(r || t); }; })();
    static ɵdir = s.ɵɵdefineDirective({ type: t, selectors: [["select", "multiple", "", "formControlName", ""], ["select", "multiple", "", "formControl", ""], ["select", "multiple", "", "ngModel", ""]], hostBindings: function (i, r) { i & 1 && s.ɵɵlistener("change", function (a) { return r.onChange(a.target); })("blur", function () { return r.onTouched(); }); }, inputs: { compareWith: "compareWith" }, standalone: !1, features: [s.ɵɵProvidersFeature([sn]), s.ɵɵInheritDefinitionFeature] });
} return t; })(), zn = (() => { class t {
    _element;
    _renderer;
    _select;
    id;
    _value;
    constructor(e, i, r) { this._element = e, this._renderer = i, this._select = r, this._select && (this.id = this._select._registerOption(this)); }
    set ngValue(e) { this._select != null && (this._value = e, this._setElementValue(be(this.id, e)), this._select.writeValue(this._select.value)); }
    set value(e) { this._select ? (this._value = e, this._setElementValue(be(this.id, e)), this._select.writeValue(this._select.value)) : this._setElementValue(e); }
    _setElementValue(e) { this._renderer.setProperty(this._element.nativeElement, "value", e); }
    _setSelected(e) { this._renderer.setProperty(this._element.nativeElement, "selected", e); }
    ngOnDestroy() { this._select && (this._select._optionMap.delete(this.id), this._select.writeValue(this._select.value)); }
    static ɵfac = function (i) { return new (i || t)(s.ɵɵdirectiveInject(s.ElementRef), s.ɵɵdirectiveInject(s.Renderer2), s.ɵɵdirectiveInject(rt, 9)); };
    static ɵdir = s.ɵɵdefineDirective({ type: t, selectors: [["option"]], inputs: { ngValue: "ngValue", value: "value" }, standalone: !1 });
} return t; })();
function st(t) { return typeof t == "number" ? t : parseInt(t, 10); }
function ot(t) { return typeof t == "number" ? t : parseFloat(t); }
var b = (() => { class t {
    _validator = H;
    _onChange;
    _enabled;
    ngOnChanges(e) { if (this.inputName in e) {
        let i = this.normalizeInput(e[this.inputName].currentValue);
        this._enabled = this.enabled(i), this._validator = this._enabled ? this.createValidator(i) : H, this._onChange && this._onChange();
    } }
    validate(e) { return this._validator(e); }
    registerOnValidatorChange(e) { this._onChange = e; }
    enabled(e) { return e != null; }
    static ɵfac = function (i) { return new (i || t); };
    static ɵdir = s.ɵɵdefineDirective({ type: t, features: [s.ɵɵNgOnChangesFeature] });
} return t; })(), an = { provide: d, useExisting: l(() => ln), multi: !0 }, ln = (() => { class t extends b {
    max;
    inputName = "max";
    normalizeInput = e => ot(e);
    createValidator = e => Ie(e);
    static ɵfac = (() => { let e; return function (r) { return (e || (e = s.ɵɵgetInheritedFactory(t)))(r || t); }; })();
    static ɵdir = s.ɵɵdefineDirective({ type: t, selectors: [["input", "type", "number", "max", "", "formControlName", ""], ["input", "type", "number", "max", "", "formControl", ""], ["input", "type", "number", "max", "", "ngModel", ""]], hostVars: 1, hostBindings: function (i, r) { i & 2 && s.ɵɵattribute("max", r._enabled ? r.max : null); }, inputs: { max: "max" }, standalone: !1, features: [s.ɵɵProvidersFeature([an]), s.ɵɵInheritDefinitionFeature] });
} return t; })(), un = { provide: d, useExisting: l(() => dn), multi: !0 }, dn = (() => { class t extends b {
    min;
    inputName = "min";
    normalizeInput = e => ot(e);
    createValidator = e => Fe(e);
    static ɵfac = (() => { let e; return function (r) { return (e || (e = s.ɵɵgetInheritedFactory(t)))(r || t); }; })();
    static ɵdir = s.ɵɵdefineDirective({ type: t, selectors: [["input", "type", "number", "min", "", "formControlName", ""], ["input", "type", "number", "min", "", "formControl", ""], ["input", "type", "number", "min", "", "ngModel", ""]], hostVars: 1, hostBindings: function (i, r) { i & 2 && s.ɵɵattribute("min", r._enabled ? r.min : null); }, inputs: { min: "min" }, standalone: !1, features: [s.ɵɵProvidersFeature([un]), s.ɵɵInheritDefinitionFeature] });
} return t; })(), cn = { provide: d, useExisting: l(() => at), multi: !0 }, hn = { provide: d, useExisting: l(() => fn), multi: !0 }, at = (() => { class t extends b {
    required;
    inputName = "required";
    normalizeInput = re;
    createValidator = e => Se;
    enabled(e) { return e; }
    static ɵfac = (() => { let e; return function (r) { return (e || (e = s.ɵɵgetInheritedFactory(t)))(r || t); }; })();
    static ɵdir = s.ɵɵdefineDirective({ type: t, selectors: [["", "required", "", "formControlName", "", 3, "type", "checkbox"], ["", "required", "", "formControl", "", 3, "type", "checkbox"], ["", "required", "", "ngModel", "", 3, "type", "checkbox"]], hostVars: 1, hostBindings: function (i, r) { i & 2 && s.ɵɵattribute("required", r._enabled ? "" : null); }, inputs: { required: "required" }, standalone: !1, features: [s.ɵɵProvidersFeature([cn]), s.ɵɵInheritDefinitionFeature] });
} return t; })(), fn = (() => { class t extends at {
    createValidator = e => Ne;
    static ɵfac = (() => { let e; return function (r) { return (e || (e = s.ɵɵgetInheritedFactory(t)))(r || t); }; })();
    static ɵdir = s.ɵɵdefineDirective({ type: t, selectors: [["input", "type", "checkbox", "required", "", "formControlName", ""], ["input", "type", "checkbox", "required", "", "formControl", ""], ["input", "type", "checkbox", "required", "", "ngModel", ""]], hostVars: 1, hostBindings: function (i, r) { i & 2 && s.ɵɵattribute("required", r._enabled ? "" : null); }, standalone: !1, features: [s.ɵɵProvidersFeature([hn]), s.ɵɵInheritDefinitionFeature] });
} return t; })(), gn = { provide: d, useExisting: l(() => pn), multi: !0 }, pn = (() => { class t extends b {
    email;
    inputName = "email";
    normalizeInput = re;
    createValidator = e => Oe;
    enabled(e) { return e; }
    static ɵfac = (() => { let e; return function (r) { return (e || (e = s.ɵɵgetInheritedFactory(t)))(r || t); }; })();
    static ɵdir = s.ɵɵdefineDirective({ type: t, selectors: [["", "email", "", "formControlName", ""], ["", "email", "", "formControl", ""], ["", "email", "", "ngModel", ""]], inputs: { email: "email" }, standalone: !1, features: [s.ɵɵProvidersFeature([gn]), s.ɵɵInheritDefinitionFeature] });
} return t; })(), mn = { provide: d, useExisting: l(() => _n), multi: !0 }, _n = (() => { class t extends b {
    minlength;
    inputName = "minlength";
    normalizeInput = e => st(e);
    createValidator = e => xe(e);
    static ɵfac = (() => { let e; return function (r) { return (e || (e = s.ɵɵgetInheritedFactory(t)))(r || t); }; })();
    static ɵdir = s.ɵɵdefineDirective({ type: t, selectors: [["", "minlength", "", "formControlName", ""], ["", "minlength", "", "formControl", ""], ["", "minlength", "", "ngModel", ""]], hostVars: 1, hostBindings: function (i, r) { i & 2 && s.ɵɵattribute("minlength", r._enabled ? r.minlength : null); }, inputs: { minlength: "minlength" }, standalone: !1, features: [s.ɵɵProvidersFeature([mn]), s.ɵɵInheritDefinitionFeature] });
} return t; })(), vn = { provide: d, useExisting: l(() => yn), multi: !0 }, yn = (() => { class t extends b {
    maxlength;
    inputName = "maxlength";
    normalizeInput = e => st(e);
    createValidator = e => Pe(e);
    static ɵfac = (() => { let e; return function (r) { return (e || (e = s.ɵɵgetInheritedFactory(t)))(r || t); }; })();
    static ɵdir = s.ɵɵdefineDirective({ type: t, selectors: [["", "maxlength", "", "formControlName", ""], ["", "maxlength", "", "formControl", ""], ["", "maxlength", "", "ngModel", ""]], hostVars: 1, hostBindings: function (i, r) { i & 2 && s.ɵɵattribute("maxlength", r._enabled ? r.maxlength : null); }, inputs: { maxlength: "maxlength" }, standalone: !1, features: [s.ɵɵProvidersFeature([vn]), s.ɵɵInheritDefinitionFeature] });
} return t; })(), Cn = { provide: d, useExisting: l(() => Vn), multi: !0 }, Vn = (() => { class t extends b {
    pattern;
    inputName = "pattern";
    normalizeInput = e => e;
    createValidator = e => Re(e);
    static ɵfac = (() => { let e; return function (r) { return (e || (e = s.ɵɵgetInheritedFactory(t)))(r || t); }; })();
    static ɵdir = s.ɵɵdefineDirective({ type: t, selectors: [["", "pattern", "", "formControlName", ""], ["", "pattern", "", "formControl", ""], ["", "pattern", "", "ngModel", ""]], hostVars: 1, hostBindings: function (i, r) { i & 2 && s.ɵɵattribute("pattern", r._enabled ? r.pattern : null); }, inputs: { pattern: "pattern" }, standalone: !1, features: [s.ɵɵProvidersFeature([Cn]), s.ɵɵInheritDefinitionFeature] });
} return t; })();
var lt = (() => { class t {
    static ɵfac = function (i) { return new (i || t); };
    static ɵmod = s.ɵɵdefineNgModule({ type: t });
    static ɵinj = s.ɵɵdefineInjector({});
} return t; })(), G = class extends w {
    constructor(n, e, i) { super(ue(e), de(i, e)), this.controls = n, this._initObservables(), this._setUpdateStrategy(e), this._setUpControls(), this.updateValueAndValidity({ onlySelf: !0, emitEvent: !!this.asyncValidator }); }
    controls;
    at(n) { return this.controls[this._adjustIndex(n)]; }
    push(n, e = {}) { this.controls.push(n), this._registerControl(n), this.updateValueAndValidity({ emitEvent: e.emitEvent }), this._onCollectionChange(); }
    insert(n, e, i = {}) { this.controls.splice(n, 0, e), this._registerControl(e), this.updateValueAndValidity({ emitEvent: i.emitEvent }); }
    removeAt(n, e = {}) { let i = this._adjustIndex(n); i < 0 && (i = 0), this.controls[i] && this.controls[i]._registerOnCollectionChange(() => { }), this.controls.splice(i, 1), this.updateValueAndValidity({ emitEvent: e.emitEvent }); }
    setControl(n, e, i = {}) { let r = this._adjustIndex(n); r < 0 && (r = 0), this.controls[r] && this.controls[r]._registerOnCollectionChange(() => { }), this.controls.splice(r, 1), e && (this.controls.splice(r, 0, e), this._registerControl(e)), this.updateValueAndValidity({ emitEvent: i.emitEvent }), this._onCollectionChange(); }
    get length() { return this.controls.length; }
    setValue(n, e = {}) { qe(this, !1, n), n.forEach((i, r) => { $e(this, !1, r), this.at(r).setValue(i, { onlySelf: !0, emitEvent: e.emitEvent }); }), this.updateValueAndValidity(e); }
    patchValue(n, e = {}) { n != null && (n.forEach((i, r) => { this.at(r) && this.at(r).patchValue(i, { onlySelf: !0, emitEvent: e.emitEvent }); }), this.updateValueAndValidity(e)); }
    reset(n = [], e = {}) { this._forEachChild((i, r) => { i.reset(n[r], { onlySelf: !0, emitEvent: e.emitEvent }); }), this._updatePristine(e, this), this._updateTouched(e, this), this.updateValueAndValidity(e); }
    getRawValue() { return this.controls.map(n => n.getRawValue()); }
    clear(n = {}) { this.controls.length < 1 || (this._forEachChild(e => e._registerOnCollectionChange(() => { })), this.controls.splice(0), this.updateValueAndValidity({ emitEvent: n.emitEvent })); }
    _adjustIndex(n) { return n < 0 ? n + this.length : n; }
    _syncPendingControls() { let n = this.controls.reduce((e, i) => i._syncPendingControls() ? !0 : e, !1); return n && this.updateValueAndValidity({ onlySelf: !0 }), n; }
    _forEachChild(n) { this.controls.forEach((e, i) => { n(e, i); }); }
    _updateValue() { this.value = this.controls.filter(n => n.enabled || this.disabled).map(n => n.value); }
    _anyControls(n) { return this.controls.some(e => e.enabled && n(e)); }
    _setUpControls() { this._forEachChild(n => this._registerControl(n)); }
    _allControlsDisabled() { for (let n of this.controls)
        if (n.enabled)
            return !1; return this.controls.length > 0 || this.disabled; }
    _registerControl(n) { n.setParent(this), n._registerOnCollectionChange(this._onCollectionChange); }
    _find(n) { return this.at(n) ?? null; }
}, Zn = G, Xn = t => t instanceof G;
function Ae(t) { return !!t && (t.asyncValidators !== void 0 || t.validators !== void 0 || t.updateOn !== void 0); }
var ut = (() => { class t {
    useNonNullable = !1;
    get nonNullable() { let e = new t; return e.useNonNullable = !0, e; }
    group(e, i = null) { let r = this._reduceControls(e), o = {}; return Ae(i) ? o = i : i !== null && (o.validators = i.validator, o.asyncValidators = i.asyncValidator), new v(r, o); }
    record(e, i = null) { let r = this._reduceControls(e); return new X(r, i); }
    control(e, i, r) { let o = {}; return this.useNonNullable ? (Ae(i) ? o = i : (o.validators = i, o.asyncValidators = r), new E(e, h(c({}, o), { nonNullable: !0 }))) : new E(e, i, r); }
    array(e, i, r) { let o = e.map(a => this._createControl(a)); return new G(o, i, r); }
    _reduceControls(e) { let i = {}; return Object.keys(e).forEach(r => { i[r] = this._createControl(e[r]); }), i; }
    _createControl(e) { if (e instanceof E)
        return e; if (e instanceof w)
        return e; if (Array.isArray(e)) {
        let i = e[0], r = e.length > 1 ? e[1] : null, o = e.length > 2 ? e[2] : null;
        return this.control(i, r, o);
    }
    else
        return this.control(e); }
    static ɵfac = function (i) { return new (i || t); };
    static ɵprov = s.ɵɵdefineInjectable({ token: t, factory: t.ɵfac, providedIn: "root" });
} return t; })(), Yn = (() => { class t {
    static ɵfac = function (i) { return new (i || t); };
    static ɵprov = s.ɵɵdefineInjectable({ token: t, factory: () => P(ut).nonNullable, providedIn: "root" });
} return t; })(), Kn = (() => { class t extends ut {
    group(e, i = null) { return super.group(e, i); }
    control(e, i, r) { return super.control(e, i, r); }
    array(e, i, r) { return super.array(e, i, r); }
    static ɵfac = (() => { let e; return function (r) { return (e || (e = s.ɵɵgetInheritedFactory(t)))(r || t); }; })();
    static ɵprov = s.ɵɵdefineInjectable({ token: t, factory: t.ɵfac, providedIn: "root" });
} return t; })(), Jn = new gt("20.1.7"), Qn = (() => { class t {
    static withConfig(e) { return { ngModule: t, providers: [{ provide: D, useValue: e.callSetDisabledState ?? T }] }; }
    static ɵfac = function (i) { return new (i || t); };
    static ɵmod = s.ɵɵdefineNgModule({ type: t });
    static ɵinj = s.ɵɵdefineInjector({ imports: [lt] });
} return t; })(), ei = (() => { class t {
    static withConfig(e) { return { ngModule: t, providers: [{ provide: ge, useValue: e.warnOnNgModelWithFormControl ?? "always" }, { provide: D, useValue: e.callSetDisabledState ?? T }] }; }
    static ɵfac = function (i) { return new (i || t); };
    static ɵmod = s.ɵɵdefineNgModule({ type: t });
    static ɵinj = s.ɵɵdefineInjector({ imports: [lt] });
} return t; })();
export { w as AbstractControl, W as AbstractControlDirective, Ke as AbstractFormGroupDirective, bt as COMPOSITION_BUFFER_MODE, Ct as CheckboxControlValueAccessor, fn as CheckboxRequiredValidator, u as ControlContainer, _ as ControlEvent, we as DefaultValueAccessor, pn as EmailValidator, G as FormArray, et as FormArrayName, ut as FormBuilder, E as FormControl, Yt as FormControlDirective, tn as FormControlName, v as FormGroup, Je as FormGroupDirective, Qe as FormGroupName, X as FormRecord, Z as FormResetEvent, z as FormSubmittedEvent, Qn as FormsModule, yn as MaxLengthValidator, ln as MaxValidator, _n as MinLengthValidator, dn as MinValidator, y as NG_ASYNC_VALIDATORS, d as NG_VALIDATORS, g as NG_VALUE_ACCESSOR, f as NgControl, Gn as NgControlStatus, Tn as NgControlStatusGroup, Ye as NgForm, Ut as NgModel, Tt as NgModelGroup, qn as NgSelectOption, Yn as NonNullableFormBuilder, Lt as NumberValueAccessor, Vn as PatternValidator, R as PristineChangeEvent, qt as RadioControlValueAccessor, Zt as RangeValueAccessor, ei as ReactiveFormsModule, at as RequiredValidator, it as SelectControlValueAccessor, rt as SelectMultipleControlValueAccessor, M as StatusChangeEvent, k as TouchedChangeEvent, Zn as UntypedFormArray, Kn as UntypedFormBuilder, Wn as UntypedFormControl, Bn as UntypedFormGroup, Jn as VERSION, me as Validators, q as ValueChangeEvent, Xn as isFormArray, jt as isFormControl, Un as isFormGroup, Hn as isFormRecord, lt as ɵInternalFormsSharedModule, $n as ɵNgNoValidate, zn as ɵNgSelectMultipleOption }; /*! Bundled license information:

@angular/forms/fesm2022/forms.mjs:
  (**
   * @license Angular v20.1.7
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
