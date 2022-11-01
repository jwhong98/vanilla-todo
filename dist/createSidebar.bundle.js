(()=>{"use strict";var n={28:(n,r,e)=>{e.d(r,{Z:()=>s});var t=e(81),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([n.id,"* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: sans-serif;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n  display: grid;\r\n  grid-template-columns: max(15%, 200px) 1fr;\r\n  grid-template-rows: 15% 1fr;\r\n}\r\n\r\n.header {\r\n  grid-area: 1 / 1 / 2 / 3;\r\n  background-color: grey;\r\n  padding: 0 20px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.header h1 {\r\n  font-size: 2.5rem;\r\n}\r\n\r\n.sidebar {\r\n  background-color: lightgrey;\r\n  padding: 10px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n}\r\n\r\n#content {\r\n  grid-area: 2 / 2 / 3 / 3;\r\n  padding: 10px;\r\n}\r\n\r\n.addTodo {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.button {\r\n  padding: 10px;\r\n  border-radius: 8px;\r\n  outline: none;\r\n  border: none;\r\n  font-size: 16px;\r\n  cursor: pointer;\r\n}\r\n\r\n.formContainer {\r\n  background: #fff;\r\n  z-index: 50;\r\n  display: none;\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 500px;\r\n  padding: 10px;\r\n  border: 1px solid grey;\r\n  border-radius: 5px;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  gap: 10px;\r\n}\r\n\r\nform > input {\r\n  font-size: 20px;\r\n}\r\n\r\n#title,\r\n#description {\r\n  width: 100%;\r\n  padding: 5px;\r\n  border: 1px solid lightgray;\r\n}\r\n\r\n#description {\r\n  resize: none;\r\n  font-size: 1rem;\r\n}\r\n\r\n.inputContainer {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.inputContainer > p {\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n}\r\n\r\n.inputContainer > label {\r\n  /* font-weight: 700; */\r\n}\r\n\r\n.inputContainer > div {\r\n  display: flex;\r\n  gap: 10px;\r\n}\r\n\r\n.buttonWrap {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.active {\r\n  display: block;\r\n}\r\n\r\n#display {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n\r\n.todoCard {\r\n  border: 1px solid black;\r\n  border-radius: 8px;\r\n  padding: 10px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  align-items: flex-start;\r\n}\r\n",""]);const s=i},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var p=0;p<n.length;p++){var c=[].concat(n[p]);t&&i[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),e&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=e):c[2]=e),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),r.push(c))}},r}},81:n=>{n.exports=function(n){return n[1]}},89:(n,r,e)=>{var t=e(379),o=e.n(t),a=e(795),i=e.n(a),s=e(569),d=e.n(s),p=e(565),c=e.n(p),l=e(216),u=e.n(l),f=e(589),m=e.n(f),x=e(28),g={};g.styleTagTransform=m(),g.setAttributes=c(),g.insert=d().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=u(),o()(x.Z,g),x.Z&&x.Z.locals&&x.Z.locals},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},i=[],s=0;s<n.length;s++){var d=n[s],p=t.base?d[0]+t.base:d[0],c=a[p]||0,l="".concat(p," ").concat(c);a[p]=c+1;var u=e(l),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)r[u].references++,r[u].updater(f);else{var m=o(f,t);t.byIndex=s,r.splice(s,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=e(a[i]);r[s].references--}for(var d=t(n,o),p=0;p<a.length;p++){var c=e(a[p]);0===r[c].references&&(r[c].updater(),r.splice(c,1))}a=d}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={id:t,exports:{}};return n[t](a,a.exports,e),a.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.nc=void 0,e(89)})();