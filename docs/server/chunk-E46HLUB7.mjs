import './polyfills.server.mjs';
import{a as z}from"./chunk-OPLI5KME.mjs";import{Bb as A,Nb as m,P as I,R as g,S as se,T as N,Ta as a,V as p,Za as b,_b as oe,aa as C,ca as S,da as l,db as d,i as ie,ka as W,mb as q,n as ne,na as O,ra as V,sa as D,t as re}from"./chunk-RHIAHIG3.mjs";import{a as u,b as f}from"./chunk-VVCT4QZE.mjs";var _e=(()=>{class i{constructor(t,n){this._renderer=t,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(n){return new(n||i)(a(b),a(V))}}static{this.\u0275dir=l({type:i})}}return i})(),K=(()=>{class i extends _e{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=O(i)))(r||i)}})()}static{this.\u0275dir=l({type:i,features:[d]})}}return i})(),U=new p("");var He={provide:U,useExisting:g(()=>ye),multi:!0};function Le(){let i=z()?z().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var $e=new p(""),ye=(()=>{class i extends _e{constructor(t,n,r){super(t,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Le())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(n){return new(n||i)(a(b),a(V),a($e,8))}}static{this.\u0275dir=l({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&A("input",function(o){return r._handleInput(o.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(o){return r._compositionEnd(o.target.value)})},features:[m([He]),d]})}}return i})();function c(i){return i==null||(typeof i=="string"||Array.isArray(i))&&i.length===0}function ve(i){return i!=null&&typeof i.length=="number"}var Ce=new p(""),Ve=new p(""),We=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,ae=class{static min(e){return qe(e)}static max(e){return ze(e)}static required(e){return Ze(e)}static requiredTrue(e){return Xe(e)}static email(e){return Ye(e)}static minLength(e){return Ke(e)}static maxLength(e){return Je(e)}static pattern(e){return Qe(e)}static nullValidator(e){return De(e)}static compose(e){return we(e)}static composeAsync(e){return Ne(e)}};function qe(i){return e=>{if(c(e.value)||c(i))return null;let t=parseFloat(e.value);return!isNaN(t)&&t<i?{min:{min:i,actual:e.value}}:null}}function ze(i){return e=>{if(c(e.value)||c(i))return null;let t=parseFloat(e.value);return!isNaN(t)&&t>i?{max:{max:i,actual:e.value}}:null}}function Ze(i){return c(i.value)?{required:!0}:null}function Xe(i){return i.value===!0?null:{required:!0}}function Ye(i){return c(i.value)||We.test(i.value)?null:{email:!0}}function Ke(i){return e=>c(e.value)||!ve(e.value)?null:e.value.length<i?{minlength:{requiredLength:i,actualLength:e.value.length}}:null}function Je(i){return e=>ve(e.value)&&e.value.length>i?{maxlength:{requiredLength:i,actualLength:e.value.length}}:null}function Qe(i){if(!i)return De;let e,t;return typeof i=="string"?(t="",i.charAt(0)!=="^"&&(t+="^"),t+=i,i.charAt(i.length-1)!=="$"&&(t+="$"),e=new RegExp(t)):(t=i.toString(),e=i),n=>{if(c(n.value))return null;let r=n.value;return e.test(r)?null:{pattern:{requiredPattern:t,actualValue:r}}}}function De(i){return null}function be(i){return i!=null}function Ae(i){return oe(i)?ie(i):i}function Me(i){let e={};return i.forEach(t=>{e=t!=null?u(u({},e),t):e}),Object.keys(e).length===0?null:e}function Fe(i,e){return e.map(t=>t(i))}function et(i){return!i.validate}function Ee(i){return i.map(e=>et(e)?e:t=>e.validate(t))}function we(i){if(!i)return null;let e=i.filter(be);return e.length==0?null:function(t){return Me(Fe(t,e))}}function Ie(i){return i!=null?we(Ee(i)):null}function Ne(i){if(!i)return null;let e=i.filter(be);return e.length==0?null:function(t){let n=Fe(t,e).map(Ae);return re(n).pipe(ne(Me))}}function Se(i){return i!=null?Ne(Ee(i)):null}function le(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function Oe(i){return i._rawValidators}function xe(i){return i._rawAsyncValidators}function Z(i){return i?Array.isArray(i)?i:[i]:[]}function k(i,e){return Array.isArray(i)?i.includes(e):i===e}function ue(i,e){let t=Z(e);return Z(i).forEach(r=>{k(t,r)||t.push(r)}),t}function de(i,e){return Z(e).filter(t=>!k(i,t))}var G=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Ie(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Se(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},y=class extends G{get formDirective(){return null}get path(){return null}},E=class extends G{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},T=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},tt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},zt=f(u({},tt),{"[class.ng-submitted]":"isSubmitted"}),Zt=(()=>{class i extends T{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(a(E,2))}}static{this.\u0275dir=l({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&q("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[d]})}}return i})(),Xt=(()=>{class i extends T{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(a(y,10))}}static{this.\u0275dir=l({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){n&2&&q("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[d]})}}return i})();var M="VALID",x="INVALID",_="PENDING",F="DISABLED";function J(i){return(H(i)?i.validators:i)||null}function it(i){return Array.isArray(i)?Ie(i):i||null}function Q(i,e){return(H(e)?e.asyncValidators:i)||null}function nt(i){return Array.isArray(i)?Se(i):i||null}function H(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function Pe(i,e,t){let n=i.controls;if(!(e?Object.keys(n):n).length)throw new I(1e3,"");if(!n[t])throw new I(1001,"")}function ke(i,e,t){i._forEachChild((n,r)=>{if(t[r]===void 0)throw new I(1002,"")})}var v=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===M}get invalid(){return this.status===x}get pending(){return this.status==_}get disabled(){return this.status===F}get enabled(){return this.status!==F}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(ue(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(ue(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(de(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(de(e,this._rawAsyncValidators))}hasValidator(e){return k(this._rawValidators,e)}hasAsyncValidator(e){return k(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=_,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=F,this.errors=null,this._forEachChild(n=>{n.disable(f(u({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(f(u({},e),{skipPristineCheck:t})),this._onDisabledChange.forEach(n=>n(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=M,this._forEachChild(n=>{n.enable(f(u({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(f(u({},e),{skipPristineCheck:t})),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===M||this.status===_)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?F:M}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=_,this._hasOwnPendingAsyncValidator=!0;let t=Ae(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(n=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(n,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,r)=>n&&n._find(r),this)}getError(e,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new D,this.statusChanges=new D}_calculateStatus(){return this._allControlsDisabled()?F:this.errors?x:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(_)?_:this._anyControlsHaveStatus(x)?x:M}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){H(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=it(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=nt(this._rawAsyncValidators)}},j=class extends v{constructor(e,t,n){super(J(t),Q(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,n={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){ke(this,!0,e),Object.keys(e).forEach(n=>{Pe(this,!0,n),this.controls[n].setValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(n=>{let r=this.controls[n];r&&r.patchValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((n,r)=>{n.reset(e?e[r]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,n)=>(e[n]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,n)=>n._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let n=this.controls[t];n&&e(n,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,n]of Object.entries(this.controls))if(this.contains(t)&&e(n))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,n,r)=>((n.enabled||this.disabled)&&(t[r]=n.value),t))}_reduceChildren(e,t){let n=e;return this._forEachChild((r,s)=>{n=t(n,r,s)}),n}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var X=class extends j{};var ee=new p("CallSetDisabledState",{providedIn:"root",factory:()=>L}),L="always";function rt(i,e){return[...e.path,i]}function ce(i,e,t=L){te(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),ot(i,e),lt(i,e),at(i,e),st(i,e)}function he(i,e,t=!0){let n=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(n),e.valueAccessor.registerOnTouched(n)),R(i,e),i&&(e._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function B(i,e){i.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function st(i,e){if(e.valueAccessor.setDisabledState){let t=n=>{e.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(t),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(t)})}}function te(i,e){let t=Oe(i);e.validator!==null?i.setValidators(le(t,e.validator)):typeof t=="function"&&i.setValidators([t]);let n=xe(i);e.asyncValidator!==null?i.setAsyncValidators(le(n,e.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();B(e._rawValidators,r),B(e._rawAsyncValidators,r)}function R(i,e){let t=!1;if(i!==null){if(e.validator!==null){let r=Oe(i);if(Array.isArray(r)&&r.length>0){let s=r.filter(o=>o!==e.validator);s.length!==r.length&&(t=!0,i.setValidators(s))}}if(e.asyncValidator!==null){let r=xe(i);if(Array.isArray(r)&&r.length>0){let s=r.filter(o=>o!==e.asyncValidator);s.length!==r.length&&(t=!0,i.setAsyncValidators(s))}}}let n=()=>{};return B(e._rawValidators,n),B(e._rawAsyncValidators,n),t}function ot(i,e){e.valueAccessor.registerOnChange(t=>{i._pendingValue=t,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&Ge(i,e)})}function at(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&Ge(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function Ge(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function lt(i,e){let t=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};i.registerOnChange(t),e._registerOnDestroy(()=>{i._unregisterOnChange(t)})}function ut(i,e){i==null,te(i,e)}function dt(i,e){return R(i,e)}function ct(i,e){if(!i.hasOwnProperty("model"))return!1;let t=i.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function ht(i){return Object.getPrototypeOf(i.constructor)===K}function ft(i,e){i._syncPendingControls(),e.forEach(t=>{let n=t.control;n.updateOn==="submit"&&n._pendingChange&&(t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function pt(i,e){if(!e)return null;Array.isArray(e);let t,n,r;return e.forEach(s=>{s.constructor===ye?t=s:ht(s)?n=s:r=s}),r||n||t||null}function gt(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function fe(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function pe(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var P=class extends v{constructor(e=null,t,n){super(J(t),Q(n,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),H(t)&&(t.nonNullable||t.initialValueIsDefault)&&(pe(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){fe(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){fe(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){pe(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var mt=i=>i instanceof P;var Kt=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275dir=l({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}}return i})();var Te=new p("");var _t={provide:y,useExisting:g(()=>yt)},yt=(()=>{class i extends y{constructor(t,n,r){super(),this.callSetDisabledState=r,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new D,this._setValidators(t),this._setAsyncValidators(n)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(R(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let n=this.form.get(t.path);return ce(n,t,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),n}getControl(t){return this.form.get(t.path)}removeControl(t){he(t.control||null,t,!1),gt(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,n){this.form.get(t.path).setValue(n)}onSubmit(t){return this.submitted=!0,ft(this.form,this.directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{let n=t.control,r=this.form.get(t.path);n!==r&&(he(n||null,t),mt(r)&&(ce(r,t,this.callSetDisabledState),t.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let n=this.form.get(t.path);ut(n,t),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let n=this.form.get(t.path);n&&dt(n,t)&&n.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){te(this.form,this),this._oldForm&&R(this._oldForm,this)}_checkFormPresent(){this.form}static{this.\u0275fac=function(n){return new(n||i)(a(Ce,10),a(Ve,10),a(ee,8))}}static{this.\u0275dir=l({type:i,selectors:[["","formGroup",""]],hostBindings:function(n,r){n&1&&A("submit",function(o){return r.onSubmit(o)})("reset",function(){return r.onReset()})},inputs:{form:[C.None,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[m([_t]),d,W]})}}return i})();var vt={provide:E,useExisting:g(()=>Ct)},Ct=(()=>{class i extends E{set isDisabled(t){}static{this._ngModelWarningSentOnce=!1}constructor(t,n,r,s,o){super(),this._ngModelWarningConfig=o,this._added=!1,this.name=null,this.update=new D,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=pt(this,s)}ngOnChanges(t){this._added||this._setUpControl(),ct(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return rt(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}static{this.\u0275fac=function(n){return new(n||i)(a(y,13),a(Ce,10),a(Ve,10),a(U,10),a(Te,8))}}static{this.\u0275dir=l({type:i,selectors:[["","formControlName",""]],inputs:{name:[C.None,"formControlName","name"],isDisabled:[C.None,"disabled","isDisabled"],model:[C.None,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[m([vt]),d,W]})}}return i})(),Vt={provide:U,useExisting:g(()=>Be),multi:!0};function je(i,e){return i==null?`${e}`:(e&&typeof e=="object"&&(e="Object"),`${i}: ${e}`.slice(0,50))}function Dt(i){return i.split(":")[0]}var Be=(()=>{class i extends K{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){this.value=t;let n=this._getOptionId(t),r=je(n,t);this.setProperty("value",r)}registerOnChange(t){this.onChange=n=>{this.value=this._getOptionValue(n),t(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(t){for(let n of this._optionMap.keys())if(this._compareWith(this._optionMap.get(n),t))return n;return null}_getOptionValue(t){let n=Dt(t);return this._optionMap.has(n)?this._optionMap.get(n):t}static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=O(i)))(r||i)}})()}static{this.\u0275dir=l({type:i,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(n,r){n&1&&A("change",function(o){return r.onChange(o.target.value)})("blur",function(){return r.onTouched()})},inputs:{compareWith:"compareWith"},features:[m([Vt]),d]})}}return i})(),Jt=(()=>{class i{constructor(t,n,r){this._element=t,this._renderer=n,this._select=r,this._select&&(this.id=this._select._registerOption())}set ngValue(t){this._select!=null&&(this._select._optionMap.set(this.id,t),this._setElementValue(je(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._setElementValue(t),this._select&&this._select.writeValue(this._select.value)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static{this.\u0275fac=function(n){return new(n||i)(a(V),a(b),a(Be,9))}}static{this.\u0275dir=l({type:i,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}})}}return i})(),bt={provide:U,useExisting:g(()=>Re),multi:!0};function ge(i,e){return i==null?`${e}`:(typeof e=="string"&&(e=`'${e}'`),e&&typeof e=="object"&&(e="Object"),`${i}: ${e}`.slice(0,50))}function At(i){return i.split(":")[0]}var Re=(()=>{class i extends K{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){this.value=t;let n;if(Array.isArray(t)){let r=t.map(s=>this._getOptionId(s));n=(s,o)=>{s._setSelected(r.indexOf(o.toString())>-1)}}else n=(r,s)=>{r._setSelected(!1)};this._optionMap.forEach(n)}registerOnChange(t){this.onChange=n=>{let r=[],s=n.selectedOptions;if(s!==void 0){let o=s;for(let h=0;h<o.length;h++){let w=o[h],$=this._getOptionValue(w.value);r.push($)}}else{let o=n.options;for(let h=0;h<o.length;h++){let w=o[h];if(w.selected){let $=this._getOptionValue(w.value);r.push($)}}}this.value=r,t(r)}}_registerOption(t){let n=(this._idCounter++).toString();return this._optionMap.set(n,t),n}_getOptionId(t){for(let n of this._optionMap.keys())if(this._compareWith(this._optionMap.get(n)._value,t))return n;return null}_getOptionValue(t){let n=At(t);return this._optionMap.has(n)?this._optionMap.get(n)._value:t}static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=O(i)))(r||i)}})()}static{this.\u0275dir=l({type:i,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(n,r){n&1&&A("change",function(o){return r.onChange(o.target)})("blur",function(){return r.onTouched()})},inputs:{compareWith:"compareWith"},features:[m([bt]),d]})}}return i})(),Qt=(()=>{class i{constructor(t,n,r){this._element=t,this._renderer=n,this._select=r,this._select&&(this.id=this._select._registerOption(this))}set ngValue(t){this._select!=null&&(this._value=t,this._setElementValue(ge(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._select?(this._value=t,this._setElementValue(ge(this.id,t)),this._select.writeValue(this._select.value)):this._setElementValue(t)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}_setSelected(t){this._renderer.setProperty(this._element.nativeElement,"selected",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static{this.\u0275fac=function(n){return new(n||i)(a(V),a(b),a(Re,9))}}static{this.\u0275dir=l({type:i,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}})}}return i})();var Ue=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=S({type:i})}static{this.\u0275inj=N({})}}return i})(),Y=class extends v{constructor(e,t,n){super(J(t),Q(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,t={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(e,t,n={}){this.controls.splice(e,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(e,t={}){let n=this._adjustIndex(e);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(e,t,n={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),t&&(this.controls.splice(r,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,t={}){ke(this,!1,e),e.forEach((n,r)=>{Pe(this,!1,r),this.at(r).setValue(n,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(e.forEach((n,r)=>{this.at(r)&&this.at(r).patchValue(n,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e=[],t={}){this._forEachChild((n,r)=>{n.reset(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((t,n)=>n._syncPendingControls()?!0:t,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((t,n)=>{e(t,n)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(t=>t.enabled&&e(t))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};function me(i){return!!i&&(i.asyncValidators!==void 0||i.validators!==void 0||i.updateOn!==void 0)}var ei=(()=>{class i{constructor(){this.useNonNullable=!1}get nonNullable(){let t=new i;return t.useNonNullable=!0,t}group(t,n=null){let r=this._reduceControls(t),s={};return me(n)?s=n:n!==null&&(s.validators=n.validator,s.asyncValidators=n.asyncValidator),new j(r,s)}record(t,n=null){let r=this._reduceControls(t);return new X(r,n)}control(t,n,r){let s={};return this.useNonNullable?(me(n)?s=n:(s.validators=n,s.asyncValidators=r),new P(t,f(u({},s),{nonNullable:!0}))):new P(t,n,r)}array(t,n,r){let s=t.map(o=>this._createControl(o));return new Y(s,n,r)}_reduceControls(t){let n={};return Object.keys(t).forEach(r=>{n[r]=this._createControl(t[r])}),n}_createControl(t){if(t instanceof P)return t;if(t instanceof v)return t;if(Array.isArray(t)){let n=t[0],r=t.length>1?t[1]:null,s=t.length>2?t[2]:null;return this.control(n,r,s)}else return this.control(t)}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=se({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var ti=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:ee,useValue:t.callSetDisabledState??L}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=S({type:i})}static{this.\u0275inj=N({imports:[Ue]})}}return i})(),ii=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:Te,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:ee,useValue:t.callSetDisabledState??L}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=S({type:i})}static{this.\u0275inj=N({imports:[Ue]})}}return i})();export{ye as a,ae as b,Zt as c,Xt as d,j as e,P as f,Kt as g,yt as h,Ct as i,Jt as j,Qt as k,ei as l,ti as m,ii as n};
