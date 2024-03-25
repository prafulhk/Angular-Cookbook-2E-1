"use strict";(self.webpackChunkng_value_providers=self.webpackChunkng_value_providers||[]).push([[632],{632:(Sn,he,c)=>{c.d(he,{e:()=>wn});var v=c(368),i=c(564),fe=c(496),pe=c(252),ge=c(300),me=c(560),_e=c(91),ye=c(773),ve=c(187),Ce=c(904),be=c(704);let at=(()=>{class e{constructor(t,r){this._renderer=t,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static#t=this.\u0275fac=function(r){return new(r||e)(i.GI1(i.q87),i.GI1(i.GMv))};static#e=this.\u0275dir=i.Sc5({type:e})}return e})(),m=(()=>{class e extends at{static#t=this.\u0275fac=(()=>{let t;return function(o){return(t||(t=i.otF(e)))(o||e)}})();static#e=this.\u0275dir=i.Sc5({type:e,features:[i.eg9]})}return e})();const h=new i.UbH(""),De={provide:h,useExisting:(0,i.wd)(()=>U),multi:!0},Fe=new i.UbH("");let U=(()=>{class e extends at{constructor(t,r,o){super(t,r),this._compositionMode=o,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function Ae(){const e=(0,v.uy)()?(0,v.uy)().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}())}writeValue(t){this.setProperty("value",t??"")}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static#t=this.\u0275fac=function(r){return new(r||e)(i.GI1(i.q87),i.GI1(i.GMv),i.GI1(Fe,8))};static#e=this.\u0275dir=i.Sc5({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){1&r&&i.qCj("input",function(a){return o._handleInput(a.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(a){return o._compositionEnd(a.target.value)})},features:[i.M5G([De]),i.eg9]})}return e})();const l=new i.UbH(""),p=new i.UbH("");function yt(e){return null!=e}function vt(e){return(0,i.w5$)(e)?(0,fe.Q)(e):e}function Ct(e){let n={};return e.forEach(t=>{n=null!=t?{...n,...t}:n}),0===Object.keys(n).length?null:n}function Vt(e,n){return n.map(t=>t(e))}function bt(e){return e.map(n=>function Ee(e){return!e.validate}(n)?n:t=>n.validate(t))}function R(e){return null!=e?function Mt(e){if(!e)return null;const n=e.filter(yt);return 0==n.length?null:function(t){return Ct(Vt(t,n))}}(bt(e)):null}function H(e){return null!=e?function Dt(e){if(!e)return null;const n=e.filter(yt);return 0==n.length?null:function(t){return function Ve(...e){const n=(0,_e.yu)(e),{args:t,keys:r}=(0,ge.Q)(e),o=new pe._(s=>{const{length:a}=t;if(!a)return void s.complete();const d=new Array(a);let y=a,b=a;for(let T=0;T<a;T++){let st=!1;(0,me.Uv)(t[T]).subscribe((0,ye.e)(s,En=>{st||(st=!0,b--),d[T]=En},()=>y--,void 0,()=>{(!y||!st)&&(b||s.next(r?(0,Ce.q)(r,d):d),s.complete())}))}});return n?o.pipe((0,ve.j)(n)):o}(Vt(t,n).map(vt)).pipe((0,be.k)(Ct))}}(bt(e)):null}function At(e,n){return null===e?[n]:Array.isArray(e)?[...e,n]:[e,n]}function L(e){return e?Array.isArray(e)?e:[e]:[]}function E(e,n){return Array.isArray(e)?e.includes(n):e===n}function Et(e,n){const t=L(n);return L(e).forEach(o=>{E(t,o)||t.push(o)}),t}function St(e,n){return L(n).filter(t=>!E(e,t))}class Ot{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=R(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=H(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control&&this.control.reset(n)}hasError(n,t){return!!this.control&&this.control.hasError(n,t)}getError(n,t){return this.control?this.control.getError(n,t):null}}class u extends Ot{get formDirective(){return null}get path(){return null}}class g extends Ot{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class Gt{constructor(n){this._cd=n}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let Nt=(()=>{class e extends Gt{constructor(t){super(t)}static#t=this.\u0275fac=function(r){return new(r||e)(i.GI1(g,2))};static#e=this.\u0275dir=i.Sc5({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){2&r&&i.eAK("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[i.eg9]})}return e})();const M="VALID",O="INVALID",C="PENDING",D="DISABLED";function G(e){return null!=e&&!Array.isArray(e)&&"object"==typeof e}class Y{constructor(n,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(n),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get valid(){return this.status===M}get invalid(){return this.status===O}get pending(){return this.status==C}get disabled(){return this.status===D}get enabled(){return this.status!==D}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(Et(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(Et(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(St(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(St(n,this._rawAsyncValidators))}hasValidator(n){return E(this._rawValidators,n)}hasAsyncValidator(n){return E(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){this.touched=!0,this._parent&&!n.onlySelf&&this._parent.markAsTouched(n)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(n=>n.markAllAsTouched())}markAsUntouched(n={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!n.onlySelf&&this._parent._updateTouched(n)}markAsDirty(n={}){this.pristine=!1,this._parent&&!n.onlySelf&&this._parent.markAsDirty(n)}markAsPristine(n={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!n.onlySelf&&this._parent._updatePristine(n)}markAsPending(n={}){this.status=C,!1!==n.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!n.onlySelf&&this._parent.markAsPending(n)}disable(n={}){const t=this._parentMarkedDirty(n.onlySelf);this.status=D,this.errors=null,this._forEachChild(r=>{r.disable({...n,onlySelf:!0})}),this._updateValue(),!1!==n.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...n,skipPristineCheck:t}),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){const t=this._parentMarkedDirty(n.onlySelf);this.status=M,this._forEachChild(r=>{r.enable({...n,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors({...n,skipPristineCheck:t}),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(n){this._parent&&!n.onlySelf&&(this._parent.updateValueAndValidity(n),n.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===M||this.status===C)&&this._runAsyncValidator(n.emitEvent)),!1!==n.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.updateValueAndValidity(n)}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?D:M}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n){if(this.asyncValidator){this.status=C,this._hasOwnPendingAsyncValidator=!0;const t=vt(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:n})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(n,t={}){this.errors=n,this._updateControlsErrors(!1!==t.emitEvent)}get(n){let t=n;return null==t||(Array.isArray(t)||(t=t.split(".")),0===t.length)?null:t.reduce((r,o)=>r&&r._find(o),this)}getError(n,t){const r=t?this.get(t):this;return r&&r.errors?r.errors[n]:null}hasError(n,t){return!!this.getError(n,t)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(n)}_initObservables(){this.valueChanges=new i._w7,this.statusChanges=new i._w7}_calculateStatus(){return this._allControlsDisabled()?D:this.errors?O:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(C)?C:this._anyControlsHaveStatus(O)?O:M}_anyControlsHaveStatus(n){return this._anyControls(t=>t.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n={}){this.pristine=!this._anyControlsDirty(),this._parent&&!n.onlySelf&&this._parent._updatePristine(n)}_updateTouched(n={}){this.touched=this._anyControlsTouched(),this._parent&&!n.onlySelf&&this._parent._updateTouched(n)}_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){G(n)&&null!=n.updateOn&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=function Ie(e){return Array.isArray(e)?R(e):e||null}(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=function ke(e){return Array.isArray(e)?H(e):e||null}(this._rawAsyncValidators)}}const V=new i.UbH("CallSetDisabledState",{providedIn:"root",factory:()=>N}),N="always";function A(e,n,t=N){(function Z(e,n){const t=function Ft(e){return e._rawValidators}(e);null!==n.validator?e.setValidators(At(t,n.validator)):"function"==typeof t&&e.setValidators([t]);const r=function wt(e){return e._rawAsyncValidators}(e);null!==n.asyncValidator?e.setAsyncValidators(At(r,n.asyncValidator)):"function"==typeof r&&e.setAsyncValidators([r]);const o=()=>e.updateValueAndValidity();x(n._rawValidators,o),x(n._rawAsyncValidators,o)})(e,n),n.valueAccessor.writeValue(e.value),(e.disabled||"always"===t)&&n.valueAccessor.setDisabledState?.(e.disabled),function Pe(e,n){n.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=!0,e._pendingDirty=!0,"change"===e.updateOn&&Bt(e,n)})}(e,n),function Ue(e,n){const t=(r,o)=>{n.valueAccessor.writeValue(r),o&&n.viewToModelUpdate(r)};e.registerOnChange(t),n._registerOnDestroy(()=>{e._unregisterOnChange(t)})}(e,n),function Te(e,n){n.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,"blur"===e.updateOn&&e._pendingChange&&Bt(e,n),"submit"!==e.updateOn&&e.markAsTouched()})}(e,n),function Be(e,n){if(n.valueAccessor.setDisabledState){const t=r=>{n.valueAccessor.setDisabledState(r)};e.registerOnDisabledChange(t),n._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t)})}}(e,n)}function x(e,n){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(n)})}function Bt(e,n){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function Ut(e,n){const t=e.indexOf(n);t>-1&&e.splice(t,1)}function Rt(e){return"object"==typeof e&&null!==e&&2===Object.keys(e).length&&"value"in e&&"disabled"in e}Promise.resolve();const Ht=class extends Y{constructor(n=null,t,r){super(function W(e){return(G(e)?e.validators:e)||null}(t),function q(e,n){return(G(n)?n.asyncValidators:e)||null}(r,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(n),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),G(t)&&(t.nonNullable||t.initialValueIsDefault)&&(this.defaultValue=Rt(n)?n.value:n)}setValue(n,t={}){this.value=this._pendingValue=n,this._onChange.length&&!1!==t.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==t.emitViewToModelChange)),this.updateValueAndValidity(t)}patchValue(n,t={}){this.setValue(n,t)}reset(n=this.defaultValue,t={}){this._applyFormState(n),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){Ut(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){Ut(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(n){Rt(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}},Ye={provide:g,useExisting:(0,i.wd)(()=>tt)},jt=Promise.resolve();let tt=(()=>{class e extends g{constructor(t,r,o,s,a,d){super(),this._changeDetectorRef=a,this.callSetDisabledState=d,this.control=new Ht,this._registered=!1,this.name="",this.update=new i._w7,this._parent=t,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=function K(e,n){if(!n)return null;let t,r,o;return Array.isArray(n),n.forEach(s=>{s.constructor===U?t=s:function Le(e){return Object.getPrototypeOf(e.constructor)===m}(s)?r=s:o=s}),o||r||t||null}(0,s)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){const r=t.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),function X(e,n){if(!e.hasOwnProperty("model"))return!1;const t=e.model;return!!t.isFirstChange()||!Object.is(n,t.currentValue)}(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){A(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(t){jt.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){const r=t.isDisabled.currentValue,o=0!==r&&(0,i.cZD)(r);jt.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?function I(e,n){return[...n.path,e]}(t,this._parent):[t]}static#t=this.\u0275fac=function(r){return new(r||e)(i.GI1(u,9),i.GI1(l,10),i.GI1(p,10),i.GI1(h,10),i.GI1(i.kD9,8),i.GI1(V,8))};static#e=this.\u0275dir=i.Sc5({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[i.Wk5.None,"disabled","isDisabled"],model:[i.Wk5.None,"ngModel","model"],options:[i.Wk5.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[i.M5G([Ye]),i.eg9,i.SYr]})}return e})();const on={provide:h,useExisting:(0,i.wd)(()=>P),multi:!0};function Kt(e,n){return null==e?`${n}`:(n&&"object"==typeof n&&(n="Object"),`${e}: ${n}`.slice(0,50))}let P=(()=>{class e extends m{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){this.value=t;const o=Kt(this._getOptionId(t),t);this.setProperty("value",o)}registerOnChange(t){this.onChange=r=>{this.value=this._getOptionValue(r),t(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(t){for(const r of this._optionMap.keys())if(this._compareWith(this._optionMap.get(r),t))return r;return null}_getOptionValue(t){const r=function sn(e){return e.split(":")[0]}(t);return this._optionMap.has(r)?this._optionMap.get(r):t}static#t=this.\u0275fac=(()=>{let t;return function(o){return(t||(t=i.otF(e)))(o||e)}})();static#e=this.\u0275dir=i.Sc5({type:e,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(r,o){1&r&&i.qCj("change",function(a){return o.onChange(a.target.value)})("blur",function(){return o.onTouched()})},inputs:{compareWith:"compareWith"},features:[i.M5G([on]),i.eg9]})}return e})(),Qt=(()=>{class e{constructor(t,r,o){this._element=t,this._renderer=r,this._select=o,this._select&&(this.id=this._select._registerOption())}set ngValue(t){null!=this._select&&(this._select._optionMap.set(this.id,t),this._setElementValue(Kt(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._setElementValue(t),this._select&&this._select.writeValue(this._select.value)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static#t=this.\u0275fac=function(r){return new(r||e)(i.GI1(i.GMv),i.GI1(i.q87),i.GI1(P,9))};static#e=this.\u0275dir=i.Sc5({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}})}return e})();const an={provide:h,useExisting:(0,i.wd)(()=>it),multi:!0};function te(e,n){return null==e?`${n}`:("string"==typeof n&&(n=`'${n}'`),n&&"object"==typeof n&&(n="Object"),`${e}: ${n}`.slice(0,50))}let it=(()=>{class e extends m{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){let r;if(this.value=t,Array.isArray(t)){const o=t.map(s=>this._getOptionId(s));r=(s,a)=>{s._setSelected(o.indexOf(a.toString())>-1)}}else r=(o,s)=>{o._setSelected(!1)};this._optionMap.forEach(r)}registerOnChange(t){this.onChange=r=>{const o=[],s=r.selectedOptions;if(void 0!==s){const a=s;for(let d=0;d<a.length;d++){const b=this._getOptionValue(a[d].value);o.push(b)}}else{const a=r.options;for(let d=0;d<a.length;d++){const y=a[d];if(y.selected){const b=this._getOptionValue(y.value);o.push(b)}}}this.value=o,t(o)}}_registerOption(t){const r=(this._idCounter++).toString();return this._optionMap.set(r,t),r}_getOptionId(t){for(const r of this._optionMap.keys())if(this._compareWith(this._optionMap.get(r)._value,t))return r;return null}_getOptionValue(t){const r=function ln(e){return e.split(":")[0]}(t);return this._optionMap.has(r)?this._optionMap.get(r)._value:t}static#t=this.\u0275fac=(()=>{let t;return function(o){return(t||(t=i.otF(e)))(o||e)}})();static#e=this.\u0275dir=i.Sc5({type:e,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(r,o){1&r&&i.qCj("change",function(a){return o.onChange(a.target)})("blur",function(){return o.onTouched()})},inputs:{compareWith:"compareWith"},features:[i.M5G([an]),i.eg9]})}return e})(),ee=(()=>{class e{constructor(t,r,o){this._element=t,this._renderer=r,this._select=o,this._select&&(this.id=this._select._registerOption(this))}set ngValue(t){null!=this._select&&(this._value=t,this._setElementValue(te(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._select?(this._value=t,this._setElementValue(te(this.id,t)),this._select.writeValue(this._select.value)):this._setElementValue(t)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}_setSelected(t){this._renderer.setProperty(this._element.nativeElement,"selected",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static#t=this.\u0275fac=function(r){return new(r||e)(i.GI1(i.GMv),i.GI1(i.q87),i.GI1(it,9))};static#e=this.\u0275dir=i.Sc5({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}})}return e})(),_n=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275mod=i.a4G({type:e});static#n=this.\u0275inj=i.s3X({})}return e})(),vn=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:V,useValue:t.callSetDisabledState??N}]}}static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275mod=i.a4G({type:e});static#n=this.\u0275inj=i.s3X({imports:[_n]})}return e})();var de=function(e){return e.Apple="Apple \u{1f34e}",e.Banana="Banana \u{1f34c}",e.Grapes="Grapes \u{1f347}",e.Cherries="Cherry \u{1f352}",e}(de||{}),Cn=c(700);let Vn=(()=>{class e{constructor(){this.bucketSource=new Cn.g([]),this.$bucket=this.bucketSource.asObservable()}loadItems(){const t=JSON.parse(window.localStorage.getItem("bucket")||"[]");this.bucketSource.next(t)}addItem(t){const r=[t,...this.bucketSource.value];this.bucketSource.next(r),window.localStorage.setItem("bucket",JSON.stringify(r))}removeItem(t){const r=this.bucketSource.value.filter(o=>o.id!==t.id);this.bucketSource.next([...r]),window.localStorage.setItem("bucket",JSON.stringify(r))}static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275prov=i.wxM({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function bn(e,n){if(1&e&&(i.I0R(0,"option",11),i.OEk(1),i.C$Y()),2&e){const t=n.$implicit;i._6D("value",t),i.yG2(),i.oRS(" ",t," ")}}function Mn(e,n){if(1&e){const t=i.KQA();i.I0R(0,"div",16)(1,"div",17),i.OEk(2),i.C$Y(),i.I0R(3,"div",18),i.qCj("click",function(){const s=i.usT(t).$implicit,a=i.GaO(3);return i.CGJ(a.deleteFromBucket(s))}),i.I0R(4,"div",19),i.OEk(5,"delete"),i.C$Y()()()}if(2&e){const t=n.$implicit;i.yG2(2),i.cNF(t.name)}}function Dn(e,n){if(1&e&&(i.SAx(0),i.yuY(1,Mn,6,1,"div",15),i.k70()),2&e){const t=i.GaO().ngIf;i.yG2(),i.E7m("ngForOf",t)}}function An(e,n){1&e&&(i.I0R(0,"div",20),i.OEk(1," No items in bucket. Add some fruits! "),i.C$Y())}function Fn(e,n){if(1&e&&(i.I0R(0,"div",12),i.yuY(1,Dn,2,1,"ng-container",13)(2,An,2,0,"ng-template",null,14,i.gJz),i.C$Y()),2&e){const t=n.ngIf,r=i.Gew(3);i.yG2(),i.E7m("ngIf",t.length>0)("ngIfElse",r)}}let wn=(()=>{class e{constructor(){this.bucketService=(0,i.uUt)(Vn),this.$bucket=this.bucketService.$bucket,this.selectedFruit="",this.fruits=Object.values(de)}ngOnInit(){this.bucketService.loadItems()}addSelectedFruitToBucket(){this.bucketService.addItem({id:Date.now(),name:this.selectedFruit})}deleteFromBucket(t){this.bucketService.removeItem(t)}static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275cmp=i.In1({type:e,selectors:[["app-bucket"]],standalone:!0,features:[i.UHJ],decls:17,vars:6,consts:[[1,"add-section"],[1,"input-group","flex","items-center","gap-4","justify-between","w-full"],["id","inputGroupSelect04","aria-label","Example select with button addon",1,"custom-select","flex-1","cursor-pointer","outline-none","rounded-md","border","border-slate-900","px-2","py-1.5",3,"ngModel","ngModelChange"],["selected","","value",""],[3,"value",4,"ngFor","ngForOf"],[1,"input-group-append"],["type","button",1,"btn","btn-outline-secondary",3,"disabled","click"],[1,"page-section"],[1,"text-2xl","mt-4","flex","items-center","gap-2"],[1,"text-lg","material-symbols-outlined"],["class","fruits",4,"ngIf"],[3,"value"],[1,"fruits"],[4,"ngIf","ngIfElse"],["bucketEmptyMessage",""],["class","fruits__item",4,"ngFor","ngForOf"],[1,"fruits__item"],[1,"fruits__item__title"],[1,"fruites__item__delete-icon",3,"click"],[1,"material-symbols-outlined"],[1,"fruits__no-items-msg"]],template:function(r,o){1&r&&(i.I0R(0,"div",0)(1,"div",1)(2,"select",2),i.iHE("ngModelChange",function(a){return i.kNx(o.selectedFruit,a)||(o.selectedFruit=a),a}),i.I0R(3,"option",3),i.OEk(4,"Choose..."),i.C$Y(),i.yuY(5,bn,2,2,"option",4),i.C$Y(),i.I0R(6,"div",5)(7,"button",6),i.qCj("click",function(){return o.addSelectedFruitToBucket()}),i.OEk(8," Add to Bucket "),i.C$Y()()()(),i.I0R(9,"div",7)(10,"h2",8)(11,"span"),i.OEk(12,"Bucket"),i.C$Y(),i.I0R(13,"span",9),i.OEk(14," shopping_cart "),i.C$Y()(),i.yuY(15,Fn,4,2,"div",10),i.wVc(16,"async"),i.C$Y()),2&r&&(i.yG2(2),i.OKB("ngModel",o.selectedFruit),i.yG2(3),i.E7m("ngForOf",o.fruits),i.yG2(2),i.E7m("disabled",!o.selectedFruit),i.yG2(8),i.E7m("ngIf",i.kDX(16,4,o.$bucket)))},dependencies:[v.MD,v.ay,v.u_,v.a,vn,Qt,ee,P,Nt,tt],styles:[".fruits[_ngcontent-%COMP%]{width:300px}.fruits__item[_ngcontent-%COMP%]{padding:4px 8px;border:1px solid rgba(238,238,238,.9333333333);display:flex;align-items:center}.fruits__item__title[_ngcontent-%COMP%]{flex:1;margin-right:16px}.fruits__item[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{color:red;cursor:pointer}.fruits__item[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]:hover{color:#333}.fruits__item--limited[_ngcontent-%COMP%]{background-color:#333;color:#fff}.add-section[_ngcontent-%COMP%]{width:300px;display:flex;align-items:center}"]})}return e})()}}]);