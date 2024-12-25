(this["webpackJsonpreact-starter-kit"]=this["webpackJsonpreact-starter-kit"]||[]).push([[0],{16:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a(18),c=a.n(l),s=a(8),i=a(21),o=a(7),r=(a(16),a(0)),d=function(e){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("label",{htmlFor:e.label,className:"form__label",children:e.label}),Object(r.jsx)("input",{className:"form__input",type:e.type,name:e.name,id:e.id,placeholder:e.placeholder,onChange:function(t){e.handleValueInput(t.target.value,t.target.id)}})]})},j=function(e){return Object(r.jsxs)("section",{children:[Object(r.jsxs)("div",{className:"title_form",children:["  ",Object(r.jsx)("h1",{className:"header__title",children:" HR MANAGEMENT SYSTEM"}),Object(r.jsx)(s.b,{to:"/",children:Object(r.jsx)("button",{className:"btn",children:"Go to homepage "})})]}),Object(r.jsxs)("form",{className:"form",children:[Object(r.jsx)("h2",{children:"Employee Information"}),Object(r.jsxs)("div",{children:["  ",Object(r.jsx)(d,{label:" Full Name ",type:"text",name:"name",id:"name",handleValueInput:e.handleValueInput}),Object(r.jsx)(d,{label:" Age ",type:"number",name:"age",id:"age",handleValueInput:e.handleValueInput}),Object(r.jsx)(d,{label:" Country ",type:"text",name:"country",id:"country",handleValueInput:e.handleValueInput})]}),Object(r.jsxs)("div",{children:["     ",Object(r.jsx)(d,{label:"Position",type:"text",name:"position ",id:"position",handleValueInput:e.handleValueInput}),Object(r.jsx)(d,{label:"Wage (EUR/year)",type:"number",name:"wage ",id:"wage",handleValueInput:e.handleValueInput})]}),Object(r.jsx)("button",{className:"form__addBtn btn",onClick:e.addEmployee,children:"Add new employee"})]})]})},u=a.p+"static/media/video.5f28126a.mp4",p=function(){return Object(r.jsxs)("header",{className:"header",children:[Object(r.jsx)("h1",{className:"header__title",children:" HR MANAGEMENT SYSTEM"}),Object(r.jsxs)("div",{className:"header__section",children:[Object(r.jsxs)("div",{className:"header__section--desc",children:[Object(r.jsx)("h2",{className:"title",children:"All in one HR database"}),Object(r.jsx)("p",{className:"par",children:"Keep track of your employees with this easy employee registration system."})]}),Object(r.jsx)("div",{children:Object(r.jsx)("video",{width:"500",height:"250",controls:!0,children:Object(r.jsx)("source",{src:u,type:"video/mp4"})})})]}),Object(r.jsx)(s.b,{to:"/employee-database",className:"header__section--btn",children:Object(r.jsx)("button",{className:"btn",children:"Get started"})})]})},b=function(e){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("p",{children:["Name employee:",Object(r.jsx)("span",{className:"allEmployee__details--value",children:e.val.name})]}),Object(r.jsxs)("p",{children:["Age:",Object(r.jsx)("span",{className:"allEmployee__details--value",children:e.val.age})]}),Object(r.jsxs)("p",{children:["Country:",Object(r.jsx)("span",{className:"allEmployee__details--value",children:e.val.country})]}),Object(r.jsxs)("p",{children:["Position:",Object(r.jsx)("span",{className:"allEmployee__details--value",children:e.val.position})]}),Object(r.jsxs)("p",{children:["Wage:",Object(r.jsxs)("span",{className:"allEmployee__details--value",children:[" ",e.val.wage," "]})]})]})},h=function(e){return Object(r.jsxs)("section",{className:"database",children:[Object(r.jsx)("h3",{children:"Employee database"}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{className:"form__showBtn btn",onClick:e.getEmployees,children:"Show employees list"})}),e.employeeList.map((function(t,a){return Object(r.jsxs)("div",{className:"allEmployee",children:[Object(r.jsx)("ul",{className:"allEmployee__list",children:Object(r.jsxs)("li",{className:"allEmployee__details",children:[Object(r.jsxs)("p",{children:["Id employee:",Object(r.jsx)("span",{className:"allEmployee__details--value",children:a+1})]}),Object(r.jsx)(b,{val:t})]},a)}),Object(r.jsxs)("div",{className:"allEmployee__updatedList",children:[Object(r.jsx)("label",{htmlFor:"wage",className:"allEmployee__updatedList--label",children:" Wage (EUR/year) "}),Object(r.jsx)("input",{className:"allEmployee__updatedList--input",type:"text",name:"wageUpdate",id:"wageUpdate",placeholder:"update salary",onChange:e.handleValueUpdate}),Object(r.jsx)("button",{className:"allEmployee__updatedList--updateBtn btn",onClick:function(){return e.updateEmployee(t.id)},children:"Update"}),Object(r.jsx)("button",{className:"allEmployee__updatedList--updateBtn btn",onClick:function(){return e.deleteEmployee(t.id)},children:"Delete employee"})]})]})}))]})},m=function(){return Object(r.jsx)("div",{className:"footer",children:Object(r.jsx)("p",{className:"footer__par",children:" Developed by Sara R. &copy2021"})})},O=a(2);var x=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(0),s=Object(o.a)(c,2),d=s[0],u=s[1],b=Object(n.useState)(""),x=Object(o.a)(b,2),y=x[0],f=x[1],_=Object(n.useState)(""),g=Object(o.a)(_,2),N=g[0],v=g[1],E=Object(n.useState)(0),w=Object(o.a)(E,2),S=w[0],I=w[1],V=Object(n.useState)(0),C=Object(o.a)(V,2),T=C[0],k=C[1],A=Object(n.useState)([]),L=Object(o.a)(A,2),U=L[0],F=L[1];return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(O.c,{children:[Object(r.jsxs)(O.a,{path:"/",exact:!0,children:[Object(r.jsx)(p,{}),Object(r.jsx)(m,{})]}),Object(r.jsx)(O.a,{path:"/employee-database",children:Object(r.jsxs)("main",{children:[Object(r.jsx)(j,{handleValueInput:function(e,t){"name"===t?l(e):"age"===t?u(e):"country"===t?f(e):"position"===t?v(e):"wage"===t&&I(e)},addEmployee:function(e){e.preventDefault();var t={name:a,age:d,country:y,position:N,wage:S};return fetch("/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(){F([].concat(Object(i.a)(U),[{name:a,age:d,country:y,position:N,wage:S}]))}))}}),Object(r.jsx)(h,{employeeList:U,getEmployees:function(e){return e.preventDefault(),fetch("/employees").then((function(e){return e.json()})).then((function(e){console.log(e),F(e)}))},handleValueUpdate:function(e){var t=e.currentTarget.value;k(t)},updateEmployee:function(e){var t={wage:T,id:e};return fetch("/update",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(){F(U.map((function(t){return t.id===e?{id:t.id,name:t.name,country:t.country,age:t.age,position:t.position,wage:T}:t})))}))},deleteEmployee:function(e){return fetch("/employee/delete/".concat(e),{method:"DELETE"}).then((function(t){F(U.filter((function(t){return t.id!==e})))}))}})]})})]})})};c.a.render(Object(r.jsx)(s.a,{children:Object(r.jsx)(x,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.474b54a5.chunk.js.map