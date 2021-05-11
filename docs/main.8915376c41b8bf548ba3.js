(()=>{"use strict";var e={994:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"html, body{\n    margin: 0px;\n    background-color: #7665E0;\n}\n\n.titulo {\n    text-align: center;\n    color: #E0D587;\n    font-size: 65px;\n}\n\n.tiempos {\n    text-align: center;\n    position: relative;\n    font-size: 40px;\n    color:#61E05A;\n}\n\n#milesimas {\n    font-size: 30px;\n    color:#61E05A;\n}\n\n#div-botones {\n    position: relative;\n    text-align: center;\n    padding: 20px;\n}\n\n#btn-iniciar, #btn-parar, #btn-reiniciar {\n    font-size: 30px;\n    padding: 15px;\n    border: solid 2px;\n    margin:5px;\n    outline:none;\n    background-color: #BD70E0;\n    color:#E0D587;\n}\n",""]);const i=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&o[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),n.push(l))}},n}},379:(e,n,t)=>{var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function c(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function l(e,n){for(var t={},r=[],o=0;o<e.length;o++){var i=e[o],l=n.base?i[0]+n.base:i[0],s=t[l]||0,u="".concat(l," ").concat(s);t[l]=s+1;var d=c(u),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:u,updater:h(f,n),references:1}),r.push(u)}return r}function s(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var u,d=(u=[],function(e,n){return u[e]=n,u.filter(Boolean).join("\n")});function f(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function p(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var v=null,m=0;function h(e,n){var t,r,o;if(n.singleton){var i=m++;t=v||(v=s(n)),r=f.bind(null,t,i,!1),o=f.bind(null,t,i,!0)}else t=s(n),r=p.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var t=l(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=c(t[r]);a[o].references--}for(var i=l(e,n),s=0;s<t.length;s++){var u=c(t[s]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}t=i}}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),r=t(994),o={insert:"head",singleton:!1};n()(r.Z,o);r.Z.locals;var i,a=0,c=0,l=0,s=0,u=document.querySelector("#milesimas"),d=document.querySelector("#segundos"),f=document.querySelector("#minutos"),p=document.querySelector("#horas"),v=document.querySelector("#btn-iniciar"),m=document.querySelector("#btn-parar"),h=document.querySelector("#btn-reiniciar");v.addEventListener("click",(function(){clearInterval(i),i=setInterval(b,10)})),m.addEventListener("click",(function(){clearInterval(i)})),h.addEventListener("click",(function(){a=0,c=0,l=0,s=0,clearInterval(i),u.innerText="00",d.innerText="00",f.innerText="00",p.innerText="00"}));var b=function(){s++,u.innerText=9>=s?"0"+s:s,99<s&&(l++,d.innerText=9>=l?"0"+l:l,s=0,u.innerText="00"),60===l&&(c++,f.innerText=9>=c?"0"+c:c,l=0,d.innerText="00"),60===c&&(a++,p.innerText=9>=a?"0"+a:a,c=0,f.innerText="00")}})()})();