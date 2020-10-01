(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var p;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function t(a,b){if(b)a:{for(var c=da,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
t("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.f=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.f};
var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function fa(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ja="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ka;
if("function"==typeof Object.setPrototypeOf)ka=Object.setPrototypeOf;else{var la;a:{var ma={a:!0},oa={};try{oa.__proto__=ma;la=oa.a;break a}catch(a){}la=!1}ka=la?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var pa=ka;
function x(a,b){a.prototype=ja(b.prototype);a.prototype.constructor=a;if(pa)pa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.A=b.prototype}
function qa(){this.m=!1;this.i=null;this.g=void 0;this.f=1;this.j=this.l=0;this.v=this.h=null}
function ra(a){if(a.m)throw new TypeError("Generator is already running");a.m=!0}
qa.prototype.s=function(a){this.g=a};
function sa(a,b){a.h={la:b,X:!0};a.f=a.l||a.j}
qa.prototype["return"]=function(a){this.h={"return":a};this.f=this.j};
function y(a,b,c){a.f=c;return{value:b}}
qa.prototype.C=function(a){this.f=a};
function ta(a){a.l=2;a.j=3}
function wa(a){a.l=0;a.h=null}
function xa(a){a.v=[a.h];a.l=0;a.j=0}
function ya(a){var b=a.v.splice(0)[0];(b=a.h=a.h||b)?b.X?a.f=a.l||a.j:void 0!=b.C&&a.j<b.C?(a.f=b.C,a.h=null):a.f=a.j:a.f=4}
function za(a){this.f=new qa;this.g=a}
function Aa(a,b){ra(a.f);var c=a.f.i;if(c)return Ba(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.f["return"]);
a.f["return"](b);return Ca(a)}
function Ba(a,b,c,d){try{var e=b.call(a.f.i,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.f.m=!1,e;var f=e.value}catch(g){return a.f.i=null,sa(a.f,g),Ca(a)}a.f.i=null;d.call(a.f,f);return Ca(a)}
function Ca(a){for(;a.f.f;)try{var b=a.g(a.f);if(b)return a.f.m=!1,{value:b.value,done:!1}}catch(c){a.f.g=void 0,sa(a.f,c)}a.f.m=!1;if(a.f.h){b=a.f.h;a.f.h=null;if(b.X)throw b.la;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function Da(a){this.next=function(b){ra(a.f);a.f.i?b=Ba(a,a.f.i.next,b,a.f.s):(a.f.s(b),b=Ca(a));return b};
this["throw"]=function(b){ra(a.f);a.f.i?b=Ba(a,a.f.i["throw"],b,a.f.s):(sa(a.f,b),b=Ca(a));return b};
this["return"]=function(b){return Aa(a,b)};
this[Symbol.iterator]=function(){return this}}
function z(a,b){var c=new Da(new za(b));pa&&a.prototype&&pa(c,a.prototype);return c}
t("Reflect.setPrototypeOf",function(a){return a?a:pa?function(b,c){try{return pa(b,c),!0}catch(d){return!1}}:null});
t("Object.setPrototypeOf",function(a){return a||pa});
function A(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var Ea="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)A(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||Ea});
t("Promise",function(a){function b(g){this.f=0;this.h=void 0;this.g=[];this.m=!1;var h=this.i();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.f=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.g=function(g){if(null==this.f){this.f=[];var h=this;this.h(function(){h.j()})}this.f.push(g)};
var e=da.setTimeout;c.prototype.h=function(g){e(g,0)};
c.prototype.j=function(){for(;this.f&&this.f.length;){var g=this.f;this.f=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.i(l)}}}this.f=null};
c.prototype.i=function(g){this.h(function(){throw g;})};
b.prototype.i=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.ga),reject:g(this.j)}};
b.prototype.ga=function(g){if(g===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ia(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.va(g):this.l(g)}};
b.prototype.va=function(g){var h=void 0;try{h=g.then}catch(k){this.j(k);return}"function"==typeof h?this.ja(h,g):this.l(g)};
b.prototype.j=function(g){this.s(2,g)};
b.prototype.l=function(g){this.s(1,g)};
b.prototype.s=function(g,h){if(0!=this.f)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.f);this.f=g;this.h=h;2===this.f&&this.ha();this.v()};
b.prototype.ha=function(){var g=this;e(function(){if(g.H()){var h=da.console;"undefined"!==typeof h&&h.error(g.h)}},1)};
b.prototype.H=function(){if(this.m)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.h;return k(g)};
b.prototype.v=function(){if(null!=this.g){for(var g=0;g<this.g.length;++g)f.g(this.g[g]);this.g=null}};
var f=new c;b.prototype.ia=function(g){var h=this.i();g.K(h.resolve,h.reject)};
b.prototype.ja=function(g,h){var k=this.i();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,q){return"function"==typeof r?function(v){try{l(r(v))}catch(w){m(w)}}:q}
var l,m,n=new b(function(r,q){l=r;m=q});
this.K(k(g,l),k(h,m));return n};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.K=function(g,h){function k(){switch(l.f){case 1:g(l.h);break;case 2:h(l.h);break;default:throw Error("Unexpected state: "+l.f);}}
var l=this;null==this.g?f.g(k):this.g.push(k);this.m=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).K(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(v){return function(w){r[v]=w;q--;0==q&&l(r)}}
var r=[],q=0;do r.push(void 0),q++,d(k.value).K(n(r.length-1),m),k=h.next();while(!k.done)})};
return b});
function Ia(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ia(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ia(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
function Ka(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.keys",function(a){return a?a:function(){return Ka(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Ka(this,function(b,c){return c})}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ia(this,b,"includes").indexOf(b,c||0)}});
t("Array.prototype.entries",function(a){return a?a:function(){return Ka(this,function(b,c){return[b,c]})}});
t("WeakMap",function(a){function b(k){this.f=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!A(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m["delete"](k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!A(k,g))throw Error("WeakMap key fail: "+k);k[g][this.f]=l;return this};
b.prototype.get=function(k){return d(k)&&A(k,g)?k[g][this.f]:void 0};
b.prototype.has=function(k){return d(k)&&A(k,g)&&A(k[g],this.f)};
b.prototype["delete"]=function(k){return d(k)&&A(k,g)&&A(k[g],this.f)?delete k[g][this.f]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.f;return ea(function(){if(l){for(;l.head!=h.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.g[l];if(m&&A(h.g,l))for(var n=0;n<m.length;n++){var r=m[n];if(k!==k&&r.key!==r.key||k===r.key)return{id:l,list:m,index:n,o:r}}return{id:l,list:m,index:-1,o:void 0}}
function e(h){this.g={};this.f=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.g[l.id]=[]);l.o?l.o.value=k:(l.o={next:this.f,previous:this.f.previous,head:this.f,key:h,value:k},l.list.push(l.o),this.f.previous.next=l.o,this.f.previous=l.o,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.o&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.g[h.id],h.o.previous.next=h.o.next,h.o.next.previous=h.o.previous,h.o.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).o};
e.prototype.get=function(h){return(h=d(this,h).o)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)A(b,d)&&c.push([d,b[d]]);return c}});
t("Set",function(a){function b(c){this.f=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
var B=this||self;function C(a,b){for(var c=a.split("."),d=b||B,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function La(){}
function Ma(a){var b=typeof a;b="object"!=b?b:a?Array.isArray(a)?"array":b:"null";return"array"==b||"object"==b&&"number"==typeof a.length}
function D(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Na(a){return Object.prototype.hasOwnProperty.call(a,Oa)&&a[Oa]||(a[Oa]=++Pa)}
var Oa="closure_uid_"+(1E9*Math.random()>>>0),Pa=0;function Ta(a,b,c){return a.call.apply(a.bind,arguments)}
function Ua(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Va(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Va=Ta:Va=Ua;return Va.apply(null,arguments)}
function E(a,b){var c=a.split("."),d=B;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function G(a,b){function c(){}
c.prototype=b.prototype;a.A=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ja=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Wa(a){return a}
;function H(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function Xa(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Xa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
G(Xa,Error);Xa.prototype.name="CustomError";var Za=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},I=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},$a=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
I(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function ab(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function bb(a,b){var c=Za(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function cb(a){return Array.prototype.concat.apply([],arguments)}
function db(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function eb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ma(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function fb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function gb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function hb(a){var b=ib,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function jb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function kb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=kb(a[c]);return b}
var lb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function rb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<lb.length;f++)c=lb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var sb;var tb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},ub=/&/g,vb=/</g,wb=/>/g,xb=/"/g,yb=/'/g,zb=/\x00/g,Ab=/[\x00&<>"']/;
function Bb(a,b){return a<b?-1:a>b?1:0}
;var J;a:{var Cb=B.navigator;if(Cb){var Db=Cb.userAgent;if(Db){J=Db;break a}}J=""}function K(a){return-1!=J.indexOf(a)}
;function Eb(){}
;function Fb(a){Fb[" "](a);return a}
Fb[" "]=La;var Gb=K("Opera"),Hb=K("Trident")||K("MSIE"),Ib=K("Edge"),Jb=K("Gecko")&&!(-1!=J.toLowerCase().indexOf("webkit")&&!K("Edge"))&&!(K("Trident")||K("MSIE"))&&!K("Edge"),Kb=-1!=J.toLowerCase().indexOf("webkit")&&!K("Edge");function Lb(){var a=B.document;return a?a.documentMode:void 0}
var Mb;a:{var Nb="",Ob=function(){var a=J;if(Jb)return/rv:([^\);]+)(\)|;)/.exec(a);if(Ib)return/Edge\/([\d\.]+)/.exec(a);if(Hb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Kb)return/WebKit\/(\S+)/.exec(a);if(Gb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Ob&&(Nb=Ob?Ob[1]:"");if(Hb){var Pb=Lb();if(null!=Pb&&Pb>parseFloat(Nb)){Mb=String(Pb);break a}}Mb=Nb}var Qb=Mb,Rb={},Sb;if(B.document&&Hb){var Tb=Lb();Sb=Tb?Tb:parseInt(Qb,10)||void 0}else Sb=void 0;var Ub=Sb;var Vb=K("iPhone")&&!K("iPod")&&!K("iPad")||K("iPod"),Wb=K("iPad");var Xb={},Yb=null;var L=window;function Zb(a){var b=C("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||B.$googDebugFname||b}catch(g){e="Not available",c=!0}b=gc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,hc[c])c=hc[c];else{c=String(c);if(!hc[c]){var f=/function\s+([^\(]+)/m.exec(c);hc[c]=f?f[1]:"[Anonymous]"}c=hc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return a}
function gc(a,b){b||(b={});b[ic(a)]=!0;var c=a.stack||"",d=a.Ka;d&&!b[ic(d)]&&(c+="\nCaused by: ",d.stack&&0==d.stack.indexOf(d.toString())||(c+="string"===typeof d?d:d.message+"\n"),c+=gc(d,b));return c}
function ic(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var hc={};function jc(a){this.f=a||{cookie:""}}
p=jc.prototype;p.isEnabled=function(){return navigator.cookieEnabled};
p.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Ra;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Y}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);this.f.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
p.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=tb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
p.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Y:0,path:b,domain:c});return d};
p.isEmpty=function(){return!this.f.cookie};
p.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=tb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var kc=new jc("undefined"==typeof document?null:document);function lc(a,b){this.width=a;this.height=b}
p=lc.prototype;p.clone=function(){return new lc(this.width,this.height)};
p.aspectRatio=function(){return this.width/this.height};
p.isEmpty=function(){return!(this.width*this.height)};
p.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
p.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
p.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function mc(a,b){var c,d;var e=document;e=b||e;if(e.querySelectorAll&&e.querySelector&&a)return e.querySelectorAll(a?"."+a:"");if(a&&e.getElementsByClassName){var f=e.getElementsByClassName(a);return f}f=e.getElementsByTagName("*");if(a){var g={};for(c=d=0;e=f[c];c++){var h=e.className,k;if(k="function"==typeof h.split)k=0<=Za(h.split(/\s+/),a);k&&(g[d++]=e)}g.length=d;return g}return f}
function nc(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function oc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var pc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function qc(a){return a?decodeURI(a):a}
function rc(a){return qc(a.match(pc)[3]||null)}
function sc(a){var b=a.match(pc);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function tc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)tc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function uc(a){var b=[],c;for(c in a)tc(c,a[c],b);return b.join("&")}
var vc=/#|$/;function wc(a){var b=xc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function yc(){var a=[];wc(function(b){a.push(b)});
return a}
var xc={wa:"allow-forms",xa:"allow-modals",ya:"allow-orientation-lock",za:"allow-pointer-lock",Aa:"allow-popups",Ba:"allow-popups-to-escape-sandbox",Ca:"allow-presentation",Da:"allow-same-origin",Ea:"allow-scripts",Fa:"allow-top-navigation",Ga:"allow-top-navigation-by-user-activation"},zc=fb(function(){return yc()});
function Ac(){var a=nc(),b={};I(zc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function Bc(){this.h=this.h;this.i=this.i}
Bc.prototype.h=!1;Bc.prototype.dispose=function(){this.h||(this.h=!0,this.I())};
Bc.prototype.I=function(){if(this.i)for(;this.i.length;)this.i.shift()()};var Cc={};function Dc(){}
function Ec(a,b){if(b!==Cc)throw Error("Bad secret");this.f=a}
x(Ec,Dc);Ec.prototype.toString=function(){return this.f};new Ec("about:blank",Cc);new Ec("about:invalid#zTSz",Cc);var Fc=(new Date).getTime();function Gc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"moz-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"chrome"!==a&&"app"!==a&&"devtools"!==a)throw Error("Invalid URI scheme in origin: "+
a);c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Hc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var r=g,q=0;64>q;q+=4)r[q/4]=n[q]<<24|n[q+1]<<16|n[q+2]<<8|n[q+3];for(q=16;80>q;q++)n=r[q-3]^r[q-8]^r[q-14]^r[q-16],r[q]=(n<<1|n>>>31)&4294967295;n=e[0];var v=e[1],w=e[2],F=e[3],Ya=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var na=F^v&(w^F);var Ja=1518500249}else na=v^w^F,Ja=1859775393;else 60>q?(na=v&w|F&(v|w),Ja=2400959708):(na=v^w^F,Ja=3395469782);na=((n<<5|n>>>27)&4294967295)+na+Ya+Ja+r[q]&4294967295;Ya=F;F=w;w=(v<<30|v>>>2)&4294967295;v=n;n=na}e[0]=e[0]+n&4294967295;e[1]=e[1]+
v&4294967295;e[2]=e[2]+w&4294967295;e[3]=e[3]+F&4294967295;e[4]=e[4]+Ya&4294967295}
function c(n,r){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var q=[],v=0,w=n.length;v<w;++v)q.push(n.charCodeAt(v));n=q}r||(r=n.length);q=0;if(0==l)for(;q+64<r;)b(n.slice(q,q+64)),q+=64,m+=64;for(;q<r;)if(f[l++]=n[q++],m++,64==l)for(l=0,b(f);q+64<r;)b(n.slice(q,q+64)),q+=64,m+=64}
function d(){var n=[],r=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=r&255,r>>>=8;b(f);for(q=r=0;5>q;q++)for(var v=24;0<=v;v-=8)n[r++]=e[q]>>v&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,ka:function(){for(var n=d(),r="",q=0;q<n.length;q++)r+="0123456789ABCDEF".charAt(Math.floor(n[q]/16))+"0123456789ABCDEF".charAt(n[q]%16);return r}}}
;function Ic(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],I(d,function(h){e.push(h)}),Jc(e.join(" "));
var f=[],g=[];I(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];I(d,function(h){e.push(h)});
a=Jc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Jc(a){var b=Hc();b.update(a);return b.ka().toLowerCase()}
;function Kc(a){var b=Gc(String(B.location.href)),c;(c=B.__SAPISID||B.__APISID||B.__OVERRIDE_SID)?c=!0:(c=new jc(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:")||0==b.indexOf("moz-extension:"))?B.__SAPISID:B.__APISID,c||(c=new jc(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(B.location.href);return d&&c&&b?[b,Ic(Gc(d),
c,a||null)].join(" "):null}return null}
;function Lc(){this.g=[];this.f=-1}
Lc.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
Lc.prototype.get=function(a){return!!this.g[a]};
function Mc(a){-1==a.f&&(a.f=$a(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function Nc(a,b){this.h=a;this.i=b;this.g=0;this.f=null}
Nc.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.h();return a};
function Oc(a,b){a.i(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;function Pc(a){B.setTimeout(function(){throw a;},0)}
var Qc;function Rc(){var a=B.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!K("Presto")&&(a=function(){var e=nc();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Va(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!K("Trident")&&!K("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.W;c.W=null;e()}};
return function(e){d.next={W:e};d=d.next;b.port2.postMessage(0)}}return function(e){B.setTimeout(e,0)}}
;function Sc(){this.g=this.f=null}
var Uc=new Nc(function(){return new Tc},function(a){a.reset()});
Sc.prototype.add=function(a,b){var c=Uc.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
Sc.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function Tc(){this.next=this.scope=this.f=null}
Tc.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
Tc.prototype.reset=function(){this.next=this.scope=this.f=null};function Vc(a,b){Wc||Xc();Yc||(Wc(),Yc=!0);Zc.add(a,b)}
var Wc;function Xc(){if(B.Promise&&B.Promise.resolve){var a=B.Promise.resolve(void 0);Wc=function(){a.then($c)}}else Wc=function(){var b=$c;
"function"!==typeof B.setImmediate||B.Window&&B.Window.prototype&&!K("Edge")&&B.Window.prototype.setImmediate==B.setImmediate?(Qc||(Qc=Rc()),Qc(b)):B.setImmediate(b)}}
var Yc=!1,Zc=new Sc;function $c(){for(var a;a=Zc.remove();){try{a.f.call(a.scope)}catch(b){Pc(b)}Oc(Uc,a)}Yc=!1}
;function ad(){this.g=-1}
;function bd(){this.g=64;this.f=[];this.l=[];this.m=[];this.i=[];this.i[0]=128;for(var a=1;a<this.g;++a)this.i[a]=0;this.j=this.h=0;this.reset()}
G(bd,ad);bd.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.j=this.h=0};
function cd(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],h=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+h&4294967295;a.f[4]=a.f[4]+k&4294967295}
bd.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.g,d=0,e=this.l,f=this.h;d<b;){if(0==f)for(;d<=c;)cd(this,a,d),d+=this.g;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){cd(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){cd(this,e);f=0;break}}this.h=f;this.j+=b}};
bd.prototype.digest=function(){var a=[],b=8*this.j;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.g-(this.h-56));for(var c=this.g-1;56<=c;c--)this.l[c]=b&255,b/=256;cd(this,this.l);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};var dd="StopIteration"in B?B.StopIteration:{message:"StopIteration",stack:""};function ed(){}
ed.prototype.next=function(){throw dd;};
ed.prototype.B=function(){return this};
function fd(a){if(a instanceof ed)return a;if("function"==typeof a.B)return a.B(!1);if(Ma(a)){var b=0,c=new ed;c.next=function(){for(;;){if(b>=a.length)throw dd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function gd(a,b){if(Ma(a))try{I(a,b,void 0)}catch(c){if(c!==dd)throw c;}else{a=fd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==dd)throw c;}}}
function hd(a){if(Ma(a))return db(a);a=fd(a);var b=[];gd(a,function(c){b.push(c)});
return b}
;function id(a,b){this.h={};this.f=[];this.i=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof id)for(c=jd(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function jd(a){kd(a);return a.f.concat()}
p=id.prototype;p.equals=function(a,b){if(this===a)return!0;if(this.g!=a.g)return!1;var c=b||ld;kd(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function ld(a,b){return a===b}
p.isEmpty=function(){return 0==this.g};
p.clear=function(){this.h={};this.i=this.g=this.f.length=0};
p.remove=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)?(delete this.h[a],this.g--,this.i++,this.f.length>2*this.g&&kd(this),!0):!1};
function kd(a){if(a.g!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.h,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.g!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
p.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.h,a)?this.h[a]:b};
p.set=function(a,b){Object.prototype.hasOwnProperty.call(this.h,a)||(this.g++,this.f.push(a),this.i++);this.h[a]=b};
p.forEach=function(a,b){for(var c=jd(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
p.clone=function(){return new id(this)};
p.B=function(a){kd(this);var b=0,c=this.i,d=this,e=new ed;e.next=function(){if(c!=d.i)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw dd;var f=d.f[b++];return a?f:d.h[f]};
return e};var md=!Hb||9<=Number(Ub),nd;
if(nd=Hb){var od;if(Object.prototype.hasOwnProperty.call(Rb,"9"))od=Rb["9"];else{for(var pd=0,qd=tb(String(Qb)).split("."),rd=tb("9").split("."),sd=Math.max(qd.length,rd.length),td=0;0==pd&&td<sd;td++){var ud=qd[td]||"",vd=rd[td]||"";do{var wd=/(\d*)(\D*)(.*)/.exec(ud)||["","","",""],xd=/(\d*)(\D*)(.*)/.exec(vd)||["","","",""];if(0==wd[0].length&&0==xd[0].length)break;pd=Bb(0==wd[1].length?0:parseInt(wd[1],10),0==xd[1].length?0:parseInt(xd[1],10))||Bb(0==wd[2].length,0==xd[2].length)||Bb(wd[2],xd[2]);
ud=wd[3];vd=xd[3]}while(0==pd)}od=Rb["9"]=0<=pd}nd=!od}var yd=nd,zd=function(){if(!B.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{B.addEventListener("test",La,b),B.removeEventListener("test",La,b)}catch(c){}return a}();function Ud(a,b){this.type=a;this.f=this.target=b;this.defaultPrevented=this.g=!1}
Ud.prototype.stopPropagation=function(){this.g=!0};
Ud.prototype.preventDefault=function(){this.defaultPrevented=!0};function Vd(a,b){Ud.call(this,a?a.type:"");this.relatedTarget=this.f=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.h=null;a&&this.init(a,b)}
G(Vd,Ud);var Wd={2:"touch",3:"pen",4:"mouse"};
Vd.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.f=b;var e=a.relatedTarget;if(e){if(Jb){a:{try{Fb(e.nodeName);var f=!0;break a}catch(g){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Wd[a.pointerType]||"";this.state=a.state;
this.h=a;a.defaultPrevented&&this.preventDefault()};
Vd.prototype.stopPropagation=function(){Vd.A.stopPropagation.call(this);this.h.stopPropagation?this.h.stopPropagation():this.h.cancelBubble=!0};
Vd.prototype.preventDefault=function(){Vd.A.preventDefault.call(this);var a=this.h;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,yd)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Xd="closure_listenable_"+(1E6*Math.random()|0),Yd=0;function Zd(a,b,c,d,e){this.listener=a;this.f=null;this.src=b;this.type=c;this.capture=!!d;this.L=e;this.key=++Yd;this.G=this.J=!1}
function $d(a){a.G=!0;a.listener=null;a.f=null;a.src=null;a.L=null}
;function ae(a){this.src=a;this.listeners={};this.f=0}
ae.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.f++);var g=be(a,b,d,e);-1<g?(b=a[g],c||(b.J=!1)):(b=new Zd(b,this.src,f,!!d,e),b.J=c,a.push(b));return b};
ae.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=be(e,b,c,d);return-1<b?($d(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.f--),!0):!1};
function ce(a,b){var c=b.type;c in a.listeners&&bb(a.listeners[c],b)&&($d(b),0==a.listeners[c].length&&(delete a.listeners[c],a.f--))}
function be(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.G&&f.listener==b&&f.capture==!!c&&f.L==d)return e}return-1}
;var de="closure_lm_"+(1E6*Math.random()|0),ee={},fe=0;function ge(a,b,c,d,e){if(d&&d.once)he(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)ge(a,b[f],c,d,e);else c=ie(c),a&&a[Xd]?a.f.add(String(b),c,!1,D(d)?!!d.capture:!!d,e):je(a,b,c,!1,d,e)}
function je(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=D(e)?!!e.capture:!!e,h=ke(a);h||(a[de]=h=new ae(a));c=h.add(b,c,d,g,f);if(!c.f){d=le();c.f=d;d.src=a;d.listener=c;if(a.addEventListener)zd||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(me(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");fe++}}
function le(){var a=ne,b=md?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function he(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)he(a,b[f],c,d,e);else c=ie(c),a&&a[Xd]?a.f.add(String(b),c,!0,D(d)?!!d.capture:!!d,e):je(a,b,c,!0,d,e)}
function oe(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)oe(a,b[f],c,d,e);else(d=D(d)?!!d.capture:!!d,c=ie(c),a&&a[Xd])?a.f.remove(String(b),c,d,e):a&&(a=ke(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=be(b,c,d,e)),(c=-1<a?b[a]:null)&&pe(c))}
function pe(a){if("number"!==typeof a&&a&&!a.G){var b=a.src;if(b&&b[Xd])ce(b.f,a);else{var c=a.type,d=a.f;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(me(c),d):b.addListener&&b.removeListener&&b.removeListener(d);fe--;(c=ke(b))?(ce(c,a),0==c.f&&(c.src=null,b[de]=null)):$d(a)}}}
function me(a){return a in ee?ee[a]:ee[a]="on"+a}
function qe(a,b,c,d){var e=!0;if(a=ke(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.G&&(f=re(f,d),e=e&&!1!==f)}return e}
function re(a,b){var c=a.listener,d=a.L||a.src;a.J&&pe(a);return c.call(d,b)}
function ne(a,b){if(a.G)return!0;if(!md){var c=b||C("window.event"),d=new Vd(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(k){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.f;f;f=f.parentNode)c.push(f);f=a.type;for(var g=c.length-1;!d.g&&0<=g;g--){d.f=c[g];var h=qe(c[g],f,!0,d);e=e&&h}for(g=0;!d.g&&g<c.length;g++)d.f=c[g],h=qe(c[g],f,!1,d),e=e&&h}return e}return re(a,new Vd(b,this))}
function ke(a){a=a[de];return a instanceof ae?a:null}
var se="__closure_events_fn_"+(1E9*Math.random()>>>0);function ie(a){if("function"===typeof a)return a;a[se]||(a[se]=function(b){return a.handleEvent(b)});
return a[se]}
;function te(){Bc.call(this);this.f=new ae(this);this.j=this;this.g=null}
G(te,Bc);te.prototype[Xd]=!0;te.prototype.addEventListener=function(a,b,c,d){ge(this,a,b,c,d)};
te.prototype.removeEventListener=function(a,b,c,d){oe(this,a,b,c,d)};
te.prototype.dispatchEvent=function(a){var b=this.g;if(b){var c=[];for(var d=1;b;b=b.g)c.push(b),++d}b=this.j;d=a.type||a;if("string"===typeof a)a=new Ud(a,b);else if(a instanceof Ud)a.target=a.target||b;else{var e=a;a=new Ud(d,b);rb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.g&&0<=f;f--){var g=a.f=c[f];e=ue(g,d,!0,a)&&e}a.g||(g=a.f=b,e=ue(g,d,!0,a)&&e,a.g||(e=ue(g,d,!1,a)&&e));if(c)for(f=0;!a.g&&f<c.length;f++)g=a.f=c[f],e=ue(g,d,!1,a)&&e;return e};
te.prototype.I=function(){te.A.I.call(this);if(this.f){var a=this.f,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,$d(d[e]);delete a.listeners[c];a.f--}}this.g=null};
function ue(a,b,c,d){b=a.f.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.G&&g.capture==c){var h=g.listener,k=g.L||g.src;g.J&&ce(a.f,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;var ve=B.JSON.stringify;function M(a){this.f=0;this.m=void 0;this.i=this.g=this.h=null;this.j=this.l=!1;if(a!=La)try{var b=this;a.call(void 0,function(c){we(b,2,c)},function(c){we(b,3,c)})}catch(c){we(this,3,c)}}
function xe(){this.next=this.context=this.onRejected=this.g=this.f=null;this.h=!1}
xe.prototype.reset=function(){this.context=this.onRejected=this.g=this.f=null;this.h=!1};
var ye=new Nc(function(){return new xe},function(a){a.reset()});
function ze(a,b,c){var d=ye.get();d.g=a;d.onRejected=b;d.context=c;return d}
function Ae(a){if(a instanceof M)return a;var b=new M(La);we(b,2,a);return b}
function Be(a){return new M(function(b,c){c(a)})}
M.prototype.then=function(a,b,c){return Ce(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
M.prototype.$goog_Thenable=!0;function De(a,b){return Ce(a,null,b,void 0)}
M.prototype.cancel=function(a){if(0==this.f){var b=new Ee(a);Vc(function(){Fe(this,b)},this)}};
function Fe(a,b){if(0==a.f)if(a.h){var c=a.h;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.h||(d++,g.f==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.f&&1==d?Fe(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):Ge(c),He(c,e,3,b)))}a.h=null}else we(a,3,b)}
function Ie(a,b){a.g||2!=a.f&&3!=a.f||Je(a);a.i?a.i.next=b:a.g=b;a.i=b}
function Ce(a,b,c,d){var e=ze(null,null,null);e.f=new M(function(f,g){e.g=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Ee?g(h):f(k)}catch(l){g(l)}}:g});
e.f.h=a;Ie(a,e);return e.f}
M.prototype.v=function(a){this.f=0;we(this,2,a)};
M.prototype.H=function(a){this.f=0;we(this,3,a)};
function we(a,b,c){if(0==a.f){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.f=1;a:{var d=c,e=a.v,f=a.H;if(d instanceof M){Ie(d,ze(e||La,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(D(d))try{var k=d.then;if("function"===typeof k){Ke(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.m=c,a.f=b,a.h=null,Je(a),3!=b||c instanceof Ee||Le(a,c))}}
function Ke(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Je(a){a.l||(a.l=!0,Vc(a.s,a))}
function Ge(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.i=null);return b}
M.prototype.s=function(){for(var a;a=Ge(this);)He(this,a,this.f,this.m);this.l=!1};
function He(a,b,c,d){if(3==c&&b.onRejected&&!b.h)for(;a&&a.j;a=a.h)a.j=!1;if(b.f)b.f.h=null,Me(b,c,d);else try{b.h?b.g.call(b.context):Me(b,c,d)}catch(e){Ne.call(null,e)}Oc(ye,b)}
function Me(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Le(a,b){a.j=!0;Vc(function(){a.j&&Ne.call(null,b)})}
var Ne=Pc;function Ee(a){Xa.call(this,a)}
G(Ee,Xa);Ee.prototype.name="cancel";function N(a){Bc.call(this);this.m=1;this.j=[];this.l=0;this.f=[];this.g={};this.s=!!a}
G(N,Bc);p=N.prototype;p.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.m;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.m=e+3;d.push(e);return e};
function Oe(a,b,c){var d=Pe;if(a=d.g[a]){var e=d.f;(a=ab(a,function(f){return e[f+1]==b&&e[f+2]==c}))&&d.P(a)}}
p.P=function(a){var b=this.f[a];if(b){var c=this.g[b];0!=this.l?(this.j.push(a),this.f[a+1]=La):(c&&bb(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
p.N=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.s)for(e=0;e<c.length;e++){var g=c[e];Qe(this.f[g+1],this.f[g+2],d)}else{this.l++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.l--,0<this.j.length&&0==this.l)for(;c=this.j.pop();)this.P(c)}}return 0!=e}return!1};
function Qe(a,b,c){Vc(function(){a.apply(b,c)})}
p.clear=function(a){if(a){var b=this.g[a];b&&(I(b,this.P,this),delete this.g[a])}else this.f.length=0,this.g={}};
p.I=function(){N.A.I.call(this);this.clear();this.j.length=0};function Re(a){this.f=a}
Re.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,ve(b))};
Re.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Re.prototype.remove=function(a){this.f.remove(a)};function Se(a){this.f=a}
G(Se,Re);function Te(a){this.data=a}
function Ue(a){return void 0===a||a instanceof Te?a:new Te(a)}
Se.prototype.set=function(a,b){Se.A.set.call(this,a,Ue(b))};
Se.prototype.g=function(a){a=Se.A.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Se.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Ve(a){this.f=a}
G(Ve,Se);Ve.prototype.set=function(a,b,c){if(b=Ue(b)){if(c){if(c<Date.now()){Ve.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Ve.A.set.call(this,a,b)};
Ve.prototype.g=function(a){var b=Ve.A.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Ve.prototype.remove.call(this,a);else return b}};function We(){}
;function Xe(){}
G(Xe,We);Xe.prototype.clear=function(){var a=hd(this.B(!0)),b=this;I(a,function(c){b.remove(c)})};function Ye(a){this.f=a}
G(Ye,Xe);p=Ye.prototype;p.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
p.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
p.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
p.remove=function(a){this.f.removeItem(a)};
p.B=function(a){var b=0,c=this.f,d=new ed;d.next=function(){if(b>=c.length)throw dd;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
p.clear=function(){this.f.clear()};
p.key=function(a){return this.f.key(a)};function Ze(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
G(Ze,Ye);function $e(a,b){this.g=a;this.f=null;if(Hb&&!(9<=Number(Ub))){af||(af=new id);this.f=af.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),af.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
G($e,Xe);var bf={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},af=null;function cf(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return bf[b]})}
p=$e.prototype;p.isAvailable=function(){return!!this.f};
p.set=function(a,b){this.f.setAttribute(cf(a),b);df(this)};
p.get=function(a){a=this.f.getAttribute(cf(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
p.remove=function(a){this.f.removeAttribute(cf(a));df(this)};
p.B=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new ed;d.next=function(){if(b>=c.length)throw dd;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
p.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);df(this)};
function df(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function ef(a,b){this.g=a;this.f=b+"::"}
G(ef,Xe);ef.prototype.set=function(a,b){this.g.set(this.f+a,b)};
ef.prototype.get=function(a){return this.g.get(this.f+a)};
ef.prototype.remove=function(a){this.g.remove(this.f+a)};
ef.prototype.B=function(a){var b=this.g.B(!0),c=this,d=new ed;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};var ff=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};E("yt.config_",ff);function gf(a){var b=arguments;1<b.length?ff[b[0]]=b[1]:1===b.length&&Object.assign(ff,b[0])}
function O(a,b){return a in ff?ff[a]:b}
;var hf=[];function jf(a){hf.forEach(function(b){return b(a)})}
function kf(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){lf(b),jf(b)}}:a}
function lf(a){var b=C("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=O("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),gf("ERRORS",b))}
function mf(a){var b=C("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=O("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),gf("ERRORS",b))}
;var nf=0;E("ytDomDomGetNextId",C("ytDomDomGetNextId")||function(){return++nf});var of={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function pf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in of||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
pf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
pf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
pf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var ib=B.ytEventsEventsListeners||{};E("ytEventsEventsListeners",ib);var qf=B.ytEventsEventsCounter||{count:0};E("ytEventsEventsCounter",qf);
function rf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return hb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=D(e[4])&&D(d)&&jb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function sf(a){a&&("string"==typeof a&&(a=[a]),I(a,function(b){if(b in ib){var c=ib[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?tf()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete ib[b]}}))}
var tf=fb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function uf(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=rf(a,b,c,d);if(!e){e=++qf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new pf(h);if(!oc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new pf(h);
h.currentTarget=a;return c.call(a,h)};
g=kf(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),tf()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);ib[e]=[a,b,c,g,d]}}}
;function vf(a,b){"function"===typeof a&&(a=kf(a));return window.setTimeout(a,b)}
function wf(a){"function"===typeof a&&(a=kf(a));return window.setInterval(a,250)}
;function xf(a){var b=[];gb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];I(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function yf(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),g=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?Array.isArray(b[f])?eb(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(k){if("q"!=e[0]){var h=Error("Error decoding URL component");h.params={key:e[0],value:e[1]};lf(h)}}}return b}
function zf(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=yf(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=uc(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.substr(0,f),e,b.substr(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
;var Af={};function Bf(a){return Af[a]||(Af[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Cf={},Df=[],Pe=new N,Ef={};function Ff(){for(var a=u(Df),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Gf(a,b){b||(b=document);var c=db(b.getElementsByTagName("yt:"+a));var d="yt-"+a;var e=b||document;d=e.querySelectorAll&&e.querySelector?e.querySelectorAll("."+d):mc(d,b);d=db(d);return cb(c,d)}
function Q(a,b){var c;"yt:"==a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Bf(b)]:a.getAttribute("data-"+b):null;return c}
function Hf(a,b){Pe.N.apply(Pe,arguments)}
;function If(a){this.g=a||{};this.h=this.f=!1;a=document.getElementById("www-widgetapi-script");if(this.f=!!("https:"==document.location.protocol||a&&0==a.src.indexOf("https:"))){a=[this.g,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.replace("http://","https://"))}}
function R(a,b){for(var c=[a.g,window.YTConfig||{}],d=0;d<c.length;d++){var e=c[d][b];if(void 0!=e)return e}return null}
function Jf(a,b,c){Kf||(Kf={},uf(window,"message",Va(a.i,a)));Kf[c]=b}
If.prototype.i=function(a){if(a.origin==R(this,"host")||a.origin==R(this,"host").replace(/^http:/,"https:")){try{var b=JSON.parse(a.data)}catch(c){return}this.h=!0;this.f||0!=a.origin.indexOf("https:")||(this.f=!0);if(a=Kf[b.id])a.s=!0,a.s&&(I(a.m,a.V,a),a.m.length=0),a.ea(b)}};
var Kf=null;function S(a){a=Lf(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Mf(a,b){var c=Lf(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function Lf(a){var b=O("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:O("EXPERIMENT_FLAGS",{})[a]}
;function Nf(){}
function Of(a,b){return Pf(a,0,b)}
;function Qf(){}
x(Qf,Nf);function Pf(a,b,c){isNaN(c)&&(c=void 0);var d=C("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):vf(a,c||0)}
Qf.prototype.start=function(){var a=C("yt.scheduler.instance.start");a&&a()};
Qf.f=void 0;Qf.g=function(){Qf.f||(Qf.f=new Qf)};
Qf.g();var Rf=B.ytPubsubPubsubInstance||new N,Sf=B.ytPubsubPubsubSubscribedKeys||{},Tf=B.ytPubsubPubsubTopicToKeys||{},Uf=B.ytPubsubPubsubIsSynchronous||{};N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.P;N.prototype.publish=N.prototype.N;N.prototype.clear=N.prototype.clear;E("ytPubsubPubsubInstance",Rf);E("ytPubsubPubsubTopicToKeys",Tf);E("ytPubsubPubsubIsSynchronous",Uf);E("ytPubsubPubsubSubscribedKeys",Sf);var Vf=window,U=Vf.ytcsi&&Vf.ytcsi.now?Vf.ytcsi.now:Vf.performance&&Vf.performance.timing&&Vf.performance.now&&Vf.performance.timing.navigationStart?function(){return Vf.performance.timing.navigationStart+Vf.performance.now()}:function(){return(new Date).getTime()};var Wf=Mf("initial_gel_batch_timeout",1E3),Xf=Math.pow(2,16)-1,Yf=null,Zf=0,Fg=void 0,Gg=0,Hg=0,Ig=0,Jg=!0,Kg=B.ytLoggingTransportLogPayloadsQueue_||{};E("ytLoggingTransportLogPayloadsQueue_",Kg);var Lg=B.ytLoggingTransportGELQueue_||new Map;E("ytLoggingTransportGELQueue_",Lg);var Mg=B.ytLoggingTransportTokensToCttTargetIds_||{};E("ytLoggingTransportTokensToCttTargetIds_",Mg);
function Ng(){window.clearTimeout(Gg);window.clearTimeout(Hg);Hg=0;Fg&&Fg.isReady()?(Og(Lg),"log_event"in Kg&&Og(Object.entries(Kg.log_event)),Lg.clear(),delete Kg.log_event):Pg()}
function Pg(){S("web_gel_timeout_cap")&&!Hg&&(Hg=vf(Ng,6E4));window.clearTimeout(Gg);var a=O("LOGGING_BATCH_TIMEOUT",Mf("web_gel_debounce_ms",1E4));S("shorten_initial_gel_batch_timeout")&&Jg&&(a=Wf);Gg=vf(Ng,a)}
function Og(a){var b=Fg,c=Math.round(U());a=u(a);for(var d=a.next();!d.done;d=a.next()){var e=u(d.value);d=e.next().value;var f=e.next().value;e=kb({context:Qg(b.f||Rg())});e.events=f;(f=Mg[d])&&Sg(e,d,f);delete Mg[d];Tg(e,c);Ug(b,"log_event",e,{retry:!0,onSuccess:function(){Zf=Math.round(U()-c)}});
Jg=!1}}
function Tg(a,b){a.requestTimeMs=String(b);S("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=O("EVENT_ID",void 0);if(c){var d=O("BATCH_CLIENT_COUNTER",void 0)||0;!d&&S("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*Xf/2));d++;d>Xf&&(d=1);gf("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;Yf&&Zf&&S("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:Yf,roundtripMs:String(Zf)});Yf=c;Zf=0}}
function Sg(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var Vg=B.ytLoggingGelSequenceIdObj_||{};E("ytLoggingGelSequenceIdObj_",Vg);function Wg(a){var b=Xg;a=void 0===a?C("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(Yg(b),Zg(b));b.ca_type="image";a&&(b.bid=a);return b}
function Yg(a){var b={};b.dt=Fc;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?L:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!L.navigator&&"unknown"!==typeof L.navigator.javaEnabled&&!!L.navigator.javaEnabled&&L.navigator.javaEnabled();L.screen&&(b.u_h=L.screen.height,b.u_w=L.screen.width,b.u_ah=L.screen.availHeight,b.u_aw=L.screen.availWidth,b.u_cd=L.screen.colorDepth);
L.navigator&&L.navigator.plugins&&(b.u_nplug=L.navigator.plugins.length);L.navigator&&L.navigator.mimeTypes&&(b.u_nmime=L.navigator.mimeTypes.length);return b}
function Zg(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(n){}try{var e=b.outerWidth;var f=b.outerHeight}catch(n){}try{var g=b.innerWidth;var h=b.innerHeight}catch(n){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.f.top;try{var k=(c||window).document,l="CSS1Compat"==k.compatMode?k.documentElement:k.body;var m=(new lc(l.clientWidth,l.clientHeight)).round()}catch(n){m=new lc(-12245933,-12245933)}k=m;m={};l=new Lc;B.SVGElement&&
B.document.createElementNS&&l.set(0);c=Ac();c["allow-top-navigation-by-user-activation"]&&l.set(1);c["allow-popups-to-escape-sandbox"]&&l.set(2);B.crypto&&B.crypto.subtle&&l.set(3);B.TextDecoder&&B.TextEncoder&&l.set(4);l=Mc(l);m.bc=l;m.bih=k.height;m.biw=k.width;m.brdim=b.join();a=a.g;return m.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,m.wgl=!!L.WebGLRenderingContext,m}
var Xg=new function(){var a=window.document;this.f=window;this.g=a};
E("yt.ads_.signals_.getAdSignalsString",function(a){return xf(Wg(a))});var $g="XMLHttpRequest"in B?function(){return new XMLHttpRequest}:null;
function ah(){if(!$g)return null;var a=$g();return"open"in a?a:null}
;var bh={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},ch="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address client_dev_root_url".split(" "),
dh=!1;
function eh(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=a.match(pc)[1]||null,e=rc(a);d&&e?(d=c,c=a.match(pc),d=d.match(pc),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?rc(c)==e&&(Number(c.match(pc)[4]||null)||null)==(Number(a.match(pc)[4]||null)||null):!0;d=S("web_ajax_ignore_global_headers_if_set");for(var f in bh)e=O(bh[f]),!e||!c&&rc(a)||d&&void 0!==b[f]||(b[f]=e);if(c||!rc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||!rc(a))&&(f="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:
null)&&(b["X-YouTube-Time-Zone"]=f);if(c||!rc(a))b["X-YouTube-Ad-Signals"]=xf(Wg(void 0));return b}
function fh(a){var b=window.location.search,c=rc(a),d=qc(a.match(pc)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=yf(b),f={};I(ch,function(g){e[g]&&(f[g]=e[g])});
return zf(a,f||{},!1)}
function gh(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=hh(a,b);var d=ih(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&window.clearTimeout(f);var h=g.ok,k=function(l){l=l||{};var m=b.context||B;h?b.onSuccess&&b.onSuccess.call(m,l,g):b.onError&&b.onError.call(m,l,g);b.T&&b.T.call(m,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.ba&&0<b.timeout&&(f=vf(function(){e||(e=!0,window.clearTimeout(f),b.ba.call(b.context||B))},b.timeout))}else jh(a,b)}
function jh(a,b){var c=b.format||"JSON";a=hh(a,b);var d=ih(a,b),e=!1,f=kh(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,n=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||n||r)m=lh(a,c,k,b.La);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=!!m}m=m||
{};n=b.context||B;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.T&&b.T.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
if(b.M&&0<b.timeout){var g=b.M;var h=vf(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||B,f))},b.timeout)}}
function hh(a,b){b.Pa&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=O("XSRF_FIELD_NAME",void 0),d=b.ua;d&&(d[c]&&delete d[c],a=zf(a,d||{},!0));return a}
function ih(a,b){var c=O("XSRF_FIELD_NAME",void 0),d=O("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.u,g=O("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.Oa||rc(a)&&!b.withCredentials&&rc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.u&&b.u[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=yf(e),rb(e,f),e=b.da&&"JSON"==b.da?JSON.stringify(e):uc(e));if(!(c=e)&&(c=f)){a:{for(var k in f){f=!1;break a}f=!0}c=!f}!dh&&c&&"POST"!=b.method&&
(dh=!0,lf(Error("AJAX request with postData should use POST")));return e}
function lh(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,mf(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?mh(a):null)e={},I(a.getElementsByTagName("*"),function(g){e[g.tagName]=nh(g)})}d&&oh(e);
return e}
function oh(a){if(D(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];if(void 0===sb){var e=null;var f=B.trustedTypes;if(f&&f.createPolicy){try{e=f.createPolicy("goog#html",{createHTML:Wa,createScript:Wa,createScriptURL:Wa})}catch(g){B.console&&B.console.error(g.message)}sb=e}else sb=e}(e=sb)&&e.createHTML(d);a[c]=new Eb}else oh(a[b])}}
function mh(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function nh(a){var b="";I(a.childNodes,function(c){b+=c.nodeValue});
return b}
function kh(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&kf(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=ah();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;S("debug_forward_web_query_parameters")&&(a=fh(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=eh(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function ph(){for(var a={},b=u(Object.entries(yf(O("DEVICE","")))),c=b.next();!c.done;c=b.next()){var d=u(c.value);c=d.next().value;d=d.next().value;"cbrand"===c?a.deviceMake=d:"cmodel"===c?a.deviceModel=d:"cbr"===c?a.browserName=d:"cbrver"===c?a.browserVersion=d:"cos"===c?a.osName=d:"cosver"===c?a.osVersion=d:"cplatform"===c&&(a.platform=d)}return a}
;function qh(){return"INNERTUBE_API_KEY"in ff&&"INNERTUBE_API_VERSION"in ff}
function Rg(){return{innertubeApiKey:O("INNERTUBE_API_KEY",void 0),innertubeApiVersion:O("INNERTUBE_API_VERSION",void 0),ma:O("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),na:O("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:O("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),pa:O("INNERTUBE_CONTEXT_HL",void 0),oa:O("INNERTUBE_CONTEXT_GL",void 0),qa:O("INNERTUBE_HOST_OVERRIDE",void 0)||"",sa:!!O("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),ra:!!O("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:O("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function Qg(a){var b={client:{hl:a.pa,gl:a.oa,clientName:a.na,clientVersion:a.innertubeContextClientVersion,configInfo:a.ma}},c=window.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=O("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=O("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=O("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});
a.appInstallData&&S("web_log_app_install_experiments")&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);O("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(b.user={onBehalfOfUser:O("DELEGATED_SESSION_ID")});b.client=Object.assign(b.client,ph());return b}
function rh(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||O("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Ia||O("AUTHORIZATION"))||(a?b="Bearer "+C("gapi.auth.getToken")().Ha:b=Kc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=O("SESSION_INDEX",0),S("pageid_as_header_web")&&(d["X-Goog-PageId"]=O("DELEGATED_SESSION_ID")));return d}
;function sh(a){a=Object.assign({},a);delete a.Authorization;var b=Kc();if(b){var c=new bd;c.update(O("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;Ma(b);void 0===c&&(c=0);if(!Yb){Yb={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));Xb[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===Yb[k]&&(Yb[k]=h)}}}c=Xb[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],m=(f=e+1<b.length)?
b[e+1]:0;k=(g=e+2<b.length)?b[e+2]:0;h=l>>2;l=(l&3)<<4|m>>4;m=(m&15)<<2|k>>6;k&=63;g||(k=64,f||(m=64));d.push(c[h],c[l],c[m]||"",c[k]||"")}a.hash=d.join("")}return a}
function th(a){a=sh(a);var b=new bd;b.update(JSON.stringify(a,Object.keys(a).sort()));a=b.digest();b="";for(var c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}
;function uh(){var a=new Ze;(a=a.isAvailable()?new ef(a,"yt.innertube"):null)||(a=new $e("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new Ve(a):null;this.g=document.domain||window.location.hostname}
uh.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(ve(b))}catch(f){return}else e=escape(b);b=this.g;kc.set(""+a,e,{Y:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
uh.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=kc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
uh.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;kc.remove(""+a,"/",void 0===b?"youtube.com":b)};var vh;function wh(){vh||(vh=new uh);return vh}
function xh(a,b,c,d){if(d)return null;d=wh().get("nextId",!0)||1;var e=wh().get("requests",!0)||{};e[d]={method:a,request:b,authState:sh(c),requestTime:Math.round(U())};wh().set("nextId",d+1,86400,!0);wh().set("requests",e,86400,!0);return d}
function yh(a){var b=wh().get("requests",!0)||{};delete b[a];wh().set("requests",b,86400,!0)}
function zh(a){var b=wh().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(U())-d.requestTime)){var e=d.authState,f=sh(rh(!1));jb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(U())),Ug(a,d.method,e,{}));delete b[c]}}wh().set("requests",b,86400,!0)}}
;function Ah(){}
;new te;var Bh=Vb||Wb;function Ch(){var a=/WebKit\/([0-9]+)/.exec(J);return!!(a&&600<=parseInt(a[1],10))}
function Dh(){var a=/WebKit\/([0-9]+)/.exec(J);return!!(a&&602<=parseInt(a[1],10))}
;function Eh(a){if(!a)throw Error();throw a;}
function Fh(a){return a}
function V(a){var b=this;this.g=a;this.state={status:"PENDING"};this.f=[];this.onRejected=[];this.g(function(c){if("PENDING"===b.state.status){b.state={status:"FULFILLED",value:c};c=u(b.f);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}},function(c){if("PENDING"===b.state.status){b.state={status:"REJECTED",
reason:c};c=u(b.onRejected);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}})}
V.all=function(a){return new V(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={F:0};f.F<a.length;f={F:f.F},++f.F)Gh(V.resolve(a[f.F]).then(function(g){return function(h){d[g.F]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})})};
V.resolve=function(a){return new V(function(b,c){a instanceof V?a.then(b,c):b(a)})};
V.reject=function(a){return new V(function(b,c){c(a)})};
V.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:Fh,e=null!==b&&void 0!==b?b:Eh;return new V(function(f,g){"PENDING"===c.state.status?(c.f.push(function(){Hh(c,c,d,f,g)}),c.onRejected.push(function(){Ih(c,c,e,f,g)})):"FULFILLED"===c.state.status?Hh(c,c,d,f,g):"REJECTED"===c.state.status&&Ih(c,c,e,f,g)})};
function Gh(a,b){a.then(void 0,b)}
function Hh(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof V?Jh(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Ih(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof V?Jh(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Jh(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof V?Jh(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Kh(){var a=Error.call(this,"Transaction was aborted");this.message=a.message;"stack"in a&&(this.stack=a.stack);this.name="YtIdbKnownError";Object.setPrototypeOf(this,Kh.prototype)}
x(Kh,Error);function Lh(){var a=Error.call(this,"IndexedDB is not supported.");this.message=a.message;"stack"in a&&(this.stack=a.stack);this.name="YtIdbKnownError";Object.setPrototypeOf(this,Lh.prototype)}
x(Lh,Error);function Mh(){var a=Error.call(this,"The current transaction exceeded its quota limitations.");this.message=a.message;"stack"in a&&(this.stack=a.stack);this.name="YtIdbKnownError";Object.setPrototypeOf(this,Mh.prototype)}
x(Mh,Error);function Nh(){var a=Error.call(this,"The current transaction may have failed because of exceeding quota limitations.");this.message=a.message;"stack"in a&&(this.stack=a.stack);this.name="YtIdbKnownError";Object.setPrototypeOf(this,Nh.prototype)}
x(Nh,Error);function Oh(a){return a instanceof DOMException?"VersionError"===a.name:"DOMError"in self&&a instanceof DOMError?"VersionError"===a.name:a instanceof Object&&"message"in a?"An attempt was made to open a database using a lower version than the existing version."===a.message:!1}
function Ph(a,b){return new V(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()})}
;function Qh(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Rh(a){return new M(function(b,c){Qh(a,b,c)})}
function W(a){return new V(function(b,c){Qh(a,b,c)})}
;function Sh(a,b){this.f=a;this.options=b}
p=Sh.prototype;p.add=function(a,b,c){return Th(this,[a],"readwrite",function(d){return Uh(d,a).add(b,c)})};
p.clear=function(a){return Th(this,[a],"readwrite",function(b){return Uh(b,a).clear()})};
p.close=function(){var a;this.f.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
p.count=function(a,b){return Th(this,[a],"readonly",function(c){return Uh(c,a).count(b)})};
function Vh(a,b,c){a=a.f.createObjectStore(b,c);return new Wh(a)}
p["delete"]=function(a,b){return Th(this,[a],"readwrite",function(c){return Uh(c,a)["delete"](b)})};
p.get=function(a,b){return Th(this,[a],"readwrite",function(c){return Uh(c,a).get(b)})};
function Xh(a,b){return Th(a,["databases"],"readwrite",function(c){c=Uh(c,"databases");return W(c.f.put(b,void 0))})}
function Th(a,b,c,d){c=void 0===c?"readonly":c;return new M(function(e,f){var g=a.f.transaction(b,c),h=new Yh(g);Gh(d(h).then(function(k){De(Zh(h).then(function(){e(k)}),function(l){f(l)})}),function(k){f(k)})})}
function Wh(a){this.f=a}
p=Wh.prototype;p.add=function(a,b){return W(this.f.add(a,b))};
p.clear=function(){return W(this.f.clear()).then(function(){})};
p.count=function(a){return W(this.f.count(a))};
p["delete"]=function(a){return W(this.f["delete"](a))};
p.get=function(a){return W(this.f.get(a))};
p.index=function(a){return new $h(this.f.index(a))};
p.getName=function(){return this.f.name};
function Yh(a){var b=this;this.f=a;this.g=new Map;this.aborted=!1;this.done=new M(function(c,d){b.f.addEventListener("complete",function(){c()});
b.f.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.f.error)});
b.f.addEventListener("abort",function(){var e=b.f.error;e?("QuotaExceededError"===e.name?mf(new Mh):"UnknownError"===e.name&&mf(new Nh),d(e)):d(new Kh)})})}
Yh.prototype.abort=function(){this.f.abort();this.aborted=!0};
function Zh(a){var b=a.f;b.commit&&!a.aborted&&b.commit();return a.done}
function Uh(a,b){var c=a.f.objectStore(b),d=a.g.get(c);d||(d=new Wh(c),a.g.set(c,d));return d}
function $h(a){this.f=a}
$h.prototype.count=function(a){return W(this.f.count(a))};
$h.prototype.get=function(a){return W(this.f.get(a))};
function ai(a,b,c){a=a.f.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return bi(a).then(function(d){return Ph(d,c)})}
function ci(a,b){this.request=a;this.f=b}
function bi(a){return W(a).then(function(b){return null===b?null:new ci(a,b)})}
ci.prototype["delete"]=function(){return W(this.f["delete"]()).then(function(){})};
ci.prototype.update=function(a){return W(this.f.update(a))};function di(a,b,c){function d(){n||(n=new Sh(f.result,{closed:m}));return n}
var e=Yh,f=self.indexedDB.open(a,b),g=c.blocked,h=c.blocking,k=c.Sa,l=c.upgrade,m=c.closed,n;l&&f.addEventListener("upgradeneeded",function(r){if(null===r.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");var q=d(),v=new e(f.transaction);l(q,r.oldVersion,r.newVersion,v)});
g&&f.addEventListener("blocked",function(){g()});
return Rh(f).then(function(r){h&&r.addEventListener("versionchange",function(){h(d())});
k&&r.addEventListener("close",function(){k()});
return d()})}
function ei(a,b,c){c=void 0===c?{}:c;return di(a,b,c)}
;var fi,gi,hi=["getAll","getAllKeys","getKey","openKeyCursor"],ii=["getAll","getAllKeys","getKey","openKeyCursor"];function ji(){return H(this,function b(){var c,d;return z(b,function(e){switch(e.f){case 1:if(Bh&&Ch()&&!Dh()&&!S("ytidb_allow_on_ios_safari_v8_and_v9")||Ib)return e["return"](!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e["return"](!1)}catch(f){return e["return"](!1)}ta(e);return y(e,De(ei("yt-idb-test-do-not-use"),function(){}),5);
case 5:if(d=e.g,!d)return e["return"](!1);case 3:xa(e);if(d)try{d.close()}catch(f){}ya(e);break;case 2:return wa(e),e["return"](!1);case 4:return e["return"](!0)}})})}
function ki(){return void 0!==fi?Ae(fi):new M(function(a){ji().then(function(b){fi=b;a(b)})})}
function li(){return void 0!==gi?Ae(gi):ki().then(function(a){if(!a)return!1;var b=u(hi);for(a=b.next();!a.done;a=b.next())if(!IDBObjectStore.prototype[a.value])return!1;b=u(ii);for(a=b.next();!a.done;a=b.next())if(!IDBIndex.prototype[a.value])return!1;return IDBObjectStore.prototype.getKey?!0:!1}).then(function(a){return gi=a})}
;var mi;function ni(){function a(b){b.close();mi=void 0}
mi||(mi=De(ei("YtIdbMeta",1,{blocking:a,upgrade:function(b,c){1>c&&Vh(b,"databases",{keyPath:"actualName"})}}),function(b){return Oh(b)?ei("YtIdbMeta",void 0,{blocking:a}):Be(b)}));
return mi}
function oi(a){return ni().then(function(b){return b.get("databases",a.actualName).then(function(c){if(c?a.actualName!==c.actualName||a.publicName!==c.publicName||a.userIdentifier!==c.userIdentifier||a.signedIn!==c.signedIn:1)return Xh(b,a)})})}
function pi(a){return ni().then(function(b){return b["delete"]("databases",a)})}
;function qi(a){try{var b={actualName:"LogsDataBase",publicName:"LogsDataBase",userIdentifier:void 0,signedIn:!1}}catch(c){return Be(c)}return De(oi(b).then(function(){return a(b)}),function(c){return De(pi(b.actualName),function(){}).then(function(){return Be(c)})})}
function ri(){return ki().then(function(a){if(!a)throw new Lh;})}
function si(a,b){b=void 0===b?{}:b;return ri().then(function(){return qi(function(c){return ei(c.actualName,a,b)})})}
;function ti(){V.call(this,function(){});
throw Error("Not allowed to instantiate the thennable outside of the core library.");}
x(ti,V);ti.reject=V.reject;ti.resolve=V.resolve;ti.all=V.all;var ui;function vi(){return H(this,function b(){return z(b,function(c){if(!ui)try{ui=si(1,{upgrade:function(d,e){1>e&&(Vh(d,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0}).f.createIndex("newRequest",["status","authHash","timestamp"],{unique:!1}),Vh(d,"sapisid"))},
blocking:function(d){d.close();ui=void 0}})}catch(d){if(!Oh(d))return lf(d),c["return"](Promise.reject(d));
ui=si()}return c["return"](ui)})})}
function wi(a){return H(this,function c(){var d,e,f;return z(c,function(g){if(1==g.f)return y(g,xi(),2);if(3!=g.f)return d=g.g,y(g,vi(),3);e=g.g;f=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),authHash:d});return g["return"](e.add("LogsRequestsStore",f))})})}
function yi(){return H(this,function b(){var c,d,e,f,g,h;return z(b,function(k){switch(k.f){case 1:return y(k,xi(),2);case 2:return c=k.g,d=["NEW",c,0],e=["NEW",c,U()],f=IDBKeyRange.bound(d,e),y(k,vi(),3);case 3:return g=k.g,h=void 0,y(k,Th(g,["LogsRequestsStore"],"readwrite",function(l){return ai(Uh(l,"LogsRequestsStore").index("newRequest"),{query:f,direction:"prev"},function(m){m.f.value&&(h=m.f.value,h.status="QUEUED",m.update(h))})}),4);
case 4:return k["return"](h)}})})}
function zi(a){return H(this,function c(){var d;return z(c,function(e){if(1==e.f)return y(e,vi(),2);d=e.g;return e["return"](Th(d,["LogsRequestsStore"],"readwrite",function(f){var g=Uh(f,"LogsRequestsStore");return g.get(a).then(function(h){if(h)return h.status="QUEUED",W(g.f.put(h,void 0)).then(function(){return h})})}))})})}
function Ai(a){return H(this,function c(){var d;return z(c,function(e){if(1==e.f)return y(e,vi(),2);d=e.g;return e["return"](Th(d,["LogsRequestsStore"],"readwrite",function(f){var g=Uh(f,"LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",h.sendCount+=1,W(g.f.put(h,void 0)).then(function(){return h})):ti.resolve(void 0)})}))})})}
function Bi(a){return H(this,function c(){var d;return z(c,function(e){if(1==e.f)return y(e,vi(),2);d=e.g;return e["return"](d["delete"]("LogsRequestsStore",a))})})}
function xi(){return H(this,function b(){var c;return z(b,function(d){if(1==d.f){Ah.f||(Ah.f=new Ah);var e={};var f=Kc([]);f&&(e.Authorization=f,e["X-Goog-AuthUser"]=O("SESSION_INDEX",0),"INNERTUBE_HOST_OVERRIDE"in ff||(e["X-Origin"]=window.location.origin),S("pageid_as_header_web")&&"DELEGATED_SESSION_ID"in ff&&(e["X-Goog-PageId"]=O("DELEGATED_SESSION_ID")));e=Ae(e);return y(d,e,2)}c=d.g;return d["return"](th(c))})})}
;var Ci=Mf("network_polling_interval",3E4);function Di(){this.i=0;this.f=Ei();Fi(this);Gi(this)}
function Hi(){Di.f||(Di.f=new Di);return Di.f}
function Ii(a){a.f!==Ei()&&lf(Error("NetworkStatusManager isOnline does not match window status"));return a.f}
function Ji(a){var b=Ki,c=Li;(new M(function(d){a.g=d})).then(function(){b();
c&&(a.h=c)});
Mi(a)}
function Ei(){var a=window.navigator.onLine;return void 0===a?!0:a}
function Gi(a){window.addEventListener("online",function(){a.f=!0;a.g&&a.g()})}
function Fi(a){window.addEventListener("offline",function(){a.f=!1;a.h&&a.h()})}
function Mi(a){a.i||(Ni(a),Ei()&&a.g&&a.g())}
function Ni(a){a.i=Of(function(){Ei()?(!1===a.f&&lf(Error("NetworkStatusManager missed online event.")),a.f=!0,a.g&&a.g()):(!0===a.f&&lf(Error("NetworkStatusManager missed offline event.")),a.f=!1,a.h&&a.h());Ni(a)},Ci)}
;var Oi=Mf("networkless_throttle_timeout")||100,Pi=Mf("networkless_retry_attempts")||1,Qi=0;function Ri(a,b){b=void 0===b?{}:b;Si().then(function(c){var d=Ii(Hi());if(!c||S("networkless_bypass_write")||d&&S("vss_networkless_bypass_write"))jh(a,b);else{var e={url:a,options:b,timestamp:U(),status:"NEW",sendCount:0};wi(e).then(function(f){e.id=f;f=Hi();Ii(f)&&!S("networkless_always_offline")?Ti(e):Ji(f)})["catch"](function(f){Ti(e);
lf(f)})}})}
function Ki(){var a=this;Qi||(Qi=Pf(function(){return H(a,function c(){var d;return z(c,function(e){if(1==e.f)return y(e,yi(),2);if(3!=e.f)return d=e.g,d?y(e,Ti(d),3):(Li(),e["return"]());Qi=0;Ki();e.f=0})})},1,Oi))}
function Li(){var a=Qi;if(!isNaN(a)){var b=C("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}Qi=0}
function Ti(a){return H(this,function c(){var d;return z(c,function(e){switch(e.f){case 1:if(!a.id){e.C(2);break}return y(e,zi(a.id),3);case 3:(d=e.g)?a=d:mf(Error("The request cannot be found in the database."));case 2:var f=a.timestamp;if(!(2592E6<=U()-f)){e.C(4);break}mf(Error("Networkless Logging: Stored logs request expired age limit"));if(!a.id){e.C(5);break}return y(e,Bi(a.id),5);case 5:return e["return"]();case 4:f=a=Ui(a);var g,h;if(null===(h=null===(g=null===f||void 0===f?void 0:f.options)||
void 0===g?void 0:g.u)||void 0===h?0:h.requestTimeMs)f.options.u.requestTimeMs=Math.round(U());(a=f)&&jh(a.url,a.options);e.f=0}})})}
function Ui(a){var b=this,c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){return H(b,function h(){return z(h,function(k){if(1==k.f)return a&&a.id?a.sendCount<Pi?y(k,Ai(a.id),6):y(k,Bi(a.id),2):k.C(2);2!=k.f&&Ji(Hi());c(e,f);k.f=0})})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){return H(b,function h(){return z(h,function(k){if(1==k.f)return a&&a.id?y(k,Bi(a.id),2):k.C(2);d(e,f);k.f=0})})};
return a}
function Si(){return H(this,function b(){return z(b,function(c){return S("networkless_logging")?(2===Mf("networkless_ytidb_version")&&li().then(function(d){return d}),c["return"](ki())):c["return"](!1)})})}
;function Vi(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:fa(u(c)))}
x(Vi,Error);function Wi(a){var b=this;this.f=null;a?this.f=a:qh()&&(this.f=Rg());Of(function(){zh(b)},5E3)}
Wi.prototype.isReady=function(){!this.f&&qh()&&(this.f=Rg());return!!this.f};
function Ug(a,b,c,d){!O("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&mf(new Vi("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var e=new Vi("innertube xhrclient not ready",b,c,d);lf(e);e.sampleWeight=0;throw e;}var f={headers:{"Content-Type":"application/json"},method:"POST",u:c,da:"JSON",M:function(){d.M()},
ba:d.M,onSuccess:function(n,r){if(d.onSuccess)d.onSuccess(r)},
aa:function(n){if(d.onSuccess)d.onSuccess(n)},
onError:function(n,r){if(d.onError)d.onError(r)},
Qa:function(n){if(d.onError)d.onError(n)},
timeout:d.timeout,withCredentials:!0},g="";(e=a.f.qa)&&(g=e);var h=a.f.sa||!1,k=rh(h,g,d);Object.assign(f.headers,k);f.headers.Authorization&&!g&&(f.headers["x-origin"]=window.location.origin);e="/youtubei/"+a.f.innertubeApiVersion+"/"+b;var l={alt:"json"};a.f.ra&&f.headers.Authorization||(l.key=a.f.innertubeApiKey);var m=zf(""+g+e,l||{},!0);Si().then(function(n){if(d.retry&&S("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=g){if(S("networkless_gel")&&!n||!S("networkless_gel"))var r=xh(b,
c,k,h);if(r){var q=f.onSuccess,v=f.aa;f.onSuccess=function(w,F){yh(r);q(w,F)};
c.aa=function(w,F){yh(r);v(w,F)}}}try{S("use_fetch_for_op_xhr")?gh(m,f):S("networkless_gel")&&d.retry?(f.method="POST",Ri(m,f)):(f.method="POST",f.u||(f.u={}),jh(m,f))}catch(w){if("InvalidAccessError"==w.name)r&&(yh(r),r=0),mf(Error("An extension is blocking network request."));
else throw w;}r&&Of(function(){zh(a)},5E3)})}
;var Xi=[{Z:function(a){return"Cannot read property '"+a.key+"'"},
U:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{Z:function(a){return"Cannot call '"+a.key+"'"},
U:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
groups:["key"]}]}}];function Yi(){this.f=[];this.g=[]}
var Zi;var $i=new N;var aj=new Set,bj=0,cj=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function dj(a,b,c,d){c+="."+a;a=String(JSON.stringify(b)).substr(0,500);d[c]=a;return c.length+a.length}
;function Y(a,b,c){this.l=this.f=this.g=null;this.j=Na(this);this.h=0;this.s=!1;this.m=[];this.i=null;this.v=c;this.H={};c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"==a.tagName.toLowerCase(),b.host||(b.host=c?sc(a.src):"https://www.youtube.com"),this.g=new If(b),c||(b=ej(this,a),this.l=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.f=a,this.f.id||(this.f.id="widget"+Na(this.f)),Cf[this.f.id]=this,window.postMessage){this.i=new N;fj(this);b=R(this.g,"events");for(var d in b)b.hasOwnProperty(d)&&
this.addEventListener(d,b[d]);for(var e in Ef)gj(this,e)}}
p=Y.prototype;p.setSize=function(a,b){this.f.width=a;this.f.height=b;return this};
p.ta=function(){return this.f};
p.ea=function(a){this.O(a.event,a)};
p.addEventListener=function(a,b){var c=b;"string"==typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.i.subscribe(a,c);hj(this,a);return this};
function gj(a,b){var c=b.split(".");if(2==c.length){var d=c[1];a.v==c[0]&&hj(a,d)}}
p.destroy=function(){this.f.id&&(Cf[this.f.id]=null);var a=this.i;a&&"function"==typeof a.dispose&&a.dispose();if(this.l){a=this.f;var b=a.parentNode;b&&b.replaceChild(this.l,a)}else(a=this.f)&&a.parentNode&&a.parentNode.removeChild(a);Kf&&(Kf[this.j]=null);this.g=null;a=this.f;for(var c in ib)ib[c][0]==a&&sf(c);this.l=this.f=null};
p.R=function(){return{}};
function ij(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.s?a.V(b):a.m.push(b)}
p.O=function(a,b){if(!this.i.h){var c={target:this,data:b};this.i.N(a,c);Hf(this.v+"."+a,c)}};
function ej(a,b){for(var c=document.createElement("iframe"),d=b.attributes,e=0,f=d.length;e<f;e++){var g=d[e].value;null!=g&&""!=g&&"null"!=g&&c.setAttribute(d[e].name,g)}c.setAttribute("frameBorder",0);c.setAttribute("allowfullscreen",1);c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+R(a.g,"title"));(d=R(a.g,"width"))&&c.setAttribute("width",d);(d=R(a.g,"height"))&&c.setAttribute("height",d);var h=
a.R();h.enablejsapi=window.postMessage?1:0;window.location.host&&(h.origin=window.location.protocol+"//"+window.location.host);h.widgetid=a.j;window.location.href&&I(["debugjs","debugcss"],function(k){var l=window.location.href;var m=l.search(vc);b:{var n=0;for(var r=k.length;0<=(n=l.indexOf(k,n))&&n<m;){var q=l.charCodeAt(n-1);if(38==q||63==q)if(q=l.charCodeAt(n+r),!q||61==q||38==q||35==q)break b;n+=r+1}n=-1}if(0>n)l=null;else{r=l.indexOf("&",n);if(0>r||r>m)r=m;n+=k.length+1;l=decodeURIComponent(l.substr(n,
r-n).replace(/\+/g," "))}null!==l&&(h[k]=l)});
c.src=R(a.g,"host")+a.S()+"?"+uc(h);return c}
p.ca=function(){this.f&&this.f.contentWindow?this.V({event:"listening"}):window.clearInterval(this.h)};
function fj(a){Jf(a.g,a,a.j);a.h=wf(Va(a.ca,a));uf(a.f,"load",Va(function(){window.clearInterval(this.h);this.h=wf(Va(this.ca,this))},a))}
function hj(a,b){a.H[b]||(a.H[b]=!0,ij(a,"addEventListener",[b]))}
p.V=function(a){a.id=this.j;a.channel="widget";var b=ve(a),c=this.g,d=sc(this.f.src||"");var e=0==d.indexOf("https:")?[d]:c.f?[d.replace("http:","https:")]:c.h?[d]:[d,d.replace("http:","https:")];if(this.f.contentWindow)for(var f=0;f<e.length;f++)try{this.f.contentWindow.postMessage(b,e[f])}catch(Qa){if(Qa.name&&"SyntaxError"==Qa.name){if(!(Qa.message&&0<Qa.message.indexOf("target origin ''"))){var g=void 0,h=void 0,k=Qa;h=void 0===h?{}:h;h.name=O("INNERTUBE_CONTEXT_CLIENT_NAME",1);h.version=O("INNERTUBE_CONTEXT_CLIENT_VERSION",
void 0);var l=h||{},m="WARNING";m=void 0===m?"ERROR":m;g=void 0===g?!1:g;if(k){if(S("console_log_js_exceptions")){var n=k,r=[];r.push("Name: "+n.name);r.push("Message: "+n.message);n.hasOwnProperty("params")&&r.push("Error Params: "+JSON.stringify(n.params));r.push("File name: "+n.fileName);r.push("Stacktrace: "+n.stack);window.console.log(r.join("\n"),n)}if((window&&window.yterr||g)&&!(5<=bj)&&0!==k.sampleWeight){var q=void 0,v=k,w=l,F=Zb(v),Ya=F.message||"Unknown Error",na=F.name||"UnknownError",
Ja=F.lineNumber||"Not available",oj=F.fileName||"Not available",pj=F.stack||v.f||"Not available";if(v.hasOwnProperty("args")&&v.args&&v.args.length)for(var ua=0,$b=0;$b<v.args.length;$b++){var T=v.args[$b],Fa="params."+$b;ua+=Fa.length;if(T)if(Array.isArray(T)){for(var qj=w,Ad=ua,mb=0;mb<T.length&&!(T[mb]&&(Ad+=dj(mb,T[mb],Fa,qj),500<Ad));mb++);ua=Ad}else if("object"===typeof T){var ac=void 0,rj=w,Bd=ua;for(ac in T)if(T[ac]&&(Bd+=dj(ac,T[ac],Fa,rj),500<Bd))break;ua=Bd}else w[Fa]=String(JSON.stringify(T)).substring(0,
500),ua+=w[Fa].length;else w[Fa]=String(JSON.stringify(T)).substring(0,500),ua+=w[Fa].length;if(500<=ua)break}else if(v.hasOwnProperty("params")&&v.params){var bc=v.params;if("object"===typeof v.params){var $f=0;for(q in bc)if(bc[q]){var ag="params."+q,bg=String(JSON.stringify(bc[q])).substr(0,500);w[ag]=bg;$f+=ag.length+bg.length;if(500<$f)break}}else w.params=String(JSON.stringify(bc)).substr(0,500)}navigator.vendor&&!w.hasOwnProperty("vendor")&&(w.vendor=navigator.vendor);var Cd={message:Ya,name:na,
lineNumber:Ja,fileName:oj,stack:pj,params:w},cg=Number(v.columnNumber);isNaN(cg)||(Cd.lineNumber=Cd.lineNumber+":"+cg);for(var ha,Ga=Cd,dg=u(Xi),Dd=dg.next();!Dd.done;Dd=dg.next()){var Ed=Dd.value;if(Ed.U[Ga.name])for(var eg=u(Ed.U[Ga.name]),Fd=eg.next();!Fd.done;Fd=eg.next()){var fg=Fd.value,cc=Ga.message.match(fg.regexp);if(cc){Ga.params["error.original"]=cc[0];for(var Gd=fg.groups,gg={},Ra=0;Ra<Gd.length;Ra++)gg[Gd[Ra]]=cc[Ra+1],Ga.params["error."+Gd[Ra]]=cc[Ra+1];Ga.message=Ed.Z(gg);break}}}ha=
Ga;window.yterr&&"function"===typeof window.yterr&&window.yterr(ha);if(!(aj.has(ha.message)||0<=ha.stack.indexOf("/YouTubeCenter.js")||0<=ha.stack.indexOf("/mytube.js"))){$i.N("handleError",ha);if(S("kevlar_gel_error_routing")){var dc=void 0,hg=m,P=ha;a:{for(var ig=u(cj),Hd=ig.next();!Hd.done;Hd=ig.next()){var jg=J;if(jg&&0<=jg.toLowerCase().indexOf(Hd.value.toLowerCase())){var kg=!0;break a}}kg=!1}if(!kg){var nb={stackTrace:P.stack};P.fileName&&(nb.filename=P.fileName);var ia=P.lineNumber&&P.lineNumber.split?
P.lineNumber.split(":"):[];0!==ia.length&&(1!==ia.length||isNaN(Number(ia[0]))?2!==ia.length||isNaN(Number(ia[0]))||isNaN(Number(ia[1]))||(nb.lineNumber=Number(ia[0]),nb.columnNumber=Number(ia[1])):nb.lineNumber=Number(ia[0]));var sj=P.message,tj=P.name;Zi||(Zi=new Yi);var lg=Zi;a:{for(var mg=u(lg.g),Id=mg.next();!Id.done;Id=mg.next()){var ng=Id.value;if(P.message&&P.message.match(ng.f)){var Jd=ng.weight;break a}}for(var og=u(lg.f),Kd=og.next();!Kd.done;Kd=og.next()){var pg=Kd.value;if(pg.f(P)){Jd=
pg.weight;break a}}Jd=1}var Ld={level:"ERROR_LEVEL_UNKNOWN",message:sj,errorClassName:tj,sampleWeight:Jd};"ERROR"===hg?Ld.level="ERROR_LEVEL_ERROR":"WARNING"===hg&&(Ld.level="ERROR_LEVEL_WARNNING");var uj={isObfuscated:!0,browserStackInfo:nb},Sa={pageUrl:window.location.href};O("FORCED_EXPERIMENTS")&&(Sa.experimentIds=O("FORCED_EXPERIMENTS"));Sa.kvPairs=[];var Md=P.params;if(Md)for(var qg=u(Object.keys(Md)),Nd=qg.next();!Nd.done;Nd=qg.next()){var rg=Nd.value;Sa.kvPairs.push({key:"client."+rg,value:String(Md[rg])})}var sg=
O("SERVER_NAME",void 0),tg=O("SERVER_VERSION",void 0);sg&&tg&&(Sa.kvPairs.push({key:"server.name",value:sg}),Sa.kvPairs.push({key:"server.version",value:tg}));var vj={errorMetadata:Sa,stackTrace:uj,logMessage:Ld};dc=void 0===dc?{}:dc;var ug=Wi;O("ytLoggingEventsDefaultDisabled",!1)&&Wi==Wi&&(ug=null);var wj=ug,X=dc;X=void 0===X?{}:X;var ob={};ob.eventTimeMs=Math.round(X.timestamp||U());ob.clientError=vj;var xj=String;if(X.timestamp)var vg=-1;else{var wg=C("_lact",window);vg=null==wg?-1:Math.max(Date.now()-
wg,0)}ob.context={lastActivityMs:xj(vg)};if(S("log_sequence_info_on_gel_web")&&X.fa){var yj=ob.context,pb=X.fa;Vg[pb]=pb in Vg?Vg[pb]+1:0;yj.sequence={index:Vg[pb],groupKey:pb};X.Na&&delete Vg[X.fa]}var zj=ob,ec=X.Ma,xg=wj,Od="";if(ec){var fc=ec,Pd={};fc.videoId?Pd.videoId=fc.videoId:fc.playlistId&&(Pd.playlistId=fc.playlistId);Mg[ec.token]=Pd;Od=ec.token}var Qd=Lg.get(Od)||[];Lg.set(Od,Qd);Qd.push(zj);xg&&(Fg=new xg);var Aj=Mf("web_logging_max_batch")||100,yg=U();Qd.length>=Aj?Ng():10<=yg-Ig&&(Pg(),
Ig=yg);Ng()}}var Rd,Ha=ha,qb=Ha.params||{},va={ua:{a:"logerror",t:"jserror",type:Ha.name,msg:Ha.message.substr(0,250),line:Ha.lineNumber,level:m,"client.name":qb.name},u:{url:O("PAGE_NAME",window.location.href),file:Ha.fileName},method:"POST"};qb.version&&(va["client.version"]=qb.version);if(va.u){Ha.stack&&(va.u.stack=Ha.stack);for(var zg=u(Object.keys(qb)),Sd=zg.next();!Sd.done;Sd=zg.next()){var Ag=Sd.value;va.u["client."+Ag]=qb[Ag]}if(Rd=O("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var Bg=
u(Object.keys(Rd)),Td=Bg.next();!Td.done;Td=Bg.next()){var Cg=Td.value;va.u[Cg]=Rd[Cg]}var Dg=O("SERVER_NAME",void 0),Eg=O("SERVER_VERSION",void 0);Dg&&Eg&&(va.u["server.name"]=Dg,va.u["server.version"]=Eg)}jh(O("ECATCHER_REPORT_HOST","")+"/error_204",va);aj.add(ha.message);bj++}}}}}else throw Qa;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function jj(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function kj(a){return 0===a.search("get")||0===a.search("is")}
;function Z(a,b){if(!a)throw Error("YouTube player element ID required.");var c={title:"video player",videoId:"",width:640,height:360};if(b)for(var d in b)c[d]=b[d];Y.call(this,a,c,"player");this.D={};this.playerInfo={}}
x(Z,Y);p=Z.prototype;p.S=function(){return"/embed/"+R(this.g,"videoId")};
p.R=function(){var a=R(this.g,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!=window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=R(this.g,"embedConfig")){if(D(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
p.ea=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(D(a))for(var c in a)this.D[c]=a[c];break;case "infoDelivery":lj(this,a);break;case "initialDelivery":window.clearInterval(this.h);this.playerInfo={};this.D={};mj(this,a.apiInterface);lj(this,a);break;default:this.O(b,a)}};
function lj(a,b){if(D(b))for(var c in b)a.playerInfo[c]=b[c]}
function mj(a,b){I(b,function(c){this[c]||("getCurrentTime"==c?this[c]=function(){var d=this.playerInfo.currentTime;if(1==this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:jj(c)?this[c]=function(){this.playerInfo={};
this.D={};ij(this,c,arguments);return this}:kj(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){ij(this,c,arguments);
return this})},a)}
p.getVideoEmbedCode=function(){var a=parseInt(R(this.g,"width"),10),b=parseInt(R(this.g,"height"),10),c=R(this.g,"host")+this.S();Ab.test(c)&&(-1!=c.indexOf("&")&&(c=c.replace(ub,"&amp;")),-1!=c.indexOf("<")&&(c=c.replace(vb,"&lt;")),-1!=c.indexOf(">")&&(c=c.replace(wb,"&gt;")),-1!=c.indexOf('"')&&(c=c.replace(xb,"&quot;")),-1!=c.indexOf("'")&&(c=c.replace(yb,"&#39;")),-1!=c.indexOf("\x00")&&(c=c.replace(zb,"&#0;")));return'<iframe width="'+a+'" height="'+b+'" src="'+c+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'};
p.getOptions=function(a){return this.D.namespaces?a?this.D[a].options||[]:this.D.namespaces||[]:[]};
p.getOption=function(a,b){if(this.D.namespaces&&a&&b)return this.D[a][b]};
function nj(a){if("iframe"!=a.tagName.toLowerCase()){var b=Q(a,"videoid");b&&(b={videoId:b,width:Q(a,"width"),height:Q(a,"height")},new Z(a,b))}}
;function Bj(a,b){var c={title:"Thumbnail",videoId:"",width:120,height:68};if(b)for(var d in b)c[d]=b[d];Y.call(this,a,c,"thumbnail")}
x(Bj,Y);Bj.prototype.S=function(){return"/embed/"+R(this.g,"videoId")};
Bj.prototype.R=function(){return{player:0,thumb_width:R(this.g,"thumbWidth"),thumb_height:R(this.g,"thumbHeight"),thumb_align:R(this.g,"thumbAlign")}};
Bj.prototype.O=function(a,b){Y.prototype.O.call(this,a,b?b.info:void 0)};
function Cj(a){if("iframe"!=a.tagName.toLowerCase()){var b=Q(a,"videoid");if(b){b={videoId:b,events:{},width:Q(a,"width"),height:Q(a,"height"),thumbWidth:Q(a,"thumb-width"),thumbHeight:Q(a,"thumb-height"),thumbAlign:Q(a,"thumb-align")};var c=Q(a,"onclick");c&&(b.events.onClick=c);new Bj(a,b)}}}
;E("YT.PlayerState.UNSTARTED",-1);E("YT.PlayerState.ENDED",0);E("YT.PlayerState.PLAYING",1);E("YT.PlayerState.PAUSED",2);E("YT.PlayerState.BUFFERING",3);E("YT.PlayerState.CUED",5);E("YT.get",function(a){return Cf[a]});
E("YT.scan",Ff);E("YT.subscribe",function(a,b,c){Pe.subscribe(a,b,c);Ef[a]=!0;for(var d in Cf)gj(Cf[d],a)});
E("YT.unsubscribe",function(a,b,c){Oe(a,b,c)});
E("YT.Player",Z);E("YT.Thumbnail",Bj);Y.prototype.destroy=Y.prototype.destroy;Y.prototype.setSize=Y.prototype.setSize;Y.prototype.getIframe=Y.prototype.ta;Y.prototype.addEventListener=Y.prototype.addEventListener;Z.prototype.getVideoEmbedCode=Z.prototype.getVideoEmbedCode;Z.prototype.getOptions=Z.prototype.getOptions;Z.prototype.getOption=Z.prototype.getOption;Df.push(function(a){a=Gf("player",a);I(a,nj)});
Df.push(function(){var a=Gf("thumbnail");I(a,Cj)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Ff();var Dj=B.onYTReady;Dj&&Dj();var Ej=B.onYouTubeIframeAPIReady;Ej&&Ej();var Fj=B.onYouTubePlayerAPIReady;Fj&&Fj();}).call(this);
