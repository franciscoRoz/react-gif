(this["webpackJsonpgift-expert"]=this["webpackJsonpgift-expert"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(7),c=n.n(r),i=n(2),s=n(9),u=n(0),o=function(t){var e=t.setCategorias,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],o=r[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),c.trim().length>0&&(e((function(t){return[c].concat(Object(s.a)(t))})),o(""))},children:Object(u.jsx)("input",{type:"Text",value:c,onChange:function(t){o(t.target.value)}})})})},j=n(6),d=n.n(j),l=n(8),b=function(){var t=Object(l.a)(d.a.mark((function t(e){var n,a,r,c,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=B8o6rg1QH0lPD5GCi8QraA8l6cH9WEFs&q=".concat(encodeURI(e),"&limit=10"),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return r=t.sent,c=r.data,i=c.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=n(10),m=function(t){var e=t.title,n=t.url;return Object(u.jsxs)("div",{id:"Card",className:"card animate__animated animate__fadeIn",children:[Object(u.jsx)("img",{src:n,alt:e}),Object(u.jsxs)("p",{children:[" ",e," "]})]})};function p(t){var e=t.images;return Object(u.jsx)(u.Fragment,{children:e.map((function(t){return Object(u.jsx)(m,Object(f.a)({},t),t.id)}))})}var O=function(t){var e=t.Category,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){b(t).then((function(e){console.log(t),c({data:e,loading:!1})}))}),[t]),r}(e),r=n.data,c=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:"card animate__animated animate__fadeIn",children:e}),c&&"cargando",Object(u.jsx)("div",{className:"Card-grid",children:Object(u.jsx)(p,{images:r})})]})},g=function(){var t=Object(a.useState)(["papa"]),e=Object(i.a)(t,2),n=e[0],r=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GiftExpertApp"}),Object(u.jsx)(o,{setCategorias:r}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(t){return Object(u.jsx)(O,{Category:t},t)}))})]})};n(17);c.a.render(Object(u.jsx)(g,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.aa75c930.chunk.js.map