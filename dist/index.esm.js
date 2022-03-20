import t,{useLayoutEffect as e,useState as n,useEffect as o,useRef as r,useCallback as i}from"react";import l from"react-dom";import{useSpring as a,animated as c,easings as u}from"@react-spring/web";function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function s(t){for(var e=1;arguments.length>e;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(){return d=Object.assign||function(t){for(var e=1;arguments.length>e;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},d.apply(this,arguments)}function m(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;i.length>o;o++)0>e.indexOf(n=i[o])&&(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;i.length>o;o++)0>e.indexOf(n=i[o])&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function h(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var o,r,i=[],l=!0,a=!1;try{for(n=n.call(t);!(l=(o=n.next()).done)&&(i.push(o.value),!e||i.length!==e);l=!0);}catch(t){a=!0,r=t}finally{try{l||null==n.return||n.return()}finally{if(a)throw r}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=Array(e);e>n;n++)o[n]=t[n];return o}var g=function(t){if(""+t!="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t},b=function(t){return function(t){return(O(t)?t.ownerDocument:t.document)||window.document}(t).documentElement},y=function(t){return g(t).getComputedStyle(t)},w=function(t){return t?(t.nodeName||"").toLowerCase():""},x=function(t){return t&&"html"!==w(t)?t.assignedSlot||t.parentNode||b(t):t},O=function(t){return t instanceof g(t).Element||t instanceof Element},C=function(t){return t instanceof g(t).HTMLElement||t instanceof HTMLElement},E=function(t){return["table","td","th"].indexOf(w(t))>=0},j=function(t){return C(t)&&"fixed"!==y(t).position?t.offsetParent:null},k=function(t,e){var n=g(t);null==e||e(t);for(var o=j(t);o&&E(o)&&"static"===y(o).position;)null==e||e(o),o=j(o);return o||function(t,e){null==e||e(t);for(var n=x(t);C(n)&&0>["html","body"].indexOf(w(n));){null==e||e(n);var o=y(n);if("none"!==o.transform||"none"!==o.perspective||o.willChange&&"auto"!==o.willChange)return n;n=x(n)}return n}(t,e)||n},N=function(t){var e=0;return k(t,(function(t){e+=t.offsetTop})),e},S=function(t){return{bottom:"top",top:"bottom",left:"right",right:"left"}[t]};function P(t){var e,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;t.length>e;e++)t[e]&&(n=P(t[e]))&&(o&&(o+=" "),o+=n);else for(e in t)t[e]&&(o&&(o+=" "),o+=e);return o}function A(){for(var t,e,n=0,o="";arguments.length>n;)(t=arguments[n++])&&(e=P(t))&&(o&&(o+=" "),o+=e);return o}function M(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}M(".uc-mask {\n  background-color: rgba(0, 0, 0);\n  z-index: 100;\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  touch-action: none;\n}\n");var z=["children","className","visible","duration","style","hideOverflow"],B=t.forwardRef((function(r,i){var l,u=r.children,f=r.className,p=r.visible,v=r.duration,g=void 0===v?280:v,b=r.style,y=r.hideOverflow,w=void 0===y||y,x=m(r,z),O=h(n(p),2),C=O[0],E=O[1],j=a({opacity:p?.45:0,onStart:function(){E(!0)},onRest:function(){},config:{duration:g}});return o((function(){document.body.style.overflow=p&&w?"hidden":""}),[p,w]),l=function(){document.body.style.overflow=""},e((function(){return function(){null==l||l()}}),[]),C||p?t.createElement(c.div,d({ref:i},x,{className:A("uc-mask",f),style:s(s({},j),b)}),u):null}));B.displayName="UC-Mask";var R=t.createElement("svg",d({viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},{width:"1em",height:"1em",fill:"currentColor"}),t.createElement("path",{d:"M240.512 180.181333l271.530667 271.488 271.530666-271.488a42.666667 42.666667 0 0 1 56.32-3.541333l4.010667 3.541333a42.666667 42.666667 0 0 1 0 60.330667l-271.530667 271.530667 271.530667 271.530666a42.666667 42.666667 0 0 1-56.32 63.872l-4.010667-3.541333-271.530666-271.530667-271.530667 271.530667-4.010667 3.541333a42.666667 42.666667 0 0 1-56.32-63.872l271.488-271.530666-271.488-271.530667a42.666667 42.666667 0 0 1 60.330667-60.330667z","p-id":"2884"})),L=function(e){return t.createElement("span",e,R)};L.displayName="Close";M(".uc-popover {\n  position: absolute;\n  z-index: 1000;\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n}\n.uc-popover .uc-popover-close {\n  position: absolute;\n  z-index: 10;\n  top: 6px;\n  right: 6px;\n  cursor: pointer;\n  color: #000;\n  opacity: 0.35;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.uc-popover .uc-popover-close :hover {\n  opacity: 0.75;\n}\n.uc-popover .uc-popover-arrow {\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  z-index: -1;\n  background: inherit;\n  transform: rotate(45deg);\n}\n");var T=["left","top","anchor","placement","style"],D=function(){},I=D,H=function(t){return"[object Number]"===Object.prototype.toString.call(t)&&t==t},F=["placement","content","arrow","visible","closable","onVisibleChange","onClose","className","style","children","mask","maskStyle","maskClass","mountContainer","closeOnClickOutside","closeOnMaskClick","animate","offset"],V=function(t,e){var n=t;for(var o in e)e.hasOwnProperty(o)&&(n[o]=e[o]);return n}((function(e){var f,v,g=e.placement,O=void 0===g?"bottom":g,E=e.content,j=e.arrow,k=void 0===j||j,P=e.visible,M=e.closable,z=e.onVisibleChange,R=e.onClose,T=e.className,D=e.style,I=e.children,H=e.mask,V=e.maskStyle,q=e.maskClass,U=e.mountContainer,Y=e.closeOnClickOutside,Q=void 0===Y||Y,W=e.closeOnMaskClick,$=void 0===W||W,G=e.animate,J=void 0===G||G,K=e.offset,X=void 0===K?{}:K,Z=m(e,F),_=r(),tt=r(null),et=r(0),nt=r(X),ot=(v=r(f=R),o((function(){v.current=f}),[f]),v),rt=h(n({}),2),it=rt[0],lt=rt[1],at=h(n({}),2),ct=at[0],ut=at[1],ft=h(n(P),2),st=ft[0],pt=ft[1],dt=(null==U?void 0:U())||document.body;o((function(){nt.current=X}),[X]),function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=r(!1);o((function(){if(n.current)return t();n.current=!0}),e)}((function(){null==z||z(P)}),[P]),o((function(){var t=_.current,e=function(t,e){for(var n=x(t);C(n)&&0>["html","body"].indexOf(w(n));){var o=y(n).overflowY,r="visible"!==o&&"hidden"!==o;if(null==e||e(n),r&&n.scrollHeight>n.clientHeight)return n;n=n.parentNode}return b(t)}(t),n=function(t,e){var n=tt.current,o=function(t,e,n,o){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"bottom",i=arguments.length>5?arguments[5]:void 0,l=t.getBoundingClientRect(),a=e.getBoundingClientRect(),c=n.getBoundingClientRect(),u="body"===w(n),f="fixed"===y(e).position,s=f?a.top:u?a.top+window.pageYOffset:N(e),p=a.height+s,d=a.left-(f?0:c.left),m=a.width,h=a.height,v={x:i.x||0,y:i.y||0},g={top:{top:s-l.height-12,left:d+m/2-l.width/2},bottom:{top:p+12,left:d+m/2-l.width/2},left:{top:s+h/2-l.height/2,left:d-l.width-12},right:{top:s+h/2-l.height/2,left:d+m+12},"top-right":{top:s-l.height-12,left:d+m-l.width},"top-left":{top:s-l.height-12,left:d},"bottom-right":{top:p+12,left:d+m-l.width},"bottom-left":{top:p+12,left:d},"right-top":{top:s,left:d+m+12},"left-top":{top:s,left:d-l.width-12},"right-bottom":{top:p-l.height,left:d+m+12},"left-bottom":{top:p-l.height,left:d-l.width-12}}[r];return{position:f?"fixed":"absolute",top:Math.max(g.top+v.y,0),left:Math.max(g.left+v.x,0)}}(n,t,document.body,e,O,nt.current),r=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bottom",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:12,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:6,i=t.getBoundingClientRect(),l=h(e.split("-"),2),a=l[0],c=l[1],u={top:"1px 1px 1px 0px rgba(0, 0, 0, 0.05)",right:"-1px 1px 1px 0px rgba(0, 0, 0, 0.05)",bottom:"-1px -1px 1px 0px rgba(0, 0, 0, 0.05)",left:"1px -1px 1px 0px rgba(0, 0, 0, 0.05)"},f=p({boxShadow:n?"none":u[a]},S(a),-r/2);if(c)return s(p({},c,2*o),f);var d={};return["bottom","top"].includes(a)&&(d.right=(i.width-r)/2),["left","right"].includes(a)&&(d.top=(i.height-r)/2),s(s({},d),f)}(n,O,H,12);lt(o),ut(r)},o=function(){et.current&&window.cancelAnimationFrame(et.current),et.current=window.requestAnimationFrame((function(){n(t,e)}))};if(P)return n(t,e),window.addEventListener("resize",o),function(){window.removeEventListener("resize",o)}}),[P,O,H]);var mt=i((function(t){var e,n=tt.current,o=_.current;!n||n.contains(t.target)||o.contains(t.target)||(null===(e=ot.current)||void 0===e||e.call(ot))}),[ot]);o((function(){if(Q)return window.addEventListener("click",mt,!1),function(){window.removeEventListener("click",mt,!1)}}),[Q,mt]);var ht=a({translate:P?0:10,opacity:P?1:0,onStart:function(){pt(!0)},onRest:function(){pt(P)},immediate:!J,config:{duration:220,easing:u.easeInOutQuart}}),vt=ht.translate,gt=ht.opacity;return t.createElement(t.Fragment,null,t.cloneElement(I,{ref:_}),l.createPortal((P||st)&&t.createElement("div",{className:A("uc-popover-wrap")},t.createElement(B,{visible:H&&P,className:q,style:V,onClick:function(){$&&(null==R||R())}}),t.createElement(c.div,d({},Z,{ref:tt,className:A(T,"uc-popover",{mask:H}),style:s(s(s({},it),D),{},{opacity:gt,transform:vt.to((function(t){var e=O.split("-")[0];return"bottom"===e?"translate(0, -".concat(t,"%)"):"top"===e?"translate(0, ".concat(t,"%)"):"left"===e?"translate(".concat(t,"%, 0)"):"right"===e?"translate(-".concat(t,"%, 0)"):"none"}))})}),k&&t.createElement("span",{className:A("uc-popover-arrow"),style:ct}),M&&t.createElement(L,{className:A("uc-popover-close"),onClick:R}),t.createElement("div",{className:A("uc-popover-content")},E))),dt))}),{show:function(e){var n,o=e.left,r=e.top,i=e.anchor,a=e.placement,c=void 0===a?"top":a,u=e.style,f=m(e,T),p=document.createElement("div");I&&(null===(n=I)||void 0===n||n());var h=0,v=0;if(!H(o)||!H(r)){if(!i)throw Error("no anchor / left,top");if("string"==typeof i?i=document.querySelector(i):"current"in i&&(i=i.current),!(i instanceof Element))throw Error("no anchor found");var g=i.getBoundingClientRect();o=g.left,r=g.top,h=g.width,v=g.height}var b=function(t,e){var n=e||document.createElement("div");document.body.appendChild(n),l.render(t,n);var o=function(){l.unmountComponentAtNode(n),n&&n.parentNode&&n.parentNode.removeChild(n)};return function(t){"function"==typeof t?t().then(o):o()}}(t.createElement(V,d({closeOnClickOutside:!1,onClose:function(){return b()},visible:!0,style:s({padding:20},u),placement:c},f),t.createElement("span",{style:{position:"fixed",left:o,top:r,width:h,height:v,visibility:"hidden",pointerEvents:"none"},className:"uc-popover-anchor"})),p);return I=b,b},hide:I||D});export default V;
