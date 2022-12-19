(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[318],{5098:function(e){e.exports=function(){"use strict";const e={parentTrigger:"li",subMenu:"ul",toggle:!0,triggerElement:"a"},t={ACTIVE:"mm-active",COLLAPSE:"mm-collapse",COLLAPSED:"mm-collapsed",COLLAPSING:"mm-collapsing",METIS:"metismenu",SHOW:"mm-show"};class n{constructor(t,i){this.element=n.isElement(t)?t:document.querySelector(t),this.config=Object.assign(Object.assign({},e),i),this.disposed=!1,this.triggerArr=[],this.init()}static attach(e,t){return new n(e,t)}init(){const{METIS:e,ACTIVE:n,COLLAPSE:i}=t;this.element.classList.add(e),[].slice.call(this.element.querySelectorAll(this.config.subMenu)).forEach((e=>{e.classList.add(i);const t=e.closest(this.config.parentTrigger);(null==t?void 0:t.classList.contains(n))?this.show(e):this.hide(e);const o=null==t?void 0:t.querySelector(this.config.triggerElement);"true"!==(null==o?void 0:o.getAttribute("aria-disabled"))&&(null==o||o.setAttribute("aria-expanded","false"),null==o||o.addEventListener("click",this.clickEvent.bind(this)),this.triggerArr.push(o))}))}clickEvent(e){if(!this.disposed){const t=null==e?void 0:e.currentTarget;t&&"A"===t.tagName&&e.preventDefault();const n=t.closest(this.config.parentTrigger),i=null==n?void 0:n.querySelector(this.config.subMenu);this.toggle(i)}}update(){this.disposed=!1,this.init()}dispose(){this.triggerArr.forEach((e=>{e.removeEventListener("click",this.clickEvent.bind(this))})),this.disposed=!0}on(e,t,n){return this.element.addEventListener(e,t,n),this}off(e,t,n){return this.element.removeEventListener(e,t,n),this}emit(e,t,n=!1){const i=new CustomEvent(e,{bubbles:n,detail:t});this.element.dispatchEvent(i)}toggle(e){const n=e.closest(this.config.parentTrigger);(null==n?void 0:n.classList.contains(t.ACTIVE))?this.hide(e):this.show(e)}show(e){var n;const i=e,{ACTIVE:o,COLLAPSE:s,COLLAPSED:r,COLLAPSING:l,SHOW:a}=t;if(this.isTransitioning||i.classList.contains(l))return;const u=()=>{i.classList.remove(l),i.style.height="",i.removeEventListener("transitionend",u),this.setTransitioning(!1),this.emit("shown.metisMenu",{shownElement:i})},c=i.closest(this.config.parentTrigger);null==c||c.classList.add(o);const f=null==c?void 0:c.querySelector(this.config.triggerElement);null==f||f.setAttribute("aria-expanded","true"),null==f||f.classList.remove(r),i.style.height="0px",i.classList.remove(s),i.classList.remove(a),i.classList.add(l);const d=[].slice.call(null===(n=null==c?void 0:c.parentNode)||void 0===n?void 0:n.children).filter((e=>e!==c));this.config.toggle&&d.length>0&&d.forEach((e=>{const t=e.querySelector(this.config.subMenu);t&&this.hide(t)})),this.setTransitioning(!0),i.classList.add(s),i.classList.add(a),i.style.height=`${i.scrollHeight}px`,this.emit("show.metisMenu",{showElement:i}),i.addEventListener("transitionend",u)}hide(e){const{ACTIVE:n,COLLAPSE:i,COLLAPSED:o,COLLAPSING:s,SHOW:r}=t,l=e;if(this.isTransitioning||!l.classList.contains(r))return;this.emit("hide.metisMenu",{hideElement:l});const a=l.closest(this.config.parentTrigger);null==a||a.classList.remove(n);const u=()=>{l.classList.remove(s),l.classList.add(i),l.style.height="",l.removeEventListener("transitionend",u),this.setTransitioning(!1),this.emit("hidden.metisMenu",{hiddenElement:l})};l.style.height=`${l.getBoundingClientRect().height}px`,l.style.height=`${l.offsetHeight}px`,l.classList.add(s),l.classList.remove(i),l.classList.remove(r),this.setTransitioning(!0),l.addEventListener("transitionend",u),l.style.height="0px";const c=null==a?void 0:a.querySelector(this.config.triggerElement);null==c||c.setAttribute("aria-expanded","false"),null==c||c.classList.add(o)}setTransitioning(e){this.isTransitioning=e}static isElement(e){return Boolean(e.classList)}}return n}()},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,i){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,s=n(7273).Z,r=o(n(7294)),l=n(6273),a=n(2725),u=n(3462),c=n(1018),f=n(7190),d=n(1210),h=n(8684),p={};function g(e,t,n,i){if(e&&l.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,i)).catch((function(e){0}));var o=i&&"undefined"!==typeof i.locale?i.locale:e&&e.locale;p[t+"%"+n+(o?"%"+o:"")]=!0}}var v=r.default.forwardRef((function(e,t){var n,o=e.href,v=e.as,m=e.children,L=e.prefetch,y=e.passHref,E=e.replace,b=e.shallow,C=e.scroll,M=e.locale,T=e.onClick,x=e.onMouseEnter,O=e.onTouchStart,S=e.legacyBehavior,_=void 0===S?!0!==Boolean(!1):S,A=s(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=m,!_||"string"!==typeof n&&"number"!==typeof n||(n=r.default.createElement("a",null,n));var P=!1!==L,j=r.default.useContext(u.RouterContext),w=r.default.useContext(c.AppRouterContext);w&&(j=w);var R,k=r.default.useMemo((function(){var e=i(l.resolveHref(j,o,!0),2),t=e[0],n=e[1];return{href:t,as:v?l.resolveHref(j,v):n||t}}),[j,o,v]),I=k.href,N=k.as,H=r.default.useRef(I),q=r.default.useRef(N);_&&(R=r.default.Children.only(n));var D=_?R&&"object"===typeof R&&R.ref:t,B=i(f.useIntersection({rootMargin:"200px"}),3),U=B[0],G=B[1],V=B[2],Z=r.default.useCallback((function(e){q.current===N&&H.current===I||(V(),q.current=N,H.current=I),U(e),D&&("function"===typeof D?D(e):"object"===typeof D&&(D.current=e))}),[N,D,I,V,U]);r.default.useEffect((function(){var e=G&&P&&l.isLocalURL(I),t="undefined"!==typeof M?M:j&&j.locale,n=p[I+"%"+N+(t?"%"+t:"")];e&&!n&&g(j,I,N,{locale:t})}),[N,I,G,M,P,j]);var K={ref:Z,onClick:function(e){_||"function"!==typeof T||T(e),_&&R.props&&"function"===typeof R.props.onClick&&R.props.onClick(e),e.defaultPrevented||function(e,t,n,i,o,s,a,u,c,f){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n)){e.preventDefault();var d=function(){"beforePopState"in t?t[o?"replace":"push"](n,i,{shallow:s,locale:u,scroll:a}):t[o?"replace":"push"](n,{forceOptimisticNavigation:!f})};c?r.default.startTransition(d):d()}}(e,j,I,N,E,b,C,M,Boolean(w),P)},onMouseEnter:function(e){_||"function"!==typeof x||x(e),_&&R.props&&"function"===typeof R.props.onMouseEnter&&R.props.onMouseEnter(e),!P&&w||l.isLocalURL(I)&&g(j,I,N,{priority:!0})},onTouchStart:function(e){_||"function"!==typeof O||O(e),_&&R.props&&"function"===typeof R.props.onTouchStart&&R.props.onTouchStart(e),!P&&w||l.isLocalURL(I)&&g(j,I,N,{priority:!0})}};if(!_||y||"a"===R.type&&!("href"in R.props)){var W="undefined"!==typeof M?M:j&&j.locale,$=j&&j.isLocaleDomain&&d.getDomainLocale(N,W,j.locales,j.domainLocales);K.href=$||h.addBasePath(a.addLocale(N,W,j&&j.defaultLocale))}return _?r.default.cloneElement(R,K):r.default.createElement("a",Object.assign({},A,K),n)}));t.default=v,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,u=e.disabled||!r,c=i(o.useState(!1),2),f=c[0],d=c[1],h=i(o.useState(null),2),p=h[0],g=h[1];o.useEffect((function(){if(r){if(u||f)return;if(p&&p.tagName){var e=function(e,t,n){var i=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},i=a.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(i&&(t=l.get(i)))return t;var o=new Map,s=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:s,elements:o},a.push(n),l.set(n,t),t}(n),o=i.id,s=i.observer,r=i.elements;return r.set(e,t),s.observe(e),function(){if(r.delete(e),s.unobserve(e),0===r.size){s.disconnect(),l.delete(o);var t=a.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&a.splice(t,1)}}}(p,(function(e){return e&&d(e)}),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!f){var i=s.requestIdleCallback((function(){return d(!0)}));return function(){return s.cancelIdleCallback(i)}}}),[p,u,n,t,f]);var v=o.useCallback((function(){d(!1)}),[]);return[g,f,v]};var o=n(7294),s=n(9311),r="function"===typeof IntersectionObserver,l=new Map,a=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var i=(0,n(2648).Z)(n(7294)),o=i.default.createContext(null);t.AppRouterContext=o;var s=i.default.createContext(null);t.LayoutRouterContext=s;var r=i.default.createContext(null);t.GlobalLayoutRouterContext=r;var l=i.default.createContext(null);t.TemplateContext=l},1664:function(e,t,n){e.exports=n(8418)}}]);