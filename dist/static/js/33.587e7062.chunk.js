(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[33],{1338:function(e,t,a){"use strict";a.r(t);(function(e){var n=a(0);var r=a.n(n);var i=a(32);var o=a(166);var l=a(1462);var c=a(1544);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();var u=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var s=function e(t){var a=t.match,n=t.getChartRevenueData,i=t.revenueChartData;return r.a.createElement("div",null,r.a.createElement(o["a"],{title:"Finance",match:a}),r.a.createElement(c["a"],null))};function d(e){return{getChartRevenueData:function t(a,n,r){return e(Object(l["b"])(a,n,r))}}}var f=function e(t){return{loadingStatus:t.loading.loadingStatus,revenueChartData:t.revenueSplit.chartRevenueData}};var v=Object(i["b"])(f,d)(s);t["default"]=v;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(s,"revenues","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/reconciliation/finance.js");e.register(d,"mapDispatchToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/reconciliation/finance.js");e.register(f,"mapStateToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/reconciliation/finance.js");e.register(v,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/reconciliation/finance.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,a(6)(e))},1462:function(e,t,a){"use strict";(function(e){a.d(t,"f",function(){return v});a.d(t,"g",function(){return p});a.d(t,"c",function(){return m});a.d(t,"d",function(){return g});a.d(t,"a",function(){return b});a.d(t,"b",function(){return h});a.d(t,"e",function(){return y});var n=a(15);var r=a.n(n);var i=a(3);var o=a(4);var l=a(5);var c=a.n(l);var u=a(17);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function s(e,t,a,n,r,i,o){try{var l=e[i](o);var c=l.value}catch(e){a(e);return}if(l.done){t(c)}else{Promise.resolve(c).then(n,r)}}function d(e){return function(){var t=this,a=arguments;return new Promise(function(n,r){var i=e.apply(t,a);function o(e){s(i,n,r,o,l,"next",e)}function l(e){s(i,n,r,o,l,"throw",e)}o(undefined)})}}var f=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var v=function e(t){return function(){var e=d(regeneratorRuntime.mark(function e(a){var n;return regeneratorRuntime.wrap(function e(c){while(1){switch(c.prev=c.next){case 0:c.prev=0;t&&a(Object(o["c"])());!t&&a(Object(o["d"])());c.next=5;return r.a.get("".concat(u["a"].revenueSplit,"/v1.1/admin/settings"));case 5:n=c.sent;if(n.data.status==="error"){l["NotificationManager"].error(n.data.msg)}else{a({type:i["Qb"],payload:n.data.data})}a(Object(o["a"])());a(Object(o["b"])());c.next=16;break;case 11:c.prev=11;c.t0=c["catch"](0);a(Object(o["a"])());a(Object(o["b"])());l["NotificationManager"].error(c.t0.response.data.result);case 16:case"end":return c.stop()}}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()};var p=function e(t){return function(){var e=d(regeneratorRuntime.mark(function e(a){var n;return regeneratorRuntime.wrap(function e(i){while(1){switch(i.prev=i.next){case 0:i.prev=0;i.next=3;return a(Object(o["d"])());case 3:i.next=5;return r.a.post("".concat(u["a"].revenueSplit,"/v1.1/admin/settings"),t);case 5:n=i.sent;if(!(n.data.status==="error")){i.next=10;break}l["NotificationManager"].error(n.data.msg);i.next=14;break;case 10:i.next=12;return l["NotificationManager"].success("Updates Successfully");case 12:i.next=14;return a(v());case 14:a(Object(o["b"])());i.next=21;break;case 17:i.prev=17;i.t0=i["catch"](0);a(Object(o["b"])());l["NotificationManager"].error(i.t0.response.data.error);case 21:case"end":return i.stop()}}},e,null,[[0,17]])}));return function(t){return e.apply(this,arguments)}}()};var m=function e(t,a,n,c){var s=arguments.length>4&&arguments[4]!==undefined?arguments[4]:"";var f=arguments.length>5&&arguments[5]!==undefined?arguments[5]:1;return function(){var e=d(regeneratorRuntime.mark(function e(d){var v;return regeneratorRuntime.wrap(function e(p){while(1){switch(p.prev=p.next){case 0:p.prev=0;t&&d(Object(o["c"])());!t&&d(Object(o["d"])());p.next=5;return r.a.get("".concat(u["a"].revenueSplit,"/v1.1/admin/revenue-splits/?driver_id=").concat(a,"&start_date=").concat(n,"&end_date=").concat(c,"&date_type=").concat(s,"&page=").concat(f,"&item_per_page=20"));case 5:v=p.sent;if(v.data.status==="error"){l["NotificationManager"].error(v.data.msg)}else{d({type:i["C"],payload:v.data.data})}d(Object(o["a"])());d(Object(o["b"])());p.next=16;break;case 11:p.prev=11;p.t0=p["catch"](0);d(Object(o["a"])());d(Object(o["b"])());l["NotificationManager"].error(p.t0.response.data.result);case 16:case"end":return p.stop()}}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()};var g=function e(t,a,n,o){var c=arguments.length>4&&arguments[4]!==undefined?arguments[4]:"";return function(){var e=d(regeneratorRuntime.mark(function e(t){var s;return regeneratorRuntime.wrap(function e(d){while(1){switch(d.prev=d.next){case 0:d.prev=0;d.next=3;return r.a.get("".concat(u["a"].revenueSplit,"/v1.1/admin/revenue-splits/?driver_id=").concat(a,"&start_date=").concat(n,"&end_date=").concat(o,"&date_type=").concat(c,"&component=count"));case 3:s=d.sent;if(s.data.status==="error"){l["NotificationManager"].error(s.data.msg)}else{t({type:i["D"],payload:s.data.data.total?s.data.data.total:0})}d.next=9;break;case 7:d.prev=7;d.t0=d["catch"](0);case 9:case"end":return d.stop()}}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()};var b=function e(t,a,n){var i=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"daily";return function(){var e=d(regeneratorRuntime.mark(function e(i){var o;return regeneratorRuntime.wrap(function e(i){while(1){switch(i.prev=i.next){case 0:i.prev=0;i.next=3;return r.a.get("".concat(u["a"].revenueSplit,"/v1.1/admin/revenue-splits/?driver_id=").concat(t,"&start_date=").concat(a,"&end_date=").concat(n,"&component=export"));case 3:o=i.sent;if(!(o.data.status==="error")){i.next=8;break}l["NotificationManager"].error(o.data.msg);i.next=10;break;case 8:i.next=10;return l["NotificationManager"].success("Data Exported Successfully");case 10:i.next=15;break;case 12:i.prev=12;i.t0=i["catch"](0);l["NotificationManager"].error(i.t0.response.data.result);case 15:case"end":return i.stop()}}},e,null,[[0,12]])}));return function(t){return e.apply(this,arguments)}}()};var h=function e(t,a,n){var c=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"daily";return function(){var e=d(regeneratorRuntime.mark(function e(s){var d;return regeneratorRuntime.wrap(function e(f){while(1){switch(f.prev=f.next){case 0:f.prev=0;t&&s(Object(o["c"])());!t&&s(Object(o["d"])());f.next=5;return r.a.get("".concat(u["a"].revenueSplit,"/v1.1/admin/revenue-shares?start_date=").concat(a,"&end_date=").concat(n,"&date_type=").concat(c));case 5:d=f.sent;if(d.data.status==="error"){l["NotificationManager"].error(d.data.msg)}else{s({type:i["n"],payload:d.data.data})}s(Object(o["a"])());s(Object(o["b"])());f.next=16;break;case 11:f.prev=11;f.t0=f["catch"](0);s(Object(o["a"])());s(Object(o["b"])());l["NotificationManager"].error(f.t0.response.data.result);case 16:case"end":return f.stop()}}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()};var y=function e(t,a){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"daily";return function(){var e=d(regeneratorRuntime.mark(function e(i){var o;return regeneratorRuntime.wrap(function e(i){while(1){switch(i.prev=i.next){case 0:i.prev=0;i.next=3;return r.a.get("".concat(u["a"].revenueSplit,"/v1.1/admin/revenue-shares?start_date=").concat(t,"&end_date=").concat(a,"&date_type=").concat(n,"&component=export"));case 3:o=i.sent;if(!(o.data.status==="error")){i.next=8;break}l["NotificationManager"].error(o.data.msg);i.next=10;break;case 8:i.next=10;return l["NotificationManager"].success("Data Exported Successfully");case 10:i.next=15;break;case 12:i.prev=12;i.t0=i["catch"](0);l["NotificationManager"].error(i.t0.response.data.result);case 15:case"end":return i.stop()}}},e,null,[[0,12]])}));return function(t){return e.apply(this,arguments)}}()};(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(v,"getRevenueSplitData","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/revenueSplitAction.js");e.register(p,"updateRevenueSplitData","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/revenueSplitAction.js");e.register(m,"getDriverRevenueSPlit","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/revenueSplitAction.js");e.register(g,"getDriverRevenueSPlitCount","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/revenueSplitAction.js");e.register(b,"exportDriverRevenueSplit","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/revenueSplitAction.js");e.register(h,"getChartRevenueData","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/revenueSplitAction.js");e.register(y,"getRevenueExport","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/revenueSplitAction.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,a(6)(e))},1544:function(e,t,a){"use strict";(function(e){var n=a(0);var r=a.n(n);var i=a(32);var o=a(223);var l=a(225);var c=a(18);var u=a(224);var s=a(116);var d=a(66);var f=a(40);var v=a(1445);var p=a(115);var m=a(67);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function g(e,t){return E(e)||x(e,t)||h(e,t)||b()}function b(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function h(e,t){if(!e)return;if(typeof e==="string")return y(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor)a=e.constructor.name;if(a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return y(e,t)}function y(e,t){if(t==null||t>e.length)t=e.length;for(var a=0,n=new Array(t);a<t;a++){n[a]=e[a]}return n}function x(e,t){var a=e&&(typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"]);if(a==null)return;var n=[];var r=true;var i=false;var o,l;try{for(a=a.call(e);!(r=(o=a.next()).done);r=true){n.push(o.value);if(t&&n.length===t)break}}catch(e){i=true;l=e}finally{try{if(!r&&a["return"]!=null)a["return"]()}finally{if(i)throw l}}return n}function E(e){if(Array.isArray(e))return e}var w=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var S=function e(t){var a=t.getFinanceTrip,i=t.getFinanceService,v=t.getFinanceWallet,b=t.financeTrip,h=t.financeWallet,y=t.financeService,x=t.loading,E=t.sendFinanceTripExport;var w=Object(n["useState"])("daily"),S=g(w,2),j=S[0],k=S[1];var A=Object(n["useState"])(""),P=g(A,2),M=P[0],N=P[1];var O=Object(n["useState"])(""),L=g(O,2),D=L[0],H=L[1];var R=Object(n["useRef"])(null);Object(n["useEffect"])(function(){a("trip",j);i("service",j);v("wallet",j)},[]);var G=function e(){R.current.open()};var T=function e(){R.current.close();E("trip",j,M,D)};var _=function e(t){k(t.target.value)};var F=function e(){a("trip",j,M,D);i("service",j,M,D);v("wallet",j,M,D)};var X=[{value:"daily",label:"Daily"},{value:"monthly",label:"Monthly"},{value:"yearly",label:"Yearly"}];console.log(b);return r.a.createElement("div",null,r.a.createElement(d["a"],{heading:"Finance Table",fullBlock:true,style:{minHeight:"70vh"}},r.a.createElement("li",{className:"list-inline-item search-icon d-inline-block ml-2 mb-2"},r.a.createElement("select",{name:"fiter-dropdown",onChange:_,className:"p-1 px-4"},X.map(function(e,t){return r.a.createElement("option",{value:e.value,key:t},e.label)}))),r.a.createElement("li",{className:"list-inline-item search-icon d-inline-block ml-2 mb-2"},r.a.createElement("small",{className:"fw-bold mr-2"},"From"),r.a.createElement("input",{type:"date",id:"start",name:"trip-start",defaultValue:M,min:"2018-01-01",max:Object(f["x"])(),onChange:function e(t){N(t.target.value)}})),r.a.createElement("li",{className:"list-inline-item search-icon d-inline-block ml-2 mb-2"},r.a.createElement("small",{className:"fw-bold mr-2"},"To"),r.a.createElement("input",{type:"date",id:"start",name:"trip-start",defaultValue:D,min:"2018-01-01",max:Object(f["x"])(),onChange:function e(t){H(t.target.value)}})),r.a.createElement(p["a"],{onClick:function e(){return F()},style:{height:"30px"},className:"align-items-center justify-content-center",color:"success"},"Apply filter"),r.a.createElement("div",{className:"row mt-3 p-2"},r.a.createElement("div",{className:"col-sm-4 align-items-start d-flex flex-column"},r.a.createElement("div",{className:"font-weight-bold mb-2"},"Trip Payment"),r.a.createElement("div",{className:"table-responsive",style:{minHeight:"50vh",border:"1px solid lightgrey"}},r.a.createElement(o["a"],null,r.a.createElement(u["a"],null,r.a.createElement(s["a"],{hover:true},r.a.createElement(c["a"],null,"Date"),r.a.createElement(c["a"],null,"Successful"),r.a.createElement(c["a"],null,"Failed"))),b.length>0&&b.map(function(e,t){var a,i;var o=e.data[e.data.findIndex(function(e){return e.status===1})];var u=e.data[e.data.findIndex(function(e){return e.status===2})];return r.a.createElement(l["a"],{key:t},r.a.createElement(n["Fragment"],null,r.a.createElement(s["a"],{hover:true},r.a.createElement(c["a"],null,e.group_date),r.a.createElement(c["a"],null,o&&r.a.createElement("div",null,"₦",o===null||o===void 0?void 0:(a=o.balance)===null||a===void 0?void 0:a.toLocaleString()," (",o===null||o===void 0?void 0:o.total,")")),r.a.createElement(c["a"],null,u&&r.a.createElement("div",null,"₦",u===null||u===void 0?void 0:(i=u.balance)===null||i===void 0?void 0:i.toLocaleString()," (",u===null||u===void 0?void 0:u.total,")")))))})),b.length===0&&!x&&r.a.createElement("div",{className:"text-center mt-3"},"No Data"))),r.a.createElement("div",{className:"col-sm-4 align-items-start d-flex flex-column"},r.a.createElement("div",{className:"font-weight-bold  mb-2"},"Service Payment"),r.a.createElement("div",{className:"table-responsive",style:{minHeight:"50vh",border:"1px solid lightgrey"}},r.a.createElement(o["a"],null,r.a.createElement(u["a"],null,r.a.createElement(s["a"],{hover:true},r.a.createElement(c["a"],null,"Date"),r.a.createElement(c["a"],null,"Successful"),r.a.createElement(c["a"],null,"Failed"))),y.length>0&&y.map(function(e,t){var a,i;var o=e.data[e.data.findIndex(function(e){return e.status===1})];var u=e.data[e.data.findIndex(function(e){return e.status===2})];return r.a.createElement(l["a"],{key:t},r.a.createElement(n["Fragment"],null,r.a.createElement(s["a"],{hover:true},r.a.createElement(c["a"],null,e===null||e===void 0?void 0:e.group_date),r.a.createElement(c["a"],null,o&&r.a.createElement("div",null,"₦",o===null||o===void 0?void 0:(a=o.balance)===null||a===void 0?void 0:a.toLocaleString()," (",o===null||o===void 0?void 0:o.total,")")),r.a.createElement(c["a"],null,u&&r.a.createElement("div",null,"₦",u===null||u===void 0?void 0:(i=u.balance)===null||i===void 0?void 0:i.toLocaleString()," (",u===null||u===void 0?void 0:u.total,")")))))})),y.length===0&&!x&&r.a.createElement("div",{className:"text-center mt-3"},"No Data"))),r.a.createElement("div",{className:"col-sm-4 align-items-start d-flex flex-column"},r.a.createElement("div",{className:"font-weight-bold  mb-2"},"Wallet Payment"),r.a.createElement("div",{className:"table-responsive",style:{minHeight:"50vh",border:"1px solid lightgrey"}},r.a.createElement(o["a"],null,r.a.createElement(u["a"],null,r.a.createElement(s["a"],{hover:true},r.a.createElement(c["a"],null,"Date"),r.a.createElement(c["a"],null,"Successful"),r.a.createElement(c["a"],null,"Failed"))),h.length>0&&h.map(function(e,t){var a,i;var o=e.data[e.data.findIndex(function(e){return e.status===1})];var u=e.data[e.data.findIndex(function(e){return e.status===2})];return r.a.createElement(l["a"],{key:t},r.a.createElement(n["Fragment"],null,r.a.createElement(s["a"],{hover:true},r.a.createElement(c["a"],null,e===null||e===void 0?void 0:e.group_date),r.a.createElement(c["a"],null,o&&r.a.createElement("div",null,"₦",o===null||o===void 0?void 0:(a=o.balance)===null||a===void 0?void 0:a.toLocaleString()," (",o===null||o===void 0?void 0:o.total,")")),r.a.createElement(c["a"],null,u&&r.a.createElement("div",null,"₦",u===null||u===void 0?void 0:(i=u.balance)===null||i===void 0?void 0:i.toLocaleString()," (",u===null||u===void 0?void 0:u.total,")")))))})),h.length===0&&!x&&r.a.createElement("div",{className:"text-center mt-3"},"No Data"))))),r.a.createElement(m["a"],{ref:R,title:"Are you sure you want to Export File?",message:"This will send the excel file to your email",onConfirm:T}))};w(S,'useState{[dateType, setDateType]("daily")}\nuseState{[startDate, setStartDate]("")}\nuseState{[endDate, setEndDate]("")}\nuseRef{inputEl}\nuseEffect{}');function j(e){return{getFinanceTrip:function t(a,n,r,i){return e(Object(v["m"])(a,n,r,i))},getFinanceService:function t(a,n,r,i){return e(Object(v["l"])(a,n,r,i))},sendFinanceTripExport:function t(a,n,r,i){return e(Object(v["E"])(a,n,r,i))},getFinanceWallet:function t(a,n,r,i){return e(Object(v["n"])(a,n,r,i))}}}var k=function e(t){return{loading:t.loading.loading,loadingStatus:t.loading.loadingStatus,financeWallet:t.payments.financeWallet,financeService:t.payments.financeService,financeTrip:t.payments.financeTrip}};var A=Object(i["b"])(k,j)(S);t["a"]=A;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(S,"FinanceTable","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/reconciliation/component/financeTable.js");e.register(j,"mapDispatchToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/reconciliation/component/financeTable.js");e.register(k,"mapStateToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/reconciliation/component/financeTable.js");e.register(A,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/reconciliation/component/financeTable.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,a(6)(e))}}]);