/* empty css               */(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const Me=localStorage.getItem("token");Me&&location.replace("/contacts.html");function B(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var G={},He={get exports(){return G},set exports(e){G=e}};(function(e,t){(function(n){e.exports=n()})(function(){return function n(r,o,s){function i(f,c){if(!o[f]){if(!r[f]){var m=typeof B=="function"&&B;if(!c&&m)return m(f,!0);if(u)return u(f,!0);var b=new Error("Cannot find module '"+f+"'");throw b.code="MODULE_NOT_FOUND",b}var h=o[f]={exports:{}};r[f][0].call(h.exports,function(l){return i(r[f][1][l]||l)},h,h.exports,n,r,o,s)}return o[f].exports}for(var u=typeof B=="function"&&B,d=0;d<s.length;d++)i(s[d]);return i}({1:[function(n,r,o){Object.defineProperty(o,"__esModule",{value:!0}),o.create=o.visible=void 0;var s=function(d){var f=arguments.length>1&&arguments[1]!==void 0&&arguments[1],c=document.createElement("div");return c.innerHTML=d.trim(),f===!0?c.children:c.firstChild},i=function(d,f){var c=d.children;return c.length===1&&c[0].tagName===f},u=function(d){return(d=d||document.querySelector(".basicLightbox"))!=null&&d.ownerDocument.body.contains(d)===!0};o.visible=u,o.create=function(d,f){var c=function(h,l){var p=s(`
		<div class="basicLightbox `.concat(l.className,`">
			<div class="basicLightbox__placeholder" role="dialog"></div>
		</div>
	`)),w=p.querySelector(".basicLightbox__placeholder");h.forEach(function(J){return w.appendChild(J)});var O=i(w,"IMG"),g=i(w,"VIDEO"),N=i(w,"IFRAME");return O===!0&&p.classList.add("basicLightbox--img"),g===!0&&p.classList.add("basicLightbox--video"),N===!0&&p.classList.add("basicLightbox--iframe"),p}(d=function(h){var l=typeof h=="string",p=h instanceof HTMLElement==1;if(l===!1&&p===!1)throw new Error("Content must be a DOM element/node or string");return l===!0?Array.from(s(h,!0)):h.tagName==="TEMPLATE"?[h.content.cloneNode(!0)]:Array.from(h.children)}(d),f=function(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if((h=Object.assign({},h)).closable==null&&(h.closable=!0),h.className==null&&(h.className=""),h.onShow==null&&(h.onShow=function(){}),h.onClose==null&&(h.onClose=function(){}),typeof h.closable!="boolean")throw new Error("Property `closable` must be a boolean");if(typeof h.className!="string")throw new Error("Property `className` must be a string");if(typeof h.onShow!="function")throw new Error("Property `onShow` must be a function");if(typeof h.onClose!="function")throw new Error("Property `onClose` must be a function");return h}(f)),m=function(h){return f.onClose(b)!==!1&&function(l,p){return l.classList.remove("basicLightbox--visible"),setTimeout(function(){return u(l)===!1||l.parentElement.removeChild(l),p()},410),!0}(c,function(){if(typeof h=="function")return h(b)})};f.closable===!0&&c.addEventListener("click",function(h){h.target===c&&m()});var b={element:function(){return c},visible:function(){return u(c)},show:function(h){return f.onShow(b)!==!1&&function(l,p){return document.body.appendChild(l),setTimeout(function(){requestAnimationFrame(function(){return l.classList.add("basicLightbox--visible"),p()})},10),!0}(c,function(){if(typeof h=="function")return h(b)})},close:m};return b}},{}]},{},[1])(1)})})(He);function Ee(e,t){return function(){return e.apply(t,arguments)}}const{toString:ve}=Object.prototype,{getPrototypeOf:te}=Object,I=(e=>t=>{const n=ve.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),A=e=>(e=e.toLowerCase(),t=>I(t)===e),M=e=>t=>typeof t===e,{isArray:C}=Array,_=M("undefined");function ze(e){return e!==null&&!_(e)&&e.constructor!==null&&!_(e.constructor)&&S(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ge=A("ArrayBuffer");function Je(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ge(e.buffer),t}const $e=M("string"),S=M("function"),Se=M("number"),H=e=>e!==null&&typeof e=="object",Ve=e=>e===!0||e===!1,U=e=>{if(I(e)!=="object")return!1;const t=te(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},We=A("Date"),Ke=A("File"),Ge=A("Blob"),Xe=A("FileList"),Qe=e=>H(e)&&S(e.pipe),Ze=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||S(e.append)&&((t=I(e))==="formdata"||t==="object"&&S(e.toString)&&e.toString()==="[object FormData]"))},Ye=A("URLSearchParams"),et=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function F(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),C(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const s=n?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length;let u;for(r=0;r<i;r++)u=s[r],t.call(null,e[u],u,e)}}function Oe(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const Re=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Ae=e=>!_(e)&&e!==Re;function X(){const{caseless:e}=Ae(this)&&this||{},t={},n=(r,o)=>{const s=e&&Oe(t,o)||o;U(t[s])&&U(r)?t[s]=X(t[s],r):U(r)?t[s]=X({},r):C(r)?t[s]=r.slice():t[s]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&F(arguments[r],n);return t}const tt=(e,t,n,{allOwnKeys:r}={})=>(F(t,(o,s)=>{n&&S(o)?e[s]=Ee(o,n):e[s]=o},{allOwnKeys:r}),e),nt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),rt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},ot=(e,t,n,r)=>{let o,s,i;const u={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],(!r||r(i,e,t))&&!u[i]&&(t[i]=e[i],u[i]=!0);e=n!==!1&&te(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},st=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},it=e=>{if(!e)return null;if(C(e))return e;let t=e.length;if(!Se(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},at=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&te(Uint8Array)),ct=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const s=o.value;t.call(e,s[0],s[1])}},ut=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},lt=A("HTMLFormElement"),ft=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),ce=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),dt=A("RegExp"),Te=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};F(n,(o,s)=>{let i;(i=t(o,s,e))!==!1&&(r[s]=i||o)}),Object.defineProperties(e,r)},pt=e=>{Te(e,(t,n)=>{if(S(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(S(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},ht=(e,t)=>{const n={},r=o=>{o.forEach(s=>{n[s]=!0})};return C(e)?r(e):r(String(e).split(t)),n},mt=()=>{},yt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),$="abcdefghijklmnopqrstuvwxyz",ue="0123456789",xe={DIGIT:ue,ALPHA:$,ALPHA_DIGIT:$+$.toUpperCase()+ue},bt=(e=16,t=xe.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function wt(e){return!!(e&&S(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Et=e=>{const t=new Array(10),n=(r,o)=>{if(H(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const s=C(r)?[]:{};return F(r,(i,u)=>{const d=n(i,o+1);!_(d)&&(s[u]=d)}),t[o]=void 0,s}}return r};return n(e,0)},gt=A("AsyncFunction"),St=e=>e&&(H(e)||S(e))&&S(e.then)&&S(e.catch),a={isArray:C,isArrayBuffer:ge,isBuffer:ze,isFormData:Ze,isArrayBufferView:Je,isString:$e,isNumber:Se,isBoolean:Ve,isObject:H,isPlainObject:U,isUndefined:_,isDate:We,isFile:Ke,isBlob:Ge,isRegExp:dt,isFunction:S,isStream:Qe,isURLSearchParams:Ye,isTypedArray:at,isFileList:Xe,forEach:F,merge:X,extend:tt,trim:et,stripBOM:nt,inherits:rt,toFlatObject:ot,kindOf:I,kindOfTest:A,endsWith:st,toArray:it,forEachEntry:ct,matchAll:ut,isHTMLForm:lt,hasOwnProperty:ce,hasOwnProp:ce,reduceDescriptors:Te,freezeMethods:pt,toObjectSet:ht,toCamelCase:ft,noop:mt,toFiniteNumber:yt,findKey:Oe,global:Re,isContextDefined:Ae,ALPHABET:xe,generateString:bt,isSpecCompliantForm:wt,toJSONObject:Et,isAsyncFn:gt,isThenable:St};function y(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}a.inherits(y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ne=y.prototype,Pe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Pe[e]={value:e}});Object.defineProperties(y,Pe);Object.defineProperty(Ne,"isAxiosError",{value:!0});y.from=(e,t,n,r,o,s)=>{const i=Object.create(Ne);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},u=>u!=="isAxiosError"),y.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const Ot=null;function Q(e){return a.isPlainObject(e)||a.isArray(e)}function Ce(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function le(e,t,n){return e?e.concat(t).map(function(o,s){return o=Ce(o),!n&&s?"["+o+"]":o}).join(n?".":""):t}function Rt(e){return a.isArray(e)&&!e.some(Q)}const At=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function v(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(p,w){return!a.isUndefined(w[p])});const r=n.metaTokens,o=n.visitor||c,s=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(o))throw new TypeError("visitor must be a function");function f(l){if(l===null)return"";if(a.isDate(l))return l.toISOString();if(!d&&a.isBlob(l))throw new y("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(l)||a.isTypedArray(l)?d&&typeof Blob=="function"?new Blob([l]):Buffer.from(l):l}function c(l,p,w){let O=l;if(l&&!w&&typeof l=="object"){if(a.endsWith(p,"{}"))p=r?p:p.slice(0,-2),l=JSON.stringify(l);else if(a.isArray(l)&&Rt(l)||(a.isFileList(l)||a.endsWith(p,"[]"))&&(O=a.toArray(l)))return p=Ce(p),O.forEach(function(N,J){!(a.isUndefined(N)||N===null)&&t.append(i===!0?le([p],J,s):i===null?p:p+"[]",f(N))}),!1}return Q(l)?!0:(t.append(le(w,p,s),f(l)),!1)}const m=[],b=Object.assign(At,{defaultVisitor:c,convertValue:f,isVisitable:Q});function h(l,p){if(!a.isUndefined(l)){if(m.indexOf(l)!==-1)throw Error("Circular reference detected in "+p.join("."));m.push(l),a.forEach(l,function(O,g){(!(a.isUndefined(O)||O===null)&&o.call(t,O,a.isString(g)?g.trim():g,p,b))===!0&&h(O,p?p.concat(g):[g])}),m.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return h(e),t}function fe(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ne(e,t){this._pairs=[],e&&v(e,this,t)}const Le=ne.prototype;Le.append=function(t,n){this._pairs.push([t,n])};Le.toString=function(t){const n=t?function(r){return t.call(this,r,fe)}:fe;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function Tt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function _e(e,t,n){if(!t)return e;const r=n&&n.encode||Tt,o=n&&n.serialize;let s;if(o?s=o(t,n):s=a.isURLSearchParams(t)?t.toString():new ne(t,n).toString(r),s){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class xt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const de=xt,Fe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Nt=typeof URLSearchParams<"u"?URLSearchParams:ne,Pt=typeof FormData<"u"?FormData:null,Ct=typeof Blob<"u"?Blob:null,Lt={isBrowser:!0,classes:{URLSearchParams:Nt,FormData:Pt,Blob:Ct},protocols:["http","https","file","blob","url","data"]},De=typeof window<"u"&&typeof document<"u",_t=(e=>De&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),Ft=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Dt=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:De,hasStandardBrowserWebWorkerEnv:Ft,hasStandardBrowserEnv:_t},Symbol.toStringTag,{value:"Module"})),R={...Dt,...Lt};function Bt(e,t){return v(e,new R.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,s){return R.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function Ut(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function jt(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}function Be(e){function t(n,r,o,s){let i=n[s++];const u=Number.isFinite(+i),d=s>=n.length;return i=!i&&a.isArray(o)?o.length:i,d?(a.hasOwnProp(o,i)?o[i]=[o[i],r]:o[i]=r,!u):((!o[i]||!a.isObject(o[i]))&&(o[i]=[]),t(n,r,o[i],s)&&a.isArray(o[i])&&(o[i]=jt(o[i])),!u)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,o)=>{t(Ut(r),o,n,0)}),n}return null}function kt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const re={transitional:Fe,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,s=a.isObject(t);if(s&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return o&&o?JSON.stringify(Be(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Bt(t,this.formSerializer).toString();if((u=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return v(u?{"files[]":t}:t,d&&new d,this.formSerializer)}}return s||o?(n.setContentType("application/json",!1),kt(t)):t}],transformResponse:[function(t){const n=this.transitional||re.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||o)){const i=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(u){if(i)throw u.name==="SyntaxError"?y.from(u,y.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:R.classes.FormData,Blob:R.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{re.headers[e]={}});const oe=re,qt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),It=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(i){o=i.indexOf(":"),n=i.substring(0,o).trim().toLowerCase(),r=i.substring(o+1).trim(),!(!n||t[n]&&qt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},pe=Symbol("internals");function L(e){return e&&String(e).trim().toLowerCase()}function j(e){return e===!1||e==null?e:a.isArray(e)?e.map(j):String(e)}function Mt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Ht=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function V(e,t,n,r,o){if(a.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function vt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function zt(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,s,i){return this[r].call(this,t,o,s,i)},configurable:!0})})}class z{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function s(u,d,f){const c=L(d);if(!c)throw new Error("header name must be a non-empty string");const m=a.findKey(o,c);(!m||o[m]===void 0||f===!0||f===void 0&&o[m]!==!1)&&(o[m||d]=j(u))}const i=(u,d)=>a.forEach(u,(f,c)=>s(f,c,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!Ht(t)?i(It(t),n):t!=null&&s(n,t,r),this}get(t,n){if(t=L(t),t){const r=a.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return Mt(o);if(a.isFunction(n))return n.call(this,o,r);if(a.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=L(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||V(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function s(i){if(i=L(i),i){const u=a.findKey(r,i);u&&(!n||V(r,r[u],u,n))&&(delete r[u],o=!0)}}return a.isArray(t)?t.forEach(s):s(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const s=n[r];(!t||V(this,this[s],s,t,!0))&&(delete this[s],o=!0)}return o}normalize(t){const n=this,r={};return a.forEach(this,(o,s)=>{const i=a.findKey(r,s);if(i){n[i]=j(o),delete n[s];return}const u=t?vt(s):String(s).trim();u!==s&&delete n[s],n[u]=j(o),r[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[pe]=this[pe]={accessors:{}}).accessors,o=this.prototype;function s(i){const u=L(i);r[u]||(zt(o,i),r[u]=!0)}return a.isArray(t)?t.forEach(s):s(t),this}}z.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(z.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(z);const T=z;function W(e,t){const n=this||oe,r=t||n,o=T.from(r.headers);let s=r.data;return a.forEach(e,function(u){s=u.call(n,s,o.normalize(),t?t.status:void 0)}),o.normalize(),s}function Ue(e){return!!(e&&e.__CANCEL__)}function D(e,t,n){y.call(this,e??"canceled",y.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(D,y,{__CANCEL__:!0});function Jt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new y("Request failed with status code "+n.status,[y.ERR_BAD_REQUEST,y.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const $t=R.hasStandardBrowserEnv?function(){return{write:function(n,r,o,s,i,u){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(o)&&d.push("expires="+new Date(o).toGMTString()),a.isString(s)&&d.push("path="+s),a.isString(i)&&d.push("domain="+i),u===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Vt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Wt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function je(e,t){return e&&!Vt(t)?Wt(e,t):t}const Kt=R.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(s){let i=s;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(i){const u=a.isString(i)?o(i):i;return u.protocol===r.protocol&&u.host===r.host}}():function(){return function(){return!0}}();function Gt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Xt(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,s=0,i;return t=t!==void 0?t:1e3,function(d){const f=Date.now(),c=r[s];i||(i=f),n[o]=d,r[o]=f;let m=s,b=0;for(;m!==o;)b+=n[m++],m=m%e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),f-i<t)return;const h=c&&f-c;return h?Math.round(b*1e3/h):void 0}}function he(e,t){let n=0;const r=Xt(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,u=s-n,d=r(u),f=s<=i;n=s;const c={loaded:s,total:i,progress:i?s/i:void 0,bytes:u,rate:d||void 0,estimated:d&&i&&f?(i-s)/d:void 0,event:o};c[t?"download":"upload"]=!0,e(c)}}const Qt=typeof XMLHttpRequest<"u",Zt=Qt&&function(e){return new Promise(function(n,r){let o=e.data;const s=T.from(e.headers).normalize(),i=e.responseType;let u;function d(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}let f;if(a.isFormData(o)){if(R.hasStandardBrowserEnv||R.hasStandardBrowserWebWorkerEnv)s.setContentType(!1);else if((f=s.getContentType())!==!1){const[l,...p]=f?f.split(";").map(w=>w.trim()).filter(Boolean):[];s.setContentType([l||"multipart/form-data",...p].join("; "))}}let c=new XMLHttpRequest;if(e.auth){const l=e.auth.username||"",p=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(l+":"+p))}const m=je(e.baseURL,e.url);c.open(e.method.toUpperCase(),_e(m,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function b(){if(!c)return;const l=T.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),w={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:l,config:e,request:c};Jt(function(g){n(g),d()},function(g){r(g),d()},w),c=null}if("onloadend"in c?c.onloadend=b:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(b)},c.onabort=function(){c&&(r(new y("Request aborted",y.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new y("Network Error",y.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let p=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const w=e.transitional||Fe;e.timeoutErrorMessage&&(p=e.timeoutErrorMessage),r(new y(p,w.clarifyTimeoutError?y.ETIMEDOUT:y.ECONNABORTED,e,c)),c=null},R.hasStandardBrowserEnv){const l=Kt(m)&&e.xsrfCookieName&&$t.read(e.xsrfCookieName);l&&s.set(e.xsrfHeaderName,l)}o===void 0&&s.setContentType(null),"setRequestHeader"in c&&a.forEach(s.toJSON(),function(p,w){c.setRequestHeader(w,p)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",he(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",he(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=l=>{c&&(r(!l||l.type?new D(null,e,c):l),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const h=Gt(m);if(h&&R.protocols.indexOf(h)===-1){r(new y("Unsupported protocol "+h+":",y.ERR_BAD_REQUEST,e));return}c.send(o||null)})},Z={http:Ot,xhr:Zt};a.forEach(Z,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const me=e=>`- ${e}`,Yt=e=>a.isFunction(e)||e===null||e===!1,ke={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let s=0;s<t;s++){n=e[s];let i;if(r=n,!Yt(n)&&(r=Z[(i=String(n)).toLowerCase()],r===void 0))throw new y(`Unknown adapter '${i}'`);if(r)break;o[i||"#"+s]=r}if(!r){const s=Object.entries(o).map(([u,d])=>`adapter ${u} `+(d===!1?"is not supported by the environment":"is not available in the build"));let i=t?s.length>1?`since :
`+s.map(me).join(`
`):" "+me(s[0]):"as no adapter specified";throw new y("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:Z};function K(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new D(null,e)}function ye(e){return K(e),e.headers=T.from(e.headers),e.data=W.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),ke.getAdapter(e.adapter||oe.adapter)(e).then(function(r){return K(e),r.data=W.call(e,e.transformResponse,r),r.headers=T.from(r.headers),r},function(r){return Ue(r)||(K(e),r&&r.response&&(r.response.data=W.call(e,e.transformResponse,r.response),r.response.headers=T.from(r.response.headers))),Promise.reject(r)})}const be=e=>e instanceof T?e.toJSON():e;function P(e,t){t=t||{};const n={};function r(f,c,m){return a.isPlainObject(f)&&a.isPlainObject(c)?a.merge.call({caseless:m},f,c):a.isPlainObject(c)?a.merge({},c):a.isArray(c)?c.slice():c}function o(f,c,m){if(a.isUndefined(c)){if(!a.isUndefined(f))return r(void 0,f,m)}else return r(f,c,m)}function s(f,c){if(!a.isUndefined(c))return r(void 0,c)}function i(f,c){if(a.isUndefined(c)){if(!a.isUndefined(f))return r(void 0,f)}else return r(void 0,c)}function u(f,c,m){if(m in t)return r(f,c);if(m in e)return r(void 0,f)}const d={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:u,headers:(f,c)=>o(be(f),be(c),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(c){const m=d[c]||o,b=m(e[c],t[c],c);a.isUndefined(b)&&m!==u||(n[c]=b)}),n}const qe="1.6.1",se={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{se[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const we={};se.transitional=function(t,n,r){function o(s,i){return"[Axios v"+qe+"] Transitional option '"+s+"'"+i+(r?". "+r:"")}return(s,i,u)=>{if(t===!1)throw new y(o(i," has been removed"+(n?" in "+n:"")),y.ERR_DEPRECATED);return n&&!we[i]&&(we[i]=!0,console.warn(o(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(s,i,u):!0}};function en(e,t,n){if(typeof e!="object")throw new y("options must be an object",y.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const u=e[s],d=u===void 0||i(u,s,e);if(d!==!0)throw new y("option "+s+" must be "+d,y.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new y("Unknown option "+s,y.ERR_BAD_OPTION)}}const Y={assertOptions:en,validators:se},x=Y.validators;class q{constructor(t){this.defaults=t,this.interceptors={request:new de,response:new de}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=P(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:s}=n;r!==void 0&&Y.assertOptions(r,{silentJSONParsing:x.transitional(x.boolean),forcedJSONParsing:x.transitional(x.boolean),clarifyTimeoutError:x.transitional(x.boolean)},!1),o!=null&&(a.isFunction(o)?n.paramsSerializer={serialize:o}:Y.assertOptions(o,{encode:x.function,serialize:x.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=s&&a.merge(s.common,s[n.method]);s&&a.forEach(["delete","get","head","post","put","patch","common"],l=>{delete s[l]}),n.headers=T.concat(i,s);const u=[];let d=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(n)===!1||(d=d&&p.synchronous,u.unshift(p.fulfilled,p.rejected))});const f=[];this.interceptors.response.forEach(function(p){f.push(p.fulfilled,p.rejected)});let c,m=0,b;if(!d){const l=[ye.bind(this),void 0];for(l.unshift.apply(l,u),l.push.apply(l,f),b=l.length,c=Promise.resolve(n);m<b;)c=c.then(l[m++],l[m++]);return c}b=u.length;let h=n;for(m=0;m<b;){const l=u[m++],p=u[m++];try{h=l(h)}catch(w){p.call(this,w);break}}try{c=ye.call(this,h)}catch(l){return Promise.reject(l)}for(m=0,b=f.length;m<b;)c=c.then(f[m++],f[m++]);return c}getUri(t){t=P(this.defaults,t);const n=je(t.baseURL,t.url);return _e(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){q.prototype[t]=function(n,r){return this.request(P(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(s,i,u){return this.request(P(u||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}q.prototype[t]=n(),q.prototype[t+"Form"]=n(!0)});const k=q;class ie{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(o=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](o);r._listeners=null}),this.promise.then=o=>{let s;const i=new Promise(u=>{r.subscribe(u),s=u}).then(o);return i.cancel=function(){r.unsubscribe(s)},i},t(function(s,i,u){r.reason||(r.reason=new D(s,i,u),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ie(function(o){t=o}),cancel:t}}}const tn=ie;function nn(e){return function(n){return e.apply(null,n)}}function rn(e){return a.isObject(e)&&e.isAxiosError===!0}const ee={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ee).forEach(([e,t])=>{ee[t]=e});const on=ee;function Ie(e){const t=new k(e),n=Ee(k.prototype.request,t);return a.extend(n,k.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return Ie(P(e,o))},n}const E=Ie(oe);E.Axios=k;E.CanceledError=D;E.CancelToken=tn;E.isCancel=Ue;E.VERSION=qe;E.toFormData=v;E.AxiosError=y;E.Cancel=E.CanceledError;E.all=function(t){return Promise.all(t)};E.spread=nn;E.isAxiosError=rn;E.mergeConfig=P;E.AxiosHeaders=T;E.formToJSON=e=>Be(a.isHTMLForm(e)?new FormData(e):e);E.getAdapter=ke.getAdapter;E.HttpStatusCode=on;E.default=E;const ae=E;ae.defaults.baseURL="https://connections-api.herokuapp.com/";const sn=localStorage.getItem("token");ae.defaults.headers.common.Authorization=`Bearer ${sn}`;const an=async e=>{try{const{data:t}=await ae.post("/users/signup",e);return t}catch(t){console.log(t.message)}},cn=document.querySelector(".sign-up-btn"),un=G.create(document.querySelector("#register"));cn.addEventListener("click",ln);function ln(){un.show(),document.querySelector(".register-form").addEventListener("submit",fn)}async function fn(e){e.preventDefault();const t=e.currentTarget.elements.name.value.trim(),n=e.currentTarget.elements.email.value.trim(),r=e.currentTarget.elements.password.value.trim();try{const o=await an({name:t,email:n,password:r});localStorage.setItem("token",o.token)}catch{}}