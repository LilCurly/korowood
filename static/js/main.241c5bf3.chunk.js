(this.webpackJsonpkorowood=this.webpackJsonpkorowood||[]).push([[0],{36:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},62:function(e,t,s){},63:function(e,t,s){},64:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){"use strict";s.r(t);var i=s(2),a=s(0),c=s.n(a),n=s(12),r=s.n(n),o=(s(36),s(16)),l=(s(37),s(6)),j=s(7),b=s(9),u=s(8),m=s.p+"static/media/logo.04fe0360.svg",d=(s(38),s(73)),O=s(15),h=(s(62),function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){return Object(i.jsxs)("ul",{className:"Header-links "+(this.props.isHorizontal?"Header-links-horizontal":"Header-links-vertical"),children:[Object(i.jsx)("li",{children:Object(i.jsx)("span",{children:"Qui sommes-nous ?"})}),Object(i.jsx)("li",{children:Object(i.jsx)("span",{children:"Nos engagements"})}),Object(i.jsx)("li",{children:Object(i.jsx)("span",{children:"Nos r\xe9alisations"})}),Object(i.jsx)("li",{children:Object(i.jsx)("span",{children:"Notre catalogue"})}),Object(i.jsx)("li",{children:Object(i.jsx)("span",{children:"Nous contacter"})})]})}}]),s}(a.Component)),p=function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(e){return Object(l.a)(this,s),t.call(this,e)}return Object(j.a)(s,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"App-header",children:[Object(i.jsx)("div",{className:"Header-logo",children:Object(i.jsx)("img",{src:m,alt:"logo"})}),Object(i.jsx)("div",{className:"Header-right",children:this.props.isMobile()?Object(i.jsx)(d.a,{className:"Header-hamburger",toggled:this.props.isHamburgerOpen,toggle:this.props.hamburgerHandler}):Object(i.jsx)(h,{isHorizontal:!0})})]})}}]),s}(a.Component),g=Object(O.withGetScreen)(p,{mobileLimit:780,tabletLimit:1e3,shouldListenOnResize:!0}),x=(s(63),function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(e){return Object(l.a)(this,s),t.call(this,e)}return Object(j.a)(s,[{key:"render",value:function(){return Object(i.jsx)("div",{className:"Navigation-container "+(this.props.isHamburgerOpen?"Container-visible":"Container-invisible"),children:Object(i.jsx)(h,{isHorizontal:!1})})}}]),s}(a.Component)),f=(s(64),s.p,s.p+"static/media/paysage2.af405e24.jpg"),y=s(72),v=s(1);var N=function(){return Object(i.jsxs)(y.a,{onSelect:function(){(new v.d).from(".Aboutus-title",{y:-15,opacity:0,ease:v.b.easeOut,delay:.6}).from(".Aboutus-desc",{y:-15,opacity:0,ease:v.b.easeOut})},children:[Object(i.jsxs)(y.a.Item,{children:[Object(i.jsx)("img",{src:f,className:"d-block w-100",alt:"Test slide"}),Object(i.jsxs)(y.a.Caption,{children:[Object(i.jsx)("h3",{className:"Aboutus-title",children:"TEST"}),Object(i.jsx)("p",{className:"Aboutus-desc",children:"Lorem ipsum test hello"})]})]}),Object(i.jsxs)(y.a.Item,{children:[Object(i.jsx)("img",{src:f,className:"d-block w-100",alt:"Test slide"}),Object(i.jsxs)(y.a.Caption,{children:[Object(i.jsx)("h3",{className:"Aboutus-title",children:"TEST"}),Object(i.jsx)("p",{className:"Aboutus-desc",children:"Lorem ipsum test hello"})]})]})]})},C=(s(66),s(67),s.p+"static/media/wood.df0f786f.jpg"),H=function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"Commitment-banner "+this.props.side,children:[Object(i.jsx)("img",{src:C,alt:"Wood"}),Object(i.jsx)("div",{className:"Commitment-caption",children:Object(i.jsx)("h3",{children:"Bois 100% belge"})})]})}}]),s}(a.Component);var T=function(){return Object(i.jsxs)("div",{className:"Commitment-section",children:[Object(i.jsx)("div",{className:"Commitment-header",children:Object(i.jsx)("h2",{children:"Nos Engagements"})}),Object(i.jsxs)("div",{className:"Commitment-container",children:[Object(i.jsx)(H,{side:"Commitment-right"}),Object(i.jsx)(H,{side:"Commitment-left"}),Object(i.jsx)(H,{side:"Commitment-right"})]})]})},k=s(4),A=s(30),w=s(17);k.a.registerPlugin(A.a);var L=Object(O.withGetScreen)((function(e){var t=Object(a.useState)(!1),s=Object(o.a)(t,2),c=s[0],n=s[1],r=new v.d;return Object(a.useEffect)((function(){r.from(".Header",{y:-15,opacity:0,ease:v.b.easeOut,delay:.3},"Start"),r.from(".Aboutus-title",{y:-15,opacity:0,ease:v.b.easeOut,delay:.6},"Start").from(".Aboutus-desc",{y:-15,opacity:0,ease:v.b.easeOut}),Object(w.a)({targets:".Commitment-header",margin:"0px",action:function(t){e.isMobile()||e.isTablet()?k.a.from(t,{y:45,opacity:0,duration:.8,ease:v.b.easeOut}):k.a.from(t,{y:45,opacity:0,duration:.8,ease:v.b.easeOut,scrollTrigger:{toggleActions:"restart complete"}})}}),Object(w.a)({targets:".Commitment-right",margin:"0px",action:function(t){e.isMobile()||e.isTablet()?k.a.from(t,{y:30,opacity:0,duration:.9,ease:v.b.easeOut}):k.a.from(t,{x:60,opacity:0,duration:.9,ease:v.b.easeOut,scrollTrigger:{toggleActions:"restart complete"}})}}),Object(w.a)({targets:".Commitment-left",margin:"0px",action:function(t){e.isMobile()||e.isTablet()?k.a.from(t,{y:30,opacity:0,duration:.9,ease:v.b.easeOut}):k.a.from(t,{x:-60,opacity:0,duration:.9,ease:v.b.easeOut,scrollTrigger:{toggleActions:"restart complete"}})}})}),[]),Object(i.jsxs)("div",{className:"App",children:[Object(i.jsxs)("div",{className:"Header",children:[Object(i.jsx)(g,{isHamburgerOpen:c,hamburgerHandler:n}),Object(i.jsx)(x,{isHamburgerOpen:c,hamburgerHandler:n})]}),Object(i.jsxs)("div",{className:"Body",children:[Object(i.jsx)(N,{}),Object(i.jsx)(T,{})]})]})}),{mobileLimit:780,tabletLimit:1e3,shouldListenOnResize:!0}),S=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,74)).then((function(t){var s=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,n=t.getTTFB;s(e),i(e),a(e),c(e),n(e)}))};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(L,{})}),document.getElementById("root")),S()}},[[68,1,2]]]);
//# sourceMappingURL=main.241c5bf3.chunk.js.map