(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[69],{1371:function(e,t,r){"use strict";r.r(t);(function(e){var a=r(0);var n=r.n(a);var c=r(223);var i=r(225);var o=r(18);var s=r(224);var u=r(116);var l=r(166);var p=r(66);var d=r(23);var f=r(62);var m=r(32);var v=r(29);var b=r(43);var y=r(104);var g=r.n(y);var h=r(52);var k=r(51);var T=r(54);var w=r(130);var E=r(67);var j=r(34);var x=r(198);var O=r(1479);var P=r(103);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function A(e,t,r,a,n,c,i){try{var o=e[c](i);var s=o.value}catch(e){r(e);return}if(o.done){t(s)}else{Promise.resolve(s).then(a,n)}}function N(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var c=e.apply(t,r);function i(e){A(c,a,n,i,o,"next",e)}function o(e){A(c,a,n,i,o,"throw",e)}i(undefined)})}}function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);if(t){a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})}r.push.apply(r,a)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};if(t%2){S(Object(r),true).forEach(function(t){C(e,t,r[t])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(e,Object.getOwnPropertyDescriptors(r))}else{S(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}}return e}function C(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}function D(e,t){return U(e)||L(e,t)||R(e,t)||H()}function H(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function R(e,t){if(!e)return;if(typeof e==="string")return G(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor)r=e.constructor.name;if(r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return G(e,t)}function G(e,t){if(t==null||t>e.length)t=e.length;for(var r=0,a=new Array(t);r<t;r++){a[r]=e[r]}return a}function L(e,t){var r=e&&(typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"]);if(r==null)return;var a=[];var n=true;var c=false;var i,o;try{for(r=r.call(e);!(n=(i=r.next()).done);n=true){a.push(i.value);if(t&&a.length===t)break}}catch(e){c=true;o=e}finally{try{if(!n&&r["return"]!=null)r["return"]()}finally{if(c)throw o}}return a}function U(e){if(Array.isArray(e))return e}var _=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var I=function e(t){var r=t.getTicketTypes,l=t.ticketTypes,y=t.createTicketType,j=t.updateTicketType,O=t.loading,A=t.deleteTicketType,S=t.getTicketTypeCount,H=t.ticketTypesCount;var R=Object(a["useState"])(false),G=D(R,2),L=G[0],U=G[1];var _=Object(a["useState"])(false),I=D(_,2),X=I[0],q=I[1];var z=Object(a["useState"])(null),B=D(z,2),F=B[0],J=B[1];var Y=Object(a["useState"])(null),W=D(Y,2),$=W[0],K=W[1];var Q=Object(a["useState"])({name:"",typeUser:"",issues:"",description:""}),V=D(Q,2),Z=V[0],ee=V[1];var te=Object(a["useState"])(""),re=D(te,2),ae=re[0],ne=re[1];var ce=Object(a["useRef"])(null);var ie=Object(a["useState"])(1),oe=D(ie,2),se=oe[0],ue=oe[1];Object(a["useEffect"])(function(){r(1,true);S()},[]);var le=function e(t){ue(t);r(t);window.scrollTo(0,0)};var pe=function e(t){return ee(M(M({},Z),{},C({},t.target.name,t.target.value)))};var de=Z.name,fe=Z.typeUser,me=Z.issues,ve=Z.description;var be=function e(t){t.preventDefault();U(true)};var ye=function e(t){l.map(function(e){if(e.support_id===t){ee({name:e.title,typeUser:e.user_type,issues:e.issues,description:e.description});J(e.support_id)}});U(true);q(true)};var ge=function e(){ee({name:"",typeUser:"",issues:"",description:""});J(null);U(false);q(false)};var he=function e(t){ce.current.open();K(t)};var ke=function(){var e=N(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function e(r){while(1){switch(r.prev=r.next){case 0:t.preventDefault();ge();if(X){r.next=7;break}r.next=5;return y(de,fe,me,ve);case 5:r.next=9;break;case 7:r.next=9;return j(F,de,fe,me,ve);case 9:case"end":return r.stop()}}},e)}));return function t(r){return e.apply(this,arguments)}}();var Te=function e(t){t.preventDefault();ne(t.target.value)};return n.a.createElement("div",{className:"table-wrapper"},!O&&n.a.createElement(p["a"],{heading:"Ticket Types",fullBlock:true},n.a.createElement("li",{className:"list-inline-item search-icon d-inline-block ml-2 mb-2"},l.length>0&&n.a.createElement("div",{className:"search-wrapper"},n.a.createElement(d["a"],{type:"search",className:"search-input-lg",name:"searchData",value:ae,onChange:Te,placeholder:"Search.."})),n.a.createElement(x["a"],{mini:"true",className:"search-icon-btn"},n.a.createElement("i",{className:"zmdi zmdi-search"}))),n.a.createElement("div",{className:"float-right"},n.a.createElement("a",{href:"#",onClick:function e(t){return be(t)},color:"primary",className:"caret btn-sm mr-10"},"Create New TicketType ",n.a.createElement("i",{className:"zmdi zmdi-plus"}))),l.length>0&&n.a.createElement("div",{className:"table-responsive",style:{minHeight:"50vh"}},n.a.createElement(c["a"],null,n.a.createElement(s["a"],null,n.a.createElement(u["a"],{hover:true},n.a.createElement(o["a"],null,"Title"),n.a.createElement(o["a"],null,"Type"),n.a.createElement(o["a"],null,"Issues"),n.a.createElement(o["a"],null,"Description"),n.a.createElement(o["a"],null,"Actions"))),n.a.createElement(i["a"],null,n.a.createElement(a["Fragment"],null,l.map(function(e,t){return n.a.createElement(u["a"],{hover:true,key:t},n.a.createElement(o["a"],null,e.title),n.a.createElement(o["a"],null,e.user_type),n.a.createElement(o["a"],null,e.issues),n.a.createElement(o["a"],null,e.description),n.a.createElement(o["a"],null,n.a.createElement("button",{type:"button",className:"rct-link-btn",onClick:function t(r){return ye(e.support_id)}},n.a.createElement("i",{className:"ti-pencil"})),n.a.createElement("button",{type:"button",className:"rct-link-btn ml-lg-3 text-danger",onClick:function t(){return he(e.support_id)}},n.a.createElement("i",{className:"ti-trash"}))))}))))),n.a.createElement("div",{className:"d-flex justify-content-end align-items-center mb-0 mt-3 mr-2"},l.length>0&&n.a.createElement(g.a,{activePage:se,itemClass:"page-item",linkClass:"page-link",itemsCountPerPage:20,totalItemsCount:H,onChange:le}),l.length<1&&n.a.createElement(P["a"],null))),n.a.createElement(h["a"],{isOpen:L,toggle:function e(){return ge()}},n.a.createElement(k["a"],{toggle:function e(){return ge()}},X?"Update ticket Type":"Create New ticket Type"),n.a.createElement(f["a"],{onSubmit:ke},n.a.createElement(T["a"],null,n.a.createElement(m["a"],null,n.a.createElement(v["a"],{for:"firstName"},"Name"),n.a.createElement(d["a"],{type:"text",name:"name",value:de,onChange:pe,required:true})),n.a.createElement(m["a"],null,n.a.createElement(v["a"],{for:"firstName"},"type"),n.a.createElement(d["a"],{type:"select",name:"typeUser",value:fe,onChange:pe,required:true},n.a.createElement("option",{value:""},"Select"),n.a.createElement("option",{value:"driver"},"Driver"),n.a.createElement("option",{value:"rider"},"Rider"),n.a.createElement("option",{value:"both"},"Both"))),n.a.createElement(m["a"],null,n.a.createElement(v["a"],{for:"firstName"},"Issues (Add issues separated by coma)"),n.a.createElement(d["a"],{type:"textarea",name:"issues",value:me,onChange:pe,required:true})),n.a.createElement(m["a"],null,n.a.createElement(v["a"],{for:"firstName"},"Description"),n.a.createElement(d["a"],{type:"textarea",name:"description",value:ve,onChange:pe,required:true}))),n.a.createElement(w["a"],null,n.a.createElement(b["a"],{type:"submit",variant:"contained",className:"text-white btn-success"},"Submit")))),n.a.createElement(E["a"],{ref:ce,title:"Are You Sure You Want To Delete?",message:"This will delete ticket permanently.",onConfirm:function e(){A($);ce.current.close()}}))};_(I,"useState{[addNewUserModal, setAddNewUserModal](false)}\nuseState{[editUser, setEditUser](false)}\nuseState{[updateId, setUpdateId](null)}\nuseState{[deleteId, setDeleteId](null)}\nuseState{[formData, setFormData]({name: '', typeUser: '', issues: '', description: ''})}\nuseState{[searchData, setSearchData]('')}\nuseRef{inputEl}\nuseState{[currentPage, setCurrentPage](1)}\nuseEffect{}");function X(e){return{getTicketTypes:function t(r,a){return e(Object(O["e"])(r,a))},getTicketTypeCount:function t(){return e(Object(O["d"])())},createTicketType:function t(r,a,n,c){return e(Object(O["a"])(r,a,n,c))},updateTicketType:function t(r,a,n,c,i){return e(Object(O["f"])(r,a,n,c,i))},deleteTicketType:function t(r){return e(Object(O["b"])(r))}}}var q=function e(t){return{ticketTypes:t.ticketTypes.ticketTypes,ticketTypesCount:t.ticketTypes.ticketTypesCount,loading:t.loading.loading,loadingStatus:t.loading.loadingStatus}};var z=Object(j["b"])(q,X)(I);t["default"]=z;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(I,"SupportType","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/support/supportTypes.js");e.register(X,"mapDispatchToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/support/supportTypes.js");e.register(q,"mapStateToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/support/supportTypes.js");e.register(z,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/support/supportTypes.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,r(7)(e))},1479:function(e,t,r){"use strict";(function(e){r.d(t,"a",function(){return f});r.d(t,"e",function(){return m});r.d(t,"c",function(){return v});r.d(t,"f",function(){return b});r.d(t,"b",function(){return y});r.d(t,"d",function(){return g});var a=r(15);var n=r.n(a);var c=r(4);var i=r(3);var o=r(5);var s=r.n(o);var u=r(17);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function l(e,t,r,a,n,c,i){try{var o=e[c](i);var s=o.value}catch(e){r(e);return}if(o.done){t(s)}else{Promise.resolve(s).then(a,n)}}function p(e){return function(){var t=this,r=arguments;return new Promise(function(a,n){var c=e.apply(t,r);function i(e){l(c,a,n,i,o,"next",e)}function o(e){l(c,a,n,i,o,"throw",e)}i(undefined)})}}var d=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var f=function e(t,r,a,i){return function(){var e=p(regeneratorRuntime.mark(function e(s){var l,p;return regeneratorRuntime.wrap(function e(d){while(1){switch(d.prev=d.next){case 0:l={title:t,user_type:r,issues:a,description:i};d.prev=1;d.next=4;return s(Object(c["d"])());case 4:d.next=6;return n.a.post("".concat(u["a"].support,"/v1.1/supports/issues"),l);case 6:p=d.sent;if(!(p.data.status==="error")){d.next=11;break}o["NotificationManager"].error(p.data.msg);d.next=17;break;case 11:d.next=13;return o["NotificationManager"].success("Ticket Created Successfully!");case 13:d.next=15;return s(m());case 15:d.next=17;return s(g());case 17:s(Object(c["b"])());d.next=24;break;case 20:d.prev=20;d.t0=d["catch"](1);s(Object(c["b"])());o["NotificationManager"].error(d.t0.response.data.result);case 24:case"end":return d.stop()}}},e,null,[[1,20]])}));return function(t){return e.apply(this,arguments)}}()};var m=function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:1;var r=arguments.length>1?arguments[1]:undefined;return function(){var e=p(regeneratorRuntime.mark(function e(a){var s;return regeneratorRuntime.wrap(function e(l){while(1){switch(l.prev=l.next){case 0:l.prev=0;r&&a(Object(c["c"])());!r&&a(Object(c["d"])());l.next=5;return n.a.get("".concat(u["a"].support,"/v1.1/supports/issues/?page_no=").concat(t,"&no_per_page=20"));case 5:s=l.sent;if(s.data.status==="error"){o["NotificationManager"].error(s.data.msg)}else{a({type:i["qc"],payload:s.data.data})}a(Object(c["a"])());a(Object(c["b"])());l.next=16;break;case 11:l.prev=11;l.t0=l["catch"](0);a(Object(c["b"])());a(Object(c["a"])());o["NotificationManager"].error("network error, try again later");case 16:case"end":return l.stop()}}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()};var v=function e(t,r){return function(){var e=p(regeneratorRuntime.mark(function e(a){var s;return regeneratorRuntime.wrap(function e(l){while(1){switch(l.prev=l.next){case 0:l.prev=0;r&&a(Object(c["c"])());!r&&a(Object(c["d"])());l.next=5;return n.a.get("".concat(u["a"].support,"/v1.1/user/support/").concat(t,"/"));case 5:s=l.sent;if(s.data.status==="error"){}else{a({type:i["pc"],payload:s.data.data})}a(Object(c["a"])());a(Object(c["b"])());l.next=16;break;case 11:l.prev=11;l.t0=l["catch"](0);a(Object(c["b"])());a(Object(c["a"])());o["NotificationManager"].error("network error, try again later");case 16:case"end":return l.stop()}}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()};var b=function e(t,r,a,i,s){return function(){var e=p(regeneratorRuntime.mark(function e(l){var p,d;return regeneratorRuntime.wrap(function e(f){while(1){switch(f.prev=f.next){case 0:p={title:r,user_type:a,issues:i,description:s};f.prev=1;f.next=4;return l(Object(c["d"])());case 4:f.next=6;return n.a.put("".concat(u["a"].support,"/v1.1/supports/issues/").concat(t),p);case 6:d=f.sent;if(!(d.data.status==="error")){f.next=11;break}o["NotificationManager"].error(d.data.msg);f.next=17;break;case 11:f.next=13;return o["NotificationManager"].success("Ticket Updated Successfully!");case 13:f.next=15;return l(m());case 15:f.next=17;return l(g());case 17:f.next=19;return l(Object(c["b"])());case 19:f.next=25;break;case 21:f.prev=21;f.t0=f["catch"](1);l(Object(c["b"])());console.log(f.t0);case 25:case"end":return f.stop()}}},e,null,[[1,21]])}));return function(t){return e.apply(this,arguments)}}()};var y=function e(t){return function(){var e=p(regeneratorRuntime.mark(function e(r){var a;return regeneratorRuntime.wrap(function e(i){while(1){switch(i.prev=i.next){case 0:i.prev=0;r(Object(c["d"])());i.next=4;return n.a.delete("".concat(u["a"].support,"/v1.1/supports/issues/").concat(t));case 4:a=i.sent;if(!(a.data.status==="error")){i.next=9;break}o["NotificationManager"].error(a.data.msg);i.next=15;break;case 9:i.next=11;return o["NotificationManager"].success("ClassType Deleted Successfully!");case 11:i.next=13;return r(m());case 13:i.next=15;return r(g());case 15:i.next=17;return r(Object(c["b"])());case 17:i.next=24;break;case 19:i.prev=19;i.t0=i["catch"](0);i.next=23;return r(Object(c["b"])());case 23:o["NotificationManager"].error(i.t0.response.data.result);case 24:case"end":return i.stop()}}},e,null,[[0,19]])}));return function(t){return e.apply(this,arguments)}}()};var g=function e(){return function(){var e=p(regeneratorRuntime.mark(function e(t){var r,a;return regeneratorRuntime.wrap(function e(c){while(1){switch(c.prev=c.next){case 0:c.prev=0;c.next=3;return n.a.get("".concat(u["a"].support,"/v1.1/supports/issues?component=count"));case 3:a=c.sent;t({type:i["rc"],payload:(r=a.data.data)===null||r===void 0?void 0:r.total});c.next=9;break;case 7:c.prev=7;c.t0=c["catch"](0);case 9:case"end":return c.stop()}}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()};(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(f,"createTicketType","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/ticketTypeAction.js");e.register(m,"getTicketTypes","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/ticketTypeAction.js");e.register(v,"getTicketType","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/ticketTypeAction.js");e.register(b,"updateTicketType","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/ticketTypeAction.js");e.register(y,"deleteTicketType","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/ticketTypeAction.js");e.register(g,"getTicketTypeCount","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/actions/ticketTypeAction.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,r(7)(e))}}]);