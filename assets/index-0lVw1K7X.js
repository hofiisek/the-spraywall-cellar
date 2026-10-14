(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var Re=function(){return Re=Object.assign||function(e){for(var t,r=1,s=arguments.length;r<s;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Re.apply(this,arguments)};typeof window<"u"&&(window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),typeof window.CustomEvent!="function"&&(window.CustomEvent=function(e,t){t=t||{bubbles:!1,cancelable:!1,detail:null};var r=document.createEvent("CustomEvent");return r.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),r}));var Ep=typeof document<"u"&&!!document.documentMode,co;function Tp(){return co||(co=document.createElement("div").style)}var al=["webkit","moz","ms"],Cs={};function oa(n){if(Cs[n])return Cs[n];var e=Tp();if(n in e)return Cs[n]=n;for(var t=n[0].toUpperCase()+n.slice(1),r=al.length;r--;){var s="".concat(al[r]).concat(t);if(s in e)return Cs[n]=s}}function ks(n,e){return parseFloat(e[oa(n)])||0}function xs(n,e,t){t===void 0&&(t=window.getComputedStyle(n));var r=e==="border"?"Width":"";return{left:ks("".concat(e,"Left").concat(r),t),right:ks("".concat(e,"Right").concat(r),t),top:ks("".concat(e,"Top").concat(r),t),bottom:ks("".concat(e,"Bottom").concat(r),t)}}function Gn(n,e,t){n.style[oa(e)]=t}function Ip(n,e){var t=oa("transform");Gn(n,"transition","".concat(t," ").concat(e.duration,"ms ").concat(e.easing))}function bp(n,e,t){var r=e.x,s=e.y,i=e.scale,a=e.isSVG;if(Gn(n,"transform","scale(".concat(i,") translate(").concat(r,"px, ").concat(s,"px)")),a&&Ep){var c=window.getComputedStyle(n).getPropertyValue("transform");n.setAttribute("transform",c)}}function lo(n){var e=n.parentNode,t=window.getComputedStyle(n),r=window.getComputedStyle(e),s=n.getBoundingClientRect(),i=e.getBoundingClientRect();return{elem:{style:t,width:s.width,height:s.height,top:s.top,bottom:s.bottom,left:s.left,right:s.right,margin:xs(n,"margin",t),border:xs(n,"border",t)},parent:{style:r,width:i.width,height:i.height,top:i.top,bottom:i.bottom,left:i.left,right:i.right,padding:xs(e,"padding",r),border:xs(e,"border",r)}}}var Hr={down:"mousedown",move:"mousemove",up:"mouseup mouseleave"};typeof window<"u"&&(typeof window.PointerEvent=="function"?Hr={down:"pointerdown",move:"pointermove",up:"pointerup pointerleave pointercancel"}:typeof window.TouchEvent=="function"&&(Hr={down:"touchstart",move:"touchmove",up:"touchend touchcancel"}));function uo(n,e,t,r){Hr[n].split(" ").forEach(function(s){e.addEventListener(s,t,r)})}function ho(n,e,t){Hr[n].split(" ").forEach(function(r){e.removeEventListener(r,t)})}function Yu(n,e){for(var t=n.length;t--;)if(n[t].pointerId===e.pointerId)return t;return-1}function Co(n,e){var t;if(e.touches){t=0;for(var r=0,s=e.touches;r<s.length;r++){var i=s[r];i.pointerId=t++,Co(n,i)}return}t=Yu(n,e),t>-1&&n.splice(t,1),n.push(e)}function Ap(n,e){if(e.touches){for(;n.length;)n.pop();return}var t=Yu(n,e);t>-1&&n.splice(t,1)}function cl(n){n=n.slice(0);for(var e=n.pop(),t;t=n.pop();)e={clientX:(t.clientX-e.clientX)/2+e.clientX,clientY:(t.clientY-e.clientY)/2+e.clientY};return e}function fo(n){if(n.length<2)return 0;var e=n[0],t=n[1];return Math.sqrt(Math.pow(Math.abs(t.clientX-e.clientX),2)+Math.pow(Math.abs(t.clientY-e.clientY),2))}function Rp(n){for(var e=n;e&&e.parentNode;){if(e.parentNode===document)return!0;e=e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}return!1}function Sp(n){return(n.getAttribute("class")||"").trim()}function Pp(n,e){return n.nodeType===1&&" ".concat(Sp(n)," ").indexOf(" ".concat(e," "))>-1}function Cp(n,e){for(var t=n;t!=null;t=t.parentNode)if(Pp(t,e.excludeClass)||e.exclude.indexOf(t)>-1)return!0;return!1}var kp=/^http:[\w\.\/]+svg$/;function xp(n){return kp.test(n.namespaceURI)&&n.nodeName.toLowerCase()!=="svg"}function Np(n){var e={};for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t]);return e}var Ju={animate:!1,canvas:!1,cursor:"move",disablePan:!1,disableZoom:!1,disableXAxis:!1,disableYAxis:!1,duration:200,easing:"ease-in-out",exclude:[],excludeClass:"panzoom-exclude",handleStartEvent:function(n){n.preventDefault(),n.stopPropagation()},maxScale:4,minScale:.125,overflow:"hidden",panOnlyWhenZoomed:!1,pinchAndPan:!1,relative:!1,setTransform:bp,startX:0,startY:0,startScale:1,step:.3,touchAction:"none"};function Zu(n,e){if(!n)throw new Error("Panzoom requires an element as an argument");if(n.nodeType!==1)throw new Error("Panzoom requires an element with a nodeType of 1");if(!Rp(n))throw new Error("Panzoom should be called on elements that have been attached to the DOM");e=Re(Re({},Ju),e);var t=xp(n),r=n.parentNode;r.style.overflow=e.overflow,r.style.userSelect="none",r.style.touchAction=e.touchAction,(e.canvas?r:n).style.cursor=e.cursor,n.style.userSelect="none",n.style.touchAction=e.touchAction,Gn(n,"transformOrigin",typeof e.origin=="string"?e.origin:t?"0 0":"50% 50%");function s(){r.style.overflow="",r.style.userSelect="",r.style.touchAction="",r.style.cursor="",n.style.cursor="",n.style.userSelect="",n.style.touchAction="",Gn(n,"transformOrigin","")}function i(V){V===void 0&&(V={});for(var B in V)V.hasOwnProperty(B)&&(e[B]=V[B]);(V.hasOwnProperty("cursor")||V.hasOwnProperty("canvas"))&&(r.style.cursor=n.style.cursor="",(e.canvas?r:n).style.cursor=e.cursor),V.hasOwnProperty("overflow")&&(r.style.overflow=V.overflow),V.hasOwnProperty("touchAction")&&(r.style.touchAction=V.touchAction,n.style.touchAction=V.touchAction)}var a=0,c=0,u=1,d=!1;x(e.startScale,{animate:!1,force:!0}),setTimeout(function(){k(e.startX,e.startY,{animate:!1,force:!0})});function f(V,B,Y){if(!Y.silent){var L=new CustomEvent(V,{detail:B});n.dispatchEvent(L)}}function m(V,B,Y){var L={x:a,y:c,scale:u,isSVG:t,originalEvent:Y};return requestAnimationFrame(function(){typeof B.animate=="boolean"&&(B.animate?Ip(n,B):Gn(n,"transition","none")),B.setTransform(n,L,B),f(V,L,B),f("panzoomchange",L,B)}),L}function E(V,B,Y,L){var N=Re(Re({},e),L),$={x:a,y:c,opts:N};if(!(L!=null&&L.force)&&(N.disablePan||N.panOnlyWhenZoomed&&u===N.startScale))return $;if(V=parseFloat(V),B=parseFloat(B),N.disableXAxis||($.x=(N.relative?a:0)+V),N.disableYAxis||($.y=(N.relative?c:0)+B),N.contain){var U=lo(n),J=U.elem.width/u,Ee=U.elem.height/u,Fe=J*Y,me=Ee*Y,Ke=(Fe-J)/2,nt=(me-Ee)/2;if(N.contain==="inside"){var at=(-U.elem.margin.left-U.parent.padding.left+Ke)/Y,St=(U.parent.width-Fe-U.parent.padding.left-U.elem.margin.left-U.parent.border.left-U.parent.border.right+Ke)/Y;$.x=Math.max(Math.min($.x,St),at);var Un=(-U.elem.margin.top-U.parent.padding.top+nt)/Y,mr=(U.parent.height-me-U.parent.padding.top-U.elem.margin.top-U.parent.border.top-U.parent.border.bottom+nt)/Y;$.y=Math.max(Math.min($.y,mr),Un)}else if(N.contain==="outside"){var at=(-(Fe-U.parent.width)-U.parent.padding.left-U.parent.border.left-U.parent.border.right+Ke)/Y,St=(Ke-U.parent.padding.left)/Y;$.x=Math.max(Math.min($.x,St),at);var Un=(-(me-U.parent.height)-U.parent.padding.top-U.parent.border.top-U.parent.border.bottom+nt)/Y,mr=(nt-U.parent.padding.top)/Y;$.y=Math.max(Math.min($.y,mr),Un)}}return N.roundPixels&&($.x=Math.round($.x),$.y=Math.round($.y)),$}function A(V,B){var Y=Re(Re({},e),B),L={scale:u,opts:Y};if(!(B!=null&&B.force)&&Y.disableZoom)return L;var N=e.minScale,$=e.maxScale;if(Y.contain){var U=lo(n),J=U.elem.width/u,Ee=U.elem.height/u;if(J>1&&Ee>1){var Fe=U.parent.width-U.parent.border.left-U.parent.border.right,me=U.parent.height-U.parent.border.top-U.parent.border.bottom,Ke=Fe/J,nt=me/Ee;e.contain==="inside"?$=Math.min($,Ke,nt):e.contain==="outside"&&(N=Math.max(N,Ke,nt))}}return L.scale=Math.min(Math.max(V,N),$),L}function k(V,B,Y,L){var N=E(V,B,u,Y);return a!==N.x||c!==N.y?(a=N.x,c=N.y,m("panzoompan",N.opts,L)):{x:a,y:c,scale:u,isSVG:t,originalEvent:L}}function x(V,B,Y){var L=A(V,B),N=L.opts;if(!(!(B!=null&&B.force)&&N.disableZoom)){V=L.scale;var $=a,U=c;if(N.focal){var J=N.focal;$=(J.x/V-J.x/u+a*V)/V,U=(J.y/V-J.y/u+c*V)/V}var Ee=E($,U,V,{relative:!1,force:!0});return a=Ee.x,c=Ee.y,u=V,m("panzoomzoom",N,Y)}}function C(V,B){var Y=Re(Re(Re({},e),{animate:!0}),B);return x(u*Math.exp((V?1:-1)*Y.step),Y)}function z(V){return C(!0,V)}function H(V){return C(!1,V)}function j(V,B,Y,L){var N=lo(n),$={width:N.parent.width-N.parent.padding.left-N.parent.padding.right-N.parent.border.left-N.parent.border.right,height:N.parent.height-N.parent.padding.top-N.parent.padding.bottom-N.parent.border.top-N.parent.border.bottom},U=B.clientX-N.parent.left-N.parent.padding.left-N.parent.border.left-N.elem.margin.left,J=B.clientY-N.parent.top-N.parent.padding.top-N.parent.border.top-N.elem.margin.top;t||(U-=N.elem.width/u/2,J-=N.elem.height/u/2);var Ee={x:U/$.width*($.width*V),y:J/$.height*($.height*V)};return x(V,Re(Re({},Y),{animate:!1,focal:Ee}),L)}function Q(V,B){V.preventDefault();var Y=Re(Re(Re({},e),B),{animate:!1}),L=V.deltaY===0&&V.deltaX?V.deltaX:V.deltaY,N=L<0?1:-1,$=A(u*Math.exp(N*Y.step/3),Y).scale;return j($,V,Y,V)}function le(V){var B=Re(Re(Re({},e),{animate:!0,force:!0}),V);u=A(B.startScale,B).scale;var Y=E(B.startX,B.startY,u,B);return a=Y.x,c=Y.y,m("panzoomreset",B)}var se,T,g,_,v,w,I=[];function y(V){if(!Cp(V.target,e)){Co(I,V),d=!0,e.handleStartEvent(V),se=a,T=c,f("panzoomstart",{x:a,y:c,scale:u,isSVG:t,originalEvent:V},e);var B=cl(I);g=B.clientX,_=B.clientY,v=u,w=fo(I)}}function oe(V){if(!(!d||se===void 0||T===void 0||g===void 0||_===void 0)){Co(I,V);var B=cl(I),Y=I.length>1,L=u;if(Y){w===0&&(w=fo(I));var N=fo(I)-w;L=A(N*e.step/80+v).scale,j(L,B,{animate:!1},V)}(!Y||e.pinchAndPan)&&k(se+(B.clientX-g)/L,T+(B.clientY-_)/L,{animate:!1},V)}}function je(V){I.length===1&&f("panzoomend",{x:a,y:c,scale:u,isSVG:t,originalEvent:V},e),Ap(I,V),d&&(d=!1,se=T=g=_=void 0)}var et=!1;function tt(){et||(et=!0,uo("down",e.canvas?r:n,y),uo("move",document,oe,{passive:!0}),uo("up",document,je,{passive:!0}))}function Ge(){et=!1,ho("down",e.canvas?r:n,y),ho("move",document,oe),ho("up",document,je)}return e.noBind||tt(),{bind:tt,destroy:Ge,eventNames:Hr,getPan:function(){return{x:a,y:c}},getScale:function(){return u},getOptions:function(){return Np(e)},handleDown:y,handleMove:oe,handleUp:je,pan:k,reset:le,resetStyle:s,setOptions:i,setStyle:function(V,B){return Gn(n,V,B)},zoom:x,zoomIn:z,zoomOut:H,zoomToPoint:j,zoomWithWheel:Q}}Zu.defaultOptions=Ju;const Dp=()=>{};var ll={};/**
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
 */const eh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Vp=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},th={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,f=i>>2,m=(i&3)<<4|c>>4;let E=(c&15)<<2|d>>6,A=d&63;u||(A=64,a||(E=64)),r.push(t[f],t[m],t[E],t[A])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(eh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Vp(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const m=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||d==null||m==null)throw new Op;const E=i<<2|c>>4;if(r.push(E),d!==64){const A=c<<4&240|d>>2;if(r.push(A),m!==64){const k=d<<6&192|m;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Op extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lp=function(n){const e=eh(n);return th.encodeByteArray(e,!0)},Zs=function(n){return Lp(n).replace(/\./g,"")},nh=function(n){try{return th.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Mp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Up=()=>Mp().__FIREBASE_DEFAULTS__,Fp=()=>{if(typeof process>"u"||typeof ll>"u")return;const n=ll.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Bp=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&nh(n[1]);return e&&JSON.parse(e)},yi=()=>{try{return Dp()||Up()||Fp()||Bp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},rh=n=>{var e,t;return(t=(e=yi())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},sh=n=>{const e=rh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},ih=()=>{var n;return(n=yi())==null?void 0:n.config},oh=n=>{var e;return(e=yi())==null?void 0:e[`_${n}`]};/**
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
 */class $p{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function ln(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function aa(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function ah(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Zs(JSON.stringify(t)),Zs(JSON.stringify(a)),""].join(".")}const Mr={};function qp(){const n={prod:[],emulator:[]};for(const e of Object.keys(Mr))Mr[e]?n.emulator.push(e):n.prod.push(e);return n}function jp(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let ul=!1;function ca(n,e){if(typeof window>"u"||typeof document>"u"||!ln(window.location.host)||Mr[n]===e||Mr[n]||ul)return;Mr[n]=e;function t(E){return`__firebase__banner__${E}`}const r="__firebase__banner",i=qp().prod.length>0;function a(){const E=document.getElementById(r);E&&E.remove()}function c(E){E.style.display="flex",E.style.background="#7faaf0",E.style.position="fixed",E.style.bottom="5px",E.style.left="5px",E.style.padding=".5em",E.style.borderRadius="5px",E.style.alignItems="center"}function u(E,A){E.setAttribute("width","24"),E.setAttribute("id",A),E.setAttribute("height","24"),E.setAttribute("viewBox","0 0 24 24"),E.setAttribute("fill","none"),E.style.marginLeft="-6px"}function d(){const E=document.createElement("span");return E.style.cursor="pointer",E.style.marginLeft="16px",E.style.fontSize="24px",E.innerHTML=" &times;",E.onclick=()=>{ul=!0,a()},E}function f(E,A){E.setAttribute("id",A),E.innerText="Learn more",E.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",E.setAttribute("target","__blank"),E.style.paddingLeft="5px",E.style.textDecoration="underline"}function m(){const E=jp(r),A=t("text"),k=document.getElementById(A)||document.createElement("span"),x=t("learnmore"),C=document.getElementById(x)||document.createElement("a"),z=t("preprendIcon"),H=document.getElementById(z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(E.created){const j=E.element;c(j),f(C,x);const Q=d();u(H,z),j.append(H,k,C,Q),document.body.appendChild(j)}i?(k.innerText="Preview backend disconnected.",H.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(H.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
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
 */function Ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ue())}function Hp(){var e;const n=(e=yi())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Wp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Gp(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Kp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Qp(){const n=Ue();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Xp(){return!Hp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Yp(){try{return typeof indexedDB=="object"}catch{return!1}}function Jp(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Zp="FirebaseError";class Rt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Zp,Object.setPrototypeOf(this,Rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ss.prototype.create)}}class ss{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?em(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Rt(s,c,r)}}function em(n,e){return n.replace(tm,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const tm=/\{\$([^}]+)}/g;function nm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Sn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(hl(i)&&hl(a)){if(!Sn(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function hl(n){return n!==null&&typeof n=="object"}/**
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
 */function is(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function rm(n,e){const t=new sm(n,e);return t.subscribe.bind(t)}class sm{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");im(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=po),s.error===void 0&&(s.error=po),s.complete===void 0&&(s.complete=po);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function im(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function po(){}/**
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
 */function fe(n){return n&&n._delegate?n._delegate:n}class tn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const yn="[DEFAULT]";/**
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
 */class om{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new $p;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cm(e))try{this.getOrInitializeService({instanceIdentifier:yn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=yn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yn){return this.instances.has(e)}getOptions(e=yn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:am(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=yn){return this.component?this.component.multipleInstances?e:yn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function am(n){return n===yn?void 0:n}function cm(n){return n.instantiationMode==="EAGER"}/**
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
 */class lm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new om(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ee;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ee||(ee={}));const um={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},hm=ee.INFO,dm={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},fm=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=dm[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class la{constructor(e){this.name=e,this._logLevel=hm,this._logHandler=fm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?um[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const pm=(n,e)=>e.some(t=>n instanceof t);let dl,fl;function mm(){return dl||(dl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gm(){return fl||(fl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ch=new WeakMap,ko=new WeakMap,lh=new WeakMap,mo=new WeakMap,ua=new WeakMap;function _m(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Yt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&ch.set(t,n)}).catch(()=>{}),ua.set(e,n),e}function ym(n){if(ko.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});ko.set(n,e)}let xo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ko.get(n);if(e==="objectStoreNames")return n.objectStoreNames||lh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Yt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function vm(n){xo=n(xo)}function wm(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(go(this),e,...t);return lh.set(r,e.sort?e.sort():[e]),Yt(r)}:gm().includes(n)?function(...e){return n.apply(go(this),e),Yt(ch.get(this))}:function(...e){return Yt(n.apply(go(this),e))}}function Em(n){return typeof n=="function"?wm(n):(n instanceof IDBTransaction&&ym(n),pm(n,mm())?new Proxy(n,xo):n)}function Yt(n){if(n instanceof IDBRequest)return _m(n);if(mo.has(n))return mo.get(n);const e=Em(n);return e!==n&&(mo.set(n,e),ua.set(e,n)),e}const go=n=>ua.get(n);function Tm(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=Yt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Yt(a.result),u.oldVersion,u.newVersion,Yt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Im=["get","getKey","getAll","getAllKeys","count"],bm=["put","add","delete","clear"],_o=new Map;function pl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(_o.get(e))return _o.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=bm.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Im.includes(t)))return;const i=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),s&&u.done]))[0]};return _o.set(e,i),i}vm(n=>({...n,get:(e,t,r)=>pl(e,t)||n.get(e,t,r),has:(e,t)=>!!pl(e,t)||n.has(e,t)}));/**
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
 */class Am{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Rm(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Rm(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const No="@firebase/app",ml="0.14.6";/**
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
 */const Vt=new la("@firebase/app"),Sm="@firebase/app-compat",Pm="@firebase/analytics-compat",Cm="@firebase/analytics",km="@firebase/app-check-compat",xm="@firebase/app-check",Nm="@firebase/auth",Dm="@firebase/auth-compat",Vm="@firebase/database",Om="@firebase/data-connect",Lm="@firebase/database-compat",Mm="@firebase/functions",Um="@firebase/functions-compat",Fm="@firebase/installations",Bm="@firebase/installations-compat",$m="@firebase/messaging",qm="@firebase/messaging-compat",jm="@firebase/performance",zm="@firebase/performance-compat",Hm="@firebase/remote-config",Wm="@firebase/remote-config-compat",Gm="@firebase/storage",Km="@firebase/storage-compat",Qm="@firebase/firestore",Xm="@firebase/ai",Ym="@firebase/firestore-compat",Jm="firebase",Zm="12.6.0";/**
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
 */const Do="[DEFAULT]",eg={[No]:"fire-core",[Sm]:"fire-core-compat",[Cm]:"fire-analytics",[Pm]:"fire-analytics-compat",[xm]:"fire-app-check",[km]:"fire-app-check-compat",[Nm]:"fire-auth",[Dm]:"fire-auth-compat",[Vm]:"fire-rtdb",[Om]:"fire-data-connect",[Lm]:"fire-rtdb-compat",[Mm]:"fire-fn",[Um]:"fire-fn-compat",[Fm]:"fire-iid",[Bm]:"fire-iid-compat",[$m]:"fire-fcm",[qm]:"fire-fcm-compat",[jm]:"fire-perf",[zm]:"fire-perf-compat",[Hm]:"fire-rc",[Wm]:"fire-rc-compat",[Gm]:"fire-gcs",[Km]:"fire-gcs-compat",[Qm]:"fire-fst",[Ym]:"fire-fst-compat",[Xm]:"fire-vertex","fire-js":"fire-js",[Jm]:"fire-js-all"};/**
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
 */const ei=new Map,tg=new Map,Vo=new Map;function gl(n,e){try{n.container.addComponent(e)}catch(t){Vt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Pn(n){const e=n.name;if(Vo.has(e))return Vt.debug(`There were multiple attempts to register component ${e}.`),!1;Vo.set(e,n);for(const t of ei.values())gl(t,n);for(const t of tg.values())gl(t,n);return!0}function vi(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Je(n){return n==null?!1:n.settings!==void 0}/**
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
 */const ng={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Jt=new ss("app","Firebase",ng);/**
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
 */class rg{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jt.create("app-deleted",{appName:this._name})}}/**
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
 */const Vn=Zm;function uh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Do,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Jt.create("bad-app-name",{appName:String(s)});if(t||(t=ih()),!t)throw Jt.create("no-options");const i=ei.get(s);if(i){if(Sn(t,i.options)&&Sn(r,i.config))return i;throw Jt.create("duplicate-app",{appName:s})}const a=new lm(s);for(const u of Vo.values())a.addComponent(u);const c=new rg(t,r,a);return ei.set(s,c),c}function ha(n=Do){const e=ei.get(n);if(!e&&n===Do&&ih())return uh();if(!e)throw Jt.create("no-app",{appName:n});return e}function ft(n,e,t){let r=eg[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vt.warn(a.join(" "));return}Pn(new tn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const sg="firebase-heartbeat-database",ig=1,Wr="firebase-heartbeat-store";let yo=null;function hh(){return yo||(yo=Tm(sg,ig,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Wr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Jt.create("idb-open",{originalErrorMessage:n.message})})),yo}async function og(n){try{const t=(await hh()).transaction(Wr),r=await t.objectStore(Wr).get(dh(n));return await t.done,r}catch(e){if(e instanceof Rt)Vt.warn(e.message);else{const t=Jt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vt.warn(t.message)}}}async function _l(n,e){try{const r=(await hh()).transaction(Wr,"readwrite");await r.objectStore(Wr).put(e,dh(n)),await r.done}catch(t){if(t instanceof Rt)Vt.warn(t.message);else{const r=Jt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Vt.warn(r.message)}}}function dh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ag=1024,cg=30;class lg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new hg(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=yl();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>cg){const a=dg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Vt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=yl(),{heartbeatsToSend:r,unsentEntries:s}=ug(this._heartbeatsCache.heartbeats),i=Zs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Vt.warn(t),""}}}function yl(){return new Date().toISOString().substring(0,10)}function ug(n,e=ag){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),vl(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),vl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class hg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yp()?Jp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await og(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return _l(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return _l(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function vl(n){return Zs(JSON.stringify({version:2,heartbeats:n})).length}function dg(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function fg(n){Pn(new tn("platform-logger",e=>new Am(e),"PRIVATE")),Pn(new tn("heartbeat",e=>new lg(e),"PRIVATE")),ft(No,ml,n),ft(No,ml,"esm2020"),ft("fire-js","")}fg("");var pg="firebase",mg="12.7.0";/**
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
 */ft(pg,mg,"app");var wl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zt,fh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,g){function _(){}_.prototype=g.prototype,T.F=g.prototype,T.prototype=new _,T.prototype.constructor=T,T.D=function(v,w,I){for(var y=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)y[oe-2]=arguments[oe];return g.prototype[w].apply(v,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,g,_){_||(_=0);const v=Array(16);if(typeof g=="string")for(var w=0;w<16;++w)v[w]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(w=0;w<16;++w)v[w]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=T.g[0],_=T.g[1],w=T.g[2];let I=T.g[3],y;y=g+(I^_&(w^I))+v[0]+3614090360&4294967295,g=_+(y<<7&4294967295|y>>>25),y=I+(w^g&(_^w))+v[1]+3905402710&4294967295,I=g+(y<<12&4294967295|y>>>20),y=w+(_^I&(g^_))+v[2]+606105819&4294967295,w=I+(y<<17&4294967295|y>>>15),y=_+(g^w&(I^g))+v[3]+3250441966&4294967295,_=w+(y<<22&4294967295|y>>>10),y=g+(I^_&(w^I))+v[4]+4118548399&4294967295,g=_+(y<<7&4294967295|y>>>25),y=I+(w^g&(_^w))+v[5]+1200080426&4294967295,I=g+(y<<12&4294967295|y>>>20),y=w+(_^I&(g^_))+v[6]+2821735955&4294967295,w=I+(y<<17&4294967295|y>>>15),y=_+(g^w&(I^g))+v[7]+4249261313&4294967295,_=w+(y<<22&4294967295|y>>>10),y=g+(I^_&(w^I))+v[8]+1770035416&4294967295,g=_+(y<<7&4294967295|y>>>25),y=I+(w^g&(_^w))+v[9]+2336552879&4294967295,I=g+(y<<12&4294967295|y>>>20),y=w+(_^I&(g^_))+v[10]+4294925233&4294967295,w=I+(y<<17&4294967295|y>>>15),y=_+(g^w&(I^g))+v[11]+2304563134&4294967295,_=w+(y<<22&4294967295|y>>>10),y=g+(I^_&(w^I))+v[12]+1804603682&4294967295,g=_+(y<<7&4294967295|y>>>25),y=I+(w^g&(_^w))+v[13]+4254626195&4294967295,I=g+(y<<12&4294967295|y>>>20),y=w+(_^I&(g^_))+v[14]+2792965006&4294967295,w=I+(y<<17&4294967295|y>>>15),y=_+(g^w&(I^g))+v[15]+1236535329&4294967295,_=w+(y<<22&4294967295|y>>>10),y=g+(w^I&(_^w))+v[1]+4129170786&4294967295,g=_+(y<<5&4294967295|y>>>27),y=I+(_^w&(g^_))+v[6]+3225465664&4294967295,I=g+(y<<9&4294967295|y>>>23),y=w+(g^_&(I^g))+v[11]+643717713&4294967295,w=I+(y<<14&4294967295|y>>>18),y=_+(I^g&(w^I))+v[0]+3921069994&4294967295,_=w+(y<<20&4294967295|y>>>12),y=g+(w^I&(_^w))+v[5]+3593408605&4294967295,g=_+(y<<5&4294967295|y>>>27),y=I+(_^w&(g^_))+v[10]+38016083&4294967295,I=g+(y<<9&4294967295|y>>>23),y=w+(g^_&(I^g))+v[15]+3634488961&4294967295,w=I+(y<<14&4294967295|y>>>18),y=_+(I^g&(w^I))+v[4]+3889429448&4294967295,_=w+(y<<20&4294967295|y>>>12),y=g+(w^I&(_^w))+v[9]+568446438&4294967295,g=_+(y<<5&4294967295|y>>>27),y=I+(_^w&(g^_))+v[14]+3275163606&4294967295,I=g+(y<<9&4294967295|y>>>23),y=w+(g^_&(I^g))+v[3]+4107603335&4294967295,w=I+(y<<14&4294967295|y>>>18),y=_+(I^g&(w^I))+v[8]+1163531501&4294967295,_=w+(y<<20&4294967295|y>>>12),y=g+(w^I&(_^w))+v[13]+2850285829&4294967295,g=_+(y<<5&4294967295|y>>>27),y=I+(_^w&(g^_))+v[2]+4243563512&4294967295,I=g+(y<<9&4294967295|y>>>23),y=w+(g^_&(I^g))+v[7]+1735328473&4294967295,w=I+(y<<14&4294967295|y>>>18),y=_+(I^g&(w^I))+v[12]+2368359562&4294967295,_=w+(y<<20&4294967295|y>>>12),y=g+(_^w^I)+v[5]+4294588738&4294967295,g=_+(y<<4&4294967295|y>>>28),y=I+(g^_^w)+v[8]+2272392833&4294967295,I=g+(y<<11&4294967295|y>>>21),y=w+(I^g^_)+v[11]+1839030562&4294967295,w=I+(y<<16&4294967295|y>>>16),y=_+(w^I^g)+v[14]+4259657740&4294967295,_=w+(y<<23&4294967295|y>>>9),y=g+(_^w^I)+v[1]+2763975236&4294967295,g=_+(y<<4&4294967295|y>>>28),y=I+(g^_^w)+v[4]+1272893353&4294967295,I=g+(y<<11&4294967295|y>>>21),y=w+(I^g^_)+v[7]+4139469664&4294967295,w=I+(y<<16&4294967295|y>>>16),y=_+(w^I^g)+v[10]+3200236656&4294967295,_=w+(y<<23&4294967295|y>>>9),y=g+(_^w^I)+v[13]+681279174&4294967295,g=_+(y<<4&4294967295|y>>>28),y=I+(g^_^w)+v[0]+3936430074&4294967295,I=g+(y<<11&4294967295|y>>>21),y=w+(I^g^_)+v[3]+3572445317&4294967295,w=I+(y<<16&4294967295|y>>>16),y=_+(w^I^g)+v[6]+76029189&4294967295,_=w+(y<<23&4294967295|y>>>9),y=g+(_^w^I)+v[9]+3654602809&4294967295,g=_+(y<<4&4294967295|y>>>28),y=I+(g^_^w)+v[12]+3873151461&4294967295,I=g+(y<<11&4294967295|y>>>21),y=w+(I^g^_)+v[15]+530742520&4294967295,w=I+(y<<16&4294967295|y>>>16),y=_+(w^I^g)+v[2]+3299628645&4294967295,_=w+(y<<23&4294967295|y>>>9),y=g+(w^(_|~I))+v[0]+4096336452&4294967295,g=_+(y<<6&4294967295|y>>>26),y=I+(_^(g|~w))+v[7]+1126891415&4294967295,I=g+(y<<10&4294967295|y>>>22),y=w+(g^(I|~_))+v[14]+2878612391&4294967295,w=I+(y<<15&4294967295|y>>>17),y=_+(I^(w|~g))+v[5]+4237533241&4294967295,_=w+(y<<21&4294967295|y>>>11),y=g+(w^(_|~I))+v[12]+1700485571&4294967295,g=_+(y<<6&4294967295|y>>>26),y=I+(_^(g|~w))+v[3]+2399980690&4294967295,I=g+(y<<10&4294967295|y>>>22),y=w+(g^(I|~_))+v[10]+4293915773&4294967295,w=I+(y<<15&4294967295|y>>>17),y=_+(I^(w|~g))+v[1]+2240044497&4294967295,_=w+(y<<21&4294967295|y>>>11),y=g+(w^(_|~I))+v[8]+1873313359&4294967295,g=_+(y<<6&4294967295|y>>>26),y=I+(_^(g|~w))+v[15]+4264355552&4294967295,I=g+(y<<10&4294967295|y>>>22),y=w+(g^(I|~_))+v[6]+2734768916&4294967295,w=I+(y<<15&4294967295|y>>>17),y=_+(I^(w|~g))+v[13]+1309151649&4294967295,_=w+(y<<21&4294967295|y>>>11),y=g+(w^(_|~I))+v[4]+4149444226&4294967295,g=_+(y<<6&4294967295|y>>>26),y=I+(_^(g|~w))+v[11]+3174756917&4294967295,I=g+(y<<10&4294967295|y>>>22),y=w+(g^(I|~_))+v[2]+718787259&4294967295,w=I+(y<<15&4294967295|y>>>17),y=_+(I^(w|~g))+v[9]+3951481745&4294967295,T.g[0]=T.g[0]+g&4294967295,T.g[1]=T.g[1]+(w+(y<<21&4294967295|y>>>11))&4294967295,T.g[2]=T.g[2]+w&4294967295,T.g[3]=T.g[3]+I&4294967295}r.prototype.v=function(T,g){g===void 0&&(g=T.length);const _=g-this.blockSize,v=this.C;let w=this.h,I=0;for(;I<g;){if(w==0)for(;I<=_;)s(this,T,I),I+=this.blockSize;if(typeof T=="string"){for(;I<g;)if(v[w++]=T.charCodeAt(I++),w==this.blockSize){s(this,v),w=0;break}}else for(;I<g;)if(v[w++]=T[I++],w==this.blockSize){s(this,v),w=0;break}}this.h=w,this.o+=g},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var g=1;g<T.length-8;++g)T[g]=0;g=this.o*8;for(var _=T.length-8;_<T.length;++_)T[_]=g&255,g/=256;for(this.v(T),T=Array(16),g=0,_=0;_<4;++_)for(let v=0;v<32;v+=8)T[g++]=this.g[_]>>>v&255;return T};function i(T,g){var _=c;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=g(T)}function a(T,g){this.h=g;const _=[];let v=!0;for(let w=T.length-1;w>=0;w--){const I=T[w]|0;v&&I==g||(_[w]=I,v=!1)}this.g=_}var c={};function u(T){return-128<=T&&T<128?i(T,function(g){return new a([g|0],g<0?-1:0)}):new a([T|0],T<0?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return m;if(T<0)return C(d(-T));const g=[];let _=1;for(let v=0;T>=_;v++)g[v]=T/_|0,_*=4294967296;return new a(g,0)}function f(T,g){if(T.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(T.charAt(0)=="-")return C(f(T.substring(1),g));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=d(Math.pow(g,8));let v=m;for(let I=0;I<T.length;I+=8){var w=Math.min(8,T.length-I);const y=parseInt(T.substring(I,I+w),g);w<8?(w=d(Math.pow(g,w)),v=v.j(w).add(d(y))):(v=v.j(_),v=v.add(d(y)))}return v}var m=u(0),E=u(1),A=u(16777216);n=a.prototype,n.m=function(){if(x(this))return-C(this).m();let T=0,g=1;for(let _=0;_<this.g.length;_++){const v=this.i(_);T+=(v>=0?v:4294967296+v)*g,g*=4294967296}return T},n.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(k(this))return"0";if(x(this))return"-"+C(this).toString(T);const g=d(Math.pow(T,6));var _=this;let v="";for(;;){const w=Q(_,g).g;_=z(_,w.j(g));let I=((_.g.length>0?_.g[0]:_.h)>>>0).toString(T);if(_=w,k(_))return I+v;for(;I.length<6;)I="0"+I;v=I+v}},n.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function k(T){if(T.h!=0)return!1;for(let g=0;g<T.g.length;g++)if(T.g[g]!=0)return!1;return!0}function x(T){return T.h==-1}n.l=function(T){return T=z(this,T),x(T)?-1:k(T)?0:1};function C(T){const g=T.g.length,_=[];for(let v=0;v<g;v++)_[v]=~T.g[v];return new a(_,~T.h).add(E)}n.abs=function(){return x(this)?C(this):this},n.add=function(T){const g=Math.max(this.g.length,T.g.length),_=[];let v=0;for(let w=0;w<=g;w++){let I=v+(this.i(w)&65535)+(T.i(w)&65535),y=(I>>>16)+(this.i(w)>>>16)+(T.i(w)>>>16);v=y>>>16,I&=65535,y&=65535,_[w]=y<<16|I}return new a(_,_[_.length-1]&-2147483648?-1:0)};function z(T,g){return T.add(C(g))}n.j=function(T){if(k(this)||k(T))return m;if(x(this))return x(T)?C(this).j(C(T)):C(C(this).j(T));if(x(T))return C(this.j(C(T)));if(this.l(A)<0&&T.l(A)<0)return d(this.m()*T.m());const g=this.g.length+T.g.length,_=[];for(var v=0;v<2*g;v++)_[v]=0;for(v=0;v<this.g.length;v++)for(let w=0;w<T.g.length;w++){const I=this.i(v)>>>16,y=this.i(v)&65535,oe=T.i(w)>>>16,je=T.i(w)&65535;_[2*v+2*w]+=y*je,H(_,2*v+2*w),_[2*v+2*w+1]+=I*je,H(_,2*v+2*w+1),_[2*v+2*w+1]+=y*oe,H(_,2*v+2*w+1),_[2*v+2*w+2]+=I*oe,H(_,2*v+2*w+2)}for(T=0;T<g;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=g;T<2*g;T++)_[T]=0;return new a(_,0)};function H(T,g){for(;(T[g]&65535)!=T[g];)T[g+1]+=T[g]>>>16,T[g]&=65535,g++}function j(T,g){this.g=T,this.h=g}function Q(T,g){if(k(g))throw Error("division by zero");if(k(T))return new j(m,m);if(x(T))return g=Q(C(T),g),new j(C(g.g),C(g.h));if(x(g))return g=Q(T,C(g)),new j(C(g.g),g.h);if(T.g.length>30){if(x(T)||x(g))throw Error("slowDivide_ only works with positive integers.");for(var _=E,v=g;v.l(T)<=0;)_=le(_),v=le(v);var w=se(_,1),I=se(v,1);for(v=se(v,2),_=se(_,2);!k(v);){var y=I.add(v);y.l(T)<=0&&(w=w.add(_),I=y),v=se(v,1),_=se(_,1)}return g=z(T,w.j(g)),new j(w,g)}for(w=m;T.l(g)>=0;){for(_=Math.max(1,Math.floor(T.m()/g.m())),v=Math.ceil(Math.log(_)/Math.LN2),v=v<=48?1:Math.pow(2,v-48),I=d(_),y=I.j(g);x(y)||y.l(T)>0;)_-=v,I=d(_),y=I.j(g);k(I)&&(I=E),w=w.add(I),T=z(T,y)}return new j(w,T)}n.B=function(T){return Q(this,T).h},n.and=function(T){const g=Math.max(this.g.length,T.g.length),_=[];for(let v=0;v<g;v++)_[v]=this.i(v)&T.i(v);return new a(_,this.h&T.h)},n.or=function(T){const g=Math.max(this.g.length,T.g.length),_=[];for(let v=0;v<g;v++)_[v]=this.i(v)|T.i(v);return new a(_,this.h|T.h)},n.xor=function(T){const g=Math.max(this.g.length,T.g.length),_=[];for(let v=0;v<g;v++)_[v]=this.i(v)^T.i(v);return new a(_,this.h^T.h)};function le(T){const g=T.g.length+1,_=[];for(let v=0;v<g;v++)_[v]=T.i(v)<<1|T.i(v-1)>>>31;return new a(_,T.h)}function se(T,g){const _=g>>5;g%=32;const v=T.g.length-_,w=[];for(let I=0;I<v;I++)w[I]=g>0?T.i(I+_)>>>g|T.i(I+_+1)<<32-g:T.i(I+_);return new a(w,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,fh=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,Zt=a}).apply(typeof wl<"u"?wl:typeof self<"u"?self:typeof window<"u"?window:{});var Ns=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ph,Dr,mh,js,Oo,gh,_h,yh;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ns=="object"&&Ns];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(o,l){if(l)e:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var b=o[p];if(!(b in h))break e;h=h[b]}o=o[o.length-1],p=h[o],l=l(p),l!=p&&l!=null&&e(h,o,{configurable:!0,writable:!0,value:l})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(l){var h=[],p;for(p in l)Object.prototype.hasOwnProperty.call(l,p)&&h.push([p,l[p]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function c(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function u(o,l,h){return o.call.apply(o.bind,arguments)}function d(o,l,h){return d=u,d.apply(null,arguments)}function f(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function m(o,l){function h(){}h.prototype=l.prototype,o.Z=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Ob=function(p,b,R){for(var D=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)D[Z-2]=arguments[Z];return l.prototype[b].apply(p,D)}}var E=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function A(o){const l=o.length;if(l>0){const h=Array(l);for(let p=0;p<l;p++)h[p]=o[p];return h}return[]}function k(o,l){for(let p=1;p<arguments.length;p++){const b=arguments[p];var h=typeof b;if(h=h!="object"?h:b?Array.isArray(b)?"array":h:"null",h=="array"||h=="object"&&typeof b.length=="number"){h=o.length||0;const R=b.length||0;o.length=h+R;for(let D=0;D<R;D++)o[h+D]=b[D]}else o.push(b)}}class x{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function C(o){a.setTimeout(()=>{throw o},0)}function z(){var o=T;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class H{constructor(){this.h=this.g=null}add(l,h){const p=j.get();p.set(l,h),this.h?this.h.next=p:this.g=p,this.h=p}}var j=new x(()=>new Q,o=>o.reset());class Q{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let le,se=!1,T=new H,g=()=>{const o=Promise.resolve(void 0);le=()=>{o.then(_)}};function _(){for(var o;o=z();){try{o.h.call(o.g)}catch(h){C(h)}var l=j;l.j(o),l.h<100&&(l.h++,o.next=l.g,l.g=o)}se=!1}function v(){this.u=this.u,this.C=this.C}v.prototype.u=!1,v.prototype.dispose=function(){this.u||(this.u=!0,this.N())},v.prototype[Symbol.dispose]=function(){this.dispose()},v.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function w(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}w.prototype.h=function(){this.defaultPrevented=!0};var I=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};a.addEventListener("test",h,l),a.removeEventListener("test",h,l)}catch{}return o}();function y(o){return/^[\s\xa0]*$/.test(o)}function oe(o,l){w.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,l)}m(oe,w),oe.prototype.init=function(o,l){const h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget,l||(h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement)),this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&oe.Z.h.call(this)},oe.prototype.h=function(){oe.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var je="closure_listenable_"+(Math.random()*1e6|0),et=0;function tt(o,l,h,p,b){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!p,this.ha=b,this.key=++et,this.da=this.fa=!1}function Ge(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function V(o,l,h){for(const p in o)l.call(h,o[p],p,o)}function B(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function Y(o){const l={};for(const h in o)l[h]=o[h];return l}const L="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(o,l){let h,p;for(let b=1;b<arguments.length;b++){p=arguments[b];for(h in p)o[h]=p[h];for(let R=0;R<L.length;R++)h=L[R],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function $(o){this.src=o,this.g={},this.h=0}$.prototype.add=function(o,l,h,p,b){const R=o.toString();o=this.g[R],o||(o=this.g[R]=[],this.h++);const D=J(o,l,p,b);return D>-1?(l=o[D],h||(l.fa=!1)):(l=new tt(l,this.src,R,!!p,b),l.fa=h,o.push(l)),l};function U(o,l){const h=l.type;if(h in o.g){var p=o.g[h],b=Array.prototype.indexOf.call(p,l,void 0),R;(R=b>=0)&&Array.prototype.splice.call(p,b,1),R&&(Ge(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function J(o,l,h,p){for(let b=0;b<o.length;++b){const R=o[b];if(!R.da&&R.listener==l&&R.capture==!!h&&R.ha==p)return b}return-1}var Ee="closure_lm_"+(Math.random()*1e6|0),Fe={};function me(o,l,h,p,b){if(Array.isArray(l)){for(let R=0;R<l.length;R++)me(o,l[R],h,p,b);return null}return h=dc(h),o&&o[je]?o.J(l,h,c(p)?!!p.capture:!1,b):Ke(o,l,h,!1,p,b)}function Ke(o,l,h,p,b,R){if(!l)throw Error("Invalid event type");const D=c(b)?!!b.capture:!!b;let Z=ji(o);if(Z||(o[Ee]=Z=new $(o)),h=Z.add(l,h,p,D,R),h.proxy)return h;if(p=nt(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)I||(b=D),b===void 0&&(b=!1),o.addEventListener(l.toString(),p,b);else if(o.attachEvent)o.attachEvent(Un(l.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function nt(){function o(h){return l.call(o.src,o.listener,h)}const l=mr;return o}function at(o,l,h,p,b){if(Array.isArray(l))for(var R=0;R<l.length;R++)at(o,l[R],h,p,b);else p=c(p)?!!p.capture:!!p,h=dc(h),o&&o[je]?(o=o.i,R=String(l).toString(),R in o.g&&(l=o.g[R],h=J(l,h,p,b),h>-1&&(Ge(l[h]),Array.prototype.splice.call(l,h,1),l.length==0&&(delete o.g[R],o.h--)))):o&&(o=ji(o))&&(l=o.g[l.toString()],o=-1,l&&(o=J(l,h,p,b)),(h=o>-1?l[o]:null)&&St(h))}function St(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[je])U(l.i,o);else{var h=o.type,p=o.proxy;l.removeEventListener?l.removeEventListener(h,p,o.capture):l.detachEvent?l.detachEvent(Un(h),p):l.addListener&&l.removeListener&&l.removeListener(p),(h=ji(l))?(U(h,o),h.h==0&&(h.src=null,l[Ee]=null)):Ge(o)}}}function Un(o){return o in Fe?Fe[o]:Fe[o]="on"+o}function mr(o,l){if(o.da)o=!0;else{l=new oe(l,this);const h=o.listener,p=o.ha||o.src;o.fa&&St(o),o=h.call(p,l)}return o}function ji(o){return o=o[Ee],o instanceof $?o:null}var zi="__closure_events_fn_"+(Math.random()*1e9>>>0);function dc(o){return typeof o=="function"?o:(o[zi]||(o[zi]=function(l){return o.handleEvent(l)}),o[zi])}function Ve(){v.call(this),this.i=new $(this),this.M=this,this.G=null}m(Ve,v),Ve.prototype[je]=!0,Ve.prototype.removeEventListener=function(o,l,h,p){at(this,o,l,h,p)};function Be(o,l){var h,p=o.G;if(p)for(h=[];p;p=p.G)h.push(p);if(o=o.M,p=l.type||l,typeof l=="string")l=new w(l,o);else if(l instanceof w)l.target=l.target||o;else{var b=l;l=new w(p,o),N(l,b)}b=!0;let R,D;if(h)for(D=h.length-1;D>=0;D--)R=l.g=h[D],b=_s(R,p,!0,l)&&b;if(R=l.g=o,b=_s(R,p,!0,l)&&b,b=_s(R,p,!1,l)&&b,h)for(D=0;D<h.length;D++)R=l.g=h[D],b=_s(R,p,!1,l)&&b}Ve.prototype.N=function(){if(Ve.Z.N.call(this),this.i){var o=this.i;for(const l in o.g){const h=o.g[l];for(let p=0;p<h.length;p++)Ge(h[p]);delete o.g[l],o.h--}}this.G=null},Ve.prototype.J=function(o,l,h,p){return this.i.add(String(o),l,!1,h,p)},Ve.prototype.K=function(o,l,h,p){return this.i.add(String(o),l,!0,h,p)};function _s(o,l,h,p){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();let b=!0;for(let R=0;R<l.length;++R){const D=l[R];if(D&&!D.da&&D.capture==h){const Z=D.listener,Ae=D.ha||D.src;D.fa&&U(o.i,D),b=Z.call(Ae,p)!==!1&&b}}return b&&!p.defaultPrevented}function Qf(o,l){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=d(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:a.setTimeout(o,l||0)}function fc(o){o.g=Qf(()=>{o.g=null,o.i&&(o.i=!1,fc(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Xf extends v{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:fc(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gr(o){v.call(this),this.h=o,this.g={}}m(gr,v);var pc=[];function mc(o){V(o.g,function(l,h){this.g.hasOwnProperty(h)&&St(l)},o),o.g={}}gr.prototype.N=function(){gr.Z.N.call(this),mc(this)},gr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Hi=a.JSON.stringify,Yf=a.JSON.parse,Jf=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function gc(){}function _c(){}var _r={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Wi(){w.call(this,"d")}m(Wi,w);function Gi(){w.call(this,"c")}m(Gi,w);var fn={},yc=null;function ys(){return yc=yc||new Ve}fn.Ia="serverreachability";function vc(o){w.call(this,fn.Ia,o)}m(vc,w);function yr(o){const l=ys();Be(l,new vc(l))}fn.STAT_EVENT="statevent";function wc(o,l){w.call(this,fn.STAT_EVENT,o),this.stat=l}m(wc,w);function $e(o){const l=ys();Be(l,new wc(l,o))}fn.Ja="timingevent";function Ec(o,l){w.call(this,fn.Ja,o),this.size=l}m(Ec,w);function vr(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},l)}function wr(){this.g=!0}wr.prototype.ua=function(){this.g=!1};function Zf(o,l,h,p,b,R){o.info(function(){if(o.g)if(R){var D="",Z=R.split("&");for(let ce=0;ce<Z.length;ce++){var Ae=Z[ce].split("=");if(Ae.length>1){const Pe=Ae[0];Ae=Ae[1];const lt=Pe.split("_");D=lt.length>=2&&lt[1]=="type"?D+(Pe+"="+Ae+"&"):D+(Pe+"=redacted&")}}}else D=null;else D=R;return"XMLHTTP REQ ("+p+") [attempt "+b+"]: "+l+`
`+h+`
`+D})}function ep(o,l,h,p,b,R,D){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+b+"]: "+l+`
`+h+`
`+R+" "+D})}function Fn(o,l,h,p){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+np(o,h)+(p?" "+p:"")})}function tp(o,l){o.info(function(){return"TIMEOUT: "+l})}wr.prototype.info=function(){};function np(o,l){if(!o.g)return l;if(!l)return null;try{const R=JSON.parse(l);if(R){for(o=0;o<R.length;o++)if(Array.isArray(R[o])){var h=R[o];if(!(h.length<2)){var p=h[1];if(Array.isArray(p)&&!(p.length<1)){var b=p[0];if(b!="noop"&&b!="stop"&&b!="close")for(let D=1;D<p.length;D++)p[D]=""}}}}return Hi(R)}catch{return l}}var vs={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Tc={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ic;function Ki(){}m(Ki,gc),Ki.prototype.g=function(){return new XMLHttpRequest},Ic=new Ki;function Er(o){return encodeURIComponent(String(o))}function rp(o){var l=1;o=o.split(":");const h=[];for(;l>0&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function Ft(o,l,h,p){this.j=o,this.i=l,this.l=h,this.S=p||1,this.V=new gr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new bc}function bc(){this.i=null,this.g="",this.h=!1}var Ac={},Qi={};function Xi(o,l,h){o.M=1,o.A=Es(ct(l)),o.u=h,o.R=!0,Rc(o,null)}function Rc(o,l){o.F=Date.now(),ws(o),o.B=ct(o.A);var h=o.B,p=o.S;Array.isArray(p)||(p=[String(p)]),Fc(h.i,"t",p),o.C=0,h=o.j.L,o.h=new bc,o.g=rl(o.j,h?l:null,!o.u),o.P>0&&(o.O=new Xf(d(o.Y,o,o.g),o.P)),l=o.V,h=o.g,p=o.ba;var b="readystatechange";Array.isArray(b)||(b&&(pc[0]=b.toString()),b=pc);for(let R=0;R<b.length;R++){const D=me(h,b[R],p||l.handleEvent,!1,l.h||l);if(!D)break;l.g[D.key]=D}l=o.J?Y(o.J):{},o.u?(o.v||(o.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,l)):(o.v="GET",o.g.ea(o.B,o.v,null,l)),yr(),Zf(o.i,o.v,o.B,o.l,o.S,o.u)}Ft.prototype.ba=function(o){o=o.target;const l=this.O;l&&qt(o)==3?l.j():this.Y(o)},Ft.prototype.Y=function(o){try{if(o==this.g)e:{const Z=qt(this.g),Ae=this.g.ya(),ce=this.g.ca();if(!(Z<3)&&(Z!=3||this.g&&(this.h.h||this.g.la()||Wc(this.g)))){this.K||Z!=4||Ae==7||(Ae==8||ce<=0?yr(3):yr(2)),Yi(this);var l=this.g.ca();this.X=l;var h=sp(this);if(this.o=l==200,ep(this.i,this.v,this.B,this.l,this.S,Z,l),this.o){if(this.U&&!this.L){t:{if(this.g){var p,b=this.g;if((p=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(p)){var R=p;break t}}R=null}if(o=R)Fn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ji(this,o);else{this.o=!1,this.m=3,$e(12),pn(this),Tr(this);break e}}if(this.R){o=!0;let Pe;for(;!this.K&&this.C<h.length;)if(Pe=ip(this,h),Pe==Qi){Z==4&&(this.m=4,$e(14),o=!1),Fn(this.i,this.l,null,"[Incomplete Response]");break}else if(Pe==Ac){this.m=4,$e(15),Fn(this.i,this.l,h,"[Invalid Chunk]"),o=!1;break}else Fn(this.i,this.l,Pe,null),Ji(this,Pe);if(Sc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Z!=4||h.length!=0||this.h.h||(this.m=1,$e(16),o=!1),this.o=this.o&&o,!o)Fn(this.i,this.l,h,"[Invalid Chunked Response]"),pn(this),Tr(this);else if(h.length>0&&!this.W){this.W=!0;var D=this.j;D.g==this&&D.aa&&!D.P&&(D.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),oo(D),D.P=!0,$e(11))}}else Fn(this.i,this.l,h,null),Ji(this,h);Z==4&&pn(this),this.o&&!this.K&&(Z==4?Zc(this.j,this):(this.o=!1,ws(this)))}else vp(this.g),l==400&&h.indexOf("Unknown SID")>0?(this.m=3,$e(12)):(this.m=0,$e(13)),pn(this),Tr(this)}}}catch{}finally{}};function sp(o){if(!Sc(o))return o.g.la();const l=Wc(o.g);if(l==="")return"";let h="";const p=l.length,b=qt(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return pn(o),Tr(o),"";o.h.i=new a.TextDecoder}for(let R=0;R<p;R++)o.h.h=!0,h+=o.h.i.decode(l[R],{stream:!(b&&R==p-1)});return l.length=0,o.h.g+=h,o.C=0,o.h.g}function Sc(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function ip(o,l){var h=o.C,p=l.indexOf(`
`,h);return p==-1?Qi:(h=Number(l.substring(h,p)),isNaN(h)?Ac:(p+=1,p+h>l.length?Qi:(l=l.slice(p,p+h),o.C=p+h,l)))}Ft.prototype.cancel=function(){this.K=!0,pn(this)};function ws(o){o.T=Date.now()+o.H,Pc(o,o.H)}function Pc(o,l){if(o.D!=null)throw Error("WatchDog timer not null");o.D=vr(d(o.aa,o),l)}function Yi(o){o.D&&(a.clearTimeout(o.D),o.D=null)}Ft.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(tp(this.i,this.B),this.M!=2&&(yr(),$e(17)),pn(this),this.m=2,Tr(this)):Pc(this,this.T-o)};function Tr(o){o.j.I==0||o.K||Zc(o.j,o)}function pn(o){Yi(o);var l=o.O;l&&typeof l.dispose=="function"&&l.dispose(),o.O=null,mc(o.V),o.g&&(l=o.g,o.g=null,l.abort(),l.dispose())}function Ji(o,l){try{var h=o.j;if(h.I!=0&&(h.g==o||Zi(h.h,o))){if(!o.L&&Zi(h.h,o)&&h.I==3){try{var p=h.Ba.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var b=p;if(b[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<o.F)Rs(h),bs(h);else break e;io(h),$e(18)}}else h.xa=b[1],0<h.xa-h.K&&b[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=vr(d(h.Va,h),6e3));xc(h.h)<=1&&h.ta&&(h.ta=void 0)}else gn(h,11)}else if((o.L||h.g==o)&&Rs(h),!y(l))for(b=h.Ba.g.parse(l),l=0;l<b.length;l++){let ce=b[l];const Pe=ce[0];if(!(Pe<=h.K))if(h.K=Pe,ce=ce[1],h.I==2)if(ce[0]=="c"){h.M=ce[1],h.ba=ce[2];const lt=ce[3];lt!=null&&(h.ka=lt,h.j.info("VER="+h.ka));const _n=ce[4];_n!=null&&(h.za=_n,h.j.info("SVER="+h.za));const jt=ce[5];jt!=null&&typeof jt=="number"&&jt>0&&(p=1.5*jt,h.O=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const zt=o.g;if(zt){const Ps=zt.g?zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ps){var R=p.h;R.g||Ps.indexOf("spdy")==-1&&Ps.indexOf("quic")==-1&&Ps.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(eo(R,R.h),R.h=null))}if(p.G){const ao=zt.g?zt.g.getResponseHeader("X-HTTP-Session-Id"):null;ao&&(p.wa=ao,he(p.J,p.G,ao))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-o.F,h.j.info("Handshake RTT: "+h.T+"ms")),p=h;var D=o;if(p.na=nl(p,p.L?p.ba:null,p.W),D.L){Nc(p.h,D);var Z=D,Ae=p.O;Ae&&(Z.H=Ae),Z.D&&(Yi(Z),ws(Z)),p.g=D}else Yc(p);h.i.length>0&&As(h)}else ce[0]!="stop"&&ce[0]!="close"||gn(h,7);else h.I==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?gn(h,7):so(h):ce[0]!="noop"&&h.l&&h.l.qa(ce),h.A=0)}}yr(4)}catch{}}var op=class{constructor(o,l){this.g=o,this.map=l}};function Cc(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function kc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function xc(o){return o.h?1:o.g?o.g.size:0}function Zi(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function eo(o,l){o.g?o.g.add(l):o.h=l}function Nc(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}Cc.prototype.cancel=function(){if(this.i=Dc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Dc(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.G);return l}return A(o.i)}var Vc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ap(o,l){if(o){o=o.split("&");for(let h=0;h<o.length;h++){const p=o[h].indexOf("=");let b,R=null;p>=0?(b=o[h].substring(0,p),R=o[h].substring(p+1)):b=o[h],l(b,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Bt(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;o instanceof Bt?(this.l=o.l,Ir(this,o.j),this.o=o.o,this.g=o.g,br(this,o.u),this.h=o.h,to(this,Bc(o.i)),this.m=o.m):o&&(l=String(o).match(Vc))?(this.l=!1,Ir(this,l[1]||"",!0),this.o=Ar(l[2]||""),this.g=Ar(l[3]||"",!0),br(this,l[4]),this.h=Ar(l[5]||"",!0),to(this,l[6]||"",!0),this.m=Ar(l[7]||"")):(this.l=!1,this.i=new Sr(null,this.l))}Bt.prototype.toString=function(){const o=[];var l=this.j;l&&o.push(Rr(l,Oc,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(Rr(l,Oc,!0),"@"),o.push(Er(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&o.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Rr(h,h.charAt(0)=="/"?up:lp,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Rr(h,dp)),o.join("")},Bt.prototype.resolve=function(o){const l=ct(this);let h=!!o.j;h?Ir(l,o.j):h=!!o.o,h?l.o=o.o:h=!!o.g,h?l.g=o.g:h=o.u!=null;var p=o.h;if(h)br(l,o.u);else if(h=!!o.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var b=l.h.lastIndexOf("/");b!=-1&&(p=l.h.slice(0,b+1)+p)}if(b=p,b==".."||b==".")p="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){p=b.lastIndexOf("/",0)==0,b=b.split("/");const R=[];for(let D=0;D<b.length;){const Z=b[D++];Z=="."?p&&D==b.length&&R.push(""):Z==".."?((R.length>1||R.length==1&&R[0]!="")&&R.pop(),p&&D==b.length&&R.push("")):(R.push(Z),p=!0)}p=R.join("/")}else p=b}return h?l.h=p:h=o.i.toString()!=="",h?to(l,Bc(o.i)):h=!!o.m,h&&(l.m=o.m),l};function ct(o){return new Bt(o)}function Ir(o,l,h){o.j=h?Ar(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function br(o,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);o.u=l}else o.u=null}function to(o,l,h){l instanceof Sr?(o.i=l,fp(o.i,o.l)):(h||(l=Rr(l,hp)),o.i=new Sr(l,o.l))}function he(o,l,h){o.i.set(l,h)}function Es(o){return he(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Ar(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Rr(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,cp),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function cp(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Oc=/[#\/\?@]/g,lp=/[#\?:]/g,up=/[#\?]/g,hp=/[#\?@]/g,dp=/#/g;function Sr(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function mn(o){o.g||(o.g=new Map,o.h=0,o.i&&ap(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}n=Sr.prototype,n.add=function(o,l){mn(this),this.i=null,o=Bn(this,o);let h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function Lc(o,l){mn(o),l=Bn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function Mc(o,l){return mn(o),l=Bn(o,l),o.g.has(l)}n.forEach=function(o,l){mn(this),this.g.forEach(function(h,p){h.forEach(function(b){o.call(l,b,p,this)},this)},this)};function Uc(o,l){mn(o);let h=[];if(typeof l=="string")Mc(o,l)&&(h=h.concat(o.g.get(Bn(o,l))));else for(o=Array.from(o.g.values()),l=0;l<o.length;l++)h=h.concat(o[l]);return h}n.set=function(o,l){return mn(this),this.i=null,o=Bn(this,o),Mc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=Uc(this,o),o.length>0?String(o[0]):l):l};function Fc(o,l,h){Lc(o,l),h.length>0&&(o.i=null,o.g.set(Bn(o,l),A(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(let p=0;p<l.length;p++){var h=l[p];const b=Er(h);h=Uc(this,h);for(let R=0;R<h.length;R++){let D=b;h[R]!==""&&(D+="="+Er(h[R])),o.push(D)}}return this.i=o.join("&")};function Bc(o){const l=new Sr;return l.i=o.i,o.g&&(l.g=new Map(o.g),l.h=o.h),l}function Bn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function fp(o,l){l&&!o.j&&(mn(o),o.i=null,o.g.forEach(function(h,p){const b=p.toLowerCase();p!=b&&(Lc(this,p),Fc(this,b,h))},o)),o.j=l}function pp(o,l){const h=new wr;if(a.Image){const p=new Image;p.onload=f($t,h,"TestLoadImage: loaded",!0,l,p),p.onerror=f($t,h,"TestLoadImage: error",!1,l,p),p.onabort=f($t,h,"TestLoadImage: abort",!1,l,p),p.ontimeout=f($t,h,"TestLoadImage: timeout",!1,l,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else l(!1)}function mp(o,l){const h=new wr,p=new AbortController,b=setTimeout(()=>{p.abort(),$t(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:p.signal}).then(R=>{clearTimeout(b),R.ok?$t(h,"TestPingServer: ok",!0,l):$t(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(b),$t(h,"TestPingServer: error",!1,l)})}function $t(o,l,h,p,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),p(h)}catch{}}function gp(){this.g=new Jf}function no(o){this.i=o.Sb||null,this.h=o.ab||!1}m(no,gc),no.prototype.g=function(){return new Ts(this.i,this.h)};function Ts(o,l){Ve.call(this),this.H=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(Ts,Ve),n=Ts.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=l,this.readyState=1,Cr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(l.body=o),(this.H||a).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Pr(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Cr(this)),this.g&&(this.readyState=3,Cr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;$c(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function $c(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?Pr(this):Cr(this),this.readyState==3&&$c(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,Pr(this))},n.Na=function(o){this.g&&(this.response=o,Pr(this))},n.ga=function(){this.g&&Pr(this)};function Pr(o){o.readyState=4,o.l=null,o.j=null,o.B=null,Cr(o)}n.setRequestHeader=function(o,l){this.A.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function Cr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ts.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function qc(o){let l="";return V(o,function(h,p){l+=p,l+=":",l+=h,l+=`\r
`}),l}function ro(o,l,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=qc(h),typeof o=="string"?h!=null&&Er(h):he(o,l,h))}function ge(o){Ve.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(ge,Ve);var _p=/^https?$/i,yp=["POST","PUT"];n=ge.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,l,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ic.g(),this.g.onreadystatechange=E(d(this.Ca,this));try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(R){jc(this,R);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var b in p)h.set(b,p[b]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const R of p.keys())h.set(R,p.get(R));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(R=>R.toLowerCase()=="content-type"),b=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(yp,l,void 0)>=0)||p||b||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,D]of h)this.g.setRequestHeader(R,D);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(R){jc(this,R)}};function jc(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.o=5,zc(o),Is(o)}function zc(o){o.A||(o.A=!0,Be(o,"complete"),Be(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,Be(this,"complete"),Be(this,"abort"),Is(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Is(this,!0)),ge.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Hc(this):this.Xa())},n.Xa=function(){Hc(this)};function Hc(o){if(o.h&&typeof i<"u"){if(o.v&&qt(o)==4)setTimeout(o.Ca.bind(o),0);else if(Be(o,"readystatechange"),qt(o)==4){o.h=!1;try{const R=o.ca();e:switch(R){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var p;if(p=R===0){let D=String(o.D).match(Vc)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),p=!_p.test(D?D.toLowerCase():"")}h=p}if(h)Be(o,"complete"),Be(o,"success");else{o.o=6;try{var b=qt(o)>2?o.g.statusText:""}catch{b=""}o.l=b+" ["+o.ca()+"]",zc(o)}}finally{Is(o)}}}}function Is(o,l){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const h=o.g;o.g=null,l||Be(o,"ready");try{h.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function qt(o){return o.g?o.g.readyState:0}n.ca=function(){try{return qt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Yf(l)}};function Wc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function vp(o){const l={};o=(o.g&&qt(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(y(o[p]))continue;var h=rp(o[p]);const b=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const R=l[b]||[];l[b]=R,R.push(h)}B(l,function(p){return p.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function kr(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function Gc(o){this.za=0,this.i=[],this.j=new wr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=kr("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=kr("baseRetryDelayMs",5e3,o),this.Za=kr("retryDelaySeedMs",1e4,o),this.Ta=kr("forwardChannelMaxRetries",2,o),this.va=kr("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Cc(o&&o.concurrentRequestLimit),this.Ba=new gp,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Gc.prototype,n.ka=8,n.I=1,n.connect=function(o,l,h,p){$e(0),this.W=o,this.H=l||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.J=nl(this,null,this.W),As(this)};function so(o){if(Kc(o),o.I==3){var l=o.V++,h=ct(o.J);if(he(h,"SID",o.M),he(h,"RID",l),he(h,"TYPE","terminate"),xr(o,h),l=new Ft(o,o.j,l),l.M=2,l.A=Es(ct(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(l.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=l.A,h=!0),h||(l.g=rl(l.j,null),l.g.ea(l.A)),l.F=Date.now(),ws(l)}tl(o)}function bs(o){o.g&&(oo(o),o.g.cancel(),o.g=null)}function Kc(o){bs(o),o.v&&(a.clearTimeout(o.v),o.v=null),Rs(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function As(o){if(!kc(o.h)&&!o.m){o.m=!0;var l=o.Ea;le||g(),se||(le(),se=!0),T.add(l,o),o.D=0}}function wp(o,l){return xc(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=l.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=vr(d(o.Ea,o,l),el(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const b=new Ft(this,this.j,o);let R=this.o;if(this.U&&(R?(R=Y(R),N(R,this.U)):R=this.U),this.u!==null||this.R||(b.J=R,R=null),this.S)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,l>4096){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=Xc(this,b,l),h=ct(this.J),he(h,"RID",o),he(h,"CVER",22),this.G&&he(h,"X-HTTP-Session-Id",this.G),xr(this,h),R&&(this.R?l="headers="+Er(qc(R))+"&"+l:this.u&&ro(h,this.u,R)),eo(this.h,b),this.Ra&&he(h,"TYPE","init"),this.S?(he(h,"$req",l),he(h,"SID","null"),b.U=!0,Xi(b,h,null)):Xi(b,h,l),this.I=2}}else this.I==3&&(o?Qc(this,o):this.i.length==0||kc(this.h)||Qc(this))};function Qc(o,l){var h;l?h=l.l:h=o.V++;const p=ct(o.J);he(p,"SID",o.M),he(p,"RID",h),he(p,"AID",o.K),xr(o,p),o.u&&o.o&&ro(p,o.u,o.o),h=new Ft(o,o.j,h,o.D+1),o.u===null&&(h.J=o.o),l&&(o.i=l.G.concat(o.i)),l=Xc(o,h,1e3),h.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),eo(o.h,h),Xi(h,p,l)}function xr(o,l){o.H&&V(o.H,function(h,p){he(l,p,h)}),o.l&&V({},function(h,p){he(l,p,h)})}function Xc(o,l,h){h=Math.min(o.i.length,h);const p=o.l?d(o.l.Ka,o.l,o):null;e:{var b=o.i;let Z=-1;for(;;){const Ae=["count="+h];Z==-1?h>0?(Z=b[0].g,Ae.push("ofs="+Z)):Z=0:Ae.push("ofs="+Z);let ce=!0;for(let Pe=0;Pe<h;Pe++){var R=b[Pe].g;const lt=b[Pe].map;if(R-=Z,R<0)Z=Math.max(0,b[Pe].g-100),ce=!1;else try{R="req"+R+"_"||"";try{var D=lt instanceof Map?lt:Object.entries(lt);for(const[_n,jt]of D){let zt=jt;c(jt)&&(zt=Hi(jt)),Ae.push(R+_n+"="+encodeURIComponent(zt))}}catch(_n){throw Ae.push(R+"type="+encodeURIComponent("_badmap")),_n}}catch{p&&p(lt)}}if(ce){D=Ae.join("&");break e}}D=void 0}return o=o.i.splice(0,h),l.G=o,D}function Yc(o){if(!o.g&&!o.v){o.Y=1;var l=o.Da;le||g(),se||(le(),se=!0),T.add(l,o),o.A=0}}function io(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=vr(d(o.Da,o),el(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,Jc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=vr(d(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,$e(10),bs(this),Jc(this))};function oo(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Jc(o){o.g=new Ft(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var l=ct(o.na);he(l,"RID","rpc"),he(l,"SID",o.M),he(l,"AID",o.K),he(l,"CI",o.F?"0":"1"),!o.F&&o.ia&&he(l,"TO",o.ia),he(l,"TYPE","xmlhttp"),xr(o,l),o.u&&o.o&&ro(l,o.u,o.o),o.O&&(o.g.H=o.O);var h=o.g;o=o.ba,h.M=1,h.A=Es(ct(l)),h.u=null,h.R=!0,Rc(h,o)}n.Va=function(){this.C!=null&&(this.C=null,bs(this),io(this),$e(19))};function Rs(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Zc(o,l){var h=null;if(o.g==l){Rs(o),oo(o),o.g=null;var p=2}else if(Zi(o.h,l))h=l.G,Nc(o.h,l),p=1;else return;if(o.I!=0){if(l.o)if(p==1){h=l.u?l.u.length:0,l=Date.now()-l.F;var b=o.D;p=ys(),Be(p,new Ec(p,h)),As(o)}else Yc(o);else if(b=l.m,b==3||b==0&&l.X>0||!(p==1&&wp(o,l)||p==2&&io(o)))switch(h&&h.length>0&&(l=o.h,l.i=l.i.concat(h)),b){case 1:gn(o,5);break;case 4:gn(o,10);break;case 3:gn(o,6);break;default:gn(o,2)}}}function el(o,l){let h=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(h*=2),h*l}function gn(o,l){if(o.j.info("Error code "+l),l==2){var h=d(o.bb,o),p=o.Ua;const b=!p;p=new Bt(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ir(p,"https"),Es(p),b?pp(p.toString(),h):mp(p.toString(),h)}else $e(2);o.I=0,o.l&&o.l.pa(l),tl(o),Kc(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),$e(2)):(this.j.info("Failed to ping google.com"),$e(1))};function tl(o){if(o.I=0,o.ja=[],o.l){const l=Dc(o.h);(l.length!=0||o.i.length!=0)&&(k(o.ja,l),k(o.ja,o.i),o.h.i.length=0,A(o.i),o.i.length=0),o.l.oa()}}function nl(o,l,h){var p=h instanceof Bt?ct(h):new Bt(h);if(p.g!="")l&&(p.g=l+"."+p.g),br(p,p.u);else{var b=a.location;p=b.protocol,l=l?l+"."+b.hostname:b.hostname,b=+b.port;const R=new Bt(null);p&&Ir(R,p),l&&(R.g=l),b&&br(R,b),h&&(R.h=h),p=R}return h=o.G,l=o.wa,h&&l&&he(p,h,l),he(p,"VER",o.ka),xr(o,p),p}function rl(o,l,h){if(l&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Aa&&!o.ma?new ge(new no({ab:h})):new ge(o.ma),l.Fa(o.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function sl(){}n=sl.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Ss(){}Ss.prototype.g=function(o,l){return new Qe(o,l)};function Qe(o,l){Ve.call(this),this.g=new Gc(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(o?o["X-WebChannel-Client-Profile"]=l.sa:o={"X-WebChannel-Client-Profile":l.sa}),this.g.U=o,(o=l&&l.Qb)&&!y(o)&&(this.g.u=o),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!y(l)&&(this.g.G=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new $n(this)}m(Qe,Ve),Qe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Qe.prototype.close=function(){so(this.g)},Qe.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.v&&(h={},h.__data__=Hi(o),o=h);l.i.push(new op(l.Ya++,o)),l.I==3&&As(l)},Qe.prototype.N=function(){this.g.l=null,delete this.j,so(this.g),delete this.g,Qe.Z.N.call(this)};function il(o){Wi.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const h in l){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}m(il,Wi);function ol(){Gi.call(this),this.status=1}m(ol,Gi);function $n(o){this.g=o}m($n,sl),$n.prototype.ra=function(){Be(this.g,"a")},$n.prototype.qa=function(o){Be(this.g,new il(o))},$n.prototype.pa=function(o){Be(this.g,new ol)},$n.prototype.oa=function(){Be(this.g,"b")},Ss.prototype.createWebChannel=Ss.prototype.g,Qe.prototype.send=Qe.prototype.o,Qe.prototype.open=Qe.prototype.m,Qe.prototype.close=Qe.prototype.close,yh=function(){return new Ss},_h=function(){return ys()},gh=fn,Oo={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},vs.NO_ERROR=0,vs.TIMEOUT=8,vs.HTTP_ERROR=6,js=vs,Tc.COMPLETE="complete",mh=Tc,_c.EventType=_r,_r.OPEN="a",_r.CLOSE="b",_r.ERROR="c",_r.MESSAGE="d",Ve.prototype.listen=Ve.prototype.J,Dr=_c,ge.prototype.listenOnce=ge.prototype.K,ge.prototype.getLastError=ge.prototype.Ha,ge.prototype.getLastErrorCode=ge.prototype.ya,ge.prototype.getStatus=ge.prototype.ca,ge.prototype.getResponseJson=ge.prototype.La,ge.prototype.getResponseText=ge.prototype.la,ge.prototype.send=ge.prototype.ea,ge.prototype.setWithCredentials=ge.prototype.Fa,ph=ge}).apply(typeof Ns<"u"?Ns:typeof self<"u"?self:typeof window<"u"?window:{});const El="@firebase/firestore",Tl="4.9.3";/**
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
 */class Le{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Le.UNAUTHENTICATED=new Le(null),Le.GOOGLE_CREDENTIALS=new Le("google-credentials-uid"),Le.FIRST_PARTY=new Le("first-party-uid"),Le.MOCK_USER=new Le("mock-user");/**
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
 */let lr="12.7.0";/**
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
 */const Cn=new la("@firebase/firestore");function qn(){return Cn.logLevel}function M(n,...e){if(Cn.logLevel<=ee.DEBUG){const t=e.map(da);Cn.debug(`Firestore (${lr}): ${n}`,...t)}}function Ot(n,...e){if(Cn.logLevel<=ee.ERROR){const t=e.map(da);Cn.error(`Firestore (${lr}): ${n}`,...t)}}function tr(n,...e){if(Cn.logLevel<=ee.WARN){const t=e.map(da);Cn.warn(`Firestore (${lr}): ${n}`,...t)}}function da(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function W(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,vh(n,r,t)}function vh(n,e,t){let r=`FIRESTORE (${lr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Ot(r),new Error(r)}function ie(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||vh(e,s,r)}function X(n,e){return n}/**
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
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends Rt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class In{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class wh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Le.UNAUTHENTICATED))}shutdown(){}}class _g{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class yg{constructor(e){this.t=e,this.currentUser=Le.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ie(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new In;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new In,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},c=u=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new In)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ie(typeof r.accessToken=="string",31837,{l:r}),new wh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ie(e===null||typeof e=="string",2055,{h:e}),new Le(e)}}class vg{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Le.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class wg{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new vg(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Le.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Il{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Eg{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Je(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ie(this.o===void 0,3512);const r=i=>{i.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,M("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Il(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ie(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Il(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Tg(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class fa{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Tg(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function te(n,e){return n<e?-1:n>e?1:0}function Lo(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return vo(s)===vo(i)?te(s,i):vo(s)?1:-1}return te(n.length,e.length)}const Ig=55296,bg=57343;function vo(n){const e=n.charCodeAt(0);return e>=Ig&&e<=bg}function nr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const bl="__name__";class ut{constructor(e,t,r){t===void 0?t=0:t>e.length&&W(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&W(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ut.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ut?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=ut.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return te(e.length,t.length)}static compareSegments(e,t){const r=ut.isNumericId(e),s=ut.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?ut.extractNumericId(e).compare(ut.extractNumericId(t)):Lo(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Zt.fromString(e.substring(4,e.length-2))}}class ue extends ut{construct(e,t,r){return new ue(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new ue(t)}static emptyPath(){return new ue([])}}const Ag=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ne extends ut{construct(e,t,r){return new Ne(e,t,r)}static isValidIdentifier(e){return Ag.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ne.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===bl}static keyField(){return new Ne([bl])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new O(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new O(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new O(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new O(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ne(t)}static emptyPath(){return new Ne([])}}/**
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
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(ue.fromString(e))}static fromName(e){return new q(ue.fromString(e).popFirst(5))}static empty(){return new q(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ue.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new ue(e.slice()))}}/**
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
 */function Eh(n,e,t){if(!t)throw new O(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Rg(n,e,t,r){if(e===!0&&r===!0)throw new O(S.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Al(n){if(!q.isDocumentKey(n))throw new O(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Rl(n){if(q.isDocumentKey(n))throw new O(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Th(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function wi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":W(12329,{type:typeof n})}function pt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new O(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=wi(n);throw new O(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function be(n,e){const t={typeString:n};return e&&(t.value=e),t}function os(n,e){if(!Th(n))throw new O(S.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new O(S.INVALID_ARGUMENT,t);return!0}/**
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
 */const Sl=-62135596800,Pl=1e6;class de{static now(){return de.fromMillis(Date.now())}static fromDate(e){return de.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Pl);return new de(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Sl)throw new O(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Pl}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:de._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(os(e,de._jsonSchema))return new de(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Sl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}de._jsonSchemaVersion="firestore/timestamp/1.0",de._jsonSchema={type:be("string",de._jsonSchemaVersion),seconds:be("number"),nanoseconds:be("number")};/**
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
 */class K{static fromTimestamp(e){return new K(e)}static min(){return new K(new de(0,0))}static max(){return new K(new de(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Gr=-1;function Sg(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=K.fromTimestamp(r===1e9?new de(t+1,0):new de(t,r));return new nn(s,q.empty(),e)}function Pg(n){return new nn(n.readTime,n.key,Gr)}class nn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new nn(K.min(),q.empty(),Gr)}static max(){return new nn(K.max(),q.empty(),Gr)}}function Cg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=q.comparator(n.documentKey,e.documentKey),t!==0?t:te(n.largestBatchId,e.largestBatchId))}/**
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
 */const kg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ur(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==kg)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&W(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):P.reject(t)}static resolve(e){return new P((t,r)=>{t(e)})}static reject(e){return new P((t,r)=>{r(e)})}static waitFor(e){return new P((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=P.resolve(!1);for(const r of e)t=t.next(s=>s?P.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new P((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const d=u;t(e[d]).next(f=>{a[d]=f,++c,c===i&&r(a)},f=>s(f))}})}static doWhile(e,t){return new P((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function Ng(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function hr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Ei{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ei.ce=-1;/**
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
 */const pa=-1;function Ti(n){return n==null}function ti(n){return n===0&&1/n==-1/0}function Dg(n){return typeof n=="number"&&Number.isInteger(n)&&!ti(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Ih="";function Vg(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Cl(e)),e=Og(n.get(t),e);return Cl(e)}function Og(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Ih:t+="";break;default:t+=i}}return t}function Cl(n){return n+Ih+""}/**
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
 */function kl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function un(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function bh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class pe{constructor(e,t){this.comparator=e,this.root=t||xe.EMPTY}insert(e,t){return new pe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,xe.BLACK,null,null))}remove(e){return new pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ds(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ds(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ds(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ds(this.root,e,this.comparator,!0)}}class Ds{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xe{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??xe.RED,this.left=s??xe.EMPTY,this.right=i??xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new xe(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return xe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw W(43730,{key:this.key,value:this.value});if(this.right.isRed())throw W(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw W(27949);return e+(this.isRed()?0:1)}}xe.EMPTY=null,xe.RED=!0,xe.BLACK=!1;xe.EMPTY=new class{constructor(){this.size=0}get key(){throw W(57766)}get value(){throw W(16141)}get color(){throw W(16727)}get left(){throw W(29726)}get right(){throw W(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new xe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Se{constructor(e){this.comparator=e,this.data=new pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new xl(this.data.getIterator())}getIteratorFrom(e){return new xl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Se)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Se(this.comparator);return t.data=e,t}}class xl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Xe{constructor(e){this.fields=e,e.sort(Ne.comparator)}static empty(){return new Xe([])}unionWith(e){let t=new Se(Ne.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Xe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return nr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Ah extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class De{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Ah("Invalid base64 string: "+i):i}}(e);return new De(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new De(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}De.EMPTY_BYTE_STRING=new De("");const Lg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rn(n){if(ie(!!n,39018),typeof n=="string"){let e=0;const t=Lg.exec(n);if(ie(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ve(n.seconds),nanos:ve(n.nanos)}}function ve(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function sn(n){return typeof n=="string"?De.fromBase64String(n):De.fromUint8Array(n)}/**
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
 */const Rh="server_timestamp",Sh="__type__",Ph="__previous_value__",Ch="__local_write_time__";function ma(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Sh])==null?void 0:r.stringValue)===Rh}function Ii(n){const e=n.mapValue.fields[Ph];return ma(e)?Ii(e):e}function Kr(n){const e=rn(n.mapValue.fields[Ch].timestampValue);return new de(e.seconds,e.nanos)}/**
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
 */class Mg{constructor(e,t,r,s,i,a,c,u,d,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=f}}const ni="(default)";class Qr{constructor(e,t){this.projectId=e,this.database=t||ni}static empty(){return new Qr("","")}get isDefaultDatabase(){return this.database===ni}isEqual(e){return e instanceof Qr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const kh="__type__",Ug="__max__",Vs={mapValue:{}},xh="__vector__",ri="value";function on(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ma(n)?4:Bg(n)?9007199254740991:Fg(n)?10:11:W(28295,{value:n})}function Tt(n,e){if(n===e)return!0;const t=on(n);if(t!==on(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Kr(n).isEqual(Kr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=rn(s.timestampValue),c=rn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return sn(s.bytesValue).isEqual(sn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return ve(s.geoPointValue.latitude)===ve(i.geoPointValue.latitude)&&ve(s.geoPointValue.longitude)===ve(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ve(s.integerValue)===ve(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ve(s.doubleValue),c=ve(i.doubleValue);return a===c?ti(a)===ti(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return nr(n.arrayValue.values||[],e.arrayValue.values||[],Tt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(kl(a)!==kl(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!Tt(a[u],c[u])))return!1;return!0}(n,e);default:return W(52216,{left:n})}}function Xr(n,e){return(n.values||[]).find(t=>Tt(t,e))!==void 0}function rr(n,e){if(n===e)return 0;const t=on(n),r=on(e);if(t!==r)return te(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return te(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=ve(i.integerValue||i.doubleValue),u=ve(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return Nl(n.timestampValue,e.timestampValue);case 4:return Nl(Kr(n),Kr(e));case 5:return Lo(n.stringValue,e.stringValue);case 6:return function(i,a){const c=sn(i),u=sn(a);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),u=a.split("/");for(let d=0;d<c.length&&d<u.length;d++){const f=te(c[d],u[d]);if(f!==0)return f}return te(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=te(ve(i.latitude),ve(a.latitude));return c!==0?c:te(ve(i.longitude),ve(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Dl(n.arrayValue,e.arrayValue);case 10:return function(i,a){var E,A,k,x;const c=i.fields||{},u=a.fields||{},d=(E=c[ri])==null?void 0:E.arrayValue,f=(A=u[ri])==null?void 0:A.arrayValue,m=te(((k=d==null?void 0:d.values)==null?void 0:k.length)||0,((x=f==null?void 0:f.values)==null?void 0:x.length)||0);return m!==0?m:Dl(d,f)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===Vs.mapValue&&a===Vs.mapValue)return 0;if(i===Vs.mapValue)return 1;if(a===Vs.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),d=a.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const E=Lo(u[m],f[m]);if(E!==0)return E;const A=rr(c[u[m]],d[f[m]]);if(A!==0)return A}return te(u.length,f.length)}(n.mapValue,e.mapValue);default:throw W(23264,{he:t})}}function Nl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return te(n,e);const t=rn(n),r=rn(e),s=te(t.seconds,r.seconds);return s!==0?s:te(t.nanos,r.nanos)}function Dl(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=rr(t[s],r[s]);if(i)return i}return te(t.length,r.length)}function sr(n){return Mo(n)}function Mo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=rn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return sn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return q.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Mo(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Mo(t.fields[a])}`;return s+"}"}(n.mapValue):W(61005,{value:n})}function zs(n){switch(on(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ii(n);return e?16+zs(e):16;case 5:return 2*n.stringValue.length;case 6:return sn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+zs(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return un(r.fields,(i,a)=>{s+=i.length+zs(a)}),s}(n.mapValue);default:throw W(13486,{value:n})}}function Vl(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Uo(n){return!!n&&"integerValue"in n}function ga(n){return!!n&&"arrayValue"in n}function Ol(n){return!!n&&"nullValue"in n}function Ll(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Hs(n){return!!n&&"mapValue"in n}function Fg(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[kh])==null?void 0:r.stringValue)===xh}function Ur(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return un(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ur(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ur(n.arrayValue.values[t]);return e}return{...n}}function Bg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Ug}/**
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
 */class He{constructor(e){this.value=e}static empty(){return new He({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Hs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ur(t)}setAll(e){let t=Ne.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=Ur(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Hs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Tt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Hs(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){un(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new He(Ur(this.value))}}function Nh(n){const e=[];return un(n.fields,(t,r)=>{const s=new Ne([t]);if(Hs(r)){const i=Nh(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Xe(e)}/**
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
 */class Me{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Me(e,0,K.min(),K.min(),K.min(),He.empty(),0)}static newFoundDocument(e,t,r,s){return new Me(e,1,t,K.min(),r,s,0)}static newNoDocument(e,t){return new Me(e,2,t,K.min(),K.min(),He.empty(),0)}static newUnknownDocument(e,t){return new Me(e,3,t,K.min(),K.min(),He.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=He.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=He.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Me&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Me(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class si{constructor(e,t){this.position=e,this.inclusive=t}}function Ml(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=q.comparator(q.fromName(a.referenceValue),t.key):r=rr(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ul(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Tt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Yr{constructor(e,t="asc"){this.field=e,this.dir=t}}function $g(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Dh{}class Ie extends Dh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new jg(e,t,r):t==="array-contains"?new Wg(e,r):t==="in"?new Gg(e,r):t==="not-in"?new Kg(e,r):t==="array-contains-any"?new Qg(e,r):new Ie(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new zg(e,r):new Hg(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(rr(t,this.value)):t!==null&&on(this.value)===on(t)&&this.matchesComparison(rr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ot extends Dh{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new ot(e,t)}matches(e){return Vh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Vh(n){return n.op==="and"}function Oh(n){return qg(n)&&Vh(n)}function qg(n){for(const e of n.filters)if(e instanceof ot)return!1;return!0}function Fo(n){if(n instanceof Ie)return n.field.canonicalString()+n.op.toString()+sr(n.value);if(Oh(n))return n.filters.map(e=>Fo(e)).join(",");{const e=n.filters.map(t=>Fo(t)).join(",");return`${n.op}(${e})`}}function Lh(n,e){return n instanceof Ie?function(r,s){return s instanceof Ie&&r.op===s.op&&r.field.isEqual(s.field)&&Tt(r.value,s.value)}(n,e):n instanceof ot?function(r,s){return s instanceof ot&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&Lh(a,s.filters[c]),!0):!1}(n,e):void W(19439)}function Mh(n){return n instanceof Ie?function(t){return`${t.field.canonicalString()} ${t.op} ${sr(t.value)}`}(n):n instanceof ot?function(t){return t.op.toString()+" {"+t.getFilters().map(Mh).join(" ,")+"}"}(n):"Filter"}class jg extends Ie{constructor(e,t,r){super(e,t,r),this.key=q.fromName(r.referenceValue)}matches(e){const t=q.comparator(e.key,this.key);return this.matchesComparison(t)}}class zg extends Ie{constructor(e,t){super(e,"in",t),this.keys=Uh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Hg extends Ie{constructor(e,t){super(e,"not-in",t),this.keys=Uh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Uh(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>q.fromName(r.referenceValue))}class Wg extends Ie{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ga(t)&&Xr(t.arrayValue,this.value)}}class Gg extends Ie{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Xr(this.value.arrayValue,t)}}class Kg extends Ie{constructor(e,t){super(e,"not-in",t)}matches(e){if(Xr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Xr(this.value.arrayValue,t)}}class Qg extends Ie{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ga(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Xr(this.value.arrayValue,r))}}/**
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
 */class Xg{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function Fl(n,e=null,t=[],r=[],s=null,i=null,a=null){return new Xg(n,e,t,r,s,i,a)}function _a(n){const e=X(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Fo(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ti(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>sr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>sr(r)).join(",")),e.Te=t}return e.Te}function ya(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!$g(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Lh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ul(n.startAt,e.startAt)&&Ul(n.endAt,e.endAt)}function Bo(n){return q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class dr{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Yg(n,e,t,r,s,i,a,c){return new dr(n,e,t,r,s,i,a,c)}function va(n){return new dr(n)}function Bl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Fh(n){return n.collectionGroup!==null}function Fr(n){const e=X(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Se(Ne.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Yr(i,r))}),t.has(Ne.keyField().canonicalString())||e.Ie.push(new Yr(Ne.keyField(),r))}return e.Ie}function mt(n){const e=X(n);return e.Ee||(e.Ee=Jg(e,Fr(n))),e.Ee}function Jg(n,e){if(n.limitType==="F")return Fl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Yr(s.field,i)});const t=n.endAt?new si(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new si(n.startAt.position,n.startAt.inclusive):null;return Fl(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function $o(n,e){const t=n.filters.concat([e]);return new dr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function qo(n,e,t){return new dr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function bi(n,e){return ya(mt(n),mt(e))&&n.limitType===e.limitType}function Bh(n){return`${_a(mt(n))}|lt:${n.limitType}`}function jn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Mh(s)).join(", ")}]`),Ti(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>sr(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>sr(s)).join(",")),`Target(${r})`}(mt(n))}; limitType=${n.limitType})`}function Ai(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Fr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,u){const d=Ml(a,c,u);return a.inclusive?d<=0:d<0}(r.startAt,Fr(r),s)||r.endAt&&!function(a,c,u){const d=Ml(a,c,u);return a.inclusive?d>=0:d>0}(r.endAt,Fr(r),s))}(n,e)}function Zg(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function $h(n){return(e,t)=>{let r=!1;for(const s of Fr(n)){const i=e_(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function e_(n,e,t){const r=n.field.isKeyField()?q.comparator(e.key,t.key):function(i,a,c){const u=a.data.field(i),d=c.data.field(i);return u!==null&&d!==null?rr(u,d):W(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return W(19790,{direction:n.dir})}}/**
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
 */class On{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){un(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return bh(this.inner)}size(){return this.innerSize}}/**
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
 */const t_=new pe(q.comparator);function Lt(){return t_}const qh=new pe(q.comparator);function Vr(...n){let e=qh;for(const t of n)e=e.insert(t.key,t);return e}function jh(n){let e=qh;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function vn(){return Br()}function zh(){return Br()}function Br(){return new On(n=>n.toString(),(n,e)=>n.isEqual(e))}const n_=new pe(q.comparator),r_=new Se(q.comparator);function ne(...n){let e=r_;for(const t of n)e=e.add(t);return e}const s_=new Se(te);function i_(){return s_}/**
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
 */function wa(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ti(e)?"-0":e}}function Hh(n){return{integerValue:""+n}}function o_(n,e){return Dg(e)?Hh(e):wa(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Ri{constructor(){this._=void 0}}function a_(n,e,t){return n instanceof ii?function(s,i){const a={fields:{[Sh]:{stringValue:Rh},[Ch]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ma(i)&&(i=Ii(i)),i&&(a.fields[Ph]=i),{mapValue:a}}(t,e):n instanceof Jr?Gh(n,e):n instanceof Zr?Kh(n,e):function(s,i){const a=Wh(s,i),c=$l(a)+$l(s.Ae);return Uo(a)&&Uo(s.Ae)?Hh(c):wa(s.serializer,c)}(n,e)}function c_(n,e,t){return n instanceof Jr?Gh(n,e):n instanceof Zr?Kh(n,e):t}function Wh(n,e){return n instanceof oi?function(r){return Uo(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ii extends Ri{}class Jr extends Ri{constructor(e){super(),this.elements=e}}function Gh(n,e){const t=Qh(e);for(const r of n.elements)t.some(s=>Tt(s,r))||t.push(r);return{arrayValue:{values:t}}}class Zr extends Ri{constructor(e){super(),this.elements=e}}function Kh(n,e){let t=Qh(e);for(const r of n.elements)t=t.filter(s=>!Tt(s,r));return{arrayValue:{values:t}}}class oi extends Ri{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function $l(n){return ve(n.integerValue||n.doubleValue)}function Qh(n){return ga(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function l_(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Jr&&s instanceof Jr||r instanceof Zr&&s instanceof Zr?nr(r.elements,s.elements,Tt):r instanceof oi&&s instanceof oi?Tt(r.Ae,s.Ae):r instanceof ii&&s instanceof ii}(n.transform,e.transform)}class u_{constructor(e,t){this.version=e,this.transformResults=t}}class We{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new We}static exists(e){return new We(void 0,e)}static updateTime(e){return new We(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ws(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Si{}function Xh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Pi(n.key,We.none()):new as(n.key,n.data,We.none());{const t=n.data,r=He.empty();let s=new Se(Ne.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new hn(n.key,r,new Xe(s.toArray()),We.none())}}function h_(n,e,t){n instanceof as?function(s,i,a){const c=s.value.clone(),u=jl(s.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof hn?function(s,i,a){if(!Ws(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=jl(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(Yh(s)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function $r(n,e,t,r){return n instanceof as?function(i,a,c,u){if(!Ws(i.precondition,a))return c;const d=i.value.clone(),f=zl(i.fieldTransforms,u,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof hn?function(i,a,c,u){if(!Ws(i.precondition,a))return c;const d=zl(i.fieldTransforms,u,a),f=a.data;return f.setAll(Yh(i)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(i,a,c){return Ws(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function d_(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Wh(r.transform,s||null);i!=null&&(t===null&&(t=He.empty()),t.set(r.field,i))}return t||null}function ql(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&nr(r,s,(i,a)=>l_(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class as extends Si{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class hn extends Si{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Yh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function jl(n,e,t){const r=new Map;ie(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,c_(a,c,t[s]))}return r}function zl(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,a_(i,a,e))}return r}class Pi extends Si{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class f_ extends Si{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class p_{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&h_(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=$r(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=$r(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=zh();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const u=Xh(a,c);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(K.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ne())}isEqual(e){return this.batchId===e.batchId&&nr(this.mutations,e.mutations,(t,r)=>ql(t,r))&&nr(this.baseMutations,e.baseMutations,(t,r)=>ql(t,r))}}class Ea{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){ie(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return n_}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Ea(e,t,r,s)}}/**
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
 */class m_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class g_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Te,re;function __(n){switch(n){case S.OK:return W(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return W(15467,{code:n})}}function Jh(n){if(n===void 0)return Ot("GRPC error has no .code"),S.UNKNOWN;switch(n){case Te.OK:return S.OK;case Te.CANCELLED:return S.CANCELLED;case Te.UNKNOWN:return S.UNKNOWN;case Te.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case Te.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case Te.INTERNAL:return S.INTERNAL;case Te.UNAVAILABLE:return S.UNAVAILABLE;case Te.UNAUTHENTICATED:return S.UNAUTHENTICATED;case Te.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case Te.NOT_FOUND:return S.NOT_FOUND;case Te.ALREADY_EXISTS:return S.ALREADY_EXISTS;case Te.PERMISSION_DENIED:return S.PERMISSION_DENIED;case Te.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case Te.ABORTED:return S.ABORTED;case Te.OUT_OF_RANGE:return S.OUT_OF_RANGE;case Te.UNIMPLEMENTED:return S.UNIMPLEMENTED;case Te.DATA_LOSS:return S.DATA_LOSS;default:return W(39323,{code:n})}}(re=Te||(Te={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function y_(){return new TextEncoder}/**
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
 */const v_=new Zt([4294967295,4294967295],0);function Hl(n){const e=y_().encode(n),t=new fh;return t.update(e),new Uint8Array(t.digest())}function Wl(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Zt([t,r],0),new Zt([s,i],0)]}class Ta{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Or(`Invalid padding: ${t}`);if(r<0)throw new Or(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Or(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Or(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Zt.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(Zt.fromNumber(r)));return s.compare(v_)===1&&(s=new Zt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Hl(e),[r,s]=Wl(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Ta(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.ge===0)return;const t=Hl(e),[r,s]=Wl(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Or extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ci{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,cs.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ci(K.min(),s,new pe(te),Lt(),ne())}}class cs{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new cs(r,t,ne(),ne(),ne())}}/**
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
 */class Gs{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class Zh{constructor(e,t){this.targetId=e,this.Ce=t}}class ed{constructor(e,t,r=De.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Gl{constructor(){this.ve=0,this.Fe=Kl(),this.Me=De.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ne(),t=ne(),r=ne();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:W(38017,{changeType:i})}}),new cs(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=Kl()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ie(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class w_{constructor(e){this.Ge=e,this.ze=new Map,this.je=Lt(),this.Je=Os(),this.He=Os(),this.Ye=new pe(te)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:W(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(Bo(i))if(r===0){const a=new q(i.path);this.et(t,a,Me.newNoDocument(a,K.min()))}else ie(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const c=this.ut(e),u=c?this.ct(c,e,a):1;if(u!==0){this.it(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=sn(r).toUint8Array()}catch(u){if(u instanceof Ah)return tr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Ta(a,s,i)}catch(u){return tr(u instanceof Or?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((i,a)=>{const c=this.ot(a);if(c){if(i.current&&Bo(c.target)){const u=new q(c.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,Me.newNoDocument(u,e))}i.Be&&(t.set(a,i.ke()),i.qe())}});let r=ne();this.He.forEach((i,a)=>{let c=!0;a.forEachWhile(u=>{const d=this.ot(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,a)=>a.setReadTime(e));const s=new Ci(e,t,this.Ye,this.je,r);return this.je=Lt(),this.Je=Os(),this.He=Os(),this.Ye=new pe(te),s}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Gl,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Se(te),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Se(te),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||M("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Gl),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Os(){return new pe(q.comparator)}function Kl(){return new pe(q.comparator)}const E_={asc:"ASCENDING",desc:"DESCENDING"},T_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},I_={and:"AND",or:"OR"};class b_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function jo(n,e){return n.useProto3Json||Ti(e)?e:{value:e}}function ai(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function td(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function A_(n,e){return ai(n,e.toTimestamp())}function gt(n){return ie(!!n,49232),K.fromTimestamp(function(t){const r=rn(t);return new de(r.seconds,r.nanos)}(n))}function Ia(n,e){return zo(n,e).canonicalString()}function zo(n,e){const t=function(s){return new ue(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function nd(n){const e=ue.fromString(n);return ie(ad(e),10190,{key:e.toString()}),e}function Ho(n,e){return Ia(n.databaseId,e.path)}function wo(n,e){const t=nd(e);if(t.get(1)!==n.databaseId.projectId)throw new O(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new O(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new q(sd(t))}function rd(n,e){return Ia(n.databaseId,e)}function R_(n){const e=nd(n);return e.length===4?ue.emptyPath():sd(e)}function Wo(n){return new ue(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function sd(n){return ie(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Ql(n,e,t){return{name:Ho(n,e),fields:t.value.mapValue.fields}}function S_(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:W(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,f){return d.useProto3Json?(ie(f===void 0||typeof f=="string",58123),De.fromBase64String(f||"")):(ie(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),De.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(d){const f=d.code===void 0?S.UNKNOWN:Jh(d.code);return new O(f,d.message||"")}(a);t=new ed(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=wo(n,r.document.name),i=gt(r.document.updateTime),a=r.document.createTime?gt(r.document.createTime):K.min(),c=new He({mapValue:{fields:r.document.fields}}),u=Me.newFoundDocument(s,i,a,c),d=r.targetIds||[],f=r.removedTargetIds||[];t=new Gs(d,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=wo(n,r.document),i=r.readTime?gt(r.readTime):K.min(),a=Me.newNoDocument(s,i),c=r.removedTargetIds||[];t=new Gs([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=wo(n,r.document),i=r.removedTargetIds||[];t=new Gs([],i,s,null)}else{if(!("filter"in e))return W(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new g_(s,i),c=r.targetId;t=new Zh(c,a)}}return t}function P_(n,e){let t;if(e instanceof as)t={update:Ql(n,e.key,e.value)};else if(e instanceof Pi)t={delete:Ho(n,e.key)};else if(e instanceof hn)t={update:Ql(n,e.key,e.data),updateMask:M_(e.fieldMask)};else{if(!(e instanceof f_))return W(16599,{Vt:e.type});t={verify:Ho(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof ii)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Jr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Zr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof oi)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw W(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:A_(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:W(27497)}(n,e.precondition)),t}function C_(n,e){return n&&n.length>0?(ie(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?gt(s.updateTime):gt(i);return a.isEqual(K.min())&&(a=gt(i)),new u_(a,s.transformResults||[])}(t,e))):[]}function k_(n,e){return{documents:[rd(n,e.path)]}}function x_(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=rd(n,s);const i=function(d){if(d.length!==0)return od(ot.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(f=>function(E){return{field:zn(E.field),direction:V_(E.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=jo(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ft:t,parent:s}}function N_(n){let e=R_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){ie(r===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(m){const E=id(m);return E instanceof ot&&Oh(E)?E.getFilters():[E]}(t.where));let a=[];t.orderBy&&(a=function(m){return m.map(E=>function(k){return new Yr(Hn(k.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(E))}(t.orderBy));let c=null;t.limit&&(c=function(m){let E;return E=typeof m=="object"?m.value:m,Ti(E)?null:E}(t.limit));let u=null;t.startAt&&(u=function(m){const E=!!m.before,A=m.values||[];return new si(A,E)}(t.startAt));let d=null;return t.endAt&&(d=function(m){const E=!m.before,A=m.values||[];return new si(A,E)}(t.endAt)),Yg(e,s,a,i,c,"F",u,d)}function D_(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function id(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Hn(t.unaryFilter.field);return Ie.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Hn(t.unaryFilter.field);return Ie.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Hn(t.unaryFilter.field);return Ie.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Hn(t.unaryFilter.field);return Ie.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return W(61313);default:return W(60726)}}(n):n.fieldFilter!==void 0?function(t){return Ie.create(Hn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return W(58110);default:return W(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ot.create(t.compositeFilter.filters.map(r=>id(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return W(1026)}}(t.compositeFilter.op))}(n):W(30097,{filter:n})}function V_(n){return E_[n]}function O_(n){return T_[n]}function L_(n){return I_[n]}function zn(n){return{fieldPath:n.canonicalString()}}function Hn(n){return Ne.fromServerFormat(n.fieldPath)}function od(n){return n instanceof Ie?function(t){if(t.op==="=="){if(Ll(t.value))return{unaryFilter:{field:zn(t.field),op:"IS_NAN"}};if(Ol(t.value))return{unaryFilter:{field:zn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ll(t.value))return{unaryFilter:{field:zn(t.field),op:"IS_NOT_NAN"}};if(Ol(t.value))return{unaryFilter:{field:zn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zn(t.field),op:O_(t.op),value:t.value}}}(n):n instanceof ot?function(t){const r=t.getFilters().map(s=>od(s));return r.length===1?r[0]:{compositeFilter:{op:L_(t.op),filters:r}}}(n):W(54877,{filter:n})}function M_(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function ad(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Xt{constructor(e,t,r,s,i=K.min(),a=K.min(),c=De.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new Xt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Xt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class U_{constructor(e){this.yt=e}}function F_(n){const e=N_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?qo(e,e.limit,"L"):e}/**
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
 */class B_{constructor(){this.Cn=new $_}addToCollectionParentIndex(e,t){return this.Cn.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(nn.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(nn.min())}updateCollectionGroup(e,t,r){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class $_{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Se(ue.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Se(ue.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Xl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},cd=41943040;class ze{static withCacheSize(e){return new ze(e,ze.DEFAULT_COLLECTION_PERCENTILE,ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */ze.DEFAULT_COLLECTION_PERCENTILE=10,ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ze.DEFAULT=new ze(cd,ze.DEFAULT_COLLECTION_PERCENTILE,ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ze.DISABLED=new ze(-1,0,0);/**
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
 */class ir{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new ir(0)}static cr(){return new ir(-1)}}/**
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
 */const Yl="LruGarbageCollector",q_=1048576;function Jl([n,e],[t,r]){const s=te(n,t);return s===0?te(e,r):s}class j_{constructor(e){this.Ir=e,this.buffer=new Se(Jl),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Jl(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class z_{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){M(Yl,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){hr(t)?M(Yl,"Ignoring IndexedDB error during garbage collection: ",t):await ur(t)}await this.Vr(3e5)})}}class H_{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return P.resolve(Ei.ce);const r=new j_(t);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(M("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(Xl)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(M("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Xl):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,s,i,a,c,u,d;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(M("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,a=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,c=Date.now(),this.removeTargets(e,r,t))).next(m=>(i=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(d=Date.now(),qn()<=ee.DEBUG&&M("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${m} documents in `+(d-u)+`ms
Total Duration: ${d-f}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function W_(n,e){return new H_(n,e)}/**
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
 */class G_{constructor(){this.changes=new On(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Me.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?P.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class K_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Q_{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&$r(r.mutation,s,Xe.empty(),de.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ne()){const s=vn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=Vr();return i.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=vn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ne()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=Lt();const a=Br(),c=function(){return Br()}();return t.forEach((u,d)=>{const f=r.get(d.key);s.has(d.key)&&(f===void 0||f.mutation instanceof hn)?i=i.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),$r(f.mutation,d,f.mutation.getFieldMask(),de.now())):a.set(d.key,Xe.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,f)=>a.set(d,f)),t.forEach((d,f)=>c.set(d,new K_(f,a.get(d)??null))),c))}recalculateAndSaveOverlays(e,t){const r=Br();let s=new pe((a,c)=>a-c),i=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let f=r.get(u)||Xe.empty();f=c.applyToLocalView(d,f),r.set(u,f);const m=(s.get(c.batchId)||ne()).add(u);s=s.insert(c.batchId,m)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,f=u.value,m=zh();f.forEach(E=>{if(!i.has(E)){const A=Xh(t.get(E),r.get(E));A!==null&&m.set(E,A),i=i.add(E)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,m))}return P.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return q.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Fh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):P.resolve(vn());let c=Gr,u=i;return a.next(d=>P.forEach(d,(f,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),i.get(f)?P.resolve():this.remoteDocumentCache.getEntry(e,f).next(E=>{u=u.insert(f,E)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,ne())).next(f=>({batchId:c,changes:jh(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new q(t)).next(r=>{let s=Vr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Vr();return this.indexManager.getCollectionParents(e,i).next(c=>P.forEach(c,u=>{const d=function(m,E){return new dr(E,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(f=>{f.forEach((m,E)=>{a=a.insert(m,E)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((u,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,Me.newInvalidDocument(f)))});let c=Vr();return a.forEach((u,d)=>{const f=i.get(u);f!==void 0&&$r(f.mutation,d,Xe.empty(),de.now()),Ai(t,d)&&(c=c.insert(u,d))}),c})}}/**
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
 */class X_{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return P.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:gt(s.createTime)}}(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(s){return{name:s.name,query:F_(s.bundledQuery),readTime:gt(s.readTime)}}(t)),P.resolve()}}/**
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
 */class Y_{constructor(){this.overlays=new pe(q.comparator),this.qr=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const r=vn();return P.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.St(e,t,i)}),P.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),P.resolve()}getOverlaysForCollection(e,t,r){const s=vn(),i=t.length+1,a=new q(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return P.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new pe((d,f)=>d-f);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let f=i.get(d.largestBatchId);f===null&&(f=vn(),i=i.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const c=vn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>c.set(d,f)),!(c.size()>=s)););return P.resolve(c)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new m_(t,r));let i=this.qr.get(t);i===void 0&&(i=ne(),this.qr.set(t,i)),this.qr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class J_{constructor(){this.sessionToken=De.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
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
 */class ba{constructor(){this.Qr=new Se(Ce.$r),this.Ur=new Se(Ce.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new Ce(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Gr(new Ce(e,t))}zr(e,t){e.forEach(r=>this.removeReference(r,t))}jr(e){const t=new q(new ue([])),r=new Ce(t,e),s=new Ce(t,e+1),i=[];return this.Ur.forEachInRange([r,s],a=>{this.Gr(a),i.push(a.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new q(new ue([])),r=new Ce(t,e),s=new Ce(t,e+1);let i=ne();return this.Ur.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Ce(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ce{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return q.comparator(e.key,t.key)||te(e.Yr,t.Yr)}static Kr(e,t){return te(e.Yr,t.Yr)||q.comparator(e.key,t.key)}}/**
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
 */class Z_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Se(Ce.$r)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new p_(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.Zr=this.Zr.add(new Ce(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return P.resolve(a)}lookupMutationBatch(e,t){return P.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ei(r),i=s<0?0:s;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?pa:this.tr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ce(t,0),s=new Ce(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],a=>{const c=this.Xr(a.Yr);i.push(c)}),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Se(te);return t.forEach(s=>{const i=new Ce(s,0),a=new Ce(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],c=>{r=r.add(c.Yr)})}),P.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;q.isDocumentKey(i)||(i=i.child(""));const a=new Ce(new q(i),0);let c=new Se(te);return this.Zr.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(u.Yr)),!0)},a),P.resolve(this.ti(c))}ti(e){const t=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){ie(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return P.forEach(t.mutations,s=>{const i=new Ce(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,t){const r=new Ce(t,0),s=this.Zr.firstAfterOrEqual(r);return P.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class ey{constructor(e){this.ri=e,this.docs=function(){return new pe(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return P.resolve(r?r.document.mutableCopy():Me.newInvalidDocument(t))}getEntries(e,t){let r=Lt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Me.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Lt();const a=t.path,c=new q(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Cg(Pg(f),r)<=0||(s.has(f.key)||Ai(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return P.resolve(i)}getAllFromCollectionGroup(e,t,r,s){W(9500)}ii(e,t){return P.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new ty(this)}getSize(e){return P.resolve(this.size)}}class ty extends G_{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),P.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class ny{constructor(e){this.persistence=e,this.si=new On(t=>_a(t),ya),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.oi=0,this._i=new ba,this.targetCount=0,this.ai=ir.ur()}forEachTarget(e,t){return this.si.forEach((r,s)=>t(s)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),P.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new ir(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.Pr(t),P.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.si.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),P.waitFor(i).next(()=>s)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return P.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),P.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),P.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return P.resolve(r)}containsKey(e,t){return P.resolve(this._i.containsKey(t))}}/**
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
 */class ld{constructor(e,t){this.ui={},this.overlays={},this.ci=new Ei(0),this.li=!1,this.li=!0,this.hi=new J_,this.referenceDelegate=e(this),this.Pi=new ny(this),this.indexManager=new B_,this.remoteDocumentCache=function(s){return new ey(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new U_(t),this.Ii=new X_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Y_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new Z_(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){M("MemoryPersistence","Starting transaction:",e);const s=new ry(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,t){return P.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,t)))}}class ry extends xg{constructor(e){super(),this.currentSequenceNumber=e}}class Aa{constructor(e){this.persistence=e,this.Ri=new ba,this.Vi=null}static mi(e){return new Aa(e)}get fi(){if(this.Vi)return this.Vi;throw W(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),P.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),P.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.fi,r=>{const s=q.fromPath(r);return this.gi(e,s).next(i=>{i||t.removeEntry(s,K.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return P.or([()=>P.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class ci{constructor(e,t){this.persistence=e,this.pi=new On(r=>Vg(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=W_(this,t)}static mi(e,t){return new ci(e,t)}Ei(){}di(e){return P.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}wr(e){let t=0;return this.pr(e,r=>{t++}).next(()=>t)}pr(e,t){return P.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?P.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,a=>this.br(e,a,t).next(c=>{c||(r++,i.removeEntry(a,K.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),P.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),P.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),P.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),P.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=zs(e.data.value)),t}br(e,t,r){return P.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return P.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Ra{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=s}static As(e,t){let r=ne(),s=ne();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ra(e,t.fromCache,r,s)}}/**
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
 */class sy{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class iy{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return Xp()?8:Ng(Ue())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ys(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ws(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new sy;return this.Ss(e,t,a).next(c=>{if(i.result=c,this.Vs)return this.bs(e,t,a,c.size)})}).next(()=>i.result)}bs(e,t,r,s){return r.documentReadCount<this.fs?(qn()<=ee.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",jn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),P.resolve()):(qn()<=ee.DEBUG&&M("QueryEngine","Query:",jn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(qn()<=ee.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",jn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,mt(t))):P.resolve())}ys(e,t){if(Bl(t))return P.resolve(null);let r=mt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=qo(t,null,"F"),r=mt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=ne(...i);return this.ps.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.Ds(t,c);return this.Cs(t,d,a,u.readTime)?this.ys(e,qo(t,null,"F")):this.vs(e,d,t,u)}))})))}ws(e,t,r,s){return Bl(t)||s.isEqual(K.min())?P.resolve(null):this.ps.getDocuments(e,r).next(i=>{const a=this.Ds(t,i);return this.Cs(t,a,r,s)?P.resolve(null):(qn()<=ee.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),jn(t)),this.vs(e,a,t,Sg(s,Gr)).next(c=>c))})}Ds(e,t){let r=new Se($h(e));return t.forEach((s,i)=>{Ai(e,i)&&(r=r.add(i))}),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,t,r){return qn()<=ee.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",jn(t)),this.ps.getDocumentsMatchingQuery(e,t,nn.min(),r)}vs(e,t,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const Sa="LocalStore",oy=3e8;class ay{constructor(e,t,r,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new pe(te),this.xs=new On(i=>_a(i),ya),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Q_(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function cy(n,e,t,r){return new ay(n,e,t,r)}async function ud(n,e){const t=X(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let u=ne();for(const d of s){a.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of i){c.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next(d=>({Ls:d,removedBatchIds:a,addedBatchIds:c}))})})}function ly(n,e){const t=X(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return function(c,u,d,f){const m=d.batch,E=m.keys();let A=P.resolve();return E.forEach(k=>{A=A.next(()=>f.getEntry(u,k)).next(x=>{const C=d.docVersions.get(k);ie(C!==null,48541),x.version.compareTo(C)<0&&(m.applyToRemoteDocument(x,d),x.isValidDocument()&&(x.setReadTime(d.commitVersion),f.addEntry(x)))})}),A.next(()=>c.mutationQueue.removeMutationBatch(u,m))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=ne();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(u=u.add(c.batch.mutations[d].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function hd(n){const e=X(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function uy(n,e){const t=X(n),r=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const c=[];e.targetChanges.forEach((f,m)=>{const E=s.get(m);if(!E)return;c.push(t.Pi.removeMatchingKeys(i,f.removedDocuments,m).next(()=>t.Pi.addMatchingKeys(i,f.addedDocuments,m)));let A=E.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?A=A.withResumeToken(De.EMPTY_BYTE_STRING,K.min()).withLastLimboFreeSnapshotVersion(K.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),s=s.insert(m,A),function(x,C,z){return x.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=oy?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0}(E,A,f)&&c.push(t.Pi.updateTargetData(i,A))});let u=Lt(),d=ne();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(hy(i,a,e.documentUpdates).next(f=>{u=f.ks,d=f.qs})),!r.isEqual(K.min())){const f=t.Pi.getLastRemoteSnapshotVersion(i).next(m=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return P.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(t.Ms=s,i))}function hy(n,e,t){let r=ne(),s=ne();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=Lt();return t.forEach((c,u)=>{const d=i.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(K.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):M(Sa,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)}),{ks:a,qs:s}})}function dy(n,e){const t=X(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=pa),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function fy(n,e){const t=X(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Pi.getTargetData(r,e).next(i=>i?(s=i,P.resolve(s)):t.Pi.allocateTargetId(r).next(a=>(s=new Xt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r})}async function Go(n,e,t){const r=X(n),s=r.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!hr(a))throw a;M(Sa,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Zl(n,e,t){const r=X(n);let s=K.min(),i=ne();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,f){const m=X(u),E=m.xs.get(f);return E!==void 0?P.resolve(m.Ms.get(E)):m.Pi.getTargetData(d,f)}(r,a,mt(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,c.targetId).next(u=>{i=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(a,e,t?s:K.min(),t?i:ne())).next(c=>(py(r,Zg(e),c),{documents:c,Qs:i})))}function py(n,e,t){let r=n.Os.get(e)||K.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Os.set(e,r)}class eu{constructor(){this.activeTargetIds=i_()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class my{constructor(){this.Mo=new eu,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new eu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class gy{Oo(e){}shutdown(){}}/**
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
 */const tu="ConnectivityMonitor";class nu{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){M(tu,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){M(tu,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ls=null;function Ko(){return Ls===null?Ls=function(){return 268435456+Math.round(2147483648*Math.random())}():Ls++,"0x"+Ls.toString(16)}/**
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
 */const Eo="RestConnection",_y={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class yy{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===ni?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,t,r,s,i){const a=Ko(),c=this.zo(e,t.toUriEncodedString());M(Eo,`Sending RPC '${e}' ${a}:`,c,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:d}=new URL(c),f=ln(d);return this.Jo(e,c,u,r,f).then(m=>(M(Eo,`Received RPC '${e}' ${a}: `,m),m),m=>{throw tr(Eo,`RPC '${e}' ${a} failed with error: `,m,"url: ",c,"request:",r),m})}Ho(e,t,r,s,i,a){return this.Go(e,t,r,s,i)}jo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+lr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,t){const r=_y[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
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
 */class vy{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Oe="WebChannelConnection";class wy extends yy{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,i){const a=Ko();return new Promise((c,u)=>{const d=new ph;d.setWithCredentials(!0),d.listenOnce(mh.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case js.NO_ERROR:const m=d.getResponseJson();M(Oe,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(m)),c(m);break;case js.TIMEOUT:M(Oe,`RPC '${e}' ${a} timed out`),u(new O(S.DEADLINE_EXCEEDED,"Request time out"));break;case js.HTTP_ERROR:const E=d.getStatus();if(M(Oe,`RPC '${e}' ${a} failed with status:`,E,"response text:",d.getResponseText()),E>0){let A=d.getResponseJson();Array.isArray(A)&&(A=A[0]);const k=A==null?void 0:A.error;if(k&&k.status&&k.message){const x=function(z){const H=z.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(H)>=0?H:S.UNKNOWN}(k.status);u(new O(x,k.message))}else u(new O(S.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new O(S.UNAVAILABLE,"Connection failed."));break;default:W(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{M(Oe,`RPC '${e}' ${a} completed.`)}});const f=JSON.stringify(s);M(Oe,`RPC '${e}' ${a} sending request:`,s),d.send(t,"POST",f,r,15)})}T_(e,t,r){const s=Ko(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=yh(),c=_h(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const f=i.join("");M(Oe,`Creating RPC '${e}' stream ${s}: ${f}`,u);const m=a.createWebChannel(f,u);this.I_(m);let E=!1,A=!1;const k=new vy({Yo:C=>{A?M(Oe,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(E||(M(Oe,`Opening RPC '${e}' stream ${s} transport.`),m.open(),E=!0),M(Oe,`RPC '${e}' stream ${s} sending:`,C),m.send(C))},Zo:()=>m.close()}),x=(C,z,H)=>{C.listen(z,j=>{try{H(j)}catch(Q){setTimeout(()=>{throw Q},0)}})};return x(m,Dr.EventType.OPEN,()=>{A||(M(Oe,`RPC '${e}' stream ${s} transport opened.`),k.o_())}),x(m,Dr.EventType.CLOSE,()=>{A||(A=!0,M(Oe,`RPC '${e}' stream ${s} transport closed`),k.a_(),this.E_(m))}),x(m,Dr.EventType.ERROR,C=>{A||(A=!0,tr(Oe,`RPC '${e}' stream ${s} transport errored. Name:`,C.name,"Message:",C.message),k.a_(new O(S.UNAVAILABLE,"The operation could not be completed")))}),x(m,Dr.EventType.MESSAGE,C=>{var z;if(!A){const H=C.data[0];ie(!!H,16349);const j=H,Q=(j==null?void 0:j.error)||((z=j[0])==null?void 0:z.error);if(Q){M(Oe,`RPC '${e}' stream ${s} received error:`,Q);const le=Q.status;let se=function(_){const v=Te[_];if(v!==void 0)return Jh(v)}(le),T=Q.message;se===void 0&&(se=S.INTERNAL,T="Unknown error status: "+le+" with message "+Q.message),A=!0,k.a_(new O(se,T)),m.close()}else M(Oe,`RPC '${e}' stream ${s} received:`,H),k.u_(H)}}),x(c,gh.STAT_EVENT,C=>{C.stat===Oo.PROXY?M(Oe,`RPC '${e}' stream ${s} detected buffering proxy`):C.stat===Oo.NOPROXY&&M(Oe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.__()},0),k}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function To(){return typeof document<"u"?document:null}/**
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
 */function ki(n){return new b_(n,!0)}/**
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
 */class dd{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&M("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const ru="PersistentStream";class fd{constructor(e,t,r,s,i,a,c,u){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new dd(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===S.RESOURCE_EXHAUSTED?(Ot(t.toString()),Ot("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===t&&this.G_(r,s)},r=>{e(()=>{const s=new O(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return M(ru,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(M(ru,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ey extends fd{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=S_(this.serializer,e),r=function(i){if(!("targetChange"in i))return K.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?K.min():a.readTime?gt(a.readTime):K.min()}(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=Wo(this.serializer),t.addTarget=function(i,a){let c;const u=a.target;if(c=Bo(u)?{documents:k_(i,u)}:{query:x_(i,u).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=td(i,a.resumeToken);const d=jo(i,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(K.min())>0){c.readTime=ai(i,a.snapshotVersion.toTimestamp());const d=jo(i,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const r=D_(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=Wo(this.serializer),t.removeTarget=e,this.q_(t)}}class Ty extends fd{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return ie(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ie(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ie(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=C_(e.writeResults,e.commitTime),r=gt(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=Wo(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>P_(this.serializer,r))};this.q_(t)}}/**
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
 */class Iy{}class by extends Iy{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new O(S.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Go(e,zo(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(S.UNKNOWN,i.toString())})}Ho(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Ho(e,zo(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(S.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class Ay{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ot(t),this.aa=!1):M("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const kn="RemoteStore";class Ry{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(a=>{r.enqueueAndForget(async()=>{Ln(this)&&(M(kn,"Restarting streams for network reachability change."),await async function(u){const d=X(u);d.Ea.add(4),await ls(d),d.Ra.set("Unknown"),d.Ea.delete(4),await xi(d)}(this))})}),this.Ra=new Ay(r,s)}}async function xi(n){if(Ln(n))for(const e of n.da)await e(!0)}async function ls(n){for(const e of n.da)await e(!1)}function pd(n,e){const t=X(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),xa(t)?ka(t):fr(t).O_()&&Ca(t,e))}function Pa(n,e){const t=X(n),r=fr(t);t.Ia.delete(e),r.O_()&&md(t,e),t.Ia.size===0&&(r.O_()?r.L_():Ln(t)&&t.Ra.set("Unknown"))}function Ca(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(K.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}fr(n).Y_(e)}function md(n,e){n.Va.Ue(e),fr(n).Z_(e)}function ka(n){n.Va=new w_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),fr(n).start(),n.Ra.ua()}function xa(n){return Ln(n)&&!fr(n).x_()&&n.Ia.size>0}function Ln(n){return X(n).Ea.size===0}function gd(n){n.Va=void 0}async function Sy(n){n.Ra.set("Online")}async function Py(n){n.Ia.forEach((e,t)=>{Ca(n,e)})}async function Cy(n,e){gd(n),xa(n)?(n.Ra.ha(e),ka(n)):n.Ra.set("Unknown")}async function ky(n,e,t){if(n.Ra.set("Online"),e instanceof ed&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ia.delete(c),s.Va.removeTarget(c))}(n,e)}catch(r){M(kn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await li(n,r)}else if(e instanceof Gs?n.Va.Ze(e):e instanceof Zh?n.Va.st(e):n.Va.tt(e),!t.isEqual(K.min()))try{const r=await hd(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.Va.Tt(a);return c.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ia.get(d);f&&i.Ia.set(d,f.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,d)=>{const f=i.Ia.get(u);if(!f)return;i.Ia.set(u,f.withResumeToken(De.EMPTY_BYTE_STRING,f.snapshotVersion)),md(i,u);const m=new Xt(f.target,u,d,f.sequenceNumber);Ca(i,m)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){M(kn,"Failed to raise snapshot:",r),await li(n,r)}}async function li(n,e,t){if(!hr(e))throw e;n.Ea.add(1),await ls(n),n.Ra.set("Offline"),t||(t=()=>hd(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{M(kn,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await xi(n)})}function _d(n,e){return e().catch(t=>li(n,t,e))}async function Ni(n){const e=X(n),t=an(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:pa;for(;xy(e);)try{const s=await dy(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,Ny(e,s)}catch(s){await li(e,s)}yd(e)&&vd(e)}function xy(n){return Ln(n)&&n.Ta.length<10}function Ny(n,e){n.Ta.push(e);const t=an(n);t.O_()&&t.X_&&t.ea(e.mutations)}function yd(n){return Ln(n)&&!an(n).x_()&&n.Ta.length>0}function vd(n){an(n).start()}async function Dy(n){an(n).ra()}async function Vy(n){const e=an(n);for(const t of n.Ta)e.ea(t.mutations)}async function Oy(n,e,t){const r=n.Ta.shift(),s=Ea.from(r,e,t);await _d(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Ni(n)}async function Ly(n,e){e&&an(n).X_&&await async function(r,s){if(function(a){return __(a)&&a!==S.ABORTED}(s.code)){const i=r.Ta.shift();an(r).B_(),await _d(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ni(r)}}(n,e),yd(n)&&vd(n)}async function su(n,e){const t=X(n);t.asyncQueue.verifyOperationInProgress(),M(kn,"RemoteStore received new credentials");const r=Ln(t);t.Ea.add(3),await ls(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await xi(t)}async function My(n,e){const t=X(n);e?(t.Ea.delete(2),await xi(t)):e||(t.Ea.add(2),await ls(t),t.Ra.set("Unknown"))}function fr(n){return n.ma||(n.ma=function(t,r,s){const i=X(t);return i.sa(),new Ey(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:Sy.bind(null,n),t_:Py.bind(null,n),r_:Cy.bind(null,n),H_:ky.bind(null,n)}),n.da.push(async e=>{e?(n.ma.B_(),xa(n)?ka(n):n.Ra.set("Unknown")):(await n.ma.stop(),gd(n))})),n.ma}function an(n){return n.fa||(n.fa=function(t,r,s){const i=X(t);return i.sa(),new Ty(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:Dy.bind(null,n),r_:Ly.bind(null,n),ta:Vy.bind(null,n),na:Oy.bind(null,n)}),n.da.push(async e=>{e?(n.fa.B_(),await Ni(n)):(await n.fa.stop(),n.Ta.length>0&&(M(kn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
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
 */class Na{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new In,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new Na(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Da(n,e){if(Ot("AsyncQueue",`${e}: ${n}`),hr(n))return new O(S.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Qn{static emptySet(e){return new Qn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||q.comparator(t.key,r.key):(t,r)=>q.comparator(t.key,r.key),this.keyedMap=Vr(),this.sortedSet=new pe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Qn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Qn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class iu{constructor(){this.ga=new pe(q.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):W(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}}class or{constructor(e,t,r,s,i,a,c,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new or(e,t,Qn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&bi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Uy{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class Fy{constructor(){this.queries=ou(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=X(t),i=s.queries;s.queries=ou(),i.forEach((a,c)=>{for(const u of c.Sa)u.onError(r)})})(this,new O(S.ABORTED,"Firestore shutting down"))}}function ou(){return new On(n=>Bh(n),bi)}async function By(n,e){const t=X(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new Uy,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=Da(a,`Initialization of query '${jn(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&Va(t)}async function $y(n,e){const t=X(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function qy(n,e){const t=X(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.Sa)c.Fa(s)&&(r=!0);a.wa=s}}r&&Va(t)}function jy(n,e,t){const r=X(n),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);r.queries.delete(e)}function Va(n){n.Ca.forEach(e=>{e.next()})}var Qo,au;(au=Qo||(Qo={})).Ma="default",au.Cache="cache";class zy{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new or(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=or.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Qo.Cache}}/**
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
 */class wd{constructor(e){this.key=e}}class Ed{constructor(e){this.key=e}}class Hy{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ne(),this.mutatedKeys=ne(),this.eu=$h(e),this.tu=new Qn(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new iu,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const E=s.get(f),A=Ai(this.query,m)?m:null,k=!!E&&this.mutatedKeys.has(E.key),x=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let C=!1;E&&A?E.data.isEqual(A.data)?k!==x&&(r.track({type:3,doc:A}),C=!0):this.su(E,A)||(r.track({type:2,doc:A}),C=!0,(u&&this.eu(A,u)>0||d&&this.eu(A,d)<0)&&(c=!0)):!E&&A?(r.track({type:0,doc:A}),C=!0):E&&!A&&(r.track({type:1,doc:E}),C=!0,(u||d)&&(c=!0)),C&&(A?(a=a.add(A),i=x?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:a,iu:r,Cs:c,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((f,m)=>function(A,k){const x=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W(20277,{Rt:C})}};return x(A)-x(k)}(f.type,m.type)||this.eu(f.doc,m.doc)),this.ou(r),s=s??!1;const c=t&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,d=u!==this.Za;return this.Za=u,a.length!==0||d?{snapshot:new or(this.query,e.tu,i,a,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new iu,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=ne(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const t=[];return e.forEach(r=>{this.Xa.has(r)||t.push(new Ed(r))}),this.Xa.forEach(r=>{e.has(r)||t.push(new wd(r))}),t}cu(e){this.Ya=e.Qs,this.Xa=ne();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return or.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Oa="SyncEngine";class Wy{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Gy{constructor(e){this.key=e,this.hu=!1}}class Ky{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new On(c=>Bh(c),bi),this.Iu=new Map,this.Eu=new Set,this.du=new pe(q.comparator),this.Au=new Map,this.Ru=new ba,this.Vu={},this.mu=new Map,this.fu=ir.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Qy(n,e,t=!0){const r=Sd(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Td(r,e,t,!0),s}async function Xy(n,e){const t=Sd(n);await Td(t,e,!0,!1)}async function Td(n,e,t,r){const s=await fy(n.localStore,mt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await Yy(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&pd(n.remoteStore,s),c}async function Yy(n,e,t,r,s){n.pu=(m,E,A)=>async function(x,C,z,H){let j=C.view.ru(z);j.Cs&&(j=await Zl(x.localStore,C.query,!1).then(({documents:T})=>C.view.ru(T,j)));const Q=H&&H.targetChanges.get(C.targetId),le=H&&H.targetMismatches.get(C.targetId)!=null,se=C.view.applyChanges(j,x.isPrimaryClient,Q,le);return lu(x,C.targetId,se.au),se.snapshot}(n,m,E,A);const i=await Zl(n.localStore,e,!0),a=new Hy(e,i.Qs),c=a.ru(i.documents),u=cs.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,u);lu(n,t,d.au);const f=new Wy(e,t,a);return n.Tu.set(e,f),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),d.snapshot}async function Jy(n,e,t){const r=X(n),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(a=>!bi(a,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Go(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Pa(r.remoteStore,s.targetId),Xo(r,s.targetId)}).catch(ur)):(Xo(r,s.targetId),await Go(r.localStore,s.targetId,!0))}async function Zy(n,e){const t=X(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Pa(t.remoteStore,r.targetId))}async function ev(n,e,t){const r=av(n);try{const s=await function(a,c){const u=X(a),d=de.now(),f=c.reduce((A,k)=>A.add(k.key),ne());let m,E;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let k=Lt(),x=ne();return u.Ns.getEntries(A,f).next(C=>{k=C,k.forEach((z,H)=>{H.isValidDocument()||(x=x.add(z))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,k)).next(C=>{m=C;const z=[];for(const H of c){const j=d_(H,m.get(H.key).overlayedDocument);j!=null&&z.push(new hn(H.key,j,Nh(j.value.mapValue),We.exists(!0)))}return u.mutationQueue.addMutationBatch(A,d,z,c)}).next(C=>{E=C;const z=C.applyToLocalDocumentSet(m,x);return u.documentOverlayCache.saveOverlays(A,C.batchId,z)})}).then(()=>({batchId:E.batchId,changes:jh(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,u){let d=a.Vu[a.currentUser.toKey()];d||(d=new pe(te)),d=d.insert(c,u),a.Vu[a.currentUser.toKey()]=d}(r,s.batchId,t),await us(r,s.changes),await Ni(r.remoteStore)}catch(s){const i=Da(s,"Failed to persist write");t.reject(i)}}async function Id(n,e){const t=X(n);try{const r=await uy(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Au.get(i);a&&(ie(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?ie(a.hu,14607):s.removedDocuments.size>0&&(ie(a.hu,42227),a.hu=!1))}),await us(t,r,e)}catch(r){await ur(r)}}function cu(n,e,t){const r=X(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach((i,a)=>{const c=a.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const u=X(a);u.onlineState=c;let d=!1;u.queries.forEach((f,m)=>{for(const E of m.Sa)E.va(c)&&(d=!0)}),d&&Va(u)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function tv(n,e,t){const r=X(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let a=new pe(q.comparator);a=a.insert(i,Me.newNoDocument(i,K.min()));const c=ne().add(i),u=new Ci(K.min(),new Map,new pe(te),a,c);await Id(r,u),r.du=r.du.remove(i),r.Au.delete(e),La(r)}else await Go(r.localStore,e,!1).then(()=>Xo(r,e,t)).catch(ur)}async function nv(n,e){const t=X(n),r=e.batch.batchId;try{const s=await ly(t.localStore,e);Ad(t,r,null),bd(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await us(t,s)}catch(s){await ur(s)}}async function rv(n,e,t){const r=X(n);try{const s=await function(a,c){const u=X(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return u.mutationQueue.lookupMutationBatch(d,c).next(m=>(ie(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(d,m))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>u.localDocuments.getDocuments(d,f))})}(r.localStore,e);Ad(r,e,t),bd(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await us(r,s)}catch(s){await ur(s)}}function bd(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function Ad(n,e,t){const r=X(n);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Xo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach(r=>{n.Ru.containsKey(r)||Rd(n,r)})}function Rd(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Pa(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),La(n))}function lu(n,e,t){for(const r of t)r instanceof wd?(n.Ru.addReference(r.key,e),sv(n,r)):r instanceof Ed?(M(Oa,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||Rd(n,r.key)):W(19791,{wu:r})}function sv(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(M(Oa,"New document in limbo: "+t),n.Eu.add(r),La(n))}function La(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new q(ue.fromString(e)),r=n.fu.next();n.Au.set(r,new Gy(t)),n.du=n.du.insert(t,r),pd(n.remoteStore,new Xt(mt(va(t.path)),r,"TargetPurposeLimboResolution",Ei.ce))}}async function us(n,e,t){const r=X(n),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((c,u)=>{a.push(r.pu(u,e,t).then(d=>{var f;if((d||t)&&r.isPrimaryClient){const m=d?!d.fromCache:(f=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(d){s.push(d);const m=Ra.As(u.targetId,d);i.push(m)}}))}),await Promise.all(a),r.Pu.H_(s),await async function(u,d){const f=X(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>P.forEach(d,E=>P.forEach(E.Es,A=>f.persistence.referenceDelegate.addReference(m,E.targetId,A)).next(()=>P.forEach(E.ds,A=>f.persistence.referenceDelegate.removeReference(m,E.targetId,A)))))}catch(m){if(!hr(m))throw m;M(Sa,"Failed to update sequence numbers: "+m)}for(const m of d){const E=m.targetId;if(!m.fromCache){const A=f.Ms.get(E),k=A.snapshotVersion,x=A.withLastLimboFreeSnapshotVersion(k);f.Ms=f.Ms.insert(E,x)}}}(r.localStore,i))}async function iv(n,e){const t=X(n);if(!t.currentUser.isEqual(e)){M(Oa,"User change. New user:",e.toKey());const r=await ud(t.localStore,e);t.currentUser=e,function(i,a){i.mu.forEach(c=>{c.forEach(u=>{u.reject(new O(S.CANCELLED,a))})}),i.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await us(t,r.Ls)}}function ov(n,e){const t=X(n),r=t.Au.get(e);if(r&&r.hu)return ne().add(r.key);{let s=ne();const i=t.Iu.get(e);if(!i)return s;for(const a of i){const c=t.Tu.get(a);s=s.unionWith(c.view.nu)}return s}}function Sd(n){const e=X(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Id.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ov.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tv.bind(null,e),e.Pu.H_=qy.bind(null,e.eventManager),e.Pu.yu=jy.bind(null,e.eventManager),e}function av(n){const e=X(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=nv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=rv.bind(null,e),e}class ui{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ki(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return cy(this.persistence,new iy,e.initialUser,this.serializer)}Cu(e){return new ld(Aa.mi,this.serializer)}Du(e){return new my}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ui.provider={build:()=>new ui};class cv extends ui{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ie(this.persistence.referenceDelegate instanceof ci,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new z_(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?ze.withCacheSize(this.cacheSizeBytes):ze.DEFAULT;return new ld(r=>ci.mi(r,t),this.serializer)}}class Yo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>cu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=iv.bind(null,this.syncEngine),await My(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Fy}()}createDatastore(e){const t=ki(e.databaseInfo.databaseId),r=function(i){return new wy(i)}(e.databaseInfo);return function(i,a,c,u){return new by(i,a,c,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new Ry(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>cu(this.syncEngine,t,0),function(){return nu.v()?new nu:new gy}())}createSyncEngine(e,t){return function(s,i,a,c,u,d,f){const m=new Ky(s,i,a,c,u,d);return f&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=X(s);M(kn,"RemoteStore shutting down."),i.Ea.add(5),await ls(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Yo.provider={build:()=>new Yo};/**
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
 *//**
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
 */class lv{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Ot("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const cn="FirestoreClient";class uv{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Le.UNAUTHENTICATED,this.clientId=fa.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{M(cn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(M(cn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new In;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Da(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Io(n,e){n.asyncQueue.verifyOperationInProgress(),M(cn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await ud(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function uu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await hv(n);M(cn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>su(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>su(e.remoteStore,s)),n._onlineComponents=e}async function hv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M(cn,"Using user provided OfflineComponentProvider");try{await Io(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===S.FAILED_PRECONDITION||s.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;tr("Error using user provided cache. Falling back to memory cache: "+t),await Io(n,new ui)}}else M(cn,"Using default OfflineComponentProvider"),await Io(n,new cv(void 0));return n._offlineComponents}async function Pd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M(cn,"Using user provided OnlineComponentProvider"),await uu(n,n._uninitializedComponentsProvider._online)):(M(cn,"Using default OnlineComponentProvider"),await uu(n,new Yo))),n._onlineComponents}function dv(n){return Pd(n).then(e=>e.syncEngine)}async function hu(n){const e=await Pd(n),t=e.eventManager;return t.onListen=Qy.bind(null,e.syncEngine),t.onUnlisten=Jy.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Xy.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Zy.bind(null,e.syncEngine),t}/**
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
 */function Cd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const du=new Map;/**
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
 */const kd="firestore.googleapis.com",fu=!0;class pu{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new O(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=kd,this.ssl=fu}else this.host=e.host,this.ssl=e.ssl??fu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=cd;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<q_)throw new O(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Rg("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Cd(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new O(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new O(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new O(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Di{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new O(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new gg;switch(r.type){case"firstParty":return new wg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=du.get(t);r&&(M("ComponentProvider","Removing Datastore"),du.delete(t),r.terminate())}(this),Promise.resolve()}}function fv(n,e,t,r={}){var d;n=pt(n,Di);const s=ln(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&(aa(`https://${c}`),ca("Firestore",!0)),i.host!==kd&&i.host!==c&&tr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:c,ssl:s,emulatorOptions:r};if(!Sn(u,a)&&(n._setSettings(u),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=Le.MOCK_USER;else{f=ah(r.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new O(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Le(E)}n._authCredentials=new _g(new wh(f,m))}}/**
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
 */class Mn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Mn(this.firestore,e,this._query)}}class we{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new en(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new we(this.firestore,e,this._key)}toJSON(){return{type:we._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(os(t,we._jsonSchema))return new we(e,r||null,new q(ue.fromString(t.referencePath)))}}we._jsonSchemaVersion="firestore/documentReference/1.0",we._jsonSchema={type:be("string",we._jsonSchemaVersion),referencePath:be("string")};class en extends Mn{constructor(e,t,r){super(e,t,va(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new we(this.firestore,null,new q(e))}withConverter(e){return new en(this.firestore,e,this._path)}}function Ma(n,e,...t){if(n=fe(n),Eh("collection","path",e),n instanceof Di){const r=ue.fromString(e,...t);return Rl(r),new en(n,null,r)}{if(!(n instanceof we||n instanceof en))throw new O(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ue.fromString(e,...t));return Rl(r),new en(n.firestore,null,r)}}function ar(n,e,...t){if(n=fe(n),arguments.length===1&&(e=fa.newId()),Eh("doc","path",e),n instanceof Di){const r=ue.fromString(e,...t);return Al(r),new we(n,null,new q(r))}{if(!(n instanceof we||n instanceof en))throw new O(S.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ue.fromString(e,...t));return Al(r),new we(n.firestore,n instanceof en?n.converter:null,new q(r))}}/**
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
 */const mu="AsyncQueue";class gu{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new dd(this,"async_queue_retry"),this._c=()=>{const r=To();r&&M(mu,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=To();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=To();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new In;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!hr(e))throw e;M(mu,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Ot("INTERNAL UNHANDLED ERROR: ",_u(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Na.createAndSchedule(this,e,t,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&W(47125,{Pc:_u(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function _u(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
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
 */function yu(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class xn extends Di{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new gu,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new gu(e),this._firestoreClient=void 0,await e}}}function pv(n,e){const t=typeof n=="object"?n:ha(),r=typeof n=="string"?n:ni,s=vi(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=sh("firestore");i&&fv(s,...i)}return s}function Ua(n){if(n._terminated)throw new O(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||mv(n),n._firestoreClient}function mv(n){var r,s,i;const e=n._freezeSettings(),t=function(c,u,d,f){return new Mg(c,u,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Cd(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new uv(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(n._componentsProvider))}/**
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
 */class Ze{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ze(De.fromBase64String(e))}catch(t){throw new O(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ze(De.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ze._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(os(e,Ze._jsonSchema))return Ze.fromBase64String(e.bytes)}}Ze._jsonSchemaVersion="firestore/bytes/1.0",Ze._jsonSchema={type:be("string",Ze._jsonSchemaVersion),bytes:be("string")};/**
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
 */class hs{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ne(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Fa{constructor(e){this._methodName=e}}/**
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
 */class _t{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:_t._jsonSchemaVersion}}static fromJSON(e){if(os(e,_t._jsonSchema))return new _t(e.latitude,e.longitude)}}_t._jsonSchemaVersion="firestore/geoPoint/1.0",_t._jsonSchema={type:be("string",_t._jsonSchemaVersion),latitude:be("number"),longitude:be("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class yt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:yt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(os(e,yt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new yt(e.vectorValues);throw new O(S.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}yt._jsonSchemaVersion="firestore/vectorValue/1.0",yt._jsonSchema={type:be("string",yt._jsonSchemaVersion),vectorValues:be("object")};/**
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
 */const gv=/^__.*__$/;class _v{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new hn(e,this.data,this.fieldMask,t,this.fieldTransforms):new as(e,this.data,t,this.fieldTransforms)}}class xd{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new hn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Nd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W(40011,{Ac:n})}}class Ba{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Ba({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return hi(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Nd(this.Ac)&&gv.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class yv{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ki(e)}Cc(e,t,r,s=!1){return new Ba({Ac:e,methodName:t,Dc:r,path:Ne.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Vi(n){const e=n._freezeSettings(),t=ki(n._databaseId);return new yv(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Dd(n,e,t,r,s,i={}){const a=n.Cc(i.merge||i.mergeFields?2:0,e,t,s);$a("Data must be an object, but it was:",a,r);const c=Ld(r,a);let u,d;if(i.merge)u=new Xe(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const E=Jo(e,m,t);if(!a.contains(E))throw new O(S.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);Ud(f,E)||f.push(E)}u=new Xe(f),d=a.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,d=a.fieldTransforms;return new _v(new He(c),u,d)}class ds extends Fa{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ds}}function Vd(n,e,t,r){const s=n.Cc(1,e,t);$a("Data must be an object, but it was:",s,r);const i=[],a=He.empty();un(r,(u,d)=>{const f=qa(e,u,t);d=fe(d);const m=s.yc(f);if(d instanceof ds)i.push(f);else{const E=fs(d,m);E!=null&&(i.push(f),a.set(f,E))}});const c=new Xe(i);return new xd(a,c,s.fieldTransforms)}function Od(n,e,t,r,s,i){const a=n.Cc(1,e,t),c=[Jo(e,r,t)],u=[s];if(i.length%2!=0)throw new O(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<i.length;E+=2)c.push(Jo(e,i[E])),u.push(i[E+1]);const d=[],f=He.empty();for(let E=c.length-1;E>=0;--E)if(!Ud(d,c[E])){const A=c[E];let k=u[E];k=fe(k);const x=a.yc(A);if(k instanceof ds)d.push(A);else{const C=fs(k,x);C!=null&&(d.push(A),f.set(A,C))}}const m=new Xe(d);return new xd(f,m,a.fieldTransforms)}function vv(n,e,t,r=!1){return fs(t,n.Cc(r?4:3,e))}function fs(n,e){if(Md(n=fe(n)))return $a("Unsupported field value:",e,n),Ld(n,e);if(n instanceof Fa)return function(r,s){if(!Nd(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let u=fs(c,s.wc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=fe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return o_(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=de.fromDate(r);return{timestampValue:ai(s.serializer,i)}}if(r instanceof de){const i=new de(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ai(s.serializer,i)}}if(r instanceof _t)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ze)return{bytesValue:td(s.serializer,r._byteString)};if(r instanceof we){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ia(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof yt)return function(a,c){return{mapValue:{fields:{[kh]:{stringValue:xh},[ri]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw c.Sc("VectorValues must only contain numeric values.");return wa(c.serializer,d)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${wi(r)}`)}(n,e)}function Ld(n,e){const t={};return bh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):un(n,(r,s)=>{const i=fs(s,e.mc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Md(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof de||n instanceof _t||n instanceof Ze||n instanceof we||n instanceof Fa||n instanceof yt)}function $a(n,e,t){if(!Md(t)||!Th(t)){const r=wi(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function Jo(n,e,t){if((e=fe(e))instanceof hs)return e._internalPath;if(typeof e=="string")return qa(n,e);throw hi("Field path arguments must be of type string or ",n,!1,void 0,t)}const wv=new RegExp("[~\\*/\\[\\]]");function qa(n,e,t){if(e.search(wv)>=0)throw hi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new hs(...e.split("."))._internalPath}catch{throw hi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function hi(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new O(S.INVALID_ARGUMENT,c+n+u)}function Ud(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Fd{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new we(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ev(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ja("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Ev extends Fd{data(){return super.data()}}function ja(n,e){return typeof e=="string"?qa(n,e):e instanceof hs?e._internalPath:e._delegate._internalPath}/**
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
 */function Tv(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class za{}class Bd extends za{}function Iv(n,e,...t){let r=[];e instanceof za&&r.push(e),r=r.concat(t),function(i){const a=i.filter(u=>u instanceof Wa).length,c=i.filter(u=>u instanceof Ha).length;if(a>1||a>0&&c>0)throw new O(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Ha extends Bd{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Ha(e,t,r)}_apply(e){const t=this._parse(e);return $d(e._query,t),new Mn(e.firestore,e.converter,$o(e._query,t))}_parse(e){const t=Vi(e.firestore);return function(i,a,c,u,d,f,m){let E;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new O(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){wu(m,f);const k=[];for(const x of m)k.push(vu(u,i,x));E={arrayValue:{values:k}}}else E=vu(u,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||wu(m,f),E=vv(c,a,m,f==="in"||f==="not-in");return Ie.create(d,f,E)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Wa extends za{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Wa(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:ot.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const c=i.getFlattenedFilters();for(const u of c)$d(a,u),a=$o(a,u)}(e._query,t),new Mn(e.firestore,e.converter,$o(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ga extends Bd{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Ga(e,t)}_apply(e){const t=function(s,i,a){if(s.startAt!==null)throw new O(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new O(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Yr(i,a)}(e._query,this._field,this._direction);return new Mn(e.firestore,e.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new dr(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function bv(n,e="asc"){const t=e,r=ja("orderBy",n);return Ga._create(r,t)}function vu(n,e,t){if(typeof(t=fe(t))=="string"){if(t==="")throw new O(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Fh(e)&&t.indexOf("/")!==-1)throw new O(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ue.fromString(t));if(!q.isDocumentKey(r))throw new O(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Vl(n,new q(r))}if(t instanceof we)return Vl(n,t._key);throw new O(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${wi(t)}.`)}function wu(n,e){if(!Array.isArray(n)||n.length===0)throw new O(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function $d(n,e){const t=function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new O(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new O(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Av{convertValue(e,t="none"){switch(on(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(sn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw W(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return un(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[ri].arrayValue)==null?void 0:s.values)==null?void 0:i.map(a=>ve(a.doubleValue));return new yt(t)}convertGeoPoint(e){return new _t(ve(e.latitude),ve(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ii(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Kr(e));default:return null}}convertTimestamp(e){const t=rn(e);return new de(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ue.fromString(e);ie(ad(r),9688,{name:e});const s=new Qr(r.get(1),r.get(3)),i=new q(r.popFirst(5));return s.isEqual(t)||Ot(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function qd(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Lr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class bn extends Fd{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ks(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(ja("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new O(S.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=bn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}bn._jsonSchemaVersion="firestore/documentSnapshot/1.0",bn._jsonSchema={type:be("string",bn._jsonSchemaVersion),bundleSource:be("string","DocumentSnapshot"),bundleName:be("string"),bundle:be("string")};class Ks extends bn{data(e={}){return super.data(e)}}class Xn{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Lr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Ks(this._firestore,this._userDataWriter,r.key,r,new Lr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const u=new Ks(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Lr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const u=new Ks(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Lr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,f=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:Rv(c.type),doc:u,oldIndex:d,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new O(S.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Xn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=fa.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Rv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W(61501,{type:n})}}Xn._jsonSchemaVersion="firestore/querySnapshot/1.0",Xn._jsonSchema={type:be("string",Xn._jsonSchemaVersion),bundleSource:be("string","QuerySnapshot"),bundleName:be("string"),bundle:be("string")};class jd extends Av{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ze(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new we(this.firestore,null,t)}}function zd(n,e,t){n=pt(n,we);const r=pt(n.firestore,xn),s=qd(n.converter,e,t);return Oi(r,[Dd(Vi(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,We.none())])}function Sv(n,e,t,...r){n=pt(n,we);const s=pt(n.firestore,xn),i=Vi(s);let a;return a=typeof(e=fe(e))=="string"||e instanceof hs?Od(i,"updateDoc",n._key,e,t,r):Vd(i,"updateDoc",n._key,e),Oi(s,[a.toMutation(n._key,We.exists(!0))])}function Pv(n){return Oi(pt(n.firestore,xn),[new Pi(n._key,We.none())])}function Ka(n,...e){var u,d,f;n=fe(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||yu(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(yu(e[r])){const m=e[r];e[r]=(u=m.next)==null?void 0:u.bind(m),e[r+1]=(d=m.error)==null?void 0:d.bind(m),e[r+2]=(f=m.complete)==null?void 0:f.bind(m)}let i,a,c;if(n instanceof we)a=pt(n.firestore,xn),c=va(n._key.path),i={next:m=>{e[r]&&e[r](Cv(a,n,m))},error:e[r+1],complete:e[r+2]};else{const m=pt(n,Mn);a=pt(m.firestore,xn),c=m._query;const E=new jd(a);i={next:A=>{e[r]&&e[r](new Xn(a,E,m,A))},error:e[r+1],complete:e[r+2]},Tv(n._query)}return function(E,A,k,x){const C=new lv(x),z=new zy(A,C,k);return E.asyncQueue.enqueueAndForget(async()=>By(await hu(E),z)),()=>{C.Nu(),E.asyncQueue.enqueueAndForget(async()=>$y(await hu(E),z))}}(Ua(a),c,s,i)}function Oi(n,e){return function(r,s){const i=new In;return r.asyncQueue.enqueueAndForget(async()=>ev(await dv(r),s,i)),i.promise}(Ua(n),e)}function Cv(n,e,t){const r=t.docs.get(e._key),s=new jd(n);return new bn(n,s,e._key,r,new Lr(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */class kv{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Vi(e)}set(e,t,r){this._verifyNotCommitted();const s=bo(e,this._firestore),i=qd(s.converter,t,r),a=Dd(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(a.toMutation(s._key,We.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=bo(e,this._firestore);let a;return a=typeof(t=fe(t))=="string"||t instanceof hs?Od(this._dataReader,"WriteBatch.update",i._key,t,r,s):Vd(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(a.toMutation(i._key,We.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=bo(e,this._firestore);return this._mutations=this._mutations.concat(new Pi(t._key,We.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new O(S.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function bo(n,e){if((n=fe(n)).firestore!==e)throw new O(S.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */function xv(){return new ds("deleteField")}/**
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
 */function Nv(n){return Ua(n=pt(n,xn)),new kv(n,e=>Oi(n,e))}(function(e,t=!0){(function(s){lr=s})(Vn),Pn(new tn("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new xn(new yg(r.getProvider("auth-internal")),new Eg(a,r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new O(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qr(d.options.projectId,f)}(a,s),a);return i={useFetchStreams:t,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),ft(El,Tl,e),ft(El,Tl,"esm2020")})();function Hd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Dv=Hd,Wd=new ss("auth","Firebase",Hd());/**
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
 */const di=new la("@firebase/auth");function Vv(n,...e){di.logLevel<=ee.WARN&&di.warn(`Auth (${Vn}): ${n}`,...e)}function Qs(n,...e){di.logLevel<=ee.ERROR&&di.error(`Auth (${Vn}): ${n}`,...e)}/**
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
 */function It(n,...e){throw Xa(n,...e)}function it(n,...e){return Xa(n,...e)}function Qa(n,e,t){const r={...Dv(),[e]:t};return new ss("auth","Firebase",r).create(e,{appName:n.name})}function An(n){return Qa(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ov(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&It(n,"argument-error"),Qa(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Xa(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Wd.create(n,...e)}function G(n,e,...t){if(!n)throw Xa(e,...t)}function Ct(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Qs(e),new Error(e)}function Mt(n,e){n||Ct(e)}/**
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
 */function Zo(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Lv(){return Eu()==="http:"||Eu()==="https:"}function Eu(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function Mv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Lv()||Gp()||"connection"in navigator)?navigator.onLine:!0}function Uv(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ps{constructor(e,t){this.shortDelay=e,this.longDelay=t,Mt(t>e,"Short delay should be less than long delay!"),this.isMobile=zp()||Kp()}get(){return Mv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ya(n,e){Mt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Gd{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ct("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ct("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ct("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Fv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Bv=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],$v=new ps(3e4,6e4);function Ja(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function pr(n,e,t,r,s={}){return Kd(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=is({key:n.config.apiKey,...a}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:u,...i};return Wp()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&ln(n.emulatorConfig.host)&&(d.credentials="include"),Gd.fetch()(await Qd(n,n.config.apiHost,t,c),d)})}async function Kd(n,e,t){n._canInitEmulator=!1;const r={...Fv,...e};try{const s=new jv(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Ms(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ms(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Ms(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Ms(n,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Qa(n,f,d);It(n,f)}}catch(s){if(s instanceof Rt)throw s;It(n,"network-request-failed",{message:String(s)})}}async function qv(n,e,t,r,s={}){const i=await pr(n,e,t,r,s);return"mfaPendingCredential"in i&&It(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Qd(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?Ya(n.config,s):`${n.config.apiScheme}://${s}`;return Bv.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class jv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(it(this.auth,"network-request-failed")),$v.get())})}}function Ms(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=it(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */async function zv(n,e){return pr(n,"POST","/v1/accounts:delete",e)}async function fi(n,e){return pr(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function qr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Hv(n,e=!1){const t=fe(n),r=await t.getIdToken(e),s=Za(r);G(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:qr(Ao(s.auth_time)),issuedAtTime:qr(Ao(s.iat)),expirationTime:qr(Ao(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ao(n){return Number(n)*1e3}function Za(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Qs("JWT malformed, contained fewer than 3 sections"),null;try{const s=nh(t);return s?JSON.parse(s):(Qs("Failed to decode base64 JWT payload"),null)}catch(s){return Qs("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Tu(n){const e=Za(n);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function es(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Rt&&Wv(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Wv({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Gv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ea{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=qr(this.lastLoginAt),this.creationTime=qr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function pi(n){var m;const e=n.auth,t=await n.getIdToken(),r=await es(n,fi(e,{idToken:t}));G(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(m=s.providerUserInfo)!=null&&m.length?Xd(s.providerUserInfo):[],a=Qv(n.providerData,i),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),d=c?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ea(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,f)}async function Kv(n){const e=fe(n);await pi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Qv(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Xd(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function Xv(n,e){const t=await Kd(n,{},async()=>{const r=is({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await Qd(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:r};return n.emulatorConfig&&ln(n.emulatorConfig.host)&&(u.credentials="include"),Gd.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Yv(n,e){return pr(n,"POST","/v2/accounts:revokeToken",Ja(n,e))}/**
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
 */class Yn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Tu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){G(e.length!==0,"internal-error");const t=Tu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Xv(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Yn;return r&&(G(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(G(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(G(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Yn,this.toJSON())}_performRefresh(){return Ct("not implemented")}}/**
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
 */function Ht(n,e){G(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class st{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Gv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ea(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await es(this,this.stsTokenManager.getToken(this.auth,e));return G(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Hv(this,e)}reload(){return Kv(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new st({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await pi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Je(this.auth.app))return Promise.reject(An(this.auth));const e=await this.getIdToken();return await es(this,zv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,u=t._redirectEventId??void 0,d=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:m,emailVerified:E,isAnonymous:A,providerData:k,stsTokenManager:x}=t;G(m&&x,e,"internal-error");const C=Yn.fromJSON(this.name,x);G(typeof m=="string",e,"internal-error"),Ht(r,e.name),Ht(s,e.name),G(typeof E=="boolean",e,"internal-error"),G(typeof A=="boolean",e,"internal-error"),Ht(i,e.name),Ht(a,e.name),Ht(c,e.name),Ht(u,e.name),Ht(d,e.name),Ht(f,e.name);const z=new st({uid:m,auth:e,email:s,emailVerified:E,displayName:r,isAnonymous:A,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:C,createdAt:d,lastLoginAt:f});return k&&Array.isArray(k)&&(z.providerData=k.map(H=>({...H}))),u&&(z._redirectEventId=u),z}static async _fromIdTokenResponse(e,t,r=!1){const s=new Yn;s.updateFromServerResponse(t);const i=new st({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await pi(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];G(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Xd(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Yn;c.updateFromIdToken(r);const u=new st({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ea(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
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
 */const Iu=new Map;function kt(n){Mt(n instanceof Function,"Expected a class definition");let e=Iu.get(n);return e?(Mt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Iu.set(n,e),e)}/**
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
 */class Yd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Yd.type="NONE";const bu=Yd;/**
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
 */function Xs(n,e,t){return`firebase:${n}:${e}:${t}`}class Jn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Xs(this.userKey,s.apiKey,i),this.fullPersistenceKey=Xs("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await fi(this.auth,{idToken:e}).catch(()=>{});return t?st._fromGetAccountInfoResponse(this.auth,t,e):null}return st._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Jn(kt(bu),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||kt(bu);const a=Xs(r,e.config.apiKey,e.name);let c=null;for(const d of t)try{const f=await d._get(a);if(f){let m;if(typeof f=="string"){const E=await fi(e,{idToken:f}).catch(()=>{});if(!E)break;m=await st._fromGetAccountInfoResponse(e,E,f)}else m=st._fromJSON(e,f);d!==i&&(c=m),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Jn(i,e,r):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new Jn(i,e,r))}}/**
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
 */function Au(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(tf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Jd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rf(e))return"Blackberry";if(sf(e))return"Webos";if(Zd(e))return"Safari";if((e.includes("chrome/")||ef(e))&&!e.includes("edge/"))return"Chrome";if(nf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Jd(n=Ue()){return/firefox\//i.test(n)}function Zd(n=Ue()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ef(n=Ue()){return/crios\//i.test(n)}function tf(n=Ue()){return/iemobile/i.test(n)}function nf(n=Ue()){return/android/i.test(n)}function rf(n=Ue()){return/blackberry/i.test(n)}function sf(n=Ue()){return/webos/i.test(n)}function ec(n=Ue()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Jv(n=Ue()){var e;return ec(n)&&!!((e=window.navigator)!=null&&e.standalone)}function Zv(){return Qp()&&document.documentMode===10}function of(n=Ue()){return ec(n)||nf(n)||sf(n)||rf(n)||/windows phone/i.test(n)||tf(n)}/**
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
 */function af(n,e=[]){let t;switch(n){case"Browser":t=Au(Ue());break;case"Worker":t=`${Au(Ue())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Vn}/${r}`}/**
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
 */class ew{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const u=e(i);a(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function tw(n,e={}){return pr(n,"GET","/v2/passwordPolicy",Ja(n,e))}/**
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
 */const nw=6;class rw{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??nw,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class sw{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ru(this),this.idTokenSubscription=new Ru(this),this.beforeStateQueue=new ew(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=kt(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Jn.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await fi(this,{idToken:e}),r=await st._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Je(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await pi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Uv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Je(this.app))return Promise.reject(An(this));const t=e?fe(e):null;return t&&G(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Je(this.app)?Promise.reject(An(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Je(this.app)?Promise.reject(An(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await tw(this),t=new rw(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ss("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Yv(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&kt(e)||this._popupRedirectResolver;G(t,this,"argument-error"),this.redirectPersistenceManager=await Jn.create(this,[kt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=af(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(Je(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Vv(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Li(n){return fe(n)}class Ru{constructor(e){this.auth=e,this.observer=null,this.addObserver=rm(t=>this.observer=t)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let tc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function iw(n){tc=n}function ow(n){return tc.loadJS(n)}function aw(){return tc.gapiScript}function cw(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function lw(n,e){const t=vi(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Sn(i,e??{}))return s;It(s,"already-initialized")}return t.initialize({options:e})}function uw(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(kt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function hw(n,e,t){const r=Li(n);G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=cf(e),{host:a,port:c}=dw(e),u=c===null?"":`:${c}`,d={url:`${i}//${a}${u}/`},f=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){G(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),G(Sn(d,r.config.emulator)&&Sn(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,ln(a)?(aa(`${i}//${a}${u}`),ca("Auth",!0)):fw()}function cf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function dw(n){const e=cf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Su(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Su(a)}}}function Su(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function fw(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class lf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ct("not implemented")}_getIdTokenResponse(e){return Ct("not implemented")}_linkToIdToken(e,t){return Ct("not implemented")}_getReauthenticationResolver(e){return Ct("not implemented")}}/**
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
 */async function Zn(n,e){return qv(n,"POST","/v1/accounts:signInWithIdp",Ja(n,e))}/**
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
 */const pw="http://localhost";class Nn extends lf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Nn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):It("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new Nn(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Zn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Zn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Zn(e,t)}buildRequest(){const e={requestUri:pw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=is(t)}return e}}/**
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
 */class nc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ms extends nc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Wt extends ms{constructor(){super("facebook.com")}static credential(e){return Nn._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wt.credential(e.oauthAccessToken)}catch{return null}}}Wt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wt.PROVIDER_ID="facebook.com";/**
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
 */class Pt extends ms{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Nn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Pt.credential(t,r)}catch{return null}}}Pt.GOOGLE_SIGN_IN_METHOD="google.com";Pt.PROVIDER_ID="google.com";/**
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
 */class Gt extends ms{constructor(){super("github.com")}static credential(e){return Nn._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gt.credential(e.oauthAccessToken)}catch{return null}}}Gt.GITHUB_SIGN_IN_METHOD="github.com";Gt.PROVIDER_ID="github.com";/**
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
 */class Kt extends ms{constructor(){super("twitter.com")}static credential(e,t){return Nn._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Kt.credential(t,r)}catch{return null}}}Kt.TWITTER_SIGN_IN_METHOD="twitter.com";Kt.PROVIDER_ID="twitter.com";/**
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
 */class cr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await st._fromIdTokenResponse(e,r,s),a=Pu(r);return new cr({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Pu(r);return new cr({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Pu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class mi extends Rt{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,mi.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new mi(e,t,r,s)}}function uf(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?mi._fromErrorAndOperation(n,i,e,r):i})}async function mw(n,e,t=!1){const r=await es(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return cr._forOperation(n,"link",r)}/**
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
 */async function gw(n,e,t=!1){const{auth:r}=n;if(Je(r.app))return Promise.reject(An(r));const s="reauthenticate";try{const i=await es(n,uf(r,s,e,n),t);G(i.idToken,r,"internal-error");const a=Za(i.idToken);G(a,r,"internal-error");const{sub:c}=a;return G(n.uid===c,r,"user-mismatch"),cr._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&It(r,"user-mismatch"),i}}/**
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
 */async function _w(n,e,t=!1){if(Je(n.app))return Promise.reject(An(n));const r="signIn",s=await uf(n,r,e),i=await cr._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function yw(n,e,t,r){return fe(n).onIdTokenChanged(e,t,r)}function vw(n,e,t){return fe(n).beforeAuthStateChanged(e,t)}function ww(n,e,t,r){return fe(n).onAuthStateChanged(e,t,r)}function Ew(n){return fe(n).signOut()}const gi="__sak";/**
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
 */class hf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(gi,"1"),this.storage.removeItem(gi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Tw=1e3,Iw=10;class df extends hf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=of(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);Zv()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Iw):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Tw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}df.type="LOCAL";const bw=df;/**
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
 */class ff extends hf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ff.type="SESSION";const pf=ff;/**
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
 */function Aw(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Mi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Mi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async d=>d(t.origin,i)),u=await Aw(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Mi.receivers=[];/**
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
 */function rc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Rw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const d=rc("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(m){const E=m;if(E.data.eventId===d)switch(E.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(E.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function vt(){return window}function Sw(n){vt().location.href=n}/**
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
 */function mf(){return typeof vt().WorkerGlobalScope<"u"&&typeof vt().importScripts=="function"}async function Pw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Cw(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function kw(){return mf()?self:null}/**
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
 */const gf="firebaseLocalStorageDb",xw=1,_i="firebaseLocalStorage",_f="fbase_key";class gs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ui(n,e){return n.transaction([_i],e?"readwrite":"readonly").objectStore(_i)}function Nw(){const n=indexedDB.deleteDatabase(gf);return new gs(n).toPromise()}function ta(){const n=indexedDB.open(gf,xw);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(_i,{keyPath:_f})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(_i)?e(r):(r.close(),await Nw(),e(await ta()))})})}async function Cu(n,e,t){const r=Ui(n,!0).put({[_f]:e,value:t});return new gs(r).toPromise()}async function Dw(n,e){const t=Ui(n,!1).get(e),r=await new gs(t).toPromise();return r===void 0?null:r.value}function ku(n,e){const t=Ui(n,!0).delete(e);return new gs(t).toPromise()}const Vw=800,Ow=3;class yf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ta(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Ow)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return mf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Mi._getInstance(kw()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await Pw(),!this.activeServiceWorker)return;this.sender=new Rw(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Cw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ta();return await Cu(e,gi,"1"),await ku(e,gi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Cu(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Dw(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ku(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ui(s,!1).getAll();return new gs(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Vw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}yf.type="LOCAL";const Lw=yf;new ps(3e4,6e4);/**
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
 */function vf(n,e){return e?kt(e):(G(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class sc extends lf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Zn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Zn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Mw(n){return _w(n.auth,new sc(n),n.bypassAuthState)}function Uw(n){const{auth:e,user:t}=n;return G(t,e,"internal-error"),gw(t,new sc(n),n.bypassAuthState)}async function Fw(n){const{auth:e,user:t}=n;return G(t,e,"internal-error"),mw(t,new sc(n),n.bypassAuthState)}/**
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
 */class wf{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Mw;case"linkViaPopup":case"linkViaRedirect":return Fw;case"reauthViaPopup":case"reauthViaRedirect":return Uw;default:It(this.auth,"internal-error")}}resolve(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Bw=new ps(2e3,1e4);async function $w(n,e,t){if(Je(n.app))return Promise.reject(it(n,"operation-not-supported-in-this-environment"));const r=Li(n);Ov(n,e,nc);const s=vf(r,t);return new wn(r,"signInViaPopup",e,s).executeNotNull()}class wn extends wf{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,wn.currentPopupAction&&wn.currentPopupAction.cancel(),wn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Mt(this.filter.length===1,"Popup operations only handle one event");const e=rc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(it(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(it(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(it(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Bw.get())};e()}}wn.currentPopupAction=null;/**
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
 */const qw="pendingRedirect",Ys=new Map;class jw extends wf{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ys.get(this.auth._key());if(!e){try{const r=await zw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ys.set(this.auth._key(),e)}return this.bypassAuthState||Ys.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zw(n,e){const t=Gw(e),r=Ww(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Hw(n,e){Ys.set(n._key(),e)}function Ww(n){return kt(n._redirectPersistence)}function Gw(n){return Xs(qw,n.config.apiKey,n.name)}async function Kw(n,e,t=!1){if(Je(n.app))return Promise.reject(An(n));const r=Li(n),s=vf(r,e),a=await new jw(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const Qw=10*60*1e3;class Xw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Yw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Ef(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(it(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Qw&&this.cachedEventUids.clear(),this.cachedEventUids.has(xu(e))}saveEventToCache(e){this.cachedEventUids.add(xu(e)),this.lastProcessedEventTime=Date.now()}}function xu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ef({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Yw(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ef(n);default:return!1}}/**
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
 */async function Jw(n,e={}){return pr(n,"GET","/v1/projects",e)}/**
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
 */const Zw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,eE=/^https?/;async function tE(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Jw(n);for(const t of e)try{if(nE(t))return}catch{}It(n,"unauthorized-domain")}function nE(n){const e=Zo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!eE.test(t))return!1;if(Zw.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const rE=new ps(3e4,6e4);function Nu(){const n=vt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function sE(n){return new Promise((e,t)=>{var s,i,a;function r(){Nu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Nu(),t(it(n,"network-request-failed"))},timeout:rE.get()})}if((i=(s=vt().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=vt().gapi)!=null&&a.load)r();else{const c=cw("iframefcb");return vt()[c]=()=>{gapi.load?r():t(it(n,"network-request-failed"))},ow(`${aw()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw Js=null,e})}let Js=null;function iE(n){return Js=Js||sE(n),Js}/**
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
 */const oE=new ps(5e3,15e3),aE="__/auth/iframe",cE="emulator/auth/iframe",lE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hE(n){const e=n.config;G(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ya(e,cE):`https://${n.config.authDomain}/${aE}`,r={apiKey:e.apiKey,appName:n.name,v:Vn},s=uE.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${is(r).slice(1)}`}async function dE(n){const e=await iE(n),t=vt().gapi;return G(t,n,"internal-error"),e.open({where:document.body,url:hE(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lE,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=it(n,"network-request-failed"),c=vt().setTimeout(()=>{i(a)},oE.get());function u(){vt().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const fE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pE=500,mE=600,gE="_blank",_E="http://localhost";class Du{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yE(n,e,t,r=pE,s=mE){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u={...fE,width:r.toString(),height:s.toString(),top:i,left:a},d=Ue().toLowerCase();t&&(c=ef(d)?gE:t),Jd(d)&&(e=e||_E,u.scrollbars="yes");const f=Object.entries(u).reduce((E,[A,k])=>`${E}${A}=${k},`,"");if(Jv(d)&&c!=="_self")return vE(e||"",c),new Du(null);const m=window.open(e||"",c,f);G(m,n,"popup-blocked");try{m.focus()}catch{}return new Du(m)}function vE(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const wE="__/auth/handler",EE="emulator/auth/handler",TE=encodeURIComponent("fac");async function Vu(n,e,t,r,s,i){G(n.config.authDomain,n,"auth-domain-config-required"),G(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Vn,eventId:s};if(e instanceof nc){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",nm(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))a[f]=m}if(e instanceof ms){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const u=await n._getAppCheckToken(),d=u?`#${TE}=${encodeURIComponent(u)}`:"";return`${IE(n)}?${is(c).slice(1)}${d}`}function IE({config:n}){return n.emulator?Ya(n,EE):`https://${n.authDomain}/${wE}`}/**
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
 */const Ro="webStorageSupport";class bE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pf,this._completeRedirectFn=Kw,this._overrideRedirectResult=Hw}async _openPopup(e,t,r,s){var a;Mt((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await Vu(e,t,r,Zo(),s);return yE(e,i,rc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Vu(e,t,r,Zo(),s);return Sw(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Mt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await dE(e),r=new Xw(e);return t.register("authEvent",s=>(G(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ro,{type:Ro},s=>{var a;const i=(a=s==null?void 0:s[0])==null?void 0:a[Ro];i!==void 0&&t(!!i),It(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=tE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return of()||Zd()||ec()}}const AE=bE;var Ou="@firebase/auth",Lu="1.12.0";/**
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
 */class RE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function SE(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function PE(n){Pn(new tn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;G(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:af(n)},d=new sw(r,s,i,u);return uw(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Pn(new tn("auth-internal",e=>{const t=Li(e.getProvider("auth").getImmediate());return(r=>new RE(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ft(Ou,Lu,SE(n)),ft(Ou,Lu,"esm2020")}/**
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
 */const CE=5*60,kE=oh("authIdTokenMaxAge")||CE;let Mu=null;const xE=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>kE)return;const s=t==null?void 0:t.token;Mu!==s&&(Mu=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function NE(n=ha()){const e=vi(n,"auth");if(e.isInitialized())return e.getImmediate();const t=lw(n,{popupRedirectResolver:AE,persistence:[Lw,bw,pf]}),r=oh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=xE(i.toString());vw(t,a,()=>a(t.currentUser)),yw(t,c=>a(c))}}const s=rh("auth");return s&&hw(t,`http://${s}`),t}function DE(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}iw({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=it("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",DE().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});PE("Browser");/**
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
 */const Tf="firebasestorage.googleapis.com",If="storageBucket",VE=2*60*1e3,OE=10*60*1e3;/**
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
 */class ye extends Rt{constructor(e,t,r=0){super(So(e),`Firebase Storage: ${t} (${So(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ye.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return So(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var _e;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(_e||(_e={}));function So(n){return"storage/"+n}function ic(){const n="An unknown error occurred, please check the error payload for server response.";return new ye(_e.UNKNOWN,n)}function LE(n){return new ye(_e.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function ME(n){return new ye(_e.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function UE(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ye(_e.UNAUTHENTICATED,n)}function FE(){return new ye(_e.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function BE(n){return new ye(_e.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function $E(){return new ye(_e.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function qE(){return new ye(_e.CANCELED,"User canceled the upload/download.")}function jE(n){return new ye(_e.INVALID_URL,"Invalid URL '"+n+"'.")}function zE(n){return new ye(_e.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function HE(){return new ye(_e.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+If+"' property when initializing the app?")}function WE(){return new ye(_e.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function GE(){return new ye(_e.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function KE(n){return new ye(_e.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function na(n){return new ye(_e.INVALID_ARGUMENT,n)}function bf(){return new ye(_e.APP_DELETED,"The Firebase app was deleted.")}function QE(n){return new ye(_e.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function jr(n,e){return new ye(_e.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Nr(n){throw new ye(_e.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class Ye{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Ye.makeFromUrl(e,t)}catch{return new Ye(e,"")}if(r.path==="")return r;throw zE(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(Q){Q.path.charAt(Q.path.length-1)==="/"&&(Q.path_=Q.path_.slice(0,-1))}const a="(/(.*))?$",c=new RegExp("^gs://"+s+a,"i"),u={bucket:1,path:3};function d(Q){Q.path_=decodeURIComponent(Q.path)}const f="v[A-Za-z0-9_]+",m=t.replace(/[.]/g,"\\."),E="(/([^?#]*).*)?$",A=new RegExp(`^https?://${m}/${f}/b/${s}/o${E}`,"i"),k={bucket:1,path:3},x=t===Tf?"(?:storage.googleapis.com|storage.cloud.google.com)":t,C="([^?#]*)",z=new RegExp(`^https?://${x}/${s}/${C}`,"i"),j=[{regex:c,indices:u,postModify:i},{regex:A,indices:k,postModify:d},{regex:z,indices:{bucket:1,path:2},postModify:d}];for(let Q=0;Q<j.length;Q++){const le=j[Q],se=le.regex.exec(e);if(se){const T=se[le.indices.bucket];let g=se[le.indices.path];g||(g=""),r=new Ye(T,g),le.postModify(r);break}}if(r==null)throw jE(e);return r}}class XE{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function YE(n,e,t){let r=1,s=null,i=null,a=!1,c=0;function u(){return c===2}let d=!1;function f(...C){d||(d=!0,e.apply(null,C))}function m(C){s=setTimeout(()=>{s=null,n(A,u())},C)}function E(){i&&clearTimeout(i)}function A(C,...z){if(d){E();return}if(C){E(),f.call(null,C,...z);return}if(u()||a){E(),f.call(null,C,...z);return}r<64&&(r*=2);let j;c===1?(c=2,j=0):j=(r+Math.random())*1e3,m(j)}let k=!1;function x(C){k||(k=!0,E(),!d&&(s!==null?(C||(c=2),clearTimeout(s),m(0)):C||(c=1)))}return m(0),i=setTimeout(()=>{a=!0,x(!0)},t),x}function JE(n){n(!1)}/**
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
 */function ZE(n){return n!==void 0}function eT(n){return typeof n=="object"&&!Array.isArray(n)}function oc(n){return typeof n=="string"||n instanceof String}function Uu(n){return ac()&&n instanceof Blob}function ac(){return typeof Blob<"u"}function Fu(n,e,t,r){if(r<e)throw na(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw na(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function cc(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function Af(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var Rn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Rn||(Rn={}));/**
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
 */function tT(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
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
 */class nT{constructor(e,t,r,s,i,a,c,u,d,f,m,E=!0,A=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=c,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=f,this.connectionFactory_=m,this.retry=E,this.isUsingEmulator=A,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((k,x)=>{this.resolve_=k,this.reject_=x,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Us(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=c=>{const u=c.loaded,d=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const c=i.getErrorCode()===Rn.NO_ERROR,u=i.getStatus();if(!c||tT(u,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===Rn.ABORT;r(!1,new Us(!1,null,f));return}const d=this.successCodes_.indexOf(u)!==-1;r(!0,new Us(d,i))})},t=(r,s)=>{const i=this.resolve_,a=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(c,c.getResponse());ZE(u)?i(u):i()}catch(u){a(u)}else if(c!==null){const u=ic();u.serverResponse=c.getErrorText(),this.errorCallback_?a(this.errorCallback_(c,u)):a(u)}else if(s.canceled){const u=this.appDelete_?bf():qE();a(u)}else{const u=$E();a(u)}};this.canceled_?t(!1,new Us(!1,null,!0)):this.backoffId_=YE(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&JE(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Us{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function rT(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function sT(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function iT(n,e){e&&(n["X-Firebase-GMPID"]=e)}function oT(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function aT(n,e,t,r,s,i,a=!0,c=!1){const u=Af(n.urlParams),d=n.url+u,f=Object.assign({},n.headers);return iT(f,e),rT(f,t),sT(f,i),oT(f,r),new nT(d,n.method,f,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,a,c)}/**
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
 */function cT(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function lT(...n){const e=cT();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(ac())return new Blob(n);throw new ye(_e.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function uT(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function hT(n){if(typeof atob>"u")throw KE("base-64");return atob(n)}/**
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
 */const ht={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Po{constructor(e,t){this.data=e,this.contentType=t||null}}function dT(n,e){switch(n){case ht.RAW:return new Po(Rf(e));case ht.BASE64:case ht.BASE64URL:return new Po(Sf(n,e));case ht.DATA_URL:return new Po(pT(e),mT(e))}throw ic()}function Rf(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,a=n.charCodeAt(++t);r=65536|(i&1023)<<10|a&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function fT(n){let e;try{e=decodeURIComponent(n)}catch{throw jr(ht.DATA_URL,"Malformed data URL.")}return Rf(e)}function Sf(n,e){switch(n){case ht.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw jr(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case ht.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw jr(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=hT(e)}catch(s){throw s.message.includes("polyfill")?s:jr(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class Pf{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw jr(ht.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=gT(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function pT(n){const e=new Pf(n);return e.base64?Sf(ht.BASE64,e.rest):fT(e.rest)}function mT(n){return new Pf(n).contentType}function gT(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class Qt{constructor(e,t){let r=0,s="";Uu(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(Uu(this.data_)){const r=this.data_,s=uT(r,e,t);return s===null?null:new Qt(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new Qt(r,!0)}}static getBlob(...e){if(ac()){const t=e.map(r=>r instanceof Qt?r.data_:r);return new Qt(lT.apply(null,t))}else{const t=e.map(a=>oc(a)?dT(ht.RAW,a).data:a.data_);let r=0;t.forEach(a=>{r+=a.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(a=>{for(let c=0;c<a.length;c++)s[i++]=a[c]}),new Qt(s,!0)}}uploadData(){return this.data_}}/**
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
 */function Cf(n){let e;try{e=JSON.parse(n)}catch{return null}return eT(e)?e:null}/**
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
 */function _T(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function yT(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function kf(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function vT(n,e){return e}class qe{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||vT}}let Fs=null;function wT(n){return!oc(n)||n.length<2?n:kf(n)}function xf(){if(Fs)return Fs;const n=[];n.push(new qe("bucket")),n.push(new qe("generation")),n.push(new qe("metageneration")),n.push(new qe("name","fullPath",!0));function e(i,a){return wT(a)}const t=new qe("name");t.xform=e,n.push(t);function r(i,a){return a!==void 0?Number(a):a}const s=new qe("size");return s.xform=r,n.push(s),n.push(new qe("timeCreated")),n.push(new qe("updated")),n.push(new qe("md5Hash",null,!0)),n.push(new qe("cacheControl",null,!0)),n.push(new qe("contentDisposition",null,!0)),n.push(new qe("contentEncoding",null,!0)),n.push(new qe("contentLanguage",null,!0)),n.push(new qe("contentType",null,!0)),n.push(new qe("metadata","customMetadata",!0)),Fs=n,Fs}function ET(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new Ye(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function TT(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const a=t[i];r[a.local]=a.xform(r,e[a.server])}return ET(r,n),r}function Nf(n,e,t){const r=Cf(e);return r===null?null:TT(n,r,t)}function IT(n,e,t,r){const s=Cf(e);if(s===null||!oc(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const a=encodeURIComponent;return i.split(",").map(d=>{const f=n.bucket,m=n.fullPath,E="/b/"+a(f)+"/o/"+a(m),A=cc(E,t,r),k=Af({alt:"media",token:d});return A+k})[0]}function bT(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class Df{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Vf(n){if(!n)throw ic()}function AT(n,e){function t(r,s){const i=Nf(n,s,e);return Vf(i!==null),i}return t}function RT(n,e){function t(r,s){const i=Nf(n,s,e);return Vf(i!==null),IT(i,s,n.host,n._protocol)}return t}function Of(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=FE():s=UE():t.getStatus()===402?s=ME(n.bucket):t.getStatus()===403?s=BE(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function ST(n){const e=Of(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=LE(n.path)),i.serverResponse=s.serverResponse,i}return t}function PT(n,e,t){const r=e.fullServerUrl(),s=cc(r,n.host,n._protocol),i="GET",a=n.maxOperationRetryTime,c=new Df(s,i,RT(n,t),a);return c.errorHandler=ST(e),c}function CT(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function kT(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=CT(null,e)),r}function xT(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function c(){let j="";for(let Q=0;Q<2;Q++)j=j+Math.random().toString().slice(2);return j}const u=c();a["Content-Type"]="multipart/related; boundary="+u;const d=kT(e,r,s),f=bT(d,t),m="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+u+`\r
Content-Type: `+d.contentType+`\r
\r
`,E=`\r
--`+u+"--",A=Qt.getBlob(m,r,E);if(A===null)throw WE();const k={name:d.fullPath},x=cc(i,n.host,n._protocol),C="POST",z=n.maxUploadRetryTime,H=new Df(x,C,AT(n,t),z);return H.urlParams=k,H.headers=a,H.body=A.uploadData(),H.errorHandler=Of(e),H}class NT{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Rn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Rn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Rn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s,i){if(this.sent_)throw Nr("cannot .send() more than once");if(ln(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const a in i)i.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,i[a].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Nr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Nr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Nr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Nr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class DT extends NT{initXhr(){this.xhr_.responseType="text"}}function Lf(){return new DT}/**
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
 */class Dn{constructor(e,t){this._service=e,t instanceof Ye?this._location=t:this._location=Ye.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Dn(e,t)}get root(){const e=new Ye(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return kf(this._location.path)}get storage(){return this._service}get parent(){const e=_T(this._location.path);if(e===null)return null;const t=new Ye(this._location.bucket,e);return new Dn(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw QE(e)}}function VT(n,e,t){n._throwIfRoot("uploadBytes");const r=xT(n.storage,n._location,xf(),new Qt(e,!0),t);return n.storage.makeRequestWithTokens(r,Lf).then(s=>({metadata:s,ref:n}))}function OT(n){n._throwIfRoot("getDownloadURL");const e=PT(n.storage,n._location,xf());return n.storage.makeRequestWithTokens(e,Lf).then(t=>{if(t===null)throw GE();return t})}function LT(n,e){const t=yT(n._location.path,e),r=new Ye(n._location.bucket,t);return new Dn(n.storage,r)}/**
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
 */function MT(n){return/^[A-Za-z]+:\/\//.test(n)}function UT(n,e){return new Dn(n,e)}function Mf(n,e){if(n instanceof lc){const t=n;if(t._bucket==null)throw HE();const r=new Dn(t,t._bucket);return e!=null?Mf(r,e):r}else return e!==void 0?LT(n,e):n}function FT(n,e){if(e&&MT(e)){if(n instanceof lc)return UT(n,e);throw na("To use ref(service, url), the first argument must be a Storage instance.")}else return Mf(n,e)}function Bu(n,e){const t=e==null?void 0:e[If];return t==null?null:Ye.makeFromBucketSpec(t,n)}function BT(n,e,t,r={}){n.host=`${e}:${t}`;const s=ln(e);s&&(aa(`https://${n.host}/b`),ca("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:ah(i,n.app.options.projectId))}class lc{constructor(e,t,r,s,i,a=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=a,this._bucket=null,this._host=Tf,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=VE,this._maxUploadRetryTime=OE,this._requests=new Set,s!=null?this._bucket=Ye.makeFromBucketSpec(s,this._host):this._bucket=Bu(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ye.makeFromBucketSpec(this._url,e):this._bucket=Bu(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Fu("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Fu("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Je(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Dn(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new XE(bf());{const a=aT(e,this._appId,r,s,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const $u="@firebase/storage",qu="0.14.0";/**
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
 */const Uf="storage";function $T(n,e,t){return n=fe(n),VT(n,e,t)}function qT(n){return n=fe(n),OT(n)}function jT(n,e){return n=fe(n),FT(n,e)}function zT(n=ha(),e){n=fe(n);const r=vi(n,Uf).getImmediate({identifier:e}),s=sh("storage");return s&&HT(r,...s),r}function HT(n,e,t,r={}){BT(n,e,t,r)}function WT(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new lc(t,r,s,e,Vn)}function GT(){Pn(new tn(Uf,WT,"PUBLIC").setMultipleInstances(!0)),ft($u,qu,""),ft($u,qu,"esm2020")}GT();const KT={apiKey:"AIzaSyAy96lQqZuRueG_ZeABFzDJwqYuZZA4Fgw",authDomain:"the-spraywall-cellar.firebaseapp.com",projectId:"the-spraywall-cellar",storageBucket:"the-spraywall-cellar.firebasestorage.app",messagingSenderId:"491245667170",appId:"1:491245667170:web:5da5f8bcfc245c09b2a23b"},uc=uh(KT),er=pv(uc),ra=NE(uc),QT=new Pt,XT=zT(uc),Ff="boards",YT="boulders",Bf=ar(er,"config","climbers");function JT(n=new Date){const e=n.getFullYear(),t=String(n.getMonth()+1).padStart(2,"0"),r=String(n.getDate()).padStart(2,"0");return`v${e}${t}${r}`}function ZT(n){const e=Iv(Ma(er,Ff),bv("version","desc"));return Ka(e,t=>{const r=t.docs.map(s=>s.data());r.sort((s,i)=>s.version!==i.version?s.version<i.version?1:-1:i.createdAt-s.createdAt),n(r,r[0]??null)},t=>{console.error("Error subscribing to boards:",t)})}async function eI(n,e){const t=`boards/${e}.jpg`,r=jT(XT,t);await $T(r,n,{contentType:n.type||"image/jpeg"});const s=await qT(r),{width:i,height:a}=await tI(n);return{url:s,path:t,width:i,height:a}}function tI(n){return new Promise((e,t)=>{const r=URL.createObjectURL(n),s=new Image;s.onload=()=>{const i={width:s.naturalWidth,height:s.naturalHeight};URL.revokeObjectURL(r),e(i)},s.onerror=()=>{URL.revokeObjectURL(r),t(new Error("Failed to read image dimensions"))},s.src=r})}function Fi(n){return Ma(er,Ff,n,YT)}async function sa(n,e){try{await zd(ar(Fi(n),e.id),e)}catch(t){throw console.error("Failed to save boulder:",t),new Error("Failed to save boulder. Check your connection.")}}function nI(n,e){return Ka(Fi(n),t=>{const r=[];t.forEach(s=>r.push(s.data())),e(r)},t=>{console.error("Error subscribing to boulders:",t)})}async function rI(n,e){try{await Pv(ar(Fi(n),e))}catch(t){throw console.error("Failed to delete boulder:",t),new Error("Failed to delete boulder. Check your connection.")}}async function sI(n,e,t,r){try{await Sv(ar(Fi(n),e),{[`ticks.${t}`]:r?Date.now():xv()})}catch(s){throw console.error("Failed to update tick:",s),new Error("Failed to update tick. Check your connection.")}}function iI(n){return Ka(Bf,e=>{var t;n(((t=e.data())==null?void 0:t.climbers)??[])},e=>{console.error("Error subscribing to climbers:",e)})}async function oI(n){try{await zd(Bf,{climbers:n})}catch(e){throw console.error("Failed to save climbers:",e),new Error("Failed to save climbers. Check your connection.")}}function aI(n,e){if(n.length!==4||e.length!==4)throw new Error(`computeHomography requires exactly 4 point pairs (got ${n.length}/${e.length})`);const t=[],r=[];for(let i=0;i<4;i++){const{x:a,y:c}=n[i],{x:u,y:d}=e[i];t.push([a,c,1,0,0,0,-a*u,-c*u]),r.push(u),t.push([0,0,0,a,c,1,-a*d,-c*d]),r.push(d)}const s=lI(t,r);return[[s[0],s[1],s[2]],[s[3],s[4],s[5]],[s[6],s[7],1]]}function $f(n,e){const t=n[0][0]*e.x+n[0][1]*e.y+n[0][2],r=n[1][0]*e.x+n[1][1]*e.y+n[1][2],s=n[2][0]*e.x+n[2][1]*e.y+n[2][2];return{x:t/s,y:r/s}}function cI(n,e){return n.map(t=>{const{x:r,y:s}=$f(e,{x:t.x/100,y:t.y/100});return{...t,x:r*100,y:s*100}})}function lI(n,e){const t=n.length,r=n.map((i,a)=>[...i,e[a]]);for(let i=0;i<t;i++){let a=i,c=Math.abs(r[i][i]);for(let u=i+1;u<t;u++){const d=Math.abs(r[u][i]);d>c&&(c=d,a=u)}if(c<1e-12)throw new Error("Singular matrix in homography solver — pick 4 non-collinear points");if(a!==i){const u=r[i];r[i]=r[a],r[a]=u}for(let u=i+1;u<t;u++){const d=r[u][i]/r[i][i];if(d!==0)for(let f=i;f<=t;f++)r[u][f]-=d*r[i][f]}}const s=new Array(t).fill(0);for(let i=t-1;i>=0;i--){let a=r[i][t];for(let c=i+1;c<t;c++)a-=r[i][c]*s[c];s[i]=a/r[i][i]}return s}const rt=4,uI=["#f97316","#22c55e","#3b82f6","#ec4899"];function hI(n){const{currentBoard:e,currentBoulders:t}=n;let r=1,s=null,i=null;const a=[],c=[];let u=null,d=!1;const f=document.createElement("div");f.className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-2 md:p-4 overflow-y-auto",f.innerHTML=`
    <div class="bg-gray-900 text-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[95vh] overflow-y-auto p-4 md:p-6">
      <div class="mb-4">
        <h2 class="text-xl md:text-2xl font-bold">Upload new spraywall image &amp; recalibrate</h2>
        <p id="step-title" class="text-sm text-gray-300 mt-1 font-medium"></p>
        <p id="step-help" class="text-sm text-gray-400"></p>
      </div>

      <!-- Step 1: file picker -->
      <div data-step="1" class="step hidden">
        <label class="block text-sm font-medium mb-2">New spraywall photo</label>
        <input id="image-input" type="file" accept="image/*"
          class="block w-full text-sm text-gray-300 file:mr-3 file:py-2 file:px-3 file:rounded file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700" />
      </div>

      <!-- Step 2: click 4 points on NEW image -->
      <div data-step="2" class="step hidden">
        <div class="text-sm text-gray-300 mb-2" id="counter-new"></div>
        <div class="relative inline-block w-full bg-black">
          <img id="new-img" src="" class="block w-full h-auto select-none" />
          <div id="new-overlay" class="absolute inset-0 cursor-crosshair"></div>
        </div>
      </div>

      <!-- Step 3: click same 4 points on CURRENT image -->
      <div data-step="3" class="step hidden">
        <div class="text-sm text-gray-300 mb-2" id="counter-old"></div>
        <div class="relative inline-block w-full bg-black">
          <img id="old-img" src="" class="block w-full h-auto select-none" />
          <div id="old-overlay" class="absolute inset-0 cursor-crosshair"></div>
        </div>
      </div>

      <!-- Step 4: confirmation with preview -->
      <div data-step="4" class="step hidden">
        <p class="text-xs text-gray-400 mb-1">
          Preview: existing boulders' holds remapped onto the new image. Verify alignment, then confirm.
        </p>
        <div class="relative inline-block w-full bg-black">
          <img id="preview-img" src="" class="block w-full h-auto select-none" />
          <div id="preview-overlay" class="absolute inset-0 pointer-events-none"></div>
        </div>
      </div>

      <div class="flex flex-wrap gap-2 mt-4">
        <button id="btn-back" class="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-sm hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-700">&larr; Back</button>
        <button id="btn-reset" class="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-sm hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-700">Reset points</button>
        <button id="btn-next" class="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded text-sm hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600">Next &rarr;</button>
        <button id="btn-confirm" class="px-4 py-2 bg-emerald-700 hover:bg-emerald-600 rounded text-sm hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-emerald-700">
          Confirm recalibration
        </button>
        <button id="btn-cancel" class="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-sm ml-auto disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-700">Cancel</button>
      </div>

      <div id="status" class="mt-3 text-sm text-yellow-400"></div>
    </div>
  `,document.body.appendChild(f);const m=L=>f.querySelector(L),E=m("#step-title"),A=m("#step-help"),k=Array.from(f.querySelectorAll(".step")),x=m("#image-input"),C=m("#new-img"),z=m("#old-img"),H=m("#preview-img"),j=m("#new-overlay"),Q=m("#old-overlay"),le=m("#preview-overlay"),se=m("#counter-new"),T=m("#counter-old"),g=m("#btn-back"),_=m("#btn-reset"),v=m("#btn-next"),w=m("#btn-confirm"),I=m("#btn-cancel"),y=m("#status");function oe(L,N="info"){y.textContent=L,y.className="mt-3 text-sm "+(N==="error"?"text-red-400":N==="success"?"text-green-400":"text-yellow-400")}function je(){i&&URL.revokeObjectURL(i),f.remove()}function et(L){switch(r=L,k.forEach(N=>{N.classList.toggle("hidden",N.dataset.step!==String(L))}),E.textContent=`Step ${L} of 4`,oe(""),g.classList.add("hidden"),_.classList.add("hidden"),v.classList.add("hidden"),w.classList.add("hidden"),L){case 1:A.textContent="Choose the new spraywall photo from your device. Nothing is uploaded yet.";break;case 2:A.textContent=`Click ${rt} distinct, easily-identifiable holds on the NEW image. Remember which ones — you'll click the same holds on the current image next.`,g.classList.remove("hidden"),_.classList.toggle("hidden",a.length===0),a.length===rt&&v.classList.remove("hidden"),tt("new"),Ge(j,a);break;case 3:A.textContent=`Now click the SAME ${rt} holds on the CURRENT board image, in the SAME order.`,g.classList.remove("hidden"),_.classList.toggle("hidden",c.length===0),c.length===rt&&v.classList.remove("hidden"),tt("old"),Ge(Q,c);break;case 4:A.textContent="Review the transformed boulder positions on the new image. Confirm to upload and save.",g.classList.remove("hidden"),w.classList.remove("hidden"),B();break}}function tt(L){const N=L==="new"?se:T,$=L==="new"?a:c;N.textContent=`${$.length}/${rt} points`}function Ge(L,N){L.innerHTML="",N.forEach(($,U)=>{const J=document.createElement("div");J.style.position="absolute",J.style.left=`${$.x}%`,J.style.top=`${$.y}%`,J.style.width="18px",J.style.height="18px",J.style.transform="translate(-50%, -50%)",J.style.borderRadius="50%",J.style.background=uI[U]??"#fff",J.style.border="2px solid white",J.style.color="white",J.style.fontSize="11px",J.style.fontWeight="bold",J.style.display="flex",J.style.alignItems="center",J.style.justifyContent="center",J.style.pointerEvents="none",J.textContent=String(U+1),L.appendChild(J)})}function V(L,N){const $=L.getBoundingClientRect(),U=(N.clientX-$.left)/$.width*100,J=(N.clientY-$.top)/$.height*100;return{x:ju(U,0,100),y:ju(J,0,100)}}function B(){try{const N=c.map(U=>({x:U.x/100,y:U.y/100})),$=a.map(U=>({x:U.x/100,y:U.y/100}));u=aI(N,$)}catch(N){oe(N instanceof Error?N.message:"Failed to compute transform","error"),u=null,w.classList.add("hidden");return}le.innerHTML="";let L=0;for(const N of t)for(const $ of N.holds){const{x:U,y:J}=$f(u,{x:$.x/100,y:$.y/100}),Ee=U*100,Fe=J*100;if(Ee<-5||Ee>105||Fe<-5||Fe>105)continue;L++;const me=document.createElement("div");me.style.position="absolute",me.style.left=`${Ee}%`,me.style.top=`${Fe}%`,me.style.width="10px",me.style.height="10px",me.style.transform="translate(-50%, -50%)",me.style.borderRadius="50%",me.style.background=dI($),me.style.opacity="0.85",me.style.border="1px solid black",le.appendChild(me)}oe(`${L} hold${L===1?"":"s"} mapped onto the new image. Confirm if alignment looks correct.`,"info")}async function Y(){if(d)return;if(!u||!s){oe("Missing transform or image — go back and re-pick points.","error");return}d=!0,w.disabled=!0,g.disabled=!0,I.disabled=!0,oe("Uploading image…","info");const L=Date.now(),N=JT(new Date(L)),$=`${L}_${N}`;try{const{url:U,path:J,width:Ee,height:Fe}=await eI(s,$);oe("Writing board & boulders…","info");const me={id:$,version:N,createdAt:L,updatedAt:L,recalibrated:!0,imageUrl:U,imagePath:J,imageWidth:Ee,imageHeight:Fe},Ke=Nv(er);Ke.set(ar(er,"boards",$),me);const nt=Ma(er,"boards",$,"boulders");for(const at of t){const St=cI(at.holds,u);Ke.set(ar(nt,at.id),{...at,holds:St,updatedAt:L})}await Ke.commit(),oe("Done! New board is live.","success"),setTimeout(je,600)}catch(U){console.error("Recalibration commit failed:",U),oe(U instanceof Error?`Failed: ${U.message}`:"Failed to save new board. Check console.","error"),d=!1,w.disabled=!1,g.disabled=!1,I.disabled=!1}}I.addEventListener("click",je),g.addEventListener("click",()=>{r>1&&et(r-1)}),_.addEventListener("click",()=>{r===2?(a.length=0,Ge(j,a),tt("new"),_.classList.add("hidden"),v.classList.add("hidden")):r===3&&(c.length=0,Ge(Q,c),tt("old"),_.classList.add("hidden"),v.classList.add("hidden"))}),v.addEventListener("click",()=>{r===1&&s?et(2):r===2&&a.length===rt?et(3):r===3&&c.length===rt&&et(4)}),w.addEventListener("click",Y),x.addEventListener("change",async()=>{var N;const L=(N=x.files)==null?void 0:N[0];if(L){if(!L.type.startsWith("image/")){oe("Please select an image file.","error");return}i&&URL.revokeObjectURL(i),s=L,i=URL.createObjectURL(L),C.src=i,H.src=i,z.src=e.imageUrl,await Promise.all([zu(C),zu(z)]),v.classList.remove("hidden"),oe('Image loaded. Click "Next" to start picking reference holds.',"info")}}),j.addEventListener("click",L=>{a.length>=rt||(a.push(V(j,L)),Ge(j,a),tt("new"),_.classList.remove("hidden"),a.length===rt&&v.classList.remove("hidden"))}),Q.addEventListener("click",L=>{c.length>=rt||(c.push(V(Q,L)),Ge(Q,c),tt("old"),_.classList.remove("hidden"),c.length===rt&&v.classList.remove("hidden"))}),et(1)}function ju(n,e,t){return Math.max(e,Math.min(t,n))}function zu(n){return new Promise(e=>{n.complete&&n.naturalWidth>0?e():(n.addEventListener("load",()=>e(),{once:!0}),n.addEventListener("error",()=>e(),{once:!0}))})}function dI(n){switch(n.type){case"start":return"#16a34a";case"feet-only":return"#eab308";case"middle":return"#ffffff";case"top":return"#ef4444"}}function Kn(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Bs(n){return n.trim().toLowerCase()}function fI(n){const e=n.map(f=>({...f}));let t=!1;const r=document.createElement("div");r.className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-2 md:p-4",r.innerHTML=`
    <div class="bg-gray-900 text-white rounded-lg shadow-2xl w-full max-w-sm max-h-[90vh] overflow-y-auto p-4">
      <h2 class="text-lg font-bold mb-3">Climbers</h2>
      <div id="climbers-rows" class="space-y-2 mb-3"></div>
      <div class="flex gap-2 mb-4">
        <input id="climber-new" type="text" maxlength="40" placeholder="New climber name"
          class="flex-1 px-3 py-2 bg-gray-700 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <button id="climber-add" class="px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm font-medium">Add</button>
      </div>
      <div class="flex gap-2">
        <button id="climbers-save" class="flex-1 px-4 py-2 bg-emerald-800 hover:bg-emerald-900 rounded font-medium text-sm disabled:opacity-50">Save</button>
        <button id="climbers-cancel" class="flex-1 px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded font-medium text-sm">Cancel</button>
      </div>
    </div>
  `,document.body.appendChild(r);const s=r.querySelector("#climbers-rows"),i=r.querySelector("#climber-new");function a(){s.innerHTML=e.length===0?'<p class="text-sm text-gray-500">No climbers yet.</p>':e.map((f,m)=>`
        <div class="flex gap-2 items-center">
          <input type="text" maxlength="40" value="${Kn(f.name)}" data-climber-index="${m}"
            class="flex-1 px-3 py-2 bg-gray-700 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button data-remove-index="${m}" class="p-2 text-red-400 hover:text-red-300" title="Remove">✕</button>
        </div>
      `).join("")}function c(){r.remove()}function u(){const f=i.value.trim();if(f){if(e.some(m=>Bs(m.name)===Bs(f))){alert(`${f} is already on the list.`);return}e.push({id:`${Date.now()}-${Math.random().toString(36).slice(2,8)}`,name:f}),i.value="",a(),i.focus()}}s.addEventListener("input",f=>{const m=f.target,E=m.dataset.climberIndex;E!==void 0&&(e[Number(E)].name=m.value)}),s.addEventListener("click",f=>{const m=f.target.closest("[data-remove-index]");if(!m)return;const E=e[Number(m.dataset.removeIndex)];confirm(`Remove ${E.name}? Their ticks will no longer be shown.`)&&(e.splice(Number(m.dataset.removeIndex),1),a())}),r.querySelector("#climber-add").addEventListener("click",u),i.addEventListener("keydown",f=>{f.key==="Enter"&&u()}),r.querySelector("#climbers-cancel").addEventListener("click",c),r.addEventListener("click",f=>{f.target===r&&c()});const d=r.querySelector("#climbers-save");d.addEventListener("click",async()=>{if(t)return;const f=e.map(A=>({id:A.id,name:A.name.trim()})).filter(A=>A.name.length>0),m=new Set,E=new Set;for(const A of f)m.has(Bs(A.name))&&E.add(A.name),m.add(Bs(A.name));if(E.size>0){alert(`Duplicate climber names: ${[...E].join(", ")}`);return}t=!0,d.disabled=!0;try{await oI(f),c()}catch(A){alert("Failed to save climbers. Please check your connection."),console.error(A),t=!1,d.disabled=!1}}),a(),i.focus()}const pI="hofiisek@gmail.com";let F={boulders:[],currentBoulder:null,selectedBoulderId:null,mode:"set"},Wn=null,wt=null,ke=null,xt=null,Nt=new Set,ts=null,En=null,ae=null,hc=[],zr=null,$s=null,dt=null,qs=null,ns=[],Bi=null;const Et="Historical board is read-only. Switch to the current board to make changes.";function Ut(){return(wt==null?void 0:wt.email)===pI}function dn(){return!!ae&&ae.id===zr}const mI=["Crimps","Slopers","Pinches","Underclings","Pockets","Dyno","Technical"],ia=["5a","5a+","5b","5b+","5c","5c+","6a","6a+","6b","6b+","6c","6c+","6c+/7a","7a","7a+","7a+/b","7b","7b+","7b+/c","7c","7c+"],Hu=100,Wu=250;function qf(){return`${Date.now()}-${Math.random().toString(36).slice(2,11)}`}function Gu(n){return n?ia.indexOf(n):-1}function gI(n,e,t){const r=Date.now();return{id:qf(),name:n,grade:e,description:t,holds:[],createdAt:r,updatedAt:r}}function _I(){const n=document.querySelector("#app");n.innerHTML=`
    <div class="flex flex-col md:flex-row h-screen bg-gray-900 text-white">
      <!-- Sidebar -->
      <div class="w-full md:w-80 bg-gray-800 p-4 flex flex-col overflow-y-auto max-h-[40vh] md:max-h-none">
        <div class="mb-3">
          <h1 class="text-xl md:text-2xl font-bold mb-1">The Spraywall Cellar</h1>
          <p class="text-xs md:text-sm text-gray-400">Set boulders. Chalk the fuck up. Send it.</p>
        </div>
        ${wt?`<p class="text-xs text-gray-500 mb-3">Logged in as: ${wt.email}</p>`:'<p class="text-xs text-yellow-500 mb-3">⚠️ Login to create/edit/delete boulders</p>'}

        <!-- Mode Switcher -->
        <div class="flex gap-2 mb-4 md:mb-6 p-1 bg-gray-700 rounded-lg">
          <button id="mode-set" class="flex-1 px-3 py-3 md:py-2 rounded font-medium transition-colors text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed">
            Set boulders
          </button>
          <button id="mode-climb" class="flex-1 px-3 py-3 md:py-2 rounded font-medium transition-colors text-sm md:text-base">
            Send hard!
          </button>
        </div>

        <!-- Current Boulder Form -->
        <div id="set-mode-content">
        <div class="mb-6 p-4 bg-gray-700 rounded-lg">
          <input
            type="text"
            id="boulder-name"
            placeholder="Name"
            maxlength="100"
            class="w-full px-3 py-2 mb-2 bg-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            id="boulder-grade"
            required
            class="w-full px-3 py-2 mb-2 bg-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 invalid:text-gray-400"
          >
            <option value="" disabled selected>Grade</option>
            ${ia.map(e=>`<option value="${e}">${e}</option>`).join("")}
          </select>
          <div class="mb-2">
            <div id="boulder-rating" class="flex gap-1">
              ${[1,2,3].map(e=>`
                <button
                  type="button"
                  data-rating="${e}"
                  class="rating-star p-2 -m-1 text-gray-500 hover:text-amber-300"
                  title="${e} star${e>1?"s":""}"
                >
                  <svg class="w-7 h-7 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </button>
              `).join("")}
            </div>
          </div>
          <textarea
            id="boulder-description"
            placeholder="Description (optional)"
            rows="2"
            maxlength="250"
            class="w-full px-3 py-2 mb-3 bg-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-sm"
          ></textarea>
          <div id="boulder-tags" class="flex flex-wrap gap-2 mb-3">
            ${mI.map(e=>`
              <button type="button" data-tag="${e}" class="px-3 py-1 rounded text-sm bg-gray-600 text-gray-300 hover:bg-gray-500">${e}</button>
            `).join("")}
          </div>
          <div class="grid grid-cols-2 gap-2 mb-3">
            <button id="btn-start" class="px-3 py-3 md:py-2 bg-green-600 hover:bg-green-700 active:bg-green-800 rounded font-medium text-sm md:text-base">
              Start
            </button>
            <button id="btn-feet-only" class="px-3 py-3 md:py-2 bg-yellow-600 hover:bg-yellow-700 active:bg-yellow-800 rounded font-medium text-sm md:text-base">
              Feet Only
            </button>
            <button id="btn-middle" class="px-3 py-3 md:py-2 bg-white hover:bg-gray-200 active:bg-gray-300 text-gray-900 rounded font-medium text-sm md:text-base">
              Middle
            </button>
            <button id="btn-top" class="px-3 py-3 md:py-2 bg-red-500 hover:bg-red-600 active:bg-red-700 rounded font-medium text-sm md:text-base">
              Top
            </button>
          </div>
          <hr class="my-3 border-gray-600" />
          <div class="flex gap-2">
            <button id="btn-save" class="flex-1 px-4 py-3 md:py-2 bg-emerald-800 hover:bg-emerald-900 active:bg-emerald-950 rounded font-medium text-sm md:text-base">
              Save!
            </button>
            <button id="btn-clear" class="flex-1 px-4 py-3 md:py-2 bg-gray-600 hover:bg-gray-500 active:bg-gray-700 rounded font-medium text-sm md:text-base">
              Clear
            </button>
          </div>
        </div>
        </div>

        <!-- Boulder List -->
        <div id="climb-mode-content" class="flex-1 overflow-y-auto">
          <div class="mb-2">
            <h2 class="inline-flex items-center gap-1 bg-gray-700 rounded px-2 py-1 text-xs font-semibold text-gray-300">
              <span>Board:</span>
              ${Ut()?`
                <select id="board-version-select" class="bg-gray-700 text-gray-300 font-normal cursor-pointer outline-none">
                  <!-- populated by renderBoardSelector() -->
                </select>
              `:`
                <span id="board-version-label" class="font-normal">${ae?ae.version:"—"}</span>
              `}
              <span class="font-normal text-gray-500">(<span id="boulder-count">0</span>)</span>
              ${Ut()?`
              <button id="btn-recalibrate" class="ml-1 p-0.5 text-purple-300 hover:text-purple-200 active:text-purple-100" title="Upload new photo & recalibrate">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M12 4v12m0-12l-4 4m4-4l4 4" />
                </svg>
              </button>
              <button id="btn-climbers" class="p-0.5 text-green-300 hover:text-green-200 active:text-green-100" title="Manage climbers">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </button>
              `:""}
            </h2>
          </div>
          <div class="mb-3 flex gap-2 text-xs">
            <select id="filter-grade" class="bg-gray-700 text-gray-300 rounded px-2 py-1 outline-none cursor-pointer" title="Filter by grade">
              <option value="" ${ts===null?"selected":""}>By Grade</option>
              ${ia.map(e=>`<option value="${e}" ${ts===e?"selected":""}>${e}</option>`).join("")}
            </select>
            <select id="filter-stars" class="bg-gray-700 text-gray-300 rounded px-2 py-1 outline-none cursor-pointer" title="Filter by stars">
              <option value="" ${En===null?"selected":""}>By Stars</option>
              <option value="1" ${En===1?"selected":""}>★</option>
              <option value="2" ${En===2?"selected":""}>★★</option>
              <option value="3" ${En===3?"selected":""}>★★★</option>
            </select>
          </div>
          <div id="boulder-list" class="space-y-2">
            <!-- Boulder items will be inserted here -->
          </div>
        </div>

        <!-- Login/Logout Button -->
        <div class="mt-3 md:mt-4">
          ${wt?'<button id="logout-btn" class="w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white rounded text-sm">Logout</button>':'<button id="login-btn" class="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm">Login with Google</button>'}
        </div>
      </div>

      <!-- Main Content -->
      <div class="flex-1 bg-gray-950 p-2 md:p-3">
        <!-- Frame -->
        <div class="h-full border-4 border-gray-700 rounded-lg shadow-2xl overflow-hidden relative" style="box-shadow: inset 0 0 20px rgba(0,0,0,0.5);">
        <!-- Spraywall Image Container -->
          <div id="panzoom-container" class="spraywall-container h-full w-full flex items-center justify-center">
            <div style="position: relative; display: inline-block;">
              <img
                ${ae?`src="${ae.imageUrl}"`:""}
                alt="Spraywall"
                class="spraywall-image"
                id="spraywall-img"
                style="display: block;"
              />
              <div id="holds-overlay" class="absolute top-0 left-0 pointer-events-none" style="width: 100%; height: 100%;">
                <!-- Hold markers will be inserted here -->
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  `}function yI(){const n=document.querySelector("#panzoom-container"),e=document.querySelector("#spraywall-img");if(!n||!e)return;const t=()=>{const r=n.parentElement,s=r.clientWidth,i=r.clientHeight,a=e.clientWidth||e.naturalWidth,c=e.clientHeight||e.naturalHeight,u=s/a,d=i/c,f=Math.min(u,d),E=Math.max(u,d);Wn=Zu(n,{maxScale:5,minScale:f*.9,cursor:"grab",canvas:!0,step:.1}),Wn.zoom(E,{animate:!1}),Wn.pan(0,0,{animate:!1}),r.addEventListener("wheel",A=>{Wn&&Wn.zoomWithWheel(A,{step:.1})})};e.naturalWidth>0?t():e.addEventListener("load",t,{once:!0})}function Ku(){return Wn}function bt(){var s;const n=document.querySelector("#holds-overlay");if(!n)return;n.innerHTML="";const e=((s=F.currentBoulder)==null?void 0:s.holds)||[],t=F.boulders.find(i=>i.id===F.selectedBoulderId);((t==null?void 0:t.holds)||e).forEach(i=>{const a=document.createElement("div");a.className=`hold-marker ${i.type}`,a.style.left=`${i.x}%`,a.style.top=`${i.y}%`,a.dataset.holdId=i.id,a.addEventListener("contextmenu",c=>{c.preventDefault(),jf(i.id)}),n.appendChild(a)})}function vI(n,e,t=2){if(!F.currentBoulder)return null;for(const r of F.currentBoulder.holds){const s=Math.abs(r.x-n),i=Math.abs(r.y-e);if(Math.sqrt(s*s+i*i)<t)return r}return null}function wI(n,e){const t=document.querySelector("#spraywall-img");if(!t)return;const r=t.getBoundingClientRect(),s=(n.clientX-r.left)/r.width*100,i=(n.clientY-r.top)/r.height*100,a=vI(s,i,1);if(a){jf(a.id);return}if(!F.currentBoulder){const d=document.querySelector("#boulder-name").value.trim()||"";F.currentBoulder=gI(d)}const c={id:qf(),x:Math.max(0,Math.min(100,s)),y:Math.max(0,Math.min(100,i)),type:e};F.currentBoulder.holds.push(c),bt()}function jf(n){F.currentBoulder&&(F.currentBoulder.holds=F.currentBoulder.holds.filter(e=>e.id!==n),bt())}function $i(){const n=document.querySelector("#mode-set"),e=document.querySelector("#mode-climb"),t=document.querySelector("#set-mode-content"),r=document.querySelector("#climb-mode-content");if(!n||!e||!t||!r)return;const s="disabled:opacity-50 disabled:cursor-not-allowed";F.mode==="set"?(n.className=`flex-1 px-3 py-2 rounded font-medium transition-colors bg-blue-600 text-white ${s}`,e.className="flex-1 px-3 py-2 rounded font-medium transition-colors text-gray-300 hover:text-white",t.style.display="block",r.style.display="none"):(n.className=`flex-1 px-3 py-2 rounded font-medium transition-colors text-gray-300 hover:text-white ${s}`,e.className="flex-1 px-3 py-2 rounded font-medium transition-colors bg-blue-600 text-white",t.style.display="none",r.style.display="block")}function Qu(n){if(n==="climb"){F.currentBoulder=null,F.selectedBoulderId=null;const e=document.querySelector("#boulder-name"),t=document.querySelector("#boulder-grade"),r=document.querySelector("#boulder-description");e&&(e.value=""),t&&(t.value=""),r&&(r.value=""),ke=null,Tn(),bt()}n==="set"&&(F.selectedBoulderId=null,bt(),At()),F.mode=n,$i()}async function EI(){var d;if(!wt){alert("Please login to save boulders.");return}if(!dn()){alert(Et);return}if(!F.currentBoulder){alert("No boulder to save. Add some holds first!");return}if(F.currentBoulder.holds.length===0){alert("Add at least one hold before saving.");return}const n=document.querySelector("#boulder-name"),e=document.querySelector("#boulder-grade"),t=document.querySelector("#boulder-description"),r=n.value.trim();if(!r){alert("Please enter a boulder name."),n.focus();return}if(r.length>Hu){alert(`Name must be ${Hu} characters or fewer.`),n.focus();return}const s=F.currentBoulder.id,i=F.boulders.find(f=>f.id!==s&&f.name.trim().toLowerCase()===r.toLowerCase());if(i){alert(`A boulder named "${i.name}" already exists on this board.`),n.focus();return}const a=e.value.trim();if(!a){alert("Please enter a grade."),e.focus();return}if(xt===null){alert("Please select a star rating.");return}const c=t.value.trim();if(c.length>Wu){alert(`Description must be ${Wu} characters or fewer.`),t.focus();return}F.currentBoulder.name=r,F.currentBoulder.grade=a,F.currentBoulder.rating=xt,c?F.currentBoulder.description=c:delete F.currentBoulder.description,Nt.size>0?F.currentBoulder.tags=[...Nt]:delete F.currentBoulder.tags,F.currentBoulder.updatedAt=Date.now();const u=(d=F.boulders.find(f=>f.id===F.currentBoulder.id))==null?void 0:d.ticks;if(u?F.currentBoulder.ticks=u:delete F.currentBoulder.ticks,!ae){alert("No board configured yet. Please reload or contact the admin.");return}try{await sa(ae.id,F.currentBoulder),F.currentBoulder=null,n.value="",e.value="",t.value="",ke=null,Tn(),xt=null,qi(),Nt.clear(),rs(),bt()}catch(f){alert("Failed to save boulder. Please check your connection and try again."),console.error(f)}}function TI(){if(F.currentBoulder&&F.currentBoulder.holds.length>0&&!confirm("Are you sure you want to clear this boulder? All unsaved changes will be lost."))return;F.currentBoulder=null,F.selectedBoulderId=null;const n=document.querySelector("#boulder-name"),e=document.querySelector("#boulder-grade"),t=document.querySelector("#boulder-description");n&&(n.value=""),e&&(e.value=""),t&&(t.value=""),ke=null,Tn(),xt=null,qi(),Nt.clear(),rs(),bt(),At()}function At(){const n=document.querySelector("#boulder-list"),e=document.querySelector("#boulder-count");if(!n)return;const t=F.boulders.filter(s=>!(ts!==null&&s.grade!==ts||En!==null&&s.rating!==En));if(e&&(e.textContent=t.length.toString()),F.boulders.length===0){n.innerHTML='<p class="text-gray-500 text-sm">No boulders saved yet.</p>';return}if(t.length===0){n.innerHTML='<p class="text-gray-500 text-sm">No boulders match the active filters.</p>';return}const r=!dn();n.innerHTML=[...t].sort((s,i)=>{const a=Gu(i.grade)-Gu(s.grade),c=(i.rating??0)-(s.rating??0);return a!==0?a:c!==0?c:i.createdAt-s.createdAt}).map(s=>{const i=F.selectedBoulderId===s.id,a=r,c=r||!!s.isLocked,u=r||!!s.isLocked,d=r?Et:s.isLocked?"Locked":"Unlocked",f=r?Et:"Edit boulder",m=r?Et:"Delete boulder";return`
        <div
          class="p-4 md:p-3 rounded ${i?"bg-blue-600":"bg-gray-700 hover:bg-gray-600 active:bg-gray-600"} cursor-pointer"
          data-boulder-id="${s.id}"
        >
          <div class="flex justify-between items-start">
            <div class="flex-1">
              <h3 class="font-medium text-base md:text-sm">${Kn(s.name)}</h3>
              <p class="text-sm md:text-sm text-gray-300 flex items-center gap-2">
                ${s.grade?`<span>${Kn(s.grade)}</span>`:""}
                ${s.rating?`<span><span class="text-amber-400">${"★".repeat(s.rating)}</span><span class="text-gray-600">${"★".repeat(3-s.rating)}</span></span>`:""}
                ${II(s)}
              </p>
              ${s.description?`<p class="text-xs md:text-xs text-gray-400 mt-1 italic whitespace-pre-wrap break-words">${Kn(s.description)}</p>`:""}
              ${s.tags&&s.tags.length>0?`
                <div class="flex flex-wrap gap-1 mt-1">
                  ${s.tags.map(E=>`<span class="px-2 py-0.5 rounded bg-gray-500 text-gray-100 text-xs">${Kn(E)}</span>`).join("")}
                </div>
              `:""}
              <p class="text-sm md:text-xs text-gray-400 mt-1">${s.holds.length} holds</p>
            </div>
            <div class="flex flex-col gap-2 ml-2">
              <button
                class="${s.isLocked?"text-yellow-400 hover:text-yellow-300":"text-gray-400 hover:text-gray-300"} active:text-gray-200 p-2 -m-2 disabled:opacity-50 disabled:cursor-not-allowed"
                data-toggle-lock="${s.id}"
                title="${d}"
                ${a?"disabled":""}
              >
                <svg class="w-6 h-6 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  ${s.isLocked?'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />':'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />'}
                </svg>
              </button>
              <button
                class="text-blue-400 hover:text-blue-300 active:text-blue-200 p-2 -m-2 disabled:opacity-50 disabled:cursor-not-allowed"
                data-edit-boulder="${s.id}"
                title="${f}"
                ${c?"disabled":""}
              >
                <svg class="w-6 h-6 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>
              <button
                class="text-red-400 hover:text-red-300 active:text-red-200 p-2 -m-2 disabled:opacity-50 disabled:cursor-not-allowed"
                data-delete-boulder="${s.id}"
                title="${m}"
                ${u?"disabled":""}
              >
                <svg class="w-6 h-6 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      `}).join(""),Hf(),n.querySelectorAll("[data-boulder-id]").forEach(s=>{s.addEventListener("click",i=>{const a=i.target;if(a.closest("[data-delete-boulder]")||a.closest("[data-edit-boulder]")||a.closest("[data-toggle-lock]")||a.closest("[data-ticklist]"))return;const c=s.dataset.boulderId;AI(c)})}),n.querySelectorAll("[data-toggle-lock]").forEach(s=>{s.addEventListener("click",i=>{i.stopPropagation();const a=s.dataset.toggleLock;RI(a)})}),n.querySelectorAll("[data-edit-boulder]").forEach(s=>{s.addEventListener("click",i=>{i.stopPropagation();const a=s.dataset.editBoulder,c=F.boulders.find(u=>u.id===a);c!=null&&c.isLocked||SI(a)})}),n.querySelectorAll("[data-ticklist]").forEach(s=>{s.addEventListener("click",i=>{i.stopPropagation();const a=s.dataset.ticklist;Bi===a?Dt():bI(a,s)})}),n.querySelectorAll("[data-delete-boulder]").forEach(s=>{s.addEventListener("click",i=>{i.stopPropagation();const a=s.dataset.deleteBoulder,c=F.boulders.find(u=>u.id===a);c!=null&&c.isLocked||PI(a)})})}function zf(n){return ns.filter(e=>{var t;return((t=n.ticks)==null?void 0:t[e.id])!==void 0})}function II(n){const e=zf(n).length;return`
    <button
      class="inline-flex items-center gap-1 rounded-full pl-1 pr-2 py-0.5 text-xs font-medium ${e>0?"bg-green-600 text-white":"bg-gray-600 text-gray-300"} hover:brightness-110"
      data-ticklist="${n.id}"
      title="Ticklist"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      ${e}
    </button>
  `}function bI(n,e){Dt(),Bi=n;const t=document.createElement("div");t.id="ticklist-popover",t.className="fixed z-40 w-60 bg-gray-800 border border-gray-600 rounded-lg shadow-2xl p-3 text-white",document.body.appendChild(t),t.addEventListener("change",async c=>{const u=c.target,d=u.dataset.tickClimber;if(!(!d||!ae))try{await sI(ae.id,n,d,u.checked)}catch(f){u.checked=!u.checked,alert("Failed to update tick. Please check your connection."),console.error(f)}}),Hf();const r=e.getBoundingClientRect(),s=8,i=Math.min(r.left,window.innerWidth-t.offsetWidth-s);let a=r.bottom+4;a+t.offsetHeight>window.innerHeight-s&&(a=Math.max(s,r.top-t.offsetHeight-4)),t.style.left=`${Math.max(s,i)}px`,t.style.top=`${a}px`}function Dt(){var n;Bi=null,(n=document.querySelector("#ticklist-popover"))==null||n.remove()}function Hf(){const n=document.querySelector("#ticklist-popover");if(!n)return;const e=F.boulders.find(s=>s.id===Bi);if(!e){Dt();return}const t=Ut()?dn()?null:Et:"Only the admin can update the ticklist",r=ns.map(s=>{var c;const i=(c=e.ticks)==null?void 0:c[s.id],a=i!==void 0?new Date(i).toLocaleDateString(void 0,{day:"numeric",month:"short"}):"";return`
      <label class="flex items-center gap-2 py-1 ${t?"cursor-not-allowed":"cursor-pointer"}">
        <input type="checkbox" class="w-4 h-4 accent-green-600" data-tick-climber="${s.id}"
          ${i!==void 0?"checked":""} ${t?"disabled":""} />
        <span class="text-sm">${Kn(s.name)}</span>
        <span class="ml-auto text-xs text-gray-400">${a}</span>
      </label>
    `}).join("");n.innerHTML=`
    <div class="text-sm font-semibold mb-2">Ticklist · ${zf(e).length}</div>
    ${ns.length>0?`<div class="max-h-64 overflow-y-auto">${r}</div>`:`<p class="text-xs text-gray-400">No climbers yet.${Ut()?" Add them via the climbers icon next to the board name.":""}</p>`}
    ${t?`<p class="text-xs text-yellow-500 mt-2">${t}</p>`:""}
  `}function AI(n){F.selectedBoulderId===n?F.selectedBoulderId=null:F.selectedBoulderId=n,At(),bt()}async function RI(n){if(!Ut()){alert("Only the admin can lock/unlock boulders.");return}if(!dn()){alert(Et);return}const e=F.boulders.find(t=>t.id===n);if(e&&ae){if(!e.isLocked){e.isLocked=!0;try{await sa(ae.id,e)}catch(t){alert("Failed to lock boulder. Please check your connection."),console.error(t)}return}e.isLocked=!1;try{await sa(ae.id,e)}catch(t){alert("Failed to unlock boulder. Please check your connection."),console.error(t)}}}async function SI(n){if(!wt){alert("Please login to edit boulders.");return}if(!dn()){alert(Et);return}const e=F.boulders.find(i=>i.id===n);if(!e||!confirm("Are you sure you want to edit this boulder?"))return;F.mode="set",$i(),F.selectedBoulderId=null,F.currentBoulder={...e,holds:[...e.holds]};const t=document.querySelector("#boulder-name"),r=document.querySelector("#boulder-grade"),s=document.querySelector("#boulder-description");t&&(t.value=e.name),r&&(r.value=e.grade||""),s&&(s.value=e.description||""),xt=e.rating??null,qi(),Nt=new Set(e.tags??[]),rs(),bt()}async function PI(n){if(!wt){alert("Please login to delete boulders.");return}if(!dn()){alert(Et);return}if(confirm("Are you sure you want to delete this boulder?")&&ae)try{await rI(ae.id,n),F.selectedBoulderId===n&&(F.selectedBoulderId=null,bt())}catch(e){alert("Failed to delete boulder. Please check your connection and try again."),console.error(e)}}function Tn(){const n=document.querySelector("#btn-start"),e=document.querySelector("#btn-feet-only"),t=document.querySelector("#btn-middle"),r=document.querySelector("#btn-top");[n,e,t,r].forEach(s=>{s==null||s.classList.remove("ring-2","ring-white")}),ke==="start"&&(n==null||n.classList.add("ring-2","ring-white")),ke==="feet-only"&&(e==null||e.classList.add("ring-2","ring-white")),ke==="middle"&&(t==null||t.classList.add("ring-2","ring-white")),ke==="top"&&(r==null||r.classList.add("ring-2","ring-white"))}function qi(){document.querySelectorAll("#boulder-rating [data-rating]").forEach(n=>{const e=Number(n.dataset.rating),t=xt!==null&&e<=xt;n.classList.toggle("text-amber-400",t),n.classList.toggle("text-gray-500",!t)})}function rs(){document.querySelectorAll("#boulder-tags [data-tag]").forEach(n=>{const e=n.dataset.tag,t=Nt.has(e);n.classList.toggle("bg-amber-400",t),n.classList.toggle("text-gray-900",t),n.classList.toggle("bg-gray-600",!t),n.classList.toggle("text-gray-300",!t)})}function CI(){var i,a,c,u,d,f,m,E,A,k,x,C,z,H,j,Q,le,se,T,g;let n=0,e=0,t=!1;(i=document.querySelector("#login-btn"))==null||i.addEventListener("click",async()=>{try{await $w(ra,QT)}catch(_){console.error("Login failed:",_),alert("Failed to login. Please try again.")}}),(a=document.querySelector("#logout-btn"))==null||a.addEventListener("click",async()=>{confirm("Are you sure you want to logout?")&&await Ew(ra)}),(c=document.querySelector("#mode-set"))==null||c.addEventListener("click",()=>{Qu("set")}),(u=document.querySelector("#mode-climb"))==null||u.addEventListener("click",()=>{Qu("climb")}),(d=document.querySelector("#btn-start"))==null||d.addEventListener("click",()=>{ke=ke==="start"?null:"start",Tn()}),(f=document.querySelector("#btn-feet-only"))==null||f.addEventListener("click",()=>{ke=ke==="feet-only"?null:"feet-only",Tn()}),(m=document.querySelector("#btn-middle"))==null||m.addEventListener("click",()=>{ke=ke==="middle"?null:"middle",Tn()}),(E=document.querySelector("#btn-top"))==null||E.addEventListener("click",()=>{ke=ke==="top"?null:"top",Tn()}),(A=document.querySelector("#boulder-rating"))==null||A.addEventListener("click",_=>{const v=_.target.closest("[data-rating]");if(!v)return;const w=Number(v.dataset.rating);xt=xt===w?null:w,qi()}),(k=document.querySelector("#boulder-tags"))==null||k.addEventListener("click",_=>{const v=_.target.closest("[data-tag]");if(!v)return;const w=v.dataset.tag;Nt.has(w)?Nt.delete(w):Nt.add(w),rs()}),rs(),(x=document.querySelector("#filter-grade"))==null||x.addEventListener("change",_=>{const v=_.target.value;ts=v===""?null:v,At()}),(C=document.querySelector("#filter-stars"))==null||C.addEventListener("change",_=>{const v=_.target.value;En=v===""?null:Number(v),At()});const r=document.querySelector("#panzoom-container");r==null||r.addEventListener("panzoomstart",()=>{const _=Ku();if(_){const v=_.getPan();n=v.x,e=v.y,t=!1}}),r==null||r.addEventListener("panzoomchange",()=>{const _=Ku();if(_){const v=_.getPan();(Math.abs(v.x-n)>2||Math.abs(v.y-e)>2)&&(t=!0)}}),r==null||r.addEventListener("panzoomend",()=>{setTimeout(()=>{t=!1},100)});const s=document.querySelector("#spraywall-img");s==null||s.addEventListener("click",_=>{ke&&(t||wI(_,ke))}),(z=document.querySelector("#btn-save"))==null||z.addEventListener("click",EI),(H=document.querySelector("#btn-clear"))==null||H.addEventListener("click",TI),(j=document.querySelector("#btn-climbers"))==null||j.addEventListener("click",()=>{Ut()&&fI(ns)}),(Q=document.querySelector("#climb-mode-content"))==null||Q.addEventListener("scroll",Dt),(se=(le=document.querySelector("#climb-mode-content"))==null?void 0:le.parentElement)==null||se.addEventListener("scroll",Dt),(T=document.querySelector("#btn-recalibrate"))==null||T.addEventListener("click",()=>{if(Ut()){if(!ae){alert("Wait for the current board to load before recalibrating.");return}if(!dn()){alert("Switch to the current board before recalibrating.");return}hI({currentBoard:ae,currentBoulders:F.boulders})}}),(g=document.querySelector("#board-version-select"))==null||g.addEventListener("change",_=>{const v=_.target.value,w=hc.find(I=>I.id===v);w&&Wf(w)})}async function Xu(){document.addEventListener("pointerdown",n=>{const e=n.target;e.closest("#ticklist-popover")||e.closest("[data-ticklist]")||Dt()}),document.addEventListener("keydown",n=>{n.key==="Escape"&&Dt()}),window.addEventListener("resize",Dt),ww(ra,async n=>{wt=n,await xI()})}function kI(n){dt&&(dt(),dt=null),dt=nI(n,e=>{F.boulders=e,At(),F.selectedBoulderId&&bt()})}function Wf(n){ae=n;const e=document.querySelector("#spraywall-img");e&&(n?e.src=n.imageUrl:e.removeAttribute("src"));const t=document.querySelector("#board-version-label");t&&(t.textContent=n?n.version:"—"),n?kI(n.id):(dt&&(dt(),dt=null),F.boulders=[],At()),Gf(),Kf()}function Gf(){const n=document.querySelector("#board-version-select");n&&(n.innerHTML=hc.map(e=>{const t=e.id===zr?" (current)":" (legacy)",r=e.id===(ae==null?void 0:ae.id)?"selected":"";return`<option value="${e.id}" ${r}>${e.version}${t}</option>`}).join(""))}function Kf(){const n=!dn(),e=document.querySelector("#btn-recalibrate");e&&(e.style.display=Ut()&&!n?"":"none");const t=document.querySelector("#mode-set");t&&(t.disabled=n,t.title=n?Et:""),n&&F.mode==="set"&&(F.mode="climb",$i());const r=document.querySelector("#btn-save");r&&(r.disabled=n,r.title=n?Et:""),At()}async function xI(){$s&&($s(),$s=null),dt&&(dt(),dt=null),qs&&(qs(),qs=null),Dt(),_I(),At(),$s=ZT((n,e)=>{hc=n;const t=(e==null?void 0:e.id)??null,r=zr===null,s=t!==zr,i=!Ut()&&(ae==null?void 0:ae.id)!==t;if(zr=t,r||s||i)Wf(e);else{const a=n.find(c=>c.id===(ae==null?void 0:ae.id))??null;a&&(ae=a),Gf(),Kf()}}),qs=iI(n=>{ns=n,At()}),yI(),CI(),$i()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Xu):Xu();
