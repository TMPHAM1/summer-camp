"use strict";(self.webpackChunkjustcamp_gatsby=self.webpackChunkjustcamp_gatsby||[]).push([[883],{4020:function(e){var t="%[a-f0-9]{2}",r=new RegExp(t,"gi"),n=new RegExp("("+t+")+","gi");function a(e,t){try{return decodeURIComponent(e.join(""))}catch(o){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],a(r),a(n))}function o(e){try{return decodeURIComponent(e)}catch(o){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=a(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var r={"%FE%FF":"��","%FF%FE":"��"},a=n.exec(e);a;){try{r[a[0]]=decodeURIComponent(a[0])}catch(t){var c=o(a[0]);c!==a[0]&&(r[a[0]]=c)}a=n.exec(e)}r["%C2"]="�";for(var s=Object.keys(r),i=0;i<s.length;i++){var l=s[i];e=e.replace(new RegExp(l,"g"),r[l])}return e}(e)}}},2806:function(e){e.exports=function(e,t){for(var r={},n=Object.keys(e),a=Array.isArray(t),o=0;o<n.length;o++){var c=n[o],s=e[c];(a?-1!==t.indexOf(c):t(c,s,e))&&(r[c]=s)}return r}},9956:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(7294),a=r(6040);r(3631),r(7563);const o={theme:"light",bgClass:"dynamic-sticky-bg",variant:"primary",align:"right",isFluid:!1,button:"account",buttonText:"Get started free",reveal:!0,role:"student"},c={theme:"dark",style:"style1"};var s=e=>{let{children:t,headerConfig:r=null,footerConfig:s=null}=e;const i=(0,n.useContext)(a.Z);return(0,n.useEffect)((()=>{i.themeDark?(i.setHeader({...o,...r,theme:"dark"}),i.setFooter({...c,...s,theme:"dark"})):(i.setHeader({...o,...r}),i.setFooter({...c,...s}))}),[i.themeDark]),n.createElement(n.Fragment,null,t)}},8501:function(e,t,r){r.r(t),r.d(t,{default:function(){return s}});var n=r(7294),a=r(1082),o=r(9956),c=r.p+"static/404-8dfd04a8714cb6c4f7add837c469fe6d.svg";var s=()=>n.createElement(n.Fragment,null,n.createElement(o.Z,null,n.createElement("div",{className:"header pt-11 pos-abs-tl w-100"},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-12 text-center"})))),n.createElement("div",{className:"404-page bg-default min-h-100vh flex-all-center pt-lg-15 pt-xxl-17 pt-27 pb-lg-0 pb-18"},n.createElement("div",{className:"container"},n.createElement("div",{className:"row justify-content-center"},n.createElement("div",{className:"col-lg-7 px-lg-9"},n.createElement("div",{className:"card-404 text-center","data-aos":"zoom-in","data-aos-duration":"1000"},n.createElement("img",{src:c,alt:"",className:"w-100 px-9"}),n.createElement("div",{className:"404-texts pt-14"},n.createElement("h3",{className:"card-title font-size-9 font-weight-bold"},"Page is not found!"),n.createElement("p",{className:"card-text font-size-4 px-xxl-28 px-xs-10 px-sm-13 px-lg-13 px-md-28 px-xl-22 px-0 mb-11"}),n.createElement(a.rU,{to:"/",className:"btn btn-green btn-h-60 text-white rounded-5 w-180 m-auto text-uppercase"},"Back to home")))))))))},7563:function(e,t,r){const n=r(610),a=r(4020),o=r(500),c=r(2806);function s(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function i(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}function l(e,t){return t.decode?a(e):e}function u(e){return Array.isArray(e)?e.sort():"object"==typeof e?u(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function p(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function f(e){const t=(e=p(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function m(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function d(e,t){s((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return(t,r,n)=>{const a="string"==typeof r&&r.includes(e.arrayFormatSeparator),o="string"==typeof r&&!a&&l(r,e).includes(e.arrayFormatSeparator);r=o?l(r,e):r;const c=a||o?r.split(e.arrayFormatSeparator).map((t=>l(t,e))):null===r?r:l(r,e);n[t]=c};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const a of e.split("&")){if(""===a)continue;let[e,c]=o(t.decode?a.replace(/\+/g," "):a,"=");c=void 0===c?null:["comma","separator"].includes(t.arrayFormat)?c:l(c,t),r(l(e,t),c,n)}for(const a of Object.keys(n)){const e=n[a];if("object"==typeof e&&null!==e)for(const r of Object.keys(e))e[r]=m(e[r],t);else n[a]=m(e,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce(((e,t)=>{const r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=u(r):e[t]=r,e}),Object.create(null))}t.extract=f,t.parse=d,t.stringify=(e,t)=>{if(!e)return"";s((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const r=r=>t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const a=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[i(t,e),"[",a,"]"].join("")]:[...r,[i(t,e),"[",i(a,e),"]=",i(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[i(t,e),"[]"].join("")]:[...r,[i(t,e),"[]=",i(n,e)].join("")];case"comma":case"separator":return t=>(r,n)=>null==n||0===n.length?r:0===r.length?[[i(t,e),"=",i(n,e)].join("")]:[[r,i(n,e)].join(e.arrayFormatSeparator)];default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,i(t,e)]:[...r,[i(t,e),"=",i(n,e)].join("")]}}(t),a={};for(const c of Object.keys(e))r(c)||(a[c]=e[c]);const o=Object.keys(a);return!1!==t.sort&&o.sort(t.sort),o.map((r=>{const a=e[r];return void 0===a?"":null===a?i(r,t):Array.isArray(a)?a.reduce(n(r),[]).join("&"):i(r,t)+"="+i(a,t)})).filter((e=>e.length>0)).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[r,n]=o(e,"#");return Object.assign({url:r.split("?")[0]||"",query:d(f(e),t)},t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:l(n,t)}:{})},t.stringifyUrl=(e,r)=>{r=Object.assign({encode:!0,strict:!0},r);const n=p(e.url).split("?")[0]||"",a=t.extract(e.url),o=t.parse(a,{sort:!1}),c=Object.assign(o,e.query);let s=t.stringify(c,r);s&&(s=`?${s}`);let l=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(l=`#${i(e.fragmentIdentifier,r)}`),`${n}${s}${l}`},t.pick=(e,r,n)=>{n=Object.assign({parseFragmentIdentifier:!0},n);const{url:a,query:o,fragmentIdentifier:s}=t.parseUrl(e,n);return t.stringifyUrl({url:a,query:c(o,r),fragmentIdentifier:s},n)},t.exclude=(e,r,n)=>{const a=Array.isArray(r)?e=>!r.includes(e):(e,t)=>!r(e,t);return t.pick(e,a,n)}},500:function(e){e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},610:function(e){e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))}}]);
//# sourceMappingURL=component---src-pages-404-js-f6012de1f7d287491f4a.js.map