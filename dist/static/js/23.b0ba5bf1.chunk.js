(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{1339:function(e,t,a){"use strict";a.r(t);(function(e){var r=a(0);var n=a.n(r);var o=a(66);var i=a(1479);var l=a(42);var c=a(171);var s=a(1462);var u=a(32);var d=a(1545);var v=a(1546);var f=a(166);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();var m=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var p=function e(t){var a=t.match,r=t.getChartRevenueData,o=t.revenueChartData;return n.a.createElement("div",null,n.a.createElement(f["a"],{title:"Revenue",match:a}),n.a.createElement(v["a"],null))};function g(e){return{getChartRevenueData:function t(a,r,n){return e(Object(s["b"])(a,r,n))}}}var b=function e(t){return{loadingStatus:t.loading.loadingStatus,revenueChartData:t.revenueSplit.chartRevenueData}};var h=Object(u["b"])(b,g)(p);t["default"]=h;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(p,"Revenues","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\routes\\revenues\\revenues.js");e.register(g,"mapDispatchToProps","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\routes\\revenues\\revenues.js");e.register(b,"mapStateToProps","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\routes\\revenues\\revenues.js");e.register(h,"default","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\routes\\revenues\\revenues.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,a(6)(e))},1462:function(e,t,a){"use strict";(function(e){a.d(t,"f",function(){return f});a.d(t,"g",function(){return m});a.d(t,"c",function(){return p});a.d(t,"d",function(){return g});a.d(t,"a",function(){return b});a.d(t,"b",function(){return h});a.d(t,"e",function(){return y});var r=a(15);var n=a.n(r);var o=a(3);var i=a(4);var l=a(5);var c=a.n(l);var s=a(17);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function u(e,t,a,r,n,o,i){try{var l=e[o](i);var c=l.value}catch(e){a(e);return}if(l.done){t(c)}else{Promise.resolve(c).then(r,n)}}function d(e){return function(){var t=this,a=arguments;return new Promise(function(r,n){var o=e.apply(t,a);function i(e){u(o,r,n,i,l,"next",e)}function l(e){u(o,r,n,i,l,"throw",e)}i(undefined)})}}var v=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var f=function e(t){return function(){var e=d(regeneratorRuntime.mark(function e(a){var r;return regeneratorRuntime.wrap(function e(c){while(1){switch(c.prev=c.next){case 0:c.prev=0;t&&a(Object(i["c"])());!t&&a(Object(i["d"])());c.next=5;return n.a.get("".concat(s["a"].revenueSplit,"/v1.1/admin/settings"));case 5:r=c.sent;if(r.data.status==="error"){l["NotificationManager"].error(r.data.msg)}else{a({type:o["Qb"],payload:r.data.data})}a(Object(i["a"])());a(Object(i["b"])());c.next=16;break;case 11:c.prev=11;c.t0=c["catch"](0);a(Object(i["a"])());a(Object(i["b"])());l["NotificationManager"].error(c.t0.response.data.result);case 16:case"end":return c.stop()}}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()};var m=function e(t){return function(){var e=d(regeneratorRuntime.mark(function e(a){var r;return regeneratorRuntime.wrap(function e(o){while(1){switch(o.prev=o.next){case 0:o.prev=0;o.next=3;return a(Object(i["d"])());case 3:o.next=5;return n.a.post("".concat(s["a"].revenueSplit,"/v1.1/admin/settings"),t);case 5:r=o.sent;if(!(r.data.status==="error")){o.next=10;break}l["NotificationManager"].error(r.data.msg);o.next=14;break;case 10:o.next=12;return l["NotificationManager"].success("Updates Successfully");case 12:o.next=14;return a(f());case 14:a(Object(i["b"])());o.next=21;break;case 17:o.prev=17;o.t0=o["catch"](0);a(Object(i["b"])());l["NotificationManager"].error(o.t0.response.data.error);case 21:case"end":return o.stop()}}},e,null,[[0,17]])}));return function(t){return e.apply(this,arguments)}}()};var p=function e(t,a,r,c){var u=arguments.length>4&&arguments[4]!==undefined?arguments[4]:"";var v=arguments.length>5&&arguments[5]!==undefined?arguments[5]:1;return function(){var e=d(regeneratorRuntime.mark(function e(d){var f;return regeneratorRuntime.wrap(function e(m){while(1){switch(m.prev=m.next){case 0:m.prev=0;t&&d(Object(i["c"])());!t&&d(Object(i["d"])());m.next=5;return n.a.get("".concat(s["a"].revenueSplit,"/v1.1/admin/revenue-splits/?driver_id=").concat(a,"&start_date=").concat(r,"&end_date=").concat(c,"&date_type=").concat(u,"&page=").concat(v,"&item_per_page=20"));case 5:f=m.sent;if(f.data.status==="error"){l["NotificationManager"].error(f.data.msg)}else{d({type:o["C"],payload:f.data.data})}d(Object(i["a"])());d(Object(i["b"])());m.next=16;break;case 11:m.prev=11;m.t0=m["catch"](0);d(Object(i["a"])());d(Object(i["b"])());l["NotificationManager"].error(m.t0.response.data.result);case 16:case"end":return m.stop()}}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()};var g=function e(t,a,r,i){var c=arguments.length>4&&arguments[4]!==undefined?arguments[4]:"";return function(){var e=d(regeneratorRuntime.mark(function e(t){var u;return regeneratorRuntime.wrap(function e(d){while(1){switch(d.prev=d.next){case 0:d.prev=0;d.next=3;return n.a.get("".concat(s["a"].revenueSplit,"/v1.1/admin/revenue-splits/?driver_id=").concat(a,"&start_date=").concat(r,"&end_date=").concat(i,"&date_type=").concat(c,"&component=count"));case 3:u=d.sent;if(u.data.status==="error"){l["NotificationManager"].error(u.data.msg)}else{t({type:o["D"],payload:u.data.data.total?u.data.data.total:0})}d.next=9;break;case 7:d.prev=7;d.t0=d["catch"](0);case 9:case"end":return d.stop()}}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()};var b=function e(t,a,r){var o=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"daily";return function(){var e=d(regeneratorRuntime.mark(function e(o){var i;return regeneratorRuntime.wrap(function e(o){while(1){switch(o.prev=o.next){case 0:o.prev=0;o.next=3;return n.a.get("".concat(s["a"].revenueSplit,"/v1.1/admin/revenue-splits/?driver_id=").concat(t,"&start_date=").concat(a,"&end_date=").concat(r,"&component=export"));case 3:i=o.sent;if(!(i.data.status==="error")){o.next=8;break}l["NotificationManager"].error(i.data.msg);o.next=10;break;case 8:o.next=10;return l["NotificationManager"].success("Data Exported Successfully");case 10:o.next=15;break;case 12:o.prev=12;o.t0=o["catch"](0);l["NotificationManager"].error(o.t0.response.data.result);case 15:case"end":return o.stop()}}},e,null,[[0,12]])}));return function(t){return e.apply(this,arguments)}}()};var h=function e(t,a,r){var c=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"daily";return function(){var e=d(regeneratorRuntime.mark(function e(u){var d;return regeneratorRuntime.wrap(function e(v){while(1){switch(v.prev=v.next){case 0:v.prev=0;t&&u(Object(i["c"])());!t&&u(Object(i["d"])());v.next=5;return n.a.get("".concat(s["a"].revenueSplit,"/v1.1/admin/revenue-shares?start_date=").concat(a,"&end_date=").concat(r,"&date_type=").concat(c));case 5:d=v.sent;if(d.data.status==="error"){l["NotificationManager"].error(d.data.msg)}else{u({type:o["n"],payload:d.data.data})}u(Object(i["a"])());u(Object(i["b"])());v.next=16;break;case 11:v.prev=11;v.t0=v["catch"](0);u(Object(i["a"])());u(Object(i["b"])());l["NotificationManager"].error(v.t0.response.data.result);case 16:case"end":return v.stop()}}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()};var y=function e(t,a){var r=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"daily";return function(){var e=d(regeneratorRuntime.mark(function e(o){var i;return regeneratorRuntime.wrap(function e(o){while(1){switch(o.prev=o.next){case 0:o.prev=0;o.next=3;return n.a.get("".concat(s["a"].revenueSplit,"/v1.1/admin/revenue-shares?start_date=").concat(t,"&end_date=").concat(a,"&date_type=").concat(r,"&component=export"));case 3:i=o.sent;if(!(i.data.status==="error")){o.next=8;break}l["NotificationManager"].error(i.data.msg);o.next=10;break;case 8:o.next=10;return l["NotificationManager"].success("Data Exported Successfully");case 10:o.next=15;break;case 12:o.prev=12;o.t0=o["catch"](0);l["NotificationManager"].error(o.t0.response.data.result);case 15:case"end":return o.stop()}}},e,null,[[0,12]])}));return function(t){return e.apply(this,arguments)}}()};(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(f,"getRevenueSplitData","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\actions\\revenueSplitAction.js");e.register(m,"updateRevenueSplitData","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\actions\\revenueSplitAction.js");e.register(p,"getDriverRevenueSPlit","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\actions\\revenueSplitAction.js");e.register(g,"getDriverRevenueSPlitCount","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\actions\\revenueSplitAction.js");e.register(b,"exportDriverRevenueSplit","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\actions\\revenueSplitAction.js");e.register(h,"getChartRevenueData","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\actions\\revenueSplitAction.js");e.register(y,"getRevenueExport","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\actions\\revenueSplitAction.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,a(6)(e))},1479:function(e,t,a){"use strict";(function(e){a.d(t,"e",function(){return u});a.d(t,"c",function(){return d});a.d(t,"b",function(){return v});a.d(t,"f",function(){return f});a.d(t,"a",function(){return m});a.d(t,"d",function(){return p});var r=a(0);var n=a.n(r);var o=a(13);var i=a.n(o);var l=a(1487);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();var c=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var s=function e(){return n.a.createElement(l["a"],null)};var u=i()({loader:function e(){return a.e(71).then(a.bind(null,1530))},loading:s});var d=i()({loader:function e(){return a.e(43).then(a.bind(null,1531))},loading:s});var v=i()({loader:function e(){return a.e(73).then(a.bind(null,1532))},loading:s});var f=i()({loader:function e(){return a.e(89).then(a.bind(null,1533))},loading:s});var m=i()({loader:function e(){return a.e(72).then(a.bind(null,1534))},loading:s});var p=i()({loader:function e(){return a.e(87).then(a.bind(null,1535))},loading:s});var g=i()({loader:function e(){return a.e(88).then(a.bind(null,1480))},loading:s});(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(s,"MyLoadingComponent","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\components\\Widgets\\index.js");e.register(u,"TripCard","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\components\\Widgets\\index.js");e.register(d,"RefundsWidget","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\components\\Widgets\\index.js");e.register(v,"PaymentWidget","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\components\\Widgets\\index.js");e.register(f,"VisitorAreaChartWidget","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\components\\Widgets\\index.js");e.register(m,"OverallTrafficStatusWidget","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\components\\Widgets\\index.js");e.register(p,"SchedulesWidget","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\components\\Widgets\\index.js");e.register(g,"VehicleChartWidget","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\components\\Widgets\\index.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,a(6)(e))},1487:function(e,t,a){"use strict";(function(e){var r=a(0);var n=a.n(r);var o=a(187);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();var i=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var l=function e(){return n.a.createElement("div",{className:"rounded preload-widget mb-30"},n.a.createElement("div",{className:"widget-headings border-bottom"},n.a.createElement(o["a"],{speed:1,width:520,height:61,backgroundColor:"rgba(0,0,0,0.05)",foregroundColor:"rgba(0,0,0,0.04)"},n.a.createElement("rect",{x:"15",y:"18",rx:"0",ry:"0",width:"160",height:"35"}),n.a.createElement("rect",{x:"380",y:"18",rx:"0",ry:"0",width:"35",height:"35"}),n.a.createElement("circle",{cx:"441",cy:"35",r:"20"}),n.a.createElement("rect",{x:"470",y:"18",rx:"0",ry:"0",width:"35",height:"35"}))),n.a.createElement("div",null,n.a.createElement(o["a"],{speed:1,width:520,height:310,backgroundColor:"rgba(0,0,0,0.05)",foregroundColor:"rgba(0,0,0,0.04)"},n.a.createElement("rect",{x:"15",y:"30",rx:"0",ry:"0",width:"490",height:"16"}),n.a.createElement("rect",{x:"15",y:"60",rx:"0",ry:"0",width:"490",height:"16"}),n.a.createElement("rect",{x:"15",y:"90",rx:"0",ry:"0",width:"490",height:"16"}),n.a.createElement("rect",{x:"15",y:"120",rx:"0",ry:"0",width:"490",height:"16"}),n.a.createElement("rect",{x:"15",y:"150",rx:"0",ry:"0",width:"490",height:"16"}),n.a.createElement("rect",{x:"15",y:"180",rx:"0",ry:"0",width:"490",height:"16"}),n.a.createElement("rect",{x:"15",y:"210",rx:"0",ry:"0",width:"490",height:"16"}),n.a.createElement("rect",{x:"15",y:"240",rx:"0",ry:"0",width:"490",height:"16"}),n.a.createElement("rect",{x:"15",y:"270",rx:"0",ry:"0",width:"490",height:"16"}))),n.a.createElement("div",{className:"widget-headings border-top"},n.a.createElement(o["a"],{speed:1,width:520,height:61,backgroundColor:"rgba(0,0,0,0.05)",foregroundColor:"rgba(0,0,0,0.04)"},n.a.createElement("rect",{x:"15",y:"18",rx:"0",ry:"0",width:"160",height:"35"}),n.a.createElement("rect",{x:"320",y:"18",rx:"0",ry:"0",width:"189",height:"35"}))))};var c=l;t["a"]=c;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(l,"PreloadWidget","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\components\\PreloadLayout\\PreloadWidget.js");e.register(c,"default","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\components\\PreloadLayout\\PreloadWidget.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,a(6)(e))},1545:function(e,t,a){"use strict";(function(e){var t=a(0);var r=a.n(t);var n=a(66);var o=a(1479);var i=a(42);var l=a(171);var c=a(1462);var s=a(32);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();var u=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var d=function e(a){var c=a.getChartRevenueData,s=a.revenueChartData;Object(t["useEffect"])(function(){c(true)},[]);console.log(s);var u={chartLabels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","oct","Nov","Dec"],chartDatasets:[{label:"Series A",backgroundColor:l["a"].color.primary,borderColor:l["a"].color.primary,borderWidth:1,hoverBackgroundColor:l["a"].color.primary,hoverBorderColor:l["a"].color.primary,data:[65,59,80,81,56,55,40,34,78,26,98,100]}],onlineSources:"3500",today:"17,020",lastMonth:"20.30%"};return r.a.createElement("div",null,r.a.createElement(n["a"],{customClasses:"trafic-bar-chart",colClasses:"col-sm-12 col-md-12 col-lg-5 d-sm-full",heading:r.a.createElement(i["a"],{id:"widgets.revenue"}),collapsible:true,reloadable:true,closeable:true,fullBlock:true},r.a.createElement(o["a"],{chartData:u})))};u(d,"useEffect{}");function v(e){return{getChartRevenueData:function t(a,r,n){return e(Object(c["b"])(a,r,n))}}}var f=function e(t){return{loadingStatus:t.loading.loadingStatus,revenueChartData:t.revenueSplit.chartRevenueData}};var m=Object(s["b"])(f,v)(d);var p=m;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(d,"RevenuesChart","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\routes\\revenues\\revenueChart.js");e.register(v,"mapDispatchToProps","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\routes\\revenues\\revenueChart.js");e.register(f,"mapStateToProps","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\routes\\revenues\\revenueChart.js");e.register(m,"default","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\routes\\revenues\\revenueChart.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,a(6)(e))},1546:function(e,t,a){"use strict";(function(e){var r=a(0);var n=a.n(r);var o=a(32);var i=a(223);var l=a(225);var c=a(18);var s=a(224);var u=a(117);var d=a(116);var v=a(66);var f=a(167);var m=a.n(f);var p=a(105);var g=a.n(p);var b=a(40);var h=a(104);var y=a(119);var C=a(1462);var j=a(8);var E=a.n(j);var x=a(67);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function D(e,t){return H(e)||k(e,t)||L(e,t)||w()}function w(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function L(e,t){if(!e)return;if(typeof e==="string")return S(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor)a=e.constructor.name;if(a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return S(e,t)}function S(e,t){if(t==null||t>e.length)t=e.length;for(var a=0,r=new Array(t);a<t;a++){r[a]=e[a]}return r}function k(e,t){var a=e&&(typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"]);if(a==null)return;var r=[];var n=true;var o=false;var i,l;try{for(a=a.call(e);!(n=(i=a.next()).done);n=true){r.push(i.value);if(t&&r.length===t)break}}catch(e){o=true;l=e}finally{try{if(!n&&a["return"]!=null)a["return"]()}finally{if(o)throw l}}return r}function H(e){if(Array.isArray(e))return e}var G=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var M=function e(t){var a,o,f,m,p,g,y,C,j;var w=t.getChartRevenueData,L=t.revenueChartData,S=t.loading,k=t.getRevenueExport;var H=Object(r["useRef"])();var G=Object(r["useState"])("daily"),M=D(G,2),R=M[0],O=M[1];var N=Object(r["useState"])(Object(b["i"])()),_=D(N,2),V=_[0],I=_[1];var U=Object(r["useState"])(Object(b["x"])()),T=D(U,2),A=T[0],P=T[1];var W=function e(t){if(R==="daily"){return E()(t).format("MMMM Do YYYY")}else if(R==="monthly"){return E()(t).format("MMMM YYYY")}else{return E()(t).format("YYYY")}};Object(r["useEffect"])(function(){w(true,V,A,R)},[]);var Y=Object(r["useRef"])(null);var F=function e(t){H.current=t.target.value};var J=[{value:"",label:"- - Filter by Date Type- -"},{value:"daily",label:"Daily"},{value:"monthly",label:"Monthly"},{value:"yearly",label:"Yearly"}];var B=function e(){O(H.current);w(true,V,A,R)};var z=function e(t,a){var r=a.split("."),n,o;for(n=0,o=r.length;n<o;n++){if(!t.hasOwnProperty(r[n]))return;t=t[r[n]]}return t};var Q=function e(){Y.current.open()};var $=function e(){Y.current.close();k(V,A,R)};var q=function e(t){var a=0;L.map(function(e){return a+=z(e,t)||0});return a};return n.a.createElement("div",null,n.a.createElement(v["a"],{heading:"Revenues Table",fullBlock:true,style:{minHeight:"70vh"}},n.a.createElement("li",{className:"list-inline-item search-icon d-inline-block ml-2 mb-2"},n.a.createElement("select",{name:"fiter-dropdown",onChange:F,className:"p-1 px-4"},J.map(function(e,t){return n.a.createElement("option",{value:e.value,key:t},e.label)}))),n.a.createElement("li",{className:"list-inline-item search-icon d-inline-block ml-2 mb-2"},n.a.createElement("small",{className:"fw-bold mr-2"},"From"),n.a.createElement("input",{type:"date",id:"start",name:"trip-start",defaultValue:V,min:"2018-01-01",max:Object(b["x"])(),onChange:function e(t){return I(t.target.value)}})),n.a.createElement("li",{className:"list-inline-item search-icon d-inline-block ml-2 mb-2"},n.a.createElement("small",{className:"fw-bold mr-2"},"To"),n.a.createElement("input",{type:"date",id:"start",name:"trip-start",defaultValue:A,min:"2018-01-01",max:Object(b["x"])(),onChange:function e(t){return P(t.target.value)}})),n.a.createElement(d["a"],{onClick:function e(){return B()},style:{height:"30px"},className:"align-items-center text-light justify-content-center",color:"success"},"Apply filter"),n.a.createElement("div",{className:"float-right"},!S&&L.length>0&&n.a.createElement(d["a"],{onClick:function e(){return Q()},style:{height:"30px"},className:"align-items-center justify-content-center mr-2",color:"primary"},n.a.createElement("i",{className:"zmdi zmdi-download mr-2"})," Export to Excel")),!S&&L.length>0&&n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"table-responsive",style:{minHeight:"50vh"}},n.a.createElement(i["a"],null,n.a.createElement(s["a"],null,n.a.createElement(u["a"],{hover:true},n.a.createElement(c["a"],null,"Date"),n.a.createElement(c["a"],null,"Asset Co."),n.a.createElement(c["a"],null,"Comms"),n.a.createElement(c["a"],null,"Daily Tax"),n.a.createElement(c["a"],null,"Maintenance"),n.a.createElement(c["a"],null,"Refleeting"),n.a.createElement(c["a"],null,"Tech Co"),n.a.createElement(c["a"],null,"Asset Repayment"),n.a.createElement(c["a"],null,"Dashcam"),n.a.createElement(c["a"],null,"Mobile Phone"))),n.a.createElement(l["a"],null,n.a.createElement(r["Fragment"],null,L.length>0&&L.map(function(e,t){var a,r,o,i,l,s,d,v,f,m,p,g;return n.a.createElement(u["a"],{hover:true,key:t},n.a.createElement(c["a"],null,"".concat(W(e===null||e===void 0?void 0:e.rev_date))),n.a.createElement(c["a"],null,"₦".concat(e===null||e===void 0?void 0:(a=e.asset_co)===null||a===void 0?void 0:a.toLocaleString())),n.a.createElement(c["a"],null,"₦".concat(e===null||e===void 0?void 0:(r=e.comms)===null||r===void 0?void 0:r.toLocaleString())),n.a.createElement(c["a"],null,"₦".concat(e===null||e===void 0?void 0:(o=e.daily_tax)===null||o===void 0?void 0:o.toLocaleString())),n.a.createElement(c["a"],null,"₦".concat(e===null||e===void 0?void 0:(i=e.maintenance)===null||i===void 0?void 0:i.toLocaleString())),n.a.createElement(c["a"],null,"₦".concat(e===null||e===void 0?void 0:(l=e.refleeting)===null||l===void 0?void 0:l.toLocaleString())),n.a.createElement(c["a"],null,"₦".concat(e===null||e===void 0?void 0:(s=e.tech_co)===null||s===void 0?void 0:s.toLocaleString())),n.a.createElement(c["a"],null,"₦".concat((e===null||e===void 0?void 0:(d=e.debt_service_split)===null||d===void 0?void 0:(v=d.asset_repayment)===null||v===void 0?void 0:v.toLocaleString())||0)),n.a.createElement(c["a"],null,"₦".concat((e===null||e===void 0?void 0:(f=e.debt_service_split)===null||f===void 0?void 0:(m=f.dashcam)===null||m===void 0?void 0:m.toLocaleString())||0)),n.a.createElement(c["a"],null,"₦".concat((e===null||e===void 0?void 0:(p=e.debt_service_split)===null||p===void 0?void 0:(g=p.mobile_phone)===null||g===void 0?void 0:g.toLocaleString())||0)))}),L.length>0&&n.a.createElement(u["a"],null,n.a.createElement(c["a"],{className:"fw-bold"},"Total"),n.a.createElement(c["a"],{className:"fw-bold"},"₦".concat((a=q("asset_co"))===null||a===void 0?void 0:a.toLocaleString())),n.a.createElement(c["a"],{className:"fw-bold"},"₦".concat((o=q("comms"))===null||o===void 0?void 0:o.toLocaleString())),n.a.createElement(c["a"],{className:"fw-bold"},"₦".concat((f=q("daily_tax"))===null||f===void 0?void 0:f.toLocaleString())),n.a.createElement(c["a"],{className:"fw-bold"},"₦".concat((m=q("maintenance"))===null||m===void 0?void 0:m.toLocaleString())),n.a.createElement(c["a"],{className:"fw-bold"},"₦".concat((p=q("refleeting"))===null||p===void 0?void 0:p.toLocaleString())),n.a.createElement(c["a"],{className:"fw-bold"},"₦".concat((g=q("tech_co"))===null||g===void 0?void 0:g.toLocaleString())),n.a.createElement(c["a"],{className:"fw-bold"},"₦".concat((y=q("debt_service_split.asset_repayment"))===null||y===void 0?void 0:y.toLocaleString())),n.a.createElement(c["a"],{className:"fw-bold"},"₦".concat((C=q("debt_service_split.dashcam"))===null||C===void 0?void 0:C.toLocaleString())),n.a.createElement(c["a"],{className:"fw-bold"},"₦".concat((j=q("debt_service_split.mobile_phone"))===null||j===void 0?void 0:j.toLocaleString()))))))),n.a.createElement("div",{className:"d-flex justify-content-end align-items-center mb-0 mt-3 mr-2"})),L.length===0&&!S&&n.a.createElement(h["a"],null)),n.a.createElement(x["a"],{ref:Y,title:"Are you sure you want to Export File?",message:"This will send the excel file to your email",onConfirm:$}))};G(M,'useRef{typeHolder}\nuseState{[dateType, setDateType]("daily")}\nuseState{[startDate, setStartDate](getFirstDayOfMonth())}\nuseState{[endDate, setEndDate](getTodayDate())}\nuseEffect{}\nuseRef{exportRef}');function R(e){return{getChartRevenueData:function t(a,r,n,o){return e(Object(C["b"])(a,r,n,o))},getRevenueExport:function t(a,r,n){return e(Object(C["e"])(a,r,n))}}}var O=function e(t){return{loading:t.loading.loading,loadingStatus:t.loading.loadingStatus,revenueChartData:t.revenueSplit.chartRevenueData}};var N=Object(o["b"])(O,R)(M);t["a"]=N;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(M,"RevenueTable","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\routes\\revenues\\revenueTable.js");e.register(R,"mapDispatchToProps","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\routes\\revenues\\revenueTable.js");e.register(O,"mapStateToProps","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\routes\\revenues\\revenueTable.js");e.register(N,"default","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\routes\\revenues\\revenueTable.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,a(6)(e))}}]);