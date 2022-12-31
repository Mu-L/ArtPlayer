/*!
 * artplayer-plugin-control.js v1.0.0
 * Github: https://github.com/zhw2590582/ArtPlayer
 * (c) 2017-2022 Harvey Zack
 * Released under the MIT License.
 */
!function(t,e,r,o,n){var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},l="function"==typeof a.parcelRequire4dc0&&a.parcelRequire4dc0,i=l.cache||{},p="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function u(e,r){if(!i[e]){if(!t[e]){var o="function"==typeof a.parcelRequire4dc0&&a.parcelRequire4dc0;if(!r&&o)return o(e,!0);if(l)return l(e,!0);if(p&&"string"==typeof e)return p(e);var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}s.resolve=function(r){var o=t[e][1][r];return null!=o?o:r},s.cache={};var c=i[e]=new u.Module(e);t[e][0].call(c.exports,s,c,c.exports,this)}return i[e].exports;function s(t){var e=s.resolve(t);return!1===e?{}:u(e)}}u.isParcelRequire=!0,u.Module=function(t){this.id=t,this.bundle=u,this.exports={}},u.modules=t,u.cache=i,u.parent=l,u.register=function(e,r){t[e]=[function(t,e){e.exports=r},{}]},Object.defineProperty(u,"root",{get:function(){return a.parcelRequire4dc0}}),a.parcelRequire4dc0=u;for(var c=0;c<e.length;c++)u(e[c]);var s=u(r);"object"==typeof exports&&"undefined"!=typeof module?module.exports=s:"function"==typeof define&&define.amd&&define((function(){return s}))}({d3G6W:[function(t,e,r){var o=t("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r);var n=t("bundle-text:./style.less"),a=o.interopDefault(n);function l(){return function(t){!function(t){var e=t.constructor,r=e.version,o=e.utils.errorHandle,n=r.split(".").map(Number);o(n[0]+n[1]/100>=4.06,"Artplayer.js@".concat(r," is not compatible the artplayerPluginControl@").concat(l.version,". Please update it to version Artplayer.js@4.6.x"))}(t);var e=t.template,r=e.$bottom,o=e.$player,n=t.constructor.utils,a=n.append,i=n.secondToTime,p=n.addClass,u=n.removeClass,c=n.hasClass,s="artplayer-plugin-control";p(o,s);for(var d=a(r,'<div class="apa-control-current"></div>'),f=a(r,'<div class="apa-control-duration"></div>'),b=["video:loadedmetadata","video:timeupdate","video:progress"],m=0;m<b.length;m++)t.on(b[m],(function(){d.innerText=i(t.currentTime),f.innerText=i(t.duration)}));return{name:"artplayerPluginControl",get enable(){return c(o,s)},set enable(t){t?p(o,s):u(o,s)}}}}if(r.default=l,l.env="production",l.version="1.0.0",l.build="2022-12-31 23:07:50","undefined"!=typeof document&&!document.getElementById("artplayer-plugin-control")){var i=document.createElement("style");i.id="artplayer-plugin-control",i.textContent=a.default,document.head.appendChild(i)}"undefined"!=typeof window&&(window.artplayerPluginControl=l)},{"bundle-text:./style.less":"8jCnX","@parcel/transformer-js/src/esmodule-helpers.js":"47PTV"}],"8jCnX":[function(t,e,r){e.exports=".artplayer-plugin-control .art-bottom{height:68px;min-width:400px;max-width:600px;-webkit-user-select:none;-ms-user-select:none;user-select:none;-webkit-backdrop-filter:saturate(180%)blur(20px);-webkit-backdrop-filter:saturate(180%)blur(20px);-webkit-backdrop-filter:saturate(180%)blur(20px);backdrop-filter:saturate(180%)blur(20px);pointer-events:auto;background-color:rgba(0,0,0,.7);background-image:none;border-radius:10px;flex-direction:column;align-items:center;padding:0;font-size:13px;transition:opacity .3s;display:flex;position:absolute;bottom:10px;left:50%;transform:translate(-50%);box-shadow:0 10px 15px -3px rgba(0,0,0,.2),0 4px 6px -4px rgba(0,0,0,.2)}.artplayer-plugin-control .art-bottom .art-progress{width:65%;justify-content:space-between;align-items:center;gap:10px;display:flex}.artplayer-plugin-control .art-bottom .art-progress .art-control-thumbnails{bottom:35px}.artplayer-plugin-control .art-bottom .art-progress .art-control-progress{width:100%}.artplayer-plugin-control .art-bottom .art-progress .art-progress-tip{top:-40px!important}.artplayer-plugin-control .art-bottom .art-controls{width:100%;height:auto;flex:1;padding:0 5px}.artplayer-plugin-control .art-bottom .art-controls .art-control-time{display:none}.artplayer-plugin-control .art-bottom .art-controls .art-volume-panel{width:60px!important}.artplayer-plugin-control .art-bottom .art-selector-list{background-color:rgba(0,0,0,.8)!important}.artplayer-plugin-control .art-bottom .apa-control-current,.artplayer-plugin-control .art-bottom .apa-control-duration{width:17.5%;justify-content:center;line-height:1;display:flex;position:absolute;top:10px}.artplayer-plugin-control .art-bottom .apa-control-current{left:0}.artplayer-plugin-control .art-bottom .apa-control-duration{right:0}.artplayer-plugin-control .art-settings{bottom:85px}.artplayer-plugin-control.art-control-show .art-subtitle{bottom:80px}.apa-control-current,.apa-control-duration{display:none}"},{}],"47PTV":[function(t,e,r){r.interopDefault=function(t){return t&&t.__esModule?t:{default:t}},r.defineInteropFlag=function(t){Object.defineProperty(t,"__esModule",{value:!0})},r.exportAll=function(t,e){return Object.keys(t).forEach((function(r){"default"===r||"__esModule"===r||e.hasOwnProperty(r)||Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[r]}})})),e},r.export=function(t,e,r){Object.defineProperty(t,e,{enumerable:!0,get:r})}},{}]},["d3G6W"],"d3G6W");