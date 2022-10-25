(()=>{"use strict";var e,r,n={28:(e,r,n)=>{n.d(r,{Z:()=>c});var t=n(81),o=n.n(t),a=n(645),i=n.n(a)()(o());i.push([e.id,"* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n  display: grid;\r\n  grid-template-columns: 15% 1fr;\r\n  grid-template-rows: 15% 1fr;\r\n}\r\n\r\n.header {\r\n  color: red;\r\n  grid-area: 1 / 1 / 2 / 3;\r\n  background-color: grey;\r\n}\r\n\r\n.sidebar {\r\n  background-color: lightgrey;\r\n}\r\n\r\n#content {\r\n  grid-area: 2 / 2 / 3 / 3;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n}\r\n",""]);const c=i},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var n="",t=void 0!==r[5];return r[4]&&(n+="@supports (".concat(r[4],") {")),r[2]&&(n+="@media ".concat(r[2]," {")),t&&(n+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),n+=e(r),t&&(n+="}"),r[2]&&(n+="}"),r[4]&&(n+="}"),n})).join("")},r.i=function(e,n,t,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);t&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),r.push(u))}},r}},81:e=>{e.exports=function(e){return e[1]}},89:(e,r,n)=>{var t=n(379),o=n.n(t),a=n(795),i=n.n(a),c=n(569),s=n.n(c),d=n(565),u=n.n(d),l=n(216),p=n.n(l),f=n(589),v=n.n(f),m=n(28),h={};h.styleTagTransform=v(),h.setAttributes=u(),h.insert=s().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=p(),o()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals},379:e=>{var r=[];function n(e){for(var n=-1,t=0;t<r.length;t++)if(r[t].identifier===e){n=t;break}return n}function t(e,t){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=t.base?s[0]+t.base:s[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var p=n(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)r[p].references++,r[p].updater(f);else{var v=o(f,t);t.byIndex=c,r.splice(c,0,{identifier:l,updater:v,references:1})}i.push(l)}return i}function o(e,r){var n=r.domAPI(r);return n.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;n.update(e=r)}else n.remove()}}e.exports=function(e,o){var a=t(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);r[c].references--}for(var s=t(e,o),d=0;d<a.length;d++){var u=n(a[d]);0===r[u].references&&(r[u].updater(),r.splice(u,1))}a=s}}},569:e=>{var r={};e.exports=function(e,n){var t=function(e){if(void 0===r[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}r[e]=n}return r[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}},216:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:(e,r,n)=>{e.exports=function(e){var r=n.nc;r&&e.setAttribute("nonce",r)}},795:e=>{e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(n){!function(e,r,n){var t="";n.supports&&(t+="@supports (".concat(n.supports,") {")),n.media&&(t+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(t+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),t+=n.css,o&&(t+="}"),n.media&&(t+="}"),n.supports&&(t+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,e,r.options)}(r,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}},159:(e,r,n)=>{function t(){const e=document.createElement("header");e.classList.add("header"),e.textContent="header",document.body.appendChild(e)}n.d(r,{Z:()=>t}),n(89)},311:(e,r,n)=>{function t(){const e=document.createElement("div");e.classList.add("sidebar"),e.textContent="sidebar",document.body.appendChild(e)}n.d(r,{Z:()=>t}),n(89)}},t={};function o(e){var r=t[e];if(void 0!==r)return r.exports;var a=t[e]={id:e,exports:{}};return n[e](a,a.exports,o),a.exports}o.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return o.d(r,{a:r}),r},o.d=(e,r)=>{for(var n in r)o.o(r,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o.nc=void 0,e=o(159),r=o(311),o(89),(0,e.Z)(),(0,r.Z)(),document.querySelector("#content")})();