(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[45],{1392:function(e,a,t){"use strict";t.r(a);(function(e){var l=t(0);var r=t.n(l);var n=t(34);var i=t(1457);var o=t(1458);var s=t(62);var c=t(32);var u=t(29);var d=t(23);var m=t(115);var v=t(172);var p=t(258);var f=t(166);var g=t(66);var E=t(3);(function(){var a=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;a&&a(e)})();function N(e,a,t,l,r,n,i){try{var o=e[n](i);var s=o.value}catch(e){t(e);return}if(o.done){a(s)}else{Promise.resolve(s).then(l,r)}}function h(e){return function(){var a=this,t=arguments;return new Promise(function(l,r){var n=e.apply(a,t);function i(e){N(n,l,r,i,o,"next",e)}function o(e){N(n,l,r,i,o,"throw",e)}i(undefined)})}}function b(e,a){return j(e)||D(e,a)||y(e,a)||x()}function x(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function y(e,a){if(!e)return;if(typeof e==="string")return w(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor)t=e.constructor.name;if(t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return w(e,a)}function w(e,a){if(a==null||a>e.length)a=e.length;for(var t=0,l=new Array(a);t<a;t++){l[t]=e[t]}return l}function D(e,a){var t=e&&(typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"]);if(t==null)return;var l=[];var r=true;var n=false;var i,o;try{for(t=t.call(e);!(r=(i=t.next()).done);r=true){l.push(i.value);if(a&&l.length===a)break}}catch(e){n=true;o=e}finally{try{if(!r&&t["return"]!=null)t["return"]()}finally{if(n)throw o}}return l}function j(e){if(Array.isArray(e))return e}var O=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var S=function e(a){var t,n,p,E,N,x,y,w,D,j,O,S,M,R,A,C,I,L,T,P,k,G,U,_,H,V,q,F;var B=a.match,Y=a.loadingStatus,X=a.sendVerificationRequest,z=a.verificationResult,J=a.updateVerificationResult;var $=Object(l["useState"])(""),K=b($,2),Q=K[0],W=K[1];var Z=Object(l["useState"])(""),ee=b(Z,2),ae=ee[0],te=ee[1];var le=Object(l["useState"])(""),re=b(le,2),ne=re[0],ie=re[1];var oe=Object(l["useState"])(""),se=b(oe,2),ce=se[0],ue=se[1];var de=Object(l["useState"])(""),me=b(de,2),ve=me[0],pe=me[1];var fe=function(){var e=h(regeneratorRuntime.mark(function e(a){var t;return regeneratorRuntime.wrap(function e(l){while(1){switch(l.prev=l.next){case 0:a.preventDefault();if(!(ae!=="lassra")){l.next=7;break}l.next=4;return X({id_type:ae,id_value:Q,first_name:ne,last_name:ce});case 4:l.t0=l.sent;l.next=10;break;case 7:l.next=9;return X({id_type:ae,lassra_id:Q,first_name:ne,last_name:ce,type:"data",dob:ve});case 9:l.t0=l.sent;case 10:t=l.t0;if(t){W("");te("");ie("");ue("");pe("")}case 12:case"end":return l.stop()}}},e)}));return function a(t){return e.apply(this,arguments)}}();Object(l["useEffect"])(function(){J()},[]);var ge=[{name:"NIN",value:"nin"},{name:"DRIVING LICENCE",value:"driver_license"},{name:"LASSRA",value:"lassra"},{name:"LASDRI",value:"lasdri"}];console.log(z);return r.a.createElement("div",{className:"table-wrapper"},r.a.createElement(f["a"],{title:"Id Verification",match:B}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col-xs-12 col-md-10"},r.a.createElement(g["a"],{style:{minHeight:""}},r.a.createElement(i["a"],null,r.a.createElement(o["a"],{md:5},r.a.createElement(s["a"],{onSubmit:fe},r.a.createElement(c["a"],null,r.a.createElement(u["a"],{for:"firstName"},"Id Type"),r.a.createElement(d["a"],{type:"select",name:"idNo",value:ae,onChange:function e(a){return te(a.target.value)},required:true},r.a.createElement("option",{selected:true,hidden:true,value:""},"-- Select Id Type --"),ge.map(function(e,a){return r.a.createElement("option",{key:a,value:e.value},e.name)}))),r.a.createElement(c["a"],null,r.a.createElement(u["a"],{for:"firstName"},"Id Number"),r.a.createElement(d["a"],{type:"text",name:"idNo",value:Q,onChange:function e(a){return W(a.target.value)},required:true})),r.a.createElement(c["a"],null,r.a.createElement(u["a"],null,"First Name"),r.a.createElement(d["a"],{type:"text",name:"firstName",value:ne,onChange:function e(a){return ie(a.target.value)},required:true})),r.a.createElement(c["a"],null,r.a.createElement(u["a"],{for:"lastName"},"Last Name"),r.a.createElement(d["a"],{type:"text",name:"lastName",value:ce,onChange:function e(a){return ue(a.target.value)},required:true})),ae==="lassra"&&r.a.createElement(c["a"],null,r.a.createElement(u["a"],{for:"dob"},"Date of Birth"),r.a.createElement(d["a"],{type:"date",name:"dob",value:ve,onChange:function e(a){return pe(a.target.value)},required:true})),r.a.createElement(m["a"],{disabled:Y,type:"submit",variant:"contained",className:"text-white btn-success mb-3"},"Submit"))),r.a.createElement(o["a"],{md:7},Y&&r.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center"},r.a.createElement(v["a"],null),r.a.createElement("h3",{className:"fw-bold mt-3"},"verifying id ")),!Y&&r.a.createElement("div",null,(z===null||z===void 0?void 0:z.status)==="error"&&r.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center"},r.a.createElement("div",{className:"fw-bold text-danger"},z===null||z===void 0?void 0:z.msg," ")),(z===null||z===void 0?void 0:z.status)==="error"&&r.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center"},r.a.createElement("div",{className:"fw-bold text-danger"},z===null||z===void 0?void 0:z.message," ")),(z===null||z===void 0?void 0:z.status)==="success"&&r.a.createElement("div",null,r.a.createElement("ul",{className:"list-group"},r.a.createElement("div",{className:"rounded rounded-circle"},r.a.createElement("img",{src:"data:image/png;base64, ".concat(z===null||z===void 0?void 0:(t=z.data)===null||t===void 0?void 0:t.photo),alt:"Red dot"})),r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"Name")),"".concat(z===null||z===void 0?void 0:(n=z.data)===null||n===void 0?void 0:n.firstname," ").concat(z===null||z===void 0?void 0:(p=z.data)===null||p===void 0?void 0:p.middlename," ").concat(z===null||z===void 0?void 0:(E=z.data)===null||E===void 0?void 0:E.lastname)),r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"First Name Matches Reg. Details")),"".concat((z===null||z===void 0?void 0:(N=z.data)===null||N===void 0?void 0:(x=N.firstname)===null||x===void 0?void 0:x.toUpperCase())===ne.toUpperCase()?"Yes":"No"," ")),r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"Last Name Matches Reg. Details")),"".concat((z===null||z===void 0?void 0:(y=z.data)===null||y===void 0?void 0:(w=y.lastname)===null||w===void 0?void 0:w.toUpperCase())===(ce===null||ce===void 0?void 0:ce.toUpperCase())?"Yes":"No"," ")),r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"Birth Date")),"".concat(z===null||z===void 0?void 0:(D=z.data)===null||D===void 0?void 0:D.birthdate," ")),r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"Gender")),"".concat(z===null||z===void 0?void 0:(j=z.data)===null||j===void 0?void 0:j.gender," ")),ae==="driver_licence"&&r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"Expiry Date")),"".concat(z===null||z===void 0?void 0:(O=z.data)===null||O===void 0?void 0:O.expiryDate)))),((z===null||z===void 0?void 0:z.status)==="1"||(z===null||z===void 0?void 0:z.status)==="0")&&r.a.createElement("div",null,r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"Message")),"".concat(z===null||z===void 0?void 0:z.message)),r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"Name")),"".concat(z===null||z===void 0?void 0:z.f_name," ").concat(z===null||z===void 0?void 0:z.m_name," ").concat(z===null||z===void 0?void 0:z.surname)),r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"First Name Matches Reg. Details")),"".concat((z===null||z===void 0?void 0:(S=z.f_name)===null||S===void 0?void 0:S.toUpperCase())===(ne===null||ne===void 0?void 0:ne.toUpperCase())?"Yes":"No"," ")),r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"Last Name Matches Reg. Details")),"".concat((z===null||z===void 0?void 0:(M=z.surname)===null||M===void 0?void 0:M.toUpperCase())===(ce===null||ce===void 0?void 0:ce.toUpperCase())?"Yes":"No"," ")),r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"DATE OF BIRTH")),"".concat(z===null||z===void 0?void 0:z.dob," ")),r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"PHONE NUMBER")),"".concat(z===null||z===void 0?void 0:z.phone_no," ")))),(z===null||z===void 0?void 0:z.code)==="00"&&r.a.createElement("div",null,r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"Message")),"".concat(z===null||z===void 0?void 0:z.message)),r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"NAME")),"".concat(z===null||z===void 0?void 0:(R=z.biographicData[0])===null||R===void 0?void 0:R.firstName," ").concat(z===null||z===void 0?void 0:(A=z.biographicData[0])===null||A===void 0?void 0:A.middleName," ").concat(z===null||z===void 0?void 0:(C=z.biographicData[0])===null||C===void 0?void 0:C.surname)),r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"First Name Matches Reg. Details")),"".concat((z===null||z===void 0?void 0:(I=z.biographicData[0])===null||I===void 0?void 0:(L=I.firstName)===null||L===void 0?void 0:L.toUpperCase())===ne.toUpperCase()?"Yes":"No"," ")),r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"Last Name Matches Reg. Details")),"".concat((z===null||z===void 0?void 0:(T=z.biographicData[0])===null||T===void 0?void 0:(P=T.surname)===null||P===void 0?void 0:P.toUpperCase())===(ne===null||ne===void 0?void 0:ne.toUpperCase())?"Yes":"No"," ")),r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"GENDER")),"".concat(z===null||z===void 0?void 0:(k=z.biographicData[0])===null||k===void 0?void 0:k.gender," ")),r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"DATE OF BIRTH")),"".concat(z===null||z===void 0?void 0:(G=z.biographicData[0])===null||G===void 0?void 0:G.dob," ")),r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"PHONE NUMBER")),"".concat(z===null||z===void 0?void 0:(U=z.biographicData[0])===null||U===void 0?void 0:U.phoneNumber," ")),r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"EMAIL")),"".concat(z===null||z===void 0?void 0:(_=z.biographicData[0])===null||_===void 0?void 0:_.email," ")),r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"ADDRESS")),"".concat(z===null||z===void 0?void 0:(H=z.biographicData[0])===null||H===void 0?void 0:H.houseNo," ").concat(z===null||z===void 0?void 0:(V=z.biographicData[0])===null||V===void 0?void 0:V.streetName," ").concat(z===null||z===void 0?void 0:(q=z.biographicData[0])===null||q===void 0?void 0:q.town," ")),r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"L.G.A")),"".concat(z===null||z===void 0?void 0:(F=z.biographicData[0])===null||F===void 0?void 0:F.lga," ")))),Object.keys(z).length!==0&&(z===null||z===void 0?void 0:z.code)===undefined&&r.a.createElement("div",null,r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item text-center"},r.a.createElement("div",{className:"text-danger fw-bold"},"".concat(z))))))))))))};O(S,'useState{[idNo, setIdNo]("")}\nuseState{[idType, setIdType]("")}\nuseState{[firstName, setFirstName]("")}\nuseState{[lastName, setLastName]("")}\nuseState{[dob, setDob]("")}\nuseEffect{}');function M(e){return{sendVerificationRequest:function a(t,l,r,n){return e(Object(p["a"])(t,l,r,n))},updateVerificationResult:function a(){return e({type:E["Xc"],payload:{}})}}}var R=function e(a){return{loadingStatus:a.loading.loadingStatus,verificationResult:a.idVerification.verificationResult}};var A=Object(n["b"])(R,M)(S);a["default"]=A;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(S,"IdVerification","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/setup/idVerification.js");e.register(M,"mapDispatchToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/setup/idVerification.js");e.register(R,"mapStateToProps","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/setup/idVerification.js");e.register(A,"default","/Applications/XAMPP/xamppfiles/htdocs/workload/lagosride/admin-dashboard/src/routes/setup/idVerification.js")})();(function(){var a=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;a&&a(e)})()}).call(this,t(7)(e))},1457:function(e,a,t){"use strict";var l=t(2);var r=t(21);var n=t(0);var i=t.n(n);var o=t(1);var s=t.n(o);var c=t(28);var u=t.n(c);var d=t(9);var m=["xs","sm","md","lg","xl"];var v=s.a.oneOfType([s.a.number,s.a.string]);var p={tag:d["o"],noGutters:s.a.bool,className:s.a.string,cssModule:s.a.object,form:s.a.bool,xs:v,sm:v,md:v,lg:v,xl:v};var f={tag:"div",widths:m};var g=function e(a){var t=a.className,n=a.cssModule,o=a.noGutters,s=a.tag,c=a.form,m=a.widths,v=Object(r["a"])(a,["className","cssModule","noGutters","tag","form","widths"]);var p=[];m.forEach(function(e,t){var l=a[e];delete v[e];if(!l){return}var r=!t;p.push(r?"row-cols-"+l:"row-cols-"+e+"-"+l)});var f=Object(d["k"])(u()(t,o?"no-gutters":null,c?"form-row":"row",p),n);return i.a.createElement(s,Object(l["a"])({},v,{className:f}))};g.propTypes=p;g.defaultProps=f;a["a"]=g},1458:function(e,a,t){"use strict";var l=t(2);var r=t(21);var n=t(0);var i=t.n(n);var o=t(1);var s=t.n(o);var c=t(28);var u=t.n(c);var d=t(9);var m=["xs","sm","md","lg","xl"];var v=s.a.oneOfType([s.a.number,s.a.string]);var p=s.a.oneOfType([s.a.bool,s.a.number,s.a.string,s.a.shape({size:s.a.oneOfType([s.a.bool,s.a.number,s.a.string]),order:v,offset:v})]);var f={tag:d["o"],xs:p,sm:p,md:p,lg:p,xl:p,className:s.a.string,cssModule:s.a.object,widths:s.a.array};var g={tag:"div",widths:m};var E=function e(a,t,l){if(l===true||l===""){return a?"col":"col-"+t}else if(l==="auto"){return a?"col-auto":"col-"+t+"-auto"}return a?"col-"+l:"col-"+t+"-"+l};var N=function e(a){var t=a.className,n=a.cssModule,o=a.widths,s=a.tag,c=Object(r["a"])(a,["className","cssModule","widths","tag"]);var m=[];o.forEach(function(e,t){var l=a[e];delete c[e];if(!l&&l!==""){return}var r=!t;if(Object(d["i"])(l)){var i;var o=r?"-":"-"+e+"-";var s=E(r,e,l.size);m.push(Object(d["k"])(u()((i={},i[s]=l.size||l.size==="",i["order"+o+l.order]=l.order||l.order===0,i["offset"+o+l.offset]=l.offset||l.offset===0,i)),n))}else{var v=E(r,e,l);m.push(v)}});if(!m.length){m.push("col")}var v=Object(d["k"])(u()(t,m),n);return i.a.createElement(s,Object(l["a"])({},c,{className:v}))};N.propTypes=f;N.defaultProps=g;a["a"]=N}}]);