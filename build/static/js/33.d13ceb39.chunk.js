webpackJsonp([33],{540:function(n,t,e){"use strict";function i(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function a(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?n:t}function s(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=e(565),A=(e.n(o),e(564)),r=e.n(A),l=e(0),p=e.n(l),d=e(58),c=e(57),m=function(){function n(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}(),u=function(n){function t(n){i(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));return e.state={signedsingers:[],singers:[]},e}return s(t,n),m(t,[{key:"componentDidMount",value:function(){var n=this;d.H(5001,void 0,0,10).then(function(t){200==t.data.code&&n.setState({signedsingers:t.data.artists})}),d.l(0,100).then(function(t){200==t.data.code&&(console.log(t.data),n.setState({singers:t.data.artists}))})}},{key:"render",value:function(){var n=this.state,t=n.signedsingers,e=n.singers,i=void 0,a=void 0;return i=t.length?t.map(function(n,t){return p.a.createElement(C,{singer:n,key:t,index:t})}):p.a.createElement("div",{style:{height:"184px"},className:"loading"},p.a.createElement(r.a,{tip:"Loading..."})),a=e.length?e.map(function(n,t){return p.a.createElement(C,{singer:n,key:t,index:t})}):p.a.createElement("div",{style:{height:"184px"},className:"loading"},p.a.createElement(r.a,{tip:"Loading..."})),p.a.createElement("div",{className:"g-wrap"},p.a.createElement("div",{className:"u-title f-cb"},p.a.createElement("h3",null,p.a.createElement("span",{className:"f-ff2"},"\u5165\u9a7b\u6b4c\u624b")),p.a.createElement("a",{href:"/discover/artist/signed/",className:"more s-fc3"},"\u66f4\u591a >")),p.a.createElement("div",{className:"m-sgerlist"},p.a.createElement("div",{className:"m-cvrlst m-cvrlst-5 f-cb"},i)),p.a.createElement("div",{className:"u-title f-cb"},p.a.createElement("h3",null,p.a.createElement("span",{className:"f-ff2"},"\u70ed\u95e8\u6b4c\u624b"))),p.a.createElement("div",{className:"m-sgerlist"},p.a.createElement("div",{className:"m-cvrlst m-cvrlst-5 f-cb"},a)))}}]),t}(l.Component),C=function(n){function t(n){return i(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n))}return s(t,n),m(t,[{key:"render",value:function(){var n=this.props,t=n.singer,e=n.index;return e<10?p.a.createElement("li",{className:e<5?null:"line"},p.a.createElement("div",{className:"u-cover u-cover-5"},p.a.createElement("img",{src:t.img1v1Url}),p.a.createElement(c.e,{to:"/artist?id="+t.id,className:"msk",title:t.name+"\u7684\u97f3\u4e50"})),p.a.createElement("p",null,p.a.createElement(c.e,{to:"/artist?id="+t.id,className:"nm nm-icn f-thide s-fc0",title:t.name+"\u7684\u97f3\u4e50"},t.name),t.accountId?p.a.createElement(c.e,{className:"f-tdn",to:"/user/home?id="+t.accountId,title:t.name+"\u7684\u4e2a\u4eba\u4e3b\u9875"},p.a.createElement("i",{className:"u-icn u-icn-5"})):null)):p.a.createElement("li",{className:"sml"},p.a.createElement(c.e,{to:"/artist?id="+t.id,className:"nm nm-icn f-thide s-fc0",title:t.name+"\u7684\u97f3\u4e50"},t.name),"\xa0",t.accountId?p.a.createElement(c.e,{className:"icn u-icn u-icn-5",to:"/user/home?id="+t.accountId,title:t.name+"\u7684\u4e2a\u4eba\u4e3b\u9875"}):null)}}]),t}(l.Component);t.default=u},564:function(n,t,e){"use strict";function i(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(t,"__esModule",{value:!0});var a=e(7),s=i(a),o=e(18),A=i(o),r=e(8),l=i(r),p=e(11),d=i(p),c=e(10),m=i(c),u=e(9),C=i(u),f=e(0),g=i(f),b=e(4),B=i(b),h=e(23),v=e(22),y=i(v),k=e(73),x=i(k),E=e(566),w=i(E),D=e(116),N=i(D),O=function(n,t){var e={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&t.indexOf(i)<0&&(e[i]=n[i]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols)for(var a=0,i=Object.getOwnPropertySymbols(n);a<i.length;a++)t.indexOf(i[a])<0&&(e[i[a]]=n[i[a]]);return e},z=function(n){function t(n){(0,l.default)(this,t);var e=(0,m.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n)),i=n.spinning;return e.state={spinning:i},e}return(0,C.default)(t,n),(0,d.default)(t,[{key:"isNestedPattern",value:function(){return!(!this.props||!this.props.children)}},{key:"componentDidMount",value:function(){(0,w.default)()||((0,h.findDOMNode)(this).className+=" "+this.props.prefixCls+"-show-text")}},{key:"componentWillUnmount",value:function(){this.debounceTimeout&&clearTimeout(this.debounceTimeout),this.delayTimeout&&clearTimeout(this.delayTimeout)}},{key:"componentWillReceiveProps",value:function(n){var t=this,e=this.props.spinning,i=n.spinning,a=this.props.delay;this.debounceTimeout&&clearTimeout(this.debounceTimeout),e&&!i?(this.debounceTimeout=setTimeout(function(){return t.setState({spinning:i})},300),this.delayTimeout&&clearTimeout(this.delayTimeout)):i&&a&&!isNaN(Number(a))?(this.delayTimeout&&clearTimeout(this.delayTimeout),this.delayTimeout=setTimeout(function(){return t.setState({spinning:i})},a)):this.setState({spinning:i})}},{key:"render",value:function(){var n,t=this.props,e=t.className,i=t.size,a=t.prefixCls,o=t.tip,r=t.wrapperClassName,l=O(t,["className","size","prefixCls","tip","wrapperClassName"]),p=this.state.spinning,d=(0,y.default)(a,(n={},(0,A.default)(n,a+"-sm","small"===i),(0,A.default)(n,a+"-lg","large"===i),(0,A.default)(n,a+"-spinning",p),(0,A.default)(n,a+"-show-text",!!o),n),e),c=(0,N.default)(l,["spinning","delay"]),m=g.default.createElement("div",(0,s.default)({},c,{className:d}),g.default.createElement("span",{className:a+"-dot"},g.default.createElement("i",null),g.default.createElement("i",null),g.default.createElement("i",null),g.default.createElement("i",null)),o?g.default.createElement("div",{className:a+"-text"},o):null);if(this.isNestedPattern()){var u,C=a+"-nested-loading";r&&(C+=" "+r);var f=(0,y.default)((u={},(0,A.default)(u,a+"-container",!0),(0,A.default)(u,a+"-blur",p),u));return g.default.createElement(x.default,(0,s.default)({},c,{component:"div",className:C,style:null,transitionName:"fade"}),p&&g.default.createElement("div",{key:"loading"},m),g.default.createElement("div",{className:f,key:"container"},this.props.children))}return m}}]),t}(g.default.Component);t.default=z,z.defaultProps={prefixCls:"ant-spin",spinning:!0,size:"default",wrapperClassName:""},z.propTypes={prefixCls:B.default.string,className:B.default.string,spinning:B.default.bool,size:B.default.oneOf(["small","default","large"]),wrapperClassName:B.default.string},n.exports=t.default},565:function(n,t,e){"use strict";e(56),e(568)},566:function(n,t,e){"use strict";function i(){if(void 0!==a)return a;var n="Webkit Moz O ms Khtml".split(" "),t=document.createElement("div");if(void 0!==t.style.animationName&&(a=!0),void 0!==a)for(var e=0;e<n.length;e++)if(void 0!==t.style[n[e]+"AnimationName"]){a=!0;break}return a=a||!1}Object.defineProperty(t,"__esModule",{value:!0});var a=void 0;t.default=i,n.exports=t.default},567:function(n,t,e){t=n.exports=e(198)(!0),t.push([n.i,'.ant-spin{color:#108ee9;vertical-align:middle;text-align:center;opacity:0;position:absolute;transition:-webkit-transform .3s cubic-bezier(.78,.14,.15,.86);-webkit-transition:-webkit-transform .3s cubic-bezier(.78,.14,.15,.86);-o-transition:transform .3s cubic-bezier(.78,.14,.15,.86);transition:transform .3s cubic-bezier(.78,.14,.15,.86);transition:transform .3s cubic-bezier(.78,.14,.15,.86),-webkit-transform .3s cubic-bezier(.78,.14,.15,.86);font-size:12px;display:none}.ant-spin-spinning{opacity:1;position:static;display:inline-block}.ant-spin-nested-loading{position:relative}.ant-spin-nested-loading>div>.ant-spin{position:absolute;height:100%;max-height:320px;width:100%;z-index:4}.ant-spin-nested-loading>div>.ant-spin .ant-spin-dot{position:absolute;top:50%;left:50%;margin:-10px}.ant-spin-nested-loading>div>.ant-spin .ant-spin-text{position:absolute;top:50%;width:100%;padding-top:6px}.ant-spin-nested-loading>div>.ant-spin.ant-spin-show-text .ant-spin-dot{margin-top:-20px}.ant-spin-nested-loading>div>.ant-spin-sm .ant-spin-dot{margin:-7px}.ant-spin-nested-loading>div>.ant-spin-sm .ant-spin-text{padding-top:3px}.ant-spin-nested-loading>div>.ant-spin-sm.ant-spin-show-text .ant-spin-dot{margin-top:-17px}.ant-spin-nested-loading>div>.ant-spin-lg .ant-spin-dot{margin:-16px}.ant-spin-nested-loading>div>.ant-spin-lg .ant-spin-text{padding-top:12px}.ant-spin-nested-loading>div>.ant-spin-lg.ant-spin-show-text .ant-spin-dot{margin-top:-26px}.ant-spin-container{-webkit-transition:all .3s cubic-bezier(.645,.045,.355,1);-o-transition:all .3s cubic-bezier(.645,.045,.355,1);transition:all .3s cubic-bezier(.645,.045,.355,1);position:relative}.ant-spin-blur{overflow:hidden;opacity:.7;-webkit-filter:blur(.5px);filter:blur(.5px);filter:progid\\:DXImageTransform\\.Microsoft\\.Blur(PixelRadius\\=1,MakeShadow\\=false);-webkit-transform:translateZ(0)}.ant-spin-blur:after{content:"";position:absolute;left:0;right:0;top:0;bottom:0;background:#fff;opacity:.3;-webkit-transition:all .3s;-o-transition:all .3s;transition:all .3s;z-index:10}.ant-spin-tip{color:rgba(0,0,0,.43)}.ant-spin-dot{position:relative;display:inline-block;width:20px;height:20px;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:antRotate 1.2s infinite linear;animation:antRotate 1.2s infinite linear}.ant-spin-dot i{width:9px;height:9px;border-radius:100%;background-color:#108ee9;-webkit-transform:scale(.75);-ms-transform:scale(.75);transform:scale(.75);display:block;position:absolute;opacity:.3;-webkit-animation:antSpinMove 1s infinite linear alternate;animation:antSpinMove 1s infinite linear alternate;-webkit-transform-origin:50% 50%;-ms-transform-origin:50% 50%;transform-origin:50% 50%}.ant-spin-dot i:first-child{left:0;top:0}.ant-spin-dot i:nth-child(2){right:0;top:0;-webkit-animation-delay:.4s;animation-delay:.4s}.ant-spin-dot i:nth-child(3){right:0;bottom:0;-webkit-animation-delay:.8s;animation-delay:.8s}.ant-spin-dot i:nth-child(4){left:0;bottom:0;-webkit-animation-delay:1.2s;animation-delay:1.2s}.ant-spin-sm .ant-spin-dot{width:14px;height:14px}.ant-spin-sm .ant-spin-dot i{width:6px;height:6px}.ant-spin-lg .ant-spin-dot{width:32px;height:32px}.ant-spin-lg .ant-spin-dot i{width:14px;height:14px}.ant-spin.ant-spin-show-text .ant-spin-text{display:block}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.ant-spin-blur{background:#fff;opacity:.5}}@-webkit-keyframes antSpinMove{to{opacity:1}}@keyframes antSpinMove{to{opacity:1}}@-webkit-keyframes antRotate{to{-webkit-transform:rotate(405deg);transform:rotate(405deg)}}@keyframes antRotate{to{-webkit-transform:rotate(405deg);transform:rotate(405deg)}}',"",{version:3,sources:["C:/Users/Administrator/Desktop/nec-music/node_modules/antd/lib/spin/style/index.css"],names:[],mappings:"AAAA,UACE,cAAe,AACf,sBAAuB,AACvB,kBAAmB,AACnB,UAAW,AACX,kBAAmB,AACnB,+DAAwE,AACxE,uEAAgF,AAChF,0DAAmE,AACnE,uDAAgE,AAChE,2GAA6H,AAC7H,eAAgB,AAChB,YAAc,CACf,AACD,mBACE,UAAW,AACX,gBAAiB,AACjB,oBAAsB,CACvB,AACD,yBACE,iBAAmB,CACpB,AACD,uCACE,kBAAmB,AACnB,YAAa,AACb,iBAAkB,AAClB,WAAY,AACZ,SAAW,CACZ,AACD,qDACE,kBAAmB,AACnB,QAAS,AACT,SAAU,AACV,YAAc,CACf,AACD,sDACE,kBAAmB,AACnB,QAAS,AACT,WAAY,AACZ,eAAiB,CAClB,AACD,wEACE,gBAAkB,CACnB,AACD,wDACE,WAAa,CACd,AACD,yDACE,eAAiB,CAClB,AACD,2EACE,gBAAkB,CACnB,AACD,wDACE,YAAc,CACf,AACD,yDACE,gBAAkB,CACnB,AACD,2EACE,gBAAkB,CACnB,AACD,oBACE,0DAAkE,AAClE,qDAA6D,AAC7D,kDAA0D,AAC1D,iBAAmB,CACpB,AACD,eACE,gBAAiB,AACjB,WAAa,AACb,0BAA4B,AAC5B,kBAAoB,AAEpB,mFAAqF,AAErF,+BAAiC,CAClC,AACD,qBACE,WAAY,AACZ,kBAAmB,AACnB,OAAQ,AACR,QAAS,AACT,MAAO,AACP,SAAU,AACV,gBAAiB,AACjB,WAAa,AACb,2BAA4B,AAC5B,sBAAuB,AACvB,mBAAoB,AACpB,UAAY,CACb,AACD,cACE,qBAA2B,CAC5B,AACD,cACE,kBAAmB,AACnB,qBAAsB,AACtB,WAAY,AACZ,YAAa,AACb,gCAAiC,AAC7B,4BAA6B,AACzB,wBAAyB,AACjC,iDAAkD,AAC1C,wCAA0C,CACnD,AACD,gBACE,UAAW,AACX,WAAY,AACZ,mBAAoB,AACpB,yBAA0B,AAC1B,6BAA+B,AAC3B,yBAA2B,AACvB,qBAAuB,AAC/B,cAAe,AACf,kBAAmB,AACnB,WAAa,AACb,2DAA4D,AACpD,mDAAoD,AAC5D,iCAAkC,AAC9B,6BAA8B,AAC1B,wBAA0B,CACnC,AACD,4BACE,OAAQ,AACR,KAAO,CACR,AACD,6BACE,QAAS,AACT,MAAO,AACP,4BAA8B,AACtB,mBAAsB,CAC/B,AACD,6BACE,QAAS,AACT,SAAU,AACV,4BAA8B,AACtB,mBAAsB,CAC/B,AACD,6BACE,OAAQ,AACR,SAAU,AACV,6BAA8B,AACtB,oBAAsB,CAC/B,AACD,2BACE,WAAY,AACZ,WAAa,CACd,AACD,6BACE,UAAW,AACX,UAAY,CACb,AACD,2BACE,WAAY,AACZ,WAAa,CACd,AACD,6BACE,WAAY,AACZ,WAAa,CACd,AACD,4CACE,aAAe,CAChB,AACD,2DAEE,eACE,gBAAiB,AACjB,UAAa,CACd,CACF,AACD,+BACE,GACE,SAAW,CACZ,CACF,AACD,uBACE,GACE,SAAW,CACZ,CACF,AACD,6BACE,GACE,iCAAkC,AAC1B,wBAA0B,CACnC,CACF,AACD,qBACE,GACE,iCAAkC,AAC1B,wBAA0B,CACnC,CACF",file:"index.css",sourcesContent:[".ant-spin {\n  color: #108ee9;\n  vertical-align: middle;\n  text-align: center;\n  opacity: 0;\n  position: absolute;\n  transition: -webkit-transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  -o-transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86), -webkit-transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  font-size: 12px;\n  display: none;\n}\n.ant-spin-spinning {\n  opacity: 1;\n  position: static;\n  display: inline-block;\n}\n.ant-spin-nested-loading {\n  position: relative;\n}\n.ant-spin-nested-loading > div > .ant-spin {\n  position: absolute;\n  height: 100%;\n  max-height: 320px;\n  width: 100%;\n  z-index: 4;\n}\n.ant-spin-nested-loading > div > .ant-spin .ant-spin-dot {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -10px;\n}\n.ant-spin-nested-loading > div > .ant-spin .ant-spin-text {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  padding-top: 6px;\n}\n.ant-spin-nested-loading > div > .ant-spin.ant-spin-show-text .ant-spin-dot {\n  margin-top: -20px;\n}\n.ant-spin-nested-loading > div > .ant-spin-sm .ant-spin-dot {\n  margin: -7px;\n}\n.ant-spin-nested-loading > div > .ant-spin-sm .ant-spin-text {\n  padding-top: 3px;\n}\n.ant-spin-nested-loading > div > .ant-spin-sm.ant-spin-show-text .ant-spin-dot {\n  margin-top: -17px;\n}\n.ant-spin-nested-loading > div > .ant-spin-lg .ant-spin-dot {\n  margin: -16px;\n}\n.ant-spin-nested-loading > div > .ant-spin-lg .ant-spin-text {\n  padding-top: 12px;\n}\n.ant-spin-nested-loading > div > .ant-spin-lg.ant-spin-show-text .ant-spin-dot {\n  margin-top: -26px;\n}\n.ant-spin-container {\n  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  -o-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  position: relative;\n}\n.ant-spin-blur {\n  overflow: hidden;\n  opacity: 0.7;\n  -webkit-filter: blur(0.5px);\n  filter: blur(0.5px);\n  /* autoprefixer: off */\n  filter: progid\\:DXImageTransform\\.Microsoft\\.Blur(PixelRadius\\=1, MakeShadow\\=false);\n  /* autoprefixer: on */\n  -webkit-transform: translateZ(0);\n}\n.ant-spin-blur:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: #fff;\n  opacity: 0.3;\n  -webkit-transition: all .3s;\n  -o-transition: all .3s;\n  transition: all .3s;\n  z-index: 10;\n}\n.ant-spin-tip {\n  color: rgba(0, 0, 0, 0.43);\n}\n.ant-spin-dot {\n  position: relative;\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  -webkit-transform: rotate(45deg);\n      -ms-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-animation: antRotate 1.2s infinite linear;\n          animation: antRotate 1.2s infinite linear;\n}\n.ant-spin-dot i {\n  width: 9px;\n  height: 9px;\n  border-radius: 100%;\n  background-color: #108ee9;\n  -webkit-transform: scale(0.75);\n      -ms-transform: scale(0.75);\n          transform: scale(0.75);\n  display: block;\n  position: absolute;\n  opacity: 0.3;\n  -webkit-animation: antSpinMove 1s infinite linear alternate;\n          animation: antSpinMove 1s infinite linear alternate;\n  -webkit-transform-origin: 50% 50%;\n      -ms-transform-origin: 50% 50%;\n          transform-origin: 50% 50%;\n}\n.ant-spin-dot i:nth-child(1) {\n  left: 0;\n  top: 0;\n}\n.ant-spin-dot i:nth-child(2) {\n  right: 0;\n  top: 0;\n  -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n}\n.ant-spin-dot i:nth-child(3) {\n  right: 0;\n  bottom: 0;\n  -webkit-animation-delay: 0.8s;\n          animation-delay: 0.8s;\n}\n.ant-spin-dot i:nth-child(4) {\n  left: 0;\n  bottom: 0;\n  -webkit-animation-delay: 1.2s;\n          animation-delay: 1.2s;\n}\n.ant-spin-sm .ant-spin-dot {\n  width: 14px;\n  height: 14px;\n}\n.ant-spin-sm .ant-spin-dot i {\n  width: 6px;\n  height: 6px;\n}\n.ant-spin-lg .ant-spin-dot {\n  width: 32px;\n  height: 32px;\n}\n.ant-spin-lg .ant-spin-dot i {\n  width: 14px;\n  height: 14px;\n}\n.ant-spin.ant-spin-show-text .ant-spin-text {\n  display: block;\n}\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  /* IE10+ */\n  .ant-spin-blur {\n    background: #fff;\n    opacity: 0.5;\n  }\n}\n@-webkit-keyframes antSpinMove {\n  to {\n    opacity: 1;\n  }\n}\n@keyframes antSpinMove {\n  to {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes antRotate {\n  to {\n    -webkit-transform: rotate(405deg);\n            transform: rotate(405deg);\n  }\n}\n@keyframes antRotate {\n  to {\n    -webkit-transform: rotate(405deg);\n            transform: rotate(405deg);\n  }\n}\n"],sourceRoot:""}])},568:function(n,t,e){var i=e(567);"string"===typeof i&&(i=[[n.i,i,""]]);var a={};a.transform=void 0;e(199)(i,a);i.locals&&(n.exports=i.locals)}});
//# sourceMappingURL=33.d13ceb39.chunk.js.map