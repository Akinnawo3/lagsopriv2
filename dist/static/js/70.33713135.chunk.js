(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[70],{1388:function(e,t,a){"use strict";a.r(t);(function(e){var n=a(0);var r=a.n(n);var l=a(34);var o=a(369);var i=a(166);var c=a(1451);var s=a(40);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();var d=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var u=function e(t){var a,l,c;var s=t.getSingleWalletTransaction,d=t.transaction,u=t.match,f=t.loading,p=t.trip;Object(n["useEffect"])(function(){s(u.params.id,true)},[u.params.id]);console.log(d);return r.a.createElement("div",{className:"mb-5",style:{minHeight:"90vh"}},r.a.createElement(o["a"],null,r.a.createElement("title",null,"Trip Details"),r.a.createElement("meta",{name:"description",content:"Wallet Transaction Details"})),r.a.createElement(i["a"],{title:"Transaction details",match:u}),!f&&r.a.createElement("div",{className:"row",style:{fontSize:"0.8rem"}},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("div",{className:"tab-content px-4"},r.a.createElement("div",{className:"tab-pane active",id:"home"},r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"Transaction ID")),d===null||d===void 0?void 0:d.transaction_id),r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"Date")),(a=new Date(d===null||d===void 0?void 0:d.createdAt))===null||a===void 0?void 0:a.toDateString()," ",(l=new Date(d===null||d===void 0?void 0:d.createdAt))===null||l===void 0?void 0:l.toLocaleTimeString()),r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"Amount")),"₦",d===null||d===void 0?void 0:(c=d.amount)===null||c===void 0?void 0:c.toLocaleString()),r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"Description")),d===null||d===void 0?void 0:d.description),((d===null||d===void 0?void 0:d.transaction_type)==="fund"||(d===null||d===void 0?void 0:d.transaction_type)==="share")&&r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"Recipient")),d===null||d===void 0?void 0:d.recipient),r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"Status")),d.status===1?"Successful":d.status===0?"Pending":d.status===2?"Cancelled":"Debit "),r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"Transaction Type")),d===null||d===void 0?void 0:d.transaction_type)))))))};d(u,"useEffect{}");function f(e){return{getSingleWalletTransaction:function t(a,n){return e(Object(c["b"])(a,n))}}}var p=function e(t){return{transaction:t.wallets.singleWalletTransaction,loading:t.loading.loading,loadingStatus:t.loading.loadingStatus}};var v=Object(l["b"])(p,f)(u);t["default"]=v;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(u,"WalletDetails","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/wallets/walletDetails.js");e.register(f,"mapDispatchToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/wallets/walletDetails.js");e.register(p,"mapStateToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/wallets/walletDetails.js");e.register(v,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/wallets/walletDetails.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,a(7)(e))},1451:function(e,t,a){"use strict";(function(e){a.d(t,"d",function(){return p});a.d(t,"e",function(){return v});a.d(t,"f",function(){return g});a.d(t,"c",function(){return m});a.d(t,"a",function(){return h});a.d(t,"b",function(){return w});var n=a(15);var r=a.n(n);var l=a(3);var o=a(4);var i=a(5);var c=a.n(i);var s=a(17);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function d(e,t,a,n,r,l,o){try{var i=e[l](o);var c=i.value}catch(e){a(e);return}if(i.done){t(c)}else{Promise.resolve(c).then(n,r)}}function u(e){return function(){var t=this,a=arguments;return new Promise(function(n,r){var l=e.apply(t,a);function o(e){d(l,n,r,o,i,"next",e)}function i(e){d(l,n,r,o,i,"throw",e)}o(undefined)})}}var f=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var p=function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:1;var a=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"";var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"";var c=arguments.length>3?arguments[3]:undefined;var d=arguments.length>4&&arguments[4]!==undefined?arguments[4]:"fund";var f=arguments.length>5&&arguments[5]!==undefined?arguments[5]:"";var p=arguments.length>6&&arguments[6]!==undefined?arguments[6]:"";return function(){var e=u(regeneratorRuntime.mark(function e(d){var u;return regeneratorRuntime.wrap(function e(v){while(1){switch(v.prev=v.next){case 0:v.prev=0;c&&d(Object(o["d"])());v.next=4;return r.a.get("".concat(s["a"].wallet,"/v1.1/admin/wallet-transactions?item_per_page=20&page=").concat(t,"&status=").concat(a,"&auth_id=").concat(n,"&start_date=").concat(f,"&end_date=").concat(p));case 4:u=v.sent;if(u.data.status==="error"){i["NotificationManager"].error(u.data.msg)}else{d({type:l["Zc"],payload:u.data.data})}c&&d(Object(o["b"])());v.next=11;break;case 9:v.prev=9;v.t0=v["catch"](0);case 11:case"end":return v.stop()}}},e,null,[[0,9]])}));return function(t){return e.apply(this,arguments)}}()};var v=function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";var a=arguments.length>1?arguments[1]:undefined;var n=arguments.length>2?arguments[2]:undefined;var o=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"fund";var c=arguments.length>4&&arguments[4]!==undefined?arguments[4]:"";var d=arguments.length>5&&arguments[5]!==undefined?arguments[5]:"";return function(){var e=u(regeneratorRuntime.mark(function e(n){var o;return regeneratorRuntime.wrap(function e(u){while(1){switch(u.prev=u.next){case 0:u.prev=0;u.next=3;return r.a.get("".concat(s["a"].wallet,"/v1.1/admin/wallet-transactions?component=count&status=").concat(t,"&auth_id=").concat(a,"&start_date=").concat(c,"&end_date=").concat(d));case 3:o=u.sent;if(o.data.status==="error"){i["NotificationManager"].error(o.data.msg)}else{n({type:l["ad"],payload:o.data.data.total?o.data.data.total:0})}u.next=9;break;case 7:u.prev=7;u.t0=u["catch"](0);case 9:case"end":return u.stop()}}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()};var g=function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";var a=arguments.length>1?arguments[1]:undefined;var n=arguments.length>2?arguments[2]:undefined;var l=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"fund";var c=arguments.length>4&&arguments[4]!==undefined?arguments[4]:"";var d=arguments.length>5&&arguments[5]!==undefined?arguments[5]:"";return function(){var e=u(regeneratorRuntime.mark(function e(n){var u;return regeneratorRuntime.wrap(function e(f){while(1){switch(f.prev=f.next){case 0:n(Object(o["d"])());f.prev=1;f.next=4;return r.a.get("".concat(s["a"].wallet,"/v1.1/admin/wallet-transactions?component=export&status=").concat(t,"&auth_id=").concat(a,"&transaction_type=").concat(l,"&start_date=").concat(c,"&end_date=").concat(d));case 4:u=f.sent;if(u.data.status==="error"){i["NotificationManager"].error(u.data.msg)}else{i["NotificationManager"].success("Excel file sent to your email successfully")}n(Object(o["b"])());f.next=12;break;case 9:f.prev=9;f.t0=f["catch"](1);n(Object(o["d"])());case 12:case"end":return f.stop()}}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}()};var m=function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";var a=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"";var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"";var o=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"";var c=arguments.length>4&&arguments[4]!==undefined?arguments[4]:"";return function(){var e=u(regeneratorRuntime.mark(function e(a){var n;return regeneratorRuntime.wrap(function e(d){while(1){switch(d.prev=d.next){case 0:d.prev=0;d.next=3;return r.a.get("".concat(s["a"].wallet,"/v1.1/admin/wallet-transactions?auth_id=").concat(t,"&component=balance&start_date=").concat(o,"&end_date=").concat(c));case 3:n=d.sent;if(n.data.status==="error"){i["NotificationManager"].error(n.data.msg)}else{a({type:l["Yc"],payload:n.data.data.total?n.data.data.total:0})}d.next=9;break;case 7:d.prev=7;d.t0=d["catch"](0);case 9:case"end":return d.stop()}}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()};var h=function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";var a=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"";var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"fund";var o=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"";var c=arguments.length>4&&arguments[4]!==undefined?arguments[4]:"";return function(){var e=u(regeneratorRuntime.mark(function e(d){var u;return regeneratorRuntime.wrap(function e(f){while(1){switch(f.prev=f.next){case 0:f.prev=0;f.next=3;return r.a.get("".concat(s["a"].wallet,"/v1.1/admin/wallet-transactions?auth_id=").concat(t,"&status=").concat(a,"&component=funding-balance&start_date=").concat(o,"&end_date=").concat(c,"&transaction_type=").concat(n));case 3:u=f.sent;if(u.data.status==="error"){i["NotificationManager"].error(u.data.msg)}else{d({type:l["X"],payload:u.data.data.total?u.data.data.total:0})}f.next=9;break;case 7:f.prev=7;f.t0=f["catch"](0);case 9:case"end":return f.stop()}}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()};var w=function e(t,a){return function(){var e=u(regeneratorRuntime.mark(function e(n){var c;return regeneratorRuntime.wrap(function e(d){while(1){switch(d.prev=d.next){case 0:d.prev=0;a&&n(Object(o["c"])());!a&&n(Object(o["d"])());d.next=5;return r.a.get("".concat(s["a"].wallet,"/v1.1/admin/wallet-transactions/").concat(t));case 5:c=d.sent;if(c.data.status==="error"){i["NotificationManager"].error(c.data.msg)}else{n({type:l["dc"],payload:c.data.data})}n(Object(o["a"])());n(Object(o["b"])());d.next=15;break;case 11:d.prev=11;d.t0=d["catch"](0);n(Object(o["b"])());n(Object(o["a"])());case 15:case"end":return d.stop()}}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()};(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(p,"getWallets","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/walletAction.js");e.register(v,"getWalletsCount","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/walletAction.js");e.register(g,"getWalletsExport","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/walletAction.js");e.register(m,"getWalletBalance","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/walletAction.js");e.register(h,"getFundingBalance","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/walletAction.js");e.register(w,"getSingleWalletTransaction","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/walletAction.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,a(7)(e))}}]);