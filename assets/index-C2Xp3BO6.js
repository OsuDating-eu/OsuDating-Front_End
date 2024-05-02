(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();/**
* @vue/shared v3.4.23
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function _i(e,t){const n=new Set(e.split(","));return t?r=>n.has(r.toLowerCase()):r=>n.has(r)}const ie={},Ut=[],Re=()=>{},pl=()=>!1,mr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Ai=e=>e.startsWith("onUpdate:"),me=Object.assign,ki=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},gl=Object.prototype.hasOwnProperty,V=(e,t)=>gl.call(e,t),U=Array.isArray,Yt=e=>hr(e)==="[object Map]",Oo=e=>hr(e)==="[object Set]",Y=e=>typeof e=="function",ue=e=>typeof e=="string",Tt=e=>typeof e=="symbol",ae=e=>e!==null&&typeof e=="object",Po=e=>(ae(e)||Y(e))&&Y(e.then)&&Y(e.catch),Co=Object.prototype.toString,hr=e=>Co.call(e),vl=e=>hr(e).slice(8,-1),Ro=e=>hr(e)==="[object Object]",Ei=e=>ue(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ln=_i(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),pr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},bl=/-(\w)/g,qe=pr(e=>e.replace(bl,(t,n)=>n?n.toUpperCase():"")),yl=/\B([A-Z])/g,Qt=pr(e=>e.replace(yl,"-$1").toLowerCase()),gr=pr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Rr=pr(e=>e?`on${gr(e)}`:""),pt=(e,t)=>!Object.is(e,t),Ir=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Io=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},xl=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let sa;const To=()=>sa||(sa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Si(e){if(U(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=ue(r)?kl(r):Si(r);if(i)for(const a in i)t[a]=i[a]}return t}else if(ue(e)||ae(e))return e}const wl=/;(?![^(]*\))/g,_l=/:([^]+)/,Al=/\/\*[^]*?\*\//g;function kl(e){const t={};return e.replace(Al,"").split(wl).forEach(n=>{if(n){const r=n.split(_l);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function vr(e){let t="";if(ue(e))t=e;else if(U(e))for(let n=0;n<e.length;n++){const r=vr(e[n]);r&&(t+=r+" ")}else if(ae(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const El="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Sl=_i(El);function No(e){return!!e||e===""}const Ol=e=>ue(e)?e:e==null?"":U(e)||ae(e)&&(e.toString===Co||!Y(e.toString))?JSON.stringify(e,Mo,2):String(e),Mo=(e,t)=>t&&t.__v_isRef?Mo(e,t.value):Yt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i],a)=>(n[Tr(r,a)+" =>"]=i,n),{})}:Oo(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Tr(n))}:Tt(t)?Tr(t):ae(t)&&!U(t)&&!Ro(t)?String(t):t,Tr=(e,t="")=>{var n;return Tt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.23
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Te;class Pl{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Te,!t&&Te&&(this.index=(Te.scopes||(Te.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Te;try{return Te=this,t()}finally{Te=n}}}on(){Te=this}off(){Te=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Cl(e,t=Te){t&&t.active&&t.effects.push(e)}function Rl(){return Te}let Ot;class Oi{constructor(t,n,r,i){this.fn=t,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Cl(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,yt();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(Il(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),xt()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=mt,n=Ot;try{return mt=!0,Ot=this,this._runnings++,la(this),this.fn()}finally{ca(this),this._runnings--,Ot=n,mt=t}}stop(){var t;this.active&&(la(this),ca(this),(t=this.onStop)==null||t.call(this),this.active=!1)}}function Il(e){return e.value}function la(e){e._trackId++,e._depsLength=0}function ca(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)Lo(e.deps[t],e);e.deps.length=e._depsLength}}function Lo(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let mt=!0,Gr=0;const jo=[];function yt(){jo.push(mt),mt=!1}function xt(){const e=jo.pop();mt=e===void 0?!0:e}function Pi(){Gr++}function Ci(){for(Gr--;!Gr&&Kr.length;)Kr.shift()()}function Fo(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&Lo(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const Kr=[];function zo(e,t,n){Pi();for(const r of e.keys()){let i;r._dirtyLevel<t&&(i??(i=e.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=t),r._shouldSchedule&&(i??(i=e.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Kr.push(r.scheduler)))}Ci()}const Do=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},Xr=new WeakMap,Pt=Symbol(""),Qr=Symbol("");function Ae(e,t,n){if(mt&&Ot){let r=Xr.get(e);r||Xr.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=Do(()=>r.delete(n))),Fo(Ot,i)}}function Qe(e,t,n,r,i,a){const o=Xr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&U(e)){const l=Number(r);o.forEach((u,c)=>{(c==="length"||!Tt(c)&&c>=l)&&s.push(u)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":U(e)?Ei(n)&&s.push(o.get("length")):(s.push(o.get(Pt)),Yt(e)&&s.push(o.get(Qr)));break;case"delete":U(e)||(s.push(o.get(Pt)),Yt(e)&&s.push(o.get(Qr)));break;case"set":Yt(e)&&s.push(o.get(Pt));break}Pi();for(const l of s)l&&zo(l,4);Ci()}const Tl=_i("__proto__,__v_isRef,__isVue"),Ho=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Tt)),fa=Nl();function Nl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=q(this);for(let a=0,o=this.length;a<o;a++)Ae(r,"get",a+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(q)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){yt(),Pi();const r=q(this)[t].apply(this,n);return Ci(),xt(),r}}),e}function Ml(e){Tt(e)||(e=String(e));const t=q(this);return Ae(t,"has",e),t.hasOwnProperty(e)}class Bo{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){const i=this._isReadonly,a=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return a;if(n==="__v_raw")return r===(i?a?ql:Wo:a?$o:Yo).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=U(t);if(!i){if(o&&V(fa,n))return Reflect.get(fa,n,r);if(n==="hasOwnProperty")return Ml}const s=Reflect.get(t,n,r);return(Tt(n)?Ho.has(n):Tl(n))||(i||Ae(t,"get",n),a)?s:ke(s)?o&&Ei(n)?s:s.value:ae(s)?i?qo(s):yr(s):s}}class Uo extends Bo{constructor(t=!1){super(!1,t)}set(t,n,r,i){let a=t[n];if(!this._isShallow){const l=vn(a);if(!ir(r)&&!vn(r)&&(a=q(a),r=q(r)),!U(t)&&ke(a)&&!ke(r))return l?!1:(a.value=r,!0)}const o=U(t)&&Ei(n)?Number(n)<t.length:V(t,n),s=Reflect.set(t,n,r,i);return t===q(i)&&(o?pt(r,a)&&Qe(t,"set",n,r):Qe(t,"add",n,r)),s}deleteProperty(t,n){const r=V(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&r&&Qe(t,"delete",n,void 0),i}has(t,n){const r=Reflect.has(t,n);return(!Tt(n)||!Ho.has(n))&&Ae(t,"has",n),r}ownKeys(t){return Ae(t,"iterate",U(t)?"length":Pt),Reflect.ownKeys(t)}}class Ll extends Bo{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const jl=new Uo,Fl=new Ll,zl=new Uo(!0),Ri=e=>e,br=e=>Reflect.getPrototypeOf(e);function Mn(e,t,n=!1,r=!1){e=e.__v_raw;const i=q(e),a=q(t);n||(pt(t,a)&&Ae(i,"get",t),Ae(i,"get",a));const{has:o}=br(i),s=r?Ri:n?Ni:bn;if(o.call(i,t))return s(e.get(t));if(o.call(i,a))return s(e.get(a));e!==i&&e.get(t)}function Ln(e,t=!1){const n=this.__v_raw,r=q(n),i=q(e);return t||(pt(e,i)&&Ae(r,"has",e),Ae(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function jn(e,t=!1){return e=e.__v_raw,!t&&Ae(q(e),"iterate",Pt),Reflect.get(e,"size",e)}function ua(e){e=q(e);const t=q(this);return br(t).has.call(t,e)||(t.add(e),Qe(t,"add",e,e)),this}function da(e,t){t=q(t);const n=q(this),{has:r,get:i}=br(n);let a=r.call(n,e);a||(e=q(e),a=r.call(n,e));const o=i.call(n,e);return n.set(e,t),a?pt(t,o)&&Qe(n,"set",e,t):Qe(n,"add",e,t),this}function ma(e){const t=q(this),{has:n,get:r}=br(t);let i=n.call(t,e);i||(e=q(e),i=n.call(t,e)),r&&r.call(t,e);const a=t.delete(e);return i&&Qe(t,"delete",e,void 0),a}function ha(){const e=q(this),t=e.size!==0,n=e.clear();return t&&Qe(e,"clear",void 0,void 0),n}function Fn(e,t){return function(r,i){const a=this,o=a.__v_raw,s=q(o),l=t?Ri:e?Ni:bn;return!e&&Ae(s,"iterate",Pt),o.forEach((u,c)=>r.call(i,l(u),l(c),a))}}function zn(e,t,n){return function(...r){const i=this.__v_raw,a=q(i),o=Yt(a),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=i[e](...r),c=n?Ri:t?Ni:bn;return!t&&Ae(a,"iterate",l?Qr:Pt),{next(){const{value:m,done:h}=u.next();return h?{value:m,done:h}:{value:s?[c(m[0]),c(m[1])]:c(m),done:h}},[Symbol.iterator](){return this}}}}function ot(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Dl(){const e={get(a){return Mn(this,a)},get size(){return jn(this)},has:Ln,add:ua,set:da,delete:ma,clear:ha,forEach:Fn(!1,!1)},t={get(a){return Mn(this,a,!1,!0)},get size(){return jn(this)},has:Ln,add:ua,set:da,delete:ma,clear:ha,forEach:Fn(!1,!0)},n={get(a){return Mn(this,a,!0)},get size(){return jn(this,!0)},has(a){return Ln.call(this,a,!0)},add:ot("add"),set:ot("set"),delete:ot("delete"),clear:ot("clear"),forEach:Fn(!0,!1)},r={get(a){return Mn(this,a,!0,!0)},get size(){return jn(this,!0)},has(a){return Ln.call(this,a,!0)},add:ot("add"),set:ot("set"),delete:ot("delete"),clear:ot("clear"),forEach:Fn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=zn(a,!1,!1),n[a]=zn(a,!0,!1),t[a]=zn(a,!1,!0),r[a]=zn(a,!0,!0)}),[e,n,t,r]}const[Hl,Bl,Ul,Yl]=Dl();function Ii(e,t){const n=t?e?Yl:Ul:e?Bl:Hl;return(r,i,a)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(V(n,i)&&i in r?n:r,i,a)}const $l={get:Ii(!1,!1)},Wl={get:Ii(!1,!0)},Vl={get:Ii(!0,!1)},Yo=new WeakMap,$o=new WeakMap,Wo=new WeakMap,ql=new WeakMap;function Gl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Kl(e){return e.__v_skip||!Object.isExtensible(e)?0:Gl(vl(e))}function yr(e){return vn(e)?e:Ti(e,!1,jl,$l,Yo)}function Vo(e){return Ti(e,!1,zl,Wl,$o)}function qo(e){return Ti(e,!0,Fl,Vl,Wo)}function Ti(e,t,n,r,i){if(!ae(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const a=i.get(e);if(a)return a;const o=Kl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function cn(e){return vn(e)?cn(e.__v_raw):!!(e&&e.__v_isReactive)}function vn(e){return!!(e&&e.__v_isReadonly)}function ir(e){return!!(e&&e.__v_isShallow)}function Go(e){return e?!!e.__v_raw:!1}function q(e){const t=e&&e.__v_raw;return t?q(t):e}function Xl(e){return Object.isExtensible(e)&&Io(e,"__v_skip",!0),e}const bn=e=>ae(e)?yr(e):e,Ni=e=>ae(e)?qo(e):e;class Ko{constructor(t,n,r,i){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Oi(()=>t(this._value),()=>Qn(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=q(this);return(!t._cacheable||t.effect.dirty)&&pt(t._value,t._value=t.effect.run())&&Qn(t,4),Xo(t),t.effect._dirtyLevel>=2&&Qn(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function Ql(e,t,n=!1){let r,i;const a=Y(e);return a?(r=e,i=Re):(r=e.get,i=e.set),new Ko(r,i,a||!i,n)}function Xo(e){var t;mt&&Ot&&(e=q(e),Fo(Ot,(t=e.dep)!=null?t:e.dep=Do(()=>e.dep=void 0,e instanceof Ko?e:void 0)))}function Qn(e,t=4,n){e=q(e);const r=e.dep;r&&zo(r,t)}function ke(e){return!!(e&&e.__v_isRef===!0)}function Qo(e){return Zo(e,!1)}function Zl(e){return Zo(e,!0)}function Zo(e,t){return ke(e)?e:new Jl(e,t)}class Jl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:q(t),this._value=n?t:bn(t)}get value(){return Xo(this),this._value}set value(t){const n=this.__v_isShallow||ir(t)||vn(t);t=n?t:q(t),pt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:bn(t),Qn(this,4))}}function Pe(e){return ke(e)?e.value:e}const ec={get:(e,t,n)=>Pe(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return ke(i)&&!ke(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Jo(e){return cn(e)?e:new Proxy(e,ec)}/**
* @vue/runtime-core v3.4.23
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ht(e,t,n,r){try{return r?e(...r):e()}catch(i){xr(i,t,n)}}function je(e,t,n,r){if(Y(e)){const i=ht(e,t,n,r);return i&&Po(i)&&i.catch(a=>{xr(a,t,n)}),i}if(U(e)){const i=[];for(let a=0;a<e.length;a++)i.push(je(e[a],t,n,r));return i}}function xr(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let a=t.parent;const o=t.proxy,s=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let c=0;c<u.length;c++)if(u[c](e,o,s)===!1)return}a=a.parent}const l=t.appContext.config.errorHandler;if(l){yt(),ht(l,null,10,[e,o,s]),xt();return}}tc(e,n,i,r)}function tc(e,t,n,r=!0){console.error(e)}let yn=!1,Zr=!1;const ve=[];let $e=0;const $t=[];let ct=null,kt=0;const es=Promise.resolve();let Mi=null;function ts(e){const t=Mi||es;return e?t.then(this?e.bind(this):e):t}function nc(e){let t=$e+1,n=ve.length;for(;t<n;){const r=t+n>>>1,i=ve[r],a=xn(i);a<e||a===e&&i.pre?t=r+1:n=r}return t}function Li(e){(!ve.length||!ve.includes(e,yn&&e.allowRecurse?$e+1:$e))&&(e.id==null?ve.push(e):ve.splice(nc(e.id),0,e),ns())}function ns(){!yn&&!Zr&&(Zr=!0,Mi=es.then(is))}function rc(e){const t=ve.indexOf(e);t>$e&&ve.splice(t,1)}function ic(e){U(e)?$t.push(...e):(!ct||!ct.includes(e,e.allowRecurse?kt+1:kt))&&$t.push(e),ns()}function pa(e,t,n=yn?$e+1:0){for(;n<ve.length;n++){const r=ve[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;ve.splice(n,1),n--,r()}}}function rs(e){if($t.length){const t=[...new Set($t)].sort((n,r)=>xn(n)-xn(r));if($t.length=0,ct){ct.push(...t);return}for(ct=t,kt=0;kt<ct.length;kt++)ct[kt]();ct=null,kt=0}}const xn=e=>e.id==null?1/0:e.id,ac=(e,t)=>{const n=xn(e)-xn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function is(e){Zr=!1,yn=!0,ve.sort(ac);try{for($e=0;$e<ve.length;$e++){const t=ve[$e];t&&t.active!==!1&&ht(t,null,14)}}finally{$e=0,ve.length=0,rs(),yn=!1,Mi=null,(ve.length||$t.length)&&is()}}function oc(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ie;let i=n;const a=t.startsWith("update:"),o=a&&t.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:h}=r[c]||ie;h&&(i=n.map(g=>ue(g)?g.trim():g)),m&&(i=n.map(xl))}let s,l=r[s=Rr(t)]||r[s=Rr(qe(t))];!l&&a&&(l=r[s=Rr(Qt(t))]),l&&je(l,e,6,i);const u=r[s+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,je(u,e,6,i)}}function as(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const a=e.emits;let o={},s=!1;if(!Y(e)){const l=u=>{const c=as(u,t,!0);c&&(s=!0,me(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!a&&!s?(ae(e)&&r.set(e,null),null):(U(a)?a.forEach(l=>o[l]=null):me(o,a),ae(e)&&r.set(e,o),o)}function wr(e,t){return!e||!mr(t)?!1:(t=t.slice(2).replace(/Once$/,""),V(e,t[0].toLowerCase()+t.slice(1))||V(e,Qt(t))||V(e,t))}let Ne=null,_r=null;function ar(e){const t=Ne;return Ne=e,_r=e&&e.type.__scopeId||null,t}function sc(e){_r=e}function lc(){_r=null}function ji(e,t=Ne,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&Sa(-1);const a=ar(t);let o;try{o=e(...i)}finally{ar(a),r._d&&Sa(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Nr(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:a,propsOptions:[o],slots:s,attrs:l,emit:u,render:c,renderCache:m,data:h,setupState:g,ctx:P,inheritAttrs:N}=e;let F,y;const w=ar(e);try{if(n.shapeFlag&4){const D=i||r,$=D;F=Ye(c.call($,D,m,a,g,h,P)),y=l}else{const D=t;F=Ye(D.length>1?D(a,{attrs:l,slots:s,emit:u}):D(a,null)),y=t.props?l:cc(l)}}catch(D){mn.length=0,xr(D,e,1),F=se(Ct)}let C=F;if(y&&N!==!1){const D=Object.keys(y),{shapeFlag:$}=C;D.length&&$&7&&(o&&D.some(Ai)&&(y=fc(y,o)),C=qt(C,y))}return n.dirs&&(C=qt(C),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&(C.transition=n.transition),F=C,ar(w),F}const cc=e=>{let t;for(const n in e)(n==="class"||n==="style"||mr(n))&&((t||(t={}))[n]=e[n]);return t},fc=(e,t)=>{const n={};for(const r in e)(!Ai(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function uc(e,t,n){const{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:l}=t,u=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ga(r,o,u):!!o;if(l&8){const c=t.dynamicProps;for(let m=0;m<c.length;m++){const h=c[m];if(o[h]!==r[h]&&!wr(u,h))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ga(r,o,u):!0:!!o;return!1}function ga(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const a=r[i];if(t[a]!==e[a]&&!wr(n,a))return!0}return!1}function dc({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const os="components";function Fi(e,t){return hc(os,e,!0,t)||e}const mc=Symbol.for("v-ndc");function hc(e,t,n=!0,r=!1){const i=Ne||be;if(i){const a=i.type;if(e===os){const s=lf(a,!1);if(s&&(s===t||s===qe(t)||s===gr(qe(t))))return a}const o=va(i[e]||a[e],t)||va(i.appContext[e],t);return!o&&r?a:o}}function va(e,t){return e&&(e[t]||e[qe(t)]||e[gr(qe(t))])}const pc=e=>e.__isSuspense;function gc(e,t){t&&t.pendingBranch?U(e)?t.effects.push(...e):t.effects.push(e):ic(e)}const vc=Symbol.for("v-scx"),bc=()=>Ze(vc),Dn={};function fn(e,t,n){return ss(e,t,n)}function ss(e,t,{immediate:n,deep:r,flush:i,once:a,onTrack:o,onTrigger:s}=ie){if(t&&a){const z=t;t=(...Z)=>{z(...Z),$()}}const l=be,u=z=>r===!0?z:Dt(z,r===!1?1:void 0);let c,m=!1,h=!1;if(ke(e)?(c=()=>e.value,m=ir(e)):cn(e)?(c=()=>u(e),m=!0):U(e)?(h=!0,m=e.some(z=>cn(z)||ir(z)),c=()=>e.map(z=>{if(ke(z))return z.value;if(cn(z))return u(z);if(Y(z))return ht(z,l,2)})):Y(e)?t?c=()=>ht(e,l,2):c=()=>(g&&g(),je(e,l,3,[P])):c=Re,t&&r){const z=c;c=()=>Dt(z())}let g,P=z=>{g=C.onStop=()=>{ht(z,l,4),g=C.onStop=void 0}},N;if(Er)if(P=Re,t?n&&je(t,l,3,[c(),h?[]:void 0,P]):c(),i==="sync"){const z=bc();N=z.__watcherHandles||(z.__watcherHandles=[])}else return Re;let F=h?new Array(e.length).fill(Dn):Dn;const y=()=>{if(!(!C.active||!C.dirty))if(t){const z=C.run();(r||m||(h?z.some((Z,he)=>pt(Z,F[he])):pt(z,F)))&&(g&&g(),je(t,l,3,[z,F===Dn?void 0:h&&F[0]===Dn?[]:F,P]),F=z)}else C.run()};y.allowRecurse=!!t;let w;i==="sync"?w=y:i==="post"?w=()=>_e(y,l&&l.suspense):(y.pre=!0,l&&(y.id=l.uid),w=()=>Li(y));const C=new Oi(c,Re,w),D=Rl(),$=()=>{C.stop(),D&&ki(D.effects,C)};return t?n?y():F=C.run():i==="post"?_e(C.run.bind(C),l&&l.suspense):C.run(),N&&N.push($),$}function yc(e,t,n){const r=this.proxy,i=ue(e)?e.includes(".")?ls(r,e):()=>r[e]:e.bind(r,r);let a;Y(t)?a=t:(a=t.handler,n=t);const o=Cn(this),s=ss(i,a.bind(r),n);return o(),s}function ls(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Dt(e,t,n=0,r){if(!ae(e)||e.__v_skip)return e;if(t&&t>0){if(n>=t)return e;n++}if(r=r||new Set,r.has(e))return e;if(r.add(e),ke(e))Dt(e.value,t,n,r);else if(U(e))for(let i=0;i<e.length;i++)Dt(e[i],t,n,r);else if(Oo(e)||Yt(e))e.forEach(i=>{Dt(i,t,n,r)});else if(Ro(e))for(const i in e)Dt(e[i],t,n,r);return e}function _t(e,t,n,r){const i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){const s=i[o];a&&(s.oldValue=a[o].value);let l=s.dir[r];l&&(yt(),je(l,n,8,[e.el,s,e,t]),xt())}}/*! #__NO_SIDE_EFFECTS__ */function Nt(e,t){return Y(e)?me({name:e.name},t,{setup:e}):e}const Zn=e=>!!e.type.__asyncLoader,cs=e=>e.type.__isKeepAlive;function xc(e,t){fs(e,"a",t)}function wc(e,t){fs(e,"da",t)}function fs(e,t,n=be){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Ar(t,r,n),n){let i=n.parent;for(;i&&i.parent;)cs(i.parent.vnode)&&_c(r,t,n,i),i=i.parent}}function _c(e,t,n,r){const i=Ar(t,e,r,!0);us(()=>{ki(r[t],i)},n)}function Ar(e,t,n=be,r=!1){if(n){const i=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;yt();const s=Cn(n),l=je(t,n,e,o);return s(),xt(),l});return r?i.unshift(a):i.push(a),a}}const nt=e=>(t,n=be)=>(!Er||e==="sp")&&Ar(e,(...r)=>t(...r),n),Ac=nt("bm"),kc=nt("m"),Ec=nt("bu"),Sc=nt("u"),Oc=nt("bum"),us=nt("um"),Pc=nt("sp"),Cc=nt("rtg"),Rc=nt("rtc");function Ic(e,t=be){Ar("ec",e,t)}const Jr=e=>e?Os(e)?Bi(e)||e.proxy:Jr(e.parent):null,un=me(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Jr(e.parent),$root:e=>Jr(e.root),$emit:e=>e.emit,$options:e=>zi(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,Li(e.update)}),$nextTick:e=>e.n||(e.n=ts.bind(e.proxy)),$watch:e=>yc.bind(e)}),Mr=(e,t)=>e!==ie&&!e.__isScriptSetup&&V(e,t),Tc={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:a,accessCache:o,type:s,appContext:l}=e;let u;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return a[t]}else{if(Mr(r,t))return o[t]=1,r[t];if(i!==ie&&V(i,t))return o[t]=2,i[t];if((u=e.propsOptions[0])&&V(u,t))return o[t]=3,a[t];if(n!==ie&&V(n,t))return o[t]=4,n[t];ei&&(o[t]=0)}}const c=un[t];let m,h;if(c)return t==="$attrs"&&Ae(e.attrs,"get",""),c(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==ie&&V(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,V(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:a}=e;return Mr(i,t)?(i[t]=n,!0):r!==ie&&V(r,t)?(r[t]=n,!0):V(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:a}},o){let s;return!!n[o]||e!==ie&&V(e,o)||Mr(t,o)||(s=a[0])&&V(s,o)||V(r,o)||V(un,o)||V(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:V(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ba(e){return U(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ei=!0;function Nc(e){const t=zi(e),n=e.proxy,r=e.ctx;ei=!1,t.beforeCreate&&ya(t.beforeCreate,e,"bc");const{data:i,computed:a,methods:o,watch:s,provide:l,inject:u,created:c,beforeMount:m,mounted:h,beforeUpdate:g,updated:P,activated:N,deactivated:F,beforeDestroy:y,beforeUnmount:w,destroyed:C,unmounted:D,render:$,renderTracked:z,renderTriggered:Z,errorCaptured:he,serverPrefetch:pe,expose:Oe,inheritAttrs:it,components:wt,directives:ze,filters:en}=t;if(u&&Mc(u,r,null),o)for(const X in o){const G=o[X];Y(G)&&(r[X]=G.bind(n))}if(i){const X=i.call(n,n);ae(X)&&(e.data=yr(X))}if(ei=!0,a)for(const X in a){const G=a[X],Ge=Y(G)?G.bind(n,n):Y(G.get)?G.get.bind(n,n):Re,at=!Y(G)&&Y(G.set)?G.set.bind(n):Re,De=de({get:Ge,set:at});Object.defineProperty(r,X,{enumerable:!0,configurable:!0,get:()=>De.value,set:xe=>De.value=xe})}if(s)for(const X in s)ds(s[X],r,n,X);if(l){const X=Y(l)?l.call(n):l;Reflect.ownKeys(X).forEach(G=>{Jn(G,X[G])})}c&&ya(c,e,"c");function ce(X,G){U(G)?G.forEach(Ge=>X(Ge.bind(n))):G&&X(G.bind(n))}if(ce(Ac,m),ce(kc,h),ce(Ec,g),ce(Sc,P),ce(xc,N),ce(wc,F),ce(Ic,he),ce(Rc,z),ce(Cc,Z),ce(Oc,w),ce(us,D),ce(Pc,pe),U(Oe))if(Oe.length){const X=e.exposed||(e.exposed={});Oe.forEach(G=>{Object.defineProperty(X,G,{get:()=>n[G],set:Ge=>n[G]=Ge})})}else e.exposed||(e.exposed={});$&&e.render===Re&&(e.render=$),it!=null&&(e.inheritAttrs=it),wt&&(e.components=wt),ze&&(e.directives=ze)}function Mc(e,t,n=Re){U(e)&&(e=ti(e));for(const r in e){const i=e[r];let a;ae(i)?"default"in i?a=Ze(i.from||r,i.default,!0):a=Ze(i.from||r):a=Ze(i),ke(a)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):t[r]=a}}function ya(e,t,n){je(U(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ds(e,t,n,r){const i=r.includes(".")?ls(n,r):()=>n[r];if(ue(e)){const a=t[e];Y(a)&&fn(i,a)}else if(Y(e))fn(i,e.bind(n));else if(ae(e))if(U(e))e.forEach(a=>ds(a,t,n,r));else{const a=Y(e.handler)?e.handler.bind(n):t[e.handler];Y(a)&&fn(i,a,e)}}function zi(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t);let l;return s?l=s:!i.length&&!n&&!r?l=t:(l={},i.length&&i.forEach(u=>or(l,u,o,!0)),or(l,t,o)),ae(t)&&a.set(t,l),l}function or(e,t,n,r=!1){const{mixins:i,extends:a}=t;a&&or(e,a,n,!0),i&&i.forEach(o=>or(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Lc[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Lc={data:xa,props:wa,emits:wa,methods:an,computed:an,beforeCreate:ye,created:ye,beforeMount:ye,mounted:ye,beforeUpdate:ye,updated:ye,beforeDestroy:ye,beforeUnmount:ye,destroyed:ye,unmounted:ye,activated:ye,deactivated:ye,errorCaptured:ye,serverPrefetch:ye,components:an,directives:an,watch:Fc,provide:xa,inject:jc};function xa(e,t){return t?e?function(){return me(Y(e)?e.call(this,this):e,Y(t)?t.call(this,this):t)}:t:e}function jc(e,t){return an(ti(e),ti(t))}function ti(e){if(U(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ye(e,t){return e?[...new Set([].concat(e,t))]:t}function an(e,t){return e?me(Object.create(null),e,t):t}function wa(e,t){return e?U(e)&&U(t)?[...new Set([...e,...t])]:me(Object.create(null),ba(e),ba(t??{})):t}function Fc(e,t){if(!e)return t;if(!t)return e;const n=me(Object.create(null),e);for(const r in t)n[r]=ye(e[r],t[r]);return n}function ms(){return{app:null,config:{isNativeTag:pl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zc=0;function Dc(e,t){return function(r,i=null){Y(r)||(r=me({},r)),i!=null&&!ae(i)&&(i=null);const a=ms(),o=new WeakSet;let s=!1;const l=a.app={_uid:zc++,_component:r,_props:i,_container:null,_context:a,_instance:null,version:ff,get config(){return a.config},set config(u){},use(u,...c){return o.has(u)||(u&&Y(u.install)?(o.add(u),u.install(l,...c)):Y(u)&&(o.add(u),u(l,...c))),l},mixin(u){return a.mixins.includes(u)||a.mixins.push(u),l},component(u,c){return c?(a.components[u]=c,l):a.components[u]},directive(u,c){return c?(a.directives[u]=c,l):a.directives[u]},mount(u,c,m){if(!s){const h=se(r,i);return h.appContext=a,m===!0?m="svg":m===!1&&(m=void 0),c&&t?t(h,u):e(h,u,m),s=!0,l._container=u,u.__vue_app__=l,Bi(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,c){return a.provides[u]=c,l},runWithContext(u){const c=dn;dn=l;try{return u()}finally{dn=c}}};return l}}let dn=null;function Jn(e,t){if(be){let n=be.provides;const r=be.parent&&be.parent.provides;r===n&&(n=be.provides=Object.create(r)),n[e]=t}}function Ze(e,t,n=!1){const r=be||Ne;if(r||dn){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:dn._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&Y(t)?t.call(r&&r.proxy):t}}const hs=Object.create(null),ni=()=>Object.create(hs),ps=e=>Object.getPrototypeOf(e)===hs;function Hc(e,t,n,r=!1){const i={},a=ni();e.propsDefaults=Object.create(null),gs(e,t,i,a);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:Vo(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function Bc(e,t,n,r){const{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=q(i),[l]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let m=0;m<c.length;m++){let h=c[m];if(wr(e.emitsOptions,h))continue;const g=t[h];if(l)if(V(a,h))g!==a[h]&&(a[h]=g,u=!0);else{const P=qe(h);i[P]=ri(l,s,P,g,e,!1)}else g!==a[h]&&(a[h]=g,u=!0)}}}else{gs(e,t,i,a)&&(u=!0);let c;for(const m in s)(!t||!V(t,m)&&((c=Qt(m))===m||!V(t,c)))&&(l?n&&(n[m]!==void 0||n[c]!==void 0)&&(i[m]=ri(l,s,m,void 0,e,!0)):delete i[m]);if(a!==s)for(const m in a)(!t||!V(t,m))&&(delete a[m],u=!0)}u&&Qe(e.attrs,"set","")}function gs(e,t,n,r){const[i,a]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(ln(l))continue;const u=t[l];let c;i&&V(i,c=qe(l))?!a||!a.includes(c)?n[c]=u:(s||(s={}))[c]=u:wr(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(a){const l=q(n),u=s||ie;for(let c=0;c<a.length;c++){const m=a[c];n[m]=ri(i,l,m,u[m],e,!V(u,m))}}return o}function ri(e,t,n,r,i,a){const o=e[n];if(o!=null){const s=V(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Y(l)){const{propsDefaults:u}=i;if(n in u)r=u[n];else{const c=Cn(i);r=u[n]=l.call(null,t),c()}}else r=l}o[0]&&(a&&!s?r=!1:o[1]&&(r===""||r===Qt(n))&&(r=!0))}return r}function vs(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const a=e.props,o={},s=[];let l=!1;if(!Y(e)){const c=m=>{l=!0;const[h,g]=vs(m,t,!0);me(o,h),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!a&&!l)return ae(e)&&r.set(e,Ut),Ut;if(U(a))for(let c=0;c<a.length;c++){const m=qe(a[c]);_a(m)&&(o[m]=ie)}else if(a)for(const c in a){const m=qe(c);if(_a(m)){const h=a[c],g=o[m]=U(h)||Y(h)?{type:h}:me({},h);if(g){const P=Ea(Boolean,g.type),N=Ea(String,g.type);g[0]=P>-1,g[1]=N<0||P<N,(P>-1||V(g,"default"))&&s.push(m)}}}const u=[o,s];return ae(e)&&r.set(e,u),u}function _a(e){return e[0]!=="$"&&!ln(e)}function Aa(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function ka(e,t){return Aa(e)===Aa(t)}function Ea(e,t){return U(t)?t.findIndex(n=>ka(n,e)):Y(t)&&ka(t,e)?0:-1}const bs=e=>e[0]==="_"||e==="$stable",Di=e=>U(e)?e.map(Ye):[Ye(e)],Uc=(e,t,n)=>{if(t._n)return t;const r=ji((...i)=>Di(t(...i)),n);return r._c=!1,r},ys=(e,t,n)=>{const r=e._ctx;for(const i in e){if(bs(i))continue;const a=e[i];if(Y(a))t[i]=Uc(i,a,r);else if(a!=null){const o=Di(a);t[i]=()=>o}}},xs=(e,t)=>{const n=Di(t);e.slots.default=()=>n},Yc=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=q(t),Io(e.slots,"_",n)):ys(t,e.slots=ni())}else e.slots=ni(),t&&xs(e,t)},$c=(e,t,n)=>{const{vnode:r,slots:i}=e;let a=!0,o=ie;if(r.shapeFlag&32){const s=t._;s?n&&s===1?a=!1:(me(i,t),!n&&s===1&&delete i._):(a=!t.$stable,ys(t,i)),o=t}else t&&(xs(e,t),o={default:1});if(a)for(const s in i)!bs(s)&&o[s]==null&&delete i[s]};function ii(e,t,n,r,i=!1){if(U(e)){e.forEach((h,g)=>ii(h,t&&(U(t)?t[g]:t),n,r,i));return}if(Zn(r)&&!i)return;const a=r.shapeFlag&4?Bi(r.component)||r.component.proxy:r.el,o=i?null:a,{i:s,r:l}=e,u=t&&t.r,c=s.refs===ie?s.refs={}:s.refs,m=s.setupState;if(u!=null&&u!==l&&(ue(u)?(c[u]=null,V(m,u)&&(m[u]=null)):ke(u)&&(u.value=null)),Y(l))ht(l,s,12,[o,c]);else{const h=ue(l),g=ke(l);if(h||g){const P=()=>{if(e.f){const N=h?V(m,l)?m[l]:c[l]:l.value;i?U(N)&&ki(N,a):U(N)?N.includes(a)||N.push(a):h?(c[l]=[a],V(m,l)&&(m[l]=c[l])):(l.value=[a],e.k&&(c[e.k]=l.value))}else h?(c[l]=o,V(m,l)&&(m[l]=o)):g&&(l.value=o,e.k&&(c[e.k]=o))};o?(P.id=-1,_e(P,n)):P()}}}const _e=gc;function Wc(e){return Vc(e)}function Vc(e,t){const n=To();n.__VUE__=!0;const{insert:r,remove:i,patchProp:a,createElement:o,createText:s,createComment:l,setText:u,setElementText:c,parentNode:m,nextSibling:h,setScopeId:g=Re,insertStaticContent:P}=e,N=(f,d,p,x=null,v=null,k=null,O=void 0,A=null,E=!!d.dynamicChildren)=>{if(f===d)return;f&&!nn(f,d)&&(x=b(f),xe(f,v,k,!0),f=null),d.patchFlag===-2&&(E=!1,d.dynamicChildren=null);const{type:_,ref:T,shapeFlag:H}=d;switch(_){case kr:F(f,d,p,x);break;case Ct:y(f,d,p,x);break;case jr:f==null&&w(d,p,x,O);break;case Ue:wt(f,d,p,x,v,k,O,A,E);break;default:H&1?$(f,d,p,x,v,k,O,A,E):H&6?ze(f,d,p,x,v,k,O,A,E):(H&64||H&128)&&_.process(f,d,p,x,v,k,O,A,E,L)}T!=null&&v&&ii(T,f&&f.ref,k,d||f,!d)},F=(f,d,p,x)=>{if(f==null)r(d.el=s(d.children),p,x);else{const v=d.el=f.el;d.children!==f.children&&u(v,d.children)}},y=(f,d,p,x)=>{f==null?r(d.el=l(d.children||""),p,x):d.el=f.el},w=(f,d,p,x)=>{[f.el,f.anchor]=P(f.children,d,p,x,f.el,f.anchor)},C=({el:f,anchor:d},p,x)=>{let v;for(;f&&f!==d;)v=h(f),r(f,p,x),f=v;r(d,p,x)},D=({el:f,anchor:d})=>{let p;for(;f&&f!==d;)p=h(f),i(f),f=p;i(d)},$=(f,d,p,x,v,k,O,A,E)=>{d.type==="svg"?O="svg":d.type==="math"&&(O="mathml"),f==null?z(d,p,x,v,k,O,A,E):pe(f,d,v,k,O,A,E)},z=(f,d,p,x,v,k,O,A)=>{let E,_;const{props:T,shapeFlag:H,transition:j,dirs:B}=f;if(E=f.el=o(f.type,k,T&&T.is,T),H&8?c(E,f.children):H&16&&he(f.children,E,null,x,v,Lr(f,k),O,A),B&&_t(f,null,x,"created"),Z(E,f,f.scopeId,O,x),T){for(const Q in T)Q!=="value"&&!ln(Q)&&a(E,Q,null,T[Q],k,f.children,x,v,ge);"value"in T&&a(E,"value",null,T.value,k),(_=T.onVnodeBeforeMount)&&Be(_,x,f)}B&&_t(f,null,x,"beforeMount");const W=qc(v,j);W&&j.beforeEnter(E),r(E,d,p),((_=T&&T.onVnodeMounted)||W||B)&&_e(()=>{_&&Be(_,x,f),W&&j.enter(E),B&&_t(f,null,x,"mounted")},v)},Z=(f,d,p,x,v)=>{if(p&&g(f,p),x)for(let k=0;k<x.length;k++)g(f,x[k]);if(v){let k=v.subTree;if(d===k){const O=v.vnode;Z(f,O,O.scopeId,O.slotScopeIds,v.parent)}}},he=(f,d,p,x,v,k,O,A,E=0)=>{for(let _=E;_<f.length;_++){const T=f[_]=A?ft(f[_]):Ye(f[_]);N(null,T,d,p,x,v,k,O,A)}},pe=(f,d,p,x,v,k,O)=>{const A=d.el=f.el;let{patchFlag:E,dynamicChildren:_,dirs:T}=d;E|=f.patchFlag&16;const H=f.props||ie,j=d.props||ie;let B;if(p&&At(p,!1),(B=j.onVnodeBeforeUpdate)&&Be(B,p,d,f),T&&_t(d,f,p,"beforeUpdate"),p&&At(p,!0),_?Oe(f.dynamicChildren,_,A,p,x,Lr(d,v),k):O||G(f,d,A,null,p,x,Lr(d,v),k,!1),E>0){if(E&16)it(A,d,H,j,p,x,v);else if(E&2&&H.class!==j.class&&a(A,"class",null,j.class,v),E&4&&a(A,"style",H.style,j.style,v),E&8){const W=d.dynamicProps;for(let Q=0;Q<W.length;Q++){const ne=W[Q],fe=H[ne],Ie=j[ne];(Ie!==fe||ne==="value")&&a(A,ne,fe,Ie,v,f.children,p,x,ge)}}E&1&&f.children!==d.children&&c(A,d.children)}else!O&&_==null&&it(A,d,H,j,p,x,v);((B=j.onVnodeUpdated)||T)&&_e(()=>{B&&Be(B,p,d,f),T&&_t(d,f,p,"updated")},x)},Oe=(f,d,p,x,v,k,O)=>{for(let A=0;A<d.length;A++){const E=f[A],_=d[A],T=E.el&&(E.type===Ue||!nn(E,_)||E.shapeFlag&70)?m(E.el):p;N(E,_,T,null,x,v,k,O,!0)}},it=(f,d,p,x,v,k,O)=>{if(p!==x){if(p!==ie)for(const A in p)!ln(A)&&!(A in x)&&a(f,A,p[A],null,O,d.children,v,k,ge);for(const A in x){if(ln(A))continue;const E=x[A],_=p[A];E!==_&&A!=="value"&&a(f,A,_,E,O,d.children,v,k,ge)}"value"in x&&a(f,"value",p.value,x.value,O)}},wt=(f,d,p,x,v,k,O,A,E)=>{const _=d.el=f?f.el:s(""),T=d.anchor=f?f.anchor:s("");let{patchFlag:H,dynamicChildren:j,slotScopeIds:B}=d;B&&(A=A?A.concat(B):B),f==null?(r(_,p,x),r(T,p,x),he(d.children||[],p,T,v,k,O,A,E)):H>0&&H&64&&j&&f.dynamicChildren?(Oe(f.dynamicChildren,j,p,v,k,O,A),(d.key!=null||v&&d===v.subTree)&&ws(f,d,!0)):G(f,d,p,T,v,k,O,A,E)},ze=(f,d,p,x,v,k,O,A,E)=>{d.slotScopeIds=A,f==null?d.shapeFlag&512?v.ctx.activate(d,p,x,O,E):en(d,p,x,v,k,O,E):Mt(f,d,E)},en=(f,d,p,x,v,k,O)=>{const A=f.component=nf(f,x,v);if(cs(f)&&(A.ctx.renderer=L),rf(A),A.asyncDep){if(v&&v.registerDep(A,ce),!f.el){const E=A.subTree=se(Ct);y(null,E,d,p)}}else ce(A,f,d,p,v,k,O)},Mt=(f,d,p)=>{const x=d.component=f.component;if(uc(f,d,p))if(x.asyncDep&&!x.asyncResolved){X(x,d,p);return}else x.next=d,rc(x.update),x.effect.dirty=!0,x.update();else d.el=f.el,x.vnode=d},ce=(f,d,p,x,v,k,O)=>{const A=()=>{if(f.isMounted){let{next:T,bu:H,u:j,parent:B,vnode:W}=f;{const Ft=_s(f);if(Ft){T&&(T.el=W.el,X(f,T,O)),Ft.asyncDep.then(()=>{f.isUnmounted||A()});return}}let Q=T,ne;At(f,!1),T?(T.el=W.el,X(f,T,O)):T=W,H&&Ir(H),(ne=T.props&&T.props.onVnodeBeforeUpdate)&&Be(ne,B,T,W),At(f,!0);const fe=Nr(f),Ie=f.subTree;f.subTree=fe,N(Ie,fe,m(Ie.el),b(Ie),f,v,k),T.el=fe.el,Q===null&&dc(f,fe.el),j&&_e(j,v),(ne=T.props&&T.props.onVnodeUpdated)&&_e(()=>Be(ne,B,T,W),v)}else{let T;const{el:H,props:j}=d,{bm:B,m:W,parent:Q}=f,ne=Zn(d);if(At(f,!1),B&&Ir(B),!ne&&(T=j&&j.onVnodeBeforeMount)&&Be(T,Q,d),At(f,!0),H&&te){const fe=()=>{f.subTree=Nr(f),te(H,f.subTree,f,v,null)};ne?d.type.__asyncLoader().then(()=>!f.isUnmounted&&fe()):fe()}else{const fe=f.subTree=Nr(f);N(null,fe,p,x,f,v,k),d.el=fe.el}if(W&&_e(W,v),!ne&&(T=j&&j.onVnodeMounted)){const fe=d;_e(()=>Be(T,Q,fe),v)}(d.shapeFlag&256||Q&&Zn(Q.vnode)&&Q.vnode.shapeFlag&256)&&f.a&&_e(f.a,v),f.isMounted=!0,d=p=x=null}},E=f.effect=new Oi(A,Re,()=>Li(_),f.scope),_=f.update=()=>{E.dirty&&E.run()};_.id=f.uid,At(f,!0),_()},X=(f,d,p)=>{d.component=f;const x=f.vnode.props;f.vnode=d,f.next=null,Bc(f,d.props,x,p),$c(f,d.children,p),yt(),pa(f),xt()},G=(f,d,p,x,v,k,O,A,E=!1)=>{const _=f&&f.children,T=f?f.shapeFlag:0,H=d.children,{patchFlag:j,shapeFlag:B}=d;if(j>0){if(j&128){at(_,H,p,x,v,k,O,A,E);return}else if(j&256){Ge(_,H,p,x,v,k,O,A,E);return}}B&8?(T&16&&ge(_,v,k),H!==_&&c(p,H)):T&16?B&16?at(_,H,p,x,v,k,O,A,E):ge(_,v,k,!0):(T&8&&c(p,""),B&16&&he(H,p,x,v,k,O,A,E))},Ge=(f,d,p,x,v,k,O,A,E)=>{f=f||Ut,d=d||Ut;const _=f.length,T=d.length,H=Math.min(_,T);let j;for(j=0;j<H;j++){const B=d[j]=E?ft(d[j]):Ye(d[j]);N(f[j],B,p,null,v,k,O,A,E)}_>T?ge(f,v,k,!0,!1,H):he(d,p,x,v,k,O,A,E,H)},at=(f,d,p,x,v,k,O,A,E)=>{let _=0;const T=d.length;let H=f.length-1,j=T-1;for(;_<=H&&_<=j;){const B=f[_],W=d[_]=E?ft(d[_]):Ye(d[_]);if(nn(B,W))N(B,W,p,null,v,k,O,A,E);else break;_++}for(;_<=H&&_<=j;){const B=f[H],W=d[j]=E?ft(d[j]):Ye(d[j]);if(nn(B,W))N(B,W,p,null,v,k,O,A,E);else break;H--,j--}if(_>H){if(_<=j){const B=j+1,W=B<T?d[B].el:x;for(;_<=j;)N(null,d[_]=E?ft(d[_]):Ye(d[_]),p,W,v,k,O,A,E),_++}}else if(_>j)for(;_<=H;)xe(f[_],v,k,!0),_++;else{const B=_,W=_,Q=new Map;for(_=W;_<=j;_++){const Ee=d[_]=E?ft(d[_]):Ye(d[_]);Ee.key!=null&&Q.set(Ee.key,_)}let ne,fe=0;const Ie=j-W+1;let Ft=!1,ia=0;const tn=new Array(Ie);for(_=0;_<Ie;_++)tn[_]=0;for(_=B;_<=H;_++){const Ee=f[_];if(fe>=Ie){xe(Ee,v,k,!0);continue}let He;if(Ee.key!=null)He=Q.get(Ee.key);else for(ne=W;ne<=j;ne++)if(tn[ne-W]===0&&nn(Ee,d[ne])){He=ne;break}He===void 0?xe(Ee,v,k,!0):(tn[He-W]=_+1,He>=ia?ia=He:Ft=!0,N(Ee,d[He],p,null,v,k,O,A,E),fe++)}const aa=Ft?Gc(tn):Ut;for(ne=aa.length-1,_=Ie-1;_>=0;_--){const Ee=W+_,He=d[Ee],oa=Ee+1<T?d[Ee+1].el:x;tn[_]===0?N(null,He,p,oa,v,k,O,A,E):Ft&&(ne<0||_!==aa[ne]?De(He,p,oa,2):ne--)}}},De=(f,d,p,x,v=null)=>{const{el:k,type:O,transition:A,children:E,shapeFlag:_}=f;if(_&6){De(f.component.subTree,d,p,x);return}if(_&128){f.suspense.move(d,p,x);return}if(_&64){O.move(f,d,p,L);return}if(O===Ue){r(k,d,p);for(let H=0;H<E.length;H++)De(E[H],d,p,x);r(f.anchor,d,p);return}if(O===jr){C(f,d,p);return}if(x!==2&&_&1&&A)if(x===0)A.beforeEnter(k),r(k,d,p),_e(()=>A.enter(k),v);else{const{leave:H,delayLeave:j,afterLeave:B}=A,W=()=>r(k,d,p),Q=()=>{H(k,()=>{W(),B&&B()})};j?j(k,W,Q):Q()}else r(k,d,p)},xe=(f,d,p,x=!1,v=!1)=>{const{type:k,props:O,ref:A,children:E,dynamicChildren:_,shapeFlag:T,patchFlag:H,dirs:j}=f;if(A!=null&&ii(A,null,p,f,!0),T&256){d.ctx.deactivate(f);return}const B=T&1&&j,W=!Zn(f);let Q;if(W&&(Q=O&&O.onVnodeBeforeUnmount)&&Be(Q,d,f),T&6)Nn(f.component,p,x);else{if(T&128){f.suspense.unmount(p,x);return}B&&_t(f,null,d,"beforeUnmount"),T&64?f.type.remove(f,d,p,v,L,x):_&&(k!==Ue||H>0&&H&64)?ge(_,d,p,!1,!0):(k===Ue&&H&384||!v&&T&16)&&ge(E,d,p),x&&Lt(f)}(W&&(Q=O&&O.onVnodeUnmounted)||B)&&_e(()=>{Q&&Be(Q,d,f),B&&_t(f,null,d,"unmounted")},p)},Lt=f=>{const{type:d,el:p,anchor:x,transition:v}=f;if(d===Ue){jt(p,x);return}if(d===jr){D(f);return}const k=()=>{i(p),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:O,delayLeave:A}=v,E=()=>O(p,k);A?A(f.el,k,E):E()}else k()},jt=(f,d)=>{let p;for(;f!==d;)p=h(f),i(f),f=p;i(d)},Nn=(f,d,p)=>{const{bum:x,scope:v,update:k,subTree:O,um:A}=f;x&&Ir(x),v.stop(),k&&(k.active=!1,xe(O,f,d,p)),A&&_e(A,d),_e(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},ge=(f,d,p,x=!1,v=!1,k=0)=>{for(let O=k;O<f.length;O++)xe(f[O],d,p,x,v)},b=f=>f.shapeFlag&6?b(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el);let I=!1;const S=(f,d,p)=>{f==null?d._vnode&&xe(d._vnode,null,null,!0):N(d._vnode||null,f,d,null,null,null,p),I||(I=!0,pa(),rs(),I=!1),d._vnode=f},L={p:N,um:xe,m:De,r:Lt,mt:en,mc:he,pc:G,pbc:Oe,n:b,o:e};let K,te;return t&&([K,te]=t(L)),{render:S,hydrate:K,createApp:Dc(S,K)}}function Lr({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function At({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function qc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function ws(e,t,n=!1){const r=e.children,i=t.children;if(U(r)&&U(i))for(let a=0;a<r.length;a++){const o=r[a];let s=i[a];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=i[a]=ft(i[a]),s.el=o.el),n||ws(o,s)),s.type===kr&&(s.el=o.el)}}function Gc(e){const t=e.slice(),n=[0];let r,i,a,o,s;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(i=n[n.length-1],e[i]<u){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<u?a=s+1:o=s;u<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}function _s(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:_s(t)}const Kc=e=>e.__isTeleport,Ue=Symbol.for("v-fgt"),kr=Symbol.for("v-txt"),Ct=Symbol.for("v-cmt"),jr=Symbol.for("v-stc"),mn=[];let Me=null;function Ce(e=!1){mn.push(Me=e?null:[])}function Xc(){mn.pop(),Me=mn[mn.length-1]||null}let wn=1;function Sa(e){wn+=e}function As(e){return e.dynamicChildren=wn>0?Me||Ut:null,Xc(),wn>0&&Me&&Me.push(e),e}function We(e,t,n,r,i,a){return As(Vt(e,t,n,r,i,a,!0))}function ks(e,t,n,r,i){return As(se(e,t,n,r,i,!0))}function ai(e){return e?e.__v_isVNode===!0:!1}function nn(e,t){return e.type===t.type&&e.key===t.key}const Es=({key:e})=>e??null,er=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ue(e)||ke(e)||Y(e)?{i:Ne,r:e,k:t,f:!!n}:e:null);function Vt(e,t=null,n=null,r=0,i=null,a=e===Ue?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Es(t),ref:t&&er(t),scopeId:_r,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ne};return s?(Hi(l,n),a&128&&e.normalize(l)):n&&(l.shapeFlag|=ue(n)?8:16),wn>0&&!o&&Me&&(l.patchFlag>0||a&6)&&l.patchFlag!==32&&Me.push(l),l}const se=Qc;function Qc(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===mc)&&(e=Ct),ai(e)){const s=qt(e,t,!0);return n&&Hi(s,n),wn>0&&!a&&Me&&(s.shapeFlag&6?Me[Me.indexOf(e)]=s:Me.push(s)),s.patchFlag|=-2,s}if(cf(e)&&(e=e.__vccOpts),t){t=Zc(t);let{class:s,style:l}=t;s&&!ue(s)&&(t.class=vr(s)),ae(l)&&(Go(l)&&!U(l)&&(l=me({},l)),t.style=Si(l))}const o=ue(e)?1:pc(e)?128:Kc(e)?64:ae(e)?4:Y(e)?2:0;return Vt(e,t,n,r,i,o,a,!0)}function Zc(e){return e?Go(e)||ps(e)?me({},e):e:null}function qt(e,t,n=!1){const{props:r,ref:i,patchFlag:a,children:o}=e,s=t?Jc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Es(s),ref:t&&t.ref?n&&i?U(i)?i.concat(er(t)):[i,er(t)]:er(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ue?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&qt(e.ssContent),ssFallback:e.ssFallback&&qt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Ss(e=" ",t=0){return se(kr,null,e,t)}function on(e="",t=!1){return t?(Ce(),ks(Ct,null,e)):se(Ct,null,e)}function Ye(e){return e==null||typeof e=="boolean"?se(Ct):U(e)?se(Ue,null,e.slice()):typeof e=="object"?ft(e):se(kr,null,String(e))}function ft(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:qt(e)}function Hi(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(U(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),Hi(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!ps(t)?t._ctx=Ne:i===3&&Ne&&(Ne.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Y(t)?(t={default:t,_ctx:Ne},n=32):(t=String(t),r&64?(n=16,t=[Ss(t)]):n=8);e.children=t,e.shapeFlag|=n}function Jc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=vr([t.class,r.class]));else if(i==="style")t.style=Si([t.style,r.style]);else if(mr(i)){const a=t[i],o=r[i];o&&a!==o&&!(U(a)&&a.includes(o))&&(t[i]=a?[].concat(a,o):o)}else i!==""&&(t[i]=r[i])}return t}function Be(e,t,n,r=null){je(e,t,7,[n,r])}const ef=ms();let tf=0;function nf(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||ef,a={uid:tf++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Pl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vs(r,i),emitsOptions:as(r,i),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:r.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=oc.bind(null,a),e.ce&&e.ce(a),a}let be=null,sr,oi;{const e=To(),t=(n,r)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(r),a=>{i.length>1?i.forEach(o=>o(a)):i[0](a)}};sr=t("__VUE_INSTANCE_SETTERS__",n=>be=n),oi=t("__VUE_SSR_SETTERS__",n=>Er=n)}const Cn=e=>{const t=be;return sr(e),e.scope.on(),()=>{e.scope.off(),sr(t)}},Oa=()=>{be&&be.scope.off(),sr(null)};function Os(e){return e.vnode.shapeFlag&4}let Er=!1;function rf(e,t=!1){t&&oi(t);const{props:n,children:r}=e.vnode,i=Os(e);Hc(e,n,i,t),Yc(e,r);const a=i?af(e,t):void 0;return t&&oi(!1),a}function af(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Tc);const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?sf(e):null,a=Cn(e);yt();const o=ht(r,e,0,[e.props,i]);if(xt(),a(),Po(o)){if(o.then(Oa,Oa),t)return o.then(s=>{Pa(e,s,t)}).catch(s=>{xr(s,e,0)});e.asyncDep=o}else Pa(e,o,t)}else Ps(e,t)}function Pa(e,t,n){Y(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ae(t)&&(e.setupState=Jo(t)),Ps(e,n)}let Ca;function Ps(e,t,n){const r=e.type;if(!e.render){if(!t&&Ca&&!r.render){const i=r.template||zi(e).template;if(i){const{isCustomElement:a,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,u=me(me({isCustomElement:a,delimiters:s},o),l);r.render=Ca(i,u)}}e.render=r.render||Re}{const i=Cn(e);yt();try{Nc(e)}finally{xt(),i()}}}const of={get(e,t){return Ae(e,"get",""),e[t]}};function sf(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,of),slots:e.slots,emit:e.emit,expose:t}}function Bi(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Jo(Xl(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in un)return un[n](e)},has(t,n){return n in t||n in un}}))}function lf(e,t=!0){return Y(e)?e.displayName||e.name:e.name||t&&e.__name}function cf(e){return Y(e)&&"__vccOpts"in e}const de=(e,t)=>Ql(e,t,Er);function Ui(e,t,n){const r=arguments.length;return r===2?ae(t)&&!U(t)?ai(t)?se(e,null,[t]):se(e,t):se(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ai(n)&&(n=[n]),se(e,t,n))}const ff="3.4.23";/**
* @vue/runtime-dom v3.4.23
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const uf="http://www.w3.org/2000/svg",df="http://www.w3.org/1998/Math/MathML",ut=typeof document<"u"?document:null,Ra=ut&&ut.createElement("template"),mf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t==="svg"?ut.createElementNS(uf,e):t==="mathml"?ut.createElementNS(df,e):ut.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>ut.createTextNode(e),createComment:e=>ut.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ut.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,a){const o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Ra.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const s=Ra.content;if(r==="svg"||r==="mathml"){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},hf=Symbol("_vtc");function pf(e,t,n){const r=e[hf];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Ia=Symbol("_vod"),gf=Symbol("_vsh"),vf=Symbol(""),bf=/(^|;)\s*display\s*:/;function yf(e,t,n){const r=e.style,i=ue(n);let a=!1;if(n&&!i){if(t)if(ue(t))for(const o of t.split(";")){const s=o.slice(0,o.indexOf(":")).trim();n[s]==null&&tr(r,s,"")}else for(const o in t)n[o]==null&&tr(r,o,"");for(const o in n)o==="display"&&(a=!0),tr(r,o,n[o])}else if(i){if(t!==n){const o=r[vf];o&&(n+=";"+o),r.cssText=n,a=bf.test(n)}}else t&&e.removeAttribute("style");Ia in e&&(e[Ia]=a?r.display:"",e[gf]&&(r.display="none"))}const Ta=/\s*!important$/;function tr(e,t,n){if(U(n))n.forEach(r=>tr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=xf(e,t);Ta.test(n)?e.setProperty(Qt(r),n.replace(Ta,""),"important"):e[r]=n}}const Na=["Webkit","Moz","ms"],Fr={};function xf(e,t){const n=Fr[t];if(n)return n;let r=qe(t);if(r!=="filter"&&r in e)return Fr[t]=r;r=gr(r);for(let i=0;i<Na.length;i++){const a=Na[i]+r;if(a in e)return Fr[t]=a}return t}const Ma="http://www.w3.org/1999/xlink";function wf(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ma,t.slice(6,t.length)):e.setAttributeNS(Ma,t,n);else{const a=Sl(t);n==null||a&&!No(n)?e.removeAttribute(t):e.setAttribute(t,a?"":n)}}function _f(e,t,n,r,i,a,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,i,a),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const u=s==="OPTION"?e.getAttribute("value")||"":e.value,c=n??"";(u!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let l=!1;if(n===""||n==null){const u=typeof e[t];u==="boolean"?n=No(n):n==null&&u==="string"?(n="",l=!0):u==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function Af(e,t,n,r){e.addEventListener(t,n,r)}function kf(e,t,n,r){e.removeEventListener(t,n,r)}const La=Symbol("_vei");function Ef(e,t,n,r,i=null){const a=e[La]||(e[La]={}),o=a[t];if(r&&o)o.value=r;else{const[s,l]=Sf(t);if(r){const u=a[t]=Cf(r,i);Af(e,s,u,l)}else o&&(kf(e,s,o,l),a[t]=void 0)}}const ja=/(?:Once|Passive|Capture)$/;function Sf(e){let t;if(ja.test(e)){t={};let r;for(;r=e.match(ja);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Qt(e.slice(2)),t]}let zr=0;const Of=Promise.resolve(),Pf=()=>zr||(Of.then(()=>zr=0),zr=Date.now());function Cf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;je(Rf(r,n.value),t,5,[r])};return n.value=e,n.attached=Pf(),n}function Rf(e,t){if(U(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const Fa=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,If=(e,t,n,r,i,a,o,s,l)=>{const u=i==="svg";t==="class"?pf(e,r,u):t==="style"?yf(e,n,r):mr(t)?Ai(t)||Ef(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Tf(e,t,r,u))?_f(e,t,r,a,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),wf(e,t,r,u))};function Tf(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Fa(t)&&Y(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Fa(t)&&ue(n)?!1:t in e}const Nf=me({patchProp:If},mf);let za;function Mf(){return za||(za=Wc(Nf))}const Lf=(...e)=>{const t=Mf().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=Ff(r);if(!i)return;const a=t._component;!Y(a)&&!a.render&&!a.template&&(a.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,jf(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function jf(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Ff(e){return ue(e)?document.querySelector(e):e}function Da(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Da(Object(n),!0).forEach(function(r){le(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Da(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function lr(e){"@babel/helpers - typeof";return lr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},lr(e)}function zf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ha(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Df(e,t,n){return t&&Ha(e.prototype,t),n&&Ha(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Yi(e,t){return Bf(e)||Yf(e,t)||Cs(e,t)||Wf()}function Rn(e){return Hf(e)||Uf(e)||Cs(e)||$f()}function Hf(e){if(Array.isArray(e))return si(e)}function Bf(e){if(Array.isArray(e))return e}function Uf(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Yf(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(l){a=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function Cs(e,t){if(e){if(typeof e=="string")return si(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return si(e,t)}}function si(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function $f(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Wf(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ba=function(){},$i={},Rs={},Is=null,Ts={mark:Ba,measure:Ba};try{typeof window<"u"&&($i=window),typeof document<"u"&&(Rs=document),typeof MutationObserver<"u"&&(Is=MutationObserver),typeof performance<"u"&&(Ts=performance)}catch{}var Vf=$i.navigator||{},Ua=Vf.userAgent,Ya=Ua===void 0?"":Ua,gt=$i,ee=Rs,$a=Is,Hn=Ts;gt.document;var rt=!!ee.documentElement&&!!ee.head&&typeof ee.addEventListener=="function"&&typeof ee.createElement=="function",Ns=~Ya.indexOf("MSIE")||~Ya.indexOf("Trident/"),Bn,Un,Yn,$n,Wn,Je="___FONT_AWESOME___",li=16,Ms="fa",Ls="svg-inline--fa",Rt="data-fa-i2svg",ci="data-fa-pseudo-element",qf="data-fa-pseudo-element-pending",Wi="data-prefix",Vi="data-icon",Wa="fontawesome-i2svg",Gf="async",Kf=["HTML","HEAD","STYLE","SCRIPT"],js=function(){try{return!0}catch{return!1}}(),J="classic",oe="sharp",qi=[J,oe];function In(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[J]}})}var _n=In((Bn={},le(Bn,J,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),le(Bn,oe,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Bn)),An=In((Un={},le(Un,J,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),le(Un,oe,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Un)),kn=In((Yn={},le(Yn,J,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),le(Yn,oe,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Yn)),Xf=In(($n={},le($n,J,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),le($n,oe,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),$n)),Qf=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Fs="fa-layers-text",Zf=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Jf=In((Wn={},le(Wn,J,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),le(Wn,oe,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Wn)),zs=[1,2,3,4,5,6,7,8,9,10],eu=zs.concat([11,12,13,14,15,16,17,18,19,20]),tu=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Et={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},En=new Set;Object.keys(An[J]).map(En.add.bind(En));Object.keys(An[oe]).map(En.add.bind(En));var nu=[].concat(qi,Rn(En),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Et.GROUP,Et.SWAP_OPACITY,Et.PRIMARY,Et.SECONDARY]).concat(zs.map(function(e){return"".concat(e,"x")})).concat(eu.map(function(e){return"w-".concat(e)})),hn=gt.FontAwesomeConfig||{};function ru(e){var t=ee.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function iu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ee&&typeof ee.querySelector=="function"){var au=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];au.forEach(function(e){var t=Yi(e,2),n=t[0],r=t[1],i=iu(ru(n));i!=null&&(hn[r]=i)})}var Ds={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ms,replacementClass:Ls,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};hn.familyPrefix&&(hn.cssPrefix=hn.familyPrefix);var Gt=R(R({},Ds),hn);Gt.autoReplaceSvg||(Gt.observeMutations=!1);var M={};Object.keys(Ds).forEach(function(e){Object.defineProperty(M,e,{enumerable:!0,set:function(n){Gt[e]=n,pn.forEach(function(r){return r(M)})},get:function(){return Gt[e]}})});Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(t){Gt.cssPrefix=t,pn.forEach(function(n){return n(M)})},get:function(){return Gt.cssPrefix}});gt.FontAwesomeConfig=M;var pn=[];function ou(e){return pn.push(e),function(){pn.splice(pn.indexOf(e),1)}}var st=li,Ve={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function su(e){if(!(!e||!rt)){var t=ee.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ee.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return ee.head.insertBefore(t,r),e}}var lu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Sn(){for(var e=12,t="";e-- >0;)t+=lu[Math.random()*62|0];return t}function Zt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Gi(e){return e.classList?Zt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Hs(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function cu(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Hs(e[n]),'" ')},"").trim()}function Sr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ki(e){return e.size!==Ve.size||e.x!==Ve.x||e.y!==Ve.y||e.rotate!==Ve.rotate||e.flipX||e.flipY}function fu(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function uu(e){var t=e.transform,n=e.width,r=n===void 0?li:n,i=e.height,a=i===void 0?li:i,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Ns?l+="translate(".concat(t.x/st-r/2,"em, ").concat(t.y/st-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/st,"em), calc(-50% + ").concat(t.y/st,"em)) "):l+="translate(".concat(t.x/st,"em, ").concat(t.y/st,"em) "),l+="scale(".concat(t.size/st*(t.flipX?-1:1),", ").concat(t.size/st*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var du=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Bs(){var e=Ms,t=Ls,n=M.cssPrefix,r=M.replacementClass,i=du;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var Va=!1;function Dr(){M.autoAddCss&&!Va&&(su(Bs()),Va=!0)}var mu={mixout:function(){return{dom:{css:Bs,insertCss:Dr}}},hooks:function(){return{beforeDOMElementCreation:function(){Dr()},beforeI2svg:function(){Dr()}}}},et=gt||{};et[Je]||(et[Je]={});et[Je].styles||(et[Je].styles={});et[Je].hooks||(et[Je].hooks={});et[Je].shims||(et[Je].shims=[]);var Le=et[Je],Us=[],hu=function e(){ee.removeEventListener("DOMContentLoaded",e),cr=1,Us.map(function(t){return t()})},cr=!1;rt&&(cr=(ee.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ee.readyState),cr||ee.addEventListener("DOMContentLoaded",hu));function pu(e){rt&&(cr?setTimeout(e,0):Us.push(e))}function Tn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?Hs(e):"<".concat(t," ").concat(cu(r),">").concat(a.map(Tn).join(""),"</").concat(t,">")}function qa(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var gu=function(t,n){return function(r,i,a,o){return t.call(n,r,i,a,o)}},Hr=function(t,n,r,i){var a=Object.keys(t),o=a.length,s=i!==void 0?gu(n,i):n,l,u,c;for(r===void 0?(l=1,c=t[a[0]]):(l=0,c=r);l<o;l++)u=a[l],c=s(c,t[u],u,t);return c};function vu(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function fi(e){var t=vu(e);return t.length===1?t[0].toString(16):null}function bu(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Ga(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function ui(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=Ga(t);typeof Le.hooks.addPack=="function"&&!i?Le.hooks.addPack(e,Ga(t)):Le.styles[e]=R(R({},Le.styles[e]||{}),a),e==="fas"&&ui("fa",t)}var Vn,qn,Gn,Ht=Le.styles,yu=Le.shims,xu=(Vn={},le(Vn,J,Object.values(kn[J])),le(Vn,oe,Object.values(kn[oe])),Vn),Xi=null,Ys={},$s={},Ws={},Vs={},qs={},wu=(qn={},le(qn,J,Object.keys(_n[J])),le(qn,oe,Object.keys(_n[oe])),qn);function _u(e){return~nu.indexOf(e)}function Au(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!_u(i)?i:null}var Gs=function(){var t=function(a){return Hr(Ht,function(o,s,l){return o[l]=Hr(s,a,{}),o},{})};Ys=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),$s=t(function(i,a,o){if(i[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),qs=t(function(i,a,o){var s=a[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var n="far"in Ht||M.autoFetchSvg,r=Hr(yu,function(i,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});Ws=r.names,Vs=r.unicodes,Xi=Or(M.styleDefault,{family:M.familyDefault})};ou(function(e){Xi=Or(e.styleDefault,{family:M.familyDefault})});Gs();function Qi(e,t){return(Ys[e]||{})[t]}function ku(e,t){return($s[e]||{})[t]}function St(e,t){return(qs[e]||{})[t]}function Ks(e){return Ws[e]||{prefix:null,iconName:null}}function Eu(e){var t=Vs[e],n=Qi("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function vt(){return Xi}var Zi=function(){return{prefix:null,iconName:null,rest:[]}};function Or(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?J:n,i=_n[r][e],a=An[r][e]||An[r][i],o=e in Le.styles?e:null;return a||o||null}var Ka=(Gn={},le(Gn,J,Object.keys(kn[J])),le(Gn,oe,Object.keys(kn[oe])),Gn);function Pr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},le(t,J,"".concat(M.cssPrefix,"-").concat(J)),le(t,oe,"".concat(M.cssPrefix,"-").concat(oe)),t),o=null,s=J;(e.includes(a[J])||e.some(function(u){return Ka[J].includes(u)}))&&(s=J),(e.includes(a[oe])||e.some(function(u){return Ka[oe].includes(u)}))&&(s=oe);var l=e.reduce(function(u,c){var m=Au(M.cssPrefix,c);if(Ht[c]?(c=xu[s].includes(c)?Xf[s][c]:c,o=c,u.prefix=c):wu[s].indexOf(c)>-1?(o=c,u.prefix=Or(c,{family:s})):m?u.iconName=m:c!==M.replacementClass&&c!==a[J]&&c!==a[oe]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var h=o==="fa"?Ks(u.iconName):{},g=St(u.prefix,u.iconName);h.prefix&&(o=null),u.iconName=h.iconName||g||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!Ht.far&&Ht.fas&&!M.autoFetchSvg&&(u.prefix="fas")}return u},Zi());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===oe&&(Ht.fass||M.autoFetchSvg)&&(l.prefix="fass",l.iconName=St(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=vt()||"fas"),l}var Su=function(){function e(){zf(this,e),this.definitions={}}return Df(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=R(R({},n.definitions[s]||{}),o[s]),ui(s,o[s]);var l=kn[J][s];l&&ui(l,o[s]),Gs()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],s=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(m){typeof m=="string"&&(n[s][m]=u)}),n[s][l]=u}),n}}]),e}(),Xa=[],Bt={},Wt={},Ou=Object.keys(Wt);function Pu(e,t){var n=t.mixoutsTo;return Xa=e,Bt={},Object.keys(Wt).forEach(function(r){Ou.indexOf(r)===-1&&delete Wt[r]}),Xa.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),lr(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){Bt[o]||(Bt[o]=[]),Bt[o].push(a[o])})}r.provides&&r.provides(Wt)}),n}function di(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=Bt[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function It(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Bt[e]||[];i.forEach(function(a){a.apply(null,n)})}function tt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Wt[e]?Wt[e].apply(null,t):void 0}function mi(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||vt();if(t)return t=St(n,t)||t,qa(Xs.definitions,n,t)||qa(Le.styles,n,t)}var Xs=new Su,Cu=function(){M.autoReplaceSvg=!1,M.observeMutations=!1,It("noAuto")},Ru={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return rt?(It("beforeI2svg",t),tt("pseudoElements2svg",t),tt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,pu(function(){Tu({autoReplaceSvgRoot:n}),It("watch",t)})}},Iu={icon:function(t){if(t===null)return null;if(lr(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:St(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Or(t[0]);return{prefix:r,iconName:St(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(M.cssPrefix,"-"))>-1||t.match(Qf))){var i=Pr(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||vt(),iconName:St(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=vt();return{prefix:a,iconName:St(a,t)||t}}}},Se={noAuto:Cu,config:M,dom:Ru,parse:Iu,library:Xs,findIconDefinition:mi,toHtml:Tn},Tu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ee:n;(Object.keys(Le.styles).length>0||M.autoFetchSvg)&&rt&&M.autoReplaceSvg&&Se.dom.i2svg({node:r})};function Cr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Tn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(rt){var r=ee.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Nu(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(Ki(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};i.style=Sr(R(R({},a),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function Mu(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(M.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:R(R({},i),{},{id:o}),children:r}]}]}function Ji(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,c=e.titleId,m=e.extra,h=e.watchable,g=h===void 0?!1:h,P=r.found?r:n,N=P.width,F=P.height,y=i==="fak",w=[M.replacementClass,a?"".concat(M.cssPrefix,"-").concat(a):""].filter(function(pe){return m.classes.indexOf(pe)===-1}).filter(function(pe){return pe!==""||!!pe}).concat(m.classes).join(" "),C={children:[],attributes:R(R({},m.attributes),{},{"data-prefix":i,"data-icon":a,class:w,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(F)})},D=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(N/F*16*.0625,"em")}:{};g&&(C.attributes[Rt]=""),l&&(C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(c||Sn())},children:[l]}),delete C.attributes.title);var $=R(R({},C),{},{prefix:i,iconName:a,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:R(R({},D),m.styles)}),z=r.found&&n.found?tt("generateAbstractMask",$)||{children:[],attributes:{}}:tt("generateAbstractIcon",$)||{children:[],attributes:{}},Z=z.children,he=z.attributes;return $.children=Z,$.attributes=he,s?Mu($):Nu($)}function Qa(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=R(R(R({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(u[Rt]="");var c=R({},o.styles);Ki(i)&&(c.transform=uu({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var m=Sr(c);m.length>0&&(u.style=m);var h=[];return h.push({tag:"span",attributes:u,children:[t]}),a&&h.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),h}function Lu(e){var t=e.content,n=e.title,r=e.extra,i=R(R(R({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=Sr(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Br=Le.styles;function hi(e){var t=e[0],n=e[1],r=e.slice(4),i=Yi(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(M.cssPrefix,"-").concat(Et.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(Et.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(Et.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var ju={found:!1,width:512,height:512};function Fu(e,t){!js&&!M.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function pi(e,t){var n=t;return t==="fa"&&M.styleDefault!==null&&(t=vt()),new Promise(function(r,i){if(tt("missingIconAbstract"),n==="fa"){var a=Ks(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Br[t]&&Br[t][e]){var o=Br[t][e];return r(hi(o))}Fu(e,t),r(R(R({},ju),{},{icon:M.showMissingIcons&&e?tt("missingIconAbstract")||{}:{}}))})}var Za=function(){},gi=M.measurePerformance&&Hn&&Hn.mark&&Hn.measure?Hn:{mark:Za,measure:Za},sn='FA "6.5.2"',zu=function(t){return gi.mark("".concat(sn," ").concat(t," begins")),function(){return Qs(t)}},Qs=function(t){gi.mark("".concat(sn," ").concat(t," ends")),gi.measure("".concat(sn," ").concat(t),"".concat(sn," ").concat(t," begins"),"".concat(sn," ").concat(t," ends"))},ea={begin:zu,end:Qs},nr=function(){};function Ja(e){var t=e.getAttribute?e.getAttribute(Rt):null;return typeof t=="string"}function Du(e){var t=e.getAttribute?e.getAttribute(Wi):null,n=e.getAttribute?e.getAttribute(Vi):null;return t&&n}function Hu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(M.replacementClass)}function Bu(){if(M.autoReplaceSvg===!0)return rr.replace;var e=rr[M.autoReplaceSvg];return e||rr.replace}function Uu(e){return ee.createElementNS("http://www.w3.org/2000/svg",e)}function Yu(e){return ee.createElement(e)}function Zs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Uu:Yu:n;if(typeof e=="string")return ee.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(Zs(o,{ceFn:r}))}),i}function $u(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var rr={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(Zs(i),n)}),n.getAttribute(Rt)===null&&M.keepOriginalSource){var r=ee.createComment($u(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Gi(n).indexOf(M.replacementClass))return rr.replace(t);var i=new RegExp("".concat(M.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(s,l){return l===M.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(s){return Tn(s)}).join(`
`);n.setAttribute(Rt,""),n.innerHTML=o}};function eo(e){e()}function Js(e,t){var n=typeof t=="function"?t:nr;if(e.length===0)n();else{var r=eo;M.mutateApproach===Gf&&(r=gt.requestAnimationFrame||eo),r(function(){var i=Bu(),a=ea.begin("mutate");e.map(i),a(),n()})}}var ta=!1;function el(){ta=!0}function vi(){ta=!1}var fr=null;function to(e){if($a&&M.observeMutations){var t=e.treeCallback,n=t===void 0?nr:t,r=e.nodeCallback,i=r===void 0?nr:r,a=e.pseudoElementsCallback,o=a===void 0?nr:a,s=e.observeMutationsRoot,l=s===void 0?ee:s;fr=new $a(function(u){if(!ta){var c=vt();Zt(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Ja(m.addedNodes[0])&&(M.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&M.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Ja(m.target)&&~tu.indexOf(m.attributeName))if(m.attributeName==="class"&&Du(m.target)){var h=Pr(Gi(m.target)),g=h.prefix,P=h.iconName;m.target.setAttribute(Wi,g||c),P&&m.target.setAttribute(Vi,P)}else Hu(m.target)&&i(m.target)})}}),rt&&fr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Wu(){fr&&fr.disconnect()}function Vu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function qu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Pr(Gi(e));return i.prefix||(i.prefix=vt()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=ku(i.prefix,e.innerText)||Qi(i.prefix,fi(e.innerText))),!i.iconName&&M.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Gu(e){var t=Zt(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return M.autoA11y&&(n?t["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(r||Sn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Ku(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ve,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function no(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=qu(e),r=n.iconName,i=n.prefix,a=n.rest,o=Gu(e),s=di("parseNodeAttributes",{},e),l=t.styleParser?Vu(e):[];return R({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Ve,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var Xu=Le.styles;function tl(e){var t=M.autoReplaceSvg==="nest"?no(e,{styleParser:!1}):no(e);return~t.extra.classes.indexOf(Fs)?tt("generateLayersText",e,t):tt("generateSvgReplacementMutation",e,t)}var bt=new Set;qi.map(function(e){bt.add("fa-".concat(e))});Object.keys(_n[J]).map(bt.add.bind(bt));Object.keys(_n[oe]).map(bt.add.bind(bt));bt=Rn(bt);function ro(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!rt)return Promise.resolve();var n=ee.documentElement.classList,r=function(m){return n.add("".concat(Wa,"-").concat(m))},i=function(m){return n.remove("".concat(Wa,"-").concat(m))},a=M.autoFetchSvg?bt:qi.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Xu));a.includes("fa")||a.push("fa");var o=[".".concat(Fs,":not([").concat(Rt,"])")].concat(a.map(function(c){return".".concat(c,":not([").concat(Rt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Zt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=ea.begin("onTree"),u=s.reduce(function(c,m){try{var h=tl(m);h&&c.push(h)}catch(g){js||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,m){Promise.all(u).then(function(h){Js(h,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(h){l(),m(h)})})}function Qu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;tl(e).then(function(n){n&&Js([n],t)})}function Zu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:mi(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:mi(i||{})),e(r,R(R({},n),{},{mask:i}))}}var Ju=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Ve:r,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,u=n.maskId,c=u===void 0?null:u,m=n.title,h=m===void 0?null:m,g=n.titleId,P=g===void 0?null:g,N=n.classes,F=N===void 0?[]:N,y=n.attributes,w=y===void 0?{}:y,C=n.styles,D=C===void 0?{}:C;if(t){var $=t.prefix,z=t.iconName,Z=t.icon;return Cr(R({type:"icon"},t),function(){return It("beforeDOMElementCreation",{iconDefinition:t,params:n}),M.autoA11y&&(h?w["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(P||Sn()):(w["aria-hidden"]="true",w.focusable="false")),Ji({icons:{main:hi(Z),mask:l?hi(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:$,iconName:z,transform:R(R({},Ve),i),symbol:o,title:h,maskId:c,titleId:P,extra:{attributes:w,styles:D,classes:F}})})}},ed={mixout:function(){return{icon:Zu(Ju)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ro,n.nodeCallback=Qu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?ee:r,a=n.callback,o=a===void 0?function(){}:a;return ro(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,c=r.mask,m=r.maskId,h=r.extra;return new Promise(function(g,P){Promise.all([pi(i,s),c.iconName?pi(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var F=Yi(N,2),y=F[0],w=F[1];g([n,Ji({icons:{main:y,mask:w},prefix:s,iconName:i,transform:l,symbol:u,maskId:m,title:a,titleId:o,extra:h,watchable:!0})])}).catch(P)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,s=n.styles,l=Sr(s);l.length>0&&(i.style=l);var u;return Ki(o)&&(u=tt("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(u||a.icon),{children:r,attributes:i}}}},td={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return Cr({type:"layer"},function(){It("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(M.cssPrefix,"-layers")].concat(Rn(a)).join(" ")},children:o}]})}}}},nd={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,m=c===void 0?{}:c;return Cr({type:"counter",content:n},function(){return It("beforeDOMElementCreation",{content:n,params:r}),Lu({content:n.toString(),title:a,extra:{attributes:u,styles:m,classes:["".concat(M.cssPrefix,"-layers-counter")].concat(Rn(s))}})})}}}},rd={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?Ve:i,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,m=c===void 0?{}:c,h=r.styles,g=h===void 0?{}:h;return Cr({type:"text",content:n},function(){return It("beforeDOMElementCreation",{content:n,params:r}),Qa({content:n,transform:R(R({},Ve),a),title:s,extra:{attributes:m,styles:g,classes:["".concat(M.cssPrefix,"-layers-text")].concat(Rn(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,s=null,l=null;if(Ns){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/u,l=c.height/u}return M.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Qa({content:n.innerHTML,width:s,height:l,transform:a,title:i,extra:o,watchable:!0})])}}},id=new RegExp('"',"ug"),io=[1105920,1112319];function ad(e){var t=e.replace(id,""),n=bu(t,0),r=n>=io[0]&&n<=io[1],i=t.length===2?t[0]===t[1]:!1;return{value:fi(i?t[0]:t),isSecondary:r||i}}function ao(e,t){var n="".concat(qf).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=Zt(e.children),o=a.filter(function(Z){return Z.getAttribute(ci)===t})[0],s=gt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Zf),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var m=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?oe:J,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?An[h][l[2].toLowerCase()]:Jf[h][u],P=ad(m),N=P.value,F=P.isSecondary,y=l[0].startsWith("FontAwesome"),w=Qi(g,N),C=w;if(y){var D=Eu(N);D.iconName&&D.prefix&&(w=D.iconName,g=D.prefix)}if(w&&!F&&(!o||o.getAttribute(Wi)!==g||o.getAttribute(Vi)!==C)){e.setAttribute(n,C),o&&e.removeChild(o);var $=Ku(),z=$.extra;z.attributes[ci]=t,pi(w,g).then(function(Z){var he=Ji(R(R({},$),{},{icons:{main:Z,mask:Zi()},prefix:g,iconName:C,extra:z,watchable:!0})),pe=ee.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(pe,e.firstChild):e.appendChild(pe),pe.outerHTML=he.map(function(Oe){return Tn(Oe)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function od(e){return Promise.all([ao(e,"::before"),ao(e,"::after")])}function sd(e){return e.parentNode!==document.head&&!~Kf.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ci)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function oo(e){if(rt)return new Promise(function(t,n){var r=Zt(e.querySelectorAll("*")).filter(sd).map(od),i=ea.begin("searchPseudoElements");el(),Promise.all(r).then(function(){i(),vi(),t()}).catch(function(){i(),vi(),n()})})}var ld={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=oo,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ee:r;M.searchPseudoElements&&oo(i)}}},so=!1,cd={mixout:function(){return{dom:{unwatch:function(){el(),so=!0}}}},hooks:function(){return{bootstrap:function(){to(di("mutationObserverCallbacks",{}))},noAuto:function(){Wu()},watch:function(n){var r=n.observeMutationsRoot;so?vi():to(di("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},lo=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},fd={mixout:function(){return{parse:{transform:function(n){return lo(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=lo(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),m={transform:"".concat(l," ").concat(u," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:m,path:h};return{tag:"g",attributes:R({},g.outer),children:[{tag:"g",attributes:R({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:R(R({},r.icon.attributes),g.path)}]}]}}}},Ur={x:0,y:0,width:"100%",height:"100%"};function co(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function ud(e){return e.tag==="g"?e.children:[e]}var dd={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?Pr(i.split(" ").map(function(o){return o.trim()})):Zi();return a.prefix||(a.prefix=vt()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,u=a.width,c=a.icon,m=o.width,h=o.icon,g=fu({transform:l,containerWidth:m,iconWidth:u}),P={tag:"rect",attributes:R(R({},Ur),{},{fill:"white"})},N=c.children?{children:c.children.map(co)}:{},F={tag:"g",attributes:R({},g.inner),children:[co(R({tag:c.tag,attributes:R(R({},c.attributes),g.path)},N))]},y={tag:"g",attributes:R({},g.outer),children:[F]},w="mask-".concat(s||Sn()),C="clip-".concat(s||Sn()),D={tag:"mask",attributes:R(R({},Ur),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[P,y]},$={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:ud(h)},D]};return r.push($,{tag:"rect",attributes:R({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(w,")")},Ur)}),{children:r,attributes:i}}}},md={provides:function(t){var n=!1;gt.matchMedia&&(n=gt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:R(R({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=R(R({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:R(R({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:R(R({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:R(R({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:R(R({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:R(R({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:R(R({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:R(R({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},hd={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},pd=[mu,ed,td,nd,rd,ld,cd,fd,dd,md,hd];Pu(pd,{mixoutsTo:Se});Se.noAuto;Se.config;Se.library;Se.dom;var bi=Se.parse;Se.findIconDefinition;Se.toHtml;var gd=Se.icon;Se.layer;Se.text;Se.counter;function fo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Xe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?fo(Object(n),!0).forEach(function(r){we(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ur(e){"@babel/helpers - typeof";return ur=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ur(e)}function we(e,t,n){return t=xd(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function vd(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function bd(e,t){if(e==null)return{};var n=vd(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function yd(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function xd(e){var t=yd(e,"string");return typeof t=="symbol"?t:String(t)}var wd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},nl={exports:{}};(function(e){(function(t){var n=function(y,w,C){if(!u(w)||m(w)||h(w)||g(w)||l(w))return w;var D,$=0,z=0;if(c(w))for(D=[],z=w.length;$<z;$++)D.push(n(y,w[$],C));else{D={};for(var Z in w)Object.prototype.hasOwnProperty.call(w,Z)&&(D[y(Z,C)]=n(y,w[Z],C))}return D},r=function(y,w){w=w||{};var C=w.separator||"_",D=w.split||/(?=[A-Z])/;return y.split(D).join(C)},i=function(y){return P(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(w,C){return C?C.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},a=function(y){var w=i(y);return w.substr(0,1).toUpperCase()+w.substr(1)},o=function(y,w){return r(y,w).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},u=function(y){return y===Object(y)},c=function(y){return s.call(y)=="[object Array]"},m=function(y){return s.call(y)=="[object Date]"},h=function(y){return s.call(y)=="[object RegExp]"},g=function(y){return s.call(y)=="[object Boolean]"},P=function(y){return y=y-0,y===y},N=function(y,w){var C=w&&"process"in w?w.process:w;return typeof C!="function"?y:function(D,$){return C(D,y,$)}},F={camelize:i,decamelize:o,pascalize:a,depascalize:o,camelizeKeys:function(y,w){return n(N(i,w),y)},decamelizeKeys:function(y,w){return n(N(o,w),y,w)},pascalizeKeys:function(y,w){return n(N(a,w),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=F:t.humps=F})(wd)})(nl);var _d=nl.exports,Ad=["class","style"];function kd(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=_d.camelize(n.slice(0,r)),a=n.slice(r+1).trim();return t[i]=a,t},{})}function Ed(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function rl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return rl(l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.class=Ed(c);break;case"style":l.style=kd(c);break;default:l.attrs[u]=c}return l},{attrs:{},class:{},style:{}});n.class;var a=n.style,o=a===void 0?{}:a,s=bd(n,Ad);return Ui(e.tag,Xe(Xe(Xe({},t),{},{class:i.class,style:Xe(Xe({},i.style),o)},i.attrs),s),r)}var il=!1;try{il=!0}catch{}function Sd(){if(!il&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Yr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?we({},e,t):{}}function Od(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},we(t,"fa-".concat(e.size),e.size!==null),we(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),we(t,"fa-pull-".concat(e.pull),e.pull!==null),we(t,"fa-swap-opacity",e.swapOpacity),we(t,"fa-bounce",e.bounce),we(t,"fa-shake",e.shake),we(t,"fa-beat",e.beat),we(t,"fa-fade",e.fade),we(t,"fa-beat-fade",e.beatFade),we(t,"fa-flash",e.flash),we(t,"fa-spin-pulse",e.spinPulse),we(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function uo(e){if(e&&ur(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(bi.icon)return bi.icon(e);if(e===null)return null;if(ur(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Pd=Nt({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,i=de(function(){return uo(t.icon)}),a=de(function(){return Yr("classes",Od(t))}),o=de(function(){return Yr("transform",typeof t.transform=="string"?bi.transform(t.transform):t.transform)}),s=de(function(){return Yr("mask",uo(t.mask))}),l=de(function(){return gd(i.value,Xe(Xe(Xe(Xe({},a.value),o.value),s.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});fn(l,function(c){if(!c)return Sd("Could not find one or more icon(s)",i.value,s.value)},{immediate:!0});var u=de(function(){return l.value?rl(l.value.abstract[0],{},r):null});return function(){return u.value}}}),Cd={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]};const Rd={class:"text-button"},Id=Nt({__name:"HeaderButton",props:{buttonText:{},buttonDestination:{},isFocused:{type:Boolean}},setup(e){return(t,n)=>{const r=Fi("RouterLink");return Ce(),We("div",Rd,[se(r,{class:vr(["button-link button-24",{focused:t.isFocused}]),to:t.buttonDestination},{default:ji(()=>[Ss(Ol(t.buttonText),1)]),_:1},8,["class","to"])])}}}),Jt=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},Kn=Jt(Id,[["__scopeId","data-v-35f6b589"]]),Td="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA6CSURBVHgBxVp7kF11ff+cx30/9t5kk+xuFrJpYPIgiUkTHqkJAzGx0WIFW6pVpwyjtUxLR5mBPrAtnT7AafsHHW0r1emgttN2oEAhDDgIGlg1agIBAoYkkiVkSbLPu/f9OA8/39+55+y5d3dDMKjf5Dfn3N/5nd/v+36d1fAug+u6OV5kLONIhB6dkaFpWgHvImi4QGgjvIvjfRzbOfo4ehdYXuc4IsO27f83DOMRElTHLwOI+HaOBxzHcS8AahwPc2zFzwjvWAI87Bpe7uK4xp9zGhbqZ6dRPnwS9tki6iPjsIoVuC1H1iOajMNIxxG5aDEig4sQW9GL9Ko+aKYR3voQx19QIo/jHcB5E0BERC0+z/E5f645UUTxe0dR+95xRIstRAxTbVivd2oFkUIsFgOlBcoLLbsFty8DY20f8rs2ItabDS+/v1Qq3ZHNZidwHnBeBBD5Tbx8g2O9/G6MFdAcPo7mcz+BbjvcZHabVqsFy7LUfSQSUcg3m83gPgy6YaBcryJy5RDyH94aJmSE40auP4ALJYDI38TLVzlMq9bA2N4DiB54CzkjgUqlyudOsFY43Gg0gt+9S5aouempKYW8aZrQdT28NyzbQjbbg3KzBv39q5F//3ugGbq/36009H85F37muR6Sc7fyco+sq4/NYOxr+xA5NgmXqtJMmx757ux6n/MCyWRSISwg6iNqRc8DIhSskd/yfnFmBtFoFKlnT6Hw+hTSH78SkXxaiP0S10T4zr0L4bigBMgdcY1PyX3ljTFMfWUfohM1D2P+T6VSChmf44KMqIqAcHlxb2+ArEhhYnyMVxcxImqQMJtzFtXNZ0Imk1GECpSTQPxT70V0WY///i3c67758NQXQP4SXp6QezHUwr8+gxiR1xTFmlKHSDRCBHXe60oVRPfD3BciXMfzQrI+kUypZxYJVZJx26JzPVvxkRdIV+kI7huGNVHyGfJlMmcTzkcC09PTOcILvB2qT8zg7N2PIlF1O95wHTfgtBweNlx/fj4QSSQSCaUuIrHYp38NTrkO7aHDap9uKFESqT/eCTMTF0acIiM2dEfyOSfRfX1RkJf7wteGEa84nQtcBN5EEBJEwsj78/MNIUyQFxD1ivTnEOtbNC/yAiKJ0r/vU9LimYPw7BELEkBObufCT8p98enDSLxZVmri4T0rBS0VQ+YjW5D55DYYWy+enY9HkPr19ch+/CpeN0BPRBFb26/WalETiXQK5q7VMDcsD5jhq194CEOEMQ5HcryBmSde8o+4pe3SA+jwQuTKnwp3W9T75mMvI6aZ5FisIzDpuSTyd+zhDde9MYnczTsQH1yM2qMvIvV72xBZvxzNl08hNpCHe+AkomsHkfjAetiMGSbI9R2XwD7CvO7lUVq+Z8gz9EIdXBWXG5JK/fGXEN8yhBiNmgR8hVOXz5GAUEbkr5P7MikW5BVXuZmI2w9W0TV9MBanUfyPYRT+7RlUv3sc8Z1roMWI3vKcx9GDJ1H56jDcajMwMpN7OI4dcF4Zse3C0LU5AU6itaicDwkziubTR3x8tvKMK+cSYLuS36A5WYT7/GjHhr6OCnL6koy6t2eqypht8RRUMzuio/bwC3Cnq0jfcjUyd34Qet9sitBstlCr1RTilmVDEy91pkhPU1b7drsTFSPaEKWHih2ZDLwS4fYOArhBXDO0a+S+8u0jiHTZth9F1cY8UHF0adZzpwMUa92CVaii+ePTKH3hSVS/sR96PgljkGpke5zU+rMBkgaTOBWFD70Jm2qm6VpHQPSZ5UtBebWWhdqzr/mPd/H5YoVHm9rrqCY5ddDRccwHQoAYV+MQM84PbUL2E9uQ2L0OsdX9KO99UVwPUp+5GkYyBm1RSvQA9qlpWMfGEH/fWmQ/fTUcclBjVmpzn3KljMW/uZH5iY3GkdNoOV4cEWfhq6ucJ/GmVq16UvzRCB2CyrxzxJmGiP/yjXiXeuHUFIzJWsB113U7pCAusFFtYPLuvUhctYqexUDtmR+j8eKbak39+TcQ6ctBYxrdeukUEfbUY/qevYj+6hDTZw01ItF89S3F8fqThyHWJcxRXseZTQwVITzTtuxA+ma5idob40isWCLPdggBWltc3+flqsb+16E/+gqqTNLkpWql0i3ZDqLmA6VWocxTEAvrs5c6uOomFo8rjyPQnQh2S98Pjsb1G5HZuU5uD/GMzfqJEyfiaAcufYx+Xze86ErxKUPjYeHxdhDWXbkX5Dv2cDzkFVIh7yMI+pzuBtuZZYCoZXvvNeq9oaEhqWH71ORZz8rj5EyLiZnPORdzbOycIO+JBESH5yM67BTCIHNKddHplYToOj1YhRrRODvt7xEfGxvr0zmZ8xdaU+VA5JKzBAfi3IWD43amG4K0ZKbd8+oZvEJGngln1bC9q7IBURU3dLB/K4GTe9ZOTwVz+Xx+jel7H4Hi9Ay06RoWguhq1rFJGjLdn59NKjWhi9O6Kq7ABdIjpXauRYPRufnaGYWTRF+rNXd/33GofdzuZ7qKztWpcjCn1JAvBHmC9jZ6kth+KTIfu5LcmJ2z24mcbc8mdNG1A9AycY+AbALJ3ZchetnAOfeWKC1SCVRoHoiSAL1L9ShNI0hPXWNhRdEic3XWpVs0GLAkLxI9Fa5LmtHzqR3Qk17WaY1MYOLO/0OFLlPtY+rCTvWOnvdqBGX4DHiOROiIAT0ebR/qrZvFVkN6+WzLSWzM5KF1X2wRRldrstqBZGzzCmR+ewuM3nYKUZDndIHvGUTuD3d63GPOM/PAD1DZ9xqW/ME10Mn93r+5AbXnjkInQZKR1n/4OmaYP+Vv38N2iw2dAc0cyME6M4OJux+DW2oh+ztXILNno9qzdWKC2a2JOjse1adebXOMaU121jbL5YkR/QwBXtsPZhtJH4xecvPm7bCnKpi653E0mCr4Yab+2mmM/d0jOHvnA7DGish8cBO0BKPm0dNqxczXv4vqt15FZe8hldSFLTJ66TJUh4+RwGMw+3qocv2IbxhUyBe+PoyJP38QkaFe2GMlNBkQA4nzn7nIw1Gknc/3j5grV66s84cQ0KczdwkOYdSNkPuSZZYeeUGpgluqwe3v8TSUUViQlkaVno6p1EHjaJ2c9Dh4fEw1uUTsTquz4LFGC6g9/SpaFy9GYselqr5AxaunlSpqnuO2RqehTdVUjFDqSe+V2nBRW7s0pZN6W5f2yTWxbhCuNtuI8qsndqI6EBDDzX/mWiWhqfueQf2lNwMRz0LYkXe8zk5e2wXZs+l1/RV6qRPjyN+0A0vvvhENphuN7xxVnkbwEJykkaAv7/EJeFquZlscT/LyWXNpBuayLCIFjxvOiMfN9PWblR6KgaoqSqKpuEnXVByWBE3hITi36+X4FSuZ84wqXV4oiEie44NSpZVLcPavH6bKNaBZLuKOoQxZkJfgGlmWg96fa9NufzuQQLFYHKYhKzknt68O8n/n5DQa/3uQapJH/nO7YbKnaY0XldcoPnSQqhPF0s9/GPE1AzTGoqqwagdH0HhllCXlZUh9wDNIt8F0wvIClV1pwGkyq2WVJyWjK+rF3065AZfPlt51PZZ94aNY+g8fRfITV3ieCO06fLNXivL8wtTU1A865MzI+SUi/kdOqY763z4RcFJACpFwnRqGcPrbDRJxw42s9jkqkPlpgw+JK1YhxxR98t5vwmanInPtOqTJgKm/egQReiiDaXX8T3Ypr0YCHqRd3BhIQIAI/qeaoAu0Lx8EG6zB8HMa13HmIB9Wg25w2olcGES6qkTtKiNNVnoGz45vvAhJpurxy1eiRSOunJ707GDLxQp5gWq1+vcBk/wbNqP2s+n0pOLGtWtUyvB2yEjwcbvq125hOM5cAvUuqQgx1f3HUWItHl21FNFfWYoq/f8444M4kLNFtjOvvUStJTP3p9PpQ/Mex6bWpp6enue4Ybry1GGUHzyo5sVora7kxe8J+RDu7QiHw8/MiKlymTYCcySZSqdZC9SpWp3u1of0b21F7rrN6p5tl830SgEBHcUvs7tDLCpUNzi1ez2iGwbVfDjPCRMQBjtUv6bZ55T+p2SWflWlGMFcpxt5cZGiIolEcl5vFd+6Ernf2OSf+c9h5OcQIMDAfC/VQgWJ7O8ycaNrDTLENvhdBK3t4rzsse0+22m4xBFd8h3DCKmZ1+/xh9iQVGU+4REzoiTkDzcXR+5jVylPxD1GCoXCP3XjO6/7oItaT2k8BymeJ8sYv+cxJC1DcU+MeiEQNUqmvARNmmF+y9FttxYj0U678oNUmDFTk5PqauRS6P/L6+n7VTOrTNXZRqYc7j5z3i7sokWLZOHN1GNLglfvn30IyYt6PdXoMsAwJ3zu+xwMnokq8V/YLrSu7ps/RwNVLZuBuz7iI4/Jycnb5kPeP3dBGB09fevAQN8X1Y9CDc5jLPifH0GhMD1nrTSf/CpO+pu+jUilpYyzXROb7cLH1/1u0Ff1InHTNuXOVe/Ism7j2nf+gcOHcrm8hy72v3moiuH2s3RvD+6HVZqt3AShTDY7x7cLCBKlYjFwwdo8xbtq6tLL5W+4HLkbtvrvlZkh/D5b/f+Dc8B5feSjPl/CQ5+i+gzJb6mdiw8dQI19ILfWVKoT/kDRDRJ9/eaUgCGVlZ8iJPlxY8tKpPasD9J5rj9Oru8mQ0bwNnDen1mPHTs2uGLFittJyGd9TkteVGWhor8wCrerEOqGcqkcuGOVnDGvEjct7lpvl5+SjzWb1v2xWOSO8/2ThHf8oVs8FNPafySH9oTnnfES7LdmYLFwdycqKlV22jm+fCdwojpaCQMxibTrlsNspwU+EPnvMEW4LRxlf67ABG+IQe9+Gtlp92cEvjvNfb7M1s4v7k8NukG+qdH7bGcgYscY7+UXnfW0lfh8a+lGpfo7wnixrzRd+lYmnxm+0L9euWAC5gNpV/Jb2yYORQj9OBtrtUNSvuJdhp8CrGS72BdQF0sAAAAASUVORK5CYII=",Nd=e=>(sc("data-v-25a78b68"),e=e(),lc(),e),Md=Nd(()=>Vt("img",{src:Td},null,-1)),Ld={key:0,class:"textButton header-24"},jd=Nt({__name:"LogoButton",props:{buttonText:{},buttonDestination:{},isMobile:{type:Boolean}},setup(e){return(t,n)=>{const r=Fi("RouterLink");return Ce(),ks(r,{class:"container",to:t.buttonDestination},{default:ji(()=>[Md,t.isMobile?on("",!0):(Ce(),We("span",Ld,"OsuDating"))]),_:1},8,["to"])}}}),Fd=Jt(jd,[["__scopeId","data-v-25a78b68"]]);function Xn(){var e=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor),e}const zd={class:"header-container"},Dd={class:"child"},Hd={key:0,class:"child"},Bd={key:1,class:"child"},Ud={key:3,class:"nav-dropdown"},Yd=Nt({__name:"AppHeader",setup(e){const t=Qo(!1);return(n,r)=>(Ce(),We("header",zd,[Vt("div",Dd,[se(Fd,{"is-mobile":Pe(Xn)(),"button-text":"OsuDating","button-destination":"/"},null,8,["is-mobile"])]),Pe(Xn)()?on("",!0):(Ce(),We("div",Hd,[se(Kn,{"button-text":"Home","button-destination":"/","is-focused":n.$route.name=="Home"},null,8,["is-focused"])])),Pe(Xn)()?on("",!0):(Ce(),We("div",Bd,[se(Kn,{"button-text":"Leaderboard","button-destination":"leaderboard","is-focused":n.$route.name=="Leaderboard"},null,8,["is-focused"])])),Pe(Xn)()?(Ce(),We("a",{key:2,class:"right-align child nav-menu",onClick:r[0]||(r[0]=i=>t.value=!t.value)},[se(Pe(Pd),{icon:Pe(Cd)},null,8,["icon"])])):on("",!0),t.value?(Ce(),We("div",Ud,[se(Kn,{"button-text":"Home","button-destination":"/","is-focused":n.$route.name=="Home"},null,8,["is-focused"]),se(Kn,{"button-text":"Leaderboard","button-destination":"leaderboard","is-focused":n.$route.name=="Leaderboard"},null,8,["is-focused"])])):on("",!0)]))}}),$d=Jt(Yd,[["__scopeId","data-v-58de4ddd"]]),Wd={class:"parent"},Vd={class:"element"},qd=Nt({__name:"App",setup(e){return(t,n)=>{const r=Fi("RouterView");return Ce(),We(Ue,null,[Vt("div",Wd,[Vt("div",Vd,[se($d)])]),se(r)],64)}}}),Gd=Jt(qd,[["__scopeId","data-v-644d4f84"]]);/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const zt=typeof document<"u";function Kd(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const re=Object.assign;function $r(e,t){const n={};for(const r in t){const i=t[r];n[r]=Fe(i)?i.map(e):e(i)}return n}const gn=()=>{},Fe=Array.isArray,al=/#/g,Xd=/&/g,Qd=/\//g,Zd=/=/g,Jd=/\?/g,ol=/\+/g,em=/%5B/g,tm=/%5D/g,sl=/%5E/g,nm=/%60/g,ll=/%7B/g,rm=/%7C/g,cl=/%7D/g,im=/%20/g;function na(e){return encodeURI(""+e).replace(rm,"|").replace(em,"[").replace(tm,"]")}function am(e){return na(e).replace(ll,"{").replace(cl,"}").replace(sl,"^")}function yi(e){return na(e).replace(ol,"%2B").replace(im,"+").replace(al,"%23").replace(Xd,"%26").replace(nm,"`").replace(ll,"{").replace(cl,"}").replace(sl,"^")}function om(e){return yi(e).replace(Zd,"%3D")}function sm(e){return na(e).replace(al,"%23").replace(Jd,"%3F")}function lm(e){return e==null?"":sm(e).replace(Qd,"%2F")}function On(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const cm=/\/$/,fm=e=>e.replace(cm,"");function Wr(e,t,n="/"){let r,i={},a="",o="";const s=t.indexOf("#");let l=t.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(r=t.slice(0,l),a=t.slice(l+1,s>-1?s:t.length),i=e(a)),s>-1&&(r=r||t.slice(0,s),o=t.slice(s,t.length)),r=hm(r??t,n),{fullPath:r+(a&&"?")+a+o,path:r,query:i,hash:On(o)}}function um(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function dm(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Kt(t.matched[r],n.matched[i])&&fl(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Kt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function fl(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!mm(e[n],t[n]))return!1;return!0}function mm(e,t){return Fe(e)?mo(e,t):Fe(t)?mo(t,e):e===t}function mo(e,t){return Fe(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function hm(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let a=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==".")if(s==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(o).join("/")}var Pn;(function(e){e.pop="pop",e.push="push"})(Pn||(Pn={}));var dr;(function(e){e.back="back",e.forward="forward",e.unknown=""})(dr||(dr={}));const Vr="";function pm(e){if(!e)if(zt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),fm(e)}const gm=/^[^#]+#/;function vm(e,t){return e.replace(gm,"#")+t}function bm(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const ym=()=>({left:window.scrollX,top:window.scrollY});function xm(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=bm(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function ho(e,t){return(history.state?history.state.position-t:-1)+e}const xi=new Map;function wm(e,t){xi.set(e,t)}function _m(e){const t=xi.get(e);return xi.delete(e),t}function Am(e=""){let t=[],n=[Vr],r=0;e=pm(e);function i(s){r++,r!==n.length&&n.splice(r),n.push(s)}function a(s,l,{direction:u,delta:c}){const m={direction:u,delta:c,type:Pn.pop};for(const h of t)h(s,l,m)}const o={location:Vr,state:{},base:e,createHref:vm.bind(null,e),replace(s){n.splice(r--,1),i(s)},push(s,l){i(s)},listen(s){return t.push(s),()=>{const l=t.indexOf(s);l>-1&&t.splice(l,1)}},destroy(){t=[],n=[Vr],r=0},go(s,l=!0){const u=this.location,c=s<0?dr.back:dr.forward;r=Math.max(0,Math.min(r+s,n.length-1)),l&&a(this.location,u,{direction:c,delta:s})}};return Object.defineProperty(o,"location",{enumerable:!0,get:()=>n[r]}),o}function km(e){return typeof e=="string"||e&&typeof e=="object"}function ul(e){return typeof e=="string"||typeof e=="symbol"}const lt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},dl=Symbol("");var po;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(po||(po={}));function Xt(e,t){return re(new Error,{type:e,[dl]:!0},t)}function Ke(e,t){return e instanceof Error&&dl in e&&(t==null||!!(e.type&t))}const go="[^/]+?",Em={sensitive:!1,strict:!1,start:!0,end:!0},Sm=/[.+*?^${}()[\]/\\]/g;function Om(e,t){const n=re({},Em,t),r=[];let i=n.start?"^":"";const a=[];for(const u of e){const c=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let m=0;m<u.length;m++){const h=u[m];let g=40+(n.sensitive?.25:0);if(h.type===0)m||(i+="/"),i+=h.value.replace(Sm,"\\$&"),g+=40;else if(h.type===1){const{value:P,repeatable:N,optional:F,regexp:y}=h;a.push({name:P,repeatable:N,optional:F});const w=y||go;if(w!==go){g+=10;try{new RegExp(`(${w})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${P}" (${w}): `+D.message)}}let C=N?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;m||(C=F&&u.length<2?`(?:/${C})`:"/"+C),F&&(C+="?"),i+=C,g+=20,F&&(g+=-8),N&&(g+=-20),w===".*"&&(g+=-50)}c.push(g)}r.push(c)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function s(u){const c=u.match(o),m={};if(!c)return null;for(let h=1;h<c.length;h++){const g=c[h]||"",P=a[h-1];m[P.name]=g&&P.repeatable?g.split("/"):g}return m}function l(u){let c="",m=!1;for(const h of e){(!m||!c.endsWith("/"))&&(c+="/"),m=!1;for(const g of h)if(g.type===0)c+=g.value;else if(g.type===1){const{value:P,repeatable:N,optional:F}=g,y=P in u?u[P]:"";if(Fe(y)&&!N)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const w=Fe(y)?y.join("/"):y;if(!w)if(F)h.length<2&&(c.endsWith("/")?c=c.slice(0,-1):m=!0);else throw new Error(`Missing required param "${P}"`);c+=w}}return c||"/"}return{re:o,score:r,keys:a,parse:s,stringify:l}}function Pm(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Cm(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const a=Pm(r[n],i[n]);if(a)return a;n++}if(Math.abs(i.length-r.length)===1){if(vo(r))return 1;if(vo(i))return-1}return i.length-r.length}function vo(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Rm={type:0,value:""},Im=/[a-zA-Z0-9_]/;function Tm(e){if(!e)return[[]];if(e==="/")return[[Rm]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const i=[];let a;function o(){a&&i.push(a),a=[]}let s=0,l,u="",c="";function m(){u&&(n===0?a.push({type:0,value:u}):n===1||n===2||n===3?(a.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),u="")}function h(){u+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&m(),o()):l===":"?(m(),n=1):h();break;case 4:h(),n=r;break;case 1:l==="("?n=2:Im.test(l)?h():(m(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:m(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),m(),o(),i}function Nm(e,t,n){const r=Om(Tm(e.path),n),i=re(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function Mm(e,t){const n=[],r=new Map;t=xo({strict:!1,end:!0,sensitive:!1},t);function i(c){return r.get(c)}function a(c,m,h){const g=!h,P=Lm(c);P.aliasOf=h&&h.record;const N=xo(t,c),F=[P];if("alias"in c){const C=typeof c.alias=="string"?[c.alias]:c.alias;for(const D of C)F.push(re({},P,{components:h?h.record.components:P.components,path:D,aliasOf:h?h.record:P}))}let y,w;for(const C of F){const{path:D}=C;if(m&&D[0]!=="/"){const $=m.record.path,z=$[$.length-1]==="/"?"":"/";C.path=m.record.path+(D&&z+D)}if(y=Nm(C,m,N),h?h.alias.push(y):(w=w||y,w!==y&&w.alias.push(y),g&&c.name&&!yo(y)&&o(c.name)),P.children){const $=P.children;for(let z=0;z<$.length;z++)a($[z],y,h&&h.children[z])}h=h||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&l(y)}return w?()=>{o(w)}:gn}function o(c){if(ul(c)){const m=r.get(c);m&&(r.delete(c),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(c);m>-1&&(n.splice(m,1),c.record.name&&r.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function s(){return n}function l(c){let m=0;for(;m<n.length&&Cm(c,n[m])>=0&&(c.record.path!==n[m].record.path||!ml(c,n[m]));)m++;n.splice(m,0,c),c.record.name&&!yo(c)&&r.set(c.record.name,c)}function u(c,m){let h,g={},P,N;if("name"in c&&c.name){if(h=r.get(c.name),!h)throw Xt(1,{location:c});N=h.record.name,g=re(bo(m.params,h.keys.filter(w=>!w.optional).concat(h.parent?h.parent.keys.filter(w=>w.optional):[]).map(w=>w.name)),c.params&&bo(c.params,h.keys.map(w=>w.name))),P=h.stringify(g)}else if(c.path!=null)P=c.path,h=n.find(w=>w.re.test(P)),h&&(g=h.parse(P),N=h.record.name);else{if(h=m.name?r.get(m.name):n.find(w=>w.re.test(m.path)),!h)throw Xt(1,{location:c,currentLocation:m});N=h.record.name,g=re({},m.params,c.params),P=h.stringify(g)}const F=[];let y=h;for(;y;)F.unshift(y.record),y=y.parent;return{name:N,path:P,params:g,matched:F,meta:Fm(F)}}return e.forEach(c=>a(c)),{addRoute:a,resolve:u,removeRoute:o,getRoutes:s,getRecordMatcher:i}}function bo(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Lm(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:jm(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function jm(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function yo(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Fm(e){return e.reduce((t,n)=>re(t,n.meta),{})}function xo(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function ml(e,t){return t.children.some(n=>n===e||ml(e,n))}function zm(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const a=r[i].replace(ol," "),o=a.indexOf("="),s=On(o<0?a:a.slice(0,o)),l=o<0?null:On(a.slice(o+1));if(s in t){let u=t[s];Fe(u)||(u=t[s]=[u]),u.push(l)}else t[s]=l}return t}function wo(e){let t="";for(let n in e){const r=e[n];if(n=om(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Fe(r)?r.map(a=>a&&yi(a)):[r&&yi(r)]).forEach(a=>{a!==void 0&&(t+=(t.length?"&":"")+n,a!=null&&(t+="="+a))})}return t}function Dm(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Fe(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return t}const Hm=Symbol(""),_o=Symbol(""),ra=Symbol(""),hl=Symbol(""),wi=Symbol("");function rn(){let e=[];function t(r){return e.push(r),()=>{const i=e.indexOf(r);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function dt(e,t,n,r,i,a=o=>o()){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,l)=>{const u=h=>{h===!1?l(Xt(4,{from:n,to:t})):h instanceof Error?l(h):km(h)?l(Xt(2,{from:t,to:h})):(o&&r.enterCallbacks[i]===o&&typeof h=="function"&&o.push(h),s())},c=a(()=>e.call(r&&r.instances[i],t,n,u));let m=Promise.resolve(c);e.length<3&&(m=m.then(u)),m.catch(h=>l(h))})}function qr(e,t,n,r,i=a=>a()){const a=[];for(const o of e)for(const s in o.components){let l=o.components[s];if(!(t!=="beforeRouteEnter"&&!o.instances[s]))if(Bm(l)){const c=(l.__vccOpts||l)[t];c&&a.push(dt(c,n,r,o,s,i))}else{let u=l();a.push(()=>u.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${s}" at "${o.path}"`));const m=Kd(c)?c.default:c;o.components[s]=m;const g=(m.__vccOpts||m)[t];return g&&dt(g,n,r,o,s,i)()}))}}return a}function Bm(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ao(e){const t=Ze(ra),n=Ze(hl),r=de(()=>{const l=Pe(e.to);return t.resolve(l)}),i=de(()=>{const{matched:l}=r.value,{length:u}=l,c=l[u-1],m=n.matched;if(!c||!m.length)return-1;const h=m.findIndex(Kt.bind(null,c));if(h>-1)return h;const g=ko(l[u-2]);return u>1&&ko(c)===g&&m[m.length-1].path!==g?m.findIndex(Kt.bind(null,l[u-2])):h}),a=de(()=>i.value>-1&&Wm(n.params,r.value.params)),o=de(()=>i.value>-1&&i.value===n.matched.length-1&&fl(n.params,r.value.params));function s(l={}){return $m(l)?t[Pe(e.replace)?"replace":"push"](Pe(e.to)).catch(gn):Promise.resolve()}return{route:r,href:de(()=>r.value.href),isActive:a,isExactActive:o,navigate:s}}const Um=Nt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ao,setup(e,{slots:t}){const n=yr(Ao(e)),{options:r}=Ze(ra),i=de(()=>({[Eo(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Eo(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const a=t.default&&t.default(n);return e.custom?a:Ui("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},a)}}}),Ym=Um;function $m(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Wm(e,t){for(const n in t){const r=t[n],i=e[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Fe(i)||i.length!==r.length||r.some((a,o)=>a!==i[o]))return!1}return!0}function ko(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Eo=(e,t,n)=>e??t??n,Vm=Nt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Ze(wi),i=de(()=>e.route||r.value),a=Ze(_o,0),o=de(()=>{let u=Pe(a);const{matched:c}=i.value;let m;for(;(m=c[u])&&!m.components;)u++;return u}),s=de(()=>i.value.matched[o.value]);Jn(_o,de(()=>o.value+1)),Jn(Hm,s),Jn(wi,i);const l=Qo();return fn(()=>[l.value,s.value,e.name],([u,c,m],[h,g,P])=>{c&&(c.instances[m]=u,g&&g!==c&&u&&u===h&&(c.leaveGuards.size||(c.leaveGuards=g.leaveGuards),c.updateGuards.size||(c.updateGuards=g.updateGuards))),u&&c&&(!g||!Kt(c,g)||!h)&&(c.enterCallbacks[m]||[]).forEach(N=>N(u))},{flush:"post"}),()=>{const u=i.value,c=e.name,m=s.value,h=m&&m.components[c];if(!h)return So(n.default,{Component:h,route:u});const g=m.props[c],P=g?g===!0?u.params:typeof g=="function"?g(u):g:null,F=Ui(h,re({},P,t,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(m.instances[c]=null)},ref:l}));return So(n.default,{Component:F,route:u})||F}}});function So(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const qm=Vm;function Gm(e){const t=Mm(e.routes,e),n=e.parseQuery||zm,r=e.stringifyQuery||wo,i=e.history,a=rn(),o=rn(),s=rn(),l=Zl(lt);let u=lt;zt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=$r.bind(null,b=>""+b),m=$r.bind(null,lm),h=$r.bind(null,On);function g(b,I){let S,L;return ul(b)?(S=t.getRecordMatcher(b),L=I):L=b,t.addRoute(L,S)}function P(b){const I=t.getRecordMatcher(b);I&&t.removeRoute(I)}function N(){return t.getRoutes().map(b=>b.record)}function F(b){return!!t.getRecordMatcher(b)}function y(b,I){if(I=re({},I||l.value),typeof b=="string"){const d=Wr(n,b,I.path),p=t.resolve({path:d.path},I),x=i.createHref(d.fullPath);return re(d,p,{params:h(p.params),hash:On(d.hash),redirectedFrom:void 0,href:x})}let S;if(b.path!=null)S=re({},b,{path:Wr(n,b.path,I.path).path});else{const d=re({},b.params);for(const p in d)d[p]==null&&delete d[p];S=re({},b,{params:m(d)}),I.params=m(I.params)}const L=t.resolve(S,I),K=b.hash||"";L.params=c(h(L.params));const te=um(r,re({},b,{hash:am(K),path:L.path})),f=i.createHref(te);return re({fullPath:te,hash:K,query:r===wo?Dm(b.query):b.query||{}},L,{redirectedFrom:void 0,href:f})}function w(b){return typeof b=="string"?Wr(n,b,l.value.path):re({},b)}function C(b,I){if(u!==b)return Xt(8,{from:I,to:b})}function D(b){return Z(b)}function $(b){return D(re(w(b),{replace:!0}))}function z(b){const I=b.matched[b.matched.length-1];if(I&&I.redirect){const{redirect:S}=I;let L=typeof S=="function"?S(b):S;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=w(L):{path:L},L.params={}),re({query:b.query,hash:b.hash,params:L.path!=null?{}:b.params},L)}}function Z(b,I){const S=u=y(b),L=l.value,K=b.state,te=b.force,f=b.replace===!0,d=z(S);if(d)return Z(re(w(d),{state:typeof d=="object"?re({},K,d.state):K,force:te,replace:f}),I||S);const p=S;p.redirectedFrom=I;let x;return!te&&dm(r,L,S)&&(x=Xt(16,{to:p,from:L}),De(L,L,!0,!1)),(x?Promise.resolve(x):Oe(p,L)).catch(v=>Ke(v)?Ke(v,2)?v:at(v):G(v,p,L)).then(v=>{if(v){if(Ke(v,2))return Z(re({replace:f},w(v.to),{state:typeof v.to=="object"?re({},K,v.to.state):K,force:te}),I||p)}else v=wt(p,L,!0,f,K);return it(p,L,v),v})}function he(b,I){const S=C(b,I);return S?Promise.reject(S):Promise.resolve()}function pe(b){const I=jt.values().next().value;return I&&typeof I.runWithContext=="function"?I.runWithContext(b):b()}function Oe(b,I){let S;const[L,K,te]=Km(b,I);S=qr(L.reverse(),"beforeRouteLeave",b,I);for(const d of L)d.leaveGuards.forEach(p=>{S.push(dt(p,b,I))});const f=he.bind(null,b,I);return S.push(f),ge(S).then(()=>{S=[];for(const d of a.list())S.push(dt(d,b,I));return S.push(f),ge(S)}).then(()=>{S=qr(K,"beforeRouteUpdate",b,I);for(const d of K)d.updateGuards.forEach(p=>{S.push(dt(p,b,I))});return S.push(f),ge(S)}).then(()=>{S=[];for(const d of te)if(d.beforeEnter)if(Fe(d.beforeEnter))for(const p of d.beforeEnter)S.push(dt(p,b,I));else S.push(dt(d.beforeEnter,b,I));return S.push(f),ge(S)}).then(()=>(b.matched.forEach(d=>d.enterCallbacks={}),S=qr(te,"beforeRouteEnter",b,I,pe),S.push(f),ge(S))).then(()=>{S=[];for(const d of o.list())S.push(dt(d,b,I));return S.push(f),ge(S)}).catch(d=>Ke(d,8)?d:Promise.reject(d))}function it(b,I,S){s.list().forEach(L=>pe(()=>L(b,I,S)))}function wt(b,I,S,L,K){const te=C(b,I);if(te)return te;const f=I===lt,d=zt?history.state:{};S&&(L||f?i.replace(b.fullPath,re({scroll:f&&d&&d.scroll},K)):i.push(b.fullPath,K)),l.value=b,De(b,I,S,f),at()}let ze;function en(){ze||(ze=i.listen((b,I,S)=>{if(!Nn.listening)return;const L=y(b),K=z(L);if(K){Z(re(K,{replace:!0}),L).catch(gn);return}u=L;const te=l.value;zt&&wm(ho(te.fullPath,S.delta),ym()),Oe(L,te).catch(f=>Ke(f,12)?f:Ke(f,2)?(Z(f.to,L).then(d=>{Ke(d,20)&&!S.delta&&S.type===Pn.pop&&i.go(-1,!1)}).catch(gn),Promise.reject()):(S.delta&&i.go(-S.delta,!1),G(f,L,te))).then(f=>{f=f||wt(L,te,!1),f&&(S.delta&&!Ke(f,8)?i.go(-S.delta,!1):S.type===Pn.pop&&Ke(f,20)&&i.go(-1,!1)),it(L,te,f)}).catch(gn)}))}let Mt=rn(),ce=rn(),X;function G(b,I,S){at(b);const L=ce.list();return L.length?L.forEach(K=>K(b,I,S)):console.error(b),Promise.reject(b)}function Ge(){return X&&l.value!==lt?Promise.resolve():new Promise((b,I)=>{Mt.add([b,I])})}function at(b){return X||(X=!b,en(),Mt.list().forEach(([I,S])=>b?S(b):I()),Mt.reset()),b}function De(b,I,S,L){const{scrollBehavior:K}=e;if(!zt||!K)return Promise.resolve();const te=!S&&_m(ho(b.fullPath,0))||(L||!S)&&history.state&&history.state.scroll||null;return ts().then(()=>K(b,I,te)).then(f=>f&&xm(f)).catch(f=>G(f,b,I))}const xe=b=>i.go(b);let Lt;const jt=new Set,Nn={currentRoute:l,listening:!0,addRoute:g,removeRoute:P,hasRoute:F,getRoutes:N,resolve:y,options:e,push:D,replace:$,go:xe,back:()=>xe(-1),forward:()=>xe(1),beforeEach:a.add,beforeResolve:o.add,afterEach:s.add,onError:ce.add,isReady:Ge,install(b){const I=this;b.component("RouterLink",Ym),b.component("RouterView",qm),b.config.globalProperties.$router=I,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>Pe(l)}),zt&&!Lt&&l.value===lt&&(Lt=!0,D(i.location).catch(K=>{}));const S={};for(const K in lt)Object.defineProperty(S,K,{get:()=>l.value[K],enumerable:!0});b.provide(ra,I),b.provide(hl,Vo(S)),b.provide(wi,l);const L=b.unmount;jt.add(b),b.unmount=function(){jt.delete(b),jt.size<1&&(u=lt,ze&&ze(),ze=null,l.value=lt,Lt=!1,X=!1),L()}}};function ge(b){return b.reduce((I,S)=>I.then(()=>pe(S)),Promise.resolve())}return Nn}function Km(e,t){const n=[],r=[],i=[],a=Math.max(t.matched.length,e.matched.length);for(let o=0;o<a;o++){const s=t.matched[o];s&&(e.matched.find(u=>Kt(u,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(u=>Kt(u,l))||i.push(l))}return[n,r,i]}const Xm={};function Qm(e,t){return Ce(),We("span",null,"Home")}const Zm=Jt(Xm,[["render",Qm]]),Jm={};function eh(e,t){return Ce(),We("span",null,"Leaderboard")}const th=Jt(Jm,[["render",eh]]),nh=[{path:"/",name:"Home",component:Zm},{path:"/leaderboard",name:"Leaderboard",component:th}],rh=Gm({history:Am(),routes:nh});Lf(Gd).use(rh).mount("#app");
