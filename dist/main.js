/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t={705:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",i=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),i&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),i&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,i,r,o){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(i)for(var s=0;s<this.length;s++){var u=this[s][0];null!=u&&(a[u]=!0)}for(var l=0;l<t.length;l++){var c=[].concat(t[l]);i&&a[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),e&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=e):c[2]=e),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),n.push(c))}},n}},738:t=>{t.exports=function(t){return t[1]}},47:(t,n,e)=>{e.d(n,{Z:()=>s});var i=e(738),r=e.n(i),o=e(705),a=e.n(o)()(r());a.push([t.id,'body {\r\n    font-family: "Cooper Medium", sans-serif;\r\n    padding: 0;\r\n    margin: 0;\r\n    border: none;\r\n    overflow: hidden;\r\n    background-color: black\r\n}\r\n#surface {\r\n    background-color: #1B2F15;\r\n    margin: 18px;\r\n    filter: blur(23px)\r\n}\r\n#app {\r\n    position: absolute;\r\n    width: 180px;\r\n    z-index: 101;\r\n}\r\n#textInput {\r\n    position: absolute;\r\n    width: 280px;\r\n    z-index: 101;\r\n    background-color: black;\r\n    border: none;\r\n    outline-color: #E0D85C;\r\n    color: #E0D85C;\r\n    font-size: 18px;\r\n    opacity: 0.3\r\n}\r\n#textInput:hover {\r\n    opacity: 1\r\n}\r\n#output {\r\n    position: absolute;\r\n    display: flex;\r\n    z-index: 101;\r\n    color: white;\r\n    font-size: 2em;\r\n}\r\n.element {\r\n    position: relative;\r\n    bottom: 0;\r\n    color: white;\r\n    border: 1px solid white;\r\n    width: 80px;\r\n    padding: 2px;\r\n    margin: 0 8px 0 0\r\n}\r\n.wider {\r\n    width: 114px\r\n}\r\n.element, h1 {\r\n    font-weight: bolder;\r\n}\r\n.element > h6 {\r\n    font-size: 0.35em;\r\n}\r\n.element > h1, h6 {\r\n    text-align: center;\r\n    margin: 0;\r\n}\r\n.text {\r\n    min-width: 17px;\r\n}\r\n.text > h1 {\r\n    padding: 26px 0 0 0;\r\n    margin: 0 8px 0 0;\r\n}\r\n.align-left {\r\n    text-align: left;\r\n}\r\n.spacer {\r\n    width: 28px\r\n}\r\n#sig {\r\n    position: fixed;\r\n    bottom: 0;\r\n    right: 0;\r\n    padding: 0 12px 12px 0;\r\n    color: silver;\r\n}\r\n#sig a {\r\n    color: white\r\n}\r\n',""]);const s=a},379:t=>{var n=[];function e(t){for(var e=-1,i=0;i<n.length;i++)if(n[i].identifier===t){e=i;break}return e}function i(t,i){for(var o={},a=[],s=0;s<t.length;s++){var u=t[s],l=i.base?u[0]+i.base:u[0],c=o[l]||0,h="".concat(l," ").concat(c);o[l]=c+1;var f=e(h),d={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==f)n[f].references++,n[f].updater(d);else{var m=r(d,i);i.byIndex=s,n.splice(s,0,{identifier:h,updater:m,references:1})}a.push(h)}return a}function r(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,r){var o=i(t=t||[],r=r||{});return function(t){t=t||[];for(var a=0;a<o.length;a++){var s=e(o[a]);n[s].references--}for(var u=i(t,r),l=0;l<o.length;l++){var c=e(o[l]);0===n[c].references&&(n[c].updater(),n.splice(c,1))}o=u}}},569:t=>{var n={};t.exports=function(t,e){var i=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}},216:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},565:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},795:t=>{t.exports=function(t){var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var i="";e.supports&&(i+="@supports (".concat(e.supports,") {")),e.media&&(i+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(i+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),i+=e.css,r&&(i+="}"),e.media&&(i+="}"),e.supports&&(i+="}");var o=e.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(i,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},589:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}}},n={};function e(i){var r=n[i];if(void 0!==r)return r.exports;var o=n[i]={id:i,exports:{}};return t[i](o,o.exports,e),o.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{function t(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var n=function n(e,i){var r=this;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"x",void 0),t(this,"y",void 0),t(this,"multiply",(function(t){return new n(r.x*t,r.y*t)})),t(this,"multiplyTo",(function(t){r.x*=t,r.y*=t})),t(this,"addTo",(function(t){r.x+=t.x,r.y+=t.y})),this.x=e,this.y=i},i=Math.PI/180,r=function(t){return t*i};function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var s=function t(e,i,r){var s=this;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),a(this,"v_position",void 0),a(this,"v_velocity",void 0),a(this,"particleSystem",void 0),a(this,"age",void 0),a(this,"mass",void 0),a(this,"id",void 0),a(this,"doRender",void 0),a(this,"create",(function(){s.v_position=new n(0,300*Math.random()-150),s.age=0,s.particleSystem.registerLife(1),s.mass=Math.random();var t=s.particleSystem.direction,e=(1-2*Math.random())*Math.PI*.25+t;s.v_velocity=new n(Math.cos(e),Math.sin(e));var i=(3,9,6*Math.random()+3);s.v_velocity.multiplyTo(i)})),a(this,"simulate",(function(){s.v_position.addTo(s.v_velocity),s.age+=s.particleSystem.ageRate,s.age>=1&&s.particleSystem.unRegisterLife(1)})),a(this,"render",(function(t){var n=t.multiply(.3*s.age*(1-s.mass));s.v_position.addTo(n);var e,i,r=(e=s.particleSystem.getCoords(),i=2,function(t){if(Array.isArray(t))return t}(e)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var i,r,o=[],a=!0,s=!1;try{for(e=e.call(t);!(a=(i=e.next()).done)&&(o.push(i.value),!n||o.length!==n);a=!0);}catch(t){s=!0,r=t}finally{try{a||null==e.return||e.return()}finally{if(s)throw r}}return o}}(e,i)||function(t,n){if(t){if("string"==typeof t)return o(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(t,n):void 0}}(e,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=r[0],u=r[1],l=s.v_position.x+a,c=s.v_position.y+u;s.doRender(l,c,s.age)})),a(this,"isAlive",(function(){return s.age<1})),a(this,"getCoords",(function(){var t=s.v_position;return[t.x,t.y]})),this.id=e,this.particleSystem=i,this.doRender=r,this.age=1};function u(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}function l(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var c=function t(n,e,i){var r=this;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,"id",void 0),l(this,"particleSystem",void 0),l(this,"maxPoints",void 0),l(this,"minPoints",void 0),l(this,"points",void 0),l(this,"doRender",void 0),l(this,"age",void 0),l(this,"create",(function(t){r.points=t,r.age=0})),l(this,"simulate",(function(){r.age+=r.particleSystem.splineAgeRate,(r.points.length<r.minPoints||r.age>=1)&&(r.particleSystem.registerLife(r.points.length),r.points.length=0)})),l(this,"render",(function(t,n){var e=[];r.points.forEach((function(i){if(i.isAlive()){var r=(s=i.getCoords(),l=2,function(t){if(Array.isArray(t))return t}(s)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var i,r,o=[],a=!0,s=!1;try{for(e=e.call(t);!(a=(i=e.next()).done)&&(o.push(i.value),!n||o.length!==n);a=!0);}catch(t){s=!0,r=t}finally{try{a||null==e.return||e.return()}finally{if(s)throw r}}return o}}(s,l)||function(t,n){if(t){if("string"==typeof t)return u(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?u(t,n):void 0}}(s,l)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],a=r[1];e.push(o+t,a+n)}var s,l})),r.doRender(e,r.age)})),l(this,"isAlive",(function(){return r.points.length>0&&r.age<1})),this.id=n,this.particleSystem=e,this.doRender=i,this.maxPoints=16,this.minPoints=6,this.points=[],this.age=1};function h(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var f=function(t,n){return n.age-t.age},d=function t(e,i,o,a,u,l,d,m,p,v,y,g){var b=this;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,"particles",void 0),h(this,"maxParticles",void 0),h(this,"direction",void 0),h(this,"dispersion",void 0),h(this,"ageRate",void 0),h(this,"splineAgeRate",void 0),h(this,"effects",void 0),h(this,"splines",void 0),h(this,"maxSplines",void 0),h(this,"v_position",void 0),h(this,"particlePerSecond",void 0),h(this,"splinesPerSecond",void 0),h(this,"particlesResidue",void 0),h(this,"splinesResidue",void 0),h(this,"lastSimulation",void 0),h(this,"liveCandidates",void 0),h(this,"simulate",(function(){var t=Date.now(),n=(t-b.lastSimulation)/1e3;b.lastSimulation=t;var e=Math.floor(b.particlePerSecond*n+b.particlesResidue);b.particlesResidue=b.particlePerSecond+b.particlesResidue-e;var i=Math.floor(b.splinesPerSecond*n+b.splinesResidue);b.splinesResidue=b.splinesPerSecond+b.splinesResidue-i,b.particles.forEach((function(t){t.isAlive()?t.simulate():e>0&&(t.create(),e--)})),b.splines.forEach((function(t){if(t.isAlive())t.simulate();else if(i>0&&b.liveCandidates>=t.minPoints){var n=b.particles.filter((function(t){return t.isAlive()})).sort((function(t,n){return t.age-n.age})).slice(0,Math.floor(t.maxPoints*Math.random()+2));b.liveCandidates-=n.length,t.create(n),i--}}))})),h(this,"render",(function(){var t=new n(0,0);b.effects.forEach((function(n){return t.addTo(n.getVector())})),b.particles.forEach((function(n){n.isAlive()&&n.render(t)}));var e=b.v_position,i=e.x,r=e.y;b.splines.sort(f).forEach((function(t){t.isAlive()&&t.render(i,r)}))})),h(this,"registerLife",(function(t){return b.liveCandidates+=t})),h(this,"unRegisterLife",(function(t){return b.liveCandidates-=t})),h(this,"getCoords",(function(){var t=b.v_position;return[t.x,t.y]})),this.direction=r(e),this.dispersion=i,this.v_position=o,this.maxParticles=a,this.particlePerSecond=u,this.ageRate=l,this.splineAgeRate=d,this.effects=m,this.maxSplines=p,this.splinesPerSecond=v,this.particles=[],this.particlesResidue=0,this.splinesResidue=0,this.lastSimulation=Date.now(),this.liveCandidates=0,this.splines=[];for(var w=0;w<this.maxParticles;w++)this.particles.push(new s(w,this,y));for(var S=0;S<this.maxSplines;S++)this.splines.push(new c(S,this,g))};function m(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function p(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var v=function t(){var n=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;m(this,t),p(this,"r",void 0),p(this,"g",void 0),p(this,"b",void 0),p(this,"a",void 0),p(this,"interpolate",(function(e,i){return new t(n.r+(e.r-n.r)*i,n.g+(e.g-n.g)*i,n.b+(e.b-n.b)*i,n.a+(e.a-n.a)*i)})),p(this,"toHex",(function(){return"#"+("00000"+(n.b|n.g<<8|n.r<<16).toString(16)).slice(-6)}));var a=arguments[0];if(1===arguments.length&&"string"==typeof a){var s="#"===a[0]?a.slice(1):a,u=function(t){return parseInt(t,16)};this.r=u(s.substring(0,2)),this.g=u(s.substring(2,4)),this.b=u(s.substring(4,6)),this.a=1}else this.r=e,this.g=i,this.b=r,this.a=o};function y(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function g(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var b=function t(n,e,i,r){var o=this,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;y(this,t),g(this,"sineValues",void 0),g(this,"v_direction",void 0),g(this,"magnitude",void 0),g(this,"rate",void 0),g(this,"i",void 0),g(this,"getVector",(function(){var t=o.v_direction.multiply(o.sineValues[Math.floor(o.i)]*o.magnitude);return o.i+=o.rate,o.i>=o.sineValues.length&&(o.i=o.i%o.sineValues.length),t})),this.sineValues=n,this.v_direction=e,this.magnitude=i,this.rate=r,this.i=a%n.length},w=function t(n,e,i,r){var o,a,s=this;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),a=function(){return'<div class="element '.concat(2===s.ChemicalSymbol.length?"wider":"",'">\n            <h6 class="align-left">').concat(s.AtomicNumber,"</h6>\n            <h1>").concat(s.ChemicalSymbol,"</h1>\n            <h6>").concat(s.Name,"</h6>\n            <h6>").concat(s.AtomicMass,"</h6>\n        </div>")},(o="getTemplate")in this?Object.defineProperty(this,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):this[o]=a,this.AtomicNumber=n,this.AtomicMass=e,this.Name=i,this.ChemicalSymbol=r};function S(t,n,e){return S=x()?Reflect.construct:function(t,n,e){var i=[null];i.push.apply(i,n);var r=new(Function.bind.apply(t,i));return e&&C(r,e.prototype),r},S.apply(null,arguments)}function x(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function C(t,n){return C=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},C(t,n)}function A(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}function P(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var T=e(379),R=e.n(T),M=e(795),E=e.n(M),I=e(569),O=e.n(I),j=e(565),_=e.n(j),B=e(216),L=e.n(B),N=e(589),U=e.n(N),H=e(47),F={};function k(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}F.styleTagTransform=U(),F.setAttributes=_(),F.insert=O().bind(null,"head"),F.domAPI=E(),F.insertStyleElement=L(),R()(H.Z,F),H.Z&&H.Z.locals&&H.Z.locals;var D,V,Z,z=Math.floor,G=document.getElementById("textInput"),q=document.getElementById("output"),Y=document.getElementById("surface"),$=Y.getContext("2d"),K=new function t(){var n=this;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),P(this,"elements",void 0),P(this,"breakBad",(function(t){var e=[],i=[],r=[],o=t.trim().split(" ");return o.forEach((function(t,a){for(var s=t.toLowerCase(),u=n.elements.length,l=!1;u--&&!l;){var c=n.elements[u];-1!==s.indexOf(c.ChemicalSymbol.toLowerCase())&&function(){var t=c.ChemicalSymbol;l=!0,i.forEach((function(n){var e=n.ChemicalSymbol;return l&=e!==t})),e.push(c)}()}if(e.length>0){var h=e.pop();i.push(h);var f=h.ChemicalSymbol,d=f.length,m=t.search(new RegExp(f,"i"));m>0&&r.push(t.slice(0,m)),r.push(h),t.length>m+d&&r.push(t.slice(m+d))}else r.push(t);a<o.length-1&&r.push(null)})),r}));var e,i="1,1.00794,Hydrogen,H;2,4.002602,Helium,He;3,6.941,Lithium,Li;4,9.012182,Beryllium,Be;5,10.811,Boron,B;6,12.0107,Carbon,C;7,14.0067,Nitrogen,N;8,15.9994,Oxygen,O;9,18.9994,Fluorine,F;10,20.1797,Neon,Ne;11,22.98976928,Sodium,Na;12,24.305,Magnesium,Mg;13,26.9815386,aluminium,Al;14,28.0855,Silicon,Si;15,30.973762,Phosphorus,P;16,32.065,Sulphur,S;17,35.453,Chlorine,Cl;18,39.948,Argon,Ar;19,39.0983,Potassium,K;20,40.078,Calcium,Ca;21,44.955912,Scandium,Sc;22,47.867,Titanium,Ti;23,50.9415,Vanadium,V;24,51.9961,Chromium,Cr;25,54.938045,Manganese,Mn;26,55.845,Iron,Fe;27,58.933195,Cobalt,Co;28,58.6934,Nickel,Ni;29,63.546,Copper,Cu;30,65.38,Zinc,Zn;31,69.723,Gallium,Ga;32,72.64,Germanium,Ge;33,74.9216,Arsenic,As;34,78.96,Selenium,Se;35,79.904,Bromine,Br;36,83.798,Krypton,Kr;37,85.4678,Rubidium,Rb;38,87.62,Strontium,Sr;39,88.90585,Yttrium,Y;40,91.224,Zirkonium,Zr;41,92.90638,Niobium,Nb;42,95.96,Molybdaenum,Mo;43,98,Technetium,Tc;44,101.07,Ruthenium,Ru;45,102.9055,Rhodium,Rh;46,106.42,Palladium,Pd;47,107.8682,Silver,Ag;48,112.411,Cadmium,Cd;49,114.818,Indium,In;50,118.71,Tin,Sn;51,121.76,Antimony,Sb;52,127.6,Tellurium,Te;53,126.90447,Iodine,I;54,131.293,Xenon,Xe;55,132.9054519,Cesium,Cs;56,137.327,Barium,Ba;57,138.90547,Lanthanum,La;58,140.116,Cerium,Ce;59,140.90765,Praseodymium,Pr;60,144.242,Neodymium,Nd;61,145,Promethium,Pm;62,150.36,Samarium,Sm;63,151.964,Europium,Eu;64,157.25,Gadolinium,Gd;65,158.92535,Terbium,Tb;66,162.5001,Dysprosium,Dy;67,164.93032,Holmium,Ho;68,167.259,Erbium,Er;69,168.93421,Thulium,Tm;70,173.054,Ytterbium,Yb;71,174.9668,Lutetium,Lu;72,178.49,Hafnium,Hf;73,180.94788,Tantalum,Ta;74,183.84,Tungsten,W;75,186.207,Rhenium,Re;76,190.23,Osmium,Os;77,192.217,Iridium,Ir;78,192.084,Platinum,Pt;79,196.966569,Gold,Au;80,200.59,Hydrargyrum,Hg;81,204.3833,Thallium,Tl;82,207.2,Lead,Pb;83,208.980401,Bismuth,Bi;84,210,Polonium,Po;85,210,Astatine,At;86,220,Radon,Rn;87,223,Francium,Fr;88,226,Radium,Ra;89,227,Actinium,Ac;90,232.03806,Thorium,Th;91,231.03588,Protactinium,Pa;92,238.02891,Uranium,U;93,237,Neptunium,Np;94,244,Plutonium,Pu;95,243,Americium,Am;96,247,Curium,Cm;97,247,Berkelium,Bk;98,251,Californium,Cf;99,252,Einsteinium,Es;100,257,Fermium,Fm;101,258,Mendelevium,Md;102,259,Nobelium,No;103,262,Lawrencium,Lr;104,261,Rutherfordium,Rf;105,262,Dubnium,Db;106,266,Seaborgium,Sg;107,264,Bohrium,Bh;108,277,Hassium,Hs;109,268,Meitnerium,Mt;110,271,Ununnilium,Ds;111,272,Unununium,Rg;112,285,Ununbium,Uub;113,284,Ununtrium,Uut;114,289,Ununquadium,Uuq;115,288,Ununpentium,Uup;116,292,Ununhexium,Uuh;118,294,Ununoctium,Uuo".split(";");this.elements=[];for(var r=i.length;r--;)this.elements.push(S(w,function(t){if(Array.isArray(t))return A(t)}(e=i[r].split(","))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,n){if(t){if("string"==typeof t)return A(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?A(t,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()));this.elements.sort((function(t,n){return t.ChemicalSymbol.length-n.ChemicalSymbol.length}))},W=new v("#E0D85C"),X=new v("#1B2F15");function J(t,n){$.beginPath();var e=function(t,n,e,i,r){if(void 0===n||n.length<2)return new Float32Array(0);e="number"==typeof e?e:.5,i="number"==typeof i?i:25;var o,a=1,s=n.length,u=0,l=4,c=new Float32Array((s-2)*i+2+2*i),h=new Float32Array(i+2<<2);for((o=n.slice(0)).unshift(n[s-1]),o.unshift(n[s-2]),o.push(n[0],n[1]),h[0]=1;a<i;a++){var f=a/i,d=f*f,m=d*f,p=2*m,v=3*d;h[l++]=p-v+1,h[l++]=v-p,h[l++]=m-2*d+f,h[l++]=m-d}function y(t,n,e,r){for(var o,a=2;a<e;a+=2){var s=t[a],l=t[a+1],h=t[a+2],f=t[a+3],d=(h-t[a-2])*r,m=(f-t[a-1])*r,p=(t[a+4]-s)*r,v=(t[a+5]-l)*r,y=0,g=void 0,b=void 0,w=void 0,S=void 0;for(o=0;o<i;o++)g=n[y++],b=n[y++],w=n[y++],S=n[y++],c[u++]=g*s+b*h+w*d+S*p,c[u++]=g*l+b*f+w*m+S*v}}for(h[++l]=1,y(o,h,s,e),(o=[]).push(n[s-4],n[s-3],n[s-2],n[s-1],n[0],n[1],n[2],n[3]),y(o,h,4,e),s=0,c[u++]=n[s++],c[u]=n[s],a=0,s=c.length;a<s;a+=2)t.lineTo(c[a],c[a+1]);return c}($,t,1,32);$.moveTo(e[0],e[1]);for(var i=2,r=e.length;i<r;i+=2){var o=z(e[i]),a=z(e[i+1]);$.lineTo(o,a)}$.lineWidth=z(48*n),$.strokeStyle=W.interpolate(X,n).toHex(),$.stroke()}function Q(){var t;Z=new d(195,.3,new n(D+70,.67*V),260,2,.006,.008,(t=function(t){for(var n=[],e=0;e<=180;e+=2)n.push(Math.sin(r(e)));return n}(),[new b(t,new n(-.2,-1),70,.33),new b(t,new n(-1,-.5),30,.15,30),new b(t,new n(-1,1),15,.01,45)]),16,.14,(function(){return null}),J)}function tt(){window.requestAnimationFrame(tt),$.clearRect(0,0,D-0,V-0),Z.simulate(),Z.render()}function nt(){var t,n,e,i=(n=[(t=window).innerWidth,t.innerHeight],e=2,function(t){if(Array.isArray(t))return t}(n)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var i,r,o=[],a=!0,s=!1;try{for(e=e.call(t);!(a=(i=e.next()).done)&&(o.push(i.value),!n||o.length!==n);a=!0);}catch(t){s=!0,r=t}finally{try{a||null==e.return||e.return()}finally{if(s)throw r}}return o}}(n,e)||function(t,n){if(t){if("string"==typeof t)return k(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?k(t,n):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=i[0],o=i[1];D=Y.width=r,V=Y.height=o,q.style.left=z((D-180)/2)+"px",q.style.top=V/2-18+"px",G.style.left=z((D-280)/2)+"px",G.style.top=V-64+"px"}function et(t){var n=K.breakBad(t);q.innerHTML="",q.style.left=z(D/2-24*t.length)+"px",n.forEach((function(t){q.innerHTML+=null===t?'<span class="spacer" />':"string"==typeof t?'\n    <div class="text">\n        <h1>'.concat(t,"</h1>\n    </div>\n"):t.getTemplate()}))}window.addEventListener("resize",(function(){nt(),Q()})),window.addEventListener("load",(function(){nt();var t=window.location.search.substring(1).split("&").reduce((function(t,n){var e=n.split("=");return t.set(e[0],decodeURIComponent(e[1])),t}),new Map);if(t.has("txt")){var n=t.get("txt");G.value=n,et(n)}Q(),G.onkeyup=function(t){return et(t.target.value)},window.requestAnimationFrame(tt)}))})()})();