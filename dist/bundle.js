!function(t){var n={};function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(i,r,function(n){return t[n]}.bind(null,r));return i},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=4)}([function(t,n,e){var i=e(1);"string"==typeof i&&(i=[[t.i,i,""]]);var r={insert:"head",singleton:!1};e(3)(i,r);i.locals&&(t.exports=i.locals)},function(t,n,e){(t.exports=e(2)(!1)).push([t.i,"body {\r\n    font-family: sans-serif;\r\n    padding: 0;\r\n    margin: 0;\r\n    border: none;\r\n    overflow: hidden;\r\n    background-color: black\r\n}\r\n#surface {\r\n    background-color: #1B2F15;\r\n    filter: blur(18px)\r\n}\r\n#app {\r\n    position: absolute;\r\n    width: 180px;\r\n    z-index: 101;\r\n}\r\n#textInput {\r\n    position: absolute;\r\n    width: 180px;\r\n    z-index: 101;\r\n    background-color: black;\r\n    border: none;\r\n    outline-color: #E0D85C;\r\n    color: #E0D85C\r\n}\r\n#output {\r\n    position: absolute;\r\n    vertical-align: middle;\r\n    display: flex;\r\n    z-index: 101;\r\n    color: white;\r\n    font-size: 2em;\r\n}\r\n.element {\r\n    position: relative;\r\n    bottom: 0;\r\n    color: white;\r\n    border: 1px solid white;\r\n    width: 80px;\r\n    padding: 2px;\r\n    margin: 0 8px 0 0\r\n}\r\n.wider {\r\n    width: 104px\r\n}\r\n.element, h1 {\r\n    font-weight: bolder;\r\n}\r\n.element > h6 {\r\n    font-size: 0.35em;\r\n}\r\n.element > h1, h6 {\r\n    text-align: center;\r\n    margin: 0;\r\n}\r\n.text {\r\n    min-width: 17px;\r\n}\r\n.text > h1 {\r\n    padding: 28px 0 0 0;\r\n    margin: 0 8px 0 0;\r\n}\r\n.align-left {\r\n    text-align: left;\r\n}\r\n.spacer {\r\n    width: 28px\r\n}\r\n",""])},function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=function(t,n){var e=t[1]||"",i=t[3];if(!i)return e;if(n&&"function"==typeof btoa){var r=(a=i,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(u," */")),o=i.sources.map((function(t){return"/*# sourceURL=".concat(i.sourceRoot).concat(t," */")}));return[e].concat(o).concat([r]).join("\n")}var a,s,u;return[e].join("\n")}(n,t);return n[2]?"@media ".concat(n[2],"{").concat(e,"}"):e})).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(i[o]=!0)}for(var a=0;a<t.length;a++){var s=t[a];null!=s[0]&&i[s[0]]||(e&&!s[2]?s[2]=e:e&&(s[2]="(".concat(s[2],") and (").concat(e,")")),n.push(s))}},n}},function(t,n,e){"use strict";var i,r={},o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},a=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}();function s(t,n){for(var e=[],i={},r=0;r<t.length;r++){var o=t[r],a=n.base?o[0]+n.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};i[a]?i[a].parts.push(s):e.push(i[a]={id:a,parts:[s]})}return e}function u(t,n){for(var e=0;e<t.length;e++){var i=t[e],o=r[i.id],a=0;if(o){for(o.refs++;a<o.parts.length;a++)o.parts[a](i.parts[a]);for(;a<i.parts.length;a++)o.parts.push(v(i.parts[a],n))}else{for(var s=[];a<i.parts.length;a++)s.push(v(i.parts[a],n));r[i.id]={id:i.id,refs:1,parts:s}}}}function l(t){var n=document.createElement("style");if(void 0===t.attributes.nonce){var i=e.nc;i&&(t.attributes.nonce=i)}if(Object.keys(t.attributes).forEach((function(e){n.setAttribute(e,t.attributes[e])})),"function"==typeof t.insert)t.insert(n);else{var r=a(t.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}return n}var c,h=(c=[],function(t,n){return c[t]=n,c.filter(Boolean).join("\n")});function f(t,n,e,i){var r=e?"":i.css;if(t.styleSheet)t.styleSheet.cssText=h(n,r);else{var o=document.createTextNode(r),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(o,a[n]):t.appendChild(o)}}function d(t,n,e){var i=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),o&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var m=null,p=0;function v(t,n){var e,i,r;if(n.singleton){var o=p++;e=m||(m=l(n)),i=f.bind(null,e,o,!1),r=f.bind(null,e,o,!0)}else e=l(n),i=d.bind(null,e,n),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return i(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;i(t=n)}else r()}}t.exports=function(t,n){(n=n||{}).attributes="object"==typeof n.attributes?n.attributes:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=o());var e=s(t,n);return u(e,n),function(t){for(var i=[],o=0;o<e.length;o++){var a=e[o],l=r[a.id];l&&(l.refs--,i.push(l))}t&&u(s(t,n),n);for(var c=0;c<i.length;c++){var h=i[c];if(0===h.refs){for(var f=0;f<h.parts.length;f++)h.parts[f]();delete r[h.id]}}}}},function(t,n,e){"use strict";function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}e.r(n);var r=function t(n,e){var r=this;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,"x",void 0),i(this,"y",void 0),i(this,"multiply",(function(n){return new t(r.x*n,r.y*n)})),i(this,"multiplyTo",(function(t){r.x*=t,r.y*=t})),i(this,"addTo",(function(t){r.x+=t.x,r.y+=t.y})),this.x=n,this.y=e},o=Math.PI/180,a=function(t){return t*o},s=function(t){for(var n=[],e=0;e<=180;e+=t)n.push(Math.sin(a(e)));return n};function u(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var e=[],i=!0,r=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done)&&(e.push(a.value),!n||e.length!==n);i=!0);}catch(t){r=!0,o=t}finally{try{i||null==s.return||s.return()}finally{if(r)throw o}}return e}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function l(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var c=function t(n,e,i){var o=this;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,"v_position",void 0),l(this,"v_velocity",void 0),l(this,"particleSystem",void 0),l(this,"age",void 0),l(this,"mass",void 0),l(this,"id",void 0),l(this,"doRender",void 0),l(this,"create",(function(){o.v_position=new r(0,0),o.age=0,o.particleSystem.registerLife(1),o.mass=Math.random();var t=o.particleSystem.direction,n=.25*((1-2*Math.random())*Math.PI)+t;o.v_velocity=new r(Math.cos(n),Math.sin(n));var e,i,a=(e=3,i=9,Math.random()*(i-e)+e);o.v_velocity.multiplyTo(a)})),l(this,"simulate",(function(){o.v_position.addTo(o.v_velocity),o.age+=o.particleSystem.ageRate,o.age>=1&&o.particleSystem.unRegisterLife(1)})),l(this,"render",(function(t){var n=t.multiply(.3*o.age*(1-o.mass));o.v_position.addTo(n);var e=u(o.particleSystem.getCoords(),2),i=e[0],r=e[1],a=o.v_position.x+i,s=o.v_position.y+r;o.doRender(a,s,o.age)})),l(this,"isAlive",(function(){return o.age<1})),l(this,"getCoords",(function(){var t=o.v_position;return[t.x,t.y]})),this.id=n,this.particleSystem=e,this.doRender=i,this.age=1};function h(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var e=[],i=!0,r=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done)&&(e.push(a.value),!n||e.length!==n);i=!0);}catch(t){r=!0,o=t}finally{try{i||null==s.return||s.return()}finally{if(r)throw o}}return e}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function f(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var d=function t(n,e,i){var r=this;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,"id",void 0),f(this,"particleSystem",void 0),f(this,"maxPoints",void 0),f(this,"minPoints",void 0),f(this,"points",void 0),f(this,"doRender",void 0),f(this,"age",void 0),f(this,"create",(function(t){r.points=t,r.age=0})),f(this,"simulate",(function(){r.age+=r.particleSystem.splineAgeRate,(r.points.length<r.minPoints||r.age>=1)&&(r.particleSystem.registerLife(r.points.length),r.points.length=0)})),f(this,"render",(function(t,n){var e=[];r.points.forEach((function(i){if(i.isAlive()){var r=h(i.getCoords(),2),o=r[0],a=r[1];e.push(o+t,a+n)}})),r.doRender(e,r.age)})),f(this,"isAlive",(function(){return r.points.length>0&&r.age<1})),this.id=n,this.particleSystem=e,this.doRender=i,this.maxPoints=16,this.minPoints=6,this.points=[],this.age=1};function m(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var p=function t(n,e,i,o,s,u,l,h,f,p,v,g){var y=this;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,"particles",void 0),m(this,"maxParticles",void 0),m(this,"direction",void 0),m(this,"dispersion",void 0),m(this,"ageRate",void 0),m(this,"splineAgeRate",void 0),m(this,"effects",void 0),m(this,"splines",void 0),m(this,"maxSplines",void 0),m(this,"v_position",void 0),m(this,"particlePerSecond",void 0),m(this,"splinesPerSecond",void 0),m(this,"particlesResidue",void 0),m(this,"splinesResidue",void 0),m(this,"lastSimulation",void 0),m(this,"liveCandidates",void 0),m(this,"simulate",(function(){var t=Date.now(),n=(t-y.lastSimulation)/1e3;y.lastSimulation=t;var e=Math.floor(y.particlePerSecond*n+y.particlesResidue);y.particlesResidue=y.particlePerSecond+y.particlesResidue-e;var i=Math.floor(y.splinesPerSecond*n+y.splinesResidue);y.splinesResidue=y.splinesPerSecond+y.splinesResidue-i,y.particles.forEach((function(t){t.isAlive()?t.simulate():e>0&&(t.create(),e--)})),y.splines.forEach((function(t){if(t.isAlive())t.simulate();else if(i>0&&y.liveCandidates>=t.minPoints){var n=y.particles.filter((function(t){return t.isAlive()})).sort((function(t,n){return t.age-n.age})).slice(0,Math.floor(t.maxPoints*Math.random()+2));y.liveCandidates-=n.length,t.create(n),i--}}))})),m(this,"render",(function(){var t=new r(0,0);y.effects.forEach((function(n){return t.addTo(n.getVector())})),y.particles.forEach((function(n){n.isAlive()&&n.render(t)}));var n=y.v_position,e=n.x,i=n.y;y.splines.sort((function(t,n){return n.age-t.age})).forEach((function(t){t.isAlive()&&t.render(e,i)}))})),m(this,"registerLife",(function(t){return y.liveCandidates+=t})),m(this,"unRegisterLife",(function(t){return y.liveCandidates-=t})),m(this,"getCoords",(function(){var t=y.v_position;return[t.x,t.y]})),this.direction=a(n),this.dispersion=e,this.v_position=i,this.maxParticles=o,this.particlePerSecond=s,this.ageRate=u,this.splineAgeRate=l,this.effects=h,this.maxSplines=f,this.splinesPerSecond=p,this.particles=[],this.particlesResidue=0,this.splinesResidue=0,this.lastSimulation=Date.now(),this.liveCandidates=0,this.splines=[];for(var b=0;b<this.maxParticles;b++)this.particles.push(new c(b,this,v));for(var w=0;w<this.maxSplines;w++)this.splines.push(new d(w,this,g))};function v(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function g(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var y=function t(){var n=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;v(this,t),g(this,"r",void 0),g(this,"g",void 0),g(this,"b",void 0),g(this,"a",void 0),g(this,"interpolate",(function(e,i){return new t(n.r+(e.r-n.r)*i,n.g+(e.g-n.g)*i,n.b+(e.b-n.b)*i,n.a+(e.a-n.a)*i)})),g(this,"toHex",(function(){return"#"+("00000"+(n.b|n.g<<8|n.r<<16).toString(16)).slice(-6)}));var a=arguments[0];if(1===arguments.length&&"string"==typeof a){var s="#"===a[0]?a.slice(1):a,u=function(t){return parseInt(t,16)};this.r=u(s.substring(0,2)),this.g=u(s.substring(2,4)),this.b=u(s.substring(4,6)),this.a=1}else this.r=e,this.g=i,this.b=r,this.a=o};function b(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function w(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var S=function t(n,e,i,r){var o=this,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;b(this,t),w(this,"sineValues",void 0),w(this,"v_direction",void 0),w(this,"magnitude",void 0),w(this,"rate",void 0),w(this,"i",void 0),w(this,"getVector",(function(){var t=o.v_direction.multiply(o.sineValues[Math.floor(o.i)]*o.magnitude);return o.i+=o.rate,o.i>=o.sineValues.length&&(o.i=o.i%o.sineValues.length),t})),this.sineValues=n,this.v_direction=e,this.magnitude=i,this.rate=r,this.i=a%n.length};
/*!	Curve function for canvas 2.3.8
 *	(c) Epistemex 2013-2018
 *	www.epistemex.com
 *	License: MIT
 */var x=function t(n,e,i,r){var o,a,s,u=this;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),s=function(){return'<div class="element '.concat(2===u.ChemicalSymbol.length?"wider":"",'">\n            <h6 class="align-left">').concat(u.AtomicNumber,"</h6>\n            <h1>").concat(u.ChemicalSymbol,"</h1>\n            <h6>").concat(u.Name,"</h6>\n            <h6>").concat(u.AtomicMass,"</h6>\n        </div>")},(a="getTemplate")in(o=this)?Object.defineProperty(o,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):o[a]=s,this.AtomicNumber=n,this.AtomicMass=e,this.Name=i,this.ChemicalSymbol=r};function C(t,n,e){return(C=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,n,e){var i=[null];i.push.apply(i,n);var r=new(Function.bind.apply(t,i));return e&&P(r,e.prototype),r}).apply(null,arguments)}function P(t,n){return(P=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function R(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function T(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}e(0);function A(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var e=[],i=!0,r=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done)&&(e.push(a.value),!n||e.length!==n);i=!0);}catch(t){r=!0,o=t}finally{try{i||null==s.return||s.return()}finally{if(r)throw o}}return e}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var M,E,j,O=document.getElementById("textInput"),_=document.getElementById("output"),N=document.getElementById("surface"),L=N.getContext("2d"),B=0,I=0,U=new function t(){var n=this;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),T(this,"elements",void 0),T(this,"breakBad",(function(t){var e=[],i=[],r=[],o=t.trim().split(" ");return o.forEach((function(t,a){for(var s=t.toLowerCase(),u=n.elements.length,l=!1;u--&&!l;){var c=n.elements[u];-1!==s.indexOf(c.ChemicalSymbol.toLowerCase())&&function(){var t=c.ChemicalSymbol;l=!0,i.forEach((function(n){var e=n.ChemicalSymbol;return l&=e!==t})),e.push(c)}()}if(e.length>0){var h=e.pop();i.push(h);var f=h.ChemicalSymbol,d=f.length,m=t.search(new RegExp(f,"i"));m>0&&r.push(t.slice(0,m)),r.push(h),t.length>m+d&&r.push(t.slice(m+d))}else r.push(t);a<o.length-1&&r.push(null)})),r}));var e="1,1.00794,Hydrogen,H;2,4.002602,Helium,He;3,6.941,Lithium,Li;4,9.012182,Beryllium,Be;5,10.811,Boron,B;6,12.0107,Carbon,C;7,14.0067,Nitrogen,N;8,15.9994,Oxygen,O;9,18.9994,Fluorine,F;10,20.1797,Neon,Ne;11,22.98976928,Sodium,Na;12,24.305,Magnesium,Mg;13,26.9815386,aluminium,Al;14,28.0855,Silicon,Si;15,30.973762,Phosphorus,P;16,32.065,Sulphur,S;17,35.453,Chlorine,Cl;18,39.948,Argon,Ar;19,39.0983,Potassium,K;20,40.078,Calcium,Ca;21,44.955912,Scandium,Sc;22,47.867,Titanium,Ti;23,50.9415,Vanadium,V;24,51.9961,Chromium,Cr;25,54.938045,Manganese,Mn;26,55.845,Iron,Fe;27,58.933195,Cobalt,Co;28,58.6934,Nickel,Ni;29,63.546,Copper,Cu;30,65.38,Zinc,Zn;31,69.723,Gallium,Ga;32,72.64,Germanium,Ge;33,74.9216,Arsenic,As;34,78.96,Selenium,Se;35,79.904,Bromine,Br;36,83.798,Krypton,Kr;37,85.4678,Rubidium,Rb;38,87.62,Strontium,Sr;39,88.90585,Yttrium,Y;40,91.224,Zirkonium,Zr;41,92.90638,Niobium,Nb;42,95.96,Molybdaenum,Mo;43,98,Technetium,Tc;44,101.07,Ruthenium,Ru;45,102.9055,Rhodium,Rh;46,106.42,Palladium,Pd;47,107.8682,Silver,Ag;48,112.411,Cadmium,Cd;49,114.818,Indium,In;50,118.71,Tin,Sn;51,121.76,Antimony,Sb;52,127.6,Tellurium,Te;53,126.90447,Iodine,I;54,131.293,Xenon,Xe;55,132.9054519,Cesium,Cs;56,137.327,Barium,Ba;57,138.90547,Lanthanum,La;58,140.116,Cerium,Ce;59,140.90765,Praseodymium,Pr;60,144.242,Neodymium,Nd;61,145,Promethium,Pm;62,150.36,Samarium,Sm;63,151.964,Europium,Eu;64,157.25,Gadolinium,Gd;65,158.92535,Terbium,Tb;66,162.5001,Dysprosium,Dy;67,164.93032,Holmium,Ho;68,167.259,Erbium,Er;69,168.93421,Thulium,Tm;70,173.054,Ytterbium,Yb;71,174.9668,Lutetium,Lu;72,178.49,Hafnium,Hf;73,180.94788,Tantalum,Ta;74,183.84,Tungsten,W;75,186.207,Rhenium,Re;76,190.23,Osmium,Os;77,192.217,Iridium,Ir;78,192.084,Platinum,Pt;79,196.966569,Gold,Au;80,200.59,Hydrargyrum,Hg;81,204.3833,Thallium,Tl;82,207.2,Lead,Pb;83,208.980401,Bismuth,Bi;84,210,Polonium,Po;85,210,Astatine,At;86,220,Radon,Rn;87,223,Francium,Fr;88,226,Radium,Ra;89,227,Actinium,Ac;90,232.03806,Thorium,Th;91,231.03588,Protactinium,Pa;92,238.02891,Uranium,U;93,237,Neptunium,Np;94,244,Plutonium,Pu;95,243,Americium,Am;96,247,Curium,Cm;97,247,Berkelium,Bk;98,251,Californium,Cf;99,252,Einsteinium,Es;100,257,Fermium,Fm;101,258,Mendelevium,Md;102,259,Nobelium,No;103,262,Lawrencium,Lr;104,261,Rutherfordium,Rf;105,262,Dubnium,Db;106,266,Seaborgium,Sg;107,264,Bohrium,Bh;108,277,Hassium,Hs;109,268,Meitnerium,Mt;110,271,Ununnilium,Ds;111,272,Unununium,Rg;112,285,Ununbium,Uub;113,284,Ununtrium,Uut;114,289,Ununquadium,Uuq;115,288,Ununpentium,Uup;116,292,Ununhexium,Uuh;118,294,Ununoctium,Uuo".split(";");this.elements=[];for(var i=e.length;i--;)this.elements.push(C(x,R(e[i].split(","))));this.elements.sort((function(t,n){return t.ChemicalSymbol.length-n.ChemicalSymbol.length}))},H=new y("#E0D85C"),F=new y("#1B2F15");function k(t,n){L.beginPath();var e=function(t,n,e,i,r){if(void 0===n||n.length<2)return new Float32Array(0);e="number"==typeof e?e:.5,i="number"==typeof i?i:25;var o,a=1,s=n.length,u=0,l=4,c=new Float32Array((s-2)*i+2+(r?2*i:0)),h=new Float32Array(i+2<<2);for(o=n.slice(0),r?(o.unshift(n[s-1]),o.unshift(n[s-2]),o.push(n[0],n[1])):(o.unshift(n[1]),o.unshift(n[0]),o.push(n[s-2],n[s-1])),h[0]=1;a<i;a++){var f=a/i,d=f*f,m=d*f,p=2*m,v=3*d;h[l++]=p-v+1,h[l++]=v-p,h[l++]=m-2*d+f,h[l++]=m-d}function g(t,n,e,r){for(var o,a=2;a<e;a+=2){var s=t[a],l=t[a+1],h=t[a+2],f=t[a+3],d=(h-t[a-2])*r,m=(f-t[a-1])*r,p=(t[a+4]-s)*r,v=(t[a+5]-l)*r,g=0,y=void 0,b=void 0,w=void 0,S=void 0;for(o=0;o<i;o++)y=n[g++],b=n[g++],w=n[g++],S=n[g++],c[u++]=y*s+b*h+w*d+S*p,c[u++]=y*l+b*f+w*m+S*v}}for(h[++l]=1,g(o,h,s,e),r&&((o=[]).push(n[s-4],n[s-3],n[s-2],n[s-1],n[0],n[1],n[2],n[3]),g(o,h,4,e)),s=r?0:n.length-2,c[u++]=n[s++],c[u]=n[s],a=0,s=c.length;a<s;a+=2)t.lineTo(c[a],c[a+1]);return c}(L,t,1,30,!0);L.moveTo(e[0],e[1]);for(var i=2,r=e.length;i<r;i+=2){var o=Math.floor(e[i]),a=Math.floor(e[i+1]);L.lineTo(o,a)}L.lineWidth=Math.floor(12*n)+6,L.strokeStyle=H.interpolate(F,n).toHex(),L.stroke()}function D(){var t;j=new p(195,.3,new r(M+70,.67*E),260,2,.009,.01,(t=s(2),[new S(t,new r(-.2,-1),70,.33),new S(t,new r(-1,-.5),30,.15,30),new S(t,new r(-1,1),15,.01,45)]),14,.14,(function(){return null}),k)}function V(){window.requestAnimationFrame(V),L.clearRect(B,I,M-B,E-I),j.simulate(),j.render()}function G(){var t,n=A([(t=window).innerWidth,t.innerHeight],2),e=n[0],i=n[1];M=N.width=e,E=N.height=i,_.style.left=(M-180)/2+"px",_.style.top=E/2-18+"px",O.style.left=(M-180)/2+"px",O.style.top=E-32+"px"}var z=function(t){return'\n    <div class="text">\n        <h1>'.concat(t,"</h1>\n    </div>\n")};window.addEventListener("resize",(function(){G(),D()})),window.addEventListener("load",(function(){G(),D(),O.onkeyup=function(t){var n=t.target.value,e=U.breakBad(n);_.innerHTML="",_.style.left=M/2-9*n.length+"px",e.forEach((function(t){_.innerHTML+=null===t?'<span class="spacer" />':"string"==typeof t?z(t):t.getTemplate()}))},window.requestAnimationFrame(V)}))}]);