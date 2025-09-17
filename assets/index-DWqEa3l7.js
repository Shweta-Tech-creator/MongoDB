(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(o){if(o.ep)return;o.ep=!0;const u=i(o);fetch(o.href,u)}})();function Ey(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var mf={exports:{}},lr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fg;function rS(){if(Fg)return lr;Fg=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,o,u){var h=null;if(u!==void 0&&(h=""+u),o.key!==void 0&&(h=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:s,type:r,key:h,ref:o!==void 0?o:null,props:u}}return lr.Fragment=t,lr.jsx=i,lr.jsxs=i,lr}var Qg;function lS(){return Qg||(Qg=1,mf.exports=rS()),mf.exports}var C=lS(),pf={exports:{}},ne={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kg;function oS(){if(Kg)return ne;Kg=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),b=Symbol.iterator;function E(S){return S===null||typeof S!="object"?null:(S=b&&S[b]||S["@@iterator"],typeof S=="function"?S:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,Q={};function J(S,k,j){this.props=S,this.context=k,this.refs=Q,this.updater=j||L}J.prototype.isReactComponent={},J.prototype.setState=function(S,k){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,k,"setState")},J.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function Te(){}Te.prototype=J.prototype;function Y(S,k,j){this.props=S,this.context=k,this.refs=Q,this.updater=j||L}var ue=Y.prototype=new Te;ue.constructor=Y,z(ue,J.prototype),ue.isPureReactComponent=!0;var $=Array.isArray,te={H:null,A:null,T:null,S:null,V:null},De=Object.prototype.hasOwnProperty;function He(S,k,j,H,V,he){return j=he.ref,{$$typeof:s,type:S,key:k,ref:j!==void 0?j:null,props:he}}function Ve(S,k){return He(S.type,k,void 0,void 0,void 0,S.props)}function rt(S){return typeof S=="object"&&S!==null&&S.$$typeof===s}function mt(S){var k={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(j){return k[j]})}var tt=/\/+/g;function xe(S,k){return typeof S=="object"&&S!==null&&S.key!=null?mt(""+S.key):k.toString(36)}function lt(){}function ot(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(lt,lt):(S.status="pending",S.then(function(k){S.status==="pending"&&(S.status="fulfilled",S.value=k)},function(k){S.status==="pending"&&(S.status="rejected",S.reason=k)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function Qe(S,k,j,H,V){var he=typeof S;(he==="undefined"||he==="boolean")&&(S=null);var ee=!1;if(S===null)ee=!0;else switch(he){case"bigint":case"string":case"number":ee=!0;break;case"object":switch(S.$$typeof){case s:case t:ee=!0;break;case v:return ee=S._init,Qe(ee(S._payload),k,j,H,V)}}if(ee)return V=V(S),ee=H===""?"."+xe(S,0):H,$(V)?(j="",ee!=null&&(j=ee.replace(tt,"$&/")+"/"),Qe(V,k,j,"",function(Hn){return Hn})):V!=null&&(rt(V)&&(V=Ve(V,j+(V.key==null||S&&S.key===V.key?"":(""+V.key).replace(tt,"$&/")+"/")+ee)),k.push(V)),1;ee=0;var Rt=H===""?".":H+":";if($(S))for(var Ie=0;Ie<S.length;Ie++)H=S[Ie],he=Rt+xe(H,Ie),ee+=Qe(H,k,j,he,V);else if(Ie=E(S),typeof Ie=="function")for(S=Ie.call(S),Ie=0;!(H=S.next()).done;)H=H.value,he=Rt+xe(H,Ie++),ee+=Qe(H,k,j,he,V);else if(he==="object"){if(typeof S.then=="function")return Qe(ot(S),k,j,H,V);throw k=String(S),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.")}return ee}function O(S,k,j){if(S==null)return S;var H=[],V=0;return Qe(S,H,"","",function(he){return k.call(j,he,V++)}),H}function B(S){if(S._status===-1){var k=S._result;k=k(),k.then(function(j){(S._status===0||S._status===-1)&&(S._status=1,S._result=j)},function(j){(S._status===0||S._status===-1)&&(S._status=2,S._result=j)}),S._status===-1&&(S._status=0,S._result=k)}if(S._status===1)return S._result.default;throw S._result}var K=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var k=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(k))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)};function Ce(){}return ne.Children={map:O,forEach:function(S,k,j){O(S,function(){k.apply(this,arguments)},j)},count:function(S){var k=0;return O(S,function(){k++}),k},toArray:function(S){return O(S,function(k){return k})||[]},only:function(S){if(!rt(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},ne.Component=J,ne.Fragment=i,ne.Profiler=o,ne.PureComponent=Y,ne.StrictMode=r,ne.Suspense=g,ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=te,ne.__COMPILER_RUNTIME={__proto__:null,c:function(S){return te.H.useMemoCache(S)}},ne.cache=function(S){return function(){return S.apply(null,arguments)}},ne.cloneElement=function(S,k,j){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var H=z({},S.props),V=S.key,he=void 0;if(k!=null)for(ee in k.ref!==void 0&&(he=void 0),k.key!==void 0&&(V=""+k.key),k)!De.call(k,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&k.ref===void 0||(H[ee]=k[ee]);var ee=arguments.length-2;if(ee===1)H.children=j;else if(1<ee){for(var Rt=Array(ee),Ie=0;Ie<ee;Ie++)Rt[Ie]=arguments[Ie+2];H.children=Rt}return He(S.type,V,void 0,void 0,he,H)},ne.createContext=function(S){return S={$$typeof:h,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:u,_context:S},S},ne.createElement=function(S,k,j){var H,V={},he=null;if(k!=null)for(H in k.key!==void 0&&(he=""+k.key),k)De.call(k,H)&&H!=="key"&&H!=="__self"&&H!=="__source"&&(V[H]=k[H]);var ee=arguments.length-2;if(ee===1)V.children=j;else if(1<ee){for(var Rt=Array(ee),Ie=0;Ie<ee;Ie++)Rt[Ie]=arguments[Ie+2];V.children=Rt}if(S&&S.defaultProps)for(H in ee=S.defaultProps,ee)V[H]===void 0&&(V[H]=ee[H]);return He(S,he,void 0,void 0,null,V)},ne.createRef=function(){return{current:null}},ne.forwardRef=function(S){return{$$typeof:m,render:S}},ne.isValidElement=rt,ne.lazy=function(S){return{$$typeof:v,_payload:{_status:-1,_result:S},_init:B}},ne.memo=function(S,k){return{$$typeof:p,type:S,compare:k===void 0?null:k}},ne.startTransition=function(S){var k=te.T,j={};te.T=j;try{var H=S(),V=te.S;V!==null&&V(j,H),typeof H=="object"&&H!==null&&typeof H.then=="function"&&H.then(Ce,K)}catch(he){K(he)}finally{te.T=k}},ne.unstable_useCacheRefresh=function(){return te.H.useCacheRefresh()},ne.use=function(S){return te.H.use(S)},ne.useActionState=function(S,k,j){return te.H.useActionState(S,k,j)},ne.useCallback=function(S,k){return te.H.useCallback(S,k)},ne.useContext=function(S){return te.H.useContext(S)},ne.useDebugValue=function(){},ne.useDeferredValue=function(S,k){return te.H.useDeferredValue(S,k)},ne.useEffect=function(S,k,j){var H=te.H;if(typeof j=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return H.useEffect(S,k)},ne.useId=function(){return te.H.useId()},ne.useImperativeHandle=function(S,k,j){return te.H.useImperativeHandle(S,k,j)},ne.useInsertionEffect=function(S,k){return te.H.useInsertionEffect(S,k)},ne.useLayoutEffect=function(S,k){return te.H.useLayoutEffect(S,k)},ne.useMemo=function(S,k){return te.H.useMemo(S,k)},ne.useOptimistic=function(S,k){return te.H.useOptimistic(S,k)},ne.useReducer=function(S,k,j){return te.H.useReducer(S,k,j)},ne.useRef=function(S){return te.H.useRef(S)},ne.useState=function(S){return te.H.useState(S)},ne.useSyncExternalStore=function(S,k,j){return te.H.useSyncExternalStore(S,k,j)},ne.useTransition=function(){return te.H.useTransition()},ne.version="19.1.1",ne}var Xg;function sh(){return Xg||(Xg=1,pf.exports=oS()),pf.exports}var pe=sh();const cS=Ey(pe);var gf={exports:{}},or={},_f={exports:{}},yf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wg;function uS(){return Wg||(Wg=1,(function(s){function t(O,B){var K=O.length;O.push(B);e:for(;0<K;){var Ce=K-1>>>1,S=O[Ce];if(0<o(S,B))O[Ce]=B,O[K]=S,K=Ce;else break e}}function i(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var B=O[0],K=O.pop();if(K!==B){O[0]=K;e:for(var Ce=0,S=O.length,k=S>>>1;Ce<k;){var j=2*(Ce+1)-1,H=O[j],V=j+1,he=O[V];if(0>o(H,K))V<S&&0>o(he,H)?(O[Ce]=he,O[V]=K,Ce=V):(O[Ce]=H,O[j]=K,Ce=j);else if(V<S&&0>o(he,K))O[Ce]=he,O[V]=K,Ce=V;else break e}}return B}function o(O,B){var K=O.sortIndex-B.sortIndex;return K!==0?K:O.id-B.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();s.unstable_now=function(){return h.now()-m}}var g=[],p=[],v=1,b=null,E=3,L=!1,z=!1,Q=!1,J=!1,Te=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,ue=typeof setImmediate<"u"?setImmediate:null;function $(O){for(var B=i(p);B!==null;){if(B.callback===null)r(p);else if(B.startTime<=O)r(p),B.sortIndex=B.expirationTime,t(g,B);else break;B=i(p)}}function te(O){if(Q=!1,$(O),!z)if(i(g)!==null)z=!0,De||(De=!0,xe());else{var B=i(p);B!==null&&Qe(te,B.startTime-O)}}var De=!1,He=-1,Ve=5,rt=-1;function mt(){return J?!0:!(s.unstable_now()-rt<Ve)}function tt(){if(J=!1,De){var O=s.unstable_now();rt=O;var B=!0;try{e:{z=!1,Q&&(Q=!1,Y(He),He=-1),L=!0;var K=E;try{t:{for($(O),b=i(g);b!==null&&!(b.expirationTime>O&&mt());){var Ce=b.callback;if(typeof Ce=="function"){b.callback=null,E=b.priorityLevel;var S=Ce(b.expirationTime<=O);if(O=s.unstable_now(),typeof S=="function"){b.callback=S,$(O),B=!0;break t}b===i(g)&&r(g),$(O)}else r(g);b=i(g)}if(b!==null)B=!0;else{var k=i(p);k!==null&&Qe(te,k.startTime-O),B=!1}}break e}finally{b=null,E=K,L=!1}B=void 0}}finally{B?xe():De=!1}}}var xe;if(typeof ue=="function")xe=function(){ue(tt)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,ot=lt.port2;lt.port1.onmessage=tt,xe=function(){ot.postMessage(null)}}else xe=function(){Te(tt,0)};function Qe(O,B){He=Te(function(){O(s.unstable_now())},B)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ve=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return E},s.unstable_next=function(O){switch(E){case 1:case 2:case 3:var B=3;break;default:B=E}var K=E;E=B;try{return O()}finally{E=K}},s.unstable_requestPaint=function(){J=!0},s.unstable_runWithPriority=function(O,B){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var K=E;E=O;try{return B()}finally{E=K}},s.unstable_scheduleCallback=function(O,B,K){var Ce=s.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?Ce+K:Ce):K=Ce,O){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=K+S,O={id:v++,callback:B,priorityLevel:O,startTime:K,expirationTime:S,sortIndex:-1},K>Ce?(O.sortIndex=K,t(p,O),i(g)===null&&O===i(p)&&(Q?(Y(He),He=-1):Q=!0,Qe(te,K-Ce))):(O.sortIndex=S,t(g,O),z||L||(z=!0,De||(De=!0,xe()))),O},s.unstable_shouldYield=mt,s.unstable_wrapCallback=function(O){var B=E;return function(){var K=E;E=B;try{return O.apply(this,arguments)}finally{E=K}}}})(yf)),yf}var Zg;function fS(){return Zg||(Zg=1,_f.exports=uS()),_f.exports}var vf={exports:{}},ft={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jg;function hS(){if(Jg)return ft;Jg=1;var s=sh();function t(g){var p="https://react.dev/errors/"+g;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+g+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(g,p,v){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:b==null?null:""+b,children:g,containerInfo:p,implementation:v}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,p){if(g==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return ft.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,ft.createPortal=function(g,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(g,p,null,v)},ft.flushSync=function(g){var p=h.T,v=r.p;try{if(h.T=null,r.p=2,g)return g()}finally{h.T=p,r.p=v,r.d.f()}},ft.preconnect=function(g,p){typeof g=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(g,p))},ft.prefetchDNS=function(g){typeof g=="string"&&r.d.D(g)},ft.preinit=function(g,p){if(typeof g=="string"&&p&&typeof p.as=="string"){var v=p.as,b=m(v,p.crossOrigin),E=typeof p.integrity=="string"?p.integrity:void 0,L=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?r.d.S(g,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:b,integrity:E,fetchPriority:L}):v==="script"&&r.d.X(g,{crossOrigin:b,integrity:E,fetchPriority:L,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},ft.preinitModule=function(g,p){if(typeof g=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=m(p.as,p.crossOrigin);r.d.M(g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(g)},ft.preload=function(g,p){if(typeof g=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,b=m(v,p.crossOrigin);r.d.L(g,v,{crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},ft.preloadModule=function(g,p){if(typeof g=="string")if(p){var v=m(p.as,p.crossOrigin);r.d.m(g,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(g)},ft.requestFormReset=function(g){r.d.r(g)},ft.unstable_batchedUpdates=function(g,p){return g(p)},ft.useFormState=function(g,p,v){return h.H.useFormState(g,p,v)},ft.useFormStatus=function(){return h.H.useHostTransitionStatus()},ft.version="19.1.1",ft}var $g;function dS(){if($g)return vf.exports;$g=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),vf.exports=hS(),vf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e_;function mS(){if(e_)return or;e_=1;var s=fS(),t=sh(),i=dS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(r(188))}function g(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,l=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(l=c.return,l!==null){a=l;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),e;if(f===l)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==l.return)a=c,l=f;else{for(var d=!1,_=c.child;_;){if(_===a){d=!0,a=c,l=f;break}if(_===l){d=!0,l=c,a=f;break}_=_.sibling}if(!d){for(_=f.child;_;){if(_===a){d=!0,a=f,l=c;break}if(_===l){d=!0,l=f,a=c;break}_=_.sibling}if(!d)throw Error(r(189))}}if(a.alternate!==l)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,b=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),L=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),J=Symbol.for("react.profiler"),Te=Symbol.for("react.provider"),Y=Symbol.for("react.consumer"),ue=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),De=Symbol.for("react.suspense_list"),He=Symbol.for("react.memo"),Ve=Symbol.for("react.lazy"),rt=Symbol.for("react.activity"),mt=Symbol.for("react.memo_cache_sentinel"),tt=Symbol.iterator;function xe(e){return e===null||typeof e!="object"?null:(e=tt&&e[tt]||e["@@iterator"],typeof e=="function"?e:null)}var lt=Symbol.for("react.client.reference");function ot(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===lt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case z:return"Fragment";case J:return"Profiler";case Q:return"StrictMode";case te:return"Suspense";case De:return"SuspenseList";case rt:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case L:return"Portal";case ue:return(e.displayName||"Context")+".Provider";case Y:return(e._context.displayName||"Context")+".Consumer";case $:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case He:return n=e.displayName||null,n!==null?n:ot(e.type)||"Memo";case Ve:n=e._payload,e=e._init;try{return ot(e(n))}catch{}}return null}var Qe=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},Ce=[],S=-1;function k(e){return{current:e}}function j(e){0>S||(e.current=Ce[S],Ce[S]=null,S--)}function H(e,n){S++,Ce[S]=e.current,e.current=n}var V=k(null),he=k(null),ee=k(null),Rt=k(null);function Ie(e,n){switch(H(ee,n),H(he,e),H(V,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Eg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Eg(n),e=bg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}j(V),H(V,e)}function Hn(){j(V),j(he),j(ee)}function Jo(e){e.memoizedState!==null&&H(Rt,e);var n=V.current,a=bg(n,e.type);n!==a&&(H(he,e),H(V,a))}function Vr(e){he.current===e&&(j(V),j(he)),Rt.current===e&&(j(Rt),nr._currentValue=K)}var $o=Object.prototype.hasOwnProperty,ec=s.unstable_scheduleCallback,tc=s.unstable_cancelCallback,H0=s.unstable_shouldYield,B0=s.unstable_requestPaint,sn=s.unstable_now,j0=s.unstable_getCurrentPriorityLevel,ed=s.unstable_ImmediatePriority,td=s.unstable_UserBlockingPriority,Gr=s.unstable_NormalPriority,P0=s.unstable_LowPriority,nd=s.unstable_IdlePriority,q0=s.log,V0=s.unstable_setDisableYieldValue,ua=null,Nt=null;function Bn(e){if(typeof q0=="function"&&V0(e),Nt&&typeof Nt.setStrictMode=="function")try{Nt.setStrictMode(ua,e)}catch{}}var xt=Math.clz32?Math.clz32:F0,G0=Math.log,Y0=Math.LN2;function F0(e){return e>>>=0,e===0?32:31-(G0(e)/Y0|0)|0}var Yr=256,Fr=4194304;function wi(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Qr(e,n,a){var l=e.pendingLanes;if(l===0)return 0;var c=0,f=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var _=l&134217727;return _!==0?(l=_&~f,l!==0?c=wi(l):(d&=_,d!==0?c=wi(d):a||(a=_&~e,a!==0&&(c=wi(a))))):(_=l&~f,_!==0?c=wi(_):d!==0?c=wi(d):a||(a=l&~e,a!==0&&(c=wi(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function fa(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Q0(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function id(){var e=Yr;return Yr<<=1,(Yr&4194048)===0&&(Yr=256),e}function sd(){var e=Fr;return Fr<<=1,(Fr&62914560)===0&&(Fr=4194304),e}function nc(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function ha(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function K0(e,n,a,l,c,f){var d=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var _=e.entanglements,y=e.expirationTimes,R=e.hiddenUpdates;for(a=d&~a;0<a;){var D=31-xt(a),M=1<<D;_[D]=0,y[D]=-1;var N=R[D];if(N!==null)for(R[D]=null,D=0;D<N.length;D++){var x=N[D];x!==null&&(x.lane&=-536870913)}a&=~M}l!==0&&ad(e,l,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(d&~n))}function ad(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var l=31-xt(n);e.entangledLanes|=n,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function rd(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var l=31-xt(a),c=1<<l;c&n|e[l]&n&&(e[l]|=n),a&=~c}}function ic(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function sc(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ld(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:jg(e.type))}function X0(e,n){var a=B.p;try{return B.p=e,n()}finally{B.p=a}}var jn=Math.random().toString(36).slice(2),ct="__reactFiber$"+jn,yt="__reactProps$"+jn,is="__reactContainer$"+jn,ac="__reactEvents$"+jn,W0="__reactListeners$"+jn,Z0="__reactHandles$"+jn,od="__reactResources$"+jn,da="__reactMarker$"+jn;function rc(e){delete e[ct],delete e[yt],delete e[ac],delete e[W0],delete e[Z0]}function ss(e){var n=e[ct];if(n)return n;for(var a=e.parentNode;a;){if(n=a[is]||a[ct]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=wg(e);e!==null;){if(a=e[ct])return a;e=wg(e)}return n}e=a,a=e.parentNode}return null}function as(e){if(e=e[ct]||e[is]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function ma(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function rs(e){var n=e[od];return n||(n=e[od]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ke(e){e[da]=!0}var cd=new Set,ud={};function Ai(e,n){ls(e,n),ls(e+"Capture",n)}function ls(e,n){for(ud[e]=n,e=0;e<n.length;e++)cd.add(n[e])}var J0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),fd={},hd={};function $0(e){return $o.call(hd,e)?!0:$o.call(fd,e)?!1:J0.test(e)?hd[e]=!0:(fd[e]=!0,!1)}function Kr(e,n,a){if($0(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Xr(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function hn(e,n,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+l)}}var lc,dd;function os(e){if(lc===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);lc=n&&n[1]||"",dd=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+lc+e+dd}var oc=!1;function cc(e,n){if(!e||oc)return"";oc=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var M=function(){throw Error()};if(Object.defineProperty(M.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(M,[])}catch(x){var N=x}Reflect.construct(e,[],M)}else{try{M.call()}catch(x){N=x}e.call(M.prototype)}}else{try{throw Error()}catch(x){N=x}(M=e())&&typeof M.catch=="function"&&M.catch(function(){})}}catch(x){if(x&&N&&typeof x.stack=="string")return[x.stack,N.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=l.DetermineComponentFrameRoot(),d=f[0],_=f[1];if(d&&_){var y=d.split(`
`),R=_.split(`
`);for(c=l=0;l<y.length&&!y[l].includes("DetermineComponentFrameRoot");)l++;for(;c<R.length&&!R[c].includes("DetermineComponentFrameRoot");)c++;if(l===y.length||c===R.length)for(l=y.length-1,c=R.length-1;1<=l&&0<=c&&y[l]!==R[c];)c--;for(;1<=l&&0<=c;l--,c--)if(y[l]!==R[c]){if(l!==1||c!==1)do if(l--,c--,0>c||y[l]!==R[c]){var D=`
`+y[l].replace(" at new "," at ");return e.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",e.displayName)),D}while(1<=l&&0<=c);break}}}finally{oc=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?os(a):""}function eE(e){switch(e.tag){case 26:case 27:case 5:return os(e.type);case 16:return os("Lazy");case 13:return os("Suspense");case 19:return os("SuspenseList");case 0:case 15:return cc(e.type,!1);case 11:return cc(e.type.render,!1);case 1:return cc(e.type,!0);case 31:return os("Activity");default:return""}}function md(e){try{var n="";do n+=eE(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function zt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pd(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function tE(e){var n=pd(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),l=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(d){l=""+d,f.call(this,d)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(d){l=""+d},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Wr(e){e._valueTracker||(e._valueTracker=tE(e))}function gd(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),l="";return e&&(l=pd(e)?e.checked?"true":"false":e.value),e=l,e!==a?(n.setValue(e),!0):!1}function Zr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var nE=/[\n"\\]/g;function Ht(e){return e.replace(nE,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function uc(e,n,a,l,c,f,d,_){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),n!=null?d==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+zt(n)):e.value!==""+zt(n)&&(e.value=""+zt(n)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),n!=null?fc(e,d,zt(n)):a!=null?fc(e,d,zt(a)):l!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.name=""+zt(_):e.removeAttribute("name")}function _d(e,n,a,l,c,f,d,_){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+zt(a):"",n=n!=null?""+zt(n):a,_||n===e.value||(e.value=n),e.defaultValue=n}l=l??c,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=_?e.checked:!!l,e.defaultChecked=!!l,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d)}function fc(e,n,a){n==="number"&&Zr(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function cs(e,n,a,l){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&l&&(e[a].defaultSelected=!0)}else{for(a=""+zt(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,l&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function yd(e,n,a){if(n!=null&&(n=""+zt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+zt(a):""}function vd(e,n,a,l){if(n==null){if(l!=null){if(a!=null)throw Error(r(92));if(Qe(l)){if(1<l.length)throw Error(r(93));l=l[0]}a=l}a==null&&(a=""),n=a}a=zt(n),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function us(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var iE=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ed(e,n,a){var l=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":l?e.setProperty(n,a):typeof a!="number"||a===0||iE.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function bd(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var c in n)l=n[c],n.hasOwnProperty(c)&&a[c]!==l&&Ed(e,c,l)}else for(var f in n)n.hasOwnProperty(f)&&Ed(e,f,n[f])}function hc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sE=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),aE=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Jr(e){return aE.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var dc=null;function mc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fs=null,hs=null;function Sd(e){var n=as(e);if(n&&(e=n.stateNode)){var a=e[yt]||null;e:switch(e=n.stateNode,n.type){case"input":if(uc(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ht(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var l=a[n];if(l!==e&&l.form===e.form){var c=l[yt]||null;if(!c)throw Error(r(90));uc(l,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)l=a[n],l.form===e.form&&gd(l)}break e;case"textarea":yd(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&cs(e,!!a.multiple,n,!1)}}}var pc=!1;function Td(e,n,a){if(pc)return e(n,a);pc=!0;try{var l=e(n);return l}finally{if(pc=!1,(fs!==null||hs!==null)&&(zl(),fs&&(n=fs,e=hs,hs=fs=null,Sd(n),e)))for(n=0;n<e.length;n++)Sd(e[n])}}function pa(e,n){var a=e.stateNode;if(a===null)return null;var l=a[yt]||null;if(l===null)return null;a=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gc=!1;if(dn)try{var ga={};Object.defineProperty(ga,"passive",{get:function(){gc=!0}}),window.addEventListener("test",ga,ga),window.removeEventListener("test",ga,ga)}catch{gc=!1}var Pn=null,_c=null,$r=null;function Cd(){if($r)return $r;var e,n=_c,a=n.length,l,c="value"in Pn?Pn.value:Pn.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var d=a-e;for(l=1;l<=d&&n[a-l]===c[f-l];l++);return $r=c.slice(e,1<l?1-l:void 0)}function el(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function tl(){return!0}function wd(){return!1}function vt(e){function n(a,l,c,f,d){this._reactName=a,this._targetInst=c,this.type=l,this.nativeEvent=f,this.target=d,this.currentTarget=null;for(var _ in e)e.hasOwnProperty(_)&&(a=e[_],this[_]=a?a(f):f[_]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?tl:wd,this.isPropagationStopped=wd,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),n}var Ri={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nl=vt(Ri),_a=v({},Ri,{view:0,detail:0}),rE=vt(_a),yc,vc,ya,il=v({},_a,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ya&&(ya&&e.type==="mousemove"?(yc=e.screenX-ya.screenX,vc=e.screenY-ya.screenY):vc=yc=0,ya=e),yc)},movementY:function(e){return"movementY"in e?e.movementY:vc}}),Ad=vt(il),lE=v({},il,{dataTransfer:0}),oE=vt(lE),cE=v({},_a,{relatedTarget:0}),Ec=vt(cE),uE=v({},Ri,{animationName:0,elapsedTime:0,pseudoElement:0}),fE=vt(uE),hE=v({},Ri,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dE=vt(hE),mE=v({},Ri,{data:0}),Rd=vt(mE),pE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_E={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yE(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=_E[e])?!!n[e]:!1}function bc(){return yE}var vE=v({},_a,{key:function(e){if(e.key){var n=pE[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=el(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bc,charCode:function(e){return e.type==="keypress"?el(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?el(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),EE=vt(vE),bE=v({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nd=vt(bE),SE=v({},_a,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bc}),TE=vt(SE),CE=v({},Ri,{propertyName:0,elapsedTime:0,pseudoElement:0}),wE=vt(CE),AE=v({},il,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),RE=vt(AE),NE=v({},Ri,{newState:0,oldState:0}),xE=vt(NE),OE=[9,13,27,32],Sc=dn&&"CompositionEvent"in window,va=null;dn&&"documentMode"in document&&(va=document.documentMode);var DE=dn&&"TextEvent"in window&&!va,xd=dn&&(!Sc||va&&8<va&&11>=va),Od=" ",Dd=!1;function Id(e,n){switch(e){case"keyup":return OE.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Md(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ds=!1;function IE(e,n){switch(e){case"compositionend":return Md(n);case"keypress":return n.which!==32?null:(Dd=!0,Od);case"textInput":return e=n.data,e===Od&&Dd?null:e;default:return null}}function ME(e,n){if(ds)return e==="compositionend"||!Sc&&Id(e,n)?(e=Cd(),$r=_c=Pn=null,ds=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return xd&&n.locale!=="ko"?null:n.data;default:return null}}var kE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!kE[e.type]:n==="textarea"}function Ld(e,n,a,l){fs?hs?hs.push(l):hs=[l]:fs=l,n=Vl(n,"onChange"),0<n.length&&(a=new nl("onChange","change",null,a,l),e.push({event:a,listeners:n}))}var Ea=null,ba=null;function LE(e){pg(e,0)}function sl(e){var n=ma(e);if(gd(n))return e}function Ud(e,n){if(e==="change")return n}var zd=!1;if(dn){var Tc;if(dn){var Cc="oninput"in document;if(!Cc){var Hd=document.createElement("div");Hd.setAttribute("oninput","return;"),Cc=typeof Hd.oninput=="function"}Tc=Cc}else Tc=!1;zd=Tc&&(!document.documentMode||9<document.documentMode)}function Bd(){Ea&&(Ea.detachEvent("onpropertychange",jd),ba=Ea=null)}function jd(e){if(e.propertyName==="value"&&sl(ba)){var n=[];Ld(n,ba,e,mc(e)),Td(LE,n)}}function UE(e,n,a){e==="focusin"?(Bd(),Ea=n,ba=a,Ea.attachEvent("onpropertychange",jd)):e==="focusout"&&Bd()}function zE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return sl(ba)}function HE(e,n){if(e==="click")return sl(n)}function BE(e,n){if(e==="input"||e==="change")return sl(n)}function jE(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ot=typeof Object.is=="function"?Object.is:jE;function Sa(e,n){if(Ot(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),l=Object.keys(n);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var c=a[l];if(!$o.call(n,c)||!Ot(e[c],n[c]))return!1}return!0}function Pd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qd(e,n){var a=Pd(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=n&&l>=n)return{node:a,offset:n-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Pd(a)}}function Vd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Vd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Gd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Zr(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Zr(e.document)}return n}function wc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var PE=dn&&"documentMode"in document&&11>=document.documentMode,ms=null,Ac=null,Ta=null,Rc=!1;function Yd(e,n,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Rc||ms==null||ms!==Zr(l)||(l=ms,"selectionStart"in l&&wc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ta&&Sa(Ta,l)||(Ta=l,l=Vl(Ac,"onSelect"),0<l.length&&(n=new nl("onSelect","select",null,n,a),e.push({event:n,listeners:l}),n.target=ms)))}function Ni(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var ps={animationend:Ni("Animation","AnimationEnd"),animationiteration:Ni("Animation","AnimationIteration"),animationstart:Ni("Animation","AnimationStart"),transitionrun:Ni("Transition","TransitionRun"),transitionstart:Ni("Transition","TransitionStart"),transitioncancel:Ni("Transition","TransitionCancel"),transitionend:Ni("Transition","TransitionEnd")},Nc={},Fd={};dn&&(Fd=document.createElement("div").style,"AnimationEvent"in window||(delete ps.animationend.animation,delete ps.animationiteration.animation,delete ps.animationstart.animation),"TransitionEvent"in window||delete ps.transitionend.transition);function xi(e){if(Nc[e])return Nc[e];if(!ps[e])return e;var n=ps[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Fd)return Nc[e]=n[a];return e}var Qd=xi("animationend"),Kd=xi("animationiteration"),Xd=xi("animationstart"),qE=xi("transitionrun"),VE=xi("transitionstart"),GE=xi("transitioncancel"),Wd=xi("transitionend"),Zd=new Map,xc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xc.push("scrollEnd");function Kt(e,n){Zd.set(e,n),Ai(n,[e])}var Jd=new WeakMap;function Bt(e,n){if(typeof e=="object"&&e!==null){var a=Jd.get(e);return a!==void 0?a:(n={value:e,source:n,stack:md(n)},Jd.set(e,n),n)}return{value:e,source:n,stack:md(n)}}var jt=[],gs=0,Oc=0;function al(){for(var e=gs,n=Oc=gs=0;n<e;){var a=jt[n];jt[n++]=null;var l=jt[n];jt[n++]=null;var c=jt[n];jt[n++]=null;var f=jt[n];if(jt[n++]=null,l!==null&&c!==null){var d=l.pending;d===null?c.next=c:(c.next=d.next,d.next=c),l.pending=c}f!==0&&$d(a,c,f)}}function rl(e,n,a,l){jt[gs++]=e,jt[gs++]=n,jt[gs++]=a,jt[gs++]=l,Oc|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Dc(e,n,a,l){return rl(e,n,a,l),ll(e)}function _s(e,n){return rl(e,null,null,n),ll(e)}function $d(e,n,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,l=f.alternate,l!==null&&(l.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-xt(a),e=f.hiddenUpdates,l=e[c],l===null?e[c]=[n]:l.push(n),n.lane=a|536870912),f):null}function ll(e){if(50<Ka)throw Ka=0,zu=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ys={};function YE(e,n,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(e,n,a,l){return new YE(e,n,a,l)}function Ic(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mn(e,n){var a=e.alternate;return a===null?(a=Dt(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function em(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ol(e,n,a,l,c,f){var d=0;if(l=e,typeof e=="function")Ic(e)&&(d=1);else if(typeof e=="string")d=Qb(e,a,V.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case rt:return e=Dt(31,a,n,c),e.elementType=rt,e.lanes=f,e;case z:return Oi(a.children,c,f,n);case Q:d=8,c|=24;break;case J:return e=Dt(12,a,n,c|2),e.elementType=J,e.lanes=f,e;case te:return e=Dt(13,a,n,c),e.elementType=te,e.lanes=f,e;case De:return e=Dt(19,a,n,c),e.elementType=De,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Te:case ue:d=10;break e;case Y:d=9;break e;case $:d=11;break e;case He:d=14;break e;case Ve:d=16,l=null;break e}d=29,a=Error(r(130,e===null?"null":typeof e,"")),l=null}return n=Dt(d,a,n,c),n.elementType=e,n.type=l,n.lanes=f,n}function Oi(e,n,a,l){return e=Dt(7,e,l,n),e.lanes=a,e}function Mc(e,n,a){return e=Dt(6,e,null,n),e.lanes=a,e}function kc(e,n,a){return n=Dt(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var vs=[],Es=0,cl=null,ul=0,Pt=[],qt=0,Di=null,pn=1,gn="";function Ii(e,n){vs[Es++]=ul,vs[Es++]=cl,cl=e,ul=n}function tm(e,n,a){Pt[qt++]=pn,Pt[qt++]=gn,Pt[qt++]=Di,Di=e;var l=pn;e=gn;var c=32-xt(l)-1;l&=~(1<<c),a+=1;var f=32-xt(n)+c;if(30<f){var d=c-c%5;f=(l&(1<<d)-1).toString(32),l>>=d,c-=d,pn=1<<32-xt(n)+c|a<<c|l,gn=f+e}else pn=1<<f|a<<c|l,gn=e}function Lc(e){e.return!==null&&(Ii(e,1),tm(e,1,0))}function Uc(e){for(;e===cl;)cl=vs[--Es],vs[Es]=null,ul=vs[--Es],vs[Es]=null;for(;e===Di;)Di=Pt[--qt],Pt[qt]=null,gn=Pt[--qt],Pt[qt]=null,pn=Pt[--qt],Pt[qt]=null}var pt=null,Le=null,me=!1,Mi=null,an=!1,zc=Error(r(519));function ki(e){var n=Error(r(418,""));throw Aa(Bt(n,e)),zc}function nm(e){var n=e.stateNode,a=e.type,l=e.memoizedProps;switch(n[ct]=e,n[yt]=l,a){case"dialog":oe("cancel",n),oe("close",n);break;case"iframe":case"object":case"embed":oe("load",n);break;case"video":case"audio":for(a=0;a<Wa.length;a++)oe(Wa[a],n);break;case"source":oe("error",n);break;case"img":case"image":case"link":oe("error",n),oe("load",n);break;case"details":oe("toggle",n);break;case"input":oe("invalid",n),_d(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Wr(n);break;case"select":oe("invalid",n);break;case"textarea":oe("invalid",n),vd(n,l.value,l.defaultValue,l.children),Wr(n)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||l.suppressHydrationWarning===!0||vg(n.textContent,a)?(l.popover!=null&&(oe("beforetoggle",n),oe("toggle",n)),l.onScroll!=null&&oe("scroll",n),l.onScrollEnd!=null&&oe("scrollend",n),l.onClick!=null&&(n.onclick=Gl),n=!0):n=!1,n||ki(e)}function im(e){for(pt=e.return;pt;)switch(pt.tag){case 5:case 13:an=!1;return;case 27:case 3:an=!0;return;default:pt=pt.return}}function Ca(e){if(e!==pt)return!1;if(!me)return im(e),me=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||$u(e.type,e.memoizedProps)),a=!a),a&&Le&&ki(e),im(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Le=Wt(e.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Le=null}}else n===27?(n=Le,ii(e.type)?(e=sf,sf=null,Le=e):Le=n):Le=pt?Wt(e.stateNode.nextSibling):null;return!0}function wa(){Le=pt=null,me=!1}function sm(){var e=Mi;return e!==null&&(St===null?St=e:St.push.apply(St,e),Mi=null),e}function Aa(e){Mi===null?Mi=[e]:Mi.push(e)}var Hc=k(null),Li=null,_n=null;function qn(e,n,a){H(Hc,n._currentValue),n._currentValue=a}function yn(e){e._currentValue=Hc.current,j(Hc)}function Bc(e,n,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===a)break;e=e.return}}function jc(e,n,a,l){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var d=c.child;f=f.firstContext;e:for(;f!==null;){var _=f;f=c;for(var y=0;y<n.length;y++)if(_.context===n[y]){f.lanes|=a,_=f.alternate,_!==null&&(_.lanes|=a),Bc(f.return,a,e),l||(d=null);break e}f=_.next}}else if(c.tag===18){if(d=c.return,d===null)throw Error(r(341));d.lanes|=a,f=d.alternate,f!==null&&(f.lanes|=a),Bc(d,a,e),d=null}else d=c.child;if(d!==null)d.return=c;else for(d=c;d!==null;){if(d===e){d=null;break}if(c=d.sibling,c!==null){c.return=d.return,d=c;break}d=d.return}c=d}}function Ra(e,n,a,l){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var d=c.alternate;if(d===null)throw Error(r(387));if(d=d.memoizedProps,d!==null){var _=c.type;Ot(c.pendingProps.value,d.value)||(e!==null?e.push(_):e=[_])}}else if(c===Rt.current){if(d=c.alternate,d===null)throw Error(r(387));d.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(nr):e=[nr])}c=c.return}e!==null&&jc(n,e,a,l),n.flags|=262144}function fl(e){for(e=e.firstContext;e!==null;){if(!Ot(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ui(e){Li=e,_n=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ut(e){return am(Li,e)}function hl(e,n){return Li===null&&Ui(e),am(e,n)}function am(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},_n===null){if(e===null)throw Error(r(308));_n=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else _n=_n.next=n;return a}var FE=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},QE=s.unstable_scheduleCallback,KE=s.unstable_NormalPriority,Ge={$$typeof:ue,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Pc(){return{controller:new FE,data:new Map,refCount:0}}function Na(e){e.refCount--,e.refCount===0&&QE(KE,function(){e.controller.abort()})}var xa=null,qc=0,bs=0,Ss=null;function XE(e,n){if(xa===null){var a=xa=[];qc=0,bs=Gu(),Ss={status:"pending",value:void 0,then:function(l){a.push(l)}}}return qc++,n.then(rm,rm),n}function rm(){if(--qc===0&&xa!==null){Ss!==null&&(Ss.status="fulfilled");var e=xa;xa=null,bs=0,Ss=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function WE(e,n){var a=[],l={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){l.status="fulfilled",l.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(l.status="rejected",l.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),l}var lm=O.S;O.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&XE(e,n),lm!==null&&lm(e,n)};var zi=k(null);function Vc(){var e=zi.current;return e!==null?e:Re.pooledCache}function dl(e,n){n===null?H(zi,zi.current):H(zi,n.pool)}function om(){var e=Vc();return e===null?null:{parent:Ge._currentValue,pool:e}}var Oa=Error(r(460)),cm=Error(r(474)),ml=Error(r(542)),Gc={then:function(){}};function um(e){return e=e.status,e==="fulfilled"||e==="rejected"}function pl(){}function fm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(pl,pl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,dm(e),e;default:if(typeof n.status=="string")n.then(pl,pl);else{if(e=Re,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(l){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=l}},function(l){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,dm(e),e}throw Da=n,Oa}}var Da=null;function hm(){if(Da===null)throw Error(r(459));var e=Da;return Da=null,e}function dm(e){if(e===Oa||e===ml)throw Error(r(483))}var Vn=!1;function Yc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Fc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Gn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Yn(e,n,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(_e&2)!==0){var c=l.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),l.pending=n,n=ll(e),$d(e,null,a),n}return rl(e,l,n,a),ll(e)}function Ia(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var l=n.lanes;l&=e.pendingLanes,a|=l,n.lanes=a,rd(e,a)}}function Qc(e,n){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var d={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=d:f=f.next=d,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Kc=!1;function Ma(){if(Kc){var e=Ss;if(e!==null)throw e}}function ka(e,n,a,l){Kc=!1;var c=e.updateQueue;Vn=!1;var f=c.firstBaseUpdate,d=c.lastBaseUpdate,_=c.shared.pending;if(_!==null){c.shared.pending=null;var y=_,R=y.next;y.next=null,d===null?f=R:d.next=R,d=y;var D=e.alternate;D!==null&&(D=D.updateQueue,_=D.lastBaseUpdate,_!==d&&(_===null?D.firstBaseUpdate=R:_.next=R,D.lastBaseUpdate=y))}if(f!==null){var M=c.baseState;d=0,D=R=y=null,_=f;do{var N=_.lane&-536870913,x=N!==_.lane;if(x?(fe&N)===N:(l&N)===N){N!==0&&N===bs&&(Kc=!0),D!==null&&(D=D.next={lane:0,tag:_.tag,payload:_.payload,callback:null,next:null});e:{var W=e,G=_;N=n;var be=a;switch(G.tag){case 1:if(W=G.payload,typeof W=="function"){M=W.call(be,M,N);break e}M=W;break e;case 3:W.flags=W.flags&-65537|128;case 0:if(W=G.payload,N=typeof W=="function"?W.call(be,M,N):W,N==null)break e;M=v({},M,N);break e;case 2:Vn=!0}}N=_.callback,N!==null&&(e.flags|=64,x&&(e.flags|=8192),x=c.callbacks,x===null?c.callbacks=[N]:x.push(N))}else x={lane:N,tag:_.tag,payload:_.payload,callback:_.callback,next:null},D===null?(R=D=x,y=M):D=D.next=x,d|=N;if(_=_.next,_===null){if(_=c.shared.pending,_===null)break;x=_,_=x.next,x.next=null,c.lastBaseUpdate=x,c.shared.pending=null}}while(!0);D===null&&(y=M),c.baseState=y,c.firstBaseUpdate=R,c.lastBaseUpdate=D,f===null&&(c.shared.lanes=0),$n|=d,e.lanes=d,e.memoizedState=M}}function mm(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function pm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)mm(a[e],n)}var Ts=k(null),gl=k(0);function gm(e,n){e=wn,H(gl,e),H(Ts,n),wn=e|n.baseLanes}function Xc(){H(gl,wn),H(Ts,Ts.current)}function Wc(){wn=gl.current,j(Ts),j(gl)}var Fn=0,ie=null,ve=null,Pe=null,_l=!1,Cs=!1,Hi=!1,yl=0,La=0,ws=null,ZE=0;function Be(){throw Error(r(321))}function Zc(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Ot(e[a],n[a]))return!1;return!0}function Jc(e,n,a,l,c,f){return Fn=f,ie=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?$m:ep,Hi=!1,f=a(l,c),Hi=!1,Cs&&(f=ym(n,a,l,c)),_m(e),f}function _m(e){O.H=Cl;var n=ve!==null&&ve.next!==null;if(Fn=0,Pe=ve=ie=null,_l=!1,La=0,ws=null,n)throw Error(r(300));e===null||Xe||(e=e.dependencies,e!==null&&fl(e)&&(Xe=!0))}function ym(e,n,a,l){ie=e;var c=0;do{if(Cs&&(ws=null),La=0,Cs=!1,25<=c)throw Error(r(301));if(c+=1,Pe=ve=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=sb,f=n(a,l)}while(Cs);return f}function JE(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?Ua(n):n,e=e.useState()[0],(ve!==null?ve.memoizedState:null)!==e&&(ie.flags|=1024),n}function $c(){var e=yl!==0;return yl=0,e}function eu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function tu(e){if(_l){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}_l=!1}Fn=0,Pe=ve=ie=null,Cs=!1,La=yl=0,ws=null}function Et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?ie.memoizedState=Pe=e:Pe=Pe.next=e,Pe}function qe(){if(ve===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var n=Pe===null?ie.memoizedState:Pe.next;if(n!==null)Pe=n,ve=e;else{if(e===null)throw ie.alternate===null?Error(r(467)):Error(r(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},Pe===null?ie.memoizedState=Pe=e:Pe=Pe.next=e}return Pe}function nu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ua(e){var n=La;return La+=1,ws===null&&(ws=[]),e=fm(ws,e,n),n=ie,(Pe===null?n.memoizedState:Pe.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?$m:ep),e}function vl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ua(e);if(e.$$typeof===ue)return ut(e)}throw Error(r(438,String(e)))}function iu(e){var n=null,a=ie.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var l=ie.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=nu(),ie.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),l=0;l<e;l++)a[l]=mt;return n.index++,a}function vn(e,n){return typeof n=="function"?n(e):n}function El(e){var n=qe();return su(n,ve,e)}function su(e,n,a){var l=e.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=a;var c=e.baseQueue,f=l.pending;if(f!==null){if(c!==null){var d=c.next;c.next=f.next,f.next=d}n.baseQueue=c=f,l.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var _=d=null,y=null,R=n,D=!1;do{var M=R.lane&-536870913;if(M!==R.lane?(fe&M)===M:(Fn&M)===M){var N=R.revertLane;if(N===0)y!==null&&(y=y.next={lane:0,revertLane:0,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),M===bs&&(D=!0);else if((Fn&N)===N){R=R.next,N===bs&&(D=!0);continue}else M={lane:0,revertLane:R.revertLane,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},y===null?(_=y=M,d=f):y=y.next=M,ie.lanes|=N,$n|=N;M=R.action,Hi&&a(f,M),f=R.hasEagerState?R.eagerState:a(f,M)}else N={lane:M,revertLane:R.revertLane,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},y===null?(_=y=N,d=f):y=y.next=N,ie.lanes|=M,$n|=M;R=R.next}while(R!==null&&R!==n);if(y===null?d=f:y.next=_,!Ot(f,e.memoizedState)&&(Xe=!0,D&&(a=Ss,a!==null)))throw a;e.memoizedState=f,e.baseState=d,e.baseQueue=y,l.lastRenderedState=f}return c===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function au(e){var n=qe(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var l=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var d=c=c.next;do f=e(f,d.action),d=d.next;while(d!==c);Ot(f,n.memoizedState)||(Xe=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,l]}function vm(e,n,a){var l=ie,c=qe(),f=me;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var d=!Ot((ve||c).memoizedState,a);d&&(c.memoizedState=a,Xe=!0),c=c.queue;var _=Sm.bind(null,l,c,e);if(za(2048,8,_,[e]),c.getSnapshot!==n||d||Pe!==null&&Pe.memoizedState.tag&1){if(l.flags|=2048,As(9,bl(),bm.bind(null,l,c,a,n),null),Re===null)throw Error(r(349));f||(Fn&124)!==0||Em(l,n,a)}return a}function Em(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ie.updateQueue,n===null?(n=nu(),ie.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function bm(e,n,a,l){n.value=a,n.getSnapshot=l,Tm(n)&&Cm(e)}function Sm(e,n,a){return a(function(){Tm(n)&&Cm(e)})}function Tm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Ot(e,a)}catch{return!0}}function Cm(e){var n=_s(e,2);n!==null&&Ut(n,e,2)}function ru(e){var n=Et();if(typeof e=="function"){var a=e;if(e=a(),Hi){Bn(!0);try{a()}finally{Bn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vn,lastRenderedState:e},n}function wm(e,n,a,l){return e.baseState=a,su(e,ve,typeof l=="function"?l:vn)}function $E(e,n,a,l,c){if(Tl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){f.listeners.push(d)}};O.T!==null?a(!0):f.isTransition=!1,l(f),a=n.pending,a===null?(f.next=n.pending=f,Am(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Am(e,n){var a=n.action,l=n.payload,c=e.state;if(n.isTransition){var f=O.T,d={};O.T=d;try{var _=a(c,l),y=O.S;y!==null&&y(d,_),Rm(e,n,_)}catch(R){lu(e,n,R)}finally{O.T=f}}else try{f=a(c,l),Rm(e,n,f)}catch(R){lu(e,n,R)}}function Rm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Nm(e,n,l)},function(l){return lu(e,n,l)}):Nm(e,n,a)}function Nm(e,n,a){n.status="fulfilled",n.value=a,xm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Am(e,a)))}function lu(e,n,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=a,xm(n),n=n.next;while(n!==l)}e.action=null}function xm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Om(e,n){return n}function Dm(e,n){if(me){var a=Re.formState;if(a!==null){e:{var l=ie;if(me){if(Le){t:{for(var c=Le,f=an;c.nodeType!==8;){if(!f){c=null;break t}if(c=Wt(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Le=Wt(c.nextSibling),l=c.data==="F!";break e}}ki(l)}l=!1}l&&(n=a[0])}}return a=Et(),a.memoizedState=a.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Om,lastRenderedState:n},a.queue=l,a=Wm.bind(null,ie,l),l.dispatch=a,l=ru(!1),f=hu.bind(null,ie,!1,l.queue),l=Et(),c={state:n,dispatch:null,action:e,pending:null},l.queue=c,a=$E.bind(null,ie,c,f,a),c.dispatch=a,l.memoizedState=e,[n,a,!1]}function Im(e){var n=qe();return Mm(n,ve,e)}function Mm(e,n,a){if(n=su(e,n,Om)[0],e=El(vn)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=Ua(n)}catch(d){throw d===Oa?ml:d}else l=n;n=qe();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ie.flags|=2048,As(9,bl(),eb.bind(null,c,a),null)),[l,f,e]}function eb(e,n){e.action=n}function km(e){var n=qe(),a=ve;if(a!==null)return Mm(n,a,e);qe(),n=n.memoizedState,a=qe();var l=a.queue.dispatch;return a.memoizedState=e,[n,l,!1]}function As(e,n,a,l){return e={tag:e,create:a,deps:l,inst:n,next:null},n=ie.updateQueue,n===null&&(n=nu(),ie.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,n.lastEffect=e),e}function bl(){return{destroy:void 0,resource:void 0}}function Lm(){return qe().memoizedState}function Sl(e,n,a,l){var c=Et();l=l===void 0?null:l,ie.flags|=e,c.memoizedState=As(1|n,bl(),a,l)}function za(e,n,a,l){var c=qe();l=l===void 0?null:l;var f=c.memoizedState.inst;ve!==null&&l!==null&&Zc(l,ve.memoizedState.deps)?c.memoizedState=As(n,f,a,l):(ie.flags|=e,c.memoizedState=As(1|n,f,a,l))}function Um(e,n){Sl(8390656,8,e,n)}function zm(e,n){za(2048,8,e,n)}function Hm(e,n){return za(4,2,e,n)}function Bm(e,n){return za(4,4,e,n)}function jm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Pm(e,n,a){a=a!=null?a.concat([e]):null,za(4,4,jm.bind(null,n,e),a)}function ou(){}function qm(e,n){var a=qe();n=n===void 0?null:n;var l=a.memoizedState;return n!==null&&Zc(n,l[1])?l[0]:(a.memoizedState=[e,n],e)}function Vm(e,n){var a=qe();n=n===void 0?null:n;var l=a.memoizedState;if(n!==null&&Zc(n,l[1]))return l[0];if(l=e(),Hi){Bn(!0);try{e()}finally{Bn(!1)}}return a.memoizedState=[l,n],l}function cu(e,n,a){return a===void 0||(Fn&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=Fp(),ie.lanes|=e,$n|=e,a)}function Gm(e,n,a,l){return Ot(a,n)?a:Ts.current!==null?(e=cu(e,a,l),Ot(e,n)||(Xe=!0),e):(Fn&42)===0?(Xe=!0,e.memoizedState=a):(e=Fp(),ie.lanes|=e,$n|=e,n)}function Ym(e,n,a,l,c){var f=B.p;B.p=f!==0&&8>f?f:8;var d=O.T,_={};O.T=_,hu(e,!1,n,a);try{var y=c(),R=O.S;if(R!==null&&R(_,y),y!==null&&typeof y=="object"&&typeof y.then=="function"){var D=WE(y,l);Ha(e,n,D,Lt(e))}else Ha(e,n,l,Lt(e))}catch(M){Ha(e,n,{then:function(){},status:"rejected",reason:M},Lt())}finally{B.p=f,O.T=d}}function tb(){}function uu(e,n,a,l){if(e.tag!==5)throw Error(r(476));var c=Fm(e).queue;Ym(e,c,n,K,a===null?tb:function(){return Qm(e),a(l)})}function Fm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:vn,lastRenderedState:K},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:vn,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Qm(e){var n=Fm(e).next.queue;Ha(e,n,{},Lt())}function fu(){return ut(nr)}function Km(){return qe().memoizedState}function Xm(){return qe().memoizedState}function nb(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Lt();e=Gn(a);var l=Yn(n,e,a);l!==null&&(Ut(l,n,a),Ia(l,n,a)),n={cache:Pc()},e.payload=n;return}n=n.return}}function ib(e,n,a){var l=Lt();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Tl(e)?Zm(n,a):(a=Dc(e,n,a,l),a!==null&&(Ut(a,e,l),Jm(a,n,l)))}function Wm(e,n,a){var l=Lt();Ha(e,n,a,l)}function Ha(e,n,a,l){var c={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Tl(e))Zm(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var d=n.lastRenderedState,_=f(d,a);if(c.hasEagerState=!0,c.eagerState=_,Ot(_,d))return rl(e,n,c,0),Re===null&&al(),!1}catch{}finally{}if(a=Dc(e,n,c,l),a!==null)return Ut(a,e,l),Jm(a,n,l),!0}return!1}function hu(e,n,a,l){if(l={lane:2,revertLane:Gu(),action:l,hasEagerState:!1,eagerState:null,next:null},Tl(e)){if(n)throw Error(r(479))}else n=Dc(e,a,l,2),n!==null&&Ut(n,e,2)}function Tl(e){var n=e.alternate;return e===ie||n!==null&&n===ie}function Zm(e,n){Cs=_l=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Jm(e,n,a){if((a&4194048)!==0){var l=n.lanes;l&=e.pendingLanes,a|=l,n.lanes=a,rd(e,a)}}var Cl={readContext:ut,use:vl,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useLayoutEffect:Be,useInsertionEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useSyncExternalStore:Be,useId:Be,useHostTransitionStatus:Be,useFormState:Be,useActionState:Be,useOptimistic:Be,useMemoCache:Be,useCacheRefresh:Be},$m={readContext:ut,use:vl,useCallback:function(e,n){return Et().memoizedState=[e,n===void 0?null:n],e},useContext:ut,useEffect:Um,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Sl(4194308,4,jm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Sl(4194308,4,e,n)},useInsertionEffect:function(e,n){Sl(4,2,e,n)},useMemo:function(e,n){var a=Et();n=n===void 0?null:n;var l=e();if(Hi){Bn(!0);try{e()}finally{Bn(!1)}}return a.memoizedState=[l,n],l},useReducer:function(e,n,a){var l=Et();if(a!==void 0){var c=a(n);if(Hi){Bn(!0);try{a(n)}finally{Bn(!1)}}}else c=n;return l.memoizedState=l.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},l.queue=e,e=e.dispatch=ib.bind(null,ie,e),[l.memoizedState,e]},useRef:function(e){var n=Et();return e={current:e},n.memoizedState=e},useState:function(e){e=ru(e);var n=e.queue,a=Wm.bind(null,ie,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:ou,useDeferredValue:function(e,n){var a=Et();return cu(a,e,n)},useTransition:function(){var e=ru(!1);return e=Ym.bind(null,ie,e.queue,!0,!1),Et().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var l=ie,c=Et();if(me){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Re===null)throw Error(r(349));(fe&124)!==0||Em(l,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Um(Sm.bind(null,l,f,e),[e]),l.flags|=2048,As(9,bl(),bm.bind(null,l,f,a,n),null),a},useId:function(){var e=Et(),n=Re.identifierPrefix;if(me){var a=gn,l=pn;a=(l&~(1<<32-xt(l)-1)).toString(32)+a,n="«"+n+"R"+a,a=yl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=ZE++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:fu,useFormState:Dm,useActionState:Dm,useOptimistic:function(e){var n=Et();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=hu.bind(null,ie,!0,a),a.dispatch=n,[e,n]},useMemoCache:iu,useCacheRefresh:function(){return Et().memoizedState=nb.bind(null,ie)}},ep={readContext:ut,use:vl,useCallback:qm,useContext:ut,useEffect:zm,useImperativeHandle:Pm,useInsertionEffect:Hm,useLayoutEffect:Bm,useMemo:Vm,useReducer:El,useRef:Lm,useState:function(){return El(vn)},useDebugValue:ou,useDeferredValue:function(e,n){var a=qe();return Gm(a,ve.memoizedState,e,n)},useTransition:function(){var e=El(vn)[0],n=qe().memoizedState;return[typeof e=="boolean"?e:Ua(e),n]},useSyncExternalStore:vm,useId:Km,useHostTransitionStatus:fu,useFormState:Im,useActionState:Im,useOptimistic:function(e,n){var a=qe();return wm(a,ve,e,n)},useMemoCache:iu,useCacheRefresh:Xm},sb={readContext:ut,use:vl,useCallback:qm,useContext:ut,useEffect:zm,useImperativeHandle:Pm,useInsertionEffect:Hm,useLayoutEffect:Bm,useMemo:Vm,useReducer:au,useRef:Lm,useState:function(){return au(vn)},useDebugValue:ou,useDeferredValue:function(e,n){var a=qe();return ve===null?cu(a,e,n):Gm(a,ve.memoizedState,e,n)},useTransition:function(){var e=au(vn)[0],n=qe().memoizedState;return[typeof e=="boolean"?e:Ua(e),n]},useSyncExternalStore:vm,useId:Km,useHostTransitionStatus:fu,useFormState:km,useActionState:km,useOptimistic:function(e,n){var a=qe();return ve!==null?wm(a,ve,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:iu,useCacheRefresh:Xm},Rs=null,Ba=0;function wl(e){var n=Ba;return Ba+=1,Rs===null&&(Rs=[]),fm(Rs,e,n)}function ja(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Al(e,n){throw n.$$typeof===b?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function tp(e){var n=e._init;return n(e._payload)}function np(e){function n(w,T){if(e){var A=w.deletions;A===null?(w.deletions=[T],w.flags|=16):A.push(T)}}function a(w,T){if(!e)return null;for(;T!==null;)n(w,T),T=T.sibling;return null}function l(w){for(var T=new Map;w!==null;)w.key!==null?T.set(w.key,w):T.set(w.index,w),w=w.sibling;return T}function c(w,T){return w=mn(w,T),w.index=0,w.sibling=null,w}function f(w,T,A){return w.index=A,e?(A=w.alternate,A!==null?(A=A.index,A<T?(w.flags|=67108866,T):A):(w.flags|=67108866,T)):(w.flags|=1048576,T)}function d(w){return e&&w.alternate===null&&(w.flags|=67108866),w}function _(w,T,A,I){return T===null||T.tag!==6?(T=Mc(A,w.mode,I),T.return=w,T):(T=c(T,A),T.return=w,T)}function y(w,T,A,I){var P=A.type;return P===z?D(w,T,A.props.children,I,A.key):T!==null&&(T.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ve&&tp(P)===T.type)?(T=c(T,A.props),ja(T,A),T.return=w,T):(T=ol(A.type,A.key,A.props,null,w.mode,I),ja(T,A),T.return=w,T)}function R(w,T,A,I){return T===null||T.tag!==4||T.stateNode.containerInfo!==A.containerInfo||T.stateNode.implementation!==A.implementation?(T=kc(A,w.mode,I),T.return=w,T):(T=c(T,A.children||[]),T.return=w,T)}function D(w,T,A,I,P){return T===null||T.tag!==7?(T=Oi(A,w.mode,I,P),T.return=w,T):(T=c(T,A),T.return=w,T)}function M(w,T,A){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=Mc(""+T,w.mode,A),T.return=w,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case E:return A=ol(T.type,T.key,T.props,null,w.mode,A),ja(A,T),A.return=w,A;case L:return T=kc(T,w.mode,A),T.return=w,T;case Ve:var I=T._init;return T=I(T._payload),M(w,T,A)}if(Qe(T)||xe(T))return T=Oi(T,w.mode,A,null),T.return=w,T;if(typeof T.then=="function")return M(w,wl(T),A);if(T.$$typeof===ue)return M(w,hl(w,T),A);Al(w,T)}return null}function N(w,T,A,I){var P=T!==null?T.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return P!==null?null:_(w,T,""+A,I);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case E:return A.key===P?y(w,T,A,I):null;case L:return A.key===P?R(w,T,A,I):null;case Ve:return P=A._init,A=P(A._payload),N(w,T,A,I)}if(Qe(A)||xe(A))return P!==null?null:D(w,T,A,I,null);if(typeof A.then=="function")return N(w,T,wl(A),I);if(A.$$typeof===ue)return N(w,T,hl(w,A),I);Al(w,A)}return null}function x(w,T,A,I,P){if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return w=w.get(A)||null,_(T,w,""+I,P);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case E:return w=w.get(I.key===null?A:I.key)||null,y(T,w,I,P);case L:return w=w.get(I.key===null?A:I.key)||null,R(T,w,I,P);case Ve:var se=I._init;return I=se(I._payload),x(w,T,A,I,P)}if(Qe(I)||xe(I))return w=w.get(A)||null,D(T,w,I,P,null);if(typeof I.then=="function")return x(w,T,A,wl(I),P);if(I.$$typeof===ue)return x(w,T,A,hl(T,I),P);Al(T,I)}return null}function W(w,T,A,I){for(var P=null,se=null,q=T,F=T=0,Ze=null;q!==null&&F<A.length;F++){q.index>F?(Ze=q,q=null):Ze=q.sibling;var de=N(w,q,A[F],I);if(de===null){q===null&&(q=Ze);break}e&&q&&de.alternate===null&&n(w,q),T=f(de,T,F),se===null?P=de:se.sibling=de,se=de,q=Ze}if(F===A.length)return a(w,q),me&&Ii(w,F),P;if(q===null){for(;F<A.length;F++)q=M(w,A[F],I),q!==null&&(T=f(q,T,F),se===null?P=q:se.sibling=q,se=q);return me&&Ii(w,F),P}for(q=l(q);F<A.length;F++)Ze=x(q,w,F,A[F],I),Ze!==null&&(e&&Ze.alternate!==null&&q.delete(Ze.key===null?F:Ze.key),T=f(Ze,T,F),se===null?P=Ze:se.sibling=Ze,se=Ze);return e&&q.forEach(function(oi){return n(w,oi)}),me&&Ii(w,F),P}function G(w,T,A,I){if(A==null)throw Error(r(151));for(var P=null,se=null,q=T,F=T=0,Ze=null,de=A.next();q!==null&&!de.done;F++,de=A.next()){q.index>F?(Ze=q,q=null):Ze=q.sibling;var oi=N(w,q,de.value,I);if(oi===null){q===null&&(q=Ze);break}e&&q&&oi.alternate===null&&n(w,q),T=f(oi,T,F),se===null?P=oi:se.sibling=oi,se=oi,q=Ze}if(de.done)return a(w,q),me&&Ii(w,F),P;if(q===null){for(;!de.done;F++,de=A.next())de=M(w,de.value,I),de!==null&&(T=f(de,T,F),se===null?P=de:se.sibling=de,se=de);return me&&Ii(w,F),P}for(q=l(q);!de.done;F++,de=A.next())de=x(q,w,F,de.value,I),de!==null&&(e&&de.alternate!==null&&q.delete(de.key===null?F:de.key),T=f(de,T,F),se===null?P=de:se.sibling=de,se=de);return e&&q.forEach(function(aS){return n(w,aS)}),me&&Ii(w,F),P}function be(w,T,A,I){if(typeof A=="object"&&A!==null&&A.type===z&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case E:e:{for(var P=A.key;T!==null;){if(T.key===P){if(P=A.type,P===z){if(T.tag===7){a(w,T.sibling),I=c(T,A.props.children),I.return=w,w=I;break e}}else if(T.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ve&&tp(P)===T.type){a(w,T.sibling),I=c(T,A.props),ja(I,A),I.return=w,w=I;break e}a(w,T);break}else n(w,T);T=T.sibling}A.type===z?(I=Oi(A.props.children,w.mode,I,A.key),I.return=w,w=I):(I=ol(A.type,A.key,A.props,null,w.mode,I),ja(I,A),I.return=w,w=I)}return d(w);case L:e:{for(P=A.key;T!==null;){if(T.key===P)if(T.tag===4&&T.stateNode.containerInfo===A.containerInfo&&T.stateNode.implementation===A.implementation){a(w,T.sibling),I=c(T,A.children||[]),I.return=w,w=I;break e}else{a(w,T);break}else n(w,T);T=T.sibling}I=kc(A,w.mode,I),I.return=w,w=I}return d(w);case Ve:return P=A._init,A=P(A._payload),be(w,T,A,I)}if(Qe(A))return W(w,T,A,I);if(xe(A)){if(P=xe(A),typeof P!="function")throw Error(r(150));return A=P.call(A),G(w,T,A,I)}if(typeof A.then=="function")return be(w,T,wl(A),I);if(A.$$typeof===ue)return be(w,T,hl(w,A),I);Al(w,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,T!==null&&T.tag===6?(a(w,T.sibling),I=c(T,A),I.return=w,w=I):(a(w,T),I=Mc(A,w.mode,I),I.return=w,w=I),d(w)):a(w,T)}return function(w,T,A,I){try{Ba=0;var P=be(w,T,A,I);return Rs=null,P}catch(q){if(q===Oa||q===ml)throw q;var se=Dt(29,q,null,w.mode);return se.lanes=I,se.return=w,se}finally{}}}var Ns=np(!0),ip=np(!1),Vt=k(null),rn=null;function Qn(e){var n=e.alternate;H(Ye,Ye.current&1),H(Vt,e),rn===null&&(n===null||Ts.current!==null||n.memoizedState!==null)&&(rn=e)}function sp(e){if(e.tag===22){if(H(Ye,Ye.current),H(Vt,e),rn===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(rn=e)}}else Kn()}function Kn(){H(Ye,Ye.current),H(Vt,Vt.current)}function En(e){j(Vt),rn===e&&(rn=null),j(Ye)}var Ye=k(0);function Rl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||nf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function du(e,n,a,l){n=e.memoizedState,a=a(l,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var mu={enqueueSetState:function(e,n,a){e=e._reactInternals;var l=Lt(),c=Gn(l);c.payload=n,a!=null&&(c.callback=a),n=Yn(e,c,l),n!==null&&(Ut(n,e,l),Ia(n,e,l))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var l=Lt(),c=Gn(l);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Yn(e,c,l),n!==null&&(Ut(n,e,l),Ia(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Lt(),l=Gn(a);l.tag=2,n!=null&&(l.callback=n),n=Yn(e,l,a),n!==null&&(Ut(n,e,a),Ia(n,e,a))}};function ap(e,n,a,l,c,f,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,f,d):n.prototype&&n.prototype.isPureReactComponent?!Sa(a,l)||!Sa(c,f):!0}function rp(e,n,a,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,l),n.state!==e&&mu.enqueueReplaceState(n,n.state,null)}function Bi(e,n){var a=n;if("ref"in n){a={};for(var l in n)l!=="ref"&&(a[l]=n[l])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var Nl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function lp(e){Nl(e)}function op(e){console.error(e)}function cp(e){Nl(e)}function xl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function up(e,n,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function pu(e,n,a){return a=Gn(a),a.tag=3,a.payload={element:null},a.callback=function(){xl(e,n)},a}function fp(e){return e=Gn(e),e.tag=3,e}function hp(e,n,a,l){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=l.value;e.payload=function(){return c(f)},e.callback=function(){up(n,a,l)}}var d=a.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){up(n,a,l),typeof c!="function"&&(ei===null?ei=new Set([this]):ei.add(this));var _=l.stack;this.componentDidCatch(l.value,{componentStack:_!==null?_:""})})}function ab(e,n,a,l,c){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=a.alternate,n!==null&&Ra(n,a,c,!0),a=Vt.current,a!==null){switch(a.tag){case 13:return rn===null?Bu():a.alternate===null&&Ue===0&&(Ue=3),a.flags&=-257,a.flags|=65536,a.lanes=c,l===Gc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([l]):n.add(l),Pu(e,l,c)),!1;case 22:return a.flags|=65536,l===Gc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([l]):a.add(l)),Pu(e,l,c)),!1}throw Error(r(435,a.tag))}return Pu(e,l,c),Bu(),!1}if(me)return n=Vt.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,l!==zc&&(e=Error(r(422),{cause:l}),Aa(Bt(e,a)))):(l!==zc&&(n=Error(r(423),{cause:l}),Aa(Bt(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,l=Bt(l,a),c=pu(e.stateNode,l,c),Qc(e,c),Ue!==4&&(Ue=2)),!1;var f=Error(r(520),{cause:l});if(f=Bt(f,a),Qa===null?Qa=[f]:Qa.push(f),Ue!==4&&(Ue=2),n===null)return!0;l=Bt(l,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=pu(a.stateNode,l,e),Qc(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ei===null||!ei.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=fp(c),hp(c,e,a,l),Qc(a,c),!1}a=a.return}while(a!==null);return!1}var dp=Error(r(461)),Xe=!1;function nt(e,n,a,l){n.child=e===null?ip(n,null,a,l):Ns(n,e.child,a,l)}function mp(e,n,a,l,c){a=a.render;var f=n.ref;if("ref"in l){var d={};for(var _ in l)_!=="ref"&&(d[_]=l[_])}else d=l;return Ui(n),l=Jc(e,n,a,d,f,c),_=$c(),e!==null&&!Xe?(eu(e,n,c),bn(e,n,c)):(me&&_&&Lc(n),n.flags|=1,nt(e,n,l,c),n.child)}function pp(e,n,a,l,c){if(e===null){var f=a.type;return typeof f=="function"&&!Ic(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,gp(e,n,f,l,c)):(e=ol(a.type,null,l,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Tu(e,c)){var d=f.memoizedProps;if(a=a.compare,a=a!==null?a:Sa,a(d,l)&&e.ref===n.ref)return bn(e,n,c)}return n.flags|=1,e=mn(f,l),e.ref=n.ref,e.return=n,n.child=e}function gp(e,n,a,l,c){if(e!==null){var f=e.memoizedProps;if(Sa(f,l)&&e.ref===n.ref)if(Xe=!1,n.pendingProps=l=f,Tu(e,c))(e.flags&131072)!==0&&(Xe=!0);else return n.lanes=e.lanes,bn(e,n,c)}return gu(e,n,a,l,c)}function _p(e,n,a){var l=n.pendingProps,c=l.children,f=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((n.flags&128)!==0){if(l=f!==null?f.baseLanes|a:a,e!==null){for(c=n.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~l}else n.childLanes=0,n.child=null;return yp(e,n,l,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&dl(n,f!==null?f.cachePool:null),f!==null?gm(n,f):Xc(),sp(n);else return n.lanes=n.childLanes=536870912,yp(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(dl(n,f.cachePool),gm(n,f),Kn(),n.memoizedState=null):(e!==null&&dl(n,null),Xc(),Kn());return nt(e,n,c,a),n.child}function yp(e,n,a,l){var c=Vc();return c=c===null?null:{parent:Ge._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&dl(n,null),Xc(),sp(n),e!==null&&Ra(e,n,l,!0),null}function Ol(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function gu(e,n,a,l,c){return Ui(n),a=Jc(e,n,a,l,void 0,c),l=$c(),e!==null&&!Xe?(eu(e,n,c),bn(e,n,c)):(me&&l&&Lc(n),n.flags|=1,nt(e,n,a,c),n.child)}function vp(e,n,a,l,c,f){return Ui(n),n.updateQueue=null,a=ym(n,l,a,c),_m(e),l=$c(),e!==null&&!Xe?(eu(e,n,f),bn(e,n,f)):(me&&l&&Lc(n),n.flags|=1,nt(e,n,a,f),n.child)}function Ep(e,n,a,l,c){if(Ui(n),n.stateNode===null){var f=ys,d=a.contextType;typeof d=="object"&&d!==null&&(f=ut(d)),f=new a(l,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=mu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=l,f.state=n.memoizedState,f.refs={},Yc(n),d=a.contextType,f.context=typeof d=="object"&&d!==null?ut(d):ys,f.state=n.memoizedState,d=a.getDerivedStateFromProps,typeof d=="function"&&(du(n,a,d,l),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(d=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),d!==f.state&&mu.enqueueReplaceState(f,f.state,null),ka(n,l,f,c),Ma(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(e===null){f=n.stateNode;var _=n.memoizedProps,y=Bi(a,_);f.props=y;var R=f.context,D=a.contextType;d=ys,typeof D=="object"&&D!==null&&(d=ut(D));var M=a.getDerivedStateFromProps;D=typeof M=="function"||typeof f.getSnapshotBeforeUpdate=="function",_=n.pendingProps!==_,D||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_||R!==d)&&rp(n,f,l,d),Vn=!1;var N=n.memoizedState;f.state=N,ka(n,l,f,c),Ma(),R=n.memoizedState,_||N!==R||Vn?(typeof M=="function"&&(du(n,a,M,l),R=n.memoizedState),(y=Vn||ap(n,a,y,l,N,R,d))?(D||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=R),f.props=l,f.state=R,f.context=d,l=y):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{f=n.stateNode,Fc(e,n),d=n.memoizedProps,D=Bi(a,d),f.props=D,M=n.pendingProps,N=f.context,R=a.contextType,y=ys,typeof R=="object"&&R!==null&&(y=ut(R)),_=a.getDerivedStateFromProps,(R=typeof _=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(d!==M||N!==y)&&rp(n,f,l,y),Vn=!1,N=n.memoizedState,f.state=N,ka(n,l,f,c),Ma();var x=n.memoizedState;d!==M||N!==x||Vn||e!==null&&e.dependencies!==null&&fl(e.dependencies)?(typeof _=="function"&&(du(n,a,_,l),x=n.memoizedState),(D=Vn||ap(n,a,D,l,N,x,y)||e!==null&&e.dependencies!==null&&fl(e.dependencies))?(R||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(l,x,y),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(l,x,y)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||d===e.memoizedProps&&N===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&N===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=x),f.props=l,f.state=x,f.context=y,l=D):(typeof f.componentDidUpdate!="function"||d===e.memoizedProps&&N===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&N===e.memoizedState||(n.flags|=1024),l=!1)}return f=l,Ol(e,n),l=(n.flags&128)!==0,f||l?(f=n.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&l?(n.child=Ns(n,e.child,null,c),n.child=Ns(n,null,a,c)):nt(e,n,a,c),n.memoizedState=f.state,e=n.child):e=bn(e,n,c),e}function bp(e,n,a,l){return wa(),n.flags|=256,nt(e,n,a,l),n.child}var _u={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function yu(e){return{baseLanes:e,cachePool:om()}}function vu(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Gt),e}function Sp(e,n,a){var l=n.pendingProps,c=!1,f=(n.flags&128)!==0,d;if((d=f)||(d=e!==null&&e.memoizedState===null?!1:(Ye.current&2)!==0),d&&(c=!0,n.flags&=-129),d=(n.flags&32)!==0,n.flags&=-33,e===null){if(me){if(c?Qn(n):Kn(),me){var _=Le,y;if(y=_){e:{for(y=_,_=an;y.nodeType!==8;){if(!_){_=null;break e}if(y=Wt(y.nextSibling),y===null){_=null;break e}}_=y}_!==null?(n.memoizedState={dehydrated:_,treeContext:Di!==null?{id:pn,overflow:gn}:null,retryLane:536870912,hydrationErrors:null},y=Dt(18,null,null,0),y.stateNode=_,y.return=n,n.child=y,pt=n,Le=null,y=!0):y=!1}y||ki(n)}if(_=n.memoizedState,_!==null&&(_=_.dehydrated,_!==null))return nf(_)?n.lanes=32:n.lanes=536870912,null;En(n)}return _=l.children,l=l.fallback,c?(Kn(),c=n.mode,_=Dl({mode:"hidden",children:_},c),l=Oi(l,c,a,null),_.return=n,l.return=n,_.sibling=l,n.child=_,c=n.child,c.memoizedState=yu(a),c.childLanes=vu(e,d,a),n.memoizedState=_u,l):(Qn(n),Eu(n,_))}if(y=e.memoizedState,y!==null&&(_=y.dehydrated,_!==null)){if(f)n.flags&256?(Qn(n),n.flags&=-257,n=bu(e,n,a)):n.memoizedState!==null?(Kn(),n.child=e.child,n.flags|=128,n=null):(Kn(),c=l.fallback,_=n.mode,l=Dl({mode:"visible",children:l.children},_),c=Oi(c,_,a,null),c.flags|=2,l.return=n,c.return=n,l.sibling=c,n.child=l,Ns(n,e.child,null,a),l=n.child,l.memoizedState=yu(a),l.childLanes=vu(e,d,a),n.memoizedState=_u,n=c);else if(Qn(n),nf(_)){if(d=_.nextSibling&&_.nextSibling.dataset,d)var R=d.dgst;d=R,l=Error(r(419)),l.stack="",l.digest=d,Aa({value:l,source:null,stack:null}),n=bu(e,n,a)}else if(Xe||Ra(e,n,a,!1),d=(a&e.childLanes)!==0,Xe||d){if(d=Re,d!==null&&(l=a&-a,l=(l&42)!==0?1:ic(l),l=(l&(d.suspendedLanes|a))!==0?0:l,l!==0&&l!==y.retryLane))throw y.retryLane=l,_s(e,l),Ut(d,e,l),dp;_.data==="$?"||Bu(),n=bu(e,n,a)}else _.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=y.treeContext,Le=Wt(_.nextSibling),pt=n,me=!0,Mi=null,an=!1,e!==null&&(Pt[qt++]=pn,Pt[qt++]=gn,Pt[qt++]=Di,pn=e.id,gn=e.overflow,Di=n),n=Eu(n,l.children),n.flags|=4096);return n}return c?(Kn(),c=l.fallback,_=n.mode,y=e.child,R=y.sibling,l=mn(y,{mode:"hidden",children:l.children}),l.subtreeFlags=y.subtreeFlags&65011712,R!==null?c=mn(R,c):(c=Oi(c,_,a,null),c.flags|=2),c.return=n,l.return=n,l.sibling=c,n.child=l,l=c,c=n.child,_=e.child.memoizedState,_===null?_=yu(a):(y=_.cachePool,y!==null?(R=Ge._currentValue,y=y.parent!==R?{parent:R,pool:R}:y):y=om(),_={baseLanes:_.baseLanes|a,cachePool:y}),c.memoizedState=_,c.childLanes=vu(e,d,a),n.memoizedState=_u,l):(Qn(n),a=e.child,e=a.sibling,a=mn(a,{mode:"visible",children:l.children}),a.return=n,a.sibling=null,e!==null&&(d=n.deletions,d===null?(n.deletions=[e],n.flags|=16):d.push(e)),n.child=a,n.memoizedState=null,a)}function Eu(e,n){return n=Dl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Dl(e,n){return e=Dt(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function bu(e,n,a){return Ns(n,e.child,null,a),e=Eu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Tp(e,n,a){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),Bc(e.return,n,a)}function Su(e,n,a,l,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=l,f.tail=a,f.tailMode=c)}function Cp(e,n,a){var l=n.pendingProps,c=l.revealOrder,f=l.tail;if(nt(e,n,l.children,a),l=Ye.current,(l&2)!==0)l=l&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tp(e,a,n);else if(e.tag===19)Tp(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(H(Ye,l),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&Rl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Su(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Rl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Su(n,!0,a,null,f);break;case"together":Su(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function bn(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),$n|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ra(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=mn(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=mn(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Tu(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&fl(e)))}function rb(e,n,a){switch(n.tag){case 3:Ie(n,n.stateNode.containerInfo),qn(n,Ge,e.memoizedState.cache),wa();break;case 27:case 5:Jo(n);break;case 4:Ie(n,n.stateNode.containerInfo);break;case 10:qn(n,n.type,n.memoizedProps.value);break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(Qn(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Sp(e,n,a):(Qn(n),e=bn(e,n,a),e!==null?e.sibling:null);Qn(n);break;case 19:var c=(e.flags&128)!==0;if(l=(a&n.childLanes)!==0,l||(Ra(e,n,a,!1),l=(a&n.childLanes)!==0),c){if(l)return Cp(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),H(Ye,Ye.current),l)break;return null;case 22:case 23:return n.lanes=0,_p(e,n,a);case 24:qn(n,Ge,e.memoizedState.cache)}return bn(e,n,a)}function wp(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Xe=!0;else{if(!Tu(e,a)&&(n.flags&128)===0)return Xe=!1,rb(e,n,a);Xe=(e.flags&131072)!==0}else Xe=!1,me&&(n.flags&1048576)!==0&&tm(n,ul,n.index);switch(n.lanes=0,n.tag){case 16:e:{e=n.pendingProps;var l=n.elementType,c=l._init;if(l=c(l._payload),n.type=l,typeof l=="function")Ic(l)?(e=Bi(l,e),n.tag=1,n=Ep(null,n,l,e,a)):(n.tag=0,n=gu(null,n,l,e,a));else{if(l!=null){if(c=l.$$typeof,c===$){n.tag=11,n=mp(null,n,l,e,a);break e}else if(c===He){n.tag=14,n=pp(null,n,l,e,a);break e}}throw n=ot(l)||l,Error(r(306,n,""))}}return n;case 0:return gu(e,n,n.type,n.pendingProps,a);case 1:return l=n.type,c=Bi(l,n.pendingProps),Ep(e,n,l,c,a);case 3:e:{if(Ie(n,n.stateNode.containerInfo),e===null)throw Error(r(387));l=n.pendingProps;var f=n.memoizedState;c=f.element,Fc(e,n),ka(n,l,null,a);var d=n.memoizedState;if(l=d.cache,qn(n,Ge,l),l!==f.cache&&jc(n,[Ge],a,!0),Ma(),l=d.element,f.isDehydrated)if(f={element:l,isDehydrated:!1,cache:d.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=bp(e,n,l,a);break e}else if(l!==c){c=Bt(Error(r(424)),n),Aa(c),n=bp(e,n,l,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Le=Wt(e.firstChild),pt=n,me=!0,Mi=null,an=!0,a=ip(n,null,l,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(wa(),l===c){n=bn(e,n,a);break e}nt(e,n,l,a)}n=n.child}return n;case 26:return Ol(e,n),e===null?(a=xg(n.type,null,n.pendingProps,null))?n.memoizedState=a:me||(a=n.type,e=n.pendingProps,l=Yl(ee.current).createElement(a),l[ct]=n,l[yt]=e,st(l,a,e),Ke(l),n.stateNode=l):n.memoizedState=xg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Jo(n),e===null&&me&&(l=n.stateNode=Ag(n.type,n.pendingProps,ee.current),pt=n,an=!0,c=Le,ii(n.type)?(sf=c,Le=Wt(l.firstChild)):Le=c),nt(e,n,n.pendingProps.children,a),Ol(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&me&&((c=l=Le)&&(l=kb(l,n.type,n.pendingProps,an),l!==null?(n.stateNode=l,pt=n,Le=Wt(l.firstChild),an=!1,c=!0):c=!1),c||ki(n)),Jo(n),c=n.type,f=n.pendingProps,d=e!==null?e.memoizedProps:null,l=f.children,$u(c,f)?l=null:d!==null&&$u(c,d)&&(n.flags|=32),n.memoizedState!==null&&(c=Jc(e,n,JE,null,null,a),nr._currentValue=c),Ol(e,n),nt(e,n,l,a),n.child;case 6:return e===null&&me&&((e=a=Le)&&(a=Lb(a,n.pendingProps,an),a!==null?(n.stateNode=a,pt=n,Le=null,e=!0):e=!1),e||ki(n)),null;case 13:return Sp(e,n,a);case 4:return Ie(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=Ns(n,null,l,a):nt(e,n,l,a),n.child;case 11:return mp(e,n,n.type,n.pendingProps,a);case 7:return nt(e,n,n.pendingProps,a),n.child;case 8:return nt(e,n,n.pendingProps.children,a),n.child;case 12:return nt(e,n,n.pendingProps.children,a),n.child;case 10:return l=n.pendingProps,qn(n,n.type,l.value),nt(e,n,l.children,a),n.child;case 9:return c=n.type._context,l=n.pendingProps.children,Ui(n),c=ut(c),l=l(c),n.flags|=1,nt(e,n,l,a),n.child;case 14:return pp(e,n,n.type,n.pendingProps,a);case 15:return gp(e,n,n.type,n.pendingProps,a);case 19:return Cp(e,n,a);case 31:return l=n.pendingProps,a=n.mode,l={mode:l.mode,children:l.children},e===null?(a=Dl(l,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=mn(e.child,l),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return _p(e,n,a);case 24:return Ui(n),l=ut(Ge),e===null?(c=Vc(),c===null&&(c=Re,f=Pc(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:l,cache:c},Yc(n),qn(n,Ge,c)):((e.lanes&a)!==0&&(Fc(e,n),ka(n,null,null,a),Ma()),c=e.memoizedState,f=n.memoizedState,c.parent!==l?(c={parent:l,cache:l},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),qn(n,Ge,l)):(l=f.cache,qn(n,Ge,l),l!==c.cache&&jc(n,[Ge],a,!0))),nt(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Sn(e){e.flags|=4}function Ap(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!kg(n)){if(n=Vt.current,n!==null&&((fe&4194048)===fe?rn!==null:(fe&62914560)!==fe&&(fe&536870912)===0||n!==rn))throw Da=Gc,cm;e.flags|=8192}}function Il(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?sd():536870912,e.lanes|=n,Is|=n)}function Pa(e,n){if(!me)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,l|=c.subtreeFlags&65011712,l|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=l,e.childLanes=a,n}function lb(e,n,a){var l=n.pendingProps;switch(Uc(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(n),null;case 1:return ke(n),null;case 3:return a=n.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),yn(Ge),Hn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ca(n)?Sn(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,sm())),ke(n),null;case 26:return a=n.memoizedState,e===null?(Sn(n),a!==null?(ke(n),Ap(n,a)):(ke(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Sn(n),ke(n),Ap(n,a)):(ke(n),n.flags&=-16777217):(e.memoizedProps!==l&&Sn(n),ke(n),n.flags&=-16777217),null;case 27:Vr(n),a=ee.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==l&&Sn(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return ke(n),null}e=V.current,Ca(n)?nm(n):(e=Ag(c,l,a),n.stateNode=e,Sn(n))}return ke(n),null;case 5:if(Vr(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&Sn(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return ke(n),null}if(e=V.current,Ca(n))nm(n);else{switch(c=Yl(ee.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?c.createElement("select",{is:l.is}):c.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?c.createElement(a,{is:l.is}):c.createElement(a)}}e[ct]=n,e[yt]=l;e:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break e;for(;c.sibling===null;){if(c.return===null||c.return===n)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;e:switch(st(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Sn(n)}}return ke(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==l&&Sn(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(r(166));if(e=ee.current,Ca(n)){if(e=n.stateNode,a=n.memoizedProps,l=null,c=pt,c!==null)switch(c.tag){case 27:case 5:l=c.memoizedProps}e[ct]=n,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||vg(e.nodeValue,a)),e||ki(n)}else e=Yl(e).createTextNode(l),e[ct]=n,n.stateNode=e}return ke(n),null;case 13:if(l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Ca(n),l!==null&&l.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[ct]=n}else wa(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ke(n),c=!1}else c=sm(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(En(n),n):(En(n),null)}if(En(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=n.child,c=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(c=l.alternate.memoizedState.cachePool.pool);var f=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(f=l.memoizedState.cachePool.pool),f!==c&&(l.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Il(n,n.updateQueue),ke(n),null;case 4:return Hn(),e===null&&Ku(n.stateNode.containerInfo),ke(n),null;case 10:return yn(n.type),ke(n),null;case 19:if(j(Ye),c=n.memoizedState,c===null)return ke(n),null;if(l=(n.flags&128)!==0,f=c.rendering,f===null)if(l)Pa(c,!1);else{if(Ue!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Rl(e),f!==null){for(n.flags|=128,Pa(c,!1),e=f.updateQueue,n.updateQueue=e,Il(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)em(a,e),a=a.sibling;return H(Ye,Ye.current&1|2),n.child}e=e.sibling}c.tail!==null&&sn()>Ll&&(n.flags|=128,l=!0,Pa(c,!1),n.lanes=4194304)}else{if(!l)if(e=Rl(f),e!==null){if(n.flags|=128,l=!0,e=e.updateQueue,n.updateQueue=e,Il(n,e),Pa(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!me)return ke(n),null}else 2*sn()-c.renderingStartTime>Ll&&a!==536870912&&(n.flags|=128,l=!0,Pa(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(e=c.last,e!==null?e.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=sn(),n.sibling=null,e=Ye.current,H(Ye,l?e&1|2:e&1),n):(ke(n),null);case 22:case 23:return En(n),Wc(),l=n.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(a&536870912)!==0&&(n.flags&128)===0&&(ke(n),n.subtreeFlags&6&&(n.flags|=8192)):ke(n),a=n.updateQueue,a!==null&&Il(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==a&&(n.flags|=2048),e!==null&&j(zi),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),yn(Ge),ke(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function ob(e,n){switch(Uc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return yn(Ge),Hn(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Vr(n),null;case 13:if(En(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));wa()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return j(Ye),null;case 4:return Hn(),null;case 10:return yn(n.type),null;case 22:case 23:return En(n),Wc(),e!==null&&j(zi),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return yn(Ge),null;case 25:return null;default:return null}}function Rp(e,n){switch(Uc(n),n.tag){case 3:yn(Ge),Hn();break;case 26:case 27:case 5:Vr(n);break;case 4:Hn();break;case 13:En(n);break;case 19:j(Ye);break;case 10:yn(n.type);break;case 22:case 23:En(n),Wc(),e!==null&&j(zi);break;case 24:yn(Ge)}}function qa(e,n){try{var a=n.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var c=l.next;a=c;do{if((a.tag&e)===e){l=void 0;var f=a.create,d=a.inst;l=f(),d.destroy=l}a=a.next}while(a!==c)}}catch(_){we(n,n.return,_)}}function Xn(e,n,a){try{var l=n.updateQueue,c=l!==null?l.lastEffect:null;if(c!==null){var f=c.next;l=f;do{if((l.tag&e)===e){var d=l.inst,_=d.destroy;if(_!==void 0){d.destroy=void 0,c=n;var y=a,R=_;try{R()}catch(D){we(c,y,D)}}}l=l.next}while(l!==f)}}catch(D){we(n,n.return,D)}}function Np(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{pm(n,a)}catch(l){we(e,e.return,l)}}}function xp(e,n,a){a.props=Bi(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){we(e,n,l)}}function Va(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(c){we(e,n,c)}}function ln(e,n){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(c){we(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){we(e,n,c)}else a.current=null}function Op(e){var n=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(c){we(e,e.return,c)}}function Cu(e,n,a){try{var l=e.stateNode;xb(l,e.type,a,n),l[yt]=n}catch(c){we(e,e.return,c)}}function Dp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ii(e.type)||e.tag===4}function wu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ii(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Au(e,n,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Gl));else if(l!==4&&(l===27&&ii(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Au(e,n,a),e=e.sibling;e!==null;)Au(e,n,a),e=e.sibling}function Ml(e,n,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(l!==4&&(l===27&&ii(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ml(e,n,a),e=e.sibling;e!==null;)Ml(e,n,a),e=e.sibling}function Ip(e){var n=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);st(n,l,a),n[ct]=e,n[yt]=a}catch(f){we(e,e.return,f)}}var Tn=!1,je=!1,Ru=!1,Mp=typeof WeakSet=="function"?WeakSet:Set,We=null;function cb(e,n){if(e=e.containerInfo,Zu=Zl,e=Gd(e),wc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var c=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var d=0,_=-1,y=-1,R=0,D=0,M=e,N=null;t:for(;;){for(var x;M!==a||c!==0&&M.nodeType!==3||(_=d+c),M!==f||l!==0&&M.nodeType!==3||(y=d+l),M.nodeType===3&&(d+=M.nodeValue.length),(x=M.firstChild)!==null;)N=M,M=x;for(;;){if(M===e)break t;if(N===a&&++R===c&&(_=d),N===f&&++D===l&&(y=d),(x=M.nextSibling)!==null)break;M=N,N=M.parentNode}M=x}a=_===-1||y===-1?null:{start:_,end:y}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ju={focusedElem:e,selectionRange:a},Zl=!1,We=n;We!==null;)if(n=We,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,We=e;else for(;We!==null;){switch(n=We,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,l=a.stateNode;try{var W=Bi(a.type,c,a.elementType===a.type);e=l.getSnapshotBeforeUpdate(W,f),l.__reactInternalSnapshotBeforeUpdate=e}catch(G){we(a,a.return,G)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)tf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":tf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,We=e;break}We=n.return}}function kp(e,n,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Wn(e,a),l&4&&qa(5,a);break;case 1:if(Wn(e,a),l&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(d){we(a,a.return,d)}else{var c=Bi(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(d){we(a,a.return,d)}}l&64&&Np(a),l&512&&Va(a,a.return);break;case 3:if(Wn(e,a),l&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{pm(e,n)}catch(d){we(a,a.return,d)}}break;case 27:n===null&&l&4&&Ip(a);case 26:case 5:Wn(e,a),n===null&&l&4&&Op(a),l&512&&Va(a,a.return);break;case 12:Wn(e,a);break;case 13:Wn(e,a),l&4&&zp(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=yb.bind(null,a),Ub(e,a))));break;case 22:if(l=a.memoizedState!==null||Tn,!l){n=n!==null&&n.memoizedState!==null||je,c=Tn;var f=je;Tn=l,(je=n)&&!f?Zn(e,a,(a.subtreeFlags&8772)!==0):Wn(e,a),Tn=c,je=f}break;case 30:break;default:Wn(e,a)}}function Lp(e){var n=e.alternate;n!==null&&(e.alternate=null,Lp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&rc(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Me=null,bt=!1;function Cn(e,n,a){for(a=a.child;a!==null;)Up(e,n,a),a=a.sibling}function Up(e,n,a){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(ua,a)}catch{}switch(a.tag){case 26:je||ln(a,n),Cn(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:je||ln(a,n);var l=Me,c=bt;ii(a.type)&&(Me=a.stateNode,bt=!1),Cn(e,n,a),Ja(a.stateNode),Me=l,bt=c;break;case 5:je||ln(a,n);case 6:if(l=Me,c=bt,Me=null,Cn(e,n,a),Me=l,bt=c,Me!==null)if(bt)try{(Me.nodeType===9?Me.body:Me.nodeName==="HTML"?Me.ownerDocument.body:Me).removeChild(a.stateNode)}catch(f){we(a,n,f)}else try{Me.removeChild(a.stateNode)}catch(f){we(a,n,f)}break;case 18:Me!==null&&(bt?(e=Me,Cg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),rr(e)):Cg(Me,a.stateNode));break;case 4:l=Me,c=bt,Me=a.stateNode.containerInfo,bt=!0,Cn(e,n,a),Me=l,bt=c;break;case 0:case 11:case 14:case 15:je||Xn(2,a,n),je||Xn(4,a,n),Cn(e,n,a);break;case 1:je||(ln(a,n),l=a.stateNode,typeof l.componentWillUnmount=="function"&&xp(a,n,l)),Cn(e,n,a);break;case 21:Cn(e,n,a);break;case 22:je=(l=je)||a.memoizedState!==null,Cn(e,n,a),je=l;break;default:Cn(e,n,a)}}function zp(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{rr(e)}catch(a){we(n,n.return,a)}}function ub(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Mp),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Mp),n;default:throw Error(r(435,e.tag))}}function Nu(e,n){var a=ub(e);n.forEach(function(l){var c=vb.bind(null,e,l);a.has(l)||(a.add(l),l.then(c,c))})}function It(e,n){var a=n.deletions;if(a!==null)for(var l=0;l<a.length;l++){var c=a[l],f=e,d=n,_=d;e:for(;_!==null;){switch(_.tag){case 27:if(ii(_.type)){Me=_.stateNode,bt=!1;break e}break;case 5:Me=_.stateNode,bt=!1;break e;case 3:case 4:Me=_.stateNode.containerInfo,bt=!0;break e}_=_.return}if(Me===null)throw Error(r(160));Up(f,d,c),Me=null,bt=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Hp(n,e),n=n.sibling}var Xt=null;function Hp(e,n){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:It(n,e),Mt(e),l&4&&(Xn(3,e,e.return),qa(3,e),Xn(5,e,e.return));break;case 1:It(n,e),Mt(e),l&512&&(je||a===null||ln(a,a.return)),l&64&&Tn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var c=Xt;if(It(n,e),Mt(e),l&512&&(je||a===null||ln(a,a.return)),l&4){var f=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,c=c.ownerDocument||c;t:switch(l){case"title":f=c.getElementsByTagName("title")[0],(!f||f[da]||f[ct]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(l),c.head.insertBefore(f,c.querySelector("head > title"))),st(f,l,a),f[ct]=e,Ke(f),l=f;break e;case"link":var d=Ig("link","href",c).get(l+(a.href||""));if(d){for(var _=0;_<d.length;_++)if(f=d[_],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){d.splice(_,1);break t}}f=c.createElement(l),st(f,l,a),c.head.appendChild(f);break;case"meta":if(d=Ig("meta","content",c).get(l+(a.content||""))){for(_=0;_<d.length;_++)if(f=d[_],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){d.splice(_,1);break t}}f=c.createElement(l),st(f,l,a),c.head.appendChild(f);break;default:throw Error(r(468,l))}f[ct]=e,Ke(f),l=f}e.stateNode=l}else Mg(c,e.type,e.stateNode);else e.stateNode=Dg(c,l,e.memoizedProps);else f!==l?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,l===null?Mg(c,e.type,e.stateNode):Dg(c,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Cu(e,e.memoizedProps,a.memoizedProps)}break;case 27:It(n,e),Mt(e),l&512&&(je||a===null||ln(a,a.return)),a!==null&&l&4&&Cu(e,e.memoizedProps,a.memoizedProps);break;case 5:if(It(n,e),Mt(e),l&512&&(je||a===null||ln(a,a.return)),e.flags&32){c=e.stateNode;try{us(c,"")}catch(x){we(e,e.return,x)}}l&4&&e.stateNode!=null&&(c=e.memoizedProps,Cu(e,c,a!==null?a.memoizedProps:c)),l&1024&&(Ru=!0);break;case 6:if(It(n,e),Mt(e),l&4){if(e.stateNode===null)throw Error(r(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(x){we(e,e.return,x)}}break;case 3:if(Kl=null,c=Xt,Xt=Fl(n.containerInfo),It(n,e),Xt=c,Mt(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{rr(n.containerInfo)}catch(x){we(e,e.return,x)}Ru&&(Ru=!1,Bp(e));break;case 4:l=Xt,Xt=Fl(e.stateNode.containerInfo),It(n,e),Mt(e),Xt=l;break;case 12:It(n,e),Mt(e);break;case 13:It(n,e),Mt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ku=sn()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Nu(e,l)));break;case 22:c=e.memoizedState!==null;var y=a!==null&&a.memoizedState!==null,R=Tn,D=je;if(Tn=R||c,je=D||y,It(n,e),je=D,Tn=R,Mt(e),l&8192)e:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||y||Tn||je||ji(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){y=a=n;try{if(f=y.stateNode,c)d=f.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{_=y.stateNode;var M=y.memoizedProps.style,N=M!=null&&M.hasOwnProperty("display")?M.display:null;_.style.display=N==null||typeof N=="boolean"?"":(""+N).trim()}}catch(x){we(y,y.return,x)}}}else if(n.tag===6){if(a===null){y=n;try{y.stateNode.nodeValue=c?"":y.memoizedProps}catch(x){we(y,y.return,x)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Nu(e,a))));break;case 19:It(n,e),Mt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Nu(e,l)));break;case 30:break;case 21:break;default:It(n,e),Mt(e)}}function Mt(e){var n=e.flags;if(n&2){try{for(var a,l=e.return;l!==null;){if(Dp(l)){a=l;break}l=l.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=wu(e);Ml(e,f,c);break;case 5:var d=a.stateNode;a.flags&32&&(us(d,""),a.flags&=-33);var _=wu(e);Ml(e,_,d);break;case 3:case 4:var y=a.stateNode.containerInfo,R=wu(e);Au(e,R,y);break;default:throw Error(r(161))}}catch(D){we(e,e.return,D)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Bp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Bp(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Wn(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)kp(e,n.alternate,n),n=n.sibling}function ji(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Xn(4,n,n.return),ji(n);break;case 1:ln(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&xp(n,n.return,a),ji(n);break;case 27:Ja(n.stateNode);case 26:case 5:ln(n,n.return),ji(n);break;case 22:n.memoizedState===null&&ji(n);break;case 30:ji(n);break;default:ji(n)}e=e.sibling}}function Zn(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,c=e,f=n,d=f.flags;switch(f.tag){case 0:case 11:case 15:Zn(c,f,a),qa(4,f);break;case 1:if(Zn(c,f,a),l=f,c=l.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(R){we(l,l.return,R)}if(l=f,c=l.updateQueue,c!==null){var _=l.stateNode;try{var y=c.shared.hiddenCallbacks;if(y!==null)for(c.shared.hiddenCallbacks=null,c=0;c<y.length;c++)mm(y[c],_)}catch(R){we(l,l.return,R)}}a&&d&64&&Np(f),Va(f,f.return);break;case 27:Ip(f);case 26:case 5:Zn(c,f,a),a&&l===null&&d&4&&Op(f),Va(f,f.return);break;case 12:Zn(c,f,a);break;case 13:Zn(c,f,a),a&&d&4&&zp(c,f);break;case 22:f.memoizedState===null&&Zn(c,f,a),Va(f,f.return);break;case 30:break;default:Zn(c,f,a)}n=n.sibling}}function xu(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Na(a))}function Ou(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Na(e))}function on(e,n,a,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)jp(e,n,a,l),n=n.sibling}function jp(e,n,a,l){var c=n.flags;switch(n.tag){case 0:case 11:case 15:on(e,n,a,l),c&2048&&qa(9,n);break;case 1:on(e,n,a,l);break;case 3:on(e,n,a,l),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Na(e)));break;case 12:if(c&2048){on(e,n,a,l),e=n.stateNode;try{var f=n.memoizedProps,d=f.id,_=f.onPostCommit;typeof _=="function"&&_(d,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(y){we(n,n.return,y)}}else on(e,n,a,l);break;case 13:on(e,n,a,l);break;case 23:break;case 22:f=n.stateNode,d=n.alternate,n.memoizedState!==null?f._visibility&2?on(e,n,a,l):Ga(e,n):f._visibility&2?on(e,n,a,l):(f._visibility|=2,xs(e,n,a,l,(n.subtreeFlags&10256)!==0)),c&2048&&xu(d,n);break;case 24:on(e,n,a,l),c&2048&&Ou(n.alternate,n);break;default:on(e,n,a,l)}}function xs(e,n,a,l,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,d=n,_=a,y=l,R=d.flags;switch(d.tag){case 0:case 11:case 15:xs(f,d,_,y,c),qa(8,d);break;case 23:break;case 22:var D=d.stateNode;d.memoizedState!==null?D._visibility&2?xs(f,d,_,y,c):Ga(f,d):(D._visibility|=2,xs(f,d,_,y,c)),c&&R&2048&&xu(d.alternate,d);break;case 24:xs(f,d,_,y,c),c&&R&2048&&Ou(d.alternate,d);break;default:xs(f,d,_,y,c)}n=n.sibling}}function Ga(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,l=n,c=l.flags;switch(l.tag){case 22:Ga(a,l),c&2048&&xu(l.alternate,l);break;case 24:Ga(a,l),c&2048&&Ou(l.alternate,l);break;default:Ga(a,l)}n=n.sibling}}var Ya=8192;function Os(e){if(e.subtreeFlags&Ya)for(e=e.child;e!==null;)Pp(e),e=e.sibling}function Pp(e){switch(e.tag){case 26:Os(e),e.flags&Ya&&e.memoizedState!==null&&Xb(Xt,e.memoizedState,e.memoizedProps);break;case 5:Os(e);break;case 3:case 4:var n=Xt;Xt=Fl(e.stateNode.containerInfo),Os(e),Xt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Ya,Ya=16777216,Os(e),Ya=n):Os(e));break;default:Os(e)}}function qp(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Fa(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];We=l,Gp(l,e)}qp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Vp(e),e=e.sibling}function Vp(e){switch(e.tag){case 0:case 11:case 15:Fa(e),e.flags&2048&&Xn(9,e,e.return);break;case 3:Fa(e);break;case 12:Fa(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,kl(e)):Fa(e);break;default:Fa(e)}}function kl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];We=l,Gp(l,e)}qp(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Xn(8,n,n.return),kl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,kl(n));break;default:kl(n)}e=e.sibling}}function Gp(e,n){for(;We!==null;){var a=We;switch(a.tag){case 0:case 11:case 15:Xn(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Na(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,We=l;else e:for(a=e;We!==null;){l=We;var c=l.sibling,f=l.return;if(Lp(l),l===a){We=null;break e}if(c!==null){c.return=f,We=c;break e}We=f}}}var fb={getCacheForType:function(e){var n=ut(Ge),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},hb=typeof WeakMap=="function"?WeakMap:Map,_e=0,Re=null,le=null,fe=0,ye=0,kt=null,Jn=!1,Ds=!1,Du=!1,wn=0,Ue=0,$n=0,Pi=0,Iu=0,Gt=0,Is=0,Qa=null,St=null,Mu=!1,ku=0,Ll=1/0,Ul=null,ei=null,it=0,ti=null,Ms=null,ks=0,Lu=0,Uu=null,Yp=null,Ka=0,zu=null;function Lt(){if((_e&2)!==0&&fe!==0)return fe&-fe;if(O.T!==null){var e=bs;return e!==0?e:Gu()}return ld()}function Fp(){Gt===0&&(Gt=(fe&536870912)===0||me?id():536870912);var e=Vt.current;return e!==null&&(e.flags|=32),Gt}function Ut(e,n,a){(e===Re&&(ye===2||ye===9)||e.cancelPendingCommit!==null)&&(Ls(e,0),ni(e,fe,Gt,!1)),ha(e,a),((_e&2)===0||e!==Re)&&(e===Re&&((_e&2)===0&&(Pi|=a),Ue===4&&ni(e,fe,Gt,!1)),cn(e))}function Qp(e,n,a){if((_e&6)!==0)throw Error(r(327));var l=!a&&(n&124)===0&&(n&e.expiredLanes)===0||fa(e,n),c=l?pb(e,n):ju(e,n,!0),f=l;do{if(c===0){Ds&&!l&&ni(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!db(a)){c=ju(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){n=d;e:{var _=e;c=Qa;var y=_.current.memoizedState.isDehydrated;if(y&&(Ls(_,d).flags|=256),d=ju(_,d,!1),d!==2){if(Du&&!y){_.errorRecoveryDisabledLanes|=f,Pi|=f,c=4;break e}f=St,St=c,f!==null&&(St===null?St=f:St.push.apply(St,f))}c=d}if(f=!1,c!==2)continue}}if(c===1){Ls(e,0),ni(e,n,0,!0);break}e:{switch(l=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:ni(l,n,Gt,!Jn);break e;case 2:St=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=ku+300-sn(),10<c)){if(ni(l,n,Gt,!Jn),Qr(l,0,!0)!==0)break e;l.timeoutHandle=Sg(Kp.bind(null,l,a,St,Ul,Mu,n,Gt,Pi,Is,Jn,f,2,-0,0),c);break e}Kp(l,a,St,Ul,Mu,n,Gt,Pi,Is,Jn,f,0,-0,0)}}break}while(!0);cn(e)}function Kp(e,n,a,l,c,f,d,_,y,R,D,M,N,x){if(e.timeoutHandle=-1,M=n.subtreeFlags,(M&8192||(M&16785408)===16785408)&&(tr={stylesheets:null,count:0,unsuspend:Kb},Pp(n),M=Wb(),M!==null)){e.cancelPendingCommit=M(tg.bind(null,e,n,f,a,l,c,d,_,y,D,1,N,x)),ni(e,f,d,!R);return}tg(e,n,f,a,l,c,d,_,y)}function db(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var c=a[l],f=c.getSnapshot;c=c.value;try{if(!Ot(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ni(e,n,a,l){n&=~Iu,n&=~Pi,e.suspendedLanes|=n,e.pingedLanes&=~n,l&&(e.warmLanes|=n),l=e.expirationTimes;for(var c=n;0<c;){var f=31-xt(c),d=1<<f;l[f]=-1,c&=~d}a!==0&&ad(e,a,n)}function zl(){return(_e&6)===0?(Xa(0),!1):!0}function Hu(){if(le!==null){if(ye===0)var e=le.return;else e=le,_n=Li=null,tu(e),Rs=null,Ba=0,e=le;for(;e!==null;)Rp(e.alternate,e),e=e.return;le=null}}function Ls(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Db(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Hu(),Re=e,le=a=mn(e.current,null),fe=n,ye=0,kt=null,Jn=!1,Ds=fa(e,n),Du=!1,Is=Gt=Iu=Pi=$n=Ue=0,St=Qa=null,Mu=!1,(n&8)!==0&&(n|=n&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=n;0<l;){var c=31-xt(l),f=1<<c;n|=e[c],l&=~f}return wn=n,al(),a}function Xp(e,n){ie=null,O.H=Cl,n===Oa||n===ml?(n=hm(),ye=3):n===cm?(n=hm(),ye=4):ye=n===dp?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,kt=n,le===null&&(Ue=1,xl(e,Bt(n,e.current)))}function Wp(){var e=O.H;return O.H=Cl,e===null?Cl:e}function Zp(){var e=O.A;return O.A=fb,e}function Bu(){Ue=4,Jn||(fe&4194048)!==fe&&Vt.current!==null||(Ds=!0),($n&134217727)===0&&(Pi&134217727)===0||Re===null||ni(Re,fe,Gt,!1)}function ju(e,n,a){var l=_e;_e|=2;var c=Wp(),f=Zp();(Re!==e||fe!==n)&&(Ul=null,Ls(e,n)),n=!1;var d=Ue;e:do try{if(ye!==0&&le!==null){var _=le,y=kt;switch(ye){case 8:Hu(),d=6;break e;case 3:case 2:case 9:case 6:Vt.current===null&&(n=!0);var R=ye;if(ye=0,kt=null,Us(e,_,y,R),a&&Ds){d=0;break e}break;default:R=ye,ye=0,kt=null,Us(e,_,y,R)}}mb(),d=Ue;break}catch(D){Xp(e,D)}while(!0);return n&&e.shellSuspendCounter++,_n=Li=null,_e=l,O.H=c,O.A=f,le===null&&(Re=null,fe=0,al()),d}function mb(){for(;le!==null;)Jp(le)}function pb(e,n){var a=_e;_e|=2;var l=Wp(),c=Zp();Re!==e||fe!==n?(Ul=null,Ll=sn()+500,Ls(e,n)):Ds=fa(e,n);e:do try{if(ye!==0&&le!==null){n=le;var f=kt;t:switch(ye){case 1:ye=0,kt=null,Us(e,n,f,1);break;case 2:case 9:if(um(f)){ye=0,kt=null,$p(n);break}n=function(){ye!==2&&ye!==9||Re!==e||(ye=7),cn(e)},f.then(n,n);break e;case 3:ye=7;break e;case 4:ye=5;break e;case 7:um(f)?(ye=0,kt=null,$p(n)):(ye=0,kt=null,Us(e,n,f,7));break;case 5:var d=null;switch(le.tag){case 26:d=le.memoizedState;case 5:case 27:var _=le;if(!d||kg(d)){ye=0,kt=null;var y=_.sibling;if(y!==null)le=y;else{var R=_.return;R!==null?(le=R,Hl(R)):le=null}break t}}ye=0,kt=null,Us(e,n,f,5);break;case 6:ye=0,kt=null,Us(e,n,f,6);break;case 8:Hu(),Ue=6;break e;default:throw Error(r(462))}}gb();break}catch(D){Xp(e,D)}while(!0);return _n=Li=null,O.H=l,O.A=c,_e=a,le!==null?0:(Re=null,fe=0,al(),Ue)}function gb(){for(;le!==null&&!H0();)Jp(le)}function Jp(e){var n=wp(e.alternate,e,wn);e.memoizedProps=e.pendingProps,n===null?Hl(e):le=n}function $p(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=vp(a,n,n.pendingProps,n.type,void 0,fe);break;case 11:n=vp(a,n,n.pendingProps,n.type.render,n.ref,fe);break;case 5:tu(n);default:Rp(a,n),n=le=em(n,wn),n=wp(a,n,wn)}e.memoizedProps=e.pendingProps,n===null?Hl(e):le=n}function Us(e,n,a,l){_n=Li=null,tu(n),Rs=null,Ba=0;var c=n.return;try{if(ab(e,c,n,a,fe)){Ue=1,xl(e,Bt(a,e.current)),le=null;return}}catch(f){if(c!==null)throw le=c,f;Ue=1,xl(e,Bt(a,e.current)),le=null;return}n.flags&32768?(me||l===1?e=!0:Ds||(fe&536870912)!==0?e=!1:(Jn=e=!0,(l===2||l===9||l===3||l===6)&&(l=Vt.current,l!==null&&l.tag===13&&(l.flags|=16384))),eg(n,e)):Hl(n)}function Hl(e){var n=e;do{if((n.flags&32768)!==0){eg(n,Jn);return}e=n.return;var a=lb(n.alternate,n,wn);if(a!==null){le=a;return}if(n=n.sibling,n!==null){le=n;return}le=n=e}while(n!==null);Ue===0&&(Ue=5)}function eg(e,n){do{var a=ob(e.alternate,e);if(a!==null){a.flags&=32767,le=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){le=e;return}le=e=a}while(e!==null);Ue=6,le=null}function tg(e,n,a,l,c,f,d,_,y){e.cancelPendingCommit=null;do Bl();while(it!==0);if((_e&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Oc,K0(e,a,f,d,_,y),e===Re&&(le=Re=null,fe=0),Ms=n,ti=e,ks=a,Lu=f,Uu=c,Yp=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Eb(Gr,function(){return rg(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=O.T,O.T=null,c=B.p,B.p=2,d=_e,_e|=4;try{cb(e,n,a)}finally{_e=d,B.p=c,O.T=l}}it=1,ng(),ig(),sg()}}function ng(){if(it===1){it=0;var e=ti,n=Ms,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var l=B.p;B.p=2;var c=_e;_e|=4;try{Hp(n,e);var f=Ju,d=Gd(e.containerInfo),_=f.focusedElem,y=f.selectionRange;if(d!==_&&_&&_.ownerDocument&&Vd(_.ownerDocument.documentElement,_)){if(y!==null&&wc(_)){var R=y.start,D=y.end;if(D===void 0&&(D=R),"selectionStart"in _)_.selectionStart=R,_.selectionEnd=Math.min(D,_.value.length);else{var M=_.ownerDocument||document,N=M&&M.defaultView||window;if(N.getSelection){var x=N.getSelection(),W=_.textContent.length,G=Math.min(y.start,W),be=y.end===void 0?G:Math.min(y.end,W);!x.extend&&G>be&&(d=be,be=G,G=d);var w=qd(_,G),T=qd(_,be);if(w&&T&&(x.rangeCount!==1||x.anchorNode!==w.node||x.anchorOffset!==w.offset||x.focusNode!==T.node||x.focusOffset!==T.offset)){var A=M.createRange();A.setStart(w.node,w.offset),x.removeAllRanges(),G>be?(x.addRange(A),x.extend(T.node,T.offset)):(A.setEnd(T.node,T.offset),x.addRange(A))}}}}for(M=[],x=_;x=x.parentNode;)x.nodeType===1&&M.push({element:x,left:x.scrollLeft,top:x.scrollTop});for(typeof _.focus=="function"&&_.focus(),_=0;_<M.length;_++){var I=M[_];I.element.scrollLeft=I.left,I.element.scrollTop=I.top}}Zl=!!Zu,Ju=Zu=null}finally{_e=c,B.p=l,O.T=a}}e.current=n,it=2}}function ig(){if(it===2){it=0;var e=ti,n=Ms,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var l=B.p;B.p=2;var c=_e;_e|=4;try{kp(e,n.alternate,n)}finally{_e=c,B.p=l,O.T=a}}it=3}}function sg(){if(it===4||it===3){it=0,B0();var e=ti,n=Ms,a=ks,l=Yp;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?it=5:(it=0,Ms=ti=null,ag(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(ei=null),sc(a),n=n.stateNode,Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(ua,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=O.T,c=B.p,B.p=2,O.T=null;try{for(var f=e.onRecoverableError,d=0;d<l.length;d++){var _=l[d];f(_.value,{componentStack:_.stack})}}finally{O.T=n,B.p=c}}(ks&3)!==0&&Bl(),cn(e),c=e.pendingLanes,(a&4194090)!==0&&(c&42)!==0?e===zu?Ka++:(Ka=0,zu=e):Ka=0,Xa(0)}}function ag(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Na(n)))}function Bl(e){return ng(),ig(),sg(),rg()}function rg(){if(it!==5)return!1;var e=ti,n=Lu;Lu=0;var a=sc(ks),l=O.T,c=B.p;try{B.p=32>a?32:a,O.T=null,a=Uu,Uu=null;var f=ti,d=ks;if(it=0,Ms=ti=null,ks=0,(_e&6)!==0)throw Error(r(331));var _=_e;if(_e|=4,Vp(f.current),jp(f,f.current,d,a),_e=_,Xa(0,!1),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(ua,f)}catch{}return!0}finally{B.p=c,O.T=l,ag(e,n)}}function lg(e,n,a){n=Bt(a,n),n=pu(e.stateNode,n,2),e=Yn(e,n,2),e!==null&&(ha(e,2),cn(e))}function we(e,n,a){if(e.tag===3)lg(e,e,a);else for(;n!==null;){if(n.tag===3){lg(n,e,a);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ei===null||!ei.has(l))){e=Bt(a,e),a=fp(2),l=Yn(n,a,2),l!==null&&(hp(a,l,n,e),ha(l,2),cn(l));break}}n=n.return}}function Pu(e,n,a){var l=e.pingCache;if(l===null){l=e.pingCache=new hb;var c=new Set;l.set(n,c)}else c=l.get(n),c===void 0&&(c=new Set,l.set(n,c));c.has(a)||(Du=!0,c.add(a),e=_b.bind(null,e,n,a),n.then(e,e))}function _b(e,n,a){var l=e.pingCache;l!==null&&l.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Re===e&&(fe&a)===a&&(Ue===4||Ue===3&&(fe&62914560)===fe&&300>sn()-ku?(_e&2)===0&&Ls(e,0):Iu|=a,Is===fe&&(Is=0)),cn(e)}function og(e,n){n===0&&(n=sd()),e=_s(e,n),e!==null&&(ha(e,n),cn(e))}function yb(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),og(e,a)}function vb(e,n){var a=0;switch(e.tag){case 13:var l=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(n),og(e,a)}function Eb(e,n){return ec(e,n)}var jl=null,zs=null,qu=!1,Pl=!1,Vu=!1,qi=0;function cn(e){e!==zs&&e.next===null&&(zs===null?jl=zs=e:zs=zs.next=e),Pl=!0,qu||(qu=!0,Sb())}function Xa(e,n){if(!Vu&&Pl){Vu=!0;do for(var a=!1,l=jl;l!==null;){if(e!==0){var c=l.pendingLanes;if(c===0)var f=0;else{var d=l.suspendedLanes,_=l.pingedLanes;f=(1<<31-xt(42|e)+1)-1,f&=c&~(d&~_),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,hg(l,f))}else f=fe,f=Qr(l,l===Re?f:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(f&3)===0||fa(l,f)||(a=!0,hg(l,f));l=l.next}while(a);Vu=!1}}function bb(){cg()}function cg(){Pl=qu=!1;var e=0;qi!==0&&(Ob()&&(e=qi),qi=0);for(var n=sn(),a=null,l=jl;l!==null;){var c=l.next,f=ug(l,n);f===0?(l.next=null,a===null?jl=c:a.next=c,c===null&&(zs=a)):(a=l,(e!==0||(f&3)!==0)&&(Pl=!0)),l=c}Xa(e)}function ug(e,n){for(var a=e.suspendedLanes,l=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var d=31-xt(f),_=1<<d,y=c[d];y===-1?((_&a)===0||(_&l)!==0)&&(c[d]=Q0(_,n)):y<=n&&(e.expiredLanes|=_),f&=~_}if(n=Re,a=fe,a=Qr(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===n&&(ye===2||ye===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&tc(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||fa(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(l!==null&&tc(l),sc(a)){case 2:case 8:a=td;break;case 32:a=Gr;break;case 268435456:a=nd;break;default:a=Gr}return l=fg.bind(null,e),a=ec(a,l),e.callbackPriority=n,e.callbackNode=a,n}return l!==null&&l!==null&&tc(l),e.callbackPriority=2,e.callbackNode=null,2}function fg(e,n){if(it!==0&&it!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Bl()&&e.callbackNode!==a)return null;var l=fe;return l=Qr(e,e===Re?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Qp(e,l,n),ug(e,sn()),e.callbackNode!=null&&e.callbackNode===a?fg.bind(null,e):null)}function hg(e,n){if(Bl())return null;Qp(e,n,!0)}function Sb(){Ib(function(){(_e&6)!==0?ec(ed,bb):cg()})}function Gu(){return qi===0&&(qi=id()),qi}function dg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Jr(""+e)}function mg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Tb(e,n,a,l,c){if(n==="submit"&&a&&a.stateNode===c){var f=dg((c[yt]||null).action),d=l.submitter;d&&(n=(n=d[yt]||null)?dg(n.formAction):d.getAttribute("formAction"),n!==null&&(f=n,d=null));var _=new nl("action","action",null,l,c);e.push({event:_,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(qi!==0){var y=d?mg(c,d):new FormData(c);uu(a,{pending:!0,data:y,method:c.method,action:f},null,y)}}else typeof f=="function"&&(_.preventDefault(),y=d?mg(c,d):new FormData(c),uu(a,{pending:!0,data:y,method:c.method,action:f},f,y))},currentTarget:c}]})}}for(var Yu=0;Yu<xc.length;Yu++){var Fu=xc[Yu],Cb=Fu.toLowerCase(),wb=Fu[0].toUpperCase()+Fu.slice(1);Kt(Cb,"on"+wb)}Kt(Qd,"onAnimationEnd"),Kt(Kd,"onAnimationIteration"),Kt(Xd,"onAnimationStart"),Kt("dblclick","onDoubleClick"),Kt("focusin","onFocus"),Kt("focusout","onBlur"),Kt(qE,"onTransitionRun"),Kt(VE,"onTransitionStart"),Kt(GE,"onTransitionCancel"),Kt(Wd,"onTransitionEnd"),ls("onMouseEnter",["mouseout","mouseover"]),ls("onMouseLeave",["mouseout","mouseover"]),ls("onPointerEnter",["pointerout","pointerover"]),ls("onPointerLeave",["pointerout","pointerover"]),Ai("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ai("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ai("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ai("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ai("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ai("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ab=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wa));function pg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],c=l.event;l=l.listeners;e:{var f=void 0;if(n)for(var d=l.length-1;0<=d;d--){var _=l[d],y=_.instance,R=_.currentTarget;if(_=_.listener,y!==f&&c.isPropagationStopped())break e;f=_,c.currentTarget=R;try{f(c)}catch(D){Nl(D)}c.currentTarget=null,f=y}else for(d=0;d<l.length;d++){if(_=l[d],y=_.instance,R=_.currentTarget,_=_.listener,y!==f&&c.isPropagationStopped())break e;f=_,c.currentTarget=R;try{f(c)}catch(D){Nl(D)}c.currentTarget=null,f=y}}}}function oe(e,n){var a=n[ac];a===void 0&&(a=n[ac]=new Set);var l=e+"__bubble";a.has(l)||(gg(n,e,2,!1),a.add(l))}function Qu(e,n,a){var l=0;n&&(l|=4),gg(a,e,l,n)}var ql="_reactListening"+Math.random().toString(36).slice(2);function Ku(e){if(!e[ql]){e[ql]=!0,cd.forEach(function(a){a!=="selectionchange"&&(Ab.has(a)||Qu(a,!1,e),Qu(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ql]||(n[ql]=!0,Qu("selectionchange",!1,n))}}function gg(e,n,a,l){switch(jg(n)){case 2:var c=$b;break;case 8:c=eS;break;default:c=cf}a=c.bind(null,n,a,e),c=void 0,!gc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),l?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Xu(e,n,a,l,c){var f=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var d=l.tag;if(d===3||d===4){var _=l.stateNode.containerInfo;if(_===c)break;if(d===4)for(d=l.return;d!==null;){var y=d.tag;if((y===3||y===4)&&d.stateNode.containerInfo===c)return;d=d.return}for(;_!==null;){if(d=ss(_),d===null)return;if(y=d.tag,y===5||y===6||y===26||y===27){l=f=d;continue e}_=_.parentNode}}l=l.return}Td(function(){var R=f,D=mc(a),M=[];e:{var N=Zd.get(e);if(N!==void 0){var x=nl,W=e;switch(e){case"keypress":if(el(a)===0)break e;case"keydown":case"keyup":x=EE;break;case"focusin":W="focus",x=Ec;break;case"focusout":W="blur",x=Ec;break;case"beforeblur":case"afterblur":x=Ec;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Ad;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=oE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=TE;break;case Qd:case Kd:case Xd:x=fE;break;case Wd:x=wE;break;case"scroll":case"scrollend":x=rE;break;case"wheel":x=RE;break;case"copy":case"cut":case"paste":x=dE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Nd;break;case"toggle":case"beforetoggle":x=xE}var G=(n&4)!==0,be=!G&&(e==="scroll"||e==="scrollend"),w=G?N!==null?N+"Capture":null:N;G=[];for(var T=R,A;T!==null;){var I=T;if(A=I.stateNode,I=I.tag,I!==5&&I!==26&&I!==27||A===null||w===null||(I=pa(T,w),I!=null&&G.push(Za(T,I,A))),be)break;T=T.return}0<G.length&&(N=new x(N,W,null,a,D),M.push({event:N,listeners:G}))}}if((n&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",N&&a!==dc&&(W=a.relatedTarget||a.fromElement)&&(ss(W)||W[is]))break e;if((x||N)&&(N=D.window===D?D:(N=D.ownerDocument)?N.defaultView||N.parentWindow:window,x?(W=a.relatedTarget||a.toElement,x=R,W=W?ss(W):null,W!==null&&(be=u(W),G=W.tag,W!==be||G!==5&&G!==27&&G!==6)&&(W=null)):(x=null,W=R),x!==W)){if(G=Ad,I="onMouseLeave",w="onMouseEnter",T="mouse",(e==="pointerout"||e==="pointerover")&&(G=Nd,I="onPointerLeave",w="onPointerEnter",T="pointer"),be=x==null?N:ma(x),A=W==null?N:ma(W),N=new G(I,T+"leave",x,a,D),N.target=be,N.relatedTarget=A,I=null,ss(D)===R&&(G=new G(w,T+"enter",W,a,D),G.target=A,G.relatedTarget=be,I=G),be=I,x&&W)t:{for(G=x,w=W,T=0,A=G;A;A=Hs(A))T++;for(A=0,I=w;I;I=Hs(I))A++;for(;0<T-A;)G=Hs(G),T--;for(;0<A-T;)w=Hs(w),A--;for(;T--;){if(G===w||w!==null&&G===w.alternate)break t;G=Hs(G),w=Hs(w)}G=null}else G=null;x!==null&&_g(M,N,x,G,!1),W!==null&&be!==null&&_g(M,be,W,G,!0)}}e:{if(N=R?ma(R):window,x=N.nodeName&&N.nodeName.toLowerCase(),x==="select"||x==="input"&&N.type==="file")var P=Ud;else if(kd(N))if(zd)P=BE;else{P=zE;var se=UE}else x=N.nodeName,!x||x.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?R&&hc(R.elementType)&&(P=Ud):P=HE;if(P&&(P=P(e,R))){Ld(M,P,a,D);break e}se&&se(e,N,R),e==="focusout"&&R&&N.type==="number"&&R.memoizedProps.value!=null&&fc(N,"number",N.value)}switch(se=R?ma(R):window,e){case"focusin":(kd(se)||se.contentEditable==="true")&&(ms=se,Ac=R,Ta=null);break;case"focusout":Ta=Ac=ms=null;break;case"mousedown":Rc=!0;break;case"contextmenu":case"mouseup":case"dragend":Rc=!1,Yd(M,a,D);break;case"selectionchange":if(PE)break;case"keydown":case"keyup":Yd(M,a,D)}var q;if(Sc)e:{switch(e){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else ds?Id(e,a)&&(F="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(F="onCompositionStart");F&&(xd&&a.locale!=="ko"&&(ds||F!=="onCompositionStart"?F==="onCompositionEnd"&&ds&&(q=Cd()):(Pn=D,_c="value"in Pn?Pn.value:Pn.textContent,ds=!0)),se=Vl(R,F),0<se.length&&(F=new Rd(F,e,null,a,D),M.push({event:F,listeners:se}),q?F.data=q:(q=Md(a),q!==null&&(F.data=q)))),(q=DE?IE(e,a):ME(e,a))&&(F=Vl(R,"onBeforeInput"),0<F.length&&(se=new Rd("onBeforeInput","beforeinput",null,a,D),M.push({event:se,listeners:F}),se.data=q)),Tb(M,e,R,a,D)}pg(M,n)})}function Za(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Vl(e,n){for(var a=n+"Capture",l=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=pa(e,a),c!=null&&l.unshift(Za(e,c,f)),c=pa(e,n),c!=null&&l.push(Za(e,c,f))),e.tag===3)return l;e=e.return}return[]}function Hs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function _g(e,n,a,l,c){for(var f=n._reactName,d=[];a!==null&&a!==l;){var _=a,y=_.alternate,R=_.stateNode;if(_=_.tag,y!==null&&y===l)break;_!==5&&_!==26&&_!==27||R===null||(y=R,c?(R=pa(a,f),R!=null&&d.unshift(Za(a,R,y))):c||(R=pa(a,f),R!=null&&d.push(Za(a,R,y)))),a=a.return}d.length!==0&&e.push({event:n,listeners:d})}var Rb=/\r\n?/g,Nb=/\u0000|\uFFFD/g;function yg(e){return(typeof e=="string"?e:""+e).replace(Rb,`
`).replace(Nb,"")}function vg(e,n){return n=yg(n),yg(e)===n}function Gl(){}function Ee(e,n,a,l,c,f){switch(a){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||us(e,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&us(e,""+l);break;case"className":Xr(e,"class",l);break;case"tabIndex":Xr(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Xr(e,a,l);break;case"style":bd(e,l,f);break;case"data":if(n!=="object"){Xr(e,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Jr(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ee(e,n,"name",c.name,c,null),Ee(e,n,"formEncType",c.formEncType,c,null),Ee(e,n,"formMethod",c.formMethod,c,null),Ee(e,n,"formTarget",c.formTarget,c,null)):(Ee(e,n,"encType",c.encType,c,null),Ee(e,n,"method",c.method,c,null),Ee(e,n,"target",c.target,c,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Jr(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Gl);break;case"onScroll":l!=null&&oe("scroll",e);break;case"onScrollEnd":l!=null&&oe("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Jr(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":oe("beforetoggle",e),oe("toggle",e),Kr(e,"popover",l);break;case"xlinkActuate":hn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":hn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":hn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":hn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":hn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":hn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":hn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":hn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":hn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Kr(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=sE.get(a)||a,Kr(e,a,l))}}function Wu(e,n,a,l,c,f){switch(a){case"style":bd(e,l,f);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof l=="string"?us(e,l):(typeof l=="number"||typeof l=="bigint")&&us(e,""+l);break;case"onScroll":l!=null&&oe("scroll",e);break;case"onScrollEnd":l!=null&&oe("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Gl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ud.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[yt]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof l=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,l,c);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Kr(e,a,l)}}}function st(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":oe("error",e),oe("load",e);var l=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var d=a[f];if(d!=null)switch(f){case"src":l=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ee(e,n,f,d,a,null)}}c&&Ee(e,n,"srcSet",a.srcSet,a,null),l&&Ee(e,n,"src",a.src,a,null);return;case"input":oe("invalid",e);var _=f=d=c=null,y=null,R=null;for(l in a)if(a.hasOwnProperty(l)){var D=a[l];if(D!=null)switch(l){case"name":c=D;break;case"type":d=D;break;case"checked":y=D;break;case"defaultChecked":R=D;break;case"value":f=D;break;case"defaultValue":_=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(r(137,n));break;default:Ee(e,n,l,D,a,null)}}_d(e,f,_,y,R,d,c,!1),Wr(e);return;case"select":oe("invalid",e),l=d=f=null;for(c in a)if(a.hasOwnProperty(c)&&(_=a[c],_!=null))switch(c){case"value":f=_;break;case"defaultValue":d=_;break;case"multiple":l=_;default:Ee(e,n,c,_,a,null)}n=f,a=d,e.multiple=!!l,n!=null?cs(e,!!l,n,!1):a!=null&&cs(e,!!l,a,!0);return;case"textarea":oe("invalid",e),f=c=l=null;for(d in a)if(a.hasOwnProperty(d)&&(_=a[d],_!=null))switch(d){case"value":l=_;break;case"defaultValue":c=_;break;case"children":f=_;break;case"dangerouslySetInnerHTML":if(_!=null)throw Error(r(91));break;default:Ee(e,n,d,_,a,null)}vd(e,l,c,f),Wr(e);return;case"option":for(y in a)if(a.hasOwnProperty(y)&&(l=a[y],l!=null))switch(y){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ee(e,n,y,l,a,null)}return;case"dialog":oe("beforetoggle",e),oe("toggle",e),oe("cancel",e),oe("close",e);break;case"iframe":case"object":oe("load",e);break;case"video":case"audio":for(l=0;l<Wa.length;l++)oe(Wa[l],e);break;case"image":oe("error",e),oe("load",e);break;case"details":oe("toggle",e);break;case"embed":case"source":case"link":oe("error",e),oe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in a)if(a.hasOwnProperty(R)&&(l=a[R],l!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ee(e,n,R,l,a,null)}return;default:if(hc(n)){for(D in a)a.hasOwnProperty(D)&&(l=a[D],l!==void 0&&Wu(e,n,D,l,a,void 0));return}}for(_ in a)a.hasOwnProperty(_)&&(l=a[_],l!=null&&Ee(e,n,_,l,a,null))}function xb(e,n,a,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,d=null,_=null,y=null,R=null,D=null;for(x in a){var M=a[x];if(a.hasOwnProperty(x)&&M!=null)switch(x){case"checked":break;case"value":break;case"defaultValue":y=M;default:l.hasOwnProperty(x)||Ee(e,n,x,null,l,M)}}for(var N in l){var x=l[N];if(M=a[N],l.hasOwnProperty(N)&&(x!=null||M!=null))switch(N){case"type":f=x;break;case"name":c=x;break;case"checked":R=x;break;case"defaultChecked":D=x;break;case"value":d=x;break;case"defaultValue":_=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(r(137,n));break;default:x!==M&&Ee(e,n,N,x,l,M)}}uc(e,d,_,y,R,D,f,c);return;case"select":x=d=_=N=null;for(f in a)if(y=a[f],a.hasOwnProperty(f)&&y!=null)switch(f){case"value":break;case"multiple":x=y;default:l.hasOwnProperty(f)||Ee(e,n,f,null,l,y)}for(c in l)if(f=l[c],y=a[c],l.hasOwnProperty(c)&&(f!=null||y!=null))switch(c){case"value":N=f;break;case"defaultValue":_=f;break;case"multiple":d=f;default:f!==y&&Ee(e,n,c,f,l,y)}n=_,a=d,l=x,N!=null?cs(e,!!a,N,!1):!!l!=!!a&&(n!=null?cs(e,!!a,n,!0):cs(e,!!a,a?[]:"",!1));return;case"textarea":x=N=null;for(_ in a)if(c=a[_],a.hasOwnProperty(_)&&c!=null&&!l.hasOwnProperty(_))switch(_){case"value":break;case"children":break;default:Ee(e,n,_,null,l,c)}for(d in l)if(c=l[d],f=a[d],l.hasOwnProperty(d)&&(c!=null||f!=null))switch(d){case"value":N=c;break;case"defaultValue":x=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ee(e,n,d,c,l,f)}yd(e,N,x);return;case"option":for(var W in a)if(N=a[W],a.hasOwnProperty(W)&&N!=null&&!l.hasOwnProperty(W))switch(W){case"selected":e.selected=!1;break;default:Ee(e,n,W,null,l,N)}for(y in l)if(N=l[y],x=a[y],l.hasOwnProperty(y)&&N!==x&&(N!=null||x!=null))switch(y){case"selected":e.selected=N&&typeof N!="function"&&typeof N!="symbol";break;default:Ee(e,n,y,N,l,x)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var G in a)N=a[G],a.hasOwnProperty(G)&&N!=null&&!l.hasOwnProperty(G)&&Ee(e,n,G,null,l,N);for(R in l)if(N=l[R],x=a[R],l.hasOwnProperty(R)&&N!==x&&(N!=null||x!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(r(137,n));break;default:Ee(e,n,R,N,l,x)}return;default:if(hc(n)){for(var be in a)N=a[be],a.hasOwnProperty(be)&&N!==void 0&&!l.hasOwnProperty(be)&&Wu(e,n,be,void 0,l,N);for(D in l)N=l[D],x=a[D],!l.hasOwnProperty(D)||N===x||N===void 0&&x===void 0||Wu(e,n,D,N,l,x);return}}for(var w in a)N=a[w],a.hasOwnProperty(w)&&N!=null&&!l.hasOwnProperty(w)&&Ee(e,n,w,null,l,N);for(M in l)N=l[M],x=a[M],!l.hasOwnProperty(M)||N===x||N==null&&x==null||Ee(e,n,M,N,l,x)}var Zu=null,Ju=null;function Yl(e){return e.nodeType===9?e:e.ownerDocument}function Eg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function bg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function $u(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ef=null;function Ob(){var e=window.event;return e&&e.type==="popstate"?e===ef?!1:(ef=e,!0):(ef=null,!1)}var Sg=typeof setTimeout=="function"?setTimeout:void 0,Db=typeof clearTimeout=="function"?clearTimeout:void 0,Tg=typeof Promise=="function"?Promise:void 0,Ib=typeof queueMicrotask=="function"?queueMicrotask:typeof Tg<"u"?function(e){return Tg.resolve(null).then(e).catch(Mb)}:Sg;function Mb(e){setTimeout(function(){throw e})}function ii(e){return e==="head"}function Cg(e,n){var a=n,l=0,c=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<l&&8>l){a=l;var d=e.ownerDocument;if(a&1&&Ja(d.documentElement),a&2&&Ja(d.body),a&4)for(a=d.head,Ja(a),d=a.firstChild;d;){var _=d.nextSibling,y=d.nodeName;d[da]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=_}}if(c===0){e.removeChild(f),rr(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:l=a.charCodeAt(0)-48;else l=0;a=f}while(a);rr(n)}function tf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":tf(a),rc(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function kb(e,n,a,l){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[da])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Wt(e.nextSibling),e===null)break}return null}function Lb(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Wt(e.nextSibling),e===null))return null;return e}function nf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Ub(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var l=function(){n(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Wt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var sf=null;function wg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function Ag(e,n,a){switch(n=Yl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Ja(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);rc(e)}var Yt=new Map,Rg=new Set;function Fl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var An=B.d;B.d={f:zb,r:Hb,D:Bb,C:jb,L:Pb,m:qb,X:Gb,S:Vb,M:Yb};function zb(){var e=An.f(),n=zl();return e||n}function Hb(e){var n=as(e);n!==null&&n.tag===5&&n.type==="form"?Qm(n):An.r(e)}var Bs=typeof document>"u"?null:document;function Ng(e,n,a){var l=Bs;if(l&&typeof n=="string"&&n){var c=Ht(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Rg.has(c)||(Rg.add(c),e={rel:e,crossOrigin:a,href:n},l.querySelector(c)===null&&(n=l.createElement("link"),st(n,"link",e),Ke(n),l.head.appendChild(n)))}}function Bb(e){An.D(e),Ng("dns-prefetch",e,null)}function jb(e,n){An.C(e,n),Ng("preconnect",e,n)}function Pb(e,n,a){An.L(e,n,a);var l=Bs;if(l&&e&&n){var c='link[rel="preload"][as="'+Ht(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Ht(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Ht(a.imageSizes)+'"]')):c+='[href="'+Ht(e)+'"]';var f=c;switch(n){case"style":f=js(e);break;case"script":f=Ps(e)}Yt.has(f)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Yt.set(f,e),l.querySelector(c)!==null||n==="style"&&l.querySelector($a(f))||n==="script"&&l.querySelector(er(f))||(n=l.createElement("link"),st(n,"link",e),Ke(n),l.head.appendChild(n)))}}function qb(e,n){An.m(e,n);var a=Bs;if(a&&e){var l=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Ht(l)+'"][href="'+Ht(e)+'"]',f=c;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Ps(e)}if(!Yt.has(f)&&(e=v({rel:"modulepreload",href:e},n),Yt.set(f,e),a.querySelector(c)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(er(f)))return}l=a.createElement("link"),st(l,"link",e),Ke(l),a.head.appendChild(l)}}}function Vb(e,n,a){An.S(e,n,a);var l=Bs;if(l&&e){var c=rs(l).hoistableStyles,f=js(e);n=n||"default";var d=c.get(f);if(!d){var _={loading:0,preload:null};if(d=l.querySelector($a(f)))_.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Yt.get(f))&&af(e,a);var y=d=l.createElement("link");Ke(y),st(y,"link",e),y._p=new Promise(function(R,D){y.onload=R,y.onerror=D}),y.addEventListener("load",function(){_.loading|=1}),y.addEventListener("error",function(){_.loading|=2}),_.loading|=4,Ql(d,n,l)}d={type:"stylesheet",instance:d,count:1,state:_},c.set(f,d)}}}function Gb(e,n){An.X(e,n);var a=Bs;if(a&&e){var l=rs(a).hoistableScripts,c=Ps(e),f=l.get(c);f||(f=a.querySelector(er(c)),f||(e=v({src:e,async:!0},n),(n=Yt.get(c))&&rf(e,n),f=a.createElement("script"),Ke(f),st(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(c,f))}}function Yb(e,n){An.M(e,n);var a=Bs;if(a&&e){var l=rs(a).hoistableScripts,c=Ps(e),f=l.get(c);f||(f=a.querySelector(er(c)),f||(e=v({src:e,async:!0,type:"module"},n),(n=Yt.get(c))&&rf(e,n),f=a.createElement("script"),Ke(f),st(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(c,f))}}function xg(e,n,a,l){var c=(c=ee.current)?Fl(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=js(a.href),a=rs(c).hoistableStyles,l=a.get(n),l||(l={type:"style",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=js(a.href);var f=rs(c).hoistableStyles,d=f.get(e);if(d||(c=c.ownerDocument||c,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,d),(f=c.querySelector($a(e)))&&!f._p&&(d.instance=f,d.state.loading=5),Yt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Yt.set(e,a),f||Fb(c,e,a,d.state))),n&&l===null)throw Error(r(528,""));return d}if(n&&l!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ps(a),a=rs(c).hoistableScripts,l=a.get(n),l||(l={type:"script",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function js(e){return'href="'+Ht(e)+'"'}function $a(e){return'link[rel="stylesheet"]['+e+"]"}function Og(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function Fb(e,n,a,l){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=e.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),st(n,"link",a),Ke(n),e.head.appendChild(n))}function Ps(e){return'[src="'+Ht(e)+'"]'}function er(e){return"script[async]"+e}function Dg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var l=e.querySelector('style[data-href~="'+Ht(a.href)+'"]');if(l)return n.instance=l,Ke(l),l;var c=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ke(l),st(l,"style",c),Ql(l,a.precedence,e),n.instance=l;case"stylesheet":c=js(a.href);var f=e.querySelector($a(c));if(f)return n.state.loading|=4,n.instance=f,Ke(f),f;l=Og(a),(c=Yt.get(c))&&af(l,c),f=(e.ownerDocument||e).createElement("link"),Ke(f);var d=f;return d._p=new Promise(function(_,y){d.onload=_,d.onerror=y}),st(f,"link",l),n.state.loading|=4,Ql(f,a.precedence,e),n.instance=f;case"script":return f=Ps(a.src),(c=e.querySelector(er(f)))?(n.instance=c,Ke(c),c):(l=a,(c=Yt.get(f))&&(l=v({},a),rf(l,c)),e=e.ownerDocument||e,c=e.createElement("script"),Ke(c),st(c,"link",l),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,Ql(l,a.precedence,e));return n.instance}function Ql(e,n,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=l.length?l[l.length-1]:null,f=c,d=0;d<l.length;d++){var _=l[d];if(_.dataset.precedence===n)f=_;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function af(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function rf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Kl=null;function Ig(e,n,a){if(Kl===null){var l=new Map,c=Kl=new Map;c.set(a,l)}else c=Kl,l=c.get(a),l||(l=new Map,c.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[da]||f[ct]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var d=f.getAttribute(n)||"";d=e+d;var _=l.get(d);_?_.push(f):l.set(d,[f])}}return l}function Mg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Qb(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function kg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var tr=null;function Kb(){}function Xb(e,n,a){if(tr===null)throw Error(r(475));var l=tr;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=js(a.href),f=e.querySelector($a(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Xl.bind(l),e.then(l,l)),n.state.loading|=4,n.instance=f,Ke(f);return}f=e.ownerDocument||e,a=Og(a),(c=Yt.get(c))&&af(a,c),f=f.createElement("link"),Ke(f);var d=f;d._p=new Promise(function(_,y){d.onload=_,d.onerror=y}),st(f,"link",a),n.instance=f}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(l.count++,n=Xl.bind(l),e.addEventListener("load",n),e.addEventListener("error",n))}}function Wb(){if(tr===null)throw Error(r(475));var e=tr;return e.stylesheets&&e.count===0&&lf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&lf(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Xl(){if(this.count--,this.count===0){if(this.stylesheets)lf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Wl=null;function lf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Wl=new Map,n.forEach(Zb,e),Wl=null,Xl.call(e))}function Zb(e,n){if(!(n.state.loading&4)){var a=Wl.get(e);if(a)var l=a.get(null);else{a=new Map,Wl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var d=c[f];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(a.set(d.dataset.precedence,d),l=d)}l&&a.set(null,l)}c=n.instance,d=c.getAttribute("data-precedence"),f=a.get(d)||l,f===l&&a.set(null,c),a.set(d,c),this.count++,l=Xl.bind(this),c.addEventListener("load",l),c.addEventListener("error",l),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var nr={$$typeof:ue,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function Jb(e,n,a,l,c,f,d,_){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=nc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nc(0),this.hiddenUpdates=nc(null),this.identifierPrefix=l,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=_,this.incompleteTransitions=new Map}function Lg(e,n,a,l,c,f,d,_,y,R,D,M){return e=new Jb(e,n,a,d,_,y,R,M),n=1,f===!0&&(n|=24),f=Dt(3,null,null,n),e.current=f,f.stateNode=e,n=Pc(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:l,isDehydrated:a,cache:n},Yc(f),e}function Ug(e){return e?(e=ys,e):ys}function zg(e,n,a,l,c,f){c=Ug(c),l.context===null?l.context=c:l.pendingContext=c,l=Gn(n),l.payload={element:a},f=f===void 0?null:f,f!==null&&(l.callback=f),a=Yn(e,l,n),a!==null&&(Ut(a,e,n),Ia(a,e,n))}function Hg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function of(e,n){Hg(e,n),(e=e.alternate)&&Hg(e,n)}function Bg(e){if(e.tag===13){var n=_s(e,67108864);n!==null&&Ut(n,e,67108864),of(e,67108864)}}var Zl=!0;function $b(e,n,a,l){var c=O.T;O.T=null;var f=B.p;try{B.p=2,cf(e,n,a,l)}finally{B.p=f,O.T=c}}function eS(e,n,a,l){var c=O.T;O.T=null;var f=B.p;try{B.p=8,cf(e,n,a,l)}finally{B.p=f,O.T=c}}function cf(e,n,a,l){if(Zl){var c=uf(l);if(c===null)Xu(e,n,l,Jl,a),Pg(e,l);else if(nS(c,e,n,a,l))l.stopPropagation();else if(Pg(e,l),n&4&&-1<tS.indexOf(e)){for(;c!==null;){var f=as(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var d=wi(f.pendingLanes);if(d!==0){var _=f;for(_.pendingLanes|=2,_.entangledLanes|=2;d;){var y=1<<31-xt(d);_.entanglements[1]|=y,d&=~y}cn(f),(_e&6)===0&&(Ll=sn()+500,Xa(0))}}break;case 13:_=_s(f,2),_!==null&&Ut(_,f,2),zl(),of(f,2)}if(f=uf(l),f===null&&Xu(e,n,l,Jl,a),f===c)break;c=f}c!==null&&l.stopPropagation()}else Xu(e,n,l,null,a)}}function uf(e){return e=mc(e),ff(e)}var Jl=null;function ff(e){if(Jl=null,e=ss(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Jl=e,null}function jg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(j0()){case ed:return 2;case td:return 8;case Gr:case P0:return 32;case nd:return 268435456;default:return 32}default:return 32}}var hf=!1,si=null,ai=null,ri=null,ir=new Map,sr=new Map,li=[],tS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Pg(e,n){switch(e){case"focusin":case"focusout":si=null;break;case"dragenter":case"dragleave":ai=null;break;case"mouseover":case"mouseout":ri=null;break;case"pointerover":case"pointerout":ir.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":sr.delete(n.pointerId)}}function ar(e,n,a,l,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:l,nativeEvent:f,targetContainers:[c]},n!==null&&(n=as(n),n!==null&&Bg(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function nS(e,n,a,l,c){switch(n){case"focusin":return si=ar(si,e,n,a,l,c),!0;case"dragenter":return ai=ar(ai,e,n,a,l,c),!0;case"mouseover":return ri=ar(ri,e,n,a,l,c),!0;case"pointerover":var f=c.pointerId;return ir.set(f,ar(ir.get(f)||null,e,n,a,l,c)),!0;case"gotpointercapture":return f=c.pointerId,sr.set(f,ar(sr.get(f)||null,e,n,a,l,c)),!0}return!1}function qg(e){var n=ss(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,X0(e.priority,function(){if(a.tag===13){var l=Lt();l=ic(l);var c=_s(a,l);c!==null&&Ut(c,a,l),of(a,l)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $l(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=uf(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);dc=l,a.target.dispatchEvent(l),dc=null}else return n=as(a),n!==null&&Bg(n),e.blockedOn=a,!1;n.shift()}return!0}function Vg(e,n,a){$l(e)&&a.delete(n)}function iS(){hf=!1,si!==null&&$l(si)&&(si=null),ai!==null&&$l(ai)&&(ai=null),ri!==null&&$l(ri)&&(ri=null),ir.forEach(Vg),sr.forEach(Vg)}function eo(e,n){e.blockedOn===n&&(e.blockedOn=null,hf||(hf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,iS)))}var to=null;function Gg(e){to!==e&&(to=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){to===e&&(to=null);for(var n=0;n<e.length;n+=3){var a=e[n],l=e[n+1],c=e[n+2];if(typeof l!="function"){if(ff(l||a)===null)continue;break}var f=as(a);f!==null&&(e.splice(n,3),n-=3,uu(f,{pending:!0,data:c,method:a.method,action:l},l,c))}}))}function rr(e){function n(y){return eo(y,e)}si!==null&&eo(si,e),ai!==null&&eo(ai,e),ri!==null&&eo(ri,e),ir.forEach(n),sr.forEach(n);for(var a=0;a<li.length;a++){var l=li[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<li.length&&(a=li[0],a.blockedOn===null);)qg(a),a.blockedOn===null&&li.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var c=a[l],f=a[l+1],d=c[yt]||null;if(typeof f=="function")d||Gg(a);else if(d){var _=null;if(f&&f.hasAttribute("formAction")){if(c=f,d=f[yt]||null)_=d.formAction;else if(ff(c)!==null)continue}else _=d.action;typeof _=="function"?a[l+1]=_:(a.splice(l,3),l-=3),Gg(a)}}}function df(e){this._internalRoot=e}no.prototype.render=df.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,l=Lt();zg(a,l,e,n,null,null)},no.prototype.unmount=df.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;zg(e.current,2,null,e,null,null),zl(),n[is]=null}};function no(e){this._internalRoot=e}no.prototype.unstable_scheduleHydration=function(e){if(e){var n=ld();e={blockedOn:null,target:e,priority:n};for(var a=0;a<li.length&&n!==0&&n<li[a].priority;a++);li.splice(a,0,e),a===0&&qg(e)}};var Yg=t.version;if(Yg!=="19.1.1")throw Error(r(527,Yg,"19.1.1"));B.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=g(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var sS={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!io.isDisabled&&io.supportsFiber)try{ua=io.inject(sS),Nt=io}catch{}}return or.createRoot=function(e,n){if(!o(e))throw Error(r(299));var a=!1,l="",c=lp,f=op,d=cp,_=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(d=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(_=n.unstable_transitionCallbacks)),n=Lg(e,1,!1,null,null,a,l,c,f,d,_,null),e[is]=n.current,Ku(e),new df(n)},or.hydrateRoot=function(e,n,a){if(!o(e))throw Error(r(299));var l=!1,c="",f=lp,d=op,_=cp,y=null,R=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(d=a.onCaughtError),a.onRecoverableError!==void 0&&(_=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(y=a.unstable_transitionCallbacks),a.formState!==void 0&&(R=a.formState)),n=Lg(e,1,!0,n,a??null,l,c,f,d,_,y,R),n.context=Ug(null),a=n.current,l=Lt(),l=ic(l),c=Gn(l),c.callback=null,Yn(a,c,l),a=l,n.current.lanes=a,ha(n,a),cn(n),e[is]=n.current,Ku(e),new no(n)},or.version="19.1.1",or}var t_;function pS(){if(t_)return gf.exports;t_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),gf.exports=mS(),gf.exports}var gS=pS();const _S=Ey(gS),yS=()=>{};var n_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U=function(s,t){if(!s)throw na(t)},na=function(s){return new Error("Firebase Database ("+by.SDK_VERSION+") INTERNAL ASSERT FAILED: "+s)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy=function(s){const t=[];let i=0;for(let r=0;r<s.length;r++){let o=s.charCodeAt(r);o<128?t[i++]=o:o<2048?(t[i++]=o>>6|192,t[i++]=o&63|128):(o&64512)===55296&&r+1<s.length&&(s.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(s.charCodeAt(++r)&1023),t[i++]=o>>18|240,t[i++]=o>>12&63|128,t[i++]=o>>6&63|128,t[i++]=o&63|128):(t[i++]=o>>12|224,t[i++]=o>>6&63|128,t[i++]=o&63|128)}return t},vS=function(s){const t=[];let i=0,r=0;for(;i<s.length;){const o=s[i++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const u=s[i++];t[r++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=s[i++],h=s[i++],m=s[i++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;t[r++]=String.fromCharCode(55296+(g>>10)),t[r++]=String.fromCharCode(56320+(g&1023))}else{const u=s[i++],h=s[i++];t[r++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return t.join("")},ah={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,t){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<s.length;o+=3){const u=s[o],h=o+1<s.length,m=h?s[o+1]:0,g=o+2<s.length,p=g?s[o+2]:0,v=u>>2,b=(u&3)<<4|m>>4;let E=(m&15)<<2|p>>6,L=p&63;g||(L=64,h||(E=64)),r.push(i[v],i[b],i[E],i[L])}return r.join("")},encodeString(s,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(s):this.encodeByteArray(Sy(s),t)},decodeString(s,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(s):vS(this.decodeStringToByteArray(s,t))},decodeStringToByteArray(s,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<s.length;){const u=i[s.charAt(o++)],m=o<s.length?i[s.charAt(o)]:0;++o;const p=o<s.length?i[s.charAt(o)]:64;++o;const b=o<s.length?i[s.charAt(o)]:64;if(++o,u==null||m==null||p==null||b==null)throw new ES;const E=u<<2|m>>4;if(r.push(E),p!==64){const L=m<<4&240|p>>2;if(r.push(L),b!==64){const z=p<<6&192|b;r.push(z)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class ES extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ty=function(s){const t=Sy(s);return ah.encodeByteArray(t,!0)},po=function(s){return Ty(s).replace(/\./g,"")},go=function(s){try{return ah.decodeString(s,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bS(s){return Cy(void 0,s)}function Cy(s,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const i=t;return new Date(i.getTime());case Object:s===void 0&&(s={});break;case Array:s=[];break;default:return t}for(const i in t)!t.hasOwnProperty(i)||!SS(i)||(s[i]=Cy(s[i],t[i]));return s}function SS(s){return s!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS=()=>TS().__FIREBASE_DEFAULTS__,wS=()=>{if(typeof process>"u"||typeof n_>"u")return;const s=n_.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},AS=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=s&&go(s[1]);return t&&JSON.parse(t)},rh=()=>{try{return yS()||CS()||wS()||AS()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},wy=s=>{var t,i;return(i=(t=rh())==null?void 0:t.emulatorHosts)==null?void 0:i[s]},RS=s=>{const t=wy(s);if(!t)return;const i=t.lastIndexOf(":");if(i<=0||i+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(i+1),10);return t[0]==="["?[t.substring(1,i-1),r]:[t.substring(0,i),r]},Ay=()=>{var s;return(s=rh())==null?void 0:s.config},Ry=s=>{var t;return(t=rh())==null?void 0:t[`_${s}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}wrapCallback(t){return(i,r)=>{i?this.reject(i):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(i):t(i,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(s){try{return(s.startsWith("http://")||s.startsWith("https://")?new URL(s).hostname:s).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ny(s){return(await fetch(s,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NS(s,t){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},r=t||"demo-project",o=s.iat||0,u=s.sub||s.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...s};return[po(JSON.stringify(i)),po(JSON.stringify(h)),""].join(".")}const pr={};function xS(){const s={prod:[],emulator:[]};for(const t of Object.keys(pr))pr[t]?s.emulator.push(t):s.prod.push(t);return s}function OS(s){let t=document.getElementById(s),i=!1;return t||(t=document.createElement("div"),t.setAttribute("id",s),i=!0),{created:i,element:t}}let i_=!1;function xy(s,t){if(typeof window>"u"||typeof document>"u"||!ia(window.location.host)||pr[s]===t||pr[s]||i_)return;pr[s]=t;function i(E){return`__firebase__banner__${E}`}const r="__firebase__banner",u=xS().prod.length>0;function h(){const E=document.getElementById(r);E&&E.remove()}function m(E){E.style.display="flex",E.style.background="#7faaf0",E.style.position="fixed",E.style.bottom="5px",E.style.left="5px",E.style.padding=".5em",E.style.borderRadius="5px",E.style.alignItems="center"}function g(E,L){E.setAttribute("width","24"),E.setAttribute("id",L),E.setAttribute("height","24"),E.setAttribute("viewBox","0 0 24 24"),E.setAttribute("fill","none"),E.style.marginLeft="-6px"}function p(){const E=document.createElement("span");return E.style.cursor="pointer",E.style.marginLeft="16px",E.style.fontSize="24px",E.innerHTML=" &times;",E.onclick=()=>{i_=!0,h()},E}function v(E,L){E.setAttribute("id",L),E.innerText="Learn more",E.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",E.setAttribute("target","__blank"),E.style.paddingLeft="5px",E.style.textDecoration="underline"}function b(){const E=OS(r),L=i("text"),z=document.getElementById(L)||document.createElement("span"),Q=i("learnmore"),J=document.getElementById(Q)||document.createElement("a"),Te=i("preprendIcon"),Y=document.getElementById(Te)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(E.created){const ue=E.element;m(ue),v(J,Q);const $=p();g(Y,Te),ue.append(Y,z,J,$),document.body.appendChild(ue)}u?(z.innerText="Preview backend disconnected.",Y.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Y.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,z.innerText="Preview backend running in this workspace."),z.setAttribute("id",L)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",b):b()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gt())}function DS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function IS(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function Oy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function MS(){const s=gt();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function kS(){return by.NODE_ADMIN===!0}function LS(){try{return typeof indexedDB=="object"}catch{return!1}}function US(){return new Promise((s,t)=>{try{let i=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),i||self.indexedDB.deleteDatabase(r),s(!0)},o.onupgradeneeded=()=>{i=!1},o.onerror=()=>{var u;t(((u=o.error)==null?void 0:u.message)||"")}}catch(i){t(i)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS="FirebaseError";class bi extends Error{constructor(t,i,r){super(i),this.code=t,this.customData=r,this.name=zS,Object.setPrototypeOf(this,bi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mr.prototype.create)}}class Mr{constructor(t,i,r){this.service=t,this.serviceName=i,this.errors=r}create(t,...i){const r=i[0]||{},o=`${this.service}/${t}`,u=this.errors[t],h=u?HS(u,r):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new bi(o,m,r)}}function HS(s,t){return s.replace(BS,(i,r)=>{const o=t[r];return o!=null?String(o):`<${r}?>`})}const BS=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(s){return JSON.parse(s)}function et(s){return JSON.stringify(s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy=function(s){let t={},i={},r={},o="";try{const u=s.split(".");t=Sr(go(u[0])||""),i=Sr(go(u[1])||""),o=u[2],r=i.d||{},delete i.d}catch{}return{header:t,claims:i,data:r,signature:o}},jS=function(s){const t=Dy(s),i=t.claims;return!!i&&typeof i=="object"&&i.hasOwnProperty("iat")},PS=function(s){const t=Dy(s).claims;return typeof t=="object"&&t.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(s,t){return Object.prototype.hasOwnProperty.call(s,t)}function Zs(s,t){if(Object.prototype.hasOwnProperty.call(s,t))return s[t]}function Uf(s){for(const t in s)if(Object.prototype.hasOwnProperty.call(s,t))return!1;return!0}function _o(s,t,i){const r={};for(const o in s)Object.prototype.hasOwnProperty.call(s,o)&&(r[o]=t.call(i,s[o],o,s));return r}function Qi(s,t){if(s===t)return!0;const i=Object.keys(s),r=Object.keys(t);for(const o of i){if(!r.includes(o))return!1;const u=s[o],h=t[o];if(s_(u)&&s_(h)){if(!Qi(u,h))return!1}else if(u!==h)return!1}for(const o of r)if(!i.includes(o))return!1;return!0}function s_(s){return s!==null&&typeof s=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(s){const t=[];for(const[i,r]of Object.entries(s))Array.isArray(r)?r.forEach(o=>{t.push(encodeURIComponent(i)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(i)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function dr(s){const t={};return s.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[o,u]=r.split("=");t[decodeURIComponent(o)]=decodeURIComponent(u)}}),t}function mr(s){const t=s.indexOf("?");if(!t)return"";const i=s.indexOf("#",t);return s.substring(t,i>0?i:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,i){i||(i=0);const r=this.W_;if(typeof t=="string")for(let b=0;b<16;b++)r[b]=t.charCodeAt(i)<<24|t.charCodeAt(i+1)<<16|t.charCodeAt(i+2)<<8|t.charCodeAt(i+3),i+=4;else for(let b=0;b<16;b++)r[b]=t[i]<<24|t[i+1]<<16|t[i+2]<<8|t[i+3],i+=4;for(let b=16;b<80;b++){const E=r[b-3]^r[b-8]^r[b-14]^r[b-16];r[b]=(E<<1|E>>>31)&4294967295}let o=this.chain_[0],u=this.chain_[1],h=this.chain_[2],m=this.chain_[3],g=this.chain_[4],p,v;for(let b=0;b<80;b++){b<40?b<20?(p=m^u&(h^m),v=1518500249):(p=u^h^m,v=1859775393):b<60?(p=u&h|m&(u|h),v=2400959708):(p=u^h^m,v=3395469782);const E=(o<<5|o>>>27)+p+g+v+r[b]&4294967295;g=m,m=h,h=(u<<30|u>>>2)&4294967295,u=o,o=E}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+m&4294967295,this.chain_[4]=this.chain_[4]+g&4294967295}update(t,i){if(t==null)return;i===void 0&&(i=t.length);const r=i-this.blockSize;let o=0;const u=this.buf_;let h=this.inbuf_;for(;o<i;){if(h===0)for(;o<=r;)this.compress_(t,o),o+=this.blockSize;if(typeof t=="string"){for(;o<i;)if(u[h]=t.charCodeAt(o),++h,++o,h===this.blockSize){this.compress_(u),h=0;break}}else for(;o<i;)if(u[h]=t[o],++h,++o,h===this.blockSize){this.compress_(u),h=0;break}}this.inbuf_=h,this.total_+=i}digest(){const t=[];let i=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=i&255,i/=256;this.compress_(this.buf_);let r=0;for(let o=0;o<5;o++)for(let u=24;u>=0;u-=8)t[r]=this.chain_[o]>>u&255,++r;return t}}function VS(s,t){const i=new GS(s,t);return i.subscribe.bind(i)}class GS{constructor(t,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(i=>{i.next(t)})}error(t){this.forEachObserver(i=>{i.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,i,r){let o;if(t===void 0&&i===void 0&&r===void 0)throw new Error("Missing Observer.");YS(t,["next","error","complete"])?o=t:o={next:t,error:i,complete:r},o.next===void 0&&(o.next=Ef),o.error===void 0&&(o.error=Ef),o.complete===void 0&&(o.complete=Ef);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,t)}sendOne(t,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{i(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function YS(s,t){if(typeof s!="object"||s===null)return!1;for(const i of t)if(i in s&&typeof s[i]=="function")return!0;return!1}function Ef(){}function oh(s,t){return`${s} failed: ${t} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS=function(s){const t=[];let i=0;for(let r=0;r<s.length;r++){let o=s.charCodeAt(r);if(o>=55296&&o<=56319){const u=o-55296;r++,U(r<s.length,"Surrogate pair missing trail surrogate.");const h=s.charCodeAt(r)-56320;o=65536+(u<<10)+h}o<128?t[i++]=o:o<2048?(t[i++]=o>>6|192,t[i++]=o&63|128):o<65536?(t[i++]=o>>12|224,t[i++]=o>>6&63|128,t[i++]=o&63|128):(t[i++]=o>>18|240,t[i++]=o>>12&63|128,t[i++]=o>>6&63|128,t[i++]=o&63|128)}return t},jo=function(s){let t=0;for(let i=0;i<s.length;i++){const r=s.charCodeAt(i);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,i++):t+=3}return t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(s){return s&&s._delegate?s._delegate:s}class Ki{constructor(t,i,r){this.name=t,this.instanceFactory=i,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(t,i){this.name=t,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const i=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(i)){const r=new Bo;if(this.instancesDeferred.set(i,r),this.isInitialized(i)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:i});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(t){const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(XS(t))try{this.getOrInitializeService({instanceIdentifier:Vi})}catch{}for(const[i,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);try{const u=this.getOrInitializeService({instanceIdentifier:o});r.resolve(u)}catch{}}}}clearInstance(t=Vi){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...t.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Vi){return this.instances.has(t)}getOptions(t=Vi){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:i={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:i});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);r===m&&h.resolve(o)}return o}onInit(t,i){const r=this.normalizeInstanceIdentifier(i),o=this.onInitCallbacks.get(r)??new Set;o.add(t),this.onInitCallbacks.set(r,o);const u=this.instances.get(r);return u&&t(u,r),()=>{o.delete(t)}}invokeOnInitCallbacks(t,i){const r=this.onInitCallbacks.get(i);if(r)for(const o of r)try{o(t,i)}catch{}}getOrInitializeService({instanceIdentifier:t,options:i={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:KS(t),options:i}),this.instances.set(t,r),this.instancesOptions.set(t,i),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Vi){return this.component?this.component.multipleInstances?t:Vi:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function KS(s){return s===Vi?void 0:s}function XS(s){return s.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const i=this.getProvider(t.name);if(i.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);i.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const i=new QS(t,this);return this.providers.set(t,i),i}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Se;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(Se||(Se={}));const ZS={debug:Se.DEBUG,verbose:Se.VERBOSE,info:Se.INFO,warn:Se.WARN,error:Se.ERROR,silent:Se.SILENT},JS=Se.INFO,$S={[Se.DEBUG]:"log",[Se.VERBOSE]:"log",[Se.INFO]:"info",[Se.WARN]:"warn",[Se.ERROR]:"error"},eT=(s,t,...i)=>{if(t<s.logLevel)return;const r=new Date().toISOString(),o=$S[t];if(o)console[o](`[${r}]  ${s.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ch{constructor(t){this.name=t,this._logLevel=JS,this._logHandler=eT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Se))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ZS[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Se.DEBUG,...t),this._logHandler(this,Se.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Se.VERBOSE,...t),this._logHandler(this,Se.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Se.INFO,...t),this._logHandler(this,Se.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Se.WARN,...t),this._logHandler(this,Se.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Se.ERROR,...t),this._logHandler(this,Se.ERROR,...t)}}const tT=(s,t)=>t.some(i=>s instanceof i);let a_,r_;function nT(){return a_||(a_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function iT(){return r_||(r_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Iy=new WeakMap,zf=new WeakMap,My=new WeakMap,bf=new WeakMap,uh=new WeakMap;function sT(s){const t=new Promise((i,r)=>{const o=()=>{s.removeEventListener("success",u),s.removeEventListener("error",h)},u=()=>{i(pi(s.result)),o()},h=()=>{r(s.error),o()};s.addEventListener("success",u),s.addEventListener("error",h)});return t.then(i=>{i instanceof IDBCursor&&Iy.set(i,s)}).catch(()=>{}),uh.set(t,s),t}function aT(s){if(zf.has(s))return;const t=new Promise((i,r)=>{const o=()=>{s.removeEventListener("complete",u),s.removeEventListener("error",h),s.removeEventListener("abort",h)},u=()=>{i(),o()},h=()=>{r(s.error||new DOMException("AbortError","AbortError")),o()};s.addEventListener("complete",u),s.addEventListener("error",h),s.addEventListener("abort",h)});zf.set(s,t)}let Hf={get(s,t,i){if(s instanceof IDBTransaction){if(t==="done")return zf.get(s);if(t==="objectStoreNames")return s.objectStoreNames||My.get(s);if(t==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return pi(s[t])},set(s,t,i){return s[t]=i,!0},has(s,t){return s instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in s}};function rT(s){Hf=s(Hf)}function lT(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...i){const r=s.call(Sf(this),t,...i);return My.set(r,t.sort?t.sort():[t]),pi(r)}:iT().includes(s)?function(...t){return s.apply(Sf(this),t),pi(Iy.get(this))}:function(...t){return pi(s.apply(Sf(this),t))}}function oT(s){return typeof s=="function"?lT(s):(s instanceof IDBTransaction&&aT(s),tT(s,nT())?new Proxy(s,Hf):s)}function pi(s){if(s instanceof IDBRequest)return sT(s);if(bf.has(s))return bf.get(s);const t=oT(s);return t!==s&&(bf.set(s,t),uh.set(t,s)),t}const Sf=s=>uh.get(s);function cT(s,t,{blocked:i,upgrade:r,blocking:o,terminated:u}={}){const h=indexedDB.open(s,t),m=pi(h);return r&&h.addEventListener("upgradeneeded",g=>{r(pi(h.result),g.oldVersion,g.newVersion,pi(h.transaction),g)}),i&&h.addEventListener("blocked",g=>i(g.oldVersion,g.newVersion,g)),m.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",p=>o(p.oldVersion,p.newVersion,p))}).catch(()=>{}),m}const uT=["get","getKey","getAll","getAllKeys","count"],fT=["put","add","delete","clear"],Tf=new Map;function l_(s,t){if(!(s instanceof IDBDatabase&&!(t in s)&&typeof t=="string"))return;if(Tf.get(t))return Tf.get(t);const i=t.replace(/FromIndex$/,""),r=t!==i,o=fT.includes(i);if(!(i in(r?IDBIndex:IDBObjectStore).prototype)||!(o||uT.includes(i)))return;const u=async function(h,...m){const g=this.transaction(h,o?"readwrite":"readonly");let p=g.store;return r&&(p=p.index(m.shift())),(await Promise.all([p[i](...m),o&&g.done]))[0]};return Tf.set(t,u),u}rT(s=>({...s,get:(t,i,r)=>l_(t,i)||s.get(t,i,r),has:(t,i)=>!!l_(t,i)||s.has(t,i)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(dT(i)){const r=i.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(i=>i).join(" ")}}function dT(s){const t=s.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Bf="@firebase/app",o_="0.14.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=new ch("@firebase/app"),mT="@firebase/app-compat",pT="@firebase/analytics-compat",gT="@firebase/analytics",_T="@firebase/app-check-compat",yT="@firebase/app-check",vT="@firebase/auth",ET="@firebase/auth-compat",bT="@firebase/database",ST="@firebase/data-connect",TT="@firebase/database-compat",CT="@firebase/functions",wT="@firebase/functions-compat",AT="@firebase/installations",RT="@firebase/installations-compat",NT="@firebase/messaging",xT="@firebase/messaging-compat",OT="@firebase/performance",DT="@firebase/performance-compat",IT="@firebase/remote-config",MT="@firebase/remote-config-compat",kT="@firebase/storage",LT="@firebase/storage-compat",UT="@firebase/firestore",zT="@firebase/ai",HT="@firebase/firestore-compat",BT="firebase",jT="12.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf="[DEFAULT]",PT={[Bf]:"fire-core",[mT]:"fire-core-compat",[gT]:"fire-analytics",[pT]:"fire-analytics-compat",[yT]:"fire-app-check",[_T]:"fire-app-check-compat",[vT]:"fire-auth",[ET]:"fire-auth-compat",[bT]:"fire-rtdb",[ST]:"fire-data-connect",[TT]:"fire-rtdb-compat",[CT]:"fire-fn",[wT]:"fire-fn-compat",[AT]:"fire-iid",[RT]:"fire-iid-compat",[NT]:"fire-fcm",[xT]:"fire-fcm-compat",[OT]:"fire-perf",[DT]:"fire-perf-compat",[IT]:"fire-rc",[MT]:"fire-rc-compat",[kT]:"fire-gcs",[LT]:"fire-gcs-compat",[UT]:"fire-fst",[HT]:"fire-fst-compat",[zT]:"fire-vertex","fire-js":"fire-js",[BT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=new Map,qT=new Map,Pf=new Map;function c_(s,t){try{s.container.addComponent(t)}catch(i){In.debug(`Component ${t.name} failed to register with FirebaseApp ${s.name}`,i)}}function Js(s){const t=s.name;if(Pf.has(t))return In.debug(`There were multiple attempts to register component ${t}.`),!1;Pf.set(t,s);for(const i of yo.values())c_(i,s);for(const i of qT.values())c_(i,s);return!0}function fh(s,t){const i=s.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),s.container.getProvider(t)}function Qt(s){return s==null?!1:s.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gi=new Mr("app","Firebase",VT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(t,i,r){this._isDeleted=!1,this._options={...t},this._config={...i},this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ki("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw gi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa=jT;function ky(s,t={}){let i=s;typeof t!="object"&&(t={name:t});const r={name:jf,automaticDataCollectionEnabled:!0,...t},o=r.name;if(typeof o!="string"||!o)throw gi.create("bad-app-name",{appName:String(o)});if(i||(i=Ay()),!i)throw gi.create("no-options");const u=yo.get(o);if(u){if(Qi(i,u.options)&&Qi(r,u.config))return u;throw gi.create("duplicate-app",{appName:o})}const h=new WS(o);for(const g of Pf.values())h.addComponent(g);const m=new GT(i,r,h);return yo.set(o,m),m}function Ly(s=jf){const t=yo.get(s);if(!t&&s===jf&&Ay())return ky();if(!t)throw gi.create("no-app",{appName:s});return t}function _i(s,t,i){let r=PT[s]??s;i&&(r+=`-${i}`);const o=r.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const h=[`Unable to register library "${r}" with version "${t}":`];o&&h.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${t}" contains illegal characters (whitespace or "/")`),In.warn(h.join(" "));return}Js(new Ki(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT="firebase-heartbeat-database",FT=1,Tr="firebase-heartbeat-store";let Cf=null;function Uy(){return Cf||(Cf=cT(YT,FT,{upgrade:(s,t)=>{switch(t){case 0:try{s.createObjectStore(Tr)}catch(i){console.warn(i)}}}}).catch(s=>{throw gi.create("idb-open",{originalErrorMessage:s.message})})),Cf}async function QT(s){try{const i=(await Uy()).transaction(Tr),r=await i.objectStore(Tr).get(zy(s));return await i.done,r}catch(t){if(t instanceof bi)In.warn(t.message);else{const i=gi.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});In.warn(i.message)}}}async function u_(s,t){try{const r=(await Uy()).transaction(Tr,"readwrite");await r.objectStore(Tr).put(t,zy(s)),await r.done}catch(i){if(i instanceof bi)In.warn(i.message);else{const r=gi.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});In.warn(r.message)}}}function zy(s){return`${s.name}!${s.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KT=1024,XT=30;class WT{constructor(t){this.container=t,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new JT(i),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,i;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=f_();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)==null?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>XT){const h=$T(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){In.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=f_(),{heartbeatsToSend:r,unsentEntries:o}=ZT(this._heartbeatsCache.heartbeats),u=po(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=i,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(i){return In.warn(i),""}}}function f_(){return new Date().toISOString().substring(0,10)}function ZT(s,t=KT){const i=[];let r=s.slice();for(const o of s){const u=i.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),h_(i)>t){u.dates.pop();break}}else if(i.push({agent:o.agent,dates:[o.date]}),h_(i)>t){i.pop();break}r=r.slice(1)}return{heartbeatsToSend:i,unsentEntries:r}}class JT{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return LS()?US().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await QT(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return u_(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return u_(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function h_(s){return po(JSON.stringify({version:2,heartbeats:s})).length}function $T(s){if(s.length===0)return-1;let t=0,i=s[0].date;for(let r=1;r<s.length;r++)s[r].date<i&&(i=s[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e1(s){Js(new Ki("platform-logger",t=>new hT(t),"PRIVATE")),Js(new Ki("heartbeat",t=>new WT(t),"PRIVATE")),_i(Bf,o_,s),_i(Bf,o_,"esm2020"),_i("fire-js","")}e1("");var t1="firebase",n1="12.2.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_i(t1,n1,"app");function Hy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const i1=Hy,By=new Mr("auth","Firebase",Hy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo=new ch("@firebase/auth");function s1(s,...t){vo.logLevel<=Se.WARN&&vo.warn(`Auth (${aa}): ${s}`,...t)}function co(s,...t){vo.logLevel<=Se.ERROR&&vo.error(`Auth (${aa}): ${s}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(s,...t){throw hh(s,...t)}function un(s,...t){return hh(s,...t)}function jy(s,t,i){const r={...i1(),[t]:i};return new Mr("auth","Firebase",r).create(t,{appName:s.name})}function On(s){return jy(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hh(s,...t){if(typeof s!="string"){const i=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=s.name),s._errorFactory.create(i,...r)}return By.create(s,...t)}function X(s,t,...i){if(!s)throw hh(t,...i)}function Rn(s){const t="INTERNAL ASSERTION FAILED: "+s;throw co(t),new Error(t)}function Mn(s,t){s||Rn(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qf(){var s;return typeof self<"u"&&((s=self.location)==null?void 0:s.href)||""}function a1(){return d_()==="http:"||d_()==="https:"}function d_(){var s;return typeof self<"u"&&((s=self.location)==null?void 0:s.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(a1()||IS()||"connection"in navigator)?navigator.onLine:!0}function l1(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(t,i){this.shortDelay=t,this.longDelay=i,Mn(i>t,"Short delay should be less than long delay!"),this.isMobile=lh()||Oy()}get(){return r1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(s,t){Mn(s.emulator,"Emulator should always be set here");const{url:i}=s.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{static initialize(t,i,r){this.fetchImpl=t,i&&(this.headersImpl=i),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],u1=new kr(3e4,6e4);function Si(s,t){return s.tenantId&&!t.tenantId?{...t,tenantId:s.tenantId}:t}async function Ti(s,t,i,r,o={}){return qy(s,o,async()=>{let u={},h={};r&&(t==="GET"?h=r:u={body:JSON.stringify(r)});const m=sa({key:s.config.apiKey,...h}).slice(1),g=await s._getAdditionalHeaders();g["Content-Type"]="application/json",s.languageCode&&(g["X-Firebase-Locale"]=s.languageCode);const p={method:t,headers:g,...u};return DS()||(p.referrerPolicy="no-referrer"),s.emulatorConfig&&ia(s.emulatorConfig.host)&&(p.credentials="include"),Py.fetch()(await Vy(s,s.config.apiHost,i,m),p)})}async function qy(s,t,i){s._canInitEmulator=!1;const r={...o1,...t};try{const o=new h1(s),u=await Promise.race([i(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw so(s,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[g,p]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw so(s,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw so(s,"email-already-in-use",h);if(g==="USER_DISABLED")throw so(s,"user-disabled",h);const v=r[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw jy(s,v,p);nn(s,v)}}catch(o){if(o instanceof bi)throw o;nn(s,"network-request-failed",{message:String(o)})}}async function Lr(s,t,i,r,o={}){const u=await Ti(s,t,i,r,o);return"mfaPendingCredential"in u&&nn(s,"multi-factor-auth-required",{_serverResponse:u}),u}async function Vy(s,t,i,r){const o=`${t}${i}?${r}`,u=s,h=u.config.emulator?dh(s.config,o):`${s.config.apiScheme}://${o}`;return c1.includes(i)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}function f1(s){switch(s){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class h1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((i,r)=>{this.timer=setTimeout(()=>r(un(this.auth,"network-request-failed")),u1.get())})}}function so(s,t,i){const r={appName:s.name};i.email&&(r.email=i.email),i.phoneNumber&&(r.phoneNumber=i.phoneNumber);const o=un(s,t,r);return o.customData._tokenResponse=i,o}function m_(s){return s!==void 0&&s.enterprise!==void 0}class d1{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const i of this.recaptchaEnforcementState)if(i.provider&&i.provider===t)return f1(i.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function m1(s,t){return Ti(s,"GET","/v2/recaptchaConfig",Si(s,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p1(s,t){return Ti(s,"POST","/v1/accounts:delete",t)}async function Eo(s,t){return Ti(s,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(s){if(s)try{const t=new Date(Number(s));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function g1(s,t=!1){const i=_t(s),r=await i.getIdToken(t),o=mh(r);X(o&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:r,authTime:gr(wf(o.auth_time)),issuedAtTime:gr(wf(o.iat)),expirationTime:gr(wf(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function wf(s){return Number(s)*1e3}function mh(s){const[t,i,r]=s.split(".");if(t===void 0||i===void 0||r===void 0)return co("JWT malformed, contained fewer than 3 sections"),null;try{const o=go(i);return o?JSON.parse(o):(co("Failed to decode base64 JWT payload"),null)}catch(o){return co("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function p_(s){const t=mh(s);return X(t,"internal-error"),X(typeof t.exp<"u","internal-error"),X(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cr(s,t,i=!1){if(i)return t;try{return await t}catch(r){throw r instanceof bi&&_1(r)&&s.auth.currentUser===s&&await s.auth.signOut(),r}}function _1({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const i=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(t,i){this.createdAt=t,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=gr(this.lastLoginAt),this.creationTime=gr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bo(s){var b;const t=s.auth,i=await s.getIdToken(),r=await Cr(s,Eo(t,{idToken:i}));X(r==null?void 0:r.users.length,t,"internal-error");const o=r.users[0];s._notifyReloadListener(o);const u=(b=o.providerUserInfo)!=null&&b.length?Gy(o.providerUserInfo):[],h=E1(s.providerData,u),m=s.isAnonymous,g=!(s.email&&o.passwordHash)&&!(h!=null&&h.length),p=m?g:!1,v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new Vf(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(s,v)}async function v1(s){const t=_t(s);await bo(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function E1(s,t){return[...s.filter(r=>!t.some(o=>o.providerId===r.providerId)),...t]}function Gy(s){return s.map(({providerId:t,...i})=>({providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b1(s,t){const i=await qy(s,{},async()=>{const r=sa({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:u}=s.config,h=await Vy(s,o,"/v1/token",`key=${u}`),m=await s._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:m,body:r};return s.emulatorConfig&&ia(s.emulatorConfig.host)&&(g.credentials="include"),Py.fetch()(h,g)});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function S1(s,t){return Ti(s,"POST","/v2/accounts:revokeToken",Si(s,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){X(t.idToken,"internal-error"),X(typeof t.idToken<"u","internal-error"),X(typeof t.refreshToken<"u","internal-error");const i="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):p_(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,i)}updateFromIdToken(t){X(t.length!==0,"internal-error");const i=p_(t);this.updateTokensAndExpiration(t,null,i)}async getToken(t,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,i){const{accessToken:r,refreshToken:o,expiresIn:u}=await b1(t,i);this.updateTokensAndExpiration(r,o,Number(u))}updateTokensAndExpiration(t,i,r){this.refreshToken=i||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,i){const{refreshToken:r,accessToken:o,expirationTime:u}=i,h=new Ys;return r&&(X(typeof r=="string","internal-error",{appName:t}),h.refreshToken=r),o&&(X(typeof o=="string","internal-error",{appName:t}),h.accessToken=o),u&&(X(typeof u=="number","internal-error",{appName:t}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ys,this.toJSON())}_performRefresh(){return Rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(s,t){X(typeof s=="string"||typeof s>"u","internal-error",{appName:t})}class Jt{constructor({uid:t,auth:i,stsTokenManager:r,...o}){this.providerId="firebase",this.proactiveRefresh=new y1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Vf(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const i=await Cr(this,this.stsTokenManager.getToken(this.auth,t));return X(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(t){return g1(this,t)}reload(){return v1(this)}_assign(t){this!==t&&(X(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(i=>({...i})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const i=new Jt({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return i.metadata._copy(this.metadata),i}_onReload(t){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,i=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),i&&await bo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qt(this.auth.app))return Promise.reject(On(this.auth));const t=await this.getIdToken();return await Cr(this,p1(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,i){const r=i.displayName??void 0,o=i.email??void 0,u=i.phoneNumber??void 0,h=i.photoURL??void 0,m=i.tenantId??void 0,g=i._redirectEventId??void 0,p=i.createdAt??void 0,v=i.lastLoginAt??void 0,{uid:b,emailVerified:E,isAnonymous:L,providerData:z,stsTokenManager:Q}=i;X(b&&Q,t,"internal-error");const J=Ys.fromJSON(this.name,Q);X(typeof b=="string",t,"internal-error"),ci(r,t.name),ci(o,t.name),X(typeof E=="boolean",t,"internal-error"),X(typeof L=="boolean",t,"internal-error"),ci(u,t.name),ci(h,t.name),ci(m,t.name),ci(g,t.name),ci(p,t.name),ci(v,t.name);const Te=new Jt({uid:b,auth:t,email:o,emailVerified:E,displayName:r,isAnonymous:L,photoURL:h,phoneNumber:u,tenantId:m,stsTokenManager:J,createdAt:p,lastLoginAt:v});return z&&Array.isArray(z)&&(Te.providerData=z.map(Y=>({...Y}))),g&&(Te._redirectEventId=g),Te}static async _fromIdTokenResponse(t,i,r=!1){const o=new Ys;o.updateFromServerResponse(i);const u=new Jt({uid:i.localId,auth:t,stsTokenManager:o,isAnonymous:r});return await bo(u),u}static async _fromGetAccountInfoResponse(t,i,r){const o=i.users[0];X(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?Gy(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new Ys;m.updateFromIdToken(r);const g=new Jt({uid:o.localId,auth:t,stsTokenManager:m,isAnonymous:h}),p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Vf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,p),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_=new Map;function Nn(s){Mn(s instanceof Function,"Expected a class definition");let t=g_.get(s);return t?(Mn(t instanceof s,"Instance stored in cache mismatched with class"),t):(t=new s,g_.set(s,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,i){this.storage[t]=i}async _get(t){const i=this.storage[t];return i===void 0?null:i}async _remove(t){delete this.storage[t]}_addListener(t,i){}_removeListener(t,i){}}Yy.type="NONE";const __=Yy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(s,t,i){return`firebase:${s}:${t}:${i}`}class Fs{constructor(t,i,r){this.persistence=t,this.auth=i,this.userKey=r;const{config:o,name:u}=this.auth;this.fullUserKey=uo(this.userKey,o.apiKey,u),this.fullPersistenceKey=uo("persistence",o.apiKey,u),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const i=await Eo(this.auth,{idToken:t}).catch(()=>{});return i?Jt._fromGetAccountInfoResponse(this.auth,i,t):null}return Jt._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,i,r="authUser"){if(!i.length)return new Fs(Nn(__),t,r);const o=(await Promise.all(i.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let u=o[0]||Nn(__);const h=uo(r,t.config.apiKey,t.name);let m=null;for(const p of i)try{const v=await p._get(h);if(v){let b;if(typeof v=="string"){const E=await Eo(t,{idToken:v}).catch(()=>{});if(!E)break;b=await Jt._fromGetAccountInfoResponse(t,E,v)}else b=Jt._fromJSON(t,v);p!==u&&(m=b),u=p;break}}catch{}const g=o.filter(p=>p._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new Fs(u,t,r):(u=g[0],m&&await u._set(h,m.toJSON()),await Promise.all(i.map(async p=>{if(p!==u)try{await p._remove(h)}catch{}})),new Fs(u,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y_(s){const t=s.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Xy(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Fy(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Zy(t))return"Blackberry";if(Jy(t))return"Webos";if(Qy(t))return"Safari";if((t.includes("chrome/")||Ky(t))&&!t.includes("edge/"))return"Chrome";if(Wy(t))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=s.match(i);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Fy(s=gt()){return/firefox\//i.test(s)}function Qy(s=gt()){const t=s.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ky(s=gt()){return/crios\//i.test(s)}function Xy(s=gt()){return/iemobile/i.test(s)}function Wy(s=gt()){return/android/i.test(s)}function Zy(s=gt()){return/blackberry/i.test(s)}function Jy(s=gt()){return/webos/i.test(s)}function ph(s=gt()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function T1(s=gt()){var t;return ph(s)&&!!((t=window.navigator)!=null&&t.standalone)}function C1(){return MS()&&document.documentMode===10}function $y(s=gt()){return ph(s)||Wy(s)||Jy(s)||Zy(s)||/windows phone/i.test(s)||Xy(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ev(s,t=[]){let i;switch(s){case"Browser":i=y_(gt());break;case"Worker":i=`${y_(gt())}-${s}`;break;default:i=s}const r=t.length?t.join(","):"FirebaseCore-web";return`${i}/JsCore/${aa}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,i){const r=u=>new Promise((h,m)=>{try{const g=t(u);h(g)}catch(g){m(g)}});r.onAbort=i,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const i=[];try{for(const r of this.queue)await r(t),r.onAbort&&i.push(r.onAbort)}catch(r){i.reverse();for(const o of i)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A1(s,t={}){return Ti(s,"GET","/v2/passwordPolicy",Si(s,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R1=6;class N1{constructor(t){var r;const i=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=i.minPasswordLength??R1,i.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=i.maxPasswordLength),i.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=i.containsLowercaseCharacter),i.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=i.containsUppercaseCharacter),i.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=i.containsNumericCharacter),i.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=i.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=t.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const i={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,i),this.validatePasswordCharacterOptions(t,i),i.isValid&&(i.isValid=i.meetsMinPasswordLength??!0),i.isValid&&(i.isValid=i.meetsMaxPasswordLength??!0),i.isValid&&(i.isValid=i.containsLowercaseLetter??!0),i.isValid&&(i.isValid=i.containsUppercaseLetter??!0),i.isValid&&(i.isValid=i.containsNumericCharacter??!0),i.isValid&&(i.isValid=i.containsNonAlphanumericCharacter??!0),i}validatePasswordLengthOptions(t,i){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(i.meetsMinPasswordLength=t.length>=r),o&&(i.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let r;for(let o=0;o<t.length;o++)r=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(i,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,i,r,o,u){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(t,i,r,o){this.app=t,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new v_(this),this.idTokenSubscription=new v_(this),this.beforeStateQueue=new w1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=By,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(t,i){return i&&(this._popupRedirectResolver=Nn(i)),this._initializationPromise=this.queue(async()=>{var r,o,u;if(!this._deleted&&(this.persistenceManager=await Fs.create(this,t),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const i=await Eo(this,{idToken:t}),r=await Jt._fromGetAccountInfoResponse(this,i,t);await this.directlySetCurrentUser(r)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var u;if(Qt(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let r=i,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(u=this.redirectUser)==null?void 0:u._redirectEventId,m=r==null?void 0:r._redirectEventId,g=await this.tryRedirectSignIn(t);(!h||h===m)&&(g!=null&&g.user)&&(r=g.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(r)}catch(h){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(t){try{await bo(t)}catch(i){if((i==null?void 0:i.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=l1()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Qt(this.app))return Promise.reject(On(this));const i=t?_t(t):null;return i&&X(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(t,i=!1){if(!this._deleted)return t&&X(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Qt(this.app)?Promise.reject(On(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Qt(this.app)?Promise.reject(On(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await A1(this),i=new N1(t);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Mr("auth","Firebase",t())}onAuthStateChanged(t,i,r){return this.registerStateListener(this.authStateSubscription,t,i,r)}beforeAuthStateChanged(t,i){return this.beforeStateQueue.pushCallback(t,i)}onIdTokenChanged(t,i,r){return this.registerStateListener(this.idTokenSubscription,t,i,r)}authStateReady(){return new Promise((t,i)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},i)}})}async revokeAccessToken(t){if(this.currentUser){const i=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:i};this.tenantId!=null&&(r.tenantId=this.tenantId),await S1(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)==null?void 0:t.toJSON()}}async _setRedirectUser(t,i){const r=await this.getOrInitRedirectPersistenceManager(i);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const i=t&&Nn(t)||this._popupRedirectResolver;X(i,this,"argument-error"),this.redirectPersistenceManager=await Fs.create(this,[Nn(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var i,r;return this._isInitialized&&await this.queue(async()=>{}),((i=this._currentUser)==null?void 0:i._redirectEventId)===t?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=((i=this.currentUser)==null?void 0:i.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,i,r,o){if(this._deleted)return()=>{};const u=typeof i=="function"?i:i.next.bind(i);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof i=="function"){const g=t.addObserver(i,r,o);return()=>{h=!0,g()}}else{const g=t.addObserver(i);return()=>{h=!0,g()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=ev(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var i;if(Qt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((i=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getToken());return t!=null&&t.error&&s1(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ts(s){return _t(s)}class v_{constructor(t){this.auth=t,this.observer=null,this.addObserver=VS(i=>this.observer=i)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Po={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function O1(s){Po=s}function tv(s){return Po.loadJS(s)}function D1(){return Po.recaptchaEnterpriseScript}function I1(){return Po.gapiScript}function M1(s){return`__${s}${Math.floor(Math.random()*1e6)}`}class k1{constructor(){this.enterprise=new L1}ready(t){t()}execute(t,i){return Promise.resolve("token")}render(t,i){return""}}class L1{ready(t){t()}execute(t,i){return Promise.resolve("token")}render(t,i){return""}}const U1="recaptcha-enterprise",nv="NO_RECAPTCHA";class z1{constructor(t){this.type=U1,this.auth=ts(t)}async verify(t="verify",i=!1){async function r(u){if(!i){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,m)=>{m1(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const p=new d1(g);return u.tenantId==null?u._agentRecaptchaConfig=p:u._tenantRecaptchaConfigs[u.tenantId]=p,h(p.siteKey)}}).catch(g=>{m(g)})})}function o(u,h,m){const g=window.grecaptcha;m_(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:t}).then(p=>{h(p)}).catch(()=>{h(nv)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new k1().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{r(this.auth).then(m=>{if(!i&&m_(window.grecaptcha))o(m,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=D1();g.length!==0&&(g+=m),tv(g).then(()=>{o(m,u,h)}).catch(p=>{h(p)})}}).catch(m=>{h(m)})})}}async function E_(s,t,i,r=!1,o=!1){const u=new z1(s);let h;if(o)h=nv;else try{h=await u.verify(i)}catch{h=await u.verify(i,!0)}const m={...t};if(i==="mfaSmsEnrollment"||i==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const g=m.phoneEnrollmentInfo.phoneNumber,p=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:p,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const g=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return r?Object.assign(m,{captchaResp:h}):Object.assign(m,{captchaResponse:h}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function Gf(s,t,i,r,o){var u;if((u=s._getRecaptchaConfig())!=null&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await E_(s,t,i,i==="getOobCode");return r(s,h)}else return r(s,t).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${i} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await E_(s,t,i,i==="getOobCode");return r(s,m)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H1(s,t){const i=fh(s,"auth");if(i.isInitialized()){const o=i.getImmediate(),u=i.getOptions();if(Qi(u,t??{}))return o;nn(o,"already-initialized")}return i.initialize({options:t})}function B1(s,t){const i=(t==null?void 0:t.persistence)||[],r=(Array.isArray(i)?i:[i]).map(Nn);t!=null&&t.errorMap&&s._updateErrorMap(t.errorMap),s._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function j1(s,t,i){const r=ts(s);X(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const o=!1,u=iv(t),{host:h,port:m}=P1(t),g=m===null?"":`:${m}`,p={url:`${u}//${h}${g}/`},v=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!r._canInitEmulator){X(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),X(Qi(p,r.config.emulator)&&Qi(v,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=p,r.emulatorConfig=v,r.settings.appVerificationDisabledForTesting=!0,ia(h)?(Ny(`${u}//${h}${g}`),xy("Auth",!0)):q1()}function iv(s){const t=s.indexOf(":");return t<0?"":s.substr(0,t+1)}function P1(s){const t=iv(s),i=/(\/\/)?([^?#/]+)/.exec(s.substr(t.length));if(!i)return{host:"",port:null};const r=i[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const u=o[1];return{host:u,port:b_(r.substr(u.length+1))}}else{const[u,h]=r.split(":");return{host:u,port:b_(h)}}}function b_(s){if(!s)return null;const t=Number(s);return isNaN(t)?null:t}function q1(){function s(){const t=document.createElement("p"),i=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(t,i){this.providerId=t,this.signInMethod=i}toJSON(){return Rn("not implemented")}_getIdTokenResponse(t){return Rn("not implemented")}_linkToIdToken(t,i){return Rn("not implemented")}_getReauthenticationResolver(t){return Rn("not implemented")}}async function V1(s,t){return Ti(s,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G1(s,t){return Lr(s,"POST","/v1/accounts:signInWithPassword",Si(s,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y1(s,t){return Lr(s,"POST","/v1/accounts:signInWithEmailLink",Si(s,t))}async function F1(s,t){return Lr(s,"POST","/v1/accounts:signInWithEmailLink",Si(s,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends gh{constructor(t,i,r,o=null){super("password",r),this._email=t,this._password=i,this._tenantId=o}static _fromEmailAndPassword(t,i){return new wr(t,i,"password")}static _fromEmailAndCode(t,i,r=null){return new wr(t,i,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const i=typeof t=="string"?JSON.parse(t):t;if(i!=null&&i.email&&(i!=null&&i.password)){if(i.signInMethod==="password")return this._fromEmailAndPassword(i.email,i.password);if(i.signInMethod==="emailLink")return this._fromEmailAndCode(i.email,i.password,i.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gf(t,i,"signInWithPassword",G1);case"emailLink":return Y1(t,{email:this._email,oobCode:this._password});default:nn(t,"internal-error")}}async _linkToIdToken(t,i){switch(this.signInMethod){case"password":const r={idToken:i,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gf(t,r,"signUpPassword",V1);case"emailLink":return F1(t,{idToken:i,email:this._email,oobCode:this._password});default:nn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qs(s,t){return Lr(s,"POST","/v1/accounts:signInWithIdp",Si(s,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q1="http://localhost";class Xi extends gh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const i=new Xi(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(i.idToken=t.idToken),t.accessToken&&(i.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(i.nonce=t.nonce),t.pendingToken&&(i.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(i.accessToken=t.oauthToken,i.secret=t.oauthTokenSecret):nn("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const i=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:o,...u}=i;if(!r||!o)return null;const h=new Xi(r,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(t){const i=this.buildRequest();return Qs(t,i)}_linkToIdToken(t,i){const r=this.buildRequest();return r.idToken=i,Qs(t,r)}_getReauthenticationResolver(t){const i=this.buildRequest();return i.autoCreate=!1,Qs(t,i)}buildRequest(){const t={requestUri:Q1,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),t.postBody=sa(i)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K1(s){switch(s){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function X1(s){const t=dr(mr(s)).link,i=t?dr(mr(t)).deep_link_id:null,r=dr(mr(s)).deep_link_id;return(r?dr(mr(r)).link:null)||r||i||t||s}class _h{constructor(t){const i=dr(mr(t)),r=i.apiKey??null,o=i.oobCode??null,u=K1(i.mode??null);X(r&&o&&u,"argument-error"),this.apiKey=r,this.operation=u,this.code=o,this.continueUrl=i.continueUrl??null,this.languageCode=i.lang??null,this.tenantId=i.tenantId??null}static parseLink(t){const i=X1(t);try{return new _h(i)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(){this.providerId=ra.PROVIDER_ID}static credential(t,i){return wr._fromEmailAndPassword(t,i)}static credentialWithLink(t,i){const r=_h.parseLink(i);return X(r,"argument-error"),wr._fromEmailAndCode(t,r.code,r.tenantId)}}ra.PROVIDER_ID="password";ra.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ra.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur extends sv{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends Ur{constructor(){super("facebook.com")}static credential(t){return Xi._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return fi.credentialFromTaggedObject(t)}static credentialFromError(t){return fi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return fi.credential(t.oauthAccessToken)}catch{return null}}}fi.FACEBOOK_SIGN_IN_METHOD="facebook.com";fi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends Ur{constructor(){super("google.com"),this.addScope("profile")}static credential(t,i){return Xi._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:i})}static credentialFromResult(t){return hi.credentialFromTaggedObject(t)}static credentialFromError(t){return hi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:i,oauthAccessToken:r}=t;if(!i&&!r)return null;try{return hi.credential(i,r)}catch{return null}}}hi.GOOGLE_SIGN_IN_METHOD="google.com";hi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends Ur{constructor(){super("github.com")}static credential(t){return Xi._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return di.credentialFromTaggedObject(t)}static credentialFromError(t){return di.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return di.credential(t.oauthAccessToken)}catch{return null}}}di.GITHUB_SIGN_IN_METHOD="github.com";di.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi extends Ur{constructor(){super("twitter.com")}static credential(t,i){return Xi._fromParams({providerId:mi.PROVIDER_ID,signInMethod:mi.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:i})}static credentialFromResult(t){return mi.credentialFromTaggedObject(t)}static credentialFromError(t){return mi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:i,oauthTokenSecret:r}=t;if(!i||!r)return null;try{return mi.credential(i,r)}catch{return null}}}mi.TWITTER_SIGN_IN_METHOD="twitter.com";mi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W1(s,t){return Lr(s,"POST","/v1/accounts:signUp",Si(s,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,i,r,o=!1){const u=await Jt._fromIdTokenResponse(t,r,o),h=S_(r);return new Wi({user:u,providerId:h,_tokenResponse:r,operationType:i})}static async _forOperation(t,i,r){await t._updateTokensIfNecessary(r,!0);const o=S_(r);return new Wi({user:t,providerId:o,_tokenResponse:r,operationType:i})}}function S_(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So extends bi{constructor(t,i,r,o){super(i.code,i.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,So.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:i.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,i,r,o){return new So(t,i,r,o)}}function av(s,t,i,r){return(t==="reauthenticate"?i._getReauthenticationResolver(s):i._getIdTokenResponse(s)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?So._fromErrorAndOperation(s,u,t,r):u})}async function Z1(s,t,i=!1){const r=await Cr(s,t._linkToIdToken(s.auth,await s.getIdToken()),i);return Wi._forOperation(s,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J1(s,t,i=!1){const{auth:r}=s;if(Qt(r.app))return Promise.reject(On(r));const o="reauthenticate";try{const u=await Cr(s,av(r,o,t,s),i);X(u.idToken,r,"internal-error");const h=mh(u.idToken);X(h,r,"internal-error");const{sub:m}=h;return X(s.uid===m,r,"user-mismatch"),Wi._forOperation(s,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&nn(r,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rv(s,t,i=!1){if(Qt(s.app))return Promise.reject(On(s));const r="signIn",o=await av(s,r,t),u=await Wi._fromIdTokenResponse(s,r,o);return i||await s._updateCurrentUser(u.user),u}async function $1(s,t){return rv(ts(s),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lv(s){const t=ts(s);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function eC(s,t,i){if(Qt(s.app))return Promise.reject(On(s));const r=ts(s),h=await Gf(r,{returnSecureToken:!0,email:t,password:i,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",W1).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&lv(s),g}),m=await Wi._fromIdTokenResponse(r,"signIn",h);return await r._updateCurrentUser(m.user),m}function tC(s,t,i){return Qt(s.app)?Promise.reject(On(s)):$1(_t(s),ra.credential(t,i)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&lv(s),r})}function nC(s,t,i,r){return _t(s).onIdTokenChanged(t,i,r)}function iC(s,t,i){return _t(s).beforeAuthStateChanged(t,i)}function sC(s,t,i,r){return _t(s).onAuthStateChanged(t,i,r)}function aC(s){return _t(s).signOut()}const To="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(t,i){this.storageRetriever=t,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(To,"1"),this.storage.removeItem(To),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,i){return this.storage.setItem(t,JSON.stringify(i)),Promise.resolve()}_get(t){const i=this.storage.getItem(t);return Promise.resolve(i?JSON.parse(i):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC=1e3,lC=10;class cv extends ov{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,i)=>this.onStorageEvent(t,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=$y(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const i of Object.keys(this.listeners)){const r=this.storage.getItem(i),o=this.localCache[i];r!==o&&t(i,o,r)}}onStorageEvent(t,i=!1){if(!t.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const r=t.key;i?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(r);!i&&this.localCache[r]===h||this.notifyListeners(r,h)},u=this.storage.getItem(r);C1()&&u!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,lC):o()}notifyListeners(t,i){this.localCache[t]=i;const r=this.listeners[t];if(r)for(const o of Array.from(r))o(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,i,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:i,newValue:r}),!0)})},rC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,i){await super._set(t,i),this.localCache[t]=JSON.stringify(i)}async _get(t){const i=await super._get(t);return this.localCache[t]=JSON.stringify(i),i}async _remove(t){await super._remove(t),delete this.localCache[t]}}cv.type="LOCAL";const oC=cv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv extends ov{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,i){}_removeListener(t,i){}}uv.type="SESSION";const fv=uv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cC(s){return Promise.all(s.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const i=this.receivers.find(o=>o.isListeningto(t));if(i)return i;const r=new qo(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const i=t,{eventId:r,eventType:o,data:u}=i.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;i.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const m=Array.from(h).map(async p=>p(i.origin,u)),g=await cC(m);i.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:g})}_subscribe(t,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(i)}_unsubscribe(t,i){this.handlersMap[t]&&i&&this.handlersMap[t].delete(i),(!i||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(s="",t=10){let i="";for(let r=0;r<t;r++)i+=Math.floor(Math.random()*10);return s+i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,i,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,g)=>{const p=yh("",20);o.port1.start();const v=setTimeout(()=>{g(new Error("unsupported_event"))},r);h={messageChannel:o,onMessage(b){const E=b;if(E.data.eventId===p)switch(E.data.status){case"ack":clearTimeout(v),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(E.data.response);break;default:clearTimeout(v),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:t,eventId:p,data:i},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(){return window}function fC(s){fn().location.href=s}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(){return typeof fn().WorkerGlobalScope<"u"&&typeof fn().importScripts=="function"}async function hC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dC(){var s;return((s=navigator==null?void 0:navigator.serviceWorker)==null?void 0:s.controller)||null}function mC(){return hv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv="firebaseLocalStorageDb",pC=1,Co="firebaseLocalStorage",mv="fbase_key";class zr{constructor(t){this.request=t}toPromise(){return new Promise((t,i)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function Vo(s,t){return s.transaction([Co],t?"readwrite":"readonly").objectStore(Co)}function gC(){const s=indexedDB.deleteDatabase(dv);return new zr(s).toPromise()}function Yf(){const s=indexedDB.open(dv,pC);return new Promise((t,i)=>{s.addEventListener("error",()=>{i(s.error)}),s.addEventListener("upgradeneeded",()=>{const r=s.result;try{r.createObjectStore(Co,{keyPath:mv})}catch(o){i(o)}}),s.addEventListener("success",async()=>{const r=s.result;r.objectStoreNames.contains(Co)?t(r):(r.close(),await gC(),t(await Yf()))})})}async function T_(s,t,i){const r=Vo(s,!0).put({[mv]:t,value:i});return new zr(r).toPromise()}async function _C(s,t){const i=Vo(s,!1).get(t),r=await new zr(i).toPromise();return r===void 0?null:r.value}function C_(s,t){const i=Vo(s,!0).delete(t);return new zr(i).toPromise()}const yC=800,vC=3;class pv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yf(),this.db)}async _withRetries(t){let i=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(i++>vC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qo._getInstance(mC()),this.receiver._subscribe("keyChanged",async(t,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(t,i)=>["keyChanged"])}async initializeSender(){var i,r;if(this.activeServiceWorker=await hC(),!this.activeServiceWorker)return;this.sender=new uC(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&(i=t[0])!=null&&i.fulfilled&&(r=t[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||dC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Yf();return await T_(t,To,"1"),await C_(t,To),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,i){return this._withPendingWrite(async()=>(await this._withRetries(r=>T_(r,t,i)),this.localCache[t]=i,this.notifyServiceWorker(t)))}async _get(t){const i=await this._withRetries(r=>_C(r,t));return this.localCache[t]=i,i}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(i=>C_(i,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const u=Vo(o,!1).getAll();return new zr(u).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const i=[],r=new Set;if(t.length!==0)for(const{fbase_key:o,value:u}of t)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),i.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),i.push(o));return i}notifyListeners(t,i){this.localCache[t]=i;const r=this.listeners[t];if(r)for(const o of Array.from(r))o(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pv.type="LOCAL";const EC=pv;new kr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bC(s,t){return t?Nn(t):(X(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh extends gh{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Qs(t,this._buildIdpRequest())}_linkToIdToken(t,i){return Qs(t,this._buildIdpRequest(i))}_getReauthenticationResolver(t){return Qs(t,this._buildIdpRequest())}_buildIdpRequest(t){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(i.idToken=t),i}}function SC(s){return rv(s.auth,new vh(s),s.bypassAuthState)}function TC(s){const{auth:t,user:i}=s;return X(i,t,"internal-error"),J1(i,new vh(s),s.bypassAuthState)}async function CC(s){const{auth:t,user:i}=s;return X(i,t,"internal-error"),Z1(i,new vh(s),s.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(t,i,r,o,u=!1){this.auth=t,this.resolver=r,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(t,i)=>{this.pendingPromise={resolve:t,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:i,sessionId:r,postBody:o,tenantId:u,error:h,type:m}=t;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:i,sessionId:r,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(p){this.reject(p)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return SC;case"linkViaPopup":case"linkViaRedirect":return CC;case"reauthViaPopup":case"reauthViaRedirect":return TC;default:nn(this.auth,"internal-error")}}resolve(t){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC=new kr(2e3,1e4);class Vs extends gv{constructor(t,i,r,o,u){super(t,i,o,u),this.provider=r,this.authWindow=null,this.pollId=null,Vs.currentPopupAction&&Vs.currentPopupAction.cancel(),Vs.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return X(t,this.auth,"internal-error"),t}async onExecution(){Mn(this.filter.length===1,"Popup operations only handle one event");const t=yh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(un(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)==null?void 0:t.associatedEvent)||null}cancel(){this.reject(un(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vs.currentPopupAction=null}pollUserCancellation(){const t=()=>{var i,r;if((r=(i=this.authWindow)==null?void 0:i.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(un(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,wC.get())};t()}}Vs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AC="pendingRedirect",fo=new Map;class RC extends gv{constructor(t,i,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,r),this.eventId=null}async execute(){let t=fo.get(this.auth._key());if(!t){try{const r=await NC(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(i){t=()=>Promise.reject(i)}fo.set(this.auth._key(),t)}return this.bypassAuthState||fo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const i=await this.auth._redirectUserForId(t.eventId);if(i)return this.user=i,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function NC(s,t){const i=DC(t),r=OC(s);if(!await r._isAvailable())return!1;const o=await r._get(i)==="true";return await r._remove(i),o}function xC(s,t){fo.set(s._key(),t)}function OC(s){return Nn(s._redirectPersistence)}function DC(s){return uo(AC,s.config.apiKey,s.name)}async function IC(s,t,i=!1){if(Qt(s.app))return Promise.reject(On(s));const r=ts(s),o=bC(r,t),h=await new RC(r,o,i).execute();return h&&!i&&(delete h.user._redirectEventId,await r._persistUserIfCurrent(h.user),await r._setRedirectUser(null,t)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MC=600*1e3;class kC{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let i=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(i=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!LC(t)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=t,i=!0)),i}sendToConsumer(t,i){var r;if(t.error&&!_v(t)){const o=((r=t.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";i.onError(un(this.auth,o))}else i.onAuthEvent(t)}isEventForConsumer(t,i){const r=i.eventId===null||!!t.eventId&&t.eventId===i.eventId;return i.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=MC&&this.cachedEventUids.clear(),this.cachedEventUids.has(w_(t))}saveEventToCache(t){this.cachedEventUids.add(w_(t)),this.lastProcessedEventTime=Date.now()}}function w_(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(t=>t).join("-")}function _v({type:s,error:t}){return s==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function LC(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _v(s);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UC(s,t={}){return Ti(s,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,HC=/^https?/;async function BC(s){if(s.config.emulator)return;const{authorizedDomains:t}=await UC(s);for(const i of t)try{if(jC(i))return}catch{}nn(s,"unauthorized-domain")}function jC(s){const t=qf(),{protocol:i,hostname:r}=new URL(t);if(s.startsWith("chrome-extension://")){const h=new URL(s);return h.hostname===""&&r===""?i==="chrome-extension:"&&s.replace("chrome-extension://","")===t.replace("chrome-extension://",""):i==="chrome-extension:"&&h.hostname===r}if(!HC.test(i))return!1;if(zC.test(s))return r===s;const o=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PC=new kr(3e4,6e4);function A_(){const s=fn().___jsl;if(s!=null&&s.H){for(const t of Object.keys(s.H))if(s.H[t].r=s.H[t].r||[],s.H[t].L=s.H[t].L||[],s.H[t].r=[...s.H[t].L],s.CP)for(let i=0;i<s.CP.length;i++)s.CP[i]=null}}function qC(s){return new Promise((t,i)=>{var o,u,h;function r(){A_(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{A_(),i(un(s,"network-request-failed"))},timeout:PC.get()})}if((u=(o=fn().gapi)==null?void 0:o.iframes)!=null&&u.Iframe)t(gapi.iframes.getContext());else if((h=fn().gapi)!=null&&h.load)r();else{const m=M1("iframefcb");return fn()[m]=()=>{gapi.load?r():i(un(s,"network-request-failed"))},tv(`${I1()}?onload=${m}`).catch(g=>i(g))}}).catch(t=>{throw ho=null,t})}let ho=null;function VC(s){return ho=ho||qC(s),ho}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC=new kr(5e3,15e3),YC="__/auth/iframe",FC="emulator/auth/iframe",QC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},KC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function XC(s){const t=s.config;X(t.authDomain,s,"auth-domain-config-required");const i=t.emulator?dh(t,FC):`https://${s.config.authDomain}/${YC}`,r={apiKey:t.apiKey,appName:s.name,v:aa},o=KC.get(s.config.apiHost);o&&(r.eid=o);const u=s._getFrameworks();return u.length&&(r.fw=u.join(",")),`${i}?${sa(r).slice(1)}`}async function WC(s){const t=await VC(s),i=fn().gapi;return X(i,s,"internal-error"),t.open({where:document.body,url:XC(s),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:QC,dontclear:!0},r=>new Promise(async(o,u)=>{await r.restyle({setHideOnLeave:!1});const h=un(s,"network-request-failed"),m=fn().setTimeout(()=>{u(h)},GC.get());function g(){fn().clearTimeout(m),o(r)}r.ping(g).then(g,()=>{u(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},JC=500,$C=600,ew="_blank",tw="http://localhost";class R_{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nw(s,t,i,r=JC,o=$C){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-r)/2,0).toString();let m="";const g={...ZC,width:r.toString(),height:o.toString(),top:u,left:h},p=gt().toLowerCase();i&&(m=Ky(p)?ew:i),Fy(p)&&(t=t||tw,g.scrollbars="yes");const v=Object.entries(g).reduce((E,[L,z])=>`${E}${L}=${z},`,"");if(T1(p)&&m!=="_self")return iw(t||"",m),new R_(null);const b=window.open(t||"",m,v);X(b,s,"popup-blocked");try{b.focus()}catch{}return new R_(b)}function iw(s,t){const i=document.createElement("a");i.href=s,i.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw="__/auth/handler",aw="emulator/auth/handler",rw=encodeURIComponent("fac");async function N_(s,t,i,r,o,u){X(s.config.authDomain,s,"auth-domain-config-required"),X(s.config.apiKey,s,"invalid-api-key");const h={apiKey:s.config.apiKey,appName:s.name,authType:i,redirectUrl:r,v:aa,eventId:o};if(t instanceof sv){t.setDefaultLanguage(s.languageCode),h.providerId=t.providerId||"",Uf(t.getCustomParameters())||(h.customParameters=JSON.stringify(t.getCustomParameters()));for(const[v,b]of Object.entries({}))h[v]=b}if(t instanceof Ur){const v=t.getScopes().filter(b=>b!=="");v.length>0&&(h.scopes=v.join(","))}s.tenantId&&(h.tid=s.tenantId);const m=h;for(const v of Object.keys(m))m[v]===void 0&&delete m[v];const g=await s._getAppCheckToken(),p=g?`#${rw}=${encodeURIComponent(g)}`:"";return`${lw(s)}?${sa(m).slice(1)}${p}`}function lw({config:s}){return s.emulator?dh(s,aw):`https://${s.authDomain}/${sw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af="webStorageSupport";class ow{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fv,this._completeRedirectFn=IC,this._overrideRedirectResult=xC}async _openPopup(t,i,r,o){var h;Mn((h=this.eventManagers[t._key()])==null?void 0:h.manager,"_initialize() not called before _openPopup()");const u=await N_(t,i,r,qf(),o);return nw(t,u,yh())}async _openRedirect(t,i,r,o){await this._originValidation(t);const u=await N_(t,i,r,qf(),o);return fC(u),new Promise(()=>{})}_initialize(t){const i=t._key();if(this.eventManagers[i]){const{manager:o,promise:u}=this.eventManagers[i];return o?Promise.resolve(o):(Mn(u,"If manager is not set, promise should be"),u)}const r=this.initAndGetManager(t);return this.eventManagers[i]={promise:r},r.catch(()=>{delete this.eventManagers[i]}),r}async initAndGetManager(t){const i=await WC(t),r=new kC(t);return i.register("authEvent",o=>(X(o==null?void 0:o.authEvent,t,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=i,r}_isIframeWebStorageSupported(t,i){this.iframes[t._key()].send(Af,{type:Af},o=>{var h;const u=(h=o==null?void 0:o[0])==null?void 0:h[Af];u!==void 0&&i(!!u),nn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const i=t._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=BC(t)),this.originValidationPromises[i]}get _shouldInitProactively(){return $y()||Qy()||ph()}}const cw=ow;var x_="@firebase/auth",O_="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)==null?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const i=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,i),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const i=this.internalListeners.get(t);i&&(this.internalListeners.delete(t),i(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fw(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hw(s){Js(new Ki("auth",(t,{options:i})=>{const r=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),u=t.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=r.options;X(h&&!h.includes(":"),"invalid-api-key",{appName:r.name});const g={apiKey:h,authDomain:m,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ev(s)},p=new x1(r,o,u,g);return B1(p,i),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,i,r)=>{t.getProvider("auth-internal").initialize()})),Js(new Ki("auth-internal",t=>{const i=ts(t.getProvider("auth").getImmediate());return(r=>new uw(r))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),_i(x_,O_,fw(s)),_i(x_,O_,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw=300,mw=Ry("authIdTokenMaxAge")||dw;let D_=null;const pw=s=>async t=>{const i=t&&await t.getIdTokenResult(),r=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(r&&r>mw)return;const o=i==null?void 0:i.token;D_!==o&&(D_=o,await fetch(s,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function gw(s=Ly()){const t=fh(s,"auth");if(t.isInitialized())return t.getImmediate();const i=H1(s,{popupRedirectResolver:cw,persistence:[EC,oC,fv]}),r=Ry("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(r,location.origin);if(location.origin===u.origin){const h=pw(u.toString());iC(i,h,()=>h(i.currentUser)),nC(i,m=>h(m))}}const o=wy("auth");return o&&j1(i,`http://${o}`),i}function _w(){var s;return((s=document.getElementsByTagName("head"))==null?void 0:s[0])??document}O1({loadJS(s){return new Promise((t,i)=>{const r=document.createElement("script");r.setAttribute("src",s),r.onload=t,r.onerror=o=>{const u=un("internal-error");u.customData=o,i(u)},r.type="text/javascript",r.charset="UTF-8",_w().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hw("Browser");var I_={};const M_="@firebase/database",k_="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yv="";function yw(s){yv=s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,i){i==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),et(i))}get(t){const i=this.domStorage_.getItem(this.prefixedName_(t));return i==null?null:Sr(i)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,i){i==null?delete this.cache_[t]:this.cache_[t]=i}get(t){return zn(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv=function(s){try{if(typeof window<"u"&&typeof window[s]<"u"){const t=window[s];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new vw(t)}}catch{}return new Ew},Yi=vv("localStorage"),bw=vv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks=new ch("@firebase/database"),Sw=(function(){let s=1;return function(){return s++}})(),Ev=function(s){const t=FS(s),i=new qS;i.update(t);const r=i.digest();return ah.encodeByteArray(r)},Hr=function(...s){let t="";for(let i=0;i<s.length;i++){const r=s[i];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?t+=Hr.apply(null,r):typeof r=="object"?t+=et(r):t+=r,t+=" "}return t};let _r=null,L_=!0;const Tw=function(s,t){U(!0,"Can't turn on custom loggers persistently."),Ks.logLevel=Se.VERBOSE,_r=Ks.log.bind(Ks)},dt=function(...s){if(L_===!0&&(L_=!1,_r===null&&bw.get("logging_enabled")===!0&&Tw()),_r){const t=Hr.apply(null,s);_r(t)}},Br=function(s){return function(...t){dt(s,...t)}},Ff=function(...s){const t="FIREBASE INTERNAL ERROR: "+Hr(...s);Ks.error(t)},kn=function(...s){const t=`FIREBASE FATAL ERROR: ${Hr(...s)}`;throw Ks.error(t),new Error(t)},wt=function(...s){const t="FIREBASE WARNING: "+Hr(...s);Ks.warn(t)},Cw=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&wt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},bv=function(s){return typeof s=="number"&&(s!==s||s===Number.POSITIVE_INFINITY||s===Number.NEGATIVE_INFINITY)},ww=function(s){if(document.readyState==="complete")s();else{let t=!1;const i=function(){if(!document.body){setTimeout(i,Math.floor(10));return}t||(t=!0,s())};document.addEventListener?(document.addEventListener("DOMContentLoaded",i,!1),window.addEventListener("load",i,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&i()}),window.attachEvent("onload",i))}},$s="[MIN_NAME]",Zi="[MAX_NAME]",la=function(s,t){if(s===t)return 0;if(s===$s||t===Zi)return-1;if(t===$s||s===Zi)return 1;{const i=U_(s),r=U_(t);return i!==null?r!==null?i-r===0?s.length-t.length:i-r:-1:r!==null?1:s<t?-1:1}},Aw=function(s,t){return s===t?0:s<t?-1:1},cr=function(s,t){if(t&&s in t)return t[s];throw new Error("Missing required key ("+s+") in object: "+et(t))},Eh=function(s){if(typeof s!="object"||s===null)return et(s);const t=[];for(const r in s)t.push(r);t.sort();let i="{";for(let r=0;r<t.length;r++)r!==0&&(i+=","),i+=et(t[r]),i+=":",i+=Eh(s[t[r]]);return i+="}",i},Sv=function(s,t){const i=s.length;if(i<=t)return[s];const r=[];for(let o=0;o<i;o+=t)o+t>i?r.push(s.substring(o,i)):r.push(s.substring(o,o+t));return r};function At(s,t){for(const i in s)s.hasOwnProperty(i)&&t(i,s[i])}const Tv=function(s){U(!bv(s),"Invalid JSON number");const t=11,i=52,r=(1<<t-1)-1;let o,u,h,m,g;s===0?(u=0,h=0,o=1/s===-1/0?1:0):(o=s<0,s=Math.abs(s),s>=Math.pow(2,1-r)?(m=Math.min(Math.floor(Math.log(s)/Math.LN2),r),u=m+r,h=Math.round(s*Math.pow(2,i-m)-Math.pow(2,i))):(u=0,h=Math.round(s/Math.pow(2,1-r-i))));const p=[];for(g=i;g;g-=1)p.push(h%2?1:0),h=Math.floor(h/2);for(g=t;g;g-=1)p.push(u%2?1:0),u=Math.floor(u/2);p.push(o?1:0),p.reverse();const v=p.join("");let b="";for(g=0;g<64;g+=8){let E=parseInt(v.substr(g,8),2).toString(16);E.length===1&&(E="0"+E),b=b+E}return b.toLowerCase()},Rw=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Nw=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function xw(s,t){let i="Unknown Error";s==="too_big"?i="The data requested exceeds the maximum size that can be accessed with a single request.":s==="permission_denied"?i="Client doesn't have permission to access the desired data.":s==="unavailable"&&(i="The service is unavailable");const r=new Error(s+" at "+t._path.toString()+": "+i);return r.code=s.toUpperCase(),r}const Ow=new RegExp("^-?(0*)\\d{1,10}$"),Dw=-2147483648,Iw=2147483647,U_=function(s){if(Ow.test(s)){const t=Number(s);if(t>=Dw&&t<=Iw)return t}return null},oa=function(s){try{s()}catch(t){setTimeout(()=>{const i=t.stack||"";throw wt("Exception was thrown by user callback.",i),t},Math.floor(0))}},Mw=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},yr=function(s,t){const i=setTimeout(s,t);return typeof i=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(i):typeof i=="object"&&i.unref&&i.unref(),i};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(t,i){this.appCheckProvider=i,this.appName=t.name,Qt(t)&&t.settings.appCheckToken&&(this.serverAppAppCheckToken=t.settings.appCheckToken),this.appCheck=i==null?void 0:i.getImmediate({optional:!0}),this.appCheck||i==null||i.get().then(r=>this.appCheck=r)}getToken(t){if(this.serverAppAppCheckToken){if(t)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(t):new Promise((i,r)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(i,r):i(null)},0)})}addTokenChangeListener(t){var i;(i=this.appCheckProvider)==null||i.get().then(r=>r.addTokenListener(t))}notifyForInvalidToken(){wt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(t,i,r){this.appName_=t,this.firebaseOptions_=i,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(o=>this.auth_=o)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(i=>i&&i.code==="auth/token-not-initialized"?(dt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(i)):new Promise((i,r)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(i,r):i(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(i=>i.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(i=>i.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',wt(t)}}class mo{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}mo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh="5",Cv="v",wv="s",Av="r",Rv="f",Nv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,xv="ls",Ov="p",Qf="ac",Dv="websocket",Iv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(t,i,r,o,u=!1,h="",m=!1,g=!1,p=null){this.secure=i,this.namespace=r,this.webSocketOnly=o,this.nodeAdmin=u,this.persistenceKey=h,this.includeNamespaceInQueryParams=m,this.isUsingEmulator=g,this.emulatorOptions=p,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Yi.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&Yi.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",i=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${i}`}}function Uw(s){return s.host!==s.internalHost||s.isCustomHost()||s.includeNamespaceInQueryParams}function kv(s,t,i){U(typeof t=="string","typeof type must == string"),U(typeof i=="object","typeof params must == object");let r;if(t===Dv)r=(s.secure?"wss://":"ws://")+s.internalHost+"/.ws?";else if(t===Iv)r=(s.secure?"https://":"http://")+s.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);Uw(s)&&(i.ns=s.namespace);const o=[];return At(i,(u,h)=>{o.push(u+"="+h)}),r+o.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(){this.counters_={}}incrementCounter(t,i=1){zn(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=i}get(){return bS(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf={},Nf={};function Sh(s){const t=s.toString();return Rf[t]||(Rf[t]=new zw),Rf[t]}function Hw(s,t){const i=s.toString();return Nf[i]||(Nf[i]=t()),Nf[i]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,i){this.closeAfterResponse=t,this.onClose=i,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,i){for(this.pendingResponses[t]=i;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<r.length;++o)r[o]&&oa(()=>{this.onMessage_(r[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_="start",jw="close",Pw="pLPCommand",qw="pRTLPCB",Lv="id",Uv="pw",zv="ser",Vw="cb",Gw="seg",Yw="ts",Fw="d",Qw="dframe",Hv=1870,Bv=30,Kw=Hv-Bv,Xw=25e3,Ww=3e4;class Gs{constructor(t,i,r,o,u,h,m){this.connId=t,this.repoInfo=i,this.applicationId=r,this.appCheckToken=o,this.authToken=u,this.transportSessionId=h,this.lastSessionId=m,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Br(t),this.stats_=Sh(i),this.urlFn=g=>(this.appCheckToken&&(g[Qf]=this.appCheckToken),kv(i,Iv,g))}open(t,i){this.curSegmentNum=0,this.onDisconnect_=i,this.myPacketOrderer=new Bw(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Ww)),ww(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Th((...u)=>{const[h,m,g,p,v]=u;if(this.incrementIncomingBytes_(u),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,h===z_)this.id=m,this.password=g;else if(h===jw)m?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(m,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+h)},(...u)=>{const[h,m]=u;this.incrementIncomingBytes_(u),this.myPacketOrderer.handleResponse(h,m)},()=>{this.onClosed_()},this.urlFn);const r={};r[z_]="t",r[zv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[Vw]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Cv]=bh,this.transportSessionId&&(r[wv]=this.transportSessionId),this.lastSessionId&&(r[xv]=this.lastSessionId),this.applicationId&&(r[Ov]=this.applicationId),this.appCheckToken&&(r[Qf]=this.appCheckToken),typeof location<"u"&&location.hostname&&Nv.test(location.hostname)&&(r[Av]=Rv);const o=this.urlFn(r);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Gs.forceAllow_=!0}static forceDisallow(){Gs.forceDisallow_=!0}static isAvailable(){return Gs.forceAllow_?!0:!Gs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Rw()&&!Nw()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const i=et(t);this.bytesSent+=i.length,this.stats_.incrementCounter("bytes_sent",i.length);const r=Ty(i),o=Sv(r,Kw);for(let u=0;u<o.length;u++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[u]),this.curSegmentNum++}addDisconnectPingFrame(t,i){this.myDisconnFrame=document.createElement("iframe");const r={};r[Qw]="t",r[Lv]=t,r[Uv]=i,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const i=et(t).length;this.bytesReceived+=i,this.stats_.incrementCounter("bytes_received",i)}}class Th{constructor(t,i,r,o){this.onDisconnect=r,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Sw(),window[Pw+this.uniqueCallbackIdentifier]=t,window[qw+this.uniqueCallbackIdentifier]=i,this.myIFrame=Th.createIFrame_();let u="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(u='<script>document.domain="'+document.domain+'";<\/script>');const h="<html><body>"+u+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(h),this.myIFrame.doc.close()}catch(m){dt("frame writing exception"),m.stack&&dt(m.stack),dt(m)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||dt("No IE domain setting required")}catch{const r=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,i){for(this.myID=t,this.myPW=i,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[Lv]=this.myID,t[Uv]=this.myPW,t[zv]=this.currentSerial;let i=this.urlFn(t),r="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Bv+r.length<=Hv;){const h=this.pendingSegs.shift();r=r+"&"+Gw+o+"="+h.seg+"&"+Yw+o+"="+h.ts+"&"+Fw+o+"="+h.d,o++}return i=i+r,this.addLongPollTag_(i,this.currentSerial),!0}else return!1}enqueueSegment(t,i,r){this.pendingSegs.push({seg:t,ts:i,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(t,i){this.outstandingRequests.add(i);const r=()=>{this.outstandingRequests.delete(i),this.newRequest_()},o=setTimeout(r,Math.floor(Xw)),u=()=>{clearTimeout(o),r()};this.addTag(t,u)}addTag(t,i){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=t,r.onload=r.onreadystatechange=function(){const o=r.readyState;(!o||o==="loaded"||o==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),i())},r.onerror=()=>{dt("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw=16384,Jw=45e3;let wo=null;typeof MozWebSocket<"u"?wo=MozWebSocket:typeof WebSocket<"u"&&(wo=WebSocket);class Zt{constructor(t,i,r,o,u,h,m){this.connId=t,this.applicationId=r,this.appCheckToken=o,this.authToken=u,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Br(this.connId),this.stats_=Sh(i),this.connURL=Zt.connectionURL_(i,h,m,o,r),this.nodeAdmin=i.nodeAdmin}static connectionURL_(t,i,r,o,u){const h={};return h[Cv]=bh,typeof location<"u"&&location.hostname&&Nv.test(location.hostname)&&(h[Av]=Rv),i&&(h[wv]=i),r&&(h[xv]=r),o&&(h[Qf]=o),u&&(h[Ov]=u),kv(t,Dv,h)}open(t,i){this.onDisconnect=i,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Yi.set("previous_websocket_failure",!0);try{let r;kS(),this.mySock=new wo(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const o=r.message||r.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const o=r.message||r.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){Zt.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const i=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(i);r&&r.length>1&&parseFloat(r[1])<4.4&&(t=!0)}return!t&&wo!==null&&!Zt.forceDisallow_}static previouslyFailed(){return Yi.isInMemoryStorage||Yi.get("previous_websocket_failure")===!0}markConnectionHealthy(){Yi.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const i=this.frames.join("");this.frames=null;const r=Sr(i);this.onMessage(r)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(U(this.frames===null,"We already have a frame buffer"),t.length<=6){const i=Number(t);if(!isNaN(i))return this.handleNewFrameCount_(i),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const i=t.data;if(this.bytesReceived+=i.length,this.stats_.incrementCounter("bytes_received",i.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(i);else{const r=this.extractFrameCount_(i);r!==null&&this.appendFrame_(r)}}send(t){this.resetKeepAlive();const i=et(t);this.bytesSent+=i.length,this.stats_.incrementCounter("bytes_sent",i.length);const r=Sv(i,Zw);r.length>1&&this.sendString_(String(r.length));for(let o=0;o<r.length;o++)this.sendString_(r[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Jw))}sendString_(t){try{this.mySock.send(t)}catch(i){this.log_("Exception thrown from WebSocket.send():",i.message||i.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Zt.responsesRequiredToBeHealthy=2;Zt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{static get ALL_TRANSPORTS(){return[Gs,Zt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(t){this.initTransports_(t)}initTransports_(t){const i=Zt&&Zt.isAvailable();let r=i&&!Zt.previouslyFailed();if(t.webSocketOnly&&(i||wt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Zt];else{const o=this.transports_=[];for(const u of Ar.ALL_TRANSPORTS)u&&u.isAvailable()&&o.push(u);Ar.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ar.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w=6e4,eA=5e3,tA=10*1024,nA=100*1024,xf="t",H_="d",iA="s",B_="r",sA="e",j_="o",P_="a",q_="n",V_="p",aA="h";class rA{constructor(t,i,r,o,u,h,m,g,p,v){this.id=t,this.repoInfo_=i,this.applicationId_=r,this.appCheckToken_=o,this.authToken_=u,this.onMessage_=h,this.onReady_=m,this.onDisconnect_=g,this.onKill_=p,this.lastSessionId=v,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Br("c:"+this.id+":"),this.transportManager_=new Ar(i),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const i=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(i,r)},Math.floor(0));const o=t.healthyTimeout||0;o>0&&(this.healthyTimeout_=yr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>nA?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>tA?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return i=>{t===this.conn_?this.onConnectionLost_(i):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return i=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(i):t===this.secondaryConn_?this.onSecondaryMessageReceived_(i):this.log_("message on old connection"))}}sendRequest(t){const i={t:"d",d:t};this.sendData_(i)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(xf in t){const i=t[xf];i===P_?this.upgradeIfSecondaryHealthy_():i===B_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):i===j_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const i=cr("t",t),r=cr("d",t);if(i==="c")this.onSecondaryControl_(r);else if(i==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+i)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:V_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:P_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:q_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const i=cr("t",t),r=cr("d",t);i==="c"?this.onControl_(r):i==="d"&&this.onDataMessage_(r)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const i=cr(xf,t);if(H_ in t){const r=t[H_];if(i===aA){const o={...r};this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(i===q_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else i===iA?this.onConnectionShutdown_(r):i===B_?this.onReset_(r):i===sA?Ff("Server Error: "+r):i===j_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ff("Unknown control packet command: "+i)}}onHandshake_(t){const i=t.ts,r=t.v,o=t.h;this.sessionId=t.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,i),bh!==r&&wt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const i=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(i,r),yr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor($w))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,i){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(i,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):yr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(eA))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:V_,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Yi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{put(t,i,r,o){}merge(t,i,r,o){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,i,r){}onDisconnectMerge(t,i,r){}onDisconnectCancel(t,i){}reportStats(t){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(t){this.allowedEvents_=t,this.listeners_={},U(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...i){if(Array.isArray(this.listeners_[t])){const r=[...this.listeners_[t]];for(let o=0;o<r.length;o++)r[o].callback.apply(r[o].context,i)}}on(t,i,r){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:i,context:r});const o=this.getInitialEvent(t);o&&i.apply(r,o)}off(t,i,r){this.validateEventType_(t);const o=this.listeners_[t]||[];for(let u=0;u<o.length;u++)if(o[u].callback===i&&(!r||r===o[u].context)){o.splice(u,1);return}}validateEventType_(t){U(this.allowedEvents_.find(i=>i===t),"Unknown event: "+t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao extends Pv{static getInstance(){return new Ao}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!lh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(t){return U(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_=32,Y_=768;class Ae{constructor(t,i){if(i===void 0){this.pieces_=t.split("/");let r=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[r]=this.pieces_[o],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=i}toString(){let t="";for(let i=this.pieceNum_;i<this.pieces_.length;i++)this.pieces_[i]!==""&&(t+="/"+this.pieces_[i]);return t||"/"}}function ge(){return new Ae("")}function ae(s){return s.pieceNum_>=s.pieces_.length?null:s.pieces_[s.pieceNum_]}function vi(s){return s.pieces_.length-s.pieceNum_}function Ne(s){let t=s.pieceNum_;return t<s.pieces_.length&&t++,new Ae(s.pieces_,t)}function qv(s){return s.pieceNum_<s.pieces_.length?s.pieces_[s.pieces_.length-1]:null}function lA(s){let t="";for(let i=s.pieceNum_;i<s.pieces_.length;i++)s.pieces_[i]!==""&&(t+="/"+encodeURIComponent(String(s.pieces_[i])));return t||"/"}function Vv(s,t=0){return s.pieces_.slice(s.pieceNum_+t)}function Gv(s){if(s.pieceNum_>=s.pieces_.length)return null;const t=[];for(let i=s.pieceNum_;i<s.pieces_.length-1;i++)t.push(s.pieces_[i]);return new Ae(t,0)}function Fe(s,t){const i=[];for(let r=s.pieceNum_;r<s.pieces_.length;r++)i.push(s.pieces_[r]);if(t instanceof Ae)for(let r=t.pieceNum_;r<t.pieces_.length;r++)i.push(t.pieces_[r]);else{const r=t.split("/");for(let o=0;o<r.length;o++)r[o].length>0&&i.push(r[o])}return new Ae(i,0)}function ce(s){return s.pieceNum_>=s.pieces_.length}function Tt(s,t){const i=ae(s),r=ae(t);if(i===null)return t;if(i===r)return Tt(Ne(s),Ne(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+s+")")}function Ch(s,t){if(vi(s)!==vi(t))return!1;for(let i=s.pieceNum_,r=t.pieceNum_;i<=s.pieces_.length;i++,r++)if(s.pieces_[i]!==t.pieces_[r])return!1;return!0}function $t(s,t){let i=s.pieceNum_,r=t.pieceNum_;if(vi(s)>vi(t))return!1;for(;i<s.pieces_.length;){if(s.pieces_[i]!==t.pieces_[r])return!1;++i,++r}return!0}class oA{constructor(t,i){this.errorPrefix_=i,this.parts_=Vv(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=jo(this.parts_[r]);Yv(this)}}function cA(s,t){s.parts_.length>0&&(s.byteLength_+=1),s.parts_.push(t),s.byteLength_+=jo(t),Yv(s)}function uA(s){const t=s.parts_.pop();s.byteLength_-=jo(t),s.parts_.length>0&&(s.byteLength_-=1)}function Yv(s){if(s.byteLength_>Y_)throw new Error(s.errorPrefix_+"has a key path longer than "+Y_+" bytes ("+s.byteLength_+").");if(s.parts_.length>G_)throw new Error(s.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+G_+") or object contains a cycle "+Gi(s))}function Gi(s){return s.parts_.length===0?"":"in property '"+s.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh extends Pv{static getInstance(){return new wh}constructor(){super(["visible"]);let t,i;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(i="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(i="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(i="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(i="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,i&&document.addEventListener(i,()=>{const r=!document[t];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(t){return U(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur=1e3,fA=300*1e3,F_=30*1e3,hA=1.3,dA=3e4,mA="server_kill",Q_=3;class Dn extends jv{constructor(t,i,r,o,u,h,m,g){if(super(),this.repoInfo_=t,this.applicationId_=i,this.onDataUpdate_=r,this.onConnectStatus_=o,this.onServerInfoUpdate_=u,this.authTokenProvider_=h,this.appCheckTokenProvider_=m,this.authOverride_=g,this.id=Dn.nextPersistentConnectionId_++,this.log_=Br("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ur,this.maxReconnectDelay_=fA,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,g)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");wh.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&Ao.getInstance().on("online",this.onOnline_,this)}sendRequest(t,i,r){const o=++this.requestNumber_,u={r:o,a:t,b:i};this.log_(et(u)),U(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(u),r&&(this.requestCBHash_[o]=r)}get(t){this.initConnection_();const i=new Bo,o={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:h=>{const m=h.d;h.s==="ok"?i.resolve(m):i.reject(m)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const u=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(u),i.promise}listen(t,i,r,o){this.initConnection_();const u=t._queryIdentifier,h=t._path.toString();this.log_("Listen called for "+h+" "+u),this.listens.has(h)||this.listens.set(h,new Map),U(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),U(!this.listens.get(h).has(u),"listen() called twice for same path/queryId.");const m={onComplete:o,hashFn:i,query:t,tag:r};this.listens.get(h).set(u,m),this.connected_&&this.sendListen_(m)}sendGet_(t){const i=this.outstandingGets_[t];this.sendRequest("g",i.request,r=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),i.onComplete&&i.onComplete(r)})}sendListen_(t){const i=t.query,r=i._path.toString(),o=i._queryIdentifier;this.log_("Listen on "+r+" for "+o);const u={p:r},h="q";t.tag&&(u.q=i._queryObject,u.t=t.tag),u.h=t.hashFn(),this.sendRequest(h,u,m=>{const g=m.d,p=m.s;Dn.warnOnListenWarnings_(g,i),(this.listens.get(r)&&this.listens.get(r).get(o))===t&&(this.log_("listen response",m),p!=="ok"&&this.removeListen_(r,o),t.onComplete&&t.onComplete(p,g))})}static warnOnListenWarnings_(t,i){if(t&&typeof t=="object"&&zn(t,"w")){const r=Zs(t,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const o='".indexOn": "'+i._queryParams.getIndex().toString()+'"',u=i._path.toString();wt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${u} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||PS(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=F_)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,i=jS(t)?"auth":"gauth",r={cred:t};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(i,r,o=>{const u=o.s,h=o.d||"error";this.authToken_===t&&(u==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(u,h))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const i=t.s,r=t.d||"error";i==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(i,r)})}unlisten(t,i){const r=t._path.toString(),o=t._queryIdentifier;this.log_("Unlisten called for "+r+" "+o),U(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,o)&&this.connected_&&this.sendUnlisten_(r,o,t._queryObject,i)}sendUnlisten_(t,i,r,o){this.log_("Unlisten on "+t+" for "+i);const u={p:t},h="n";o&&(u.q=r,u.t=o),this.sendRequest(h,u)}onDisconnectPut(t,i,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,i,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:i,onComplete:r})}onDisconnectMerge(t,i,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,i,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:i,onComplete:r})}onDisconnectCancel(t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:i})}sendOnDisconnect_(t,i,r,o){const u={p:i,d:r};this.log_("onDisconnect "+t,u),this.sendRequest(t,u,h=>{o&&setTimeout(()=>{o(h.s,h.d)},Math.floor(0))})}put(t,i,r,o){this.putInternal("p",t,i,r,o)}merge(t,i,r,o){this.putInternal("m",t,i,r,o)}putInternal(t,i,r,o,u){this.initConnection_();const h={p:i,d:r};u!==void 0&&(h.h=u),this.outstandingPuts_.push({action:t,request:h,onComplete:o}),this.outstandingPutCount_++;const m=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(m):this.log_("Buffering put: "+i)}sendPut_(t){const i=this.outstandingPuts_[t].action,r=this.outstandingPuts_[t].request,o=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(i,r,u=>{this.log_(i+" response",u),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(u.s,u.d)})}reportStats(t){if(this.connected_){const i={c:t};this.log_("reportStats",i),this.sendRequest("s",i,r=>{if(r.s!=="ok"){const u=r.d;this.log_("reportStats","Error sending stats: "+u)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+et(t));const i=t.r,r=this.requestCBHash_[i];r&&(delete this.requestCBHash_[i],r(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,i){this.log_("handleServerMessage",t,i),t==="d"?this.onDataUpdate_(i.p,i.d,!1,i.t):t==="m"?this.onDataUpdate_(i.p,i.d,!0,i.t):t==="c"?this.onListenRevoked_(i.p,i.q):t==="ac"?this.onAuthRevoked_(i.s,i.d):t==="apc"?this.onAppCheckRevoked_(i.s,i.d):t==="sd"?this.onSecurityDebugPacket_(i):Ff("Unrecognized action received from server: "+et(t)+`
Are you using the latest client?`)}onReady_(t,i){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=i,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){U(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ur,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=ur,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>dA&&(this.reconnectDelay_=ur),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let i=Math.max(0,this.reconnectDelay_-t);i=Math.random()*i,this.log_("Trying to reconnect in "+i+"ms"),this.scheduleConnect_(i),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*hA)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),i=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+Dn.nextConnectionId_++,u=this.lastSessionId;let h=!1,m=null;const g=function(){m?m.close():(h=!0,r())},p=function(b){U(m,"sendRequest call when we're not connected not allowed."),m.sendRequest(b)};this.realtime_={close:g,sendRequest:p};const v=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[b,E]=await Promise.all([this.authTokenProvider_.getToken(v),this.appCheckTokenProvider_.getToken(v)]);h?dt("getToken() completed but was canceled"):(dt("getToken() completed. Creating connection."),this.authToken_=b&&b.accessToken,this.appCheckToken_=E&&E.token,m=new rA(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,i,r,L=>{wt(L+" ("+this.repoInfo_.toString()+")"),this.interrupt(mA)},u))}catch(b){this.log_("Failed to get token: "+b),h||(this.repoInfo_.nodeAdmin&&wt(b),g())}}}interrupt(t){dt("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){dt("Resuming connection for reason: "+t),delete this.interruptReasons_[t],Uf(this.interruptReasons_)&&(this.reconnectDelay_=ur,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const i=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:i})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const i=this.outstandingPuts_[t];i&&"h"in i.request&&i.queued&&(i.onComplete&&i.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,i){let r;i?r=i.map(u=>Eh(u)).join("$"):r="default";const o=this.removeListen_(t,r);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(t,i){const r=new Ae(t).toString();let o;if(this.listens.has(r)){const u=this.listens.get(r);o=u.get(i),u.delete(i),u.size===0&&this.listens.delete(r)}else o=void 0;return o}onAuthRevoked_(t,i){dt("Auth token revoked: "+t+"/"+i),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Q_&&(this.reconnectDelay_=F_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,i){dt("App check token revoked: "+t+"/"+i),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Q_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const i of t.values())this.sendListen_(i);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let i="js";t["sdk."+i+"."+yv.replace(/\./g,"-")]=1,lh()?t["framework.cordova"]=1:Oy()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=Ao.getInstance().currentlyOnline();return Uf(this.interruptReasons_)&&t}}Dn.nextPersistentConnectionId_=0;Dn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t,i){this.name=t,this.node=i}static Wrap(t,i){return new re(t,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,i){const r=new re($s,t),o=new re($s,i);return this.compare(r,o)!==0}minPost(){return re.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ao;class Fv extends Go{static get __EMPTY_NODE(){return ao}static set __EMPTY_NODE(t){ao=t}compare(t,i){return la(t.name,i.name)}isDefinedOn(t){throw na("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,i){return!1}minPost(){return re.MIN}maxPost(){return new re(Zi,ao)}makePost(t,i){return U(typeof t=="string","KeyIndex indexValue must always be a string."),new re(t,ao)}toString(){return".key"}}const Xs=new Fv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(t,i,r,o,u=null){this.isReverse_=o,this.resultGenerator_=u,this.nodeStack_=[];let h=1;for(;!t.isEmpty();)if(t=t,h=i?r(t.key,i):1,o&&(h*=-1),h<0)this.isReverse_?t=t.left:t=t.right;else if(h===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),i;if(this.resultGenerator_?i=this.resultGenerator_(t.key,t.value):i={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return i}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class $e{constructor(t,i,r,o,u){this.key=t,this.value=i,this.color=r??$e.RED,this.left=o??Ct.EMPTY_NODE,this.right=u??Ct.EMPTY_NODE}copy(t,i,r,o,u){return new $e(t??this.key,i??this.value,r??this.color,o??this.left,u??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,i,r){let o=this;const u=r(t,o.key);return u<0?o=o.copy(null,null,null,o.left.insert(t,i,r),null):u===0?o=o.copy(null,i,null,null,null):o=o.copy(null,null,null,null,o.right.insert(t,i,r)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ct.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,i){let r,o;if(r=this,i(t,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(t,i),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),i(t,r.key)===0){if(r.right.isEmpty())return Ct.EMPTY_NODE;o=r.right.min_(),r=r.copy(o.key,o.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(t,i))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,i)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}$e.RED=!0;$e.BLACK=!1;class pA{copy(t,i,r,o,u){return this}insert(t,i,r){return new $e(t,i,null)}remove(t,i){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ct{constructor(t,i=Ct.EMPTY_NODE){this.comparator_=t,this.root_=i}insert(t,i){return new Ct(this.comparator_,this.root_.insert(t,i,this.comparator_).copy(null,null,$e.BLACK,null,null))}remove(t){return new Ct(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,$e.BLACK,null,null))}get(t){let i,r=this.root_;for(;!r.isEmpty();){if(i=this.comparator_(t,r.key),i===0)return r.value;i<0?r=r.left:i>0&&(r=r.right)}return null}getPredecessorKey(t){let i,r=this.root_,o=null;for(;!r.isEmpty();)if(i=this.comparator_(t,r.key),i===0){if(r.left.isEmpty())return o?o.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else i<0?r=r.left:i>0&&(o=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new ro(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,i){return new ro(this.root_,t,this.comparator_,!1,i)}getReverseIteratorFrom(t,i){return new ro(this.root_,t,this.comparator_,!0,i)}getReverseIterator(t){return new ro(this.root_,null,this.comparator_,!0,t)}}Ct.EMPTY_NODE=new pA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gA(s,t){return la(s.name,t.name)}function Ah(s,t){return la(s,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kf;function _A(s){Kf=s}const Qv=function(s){return typeof s=="number"?"number:"+Tv(s):"string:"+s},Kv=function(s){if(s.isLeafNode()){const t=s.val();U(typeof t=="string"||typeof t=="number"||typeof t=="object"&&zn(t,".sv"),"Priority must be a string or number.")}else U(s===Kf||s.isEmpty(),"priority of unexpected type.");U(s===Kf||s.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let K_;class Je{static set __childrenNodeConstructor(t){K_=t}static get __childrenNodeConstructor(){return K_}constructor(t,i=Je.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=i,this.lazyHash_=null,U(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Kv(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new Je(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:Je.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return ce(t)?this:ae(t)===".priority"?this.priorityNode_:Je.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,i){return null}updateImmediateChild(t,i){return t===".priority"?this.updatePriority(i):i.isEmpty()&&t!==".priority"?this:Je.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,i).updatePriority(this.priorityNode_)}updateChild(t,i){const r=ae(t);return r===null?i:i.isEmpty()&&r!==".priority"?this:(U(r!==".priority"||vi(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Je.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ne(t),i)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,i){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+Qv(this.priorityNode_.val())+":");const i=typeof this.value_;t+=i+":",i==="number"?t+=Tv(this.value_):t+=this.value_,this.lazyHash_=Ev(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===Je.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof Je.__childrenNodeConstructor?-1:(U(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const i=typeof t.value_,r=typeof this.value_,o=Je.VALUE_TYPE_ORDER.indexOf(i),u=Je.VALUE_TYPE_ORDER.indexOf(r);return U(o>=0,"Unknown leaf type: "+i),U(u>=0,"Unknown leaf type: "+r),o===u?r==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:u-o}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const i=t;return this.value_===i.value_&&this.priorityNode_.equals(i.priorityNode_)}else return!1}}Je.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xv,Wv;function yA(s){Xv=s}function vA(s){Wv=s}class EA extends Go{compare(t,i){const r=t.node.getPriority(),o=i.node.getPriority(),u=r.compareTo(o);return u===0?la(t.name,i.name):u}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,i){return!t.getPriority().equals(i.getPriority())}minPost(){return re.MIN}maxPost(){return new re(Zi,new Je("[PRIORITY-POST]",Wv))}makePost(t,i){const r=Xv(t);return new re(i,new Je("[PRIORITY-POST]",r))}toString(){return".priority"}}const ze=new EA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bA=Math.log(2);class SA{constructor(t){const i=u=>parseInt(Math.log(u)/bA,10),r=u=>parseInt(Array(u+1).join("1"),2);this.count=i(t+1),this.current_=this.count-1;const o=r(this.count);this.bits_=t+1&o}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const Ro=function(s,t,i,r){s.sort(t);const o=function(g,p){const v=p-g;let b,E;if(v===0)return null;if(v===1)return b=s[g],E=i?i(b):b,new $e(E,b.node,$e.BLACK,null,null);{const L=parseInt(v/2,10)+g,z=o(g,L),Q=o(L+1,p);return b=s[L],E=i?i(b):b,new $e(E,b.node,$e.BLACK,z,Q)}},u=function(g){let p=null,v=null,b=s.length;const E=function(z,Q){const J=b-z,Te=b;b-=z;const Y=o(J+1,Te),ue=s[J],$=i?i(ue):ue;L(new $e($,ue.node,Q,null,Y))},L=function(z){p?(p.left=z,p=z):(v=z,p=z)};for(let z=0;z<g.count;++z){const Q=g.nextBitIsOne(),J=Math.pow(2,g.count-(z+1));Q?E(J,$e.BLACK):(E(J,$e.BLACK),E(J,$e.RED))}return v},h=new SA(s.length),m=u(h);return new Ct(r||t,m)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Of;const qs={};class xn{static get Default(){return U(qs&&ze,"ChildrenNode.ts has not been loaded"),Of=Of||new xn({".priority":qs},{".priority":ze}),Of}constructor(t,i){this.indexes_=t,this.indexSet_=i}get(t){const i=Zs(this.indexes_,t);if(!i)throw new Error("No index defined for "+t);return i instanceof Ct?i:null}hasIndex(t){return zn(this.indexSet_,t.toString())}addIndex(t,i){U(t!==Xs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let o=!1;const u=i.getIterator(re.Wrap);let h=u.getNext();for(;h;)o=o||t.isDefinedOn(h.node),r.push(h),h=u.getNext();let m;o?m=Ro(r,t.getCompare()):m=qs;const g=t.toString(),p={...this.indexSet_};p[g]=t;const v={...this.indexes_};return v[g]=m,new xn(v,p)}addToIndexes(t,i){const r=_o(this.indexes_,(o,u)=>{const h=Zs(this.indexSet_,u);if(U(h,"Missing index implementation for "+u),o===qs)if(h.isDefinedOn(t.node)){const m=[],g=i.getIterator(re.Wrap);let p=g.getNext();for(;p;)p.name!==t.name&&m.push(p),p=g.getNext();return m.push(t),Ro(m,h.getCompare())}else return qs;else{const m=i.get(t.name);let g=o;return m&&(g=g.remove(new re(t.name,m))),g.insert(t,t.node)}});return new xn(r,this.indexSet_)}removeFromIndexes(t,i){const r=_o(this.indexes_,o=>{if(o===qs)return o;{const u=i.get(t.name);return u?o.remove(new re(t.name,u)):o}});return new xn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fr;class Z{static get EMPTY_NODE(){return fr||(fr=new Z(new Ct(Ah),null,xn.Default))}constructor(t,i,r){this.children_=t,this.priorityNode_=i,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Kv(this.priorityNode_),this.children_.isEmpty()&&U(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||fr}updatePriority(t){return this.children_.isEmpty()?this:new Z(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const i=this.children_.get(t);return i===null?fr:i}}getChild(t){const i=ae(t);return i===null?this:this.getImmediateChild(i).getChild(Ne(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,i){if(U(i,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(i);{const r=new re(t,i);let o,u;i.isEmpty()?(o=this.children_.remove(t),u=this.indexMap_.removeFromIndexes(r,this.children_)):(o=this.children_.insert(t,i),u=this.indexMap_.addToIndexes(r,this.children_));const h=o.isEmpty()?fr:this.priorityNode_;return new Z(o,h,u)}}updateChild(t,i){const r=ae(t);if(r===null)return i;{U(ae(t)!==".priority"||vi(t)===1,".priority must be the last token in a path");const o=this.getImmediateChild(r).updateChild(Ne(t),i);return this.updateImmediateChild(r,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const i={};let r=0,o=0,u=!0;if(this.forEachChild(ze,(h,m)=>{i[h]=m.val(t),r++,u&&Z.INTEGER_REGEXP_.test(h)?o=Math.max(o,Number(h)):u=!1}),!t&&u&&o<2*r){const h=[];for(const m in i)h[m]=i[m];return h}else return t&&!this.getPriority().isEmpty()&&(i[".priority"]=this.getPriority().val()),i}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+Qv(this.getPriority().val())+":"),this.forEachChild(ze,(i,r)=>{const o=r.hash();o!==""&&(t+=":"+i+":"+o)}),this.lazyHash_=t===""?"":Ev(t)}return this.lazyHash_}getPredecessorChildName(t,i,r){const o=this.resolveIndex_(r);if(o){const u=o.getPredecessorKey(new re(t,i));return u?u.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const i=this.resolveIndex_(t);if(i){const r=i.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(t){const i=this.getFirstChildName(t);return i?new re(i,this.children_.get(i)):null}getLastChildName(t){const i=this.resolveIndex_(t);if(i){const r=i.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(t){const i=this.getLastChildName(t);return i?new re(i,this.children_.get(i)):null}forEachChild(t,i){const r=this.resolveIndex_(t);return r?r.inorderTraversal(o=>i(o.name,o.node)):this.children_.inorderTraversal(i)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,i){const r=this.resolveIndex_(i);if(r)return r.getIteratorFrom(t,o=>o);{const o=this.children_.getIteratorFrom(t.name,re.Wrap);let u=o.peek();for(;u!=null&&i.compare(u,t)<0;)o.getNext(),u=o.peek();return o}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,i){const r=this.resolveIndex_(i);if(r)return r.getReverseIteratorFrom(t,o=>o);{const o=this.children_.getReverseIteratorFrom(t.name,re.Wrap);let u=o.peek();for(;u!=null&&i.compare(u,t)>0;)o.getNext(),u=o.peek();return o}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===jr?-1:0}withIndex(t){if(t===Xs||this.indexMap_.hasIndex(t))return this;{const i=this.indexMap_.addIndex(t,this.children_);return new Z(this.children_,this.priorityNode_,i)}}isIndexed(t){return t===Xs||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const i=t;if(this.getPriority().equals(i.getPriority()))if(this.children_.count()===i.children_.count()){const r=this.getIterator(ze),o=i.getIterator(ze);let u=r.getNext(),h=o.getNext();for(;u&&h;){if(u.name!==h.name||!u.node.equals(h.node))return!1;u=r.getNext(),h=o.getNext()}return u===null&&h===null}else return!1;else return!1}}resolveIndex_(t){return t===Xs?null:this.indexMap_.get(t.toString())}}Z.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class TA extends Z{constructor(){super(new Ct(Ah),Z.EMPTY_NODE,xn.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return Z.EMPTY_NODE}isEmpty(){return!1}}const jr=new TA;Object.defineProperties(re,{MIN:{value:new re($s,Z.EMPTY_NODE)},MAX:{value:new re(Zi,jr)}});Fv.__EMPTY_NODE=Z.EMPTY_NODE;Je.__childrenNodeConstructor=Z;_A(jr);vA(jr);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA=!0;function at(s,t=null){if(s===null)return Z.EMPTY_NODE;if(typeof s=="object"&&".priority"in s&&(t=s[".priority"]),U(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof s=="object"&&".value"in s&&s[".value"]!==null&&(s=s[".value"]),typeof s!="object"||".sv"in s){const i=s;return new Je(i,at(t))}if(!(s instanceof Array)&&CA){const i=[];let r=!1;if(At(s,(h,m)=>{if(h.substring(0,1)!=="."){const g=at(m);g.isEmpty()||(r=r||!g.getPriority().isEmpty(),i.push(new re(h,g)))}}),i.length===0)return Z.EMPTY_NODE;const u=Ro(i,gA,h=>h.name,Ah);if(r){const h=Ro(i,ze.getCompare());return new Z(u,at(t),new xn({".priority":h},{".priority":ze}))}else return new Z(u,at(t),xn.Default)}else{let i=Z.EMPTY_NODE;return At(s,(r,o)=>{if(zn(s,r)&&r.substring(0,1)!=="."){const u=at(o);(u.isLeafNode()||!u.isEmpty())&&(i=i.updateImmediateChild(r,u))}}),i.updatePriority(at(t))}}yA(at);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA extends Go{constructor(t){super(),this.indexPath_=t,U(!ce(t)&&ae(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,i){const r=this.extractChild(t.node),o=this.extractChild(i.node),u=r.compareTo(o);return u===0?la(t.name,i.name):u}makePost(t,i){const r=at(t),o=Z.EMPTY_NODE.updateChild(this.indexPath_,r);return new re(i,o)}maxPost(){const t=Z.EMPTY_NODE.updateChild(this.indexPath_,jr);return new re(Zi,t)}toString(){return Vv(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA extends Go{compare(t,i){const r=t.node.compareTo(i.node);return r===0?la(t.name,i.name):r}isDefinedOn(t){return!0}indexedValueChanged(t,i){return!t.equals(i)}minPost(){return re.MIN}maxPost(){return re.MAX}makePost(t,i){const r=at(t);return new re(i,r)}toString(){return".value"}}const RA=new AA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zv(s){return{type:"value",snapshotNode:s}}function ea(s,t){return{type:"child_added",snapshotNode:t,childName:s}}function Rr(s,t){return{type:"child_removed",snapshotNode:t,childName:s}}function Nr(s,t,i){return{type:"child_changed",snapshotNode:t,childName:s,oldSnap:i}}function NA(s,t){return{type:"child_moved",snapshotNode:t,childName:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(t){this.index_=t}updateChild(t,i,r,o,u,h){U(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const m=t.getImmediateChild(i);return m.getChild(o).equals(r.getChild(o))&&m.isEmpty()===r.isEmpty()||(h!=null&&(r.isEmpty()?t.hasChild(i)?h.trackChildChange(Rr(i,m)):U(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):m.isEmpty()?h.trackChildChange(ea(i,r)):h.trackChildChange(Nr(i,r,m))),t.isLeafNode()&&r.isEmpty())?t:t.updateImmediateChild(i,r).withIndex(this.index_)}updateFullNode(t,i,r){return r!=null&&(t.isLeafNode()||t.forEachChild(ze,(o,u)=>{i.hasChild(o)||r.trackChildChange(Rr(o,u))}),i.isLeafNode()||i.forEachChild(ze,(o,u)=>{if(t.hasChild(o)){const h=t.getImmediateChild(o);h.equals(u)||r.trackChildChange(Nr(o,u,h))}else r.trackChildChange(ea(o,u))})),i.withIndex(this.index_)}updatePriority(t,i){return t.isEmpty()?Z.EMPTY_NODE:t.updatePriority(i)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(t){this.indexedFilter_=new Rh(t.getIndex()),this.index_=t.getIndex(),this.startPost_=xr.getStartPost_(t),this.endPost_=xr.getEndPost_(t),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){const i=this.startIsInclusive_?this.index_.compare(this.getStartPost(),t)<=0:this.index_.compare(this.getStartPost(),t)<0,r=this.endIsInclusive_?this.index_.compare(t,this.getEndPost())<=0:this.index_.compare(t,this.getEndPost())<0;return i&&r}updateChild(t,i,r,o,u,h){return this.matches(new re(i,r))||(r=Z.EMPTY_NODE),this.indexedFilter_.updateChild(t,i,r,o,u,h)}updateFullNode(t,i,r){i.isLeafNode()&&(i=Z.EMPTY_NODE);let o=i.withIndex(this.index_);o=o.updatePriority(Z.EMPTY_NODE);const u=this;return i.forEachChild(ze,(h,m)=>{u.matches(new re(h,m))||(o=o.updateImmediateChild(h,Z.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,o,r)}updatePriority(t,i){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const i=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),i)}else return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const i=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),i)}else return t.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(t){this.withinDirectionalStart=i=>this.reverse_?this.withinEndPost(i):this.withinStartPost(i),this.withinDirectionalEnd=i=>this.reverse_?this.withinStartPost(i):this.withinEndPost(i),this.withinStartPost=i=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),i);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=i=>{const r=this.index_.compare(i,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new xr(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft(),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}updateChild(t,i,r,o,u,h){return this.rangedFilter_.matches(new re(i,r))||(r=Z.EMPTY_NODE),t.getImmediateChild(i).equals(r)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,i,r,o,u,h):this.fullLimitUpdateChild_(t,i,r,u,h)}updateFullNode(t,i,r){let o;if(i.isLeafNode()||i.isEmpty())o=Z.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<i.numChildren()&&i.isIndexed(this.index_)){o=Z.EMPTY_NODE.withIndex(this.index_);let u;this.reverse_?u=i.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):u=i.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let h=0;for(;u.hasNext()&&h<this.limit_;){const m=u.getNext();if(this.withinDirectionalStart(m))if(this.withinDirectionalEnd(m))o=o.updateImmediateChild(m.name,m.node),h++;else break;else continue}}else{o=i.withIndex(this.index_),o=o.updatePriority(Z.EMPTY_NODE);let u;this.reverse_?u=o.getReverseIterator(this.index_):u=o.getIterator(this.index_);let h=0;for(;u.hasNext();){const m=u.getNext();h<this.limit_&&this.withinDirectionalStart(m)&&this.withinDirectionalEnd(m)?h++:o=o.updateImmediateChild(m.name,Z.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,o,r)}updatePriority(t,i){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,i,r,o,u){let h;if(this.reverse_){const b=this.index_.getCompare();h=(E,L)=>b(L,E)}else h=this.index_.getCompare();const m=t;U(m.numChildren()===this.limit_,"");const g=new re(i,r),p=this.reverse_?m.getFirstChild(this.index_):m.getLastChild(this.index_),v=this.rangedFilter_.matches(g);if(m.hasChild(i)){const b=m.getImmediateChild(i);let E=o.getChildAfterChild(this.index_,p,this.reverse_);for(;E!=null&&(E.name===i||m.hasChild(E.name));)E=o.getChildAfterChild(this.index_,E,this.reverse_);const L=E==null?1:h(E,g);if(v&&!r.isEmpty()&&L>=0)return u!=null&&u.trackChildChange(Nr(i,r,b)),m.updateImmediateChild(i,r);{u!=null&&u.trackChildChange(Rr(i,b));const Q=m.updateImmediateChild(i,Z.EMPTY_NODE);return E!=null&&this.rangedFilter_.matches(E)?(u!=null&&u.trackChildChange(ea(E.name,E.node)),Q.updateImmediateChild(E.name,E.node)):Q}}else return r.isEmpty()?t:v&&h(p,g)>=0?(u!=null&&(u.trackChildChange(Rr(p.name,p.node)),u.trackChildChange(ea(i,r))),m.updateImmediateChild(i,r).updateImmediateChild(p.name,Z.EMPTY_NODE)):t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ze}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return U(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return U(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:$s}hasEnd(){return this.endSet_}getIndexEndValue(){return U(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return U(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Zi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return U(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ze}copy(){const t=new Nh;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function OA(s){return s.loadsAllData()?new Rh(s.getIndex()):s.hasLimit()?new xA(s):new xr(s)}function X_(s){const t={};if(s.isDefault())return t;let i;if(s.index_===ze?i="$priority":s.index_===RA?i="$value":s.index_===Xs?i="$key":(U(s.index_ instanceof wA,"Unrecognized index type!"),i=s.index_.toString()),t.orderBy=et(i),s.startSet_){const r=s.startAfterSet_?"startAfter":"startAt";t[r]=et(s.indexStartValue_),s.startNameSet_&&(t[r]+=","+et(s.indexStartName_))}if(s.endSet_){const r=s.endBeforeSet_?"endBefore":"endAt";t[r]=et(s.indexEndValue_),s.endNameSet_&&(t[r]+=","+et(s.indexEndName_))}return s.limitSet_&&(s.isViewFromLeft()?t.limitToFirst=s.limit_:t.limitToLast=s.limit_),t}function W_(s){const t={};if(s.startSet_&&(t.sp=s.indexStartValue_,s.startNameSet_&&(t.sn=s.indexStartName_),t.sin=!s.startAfterSet_),s.endSet_&&(t.ep=s.indexEndValue_,s.endNameSet_&&(t.en=s.indexEndName_),t.ein=!s.endBeforeSet_),s.limitSet_){t.l=s.limit_;let i=s.viewFrom_;i===""&&(s.isViewFromLeft()?i="l":i="r"),t.vf=i}return s.index_!==ze&&(t.i=s.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No extends jv{reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,i){return i!==void 0?"tag$"+i:(U(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}constructor(t,i,r,o){super(),this.repoInfo_=t,this.onDataUpdate_=i,this.authTokenProvider_=r,this.appCheckTokenProvider_=o,this.log_=Br("p:rest:"),this.listens_={}}listen(t,i,r,o){const u=t._path.toString();this.log_("Listen called for "+u+" "+t._queryIdentifier);const h=No.getListenId_(t,r),m={};this.listens_[h]=m;const g=X_(t._queryParams);this.restRequest_(u+".json",g,(p,v)=>{let b=v;if(p===404&&(b=null,p=null),p===null&&this.onDataUpdate_(u,b,!1,r),Zs(this.listens_,h)===m){let E;p?p===401?E="permission_denied":E="rest_error:"+p:E="ok",o(E,null)}})}unlisten(t,i){const r=No.getListenId_(t,i);delete this.listens_[r]}get(t){const i=X_(t._queryParams),r=t._path.toString(),o=new Bo;return this.restRequest_(r+".json",i,(u,h)=>{let m=h;u===404&&(m=null,u=null),u===null?(this.onDataUpdate_(r,m,!1,null),o.resolve(m)):o.reject(new Error(m))}),o.promise}refreshAuthToken(t){}restRequest_(t,i={},r){return i.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,u])=>{o&&o.accessToken&&(i.auth=o.accessToken),u&&u.token&&(i.ac=u.token);const h=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+sa(i);this.log_("Sending REST request for "+h);const m=new XMLHttpRequest;m.onreadystatechange=()=>{if(r&&m.readyState===4){this.log_("REST Response for "+h+" received. status:",m.status,"response:",m.responseText);let g=null;if(m.status>=200&&m.status<300){try{g=Sr(m.responseText)}catch{wt("Failed to parse JSON response for "+h+": "+m.responseText)}r(null,g)}else m.status!==401&&m.status!==404&&wt("Got unsuccessful REST response for "+h+" Status: "+m.status),r(m.status);r=null}},m.open("GET",h,!0),m.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(){this.rootNode_=Z.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,i){this.rootNode_=this.rootNode_.updateChild(t,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(){return{value:null,children:new Map}}function Jv(s,t,i){if(ce(t))s.value=i,s.children.clear();else if(s.value!==null)s.value=s.value.updateChild(t,i);else{const r=ae(t);s.children.has(r)||s.children.set(r,xo());const o=s.children.get(r);t=Ne(t),Jv(o,t,i)}}function Xf(s,t,i){s.value!==null?i(t,s.value):IA(s,(r,o)=>{const u=new Ae(t.toString()+"/"+r);Xf(o,u,i)})}function IA(s,t){s.children.forEach((i,r)=>{t(r,i)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),i={...t};return this.last_&&At(this.last_,(r,o)=>{i[r]=i[r]-o}),this.last_=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_=10*1e3,kA=30*1e3,LA=300*1e3;class UA{constructor(t,i){this.server_=i,this.statsToReport_={},this.statsListener_=new MA(t);const r=Z_+(kA-Z_)*Math.random();yr(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const t=this.statsListener_.get(),i={};let r=!1;At(t,(o,u)=>{u>0&&zn(this.statsToReport_,o)&&(i[o]=u,r=!0)}),r&&this.server_.reportStats(i),yr(this.reportStats_.bind(this),Math.floor(Math.random()*2*LA))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var en;(function(s){s[s.OVERWRITE=0]="OVERWRITE",s[s.MERGE=1]="MERGE",s[s.ACK_USER_WRITE=2]="ACK_USER_WRITE",s[s.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(en||(en={}));function $v(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function xh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Oh(s){return{fromUser:!1,fromServer:!0,queryId:s,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(t,i,r){this.path=t,this.affectedTree=i,this.revert=r,this.type=en.ACK_USER_WRITE,this.source=$v()}operationForChild(t){if(ce(this.path)){if(this.affectedTree.value!=null)return U(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const i=this.affectedTree.subtree(new Ae(t));return new Oo(ge(),i,this.revert)}}else return U(ae(this.path)===t,"operationForChild called for unrelated child."),new Oo(Ne(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(t,i){this.source=t,this.path=i,this.type=en.LISTEN_COMPLETE}operationForChild(t){return ce(this.path)?new Or(this.source,ge()):new Or(this.source,Ne(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(t,i,r){this.source=t,this.path=i,this.snap=r,this.type=en.OVERWRITE}operationForChild(t){return ce(this.path)?new Ji(this.source,ge(),this.snap.getImmediateChild(t)):new Ji(this.source,Ne(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(t,i,r){this.source=t,this.path=i,this.children=r,this.type=en.MERGE}operationForChild(t){if(ce(this.path)){const i=this.children.subtree(new Ae(t));return i.isEmpty()?null:i.value?new Ji(this.source,ge(),i.value):new Dr(this.source,ge(),i)}else return U(ae(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new Dr(this.source,Ne(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(t,i,r){this.node_=t,this.fullyInitialized_=i,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(ce(t))return this.isFullyInitialized()&&!this.filtered_;const i=ae(t);return this.isCompleteForChild(i)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function HA(s,t,i,r){const o=[],u=[];return t.forEach(h=>{h.type==="child_changed"&&s.index_.indexedValueChanged(h.oldSnap,h.snapshotNode)&&u.push(NA(h.childName,h.snapshotNode))}),hr(s,o,"child_removed",t,r,i),hr(s,o,"child_added",t,r,i),hr(s,o,"child_moved",u,r,i),hr(s,o,"child_changed",t,r,i),hr(s,o,"value",t,r,i),o}function hr(s,t,i,r,o,u){const h=r.filter(m=>m.type===i);h.sort((m,g)=>jA(s,m,g)),h.forEach(m=>{const g=BA(s,m,u);o.forEach(p=>{p.respondsTo(m.type)&&t.push(p.createEvent(g,s.query_))})})}function BA(s,t,i){return t.type==="value"||t.type==="child_removed"||(t.prevName=i.getPredecessorChildName(t.childName,t.snapshotNode,s.index_)),t}function jA(s,t,i){if(t.childName==null||i.childName==null)throw na("Should only compare child_ events.");const r=new re(t.childName,t.snapshotNode),o=new re(i.childName,i.snapshotNode);return s.index_.compare(r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(s,t){return{eventCache:s,serverCache:t}}function vr(s,t,i,r){return Yo(new $i(t,i,r),s.serverCache)}function e0(s,t,i,r){return Yo(s.eventCache,new $i(t,i,r))}function Wf(s){return s.eventCache.isFullyInitialized()?s.eventCache.getNode():null}function es(s){return s.serverCache.isFullyInitialized()?s.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Df;const PA=()=>(Df||(Df=new Ct(Aw)),Df);class Oe{static fromObject(t){let i=new Oe(null);return At(t,(r,o)=>{i=i.set(new Ae(r),o)}),i}constructor(t,i=PA()){this.value=t,this.children=i}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,i){if(this.value!=null&&i(this.value))return{path:ge(),value:this.value};if(ce(t))return null;{const r=ae(t),o=this.children.get(r);if(o!==null){const u=o.findRootMostMatchingPathAndValue(Ne(t),i);return u!=null?{path:Fe(new Ae(r),u.path),value:u.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(ce(t))return this;{const i=ae(t),r=this.children.get(i);return r!==null?r.subtree(Ne(t)):new Oe(null)}}set(t,i){if(ce(t))return new Oe(i,this.children);{const r=ae(t),u=(this.children.get(r)||new Oe(null)).set(Ne(t),i),h=this.children.insert(r,u);return new Oe(this.value,h)}}remove(t){if(ce(t))return this.children.isEmpty()?new Oe(null):new Oe(null,this.children);{const i=ae(t),r=this.children.get(i);if(r){const o=r.remove(Ne(t));let u;return o.isEmpty()?u=this.children.remove(i):u=this.children.insert(i,o),this.value===null&&u.isEmpty()?new Oe(null):new Oe(this.value,u)}else return this}}get(t){if(ce(t))return this.value;{const i=ae(t),r=this.children.get(i);return r?r.get(Ne(t)):null}}setTree(t,i){if(ce(t))return i;{const r=ae(t),u=(this.children.get(r)||new Oe(null)).setTree(Ne(t),i);let h;return u.isEmpty()?h=this.children.remove(r):h=this.children.insert(r,u),new Oe(this.value,h)}}fold(t){return this.fold_(ge(),t)}fold_(t,i){const r={};return this.children.inorderTraversal((o,u)=>{r[o]=u.fold_(Fe(t,o),i)}),i(t,this.value,r)}findOnPath(t,i){return this.findOnPath_(t,ge(),i)}findOnPath_(t,i,r){const o=this.value?r(i,this.value):!1;if(o)return o;if(ce(t))return null;{const u=ae(t),h=this.children.get(u);return h?h.findOnPath_(Ne(t),Fe(i,u),r):null}}foreachOnPath(t,i){return this.foreachOnPath_(t,ge(),i)}foreachOnPath_(t,i,r){if(ce(t))return this;{this.value&&r(i,this.value);const o=ae(t),u=this.children.get(o);return u?u.foreachOnPath_(Ne(t),Fe(i,o),r):new Oe(null)}}foreach(t){this.foreach_(ge(),t)}foreach_(t,i){this.children.inorderTraversal((r,o)=>{o.foreach_(Fe(t,r),i)}),this.value&&i(t,this.value)}foreachChild(t){this.children.inorderTraversal((i,r)=>{r.value&&t(i,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(t){this.writeTree_=t}static empty(){return new tn(new Oe(null))}}function Er(s,t,i){if(ce(t))return new tn(new Oe(i));{const r=s.writeTree_.findRootMostValueAndPath(t);if(r!=null){const o=r.path;let u=r.value;const h=Tt(o,t);return u=u.updateChild(h,i),new tn(s.writeTree_.set(o,u))}else{const o=new Oe(i),u=s.writeTree_.setTree(t,o);return new tn(u)}}}function J_(s,t,i){let r=s;return At(i,(o,u)=>{r=Er(r,Fe(t,o),u)}),r}function $_(s,t){if(ce(t))return tn.empty();{const i=s.writeTree_.setTree(t,new Oe(null));return new tn(i)}}function Zf(s,t){return ns(s,t)!=null}function ns(s,t){const i=s.writeTree_.findRootMostValueAndPath(t);return i!=null?s.writeTree_.get(i.path).getChild(Tt(i.path,t)):null}function ey(s){const t=[],i=s.writeTree_.value;return i!=null?i.isLeafNode()||i.forEachChild(ze,(r,o)=>{t.push(new re(r,o))}):s.writeTree_.children.inorderTraversal((r,o)=>{o.value!=null&&t.push(new re(r,o.value))}),t}function yi(s,t){if(ce(t))return s;{const i=ns(s,t);return i!=null?new tn(new Oe(i)):new tn(s.writeTree_.subtree(t))}}function Jf(s){return s.writeTree_.isEmpty()}function ta(s,t){return t0(ge(),s.writeTree_,t)}function t0(s,t,i){if(t.value!=null)return i.updateChild(s,t.value);{let r=null;return t.children.inorderTraversal((o,u)=>{o===".priority"?(U(u.value!==null,"Priority writes must always be leaf nodes"),r=u.value):i=t0(Fe(s,o),u,i)}),!i.getChild(s).isEmpty()&&r!==null&&(i=i.updateChild(Fe(s,".priority"),r)),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(s,t){return a0(t,s)}function qA(s,t,i,r,o){U(r>s.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),s.allWrites.push({path:t,snap:i,writeId:r,visible:o}),o&&(s.visibleWrites=Er(s.visibleWrites,t,i)),s.lastWriteId=r}function VA(s,t){for(let i=0;i<s.allWrites.length;i++){const r=s.allWrites[i];if(r.writeId===t)return r}return null}function GA(s,t){const i=s.allWrites.findIndex(m=>m.writeId===t);U(i>=0,"removeWrite called with nonexistent writeId.");const r=s.allWrites[i];s.allWrites.splice(i,1);let o=r.visible,u=!1,h=s.allWrites.length-1;for(;o&&h>=0;){const m=s.allWrites[h];m.visible&&(h>=i&&YA(m,r.path)?o=!1:$t(r.path,m.path)&&(u=!0)),h--}if(o){if(u)return FA(s),!0;if(r.snap)s.visibleWrites=$_(s.visibleWrites,r.path);else{const m=r.children;At(m,g=>{s.visibleWrites=$_(s.visibleWrites,Fe(r.path,g))})}return!0}else return!1}function YA(s,t){if(s.snap)return $t(s.path,t);for(const i in s.children)if(s.children.hasOwnProperty(i)&&$t(Fe(s.path,i),t))return!0;return!1}function FA(s){s.visibleWrites=n0(s.allWrites,QA,ge()),s.allWrites.length>0?s.lastWriteId=s.allWrites[s.allWrites.length-1].writeId:s.lastWriteId=-1}function QA(s){return s.visible}function n0(s,t,i){let r=tn.empty();for(let o=0;o<s.length;++o){const u=s[o];if(t(u)){const h=u.path;let m;if(u.snap)$t(i,h)?(m=Tt(i,h),r=Er(r,m,u.snap)):$t(h,i)&&(m=Tt(h,i),r=Er(r,ge(),u.snap.getChild(m)));else if(u.children){if($t(i,h))m=Tt(i,h),r=J_(r,m,u.children);else if($t(h,i))if(m=Tt(h,i),ce(m))r=J_(r,ge(),u.children);else{const g=Zs(u.children,ae(m));if(g){const p=g.getChild(Ne(m));r=Er(r,ge(),p)}}}else throw na("WriteRecord should have .snap or .children")}}return r}function i0(s,t,i,r,o){if(!r&&!o){const u=ns(s.visibleWrites,t);if(u!=null)return u;{const h=yi(s.visibleWrites,t);if(Jf(h))return i;if(i==null&&!Zf(h,ge()))return null;{const m=i||Z.EMPTY_NODE;return ta(h,m)}}}else{const u=yi(s.visibleWrites,t);if(!o&&Jf(u))return i;if(!o&&i==null&&!Zf(u,ge()))return null;{const h=function(p){return(p.visible||o)&&(!r||!~r.indexOf(p.writeId))&&($t(p.path,t)||$t(t,p.path))},m=n0(s.allWrites,h,t),g=i||Z.EMPTY_NODE;return ta(m,g)}}}function KA(s,t,i){let r=Z.EMPTY_NODE;const o=ns(s.visibleWrites,t);if(o)return o.isLeafNode()||o.forEachChild(ze,(u,h)=>{r=r.updateImmediateChild(u,h)}),r;if(i){const u=yi(s.visibleWrites,t);return i.forEachChild(ze,(h,m)=>{const g=ta(yi(u,new Ae(h)),m);r=r.updateImmediateChild(h,g)}),ey(u).forEach(h=>{r=r.updateImmediateChild(h.name,h.node)}),r}else{const u=yi(s.visibleWrites,t);return ey(u).forEach(h=>{r=r.updateImmediateChild(h.name,h.node)}),r}}function XA(s,t,i,r,o){U(r||o,"Either existingEventSnap or existingServerSnap must exist");const u=Fe(t,i);if(Zf(s.visibleWrites,u))return null;{const h=yi(s.visibleWrites,u);return Jf(h)?o.getChild(i):ta(h,o.getChild(i))}}function WA(s,t,i,r){const o=Fe(t,i),u=ns(s.visibleWrites,o);if(u!=null)return u;if(r.isCompleteForChild(i)){const h=yi(s.visibleWrites,o);return ta(h,r.getNode().getImmediateChild(i))}else return null}function ZA(s,t){return ns(s.visibleWrites,t)}function JA(s,t,i,r,o,u,h){let m;const g=yi(s.visibleWrites,t),p=ns(g,ge());if(p!=null)m=p;else if(i!=null)m=ta(g,i);else return[];if(m=m.withIndex(h),!m.isEmpty()&&!m.isLeafNode()){const v=[],b=h.getCompare(),E=u?m.getReverseIteratorFrom(r,h):m.getIteratorFrom(r,h);let L=E.getNext();for(;L&&v.length<o;)b(L,r)!==0&&v.push(L),L=E.getNext();return v}else return[]}function $A(){return{visibleWrites:tn.empty(),allWrites:[],lastWriteId:-1}}function Do(s,t,i,r){return i0(s.writeTree,s.treePath,t,i,r)}function Ih(s,t){return KA(s.writeTree,s.treePath,t)}function ty(s,t,i,r){return XA(s.writeTree,s.treePath,t,i,r)}function Io(s,t){return ZA(s.writeTree,Fe(s.treePath,t))}function eR(s,t,i,r,o,u){return JA(s.writeTree,s.treePath,t,i,r,o,u)}function Mh(s,t,i){return WA(s.writeTree,s.treePath,t,i)}function s0(s,t){return a0(Fe(s.treePath,t),s.writeTree)}function a0(s,t){return{treePath:s,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(){this.changeMap=new Map}trackChildChange(t){const i=t.type,r=t.childName;U(i==="child_added"||i==="child_changed"||i==="child_removed","Only child changes supported for tracking"),U(r!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(r);if(o){const u=o.type;if(i==="child_added"&&u==="child_removed")this.changeMap.set(r,Nr(r,t.snapshotNode,o.snapshotNode));else if(i==="child_removed"&&u==="child_added")this.changeMap.delete(r);else if(i==="child_removed"&&u==="child_changed")this.changeMap.set(r,Rr(r,o.oldSnap));else if(i==="child_changed"&&u==="child_added")this.changeMap.set(r,ea(r,t.snapshotNode));else if(i==="child_changed"&&u==="child_changed")this.changeMap.set(r,Nr(r,t.snapshotNode,o.oldSnap));else throw na("Illegal combination of changes: "+t+" occurred after "+o)}else this.changeMap.set(r,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{getCompleteChild(t){return null}getChildAfterChild(t,i,r){return null}}const r0=new nR;class kh{constructor(t,i,r=null){this.writes_=t,this.viewCache_=i,this.optCompleteServerCache_=r}getCompleteChild(t){const i=this.viewCache_.eventCache;if(i.isCompleteForChild(t))return i.getNode().getImmediateChild(t);{const r=this.optCompleteServerCache_!=null?new $i(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Mh(this.writes_,t,r)}}getChildAfterChild(t,i,r){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:es(this.viewCache_),u=eR(this.writes_,o,i,1,r,t);return u.length===0?null:u[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iR(s){return{filter:s}}function sR(s,t){U(t.eventCache.getNode().isIndexed(s.filter.getIndex()),"Event snap not indexed"),U(t.serverCache.getNode().isIndexed(s.filter.getIndex()),"Server snap not indexed")}function aR(s,t,i,r,o){const u=new tR;let h,m;if(i.type===en.OVERWRITE){const p=i;p.source.fromUser?h=$f(s,t,p.path,p.snap,r,o,u):(U(p.source.fromServer,"Unknown source."),m=p.source.tagged||t.serverCache.isFiltered()&&!ce(p.path),h=Mo(s,t,p.path,p.snap,r,o,m,u))}else if(i.type===en.MERGE){const p=i;p.source.fromUser?h=lR(s,t,p.path,p.children,r,o,u):(U(p.source.fromServer,"Unknown source."),m=p.source.tagged||t.serverCache.isFiltered(),h=eh(s,t,p.path,p.children,r,o,m,u))}else if(i.type===en.ACK_USER_WRITE){const p=i;p.revert?h=uR(s,t,p.path,r,o,u):h=oR(s,t,p.path,p.affectedTree,r,o,u)}else if(i.type===en.LISTEN_COMPLETE)h=cR(s,t,i.path,r,u);else throw na("Unknown operation type: "+i.type);const g=u.getChanges();return rR(t,h,g),{viewCache:h,changes:g}}function rR(s,t,i){const r=t.eventCache;if(r.isFullyInitialized()){const o=r.getNode().isLeafNode()||r.getNode().isEmpty(),u=Wf(s);(i.length>0||!s.eventCache.isFullyInitialized()||o&&!r.getNode().equals(u)||!r.getNode().getPriority().equals(u.getPriority()))&&i.push(Zv(Wf(t)))}}function l0(s,t,i,r,o,u){const h=t.eventCache;if(Io(r,i)!=null)return t;{let m,g;if(ce(i))if(U(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const p=es(t),v=p instanceof Z?p:Z.EMPTY_NODE,b=Ih(r,v);m=s.filter.updateFullNode(t.eventCache.getNode(),b,u)}else{const p=Do(r,es(t));m=s.filter.updateFullNode(t.eventCache.getNode(),p,u)}else{const p=ae(i);if(p===".priority"){U(vi(i)===1,"Can't have a priority with additional path components");const v=h.getNode();g=t.serverCache.getNode();const b=ty(r,i,v,g);b!=null?m=s.filter.updatePriority(v,b):m=h.getNode()}else{const v=Ne(i);let b;if(h.isCompleteForChild(p)){g=t.serverCache.getNode();const E=ty(r,i,h.getNode(),g);E!=null?b=h.getNode().getImmediateChild(p).updateChild(v,E):b=h.getNode().getImmediateChild(p)}else b=Mh(r,p,t.serverCache);b!=null?m=s.filter.updateChild(h.getNode(),p,b,v,o,u):m=h.getNode()}}return vr(t,m,h.isFullyInitialized()||ce(i),s.filter.filtersNodes())}}function Mo(s,t,i,r,o,u,h,m){const g=t.serverCache;let p;const v=h?s.filter:s.filter.getIndexedFilter();if(ce(i))p=v.updateFullNode(g.getNode(),r,null);else if(v.filtersNodes()&&!g.isFiltered()){const L=g.getNode().updateChild(i,r);p=v.updateFullNode(g.getNode(),L,null)}else{const L=ae(i);if(!g.isCompleteForPath(i)&&vi(i)>1)return t;const z=Ne(i),J=g.getNode().getImmediateChild(L).updateChild(z,r);L===".priority"?p=v.updatePriority(g.getNode(),J):p=v.updateChild(g.getNode(),L,J,z,r0,null)}const b=e0(t,p,g.isFullyInitialized()||ce(i),v.filtersNodes()),E=new kh(o,b,u);return l0(s,b,i,o,E,m)}function $f(s,t,i,r,o,u,h){const m=t.eventCache;let g,p;const v=new kh(o,t,u);if(ce(i))p=s.filter.updateFullNode(t.eventCache.getNode(),r,h),g=vr(t,p,!0,s.filter.filtersNodes());else{const b=ae(i);if(b===".priority")p=s.filter.updatePriority(t.eventCache.getNode(),r),g=vr(t,p,m.isFullyInitialized(),m.isFiltered());else{const E=Ne(i),L=m.getNode().getImmediateChild(b);let z;if(ce(E))z=r;else{const Q=v.getCompleteChild(b);Q!=null?qv(E)===".priority"&&Q.getChild(Gv(E)).isEmpty()?z=Q:z=Q.updateChild(E,r):z=Z.EMPTY_NODE}if(L.equals(z))g=t;else{const Q=s.filter.updateChild(m.getNode(),b,z,E,v,h);g=vr(t,Q,m.isFullyInitialized(),s.filter.filtersNodes())}}}return g}function ny(s,t){return s.eventCache.isCompleteForChild(t)}function lR(s,t,i,r,o,u,h){let m=t;return r.foreach((g,p)=>{const v=Fe(i,g);ny(t,ae(v))&&(m=$f(s,m,v,p,o,u,h))}),r.foreach((g,p)=>{const v=Fe(i,g);ny(t,ae(v))||(m=$f(s,m,v,p,o,u,h))}),m}function iy(s,t,i){return i.foreach((r,o)=>{t=t.updateChild(r,o)}),t}function eh(s,t,i,r,o,u,h,m){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let g=t,p;ce(i)?p=r:p=new Oe(null).setTree(i,r);const v=t.serverCache.getNode();return p.children.inorderTraversal((b,E)=>{if(v.hasChild(b)){const L=t.serverCache.getNode().getImmediateChild(b),z=iy(s,L,E);g=Mo(s,g,new Ae(b),z,o,u,h,m)}}),p.children.inorderTraversal((b,E)=>{const L=!t.serverCache.isCompleteForChild(b)&&E.value===null;if(!v.hasChild(b)&&!L){const z=t.serverCache.getNode().getImmediateChild(b),Q=iy(s,z,E);g=Mo(s,g,new Ae(b),Q,o,u,h,m)}}),g}function oR(s,t,i,r,o,u,h){if(Io(o,i)!=null)return t;const m=t.serverCache.isFiltered(),g=t.serverCache;if(r.value!=null){if(ce(i)&&g.isFullyInitialized()||g.isCompleteForPath(i))return Mo(s,t,i,g.getNode().getChild(i),o,u,m,h);if(ce(i)){let p=new Oe(null);return g.getNode().forEachChild(Xs,(v,b)=>{p=p.set(new Ae(v),b)}),eh(s,t,i,p,o,u,m,h)}else return t}else{let p=new Oe(null);return r.foreach((v,b)=>{const E=Fe(i,v);g.isCompleteForPath(E)&&(p=p.set(v,g.getNode().getChild(E)))}),eh(s,t,i,p,o,u,m,h)}}function cR(s,t,i,r,o){const u=t.serverCache,h=e0(t,u.getNode(),u.isFullyInitialized()||ce(i),u.isFiltered());return l0(s,h,i,r,r0,o)}function uR(s,t,i,r,o,u){let h;if(Io(r,i)!=null)return t;{const m=new kh(r,t,o),g=t.eventCache.getNode();let p;if(ce(i)||ae(i)===".priority"){let v;if(t.serverCache.isFullyInitialized())v=Do(r,es(t));else{const b=t.serverCache.getNode();U(b instanceof Z,"serverChildren would be complete if leaf node"),v=Ih(r,b)}v=v,p=s.filter.updateFullNode(g,v,u)}else{const v=ae(i);let b=Mh(r,v,t.serverCache);b==null&&t.serverCache.isCompleteForChild(v)&&(b=g.getImmediateChild(v)),b!=null?p=s.filter.updateChild(g,v,b,Ne(i),m,u):t.eventCache.getNode().hasChild(v)?p=s.filter.updateChild(g,v,Z.EMPTY_NODE,Ne(i),m,u):p=g,p.isEmpty()&&t.serverCache.isFullyInitialized()&&(h=Do(r,es(t)),h.isLeafNode()&&(p=s.filter.updateFullNode(p,h,u)))}return h=t.serverCache.isFullyInitialized()||Io(r,ge())!=null,vr(t,p,h,s.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(t,i){this.query_=t,this.eventRegistrations_=[];const r=this.query_._queryParams,o=new Rh(r.getIndex()),u=OA(r);this.processor_=iR(u);const h=i.serverCache,m=i.eventCache,g=o.updateFullNode(Z.EMPTY_NODE,h.getNode(),null),p=u.updateFullNode(Z.EMPTY_NODE,m.getNode(),null),v=new $i(g,h.isFullyInitialized(),o.filtersNodes()),b=new $i(p,m.isFullyInitialized(),u.filtersNodes());this.viewCache_=Yo(b,v),this.eventGenerator_=new zA(this.query_)}get query(){return this.query_}}function hR(s){return s.viewCache_.serverCache.getNode()}function dR(s,t){const i=es(s.viewCache_);return i&&(s.query._queryParams.loadsAllData()||!ce(t)&&!i.getImmediateChild(ae(t)).isEmpty())?i.getChild(t):null}function sy(s){return s.eventRegistrations_.length===0}function mR(s,t){s.eventRegistrations_.push(t)}function ay(s,t,i){const r=[];if(i){U(t==null,"A cancel should cancel all event registrations.");const o=s.query._path;s.eventRegistrations_.forEach(u=>{const h=u.createCancelEvent(i,o);h&&r.push(h)})}if(t){let o=[];for(let u=0;u<s.eventRegistrations_.length;++u){const h=s.eventRegistrations_[u];if(!h.matches(t))o.push(h);else if(t.hasAnyCallback()){o=o.concat(s.eventRegistrations_.slice(u+1));break}}s.eventRegistrations_=o}else s.eventRegistrations_=[];return r}function ry(s,t,i,r){t.type===en.MERGE&&t.source.queryId!==null&&(U(es(s.viewCache_),"We should always have a full cache before handling merges"),U(Wf(s.viewCache_),"Missing event cache, even though we have a server cache"));const o=s.viewCache_,u=aR(s.processor_,o,t,i,r);return sR(s.processor_,u.viewCache),U(u.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),s.viewCache_=u.viewCache,o0(s,u.changes,u.viewCache.eventCache.getNode(),null)}function pR(s,t){const i=s.viewCache_.eventCache,r=[];return i.getNode().isLeafNode()||i.getNode().forEachChild(ze,(u,h)=>{r.push(ea(u,h))}),i.isFullyInitialized()&&r.push(Zv(i.getNode())),o0(s,r,i.getNode(),t)}function o0(s,t,i,r){const o=r?[r]:s.eventRegistrations_;return HA(s.eventGenerator_,t,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ko;class gR{constructor(){this.views=new Map}}function _R(s){U(!ko,"__referenceConstructor has already been defined"),ko=s}function yR(){return U(ko,"Reference.ts has not been loaded"),ko}function vR(s){return s.views.size===0}function Lh(s,t,i,r){const o=t.source.queryId;if(o!==null){const u=s.views.get(o);return U(u!=null,"SyncTree gave us an op for an invalid query."),ry(u,t,i,r)}else{let u=[];for(const h of s.views.values())u=u.concat(ry(h,t,i,r));return u}}function ER(s,t,i,r,o){const u=t._queryIdentifier,h=s.views.get(u);if(!h){let m=Do(i,o?r:null),g=!1;m?g=!0:r instanceof Z?(m=Ih(i,r),g=!1):(m=Z.EMPTY_NODE,g=!1);const p=Yo(new $i(m,g,!1),new $i(r,o,!1));return new fR(t,p)}return h}function bR(s,t,i,r,o,u){const h=ER(s,t,r,o,u);return s.views.has(t._queryIdentifier)||s.views.set(t._queryIdentifier,h),mR(h,i),pR(h,i)}function SR(s,t,i,r){const o=t._queryIdentifier,u=[];let h=[];const m=Ei(s);if(o==="default")for(const[g,p]of s.views.entries())h=h.concat(ay(p,i,r)),sy(p)&&(s.views.delete(g),p.query._queryParams.loadsAllData()||u.push(p.query));else{const g=s.views.get(o);g&&(h=h.concat(ay(g,i,r)),sy(g)&&(s.views.delete(o),g.query._queryParams.loadsAllData()||u.push(g.query)))}return m&&!Ei(s)&&u.push(new(yR())(t._repo,t._path)),{removed:u,events:h}}function c0(s){const t=[];for(const i of s.views.values())i.query._queryParams.loadsAllData()||t.push(i);return t}function Ws(s,t){let i=null;for(const r of s.views.values())i=i||dR(r,t);return i}function u0(s,t){if(t._queryParams.loadsAllData())return Fo(s);{const r=t._queryIdentifier;return s.views.get(r)}}function f0(s,t){return u0(s,t)!=null}function Ei(s){return Fo(s)!=null}function Fo(s){for(const t of s.views.values())if(t.query._queryParams.loadsAllData())return t;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lo;function TR(s){U(!Lo,"__referenceConstructor has already been defined"),Lo=s}function CR(){return U(Lo,"Reference.ts has not been loaded"),Lo}let wR=1;class ly{constructor(t){this.listenProvider_=t,this.syncPointTree_=new Oe(null),this.pendingWriteTree_=$A(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function h0(s,t,i,r,o){return qA(s.pendingWriteTree_,t,i,r,o),o?Pr(s,new Ji($v(),t,i)):[]}function Fi(s,t,i=!1){const r=VA(s.pendingWriteTree_,t);if(GA(s.pendingWriteTree_,t)){let u=new Oe(null);return r.snap!=null?u=u.set(ge(),!0):At(r.children,h=>{u=u.set(new Ae(h),!0)}),Pr(s,new Oo(r.path,u,i))}else return[]}function Qo(s,t,i){return Pr(s,new Ji(xh(),t,i))}function AR(s,t,i){const r=Oe.fromObject(i);return Pr(s,new Dr(xh(),t,r))}function RR(s,t){return Pr(s,new Or(xh(),t))}function NR(s,t,i){const r=zh(s,i);if(r){const o=Hh(r),u=o.path,h=o.queryId,m=Tt(u,t),g=new Or(Oh(h),m);return Bh(s,u,g)}else return[]}function th(s,t,i,r,o=!1){const u=t._path,h=s.syncPointTree_.get(u);let m=[];if(h&&(t._queryIdentifier==="default"||f0(h,t))){const g=SR(h,t,i,r);vR(h)&&(s.syncPointTree_=s.syncPointTree_.remove(u));const p=g.removed;if(m=g.events,!o){const v=p.findIndex(E=>E._queryParams.loadsAllData())!==-1,b=s.syncPointTree_.findOnPath(u,(E,L)=>Ei(L));if(v&&!b){const E=s.syncPointTree_.subtree(u);if(!E.isEmpty()){const L=DR(E);for(let z=0;z<L.length;++z){const Q=L[z],J=Q.query,Te=p0(s,Q);s.listenProvider_.startListening(br(J),Uo(s,J),Te.hashFn,Te.onComplete)}}}!b&&p.length>0&&!r&&(v?s.listenProvider_.stopListening(br(t),null):p.forEach(E=>{const L=s.queryToTagMap.get(Ko(E));s.listenProvider_.stopListening(br(E),L)}))}IR(s,p)}return m}function xR(s,t,i,r){const o=zh(s,r);if(o!=null){const u=Hh(o),h=u.path,m=u.queryId,g=Tt(h,t),p=new Ji(Oh(m),g,i);return Bh(s,h,p)}else return[]}function OR(s,t,i,r){const o=zh(s,r);if(o){const u=Hh(o),h=u.path,m=u.queryId,g=Tt(h,t),p=Oe.fromObject(i),v=new Dr(Oh(m),g,p);return Bh(s,h,v)}else return[]}function oy(s,t,i,r=!1){const o=t._path;let u=null,h=!1;s.syncPointTree_.foreachOnPath(o,(E,L)=>{const z=Tt(E,o);u=u||Ws(L,z),h=h||Ei(L)});let m=s.syncPointTree_.get(o);m?(h=h||Ei(m),u=u||Ws(m,ge())):(m=new gR,s.syncPointTree_=s.syncPointTree_.set(o,m));let g;u!=null?g=!0:(g=!1,u=Z.EMPTY_NODE,s.syncPointTree_.subtree(o).foreachChild((L,z)=>{const Q=Ws(z,ge());Q&&(u=u.updateImmediateChild(L,Q))}));const p=f0(m,t);if(!p&&!t._queryParams.loadsAllData()){const E=Ko(t);U(!s.queryToTagMap.has(E),"View does not exist, but we have a tag");const L=MR();s.queryToTagMap.set(E,L),s.tagToQueryMap.set(L,E)}const v=Dh(s.pendingWriteTree_,o);let b=bR(m,t,i,v,u,g);if(!p&&!h&&!r){const E=u0(m,t);b=b.concat(kR(s,t,E))}return b}function Uh(s,t,i){const o=s.pendingWriteTree_,u=s.syncPointTree_.findOnPath(t,(h,m)=>{const g=Tt(h,t),p=Ws(m,g);if(p)return p});return i0(o,t,u,i,!0)}function Pr(s,t){return d0(t,s.syncPointTree_,null,Dh(s.pendingWriteTree_,ge()))}function d0(s,t,i,r){if(ce(s.path))return m0(s,t,i,r);{const o=t.get(ge());i==null&&o!=null&&(i=Ws(o,ge()));let u=[];const h=ae(s.path),m=s.operationForChild(h),g=t.children.get(h);if(g&&m){const p=i?i.getImmediateChild(h):null,v=s0(r,h);u=u.concat(d0(m,g,p,v))}return o&&(u=u.concat(Lh(o,s,r,i))),u}}function m0(s,t,i,r){const o=t.get(ge());i==null&&o!=null&&(i=Ws(o,ge()));let u=[];return t.children.inorderTraversal((h,m)=>{const g=i?i.getImmediateChild(h):null,p=s0(r,h),v=s.operationForChild(h);v&&(u=u.concat(m0(v,m,g,p)))}),o&&(u=u.concat(Lh(o,s,r,i))),u}function p0(s,t){const i=t.query,r=Uo(s,i);return{hashFn:()=>(hR(t)||Z.EMPTY_NODE).hash(),onComplete:o=>{if(o==="ok")return r?NR(s,i._path,r):RR(s,i._path);{const u=xw(o,i);return th(s,i,null,u)}}}}function Uo(s,t){const i=Ko(t);return s.queryToTagMap.get(i)}function Ko(s){return s._path.toString()+"$"+s._queryIdentifier}function zh(s,t){return s.tagToQueryMap.get(t)}function Hh(s){const t=s.indexOf("$");return U(t!==-1&&t<s.length-1,"Bad queryKey."),{queryId:s.substr(t+1),path:new Ae(s.substr(0,t))}}function Bh(s,t,i){const r=s.syncPointTree_.get(t);U(r,"Missing sync point for query tag that we're tracking");const o=Dh(s.pendingWriteTree_,t);return Lh(r,i,o,null)}function DR(s){return s.fold((t,i,r)=>{if(i&&Ei(i))return[Fo(i)];{let o=[];return i&&(o=c0(i)),At(r,(u,h)=>{o=o.concat(h)}),o}})}function br(s){return s._queryParams.loadsAllData()&&!s._queryParams.isDefault()?new(CR())(s._repo,s._path):s}function IR(s,t){for(let i=0;i<t.length;++i){const r=t[i];if(!r._queryParams.loadsAllData()){const o=Ko(r),u=s.queryToTagMap.get(o);s.queryToTagMap.delete(o),s.tagToQueryMap.delete(u)}}}function MR(){return wR++}function kR(s,t,i){const r=t._path,o=Uo(s,t),u=p0(s,i),h=s.listenProvider_.startListening(br(t),o,u.hashFn,u.onComplete),m=s.syncPointTree_.subtree(r);if(o)U(!Ei(m.value),"If we're adding a query, it shouldn't be shadowed");else{const g=m.fold((p,v,b)=>{if(!ce(p)&&v&&Ei(v))return[Fo(v).query];{let E=[];return v&&(E=E.concat(c0(v).map(L=>L.query))),At(b,(L,z)=>{E=E.concat(z)}),E}});for(let p=0;p<g.length;++p){const v=g[p];s.listenProvider_.stopListening(br(v),Uo(s,v))}}return h}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(t){this.node_=t}getImmediateChild(t){const i=this.node_.getImmediateChild(t);return new jh(i)}node(){return this.node_}}class Ph{constructor(t,i){this.syncTree_=t,this.path_=i}getImmediateChild(t){const i=Fe(this.path_,t);return new Ph(this.syncTree_,i)}node(){return Uh(this.syncTree_,this.path_)}}const LR=function(s){return s=s||{},s.timestamp=s.timestamp||new Date().getTime(),s},cy=function(s,t,i){if(!s||typeof s!="object")return s;if(U(".sv"in s,"Unexpected leaf node or priority contents"),typeof s[".sv"]=="string")return UR(s[".sv"],t,i);if(typeof s[".sv"]=="object")return zR(s[".sv"],t);U(!1,"Unexpected server value: "+JSON.stringify(s,null,2))},UR=function(s,t,i){switch(s){case"timestamp":return i.timestamp;default:U(!1,"Unexpected server value: "+s)}},zR=function(s,t,i){s.hasOwnProperty("increment")||U(!1,"Unexpected server value: "+JSON.stringify(s,null,2));const r=s.increment;typeof r!="number"&&U(!1,"Unexpected increment value: "+r);const o=t.node();if(U(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return r;const h=o.getValue();return typeof h!="number"?r:h+r},HR=function(s,t,i,r){return qh(t,new Ph(i,s),r)},g0=function(s,t,i){return qh(s,new jh(t),i)};function qh(s,t,i){const r=s.getPriority().val(),o=cy(r,t.getImmediateChild(".priority"),i);let u;if(s.isLeafNode()){const h=s,m=cy(h.getValue(),t,i);return m!==h.getValue()||o!==h.getPriority().val()?new Je(m,at(o)):s}else{const h=s;return u=h,o!==h.getPriority().val()&&(u=u.updatePriority(new Je(o))),h.forEachChild(ze,(m,g)=>{const p=qh(g,t.getImmediateChild(m),i);p!==g&&(u=u.updateImmediateChild(m,p))}),u}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(t="",i=null,r={children:{},childCount:0}){this.name=t,this.parent=i,this.node=r}}function Gh(s,t){let i=t instanceof Ae?t:new Ae(t),r=s,o=ae(i);for(;o!==null;){const u=Zs(r.node.children,o)||{children:{},childCount:0};r=new Vh(o,r,u),i=Ne(i),o=ae(i)}return r}function ca(s){return s.node.value}function _0(s,t){s.node.value=t,nh(s)}function y0(s){return s.node.childCount>0}function BR(s){return ca(s)===void 0&&!y0(s)}function Xo(s,t){At(s.node.children,(i,r)=>{t(new Vh(i,s,r))})}function v0(s,t,i,r){i&&t(s),Xo(s,o=>{v0(o,t,!0)})}function jR(s,t,i){let r=s.parent;for(;r!==null;){if(t(r))return!0;r=r.parent}return!1}function qr(s){return new Ae(s.parent===null?s.name:qr(s.parent)+"/"+s.name)}function nh(s){s.parent!==null&&PR(s.parent,s.name,s)}function PR(s,t,i){const r=BR(i),o=zn(s.node.children,t);r&&o?(delete s.node.children[t],s.node.childCount--,nh(s)):!r&&!o&&(s.node.children[t]=i.node,s.node.childCount++,nh(s))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qR=/[\[\].#$\/\u0000-\u001F\u007F]/,VR=/[\[\].#$\u0000-\u001F\u007F]/,If=10*1024*1024,E0=function(s){return typeof s=="string"&&s.length!==0&&!qR.test(s)},b0=function(s){return typeof s=="string"&&s.length!==0&&!VR.test(s)},GR=function(s){return s&&(s=s.replace(/^\/*\.info(\/|$)/,"/")),b0(s)},S0=function(s,t,i,r){r&&t===void 0||Yh(oh(s,"value"),t,i)},Yh=function(s,t,i){const r=i instanceof Ae?new oA(i,s):i;if(t===void 0)throw new Error(s+"contains undefined "+Gi(r));if(typeof t=="function")throw new Error(s+"contains a function "+Gi(r)+" with contents = "+t.toString());if(bv(t))throw new Error(s+"contains "+t.toString()+" "+Gi(r));if(typeof t=="string"&&t.length>If/3&&jo(t)>If)throw new Error(s+"contains a string greater than "+If+" utf8 bytes "+Gi(r)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let o=!1,u=!1;if(At(t,(h,m)=>{if(h===".value")o=!0;else if(h!==".priority"&&h!==".sv"&&(u=!0,!E0(h)))throw new Error(s+" contains an invalid key ("+h+") "+Gi(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);cA(r,h),Yh(s,m,r),uA(r)}),o&&u)throw new Error(s+' contains ".value" child '+Gi(r)+" in addition to actual children.")}},T0=function(s,t,i,r){if(!b0(i))throw new Error(oh(s,t)+'was an invalid path = "'+i+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},YR=function(s,t,i,r){i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),T0(s,t,i)},C0=function(s,t){if(ae(t)===".info")throw new Error(s+" failed = Can't modify data under /.info/")},FR=function(s,t){const i=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!E0(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||i.length!==0&&!GR(i))throw new Error(oh(s,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Fh(s,t){let i=null;for(let r=0;r<t.length;r++){const o=t[r],u=o.getPath();i!==null&&!Ch(u,i.path)&&(s.eventLists_.push(i),i=null),i===null&&(i={events:[],path:u}),i.events.push(o)}i&&s.eventLists_.push(i)}function w0(s,t,i){Fh(s,i),A0(s,r=>Ch(r,t))}function Ln(s,t,i){Fh(s,i),A0(s,r=>$t(r,t)||$t(t,r))}function A0(s,t){s.recursionDepth_++;let i=!0;for(let r=0;r<s.eventLists_.length;r++){const o=s.eventLists_[r];if(o){const u=o.path;t(u)?(KR(s.eventLists_[r]),s.eventLists_[r]=null):i=!1}}i&&(s.eventLists_=[]),s.recursionDepth_--}function KR(s){for(let t=0;t<s.events.length;t++){const i=s.events[t];if(i!==null){s.events[t]=null;const r=i.getEventRunner();_r&&dt("event: "+i.toString()),oa(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XR="repo_interrupt",WR=25;class ZR{constructor(t,i,r,o){this.repoInfo_=t,this.forceRestClient_=i,this.authTokenProvider_=r,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new QR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=xo(),this.transactionQueueTree_=new Vh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function JR(s,t,i){if(s.stats_=Sh(s.repoInfo_),s.forceRestClient_||Mw())s.server_=new No(s.repoInfo_,(r,o,u,h)=>{uy(s,r,o,u,h)},s.authTokenProvider_,s.appCheckProvider_),setTimeout(()=>fy(s,!0),0);else{if(typeof i<"u"&&i!==null){if(typeof i!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{et(i)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}s.persistentConnection_=new Dn(s.repoInfo_,t,(r,o,u,h)=>{uy(s,r,o,u,h)},r=>{fy(s,r)},r=>{$R(s,r)},s.authTokenProvider_,s.appCheckProvider_,i),s.server_=s.persistentConnection_}s.authTokenProvider_.addTokenChangeListener(r=>{s.server_.refreshAuthToken(r)}),s.appCheckProvider_.addTokenChangeListener(r=>{s.server_.refreshAppCheckToken(r.token)}),s.statsReporter_=Hw(s.repoInfo_,()=>new UA(s.stats_,s.server_)),s.infoData_=new DA,s.infoSyncTree_=new ly({startListening:(r,o,u,h)=>{let m=[];const g=s.infoData_.getNode(r._path);return g.isEmpty()||(m=Qo(s.infoSyncTree_,r._path,g),setTimeout(()=>{h("ok")},0)),m},stopListening:()=>{}}),Kh(s,"connected",!1),s.serverSyncTree_=new ly({startListening:(r,o,u,h)=>(s.server_.listen(r,u,o,(m,g)=>{const p=h(m,g);Ln(s.eventQueue_,r._path,p)}),[]),stopListening:(r,o)=>{s.server_.unlisten(r,o)}})}function R0(s){const i=s.infoData_.getNode(new Ae(".info/serverTimeOffset")).val()||0;return new Date().getTime()+i}function Qh(s){return LR({timestamp:R0(s)})}function uy(s,t,i,r,o){s.dataUpdateCount++;const u=new Ae(t);i=s.interceptServerDataCallback_?s.interceptServerDataCallback_(t,i):i;let h=[];if(o)if(r){const g=_o(i,p=>at(p));h=OR(s.serverSyncTree_,u,g,o)}else{const g=at(i);h=xR(s.serverSyncTree_,u,g,o)}else if(r){const g=_o(i,p=>at(p));h=AR(s.serverSyncTree_,u,g)}else{const g=at(i);h=Qo(s.serverSyncTree_,u,g)}let m=u;h.length>0&&(m=Wo(s,u)),Ln(s.eventQueue_,m,h)}function fy(s,t){Kh(s,"connected",t),t===!1&&tN(s)}function $R(s,t){At(t,(i,r)=>{Kh(s,i,r)})}function Kh(s,t,i){const r=new Ae("/.info/"+t),o=at(i);s.infoData_.updateSnapshot(r,o);const u=Qo(s.infoSyncTree_,r,o);Ln(s.eventQueue_,r,u)}function N0(s){return s.nextWriteId_++}function eN(s,t,i,r,o){Xh(s,"set",{path:t.toString(),value:i,priority:r});const u=Qh(s),h=at(i,r),m=Uh(s.serverSyncTree_,t),g=g0(h,m,u),p=N0(s),v=h0(s.serverSyncTree_,t,g,p,!0);Fh(s.eventQueue_,v),s.server_.put(t.toString(),h.val(!0),(E,L)=>{const z=E==="ok";z||wt("set at "+t+" failed: "+E);const Q=Fi(s.serverSyncTree_,p,!z);Ln(s.eventQueue_,t,Q),aN(s,o,E,L)});const b=M0(s,t);Wo(s,b),Ln(s.eventQueue_,b,[])}function tN(s){Xh(s,"onDisconnectEvents");const t=Qh(s),i=xo();Xf(s.onDisconnect_,ge(),(o,u)=>{const h=HR(o,u,s.serverSyncTree_,t);Jv(i,o,h)});let r=[];Xf(i,ge(),(o,u)=>{r=r.concat(Qo(s.serverSyncTree_,o,u));const h=M0(s,o);Wo(s,h)}),s.onDisconnect_=xo(),Ln(s.eventQueue_,ge(),r)}function nN(s,t,i){let r;ae(t._path)===".info"?r=oy(s.infoSyncTree_,t,i):r=oy(s.serverSyncTree_,t,i),w0(s.eventQueue_,t._path,r)}function iN(s,t,i){let r;ae(t._path)===".info"?r=th(s.infoSyncTree_,t,i):r=th(s.serverSyncTree_,t,i),w0(s.eventQueue_,t._path,r)}function sN(s){s.persistentConnection_&&s.persistentConnection_.interrupt(XR)}function Xh(s,...t){let i="";s.persistentConnection_&&(i=s.persistentConnection_.id+":"),dt(i,...t)}function aN(s,t,i,r){t&&oa(()=>{if(i==="ok")t(null);else{const o=(i||"error").toUpperCase();let u=o;r&&(u+=": "+r);const h=new Error(u);h.code=o,t(h)}})}function x0(s,t,i){return Uh(s.serverSyncTree_,t,i)||Z.EMPTY_NODE}function Wh(s,t=s.transactionQueueTree_){if(t||Zo(s,t),ca(t)){const i=D0(s,t);U(i.length>0,"Sending zero length transaction queue"),i.every(o=>o.status===0)&&rN(s,qr(t),i)}else y0(t)&&Xo(t,i=>{Wh(s,i)})}function rN(s,t,i){const r=i.map(p=>p.currentWriteId),o=x0(s,t,r);let u=o;const h=o.hash();for(let p=0;p<i.length;p++){const v=i[p];U(v.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),v.status=1,v.retryCount++;const b=Tt(t,v.path);u=u.updateChild(b,v.currentOutputSnapshotRaw)}const m=u.val(!0),g=t;s.server_.put(g.toString(),m,p=>{Xh(s,"transaction put response",{path:g.toString(),status:p});let v=[];if(p==="ok"){const b=[];for(let E=0;E<i.length;E++)i[E].status=2,v=v.concat(Fi(s.serverSyncTree_,i[E].currentWriteId)),i[E].onComplete&&b.push(()=>i[E].onComplete(null,!0,i[E].currentOutputSnapshotResolved)),i[E].unwatcher();Zo(s,Gh(s.transactionQueueTree_,t)),Wh(s,s.transactionQueueTree_),Ln(s.eventQueue_,t,v);for(let E=0;E<b.length;E++)oa(b[E])}else{if(p==="datastale")for(let b=0;b<i.length;b++)i[b].status===3?i[b].status=4:i[b].status=0;else{wt("transaction at "+g.toString()+" failed: "+p);for(let b=0;b<i.length;b++)i[b].status=4,i[b].abortReason=p}Wo(s,t)}},h)}function Wo(s,t){const i=O0(s,t),r=qr(i),o=D0(s,i);return lN(s,o,r),r}function lN(s,t,i){if(t.length===0)return;const r=[];let o=[];const h=t.filter(m=>m.status===0).map(m=>m.currentWriteId);for(let m=0;m<t.length;m++){const g=t[m],p=Tt(i,g.path);let v=!1,b;if(U(p!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),g.status===4)v=!0,b=g.abortReason,o=o.concat(Fi(s.serverSyncTree_,g.currentWriteId,!0));else if(g.status===0)if(g.retryCount>=WR)v=!0,b="maxretry",o=o.concat(Fi(s.serverSyncTree_,g.currentWriteId,!0));else{const E=x0(s,g.path,h);g.currentInputSnapshot=E;const L=t[m].update(E.val());if(L!==void 0){Yh("transaction failed: Data returned ",L,g.path);let z=at(L);typeof L=="object"&&L!=null&&zn(L,".priority")||(z=z.updatePriority(E.getPriority()));const J=g.currentWriteId,Te=Qh(s),Y=g0(z,E,Te);g.currentOutputSnapshotRaw=z,g.currentOutputSnapshotResolved=Y,g.currentWriteId=N0(s),h.splice(h.indexOf(J),1),o=o.concat(h0(s.serverSyncTree_,g.path,Y,g.currentWriteId,g.applyLocally)),o=o.concat(Fi(s.serverSyncTree_,J,!0))}else v=!0,b="nodata",o=o.concat(Fi(s.serverSyncTree_,g.currentWriteId,!0))}Ln(s.eventQueue_,i,o),o=[],v&&(t[m].status=2,(function(E){setTimeout(E,Math.floor(0))})(t[m].unwatcher),t[m].onComplete&&(b==="nodata"?r.push(()=>t[m].onComplete(null,!1,t[m].currentInputSnapshot)):r.push(()=>t[m].onComplete(new Error(b),!1,null))))}Zo(s,s.transactionQueueTree_);for(let m=0;m<r.length;m++)oa(r[m]);Wh(s,s.transactionQueueTree_)}function O0(s,t){let i,r=s.transactionQueueTree_;for(i=ae(t);i!==null&&ca(r)===void 0;)r=Gh(r,i),t=Ne(t),i=ae(t);return r}function D0(s,t){const i=[];return I0(s,t,i),i.sort((r,o)=>r.order-o.order),i}function I0(s,t,i){const r=ca(t);if(r)for(let o=0;o<r.length;o++)i.push(r[o]);Xo(t,o=>{I0(s,o,i)})}function Zo(s,t){const i=ca(t);if(i){let r=0;for(let o=0;o<i.length;o++)i[o].status!==2&&(i[r]=i[o],r++);i.length=r,_0(t,i.length>0?i:void 0)}Xo(t,r=>{Zo(s,r)})}function M0(s,t){const i=qr(O0(s,t)),r=Gh(s.transactionQueueTree_,t);return jR(r,o=>{Mf(s,o)}),Mf(s,r),v0(r,o=>{Mf(s,o)}),i}function Mf(s,t){const i=ca(t);if(i){const r=[];let o=[],u=-1;for(let h=0;h<i.length;h++)i[h].status===3||(i[h].status===1?(U(u===h-1,"All SENT items should be at beginning of queue."),u=h,i[h].status=3,i[h].abortReason="set"):(U(i[h].status===0,"Unexpected transaction status in abort"),i[h].unwatcher(),o=o.concat(Fi(s.serverSyncTree_,i[h].currentWriteId,!0)),i[h].onComplete&&r.push(i[h].onComplete.bind(null,new Error("set"),!1,null))));u===-1?_0(t,void 0):i.length=u+1,Ln(s.eventQueue_,qr(t),o);for(let h=0;h<r.length;h++)oa(r[h])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oN(s){let t="";const i=s.split("/");for(let r=0;r<i.length;r++)if(i[r].length>0){let o=i[r];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}t+="/"+o}return t}function cN(s){const t={};s.charAt(0)==="?"&&(s=s.substring(1));for(const i of s.split("&")){if(i.length===0)continue;const r=i.split("=");r.length===2?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):wt(`Invalid query segment '${i}' in query '${s}'`)}return t}const hy=function(s,t){const i=uN(s),r=i.namespace;i.domain==="firebase.com"&&kn(i.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&i.domain!=="localhost"&&kn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),i.secure||Cw();const o=i.scheme==="ws"||i.scheme==="wss";return{repoInfo:new Mv(i.host,i.secure,r,o,t,"",r!==i.subdomain),path:new Ae(i.pathString)}},uN=function(s){let t="",i="",r="",o="",u="",h=!0,m="https",g=443;if(typeof s=="string"){let p=s.indexOf("//");p>=0&&(m=s.substring(0,p-1),s=s.substring(p+2));let v=s.indexOf("/");v===-1&&(v=s.length);let b=s.indexOf("?");b===-1&&(b=s.length),t=s.substring(0,Math.min(v,b)),v<b&&(o=oN(s.substring(v,b)));const E=cN(s.substring(Math.min(s.length,b)));p=t.indexOf(":"),p>=0?(h=m==="https"||m==="wss",g=parseInt(t.substring(p+1),10)):p=t.length;const L=t.slice(0,p);if(L.toLowerCase()==="localhost")i="localhost";else if(L.split(".").length<=2)i=L;else{const z=t.indexOf(".");r=t.substring(0,z).toLowerCase(),i=t.substring(z+1),u=r}"ns"in E&&(u=E.ns)}return{host:t,port:g,domain:i,subdomain:r,secure:h,scheme:m,pathString:o,namespace:u}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",fN=(function(){let s=0;const t=[];return function(i){const r=i===s;s=i;let o;const u=new Array(8);for(o=7;o>=0;o--)u[o]=dy.charAt(i%64),i=Math.floor(i/64);U(i===0,"Cannot push at time == 0");let h=u.join("");if(r){for(o=11;o>=0&&t[o]===63;o--)t[o]=0;t[o]++}else for(o=0;o<12;o++)t[o]=Math.floor(Math.random()*64);for(o=0;o<12;o++)h+=dy.charAt(t[o]);return U(h.length===20,"nextPushId: Length should be 20."),h}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{constructor(t,i,r,o){this.eventType=t,this.eventRegistration=i,this.snapshot=r,this.prevName=o}getPath(){const t=this.snapshot.ref;return this.eventType==="value"?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+et(this.snapshot.exportVal())}}class dN{constructor(t,i,r){this.eventRegistration=t,this.error=i,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{constructor(t,i){this.snapshotCallback=t,this.cancelCallback=i}onValue(t,i){this.snapshotCallback.call(null,t,i)}onCancel(t){return U(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(t,i,r,o){this._repo=t,this._path=i,this._queryParams=r,this._orderByCalled=o}get key(){return ce(this._path)?null:qv(this._path)}get ref(){return new Ci(this._repo,this._path)}get _queryIdentifier(){const t=W_(this._queryParams),i=Eh(t);return i==="{}"?"default":i}get _queryObject(){return W_(this._queryParams)}isEqual(t){if(t=_t(t),!(t instanceof Zh))return!1;const i=this._repo===t._repo,r=Ch(this._path,t._path),o=this._queryIdentifier===t._queryIdentifier;return i&&r&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+lA(this._path)}}class Ci extends Zh{constructor(t,i){super(t,i,new Nh,!1)}get parent(){const t=Gv(this._path);return t===null?null:new Ci(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}class zo{constructor(t,i,r){this._node=t,this.ref=i,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const i=new Ae(t),r=Ir(this.ref,t);return new zo(this._node.getChild(i),r,ze)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,o)=>t(new zo(o,Ir(this.ref,r),ze)))}hasChild(t){const i=new Ae(t);return!this._node.getChild(i).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function lo(s,t){return s=_t(s),s._checkNotDeleted("ref"),t!==void 0?Ir(s._root,t):s._root}function Ir(s,t){return s=_t(s),ae(s._path)===null?YR("child","path",t):T0("child","path",t),new Ci(s._repo,Fe(s._path,t))}function my(s,t){s=_t(s),C0("push",s._path),S0("push",t,s._path,!0);const i=R0(s._repo),r=fN(i),o=Ir(s,r),u=Ir(s,r);let h;return h=Promise.resolve(u),o.then=h.then.bind(h),o.catch=h.then.bind(h,void 0),o}function py(s,t){s=_t(s),C0("set",s._path),S0("set",t,s._path,!1);const i=new Bo;return eN(s._repo,s._path,t,null,i.wrapCallback(()=>{})),i.promise}class Jh{constructor(t){this.callbackContext=t}respondsTo(t){return t==="value"}createEvent(t,i){const r=i._queryParams.getIndex();return new hN("value",this,new zo(t.snapshotNode,new Ci(i._repo,i._path),r))}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,i){return this.callbackContext.hasCancelCallback?new dN(this,t,i):null}matches(t){return t instanceof Jh?!t.callbackContext||!this.callbackContext?!0:t.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function pN(s,t,i,r,o){const u=new mN(i,void 0),h=new Jh(u);return nN(s._repo,s,h),()=>iN(s._repo,s,h)}function gy(s,t,i,r){return pN(s,"value",t)}_R(Ci);TR(Ci);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gN="FIREBASE_DATABASE_EMULATOR_HOST",ih={};let _N=!1;function yN(s,t,i,r){const o=t.lastIndexOf(":"),u=t.substring(0,o),h=ia(u);s.repoInfo_=new Mv(t,h,s.repoInfo_.namespace,s.repoInfo_.webSocketOnly,s.repoInfo_.nodeAdmin,s.repoInfo_.persistenceKey,s.repoInfo_.includeNamespaceInQueryParams,!0,i),r&&(s.authTokenProvider_=r)}function vN(s,t,i,r,o){let u=r||s.options.databaseURL;u===void 0&&(s.options.projectId||kn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),dt("Using default host for project ",s.options.projectId),u=`${s.options.projectId}-default-rtdb.firebaseio.com`);let h=hy(u,o),m=h.repoInfo,g;typeof process<"u"&&I_&&(g=I_[gN]),g?(u=`http://${g}?ns=${m.namespace}`,h=hy(u,o),m=h.repoInfo):h.repoInfo.secure;const p=new Lw(s.name,s.options,t);FR("Invalid Firebase Database URL",h),ce(h.path)||kn("Database URL must point to the root of a Firebase Database (not including a child path).");const v=bN(m,s,p,new kw(s,i));return new SN(v,s)}function EN(s,t){const i=ih[t];(!i||i[s.key]!==s)&&kn(`Database ${t}(${s.repoInfo_}) has already been deleted.`),sN(s),delete i[s.key]}function bN(s,t,i,r){let o=ih[t.name];o||(o={},ih[t.name]=o);let u=o[s.toURLString()];return u&&kn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),u=new ZR(s,_N,i,r),o[s.toURLString()]=u,u}class SN{constructor(t,i){this._repoInternal=t,this.app=i,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(JR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ci(this._repo,ge())),this._rootInternal}_delete(){return this._rootInternal!==null&&(EN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&kn("Cannot call "+t+" on a deleted database.")}}function TN(s=Ly(),t){const i=fh(s,"database").getImmediate({identifier:t});if(!i._instanceStarted){const r=RS("database");r&&CN(i,...r)}return i}function CN(s,t,i,r={}){s=_t(s),s._checkNotDeleted("useEmulator");const o=`${t}:${i}`,u=s._repoInternal;if(s._instanceStarted){if(o===s._repoInternal.repoInfo_.host&&Qi(r,u.repoInfo_.emulatorOptions))return;kn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let h;if(u.repoInfo_.nodeAdmin)r.mockUserToken&&kn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),h=new mo(mo.OWNER);else if(r.mockUserToken){const m=typeof r.mockUserToken=="string"?r.mockUserToken:NS(r.mockUserToken,s.app.options.projectId);h=new mo(m)}ia(t)&&(Ny(t),xy("Database",!0)),yN(u,o,r,h)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wN(s){yw(aa),Js(new Ki("database",(t,{instanceIdentifier:i})=>{const r=t.getProvider("app").getImmediate(),o=t.getProvider("auth-internal"),u=t.getProvider("app-check-internal");return vN(r,o,u,i)},"PUBLIC").setMultipleInstances(!0)),_i(M_,k_,s),_i(M_,k_,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AN={".sv":"timestamp"};function _y(){return AN}Dn.prototype.simpleListen=function(s,t){this.sendRequest("q",{p:s},t)};Dn.prototype.echo=function(s,t){this.sendRequest("echo",{d:s},t)};wN();const RN={apiKey:"AIzaSyAohzayYdVlVL9yy4w3UbvQvECM42tpVlw",authDomain:"campus-textbook-exchange.firebaseapp.com",databaseURL:"https://campus-textbook-exchange-default-rtdb.firebaseio.com",projectId:"campus-textbook-exchange",storageBucket:"campus-textbook-exchange.firebasestorage.app",messagingSenderId:"618796036845",appId:"1:618796036845:web:a49d29164bfb82593752e4",measurementId:"G-MSRGT2Q27H"},k0=ky(RN),Ho=gw(k0),oo=TN(k0),NN=()=>aC(Ho),Un=({children:s,variant:t="primary",className:i="",...r})=>{const o="text-white inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105",u={primary:"text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 hover:shadow-lg",secondary:"text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:ring-indigo-500 hover:shadow-md"};return C.jsx("button",{type:"button",className:`${o} ${u[t]} ${i}`,...r,children:s})},$h=({className:s="w-6 h-6"})=>C.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:s,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})}),xN=({className:s="w-6 h-6"})=>C.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:s,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})}),L0=({className:s="w-6 h-6"})=>C.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:s,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})}),ON=({className:s="w-6 h-6"})=>C.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:s,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})}),DN=({className:s="w-5 h-5"})=>C.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:s,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),IN=({className:s="w-5 h-5"})=>C.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:s,viewBox:"0 0 20 20",fill:"currentColor",children:C.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"})}),MN=({className:s="w-5 h-5"})=>C.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:s,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),kN=({className:s="w-6 h-6"})=>C.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:s,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),yy=s=>C.jsx("input",{...s,className:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-shadow duration-200 focus:shadow-md"}),LN=()=>{const[s,t]=pe.useState(""),[i,r]=pe.useState(""),[o,u]=pe.useState(""),[h,m]=pe.useState(!1),g=v=>{switch(v){case"auth/user-not-found":case"auth/wrong-password":case"auth/invalid-credential":return"Invalid email or password. Please check your credentials and try again.";case"auth/too-many-requests":return"Access has been temporarily disabled due to many failed login attempts. Please try again later.";case"auth/network-request-failed":return"Network error. Please check your internet connection and ensure Firebase is configured correctly.";case"auth/operation-not-allowed":return"Email/Password sign-in is not enabled in the Firebase console.";case"auth/weak-password":return"The password is too weak. Please use at least 6 characters.";default:return"An unexpected error occurred. Please try again."}},p=async v=>{v.preventDefault(),u(""),m(!0);try{await tC(Ho,s,i)}catch(b){if(b.code==="auth/user-not-found"||b.code==="auth/invalid-credential")try{await eC(Ho,s,i)}catch(E){E.code==="auth/email-already-in-use"?u(g("auth/invalid-credential")):u(g(E.code))}else u(g(b.code))}finally{m(!1)}};return C.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-indigo-50 to-white flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8",children:[C.jsxs("div",{className:"sm:mx-auto sm:w-full sm:max-w-md",children:[C.jsx("div",{className:"flex justify-center",children:C.jsx($h,{className:"h-12 w-12 text-indigo-600"})}),C.jsx("h2",{className:"mt-6 text-center text-3xl font-extrabold tracking-tight text-gray-900",children:"Campus Textbook Exchange"}),C.jsx("p",{className:"mt-2 text-center text-sm text-gray-600",children:"Sign in or create an account"})]}),C.jsx("div",{className:"mt-8 sm:mx-auto sm:w-full sm:max-w-md",children:C.jsxs("div",{className:"bg-white py-8 px-4 shadow-lg border border-gray-100 sm:rounded-xl sm:px-10",children:[C.jsxs("form",{className:"space-y-6",onSubmit:p,children:[C.jsxs("div",{children:[C.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email address"}),C.jsx("div",{className:"mt-1",children:C.jsx(yy,{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,value:s,onChange:v=>t(v.target.value),"aria-describedby":o?"auth-error":void 0})})]}),C.jsxs("div",{children:[C.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),C.jsx("div",{className:"mt-1",children:C.jsx(yy,{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,value:i,onChange:v=>r(v.target.value),"aria-describedby":o?"auth-error":void 0})})]}),o&&C.jsx("p",{id:"auth-error",className:"text-sm text-red-600",role:"alert",children:o}),C.jsx("div",{children:C.jsx(Un,{type:"submit",className:"w-full",disabled:h,children:h?"Signing in...":"Sign in / Sign up"})})]}),C.jsxs("div",{className:"mt-6",children:[C.jsxs("div",{className:"relative",children:[C.jsx("div",{className:"absolute inset-0 flex items-center",children:C.jsx("div",{className:"w-full border-t border-gray-300"})}),C.jsx("div",{className:"relative flex justify-center text-sm",children:C.jsx("span",{className:"px-2 bg-white text-gray-500",children:"Getting Started"})})]}),C.jsx("div",{className:"mt-4 text-xs text-gray-500 bg-gray-50 p-3 rounded-md border",children:C.jsx("p",{children:"Enter any email and password. If the account doesn't exist, it will be created automatically for this demo."})})]})]})})]})},UN=({user:s})=>C.jsx("header",{className:"bg-white shadow-sm sticky top-0 z-40 border-b border-gray-200",children:C.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:C.jsxs("div",{className:"flex justify-between items-center h-16",children:[C.jsxs("div",{className:"flex items-center space-x-3",children:[C.jsx($h,{className:"h-8 w-8 text-indigo-600"}),C.jsx("h1",{className:"text-2xl font-bold text-gray-800",children:"Campus Textbook Exchange"})]}),C.jsxs("div",{className:"flex items-center space-x-4",children:[C.jsxs("div",{className:"text-right",children:[C.jsx("p",{className:"text-sm font-medium text-gray-700",children:s.name}),C.jsx("p",{className:"text-xs text-gray-500",children:s.email})]}),C.jsx("button",{onClick:NN,className:"p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors","aria-label":"Logout",children:C.jsx(ON,{className:"h-6 w-6"})})]})]})})});var Ft=(s=>(s.NEW="New",s.LIKE_NEW="Like New",s.GOOD="Good",s.FAIR="Fair",s))(Ft||{}),ht=(s=>(s.SALE="For Sale",s.LEND="For Lend",s))(ht||{});const zN={New:"bg-green-100 text-green-800","Like New":"bg-blue-100 text-blue-800",Good:"bg-yellow-100 text-yellow-800",Fair:"bg-orange-100 text-orange-800"},vy=({book:s})=>{const t=s.listingType===ht.LEND||s.price===0;return C.jsxs("div",{className:"bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col border border-gray-100",children:[C.jsx("div",{className:"overflow-hidden",children:C.jsx("img",{src:s.imageUrl,alt:s.title,className:"w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"})}),C.jsxs("div",{className:"p-5 flex flex-col flex-grow",children:[C.jsxs("div",{className:"flex-grow",children:[C.jsxs("div",{className:"flex justify-between items-start mb-2",children:[C.jsx("span",{className:`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${zN[s.condition]}`,children:s.condition}),C.jsx("span",{className:`text-xs font-semibold uppercase tracking-wider ${s.listingType===ht.LEND?"text-purple-600":"text-indigo-600"}`,children:s.listingType})]}),C.jsx("h3",{className:"text-lg font-bold text-gray-900 leading-tight group-hover:text-indigo-600 transition-colors",children:s.title}),C.jsxs("p",{className:"text-sm text-gray-600 mt-1",children:["by ",s.author]})]}),C.jsxs("div",{className:"mt-4 pt-4 border-t border-gray-100",children:[C.jsxs("div",{className:"flex items-center text-xs text-gray-500 mb-3 space-x-2",children:[C.jsx(IN,{className:"h-4 w-4 text-gray-400"}),C.jsxs("span",{children:["Listed by: ",C.jsx("strong",{children:s.seller.name})]})]}),C.jsxs("div",{className:"flex items-center text-xs text-gray-500 mb-4 space-x-2",children:[C.jsx(MN,{className:"h-4 w-4 text-gray-400"}),C.jsxs("span",{children:["ISBN: ",s.isbn]})]}),C.jsxs("div",{className:"flex justify-between items-center",children:[C.jsx("p",{className:"text-2xl font-extrabold text-gray-800",children:t?"Free":`₹${s.price.toLocaleString("en-IN")}`}),C.jsx(Un,{variant:"primary",className:"rounded-full text-xs px-3 py-1.5",children:"Contact Seller"})]})]})]})]})},HN=({request:s})=>C.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-sm border-l-4 border-indigo-500 flex justify-between items-center transition-all duration-200 hover:shadow-lg hover:border-indigo-600",children:[C.jsxs("div",{children:[C.jsx("h3",{className:"font-semibold text-gray-800",children:s.title}),C.jsxs("p",{className:"text-sm text-gray-500",children:["by ",s.author]}),C.jsxs("p",{className:"text-xs text-gray-400 mt-2",children:["Requested by: ",s.requester.name]})]}),C.jsx(Un,{variant:"secondary",className:"rounded-full text-xs px-3 py-1.5",children:"I have this!"})]}),U0=({isOpen:s,onClose:t,title:i,children:r})=>s?C.jsx("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity z-50 flex justify-center items-center","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true",children:C.jsx("div",{className:"relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full",children:C.jsxs("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:[C.jsxs("div",{className:"flex justify-between items-center",children:[C.jsx("h3",{className:"text-lg leading-6 font-medium text-gray-900",id:"modal-title",children:i}),C.jsxs("button",{type:"button",onClick:t,className:"text-gray-400 hover:text-gray-500 focus:outline-none",children:[C.jsx("span",{className:"sr-only",children:"Close"}),C.jsx(L0,{className:"h-6 w-6"})]})]}),C.jsx("div",{className:"mt-4",children:r})]})})}):null,BN=({isOpen:s,onClose:t,onAddBook:i})=>{const[r,o]=pe.useState(""),[u,h]=pe.useState(""),[m,g]=pe.useState(""),[p,v]=pe.useState(0),[b,E]=pe.useState(Ft.GOOD),[L,z]=pe.useState(ht.SALE),Q=Y=>{Y.preventDefault(),i({title:r,author:u,isbn:m,price:L===ht.LEND?0:p,condition:b,listingType:L}),o(""),h(""),g(""),v(0),E(Ft.GOOD),z(ht.SALE),t()},J=({label:Y,id:ue,type:$="text",value:te,onChange:De,required:He=!0,disabled:Ve=!1})=>C.jsxs("div",{children:[C.jsx("label",{htmlFor:ue,className:"block text-sm font-medium text-gray-700",children:Y}),C.jsx("input",{type:$,id:ue,name:ue,value:te,onChange:De,required:He,disabled:Ve,className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent sm:text-sm disabled:bg-gray-100 transition-shadow duration-200 focus:shadow-md"})]}),Te=({label:Y,id:ue,value:$,onChange:te,children:De})=>C.jsxs("div",{children:[C.jsx("label",{htmlFor:ue,className:"block text-sm font-medium text-gray-700",children:Y}),C.jsx("select",{id:ue,name:ue,value:$,onChange:te,className:"mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent sm:text-sm rounded-md transition-shadow duration-200 focus:shadow-md",children:De})]});return C.jsx(U0,{isOpen:s,onClose:t,title:"Add a New Textbook",children:C.jsxs("form",{onSubmit:Q,className:"space-y-4",children:[C.jsx(J,{label:"Book Title",id:"title",value:r,onChange:Y=>o(Y.target.value)}),C.jsx(J,{label:"Author",id:"author",value:u,onChange:Y=>h(Y.target.value)}),C.jsx(J,{label:"ISBN",id:"isbn",value:m,onChange:Y=>g(Y.target.value)}),C.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[C.jsx(Te,{label:"Listing Type",id:"listingType",value:L,onChange:Y=>z(Y.target.value),children:Object.values(ht).map(Y=>C.jsx("option",{value:Y,children:Y},Y))}),C.jsx(Te,{label:"Condition",id:"condition",value:b,onChange:Y=>E(Y.target.value),children:Object.values(Ft).map(Y=>C.jsx("option",{value:Y,children:Y},Y))})]}),C.jsx(J,{label:"Price (₹)",id:"price",type:"number",value:p,onChange:Y=>v(parseFloat(Y.target.value)),disabled:L===ht.LEND}),C.jsxs("div",{className:"pt-2 flex justify-end space-x-2",children:[C.jsx(Un,{type:"button",variant:"secondary",onClick:t,children:"Cancel"}),C.jsx(Un,{type:"submit",variant:"primary",children:"Add Book"})]})]})})},jN=({isOpen:s,onClose:t,onAddRequest:i})=>{const[r,o]=pe.useState(""),[u,h]=pe.useState(""),m=p=>{p.preventDefault(),i({title:r,author:u}),o(""),h(""),t()},g=({label:p,id:v,value:b,onChange:E})=>C.jsxs("div",{children:[C.jsx("label",{htmlFor:v,className:"block text-sm font-medium text-gray-700",children:p}),C.jsx("input",{type:"text",id:v,name:v,value:b,onChange:E,required:!0,className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"})]});return C.jsx(U0,{isOpen:s,onClose:t,title:"Request a Textbook",children:C.jsxs("form",{onSubmit:m,className:"space-y-4",children:[C.jsx(g,{label:"Book Title",id:"req-title",value:r,onChange:p=>o(p.target.value)}),C.jsx(g,{label:"Author",id:"req-author",value:u,onChange:p=>h(p.target.value)}),C.jsxs("div",{className:"pt-2 flex justify-end space-x-2",children:[C.jsx(Un,{type:"button",variant:"secondary",onClick:t,children:"Cancel"}),C.jsx(Un,{type:"submit",variant:"primary",children:"Submit Request"})]})]})})},kf=({icon:s=C.jsx($h,{className:"h-12 w-12 text-gray-400"}),title:t,message:i})=>C.jsxs("div",{className:"text-center bg-gray-50 p-8 rounded-lg border-2 border-dashed border-gray-200",children:[C.jsx("div",{className:"mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-gray-100",children:s}),C.jsx("h3",{className:"mt-4 text-lg font-medium text-gray-900",children:t}),C.jsx("p",{className:"mt-1 text-sm text-gray-500",children:i})]}),ui=[{id:"u1",name:"Aisha Sharma",email:"aisha@university.edu",campus:"Main Campus"},{id:"u2",name:"Rohan Verma",email:"rohan@university.edu",campus:"North Campus"},{id:"u3",name:"Priya Patel",email:"priya@university.edu",campus:"Main Campus"}],PN=[{id:"b1",title:"Introduction to Algorithms",author:"Thomas H. Cormen",isbn:"9780262033848",price:850,condition:Ft.GOOD,listingType:ht.SALE,seller:ui[1],imageUrl:"https://picsum.photos/seed/book1/300/400",createdAt:Date.now()-1e3*60*60*24*2},{id:"b2",title:"Clean Code: A Handbook of Agile Software Craftsmanship",author:"Robert C. Martin",isbn:"9780132350884",price:0,condition:Ft.LIKE_NEW,listingType:ht.LEND,seller:ui[0],imageUrl:"https://picsum.photos/seed/book2/300/400",createdAt:Date.now()-1e3*60*60*24*5},{id:"b3",title:"The Pragmatic Programmer: Your Journey to Mastery",author:"David Thomas, Andrew Hunt",isbn:"9780135957059",price:450,condition:Ft.FAIR,listingType:ht.SALE,seller:ui[2],imageUrl:"https://picsum.photos/seed/book3/300/400",createdAt:Date.now()-1e3*60*60*24},{id:"b4",title:"Designing Data-Intensive Applications",author:"Martin Kleppmann",isbn:"9781449373320",price:600,condition:Ft.GOOD,listingType:ht.SALE,seller:ui[1],imageUrl:"https://picsum.photos/seed/book4/300/400",createdAt:Date.now()-1e3*60*60*24*10},{id:"b5",title:"Cracking the Coding Interview",author:"Gayle Laakmann McDowell",isbn:"9780984782857",price:550,condition:Ft.LIKE_NEW,listingType:ht.SALE,seller:ui[2],imageUrl:"https://picsum.photos/seed/book5/300/400",createdAt:Date.now()-1e3*60*60*24*3},{id:"b6",title:"Operating System Concepts",author:"Abraham Silberschatz",isbn:"9781118063330",price:950,condition:Ft.GOOD,listingType:ht.SALE,seller:ui[0],imageUrl:"https://picsum.photos/seed/book6/300/400",createdAt:Date.now()-1e3*60*60*24*7},{id:"b7",title:"A Brief History of Time",author:"Stephen Hawking",isbn:"9780553380163",price:0,condition:Ft.FAIR,listingType:ht.LEND,seller:ui[1],imageUrl:"https://picsum.photos/seed/book7/300/400",createdAt:Date.now()-1e3*60*60*24*15},{id:"b8",title:"The Lord of the Rings",author:"J.R.R. Tolkien",isbn:"9780618640157",price:750,condition:Ft.NEW,listingType:ht.SALE,seller:ui[0],imageUrl:"https://picsum.photos/seed/book8/300/400",createdAt:Date.now()-1e3*60*60*24*4}],Lf=({active:s,onClick:t,children:i})=>C.jsx("button",{onClick:t,className:`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-t-md ${s?"border-indigo-500 text-indigo-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`,children:i}),qN=({user:s,addToast:t})=>{const[i,r]=pe.useState("available"),[o,u]=pe.useState([]),[h,m]=pe.useState([]),[g,p]=pe.useState(!1),[v,b]=pe.useState(!1),[E,L]=pe.useState("");pe.useEffect(()=>{const $=lo(oo,"books"),te=gy($,Ve=>{const rt=Ve.val(),mt=[];for(const lt in rt){const ot=rt[lt];ot&&ot.seller&&ot.seller.id&&mt.push({id:lt,...ot})}const tt=mt.filter(lt=>lt.seller.id!==s.id);let xe=[...mt];if(tt.length<10){const lt=10-tt.length,ot=new Set(mt.map(O=>O.isbn)),Qe=PN.filter(O=>!ot.has(O.isbn)).slice(0,lt);xe=[...mt,...Qe]}u(xe.sort((lt,ot)=>ot.createdAt-lt.createdAt))}),De=lo(oo,"requests"),He=gy(De,Ve=>{const rt=Ve.val(),mt=[];for(const tt in rt){const xe=rt[tt];xe&&xe.requester&&mt.push({id:tt,...xe})}m(mt.sort((tt,xe)=>xe.createdAt-tt.createdAt))});return()=>{te(),He()}},[s.id]);const z=$=>{const te=lo(oo,"books"),De=my(te);py(De,{...$,seller:{id:s.id,name:s.name,campus:s.campus,email:s.email},createdAt:_y(),imageUrl:`https://picsum.photos/seed/${De.key}/300/400`}).then(()=>{t("Book listed successfully!","success")}).catch(He=>{t(`Error: ${He.message}`,"error")})},Q=$=>{const te=lo(oo,"requests"),De=my(te);py(De,{...$,requester:{id:s.id,name:s.name,campus:s.campus,email:s.email},createdAt:_y()}).then(()=>{t("Request posted successfully!","success")}).catch(He=>{t(`Error: ${He.message}`,"error")})},J=pe.useMemo(()=>E?o.filter($=>$.title.toLowerCase().includes(E.toLowerCase())||$.author.toLowerCase().includes(E.toLowerCase())):o,[o,E]),Te=pe.useMemo(()=>J.filter($=>$.seller.id===s.id),[J,s.id]),Y=pe.useMemo(()=>J.filter($=>$.seller.id!==s.id),[J,s.id]),ue=pe.useMemo(()=>E?h.filter($=>$.title.toLowerCase().includes(E.toLowerCase())||$.author.toLowerCase().includes(E.toLowerCase())):h,[h,E]);return C.jsxs(C.Fragment,{children:[C.jsxs("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[C.jsxs("div",{className:"bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-xl shadow-lg mb-8",children:[C.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center gap-4",children:[C.jsxs("div",{children:[C.jsxs("h2",{className:"text-2xl font-bold",children:["Welcome back, ",s.name.split(" ")[0],"!"]}),C.jsx("p",{className:"text-indigo-200 mt-1",children:"Ready to find your next textbook?"})]}),C.jsxs("div",{className:"flex space-x-2",children:[C.jsxs(Un,{onClick:()=>p(!0),className:"bg-white text-indigo-600 hover:bg-indigo-50",children:[C.jsx(xN,{className:"h-5 w-5 mr-2"}),"List a Book"]}),C.jsx(Un,{variant:"secondary",onClick:()=>b(!0),className:"bg-white text-indigo-600 hover:bg-indigo-50",children:"Request a Book"})]})]}),C.jsxs("div",{className:"mt-6 relative",children:[C.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:C.jsx(DN,{className:"text-gray-400"})}),C.jsx("input",{type:"text",placeholder:"Search by title, author, or ISBN...",value:E,onChange:$=>L($.target.value),className:"w-full pl-10 pr-4 py-2 border border-transparent rounded-md shadow-sm placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"})]})]}),C.jsxs("div",{children:[C.jsx("div",{className:"border-b border-gray-200",children:C.jsxs("nav",{className:"-mb-px flex space-x-8","aria-label":"Tabs",children:[C.jsx(Lf,{active:i==="available",onClick:()=>r("available"),children:"Available Books"}),C.jsx(Lf,{active:i==="myListings",onClick:()=>r("myListings"),children:"My Listings"}),C.jsx(Lf,{active:i==="requests",onClick:()=>r("requests"),children:"Book Requests"})]})}),C.jsxs("div",{className:"mt-8",children:[i==="available"&&C.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",children:[Y.map($=>C.jsx(vy,{book:$},$.id)),Y.length===0&&C.jsx("div",{className:"col-span-full",children:C.jsx(kf,{title:"No Available Books",message:"There are no books available from other students right now."})})]}),i==="myListings"&&C.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",children:[Te.map($=>C.jsx(vy,{book:$},$.id)),Te.length===0&&C.jsx("div",{className:"col-span-full",children:C.jsx(kf,{title:"You Haven't Listed Any Books",message:"Click 'List a Book' to add your first textbook."})})]}),i==="requests"&&C.jsxs("div",{className:"space-y-4 max-w-4xl mx-auto",children:[ue.map($=>C.jsx(HN,{request:$},$.id)),ue.length===0&&C.jsx(kf,{title:"No Book Requests",message:"There are currently no open requests for textbooks."})]})]})]})]}),C.jsx(BN,{isOpen:g,onClose:()=>p(!1),onAddBook:z}),C.jsx(jN,{isOpen:v,onClose:()=>b(!1),onAddRequest:Q})]})},VN=()=>{const[s,t]=pe.useState([]),i=pe.useCallback((o,u="success")=>{const h=`toast-${Date.now()}`;t(m=>[...m,{id:h,message:o,type:u}])},[]),r=pe.useCallback(o=>{t(u=>u.filter(h=>h.id!==o))},[]);return{toasts:s,addToast:i,removeToast:r}},GN=({toast:s,onDismiss:t})=>{const{id:i,message:r,type:o="success"}=s;pe.useEffect(()=>{const h=setTimeout(()=>{t(i)},5e3);return()=>{clearTimeout(h)}},[i,t]);const u=o==="success"?C.jsx(kN,{className:"h-6 w-6 text-green-400"}):null;return C.jsx("div",{className:"max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden",children:C.jsx("div",{className:"p-4",children:C.jsxs("div",{className:"flex items-start",children:[C.jsx("div",{className:"flex-shrink-0",children:u}),C.jsx("div",{className:"ml-3 w-0 flex-1 pt-0.5",children:C.jsx("p",{className:"text-sm font-medium text-gray-900",children:r})}),C.jsx("div",{className:"ml-4 flex-shrink-0 flex",children:C.jsxs("button",{onClick:()=>t(i),className:"bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:[C.jsx("span",{className:"sr-only",children:"Close"}),C.jsx(L0,{className:"h-5 w-5"})]})})]})})})},YN=s=>s.split("@")[0].replace(/[^a-zA-Z]/g," ").replace(/\b\w/g,i=>i.toUpperCase());function FN(){const[s,t]=pe.useState(null),[i,r]=pe.useState(!0),{toasts:o,addToast:u,removeToast:h}=VN();return pe.useEffect(()=>{const m=sC(Ho,g=>{t(g?{id:g.uid,name:g.displayName||YN(g.email),email:g.email,campus:"Main Campus"}:null),r(!1)});return()=>m()},[]),i?C.jsx("div",{className:"min-h-full flex items-center justify-center",children:C.jsx("p",{children:"Loading..."})}):C.jsxs("div",{className:"min-h-full flex flex-col",children:[s?C.jsxs(C.Fragment,{children:[C.jsx(UN,{user:s}),C.jsx(qN,{user:s,addToast:u})]}):C.jsx(LN,{}),C.jsx("div",{"aria-live":"assertive",className:"fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start z-50",children:C.jsx("div",{className:"w-full flex flex-col items-center space-y-4 sm:items-end",children:o.map(m=>C.jsx(GN,{toast:m,onDismiss:h},m.id))})})]})}const z0=document.getElementById("root");if(!z0)throw new Error("Could not find root element to mount to");const QN=_S.createRoot(z0);QN.render(C.jsx(cS.StrictMode,{children:C.jsx(FN,{})}));
