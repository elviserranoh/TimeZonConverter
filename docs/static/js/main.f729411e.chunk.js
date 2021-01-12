(this["webpackJsonptime-zone-converter-app"]=this["webpackJsonptime-zone-converter-app"]||[]).push([[0],{179:function(e,t,n){"use strict";n.r(t);var i=n(1),r=(n(0),n(23)),c=n.n(r),s=n(15),o=n(10),a=n(65),l=n(42),d="[Converter] Time UTC",m="[Loading] Loading",j="[Converter] Time UTC Error",h=function(e){return function(t){t({type:m}),fetch("https://time-zone-converter-api.herokuapp.com/api",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){var n=e.response;n.status?t(function(e){return{type:d,response:e}}(n)):t(function(e){return{type:j,response:e}}(n))})).catch((function(e){return console.log("err",e)}))}},b="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,u=Object(o.c)({time:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(l.a)({},t.response);case m:return{loading:!0};case j:return Object(l.a)({},t.response);default:return e}}}),p=Object(o.e)(u,b(Object(o.a)(a.a))),x=n(71),O=n(27),v=n(41),f=n.n(v),g=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.time})),n=function(){return f()().format("HH:mm:ss")};console.log(n());var r=Object(x.a)({initialValues:{time:n(),timezone:f()().format("Z")},validationSchema:O.a().shape({time:O.b().required("Required"),timezone:O.b().required("Required")}),onSubmit:function(t){e(h(t))}}),c=r.handleSubmit,o=r.handleChange,a=r.values,l=r.errors;return Object(i.jsx)("div",{className:"container-fluid",children:Object(i.jsxs)("div",{className:"row",style:{height:"100vh"},children:[Object(i.jsx)("div",{className:"col-md-6",style:{backgroundColor:"#252121",padding:"50px"},children:Object(i.jsx)("div",{className:"d-flex justify-content-center align-items-center",style:{height:"100%"},children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{style:{textAlign:"center",color:"#FFF",fontWeight:"bold",fontSize:"28px",marginBottom:"40px"},children:"Convert your time to UTC"}),t.errors&&Object(i.jsx)("div",{className:"alert alert-danger",children:t.errors.map((function(e){return Object(i.jsx)("p",{children:e},e)}))}),Object(i.jsxs)("form",{onSubmit:c,className:"row g-3 needs-validation",noValidate:!0,children:[Object(i.jsxs)("div",{className:"col-md-12",children:[Object(i.jsx)("label",{htmlFor:"time",className:"form-label text-white",children:"Time"}),Object(i.jsx)("input",{type:"text",className:"form-control",id:"time",name:"time",placeholder:"Ej. 18:23:21",onChange:o,value:a.time}),l.time&&Object(i.jsx)("div",{className:"text-danger",children:l.time})]}),Object(i.jsxs)("div",{className:"col-md-12",children:[Object(i.jsx)("label",{htmlFor:"timezone",className:"form-label text-white",children:"Time Zone"}),Object(i.jsx)("input",{type:"text",className:"form-control",id:"timezone",name:"timezone",placeholder:"Ej. -4:30",value:a.timezone,onChange:o}),l.timezone&&Object(i.jsx)("div",{className:"text-danger",children:l.timezone})]}),Object(i.jsx)("div",{className:"col-12",children:Object(i.jsx)("button",{className:"btn btn-primary w-100",type:"submit",children:"Convert Time Now"})})]})]})})}),Object(i.jsx)("div",{className:"col-md-6",style:{backgroundColor:"#FFFFFF"},children:Object(i.jsx)("div",{className:"d-flex justify-content-center align-items-center",style:{height:"100%"},children:Object(i.jsxs)("div",{style:{textAlign:"center"},children:[Object(i.jsx)("h1",{style:{fontSize:"40px"},children:"Time Zone Converter"}),t.loading&&Object(i.jsx)("div",{className:"spinner-border",role:"status",children:Object(i.jsx)("span",{className:"visually-hidden",children:"Loading..."})}),t.time&&Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{style:{fontSize:"30px"},children:"Converter Results:"}),Object(i.jsxs)("p",{style:{fontSize:"30px"},children:[t.time," ",t.timezone.toUpperCase()]})]})]})})})]})})};c.a.render(Object(i.jsx)(s.a,{store:p,children:Object(i.jsx)(g,{})}),document.getElementById("root"))}},[[179,1,2]]]);
//# sourceMappingURL=main.f729411e.chunk.js.map