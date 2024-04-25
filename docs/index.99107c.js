"use strict";(self.webpackChunkw_popover=self.webpackChunkw_popover||[]).push([[57],{156:(t,e,n)=>{var r=n(540),o=n(961),i=n(75),c=n(168),l=n(467),a=n(986),u=r.createElement("svg",(0,c.A)({viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},{width:"1em",height:"1em",fill:"currentColor"}),r.createElement("path",{d:"M240.512 180.181333l271.530667 271.488 271.530666-271.488a42.666667 42.666667 0 0 1 56.32-3.541333l4.010667 3.541333a42.666667 42.666667 0 0 1 0 60.330667l-271.530667 271.530667 271.530667 271.530666a42.666667 42.666667 0 0 1-56.32 63.872l-4.010667-3.541333-271.530666-271.530667-271.530667 271.530667-4.010667 3.541333a42.666667 42.666667 0 0 1-56.32-63.872l271.488-271.530666-271.488-271.530667a42.666667 42.666667 0 0 1 60.330667-60.330667z","p-id":"2884"})),s=function(t){return r.createElement("div",t,u)};s.displayName="Close";const f=s;function p(t){var e=(0,r.useRef)(t);return e.current=t,e}const d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=(0,r.useRef)(!1);(0,r.useEffect)((function(){if(n.current)return t();n.current=!0}),e)};var m=n(284),b=function(t){var e,n=t.current;return n instanceof HTMLElement?e=n:n.current?e=n.current:"function"==typeof n&&(e=n()),e},v=function(t,e,n){if("object"===(0,m.A)(e)&&e)for(var r=0,o=Object.keys(e);r<o.length;r++){var i=o[r];t.style[i]=e[i]}else"string"==typeof e&&(t.classList.add(e),"string"==typeof n&&n&&t.classList.contains(n)&&t.classList.remove(n))},h=!("undefined"==typeof window||!window),g=!1;try{window&&window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){g={passive:!0}}}))}catch(t){}const y=h?r.useLayoutEffect:r.useEffect;var w=y;function O(t,e,n,o){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:220,l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,a=(0,r.useState)(e),u=(0,i.A)(a,2),s=u[0],f=u[1],m=p(t),h=(0,r.useRef)(0),g=p(n),y=p(o);return w((function(){var t=b(m);e&&t instanceof Element&&(v(t,g.current,y.current),f(!0),h.current=window.setTimeout((function(){v(t,y.current,g.current)}),l))}),[e,s,g,y,m,l]),d((function(){if(!e&&s){var t=b(m);h.current=window.setTimeout((function(){v(t,g.current,y.current),h.current=window.setTimeout((function(){f(!1)}),c)}),l)}}),[e]),(0,r.useEffect)((function(){return function(){h.current&&clearTimeout(h.current)}}),[]),s||e}var E=["children","visible","style","duration","hideOverflow"];function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function k(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(Object(n),!0).forEach((function(e){(0,l.A)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var x=r.forwardRef((function(t,e){var n=t.children,o=t.visible,i=t.style,l=t.duration,u=void 0===l?220:l,s=t.hideOverflow,f=void 0===s||s,p=(0,a.A)(t,E),d=(0,r.useRef)(null),m=(0,r.useRef)("");(0,r.useImperativeHandle)(e,(function(){return d.current}));var b=O((function(){return d.current}),o,{opacity:0},{opacity:.5},u);return(0,r.useEffect)((function(){return m.current=document.body.style.overflow,document.body.style.overflow=o&&f?"hidden":m.current,function(){document.body.style.overflow=m.current}}),[o,f]),b?r.createElement("div",(0,c.A)({ref:d},p,{style:k(k({},i),{},{opacity:0,background:"rgba(0, 0, 0)",zIndex:1e3,position:"fixed",left:0,top:0,bottom:0,right:0,width:"100%",touchAction:"none",display:b?"":"none",transition:"opacity ".concat(u,"ms ease-in-out")})}),n):null}));x.displayName="W-Mask";const P=x;var C={bottom:"top",top:"bottom",left:"right",right:"left"},N=function(t){return C[t]};const T=N;function A(t,e,n,o){var i=p(n),c=p(e),l=p(t),a=p(o);(0,r.useEffect)((function(){var t=function(t,e){return t?"function"==typeof t?t():t&&"current"in t?t.current:t:e}(l.current,window);if(null!=t&&t.addEventListener){var e=function(t){var e;return null===(e=i.current)||void 0===e?void 0:e.call(i,t)},n=c.current,r=a.current;return t.addEventListener(n,e,r),function(){t.removeEventListener(n,e,r)}}}),[])}var D=function(t){if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t},S=function(t){return D(t).getComputedStyle(t)},R=function(t){return t?(t.nodeName||"").toLowerCase():""},L=function(t){return t&&"html"!==R(t)?t.assignedSlot||t.parentNode||function(t){return function(t){return(M(t)?t.ownerDocument:t.document)||window.document}(t).documentElement}(t):t},M=function(t){return t instanceof D(t).Element||t instanceof Element},_=function(t){return t instanceof D(t).HTMLElement||t instanceof HTMLElement},I=function(t){return["table","td","th"].indexOf(R(t))>=0},z=function(t){return _(t)&&"fixed"!==S(t).position?t.offsetParent:null},B=12,F=function(t,e,n,r){var o,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"bottom",c=arguments.length>5?arguments[5]:void 0,l=t.getBoundingClientRect(),a=e.getBoundingClientRect(),u=n.getBoundingClientRect(),s="body"===R(n),f=S(e).position,p="fixed"===f,d=r instanceof Element?r.scrollTop:r.pageYOffset,m="fixed"===f||r instanceof Element,b=m?a.top:s?a.top+d:(o=0,function(t,e){var n=D(t);null==e||e(t);for(var r=z(t);r&&I(r)&&"static"===S(r).position;)null==e||e(r),r=z(r);r||function(t,e){null==e||e(t);for(var n=L(t);_(n)&&["html","body"].indexOf(R(n))<0;){null==e||e(n);var r=S(n);if("none"!==r.transform||"none"!==r.perspective||r.willChange&&"auto"!==r.willChange)return n;n=L(n)}}(t,e)}(e,(function(t){o+=t.offsetTop})),o),v=b,h=a.height+b,g=a.left-(m?0:u.left),y=a.width,w=a.height,O={top:{top:v-l.height-B,left:g+y/2-l.width/2},bottom:{top:h+B,left:g+y/2-l.width/2},left:{top:v+w/2-l.height/2,left:g-l.width-B},right:{top:v+w/2-l.height/2,left:g+y+B},"top-right":{top:v-l.height-B,left:g+y-l.width},"top-left":{top:v-l.height-B,left:g},"bottom-right":{top:h+B,left:g+y-l.width},"bottom-left":{top:h+B,left:g},"right-top":{top:v,left:g+y+B},"left-top":{top:v,left:g-l.width-B},"right-bottom":{top:h-l.height,left:g+y+B},"left-bottom":{top:h-l.height,left:g-l.width-B}},E=c.x||0,j=c.y||0,k=O[i];return{position:p?"fixed":"absolute",top:k.top+j,left:k.left+E}};function H(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function V(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?H(Object(n),!0).forEach((function(e){(0,l.A)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var W=/scroll|auto|overlay/i,Y=1;function q(t){return"HTML"!==t.tagName&&"BODY"!==t.tagName&&t.nodeType===Y}function G(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window,n=t;n&&n!==e&&q(n);){var r=window.getComputedStyle(n).overflowY;if(W.test(r))return n;n=n.parentNode}return e}var J=["placement","content","arrow","visible","closable","onVisibleChange","onClose","className","style","children","mask","maskStyle","maskClass","closeOnClickOutside","closeOnMaskClick","transition","transitionDuration","transitionTimingFunction","offset"];function K(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Q(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?K(Object(n),!0).forEach((function(e){(0,l.A)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var U=y,X={opacity:0,transform:"scale(0)"},Z={opacity:1,transform:"scale(1)"},$="transform, opacity",tt=function(t){var e=t.placement,n=void 0===e?"bottom":e,u=t.content,s=t.arrow,m=void 0===s||s,b=t.visible,y=t.closable,w=t.onVisibleChange,E=t.onClose,j=t.className,k=t.style,x=t.children,C=t.mask,D=t.maskStyle,S=t.maskClass,R=t.closeOnClickOutside,L=void 0===R||R,M=t.closeOnMaskClick,_=void 0===M||M,I=t.transition,z=void 0===I||I,H=t.transitionDuration,W=void 0===H?220:H,Y=t.transitionTimingFunction,q=void 0===Y?"ease-in-out":Y,K=t.offset,tt=void 0===K?{}:K,et=(0,a.A)(t,J),nt=(0,r.useRef)(),rt=(0,r.useRef)(null),ot=p(tt),it=p(E),ct=(0,r.useState)({}),lt=(0,i.A)(ct,2),at=lt[0],ut=lt[1],st=(0,r.useRef)(!1),ft=r.useCallback((function(t,e){var r=rt.current;v(r,{transitionProperty:"none",transform:"none"});var o=F(r,t,document.body,e,n,ot.current),c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bottom",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:12,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:6,o=t.getBoundingClientRect(),c=e.split("-"),a=(0,i.A)(c,2),u=a[0],s=a[1],f=(0,l.A)({boxShadow:{top:"1px 1px 1px 0px rgba(0, 0, 0, 0.05)",right:"-1px 1px 1px 0px rgba(0, 0, 0, 0.05)",bottom:"-1px -1px 1px 0px rgba(0, 0, 0, 0.05)",left:"1px -1px 1px 0px rgba(0, 0, 0, 0.05)"}[u]},N(u),-r/2);if(s)return V((0,l.A)({},s,2*n),f);var p={};return["bottom","top"].includes(u)&&(p.right=(o.width-r)/2),["left","right"].includes(u)&&(p.top=(o.height-r)/2),V(V({},p),f)}(r,n,B);v(r,{top:o.top+"px",left:o.left+"px",position:o.position}),z&&!st.current&&(st.current=!0,v(r,X),r.scrollTop,v(r,{transitionProperty:$})),ut(c)}),[z,n,ot]),pt=function(){var t=nt.current,e=G(t);ft(t,e)},dt=(0,r.useCallback)((function(t){var e,n=rt.current,r=nt.current;!n||n.contains(t.target)||r.contains(t.target)||null===(e=it.current)||void 0===e||e.call(it)}),[it]);A((function(){return window}),"resize",b?pt:void 0,g),A((function(){return G(nt.current)}),"scroll",b?pt:void 0,g),A((function(){return document}),"click",L?dt:void 0),U((function(){var t=nt.current,e=G(t);b&&ft(t,e)}),[ft,b]);var mt=(0,r.useMemo)((function(){return function(t){var e=t.split("-"),n="";return e[0]&&(n+=T(e[0])),e[1]&&(n+=" "+e[1]),n}(n)}),[n]),bt=O((function(){return z?rt.current:null}),b,X,Z,W);return d((function(){null==w||w(b),b||(st.current=!1)}),[b]),r.createElement(r.Fragment,null,r.createElement(P,{visible:C&&b,className:S,style:D,duration:W,onClick:function(){_&&(null==E||E())}}),r.cloneElement(x,{ref:nt}),h&&o.createPortal(r.createElement(r.Fragment,null,(z&&bt||!z&&b)&&r.createElement("div",(0,c.A)({},et,{ref:rt,className:"w-popover ".concat(j||""),style:Q({position:"absolute",background:"#fff",zIndex:1e3,transformOrigin:mt,transitionTimingFunction:q,transitionDuration:"".concat(W,"ms"),willChange:z?$:"unset"},k)}),m&&r.createElement("div",{className:"w-popover__arrow",style:Q({position:"absolute",width:6,height:6,zIndex:-1,background:"inherit",transform:"rotate(45deg)"},at)}),y&&r.createElement(f,{className:"w-popover__close",onClick:E,style:{position:"absolute",zIndex:10,top:6,right:6,cursor:"pointer",color:"rgb(0,0,0)",opacity:.35,display:"flex",alignItems:"center",justifyContent:"center"}}),u)),document.body))};tt.displayName="W-Popover";const et=tt;var nt=["hoverDelay","placement","arrow","offset","className","style","children"];function rt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function ot(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?rt(Object(n),!0).forEach((function(e){(0,l.A)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):rt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var it=function(t){var e=t.hoverDelay,n=void 0===e?100:e,o=t.placement,l=void 0===o?"top":o,u=t.arrow,s=void 0===u||u,f=t.offset,p=t.className,d=t.style,m=t.children,b=(0,a.A)(t,nt),v=(0,r.useRef)(0),h=(0,r.useState)(!1),g=(0,i.A)(h,2),y=g[0],w=g[1],O={onMouseEnter:function(){v.current&&clearTimeout(v.current),w(!0)},onMouseLeave:function(){v.current=window.setTimeout((function(){w(!1)}),n)},onFocus:function(){v.current&&clearTimeout(v.current),w(!0)}};return r.createElement(et,(0,c.A)({},b,{className:"w-tooltip ".concat(p),style:ot({background:"#333",color:"#fff",padding:"6px 12px"},d),visible:y,arrow:s,placement:l,offset:f},O),r.isValidElement(m)?r.cloneElement(m,ot({},O)):r.createElement("span",O,m))};it.displayName="W-Tooltip";const ct=it;var lt=["title","padding","background","border","height","children"];function at(t){var e=t.title,n=void 0===e?"":e,o=t.padding,i=void 0===o?"12px":o,l=t.background,u=void 0===l?"#fff":l,s=t.border,f=t.height,p=t.children,d=(0,a.A)(t,lt);return r.createElement("div",(0,c.A)({className:"demo-block"},d),r.createElement("div",{className:"demo-block__title"},n),r.createElement("div",{className:"demo-block__content",style:{padding:i,background:u,border:s,height:f}},p))}var ut=["top","top-left","top-right","left","left-top","left-bottom","bottom","bottom-left","bottom-right","right","right-top","right-bottom"];function st(){var t=(0,r.useState)(!0),e=(0,i.A)(t,2),n=e[0],o=e[1],c=(0,r.useReducer)((function(t){return t+1}),0),l=(0,i.A)(c,2)[1],a=(0,r.useRef)(0);return r.createElement("div",null,r.createElement(at,{title:"Popover",padding:40},r.createElement(et,{style:{background:"#666",color:"#fff",padding:"12px 24px"},placement:ut[a.current],visible:n,onClose:function(){return o(!1)},content:ut[a.current]},r.createElement("button",{className:"w-button",style:{height:60,width:120},onClick:function(){o(!0),a.current++,a.current>11&&(a.current=0),l()}},"Try to click me"))),r.createElement(at,{title:"Tooltip"},r.createElement("div",{style:{display:"flex",gap:8}},r.createElement(ct,{content:"This's a tooltip ",placement:"top"},r.createElement("button",{className:"w-button"},"Tooltip at top")),r.createElement(ct,{content:"This's a tooltip ",placement:"bottom"},r.createElement("button",{className:"w-button"},"Tooltip at bottom")),r.createElement(ct,{content:"This's a tooltip ",placement:"right"},r.createElement("button",{className:"w-button"},"Tooltip at right")))),r.createElement(at,{title:"Scroll (the green block is scrollable)"},r.createElement("div",{style:{height:200,width:"100%",border:"1px solid #ccc",textAlign:"center",overflowY:"scroll",position:"relative"}},r.createElement("div",{style:{height:"120vh",background:"#ccc"}},r.createElement(et,{placement:"bottom",visible:!0,content:"I'm here ",style:{padding:6}},r.createElement("button",{className:"w-button",onClick:function(){return o(!0)}},"hi, there~")),r.createElement(et,{placement:"bottom",visible:!0,content:"I'm here abs",style:{padding:6}},r.createElement("button",{className:"w-button",onClick:function(){return o(!0)},style:{position:"absolute",left:50,top:50}},"hi, here~")),r.createElement(et,{placement:"right",visible:!0,content:"I'm here fixed",style:{padding:6,background:"#666",color:"#fff"}},r.createElement("button",{className:"w-button",style:{position:"fixed",bottom:100,left:150}},"hi, there~"))))),r.createElement("div",{style:{height:"110vh"}}))}var ft=document.querySelector("#root");(ft.hasChildNodes()?o.hydrate:o.render)(r.createElement(st,null),ft)}},t=>{t.O(0,[502],(()=>(156,t(t.s=156)))),t.O()}]);