(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{1456:function(e,t,r){"use strict";(function(e){r.d(t,"b",function(){return p});r.d(t,"c",function(){return g});r.d(t,"a",function(){return v});r.d(t,"d",function(){return h});r.d(t,"e",function(){return m});r.d(t,"f",function(){return y});var a=r(15);var n=r.n(a);var i=r(3);var o=r(4);var s=r(5);var l=r.n(s);var u=r(17);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function c(e,t,r,a,n,i,o){try{var s=e[i](o);var l=s.value}catch(e){r(e);return}if(s.done){t(l)}else{Promise.resolve(l).then(a,n)}}function d(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var i=e.apply(t,r);function o(e){c(i,a,n,o,s,"next",e)}function s(e){c(i,a,n,o,s,"throw",e)}o(undefined)})}}var f=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var p=function e(t,r,a){return function(){var e=d(regeneratorRuntime.mark(function e(l){var c;return regeneratorRuntime.wrap(function e(d){while(1){switch(d.prev=d.next){case 0:d.prev=0;a&&l(Object(o["c"])());!a&&l(Object(o["d"])());d.next=5;return n.a.get("".concat(u["a"].rating,"/v1.1/ratings?item_per_page=20&page=").concat(t,"&user_type=").concat(r));case 5:c=d.sent;if(c.data.status==="error"){s["NotificationManager"].error(c.data.msg)}else{l({type:i["Kb"],payload:c.data.data})}l(Object(o["a"])());l(Object(o["b"])());d.next=15;break;case 11:d.prev=11;d.t0=d["catch"](0);l(Object(o["a"])());l(Object(o["b"])());case 15:case"end":return d.stop()}}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()};var g=function e(t){return function(){var e=d(regeneratorRuntime.mark(function e(r){var a;return regeneratorRuntime.wrap(function e(o){while(1){switch(o.prev=o.next){case 0:o.prev=0;o.next=3;return n.a.get("".concat(u["a"].rating,"/v1.1/ratings?user_type=").concat(t,"&component=count"));case 3:a=o.sent;if(a.data.status==="error"){s["NotificationManager"].error(a.data.msg)}else{r({type:i["Lb"],payload:a.data.data.total?a.data.data.total:0})}o.next=9;break;case 7:o.prev=7;o.t0=o["catch"](0);case 9:case"end":return o.stop()}}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()};var v=function e(t,r){return function(){var e=d(regeneratorRuntime.mark(function e(a){var l;return regeneratorRuntime.wrap(function e(c){while(1){switch(c.prev=c.next){case 0:c.prev=0;r&&a(Object(o["c"])());!r&&a(Object(o["d"])());c.next=5;return n.a.get("".concat(u["a"].rating,"/v1.1/ratings/").concat(t));case 5:l=c.sent;if(l.data.status==="error"){s["NotificationManager"].error(l.data.msg)}else{a({type:i["Jb"],payload:l.data.data})}a(Object(o["a"])());a(Object(o["b"])());c.next=15;break;case 11:c.prev=11;c.t0=c["catch"](0);a(Object(o["a"])());a(Object(o["b"])());case 15:case"end":return c.stop()}}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()};var h=function e(t,r,a){return function(){var e=d(regeneratorRuntime.mark(function e(l){var c;return regeneratorRuntime.wrap(function e(d){while(1){switch(d.prev=d.next){case 0:d.prev=0;l(Object(o["d"])());d.next=4;return n.a.get("".concat(u["a"].rating,"/v1.1/ratings?user_type=").concat(r,"&auth_id=").concat(a,"&item_per_page=20&page=").concat(t));case 4:c=d.sent;if(c.data.status==="error"){s["NotificationManager"].error(c.data.msg)}else{l({type:i["Nb"],payload:c.data.data})}l(Object(o["b"])());d.next=12;break;case 9:d.prev=9;d.t0=d["catch"](0);l(Object(o["b"])());case 12:case"end":return d.stop()}}},e,null,[[0,9]])}));return function(t){return e.apply(this,arguments)}}()};var m=function e(t,r){return function(){var e=d(regeneratorRuntime.mark(function e(a){var o;return regeneratorRuntime.wrap(function e(l){while(1){switch(l.prev=l.next){case 0:l.prev=0;l.next=3;return n.a.get("".concat(u["a"].rating,"/v1.1/ratings?user_type=").concat(t,"&auth_id=").concat(r,"&component=avg"));case 3:o=l.sent;if(o.data.status==="error"){s["NotificationManager"].error(o.data.msg)}else{a({type:i["Ob"],payload:o.data.data.avg?o.data.data.avg:0})}l.next=9;break;case 7:l.prev=7;l.t0=l["catch"](0);case 9:case"end":return l.stop()}}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()};var y=function e(t,r){return function(){var e=d(regeneratorRuntime.mark(function e(a){var o;return regeneratorRuntime.wrap(function e(l){while(1){switch(l.prev=l.next){case 0:l.prev=0;l.next=3;return n.a.get("".concat(u["a"].rating,"/v1.1/ratings?user_type=").concat(t,"&component=count&auth_id=").concat(r));case 3:o=l.sent;if(o.data.status==="error"){s["NotificationManager"].error(o.data.msg)}else{a({type:i["Mb"],payload:o.data.data.total?o.data.data.total:0})}l.next=9;break;case 7:l.prev=7;l.t0=l["catch"](0);case 9:case"end":return l.stop()}}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()};(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(p,"getRatings","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/ratingAction.js");e.register(g,"getRatingsCount","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/ratingAction.js");e.register(v,"getRating","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/ratingAction.js");e.register(h,"getUserRating","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/ratingAction.js");e.register(m,"getUserRatingAverage","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/ratingAction.js");e.register(y,"getUserRatingsCount","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/ratingAction.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,r(7)(e))},1471:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=r(1475);var n=i(a);function i(e){return e&&e.__esModule?e:{default:e}}Number.isInteger=Number.isInteger||function(e){return typeof e==="number"&&isFinite(e)&&Math.floor(e)===e};t.default=n.default},1475:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||false;a.configurable=true;if("value"in a)a.writable=true;Object.defineProperty(e,a.key,a)}}return function(t,r,a){if(r)e(t.prototype,r);if(a)e(t,a);return t}}();var n=r(0);var i=c(n);var o=r(1);var s=c(o);var l=r(1476);var u=c(l);function c(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function f(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function p(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var g=function(e){p(t,e);function t(){var e;var r,a,n;d(this,t);for(var i=arguments.length,o=Array(i),s=0;s<i;s++){o[s]=arguments[s]}return n=(r=(a=f(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),a),a.state={highestStarHovered:-Infinity},a.fillId="starGrad"+Math.random().toFixed(15).slice(2),a.hoverOverStar=function(e){return function(){a.setState({highestStarHovered:e})}},a.unHoverOverStar=function(){a.setState({highestStarHovered:-Infinity})},r),f(a,n)}a(t,[{key:"stopColorStyle",value:function e(t){var e={stopColor:t,stopOpacity:"1"};return this.props.ignoreInlineStyles?{}:e}},{key:"render",value:function e(){var t=this.props,r=t.starRatedColor,a=t.starEmptyColor;return i.default.createElement("div",{className:"star-ratings",title:this.titleText,style:this.starRatingsStyle},i.default.createElement("svg",{className:"star-grad",style:this.starGradientStyle},i.default.createElement("defs",null,i.default.createElement("linearGradient",{id:this.fillId,x1:"0%",y1:"0%",x2:"100%",y2:"0%"},i.default.createElement("stop",{offset:"0%",className:"stop-color-first",style:this.stopColorStyle(r)}),i.default.createElement("stop",{offset:this.offsetValue,className:"stop-color-first",style:this.stopColorStyle(r)}),i.default.createElement("stop",{offset:this.offsetValue,className:"stop-color-final",style:this.stopColorStyle(a)}),i.default.createElement("stop",{offset:"100%",className:"stop-color-final",style:this.stopColorStyle(a)})))),this.renderStars)}},{key:"starRatingsStyle",get:function e(){var t={position:"relative",boxSizing:"border-box",display:"inline-block"};return this.props.ignoreInlineStyles?{}:t}},{key:"starGradientStyle",get:function e(){var t={position:"absolute",zIndex:"0",width:"0",height:"0",visibility:"hidden"};return this.props.ignoreInlineStyles?{}:t}},{key:"titleText",get:function e(){var t=this.props,r=t.typeOfWidget,a=t.rating;var n=this.state.highestStarHovered;var i=n>0?n:a;var o=parseFloat(i.toFixed(2)).toString();if(Number.isInteger(i)){o=String(i)}var s=r+"s";if(o==="1"){s=r}return o+" "+s}},{key:"offsetValue",get:function e(){var t=this.props.rating;var r=Number.isInteger(t);var a="0%";if(!r){var n=t.toFixed(2).split(".")[1].slice(0,2);a=n+"%"}return a}},{key:"renderStars",get:function e(){var t=this;var r=this.props,a=r.changeRating,n=r.rating,o=r.numberOfStars,s=r.starDimension,l=r.starSpacing,c=r.starRatedColor,d=r.starEmptyColor,f=r.starHoverColor,p=r.gradientPathName,g=r.ignoreInlineStyles,v=r.svgIconPath,h=r.svgIconViewBox,m=r.name;var y=this.state.highestStarHovered;var b=Array.apply(null,Array(o));return b.map(function(e,r){var b=r+1;var S=b<=n;var w=y>0;var R=b<=y;var O=b===y;var P=b>n&&b-1<n;var x=b===1;var j=b===o;return i.default.createElement(u.default,{key:b,fillId:t.fillId,changeRating:a?function(){return a(b,m)}:null,hoverOverStar:a?t.hoverOverStar(b):null,unHoverOverStar:a?t.unHoverOverStar:null,isStarred:S,isPartiallyFullStar:P,isHovered:R,hoverMode:w,isCurrentHoveredStar:O,isFirstStar:x,isLastStar:j,starDimension:s,starSpacing:l,starHoverColor:f,starRatedColor:c,starEmptyColor:d,gradientPathName:p,ignoreInlineStyles:g,svgIconPath:v,svgIconViewBox:h})})}}]);return t}(i.default.Component);g.propTypes={rating:s.default.number.isRequired,numberOfStars:s.default.number.isRequired,changeRating:s.default.func,starHoverColor:s.default.string.isRequired,starRatedColor:s.default.string.isRequired,starEmptyColor:s.default.string.isRequired,starDimension:s.default.string.isRequired,starSpacing:s.default.string.isRequired,gradientPathName:s.default.string.isRequired,ignoreInlineStyles:s.default.bool.isRequired,svgIconPath:s.default.string.isRequired,svgIconViewBox:s.default.string.isRequired,name:s.default.string};g.defaultProps={rating:0,typeOfWidget:"Star",numberOfStars:5,changeRating:null,starHoverColor:"rgb(230, 67, 47)",starRatedColor:"rgb(109, 122, 130)",starEmptyColor:"rgb(203, 211, 227)",starDimension:"50px",starSpacing:"7px",gradientPathName:"",ignoreInlineStyles:false,svgIconPath:"m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z",svgIconViewBox:"0 0 51 48"};t.default=g},1476:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||false;a.configurable=true;if("value"in a)a.writable=true;Object.defineProperty(e,a.key,a)}}return function(t,r,a){if(r)e(t.prototype,r);if(a)e(t,a);return t}}();var n=r(0);var i=c(n);var o=r(1477);var s=c(o);var l=r(1);var u=c(l);function c(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function f(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function p(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var g=function(e){p(t,e);function t(){d(this,t);return f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}a(t,[{key:"render",value:function e(){var t=this.props,r=t.changeRating,a=t.hoverOverStar,n=t.unHoverOverStar,o=t.svgIconViewBox,s=t.svgIconPath;return i.default.createElement("div",{className:"star-container",style:this.starContainerStyle,onMouseEnter:a,onMouseLeave:n,onClick:r},i.default.createElement("svg",{viewBox:o,className:this.starClasses,style:this.starSvgStyle},i.default.createElement("path",{className:"star",style:this.pathStyle,d:s})))}},{key:"starContainerStyle",get:function e(){var t=this.props,r=t.changeRating,a=t.starSpacing,n=t.isFirstStar,i=t.isLastStar,o=t.ignoreInlineStyles;var s={position:"relative",display:"inline-block",verticalAlign:"middle",paddingLeft:n?undefined:a,paddingRight:i?undefined:a,cursor:r?"pointer":undefined};return o?{}:s}},{key:"starSvgStyle",get:function e(){var t=this.props,r=t.ignoreInlineStyles,a=t.isCurrentHoveredStar,n=t.starDimension;var i={width:n,height:n,transition:"transform .2s ease-in-out",transform:a?"scale(1.1)":undefined};return r?{}:i}},{key:"pathStyle",get:function e(){var t=this.props,r=t.isStarred,a=t.isPartiallyFullStar,n=t.isHovered,i=t.hoverMode,o=t.starEmptyColor,s=t.starRatedColor,l=t.starHoverColor,u=t.gradientPathName,c=t.fillId,d=t.ignoreInlineStyles;var f=void 0;if(i){if(n)f=l;else f=o}else{if(a)f="url('"+u+"#"+c+"')";else if(r)f=s;else f=o}var p={fill:f,transition:"fill .2s ease-in-out"};return d?{}:p}},{key:"starClasses",get:function e(){var t=this.props,r=t.isSelected,a=t.isPartiallyFullStar,n=t.isHovered,i=t.isCurrentHoveredStar,o=t.ignoreInlineStyles;var l=(0,s.default)({"widget-svg":true,"widget-selected":r,"multi-widget-selected":a,hovered:n,"current-hovered":i});return o?{}:l}}]);return t}(i.default.Component);g.propTypes={fillId:u.default.string.isRequired,changeRating:u.default.func,hoverOverStar:u.default.func,unHoverOverStar:u.default.func,isStarred:u.default.bool.isRequired,isPartiallyFullStar:u.default.bool.isRequired,isHovered:u.default.bool.isRequired,hoverMode:u.default.bool.isRequired,isCurrentHoveredStar:u.default.bool.isRequired,isFirstStar:u.default.bool.isRequired,isLastStar:u.default.bool.isRequired,starDimension:u.default.string.isRequired,starSpacing:u.default.string.isRequired,starHoverColor:u.default.string.isRequired,starRatedColor:u.default.string.isRequired,starEmptyColor:u.default.string.isRequired,gradientPathName:u.default.string.isRequired,ignoreInlineStyles:u.default.bool.isRequired,svgIconPath:u.default.string.isRequired,svgIconViewBox:u.default.string.isRequired};t.default=g},1477:function(e,t,r){var a,n;
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
(function(){"use strict";var r={}.hasOwnProperty;function i(){var e=[];for(var t=0;t<arguments.length;t++){var a=arguments[t];if(!a)continue;var n=typeof a;if(n==="string"||n==="number"){e.push(a)}else if(Array.isArray(a)){if(a.length){var o=i.apply(null,a);if(o){e.push(o)}}}else if(n==="object"){if(a.toString===Object.prototype.toString){for(var s in a){if(r.call(a,s)&&a[s]){e.push(s)}}}else{e.push(a.toString())}}}return e.join(" ")}if(true&&e.exports){i.default=i;e.exports=i}else if(true){!(a=[],n=function(){return i}.apply(t,a),n!==undefined&&(e.exports=n))}else{}})()},1501:function(e,t,r){"use strict";(function(e){var a=r(0);var n=r.n(a);var i=r(223);var o=r(225);var s=r(18);var l=r(224);var u=r(116);var c=r(66);var d=r(34);var f=r(1471);var p=r.n(f);var g=r(104);var v=r.n(g);var h=r(20);var m=r(1456);var y=r(103);var b=r(40);var S=r(6);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function w(e,t){return j(e)||x(e,t)||O(e,t)||R()}function R(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function O(e,t){if(!e)return;if(typeof e==="string")return P(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor)r=e.constructor.name;if(r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return P(e,t)}function P(e,t){if(t==null||t>e.length)t=e.length;for(var r=0,a=new Array(t);r<t;r++){a[r]=e[r]}return a}function x(e,t){var r=e&&(typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"]);if(r==null)return;var a=[];var n=true;var i=false;var o,s;try{for(r=r.call(e);!(n=(o=r.next()).done);n=true){a.push(o.value);if(t&&a.length===t)break}}catch(e){i=true;s=e}finally{try{if(!n&&r["return"]!=null)r["return"]()}finally{if(i)throw s}}return a}function j(e){if(Array.isArray(e))return e}var C=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var E=r(229);var k=function e(t){var r=t.getRatings,d=t.ratings,f=t.loading,g=t.ratingCount,m=t.user_type,R=t.header;var O=Object(S["g"])();var P=E.parse(O.location.search,{ignoreQueryPrefix:true}).page;var x=Object(a["useState"])(function(){return P===undefined?1:parseInt(P,10)}),j=w(x,2),C=j[0],k=j[1];var _=function e(t){O.push("".concat(O.location.pathname,"?page=").concat(t));k(t);r(t,m);window.scrollTo(0,0)};return n.a.createElement("div",null,!f&&(d===null||d===void 0?void 0:d.length)>0&&n.a.createElement(c["a"],{heading:R,fullBlock:true},n.a.createElement("div",{className:"table-responsive",style:{minHeight:"50vh"}},n.a.createElement(i["a"],null,n.a.createElement(l["a"],null,n.a.createElement(u["a"],{hover:true},n.a.createElement(s["a"],null,"Full Name"),n.a.createElement(s["a"],null,"Rating"),n.a.createElement(s["a"],null,"Date / Time"),n.a.createElement(s["a"],null,"Action"))),n.a.createElement(o["a"],null,n.a.createElement(a["Fragment"],null,d.map(function(e,t){var r,a;return n.a.createElement(u["a"],{hover:true,key:t},n.a.createElement(s["a"],null,e===null||e===void 0?void 0:(r=e.receiver[0])===null||r===void 0?void 0:r.first_name," ",e===null||e===void 0?void 0:(a=e.receiver[0])===null||a===void 0?void 0:a.last_name),n.a.createElement(s["a"],null,n.a.createElement(p.a,{rating:e.rating,starRatedColor:e.rating<=2?"#dc3545":e.rating>2&&e.rating<4?"#ffc107":"#5cb85c",numberOfStars:5,starDimension:"18px"})),n.a.createElement(s["a"],null,Object(b["a"])(e.createdAt)),n.a.createElement(s["a"],null,n.a.createElement("button",{type:"button",className:"rct-link-btn text-primary",title:"view details"},n.a.createElement(h["b"],{to:"/admin/ratings/".concat(e.rating_id)},n.a.createElement("i",{className:"ti-eye"})))))}))))),n.a.createElement("div",{className:"d-flex justify-content-end align-items-center mb-0 mt-3 mr-2"},n.a.createElement(v.a,{activePage:C,itemClass:"page-item",linkClass:"page-link",itemsCountPerPage:20,totalItemsCount:g,onChange:_}))),!f&&(d===null||d===void 0?void 0:d.length)<1&&n.a.createElement(y["a"],null))};C(k,"useHistory{history}\nuseState{[currentPage, setCurrentPage](() => {\n    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);\n  })}",function(){return[S["g"]]});function _(e){return{getRatings:function t(r,a,n){return e(Object(m["b"])(r,a,n))}}}var I=function e(t){return{ratings:t.rating.ratings,ratingCount:t.rating.ratingCount,loading:t.loading.loading}};var H=Object(d["b"])(I,_)(k);t["a"]=H;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(k,"RatingTable","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/ratings/components/ratingTable.js");e.register(_,"mapDispatchToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/ratings/components/ratingTable.js");e.register(I,"mapStateToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/ratings/components/ratingTable.js");e.register(H,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/ratings/components/ratingTable.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,r(7)(e))}}]);