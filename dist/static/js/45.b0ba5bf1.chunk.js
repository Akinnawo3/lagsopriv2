(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[45],{1390:function(e,t,a){"use strict";a.r(t);(function(e){var l=a(0);var r=a.n(l);var n=a(32);var i=a(1458);var o=a(1459);var s=a(65);var c=a(36);var u=a(34);var d=a(27);var m=a(116);var v=a(172);var p=a(258);var f=a(166);var g=a(66);var E=a(3);(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;t&&t(e)})();function N(e,t,a,l,r,n,i){try{var o=e[n](i);var s=o.value}catch(e){a(e);return}if(o.done){t(s)}else{Promise.resolve(s).then(l,r)}}function h(e){return function(){var t=this,a=arguments;return new Promise(function(l,r){var n=e.apply(t,a);function i(e){N(n,l,r,i,o,"next",e)}function o(e){N(n,l,r,i,o,"throw",e)}i(undefined)})}}function b(e,t){return j(e)||w(e,t)||x(e,t)||y()}function y(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function x(e,t){if(!e)return;if(typeof e==="string")return D(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor)a=e.constructor.name;if(a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return D(e,t)}function D(e,t){if(t==null||t>e.length)t=e.length;for(var a=0,l=new Array(t);a<t;a++){l[a]=e[a]}return l}function w(e,t){var a=e&&(typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"]);if(a==null)return;var l=[];var r=true;var n=false;var i,o;try{for(a=a.call(e);!(r=(i=a.next()).done);r=true){l.push(i.value);if(t&&l.length===t)break}}catch(e){n=true;o=e}finally{try{if(!r&&a["return"]!=null)a["return"]()}finally{if(n)throw o}}return l}function j(e){if(Array.isArray(e))return e}var C=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default.signature:function(e){return e};var O=function e(t){var a,n,p,E,N,y,x,D,w,j,C,O,S,R,I,M,U,L,T,V,k,A,G,_,H,P,q,F;var B=t.match,Y=t.loadingStatus,z=t.sendVerificationRequest,J=t.verificationResult,$=t.updateVerificationResult;var K=Object(l["useState"])(""),Q=b(K,2),W=Q[0],X=Q[1];var Z=Object(l["useState"])(""),ee=b(Z,2),te=ee[0],ae=ee[1];var le=Object(l["useState"])(""),re=b(le,2),ne=re[0],ie=re[1];var oe=Object(l["useState"])(""),se=b(oe,2),ce=se[0],ue=se[1];var de=Object(l["useState"])(""),me=b(de,2),ve=me[0],pe=me[1];var fe=function(){var e=h(regeneratorRuntime.mark(function e(t){var a;return regeneratorRuntime.wrap(function e(l){while(1){switch(l.prev=l.next){case 0:t.preventDefault();if(!(te!=="lassra")){l.next=7;break}l.next=4;return z({id_type:te,id_value:W,first_name:ne,last_name:ce});case 4:l.t0=l.sent;l.next=10;break;case 7:l.next=9;return z({id_type:te,lassra_id:W,first_name:ne,last_name:ce,type:"data",dob:ve});case 9:l.t0=l.sent;case 10:a=l.t0;if(a){X("");ae("");ie("");ue("");pe("")}case 12:case"end":return l.stop()}}},e)}));return function t(a){return e.apply(this,arguments)}}();Object(l["useEffect"])(function(){$()},[]);var ge=[{name:"NIN",value:"nin"},{name:"DRIVING LICENCE",value:"driver_license"},{name:"LASSRA",value:"lassra"},{name:"LASDRI",value:"lasdri"}];console.log(J);return r.a.createElement("div",{className:"table-wrapper"},r.a.createElement(f["a"],{title:"Id Verification",match:B}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col-xs-12 col-md-10"},r.a.createElement(g["a"],{style:{minHeight:""}},r.a.createElement(i["a"],null,r.a.createElement(o["a"],{md:5},r.a.createElement(s["a"],{onSubmit:fe},r.a.createElement(c["a"],null,r.a.createElement(u["a"],{for:"firstName"},"Id Type"),r.a.createElement(d["a"],{type:"select",name:"idNo",value:te,onChange:function e(t){return ae(t.target.value)},required:true},r.a.createElement("option",{selected:true,hidden:true,value:""},"-- Select Id Type --"),ge.map(function(e,t){return r.a.createElement("option",{key:t,value:e.value},e.name)}))),r.a.createElement(c["a"],null,r.a.createElement(u["a"],{for:"firstName"},"Id Number"),r.a.createElement(d["a"],{type:"text",name:"idNo",value:W,onChange:function e(t){return X(t.target.value)},required:true})),r.a.createElement(c["a"],null,r.a.createElement(u["a"],null,"First Name"),r.a.createElement(d["a"],{type:"text",name:"firstName",value:ne,onChange:function e(t){return ie(t.target.value)},required:true})),r.a.createElement(c["a"],null,r.a.createElement(u["a"],{for:"lastName"},"Last Name"),r.a.createElement(d["a"],{type:"text",name:"lastName",value:ce,onChange:function e(t){return ue(t.target.value)},required:true})),te==="lassra"&&r.a.createElement(c["a"],null,r.a.createElement(u["a"],{for:"dob"},"Date of Birth"),r.a.createElement(d["a"],{type:"date",name:"dob",value:ve,onChange:function e(t){return pe(t.target.value)},required:true})),r.a.createElement(m["a"],{disabled:Y,type:"submit",variant:"contained",className:"text-white btn-success mb-3"},"Submit"))),r.a.createElement(o["a"],{md:7},Y&&r.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center"},r.a.createElement(v["a"],null),r.a.createElement("h3",{className:"fw-bold mt-3"},"verifying id ")),!Y&&r.a.createElement("div",null,(J===null||J===void 0?void 0:J.status)==="error"&&r.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center"},r.a.createElement("div",{className:"fw-bold text-danger"},J===null||J===void 0?void 0:J.msg," ")),(J===null||J===void 0?void 0:J.status)==="error"&&r.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center"},r.a.createElement("div",{className:"fw-bold text-danger"},J===null||J===void 0?void 0:J.message," ")),(J===null||J===void 0?void 0:J.status)==="success"&&r.a.createElement("div",null,r.a.createElement("ul",{className:"list-group"},r.a.createElement("div",{className:"rounded rounded-circle"},r.a.createElement("img",{src:"data:image/png;base64, ".concat(J===null||J===void 0?void 0:(a=J.data)===null||a===void 0?void 0:a.photo),alt:"Red dot"})),r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"Name")),"".concat(J===null||J===void 0?void 0:(n=J.data)===null||n===void 0?void 0:n.firstname," ").concat(J===null||J===void 0?void 0:(p=J.data)===null||p===void 0?void 0:p.middlename," ").concat(J===null||J===void 0?void 0:(E=J.data)===null||E===void 0?void 0:E.lastname)),r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"First Name Matches Reg. Details")),"".concat((J===null||J===void 0?void 0:(N=J.data)===null||N===void 0?void 0:(y=N.firstname)===null||y===void 0?void 0:y.toUpperCase())===ne.toUpperCase()?"Yes":"No"," ")),r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"Last Name Matches Reg. Details")),"".concat((J===null||J===void 0?void 0:(x=J.data)===null||x===void 0?void 0:(D=x.lastname)===null||D===void 0?void 0:D.toUpperCase())===(ce===null||ce===void 0?void 0:ce.toUpperCase())?"Yes":"No"," ")),r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"Birth Date")),"".concat(J===null||J===void 0?void 0:(w=J.data)===null||w===void 0?void 0:w.birthdate," ")),r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"Gender")),"".concat(J===null||J===void 0?void 0:(j=J.data)===null||j===void 0?void 0:j.gender," ")),te==="driver_licence"&&r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"Expiry Date")),"".concat(J===null||J===void 0?void 0:(C=J.data)===null||C===void 0?void 0:C.expiryDate)))),((J===null||J===void 0?void 0:J.status)==="1"||(J===null||J===void 0?void 0:J.status)==="0")&&r.a.createElement("div",null,r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"Message")),"".concat(J===null||J===void 0?void 0:J.message)),r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"Name")),"".concat(J===null||J===void 0?void 0:J.f_name," ").concat(J===null||J===void 0?void 0:J.m_name," ").concat(J===null||J===void 0?void 0:J.surname)),r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"First Name Matches Reg. Details")),"".concat((J===null||J===void 0?void 0:(O=J.f_name)===null||O===void 0?void 0:O.toUpperCase())===(ne===null||ne===void 0?void 0:ne.toUpperCase())?"Yes":"No"," ")),r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"Last Name Matches Reg. Details")),"".concat((J===null||J===void 0?void 0:(S=J.surname)===null||S===void 0?void 0:S.toUpperCase())===(ce===null||ce===void 0?void 0:ce.toUpperCase())?"Yes":"No"," ")),r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"DATE OF BIRTH")),"".concat(J===null||J===void 0?void 0:J.dob," ")),r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"PHONE NUMBER")),"".concat(J===null||J===void 0?void 0:J.phone_no," ")))),(J===null||J===void 0?void 0:J.code)==="00"&&r.a.createElement("div",null,r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"Message")),"".concat(J===null||J===void 0?void 0:J.message)),r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"NAME")),"".concat(J===null||J===void 0?void 0:(R=J.biographicData[0])===null||R===void 0?void 0:R.firstName," ").concat(J===null||J===void 0?void 0:(I=J.biographicData[0])===null||I===void 0?void 0:I.middleName," ").concat(J===null||J===void 0?void 0:(M=J.biographicData[0])===null||M===void 0?void 0:M.surname)),r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"First Name Matches Reg. Details")),"".concat((J===null||J===void 0?void 0:(U=J.biographicData[0])===null||U===void 0?void 0:(L=U.firstName)===null||L===void 0?void 0:L.toUpperCase())===ne.toUpperCase()?"Yes":"No"," ")),r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"Last Name Matches Reg. Details")),"".concat((J===null||J===void 0?void 0:(T=J.biographicData[0])===null||T===void 0?void 0:(V=T.surname)===null||V===void 0?void 0:V.toUpperCase())===(ne===null||ne===void 0?void 0:ne.toUpperCase())?"Yes":"No"," ")),r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"GENDER")),"".concat(J===null||J===void 0?void 0:(k=J.biographicData[0])===null||k===void 0?void 0:k.gender," ")),r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"DATE OF BIRTH")),"".concat(J===null||J===void 0?void 0:(A=J.biographicData[0])===null||A===void 0?void 0:A.dob," ")),r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"PHONE NUMBER")),"".concat(J===null||J===void 0?void 0:(G=J.biographicData[0])===null||G===void 0?void 0:G.phoneNumber," ")),r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"EMAIL")),"".concat(J===null||J===void 0?void 0:(_=J.biographicData[0])===null||_===void 0?void 0:_.email," ")),r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"ADDRESS")),"".concat(J===null||J===void 0?void 0:(H=J.biographicData[0])===null||H===void 0?void 0:H.houseNo," ").concat(J===null||J===void 0?void 0:(P=J.biographicData[0])===null||P===void 0?void 0:P.streetName," ").concat(J===null||J===void 0?void 0:(q=J.biographicData[0])===null||q===void 0?void 0:q.town," ")),r.a.createElement("li",{className:"list-group-item text-right"},r.a.createElement("span",{className:"pull-left"},r.a.createElement("strong",null,"L.G.A")),"".concat(J===null||J===void 0?void 0:(F=J.biographicData[0])===null||F===void 0?void 0:F.lga," ")))),Object.keys(J).length!==0&&(J===null||J===void 0?void 0:J.code)===undefined&&r.a.createElement("div",null,r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item text-center"},r.a.createElement("div",{className:"text-danger fw-bold"},"".concat(J))))))))))))};C(O,'useState{[idNo, setIdNo]("")}\nuseState{[idType, setIdType]("")}\nuseState{[firstName, setFirstName]("")}\nuseState{[lastName, setLastName]("")}\nuseState{[dob, setDob]("")}\nuseEffect{}');function S(e){return{sendVerificationRequest:function t(a,l,r,n){return e(Object(p["a"])(a,l,r,n))},updateVerificationResult:function t(){return e({type:E["Tc"],payload:{}})}}}var R=function e(t){return{loadingStatus:t.loading.loadingStatus,verificationResult:t.idVerification.verificationResult}};var I=Object(n["b"])(R,S)(O);t["default"]=I;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(O,"IdVerification","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\routes\\setup\\idVerification.js");e.register(S,"mapDispatchToProps","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\routes\\setup\\idVerification.js");e.register(R,"mapStateToProps","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\routes\\setup\\idVerification.js");e.register(I,"default","C:\\Users\\VIC\\Desktop\\projects\\live\\lagsoride-admin-dashboard\\src\\routes\\setup\\idVerification.js")})();(function(){var t=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;t&&t(e)})()}).call(this,a(6)(e))},1458:function(e,t,a){"use strict";var l=a(2);var r=a(20);var n=a(0);var i=a.n(n);var o=a(1);var s=a.n(o);var c=a(29);var u=a.n(c);var d=a(9);var m=["xs","sm","md","lg","xl"];var v=s.a.oneOfType([s.a.number,s.a.string]);var p={tag:d["o"],noGutters:s.a.bool,className:s.a.string,cssModule:s.a.object,form:s.a.bool,xs:v,sm:v,md:v,lg:v,xl:v};var f={tag:"div",widths:m};var g=function e(t){var a=t.className,n=t.cssModule,o=t.noGutters,s=t.tag,c=t.form,m=t.widths,v=Object(r["a"])(t,["className","cssModule","noGutters","tag","form","widths"]);var p=[];m.forEach(function(e,a){var l=t[e];delete v[e];if(!l){return}var r=!a;p.push(r?"row-cols-"+l:"row-cols-"+e+"-"+l)});var f=Object(d["k"])(u()(a,o?"no-gutters":null,c?"form-row":"row",p),n);return i.a.createElement(s,Object(l["a"])({},v,{className:f}))};g.propTypes=p;g.defaultProps=f;t["a"]=g},1459:function(e,t,a){"use strict";var l=a(2);var r=a(20);var n=a(0);var i=a.n(n);var o=a(1);var s=a.n(o);var c=a(29);var u=a.n(c);var d=a(9);var m=["xs","sm","md","lg","xl"];var v=s.a.oneOfType([s.a.number,s.a.string]);var p=s.a.oneOfType([s.a.bool,s.a.number,s.a.string,s.a.shape({size:s.a.oneOfType([s.a.bool,s.a.number,s.a.string]),order:v,offset:v})]);var f={tag:d["o"],xs:p,sm:p,md:p,lg:p,xl:p,className:s.a.string,cssModule:s.a.object,widths:s.a.array};var g={tag:"div",widths:m};var E=function e(t,a,l){if(l===true||l===""){return t?"col":"col-"+a}else if(l==="auto"){return t?"col-auto":"col-"+a+"-auto"}return t?"col-"+l:"col-"+a+"-"+l};var N=function e(t){var a=t.className,n=t.cssModule,o=t.widths,s=t.tag,c=Object(r["a"])(t,["className","cssModule","widths","tag"]);var m=[];o.forEach(function(e,a){var l=t[e];delete c[e];if(!l&&l!==""){return}var r=!a;if(Object(d["i"])(l)){var i;var o=r?"-":"-"+e+"-";var s=E(r,e,l.size);m.push(Object(d["k"])(u()((i={},i[s]=l.size||l.size==="",i["order"+o+l.order]=l.order||l.order===0,i["offset"+o+l.offset]=l.offset||l.offset===0,i)),n))}else{var v=E(r,e,l);m.push(v)}});if(!m.length){m.push("col")}var v=Object(d["k"])(u()(a,m),n);return i.a.createElement(s,Object(l["a"])({},c,{className:v}))};N.propTypes=f;N.defaultProps=g;t["a"]=N}}]);