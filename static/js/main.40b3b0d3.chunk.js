(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e){e.exports={title:"Hello I'm Aref",subtitle:"Petroleum Engineer | Programming Lover | Karate",links:{github:"https://github.com/ArefErami",linkedin:"https://ir.linkedin.com/in/arreff-je-37a73666"},section:[{title:"About me",items:[{type:"p",content1:"This is Aref from Iran",content2:"I'm majoring in Petroleum engineering",content3:" I love programming and I have many wishes... "}]},{title:"Skills",items:[{type:"Card",content:{image:"image/html.png",title:"HTML"}},{type:"Card",content:{image:"image/css.png",title:"CSS"}},{type:"Card",content:{image:"image/bootstrap.png",title:"Bootstrap"}},{type:"Card",content:{image:"image/javascript.png",title:"Javascript"}},{type:"Card",content:{image:"image/react.png",title:"React"}},{type:"Card",content:{image:"image/python.png",title:"Python"}}]}],arrow:{down:"image/down.png",down2:"image/down2.png",up:"image/up.png",magic:"image/magic.png"}}},26:function(e,t,a){e.exports=a(57)},31:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(9),l=a.n(i),r=(a(31),a(3)),o=a(4),s=a(6),m=a(5),u=a(7),p=a(10),d=a(1),E=a(2),g=(a(41),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).changeColor=function(){e.setState({color:"black"===e.state.color?"white":"black"})},e.state={color:"black"},e.changeColor=e.changeColor.bind(Object(p.a)(Object(p.a)(e))),e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("div",{className:"navigation"},c.a.createElement("ul",null,c.a.createElement("li",{id:"magic"},c.a.createElement("img",{src:d.arrow.magic,onClick:function(){return e.changeColor()}})),c.a.createElement(E.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:50,duration:500,delay:100},c.a.createElement("li",{id:"about"},c.a.createElement("b",{style:{color:this.state.color}},"About"))),c.a.createElement(E.Element,{name:"about",className:"element"}),c.a.createElement(E.Link,{activeClass:"active",to:"skill",spy:!0,smooth:!0,offset:50,duration:500,delay:100},c.a.createElement("li",{id:"skill"},c.a.createElement("b",{style:{color:this.state.color}},"Skills"))))))}}]),t}(n.Component)),f=(a(42),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.children;return c.a.createElement("div",{className:'fullpage" '.concat(this.props.className||"")},e)}}]),t}(n.Component)),h=a(25),b=(a(50),function(e){return c.a.createElement("div",{className:"arrowDown",onClick:e.onClick},c.a.createElement("div",{id:"down"},c.a.createElement("img",{src:d.arrow.down})))}),v=(a(51),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(E.Element,{name:"title",className:"element"}),c.a.createElement(f,{className:"fullpage first"},c.a.createElement("h1",{className:"title"},d.title),c.a.createElement("h3",{id:"Subtit"}," ",d.subtitle),c.a.createElement("div",{id:"icon"},Object.keys(d.links).map(function(e){return c.a.createElement(h.SocialIcon,{url:d.links[e]})}))),c.a.createElement(E.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:50,duration:500,delay:100},c.a.createElement(b,null)),c.a.createElement(E.Element,{name:"about",className:"element"}))}}]),t}(n.Component)),k=(a(52),function(e){return c.a.createElement("div",{className:"arrowDown2",onClick:e.onClick},c.a.createElement("div",{id:"down2"},c.a.createElement("img",{src:d.arrow.down2})))}),j=(a(53),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(f,{className:"fullpage second"},c.a.createElement("h1",{id:"f2About"},d.section[0].title),c.a.createElement("h3",{className:"parag"},d.section[0].items[0].content1),c.a.createElement("h3",{className:"parag"},d.section[0].items[0].content2),c.a.createElement("h3",{className:"parag"},d.section[0].items[0].content3)),c.a.createElement(E.Link,{activeClass:"active",to:"skills",spy:!0,smooth:!0,offset:50,duration:500,delay:100},c.a.createElement(k,null)),c.a.createElement(E.Element,{name:"skills",className:"element"}))}}]),t}(n.Component)),y=(a(54),function(e){return[c.a.createElement("div",{className:"arrowUp",onClick:e.onClick},c.a.createElement("div",{id:"up"},c.a.createElement("img",{src:d.arrow.up})))]}),w=(a(55),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"fullpage third"},c.a.createElement("h1",{id:"ski"},c.a.createElement("b",null,d.section[1].title)),c.a.createElement("div",{className:"cards-wraper"},d.section[1].items.map(function(e){return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"image-wraper"},c.a.createElement("img",{src:e.content.image})),c.a.createElement("div",{className:"skill-title-wrap"},c.a.createElement("h4",null,e.content.title)))})),c.a.createElement(E.Link,{activeClass:"active",to:"title",spy:!0,smooth:!0,offset:50,duration:500,delay:100},c.a.createElement(y,null)),c.a.createElement(E.Element,{name:"skill",className:"element"}))}}]),t}(n.Component)),O=(a(56),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(g,null),c.a.createElement(v,null),c.a.createElement(j,null),c.a.createElement(w,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.40b3b0d3.chunk.js.map