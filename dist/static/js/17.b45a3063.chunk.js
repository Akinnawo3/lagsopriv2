(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{1502:function(t,e){t.exports={MODE_NUMBER:1<<0,MODE_ALPHA_NUM:1<<1,MODE_8BIT_BYTE:1<<2,MODE_KANJI:1<<3}},1503:function(t,e){t.exports={L:1,M:0,Q:3,H:2}},1504:function(t,e,r){var n=r(1505);function i(t,e){if(t.length==undefined){throw new Error(t.length+"/"+e)}var r=0;while(r<t.length&&t[r]==0){r++}this.num=new Array(t.length-r+e);for(var n=0;n<t.length-r;n++){this.num[n]=t[n+r]}}i.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){var e=new Array(this.getLength()+t.getLength()-1);for(var r=0;r<this.getLength();r++){for(var o=0;o<t.getLength();o++){e[r+o]^=n.gexp(n.glog(this.get(r))+n.glog(t.get(o)))}}return new i(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0){return this}var e=n.glog(this.get(0))-n.glog(t.get(0));var r=new Array(this.getLength());for(var o=0;o<this.getLength();o++){r[o]=this.get(o)}for(var o=0;o<t.getLength();o++){r[o]^=n.gexp(n.glog(t.get(o))+e)}return new i(r,0).mod(t)}};t.exports=i},1505:function(t,e){var r={glog:function(t){if(t<1){throw new Error("glog("+t+")")}return r.LOG_TABLE[t]},gexp:function(t){while(t<0){t+=255}while(t>=256){t-=255}return r.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)};for(var n=0;n<8;n++){r.EXP_TABLE[n]=1<<n}for(var n=8;n<256;n++){r.EXP_TABLE[n]=r.EXP_TABLE[n-4]^r.EXP_TABLE[n-5]^r.EXP_TABLE[n-6]^r.EXP_TABLE[n-8]}for(var n=0;n<255;n++){r.LOG_TABLE[r.EXP_TABLE[n]]=n}t.exports=r},1563:function(t,e,r){"use strict";function n(t){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){n=function t(e){return typeof e}}else{n=function t(e){return e&&typeof Symbol==="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}}return n(t)}function i(){i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){t[n]=r[n]}}}return t};return i.apply(this,arguments)}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);if(e)n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable});r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};if(e%2){o(r,true).forEach(function(e){m(t,e,r[e])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))}else{o(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}}return t}function u(t,e){if(t==null)return{};var r=s(t,e);var n,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++){n=o[i];if(e.indexOf(n)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(t,n))continue;r[n]=t[n]}}return r}function s(t,e){if(t==null)return{};var r={};var n=Object.keys(t);var i,o;for(o=0;o<n.length;o++){i=n[o];if(e.indexOf(i)>=0)continue;r[i]=t[i]}return r}function l(t,e){if(!(t instanceof e)){throw new TypeError("Cannot call a class as a function")}}function f(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(t,n.key,n)}}function h(t,e,r){if(e)f(t.prototype,e);if(r)f(t,r);return t}function c(t,e){if(e&&(n(e)==="object"||typeof e==="function")){return e}return g(t)}function v(t){v=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)};return v(t)}function g(t){if(t===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t}function d(t,e){if(typeof e!=="function"&&e!==null){throw new TypeError("Super expression must either be null or a function")}t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:true,configurable:true}});if(e)p(t,e)}function p(t,e){p=Object.setPrototypeOf||function t(e,r){e.__proto__=r;return e};return p(t,e)}function m(t,e,r){if(e in t){Object.defineProperty(t,e,{value:r,enumerable:true,configurable:true,writable:true})}else{t[e]=r}return t}var y=r(0);var w=r(1);var E=r(1564);var C=r(1503);function P(t){var e="";for(var r=0;r<t.length;r++){var n=t.charCodeAt(r);if(n<128){e+=String.fromCharCode(n)}else if(n<2048){e+=String.fromCharCode(192|n>>6);e+=String.fromCharCode(128|n&63)}else if(n<55296||n>=57344){e+=String.fromCharCode(224|n>>12);e+=String.fromCharCode(128|n>>6&63);e+=String.fromCharCode(128|n&63)}else{r++;n=65536+((n&1023)<<10|t.charCodeAt(r)&1023);e+=String.fromCharCode(240|n>>18);e+=String.fromCharCode(128|n>>12&63);e+=String.fromCharCode(128|n>>6&63);e+=String.fromCharCode(128|n&63)}}return e}var b={size:128,level:"L",bgColor:"#FFFFFF",fgColor:"#000000",includeMargin:false};var T=false?undefined:{};var L=4;var A=.1;function B(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;var r=[];t.forEach(function(t,n){var i=null;t.forEach(function(o,a){if(!o&&i!==null){r.push("M".concat(i+e," ").concat(n+e,"h").concat(a-i,"v1H").concat(i+e,"z"));i=null;return}if(a===t.length-1){if(!o){return}if(i===null){r.push("M".concat(a+e,",").concat(n+e," h1v1H").concat(a+e,"z"))}else{r.push("M".concat(i+e,",").concat(n+e," h").concat(a+1-i,"v1H").concat(i+e,"z"))}return}if(o&&i===null){i=a}})});return r.join("")}function _(t,e){return t.slice().map(function(t,r){if(r<e.y||r>=e.y+e.h){return t}return t.map(function(t,r){if(r<e.x||r>=e.x+e.w){return t}return false})})}function D(t,e){var r=t.imageSettings,n=t.size,i=t.includeMargin;if(r==null){return null}var o=i?L:0;var a=e.length+o*2;var u=Math.floor(n*A);var s=a/n;var l=(r.width||u)*s;var f=(r.height||u)*s;var h=r.x==null?e.length/2-l/2:r.x*s;var c=r.y==null?e.length/2-f/2:r.y*s;var v=null;if(r.excavate){var g=Math.floor(h);var d=Math.floor(c);var p=Math.ceil(l+h-g);var m=Math.ceil(f+c-d);v={x:g,y:d,w:p,h:m}}return{x:h,y:c,h:f,w:l,excavation:v}}var O=function(){try{(new Path2D).addPath(new Path2D)}catch(t){return false}return true}();var M=function(t){d(e,t);function e(){var t;var r;l(this,e);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++){i[o]=arguments[o]}r=c(this,(t=v(e)).call.apply(t,[this].concat(i)));m(g(r),"_canvas",void 0);m(g(r),"_image",void 0);m(g(r),"state",{imgLoaded:false});m(g(r),"handleImageLoad",function(){r.setState({imgLoaded:true})});return r}h(e,[{key:"componentDidMount",value:function t(){if(this._image&&this._image.complete){this.handleImageLoad()}this.update()}},{key:"componentWillReceiveProps",value:function t(e){var r,n;var i=(r=this.props.imageSettings)===null||r===void 0?void 0:r.src;var o=(n=e.imageSettings)===null||n===void 0?void 0:n.src;if(i!==o){this.setState({imgLoaded:false})}}},{key:"componentDidUpdate",value:function t(){this.update()}},{key:"update",value:function t(){var e=this.props,r=e.value,n=e.size,i=e.level,o=e.bgColor,a=e.fgColor,u=e.includeMargin,s=e.imageSettings;var l=new E(-1,C[i]);l.addData(P(r));l.make();if(this._canvas!=null){var f=this._canvas;var h=f.getContext("2d");if(!h){return}var c=l.modules;if(c===null){return}var v=u?L:0;var g=c.length+v*2;var d=D(this.props,c);if(s!=null&&d!=null){if(d.excavation!=null){c=_(c,d.excavation)}}var p=window.devicePixelRatio||1;f.height=f.width=n*p;var m=n/g*p;h.scale(m,m);h.fillStyle=o;h.fillRect(0,0,g,g);h.fillStyle=a;if(O){h.fill(new Path2D(B(c,v)))}else{c.forEach(function(t,e){t.forEach(function(t,r){if(t){h.fillRect(r+v,e+v,1,1)}})})}if(this.state.imgLoaded&&this._image&&d!=null){h.drawImage(this._image,d.x+v,d.y+v,d.w,d.h)}}}},{key:"render",value:function t(){var e=this;var r=this.props,n=r.value,o=r.size,s=r.level,l=r.bgColor,f=r.fgColor,h=r.style,c=r.includeMargin,v=r.imageSettings,g=u(r,["value","size","level","bgColor","fgColor","style","includeMargin","imageSettings"]);var d=a({height:o,width:o},h);var p=null;var m=v&&v.src;if(v!=null&&m!=null){p=y.createElement("img",{src:m,style:{display:"none"},onLoad:this.handleImageLoad,ref:function t(r){return e._image=r}})}return y.createElement(y.Fragment,null,y.createElement("canvas",i({style:d,height:o,width:o,ref:function t(r){return e._canvas=r}},g)),p)}}]);return e}(y.PureComponent);m(M,"defaultProps",b);if(false){}var k=function(t){d(e,t);function e(){l(this,e);return c(this,v(e).apply(this,arguments))}h(e,[{key:"render",value:function t(){var e=this.props,r=e.value,n=e.size,o=e.level,a=e.bgColor,s=e.fgColor,l=e.includeMargin,f=e.imageSettings,h=u(e,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]);var c=new E(-1,C[o]);c.addData(P(r));c.make();var v=c.modules;if(v===null){return null}var g=l?L:0;var d=v.length+g*2;var p=D(this.props,v);var m=null;if(f!=null&&p!=null){if(p.excavation!=null){v=_(v,p.excavation)}m=y.createElement("image",{xlinkHref:f.src,height:p.h,width:p.w,x:p.x+g,y:p.y+g,preserveAspectRatio:"none"})}var w=B(v,g);return y.createElement("svg",i({shapeRendering:"crispEdges",height:n,width:n,viewBox:"0 0 ".concat(d," ").concat(d)},h),y.createElement("path",{fill:a,d:"M0,0 h".concat(d,"v").concat(d,"H0z")}),y.createElement("path",{fill:s,d:w}),m)}}]);return e}(y.PureComponent);m(k,"defaultProps",b);if(false){}var N=function t(e){var r=e.renderAs,n=u(e,["renderAs"]);var i=r==="svg"?k:M;return y.createElement(i,n)};N.defaultProps=a({renderAs:"canvas"},b);t.exports=N},1564:function(t,e,r){var n=r(1565);var i=r(1566);var o=r(1567);var a=r(1568);var u=r(1504);function s(t,e){this.typeNumber=t;this.errorCorrectLevel=e;this.modules=null;this.moduleCount=0;this.dataCache=null;this.dataList=[]}var l=s.prototype;l.addData=function(t){var e=new n(t);this.dataList.push(e);this.dataCache=null};l.isDark=function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e){throw new Error(t+","+e)}return this.modules[t][e]};l.getModuleCount=function(){return this.moduleCount};l.make=function(){if(this.typeNumber<1){var t=1;for(t=1;t<40;t++){var e=i.getRSBlocks(t,this.errorCorrectLevel);var r=new o;var n=0;for(var u=0;u<e.length;u++){n+=e[u].dataCount}for(var u=0;u<this.dataList.length;u++){var s=this.dataList[u];r.put(s.mode,4);r.put(s.getLength(),a.getLengthInBits(s.mode,t));s.write(r)}if(r.getLengthInBits()<=n*8)break}this.typeNumber=t}this.makeImpl(false,this.getBestMaskPattern())};l.makeImpl=function(t,e){this.moduleCount=this.typeNumber*4+17;this.modules=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++){this.modules[r][n]=null}}this.setupPositionProbePattern(0,0);this.setupPositionProbePattern(this.moduleCount-7,0);this.setupPositionProbePattern(0,this.moduleCount-7);this.setupPositionAdjustPattern();this.setupTimingPattern();this.setupTypeInfo(t,e);if(this.typeNumber>=7){this.setupTypeNumber(t)}if(this.dataCache==null){this.dataCache=s.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)}this.mapData(this.dataCache,e)};l.setupPositionProbePattern=function(t,e){for(var r=-1;r<=7;r++){if(t+r<=-1||this.moduleCount<=t+r)continue;for(var n=-1;n<=7;n++){if(e+n<=-1||this.moduleCount<=e+n)continue;if(0<=r&&r<=6&&(n==0||n==6)||0<=n&&n<=6&&(r==0||r==6)||2<=r&&r<=4&&2<=n&&n<=4){this.modules[t+r][e+n]=true}else{this.modules[t+r][e+n]=false}}}};l.getBestMaskPattern=function(){var t=0;var e=0;for(var r=0;r<8;r++){this.makeImpl(true,r);var n=a.getLostPoint(this);if(r==0||t>n){t=n;e=r}}return e};l.createMovieClip=function(t,e,r){var n=t.createEmptyMovieClip(e,r);var i=1;this.make();for(var o=0;o<this.modules.length;o++){var a=o*i;for(var u=0;u<this.modules[o].length;u++){var s=u*i;var l=this.modules[o][u];if(l){n.beginFill(0,100);n.moveTo(s,a);n.lineTo(s+i,a);n.lineTo(s+i,a+i);n.lineTo(s,a+i);n.endFill()}}}return n};l.setupTimingPattern=function(){for(var t=8;t<this.moduleCount-8;t++){if(this.modules[t][6]!=null){continue}this.modules[t][6]=t%2==0}for(var e=8;e<this.moduleCount-8;e++){if(this.modules[6][e]!=null){continue}this.modules[6][e]=e%2==0}};l.setupPositionAdjustPattern=function(){var t=a.getPatternPosition(this.typeNumber);for(var e=0;e<t.length;e++){for(var r=0;r<t.length;r++){var n=t[e];var i=t[r];if(this.modules[n][i]!=null){continue}for(var o=-2;o<=2;o++){for(var u=-2;u<=2;u++){if(o==-2||o==2||u==-2||u==2||o==0&&u==0){this.modules[n+o][i+u]=true}else{this.modules[n+o][i+u]=false}}}}}};l.setupTypeNumber=function(t){var e=a.getBCHTypeNumber(this.typeNumber);for(var r=0;r<18;r++){var n=!t&&(e>>r&1)==1;this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=n}for(var r=0;r<18;r++){var n=!t&&(e>>r&1)==1;this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=n}};l.setupTypeInfo=function(t,e){var r=this.errorCorrectLevel<<3|e;var n=a.getBCHTypeInfo(r);for(var i=0;i<15;i++){var o=!t&&(n>>i&1)==1;if(i<6){this.modules[i][8]=o}else if(i<8){this.modules[i+1][8]=o}else{this.modules[this.moduleCount-15+i][8]=o}}for(var i=0;i<15;i++){var o=!t&&(n>>i&1)==1;if(i<8){this.modules[8][this.moduleCount-i-1]=o}else if(i<9){this.modules[8][15-i-1+1]=o}else{this.modules[8][15-i-1]=o}}this.modules[this.moduleCount-8][8]=!t};l.mapData=function(t,e){var r=-1;var n=this.moduleCount-1;var i=7;var o=0;for(var u=this.moduleCount-1;u>0;u-=2){if(u==6)u--;while(true){for(var s=0;s<2;s++){if(this.modules[n][u-s]==null){var l=false;if(o<t.length){l=(t[o]>>>i&1)==1}var f=a.getMask(e,n,u-s);if(f){l=!l}this.modules[n][u-s]=l;i--;if(i==-1){o++;i=7}}}n+=r;if(n<0||this.moduleCount<=n){n-=r;r=-r;break}}}};s.PAD0=236;s.PAD1=17;s.createData=function(t,e,r){var n=i.getRSBlocks(t,e);var u=new o;for(var l=0;l<r.length;l++){var f=r[l];u.put(f.mode,4);u.put(f.getLength(),a.getLengthInBits(f.mode,t));f.write(u)}var h=0;for(var l=0;l<n.length;l++){h+=n[l].dataCount}if(u.getLengthInBits()>h*8){throw new Error("code length overflow. ("+u.getLengthInBits()+">"+h*8+")")}if(u.getLengthInBits()+4<=h*8){u.put(0,4)}while(u.getLengthInBits()%8!=0){u.putBit(false)}while(true){if(u.getLengthInBits()>=h*8){break}u.put(s.PAD0,8);if(u.getLengthInBits()>=h*8){break}u.put(s.PAD1,8)}return s.createBytes(u,n)};s.createBytes=function(t,e){var r=0;var n=0;var i=0;var o=new Array(e.length);var s=new Array(e.length);for(var l=0;l<e.length;l++){var f=e[l].dataCount;var h=e[l].totalCount-f;n=Math.max(n,f);i=Math.max(i,h);o[l]=new Array(f);for(var c=0;c<o[l].length;c++){o[l][c]=255&t.buffer[c+r]}r+=f;var v=a.getErrorCorrectPolynomial(h);var g=new u(o[l],v.getLength()-1);var d=g.mod(v);s[l]=new Array(v.getLength()-1);for(var c=0;c<s[l].length;c++){var p=c+d.getLength()-s[l].length;s[l][c]=p>=0?d.get(p):0}}var m=0;for(var c=0;c<e.length;c++){m+=e[c].totalCount}var y=new Array(m);var w=0;for(var c=0;c<n;c++){for(var l=0;l<e.length;l++){if(c<o[l].length){y[w++]=o[l][c]}}}for(var c=0;c<i;c++){for(var l=0;l<e.length;l++){if(c<s[l].length){y[w++]=s[l][c]}}}return y};t.exports=s},1565:function(t,e,r){var n=r(1502);function i(t){this.mode=n.MODE_8BIT_BYTE;this.data=t}i.prototype={getLength:function(t){return this.data.length},write:function(t){for(var e=0;e<this.data.length;e++){t.put(this.data.charCodeAt(e),8)}}};t.exports=i},1566:function(t,e,r){var n=r(1503);function i(t,e){this.totalCount=t;this.dataCount=e}i.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];i.getRSBlocks=function(t,e){var r=i.getRsBlockTable(t,e);if(r==undefined){throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e)}var n=r.length/3;var o=new Array;for(var a=0;a<n;a++){var u=r[a*3+0];var s=r[a*3+1];var l=r[a*3+2];for(var f=0;f<u;f++){o.push(new i(s,l))}}return o};i.getRsBlockTable=function(t,e){switch(e){case n.L:return i.RS_BLOCK_TABLE[(t-1)*4+0];case n.M:return i.RS_BLOCK_TABLE[(t-1)*4+1];case n.Q:return i.RS_BLOCK_TABLE[(t-1)*4+2];case n.H:return i.RS_BLOCK_TABLE[(t-1)*4+3];default:return undefined}};t.exports=i},1567:function(t,e){function r(){this.buffer=new Array;this.length=0}r.prototype={get:function(t){var e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)==1},put:function(t,e){for(var r=0;r<e;r++){this.putBit((t>>>e-r-1&1)==1)}},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);if(this.buffer.length<=e){this.buffer.push(0)}if(t){this.buffer[e]|=128>>>this.length%8}this.length++}};t.exports=r},1568:function(t,e,r){var n=r(1502);var i=r(1504);var o=r(1505);var a={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var u={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,G18:1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,G15_MASK:1<<14|1<<12|1<<10|1<<4|1<<1,getBCHTypeInfo:function(t){var e=t<<10;while(u.getBCHDigit(e)-u.getBCHDigit(u.G15)>=0){e^=u.G15<<u.getBCHDigit(e)-u.getBCHDigit(u.G15)}return(t<<10|e)^u.G15_MASK},getBCHTypeNumber:function(t){var e=t<<12;while(u.getBCHDigit(e)-u.getBCHDigit(u.G18)>=0){e^=u.G18<<u.getBCHDigit(e)-u.getBCHDigit(u.G18)}return t<<12|e},getBCHDigit:function(t){var e=0;while(t!=0){e++;t>>>=1}return e},getPatternPosition:function(t){return u.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case a.PATTERN000:return(e+r)%2==0;case a.PATTERN001:return e%2==0;case a.PATTERN010:return r%3==0;case a.PATTERN011:return(e+r)%3==0;case a.PATTERN100:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case a.PATTERN101:return e*r%2+e*r%3==0;case a.PATTERN110:return(e*r%2+e*r%3)%2==0;case a.PATTERN111:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){var e=new i([1],0);for(var r=0;r<t;r++){e=e.multiply(new i([1,o.gexp(r)],0))}return e},getLengthInBits:function(t,e){if(1<=e&&e<10){switch(t){case n.MODE_NUMBER:return 10;case n.MODE_ALPHA_NUM:return 9;case n.MODE_8BIT_BYTE:return 8;case n.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}}else if(e<27){switch(t){case n.MODE_NUMBER:return 12;case n.MODE_ALPHA_NUM:return 11;case n.MODE_8BIT_BYTE:return 16;case n.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}}else if(e<41){switch(t){case n.MODE_NUMBER:return 14;case n.MODE_ALPHA_NUM:return 13;case n.MODE_8BIT_BYTE:return 16;case n.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}else{throw new Error("type:"+e)}},getLostPoint:function(t){var e=t.getModuleCount();var r=0;for(var n=0;n<e;n++){for(var i=0;i<e;i++){var o=0;var a=t.isDark(n,i);for(var u=-1;u<=1;u++){if(n+u<0||e<=n+u){continue}for(var s=-1;s<=1;s++){if(i+s<0||e<=i+s){continue}if(u==0&&s==0){continue}if(a==t.isDark(n+u,i+s)){o++}}}if(o>5){r+=3+o-5}}}for(var n=0;n<e-1;n++){for(var i=0;i<e-1;i++){var l=0;if(t.isDark(n,i))l++;if(t.isDark(n+1,i))l++;if(t.isDark(n,i+1))l++;if(t.isDark(n+1,i+1))l++;if(l==0||l==4){r+=3}}}for(var n=0;n<e;n++){for(var i=0;i<e-6;i++){if(t.isDark(n,i)&&!t.isDark(n,i+1)&&t.isDark(n,i+2)&&t.isDark(n,i+3)&&t.isDark(n,i+4)&&!t.isDark(n,i+5)&&t.isDark(n,i+6)){r+=40}}}for(var i=0;i<e;i++){for(var n=0;n<e-6;n++){if(t.isDark(n,i)&&!t.isDark(n+1,i)&&t.isDark(n+2,i)&&t.isDark(n+3,i)&&t.isDark(n+4,i)&&!t.isDark(n+5,i)&&t.isDark(n+6,i)){r+=40}}}var f=0;for(var i=0;i<e;i++){for(var n=0;n<e;n++){if(t.isDark(n,i)){f++}}}var h=Math.abs(100*f/e/e-50)/5;r+=h*10;return r}};t.exports=u}}]);