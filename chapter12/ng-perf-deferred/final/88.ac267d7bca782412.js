"use strict";(self.webpackChunkng_perf_deferred=self.webpackChunkng_perf_deferred||[]).push([[88],{2088:(Xn,ht,l)=>{l.r(ht),l.d(ht,{UsersComponent:()=>jn});var o=l(3953),d=l(177),ye=l(6648),ve=l(7468),Ce=l(1413),w=l(6354);let ft=(()=>{class e{constructor(t,r){this._renderer=t,this._elementRef=r,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static#t=this.\u0275fac=function(r){return new(r||e)(o.rXU(o.sFG),o.rXU(o.aKT))};static#e=this.\u0275dir=o.FsC({type:e})}return e})(),_=(()=>{class e extends ft{static#t=this.\u0275fac=(()=>{let t;return function(i){return(t||(t=o.xGo(e)))(i||e)}})();static#e=this.\u0275dir=o.FsC({type:e,features:[o.Vt3]})}return e})();const f=new o.nKC(""),be={provide:f,useExisting:(0,o.Rfq)(()=>E),multi:!0},De=new o.nKC("");let E=(()=>{class e extends ft{constructor(t,r,i){super(t,r),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function Me(){const e=(0,d.QT)()?(0,d.QT)().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}())}writeValue(t){this.setProperty("value",t??"")}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static#t=this.\u0275fac=function(r){return new(r||e)(o.rXU(o.sFG),o.rXU(o.aKT),o.rXU(De,8))};static#e=this.\u0275dir=o.FsC({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,i){1&r&&o.bIt("input",function(a){return i._handleInput(a.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(a){return i._compositionEnd(a.target.value)})},features:[o.Jv_([be]),o.Vt3]})}return e})();const u=new o.nKC(""),g=new o.nKC("");function Dt(e){return null!=e}function At(e){return(0,o.jNT)(e)?(0,ye.H)(e):e}function Ft(e){let n={};return e.forEach(t=>{n=null!=t?{...n,...t}:n}),0===Object.keys(n).length?null:n}function wt(e,n){return n.map(t=>t(e))}function Et(e){return e.map(n=>function Fe(e){return!e.validate}(n)?n:t=>n.validate(t))}function H(e){return null!=e?function Ot(e){if(!e)return null;const n=e.filter(Dt);return 0==n.length?null:function(t){return Ft(wt(t,n))}}(Et(e)):null}function $(e){return null!=e?function xt(e){if(!e)return null;const n=e.filter(Dt);return 0==n.length?null:function(t){const r=wt(t,n).map(At);return(0,ve.p)(r).pipe((0,w.T)(Ft))}}(Et(e)):null}function St(e,n){return null===e?[n]:Array.isArray(e)?[...e,n]:[e,n]}function Nt(e){return e._rawValidators}function kt(e){return e._rawAsyncValidators}function j(e){return e?Array.isArray(e)?e:[e]:[]}function x(e,n){return Array.isArray(e)?e.includes(n):e===n}function Ut(e,n){const t=j(n);return j(e).forEach(i=>{x(t,i)||t.push(i)}),t}function Gt(e,n){return j(n).filter(t=>!x(e,t))}class Pt{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=H(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=$(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control&&this.control.reset(n)}hasError(n,t){return!!this.control&&this.control.hasError(n,t)}getError(n,t){return this.control?this.control.getError(n,t):null}}class c extends Pt{get formDirective(){return null}get path(){return null}}class m extends Pt{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class Bt{constructor(n){this._cd=n}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let Tt=(()=>{class e extends Bt{constructor(t){super(t)}static#t=this.\u0275fac=function(r){return new(r||e)(o.rXU(m,2))};static#e=this.\u0275dir=o.FsC({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,i){2&r&&o.AVh("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)},features:[o.Vt3]})}return e})(),It=(()=>{class e extends Bt{constructor(t){super(t)}static#t=this.\u0275fac=function(r){return new(r||e)(o.rXU(c,10))};static#e=this.\u0275dir=o.FsC({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,i){2&r&&o.AVh("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)("ng-submitted",i.isSubmitted)},features:[o.Vt3]})}return e})();const M="VALID",N="INVALID",v="PENDING",D="DISABLED";class C{}class Lt extends C{constructor(n,t){super(),this.value=n,this.source=t}}class q extends C{constructor(n,t){super(),this.pristine=n,this.source=t}}class J extends C{constructor(n,t){super(),this.touched=n,this.source=t}}class k extends C{constructor(n,t){super(),this.status=n,this.source=t}}class Se extends C{constructor(n){super(),this.source=n}}class Ne extends C{constructor(n){super(),this.source=n}}function z(e){return(U(e)?e.validators:e)||null}function Y(e,n){return(U(n)?n.asyncValidators:e)||null}function U(e){return null!=e&&!Array.isArray(e)&&"object"==typeof e}class K{constructor(n,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._events=new Ce.B,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(n),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get valid(){return this.status===M}get invalid(){return this.status===N}get pending(){return this.status==v}get disabled(){return this.status===D}get enabled(){return this.status!==D}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(Ut(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(Ut(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(Gt(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(Gt(n,this._rawAsyncValidators))}hasValidator(n){return x(this._rawValidators,n)}hasAsyncValidator(n){return x(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){const t=!1===this.touched;this.touched=!0;const r=n.sourceControl??this;this._parent&&!n.onlySelf&&this._parent.markAsTouched({...n,sourceControl:r}),t&&!1!==n.emitEvent&&this._events.next(new J(!0,r))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(n))}markAsUntouched(n={}){const t=!0===this.touched;this.touched=!1,this._pendingTouched=!1;const r=n.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:r})}),this._parent&&!n.onlySelf&&this._parent._updateTouched(n,r),t&&!1!==n.emitEvent&&this._events.next(new J(!1,r))}markAsDirty(n={}){const t=!0===this.pristine;this.pristine=!1;const r=n.sourceControl??this;this._parent&&!n.onlySelf&&this._parent.markAsDirty({...n,sourceControl:r}),t&&!1!==n.emitEvent&&this._events.next(new q(!1,r))}markAsPristine(n={}){const t=!1===this.pristine;this.pristine=!0,this._pendingDirty=!1;const r=n.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),this._parent&&!n.onlySelf&&this._parent._updatePristine(n,r),t&&!1!==n.emitEvent&&this._events.next(new q(!0,r))}markAsPending(n={}){this.status=v;const t=n.sourceControl??this;!1!==n.emitEvent&&(this._events.next(new k(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.markAsPending({...n,sourceControl:t})}disable(n={}){const t=this._parentMarkedDirty(n.onlySelf);this.status=D,this.errors=null,this._forEachChild(i=>{i.disable({...n,onlySelf:!0})}),this._updateValue();const r=n.sourceControl??this;!1!==n.emitEvent&&(this._events.next(new Lt(this.value,r)),this._events.next(new k(this.status,r)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...n,skipPristineCheck:t},this),this._onDisabledChange.forEach(i=>i(!0))}enable(n={}){const t=this._parentMarkedDirty(n.onlySelf);this.status=M,this._forEachChild(r=>{r.enable({...n,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors({...n,skipPristineCheck:t},this),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(n,t){this._parent&&!n.onlySelf&&(this._parent.updateValueAndValidity(n),n.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){const r=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===M||this.status===v)&&this._runAsyncValidator(r,n.emitEvent)}const t=n.sourceControl??this;!1!==n.emitEvent&&(this._events.next(new Lt(this.value,t)),this._events.next(new k(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.updateValueAndValidity({...n,sourceControl:t})}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?D:M}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,t){if(this.asyncValidator){this.status=v,this._hasOwnPendingAsyncValidator={emitEvent:!1!==t};const r=At(this.asyncValidator(this));this._asyncValidationSubscription=r.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:t,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();const n=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,t={}){this.errors=n,this._updateControlsErrors(!1!==t.emitEvent,this,t.shouldHaveEmitted)}get(n){let t=n;return null==t||(Array.isArray(t)||(t=t.split(".")),0===t.length)?null:t.reduce((r,i)=>r&&r._find(i),this)}getError(n,t){const r=t?this.get(t):this;return r&&r.errors?r.errors[n]:null}hasError(n,t){return!!this.getError(n,t)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,t,r){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||r)&&this._events.next(new k(this.status,t)),this._parent&&this._parent._updateControlsErrors(n,t,r)}_initObservables(){this.valueChanges=new o.bkB,this.statusChanges=new o.bkB}_calculateStatus(){return this._allControlsDisabled()?D:this.errors?N:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(v)?v:this._anyControlsHaveStatus(N)?N:M}_anyControlsHaveStatus(n){return this._anyControls(t=>t.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,t){const r=!this._anyControlsDirty(),i=this.pristine!==r;this.pristine=r,this._parent&&!n.onlySelf&&this._parent._updatePristine(n,t),i&&this._events.next(new q(this.pristine,t))}_updateTouched(n={},t){this.touched=this._anyControlsTouched(),this._events.next(new J(this.touched,t)),this._parent&&!n.onlySelf&&this._parent._updateTouched(n,t)}_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){U(n)&&null!=n.updateOn&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=function ke(e){return Array.isArray(e)?H(e):e||null}(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=function Ue(e){return Array.isArray(e)?$(e):e||null}(this._rawAsyncValidators)}}class G extends K{constructor(n,t,r){super(z(t),Y(r,t)),this.controls=n,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(n,t){return this.controls[n]?this.controls[n]:(this.controls[n]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(n,t,r={}){this.registerControl(n,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(n,t={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(n,t,r={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],t&&this.registerControl(n,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,t={}){(function $t(e,n,t){e._forEachChild((r,i)=>{if(void 0===t[i])throw new o.wOt(1002,"")})})(this,0,n),Object.keys(n).forEach(r=>{(function Ht(e,n,t){const r=e.controls;if(!(n?Object.keys(r):r).length)throw new o.wOt(1e3,"");if(!r[t])throw new o.wOt(1001,"")})(this,!0,r),this.controls[r].setValue(n[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(n,t={}){null!=n&&(Object.keys(n).forEach(r=>{const i=this.controls[r];i&&i.patchValue(n[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(n={},t={}){this._forEachChild((r,i)=>{r.reset(n?n[i]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(n,t,r)=>(n[r]=t.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(t,r)=>!!r._syncPendingControls()||t);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(t=>{const r=this.controls[t];r&&n(r,t)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(const[t,r]of Object.entries(this.controls))if(this.contains(t)&&n(r))return!0;return!1}_reduceValue(){return this._reduceChildren({},(t,r,i)=>((r.enabled||this.disabled)&&(t[i]=r.value),t))}_reduceChildren(n,t){let r=n;return this._forEachChild((i,s)=>{r=t(r,i,s)}),r}_allControlsDisabled(){for(const n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}}const V=new o.nKC("CallSetDisabledState",{providedIn:"root",factory:()=>P}),P="always";function A(e,n,t=P){Q(e,n),n.valueAccessor.writeValue(e.value),(e.disabled||"always"===t)&&n.valueAccessor.setDisabledState?.(e.disabled),function Be(e,n){n.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=!0,e._pendingDirty=!0,"change"===e.updateOn&&jt(e,n)})}(e,n),function Ie(e,n){const t=(r,i)=>{n.valueAccessor.writeValue(r),i&&n.viewToModelUpdate(r)};e.registerOnChange(t),n._registerOnDestroy(()=>{e._unregisterOnChange(t)})}(e,n),function Te(e,n){n.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,"blur"===e.updateOn&&e._pendingChange&&jt(e,n),"submit"!==e.updateOn&&e.markAsTouched()})}(e,n),function Pe(e,n){if(n.valueAccessor.setDisabledState){const t=r=>{n.valueAccessor.setDisabledState(r)};e.registerOnDisabledChange(t),n._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t)})}}(e,n)}function T(e,n,t=!0){const r=()=>{};n.valueAccessor&&(n.valueAccessor.registerOnChange(r),n.valueAccessor.registerOnTouched(r)),R(e,n),e&&(n._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function I(e,n){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(n)})}function Q(e,n){const t=Nt(e);null!==n.validator?e.setValidators(St(t,n.validator)):"function"==typeof t&&e.setValidators([t]);const r=kt(e);null!==n.asyncValidator?e.setAsyncValidators(St(r,n.asyncValidator)):"function"==typeof r&&e.setAsyncValidators([r]);const i=()=>e.updateValueAndValidity();I(n._rawValidators,i),I(n._rawAsyncValidators,i)}function R(e,n){let t=!1;if(null!==e){if(null!==n.validator){const i=Nt(e);if(Array.isArray(i)&&i.length>0){const s=i.filter(a=>a!==n.validator);s.length!==i.length&&(t=!0,e.setValidators(s))}}if(null!==n.asyncValidator){const i=kt(e);if(Array.isArray(i)&&i.length>0){const s=i.filter(a=>a!==n.asyncValidator);s.length!==i.length&&(t=!0,e.setAsyncValidators(s))}}}const r=()=>{};return I(n._rawValidators,r),I(n._rawAsyncValidators,r),t}function jt(e,n){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function qt(e,n){const t=e.indexOf(n);t>-1&&e.splice(t,1)}function Jt(e){return"object"==typeof e&&null!==e&&2===Object.keys(e).length&&"value"in e&&"disabled"in e}Promise.resolve();const rt=class extends K{constructor(n=null,t,r){super(z(t),Y(r,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(n),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),U(t)&&(t.nonNullable||t.initialValueIsDefault)&&(this.defaultValue=Jt(n)?n.value:n)}setValue(n,t={}){this.value=this._pendingValue=n,this._onChange.length&&!1!==t.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==t.emitViewToModelChange)),this.updateValueAndValidity(t)}patchValue(n,t={}){this.setValue(n,t)}reset(n=this.defaultValue,t={}){this._applyFormState(n),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){qt(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){qt(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(n){Jt(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};Promise.resolve();let Zt=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275dir=o.FsC({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}return e})();const ot=new o.nKC(""),Ze={provide:c,useExisting:(0,o.Rfq)(()=>L)};let L=(()=>{class e extends c{constructor(t,r,i){super(),this.callSetDisabledState=i,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new o.bkB,this._setValidators(t),this._setAsyncValidators(r)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(R(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){const r=this.form.get(t.path);return A(r,t,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),r}getControl(t){return this.form.get(t.path)}removeControl(t){T(t.control||null,t,!1),function $e(e,n){const t=e.indexOf(n);t>-1&&e.splice(t,1)}(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,r){this.form.get(t.path).setValue(r)}onSubmit(t){return this.submitted=!0,function Wt(e,n){e._syncPendingControls(),n.forEach(t=>{const r=t.control;"submit"===r.updateOn&&r._pendingChange&&(t.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new Se(this.control)),"dialog"===t?.target?.method}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1,this.form._events.next(new Ne(this.form))}_updateDomValue(){this.directives.forEach(t=>{const r=t.control,i=this.form.get(t.path);r!==i&&(T(r||null,t),(e=>e instanceof rt)(i)&&(A(i,t,this.callSetDisabledState),t.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){const r=this.form.get(t.path);(function Xt(e,n){Q(e,n)})(r,t),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){const r=this.form.get(t.path);r&&function Re(e,n){return R(e,n)}(r,t)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){Q(this.form,this),this._oldForm&&R(this._oldForm,this)}_checkFormPresent(){}static#t=this.\u0275fac=function(r){return new(r||e)(o.rXU(u,10),o.rXU(g,10),o.rXU(V,8))};static#e=this.\u0275dir=o.FsC({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,i){1&r&&o.bIt("submit",function(a){return i.onSubmit(a)})("reset",function(){return i.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[o.Jv_([Ze]),o.Vt3,o.OA$]})}return e})();const nn={provide:m,useExisting:(0,o.Rfq)(()=>at)};let at=(()=>{class e extends m{set isDisabled(t){}static#t=this._ngModelWarningSentOnce=!1;constructor(t,r,i,s,a){super(),this._ngModelWarningConfig=a,this._added=!1,this.name=null,this.update=new o.bkB,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(r),this._setAsyncValidators(i),this.valueAccessor=function et(e,n){if(!n)return null;let t,r,i;return Array.isArray(n),n.forEach(s=>{s.constructor===E?t=s:function He(e){return Object.getPrototypeOf(e.constructor)===_}(s)?r=s:i=s}),i||r||t||null}(0,s)}ngOnChanges(t){this._added||this._setUpControl(),function tt(e,n){if(!e.hasOwnProperty("model"))return!1;const t=e.model;return!!t.isFirstChange()||!Object.is(n,t.currentValue)}(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return function B(e,n){return[...n.path,e]}(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}static#e=this.\u0275fac=function(r){return new(r||e)(o.rXU(c,13),o.rXU(u,10),o.rXU(g,10),o.rXU(f,10),o.rXU(ot,8))};static#n=this.\u0275dir=o.FsC({type:e,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[o.Jv_([nn]),o.Vt3,o.OA$]})}return e})(),yn=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275mod=o.$C({type:e});static#n=this.\u0275inj=o.G2t({})}return e})(),Cn=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:ot,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:V,useValue:t.callSetDisabledState??P}]}}static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275mod=o.$C({type:e});static#n=this.\u0275inj=o.G2t({imports:[yn]})}return e})();var Vn=l(1626);let bn=(()=>{class e{constructor(t){this.http=t,this.usersApiUrl="https://api.randomuser.me?results=10&seed=packt"}getUser(t){return this.http.get(this.usersApiUrl).pipe((0,w.T)(r=>r.results.find(i=>i.login.uuid===t)))}getSimilarUsers(t){return this.http.get(this.usersApiUrl).pipe((0,w.T)(r=>r.results.filter(i=>i.login.uuid!==t)))}searchUsers(t){return this.getSimilarUsers("").pipe((0,w.T)(r=>t?r.filter(i=>{const s=t.toLowerCase();return i.email.toLowerCase().includes(s)||i.name.first.toLowerCase().includes(s)||i.name.last.toLowerCase().includes(s)}):r))}static#t=this.\u0275fac=function(r){return new(r||e)(o.KVO(Vn.Qq))};static#e=this.\u0275prov=o.jDH({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Mn=l(9172),Dn=l(8141),An=l(9974),Fn=l(4360),En=l(1397),me=l(34);const On=()=>[l.e(505).then(l.bind(l,4505)).then(e=>e.UserCardBackComponent)];function xn(e,n){if(1&e&&(o.j41(0,"div",4),o.nrm(1,"img",5),o.j41(2,"div",6)(3,"h5",7),o.EFF(4),o.k0s(),o.j41(5,"p",8),o.EFF(6),o.k0s(),o.j41(7,"a",9),o.EFF(8),o.k0s()()()),2&e){const t=o.XpG();o.Mz_("routerLink","/user/",t.user.login.uuid,""),o.R7$(),o.Y8G("src",t.user.picture.large,o.B4B),o.R7$(3),o.Lme("",t.user.name.first," ",t.user.name.last,""),o.R7$(2),o.JRh(t.user.email),o.R7$(),o.Mz_("href","tel: ",t.user.phone,"",o.B4B),o.R7$(),o.JRh(t.user.phone)}}function Sn(e,n){if(1&e&&o.nrm(0,"app-user-card-back",10),2&e){const t=o.XpG();o.Y8G("user",t.user)}}function Nn(e,n){1&e&&(o.j41(0,"div",11),o.EFF(1," Loading... "),o.k0s())}let kn=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275cmp=o.VBU({type:e,selectors:[["app-user-card"]],inputs:{user:"user"},standalone:!0,features:[o.aNF],decls:8,vars:1,consts:[["container",""],[1,"card-container","h-full"],[1,"card","h-full","w-fit"],["class","card card-front h-full flex flex-col max-w-sm mx-auto duration-200 cursor-pointer hover:border-purple-500 hover:shadow-md p-4 border border-slate-300 rounded-md text-center",3,"routerLink",4,"ngIf"],[1,"card","card-front","h-full","flex","flex-col","max-w-sm","mx-auto","duration-200","cursor-pointer","hover:border-purple-500","hover:shadow-md","p-4","border","border-slate-300","rounded-md","text-center",3,"routerLink"],["alt","...",1,"card-img-top","rounded-full","mx-auto","w-32","aspect-square",3,"src"],[1,"card-body","flex-1","flex","flex-col"],[1,"card-title","flex-1"],[1,"card-text","break-words"],[1,"btn","btn-primary",3,"href"],[1,"card-back","card","h-full","block",3,"user"],[1,"bg-white","card-back","card"]],template:function(r,i){1&r&&(o.j41(0,"div",1)(1,"div",2,0),o.DNE(3,xn,9,9,"div",3)(4,Sn,1,1)(5,Nn,2,0),o.nv$(6,4,On,null,5),o.UoJ(1),o.k0s()()),2&r&&(o.R7$(3),o.Y8G("ngIf",i.user))},dependencies:[d.MD,d.bT,me.iI,me.Wk],styles:[".card-container[_ngcontent-%COMP%]{perspective:1000px;min-height:300px}.card[_ngcontent-%COMP%]{position:relative;width:100%;transition:transform .6s}.card[_ngcontent-%COMP%]:hover   .card-front[_ngcontent-%COMP%]{opacity:0}.card[_ngcontent-%COMP%]:hover   .card-back[_ngcontent-%COMP%]{opacity:1}.card-front[_ngcontent-%COMP%], .card-back[_ngcontent-%COMP%]{position:absolute;backface-visibility:hidden;top:0;left:0;right:0;margin-inline:auto;transition:all ease .2s}.card-back[_ngcontent-%COMP%]{opacity:0;display:flex;height:100%;flex-direction:column}"]})}return e})();const Un=["*"],Gn=(e,n,t,r,i)=>({"custom-content":e,circle:n,progress:t,"progress-dark":r,pulse:i});function Pn(e,n){1&e&&o.SdG(0,0,["*ngIf","appearance  === 'custom-content'"])}function Bn(e,n){if(1&e&&(o.j41(0,"div",1),o.DNE(1,Pn,1,0,"ng-content",2),o.k0s()),2&e){const t=o.XpG();o.Y8G("ngClass",o.s1E(5,Gn,"custom-content"===t.appearance,"circle"===t.appearance,"progress"===t.animation,"progress-dark"===t.animation,"pulse"===t.animation))("ngStyle",t.theme),o.BMQ("aria-label",t.ariaLabel)("aria-valuetext",t.loadingText),o.R7$(),o.Y8G("ngIf","custom-content"===t.appearance)}}const _e=new o.nKC("ngx-skeleton-loader.config");let Tn=(()=>{class e{constructor(t){this.config=t;const{appearance:r="line",animation:i="progress",theme:s=null,loadingText:a="Loading...",count:h=1,ariaLabel:b="loading"}=t||{};this.appearance=r,this.animation=i,this.theme=s,this.loadingText=a,this.count=h,this.items=[],this.ariaLabel=b}ngOnInit(){this.validateInputValues()}validateInputValues(){/^\d+$/.test(`${this.count}`)||((0,o.naY)()&&console.error("`NgxSkeletonLoaderComponent` need to receive 'count' a numeric value. Forcing default to \"1\"."),this.count=1),"custom-content"===this.appearance&&(0,o.naY)()&&1!==this.count&&(console.error('`NgxSkeletonLoaderComponent` enforces elements with "custom-content" appearance as DOM nodes. Forcing "count" to "1".'),this.count=1),this.items.length=this.count;const t=["progress","progress-dark","pulse","false"];-1===t.indexOf(String(this.animation))&&((0,o.naY)()&&console.error(`\`NgxSkeletonLoaderComponent\` need to receive 'animation' as: ${t.join(", ")}. Forcing default to "progress".`),this.animation="progress"),-1===["circle","line","custom-content",""].indexOf(String(this.appearance))&&((0,o.naY)()&&console.error("`NgxSkeletonLoaderComponent` need to receive 'appearance' as: circle or line or custom-content or empty string. Forcing default to \"''\"."),this.appearance=""),this.config?.theme?.extendsFromRoot&&null!==this.theme&&(this.theme={...this.config.theme,...this.theme})}ngOnChanges(t){["count","animation","appearance"].find(r=>t[r]&&(t[r].isFirstChange()||t[r].previousValue===t[r].currentValue))||this.validateInputValues()}static#t=this.\u0275fac=function(r){return new(r||e)(o.rXU(_e,8))};static#e=this.\u0275cmp=o.VBU({type:e,selectors:[["ngx-skeleton-loader"]],inputs:{count:"count",loadingText:"loadingText",appearance:"appearance",animation:"animation",ariaLabel:"ariaLabel",theme:"theme"},features:[o.OA$],ngContentSelectors:Un,decls:1,vars:1,consts:[["class","skeleton-loader","aria-busy","true","aria-valuemin","0","aria-valuemax","100","role","progressbar","tabindex","-1",3,"ngClass","ngStyle",4,"ngFor","ngForOf"],["aria-busy","true","aria-valuemin","0","aria-valuemax","100","role","progressbar","tabindex","-1",1,"skeleton-loader",3,"ngClass","ngStyle"],[4,"ngIf"]],template:function(r,i){1&r&&(o.NAR(),o.DNE(0,Bn,2,11,"div",0)),2&r&&o.Y8G("ngForOf",i.items)},dependencies:[d.YU,d.Sq,d.bT,d.B3],styles:['.skeleton-loader[_ngcontent-%COMP%]{box-sizing:border-box;overflow:hidden;position:relative;background:rgb(239,241,246) no-repeat;border-radius:4px;width:100%;height:20px;display:inline-block;margin-bottom:10px;will-change:transform}.skeleton-loader[_ngcontent-%COMP%]:after, .skeleton-loader[_ngcontent-%COMP%]:before{box-sizing:border-box}.skeleton-loader.circle[_ngcontent-%COMP%]{width:40px;height:40px;margin:5px;border-radius:50%}.skeleton-loader.progress[_ngcontent-%COMP%], .skeleton-loader.progress-dark[_ngcontent-%COMP%]{transform:translateZ(0)}.skeleton-loader.progress[_ngcontent-%COMP%]:after, .skeleton-loader.progress[_ngcontent-%COMP%]:before, .skeleton-loader.progress-dark[_ngcontent-%COMP%]:after, .skeleton-loader.progress-dark[_ngcontent-%COMP%]:before{box-sizing:border-box}.skeleton-loader.progress[_ngcontent-%COMP%]:before, .skeleton-loader.progress-dark[_ngcontent-%COMP%]:before{animation:_ngcontent-%COMP%_progress 2s ease-in-out infinite;background-size:200px 100%;position:absolute;z-index:1;top:0;left:0;width:200px;height:100%;content:""}.skeleton-loader.progress[_ngcontent-%COMP%]:before{background-image:linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,.6),rgba(255,255,255,0))}.skeleton-loader.progress-dark[_ngcontent-%COMP%]:before{background-image:linear-gradient(90deg,transparent,rgba(0,0,0,.2),transparent)}.skeleton-loader.pulse[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_pulse 1.5s cubic-bezier(.4,0,.2,1) infinite;animation-delay:.5s}.skeleton-loader.custom-content[_ngcontent-%COMP%]{height:100%;background:none}@media (prefers-reduced-motion: reduce){.skeleton-loader.pulse[_ngcontent-%COMP%], .skeleton-loader.progress-dark[_ngcontent-%COMP%], .skeleton-loader.custom-content[_ngcontent-%COMP%], .skeleton-loader.progress[_ngcontent-%COMP%]:before{animation:none}.skeleton-loader.progress[_ngcontent-%COMP%]:before, .skeleton-loader.progress-dark[_ngcontent-%COMP%], .skeleton-loader.custom-content[_ngcontent-%COMP%]{background-image:none}}@media screen and (min-device-width: 1200px){.skeleton-loader[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;cursor:wait}}@keyframes _ngcontent-%COMP%_progress{0%{transform:translate3d(-200px,0,0)}to{transform:translate3d(calc(200px + 100vw),0,0)}}@keyframes _ngcontent-%COMP%_pulse{0%{opacity:1}50%{opacity:.4}to{opacity:1}}'],changeDetection:0})}return e})(),In=(()=>{class e{static forRoot(t){return{ngModule:e,providers:[{provide:_e,useValue:t}]}}static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275mod=o.$C({type:e});static#n=this.\u0275inj=o.G2t({imports:[d.MD]})}return e})();const Rn=()=>({"height.px":258,"background-color":"#eee"});function Ln(e,n){1&e&&o.nrm(0,"app-user-card",12),2&e&&o.Y8G("user",n.$implicit)}function Hn(e,n){if(1&e&&(o.j41(0,"div",10),o.DNE(1,Ln,1,1,"app-user-card",11),o.k0s()),2&e){const t=o.XpG();o.R7$(),o.Y8G("ngForOf",t.users)}}function $n(e,n){1&e&&o.nrm(0,"ngx-skeleton-loader",13),2&e&&o.Y8G("theme",o.lJ4(1,Rn))}let jn=(()=>{class e{constructor(){this.users=[],this.userService=(0,o.WQX)(bn),this.platformId=(0,o.WQX)(o.Agw),this.isSearching=!0}ngOnInit(){this.componentAlive=!0,this.searchForm=new G({username:new rt("",[])}),this.searchForm.controls.username.valueChanges.pipe((0,Mn.Z)(""),(0,Dn.M)(()=>{this.isSearching=!0}),function wn(e,n=!1){return(0,An.N)((t,r)=>{let i=0;t.subscribe((0,Fn._)(r,s=>{const a=e(s,i++);(a||n)&&r.next(s),!a&&r.complete()}))})}(()=>!!this.componentAlive&&(0,d.UE)(this.platformId)),(0,En.Z)(t=>this.userService.searchUsers(t))).subscribe(t=>{this.users=t,this.isSearching=!1})}static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275cmp=o.VBU({type:e,selectors:[["app-users"]],standalone:!0,features:[o.aNF],decls:11,vars:3,consts:[["loadingTemplate",""],[1,"users"],[1,"input-container",3,"formGroup"],[1,"relative","mb-4"],["formControlName","username","type","text","placeholder","Quick Search...",1,"pr-4","!pl-10","py-2"],["width","24","height","24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round","aria-hidden","true",1,"flex-none","text-slate-300","dark:text-slate-400","absolute","top-0","left-2","bottom-0","m-auto"],["d","m19 19-3.5-3.5"],["cx","11","cy","11","r","6"],[1,"secondary-container"],["class","users grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4",4,"ngIf","ngIfElse"],[1,"users","grid","gap-4","grid-cols-1","md:grid-cols-2","lg:grid-cols-4"],[3,"user",4,"ngFor","ngForOf"],[3,"user"],["count","10",1,"users","w-full","grid","gap-4","grid-cols-1","md:grid-cols-2","lg:grid-cols-4",3,"theme"]],template:function(r,i){if(1&r&&(o.j41(0,"div",1)(1,"form",2)(2,"div",3),o.nrm(3,"input",4),o.qSk(),o.j41(4,"svg",5),o.nrm(5,"path",6)(6,"circle",7),o.k0s()()(),o.joV(),o.j41(7,"div",8),o.DNE(8,Hn,2,1,"div",9),o.k0s()(),o.DNE(9,$n,1,2,"ng-template",null,0,o.C5r)),2&r){const s=o.sdS(10);o.R7$(),o.Y8G("formGroup",i.searchForm),o.R7$(7),o.Y8G("ngIf",!i.isSearching)("ngIfElse",s)}},dependencies:[d.MD,d.Sq,d.bT,Cn,Zt,E,Tt,It,L,at,kn,In,Tn],styles:[".skeleton-loader{margin-left:auto;margin-right:auto;max-width:24rem}"]})}return e})()}}]);