(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[63],{1306:function(e,t,r){"use strict";r.r(t);(function(e){var a=r(0);var n=r.n(a);var o=r(166);var c=r(66);var s=r(65);var u=r(36);var i=r(34);var l=r(27);var f=r(43);var d=r(57);var m=r(56);var p=r(58);var v=r(147);var b=r(67);var g=r(32);var h=r(198);var y=r(370);var j=r(167);var O=r.n(j);var E=r(1472);var x=r(104);var w=r(62);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function k(e,t,r,a,n,o,c){try{var s=e[o](c);var u=s.value}catch(e){r(e);return}if(s.done){t(u)}else{Promise.resolve(u).then(a,n)}}function N(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var o=e.apply(t,r);function c(e){k(o,a,n,c,s,"next",e)}function s(e){k(o,a,n,c,s,"throw",e)}c(undefined)})}}function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);if(t){a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})}r.push.apply(r,a)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};if(t%2){S(Object(r),true).forEach(function(t){F(e,t,r[t])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(e,Object.getOwnPropertyDescriptors(r))}else{S(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}}return e}function F(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}function D(e,t){return I(e)||G(e,t)||L(e,t)||H()}function H(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function L(e,t){if(!e)return;if(typeof e==="string")return M(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor)r=e.constructor.name;if(r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return M(e,t)}function M(e,t){if(t==null||t>e.length)t=e.length;for(var r=0,a=new Array(t);r<t;r++){a[r]=e[r]}return a}function G(e,t){var r=e&&(typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"]);if(r==null)return;var a=[];var n=true;var o=false;var c,s;try{for(r=r.call(e);!(n=(c=r.next()).done);n=true){a.push(c.value);if(t&&a.length===t)break}}catch(e){o=true;s=e}finally{try{if(!n&&r["return"]!=null)r["return"]()}finally{if(o)throw s}}return a}function I(e){if(Array.isArray(e))return e}var P=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var A=function e(t){var r=t.match,o=t.getFees,c=t.fees,g=t.createFee,O=t.updateFee,E=t.loading,k=t.deleteFee;var S=Object(a["useState"])(false),H=D(S,2),L=H[0],M=H[1];var G=Object(a["useState"])(false),I=D(G,2),P=I[0],A=I[1];var R=Object(a["useState"])(null),U=D(R,2),V=U[0],T=U[1];var _=Object(a["useState"])(null),z=D(_,2),q=z[0],J=z[1];var Y=Object(a["useState"])({name:"",desc:"",amount:""}),W=D(Y,2),$=W[0],B=W[1];var K=Object(a["useRef"])(null);var Q=Object(a["useState"])([]),X=D(Q,2),Z=X[0],ee=X[1];Object(a["useEffect"])(function(){o(true)},[]);var te=function e(t){return B(C(C({},$),{},F({},t.target.name,t.target.value)))};var re=$.name,ae=$.desc,ne=$.amount;var oe=function e(t){t.preventDefault();M(true)};var ce=function e(t){c.map(function(e){if(e.fee_id===t){B({name:e.name,desc:e.desc,amount:e.amount});T(e.fee_id)}});M(true);A(true)};console.log(c);var se=function e(){B({fee:"",type:"",desc:"",amount:""});T(null);M(false);A(false)};var ue=function(){var e=N(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function e(r){while(1){switch(r.prev=r.next){case 0:t.preventDefault();se();if(P){r.next=7;break}r.next=5;return g(re,ne,ae);case 5:r.next=9;break;case 7:r.next=9;return O(V,re,ne,ae);case 9:case"end":return r.stop()}}},e)}));return function t(r){return e.apply(this,arguments)}}();Object(a["useEffect"])(function(){if(c){var e=c.map(function(e){return{Fee:e["name"],Type:e["tag"],Description:e["desc"],Amount:e["amount"]}});ee(e)}},[c]);return n.a.createElement("div",{className:"table-wrapper"},!E&&c.length>0&&n.a.createElement(n.a.Fragment,null,n.a.createElement("li",{className:"list-inline-item search-icon d-inline-block ml-2 mb-2"},n.a.createElement(h["a"],{mini:"true",className:"search-icon-btn"},n.a.createElement("i",{className:"zmdi zmdi-search"})),n.a.createElement(y["a"],null)),n.a.createElement("div",{className:"float-right mb-3"},n.a.createElement(j["CSVLink"],{data:Z,filename:"fees.csv",className:"btn-sm btn-outline-default mr-10 bg-primary text-white",target:"_blank"},n.a.createElement("i",{className:"zmdi zmdi-download mr-2"}),"Export to Excel")),n.a.createElement("div",{className:"table-responsive",style:{minHeight:"50vh"}},n.a.createElement("ul",{className:"list-group"},c.map(function(e,t){return n.a.createElement("li",{className:"list-group-item text-right"},n.a.createElement("span",{className:"pull-left"},n.a.createElement("div",null,e.name," ")),n.a.createElement("strong",null,e.amount," ",n.a.createElement("span",{className:"ml-2"})," ",n.a.createElement("button",{type:"button",className:"rct-link-btn",onClick:function t(){return Object(w["b"])("create_setup",function(){return ce(e.fee_id)})}},n.a.createElement("i",{className:"ti-pencil"}))))})))),!E&&c.length<1&&n.a.createElement(x["a"],null),n.a.createElement(d["a"],{isOpen:L,toggle:function e(){return se()}},n.a.createElement(m["a"],{toggle:function e(){return se()}},P?"Update Class Type":"Create New Class Type"),n.a.createElement(s["a"],{onSubmit:ue},n.a.createElement(p["a"],null,n.a.createElement(u["a"],null,n.a.createElement(i["a"],{for:"firstName"},"Fee"),n.a.createElement(l["a"],{type:"text",name:"name",defaultValue:re,onChange:te,required:true})),n.a.createElement(u["a"],null,n.a.createElement(i["a"],{for:"firstName"},"Amount"),n.a.createElement(l["a"],{type:"text",name:"amount",defaultValue:ne,onChange:te,required:true})),n.a.createElement(u["a"],null,n.a.createElement(i["a"],{for:"lastName"},"Description"),n.a.createElement(l["a"],{type:"textarea",name:"desc",defaultValue:ae,onChange:te,required:true}))),n.a.createElement(v["a"],null,n.a.createElement(f["a"],{type:"submit",variant:"contained",className:"text-white btn-success"},"Submit")))),n.a.createElement(b["a"],{ref:K,title:"Are You Sure You Want To Delete?",message:"This will delete fee permanently.",onConfirm:function e(){k(q);K.current.close()}}))};P(A,'useState{[addNewFeeModal, setAddNewFeeModal](false)}\nuseState{[editFee, setEditFee](false)}\nuseState{[updateId, setUpdateId](null)}\nuseState{[deleteId, setDeleteId](null)}\nuseState{[formData, setFormData]({name: "", desc: "", amount: ""})}\nuseRef{inputEl}\nuseState{[excelExport, setExcelExport]([])}\nuseEffect{}\nuseEffect{}');function R(e){return{getFees:function t(r){return e(Object(E["c"])(r))},createFee:function t(r,a,n){return e(Object(E["a"])(r,a,n))},updateFee:function t(r,a,n,o){return e(Object(E["d"])(r,a,n,o))},deleteFee:function t(r){return e(Object(E["b"])(r))}}}var U=function e(t){return{fees:t.fees.fees,loading:t.loading.loading,loadingStatus:t.loading.loadingStatus}};var V=Object(g["b"])(U,R)(A);t["default"]=V;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(A,"Fees","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\routes\\fees\\fees.js");e.register(R,"mapDispatchToProps","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\routes\\fees\\fees.js");e.register(U,"mapStateToProps","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\routes\\fees\\fees.js");e.register(V,"default","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\routes\\fees\\fees.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,r(6)(e))},1472:function(e,t,r){"use strict";(function(e){r.d(t,"a",function(){return m});r.d(t,"c",function(){return p});r.d(t,"d",function(){return v});r.d(t,"b",function(){return b});var a=r(15);var n=r.n(a);var o=r(4);var c=r(3);var s=r(5);var u=r.n(s);var i=r(17);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function l(e,t,r,a,n,o,c){try{var s=e[o](c);var u=s.value}catch(e){r(e);return}if(s.done){t(u)}else{Promise.resolve(u).then(a,n)}}function f(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var o=e.apply(t,r);function c(e){l(o,a,n,c,s,"next",e)}function s(e){l(o,a,n,c,s,"throw",e)}c(undefined)})}}var d=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var m=function e(t,r,a){return function(){var e=f(regeneratorRuntime.mark(function e(c){var u,l;return regeneratorRuntime.wrap(function e(f){while(1){switch(f.prev=f.next){case 0:u={name:t,amount:r,desc:a};f.prev=1;f.next=4;return c(Object(o["d"])());case 4:f.next=6;return n.a.post("".concat(i["a"].fees,"/v1.1/fees"),u);case 6:l=f.sent;if(!(l.data.status==="error")){f.next=11;break}s["NotificationManager"].error(l.data.msg);f.next=15;break;case 11:f.next=13;return s["NotificationManager"].success("Fee Created Successfully!");case 13:f.next=15;return c(p());case 15:c(Object(o["b"])());f.next=22;break;case 18:f.prev=18;f.t0=f["catch"](1);c(Object(o["b"])());s["NotificationManager"].error(f.t0.response.data.error);case 22:case"end":return f.stop()}}},e,null,[[1,18]])}));return function(t){return e.apply(this,arguments)}}()};var p=function e(t){return function(){var e=f(regeneratorRuntime.mark(function e(r){var a;return regeneratorRuntime.wrap(function e(u){while(1){switch(u.prev=u.next){case 0:u.prev=0;u.t0=t;if(!u.t0){u.next=5;break}u.next=5;return r(Object(o["c"])());case 5:!t&&r(Object(o["d"])());u.next=8;return n.a.get("".concat(i["a"].fees,"/v1.1/fees"));case 8:a=u.sent;if(a.data.status==="error"){s["NotificationManager"].error(a.data.msg)}else{r({type:c["I"],payload:a.data.data})}r(Object(o["a"])());r(Object(o["b"])());u.next=19;break;case 14:u.prev=14;u.t1=u["catch"](0);r(Object(o["b"])());r(Object(o["a"])());s["NotificationManager"].error(u.t1.response.data.error);case 19:case"end":return u.stop()}}},e,null,[[0,14]])}));return function(t){return e.apply(this,arguments)}}()};var v=function e(t,r,a,c){return function(){var e=f(regeneratorRuntime.mark(function e(u){var l,f;return regeneratorRuntime.wrap(function e(d){while(1){switch(d.prev=d.next){case 0:l={name:r,amount:a,desc:c};d.prev=1;d.next=4;return u(Object(o["d"])());case 4:d.next=6;return n.a.put("".concat(i["a"].fees,"/v1.1/fees/").concat(t),l);case 6:f=d.sent;if(!(f.data.status==="error")){d.next=11;break}s["NotificationManager"].error(f.data.msg);d.next=15;break;case 11:d.next=13;return s["NotificationManager"].success("Fee Updated Successfully!");case 13:d.next=15;return u(p());case 15:u(Object(o["b"])());d.next=22;break;case 18:d.prev=18;d.t0=d["catch"](1);u(Object(o["b"])());s["NotificationManager"].error(d.t0.response.data.error);case 22:case"end":return d.stop()}}},e,null,[[1,18]])}));return function(t){return e.apply(this,arguments)}}()};var b=function e(t){return function(){var e=f(regeneratorRuntime.mark(function e(r){return regeneratorRuntime.wrap(function e(a){while(1){switch(a.prev=a.next){case 0:a.prev=0;r(Object(o["d"])());a.next=4;return n.a.delete("".concat(i["a"].fees,"/api/feeTypes/").concat(t,"/"));case 4:a.next=6;return s["NotificationManager"].success("Fee Deleted Successfully!");case 6:a.next=8;return r(Object(o["b"])());case 8:a.next=10;return r(getFees2());case 10:a.next=17;break;case 12:a.prev=12;a.t0=a["catch"](0);a.next=16;return r(Object(o["b"])());case 16:s["NotificationManager"].error(a.t0.response.data.result);case 17:case"end":return a.stop()}}},e,null,[[0,12]])}));return function(t){return e.apply(this,arguments)}}()};(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(m,"createFee","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\actions\\feesAction.js");e.register(p,"getFees","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\actions\\feesAction.js");e.register(v,"updateFee","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\actions\\feesAction.js");e.register(b,"deleteFee","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\actions\\feesAction.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,r(6)(e))}}]);