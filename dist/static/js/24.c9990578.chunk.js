(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[24],{1320:function(e,t,r){"use strict";r.r(t);(function(e){var a=r(0);var n=r.n(a);var i=r(34);var o=r(369);var s=r(166);var l=r(20);var u=r(1456);var c=r(40);var d=r(1471);var f=r.n(d);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();var p=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var v=function e(t){var r,i,u,d,p,v,g,m,h,y,b,S;var R=t.getRating,E=t.rating,w=t.loading,x=t.match;Object(a["useEffect"])(function(){R(x.params.id,true)},[x.params.id]);return n.a.createElement("div",{className:"mb-5",style:{minHeight:"90vh"}},n.a.createElement(o["a"],null,n.a.createElement("title",null,"Rating details"),n.a.createElement("meta",{name:"description",content:"Rating Details"})),n.a.createElement(s["a"],{title:"Rating details",match:x}),!w&&n.a.createElement("div",{className:"row",style:{fontSize:"0.8rem"}},n.a.createElement("div",{className:"col-sm-6"},n.a.createElement("div",{className:"tab-content px-4"},n.a.createElement("div",{className:"tab-pane active",id:"home"},n.a.createElement("ul",{className:"list-group"},n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Rating Id")),E===null||E===void 0?void 0:E.rating_id),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Receiver's Name")),n.a.createElement(l["b"],{to:(E===null||E===void 0?void 0:E.receiver_user_type)==="driver"?"/admin/drivers/".concat(E===null||E===void 0?void 0:E.receiver_auth_id):"/admin/passengers/".concat(E===null||E===void 0?void 0:E.receiver_auth_id)},E===null||E===void 0?void 0:(r=E.receiver)===null||r===void 0?void 0:(i=r.find(function(e){return e!=="undefined"}))===null||i===void 0?void 0:i.first_name," ",E===null||E===void 0?void 0:(u=E.receiver)===null||u===void 0?void 0:(d=u.find(function(e){return e!=="undefined"}))===null||d===void 0?void 0:d.last_name)),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Receiver's User Type")),E===null||E===void 0?void 0:E.receiver_user_type),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Sender's Name")),n.a.createElement(l["b"],{to:(E===null||E===void 0?void 0:(p=E.sender)===null||p===void 0?void 0:(v=p.find(function(e){return e!=="undefined"}))===null||v===void 0?void 0:v.user_type)==="driver"?"/admin/drivers/".concat(E===null||E===void 0?void 0:E.sender_auth_id):"/admin/passengers/".concat(E===null||E===void 0?void 0:E.sender_auth_id)},E===null||E===void 0?void 0:(g=E.sender)===null||g===void 0?void 0:(m=g.find(function(e){return e!=="undefined"}))===null||m===void 0?void 0:m.first_name," ",E===null||E===void 0?void 0:(h=E.sender)===null||h===void 0?void 0:(y=h.find(function(e){return e!=="undefined"}))===null||y===void 0?void 0:y.last_name)),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Sender's User Type")),E===null||E===void 0?void 0:(b=E.sender)===null||b===void 0?void 0:(S=b.find(function(e){return e!=="undefined"}))===null||S===void 0?void 0:S.user_type),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Trip Id")),n.a.createElement(l["b"],{to:"/admin/trips/".concat(E===null||E===void 0?void 0:E.trip_id)},E===null||E===void 0?void 0:E.trip_id)),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Date / Time")),Object(c["a"])(E===null||E===void 0?void 0:E.createdAt)),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Rating")),n.a.createElement(f.a,{rating:E===null||E===void 0?void 0:E.rating,starRatedColor:(E===null||E===void 0?void 0:E.rating)<=2?"#dc3545":(E===null||E===void 0?void 0:E.rating)>2&&(E===null||E===void 0?void 0:E.rating)<4?"#ffc107":"#5cb85c",numberOfStars:5,starDimension:"18px"})),n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("strong",null,"Comment")),E===null||E===void 0?void 0:E.comment)))))))};p(v,"useEffect{}");function g(e){return{getRating:function t(r,a){return e(Object(u["a"])(r,a))}}}var m=function e(t){return{rating:t.rating.rating,loading:t.loading.loading}};var h=Object(i["b"])(m,g)(v);t["default"]=h;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(v,"RatingDetails","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/ratings/ratingDetails.js");e.register(g,"mapDispatchToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/ratings/ratingDetails.js");e.register(m,"mapStateToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/ratings/ratingDetails.js");e.register(h,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/ratings/ratingDetails.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,r(7)(e))},1456:function(e,t,r){"use strict";(function(e){r.d(t,"b",function(){return p});r.d(t,"c",function(){return v});r.d(t,"a",function(){return g});r.d(t,"d",function(){return m});r.d(t,"e",function(){return h});r.d(t,"f",function(){return y});var a=r(15);var n=r.n(a);var i=r(3);var o=r(4);var s=r(5);var l=r.n(s);var u=r(17);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function c(e,t,r,a,n,i,o){try{var s=e[i](o);var l=s.value}catch(e){r(e);return}if(s.done){t(l)}else{Promise.resolve(l).then(a,n)}}function d(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var i=e.apply(t,r);function o(e){c(i,a,n,o,s,"next",e)}function s(e){c(i,a,n,o,s,"throw",e)}o(undefined)})}}var f=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var p=function e(t,r,a){return function(){var e=d(regeneratorRuntime.mark(function e(l){var c;return regeneratorRuntime.wrap(function e(d){while(1){switch(d.prev=d.next){case 0:d.prev=0;a&&l(Object(o["c"])());!a&&l(Object(o["d"])());d.next=5;return n.a.get("".concat(u["a"].rating,"/v1.1/ratings?item_per_page=20&page=").concat(t,"&user_type=").concat(r));case 5:c=d.sent;if(c.data.status==="error"){s["NotificationManager"].error(c.data.msg)}else{l({type:i["Kb"],payload:c.data.data})}l(Object(o["a"])());l(Object(o["b"])());d.next=15;break;case 11:d.prev=11;d.t0=d["catch"](0);l(Object(o["a"])());l(Object(o["b"])());case 15:case"end":return d.stop()}}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()};var v=function e(t){return function(){var e=d(regeneratorRuntime.mark(function e(r){var a;return regeneratorRuntime.wrap(function e(o){while(1){switch(o.prev=o.next){case 0:o.prev=0;o.next=3;return n.a.get("".concat(u["a"].rating,"/v1.1/ratings?user_type=").concat(t,"&component=count"));case 3:a=o.sent;if(a.data.status==="error"){s["NotificationManager"].error(a.data.msg)}else{r({type:i["Lb"],payload:a.data.data.total?a.data.data.total:0})}o.next=9;break;case 7:o.prev=7;o.t0=o["catch"](0);case 9:case"end":return o.stop()}}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()};var g=function e(t,r){return function(){var e=d(regeneratorRuntime.mark(function e(a){var l;return regeneratorRuntime.wrap(function e(c){while(1){switch(c.prev=c.next){case 0:c.prev=0;r&&a(Object(o["c"])());!r&&a(Object(o["d"])());c.next=5;return n.a.get("".concat(u["a"].rating,"/v1.1/ratings/").concat(t));case 5:l=c.sent;if(l.data.status==="error"){s["NotificationManager"].error(l.data.msg)}else{a({type:i["Jb"],payload:l.data.data})}a(Object(o["a"])());a(Object(o["b"])());c.next=15;break;case 11:c.prev=11;c.t0=c["catch"](0);a(Object(o["a"])());a(Object(o["b"])());case 15:case"end":return c.stop()}}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()};var m=function e(t,r,a){return function(){var e=d(regeneratorRuntime.mark(function e(l){var c;return regeneratorRuntime.wrap(function e(d){while(1){switch(d.prev=d.next){case 0:d.prev=0;l(Object(o["d"])());d.next=4;return n.a.get("".concat(u["a"].rating,"/v1.1/ratings?user_type=").concat(r,"&auth_id=").concat(a,"&item_per_page=20&page=").concat(t));case 4:c=d.sent;if(c.data.status==="error"){s["NotificationManager"].error(c.data.msg)}else{l({type:i["Nb"],payload:c.data.data})}l(Object(o["b"])());d.next=12;break;case 9:d.prev=9;d.t0=d["catch"](0);l(Object(o["b"])());case 12:case"end":return d.stop()}}},e,null,[[0,9]])}));return function(t){return e.apply(this,arguments)}}()};var h=function e(t,r){return function(){var e=d(regeneratorRuntime.mark(function e(a){var o;return regeneratorRuntime.wrap(function e(l){while(1){switch(l.prev=l.next){case 0:l.prev=0;l.next=3;return n.a.get("".concat(u["a"].rating,"/v1.1/ratings?user_type=").concat(t,"&auth_id=").concat(r,"&component=avg"));case 3:o=l.sent;if(o.data.status==="error"){s["NotificationManager"].error(o.data.msg)}else{a({type:i["Ob"],payload:o.data.data.avg?o.data.data.avg:0})}l.next=9;break;case 7:l.prev=7;l.t0=l["catch"](0);case 9:case"end":return l.stop()}}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()};var y=function e(t,r){return function(){var e=d(regeneratorRuntime.mark(function e(a){var o;return regeneratorRuntime.wrap(function e(l){while(1){switch(l.prev=l.next){case 0:l.prev=0;l.next=3;return n.a.get("".concat(u["a"].rating,"/v1.1/ratings?user_type=").concat(t,"&component=count&auth_id=").concat(r));case 3:o=l.sent;if(o.data.status==="error"){s["NotificationManager"].error(o.data.msg)}else{a({type:i["Mb"],payload:o.data.data.total?o.data.data.total:0})}l.next=9;break;case 7:l.prev=7;l.t0=l["catch"](0);case 9:case"end":return l.stop()}}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()};(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(p,"getRatings","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/ratingAction.js");e.register(v,"getRatingsCount","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/ratingAction.js");e.register(g,"getRating","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/ratingAction.js");e.register(m,"getUserRating","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/ratingAction.js");e.register(h,"getUserRatingAverage","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/ratingAction.js");e.register(y,"getUserRatingsCount","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/ratingAction.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,r(7)(e))},1471:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=r(1475);var n=i(a);function i(e){return e&&e.__esModule?e:{default:e}}Number.isInteger=Number.isInteger||function(e){return typeof e==="number"&&isFinite(e)&&Math.floor(e)===e};t.default=n.default},1475:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||false;a.configurable=true;if("value"in a)a.writable=true;Object.defineProperty(e,a.key,a)}}return function(t,r,a){if(r)e(t.prototype,r);if(a)e(t,a);return t}}();var n=r(0);var i=c(n);var o=r(1);var s=c(o);var l=r(1476);var u=c(l);function c(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function f(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function p(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var v=function(e){p(t,e);function t(){var e;var r,a,n;d(this,t);for(var i=arguments.length,o=Array(i),s=0;s<i;s++){o[s]=arguments[s]}return n=(r=(a=f(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),a),a.state={highestStarHovered:-Infinity},a.fillId="starGrad"+Math.random().toFixed(15).slice(2),a.hoverOverStar=function(e){return function(){a.setState({highestStarHovered:e})}},a.unHoverOverStar=function(){a.setState({highestStarHovered:-Infinity})},r),f(a,n)}a(t,[{key:"stopColorStyle",value:function e(t){var e={stopColor:t,stopOpacity:"1"};return this.props.ignoreInlineStyles?{}:e}},{key:"render",value:function e(){var t=this.props,r=t.starRatedColor,a=t.starEmptyColor;return i.default.createElement("div",{className:"star-ratings",title:this.titleText,style:this.starRatingsStyle},i.default.createElement("svg",{className:"star-grad",style:this.starGradientStyle},i.default.createElement("defs",null,i.default.createElement("linearGradient",{id:this.fillId,x1:"0%",y1:"0%",x2:"100%",y2:"0%"},i.default.createElement("stop",{offset:"0%",className:"stop-color-first",style:this.stopColorStyle(r)}),i.default.createElement("stop",{offset:this.offsetValue,className:"stop-color-first",style:this.stopColorStyle(r)}),i.default.createElement("stop",{offset:this.offsetValue,className:"stop-color-final",style:this.stopColorStyle(a)}),i.default.createElement("stop",{offset:"100%",className:"stop-color-final",style:this.stopColorStyle(a)})))),this.renderStars)}},{key:"starRatingsStyle",get:function e(){var t={position:"relative",boxSizing:"border-box",display:"inline-block"};return this.props.ignoreInlineStyles?{}:t}},{key:"starGradientStyle",get:function e(){var t={position:"absolute",zIndex:"0",width:"0",height:"0",visibility:"hidden"};return this.props.ignoreInlineStyles?{}:t}},{key:"titleText",get:function e(){var t=this.props,r=t.typeOfWidget,a=t.rating;var n=this.state.highestStarHovered;var i=n>0?n:a;var o=parseFloat(i.toFixed(2)).toString();if(Number.isInteger(i)){o=String(i)}var s=r+"s";if(o==="1"){s=r}return o+" "+s}},{key:"offsetValue",get:function e(){var t=this.props.rating;var r=Number.isInteger(t);var a="0%";if(!r){var n=t.toFixed(2).split(".")[1].slice(0,2);a=n+"%"}return a}},{key:"renderStars",get:function e(){var t=this;var r=this.props,a=r.changeRating,n=r.rating,o=r.numberOfStars,s=r.starDimension,l=r.starSpacing,c=r.starRatedColor,d=r.starEmptyColor,f=r.starHoverColor,p=r.gradientPathName,v=r.ignoreInlineStyles,g=r.svgIconPath,m=r.svgIconViewBox,h=r.name;var y=this.state.highestStarHovered;var b=Array.apply(null,Array(o));return b.map(function(e,r){var b=r+1;var S=b<=n;var R=y>0;var E=b<=y;var w=b===y;var x=b>n&&b-1<n;var _=b===1;var O=b===o;return i.default.createElement(u.default,{key:b,fillId:t.fillId,changeRating:a?function(){return a(b,h)}:null,hoverOverStar:a?t.hoverOverStar(b):null,unHoverOverStar:a?t.unHoverOverStar:null,isStarred:S,isPartiallyFullStar:x,isHovered:E,hoverMode:R,isCurrentHoveredStar:w,isFirstStar:_,isLastStar:O,starDimension:s,starSpacing:l,starHoverColor:f,starRatedColor:c,starEmptyColor:d,gradientPathName:p,ignoreInlineStyles:v,svgIconPath:g,svgIconViewBox:m})})}}]);return t}(i.default.Component);v.propTypes={rating:s.default.number.isRequired,numberOfStars:s.default.number.isRequired,changeRating:s.default.func,starHoverColor:s.default.string.isRequired,starRatedColor:s.default.string.isRequired,starEmptyColor:s.default.string.isRequired,starDimension:s.default.string.isRequired,starSpacing:s.default.string.isRequired,gradientPathName:s.default.string.isRequired,ignoreInlineStyles:s.default.bool.isRequired,svgIconPath:s.default.string.isRequired,svgIconViewBox:s.default.string.isRequired,name:s.default.string};v.defaultProps={rating:0,typeOfWidget:"Star",numberOfStars:5,changeRating:null,starHoverColor:"rgb(230, 67, 47)",starRatedColor:"rgb(109, 122, 130)",starEmptyColor:"rgb(203, 211, 227)",starDimension:"50px",starSpacing:"7px",gradientPathName:"",ignoreInlineStyles:false,svgIconPath:"m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z",svgIconViewBox:"0 0 51 48"};t.default=v},1476:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||false;a.configurable=true;if("value"in a)a.writable=true;Object.defineProperty(e,a.key,a)}}return function(t,r,a){if(r)e(t.prototype,r);if(a)e(t,a);return t}}();var n=r(0);var i=c(n);var o=r(1477);var s=c(o);var l=r(1);var u=c(l);function c(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function f(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function p(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var v=function(e){p(t,e);function t(){d(this,t);return f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}a(t,[{key:"render",value:function e(){var t=this.props,r=t.changeRating,a=t.hoverOverStar,n=t.unHoverOverStar,o=t.svgIconViewBox,s=t.svgIconPath;return i.default.createElement("div",{className:"star-container",style:this.starContainerStyle,onMouseEnter:a,onMouseLeave:n,onClick:r},i.default.createElement("svg",{viewBox:o,className:this.starClasses,style:this.starSvgStyle},i.default.createElement("path",{className:"star",style:this.pathStyle,d:s})))}},{key:"starContainerStyle",get:function e(){var t=this.props,r=t.changeRating,a=t.starSpacing,n=t.isFirstStar,i=t.isLastStar,o=t.ignoreInlineStyles;var s={position:"relative",display:"inline-block",verticalAlign:"middle",paddingLeft:n?undefined:a,paddingRight:i?undefined:a,cursor:r?"pointer":undefined};return o?{}:s}},{key:"starSvgStyle",get:function e(){var t=this.props,r=t.ignoreInlineStyles,a=t.isCurrentHoveredStar,n=t.starDimension;var i={width:n,height:n,transition:"transform .2s ease-in-out",transform:a?"scale(1.1)":undefined};return r?{}:i}},{key:"pathStyle",get:function e(){var t=this.props,r=t.isStarred,a=t.isPartiallyFullStar,n=t.isHovered,i=t.hoverMode,o=t.starEmptyColor,s=t.starRatedColor,l=t.starHoverColor,u=t.gradientPathName,c=t.fillId,d=t.ignoreInlineStyles;var f=void 0;if(i){if(n)f=l;else f=o}else{if(a)f="url('"+u+"#"+c+"')";else if(r)f=s;else f=o}var p={fill:f,transition:"fill .2s ease-in-out"};return d?{}:p}},{key:"starClasses",get:function e(){var t=this.props,r=t.isSelected,a=t.isPartiallyFullStar,n=t.isHovered,i=t.isCurrentHoveredStar,o=t.ignoreInlineStyles;var l=(0,s.default)({"widget-svg":true,"widget-selected":r,"multi-widget-selected":a,hovered:n,"current-hovered":i});return o?{}:l}}]);return t}(i.default.Component);v.propTypes={fillId:u.default.string.isRequired,changeRating:u.default.func,hoverOverStar:u.default.func,unHoverOverStar:u.default.func,isStarred:u.default.bool.isRequired,isPartiallyFullStar:u.default.bool.isRequired,isHovered:u.default.bool.isRequired,hoverMode:u.default.bool.isRequired,isCurrentHoveredStar:u.default.bool.isRequired,isFirstStar:u.default.bool.isRequired,isLastStar:u.default.bool.isRequired,starDimension:u.default.string.isRequired,starSpacing:u.default.string.isRequired,starHoverColor:u.default.string.isRequired,starRatedColor:u.default.string.isRequired,starEmptyColor:u.default.string.isRequired,gradientPathName:u.default.string.isRequired,ignoreInlineStyles:u.default.bool.isRequired,svgIconPath:u.default.string.isRequired,svgIconViewBox:u.default.string.isRequired};t.default=v},1477:function(e,t,r){var a,n;
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
(function(){"use strict";var r={}.hasOwnProperty;function i(){var e=[];for(var t=0;t<arguments.length;t++){var a=arguments[t];if(!a)continue;var n=typeof a;if(n==="string"||n==="number"){e.push(a)}else if(Array.isArray(a)){if(a.length){var o=i.apply(null,a);if(o){e.push(o)}}}else if(n==="object"){if(a.toString===Object.prototype.toString){for(var s in a){if(r.call(a,s)&&a[s]){e.push(s)}}}else{e.push(a.toString())}}}return e.join(" ")}if(true&&e.exports){i.default=i;e.exports=i}else if(true){!(a=[],n=function(){return i}.apply(t,a),n!==undefined&&(e.exports=n))}else{}})()}}]);