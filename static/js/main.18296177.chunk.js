(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),l=n(36),c=n.n(l),i=(n(76),n(7)),o=n(25),u=n(11),m=n(12),s=n(59),d=n.n(s),E=n(16),v=n.n(E),b=n(27),h=n.n(b),p=n(28),f=n.n(p),g=n(20),k=n.n(g);function O(){var e=Object(u.a)(["\n    \n    background-color: #FC9337;\n    height: 100%;\n    position: fixed;\n\n    .logo{\n        display: block;\n        margin-left: auto;\n        margin-right: auto;\n        margin-top: 3rem;\n        width: 40%;\n    }\n\n    .col {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n"]);return O=function(){return e},e}var w=m.a.div(O()),y=function(){return r.a.createElement(w,null,r.a.createElement("img",{className:"logo",src:d.a,alt:"logo BurgerQueen"}),r.a.createElement(h.a,null,r.a.createElement(f.a,{className:"buttons"},r.a.createElement(k.a,null,r.a.createElement(i.b,{to:"/waiter"},r.a.createElement(v.a,{variant:"success",size:"lg"},"Meserx"))),r.a.createElement(k.a,null,r.a.createElement(i.b,{to:"/kitchen"},r.a.createElement(v.a,{variant:"success",size:"lg"},"Cocina"))))))},j=n(46),C=n(29),x=n(30),I=n(32),L=n(31),B=n(13),N=n(33),S=n(50);S.initializeApp({apiKey:"AIzaSyBcUvIFTr_xSpEwu3xGcOyLgq_kP4SnFac",authDomain:"testfb-69c0a.firebaseapp.com",databaseURL:"https://testfb-69c0a.firebaseio.com",projectId:"testfb-69c0a",storageBucket:"testfb-69c0a.appspot.com",messagingSenderId:"740075735515",appId:"1:740075735515:web:32be2ff8f8503247"});var D=S,P=n(115),T=n(114);function R(){var e=Object(u.a)(["\n    .navbar {\n        background-color: #8C2318;\n    }\n\n    .navbar-brand, a,  .navbar-nav, .navbar-light .navbar-nav .nav-link {\n        color: rgba(247, 247, 247, 0.7);\n       \n        &:hover {\n            color: rgba(247, 247, 247, 1);\n        }\n    }\n\n"]);return R=function(){return e},e}var M=m.a.div(R()),$=function(){return r.a.createElement(M,null,r.a.createElement(P.a,{expand:"lg"},r.a.createElement(P.a.Brand,null,r.a.createElement(i.b,{to:"/"},"Burger Queen")," / Meserx "),r.a.createElement(P.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(P.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(T.a,{className:"ml-auto"},r.a.createElement(T.a.Item,null,r.a.createElement(T.a.Link,null,r.a.createElement(i.b,{to:"/waiter"},"Meserx"))),r.a.createElement(T.a.Item,null,r.a.createElement(T.a.Link,null,r.a.createElement(i.b,{to:"/kitchen"},"Cocina")))))))};function z(){var e=Object(u.a)(["\n    .navbar {\n        background-color: rgba(112, 112, 112, 0.3);\n    }\n\n    .navbar-nav, .navbar-light .navbar-nav .nav-link {\n        color: rgba(140, 35, 24, 0.5);\n        font-weight: bold;\n        \n       \n        &:hover {\n            color: rgba(140, 35, 24, 1);\n        }\n    }\n\n    .navbar-expand-lg .navbar-nav .nav-link {\n        padding-right: 1rem;\n        padding-left: 1rem;\n    }\n"]);return z=function(){return e},e}var A=m.a.div(z()),F=function(){return r.a.createElement(A,null,r.a.createElement(P.a,{expand:"lg"},r.a.createElement(P.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(P.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(T.a,{className:"mr-auto"},r.a.createElement(T.a.Item,null,r.a.createElement(T.a.Link,null,r.a.createElement(i.c,{to:"/breakfast"},"Desayuno"))),r.a.createElement(T.a.Item,null,r.a.createElement(T.a.Link,null,r.a.createElement(i.c,{to:"/lunch-and-dinner"},"Comida y Cena"))),r.a.createElement(T.a.Item,null,r.a.createElement(T.a.Link,null,r.a.createElement(i.c,{to:"/pending-orders"},"Pedidos Pendientes")))))))},Q=function(e){function a(){var e,n;Object(C.a)(this,a);for(var t=arguments.length,r=new Array(t),l=0;l<t;l++)r[l]=arguments[l];return(n=Object(I.a)(this,(e=Object(L.a)(a)).call.apply(e,[this].concat(r)))).deleteItem=function(e,a){n.props.handleDelete(e,a)},n}return Object(N.a)(a,e),Object(x.a)(a,[{key:"render",value:function(){var e=this;return console.log(this.props.menuList),this.props.menuList.map(function(a,n){return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(v.a,{variant:"danger",size:"sm",id:n,onClick:function(n){return e.deleteItem(n,a)}},"\ud83d\uddd9")),r.a.createElement("td",null,a.dish),r.a.createElement("td",null,"$"+a.price))})}}]),a}(r.a.Component),H=n(10),J=n.n(H),U=n(45),W=n.n(U);function _(){var e=Object(u.a)(["\n  .col-sm-4 {\n    border-left: 1px solid #707070;\n  }\n\n  .dishCard {\n    display: inline;\n  }\n\n  .col-sm-8 {\n    display: flex;\n    flexwrap: wrap;\n  }\n"]);return _=function(){return e},e}var q=m.a.div(_()),G=function(e){function a(e){var n;return Object(C.a)(this,a),(n=Object(I.a)(this,Object(L.a)(a).call(this,e))).state={brkfst:[],orders:[],total:0},n.submit=n.submit.bind(Object(B.a)(n)),n.deleteRow=n.deleteRow.bind(Object(B.a)(n)),n.sumOrder=n.sumOrder.bind(Object(B.a)(n)),n}return Object(N.a)(a,e),Object(x.a)(a,[{key:"componentDidMount",value:function(){var e=this;D.database().ref().child("brkfst").on("value",function(a){var n=a.val(),t=[];for(var r in n)t.push({id:r,img:n[r].img,dish:n[r].dish,price:n[r].price});e.setState({brkfst:t})})}},{key:"submit",value:function(e,a){var n={dish:e,price:a};this.setState({orders:[].concat(Object(j.a)(this.state.orders),[n])})}},{key:"deleteRow",value:function(e,a){e.preventDefault(e),this.setState(function(e){return{orders:e.orders.filter(function(e){return e!==a})}})}},{key:"sumOrder",value:function(){var e=this.state.orders.map(function(e){return e.price}).reduce(function(e,a){return e+a});this.setState({total:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Breakfast"},r.a.createElement($,null),r.a.createElement(F,null),r.a.createElement(h.a,null,r.a.createElement(q,null,r.a.createElement("h1",null,"Desayuno"),r.a.createElement(f.a,null,r.a.createElement(k.a,{sm:8},this.state.brkfst.map(function(a){return r.a.createElement("div",{className:"dishCard"},r.a.createElement(J.a,{style:{width:"10rem"}},r.a.createElement(J.a.Img,{variant:"top",src:a.img}),r.a.createElement(J.a.Body,null,r.a.createElement(J.a.Title,null,a.dish),r.a.createElement(v.a,{variant:"primary",block:!0,onClick:function(){e.submit(a.dish,a.price)}},"$",a.price))))})),r.a.createElement(k.a,{sm:4},r.a.createElement(J.a,null,r.a.createElement(J.a.Header,null,"Cuenta"),r.a.createElement(J.a.Body,null,r.a.createElement(W.a,{responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"Platillo"),r.a.createElement("th",null,"Precio"))),r.a.createElement(Q,{menuList:this.state.orders,handleDelete:this.deleteRow})),r.a.createElement(v.a,{variant:"success",block:!0,onClick:this.sumOrder},"Total : $ ",this.state.total))))))))}}]),a}(r.a.Component),K=function(){return r.a.createElement("div",null,r.a.createElement(G,null))};function V(){var e=Object(u.a)(["\n    .navbar {\n        background-color: #5E8C6A;\n    }\n\n    .navbar-brand, a,  .navbar-nav, .navbar-light .navbar-nav .nav-link {\n        color: rgba(247, 247, 247, 0.7);\n       \n        &:hover {\n            color: rgba(247, 247, 247, 1);\n        }\n    }\n"]);return V=function(){return e},e}var X=m.a.div(V()),Y=function(){return r.a.createElement(X,null,r.a.createElement(P.a,{expand:"lg"},r.a.createElement(P.a.Brand,null,r.a.createElement(i.b,{to:"/"},"Burger Queen")," / Cocina"),r.a.createElement(P.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(P.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(T.a,{className:"ml-auto"},r.a.createElement(T.a.Item,null,r.a.createElement(T.a.Link,null,r.a.createElement(i.b,{to:"/waiter"},"Meserx"))),r.a.createElement(T.a.Item,null,r.a.createElement(T.a.Link,null,r.a.createElement(i.b,{to:"/kitchen"},"Cocina")))))))};function Z(){var e=Object(u.a)(["\n    .navbar {\n        background-color: rgba(112, 112, 112, 0.3);\n    }\n\n    .navbar-nav, .navbar-light .navbar-nav .nav-link {\n        color: rgba(112, 112, 112, 0.7);\n        font-weight: bold;\n        \n       \n        &:hover {\n            color: rgba(112, 112, 112, 1);\n        }\n    }\n\n    .navbar-expand-lg .navbar-nav .nav-link {\n        padding-right: 1rem;\n        padding-left: 1rem;\n    }\n"]);return Z=function(){return e},e}var ee=m.a.div(Z()),ae=function(){return r.a.createElement(ee,null,r.a.createElement(P.a,{expand:"lg"},r.a.createElement(P.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(P.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(T.a,{className:"mr-auto"},r.a.createElement(T.a.Item,null,r.a.createElement(T.a.Link,null,r.a.createElement(i.c,{to:"/new-orders"},"Pedidos Nuevos"))),r.a.createElement(T.a.Item,null,r.a.createElement(T.a.Link,null,r.a.createElement(i.c,{to:"/finished-orders"},"Pedidos Completados")))))))},ne=function(){return r.a.createElement("div",null,r.a.createElement(Y,null),r.a.createElement(ae,null))};function te(){var e=Object(u.a)(["\n  .col-sm-4 {\n    border-left: 1px solid #707070;\n  }\n\n  .col-sm-8 {\n    display: flex;\n    flex-wrap: wrap;\n\n  }\n"]);return te=function(){return e},e}var re=m.a.div(te()),le=function(e){function a(e){var n;return Object(C.a)(this,a),(n=Object(I.a)(this,Object(L.a)(a).call(this,e))).state={lnchdnnr:[],orders:[],total:0},n.submit=n.submit.bind(Object(B.a)(n)),n.deleteRow=n.deleteRow.bind(Object(B.a)(n)),n.sumOrder=n.sumOrder.bind(Object(B.a)(n)),n}return Object(N.a)(a,e),Object(x.a)(a,[{key:"componentDidMount",value:function(){var e=this;D.database().ref().child("lnchdnnr").on("value",function(a){var n=a.val(),t=[];for(var r in n)t.push({id:r,img:n[r].img,dish:n[r].dish,description:n[r].description,price:n[r].price});e.setState({lnchdnnr:t})})}},{key:"submit",value:function(e,a){var n={dish:e,price:a};this.setState({orders:[].concat(Object(j.a)(this.state.orders),[n])})}},{key:"deleteRow",value:function(e,a){e.preventDefault(e),this.setState(function(e){return{orders:e.orders.filter(function(e){return e!==a})}})}},{key:"sumOrder",value:function(){var e=this.state.orders.map(function(e){return e.price}).reduce(function(e,a){return e+a});this.setState({total:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"LunchDinner"},r.a.createElement($,null),r.a.createElement(F,null),r.a.createElement(h.a,null,r.a.createElement(re,null,r.a.createElement("h1",null,"Comida y Cena"),r.a.createElement(f.a,null,r.a.createElement(k.a,{sm:8},this.state.lnchdnnr.map(function(a){return r.a.createElement("div",null,r.a.createElement(J.a,{style:{width:"11rem"}},r.a.createElement(J.a.Img,{variant:"top",src:a.img}),r.a.createElement(J.a.Body,null,r.a.createElement(J.a.Title,null,a.dish),r.a.createElement(J.a.Text,null,a.description),r.a.createElement(v.a,{variant:"primary",block:!0,onClick:function(){e.submit(a.dish,a.price)}},"$",a.price))))})),r.a.createElement(k.a,{sm:4},r.a.createElement(J.a,null,r.a.createElement(J.a.Header,null,"Cuenta"),r.a.createElement(J.a.Body,null,r.a.createElement(W.a,{responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"Platillo"),r.a.createElement("th",null,"Precio"))),r.a.createElement(Q,{menuList:this.state.orders,handleDelete:this.deleteRow})),r.a.createElement(v.a,{variant:"success",block:!0,onClick:this.sumOrder},"Total : $ ",this.state.total))))))))}}]),a}(r.a.Component),ce=n(113),ie=function(e){return r.a.createElement(ce.a,null,e.children)},oe=function(){return r.a.createElement("div",null,r.a.createElement($,null),r.a.createElement(F,null),r.a.createElement(ie,null,r.a.createElement("h2",null,"Pending Orders")))},ue=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"New Orders go here"))},me=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Finished Orders will be here"))},se=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"No Match"))};var de=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:y}),r.a.createElement(o.a,{path:"/waiter",component:K}),r.a.createElement(o.a,{path:"/kitchen",component:ne}),r.a.createElement(o.a,{path:"/breakfast",component:G}),r.a.createElement(o.a,{path:"/lunch-and-dinner",component:le}),r.a.createElement(o.a,{path:"/pending-orders",component:oe}),r.a.createElement(o.a,{path:"/new-orders",component:ue}),r.a.createElement(o.a,{path:"/finished-orders",component:me}),r.a.createElement(o.a,{component:se}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(de,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},59:function(e,a,n){e.exports=n.p+"static/media/LogoBQ.8119e3b6.png"},71:function(e,a,n){e.exports=n(112)},76:function(e,a,n){}},[[71,1,2]]]);
//# sourceMappingURL=main.18296177.chunk.js.map