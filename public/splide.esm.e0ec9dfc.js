("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire7fe7.register("3QJKV",(function(n,t){var e,i,r,o;function u(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}e=n.exports,i="default",r=function(){return Zt},Object.defineProperty(e,i,{get:r,set:o,enumerable:!0,configurable:!0});
/*!
 * Splide.js
 * Version  : 4.0.7
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */
var a="(prefers-reduced-motion: reduce)",s={CREATED:1,MOUNTED:2,IDLE:3,MOVING:4,SCROLLING:5,DRAGGING:6,DESTROYED:7};function c(n){n.length=0}function l(n,t,e){return Array.prototype.slice.call(n,t,e)}function f(n){return n.bind.apply(n,[null].concat(l(arguments,1)))}var d=setTimeout,p=function(){};function v(n){return requestAnimationFrame(n)}function g(n,t){return typeof t===n}function h(n){return!_(n)&&g("object",n)}var m=Array.isArray,y=f(g,"function"),b=f(g,"string"),w=f(g,"undefined");function _(n){return null===n}function E(n){return n instanceof HTMLElement}function S(n){return m(n)?n:[n]}function x(n,t){S(n).forEach(t)}function C(n,t){return n.indexOf(t)>-1}function P(n,t){return n.push.apply(n,S(t)),n}function k(n,t,e){n&&x(t,(function(t){t&&n.classList[e?"add":"remove"](t)}))}function L(n,t){k(n,b(t)?t.split(" "):t,!0)}function A(n,t){x(t,n.appendChild.bind(n))}function D(n,t){x(n,(function(n){var e=(t||n).parentNode;e&&e.insertBefore(n,t)}))}function M(n,t){return E(n)&&(n.msMatchesSelector||n.matches).call(n,t)}function z(n,t){var e=n?l(n.children):[];return t?e.filter((function(n){return M(n,t)})):e}function N(n,t){return t?z(n,t)[0]:n.firstElementChild}var O=Object.keys;function T(n,t,e){if(n){var i=O(n);i=e?i.reverse():i;for(var r=0;r<i.length;r++){var o=i[r];if("__proto__"!==o&&!1===t(n[o],o))break}}return n}function I(n){return l(arguments,1).forEach((function(t){T(t,(function(e,i){n[i]=t[i]}))})),n}function F(n){return l(arguments,1).forEach((function(t){T(t,(function(t,e){m(t)?n[e]=t.slice():h(t)?n[e]=F({},h(n[e])?n[e]:{},t):n[e]=t}))})),n}function j(n,t){S(t||O(n)).forEach((function(t){delete n[t]}))}function R(n,t){x(n,(function(n){x(t,(function(t){n&&n.removeAttribute(t)}))}))}function W(n,t,e){h(t)?T(t,(function(t,e){W(n,e,t)})):x(n,(function(n){_(e)||""===e?R(n,t):n.setAttribute(t,String(e))}))}function G(n,t,e){var i=document.createElement(n);return t&&(b(t)?L(i,t):W(i,t)),e&&A(e,i),i}function X(n,t,e){if(w(e))return getComputedStyle(n)[t];_(e)||(n.style[t]=""+e)}function B(n,t){X(n,"display",t)}function H(n){n.setActive&&n.setActive()||n.focus({preventScroll:!0})}function q(n,t){return n.getAttribute(t)}function Y(n,t){return n&&n.classList.contains(t)}function K(n){return n.getBoundingClientRect()}function U(n){x(n,(function(n){n&&n.parentNode&&n.parentNode.removeChild(n)}))}function J(n){return N((new DOMParser).parseFromString(n,"text/html").body)}function Q(n,t){n.preventDefault(),t&&(n.stopPropagation(),n.stopImmediatePropagation())}function V(n,t){return n&&n.querySelector(t)}function Z(n,t){return t?l(n.querySelectorAll(t)):[]}function $(n,t){k(n,t,!1)}function nn(n){return n.timeStamp}function tn(n){return b(n)?n:n?n+"px":""}var en="splide",rn="data-splide";function on(n,t){if(!n)throw new Error("[splide] "+(t||""))}var un=Math.min,an=Math.max,sn=Math.floor,cn=Math.ceil,ln=Math.abs;function fn(n,t,e){return ln(n-t)<e}function dn(n,t,e,i){var r=un(t,e),o=an(t,e);return i?r<n&&n<o:r<=n&&n<=o}function pn(n,t,e){var i=un(t,e),r=an(t,e);return un(an(i,n),r)}function vn(n){return+(n>0)-+(n<0)}function gn(n,t){return x(t,(function(t){n=n.replace("%s",""+t)})),n}function hn(n){return n<10?"0"+n:""+n}var mn={};function yn(n){return""+n+hn(mn[n]=(mn[n]||0)+1)}function bn(){var n=[];function t(n,t,e){x(n,(function(n){n&&x(t,(function(t){t.split(" ").forEach((function(t){var i=t.split(".");e(n,i[0],i[1])}))}))}))}return{bind:function(e,i,r,o){t(e,i,(function(t,e,i){var u="addEventListener"in t,a=u?t.removeEventListener.bind(t,e,r,o):t.removeListener.bind(t,r);u?t.addEventListener(e,r,o):t.addListener(r),n.push([t,e,i,r,a])}))},unbind:function(e,i,r){t(e,i,(function(t,e,i){n=n.filter((function(n){return!!(n[0]!==t||n[1]!==e||n[2]!==i||r&&n[3]!==r)||(n[4](),!1)}))}))},dispatch:function(n,t,e){var i;return"function"==typeof CustomEvent?i=new CustomEvent(t,{bubbles:true,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,true,!1,e),n.dispatchEvent(i),i},destroy:function(){n.forEach((function(n){n[4]()})),c(n)}}}var wn="mounted",_n="ready",En="move",Sn="moved",xn="shifted",Cn="click",Pn="active",kn="inactive",Ln="visible",An="hidden",Dn="slide:keydown",Mn="refresh",zn="updated",Nn="resize",On="resized",Tn="scroll",In="scrolled",Fn="destroy",jn="arrows:mounted",Rn="navigation:mounted",Wn="autoplay:play",Gn="autoplay:pause",Xn="lazyload:loaded";function Bn(n){var t=n?n.event.bus:document.createDocumentFragment(),e=bn();return n&&n.event.on(Fn,e.destroy),I(e,{bus:t,on:function(n,i){e.bind(t,S(n).join(" "),(function(n){i.apply(i,m(n.detail)?n.detail:[])}))},off:f(e.unbind,t),emit:function(n){e.dispatch(t,n,l(arguments,1))}})}function Hn(n,t,e,i){var r,o,u=Date.now,a=0,s=!0,c=0;function l(){if(!s){if(a=n?un((u()-r)/n,1):1,e&&e(a),a>=1&&(t(),r=u(),i&&++c>=i))return f();v(l)}}function f(){s=!0}function d(){o&&cancelAnimationFrame(o),a=0,o=0,s=!0}return{start:function(t){!t&&d(),r=u()-(t?a*n:0),s=!1,v(l)},rewind:function(){r=u(),a=0,e&&e(a)},pause:f,cancel:d,set:function(t){n=t},isPaused:function(){return s}}}var qn="ArrowLeft",Yn="ArrowRight",Kn="ArrowUp",Un="ArrowDown",Jn="ttb",Qn={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[Kn,Yn],ArrowRight:[Un,qn]};function Vn(n,t,e){return{resolve:function(n,t,i){var r="rtl"!==(i=i||e.direction)||t?i===Jn?0:-1:1;return Qn[n]&&Qn[n][r]||n.replace(/width|left|right/i,(function(n,t){var e=Qn[n.toLowerCase()][r]||n;return t>0?e.charAt(0).toUpperCase()+e.slice(1):e}))},orient:function(n){return n*("rtl"===e.direction?1:-1)}}}var Zn="role",$n="tabindex",nt="aria-controls",tt="aria-current",et="aria-selected",it="aria-label",rt="aria-labelledby",ot="aria-hidden",ut="aria-orientation",at="aria-roledescription",st="aria-live",ct="aria-busy",lt="aria-atomic",ft=[Zn,$n,"disabled",nt,tt,it,rt,ot,ut,at],dt=en,pt="splide__track",vt="splide__slide",gt="splide__slide--clone",ht="splide__arrows",mt="splide__arrow",yt="splide__arrow--prev",bt="splide__arrow--next",wt="splide__pagination",_t="splide__pagination__page",Et="splide__progress__bar",St="splide__toggle",xt="is-active",Ct="is-prev",Pt="is-next",kt="is-visible",Lt="is-loading",At="is-focus-in",Dt=[xt,kt,Ct,Pt,Lt,At],Mt={slide:vt,clone:gt,arrows:ht,arrow:mt,prev:yt,next:bt,pagination:wt,page:_t,spinner:"splide__spinner"};var zt="touchstart mousedown",Nt="touchmove mousemove",Ot="touchend touchcancel mouseup click";var Tt="slide",It="loop",Ft="fade";function jt(n,t,e,i){var r,o=Bn(n),u=o.on,a=o.emit,s=o.bind,c=n.Components,l=n.root,d=n.options,p=d.isNavigation,v=d.updateOnMove,g=d.i18n,h=d.pagination,m=d.slideFocus,y=c.Direction.resolve,b=q(i,"style"),w=q(i,it),_=e>-1,E=N(i,".splide__slide__container"),S=Z(i,d.focusableNodes||"");function x(){var r=n.splides.map((function(n){var e=n.splide.Components.Slides.getAt(t);return e?e.slide.id:""})).join(" ");W(i,it,gn(g.slideX,(_?e:t)+1)),W(i,nt,r),W(i,Zn,m?"button":""),m&&R(i,at)}function C(){r||P()}function P(){if(!r){var e=n.index;(o=L())!==Y(i,xt)&&(k(i,xt,o),W(i,tt,p&&o||""),a(o?Pn:kn,A)),function(){var t=function(){if(n.is(Ft))return L();var t=K(c.Elements.track),e=K(i),r=y("left",!0),o=y("right",!0);return sn(t[r])<=cn(e[r])&&sn(e[o])<=cn(t[o])}(),e=!t&&(!L()||_);n.state.is([4,5])||W(i,ot,e||"");W(S,$n,e?-1:""),m&&W(i,$n,e?-1:0);t!==Y(i,kt)&&(k(i,kt,t),a(t?Ln:An,A));if(!t&&document.activeElement===i){var r=c.Slides.getAt(n.index);r&&H(r.slide)}}(),k(i,Ct,t===e-1),k(i,Pt,t===e+1)}var o}function L(){var i=n.index;return i===t||d.cloneStatus&&i===e}var A={index:t,slideIndex:e,slide:i,container:E,isClone:_,mount:function(){_||(i.id=l.id+"-slide"+hn(t+1),W(i,Zn,h?"tabpanel":"group"),W(i,at,g.slide),W(i,it,w||gn(g.slideLabel,[t+1,n.length]))),s(i,"click",f(a,Cn,A)),s(i,"keydown",f(a,Dn,A)),u([Sn,xn,In],P),u(Rn,x),v&&u(En,C)},destroy:function(){r=!0,o.destroy(),$(i,Dt),R(i,ft),W(i,"style",b),W(i,it,w||"")},update:P,style:function(n,t,e){X(e&&E||i,n,t)},isWithin:function(e,i){var r=ln(e-t);return _||!d.rewind&&!n.is(It)||(r=un(r,n.length-r)),r<=i}};return A}var Rt="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z";var Wt={passive:!1,capture:!0};var Gt={Spacebar:" ",Right:Yn,Left:qn,Up:Kn,Down:Un};function Xt(n){return n=b(n)?n:n.key,Gt[n]||n}var Bt="keydown";var Ht="data-splide-lazy",qt="data-splide-lazy-srcset";var Yt=[" ","Enter"];var Kt=Object.freeze({__proto__:null,Media:function(n,t,e){var i=n.state,r=e.breakpoints||{},o=e.reducedMotion||{},u=bn(),s=[];function c(n){n&&u.destroy()}function l(n,t){var e=matchMedia(t);u.bind(e,"change",f),s.push([n,e])}function f(){var t=i.is(7),r=e.direction,o=s.reduce((function(n,t){return F(n,t[1].matches?t[0]:{})}),{});j(e),d(o),e.destroy?n.destroy("completely"===e.destroy):t?(c(!0),n.mount()):r!==e.direction&&n.refresh()}function d(t,r){F(e,t),r&&F(Object.getPrototypeOf(e),t),i.is(1)||n.emit(zn,e)}return{setup:function(){var n="min"===e.mediaQuery;O(r).sort((function(t,e){return n?+t-+e:+e-+t})).forEach((function(t){l(r[t],"("+(n?"min":"max")+"-width:"+t+"px)")})),l(o,a),f()},destroy:c,reduce:function(n){matchMedia(a).matches&&(n?F(e,o):j(e,O(o)))},set:d}},Direction:Vn,Elements:function(n,t,e){var i,r,o,u=Bn(n),a=u.on,s=u.bind,l=n.root,f=e.i18n,d={},p=[],v=[],g=[];function h(){i=w(".splide__track"),r=N(i,".splide__list"),on(i&&r,"A track/list element is missing."),P(p,z(r,".splide__slide:not(.splide__slide--clone)")),T({arrows:ht,pagination:wt,prev:yt,next:bt,bar:Et,toggle:St},(function(n,t){d[t]=w("."+n)})),I(d,{root:l,track:i,list:r,slides:p}),function(){var n=l.id||yn(en),t=e.role;l.id=n,i.id=i.id||n+"-track",r.id=r.id||n+"-list",!q(l,Zn)&&"SECTION"!==l.tagName&&t&&W(l,Zn,t);W(l,at,f.carousel),W(r,Zn,"presentation")}(),b()}function m(n){var t=ft.concat("style");c(p),$(l,v),$(i,g),R([i,r],t),R(l,n?t:["style",at])}function b(){$(l,v),$(i,g),v=_(dt),g=_(pt),L(l,v),L(i,g),W(l,it,e.label),W(l,rt,e.labelledby)}function w(n){var t=V(l,n);return t&&function(n,t){if(y(n.closest))return n.closest(t);for(var e=n;e&&1===e.nodeType&&!M(e,t);)e=e.parentElement;return e}(t,"."+dt)===l?t:void 0}function _(n){return[n+"--"+e.type,n+"--"+e.direction,e.drag&&n+"--draggable",e.isNavigation&&n+"--nav",n===dt&&xt]}return I(d,{setup:h,mount:function(){a(Mn,m),a(Mn,h),a(zn,b),s(document,"touchstart mousedown keydown",(function(n){o="keydown"===n.type}),{capture:!0}),s(l,"focusin",(function(){k(l,At,!!o)}))},destroy:m})},Slides:function(n,t,e){var i=Bn(n),r=i.on,o=i.emit,u=i.bind,a=t.Elements,s=a.slides,l=a.list,d=[];function p(){s.forEach((function(n,t){g(n,t,-1)}))}function v(){m((function(n){n.destroy()})),c(d)}function g(t,e,i){var r=jt(n,e,i,t);r.mount(),d.push(r)}function h(n){return n?w((function(n){return!n.isClone})):d}function m(n,t){h(t).forEach(n)}function w(n){return d.filter(y(n)?n:function(t){return b(n)?M(t.slide,n):C(S(n),t.index)})}return{mount:function(){p(),r(Mn,v),r(Mn,p),r([wn,Mn],(function(){d.sort((function(n,t){return n.index-t.index}))}))},destroy:v,update:function(){m((function(n){n.update()}))},register:g,get:h,getIn:function(n){var i=t.Controller,r=i.toIndex(n),o=i.hasFocus()?1:e.perPage;return w((function(n){return dn(n.index,r,r+o-1)}))},getAt:function(n){return w(n)[0]},add:function(n,t){x(n,(function(n){if(b(n)&&(n=J(n)),E(n)){var i=s[t];i?D(n,i):A(l,n),L(n,e.classes.slide),r=n,a=f(o,Nn),c=Z(r,"img"),(d=c.length)?c.forEach((function(n){u(n,"load error",(function(){--d||a()}))})):a()}var r,a,c,d})),o(Mn)},remove:function(n){U(w(n).map((function(n){return n.slide}))),o(Mn)},forEach:m,filter:w,style:function(n,t,e){m((function(i){i.style(n,t,e)}))},getLength:function(n){return n?s.length:d.length},isEnough:function(){return d.length>e.perPage}}},Layout:function(n,t,e){var i,r,o=Bn(n),u=o.on,a=o.bind,s=o.emit,c=t.Slides,l=t.Direction.resolve,d=t.Elements,p=d.root,v=d.track,g=d.list,m=c.getAt,y=c.style;function b(){r=null,i=e.direction===Jn,X(p,"maxWidth",tn(e.width)),X(v,l("paddingLeft"),_(!1)),X(v,l("paddingRight"),_(!0)),w()}function w(){var n=K(p);r&&r.width===n.width&&r.height===n.height||(X(v,"height",function(){var n="";i&&(on(n=E(),"height or heightRatio is missing."),n="calc("+n+" - "+_(!1)+" - "+_(!0)+")");return n}()),y(l("marginRight"),tn(e.gap)),y("width",e.autoWidth?null:tn(e.fixedWidth)||(i?"":S())),y("height",tn(e.fixedHeight)||(i?e.autoHeight?null:S():E()),!0),r=n,s(On))}function _(n){var t=e.padding,i=l(n?"right":"left");return t&&tn(t[i]||(h(t)?0:t))||"0px"}function E(){return tn(e.height||K(g).width*e.heightRatio)}function S(){var n=tn(e.gap);return"calc((100%"+(n&&" + "+n)+")/"+(e.perPage||1)+(n&&" - "+n)+")"}function x(n,t){var e=m(n);if(e){var i=K(e.slide)[l("right")],r=K(g)[l("left")];return ln(i-r)+(t?0:C())}return 0}function C(){var n=m(0);return n&&parseFloat(X(n.slide,l("marginRight")))||0}return{mount:function(){var n,t,e;b(),a(window,"resize load",(n=f(s,Nn),function(){e||(e=Hn(t||0,(function(){n(),e=null}),null,1)).start()})),u([zn,Mn],b),u(Nn,w)},listSize:function(){return K(g)[l("width")]},slideSize:function(n,t){var e=m(n||0);return e?K(e.slide)[l("width")]+(t?0:C()):0},sliderSize:function(){return x(n.length-1,!0)-x(-1,!0)},totalSize:x,getPadding:function(n){return parseFloat(X(v,l("padding"+(n?"Right":"Left"))))||0}}},Clones:function(n,t,e){var i,r=Bn(n),o=r.on,u=r.emit,a=t.Elements,s=t.Slides,l=t.Direction.resolve,f=[];function d(){(i=g())&&(!function(t){var i=s.get().slice(),r=i.length;if(r){for(;i.length<t;)P(i,i);P(i.slice(-t),i.slice(0,t)).forEach((function(o,u){var c=u<t,l=function(t,i){var r=t.cloneNode(!0);return L(r,e.classes.clone),r.id=n.root.id+"-clone"+hn(i+1),r}(o.slide,u);c?D(l,i[0].slide):A(a.list,l),P(f,l),s.register(l,u-t+(c?0:r),o.index)}))}}(i),u(Nn))}function p(){U(f),c(f)}function v(){i<g()&&u(Mn)}function g(){var i=e.clones;if(n.is(It)){if(!i){var r=e[l("fixedWidth")]&&t.Layout.slideSize(0);i=r&&cn(K(a.track)[l("width")]/r)||e[l("autoWidth")]&&n.length||2*e.perPage}}else i=0;return i}return{mount:function(){d(),o(Mn,p),o(Mn,d),o([zn,Nn],v)},destroy:p}},Move:function(n,t,e){var i,r=Bn(n),o=r.on,u=r.emit,a=n.state.set,s=t.Layout,c=s.slideSize,l=s.getPadding,f=s.totalSize,d=s.listSize,p=s.sliderSize,v=t.Direction,g=v.resolve,h=v.orient,m=t.Elements,y=m.list,b=m.track;function _(){t.Controller.isBusy()||(t.Scroll.cancel(),E(n.index),t.Slides.update())}function E(n){S(k(n,!0))}function S(e,i){if(!n.is(Ft)){var r=i?e:function(e){if(n.is(It)){var i=P(e),r=i>t.Controller.getEnd();(i<0||r)&&(e=x(e,r))}return e}(e);X(y,"transform","translate"+g("X")+"("+r+"px)"),e!==r&&u(xn)}}function x(n,t){var e=n-A(t),i=p();return n-=h(i*(cn(ln(e)/i)||1))*(t?1:-1)}function C(){S(L()),i.cancel()}function P(n){for(var e=t.Slides.get(),i=0,r=1/0,o=0;o<e.length;o++){var u=e[o].index,a=ln(k(u,!0)-n);if(!(a<=r))break;r=a,i=u}return i}function k(t,i){var r=h(f(t-1)-function(n){var t=e.focus;return"center"===t?(d()-c(n,!0))/2:+t*c(n)||0}(t));return i?function(t){e.trimSpace&&n.is(Tt)&&(t=pn(t,0,h(p()-d())));return t}(r):r}function L(){var n=g("left");return K(y)[n]-K(b)[n]+h(l(!1))}function A(n){return k(n?t.Controller.getEnd():0,!!e.trimSpace)}return{mount:function(){i=t.Transition,o([wn,On,zn,Mn],_)},move:function(n,t,e,r){var o,s;n!==t&&(o=n>e,s=h(x(L(),o)),o?s>=0:s<=y[g("scrollWidth")]-K(b)[g("width")])&&(C(),S(x(L(),n>e),!0)),a(4),u(En,t,e,n),i.start(t,(function(){a(3),u(Sn,t,e,n),r&&r()}))},jump:E,translate:S,shift:x,cancel:C,toIndex:P,toPosition:k,getPosition:L,getLimit:A,exceededLimit:function(n,t){t=w(t)?L():t;var e=!0!==n&&h(t)<h(A(!1)),i=!1!==n&&h(t)>h(A(!0));return e||i},reposition:_}},Controller:function(n,t,e){var i,r,o,u=Bn(n).on,a=t.Move,s=a.getPosition,c=a.getLimit,l=a.toPosition,d=t.Slides,p=d.isEnough,v=d.getLength,g=n.is(It),h=n.is(Tt),m=f(x,!1),y=f(x,!0),_=e.start||0,E=_;function S(){i=v(!0),r=e.perMove,o=e.perPage;var n=pn(_,0,i-1);n!==_&&(_=n,a.reposition())}function x(n,t){var e=r||(M()?1:o),i=C(_+e*(n?-1:1),_,!(r||M()));return-1===i&&h&&!fn(s(),c(!n),1)?n?0:k():t?i:P(i)}function C(t,u,a){if(p()){var c=k(),f=function(t){if(h&&"move"===e.trimSpace&&t!==_)for(var i=s();i===l(t,!0)&&dn(t,0,n.length-1,!e.rewind);)t<_?--t:++t;return t}(t);f!==t&&(u=t,t=f,a=!1),t<0||t>c?t=r||!dn(0,t,u,!0)&&!dn(c,u,t,!0)?g?a?t<0?-(i%o||o):i:t:e.rewind?t<0?c:0:-1:L(A(t)):a&&t!==u&&(t=L(A(u)+(t<u?-1:1)))}else t=-1;return t}function P(n){return g?(n+i)%i||0:n}function k(){return an(i-(M()||g&&r?1:o),0)}function L(n){return pn(M()?n:o*n,0,k())}function A(n){return M()?n:sn((n>=k()?i-1:n)/o)}function D(n){n!==_&&(E=_,_=n)}function M(){return!w(e.focus)||e.isNavigation}function z(){return n.state.is([4,5])&&!!e.waitForTransition}return{mount:function(){S(),u([zn,Mn],S)},go:function(n,t,e){if(!z()){var i=function(n){var t=_;if(b(n)){var e=n.match(/([+\-<>])(\d+)?/)||[],i=e[1],r=e[2];"+"===i||"-"===i?t=C(_+ +(""+i+(+r||1)),_):">"===i?t=r?L(+r):m(!0):"<"===i&&(t=y(!0))}else t=g?n:pn(n,0,k());return t}(n),r=P(i);r>-1&&(t||r!==_)&&(D(r),a.move(i,r,E,e))}},scroll:function(n,e,i,r){t.Scroll.scroll(n,e,i,(function(){D(P(a.toIndex(s()))),r&&r()}))},getNext:m,getPrev:y,getAdjacent:x,getEnd:k,setIndex:D,getIndex:function(n){return n?E:_},toIndex:L,toPage:A,toDest:function(n){var t=a.toIndex(n);return h?pn(t,0,k()):t},hasFocus:M,isBusy:z}},Arrows:function(n,t,e){var i,r,o=Bn(n),u=o.on,a=o.bind,s=o.emit,c=e.classes,l=e.i18n,d=t.Elements,p=t.Controller,v=d.arrows,g=d.track,h=v,m=d.prev,y=d.next,b={};function w(){!function(){var n=e.arrows;!n||m&&y||(h=v||G("div",c.arrows),m=x(!0),y=x(!1),i=!0,A(h,[m,y]),!v&&D(h,g));m&&y&&(I(b,{prev:m,next:y}),B(h,n?"":"none"),L(h,r="splide__arrows--"+e.direction),n&&(u([Sn,Mn,In],C),a(y,"click",f(S,">")),a(m,"click",f(S,"<")),C(),W([m,y],nt,g.id),s(jn,m,y)))}(),u(zn,_)}function _(){E(),w()}function E(){o.destroy(),$(h,r),i?(U(v?[m,y]:h),m=y=null):R([m,y],ft)}function S(n){p.go(n,!0)}function x(n){return J('<button class="'+c.arrow+" "+(n?c.prev:c.next)+'" type="button"><svg xmlns="'+'http://www.w3.org/2000/svg" viewBox="0 0 '+"40 "+'40" width="'+'40" height="'+'40" focusable="false"><path d="'+(e.arrowPath||Rt)+'" />')}function C(){var t=n.index,e=p.getPrev(),i=p.getNext(),r=e>-1&&t<e?l.last:l.prev,o=i>-1&&t>i?l.first:l.next;m.disabled=e<0,y.disabled=i<0,W(m,it,r),W(y,it,o),s("arrows:updated",m,y,e,i)}return{arrows:b,mount:w,destroy:E}},Autoplay:function(n,t,e){var i,r,o=Bn(n),u=o.on,a=o.bind,s=o.emit,c=Hn(e.interval,n.go.bind(n,">"),(function(n){var t=f.bar;t&&X(t,"width",100*n+"%"),s("autoplay:playing",n)})),l=c.isPaused,f=t.Elements,d=t.Elements,p=d.root,v=d.toggle,g=e.autoplay,h="pause"===g;function m(){l()&&t.Slides.isEnough()&&(c.start(!e.resetProgress),r=i=h=!1,w(),s(Wn))}function y(n){void 0===n&&(n=!0),h=!!n,w(),l()||(c.pause(),s(Gn))}function b(){h||(i||r?y(!1):m())}function w(){v&&(k(v,xt,!h),W(v,it,e.i18n[h?"play":"pause"]))}function _(n){var i=t.Slides.getAt(n);c.set(i&&+q(i.slide,"data-splide-interval")||e.interval)}return{mount:function(){g&&(!function(){e.pauseOnHover&&a(p,"mouseenter mouseleave",(function(n){i="mouseenter"===n.type,b()}));e.pauseOnFocus&&a(p,"focusin focusout",(function(n){r="focusin"===n.type,b()}));v&&a(v,"click",(function(){h?m():y(!0)}));u([En,Tn,Mn],c.rewind),u(En,_)}(),v&&W(v,nt,f.track.id),h||m(),w())},destroy:c.cancel,play:m,pause:y,isPaused:l}},Cover:function(n,t,e){var i=Bn(n).on;function r(n){t.Slides.forEach((function(t){var e=N(t.container||t.slide,"img");e&&e.src&&o(n,e,t)}))}function o(n,t,e){e.style("background",n?'center/cover no-repeat url("'+t.src+'")':"",!0),B(t,n?"none":"")}return{mount:function(){e.cover&&(i(Xn,f(o,!0)),i([wn,zn,Mn],f(r,!0)))},destroy:f(r,!1)}},Scroll:function(n,t,e){var i,r,o=Bn(n),u=o.on,a=o.emit,s=n.state.set,c=t.Move,l=c.getPosition,d=c.getLimit,p=c.exceededLimit,v=c.translate,g=1;function h(n,e,o,u,d){var p=l();if(b(),o){var v=t.Layout.sliderSize(),h=vn(n)*v*sn(ln(n)/v)||0;n=c.toPosition(t.Controller.toDest(n%v))+h}var w=fn(p,n,1);g=1,e=w?0:e||an(ln(n-p)/1.5,800),r=u,i=Hn(e,m,f(y,p,n,d),1),s(5),a(Tn),i.start()}function m(){s(3),r&&r(),a(In)}function y(t,i,o,u){var a,s,c=l(),f=(t+(i-t)*(a=u,(s=e.easingFunc)?s(a):1-Math.pow(1-a,4))-c)*g;v(c+f),n.is(Tt)&&!o&&p()&&(g*=.6,ln(f)<10&&h(d(p(!0)),600,!1,r,!0))}function b(){i&&i.cancel()}function w(){i&&!i.isPaused()&&(b(),m())}return{mount:function(){u(En,b),u([zn,Mn],w)},destroy:b,scroll:h,cancel:w}},Drag:function(n,t,e){var i,r,o,u,a,s,c,l,f=Bn(n),d=f.on,v=f.emit,g=f.bind,m=f.unbind,y=n.state,b=t.Move,w=t.Scroll,_=t.Controller,E=t.Elements.track,S=t.Media.reduce,x=t.Direction,C=x.resolve,P=x.orient,k=b.getPosition,L=b.exceededLimit,A=!1;function D(){var n=e.drag;X(!n),u="free"===n}function z(n){if(s=!1,!c){var t=G(n);i=n.target,r=e.noDrag,M(i,".splide__pagination__page, .splide__arrow")||r&&M(i,r)||!t&&n.button||(_.isBusy()?Q(n,!0):(l=t?E:window,a=y.is([4,5]),o=null,g(l,Nt,N,Wt),g(l,Ot,O,Wt),b.cancel(),w.cancel(),I(n)))}var i,r}function N(t){if(y.is(6)||(y.set(6),v("drag")),t.cancelable)if(a){b.translate(i+F(t)/(A&&n.is(Tt)?5:1));var r=j(t)>200,o=A!==(A=L());(r||o)&&I(t),s=!0,v("dragging"),Q(t)}else(function(n){return ln(F(n))>ln(F(n,!0))})(t)&&(a=function(n){var t=e.dragMinThreshold,i=h(t),r=i&&t.mouse||0,o=(i?t.touch:+t)||10;return ln(F(n))>(G(n)?o:r)}(t),Q(t))}function O(i){y.is(6)&&(y.set(3),v("dragged")),a&&(!function(i){var r=function(t){if(n.is(It)||!A){var e=j(t);if(e&&e<200)return F(t)/e}return 0}(i),o=function(n){return k()+vn(n)*un(ln(n)*(e.flickPower||600),u?1/0:t.Layout.listSize()*(e.flickMaxPages||1))}(r),a=e.rewind&&e.rewindByDrag;S(!1),u?_.scroll(o,0,e.snap):n.is(Ft)?_.go(P(vn(r))<0?a?"<":"-":a?">":"+"):n.is(Tt)&&A&&a?_.go(L(!0)?">":"<"):_.go(_.toDest(o),!0);S(!0)}(i),Q(i)),m(l,Nt,N),m(l,Ot,O),a=!1}function T(n){!c&&s&&Q(n,!0)}function I(n){o=r,r=n,i=k()}function F(n,t){return W(n,t)-W(R(n),t)}function j(n){return nn(n)-nn(R(n))}function R(n){return r===n&&o||r}function W(n,t){return(G(n)?n.changedTouches[0]:n)["page"+C(t?"Y":"X")]}function G(n){return"undefined"!=typeof TouchEvent&&n instanceof TouchEvent}function X(n){c=n}return{mount:function(){g(E,Nt,p,Wt),g(E,Ot,p,Wt),g(E,zt,z,Wt),g(E,"click",T,{capture:!0}),g(E,"dragstart",Q),d([wn,zn],D)},disable:X,isDragging:function(){return a}}},Keyboard:function(n,t,e){var i,r,o=Bn(n),u=o.on,a=o.bind,s=o.unbind,c=n.root,l=t.Direction.resolve;function f(){var n=e.keyboard;n&&(i="global"===n?window:c,a(i,Bt,g))}function p(){s(i,Bt)}function v(){var n=r;r=!0,d((function(){r=n}))}function g(t){if(!r){var e=Xt(t);e===l(qn)?n.go("<"):e===l(Yn)&&n.go(">")}}return{mount:function(){f(),u(zn,p),u(zn,f),u(En,v)},destroy:p,disable:function(n){r=n}}},LazyLoad:function(n,t,e){var i=Bn(n),r=i.on,o=i.off,u=i.bind,a=i.emit,s="sequential"===e.lazyLoad,l=[wn,Mn,Sn,In],d=[];function p(){c(d),t.Slides.forEach((function(n){Z(n.slide,"[data-splide-lazy], [data-splide-lazy-srcset]").forEach((function(t){var i=q(t,Ht),r=q(t,qt);if(i!==t.src||r!==t.srcset){var o=e.classes.spinner,u=t.parentElement,a=N(u,"."+o)||G("span",o,u);d.push([t,n,a]),t.src||B(t,"none")}}))})),s&&m()}function v(){(d=d.filter((function(t){var i=e.perPage*((e.preloadPages||1)+1)-1;return!t[1].isWithin(n.index,i)||g(t)}))).length||o(l)}function g(n){var t=n[0];L(n[1].slide,Lt),u(t,"load error",f(h,n)),W(t,"src",q(t,Ht)),W(t,"srcset",q(t,qt)),R(t,Ht),R(t,qt)}function h(n,t){var e=n[0],i=n[1];$(i.slide,Lt),"error"!==t.type&&(U(n[2]),B(e,""),a(Xn,e,i),a(Nn)),s&&m()}function m(){d.length&&g(d.shift())}return{mount:function(){e.lazyLoad&&(p(),r(Mn,p),s||r(l,v))},destroy:f(c,d)}},Pagination:function(n,t,e){var i,r,o=Bn(n),u=o.on,a=o.emit,s=o.bind,d=t.Slides,p=t.Elements,v=t.Controller,g=v.hasFocus,h=v.getIndex,m=v.go,y=t.Direction.resolve,b=[];function w(){i&&(U(p.pagination?l(i.children):i),$(i,r),c(b),i=null),o.destroy()}function _(n){m(">"+n,!0)}function E(n,t){var e=b.length,i=Xt(t),r=S(),o=-1;i===y(Yn,!1,r)?o=++n%e:i===y(qn,!1,r)?o=(--n+e)%e:"Home"===i?o=0:"End"===i&&(o=e-1);var u=b[o];u&&(H(u.button),m(">"+o),Q(t,!0))}function S(){return e.paginationDirection||e.direction}function x(n){return b[v.toPage(n)]}function C(){var n=x(h(!0)),t=x(h());if(n){var e=n.button;$(e,xt),R(e,et),W(e,$n,-1)}if(t){var r=t.button;L(r,xt),W(r,et,!0),W(r,$n,"")}a("pagination:updated",{list:i,items:b},n,t)}return{items:b,mount:function t(){w(),u([zn,Mn],t),e.pagination&&d.isEnough()&&(u([En,Tn,In],C),function(){var t=n.length,o=e.classes,u=e.i18n,a=e.perPage,c=g()?t:cn(t/a);L(i=p.pagination||G("ul",o.pagination,p.track.parentElement),r="splide__pagination--"+S()),W(i,Zn,"tablist"),W(i,it,u.select),W(i,ut,S()===Jn?"vertical":"");for(var l=0;l<c;l++){var v=G("li",null,i),h=G("button",{class:o.page,type:"button"},v),m=d.getIn(l).map((function(n){return n.slide.id})),y=!g()&&a>1?u.pageX:u.slideX;s(h,"click",f(_,l)),e.paginationKeyboard&&s(h,"keydown",f(E,l)),W(v,Zn,"presentation"),W(h,Zn,"tab"),W(h,nt,m.join(" ")),W(h,it,gn(y,l+1)),W(h,$n,-1),b.push({li:v,button:h,page:l})}}(),C(),a("pagination:mounted",{list:i,items:b},x(n.index)))},destroy:w,getAt:x,update:C}},Sync:function(n,t,e){var i=e.isNavigation,r=e.slideFocus,o=[];function u(){var t,e;n.splides.forEach((function(t){t.isParent||(s(n,t.splide),s(t.splide,n))})),i&&(t=Bn(n),(e=t.on)(Cn,f),e(Dn,d),e([wn,zn],l),o.push(t),t.emit(Rn,n.splides))}function a(){o.forEach((function(n){n.destroy()})),c(o)}function s(n,t){var e=Bn(n);e.on(En,(function(n,e,i){t.go(t.is(It)?i:n)})),o.push(e)}function l(){W(t.Elements.list,ut,e.direction===Jn?"vertical":"")}function f(t){n.go(t.index)}function d(n,t){C(Yt,Xt(t))&&(f(n),Q(t))}return{setup:function(){n.options={slideFocus:w(r)?i:r}},mount:u,destroy:a,remount:function(){a(),u()}}},Wheel:function(n,t,e){var i=Bn(n).bind,r=0;function o(i){if(i.cancelable){var o=i.deltaY,u=o<0,a=nn(i),s=e.wheelMinThreshold||0,c=e.wheelSleep||0;ln(o)>s&&a-r>c&&(n.go(u?"<":">"),r=a),function(i){return!e.releaseWheel||n.state.is(4)||-1!==t.Controller.getAdjacent(i)}(u)&&Q(i)}}return{mount:function(){e.wheel&&i(t.Elements.track,"wheel",o,Wt)}}},Live:function(n,t,e){var i=Bn(n).on,r=t.Elements.track,o=e.live&&!e.isNavigation,u=G("span","splide__sr"),a=Hn(90,f(s,!1));function s(n){W(r,ct,n),n?(A(r,u),a.start()):U(u)}function c(n){o&&W(r,st,n?"off":"polite")}return{mount:function(){o&&(c(!t.Autoplay.isPaused()),W(r,lt,!0),u.textContent="…",i(Wn,f(c,!0)),i(Gn,f(c,!1)),i([Sn,In],f(s,!0)))},disable:c,destroy:function(){R(r,[st,lt,ct]),U(u)}}}}),Ut={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:Mt,i18n:{prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function Jt(n,t,e){var i=Bn(n).on;return{mount:function(){i([wn,Mn],(function(){d((function(){t.Slides.style("transition","opacity "+e.speed+"ms "+e.easing)}))}))},start:function(n,e){var i=t.Elements.track;X(i,"height",tn(K(i).height)),d((function(){e(),X(i,"height","")}))},cancel:p}}function Qt(n,t,e){var i,r=Bn(n).bind,o=t.Move,u=t.Controller,a=t.Scroll,s=t.Elements.list,c=f(X,s,"transition");function l(){c(""),a.cancel()}return{mount:function(){r(s,"transitionend",(function(n){n.target===s&&i&&(l(),i())}))},start:function(t,r){var s=o.toPosition(t,!0),l=o.getPosition(),f=function(t){var i=e.rewindSpeed;if(n.is(Tt)&&i){var r=u.getIndex(!0),o=u.getEnd();if(0===r&&t>=o||r>=o&&0===t)return i}return e.speed}(t);ln(s-l)>=1&&f>=1?e.useScroll?a.scroll(s,f,!1,r):(c("transform "+f+"ms "+e.easing),o.translate(s,!0),i=r):(o.jump(t),r())},cancel:l}}var Vt=function(){function n(t,e){var i;this.event=Bn(),this.Components={},this.state=(i=1,{set:function(n){i=n},is:function(n){return C(S(n),i)}}),this.splides=[],this._o={},this._E={};var r=b(t)?V(document,t):t;on(r,r+" is invalid."),this.root=r,e=F({label:q(r,it)||"",labelledby:q(r,rt)||""},Ut,n.defaults,e||{});try{F(e,JSON.parse(q(r,rn)))}catch(n){on(!1,"Invalid JSON")}this._o=Object.create(F({},e))}var t,e,i,r=n.prototype;return r.mount=function(n,t){var e=this,i=this.state,r=this.Components;return on(i.is([1,7]),"Already mounted!"),i.set(1),this._C=r,this._T=t||this._T||(this.is(Ft)?Jt:Qt),this._E=n||this._E,T(I({},Kt,this._E,{Transition:this._T}),(function(n,t){var i=n(e,r,e._o);r[t]=i,i.setup&&i.setup()})),T(r,(function(n){n.mount&&n.mount()})),this.emit(wn),L(this.root,"is-initialized"),i.set(3),this.emit(_n),this},r.sync=function(n){return this.splides.push({splide:n}),n.splides.push({splide:this,isParent:!0}),this.state.is(3)&&(this._C.Sync.remount(),n.Components.Sync.remount()),this},r.go=function(n){return this._C.Controller.go(n),this},r.on=function(n,t){return this.event.on(n,t),this},r.off=function(n){return this.event.off(n),this},r.emit=function(n){var t;return(t=this.event).emit.apply(t,[n].concat(l(arguments,1))),this},r.add=function(n,t){return this._C.Slides.add(n,t),this},r.remove=function(n){return this._C.Slides.remove(n),this},r.is=function(n){return this._o.type===n},r.refresh=function(){return this.emit(Mn),this},r.destroy=function(n){void 0===n&&(n=!0);var t=this.event,e=this.state;return e.is(1)?Bn(this).on(_n,this.destroy.bind(this,n)):(T(this._C,(function(t){t.destroy&&t.destroy(n)}),!0),t.emit(Fn),t.destroy(),n&&c(this.splides),e.set(7)),this},t=n,(e=[{key:"options",get:function(){return this._o},set:function(n){this._C.Media.set(n,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}])&&u(t.prototype,e),i&&u(t,i),Object.defineProperty(t,"prototype",{writable:!1}),n}(),Zt=Vt;Zt.defaults={},Zt.STATES=s}));
//# sourceMappingURL=splide.esm.e0ec9dfc.js.map