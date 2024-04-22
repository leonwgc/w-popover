import t,{useRef as e,useEffect as n,useState as r,useLayoutEffect as o,useImperativeHandle as i,useCallback as l,useMemo as c}from"react";import u from"react-dom";function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;arguments.length>e;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(){return d=Object.assign||function(t){for(var e=1;arguments.length>e;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},d.apply(this,arguments)}function m(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;i.length>r;r++)0>e.indexOf(n=i[r])&&(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;i.length>r;r++)0>e.indexOf(n=i[r])&&Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function v(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,i=[],l=!0,c=!1;try{for(n=n.call(t);!(l=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);l=!0);}catch(t){c=!0,o=t}finally{try{l||null==n.return||n.return()}finally{if(c)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);e>n;n++)r[n]=t[n];return r}function h(t){var e,n,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;t.length>e;e++)t[e]&&(n=h(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function g(){for(var t,e,n=0,r="";arguments.length>n;)(t=arguments[n++])&&(e=h(t))&&(r&&(r+=" "),r+=e);return r}var b=t.createElement("svg",d({viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},{width:"1em",height:"1em",fill:"currentColor"}),t.createElement("path",{d:"M240.512 180.181333l271.530667 271.488 271.530666-271.488a42.666667 42.666667 0 0 1 56.32-3.541333l4.010667 3.541333a42.666667 42.666667 0 0 1 0 60.330667l-271.530667 271.530667 271.530667 271.530666a42.666667 42.666667 0 0 1-56.32 63.872l-4.010667-3.541333-271.530666-271.530667-271.530667 271.530667-4.010667 3.541333a42.666667 42.666667 0 0 1-56.32-63.872l271.488-271.530666-271.488-271.530667a42.666667 42.666667 0 0 1 60.330667-60.330667z","p-id":"2884"})),w=function(e){return t.createElement("div",e,b)};function O(t){var n=e(t);return n.current=t,n}w.displayName="Close";var x=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],o=e(!1);n((function(){if(o.current)return t();o.current=!0}),r)},E=function(t){var e,n=t.current;return n instanceof HTMLElement?e=n:n.current?e=n.current:"function"==typeof n&&(e=n()),e},j=function(t,e,n){if("object"===s(e)&&e)for(var r=0,o=Object.keys(e);o.length>r;r++){var i=o[r];t.style[i]=e[i]}else"string"==typeof e&&(t.classList.add(e),"string"==typeof n&&n&&t.classList.contains(n)&&t.classList.remove(n))};function C(t,i,l,c){var u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:220,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,f=r(i),s=v(f,2),p=s[0],d=s[1],m=O(t),y=e(0),h=O(l),g=O(c);return o((function(){var t=E(m);i&&t instanceof Element&&(j(t,h.current,g.current),d(!0),y.current=window.setTimeout((function(){j(t,g.current,h.current)}),a))}),[i,p,h,g,m,a]),x((function(){if(!i&&p){var t=E(m);y.current=window.setTimeout((function(){j(t,h.current,g.current),y.current=window.setTimeout((function(){d(!1)}),u)}),a)}}),[i]),n((function(){return function(){y.current&&clearTimeout(y.current)}}),[]),p||i}var k=["children","visible","style","hideOverflow"],S=t.forwardRef((function(r,o){var l=r.children,c=r.visible,u=r.style,a=r.hideOverflow,s=void 0===a||a,p=m(r,k),v=e(null),y=e("");i(o,(function(){return v.current}));var h=C((function(){return v.current}),c,{opacity:0},{opacity:.5},300);return n((function(){return y.current=document.body.style.overflow,document.body.style.overflow=c&&s?"hidden":y.current,function(){document.body.style.overflow=y.current}}),[c,s]),h?t.createElement("div",d({ref:v},p,{style:f(f({},u),{},{opacity:0,background:"rgba(0, 0, 0)",zIndex:1e3,position:"fixed",left:0,top:0,bottom:0,right:0,width:"100%",touchAction:"none",display:h?"":"none",transition:"opacity 200ms linear"})}),l):null}));S.displayName="W-Mask";var N=!1;try{window&&window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){N={passive:!0}}}))}catch(t){}var P={bottom:"top",top:"bottom",left:"right",right:"left"},T=function(t){return P[t]};function L(t,e,r,o){var i=O(r),l=O(e),c=O(t),u=O(o);n((function(){var t=function(t,e){return t?"function"==typeof t?t():t&&"current"in t?t.current:t:e}(c.current,window);if(null==t?void 0:t.addEventListener){var e=function(t){var e;return null===(e=i.current)||void 0===e?void 0:e.call(i,t)},n=l.current,r=u.current;return t.addEventListener(n,e,r),function(){t.removeEventListener(n,e,r)}}}),[])}var D=function(t){if(""+t!="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t},M=function(t){return function(t){return(z(t)?t.ownerDocument:t.document)||window.document}(t).documentElement},A=function(t){return D(t).getComputedStyle(t)},I=function(t){return t?(t.nodeName||"").toLowerCase():""},_=function(t){return t&&"html"!==I(t)?t.assignedSlot||t.parentNode||M(t):t},z=function(t){return t instanceof D(t).Element||t instanceof Element},B=function(t){return t instanceof D(t).HTMLElement||t instanceof HTMLElement},H=function(t){return["table","td","th"].indexOf(I(t))>=0},R=function(t){return B(t)&&"fixed"!==A(t).position?t.offsetParent:null},V=function(t,e){var n=D(t);null==e||e(t);for(var r=R(t);r&&H(r)&&"static"===A(r).position;)null==e||e(r),r=R(r);return r||function(t,e){null==e||e(t);for(var n=_(t);B(n)&&0>["html","body"].indexOf(I(n));){null==e||e(n);var r=A(n);if("none"!==r.transform||"none"!==r.perspective||r.willChange&&"auto"!==r.willChange)return n;n=_(n)}return n}(t,e)||n},W=function(t){var e=0;return V(t,(function(t){e+=t.offsetTop})),e},F=/scroll|auto|overlay/i;function Y(t){return"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType}function U(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window,n=t;n&&n!==e&&Y(n);){var r=window.getComputedStyle(n),o=r.overflowY;if(F.test(o))return n;n=n.parentNode}return e}var $=["placement","content","arrow","visible","closable","onVisibleChange","onClose","className","style","children","mask","maskStyle","maskClass","closeOnClickOutside","closeOnMaskClick","transition","transitionDuration","offset"],q={opacity:0,transform:"scale(0)"},G={opacity:1,transform:"scale(1)"},J=function(n){var i=n.placement,a=void 0===i?"bottom":i,s=n.content,y=n.arrow,h=void 0===y||y,b=n.visible,E=n.closable,k=n.onVisibleChange,P=n.onClose,D=n.className,M=n.style,_=n.children,z=n.mask,B=n.maskStyle,H=n.maskClass,R=n.closeOnClickOutside,V=void 0===R||R,F=n.closeOnMaskClick,Y=void 0===F||F,J=n.transition,K=void 0===J||J,Q=n.transitionDuration,X=void 0===Q?200:Q,Z=n.offset,tt=void 0===Z?{}:Z,et=m(n,$),nt=e(),rt=e(null),ot=O(tt),it=O(P),lt=v(r({}),2),ct=lt[0],ut=lt[1],at=e(!1),ft=t.useCallback((function(t,e){var n=rt.current;j(n,{transitionProperty:"none",transform:"none"});var r=function(t,e,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"bottom",i=arguments.length>5?arguments[5]:void 0,l=t.getBoundingClientRect(),c=e.getBoundingClientRect(),u=n.getBoundingClientRect(),a="body"===I(n),f=A(e).position,s="fixed"===f,p=r instanceof Element?r.scrollTop:r.pageYOffset,d="fixed"===f||r instanceof Element,m=d?c.top:a?c.top+p:W(e),v=c.height+m,y=c.left-(d?0:u.left),h=c.width,g=c.height,b={x:i.x||0,y:i.y||0},w={top:{top:m-l.height-12,left:y+h/2-l.width/2},bottom:{top:v+12,left:y+h/2-l.width/2},left:{top:m+g/2-l.height/2,left:y-l.width-12},right:{top:m+g/2-l.height/2,left:y+h+12},"top-right":{top:m-l.height-12,left:y+h-l.width},"top-left":{top:m-l.height-12,left:y},"bottom-right":{top:v+12,left:y+h-l.width},"bottom-left":{top:v+12,left:y},"right-top":{top:m,left:y+h+12},"left-top":{top:m,left:y-l.width-12},"right-bottom":{top:v-l.height,left:y+h+12},"left-bottom":{top:v-l.height,left:y-l.width-12}}[o];return{position:s?"fixed":"absolute",top:w.top+b.y,left:w.left+b.x}}(n,t,document.body,e,a,ot.current),o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bottom",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:12,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:6,o=t.getBoundingClientRect(),i=v(e.split("-"),2),l=i[0],c=i[1],u=p({boxShadow:{top:"1px 1px 1px 0px rgba(0, 0, 0, 0.05)",right:"-1px 1px 1px 0px rgba(0, 0, 0, 0.05)",bottom:"-1px -1px 1px 0px rgba(0, 0, 0, 0.05)",left:"1px -1px 1px 0px rgba(0, 0, 0, 0.05)"}[l]},T(l),-r/2);if(c)return f(p({},c,2*n),u);var a={};return["bottom","top"].includes(l)&&(a.right=(o.width-r)/2),["left","right"].includes(l)&&(a.top=(o.height-r)/2),f(f({},a),u)}(n,a,12);j(n,{top:r.top+"px",left:r.left+"px",position:r.position}),K&&!at.current&&(at.current=!0,j(n,q),n.__oh__=n.offsetHeight,j(n,{transitionProperty:"transform, opacity"})),ut(o)}),[K,a,ot]),st=function(){var t=nt.current,e=U(t);ft(t,e)},pt=l((function(t){var e,n=rt.current,r=nt.current;!n||n.contains(t.target)||r.contains(t.target)||(null===(e=it.current)||void 0===e||e.call(it))}),[it]);L((function(){return window}),"resize",b?st:void 0,N),L((function(){return U(nt.current)}),"scroll",b?st:void 0,N),L((function(){return document}),"click",V?pt:void 0),o((function(){var t=nt.current,e=U(t);b&&ft(t,e)}),[ft,b]);var dt=c((function(){return function(t){var e=t.split("-"),n="";return e[0]&&(n+=T(e[0])),e[1]&&(n+=" "+e[1]),n}(a)}),[a]),mt=C((function(){return K?rt.current:null}),b,q,G,X);return x((function(){null==k||k(b),b||(at.current=!1)}),[b]),t.createElement(t.Fragment,null,t.createElement(S,{visible:z&&b,className:H,style:B,onClick:function(){Y&&(null==P||P())}}),t.cloneElement(_,{ref:nt}),u.createPortal(t.createElement(t.Fragment,null,(K&&mt||!K&&b)&&t.createElement("div",d({},et,{ref:rt,className:g(D,"w-popover"),style:f({position:"absolute",background:"#fff",zIndex:1e3,transformOrigin:dt,transitionDuration:"".concat(X,"ms"),willChange:K?"transform, opacity":"unset"},M)}),h&&t.createElement("div",{className:g("w-popover__arrow"),style:f({position:"absolute",width:6,height:6,zIndex:-1,background:"inherit",transform:"rotate(45deg)"},ct)}),E&&t.createElement(w,{className:g("w-popover__close"),onClick:P,style:{position:"absolute",zIndex:10,top:6,right:6,cursor:"pointer",color:"rgb(0,0,0)",opacity:.35,display:"flex",alignItems:"center",justifyContent:"center"}}),s)),document.body))};J.displayName="W-Popover";var K=["hoverDelay","placement","arrow","offset","className","style","children"],Q=function(n){var o=n.hoverDelay,i=void 0===o?100:o,l=n.placement,c=void 0===l?"top":l,u=n.arrow,a=void 0===u||u,s=n.offset,p=n.className,y=n.style,h=n.children,g=m(n,K),b=e(0),w=v(r(!1),2),O=w[0],x=w[1],E={onMouseEnter:function(){b.current&&clearTimeout(b.current),x(!0)},onMouseLeave:function(){b.current=window.setTimeout((function(){x(!1)}),i)},onFocus:function(){b.current&&clearTimeout(b.current),x(!0)}};return t.createElement(J,d({},g,{className:"w-tooltip ".concat(p),style:f({background:"#333",color:"#fff",padding:"6px 12px"},y),visible:O,arrow:a,placement:c,offset:s},E),t.isValidElement(h)?t.cloneElement(h,f({},E)):t.createElement("span",E,h))};Q.displayName="W-Tooltip";export default J;export{J as Popover,Q as Tooltip};
