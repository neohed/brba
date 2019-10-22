!function(t){var i={};function e(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var r in t)e.d(n,r,function(i){return t[i]}.bind(null,r));return n},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="",e(e.s=0)}([function(t,i,e){"use strict";function n(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}e.r(i);var r=function t(i,e){var r=this;!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),n(this,"x",void 0),n(this,"y",void 0),n(this,"multiply",(function(i){return new t(r.x*i,r.y*i)})),n(this,"multiplyTo",(function(t){r.x*=t,r.y*=t})),n(this,"addTo",(function(t){r.x+=t.x,r.y+=t.y})),n(this,"length",(function(){return Math.sqrt(r.x*r.x+r.y*r.y)})),this.x=i,this.y=e},o=Math.PI/180,s=function(t){return t*o},a=function(t){for(var i=[],e=0;e<=180;e+=t)i.push(Math.sin(s(e)));return i};function l(t,i){return function(t){if(Array.isArray(t))return t}(t)||function(t,i){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var e=[],n=!0,r=!1,o=void 0;try{for(var s,a=t[Symbol.iterator]();!(n=(s=a.next()).done)&&(e.push(s.value),!i||e.length!==i);n=!0);}catch(t){r=!0,o=t}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}return e}(t,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function u(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}var c=function t(i,e,n){var o=this;!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,"v_position",void 0),u(this,"v_velocity",void 0),u(this,"particleSystem",void 0),u(this,"age",void 0),u(this,"mass",void 0),u(this,"id",void 0),u(this,"doRender",void 0),u(this,"create",(function(){o.v_position=new r(0,0),o.age=0,o.particleSystem.registerLife(1),o.mass=Math.random();var t=o.particleSystem.direction,i=.25*((1-2*Math.random())*Math.PI)+t;o.v_velocity=new r(Math.cos(i),Math.sin(i));var e,n,s=(e=3,n=9,Math.random()*(n-e)+e);o.v_velocity.multiplyTo(s)})),u(this,"simulate",(function(){o.v_position.addTo(o.v_velocity),o.age+=o.particleSystem.ageRate,o.age>=1&&o.particleSystem.unRegisterLife(1)})),u(this,"render",(function(t){var i=t.multiply(.3*o.age*(1-o.mass));o.v_position.addTo(i);var e=l(o.particleSystem.getCoords(),2),n=e[0],r=e[1],s=o.v_position.x+n,a=o.v_position.y+r;o.doRender(s,a,o.age)})),u(this,"isAlive",(function(){return o.age<1})),u(this,"getCoords",(function(){var t=o.v_position;return[t.x,t.y]})),this.id=i,this.particleSystem=e,this.doRender=n,this.age=1};function h(t,i){return function(t){if(Array.isArray(t))return t}(t)||function(t,i){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var e=[],n=!0,r=!1,o=void 0;try{for(var s,a=t[Symbol.iterator]();!(n=(s=a.next()).done)&&(e.push(s.value),!i||e.length!==i);n=!0);}catch(t){r=!0,o=t}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}return e}(t,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function f(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}var d=function t(i,e,n){var r=this;!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,"id",void 0),f(this,"particleSystem",void 0),f(this,"maxPoints",void 0),f(this,"minPoints",void 0),f(this,"points",void 0),f(this,"doRender",void 0),f(this,"age",void 0),f(this,"create",(function(t){r.points=t,r.age=0})),f(this,"simulate",(function(){r.age+=r.particleSystem.splineAgeRate,(r.points.length<r.minPoints||r.age>=1)&&(r.particleSystem.registerLife(r.points.length),r.points.length=0)})),f(this,"render",(function(t,i){var e=[];r.points.forEach((function(n){if(n.isAlive()){var r=h(n.getCoords(),2),o=r[0],s=r[1];e.push(o+t,s+i)}})),r.doRender(e,r.age)})),f(this,"isAlive",(function(){return r.points.length>0&&r.age<1})),this.id=i,this.particleSystem=e,this.doRender=n,this.maxPoints=16,this.minPoints=6,this.points=[],this.age=1};function v(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}var p=function t(i,e,n,o,a,l,u,h,f,p,g,y){var m=this;!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),v(this,"particles",void 0),v(this,"maxParticles",void 0),v(this,"direction",void 0),v(this,"dispersion",void 0),v(this,"ageRate",void 0),v(this,"splineAgeRate",void 0),v(this,"effects",void 0),v(this,"splines",void 0),v(this,"maxSplines",void 0),v(this,"v_position",void 0),v(this,"particlePerSecond",void 0),v(this,"splinesPerSecond",void 0),v(this,"particlesResidue",void 0),v(this,"splinesResidue",void 0),v(this,"lastSimulation",void 0),v(this,"liveCandidates",void 0),v(this,"simulate",(function(){var t=Date.now(),i=(t-m.lastSimulation)/1e3;m.lastSimulation=t;var e=Math.floor(m.particlePerSecond*i+m.particlesResidue);m.particlesResidue=m.particlePerSecond+m.particlesResidue-e;var n=Math.floor(m.splinesPerSecond*i+m.splinesResidue);m.splinesResidue=m.splinesPerSecond+m.splinesResidue-n,m.particles.forEach((function(t){t.isAlive()?t.simulate():e>0&&(t.create(),e--)})),m.splines.forEach((function(t){if(t.isAlive())t.simulate();else if(n>0&&m.liveCandidates>=t.minPoints){var i=m.particles.filter((function(t){return t.isAlive()})).sort((function(t,i){return t.age-i.age})).slice(0,Math.floor(t.maxPoints*Math.random()+2));m.liveCandidates-=i.length,t.create(i),n--}}))})),v(this,"render",(function(){var t=new r(0,0);m.effects.forEach((function(i){return t.addTo(i.getVector())})),m.particles.forEach((function(i){i.isAlive()&&i.render(t)}));var i=m.v_position,e=i.x,n=i.y;m.splines.sort((function(t,i){return i.age-t.age})).forEach((function(t){t.isAlive()&&t.render(e,n)}))})),v(this,"registerLife",(function(t){return m.liveCandidates+=t})),v(this,"unRegisterLife",(function(t){return m.liveCandidates-=t})),v(this,"getCoords",(function(){var t=m.v_position;return[t.x,t.y]})),this.direction=s(i),this.dispersion=e,this.v_position=n,this.maxParticles=o,this.particlePerSecond=a,this.ageRate=l,this.splineAgeRate=u,this.effects=h,this.maxSplines=f,this.splinesPerSecond=p,this.particles=[],this.particlesResidue=0,this.splinesResidue=0,this.lastSimulation=Date.now(),this.liveCandidates=0,this.splines=[];for(var b=0;b<this.maxParticles;b++)this.particles.push(new c(b,this,g));for(var w=0;w<this.maxSplines;w++)this.splines.push(new d(w,this,y))};function g(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function y(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}var m=function t(){var i=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;g(this,t),y(this,"r",void 0),y(this,"g",void 0),y(this,"b",void 0),y(this,"a",void 0),y(this,"interpolate",(function(e,n){return new t(i.r+(e.r-i.r)*n,i.g+(e.g-i.g)*n,i.b+(e.b-i.b)*n,i.a+(e.a-i.a)*n)})),y(this,"toHex",(function(){return"#"+("00000"+(i.b|i.g<<8|i.r<<16).toString(16)).slice(-6)}));var s=arguments[0];if(1===arguments.length&&"string"==typeof s){var a="#"===s[0]?s.slice(1):s,l=function(t){return parseInt(t,16)};this.r=l(a.substring(0,2)),this.g=l(a.substring(2,4)),this.b=l(a.substring(4,6)),this.a=1}else this.r=e,this.g=n,this.b=r,this.a=o};function b(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function w(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}var S=function t(i,e,n,r){var o=this,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;b(this,t),w(this,"sineValues",void 0),w(this,"v_direction",void 0),w(this,"magnitude",void 0),w(this,"rate",void 0),w(this,"i",void 0),w(this,"getVector",(function(){var t=o.v_direction.multiply(o.sineValues[Math.floor(o.i)]*o.magnitude);return o.i+=o.rate,o.i>=o.sineValues.length&&(o.i=o.i%o.sineValues.length),t})),this.sineValues=i,this.v_direction=e,this.magnitude=n,this.rate=r,this.i=s%i.length};
/*!	Curve function for canvas 2.3.8
 *	(c) Epistemex 2013-2018
 *	www.epistemex.com
 *	License: MIT
 */var P,x=document.getElementById("surface").getContext("2d"),R=0,_=0,A=1e3,M=600,j=[],E=[],T=new m("#E0D85C"),C=new m("#1B2F15");function O(t,i){x.beginPath();var e=function(t,i,e,n,r){if(void 0===i||i.length<2)return new Float32Array(0);e="number"==typeof e?e:.5,n="number"==typeof n?n:25;var o,s=1,a=i.length,l=0,u=4,c=new Float32Array((a-2)*n+2+(r?2*n:0)),h=new Float32Array(n+2<<2);for(o=i.slice(0),r?(o.unshift(i[a-1]),o.unshift(i[a-2]),o.push(i[0],i[1])):(o.unshift(i[1]),o.unshift(i[0]),o.push(i[a-2],i[a-1])),h[0]=1;s<n;s++){var f=s/n,d=f*f,v=d*f,p=2*v,g=3*d;h[u++]=p-g+1,h[u++]=g-p,h[u++]=v-2*d+f,h[u++]=v-d}function y(t,i,e,r){for(var o,s=2;s<e;s+=2){var a=t[s],u=t[s+1],h=t[s+2],f=t[s+3],d=(h-t[s-2])*r,v=(f-t[s-1])*r,p=(t[s+4]-a)*r,g=(t[s+5]-u)*r,y=0,m=void 0,b=void 0,w=void 0,S=void 0;for(o=0;o<n;o++)m=i[y++],b=i[y++],w=i[y++],S=i[y++],c[l++]=m*a+b*h+w*d+S*p,c[l++]=m*u+b*f+w*v+S*g}}for(h[++u]=1,y(o,h,a,e),r&&((o=[]).push(i[a-4],i[a-3],i[a-2],i[a-1],i[0],i[1],i[2],i[3]),y(o,h,4,e)),a=r?0:i.length-2,c[l++]=i[a++],c[l]=i[a],s=0,a=c.length;s<a;s+=2)t.lineTo(c[s],c[s+1]);return c}(x,t,.5,25,!0);x.moveTo(e[0],e[1]);for(var n=2,r=e.length;n<r;n+=2){var o=Math.floor(e[n]),s=Math.floor(e[n+1]);x.lineTo(o,s)}x.lineWidth=Math.floor(18*i)+6,x.strokeStyle=T.interpolate(C,i).toHex(),x.stroke()}function L(){window.requestAnimationFrame(L),x.clearRect(R,_,A-R,M-_),P.simulate(),P.render()}function V(){j=a(2),E.push(new S(j,new r(-.2,-1),70,.33)),E.push(new S(j,new r(-1,-.5),30,.15,30)),E.push(new S(j,new r(-1,1),15,.01,45)),P=new p(195,.3,new r(A+70,.67*M),250,2,.009,.01,E,12,.14,(function(){return null}),O),L()}window.addEventListener?window.addEventListener("load",V):window.attachEvent("onload",V)}]);