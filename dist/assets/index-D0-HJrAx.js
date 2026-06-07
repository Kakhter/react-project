var eg=d=>{throw TypeError(d)};var id=(d,e,t)=>e.has(d)||eg("Cannot "+t);var Ke=(d,e,t)=>(id(d,e,"read from private field"),t?t.call(d):e.get(d)),Pn=(d,e,t)=>e.has(d)?eg("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(d):e.set(d,t),Yt=(d,e,t,s)=>(id(d,e,"write to private field"),s?s.call(d,t):e.set(d,t),t),On=(d,e,t)=>(id(d,e,"access private method"),t);var tg=(d,e,t,s)=>({set _(r){Yt(d,e,r,t)},get _(){return Ke(d,e,s)}});(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();function ny(d){return d&&d.__esModule&&Object.prototype.hasOwnProperty.call(d,"default")?d.default:d}var sd={exports:{}},ga={};var ng;function LA(){if(ng)return ga;ng=1;var d=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,r,o){var l=null;if(o!==void 0&&(l=""+o),r.key!==void 0&&(l=""+r.key),"key"in r){o={};for(var u in r)u!=="key"&&(o[u]=r[u])}else o=r;return r=o.ref,{$$typeof:d,type:s,key:l,ref:r!==void 0?r:null,props:o}}return ga.Fragment=e,ga.jsx=t,ga.jsxs=t,ga}var ig;function PA(){return ig||(ig=1,sd.exports=LA()),sd.exports}var g=PA(),rd={exports:{}},Ae={};var sg;function OA(){if(sg)return Ae;sg=1;var d=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),o=Symbol.for("react.consumer"),l=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),b=Symbol.iterator;function v(M){return M===null||typeof M!="object"?null:(M=b&&M[b]||M["@@iterator"],typeof M=="function"?M:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,C={};function T(M,W,Z){this.props=M,this.context=W,this.refs=C,this.updater=Z||A}T.prototype.isReactComponent={},T.prototype.setState=function(M,W){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,W,"setState")},T.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function w(){}w.prototype=T.prototype;function _(M,W,Z){this.props=M,this.context=W,this.refs=C,this.updater=Z||A}var R=_.prototype=new w;R.constructor=_,x(R,T.prototype),R.isPureReactComponent=!0;var O=Array.isArray,k={H:null,A:null,T:null,S:null,V:null},j=Object.prototype.hasOwnProperty;function F(M,W,Z,K,te,ye){return Z=ye.ref,{$$typeof:d,type:M,key:W,ref:Z!==void 0?Z:null,props:ye}}function q(M,W){return F(M.type,W,void 0,void 0,void 0,M.props)}function V(M){return typeof M=="object"&&M!==null&&M.$$typeof===d}function Q(M){var W={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(Z){return W[Z]})}var J=/\/+/g;function le(M,W){return typeof M=="object"&&M!==null&&M.key!=null?Q(""+M.key):W.toString(36)}function de(){}function ae(M){switch(M.status){case"fulfilled":return M.value;case"rejected":throw M.reason;default:switch(typeof M.status=="string"?M.then(de,de):(M.status="pending",M.then(function(W){M.status==="pending"&&(M.status="fulfilled",M.value=W)},function(W){M.status==="pending"&&(M.status="rejected",M.reason=W)})),M.status){case"fulfilled":return M.value;case"rejected":throw M.reason}}throw M}function ce(M,W,Z,K,te){var ye=typeof M;(ye==="undefined"||ye==="boolean")&&(M=null);var re=!1;if(M===null)re=!0;else switch(ye){case"bigint":case"string":case"number":re=!0;break;case"object":switch(M.$$typeof){case d:case e:re=!0;break;case m:return re=M._init,ce(re(M._payload),W,Z,K,te)}}if(re)return te=te(M),re=K===""?"."+le(M,0):K,O(te)?(Z="",re!=null&&(Z=re.replace(J,"$&/")+"/"),ce(te,W,Z,"",function(We){return We})):te!=null&&(V(te)&&(te=q(te,Z+(te.key==null||M&&M.key===te.key?"":(""+te.key).replace(J,"$&/")+"/")+re)),W.push(te)),1;re=0;var Ce=K===""?".":K+":";if(O(M))for(var Re=0;Re<M.length;Re++)K=M[Re],ye=Ce+le(K,Re),re+=ce(K,W,Z,ye,te);else if(Re=v(M),typeof Re=="function")for(M=Re.call(M),Re=0;!(K=M.next()).done;)K=K.value,ye=Ce+le(K,Re++),re+=ce(K,W,Z,ye,te);else if(ye==="object"){if(typeof M.then=="function")return ce(ae(M),W,Z,K,te);throw W=String(M),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.")}return re}function N(M,W,Z){if(M==null)return M;var K=[],te=0;return ce(M,K,"","",function(ye){return W.call(Z,ye,te++)}),K}function G(M){if(M._status===-1){var W=M._result;W=W(),W.then(function(Z){(M._status===0||M._status===-1)&&(M._status=1,M._result=Z)},function(Z){(M._status===0||M._status===-1)&&(M._status=2,M._result=Z)}),M._status===-1&&(M._status=0,M._result=W)}if(M._status===1)return M._result.default;throw M._result}var ee=typeof reportError=="function"?reportError:function(M){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var W=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof M=="object"&&M!==null&&typeof M.message=="string"?String(M.message):String(M),error:M});if(!window.dispatchEvent(W))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",M);return}console.error(M)};function he(){}return Ae.Children={map:N,forEach:function(M,W,Z){N(M,function(){W.apply(this,arguments)},Z)},count:function(M){var W=0;return N(M,function(){W++}),W},toArray:function(M){return N(M,function(W){return W})||[]},only:function(M){if(!V(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},Ae.Component=T,Ae.Fragment=t,Ae.Profiler=r,Ae.PureComponent=_,Ae.StrictMode=s,Ae.Suspense=h,Ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,Ae.__COMPILER_RUNTIME={__proto__:null,c:function(M){return k.H.useMemoCache(M)}},Ae.cache=function(M){return function(){return M.apply(null,arguments)}},Ae.cloneElement=function(M,W,Z){if(M==null)throw Error("The argument must be a React element, but you passed "+M+".");var K=x({},M.props),te=M.key,ye=void 0;if(W!=null)for(re in W.ref!==void 0&&(ye=void 0),W.key!==void 0&&(te=""+W.key),W)!j.call(W,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&W.ref===void 0||(K[re]=W[re]);var re=arguments.length-2;if(re===1)K.children=Z;else if(1<re){for(var Ce=Array(re),Re=0;Re<re;Re++)Ce[Re]=arguments[Re+2];K.children=Ce}return F(M.type,te,void 0,void 0,ye,K)},Ae.createContext=function(M){return M={$$typeof:l,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null},M.Provider=M,M.Consumer={$$typeof:o,_context:M},M},Ae.createElement=function(M,W,Z){var K,te={},ye=null;if(W!=null)for(K in W.key!==void 0&&(ye=""+W.key),W)j.call(W,K)&&K!=="key"&&K!=="__self"&&K!=="__source"&&(te[K]=W[K]);var re=arguments.length-2;if(re===1)te.children=Z;else if(1<re){for(var Ce=Array(re),Re=0;Re<re;Re++)Ce[Re]=arguments[Re+2];te.children=Ce}if(M&&M.defaultProps)for(K in re=M.defaultProps,re)te[K]===void 0&&(te[K]=re[K]);return F(M,ye,void 0,void 0,null,te)},Ae.createRef=function(){return{current:null}},Ae.forwardRef=function(M){return{$$typeof:u,render:M}},Ae.isValidElement=V,Ae.lazy=function(M){return{$$typeof:m,_payload:{_status:-1,_result:M},_init:G}},Ae.memo=function(M,W){return{$$typeof:p,type:M,compare:W===void 0?null:W}},Ae.startTransition=function(M){var W=k.T,Z={};k.T=Z;try{var K=M(),te=k.S;te!==null&&te(Z,K),typeof K=="object"&&K!==null&&typeof K.then=="function"&&K.then(he,ee)}catch(ye){ee(ye)}finally{k.T=W}},Ae.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},Ae.use=function(M){return k.H.use(M)},Ae.useActionState=function(M,W,Z){return k.H.useActionState(M,W,Z)},Ae.useCallback=function(M,W){return k.H.useCallback(M,W)},Ae.useContext=function(M){return k.H.useContext(M)},Ae.useDebugValue=function(){},Ae.useDeferredValue=function(M,W){return k.H.useDeferredValue(M,W)},Ae.useEffect=function(M,W,Z){var K=k.H;if(typeof Z=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return K.useEffect(M,W)},Ae.useId=function(){return k.H.useId()},Ae.useImperativeHandle=function(M,W,Z){return k.H.useImperativeHandle(M,W,Z)},Ae.useInsertionEffect=function(M,W){return k.H.useInsertionEffect(M,W)},Ae.useLayoutEffect=function(M,W){return k.H.useLayoutEffect(M,W)},Ae.useMemo=function(M,W){return k.H.useMemo(M,W)},Ae.useOptimistic=function(M,W){return k.H.useOptimistic(M,W)},Ae.useReducer=function(M,W,Z){return k.H.useReducer(M,W,Z)},Ae.useRef=function(M){return k.H.useRef(M)},Ae.useState=function(M){return k.H.useState(M)},Ae.useSyncExternalStore=function(M,W,Z){return k.H.useSyncExternalStore(M,W,Z)},Ae.useTransition=function(){return k.H.useTransition()},Ae.version="19.1.1",Ae}var rg;function Nd(){return rg||(rg=1,rd.exports=OA()),rd.exports}var P=Nd();const NA=ny(P);var ad={exports:{}},ya={},od={exports:{}},ld={};var ag;function IA(){return ag||(ag=1,(function(d){function e(N,G){var ee=N.length;N.push(G);e:for(;0<ee;){var he=ee-1>>>1,M=N[he];if(0<r(M,G))N[he]=G,N[ee]=M,ee=he;else break e}}function t(N){return N.length===0?null:N[0]}function s(N){if(N.length===0)return null;var G=N[0],ee=N.pop();if(ee!==G){N[0]=ee;e:for(var he=0,M=N.length,W=M>>>1;he<W;){var Z=2*(he+1)-1,K=N[Z],te=Z+1,ye=N[te];if(0>r(K,ee))te<M&&0>r(ye,K)?(N[he]=ye,N[te]=ee,he=te):(N[he]=K,N[Z]=ee,he=Z);else if(te<M&&0>r(ye,ee))N[he]=ye,N[te]=ee,he=te;else break e}}return G}function r(N,G){var ee=N.sortIndex-G.sortIndex;return ee!==0?ee:N.id-G.id}if(d.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var o=performance;d.unstable_now=function(){return o.now()}}else{var l=Date,u=l.now();d.unstable_now=function(){return l.now()-u}}var h=[],p=[],m=1,b=null,v=3,A=!1,x=!1,C=!1,T=!1,w=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function O(N){for(var G=t(p);G!==null;){if(G.callback===null)s(p);else if(G.startTime<=N)s(p),G.sortIndex=G.expirationTime,e(h,G);else break;G=t(p)}}function k(N){if(C=!1,O(N),!x)if(t(h)!==null)x=!0,j||(j=!0,le());else{var G=t(p);G!==null&&ce(k,G.startTime-N)}}var j=!1,F=-1,q=5,V=-1;function Q(){return T?!0:!(d.unstable_now()-V<q)}function J(){if(T=!1,j){var N=d.unstable_now();V=N;var G=!0;try{e:{x=!1,C&&(C=!1,_(F),F=-1),A=!0;var ee=v;try{t:{for(O(N),b=t(h);b!==null&&!(b.expirationTime>N&&Q());){var he=b.callback;if(typeof he=="function"){b.callback=null,v=b.priorityLevel;var M=he(b.expirationTime<=N);if(N=d.unstable_now(),typeof M=="function"){b.callback=M,O(N),G=!0;break t}b===t(h)&&s(h),O(N)}else s(h);b=t(h)}if(b!==null)G=!0;else{var W=t(p);W!==null&&ce(k,W.startTime-N),G=!1}}break e}finally{b=null,v=ee,A=!1}G=void 0}}finally{G?le():j=!1}}}var le;if(typeof R=="function")le=function(){R(J)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,ae=de.port2;de.port1.onmessage=J,le=function(){ae.postMessage(null)}}else le=function(){w(J,0)};function ce(N,G){F=w(function(){N(d.unstable_now())},G)}d.unstable_IdlePriority=5,d.unstable_ImmediatePriority=1,d.unstable_LowPriority=4,d.unstable_NormalPriority=3,d.unstable_Profiling=null,d.unstable_UserBlockingPriority=2,d.unstable_cancelCallback=function(N){N.callback=null},d.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<N?Math.floor(1e3/N):5},d.unstable_getCurrentPriorityLevel=function(){return v},d.unstable_next=function(N){switch(v){case 1:case 2:case 3:var G=3;break;default:G=v}var ee=v;v=G;try{return N()}finally{v=ee}},d.unstable_requestPaint=function(){T=!0},d.unstable_runWithPriority=function(N,G){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var ee=v;v=N;try{return G()}finally{v=ee}},d.unstable_scheduleCallback=function(N,G,ee){var he=d.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?he+ee:he):ee=he,N){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=ee+M,N={id:m++,callback:G,priorityLevel:N,startTime:ee,expirationTime:M,sortIndex:-1},ee>he?(N.sortIndex=ee,e(p,N),t(h)===null&&N===t(p)&&(C?(_(F),F=-1):C=!0,ce(k,ee-he))):(N.sortIndex=M,e(h,N),x||A||(x=!0,j||(j=!0,le()))),N},d.unstable_shouldYield=Q,d.unstable_wrapCallback=function(N){var G=v;return function(){var ee=v;v=G;try{return N.apply(this,arguments)}finally{v=ee}}}})(ld)),ld}var og;function jA(){return og||(og=1,od.exports=IA()),od.exports}var cd={exports:{}},Pt={};var lg;function BA(){if(lg)return Pt;lg=1;var d=Nd();function e(h){var p="https://react.dev/errors/"+h;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var m=2;m<arguments.length;m++)p+="&args[]="+encodeURIComponent(arguments[m])}return"Minified React error #"+h+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},r=Symbol.for("react.portal");function o(h,p,m){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:b==null?null:""+b,children:h,containerInfo:p,implementation:m}}var l=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function u(h,p){if(h==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Pt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Pt.createPortal=function(h,p){var m=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return o(h,p,null,m)},Pt.flushSync=function(h){var p=l.T,m=s.p;try{if(l.T=null,s.p=2,h)return h()}finally{l.T=p,s.p=m,s.d.f()}},Pt.preconnect=function(h,p){typeof h=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(h,p))},Pt.prefetchDNS=function(h){typeof h=="string"&&s.d.D(h)},Pt.preinit=function(h,p){if(typeof h=="string"&&p&&typeof p.as=="string"){var m=p.as,b=u(m,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,A=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;m==="style"?s.d.S(h,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:b,integrity:v,fetchPriority:A}):m==="script"&&s.d.X(h,{crossOrigin:b,integrity:v,fetchPriority:A,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Pt.preinitModule=function(h,p){if(typeof h=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var m=u(p.as,p.crossOrigin);s.d.M(h,{crossOrigin:m,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(h)},Pt.preload=function(h,p){if(typeof h=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var m=p.as,b=u(m,p.crossOrigin);s.d.L(h,m,{crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Pt.preloadModule=function(h,p){if(typeof h=="string")if(p){var m=u(p.as,p.crossOrigin);s.d.m(h,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:m,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(h)},Pt.requestFormReset=function(h){s.d.r(h)},Pt.unstable_batchedUpdates=function(h,p){return h(p)},Pt.useFormState=function(h,p,m){return l.H.useFormState(h,p,m)},Pt.useFormStatus=function(){return l.H.useHostTransitionStatus()},Pt.version="19.1.1",Pt}var cg;function FA(){if(cg)return cd.exports;cg=1;function d(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d)}catch(e){console.error(e)}}return d(),cd.exports=BA(),cd.exports}var ug;function UA(){if(ug)return ya;ug=1;var d=jA(),e=Nd(),t=FA();function s(n){var i="https://react.dev/errors/"+n;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function o(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function l(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function u(n){if(o(n)!==n)throw Error(s(188))}function h(n){var i=n.alternate;if(!i){if(i=o(n),i===null)throw Error(s(188));return i!==n?null:n}for(var a=n,c=i;;){var f=a.return;if(f===null)break;var y=f.alternate;if(y===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===y.child){for(y=f.child;y;){if(y===a)return u(f),n;if(y===c)return u(f),i;y=y.sibling}throw Error(s(188))}if(a.return!==c.return)a=f,c=y;else{for(var S=!1,E=f.child;E;){if(E===a){S=!0,a=f,c=y;break}if(E===c){S=!0,c=f,a=y;break}E=E.sibling}if(!S){for(E=y.child;E;){if(E===a){S=!0,a=y,c=f;break}if(E===c){S=!0,c=y,a=f;break}E=E.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==c)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?n:i}function p(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n;for(n=n.child;n!==null;){if(i=p(n),i!==null)return i;n=n.sibling}return null}var m=Object.assign,b=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),_=Symbol.for("react.consumer"),R=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),V=Symbol.for("react.activity"),Q=Symbol.for("react.memo_cache_sentinel"),J=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=J&&n[J]||n["@@iterator"],typeof n=="function"?n:null)}var de=Symbol.for("react.client.reference");function ae(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===de?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case x:return"Fragment";case T:return"Profiler";case C:return"StrictMode";case k:return"Suspense";case j:return"SuspenseList";case V:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case A:return"Portal";case R:return(n.displayName||"Context")+".Provider";case _:return(n._context.displayName||"Context")+".Consumer";case O:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case F:return i=n.displayName||null,i!==null?i:ae(n.type)||"Memo";case q:i=n._payload,n=n._init;try{return ae(n(i))}catch{}}return null}var ce=Array.isArray,N=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},he=[],M=-1;function W(n){return{current:n}}function Z(n){0>M||(n.current=he[M],he[M]=null,M--)}function K(n,i){M++,he[M]=n.current,n.current=i}var te=W(null),ye=W(null),re=W(null),Ce=W(null);function Re(n,i){switch(K(re,i),K(ye,n),K(te,null),i.nodeType){case 9:case 11:n=(n=i.documentElement)&&(n=n.namespaceURI)?Rm(n):0;break;default:if(n=i.tagName,i=i.namespaceURI)i=Rm(i),n=Dm(i,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Z(te),K(te,n)}function We(){Z(te),Z(ye),Z(re)}function He(n){n.memoizedState!==null&&K(Ce,n);var i=te.current,a=Dm(i,n.type);i!==a&&(K(ye,n),K(te,a))}function Ut(n){ye.current===n&&(Z(te),Z(ye)),Ce.current===n&&(Z(Ce),da._currentValue=ee)}var Kt=Object.prototype.hasOwnProperty,De=d.unstable_scheduleCallback,Ie=d.unstable_cancelCallback,ot=d.unstable_shouldYield,ht=d.unstable_requestPaint,Et=d.unstable_now,ji=d.unstable_getCurrentPriorityLevel,ps=d.unstable_ImmediatePriority,Xa=d.unstable_UserBlockingPriority,zn=d.unstable_NormalPriority,Gl=d.unstable_LowPriority,Wa=d.unstable_IdlePriority,ql=d.log,Vl=d.unstable_setDisableYieldValue,Bi=null,it=null;function It(n){if(typeof ql=="function"&&Vl(n),it&&typeof it.setStrictMode=="function")try{it.setStrictMode(Bi,n)}catch{}}var st=Math.clz32?Math.clz32:bb,vr=Math.log,yb=Math.LN2;function bb(n){return n>>>=0,n===0?32:31-(vr(n)/yb|0)|0}var $a=256,Ka=4194304;function Fi(n){var i=n&42;if(i!==0)return i;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Qa(n,i,a){var c=n.pendingLanes;if(c===0)return 0;var f=0,y=n.suspendedLanes,S=n.pingedLanes;n=n.warmLanes;var E=c&134217727;return E!==0?(c=E&~y,c!==0?f=Fi(c):(S&=E,S!==0?f=Fi(S):a||(a=E&~n,a!==0&&(f=Fi(a))))):(E=c&~y,E!==0?f=Fi(E):S!==0?f=Fi(S):a||(a=c&~n,a!==0&&(f=Fi(a)))),f===0?0:i!==0&&i!==f&&(i&y)===0&&(y=f&-f,a=i&-i,y>=a||y===32&&(a&4194048)!==0)?i:f}function Ar(n,i){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&i)===0}function vb(n,i){switch(n){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uh(){var n=$a;return $a<<=1,($a&4194048)===0&&($a=256),n}function dh(){var n=Ka;return Ka<<=1,(Ka&62914560)===0&&(Ka=4194304),n}function Yl(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Sr(n,i){n.pendingLanes|=i,i!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Ab(n,i,a,c,f,y){var S=n.pendingLanes;n.pendingLanes=a,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=a,n.entangledLanes&=a,n.errorRecoveryDisabledLanes&=a,n.shellSuspendCounter=0;var E=n.entanglements,D=n.expirationTimes,U=n.hiddenUpdates;for(a=S&~a;0<a;){var Y=31-st(a),$=1<<Y;E[Y]=0,D[Y]=-1;var H=U[Y];if(H!==null)for(U[Y]=null,Y=0;Y<H.length;Y++){var z=H[Y];z!==null&&(z.lane&=-536870913)}a&=~$}c!==0&&hh(n,c,0),y!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=y&~(S&~i))}function hh(n,i,a){n.pendingLanes|=i,n.suspendedLanes&=~i;var c=31-st(i);n.entangledLanes|=i,n.entanglements[c]=n.entanglements[c]|1073741824|a&4194090}function fh(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-st(a),f=1<<c;f&i|n[c]&i&&(n[c]|=i),a&=~f}}function Xl(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Wl(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function ph(){var n=G.p;return n!==0?n:(n=window.event,n===void 0?32:Wm(n.type))}function Sb(n,i){var a=G.p;try{return G.p=n,i()}finally{G.p=a}}var di=Math.random().toString(36).slice(2),kt="__reactFiber$"+di,Ht="__reactProps$"+di,ms="__reactContainer$"+di,$l="__reactEvents$"+di,Cb="__reactListeners$"+di,xb="__reactHandles$"+di,mh="__reactResources$"+di,Cr="__reactMarker$"+di;function Kl(n){delete n[kt],delete n[Ht],delete n[$l],delete n[Cb],delete n[xb]}function gs(n){var i=n[kt];if(i)return i;for(var a=n.parentNode;a;){if(i=a[ms]||a[kt]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Pm(n);n!==null;){if(a=n[kt])return a;n=Pm(n)}return i}n=a,a=n.parentNode}return null}function ys(n){if(n=n[kt]||n[ms]){var i=n.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return n}return null}function xr(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n.stateNode;throw Error(s(33))}function bs(n){var i=n[mh];return i||(i=n[mh]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function bt(n){n[Cr]=!0}var gh=new Set,yh={};function Ui(n,i){vs(n,i),vs(n+"Capture",i)}function vs(n,i){for(yh[n]=i,n=0;n<i.length;n++)gh.add(i[n])}var wb=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),bh={},vh={};function Eb(n){return Kt.call(vh,n)?!0:Kt.call(bh,n)?!1:wb.test(n)?vh[n]=!0:(bh[n]=!0,!1)}function Ja(n,i,a){if(Eb(i))if(a===null)n.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":n.removeAttribute(i);return;case"boolean":var c=i.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){n.removeAttribute(i);return}}n.setAttribute(i,""+a)}}function Za(n,i,a){if(a===null)n.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(i);return}n.setAttribute(i,""+a)}}function Gn(n,i,a,c){if(c===null)n.removeAttribute(a);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttributeNS(i,a,""+c)}}var Ql,Ah;function As(n){if(Ql===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);Ql=i&&i[1]||"",Ah=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ql+n+Ah}var Jl=!1;function Zl(n,i){if(!n||Jl)return"";Jl=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(i){var $=function(){throw Error()};if(Object.defineProperty($.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct($,[])}catch(z){var H=z}Reflect.construct(n,[],$)}else{try{$.call()}catch(z){H=z}n.call($.prototype)}}else{try{throw Error()}catch(z){H=z}($=n())&&typeof $.catch=="function"&&$.catch(function(){})}}catch(z){if(z&&H&&typeof z.stack=="string")return[z.stack,H.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var y=c.DetermineComponentFrameRoot(),S=y[0],E=y[1];if(S&&E){var D=S.split(`
`),U=E.split(`
`);for(f=c=0;c<D.length&&!D[c].includes("DetermineComponentFrameRoot");)c++;for(;f<U.length&&!U[f].includes("DetermineComponentFrameRoot");)f++;if(c===D.length||f===U.length)for(c=D.length-1,f=U.length-1;1<=c&&0<=f&&D[c]!==U[f];)f--;for(;1<=c&&0<=f;c--,f--)if(D[c]!==U[f]){if(c!==1||f!==1)do if(c--,f--,0>f||D[c]!==U[f]){var Y=`
`+D[c].replace(" at new "," at ");return n.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",n.displayName)),Y}while(1<=c&&0<=f);break}}}finally{Jl=!1,Error.prepareStackTrace=a}return(a=n?n.displayName||n.name:"")?As(a):""}function Tb(n){switch(n.tag){case 26:case 27:case 5:return As(n.type);case 16:return As("Lazy");case 13:return As("Suspense");case 19:return As("SuspenseList");case 0:case 15:return Zl(n.type,!1);case 11:return Zl(n.type.render,!1);case 1:return Zl(n.type,!0);case 31:return As("Activity");default:return""}}function Sh(n){try{var i="";do i+=Tb(n),n=n.return;while(n);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function cn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ch(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function _b(n){var i=Ch(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,y=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(S){c=""+S,y.call(this,S)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(S){c=""+S},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function eo(n){n._valueTracker||(n._valueTracker=_b(n))}function xh(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ch(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function to(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Rb=/[\n"\\]/g;function un(n){return n.replace(Rb,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function ec(n,i,a,c,f,y,S,E){n.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?n.type=S:n.removeAttribute("type"),i!=null?S==="number"?(i===0&&n.value===""||n.value!=i)&&(n.value=""+cn(i)):n.value!==""+cn(i)&&(n.value=""+cn(i)):S!=="submit"&&S!=="reset"||n.removeAttribute("value"),i!=null?tc(n,S,cn(i)):a!=null?tc(n,S,cn(a)):c!=null&&n.removeAttribute("value"),f==null&&y!=null&&(n.defaultChecked=!!y),f!=null&&(n.checked=f&&typeof f!="function"&&typeof f!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?n.name=""+cn(E):n.removeAttribute("name")}function wh(n,i,a,c,f,y,S,E){if(y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(n.type=y),i!=null||a!=null){if(!(y!=="submit"&&y!=="reset"||i!=null))return;a=a!=null?""+cn(a):"",i=i!=null?""+cn(i):a,E||i===n.value||(n.value=i),n.defaultValue=i}c=c??f,c=typeof c!="function"&&typeof c!="symbol"&&!!c,n.checked=E?n.checked:!!c,n.defaultChecked=!!c,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(n.name=S)}function tc(n,i,a){i==="number"&&to(n.ownerDocument)===n||n.defaultValue===""+a||(n.defaultValue=""+a)}function Ss(n,i,a,c){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&c&&(n[a].defaultSelected=!0)}else{for(a=""+cn(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function Eh(n,i,a){if(i!=null&&(i=""+cn(i),i!==n.value&&(n.value=i),a==null)){n.defaultValue!==i&&(n.defaultValue=i);return}n.defaultValue=a!=null?""+cn(a):""}function Th(n,i,a,c){if(i==null){if(c!=null){if(a!=null)throw Error(s(92));if(ce(c)){if(1<c.length)throw Error(s(93));c=c[0]}a=c}a==null&&(a=""),i=a}a=cn(i),n.defaultValue=a,c=n.textContent,c===a&&c!==""&&c!==null&&(n.value=c)}function Cs(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Db=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _h(n,i,a){var c=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?c?n.setProperty(i,""):i==="float"?n.cssFloat="":n[i]="":c?n.setProperty(i,a):typeof a!="number"||a===0||Db.has(i)?i==="float"?n.cssFloat=a:n[i]=(""+a).trim():n[i]=a+"px"}function Rh(n,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(n=n.style,a!=null){for(var c in a)!a.hasOwnProperty(c)||i!=null&&i.hasOwnProperty(c)||(c.indexOf("--")===0?n.setProperty(c,""):c==="float"?n.cssFloat="":n[c]="");for(var f in i)c=i[f],i.hasOwnProperty(f)&&a[f]!==c&&_h(n,f,c)}else for(var y in i)i.hasOwnProperty(y)&&_h(n,y,i[y])}function nc(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),kb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function no(n){return kb.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var ic=null;function sc(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var xs=null,ws=null;function Dh(n){var i=ys(n);if(i&&(n=i.stateNode)){var a=n[Ht]||null;e:switch(n=i.stateNode,i.type){case"input":if(ec(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+un(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var f=c[Ht]||null;if(!f)throw Error(s(90));ec(c,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<a.length;i++)c=a[i],c.form===n.form&&xh(c)}break e;case"textarea":Eh(n,a.value,a.defaultValue);break e;case"select":i=a.value,i!=null&&Ss(n,!!a.multiple,i,!1)}}}var rc=!1;function Mh(n,i,a){if(rc)return n(i,a);rc=!0;try{var c=n(i);return c}finally{if(rc=!1,(xs!==null||ws!==null)&&(zo(),xs&&(i=xs,n=ws,ws=xs=null,Dh(i),n)))for(i=0;i<n.length;i++)Dh(n[i])}}function wr(n,i){var a=n.stateNode;if(a===null)return null;var c=a[Ht]||null;if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ac=!1;if(qn)try{var Er={};Object.defineProperty(Er,"passive",{get:function(){ac=!0}}),window.addEventListener("test",Er,Er),window.removeEventListener("test",Er,Er)}catch{ac=!1}var hi=null,oc=null,io=null;function kh(){if(io)return io;var n,i=oc,a=i.length,c,f="value"in hi?hi.value:hi.textContent,y=f.length;for(n=0;n<a&&i[n]===f[n];n++);var S=a-n;for(c=1;c<=S&&i[a-c]===f[y-c];c++);return io=f.slice(n,1<c?1-c:void 0)}function so(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function ro(){return!0}function Lh(){return!1}function zt(n){function i(a,c,f,y,S){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=y,this.target=S,this.currentTarget=null;for(var E in n)n.hasOwnProperty(E)&&(a=n[E],this[E]=a?a(y):y[E]);return this.isDefaultPrevented=(y.defaultPrevented!=null?y.defaultPrevented:y.returnValue===!1)?ro:Lh,this.isPropagationStopped=Lh,this}return m(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ro)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ro)},persist:function(){},isPersistent:ro}),i}var Hi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ao=zt(Hi),Tr=m({},Hi,{view:0,detail:0}),Lb=zt(Tr),lc,cc,_r,oo=m({},Tr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==_r&&(_r&&n.type==="mousemove"?(lc=n.screenX-_r.screenX,cc=n.screenY-_r.screenY):cc=lc=0,_r=n),lc)},movementY:function(n){return"movementY"in n?n.movementY:cc}}),Ph=zt(oo),Pb=m({},oo,{dataTransfer:0}),Ob=zt(Pb),Nb=m({},Tr,{relatedTarget:0}),uc=zt(Nb),Ib=m({},Hi,{animationName:0,elapsedTime:0,pseudoElement:0}),jb=zt(Ib),Bb=m({},Hi,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Fb=zt(Bb),Ub=m({},Hi,{data:0}),Oh=zt(Ub),Hb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qb(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Gb[n])?!!i[n]:!1}function dc(){return qb}var Vb=m({},Tr,{key:function(n){if(n.key){var i=Hb[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=so(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?zb[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dc,charCode:function(n){return n.type==="keypress"?so(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?so(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Yb=zt(Vb),Xb=m({},oo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nh=zt(Xb),Wb=m({},Tr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dc}),$b=zt(Wb),Kb=m({},Hi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qb=zt(Kb),Jb=m({},oo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Zb=zt(Jb),ev=m({},Hi,{newState:0,oldState:0}),tv=zt(ev),nv=[9,13,27,32],hc=qn&&"CompositionEvent"in window,Rr=null;qn&&"documentMode"in document&&(Rr=document.documentMode);var iv=qn&&"TextEvent"in window&&!Rr,Ih=qn&&(!hc||Rr&&8<Rr&&11>=Rr),jh=" ",Bh=!1;function Fh(n,i){switch(n){case"keyup":return nv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Es=!1;function sv(n,i){switch(n){case"compositionend":return Uh(i);case"keypress":return i.which!==32?null:(Bh=!0,jh);case"textInput":return n=i.data,n===jh&&Bh?null:n;default:return null}}function rv(n,i){if(Es)return n==="compositionend"||!hc&&Fh(n,i)?(n=kh(),io=oc=hi=null,Es=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ih&&i.locale!=="ko"?null:i.data;default:return null}}var av={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!av[n.type]:i==="textarea"}function zh(n,i,a,c){xs?ws?ws.push(c):ws=[c]:xs=c,i=Wo(i,"onChange"),0<i.length&&(a=new ao("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Dr=null,Mr=null;function ov(n){xm(n,0)}function lo(n){var i=xr(n);if(xh(i))return n}function Gh(n,i){if(n==="change")return i}var qh=!1;if(qn){var fc;if(qn){var pc="oninput"in document;if(!pc){var Vh=document.createElement("div");Vh.setAttribute("oninput","return;"),pc=typeof Vh.oninput=="function"}fc=pc}else fc=!1;qh=fc&&(!document.documentMode||9<document.documentMode)}function Yh(){Dr&&(Dr.detachEvent("onpropertychange",Xh),Mr=Dr=null)}function Xh(n){if(n.propertyName==="value"&&lo(Mr)){var i=[];zh(i,Mr,n,sc(n)),Mh(ov,i)}}function lv(n,i,a){n==="focusin"?(Yh(),Dr=i,Mr=a,Dr.attachEvent("onpropertychange",Xh)):n==="focusout"&&Yh()}function cv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return lo(Mr)}function uv(n,i){if(n==="click")return lo(i)}function dv(n,i){if(n==="input"||n==="change")return lo(i)}function hv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Qt=typeof Object.is=="function"?Object.is:hv;function kr(n,i){if(Qt(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!Kt.call(i,f)||!Qt(n[f],i[f]))return!1}return!0}function Wh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function $h(n,i){var a=Wh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Wh(a)}}function Kh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Kh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Qh(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var i=to(n.document);i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=to(n.document)}return i}function mc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}var fv=qn&&"documentMode"in document&&11>=document.documentMode,Ts=null,gc=null,Lr=null,yc=!1;function Jh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;yc||Ts==null||Ts!==to(c)||(c=Ts,"selectionStart"in c&&mc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Lr&&kr(Lr,c)||(Lr=c,c=Wo(gc,"onSelect"),0<c.length&&(i=new ao("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Ts)))}function zi(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var _s={animationend:zi("Animation","AnimationEnd"),animationiteration:zi("Animation","AnimationIteration"),animationstart:zi("Animation","AnimationStart"),transitionrun:zi("Transition","TransitionRun"),transitionstart:zi("Transition","TransitionStart"),transitioncancel:zi("Transition","TransitionCancel"),transitionend:zi("Transition","TransitionEnd")},bc={},Zh={};qn&&(Zh=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function Gi(n){if(bc[n])return bc[n];if(!_s[n])return n;var i=_s[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Zh)return bc[n]=i[a];return n}var ef=Gi("animationend"),tf=Gi("animationiteration"),nf=Gi("animationstart"),pv=Gi("transitionrun"),mv=Gi("transitionstart"),gv=Gi("transitioncancel"),sf=Gi("transitionend"),rf=new Map,vc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vc.push("scrollEnd");function Sn(n,i){rf.set(n,i),Ui(i,[n])}var af=new WeakMap;function dn(n,i){if(typeof n=="object"&&n!==null){var a=af.get(n);return a!==void 0?a:(i={value:n,source:i,stack:Sh(i)},af.set(n,i),i)}return{value:n,source:i,stack:Sh(i)}}var hn=[],Rs=0,Ac=0;function co(){for(var n=Rs,i=Ac=Rs=0;i<n;){var a=hn[i];hn[i++]=null;var c=hn[i];hn[i++]=null;var f=hn[i];hn[i++]=null;var y=hn[i];if(hn[i++]=null,c!==null&&f!==null){var S=c.pending;S===null?f.next=f:(f.next=S.next,S.next=f),c.pending=f}y!==0&&of(a,f,y)}}function uo(n,i,a,c){hn[Rs++]=n,hn[Rs++]=i,hn[Rs++]=a,hn[Rs++]=c,Ac|=c,n.lanes|=c,n=n.alternate,n!==null&&(n.lanes|=c)}function Sc(n,i,a,c){return uo(n,i,a,c),ho(n)}function Ds(n,i){return uo(n,null,null,i),ho(n)}function of(n,i,a){n.lanes|=a;var c=n.alternate;c!==null&&(c.lanes|=a);for(var f=!1,y=n.return;y!==null;)y.childLanes|=a,c=y.alternate,c!==null&&(c.childLanes|=a),y.tag===22&&(n=y.stateNode,n===null||n._visibility&1||(f=!0)),n=y,y=y.return;return n.tag===3?(y=n.stateNode,f&&i!==null&&(f=31-st(a),n=y.hiddenUpdates,c=n[f],c===null?n[f]=[i]:c.push(i),i.lane=a|536870912),y):null}function ho(n){if(50<ia)throw ia=0,_u=null,Error(s(185));for(var i=n.return;i!==null;)n=i,i=n.return;return n.tag===3?n.stateNode:null}var Ms={};function yv(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jt(n,i,a,c){return new yv(n,i,a,c)}function Cc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Vn(n,i){var a=n.alternate;return a===null?(a=Jt(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&65011712,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a.refCleanup=n.refCleanup,a}function lf(n,i){n.flags&=65011714;var a=n.alternate;return a===null?(n.childLanes=0,n.lanes=i,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=a.childLanes,n.lanes=a.lanes,n.child=a.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=a.memoizedProps,n.memoizedState=a.memoizedState,n.updateQueue=a.updateQueue,n.type=a.type,i=a.dependencies,n.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),n}function fo(n,i,a,c,f,y){var S=0;if(c=n,typeof n=="function")Cc(n)&&(S=1);else if(typeof n=="string")S=vA(n,a,te.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case V:return n=Jt(31,a,i,f),n.elementType=V,n.lanes=y,n;case x:return qi(a.children,f,y,i);case C:S=8,f|=24;break;case T:return n=Jt(12,a,i,f|2),n.elementType=T,n.lanes=y,n;case k:return n=Jt(13,a,i,f),n.elementType=k,n.lanes=y,n;case j:return n=Jt(19,a,i,f),n.elementType=j,n.lanes=y,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case w:case R:S=10;break e;case _:S=9;break e;case O:S=11;break e;case F:S=14;break e;case q:S=16,c=null;break e}S=29,a=Error(s(130,n===null?"null":typeof n,"")),c=null}return i=Jt(S,a,i,f),i.elementType=n,i.type=c,i.lanes=y,i}function qi(n,i,a,c){return n=Jt(7,n,c,i),n.lanes=a,n}function xc(n,i,a){return n=Jt(6,n,null,i),n.lanes=a,n}function wc(n,i,a){return i=Jt(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}var ks=[],Ls=0,po=null,mo=0,fn=[],pn=0,Vi=null,Yn=1,Xn="";function Yi(n,i){ks[Ls++]=mo,ks[Ls++]=po,po=n,mo=i}function cf(n,i,a){fn[pn++]=Yn,fn[pn++]=Xn,fn[pn++]=Vi,Vi=n;var c=Yn;n=Xn;var f=32-st(c)-1;c&=~(1<<f),a+=1;var y=32-st(i)+f;if(30<y){var S=f-f%5;y=(c&(1<<S)-1).toString(32),c>>=S,f-=S,Yn=1<<32-st(i)+f|a<<f|c,Xn=y+n}else Yn=1<<y|a<<f|c,Xn=n}function Ec(n){n.return!==null&&(Yi(n,1),cf(n,1,0))}function Tc(n){for(;n===po;)po=ks[--Ls],ks[Ls]=null,mo=ks[--Ls],ks[Ls]=null;for(;n===Vi;)Vi=fn[--pn],fn[pn]=null,Xn=fn[--pn],fn[pn]=null,Yn=fn[--pn],fn[pn]=null}var jt=null,rt=null,Pe=!1,Xi=null,Rn=!1,_c=Error(s(519));function Wi(n){var i=Error(s(418,""));throw Nr(dn(i,n)),_c}function uf(n){var i=n.stateNode,a=n.type,c=n.memoizedProps;switch(i[kt]=n,i[Ht]=c,a){case"dialog":Te("cancel",i),Te("close",i);break;case"iframe":case"object":case"embed":Te("load",i);break;case"video":case"audio":for(a=0;a<ra.length;a++)Te(ra[a],i);break;case"source":Te("error",i);break;case"img":case"image":case"link":Te("error",i),Te("load",i);break;case"details":Te("toggle",i);break;case"input":Te("invalid",i),wh(i,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),eo(i);break;case"select":Te("invalid",i);break;case"textarea":Te("invalid",i),Th(i,c.value,c.defaultValue,c.children),eo(i)}a=c.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||c.suppressHydrationWarning===!0||_m(i.textContent,a)?(c.popover!=null&&(Te("beforetoggle",i),Te("toggle",i)),c.onScroll!=null&&Te("scroll",i),c.onScrollEnd!=null&&Te("scrollend",i),c.onClick!=null&&(i.onclick=$o),i=!0):i=!1,i||Wi(n)}function df(n){for(jt=n.return;jt;)switch(jt.tag){case 5:case 13:Rn=!1;return;case 27:case 3:Rn=!0;return;default:jt=jt.return}}function Pr(n){if(n!==jt)return!1;if(!Pe)return df(n),Pe=!0,!1;var i=n.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=n.type,a=!(a!=="form"&&a!=="button")||Gu(n.type,n.memoizedProps)),a=!a),a&&rt&&Wi(n),df(n),i===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8)if(a=n.data,a==="/$"){if(i===0){rt=xn(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;n=n.nextSibling}rt=null}}else i===27?(i=rt,Ri(n.type)?(n=Xu,Xu=null,rt=n):rt=i):rt=jt?xn(n.stateNode.nextSibling):null;return!0}function Or(){rt=jt=null,Pe=!1}function hf(){var n=Xi;return n!==null&&(Vt===null?Vt=n:Vt.push.apply(Vt,n),Xi=null),n}function Nr(n){Xi===null?Xi=[n]:Xi.push(n)}var Rc=W(null),$i=null,Wn=null;function fi(n,i,a){K(Rc,i._currentValue),i._currentValue=a}function $n(n){n._currentValue=Rc.current,Z(Rc)}function Dc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Mc(n,i,a,c){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var y=f.dependencies;if(y!==null){var S=f.child;y=y.firstContext;e:for(;y!==null;){var E=y;y=f;for(var D=0;D<i.length;D++)if(E.context===i[D]){y.lanes|=a,E=y.alternate,E!==null&&(E.lanes|=a),Dc(y.return,a,n),c||(S=null);break e}y=E.next}}else if(f.tag===18){if(S=f.return,S===null)throw Error(s(341));S.lanes|=a,y=S.alternate,y!==null&&(y.lanes|=a),Dc(S,a,n),S=null}else S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===n){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}}function Ir(n,i,a,c){n=null;for(var f=i,y=!1;f!==null;){if(!y){if((f.flags&524288)!==0)y=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var S=f.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var E=f.type;Qt(f.pendingProps.value,S.value)||(n!==null?n.push(E):n=[E])}}else if(f===Ce.current){if(S=f.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(da):n=[da])}f=f.return}n!==null&&Mc(i,n,a,c),i.flags|=262144}function go(n){for(n=n.firstContext;n!==null;){if(!Qt(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Ki(n){$i=n,Wn=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Lt(n){return ff($i,n)}function yo(n,i){return $i===null&&Ki(n),ff(n,i)}function ff(n,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Wn===null){if(n===null)throw Error(s(308));Wn=i,n.dependencies={lanes:0,firstContext:i},n.flags|=524288}else Wn=Wn.next=i;return a}var bv=typeof AbortController<"u"?AbortController:function(){var n=[],i=this.signal={aborted:!1,addEventListener:function(a,c){n.push(c)}};this.abort=function(){i.aborted=!0,n.forEach(function(a){return a()})}},vv=d.unstable_scheduleCallback,Av=d.unstable_NormalPriority,gt={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function kc(){return{controller:new bv,data:new Map,refCount:0}}function jr(n){n.refCount--,n.refCount===0&&vv(Av,function(){n.controller.abort()})}var Br=null,Lc=0,Ps=0,Os=null;function Sv(n,i){if(Br===null){var a=Br=[];Lc=0,Ps=Ou(),Os={status:"pending",value:void 0,then:function(c){a.push(c)}}}return Lc++,i.then(pf,pf),i}function pf(){if(--Lc===0&&Br!==null){Os!==null&&(Os.status="fulfilled");var n=Br;Br=null,Ps=0,Os=null;for(var i=0;i<n.length;i++)(0,n[i])()}}function Cv(n,i){var a=[],c={status:"pending",value:null,reason:null,then:function(f){a.push(f)}};return n.then(function(){c.status="fulfilled",c.value=i;for(var f=0;f<a.length;f++)(0,a[f])(i)},function(f){for(c.status="rejected",c.reason=f,f=0;f<a.length;f++)(0,a[f])(void 0)}),c}var mf=N.S;N.S=function(n,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&Sv(n,i),mf!==null&&mf(n,i)};var Qi=W(null);function Pc(){var n=Qi.current;return n!==null?n:Ve.pooledCache}function bo(n,i){i===null?K(Qi,Qi.current):K(Qi,i.pool)}function gf(){var n=Pc();return n===null?null:{parent:gt._currentValue,pool:n}}var Fr=Error(s(460)),yf=Error(s(474)),vo=Error(s(542)),Oc={then:function(){}};function bf(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Ao(){}function vf(n,i,a){switch(a=n[a],a===void 0?n.push(i):a!==i&&(i.then(Ao,Ao),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,Sf(n),n;default:if(typeof i.status=="string")i.then(Ao,Ao);else{if(n=Ve,n!==null&&100<n.shellSuspendCounter)throw Error(s(482));n=i,n.status="pending",n.then(function(c){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=c}},function(c){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=c}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,Sf(n),n}throw Ur=i,Fr}}var Ur=null;function Af(){if(Ur===null)throw Error(s(459));var n=Ur;return Ur=null,n}function Sf(n){if(n===Fr||n===vo)throw Error(s(483))}var pi=!1;function Nc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ic(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function mi(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function gi(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Oe&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,i=ho(n),of(n,null,a),i}return uo(n,c,i,a),ho(n)}function Hr(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,fh(n,a)}}function jc(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,y=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};y===null?f=y=S:y=y.next=S,a=a.next}while(a!==null);y===null?f=y=i:y=y.next=i}else f=y=i;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:y,shared:c.shared,callbacks:c.callbacks},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}var Bc=!1;function zr(){if(Bc){var n=Os;if(n!==null)throw n}}function Gr(n,i,a,c){Bc=!1;var f=n.updateQueue;pi=!1;var y=f.firstBaseUpdate,S=f.lastBaseUpdate,E=f.shared.pending;if(E!==null){f.shared.pending=null;var D=E,U=D.next;D.next=null,S===null?y=U:S.next=U,S=D;var Y=n.alternate;Y!==null&&(Y=Y.updateQueue,E=Y.lastBaseUpdate,E!==S&&(E===null?Y.firstBaseUpdate=U:E.next=U,Y.lastBaseUpdate=D))}if(y!==null){var $=f.baseState;S=0,Y=U=D=null,E=y;do{var H=E.lane&-536870913,z=H!==E.lane;if(z?(ke&H)===H:(c&H)===H){H!==0&&H===Ps&&(Bc=!0),Y!==null&&(Y=Y.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});e:{var ge=n,fe=E;H=i;var Fe=a;switch(fe.tag){case 1:if(ge=fe.payload,typeof ge=="function"){$=ge.call(Fe,$,H);break e}$=ge;break e;case 3:ge.flags=ge.flags&-65537|128;case 0:if(ge=fe.payload,H=typeof ge=="function"?ge.call(Fe,$,H):ge,H==null)break e;$=m({},$,H);break e;case 2:pi=!0}}H=E.callback,H!==null&&(n.flags|=64,z&&(n.flags|=8192),z=f.callbacks,z===null?f.callbacks=[H]:z.push(H))}else z={lane:H,tag:E.tag,payload:E.payload,callback:E.callback,next:null},Y===null?(U=Y=z,D=$):Y=Y.next=z,S|=H;if(E=E.next,E===null){if(E=f.shared.pending,E===null)break;z=E,E=z.next,z.next=null,f.lastBaseUpdate=z,f.shared.pending=null}}while(!0);Y===null&&(D=$),f.baseState=D,f.firstBaseUpdate=U,f.lastBaseUpdate=Y,y===null&&(f.shared.lanes=0),wi|=S,n.lanes=S,n.memoizedState=$}}function Cf(n,i){if(typeof n!="function")throw Error(s(191,n));n.call(i)}function xf(n,i){var a=n.callbacks;if(a!==null)for(n.callbacks=null,n=0;n<a.length;n++)Cf(a[n],i)}var Ns=W(null),So=W(0);function wf(n,i){n=ni,K(So,n),K(Ns,i),ni=n|i.baseLanes}function Fc(){K(So,ni),K(Ns,Ns.current)}function Uc(){ni=So.current,Z(Ns),Z(So)}var yi=0,xe=null,je=null,ft=null,Co=!1,Is=!1,Ji=!1,xo=0,qr=0,js=null,xv=0;function lt(){throw Error(s(321))}function Hc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Qt(n[a],i[a]))return!1;return!0}function zc(n,i,a,c,f,y){return yi=y,xe=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,N.H=n===null||n.memoizedState===null?op:lp,Ji=!1,y=a(c,f),Ji=!1,Is&&(y=Tf(i,a,c,f)),Ef(n),y}function Ef(n){N.H=Do;var i=je!==null&&je.next!==null;if(yi=0,ft=je=xe=null,Co=!1,qr=0,js=null,i)throw Error(s(300));n===null||vt||(n=n.dependencies,n!==null&&go(n)&&(vt=!0))}function Tf(n,i,a,c){xe=n;var f=0;do{if(Is&&(js=null),qr=0,Is=!1,25<=f)throw Error(s(301));if(f+=1,ft=je=null,n.updateQueue!=null){var y=n.updateQueue;y.lastEffect=null,y.events=null,y.stores=null,y.memoCache!=null&&(y.memoCache.index=0)}N.H=Mv,y=i(a,c)}while(Is);return y}function wv(){var n=N.H,i=n.useState()[0];return i=typeof i.then=="function"?Vr(i):i,n=n.useState()[0],(je!==null?je.memoizedState:null)!==n&&(xe.flags|=1024),i}function Gc(){var n=xo!==0;return xo=0,n}function qc(n,i,a){i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~a}function Vc(n){if(Co){for(n=n.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Co=!1}yi=0,ft=je=xe=null,Is=!1,qr=xo=0,js=null}function Gt(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ft===null?xe.memoizedState=ft=n:ft=ft.next=n,ft}function pt(){if(je===null){var n=xe.alternate;n=n!==null?n.memoizedState:null}else n=je.next;var i=ft===null?xe.memoizedState:ft.next;if(i!==null)ft=i,je=n;else{if(n===null)throw xe.alternate===null?Error(s(467)):Error(s(310));je=n,n={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},ft===null?xe.memoizedState=ft=n:ft=ft.next=n}return ft}function Yc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Vr(n){var i=qr;return qr+=1,js===null&&(js=[]),n=vf(js,n,i),i=xe,(ft===null?i.memoizedState:ft.next)===null&&(i=i.alternate,N.H=i===null||i.memoizedState===null?op:lp),n}function wo(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Vr(n);if(n.$$typeof===R)return Lt(n)}throw Error(s(438,String(n)))}function Xc(n){var i=null,a=xe.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var c=xe.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(i={data:c.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Yc(),xe.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(n),c=0;c<n;c++)a[c]=Q;return i.index++,a}function Kn(n,i){return typeof i=="function"?i(n):i}function Eo(n){var i=pt();return Wc(i,je,n)}function Wc(n,i,a){var c=n.queue;if(c===null)throw Error(s(311));c.lastRenderedReducer=a;var f=n.baseQueue,y=c.pending;if(y!==null){if(f!==null){var S=f.next;f.next=y.next,y.next=S}i.baseQueue=f=y,c.pending=null}if(y=n.baseState,f===null)n.memoizedState=y;else{i=f.next;var E=S=null,D=null,U=i,Y=!1;do{var $=U.lane&-536870913;if($!==U.lane?(ke&$)===$:(yi&$)===$){var H=U.revertLane;if(H===0)D!==null&&(D=D.next={lane:0,revertLane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),$===Ps&&(Y=!0);else if((yi&H)===H){U=U.next,H===Ps&&(Y=!0);continue}else $={lane:0,revertLane:U.revertLane,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},D===null?(E=D=$,S=y):D=D.next=$,xe.lanes|=H,wi|=H;$=U.action,Ji&&a(y,$),y=U.hasEagerState?U.eagerState:a(y,$)}else H={lane:$,revertLane:U.revertLane,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},D===null?(E=D=H,S=y):D=D.next=H,xe.lanes|=$,wi|=$;U=U.next}while(U!==null&&U!==i);if(D===null?S=y:D.next=E,!Qt(y,n.memoizedState)&&(vt=!0,Y&&(a=Os,a!==null)))throw a;n.memoizedState=y,n.baseState=S,n.baseQueue=D,c.lastRenderedState=y}return f===null&&(c.lanes=0),[n.memoizedState,c.dispatch]}function $c(n){var i=pt(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=n;var c=a.dispatch,f=a.pending,y=i.memoizedState;if(f!==null){a.pending=null;var S=f=f.next;do y=n(y,S.action),S=S.next;while(S!==f);Qt(y,i.memoizedState)||(vt=!0),i.memoizedState=y,i.baseQueue===null&&(i.baseState=y),a.lastRenderedState=y}return[y,c]}function _f(n,i,a){var c=xe,f=pt(),y=Pe;if(y){if(a===void 0)throw Error(s(407));a=a()}else a=i();var S=!Qt((je||f).memoizedState,a);S&&(f.memoizedState=a,vt=!0),f=f.queue;var E=Mf.bind(null,c,f,n);if(Yr(2048,8,E,[n]),f.getSnapshot!==i||S||ft!==null&&ft.memoizedState.tag&1){if(c.flags|=2048,Bs(9,To(),Df.bind(null,c,f,a,i),null),Ve===null)throw Error(s(349));y||(yi&124)!==0||Rf(c,i,a)}return a}function Rf(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=xe.updateQueue,i===null?(i=Yc(),xe.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Df(n,i,a,c){i.value=a,i.getSnapshot=c,kf(i)&&Lf(n)}function Mf(n,i,a){return a(function(){kf(i)&&Lf(n)})}function kf(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Qt(n,a)}catch{return!0}}function Lf(n){var i=Ds(n,2);i!==null&&sn(i,n,2)}function Kc(n){var i=Gt();if(typeof n=="function"){var a=n;if(n=a(),Ji){It(!0);try{a()}finally{It(!1)}}}return i.memoizedState=i.baseState=n,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kn,lastRenderedState:n},i}function Pf(n,i,a,c){return n.baseState=a,Wc(n,je,typeof c=="function"?c:Kn)}function Ev(n,i,a,c,f){if(Ro(n))throw Error(s(485));if(n=i.action,n!==null){var y={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){y.listeners.push(S)}};N.T!==null?a(!0):y.isTransition=!1,c(y),a=i.pending,a===null?(y.next=i.pending=y,Of(i,y)):(y.next=a.next,i.pending=a.next=y)}}function Of(n,i){var a=i.action,c=i.payload,f=n.state;if(i.isTransition){var y=N.T,S={};N.T=S;try{var E=a(f,c),D=N.S;D!==null&&D(S,E),Nf(n,i,E)}catch(U){Qc(n,i,U)}finally{N.T=y}}else try{y=a(f,c),Nf(n,i,y)}catch(U){Qc(n,i,U)}}function Nf(n,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(c){If(n,i,c)},function(c){return Qc(n,i,c)}):If(n,i,a)}function If(n,i,a){i.status="fulfilled",i.value=a,jf(i),n.state=a,i=n.pending,i!==null&&(a=i.next,a===i?n.pending=null:(a=a.next,i.next=a,Of(n,a)))}function Qc(n,i,a){var c=n.pending;if(n.pending=null,c!==null){c=c.next;do i.status="rejected",i.reason=a,jf(i),i=i.next;while(i!==c)}n.action=null}function jf(n){n=n.listeners;for(var i=0;i<n.length;i++)(0,n[i])()}function Bf(n,i){return i}function Ff(n,i){if(Pe){var a=Ve.formState;if(a!==null){e:{var c=xe;if(Pe){if(rt){t:{for(var f=rt,y=Rn;f.nodeType!==8;){if(!y){f=null;break t}if(f=xn(f.nextSibling),f===null){f=null;break t}}y=f.data,f=y==="F!"||y==="F"?f:null}if(f){rt=xn(f.nextSibling),c=f.data==="F!";break e}}Wi(c)}c=!1}c&&(i=a[0])}}return a=Gt(),a.memoizedState=a.baseState=i,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bf,lastRenderedState:i},a.queue=c,a=sp.bind(null,xe,c),c.dispatch=a,c=Kc(!1),y=nu.bind(null,xe,!1,c.queue),c=Gt(),f={state:i,dispatch:null,action:n,pending:null},c.queue=f,a=Ev.bind(null,xe,f,y,a),f.dispatch=a,c.memoizedState=n,[i,a,!1]}function Uf(n){var i=pt();return Hf(i,je,n)}function Hf(n,i,a){if(i=Wc(n,i,Bf)[0],n=Eo(Kn)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var c=Vr(i)}catch(S){throw S===Fr?vo:S}else c=i;i=pt();var f=i.queue,y=f.dispatch;return a!==i.memoizedState&&(xe.flags|=2048,Bs(9,To(),Tv.bind(null,f,a),null)),[c,y,n]}function Tv(n,i){n.action=i}function zf(n){var i=pt(),a=je;if(a!==null)return Hf(i,a,n);pt(),i=i.memoizedState,a=pt();var c=a.queue.dispatch;return a.memoizedState=n,[i,c,!1]}function Bs(n,i,a,c){return n={tag:n,create:a,deps:c,inst:i,next:null},i=xe.updateQueue,i===null&&(i=Yc(),xe.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n),n}function To(){return{destroy:void 0,resource:void 0}}function Gf(){return pt().memoizedState}function _o(n,i,a,c){var f=Gt();c=c===void 0?null:c,xe.flags|=n,f.memoizedState=Bs(1|i,To(),a,c)}function Yr(n,i,a,c){var f=pt();c=c===void 0?null:c;var y=f.memoizedState.inst;je!==null&&c!==null&&Hc(c,je.memoizedState.deps)?f.memoizedState=Bs(i,y,a,c):(xe.flags|=n,f.memoizedState=Bs(1|i,y,a,c))}function qf(n,i){_o(8390656,8,n,i)}function Vf(n,i){Yr(2048,8,n,i)}function Yf(n,i){return Yr(4,2,n,i)}function Xf(n,i){return Yr(4,4,n,i)}function Wf(n,i){if(typeof i=="function"){n=n();var a=i(n);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function $f(n,i,a){a=a!=null?a.concat([n]):null,Yr(4,4,Wf.bind(null,i,n),a)}function Jc(){}function Kf(n,i){var a=pt();i=i===void 0?null:i;var c=a.memoizedState;return i!==null&&Hc(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Qf(n,i){var a=pt();i=i===void 0?null:i;var c=a.memoizedState;if(i!==null&&Hc(i,c[1]))return c[0];if(c=n(),Ji){It(!0);try{n()}finally{It(!1)}}return a.memoizedState=[c,i],c}function Zc(n,i,a){return a===void 0||(yi&1073741824)!==0?n.memoizedState=i:(n.memoizedState=a,n=em(),xe.lanes|=n,wi|=n,a)}function Jf(n,i,a,c){return Qt(a,i)?a:Ns.current!==null?(n=Zc(n,a,c),Qt(n,i)||(vt=!0),n):(yi&42)===0?(vt=!0,n.memoizedState=a):(n=em(),xe.lanes|=n,wi|=n,i)}function Zf(n,i,a,c,f){var y=G.p;G.p=y!==0&&8>y?y:8;var S=N.T,E={};N.T=E,nu(n,!1,i,a);try{var D=f(),U=N.S;if(U!==null&&U(E,D),D!==null&&typeof D=="object"&&typeof D.then=="function"){var Y=Cv(D,c);Xr(n,i,Y,nn(n))}else Xr(n,i,c,nn(n))}catch($){Xr(n,i,{then:function(){},status:"rejected",reason:$},nn())}finally{G.p=y,N.T=S}}function _v(){}function eu(n,i,a,c){if(n.tag!==5)throw Error(s(476));var f=ep(n).queue;Zf(n,f,i,ee,a===null?_v:function(){return tp(n),a(c)})}function ep(n){var i=n.memoizedState;if(i!==null)return i;i={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kn,lastRenderedState:ee},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kn,lastRenderedState:a},next:null},n.memoizedState=i,n=n.alternate,n!==null&&(n.memoizedState=i),i}function tp(n){var i=ep(n).next.queue;Xr(n,i,{},nn())}function tu(){return Lt(da)}function np(){return pt().memoizedState}function ip(){return pt().memoizedState}function Rv(n){for(var i=n.return;i!==null;){switch(i.tag){case 24:case 3:var a=nn();n=mi(a);var c=gi(i,n,a);c!==null&&(sn(c,i,a),Hr(c,i,a)),i={cache:kc()},n.payload=i;return}i=i.return}}function Dv(n,i,a){var c=nn();a={lane:c,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Ro(n)?rp(i,a):(a=Sc(n,i,a,c),a!==null&&(sn(a,n,c),ap(a,i,c)))}function sp(n,i,a){var c=nn();Xr(n,i,a,c)}function Xr(n,i,a,c){var f={lane:c,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ro(n))rp(i,f);else{var y=n.alternate;if(n.lanes===0&&(y===null||y.lanes===0)&&(y=i.lastRenderedReducer,y!==null))try{var S=i.lastRenderedState,E=y(S,a);if(f.hasEagerState=!0,f.eagerState=E,Qt(E,S))return uo(n,i,f,0),Ve===null&&co(),!1}catch{}finally{}if(a=Sc(n,i,f,c),a!==null)return sn(a,n,c),ap(a,i,c),!0}return!1}function nu(n,i,a,c){if(c={lane:2,revertLane:Ou(),action:c,hasEagerState:!1,eagerState:null,next:null},Ro(n)){if(i)throw Error(s(479))}else i=Sc(n,a,c,2),i!==null&&sn(i,n,2)}function Ro(n){var i=n.alternate;return n===xe||i!==null&&i===xe}function rp(n,i){Is=Co=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function ap(n,i,a){if((a&4194048)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,fh(n,a)}}var Do={readContext:Lt,use:wo,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useLayoutEffect:lt,useInsertionEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useSyncExternalStore:lt,useId:lt,useHostTransitionStatus:lt,useFormState:lt,useActionState:lt,useOptimistic:lt,useMemoCache:lt,useCacheRefresh:lt},op={readContext:Lt,use:wo,useCallback:function(n,i){return Gt().memoizedState=[n,i===void 0?null:i],n},useContext:Lt,useEffect:qf,useImperativeHandle:function(n,i,a){a=a!=null?a.concat([n]):null,_o(4194308,4,Wf.bind(null,i,n),a)},useLayoutEffect:function(n,i){return _o(4194308,4,n,i)},useInsertionEffect:function(n,i){_o(4,2,n,i)},useMemo:function(n,i){var a=Gt();i=i===void 0?null:i;var c=n();if(Ji){It(!0);try{n()}finally{It(!1)}}return a.memoizedState=[c,i],c},useReducer:function(n,i,a){var c=Gt();if(a!==void 0){var f=a(i);if(Ji){It(!0);try{a(i)}finally{It(!1)}}}else f=i;return c.memoizedState=c.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},c.queue=n,n=n.dispatch=Dv.bind(null,xe,n),[c.memoizedState,n]},useRef:function(n){var i=Gt();return n={current:n},i.memoizedState=n},useState:function(n){n=Kc(n);var i=n.queue,a=sp.bind(null,xe,i);return i.dispatch=a,[n.memoizedState,a]},useDebugValue:Jc,useDeferredValue:function(n,i){var a=Gt();return Zc(a,n,i)},useTransition:function(){var n=Kc(!1);return n=Zf.bind(null,xe,n.queue,!0,!1),Gt().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,i,a){var c=xe,f=Gt();if(Pe){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),Ve===null)throw Error(s(349));(ke&124)!==0||Rf(c,i,a)}f.memoizedState=a;var y={value:a,getSnapshot:i};return f.queue=y,qf(Mf.bind(null,c,y,n),[n]),c.flags|=2048,Bs(9,To(),Df.bind(null,c,y,a,i),null),a},useId:function(){var n=Gt(),i=Ve.identifierPrefix;if(Pe){var a=Xn,c=Yn;a=(c&~(1<<32-st(c)-1)).toString(32)+a,i="«"+i+"R"+a,a=xo++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=xv++,i="«"+i+"r"+a.toString(32)+"»";return n.memoizedState=i},useHostTransitionStatus:tu,useFormState:Ff,useActionState:Ff,useOptimistic:function(n){var i=Gt();i.memoizedState=i.baseState=n;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=nu.bind(null,xe,!0,a),a.dispatch=i,[n,i]},useMemoCache:Xc,useCacheRefresh:function(){return Gt().memoizedState=Rv.bind(null,xe)}},lp={readContext:Lt,use:wo,useCallback:Kf,useContext:Lt,useEffect:Vf,useImperativeHandle:$f,useInsertionEffect:Yf,useLayoutEffect:Xf,useMemo:Qf,useReducer:Eo,useRef:Gf,useState:function(){return Eo(Kn)},useDebugValue:Jc,useDeferredValue:function(n,i){var a=pt();return Jf(a,je.memoizedState,n,i)},useTransition:function(){var n=Eo(Kn)[0],i=pt().memoizedState;return[typeof n=="boolean"?n:Vr(n),i]},useSyncExternalStore:_f,useId:np,useHostTransitionStatus:tu,useFormState:Uf,useActionState:Uf,useOptimistic:function(n,i){var a=pt();return Pf(a,je,n,i)},useMemoCache:Xc,useCacheRefresh:ip},Mv={readContext:Lt,use:wo,useCallback:Kf,useContext:Lt,useEffect:Vf,useImperativeHandle:$f,useInsertionEffect:Yf,useLayoutEffect:Xf,useMemo:Qf,useReducer:$c,useRef:Gf,useState:function(){return $c(Kn)},useDebugValue:Jc,useDeferredValue:function(n,i){var a=pt();return je===null?Zc(a,n,i):Jf(a,je.memoizedState,n,i)},useTransition:function(){var n=$c(Kn)[0],i=pt().memoizedState;return[typeof n=="boolean"?n:Vr(n),i]},useSyncExternalStore:_f,useId:np,useHostTransitionStatus:tu,useFormState:zf,useActionState:zf,useOptimistic:function(n,i){var a=pt();return je!==null?Pf(a,je,n,i):(a.baseState=n,[n,a.queue.dispatch])},useMemoCache:Xc,useCacheRefresh:ip},Fs=null,Wr=0;function Mo(n){var i=Wr;return Wr+=1,Fs===null&&(Fs=[]),vf(Fs,n,i)}function $r(n,i){i=i.props.ref,n.ref=i!==void 0?i:null}function ko(n,i){throw i.$$typeof===b?Error(s(525)):(n=Object.prototype.toString.call(i),Error(s(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n)))}function cp(n){var i=n._init;return i(n._payload)}function up(n){function i(I,L){if(n){var B=I.deletions;B===null?(I.deletions=[L],I.flags|=16):B.push(L)}}function a(I,L){if(!n)return null;for(;L!==null;)i(I,L),L=L.sibling;return null}function c(I){for(var L=new Map;I!==null;)I.key!==null?L.set(I.key,I):L.set(I.index,I),I=I.sibling;return L}function f(I,L){return I=Vn(I,L),I.index=0,I.sibling=null,I}function y(I,L,B){return I.index=B,n?(B=I.alternate,B!==null?(B=B.index,B<L?(I.flags|=67108866,L):B):(I.flags|=67108866,L)):(I.flags|=1048576,L)}function S(I){return n&&I.alternate===null&&(I.flags|=67108866),I}function E(I,L,B,X){return L===null||L.tag!==6?(L=xc(B,I.mode,X),L.return=I,L):(L=f(L,B),L.return=I,L)}function D(I,L,B,X){var se=B.type;return se===x?Y(I,L,B.props.children,X,B.key):L!==null&&(L.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===q&&cp(se)===L.type)?(L=f(L,B.props),$r(L,B),L.return=I,L):(L=fo(B.type,B.key,B.props,null,I.mode,X),$r(L,B),L.return=I,L)}function U(I,L,B,X){return L===null||L.tag!==4||L.stateNode.containerInfo!==B.containerInfo||L.stateNode.implementation!==B.implementation?(L=wc(B,I.mode,X),L.return=I,L):(L=f(L,B.children||[]),L.return=I,L)}function Y(I,L,B,X,se){return L===null||L.tag!==7?(L=qi(B,I.mode,X,se),L.return=I,L):(L=f(L,B),L.return=I,L)}function $(I,L,B){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return L=xc(""+L,I.mode,B),L.return=I,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case v:return B=fo(L.type,L.key,L.props,null,I.mode,B),$r(B,L),B.return=I,B;case A:return L=wc(L,I.mode,B),L.return=I,L;case q:var X=L._init;return L=X(L._payload),$(I,L,B)}if(ce(L)||le(L))return L=qi(L,I.mode,B,null),L.return=I,L;if(typeof L.then=="function")return $(I,Mo(L),B);if(L.$$typeof===R)return $(I,yo(I,L),B);ko(I,L)}return null}function H(I,L,B,X){var se=L!==null?L.key:null;if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return se!==null?null:E(I,L,""+B,X);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case v:return B.key===se?D(I,L,B,X):null;case A:return B.key===se?U(I,L,B,X):null;case q:return se=B._init,B=se(B._payload),H(I,L,B,X)}if(ce(B)||le(B))return se!==null?null:Y(I,L,B,X,null);if(typeof B.then=="function")return H(I,L,Mo(B),X);if(B.$$typeof===R)return H(I,L,yo(I,B),X);ko(I,B)}return null}function z(I,L,B,X,se){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return I=I.get(B)||null,E(L,I,""+X,se);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case v:return I=I.get(X.key===null?B:X.key)||null,D(L,I,X,se);case A:return I=I.get(X.key===null?B:X.key)||null,U(L,I,X,se);case q:var we=X._init;return X=we(X._payload),z(I,L,B,X,se)}if(ce(X)||le(X))return I=I.get(B)||null,Y(L,I,X,se,null);if(typeof X.then=="function")return z(I,L,B,Mo(X),se);if(X.$$typeof===R)return z(I,L,B,yo(L,X),se);ko(L,X)}return null}function ge(I,L,B,X){for(var se=null,we=null,oe=L,pe=L=0,St=null;oe!==null&&pe<B.length;pe++){oe.index>pe?(St=oe,oe=null):St=oe.sibling;var Le=H(I,oe,B[pe],X);if(Le===null){oe===null&&(oe=St);break}n&&oe&&Le.alternate===null&&i(I,oe),L=y(Le,L,pe),we===null?se=Le:we.sibling=Le,we=Le,oe=St}if(pe===B.length)return a(I,oe),Pe&&Yi(I,pe),se;if(oe===null){for(;pe<B.length;pe++)oe=$(I,B[pe],X),oe!==null&&(L=y(oe,L,pe),we===null?se=oe:we.sibling=oe,we=oe);return Pe&&Yi(I,pe),se}for(oe=c(oe);pe<B.length;pe++)St=z(oe,I,pe,B[pe],X),St!==null&&(n&&St.alternate!==null&&oe.delete(St.key===null?pe:St.key),L=y(St,L,pe),we===null?se=St:we.sibling=St,we=St);return n&&oe.forEach(function(Pi){return i(I,Pi)}),Pe&&Yi(I,pe),se}function fe(I,L,B,X){if(B==null)throw Error(s(151));for(var se=null,we=null,oe=L,pe=L=0,St=null,Le=B.next();oe!==null&&!Le.done;pe++,Le=B.next()){oe.index>pe?(St=oe,oe=null):St=oe.sibling;var Pi=H(I,oe,Le.value,X);if(Pi===null){oe===null&&(oe=St);break}n&&oe&&Pi.alternate===null&&i(I,oe),L=y(Pi,L,pe),we===null?se=Pi:we.sibling=Pi,we=Pi,oe=St}if(Le.done)return a(I,oe),Pe&&Yi(I,pe),se;if(oe===null){for(;!Le.done;pe++,Le=B.next())Le=$(I,Le.value,X),Le!==null&&(L=y(Le,L,pe),we===null?se=Le:we.sibling=Le,we=Le);return Pe&&Yi(I,pe),se}for(oe=c(oe);!Le.done;pe++,Le=B.next())Le=z(oe,I,pe,Le.value,X),Le!==null&&(n&&Le.alternate!==null&&oe.delete(Le.key===null?pe:Le.key),L=y(Le,L,pe),we===null?se=Le:we.sibling=Le,we=Le);return n&&oe.forEach(function(kA){return i(I,kA)}),Pe&&Yi(I,pe),se}function Fe(I,L,B,X){if(typeof B=="object"&&B!==null&&B.type===x&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case v:e:{for(var se=B.key;L!==null;){if(L.key===se){if(se=B.type,se===x){if(L.tag===7){a(I,L.sibling),X=f(L,B.props.children),X.return=I,I=X;break e}}else if(L.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===q&&cp(se)===L.type){a(I,L.sibling),X=f(L,B.props),$r(X,B),X.return=I,I=X;break e}a(I,L);break}else i(I,L);L=L.sibling}B.type===x?(X=qi(B.props.children,I.mode,X,B.key),X.return=I,I=X):(X=fo(B.type,B.key,B.props,null,I.mode,X),$r(X,B),X.return=I,I=X)}return S(I);case A:e:{for(se=B.key;L!==null;){if(L.key===se)if(L.tag===4&&L.stateNode.containerInfo===B.containerInfo&&L.stateNode.implementation===B.implementation){a(I,L.sibling),X=f(L,B.children||[]),X.return=I,I=X;break e}else{a(I,L);break}else i(I,L);L=L.sibling}X=wc(B,I.mode,X),X.return=I,I=X}return S(I);case q:return se=B._init,B=se(B._payload),Fe(I,L,B,X)}if(ce(B))return ge(I,L,B,X);if(le(B)){if(se=le(B),typeof se!="function")throw Error(s(150));return B=se.call(B),fe(I,L,B,X)}if(typeof B.then=="function")return Fe(I,L,Mo(B),X);if(B.$$typeof===R)return Fe(I,L,yo(I,B),X);ko(I,B)}return typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint"?(B=""+B,L!==null&&L.tag===6?(a(I,L.sibling),X=f(L,B),X.return=I,I=X):(a(I,L),X=xc(B,I.mode,X),X.return=I,I=X),S(I)):a(I,L)}return function(I,L,B,X){try{Wr=0;var se=Fe(I,L,B,X);return Fs=null,se}catch(oe){if(oe===Fr||oe===vo)throw oe;var we=Jt(29,oe,null,I.mode);return we.lanes=X,we.return=I,we}finally{}}}var Us=up(!0),dp=up(!1),mn=W(null),Dn=null;function bi(n){var i=n.alternate;K(yt,yt.current&1),K(mn,n),Dn===null&&(i===null||Ns.current!==null||i.memoizedState!==null)&&(Dn=n)}function hp(n){if(n.tag===22){if(K(yt,yt.current),K(mn,n),Dn===null){var i=n.alternate;i!==null&&i.memoizedState!==null&&(Dn=n)}}else vi()}function vi(){K(yt,yt.current),K(mn,mn.current)}function Qn(n){Z(mn),Dn===n&&(Dn=null),Z(yt)}var yt=W(0);function Lo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Yu(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function iu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:m({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var su={enqueueSetState:function(n,i,a){n=n._reactInternals;var c=nn(),f=mi(c);f.payload=i,a!=null&&(f.callback=a),i=gi(n,f,c),i!==null&&(sn(i,n,c),Hr(i,n,c))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=nn(),f=mi(c);f.tag=1,f.payload=i,a!=null&&(f.callback=a),i=gi(n,f,c),i!==null&&(sn(i,n,c),Hr(i,n,c))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=nn(),c=mi(a);c.tag=2,i!=null&&(c.callback=i),i=gi(n,c,a),i!==null&&(sn(i,n,a),Hr(i,n,a))}};function fp(n,i,a,c,f,y,S){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,y,S):i.prototype&&i.prototype.isPureReactComponent?!kr(a,c)||!kr(f,y):!0}function pp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&su.enqueueReplaceState(i,i.state,null)}function Zi(n,i){var a=i;if("ref"in i){a={};for(var c in i)c!=="ref"&&(a[c]=i[c])}if(n=n.defaultProps){a===i&&(a=m({},a));for(var f in n)a[f]===void 0&&(a[f]=n[f])}return a}var Po=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function mp(n){Po(n)}function gp(n){console.error(n)}function yp(n){Po(n)}function Oo(n,i){try{var a=n.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(c){setTimeout(function(){throw c})}}function bp(n,i,a){try{var c=n.onCaughtError;c(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function ru(n,i,a){return a=mi(a),a.tag=3,a.payload={element:null},a.callback=function(){Oo(n,i)},a}function vp(n){return n=mi(n),n.tag=3,n}function Ap(n,i,a,c){var f=a.type.getDerivedStateFromError;if(typeof f=="function"){var y=c.value;n.payload=function(){return f(y)},n.callback=function(){bp(i,a,c)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(n.callback=function(){bp(i,a,c),typeof f!="function"&&(Ei===null?Ei=new Set([this]):Ei.add(this));var E=c.stack;this.componentDidCatch(c.value,{componentStack:E!==null?E:""})})}function kv(n,i,a,c,f){if(a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(i=a.alternate,i!==null&&Ir(i,a,f,!0),a=mn.current,a!==null){switch(a.tag){case 13:return Dn===null?Du():a.alternate===null&&at===0&&(at=3),a.flags&=-257,a.flags|=65536,a.lanes=f,c===Oc?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([c]):i.add(c),ku(n,c,f)),!1;case 22:return a.flags|=65536,c===Oc?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([c])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([c]):a.add(c)),ku(n,c,f)),!1}throw Error(s(435,a.tag))}return ku(n,c,f),Du(),!1}if(Pe)return i=mn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,c!==_c&&(n=Error(s(422),{cause:c}),Nr(dn(n,a)))):(c!==_c&&(i=Error(s(423),{cause:c}),Nr(dn(i,a))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,c=dn(c,a),f=ru(n.stateNode,c,f),jc(n,f),at!==4&&(at=2)),!1;var y=Error(s(520),{cause:c});if(y=dn(y,a),na===null?na=[y]:na.push(y),at!==4&&(at=2),i===null)return!0;c=dn(c,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,n=f&-f,a.lanes|=n,n=ru(a.stateNode,c,n),jc(a,n),!1;case 1:if(i=a.type,y=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Ei===null||!Ei.has(y))))return a.flags|=65536,f&=-f,a.lanes|=f,f=vp(f),Ap(f,n,a,c),jc(a,f),!1}a=a.return}while(a!==null);return!1}var Sp=Error(s(461)),vt=!1;function Tt(n,i,a,c){i.child=n===null?dp(i,null,a,c):Us(i,n.child,a,c)}function Cp(n,i,a,c,f){a=a.render;var y=i.ref;if("ref"in c){var S={};for(var E in c)E!=="ref"&&(S[E]=c[E])}else S=c;return Ki(i),c=zc(n,i,a,S,y,f),E=Gc(),n!==null&&!vt?(qc(n,i,f),Jn(n,i,f)):(Pe&&E&&Ec(i),i.flags|=1,Tt(n,i,c,f),i.child)}function xp(n,i,a,c,f){if(n===null){var y=a.type;return typeof y=="function"&&!Cc(y)&&y.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=y,wp(n,i,y,c,f)):(n=fo(a.type,null,c,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(y=n.child,!fu(n,f)){var S=y.memoizedProps;if(a=a.compare,a=a!==null?a:kr,a(S,c)&&n.ref===i.ref)return Jn(n,i,f)}return i.flags|=1,n=Vn(y,c),n.ref=i.ref,n.return=i,i.child=n}function wp(n,i,a,c,f){if(n!==null){var y=n.memoizedProps;if(kr(y,c)&&n.ref===i.ref)if(vt=!1,i.pendingProps=c=y,fu(n,f))(n.flags&131072)!==0&&(vt=!0);else return i.lanes=n.lanes,Jn(n,i,f)}return au(n,i,a,c,f)}function Ep(n,i,a){var c=i.pendingProps,f=c.children,y=n!==null?n.memoizedState:null;if(c.mode==="hidden"){if((i.flags&128)!==0){if(c=y!==null?y.baseLanes|a:a,n!==null){for(f=i.child=n.child,y=0;f!==null;)y=y|f.lanes|f.childLanes,f=f.sibling;i.childLanes=y&~c}else i.childLanes=0,i.child=null;return Tp(n,i,c,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},n!==null&&bo(i,y!==null?y.cachePool:null),y!==null?wf(i,y):Fc(),hp(i);else return i.lanes=i.childLanes=536870912,Tp(n,i,y!==null?y.baseLanes|a:a,a)}else y!==null?(bo(i,y.cachePool),wf(i,y),vi(),i.memoizedState=null):(n!==null&&bo(i,null),Fc(),vi());return Tt(n,i,f,a),i.child}function Tp(n,i,a,c){var f=Pc();return f=f===null?null:{parent:gt._currentValue,pool:f},i.memoizedState={baseLanes:a,cachePool:f},n!==null&&bo(i,null),Fc(),hp(i),n!==null&&Ir(n,i,c,!0),null}function No(n,i){var a=i.ref;if(a===null)n!==null&&n.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(n===null||n.ref!==a)&&(i.flags|=4194816)}}function au(n,i,a,c,f){return Ki(i),a=zc(n,i,a,c,void 0,f),c=Gc(),n!==null&&!vt?(qc(n,i,f),Jn(n,i,f)):(Pe&&c&&Ec(i),i.flags|=1,Tt(n,i,a,f),i.child)}function _p(n,i,a,c,f,y){return Ki(i),i.updateQueue=null,a=Tf(i,c,a,f),Ef(n),c=Gc(),n!==null&&!vt?(qc(n,i,y),Jn(n,i,y)):(Pe&&c&&Ec(i),i.flags|=1,Tt(n,i,a,y),i.child)}function Rp(n,i,a,c,f){if(Ki(i),i.stateNode===null){var y=Ms,S=a.contextType;typeof S=="object"&&S!==null&&(y=Lt(S)),y=new a(c,y),i.memoizedState=y.state!==null&&y.state!==void 0?y.state:null,y.updater=su,i.stateNode=y,y._reactInternals=i,y=i.stateNode,y.props=c,y.state=i.memoizedState,y.refs={},Nc(i),S=a.contextType,y.context=typeof S=="object"&&S!==null?Lt(S):Ms,y.state=i.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(iu(i,a,S,c),y.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof y.getSnapshotBeforeUpdate=="function"||typeof y.UNSAFE_componentWillMount!="function"&&typeof y.componentWillMount!="function"||(S=y.state,typeof y.componentWillMount=="function"&&y.componentWillMount(),typeof y.UNSAFE_componentWillMount=="function"&&y.UNSAFE_componentWillMount(),S!==y.state&&su.enqueueReplaceState(y,y.state,null),Gr(i,c,y,f),zr(),y.state=i.memoizedState),typeof y.componentDidMount=="function"&&(i.flags|=4194308),c=!0}else if(n===null){y=i.stateNode;var E=i.memoizedProps,D=Zi(a,E);y.props=D;var U=y.context,Y=a.contextType;S=Ms,typeof Y=="object"&&Y!==null&&(S=Lt(Y));var $=a.getDerivedStateFromProps;Y=typeof $=="function"||typeof y.getSnapshotBeforeUpdate=="function",E=i.pendingProps!==E,Y||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(E||U!==S)&&pp(i,y,c,S),pi=!1;var H=i.memoizedState;y.state=H,Gr(i,c,y,f),zr(),U=i.memoizedState,E||H!==U||pi?(typeof $=="function"&&(iu(i,a,$,c),U=i.memoizedState),(D=pi||fp(i,a,D,c,H,U,S))?(Y||typeof y.UNSAFE_componentWillMount!="function"&&typeof y.componentWillMount!="function"||(typeof y.componentWillMount=="function"&&y.componentWillMount(),typeof y.UNSAFE_componentWillMount=="function"&&y.UNSAFE_componentWillMount()),typeof y.componentDidMount=="function"&&(i.flags|=4194308)):(typeof y.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=U),y.props=c,y.state=U,y.context=S,c=D):(typeof y.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{y=i.stateNode,Ic(n,i),S=i.memoizedProps,Y=Zi(a,S),y.props=Y,$=i.pendingProps,H=y.context,U=a.contextType,D=Ms,typeof U=="object"&&U!==null&&(D=Lt(U)),E=a.getDerivedStateFromProps,(U=typeof E=="function"||typeof y.getSnapshotBeforeUpdate=="function")||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(S!==$||H!==D)&&pp(i,y,c,D),pi=!1,H=i.memoizedState,y.state=H,Gr(i,c,y,f),zr();var z=i.memoizedState;S!==$||H!==z||pi||n!==null&&n.dependencies!==null&&go(n.dependencies)?(typeof E=="function"&&(iu(i,a,E,c),z=i.memoizedState),(Y=pi||fp(i,a,Y,c,H,z,D)||n!==null&&n.dependencies!==null&&go(n.dependencies))?(U||typeof y.UNSAFE_componentWillUpdate!="function"&&typeof y.componentWillUpdate!="function"||(typeof y.componentWillUpdate=="function"&&y.componentWillUpdate(c,z,D),typeof y.UNSAFE_componentWillUpdate=="function"&&y.UNSAFE_componentWillUpdate(c,z,D)),typeof y.componentDidUpdate=="function"&&(i.flags|=4),typeof y.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof y.componentDidUpdate!="function"||S===n.memoizedProps&&H===n.memoizedState||(i.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&H===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=z),y.props=c,y.state=z,y.context=D,c=Y):(typeof y.componentDidUpdate!="function"||S===n.memoizedProps&&H===n.memoizedState||(i.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&H===n.memoizedState||(i.flags|=1024),c=!1)}return y=c,No(n,i),c=(i.flags&128)!==0,y||c?(y=i.stateNode,a=c&&typeof a.getDerivedStateFromError!="function"?null:y.render(),i.flags|=1,n!==null&&c?(i.child=Us(i,n.child,null,f),i.child=Us(i,null,a,f)):Tt(n,i,a,f),i.memoizedState=y.state,n=i.child):n=Jn(n,i,f),n}function Dp(n,i,a,c){return Or(),i.flags|=256,Tt(n,i,a,c),i.child}var ou={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function lu(n){return{baseLanes:n,cachePool:gf()}}function cu(n,i,a){return n=n!==null?n.childLanes&~a:0,i&&(n|=gn),n}function Mp(n,i,a){var c=i.pendingProps,f=!1,y=(i.flags&128)!==0,S;if((S=y)||(S=n!==null&&n.memoizedState===null?!1:(yt.current&2)!==0),S&&(f=!0,i.flags&=-129),S=(i.flags&32)!==0,i.flags&=-33,n===null){if(Pe){if(f?bi(i):vi(),Pe){var E=rt,D;if(D=E){e:{for(D=E,E=Rn;D.nodeType!==8;){if(!E){E=null;break e}if(D=xn(D.nextSibling),D===null){E=null;break e}}E=D}E!==null?(i.memoizedState={dehydrated:E,treeContext:Vi!==null?{id:Yn,overflow:Xn}:null,retryLane:536870912,hydrationErrors:null},D=Jt(18,null,null,0),D.stateNode=E,D.return=i,i.child=D,jt=i,rt=null,D=!0):D=!1}D||Wi(i)}if(E=i.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return Yu(E)?i.lanes=32:i.lanes=536870912,null;Qn(i)}return E=c.children,c=c.fallback,f?(vi(),f=i.mode,E=Io({mode:"hidden",children:E},f),c=qi(c,f,a,null),E.return=i,c.return=i,E.sibling=c,i.child=E,f=i.child,f.memoizedState=lu(a),f.childLanes=cu(n,S,a),i.memoizedState=ou,c):(bi(i),uu(i,E))}if(D=n.memoizedState,D!==null&&(E=D.dehydrated,E!==null)){if(y)i.flags&256?(bi(i),i.flags&=-257,i=du(n,i,a)):i.memoizedState!==null?(vi(),i.child=n.child,i.flags|=128,i=null):(vi(),f=c.fallback,E=i.mode,c=Io({mode:"visible",children:c.children},E),f=qi(f,E,a,null),f.flags|=2,c.return=i,f.return=i,c.sibling=f,i.child=c,Us(i,n.child,null,a),c=i.child,c.memoizedState=lu(a),c.childLanes=cu(n,S,a),i.memoizedState=ou,i=f);else if(bi(i),Yu(E)){if(S=E.nextSibling&&E.nextSibling.dataset,S)var U=S.dgst;S=U,c=Error(s(419)),c.stack="",c.digest=S,Nr({value:c,source:null,stack:null}),i=du(n,i,a)}else if(vt||Ir(n,i,a,!1),S=(a&n.childLanes)!==0,vt||S){if(S=Ve,S!==null&&(c=a&-a,c=(c&42)!==0?1:Xl(c),c=(c&(S.suspendedLanes|a))!==0?0:c,c!==0&&c!==D.retryLane))throw D.retryLane=c,Ds(n,c),sn(S,n,c),Sp;E.data==="$?"||Du(),i=du(n,i,a)}else E.data==="$?"?(i.flags|=192,i.child=n.child,i=null):(n=D.treeContext,rt=xn(E.nextSibling),jt=i,Pe=!0,Xi=null,Rn=!1,n!==null&&(fn[pn++]=Yn,fn[pn++]=Xn,fn[pn++]=Vi,Yn=n.id,Xn=n.overflow,Vi=i),i=uu(i,c.children),i.flags|=4096);return i}return f?(vi(),f=c.fallback,E=i.mode,D=n.child,U=D.sibling,c=Vn(D,{mode:"hidden",children:c.children}),c.subtreeFlags=D.subtreeFlags&65011712,U!==null?f=Vn(U,f):(f=qi(f,E,a,null),f.flags|=2),f.return=i,c.return=i,c.sibling=f,i.child=c,c=f,f=i.child,E=n.child.memoizedState,E===null?E=lu(a):(D=E.cachePool,D!==null?(U=gt._currentValue,D=D.parent!==U?{parent:U,pool:U}:D):D=gf(),E={baseLanes:E.baseLanes|a,cachePool:D}),f.memoizedState=E,f.childLanes=cu(n,S,a),i.memoizedState=ou,c):(bi(i),a=n.child,n=a.sibling,a=Vn(a,{mode:"visible",children:c.children}),a.return=i,a.sibling=null,n!==null&&(S=i.deletions,S===null?(i.deletions=[n],i.flags|=16):S.push(n)),i.child=a,i.memoizedState=null,a)}function uu(n,i){return i=Io({mode:"visible",children:i},n.mode),i.return=n,n.child=i}function Io(n,i){return n=Jt(22,n,null,i),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function du(n,i,a){return Us(i,n.child,null,a),n=uu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function kp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Dc(n.return,i,a)}function hu(n,i,a,c,f){var y=n.memoizedState;y===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(y.isBackwards=i,y.rendering=null,y.renderingStartTime=0,y.last=c,y.tail=a,y.tailMode=f)}function Lp(n,i,a){var c=i.pendingProps,f=c.revealOrder,y=c.tail;if(Tt(n,i,c.children,a),c=yt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&kp(n,a,i);else if(n.tag===19)kp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}switch(K(yt,c),f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&Lo(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),hu(i,!1,f,a,y);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&Lo(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}hu(i,!0,a,null,y);break;case"together":hu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Jn(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),wi|=i.lanes,(a&i.childLanes)===0)if(n!==null){if(Ir(n,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(n!==null&&i.child!==n.child)throw Error(s(153));if(i.child!==null){for(n=i.child,a=Vn(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Vn(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function fu(n,i){return(n.lanes&i)!==0?!0:(n=n.dependencies,!!(n!==null&&go(n)))}function Lv(n,i,a){switch(i.tag){case 3:Re(i,i.stateNode.containerInfo),fi(i,gt,n.memoizedState.cache),Or();break;case 27:case 5:He(i);break;case 4:Re(i,i.stateNode.containerInfo);break;case 10:fi(i,i.type,i.memoizedProps.value);break;case 13:var c=i.memoizedState;if(c!==null)return c.dehydrated!==null?(bi(i),i.flags|=128,null):(a&i.child.childLanes)!==0?Mp(n,i,a):(bi(i),n=Jn(n,i,a),n!==null?n.sibling:null);bi(i);break;case 19:var f=(n.flags&128)!==0;if(c=(a&i.childLanes)!==0,c||(Ir(n,i,a,!1),c=(a&i.childLanes)!==0),f){if(c)return Lp(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),K(yt,yt.current),c)break;return null;case 22:case 23:return i.lanes=0,Ep(n,i,a);case 24:fi(i,gt,n.memoizedState.cache)}return Jn(n,i,a)}function Pp(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps)vt=!0;else{if(!fu(n,a)&&(i.flags&128)===0)return vt=!1,Lv(n,i,a);vt=(n.flags&131072)!==0}else vt=!1,Pe&&(i.flags&1048576)!==0&&cf(i,mo,i.index);switch(i.lanes=0,i.tag){case 16:e:{n=i.pendingProps;var c=i.elementType,f=c._init;if(c=f(c._payload),i.type=c,typeof c=="function")Cc(c)?(n=Zi(c,n),i.tag=1,i=Rp(null,i,c,n,a)):(i.tag=0,i=au(null,i,c,n,a));else{if(c!=null){if(f=c.$$typeof,f===O){i.tag=11,i=Cp(null,i,c,n,a);break e}else if(f===F){i.tag=14,i=xp(null,i,c,n,a);break e}}throw i=ae(c)||c,Error(s(306,i,""))}}return i;case 0:return au(n,i,i.type,i.pendingProps,a);case 1:return c=i.type,f=Zi(c,i.pendingProps),Rp(n,i,c,f,a);case 3:e:{if(Re(i,i.stateNode.containerInfo),n===null)throw Error(s(387));c=i.pendingProps;var y=i.memoizedState;f=y.element,Ic(n,i),Gr(i,c,null,a);var S=i.memoizedState;if(c=S.cache,fi(i,gt,c),c!==y.cache&&Mc(i,[gt],a,!0),zr(),c=S.element,y.isDehydrated)if(y={element:c,isDehydrated:!1,cache:S.cache},i.updateQueue.baseState=y,i.memoizedState=y,i.flags&256){i=Dp(n,i,c,a);break e}else if(c!==f){f=dn(Error(s(424)),i),Nr(f),i=Dp(n,i,c,a);break e}else{switch(n=i.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(rt=xn(n.firstChild),jt=i,Pe=!0,Xi=null,Rn=!0,a=dp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Or(),c===f){i=Jn(n,i,a);break e}Tt(n,i,c,a)}i=i.child}return i;case 26:return No(n,i),n===null?(a=jm(i.type,null,i.pendingProps,null))?i.memoizedState=a:Pe||(a=i.type,n=i.pendingProps,c=Ko(re.current).createElement(a),c[kt]=i,c[Ht]=n,Rt(c,a,n),bt(c),i.stateNode=c):i.memoizedState=jm(i.type,n.memoizedProps,i.pendingProps,n.memoizedState),null;case 27:return He(i),n===null&&Pe&&(c=i.stateNode=Om(i.type,i.pendingProps,re.current),jt=i,Rn=!0,f=rt,Ri(i.type)?(Xu=f,rt=xn(c.firstChild)):rt=f),Tt(n,i,i.pendingProps.children,a),No(n,i),n===null&&(i.flags|=4194304),i.child;case 5:return n===null&&Pe&&((f=c=rt)&&(c=aA(c,i.type,i.pendingProps,Rn),c!==null?(i.stateNode=c,jt=i,rt=xn(c.firstChild),Rn=!1,f=!0):f=!1),f||Wi(i)),He(i),f=i.type,y=i.pendingProps,S=n!==null?n.memoizedProps:null,c=y.children,Gu(f,y)?c=null:S!==null&&Gu(f,S)&&(i.flags|=32),i.memoizedState!==null&&(f=zc(n,i,wv,null,null,a),da._currentValue=f),No(n,i),Tt(n,i,c,a),i.child;case 6:return n===null&&Pe&&((n=a=rt)&&(a=oA(a,i.pendingProps,Rn),a!==null?(i.stateNode=a,jt=i,rt=null,n=!0):n=!1),n||Wi(i)),null;case 13:return Mp(n,i,a);case 4:return Re(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Us(i,null,c,a):Tt(n,i,c,a),i.child;case 11:return Cp(n,i,i.type,i.pendingProps,a);case 7:return Tt(n,i,i.pendingProps,a),i.child;case 8:return Tt(n,i,i.pendingProps.children,a),i.child;case 12:return Tt(n,i,i.pendingProps.children,a),i.child;case 10:return c=i.pendingProps,fi(i,i.type,c.value),Tt(n,i,c.children,a),i.child;case 9:return f=i.type._context,c=i.pendingProps.children,Ki(i),f=Lt(f),c=c(f),i.flags|=1,Tt(n,i,c,a),i.child;case 14:return xp(n,i,i.type,i.pendingProps,a);case 15:return wp(n,i,i.type,i.pendingProps,a);case 19:return Lp(n,i,a);case 31:return c=i.pendingProps,a=i.mode,c={mode:c.mode,children:c.children},n===null?(a=Io(c,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=Vn(n.child,c),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return Ep(n,i,a);case 24:return Ki(i),c=Lt(gt),n===null?(f=Pc(),f===null&&(f=Ve,y=kc(),f.pooledCache=y,y.refCount++,y!==null&&(f.pooledCacheLanes|=a),f=y),i.memoizedState={parent:c,cache:f},Nc(i),fi(i,gt,f)):((n.lanes&a)!==0&&(Ic(n,i),Gr(i,null,null,a),zr()),f=n.memoizedState,y=i.memoizedState,f.parent!==c?(f={parent:c,cache:c},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),fi(i,gt,c)):(c=y.cache,fi(i,gt,c),c!==f.cache&&Mc(i,[gt],a,!0))),Tt(n,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function Zn(n){n.flags|=4}function Op(n,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!zm(i)){if(i=mn.current,i!==null&&((ke&4194048)===ke?Dn!==null:(ke&62914560)!==ke&&(ke&536870912)===0||i!==Dn))throw Ur=Oc,yf;n.flags|=8192}}function jo(n,i){i!==null&&(n.flags|=4),n.flags&16384&&(i=n.tag!==22?dh():536870912,n.lanes|=i,qs|=i)}function Kr(n,i){if(!Pe)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Ze(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&65011712,c|=f.flags&65011712,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function Pv(n,i,a){var c=i.pendingProps;switch(Tc(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(i),null;case 1:return Ze(i),null;case 3:return a=i.stateNode,c=null,n!==null&&(c=n.memoizedState.cache),i.memoizedState.cache!==c&&(i.flags|=2048),$n(gt),We(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(n===null||n.child===null)&&(Pr(i)?Zn(i):n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,hf())),Ze(i),null;case 26:return a=i.memoizedState,n===null?(Zn(i),a!==null?(Ze(i),Op(i,a)):(Ze(i),i.flags&=-16777217)):a?a!==n.memoizedState?(Zn(i),Ze(i),Op(i,a)):(Ze(i),i.flags&=-16777217):(n.memoizedProps!==c&&Zn(i),Ze(i),i.flags&=-16777217),null;case 27:Ut(i),a=re.current;var f=i.type;if(n!==null&&i.stateNode!=null)n.memoizedProps!==c&&Zn(i);else{if(!c){if(i.stateNode===null)throw Error(s(166));return Ze(i),null}n=te.current,Pr(i)?uf(i):(n=Om(f,c,a),i.stateNode=n,Zn(i))}return Ze(i),null;case 5:if(Ut(i),a=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==c&&Zn(i);else{if(!c){if(i.stateNode===null)throw Error(s(166));return Ze(i),null}if(n=te.current,Pr(i))uf(i);else{switch(f=Ko(re.current),n){case 1:n=f.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:n=f.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":n=f.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":n=f.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":n=f.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof c.is=="string"?f.createElement("select",{is:c.is}):f.createElement("select"),c.multiple?n.multiple=!0:c.size&&(n.size=c.size);break;default:n=typeof c.is=="string"?f.createElement(a,{is:c.is}):f.createElement(a)}}n[kt]=i,n[Ht]=c;e:for(f=i.child;f!==null;){if(f.tag===5||f.tag===6)n.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===i)break e;for(;f.sibling===null;){if(f.return===null||f.return===i)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}i.stateNode=n;e:switch(Rt(n,a,c),a){case"button":case"input":case"select":case"textarea":n=!!c.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Zn(i)}}return Ze(i),i.flags&=-16777217,null;case 6:if(n&&i.stateNode!=null)n.memoizedProps!==c&&Zn(i);else{if(typeof c!="string"&&i.stateNode===null)throw Error(s(166));if(n=re.current,Pr(i)){if(n=i.stateNode,a=i.memoizedProps,c=null,f=jt,f!==null)switch(f.tag){case 27:case 5:c=f.memoizedProps}n[kt]=i,n=!!(n.nodeValue===a||c!==null&&c.suppressHydrationWarning===!0||_m(n.nodeValue,a)),n||Wi(i)}else n=Ko(n).createTextNode(c),n[kt]=i,i.stateNode=n}return Ze(i),null;case 13:if(c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=Pr(i),c!==null&&c.dehydrated!==null){if(n===null){if(!f)throw Error(s(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[kt]=i}else Or(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ze(i),f=!1}else f=hf(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(Qn(i),i):(Qn(i),null)}if(Qn(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=c!==null,n=n!==null&&n.memoizedState!==null,a){c=i.child,f=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(f=c.alternate.memoizedState.cachePool.pool);var y=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(y=c.memoizedState.cachePool.pool),y!==f&&(c.flags|=2048)}return a!==n&&a&&(i.child.flags|=8192),jo(i,i.updateQueue),Ze(i),null;case 4:return We(),n===null&&Bu(i.stateNode.containerInfo),Ze(i),null;case 10:return $n(i.type),Ze(i),null;case 19:if(Z(yt),f=i.memoizedState,f===null)return Ze(i),null;if(c=(i.flags&128)!==0,y=f.rendering,y===null)if(c)Kr(f,!1);else{if(at!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(y=Lo(n),y!==null){for(i.flags|=128,Kr(f,!1),n=y.updateQueue,i.updateQueue=n,jo(i,n),i.subtreeFlags=0,n=a,a=i.child;a!==null;)lf(a,n),a=a.sibling;return K(yt,yt.current&1|2),i.child}n=n.sibling}f.tail!==null&&Et()>Uo&&(i.flags|=128,c=!0,Kr(f,!1),i.lanes=4194304)}else{if(!c)if(n=Lo(y),n!==null){if(i.flags|=128,c=!0,n=n.updateQueue,i.updateQueue=n,jo(i,n),Kr(f,!0),f.tail===null&&f.tailMode==="hidden"&&!y.alternate&&!Pe)return Ze(i),null}else 2*Et()-f.renderingStartTime>Uo&&a!==536870912&&(i.flags|=128,c=!0,Kr(f,!1),i.lanes=4194304);f.isBackwards?(y.sibling=i.child,i.child=y):(n=f.last,n!==null?n.sibling=y:i.child=y,f.last=y)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=Et(),i.sibling=null,n=yt.current,K(yt,c?n&1|2:n&1),i):(Ze(i),null);case 22:case 23:return Qn(i),Uc(),c=i.memoizedState!==null,n!==null?n.memoizedState!==null!==c&&(i.flags|=8192):c&&(i.flags|=8192),c?(a&536870912)!==0&&(i.flags&128)===0&&(Ze(i),i.subtreeFlags&6&&(i.flags|=8192)):Ze(i),a=i.updateQueue,a!==null&&jo(i,a.retryQueue),a=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),c=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(c=i.memoizedState.cachePool.pool),c!==a&&(i.flags|=2048),n!==null&&Z(Qi),null;case 24:return a=null,n!==null&&(a=n.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),$n(gt),Ze(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function Ov(n,i){switch(Tc(i),i.tag){case 1:return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return $n(gt),We(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 26:case 27:case 5:return Ut(i),null;case 13:if(Qn(i),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Or()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Z(yt),null;case 4:return We(),null;case 10:return $n(i.type),null;case 22:case 23:return Qn(i),Uc(),n!==null&&Z(Qi),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 24:return $n(gt),null;case 25:return null;default:return null}}function Np(n,i){switch(Tc(i),i.tag){case 3:$n(gt),We();break;case 26:case 27:case 5:Ut(i);break;case 4:We();break;case 13:Qn(i);break;case 19:Z(yt);break;case 10:$n(i.type);break;case 22:case 23:Qn(i),Uc(),n!==null&&Z(Qi);break;case 24:$n(gt)}}function Qr(n,i){try{var a=i.updateQueue,c=a!==null?a.lastEffect:null;if(c!==null){var f=c.next;a=f;do{if((a.tag&n)===n){c=void 0;var y=a.create,S=a.inst;c=y(),S.destroy=c}a=a.next}while(a!==f)}}catch(E){ze(i,i.return,E)}}function Ai(n,i,a){try{var c=i.updateQueue,f=c!==null?c.lastEffect:null;if(f!==null){var y=f.next;c=y;do{if((c.tag&n)===n){var S=c.inst,E=S.destroy;if(E!==void 0){S.destroy=void 0,f=i;var D=a,U=E;try{U()}catch(Y){ze(f,D,Y)}}}c=c.next}while(c!==y)}}catch(Y){ze(i,i.return,Y)}}function Ip(n){var i=n.updateQueue;if(i!==null){var a=n.stateNode;try{xf(i,a)}catch(c){ze(n,n.return,c)}}}function jp(n,i,a){a.props=Zi(n.type,n.memoizedProps),a.state=n.memoizedState;try{a.componentWillUnmount()}catch(c){ze(n,i,c)}}function Jr(n,i){try{var a=n.ref;if(a!==null){switch(n.tag){case 26:case 27:case 5:var c=n.stateNode;break;case 30:c=n.stateNode;break;default:c=n.stateNode}typeof a=="function"?n.refCleanup=a(c):a.current=c}}catch(f){ze(n,i,f)}}function Mn(n,i){var a=n.ref,c=n.refCleanup;if(a!==null)if(typeof c=="function")try{c()}catch(f){ze(n,i,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(f){ze(n,i,f)}else a.current=null}function Bp(n){var i=n.type,a=n.memoizedProps,c=n.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&c.focus();break e;case"img":a.src?c.src=a.src:a.srcSet&&(c.srcset=a.srcSet)}}catch(f){ze(n,n.return,f)}}function pu(n,i,a){try{var c=n.stateNode;tA(c,n.type,a,i),c[Ht]=i}catch(f){ze(n,n.return,f)}}function Fp(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Ri(n.type)||n.tag===4}function mu(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Fp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Ri(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function gu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(n,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(n),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=$o));else if(c!==4&&(c===27&&Ri(n.type)&&(a=n.stateNode,i=null),n=n.child,n!==null))for(gu(n,i,a),n=n.sibling;n!==null;)gu(n,i,a),n=n.sibling}function Bo(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(c===27&&Ri(n.type)&&(a=n.stateNode),n=n.child,n!==null))for(Bo(n,i,a),n=n.sibling;n!==null;)Bo(n,i,a),n=n.sibling}function Up(n){var i=n.stateNode,a=n.memoizedProps;try{for(var c=n.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Rt(i,c,a),i[kt]=n,i[Ht]=a}catch(y){ze(n,n.return,y)}}var ei=!1,ct=!1,yu=!1,Hp=typeof WeakSet=="function"?WeakSet:Set,At=null;function Nv(n,i){if(n=n.containerInfo,Hu=nl,n=Qh(n),mc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,y=c.focusNode;c=c.focusOffset;try{a.nodeType,y.nodeType}catch{a=null;break e}var S=0,E=-1,D=-1,U=0,Y=0,$=n,H=null;t:for(;;){for(var z;$!==a||f!==0&&$.nodeType!==3||(E=S+f),$!==y||c!==0&&$.nodeType!==3||(D=S+c),$.nodeType===3&&(S+=$.nodeValue.length),(z=$.firstChild)!==null;)H=$,$=z;for(;;){if($===n)break t;if(H===a&&++U===f&&(E=S),H===y&&++Y===c&&(D=S),(z=$.nextSibling)!==null)break;$=H,H=$.parentNode}$=z}a=E===-1||D===-1?null:{start:E,end:D}}else a=null}a=a||{start:0,end:0}}else a=null;for(zu={focusedElem:n,selectionRange:a},nl=!1,At=i;At!==null;)if(i=At,n=i.child,(i.subtreeFlags&1024)!==0&&n!==null)n.return=i,At=n;else for(;At!==null;){switch(i=At,y=i.alternate,n=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&y!==null){n=void 0,a=i,f=y.memoizedProps,y=y.memoizedState,c=a.stateNode;try{var ge=Zi(a.type,f,a.elementType===a.type);n=c.getSnapshotBeforeUpdate(ge,y),c.__reactInternalSnapshotBeforeUpdate=n}catch(fe){ze(a,a.return,fe)}}break;case 3:if((n&1024)!==0){if(n=i.stateNode.containerInfo,a=n.nodeType,a===9)Vu(n);else if(a===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Vu(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(s(163))}if(n=i.sibling,n!==null){n.return=i.return,At=n;break}At=i.return}}function zp(n,i,a){var c=a.flags;switch(a.tag){case 0:case 11:case 15:Si(n,a),c&4&&Qr(5,a);break;case 1:if(Si(n,a),c&4)if(n=a.stateNode,i===null)try{n.componentDidMount()}catch(S){ze(a,a.return,S)}else{var f=Zi(a.type,i.memoizedProps);i=i.memoizedState;try{n.componentDidUpdate(f,i,n.__reactInternalSnapshotBeforeUpdate)}catch(S){ze(a,a.return,S)}}c&64&&Ip(a),c&512&&Jr(a,a.return);break;case 3:if(Si(n,a),c&64&&(n=a.updateQueue,n!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{xf(n,i)}catch(S){ze(a,a.return,S)}}break;case 27:i===null&&c&4&&Up(a);case 26:case 5:Si(n,a),i===null&&c&4&&Bp(a),c&512&&Jr(a,a.return);break;case 12:Si(n,a);break;case 13:Si(n,a),c&4&&Vp(n,a),c&64&&(n=a.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(a=qv.bind(null,a),lA(n,a))));break;case 22:if(c=a.memoizedState!==null||ei,!c){i=i!==null&&i.memoizedState!==null||ct,f=ei;var y=ct;ei=c,(ct=i)&&!y?Ci(n,a,(a.subtreeFlags&8772)!==0):Si(n,a),ei=f,ct=y}break;case 30:break;default:Si(n,a)}}function Gp(n){var i=n.alternate;i!==null&&(n.alternate=null,Gp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&Kl(i)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var $e=null,qt=!1;function ti(n,i,a){for(a=a.child;a!==null;)qp(n,i,a),a=a.sibling}function qp(n,i,a){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(Bi,a)}catch{}switch(a.tag){case 26:ct||Mn(a,i),ti(n,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ct||Mn(a,i);var c=$e,f=qt;Ri(a.type)&&($e=a.stateNode,qt=!1),ti(n,i,a),oa(a.stateNode),$e=c,qt=f;break;case 5:ct||Mn(a,i);case 6:if(c=$e,f=qt,$e=null,ti(n,i,a),$e=c,qt=f,$e!==null)if(qt)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode)}catch(y){ze(a,i,y)}else try{$e.removeChild(a.stateNode)}catch(y){ze(a,i,y)}break;case 18:$e!==null&&(qt?(n=$e,Lm(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,a.stateNode),ma(n)):Lm($e,a.stateNode));break;case 4:c=$e,f=qt,$e=a.stateNode.containerInfo,qt=!0,ti(n,i,a),$e=c,qt=f;break;case 0:case 11:case 14:case 15:ct||Ai(2,a,i),ct||Ai(4,a,i),ti(n,i,a);break;case 1:ct||(Mn(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"&&jp(a,i,c)),ti(n,i,a);break;case 21:ti(n,i,a);break;case 22:ct=(c=ct)||a.memoizedState!==null,ti(n,i,a),ct=c;break;default:ti(n,i,a)}}function Vp(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{ma(n)}catch(a){ze(i,i.return,a)}}function Iv(n){switch(n.tag){case 13:case 19:var i=n.stateNode;return i===null&&(i=n.stateNode=new Hp),i;case 22:return n=n.stateNode,i=n._retryCache,i===null&&(i=n._retryCache=new Hp),i;default:throw Error(s(435,n.tag))}}function bu(n,i){var a=Iv(n);i.forEach(function(c){var f=Vv.bind(null,n,c);a.has(c)||(a.add(c),c.then(f,f))})}function Zt(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c],y=n,S=i,E=S;e:for(;E!==null;){switch(E.tag){case 27:if(Ri(E.type)){$e=E.stateNode,qt=!1;break e}break;case 5:$e=E.stateNode,qt=!1;break e;case 3:case 4:$e=E.stateNode.containerInfo,qt=!0;break e}E=E.return}if($e===null)throw Error(s(160));qp(y,S,f),$e=null,qt=!1,y=f.alternate,y!==null&&(y.return=null),f.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Yp(i,n),i=i.sibling}var Cn=null;function Yp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Zt(i,n),en(n),c&4&&(Ai(3,n,n.return),Qr(3,n),Ai(5,n,n.return));break;case 1:Zt(i,n),en(n),c&512&&(ct||a===null||Mn(a,a.return)),c&64&&ei&&(n=n.updateQueue,n!==null&&(c=n.callbacks,c!==null&&(a=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=a===null?c:a.concat(c))));break;case 26:var f=Cn;if(Zt(i,n),en(n),c&512&&(ct||a===null||Mn(a,a.return)),c&4){var y=a!==null?a.memoizedState:null;if(c=n.memoizedState,a===null)if(c===null)if(n.stateNode===null){e:{c=n.type,a=n.memoizedProps,f=f.ownerDocument||f;t:switch(c){case"title":y=f.getElementsByTagName("title")[0],(!y||y[Cr]||y[kt]||y.namespaceURI==="http://www.w3.org/2000/svg"||y.hasAttribute("itemprop"))&&(y=f.createElement(c),f.head.insertBefore(y,f.querySelector("head > title"))),Rt(y,c,a),y[kt]=n,bt(y),c=y;break e;case"link":var S=Um("link","href",f).get(c+(a.href||""));if(S){for(var E=0;E<S.length;E++)if(y=S[E],y.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&y.getAttribute("rel")===(a.rel==null?null:a.rel)&&y.getAttribute("title")===(a.title==null?null:a.title)&&y.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(E,1);break t}}y=f.createElement(c),Rt(y,c,a),f.head.appendChild(y);break;case"meta":if(S=Um("meta","content",f).get(c+(a.content||""))){for(E=0;E<S.length;E++)if(y=S[E],y.getAttribute("content")===(a.content==null?null:""+a.content)&&y.getAttribute("name")===(a.name==null?null:a.name)&&y.getAttribute("property")===(a.property==null?null:a.property)&&y.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&y.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(E,1);break t}}y=f.createElement(c),Rt(y,c,a),f.head.appendChild(y);break;default:throw Error(s(468,c))}y[kt]=n,bt(y),c=y}n.stateNode=c}else Hm(f,n.type,n.stateNode);else n.stateNode=Fm(f,c,n.memoizedProps);else y!==c?(y===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):y.count--,c===null?Hm(f,n.type,n.stateNode):Fm(f,c,n.memoizedProps)):c===null&&n.stateNode!==null&&pu(n,n.memoizedProps,a.memoizedProps)}break;case 27:Zt(i,n),en(n),c&512&&(ct||a===null||Mn(a,a.return)),a!==null&&c&4&&pu(n,n.memoizedProps,a.memoizedProps);break;case 5:if(Zt(i,n),en(n),c&512&&(ct||a===null||Mn(a,a.return)),n.flags&32){f=n.stateNode;try{Cs(f,"")}catch(z){ze(n,n.return,z)}}c&4&&n.stateNode!=null&&(f=n.memoizedProps,pu(n,f,a!==null?a.memoizedProps:f)),c&1024&&(yu=!0);break;case 6:if(Zt(i,n),en(n),c&4){if(n.stateNode===null)throw Error(s(162));c=n.memoizedProps,a=n.stateNode;try{a.nodeValue=c}catch(z){ze(n,n.return,z)}}break;case 3:if(Zo=null,f=Cn,Cn=Qo(i.containerInfo),Zt(i,n),Cn=f,en(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ma(i.containerInfo)}catch(z){ze(n,n.return,z)}yu&&(yu=!1,Xp(n));break;case 4:c=Cn,Cn=Qo(n.stateNode.containerInfo),Zt(i,n),en(n),Cn=c;break;case 12:Zt(i,n),en(n);break;case 13:Zt(i,n),en(n),n.child.flags&8192&&n.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(wu=Et()),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,bu(n,c)));break;case 22:f=n.memoizedState!==null;var D=a!==null&&a.memoizedState!==null,U=ei,Y=ct;if(ei=U||f,ct=Y||D,Zt(i,n),ct=Y,ei=U,en(n),c&8192)e:for(i=n.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(a===null||D||ei||ct||es(n)),a=null,i=n;;){if(i.tag===5||i.tag===26){if(a===null){D=a=i;try{if(y=D.stateNode,f)S=y.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{E=D.stateNode;var $=D.memoizedProps.style,H=$!=null&&$.hasOwnProperty("display")?$.display:null;E.style.display=H==null||typeof H=="boolean"?"":(""+H).trim()}}catch(z){ze(D,D.return,z)}}}else if(i.tag===6){if(a===null){D=i;try{D.stateNode.nodeValue=f?"":D.memoizedProps}catch(z){ze(D,D.return,z)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===n)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break e;for(;i.sibling===null;){if(i.return===null||i.return===n)break e;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}c&4&&(c=n.updateQueue,c!==null&&(a=c.retryQueue,a!==null&&(c.retryQueue=null,bu(n,a))));break;case 19:Zt(i,n),en(n),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,bu(n,c)));break;case 30:break;case 21:break;default:Zt(i,n),en(n)}}function en(n){var i=n.flags;if(i&2){try{for(var a,c=n.return;c!==null;){if(Fp(c)){a=c;break}c=c.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var f=a.stateNode,y=mu(n);Bo(n,y,f);break;case 5:var S=a.stateNode;a.flags&32&&(Cs(S,""),a.flags&=-33);var E=mu(n);Bo(n,E,S);break;case 3:case 4:var D=a.stateNode.containerInfo,U=mu(n);gu(n,U,D);break;default:throw Error(s(161))}}catch(Y){ze(n,n.return,Y)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Xp(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var i=n;Xp(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),n=n.sibling}}function Si(n,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)zp(n,i.alternate,i),i=i.sibling}function es(n){for(n=n.child;n!==null;){var i=n;switch(i.tag){case 0:case 11:case 14:case 15:Ai(4,i,i.return),es(i);break;case 1:Mn(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&jp(i,i.return,a),es(i);break;case 27:oa(i.stateNode);case 26:case 5:Mn(i,i.return),es(i);break;case 22:i.memoizedState===null&&es(i);break;case 30:es(i);break;default:es(i)}n=n.sibling}}function Ci(n,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var c=i.alternate,f=n,y=i,S=y.flags;switch(y.tag){case 0:case 11:case 15:Ci(f,y,a),Qr(4,y);break;case 1:if(Ci(f,y,a),c=y,f=c.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(U){ze(c,c.return,U)}if(c=y,f=c.updateQueue,f!==null){var E=c.stateNode;try{var D=f.shared.hiddenCallbacks;if(D!==null)for(f.shared.hiddenCallbacks=null,f=0;f<D.length;f++)Cf(D[f],E)}catch(U){ze(c,c.return,U)}}a&&S&64&&Ip(y),Jr(y,y.return);break;case 27:Up(y);case 26:case 5:Ci(f,y,a),a&&c===null&&S&4&&Bp(y),Jr(y,y.return);break;case 12:Ci(f,y,a);break;case 13:Ci(f,y,a),a&&S&4&&Vp(f,y);break;case 22:y.memoizedState===null&&Ci(f,y,a),Jr(y,y.return);break;case 30:break;default:Ci(f,y,a)}i=i.sibling}}function vu(n,i){var a=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),n=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(n=i.memoizedState.cachePool.pool),n!==a&&(n!=null&&n.refCount++,a!=null&&jr(a))}function Au(n,i){n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&jr(n))}function kn(n,i,a,c){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Wp(n,i,a,c),i=i.sibling}function Wp(n,i,a,c){var f=i.flags;switch(i.tag){case 0:case 11:case 15:kn(n,i,a,c),f&2048&&Qr(9,i);break;case 1:kn(n,i,a,c);break;case 3:kn(n,i,a,c),f&2048&&(n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&jr(n)));break;case 12:if(f&2048){kn(n,i,a,c),n=i.stateNode;try{var y=i.memoizedProps,S=y.id,E=y.onPostCommit;typeof E=="function"&&E(S,i.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(D){ze(i,i.return,D)}}else kn(n,i,a,c);break;case 13:kn(n,i,a,c);break;case 23:break;case 22:y=i.stateNode,S=i.alternate,i.memoizedState!==null?y._visibility&2?kn(n,i,a,c):Zr(n,i):y._visibility&2?kn(n,i,a,c):(y._visibility|=2,Hs(n,i,a,c,(i.subtreeFlags&10256)!==0)),f&2048&&vu(S,i);break;case 24:kn(n,i,a,c),f&2048&&Au(i.alternate,i);break;default:kn(n,i,a,c)}}function Hs(n,i,a,c,f){for(f=f&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var y=n,S=i,E=a,D=c,U=S.flags;switch(S.tag){case 0:case 11:case 15:Hs(y,S,E,D,f),Qr(8,S);break;case 23:break;case 22:var Y=S.stateNode;S.memoizedState!==null?Y._visibility&2?Hs(y,S,E,D,f):Zr(y,S):(Y._visibility|=2,Hs(y,S,E,D,f)),f&&U&2048&&vu(S.alternate,S);break;case 24:Hs(y,S,E,D,f),f&&U&2048&&Au(S.alternate,S);break;default:Hs(y,S,E,D,f)}i=i.sibling}}function Zr(n,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=n,c=i,f=c.flags;switch(c.tag){case 22:Zr(a,c),f&2048&&vu(c.alternate,c);break;case 24:Zr(a,c),f&2048&&Au(c.alternate,c);break;default:Zr(a,c)}i=i.sibling}}var ea=8192;function zs(n){if(n.subtreeFlags&ea)for(n=n.child;n!==null;)$p(n),n=n.sibling}function $p(n){switch(n.tag){case 26:zs(n),n.flags&ea&&n.memoizedState!==null&&SA(Cn,n.memoizedState,n.memoizedProps);break;case 5:zs(n);break;case 3:case 4:var i=Cn;Cn=Qo(n.stateNode.containerInfo),zs(n),Cn=i;break;case 22:n.memoizedState===null&&(i=n.alternate,i!==null&&i.memoizedState!==null?(i=ea,ea=16777216,zs(n),ea=i):zs(n));break;default:zs(n)}}function Kp(n){var i=n.alternate;if(i!==null&&(n=i.child,n!==null)){i.child=null;do i=n.sibling,n.sibling=null,n=i;while(n!==null)}}function ta(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var c=i[a];At=c,Jp(c,n)}Kp(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Qp(n),n=n.sibling}function Qp(n){switch(n.tag){case 0:case 11:case 15:ta(n),n.flags&2048&&Ai(9,n,n.return);break;case 3:ta(n);break;case 12:ta(n);break;case 22:var i=n.stateNode;n.memoizedState!==null&&i._visibility&2&&(n.return===null||n.return.tag!==13)?(i._visibility&=-3,Fo(n)):ta(n);break;default:ta(n)}}function Fo(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var c=i[a];At=c,Jp(c,n)}Kp(n)}for(n=n.child;n!==null;){switch(i=n,i.tag){case 0:case 11:case 15:Ai(8,i,i.return),Fo(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,Fo(i));break;default:Fo(i)}n=n.sibling}}function Jp(n,i){for(;At!==null;){var a=At;switch(a.tag){case 0:case 11:case 15:Ai(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var c=a.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:jr(a.memoizedState.cache)}if(c=a.child,c!==null)c.return=a,At=c;else e:for(a=n;At!==null;){c=At;var f=c.sibling,y=c.return;if(Gp(c),c===a){At=null;break e}if(f!==null){f.return=y,At=f;break e}At=y}}}var jv={getCacheForType:function(n){var i=Lt(gt),a=i.data.get(n);return a===void 0&&(a=n(),i.data.set(n,a)),a}},Bv=typeof WeakMap=="function"?WeakMap:Map,Oe=0,Ve=null,Ee=null,ke=0,Ne=0,tn=null,xi=!1,Gs=!1,Su=!1,ni=0,at=0,wi=0,ts=0,Cu=0,gn=0,qs=0,na=null,Vt=null,xu=!1,wu=0,Uo=1/0,Ho=null,Ei=null,_t=0,Ti=null,Vs=null,Ys=0,Eu=0,Tu=null,Zp=null,ia=0,_u=null;function nn(){if((Oe&2)!==0&&ke!==0)return ke&-ke;if(N.T!==null){var n=Ps;return n!==0?n:Ou()}return ph()}function em(){gn===0&&(gn=(ke&536870912)===0||Pe?uh():536870912);var n=mn.current;return n!==null&&(n.flags|=32),gn}function sn(n,i,a){(n===Ve&&(Ne===2||Ne===9)||n.cancelPendingCommit!==null)&&(Xs(n,0),_i(n,ke,gn,!1)),Sr(n,a),((Oe&2)===0||n!==Ve)&&(n===Ve&&((Oe&2)===0&&(ts|=a),at===4&&_i(n,ke,gn,!1)),Ln(n))}function tm(n,i,a){if((Oe&6)!==0)throw Error(s(327));var c=!a&&(i&124)===0&&(i&n.expiredLanes)===0||Ar(n,i),f=c?Hv(n,i):Mu(n,i,!0),y=c;do{if(f===0){Gs&&!c&&_i(n,i,0,!1);break}else{if(a=n.current.alternate,y&&!Fv(a)){f=Mu(n,i,!1),y=!1;continue}if(f===2){if(y=i,n.errorRecoveryDisabledLanes&y)var S=0;else S=n.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){i=S;e:{var E=n;f=na;var D=E.current.memoizedState.isDehydrated;if(D&&(Xs(E,S).flags|=256),S=Mu(E,S,!1),S!==2){if(Su&&!D){E.errorRecoveryDisabledLanes|=y,ts|=y,f=4;break e}y=Vt,Vt=f,y!==null&&(Vt===null?Vt=y:Vt.push.apply(Vt,y))}f=S}if(y=!1,f!==2)continue}}if(f===1){Xs(n,0),_i(n,i,0,!0);break}e:{switch(c=n,y=f,y){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:_i(c,i,gn,!xi);break e;case 2:Vt=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(f=wu+300-Et(),10<f)){if(_i(c,i,gn,!xi),Qa(c,0,!0)!==0)break e;c.timeoutHandle=Mm(nm.bind(null,c,a,Vt,Ho,xu,i,gn,ts,qs,xi,y,2,-0,0),f);break e}nm(c,a,Vt,Ho,xu,i,gn,ts,qs,xi,y,0,-0,0)}}break}while(!0);Ln(n)}function nm(n,i,a,c,f,y,S,E,D,U,Y,$,H,z){if(n.timeoutHandle=-1,$=i.subtreeFlags,($&8192||($&16785408)===16785408)&&(ua={stylesheets:null,count:0,unsuspend:AA},$p(i),$=CA(),$!==null)){n.cancelPendingCommit=$(cm.bind(null,n,i,y,a,c,f,S,E,D,Y,1,H,z)),_i(n,y,S,!U);return}cm(n,i,y,a,c,f,S,E,D)}function Fv(n){for(var i=n;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var c=0;c<a.length;c++){var f=a[c],y=f.getSnapshot;f=f.value;try{if(!Qt(y(),f))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function _i(n,i,a,c){i&=~Cu,i&=~ts,n.suspendedLanes|=i,n.pingedLanes&=~i,c&&(n.warmLanes|=i),c=n.expirationTimes;for(var f=i;0<f;){var y=31-st(f),S=1<<y;c[y]=-1,f&=~S}a!==0&&hh(n,a,i)}function zo(){return(Oe&6)===0?(sa(0),!1):!0}function Ru(){if(Ee!==null){if(Ne===0)var n=Ee.return;else n=Ee,Wn=$i=null,Vc(n),Fs=null,Wr=0,n=Ee;for(;n!==null;)Np(n.alternate,n),n=n.return;Ee=null}}function Xs(n,i){var a=n.timeoutHandle;a!==-1&&(n.timeoutHandle=-1,iA(a)),a=n.cancelPendingCommit,a!==null&&(n.cancelPendingCommit=null,a()),Ru(),Ve=n,Ee=a=Vn(n.current,null),ke=i,Ne=0,tn=null,xi=!1,Gs=Ar(n,i),Su=!1,qs=gn=Cu=ts=wi=at=0,Vt=na=null,xu=!1,(i&8)!==0&&(i|=i&32);var c=n.entangledLanes;if(c!==0)for(n=n.entanglements,c&=i;0<c;){var f=31-st(c),y=1<<f;i|=n[f],c&=~y}return ni=i,co(),a}function im(n,i){xe=null,N.H=Do,i===Fr||i===vo?(i=Af(),Ne=3):i===yf?(i=Af(),Ne=4):Ne=i===Sp?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,tn=i,Ee===null&&(at=1,Oo(n,dn(i,n.current)))}function sm(){var n=N.H;return N.H=Do,n===null?Do:n}function rm(){var n=N.A;return N.A=jv,n}function Du(){at=4,xi||(ke&4194048)!==ke&&mn.current!==null||(Gs=!0),(wi&134217727)===0&&(ts&134217727)===0||Ve===null||_i(Ve,ke,gn,!1)}function Mu(n,i,a){var c=Oe;Oe|=2;var f=sm(),y=rm();(Ve!==n||ke!==i)&&(Ho=null,Xs(n,i)),i=!1;var S=at;e:do try{if(Ne!==0&&Ee!==null){var E=Ee,D=tn;switch(Ne){case 8:Ru(),S=6;break e;case 3:case 2:case 9:case 6:mn.current===null&&(i=!0);var U=Ne;if(Ne=0,tn=null,Ws(n,E,D,U),a&&Gs){S=0;break e}break;default:U=Ne,Ne=0,tn=null,Ws(n,E,D,U)}}Uv(),S=at;break}catch(Y){im(n,Y)}while(!0);return i&&n.shellSuspendCounter++,Wn=$i=null,Oe=c,N.H=f,N.A=y,Ee===null&&(Ve=null,ke=0,co()),S}function Uv(){for(;Ee!==null;)am(Ee)}function Hv(n,i){var a=Oe;Oe|=2;var c=sm(),f=rm();Ve!==n||ke!==i?(Ho=null,Uo=Et()+500,Xs(n,i)):Gs=Ar(n,i);e:do try{if(Ne!==0&&Ee!==null){i=Ee;var y=tn;t:switch(Ne){case 1:Ne=0,tn=null,Ws(n,i,y,1);break;case 2:case 9:if(bf(y)){Ne=0,tn=null,om(i);break}i=function(){Ne!==2&&Ne!==9||Ve!==n||(Ne=7),Ln(n)},y.then(i,i);break e;case 3:Ne=7;break e;case 4:Ne=5;break e;case 7:bf(y)?(Ne=0,tn=null,om(i)):(Ne=0,tn=null,Ws(n,i,y,7));break;case 5:var S=null;switch(Ee.tag){case 26:S=Ee.memoizedState;case 5:case 27:var E=Ee;if(!S||zm(S)){Ne=0,tn=null;var D=E.sibling;if(D!==null)Ee=D;else{var U=E.return;U!==null?(Ee=U,Go(U)):Ee=null}break t}}Ne=0,tn=null,Ws(n,i,y,5);break;case 6:Ne=0,tn=null,Ws(n,i,y,6);break;case 8:Ru(),at=6;break e;default:throw Error(s(462))}}zv();break}catch(Y){im(n,Y)}while(!0);return Wn=$i=null,N.H=c,N.A=f,Oe=a,Ee!==null?0:(Ve=null,ke=0,co(),at)}function zv(){for(;Ee!==null&&!ot();)am(Ee)}function am(n){var i=Pp(n.alternate,n,ni);n.memoizedProps=n.pendingProps,i===null?Go(n):Ee=i}function om(n){var i=n,a=i.alternate;switch(i.tag){case 15:case 0:i=_p(a,i,i.pendingProps,i.type,void 0,ke);break;case 11:i=_p(a,i,i.pendingProps,i.type.render,i.ref,ke);break;case 5:Vc(i);default:Np(a,i),i=Ee=lf(i,ni),i=Pp(a,i,ni)}n.memoizedProps=n.pendingProps,i===null?Go(n):Ee=i}function Ws(n,i,a,c){Wn=$i=null,Vc(i),Fs=null,Wr=0;var f=i.return;try{if(kv(n,f,i,a,ke)){at=1,Oo(n,dn(a,n.current)),Ee=null;return}}catch(y){if(f!==null)throw Ee=f,y;at=1,Oo(n,dn(a,n.current)),Ee=null;return}i.flags&32768?(Pe||c===1?n=!0:Gs||(ke&536870912)!==0?n=!1:(xi=n=!0,(c===2||c===9||c===3||c===6)&&(c=mn.current,c!==null&&c.tag===13&&(c.flags|=16384))),lm(i,n)):Go(i)}function Go(n){var i=n;do{if((i.flags&32768)!==0){lm(i,xi);return}n=i.return;var a=Pv(i.alternate,i,ni);if(a!==null){Ee=a;return}if(i=i.sibling,i!==null){Ee=i;return}Ee=i=n}while(i!==null);at===0&&(at=5)}function lm(n,i){do{var a=Ov(n.alternate,n);if(a!==null){a.flags&=32767,Ee=a;return}if(a=n.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(n=n.sibling,n!==null)){Ee=n;return}Ee=n=a}while(n!==null);at=6,Ee=null}function cm(n,i,a,c,f,y,S,E,D){n.cancelPendingCommit=null;do qo();while(_t!==0);if((Oe&6)!==0)throw Error(s(327));if(i!==null){if(i===n.current)throw Error(s(177));if(y=i.lanes|i.childLanes,y|=Ac,Ab(n,a,y,S,E,D),n===Ve&&(Ee=Ve=null,ke=0),Vs=i,Ti=n,Ys=a,Eu=y,Tu=f,Zp=c,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,Yv(zn,function(){return pm(),null})):(n.callbackNode=null,n.callbackPriority=0),c=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||c){c=N.T,N.T=null,f=G.p,G.p=2,S=Oe,Oe|=4;try{Nv(n,i,a)}finally{Oe=S,G.p=f,N.T=c}}_t=1,um(),dm(),hm()}}function um(){if(_t===1){_t=0;var n=Ti,i=Vs,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var c=G.p;G.p=2;var f=Oe;Oe|=4;try{Yp(i,n);var y=zu,S=Qh(n.containerInfo),E=y.focusedElem,D=y.selectionRange;if(S!==E&&E&&E.ownerDocument&&Kh(E.ownerDocument.documentElement,E)){if(D!==null&&mc(E)){var U=D.start,Y=D.end;if(Y===void 0&&(Y=U),"selectionStart"in E)E.selectionStart=U,E.selectionEnd=Math.min(Y,E.value.length);else{var $=E.ownerDocument||document,H=$&&$.defaultView||window;if(H.getSelection){var z=H.getSelection(),ge=E.textContent.length,fe=Math.min(D.start,ge),Fe=D.end===void 0?fe:Math.min(D.end,ge);!z.extend&&fe>Fe&&(S=Fe,Fe=fe,fe=S);var I=$h(E,fe),L=$h(E,Fe);if(I&&L&&(z.rangeCount!==1||z.anchorNode!==I.node||z.anchorOffset!==I.offset||z.focusNode!==L.node||z.focusOffset!==L.offset)){var B=$.createRange();B.setStart(I.node,I.offset),z.removeAllRanges(),fe>Fe?(z.addRange(B),z.extend(L.node,L.offset)):(B.setEnd(L.node,L.offset),z.addRange(B))}}}}for($=[],z=E;z=z.parentNode;)z.nodeType===1&&$.push({element:z,left:z.scrollLeft,top:z.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<$.length;E++){var X=$[E];X.element.scrollLeft=X.left,X.element.scrollTop=X.top}}nl=!!Hu,zu=Hu=null}finally{Oe=f,G.p=c,N.T=a}}n.current=i,_t=2}}function dm(){if(_t===2){_t=0;var n=Ti,i=Vs,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var c=G.p;G.p=2;var f=Oe;Oe|=4;try{zp(n,i.alternate,i)}finally{Oe=f,G.p=c,N.T=a}}_t=3}}function hm(){if(_t===4||_t===3){_t=0,ht();var n=Ti,i=Vs,a=Ys,c=Zp;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?_t=5:(_t=0,Vs=Ti=null,fm(n,n.pendingLanes));var f=n.pendingLanes;if(f===0&&(Ei=null),Wl(a),i=i.stateNode,it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(Bi,i,void 0,(i.current.flags&128)===128)}catch{}if(c!==null){i=N.T,f=G.p,G.p=2,N.T=null;try{for(var y=n.onRecoverableError,S=0;S<c.length;S++){var E=c[S];y(E.value,{componentStack:E.stack})}}finally{N.T=i,G.p=f}}(Ys&3)!==0&&qo(),Ln(n),f=n.pendingLanes,(a&4194090)!==0&&(f&42)!==0?n===_u?ia++:(ia=0,_u=n):ia=0,sa(0)}}function fm(n,i){(n.pooledCacheLanes&=i)===0&&(i=n.pooledCache,i!=null&&(n.pooledCache=null,jr(i)))}function qo(n){return um(),dm(),hm(),pm()}function pm(){if(_t!==5)return!1;var n=Ti,i=Eu;Eu=0;var a=Wl(Ys),c=N.T,f=G.p;try{G.p=32>a?32:a,N.T=null,a=Tu,Tu=null;var y=Ti,S=Ys;if(_t=0,Vs=Ti=null,Ys=0,(Oe&6)!==0)throw Error(s(331));var E=Oe;if(Oe|=4,Qp(y.current),Wp(y,y.current,S,a),Oe=E,sa(0,!1),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(Bi,y)}catch{}return!0}finally{G.p=f,N.T=c,fm(n,i)}}function mm(n,i,a){i=dn(a,i),i=ru(n.stateNode,i,2),n=gi(n,i,2),n!==null&&(Sr(n,2),Ln(n))}function ze(n,i,a){if(n.tag===3)mm(n,n,a);else for(;i!==null;){if(i.tag===3){mm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Ei===null||!Ei.has(c))){n=dn(a,n),a=vp(2),c=gi(i,a,2),c!==null&&(Ap(a,c,i,n),Sr(c,2),Ln(c));break}}i=i.return}}function ku(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Bv;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(a)||(Su=!0,f.add(a),n=Gv.bind(null,n,i,a),i.then(n,n))}function Gv(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),n.pingedLanes|=n.suspendedLanes&a,n.warmLanes&=~a,Ve===n&&(ke&a)===a&&(at===4||at===3&&(ke&62914560)===ke&&300>Et()-wu?(Oe&2)===0&&Xs(n,0):Cu|=a,qs===ke&&(qs=0)),Ln(n)}function gm(n,i){i===0&&(i=dh()),n=Ds(n,i),n!==null&&(Sr(n,i),Ln(n))}function qv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),gm(n,a)}function Vv(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=n.stateNode;break;case 22:c=n.stateNode._retryCache;break;default:throw Error(s(314))}c!==null&&c.delete(i),gm(n,a)}function Yv(n,i){return De(n,i)}var Vo=null,$s=null,Lu=!1,Yo=!1,Pu=!1,ns=0;function Ln(n){n!==$s&&n.next===null&&($s===null?Vo=$s=n:$s=$s.next=n),Yo=!0,Lu||(Lu=!0,Wv())}function sa(n,i){if(!Pu&&Yo){Pu=!0;do for(var a=!1,c=Vo;c!==null;){if(n!==0){var f=c.pendingLanes;if(f===0)var y=0;else{var S=c.suspendedLanes,E=c.pingedLanes;y=(1<<31-st(42|n)+1)-1,y&=f&~(S&~E),y=y&201326741?y&201326741|1:y?y|2:0}y!==0&&(a=!0,Am(c,y))}else y=ke,y=Qa(c,c===Ve?y:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(y&3)===0||Ar(c,y)||(a=!0,Am(c,y));c=c.next}while(a);Pu=!1}}function Xv(){ym()}function ym(){Yo=Lu=!1;var n=0;ns!==0&&(nA()&&(n=ns),ns=0);for(var i=Et(),a=null,c=Vo;c!==null;){var f=c.next,y=bm(c,i);y===0?(c.next=null,a===null?Vo=f:a.next=f,f===null&&($s=a)):(a=c,(n!==0||(y&3)!==0)&&(Yo=!0)),c=f}sa(n)}function bm(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,y=n.pendingLanes&-62914561;0<y;){var S=31-st(y),E=1<<S,D=f[S];D===-1?((E&a)===0||(E&c)!==0)&&(f[S]=vb(E,i)):D<=i&&(n.expiredLanes|=E),y&=~E}if(i=Ve,a=ke,a=Qa(n,n===i?a:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c=n.callbackNode,a===0||n===i&&(Ne===2||Ne===9)||n.cancelPendingCommit!==null)return c!==null&&c!==null&&Ie(c),n.callbackNode=null,n.callbackPriority=0;if((a&3)===0||Ar(n,a)){if(i=a&-a,i===n.callbackPriority)return i;switch(c!==null&&Ie(c),Wl(a)){case 2:case 8:a=Xa;break;case 32:a=zn;break;case 268435456:a=Wa;break;default:a=zn}return c=vm.bind(null,n),a=De(a,c),n.callbackPriority=i,n.callbackNode=a,i}return c!==null&&c!==null&&Ie(c),n.callbackPriority=2,n.callbackNode=null,2}function vm(n,i){if(_t!==0&&_t!==5)return n.callbackNode=null,n.callbackPriority=0,null;var a=n.callbackNode;if(qo()&&n.callbackNode!==a)return null;var c=ke;return c=Qa(n,n===Ve?c:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c===0?null:(tm(n,c,i),bm(n,Et()),n.callbackNode!=null&&n.callbackNode===a?vm.bind(null,n):null)}function Am(n,i){if(qo())return null;tm(n,i,!0)}function Wv(){sA(function(){(Oe&6)!==0?De(ps,Xv):ym()})}function Ou(){return ns===0&&(ns=uh()),ns}function Sm(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:no(""+n)}function Cm(n,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,n.id&&a.setAttribute("form",n.id),i.parentNode.insertBefore(a,i),n=new FormData(n),a.parentNode.removeChild(a),n}function $v(n,i,a,c,f){if(i==="submit"&&a&&a.stateNode===f){var y=Sm((f[Ht]||null).action),S=c.submitter;S&&(i=(i=S[Ht]||null)?Sm(i.formAction):S.getAttribute("formAction"),i!==null&&(y=i,S=null));var E=new ao("action","action",null,c,f);n.push({event:E,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(ns!==0){var D=S?Cm(f,S):new FormData(f);eu(a,{pending:!0,data:D,method:f.method,action:y},null,D)}}else typeof y=="function"&&(E.preventDefault(),D=S?Cm(f,S):new FormData(f),eu(a,{pending:!0,data:D,method:f.method,action:y},y,D))},currentTarget:f}]})}}for(var Nu=0;Nu<vc.length;Nu++){var Iu=vc[Nu],Kv=Iu.toLowerCase(),Qv=Iu[0].toUpperCase()+Iu.slice(1);Sn(Kv,"on"+Qv)}Sn(ef,"onAnimationEnd"),Sn(tf,"onAnimationIteration"),Sn(nf,"onAnimationStart"),Sn("dblclick","onDoubleClick"),Sn("focusin","onFocus"),Sn("focusout","onBlur"),Sn(pv,"onTransitionRun"),Sn(mv,"onTransitionStart"),Sn(gv,"onTransitionCancel"),Sn(sf,"onTransitionEnd"),vs("onMouseEnter",["mouseout","mouseover"]),vs("onMouseLeave",["mouseout","mouseover"]),vs("onPointerEnter",["pointerout","pointerover"]),vs("onPointerLeave",["pointerout","pointerover"]),Ui("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ui("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ui("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ui("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ui("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ui("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ra));function xm(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],f=c.event;c=c.listeners;e:{var y=void 0;if(i)for(var S=c.length-1;0<=S;S--){var E=c[S],D=E.instance,U=E.currentTarget;if(E=E.listener,D!==y&&f.isPropagationStopped())break e;y=E,f.currentTarget=U;try{y(f)}catch(Y){Po(Y)}f.currentTarget=null,y=D}else for(S=0;S<c.length;S++){if(E=c[S],D=E.instance,U=E.currentTarget,E=E.listener,D!==y&&f.isPropagationStopped())break e;y=E,f.currentTarget=U;try{y(f)}catch(Y){Po(Y)}f.currentTarget=null,y=D}}}}function Te(n,i){var a=i[$l];a===void 0&&(a=i[$l]=new Set);var c=n+"__bubble";a.has(c)||(wm(i,n,2,!1),a.add(c))}function ju(n,i,a){var c=0;i&&(c|=4),wm(a,n,c,i)}var Xo="_reactListening"+Math.random().toString(36).slice(2);function Bu(n){if(!n[Xo]){n[Xo]=!0,gh.forEach(function(a){a!=="selectionchange"&&(Jv.has(a)||ju(a,!1,n),ju(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Xo]||(i[Xo]=!0,ju("selectionchange",!1,i))}}function wm(n,i,a,c){switch(Wm(i)){case 2:var f=EA;break;case 8:f=TA;break;default:f=Ju}a=f.bind(null,i,a,n),f=void 0,!ac||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function Fu(n,i,a,c,f){var y=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var S=c.tag;if(S===3||S===4){var E=c.stateNode.containerInfo;if(E===f)break;if(S===4)for(S=c.return;S!==null;){var D=S.tag;if((D===3||D===4)&&S.stateNode.containerInfo===f)return;S=S.return}for(;E!==null;){if(S=gs(E),S===null)return;if(D=S.tag,D===5||D===6||D===26||D===27){c=y=S;continue e}E=E.parentNode}}c=c.return}Mh(function(){var U=y,Y=sc(a),$=[];e:{var H=rf.get(n);if(H!==void 0){var z=ao,ge=n;switch(n){case"keypress":if(so(a)===0)break e;case"keydown":case"keyup":z=Yb;break;case"focusin":ge="focus",z=uc;break;case"focusout":ge="blur",z=uc;break;case"beforeblur":case"afterblur":z=uc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=Ph;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=Ob;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=$b;break;case ef:case tf:case nf:z=jb;break;case sf:z=Qb;break;case"scroll":case"scrollend":z=Lb;break;case"wheel":z=Zb;break;case"copy":case"cut":case"paste":z=Fb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=Nh;break;case"toggle":case"beforetoggle":z=tv}var fe=(i&4)!==0,Fe=!fe&&(n==="scroll"||n==="scrollend"),I=fe?H!==null?H+"Capture":null:H;fe=[];for(var L=U,B;L!==null;){var X=L;if(B=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||B===null||I===null||(X=wr(L,I),X!=null&&fe.push(aa(L,X,B))),Fe)break;L=L.return}0<fe.length&&(H=new z(H,ge,null,a,Y),$.push({event:H,listeners:fe}))}}if((i&7)===0){e:{if(H=n==="mouseover"||n==="pointerover",z=n==="mouseout"||n==="pointerout",H&&a!==ic&&(ge=a.relatedTarget||a.fromElement)&&(gs(ge)||ge[ms]))break e;if((z||H)&&(H=Y.window===Y?Y:(H=Y.ownerDocument)?H.defaultView||H.parentWindow:window,z?(ge=a.relatedTarget||a.toElement,z=U,ge=ge?gs(ge):null,ge!==null&&(Fe=o(ge),fe=ge.tag,ge!==Fe||fe!==5&&fe!==27&&fe!==6)&&(ge=null)):(z=null,ge=U),z!==ge)){if(fe=Ph,X="onMouseLeave",I="onMouseEnter",L="mouse",(n==="pointerout"||n==="pointerover")&&(fe=Nh,X="onPointerLeave",I="onPointerEnter",L="pointer"),Fe=z==null?H:xr(z),B=ge==null?H:xr(ge),H=new fe(X,L+"leave",z,a,Y),H.target=Fe,H.relatedTarget=B,X=null,gs(Y)===U&&(fe=new fe(I,L+"enter",ge,a,Y),fe.target=B,fe.relatedTarget=Fe,X=fe),Fe=X,z&&ge)t:{for(fe=z,I=ge,L=0,B=fe;B;B=Ks(B))L++;for(B=0,X=I;X;X=Ks(X))B++;for(;0<L-B;)fe=Ks(fe),L--;for(;0<B-L;)I=Ks(I),B--;for(;L--;){if(fe===I||I!==null&&fe===I.alternate)break t;fe=Ks(fe),I=Ks(I)}fe=null}else fe=null;z!==null&&Em($,H,z,fe,!1),ge!==null&&Fe!==null&&Em($,Fe,ge,fe,!0)}}e:{if(H=U?xr(U):window,z=H.nodeName&&H.nodeName.toLowerCase(),z==="select"||z==="input"&&H.type==="file")var se=Gh;else if(Hh(H))if(qh)se=dv;else{se=cv;var we=lv}else z=H.nodeName,!z||z.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?U&&nc(U.elementType)&&(se=Gh):se=uv;if(se&&(se=se(n,U))){zh($,se,a,Y);break e}we&&we(n,H,U),n==="focusout"&&U&&H.type==="number"&&U.memoizedProps.value!=null&&tc(H,"number",H.value)}switch(we=U?xr(U):window,n){case"focusin":(Hh(we)||we.contentEditable==="true")&&(Ts=we,gc=U,Lr=null);break;case"focusout":Lr=gc=Ts=null;break;case"mousedown":yc=!0;break;case"contextmenu":case"mouseup":case"dragend":yc=!1,Jh($,a,Y);break;case"selectionchange":if(fv)break;case"keydown":case"keyup":Jh($,a,Y)}var oe;if(hc)e:{switch(n){case"compositionstart":var pe="onCompositionStart";break e;case"compositionend":pe="onCompositionEnd";break e;case"compositionupdate":pe="onCompositionUpdate";break e}pe=void 0}else Es?Fh(n,a)&&(pe="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(pe="onCompositionStart");pe&&(Ih&&a.locale!=="ko"&&(Es||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&Es&&(oe=kh()):(hi=Y,oc="value"in hi?hi.value:hi.textContent,Es=!0)),we=Wo(U,pe),0<we.length&&(pe=new Oh(pe,n,null,a,Y),$.push({event:pe,listeners:we}),oe?pe.data=oe:(oe=Uh(a),oe!==null&&(pe.data=oe)))),(oe=iv?sv(n,a):rv(n,a))&&(pe=Wo(U,"onBeforeInput"),0<pe.length&&(we=new Oh("onBeforeInput","beforeinput",null,a,Y),$.push({event:we,listeners:pe}),we.data=oe)),$v($,n,U,a,Y)}xm($,i)})}function aa(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Wo(n,i){for(var a=i+"Capture",c=[];n!==null;){var f=n,y=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||y===null||(f=wr(n,a),f!=null&&c.unshift(aa(n,f,y)),f=wr(n,i),f!=null&&c.push(aa(n,f,y))),n.tag===3)return c;n=n.return}return[]}function Ks(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Em(n,i,a,c,f){for(var y=i._reactName,S=[];a!==null&&a!==c;){var E=a,D=E.alternate,U=E.stateNode;if(E=E.tag,D!==null&&D===c)break;E!==5&&E!==26&&E!==27||U===null||(D=U,f?(U=wr(a,y),U!=null&&S.unshift(aa(a,U,D))):f||(U=wr(a,y),U!=null&&S.push(aa(a,U,D)))),a=a.return}S.length!==0&&n.push({event:i,listeners:S})}var Zv=/\r\n?/g,eA=/\u0000|\uFFFD/g;function Tm(n){return(typeof n=="string"?n:""+n).replace(Zv,`
`).replace(eA,"")}function _m(n,i){return i=Tm(i),Tm(n)===i}function $o(){}function Be(n,i,a,c,f,y){switch(a){case"children":typeof c=="string"?i==="body"||i==="textarea"&&c===""||Cs(n,c):(typeof c=="number"||typeof c=="bigint")&&i!=="body"&&Cs(n,""+c);break;case"className":Za(n,"class",c);break;case"tabIndex":Za(n,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":Za(n,a,c);break;case"style":Rh(n,c,y);break;case"data":if(i!=="object"){Za(n,"data",c);break}case"src":case"href":if(c===""&&(i!=="a"||a!=="href")){n.removeAttribute(a);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(a);break}c=no(""+c),n.setAttribute(a,c);break;case"action":case"formAction":if(typeof c=="function"){n.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof y=="function"&&(a==="formAction"?(i!=="input"&&Be(n,i,"name",f.name,f,null),Be(n,i,"formEncType",f.formEncType,f,null),Be(n,i,"formMethod",f.formMethod,f,null),Be(n,i,"formTarget",f.formTarget,f,null)):(Be(n,i,"encType",f.encType,f,null),Be(n,i,"method",f.method,f,null),Be(n,i,"target",f.target,f,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(a);break}c=no(""+c),n.setAttribute(a,c);break;case"onClick":c!=null&&(n.onclick=$o);break;case"onScroll":c!=null&&Te("scroll",n);break;case"onScrollEnd":c!=null&&Te("scrollend",n);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(s(61));if(a=c.__html,a!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=a}}break;case"multiple":n.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":n.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){n.removeAttribute("xlink:href");break}a=no(""+c),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(a,""+c):n.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(a,""):n.removeAttribute(a);break;case"capture":case"download":c===!0?n.setAttribute(a,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(a,c):n.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?n.setAttribute(a,c):n.removeAttribute(a);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?n.removeAttribute(a):n.setAttribute(a,c);break;case"popover":Te("beforetoggle",n),Te("toggle",n),Ja(n,"popover",c);break;case"xlinkActuate":Gn(n,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":Gn(n,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":Gn(n,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":Gn(n,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":Gn(n,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":Gn(n,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":Gn(n,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":Gn(n,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":Gn(n,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":Ja(n,"is",c);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Mb.get(a)||a,Ja(n,a,c))}}function Uu(n,i,a,c,f,y){switch(a){case"style":Rh(n,c,y);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(s(61));if(a=c.__html,a!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=a}}break;case"children":typeof c=="string"?Cs(n,c):(typeof c=="number"||typeof c=="bigint")&&Cs(n,""+c);break;case"onScroll":c!=null&&Te("scroll",n);break;case"onScrollEnd":c!=null&&Te("scrollend",n);break;case"onClick":c!=null&&(n.onclick=$o);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!yh.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(f=a.endsWith("Capture"),i=a.slice(2,f?a.length-7:void 0),y=n[Ht]||null,y=y!=null?y[a]:null,typeof y=="function"&&n.removeEventListener(i,y,f),typeof c=="function")){typeof y!="function"&&y!==null&&(a in n?n[a]=null:n.hasAttribute(a)&&n.removeAttribute(a)),n.addEventListener(i,c,f);break e}a in n?n[a]=c:c===!0?n.setAttribute(a,""):Ja(n,a,c)}}}function Rt(n,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",n),Te("load",n);var c=!1,f=!1,y;for(y in a)if(a.hasOwnProperty(y)){var S=a[y];if(S!=null)switch(y){case"src":c=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Be(n,i,y,S,a,null)}}f&&Be(n,i,"srcSet",a.srcSet,a,null),c&&Be(n,i,"src",a.src,a,null);return;case"input":Te("invalid",n);var E=y=S=f=null,D=null,U=null;for(c in a)if(a.hasOwnProperty(c)){var Y=a[c];if(Y!=null)switch(c){case"name":f=Y;break;case"type":S=Y;break;case"checked":D=Y;break;case"defaultChecked":U=Y;break;case"value":y=Y;break;case"defaultValue":E=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,i));break;default:Be(n,i,c,Y,a,null)}}wh(n,y,E,D,U,S,f,!1),eo(n);return;case"select":Te("invalid",n),c=S=y=null;for(f in a)if(a.hasOwnProperty(f)&&(E=a[f],E!=null))switch(f){case"value":y=E;break;case"defaultValue":S=E;break;case"multiple":c=E;default:Be(n,i,f,E,a,null)}i=y,a=S,n.multiple=!!c,i!=null?Ss(n,!!c,i,!1):a!=null&&Ss(n,!!c,a,!0);return;case"textarea":Te("invalid",n),y=f=c=null;for(S in a)if(a.hasOwnProperty(S)&&(E=a[S],E!=null))switch(S){case"value":c=E;break;case"defaultValue":f=E;break;case"children":y=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Be(n,i,S,E,a,null)}Th(n,c,f,y),eo(n);return;case"option":for(D in a)if(a.hasOwnProperty(D)&&(c=a[D],c!=null))switch(D){case"selected":n.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:Be(n,i,D,c,a,null)}return;case"dialog":Te("beforetoggle",n),Te("toggle",n),Te("cancel",n),Te("close",n);break;case"iframe":case"object":Te("load",n);break;case"video":case"audio":for(c=0;c<ra.length;c++)Te(ra[c],n);break;case"image":Te("error",n),Te("load",n);break;case"details":Te("toggle",n);break;case"embed":case"source":case"link":Te("error",n),Te("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(U in a)if(a.hasOwnProperty(U)&&(c=a[U],c!=null))switch(U){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Be(n,i,U,c,a,null)}return;default:if(nc(i)){for(Y in a)a.hasOwnProperty(Y)&&(c=a[Y],c!==void 0&&Uu(n,i,Y,c,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(c=a[E],c!=null&&Be(n,i,E,c,a,null))}function tA(n,i,a,c){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,y=null,S=null,E=null,D=null,U=null,Y=null;for(z in a){var $=a[z];if(a.hasOwnProperty(z)&&$!=null)switch(z){case"checked":break;case"value":break;case"defaultValue":D=$;default:c.hasOwnProperty(z)||Be(n,i,z,null,c,$)}}for(var H in c){var z=c[H];if($=a[H],c.hasOwnProperty(H)&&(z!=null||$!=null))switch(H){case"type":y=z;break;case"name":f=z;break;case"checked":U=z;break;case"defaultChecked":Y=z;break;case"value":S=z;break;case"defaultValue":E=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,i));break;default:z!==$&&Be(n,i,H,z,c,$)}}ec(n,S,E,D,U,Y,y,f);return;case"select":z=S=E=H=null;for(y in a)if(D=a[y],a.hasOwnProperty(y)&&D!=null)switch(y){case"value":break;case"multiple":z=D;default:c.hasOwnProperty(y)||Be(n,i,y,null,c,D)}for(f in c)if(y=c[f],D=a[f],c.hasOwnProperty(f)&&(y!=null||D!=null))switch(f){case"value":H=y;break;case"defaultValue":E=y;break;case"multiple":S=y;default:y!==D&&Be(n,i,f,y,c,D)}i=E,a=S,c=z,H!=null?Ss(n,!!a,H,!1):!!c!=!!a&&(i!=null?Ss(n,!!a,i,!0):Ss(n,!!a,a?[]:"",!1));return;case"textarea":z=H=null;for(E in a)if(f=a[E],a.hasOwnProperty(E)&&f!=null&&!c.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Be(n,i,E,null,c,f)}for(S in c)if(f=c[S],y=a[S],c.hasOwnProperty(S)&&(f!=null||y!=null))switch(S){case"value":H=f;break;case"defaultValue":z=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==y&&Be(n,i,S,f,c,y)}Eh(n,H,z);return;case"option":for(var ge in a)if(H=a[ge],a.hasOwnProperty(ge)&&H!=null&&!c.hasOwnProperty(ge))switch(ge){case"selected":n.selected=!1;break;default:Be(n,i,ge,null,c,H)}for(D in c)if(H=c[D],z=a[D],c.hasOwnProperty(D)&&H!==z&&(H!=null||z!=null))switch(D){case"selected":n.selected=H&&typeof H!="function"&&typeof H!="symbol";break;default:Be(n,i,D,H,c,z)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var fe in a)H=a[fe],a.hasOwnProperty(fe)&&H!=null&&!c.hasOwnProperty(fe)&&Be(n,i,fe,null,c,H);for(U in c)if(H=c[U],z=a[U],c.hasOwnProperty(U)&&H!==z&&(H!=null||z!=null))switch(U){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,i));break;default:Be(n,i,U,H,c,z)}return;default:if(nc(i)){for(var Fe in a)H=a[Fe],a.hasOwnProperty(Fe)&&H!==void 0&&!c.hasOwnProperty(Fe)&&Uu(n,i,Fe,void 0,c,H);for(Y in c)H=c[Y],z=a[Y],!c.hasOwnProperty(Y)||H===z||H===void 0&&z===void 0||Uu(n,i,Y,H,c,z);return}}for(var I in a)H=a[I],a.hasOwnProperty(I)&&H!=null&&!c.hasOwnProperty(I)&&Be(n,i,I,null,c,H);for($ in c)H=c[$],z=a[$],!c.hasOwnProperty($)||H===z||H==null&&z==null||Be(n,i,$,H,c,z)}var Hu=null,zu=null;function Ko(n){return n.nodeType===9?n:n.ownerDocument}function Rm(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Dm(n,i){if(n===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&i==="foreignObject"?0:n}function Gu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var qu=null;function nA(){var n=window.event;return n&&n.type==="popstate"?n===qu?!1:(qu=n,!0):(qu=null,!1)}var Mm=typeof setTimeout=="function"?setTimeout:void 0,iA=typeof clearTimeout=="function"?clearTimeout:void 0,km=typeof Promise=="function"?Promise:void 0,sA=typeof queueMicrotask=="function"?queueMicrotask:typeof km<"u"?function(n){return km.resolve(null).then(n).catch(rA)}:Mm;function rA(n){setTimeout(function(){throw n})}function Ri(n){return n==="head"}function Lm(n,i){var a=i,c=0,f=0;do{var y=a.nextSibling;if(n.removeChild(a),y&&y.nodeType===8)if(a=y.data,a==="/$"){if(0<c&&8>c){a=c;var S=n.ownerDocument;if(a&1&&oa(S.documentElement),a&2&&oa(S.body),a&4)for(a=S.head,oa(a),S=a.firstChild;S;){var E=S.nextSibling,D=S.nodeName;S[Cr]||D==="SCRIPT"||D==="STYLE"||D==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=E}}if(f===0){n.removeChild(y),ma(i);return}f--}else a==="$"||a==="$?"||a==="$!"?f++:c=a.charCodeAt(0)-48;else c=0;a=y}while(a);ma(i)}function Vu(n){var i=n.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Vu(a),Kl(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}n.removeChild(a)}}function aA(n,i,a,c){for(;n.nodeType===1;){var f=a;if(n.nodeName.toLowerCase()!==i.toLowerCase()){if(!c&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(c){if(!n[Cr])switch(i){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(y=n.getAttribute("rel"),y==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(y!==f.rel||n.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||n.getAttribute("title")!==(f.title==null?null:f.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(y=n.getAttribute("src"),(y!==(f.src==null?null:f.src)||n.getAttribute("type")!==(f.type==null?null:f.type)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&y&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(i==="input"&&n.type==="hidden"){var y=f.name==null?null:""+f.name;if(f.type==="hidden"&&n.getAttribute("name")===y)return n}else return n;if(n=xn(n.nextSibling),n===null)break}return null}function oA(n,i,a){if(i==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!a||(n=xn(n.nextSibling),n===null))return null;return n}function Yu(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function lA(n,i){var a=n.ownerDocument;if(n.data!=="$?"||a.readyState==="complete")i();else{var c=function(){i(),a.removeEventListener("DOMContentLoaded",c)};a.addEventListener("DOMContentLoaded",c),n._reactRetry=c}}function xn(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return n}var Xu=null;function Pm(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}function Om(n,i,a){switch(i=Ko(a),n){case"html":if(n=i.documentElement,!n)throw Error(s(452));return n;case"head":if(n=i.head,!n)throw Error(s(453));return n;case"body":if(n=i.body,!n)throw Error(s(454));return n;default:throw Error(s(451))}}function oa(n){for(var i=n.attributes;i.length;)n.removeAttributeNode(i[0]);Kl(n)}var yn=new Map,Nm=new Set;function Qo(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var ii=G.d;G.d={f:cA,r:uA,D:dA,C:hA,L:fA,m:pA,X:gA,S:mA,M:yA};function cA(){var n=ii.f(),i=zo();return n||i}function uA(n){var i=ys(n);i!==null&&i.tag===5&&i.type==="form"?tp(i):ii.r(n)}var Qs=typeof document>"u"?null:document;function Im(n,i,a){var c=Qs;if(c&&typeof i=="string"&&i){var f=un(i);f='link[rel="'+n+'"][href="'+f+'"]',typeof a=="string"&&(f+='[crossorigin="'+a+'"]'),Nm.has(f)||(Nm.add(f),n={rel:n,crossOrigin:a,href:i},c.querySelector(f)===null&&(i=c.createElement("link"),Rt(i,"link",n),bt(i),c.head.appendChild(i)))}}function dA(n){ii.D(n),Im("dns-prefetch",n,null)}function hA(n,i){ii.C(n,i),Im("preconnect",n,i)}function fA(n,i,a){ii.L(n,i,a);var c=Qs;if(c&&n&&i){var f='link[rel="preload"][as="'+un(i)+'"]';i==="image"&&a&&a.imageSrcSet?(f+='[imagesrcset="'+un(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(f+='[imagesizes="'+un(a.imageSizes)+'"]')):f+='[href="'+un(n)+'"]';var y=f;switch(i){case"style":y=Js(n);break;case"script":y=Zs(n)}yn.has(y)||(n=m({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:n,as:i},a),yn.set(y,n),c.querySelector(f)!==null||i==="style"&&c.querySelector(la(y))||i==="script"&&c.querySelector(ca(y))||(i=c.createElement("link"),Rt(i,"link",n),bt(i),c.head.appendChild(i)))}}function pA(n,i){ii.m(n,i);var a=Qs;if(a&&n){var c=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+un(c)+'"][href="'+un(n)+'"]',y=f;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":y=Zs(n)}if(!yn.has(y)&&(n=m({rel:"modulepreload",href:n},i),yn.set(y,n),a.querySelector(f)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ca(y)))return}c=a.createElement("link"),Rt(c,"link",n),bt(c),a.head.appendChild(c)}}}function mA(n,i,a){ii.S(n,i,a);var c=Qs;if(c&&n){var f=bs(c).hoistableStyles,y=Js(n);i=i||"default";var S=f.get(y);if(!S){var E={loading:0,preload:null};if(S=c.querySelector(la(y)))E.loading=5;else{n=m({rel:"stylesheet",href:n,"data-precedence":i},a),(a=yn.get(y))&&Wu(n,a);var D=S=c.createElement("link");bt(D),Rt(D,"link",n),D._p=new Promise(function(U,Y){D.onload=U,D.onerror=Y}),D.addEventListener("load",function(){E.loading|=1}),D.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Jo(S,i,c)}S={type:"stylesheet",instance:S,count:1,state:E},f.set(y,S)}}}function gA(n,i){ii.X(n,i);var a=Qs;if(a&&n){var c=bs(a).hoistableScripts,f=Zs(n),y=c.get(f);y||(y=a.querySelector(ca(f)),y||(n=m({src:n,async:!0},i),(i=yn.get(f))&&$u(n,i),y=a.createElement("script"),bt(y),Rt(y,"link",n),a.head.appendChild(y)),y={type:"script",instance:y,count:1,state:null},c.set(f,y))}}function yA(n,i){ii.M(n,i);var a=Qs;if(a&&n){var c=bs(a).hoistableScripts,f=Zs(n),y=c.get(f);y||(y=a.querySelector(ca(f)),y||(n=m({src:n,async:!0,type:"module"},i),(i=yn.get(f))&&$u(n,i),y=a.createElement("script"),bt(y),Rt(y,"link",n),a.head.appendChild(y)),y={type:"script",instance:y,count:1,state:null},c.set(f,y))}}function jm(n,i,a,c){var f=(f=re.current)?Qo(f):null;if(!f)throw Error(s(446));switch(n){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Js(a.href),a=bs(f).hoistableStyles,c=a.get(i),c||(c={type:"style",instance:null,count:0,state:null},a.set(i,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){n=Js(a.href);var y=bs(f).hoistableStyles,S=y.get(n);if(S||(f=f.ownerDocument||f,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},y.set(n,S),(y=f.querySelector(la(n)))&&!y._p&&(S.instance=y,S.state.loading=5),yn.has(n)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},yn.set(n,a),y||bA(f,n,a,S.state))),i&&c===null)throw Error(s(528,""));return S}if(i&&c!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Zs(a),a=bs(f).hoistableScripts,c=a.get(i),c||(c={type:"script",instance:null,count:0,state:null},a.set(i,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,n))}}function Js(n){return'href="'+un(n)+'"'}function la(n){return'link[rel="stylesheet"]['+n+"]"}function Bm(n){return m({},n,{"data-precedence":n.precedence,precedence:null})}function bA(n,i,a,c){n.querySelector('link[rel="preload"][as="style"]['+i+"]")?c.loading=1:(i=n.createElement("link"),c.preload=i,i.addEventListener("load",function(){return c.loading|=1}),i.addEventListener("error",function(){return c.loading|=2}),Rt(i,"link",a),bt(i),n.head.appendChild(i))}function Zs(n){return'[src="'+un(n)+'"]'}function ca(n){return"script[async]"+n}function Fm(n,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var c=n.querySelector('style[data-href~="'+un(a.href)+'"]');if(c)return i.instance=c,bt(c),c;var f=m({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return c=(n.ownerDocument||n).createElement("style"),bt(c),Rt(c,"style",f),Jo(c,a.precedence,n),i.instance=c;case"stylesheet":f=Js(a.href);var y=n.querySelector(la(f));if(y)return i.state.loading|=4,i.instance=y,bt(y),y;c=Bm(a),(f=yn.get(f))&&Wu(c,f),y=(n.ownerDocument||n).createElement("link"),bt(y);var S=y;return S._p=new Promise(function(E,D){S.onload=E,S.onerror=D}),Rt(y,"link",c),i.state.loading|=4,Jo(y,a.precedence,n),i.instance=y;case"script":return y=Zs(a.src),(f=n.querySelector(ca(y)))?(i.instance=f,bt(f),f):(c=a,(f=yn.get(y))&&(c=m({},a),$u(c,f)),n=n.ownerDocument||n,f=n.createElement("script"),bt(f),Rt(f,"link",c),n.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(c=i.instance,i.state.loading|=4,Jo(c,a.precedence,n));return i.instance}function Jo(n,i,a){for(var c=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=c.length?c[c.length-1]:null,y=f,S=0;S<c.length;S++){var E=c[S];if(E.dataset.precedence===i)y=E;else if(y!==f)break}y?y.parentNode.insertBefore(n,y.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(n,i.firstChild))}function Wu(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.title==null&&(n.title=i.title)}function $u(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.integrity==null&&(n.integrity=i.integrity)}var Zo=null;function Um(n,i,a){if(Zo===null){var c=new Map,f=Zo=new Map;f.set(a,c)}else f=Zo,c=f.get(a),c||(c=new Map,f.set(a,c));if(c.has(n))return c;for(c.set(n,null),a=a.getElementsByTagName(n),f=0;f<a.length;f++){var y=a[f];if(!(y[Cr]||y[kt]||n==="link"&&y.getAttribute("rel")==="stylesheet")&&y.namespaceURI!=="http://www.w3.org/2000/svg"){var S=y.getAttribute(i)||"";S=n+S;var E=c.get(S);E?E.push(y):c.set(S,[y])}}return c}function Hm(n,i,a){n=n.ownerDocument||n,n.head.insertBefore(a,i==="title"?n.querySelector("head > title"):null)}function vA(n,i,a){if(a===1||i.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return n=i.disabled,typeof i.precedence=="string"&&n==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function zm(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var ua=null;function AA(){}function SA(n,i,a){if(ua===null)throw Error(s(475));var c=ua;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var f=Js(a.href),y=n.querySelector(la(f));if(y){n=y._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(c.count++,c=el.bind(c),n.then(c,c)),i.state.loading|=4,i.instance=y,bt(y);return}y=n.ownerDocument||n,a=Bm(a),(f=yn.get(f))&&Wu(a,f),y=y.createElement("link"),bt(y);var S=y;S._p=new Promise(function(E,D){S.onload=E,S.onerror=D}),Rt(y,"link",a),i.instance=y}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(i,n),(n=i.state.preload)&&(i.state.loading&3)===0&&(c.count++,i=el.bind(c),n.addEventListener("load",i),n.addEventListener("error",i))}}function CA(){if(ua===null)throw Error(s(475));var n=ua;return n.stylesheets&&n.count===0&&Ku(n,n.stylesheets),0<n.count?function(i){var a=setTimeout(function(){if(n.stylesheets&&Ku(n,n.stylesheets),n.unsuspend){var c=n.unsuspend;n.unsuspend=null,c()}},6e4);return n.unsuspend=i,function(){n.unsuspend=null,clearTimeout(a)}}:null}function el(){if(this.count--,this.count===0){if(this.stylesheets)Ku(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var tl=null;function Ku(n,i){n.stylesheets=null,n.unsuspend!==null&&(n.count++,tl=new Map,i.forEach(xA,n),tl=null,el.call(n))}function xA(n,i){if(!(i.state.loading&4)){var a=tl.get(n);if(a)var c=a.get(null);else{a=new Map,tl.set(n,a);for(var f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),y=0;y<f.length;y++){var S=f[y];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),c=S)}c&&a.set(null,c)}f=i.instance,S=f.getAttribute("data-precedence"),y=a.get(S)||c,y===c&&a.set(null,f),a.set(S,f),this.count++,c=el.bind(this),f.addEventListener("load",c),f.addEventListener("error",c),y?y.parentNode.insertBefore(f,y.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(f,n.firstChild)),i.state.loading|=4}}var da={$$typeof:R,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function wA(n,i,a,c,f,y,S,E){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Yl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yl(0),this.hiddenUpdates=Yl(null),this.identifierPrefix=c,this.onUncaughtError=f,this.onCaughtError=y,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function Gm(n,i,a,c,f,y,S,E,D,U,Y,$){return n=new wA(n,i,a,S,E,D,U,$),i=1,y===!0&&(i|=24),y=Jt(3,null,null,i),n.current=y,y.stateNode=n,i=kc(),i.refCount++,n.pooledCache=i,i.refCount++,y.memoizedState={element:c,isDehydrated:a,cache:i},Nc(y),n}function qm(n){return n?(n=Ms,n):Ms}function Vm(n,i,a,c,f,y){f=qm(f),c.context===null?c.context=f:c.pendingContext=f,c=mi(i),c.payload={element:a},y=y===void 0?null:y,y!==null&&(c.callback=y),a=gi(n,c,i),a!==null&&(sn(a,n,i),Hr(a,n,i))}function Ym(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Qu(n,i){Ym(n,i),(n=n.alternate)&&Ym(n,i)}function Xm(n){if(n.tag===13){var i=Ds(n,67108864);i!==null&&sn(i,n,67108864),Qu(n,67108864)}}var nl=!0;function EA(n,i,a,c){var f=N.T;N.T=null;var y=G.p;try{G.p=2,Ju(n,i,a,c)}finally{G.p=y,N.T=f}}function TA(n,i,a,c){var f=N.T;N.T=null;var y=G.p;try{G.p=8,Ju(n,i,a,c)}finally{G.p=y,N.T=f}}function Ju(n,i,a,c){if(nl){var f=Zu(c);if(f===null)Fu(n,i,c,il,a),$m(n,c);else if(RA(f,n,i,a,c))c.stopPropagation();else if($m(n,c),i&4&&-1<_A.indexOf(n)){for(;f!==null;){var y=ys(f);if(y!==null)switch(y.tag){case 3:if(y=y.stateNode,y.current.memoizedState.isDehydrated){var S=Fi(y.pendingLanes);if(S!==0){var E=y;for(E.pendingLanes|=2,E.entangledLanes|=2;S;){var D=1<<31-st(S);E.entanglements[1]|=D,S&=~D}Ln(y),(Oe&6)===0&&(Uo=Et()+500,sa(0))}}break;case 13:E=Ds(y,2),E!==null&&sn(E,y,2),zo(),Qu(y,2)}if(y=Zu(c),y===null&&Fu(n,i,c,il,a),y===f)break;f=y}f!==null&&c.stopPropagation()}else Fu(n,i,c,null,a)}}function Zu(n){return n=sc(n),ed(n)}var il=null;function ed(n){if(il=null,n=gs(n),n!==null){var i=o(n);if(i===null)n=null;else{var a=i.tag;if(a===13){if(n=l(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}return il=n,null}function Wm(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ji()){case ps:return 2;case Xa:return 8;case zn:case Gl:return 32;case Wa:return 268435456;default:return 32}default:return 32}}var td=!1,Di=null,Mi=null,ki=null,ha=new Map,fa=new Map,Li=[],_A="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $m(n,i){switch(n){case"focusin":case"focusout":Di=null;break;case"dragenter":case"dragleave":Mi=null;break;case"mouseover":case"mouseout":ki=null;break;case"pointerover":case"pointerout":ha.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":fa.delete(i.pointerId)}}function pa(n,i,a,c,f,y){return n===null||n.nativeEvent!==y?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:y,targetContainers:[f]},i!==null&&(i=ys(i),i!==null&&Xm(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function RA(n,i,a,c,f){switch(i){case"focusin":return Di=pa(Di,n,i,a,c,f),!0;case"dragenter":return Mi=pa(Mi,n,i,a,c,f),!0;case"mouseover":return ki=pa(ki,n,i,a,c,f),!0;case"pointerover":var y=f.pointerId;return ha.set(y,pa(ha.get(y)||null,n,i,a,c,f)),!0;case"gotpointercapture":return y=f.pointerId,fa.set(y,pa(fa.get(y)||null,n,i,a,c,f)),!0}return!1}function Km(n){var i=gs(n.target);if(i!==null){var a=o(i);if(a!==null){if(i=a.tag,i===13){if(i=l(a),i!==null){n.blockedOn=i,Sb(n.priority,function(){if(a.tag===13){var c=nn();c=Xl(c);var f=Ds(a,c);f!==null&&sn(f,a,c),Qu(a,c)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function sl(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Zu(n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);ic=c,a.target.dispatchEvent(c),ic=null}else return i=ys(a),i!==null&&Xm(i),n.blockedOn=a,!1;i.shift()}return!0}function Qm(n,i,a){sl(n)&&a.delete(i)}function DA(){td=!1,Di!==null&&sl(Di)&&(Di=null),Mi!==null&&sl(Mi)&&(Mi=null),ki!==null&&sl(ki)&&(ki=null),ha.forEach(Qm),fa.forEach(Qm)}function rl(n,i){n.blockedOn===i&&(n.blockedOn=null,td||(td=!0,d.unstable_scheduleCallback(d.unstable_NormalPriority,DA)))}var al=null;function Jm(n){al!==n&&(al=n,d.unstable_scheduleCallback(d.unstable_NormalPriority,function(){al===n&&(al=null);for(var i=0;i<n.length;i+=3){var a=n[i],c=n[i+1],f=n[i+2];if(typeof c!="function"){if(ed(c||a)===null)continue;break}var y=ys(a);y!==null&&(n.splice(i,3),i-=3,eu(y,{pending:!0,data:f,method:a.method,action:c},c,f))}}))}function ma(n){function i(D){return rl(D,n)}Di!==null&&rl(Di,n),Mi!==null&&rl(Mi,n),ki!==null&&rl(ki,n),ha.forEach(i),fa.forEach(i);for(var a=0;a<Li.length;a++){var c=Li[a];c.blockedOn===n&&(c.blockedOn=null)}for(;0<Li.length&&(a=Li[0],a.blockedOn===null);)Km(a),a.blockedOn===null&&Li.shift();if(a=(n.ownerDocument||n).$$reactFormReplay,a!=null)for(c=0;c<a.length;c+=3){var f=a[c],y=a[c+1],S=f[Ht]||null;if(typeof y=="function")S||Jm(a);else if(S){var E=null;if(y&&y.hasAttribute("formAction")){if(f=y,S=y[Ht]||null)E=S.formAction;else if(ed(f)!==null)continue}else E=S.action;typeof E=="function"?a[c+1]=E:(a.splice(c,3),c-=3),Jm(a)}}}function nd(n){this._internalRoot=n}ol.prototype.render=nd.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,c=nn();Vm(a,c,n,i,null,null)},ol.prototype.unmount=nd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Vm(n.current,2,null,n,null,null),zo(),i[ms]=null}};function ol(n){this._internalRoot=n}ol.prototype.unstable_scheduleHydration=function(n){if(n){var i=ph();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Li.length&&i!==0&&i<Li[a].priority;a++);Li.splice(a,0,n),a===0&&Km(n)}};var Zm=e.version;if(Zm!=="19.1.1")throw Error(s(527,Zm,"19.1.1"));G.findDOMNode=function(n){var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(s(188)):(n=Object.keys(n).join(","),Error(s(268,n)));return n=h(i),n=n!==null?p(n):null,n=n===null?null:n.stateNode,n};var MA={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ll.isDisabled&&ll.supportsFiber)try{Bi=ll.inject(MA),it=ll}catch{}}return ya.createRoot=function(n,i){if(!r(n))throw Error(s(299));var a=!1,c="",f=mp,y=gp,S=yp,E=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(y=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(E=i.unstable_transitionCallbacks)),i=Gm(n,1,!1,null,null,a,c,f,y,S,E,null),n[ms]=i.current,Bu(n),new nd(i)},ya.hydrateRoot=function(n,i,a){if(!r(n))throw Error(s(299));var c=!1,f="",y=mp,S=gp,E=yp,D=null,U=null;return a!=null&&(a.unstable_strictMode===!0&&(c=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onUncaughtError!==void 0&&(y=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(D=a.unstable_transitionCallbacks),a.formState!==void 0&&(U=a.formState)),i=Gm(n,1,!0,i,a??null,c,f,y,S,E,D,U),i.context=qm(null),a=i.current,c=nn(),c=Xl(c),f=mi(c),f.callback=null,gi(a,f,c),a=c,i.current.lanes=a,Sr(i,a),Ln(i),n[ms]=i.current,Bu(n),new ol(i)},ya.version="19.1.1",ya}var dg;function HA(){if(dg)return ad.exports;dg=1;function d(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d)}catch(e){console.error(e)}}return d(),ad.exports=UA(),ad.exports}var zA=HA();const GA="modulepreload",qA=function(d){return"/"+d},hg={},VA=function(e,t,s){let r=Promise.resolve();if(t&&t.length>0){let h=function(p){return Promise.all(p.map(m=>Promise.resolve(m).then(b=>({status:"fulfilled",value:b}),b=>({status:"rejected",reason:b}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),u=l?.nonce||l?.getAttribute("nonce");r=h(t.map(p=>{if(p=qA(p),p in hg)return;hg[p]=!0;const m=p.endsWith(".css"),b=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${b}`))return;const v=document.createElement("link");if(v.rel=m?"stylesheet":GA,m||(v.as="script"),v.crossOrigin="",v.href=p,u&&v.setAttribute("nonce",u),document.head.appendChild(v),m)return new Promise((A,x)=>{v.addEventListener("load",A),v.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${p}`)))})}))}function o(l){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=l,window.dispatchEvent(u),!u.defaultPrevented)throw l}return r.then(l=>{for(const u of l||[])u.status==="rejected"&&o(u.reason);return e().catch(o)})};var fg="popstate";function YA(d={}){function e(s,r){let{pathname:o,search:l,hash:u}=s.location;return Sd("",{pathname:o,search:l,hash:u},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function t(s,r){return typeof r=="string"?r:Ra(r)}return WA(e,t,null,d)}function Je(d,e){if(d===!1||d===null||typeof d>"u")throw new Error(e)}function En(d,e){if(!d){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function XA(){return Math.random().toString(36).substring(2,10)}function pg(d,e){return{usr:d.state,key:d.key,idx:e}}function Sd(d,e,t=null,s){return{pathname:typeof d=="string"?d:d.pathname,search:"",hash:"",...typeof e=="string"?pr(e):e,state:t,key:e&&e.key||s||XA()}}function Ra({pathname:d="/",search:e="",hash:t=""}){return e&&e!=="?"&&(d+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(d+=t.charAt(0)==="#"?t:"#"+t),d}function pr(d){let e={};if(d){let t=d.indexOf("#");t>=0&&(e.hash=d.substring(t),d=d.substring(0,t));let s=d.indexOf("?");s>=0&&(e.search=d.substring(s),d=d.substring(0,s)),d&&(e.pathname=d)}return e}function WA(d,e,t,s={}){let{window:r=document.defaultView,v5Compat:o=!1}=s,l=r.history,u="POP",h=null,p=m();p==null&&(p=0,l.replaceState({...l.state,idx:p},""));function m(){return(l.state||{idx:null}).idx}function b(){u="POP";let T=m(),w=T==null?null:T-p;p=T,h&&h({action:u,location:C.location,delta:w})}function v(T,w){u="PUSH";let _=Sd(C.location,T,w);p=m()+1;let R=pg(_,p),O=C.createHref(_);try{l.pushState(R,"",O)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;r.location.assign(O)}o&&h&&h({action:u,location:C.location,delta:1})}function A(T,w){u="REPLACE";let _=Sd(C.location,T,w);p=m();let R=pg(_,p),O=C.createHref(_);l.replaceState(R,"",O),o&&h&&h({action:u,location:C.location,delta:0})}function x(T){return $A(T)}let C={get action(){return u},get location(){return d(r,l)},listen(T){if(h)throw new Error("A history only accepts one active listener");return r.addEventListener(fg,b),h=T,()=>{r.removeEventListener(fg,b),h=null}},createHref(T){return e(r,T)},createURL:x,encodeLocation(T){let w=x(T);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:v,replace:A,go(T){return l.go(T)}};return C}function $A(d,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),Je(t,"No window.location.(origin|href) available to create URL");let s=typeof d=="string"?d:Ra(d);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=t+s),new URL(s,t)}function iy(d,e,t="/"){return KA(d,e,t,!1)}function KA(d,e,t,s){let r=typeof e=="string"?pr(e):e,o=oi(r.pathname||"/",t);if(o==null)return null;let l=sy(d);QA(l);let u=null;for(let h=0;u==null&&h<l.length;++h){let p=lS(o);u=aS(l[h],p,s)}return u}function sy(d,e=[],t=[],s="",r=!1){let o=(l,u,h=r,p)=>{let m={relativePath:p===void 0?l.path||"":p,caseSensitive:l.caseSensitive===!0,childrenIndex:u,route:l};if(m.relativePath.startsWith("/")){if(!m.relativePath.startsWith(s)&&h)return;Je(m.relativePath.startsWith(s),`Absolute route path "${m.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(s.length)}let b=ai([s,m.relativePath]),v=t.concat(m);l.children&&l.children.length>0&&(Je(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${b}".`),sy(l.children,e,v,b,h)),!(l.path==null&&!l.index)&&e.push({path:b,score:sS(b,l.index),routesMeta:v})};return d.forEach((l,u)=>{if(l.path===""||!l.path?.includes("?"))o(l,u);else for(let h of ry(l.path))o(l,u,!0,h)}),e}function ry(d){let e=d.split("/");if(e.length===0)return[];let[t,...s]=e,r=t.endsWith("?"),o=t.replace(/\?$/,"");if(s.length===0)return r?[o,""]:[o];let l=ry(s.join("/")),u=[];return u.push(...l.map(h=>h===""?o:[o,h].join("/"))),r&&u.push(...l),u.map(h=>d.startsWith("/")&&h===""?"/":h)}function QA(d){d.sort((e,t)=>e.score!==t.score?t.score-e.score:rS(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var JA=/^:[\w-]+$/,ZA=3,eS=2,tS=1,nS=10,iS=-2,mg=d=>d==="*";function sS(d,e){let t=d.split("/"),s=t.length;return t.some(mg)&&(s+=iS),e&&(s+=eS),t.filter(r=>!mg(r)).reduce((r,o)=>r+(JA.test(o)?ZA:o===""?tS:nS),s)}function rS(d,e){return d.length===e.length&&d.slice(0,-1).every((s,r)=>s===e[r])?d[d.length-1]-e[e.length-1]:0}function aS(d,e,t=!1){let{routesMeta:s}=d,r={},o="/",l=[];for(let u=0;u<s.length;++u){let h=s[u],p=u===s.length-1,m=o==="/"?e:e.slice(o.length)||"/",b=El({path:h.relativePath,caseSensitive:h.caseSensitive,end:p},m),v=h.route;if(!b&&p&&t&&!s[s.length-1].route.index&&(b=El({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},m)),!b)return null;Object.assign(r,b.params),l.push({params:r,pathname:ai([o,b.pathname]),pathnameBase:hS(ai([o,b.pathnameBase])),route:v}),b.pathnameBase!=="/"&&(o=ai([o,b.pathnameBase]))}return l}function El(d,e){typeof d=="string"&&(d={path:d,caseSensitive:!1,end:!0});let[t,s]=oS(d.path,d.caseSensitive,d.end),r=e.match(t);if(!r)return null;let o=r[0],l=o.replace(/(.)\/+$/,"$1"),u=r.slice(1);return{params:s.reduce((p,{paramName:m,isOptional:b},v)=>{if(m==="*"){let x=u[v]||"";l=o.slice(0,o.length-x.length).replace(/(.)\/+$/,"$1")}const A=u[v];return b&&!A?p[m]=void 0:p[m]=(A||"").replace(/%2F/g,"/"),p},{}),pathname:o,pathnameBase:l,pattern:d}}function oS(d,e=!1,t=!0){En(d==="*"||!d.endsWith("*")||d.endsWith("/*"),`Route path "${d}" will be treated as if it were "${d.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${d.replace(/\*$/,"/*")}".`);let s=[],r="^"+d.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,u,h)=>(s.push({paramName:u,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return d.endsWith("*")?(s.push({paramName:"*"}),r+=d==="*"||d==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?r+="\\/*$":d!==""&&d!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),s]}function lS(d){try{return d.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return En(!1,`The URL path "${d}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),d}}function oi(d,e){if(e==="/")return d;if(!d.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=d.charAt(t);return s&&s!=="/"?null:d.slice(t)||"/"}function cS(d,e="/"){let{pathname:t,search:s="",hash:r=""}=typeof d=="string"?pr(d):d;return{pathname:t?t.startsWith("/")?t:uS(t,e):e,search:fS(s),hash:pS(r)}}function uS(d,e){let t=e.replace(/\/+$/,"").split("/");return d.split("/").forEach(r=>{r===".."?t.length>1&&t.pop():r!=="."&&t.push(r)}),t.length>1?t.join("/"):"/"}function ud(d,e,t,s){return`Cannot include a '${d}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function dS(d){return d.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Id(d){let e=dS(d);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function jd(d,e,t,s=!1){let r;typeof d=="string"?r=pr(d):(r={...d},Je(!r.pathname||!r.pathname.includes("?"),ud("?","pathname","search",r)),Je(!r.pathname||!r.pathname.includes("#"),ud("#","pathname","hash",r)),Je(!r.search||!r.search.includes("#"),ud("#","search","hash",r)));let o=d===""||r.pathname==="",l=o?"/":r.pathname,u;if(l==null)u=t;else{let b=e.length-1;if(!s&&l.startsWith("..")){let v=l.split("/");for(;v[0]==="..";)v.shift(),b-=1;r.pathname=v.join("/")}u=b>=0?e[b]:"/"}let h=cS(r,u),p=l&&l!=="/"&&l.endsWith("/"),m=(o||l===".")&&t.endsWith("/");return!h.pathname.endsWith("/")&&(p||m)&&(h.pathname+="/"),h}var ai=d=>d.join("/").replace(/\/\/+/g,"/"),hS=d=>d.replace(/\/+$/,"").replace(/^\/*/,"/"),fS=d=>!d||d==="?"?"":d.startsWith("?")?d:"?"+d,pS=d=>!d||d==="#"?"":d.startsWith("#")?d:"#"+d;function mS(d){return d!=null&&typeof d.status=="number"&&typeof d.statusText=="string"&&typeof d.internal=="boolean"&&"data"in d}var ay=["POST","PUT","PATCH","DELETE"];new Set(ay);var gS=["GET",...ay];new Set(gS);var mr=P.createContext(null);mr.displayName="DataRouter";var kl=P.createContext(null);kl.displayName="DataRouterState";P.createContext(!1);var oy=P.createContext({isTransitioning:!1});oy.displayName="ViewTransition";var yS=P.createContext(new Map);yS.displayName="Fetchers";var bS=P.createContext(null);bS.displayName="Await";var _n=P.createContext(null);_n.displayName="Navigation";var Na=P.createContext(null);Na.displayName="Location";var Hn=P.createContext({outlet:null,matches:[],isDataRoute:!1});Hn.displayName="Route";var Bd=P.createContext(null);Bd.displayName="RouteError";function vS(d,{relative:e}={}){Je(gr(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=P.useContext(_n),{hash:r,pathname:o,search:l}=ja(d,{relative:e}),u=o;return t!=="/"&&(u=o==="/"?t:ai([t,o])),s.createHref({pathname:u,search:l,hash:r})}function gr(){return P.useContext(Na)!=null}function ui(){return Je(gr(),"useLocation() may be used only in the context of a <Router> component."),P.useContext(Na).location}var ly="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function cy(d){P.useContext(_n).static||P.useLayoutEffect(d)}function Ia(){let{isDataRoute:d}=P.useContext(Hn);return d?LS():AS()}function AS(){Je(gr(),"useNavigate() may be used only in the context of a <Router> component.");let d=P.useContext(mr),{basename:e,navigator:t}=P.useContext(_n),{matches:s}=P.useContext(Hn),{pathname:r}=ui(),o=JSON.stringify(Id(s)),l=P.useRef(!1);return cy(()=>{l.current=!0}),P.useCallback((h,p={})=>{if(En(l.current,ly),!l.current)return;if(typeof h=="number"){t.go(h);return}let m=jd(h,JSON.parse(o),r,p.relative==="path");d==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:ai([e,m.pathname])),(p.replace?t.replace:t.push)(m,p.state,p)},[e,t,o,r,d])}P.createContext(null);function ja(d,{relative:e}={}){let{matches:t}=P.useContext(Hn),{pathname:s}=ui(),r=JSON.stringify(Id(t));return P.useMemo(()=>jd(d,JSON.parse(r),s,e==="path"),[d,r,s,e])}function SS(d,e){return uy(d,e)}function uy(d,e,t,s,r){Je(gr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=P.useContext(_n),{matches:l}=P.useContext(Hn),u=l[l.length-1],h=u?u.params:{},p=u?u.pathname:"/",m=u?u.pathnameBase:"/",b=u&&u.route;{let _=b&&b.path||"";dy(p,!b||_.endsWith("*")||_.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${_}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${_}"> to <Route path="${_==="/"?"*":`${_}/*`}">.`)}let v=ui(),A;if(e){let _=typeof e=="string"?pr(e):e;Je(m==="/"||_.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${_.pathname}" was given in the \`location\` prop.`),A=_}else A=v;let x=A.pathname||"/",C=x;if(m!=="/"){let _=m.replace(/^\//,"").split("/");C="/"+x.replace(/^\//,"").split("/").slice(_.length).join("/")}let T=iy(d,{pathname:C});En(b||T!=null,`No routes matched location "${A.pathname}${A.search}${A.hash}" `),En(T==null||T[T.length-1].route.element!==void 0||T[T.length-1].route.Component!==void 0||T[T.length-1].route.lazy!==void 0,`Matched leaf route at location "${A.pathname}${A.search}${A.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let w=TS(T&&T.map(_=>Object.assign({},_,{params:Object.assign({},h,_.params),pathname:ai([m,o.encodeLocation?o.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?m:ai([m,o.encodeLocation?o.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),l,t,s,r);return e&&w?P.createElement(Na.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...A},navigationType:"POP"}},w):w}function CS(){let d=kS(),e=mS(d)?`${d.status} ${d.statusText}`:d instanceof Error?d.message:JSON.stringify(d),t=d instanceof Error?d.stack:null,s="rgba(200,200,200, 0.5)",r={padding:"0.5rem",backgroundColor:s},o={padding:"2px 4px",backgroundColor:s},l=null;return console.error("Error handled by React Router default ErrorBoundary:",d),l=P.createElement(P.Fragment,null,P.createElement("p",null,"💿 Hey developer 👋"),P.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",P.createElement("code",{style:o},"ErrorBoundary")," or"," ",P.createElement("code",{style:o},"errorElement")," prop on your route.")),P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},e),t?P.createElement("pre",{style:r},t):null,l)}var xS=P.createElement(CS,null),wS=class extends P.Component{constructor(d){super(d),this.state={location:d.location,revalidation:d.revalidation,error:d.error}}static getDerivedStateFromError(d){return{error:d}}static getDerivedStateFromProps(d,e){return e.location!==d.location||e.revalidation!=="idle"&&d.revalidation==="idle"?{error:d.error,location:d.location,revalidation:d.revalidation}:{error:d.error!==void 0?d.error:e.error,location:e.location,revalidation:d.revalidation||e.revalidation}}componentDidCatch(d,e){this.props.unstable_onError?this.props.unstable_onError(d,e):console.error("React Router caught the following error during render",d)}render(){return this.state.error!==void 0?P.createElement(Hn.Provider,{value:this.props.routeContext},P.createElement(Bd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function ES({routeContext:d,match:e,children:t}){let s=P.useContext(mr);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),P.createElement(Hn.Provider,{value:d},t)}function TS(d,e=[],t=null,s=null,r=null){if(d==null){if(!t)return null;if(t.errors)d=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)d=t.matches;else return null}let o=d,l=t?.errors;if(l!=null){let p=o.findIndex(m=>m.route.id&&l?.[m.route.id]!==void 0);Je(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let u=!1,h=-1;if(t)for(let p=0;p<o.length;p++){let m=o[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(h=p),m.route.id){let{loaderData:b,errors:v}=t,A=m.route.loader&&!b.hasOwnProperty(m.route.id)&&(!v||v[m.route.id]===void 0);if(m.route.lazy||A){u=!0,h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}return o.reduceRight((p,m,b)=>{let v,A=!1,x=null,C=null;t&&(v=l&&m.route.id?l[m.route.id]:void 0,x=m.route.errorElement||xS,u&&(h<0&&b===0?(dy("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),A=!0,C=null):h===b&&(A=!0,C=m.route.hydrateFallbackElement||null)));let T=e.concat(o.slice(0,b+1)),w=()=>{let _;return v?_=x:A?_=C:m.route.Component?_=P.createElement(m.route.Component,null):m.route.element?_=m.route.element:_=p,P.createElement(ES,{match:m,routeContext:{outlet:p,matches:T,isDataRoute:t!=null},children:_})};return t&&(m.route.ErrorBoundary||m.route.errorElement||b===0)?P.createElement(wS,{location:t.location,revalidation:t.revalidation,component:x,error:v,children:w(),routeContext:{outlet:null,matches:T,isDataRoute:!0},unstable_onError:s}):w()},null)}function Fd(d){return`${d} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function _S(d){let e=P.useContext(mr);return Je(e,Fd(d)),e}function RS(d){let e=P.useContext(kl);return Je(e,Fd(d)),e}function DS(d){let e=P.useContext(Hn);return Je(e,Fd(d)),e}function Ud(d){let e=DS(d),t=e.matches[e.matches.length-1];return Je(t.route.id,`${d} can only be used on routes that contain a unique "id"`),t.route.id}function MS(){return Ud("useRouteId")}function kS(){let d=P.useContext(Bd),e=RS("useRouteError"),t=Ud("useRouteError");return d!==void 0?d:e.errors?.[t]}function LS(){let{router:d}=_S("useNavigate"),e=Ud("useNavigate"),t=P.useRef(!1);return cy(()=>{t.current=!0}),P.useCallback(async(r,o={})=>{En(t.current,ly),t.current&&(typeof r=="number"?d.navigate(r):await d.navigate(r,{fromRouteId:e,...o}))},[d,e])}var gg={};function dy(d,e,t){!e&&!gg[d]&&(gg[d]=!0,En(!1,t))}P.memo(PS);function PS({routes:d,future:e,state:t,unstable_onError:s}){return uy(d,void 0,t,s,e)}function OS({to:d,replace:e,state:t,relative:s}){Je(gr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:r}=P.useContext(_n);En(!r,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:o}=P.useContext(Hn),{pathname:l}=ui(),u=Ia(),h=jd(d,Id(o),l,s==="path"),p=JSON.stringify(h);return P.useEffect(()=>{u(JSON.parse(p),{replace:e,state:t,relative:s})},[u,p,s,e,t]),null}function Ye(d){Je(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function NS({basename:d="/",children:e=null,location:t,navigationType:s="POP",navigator:r,static:o=!1}){Je(!gr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let l=d.replace(/^\/*/,"/"),u=P.useMemo(()=>({basename:l,navigator:r,static:o,future:{}}),[l,r,o]);typeof t=="string"&&(t=pr(t));let{pathname:h="/",search:p="",hash:m="",state:b=null,key:v="default"}=t,A=P.useMemo(()=>{let x=oi(h,l);return x==null?null:{location:{pathname:x,search:p,hash:m,state:b,key:v},navigationType:s}},[l,h,p,m,b,v,s]);return En(A!=null,`<Router basename="${l}"> is not able to match the URL "${h}${p}${m}" because it does not start with the basename, so the <Router> won't render anything.`),A==null?null:P.createElement(_n.Provider,{value:u},P.createElement(Na.Provider,{children:e,value:A}))}function hy({children:d,location:e}){return SS(Cd(d),e)}function Cd(d,e=[]){let t=[];return P.Children.forEach(d,(s,r)=>{if(!P.isValidElement(s))return;let o=[...e,r];if(s.type===P.Fragment){t.push.apply(t,Cd(s.props.children,o));return}Je(s.type===Ye,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Je(!s.props.index||!s.props.children,"An index route cannot have child routes.");let l={id:s.props.id||o.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(l.children=Cd(s.props.children,o)),t.push(l)}),t}var Sl="get",Cl="application/x-www-form-urlencoded";function Ll(d){return d!=null&&typeof d.tagName=="string"}function IS(d){return Ll(d)&&d.tagName.toLowerCase()==="button"}function jS(d){return Ll(d)&&d.tagName.toLowerCase()==="form"}function BS(d){return Ll(d)&&d.tagName.toLowerCase()==="input"}function FS(d){return!!(d.metaKey||d.altKey||d.ctrlKey||d.shiftKey)}function US(d,e){return d.button===0&&(!e||e==="_self")&&!FS(d)}var cl=null;function HS(){if(cl===null)try{new FormData(document.createElement("form"),0),cl=!1}catch{cl=!0}return cl}var zS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function dd(d){return d!=null&&!zS.has(d)?(En(!1,`"${d}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Cl}"`),null):d}function GS(d,e){let t,s,r,o,l;if(jS(d)){let u=d.getAttribute("action");s=u?oi(u,e):null,t=d.getAttribute("method")||Sl,r=dd(d.getAttribute("enctype"))||Cl,o=new FormData(d)}else if(IS(d)||BS(d)&&(d.type==="submit"||d.type==="image")){let u=d.form;if(u==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=d.getAttribute("formaction")||u.getAttribute("action");if(s=h?oi(h,e):null,t=d.getAttribute("formmethod")||u.getAttribute("method")||Sl,r=dd(d.getAttribute("formenctype"))||dd(u.getAttribute("enctype"))||Cl,o=new FormData(u,d),!HS()){let{name:p,type:m,value:b}=d;if(m==="image"){let v=p?`${p}.`:"";o.append(`${v}x`,"0"),o.append(`${v}y`,"0")}else p&&o.append(p,b)}}else{if(Ll(d))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Sl,s=null,r=Cl,l=d}return o&&r==="text/plain"&&(l=o,o=void 0),{action:s,method:t.toLowerCase(),encType:r,formData:o,body:l}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Hd(d,e){if(d===!1||d===null||typeof d>"u")throw new Error(e)}function qS(d,e,t){let s=typeof d=="string"?new URL(d,typeof window>"u"?"server://singlefetch/":window.location.origin):d;return s.pathname==="/"?s.pathname=`_root.${t}`:e&&oi(s.pathname,e)==="/"?s.pathname=`${e.replace(/\/$/,"")}/_root.${t}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${t}`,s}async function VS(d,e){if(d.id in e)return e[d.id];try{let t=await import(d.module);return e[d.id]=t,t}catch(t){return console.error(`Error loading route module \`${d.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function YS(d){return d==null?!1:d.href==null?d.rel==="preload"&&typeof d.imageSrcSet=="string"&&typeof d.imageSizes=="string":typeof d.rel=="string"&&typeof d.href=="string"}async function XS(d,e,t){let s=await Promise.all(d.map(async r=>{let o=e.routes[r.route.id];if(o){let l=await VS(o,t);return l.links?l.links():[]}return[]}));return QS(s.flat(1).filter(YS).filter(r=>r.rel==="stylesheet"||r.rel==="preload").map(r=>r.rel==="stylesheet"?{...r,rel:"prefetch",as:"style"}:{...r,rel:"prefetch"}))}function yg(d,e,t,s,r,o){let l=(h,p)=>t[p]?h.route.id!==t[p].route.id:!0,u=(h,p)=>t[p].pathname!==h.pathname||t[p].route.path?.endsWith("*")&&t[p].params["*"]!==h.params["*"];return o==="assets"?e.filter((h,p)=>l(h,p)||u(h,p)):o==="data"?e.filter((h,p)=>{let m=s.routes[h.route.id];if(!m||!m.hasLoader)return!1;if(l(h,p)||u(h,p))return!0;if(h.route.shouldRevalidate){let b=h.route.shouldRevalidate({currentUrl:new URL(r.pathname+r.search+r.hash,window.origin),currentParams:t[0]?.params||{},nextUrl:new URL(d,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof b=="boolean")return b}return!0}):[]}function WS(d,e,{includeHydrateFallback:t}={}){return $S(d.map(s=>{let r=e.routes[s.route.id];if(!r)return[];let o=[r.module];return r.clientActionModule&&(o=o.concat(r.clientActionModule)),r.clientLoaderModule&&(o=o.concat(r.clientLoaderModule)),t&&r.hydrateFallbackModule&&(o=o.concat(r.hydrateFallbackModule)),r.imports&&(o=o.concat(r.imports)),o}).flat(1))}function $S(d){return[...new Set(d)]}function KS(d){let e={},t=Object.keys(d).sort();for(let s of t)e[s]=d[s];return e}function QS(d,e){let t=new Set;return new Set(e),d.reduce((s,r)=>{let o=JSON.stringify(KS(r));return t.has(o)||(t.add(o),s.push({key:o,link:r})),s},[])}function fy(){let d=P.useContext(mr);return Hd(d,"You must render this element inside a <DataRouterContext.Provider> element"),d}function JS(){let d=P.useContext(kl);return Hd(d,"You must render this element inside a <DataRouterStateContext.Provider> element"),d}var zd=P.createContext(void 0);zd.displayName="FrameworkContext";function py(){let d=P.useContext(zd);return Hd(d,"You must render this element inside a <HydratedRouter> element"),d}function ZS(d,e){let t=P.useContext(zd),[s,r]=P.useState(!1),[o,l]=P.useState(!1),{onFocus:u,onBlur:h,onMouseEnter:p,onMouseLeave:m,onTouchStart:b}=e,v=P.useRef(null);P.useEffect(()=>{if(d==="render"&&l(!0),d==="viewport"){let C=w=>{w.forEach(_=>{l(_.isIntersecting)})},T=new IntersectionObserver(C,{threshold:.5});return v.current&&T.observe(v.current),()=>{T.disconnect()}}},[d]),P.useEffect(()=>{if(s){let C=setTimeout(()=>{l(!0)},100);return()=>{clearTimeout(C)}}},[s]);let A=()=>{r(!0)},x=()=>{r(!1),l(!1)};return t?d!=="intent"?[o,v,{}]:[o,v,{onFocus:ba(u,A),onBlur:ba(h,x),onMouseEnter:ba(p,A),onMouseLeave:ba(m,x),onTouchStart:ba(b,A)}]:[!1,v,{}]}function ba(d,e){return t=>{d&&d(t),t.defaultPrevented||e(t)}}function eC({page:d,...e}){let{router:t}=fy(),s=P.useMemo(()=>iy(t.routes,d,t.basename),[t.routes,d,t.basename]);return s?P.createElement(nC,{page:d,matches:s,...e}):null}function tC(d){let{manifest:e,routeModules:t}=py(),[s,r]=P.useState([]);return P.useEffect(()=>{let o=!1;return XS(d,e,t).then(l=>{o||r(l)}),()=>{o=!0}},[d,e,t]),s}function nC({page:d,matches:e,...t}){let s=ui(),{manifest:r,routeModules:o}=py(),{basename:l}=fy(),{loaderData:u,matches:h}=JS(),p=P.useMemo(()=>yg(d,e,h,r,s,"data"),[d,e,h,r,s]),m=P.useMemo(()=>yg(d,e,h,r,s,"assets"),[d,e,h,r,s]),b=P.useMemo(()=>{if(d===s.pathname+s.search+s.hash)return[];let x=new Set,C=!1;if(e.forEach(w=>{let _=r.routes[w.route.id];!_||!_.hasLoader||(!p.some(R=>R.route.id===w.route.id)&&w.route.id in u&&o[w.route.id]?.shouldRevalidate||_.hasClientLoader?C=!0:x.add(w.route.id))}),x.size===0)return[];let T=qS(d,l,"data");return C&&x.size>0&&T.searchParams.set("_routes",e.filter(w=>x.has(w.route.id)).map(w=>w.route.id).join(",")),[T.pathname+T.search]},[l,u,s,r,p,e,d,o]),v=P.useMemo(()=>WS(m,r),[m,r]),A=tC(m);return P.createElement(P.Fragment,null,b.map(x=>P.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...t})),v.map(x=>P.createElement("link",{key:x,rel:"modulepreload",href:x,...t})),A.map(({key:x,link:C})=>P.createElement("link",{key:x,nonce:t.nonce,...C})))}function iC(...d){return e=>{d.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var my=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{my&&(window.__reactRouterVersion="7.9.1")}catch{}function sC({basename:d,children:e,window:t}){let s=P.useRef();s.current==null&&(s.current=YA({window:t,v5Compat:!0}));let r=s.current,[o,l]=P.useState({action:r.action,location:r.location}),u=P.useCallback(h=>{P.startTransition(()=>l(h))},[l]);return P.useLayoutEffect(()=>r.listen(u),[r,u]),P.createElement(NS,{basename:d,children:e,location:o.location,navigationType:o.action,navigator:r})}var gy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xe=P.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:r,reloadDocument:o,replace:l,state:u,target:h,to:p,preventScrollReset:m,viewTransition:b,...v},A){let{basename:x}=P.useContext(_n),C=typeof p=="string"&&gy.test(p),T,w=!1;if(typeof p=="string"&&C&&(T=p,my))try{let V=new URL(window.location.href),Q=p.startsWith("//")?new URL(V.protocol+p):new URL(p),J=oi(Q.pathname,x);Q.origin===V.origin&&J!=null?p=J+Q.search+Q.hash:w=!0}catch{En(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let _=vS(p,{relative:r}),[R,O,k]=ZS(s,v),j=lC(p,{replace:l,state:u,target:h,preventScrollReset:m,relative:r,viewTransition:b});function F(V){e&&e(V),V.defaultPrevented||j(V)}let q=P.createElement("a",{...v,...k,href:T||_,onClick:w||o?e:F,ref:iC(A,O),target:h,"data-discover":!C&&t==="render"?"true":void 0});return R&&!C?P.createElement(P.Fragment,null,q,P.createElement(eC,{page:_})):q});Xe.displayName="Link";var rC=P.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:r=!1,style:o,to:l,viewTransition:u,children:h,...p},m){let b=ja(l,{relative:p.relative}),v=ui(),A=P.useContext(kl),{navigator:x,basename:C}=P.useContext(_n),T=A!=null&&fC(b)&&u===!0,w=x.encodeLocation?x.encodeLocation(b).pathname:b.pathname,_=v.pathname,R=A&&A.navigation&&A.navigation.location?A.navigation.location.pathname:null;t||(_=_.toLowerCase(),R=R?R.toLowerCase():null,w=w.toLowerCase()),R&&C&&(R=oi(R,C)||R);const O=w!=="/"&&w.endsWith("/")?w.length-1:w.length;let k=_===w||!r&&_.startsWith(w)&&_.charAt(O)==="/",j=R!=null&&(R===w||!r&&R.startsWith(w)&&R.charAt(w.length)==="/"),F={isActive:k,isPending:j,isTransitioning:T},q=k?e:void 0,V;typeof s=="function"?V=s(F):V=[s,k?"active":null,j?"pending":null,T?"transitioning":null].filter(Boolean).join(" ");let Q=typeof o=="function"?o(F):o;return P.createElement(Xe,{...p,"aria-current":q,className:V,ref:m,style:Q,to:l,viewTransition:u},typeof h=="function"?h(F):h)});rC.displayName="NavLink";var aC=P.forwardRef(({discover:d="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:r,state:o,method:l=Sl,action:u,onSubmit:h,relative:p,preventScrollReset:m,viewTransition:b,...v},A)=>{let x=dC(),C=hC(u,{relative:p}),T=l.toLowerCase()==="get"?"get":"post",w=typeof u=="string"&&gy.test(u),_=R=>{if(h&&h(R),R.defaultPrevented)return;R.preventDefault();let O=R.nativeEvent.submitter,k=O?.getAttribute("formmethod")||l;x(O||R.currentTarget,{fetcherKey:e,method:k,navigate:t,replace:r,state:o,relative:p,preventScrollReset:m,viewTransition:b})};return P.createElement("form",{ref:A,method:T,action:C,onSubmit:s?h:_,...v,"data-discover":!w&&d==="render"?"true":void 0})});aC.displayName="Form";function oC(d){return`${d} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function yy(d){let e=P.useContext(mr);return Je(e,oC(d)),e}function lC(d,{target:e,replace:t,state:s,preventScrollReset:r,relative:o,viewTransition:l}={}){let u=Ia(),h=ui(),p=ja(d,{relative:o});return P.useCallback(m=>{if(US(m,e)){m.preventDefault();let b=t!==void 0?t:Ra(h)===Ra(p);u(d,{replace:b,state:s,preventScrollReset:r,relative:o,viewTransition:l})}},[h,u,p,t,s,e,d,r,o,l])}var cC=0,uC=()=>`__${String(++cC)}__`;function dC(){let{router:d}=yy("useSubmit"),{basename:e}=P.useContext(_n),t=MS();return P.useCallback(async(s,r={})=>{let{action:o,method:l,encType:u,formData:h,body:p}=GS(s,e);if(r.navigate===!1){let m=r.fetcherKey||uC();await d.fetch(m,t,r.action||o,{preventScrollReset:r.preventScrollReset,formData:h,body:p,formMethod:r.method||l,formEncType:r.encType||u,flushSync:r.flushSync})}else await d.navigate(r.action||o,{preventScrollReset:r.preventScrollReset,formData:h,body:p,formMethod:r.method||l,formEncType:r.encType||u,replace:r.replace,state:r.state,fromRouteId:t,flushSync:r.flushSync,viewTransition:r.viewTransition})},[d,e,t])}function hC(d,{relative:e}={}){let{basename:t}=P.useContext(_n),s=P.useContext(Hn);Je(s,"useFormAction must be used inside a RouteContext");let[r]=s.matches.slice(-1),o={...ja(d||".",{relative:e})},l=ui();if(d==null){o.search=l.search;let u=new URLSearchParams(o.search),h=u.getAll("index");if(h.some(m=>m==="")){u.delete("index"),h.filter(b=>b).forEach(b=>u.append("index",b));let m=u.toString();o.search=m?`?${m}`:""}}return(!d||d===".")&&r.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(o.pathname=o.pathname==="/"?t:ai([t,o.pathname])),Ra(o)}function fC(d,{relative:e}={}){let t=P.useContext(oy);Je(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=yy("useViewTransitionState"),r=ja(d,{relative:e});if(!t.isTransitioning)return!1;let o=oi(t.currentLocation.pathname,s)||t.currentLocation.pathname,l=oi(t.nextLocation.pathname,s)||t.nextLocation.pathname;return El(r.pathname,l)!=null||El(r.pathname,o)!=null}function pC({onToggleSidebar:d}){return g.jsxs("header",{style:{background:"#007BFF",color:"white",padding:"3px",display:"flex",alignItems:"center"},children:[g.jsx("button",{onClick:d,style:{marginRight:"10px",fontSize:"20px",background:"transparent",border:"none",color:"white",cursor:"pointer"},children:"☰"}),"My React App"]})}function mC(){return g.jsx("footer",{style:{background:"#333",color:"white",padding:"4px",textAlign:"center",position:"fixed",bottom:0,width:"100%",height:"20px"},children:"© 2026 My React App. All Rights Reserved."})}function gC({isOpen:d}){return g.jsx("aside",{style:{background:"#f4f4f4",width:d?"200px":"0",height:"100vh",padding:d?"10px":"0",position:"fixed",top:"50px",left:0,overflowX:"hidden",transition:"width 0.3s ease"},children:d&&g.jsxs("ul",{style:{listStyleType:"none",padding:0},children:[g.jsx(Xe,{to:"/app/about",children:"🏠 About"}),g.jsx("br",{}),g.jsx(Xe,{to:"/app/contact",children:"📞Contact"}),g.jsx("br",{}),g.jsx(Xe,{to:"/app/logout",children:"Logout"}),g.jsx("br",{}),g.jsx(Xe,{to:"/app/lazy",children:"Lazy Loading"}),g.jsx("br",{}),g.jsx(Xe,{to:"/app/login",children:"Login"}),g.jsx("br",{}),g.jsx(Xe,{to:"/app/react",children:"React Session 1"}),g.jsx("br",{}),g.jsx(Xe,{to:"/app/somecode",children:"Some Code Session 2"}),g.jsx("br",{}),g.jsx(Xe,{to:"/app/interview",children:"Interview Question"}),g.jsx("br",{}),g.jsx(Xe,{to:"/app/javascript",children:"Java Script"}),g.jsx("br",{}),g.jsx(Xe,{to:"/app/session3",children:"useReducer"}),g.jsx("br",{}),g.jsx(Xe,{to:"/app/session4",children:"useContext "}),g.jsx("br",{}),g.jsx(Xe,{to:"/app/usememo",children:"useMemo"}),g.jsx("br",{}),g.jsx(Xe,{to:"/app/usecallback",children:"useCallback"}),g.jsx("br",{}),g.jsx(Xe,{to:"/app/memo",children:"Memo P-C"}),g.jsx("br",{}),g.jsx(Xe,{to:"/app/tvs",children:"TVS Paper"}),g.jsx("br",{}),g.jsx(Xe,{to:"/app/appservice",children:"Azure"}),g.jsx("br",{}),g.jsx(Xe,{to:"/app/professional",children:"Gyansys Documents"}),g.jsx("br",{}),g.jsx(Xe,{to:"/app/sql",children:"SQL DBA/DEV"}),g.jsx("br",{}),g.jsx(Xe,{to:"/app/dotnetdata",children:"Dot Net"}),g.jsx("br",{}),g.jsx(Xe,{to:"/app/fetchdata",children:"Use Hook to fetch"}),g.jsx("br",{}),g.jsx(Xe,{to:"/app/khalid",children:"Khalid IDs"}),g.jsx("br",{}),g.jsx(Xe,{to:"/app/general",children:"Practice"})]})})}const yC=()=>(Ia(),g.jsxs(g.Fragment,{children:[g.jsx("h2",{children:" About Link"}),"Office 365 Setup:",g.jsx("br",{}),g.jsx("a",{href:"https://youtu.be/erXnT4OcVT0",target:"_blank",children:"Office Setup"}),g.jsx("br",{}),"Windows 10/11 Activation",g.jsx("br",{}),g.jsx("a",{href:"https://youtu.be/D6_CA2hDnHU",target:"_blank",children:"Windows 10/11 Activation"}),g.jsx("br",{}),g.jsx("a",{href:"https://voters.eci.gov.in/download-eroll?stateCode=S04",target:"_blanck",children:"Voter Sir Final List 2025, 63-Katihar, Part-134, PDF-512"}),g.jsx("pre",{children:g.jsx("code",{children:`

          Kill Process

          PS C:Users07908> Stop-Process -Id (Get-NetTCPConnection -LocalPort 5050 | Select-Object -First 1 -ExpandProperty OwningProcess) -Force
          

          Find the job:
          https://www.genspark.ai/agents?id=f42f2697-512c-4a54-8ca8-e5f779cf54f5


          ATS Resume created
          https://chatgpt.com/g/g-67b866a648a88191b29e8274026994fd-be10x-ats-resume-generator

          sql 
          https://goldenrod-motion-1da.notion.site/SQL-using-AI-Tools-Prompts-Codes-1c1e4e54a92e8029a79cdb3e415e8c35


          Custom dome static web: https://www.youtube.com/watch?v=QamPUyCZZpA
          n&n: https://khalid1972.app.n8n.cloud/signin?redirect=%252Fworkflow%252FrvGvANYgKeIQWIUX
          n&n chat: https://khalid1972.app.n8n.cloud/webhook/c4b0d7cb-95df-4ee5-bce3-d9c9d5697b85/chat

          git url: https://github.com/Kakhter/react-project/tree/main/.github/workflows
          Home Paper:

          Self
            Birth Certificate
            Passport Photo
            Bank Acount HDFC & SBI
            PAN Number
            Aadhar
            Voter Card
            Driving Licence
            Passport


          Spouse:
            Birth Certificate
            Passport Photo
            Bank Account Details
            PAN Number
            Aadhar
            Voter Card
            Academic Certificate

          Kamran:
            Birth Certificate
            Passport Photo
            Aadhar
            Income
            Residential
            Cast
            Academic Certificate
          
          Kehkasha:
            Birth Certificate
            Passport Photo
            Aadhar
            Income
            Residential
            Cast
            Academic Certificate

          Farhan:
            Birth Certificate
            Passport Photo
            Aadhar
            Income
            Residential
            Cast
            Voter Card
            Academic Certificate
      
      Best regards,  
        Khalid Akhter  
        Full Stack Developer | Independent Contractor  
        Microsoft Certified: Azure Administrator (AZ-104)  
        Master of Computer Applications (MCA)  
        khalid.bharat@gmail.com
        Mob: 9430969786

      Dapper File Path:
      C:\\Users\\KhalidAkhter\\OneDrive - GyanSys Inc\\DesktopCopy_C_Drive\\inOneFolder\\MyShowCase
      \\CleanArchitecture\\Dapper.WebApi-master\\Dapper.WebApi-master

      InternAPI File Path:
      C:\\Users\\KhalidAkhter\\OneDrive - GyanSys Inc\\Desktop\\TA-IntrimTraining\\DotNet Day Wise
      \\Dot Net Training - 2025\\DotNet_Jan302025\\InternAPI\\InternAPI

      GulfTelent: https://www.gulftalent.com/candidates/edit-cv/cv-review

      Pending Tasks: 
 
    Discuss strategies to secure an ASP.NET Core API using OAuth2 and OpenID Connect.
    Explain the pros, cons, and implementation details of API versioning in ASP.NET Core.

    How have you optimized database access in Entity Framework Core for large-scale applications?

    Describe how you would implement logging in ASP.NET Core with providers such as Serilog or NLog, including structured logging best practices.
      
    React:

    export const authConfig = {
      authority: "https://your-ping-tenant-id.pingidentity.com/as",
      client_id: "YOUR_CLIENT_ID",
      redirect_uri: "http://localhost:3000/callback",
      response_type: "token id_token",
      scope: "openid profile email",
    };

    -----------------------------------------------------
    Tata Router:
    -----------------------------------------
    IP: 192.168.1.254
    User: userAdmin
    Pwd: tsbb@123
    -----------------------------------------


    https://www.naukri.com/
    khalid.bharat@gmail.com
    Gyansys@2025

    ---------------------------------------
    -----------------------------------------

    https://www.naukri.com/
    akhter.bharat@gmail.com
    Gyansys@2025
    ---------------------------------------


    https://github.com/login
    khalid.bharat@gmail.com
    Gyansys@2025
    ---------------------------------------
    Another GitHub

    https://github.com/login
    khalid.akhter@gyansys.com
    Gyansys@2025
    ----------------------------------
    Akhter.bharat@gmail.com - Farhan@786
    Gyansys@2025
    ---------------------------------------


    khalidputt: Gyansys@2025 ---Tc4linux/
    ---------------------------------------
    SQLDatabase Pwd: Local@854105
    

    Github: https://github.com/Kakhter/

    Microsoft Account: khalid.bharat@gmail.com/Gyansys@2025

    Github: khalid.bharat@gmail.com/Farhan@7861234
    Gyansys SQL Database: Test@123
    AMAT: W@lcometoA99lied2024!
    ChatGPT: Google Account/Farhan@786

    


    https://unifiedportal-mem.epfindia.gov.in/memberinterface/
    Uan No.
    100192917945
    pwd:Farhan@032026 -- old Farhan@032025
    </br>
    Electricity Bill: https://www.mobikwik.com/bescom-bangalore-electricity-bill-payment-online
    Khalid: 1789430955
    Motor:  7781836991

    Spe: K: 1259/580
        M: 659 / 616.54

    New: pin:0133 sbi

    Greythr Salary Slip & IT Declarion

    https://gyansys.greythr.com/uas/portal/auth/login
    UserName:0994
    Password:Gyansys@2025

    https://www.incometax.gov.in
    UserName: AJBPA9805B
    Password: Farhan@1972




    Replicon
    Outlook: Farhan@786
    uername: khalid.akhter@gyansys.com pwd: Farhan@786
    Gmail
    Farhan@786
    LinkId
    username: khalid.bharat@gmail.com/Software@92
    Internet Broadband
    Account No.: 06452295986
    Out Gmail:
    khalid.bharat@gmail.com / Farhan@786

    Electricity: 400689445
    https://nbpdcl.co.in/(S(dxtcdwemnszcpltr53xeg5p2))/frmQuickBillPaymentAll.aspx

    OurSystemPin: 19721972
    Pwd: local@854105
    Password by gyansys: yof07856 (first time)

    ===================================================================================================
    greythr:

    gyansys id: 0994

    password: Software@92



    Axis Customer Id: 848762783
    Axis:152007#farhan
    5346 8000 2637 5621
    03/22

    717

    A/C: 487708






    khalid.bharat@gmail.com
    Farhan@786

    OutLook: https://outlook.office365.com/mail/
    Gyansys: outlook: khalid.akhter@gyansys.com
                      Farhan@786

    Gyansys salary slip: https://gyansys.greythr.com/v3/portal/ess/home
    https://gyansys.greythr.com/v3/portal/ess/home
    Pwd: Gyansys@2025


    Router link
    Router Login: admin/optilink123
    Wifi pwd: puttu@12345/Farhan@92

    Gyansys Salary Slip:
    https://gyansys.greythr.com/v3/portal/ess/home
    ----------------------------------------------------

    https://unifiedportal-mem.epfindia.gov.in/memberinterface/
    Uan No.
    100192917945
    pwd:
    Software@92
    old: KKaa@854105


    https://wf4.myhcl.com/MySeparation/Login/Ex-HCLitesLogin.aspx
    khalidakhter
    Ka@854105
    ---------------------------------------------------------------

    Aadhaar No.:
    366130095157
    -----------------------------------------------
    Form 19/Composite Form for PF withdrawal duly signed
    Self attested copy of Aadhar Card
    Self attested copy of PAN Card
    Blank cancelled cheque for verification of the IFSC code. Your name must be pre-printed on the Cheque as provided mandatorily. Please note, Joint / NRI/ NRO/ NRE bank account will not be accepted.
    Please put signatures on all the documents upload within the Form(s) and on the Form(s) wherever required, and on the Cancelled Cheques as well, mandatorily.
    Signature on uploaded documents & on the associated Form(s) should not differ.
    ---------------------------
    Copy of Aadhaar Card.
    Copy of PAN Card.
    Upload Copy of cancelled cheques with my pre-printed name for verifying IFSC code.
    I am the sole holder of this bank account and it's not a joint account with other than my spouse.
    My account is a saving bank account and is not NRO, NRI or NRE a/c.
    In case of migration abroad, following documents needs to be uploaded on mandatorily basis,
    1. Passport copy; 2. Copy of air ticket; 3. Copy of valid VISA (Should be valid for 3 years from the Date of Leaving from HCL)







    `})})]})),bC=()=>g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"box",children:" Contact Us"}),g.jsx("pre",{children:g.jsx("code",{children:`
--------------------------------------------------------------------------------------------------------------------
            1. How to display dynamic html data in react ?
            Ans:
            const dynamicHTML = "<h2 style='color:blue'>Hello from dynamic HTML!</h2>";
            <div dangerouslySetInnerHTML={{ __html: dynamicHTML }} />
--------------------------------------------------------------------------------------------------------------------

            2. How do you send data from parent component to child component in react ?
            Ans:
            In React, the most common way to send data from a parent component to a child component is by using props.
            <ChildComponent text={message} userInfo={user} />
--------------------------------------------------------------------------------------------------------------------

            3. How to call parent component method from child component in react ?
            Ans:
            Parent Component:
            
            import React from "react";
            import Child from "./Child";

            function Parent() {
              const handleMessage = (msg) => {
                alert('Message from Child: $/{msg}');   -- use carret, and remove /
              };

              return (
                <div>
                  <h1>Parent Component</h1>
                  <Child sendMessage={handleMessage} />
                </div>
              );
            }

            export default Parent;

          CHILE COMPONENT:

            import React from "react";

            function Child({ sendMessage }) {
              return (
                <div>
                  <h2>Child Component</h2>
                  <button onClick={() => sendMessage("Hello Parent!")}>
                    Call Parent Method
                  </button>
                </div>
              );
            }

            export default Child;
--------------------------------------------------------------------------------------------------------------------
            
            4. How do you access the dom element ?
            Ans:
            function App() {
              const inputRef = useRef(null);

              const handleFocus = () => {
                inputRef.current.focus(); // Access DOM element and focus it
              };

              return (
                <div>
                  <input ref={inputRef} type="text" placeholder="Type here" />
                  <button onClick={handleFocus}>Focus Input</button>
                </div>
              );
            }

            export default App;
--------------------------------------------------------------------------------------------------------------------

            5. How to bind array/array of objects to dropdown in react ?
            Ans:
            function App() {
              const users = [
                { id: 1, name: "Khalid" },
                { id: 2, name: "Sateesh" },
                { id: 3, name: "Doron" }
              ];

              return (
                <select>
                  {users.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.name}
                    </option>
                  ))}
                </select>
              );
            }

            export default App;
--------------------------------------------------------------------------------------------------------------------

            6. Create a lazy loaded component in react ?
            Ans: 

            import React from "react";
            export default function MyComponent() {
              return <h2>This is a lazy-loaded component!</h2>;
            }
            
            Main Component loading lazy component.
            
            import React, { Suspense, lazy } from "react";

            const MyComponent = lazy(() => import("./MyComponent"));

            function App() {
              return (
                <div>
                  <h1>Main Component</h1>
                  <Suspense fallback={<div>Loading...</div>}>
                    <MyComponent />
                  </Suspense>
                </div>
              );
            }

            export default App;
--------------------------------------------------------------------------------------------------------------------

            7. How to display data entered by the user in another textbox ?
            
            import React, { useState } from "react";

            function App() {
              const [text, setText] = useState("");

              return (
                <div>
                  <h2>Enter text:</h2>
                  <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Type something"
                  />

                  <h2>Display in another textbox:</h2>
                  <input type="text" value={text} readOnly />
                </div>
              );
            }

            export default App;
--------------------------------------------------------------------------------------------------------------------

            8. How to loop array/array of objects in react ?
            
              function App() {
                const fruits = ["Apple", "Banana", "Orange"];

                return (
                  <ul>
                    {fruits.map((fruit, index) => (
                      <li key={index}>{fruit}</li>
                    ))}
                  </ul>
                );
              }

              export default App;
--------------------------------------------------------------------------------------------------------------------

            9. How to conditionally render an element or text in react ?
            
            function App() {
              const showMessage = true;

              return (
                <div>
                  {showMessage && <p>This message is shown because condition is true.</p>}
                </div>
              );
            }
--------------------------------------------------------------------------------------------------------------------

            10. How to change styles based on condition in react ?

            function App() {
              const isActive = false;

              return (
                <div className={isActive ? "active" : "inactive"}>
                  {isActive ? "Active" : "Inactive"}
                </div>
              );
            }
--------------------------------------------------------------------------------------------------------------------

            11. How to show and hide data based on condition in react ?
            Ans:
            
            function App() {
              const isLoggedIn = true;

              return (
                <div>
                  {isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Log In</h1>}
                </div>
              );
            }
--------------------------------------------------------------------------------------------------------------------
            12.Bind array/array of objects to radio button in react ?
            
            import React, { useState } from "react";

            function App() {
              const options = ["Apple", "Banana", "Orange"];
              const [selectedValue, setSelectedValue] = useState("");

              return (
                <div>
                  <h3>Select a Fruit:</h3>
                  {options.map((item, index) => (
                    <label key={index}>
                      <input
                        type="radio"
                        value={item}
                        checked={selectedValue === item}
                        onChange={(e) => setSelectedValue(e.target.value)}
                      />
                      {item}
                    </label>
                  ))}
                  <p>Selected: {selectedValue}</p>
                </div>
              );
            }


--------------------------------------------------------------------------------------------------------------------            
            13.Display radio button data selected by user in another textbox ?
    
            import React, { useState } from "react";

            function App() {
              const options = ["Apple", "Banana", "Orange"];
              const [selectedValue, setSelectedValue] = useState("");

              return (
                <div>
                  <h3>Select a Fruit:</h3>
                  {options.map((item, index) => (
                    <label key={index} style={{ display: "block" }}>
                      <input
                        type="radio"
                        value={item}
                        checked={selectedValue === item}
                        onChange={(e) => setSelectedValue(e.target.value)}
                      />
                      {item}
                    </label>
                  ))}

                  <h3>Selected Fruit:</h3>
                  <input
                    type="text"
                    value={selectedValue}
                    readOnly
                    style={{ width: "200px" }}
                  />
                </div>
              );
            }

            export default App;

--------------------------------------------------------------------------------------------------------------------            
            14. How to call a method when component is rendered for the first time in react ?
            
            import React, { useEffect } from "react";

            function App() {
              useEffect(() => {
                // This runs only once when the component mounts
                console.log("Component rendered for the first time!");
                fetchData(); // Example method call
              }, []); // Empty array means run only on initial render

              const fetchData = () => {
                console.log("Fetching data...");
                // Your API call or logic here
              };

              return <h1>Hello React!</h1>;
            }

            export default App;

--------------------------------------------------------------------------------------------------------------------

            15.Display keys and values of objects in a loop in react?
            
            import React from "react";

            function App() {
              const users = [
                { name: "Alice", age: 25, email: "alice@example.com" },
                { name: "Bob", age: 30, email: "bob@example.com" }
              ];

              return (
                <div>
                  <h3>User List:</h3>
                  {users.map((user, index) => (
                    <div key={index}>
                      <p>Name: {user.name}</p>
                      <p>Age: {user.age}</p>
                      <p>Email: {user.email}</p>
                      <hr />
                    </div>
                  ))}
                </div>
              );
            }

            export default App;


--------------------------------------------------------------------------------------------------------------------
            16. How to rerender a component on value change in react ?
            Ans:                       
            import React, { useState } from "react";

            function App() {
              const [count, setCount] = useState(0);

              const handleIncrement = () => {
                setCount(count + 1); // Changing state triggers re-render
              };

              return (
                <div>
                  <h2>Count: {count}</h2>
                  <button onClick={handleIncrement}>Increment</button>
                </div>
              );
            }

            export default App;


--------------------------------------------------------------------------------------------------------------------
            17. How to call a method on every rerender of a component ?
            
            import React, { useState, useEffect } from "react";

            function App() {
              const [count, setCount] = useState(0);

              useEffect(() => {
                console.log("Component rendered or updated!");
                myMethod();
              }); // No dependency array → runs after every render

              const myMethod = () => {
                console.log("Method called on every render");
              };

              return (
                <div>
                  <h2>Count: {count}</h2>
                  <button onClick={() => setCount(count + 1)}>Increment</button>
                </div>
              );
            }

            export default App;


--------------------------------------------------------------------------------------------------------------------
            18. How to add data into useState array in functional component in react ?
            
            import React, { useState } from "react";

            function App() {
              const [fruits, setFruits] = useState(["Apple", "Banana"]);

              const addFruit = () => {
                setFruits([...fruits, "Orange"]); // Add new item
              };

              return (
                <div>
                  <h3>Fruits:</h3>
                  <ul>
                    {fruits.map((fruit, index) => (
                      <li key={index}>{fruit}</li>
                    ))}
                  </ul>
                  <button onClick={addFruit}>Add Orange</button>
                </div>
              );
            }

            export default App;

--------------------------------------------------------------------------------------------------------------------
            19. Create a search textbox filter ?
            
            import React, { useState } from "react";

            function App() {
              const [searchTerm, setSearchTerm] = useState("");
              const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

              // Filter fruits based on search term
              const filteredFruits = fruits.filter((fruit) =>
                fruit.toLowerCase().includes(searchTerm.toLowerCase())
              );

              return (
                <div>
                  <h3>Search Fruits:</h3>
                  <input
                    type="text"
                    placeholder="Type to search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />

                  <ul>
                    {filteredFruits.map((fruit, index) => (
                      <li key={index}>{fruit}</li>
                    ))}
                  </ul>
                </div>
              );
            }

            export default App;

--------------------------------------------------------------------------------------------------------------------
            20.Create a counter component using useState ?
            
            import React, { useState } from "react";

            function Counter() {
              const [count, setCount] = useState(0); // Initialize state

              const increment = () => setCount(count + 1);
              const decrement = () => setCount(count - 1);
              const reset = () => setCount(0);

              return (
                <div style={{ textAlign: "center", marginTop: "50px" }}>
                  <h2>Counter: {count}</h2>
                  <button onClick={increment}>Increment</button>
                  <button onClick={decrement} style={{ marginLeft: "10px" }}>
                    Decrement
                  </button>
                  <button onClick={reset} style={{ marginLeft: "10px" }}>
                    Reset
                  </button>
                </div>
              );
            }

            export default Counter;

--------------------------------------------------------------------------------------------------------------------            
            21.Create a counter component using useReducer ?
            
            import React, { useReducer } from "react";

            // Define initial state
            const initialState = { count: 0 };

            // Define reducer function
            function reducer(state, action) {
              switch (action.type) {
                case "increment":
                  return { count: state.count + 1 };
                case "decrement":
                  return { count: state.count - 1 };
                case "reset":
                  return { count: 0 };
                default:
                  return state;
              }
            }

            function Counter() {
              const [state, dispatch] = useReducer(reducer, initialState);

              return (
                <div style={{ textAlign: "center", marginTop: "50px" }}>
                  <h2>Count: {state.count}</h2>
                  <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
                  <button onClick={() => dispatch({ type: "decrement" })} style={{ marginLeft: "10px" }}>
                    Decrement
                  </button>
                  <button onClick={() => dispatch({ type: "reset" })} style={{ marginLeft: "10px" }}>
                    Reset
                  </button>
                </div>
              );
            }

            export default Counter;

--------------------------------------------------------------------------------------------------------------------                
            22.Change focus/enable/disable textbox in child component based on parent component button click ?
             
            import React, { useState, useRef } from "react";

            // Child Component
            function Child({ isDisabled, shouldFocus }) {
              const inputRef = useRef(null);

              // Focus the textbox when shouldFocus changes
              React.useEffect(() => {
                if (shouldFocus && inputRef.current) {
                  inputRef.current.focus();
                }
              }, [shouldFocus]);

              return (
                <input
                  type="text"
                  ref={inputRef}
                  disabled={isDisabled}
                  placeholder="Enter text"
                />
              );
            }

            // Parent Component
            function Parent() {
              const [isDisabled, setIsDisabled] = useState(false);
              const [shouldFocus, setShouldFocus] = useState(false);

              return (
                <div>
                  <Child isDisabled={isDisabled} shouldFocus={shouldFocus} />

                  <div style={{ marginTop: "10px" }}>
                    <button onClick={() => setIsDisabled(false)}>Enable</button>
                    <button onClick={() => setIsDisabled(true)} style={{ marginLeft: "10px" }}>
                      Disable
                    </button>
                    <button onClick={() => setShouldFocus(true)} style={{ marginLeft: "10px" }}>
                      Focus
                    </button>
                  </div>
                </div>
              );
            }
            export default Parent;

--------------------------------------------------------------------------------------------------------------------            
            23. How to perform debouncing ?
            
            import React, { useState, useEffect } from "react";

            function App() {
              const [searchTerm, setSearchTerm] = useState("");
              const [debouncedValue, setDebouncedValue] = useState("");

              useEffect(() => {
                const handler = setTimeout(() => {
                  setDebouncedValue(searchTerm); // Update after delay
                }, 500); // 500ms delay

                return () => {
                  clearTimeout(handler); // Cleanup previous timeout
                };
              }, [searchTerm]);

              return (
                <div>
                  <h3>Search:</h3>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Type to search..."
                  />
                  <p>Debounced Value: {debouncedValue}</p>
                </div>
              );
            }

            export default App;


--------------------------------------------------------------------------------------------------------------------            
            24.Create a component to fetch data from api ?
          
            import React, { useState, useEffect } from "react";

            function DataFetcher() {
              const [data, setData] = useState([]);
              const [loading, setLoading] = useState(true);
              const [error, setError] = useState(null);

              useEffect(() => {
                // Fetch data when component mounts
                fetch("https://jsonplaceholder.typicode.com/posts") // Example API
                  .then((response) => {
                    if (!response.ok) {
                      throw new Error("Network response was not ok");
                    }
                    return response.json();
                  })
                  .then((data) => {
                    setData(data);
                    setLoading(false);
                  })
                  .catch((error) => {
                    setError(error.message);
                    setLoading(false);
                  });
              }, []); // Empty dependency array → runs only once

              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error: {error}</p>;

              return (
                <div>
                  <h3>Fetched Data:</h3>
                  <ul>
                    {data.slice(0, 10).map((item) => (
                      <li key={item.id}>{item.title}</li>
                    ))}
                  </ul>
                </div>
              );
            }

            export default DataFetcher;

--------------------------------------------------------------------------------------------------------------------            
            25.Force a component to rerender with out using useState in react ?
            Example 1:
            If you have a function that needs to run on every render, you can call it inside 
            useEffect without dependencies:

            useEffect(() => {
              console.log("Runs on every render");
            });

            Example 2: using useReducer
            import React, { useReducer } from "react";

            function ForceRenderComponent() {
              const [, forceUpdate] = useReducer(x => x + 1, 0);

              return (
                <div>
                  <h2>Force Re-render Example</h2>
                  <button onClick={forceUpdate}>Force Re-render</button>
                </div>
              );
            }

            export default ForceRenderComponent;


--------------------------------------------------------------------------------------------------------------------            
            26. How to call a method immediately after state is updated or 
                after component is rerendered ?

                
                import React, { useState, useEffect } from "react";

                function App() {
                  const [count, setCount] = useState(0);

                  // This runs after every render when "count" changes
                  useEffect(() => {
                    console.log("State updated! New count:", count);
                    myMethod();
                  }, [count]); // Dependency array ensures it runs after count changes

                  const myMethod = () => {
                    console.log("Method called after state update");
                  };

                  return (
                    <div>
                      <h2>Count: {count}</h2>
                      <button onClick={() => setCount(count + 1)}>Increment</button>
                    </div>
                  );
                }

                export default App;

--------------------------------------------------------------------------------------------------------------------            
            27. How to display number of characters remaining functionality for textarea using react useRef?

            import React, { useState, useRef } from "react";

            function TextAreaWithCounter() {
              const maxChars = 200; // Maximum allowed characters
              const [text, setText] = useState("");
              const textAreaRef = useRef(null);

              const handleChange = () => {
                setText(textAreaRef.current.value);
              };

              const remainingChars = maxChars - text.length;

              return (
                <div style={{ width: "300px" }}>
                  <textarea
                    ref={textAreaRef}
                    value={text}
                    onChange={handleChange}
                    maxLength={maxChars}
                    rows="5"
                    cols="30"
                          placeholder="Type something..."
                  />
                  <p>{remainingChars} characters remaining</p>
                </div>
              );
            }


--------------------------------------------------------------------------------------------------------------------            
            28.Given two dropdowns, select 2nd dropdown options based on value selected in one dropdown ?
            (Load states based on country selected)
            
              import React, { useState } from "react";

              const countryStateData = {
                India: ["Karnataka", "Maharashtra", "Tamil Nadu"],
                USA: ["California", "Texas", "New York"],
                Canada: ["Ontario", "Quebec", "British Columbia"],
              };

              function CountryStateDropdown() {
                const [selectedCountry, setSelectedCountry] = useState("");
                const [states, setStates] = useState([]);

                const handleCountryChange = (e) => {
                  const country = e.target.value;
                  setSelectedCountry(country);
                  setStates(countryStateData[country] || []);
                };

                return (
                  <div>
                    <h3>Select Country and State</h3>
                    <select onChange={handleCountryChange} value={selectedCountry}>
                      <option value="">-- Select Country --</option>
                      {Object.keys(countryStateData).map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>

                    <select disabled={!selectedCountry}>
                      <option value="">-- Select State --</option>
                      {states.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                            ))}
                    </select>
                  </div>
                );
              }

--------------------------------------------------------------------------------------------------------------------            
            29.Perform type checking using prop-types ?
            
              import React from "react";
              import PropTypes from "prop-types";

              function CountryStateDropdown({ countries, onCountryChange }) {
                return (
                  <select onChange={(e) => onCountryChange(e.target.value)}>
                    <option value="">-- Select Country --</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                );
              }

              // ✅ Define prop types
              CountryStateDropdown.propTypes = {
                countries: PropTypes.arrayOf(PropTypes.string).isRequired,
                onCountryChange: PropTypes.func.isRequired,
              };

--------------------------------------------------------------------------------------------------------------------            
            30.Share data between components using context api ?
            
            Check our existing codebase.
            http://localhost:5050/app/session4

--------------------------------------------------------------------------------------------------------------------            
            31.Give an example of optimization using useMemo ?
               Check our existing codebase.
               http://localhost:5050/app/usememo
--------------------------------------------------------------------------------------------------------------------            
            32.Give an example of optimization using usecallbacks in react ?
               Check our existing codebase.
               http://localhost:5050/app/usecallback
--------------------------------------------------------------------------------------------------------------------            
            33.Create an error boundary component in react ?

            1. Create ErrorBoundary Component
            -------------------------------
            import React from "react";

            class ErrorBoundary extends React.Component {
              constructor(props) {
                super(props);
                this.state = { hasError: false };
              }

              static getDerivedStateFromError(error) {
                // Update state so next render shows fallback UI
                return { hasError: true };
              }

              componentDidCatch(error, info) {
                // Log error details (optional)
                console.error("Error caught by ErrorBoundary:", error, info);
              }

              render() {
                if (this.state.hasError) {
                  return <h2>Something went wrong.</h2>;
                }
                return this.props.children;
              }
            }

            2. Use ErrorBoundary in App
            ---------------------------

            import React from "react";
            import ErrorBoundary from "./ErrorBoundary";
            import BuggyComponent from "./BuggyComponent";

            function App() {
              return (
                <div>
                  <h1>Error Boundary Example</h1>
                  <ErrorBoundary>
                    <BuggyComponent />
                  </ErrorBoundary>
                </div>
              );
            }

            export default App;

          3. Example Buggy Component
            ------------------------
            
            import React from "react";

            function BuggyComponent() {
              throw new Error("I crashed!");
              return <div>This will never render</div>;
            }

            export default BuggyComponent;

            Anther Example:
            --------------
            npm install react-error-boundary

            
            import React from "react";
            import { ErrorBoundary } from "react-error-boundary";

            function FallbackComponent({ error, resetErrorBoundary }) {
              return (
                <div>
                  <h2>Something went wrong!</h2>
                  <p>{error.message}</p>
                  <button onClick={resetErrorBoundary}>Try Again</button>
                  </div>
              );
            }

            function BuggyComponent() {
              throw new Error("I crashed!");
            }

            function App() {
              return (
                <ErrorBoundary
                  FallbackComponent={FallbackComponent}
                  onReset={() => {
                    // Reset logic if needed
                  }}
                >
                  <BuggyComponent />
                </ErrorBoundary>
              );
            }



--------------------------------------------------------------------------------------------------------------------            
            34. How to display dropdown value selected by user in another textbox ?

            import React, { useState } from "react";

            function DropdownTextboxExample() {
              const [selectedValue, setSelectedValue] = useState("");

              const handleChange = (e) => {
                setSelectedValue(e.target.value);
              };

              return (
                <div>
                  <h3>Select an option:</h3>
                  <select onChange={handleChange} value={selectedValue}>
                    <option value="">-- Select --</option>
                    <option value="Apple">Apple</option>
                    <option value="Banana">Banana</option>
                    <option value="Orange">Orange</option>
                  </select>

                  <h3>Selected Value:</h3>
                  <input type="text" value={selectedValue} readOnly />
                </div>
              );
            }


--------------------------------------------------------------------------------------------------------------------            
            35.Create a pure component ?
            In React, a Pure Component is one that only re-renders when its props or state change, 
            preventing unnecessary renders.
            For functional components, you can achieve this using React.memo().

            
            import React, { useState } from "react";

            // Pure Component using React.memo
            const PureChild = React.memo(({ value }) => {
              console.log("Child re-rendered");
              return <h3>Value: {value}</h3>;
            });

            function App() {
              const [count, setCount] = useState(0);
              const [text, setText] = useState("");

              return (
                  <div>
                  <h2>Count: {count}</h2>
                  <button onClick={() => setCount(count + 1)}>Increment</button>
                  <br />
                  <input
                    type="text"
                    placeholder="Type something"
                    onChange={(e) => setText(e.target.value)}
                  />
                  <PureChild value={text} />
                </div>
              );
            }



--------------------------------------------------------------------------------------------------------------------            
            36.Create a controlled and uncontrolled component in react ?
            In React, controlled components are those where the form element’s value is managed by React state, 
            while uncontrolled components rely on the DOM to manage their own state (accessed via ref).
            
            Controlled Component Example
            ----------------------------
            import React, { useState } from "react";

            function ControlledComponent() {
              const [inputValue, setInputValue] = useState("");

              return (
                <div>
                      <h3>Controlled Component</h3>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <p>Value: {inputValue}</p>
                </div>
              );
            }

            Uncontrolled Component Example
            ------------------------------
            
            import React, { useRef } from "react";

            function UncontrolledComponent() {
              const inputRef = useRef();

              const handleShowValue = () => {
                alert("Value: $/{inputRef.current.value}"); // double quotes to be replaced with backtick. remove /
              };

              return (
                <div>
                  <h3>Uncontrolled Component</h3>
                  <input type="text" ref={inputRef} />
                  <button onClick={handleShowValue}>Show Value</button>
                </div>
              );
            }

--------------------------------------------------------------------------------------------------------------------            
            37.Create a custom hook using ?
            Check our existing codebase.
            http://localhost:5050/app/fetchdata

--------------------------------------------------------------------------------------------------------------------            
            38.Create a popup using portal ?

            Step 1: Add a modal root in public/index.html
            
            <body>
              <div id="root"></div>
              <div id="modal-root"></div> <!-- Portal target -->
            </body>

            Step 2: Create Modal.js
            
            import React from "react";
            import ReactDOM from "react-dom";

            const Modal = ({ children, onClose }) => {
              return ReactDOM.createPortal(
                <div style={styles.overlay}>
                  <div style={styles.modal}>
                    {children}
                    <button onClick={onClose}>Close</button>
                  </div>
                </div>,
                document.getElementById("modal-root")
              );
            };

            const styles = {
              overlay: {
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                borderRadius: "8px",
                minWidth: "300px",
                textAlign: "center",
              },
            };

            Step 3: Complete App.js

              import React, { useState } from "react";
              import Modal from "./Modal";

              function App() {
                const [showModal, setShowModal] = useState(false);

                return (
                  <div>
                    <h1>React Portal Popup Example</h1>
                    <button onClick={() => setShowModal(true)}>Open Popup</button>

                        >This is a popup!</h2>
                        <p>You can put any content here.</p>
                      </Modal>
                    )}
                  </div>
                );
              }



--------------------------------------------------------------------------------------------------------------------            
            39.Which lifecycle hooks in class component are replaced with useEffect in functional components ? 
            Summary Table
            Class Component Method	      Functional Equivalent with useEffect
            componentDidMount	            useEffect(() => {...}, [])
            componentDidUpdate	          useEffect(() => {...}, [deps])
            componentWillUnmount	        Cleanup function inside useEffect

--------------------------------------------------------------------------------------------------------------------            
            40.Create a pagination component ?

            
            import React from "react";

            function Pagination({ totalPages, currentPage, onPageChange }) {
              const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

              return (
                <div style={{ marginTop: "20px" }}>
                  {pages.map((page) => (
                    <button
                      key={page}
                      onClick={() => onPageChange(page)}
                      style={{
                        margin: "5px",
                                  padding: "8px",
                        backgroundColor: page === currentPage ? "#007bff" : "#f0f0f0",
                        color: page === currentPage ? "#fff" : "#000",
                        border: "1px solid #ccc",
                        cursor: "pointer",
                      }}
                    >
                      {page}
                    </button>
                  ))}
                </div>
              );
            }


--------------------------------------------------------------------------------------------------------------------            
`})}),g.jsx("h1",{children:"37. Custom Hook"}),g.jsx("br",{}),g.jsx("img",{src:"/CustomHook.jpg",width:"90%"})]}),vC=()=>g.jsxs(g.Fragment,{children:[g.jsx("h2",{children:" How to create react application using vite"}),g.jsx("h3",{children:"Using Vite"}),g.jsxs("ol",{children:[g.jsx("li",{children:"npm create vite@latest "}),g.jsx("li",{children:"it will ask project name and variation, give the proper name and variation"}),g.jsx("li",{children:"npm install"}),g.jsx("li",{children:"npm run dev"}),g.jsx("li",{children:"cd my-app"})]}),g.jsx("h3",{children:"Using npx"}),g.jsxs("ol",{children:[g.jsx("li",{children:"npx create-react-app myApp"}),g.jsx("li",{children:"cd myApp"}),g.jsx("li",{children:"npm i"}),g.jsx("li",{children:"npm start"}),g.jsx("li",{children:"npm run build (For Production)"})]}),g.jsx("h3",{children:"Install Extension for React"}),g.jsxs("ol",{children:[g.jsxs("li",{children:[g.jsx("h3",{children:"ESLint "})," "]})," ","is a static code analysis tool for JavaScript and React projects.",g.jsx("br",{}),"Its main job is to find and fix problems in your code automatically"," ",g.jsx("br",{}),"— such as syntax errors, unused variables, or code style issuesX",g.jsxs("li",{children:[g.jsx("h3",{children:"Code Formatter"})," "]}),"Search: Prettier - Code formatter",g.jsx("br",{}),"It will format the code on Save. ",g.jsx("br",{}),"Configure it: File-:Preference-:Setting-:[Search] Format on Save.",g.jsx("br",{}),"✅ Click the checkbox"]}),g.jsx("h3",{children:"Add React Developer Tool"}),g.jsx("a",{href:"https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi",target:"_blank",children:"React Developer Tool"}),g.jsxs("ol",{children:[g.jsx("li",{children:"Click Add to Chrome"}),g.jsx("li",{children:"Then click Add Extension"}),g.jsx("li",{children:"It will install and show up in your extensions list (puzzle icon 🧩 on the top-right of Chrome)"})]})]}),AC=()=>{const d=["apple","banana"],e=["lichi","gabha","pineapple"],t=[...d,e];return g.jsxs(g.Fragment,{children:[g.jsx("p",{children:t.join(",")}),g.jsx("h3",{children:"Other Command"}),g.jsxs("ol",{children:[g.jsx("li",{children:"Rest Operator"}),"function test(v1,v2,...v)",g.jsx("br",{}),"{",g.jsx("br",{}),"console.log(v1);",g.jsx("br",{}),"console.log(v2);",g.jsx("br",{}),"console.log(v);",g.jsx("br",{}),"}",g.jsx("br",{}),"Call the function ",g.jsx("br",{}),'test("x","y","z","1","2","3")',g.jsx("br",{}),"Result:",g.jsx("br",{}),"x",g.jsx("br",{}),"y",g.jsx("br",{}),"[z,1,2,3]",g.jsx("br",{}),g.jsxs("code",{children:[g.jsx("br",{}),`
          Destructuring: 
          const person = {name: "Harry", age: 25 };
          const {name, age} = person;
          `]}),g.jsx("br",{}),g.jsx("br",{}),g.jsx("li",{children:"Spread Operator"}),g.jsx("br",{}),'const fruit =["apple","banana"];',g.jsx("br",{}),'const otherFruit=["lichi","gabha","pineapple"];',g.jsx("br",{}),"const allFruits = [...fruit, otherFruit];",g.jsx("br",{}),"The above syntax merging two array and '...' triple dot symbol called spread operator.",g.jsx("br",{}),"or",g.jsx("br",{}),'const newState = [ ...fruit,"Mosammi"]',g.jsx("br",{}),"State is mutable.",g.jsx("br",{}),g.jsx("li",{children:"map function"}),g.jsx("pre",{children:g.jsx("code",{children:`movies.map(movie => (
<div key={movie.id}>
<p>Movie Title: {movie.title}</p>
</div>
))`})}),g.jsx("li",{children:"Path concaneting"}),g.jsx("code",{children:"<img src={./image/$/{variable}} "}),"-- / is extra after $.",g.jsx("br",{}),g.jsx("li",{children:"input button code"}),g.jsx("pre",{children:g.jsx("code",{children:`
const handleSearchChange=(e)=>{
SetSearchTerm(e.target.value)
};

<input 
type="text"
className="search-input"
placeholder="Search Movies"
value={searchTerm}
onChange={handleSearchChange}
/>
`})}),g.jsx("li",{children:g.jsx("b",{children:"filter"})}),g.jsx("pre",{style:{background:"#f4f4f4",padding:"0px"},children:g.jsx("code",{children:`
const filteredMovies = movies.filter(movie=>
movie.title.toLowerCase().include(searchTerm.toLowerCase()))

Here 'searchTerm' we are updating from input control property value i.e. value={searchTerm}

filteredMovies.map(movie => (
<div key={movie.id}>
<p>Movie Title: {movie.title}</p>
</div>
));
`})}),g.jsx("pre",{children:g.jsx("code",{children:`
Here is testing

f
d
d
d
d
`})})]})]})},SC=()=>g.jsxs(g.Fragment,{children:[g.jsx("h2",{children:"Reducer"}),g.jsx("img",{src:"/UseReducer.jpg",alt:"useReducer",width:"100%"}),g.jsx("pre",{children:g.jsx("code",{children:`Reducer:
Reducer manages the state in a centralized way.
Component- What should happe
Reducer: How it's done.

ticketReducer.js
Action:
1. Add ticket
2. Delete ticket
3. Update ticket

React Reducer
1. Manages state in a centralized way
2. Separating logic from user actions.
3. Dispatch actions from components (handled by reducer)
4. Information gets passed to the reducer in the payload

Code Example:

cartReducer.jsx ------------------------

export const initialCartState = {
  items: []
};

export function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        // Update quantity if already in cart
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          )
        };
      } else {
        return {
          ...state,
          items: [...state.items, action.payload]
        };
      }
    }

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id)
      };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };

    case 'CLEAR_CART':
      return initialCartState;

    default:
      throw new Error(\`Unknown action: \${action.type}\`);
  }
}

Cart.js------------------- 

import React, { useReducer } from 'react';
import { cartReducer, initialCartState } from './cartReducer';

function Cart() {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  // Example product to add
  const product = { id: 1, name: 'Apple iPhone 15', price: 999, quantity: 1 };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Shopping Cart</h2>

      <button onClick={() => dispatch({ type: 'ADD_ITEM', payload: product })}>
        Add iPhone 15
      </button>

      <button onClick={() => dispatch({ type: 'CLEAR_CART' })} style={{ marginLeft: '10px' }}>
        Clear Cart
      </button>

      {state.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {state.items.map(item => (
            <li key={item.id}>
              {item.name} - \${item.price} × {item.quantity}
              <button
                onClick={() =>
                  dispatch({ type: 'REMOVE_ITEM', payload: { id: item.id } })
                }
                style={{ marginLeft: '10px' }}
              >
                Remove
              </button>
              <button
                onClick={() =>
                  dispatch({
                    type: 'UPDATE_QUANTITY',
                    payload: { id: item.id, quantity: item.quantity + 1 }
                  })
                }
                style={{ marginLeft: '5px' }}
              >
                +1
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;



Sorting

const sorted = [...users].sort((a, b) =>
  a.name.localeCompare(b.name)

Explaination:

Step-by-Step Explanation
1️⃣ ...users (Spread Operator)

users is an array (e.g., [{ id: 1, name: "Ali" }, ...]).

...users spreads its elements into a new array.

[...] creates a shallow copy of users.

✅ Why?
Because Array.prototype.sort() mutates the array it is called on.
In React, we should avoid mutating state directly — so we copy first.

2️⃣ .sort((a, b) => ...)

.sort() is a built-in JavaScript array method.

It compares two elements at a time (a and b) and decides their order.

If the function returns:

negative number → a comes before b

zero → order remains unchanged

positive number → b comes before a

3️⃣ a.name.localeCompare(b.name)

localeCompare() is a string method that compares a.name with b.name.

It returns:

negative number if a.name < b.name

zero if equal

positive number if a.name > b.name

It respects alphabetical order and works well with different languages/locales.



React Context

Create Context      App.js

                        -- Component A
                        -- Component B
                            --Component C
 User Context               --Component C



`})})]}),CC=()=>g.jsxs(g.Fragment,{children:[g.jsx("h2",{children:"React Interview Question"}),g.jsxs("ol",{children:[g.jsx("li",{children:"Custome Hook"}),g.jsx("li",{children:"Passing value from parent to child without prop drilling"})]}),g.jsx("h2",{children:".Net Interview Question"}),g.jsxs("ol",{children:[g.jsx("li",{children:"Anti Forgery Token CSRF"}),g.jsx("li",{children:"jwt Implementation"}),g.jsx("li",{children:"CORS"}),g.jsx("li",{children:"Dapper"}),g.jsx("li",{children:"EF"}),g.jsx("li",{children:"Cashing"}),g.jsx("li",{children:"Refresh Caching"}),g.jsx("li",{children:"Return XML format from Action Method"}),g.jsx("li",{children:" Throttling "}),g.jsx("li",{children:"Scenario based"}),'There are two customer say "Gold" and "Silver" and having discount 10% and 5%.',g.jsx("br",{}),"We have some rule for each customer. Write C# programe in such a way that we can ",g.jsx("br",{}),'add new customer say "Platinum" without modifing the existing code.',g.jsx("br",{}),g.jsx("br",{}),"Solution: ",g.jsx("br",{}),"This is a classic Open/Closed Principle (OCP) question from SOLID design principles",g.jsx("pre",{children:g.jsx("code",{children:`
✅ ASP.NET Core Web API with DI and Open/Closed Principle
    1️⃣ Create the Interface and Implementations
    // ICustomer.cs
    public interface ICustomer
    {
        string Name { get; }
        decimal GetDiscount(decimal totalAmount);
    }

    // GoldCustomer.cs
    public class GoldCustomer : ICustomer
    {
        public string Name => "Gold";
        public decimal GetDiscount(decimal totalAmount)
            => totalAmount - (totalAmount * 0.10m);
    }

    // SilverCustomer.cs
    public class SilverCustomer : ICustomer
    {
        public string Name => "Silver";
        public decimal GetDiscount(decimal totalAmount)
            => totalAmount - (totalAmount * 0.05m);
    }

    // PlatinumCustomer.cs (added later without modifying existing code)
    public class PlatinumCustomer : ICustomer
    {
        public string Name => "Platinum";
        public decimal GetDiscount(decimal totalAmount)
            => totalAmount - (totalAmount * 0.15m);
    }

    2️⃣ Create a Resolver Service
    public class CustomerResolver
    {
        private readonly IEnumerable<ICustomer> _customers;

        public CustomerResolver(IEnumerable<ICustomer> customers)
        {
            _customers = customers;
        }

        public ICustomer GetCustomer(string name)
        {
            foreach (var customer in _customers)
            {
                if (customer.Name.Equals(name, StringComparison.OrdinalIgnoreCase))
                    return customer;
            }
            throw new ArgumentException($"Customer type '{name}' not found.");
        }
    }

    3️⃣ Register Services in Program.cs
    var builder = WebApplication.CreateBuilder(args);

    ✅ Register customer types with DI

    builder.Services.AddSingleton<ICustomer, GoldCustomer>();
    builder.Services.AddSingleton<ICustomer, SilverCustomer>();
    builder.Services.AddSingleton<ICustomer, PlatinumCustomer>();
    builder.Services.AddSingleton<CustomerResolver>();

    builder.Services.AddControllers();

    var app = builder.Build();

    app.MapControllers();

    app.Run();

    4️⃣ Create a Controller
    using Microsoft.AspNetCore.Mvc;

    [ApiController]
    [Route("api/[controller]")]
    public class DiscountController : ControllerBase
    {
        private readonly CustomerResolver _resolver;

        public DiscountController(CustomerResolver resolver)
        {
            _resolver = resolver;
        }

        [HttpGet]
        public IActionResult GetDiscount([FromQuery] string customerType, [FromQuery] decimal amount)
        {
            try
            {
                var customer = _resolver.GetCustomer(customerType);
                var finalAmount = customer.GetDiscount(amount);

                return Ok(new
                {
                    Customer = customer.Name,
                    FinalAmount = finalAmount
                });
            }
            catch (ArgumentException ex)
            {
                return BadRequest(new { Error = ex.Message });
            }
        }
    }

    5️⃣ Test with Swagger or Postman

    Once you run the API (dotnet run), you can test:

    GET https://localhost:5001/api/discount?customerType=Gold&amount=1000


    ✅ Sample Response

    {
    "customer": "Gold",
    "finalAmount": 900
    }


Try with Silver, Platinum, or even add a new class (e.g. DiamondCustomer) 
—just implement ICustomer, register it in Program.cs, and no other code needs to change!

Note: -

1️⃣ What is IEnumerable<ICustomer>?

ICustomer is your interface (contract).

IEnumerable<ICustomer> means "a collection of objects that implement ICustomer."

Instead of injecting just one ICustomer, we are asking DI container to give us 
all registered ICustomer implementations.

2️⃣ How Does ASP.NET Core DI Handle This?



When you register services like this in Program.cs:

builder.Services.AddSingleton<ICustomer, GoldCustomer>();
builder.Services.AddSingleton<ICustomer, SilverCustomer>();
builder.Services.AddSingleton<ICustomer, PlatinumCustomer>();


ASP.NET Core’s built-in DI container stores three different registrations for the same interface ICustomer.
When you later request IEnumerable<ICustomer>:

DI resolves all three instances

Builds a collection (list) containing:

1️⃣ GoldCustomer instance

2️⃣ SilverCustomer instance

3️⃣ PlatinumCustomer instance

Passes this list into the CustomerResolver constructor.

So, _customers becomes a list of all registered customer classes.
               
`})}),g.jsx("li",{children:"Repository Pattern"}),g.jsx("img",{src:"/dotnet/Repository.jpg",width:"100%"}),g.jsx("br",{}),"🔎 8️⃣ Why Interviewers Love This Question Because it checks multiple skills:",g.jsx("br",{}),g.jsx("br",{}),"✅Understanding of SOLID Principles (especially SRP, DIP)",g.jsx("br",{}),"✅Knowledge of Dependency Injection",g.jsx("br",{}),"✅Familiarity with EF Core abstraction ",g.jsx("br",{}),"✅Awareness of testing-friendly architecture",g.jsx("br",{}),"✅Real-world project design mindset ",g.jsx("br",{}),g.jsx("br",{}),"💬 9️⃣ Benefits of this Clean Architecture ",g.jsx("br",{})," ",g.jsx("br",{}),"✅ Testable (you can mock repositories easily)",g.jsx("br",{})," ✅ Maintainable (each layer has clear responsibility)",g.jsx("br",{})," ✅ Flexible (change EF to Dapper without touching controllers)",g.jsx("br",{}),"✅ Scalable (add new entities and services cleanly)",g.jsx("br",{}),g.jsx("br",{})]}),g.jsx("br",{}),g.jsx("h3",{children:" Another Example of Factory Pattern"}),g.jsx("pre",{children:g.jsx("code",{children:`
            CustomerDiscountSolution/
            │
            ├── src/
            │   ├── CustomerDiscount.Domain/
            │   │   ├── Entities/
            │   │   │   └── Customer.cs
            │   │   ├── Interfaces/
            │   │   │   └── ICustomer.cs
            │   │   └── Rules/
            │   │       ├── GoldCustomer.cs
            │   │       ├── SilverCustomer.cs
            │   │       ├── PlatinumCustomer.cs   ← new one (extension)
            │   │       └── CustomerResolver.cs
            │   │
            │   ├── CustomerDiscount.Application/
            │   │   ├── Interfaces/
            │   │   │   └── ICustomerService.cs
            │   │   └── Services/
            │   │       └── CustomerService.cs
            │   │
            │   ├── CustomerDiscount.Infrastructure/
            │   │   ├── Data/
            │   │   │   └── CustomerDbContext.cs  (if using DB)
            │   │   └── Repositories/
            │   │       └── CustomerRepository.cs
            │   │
            │   ├── CustomerDiscount.API/
            │   │   ├── Controllers/
            │   │   │   └── CustomerController.cs
            │   │   ├── Program.cs
            │   │   └── appsettings.json
            │   │
            │   └── CustomerDiscount.Tests/
            │       └── CustomerServiceTests.cs
            │
            └── CustomerDiscount.sln
            🧩 Layer-by-Layer Breakdown
            1️⃣ Domain Layer
            📁 CustomerDiscount.Domain

            This layer contains core business logic and rules.

            🔹 Interfaces/ICustomer.cs
            csharp
            Copy code
            namespace CustomerDiscount.Domain.Interfaces
            {
                public interface ICustomer
                {
                    string Name { get; }
                    decimal GetDiscount(decimal totalAmount);
                }
            }
            🔹 Rules/GoldCustomer.cs
            csharp
            Copy code
            using CustomerDiscount.Domain.Interfaces;

            namespace CustomerDiscount.Domain.Rules
            {
                public class GoldCustomer : ICustomer
                {
                    public string Name => "Gold";
                    public decimal GetDiscount(decimal totalAmount) => totalAmount * 0.10M;
                }
            }
            🔹 Rules/SilverCustomer.cs
            csharp
            Copy code
            using CustomerDiscount.Domain.Interfaces;

            namespace CustomerDiscount.Domain.Rules
            {
                public class SilverCustomer : ICustomer
                {
                    public string Name => "Silver";
                    public decimal GetDiscount(decimal totalAmount) => totalAmount * 0.05M;
                }
            }
            🔹 Rules/PlatinumCustomer.cs (New Customer)
            csharp
            Copy code
            using CustomerDiscount.Domain.Interfaces;

            namespace CustomerDiscount.Domain.Rules
            {
                public class PlatinumCustomer : ICustomer
                {
                    public string Name => "Platinum";
                    public decimal GetDiscount(decimal totalAmount) => totalAmount * 0.15M;
                }
            }
            🔹 Rules/CustomerResolver.cs
            csharp
            Copy code
            using CustomerDiscount.Domain.Interfaces;

            namespace CustomerDiscount.Domain.Rules
            {
                public class CustomerResolver
                {
                    private readonly IEnumerable<ICustomer> _customers;

                    public CustomerResolver(IEnumerable<ICustomer> customers)
                    {
                        _customers = customers;
                    }

                    public ICustomer GetCustomer(string name)
                    {
                        return _customers.FirstOrDefault(c => 
                            c.Name.Equals(name, StringComparison.OrdinalIgnoreCase));
                    }
                }
            }
            2️⃣ Application Layer
            📁 CustomerDiscount.Application

            Handles use cases and orchestrates domain logic.

            🔹 Services/CustomerService.cs
            csharp
            Copy code
            using CustomerDiscount.Domain.Interfaces;
            using CustomerDiscount.Domain.Rules;

            namespace CustomerDiscount.Application.Services
            {
                public class CustomerService
                {
                    private readonly CustomerResolver _resolver;

                    public CustomerService(CustomerResolver resolver)
                    {
                        _resolver = resolver;
                    }

                    public decimal CalculateDiscount(string customerType, decimal amount)
                    {
                        var customer = _resolver.GetCustomer(customerType);

                        if (customer == null)
                            throw new Exception("Invalid customer type");

                        return customer.GetDiscount(amount);
                    }
                }
            }
            3️⃣ API Layer
            📁 CustomerDiscount.API

            Handles endpoints and dependency injection.

            🔹 Controllers/CustomerController.cs
            csharp
            Copy code
            using Microsoft.AspNetCore.Mvc;
            using CustomerDiscount.Application.Services;

            namespace CustomerDiscount.API.Controllers
            {
                [ApiController]
                [Route("api/[controller]")]
                public class CustomerController : ControllerBase
                {
                    private readonly CustomerService _service;

                    public CustomerController(CustomerService service)
                    {
                        _service = service;
                    }

                    [HttpGet("discount")]
                    public IActionResult GetDiscount(string type, decimal amount)
                    {
                        var discount = _service.CalculateDiscount(type, amount);
                        return Ok(new { CustomerType = type, Discount = discount });
                    }
                }
            }
            🔹 Program.cs
            csharp
            Copy code
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddControllers();

            // Register all customer types (OCP in action)
            builder.Services.AddSingleton<ICustomer, GoldCustomer>();
            builder.Services.AddSingleton<ICustomer, SilverCustomer>();
            builder.Services.AddSingleton<ICustomer, PlatinumCustomer>();

            // Register resolver and service
            builder.Services.AddSingleton<CustomerResolver>();
            builder.Services.AddSingleton<CustomerService>();

            var app = builder.Build();

            app.MapControllers();

            app.Run();
            4️⃣ Infrastructure Layer (Optional)
            If persistence is needed — this layer stores DBContext, repository, etc.

            For this logic-based scenario, it’s optional.

            ⚙️ How OCP Is Achieved
            Each customer type (GoldCustomer, SilverCustomer, PlatinumCustomer) implements the same interface (ICustomer).

            The system depends only on the interface, not concrete classes.

            To add a new type, e.g. DiamondCustomer, you create a new class — no need to edit existing ones.

            You just register it in DI (or use reflection to auto-register).

            ✅ Hence: open for extension, closed for modification.

            ✅ Summary
            Layer	Responsibility	Example Files
            Domain	Core business logic, rules	ICustomer, GoldCustomer, CustomerResolver
            Application	Use cases / services	CustomerService.cs
            Infrastructure	Data access or external dependencies	CustomerDbContext.cs
            API	Presentation / endpoints	CustomerController.cs, Program.cs

            `})})]}),by=P.createContext(),xC=()=>g.jsxs(g.Fragment,{children:[g.jsx("h1",{children:" [Use of useContext]"}),g.jsx("img",{src:"/UseContext.jpg",alt:"useReducer",width:"100%"}),g.jsxs("div",{children:[g.jsx(wC,{}),g.jsx(TC,{})]})]});function wC(){return g.jsx(g.Fragment,{children:g.jsxs("div",{className:"box",children:[g.jsx("h4",{children:"Inside Component A"}),g.jsx(EC,{})]})})}function EC(){return g.jsx(g.Fragment,{children:g.jsxs("div",{className:"box",children:[g.jsx("h4",{children:"Inside Component B"}),g.jsxs(by.Provider,{value:"Hello useContext Details",children:[g.jsx(bg,{}),g.jsx(bg,{})]})]})})}function bg(){const d=P.useContext(by);return g.jsx(g.Fragment,{children:g.jsx("div",{className:"box",children:g.jsxs("h4",{children:["In Component Z:Here we received the useContext value: ",d]})})})}function TC(){return g.jsxs(g.Fragment,{children:[g.jsx("h2",{children:"Below are the code explained"}),g.jsx("pre",{children:g.jsx("code",{children:`
In ManageContext.jsx
---------------------
import {createContext} from "react"; 
const MessageContext = createContext(); 
export default MessageContext;

-----------------------------------------------------
          
import React from "react";
import { useContext } from "react";
import MessageContext from "../utilities/messageContext";
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/light";

const Session4 = () => {
  return (
    <>
      <div>
        <h1> Use of useContext</h1>

        <ComponentA></ComponentA>

        <ComponentC />
      </div>
    </>
  );
};

export default Session4;

function ComponentA() {
  return (
    <>
      <div className="box">
        <h4>Inside Component A</h4>
        <ComponentB />
      </div>
    </>
  );
}

function ComponentB() {
  const messageInfo = "Hello useContext Details";

  return (
    <>
      <div className="box">
        <h4>Inside Component B</h4>
        <MessageContext.Provider value={messageInfo}>
          <ComponentZ />
          <ComponentZ />
        </MessageContext.Provider>
      </div>
    </>
  );
}

function ComponentZ() {
  const message2 = useContext(MessageContext);

  return (
    <>
      <div className="box">
        <h4>
          In Component Z:Here we received the useContext value: {message2}
        </h4>
      </div>
    </>
  );
}

    `})})]})}const _C=()=>g.jsxs(g.Fragment,{children:[g.jsx("h1",{children:"Java Script"}),g.jsx("pre",{children:g.jsx("code",{children:`const promise = new Promise((resolve,rejected) => {
   setTimeout(()=> {
   rejected("Operation failed");
   ),2000};
   )};

promise
   .then((result)=> {
   console.log(result);
   })
   .catch((err)=>{
    console.log(err);
   });

----------------------------------
function fetchdata() {
return fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((result)=> result.json())
.then((data)=> console.log(data))

.catch((err)=>{
  console.log(err);
 });
}
----------------------------------

async function fetchDataAsync() {

try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const json =response.json();
    console.log(json);
    )
    }
catch(err){
  console.log(err);
    }
}



-----------------------------------------
Axios

--------------------------------------------------
import axios from "axios";

const api = axios.create({
   baseURL:"https://jsonplaceholder.typicode.com",
 });

const getPosts =()=> api.get("/posts");

export {getPosts};
-------------------------------------------------

import {getPosts} from "../services/postService";

export default function Posts(){
const [posts, setPosts] = useState([]);

useEffect(()=> {

getPosts()
.then((result)=> {
   console.log(result);
   setPosts(result.data);
  })
.catch((err)=> {
  console.error(err);
 });
}, {});
------------------------------------------------
String interpolation:

const name = "Raj";
const welcomMessage = \`Welcome: \${name}\`;

console.log(welcomMessage);

Result:
Welcome: Raj


      <h2>Import & Export in JavaScript</h2>
      <h2>Array find()</h2>
      Example:

const todos =[
  { id: 1, subject:"Python", completed:false}
  { id: 2, subject:"Java", completed:false},
  { id: 3, subject:"Node", completed:true},
]

const todoById = todos.find((todo)=>todo.id===2)

console.log(todoById);

<h2>Array filter()</h2>

const filteredArray = todos.filter((m)=>m.completed===fals && m.subject==="Java");
const filteredArray = todos.filter((m)=>m.subject.includes("Ja"));

Sorting:

Sorting

const sorted = [...users].sort((a, b) =>
  a.subject.localeCompare(b.subject))

const sorted = [...users].sort((a, b) => a.id - b.id)
  

<h2>forEach Loop()</h2>

  todos.forEach((m)=> { m.completed=true});

  including index:

  todos.forEach((m, index)=> {
     console.log(index + " : " +  m.subject)
    })

  
Array Map

const mappedTodos = todos.map((todo)=> {

     return{id:todo.id, desc: todo.subject};
});

Array Map

const mappedTodos = todos.map((todo)=> {

     return{...todo, priority: "High"};
});

const mappedTodos = todos.map((todo)=> {

     return{...todo, subject: "High"};   //existing subject will be overwritten
}); 
--------------------------------------------------------------------

`})})]}),RC=()=>{const[d,e]=P.useState(0),[t,s]=P.useState([]);function r(){e(d+1)}function o(){e(d-1)}const l=()=>{s(p=>[...p,"New Todo"])},u=p=>{console.log("Calculating...");for(let m=0;m<1e9;m++)p+=1;return p},h=P.useMemo(()=>u(d),[d]);return g.jsxs(g.Fragment,{children:[g.jsx("b",{children:"Code Example:"}),g.jsx("pre",{children:g.jsx("code",{children:`
  const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
  };

   const calculation = useMemo(() => {
  return expensiveCalculation(count);
  }, [count]);
 -----------------
  In-Html

  The current value of count is: {count}
  <br />
  Current value of expensive is {calculation}
`})}),g.jsxs("div",{children:[g.jsx("div",{style:{textAlign:"center"},children:g.jsx("img",{src:"/UseMemo.jpg",alt:"use memo",width:"70%"})}),g.jsxs("div",{style:{display:"flex",marginLeft:"40px"},children:[g.jsxs("div",{style:{textAlign:"center",width:"100%",backgroundColor:"green"},children:[g.jsx("h2",{children:"My Todos"}),t.map((p,m)=>g.jsxs("p",{children:[p," ",m]},m)),g.jsx("button",{onClick:l,children:"Add Todo"})]}),g.jsxs("div",{style:{textAlign:"center",marginLeft:"20px",backgroundColor:"grey",width:"100%"},children:[g.jsxs("h1",{children:["Use of"," ",g.jsx("span",{style:{textDecoration:"underline"},children:"useMemo"})," ","Example"]}),"The current value of count is: ",d,g.jsx("br",{}),"Current value of expensive is ",h,g.jsx("br",{}),g.jsx("button",{className:"btn btn-success",onClick:r,children:"Increment"}),g.jsx("button",{onClick:o,children:"Decrement"})]})]})]})]})},DC=new Date,MC=({todos:d,addTodo:e})=>{const t=DC.getSeconds(),s=Math.floor(Math.random()*100);return g.jsxs(g.Fragment,{children:[g.jsxs("h1",{children:["Child Component in separate file ",t]}),console.log({randomNumber:s}),console.log("Child triggered"),d.map((r,o)=>g.jsx("p",{children:r+o},o)),g.jsx("button",{onClick:e,children:"Add To Do"}),g.jsx("br",{})]})},kC=P.memo(MC),LC=()=>{const[d,e]=P.useState(0),[t,s]=P.useState(["Hi this is first"]),r=P.useCallback(()=>{s(l=>[...l,"Item No. : "])},[t]);function o(){e(d+1)}return g.jsxs(g.Fragment,{children:[g.jsx("img",{src:"/UseCallback.jpeg",width:"95%",alt:"Image"}),g.jsx(kC,{todos:t,addTodo:r}),g.jsx("h1",{children:"Use of useCallback Parent Component"}),"Count: ",d,g.jsx("br",{}),g.jsx("button",{onClick:o,children:"Increment"}),g.jsx("br",{}),g.jsx("br",{}),g.jsx("br",{})]})},PC=NA.memo(({value:d})=>g.jsxs(g.Fragment,{children:[g.jsx("h1",{children:"Use of memo Child Component"}),g.jsx("br",{}),g.jsxs("h3",{children:["Child Component, Value come from parent: ",d]}),g.jsx("br",{}),console.log("..called from child component")]})),OC=()=>{const[d,e]=P.useState(0),[t,s]=P.useState("send to child");return g.jsxs(g.Fragment,{children:[g.jsx("h1",{children:"Use of memo Parent Component"}),g.jsx("input",{placeholder:"Not related to child value",type:"text",value:d,onChange:()=>e(event.target.value)}),g.jsx("input",{placeholder:"Related to child value",type:"text",value:t,onChange:()=>s(event.target.value)}),g.jsx("br",{}),g.jsx("hr",{}),g.jsx(PC,{value:t}),g.jsx("br",{})]})},NC=()=>g.jsxs(g.Fragment,{children:[g.jsx("h2",{children:"Some More SQL"}),"USE master; ",g.jsx("br",{}),"GO ",g.jsx("br",{}),"ALTER DATABASE Test SET SINGLE_USER WITH ROLLBACK IMMEDIATE; ",g.jsx("br",{}),"ALTER DATABASE Test SET MULTI_USER;",g.jsx("br",{}),"RESTORE DATABASE Test WITH RECOVERY",g.jsx("br",{}),g.jsxs("ol",{children:[g.jsx("li",{children:"Activity Monitor"}),g.jsx("img",{src:"/sql/activitymonitor.jpeg",width:"20%",height:"20%"}),g.jsx("li",{children:"SQL Server Profiler"}),g.jsx("img",{src:"/sql/profiler.jpg",width:"20%",height:"20%"}),g.jsx("li",{children:"Execution Plan"}),g.jsx("img",{src:"/sql/execution.jpg",width:"20%",height:"20%"}),g.jsx("li",{children:"Extended Event"}),g.jsx("li",{children:"SQL Server Report"})]}),g.jsxs("ol",{children:[g.jsx("li",{children:g.jsx("a",{href:"https://youtu.be/26Q6X8PrxTc",target:"_blank",children:"MS SQL Activity Monitor"})}),g.jsx("li",{children:"SQL Server Tech & Art: https://www.youtube.com/channel/UCzrP6bxiZDSbp8bb2iOPVoA"}),g.jsx("li",{children:"SQL Server Report: https://youtu.be/Cv0QLUuuR1A"}),g.jsx("li",{children:"Query Tuning"}),g.jsx("pre",{children:g.jsx("code",{children:`Once you find the queries to be tuned, check if the queries are
following the basic rules for performance:
            
            Use the where condition to limit scanning scope 
            Don’t select everything
            Use inner join instead of correlated subqueries 
            Try to avoid HAVING and use WHERE
            Use inner join instead of two tables in the where clause
            DMF/DMV: https://www.youtube.com/watch?v=NUkYAOqwdpA
            select * from sys.dm_db/ dm_tran / dm_exec / dm_os
            select * from sys.dm_tran_database_transactions

            Extended Events: https://youtu.be/H4pvgXfcBfU

            `})}),g.jsx("li",{children:"Execution Flow"}),"From - Where - Group By - Having - Select - order by - distinct - top"]}),g.jsx("hr",{}),g.jsx("img",{src:"/WhereHaving.jpeg",width:"80%"}),g.jsx("hr",{}),g.jsx("li",{children:" Azure Service Bus: https://youtu.be/XqhM9vfDmqQ"}),g.jsx("img",{src:"/ServiceBus.jpg",alt:"Service Bus",width:"90%"}),g.jsx("br",{}),"Question: ",g.jsx("br",{}),"1. How to get Deadlock information.",g.jsx("br",{}),"2. SSAS som hand on.: Cube and Dimension",g.jsx("br",{}),"3. Partition",g.jsx("br",{}),g.jsx("pre",{children:g.jsx("code",{children:`


JD
Design, implement, and maintain OLTP and OLAP database solutions on Microsoft SQL Server. 
Build complex stored procedures, functions, views, and SQL Server Integration Services (SSIS) packages.
Optimize database performance through indexing strategies, query tuning, partitioning, and statistics management.
Lead schema design reviews, and enforce best practices.
Perform root-cause analysis, and deliver preventive solutions.

Technical proficiency
Expert-level T-SQL with deep understanding of joins, temp tables, execution plans, 
locking, isolation levels, transactions and concurrency control.
Good experience in tuning queries
5+ years hands-on experience with Microsoft SQL Server in enterprise environments
Strong problem-solving, communication, and stakeholder management skills
Tools & ecosystem
Microsoft SQL Server 2016/2017/2019 / Azure SQL
Visual Studio Database Projects, SSDT          
          
          `})}),g.jsx("br",{}),g.jsx("pre",{children:g.jsx("code",{children:`
Key Points About DCL:
•	Scope: GRANT and REVOKE commands can be applied to individual users or roles.
A login is at the SQL Server instance level (allows access to the server).
CREATE LOGIN TestLogin WITH PASSWORD = 'StrongP@ssword123!';
if you want to use a Windows user/group:
CREATE LOGIN [DOMAINUserName] FROM WINDOWS; 
A user is inside a database and is mapped to a login.
USE YourDatabase;
CREATE USER TestUser FOR LOGIN TestLogin;
Roles are used to group permissions.
CREATE ROLE DataReaders;
Add User to Role
ALTER ROLE DataReaders ADD MEMBER TestUser;
Grant Permissions to Role
GRANT INSERT, UPDATE, DELETE ON SCHEMA :: dbo TO DataReaders;

✅ Summary Workflow:
1.	Create Login (server level) → CREATE LOGIN
2.	Create User (database level) → CREATE USER
3.	Create Role (database level) → CREATE ROLE
4.	Grant permissions to Role → GRANT
5.	Add User to Role → ALTER ROLE ADD MEMBER
    
    `})})]}),IC="_box_1qhnz_1",ul={box:IC},jC=()=>g.jsxs(g.Fragment,{children:[g.jsx("h3",{className:ul.box,children:"Transport Department E Drive - Desktop - Rest -GyansysCopy"}),g.jsx("hr",{}),g.jsx("img",{src:"/Vehicle/TransportDepartment.jpeg",width:"90%"}),g.jsx("br",{}),g.jsx("h3",{className:ul.box,children:"Insurance"}),g.jsx("hr",{}),g.jsx("img",{src:"/Vehicle/Insurance.jpeg",width:"90%"}),g.jsx("br",{}),g.jsx("h3",{className:ul.box,children:"Invoice"}),g.jsx("hr",{}),g.jsx("img",{src:"/Vehicle/Invoice.jpeg",width:"90%"}),g.jsx("br",{}),g.jsx("h3",{className:ul.box,children:"OnlineDoctor"}),g.jsx("hr",{}),g.jsx("img",{src:"/Vehicle/OnlineDoctor.jpeg",width:"90%"})]}),BC="/azure/AppService.pdf",FC="/azure/AppService.jpeg",UC="/azure/AzureDevOps.pdf",HC="/azure/DevOps.jpeg",zC=[{id:1,pdfLink:BC,description:"Azure Apps: Placing two HTML elements side-by-side without using CSS can be achieved by .",image:FC},{id:2,pdfLink:UC,description:"DevOps Placing two HTML elements side-by-side without using CSS can be achieved by",image:HC}],GC=()=>g.jsxs(g.Fragment,{children:[g.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"},children:[g.jsx("div",{children:g.jsx("h3",{children:" App Service:"})}),g.jsxs("div",{style:{display:"flex"},children:[g.jsx("div",{style:{padding:"10px"},children:g.jsx("a",{href:"/azure/AppService.pdf",target:"_blank",alt:"App Service",children:"App Service"})}),g.jsx("div",{style:{padding:"10px"},children:g.jsx("a",{href:"/azure/AzureDevOps.pdf",target:"_blank",alt:"App Service",children:"AzureDevOps:"})})]})]}),g.jsx("div",{style:{backgroundColor:"ThreeDFace",display:"flex",width:"100%",padding:"10px"},children:zC.map(({id:d,pdfLink:e,description:t,image:s})=>g.jsx("div",{className:"card",children:g.jsxs("div",{style:{padding:"3px",backgroundColor:"white"},children:[g.jsxs("div",{style:{textAlign:"center"},children:[g.jsxs("h3",{children:["Topic No: ",d]}),g.jsx("img",{src:s,alt:"image",width:"50%",height:"50%"})]}),g.jsxs("p",{children:[g.jsx("b",{children:"Description:"})," ",t]}),g.jsx("a",{href:e,target:"_blank",children:"PDF Link"})]},d)}))})]}),qC="/resigned/ReResignation.pdf",VC="/resigned/2_0994_Acceptance.pdf",YC="/resigned/3_Re_0994_ExitFormalities.pdf",XC="/resigned/4_NDASeparationAgreementSigned.pdf",WC="/resigned/5_NDASeparationAgreementSignedDone.pdf",$C="/resigned/6_NDASeparationAgreement_0994Audit.pdf",KC="/resigned/fullfinal.pdf",QC="./resigned/Experience_Relieving_Letter.pdf",JC="/resigned/Form16AS_AJBPA9805B-2026.pdf",ZC="/resigned/Gyansys_Offer.pdf",e0="/resigned/SalaryRevision_20250994.pdf",t0="/resigned/Payslip_Apr_2025.pdf",n0="/resigned/Payslip_May_2025.pdf",i0="/resigned/Payslip_Jun_2025.pdf",s0="/resigned/Payslip_Jul_2025.pdf",r0="/resigned/Payslip_Aug_2025.pdf",a0="/resigned/Payslip_Sep_2025.pdf",o0="/resigned/RetainershipAgreement_Khalid Akhter.pdf",l0="/resigned/Invoice_MonthName2025.xlsx",c0="/resigned/AMINDContingentWorkerAgreement_Khalid_Akhter.pdf",u0="/resigned/PreEmploymentScreening_Khalid_Akhter.pdf",d0="/resigned/OnboardingGuideline_AMAT.pdf",h0="/resigned/contractorBills/Inv_Oct_2025.pdf",f0="/resigned/contractorBills/NEFT_Oct_2025.pdf",p0=[{id:1,pdfLink:qC,description:"Resignation Letter"},{id:2,pdfLink:VC,description:"Acceptance Letter"},{id:3,pdfLink:YC,description:"Exit Formalities"},{id:4,pdfLink:XC,description:"NDA Separation"},{id:5,pdfLink:WC,description:"NDA Separation Signed"},{id:6,pdfLink:$C,description:"Audit"},{id:7,pdfLink:KC,description:"Full & Final Shuttlement"},{id:8,pdfLink:QC,description:"Experience-Relieving Letters"},{id:9,pdfLink:JC,description:"Form 16AS, Income Tax Dept."}],m0=[{id:1,pdfLink:ZC,description:"Gyansys Offer Letter"},{id:2,pdfLink:e0,description:"Gyansys Salary Revision"},{id:3,pdfLink:t0,description:"Salary Slip April, 2025"},{id:4,pdfLink:n0,description:"Salary Slip May , 2025"},{id:5,pdfLink:i0,description:"Salary Slip June, 2025"},{id:6,pdfLink:s0,description:"Salary Slip July, 2025"},{id:7,pdfLink:r0,description:"Salary Slip August, 2025"},{id:8,pdfLink:a0,description:"Salary Slip September, 2025"}],g0=[{id:1,pdfLink:o0,description:"Consultant Agreement"}],y0=[{id:1,pdfLink:c0,description:"Worker Agreement 3"},{id:2,pdfLink:u0,description:"Employment Screening 3"},{id:3,pdfLink:d0,description:"AMAT Onboarding Guideline"}],b0=[{id:1,pdfLink:l0,description:"Invoice Format Contractors: get it approved from your AE, can't consider bill without it."},{id:2,pdfLink:h0,description:"Contractor Advice Oct 2025"},{id:3,pdfLink:f0,description:"Contractor NEFT Oct 2025"},{id:4,pdfLink:"/resigned/contractorBills/public/resigned/contractorBills/Payee Advice Dated 06-Nov-2025 for Khalid AkhterKhalid Akhter , Cust Ref_ PIGYNSIN02A24271 , UTR_ SCBLN52025110601092800.msg",description:"Contractor NEFT Now 2025"}],v0=()=>g.jsxs(g.Fragment,{children:[g.jsx("h2",{children:"Contractor Advice/NEFT"}),g.jsxs("div",{children:["Send invoice to ap.in@gyansys.com and Fill replicon and get approver by respective approver ",g.jsx("br",{})]}),g.jsx("div",{className:"gyancontainer",children:b0.map(({id:d,pdfLink:e,description:t})=>g.jsx("div",{className:"gyancard",children:g.jsxs("div",{children:[g.jsxs("div",{className:"cardheader",children:["Step: ",d]}),g.jsx("br",{}),g.jsxs("div",{className:"carddescription",children:[g.jsx("b",{children:"Description:"})," ",t]}),g.jsx("br",{}),g.jsx("div",{className:"cardlink",children:g.jsx("a",{href:e,target:"_blank",children:g.jsx("span",{className:"oval-text",children:"PDF Link"})})})]},d)}))}),g.jsx("h2",{children:"AMAT Process: Oct 2025"}),g.jsx("div",{className:"gyancontainer",children:y0.map(({id:d,pdfLink:e,description:t})=>g.jsx("div",{className:"gyancard",children:g.jsxs("div",{children:[g.jsxs("div",{className:"cardheader",children:["Step: ",d]}),g.jsx("br",{}),g.jsxs("div",{className:"carddescription",children:[g.jsx("b",{children:"Description:"})," ",t]}),g.jsx("br",{}),g.jsx("div",{className:"cardlink",children:g.jsx("a",{href:e,target:"_blank",children:g.jsx("span",{className:"oval-text",children:"PDF Link"})})})]},d)}))}),g.jsx("h2",{children:"Gyansys Consultant Process"}),g.jsx("div",{className:"gyancontainer",children:g0.map(({id:d,pdfLink:e,description:t})=>g.jsx("div",{className:"gyancard",children:g.jsxs("div",{children:[g.jsxs("div",{className:"cardheader",children:["Step: ",d]}),g.jsx("br",{}),g.jsxs("div",{className:"carddescription",children:[g.jsx("b",{children:"Description:"})," ",t]}),g.jsx("br",{}),g.jsx("div",{className:"cardlink",children:g.jsx("a",{href:e,target:"_blank",children:g.jsx("span",{className:"oval-text",children:"PDF Link"})})})]},d)}))}),g.jsx("h2",{children:"Gyansys Resignation Documents"}),g.jsx("div",{className:"gyancontainer",children:p0.map(({id:d,pdfLink:e,description:t})=>g.jsx("div",{className:"gyancard",children:g.jsxs("div",{children:[g.jsxs("div",{className:d%2===0?"cardheader":"cardheader1",children:["Step: ",d]}),g.jsx("br",{}),g.jsxs("div",{className:"carddescription",children:[g.jsx("b",{children:"Description:"})," ",t]}),g.jsx("br",{}),g.jsx("div",{className:"cardlink",children:g.jsx("a",{href:e,target:"_blank",children:g.jsx("span",{className:d%2===0?"oval-text":"oval-text1",children:"PDF Link"})})})]},d)}))}),g.jsx("h2",{children:"Gyansys Salary Slips"}),g.jsx("div",{className:"gyancontainer",children:m0.map(({id:d,pdfLink:e,description:t})=>g.jsx("div",{className:"gyancard",children:g.jsxs("div",{children:[g.jsxs("div",{className:"cardheader",children:["Step: ",d]}),g.jsx("br",{}),g.jsxs("div",{className:"carddescription",children:[g.jsx("b",{children:"Description:"})," ",t]}),g.jsx("br",{}),g.jsx("div",{className:"cardlink",children:g.jsx("a",{href:e,target:"_blank",children:g.jsx("span",{className:"oval-text",children:"PDF Link"})})})]},d)}))}),g.jsx("br",{})]}),A0="/sql/SQLDMV.pdf",S0="/sql/SQLLogShipping.mp4",C0="/sql/SQLQueryOptimization.pdf",x0="/sql/SQLReplication.mp4",w0="/sql/SQLServer_Jan172025.pdf",E0="/sql/SQLServer_Jan202025.pdf",T0="/sql/SQLServer_Jan212025.pdf",_0="/sql/SQLServer_Jan222025.pdf",R0="/sql/SQLServer_Jan232025.pdf",D0="/sql/SQLServer_Jan242025.pdf",M0="/sql/SQLServer_Jan272025.pdf",k0="/sql/ACID_IsolationLevel.pdf",L0="/sql/Reminder_Duplicate_Greatest.pdf",P0="/sql/SQL_ExtendedEvents.pdf",O0="/sql/SQL_MonitoringTroubleshooting.pdf",N0="/sql/SQL_Statistics.pdf",Xt="/sql/pdfImage.jpg",vg="/sql/videoImage.jpg",I0=[{id:1,pdfLink:A0,description:"SQL DMF/DMA DMV (Dynamic Management View) is a system view in SQL Server that returns real-time information about the server’s health, performance, and internal state — such as CPU usage, memory grants, I/O stats, query execution, locking, and indexes. Think of DMVs as “virtual tables” that expose diagnostic data from SQL Server’s internal engine.",pdfimage:Xt},{id:2,pdfLink:S0,description:"Log Shipping Log Shipping in SQL Server is a high-availability and disaster recovery (HA/DR) technique where transaction log backups from a primary (source) database are automatically copied and restored to one or more secondary (standby) databases on different servers.",pdfimage:vg},{id:3,pdfLink:C0,description:"Query Optimization in SQL Server is the process of choosing the most efficient way to execute a SQL query by analyzing different possible execution plans and selecting the one that uses the least amount of resources (CPU, memory, I/O, and time).",pdfimage:Xt},{id:4,pdfLink:x0,description:"SQLReplicationMP",pdfimage:vg},{id:5,pdfLink:w0,description:"SQL17JanPDF",pdfimage:Xt},{id:6,pdfLink:E0,description:"SQL20JanPDF",pdfimage:Xt},{id:7,pdfLink:T0,description:"SQL21JanPDF",pdfimage:Xt},{id:8,pdfLink:_0,description:"SQL22JanPDF",pdfimage:Xt},{id:9,pdfLink:R0,description:"SQL23JanPDF",pdfimage:Xt},{id:10,pdfLink:D0,description:"SQL24JanPDF",pdfimage:Xt},{id:11,pdfLink:M0,description:"SQL27JanPDF",pdfimage:Xt},{id:12,pdfLink:k0,description:"ACIDPDF",pdfimage:Xt},{id:13,pdfLink:L0,description:"SQLReminderPDF",pdfimage:Xt},{id:14,pdfLink:P0,description:"ExtendedEventPDF",pdfimage:Xt},{id:15,pdfLink:O0,description:"SQLMonitoringPDF",pdfimage:Xt},{id:16,pdfLink:N0,description:"SQLStatisticsPDF",pdfimage:Xt}],j0=()=>g.jsxs(g.Fragment,{children:[g.jsx("h1",{children:" SQL Guideline for Developer/DBA"}),g.jsx("li",{children:g.jsx(Xe,{to:"/app/dml",children:"Some More SQL"})}),g.jsx("div",{className:"container",children:I0.map(({id:d,pdfLink:e,description:t,pdfimage:s})=>g.jsx("div",{className:"sqlcard",children:g.jsxs("div",{children:[g.jsxs("div",{style:{width:"100%",backgroundColor:"lightblue",fontSize:"19px"},children:["Topic: ",d]}),g.jsx("br",{}),g.jsx("img",{src:s,alt:"pdf image",width:"25%",height:"25%"}),g.jsx("br",{}),g.jsxs("div",{style:{padding:"10px",textAlign:"left"},children:[g.jsx("b",{children:"Description:"})," ",t," "]}),g.jsx("br",{}),g.jsx("div",{style:{backgroundColor:"rgb(116, 200, 137)",textAlign:"center",height:"4vh"},children:g.jsx("a",{href:e,target:"_blank",children:g.jsx("b",{children:"PDF Link"})})})]},d)}))})]}),B0=`
    ------------------------REPOSITORY PATTERN----------------------
    
    
    The Repository Pattern in C# is a design pattern that provides a 
    clean abstraction between the data access layer and the business 
    logic layer of an application. Instead of letting your business 
    logic directly query the database, you use a repository class that 
    encapsulates all the data access code.



    Folder Structure with DTO:

    📦 CleanArchitectureRepositoryPattern
        ┣ 📂 CleanArchitecture.Domain
        ┃ ┣ 📂 Entities
        ┃ ┃ ┗ Customer.cs
        ┃ ┣ 📂 Interfaces
        ┃ ┃ ┗ ICustomerRepository.cs
        ┃ ┗ 📂 Common
        ┃    ┗ BaseEntity.cs
        ┣ 📂 CleanArchitecture.Application
        ┃ ┣ 📂 DTOs
        ┃ ┃ ┗ CustomerDto.cs
        ┃ ┣ 📂 Interfaces
        ┃ ┃ ┗ ICustomerService.cs
        ┃ ┗ 📂 Services
        ┃    ┗ CustomerService.cs
        ┣ 📂 CleanArchitecture.Infrastructure
        ┃ ┣ 📂 Data
        ┃ ┃ ┗ AppDbContext.cs
        ┃ ┣ 📂 Repositories
        ┃ ┃ ┗ CustomerRepository.cs
        ┃ ┗ 📂 Configurations
        ┃    ┗ CustomerConfiguration.cs
        ┣ 📂 CleanArchitecture.API
        ┃ ┣ 📂 Controllers
        ┃ ┃ ┗ CustomerController.cs
        ┃ ┣ Program.cs
        ┃ ┗ appsettings.json
        ┗ 📂 CleanArchitecture.Tests (Optional)
            ┗ UnitTests
            ┗ CustomerServiceTests.cs

    Ohter Folder Structure without DTO:

    📦 CleanArchitectureRepositoryPattern
        ┣ 📂 CleanArchitecture.Domain
        ┃ ┣ 📂 Entities
        ┃ ┃ ┗ Customer.cs
        ┃ ┣ 📂 Interfaces
        ┃ ┃ ┗ ICustomerRepository.cs
        ┣ 📂 CleanArchitecture.Application
        ┃ ┗ 📂 Services
        ┃    ┗ CustomerService.cs
        ┣ 📂 CleanArchitecture.Infrastructure
        ┃ ┣ 📂 Data
        ┃ ┃ ┗ AppDbContext.cs
        ┃ ┣ 📂 Repositories
        ┃ ┃ ┗ CustomerRepository.cs
        ┃ ┗ 📂 Configurations
        ┃    ┗ CustomerConfiguration.cs
        ┣ 📂 CleanArchitecture.API
        ┃ ┣ 📂 Controllers
        ┃ ┃ ┗ CustomerController.cs
        ┃ ┣ Program.cs
        ┃ ┗ appsettings.json
        ┗ 📂 CleanArchitecture.Tests (Optional)
            ┗ UnitTests
            ┗ CustomerServiceTests.cs

    A. Under Domain Folder 
    1. Create class/entity: Customer (Under Enity Folder)
    2. Interface for Repository ICustomerReposity (Under Interface Folder)

    B. Under Application Folder
    3. Create Service Class using DI ICustomerReposity.

    C. Under Infrastructure Folder
    4. Implement ICustomerRepositoy as CustomerRepository

    D. Scaffol-DbContext 
    5. Cut the connection String and update the Appsetting.json

    E. Register 
    6. <ICustomerRepositoy CustomerRepository>();
        AddDBContext

    1. Create Customer Class:
    -------------------------
    public class Customer
    {
        public string FirstName;
        public string LastName;
        public string AadharNumber;
    }

    2. Create ICustomerRepository Interface:
    ----------------------------------------
    public interface ICustomerRepository
    {
        IEnumeriable<Customer> GetAll();
        Customer GetByID(int id)
        void AddCustomer(Customer customer)
        void DeleteCustomer(int id);
        void UpdateCustomer(Customer customer)
    }

    3. Create Customer Service

    public class CustomerService{

        private readonly ICustomerRepository _customerRepository;

        public CustomerService(ICustomerRepository customerRepository)
        {
            _customerRepository=customerRepository
        }

        public IEnumeriable<Customer> GetAllCustomer()
        {           
            return(_customerRepository.GetAll());
        }
        
        public Customer GetCustomer(id int)
        {
            return _customerRepository.GetByID(id);
        }

        public void DeleteCustomer(id)
        {
            _customerRepository.DeleteCustomer(id);
        }

        public void UpdateCustomer(Customer customer)
        {
            _customerRepository.UpdateCustomer(customer); 
        }

        public void AddCustomer(Customer customer)
        {
            _customerRepository.AddCustomer(customer)
        }

    }

    4. Infrstructure
    public class CustomerRepository:ICustomerRepository
    {
        private readonly DBContext _db;
        public CustomerRepository(DBContext db)
        {
        _db=db;
        }
    
        public IEnumeriable<Customer>GetAll()
        {
            return _db.tblCustomer;
        }
    
        public Customer GetByID(int id)
        {
            return _db.tblCustomer.Find(id);
        }

        public void AddCustomer(Customer customer)
        {
            _db.tblCustomer.Add(customer);
            _db.SaveChanges();
        }

        public void DeleteCustomer(int id)
        {
            _db.tblCustomer.Remove(id);
            _db.SaveChanges();
        }

        public void UpdateCustomer(Customer customer)
        {
            _db.tblCustomer.Update(customer);
            _db.SaveChanges();
        }
    }

    Controller using CustomerService DI
    -----------

    public class CustomerController: ControllerBase
    {
    
    private readonly CustomerService _cs;

    public CustomerController(CustomerService cs)
    {
        _cs = cs;
    }
    
    [HttpGet]
    public IActionResult GetAllCustomer()
    {
        return Ok(_cs.GetAll);
    }
    
    [HttpGet{(id)}]
    public IActionResult GetById(int id)
    {
        return Ok(_cs.GetCustomerByID(id))
    }
    [HttpPost]

    public IActionResult AddCustomer(Customer customer)
    {
        _cs.AddCustomer(customer);
        return Ok("Customer Added Successfully);
    }

    [HttpDelete]
    public IActionResult DeleteCustomer(int id)
    {
       _cs.DeleteCustomer(id);
       return Ok("Customer Deleted");
    }

    [HttpPut]
    public IActionResult UpdateCustomer(Customer customer)
    {
        _cs.UpdateCustomer(customer);
        return Ok("Customer Updated");
    }
    
    }

    In progrgram.cs
    ----------------
    Register IOC:
    builder.Services.AddScoped<ICustomerRepository CustomerRepository>();
    builder.Services.AddScoped<CustomerService>();
    builder.Services.AddDBContext<DBContext>(option=> option.UserSqlServer(builder.Configuration.GetConnectionStrin("conn")));

   In AppSetting.json
   ------------------
     "ConnectionStrings": { "conn": "Server=IN-3LDLV64;Database=FamilyDB;User Id=sa; Password=sa;Encrypt=False" }






    `,F0=`
    ------------------------FACTORY PATTERN----------------------------------------
    Defination:
    The Factory Pattern is one of the most commonly used creational design patterns in 
    object-oriented programming. Its purpose is to encapsulate object creation logic 
    so that client code doesn’t need to know the exact class being instantiated.

    Scenario based
    There are two customer say "Gold" and "Silver" and having discount 10% and 5%.
    We have some rule for each customer. Write C# programe in such a way that we can
    add new customer say "Platinum" without modifing the existing code.

    Solution:
    This is a classic Open/Closed Principle (OCP) question from SOLID design principles
    --------------------------------------------------------------------------------

    [    ICustomer - > GoldCustomer/SilverCustomer:ICustomer

        CustomerResolver (private readonly IEnumeriable<ICustomer> _customers;)

        Register <ICustomer, GoldCustomer>
        Register <ICustomer, SilverCustomer>
        Register <CustomerResolver>
    ]

    📦 CleanCustomerArchitecture
            ┣ 📂 CleanCustomerArchitecture.Domain
            ┃ ┣ 📂 Entities
            ┃ ┃ ┣ ICustomer.cs
            ┃ ┃ ┣ GoldCustomer.cs
            ┃ ┃ ┣ SilverCustomer.cs
            ┃ ┃ ┗ PlatinumCustomer.cs
            ┃ ┃ 📂 Interface
            ┃ ┗ 📂 Exceptions
            ┃ ┃ ┗ CustomerNotFoundException.cs
            ┣ 📂 CleanCustomerArchitecture.Application
            ┃ ┗ 📂 Services
            ┃ ┃ ┗ CustomerResolver.cs
            ┣ 📂 CleanCustomerArchitecture.API
            ┃ ┣ 📂 Controllers
            ┃ ┃ ┗ CustomerController.cs
            ┃ ┣ Program.cs
            ┃ ┗ appsettings.json
            ┗ 📂 CleanCustomerArchitecture.Infrastructure
                ┗ (Optional: if you later add DB, file storage, or caching logic)


    1. Create interface ICustomer;
    2. Implement different Customer inherits from ICustomer;
    3. Create CustomerResolver using DI
       private readonly IEnumeriable<ICustomer> _customers;
    
    get Customer Class as per customer name input.
    4. Register All Customer in program.cs
            builder.Services.AddSingleton<ICustomer GoldCustomer>();
            builder.Services.AddSingleton<ICustomer SilverCustomer>();
            builder.Services.AddSingleton<CustomerResolver>();
    5. In Controller
        private readonly CustomerResolver _customerResolver;

    --------------------------IMPLEMENTATION----------------------------------
                                            ---------------ICustomer Interface
    public interface ICustomer{
        string Name {get;}
        decimal GetDiscount(decimal amount);
    }
                                            ----------------Gold Customer Class
    public class GoldCustomer: ICustomer
    {
       -- public string Name=> "Gold";
        public string Name { get{ return("Gold");};
        public decimal GetDiscount(decimal amount)
            {
                return (amount * 10 /100);
            }
    }
                                            ----------------Silver Customer Class
    public class SilverCustomer: ICustomer
    {
        --public string Name=> "Silver";
        public string Name { get{ return("Silver");};
        public class GetDiscount(decimal amount)
            {
                return (amount * 5 /100);
            }
    }

    In program.cs
    -------------

        builder.Services.AddSingleton<ICustomer GoldCustomer>();
        builder.Services.AddSingleton<ICustomer SilverCustomer>();
        builder.Services.AddSingleton<CustomerResolver>();

    ----------------------------------------------------------------------
    public class CustomerResolver
    {
      private readonly IEnumeriable<ICustomer> _customers;
      public CustomerResolver (IEnumeriable<ICustomer> customers)
      {
        _customers = customers;
        }

        public ICustomer GetCustomer(string customerName)
        {
          foreach(ICustomer customer in _customers)
          {
            if (customer.Name== customerName)
                return customer;
          }
          
            through new ArgumentException($"Customer : '{customerName}' not found");
        }
    }

    In Controller
    --------------

    public class CustomerController: ControllerBase
    {
      private readonly CustomerResolver _customerResolver;
      public CustomerController(CustomerResolver customerResolver)
        {
            _customerResolver= customerResolver;
        }

        [HttpGet]
        public IActionResult GetCustomerDetails(string customerName, decimal totalAmount)
        {
            try{
                var customer = _customerResolver.GetCustomer(customerName);
                decimal discountAmount = customer.GetDiscount(totalAmount);
                return ok(
                        new {CustomerDiscount = discountAmount, CustomerName=customer.Name };
                        )
                }
                -------or--------
                return Ok($"Dicount Amount:  '{discountAmount}', on Amount '{totalAmount}' for user '{customerName}'");
                -----------------
            catch(ArgumentException ae)
            {
                return BadRequest("Error: " + ae);
            }
            catch( Exception ex)
            {
                return BadRequest("Error: " + ex);
            }
        }
}
`,U0=g.jsxs(g.Fragment,{children:[g.jsx("div",{style:{textAlign:"left",marginLeft:"3%"},children:g.jsx("h2",{children:"Clean Architecture"})}),`
        Scaffold-DbContext "your-connection-string" Microsoft.EntityFrameworkCore.SqlServer 
        -OutputDir Models -Context AppDbContext
        EF Core generates:

            ✅ DbContext class (e.g. AppDbContext.cs)
            ✅ Entity classes (POCOs representing tables)

        Example output:

            /Models
            ├── AppDbContext.cs
            ├── Customer.cs
            ├── Order.cs
            ├── Product.cs

        Where to Place These in a Clean Architecture:
        Example 1

            /Domain
                /Entities
                    Customer.cs
                    Order.cs
                    Product.cs
                /Interfaces
                    ICustomerRepository.cs

            /Application
                /DTOs
                /Services
                /UseCases

            /Infrastructure
                /Data
                    AppDbContext.cs
                /Repositories
                    CustomerRepository.cs
                /Configurations
                    CustomerConfiguration.cs

            /Presentation
                /Controllers
                    CustomerController.cs

        ------------------------------------------------------------
        Example 2

        CustomerDiscountSolution/
            │
            ├── src/
            │   ├── CustomerDiscount.Domain/
            │   │   ├── Entities/
            │   │   │   └── Customer.cs
            │   │   ├── Interfaces/
            │   │   │   └── ICustomer.cs
            │   │   └── Rules/
            │   │       ├── GoldCustomer.cs
            │   │       ├── SilverCustomer.cs
            │   │       ├── PlatinumCustomer.cs   ← new one (extension)
            │   │       └── CustomerResolver.cs
            │   │
            │   ├── CustomerDiscount.Application/
            │   │   ├── Interfaces/
            │   │   │   └── ICustomerService.cs
            │   │   └── Services/
            │   │       └── CustomerService.cs
            │   │
            │   ├── CustomerDiscount.Infrastructure/
            │   │   ├── Data/
            │   │   │   └── CustomerDbContext.cs  (if using DB)
            │   │   └── Repositories/
            │   │       └── CustomerRepository.cs
            │   │
            │   ├── CustomerDiscount.API/
            │   │   ├── Controllers/
            │   │   │   └── CustomerController.cs
            │   │   ├── Program.cs
            │   │   └── appsettings.json
            │   │
            │   └── CustomerDiscount.Tests/
            │       └── CustomerServiceTests.cs
            │
            └── CustomerDiscount.sln

        `]}),H0=g.jsxs(g.Fragment,{children:[g.jsx("div",{style:{textAlign:"left",marginLeft:"3%"},children:g.jsx("h2",{children:"Dapper"})}),g.jsx("br",{}),`      Folder Structure:

      📦 DapperCleanArchitecture
      ┣ 📂 DapperCleanArchitecture.Domain
      ┃ ┣ Entities
            Customer.cs
      ┃ ┗ Interfaces/
            ICustomerRepository.cs

      ┣ 📂 DapperCleanArchitecture.Infrastructure
      ┃ ┣ Data
            DapperContext.cs
      ┃ ┗ Repositories
            CustomerRepository.cs
      ┣ 📂 DapperCleanArchitecture.Application
      ┃ ┗ Services 
            CustomerService.cs
      ┣ 📂 DapperCleanArchitecture.API
      ┃ ┣ Controllers
            CustomerController.cs
      ┃ ┣ appsettings.json
      ┃ ┗ Program.cs

    🧩 1️⃣ Domain Layer
    
    Install:
    dotnet add package Dapper
    
    namespace DapperCleanArchitecture.Domain.Entities
    {
        public class Customer
        {
            public int Id { get; set; }
            public string Name { get; set; } = string.Empty;
            public string Email { get; set; } = string.Empty;
        }
    }

    🔹 ICustomerRepository.cs

        using DapperCleanArchitecture.Domain.Entities;

        namespace DapperCleanArchitecture.Domain.Interfaces
        {
            public interface ICustomerRepository
            {
                Task<IEnumerable<Customer>> GetAllAsync();
                Task<Customer?> GetByIdAsync(int id);
                Task<int> AddAsync(Customer customer);
                Task<int> UpdateAsync(Customer customer);
                Task<int> DeleteAsync(int id);
            }
        }

        🧩 2️⃣ Infrastructure Layer
              🔹 DapperContext.cs
              using Microsoft.Data.SqlClient;
              using System.Data;

              namespace DapperCleanArchitecture.Infrastructure.Data
              {
                  public class DapperContext
                  {
                      private readonly string _connectionString;

                      public DapperContext(IConfiguration configuration)
                      {
                          _connectionString = configuration.GetConnectionString("DefaultConnection");
                      }

                      public IDbConnection CreateConnection() => new SqlConnection(_connectionString);
                  }
              }

              🔹 CustomerRepository.cs
              using Dapper;
              using DapperCleanArchitecture.Domain.Entities;
              using DapperCleanArchitecture.Domain.Interfaces;
              using DapperCleanArchitecture.Infrastructure.Data;

              namespace DapperCleanArchitecture.Infrastructure.Repositories
              {
                  public class CustomerRepository : ICustomerRepository
                  {
                      private readonly DapperContext _context;

                      public CustomerRepository(DapperContext context)
                      {
                          _context = context;
                      }

                      public async Task<IEnumerable<Customer>> GetAllAsync()
                      {
                          var sql = "SELECT * FROM Customers";
                          using var connection = _context.CreateConnection();
                          return await connection.QueryAsync<Customer>(sql);
                      }

                      public async Task<Customer?> GetByIdAsync(int id)
                      {
                          var sql = "SELECT * FROM Customers WHERE Id = @Id";
                          using var connection = _context.CreateConnection();
                          return await connection.QueryFirstOrDefaultAsync<Customer>(sql, new { Id = id });
                      }

                      public async Task<int> AddAsync(Customer customer)
                      {
                          var sql = "INSERT INTO Customers (Name, Email) VALUES (@Name, @Email)";
                          using var connection = _context.CreateConnection();
                          return await connection.ExecuteAsync(sql, customer);
                      }

                      public async Task<int> UpdateAsync(Customer customer)
                      {
                          var sql = "UPDATE Customers SET Name = @Name, Email = @Email WHERE Id = @Id";
                          using var connection = _context.CreateConnection();
                          return await connection.ExecuteAsync(sql, customer);
                      }

                      public async Task<int> DeleteAsync(int id)
                      {
                          var sql = "DELETE FROM Customers WHERE Id = @Id";
                          using var connection = _context.CreateConnection();
                          return await connection.ExecuteAsync(sql, new { Id = id });
                      }
                  }
              }

       🧩 3️⃣ Application Layer
            🔹 CustomerService.cs
            using DapperCleanArchitecture.Domain.Entities;
            using DapperCleanArchitecture.Domain.Interfaces;

            namespace DapperCleanArchitecture.Application.Services
            {
                public class CustomerService
                {
                    private readonly ICustomerRepository _repository;

                    public CustomerService(ICustomerRepository repository)
                    {
                        _repository = repository;
                    }

                    public async Task<IEnumerable<Customer>> GetAllCustomersAsync() =>
                        await _repository.GetAllAsync();

                    public async Task<Customer?> GetCustomerByIdAsync(int id) =>
                        await _repository.GetByIdAsync(id);

                    public async Task AddCustomerAsync(Customer customer) =>
                        await _repository.AddAsync(customer);

                    public async Task UpdateCustomerAsync(Customer customer) =>
                        await _repository.UpdateAsync(customer);

                    public async Task DeleteCustomerAsync(int id) =>
                        await _repository.DeleteAsync(id);
                }
            }       

        🧩 4️⃣ API Layer
        🔹 appsettings.json
        {
          "ConnectionStrings": {
            "DefaultConnection": "Server=.;Database=CustomerDB;User Id=sa;Password=sa;TrustServerCertificate=True;"
          },
          "Logging": {
            "LogLevel": {
              "Default": "Information"
            }
          }
        }

        🔹 CustomerController.cs
        using DapperCleanArchitecture.Application.Services;
        using DapperCleanArchitecture.Domain.Entities;
        using Microsoft.AspNetCore.Mvc;

        namespace DapperCleanArchitecture.API.Controllers
        {
            [Route("api/[controller]")]
            [ApiController]
            public class CustomerController : ControllerBase
            {
                private readonly CustomerService _service;

                public CustomerController(CustomerService service)
                {
                    _service = service;
                }

                [HttpGet]
                public async Task<IActionResult> GetAll()
                {
                    var customers = await _service.GetAllCustomersAsync();
                    return Ok(customers);
                }

                [HttpGet("{id}")]
                public async Task<IActionResult> GetById(int id)
                {
                    var customer = await _service.GetCustomerByIdAsync(id);
                    if (customer == null)
                        return NotFound();

                    return Ok(customer);
                }

                [HttpPost]
                public async Task<IActionResult> Add(Customer customer)
                {
                    await _service.AddCustomerAsync(customer);
                    return Ok("Customer added successfully");
                }

                [HttpPut]
                public async Task<IActionResult> Update(Customer customer)
                {
                    await _service.UpdateCustomerAsync(customer);
                    return Ok("Customer updated successfully");
                }

                [HttpDelete("{id}")]
                public async Task<IActionResult> Delete(int id)
                {
                    await _service.DeleteCustomerAsync(id);
                    return Ok("Customer deleted successfully");
                }
            }
        }

        🔹 Program.cs
        using DapperCleanArchitecture.Application.Services;
        using DapperCleanArchitecture.Domain.Interfaces;
        using DapperCleanArchitecture.Infrastructure.Data;
        using DapperCleanArchitecture.Infrastructure.Repositories;

        var builder = WebApplication.CreateBuilder(args);

        // Add services
        builder.Services.AddSingleton<DapperContext>();
        builder.Services.AddScoped<ICustomerRepository, CustomerRepository>();
        builder.Services.AddScoped<CustomerService>();

        builder.Services.AddControllers();
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();

        var app = builder.Build();
        app.UseSwagger();
        app.UseSwaggerUI();

        app.MapControllers();
        app.Run();

        🧩 Database Table
        CREATE TABLE Customers (
            Id INT IDENTITY(1,1) PRIMARY KEY,
            Name NVARCHAR(100),
            Email NVARCHAR(100)
        );

        ✅ API Endpoints
        Method	Endpoint	Description
        GET	/api/customer	Get all customers
        GET	/api/customer/{id}	Get customer by ID
        POST	/api/customer	Add new customer
        PUT	/api/customer	Update customer
        DELETE	/api/customer/{id}	Delete customer
        💡 Notes

        ✅ Clean separation of concerns
        ✅ No Entity Framework — purely Dapper
        ✅ Each layer has its own responsibility
        ✅ Very fast, lightweight API
        ✅ Easy to extend for more entities (e.g., Orders, Products, etc.)

        ===========================================REAL CODE====================================

        ===========DAPPER
        ------------------------------------------------------------------------Domain
        ------------------------------------------------/Entities
        namespace DapperApi.Domain.Entities
        {
            public class Customer
            {
                public int Id { get; set; }
                public string Name { get; set; }
                public string Email { get; set; }
            }
        }
        ------------------------------------------------/Interfaces
        using DapperApi.Domain.Entities;

        namespace DapperApi.Domain.Interfaces
        {
            public interface ICustomerRepository
            {
                Task<IEnumerable<Customer>> GetAllCustomersAsync();
                Task<Customer> GetCustomerByIdAsync(int id);
                Task<int> CreateCustomerAsync(Customer customer);
                Task<int> UpdateCustomerAsync(Customer customer);
                Task<int> DeleteCustomerAsync(int id);
            }
        }
        ------------------------------------------------------------------------Infrastructure
        ------------------------------------------------/Data
        using System.Data;
        using System.Data.SqlClient;

        namespace DapperApi.Infrastructure.Data
        {
            public class DapperContext
            {
                private readonly IConfiguration _configuration;
                public DapperContext(IConfiguration configuration)
                {
                    _configuration = configuration;
                }
                public IDbConnection CreateConnection()
                {
                    return new SqlConnection(_configuration.GetConnectionString("DefaultConnection")); // No changes needed here as the namespace is updated
                }
            }
        }
        ------------------------------------------------/Repositories
        using Dapper;
        using DapperApi.Domain.Entities;
        using DapperApi.Domain.Interfaces;
        using DapperApi.Infrastructure.Data;

        namespace DapperApi.Infrastructure.Repositories
        {
        
            public class CustomerRepository : ICustomerRepository
            {
                private readonly DapperContext _context;

                public CustomerRepository(DapperContext context)
                {
                    _context = context;
                }
                public async Task<int> CreateCustomerAsync(Customer customer)
                {
                    string sql = "INSERT INTO Customer (Name, Email) VALUES (@Name, @Email); SELECT Id,Name,Email from Customer where Id= CAST(SCOPE_IDENTITY())";
                    using var connection = _context.CreateConnection();
                    var id = await connection.QueryAsync<int>(sql, customer);
                    return id.Single();
                }

        .....................
            }
        }

        ------------------------------------------------------------------------Application
        ------------------------------------------------/Services
        using DapperApi.Domain.Interfaces;
        using DapperApi.Domain.Entities;
        namespace DapperApi.Application.Services
        {
            public class CustomerService
            {
                private readonly ICustomerRepository _customerRepository;
                public CustomerService(ICustomerRepository customerRepository)
                {
                    _customerRepository = customerRepository;
                }

                public async Task<int> CreateCustomerAsync(Customer customer)
                {
                    return await _customerRepository.CreateCustomerAsync(customer);
                }

                public async Task<int> DeleteCustomerAsync(int id)
                {

                    return await _customerRepository.DeleteCustomerAsync(id);
                }

                public async Task<IEnumerable<Customer>> GetAllCustomersAsync()
                {
                    return await _customerRepository.GetAllCustomersAsync();
                }

                public async Task<Customer> GetCustomerByIdAsync(int id)
                {
                    return await _customerRepository.GetCustomerByIdAsync(id);
                }

                public async Task<int> UpdateCustomerAsync(Customer customer)
                {
                    return await _customerRepository.UpdateCustomerAsync(customer);
                }   
            }
        }

        ------------------------------------------------------------------------Controller
        public class CustomerController : ControllerBase
        {
            private readonly CustomerService _customerService;
            public CustomerController(CustomerService customerService)
            {
                _customerService = customerService;
            }

            [HttpPost]
            public async Task<IActionResult> CreateCustomer([FromBody] Customer customer)
            {
                if (customer == null)
                {
                    return BadRequest("Customer is null.");
                }
                var id = await _customerService.CreateCustomerAsync(customer);
                //return CreatedAtAction(nameof(GetCustomerById), new { id = id }, customer);
                return Ok(new {Customer="New Customer Created", Id = id });
            }
        ------------------------------------------------------------------------Appsetting.json

        "ConnectionStrings": { "DefaultConnection": "Server=IN-3LDLV64;Database=FamilyDB;User Id=sa;Password=sa;Encrypt=False;" }

        ------------------------------------------------------------------------Program.cs

        builder.Services.AddControllers();
        builder.Services.AddSingleton<DapperApi.Infrastructure.Data.DapperContext>();
        builder.Services.AddScoped<DapperApi.Domain.Interfaces.ICustomerRepository, DapperApi.Infrastructure.Repositories.CustomerRepository>();
        builder.Services.AddScoped<DapperApi.Application.Services.CustomerService>();



    `]}),z0=g.jsxs(g.Fragment,{children:[g.jsx("span",{style:{color:"red",fontWeight:"bold"},children:"How to decorate "}),g.jsx("span",{style:{textDecoration:"underline",color:"green"},children:"the text"}),"i.e. Bold Underline color etc",g.jsx("br",{}),g.jsx("img",{src:"/dotnet/Repository.jpg",width:"100%"}),g.jsx("br",{}),`Register All Customer in program.cs
            builder.Services.AddSingleton<ICustomer GoldCustomer>();
            builder.Services.AddSingleton<ICustomer SilverCustomer>();
            builder.Services.AddSingleton<CustomerResolver>();
    4. Create CustomerResolver using DI
    private readonly IEnumeriable<ICustomer> _customers;
    5. In Controller
        private readonly CustomerResolver _customerResolver;

    --------------------------IMPLEMENTATION---------------------------

    public interface ICustomer{
        string Name {get;}
        decimal GetDiscount(decimal amount);
    }

    public class GoldCustomer: ICustomer
    {
        public string Name=> "Gold";
        public string Name {
        get{ return("Gold");};
    } `]}),G0=g.jsxs(g.Fragment,{children:[g.jsx("div",{children:g.jsx("span",{className:"highlightText",children:"API Environment Setting"})}),`
    This is envoronment setting for .net core api.
            MyApi/
            │
            ├── appsettings.json
            ├── appsettings.Development.json
            ├── appsettings.Staging.json
            ├── appsettings.Production.json
            ├── Program.cs

        🧩 1️⃣ appsettings.json (base config)

        This is your default configuration used across all environments.

        {
            "ConnectionStrings": {
                "DefaultConnection": "Server=.;Database=MyApp;Trusted_Connection=True;"
            },
            "Logging": {
                "LogLevel": {
                "Default": "Information"
                }
            },
            "AppSettings": {
                "Environment": "Base"
            }
        }

        🧩 2️⃣ Environment-specific config files

        Each environment overrides only what’s different.

        📄 appsettings.Development.json
        {
        "ConnectionStrings": {
            "DefaultConnection": "Server=localhost;Database=MyApp_Dev;Trusted_Connection=True;"
        },
        "AppSettings": {
            "Environment": "Development"
        }
        }

        📄 appsettings.Staging.json
        {
        "ConnectionStrings": {
            "DefaultConnection": "Server=staging-sql;Database=MyApp_Stage;User Id=stage_user;Password=pass;"
        },
        "AppSettings": {
            "Environment": "Staging"
        }
        }

        📄 appsettings.Production.json
        {
        "ConnectionStrings": {
            "DefaultConnection": "Server=prod-sql;Database=MyApp_Prod;User Id=prod_user;Password=secure;"
        },
        "AppSettings": {
            "Environment": "Production"
        }
        }

        🧱 3️⃣ Program.cs (automatic environment loading)

        ASP.NET Core automatically detects environment and loads correct file.

        var builder = WebApplication.CreateBuilder(args);

        // Loads appsettings.{ENVIRONMENT}.json automatically
        var configuration = builder.Configuration;

        // Example usage:
        var connectionString = configuration.GetConnectionString("DefaultConnection");
        var environment = builder.Environment.EnvironmentName;

        builder.Services.AddControllers();

        var app = builder.Build();

        app.MapControllers();
        app.Run();


        ✅ builder.Environment.EnvironmentName automatically gives:

        Development

        Staging

        Production

        ⚙️ 4️⃣ Set the Environment

        You can set it in multiple ways depending on where you run the API.

        🖥️ (A) Local Machine (Visual Studio)

        Open launchSettings.json
        Path: Properties/launchSettings.json

        {
        "profiles": {
            "MyApi": {
            "commandName": "Project",
            "dotnetRunMessages": true,
            "launchBrowser": true,
            "applicationUrl": "https://localhost:7100;http://localhost:5100",
            "environmentVariables": {
            "ASPNETCORE_ENVIRONMENT": "Development"
            }
            }
        }
        }

`,g.jsx("div",{children:g.jsx("span",{className:"highlightText",children:'You can change "Development" to "Staging" or "Production" for testing.'})}),`

        ✅ Summary
        Step	Purpose
        appsettings.json	Base configuration
        appsettings.{ENV}.json	Overrides for each environment
        ASPNETCORE_ENVIRONMENT	Defines current environment
        builder.Environment.IsDevelopment()	Used for conditional setup
        launchSettings.json	Local debugging environment

`,g.jsx("div",{children:g.jsx("span",{className:"highlightText",children:"🧩 Step 2: How .NET Knows Which Environment to Use"})}),`

    var builder = WebApplication.CreateBuilder(args);
    Console.WriteLine($"Current Environment: {builder.Environment.EnvironmentName}");

        The environment is set using the variable:
        ASPNETCORE_ENVIRONMENT
        Possible values:

        Development
        Staging
        Production

        You can check or set it in multiple ways 👇
        🔹 Option 1: In Visual Studio (for local run)
        Open:
        Properties → launchSettings.json
        You’ll see something like:

        {
        "profiles": {
            "YourAPI": {
            "commandName": "Project",
            "dotnetRunMessages": true,
            "launchBrowser": true,
            "environmentVariables": {
            "ASPNETCORE_ENVIRONMENT": "Staging"
            },
            "applicationUrl": "https://localhost:7247"
            }
        }
        }


        ✅ If that says "Staging", your API will use appsettings.Staging.json.
`,g.jsx("span",{className:"highlightText",children:"🔹 Option 2: In command line"}),`

        You can run:

        set ASPNETCORE_ENVIRONMENT=Staging
        dotnet run




    `]}),q0=g.jsxs(g.Fragment,{children:[g.jsx("div",{style:{textAlign:"left",marginLeft:"20px"},children:g.jsx("h1",{children:"Middleware"})}),`
    Middleware https://www.iscalepro.com/post/asp-net-core-interview-questions/

    Folder Structure:
    ✅ Middleware is Framework-dependent
       Middleware depends directly on ASP.NET Core’s pipeline (i.e., HttpContext, RequestDelegate, etc.), 
       which are part of the presentation framework.

       That means:
       It cannot be reused by another presentation layer (like a console app or Blazor front-end).
       It’s specific to Web API behavior, not business logic.

    📦 CleanArchitecture.API
        ┣ 📂 Controllers
        ┃ ┗ CustomerController.cs
        ┣ 📂 Middleware
        ┃ ┗ CustomerMiddleware.cs
        ┣ Program.cs
        ┗ appsettings.json

        var path = context.Request.Path;            // /api/customers
        var method = context.Request.Method;        // GET, POST, PUT, DELETE
        var query = context.Request.QueryString;    // ?page=2&size=10
        var headers = context.Request.Headers;      // Authorization, Content-Type, etc.
        var bodyStream = context.Request.Body;      // Request body stream
        var contentType = context.Request.ContentType;

        *) Cheat-sheet (one-page)

        Middleware order (start → end):

         → ExceptionHandler: app.UseDeveloperExceptionPage(); app.UseExceptionHandler("/error");
         → HSTS: (app.UseHsts();)
         → HttpsRedirection: app.UseHttpsRedirection();
         → StaticFiles: app.UseStaticFiles()
         → UseForwardedHeaders => behind a proxy or load balancer
         → UseRouting: app.UseRouting();
         → CORS: app.UseCors("AllowSpecificOrigin");
         → ResponseCompression: app.UseResponseCompression(); 
         → UseAuthentication: app.UseAuthentication();
         → UseAuthorization: app.UseAuthorization();
         → Swagger: app.UseSwagger();
         → SwaggerUI: app.UseSwaggerUI();
         → CustomMiddlewares: app.UseMiddleware<PerformanceMiddleware>();
         → app.MapHealthChecks("/health");
         → MapControllers.: app.MapControllers();


        Category	        Property / Method	                            Purpose
        --------------------------------------------------------------------------------------------------------------
        Request Info	        HttpContext.Request	                        =>Access request details like URL, headers, query params, body, etc.
                                Request.Path, Request.Method, Request.Query	=>To check request route and type (GET, POST etc.)
                                Request.Headers["Authorization"]	        =>To read custom or JWT headers
        Response Control        HttpContext.Response	                        =>Modify outgoing response (status, body, headers)
                                Response.StatusCode	                        =>Set HTTP status code
                                Response.Headers.Add()	                        =>Add custom response headers
        User Information	HttpContext.User	                        =>Access logged-in user claims/principal (from JWT, cookies, etc.)
        Dependency Services	HttpContext.RequestServices	                =>Resolve scoped dependencies (e.g., database, logger)
        Session	                HttpContext.Session	                        =>Store user data during a session
        Items(Per Request Data) HttpContext.Items["key"]	                =>Store temporary data for this request (used by both middleware and filters)
        Connection Info	        HttpContext.Connection.RemoteIpAddress	        =>Get client IP address
        Cancellation Token	HttpContext.RequestAborted	                =>Detect when the client cancels request


    What is Middleware?

        In ASP.NET Core, middleware is a component that is executed in the HTTP request/response pipeline.

        Every incoming request passes through a sequence (pipeline) of middleware components, and each can:

        Process the request

        Call the next middleware (or stop the chain)

        Modify the response before it goes back to the client


    Examples of common middleware: 

        • Authentication Middleware: This middleware is responsible for authenticating
    users, ensuring that only authorized users can access protected resources. 

        •  Static Files Middleware: This middleware serves static files, such as CSS
    stylesheets, JavaScript files, and images, directly to the client. 

        • Routing Middleware: This middleware matches incoming requests to specific
    controllers and actions based on the defined routes. 

        • Session Middleware: This middleware enables session management, allowing you to store
    user-specific data across multiple requests. 

        • CORS Middleware: This middleware handles Cross-Origin Resource Sharing (CORS), allowing your
    application to accept requests from different origins. 

        • Exception Handling Middleware: This middleware catches unhandled exceptions and provides a
    mechanism for logging errors and displaying custom error pages.

    `,`
        Example of middleware order:
        C#
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            // … other middleware …
            app.UseHttpsRedirection(); // Redirect HTTP requests to HTTPS
            app.UseStaticFiles(); // Serve static files
            app.UseRouting(); // Match requests to routes
            app.UseAuthentication(); // Authenticate users
            app.UseAuthorization(); // Authorize users
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers(); // Map controllers for API requests
                endpoints.MapRazorPages(); // Map Razor Pages for page-based requests
            });
            // … other middleware …
        }
        
        2️⃣ Custom Middleware

            Created by developers to handle specific logic (e.g., logging, error handling, request timing, API key validation, etc.)

            Example:

            public class RequestLoggingMiddleware
            {
                private readonly RequestDelegate _next;
                private readonly ILogger<RequestLoggingMiddleware> _logger;

                public RequestLoggingMiddleware(RequestDelegate next, ILogger<RequestLoggingMiddleware> logger)
                {
                    _next = next;
                    _logger = logger;
                }

                public async Task InvokeAsync(HttpContext context)
                {
                    _logger.LogInformation($"Request: {context.Request.Method} {context.Request.Path}");
                    await _next(context);
                    _logger.LogInformation($"Response: {context.Response.StatusCode}");
                }
            }


            Register in Program.cs:

            app.UseMiddleware<RequestLoggingMiddleware>();

--------------Another Example-----------------------------------------

        using Microsoft.AspNetCore.Http;
        using Microsoft.Extensions.Configuration;
        using Microsoft.IdentityModel.Tokens;
        using System.IdentityModel.Tokens.Jwt;
        using System.Text;
        using System.Threading.Tasks;

        public class JwtValidationMiddleware
        {
            private readonly RequestDelegate _next;
            private readonly IConfiguration _configuration;

            public JwtValidationMiddleware(RequestDelegate next, IConfiguration configuration)
            {
                _next = next;
                _configuration = configuration;
            }

            public async Task InvokeAsync(HttpContext context)
            {
                var token = context.Request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();

                if (token == null)
                {
                    context.Response.StatusCode = 401; // Unauthorized
                    await context.Response.WriteAsync("Token is missing");
                    return;
                }

                try
                {
                    var tokenHandler = new JwtSecurityTokenHandler();
                    var key = Encoding.ASCII.GetBytes(_configuration["Jwt:Key"]); // Secret key from appsettings
                    tokenHandler.ValidateToken(token, new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(key),
                        ValidateIssuer = true,
                        ValidIssuer = _configuration["Jwt:Issuer"],
                        ValidateAudience = true,
                        ValidAudience = _configuration["Jwt:Audience"],
                        ValidateLifetime = true
                    }, out SecurityToken validatedToken);

                    // Optionally attach user info to context
                    var jwtToken = (JwtSecurityToken)validatedToken;
                    context.Items["UserId"] = jwtToken.Claims.First(x => x.Type == "id").Value;

                    await _next(context); // Call the next middleware
                }
                catch
                {
                    context.Response.StatusCode = 401;
                    await context.Response.WriteAsync("Invalid Token");
                }
            }
        }
    2---------- Register Middleware in Program.cs
        var builder = WebApplication.CreateBuilder(args);
        var app = builder.Build();

        // Add your middleware before controllers
        app.UseMiddleware<JwtValidationMiddleware>();

        app.MapControllers();
        app.Run();

    3---------- Sample appsettings.json for JWT
    {
    "Jwt": {
        "Key": "ThisIsASecretKeyForJWT12345",
        "Issuer": "MyApp",
        "Audience": "MyAppUsers"
    }
    }
    ========================================MIDDLEWARE ORDER===============================
        1) Recommended Middleware Pipeline Order (typical, explained)
        Middleware is global — it wraps the entire request/response pipeline. Order matters a lot.
        Recommended order (top → bottom, request flows top→bottom, response flows bottom→top):

        UseExceptionHandler
        UseHttpsRedirection
        UseResponseCompression
        UseStaticFiles
        UseForwardedHeaders
        UseRouting
        UseCors
        UseAuthentication
        UseAuthorization
        Custom middlewares
        MapControllers

        ------------------------------------
        // 1. Error page / exception handling
        if (app.Environment.IsDevelopment())
            app.UseDeveloperExceptionPage();
        else
            app.UseExceptionHandler("/error");

        // 2. HSTS/HTTPS
        app.UseHsts();
        app.UseHttpsRedirection();

        // 3. Static files
        app.UseStaticFiles();

        // 4. Forwarded headers (if behind proxy)
        app.UseForwardedHeaders();

        // 5. Routing
        app.UseRouting();

        // 6. CORS
        app.UseCors("AllowReactApp");

        // 7. Response compression
        app.UseResponseCompression();

        // 8. Authentication
        app.UseAuthentication();

        // 9. Authorization
        app.UseAuthorization();

        // 10. Custom middlewares (that rely on user)
        app.UseMiddleware<RequestLoggingMiddleware>();

        // 11. Endpoints → MVC executes (filters run here)
        app.MapControllers();

        app.Run();
        ------------------------------

        Exception handling (UseExceptionHandler / UseDeveloperExceptionPage): Should be first so it can catch errors from downstream components.
        HSTS (UseHsts) — for production (before redirects).

        HTTPS Redirection (UseHttpsRedirection): Redirect early so subsequent middleware sees secure requests.

        Response compression (UseResponseCompression) — compress responses.

        Static files (UseStaticFiles): Serve static content without going through routing/auth.

        Forwarded headers (UseForwardedHeaders) — if behind reverse proxy/load balancer.

        Routing (UseRouting): Registers route information used by later middleware (Auth, CORS, Endpoints).

        CORS (UseCors) — after UseRouting and before UseAuthentication/UseAuthorization Ensures preflight (OPTIONS) is handled correctly.

        Authentication (UseAuthentication): Validates credentials and sets HttpContext.User.

        Authorization (UseAuthorization): Enforces [Authorize] and policies; requires authenticated principal.

        Custom middlewares:  that need HttpContext.User (logging that needs user info, tenant resolution, claims transformation, custom authorization)

        Place after auth/authorization if they depend on identity, or before routing if they rewrite paths.

        Endpoint execution (UseEndpoints / MapControllers): e point where MVC / minimal APIs execute (and MVC filters run).




`]}),V0=g.jsxs(g.Fragment,{children:[g.jsx("div",{style:{textAlign:"left",marginLeft:"3%"},children:g.jsx("h2",{children:"Filter"})}),`

    ├── WebAPI/
    │    ├── Controllers/
    │    ├── Filters/
    │    ├── Middlewares/
    │    └── Program.cs


    🧠 What is a Filter in ASP.NET Core?

    A Filter in ASP.NET Core is a piece of code that runs automatically before or after certain 
    stages in the request processing pipeline.

    You use filters to:

    Add common logic (like logging, validation, authentication, etc.)

    Modify requests or responses

    Handle cross-cutting concerns (logic that applies to multiple actions)

    ⚙️ Where Filters Fit In

    When a request comes to your API, it passes through these steps:

    HTTP Request → Middleware → Filters → Controller → Action → Filters → Middleware → HTTP Response

    Filter execution (inbound):
    Authorization → Resource (OnResourceExecuting) → Model Binding → Action (OnActionExecuting) → Action → 
    Action (OnActionExecuted) → ExceptionFilter (if error) → Result (OnResultExecuting) → Result Execution → 
    Result (OnResultExecuted) → Resource (OnResourceExecuted)



    🧩 Types of Filters in ASP.NET Core
    Filter Type	                  Runs When	                            Common Use
    Authorization Filter	        Before anything else	                Check user permissions (Auth)
    Resource Filter	                Before model binding	                Caching, short-circuit logic
    Action Filter	                Before and after an action executes	  Logging, validation, timing
    Exception Filter	            When an exception occurs	            Custom error handling
    Result Filter	                Before and after result execution	    Modify response or headers

    Let’s create a simple Action Filter to log every request.

    Step 1: Create a Filter Class
    using Microsoft.AspNetCore.Mvc.Filters;
    using Microsoft.Extensions.Logging;

    public class LogActionFilter : IActionFilter
    {
        private readonly ILogger<LogActionFilter> _logger;

        public LogActionFilter(ILogger<LogActionFilter> logger)
        {
            _logger = logger;
        }

        public void OnActionExecuting(ActionExecutingContext context)
        {
            _logger.LogInformation($"➡️ Action {context.ActionDescriptor.DisplayName} starting...");
        }

        public void OnActionExecuted(ActionExecutedContext context)
        {
            _logger.LogInformation($"✅ Action {context.ActionDescriptor.DisplayName} finished.");
        }
    }

    Step 2: Register in Program.cs
    builder.Services.AddControllers(options =>
    {
        options.Filters.Add<LogActionFilter>(); // Global filter
    });

    Step 3: Or Apply at Controller/Action Level
    [ServiceFilter(typeof(LogActionFilter))] // or [TypeFilter(typeof(LogActionFilter))]
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : ControllerBase
    {
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(new { Id = id, Name = "Khalid Akhter" });
        }
    }


    ✅ Now, whenever Get runs, logs will appear before and after the action.

    🧩 Example 2: Exception Filter

    Custom global error handler:

    public class CustomExceptionFilter : IExceptionFilter
    {
        private readonly ILogger<CustomExceptionFilter> _logger;

        public CustomExceptionFilter(ILogger<CustomExceptionFilter> logger)
        {
            _logger = logger;
        }

        public void OnException(ExceptionContext context)
        {
            _logger.LogError(context.Exception, "Unhandled Exception Occurred!");
            context.Result = new ObjectResult(new { Error = "Something went wrong." })
            {
                StatusCode = 500
            };
            context.ExceptionHandled = true;
        }
    }


    Register globally:

    builder.Services.AddControllers(options =>
    {
        options.Filters.Add<CustomExceptionFilter>();
    });

    🔁 Filter Execution Order

    1️⃣ Authorization filters
    2️⃣ Resource filters
    3️⃣ Action filters
    4️⃣ Result filters
    5️⃣ Exception filters (on errors)

    ✅ Summary
    Type	Interface	Purpose
    Authorization	IAuthorizationFilter	Access control
    Resource	IResourceFilter	Caching, short-circuiting
    Action	IActionFilter	Before/after action execution
    Exception	IExceptionFilter	Centralized error handling
    Result	IResultFilter	Before/after response formatting
    💡 Filters vs Middleware
    Middleware	Filter
    Works outside MVC pipeline	Works inside MVC pipeline
    Affects all requests	Affects controller/action level
    Common for cross-cutting (auth, logging)	MVC-specific (model binding, result formatting)


    Explain the Role of Action Filters in ASP.NET Core Web API.

    Action Filters in ASP.NET Core Web API are attributes that can be applied to 
    controller actions to perform cross-cutting concerns such as logging, authorization, 
    caching, validation, and exception handling. Action Filters allow developers to 
    encapsulate common logic that needs to be executed before or after an action method 
    is invoked. ASP.NET Core provides several built-in action filters, such as [Authorize] 
    for authorization, [ValidateAntiForgeryToken] for preventing CSRF attacks, and [ResponseCache] 
    for caching responses.

 
    Types of filters (authorization, action, result, resource, exception):

    Authorization filters: Control access to action methods. They run before
    other filters and can short-circuit the request if authorization fails.

    Action filters: Execute code before and after an action method is executed.
    They can be used for tasks like logging, caching, and input validation.

    Result filters: Execute code before and after an action result is executed.
    They can be used for tasks like modifying the response or logging the result. 
    
    Resource filters: Execute code before and after the execution of an
    action method, including model binding and action result execution. They are
    a combination of action filters and result filters. 
    
    Exception filters: Handle exceptions that occur during the execution of an action method. 
    They can be used to log exceptions or provide custom error responses.

    -----------------------------ACTION FILTER FROM InternAPI------------------------------------

            using InternAPI.Models;
            using Microsoft.AspNetCore.Mvc;
            using Microsoft.AspNetCore.Mvc.Filters;

            namespace InternAPI.Filters
            {
                public class ActionFilter : IActionFilter
                {
                    public void OnActionExecuted(ActionExecutedContext context)
                    {
                        Console.WriteLine("Action Filter has executed...");
                    }
                
                    public void OnActionExecuting(ActionExecutingContext context)
                    {

                        if (context.ActionArguments.ContainsKey("std"))
                        {
                            var student = context.ActionArguments["std"] as Student;

                            // Perform custom validation on the employee model
                            if (student == null)
                            {
                                context.Result = new BadRequestObjectResult("Student data is missing.");
                                return;
                            }

                            if (string.IsNullOrWhiteSpace(student.StudentName))
                            {
                                context.Result = new BadRequestObjectResult("Student name is required.");
                                return;
                            }

                            if (student.Age<0)
                            {
                                context.Result = new BadRequestObjectResult("Age must be +ve.");
                                return;
                            }

                            //if (employee.DateOfBirth == default || employee.DateOfBirth > DateTime.Now)
                            //{
                            //    context.Result = new BadRequestObjectResult("A valid date of birth is required.");
                            //    return;
                            //}
                        }

                        Console.WriteLine("Action Filter is executing....... .");
                    }
                }
            }

    -----------------------------RESULT FILTER FROM InternAPI------------------------------------

        using Azure;
        using InternAPI.Models;
        using Microsoft.AspNetCore.Http;
        using Microsoft.AspNetCore.Http.HttpResults;
        using Microsoft.AspNetCore.Mvc;
        using Microsoft.AspNetCore.Mvc.Filters;
        using Microsoft.Extensions.Hosting;
        using System.Diagnostics.Metrics;
        using System;
        namespace InternAPI.Filters
        {
            public class ResultFilter: IResultFilter
            {
                public void OnResultExecuting(ResultExecutingContext context)
                {
                    Console.WriteLine("Result Filter is executing");
                    
                    if (context.Result is OkObjectResult okResult)
                    {
                        // Modify the content of the OkObjectResult (the object being returned)
                        var originalData = okResult.Value;
                        

                        // Example: Modify the data (e.g., add a custom message or manipulate data)
                        if (originalData is string strData)
                        {
                            okResult.Value = strData.ToUpper(); // Modify string data to uppercase as an example
                        }
                        else if (originalData is List<Student> myModel)
                        {
                            myModel[0].StudentName = "Modified in ResultFilter"; // Modify a property of the model
                            myModel[0].Age = 88;
                            okResult.Value = myModel; // Set the modified model back to the result
                        }

                        // You can also add custom headers if needed
                        context.HttpContext.Response.Headers.Add("X-Modified-By", "ResultFilter");
                    }
                    Console.WriteLine("Result Filter is about to execute.");
                }

                public void OnResultExecuted(ResultExecutedContext context)
                {
            
                                var result = context.Result;

                    if (result is OkObjectResult objectResult2)
                    {
                        // Modify the result if it's an ObjectResult (most common for returning objects)
                        var originalValue = objectResult2.Value;
                            
                        List<Student> mObj= new List<Student>();
                        if (originalValue is List<Student> myModel)
                        {
                            myModel[0].StudentName = "Modified in ResultFilter4"; // Modify a property of the model
                            myModel[0].Age = 44;
                            mObj = myModel; // Set the modified model back to the result
                        }


                        // Example modification: wrap the original response value in a custom response object
                        objectResult2.Value = new
                        {
                            Success = true,
                            Data = mObj,
                            Message = "Request processed successfully9"
                        };
                    }

                    Console.WriteLine("Result Filter has been executed.");
                }
            }
        }
    





    `]}),Y0=g.jsxs(g.Fragment,{children:[g.jsx("div",{style:{textAlign:"left",marginLeft:"3%"},children:g.jsx("h2",{children:"Entity Framework EF"})}),`
    Step 1:

    Required to install:
    Microsoft.EntityFrameCore.SqlServer
    Microsoft.EnityFrameCore.Design 
    Microsoft.EntityFrameCore.Tool
    
    Step2: run the command using Package Manager Console.

    PM> Scaffold-DBContext "Server=IN-3LDLV64;Database=FamilyDB;User Id=sa;
    Password=sa;Encrypt=False" Microsoft.EntityFrameworkCore.SqlServer
    -OutputDir Models -Context FamilyDbContext -Force
  
    Step 3: Update AppSetting.json (Cut from DBContext Class from OnConfigure Method)

    "ConnectionStrings": {
      "dbcs": "Server=IN-3LDLV64;Database=Test;User Id=sa; Password=sa;Encrypt=False;"
    },

    Step 4: Register the DBContext in program.cs

     builder.Services.AddDbContext<FamilyDbContext>(item => item.UseSqlServer(builder.Configuration.GetConnectionString("dbcs")));
    
    Step 5: Use in Controller using DI
     
    private readonly FamilyDbContext _db
    Do the custructor DI

    Step 6:
      In IActionResult (Async)

      var data = await _db.Member.ToList()
      [HttpDelete]
      public async Task<IActionResult> Delete(int id)
      {
          var data = await unitOfWork.Products.DeleteAsync(id);
          return Ok(data);
      }


    `]}),X0=g.jsxs(g.Fragment,{children:[g.jsx("div",{style:{textAlign:"left",marginLeft:"3%"},children:g.jsx("h2",{children:"CORS"})}),`
    Import in program.cs
    using Microsoft.EntityFrameworkCore;
    
    builder.Services.AddCors(options =>
    {
    options.AddPolicy("AllowSpecificOrigin",
        policy => policy.WithOrigins("https://example.com")  // Allow this domain
                        .AllowAnyHeader()
                        .AllowAnyMethod());
    });
    
    ...

    var app = builder.Build();

    app.UseCors("AllowSpecificOrigin")
    
    Note:
    .policy.WithOrigin()
    .policy.WithHeader() OR
    .WithHeaders("Content-Type", "Authorization") OR
    .WithHeaders("Content-Type", "Authorization", "X-CSRF-TOKEN","Content-Type");
    .policy.WithMetho("PUT","GET","POST","DELETE","PATCH")
  `]}),W0=g.jsxs(g.Fragment,{children:[g.jsx("div",{style:{textAlign:"left",marginLeft:"3%"},children:g.jsx("h2",{children:"JWT"})}),`
    JWT Implementation
    Generate JWT Token
    
    Step 1:
    Install the required packages:

    Microsoft.AspNetCore.Authentication.JwtBearer;
    Microsoft.IdentityModel.Tokens;
    System.IdentityModel.Tokens.Jwt;
    System.Security.Claims

    Step 2:
    In appSetting.json file add the following:

    "Jwt": {
        "Key": "ThisisyourkeyThisisyourkeyThisisyourkeyThisisyourkeyThisisyourkey",
        "Issuer": "Iamyourissuer",
        "Audience": "Iamyouraudience",
        "Subject": "thisisyoursubject"
    }

    Step 3: Create Claims with Subject and Payload.

    var claims = new[]
    {
        new Claim(System.IdentityModel.Tokens.Jwt.JwtRegisteredClaimNames.Sub,_configuration["Jwt:Subject"]),
        new Claim("Id",username),
        new Claim("Password",password),
        new Claim(ClaimTypes.Role,"Admin")
    };

    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));

    var signIn = new SigningCredentials(key,SecurityAlgorithms.HmacSha256);

    var token = new JwtSecurityToken(
        _configuration["Jwt:Issuer"],
        _configuration["Jwt:Audience"],
        claims,
        expires: DateTime.UtcNow.AddMinutes(1),
        signingCredentials:signIn
    );

    return new JwtSecurityTokenHandler().WriteToken(token)

    Step 4:
    Validate JWT Token in program.cs file

    Namespace required:
    using Microsoft.AspNetCore.Authentication.JwtBearer;

    Add following code before builer.build()

    builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(
    options =>
    {
        options.RequireHttpsMetadata = false;
        options.SaveToken = true;
        options.TokenValidationParameters = new TokenValidationParameters()
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidAudience = builder.Configuration["Jwt:Audience"],
            ValidIssuer = builder.Configuration["Jwt:Issuer"],
            IssuerSigningKey = new
            SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))
        };
    })

    `,g.jsx("h3",{children:"JWT token validation using Custom Middleware"}),`
        Validate a JWT token in a custom middleware in ASP.NET Core.

        1. Create the Custom Middleware

        You can create a middleware class that intercepts requests and validates the JWT token manually.

        using Microsoft.AspNetCore.Http;
        using Microsoft.Extensions.Configuration;
        using Microsoft.IdentityModel.Tokens;
        using System.IdentityModel.Tokens.Jwt;
        using System.Text;
        using System.Threading.Tasks;

        public class JwtValidationMiddleware
        {
            private readonly RequestDelegate _next;
            private readonly IConfiguration _configuration;

            public JwtValidationMiddleware(RequestDelegate next, IConfiguration configuration)
            {
                _next = next;
                _configuration = configuration;
            }

            public async Task InvokeAsync(HttpContext context)
            {

            // Skip validation for login or register routes
                var path = context.Request.Path.Value?.ToLower();

                if (path.Contains("/api/auth/login") || path.Contains("/api/auth/register"))
                {
                    await _next(context);
                    return;
                }


                var token = context.Request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();

                if (token == null)
                {
                    context.Response.StatusCode = 401; // Unauthorized
                    await context.Response.WriteAsync("Token is missing");
                    return;
                }

                try
                {
                    var tokenHandler = new JwtSecurityTokenHandler();
                    var key = Encoding.ASCII.GetBytes(_configuration["Jwt:Key"]); // Secret key from appsettings
                    tokenHandler.ValidateToken(token, new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(key),
                        ValidateIssuer = true,
                        ValidIssuer = _configuration["Jwt:Issuer"],
                        ValidateAudience = true,
                        ValidAudience = _configuration["Jwt:Audience"],
                        ValidateLifetime = true
                    }, out SecurityToken validatedToken);

                    // Optionally attach user info to context
                    var jwtToken = (JwtSecurityToken)validatedToken;
                    context.Items["UserId"] = jwtToken.Claims.First(x => x.Type == "id").Value;

                    await _next(context); // Call the next middleware
                }
                catch
                {
                    context.Response.StatusCode = 401;
                    await context.Response.WriteAsync("Invalid Token");
                }
            }
        }

        2. Register Middleware in Program.cs
        var builder = WebApplication.CreateBuilder(args);
        var app = builder.Build();

        // Add your middleware before controllers
        app.UseMiddleware<JwtValidationMiddleware>();

        app.MapControllers();
        app.Run();

        3. Sample appsettings.json for JWT
        {
        "Jwt": {
            "Key": "ThisIsASecretKeyForJWT12345",
            "Issuer": "MyApp",
            "Audience": "MyAppUsers"
        }
        }

        4. Notes & Tips

        Token Extraction: Usually from Authorization header as Bearer <token>.

        Attach Info: You can attach user info to HttpContext.Items to use later in controllers.

        Middleware Order: Ensure this runs before any endpoints that require authentication.

        Custom Claims: You can validate custom claims if needed.
   
   `]}),$0=g.jsxs(g.Fragment,{children:[g.jsx("div",{style:{textAlign:"left",marginLeft:"3%"},children:g.jsx("h2",{children:"X-CSRF"})}),"Good Video Link with Salt ",g.jsx("br",{}),g.jsx("a",{href:"https://youtu.be/RRLW9dVn7Bg",target:"_blank",children:"Video Link"}),`

    1. What is CSRF?

        CSRF (Cross-Site Request Forgery) is a type of attack where:

        An attacker tricks a user’s browser into sending unwanted requests to a website where the user is already authenticated.

        For example: if a user is logged in to their banking site, a malicious site can trigger a money transfer request in the background without the user knowing.

        Problem: The server thinks the request is legitimate because the user is already authenticated via cookies/session.
            
    2. What is an Anti-Forgery Token?

        ASP.NET Core uses Anti-Forgery Tokens to prevent CSRF attacks.

        An anti-forgery token is a unique, secret value generated by the server and associated with the user’s session.

        The server checks the token on every state-changing request (like POST, PUT, DELETE) to ensure the request is coming from the legitimate user.
            
    3. How ASP.NET Core Implements Anti-Forgery
        A. In Razor Pages / MVC Forms

        In your view, include the token:

        <form method="post">
            @Html.AntiForgeryToken()
            <input type="text" name="Name" />
            <button type="submit">Submit</button>
        </form>

        @Html.AntiForgeryToken() injects a hidden input field like:

        <input name="__RequestVerificationToken" type="hidden" value="random_token_value" />
        
    4. On the controller action, validate automatically:

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult SubmitForm(MyModel model)
        {
            // This code runs only if the token is valid
            return Ok();
        }

    -----------------------------1. Dot Net Core API + React----------------------------------
    
    2. Configure Anti-Forgery in Program.cs
        builder.Services.AddControllers();
        builder.Services.AddAntiforgery(options =>
        {
            options.HeaderName = "X-CSRF-TOKEN"; // Header name for AJAX
        });

        var app = builder.Build();

        app.UseAuthentication();
        app.UseAuthorization();

        app.MapControllers();
        app.Run();

    3. Generate CSRF Token in Controller

        using Microsoft.AspNetCore.Antiforgery;
        using Microsoft.AspNetCore.Mvc;

        [ApiController]
        [Route("api/[controller]")]
        public class CsrfController : ControllerBase
        {
            private readonly IAntiforgery _antiforgery;

            public CsrfController(IAntiforgery antiforgery)
            {
                _antiforgery = antiforgery;
            }

            [HttpGet("token")]
            public IActionResult GetToken()
            {
                var tokens = _antiforgery.GetAndStoreTokens(HttpContext);
                return Ok(new { csrfToken = tokens.RequestToken });
            }
        }

    4. Validate CSRF Token in Middleware

        You can create a custom middleware for CSRF validation on state-changing requests (POST/PUT/DELETE):

        public class CsrfMiddleware
        {
            private readonly RequestDelegate _next;
            private readonly IAntiforgery _antiforgery;

            public CsrfMiddleware(RequestDelegate next, IAntiforgery antiforgery)
            {
                _next = next;
                _antiforgery = antiforgery;
            }

            public async Task InvokeAsync(HttpContext context)
            {
                if (HttpMethods.IsPost(context.Request.Method) ||
                    HttpMethods.IsPut(context.Request.Method) ||
                    HttpMethods.IsDelete(context.Request.Method))
                {
                    try
                    {
                        await _antiforgery.ValidateRequestAsync(context);
                    }
                    catch
                    {
                        context.Response.StatusCode = 400;
                        await context.Response.WriteAsync("Invalid CSRF Token");
                        return;
                    }
                }

                await _next(context);
            }
        }


        Add the middleware after authentication in Program.cs:

        app.UseAuthentication();
        app.UseMiddleware<CsrfMiddleware>();
        app.UseAuthorization();

    5. Front-End: Include CSRF Token

        Get the token from /api/csrf/token

        Include it in headers for requests:

        const csrfToken = await fetch('/api/csrf/token').then(res => res.json());

        fetch('/api/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 6Bearer 7{jwtToken}6,  put carret instad of 6 and dowler instead 7
                'X-CSRF-TOKEN': csrfToken.csrfToken
            },
            body: JSON.stringify({ name: 'Test' })
        });

       -----------------Create custom hook in React to get csrfToken


       Call this after sign-in or on app bootstrap and attach it to all requests.

       eact + fetch (hook):

            // useCsrf.js
            import { useEffect, useState } from "react";

            export function useCsrf() {
            const [csrfToken, setCsrfToken] = useState(null);

            useEffect(() => {
                async function getToken() {
                // include credentials if auth uses cookies
                const res = await fetch("/api/csrf/token", { credentials: "include" });
                if (!res.ok) return;
                const json = await res.json();
                setCsrfToken(json.csrfToken);
                }
                getToken();
            }, []);

            return csrfToken;
            }

        Use it when sending POST/PUT/DELETE:

        import { useCsrf } from "./useCsrf";

        function createItem(data, jwt) {
        const csrfToken = useCsrf(); // or get from context/state

        // Example fetch
        return fetch("/api/items", {
            method: "POST",
            credentials: "include",              // if cookies are used
            headers: {
            "Content-Type": "application/json",
            Authorization: 6Bearer 7{jwt}6,    // if using JWT header
            "X-CSRF-TOKEN": csrfToken || ""    // antiforgery header name your server expects
            },
            body: JSON.stringify(data)
        });
        }
        
    Use CSRF Token in POST Request

        Once the token is available, include it in the header:

        import React, { useState } from "react";
        import { useCsrfToken } from "./hooks/useCsrfToken";

        export default function App() {
        const csrfToken = useCsrfToken();
        const [response, setResponse] = useState("");

        const handleSubmit = async () => {
            const res = await fetch("https://localhost:5001/api/data", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": csrfToken, // must match backend HeaderName
            },
            credentials: "include",
            body: JSON.stringify({ name: "Khalid" }),
            });

            const data = await res.json();
            setResponse(JSON.stringify(data));
        };

        return (
            <div style={{ padding: "2rem" }}>
            <h2>CSRF Token Demo</h2>
            <button onClick={handleSubmit} disabled={!csrfToken}>
                Send Secure POST Request
            </button>
            <p>{response}</p>
            </div>
        );
        }






    `]}),K0=g.jsxs(g.Fragment,{children:[`
   -------------------- Caching/Refresh Caching ------------------------------


    🚀 1️⃣ What is Caching?

    Caching means temporarily storing data (in memory or on disk) so that future requests for the same data can be served faster without re-fetching from the database or external source.
    In short:
    “Don’t hit the database if you already have the same data in memory.”

    ⚙️ 2️⃣ Why Caching is Needed

    Improves performance (faster response time).
    Reduces database load.
    Reduces latency.
    Improves scalability.

    🧠 3️⃣ Types of Caching in .NET Core API
    Type	Description	Example
    In-Memory Caching	Stores data in memory (RAM) of the current server instance.	IMemoryCache
    Distributed Caching	Stores data in an external cache store (shared across multiple servers).	IDistributedCache (e.g., Redis, SQL Server)
    Response Caching	Caches full HTTP responses for GET requests.	[ResponseCache] attribute
    Output Caching (ASP.NET Core 7+)	More advanced version of Response Caching with more control.	[OutputCache] attribute


    Caching: 
    Caching means temporarily storing data (in memory or on disk) so that future 
    requests for the same data can be served faster without re-fetching from the 
    database or external source.
  
    In short:
    “Don’t hit the database if you already have the same data in memory.”
  
    Improves performance (faster response time).
    Reduces database load.
    Reduces latency.
    Improves scalability.

    Example: In-Memory Caching

    builder.Services.AddMemoryCache();

    using Microsoft.Extensions.Caching.Memory;
    using Microsoft.AspNetCore.Mvc;

    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly IMemoryCache _cache;
        public ProductController(IMemoryCache cache)
        {
            _cache = cache;
        }

        [HttpGet("{id}")]
        public IActionResult GetProduct(int id)
        {

        `,g.jsxs("span",{className:"highlightText",children:['string cacheKey = $"product_5id6"; 5-open curly, 6 for close curly ',g.jsx("br",{})]}),g.jsx("span",{className:"highlightText",children:"if (!_cache.TryGetValue(cacheKey, out string product))"}),`

            {
                // Simulate fetching from database
                product = $"Product details for ID: {id}";

                // Set cache with expiration
                var cacheOptions = new MemoryCacheEntryOptions()
                    .SetSlidingExpiration(TimeSpan.FromMinutes(2))
                    .SetAbsoluteExpiration(TimeSpan.FromMinutes(5));

                _cache.Set(cacheKey, product, cacheOptions);
            }

            return Ok(product);
        }
    }
    `,"🧩 Explanation: ",g.jsx("br",{}),g.jsx("br",{}),g.jsxs("div",{style:{marginLeft:"10%",background:"black",color:"white",width:"60%",padding:"3%"},children:[g.jsx("br",{}),"private readonly IMemoryCache _cache; ",g.jsx("br",{}),g.jsx("br",{}),"_cache.TryGetValue() → checks if data exists in cache. ",g.jsx("br",{}),g.jsx("br",{}),"_cache.Set() → stores data with expiration policy. ",g.jsx("br",{}),g.jsx("br",{}),"SlidingExpiration → resets the timer each time it’s accessed. ",g.jsx("br",{}),g.jsx("br",{}),"AbsoluteExpiration → removes after fixed duration no matter what.",g.jsx("br",{})," ",g.jsx("br",{}),"_cache.Remove(cacheKey);",g.jsx("br",{}),g.jsx("br",{})]}),`
--------------------------------------------------------------------------
    🧠 Example: Manual Cache Refresh
    [HttpPost("update/{id}")]
    public IActionResult UpdateProduct(int id, [FromBody] string newData)
    {
        // Update in database (simulated)
        string updatedData = $"Updated product {id}: {newData}";

        // Remove old cache entry
        string cacheKey = $"product_{id}";
        _cache.Remove(cacheKey);

        // Optionally refresh cache immediately
        _cache.Set(cacheKey, updatedData, TimeSpan.FromMinutes(5));

        return Ok("Cache refreshed successfully!");
    }


    ✅ This ensures that whenever data changes, your cache is refreshed.

    1️⃣ SetSlidingExpiration(TimeSpan.FromMinutes(2))
    👉 Meaning:

    The cached item will expire if it has not been accessed for 2 minutes.

    🧠 Think of it like:

    “As long as someone keeps using me, I’ll stay alive. But if no one uses me for 2 minutes, remove me.”

    Example:

    Cache item added at 10:00 AM
    Someone accesses it at 10:01 AM, so the timer resets.
    Another access at 10:02:30 AM, timer resets again.
    If no one accesses it by 10:04:30 AM, the item expires and is removed.
    So the expiration time “slides” forward every time the data is used — hence the name sliding expiration.

  
  `]}),Q0=g.jsxs(g.Fragment,{children:[g.jsx("div",{style:{textAlign:"left",marginLeft:"3%"},children:g.jsx("h2",{children:"Return Type"})}),`
        1. Enable XML Formatter in Program.cs

        builder.Services.AddControllers()
            .AddXmlSerializerFormatters(); // Enables XML output

             and Calling in Header: Accept: application/xml

        🧩 3. Example: Controller Method Returning XML
        using Microsoft.AspNetCore.Mvc;

        [ApiController]
        [Route("api/[controller]")]
        public class ProductsController : ControllerBase
        {
            [HttpGet("{id}")]
            [Produces("application/xml")] // Explicitly tells Swagger/clients that this returns XML
            public IActionResult GetProduct(int id)
            {
                var product = new Product
                {
                    Id = id,
                    Name = "Laptop",
                    Price = 50000
                };

                return Ok(product);
            }
        }

        public class Product
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public decimal Price { get; set; }
        }

        4. How to Request XML from the Client

        curl -H "Accept: application/xml" https://localhost:5001/api/products/1

        Example using Postman

        Go to Headers tab

        Add:
        Accept → application/xml

        🧾 5. Force JSON (if both are configured)

        If you have both JSON and XML formatters configured, the response depends on the client’s Accept header.

        If you want to always return JSON, just remove the Accept header or configure like this:

        return new JsonResult(product);

        ------------------------------------------------------------------------------------------
        For both:

        🧩 In Program.cs
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.
        builder.Services.AddControllers(options =>
        {
            // Optional: can add global filters here if needed
        })
        // Add both JSON (default) and XML support
        .AddJsonOptions(options =>
        {
            // Customize JSON behavior if needed
            options.JsonSerializerOptions.PropertyNamingPolicy = null;
        })
        .AddXmlSerializerFormatters();

        🧠 How It Works

        .AddJsonOptions() → keeps JSON as default (using System.Text.Json)

        .AddXmlSerializerFormatters() → adds XML serialization

        The API will now auto-detect which format to return based on the Accept header in the request.

        🧩 Example Controller
        using Microsoft.AspNetCore.Mvc;

        [ApiController]
        [Route("api/[controller]")]
        public class EmployeesController : ControllerBase
        {
            [HttpGet("{id}")]
            public IActionResult GetEmployee(int id)
            {
                var employee = new Employee
                {
                    Id = id,
                    Name = "Khalid Akhter",
                    Designation = "Principal Consultant",
                    Salary = 120000
                };

                return Ok(employee);
            }
        }

        public class Employee
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public string Designation { get; set; }
            public decimal Salary { get; set; }
        }


        🧪 Test the Response Format
        🧾 1. JSON (default)

        If you send a normal GET request (no special headers), you get:

        curl https://localhost:5001/api/employees/1


        Response:

        {
        "Id": 1,
        "Name": "Khalid Akhter",
        "Designation": "Principal Consultant",
        "Salary": 120000
        }

        🧾 2. XML (when requested)

        Send request with:

        curl -H "Accept: application/xml" https://localhost:5001/api/employees/1


        Response:

        <Employee>
        <Id>1</Id>
        <Name>Khalid Akhter</Name>
        <Designation>Principal Consultant</Designation>
        <Salary>120000</Salary>
        </Employee>

    Note:

        fetch("https://localhost:5001/api/employees", {
        method: "POST",
        headers: {
            "Content-Type": "application/xml",  // 👈 You are sending XML
            "Accept": "application/xml"         // 👈 You want XML in response
        },
        body: xmlData
        })

        .then(response => response.text())
        .then(data => console.log("Response:", data))// her we can use setData(Response);
        .catch(err => console.error(err));

        `]}),J0=g.jsxs(g.Fragment,{children:[g.jsx("div",{style:{textAlign:"left",marginLeft:"3%"},children:g.jsx("h2",{children:"Throttling"})}),`
    -------------------------------Welcome to Throttling--------------------------------------------

    Throttling in ASP.NET (or any web API) means limiting the number of requests a client (user, IP, or application) can send to your API within a specific time window.
    It helps you control the traffic load and prevent abuse (like Denial-of-Service or brute-force attacks)

        🧰 Step 1: Install Package

        `,g.jsx("span",{className:"highlightText",children:"dotnet add package AspNetCoreRateLimit"}),`

        🧰 Step 2: Configure in Program.cs

        using AspNetCoreRateLimit;

        var builder = WebApplication.CreateBuilder(args);

    // Option 1   Throttling

        // Add memory cache (required by rate limiting)
        builder.Services.AddMemoryCache();
    
        // Load configuration from appsettings.json
        builder.Services.Configure<IpRateLimitOptions>(builder.Configuration.GetSection("IpRateLimiting"));
        // Register rate limiting services
        builder.Services.AddInMemoryRateLimiting();
        builder.Services.AddSingleton<IRateLimitConfiguration, RateLimitConfiguration>();
     // End of Option 1

    //OR

     --New Code

      builder.Services.AddMemoryCache();
      builder.Services.AddInMemoryRateLimiting();

      builder.Services.Configure<IpRateLimitOptions>(options =>
      {
          options.GeneralRules = new List<RateLimitRule>
                  {
                      new RateLimitRule
                      {
                          Endpoint = "*",       // All endpoints
                          Period = "5s",       // Per m s
                          Limit = 2            // Max 5 requests
                      }
                  };
      });
      builder.Services.AddSingleton<IRateLimitConfiguration, RateLimitConfiguration>();
      ......
      app.UseIpRateLimiting();
      ---------------------------End of new code


        builder.Services.AddControllers();

        var app = builder.Build();

        app.UseIpRateLimiting(); // Enable IP-based throttling

        app.MapControllers();
        app.Run();

        Step 3: Add Configuration in appsettings.json

        "IpRateLimiting": {
        "EnableEndpointRateLimiting": true,
        "StackBlockedRequests": false,
        "RealIpHeader": "X-Real-IP",
        "ClientIdHeader": "X-ClientId",
        "HttpStatusCode": 429,
        "GeneralRules": [
            {
            "Endpoint": "ap/login",
            "Period": "1m",
            "Limit": 3
            },
            {
              "Endpoint": "/api/customers",
              "Period": "1m",
              "Limit": 5
            },
            {
              "Endpoint": "/api/orders",
              "Period": "1m",
              "Limit": 3
            },
            {
              "Endpoint":"*",
              "period": "10m"
              "Limit":10
            }
        ]
        }

        A specific endpoint rule (like /api/auth/login), and
        A general wildcard rule (*),
        the specific rule always takes precedence over the general one


        🔹 This means: Each IP can call any endpoint at most 5 times per minute.


        🔒 Why Throttling Is Important
        Benefit	Description
        🛡 Security	Prevents brute-force or DDoS attacks
        ⚙️ Performance	Ensures fair use among clients
        💰 Cost Control	Avoids overuse of API or bandwidth
        🧩 Stability	Keeps system responsive even under heavy load

        🚀 Advanced: Types of Throttling
        Type	        Description
        IP-based	    Limits requests per IP address
        Client ID-based	Limits requests per API key/client
        User-based	    Limits per authenticated user
        Endpoint-based	Different limits for different APIs

        🧭 Example
        Endpoint	    Limit	    Period
        /api/orders	    10	        per minute
        /api/products	100	        per minute
        /api/admin/*	5	        per hour

        ✅ Summary
        Concept	Explanation
        Throttling	Controls how many API requests a client can make in a given time
        Common Code	AspNetCoreRateLimit middleware
        Error Code	HTTP 429 (Too Many Requests)
        Benefits	Prevents overload, improves fairness, enhances security



`]}),Z0=g.jsxs(g.Fragment,{children:[g.jsx("div",{style:{textAlign:"left",marginLeft:"3%"},children:g.jsx("h2",{children:"Scope"})}),g.jsx("span",{className:"highlightText",children:" Welcome to Scope/DI "}),`

    🧠 What is Dependency Injection (DI)?

        In ASP.NET Core, Dependency Injection means you let the framework create and manage 
        class objects (dependencies) instead of creating them manually using new.

        Example:

        Instead of:

        var repo = new CustomerRepository();


        You do:

        public class CustomerService
        {
            private readonly ICustomerRepository _repo;

            public CustomerService(ICustomerRepository repo)
            {
                _repo = repo;
            }
        }

        And you register it in Program.cs:

        builder.Services.AddScoped<ICustomerRepository, CustomerRepository>();
        So ASP.NET Core automatically injects the correct instance when needed.

        ⚙️ The Three DI Lifetimes

        1️⃣ AddTransient

        🔹 New instance every time you request it.

        Created each time the service is requested.

        Best for lightweight, stateless, and independent services.

        builder.Services.AddTransient<IMailService, MailService>();


        Use case example:

        Email sender

        Utility/helper classes (e.g., data mappers, formatters)

        🧩 Example:

        public class MailService : IMailService
        {
            public MailService()
            {
                Console.WriteLine("MailService Created");
            }
        }


        If your controller uses IMailService multiple times, it creates a new instance every time.

        2️⃣ AddScoped

        🔹 One instance per HTTP request (scope).

        The same instance is used throughout a single API request, but a new one is created for each new HTTP request.

        Perfect for business logic or database repository classes.

        builder.Services.AddScoped<ICustomerRepository, CustomerRepository>();


        Use case example:

        Repository pattern

        Unit of Work

        Business logic services

        🧩 Example:
        If a controller and a service both depend on ICustomerRepository, they share the same instance during that HTTP request.

        3️⃣ AddSingleton

        🔹 One instance for the entire application lifetime.

        Created once and shared globally across all requests and users.

        Ideal for configuration, logging, or caching.

        builder.Services.AddSingleton<IAppConfig, AppConfig>();


        Use case example:

        App settings

        In-memory cache

        Static data providers

        🧩 Example:
        If you have 1000 API requests, they all share the same Singleton instance.




    `]}),ex=g.jsxs(g.Fragment,{children:["=====================================================Swagger",`
        builder.Services.AddSwaggerGen(c =>
        {
            c.SwaggerDoc("v1", new OpenApiInfo { Title = "Interns API", Version = "v2-test-Azure_fromDifferentSource" });

            // Add security definition for JWT Bearer Authentication
            c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
            {
                In = ParameterLocation.Header,
                Description = "Please enter your token",
                Name = "Authorization",
                Type = SecuritySchemeType.Http,
                Scheme = "bearer"
            });

            // Add security requirement to all operations in Swagger UI
            c.AddSecurityRequirement(new OpenApiSecurityRequirement
            {
                {
                    new OpenApiSecurityScheme
                    {
                        Reference = new OpenApiReference
                        {
                            Type = ReferenceType.SecurityScheme,
                            Id = "Bearer"
                        }
                    },
                    new string[] { }
                }
            });
        });

        ------------------------------------------------------
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            //app.UseSwaggerUI(); //OR
            app.UseSwaggerUI(options =>
            {
                options.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
                options.InjectJavascript("/swagger-custom/custom.js");
            });
        }



`]}),tx=g.jsxs(g.Fragment,{children:[g.jsx("div",{style:{textAlign:"left",marginLeft:"3%"},children:g.jsx("h2",{children:"Compression"})}),`
    🧠 What Is Compression in ASP.NET Core?

        Compression means reducing the size of the data (like JSON, XML, HTML, or text) 
        before sending it from the server to the client — typically the response body.

        ⚙️ Example

        Without compression:

        {
        "id": 1,
        "name": "Khalid Akhter",
        "designation": "Principal Consultant"
        }

        might be 1 KB in size.

        With compression (e.g., Gzip), it might become 200 bytes — a huge savings.

        The client browser or API consumer automatically decompresses it when received.

        🚀 Why Use Compression?
        Benefit	Description
        ⚡ Faster Response	Smaller payload = faster network transfer
        💾 Lower Bandwidth	Saves bandwidth and hosting cost
        🌐 Better Performance	Improves user experience, especially over slow connections
        🔒 Secure Transport	Works seamlessly with HTTPS
        🧩 Types of Compression

        ASP.NET Core supports:

        Algorithm	    Description
        ----------------------------------------------------------------------
        Gzip	            Most common, widely supported
        Brotli	            Newer, provides better compression (especially for text)

        Step 1️⃣ — Add NuGet Package (if not already available)
        dotnet add package Microsoft.AspNetCore.ResponseCompression

        using Microsoft.AspNetCore.ResponseCompression;
        using System.IO.Compression;

        var builder = WebApplication.CreateBuilder(args);

        // Configure compression
        builder.Services.AddResponseCompression(options =>
        {
            // Enable Gzip and Brotli
            options.Providers.Add<GzipCompressionProvider>();
            options.Providers.Add<BrotliCompressionProvider>();
            
            // Optional: only compress certain MIME types
            options.MimeTypes = ResponseCompressionDefaults.MimeTypes.Concat(new[]
            {
                "application/json"
            });
        });

        // Configure Gzip and Brotli levels
        builder.Services.Configure<GzipCompressionProviderOptions>(options =>
        {
            options.Level = CompressionLevel.Fastest; // or Optimal
        });

        builder.Services.Configure<BrotliCompressionProviderOptions>(options =>
        {
            options.Level = CompressionLevel.Fastest;
        });

        var app = builder.Build();

        // Enable compression middleware
        app.UseResponseCompression();

        app.MapControllers();
        app.Run();

        ✅ Summary
        Concept	Description
        Compression	Reduces response size sent to the client
        Common Types	Gzip, Brotli
        Middleware	UseResponseCompression()
        Benefit	Faster response, less bandwidth
        Header	Content-Encoding: gzip or br

        ⚙️ If the Client Doesn’t Send Accept-Encoding

        If the client doesn’t send that header,
        then no compression happens.
        Response will be plain text or JSON without Content-Encoding.

        🧭 Summary Table
        Client’s Header	            Compression Used	Response Header
        Accept-Encoding: br, gzip   Brotli	            Content-Encoding: br
        Accept-Encoding: gzip       Gzip	            Content-Encoding: gzip
        Accept-Encoding: none or    ❌ None	           (no Content-Encoding)
                not present


`]}),nx=g.jsxs(g.Fragment,{children:[g.jsx("div",{style:{textAlign:"left",marginLeft:"3%"},children:g.jsx("h2",{children:"Worker Service"})}),`      🧩 What is a Worker Service in .NET Core?

        A Worker Service is a background application built using the Generic Host in .NET Core.
        It runs without user interaction, performing background or scheduled tasks continuously or 
        at intervals — very similar to a Windows Service or Linux daemon.

        🏗 Typical Use Cases

        ✅ Background processing — sending emails, reports, or cleanup jobs
        ✅ Message queue processing — e.g., reading from Azure Service Bus, RabbitMQ, or Kafka
        ✅ File watchers or data sync services
        ✅ Scheduled jobs (cron-style logic)
        ✅ IoT device listeners or monitoring services


        ⚙️ How to Create a Worker Service

        In Visual Studio or CLI:

        Using CLI:
        dotnet new worker -n MyWorkerService

        📁 Default Structure
        MyWorkerService/
        │
        ├── Program.cs
        ├── appsettings.json
        └── Worker.cs

        🧩 Example: Worker Service Code
        Program.cs
        using Microsoft.Extensions.DependencyInjection;
        using Microsoft.Extensions.Hosting;
        using Microsoft.Extensions.Logging;

        Host.CreateDefaultBuilder(args)
            .ConfigureServices((hostContext, services) =>
            {
                services.AddHostedService<Worker>(); // Register worker
            })
            .Build()
            .Run();

        Worker.cs
        using Microsoft.Extensions.Hosting;
        using Microsoft.Extensions.Logging;

        public class Worker : BackgroundService
        {
            private readonly ILogger<Worker> _logger;

            public Worker(ILogger<Worker> logger)
            {
                _logger = logger;
            }

            protected override async Task ExecuteAsync(CancellationToken stoppingToken)
            {
                while (!stoppingToken.IsCancellationRequested)
                {
                    _logger.LogInformation("Worker running at: {time}", DateTimeOffset.Now);
                    await Task.Delay(5000, stoppingToken); // Wait 5 seconds
                }
            }
        }


        🟢 This worker runs every 5 seconds and writes a log message.
    
    
    
    
    `]}),ix=g.jsxs(g.Fragment,{children:[g.jsx("div",{style:{textAlign:"left",marginLeft:"3%"},children:g.jsx("h2",{children:"Global Exception"})}),`

        🧩 What is Global Exception Handling?

        Global Exception Handling in ASP.NET Core ensures that all unhandled exceptions (in controllers, 
        services, etc.) are:    Caught automatically
                                Logged properly
                                And a consistent response (JSON or XML) is returned to the client

        It avoids exposing stack traces or internal errors to users.

        🧱 There Are 3 Common Ways to Handle It Globally
        Approach	                            Description
        ✅ 1. Custom Middleware (Recommended)   Centralized control, works across the pipeline
        2. UseExceptionHandler()	            Built-in ASP.NET Core feature
        3. Exception Filters	                Controller-level or global MVC filters

        Let’s focus on the best approach — using a Custom Middleware.

        🧠 1️⃣ Create a Custom Exception Middleware
        📄 ExceptionHandlingMiddleware.cs
        
        using Microsoft.AspNetCore.Http;
        using Microsoft.Extensions.Logging;
        using System.Net;
        using System.Text.Json;

        public class ExceptionHandlingMiddleware
        {
            private readonly RequestDelegate _next;
            private readonly ILogger<ExceptionHandlingMiddleware> _logger;

            public ExceptionHandlingMiddleware(RequestDelegate next, ILogger<ExceptionHandlingMiddleware> logger)
            {
                _next = next;
                _logger = logger;
            }

            public async Task InvokeAsync(HttpContext context)
            {
                try
                {
                    // Pass control to next middleware
                    await _next(context);
                }
                catch (Exception ex)
                {
                    // Log exception
                    _logger.LogError(ex, "An unhandled exception occurred.");

                    // Return formatted error response
                    await HandleExceptionAsync(context, ex);
                }
            }

            private static Task HandleExceptionAsync(HttpContext context, Exception exception)
            {
                var response = context.Response;
                response.ContentType = "application/json";

                // You can customize the status code based on exception type
                response.StatusCode = exception switch
                {
                    ArgumentNullException => (int)HttpStatusCode.BadRequest,
                    UnauthorizedAccessException => (int)HttpStatusCode.Unauthorized,
                    _ => (int)HttpStatusCode.InternalServerError
                };

                var result = JsonSerializer.Serialize(new
                {
                    statusCode = response.StatusCode,
                    message = exception.Message,
                    detail = "Something went wrong. Please contact support."
                });

                return response.WriteAsync(result);
            }
        }

        ⚙️ 2️⃣ Register Middleware in Program.cs

        Add this before app.UseAuthorization():

        var app = builder.Build();

        app.UseMiddleware<ExceptionHandlingMiddleware>(); // ✅ Custom global handler

        app.UseHttpsRedirection();
        app.UseAuthorization();
        app.MapControllers();

        app.Run();

        🧪 3️⃣ Example Controller to Test
        [ApiController]
        [Route("api/[controller]")]
        public class TestController : ControllerBase
        {
            [HttpGet("error")]
            public IActionResult ThrowError()
            {
                throw new Exception("Test exception for demo!");
            }
        }


        If you hit:
        GET /api/test/error

        You’ll get a clean, consistent response like:

        {
        "statusCode": 500,
        "message": "Test exception for demo!",
        "detail": "Something went wrong. Please contact support."
        }


        And it’s logged internally via ILogger 🔥

        🧩 4️⃣ Optional: Global Exception Filter (Alternative)

        You can also use an Exception Filter:

        public class GlobalExceptionFilter : IExceptionFilter
        {
            private readonly ILogger<GlobalExceptionFilter> _logger;

            public GlobalExceptionFilter(ILogger<GlobalExceptionFilter> logger)
            {
                _logger = logger;
            }

            public void OnException(ExceptionContext context)
            {
                _logger.LogError(context.Exception, "Unhandled exception");
                context.Result = new ObjectResult(new
                {
                    Message = context.Exception.Message,
                    Code = 500
                })
                {
                    StatusCode = StatusCodes.Status500InternalServerError
                };
                context.ExceptionHandled = true;
            }
        }


        Then register it globally:

        builder.Services.AddControllers(options =>
        {
            options.Filters.Add<GlobalExceptionFilter>();
        });

        🧭 Summary
        Method	Layer	Recommended
        ✅ Custom Middleware	Global (Request Pipeline)	✅ Best choice
        UseExceptionHandler()	Global	For simple APIs
        Exception Filter	MVC/Controller level	Optional
        🧰 Pro Tips

        Always log full exception details (stack trace) internally, not in API response.

        Use custom exception types for known business errors (e.g., NotFoundException, ValidationException).

        Add correlation ID for tracing distributed systems.

        Use libraries like Serilog, NLog, or Application Insights for advanced logging.



`]}),sx=g.jsx(g.Fragment,{children:`
    
    🧩 Step 1: Interface

        File: Services/Email/IMailService.cs

        namespace MyApp.Services.Email
        {
            public interface IMailService
            {
                Task SendEmailAsync(string to, string subject, string body);
            }
        }

        🧩 Step 2: Configuration in appsettings.json

        Add your mail settings under "SmtpSettings":

        "SmtpSettings": {
        "Host": "smtp.gmail.com",
        "Port": 587,
        "EnableSsl": true,
        "UserName": "youraddress@gmail.com",
        "Password": "your-app-password",
        "From": "youraddress@gmail.com"
        }


        ⚠️ Note:

        For Gmail, you need to create an App Password (not your regular password) from your Google account.

        For Outlook/Office365, use "Host": "smtp.office365.com", "Port": 587.

        🧩 Step 3: Implementation

        File: Services/Email/MailService.cs

        using Microsoft.Extensions.Configuration;
        using System.Net;
        using System.Net.Mail;
        using System.Threading.Tasks;

        namespace MyApp.Services.Email
        {
            public class MailService : IMailService
            {
                private readonly IConfiguration _configuration;

                public MailService(IConfiguration configuration)
                {
                    _configuration = configuration;
                }

                public async Task SendEmailAsync(string to, string subject, string body)
                {
                    var smtpSection = _configuration.GetSection("SmtpSettings");
                    var host = smtpSection["Host"];
                    var port = int.Parse(smtpSection["Port"]);
                    var enableSsl = bool.Parse(smtpSection["EnableSsl"]);
                    var username = smtpSection["UserName"];
                    var password = smtpSection["Password"];
                    var from = smtpSection["From"];

                    using var smtp = new SmtpClient(host)
                    {
                        Port = port,
                        EnableSsl = enableSsl,
                        Credentials = new NetworkCredential(username, password)
                    };

                    using var message = new MailMessage
                    {
                        From = new MailAddress(from, "MyApp Notifications"),
                        Subject = subject,
                        Body = body,
                        IsBodyHtml = true
                    };

                    message.To.Add(to);

                    await smtp.SendMailAsync(message);
                }
            }
        }


        ✅ Key points

        Uses System.Net.Mail namespace.

        Reads SMTP settings from configuration.

        Supports HTML body (IsBodyHtml = true).

        Uses async sending (SendMailAsync).

        🧩 Step 4: Register in Program.cs
        using MyApp.Services.Email;

        var builder = WebApplication.CreateBuilder(args);

        // Register services
        builder.Services.AddScoped<IMailService, MailService>();

        builder.Services.AddControllers();

        var app = builder.Build();

        app.MapControllers();

        app.Run();

        🧩 Step 5: Create Controller for Testing

        File: Controllers/EmailController.cs

        using Microsoft.AspNetCore.Mvc;
        using MyApp.Services.Email;

        namespace MyApp.Controllers
        {
            [ApiController]
            [Route("api/[controller]")]
            public class EmailController : ControllerBase
            {
                private readonly IMailService _mailService;

                public EmailController(IMailService mailService)
                {
                    _mailService = mailService;
                }

                [HttpPost("send")]
                public async Task<IActionResult> Send([FromQuery] string to)
                {
                    string subject = "Welcome to MyApp!";
                    string body = "<h2>Hello!</h2><p>This is a test email from MyApp.</p>";

                    await _mailService.SendEmailAsync(to, subject, body);
                    return Ok($"Email sent to {to}");
                }
            }
        }


        ✅ Test endpoint:

        POST https://localhost:5001/api/email/send?to=someone@example.com
    
    
    `}),rx=g.jsxs(g.Fragment,{children:[g.jsxs("span",{className:"highlightText",children:[" ","SSMS 2022: Integration with Open AI GPT-4"," "]}),`
    
    1. Set up Azure OpenAI Service:

    Create an Azure OpenAI resource: Sign in to the Azure portal, navigate to Azure AI services, 
    and create a new Azure OpenAI account. Configure the required details like subscription, 
    resource group, region, name, and pricing tier.

    Deploy an OpenAI model: Within the Azure AI Foundry portal (accessible from your Azure 
    OpenAI resource overview), deploy a base model like GPT-4 chat completion. Assign a deployment 
    name during this process.

    Obtain endpoint and key: Go to your Azure OpenAI resource in the Azure portal, navigate to 
    "Keys and Endpoint" under Resource Management, and note down the Endpoint URL and one of the 
    API keys.

`]}),ax=g.jsxs(g.Fragment,{children:[g.jsx("div",{style:{textAlign:"left",marginLeft:"3%"},children:g.jsx("h2",{children:"Prompt Engineering"})}),g.jsx("div",{style:{textAlign:"left",marginLeft:"3%"},children:g.jsx("a",{href:"/dotnet/PromptEngineering.pdf",target:"_blank",children:"Prompt Engineering"})}),g.jsx("div",{style:{textAlign:"left",marginLeft:"3%"},children:g.jsx("a",{href:"/dotnet/PromptEngineering1.pdf",target:"_blank",children:"Prompt Engineering-1"})})]}),ox=g.jsxs(g.Fragment,{children:[g.jsx("div",{style:{textAlign:"left",marginLeft:"20px"},children:g.jsx("h1",{children:"Question & Answer"})}),"Solid Principal Link",g.jsx("br",{}),g.jsx("a",{href:"https://www.google.com/search?q=solid+principles+in+c%23+with+examples+in+hindi&sca_esv=b04cb06c25fa1fe2&udm=7&biw=1366&bih=633&aic=0&sxsrf=ANbL-n5efZeMIyjxGIq8kjAxifNgeflkrw%3A1767971656094&ei=SBthabTFBaidseMP5c3R2Q0&ved=0ahUKEwi0iaPU3_6RAxWoTmwGHeVmNNsQ4dUDCBE&uact=5&oq=solid+principles+in+c%23+with+examples+in+hindi&gs_lp=EhZnd3Mtd2l6LW1vZGVsZXNzLXZpZGVvIi1zb2xpZCBwcmluY2lwbGVzIGluIGMjIHdpdGggZXhhbXBsZXMgaW4gaGluZGkyBRAhGKABMgUQIRigATIFECEYnwVIsRVQkglY8hJwAXgBkAEAmAGaAaABhAiqAQMwLjm4AQPIAQD4AQGYAgqgAqkIwgIKEAAYsAMY1gQYR8ICBRAAGIAEwgIGEAAYFhgewgILEAAYgAQYhgMYigXCAggQABiiBBiJBcICCBAAGIAEGKIEmAMAiAYBkAYEkgcDMS45oAeCKrIHAzAuObgHpgjCBwUwLjkuMcgHFoAIAA&sclient=gws-wiz-modeless-video#fpstate=ive&vld=cid:0d1d2beb,vid:Xm9fezWpHPg,st:0",target:"_blank",children:"Sold Principal Link "}),g.jsx("br",{}),`
           Implicit and Explicit Interface

           Example of Explicit Interface

            Public interface IAnimal 
             { 
               void Speak(); 
             } 
               
             public class Cat : IAnimal 
             { 
             // Explicit implementation 
       
             void IAnimal.Speak() 
              { 
                 Console.WriteLine("Meow!"); 
              } 
              } 
              
              Cat c = new Cat(); // 
              c.Speak(); ❌ Not accessible 
              ((IAnimal)c).Speak(); // ✅ Works

              public class GetUniqueNumber
              {
                  public HashSet<int> GetUnique()
                  {
                      Random rand = new Random();
                      HashSet<int> numbers = new HashSet<int>();

                      while (numbers.Count < 10)
                      {
                          numbers.Add((rand.Next(1, 101))); // 1 to 100 inclusive
                      }
                      Console.WriteLine(numbers.Count);
                      Console.WriteLine(numbers.ToList()[4]);
                    
                      return numbers;

                  }
              }


    ❓Question 1: ASP.NET Core Request Lifecycle

    🔍 Diagram: ASP.NET Core Request Lifecycle

        Client
          │
          ▼
        Kestrel Server
          │
          ▼
        Middleware Pipeline
          │   ├── Exception Handling
          │   ├── HTTPS Redirection
          │   ├── Routing
          │   ├── Authentication
          │   ├── Authorization
          │   ├── Custom Middleware
          ▼
        Controller / Action
          │
          ▼
        Response Formatting (JSON)
          │
          ▼
        Middleware (on return path)
          │
          ▼
        Kestrel → Client

    ❓Question 2: Middleware Order

    🧩 2. Common Middleware Order

          Here’s a typical and recommended order in Program.cs (or Startup.cs for older projects):

          var builder = WebApplication.CreateBuilder(args);

          var app = builder.Build();

          // 1️⃣ Exception Handling (should be first to catch errors below)
          app.UseExceptionHandler("/error");

          // 2️⃣ HTTPS redirection
          app.UseHttpsRedirection();

          // 3️⃣ Static files (wwwroot)
          app.UseStaticFiles();

          // 4️⃣ Routing
          app.UseRouting();

          // 5️⃣ CORS
          app.UseCors("AllowAll");

          // 6️⃣ Authentication
          app.UseAuthentication();

          // 7️⃣ Authorization
          app.UseAuthorization();

          // 8️⃣ Custom Middleware (e.g., logging, token validation)
          app.UseMiddleware<RequestLoggingMiddleware>();

          // 9️⃣ Endpoints (Controllers, Minimal APIs, Razor Pages)
          app.MapControllers();

          app.Run();



    
    ❓Question 3: Explain the pros, cons, and implementation details of API versioning in ASP.NET Core.

    🧭 What is API Versioning?
    API versioning allows you to manage changes in your API without breaking existing client applications.
    When you make backward-incompatible updates — like changing endpoints, data structures, or business logic — versioning lets old clients keep using older versions while new clients use the latest one.

    Video URL: "https://youtu.be/yw5NS-FNvew"

    🧩 API Versioning Methods

      ASP.NET Core supports multiple versioning strategies — you can use any combination.

      Method	                  Example	          Pros	                        Cons
      URL Path Versioning	      /api/v1/products	Clear, simple, visible in URL	Requires route updates
      Query String Versioning	  /api/products?api-version=1.0	Easy to add	Less RESTful, harder to cache
      Header Versioning	Add x-api-version: 1.0	Clean URL	Clients must set headers manually
      Media Type Versioning	Accept: application/json;version=1.0

    Implementation:
      dotnet add package Microsoft.AspNetCore.Mvc.Versioning


      builder.Services.AddApiVersioning(options =>
      {
          options.DefaultApiVersion = new ApiVersion(1, 0);   // Default version 1.0
          options.AssumeDefaultVersionWhenUnspecified = true; // Assume v1 if no version passed
          options.ReportApiVersions = true;                   // Return version info in headers
          options.ApiVersionReader = new UrlSegmentApiVersionReader(); // Use URL versioning
      });

      3️⃣ Add Version to Controller
      Version 1
      using Microsoft.AspNetCore.Mvc;

      namespace MyApp.Controllers.V1
      {
          [ApiController]
          [Route("api/v{version:apiVersion}/[controller]")]
          [ApiVersion("1.0")]
          public class ProductsController : ControllerBase
          {
              [HttpGet]
              public IActionResult Get() => Ok(new { Version = "1.0", Products = new[] { "Soap", "Shampoo" } });
          }
      }

      Version 2
      namespace MyApp.Controllers.V2
      {
          [ApiController]
          [Route("api/v{version:apiVersion}/[controller]")]
          [ApiVersion("2.0")]
          public class ProductsController : ControllerBase
          {
              [HttpGet]
              public IActionResult Get() => Ok(new { Version = "2.0", Products = new[] { "Soap", "Shampoo", "Conditioner" } });
          }
      }


      4️⃣ Example URLs
      Version	URL
      v1	https://localhost:5001/api/v1/products
      v2	https://localhost:5001/api/v2/products


    ❓Question 4: How have you optimized database access in Entity Framework Core for large-scale applications?

    Optimization	            Purpose
    -------------------------------------------------------------
    AsNoTracking()	            Disable change tracking for reads
    Projection (DTOs)	            Fetch only required columns
    Compiled Queries	            Reuse compiled query plans
    Pagination	                    Handle large result sets efficiently
    Eager Loading	            Avoid N+1 query issue
    DbContext Pooling	            Reuse DB connections
    Caching	                    Reduce database load
    Raw SQL / Stored Procs	    Optimize complex logic
    Indexing	                    Faster lookups
    ExecuteUpdate/Delete	    Batch operations


    ❓Question 5: Describe how you would implement logging in ASP.NET Core with providers such as Serilog or NLog, including structured logging best practices.
       
      Serilog is a third-party structured logging library for .NET applications.
      
      using Serilog;

      var builder = WebApplication.CreateBuilder(args);

      // Configure Serilog before app build
        Log.Logger = new LoggerConfiguration()
            .MinimumLevel.Override("Microsoft", Serilog.Events.LogEventLevel.Error)
            .MinimumLevel.Override("System", Serilog.Events.LogEventLevel.Error)
            .MinimumLevel.Information()
            .WriteTo.Console()
            .WriteTo.File("Logs/app_log.txt", rollingInterval: RollingInterval.Day,
            outputTemplate: "{Timestamp:yyyy-MM-dd HH:mm:ss.fff zzz} [{Level:u3}] {Message:lj}{NewLine}{Exception}" +
                              "{NewLine}------------------------------------------------------------{NewLine}"
            )
            .CreateLogger();
            
        builder.Host.UseSerilog(); // Replace built-in logger with Serilog

      --------------------------------In Controller

      private readonly ILogger<TestController> _logger;

      public TestController(ILogger<TestController> logger)
      {
          _logger = logger;
      }

      [HttpGet("check")]
      public IActionResult Check()
      {
          _logger.LogInformation("✅ Check endpoint called at {Time}", DateTime.Now);
          return Ok("Serilog is working fine!");
      }

      ❓Question 6: Discuss strategies to secure an ASP.NET Core API using OAuth2 and OpenID Connect.
    
      dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer

      🧩 Step 2: Configure Authentication in Program.cs

      Here’s a simple setup using JWT Bearer tokens (OAuth2 flow):

      var builder = WebApplication.CreateBuilder(args);

      builder.Services.AddControllers();

      // 🔐 Add Authentication & JWT Bearer
      builder.Services.AddAuthentication("Bearer")
          .AddJwtBearer("Bearer", options =>
          {
              options.Authority = "https://demo.identityserver.io"; // Identity Provider (OIDC)
              options.Audience = "api1"; // API Resource name
              options.RequireHttpsMetadata = true;
          });

      builder.Services.AddAuthorization();

      var app = builder.Build();

      // Middleware order matters
      app.UseHttpsRedirection();
      app.UseAuthentication(); // 👈 Must come before UseAuthorization
      app.UseAuthorization();

      app.MapControllers();

      app.Run();


      [HttpGet]
          [Authorize] // 🔒 Only accessible with valid JWT token
          public IActionResult GetCustomers()
          {
              return Ok(new[] { "John", "Mary", "Steve" });
          }

    `]}),lx=g.jsxs(g.Fragment,{children:[`

        ⚙️ 1️⃣ What “Performance” Means for an API

        Performance can be measured in multiple ways:

        Response Time (Latency): How long it takes to process a request.

        Throughput (Requests/sec): How many requests your API can handle per second.

        Resource Usage: CPU, memory, and I/O consumption under load.

        Scalability: How performance changes under increased load.

        🚀 2️⃣ Tools to Check API Performance
        ✅ A. Postman or Thunder Client

        Simple manual testing.

        You can view response time directly.

        Great for quick local checks.

        ✅ B. Browser DevTools (Network tab)

        Useful for frontend-connected APIs.

        Shows request duration, size, and status code.

        ✅ C. Benchmark Tools

        Use one of these for realistic load/performance testing:

        Tool	                                Description
        -----------------------------------------------------------------------------------
        🧪 Apache JMeter	                Industry-standard load testing tool (GUI-based).
        ⚙️ k6.io	                        Script-based performance/load testing for modern APIs.
        💨 wrk / Bombardier	                Command-line tools for HTTP benchmarking.
        💻 Visual Studio Load Test (older)	For local or Azure DevOps testing.


        ✅ D. .NET Core Built-in Performance Tools
        🟣 Use ASP.NET Core Middleware to measure execution time

        You can write a custom middleware to log duration for each request.

        public class PerformanceMiddleware
        {
            private readonly RequestDelegate _next;
            private readonly ILogger<PerformanceMiddleware> _logger;

            public PerformanceMiddleware(RequestDelegate next, ILogger<PerformanceMiddleware> logger)
            {
                _next = next;
                _logger = logger;
            }

            public async Task InvokeAsync(HttpContext context)
            {
`,g.jsxs("div",{className:"highlightText",children:["var watch = Stopwatch.StartNew(); ",g.jsx("br",{}),"await _next(context);",g.jsx("br",{}),"watch.Stop();",g.jsx("br",{})]}),`
                _logger.LogInformation("Request [{method}] {url} executed in {duration} ms",
                    context.Request.Method,
                    context.Request.Path,
                    watch.ElapsedMilliseconds);
            }
        }


        Register in Program.cs before other middlewares:

        app.UseMiddleware<PerformanceMiddleware>();


        You’ll see per-request timing in logs.

        ✅ E. Use Application Performance Monitoring (APM) tools

        For production-grade insights:

        Tool	                            Features
        ------------------------------------------------------------------------------
        Application Insights (Azure)	    Full tracing, dependency tracking, live metrics
        New Relic	                    End-to-end monitoring with SQL traces
        Datadog/Dynatrace/Elastic APM	    Distributed tracing, bottleneck detection
        OpenTelemetry	                    Open-source tracing and metrics framework

        📘 Example — using Application Insights:

        builder.Services.AddApplicationInsightsTelemetry();


        Then monitor in Azure Portal → Application Insights → “Performance” tab.

        📊 3️⃣ Metrics to Focus On
        Metric	                Ideal Range	            Description
        ---------------------------------------------------------------------------
        Avg. Response Time	    < 300 ms	            Time to complete API request
        95th Percentile Latency	    < 1 sec	            High-end latency (for 95% of requests)
        CPU Usage	            < 80%	            Indicates server capacity
        Memory Usage	            Stable	            Memory leaks cause growing usage
        Error Rate	            < 1%	            High errors = performance issues
        Throughput (RPS)	    As high as possible	    Requests per second

        🧠 4️⃣ Optimize API Performance
        Area	                Optimization
        -------------------------------------------------------------
        Database	        Use async EF Core, Dapper, indexes, no N+1 queries
        Caching	                MemoryCache, Redis for frequent calls
        Serialization	        Use System.Text.Json (faster than Newtonsoft)
        Compression	        Enable response compression middleware
        Pooling	                Use AddDbContextPool for EF Core
        Async I/O	        Prefer async all the way down
        Minimize Middleware	Only load what’s needed
        Use CDN	                For static content
        Profiling	        Use MiniProfiler to see slow methods
         

        🧩 Example: Enabling Response Compression
        builder.Services.AddResponseCompression(options =>
            {
                options.EnableForHttps = true;
            });

        app.UseResponseCompression();

        🧪 5️⃣ Test Example with k6

        Create a script loadtest.js:

        import http from 'k6/http';
        import { sleep } from 'k6';

        export default function () {
        http.get('https://localhost:5001/api/customers');
        sleep(1);
        }


        Run test:

        k6 run --vus 10 --duration 30s loadtest.js


        This runs 10 virtual users for 30 seconds — you’ll get:

        Requests/sec

        Avg response time

        Failure rate

        ✅ Summary

        Method	                Use For
        -------------------------------------------------
        Middleware Stopwatch	Debug-level timing
        Application Insights	Production monitoring
        JMeter / k6             Load testing
        MiniProfiler	        Per-request method-level profiling
        APM tools               Full distributed tracing

`]});var cx="/dotnet/DotNet_Jan282025.pdf",ux="/dotnet/DotNet_Jan292025.pdf",dx="/dotnet/DotNet_C_Jan292025.pdf",hx="/dotnet/DotNet_Jan302025.pdf",fx="/dotnet/DotNet_Jan302025_introduction.pdf",px="/dotnet/CORS_Implementation.pdf",mx="/dotnet/JWT_Implementation.pdf",gx="/dotnet/NetCRUDOperationEF.pdf",yx="/dotnet/InternAPI.zip",bx="/dotnet/DotNet_Jan312025.pdf",vx="/dotnet/FixedIssue500.19.pdf";const Ax=[{id:"1",topic:"DotNet 28",description:"Description",pdfLink:cx},{id:"2",topic:"DotNet 29",description:"Description",pdfLink:ux},{id:"3",topic:"DotNet 29 C#",description:"Description",pdfLink:dx},{id:"4",topic:"DotNet 30",description:"Description",pdfLink:hx},{id:"5",topic:"DotNet 30 Intro",description:"Description",pdfLink:fx},{id:"6",topic:"DotNet 30 CORS",description:"Description",pdfLink:px},{id:"7",topic:"DotNet 30 JWT",description:"Description",pdfLink:mx},{id:"8",topic:"DotNet 30 EF",description:"Description",pdfLink:gx},{id:"9",topic:"Inter API zip",description:"Description",pdfLink:yx},{id:"10",topic:"31 Jan",description:"Description",pdfLink:bx},{id:"11",topic:"Error Fixed 500.19",description:"Description",pdfLink:vx}],Sx=()=>g.jsxs(g.Fragment,{children:["1. Linq Query can Substitue the Stored Prodcedure. ",g.jsx("br",{}),"2. How Link query converted into SQL query. ",g.jsx("br",{}),"Using Expression tree ",g.jsx("br",{}),"2. Time Complexity and Space Complexity.",g.jsx("br",{}),"3. How .Net core is plateform independent. ",g.jsx("br",{}),"4. Link List",g.jsx("br",{}),"5. CQRS (Command Query Responsilitity Segregation)",g.jsx("br",{}),"6. DDD: Domain Driven Design (UBIQUITOUS Language),",g.jsx("br",{}),g.jsx("a",{href:"https://youtu.be/Tnecs_7OT74",target:"_blank",children:"DDD Video"}),"TDD, BDD",g.jsx("br",{}),"7. CDC: DB Related, Capture row-level changes.",g.jsx("br",{}),"8. Sync and Async Program in .Net Core.",g.jsx("br",{}),"9. SSIS ",g.jsx("br",{}),"10. Fact and Dimention Table in Datawarehouse. ",g.jsx("br",{}),"11. Architecture Design. ",g.jsx("a",{href:"https://www.youtube.com/watch?v=gwczmxK-XyU",target:"_blank",children:"Video Link"}),g.jsx("br",{}),"12 Data Science:",g.jsx("br",{}),g.jsxs("ul",{children:[g.jsx("li",{children:"Bobble Sort"}),g.jsx("li",{children:"Binary Search"})]}),"13. xUnit ",g.jsx("br",{}),"14. Microservices",g.jsx("br",{}),"15. Singleton implementation ",g.jsx("br",{}),"16. UML ",g.jsx("br",{}),"17. Unit of work ",g.jsx("br",{})]}),Cx=()=>{const[d,e]=P.useState("Select Topic");function t(s,r){s==0&&e(z0),s==1&&e(F0),s==2&&e(B0),s==3&&e(U0),s==4&&e(H0),s==5&&e(G0),s==6&&e(q0),s==7&&e(V0),s==8&&e(Y0),s==9&&e(X0),s==10&&e(W0),s==11&&e($0),s==12&&e(K0),s==13&&e(Q0),s==14&&e(J0),s==15&&e(Z0),s==16&&e(tx),s==17&&e(ex),s==18&&e(nx),s==19&&e(ix),s==20&&e(sx),s==21&&e(rx),s==22&&e(ax),s==23&&e(ox),s==24&&e(lx),s==25&&e(Sx)}return g.jsxs(g.Fragment,{children:[g.jsx("h1",{children:g.jsx("span",{className:"highlightTextHeader",children:"Dot Net Practices"})}),"Theoretical: ",g.jsx("br",{}),g.jsx("div",{style:{display:"flex",padding:"2px",gap:"10px",flexWrap:"wrap"},children:Ax.map(s=>g.jsxs("div",{className:"oval-text",children:[g.jsx("div",{children:s.topic}),g.jsx("div",{children:g.jsx("a",{href:s.pdfLink,target:"_blank",children:"Link"})})]},s.id))}),"Dot Net Code: C:\\Users\\KhalidAkhter\\source\\repos ",g.jsx("br",{}),"Select Topic",g.jsx("br",{}),g.jsxs("div",{style:{display:"flex",padding:"2px",gap:"10px",flexWrap:"wrap"},children:[g.jsx("div",{className:"oval-text",onClick:()=>t(0),children:"Test"}),g.jsx("div",{className:"oval-text",onClick:()=>t(1),children:"Factory Pattern"}),g.jsx("div",{className:"oval-text",onClick:()=>t(2),children:"Repository Pattern"}),g.jsx("div",{className:"oval-text",onClick:()=>t(3),children:"Clean Architecture"}),g.jsx("div",{className:"oval-text",onClick:()=>t(4),children:"Dapper"}),g.jsx("div",{className:"oval-text",onClick:()=>t(5),children:"API EnvironmentSetting"}),g.jsx("div",{className:"oval-text",onClick:()=>t(6),children:"MiddleWare"}),g.jsx("div",{className:"oval-text",onClick:()=>t(7),children:"Filter"}),g.jsx("div",{className:"oval-text",onClick:()=>t(8),children:"Entity Framework"}),g.jsx("div",{className:"oval-text",onClick:()=>t(9),children:"CORS"}),g.jsx("div",{className:"oval-text",onClick:()=>t(10),children:"JWT:"}),g.jsx("div",{className:"oval-text",onClick:()=>t(11),children:"X-CSRF"}),g.jsx("div",{className:"oval-text",onClick:()=>t(12),children:"Caching"}),g.jsx("div",{className:"oval-text",onClick:()=>t(13),children:"Return XML format"}),g.jsx("div",{className:"oval-text",onClick:()=>t(14),children:"Throttling"}),g.jsx("div",{className:"oval-text",onClick:()=>t(15),children:"DI/Scope"}),g.jsx("div",{className:"oval-text",onClick:()=>t(16),children:"Compression"}),g.jsx("div",{className:"oval-text",onClick:()=>t(17),children:"Swagger"}),g.jsx("div",{className:"oval-text",onClick:()=>t(18),children:"WorkerService"}),g.jsx("div",{className:"oval-text",onClick:()=>t(19),children:"GlobalException"}),g.jsx("div",{className:"oval-text",onClick:()=>t(20),children:"Email"}),g.jsx("div",{className:"oval-text",onClick:()=>t(21),children:"SSMSOpenAI"}),g.jsx("div",{className:"oval-text",onClick:()=>t(22),children:"PromptEngineering"}),g.jsx("div",{className:"oval-text",onClick:()=>t(23),children:"General Question/Answer"}),g.jsx("div",{className:"oval-text",onClick:()=>t(24),children:"Performance API"}),g.jsx("div",{className:"oval-text",onClick:()=>t(25),children:"Interview Question"})]}),g.jsx("pre",{children:g.jsx("code",{style:{color:"black"},children:d})})]})},vy=()=>{const[d,e]=P.useState("admin"),[t,s]=P.useState("Gyansys@2025"),[r,o]=P.useState(""),[l,u]=P.useState(!1),h=Ia(),p="admin",m="Gyansys@202";function b(v){if(v.preventDefault(),o(""),d===p&&t===m){try{localStorage.setItem("isAuth","1"),localStorage.setItem("username",d)}catch{}u(!0),setTimeout(()=>h("/app"),1e3)}else o("Invalid username or password")}return g.jsxs("div",{style:{maxWidth:"420px",margin:"20px auto",padding:"16px"},children:[g.jsx("h2",{children:"Login"}),g.jsxs("form",{onSubmit:b,children:[g.jsxs("div",{style:{marginBottom:"8px"},children:[g.jsx("label",{children:"Username"}),g.jsx("br",{}),g.jsx("input",{type:"text",value:d,onChange:v=>e(v.target.value),style:{width:"100%",padding:"8px"},autoComplete:"username"})]}),g.jsxs("div",{style:{marginBottom:"8px"},children:[g.jsx("label",{children:"Password"}),g.jsx("br",{}),g.jsx("input",{type:"password",value:t,onChange:v=>s(v.target.value),style:{width:"100%",padding:"8px"},autoComplete:"current-password"})]}),r&&g.jsx("div",{style:{color:"red",marginBottom:"8px"},children:r}),l&&g.jsx("div",{style:{color:"green",marginBottom:"8px"},children:"Login successful — redirecting..."}),g.jsx("button",{type:"submit",style:{padding:"8px 12px"},children:"Sign In"})]}),g.jsxs("div",{style:{marginTop:"12px",fontSize:"13px",color:"#555"},children:["Demo credentials: ",g.jsx("b",{children:"admin"})," / ",g.jsx("b",{children:"Gyansys"})]})]})},xx=()=>{const d=Ia();return P.useEffect(()=>{try{localStorage.removeItem("isAuth"),localStorage.removeItem("username")}catch{}const e=setTimeout(()=>d("/app/Login"),800);return()=>clearTimeout(e)},[d]),g.jsxs("div",{style:{padding:16,maxWidth:640,margin:"40px auto",textAlign:"center"},children:[g.jsx("h2",{children:"Logging out..."}),g.jsx("p",{children:"You will be redirected to the login page."})]})};function wx(d){const[e,t]=P.useState(null),[s,r]=P.useState(!0),[o,l]=P.useState(null);return P.useEffect(()=>{(async()=>{try{const h=await fetch(d);if(!h.ok)throw new Error("Network response was not ok");const p=await h.json();t(p)}catch(h){l(h.message)}finally{r(!1)}})()},[d]),{data:e,loading:s,error:o}}function Ex(){const{data:d,loading:e,error:t}=wx("http://localhost:5281/api/Customer/GetAllEmployee");return e?g.jsx("p",{children:"Loading..."}):t?g.jsxs("p",{children:["Error: ",t]}):g.jsxs("div",{children:[g.jsx("h1",{children:"Get method using Custom Hook"}),g.jsx("ul",{children:g.jsxs("div",{children:[g.jsx("h1",{children:"Customer Details"}),d.map(s=>g.jsxs("div",{children:[g.jsxs("b",{children:["Customer ID: ",s.id]}),g.jsxs("p",{children:["Name: ",s.name]}),g.jsxs("p",{children:["Description: ",s.description]}),g.jsxs("p",{children:["Salary: ",s.salary]}),g.jsx("hr",{style:{width:"25%",marginLeft:0}})]},s.id))]})})]})}const Bt=typeof process=="object"&&process+""=="[object process]"&&!process.versions.nw&&!(process.versions.electron&&process.type&&process.type!=="browser"),xd=[.001,0,0,.001,0,0],hd=1.35,rn={ANY:1,DISPLAY:2,PRINT:4,ANNOTATIONS_FORMS:16,ANNOTATIONS_STORAGE:32,ANNOTATIONS_DISABLE:64,IS_EDITING:128,OPLIST:256},Un={DISABLE:0,ENABLE:1,ENABLE_FORMS:2,ENABLE_STORAGE:3},Da="pdfjs_internal_editor_",be={DISABLE:-1,NONE:0,FREETEXT:3,HIGHLIGHT:9,STAMP:13,INK:15,POPUP:16,SIGNATURE:101,COMMENT:102},_e={RESIZE:1,CREATE:2,FREETEXT_SIZE:11,FREETEXT_COLOR:12,FREETEXT_OPACITY:13,INK_COLOR:21,INK_THICKNESS:22,INK_OPACITY:23,HIGHLIGHT_COLOR:31,HIGHLIGHT_THICKNESS:32,HIGHLIGHT_FREE:33,HIGHLIGHT_SHOW_ALL:34,DRAW_STEP:41},Ay={PRINT:4,MODIFY_CONTENTS:8,COPY:16,MODIFY_ANNOTATIONS:32,FILL_INTERACTIVE_FORMS:256,COPY_FOR_ACCESSIBILITY:512,ASSEMBLE:1024,PRINT_HIGH_QUALITY:2048},Dt={FILL:0,STROKE:1,FILL_STROKE:2,INVISIBLE:3,FILL_STROKE_MASK:3,ADD_TO_PATH_FLAG:4},Ta={GRAYSCALE_1BPP:1,RGB_24BPP:2,RGBA_32BPP:3},ut={TEXT:1,LINK:2,FREETEXT:3,LINE:4,SQUARE:5,CIRCLE:6,POLYGON:7,POLYLINE:8,HIGHLIGHT:9,UNDERLINE:10,SQUIGGLY:11,STRIKEOUT:12,STAMP:13,CARET:14,INK:15,POPUP:16,FILEATTACHMENT:17,SOUND:18,MOVIE:19,WIDGET:20,SCREEN:21,PRINTERMARK:22,TRAPNET:23,WATERMARK:24,THREED:25,REDACT:26},tr={SOLID:1,DASHED:2,BEVELED:3,INSET:4,UNDERLINE:5},Ba={ERRORS:0,WARNINGS:1,INFOS:5},dr={dependency:1,setLineWidth:2,setLineCap:3,setLineJoin:4,setMiterLimit:5,setDash:6,setRenderingIntent:7,setFlatness:8,setGState:9,save:10,restore:11,transform:12,moveTo:13,lineTo:14,curveTo:15,curveTo2:16,curveTo3:17,closePath:18,rectangle:19,stroke:20,closeStroke:21,fill:22,eoFill:23,fillStroke:24,eoFillStroke:25,closeFillStroke:26,closeEOFillStroke:27,endPath:28,clip:29,eoClip:30,beginText:31,endText:32,setCharSpacing:33,setWordSpacing:34,setHScale:35,setLeading:36,setFont:37,setTextRenderingMode:38,setTextRise:39,moveText:40,setLeadingMoveText:41,setTextMatrix:42,nextLine:43,showText:44,showSpacedText:45,nextLineShowText:46,nextLineSetSpacingShowText:47,setCharWidth:48,setCharWidthAndBounds:49,setStrokeColorSpace:50,setFillColorSpace:51,setStrokeColor:52,setStrokeColorN:53,setFillColor:54,setFillColorN:55,setStrokeGray:56,setFillGray:57,setStrokeRGBColor:58,setFillRGBColor:59,setStrokeCMYKColor:60,setFillCMYKColor:61,shadingFill:62,beginInlineImage:63,beginImageData:64,endInlineImage:65,paintXObject:66,markPoint:67,markPointProps:68,beginMarkedContent:69,beginMarkedContentProps:70,endMarkedContent:71,beginCompat:72,endCompat:73,paintFormXObjectBegin:74,paintFormXObjectEnd:75,beginGroup:76,endGroup:77,beginAnnotation:80,endAnnotation:81,paintImageMaskXObject:83,paintImageMaskXObjectGroup:84,paintImageXObject:85,paintInlineImageXObject:86,paintInlineImageXObjectGroup:87,paintImageXObjectRepeat:88,paintImageMaskXObjectRepeat:89,paintSolidColorImageMask:90,constructPath:91,setStrokeTransparent:92,setFillTransparent:93,rawFillPath:94},dl={moveTo:0,lineTo:1,curveTo:2,closePath:3},Sy={NEED_PASSWORD:1,INCORRECT_PASSWORD:2};let Pl=Ba.WARNINGS;function Tx(d){Number.isInteger(d)&&(Pl=d)}function _x(){return Pl}function Ol(d){Pl>=Ba.INFOS&&console.info(`Info: ${d}`)}function ve(d){Pl>=Ba.WARNINGS&&console.warn(`Warning: ${d}`)}function qe(d){throw new Error(d)}function Me(d,e){d||qe(e)}function Rx(d){switch(d?.protocol){case"http:":case"https:":case"ftp:":case"mailto:":case"tel:":return!0;default:return!1}}function Gd(d,e=null,t=null){if(!d)return null;if(t&&typeof d=="string"&&(t.addDefaultProtocol&&d.startsWith("www.")&&d.match(/\./g)?.length>=2&&(d=`http://${d}`),t.tryConvertEncoding))try{d=Px(d)}catch{}const s=e?URL.parse(d,e):URL.parse(d);return Rx(s)?s:null}function qd(d,e,t=!1){const s=URL.parse(d);return s?(s.hash=e,s.href):t&&Gd(d,"http://example.com")?d.split("#",1)[0]+`${e?`#${e}`:""}`:""}function Se(d,e,t,s=!1){return Object.defineProperty(d,e,{value:t,enumerable:!s,configurable:!0,writable:!1}),t}const hs=(function(){function e(t,s){this.message=t,this.name=s}return e.prototype=new Error,e.constructor=e,e})();class Ag extends hs{constructor(e,t){super(e,"PasswordException"),this.code=t}}class fd extends hs{constructor(e,t){super(e,"UnknownErrorException"),this.details=t}}class Tl extends hs{constructor(e){super(e,"InvalidPDFException")}}class Ma extends hs{constructor(e,t,s){super(e,"ResponseException"),this.status=t,this.missing=s}}class Dx extends hs{constructor(e){super(e,"FormatError")}}class li extends hs{constructor(e){super(e,"AbortException")}}function Cy(d){(typeof d!="object"||d?.length===void 0)&&qe("Invalid argument for bytesToString");const e=d.length,t=8192;if(e<t)return String.fromCharCode.apply(null,d);const s=[];for(let r=0;r<e;r+=t){const o=Math.min(r+t,e),l=d.subarray(r,o);s.push(String.fromCharCode.apply(null,l))}return s.join("")}function Fa(d){typeof d!="string"&&qe("Invalid argument for stringToBytes");const e=d.length,t=new Uint8Array(e);for(let s=0;s<e;++s)t[s]=d.charCodeAt(s)&255;return t}function Mx(d){return String.fromCharCode(d>>24&255,d>>16&255,d>>8&255,d&255)}function kx(){const d=new Uint8Array(4);return d[0]=1,new Uint32Array(d.buffer,0,1)[0]===1}function Lx(){try{return new Function(""),!0}catch{return!1}}class wt{static get isLittleEndian(){return Se(this,"isLittleEndian",kx())}static get isEvalSupported(){return Se(this,"isEvalSupported",Lx())}static get isOffscreenCanvasSupported(){return Se(this,"isOffscreenCanvasSupported",typeof OffscreenCanvas<"u")}static get isImageDecoderSupported(){return Se(this,"isImageDecoderSupported",typeof ImageDecoder<"u")}static get platform(){const{platform:e,userAgent:t}=navigator;return Se(this,"platform",{isAndroid:t.includes("Android"),isLinux:e.includes("Linux"),isMac:e.includes("Mac"),isWindows:e.includes("Win"),isFirefox:t.includes("Firefox")})}static get isCSSRoundSupported(){return Se(this,"isCSSRoundSupported",globalThis.CSS?.supports?.("width: round(1.5px, 1px)"))}}const pd=Array.from(Array(256).keys(),d=>d.toString(16).padStart(2,"0"));class ie{static makeHexColor(e,t,s){return`#${pd[e]}${pd[t]}${pd[s]}`}static domMatrixToTransform(e){return[e.a,e.b,e.c,e.d,e.e,e.f]}static scaleMinMax(e,t){let s;e[0]?(e[0]<0&&(s=t[0],t[0]=t[2],t[2]=s),t[0]*=e[0],t[2]*=e[0],e[3]<0&&(s=t[1],t[1]=t[3],t[3]=s),t[1]*=e[3],t[3]*=e[3]):(s=t[0],t[0]=t[1],t[1]=s,s=t[2],t[2]=t[3],t[3]=s,e[1]<0&&(s=t[1],t[1]=t[3],t[3]=s),t[1]*=e[1],t[3]*=e[1],e[2]<0&&(s=t[0],t[0]=t[2],t[2]=s),t[0]*=e[2],t[2]*=e[2]),t[0]+=e[4],t[1]+=e[5],t[2]+=e[4],t[3]+=e[5]}static transform(e,t){return[e[0]*t[0]+e[2]*t[1],e[1]*t[0]+e[3]*t[1],e[0]*t[2]+e[2]*t[3],e[1]*t[2]+e[3]*t[3],e[0]*t[4]+e[2]*t[5]+e[4],e[1]*t[4]+e[3]*t[5]+e[5]]}static multiplyByDOMMatrix(e,t){return[e[0]*t.a+e[2]*t.b,e[1]*t.a+e[3]*t.b,e[0]*t.c+e[2]*t.d,e[1]*t.c+e[3]*t.d,e[0]*t.e+e[2]*t.f+e[4],e[1]*t.e+e[3]*t.f+e[5]]}static applyTransform(e,t,s=0){const r=e[s],o=e[s+1];e[s]=r*t[0]+o*t[2]+t[4],e[s+1]=r*t[1]+o*t[3]+t[5]}static applyTransformToBezier(e,t,s=0){const r=t[0],o=t[1],l=t[2],u=t[3],h=t[4],p=t[5];for(let m=0;m<6;m+=2){const b=e[s+m],v=e[s+m+1];e[s+m]=b*r+v*l+h,e[s+m+1]=b*o+v*u+p}}static applyInverseTransform(e,t){const s=e[0],r=e[1],o=t[0]*t[3]-t[1]*t[2];e[0]=(s*t[3]-r*t[2]+t[2]*t[5]-t[4]*t[3])/o,e[1]=(-s*t[1]+r*t[0]+t[4]*t[1]-t[5]*t[0])/o}static axialAlignedBoundingBox(e,t,s){const r=t[0],o=t[1],l=t[2],u=t[3],h=t[4],p=t[5],m=e[0],b=e[1],v=e[2],A=e[3];let x=r*m+h,C=x,T=r*v+h,w=T,_=u*b+p,R=_,O=u*A+p,k=O;if(o!==0||l!==0){const j=o*m,F=o*v,q=l*b,V=l*A;x+=q,w+=q,T+=V,C+=V,_+=j,k+=j,O+=F,R+=F}s[0]=Math.min(s[0],x,T,C,w),s[1]=Math.min(s[1],_,O,R,k),s[2]=Math.max(s[2],x,T,C,w),s[3]=Math.max(s[3],_,O,R,k)}static inverseTransform(e){const t=e[0]*e[3]-e[1]*e[2];return[e[3]/t,-e[1]/t,-e[2]/t,e[0]/t,(e[2]*e[5]-e[4]*e[3])/t,(e[4]*e[1]-e[5]*e[0])/t]}static singularValueDecompose2dScale(e,t){const s=e[0],r=e[1],o=e[2],l=e[3],u=s**2+r**2,h=s*o+r*l,p=o**2+l**2,m=(u+p)/2,b=Math.sqrt(m**2-(u*p-h**2));t[0]=Math.sqrt(m+b||1),t[1]=Math.sqrt(m-b||1)}static normalizeRect(e){const t=e.slice(0);return e[0]>e[2]&&(t[0]=e[2],t[2]=e[0]),e[1]>e[3]&&(t[1]=e[3],t[3]=e[1]),t}static intersect(e,t){const s=Math.max(Math.min(e[0],e[2]),Math.min(t[0],t[2])),r=Math.min(Math.max(e[0],e[2]),Math.max(t[0],t[2]));if(s>r)return null;const o=Math.max(Math.min(e[1],e[3]),Math.min(t[1],t[3])),l=Math.min(Math.max(e[1],e[3]),Math.max(t[1],t[3]));return o>l?null:[s,o,r,l]}static pointBoundingBox(e,t,s){s[0]=Math.min(s[0],e),s[1]=Math.min(s[1],t),s[2]=Math.max(s[2],e),s[3]=Math.max(s[3],t)}static rectBoundingBox(e,t,s,r,o){o[0]=Math.min(o[0],e,s),o[1]=Math.min(o[1],t,r),o[2]=Math.max(o[2],e,s),o[3]=Math.max(o[3],t,r)}static#e(e,t,s,r,o,l,u,h,p,m){if(p<=0||p>=1)return;const b=1-p,v=p*p,A=v*p,x=b*(b*(b*e+3*p*t)+3*v*s)+A*r,C=b*(b*(b*o+3*p*l)+3*v*u)+A*h;m[0]=Math.min(m[0],x),m[1]=Math.min(m[1],C),m[2]=Math.max(m[2],x),m[3]=Math.max(m[3],C)}static#t(e,t,s,r,o,l,u,h,p,m,b,v){if(Math.abs(p)<1e-12){Math.abs(m)>=1e-12&&this.#e(e,t,s,r,o,l,u,h,-b/m,v);return}const A=m**2-4*b*p;if(A<0)return;const x=Math.sqrt(A),C=2*p;this.#e(e,t,s,r,o,l,u,h,(-m+x)/C,v),this.#e(e,t,s,r,o,l,u,h,(-m-x)/C,v)}static bezierBoundingBox(e,t,s,r,o,l,u,h,p){p[0]=Math.min(p[0],e,u),p[1]=Math.min(p[1],t,h),p[2]=Math.max(p[2],e,u),p[3]=Math.max(p[3],t,h),this.#t(e,s,o,u,t,r,l,h,3*(-e+3*(s-o)+u),6*(e-2*s+o),3*(s-e),p),this.#t(e,s,o,u,t,r,l,h,3*(-t+3*(r-l)+h),6*(t-2*r+l),3*(r-t),p)}}function Px(d){return decodeURIComponent(escape(d))}let md=null,Sg=null;function xy(d){return md||(md=/([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu,Sg=new Map([["ﬅ","ſt"]])),d.replaceAll(md,(e,t,s)=>t?t.normalize("NFKC"):Sg.get(s))}function Vd(){if(typeof crypto.randomUUID=="function")return crypto.randomUUID();const d=new Uint8Array(32);return crypto.getRandomValues(d),Cy(d)}const Yd="pdfjs_internal_id_";function Ox(d,e,t){if(!Array.isArray(t)||t.length<2)return!1;const[s,r,...o]=t;if(!d(s)&&!Number.isInteger(s)||!e(r))return!1;const l=o.length;let u=!0;switch(r.name){case"XYZ":if(l<2||l>3)return!1;break;case"Fit":case"FitB":return l===0;case"FitH":case"FitBH":case"FitV":case"FitBV":if(l>1)return!1;break;case"FitR":if(l!==4)return!1;u=!1;break;default:return!1}for(const h of o)if(!(typeof h=="number"||u&&h===null))return!1;return!0}function Ot(d,e,t){return Math.min(Math.max(d,e),t)}function wy(d){return Uint8Array.prototype.toBase64?d.toBase64():btoa(Cy(d))}function Nx(d){return Uint8Array.fromBase64?Uint8Array.fromBase64(d):Fa(atob(d))}typeof Promise.try!="function"&&(Promise.try=function(d,...e){return new Promise(t=>{t(d(...e))})});typeof Math.sumPrecise!="function"&&(Math.sumPrecise=function(d){return d.reduce((e,t)=>e+t,0)});class ka{static textContent(e){const t=[],s={items:t,styles:Object.create(null)};function r(o){if(!o)return;let l=null;const u=o.name;if(u==="#text")l=o.value;else if(ka.shouldBuildText(u))o?.attributes?.textContent?l=o.attributes.textContent:o.value&&(l=o.value);else return;if(l!==null&&t.push({str:l}),!!o.children)for(const h of o.children)r(h)}return r(e),s}static shouldBuildText(e){return!(e==="textarea"||e==="input"||e==="option"||e==="select")}}class Xd{static setupStorage(e,t,s,r,o){const l=r.getValue(t,{value:null});switch(s.name){case"textarea":if(l.value!==null&&(e.textContent=l.value),o==="print")break;e.addEventListener("input",u=>{r.setValue(t,{value:u.target.value})});break;case"input":if(s.attributes.type==="radio"||s.attributes.type==="checkbox"){if(l.value===s.attributes.xfaOn?e.setAttribute("checked",!0):l.value===s.attributes.xfaOff&&e.removeAttribute("checked"),o==="print")break;e.addEventListener("change",u=>{r.setValue(t,{value:u.target.checked?u.target.getAttribute("xfaOn"):u.target.getAttribute("xfaOff")})})}else{if(l.value!==null&&e.setAttribute("value",l.value),o==="print")break;e.addEventListener("input",u=>{r.setValue(t,{value:u.target.value})})}break;case"select":if(l.value!==null){e.setAttribute("value",l.value);for(const u of s.children)u.attributes.value===l.value?u.attributes.selected=!0:u.attributes.hasOwnProperty("selected")&&delete u.attributes.selected}e.addEventListener("input",u=>{const h=u.target.options,p=h.selectedIndex===-1?"":h[h.selectedIndex].value;r.setValue(t,{value:p})});break}}static setAttributes({html:e,element:t,storage:s=null,intent:r,linkService:o}){const{attributes:l}=t,u=e instanceof HTMLAnchorElement;l.type==="radio"&&(l.name=`${l.name}-${r}`);for(const[h,p]of Object.entries(l))if(p!=null)switch(h){case"class":p.length&&e.setAttribute(h,p.join(" "));break;case"dataId":break;case"id":e.setAttribute("data-element-id",p);break;case"style":Object.assign(e.style,p);break;case"textContent":e.textContent=p;break;default:(!u||h!=="href"&&h!=="newWindow")&&e.setAttribute(h,p)}u&&o.addLinkAttributes(e,l.href,l.newWindow),s&&l.dataId&&this.setupStorage(e,l.dataId,t,s)}static render(e){const t=e.annotationStorage,s=e.linkService,r=e.xfaHtml,o=e.intent||"display",l=document.createElement(r.name);r.attributes&&this.setAttributes({html:l,element:r,intent:o,linkService:s});const u=o!=="richText",h=e.div;if(h.append(l),e.viewport){const b=`matrix(${e.viewport.transform.join(",")})`;h.style.transform=b}u&&h.setAttribute("class","xfaLayer xfaFont");const p=[];if(r.children.length===0){if(r.value){const b=document.createTextNode(r.value);l.append(b),u&&ka.shouldBuildText(r.name)&&p.push(b)}return{textDivs:p}}const m=[[r,-1,l]];for(;m.length>0;){const[b,v,A]=m.at(-1);if(v+1===b.children.length){m.pop();continue}const x=b.children[++m.at(-1)[1]];if(x===null)continue;const{name:C}=x;if(C==="#text"){const w=document.createTextNode(x.value);p.push(w),A.append(w);continue}const T=x?.attributes?.xmlns?document.createElementNS(x.attributes.xmlns,C):document.createElement(C);if(A.append(T),x.attributes&&this.setAttributes({html:T,element:x,storage:t,intent:o,linkService:s}),x.children?.length>0)m.push([x,-1,T]);else if(x.value){const w=document.createTextNode(x.value);u&&ka.shouldBuildText(C)&&p.push(w),T.append(w)}}for(const b of h.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea"))b.setAttribute("readOnly",!0);return{textDivs:p}}static update(e){const t=`matrix(${e.viewport.transform.join(",")})`;e.div.style.transform=t,e.div.hidden=!1}}const si="http://www.w3.org/2000/svg";class cs{static CSS=96;static PDF=72;static PDF_TO_CSS_UNITS=this.CSS/this.PDF}async function yr(d,e="text"){if(xa(d,document.baseURI)){const t=await fetch(d);if(!t.ok)throw new Error(t.statusText);switch(e){case"arraybuffer":return t.arrayBuffer();case"blob":return t.blob();case"json":return t.json()}return t.text()}return new Promise((t,s)=>{const r=new XMLHttpRequest;r.open("GET",d,!0),r.responseType=e,r.onreadystatechange=()=>{if(r.readyState===XMLHttpRequest.DONE){if(r.status===200||r.status===0){switch(e){case"arraybuffer":case"blob":case"json":t(r.response);return}t(r.responseText);return}s(new Error(r.statusText))}},r.send(null)})}class Ua{constructor({viewBox:e,userUnit:t,scale:s,rotation:r,offsetX:o=0,offsetY:l=0,dontFlip:u=!1}){this.viewBox=e,this.userUnit=t,this.scale=s,this.rotation=r,this.offsetX=o,this.offsetY=l,s*=t;const h=(e[2]+e[0])/2,p=(e[3]+e[1])/2;let m,b,v,A;switch(r%=360,r<0&&(r+=360),r){case 180:m=-1,b=0,v=0,A=1;break;case 90:m=0,b=1,v=1,A=0;break;case 270:m=0,b=-1,v=-1,A=0;break;case 0:m=1,b=0,v=0,A=-1;break;default:throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.")}u&&(v=-v,A=-A);let x,C,T,w;m===0?(x=Math.abs(p-e[1])*s+o,C=Math.abs(h-e[0])*s+l,T=(e[3]-e[1])*s,w=(e[2]-e[0])*s):(x=Math.abs(h-e[0])*s+o,C=Math.abs(p-e[1])*s+l,T=(e[2]-e[0])*s,w=(e[3]-e[1])*s),this.transform=[m*s,b*s,v*s,A*s,x-m*s*h-v*s*p,C-b*s*h-A*s*p],this.width=T,this.height=w}get rawDims(){const e=this.viewBox;return Se(this,"rawDims",{pageWidth:e[2]-e[0],pageHeight:e[3]-e[1],pageX:e[0],pageY:e[1]})}clone({scale:e=this.scale,rotation:t=this.rotation,offsetX:s=this.offsetX,offsetY:r=this.offsetY,dontFlip:o=!1}={}){return new Ua({viewBox:this.viewBox.slice(),userUnit:this.userUnit,scale:e,rotation:t,offsetX:s,offsetY:r,dontFlip:o})}convertToViewportPoint(e,t){const s=[e,t];return ie.applyTransform(s,this.transform),s}convertToViewportRectangle(e){const t=[e[0],e[1]];ie.applyTransform(t,this.transform);const s=[e[2],e[3]];return ie.applyTransform(s,this.transform),[t[0],t[1],s[0],s[1]]}convertToPdfPoint(e,t){const s=[e,t];return ie.applyInverseTransform(s,this.transform),s}}class Nl extends hs{constructor(e,t=0){super(e,"RenderingCancelledException"),this.extraDelay=t}}function Ha(d){const e=d.length;let t=0;for(;t<e&&d[t].trim()==="";)t++;return d.substring(t,t+5).toLowerCase()==="data:"}function Il(d){return typeof d=="string"&&/\.pdf$/i.test(d)}function Ey(d){return[d]=d.split(/[#?]/,1),d.substring(d.lastIndexOf("/")+1)}function Ty(d,e="document.pdf"){if(typeof d!="string")return e;if(Ha(d))return ve('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'),e;const s=(u=>{try{return new URL(u)}catch{try{return new URL(decodeURIComponent(u))}catch{try{return new URL(u,"https://foo.bar")}catch{try{return new URL(decodeURIComponent(u),"https://foo.bar")}catch{return null}}}}})(d);if(!s)return e;const r=u=>{try{let h=decodeURIComponent(u);return h.includes("/")?(h=h.split("/").at(-1),h.test(/^\.pdf$/i)?h:u):h}catch{return u}},o=/\.pdf$/i,l=s.pathname.split("/").at(-1);if(o.test(l))return r(l);if(s.searchParams.size>0){const u=Array.from(s.searchParams.values()).reverse();for(const p of u)if(o.test(p))return r(p);const h=Array.from(s.searchParams.keys()).reverse();for(const p of h)if(o.test(p))return r(p)}if(s.hash){const h=/[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i.exec(s.hash);if(h)return r(h[0])}return e}class Cg{started=Object.create(null);times=[];time(e){e in this.started&&ve(`Timer is already running for ${e}`),this.started[e]=Date.now()}timeEnd(e){e in this.started||ve(`Timer has not been started for ${e}`),this.times.push({name:e,start:this.started[e],end:Date.now()}),delete this.started[e]}toString(){const e=[];let t=0;for(const{name:s}of this.times)t=Math.max(s.length,t);for(const{name:s,start:r,end:o}of this.times)e.push(`${s.padEnd(t)} ${o-r}ms
`);return e.join("")}}function xa(d,e){const t=e?URL.parse(d,e):URL.parse(d);return t?.protocol==="http:"||t?.protocol==="https:"}function ln(d){d.preventDefault()}function tt(d){d.preventDefault(),d.stopPropagation()}function Ix(d){console.log("Deprecated API usage: "+d)}class _l{static#e;static toDateObject(e){if(e instanceof Date)return e;if(!e||typeof e!="string")return null;this.#e||=new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?");const t=this.#e.exec(e);if(!t)return null;const s=parseInt(t[1],10);let r=parseInt(t[2],10);r=r>=1&&r<=12?r-1:0;let o=parseInt(t[3],10);o=o>=1&&o<=31?o:1;let l=parseInt(t[4],10);l=l>=0&&l<=23?l:0;let u=parseInt(t[5],10);u=u>=0&&u<=59?u:0;let h=parseInt(t[6],10);h=h>=0&&h<=59?h:0;const p=t[7]||"Z";let m=parseInt(t[8],10);m=m>=0&&m<=23?m:0;let b=parseInt(t[9],10)||0;return b=b>=0&&b<=59?b:0,p==="-"?(l+=m,u+=b):p==="+"&&(l-=m,u-=b),new Date(Date.UTC(s,r,o,l,u,h))}}function _y(d,{scale:e=1,rotation:t=0}){const{width:s,height:r}=d.attributes.style,o=[0,0,parseInt(s),parseInt(r)];return new Ua({viewBox:o,userUnit:1,scale:e,rotation:t})}function br(d){if(d.startsWith("#")){const e=parseInt(d.slice(1),16);return[(e&16711680)>>16,(e&65280)>>8,e&255]}return d.startsWith("rgb(")?d.slice(4,-1).split(",").map(e=>parseInt(e)):d.startsWith("rgba(")?d.slice(5,-1).split(",").map(e=>parseInt(e)).slice(0,3):(ve(`Not a valid color format: "${d}"`),[0,0,0])}function jx(d){const e=document.createElement("span");e.style.visibility="hidden",e.style.colorScheme="only light",document.body.append(e);for(const t of d.keys()){e.style.color=t;const s=window.getComputedStyle(e).color;d.set(t,br(s))}e.remove()}function et(d){const{a:e,b:t,c:s,d:r,e:o,f:l}=d.getTransform();return[e,t,s,r,o,l]}function Nn(d){const{a:e,b:t,c:s,d:r,e:o,f:l}=d.getTransform().invertSelf();return[e,t,s,r,o,l]}function Ii(d,e,t=!1,s=!0){if(e instanceof Ua){const{pageWidth:r,pageHeight:o}=e.rawDims,{style:l}=d,u=wt.isCSSRoundSupported,h=`var(--total-scale-factor) * ${r}px`,p=`var(--total-scale-factor) * ${o}px`,m=u?`round(down, ${h}, var(--scale-round-x))`:`calc(${h})`,b=u?`round(down, ${p}, var(--scale-round-y))`:`calc(${p})`;!t||e.rotation%180===0?(l.width=m,l.height=b):(l.width=b,l.height=m)}s&&d.setAttribute("data-main-rotation",e.rotation)}class Tn{constructor(){const{pixelRatio:e}=Tn;this.sx=e,this.sy=e}get scaled(){return this.sx!==1||this.sy!==1}get symmetric(){return this.sx===this.sy}limitCanvas(e,t,s,r,o=-1){let l=1/0,u=1/0,h=1/0;s=Tn.capPixels(s,o),s>0&&(l=Math.sqrt(s/(e*t))),r!==-1&&(u=r/e,h=r/t);const p=Math.min(l,u,h);return this.sx>p||this.sy>p?(this.sx=p,this.sy=p,!0):!1}static get pixelRatio(){return globalThis.devicePixelRatio||1}static capPixels(e,t){if(t>=0){const s=Math.ceil(window.screen.availWidth*window.screen.availHeight*this.pixelRatio**2*(1+t/100));return e>0?Math.min(e,s):s}return e}}const Rl=["image/apng","image/avif","image/bmp","image/gif","image/jpeg","image/png","image/svg+xml","image/webp","image/x-icon"];class Bx{static get isDarkMode(){return Se(this,"isDarkMode",!!window?.matchMedia?.("(prefers-color-scheme: dark)").matches)}}class Ry{static get commentForegroundColor(){const e=document.createElement("span");e.classList.add("comment","sidebar");const{style:t}=e;t.width=t.height="0",t.display="none",t.color="var(--comment-fg-color)",document.body.append(e);const{color:s}=window.getComputedStyle(e);return e.remove(),Se(this,"commentForegroundColor",br(s))}}function Dy(d,e,t,s){s=Math.min(Math.max(s??1,0),1);const r=255*(1-s);return d=Math.round(d*s+r),e=Math.round(e*s+r),t=Math.round(t*s+r),[d,e,t]}function xg(d,e){const t=d[0]/255,s=d[1]/255,r=d[2]/255,o=Math.max(t,s,r),l=Math.min(t,s,r),u=(o+l)/2;if(o===l)e[0]=e[1]=0;else{const h=o-l;switch(e[1]=u<.5?h/(o+l):h/(2-o-l),o){case t:e[0]=((s-r)/h+(s<r?6:0))*60;break;case s:e[0]=((r-t)/h+2)*60;break;case r:e[0]=((t-s)/h+4)*60;break}}e[2]=u}function wd(d,e){const t=d[0],s=d[1],r=d[2],o=(1-Math.abs(2*r-1))*s,l=o*(1-Math.abs(t/60%2-1)),u=r-o/2;switch(Math.floor(t/60)){case 0:e[0]=o+u,e[1]=l+u,e[2]=u;break;case 1:e[0]=l+u,e[1]=o+u,e[2]=u;break;case 2:e[0]=u,e[1]=o+u,e[2]=l+u;break;case 3:e[0]=u,e[1]=l+u,e[2]=o+u;break;case 4:e[0]=l+u,e[1]=u,e[2]=o+u;break;case 5:case 6:e[0]=o+u,e[1]=u,e[2]=l+u;break}}function wg(d){return d<=.03928?d/12.92:((d+.055)/1.055)**2.4}function Eg(d,e,t){wd(d,t),t.map(wg);const s=.2126*t[0]+.7152*t[1]+.0722*t[2];wd(e,t),t.map(wg);const r=.2126*t[0]+.7152*t[1]+.0722*t[2];return s>r?(s+.05)/(r+.05):(r+.05)/(s+.05)}const Tg=new Map;function My(d,e){const t=d[0]+d[1]*256+d[2]*65536+e[0]*16777216+e[1]*4294967296+e[2]*1099511627776;let s=Tg.get(t);if(s)return s;const r=new Float32Array(9),o=r.subarray(0,3),l=r.subarray(3,6);xg(d,l);const u=r.subarray(6,9);xg(e,u);const h=u[2]<.5,p=h?12:4.5;if(l[2]=h?Math.sqrt(l[2]):1-Math.sqrt(1-l[2]),Eg(l,u,o)<p){let m,b;h?(m=l[2],b=1):(m=0,b=l[2]);const v=.005;for(;b-m>v;){const A=l[2]=(m+b)/2;h===Eg(l,u,o)<p?m=A:b=A}l[2]=h?b:m}return wd(l,o),s=ie.makeHexColor(Math.round(o[0]*255),Math.round(o[1]*255),Math.round(o[2]*255)),Tg.set(t,s),s}function Wd({html:d,dir:e,className:t},s){const r=document.createDocumentFragment();if(typeof d=="string"){const o=document.createElement("p");o.dir=e||"auto";const l=d.split(/(?:\r\n?|\n)/);for(let u=0,h=l.length;u<h;++u){const p=l[u];o.append(document.createTextNode(p)),u<h-1&&o.append(document.createElement("br"))}r.append(o)}else Xd.render({xfaHtml:d,div:r,intent:"richText"});r.firstChild.classList.add("richText",t),s.append(r)}class _a{#e=null;#t=null;#i;#n=null;#a=null;#s=null;#r=null;#o=null;static#c=null;constructor(e){this.#i=e,_a.#c||=Object.freeze({freetext:"pdfjs-editor-remove-freetext-button",highlight:"pdfjs-editor-remove-highlight-button",ink:"pdfjs-editor-remove-ink-button",stamp:"pdfjs-editor-remove-stamp-button",signature:"pdfjs-editor-remove-signature-button"})}render(){const e=this.#e=document.createElement("div");e.classList.add("editToolbar","hidden"),e.setAttribute("role","toolbar");const t=this.#i._uiManager._signal;t instanceof AbortSignal&&!t.aborted&&(e.addEventListener("contextmenu",ln,{signal:t}),e.addEventListener("pointerdown",_a.#l,{signal:t}));const s=this.#n=document.createElement("div");s.className="buttons",e.append(s);const r=this.#i.toolbarPosition;if(r){const{style:o}=e,l=this.#i._uiManager.direction==="ltr"?1-r[0]:r[0];o.insetInlineEnd=`${100*l}%`,o.top=`calc(${100*r[1]}% + var(--editor-toolbar-vert-offset))`}return e}get div(){return this.#e}static#l(e){e.stopPropagation()}#h(e){this.#i._focusEventsAllowed=!1,tt(e)}#d(e){this.#i._focusEventsAllowed=!0,tt(e)}#f(e){const t=this.#i._uiManager._signal;return!(t instanceof AbortSignal)||t.aborted?!1:(e.addEventListener("focusin",this.#h.bind(this),{capture:!0,signal:t}),e.addEventListener("focusout",this.#d.bind(this),{capture:!0,signal:t}),e.addEventListener("contextmenu",ln,{signal:t}),!0)}hide(){this.#e.classList.add("hidden"),this.#t?.hideDropdown()}show(){this.#e.classList.remove("hidden"),this.#a?.shown(),this.#s?.shown()}addDeleteButton(){const{editorType:e,_uiManager:t}=this.#i,s=document.createElement("button");s.classList.add("basic","deleteButton"),s.tabIndex=0,s.setAttribute("data-l10n-id",_a.#c[e]),this.#f(s)&&s.addEventListener("click",r=>{t.delete()},{signal:t._signal}),this.#n.append(s)}get#g(){const e=document.createElement("div");return e.className="divider",e}async addAltText(e){const t=await e.render();this.#f(t),this.#n.append(t,this.#g),this.#a=e}addComment(e,t=null){if(this.#s)return;const s=e.renderForToolbar();if(!s)return;this.#f(s);const r=this.#r=this.#g;t?(this.#n.insertBefore(s,t),this.#n.insertBefore(r,t)):this.#n.append(s,r),this.#s=e,e.toolbar=this}addColorPicker(e){if(this.#t)return;this.#t=e;const t=e.renderButton();this.#f(t),this.#n.append(t,this.#g)}async addEditSignatureButton(e){const t=this.#o=await e.renderEditButton(this.#i);this.#f(t),this.#n.append(t,this.#g)}removeButton(e){switch(e){case"comment":this.#s?.removeToolbarCommentButton(),this.#s=null,this.#r?.remove(),this.#r=null;break}}async addButton(e,t){switch(e){case"colorPicker":this.addColorPicker(t);break;case"altText":await this.addAltText(t);break;case"editSignature":await this.addEditSignatureButton(t);break;case"delete":this.addDeleteButton();break;case"comment":this.addComment(t);break}}async addButtonBefore(e,t,s){const r=this.#n.querySelector(s);r&&e==="comment"&&this.addComment(t,r)}updateEditSignatureButton(e){this.#o&&(this.#o.title=e)}remove(){this.#e.remove(),this.#t?.destroy(),this.#t=null}}class Fx{#e=null;#t=null;#i;constructor(e){this.#i=e}#n(){const e=this.#t=document.createElement("div");e.className="editToolbar",e.setAttribute("role","toolbar");const t=this.#i._signal;t instanceof AbortSignal&&!t.aborted&&e.addEventListener("contextmenu",ln,{signal:t});const s=this.#e=document.createElement("div");return s.className="buttons",e.append(s),this.#i.hasCommentManager()&&this.#s("commentButton","pdfjs-comment-floating-button","pdfjs-comment-floating-button-label",()=>{this.#i.commentSelection("floating_button")}),this.#s("highlightButton","pdfjs-highlight-floating-button1","pdfjs-highlight-floating-button-label",()=>{this.#i.highlightSelection("floating_button")}),e}#a(e,t){let s=0,r=0;for(const o of e){const l=o.y+o.height;if(l<s)continue;const u=o.x+(t?o.width:0);if(l>s){r=u,s=l;continue}t?u>r&&(r=u):u<r&&(r=u)}return[t?1-r:r,s]}show(e,t,s){const[r,o]=this.#a(t,s),{style:l}=this.#t||=this.#n();e.append(this.#t),l.insetInlineEnd=`${100*r}%`,l.top=`calc(${100*o}% + var(--editor-toolbar-vert-offset))`}hide(){this.#t.remove()}#s(e,t,s,r){const o=document.createElement("button");o.classList.add("basic",e),o.tabIndex=0,o.setAttribute("data-l10n-id",t);const l=document.createElement("span");o.append(l),l.className="visuallyHidden",l.setAttribute("data-l10n-id",s);const u=this.#i._signal;u instanceof AbortSignal&&!u.aborted&&(o.addEventListener("contextmenu",ln,{signal:u}),o.addEventListener("click",r,{signal:u})),this.#e.append(o)}}function ky(d,e,t){for(const s of t)e.addEventListener(s,d[s].bind(d))}class Ux{#e=0;get id(){return`${Da}${this.#e++}`}}class $d{#e=Vd();#t=0;#i=null;static get _isSVGFittingCanvas(){const e='data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>',s=new OffscreenCanvas(1,3).getContext("2d",{willReadFrequently:!0}),r=new Image;r.src=e;const o=r.decode().then(()=>(s.drawImage(r,0,0,1,1,0,0,1,3),new Uint32Array(s.getImageData(0,0,1,1).data.buffer)[0]===0));return Se(this,"_isSVGFittingCanvas",o)}async#n(e,t){this.#i||=new Map;let s=this.#i.get(e);if(s===null)return null;if(s?.bitmap)return s.refCounter+=1,s;try{s||={bitmap:null,id:`image_${this.#e}_${this.#t++}`,refCounter:0,isSvg:!1};let r;if(typeof t=="string"?(s.url=t,r=await yr(t,"blob")):t instanceof File?r=s.file=t:t instanceof Blob&&(r=t),r.type==="image/svg+xml"){const o=$d._isSVGFittingCanvas,l=new FileReader,u=new Image,h=new Promise((p,m)=>{u.onload=()=>{s.bitmap=u,s.isSvg=!0,p()},l.onload=async()=>{const b=s.svgUrl=l.result;u.src=await o?`${b}#svgView(preserveAspectRatio(none))`:b},u.onerror=l.onerror=m});l.readAsDataURL(r),await h}else s.bitmap=await createImageBitmap(r);s.refCounter=1}catch(r){ve(r),s=null}return this.#i.set(e,s),s&&this.#i.set(s.id,s),s}async getFromFile(e){const{lastModified:t,name:s,size:r,type:o}=e;return this.#n(`${t}_${s}_${r}_${o}`,e)}async getFromUrl(e){return this.#n(e,e)}async getFromBlob(e,t){const s=await t;return this.#n(e,s)}async getFromId(e){this.#i||=new Map;const t=this.#i.get(e);if(!t)return null;if(t.bitmap)return t.refCounter+=1,t;if(t.file)return this.getFromFile(t.file);if(t.blobPromise){const{blobPromise:s}=t;return delete t.blobPromise,this.getFromBlob(t.id,s)}return this.getFromUrl(t.url)}getFromCanvas(e,t){this.#i||=new Map;let s=this.#i.get(e);if(s?.bitmap)return s.refCounter+=1,s;const r=new OffscreenCanvas(t.width,t.height);return r.getContext("2d").drawImage(t,0,0),s={bitmap:r.transferToImageBitmap(),id:`image_${this.#e}_${this.#t++}`,refCounter:1,isSvg:!1},this.#i.set(e,s),this.#i.set(s.id,s),s}getSvgUrl(e){const t=this.#i.get(e);return t?.isSvg?t.svgUrl:null}deleteId(e){this.#i||=new Map;const t=this.#i.get(e);if(!t||(t.refCounter-=1,t.refCounter!==0))return;const{bitmap:s}=t;if(!t.url&&!t.file){const r=new OffscreenCanvas(s.width,s.height);r.getContext("bitmaprenderer").transferFromImageBitmap(s),t.blobPromise=r.convertToBlob()}s.close?.(),t.bitmap=null}isValidId(e){return e.startsWith(`image_${this.#e}_`)}}class Hx{#e=[];#t=!1;#i;#n=-1;constructor(e=128){this.#i=e}add({cmd:e,undo:t,post:s,mustExec:r,type:o=NaN,overwriteIfSameType:l=!1,keepUndo:u=!1}){if(r&&e(),this.#t)return;const h={cmd:e,undo:t,post:s,type:o};if(this.#n===-1){this.#e.length>0&&(this.#e.length=0),this.#n=0,this.#e.push(h);return}if(l&&this.#e[this.#n].type===o){u&&(h.undo=this.#e[this.#n].undo),this.#e[this.#n]=h;return}const p=this.#n+1;p===this.#i?this.#e.splice(0,1):(this.#n=p,p<this.#e.length&&this.#e.splice(p)),this.#e.push(h)}undo(){if(this.#n===-1)return;this.#t=!0;const{undo:e,post:t}=this.#e[this.#n];e(),t?.(),this.#t=!1,this.#n-=1}redo(){if(this.#n<this.#e.length-1){this.#n+=1,this.#t=!0;const{cmd:e,post:t}=this.#e[this.#n];e(),t?.(),this.#t=!1}}hasSomethingToUndo(){return this.#n!==-1}hasSomethingToRedo(){return this.#n<this.#e.length-1}cleanType(e){if(this.#n!==-1){for(let t=this.#n;t>=0;t--)if(this.#e[t].type!==e){this.#e.splice(t+1,this.#n-t),this.#n=t;return}this.#e.length=0,this.#n=-1}}destroy(){this.#e=null}}class za{constructor(e){this.buffer=[],this.callbacks=new Map,this.allKeys=new Set;const{isMac:t}=wt.platform;for(const[s,r,o={}]of e)for(const l of s){const u=l.startsWith("mac+");t&&u?(this.callbacks.set(l.slice(4),{callback:r,options:o}),this.allKeys.add(l.split("+").at(-1))):!t&&!u&&(this.callbacks.set(l,{callback:r,options:o}),this.allKeys.add(l.split("+").at(-1)))}}#e(e){e.altKey&&this.buffer.push("alt"),e.ctrlKey&&this.buffer.push("ctrl"),e.metaKey&&this.buffer.push("meta"),e.shiftKey&&this.buffer.push("shift"),this.buffer.push(e.key);const t=this.buffer.join("+");return this.buffer.length=0,t}exec(e,t){if(!this.allKeys.has(t.key))return;const s=this.callbacks.get(this.#e(t));if(!s)return;const{callback:r,options:{bubbles:o=!1,args:l=[],checker:u=null}}=s;u&&!u(e,t)||(r.bind(e,...l,t)(),o||tt(t))}}class Kd{static _colorsMapping=new Map([["CanvasText",[0,0,0]],["Canvas",[255,255,255]]]);get _colors(){const e=new Map([["CanvasText",null],["Canvas",null]]);return jx(e),Se(this,"_colors",e)}convert(e){const t=br(e);if(!window.matchMedia("(forced-colors: active)").matches)return t;for(const[s,r]of this._colors)if(r.every((o,l)=>o===t[l]))return Kd._colorsMapping.get(s);return t}getHexCode(e){const t=this._colors.get(e);return t?ie.makeHexColor(...t):e}}class ci{#e=new AbortController;#t=null;#i=null;#n=new Map;#a=new Map;#s=null;#r=null;#o=null;#c=new Hx;#l=null;#h=null;#d=null;#f=0;#g=new Set;#p=null;#u=null;#m=new Set;_editorUndoBar=null;#y=!1;#v=!1;#b=!1;#E=null;#x=null;#A=null;#_=null;#C=!1;#w=null;#M=new Ux;#R=!1;#D=!1;#j=!1;#L=null;#O=null;#B=null;#N=null;#q=null;#T=be.NONE;#S=new Set;#P=null;#F=null;#H=null;#X=null;#Y=null;#W={isEditing:!1,isEmpty:!0,hasSomethingToUndo:!1,hasSomethingToRedo:!1,hasSelectedEditor:!1,hasSelectedText:!1};#z=[0,0];#I=null;#V=null;#J=null;#Z=null;#U=null;static TRANSLATE_SMALL=1;static TRANSLATE_BIG=10;static get _keyboardManager(){const e=ci.prototype,t=l=>l.#V.contains(document.activeElement)&&document.activeElement.tagName!=="BUTTON"&&l.hasSomethingToControl(),s=(l,{target:u})=>{if(u instanceof HTMLInputElement){const{type:h}=u;return h!=="text"&&h!=="number"}return!0},r=this.TRANSLATE_SMALL,o=this.TRANSLATE_BIG;return Se(this,"_keyboardManager",new za([[["ctrl+a","mac+meta+a"],e.selectAll,{checker:s}],[["ctrl+z","mac+meta+z"],e.undo,{checker:s}],[["ctrl+y","ctrl+shift+z","mac+meta+shift+z","ctrl+shift+Z","mac+meta+shift+Z"],e.redo,{checker:s}],[["Backspace","alt+Backspace","ctrl+Backspace","shift+Backspace","mac+Backspace","mac+alt+Backspace","mac+ctrl+Backspace","Delete","ctrl+Delete","shift+Delete","mac+Delete"],e.delete,{checker:s}],[["Enter","mac+Enter"],e.addNewEditorFromKeyboard,{checker:(l,{target:u})=>!(u instanceof HTMLButtonElement)&&l.#V.contains(u)&&!l.isEnterHandled}],[[" ","mac+ "],e.addNewEditorFromKeyboard,{checker:(l,{target:u})=>!(u instanceof HTMLButtonElement)&&l.#V.contains(document.activeElement)}],[["Escape","mac+Escape"],e.unselectAll],[["ArrowLeft","mac+ArrowLeft"],e.translateSelectedEditors,{args:[-r,0],checker:t}],[["ctrl+ArrowLeft","mac+shift+ArrowLeft"],e.translateSelectedEditors,{args:[-o,0],checker:t}],[["ArrowRight","mac+ArrowRight"],e.translateSelectedEditors,{args:[r,0],checker:t}],[["ctrl+ArrowRight","mac+shift+ArrowRight"],e.translateSelectedEditors,{args:[o,0],checker:t}],[["ArrowUp","mac+ArrowUp"],e.translateSelectedEditors,{args:[0,-r],checker:t}],[["ctrl+ArrowUp","mac+shift+ArrowUp"],e.translateSelectedEditors,{args:[0,-o],checker:t}],[["ArrowDown","mac+ArrowDown"],e.translateSelectedEditors,{args:[0,r],checker:t}],[["ctrl+ArrowDown","mac+shift+ArrowDown"],e.translateSelectedEditors,{args:[0,o],checker:t}]]))}constructor(e,t,s,r,o,l,u,h,p,m,b,v,A,x,C,T){const w=this._signal=this.#e.signal;this.#V=e,this.#J=t,this.#Z=s,this.#s=r,this.#l=o,this.#F=l,this.#Y=h,this._eventBus=u,u._on("editingaction",this.onEditingAction.bind(this),{signal:w}),u._on("pagechanging",this.onPageChanging.bind(this),{signal:w}),u._on("scalechanging",this.onScaleChanging.bind(this),{signal:w}),u._on("rotationchanging",this.onRotationChanging.bind(this),{signal:w}),u._on("setpreference",this.onSetPreference.bind(this),{signal:w}),u._on("switchannotationeditorparams",_=>this.updateParams(_.type,_.value),{signal:w}),window.addEventListener("pointerdown",()=>{this.#D=!0},{capture:!0,signal:w}),window.addEventListener("pointerup",()=>{this.#D=!1},{capture:!0,signal:w}),this.#le(),this.#he(),this.#te(),this.#r=h.annotationStorage,this.#E=h.filterFactory,this.#H=p,this.#_=m||null,this.#y=b,this.#v=v,this.#b=A,this.#q=x||null,this.viewParameters={realScale:cs.PDF_TO_CSS_UNITS,rotation:0},this.isShiftKeyDown=!1,this._editorUndoBar=C||null,this._supportsPinchToZoom=T!==!1,o?.setSidebarUiManager(this)}destroy(){this.#U?.resolve(),this.#U=null,this.#e?.abort(),this.#e=null,this._signal=null;for(const e of this.#a.values())e.destroy();this.#a.clear(),this.#n.clear(),this.#m.clear(),this.#N?.clear(),this.#t=null,this.#S.clear(),this.#c.destroy(),this.#s?.destroy(),this.#l?.destroy(),this.#F?.destroy(),this.#w?.hide(),this.#w=null,this.#B?.destroy(),this.#B=null,this.#i=null,this.#x&&(clearTimeout(this.#x),this.#x=null),this.#I&&(clearTimeout(this.#I),this.#I=null),this._editorUndoBar?.destroy(),this.#Y=null}combinedSignal(e){return AbortSignal.any([this._signal,e.signal])}get mlManager(){return this.#q}get useNewAltTextFlow(){return this.#v}get useNewAltTextWhenAddingImage(){return this.#b}get hcmFilter(){return Se(this,"hcmFilter",this.#H?this.#E.addHCMFilter(this.#H.foreground,this.#H.background):"none")}get direction(){return Se(this,"direction",getComputedStyle(this.#V).direction)}get _highlightColors(){return Se(this,"_highlightColors",this.#_?new Map(this.#_.split(",").map(e=>(e=e.split("=").map(t=>t.trim()),e[1]=e[1].toUpperCase(),e))):null)}get highlightColors(){const{_highlightColors:e}=this;if(!e)return Se(this,"highlightColors",null);const t=new Map,s=!!this.#H;for(const[r,o]of e){const l=r.endsWith("_HCM");if(s&&l){t.set(r.replace("_HCM",""),o);continue}!s&&!l&&t.set(r,o)}return Se(this,"highlightColors",t)}get highlightColorNames(){return Se(this,"highlightColorNames",this.highlightColors?new Map(Array.from(this.highlightColors,e=>e.reverse())):null)}getNonHCMColor(e){if(!this._highlightColors)return e;const t=this.highlightColorNames.get(e);return this._highlightColors.get(t)||e}getNonHCMColorName(e){return this.highlightColorNames.get(e)||e}setCurrentDrawingSession(e){e?(this.unselectAll(),this.disableUserSelect(!0)):this.disableUserSelect(!1),this.#d=e}setMainHighlightColorPicker(e){this.#B=e}editAltText(e,t=!1){this.#s?.editAltText(this,e,t)}hasCommentManager(){return!!this.#l}editComment(e,t,s,r){this.#l?.showDialog(this,e,t,s,r)}selectComment(e,t){this.#a.get(e)?.getEditorByUID(t)?.toggleComment(!0,!0)}updateComment(e){this.#l?.updateComment(e.getData())}updatePopupColor(e){this.#l?.updatePopupColor(e)}removeComment(e){this.#l?.removeComments([e.uid])}toggleComment(e,t,s=void 0){this.#l?.toggleCommentPopup(e,t,s)}makeCommentColor(e,t){return e&&this.#l?.makeCommentColor(e,t)||null}getCommentDialogElement(){return this.#l?.dialogElement||null}async waitForEditorsRendered(e){if(this.#a.has(e-1))return;const{resolve:t,promise:s}=Promise.withResolvers(),r=o=>{o.pageNumber===e&&(this._eventBus._off("editorsrendered",r),t())};this._eventBus.on("editorsrendered",r),await s}getSignature(e){this.#F?.getSignature({uiManager:this,editor:e})}get signatureManager(){return this.#F}switchToMode(e,t){this._eventBus.on("annotationeditormodechanged",t,{once:!0,signal:this._signal}),this._eventBus.dispatch("showannotationeditorui",{source:this,mode:e})}setPreference(e,t){this._eventBus.dispatch("setpreference",{source:this,name:e,value:t})}onSetPreference({name:e,value:t}){switch(e){case"enableNewAltTextWhenAddingImage":this.#b=t;break}}onPageChanging({pageNumber:e}){this.#f=e-1}focusMainContainer(){this.#V.focus()}findParent(e,t){for(const s of this.#a.values()){const{x:r,y:o,width:l,height:u}=s.div.getBoundingClientRect();if(e>=r&&e<=r+l&&t>=o&&t<=o+u)return s}return null}disableUserSelect(e=!1){this.#J.classList.toggle("noUserSelect",e)}addShouldRescale(e){this.#m.add(e)}removeShouldRescale(e){this.#m.delete(e)}onScaleChanging({scale:e}){this.commitOrRemove(),this.viewParameters.realScale=e*cs.PDF_TO_CSS_UNITS;for(const t of this.#m)t.onScaleChanging();this.#d?.onScaleChanging()}onRotationChanging({pagesRotation:e}){this.commitOrRemove(),this.viewParameters.rotation=e}#Q({anchorNode:e}){return e.nodeType===Node.TEXT_NODE?e.parentElement:e}#ee(e){const{currentLayer:t}=this;if(t.hasTextLayer(e))return t;for(const s of this.#a.values())if(s.hasTextLayer(e))return s;return null}highlightSelection(e="",t=!1){const s=document.getSelection();if(!s||s.isCollapsed)return;const{anchorNode:r,anchorOffset:o,focusNode:l,focusOffset:u}=s,h=s.toString(),m=this.#Q(s).closest(".textLayer"),b=this.getSelectionBoxes(m);if(!b)return;s.empty();const v=this.#ee(m),A=this.#T===be.NONE,x=()=>{const C=v?.createAndAddNewEditor({x:0,y:0},!1,{methodOfCreation:e,boxes:b,anchorNode:r,anchorOffset:o,focusNode:l,focusOffset:u,text:h});A&&this.showAllEditors("highlight",!0,!0),t&&C?.editComment()};if(A){this.switchToMode(be.HIGHLIGHT,x);return}x()}commentSelection(e=""){this.highlightSelection(e,!0)}#ae(){const e=document.getSelection();if(!e||e.isCollapsed)return;const s=this.#Q(e).closest(".textLayer"),r=this.getSelectionBoxes(s);r&&(this.#w||=new Fx(this),this.#w.show(s,r,this.direction==="ltr"))}getAndRemoveDataFromAnnotationStorage(e){if(!this.#r)return null;const t=`${Da}${e}`,s=this.#r.getRawValue(t);return s&&this.#r.remove(t),s}addToAnnotationStorage(e){!e.isEmpty()&&this.#r&&!this.#r.has(e.id)&&this.#r.setValue(e.id,e)}a11yAlert(e,t=null){const s=this.#Z;s&&(s.setAttribute("data-l10n-id",e),t?s.setAttribute("data-l10n-args",JSON.stringify(t)):s.removeAttribute("data-l10n-args"))}#oe(){const e=document.getSelection();if(!e||e.isCollapsed){this.#P&&(this.#w?.hide(),this.#P=null,this.#k({hasSelectedText:!1}));return}const{anchorNode:t}=e;if(t===this.#P)return;const r=this.#Q(e).closest(".textLayer");if(!r){this.#P&&(this.#w?.hide(),this.#P=null,this.#k({hasSelectedText:!1}));return}if(this.#w?.hide(),this.#P=t,this.#k({hasSelectedText:!0}),!(this.#T!==be.HIGHLIGHT&&this.#T!==be.NONE)&&(this.#T===be.HIGHLIGHT&&this.showAllEditors("highlight",!0,!0),this.#C=this.isShiftKeyDown,!this.isShiftKeyDown)){const o=this.#T===be.HIGHLIGHT?this.#ee(r):null;if(o?.toggleDrawing(),this.#D){const l=new AbortController,u=this.combinedSignal(l),h=p=>{p.type==="pointerup"&&p.button!==0||(l.abort(),o?.toggleDrawing(!0),p.type==="pointerup"&&this.#$("main_toolbar"))};window.addEventListener("pointerup",h,{signal:u}),window.addEventListener("blur",h,{signal:u})}else o?.toggleDrawing(!0),this.#$("main_toolbar")}}#$(e=""){this.#T===be.HIGHLIGHT?this.highlightSelection(e):this.#y&&this.#ae()}#le(){document.addEventListener("selectionchange",this.#oe.bind(this),{signal:this._signal})}#ce(){if(this.#A)return;this.#A=new AbortController;const e=this.combinedSignal(this.#A);window.addEventListener("focus",this.focus.bind(this),{signal:e}),window.addEventListener("blur",this.blur.bind(this),{signal:e})}#ue(){this.#A?.abort(),this.#A=null}blur(){if(this.isShiftKeyDown=!1,this.#C&&(this.#C=!1,this.#$("main_toolbar")),!this.hasSelection)return;const{activeElement:e}=document;for(const t of this.#S)if(t.div.contains(e)){this.#O=[t,e],t._focusEventsAllowed=!1;break}}focus(){if(!this.#O)return;const[e,t]=this.#O;this.#O=null,t.addEventListener("focusin",()=>{e._focusEventsAllowed=!0},{once:!0,signal:this._signal}),t.focus()}#te(){if(this.#L)return;this.#L=new AbortController;const e=this.combinedSignal(this.#L);window.addEventListener("keydown",this.keydown.bind(this),{signal:e}),window.addEventListener("keyup",this.keyup.bind(this),{signal:e})}#de(){this.#L?.abort(),this.#L=null}#ne(){if(this.#h)return;this.#h=new AbortController;const e=this.combinedSignal(this.#h);document.addEventListener("copy",this.copy.bind(this),{signal:e}),document.addEventListener("cut",this.cut.bind(this),{signal:e}),document.addEventListener("paste",this.paste.bind(this),{signal:e})}#ie(){this.#h?.abort(),this.#h=null}#he(){const e=this._signal;document.addEventListener("dragover",this.dragOver.bind(this),{signal:e}),document.addEventListener("drop",this.drop.bind(this),{signal:e})}addEditListeners(){this.#te(),this.#ne()}removeEditListeners(){this.#de(),this.#ie()}dragOver(e){for(const{type:t}of e.dataTransfer.items)for(const s of this.#u)if(s.isHandlingMimeForPasting(t)){e.dataTransfer.dropEffect="copy",e.preventDefault();return}}drop(e){for(const t of e.dataTransfer.items)for(const s of this.#u)if(s.isHandlingMimeForPasting(t.type)){s.paste(t,this.currentLayer),e.preventDefault();return}}copy(e){if(e.preventDefault(),this.#t?.commitOrRemove(),!this.hasSelection)return;const t=[];for(const s of this.#S){const r=s.serialize(!0);r&&t.push(r)}t.length!==0&&e.clipboardData.setData("application/pdfjs",JSON.stringify(t))}cut(e){this.copy(e),this.delete()}async paste(e){e.preventDefault();const{clipboardData:t}=e;for(const o of t.items)for(const l of this.#u)if(l.isHandlingMimeForPasting(o.type)){l.paste(o,this.currentLayer);return}let s=t.getData("application/pdfjs");if(!s)return;try{s=JSON.parse(s)}catch(o){ve(`paste: "${o.message}".`);return}if(!Array.isArray(s))return;this.unselectAll();const r=this.currentLayer;try{const o=[];for(const h of s){const p=await r.deserialize(h);if(!p)return;o.push(p)}const l=()=>{for(const h of o)this.#se(h);this.#re(o)},u=()=>{for(const h of o)h.remove()};this.addCommands({cmd:l,undo:u,mustExec:!0})}catch(o){ve(`paste: "${o.message}".`)}}keydown(e){!this.isShiftKeyDown&&e.key==="Shift"&&(this.isShiftKeyDown=!0),this.#T!==be.NONE&&!this.isEditorHandlingKeyboard&&ci._keyboardManager.exec(this,e)}keyup(e){this.isShiftKeyDown&&e.key==="Shift"&&(this.isShiftKeyDown=!1,this.#C&&(this.#C=!1,this.#$("main_toolbar")))}onEditingAction({name:e}){switch(e){case"undo":case"redo":case"delete":case"selectAll":this[e]();break;case"highlightSelection":this.highlightSelection("context_menu");break;case"commentSelection":this.commentSelection("context_menu");break}}#k(e){Object.entries(e).some(([s,r])=>this.#W[s]!==r)&&(this._eventBus.dispatch("annotationeditorstateschanged",{source:this,details:Object.assign(this.#W,e)}),this.#T===be.HIGHLIGHT&&e.hasSelectedEditor===!1&&this.#G([[_e.HIGHLIGHT_FREE,!0]]))}#G(e){this._eventBus.dispatch("annotationeditorparamschanged",{source:this,details:e})}setEditingState(e){e?(this.#ce(),this.#ne(),this.#k({isEditing:this.#T!==be.NONE,isEmpty:this.#K(),hasSomethingToUndo:this.#c.hasSomethingToUndo(),hasSomethingToRedo:this.#c.hasSomethingToRedo(),hasSelectedEditor:!1})):(this.#ue(),this.#ie(),this.#k({isEditing:!1}),this.disableUserSelect(!1))}registerEditorTypes(e){if(!this.#u){this.#u=e;for(const t of this.#u)this.#G(t.defaultPropertiesToUpdate)}}getId(){return this.#M.id}get currentLayer(){return this.#a.get(this.#f)}getLayer(e){return this.#a.get(e)}get currentPageIndex(){return this.#f}addLayer(e){this.#a.set(e.pageIndex,e),this.#R?e.enable():e.disable()}removeLayer(e){this.#a.delete(e.pageIndex)}async updateMode(e,t=null,s=!1,r=!1,o=!1){if(this.#T!==e&&!(this.#U&&(await this.#U.promise,!this.#U))){if(this.#U=Promise.withResolvers(),this.#d?.commitOrRemove(),this.#T===be.POPUP&&this.#l?.hideSidebar(),this.#l?.destroyPopup(),this.#T=e,e===be.NONE){this.setEditingState(!1),this.#pe();for(const l of this.#n.values())l.hideStandaloneCommentButton();this._editorUndoBar?.hide(),this.toggleComment(null),this.#U.resolve();return}for(const l of this.#n.values())l.addStandaloneCommentButton();e===be.SIGNATURE&&await this.#F?.loadSignatures(),this.setEditingState(!0),await this.#fe(),this.unselectAll();for(const l of this.#a.values())l.updateMode(e);if(e===be.POPUP){this.#i||=await this.#Y.getAnnotationsByType(new Set(this.#u.map(h=>h._editorType)));const l=new Set,u=[];for(const h of this.#n.values()){const{annotationElementId:p,hasComment:m,deleted:b}=h;p&&l.add(p),m&&!b&&u.push(h.getData())}for(const h of this.#i){const{id:p,popupRef:m,contentsObj:b}=h;m&&b?.str&&!l.has(p)&&!this.#g.has(p)&&u.push(h)}this.#l?.showSidebar(u)}if(!t){s&&this.addNewEditorFromKeyboard(),this.#U.resolve();return}for(const l of this.#n.values())l.uid===t?(this.setSelected(l),o?l.editComment():r?l.enterInEditMode():l.focus()):l.unselect();this.#U.resolve()}}addNewEditorFromKeyboard(){this.currentLayer.canCreateNewEmptyEditor()&&this.currentLayer.addNewEditor()}updateToolbar(e){e.mode!==this.#T&&this._eventBus.dispatch("switchannotationeditormode",{source:this,...e})}updateParams(e,t){if(this.#u){switch(e){case _e.CREATE:this.currentLayer.addNewEditor(t);return;case _e.HIGHLIGHT_SHOW_ALL:this._eventBus.dispatch("reporttelemetry",{source:this,details:{type:"editing",data:{type:"highlight",action:"toggle_visibility"}}}),(this.#X||=new Map).set(e,t),this.showAllEditors("highlight",t);break}if(this.hasSelection)for(const s of this.#S)s.updateParams(e,t);else for(const s of this.#u)s.updateDefaultParams(e,t)}}showAllEditors(e,t,s=!1){for(const o of this.#n.values())o.editorType===e&&o.show(t);(this.#X?.get(_e.HIGHLIGHT_SHOW_ALL)??!0)!==t&&this.#G([[_e.HIGHLIGHT_SHOW_ALL,t]])}enableWaiting(e=!1){if(this.#j!==e){this.#j=e;for(const t of this.#a.values())e?t.disableClick():t.enableClick(),t.div.classList.toggle("waiting",e)}}async#fe(){if(!this.#R){this.#R=!0;const e=[];for(const t of this.#a.values())e.push(t.enable());await Promise.all(e);for(const t of this.#n.values())t.enable()}}#pe(){if(this.unselectAll(),this.#R){this.#R=!1;for(const e of this.#a.values())e.disable();for(const e of this.#n.values())e.disable()}}*getEditors(e){for(const t of this.#n.values())t.pageIndex===e&&(yield t)}getEditor(e){return this.#n.get(e)}addEditor(e){this.#n.set(e.id,e)}removeEditor(e){e.div.contains(document.activeElement)&&(this.#x&&clearTimeout(this.#x),this.#x=setTimeout(()=>{this.focusMainContainer(),this.#x=null},0)),this.#n.delete(e.id),e.annotationElementId&&this.#N?.delete(e.annotationElementId),this.unselect(e),(!e.annotationElementId||!this.#g.has(e.annotationElementId))&&this.#r?.remove(e.id)}addDeletedAnnotationElement(e){this.#g.add(e.annotationElementId),this.addChangedExistingAnnotation(e),e.deleted=!0}isDeletedAnnotationElement(e){return this.#g.has(e)}removeDeletedAnnotationElement(e){this.#g.delete(e.annotationElementId),this.removeChangedExistingAnnotation(e),e.deleted=!1}#se(e){const t=this.#a.get(e.pageIndex);t?t.addOrRebuild(e):(this.addEditor(e),this.addToAnnotationStorage(e))}setActiveEditor(e){this.#t!==e&&(this.#t=e,e&&this.#G(e.propertiesToUpdate))}get#me(){let e=null;for(e of this.#S);return e}updateUI(e){this.#me===e&&this.#G(e.propertiesToUpdate)}updateUIForDefaultProperties(e){this.#G(e.defaultPropertiesToUpdate)}toggleSelected(e){if(this.#S.has(e)){this.#S.delete(e),e.unselect(),this.#k({hasSelectedEditor:this.hasSelection});return}this.#S.add(e),e.select(),this.#G(e.propertiesToUpdate),this.#k({hasSelectedEditor:!0})}setSelected(e){this.updateToolbar({mode:e.mode,editId:e.id}),this.#d?.commitOrRemove();for(const t of this.#S)t!==e&&t.unselect();this.#S.clear(),this.#S.add(e),e.select(),this.#G(e.propertiesToUpdate),this.#k({hasSelectedEditor:!0})}isSelected(e){return this.#S.has(e)}get firstSelectedEditor(){return this.#S.values().next().value}unselect(e){e.unselect(),this.#S.delete(e),this.#k({hasSelectedEditor:this.hasSelection})}get hasSelection(){return this.#S.size!==0}get isEnterHandled(){return this.#S.size===1&&this.firstSelectedEditor.isEnterHandled}undo(){this.#c.undo(),this.#k({hasSomethingToUndo:this.#c.hasSomethingToUndo(),hasSomethingToRedo:!0,isEmpty:this.#K()}),this._editorUndoBar?.hide()}redo(){this.#c.redo(),this.#k({hasSomethingToUndo:!0,hasSomethingToRedo:this.#c.hasSomethingToRedo(),isEmpty:this.#K()})}addCommands(e){this.#c.add(e),this.#k({hasSomethingToUndo:!0,hasSomethingToRedo:!1,isEmpty:this.#K()})}cleanUndoStack(e){this.#c.cleanType(e)}#K(){if(this.#n.size===0)return!0;if(this.#n.size===1)for(const e of this.#n.values())return e.isEmpty();return!1}delete(){this.commitOrRemove();const e=this.currentLayer?.endDrawingSession(!0);if(!this.hasSelection&&!e)return;const t=e?[e]:[...this.#S],s=()=>{this._editorUndoBar?.show(r,t.length===1?t[0].editorType:t.length);for(const o of t)o.remove()},r=()=>{for(const o of t)this.#se(o)};this.addCommands({cmd:s,undo:r,mustExec:!0})}commitOrRemove(){this.#t?.commitOrRemove()}hasSomethingToControl(){return this.#t||this.hasSelection}#re(e){for(const t of this.#S)t.unselect();this.#S.clear();for(const t of e)t.isEmpty()||(this.#S.add(t),t.select());this.#k({hasSelectedEditor:this.hasSelection})}selectAll(){for(const e of this.#S)e.commit();this.#re(this.#n.values())}unselectAll(){if(!(this.#t&&(this.#t.commitOrRemove(),this.#T!==be.NONE))&&!this.#d?.commitOrRemove()&&this.hasSelection){for(const e of this.#S)e.unselect();this.#S.clear(),this.#k({hasSelectedEditor:!1})}}translateSelectedEditors(e,t,s=!1){if(s||this.commitOrRemove(),!this.hasSelection)return;this.#z[0]+=e,this.#z[1]+=t;const[r,o]=this.#z,l=[...this.#S],u=1e3;this.#I&&clearTimeout(this.#I),this.#I=setTimeout(()=>{this.#I=null,this.#z[0]=this.#z[1]=0,this.addCommands({cmd:()=>{for(const h of l)this.#n.has(h.id)&&(h.translateInPage(r,o),h.translationDone())},undo:()=>{for(const h of l)this.#n.has(h.id)&&(h.translateInPage(-r,-o),h.translationDone())},mustExec:!1})},u);for(const h of l)h.translateInPage(e,t),h.translationDone()}setUpDragSession(){if(this.hasSelection){this.disableUserSelect(!0),this.#p=new Map;for(const e of this.#S)this.#p.set(e,{savedX:e.x,savedY:e.y,savedPageIndex:e.pageIndex,newX:0,newY:0,newPageIndex:-1})}}endDragSession(){if(!this.#p)return!1;this.disableUserSelect(!1);const e=this.#p;this.#p=null;let t=!1;for(const[{x:r,y:o,pageIndex:l},u]of e)u.newX=r,u.newY=o,u.newPageIndex=l,t||=r!==u.savedX||o!==u.savedY||l!==u.savedPageIndex;if(!t)return!1;const s=(r,o,l,u)=>{if(this.#n.has(r.id)){const h=this.#a.get(u);h?r._setParentAndPosition(h,o,l):(r.pageIndex=u,r.x=o,r.y=l)}};return this.addCommands({cmd:()=>{for(const[r,{newX:o,newY:l,newPageIndex:u}]of e)s(r,o,l,u)},undo:()=>{for(const[r,{savedX:o,savedY:l,savedPageIndex:u}]of e)s(r,o,l,u)},mustExec:!0}),!0}dragSelectedEditors(e,t){if(this.#p)for(const s of this.#p.keys())s.drag(e,t)}rebuild(e){if(e.parent===null){const t=this.getLayer(e.pageIndex);t?(t.changeParent(e),t.addOrRebuild(e)):(this.addEditor(e),this.addToAnnotationStorage(e),e.rebuild())}else e.parent.addOrRebuild(e)}get isEditorHandlingKeyboard(){return this.getActive()?.shouldGetKeyboardEvents()||this.#S.size===1&&this.firstSelectedEditor.shouldGetKeyboardEvents()}isActive(e){return this.#t===e}getActive(){return this.#t}getMode(){return this.#T}isEditingMode(){return this.#T!==be.NONE}get imageManager(){return Se(this,"imageManager",new $d)}getSelectionBoxes(e){if(!e)return null;const t=document.getSelection();for(let p=0,m=t.rangeCount;p<m;p++)if(!e.contains(t.getRangeAt(p).commonAncestorContainer))return null;const{x:s,y:r,width:o,height:l}=e.getBoundingClientRect();let u;switch(e.getAttribute("data-main-rotation")){case"90":u=(p,m,b,v)=>({x:(m-r)/l,y:1-(p+b-s)/o,width:v/l,height:b/o});break;case"180":u=(p,m,b,v)=>({x:1-(p+b-s)/o,y:1-(m+v-r)/l,width:b/o,height:v/l});break;case"270":u=(p,m,b,v)=>({x:1-(m+v-r)/l,y:(p-s)/o,width:v/l,height:b/o});break;default:u=(p,m,b,v)=>({x:(p-s)/o,y:(m-r)/l,width:b/o,height:v/l});break}const h=[];for(let p=0,m=t.rangeCount;p<m;p++){const b=t.getRangeAt(p);if(!b.collapsed)for(const{x:v,y:A,width:x,height:C}of b.getClientRects())x===0||C===0||h.push(u(v,A,x,C))}return h.length===0?null:h}addChangedExistingAnnotation({annotationElementId:e,id:t}){(this.#o||=new Map).set(e,t)}removeChangedExistingAnnotation({annotationElementId:e}){this.#o?.delete(e)}renderAnnotationElement(e){const t=this.#o?.get(e.data.id);if(!t)return;const s=this.#r.getRawValue(t);s&&(this.#T===be.NONE&&!s.hasBeenModified||s.renderAnnotationElement(e))}setMissingCanvas(e,t,s){const r=this.#N?.get(e);r&&(r.setCanvas(t,s),this.#N.delete(e))}addMissingCanvas(e,t){(this.#N||=new Map).set(e,t)}}class Bn{#e=null;#t=!1;#i=null;#n=null;#a=null;#s=null;#r=!1;#o=null;#c=null;#l=null;#h=null;#d=!1;static#f=null;static _l10n=null;constructor(e){this.#c=e,this.#d=e._uiManager.useNewAltTextFlow,Bn.#f||=Object.freeze({added:"pdfjs-editor-new-alt-text-added-button","added-label":"pdfjs-editor-new-alt-text-added-button-label",missing:"pdfjs-editor-new-alt-text-missing-button","missing-label":"pdfjs-editor-new-alt-text-missing-button-label",review:"pdfjs-editor-new-alt-text-to-review-button","review-label":"pdfjs-editor-new-alt-text-to-review-button-label"})}static initialize(e){Bn._l10n??=e}async render(){const e=this.#i=document.createElement("button");e.className="altText",e.tabIndex="0";const t=this.#n=document.createElement("span");e.append(t),this.#d?(e.classList.add("new"),e.setAttribute("data-l10n-id",Bn.#f.missing),t.setAttribute("data-l10n-id",Bn.#f["missing-label"])):(e.setAttribute("data-l10n-id","pdfjs-editor-alt-text-button"),t.setAttribute("data-l10n-id","pdfjs-editor-alt-text-button-label"));const s=this.#c._uiManager._signal;e.addEventListener("contextmenu",ln,{signal:s}),e.addEventListener("pointerdown",o=>o.stopPropagation(),{signal:s});const r=o=>{o.preventDefault(),this.#c._uiManager.editAltText(this.#c),this.#d&&this.#c._reportTelemetry({action:"pdfjs.image.alt_text.image_status_label_clicked",data:{label:this.#g}})};return e.addEventListener("click",r,{capture:!0,signal:s}),e.addEventListener("keydown",o=>{o.target===e&&o.key==="Enter"&&(this.#r=!0,r(o))},{signal:s}),await this.#p(),e}get#g(){return this.#e&&"added"||this.#e===null&&this.guessedText&&"review"||"missing"}finish(){this.#i&&(this.#i.focus({focusVisible:this.#r}),this.#r=!1)}isEmpty(){return this.#d?this.#e===null:!this.#e&&!this.#t}hasData(){return this.#d?this.#e!==null||!!this.#l:this.isEmpty()}get guessedText(){return this.#l}async setGuessedText(e){this.#e===null&&(this.#l=e,this.#h=await Bn._l10n.get("pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer",{generatedAltText:e}),this.#p())}toggleAltTextBadge(e=!1){if(!this.#d||this.#e){this.#o?.remove(),this.#o=null;return}if(!this.#o){const t=this.#o=document.createElement("div");t.className="noAltTextBadge",this.#c.div.append(t)}this.#o.classList.toggle("hidden",!e)}serialize(e){let t=this.#e;return!e&&this.#l===t&&(t=this.#h),{altText:t,decorative:this.#t,guessedText:this.#l,textWithDisclaimer:this.#h}}get data(){return{altText:this.#e,decorative:this.#t}}set data({altText:e,decorative:t,guessedText:s,textWithDisclaimer:r,cancel:o=!1}){s&&(this.#l=s,this.#h=r),!(this.#e===e&&this.#t===t)&&(o||(this.#e=e,this.#t=t),this.#p())}toggle(e=!1){this.#i&&(!e&&this.#s&&(clearTimeout(this.#s),this.#s=null),this.#i.disabled=!e)}shown(){this.#c._reportTelemetry({action:"pdfjs.image.alt_text.image_status_label_displayed",data:{label:this.#g}})}destroy(){this.#i?.remove(),this.#i=null,this.#n=null,this.#a=null,this.#o?.remove(),this.#o=null}async#p(){const e=this.#i;if(!e)return;if(this.#d){if(e.classList.toggle("done",!!this.#e),e.setAttribute("data-l10n-id",Bn.#f[this.#g]),this.#n?.setAttribute("data-l10n-id",Bn.#f[`${this.#g}-label`]),!this.#e){this.#a?.remove();return}}else{if(!this.#e&&!this.#t){e.classList.remove("done"),this.#a?.remove();return}e.classList.add("done"),e.setAttribute("data-l10n-id","pdfjs-editor-alt-text-edit-button")}let t=this.#a;if(!t){this.#a=t=document.createElement("span"),t.className="tooltip",t.setAttribute("role","tooltip"),t.id=`alt-text-tooltip-${this.#c.id}`;const r=100,o=this.#c._uiManager._signal;o.addEventListener("abort",()=>{clearTimeout(this.#s),this.#s=null},{once:!0}),e.addEventListener("mouseenter",()=>{this.#s=setTimeout(()=>{this.#s=null,this.#a.classList.add("show"),this.#c._reportTelemetry({action:"alt_text_tooltip"})},r)},{signal:o}),e.addEventListener("mouseleave",()=>{this.#s&&(clearTimeout(this.#s),this.#s=null),this.#a?.classList.remove("show")},{signal:o})}this.#t?t.setAttribute("data-l10n-id","pdfjs-editor-alt-text-decorative-tooltip"):(t.removeAttribute("data-l10n-id"),t.textContent=this.#e),t.parentNode||e.append(t),this.#c.getElementForAltText()?.setAttribute("aria-describedby",t.id)}}class hl{#e=null;#t=null;#i=!1;#n=null;#a=null;#s=null;#r=null;#o=null;#c=!1;#l=null;constructor(e){this.#n=e}renderForToolbar(){const e=this.#t=document.createElement("button");return e.className="comment",this.#h(e,!1)}renderForStandalone(){const e=this.#e=document.createElement("button");e.className="annotationCommentButton";const t=this.#n.commentButtonPosition;if(t){const{style:s}=e;s.insetInlineEnd=`calc(${100*(this.#n._uiManager.direction==="ltr"?1-t[0]:t[0])}% - var(--comment-button-dim))`,s.top=`calc(${100*t[1]}% - var(--comment-button-dim))`;const r=this.#n.commentButtonColor;r&&(s.backgroundColor=r)}return this.#h(e,!0)}focusButton(){setTimeout(()=>{(this.#e??this.#t)?.focus()},0)}onUpdatedColor(){if(!this.#e)return;const e=this.#n.commentButtonColor;e&&(this.#e.style.backgroundColor=e),this.#n._uiManager.updatePopupColor(this.#n)}get commentButtonWidth(){return(this.#e?.getBoundingClientRect().width??0)/this.#n.parent.boundingClientRect.width}get commentPopupPositionInLayer(){if(this.#l)return this.#l;if(!this.#e)return null;const{x:e,y:t,height:s}=this.#e.getBoundingClientRect(),{x:r,y:o,width:l,height:u}=this.#n.parent.boundingClientRect;return[(e-r)/l,(t+s-o)/u]}set commentPopupPositionInLayer(e){this.#l=e}hasDefaultPopupPosition(){return this.#l===null}removeStandaloneCommentButton(){this.#e?.remove(),this.#e=null}removeToolbarCommentButton(){this.#t?.remove(),this.#t=null}setCommentButtonStates({selected:e,hasPopup:t}){this.#e&&(this.#e.classList.toggle("selected",e),this.#e.ariaExpanded=t)}#h(e,t){if(!this.#n._uiManager.hasCommentManager())return null;e.tabIndex="0",e.ariaHasPopup="dialog",t?(e.ariaControls="commentPopup",e.setAttribute("data-l10n-id","pdfjs-show-comment-button")):(e.ariaControlsElements=[this.#n._uiManager.getCommentDialogElement()],e.setAttribute("data-l10n-id","pdfjs-editor-edit-comment-button"));const s=this.#n._uiManager._signal;if(!(s instanceof AbortSignal)||s.aborted)return e;e.addEventListener("contextmenu",ln,{signal:s}),t&&(e.addEventListener("focusin",o=>{this.#n._focusEventsAllowed=!1,tt(o)},{capture:!0,signal:s}),e.addEventListener("focusout",o=>{this.#n._focusEventsAllowed=!0,tt(o)},{capture:!0,signal:s})),e.addEventListener("pointerdown",o=>o.stopPropagation(),{signal:s});const r=o=>{o.preventDefault(),e===this.#t?this.edit():this.#n.toggleComment(!0)};return e.addEventListener("click",r,{capture:!0,signal:s}),e.addEventListener("keydown",o=>{o.target===e&&o.key==="Enter"&&(this.#i=!0,r(o))},{signal:s}),e.addEventListener("pointerenter",()=>{this.#n.toggleComment(!1,!0)},{signal:s}),e.addEventListener("pointerleave",()=>{this.#n.toggleComment(!1,!1)},{signal:s}),e}edit(e){const t=this.commentPopupPositionInLayer;let s,r;if(t)[s,r]=t;else{[s,r]=this.#n.commentButtonPosition;const{width:m,height:b,x:v,y:A}=this.#n;s=v+s*m,r=A+r*b}const o=this.#n.parent.boundingClientRect,{x:l,y:u,width:h,height:p}=o;this.#n._uiManager.editComment(this.#n,l+s*h,u+r*p,{...e,parentDimensions:o})}finish(){this.#t&&(this.#t.focus({focusVisible:this.#i}),this.#i=!1)}isDeleted(){return this.#c||this.#r===""}isEmpty(){return this.#r===null}hasBeenEdited(){return this.isDeleted()||this.#r!==this.#a}serialize(){return this.data}get data(){return{text:this.#r,richText:this.#s,date:this.#o,deleted:this.isDeleted()}}set data(e){if(e!==this.#r&&(this.#s=null),e===null){this.#r="",this.#c=!0;return}this.#r=e,this.#o=new Date,this.#c=!1}setInitialText(e,t=null){this.#a=e,this.data=e,this.#o=null,this.#s=t}shown(){}destroy(){this.#t?.remove(),this.#t=null,this.#e?.remove(),this.#e=null,this.#r="",this.#s=null,this.#o=null,this.#n=null,this.#i=!1,this.#c=!1}}class Ga{#e;#t=!1;#i=null;#n;#a;#s;#r;#o=null;#c;#l=null;#h;#d=null;constructor({container:e,isPinchingDisabled:t=null,isPinchingStopped:s=null,onPinchStart:r=null,onPinching:o=null,onPinchEnd:l=null,signal:u}){this.#e=e,this.#i=s,this.#n=t,this.#a=r,this.#s=o,this.#r=l,this.#h=new AbortController,this.#c=AbortSignal.any([u,this.#h.signal]),e.addEventListener("touchstart",this.#f.bind(this),{passive:!1,signal:this.#c})}get MIN_TOUCH_DISTANCE_TO_PINCH(){return 35/Tn.pixelRatio}#f(e){if(this.#n?.())return;if(e.touches.length===1){if(this.#o)return;const r=this.#o=new AbortController,o=AbortSignal.any([this.#c,r.signal]),l=this.#e,u={capture:!0,signal:o,passive:!1},h=p=>{p.pointerType==="touch"&&(this.#o?.abort(),this.#o=null)};l.addEventListener("pointerdown",p=>{p.pointerType==="touch"&&(tt(p),h(p))},u),l.addEventListener("pointerup",h,u),l.addEventListener("pointercancel",h,u);return}if(!this.#d){this.#d=new AbortController;const r=AbortSignal.any([this.#c,this.#d.signal]),o=this.#e,l={signal:r,capture:!1,passive:!1};o.addEventListener("touchmove",this.#g.bind(this),l);const u=this.#p.bind(this);o.addEventListener("touchend",u,l),o.addEventListener("touchcancel",u,l),l.capture=!0,o.addEventListener("pointerdown",tt,l),o.addEventListener("pointermove",tt,l),o.addEventListener("pointercancel",tt,l),o.addEventListener("pointerup",tt,l),this.#a?.()}if(tt(e),e.touches.length!==2||this.#i?.()){this.#l=null;return}let[t,s]=e.touches;t.identifier>s.identifier&&([t,s]=[s,t]),this.#l={touch0X:t.screenX,touch0Y:t.screenY,touch1X:s.screenX,touch1Y:s.screenY}}#g(e){if(!this.#l||e.touches.length!==2)return;tt(e);let[t,s]=e.touches;t.identifier>s.identifier&&([t,s]=[s,t]);const{screenX:r,screenY:o}=t,{screenX:l,screenY:u}=s,h=this.#l,{touch0X:p,touch0Y:m,touch1X:b,touch1Y:v}=h,A=b-p,x=v-m,C=l-r,T=u-o,w=Math.hypot(C,T)||1,_=Math.hypot(A,x)||1;if(!this.#t&&Math.abs(_-w)<=Ga.MIN_TOUCH_DISTANCE_TO_PINCH)return;if(h.touch0X=r,h.touch0Y=o,h.touch1X=l,h.touch1Y=u,!this.#t){this.#t=!0;return}const R=[(r+l)/2,(o+u)/2];this.#s?.(R,_,w)}#p(e){e.touches.length>=2||(this.#d&&(this.#d.abort(),this.#d=null,this.#r?.()),this.#l&&(tt(e),this.#l=null,this.#t=!1))}destroy(){this.#h?.abort(),this.#h=null,this.#o?.abort(),this.#o=null}}class ue{#e=null;#t=null;#i=null;#n=null;#a=null;#s=!1;#r=null;#o="";#c=null;#l=null;#h=null;#d=null;#f=null;#g="";#p=!1;#u=null;#m=!1;#y=!1;#v=!1;#b=null;#E=0;#x=0;#A=null;#_=null;isSelected=!1;_isCopy=!1;_editToolbar=null;_initialOptions=Object.create(null);_initialData=null;_isVisible=!0;_uiManager=null;_focusEventsAllowed=!0;static _l10n=null;static _l10nResizer=null;#C=!1;#w=ue._zIndex++;static _borderLineWidth=-1;static _colorManager=new Kd;static _zIndex=1;static _telemetryTimeout=1e3;static get _resizerKeyboardManager(){const e=ue.prototype._resizeWithKeyboard,t=ci.TRANSLATE_SMALL,s=ci.TRANSLATE_BIG;return Se(this,"_resizerKeyboardManager",new za([[["ArrowLeft","mac+ArrowLeft"],e,{args:[-t,0]}],[["ctrl+ArrowLeft","mac+shift+ArrowLeft"],e,{args:[-s,0]}],[["ArrowRight","mac+ArrowRight"],e,{args:[t,0]}],[["ctrl+ArrowRight","mac+shift+ArrowRight"],e,{args:[s,0]}],[["ArrowUp","mac+ArrowUp"],e,{args:[0,-t]}],[["ctrl+ArrowUp","mac+shift+ArrowUp"],e,{args:[0,-s]}],[["ArrowDown","mac+ArrowDown"],e,{args:[0,t]}],[["ctrl+ArrowDown","mac+shift+ArrowDown"],e,{args:[0,s]}],[["Escape","mac+Escape"],ue.prototype._stopResizingWithKeyboard]]))}constructor(e){this.parent=e.parent,this.id=e.id,this.width=this.height=null,this.pageIndex=e.parent.pageIndex,this.name=e.name,this.div=null,this._uiManager=e.uiManager,this.annotationElementId=null,this._willKeepAspectRatio=!1,this._initialOptions.isCentered=e.isCentered,this._structTreeParentId=null,this.annotationElementId=e.annotationElementId||null,this.creationDate=e.creationDate||new Date,this.modificationDate=e.modificationDate||null;const{rotation:t,rawDims:{pageWidth:s,pageHeight:r,pageX:o,pageY:l}}=this.parent.viewport;this.rotation=t,this.pageRotation=(360+t-this._uiManager.viewParameters.rotation)%360,this.pageDimensions=[s,r],this.pageTranslation=[o,l];const[u,h]=this.parentDimensions;this.x=e.x/u,this.y=e.y/h,this.isAttachedToDOM=!1,this.deleted=!1}get editorType(){return Object.getPrototypeOf(this).constructor._type}get mode(){return Object.getPrototypeOf(this).constructor._editorType}static get isDrawer(){return!1}static get _defaultLineColor(){return Se(this,"_defaultLineColor",this._colorManager.getHexCode("CanvasText"))}static deleteAnnotationElement(e){const t=new zx({id:e.parent.getNextId(),parent:e.parent,uiManager:e._uiManager});t.annotationElementId=e.annotationElementId,t.deleted=!0,t._uiManager.addToAnnotationStorage(t)}static initialize(e,t){if(ue._l10n??=e,ue._l10nResizer||=Object.freeze({topLeft:"pdfjs-editor-resizer-top-left",topMiddle:"pdfjs-editor-resizer-top-middle",topRight:"pdfjs-editor-resizer-top-right",middleRight:"pdfjs-editor-resizer-middle-right",bottomRight:"pdfjs-editor-resizer-bottom-right",bottomMiddle:"pdfjs-editor-resizer-bottom-middle",bottomLeft:"pdfjs-editor-resizer-bottom-left",middleLeft:"pdfjs-editor-resizer-middle-left"}),ue._borderLineWidth!==-1)return;const s=getComputedStyle(document.documentElement);ue._borderLineWidth=parseFloat(s.getPropertyValue("--outline-width"))||0}static updateDefaultParams(e,t){}static get defaultPropertiesToUpdate(){return[]}static isHandlingMimeForPasting(e){return!1}static paste(e,t){qe("Not implemented")}get propertiesToUpdate(){return[]}get _isDraggable(){return this.#C}set _isDraggable(e){this.#C=e,this.div?.classList.toggle("draggable",e)}get uid(){return this.annotationElementId||this.id}get isEnterHandled(){return!0}center(){const[e,t]=this.pageDimensions;switch(this.parentRotation){case 90:this.x-=this.height*t/(e*2),this.y+=this.width*e/(t*2);break;case 180:this.x+=this.width/2,this.y+=this.height/2;break;case 270:this.x+=this.height*t/(e*2),this.y-=this.width*e/(t*2);break;default:this.x-=this.width/2,this.y-=this.height/2;break}this.fixAndSetPosition()}addCommands(e){this._uiManager.addCommands(e)}get currentLayer(){return this._uiManager.currentLayer}setInBackground(){this.div.style.zIndex=0}setInForeground(){this.div.style.zIndex=this.#w}setParent(e){e!==null?(this.pageIndex=e.pageIndex,this.pageDimensions=e.pageDimensions):(this.#I(),this.#d?.remove(),this.#d=null),this.parent=e}focusin(e){this._focusEventsAllowed&&(this.#p?this.#p=!1:this.parent.setSelected(this))}focusout(e){!this._focusEventsAllowed||!this.isAttachedToDOM||e.relatedTarget?.closest(`#${this.id}`)||(e.preventDefault(),this.parent?.isMultipleSelection||this.commitOrRemove())}commitOrRemove(){this.isEmpty()?this.remove():this.commit()}commit(){this.isInEditMode()&&this.addToAnnotationStorage()}addToAnnotationStorage(){this._uiManager.addToAnnotationStorage(this)}setAt(e,t,s,r){const[o,l]=this.parentDimensions;[s,r]=this.screenToPageTranslation(s,r),this.x=(e+s)/o,this.y=(t+r)/l,this.fixAndSetPosition()}_moveAfterPaste(e,t){const[s,r]=this.parentDimensions;this.setAt(e*s,t*r,this.width*s,this.height*r),this._onTranslated()}#M([e,t],s,r){[s,r]=this.screenToPageTranslation(s,r),this.x+=s/e,this.y+=r/t,this._onTranslating(this.x,this.y),this.fixAndSetPosition()}translate(e,t){this.#M(this.parentDimensions,e,t)}translateInPage(e,t){this.#u||=[this.x,this.y,this.width,this.height],this.#M(this.pageDimensions,e,t),this.div.scrollIntoView({block:"nearest"})}translationDone(){this._onTranslated(this.x,this.y)}drag(e,t){this.#u||=[this.x,this.y,this.width,this.height];const{div:s,parentDimensions:[r,o]}=this;if(this.x+=e/r,this.y+=t/o,this.parent&&(this.x<0||this.x>1||this.y<0||this.y>1)){const{x:b,y:v}=this.div.getBoundingClientRect();this.parent.findNewParent(this,b,v)&&(this.x-=Math.floor(this.x),this.y-=Math.floor(this.y))}let{x:l,y:u}=this;const[h,p]=this.getBaseTranslation();l+=h,u+=p;const{style:m}=s;m.left=`${(100*l).toFixed(2)}%`,m.top=`${(100*u).toFixed(2)}%`,this._onTranslating(l,u),s.scrollIntoView({block:"nearest"})}_onTranslating(e,t){}_onTranslated(e,t){}get _hasBeenMoved(){return!!this.#u&&(this.#u[0]!==this.x||this.#u[1]!==this.y)}get _hasBeenResized(){return!!this.#u&&(this.#u[2]!==this.width||this.#u[3]!==this.height)}getBaseTranslation(){const[e,t]=this.parentDimensions,{_borderLineWidth:s}=ue,r=s/e,o=s/t;switch(this.rotation){case 90:return[-r,o];case 180:return[r,o];case 270:return[r,-o];default:return[-r,-o]}}get _mustFixPosition(){return!0}fixAndSetPosition(e=this.rotation){const{div:{style:t},pageDimensions:[s,r]}=this;let{x:o,y:l,width:u,height:h}=this;if(u*=s,h*=r,o*=s,l*=r,this._mustFixPosition)switch(e){case 0:o=Ot(o,0,s-u),l=Ot(l,0,r-h);break;case 90:o=Ot(o,0,s-h),l=Ot(l,u,r);break;case 180:o=Ot(o,u,s),l=Ot(l,h,r);break;case 270:o=Ot(o,h,s),l=Ot(l,0,r-u);break}this.x=o/=s,this.y=l/=r;const[p,m]=this.getBaseTranslation();o+=p,l+=m,t.left=`${(100*o).toFixed(2)}%`,t.top=`${(100*l).toFixed(2)}%`,this.moveInDOM()}static#R(e,t,s){switch(s){case 90:return[t,-e];case 180:return[-e,-t];case 270:return[-t,e];default:return[e,t]}}screenToPageTranslation(e,t){return ue.#R(e,t,this.parentRotation)}pageTranslationToScreen(e,t){return ue.#R(e,t,360-this.parentRotation)}#D(e){switch(e){case 90:{const[t,s]=this.pageDimensions;return[0,-t/s,s/t,0]}case 180:return[-1,0,0,-1];case 270:{const[t,s]=this.pageDimensions;return[0,t/s,-s/t,0]}default:return[1,0,0,1]}}get parentScale(){return this._uiManager.viewParameters.realScale}get parentRotation(){return(this._uiManager.viewParameters.rotation+this.pageRotation)%360}get parentDimensions(){const{parentScale:e,pageDimensions:[t,s]}=this;return[t*e,s*e]}setDims(){const{div:{style:e},width:t,height:s}=this;e.width=`${(100*t).toFixed(2)}%`,e.height=`${(100*s).toFixed(2)}%`}getInitialTranslation(){return[0,0]}#j(){if(this.#c)return;this.#c=document.createElement("div"),this.#c.classList.add("resizers");const e=this._willKeepAspectRatio?["topLeft","topRight","bottomRight","bottomLeft"]:["topLeft","topMiddle","topRight","middleRight","bottomRight","bottomMiddle","bottomLeft","middleLeft"],t=this._uiManager._signal;for(const s of e){const r=document.createElement("div");this.#c.append(r),r.classList.add("resizer",s),r.setAttribute("data-resizer-name",s),r.addEventListener("pointerdown",this.#L.bind(this,s),{signal:t}),r.addEventListener("contextmenu",ln,{signal:t}),r.tabIndex=-1}this.div.prepend(this.#c)}#L(e,t){t.preventDefault();const{isMac:s}=wt.platform;if(t.button!==0||t.ctrlKey&&s)return;this.#i?.toggle(!1);const r=this._isDraggable;this._isDraggable=!1,this.#l=[t.screenX,t.screenY];const o=new AbortController,l=this._uiManager.combinedSignal(o);this.parent.togglePointerEvents(!1),window.addEventListener("pointermove",this.#N.bind(this,e),{passive:!0,capture:!0,signal:l}),window.addEventListener("touchmove",tt,{passive:!1,signal:l}),window.addEventListener("contextmenu",ln,{signal:l}),this.#h={savedX:this.x,savedY:this.y,savedWidth:this.width,savedHeight:this.height};const u=this.parent.div.style.cursor,h=this.div.style.cursor;this.div.style.cursor=this.parent.div.style.cursor=window.getComputedStyle(t.target).cursor;const p=()=>{o.abort(),this.parent.togglePointerEvents(!0),this.#i?.toggle(!0),this._isDraggable=r,this.parent.div.style.cursor=u,this.div.style.cursor=h,this.#B()};window.addEventListener("pointerup",p,{signal:l}),window.addEventListener("blur",p,{signal:l})}#O(e,t,s,r){this.width=s,this.height=r,this.x=e,this.y=t,this.setDims(),this.fixAndSetPosition(),this._onResized()}_onResized(){}#B(){if(!this.#h)return;const{savedX:e,savedY:t,savedWidth:s,savedHeight:r}=this.#h;this.#h=null;const o=this.x,l=this.y,u=this.width,h=this.height;o===e&&l===t&&u===s&&h===r||this.addCommands({cmd:this.#O.bind(this,o,l,u,h),undo:this.#O.bind(this,e,t,s,r),mustExec:!0})}static _round(e){return Math.round(e*1e4)/1e4}#N(e,t){const[s,r]=this.parentDimensions,o=this.x,l=this.y,u=this.width,h=this.height,p=ue.MIN_SIZE/s,m=ue.MIN_SIZE/r,b=this.#D(this.rotation),v=(N,G)=>[b[0]*N+b[2]*G,b[1]*N+b[3]*G],A=this.#D(360-this.rotation),x=(N,G)=>[A[0]*N+A[2]*G,A[1]*N+A[3]*G];let C,T,w=!1,_=!1;switch(e){case"topLeft":w=!0,C=(N,G)=>[0,0],T=(N,G)=>[N,G];break;case"topMiddle":C=(N,G)=>[N/2,0],T=(N,G)=>[N/2,G];break;case"topRight":w=!0,C=(N,G)=>[N,0],T=(N,G)=>[0,G];break;case"middleRight":_=!0,C=(N,G)=>[N,G/2],T=(N,G)=>[0,G/2];break;case"bottomRight":w=!0,C=(N,G)=>[N,G],T=(N,G)=>[0,0];break;case"bottomMiddle":C=(N,G)=>[N/2,G],T=(N,G)=>[N/2,0];break;case"bottomLeft":w=!0,C=(N,G)=>[0,G],T=(N,G)=>[N,0];break;case"middleLeft":_=!0,C=(N,G)=>[0,G/2],T=(N,G)=>[N,G/2];break}const R=C(u,h),O=T(u,h);let k=v(...O);const j=ue._round(o+k[0]),F=ue._round(l+k[1]);let q=1,V=1,Q,J;if(t.fromKeyboard)({deltaX:Q,deltaY:J}=t);else{const{screenX:N,screenY:G}=t,[ee,he]=this.#l;[Q,J]=this.screenToPageTranslation(N-ee,G-he),this.#l[0]=N,this.#l[1]=G}if([Q,J]=x(Q/s,J/r),w){const N=Math.hypot(u,h);q=V=Math.max(Math.min(Math.hypot(O[0]-R[0]-Q,O[1]-R[1]-J)/N,1/u,1/h),p/u,m/h)}else _?q=Ot(Math.abs(O[0]-R[0]-Q),p,1)/u:V=Ot(Math.abs(O[1]-R[1]-J),m,1)/h;const le=ue._round(u*q),de=ue._round(h*V);k=v(...T(le,de));const ae=j-k[0],ce=F-k[1];this.#u||=[this.x,this.y,this.width,this.height],this.width=le,this.height=de,this.x=ae,this.y=ce,this.setDims(),this.fixAndSetPosition(),this._onResizing()}_onResizing(){}altTextFinish(){this.#i?.finish()}get toolbarButtons(){return null}async addEditToolbar(){if(this._editToolbar||this.#y)return this._editToolbar;this._editToolbar=new _a(this),this.div.append(this._editToolbar.render());const{toolbarButtons:e}=this;if(e)for(const[t,s]of e)await this._editToolbar.addButton(t,s);return this.hasComment||this._editToolbar.addButton("comment",this.addCommentButton()),this._editToolbar.addButton("delete"),this._editToolbar}addCommentButtonInToolbar(){this._editToolbar?.addButtonBefore("comment",this.addCommentButton(),".deleteButton")}removeCommentButtonFromToolbar(){this._editToolbar?.removeButton("comment")}removeEditToolbar(){this._editToolbar?.remove(),this._editToolbar=null,this.#i?.destroy()}addContainer(e){const t=this._editToolbar?.div;t?t.before(e):this.div.append(e)}getClientDimensions(){return this.div.getBoundingClientRect()}createAltText(){return this.#i||(Bn.initialize(ue._l10n),this.#i=new Bn(this),this.#e&&(this.#i.data=this.#e,this.#e=null)),this.#i}get altTextData(){return this.#i?.data}set altTextData(e){this.#i&&(this.#i.data=e)}get guessedAltText(){return this.#i?.guessedText}async setGuessedAltText(e){await this.#i?.setGuessedText(e)}serializeAltText(e){return this.#i?.serialize(e)}hasAltText(){return!!this.#i&&!this.#i.isEmpty()}hasAltTextData(){return this.#i?.hasData()??!1}focusCommentButton(){this.#n?.focusButton()}addCommentButton(){return this.#n||=new hl(this)}addStandaloneCommentButton(){if(this.#a){this._uiManager.isEditingMode()&&this.#a.classList.remove("hidden");return}this.hasComment&&(this.#a=this.#n.renderForStandalone(),this.div.append(this.#a))}removeStandaloneCommentButton(){this.#n.removeStandaloneCommentButton(),this.#a=null}hideStandaloneCommentButton(){this.#a?.classList.add("hidden")}get comment(){const{data:{richText:e,text:t,date:s,deleted:r}}=this.#n;return{text:t,richText:e,date:s,deleted:r,color:this.getNonHCMColor(),opacity:this.opacity??1}}set comment(e){this.#n||=new hl(this),this.#n.data=e,this.hasComment?(this.removeCommentButtonFromToolbar(),this.addStandaloneCommentButton(),this._uiManager.updateComment(this)):(this.addCommentButtonInToolbar(),this.removeStandaloneCommentButton(),this._uiManager.removeComment(this))}setCommentData({comment:e,popupRef:t,richText:s}){if(!t||(this.#n||=new hl(this),this.#n.setInitialText(e,s),!this.annotationElementId))return;const r=this._uiManager.getAndRemoveDataFromAnnotationStorage(this.annotationElementId);r&&this.updateFromAnnotationLayer(r)}get hasEditedComment(){return this.#n?.hasBeenEdited()}get hasDeletedComment(){return this.#n?.isDeleted()}get hasComment(){return!!this.#n&&!this.#n.isEmpty()&&!this.#n.isDeleted()}async editComment(e){this.#n||=new hl(this),this.#n.edit(e)}toggleComment(e,t=void 0){this.hasComment&&this._uiManager.toggleComment(this,e,t)}setSelectedCommentButton(e){this.#n.setSelectedButton(e)}addComment(e){if(this.hasEditedComment){const[,,,r]=e.rect,[o]=this.pageDimensions,[l]=this.pageTranslation,u=l+o+1,h=r-100,p=u+180;e.popup={contents:this.comment.text,deleted:this.comment.deleted,rect:[u,h,p,r]}}}updateFromAnnotationLayer({popup:{contents:e,deleted:t}}){this.#n.data=t?null:e}get parentBoundingClientRect(){return this.parent.boundingClientRect}render(){const e=this.div=document.createElement("div");e.setAttribute("data-editor-rotation",(360-this.rotation)%360),e.className=this.name,e.setAttribute("id",this.id),e.tabIndex=this.#s?-1:0,e.setAttribute("role","application"),this.defaultL10nId&&e.setAttribute("data-l10n-id",this.defaultL10nId),this._isVisible||e.classList.add("hidden"),this.setInForeground(),this.#H();const[t,s]=this.parentDimensions;this.parentRotation%180!==0&&(e.style.maxWidth=`${(100*s/t).toFixed(2)}%`,e.style.maxHeight=`${(100*t/s).toFixed(2)}%`);const[r,o]=this.getInitialTranslation();return this.translate(r,o),ky(this,e,["keydown","pointerdown","dblclick"]),this.isResizable&&this._uiManager._supportsPinchToZoom&&(this.#_||=new Ga({container:e,isPinchingDisabled:()=>!this.isSelected,onPinchStart:this.#q.bind(this),onPinching:this.#T.bind(this),onPinchEnd:this.#S.bind(this),signal:this._uiManager._signal})),this.addStandaloneCommentButton(),this._uiManager._editorUndoBar?.hide(),e}#q(){this.#h={savedX:this.x,savedY:this.y,savedWidth:this.width,savedHeight:this.height},this.#i?.toggle(!1),this.parent.togglePointerEvents(!1)}#T(e,t,s){let o=.7*(s/t)+1-.7;if(o===1)return;const l=this.#D(this.rotation),u=(j,F)=>[l[0]*j+l[2]*F,l[1]*j+l[3]*F],[h,p]=this.parentDimensions,m=this.x,b=this.y,v=this.width,A=this.height,x=ue.MIN_SIZE/h,C=ue.MIN_SIZE/p;o=Math.max(Math.min(o,1/v,1/A),x/v,C/A);const T=ue._round(v*o),w=ue._round(A*o);if(T===v&&w===A)return;this.#u||=[m,b,v,A];const _=u(v/2,A/2),R=ue._round(m+_[0]),O=ue._round(b+_[1]),k=u(T/2,w/2);this.x=R-k[0],this.y=O-k[1],this.width=T,this.height=w,this.setDims(),this.fixAndSetPosition(),this._onResizing()}#S(){this.#i?.toggle(!0),this.parent.togglePointerEvents(!0),this.#B()}pointerdown(e){const{isMac:t}=wt.platform;if(e.button!==0||e.ctrlKey&&t){e.preventDefault();return}if(this.#p=!0,this._isDraggable){this.#F(e);return}this.#P(e)}#P(e){const{isMac:t}=wt.platform;e.ctrlKey&&!t||e.shiftKey||e.metaKey&&t?this.parent.toggleSelected(this):this.parent.setSelected(this)}#F(e){const{isSelected:t}=this;this._uiManager.setUpDragSession();let s=!1;const r=new AbortController,o=this._uiManager.combinedSignal(r),l={capture:!0,passive:!1,signal:o},u=p=>{r.abort(),this.#r=null,this.#p=!1,this._uiManager.endDragSession()||this.#P(p),s&&this._onStopDragging()};t&&(this.#E=e.clientX,this.#x=e.clientY,this.#r=e.pointerId,this.#o=e.pointerType,window.addEventListener("pointermove",p=>{s||(s=!0,this._uiManager.toggleComment(this,!0,!1),this._onStartDragging());const{clientX:m,clientY:b,pointerId:v}=p;if(v!==this.#r){tt(p);return}const[A,x]=this.screenToPageTranslation(m-this.#E,b-this.#x);this.#E=m,this.#x=b,this._uiManager.dragSelectedEditors(A,x)},l),window.addEventListener("touchmove",tt,l),window.addEventListener("pointerdown",p=>{p.pointerType===this.#o&&(this.#_||p.isPrimary)&&u(p),tt(p)},l));const h=p=>{if(!this.#r||this.#r===p.pointerId){u(p);return}tt(p)};window.addEventListener("pointerup",h,{signal:o}),window.addEventListener("blur",h,{signal:o})}_onStartDragging(){}_onStopDragging(){}moveInDOM(){this.#b&&clearTimeout(this.#b),this.#b=setTimeout(()=>{this.#b=null,this.parent?.moveEditorInDOM(this)},0)}_setParentAndPosition(e,t,s){e.changeParent(this),this.x=t,this.y=s,this.fixAndSetPosition(),this._onTranslated()}getRect(e,t,s=this.rotation){const r=this.parentScale,[o,l]=this.pageDimensions,[u,h]=this.pageTranslation,p=e/r,m=t/r,b=this.x*o,v=this.y*l,A=this.width*o,x=this.height*l;switch(s){case 0:return[b+p+u,l-v-m-x+h,b+p+A+u,l-v-m+h];case 90:return[b+m+u,l-v+p+h,b+m+x+u,l-v+p+A+h];case 180:return[b-p-A+u,l-v+m+h,b-p+u,l-v+m+x+h];case 270:return[b-m-x+u,l-v-p-A+h,b-m+u,l-v-p+h];default:throw new Error("Invalid rotation")}}getRectInCurrentCoords(e,t){const[s,r,o,l]=e,u=o-s,h=l-r;switch(this.rotation){case 0:return[s,t-l,u,h];case 90:return[s,t-r,h,u];case 180:return[o,t-r,u,h];case 270:return[o,t-l,h,u];default:throw new Error("Invalid rotation")}}getPDFRect(){return this.getRect(0,0)}getNonHCMColor(){return this.color&&ue._colorManager.convert(this._uiManager.getNonHCMColor(this.color))}onUpdatedColor(){this.#n?.onUpdatedColor()}getData(){const{comment:{text:e,color:t,date:s,opacity:r,deleted:o,richText:l},uid:u,pageIndex:h,creationDate:p,modificationDate:m}=this;return{id:u,pageIndex:h,rect:this.getPDFRect(),richText:l,contentsObj:{str:e},creationDate:p,modificationDate:s||m,popupRef:!o,color:t,opacity:r}}onceAdded(e){}isEmpty(){return!1}enableEditMode(){return this.isInEditMode()?!1:(this.parent.setEditingState(!1),this.#y=!0,!0)}disableEditMode(){return this.isInEditMode()?(this.parent.setEditingState(!0),this.#y=!1,!0):!1}isInEditMode(){return this.#y}shouldGetKeyboardEvents(){return this.#v}needsToBeRebuilt(){return this.div&&!this.isAttachedToDOM}get isOnScreen(){const{top:e,left:t,bottom:s,right:r}=this.getClientDimensions(),{innerHeight:o,innerWidth:l}=window;return t<l&&r>0&&e<o&&s>0}#H(){if(this.#f||!this.div)return;this.#f=new AbortController;const e=this._uiManager.combinedSignal(this.#f);this.div.addEventListener("focusin",this.focusin.bind(this),{signal:e}),this.div.addEventListener("focusout",this.focusout.bind(this),{signal:e})}rebuild(){this.#H()}rotate(e){}resize(){}serializeDeleted(){return{id:this.annotationElementId,deleted:!0,pageIndex:this.pageIndex,popupRef:this._initialData?.popupRef||""}}serialize(e=!1,t=null){return{annotationType:this.mode,pageIndex:this.pageIndex,rect:this.getPDFRect(),rotation:this.rotation,structTreeParentId:this._structTreeParentId,popupRef:this._initialData?.popupRef||""}}static async deserialize(e,t,s){const r=new this.prototype.constructor({parent:t,id:t.getNextId(),uiManager:s,annotationElementId:e.annotationElementId,creationDate:e.creationDate,modificationDate:e.modificationDate});r.rotation=e.rotation,r.#e=e.accessibilityData,r._isCopy=e.isCopy||!1;const[o,l]=r.pageDimensions,[u,h,p,m]=r.getRectInCurrentCoords(e.rect,l);return r.x=u/o,r.y=h/l,r.width=p/o,r.height=m/l,r}get hasBeenModified(){return!!this.annotationElementId&&(this.deleted||this.serialize()!==null)}remove(){if(this.#f?.abort(),this.#f=null,this.isEmpty()||this.commit(),this.parent?this.parent.remove(this):this._uiManager.removeEditor(this),this.#b&&(clearTimeout(this.#b),this.#b=null),this.#I(),this.removeEditToolbar(),this.#A){for(const e of this.#A.values())clearTimeout(e);this.#A=null}this.parent=null,this.#_?.destroy(),this.#_=null}get isResizable(){return!1}makeResizable(){this.isResizable&&(this.#j(),this.#c.classList.remove("hidden"))}get toolbarPosition(){return null}get commentButtonPosition(){return this._uiManager.direction==="ltr"?[1,0]:[0,0]}get commentButtonPositionInPage(){const{commentButtonPosition:[e,t]}=this,[s,r,o,l]=this.getPDFRect();return[ue._round(s+(o-s)*e),ue._round(r+(l-r)*(1-t))]}get commentButtonColor(){return this._uiManager.makeCommentColor(this.getNonHCMColor(),this.opacity)}get commentPopupPosition(){return this.#n.commentPopupPositionInLayer}set commentPopupPosition(e){this.#n.commentPopupPositionInLayer=e}hasDefaultPopupPosition(){return this.#n.hasDefaultPopupPosition()}get commentButtonWidth(){return this.#n.commentButtonWidth}get elementBeforePopup(){return this.div}setCommentButtonStates(e){this.#n.setCommentButtonStates(e)}keydown(e){if(!this.isResizable||e.target!==this.div||e.key!=="Enter")return;this._uiManager.setSelected(this),this.#h={savedX:this.x,savedY:this.y,savedWidth:this.width,savedHeight:this.height};const t=this.#c.children;if(!this.#t){this.#t=Array.from(t);const l=this.#X.bind(this),u=this.#Y.bind(this),h=this._uiManager._signal;for(const p of this.#t){const m=p.getAttribute("data-resizer-name");p.setAttribute("role","spinbutton"),p.addEventListener("keydown",l,{signal:h}),p.addEventListener("blur",u,{signal:h}),p.addEventListener("focus",this.#W.bind(this,m),{signal:h}),p.setAttribute("data-l10n-id",ue._l10nResizer[m])}}const s=this.#t[0];let r=0;for(const l of t){if(l===s)break;r++}const o=(360-this.rotation+this.parentRotation)%360/90*(this.#t.length/4);if(o!==r){if(o<r)for(let u=0;u<r-o;u++)this.#c.append(this.#c.firstChild);else if(o>r)for(let u=0;u<o-r;u++)this.#c.firstChild.before(this.#c.lastChild);let l=0;for(const u of t){const p=this.#t[l++].getAttribute("data-resizer-name");u.setAttribute("data-l10n-id",ue._l10nResizer[p])}}this.#z(0),this.#v=!0,this.#c.firstChild.focus({focusVisible:!0}),e.preventDefault(),e.stopImmediatePropagation()}#X(e){ue._resizerKeyboardManager.exec(this,e)}#Y(e){this.#v&&e.relatedTarget?.parentNode!==this.#c&&this.#I()}#W(e){this.#g=this.#v?e:""}#z(e){if(this.#t)for(const t of this.#t)t.tabIndex=e}_resizeWithKeyboard(e,t){this.#v&&this.#N(this.#g,{deltaX:e,deltaY:t,fromKeyboard:!0})}#I(){this.#v=!1,this.#z(-1),this.#B()}_stopResizingWithKeyboard(){this.#I(),this.div.focus()}select(){if(this.isSelected&&this._editToolbar){this._editToolbar.show();return}if(this.isSelected=!0,this.makeResizable(),this.div?.classList.add("selectedEditor"),!this._editToolbar){this.addEditToolbar().then(()=>{this.div?.classList.contains("selectedEditor")&&this._editToolbar?.show()});return}this._editToolbar?.show(),this.#i?.toggleAltTextBadge(!1)}focus(){this.div&&!this.div.contains(document.activeElement)&&setTimeout(()=>this.div?.focus({preventScroll:!0}),0)}unselect(){this.isSelected&&(this.isSelected=!1,this.#c?.classList.add("hidden"),this.div?.classList.remove("selectedEditor"),this.div?.contains(document.activeElement)&&this._uiManager.currentLayer.div.focus({preventScroll:!0}),this._editToolbar?.hide(),this.#i?.toggleAltTextBadge(!0),this.hasComment&&this._uiManager.toggleComment(this,!1,!1))}updateParams(e,t){}disableEditing(){}enableEditing(){}get canChangeContent(){return!1}enterInEditMode(){this.canChangeContent&&(this.enableEditMode(),this.div.focus())}dblclick(e){e.target.nodeName!=="BUTTON"&&(this.enterInEditMode(),this.parent.updateToolbar({mode:this.constructor._editorType,editId:this.id}))}getElementForAltText(){return this.div}get contentDiv(){return this.div}get isEditing(){return this.#m}set isEditing(e){this.#m=e,this.parent&&(e?(this.parent.setSelected(this),this.parent.setActiveEditor(this)):this.parent.setActiveEditor(null))}static get MIN_SIZE(){return 16}static canCreateNewEmptyEditor(){return!0}get telemetryInitialData(){return{action:"added"}}get telemetryFinalData(){return null}_reportTelemetry(e,t=!1){if(t){this.#A||=new Map;const{action:s}=e;let r=this.#A.get(s);r&&clearTimeout(r),r=setTimeout(()=>{this._reportTelemetry(e),this.#A.delete(s),this.#A.size===0&&(this.#A=null)},ue._telemetryTimeout),this.#A.set(s,r);return}e.type||=this.editorType,this._uiManager._eventBus.dispatch("reporttelemetry",{source:this,details:{type:"editing",data:e}})}show(e=this._isVisible){this.div.classList.toggle("hidden",!e),this._isVisible=e}enable(){this.div&&(this.div.tabIndex=0),this.#s=!1}disable(){this.div&&(this.div.tabIndex=-1),this.#s=!0}updateFakeAnnotationElement(e){if(!this.#d&&!this.deleted){this.#d=e.addFakeAnnotation(this);return}if(this.deleted){this.#d.remove(),this.#d=null;return}(this.hasEditedComment||this._hasBeenMoved||this._hasBeenResized)&&this.#d.updateEdited({rect:this.getPDFRect(),popup:this.comment})}renderAnnotationElement(e){if(this.deleted)return e.hide(),null;let t=e.container.querySelector(".annotationContent");if(!t)t=document.createElement("div"),t.classList.add("annotationContent",this.editorType),e.container.prepend(t);else if(t.nodeName==="CANVAS"){const s=t;t=document.createElement("div"),t.classList.add("annotationContent",this.editorType),s.before(t)}return t}resetAnnotationElement(e){const{firstChild:t}=e.container;t?.nodeName==="DIV"&&t.classList.contains("annotationContent")&&t.remove()}}class zx extends ue{constructor(e){super(e),this.annotationElementId=e.annotationElementId,this.deleted=!0}serialize(){return this.serializeDeleted()}}const _g=3285377520,bn=4294901760,In=65535;class Ly{constructor(e){this.h1=e?e&4294967295:_g,this.h2=e?e&4294967295:_g}update(e){let t,s;if(typeof e=="string"){t=new Uint8Array(e.length*2),s=0;for(let C=0,T=e.length;C<T;C++){const w=e.charCodeAt(C);w<=255?t[s++]=w:(t[s++]=w>>>8,t[s++]=w&255)}}else if(ArrayBuffer.isView(e))t=e.slice(),s=t.byteLength;else throw new Error("Invalid data format, must be a string or TypedArray.");const r=s>>2,o=s-r*4,l=new Uint32Array(t.buffer,0,r);let u=0,h=0,p=this.h1,m=this.h2;const b=3432918353,v=461845907,A=b&In,x=v&In;for(let C=0;C<r;C++)C&1?(u=l[C],u=u*b&bn|u*A&In,u=u<<15|u>>>17,u=u*v&bn|u*x&In,p^=u,p=p<<13|p>>>19,p=p*5+3864292196):(h=l[C],h=h*b&bn|h*A&In,h=h<<15|h>>>17,h=h*v&bn|h*x&In,m^=h,m=m<<13|m>>>19,m=m*5+3864292196);switch(u=0,o){case 3:u^=t[r*4+2]<<16;case 2:u^=t[r*4+1]<<8;case 1:u^=t[r*4],u=u*b&bn|u*A&In,u=u<<15|u>>>17,u=u*v&bn|u*x&In,r&1?p^=u:m^=u}this.h1=p,this.h2=m}hexdigest(){let e=this.h1,t=this.h2;return e^=t>>>1,e=e*3981806797&bn|e*36045&In,t=t*4283543511&bn|((t<<16|e>>>16)*2950163797&bn)>>>16,e^=t>>>1,e=e*444984403&bn|e*60499&In,t=t*3301882366&bn|((t<<16|e>>>16)*3120437893&bn)>>>16,e^=t>>>1,(e>>>0).toString(16).padStart(8,"0")+(t>>>0).toString(16).padStart(8,"0")}}const Ed=Object.freeze({map:null,hash:"",transfer:void 0});class Qd{#e=!1;#t=null;#i=null;#n=new Map;constructor(){this.onSetModified=null,this.onResetModified=null,this.onAnnotationEditor=null}getValue(e,t){const s=this.#n.get(e);return s===void 0?t:Object.assign(t,s)}getRawValue(e){return this.#n.get(e)}remove(e){const t=this.#n.get(e);if(t!==void 0&&(t instanceof ue&&this.#i.delete(t.annotationElementId),this.#n.delete(e),this.#n.size===0&&this.resetModified(),typeof this.onAnnotationEditor=="function")){for(const s of this.#n.values())if(s instanceof ue)return;this.onAnnotationEditor(null)}}setValue(e,t){const s=this.#n.get(e);let r=!1;if(s!==void 0)for(const[o,l]of Object.entries(t))s[o]!==l&&(r=!0,s[o]=l);else r=!0,this.#n.set(e,t);r&&this.#a(),t instanceof ue&&((this.#i||=new Map).set(t.annotationElementId,t),typeof this.onAnnotationEditor=="function"&&this.onAnnotationEditor(t.constructor._type))}has(e){return this.#n.has(e)}get size(){return this.#n.size}#a(){this.#e||(this.#e=!0,typeof this.onSetModified=="function"&&this.onSetModified())}resetModified(){this.#e&&(this.#e=!1,typeof this.onResetModified=="function"&&this.onResetModified())}get print(){return new Py(this)}get serializable(){if(this.#n.size===0)return Ed;const e=new Map,t=new Ly,s=[],r=Object.create(null);let o=!1;for(const[l,u]of this.#n){const h=u instanceof ue?u.serialize(!1,r):u;h&&(e.set(l,h),t.update(`${l}:${JSON.stringify(h)}`),o||=!!h.bitmap)}if(o)for(const l of e.values())l.bitmap&&s.push(l.bitmap);return e.size>0?{map:e,hash:t.hexdigest(),transfer:s}:Ed}get editorStats(){let e=null;const t=new Map;let s=0,r=0;for(const o of this.#n.values()){if(!(o instanceof ue)){o.popup&&(o.popup.deleted?r+=1:s+=1);continue}o.isCommentDeleted?r+=1:o.hasEditedComment&&(s+=1);const l=o.telemetryFinalData;if(!l)continue;const{type:u}=l;t.has(u)||t.set(u,Object.getPrototypeOf(o).constructor),e||=Object.create(null);const h=e[u]||=new Map;for(const[p,m]of Object.entries(l)){if(p==="type")continue;let b=h.get(p);b||(b=new Map,h.set(p,b));const v=b.get(m)??0;b.set(m,v+1)}}if((r>0||s>0)&&(e||=Object.create(null),e.comments={deleted:r,edited:s}),!e)return null;for(const[o,l]of t)e[o]=l.computeTelemetryFinalData(e[o]);return e}resetModifiedIds(){this.#t=null}updateEditor(e,t){const s=this.#i?.get(e);return s?(s.updateFromAnnotationLayer(t),!0):!1}getEditor(e){return this.#i?.get(e)||null}get modifiedIds(){if(this.#t)return this.#t;const e=[];if(this.#i)for(const t of this.#i.values())t.serialize()&&e.push(t.annotationElementId);return this.#t={ids:new Set(e),hash:e.join(",")}}[Symbol.iterator](){return this.#n.entries()}}class Py extends Qd{#e;constructor(e){super();const{map:t,hash:s,transfer:r}=e.serializable,o=structuredClone(t,r?{transfer:r}:null);this.#e={map:o,hash:s,transfer:r}}get print(){qe("Should not call PrintAnnotationStorage.print")}get serializable(){return this.#e}get modifiedIds(){return Se(this,"modifiedIds",{ids:new Set,hash:""})}}class Gx{#e=new Set;constructor({ownerDocument:e=globalThis.document,styleElement:t=null}){this._document=e,this.nativeFontFaces=new Set,this.styleElement=null,this.loadingRequests=[],this.loadTestFontId=0}addNativeFontFace(e){this.nativeFontFaces.add(e),this._document.fonts.add(e)}removeNativeFontFace(e){this.nativeFontFaces.delete(e),this._document.fonts.delete(e)}insertRule(e){this.styleElement||(this.styleElement=this._document.createElement("style"),this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement));const t=this.styleElement.sheet;t.insertRule(e,t.cssRules.length)}clear(){for(const e of this.nativeFontFaces)this._document.fonts.delete(e);this.nativeFontFaces.clear(),this.#e.clear(),this.styleElement&&(this.styleElement.remove(),this.styleElement=null)}async loadSystemFont({systemFontInfo:e,disableFontFace:t,_inspectFont:s}){if(!(!e||this.#e.has(e.loadedName))){if(Me(!t,"loadSystemFont shouldn't be called when `disableFontFace` is set."),this.isFontLoadingAPISupported){const{loadedName:r,src:o,style:l}=e,u=new FontFace(r,o,l);this.addNativeFontFace(u);try{await u.load(),this.#e.add(r),s?.(e)}catch{ve(`Cannot load system font: ${e.baseFontName}, installing it could help to improve PDF rendering.`),this.removeNativeFontFace(u)}return}qe("Not implemented: loadSystemFont without the Font Loading API.")}}async bind(e){if(e.attached||e.missingFile&&!e.systemFontInfo)return;if(e.attached=!0,e.systemFontInfo){await this.loadSystemFont(e);return}if(this.isFontLoadingAPISupported){const s=e.createNativeFontFace();if(s){this.addNativeFontFace(s);try{await s.loaded}catch(r){throw ve(`Failed to load font '${s.family}': '${r}'.`),e.disableFontFace=!0,r}}return}const t=e.createFontFaceRule();if(t){if(this.insertRule(t),this.isSyncFontLoadingSupported)return;await new Promise(s=>{const r=this._queueLoadingCallback(s);this._prepareFontLoadEvent(e,r)})}}get isFontLoadingAPISupported(){const e=!!this._document?.fonts;return Se(this,"isFontLoadingAPISupported",e)}get isSyncFontLoadingSupported(){return Se(this,"isSyncFontLoadingSupported",Bt||wt.platform.isFirefox)}_queueLoadingCallback(e){function t(){for(Me(!r.done,"completeRequest() cannot be called twice."),r.done=!0;s.length>0&&s[0].done;){const o=s.shift();setTimeout(o.callback,0)}}const{loadingRequests:s}=this,r={done:!1,complete:t,callback:e};return s.push(r),r}get _loadTestFont(){const e=atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");return Se(this,"_loadTestFont",e)}_prepareFontLoadEvent(e,t){function s(O,k){return O.charCodeAt(k)<<24|O.charCodeAt(k+1)<<16|O.charCodeAt(k+2)<<8|O.charCodeAt(k+3)&255}function r(O,k,j,F){const q=O.substring(0,k),V=O.substring(k+j);return q+F+V}let o,l;const u=this._document.createElement("canvas");u.width=1,u.height=1;const h=u.getContext("2d");let p=0;function m(O,k){if(++p>30){ve("Load test font never loaded."),k();return}if(h.font="30px "+O,h.fillText(".",0,20),h.getImageData(0,0,1,1).data[3]>0){k();return}setTimeout(m.bind(null,O,k))}const b=`lt${Date.now()}${this.loadTestFontId++}`;let v=this._loadTestFont;v=r(v,976,b.length,b);const x=16,C=1482184792;let T=s(v,x);for(o=0,l=b.length-3;o<l;o+=4)T=T-C+s(b,o)|0;o<b.length&&(T=T-C+s(b+"XXX",o)|0),v=r(v,x,4,Mx(T));const w=`url(data:font/opentype;base64,${btoa(v)});`,_=`@font-face {font-family:"${b}";src:${w}}`;this.insertRule(_);const R=this._document.createElement("div");R.style.visibility="hidden",R.style.width=R.style.height="10px",R.style.position="absolute",R.style.top=R.style.left="0px";for(const O of[e.loadedName,b]){const k=this._document.createElement("span");k.textContent="Hi",k.style.fontFamily=O,R.append(k)}this._document.body.append(R),m(b,()=>{R.remove(),t.complete()})}}class qx{#e;constructor(e,t=null,s,r){this.compiledGlyphs=Object.create(null),this.#e=e,this._inspectFont=t,s&&Object.assign(this,s),r&&(this.charProcOperatorList=r)}createNativeFontFace(){if(!this.data||this.disableFontFace)return null;let e;if(!this.cssFontInfo)e=new FontFace(this.loadedName,this.data,{});else{const t={weight:this.cssFontInfo.fontWeight};this.cssFontInfo.italicAngle&&(t.style=`oblique ${this.cssFontInfo.italicAngle}deg`),e=new FontFace(this.cssFontInfo.fontFamily,this.data,t)}return this._inspectFont?.(this),e}createFontFaceRule(){if(!this.data||this.disableFontFace)return null;const e=`url(data:${this.mimetype};base64,${wy(this.data)});`;let t;if(!this.cssFontInfo)t=`@font-face {font-family:"${this.loadedName}";src:${e}}`;else{let s=`font-weight: ${this.cssFontInfo.fontWeight};`;this.cssFontInfo.italicAngle&&(s+=`font-style: oblique ${this.cssFontInfo.italicAngle}deg;`),t=`@font-face {font-family:"${this.cssFontInfo.fontFamily}";${s}src:${e}}`}return this._inspectFont?.(this,e),t}getPathGenerator(e,t){if(this.compiledGlyphs[t]!==void 0)return this.compiledGlyphs[t];const s=this.loadedName+"_path_"+t;let r;try{r=e.get(s)}catch(l){ve(`getPathGenerator - ignoring character: "${l}".`)}const o=new Path2D(r||"");return this.fontExtraProperties||e.delete(s),this.compiledGlyphs[t]=o}get black(){return this.#e.black}get bold(){return this.#e.bold}get disableFontFace(){return this.#e.disableFontFace??!1}get fontExtraProperties(){return this.#e.fontExtraProperties??!1}get isInvalidPDFjsFont(){return this.#e.isInvalidPDFjsFont}get isType3Font(){return this.#e.isType3Font}get italic(){return this.#e.italic}get missingFile(){return this.#e.missingFile}get remeasure(){return this.#e.remeasure}get vertical(){return this.#e.vertical}get ascent(){return this.#e.ascent}get defaultWidth(){return this.#e.defaultWidth}get descent(){return this.#e.descent}get bbox(){return this.#e.bbox}get fontMatrix(){return this.#e.fontMatrix}get fallbackName(){return this.#e.fallbackName}get loadedName(){return this.#e.loadedName}get mimetype(){return this.#e.mimetype}get name(){return this.#e.name}get data(){return this.#e.data}clearData(){this.#e.clearData()}get cssFontInfo(){return this.#e.cssFontInfo}get systemFontInfo(){return this.#e.systemFontInfo}get defaultVMetrics(){return this.#e.defaultVMetrics}}function Vx(d){if(d instanceof URL)return d.href;if(typeof d=="string"){if(Bt)return d;const e=URL.parse(d,window.location);if(e)return e.href}throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.")}function Yx(d){if(Bt&&typeof Buffer<"u"&&d instanceof Buffer)throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");if(d instanceof Uint8Array&&d.byteLength===d.buffer.byteLength)return d;if(typeof d=="string")return Fa(d);if(d instanceof ArrayBuffer||ArrayBuffer.isView(d)||typeof d=="object"&&!isNaN(d?.length))return new Uint8Array(d);throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.")}function fl(d){if(typeof d!="string")return null;if(d.endsWith("/"))return d;throw new Error(`Invalid factory url: "${d}" must include trailing slash.`)}const Td=d=>typeof d=="object"&&Number.isInteger(d?.num)&&d.num>=0&&Number.isInteger(d?.gen)&&d.gen>=0,Xx=d=>typeof d=="object"&&typeof d?.name=="string",Oy=Ox.bind(null,Td,Xx);class Wx{#e=new Map;#t=Promise.resolve();postMessage(e,t){const s={data:structuredClone(e,t?{transfer:t}:null)};this.#t.then(()=>{for(const[r]of this.#e)r.call(this,s)})}addEventListener(e,t,s=null){let r=null;if(s?.signal instanceof AbortSignal){const{signal:o}=s;if(o.aborted){ve("LoopbackPort - cannot use an `aborted` signal.");return}const l=()=>this.removeEventListener(e,t);r=()=>o.removeEventListener("abort",l),o.addEventListener("abort",l)}this.#e.set(t,r)}removeEventListener(e,t){this.#e.get(t)?.(),this.#e.delete(t)}terminate(){for(const[,e]of this.#e)e?.();this.#e.clear()}}const pl={DATA:1,ERROR:2},mt={CANCEL:1,CANCEL_COMPLETE:2,CLOSE:3,ENQUEUE:4,ERROR:5,PULL:6,PULL_COMPLETE:7,START_COMPLETE:8};function Rg(){}function Wt(d){if(d instanceof li||d instanceof Tl||d instanceof Ag||d instanceof Ma||d instanceof fd)return d;switch(d instanceof Error||typeof d=="object"&&d!==null||qe('wrapReason: Expected "reason" to be a (possibly cloned) Error.'),d.name){case"AbortException":return new li(d.message);case"InvalidPDFException":return new Tl(d.message);case"PasswordException":return new Ag(d.message,d.code);case"ResponseException":return new Ma(d.message,d.status,d.missing);case"UnknownErrorException":return new fd(d.message,d.details)}return new fd(d.message,d.toString())}class wa{#e=new AbortController;constructor(e,t,s){this.sourceName=e,this.targetName=t,this.comObj=s,this.callbackId=1,this.streamId=1,this.streamSinks=Object.create(null),this.streamControllers=Object.create(null),this.callbackCapabilities=Object.create(null),this.actionHandler=Object.create(null),s.addEventListener("message",this.#t.bind(this),{signal:this.#e.signal})}#t({data:e}){if(e.targetName!==this.sourceName)return;if(e.stream){this.#n(e);return}if(e.callback){const s=e.callbackId,r=this.callbackCapabilities[s];if(!r)throw new Error(`Cannot resolve callback ${s}`);if(delete this.callbackCapabilities[s],e.callback===pl.DATA)r.resolve(e.data);else if(e.callback===pl.ERROR)r.reject(Wt(e.reason));else throw new Error("Unexpected callback case");return}const t=this.actionHandler[e.action];if(!t)throw new Error(`Unknown action from worker: ${e.action}`);if(e.callbackId){const s=this.sourceName,r=e.sourceName,o=this.comObj;Promise.try(t,e.data).then(function(l){o.postMessage({sourceName:s,targetName:r,callback:pl.DATA,callbackId:e.callbackId,data:l})},function(l){o.postMessage({sourceName:s,targetName:r,callback:pl.ERROR,callbackId:e.callbackId,reason:Wt(l)})});return}if(e.streamId){this.#i(e);return}t(e.data)}on(e,t){const s=this.actionHandler;if(s[e])throw new Error(`There is already an actionName called "${e}"`);s[e]=t}send(e,t,s){this.comObj.postMessage({sourceName:this.sourceName,targetName:this.targetName,action:e,data:t},s)}sendWithPromise(e,t,s){const r=this.callbackId++,o=Promise.withResolvers();this.callbackCapabilities[r]=o;try{this.comObj.postMessage({sourceName:this.sourceName,targetName:this.targetName,action:e,callbackId:r,data:t},s)}catch(l){o.reject(l)}return o.promise}sendWithStream(e,t,s,r){const o=this.streamId++,l=this.sourceName,u=this.targetName,h=this.comObj;return new ReadableStream({start:p=>{const m=Promise.withResolvers();return this.streamControllers[o]={controller:p,startCall:m,pullCall:null,cancelCall:null,isClosed:!1},h.postMessage({sourceName:l,targetName:u,action:e,streamId:o,data:t,desiredSize:p.desiredSize},r),m.promise},pull:p=>{const m=Promise.withResolvers();return this.streamControllers[o].pullCall=m,h.postMessage({sourceName:l,targetName:u,stream:mt.PULL,streamId:o,desiredSize:p.desiredSize}),m.promise},cancel:p=>{Me(p instanceof Error,"cancel must have a valid reason");const m=Promise.withResolvers();return this.streamControllers[o].cancelCall=m,this.streamControllers[o].isClosed=!0,h.postMessage({sourceName:l,targetName:u,stream:mt.CANCEL,streamId:o,reason:Wt(p)}),m.promise}},s)}#i(e){const t=e.streamId,s=this.sourceName,r=e.sourceName,o=this.comObj,l=this,u=this.actionHandler[e.action],h={enqueue(p,m=1,b){if(this.isCancelled)return;const v=this.desiredSize;this.desiredSize-=m,v>0&&this.desiredSize<=0&&(this.sinkCapability=Promise.withResolvers(),this.ready=this.sinkCapability.promise),o.postMessage({sourceName:s,targetName:r,stream:mt.ENQUEUE,streamId:t,chunk:p},b)},close(){this.isCancelled||(this.isCancelled=!0,o.postMessage({sourceName:s,targetName:r,stream:mt.CLOSE,streamId:t}),delete l.streamSinks[t])},error(p){Me(p instanceof Error,"error must have a valid reason"),!this.isCancelled&&(this.isCancelled=!0,o.postMessage({sourceName:s,targetName:r,stream:mt.ERROR,streamId:t,reason:Wt(p)}))},sinkCapability:Promise.withResolvers(),onPull:null,onCancel:null,isCancelled:!1,desiredSize:e.desiredSize,ready:null};h.sinkCapability.resolve(),h.ready=h.sinkCapability.promise,this.streamSinks[t]=h,Promise.try(u,e.data,h).then(function(){o.postMessage({sourceName:s,targetName:r,stream:mt.START_COMPLETE,streamId:t,success:!0})},function(p){o.postMessage({sourceName:s,targetName:r,stream:mt.START_COMPLETE,streamId:t,reason:Wt(p)})})}#n(e){const t=e.streamId,s=this.sourceName,r=e.sourceName,o=this.comObj,l=this.streamControllers[t],u=this.streamSinks[t];switch(e.stream){case mt.START_COMPLETE:e.success?l.startCall.resolve():l.startCall.reject(Wt(e.reason));break;case mt.PULL_COMPLETE:e.success?l.pullCall.resolve():l.pullCall.reject(Wt(e.reason));break;case mt.PULL:if(!u){o.postMessage({sourceName:s,targetName:r,stream:mt.PULL_COMPLETE,streamId:t,success:!0});break}u.desiredSize<=0&&e.desiredSize>0&&u.sinkCapability.resolve(),u.desiredSize=e.desiredSize,Promise.try(u.onPull||Rg).then(function(){o.postMessage({sourceName:s,targetName:r,stream:mt.PULL_COMPLETE,streamId:t,success:!0})},function(p){o.postMessage({sourceName:s,targetName:r,stream:mt.PULL_COMPLETE,streamId:t,reason:Wt(p)})});break;case mt.ENQUEUE:if(Me(l,"enqueue should have stream controller"),l.isClosed)break;l.controller.enqueue(e.chunk);break;case mt.CLOSE:if(Me(l,"close should have stream controller"),l.isClosed)break;l.isClosed=!0,l.controller.close(),this.#a(l,t);break;case mt.ERROR:Me(l,"error should have stream controller"),l.controller.error(Wt(e.reason)),this.#a(l,t);break;case mt.CANCEL_COMPLETE:e.success?l.cancelCall.resolve():l.cancelCall.reject(Wt(e.reason)),this.#a(l,t);break;case mt.CANCEL:if(!u)break;const h=Wt(e.reason);Promise.try(u.onCancel||Rg,h).then(function(){o.postMessage({sourceName:s,targetName:r,stream:mt.CANCEL_COMPLETE,streamId:t,success:!0})},function(p){o.postMessage({sourceName:s,targetName:r,stream:mt.CANCEL_COMPLETE,streamId:t,reason:Wt(p)})}),u.sinkCapability.reject(h),u.isCancelled=!0,delete this.streamSinks[t];break;default:throw new Error("Unexpected stream case")}}async#a(e,t){await Promise.allSettled([e.startCall?.promise,e.pullCall?.promise,e.cancelCall?.promise]),delete this.streamControllers[t]}destroy(){this.#e?.abort(),this.#e=null}}class Ny{#e=!1;constructor({enableHWA:e=!1}){this.#e=e}create(e,t){if(e<=0||t<=0)throw new Error("Invalid canvas size");const s=this._createCanvas(e,t);return{canvas:s,context:s.getContext("2d",{willReadFrequently:!this.#e})}}reset(e,t,s){if(!e.canvas)throw new Error("Canvas is not specified");if(t<=0||s<=0)throw new Error("Invalid canvas size");e.canvas.width=t,e.canvas.height=s}destroy(e){if(!e.canvas)throw new Error("Canvas is not specified");e.canvas.width=0,e.canvas.height=0,e.canvas=null,e.context=null}_createCanvas(e,t){qe("Abstract method `_createCanvas` called.")}}class $x extends Ny{constructor({ownerDocument:e=globalThis.document,enableHWA:t=!1}){super({enableHWA:t}),this._document=e}_createCanvas(e,t){const s=this._document.createElement("canvas");return s.width=e,s.height=t,s}}class Iy{constructor({baseUrl:e=null,isCompressed:t=!0}){this.baseUrl=e,this.isCompressed=t}async fetch({name:e}){if(!this.baseUrl)throw new Error("Ensure that the `cMapUrl` and `cMapPacked` API parameters are provided.");if(!e)throw new Error("CMap name must be specified.");const t=this.baseUrl+e+(this.isCompressed?".bcmap":"");return this._fetch(t).then(s=>({cMapData:s,isCompressed:this.isCompressed})).catch(s=>{throw new Error(`Unable to load ${this.isCompressed?"binary ":""}CMap at: ${t}`)})}async _fetch(e){qe("Abstract method `_fetch` called.")}}class Dg extends Iy{async _fetch(e){const t=await yr(e,this.isCompressed?"arraybuffer":"text");return t instanceof ArrayBuffer?new Uint8Array(t):Fa(t)}}class jy{addFilter(e){return"none"}addHCMFilter(e,t){return"none"}addAlphaFilter(e){return"none"}addLuminosityFilter(e){return"none"}addHighlightHCMFilter(e,t,s,r,o){return"none"}destroy(e=!1){}}class Kx extends jy{#e;#t;#i;#n;#a;#s;#r=0;constructor({docId:e,ownerDocument:t=globalThis.document}){super(),this.#n=e,this.#a=t}get#o(){return this.#t||=new Map}get#c(){return this.#s||=new Map}get#l(){if(!this.#i){const e=this.#a.createElement("div"),{style:t}=e;t.visibility="hidden",t.contain="strict",t.width=t.height=0,t.position="absolute",t.top=t.left=0,t.zIndex=-1;const s=this.#a.createElementNS(si,"svg");s.setAttribute("width",0),s.setAttribute("height",0),this.#i=this.#a.createElementNS(si,"defs"),e.append(s),s.append(this.#i),this.#a.body.append(e)}return this.#i}#h(e){if(e.length===1){const h=e[0],p=new Array(256);for(let b=0;b<256;b++)p[b]=h[b]/255;const m=p.join(",");return[m,m,m]}const[t,s,r]=e,o=new Array(256),l=new Array(256),u=new Array(256);for(let h=0;h<256;h++)o[h]=t[h]/255,l[h]=s[h]/255,u[h]=r[h]/255;return[o.join(","),l.join(","),u.join(",")]}#d(e){if(this.#e===void 0){this.#e="";const t=this.#a.URL;t!==this.#a.baseURI&&(Ha(t)?ve('#createUrl: ignore "data:"-URL for performance reasons.'):this.#e=qd(t,""))}return`url(${this.#e}#${e})`}addFilter(e){if(!e)return"none";let t=this.#o.get(e);if(t)return t;const[s,r,o]=this.#h(e),l=e.length===1?s:`${s}${r}${o}`;if(t=this.#o.get(l),t)return this.#o.set(e,t),t;const u=`g_${this.#n}_transfer_map_${this.#r++}`,h=this.#d(u);this.#o.set(e,h),this.#o.set(l,h);const p=this.#p(u);return this.#m(s,r,o,p),h}addHCMFilter(e,t){const s=`${e}-${t}`,r="base";let o=this.#c.get(r);if(o?.key===s||(o?(o.filter?.remove(),o.key=s,o.url="none",o.filter=null):(o={key:s,url:"none",filter:null},this.#c.set(r,o)),!e||!t))return o.url;const l=this.#v(e);e=ie.makeHexColor(...l);const u=this.#v(t);if(t=ie.makeHexColor(...u),this.#l.style.color="",e==="#000000"&&t==="#ffffff"||e===t)return o.url;const h=new Array(256);for(let A=0;A<=255;A++){const x=A/255;h[A]=x<=.03928?x/12.92:((x+.055)/1.055)**2.4}const p=h.join(","),m=`g_${this.#n}_hcm_filter`,b=o.filter=this.#p(m);this.#m(p,p,p,b),this.#g(b);const v=(A,x)=>{const C=l[A]/255,T=u[A]/255,w=new Array(x+1);for(let _=0;_<=x;_++)w[_]=C+_/x*(T-C);return w.join(",")};return this.#m(v(0,5),v(1,5),v(2,5),b),o.url=this.#d(m),o.url}addAlphaFilter(e){let t=this.#o.get(e);if(t)return t;const[s]=this.#h([e]),r=`alpha_${s}`;if(t=this.#o.get(r),t)return this.#o.set(e,t),t;const o=`g_${this.#n}_alpha_map_${this.#r++}`,l=this.#d(o);this.#o.set(e,l),this.#o.set(r,l);const u=this.#p(o);return this.#y(s,u),l}addLuminosityFilter(e){let t=this.#o.get(e||"luminosity");if(t)return t;let s,r;if(e?([s]=this.#h([e]),r=`luminosity_${s}`):r="luminosity",t=this.#o.get(r),t)return this.#o.set(e,t),t;const o=`g_${this.#n}_luminosity_map_${this.#r++}`,l=this.#d(o);this.#o.set(e,l),this.#o.set(r,l);const u=this.#p(o);return this.#f(u),e&&this.#y(s,u),l}addHighlightHCMFilter(e,t,s,r,o){const l=`${t}-${s}-${r}-${o}`;let u=this.#c.get(e);if(u?.key===l||(u?(u.filter?.remove(),u.key=l,u.url="none",u.filter=null):(u={key:l,url:"none",filter:null},this.#c.set(e,u)),!t||!s))return u.url;const[h,p]=[t,s].map(this.#v.bind(this));let m=Math.round(.2126*h[0]+.7152*h[1]+.0722*h[2]),b=Math.round(.2126*p[0]+.7152*p[1]+.0722*p[2]),[v,A]=[r,o].map(this.#v.bind(this));b<m&&([m,b,v,A]=[b,m,A,v]),this.#l.style.color="";const x=(w,_,R)=>{const O=new Array(256),k=(b-m)/R,j=w/255,F=(_-w)/(255*R);let q=0;for(let V=0;V<=R;V++){const Q=Math.round(m+V*k),J=j+V*F;for(let le=q;le<=Q;le++)O[le]=J;q=Q+1}for(let V=q;V<256;V++)O[V]=O[q-1];return O.join(",")},C=`g_${this.#n}_hcm_${e}_filter`,T=u.filter=this.#p(C);return this.#g(T),this.#m(x(v[0],A[0],5),x(v[1],A[1],5),x(v[2],A[2],5),T),u.url=this.#d(C),u.url}destroy(e=!1){e&&this.#s?.size||(this.#i?.parentNode.parentNode.remove(),this.#i=null,this.#t?.clear(),this.#t=null,this.#s?.clear(),this.#s=null,this.#r=0)}#f(e){const t=this.#a.createElementNS(si,"feColorMatrix");t.setAttribute("type","matrix"),t.setAttribute("values","0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0"),e.append(t)}#g(e){const t=this.#a.createElementNS(si,"feColorMatrix");t.setAttribute("type","matrix"),t.setAttribute("values","0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"),e.append(t)}#p(e){const t=this.#a.createElementNS(si,"filter");return t.setAttribute("color-interpolation-filters","sRGB"),t.setAttribute("id",e),this.#l.append(t),t}#u(e,t,s){const r=this.#a.createElementNS(si,t);r.setAttribute("type","discrete"),r.setAttribute("tableValues",s),e.append(r)}#m(e,t,s,r){const o=this.#a.createElementNS(si,"feComponentTransfer");r.append(o),this.#u(o,"feFuncR",e),this.#u(o,"feFuncG",t),this.#u(o,"feFuncB",s)}#y(e,t){const s=this.#a.createElementNS(si,"feComponentTransfer");t.append(s),this.#u(s,"feFuncA",e)}#v(e){return this.#l.style.color=e,br(getComputedStyle(this.#l).getPropertyValue("color"))}}class By{constructor({baseUrl:e=null}){this.baseUrl=e}async fetch({filename:e}){if(!this.baseUrl)throw new Error("Ensure that the `standardFontDataUrl` API parameter is provided.");if(!e)throw new Error("Font filename must be specified.");const t=`${this.baseUrl}${e}`;return this._fetch(t).catch(s=>{throw new Error(`Unable to load font data at: ${t}`)})}async _fetch(e){qe("Abstract method `_fetch` called.")}}class Mg extends By{async _fetch(e){const t=await yr(e,"arraybuffer");return new Uint8Array(t)}}class Fy{constructor({baseUrl:e=null}){this.baseUrl=e}async fetch({filename:e}){if(!this.baseUrl)throw new Error("Ensure that the `wasmUrl` API parameter is provided.");if(!e)throw new Error("Wasm filename must be specified.");const t=`${this.baseUrl}${e}`;return this._fetch(t).catch(s=>{throw new Error(`Unable to load wasm data at: ${t}`)})}async _fetch(e){qe("Abstract method `_fetch` called.")}}class kg extends Fy{async _fetch(e){const t=await yr(e,"arraybuffer");return new Uint8Array(t)}}Bt&&ve("Please use the `legacy` build in Node.js environments.");async function Jd(d){const t=await process.getBuiltinModule("fs").promises.readFile(d);return new Uint8Array(t)}class Qx extends jy{}class Jx extends Ny{_createCanvas(e,t){return process.getBuiltinModule("module").createRequire(import.meta.url)("@napi-rs/canvas").createCanvas(e,t)}}class Zx extends Iy{async _fetch(e){return Jd(e)}}class ew extends By{async _fetch(e){return Jd(e)}}class tw extends Fy{async _fetch(e){return Jd(e)}}const er="__forcedDependency",{floor:Lg,ceil:Pg}=Math;function ml(d,e,t,s,r,o){d[e*4+0]=Math.min(d[e*4+0],t),d[e*4+1]=Math.min(d[e*4+1],s),d[e*4+2]=Math.max(d[e*4+2],r),d[e*4+3]=Math.max(d[e*4+3],o)}const _d=new Uint32Array(new Uint8Array([255,255,0,0]).buffer)[0];class nw{#e;#t;constructor(e,t){this.#e=e,this.#t=t}get length(){return this.#e.length}isEmpty(e){return this.#e[e]===_d}minX(e){return this.#t[e*4+0]/256}minY(e){return this.#t[e*4+1]/256}maxX(e){return(this.#t[e*4+2]+1)/256}maxY(e){return(this.#t[e*4+3]+1)/256}}const gl=(d,e)=>{if(!d)return;let t=d.get(e);return t||(t={dependencies:new Set,isRenderingOperation:!1},d.set(e,t)),t};class iw{#e={__proto__:null};#t={__proto__:null,transform:[],moveText:[],sameLineText:[],[er]:[]};#i=new Map;#n=[];#a=[];#s=[[1,0,0,1,0,0]];#r=[-1/0,-1/0,1/0,1/0];#o=new Float64Array([1/0,1/0,-1/0,-1/0]);#c=-1;#l=new Set;#h=new Map;#d=new Map;#f;#g;#p;#u;#m;constructor(e,t,s=!1){this.#f=e.width,this.#g=e.height,this.#y(t),s&&(this.#m=new Map)}growOperationsCount(e){e>=this.#u.length&&this.#y(e,this.#u)}#y(e,t){const s=new ArrayBuffer(e*4);this.#p=new Uint8ClampedArray(s),this.#u=new Uint32Array(s),t&&t.length>0?(this.#u.set(t),this.#u.fill(_d,t.length)):this.#u.fill(_d)}save(e){return this.#e={__proto__:this.#e},this.#t={__proto__:this.#t,transform:{__proto__:this.#t.transform},moveText:{__proto__:this.#t.moveText},sameLineText:{__proto__:this.#t.sameLineText},[er]:{__proto__:this.#t[er]}},this.#r={__proto__:this.#r},this.#n.push(e),this}restore(e){const t=Object.getPrototypeOf(this.#e);if(t===null)return this;this.#e=t,this.#t=Object.getPrototypeOf(this.#t),this.#r=Object.getPrototypeOf(this.#r);const s=this.#n.pop();return s!==void 0&&(gl(this.#m,e)?.dependencies.add(s),this.#u[e]=this.#u[s]),this}recordOpenMarker(e){return this.#n.push(e),this}getOpenMarker(){return this.#n.length===0?null:this.#n.at(-1)}recordCloseMarker(e){const t=this.#n.pop();return t!==void 0&&(gl(this.#m,e)?.dependencies.add(t),this.#u[e]=this.#u[t]),this}beginMarkedContent(e){return this.#a.push(e),this}endMarkedContent(e){const t=this.#a.pop();return t!==void 0&&(gl(this.#m,e)?.dependencies.add(t),this.#u[e]=this.#u[t]),this}pushBaseTransform(e){return this.#s.push(ie.multiplyByDOMMatrix(this.#s.at(-1),e.getTransform())),this}popBaseTransform(){return this.#s.length>1&&this.#s.pop(),this}recordSimpleData(e,t){return this.#e[e]=t,this}recordIncrementalData(e,t){return this.#t[e].push(t),this}resetIncrementalData(e,t){return this.#t[e].length=0,this}recordNamedData(e,t){return this.#i.set(e,t),this}recordSimpleDataFromNamed(e,t,s){this.#e[e]=this.#i.get(t)??s}recordFutureForcedDependency(e,t){return this.recordIncrementalData(er,t),this}inheritSimpleDataAsFutureForcedDependencies(e){for(const t of e)t in this.#e&&this.recordFutureForcedDependency(t,this.#e[t]);return this}inheritPendingDependenciesAsFutureForcedDependencies(){for(const e of this.#l)this.recordFutureForcedDependency(er,e);return this}resetBBox(e){return this.#c!==e&&(this.#c=e,this.#o[0]=1/0,this.#o[1]=1/0,this.#o[2]=-1/0,this.#o[3]=-1/0),this}recordClipBox(e,t,s,r,o,l){const u=ie.multiplyByDOMMatrix(this.#s.at(-1),t.getTransform()),h=[1/0,1/0,-1/0,-1/0];ie.axialAlignedBoundingBox([s,o,r,l],u,h);const p=ie.intersect(this.#r,h);return p?(this.#r[0]=p[0],this.#r[1]=p[1],this.#r[2]=p[2],this.#r[3]=p[3]):(this.#r[0]=this.#r[1]=1/0,this.#r[2]=this.#r[3]=-1/0),this}recordBBox(e,t,s,r,o,l){const u=this.#r;if(u[0]===1/0)return this;const h=ie.multiplyByDOMMatrix(this.#s.at(-1),t.getTransform());if(u[0]===-1/0)return ie.axialAlignedBoundingBox([s,o,r,l],h,this.#o),this;const p=[1/0,1/0,-1/0,-1/0];return ie.axialAlignedBoundingBox([s,o,r,l],h,p),this.#o[0]=Math.min(this.#o[0],Math.max(p[0],u[0])),this.#o[1]=Math.min(this.#o[1],Math.max(p[1],u[1])),this.#o[2]=Math.max(this.#o[2],Math.min(p[2],u[2])),this.#o[3]=Math.max(this.#o[3],Math.min(p[3],u[3])),this}recordCharacterBBox(e,t,s,r=1,o=0,l=0,u){const h=s.bbox;let p,m;if(h&&(p=h[2]!==h[0]&&h[3]!==h[1]&&this.#d.get(s),p!==!1&&(m=[0,0,0,0],ie.axialAlignedBoundingBox(h,s.fontMatrix,m),(r!==1||o!==0||l!==0)&&ie.scaleMinMax([r,0,0,-r,o,l],m),p)))return this.recordBBox(e,t,m[0],m[2],m[1],m[3]);if(!u)return this.recordFullPageBBox(e);const b=u();return h&&m&&p===void 0&&(p=m[0]<=o-b.actualBoundingBoxLeft&&m[2]>=o+b.actualBoundingBoxRight&&m[1]<=l-b.actualBoundingBoxAscent&&m[3]>=l+b.actualBoundingBoxDescent,this.#d.set(s,p),p)?this.recordBBox(e,t,m[0],m[2],m[1],m[3]):this.recordBBox(e,t,o-b.actualBoundingBoxLeft,o+b.actualBoundingBoxRight,l-b.actualBoundingBoxAscent,l+b.actualBoundingBoxDescent)}recordFullPageBBox(e){return this.#o[0]=Math.max(0,this.#r[0]),this.#o[1]=Math.max(0,this.#r[1]),this.#o[2]=Math.min(this.#f,this.#r[2]),this.#o[3]=Math.min(this.#g,this.#r[3]),this}getSimpleIndex(e){return this.#e[e]}recordDependencies(e,t){const s=this.#l,r=this.#e,o=this.#t;for(const l of t)l in this.#e?s.add(r[l]):l in o&&o[l].forEach(s.add,s);return this}recordNamedDependency(e,t){return this.#i.has(t)&&this.#l.add(this.#i.get(t)),this}recordOperation(e,t=!1){if(this.recordDependencies(e,[er]),this.#m){const s=gl(this.#m,e),{dependencies:r}=s;this.#l.forEach(r.add,r),this.#n.forEach(r.add,r),this.#a.forEach(r.add,r),r.delete(e),s.isRenderingOperation=!0}if(this.#c===e){const s=Lg(this.#o[0]*256/this.#f),r=Lg(this.#o[1]*256/this.#g),o=Pg(this.#o[2]*256/this.#f),l=Pg(this.#o[3]*256/this.#g);ml(this.#p,e,s,r,o,l);for(const u of this.#l)u!==e&&ml(this.#p,u,s,r,o,l);for(const u of this.#n)u!==e&&ml(this.#p,u,s,r,o,l);for(const u of this.#a)u!==e&&ml(this.#p,u,s,r,o,l);t||(this.#l.clear(),this.#c=-1)}return this}recordShowTextOperation(e,t=!1){const s=Array.from(this.#l);this.recordOperation(e,t),this.recordIncrementalData("sameLineText",e);for(const r of s)this.recordIncrementalData("sameLineText",r);return this}bboxToClipBoxDropOperation(e,t=!1){return this.#c===e&&(this.#c=-1,this.#r[0]=Math.max(this.#r[0],this.#o[0]),this.#r[1]=Math.max(this.#r[1],this.#o[1]),this.#r[2]=Math.min(this.#r[2],this.#o[2]),this.#r[3]=Math.min(this.#r[3],this.#o[3]),t||this.#l.clear()),this}_takePendingDependencies(){const e=this.#l;return this.#l=new Set,e}_extractOperation(e){const t=this.#h.get(e);return this.#h.delete(e),t}_pushPendingDependencies(e){for(const t of e)this.#l.add(t)}take(){return this.#d.clear(),new nw(this.#u,this.#p)}takeDebugMetadata(){return this.#m}}class Dl{#e;#t;#i;#n=0;#a=0;constructor(e,t,s){if(e instanceof Dl&&e.#i===!!s)return e;this.#e=e,this.#t=t,this.#i=!!s}growOperationsCount(){throw new Error("Unreachable")}save(e){return this.#a++,this.#e.save(this.#t),this}restore(e){return this.#a>0&&(this.#e.restore(this.#t),this.#a--),this}recordOpenMarker(e){return this.#n++,this}getOpenMarker(){return this.#n>0?this.#t:this.#e.getOpenMarker()}recordCloseMarker(e){return this.#n--,this}beginMarkedContent(e){return this}endMarkedContent(e){return this}pushBaseTransform(e){return this.#e.pushBaseTransform(e),this}popBaseTransform(){return this.#e.popBaseTransform(),this}recordSimpleData(e,t){return this.#e.recordSimpleData(e,this.#t),this}recordIncrementalData(e,t){return this.#e.recordIncrementalData(e,this.#t),this}resetIncrementalData(e,t){return this.#e.resetIncrementalData(e,this.#t),this}recordNamedData(e,t){return this}recordSimpleDataFromNamed(e,t,s){return this.#e.recordSimpleDataFromNamed(e,t,this.#t),this}recordFutureForcedDependency(e,t){return this.#e.recordFutureForcedDependency(e,this.#t),this}inheritSimpleDataAsFutureForcedDependencies(e){return this.#e.inheritSimpleDataAsFutureForcedDependencies(e),this}inheritPendingDependenciesAsFutureForcedDependencies(){return this.#e.inheritPendingDependenciesAsFutureForcedDependencies(),this}resetBBox(e){return this.#i||this.#e.resetBBox(this.#t),this}recordClipBox(e,t,s,r,o,l){return this.#i||this.#e.recordClipBox(this.#t,t,s,r,o,l),this}recordBBox(e,t,s,r,o,l){return this.#i||this.#e.recordBBox(this.#t,t,s,r,o,l),this}recordCharacterBBox(e,t,s,r,o,l,u){return this.#i||this.#e.recordCharacterBBox(this.#t,t,s,r,o,l,u),this}recordFullPageBBox(e){return this.#i||this.#e.recordFullPageBBox(this.#t),this}getSimpleIndex(e){return this.#e.getSimpleIndex(e)}recordDependencies(e,t){return this.#e.recordDependencies(this.#t,t),this}recordNamedDependency(e,t){return this.#e.recordNamedDependency(this.#t,t),this}recordOperation(e){return this.#e.recordOperation(this.#t,!0),this}recordShowTextOperation(e){return this.#e.recordShowTextOperation(this.#t,!0),this}bboxToClipBoxDropOperation(e){return this.#i||this.#e.bboxToClipBoxDropOperation(this.#t,!0),this}take(){throw new Error("Unreachable")}takeDebugMetadata(){throw new Error("Unreachable")}}const vn={stroke:["path","transform","filter","strokeColor","strokeAlpha","lineWidth","lineCap","lineJoin","miterLimit","dash"],fill:["path","transform","filter","fillColor","fillAlpha","globalCompositeOperation","SMask"],imageXObject:["transform","SMask","filter","fillAlpha","strokeAlpha","globalCompositeOperation"],rawFillPath:["filter","fillColor","fillAlpha"],showText:["transform","leading","charSpacing","wordSpacing","hScale","textRise","moveText","textMatrix","font","fontObj","filter","fillColor","textRenderingMode","SMask","fillAlpha","strokeAlpha","globalCompositeOperation","sameLineText"],transform:["transform"],transformAndFill:["transform","fillColor"]},Mt={FILL:"Fill",STROKE:"Stroke",SHADING:"Shading"};function Rd(d,e){if(!e)return;const t=e[2]-e[0],s=e[3]-e[1],r=new Path2D;r.rect(e[0],e[1],t,s),d.clip(r)}class Zd{isModifyingCurrentTransform(){return!1}getPattern(){qe("Abstract method `getPattern` called.")}}class sw extends Zd{constructor(e){super(),this._type=e[1],this._bbox=e[2],this._colorStops=e[3],this._p0=e[4],this._p1=e[5],this._r0=e[6],this._r1=e[7],this.matrix=null}_createGradient(e){let t;this._type==="axial"?t=e.createLinearGradient(this._p0[0],this._p0[1],this._p1[0],this._p1[1]):this._type==="radial"&&(t=e.createRadialGradient(this._p0[0],this._p0[1],this._r0,this._p1[0],this._p1[1],this._r1));for(const s of this._colorStops)t.addColorStop(s[0],s[1]);return t}getPattern(e,t,s,r){let o;if(r===Mt.STROKE||r===Mt.FILL){const l=t.current.getClippedPathBoundingBox(r,et(e))||[0,0,0,0],u=Math.ceil(l[2]-l[0])||1,h=Math.ceil(l[3]-l[1])||1,p=t.cachedCanvases.getCanvas("pattern",u,h),m=p.context;m.clearRect(0,0,m.canvas.width,m.canvas.height),m.beginPath(),m.rect(0,0,m.canvas.width,m.canvas.height),m.translate(-l[0],-l[1]),s=ie.transform(s,[1,0,0,1,l[0],l[1]]),m.transform(...t.baseTransform),this.matrix&&m.transform(...this.matrix),Rd(m,this._bbox),m.fillStyle=this._createGradient(m),m.fill(),o=e.createPattern(p.canvas,"no-repeat");const b=new DOMMatrix(s);o.setTransform(b)}else Rd(e,this._bbox),o=this._createGradient(e);return o}}function gd(d,e,t,s,r,o,l,u){const h=e.coords,p=e.colors,m=d.data,b=d.width*4;let v;h[t+1]>h[s+1]&&(v=t,t=s,s=v,v=o,o=l,l=v),h[s+1]>h[r+1]&&(v=s,s=r,r=v,v=l,l=u,u=v),h[t+1]>h[s+1]&&(v=t,t=s,s=v,v=o,o=l,l=v);const A=(h[t]+e.offsetX)*e.scaleX,x=(h[t+1]+e.offsetY)*e.scaleY,C=(h[s]+e.offsetX)*e.scaleX,T=(h[s+1]+e.offsetY)*e.scaleY,w=(h[r]+e.offsetX)*e.scaleX,_=(h[r+1]+e.offsetY)*e.scaleY;if(x>=_)return;const R=p[o],O=p[o+1],k=p[o+2],j=p[l],F=p[l+1],q=p[l+2],V=p[u],Q=p[u+1],J=p[u+2],le=Math.round(x),de=Math.round(_);let ae,ce,N,G,ee,he,M,W;for(let Z=le;Z<=de;Z++){if(Z<T){const Ce=Z<x?0:(x-Z)/(x-T);ae=A-(A-C)*Ce,ce=R-(R-j)*Ce,N=O-(O-F)*Ce,G=k-(k-q)*Ce}else{let Ce;Z>_?Ce=1:T===_?Ce=0:Ce=(T-Z)/(T-_),ae=C-(C-w)*Ce,ce=j-(j-V)*Ce,N=F-(F-Q)*Ce,G=q-(q-J)*Ce}let K;Z<x?K=0:Z>_?K=1:K=(x-Z)/(x-_),ee=A-(A-w)*K,he=R-(R-V)*K,M=O-(O-Q)*K,W=k-(k-J)*K;const te=Math.round(Math.min(ae,ee)),ye=Math.round(Math.max(ae,ee));let re=b*Z+te*4;for(let Ce=te;Ce<=ye;Ce++)K=(ae-Ce)/(ae-ee),K<0?K=0:K>1&&(K=1),m[re++]=ce-(ce-he)*K|0,m[re++]=N-(N-M)*K|0,m[re++]=G-(G-W)*K|0,m[re++]=255}}function rw(d,e,t){const s=e.coords,r=e.colors;let o,l;switch(e.type){case"lattice":const u=e.verticesPerRow,h=Math.floor(s.length/u)-1,p=u-1;for(o=0;o<h;o++){let m=o*u;for(let b=0;b<p;b++,m++)gd(d,t,s[m],s[m+1],s[m+u],r[m],r[m+1],r[m+u]),gd(d,t,s[m+u+1],s[m+1],s[m+u],r[m+u+1],r[m+1],r[m+u])}break;case"triangles":for(o=0,l=s.length;o<l;o+=3)gd(d,t,s[o],s[o+1],s[o+2],r[o],r[o+1],r[o+2]);break;default:throw new Error("illegal figure")}}class aw extends Zd{constructor(e){super(),this._coords=e[2],this._colors=e[3],this._figures=e[4],this._bounds=e[5],this._bbox=e[6],this._background=e[7],this.matrix=null}_createMeshCanvas(e,t,s){const u=Math.floor(this._bounds[0]),h=Math.floor(this._bounds[1]),p=Math.ceil(this._bounds[2])-u,m=Math.ceil(this._bounds[3])-h,b=Math.min(Math.ceil(Math.abs(p*e[0]*1.1)),3e3),v=Math.min(Math.ceil(Math.abs(m*e[1]*1.1)),3e3),A=p/b,x=m/v,C={coords:this._coords,colors:this._colors,offsetX:-u,offsetY:-h,scaleX:1/A,scaleY:1/x},T=b+4,w=v+4,_=s.getCanvas("mesh",T,w),R=_.context,O=R.createImageData(b,v);if(t){const j=O.data;for(let F=0,q=j.length;F<q;F+=4)j[F]=t[0],j[F+1]=t[1],j[F+2]=t[2],j[F+3]=255}for(const j of this._figures)rw(O,j,C);return R.putImageData(O,2,2),{canvas:_.canvas,offsetX:u-2*A,offsetY:h-2*x,scaleX:A,scaleY:x}}isModifyingCurrentTransform(){return!0}getPattern(e,t,s,r){Rd(e,this._bbox);const o=new Float32Array(2);if(r===Mt.SHADING)ie.singularValueDecompose2dScale(et(e),o);else if(this.matrix){ie.singularValueDecompose2dScale(this.matrix,o);const[u,h]=o;ie.singularValueDecompose2dScale(t.baseTransform,o),o[0]*=u,o[1]*=h}else ie.singularValueDecompose2dScale(t.baseTransform,o);const l=this._createMeshCanvas(o,r===Mt.SHADING?null:this._background,t.cachedCanvases);return r!==Mt.SHADING&&(e.setTransform(...t.baseTransform),this.matrix&&e.transform(...this.matrix)),e.translate(l.offsetX,l.offsetY),e.scale(l.scaleX,l.scaleY),e.createPattern(l.canvas,"no-repeat")}}class ow extends Zd{getPattern(){return"hotpink"}}function lw(d){switch(d[0]){case"RadialAxial":return new sw(d);case"Mesh":return new aw(d);case"Dummy":return new ow}throw new Error(`Unknown IR type: ${d[0]}`)}const Og={COLORED:1,UNCOLORED:2};class eh{static MAX_PATTERN_SIZE=3e3;constructor(e,t,s,r){this.color=e[1],this.operatorList=e[2],this.matrix=e[3],this.bbox=e[4],this.xstep=e[5],this.ystep=e[6],this.paintType=e[7],this.tilingType=e[8],this.ctx=t,this.canvasGraphicsFactory=s,this.baseTransform=r}createPatternCanvas(e,t){const{bbox:s,operatorList:r,paintType:o,tilingType:l,color:u,canvasGraphicsFactory:h}=this;let{xstep:p,ystep:m}=this;p=Math.abs(p),m=Math.abs(m),Ol("TilingType: "+l);const b=s[0],v=s[1],A=s[2],x=s[3],C=A-b,T=x-v,w=new Float32Array(2);ie.singularValueDecompose2dScale(this.matrix,w);const[_,R]=w;ie.singularValueDecompose2dScale(this.baseTransform,w);const O=_*w[0],k=R*w[1];let j=C,F=T,q=!1,V=!1;const Q=Math.ceil(p*O),J=Math.ceil(m*k),le=Math.ceil(C*O),de=Math.ceil(T*k);Q>=le?j=p:q=!0,J>=de?F=m:V=!0;const ae=this.getSizeAndScale(j,this.ctx.canvas.width,O),ce=this.getSizeAndScale(F,this.ctx.canvas.height,k),N=e.cachedCanvases.getCanvas("pattern",ae.size,ce.size),G=N.context,ee=h.createCanvasGraphics(G,t);if(ee.groupLevel=e.groupLevel,this.setFillAndStrokeStyleToContext(ee,o,u),G.translate(-ae.scale*b,-ce.scale*v),ee.transform(0,ae.scale,0,0,ce.scale,0,0),G.save(),ee.dependencyTracker?.save(),this.clipBbox(ee,b,v,A,x),ee.baseTransform=et(ee.ctx),ee.executeOperatorList(r),ee.endDrawing(),ee.dependencyTracker?.restore(),G.restore(),q||V){const he=N.canvas;q&&(j=p),V&&(F=m);const M=this.getSizeAndScale(j,this.ctx.canvas.width,O),W=this.getSizeAndScale(F,this.ctx.canvas.height,k),Z=M.size,K=W.size,te=e.cachedCanvases.getCanvas("pattern-workaround",Z,K),ye=te.context,re=q?Math.floor(C/p):0,Ce=V?Math.floor(T/m):0;for(let Re=0;Re<=re;Re++)for(let We=0;We<=Ce;We++)ye.drawImage(he,Z*Re,K*We,Z,K,0,0,Z,K);return{canvas:te.canvas,scaleX:M.scale,scaleY:W.scale,offsetX:b,offsetY:v}}return{canvas:N.canvas,scaleX:ae.scale,scaleY:ce.scale,offsetX:b,offsetY:v}}getSizeAndScale(e,t,s){const r=Math.max(eh.MAX_PATTERN_SIZE,t);let o=Math.ceil(e*s);return o>=r?o=r:s=o/e,{scale:s,size:o}}clipBbox(e,t,s,r,o){const l=r-t,u=o-s;e.ctx.rect(t,s,l,u),ie.axialAlignedBoundingBox([t,s,r,o],et(e.ctx),e.current.minMax),e.clip(),e.endPath()}setFillAndStrokeStyleToContext(e,t,s){const r=e.ctx,o=e.current;switch(t){case Og.COLORED:const{fillStyle:l,strokeStyle:u}=this.ctx;r.fillStyle=o.fillColor=l,r.strokeStyle=o.strokeColor=u;break;case Og.UNCOLORED:r.fillStyle=r.strokeStyle=s,o.fillColor=o.strokeColor=s;break;default:throw new Dx(`Unsupported paint type: ${t}`)}}isModifyingCurrentTransform(){return!1}getPattern(e,t,s,r,o){let l=s;r!==Mt.SHADING&&(l=ie.transform(l,t.baseTransform),this.matrix&&(l=ie.transform(l,this.matrix)));const u=this.createPatternCanvas(t,o);let h=new DOMMatrix(l);h=h.translate(u.offsetX,u.offsetY),h=h.scale(1/u.scaleX,1/u.scaleY);const p=e.createPattern(u.canvas,"repeat");return p.setTransform(h),p}}function cw({src:d,srcPos:e=0,dest:t,width:s,height:r,nonBlackColor:o=4294967295,inverseDecode:l=!1}){const u=wt.isLittleEndian?4278190080:255,[h,p]=l?[o,u]:[u,o],m=s>>3,b=s&7,v=d.length;t=new Uint32Array(t.buffer);let A=0;for(let x=0;x<r;x++){for(const T=e+m;e<T;e++){const w=e<v?d[e]:255;t[A++]=w&128?p:h,t[A++]=w&64?p:h,t[A++]=w&32?p:h,t[A++]=w&16?p:h,t[A++]=w&8?p:h,t[A++]=w&4?p:h,t[A++]=w&2?p:h,t[A++]=w&1?p:h}if(b===0)continue;const C=e<v?d[e++]:255;for(let T=0;T<b;T++)t[A++]=C&1<<7-T?p:h}return{srcPos:e,destPos:A}}const Ng=16,Ig=100,uw=15,jg=10,$t=16,yd=new DOMMatrix,on=new Float32Array(2),ir=new Float32Array([1/0,1/0,-1/0,-1/0]);function dw(d,e){if(d._removeMirroring)throw new Error("Context is already forwarding operations.");d.__originalSave=d.save,d.__originalRestore=d.restore,d.__originalRotate=d.rotate,d.__originalScale=d.scale,d.__originalTranslate=d.translate,d.__originalTransform=d.transform,d.__originalSetTransform=d.setTransform,d.__originalResetTransform=d.resetTransform,d.__originalClip=d.clip,d.__originalMoveTo=d.moveTo,d.__originalLineTo=d.lineTo,d.__originalBezierCurveTo=d.bezierCurveTo,d.__originalRect=d.rect,d.__originalClosePath=d.closePath,d.__originalBeginPath=d.beginPath,d._removeMirroring=()=>{d.save=d.__originalSave,d.restore=d.__originalRestore,d.rotate=d.__originalRotate,d.scale=d.__originalScale,d.translate=d.__originalTranslate,d.transform=d.__originalTransform,d.setTransform=d.__originalSetTransform,d.resetTransform=d.__originalResetTransform,d.clip=d.__originalClip,d.moveTo=d.__originalMoveTo,d.lineTo=d.__originalLineTo,d.bezierCurveTo=d.__originalBezierCurveTo,d.rect=d.__originalRect,d.closePath=d.__originalClosePath,d.beginPath=d.__originalBeginPath,delete d._removeMirroring},d.save=function(){e.save(),this.__originalSave()},d.restore=function(){e.restore(),this.__originalRestore()},d.translate=function(t,s){e.translate(t,s),this.__originalTranslate(t,s)},d.scale=function(t,s){e.scale(t,s),this.__originalScale(t,s)},d.transform=function(t,s,r,o,l,u){e.transform(t,s,r,o,l,u),this.__originalTransform(t,s,r,o,l,u)},d.setTransform=function(t,s,r,o,l,u){e.setTransform(t,s,r,o,l,u),this.__originalSetTransform(t,s,r,o,l,u)},d.resetTransform=function(){e.resetTransform(),this.__originalResetTransform()},d.rotate=function(t){e.rotate(t),this.__originalRotate(t)},d.clip=function(t){e.clip(t),this.__originalClip(t)},d.moveTo=function(t,s){e.moveTo(t,s),this.__originalMoveTo(t,s)},d.lineTo=function(t,s){e.lineTo(t,s),this.__originalLineTo(t,s)},d.bezierCurveTo=function(t,s,r,o,l,u){e.bezierCurveTo(t,s,r,o,l,u),this.__originalBezierCurveTo(t,s,r,o,l,u)},d.rect=function(t,s,r,o){e.rect(t,s,r,o),this.__originalRect(t,s,r,o)},d.closePath=function(){e.closePath(),this.__originalClosePath()},d.beginPath=function(){e.beginPath(),this.__originalBeginPath()}}class hw{constructor(e){this.canvasFactory=e,this.cache=Object.create(null)}getCanvas(e,t,s){let r;return this.cache[e]!==void 0?(r=this.cache[e],this.canvasFactory.reset(r,t,s)):(r=this.canvasFactory.create(t,s),this.cache[e]=r),r}delete(e){delete this.cache[e]}clear(){for(const e in this.cache){const t=this.cache[e];this.canvasFactory.destroy(t),delete this.cache[e]}}}function yl(d,e,t,s,r,o,l,u,h,p){const[m,b,v,A,x,C]=et(d);if(b===0&&v===0){const _=l*m+x,R=Math.round(_),O=u*A+C,k=Math.round(O),j=(l+h)*m+x,F=Math.abs(Math.round(j)-R)||1,q=(u+p)*A+C,V=Math.abs(Math.round(q)-k)||1;return d.setTransform(Math.sign(m),0,0,Math.sign(A),R,k),d.drawImage(e,t,s,r,o,0,0,F,V),d.setTransform(m,b,v,A,x,C),[F,V]}if(m===0&&A===0){const _=u*v+x,R=Math.round(_),O=l*b+C,k=Math.round(O),j=(u+p)*v+x,F=Math.abs(Math.round(j)-R)||1,q=(l+h)*b+C,V=Math.abs(Math.round(q)-k)||1;return d.setTransform(0,Math.sign(b),Math.sign(v),0,R,k),d.drawImage(e,t,s,r,o,0,0,V,F),d.setTransform(m,b,v,A,x,C),[V,F]}d.drawImage(e,t,s,r,o,l,u,h,p);const T=Math.hypot(m,b),w=Math.hypot(v,A);return[T*h,w*p]}class Bg{alphaIsShape=!1;fontSize=0;fontSizeScale=1;textMatrix=null;textMatrixScale=1;fontMatrix=xd;leading=0;x=0;y=0;lineX=0;lineY=0;charSpacing=0;wordSpacing=0;textHScale=1;textRenderingMode=Dt.FILL;textRise=0;fillColor="#000000";strokeColor="#000000";patternFill=!1;patternStroke=!1;fillAlpha=1;strokeAlpha=1;lineWidth=1;activeSMask=null;transferMaps="none";constructor(e,t,s){s?.(this),this.clipBox=new Float32Array([0,0,e,t]),this.minMax=ir.slice()}clone(){const e=Object.create(this);return e.clipBox=this.clipBox.slice(),e.minMax=this.minMax.slice(),e}getPathBoundingBox(e=Mt.FILL,t=null){const s=this.minMax.slice();if(e===Mt.STROKE){t||qe("Stroke bounding box must include transform."),ie.singularValueDecompose2dScale(t,on);const r=on[0]*this.lineWidth/2,o=on[1]*this.lineWidth/2;s[0]-=r,s[1]-=o,s[2]+=r,s[3]+=o}return s}updateClipFromPath(){const e=ie.intersect(this.clipBox,this.getPathBoundingBox());this.startNewPathAndClipBox(e||[0,0,0,0])}isEmptyClip(){return this.minMax[0]===1/0}startNewPathAndClipBox(e){this.clipBox.set(e,0),this.minMax.set(ir,0)}getClippedPathBoundingBox(e=Mt.FILL,t=null){return ie.intersect(this.clipBox,this.getPathBoundingBox(e,t))}}function Fg(d,e){if(e instanceof ImageData){d.putImageData(e,0,0);return}const t=e.height,s=e.width,r=t%$t,o=(t-r)/$t,l=r===0?o:o+1,u=d.createImageData(s,$t);let h=0,p;const m=e.data,b=u.data;let v,A,x,C;if(e.kind===Ta.GRAYSCALE_1BPP){const T=m.byteLength,w=new Uint32Array(b.buffer,0,b.byteLength>>2),_=w.length,R=s+7>>3,O=4294967295,k=wt.isLittleEndian?4278190080:255;for(v=0;v<l;v++){for(x=v<o?$t:r,p=0,A=0;A<x;A++){const j=T-h;let F=0;const q=j>R?s:j*8-7,V=q&-8;let Q=0,J=0;for(;F<V;F+=8)J=m[h++],w[p++]=J&128?O:k,w[p++]=J&64?O:k,w[p++]=J&32?O:k,w[p++]=J&16?O:k,w[p++]=J&8?O:k,w[p++]=J&4?O:k,w[p++]=J&2?O:k,w[p++]=J&1?O:k;for(;F<q;F++)Q===0&&(J=m[h++],Q=128),w[p++]=J&Q?O:k,Q>>=1}for(;p<_;)w[p++]=0;d.putImageData(u,0,v*$t)}}else if(e.kind===Ta.RGBA_32BPP){for(A=0,C=s*$t*4,v=0;v<o;v++)b.set(m.subarray(h,h+C)),h+=C,d.putImageData(u,0,A),A+=$t;v<l&&(C=s*r*4,b.set(m.subarray(h,h+C)),d.putImageData(u,0,A))}else if(e.kind===Ta.RGB_24BPP)for(x=$t,C=s*x,v=0;v<l;v++){for(v>=o&&(x=r,C=s*x),p=0,A=C;A--;)b[p++]=m[h++],b[p++]=m[h++],b[p++]=m[h++],b[p++]=255;d.putImageData(u,0,v*$t)}else throw new Error(`bad image kind: ${e.kind}`)}function Ug(d,e){if(e.bitmap){d.drawImage(e.bitmap,0,0);return}const t=e.height,s=e.width,r=t%$t,o=(t-r)/$t,l=r===0?o:o+1,u=d.createImageData(s,$t);let h=0;const p=e.data,m=u.data;for(let b=0;b<l;b++){const v=b<o?$t:r;({srcPos:h}=cw({src:p,srcPos:h,dest:m,width:s,height:v,nonBlackColor:0})),d.putImageData(u,0,b*$t)}}function va(d,e){const t=["strokeStyle","fillStyle","fillRule","globalAlpha","lineWidth","lineCap","lineJoin","miterLimit","globalCompositeOperation","font","filter"];for(const s of t)d[s]!==void 0&&(e[s]=d[s]);d.setLineDash!==void 0&&(e.setLineDash(d.getLineDash()),e.lineDashOffset=d.lineDashOffset)}function bl(d){d.strokeStyle=d.fillStyle="#000000",d.fillRule="nonzero",d.globalAlpha=1,d.lineWidth=1,d.lineCap="butt",d.lineJoin="miter",d.miterLimit=10,d.globalCompositeOperation="source-over",d.font="10px sans-serif",d.setLineDash!==void 0&&(d.setLineDash([]),d.lineDashOffset=0);const{filter:e}=d;e!=="none"&&e!==""&&(d.filter="none")}function Hg(d,e){if(e)return!0;ie.singularValueDecompose2dScale(d,on);const t=Math.fround(Tn.pixelRatio*cs.PDF_TO_CSS_UNITS);return on[0]<=t&&on[1]<=t}const fw=["butt","round","square"],pw=["miter","round","bevel"],mw={},zg={};class rr{constructor(e,t,s,r,o,{optionalContentConfig:l,markedContentStack:u=null},h,p,m){this.ctx=e,this.current=new Bg(this.ctx.canvas.width,this.ctx.canvas.height),this.stateStack=[],this.pendingClip=null,this.pendingEOFill=!1,this.res=null,this.xobjs=null,this.commonObjs=t,this.objs=s,this.canvasFactory=r,this.filterFactory=o,this.groupStack=[],this.baseTransform=null,this.baseTransformStack=[],this.groupLevel=0,this.smaskStack=[],this.smaskCounter=0,this.tempSMask=null,this.suspendedCtx=null,this.contentVisible=!0,this.markedContentStack=u||[],this.optionalContentConfig=l,this.cachedCanvases=new hw(this.canvasFactory),this.cachedPatterns=new Map,this.annotationCanvasMap=h,this.viewportScale=1,this.outputScaleX=1,this.outputScaleY=1,this.pageColors=p,this._cachedScaleForStroking=[-1,0],this._cachedGetSinglePixelWidth=null,this._cachedBitmapsMap=new Map,this.dependencyTracker=m??null}getObject(e,t,s=null){return typeof t=="string"?(this.dependencyTracker?.recordNamedDependency(e,t),t.startsWith("g_")?this.commonObjs.get(t):this.objs.get(t)):s}beginDrawing({transform:e,viewport:t,transparency:s=!1,background:r=null}){const o=this.ctx.canvas.width,l=this.ctx.canvas.height,u=this.ctx.fillStyle;if(this.ctx.fillStyle=r||"#ffffff",this.ctx.fillRect(0,0,o,l),this.ctx.fillStyle=u,s){const h=this.cachedCanvases.getCanvas("transparent",o,l);this.compositeCtx=this.ctx,this.transparentCanvas=h.canvas,this.ctx=h.context,this.ctx.save(),this.ctx.transform(...et(this.compositeCtx))}this.ctx.save(),bl(this.ctx),e&&(this.ctx.transform(...e),this.outputScaleX=e[0],this.outputScaleY=e[0]),this.ctx.transform(...t.transform),this.viewportScale=t.scale,this.baseTransform=et(this.ctx)}executeOperatorList(e,t,s,r,o){const l=e.argsArray,u=e.fnArray;let h=t||0;const p=l.length;if(p===h)return h;const m=p-h>jg&&typeof s=="function",b=m?Date.now()+uw:0;let v=0;const A=this.commonObjs,x=this.objs;let C,T;for(;;){if(r!==void 0&&h===r.nextBreakPoint)return r.breakIt(h,s),h;if(!o||o(h))if(C=u[h],T=l[h]??null,C!==dr.dependency)T===null?this[C](h):this[C](h,...T);else for(const w of T){this.dependencyTracker?.recordNamedData(w,h);const _=w.startsWith("g_")?A:x;if(!_.has(w))return _.get(w,s),h}if(h++,h===p)return h;if(m&&++v>jg){if(Date.now()>b)return s(),h;v=0}}}#e(){for(;this.stateStack.length||this.inSMaskMode;)this.restore();this.current.activeSMask=null,this.ctx.restore(),this.transparentCanvas&&(this.ctx=this.compositeCtx,this.ctx.save(),this.ctx.setTransform(1,0,0,1,0,0),this.ctx.drawImage(this.transparentCanvas,0,0),this.ctx.restore(),this.transparentCanvas=null)}endDrawing(){this.#e(),this.cachedCanvases.clear(),this.cachedPatterns.clear();for(const e of this._cachedBitmapsMap.values()){for(const t of e.values())typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement&&(t.width=t.height=0);e.clear()}this._cachedBitmapsMap.clear(),this.#t()}#t(){if(this.pageColors){const e=this.filterFactory.addHCMFilter(this.pageColors.foreground,this.pageColors.background);if(e!=="none"){const t=this.ctx.filter;this.ctx.filter=e,this.ctx.drawImage(this.ctx.canvas,0,0),this.ctx.filter=t}}}_scaleImage(e,t){const s=e.width??e.displayWidth,r=e.height??e.displayHeight;let o=Math.max(Math.hypot(t[0],t[1]),1),l=Math.max(Math.hypot(t[2],t[3]),1),u=s,h=r,p="prescale1",m,b;for(;o>2&&u>1||l>2&&h>1;){let v=u,A=h;o>2&&u>1&&(v=u>=16384?Math.floor(u/2)-1||1:Math.ceil(u/2),o/=u/v),l>2&&h>1&&(A=h>=16384?Math.floor(h/2)-1||1:Math.ceil(h)/2,l/=h/A),m=this.cachedCanvases.getCanvas(p,v,A),b=m.context,b.clearRect(0,0,v,A),b.drawImage(e,0,0,u,h,0,0,v,A),e=m.canvas,u=v,h=A,p=p==="prescale1"?"prescale2":"prescale1"}return{img:e,paintWidth:u,paintHeight:h}}_createMaskCanvas(e,t){const s=this.ctx,{width:r,height:o}=t,l=this.current.fillColor,u=this.current.patternFill,h=et(s);let p,m,b,v;if((t.bitmap||t.data)&&t.count>1){const Q=t.bitmap||t.data.buffer;m=JSON.stringify(u?h:[h.slice(0,4),l]),p=this._cachedBitmapsMap.get(Q),p||(p=new Map,this._cachedBitmapsMap.set(Q,p));const J=p.get(m);if(J&&!u){const le=Math.round(Math.min(h[0],h[2])+h[4]),de=Math.round(Math.min(h[1],h[3])+h[5]);return this.dependencyTracker?.recordDependencies(e,vn.transformAndFill),{canvas:J,offsetX:le,offsetY:de}}b=J}b||(v=this.cachedCanvases.getCanvas("maskCanvas",r,o),Ug(v.context,t));let A=ie.transform(h,[1/r,0,0,-1/o,0,0]);A=ie.transform(A,[1,0,0,1,0,-o]);const x=ir.slice();ie.axialAlignedBoundingBox([0,0,r,o],A,x);const[C,T,w,_]=x,R=Math.round(w-C)||1,O=Math.round(_-T)||1,k=this.cachedCanvases.getCanvas("fillCanvas",R,O),j=k.context,F=C,q=T;j.translate(-F,-q),j.transform(...A),b||(b=this._scaleImage(v.canvas,Nn(j)),b=b.img,p&&u&&p.set(m,b)),j.imageSmoothingEnabled=Hg(et(j),t.interpolate),yl(j,b,0,0,b.width,b.height,0,0,r,o),j.globalCompositeOperation="source-in";const V=ie.transform(Nn(j),[1,0,0,1,-F,-q]);return j.fillStyle=u?l.getPattern(s,this,V,Mt.FILL,e):l,j.fillRect(0,0,r,o),p&&!u&&(this.cachedCanvases.delete("fillCanvas"),p.set(m,k.canvas)),this.dependencyTracker?.recordDependencies(e,vn.transformAndFill),{canvas:k.canvas,offsetX:Math.round(F),offsetY:Math.round(q)}}setLineWidth(e,t){this.dependencyTracker?.recordSimpleData("lineWidth",e),t!==this.current.lineWidth&&(this._cachedScaleForStroking[0]=-1),this.current.lineWidth=t,this.ctx.lineWidth=t}setLineCap(e,t){this.dependencyTracker?.recordSimpleData("lineCap",e),this.ctx.lineCap=fw[t]}setLineJoin(e,t){this.dependencyTracker?.recordSimpleData("lineJoin",e),this.ctx.lineJoin=pw[t]}setMiterLimit(e,t){this.dependencyTracker?.recordSimpleData("miterLimit",e),this.ctx.miterLimit=t}setDash(e,t,s){this.dependencyTracker?.recordSimpleData("dash",e);const r=this.ctx;r.setLineDash!==void 0&&(r.setLineDash(t),r.lineDashOffset=s)}setRenderingIntent(e,t){}setFlatness(e,t){}setGState(e,t){for(const[s,r]of t)switch(s){case"LW":this.setLineWidth(e,r);break;case"LC":this.setLineCap(e,r);break;case"LJ":this.setLineJoin(e,r);break;case"ML":this.setMiterLimit(e,r);break;case"D":this.setDash(e,r[0],r[1]);break;case"RI":this.setRenderingIntent(e,r);break;case"FL":this.setFlatness(e,r);break;case"Font":this.setFont(e,r[0],r[1]);break;case"CA":this.dependencyTracker?.recordSimpleData("strokeAlpha",e),this.current.strokeAlpha=r;break;case"ca":this.dependencyTracker?.recordSimpleData("fillAlpha",e),this.ctx.globalAlpha=this.current.fillAlpha=r;break;case"BM":this.dependencyTracker?.recordSimpleData("globalCompositeOperation",e),this.ctx.globalCompositeOperation=r;break;case"SMask":this.dependencyTracker?.recordSimpleData("SMask",e),this.current.activeSMask=r?this.tempSMask:null,this.tempSMask=null,this.checkSMaskState();break;case"TR":this.dependencyTracker?.recordSimpleData("filter",e),this.ctx.filter=this.current.transferMaps=this.filterFactory.addFilter(r);break}}get inSMaskMode(){return!!this.suspendedCtx}checkSMaskState(){const e=this.inSMaskMode;this.current.activeSMask&&!e?this.beginSMaskMode():!this.current.activeSMask&&e&&this.endSMaskMode()}beginSMaskMode(e){if(this.inSMaskMode)throw new Error("beginSMaskMode called while already in smask mode");const t=this.ctx.canvas.width,s=this.ctx.canvas.height,r="smaskGroupAt"+this.groupLevel,o=this.cachedCanvases.getCanvas(r,t,s);this.suspendedCtx=this.ctx;const l=this.ctx=o.context;l.setTransform(this.suspendedCtx.getTransform()),va(this.suspendedCtx,l),dw(l,this.suspendedCtx),this.setGState(e,[["BM","source-over"]])}endSMaskMode(){if(!this.inSMaskMode)throw new Error("endSMaskMode called while not in smask mode");this.ctx._removeMirroring(),va(this.ctx,this.suspendedCtx),this.ctx=this.suspendedCtx,this.suspendedCtx=null}compose(e){if(!this.current.activeSMask)return;e?(e[0]=Math.floor(e[0]),e[1]=Math.floor(e[1]),e[2]=Math.ceil(e[2]),e[3]=Math.ceil(e[3])):e=[0,0,this.ctx.canvas.width,this.ctx.canvas.height];const t=this.current.activeSMask,s=this.suspendedCtx;this.composeSMask(s,t,this.ctx,e),this.ctx.save(),this.ctx.setTransform(1,0,0,1,0,0),this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height),this.ctx.restore()}composeSMask(e,t,s,r){const o=r[0],l=r[1],u=r[2]-o,h=r[3]-l;u===0||h===0||(this.genericComposeSMask(t.context,s,u,h,t.subtype,t.backdrop,t.transferMap,o,l,t.offsetX,t.offsetY),e.save(),e.globalAlpha=1,e.globalCompositeOperation="source-over",e.setTransform(1,0,0,1,0,0),e.drawImage(s.canvas,0,0),e.restore())}genericComposeSMask(e,t,s,r,o,l,u,h,p,m,b){let v=e.canvas,A=h-m,x=p-b;if(l)if(A<0||x<0||A+s>v.width||x+r>v.height){const T=this.cachedCanvases.getCanvas("maskExtension",s,r),w=T.context;w.drawImage(v,-A,-x),w.globalCompositeOperation="destination-atop",w.fillStyle=l,w.fillRect(0,0,s,r),w.globalCompositeOperation="source-over",v=T.canvas,A=x=0}else{e.save(),e.globalAlpha=1,e.setTransform(1,0,0,1,0,0);const T=new Path2D;T.rect(A,x,s,r),e.clip(T),e.globalCompositeOperation="destination-atop",e.fillStyle=l,e.fillRect(A,x,s,r),e.restore()}t.save(),t.globalAlpha=1,t.setTransform(1,0,0,1,0,0),o==="Alpha"&&u?t.filter=this.filterFactory.addAlphaFilter(u):o==="Luminosity"&&(t.filter=this.filterFactory.addLuminosityFilter(u));const C=new Path2D;C.rect(h,p,s,r),t.clip(C),t.globalCompositeOperation="destination-in",t.drawImage(v,A,x,s,r,h,p,s,r),t.restore()}save(e){this.inSMaskMode&&va(this.ctx,this.suspendedCtx),this.ctx.save();const t=this.current;this.stateStack.push(t),this.current=t.clone(),this.dependencyTracker?.save(e)}restore(e){if(this.dependencyTracker?.restore(e),this.stateStack.length===0){this.inSMaskMode&&this.endSMaskMode();return}this.current=this.stateStack.pop(),this.ctx.restore(),this.inSMaskMode&&va(this.suspendedCtx,this.ctx),this.checkSMaskState(),this.pendingClip=null,this._cachedScaleForStroking[0]=-1,this._cachedGetSinglePixelWidth=null}transform(e,t,s,r,o,l,u){this.dependencyTracker?.recordIncrementalData("transform",e),this.ctx.transform(t,s,r,o,l,u),this._cachedScaleForStroking[0]=-1,this._cachedGetSinglePixelWidth=null}constructPath(e,t,s,r){let[o]=s;if(!r){o||=s[0]=new Path2D,this[t](e,o);return}if(this.dependencyTracker!==null){const l=t===dr.stroke?this.current.lineWidth/2:0;this.dependencyTracker.resetBBox(e).recordBBox(e,this.ctx,r[0]-l,r[2]+l,r[1]-l,r[3]+l).recordDependencies(e,["transform"])}if(!(o instanceof Path2D)){const l=s[0]=new Path2D;for(let u=0,h=o.length;u<h;)switch(o[u++]){case dl.moveTo:l.moveTo(o[u++],o[u++]);break;case dl.lineTo:l.lineTo(o[u++],o[u++]);break;case dl.curveTo:l.bezierCurveTo(o[u++],o[u++],o[u++],o[u++],o[u++],o[u++]);break;case dl.closePath:l.closePath();break;default:ve(`Unrecognized drawing path operator: ${o[u-1]}`);break}o=l}ie.axialAlignedBoundingBox(r,et(this.ctx),this.current.minMax),this[t](e,o),this._pathStartIdx=e}closePath(e){this.ctx.closePath()}stroke(e,t,s=!0){const r=this.ctx,o=this.current.strokeColor;if(r.globalAlpha=this.current.strokeAlpha,this.contentVisible)if(typeof o=="object"&&o?.getPattern){const l=o.isModifyingCurrentTransform()?r.getTransform():null;if(r.save(),r.strokeStyle=o.getPattern(r,this,Nn(r),Mt.STROKE,e),l){const u=new Path2D;u.addPath(t,r.getTransform().invertSelf().multiplySelf(l)),t=u}this.rescaleAndStroke(t,!1),r.restore()}else this.rescaleAndStroke(t,!0);this.dependencyTracker?.recordDependencies(e,vn.stroke),s&&this.consumePath(e,t,this.current.getClippedPathBoundingBox(Mt.STROKE,et(this.ctx))),r.globalAlpha=this.current.fillAlpha}closeStroke(e,t){this.stroke(e,t)}fill(e,t,s=!0){const r=this.ctx,o=this.current.fillColor,l=this.current.patternFill;let u=!1;if(l){const p=o.isModifyingCurrentTransform()?r.getTransform():null;if(this.dependencyTracker?.save(e),r.save(),r.fillStyle=o.getPattern(r,this,Nn(r),Mt.FILL,e),p){const m=new Path2D;m.addPath(t,r.getTransform().invertSelf().multiplySelf(p)),t=m}u=!0}const h=this.current.getClippedPathBoundingBox();this.contentVisible&&h!==null&&(this.pendingEOFill?(r.fill(t,"evenodd"),this.pendingEOFill=!1):r.fill(t)),this.dependencyTracker?.recordDependencies(e,vn.fill),u&&(r.restore(),this.dependencyTracker?.restore(e)),s&&this.consumePath(e,t,h)}eoFill(e,t){this.pendingEOFill=!0,this.fill(e,t)}fillStroke(e,t){this.fill(e,t,!1),this.stroke(e,t,!1),this.consumePath(e,t)}eoFillStroke(e,t){this.pendingEOFill=!0,this.fillStroke(e,t)}closeFillStroke(e,t){this.fillStroke(e,t)}closeEOFillStroke(e,t){this.pendingEOFill=!0,this.fillStroke(e,t)}endPath(e,t){this.consumePath(e,t)}rawFillPath(e,t){this.ctx.fill(t),this.dependencyTracker?.recordDependencies(e,vn.rawFillPath).recordOperation(e)}clip(e){this.dependencyTracker?.recordFutureForcedDependency("clipMode",e),this.pendingClip=mw}eoClip(e){this.dependencyTracker?.recordFutureForcedDependency("clipMode",e),this.pendingClip=zg}beginText(e){this.current.textMatrix=null,this.current.textMatrixScale=1,this.current.x=this.current.lineX=0,this.current.y=this.current.lineY=0,this.dependencyTracker?.recordOpenMarker(e).resetIncrementalData("sameLineText").resetIncrementalData("moveText",e)}endText(e){const t=this.pendingTextPaths,s=this.ctx;if(this.dependencyTracker){const{dependencyTracker:r}=this;t!==void 0&&r.recordFutureForcedDependency("textClip",r.getOpenMarker()).recordFutureForcedDependency("textClip",e),r.recordCloseMarker(e)}if(t!==void 0){const r=new Path2D,o=s.getTransform().invertSelf();for(const{transform:l,x:u,y:h,fontSize:p,path:m}of t)m&&r.addPath(m,new DOMMatrix(l).preMultiplySelf(o).translate(u,h).scale(p,-p));s.clip(r)}delete this.pendingTextPaths}setCharSpacing(e,t){this.dependencyTracker?.recordSimpleData("charSpacing",e),this.current.charSpacing=t}setWordSpacing(e,t){this.dependencyTracker?.recordSimpleData("wordSpacing",e),this.current.wordSpacing=t}setHScale(e,t){this.dependencyTracker?.recordSimpleData("hScale",e),this.current.textHScale=t/100}setLeading(e,t){this.dependencyTracker?.recordSimpleData("leading",e),this.current.leading=-t}setFont(e,t,s){this.dependencyTracker?.recordSimpleData("font",e).recordSimpleDataFromNamed("fontObj",t,e);const r=this.commonObjs.get(t),o=this.current;if(!r)throw new Error(`Can't find font for ${t}`);if(o.fontMatrix=r.fontMatrix||xd,(o.fontMatrix[0]===0||o.fontMatrix[3]===0)&&ve("Invalid font matrix for font "+t),s<0?(s=-s,o.fontDirection=-1):o.fontDirection=1,this.current.font=r,this.current.fontSize=s,r.isType3Font)return;const l=r.loadedName||"sans-serif",u=r.systemFontInfo?.css||`"${l}", ${r.fallbackName}`;let h="normal";r.black?h="900":r.bold&&(h="bold");const p=r.italic?"italic":"normal";let m=s;s<Ng?m=Ng:s>Ig&&(m=Ig),this.current.fontSizeScale=s/m,this.ctx.font=`${p} ${h} ${m}px ${u}`}setTextRenderingMode(e,t){this.dependencyTracker?.recordSimpleData("textRenderingMode",e),this.current.textRenderingMode=t}setTextRise(e,t){this.dependencyTracker?.recordSimpleData("textRise",e),this.current.textRise=t}moveText(e,t,s){this.dependencyTracker?.resetIncrementalData("sameLineText").recordIncrementalData("moveText",e),this.current.x=this.current.lineX+=t,this.current.y=this.current.lineY+=s}setLeadingMoveText(e,t,s){this.setLeading(e,-s),this.moveText(e,t,s)}setTextMatrix(e,t){this.dependencyTracker?.recordSimpleData("textMatrix",e);const{current:s}=this;s.textMatrix=t,s.textMatrixScale=Math.hypot(t[0],t[1]),s.x=s.lineX=0,s.y=s.lineY=0}nextLine(e){this.moveText(e,0,this.current.leading),this.dependencyTracker?.recordIncrementalData("moveText",this.dependencyTracker.getSimpleIndex("leading")??e)}#i(e,t,s){const r=new Path2D;return r.addPath(e,new DOMMatrix(s).invertSelf().multiplySelf(t)),r}paintChar(e,t,s,r,o,l){const u=this.ctx,h=this.current,p=h.font,m=h.textRenderingMode,b=h.fontSize/h.fontSizeScale,v=m&Dt.FILL_STROKE_MASK,A=!!(m&Dt.ADD_TO_PATH_FLAG),x=h.patternFill&&!p.missingFile,C=h.patternStroke&&!p.missingFile;let T;if((p.disableFontFace||A||x||C)&&!p.missingFile&&(T=p.getPathGenerator(this.commonObjs,t)),T&&(p.disableFontFace||x||C)){u.save(),u.translate(s,r),u.scale(b,-b),this.dependencyTracker?.recordCharacterBBox(e,u,p);let w;if(v===Dt.FILL||v===Dt.FILL_STROKE)if(o){w=u.getTransform(),u.setTransform(...o);const _=this.#i(T,w,o);u.fill(_)}else u.fill(T);if(v===Dt.STROKE||v===Dt.FILL_STROKE)if(l){w||=u.getTransform(),u.setTransform(...l);const{a:_,b:R,c:O,d:k}=w,j=ie.inverseTransform(l),F=ie.transform([_,R,O,k,0,0],j);ie.singularValueDecompose2dScale(F,on),u.lineWidth*=Math.max(on[0],on[1])/b,u.stroke(this.#i(T,w,l))}else u.lineWidth/=b,u.stroke(T);u.restore()}else(v===Dt.FILL||v===Dt.FILL_STROKE)&&(u.fillText(t,s,r),this.dependencyTracker?.recordCharacterBBox(e,u,p,b,s,r,()=>u.measureText(t))),(v===Dt.STROKE||v===Dt.FILL_STROKE)&&(this.dependencyTracker&&this.dependencyTracker?.recordCharacterBBox(e,u,p,b,s,r,()=>u.measureText(t)).recordDependencies(e,vn.stroke),u.strokeText(t,s,r));A&&((this.pendingTextPaths||=[]).push({transform:et(u),x:s,y:r,fontSize:b,path:T}),this.dependencyTracker?.recordCharacterBBox(e,u,p,b,s,r))}get isFontSubpixelAAEnabled(){const{context:e}=this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled",10,10);e.scale(1.5,1),e.fillText("I",0,10);const t=e.getImageData(0,0,10,10).data;let s=!1;for(let r=3;r<t.length;r+=4)if(t[r]>0&&t[r]<255){s=!0;break}return Se(this,"isFontSubpixelAAEnabled",s)}showText(e,t){this.dependencyTracker&&(this.dependencyTracker.recordDependencies(e,vn.showText).resetBBox(e),this.current.textRenderingMode&Dt.ADD_TO_PATH_FLAG&&this.dependencyTracker.recordFutureForcedDependency("textClip",e).inheritPendingDependenciesAsFutureForcedDependencies());const s=this.current,r=s.font;if(r.isType3Font){this.showType3Text(e,t),this.dependencyTracker?.recordShowTextOperation(e);return}const o=s.fontSize;if(o===0){this.dependencyTracker?.recordOperation(e);return}const l=this.ctx,u=s.fontSizeScale,h=s.charSpacing,p=s.wordSpacing,m=s.fontDirection,b=s.textHScale*m,v=t.length,A=r.vertical,x=A?1:-1,C=r.defaultVMetrics,T=o*s.fontMatrix[0],w=s.textRenderingMode===Dt.FILL&&!r.disableFontFace&&!s.patternFill;l.save(),s.textMatrix&&l.transform(...s.textMatrix),l.translate(s.x,s.y+s.textRise),m>0?l.scale(b,-1):l.scale(b,1);let _,R;if(s.patternFill){l.save();const q=s.fillColor.getPattern(l,this,Nn(l),Mt.FILL,e);_=et(l),l.restore(),l.fillStyle=q}if(s.patternStroke){l.save();const q=s.strokeColor.getPattern(l,this,Nn(l),Mt.STROKE,e);R=et(l),l.restore(),l.strokeStyle=q}let O=s.lineWidth;const k=s.textMatrixScale;if(k===0||O===0){const q=s.textRenderingMode&Dt.FILL_STROKE_MASK;(q===Dt.STROKE||q===Dt.FILL_STROKE)&&(O=this.getSinglePixelWidth())}else O/=k;if(u!==1&&(l.scale(u,u),O/=u),l.lineWidth=O,r.isInvalidPDFjsFont){const q=[];let V=0;for(const J of t)q.push(J.unicode),V+=J.width;const Q=q.join("");if(l.fillText(Q,0,0),this.dependencyTracker!==null){const J=l.measureText(Q);this.dependencyTracker.recordBBox(e,this.ctx,-J.actualBoundingBoxLeft,J.actualBoundingBoxRight,-J.actualBoundingBoxAscent,J.actualBoundingBoxDescent).recordShowTextOperation(e)}s.x+=V*T*b,l.restore(),this.compose();return}let j=0,F;for(F=0;F<v;++F){const q=t[F];if(typeof q=="number"){j+=x*q*o/1e3;continue}let V=!1;const Q=(q.isSpace?p:0)+h,J=q.fontChar,le=q.accent;let de,ae,ce=q.width;if(A){const ee=q.vmetric||C,he=-(q.vmetric?ee[1]:ce*.5)*T,M=ee[2]*T;ce=ee?-ee[0]:ce,de=he/u,ae=(j+M)/u}else de=j/u,ae=0;let N;if(r.remeasure&&ce>0){N=l.measureText(J);const ee=N.width*1e3/o*u;if(ce<ee&&this.isFontSubpixelAAEnabled){const he=ce/ee;V=!0,l.save(),l.scale(he,1),de/=he}else ce!==ee&&(de+=(ce-ee)/2e3*o/u)}if(this.contentVisible&&(q.isInFont||r.missingFile)){if(w&&!le)l.fillText(J,de,ae),this.dependencyTracker?.recordCharacterBBox(e,l,N?{bbox:null}:r,o/u,de,ae,()=>N??l.measureText(J));else if(this.paintChar(e,J,de,ae,_,R),le){const ee=de+o*le.offset.x/u,he=ae-o*le.offset.y/u;this.paintChar(e,le.fontChar,ee,he,_,R)}}const G=A?ce*T-Q*m:ce*T+Q*m;j+=G,V&&l.restore()}A?s.y-=j:s.x+=j*b,l.restore(),this.compose(),this.dependencyTracker?.recordShowTextOperation(e)}showType3Text(e,t){const s=this.ctx,r=this.current,o=r.font,l=r.fontSize,u=r.fontDirection,h=o.vertical?1:-1,p=r.charSpacing,m=r.wordSpacing,b=r.textHScale*u,v=r.fontMatrix||xd,A=t.length,x=r.textRenderingMode===Dt.INVISIBLE;let C,T,w,_;if(x||l===0)return;this._cachedScaleForStroking[0]=-1,this._cachedGetSinglePixelWidth=null,s.save(),r.textMatrix&&s.transform(...r.textMatrix),s.translate(r.x,r.y+r.textRise),s.scale(b,u);const R=this.dependencyTracker;for(this.dependencyTracker=R?new Dl(R,e):null,C=0;C<A;++C){if(T=t[C],typeof T=="number"){_=h*T*l/1e3,this.ctx.translate(_,0),r.x+=_*b;continue}const O=(T.isSpace?m:0)+p,k=o.charProcOperatorList[T.operatorListId];k?this.contentVisible&&(this.save(),s.scale(l,l),s.transform(...v),this.executeOperatorList(k),this.restore()):ve(`Type3 character "${T.operatorListId}" is not available.`);const j=[T.width,0];ie.applyTransform(j,v),w=j[0]*l+O,s.translate(w,0),r.x+=w*b}s.restore(),R&&(this.dependencyTracker=R)}setCharWidth(e,t,s){}setCharWidthAndBounds(e,t,s,r,o,l,u){const h=new Path2D;h.rect(r,o,l-r,u-o),this.ctx.clip(h),this.dependencyTracker?.recordBBox(e,this.ctx,r,l,o,u).recordClipBox(e,this.ctx,r,l,o,u),this.endPath(e)}getColorN_Pattern(e,t){let s;if(t[0]==="TilingPattern"){const r=this.baseTransform||et(this.ctx),o={createCanvasGraphics:(l,u)=>new rr(l,this.commonObjs,this.objs,this.canvasFactory,this.filterFactory,{optionalContentConfig:this.optionalContentConfig,markedContentStack:this.markedContentStack},void 0,void 0,this.dependencyTracker?new Dl(this.dependencyTracker,u,!0):null)};s=new eh(t,this.ctx,o,r)}else s=this._getPattern(e,t[1],t[2]);return s}setStrokeColorN(e,...t){this.dependencyTracker?.recordSimpleData("strokeColor",e),this.current.strokeColor=this.getColorN_Pattern(e,t),this.current.patternStroke=!0}setFillColorN(e,...t){this.dependencyTracker?.recordSimpleData("fillColor",e),this.current.fillColor=this.getColorN_Pattern(e,t),this.current.patternFill=!0}setStrokeRGBColor(e,t){this.dependencyTracker?.recordSimpleData("strokeColor",e),this.ctx.strokeStyle=this.current.strokeColor=t,this.current.patternStroke=!1}setStrokeTransparent(e){this.dependencyTracker?.recordSimpleData("strokeColor",e),this.ctx.strokeStyle=this.current.strokeColor="transparent",this.current.patternStroke=!1}setFillRGBColor(e,t){this.dependencyTracker?.recordSimpleData("fillColor",e),this.ctx.fillStyle=this.current.fillColor=t,this.current.patternFill=!1}setFillTransparent(e){this.dependencyTracker?.recordSimpleData("fillColor",e),this.ctx.fillStyle=this.current.fillColor="transparent",this.current.patternFill=!1}_getPattern(e,t,s=null){let r;return this.cachedPatterns.has(t)?r=this.cachedPatterns.get(t):(r=lw(this.getObject(e,t)),this.cachedPatterns.set(t,r)),s&&(r.matrix=s),r}shadingFill(e,t){if(!this.contentVisible)return;const s=this.ctx;this.save(e);const r=this._getPattern(e,t);s.fillStyle=r.getPattern(s,this,Nn(s),Mt.SHADING,e);const o=Nn(s);if(o){const{width:l,height:u}=s.canvas,h=ir.slice();ie.axialAlignedBoundingBox([0,0,l,u],o,h);const[p,m,b,v]=h;this.ctx.fillRect(p,m,b-p,v-m)}else this.ctx.fillRect(-1e10,-1e10,2e10,2e10);this.dependencyTracker?.resetBBox(e).recordFullPageBBox(e).recordDependencies(e,vn.transform).recordDependencies(e,vn.fill).recordOperation(e),this.compose(this.current.getClippedPathBoundingBox()),this.restore(e)}beginInlineImage(){qe("Should not call beginInlineImage")}beginImageData(){qe("Should not call beginImageData")}paintFormXObjectBegin(e,t,s){if(this.contentVisible&&(this.save(e),this.baseTransformStack.push(this.baseTransform),t&&this.transform(e,...t),this.baseTransform=et(this.ctx),s)){ie.axialAlignedBoundingBox(s,this.baseTransform,this.current.minMax);const[r,o,l,u]=s,h=new Path2D;h.rect(r,o,l-r,u-o),this.ctx.clip(h),this.dependencyTracker?.recordClipBox(e,this.ctx,r,l,o,u),this.endPath(e)}}paintFormXObjectEnd(e){this.contentVisible&&(this.restore(e),this.baseTransform=this.baseTransformStack.pop())}beginGroup(e,t){if(!this.contentVisible)return;this.save(e),this.inSMaskMode&&(this.endSMaskMode(),this.current.activeSMask=null);const s=this.ctx;t.isolated||Ol("TODO: Support non-isolated groups."),t.knockout&&ve("Knockout groups not supported.");const r=et(s);if(t.matrix&&s.transform(...t.matrix),!t.bbox)throw new Error("Bounding box is required.");let o=ir.slice();ie.axialAlignedBoundingBox(t.bbox,et(s),o);const l=[0,0,s.canvas.width,s.canvas.height];o=ie.intersect(o,l)||[0,0,0,0];const u=Math.floor(o[0]),h=Math.floor(o[1]),p=Math.max(Math.ceil(o[2])-u,1),m=Math.max(Math.ceil(o[3])-h,1);this.current.startNewPathAndClipBox([0,0,p,m]);let b="groupAt"+this.groupLevel;t.smask&&(b+="_smask_"+this.smaskCounter++%2);const v=this.cachedCanvases.getCanvas(b,p,m),A=v.context;A.translate(-u,-h),A.transform(...r);let x=new Path2D;const[C,T,w,_]=t.bbox;if(x.rect(C,T,w-C,_-T),t.matrix){const R=new Path2D;R.addPath(x,new DOMMatrix(t.matrix)),x=R}A.clip(x),t.smask&&this.smaskStack.push({canvas:v.canvas,context:A,offsetX:u,offsetY:h,subtype:t.smask.subtype,backdrop:t.smask.backdrop,transferMap:t.smask.transferMap||null,startTransformInverse:null}),(!t.smask||this.dependencyTracker)&&(s.setTransform(1,0,0,1,0,0),s.translate(u,h),s.save()),va(s,A),this.ctx=A,this.dependencyTracker?.inheritSimpleDataAsFutureForcedDependencies(["fillAlpha","strokeAlpha","globalCompositeOperation"]).pushBaseTransform(s),this.setGState(e,[["BM","source-over"],["ca",1],["CA",1]]),this.groupStack.push(s),this.groupLevel++}endGroup(e,t){if(!this.contentVisible)return;this.groupLevel--;const s=this.ctx,r=this.groupStack.pop();if(this.ctx=r,this.ctx.imageSmoothingEnabled=!1,this.dependencyTracker?.popBaseTransform(),t.smask)this.tempSMask=this.smaskStack.pop(),this.restore(e),this.dependencyTracker&&this.ctx.restore();else{this.ctx.restore();const o=et(this.ctx);this.restore(e),this.ctx.save(),this.ctx.setTransform(...o);const l=ir.slice();ie.axialAlignedBoundingBox([0,0,s.canvas.width,s.canvas.height],o,l),this.ctx.drawImage(s.canvas,0,0),this.ctx.restore(),this.compose(l)}}beginAnnotation(e,t,s,r,o,l){if(this.#e(),bl(this.ctx),this.ctx.save(),this.save(e),this.baseTransform&&this.ctx.setTransform(...this.baseTransform),s){const u=s[2]-s[0],h=s[3]-s[1];if(l&&this.annotationCanvasMap){r=r.slice(),r[4]-=s[0],r[5]-=s[1],s=s.slice(),s[0]=s[1]=0,s[2]=u,s[3]=h,ie.singularValueDecompose2dScale(et(this.ctx),on);const{viewportScale:p}=this,m=Math.ceil(u*this.outputScaleX*p),b=Math.ceil(h*this.outputScaleY*p);this.annotationCanvas=this.canvasFactory.create(m,b);const{canvas:v,context:A}=this.annotationCanvas;this.annotationCanvasMap.set(t,v),this.annotationCanvas.savedCtx=this.ctx,this.ctx=A,this.ctx.save(),this.ctx.setTransform(on[0],0,0,-on[1],0,h*on[1]),bl(this.ctx)}else{bl(this.ctx),this.endPath(e);const p=new Path2D;p.rect(s[0],s[1],u,h),this.ctx.clip(p)}}this.current=new Bg(this.ctx.canvas.width,this.ctx.canvas.height),this.transform(e,...r),this.transform(e,...o)}endAnnotation(e){this.annotationCanvas&&(this.ctx.restore(),this.#t(),this.ctx=this.annotationCanvas.savedCtx,delete this.annotationCanvas.savedCtx,delete this.annotationCanvas)}paintImageMaskXObject(e,t){if(!this.contentVisible)return;const s=t.count;t=this.getObject(e,t.data,t),t.count=s;const r=this.ctx,o=this._createMaskCanvas(e,t),l=o.canvas;r.save(),r.setTransform(1,0,0,1,0,0),r.drawImage(l,o.offsetX,o.offsetY),this.dependencyTracker?.resetBBox(e).recordBBox(e,this.ctx,o.offsetX,o.offsetX+l.width,o.offsetY,o.offsetY+l.height).recordOperation(e),r.restore(),this.compose()}paintImageMaskXObjectRepeat(e,t,s,r=0,o=0,l,u){if(!this.contentVisible)return;t=this.getObject(e,t.data,t);const h=this.ctx;h.save();const p=et(h);h.transform(s,r,o,l,0,0);const m=this._createMaskCanvas(e,t);h.setTransform(1,0,0,1,m.offsetX-p[4],m.offsetY-p[5]),this.dependencyTracker?.resetBBox(e);for(let b=0,v=u.length;b<v;b+=2){const A=ie.transform(p,[s,r,o,l,u[b],u[b+1]]);h.drawImage(m.canvas,A[4],A[5]),this.dependencyTracker?.recordBBox(e,this.ctx,A[4],A[4]+m.canvas.width,A[5],A[5]+m.canvas.height)}h.restore(),this.compose(),this.dependencyTracker?.recordOperation(e)}paintImageMaskXObjectGroup(e,t){if(!this.contentVisible)return;const s=this.ctx,r=this.current.fillColor,o=this.current.patternFill;this.dependencyTracker?.resetBBox(e).recordDependencies(e,vn.transformAndFill);for(const l of t){const{data:u,width:h,height:p,transform:m}=l,b=this.cachedCanvases.getCanvas("maskCanvas",h,p),v=b.context;v.save();const A=this.getObject(e,u,l);Ug(v,A),v.globalCompositeOperation="source-in",v.fillStyle=o?r.getPattern(v,this,Nn(s),Mt.FILL,e):r,v.fillRect(0,0,h,p),v.restore(),s.save(),s.transform(...m),s.scale(1,-1),yl(s,b.canvas,0,0,h,p,0,-1,1,1),this.dependencyTracker?.recordBBox(e,s,0,h,0,p),s.restore()}this.compose(),this.dependencyTracker?.recordOperation(e)}paintImageXObject(e,t){if(!this.contentVisible)return;const s=this.getObject(e,t);if(!s){ve("Dependent image isn't ready yet");return}this.paintInlineImageXObject(e,s)}paintImageXObjectRepeat(e,t,s,r,o){if(!this.contentVisible)return;const l=this.getObject(e,t);if(!l){ve("Dependent image isn't ready yet");return}const u=l.width,h=l.height,p=[];for(let m=0,b=o.length;m<b;m+=2)p.push({transform:[s,0,0,r,o[m],o[m+1]],x:0,y:0,w:u,h});this.paintInlineImageXObjectGroup(e,l,p)}applyTransferMapsToCanvas(e){return this.current.transferMaps!=="none"&&(e.filter=this.current.transferMaps,e.drawImage(e.canvas,0,0),e.filter="none"),e.canvas}applyTransferMapsToBitmap(e){if(this.current.transferMaps==="none")return e.bitmap;const{bitmap:t,width:s,height:r}=e,o=this.cachedCanvases.getCanvas("inlineImage",s,r),l=o.context;return l.filter=this.current.transferMaps,l.drawImage(t,0,0),l.filter="none",o.canvas}paintInlineImageXObject(e,t){if(!this.contentVisible)return;const s=t.width,r=t.height,o=this.ctx;this.save(e);const{filter:l}=o;l!=="none"&&l!==""&&(o.filter="none"),o.scale(1/s,-1/r);let u;if(t.bitmap)u=this.applyTransferMapsToBitmap(t);else if(typeof HTMLElement=="function"&&t instanceof HTMLElement||!t.data)u=t;else{const m=this.cachedCanvases.getCanvas("inlineImage",s,r).context;Fg(m,t),u=this.applyTransferMapsToCanvas(m)}const h=this._scaleImage(u,Nn(o));o.imageSmoothingEnabled=Hg(et(o),t.interpolate),this.dependencyTracker?.resetBBox(e).recordBBox(e,o,0,s,-r,0).recordDependencies(e,vn.imageXObject).recordOperation(e),yl(o,h.img,0,0,h.paintWidth,h.paintHeight,0,-r,s,r),this.compose(),this.restore(e)}paintInlineImageXObjectGroup(e,t,s){if(!this.contentVisible)return;const r=this.ctx;let o;if(t.bitmap)o=t.bitmap;else{const l=t.width,u=t.height,p=this.cachedCanvases.getCanvas("inlineImage",l,u).context;Fg(p,t),o=this.applyTransferMapsToCanvas(p)}this.dependencyTracker?.resetBBox(e);for(const l of s)r.save(),r.transform(...l.transform),r.scale(1,-1),yl(r,o,l.x,l.y,l.w,l.h,0,-1,1,1),this.dependencyTracker?.recordBBox(e,r,0,1,-1,0),r.restore();this.dependencyTracker?.recordOperation(e),this.compose()}paintSolidColorImageMask(e){this.contentVisible&&(this.dependencyTracker?.resetBBox(e).recordBBox(e,this.ctx,0,1,0,1).recordDependencies(e,vn.fill).recordOperation(e),this.ctx.fillRect(0,0,1,1),this.compose())}markPoint(e,t){}markPointProps(e,t,s){}beginMarkedContent(e,t){this.dependencyTracker?.beginMarkedContent(e),this.markedContentStack.push({visible:!0})}beginMarkedContentProps(e,t,s){this.dependencyTracker?.beginMarkedContent(e),t==="OC"?this.markedContentStack.push({visible:this.optionalContentConfig.isVisible(s)}):this.markedContentStack.push({visible:!0}),this.contentVisible=this.isContentVisible()}endMarkedContent(e){this.dependencyTracker?.endMarkedContent(e),this.markedContentStack.pop(),this.contentVisible=this.isContentVisible()}beginCompat(e){}endCompat(e){}consumePath(e,t,s){const r=this.current.isEmptyClip();this.pendingClip&&this.current.updateClipFromPath(),this.pendingClip||this.compose(s);const o=this.ctx;this.pendingClip?(r||(this.pendingClip===zg?o.clip(t,"evenodd"):o.clip(t)),this.pendingClip=null,this.dependencyTracker?.bboxToClipBoxDropOperation(e).recordFutureForcedDependency("clipPath",e)):this.dependencyTracker?.recordOperation(e),this.current.startNewPathAndClipBox(this.current.clipBox)}getSinglePixelWidth(){if(!this._cachedGetSinglePixelWidth){const e=et(this.ctx);if(e[1]===0&&e[2]===0)this._cachedGetSinglePixelWidth=1/Math.min(Math.abs(e[0]),Math.abs(e[3]));else{const t=Math.abs(e[0]*e[3]-e[2]*e[1]),s=Math.hypot(e[0],e[2]),r=Math.hypot(e[1],e[3]);this._cachedGetSinglePixelWidth=Math.max(s,r)/t}}return this._cachedGetSinglePixelWidth}getScaleForStroking(){if(this._cachedScaleForStroking[0]===-1){const{lineWidth:e}=this.current,{a:t,b:s,c:r,d:o}=this.ctx.getTransform();let l,u;if(s===0&&r===0){const h=Math.abs(t),p=Math.abs(o);if(h===p)if(e===0)l=u=1/h;else{const m=h*e;l=u=m<1?1/m:1}else if(e===0)l=1/h,u=1/p;else{const m=h*e,b=p*e;l=m<1?1/m:1,u=b<1?1/b:1}}else{const h=Math.abs(t*o-s*r),p=Math.hypot(t,s),m=Math.hypot(r,o);if(e===0)l=m/h,u=p/h;else{const b=e*h;l=m>b?m/b:1,u=p>b?p/b:1}}this._cachedScaleForStroking[0]=l,this._cachedScaleForStroking[1]=u}return this._cachedScaleForStroking}rescaleAndStroke(e,t){const{ctx:s,current:{lineWidth:r}}=this,[o,l]=this.getScaleForStroking();if(o===l){s.lineWidth=(r||1)*o,s.stroke(e);return}const u=s.getLineDash();t&&s.save(),s.scale(o,l),yd.a=1/o,yd.d=1/l;const h=new Path2D;if(h.addPath(e,yd),u.length>0){const p=Math.max(o,l);s.setLineDash(u.map(m=>m/p)),s.lineDashOffset/=p}s.lineWidth=r||1,s.stroke(h),t&&s.restore()}isContentVisible(){for(let e=this.markedContentStack.length-1;e>=0;e--)if(!this.markedContentStack[e].visible)return!1;return!0}}for(const d in dr)rr.prototype[d]!==void 0&&(rr.prototype[dr[d]]=rr.prototype[d]);class ar{#e;#t;#i;static strings=["fontFamily","fontWeight","italicAngle"];static write(e){const t=new TextEncoder,s={};let r=0;for(const p of ar.strings){const m=t.encode(e[p]);s[p]=m,r+=4+m.length}const o=new ArrayBuffer(r),l=new Uint8Array(o),u=new DataView(o);let h=0;for(const p of ar.strings){const m=s[p],b=m.length;u.setUint32(h,b),l.set(m,h+4),h+=4+b}return Me(h===o.byteLength,"CssFontInfo.write: Buffer overflow"),o}constructor(e){this.#e=e,this.#t=new DataView(this.#e),this.#i=new TextDecoder}#n(e){Me(e<ar.strings.length,"Invalid string index");let t=0;for(let r=0;r<e;r++)t+=this.#t.getUint32(t)+4;const s=this.#t.getUint32(t);return this.#i.decode(new Uint8Array(this.#e,t+4,s))}get fontFamily(){return this.#n(0)}get fontWeight(){return this.#n(1)}get italicAngle(){return this.#n(2)}}class or{#e;#t;#i;static strings=["css","loadedName","baseFontName","src"];static write(e){const t=new TextEncoder,s={};let r=0;for(const v of or.strings){const A=t.encode(e[v]);s[v]=A,r+=4+A.length}r+=4;let o,l,u=1+r;e.style&&(o=t.encode(e.style.style),l=t.encode(e.style.weight),u+=4+o.length+4+l.length);const h=new ArrayBuffer(u),p=new Uint8Array(h),m=new DataView(h);let b=0;m.setUint8(b++,e.guessFallback?1:0),m.setUint32(b,0),b+=4,r=0;for(const v of or.strings){const A=s[v],x=A.length;r+=4+x,m.setUint32(b,x),p.set(A,b+4),b+=4+x}return m.setUint32(b-r-4,r),e.style&&(m.setUint32(b,o.length),p.set(o,b+4),b+=4+o.length,m.setUint32(b,l.length),p.set(l,b+4),b+=4+l.length),Me(b<=h.byteLength,"SubstitionInfo.write: Buffer overflow"),h.transferToFixedLength(b)}constructor(e){this.#e=e,this.#t=new DataView(this.#e),this.#i=new TextDecoder}get guessFallback(){return this.#t.getUint8(0)!==0}#n(e){Me(e<or.strings.length,"Invalid string index");let t=5;for(let r=0;r<e;r++)t+=this.#t.getUint32(t)+4;const s=this.#t.getUint32(t);return this.#i.decode(new Uint8Array(this.#e,t+4,s))}get css(){return this.#n(0)}get loadedName(){return this.#n(1)}get baseFontName(){return this.#n(2)}get src(){return this.#n(3)}get style(){let e=1;e+=4+this.#t.getUint32(e);const t=this.#t.getUint32(e),s=this.#i.decode(new Uint8Array(this.#e,e+4,t));e+=4+t;const r=this.#t.getUint32(e),o=this.#i.decode(new Uint8Array(this.#e,e+4,r));return{style:s,weight:o}}}class Ue{static bools=["black","bold","disableFontFace","fontExtraProperties","isInvalidPDFjsFont","isType3Font","italic","missingFile","remeasure","vertical"];static numbers=["ascent","defaultWidth","descent"];static strings=["fallbackName","loadedName","mimetype","name"];static#e=Math.ceil(this.bools.length*2/8);static#t=this.#e+this.numbers.length*8;static#i=this.#t+1+8;static#n=this.#i+1+48;static#a=this.#n+1+6;#s;#r;#o;constructor({data:e,extra:t}){this.#s=e,this.#r=new TextDecoder,this.#o=new DataView(this.#s),t&&Object.assign(this,t)}#c(e){Me(e<Ue.bools.length,"Invalid boolean index");const t=Math.floor(e/4),s=e*2%8,r=this.#o.getUint8(t)>>s&3;return r===0?void 0:r===2}get black(){return this.#c(0)}get bold(){return this.#c(1)}get disableFontFace(){return this.#c(2)}get fontExtraProperties(){return this.#c(3)}get isInvalidPDFjsFont(){return this.#c(4)}get isType3Font(){return this.#c(5)}get italic(){return this.#c(6)}get missingFile(){return this.#c(7)}get remeasure(){return this.#c(8)}get vertical(){return this.#c(9)}#l(e){return Me(e<Ue.numbers.length,"Invalid number index"),this.#o.getFloat64(Ue.#e+e*8)}get ascent(){return this.#l(0)}get defaultWidth(){return this.#l(1)}get descent(){return this.#l(2)}get bbox(){let e=Ue.#t;if(this.#o.getUint8(e)===0)return;e+=1;const s=[];for(let r=0;r<4;r++)s.push(this.#o.getInt16(e,!0)),e+=2;return s}get fontMatrix(){let e=Ue.#i;if(this.#o.getUint8(e)===0)return;e+=1;const s=[];for(let r=0;r<6;r++)s.push(this.#o.getFloat64(e,!0)),e+=8;return s}get defaultVMetrics(){let e=Ue.#n;if(this.#o.getUint8(e)===0)return;e+=1;const s=[];for(let r=0;r<3;r++)s.push(this.#o.getInt16(e,!0)),e+=2;return s}#h(e){Me(e<Ue.strings.length,"Invalid string index");let t=Ue.#a+4;for(let o=0;o<e;o++)t+=this.#o.getUint32(t)+4;const s=this.#o.getUint32(t),r=new Uint8Array(s);return r.set(new Uint8Array(this.#s,t+4,s)),this.#r.decode(r)}get fallbackName(){return this.#h(0)}get loadedName(){return this.#h(1)}get mimetype(){return this.#h(2)}get name(){return this.#h(3)}get data(){let e=Ue.#a;const t=this.#o.getUint32(e);e+=4+t;const s=this.#o.getUint32(e);e+=4+s;const r=this.#o.getUint32(e);e+=4+r;const o=this.#o.getUint32(e);if(o!==0)return new Uint8Array(this.#s,e+4,o)}clearData(){let e=Ue.#a;const t=this.#o.getUint32(e);e+=4+t;const s=this.#o.getUint32(e);e+=4+s;const r=this.#o.getUint32(e);e+=4+r;const o=this.#o.getUint32(e);new Uint8Array(this.#s,e+4,o).fill(0),this.#o.setUint32(e,0)}get cssFontInfo(){let e=Ue.#a;const t=this.#o.getUint32(e);e+=4+t;const s=this.#o.getUint32(e);e+=4+s;const r=this.#o.getUint32(e);if(r===0)return null;const o=new Uint8Array(r);return o.set(new Uint8Array(this.#s,e+4,r)),new ar(o.buffer)}get systemFontInfo(){let e=Ue.#a;const t=this.#o.getUint32(e);e+=4+t;const s=this.#o.getUint32(e);if(s===0)return null;const r=new Uint8Array(s);return r.set(new Uint8Array(this.#s,e+4,s)),new or(r.buffer)}static write(e){const t=e.systemFontInfo?or.write(e.systemFontInfo):null,s=e.cssFontInfo?ar.write(e.cssFontInfo):null,r=new TextEncoder,o={};let l=0;for(const C of Ue.strings)o[C]=r.encode(e[C]),l+=4+o[C].length;const u=Ue.#a+4+l+4+(t?t.byteLength:0)+4+(s?s.byteLength:0)+4+(e.data?e.data.length:0),h=new ArrayBuffer(u),p=new Uint8Array(h),m=new DataView(h);let b=0;const v=Ue.bools.length;let A=0,x=0;for(let C=0;C<v;C++){const T=e[Ue.bools[C]];A|=(T===void 0?0:T?2:1)<<x,x+=2,(x===8||C===v-1)&&(m.setUint8(b++,A),A=0,x=0)}Me(b===Ue.#e,"FontInfo.write: Boolean properties offset mismatch");for(const C of Ue.numbers)m.setFloat64(b,e[C]),b+=8;if(Me(b===Ue.#t,"FontInfo.write: Number properties offset mismatch"),e.bbox){m.setUint8(b++,4);for(const C of e.bbox)m.setInt16(b,C,!0),b+=2}else m.setUint8(b++,0),b+=8;if(Me(b===Ue.#i,"FontInfo.write: BBox properties offset mismatch"),e.fontMatrix){m.setUint8(b++,6);for(const C of e.fontMatrix)m.setFloat64(b,C,!0),b+=8}else m.setUint8(b++,0),b+=48;if(Me(b===Ue.#n,"FontInfo.write: FontMatrix properties offset mismatch"),e.defaultVMetrics){m.setUint8(b++,1);for(const C of e.defaultVMetrics)m.setInt16(b,C,!0),b+=2}else m.setUint8(b++,0),b+=6;Me(b===Ue.#a,"FontInfo.write: DefaultVMetrics properties offset mismatch"),m.setUint32(Ue.#a,0),b+=4;for(const C of Ue.strings){const T=o[C],w=T.length;m.setUint32(b,w),p.set(T,b+4),b+=4+w}if(m.setUint32(Ue.#a,b-Ue.#a-4),!t)m.setUint32(b,0),b+=4;else{const C=t.byteLength;m.setUint32(b,C),Me(b+4+C<=h.byteLength,"FontInfo.write: Buffer overflow at systemFontInfo"),p.set(new Uint8Array(t),b+4),b+=4+C}if(!s)m.setUint32(b,0),b+=4;else{const C=s.byteLength;m.setUint32(b,C),Me(b+4+C<=h.byteLength,"FontInfo.write: Buffer overflow at cssFontInfo"),p.set(new Uint8Array(s),b+4),b+=4+C}return e.data===void 0?(m.setUint32(b,0),b+=4):(m.setUint32(b,e.data.length),p.set(e.data,b+4),b+=4+e.data.length),Me(b<=h.byteLength,"FontInfo.write: Buffer overflow"),h.transferToFixedLength(b)}}class Ni{static#e=null;static#t="";static get workerPort(){return this.#e}static set workerPort(e){if(!(typeof Worker<"u"&&e instanceof Worker)&&e!==null)throw new Error("Invalid `workerPort` type.");this.#e=e}static get workerSrc(){return this.#t}static set workerSrc(e){if(typeof e!="string")throw new Error("Invalid `workerSrc` type.");this.#t=e}}class gw{#e;#t;constructor({parsedData:e,rawData:t}){this.#e=e,this.#t=t}getRaw(){return this.#t}get(e){return this.#e.get(e)??null}[Symbol.iterator](){return this.#e.entries()}}const nr=Symbol("INTERNAL");class yw{#e=!1;#t=!1;#i=!1;#n=!0;constructor(e,{name:t,intent:s,usage:r,rbGroups:o}){this.#e=!!(e&rn.DISPLAY),this.#t=!!(e&rn.PRINT),this.name=t,this.intent=s,this.usage=r,this.rbGroups=o}get visible(){if(this.#i)return this.#n;if(!this.#n)return!1;const{print:e,view:t}=this.usage;return this.#e?t?.viewState!=="OFF":this.#t?e?.printState!=="OFF":!0}_setVisible(e,t,s=!1){e!==nr&&qe("Internal method `_setVisible` called."),this.#i=s,this.#n=t}}class bw{#e=null;#t=new Map;#i=null;#n=null;constructor(e,t=rn.DISPLAY){if(this.renderingIntent=t,this.name=null,this.creator=null,e!==null){this.name=e.name,this.creator=e.creator,this.#n=e.order;for(const s of e.groups)this.#t.set(s.id,new yw(t,s));if(e.baseState==="OFF")for(const s of this.#t.values())s._setVisible(nr,!1);for(const s of e.on)this.#t.get(s)._setVisible(nr,!0);for(const s of e.off)this.#t.get(s)._setVisible(nr,!1);this.#i=this.getHash()}}#a(e){const t=e.length;if(t<2)return!0;const s=e[0];for(let r=1;r<t;r++){const o=e[r];let l;if(Array.isArray(o))l=this.#a(o);else if(this.#t.has(o))l=this.#t.get(o).visible;else return ve(`Optional content group not found: ${o}`),!0;switch(s){case"And":if(!l)return!1;break;case"Or":if(l)return!0;break;case"Not":return!l;default:return!0}}return s==="And"}isVisible(e){if(this.#t.size===0)return!0;if(!e)return Ol("Optional content group not defined."),!0;if(e.type==="OCG")return this.#t.has(e.id)?this.#t.get(e.id).visible:(ve(`Optional content group not found: ${e.id}`),!0);if(e.type==="OCMD"){if(e.expression)return this.#a(e.expression);if(!e.policy||e.policy==="AnyOn"){for(const t of e.ids){if(!this.#t.has(t))return ve(`Optional content group not found: ${t}`),!0;if(this.#t.get(t).visible)return!0}return!1}else if(e.policy==="AllOn"){for(const t of e.ids){if(!this.#t.has(t))return ve(`Optional content group not found: ${t}`),!0;if(!this.#t.get(t).visible)return!1}return!0}else if(e.policy==="AnyOff"){for(const t of e.ids){if(!this.#t.has(t))return ve(`Optional content group not found: ${t}`),!0;if(!this.#t.get(t).visible)return!0}return!1}else if(e.policy==="AllOff"){for(const t of e.ids){if(!this.#t.has(t))return ve(`Optional content group not found: ${t}`),!0;if(this.#t.get(t).visible)return!1}return!0}return ve(`Unknown optional content policy ${e.policy}.`),!0}return ve(`Unknown group type ${e.type}.`),!0}setVisibility(e,t=!0,s=!0){const r=this.#t.get(e);if(!r){ve(`Optional content group not found: ${e}`);return}if(s&&t&&r.rbGroups.length)for(const o of r.rbGroups)for(const l of o)l!==e&&this.#t.get(l)?._setVisible(nr,!1,!0);r._setVisible(nr,!!t,!0),this.#e=null}setOCGState({state:e,preserveRB:t}){let s;for(const r of e){switch(r){case"ON":case"OFF":case"Toggle":s=r;continue}const o=this.#t.get(r);if(o)switch(s){case"ON":this.setVisibility(r,!0,t);break;case"OFF":this.setVisibility(r,!1,t);break;case"Toggle":this.setVisibility(r,!o.visible,t);break}}this.#e=null}get hasInitialVisibility(){return this.#i===null||this.getHash()===this.#i}getOrder(){return this.#t.size?this.#n?this.#n.slice():[...this.#t.keys()]:null}getGroup(e){return this.#t.get(e)||null}getHash(){if(this.#e!==null)return this.#e;const e=new Ly;for(const[t,s]of this.#t)e.update(`${t}:${s.visible}`);return this.#e=e.hexdigest()}[Symbol.iterator](){return this.#t.entries()}}class vw{constructor(e,{disableRange:t=!1,disableStream:s=!1}){Me(e,'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');const{length:r,initialData:o,progressiveDone:l,contentDispositionFilename:u}=e;if(this._queuedChunks=[],this._progressiveDone=l,this._contentDispositionFilename=u,o?.length>0){const h=o instanceof Uint8Array&&o.byteLength===o.buffer.byteLength?o.buffer:new Uint8Array(o).buffer;this._queuedChunks.push(h)}this._pdfDataRangeTransport=e,this._isStreamingSupported=!s,this._isRangeSupported=!t,this._contentLength=r,this._fullRequestReader=null,this._rangeReaders=[],e.addRangeListener((h,p)=>{this._onReceiveData({begin:h,chunk:p})}),e.addProgressListener((h,p)=>{this._onProgress({loaded:h,total:p})}),e.addProgressiveReadListener(h=>{this._onReceiveData({chunk:h})}),e.addProgressiveDoneListener(()=>{this._onProgressiveDone()}),e.transportReady()}_onReceiveData({begin:e,chunk:t}){const s=t instanceof Uint8Array&&t.byteLength===t.buffer.byteLength?t.buffer:new Uint8Array(t).buffer;if(e===void 0)this._fullRequestReader?this._fullRequestReader._enqueue(s):this._queuedChunks.push(s);else{const r=this._rangeReaders.some(function(o){return o._begin!==e?!1:(o._enqueue(s),!0)});Me(r,"_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.")}}get _progressiveDataLength(){return this._fullRequestReader?._loaded??0}_onProgress(e){e.total===void 0?this._rangeReaders[0]?.onProgress?.({loaded:e.loaded}):this._fullRequestReader?.onProgress?.({loaded:e.loaded,total:e.total})}_onProgressiveDone(){this._fullRequestReader?.progressiveDone(),this._progressiveDone=!0}_removeRangeReader(e){const t=this._rangeReaders.indexOf(e);t>=0&&this._rangeReaders.splice(t,1)}getFullReader(){Me(!this._fullRequestReader,"PDFDataTransportStream.getFullReader can only be called once.");const e=this._queuedChunks;return this._queuedChunks=null,new Aw(this,e,this._progressiveDone,this._contentDispositionFilename)}getRangeReader(e,t){if(t<=this._progressiveDataLength)return null;const s=new Sw(this,e,t);return this._pdfDataRangeTransport.requestDataRange(e,t),this._rangeReaders.push(s),s}cancelAllRequests(e){this._fullRequestReader?.cancel(e);for(const t of this._rangeReaders.slice(0))t.cancel(e);this._pdfDataRangeTransport.abort()}}class Aw{constructor(e,t,s=!1,r=null){this._stream=e,this._done=s||!1,this._filename=Il(r)?r:null,this._queuedChunks=t||[],this._loaded=0;for(const o of this._queuedChunks)this._loaded+=o.byteLength;this._requests=[],this._headersReady=Promise.resolve(),e._fullRequestReader=this,this.onProgress=null}_enqueue(e){this._done||(this._requests.length>0?this._requests.shift().resolve({value:e,done:!1}):this._queuedChunks.push(e),this._loaded+=e.byteLength)}get headersReady(){return this._headersReady}get filename(){return this._filename}get isRangeSupported(){return this._stream._isRangeSupported}get isStreamingSupported(){return this._stream._isStreamingSupported}get contentLength(){return this._stream._contentLength}async read(){if(this._queuedChunks.length>0)return{value:this._queuedChunks.shift(),done:!1};if(this._done)return{value:void 0,done:!0};const e=Promise.withResolvers();return this._requests.push(e),e.promise}cancel(e){this._done=!0;for(const t of this._requests)t.resolve({value:void 0,done:!0});this._requests.length=0}progressiveDone(){this._done||(this._done=!0)}}class Sw{constructor(e,t,s){this._stream=e,this._begin=t,this._end=s,this._queuedChunk=null,this._requests=[],this._done=!1,this.onProgress=null}_enqueue(e){if(!this._done){if(this._requests.length===0)this._queuedChunk=e;else{this._requests.shift().resolve({value:e,done:!1});for(const s of this._requests)s.resolve({value:void 0,done:!0});this._requests.length=0}this._done=!0,this._stream._removeRangeReader(this)}}get isStreamingSupported(){return!1}async read(){if(this._queuedChunk){const t=this._queuedChunk;return this._queuedChunk=null,{value:t,done:!1}}if(this._done)return{value:void 0,done:!0};const e=Promise.withResolvers();return this._requests.push(e),e.promise}cancel(e){this._done=!0;for(const t of this._requests)t.resolve({value:void 0,done:!0});this._requests.length=0,this._stream._removeRangeReader(this)}}function Cw(d){let e=!0,t=s("filename\\*","i").exec(d);if(t){t=t[1];let m=u(t);return m=unescape(m),m=h(m),m=p(m),o(m)}if(t=l(d),t){const m=p(t);return o(m)}if(t=s("filename","i").exec(d),t){t=t[1];let m=u(t);return m=p(m),o(m)}function s(m,b){return new RegExp("(?:^|;)\\s*"+m+'\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)',b)}function r(m,b){if(m){if(!/^[\x00-\xFF]+$/.test(b))return b;try{const v=new TextDecoder(m,{fatal:!0}),A=Fa(b);b=v.decode(A),e=!1}catch{}}return b}function o(m){return e&&/[\x80-\xff]/.test(m)&&(m=r("utf-8",m),e&&(m=r("iso-8859-1",m))),m}function l(m){const b=[];let v;const A=s("filename\\*((?!0\\d)\\d+)(\\*?)","ig");for(;(v=A.exec(m))!==null;){let[,C,T,w]=v;if(C=parseInt(C,10),C in b){if(C===0)break;continue}b[C]=[T,w]}const x=[];for(let C=0;C<b.length&&C in b;++C){let[T,w]=b[C];w=u(w),T&&(w=unescape(w),C===0&&(w=h(w))),x.push(w)}return x.join("")}function u(m){if(m.startsWith('"')){const b=m.slice(1).split('\\"');for(let v=0;v<b.length;++v){const A=b[v].indexOf('"');A!==-1&&(b[v]=b[v].slice(0,A),b.length=v+1),b[v]=b[v].replaceAll(/\\(.)/g,"$1")}m=b.join('"')}return m}function h(m){const b=m.indexOf("'");if(b===-1)return m;const v=m.slice(0,b),x=m.slice(b+1).replace(/^[^']*'/,"");return r(v,x)}function p(m){return!m.startsWith("=?")||/[\x00-\x19\x80-\xff]/.test(m)?m:m.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g,function(b,v,A,x){if(A==="q"||A==="Q")return x=x.replaceAll("_"," "),x=x.replaceAll(/=([0-9a-fA-F]{2})/g,function(C,T){return String.fromCharCode(parseInt(T,16))}),r(v,x);try{x=atob(x)}catch{}return r(v,x)})}return""}function Uy(d,e){const t=new Headers;if(!d||!e||typeof e!="object")return t;for(const s in e){const r=e[s];r!==void 0&&t.append(s,r)}return t}function jl(d){return URL.parse(d)?.origin??null}function Hy({responseHeaders:d,isHttp:e,rangeChunkSize:t,disableRange:s}){const r={allowRangeRequests:!1,suggestedLength:void 0},o=parseInt(d.get("Content-Length"),10);return!Number.isInteger(o)||(r.suggestedLength=o,o<=2*t)||s||!e||d.get("Accept-Ranges")!=="bytes"||(d.get("Content-Encoding")||"identity")!=="identity"||(r.allowRangeRequests=!0),r}function zy(d){const e=d.get("Content-Disposition");if(e){let t=Cw(e);if(t.includes("%"))try{t=decodeURIComponent(t)}catch{}if(Il(t))return t}return null}function qa(d,e){return new Ma(`Unexpected server response (${d}) while retrieving PDF "${e}".`,d,d===404||d===0&&e.startsWith("file:"))}function Gy(d){return d===200||d===206}function qy(d,e,t){return{method:"GET",headers:d,signal:t.signal,mode:"cors",credentials:e?"include":"same-origin",redirect:"follow"}}function Vy(d){return d instanceof Uint8Array?d.buffer:d instanceof ArrayBuffer?d:(ve(`getArrayBuffer - unexpected data format: ${d}`),new Uint8Array(d).buffer)}class xw{_responseOrigin=null;constructor(e){this.source=e,this.isHttp=/^https?:/i.test(e.url),this.headers=Uy(this.isHttp,e.httpHeaders),this._fullRequestReader=null,this._rangeRequestReaders=[]}get _progressiveDataLength(){return this._fullRequestReader?._loaded??0}getFullReader(){return Me(!this._fullRequestReader,"PDFFetchStream.getFullReader can only be called once."),this._fullRequestReader=new ww(this),this._fullRequestReader}getRangeReader(e,t){if(t<=this._progressiveDataLength)return null;const s=new Ew(this,e,t);return this._rangeRequestReaders.push(s),s}cancelAllRequests(e){this._fullRequestReader?.cancel(e);for(const t of this._rangeRequestReaders.slice(0))t.cancel(e)}}class ww{constructor(e){this._stream=e,this._reader=null,this._loaded=0,this._filename=null;const t=e.source;this._withCredentials=t.withCredentials||!1,this._contentLength=t.length,this._headersCapability=Promise.withResolvers(),this._disableRange=t.disableRange||!1,this._rangeChunkSize=t.rangeChunkSize,!this._rangeChunkSize&&!this._disableRange&&(this._disableRange=!0),this._abortController=new AbortController,this._isStreamingSupported=!t.disableStream,this._isRangeSupported=!t.disableRange;const s=new Headers(e.headers),r=t.url;fetch(r,qy(s,this._withCredentials,this._abortController)).then(o=>{if(e._responseOrigin=jl(o.url),!Gy(o.status))throw qa(o.status,r);this._reader=o.body.getReader(),this._headersCapability.resolve();const l=o.headers,{allowRangeRequests:u,suggestedLength:h}=Hy({responseHeaders:l,isHttp:e.isHttp,rangeChunkSize:this._rangeChunkSize,disableRange:this._disableRange});this._isRangeSupported=u,this._contentLength=h||this._contentLength,this._filename=zy(l),!this._isStreamingSupported&&this._isRangeSupported&&this.cancel(new li("Streaming is disabled."))}).catch(this._headersCapability.reject),this.onProgress=null}get headersReady(){return this._headersCapability.promise}get filename(){return this._filename}get contentLength(){return this._contentLength}get isRangeSupported(){return this._isRangeSupported}get isStreamingSupported(){return this._isStreamingSupported}async read(){await this._headersCapability.promise;const{value:e,done:t}=await this._reader.read();return t?{value:e,done:t}:(this._loaded+=e.byteLength,this.onProgress?.({loaded:this._loaded,total:this._contentLength}),{value:Vy(e),done:!1})}cancel(e){this._reader?.cancel(e),this._abortController.abort()}}class Ew{constructor(e,t,s){this._stream=e,this._reader=null,this._loaded=0;const r=e.source;this._withCredentials=r.withCredentials||!1,this._readCapability=Promise.withResolvers(),this._isStreamingSupported=!r.disableStream,this._abortController=new AbortController;const o=new Headers(e.headers);o.append("Range",`bytes=${t}-${s-1}`);const l=r.url;fetch(l,qy(o,this._withCredentials,this._abortController)).then(u=>{const h=jl(u.url);if(h!==e._responseOrigin)throw new Error(`Expected range response-origin "${h}" to match "${e._responseOrigin}".`);if(!Gy(u.status))throw qa(u.status,l);this._readCapability.resolve(),this._reader=u.body.getReader()}).catch(this._readCapability.reject),this.onProgress=null}get isStreamingSupported(){return this._isStreamingSupported}async read(){await this._readCapability.promise;const{value:e,done:t}=await this._reader.read();return t?{value:e,done:t}:(this._loaded+=e.byteLength,this.onProgress?.({loaded:this._loaded}),{value:Vy(e),done:!1})}cancel(e){this._reader?.cancel(e),this._abortController.abort()}}const bd=200,vd=206;function Tw(d){const e=d.response;return typeof e!="string"?e:Fa(e).buffer}class _w{_responseOrigin=null;constructor({url:e,httpHeaders:t,withCredentials:s}){this.url=e,this.isHttp=/^https?:/i.test(e),this.headers=Uy(this.isHttp,t),this.withCredentials=s||!1,this.currXhrId=0,this.pendingRequests=Object.create(null)}request(e){const t=new XMLHttpRequest,s=this.currXhrId++,r=this.pendingRequests[s]={xhr:t};t.open("GET",this.url),t.withCredentials=this.withCredentials;for(const[o,l]of this.headers)t.setRequestHeader(o,l);return this.isHttp&&"begin"in e&&"end"in e?(t.setRequestHeader("Range",`bytes=${e.begin}-${e.end-1}`),r.expectedStatus=vd):r.expectedStatus=bd,t.responseType="arraybuffer",Me(e.onError,"Expected `onError` callback to be provided."),t.onerror=()=>{e.onError(t.status)},t.onreadystatechange=this.onStateChange.bind(this,s),t.onprogress=this.onProgress.bind(this,s),r.onHeadersReceived=e.onHeadersReceived,r.onDone=e.onDone,r.onError=e.onError,r.onProgress=e.onProgress,t.send(null),s}onProgress(e,t){const s=this.pendingRequests[e];s&&s.onProgress?.(t)}onStateChange(e,t){const s=this.pendingRequests[e];if(!s)return;const r=s.xhr;if(r.readyState>=2&&s.onHeadersReceived&&(s.onHeadersReceived(),delete s.onHeadersReceived),r.readyState!==4||!(e in this.pendingRequests))return;if(delete this.pendingRequests[e],r.status===0&&this.isHttp){s.onError(r.status);return}const o=r.status||bd;if(!(o===bd&&s.expectedStatus===vd)&&o!==s.expectedStatus){s.onError(r.status);return}const u=Tw(r);if(o===vd){const h=r.getResponseHeader("Content-Range"),p=/bytes (\d+)-(\d+)\/(\d+)/.exec(h);p?s.onDone({begin:parseInt(p[1],10),chunk:u}):(ve('Missing or invalid "Content-Range" header.'),s.onError(0))}else u?s.onDone({begin:0,chunk:u}):s.onError(r.status)}getRequestXhr(e){return this.pendingRequests[e].xhr}isPendingRequest(e){return e in this.pendingRequests}abortRequest(e){const t=this.pendingRequests[e].xhr;delete this.pendingRequests[e],t.abort()}}class Rw{constructor(e){this._source=e,this._manager=new _w(e),this._rangeChunkSize=e.rangeChunkSize,this._fullRequestReader=null,this._rangeRequestReaders=[]}_onRangeRequestReaderClosed(e){const t=this._rangeRequestReaders.indexOf(e);t>=0&&this._rangeRequestReaders.splice(t,1)}getFullReader(){return Me(!this._fullRequestReader,"PDFNetworkStream.getFullReader can only be called once."),this._fullRequestReader=new Dw(this._manager,this._source),this._fullRequestReader}getRangeReader(e,t){const s=new Mw(this._manager,e,t);return s.onClosed=this._onRangeRequestReaderClosed.bind(this),this._rangeRequestReaders.push(s),s}cancelAllRequests(e){this._fullRequestReader?.cancel(e);for(const t of this._rangeRequestReaders.slice(0))t.cancel(e)}}class Dw{constructor(e,t){this._manager=e,this._url=t.url,this._fullRequestId=e.request({onHeadersReceived:this._onHeadersReceived.bind(this),onDone:this._onDone.bind(this),onError:this._onError.bind(this),onProgress:this._onProgress.bind(this)}),this._headersCapability=Promise.withResolvers(),this._disableRange=t.disableRange||!1,this._contentLength=t.length,this._rangeChunkSize=t.rangeChunkSize,!this._rangeChunkSize&&!this._disableRange&&(this._disableRange=!0),this._isStreamingSupported=!1,this._isRangeSupported=!1,this._cachedChunks=[],this._requests=[],this._done=!1,this._storedError=void 0,this._filename=null,this.onProgress=null}_onHeadersReceived(){const e=this._fullRequestId,t=this._manager.getRequestXhr(e);this._manager._responseOrigin=jl(t.responseURL);const s=t.getAllResponseHeaders(),r=new Headers(s?s.trimStart().replace(/[^\S ]+$/,"").split(/[\r\n]+/).map(u=>{const[h,...p]=u.split(": ");return[h,p.join(": ")]}):[]),{allowRangeRequests:o,suggestedLength:l}=Hy({responseHeaders:r,isHttp:this._manager.isHttp,rangeChunkSize:this._rangeChunkSize,disableRange:this._disableRange});o&&(this._isRangeSupported=!0),this._contentLength=l||this._contentLength,this._filename=zy(r),this._isRangeSupported&&this._manager.abortRequest(e),this._headersCapability.resolve()}_onDone(e){if(e&&(this._requests.length>0?this._requests.shift().resolve({value:e.chunk,done:!1}):this._cachedChunks.push(e.chunk)),this._done=!0,!(this._cachedChunks.length>0)){for(const t of this._requests)t.resolve({value:void 0,done:!0});this._requests.length=0}}_onError(e){this._storedError=qa(e,this._url),this._headersCapability.reject(this._storedError);for(const t of this._requests)t.reject(this._storedError);this._requests.length=0,this._cachedChunks.length=0}_onProgress(e){this.onProgress?.({loaded:e.loaded,total:e.lengthComputable?e.total:this._contentLength})}get filename(){return this._filename}get isRangeSupported(){return this._isRangeSupported}get isStreamingSupported(){return this._isStreamingSupported}get contentLength(){return this._contentLength}get headersReady(){return this._headersCapability.promise}async read(){if(await this._headersCapability.promise,this._storedError)throw this._storedError;if(this._cachedChunks.length>0)return{value:this._cachedChunks.shift(),done:!1};if(this._done)return{value:void 0,done:!0};const e=Promise.withResolvers();return this._requests.push(e),e.promise}cancel(e){this._done=!0,this._headersCapability.reject(e);for(const t of this._requests)t.resolve({value:void 0,done:!0});this._requests.length=0,this._manager.isPendingRequest(this._fullRequestId)&&this._manager.abortRequest(this._fullRequestId),this._fullRequestReader=null}}class Mw{constructor(e,t,s){this._manager=e,this._url=e.url,this._requestId=e.request({begin:t,end:s,onHeadersReceived:this._onHeadersReceived.bind(this),onDone:this._onDone.bind(this),onError:this._onError.bind(this),onProgress:this._onProgress.bind(this)}),this._requests=[],this._queuedChunk=null,this._done=!1,this._storedError=void 0,this.onProgress=null,this.onClosed=null}_onHeadersReceived(){const e=jl(this._manager.getRequestXhr(this._requestId)?.responseURL);e!==this._manager._responseOrigin&&(this._storedError=new Error(`Expected range response-origin "${e}" to match "${this._manager._responseOrigin}".`),this._onError(0))}_close(){this.onClosed?.(this)}_onDone(e){const t=e.chunk;this._requests.length>0?this._requests.shift().resolve({value:t,done:!1}):this._queuedChunk=t,this._done=!0;for(const s of this._requests)s.resolve({value:void 0,done:!0});this._requests.length=0,this._close()}_onError(e){this._storedError??=qa(e,this._url);for(const t of this._requests)t.reject(this._storedError);this._requests.length=0,this._queuedChunk=null}_onProgress(e){this.isStreamingSupported||this.onProgress?.({loaded:e.loaded})}get isStreamingSupported(){return!1}async read(){if(this._storedError)throw this._storedError;if(this._queuedChunk!==null){const t=this._queuedChunk;return this._queuedChunk=null,{value:t,done:!1}}if(this._done)return{value:void 0,done:!0};const e=Promise.withResolvers();return this._requests.push(e),e.promise}cancel(e){this._done=!0;for(const t of this._requests)t.resolve({value:void 0,done:!0});this._requests.length=0,this._manager.isPendingRequest(this._requestId)&&this._manager.abortRequest(this._requestId),this._close()}}const kw=/^[a-z][a-z0-9\-+.]+:/i;function Lw(d){if(kw.test(d))return new URL(d);const e=process.getBuiltinModule("url");return new URL(e.pathToFileURL(d))}class Pw{constructor(e){this.source=e,this.url=Lw(e.url),Me(this.url.protocol==="file:","PDFNodeStream only supports file:// URLs."),this._fullRequestReader=null,this._rangeRequestReaders=[]}get _progressiveDataLength(){return this._fullRequestReader?._loaded??0}getFullReader(){return Me(!this._fullRequestReader,"PDFNodeStream.getFullReader can only be called once."),this._fullRequestReader=new Ow(this),this._fullRequestReader}getRangeReader(e,t){if(t<=this._progressiveDataLength)return null;const s=new Nw(this,e,t);return this._rangeRequestReaders.push(s),s}cancelAllRequests(e){this._fullRequestReader?.cancel(e);for(const t of this._rangeRequestReaders.slice(0))t.cancel(e)}}class Ow{constructor(e){this._url=e.url,this._done=!1,this._storedError=null,this.onProgress=null;const t=e.source;this._contentLength=t.length,this._loaded=0,this._filename=null,this._disableRange=t.disableRange||!1,this._rangeChunkSize=t.rangeChunkSize,!this._rangeChunkSize&&!this._disableRange&&(this._disableRange=!0),this._isStreamingSupported=!t.disableStream,this._isRangeSupported=!t.disableRange,this._readableStream=null,this._readCapability=Promise.withResolvers(),this._headersCapability=Promise.withResolvers();const s=process.getBuiltinModule("fs");s.promises.lstat(this._url).then(r=>{this._contentLength=r.size,this._setReadableStream(s.createReadStream(this._url)),this._headersCapability.resolve()},r=>{r.code==="ENOENT"&&(r=qa(0,this._url.href)),this._storedError=r,this._headersCapability.reject(r)})}get headersReady(){return this._headersCapability.promise}get filename(){return this._filename}get contentLength(){return this._contentLength}get isRangeSupported(){return this._isRangeSupported}get isStreamingSupported(){return this._isStreamingSupported}async read(){if(await this._readCapability.promise,this._done)return{value:void 0,done:!0};if(this._storedError)throw this._storedError;const e=this._readableStream.read();return e===null?(this._readCapability=Promise.withResolvers(),this.read()):(this._loaded+=e.length,this.onProgress?.({loaded:this._loaded,total:this._contentLength}),{value:new Uint8Array(e).buffer,done:!1})}cancel(e){if(!this._readableStream){this._error(e);return}this._readableStream.destroy(e)}_error(e){this._storedError=e,this._readCapability.resolve()}_setReadableStream(e){this._readableStream=e,e.on("readable",()=>{this._readCapability.resolve()}),e.on("end",()=>{e.destroy(),this._done=!0,this._readCapability.resolve()}),e.on("error",t=>{this._error(t)}),!this._isStreamingSupported&&this._isRangeSupported&&this._error(new li("streaming is disabled")),this._storedError&&this._readableStream.destroy(this._storedError)}}class Nw{constructor(e,t,s){this._url=e.url,this._done=!1,this._storedError=null,this.onProgress=null,this._loaded=0,this._readableStream=null,this._readCapability=Promise.withResolvers();const r=e.source;this._isStreamingSupported=!r.disableStream;const o=process.getBuiltinModule("fs");this._setReadableStream(o.createReadStream(this._url,{start:t,end:s-1}))}get isStreamingSupported(){return this._isStreamingSupported}async read(){if(await this._readCapability.promise,this._done)return{value:void 0,done:!0};if(this._storedError)throw this._storedError;const e=this._readableStream.read();return e===null?(this._readCapability=Promise.withResolvers(),this.read()):(this._loaded+=e.length,this.onProgress?.({loaded:this._loaded}),{value:new Uint8Array(e).buffer,done:!1})}cancel(e){if(!this._readableStream){this._error(e);return}this._readableStream.destroy(e)}_error(e){this._storedError=e,this._readCapability.resolve()}_setReadableStream(e){this._readableStream=e,e.on("readable",()=>{this._readCapability.resolve()}),e.on("end",()=>{e.destroy(),this._done=!0,this._readCapability.resolve()}),e.on("error",t=>{this._error(t)}),this._storedError&&this._readableStream.destroy(this._storedError)}}const Aa=Symbol("INITIAL_DATA");class Yy{#e=Object.create(null);#t(e){return this.#e[e]||={...Promise.withResolvers(),data:Aa}}get(e,t=null){if(t){const r=this.#t(e);return r.promise.then(()=>t(r.data)),null}const s=this.#e[e];if(!s||s.data===Aa)throw new Error(`Requesting object that isn't resolved yet ${e}.`);return s.data}has(e){const t=this.#e[e];return!!t&&t.data!==Aa}delete(e){const t=this.#e[e];return!t||t.data===Aa?!1:(delete this.#e[e],!0)}resolve(e,t=null){const s=this.#t(e);s.data=t,s.resolve()}clear(){for(const e in this.#e){const{data:t}=this.#e[e];t?.bitmap?.close()}this.#e=Object.create(null)}*[Symbol.iterator](){for(const e in this.#e){const{data:t}=this.#e[e];t!==Aa&&(yield[e,t])}}}const Iw=1e5,Gg=30;let La=class An{#e=Promise.withResolvers();#t=null;#i=!1;#n=!!globalThis.FontInspector?.enabled;#a=null;#s=null;#r=0;#o=0;#c=null;#l=null;#h=0;#d=0;#f=Object.create(null);#g=[];#p=null;#u=[];#m=new WeakMap;#y=null;static#v=new Map;static#b=new Map;static#E=new WeakMap;static#x=null;static#A=new Set;constructor({textContentSource:e,container:t,viewport:s}){if(e instanceof ReadableStream)this.#p=e;else if(typeof e=="object")this.#p=new ReadableStream({start(h){h.enqueue(e),h.close()}});else throw new Error('No "textContentSource" parameter specified.');this.#t=this.#l=t,this.#d=s.scale*Tn.pixelRatio,this.#h=s.rotation,this.#s={div:null,properties:null,ctx:null};const{pageWidth:r,pageHeight:o,pageX:l,pageY:u}=s.rawDims;this.#y=[1,0,0,-1,-l,u+o],this.#o=r,this.#r=o,An.#D(),Ii(t,s),this.#e.promise.finally(()=>{An.#A.delete(this),this.#s=null,this.#f=null}).catch(()=>{})}static get fontFamilyMap(){const{isWindows:e,isFirefox:t}=wt.platform;return Se(this,"fontFamilyMap",new Map([["sans-serif",`${e&&t?"Calibri, ":""}sans-serif`],["monospace",`${e&&t?"Lucida Console, ":""}monospace`]]))}render(){const e=()=>{this.#c.read().then(({value:t,done:s})=>{if(s){this.#e.resolve();return}this.#a??=t.lang,Object.assign(this.#f,t.styles),this.#_(t.items),e()},this.#e.reject)};return this.#c=this.#p.getReader(),An.#A.add(this),e(),this.#e.promise}update({viewport:e,onBefore:t=null}){const s=e.scale*Tn.pixelRatio,r=e.rotation;if(r!==this.#h&&(t?.(),this.#h=r,Ii(this.#l,{rotation:r})),s!==this.#d){t?.(),this.#d=s;const o={div:null,properties:null,ctx:An.#M(this.#a)};for(const l of this.#u)o.properties=this.#m.get(l),o.div=l,this.#w(o)}}cancel(){const e=new li("TextLayer task cancelled.");this.#c?.cancel(e).catch(()=>{}),this.#c=null,this.#e.reject(e)}get textDivs(){return this.#u}get textContentItemsStr(){return this.#g}#_(e){if(this.#i)return;this.#s.ctx??=An.#M(this.#a);const t=this.#u,s=this.#g;for(const r of e){if(t.length>Iw){ve("Ignoring additional textDivs for performance reasons."),this.#i=!0;return}if(r.str===void 0){if(r.type==="beginMarkedContentProps"||r.type==="beginMarkedContent"){const o=this.#t;this.#t=document.createElement("span"),this.#t.classList.add("markedContent"),r.id&&this.#t.setAttribute("id",`${r.id}`),o.append(this.#t)}else r.type==="endMarkedContent"&&(this.#t=this.#t.parentNode);continue}s.push(r.str),this.#C(r)}}#C(e){const t=document.createElement("span"),s={angle:0,canvasWidth:0,hasText:e.str!=="",hasEOL:e.hasEOL,fontSize:0};this.#u.push(t);const r=ie.transform(this.#y,e.transform);let o=Math.atan2(r[1],r[0]);const l=this.#f[e.fontName];l.vertical&&(o+=Math.PI/2);let u=this.#n&&l.fontSubstitution||l.fontFamily;u=An.fontFamilyMap.get(u)||u;const h=Math.hypot(r[2],r[3]),p=h*An.#j(u,l,this.#a);let m,b;o===0?(m=r[4],b=r[5]-p):(m=r[4]+p*Math.sin(o),b=r[5]-p*Math.cos(o));const v="calc(var(--total-scale-factor) *",A=t.style;this.#t===this.#l?(A.left=`${(100*m/this.#o).toFixed(2)}%`,A.top=`${(100*b/this.#r).toFixed(2)}%`):(A.left=`${v}${m.toFixed(2)}px)`,A.top=`${v}${b.toFixed(2)}px)`),A.fontSize=`${v}${(An.#x*h).toFixed(2)}px)`,A.fontFamily=u,s.fontSize=h,t.setAttribute("role","presentation"),t.textContent=e.str,t.dir=e.dir,this.#n&&(t.dataset.fontName=l.fontSubstitutionLoadedName||e.fontName),o!==0&&(s.angle=o*(180/Math.PI));let x=!1;if(e.str.length>1)x=!0;else if(e.str!==" "&&e.transform[0]!==e.transform[3]){const C=Math.abs(e.transform[0]),T=Math.abs(e.transform[3]);C!==T&&Math.max(C,T)/Math.min(C,T)>1.5&&(x=!0)}if(x&&(s.canvasWidth=l.vertical?e.height:e.width),this.#m.set(t,s),this.#s.div=t,this.#s.properties=s,this.#w(this.#s),s.hasText&&this.#t.append(t),s.hasEOL){const C=document.createElement("br");C.setAttribute("role","presentation"),this.#t.append(C)}}#w(e){const{div:t,properties:s,ctx:r}=e,{style:o}=t;let l="";if(An.#x>1&&(l=`scale(${1/An.#x})`),s.canvasWidth!==0&&s.hasText){const{fontFamily:u}=o,{canvasWidth:h,fontSize:p}=s;An.#R(r,p*this.#d,u);const{width:m}=r.measureText(t.textContent);m>0&&(l=`scaleX(${h*this.#d/m}) ${l}`)}s.angle!==0&&(l=`rotate(${s.angle}deg) ${l}`),l.length>0&&(o.transform=l)}static cleanup(){if(!(this.#A.size>0)){this.#v.clear();for(const{canvas:e}of this.#b.values())e.remove();this.#b.clear()}}static#M(e=null){let t=this.#b.get(e||="");if(!t){const s=document.createElement("canvas");s.className="hiddenCanvasElement",s.lang=e,document.body.append(s),t=s.getContext("2d",{alpha:!1,willReadFrequently:!0}),this.#b.set(e,t),this.#E.set(t,{size:0,family:""})}return t}static#R(e,t,s){const r=this.#E.get(e);t===r.size&&s===r.family||(e.font=`${t}px ${s}`,r.size=t,r.family=s)}static#D(){if(this.#x!==null)return;const e=document.createElement("div");e.style.opacity=0,e.style.lineHeight=1,e.style.fontSize="1px",e.style.position="absolute",e.textContent="X",document.body.append(e),this.#x=e.getBoundingClientRect().height,e.remove()}static#j(e,t,s){const r=this.#v.get(e);if(r)return r;const o=this.#M(s);o.canvas.width=o.canvas.height=Gg,this.#R(o,Gg,e);const l=o.measureText(""),u=l.fontBoundingBoxAscent,h=Math.abs(l.fontBoundingBoxDescent);o.canvas.width=o.canvas.height=0;let p=.8;return u?p=u/(u+h):(wt.platform.isFirefox&&ve("Enable the `dom.textMetrics.fontBoundingBox.enabled` preference in `about:config` to improve TextLayer rendering."),t.ascent?p=t.ascent:t.descent&&(p=1+t.descent)),this.#v.set(e,p),p}};const jw=100;function th(d={}){typeof d=="string"||d instanceof URL?d={url:d}:(d instanceof ArrayBuffer||ArrayBuffer.isView(d))&&(d={data:d});const e=new nh,{docId:t}=e,s=d.url?Vx(d.url):null,r=d.data?Yx(d.data):null,o=d.httpHeaders||null,l=d.withCredentials===!0,u=d.password??null,h=d.range instanceof ih?d.range:null,p=Number.isInteger(d.rangeChunkSize)&&d.rangeChunkSize>0?d.rangeChunkSize:2**16;let m=d.worker instanceof hr?d.worker:null;const b=d.verbosity,v=typeof d.docBaseUrl=="string"&&!Ha(d.docBaseUrl)?d.docBaseUrl:null,A=fl(d.cMapUrl),x=d.cMapPacked!==!1,C=d.CMapReaderFactory||(Bt?Zx:Dg),T=fl(d.iccUrl),w=fl(d.standardFontDataUrl),_=d.StandardFontDataFactory||(Bt?ew:Mg),R=fl(d.wasmUrl),O=d.WasmFactory||(Bt?tw:kg),k=d.stopAtErrors!==!0,j=Number.isInteger(d.maxImageSize)&&d.maxImageSize>-1?d.maxImageSize:-1,F=d.isEvalSupported!==!1,q=typeof d.isOffscreenCanvasSupported=="boolean"?d.isOffscreenCanvasSupported:!Bt,V=typeof d.isImageDecoderSupported=="boolean"?d.isImageDecoderSupported:!Bt&&(wt.platform.isFirefox||!globalThis.chrome),Q=Number.isInteger(d.canvasMaxAreaInBytes)?d.canvasMaxAreaInBytes:-1,J=typeof d.disableFontFace=="boolean"?d.disableFontFace:Bt,le=d.fontExtraProperties===!0,de=d.enableXfa===!0,ae=d.ownerDocument||globalThis.document,ce=d.disableRange===!0,N=d.disableStream===!0,G=d.disableAutoFetch===!0,ee=d.pdfBug===!0,he=d.CanvasFactory||(Bt?Jx:$x),M=d.FilterFactory||(Bt?Qx:Kx),W=d.enableHWA===!0,Z=d.useWasm!==!1,K=h?h.length:d.length??NaN,te=typeof d.useSystemFonts=="boolean"?d.useSystemFonts:!Bt&&!J,ye=typeof d.useWorkerFetch=="boolean"?d.useWorkerFetch:!!(C===Dg&&_===Mg&&O===kg&&A&&w&&R&&xa(A,document.baseURI)&&xa(w,document.baseURI)&&xa(R,document.baseURI)),re=null;Tx(b);const Ce={canvasFactory:new he({ownerDocument:ae,enableHWA:W}),filterFactory:new M({docId:t,ownerDocument:ae}),cMapReaderFactory:ye?null:new C({baseUrl:A,isCompressed:x}),standardFontDataFactory:ye?null:new _({baseUrl:w}),wasmFactory:ye?null:new O({baseUrl:R})};m||(m=hr.create({verbosity:b,port:Ni.workerPort}),e._worker=m);const Re={docId:t,apiVersion:"5.4.296",data:r,password:u,disableAutoFetch:G,rangeChunkSize:p,length:K,docBaseUrl:v,enableXfa:de,evaluatorOptions:{maxImageSize:j,disableFontFace:J,ignoreErrors:k,isEvalSupported:F,isOffscreenCanvasSupported:q,isImageDecoderSupported:V,canvasMaxAreaInBytes:Q,fontExtraProperties:le,useSystemFonts:te,useWasm:Z,useWorkerFetch:ye,cMapUrl:A,iccUrl:T,standardFontDataUrl:w,wasmUrl:R}},We={ownerDocument:ae,pdfBug:ee,styleElement:re,loadingParams:{disableAutoFetch:G,enableXfa:de}};return m.promise.then(function(){if(e.destroyed)throw new Error("Loading aborted");if(m.destroyed)throw new Error("Worker was destroyed");const He=m.messageHandler.sendWithPromise("GetDocRequest",Re,r?[r.buffer]:null);let Ut;if(h)Ut=new vw(h,{disableRange:ce,disableStream:N});else if(!r){if(!s)throw new Error("getDocument - no `url` parameter provided.");const Kt=xa(s)?xw:Bt?Pw:Rw;Ut=new Kt({url:s,length:K,httpHeaders:o,withCredentials:l,rangeChunkSize:p,disableRange:ce,disableStream:N})}return He.then(Kt=>{if(e.destroyed)throw new Error("Loading aborted");if(m.destroyed)throw new Error("Worker was destroyed");const De=new wa(t,Kt,m.port),Ie=new Uw(De,e,Ut,We,Ce,W);e._transport=Ie,De.send("Ready",null)})}).catch(e._capability.reject),e}class nh{static#e=0;_capability=Promise.withResolvers();_transport=null;_worker=null;docId=`d${nh.#e++}`;destroyed=!1;onPassword=null;onProgress=null;get promise(){return this._capability.promise}async destroy(){this.destroyed=!0;try{this._worker?.port&&(this._worker._pendingDestroy=!0),await this._transport?.destroy()}catch(e){throw this._worker?.port&&delete this._worker._pendingDestroy,e}this._transport=null,this._worker?.destroy(),this._worker=null}async getData(){return this._transport.getData()}}let ih=class{#e=Promise.withResolvers();#t=[];#i=[];#n=[];#a=[];constructor(e,t,s=!1,r=null){this.length=e,this.initialData=t,this.progressiveDone=s,this.contentDispositionFilename=r}addRangeListener(e){this.#a.push(e)}addProgressListener(e){this.#n.push(e)}addProgressiveReadListener(e){this.#i.push(e)}addProgressiveDoneListener(e){this.#t.push(e)}onDataRange(e,t){for(const s of this.#a)s(e,t)}onDataProgress(e,t){this.#e.promise.then(()=>{for(const s of this.#n)s(e,t)})}onDataProgressiveRead(e){this.#e.promise.then(()=>{for(const t of this.#i)t(e)})}onDataProgressiveDone(){this.#e.promise.then(()=>{for(const e of this.#t)e()})}transportReady(){this.#e.resolve()}requestDataRange(e,t){qe("Abstract method PDFDataRangeTransport.requestDataRange")}abort(){}};class Bw{constructor(e,t){this._pdfInfo=e,this._transport=t}get annotationStorage(){return this._transport.annotationStorage}get canvasFactory(){return this._transport.canvasFactory}get filterFactory(){return this._transport.filterFactory}get numPages(){return this._pdfInfo.numPages}get fingerprints(){return this._pdfInfo.fingerprints}get isPureXfa(){return Se(this,"isPureXfa",!!this._transport._htmlForXfa)}get allXfaHtml(){return this._transport._htmlForXfa}getPage(e){return this._transport.getPage(e)}getPageIndex(e){return this._transport.getPageIndex(e)}getDestinations(){return this._transport.getDestinations()}getDestination(e){return this._transport.getDestination(e)}getPageLabels(){return this._transport.getPageLabels()}getPageLayout(){return this._transport.getPageLayout()}getPageMode(){return this._transport.getPageMode()}getViewerPreferences(){return this._transport.getViewerPreferences()}getOpenAction(){return this._transport.getOpenAction()}getAttachments(){return this._transport.getAttachments()}getAnnotationsByType(e,t){return this._transport.getAnnotationsByType(e,t)}getJSActions(){return this._transport.getDocJSActions()}getOutline(){return this._transport.getOutline()}getOptionalContentConfig({intent:e="display"}={}){const{renderingIntent:t}=this._transport.getRenderingIntent(e);return this._transport.getOptionalContentConfig(t)}getPermissions(){return this._transport.getPermissions()}getMetadata(){return this._transport.getMetadata()}getMarkInfo(){return this._transport.getMarkInfo()}getData(){return this._transport.getData()}saveDocument(){return this._transport.saveDocument()}getDownloadInfo(){return this._transport.downloadInfoCapability.promise}cleanup(e=!1){return this._transport.startCleanup(e||this.isPureXfa)}destroy(){return this.loadingTask.destroy()}cachedPageNumber(e){return this._transport.cachedPageNumber(e)}get loadingParams(){return this._transport.loadingParams}get loadingTask(){return this._transport.loadingTask}getFieldObjects(){return this._transport.getFieldObjects()}hasJSActions(){return this._transport.hasJSActions()}getCalculationOrderIds(){return this._transport.getCalculationOrderIds()}}class Fw{#e=!1;constructor(e,t,s,r=!1){this._pageIndex=e,this._pageInfo=t,this._transport=s,this._stats=r?new Cg:null,this._pdfBug=r,this.commonObjs=s.commonObjs,this.objs=new Yy,this._intentStates=new Map,this.destroyed=!1,this.recordedBBoxes=null}get pageNumber(){return this._pageIndex+1}get rotate(){return this._pageInfo.rotate}get ref(){return this._pageInfo.ref}get userUnit(){return this._pageInfo.userUnit}get view(){return this._pageInfo.view}getViewport({scale:e,rotation:t=this.rotate,offsetX:s=0,offsetY:r=0,dontFlip:o=!1}={}){return new Ua({viewBox:this.view,userUnit:this.userUnit,scale:e,rotation:t,offsetX:s,offsetY:r,dontFlip:o})}getAnnotations({intent:e="display"}={}){const{renderingIntent:t}=this._transport.getRenderingIntent(e);return this._transport.getAnnotations(this._pageIndex,t)}getJSActions(){return this._transport.getPageJSActions(this._pageIndex)}get filterFactory(){return this._transport.filterFactory}get isPureXfa(){return Se(this,"isPureXfa",!!this._transport._htmlForXfa)}async getXfa(){return this._transport._htmlForXfa?.children[this._pageIndex]||null}render({canvasContext:e,canvas:t=e.canvas,viewport:s,intent:r="display",annotationMode:o=Un.ENABLE,transform:l=null,background:u=null,optionalContentConfigPromise:h=null,annotationCanvasMap:p=null,pageColors:m=null,printAnnotationStorage:b=null,isEditing:v=!1,recordOperations:A=!1,operationsFilter:x=null}){this._stats?.time("Overall");const C=this._transport.getRenderingIntent(r,o,b,v),{renderingIntent:T,cacheKey:w}=C;this.#e=!1,h||=this._transport.getOptionalContentConfig(T);let _=this._intentStates.get(w);_||(_=Object.create(null),this._intentStates.set(w,_)),_.streamReaderCancelTimeout&&(clearTimeout(_.streamReaderCancelTimeout),_.streamReaderCancelTimeout=null);const R=!!(T&rn.PRINT);_.displayReadyCapability||(_.displayReadyCapability=Promise.withResolvers(),_.operatorList={fnArray:[],argsArray:[],lastChunk:!1,separateAnnots:null},this._stats?.time("Page Request"),this._pumpOperatorList(C));const O=!!(this._pdfBug&&globalThis.StepperManager?.enabled),k=!this.recordedBBoxes&&(A||O),j=V=>{if(_.renderTasks.delete(F),k){const Q=F.gfx?.dependencyTracker.take();Q&&(F.stepper&&F.stepper.setOperatorBBoxes(Q,F.gfx.dependencyTracker.takeDebugMetadata()),A&&(this.recordedBBoxes=Q))}R&&(this.#e=!0),this.#t(),V?(F.capability.reject(V),this._abortOperatorList({intentState:_,reason:V instanceof Error?V:new Error(V)})):F.capability.resolve(),this._stats&&(this._stats.timeEnd("Rendering"),this._stats.timeEnd("Overall"),globalThis.Stats?.enabled&&globalThis.Stats.add(this.pageNumber,this._stats))},F=new sr({callback:j,params:{canvas:t,canvasContext:e,dependencyTracker:k?new iw(t,_.operatorList.length,O):null,viewport:s,transform:l,background:u},objs:this.objs,commonObjs:this.commonObjs,annotationCanvasMap:p,operatorList:_.operatorList,pageIndex:this._pageIndex,canvasFactory:this._transport.canvasFactory,filterFactory:this._transport.filterFactory,useRequestAnimationFrame:!R,pdfBug:this._pdfBug,pageColors:m,enableHWA:this._transport.enableHWA,operationsFilter:x});(_.renderTasks||=new Set).add(F);const q=F.task;return Promise.all([_.displayReadyCapability.promise,h]).then(([V,Q])=>{if(this.destroyed){j();return}if(this._stats?.time("Rendering"),!(Q.renderingIntent&T))throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");F.initializeGraphics({transparency:V,optionalContentConfig:Q}),F.operatorListChanged()}).catch(j),q}getOperatorList({intent:e="display",annotationMode:t=Un.ENABLE,printAnnotationStorage:s=null,isEditing:r=!1}={}){function o(){u.operatorList.lastChunk&&(u.opListReadCapability.resolve(u.operatorList),u.renderTasks.delete(h))}const l=this._transport.getRenderingIntent(e,t,s,r,!0);let u=this._intentStates.get(l.cacheKey);u||(u=Object.create(null),this._intentStates.set(l.cacheKey,u));let h;return u.opListReadCapability||(h=Object.create(null),h.operatorListChanged=o,u.opListReadCapability=Promise.withResolvers(),(u.renderTasks||=new Set).add(h),u.operatorList={fnArray:[],argsArray:[],lastChunk:!1,separateAnnots:null},this._stats?.time("Page Request"),this._pumpOperatorList(l)),u.opListReadCapability.promise}streamTextContent({includeMarkedContent:e=!1,disableNormalization:t=!1}={}){return this._transport.messageHandler.sendWithStream("GetTextContent",{pageIndex:this._pageIndex,includeMarkedContent:e===!0,disableNormalization:t===!0},{highWaterMark:100,size(r){return r.items.length}})}getTextContent(e={}){if(this._transport._htmlForXfa)return this.getXfa().then(s=>ka.textContent(s));const t=this.streamTextContent(e);return new Promise(function(s,r){function o(){l.read().then(function({value:h,done:p}){if(p){s(u);return}u.lang??=h.lang,Object.assign(u.styles,h.styles),u.items.push(...h.items),o()},r)}const l=t.getReader(),u={items:[],styles:Object.create(null),lang:null};o()})}getStructTree(){return this._transport.getStructTree(this._pageIndex)}_destroy(){this.destroyed=!0;const e=[];for(const t of this._intentStates.values())if(this._abortOperatorList({intentState:t,reason:new Error("Page was destroyed."),force:!0}),!t.opListReadCapability)for(const s of t.renderTasks)e.push(s.completed),s.cancel();return this.objs.clear(),this.#e=!1,Promise.all(e)}cleanup(e=!1){this.#e=!0;const t=this.#t();return e&&t&&(this._stats&&=new Cg),t}#t(){if(!this.#e||this.destroyed)return!1;for(const{renderTasks:e,operatorList:t}of this._intentStates.values())if(e.size>0||!t.lastChunk)return!1;return this._intentStates.clear(),this.objs.clear(),this.#e=!1,!0}_startRenderPage(e,t){const s=this._intentStates.get(t);s&&(this._stats?.timeEnd("Page Request"),s.displayReadyCapability?.resolve(e))}_renderPageChunk(e,t){for(let s=0,r=e.length;s<r;s++)t.operatorList.fnArray.push(e.fnArray[s]),t.operatorList.argsArray.push(e.argsArray[s]);t.operatorList.lastChunk=e.lastChunk,t.operatorList.separateAnnots=e.separateAnnots;for(const s of t.renderTasks)s.operatorListChanged();e.lastChunk&&this.#t()}_pumpOperatorList({renderingIntent:e,cacheKey:t,annotationStorageSerializable:s,modifiedIds:r}){const{map:o,transfer:l}=s,h=this._transport.messageHandler.sendWithStream("GetOperatorList",{pageIndex:this._pageIndex,intent:e,cacheKey:t,annotationStorage:o,modifiedIds:r},l).getReader(),p=this._intentStates.get(t);p.streamReader=h;const m=()=>{h.read().then(({value:b,done:v})=>{if(v){p.streamReader=null;return}this._transport.destroyed||(this._renderPageChunk(b,p),m())},b=>{if(p.streamReader=null,!this._transport.destroyed){if(p.operatorList){p.operatorList.lastChunk=!0;for(const v of p.renderTasks)v.operatorListChanged();this.#t()}if(p.displayReadyCapability)p.displayReadyCapability.reject(b);else if(p.opListReadCapability)p.opListReadCapability.reject(b);else throw b}})};m()}_abortOperatorList({intentState:e,reason:t,force:s=!1}){if(e.streamReader){if(e.streamReaderCancelTimeout&&(clearTimeout(e.streamReaderCancelTimeout),e.streamReaderCancelTimeout=null),!s){if(e.renderTasks.size>0)return;if(t instanceof Nl){let r=jw;t.extraDelay>0&&t.extraDelay<1e3&&(r+=t.extraDelay),e.streamReaderCancelTimeout=setTimeout(()=>{e.streamReaderCancelTimeout=null,this._abortOperatorList({intentState:e,reason:t,force:!0})},r);return}}if(e.streamReader.cancel(new li(t.message)).catch(()=>{}),e.streamReader=null,!this._transport.destroyed){for(const[r,o]of this._intentStates)if(o===e){this._intentStates.delete(r);break}this.cleanup()}}}get stats(){return this._stats}}var Oi,wn,ri,as,Ml,os,ls,Ft,xl,Xy,Wy,Ea,ur,wl;const Qe=class Qe{constructor({name:e=null,port:t=null,verbosity:s=_x()}={}){Pn(this,Ft);Pn(this,Oi,Promise.withResolvers());Pn(this,wn,null);Pn(this,ri,null);Pn(this,as,null);if(this.name=e,this.destroyed=!1,this.verbosity=s,t){if(Ke(Qe,ls).has(t))throw new Error("Cannot use more than one PDFWorker per port.");Ke(Qe,ls).set(t,this),On(this,Ft,Xy).call(this,t)}else On(this,Ft,Wy).call(this)}get promise(){return Ke(this,Oi).promise}get port(){return Ke(this,ri)}get messageHandler(){return Ke(this,wn)}destroy(){this.destroyed=!0,Ke(this,as)?.terminate(),Yt(this,as,null),Ke(Qe,ls).delete(Ke(this,ri)),Yt(this,ri,null),Ke(this,wn)?.destroy(),Yt(this,wn,null)}static create(e){const t=Ke(this,ls).get(e?.port);if(t){if(t._pendingDestroy)throw new Error("PDFWorker.create - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");return t}return new Qe(e)}static get workerSrc(){if(Ni.workerSrc)return Ni.workerSrc;throw new Error('No "GlobalWorkerOptions.workerSrc" specified.')}static get _setupFakeWorkerGlobal(){return Se(this,"_setupFakeWorkerGlobal",(async()=>Ke(this,ur,wl)?Ke(this,ur,wl):(await import(this.workerSrc)).WorkerMessageHandler)())}};Oi=new WeakMap,wn=new WeakMap,ri=new WeakMap,as=new WeakMap,Ml=new WeakMap,os=new WeakMap,ls=new WeakMap,Ft=new WeakSet,xl=function(){Ke(this,Oi).resolve(),Ke(this,wn).send("configure",{verbosity:this.verbosity})},Xy=function(e){Yt(this,ri,e),Yt(this,wn,new wa("main","worker",e)),Ke(this,wn).on("ready",()=>{}),On(this,Ft,xl).call(this)},Wy=function(){if(Ke(Qe,os)||Ke(Qe,ur,wl)){On(this,Ft,Ea).call(this);return}let{workerSrc:e}=Qe;try{Qe._isSameOrigin(window.location,e)||(e=Qe._createCDNWrapper(new URL(e,window.location).href));const t=new Worker(e,{type:"module"}),s=new wa("main","worker",t),r=()=>{o.abort(),s.destroy(),t.terminate(),this.destroyed?Ke(this,Oi).reject(new Error("Worker was destroyed")):On(this,Ft,Ea).call(this)},o=new AbortController;t.addEventListener("error",()=>{Ke(this,as)||r()},{signal:o.signal}),s.on("test",u=>{if(o.abort(),this.destroyed||!u){r();return}Yt(this,wn,s),Yt(this,ri,t),Yt(this,as,t),On(this,Ft,xl).call(this)}),s.on("ready",u=>{if(o.abort(),this.destroyed){r();return}try{l()}catch{On(this,Ft,Ea).call(this)}});const l=()=>{const u=new Uint8Array;s.send("test",u,[u.buffer])};l();return}catch{Ol("The worker has been disabled.")}On(this,Ft,Ea).call(this)},Ea=function(){Ke(Qe,os)||(ve("Setting up fake worker."),Yt(Qe,os,!0)),Qe._setupFakeWorkerGlobal.then(e=>{if(this.destroyed){Ke(this,Oi).reject(new Error("Worker was destroyed"));return}const t=new Wx;Yt(this,ri,t);const s=`fake${tg(Qe,Ml)._++}`,r=new wa(s+"_worker",s,t);e.setup(r,t),Yt(this,wn,new wa(s,s+"_worker",t)),On(this,Ft,xl).call(this)}).catch(e=>{Ke(this,Oi).reject(new Error(`Setting up fake worker failed: "${e.message}".`))})},ur=new WeakSet,wl=function(){try{return globalThis.pdfjsWorker?.WorkerMessageHandler||null}catch{return null}},Pn(Qe,ur),Pn(Qe,Ml,0),Pn(Qe,os,!1),Pn(Qe,ls,new WeakMap),Bt&&(Yt(Qe,os,!0),Ni.workerSrc||="./pdf.worker.mjs"),Qe._isSameOrigin=(e,t)=>{const s=URL.parse(e);if(!s?.origin||s.origin==="null")return!1;const r=new URL(t,s);return s.origin===r.origin},Qe._createCDNWrapper=e=>{const t=`await import("${e}");`;return URL.createObjectURL(new Blob([t],{type:"text/javascript"}))},Qe.fromPort=e=>{if(Ix("`PDFWorker.fromPort` - please use `PDFWorker.create` instead."),!e?.port)throw new Error("PDFWorker.fromPort - invalid method signature.");return Qe.create(e)};let hr=Qe;class Uw{#e=new Map;#t=new Map;#i=new Map;#n=new Map;#a=null;constructor(e,t,s,r,o,l){this.messageHandler=e,this.loadingTask=t,this.commonObjs=new Yy,this.fontLoader=new Gx({ownerDocument:r.ownerDocument,styleElement:r.styleElement}),this.loadingParams=r.loadingParams,this._params=r,this.canvasFactory=o.canvasFactory,this.filterFactory=o.filterFactory,this.cMapReaderFactory=o.cMapReaderFactory,this.standardFontDataFactory=o.standardFontDataFactory,this.wasmFactory=o.wasmFactory,this.destroyed=!1,this.destroyCapability=null,this._networkStream=s,this._fullReader=null,this._lastProgress=null,this.downloadInfoCapability=Promise.withResolvers(),this.enableHWA=l,this.setupMessageHandler()}#s(e,t=null){const s=this.#e.get(e);if(s)return s;const r=this.messageHandler.sendWithPromise(e,t);return this.#e.set(e,r),r}get annotationStorage(){return Se(this,"annotationStorage",new Qd)}getRenderingIntent(e,t=Un.ENABLE,s=null,r=!1,o=!1){let l=rn.DISPLAY,u=Ed;switch(e){case"any":l=rn.ANY;break;case"display":break;case"print":l=rn.PRINT;break;default:ve(`getRenderingIntent - invalid intent: ${e}`)}const h=l&rn.PRINT&&s instanceof Py?s:this.annotationStorage;switch(t){case Un.DISABLE:l+=rn.ANNOTATIONS_DISABLE;break;case Un.ENABLE:break;case Un.ENABLE_FORMS:l+=rn.ANNOTATIONS_FORMS;break;case Un.ENABLE_STORAGE:l+=rn.ANNOTATIONS_STORAGE,u=h.serializable;break;default:ve(`getRenderingIntent - invalid annotationMode: ${t}`)}r&&(l+=rn.IS_EDITING),o&&(l+=rn.OPLIST);const{ids:p,hash:m}=h.modifiedIds,b=[l,u.hash,m];return{renderingIntent:l,cacheKey:b.join("_"),annotationStorageSerializable:u,modifiedIds:p}}destroy(){if(this.destroyCapability)return this.destroyCapability.promise;this.destroyed=!0,this.destroyCapability=Promise.withResolvers(),this.#a?.reject(new Error("Worker was destroyed during onPassword callback"));const e=[];for(const s of this.#t.values())e.push(s._destroy());this.#t.clear(),this.#i.clear(),this.#n.clear(),this.hasOwnProperty("annotationStorage")&&this.annotationStorage.resetModified();const t=this.messageHandler.sendWithPromise("Terminate",null);return e.push(t),Promise.all(e).then(()=>{this.commonObjs.clear(),this.fontLoader.clear(),this.#e.clear(),this.filterFactory.destroy(),La.cleanup(),this._networkStream?.cancelAllRequests(new li("Worker was terminated.")),this.messageHandler?.destroy(),this.messageHandler=null,this.destroyCapability.resolve()},this.destroyCapability.reject),this.destroyCapability.promise}setupMessageHandler(){const{messageHandler:e,loadingTask:t}=this;e.on("GetReader",(s,r)=>{Me(this._networkStream,"GetReader - no `IPDFStream` instance available."),this._fullReader=this._networkStream.getFullReader(),this._fullReader.onProgress=o=>{this._lastProgress={loaded:o.loaded,total:o.total}},r.onPull=()=>{this._fullReader.read().then(function({value:o,done:l}){if(l){r.close();return}Me(o instanceof ArrayBuffer,"GetReader - expected an ArrayBuffer."),r.enqueue(new Uint8Array(o),1,[o])}).catch(o=>{r.error(o)})},r.onCancel=o=>{this._fullReader.cancel(o),r.ready.catch(l=>{if(!this.destroyed)throw l})}}),e.on("ReaderHeadersReady",async s=>{await this._fullReader.headersReady;const{isStreamingSupported:r,isRangeSupported:o,contentLength:l}=this._fullReader;return(!r||!o)&&(this._lastProgress&&t.onProgress?.(this._lastProgress),this._fullReader.onProgress=u=>{t.onProgress?.({loaded:u.loaded,total:u.total})}),{isStreamingSupported:r,isRangeSupported:o,contentLength:l}}),e.on("GetRangeReader",(s,r)=>{Me(this._networkStream,"GetRangeReader - no `IPDFStream` instance available.");const o=this._networkStream.getRangeReader(s.begin,s.end);if(!o){r.close();return}r.onPull=()=>{o.read().then(function({value:l,done:u}){if(u){r.close();return}Me(l instanceof ArrayBuffer,"GetRangeReader - expected an ArrayBuffer."),r.enqueue(new Uint8Array(l),1,[l])}).catch(l=>{r.error(l)})},r.onCancel=l=>{o.cancel(l),r.ready.catch(u=>{if(!this.destroyed)throw u})}}),e.on("GetDoc",({pdfInfo:s})=>{this._numPages=s.numPages,this._htmlForXfa=s.htmlForXfa,delete s.htmlForXfa,t._capability.resolve(new Bw(s,this))}),e.on("DocException",s=>{t._capability.reject(Wt(s))}),e.on("PasswordRequest",s=>{this.#a=Promise.withResolvers();try{if(!t.onPassword)throw Wt(s);const r=o=>{o instanceof Error?this.#a.reject(o):this.#a.resolve({password:o})};t.onPassword(r,s.code)}catch(r){this.#a.reject(r)}return this.#a.promise}),e.on("DataLoaded",s=>{t.onProgress?.({loaded:s.length,total:s.length}),this.downloadInfoCapability.resolve(s)}),e.on("StartRenderPage",s=>{if(this.destroyed)return;this.#t.get(s.pageIndex)._startRenderPage(s.transparency,s.cacheKey)}),e.on("commonobj",([s,r,o])=>{if(this.destroyed||this.commonObjs.has(s))return null;switch(r){case"Font":if("error"in o){const m=o.error;ve(`Error during font loading: ${m}`),this.commonObjs.resolve(s,m);break}const l=new Ue(o),u=this._params.pdfBug&&globalThis.FontInspector?.enabled?(m,b)=>globalThis.FontInspector.fontAdded(m,b):null,h=new qx(l,u,o.extra,o.charProcOperatorList);this.fontLoader.bind(h).catch(()=>e.sendWithPromise("FontFallback",{id:s})).finally(()=>{!h.fontExtraProperties&&h.data&&h.clearData(),this.commonObjs.resolve(s,h)});break;case"CopyLocalImage":const{imageRef:p}=o;Me(p,"The imageRef must be defined.");for(const m of this.#t.values())for(const[,b]of m.objs)if(b?.ref===p)return b.dataLen?(this.commonObjs.resolve(s,structuredClone(b)),b.dataLen):null;break;case"FontPath":case"Image":case"Pattern":this.commonObjs.resolve(s,o);break;default:throw new Error(`Got unknown common object type ${r}`)}return null}),e.on("obj",([s,r,o,l])=>{if(this.destroyed)return;const u=this.#t.get(r);if(!u.objs.has(s)){if(u._intentStates.size===0){l?.bitmap?.close();return}switch(o){case"Image":case"Pattern":u.objs.resolve(s,l);break;default:throw new Error(`Got unknown object type ${o}`)}}}),e.on("DocProgress",s=>{this.destroyed||t.onProgress?.({loaded:s.loaded,total:s.total})}),e.on("FetchBinaryData",async s=>{if(this.destroyed)throw new Error("Worker was destroyed.");const r=this[s.type];if(!r)throw new Error(`${s.type} not initialized, see the \`useWorkerFetch\` parameter.`);return r.fetch(s)})}getData(){return this.messageHandler.sendWithPromise("GetData",null)}saveDocument(){this.annotationStorage.size<=0&&ve("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");const{map:e,transfer:t}=this.annotationStorage.serializable;return this.messageHandler.sendWithPromise("SaveDocument",{isPureXfa:!!this._htmlForXfa,numPages:this._numPages,annotationStorage:e,filename:this._fullReader?.filename??null},t).finally(()=>{this.annotationStorage.resetModified()})}getPage(e){if(!Number.isInteger(e)||e<=0||e>this._numPages)return Promise.reject(new Error("Invalid page request."));const t=e-1,s=this.#i.get(t);if(s)return s;const r=this.messageHandler.sendWithPromise("GetPage",{pageIndex:t}).then(o=>{if(this.destroyed)throw new Error("Transport destroyed");o.refStr&&this.#n.set(o.refStr,e);const l=new Fw(t,o,this,this._params.pdfBug);return this.#t.set(t,l),l});return this.#i.set(t,r),r}getPageIndex(e){return Td(e)?this.messageHandler.sendWithPromise("GetPageIndex",{num:e.num,gen:e.gen}):Promise.reject(new Error("Invalid pageIndex request."))}getAnnotations(e,t){return this.messageHandler.sendWithPromise("GetAnnotations",{pageIndex:e,intent:t})}getFieldObjects(){return this.#s("GetFieldObjects")}hasJSActions(){return this.#s("HasJSActions")}getCalculationOrderIds(){return this.messageHandler.sendWithPromise("GetCalculationOrderIds",null)}getDestinations(){return this.messageHandler.sendWithPromise("GetDestinations",null)}getDestination(e){return typeof e!="string"?Promise.reject(new Error("Invalid destination request.")):this.messageHandler.sendWithPromise("GetDestination",{id:e})}getPageLabels(){return this.messageHandler.sendWithPromise("GetPageLabels",null)}getPageLayout(){return this.messageHandler.sendWithPromise("GetPageLayout",null)}getPageMode(){return this.messageHandler.sendWithPromise("GetPageMode",null)}getViewerPreferences(){return this.messageHandler.sendWithPromise("GetViewerPreferences",null)}getOpenAction(){return this.messageHandler.sendWithPromise("GetOpenAction",null)}getAttachments(){return this.messageHandler.sendWithPromise("GetAttachments",null)}getAnnotationsByType(e,t){return this.messageHandler.sendWithPromise("GetAnnotationsByType",{types:e,pageIndexesToSkip:t})}getDocJSActions(){return this.#s("GetDocJSActions")}getPageJSActions(e){return this.messageHandler.sendWithPromise("GetPageJSActions",{pageIndex:e})}getStructTree(e){return this.messageHandler.sendWithPromise("GetStructTree",{pageIndex:e})}getOutline(){return this.messageHandler.sendWithPromise("GetOutline",null)}getOptionalContentConfig(e){return this.#s("GetOptionalContentConfig").then(t=>new bw(t,e))}getPermissions(){return this.messageHandler.sendWithPromise("GetPermissions",null)}getMetadata(){const e="GetMetadata",t=this.#e.get(e);if(t)return t;const s=this.messageHandler.sendWithPromise(e,null).then(r=>({info:r[0],metadata:r[1]?new gw(r[1]):null,contentDispositionFilename:this._fullReader?.filename??null,contentLength:this._fullReader?.contentLength??null}));return this.#e.set(e,s),s}getMarkInfo(){return this.messageHandler.sendWithPromise("GetMarkInfo",null)}async startCleanup(e=!1){if(!this.destroyed){await this.messageHandler.sendWithPromise("Cleanup",null);for(const t of this.#t.values())if(!t.cleanup())throw new Error(`startCleanup: Page ${t.pageNumber} is currently rendering.`);this.commonObjs.clear(),e||this.fontLoader.clear(),this.#e.clear(),this.filterFactory.destroy(!0),La.cleanup()}}cachedPageNumber(e){if(!Td(e))return null;const t=e.gen===0?`${e.num}R`:`${e.num}R${e.gen}`;return this.#n.get(t)??null}}class Hw{#e=null;onContinue=null;onError=null;constructor(e){this.#e=e}get promise(){return this.#e.capability.promise}cancel(e=0){this.#e.cancel(null,e)}get separateAnnots(){const{separateAnnots:e}=this.#e.operatorList;if(!e)return!1;const{annotationCanvasMap:t}=this.#e;return e.form||e.canvas&&t?.size>0}}class sr{#e=null;static#t=new WeakSet;constructor({callback:e,params:t,objs:s,commonObjs:r,annotationCanvasMap:o,operatorList:l,pageIndex:u,canvasFactory:h,filterFactory:p,useRequestAnimationFrame:m=!1,pdfBug:b=!1,pageColors:v=null,enableHWA:A=!1,operationsFilter:x=null}){this.callback=e,this.params=t,this.objs=s,this.commonObjs=r,this.annotationCanvasMap=o,this.operatorListIdx=null,this.operatorList=l,this._pageIndex=u,this.canvasFactory=h,this.filterFactory=p,this._pdfBug=b,this.pageColors=v,this.running=!1,this.graphicsReadyCallback=null,this.graphicsReady=!1,this._useRequestAnimationFrame=m===!0&&typeof window<"u",this.cancelled=!1,this.capability=Promise.withResolvers(),this.task=new Hw(this),this._cancelBound=this.cancel.bind(this),this._continueBound=this._continue.bind(this),this._scheduleNextBound=this._scheduleNext.bind(this),this._nextBound=this._next.bind(this),this._canvas=t.canvas,this._canvasContext=t.canvas?null:t.canvasContext,this._enableHWA=A,this._dependencyTracker=t.dependencyTracker,this._operationsFilter=x}get completed(){return this.capability.promise.catch(function(){})}initializeGraphics({transparency:e=!1,optionalContentConfig:t}){if(this.cancelled)return;if(this._canvas){if(sr.#t.has(this._canvas))throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");sr.#t.add(this._canvas)}this._pdfBug&&globalThis.StepperManager?.enabled&&(this.stepper=globalThis.StepperManager.create(this._pageIndex),this.stepper.init(this.operatorList),this.stepper.nextBreakPoint=this.stepper.getNextBreakPoint());const{viewport:s,transform:r,background:o,dependencyTracker:l}=this.params,u=this._canvasContext||this._canvas.getContext("2d",{alpha:!1,willReadFrequently:!this._enableHWA});this.gfx=new rr(u,this.commonObjs,this.objs,this.canvasFactory,this.filterFactory,{optionalContentConfig:t},this.annotationCanvasMap,this.pageColors,l),this.gfx.beginDrawing({transform:r,viewport:s,transparency:e,background:o}),this.operatorListIdx=0,this.graphicsReady=!0,this.graphicsReadyCallback?.()}cancel(e=null,t=0){this.running=!1,this.cancelled=!0,this.gfx?.endDrawing(),this.#e&&(window.cancelAnimationFrame(this.#e),this.#e=null),sr.#t.delete(this._canvas),e||=new Nl(`Rendering cancelled, page ${this._pageIndex+1}`,t),this.callback(e),this.task.onError?.(e)}operatorListChanged(){if(!this.graphicsReady){this.graphicsReadyCallback||=this._continueBound;return}this.gfx.dependencyTracker?.growOperationsCount(this.operatorList.fnArray.length),this.stepper?.updateOperatorList(this.operatorList),!this.running&&this._continue()}_continue(){this.running=!0,!this.cancelled&&(this.task.onContinue?this.task.onContinue(this._scheduleNextBound):this._scheduleNext())}_scheduleNext(){this._useRequestAnimationFrame?this.#e=window.requestAnimationFrame(()=>{this.#e=null,this._nextBound().catch(this._cancelBound)}):Promise.resolve().then(this._nextBound).catch(this._cancelBound)}async _next(){this.cancelled||(this.operatorListIdx=this.gfx.executeOperatorList(this.operatorList,this.operatorListIdx,this._continueBound,this.stepper,this._operationsFilter),this.operatorListIdx===this.operatorList.argsArray.length&&(this.running=!1,this.operatorList.lastChunk&&(this.gfx.endDrawing(),sr.#t.delete(this._canvas),this.callback())))}}const $y="5.4.296",Ky="f56dc8601";class an{#e=null;#t=null;#i;#n=null;#a=!1;#s=!1;#r=null;#o;#c=null;#l=null;static#h=null;static get _keyboardManager(){return Se(this,"_keyboardManager",new za([[["Escape","mac+Escape"],an.prototype._hideDropdownFromKeyboard],[[" ","mac+ "],an.prototype._colorSelectFromKeyboard],[["ArrowDown","ArrowRight","mac+ArrowDown","mac+ArrowRight"],an.prototype._moveToNext],[["ArrowUp","ArrowLeft","mac+ArrowUp","mac+ArrowLeft"],an.prototype._moveToPrevious],[["Home","mac+Home"],an.prototype._moveToBeginning],[["End","mac+End"],an.prototype._moveToEnd]]))}constructor({editor:e=null,uiManager:t=null}){e?(this.#s=!1,this.#r=e):this.#s=!0,this.#l=e?._uiManager||t,this.#o=this.#l._eventBus,this.#i=e?.color?.toUpperCase()||this.#l?.highlightColors.values().next().value||"#FFFF98",an.#h||=Object.freeze({blue:"pdfjs-editor-colorpicker-blue",green:"pdfjs-editor-colorpicker-green",pink:"pdfjs-editor-colorpicker-pink",red:"pdfjs-editor-colorpicker-red",yellow:"pdfjs-editor-colorpicker-yellow"})}renderButton(){const e=this.#e=document.createElement("button");e.className="colorPicker",e.tabIndex="0",e.setAttribute("data-l10n-id","pdfjs-editor-colorpicker-button"),e.ariaHasPopup="true",this.#r&&(e.ariaControls=`${this.#r.id}_colorpicker_dropdown`);const t=this.#l._signal;e.addEventListener("click",this.#p.bind(this),{signal:t}),e.addEventListener("keydown",this.#g.bind(this),{signal:t});const s=this.#t=document.createElement("span");return s.className="swatch",s.ariaHidden="true",s.style.backgroundColor=this.#i,e.append(s),e}renderMainDropdown(){const e=this.#n=this.#d();return e.ariaOrientation="horizontal",e.ariaLabelledBy="highlightColorPickerLabel",e}#d(){const e=document.createElement("div"),t=this.#l._signal;e.addEventListener("contextmenu",ln,{signal:t}),e.className="dropdown",e.role="listbox",e.ariaMultiSelectable="false",e.ariaOrientation="vertical",e.setAttribute("data-l10n-id","pdfjs-editor-colorpicker-dropdown"),this.#r&&(e.id=`${this.#r.id}_colorpicker_dropdown`);for(const[s,r]of this.#l.highlightColors){const o=document.createElement("button");o.tabIndex="0",o.role="option",o.setAttribute("data-color",r),o.title=s,o.setAttribute("data-l10n-id",an.#h[s]);const l=document.createElement("span");o.append(l),l.className="swatch",l.style.backgroundColor=r,o.ariaSelected=r===this.#i,o.addEventListener("click",this.#f.bind(this,r),{signal:t}),e.append(o)}return e.addEventListener("keydown",this.#g.bind(this),{signal:t}),e}#f(e,t){t.stopPropagation(),this.#o.dispatch("switchannotationeditorparams",{source:this,type:_e.HIGHLIGHT_COLOR,value:e}),this.updateColor(e)}_colorSelectFromKeyboard(e){if(e.target===this.#e){this.#p(e);return}const t=e.target.getAttribute("data-color");t&&this.#f(t,e)}_moveToNext(e){if(!this.#m){this.#p(e);return}if(e.target===this.#e){this.#n.firstChild?.focus();return}e.target.nextSibling?.focus()}_moveToPrevious(e){if(e.target===this.#n?.firstChild||e.target===this.#e){this.#m&&this._hideDropdownFromKeyboard();return}this.#m||this.#p(e),e.target.previousSibling?.focus()}_moveToBeginning(e){if(!this.#m){this.#p(e);return}this.#n.firstChild?.focus()}_moveToEnd(e){if(!this.#m){this.#p(e);return}this.#n.lastChild?.focus()}#g(e){an._keyboardManager.exec(this,e)}#p(e){if(this.#m){this.hideDropdown();return}if(this.#a=e.detail===0,this.#c||(this.#c=new AbortController,window.addEventListener("pointerdown",this.#u.bind(this),{signal:this.#l.combinedSignal(this.#c)})),this.#e.ariaExpanded="true",this.#n){this.#n.classList.remove("hidden");return}const t=this.#n=this.#d();this.#e.append(t)}#u(e){this.#n?.contains(e.target)||this.hideDropdown()}hideDropdown(){this.#n?.classList.add("hidden"),this.#e.ariaExpanded="false",this.#c?.abort(),this.#c=null}get#m(){return this.#n&&!this.#n.classList.contains("hidden")}_hideDropdownFromKeyboard(){if(!this.#s){if(!this.#m){this.#r?.unselect();return}this.hideDropdown(),this.#e.focus({preventScroll:!0,focusVisible:this.#a})}}updateColor(e){if(this.#t&&(this.#t.style.backgroundColor=e),!this.#n)return;const t=this.#l.highlightColors.values();for(const s of this.#n.children)s.ariaSelected=t.next().value===e.toUpperCase()}destroy(){this.#e?.remove(),this.#e=null,this.#t=null,this.#n?.remove(),this.#n=null}}class Pa{#e=null;#t=null;#i=null;static#n=null;constructor(e){this.#t=e,this.#i=e._uiManager,Pa.#n||=Object.freeze({freetext:"pdfjs-editor-color-picker-free-text-input",ink:"pdfjs-editor-color-picker-ink-input"})}renderButton(){if(this.#e)return this.#e;const{editorType:e,colorType:t,colorValue:s}=this.#t,r=this.#e=document.createElement("input");return r.type="color",r.value=s||"#000000",r.className="basicColorPicker",r.tabIndex=0,r.setAttribute("data-l10n-id",Pa.#n[e]),r.addEventListener("input",()=>{this.#i.updateParams(t,r.value)},{signal:this.#i._signal}),r}update(e){this.#e&&(this.#e.value=e)}destroy(){this.#e?.remove(),this.#e=null}hideDropdown(){}}function qg(d){return Math.floor(Math.max(0,Math.min(1,d))*255).toString(16).padStart(2,"0")}function Sa(d){return Math.max(0,Math.min(255,255*d))}class Vg{static CMYK_G([e,t,s,r]){return["G",1-Math.min(1,.3*e+.59*s+.11*t+r)]}static G_CMYK([e]){return["CMYK",0,0,0,1-e]}static G_RGB([e]){return["RGB",e,e,e]}static G_rgb([e]){return e=Sa(e),[e,e,e]}static G_HTML([e]){const t=qg(e);return`#${t}${t}${t}`}static RGB_G([e,t,s]){return["G",.3*e+.59*t+.11*s]}static RGB_rgb(e){return e.map(Sa)}static RGB_HTML(e){return`#${e.map(qg).join("")}`}static T_HTML(){return"#00000000"}static T_rgb(){return[null]}static CMYK_RGB([e,t,s,r]){return["RGB",1-Math.min(1,e+r),1-Math.min(1,s+r),1-Math.min(1,t+r)]}static CMYK_rgb([e,t,s,r]){return[Sa(1-Math.min(1,e+r)),Sa(1-Math.min(1,s+r)),Sa(1-Math.min(1,t+r))]}static CMYK_HTML(e){const t=this.CMYK_RGB(e).slice(1);return this.RGB_HTML(t)}static RGB_CMYK([e,t,s]){const r=1-e,o=1-t,l=1-s,u=Math.min(r,o,l);return["CMYK",r,o,l,u]}}class zw{create(e,t,s=!1){if(e<=0||t<=0)throw new Error("Invalid SVG dimensions");const r=this._createSVG("svg:svg");return r.setAttribute("version","1.1"),s||(r.setAttribute("width",`${e}px`),r.setAttribute("height",`${t}px`)),r.setAttribute("preserveAspectRatio","none"),r.setAttribute("viewBox",`0 0 ${e} ${t}`),r}createElement(e){if(typeof e!="string")throw new Error("Invalid SVG element type");return this._createSVG(e)}_createSVG(e){qe("Abstract method `_createSVG` called.")}}class Oa extends zw{_createSVG(e){return document.createElementNS(si,e)}}const Gw=9,us=new WeakSet,qw=new Date().getTimezoneOffset()*60*1e3;class Yg{static create(e){switch(e.data.annotationType){case ut.LINK:return new sh(e);case ut.TEXT:return new Yw(e);case ut.WIDGET:switch(e.data.fieldType){case"Tx":return new Xw(e);case"Btn":return e.data.radioButton?new Qy(e):e.data.checkBox?new $w(e):new Kw(e);case"Ch":return new Qw(e);case"Sig":return new Ww(e)}return new fs(e);case ut.POPUP:return new Dd(e);case ut.FREETEXT:return new Jy(e);case ut.LINE:return new Zw(e);case ut.SQUARE:return new eE(e);case ut.CIRCLE:return new tE(e);case ut.POLYLINE:return new Zy(e);case ut.CARET:return new iE(e);case ut.INK:return new rh(e);case ut.POLYGON:return new nE(e);case ut.HIGHLIGHT:return new eb(e);case ut.UNDERLINE:return new sE(e);case ut.SQUIGGLY:return new rE(e);case ut.STRIKEOUT:return new aE(e);case ut.STAMP:return new tb(e);case ut.FILEATTACHMENT:return new oE(e);default:return new nt(e)}}}class nt{#e=null;#t=!1;#i=null;constructor(e,{isRenderable:t=!1,ignoreBorder:s=!1,createQuadrilaterals:r=!1}={}){this.isRenderable=t,this.data=e.data,this.layer=e.layer,this.linkService=e.linkService,this.downloadManager=e.downloadManager,this.imageResourcesPath=e.imageResourcesPath,this.renderForms=e.renderForms,this.svgFactory=e.svgFactory,this.annotationStorage=e.annotationStorage,this.enableComment=e.enableComment,this.enableScripting=e.enableScripting,this.hasJSActions=e.hasJSActions,this._fieldObjects=e.fieldObjects,this.parent=e.parent,t&&(this.container=this._createContainer(s)),r&&this._createQuadrilaterals()}static _hasPopupData({contentsObj:e,richText:t}){return!!(e?.str||t?.str)}get _isEditable(){return this.data.isEditable}get hasPopupData(){return nt._hasPopupData(this.data)||this.enableComment&&!!this.commentText}get commentData(){const{data:e}=this,t=this.annotationStorage?.getEditor(e.id);return t?t.getData():e}get hasCommentButton(){return this.enableComment&&this.hasPopupElement}get commentButtonPosition(){const e=this.annotationStorage?.getEditor(this.data.id);if(e)return e.commentButtonPositionInPage;const{quadPoints:t,inkLists:s,rect:r}=this.data;let o=-1/0,l=-1/0;if(t?.length>=8){for(let u=0;u<t.length;u+=8)t[u+1]>l?(l=t[u+1],o=t[u+2]):t[u+1]===l&&(o=Math.max(o,t[u+2]));return[o,l]}if(s?.length>=1){for(const u of s)for(let h=0,p=u.length;h<p;h+=2)u[h+1]>l?(l=u[h+1],o=u[h]):u[h+1]===l&&(o=Math.max(o,u[h]));if(o!==1/0)return[o,l]}return r?[r[2],r[3]]:null}_normalizePoint(e){const{page:{view:t},viewport:{rawDims:{pageWidth:s,pageHeight:r,pageX:o,pageY:l}}}=this.parent;return e[1]=t[3]-e[1]+t[1],e[0]=100*(e[0]-o)/s,e[1]=100*(e[1]-l)/r,e}get commentText(){const{data:e}=this;return this.annotationStorage.getRawValue(`${Da}${e.id}`)?.popup?.contents||e.contentsObj?.str||""}set commentText(e){const{data:t}=this,s={deleted:!e,contents:e||""};this.annotationStorage.updateEditor(t.id,{popup:s})||this.annotationStorage.setValue(`${Da}${t.id}`,{id:t.id,annotationType:t.annotationType,pageIndex:this.parent.page._pageIndex,popup:s,popupRef:t.popupRef,modificationDate:new Date}),e||this.removePopup()}removePopup(){(this.#i?.popup||this.popup)?.remove(),this.#i=this.popup=null}updateEdited(e){if(!this.container)return;e.rect&&(this.#e||={rect:this.data.rect.slice(0)});const{rect:t,popup:s}=e;t&&this.#n(t);let r=this.#i?.popup||this.popup;!r&&s?.text&&(this._createPopup(s),r=this.#i.popup),r&&(r.updateEdited(e),s?.deleted&&(r.remove(),this.#i=null,this.popup=null))}resetEdited(){this.#e&&(this.#n(this.#e.rect),this.#i?.popup.resetEdited(),this.#e=null)}#n(e){const{container:{style:t},data:{rect:s,rotation:r},parent:{viewport:{rawDims:{pageWidth:o,pageHeight:l,pageX:u,pageY:h}}}}=this;s?.splice(0,4,...e),t.left=`${100*(e[0]-u)/o}%`,t.top=`${100*(l-e[3]+h)/l}%`,r===0?(t.width=`${100*(e[2]-e[0])/o}%`,t.height=`${100*(e[3]-e[1])/l}%`):this.setRotation(r)}_createContainer(e){const{data:t,parent:{page:s,viewport:r}}=this,o=document.createElement("section");o.setAttribute("data-annotation-id",t.id),!(this instanceof fs)&&!(this instanceof sh)&&(o.tabIndex=0);const{style:l}=o;if(l.zIndex=this.parent.zIndex,this.parent.zIndex+=2,t.alternativeText&&(o.title=t.alternativeText),t.noRotate&&o.classList.add("norotate"),!t.rect||this instanceof Dd){const{rotation:C}=t;return!t.hasOwnCanvas&&C!==0&&this.setRotation(C,o),o}const{width:u,height:h}=this;if(!e&&t.borderStyle.width>0){l.borderWidth=`${t.borderStyle.width}px`;const C=t.borderStyle.horizontalCornerRadius,T=t.borderStyle.verticalCornerRadius;if(C>0||T>0){const _=`calc(${C}px * var(--total-scale-factor)) / calc(${T}px * var(--total-scale-factor))`;l.borderRadius=_}else if(this instanceof Qy){const _=`calc(${u}px * var(--total-scale-factor)) / calc(${h}px * var(--total-scale-factor))`;l.borderRadius=_}switch(t.borderStyle.style){case tr.SOLID:l.borderStyle="solid";break;case tr.DASHED:l.borderStyle="dashed";break;case tr.BEVELED:ve("Unimplemented border style: beveled");break;case tr.INSET:ve("Unimplemented border style: inset");break;case tr.UNDERLINE:l.borderBottomStyle="solid";break}const w=t.borderColor||null;w?(this.#t=!0,l.borderColor=ie.makeHexColor(w[0]|0,w[1]|0,w[2]|0)):l.borderWidth=0}const p=ie.normalizeRect([t.rect[0],s.view[3]-t.rect[1]+s.view[1],t.rect[2],s.view[3]-t.rect[3]+s.view[1]]),{pageWidth:m,pageHeight:b,pageX:v,pageY:A}=r.rawDims;l.left=`${100*(p[0]-v)/m}%`,l.top=`${100*(p[1]-A)/b}%`;const{rotation:x}=t;return t.hasOwnCanvas||x===0?(l.width=`${100*u/m}%`,l.height=`${100*h/b}%`):this.setRotation(x,o),o}setRotation(e,t=this.container){if(!this.data.rect)return;const{pageWidth:s,pageHeight:r}=this.parent.viewport.rawDims;let{width:o,height:l}=this;e%180!==0&&([o,l]=[l,o]),t.style.width=`${100*o/s}%`,t.style.height=`${100*l/r}%`,t.setAttribute("data-main-rotation",(360-e)%360)}get _commonActions(){const e=(t,s,r)=>{const o=r.detail[t],l=o[0],u=o.slice(1);r.target.style[s]=Vg[`${l}_HTML`](u),this.annotationStorage.setValue(this.data.id,{[s]:Vg[`${l}_rgb`](u)})};return Se(this,"_commonActions",{display:t=>{const{display:s}=t.detail,r=s%2===1;this.container.style.visibility=r?"hidden":"visible",this.annotationStorage.setValue(this.data.id,{noView:r,noPrint:s===1||s===2})},print:t=>{this.annotationStorage.setValue(this.data.id,{noPrint:!t.detail.print})},hidden:t=>{const{hidden:s}=t.detail;this.container.style.visibility=s?"hidden":"visible",this.annotationStorage.setValue(this.data.id,{noPrint:s,noView:s})},focus:t=>{setTimeout(()=>t.target.focus({preventScroll:!1}),0)},userName:t=>{t.target.title=t.detail.userName},readonly:t=>{t.target.disabled=t.detail.readonly},required:t=>{this._setRequired(t.target,t.detail.required)},bgColor:t=>{e("bgColor","backgroundColor",t)},fillColor:t=>{e("fillColor","backgroundColor",t)},fgColor:t=>{e("fgColor","color",t)},textColor:t=>{e("textColor","color",t)},borderColor:t=>{e("borderColor","borderColor",t)},strokeColor:t=>{e("strokeColor","borderColor",t)},rotation:t=>{const s=t.detail.rotation;this.setRotation(s),this.annotationStorage.setValue(this.data.id,{rotation:s})}})}_dispatchEventFromSandbox(e,t){const s=this._commonActions;for(const r of Object.keys(t.detail))(e[r]||s[r])?.(t)}_setDefaultPropertiesFromJS(e){if(!this.enableScripting)return;const t=this.annotationStorage.getRawValue(this.data.id);if(!t)return;const s=this._commonActions;for(const[r,o]of Object.entries(t)){const l=s[r];if(l){const u={detail:{[r]:o},target:e};l(u),delete t[r]}}}_createQuadrilaterals(){if(!this.container)return;const{quadPoints:e}=this.data;if(!e)return;const[t,s,r,o]=this.data.rect.map(C=>Math.fround(C));if(e.length===8){const[C,T,w,_]=e.subarray(2,6);if(r===C&&o===T&&t===w&&s===_)return}const{style:l}=this.container;let u;if(this.#t){const{borderColor:C,borderWidth:T}=l;l.borderWidth=0,u=["url('data:image/svg+xml;utf8,",'<svg xmlns="http://www.w3.org/2000/svg"',' preserveAspectRatio="none" viewBox="0 0 1 1">',`<g fill="transparent" stroke="${C}" stroke-width="${T}">`],this.container.classList.add("hasBorder")}const h=r-t,p=o-s,{svgFactory:m}=this,b=m.createElement("svg");b.classList.add("quadrilateralsContainer"),b.setAttribute("width",0),b.setAttribute("height",0),b.role="none";const v=m.createElement("defs");b.append(v);const A=m.createElement("clipPath"),x=`clippath_${this.data.id}`;A.setAttribute("id",x),A.setAttribute("clipPathUnits","objectBoundingBox"),v.append(A);for(let C=2,T=e.length;C<T;C+=8){const w=e[C],_=e[C+1],R=e[C+2],O=e[C+3],k=m.createElement("rect"),j=(R-t)/h,F=(o-_)/p,q=(w-R)/h,V=(_-O)/p;k.setAttribute("x",j),k.setAttribute("y",F),k.setAttribute("width",q),k.setAttribute("height",V),A.append(k),u?.push(`<rect vector-effect="non-scaling-stroke" x="${j}" y="${F}" width="${q}" height="${V}"/>`)}this.#t&&(u.push("</g></svg>')"),l.backgroundImage=u.join("")),this.container.append(b),this.container.style.clipPath=`url(#${x})`}_createPopup(e=null){const{data:t}=this;let s,r;e?(s={str:e.text},r=e.date):(s=t.contentsObj,r=t.modificationDate);const o=this.#i=new Dd({data:{color:t.color,titleObj:t.titleObj,modificationDate:r,contentsObj:s,richText:t.richText,parentRect:t.rect,borderStyle:0,id:`popup_${t.id}`,rotation:t.rotation,noRotate:!0},linkService:this.linkService,parent:this.parent,elements:[this]});this.parent._commentManager||this.parent.div.append(o.render())}get hasPopupElement(){return!!(this.#i||this.popup||this.data.popupRef)}get extraPopupElement(){return this.#i}render(){qe("Abstract method `AnnotationElement.render` called")}_getElementsByName(e,t=null){const s=[];if(this._fieldObjects){const r=this._fieldObjects[e];if(r)for(const{page:o,id:l,exportValues:u}of r){if(o===-1||l===t)continue;const h=typeof u=="string"?u:null,p=document.querySelector(`[data-element-id="${l}"]`);if(p&&!us.has(p)){ve(`_getElementsByName - element not allowed: ${l}`);continue}s.push({id:l,exportValue:h,domElement:p})}return s}for(const r of document.getElementsByName(e)){const{exportValue:o}=r,l=r.getAttribute("data-element-id");l!==t&&us.has(r)&&s.push({id:l,exportValue:o,domElement:r})}return s}show(){this.container&&(this.container.hidden=!1),this.popup?.maybeShow()}hide(){this.container&&(this.container.hidden=!0),this.popup?.forceHide()}getElementsToTriggerPopup(){return this.container}addHighlightArea(){const e=this.getElementsToTriggerPopup();if(Array.isArray(e))for(const t of e)t.classList.add("highlightArea");else e.classList.add("highlightArea")}_editOnDoubleClick(){if(!this._isEditable)return;const{annotationEditorType:e,data:{id:t}}=this;this.container.addEventListener("dblclick",()=>{this.linkService.eventBus?.dispatch("switchannotationeditormode",{source:this,mode:e,editId:t,mustEnterInEditMode:!0})})}get width(){return this.data.rect[2]-this.data.rect[0]}get height(){return this.data.rect[3]-this.data.rect[1]}}class Vw extends nt{constructor(e){super(e,{isRenderable:!0,ignoreBorder:!0}),this.editor=e.editor}render(){return this.container.className="editorAnnotation",this.container}createOrUpdatePopup(){const{editor:e}=this;e.hasComment&&(this._createPopup(e.comment),this.extraPopupElement.popup.renderCommentButton())}get hasCommentButton(){return this.enableComment&&this.editor.hasComment}get commentButtonPosition(){return this.editor.commentButtonPositionInPage}get commentText(){return this.editor.comment.text}set commentText(e){this.editor.comment=e,e||this.removePopup()}get commentData(){return this.editor.getData()}remove(){this.container.remove(),this.container=null,this.removePopup()}}class sh extends nt{constructor(e,t=null){super(e,{isRenderable:!0,ignoreBorder:!!t?.ignoreBorder,createQuadrilaterals:!0}),this.isTooltipOnly=e.data.isTooltipOnly}render(){const{data:e,linkService:t}=this,s=document.createElement("a");s.setAttribute("data-element-id",e.id);let r=!1;return e.url?(t.addLinkAttributes(s,e.url,e.newWindow),r=!0):e.action?(this._bindNamedAction(s,e.action,e.overlaidText),r=!0):e.attachment?(this.#t(s,e.attachment,e.overlaidText,e.attachmentDest),r=!0):e.setOCGState?(this.#i(s,e.setOCGState,e.overlaidText),r=!0):e.dest?(this._bindLink(s,e.dest,e.overlaidText),r=!0):(e.actions&&(e.actions.Action||e.actions["Mouse Up"]||e.actions["Mouse Down"])&&this.enableScripting&&this.hasJSActions&&(this._bindJSAction(s,e),r=!0),e.resetForm?(this._bindResetFormAction(s,e.resetForm),r=!0):this.isTooltipOnly&&!r&&(this._bindLink(s,""),r=!0)),this.container.classList.add("linkAnnotation"),r&&this.container.append(s),this.container}#e(){this.container.setAttribute("data-internal-link","")}_bindLink(e,t,s=""){e.href=this.linkService.getDestinationHash(t),e.onclick=()=>(t&&this.linkService.goToDestination(t),!1),(t||t==="")&&this.#e(),s&&(e.title=s)}_bindNamedAction(e,t,s=""){e.href=this.linkService.getAnchorUrl(""),e.onclick=()=>(this.linkService.executeNamedAction(t),!1),s&&(e.title=s),this.#e()}#t(e,t,s="",r=null){e.href=this.linkService.getAnchorUrl(""),t.description?e.title=t.description:s&&(e.title=s),e.onclick=()=>(this.downloadManager?.openOrDownloadData(t.content,t.filename,r),!1),this.#e()}#i(e,t,s=""){e.href=this.linkService.getAnchorUrl(""),e.onclick=()=>(this.linkService.executeSetOCGState(t),!1),s&&(e.title=s),this.#e()}_bindJSAction(e,t){e.href=this.linkService.getAnchorUrl("");const s=new Map([["Action","onclick"],["Mouse Up","onmouseup"],["Mouse Down","onmousedown"]]);for(const r of Object.keys(t.actions)){const o=s.get(r);o&&(e[o]=()=>(this.linkService.eventBus?.dispatch("dispatcheventinsandbox",{source:this,detail:{id:t.id,name:r}}),!1))}t.overlaidText&&(e.title=t.overlaidText),e.onclick||(e.onclick=()=>!1),this.#e()}_bindResetFormAction(e,t){const s=e.onclick;if(s||(e.href=this.linkService.getAnchorUrl("")),this.#e(),!this._fieldObjects){ve('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'),s||(e.onclick=()=>!1);return}e.onclick=()=>{s?.();const{fields:r,refs:o,include:l}=t,u=[];if(r.length!==0||o.length!==0){const m=new Set(o);for(const b of r){const v=this._fieldObjects[b]||[];for(const{id:A}of v)m.add(A)}for(const b of Object.values(this._fieldObjects))for(const v of b)m.has(v.id)===l&&u.push(v)}else for(const m of Object.values(this._fieldObjects))u.push(...m);const h=this.annotationStorage,p=[];for(const m of u){const{id:b}=m;switch(p.push(b),m.type){case"text":{const A=m.defaultValue||"";h.setValue(b,{value:A});break}case"checkbox":case"radiobutton":{const A=m.defaultValue===m.exportValues;h.setValue(b,{value:A});break}case"combobox":case"listbox":{const A=m.defaultValue||"";h.setValue(b,{value:A});break}default:continue}const v=document.querySelector(`[data-element-id="${b}"]`);if(v){if(!us.has(v)){ve(`_bindResetFormAction - element not allowed: ${b}`);continue}}else continue;v.dispatchEvent(new Event("resetform"))}return this.enableScripting&&this.linkService.eventBus?.dispatch("dispatcheventinsandbox",{source:this,detail:{id:"app",ids:p,name:"ResetForm"}}),!1}}}class Yw extends nt{constructor(e){super(e,{isRenderable:!0})}render(){this.container.classList.add("textAnnotation");const e=document.createElement("img");return e.src=this.imageResourcesPath+"annotation-"+this.data.name.toLowerCase()+".svg",e.setAttribute("data-l10n-id","pdfjs-text-annotation-type"),e.setAttribute("data-l10n-args",JSON.stringify({type:this.data.name})),!this.data.popupRef&&this.hasPopupData&&this._createPopup(),this.container.append(e),this.container}}class fs extends nt{render(){return this.container}showElementAndHideCanvas(e){this.data.hasOwnCanvas&&(e.previousSibling?.nodeName==="CANVAS"&&(e.previousSibling.hidden=!0),e.hidden=!1)}_getKeyModifier(e){return wt.platform.isMac?e.metaKey:e.ctrlKey}_setEventListener(e,t,s,r,o){s.includes("mouse")?e.addEventListener(s,l=>{this.linkService.eventBus?.dispatch("dispatcheventinsandbox",{source:this,detail:{id:this.data.id,name:r,value:o(l),shift:l.shiftKey,modifier:this._getKeyModifier(l)}})}):e.addEventListener(s,l=>{if(s==="blur"){if(!t.focused||!l.relatedTarget)return;t.focused=!1}else if(s==="focus"){if(t.focused)return;t.focused=!0}o&&this.linkService.eventBus?.dispatch("dispatcheventinsandbox",{source:this,detail:{id:this.data.id,name:r,value:o(l)}})})}_setEventListeners(e,t,s,r){for(const[o,l]of s)(l==="Action"||this.data.actions?.[l])&&((l==="Focus"||l==="Blur")&&(t||={focused:!1}),this._setEventListener(e,t,o,l,r),l==="Focus"&&!this.data.actions?.Blur?this._setEventListener(e,t,"blur","Blur",null):l==="Blur"&&!this.data.actions?.Focus&&this._setEventListener(e,t,"focus","Focus",null))}_setBackgroundColor(e){const t=this.data.backgroundColor||null;e.style.backgroundColor=t===null?"transparent":ie.makeHexColor(t[0],t[1],t[2])}_setTextStyle(e){const t=["left","center","right"],{fontColor:s}=this.data.defaultAppearanceData,r=this.data.defaultAppearanceData.fontSize||Gw,o=e.style;let l;const u=2,h=p=>Math.round(10*p)/10;if(this.data.multiLine){const p=Math.abs(this.data.rect[3]-this.data.rect[1]-u),m=Math.round(p/(hd*r))||1,b=p/m;l=Math.min(r,h(b/hd))}else{const p=Math.abs(this.data.rect[3]-this.data.rect[1]-u);l=Math.min(r,h(p/hd))}o.fontSize=`calc(${l}px * var(--total-scale-factor))`,o.color=ie.makeHexColor(s[0],s[1],s[2]),this.data.textAlignment!==null&&(o.textAlign=t[this.data.textAlignment])}_setRequired(e,t){t?e.setAttribute("required",!0):e.removeAttribute("required"),e.setAttribute("aria-required",t)}}class Xw extends fs{constructor(e){const t=e.renderForms||e.data.hasOwnCanvas||!e.data.hasAppearance&&!!e.data.fieldValue;super(e,{isRenderable:t})}setPropertyOnSiblings(e,t,s,r){const o=this.annotationStorage;for(const l of this._getElementsByName(e.name,e.id))l.domElement&&(l.domElement[t]=s),o.setValue(l.id,{[r]:s})}render(){const e=this.annotationStorage,t=this.data.id;this.container.classList.add("textWidgetAnnotation");let s=null;if(this.renderForms){const r=e.getValue(t,{value:this.data.fieldValue});let o=r.value||"";const l=e.getValue(t,{charLimit:this.data.maxLen}).charLimit;l&&o.length>l&&(o=o.slice(0,l));let u=r.formattedValue||this.data.textContent?.join(`
`)||null;u&&this.data.comb&&(u=u.replaceAll(/\s+/g,""));const h={userValue:o,formattedValue:u,lastCommittedValue:null,commitKey:1,focused:!1};this.data.multiLine?(s=document.createElement("textarea"),s.textContent=u??o,this.data.doNotScroll&&(s.style.overflowY="hidden")):(s=document.createElement("input"),s.type=this.data.password?"password":"text",s.setAttribute("value",u??o),this.data.doNotScroll&&(s.style.overflowX="hidden")),this.data.hasOwnCanvas&&(s.hidden=!0),us.add(s),s.setAttribute("data-element-id",t),s.disabled=this.data.readOnly,s.name=this.data.fieldName,s.tabIndex=0;const{datetimeFormat:p,datetimeType:m,timeStep:b}=this.data,v=!!m&&this.enableScripting;p&&(s.title=p),this._setRequired(s,this.data.required),l&&(s.maxLength=l),s.addEventListener("input",x=>{e.setValue(t,{value:x.target.value}),this.setPropertyOnSiblings(s,"value",x.target.value,"value"),h.formattedValue=null}),s.addEventListener("resetform",x=>{const C=this.data.defaultFieldValue??"";s.value=h.userValue=C,h.formattedValue=null});let A=x=>{const{formattedValue:C}=h;C!=null&&(x.target.value=C),x.target.scrollLeft=0};if(this.enableScripting&&this.hasJSActions){s.addEventListener("focus",C=>{if(h.focused)return;const{target:T}=C;if(v&&(T.type=m,b&&(T.step=b)),h.userValue){const w=h.userValue;if(v)if(m==="time"){const _=new Date(w),R=[_.getHours(),_.getMinutes(),_.getSeconds()];T.value=R.map(O=>O.toString().padStart(2,"0")).join(":")}else T.value=new Date(w-qw).toISOString().split(m==="date"?"T":".",1)[0];else T.value=w}h.lastCommittedValue=T.value,h.commitKey=1,this.data.actions?.Focus||(h.focused=!0)}),s.addEventListener("updatefromsandbox",C=>{this.showElementAndHideCanvas(C.target);const T={value(w){h.userValue=w.detail.value??"",v||e.setValue(t,{value:h.userValue.toString()}),w.target.value=h.userValue},formattedValue(w){const{formattedValue:_}=w.detail;h.formattedValue=_,_!=null&&w.target!==document.activeElement&&(w.target.value=_);const R={formattedValue:_};v&&(R.value=_),e.setValue(t,R)},selRange(w){w.target.setSelectionRange(...w.detail.selRange)},charLimit:w=>{const{charLimit:_}=w.detail,{target:R}=w;if(_===0){R.removeAttribute("maxLength");return}R.setAttribute("maxLength",_);let O=h.userValue;!O||O.length<=_||(O=O.slice(0,_),R.value=h.userValue=O,e.setValue(t,{value:O}),this.linkService.eventBus?.dispatch("dispatcheventinsandbox",{source:this,detail:{id:t,name:"Keystroke",value:O,willCommit:!0,commitKey:1,selStart:R.selectionStart,selEnd:R.selectionEnd}}))}};this._dispatchEventFromSandbox(T,C)}),s.addEventListener("keydown",C=>{h.commitKey=1;let T=-1;if(C.key==="Escape"?T=0:C.key==="Enter"&&!this.data.multiLine?T=2:C.key==="Tab"&&(h.commitKey=3),T===-1)return;const{value:w}=C.target;h.lastCommittedValue!==w&&(h.lastCommittedValue=w,h.userValue=w,this.linkService.eventBus?.dispatch("dispatcheventinsandbox",{source:this,detail:{id:t,name:"Keystroke",value:w,willCommit:!0,commitKey:T,selStart:C.target.selectionStart,selEnd:C.target.selectionEnd}}))});const x=A;A=null,s.addEventListener("blur",C=>{if(!h.focused||!C.relatedTarget)return;this.data.actions?.Blur||(h.focused=!1);const{target:T}=C;let{value:w}=T;if(v){if(w&&m==="time"){const _=w.split(":").map(R=>parseInt(R,10));w=new Date(2e3,0,1,_[0],_[1],_[2]||0).valueOf(),T.step=""}else w.includes("T")||(w=`${w}T00:00`),w=new Date(w).valueOf();T.type="text"}h.userValue=w,h.lastCommittedValue!==w&&this.linkService.eventBus?.dispatch("dispatcheventinsandbox",{source:this,detail:{id:t,name:"Keystroke",value:w,willCommit:!0,commitKey:h.commitKey,selStart:C.target.selectionStart,selEnd:C.target.selectionEnd}}),x(C)}),this.data.actions?.Keystroke&&s.addEventListener("beforeinput",C=>{h.lastCommittedValue=null;const{data:T,target:w}=C,{value:_,selectionStart:R,selectionEnd:O}=w;let k=R,j=O;switch(C.inputType){case"deleteWordBackward":{const F=_.substring(0,R).match(/\w*[^\w]*$/);F&&(k-=F[0].length);break}case"deleteWordForward":{const F=_.substring(R).match(/^[^\w]*\w*/);F&&(j+=F[0].length);break}case"deleteContentBackward":R===O&&(k-=1);break;case"deleteContentForward":R===O&&(j+=1);break}C.preventDefault(),this.linkService.eventBus?.dispatch("dispatcheventinsandbox",{source:this,detail:{id:t,name:"Keystroke",value:_,change:T||"",willCommit:!1,selStart:k,selEnd:j}})}),this._setEventListeners(s,h,[["focus","Focus"],["blur","Blur"],["mousedown","Mouse Down"],["mouseenter","Mouse Enter"],["mouseleave","Mouse Exit"],["mouseup","Mouse Up"]],C=>C.target.value)}if(A&&s.addEventListener("blur",A),this.data.comb){const C=(this.data.rect[2]-this.data.rect[0])/l;s.classList.add("comb"),s.style.letterSpacing=`calc(${C}px * var(--total-scale-factor) - 1ch)`}}else s=document.createElement("div"),s.textContent=this.data.fieldValue,s.style.verticalAlign="middle",s.style.display="table-cell",this.data.hasOwnCanvas&&(s.hidden=!0);return this._setTextStyle(s),this._setBackgroundColor(s),this._setDefaultPropertiesFromJS(s),this.container.append(s),this.container}}class Ww extends fs{constructor(e){super(e,{isRenderable:!!e.data.hasOwnCanvas})}}class $w extends fs{constructor(e){super(e,{isRenderable:e.renderForms})}render(){const e=this.annotationStorage,t=this.data,s=t.id;let r=e.getValue(s,{value:t.exportValue===t.fieldValue}).value;typeof r=="string"&&(r=r!=="Off",e.setValue(s,{value:r})),this.container.classList.add("buttonWidgetAnnotation","checkBox");const o=document.createElement("input");return us.add(o),o.setAttribute("data-element-id",s),o.disabled=t.readOnly,this._setRequired(o,this.data.required),o.type="checkbox",o.name=t.fieldName,r&&o.setAttribute("checked",!0),o.setAttribute("exportValue",t.exportValue),o.tabIndex=0,o.addEventListener("change",l=>{const{name:u,checked:h}=l.target;for(const p of this._getElementsByName(u,s)){const m=h&&p.exportValue===t.exportValue;p.domElement&&(p.domElement.checked=m),e.setValue(p.id,{value:m})}e.setValue(s,{value:h})}),o.addEventListener("resetform",l=>{const u=t.defaultFieldValue||"Off";l.target.checked=u===t.exportValue}),this.enableScripting&&this.hasJSActions&&(o.addEventListener("updatefromsandbox",l=>{const u={value(h){h.target.checked=h.detail.value!=="Off",e.setValue(s,{value:h.target.checked})}};this._dispatchEventFromSandbox(u,l)}),this._setEventListeners(o,null,[["change","Validate"],["change","Action"],["focus","Focus"],["blur","Blur"],["mousedown","Mouse Down"],["mouseenter","Mouse Enter"],["mouseleave","Mouse Exit"],["mouseup","Mouse Up"]],l=>l.target.checked)),this._setBackgroundColor(o),this._setDefaultPropertiesFromJS(o),this.container.append(o),this.container}}class Qy extends fs{constructor(e){super(e,{isRenderable:e.renderForms})}render(){this.container.classList.add("buttonWidgetAnnotation","radioButton");const e=this.annotationStorage,t=this.data,s=t.id;let r=e.getValue(s,{value:t.fieldValue===t.buttonValue}).value;if(typeof r=="string"&&(r=r!==t.buttonValue,e.setValue(s,{value:r})),r)for(const l of this._getElementsByName(t.fieldName,s))e.setValue(l.id,{value:!1});const o=document.createElement("input");if(us.add(o),o.setAttribute("data-element-id",s),o.disabled=t.readOnly,this._setRequired(o,this.data.required),o.type="radio",o.name=t.fieldName,r&&o.setAttribute("checked",!0),o.tabIndex=0,o.addEventListener("change",l=>{const{name:u,checked:h}=l.target;for(const p of this._getElementsByName(u,s))e.setValue(p.id,{value:!1});e.setValue(s,{value:h})}),o.addEventListener("resetform",l=>{const u=t.defaultFieldValue;l.target.checked=u!=null&&u===t.buttonValue}),this.enableScripting&&this.hasJSActions){const l=t.buttonValue;o.addEventListener("updatefromsandbox",u=>{const h={value:p=>{const m=l===p.detail.value;for(const b of this._getElementsByName(p.target.name)){const v=m&&b.id===s;b.domElement&&(b.domElement.checked=v),e.setValue(b.id,{value:v})}}};this._dispatchEventFromSandbox(h,u)}),this._setEventListeners(o,null,[["change","Validate"],["change","Action"],["focus","Focus"],["blur","Blur"],["mousedown","Mouse Down"],["mouseenter","Mouse Enter"],["mouseleave","Mouse Exit"],["mouseup","Mouse Up"]],u=>u.target.checked)}return this._setBackgroundColor(o),this._setDefaultPropertiesFromJS(o),this.container.append(o),this.container}}class Kw extends sh{constructor(e){super(e,{ignoreBorder:e.data.hasAppearance})}render(){const e=super.render();e.classList.add("buttonWidgetAnnotation","pushButton");const t=e.lastChild;return this.enableScripting&&this.hasJSActions&&t&&(this._setDefaultPropertiesFromJS(t),t.addEventListener("updatefromsandbox",s=>{this._dispatchEventFromSandbox({},s)})),e}}class Qw extends fs{constructor(e){super(e,{isRenderable:e.renderForms})}render(){this.container.classList.add("choiceWidgetAnnotation");const e=this.annotationStorage,t=this.data.id,s=e.getValue(t,{value:this.data.fieldValue}),r=document.createElement("select");us.add(r),r.setAttribute("data-element-id",t),r.disabled=this.data.readOnly,this._setRequired(r,this.data.required),r.name=this.data.fieldName,r.tabIndex=0;let o=this.data.combo&&this.data.options.length>0;this.data.combo||(r.size=this.data.options.length,this.data.multiSelect&&(r.multiple=!0)),r.addEventListener("resetform",m=>{const b=this.data.defaultFieldValue;for(const v of r.options)v.selected=v.value===b});for(const m of this.data.options){const b=document.createElement("option");b.textContent=m.displayValue,b.value=m.exportValue,s.value.includes(m.exportValue)&&(b.setAttribute("selected",!0),o=!1),r.append(b)}let l=null;if(o){const m=document.createElement("option");m.value=" ",m.setAttribute("hidden",!0),m.setAttribute("selected",!0),r.prepend(m),l=()=>{m.remove(),r.removeEventListener("input",l),l=null},r.addEventListener("input",l)}const u=m=>{const b=m?"value":"textContent",{options:v,multiple:A}=r;return A?Array.prototype.filter.call(v,x=>x.selected).map(x=>x[b]):v.selectedIndex===-1?null:v[v.selectedIndex][b]};let h=u(!1);const p=m=>{const b=m.target.options;return Array.prototype.map.call(b,v=>({displayValue:v.textContent,exportValue:v.value}))};return this.enableScripting&&this.hasJSActions?(r.addEventListener("updatefromsandbox",m=>{const b={value(v){l?.();const A=v.detail.value,x=new Set(Array.isArray(A)?A:[A]);for(const C of r.options)C.selected=x.has(C.value);e.setValue(t,{value:u(!0)}),h=u(!1)},multipleSelection(v){r.multiple=!0},remove(v){const A=r.options,x=v.detail.remove;A[x].selected=!1,r.remove(x),A.length>0&&Array.prototype.findIndex.call(A,T=>T.selected)===-1&&(A[0].selected=!0),e.setValue(t,{value:u(!0),items:p(v)}),h=u(!1)},clear(v){for(;r.length!==0;)r.remove(0);e.setValue(t,{value:null,items:[]}),h=u(!1)},insert(v){const{index:A,displayValue:x,exportValue:C}=v.detail.insert,T=r.children[A],w=document.createElement("option");w.textContent=x,w.value=C,T?T.before(w):r.append(w),e.setValue(t,{value:u(!0),items:p(v)}),h=u(!1)},items(v){const{items:A}=v.detail;for(;r.length!==0;)r.remove(0);for(const x of A){const{displayValue:C,exportValue:T}=x,w=document.createElement("option");w.textContent=C,w.value=T,r.append(w)}r.options.length>0&&(r.options[0].selected=!0),e.setValue(t,{value:u(!0),items:p(v)}),h=u(!1)},indices(v){const A=new Set(v.detail.indices);for(const x of v.target.options)x.selected=A.has(x.index);e.setValue(t,{value:u(!0)}),h=u(!1)},editable(v){v.target.disabled=!v.detail.editable}};this._dispatchEventFromSandbox(b,m)}),r.addEventListener("input",m=>{const b=u(!0),v=u(!1);e.setValue(t,{value:b}),m.preventDefault(),this.linkService.eventBus?.dispatch("dispatcheventinsandbox",{source:this,detail:{id:t,name:"Keystroke",value:h,change:v,changeEx:b,willCommit:!1,commitKey:1,keyDown:!1}})}),this._setEventListeners(r,null,[["focus","Focus"],["blur","Blur"],["mousedown","Mouse Down"],["mouseenter","Mouse Enter"],["mouseleave","Mouse Exit"],["mouseup","Mouse Up"],["input","Action"],["input","Validate"]],m=>m.target.value)):r.addEventListener("input",function(m){e.setValue(t,{value:u(!0)})}),this.data.combo&&this._setTextStyle(r),this._setBackgroundColor(r),this._setDefaultPropertiesFromJS(r),this.container.append(r),this.container}}class Dd extends nt{constructor(e){const{data:t,elements:s,parent:r}=e,o=!!r._commentManager;if(super(e,{isRenderable:!o&&nt._hasPopupData(t)}),this.elements=s,o&&nt._hasPopupData(t)){const l=this.popup=this.#e();for(const u of s)u.popup=l}else this.popup=null}#e(){return new Jw({container:this.container,color:this.data.color,titleObj:this.data.titleObj,modificationDate:this.data.modificationDate||this.data.creationDate,contentsObj:this.data.contentsObj,richText:this.data.richText,rect:this.data.rect,parentRect:this.data.parentRect||null,parent:this.parent,elements:this.elements,open:this.data.open,commentManager:this.parent._commentManager})}render(){const{container:e}=this;e.classList.add("popupAnnotation"),e.role="comment";const t=this.popup=this.#e(),s=[];for(const r of this.elements)r.popup=t,r.container.ariaHasPopup="dialog",s.push(r.data.id),r.addHighlightArea();return this.container.setAttribute("aria-controls",s.map(r=>`${Yd}${r}`).join(",")),this.container}}class Jw{#e=null;#t=this.#q.bind(this);#i=this.#F.bind(this);#n=this.#P.bind(this);#a=this.#S.bind(this);#s=null;#r=null;#o=null;#c=null;#l=null;#h=null;#d=null;#f=!1;#g=null;#p=null;#u=null;#m=null;#y=null;#v=null;#b=null;#E=null;#x=null;#A=null;#_=!1;#C=null;#w=null;constructor({container:e,color:t,elements:s,titleObj:r,modificationDate:o,contentsObj:l,richText:u,parent:h,rect:p,parentRect:m,open:b,commentManager:v=null}){this.#r=e,this.#x=r,this.#o=l,this.#E=u,this.#h=h,this.#s=t,this.#b=p,this.#d=m,this.#l=s,this.#e=v,this.#C=s[0],this.#c=_l.toDateObject(o),this.trigger=s.flatMap(A=>A.getElementsToTriggerPopup()),v?this.renderCommentButton():(this.#M(),this.#r.hidden=!0,b&&this.#S())}#M(){if(this.#p)return;this.#p=new AbortController;const{signal:e}=this.#p;for(const t of this.trigger)t.addEventListener("click",this.#a,{signal:e}),t.addEventListener("pointerenter",this.#n,{signal:e}),t.addEventListener("pointerleave",this.#i,{signal:e}),t.classList.add("popupTriggerArea");for(const t of this.#l)t.container?.addEventListener("keydown",this.#t,{signal:e})}#R(){const e=this.#l.find(t=>t.hasCommentButton);e&&(this.#y=e._normalizePoint(e.commentButtonPosition))}renderCommentButton(){if(this.#m||(this.#y||this.#R(),!this.#y))return;const{signal:e}=this.#p=new AbortController,t=!!this.#C.extraPopupElement,s=()=>{this.#e.toggleCommentPopup(this,!0,void 0,!t)},r=()=>{this.#e.toggleCommentPopup(this,!1,!0,!t)},o=()=>{this.#e.toggleCommentPopup(this,!1,!1)};if(t){this.#m=this.#C.container;for(const l of this.trigger)l.ariaHasPopup="dialog",l.ariaControls="commentPopup",l.addEventListener("keydown",this.#t,{signal:e}),l.addEventListener("click",s,{signal:e}),l.addEventListener("pointerenter",r,{signal:e}),l.addEventListener("pointerleave",o,{signal:e}),l.classList.add("popupTriggerArea")}else{const l=this.#m=document.createElement("button");l.className="annotationCommentButton";const u=this.#C.container;l.style.zIndex=u.style.zIndex+1,l.tabIndex=0,l.ariaHasPopup="dialog",l.ariaControls="commentPopup",l.setAttribute("data-l10n-id","pdfjs-show-comment-button"),this.#j(),this.#D(),l.addEventListener("keydown",this.#t,{signal:e}),l.addEventListener("click",s,{signal:e}),l.addEventListener("pointerenter",r,{signal:e}),l.addEventListener("pointerleave",o,{signal:e}),u.after(l)}}#D(){if(this.#C.extraPopupElement&&!this.#C.editor)return;this.renderCommentButton();const[e,t]=this.#y,{style:s}=this.#m;s.left=`calc(${e}%)`,s.top=`calc(${t}% - var(--comment-button-dim))`}#j(){this.#C.extraPopupElement||(this.renderCommentButton(),this.#m.style.backgroundColor=this.commentButtonColor||"")}get commentButtonColor(){const{color:e,opacity:t}=this.#C.commentData;return e?this.#h._commentManager.makeCommentColor(e,t):null}focusCommentButton(){setTimeout(()=>{this.#m?.focus()},0)}getData(){const{richText:e,color:t,opacity:s,creationDate:r,modificationDate:o}=this.#C.commentData;return{contentsObj:{str:this.comment},richText:e,color:t,opacity:s,creationDate:r,modificationDate:o}}get elementBeforePopup(){return this.#m}get comment(){return this.#w||=this.#C.commentText,this.#w}set comment(e){e!==this.comment&&(this.#C.commentText=this.#w=e)}get parentBoundingClientRect(){return this.#C.layer.getBoundingClientRect()}setCommentButtonStates({selected:e,hasPopup:t}){this.#m&&(this.#m.classList.toggle("selected",e),this.#m.ariaExpanded=t)}setSelectedCommentButton(e){this.#m.classList.toggle("selected",e)}get commentPopupPosition(){if(this.#v)return this.#v;const{x:e,y:t,height:s}=this.#m.getBoundingClientRect(),{x:r,y:o,width:l,height:u}=this.#C.layer.getBoundingClientRect();return[(e-r)/l,(t+s-o)/u]}set commentPopupPosition(e){this.#v=e}hasDefaultPopupPosition(){return this.#v===null}get commentButtonPosition(){return this.#y}get commentButtonWidth(){return this.#m.getBoundingClientRect().width/this.parentBoundingClientRect.width}editComment(e){const[t,s]=this.#v||this.commentButtonPosition.map(p=>p/100),r=this.parentBoundingClientRect,{x:o,y:l,width:u,height:h}=r;this.#e.showDialog(null,this,o+t*u,l+s*h,{...e,parentDimensions:r})}render(){if(this.#g)return;const e=this.#g=document.createElement("div");if(e.className="popup",this.#s){const s=e.style.outlineColor=ie.makeHexColor(...this.#s);e.style.backgroundColor=`color-mix(in srgb, ${s} 30%, white)`}const t=document.createElement("span");if(t.className="header",this.#x?.str){const s=document.createElement("span");s.className="title",t.append(s),{dir:s.dir,str:s.textContent}=this.#x}if(e.append(t),this.#c){const s=document.createElement("time");s.className="popupDate",s.setAttribute("data-l10n-id","pdfjs-annotation-date-time-string"),s.setAttribute("data-l10n-args",JSON.stringify({dateObj:this.#c.valueOf()})),s.dateTime=this.#c.toISOString(),t.append(s)}Wd({html:this.#L||this.#o.str,dir:this.#o?.dir,className:"popupContent"},e),this.#r.append(e)}get#L(){const e=this.#E,t=this.#o;return e?.str&&(!t?.str||t.str===e.str)&&this.#E.html||null}get#O(){return this.#L?.attributes?.style?.fontSize||0}get#B(){return this.#L?.attributes?.style?.color||null}#N(e){const t=[],s={str:e,html:{name:"div",attributes:{dir:"auto"},children:[{name:"p",children:t}]}},r={style:{color:this.#B,fontSize:this.#O?`calc(${this.#O}px * var(--total-scale-factor))`:""}};for(const o of e.split(`
`))t.push({name:"span",value:o,attributes:r});return s}#q(e){e.altKey||e.shiftKey||e.ctrlKey||e.metaKey||(e.key==="Enter"||e.key==="Escape"&&this.#f)&&this.#S()}updateEdited({rect:e,popup:t,deleted:s}){if(this.#e){s?(this.remove(),this.#w=null):t&&(t.deleted?this.remove():(this.#j(),this.#w=t.text)),e&&(this.#y=null,this.#R(),this.#D());return}if(s||t?.deleted){this.remove();return}this.#M(),this.#A||={contentsObj:this.#o,richText:this.#E},e&&(this.#u=null),t&&t.text&&(this.#E=this.#N(t.text),this.#c=_l.toDateObject(t.date),this.#o=null),this.#g?.remove(),this.#g=null}resetEdited(){this.#A&&({contentsObj:this.#o,richText:this.#E}=this.#A,this.#A=null,this.#g?.remove(),this.#g=null,this.#u=null)}remove(){if(this.#p?.abort(),this.#p=null,this.#g?.remove(),this.#g=null,this.#_=!1,this.#f=!1,this.#m?.remove(),this.#m=null,this.trigger)for(const e of this.trigger)e.classList.remove("popupTriggerArea")}#T(){if(this.#u!==null)return;const{page:{view:e},viewport:{rawDims:{pageWidth:t,pageHeight:s,pageX:r,pageY:o}}}=this.#h;let l=!!this.#d,u=l?this.#d:this.#b;for(const x of this.#l)if(!u||ie.intersect(x.data.rect,u)!==null){u=x.data.rect,l=!0;break}const h=ie.normalizeRect([u[0],e[3]-u[1]+e[1],u[2],e[3]-u[3]+e[1]]),m=l?u[2]-u[0]+5:0,b=h[0]+m,v=h[1];this.#u=[100*(b-r)/t,100*(v-o)/s];const{style:A}=this.#r;A.left=`${this.#u[0]}%`,A.top=`${this.#u[1]}%`}#S(){if(this.#e){this.#e.toggleCommentPopup(this,!1);return}this.#f=!this.#f,this.#f?(this.#P(),this.#r.addEventListener("click",this.#a),this.#r.addEventListener("keydown",this.#t)):(this.#F(),this.#r.removeEventListener("click",this.#a),this.#r.removeEventListener("keydown",this.#t))}#P(){this.#g||this.render(),this.isVisible?this.#f&&this.#r.classList.add("focused"):(this.#T(),this.#r.hidden=!1,this.#r.style.zIndex=parseInt(this.#r.style.zIndex)+1e3)}#F(){this.#r.classList.remove("focused"),!(this.#f||!this.isVisible)&&(this.#r.hidden=!0,this.#r.style.zIndex=parseInt(this.#r.style.zIndex)-1e3)}forceHide(){this.#_=this.isVisible,this.#_&&(this.#r.hidden=!0)}maybeShow(){this.#e||(this.#M(),this.#_&&(this.#g||this.#P(),this.#_=!1,this.#r.hidden=!1))}get isVisible(){return this.#e?!1:this.#r.hidden===!1}}class Jy extends nt{constructor(e){super(e,{isRenderable:!0,ignoreBorder:!0}),this.textContent=e.data.textContent,this.textPosition=e.data.textPosition,this.annotationEditorType=be.FREETEXT}render(){if(this.container.classList.add("freeTextAnnotation"),this.textContent){const e=document.createElement("div");e.classList.add("annotationTextContent"),e.setAttribute("role","comment");for(const t of this.textContent){const s=document.createElement("span");s.textContent=t,e.append(s)}this.container.append(e)}return!this.data.popupRef&&this.hasPopupData&&this._createPopup(),this._editOnDoubleClick(),this.container}}class Zw extends nt{#e=null;constructor(e){super(e,{isRenderable:!0,ignoreBorder:!0})}render(){this.container.classList.add("lineAnnotation");const{data:e,width:t,height:s}=this,r=this.svgFactory.create(t,s,!0),o=this.#e=this.svgFactory.createElement("svg:line");return o.setAttribute("x1",e.rect[2]-e.lineCoordinates[0]),o.setAttribute("y1",e.rect[3]-e.lineCoordinates[1]),o.setAttribute("x2",e.rect[2]-e.lineCoordinates[2]),o.setAttribute("y2",e.rect[3]-e.lineCoordinates[3]),o.setAttribute("stroke-width",e.borderStyle.width||1),o.setAttribute("stroke","transparent"),o.setAttribute("fill","transparent"),r.append(o),this.container.append(r),!e.popupRef&&this.hasPopupData&&this._createPopup(),this.container}getElementsToTriggerPopup(){return this.#e}addHighlightArea(){this.container.classList.add("highlightArea")}}class eE extends nt{#e=null;constructor(e){super(e,{isRenderable:!0,ignoreBorder:!0})}render(){this.container.classList.add("squareAnnotation");const{data:e,width:t,height:s}=this,r=this.svgFactory.create(t,s,!0),o=e.borderStyle.width,l=this.#e=this.svgFactory.createElement("svg:rect");return l.setAttribute("x",o/2),l.setAttribute("y",o/2),l.setAttribute("width",t-o),l.setAttribute("height",s-o),l.setAttribute("stroke-width",o||1),l.setAttribute("stroke","transparent"),l.setAttribute("fill","transparent"),r.append(l),this.container.append(r),!e.popupRef&&this.hasPopupData&&this._createPopup(),this.container}getElementsToTriggerPopup(){return this.#e}addHighlightArea(){this.container.classList.add("highlightArea")}}class tE extends nt{#e=null;constructor(e){super(e,{isRenderable:!0,ignoreBorder:!0})}render(){this.container.classList.add("circleAnnotation");const{data:e,width:t,height:s}=this,r=this.svgFactory.create(t,s,!0),o=e.borderStyle.width,l=this.#e=this.svgFactory.createElement("svg:ellipse");return l.setAttribute("cx",t/2),l.setAttribute("cy",s/2),l.setAttribute("rx",t/2-o/2),l.setAttribute("ry",s/2-o/2),l.setAttribute("stroke-width",o||1),l.setAttribute("stroke","transparent"),l.setAttribute("fill","transparent"),r.append(l),this.container.append(r),!e.popupRef&&this.hasPopupData&&this._createPopup(),this.container}getElementsToTriggerPopup(){return this.#e}addHighlightArea(){this.container.classList.add("highlightArea")}}class Zy extends nt{#e=null;constructor(e){super(e,{isRenderable:!0,ignoreBorder:!0}),this.containerClassName="polylineAnnotation",this.svgElementName="svg:polyline"}render(){this.container.classList.add(this.containerClassName);const{data:{rect:e,vertices:t,borderStyle:s,popupRef:r},width:o,height:l}=this;if(!t)return this.container;const u=this.svgFactory.create(o,l,!0);let h=[];for(let m=0,b=t.length;m<b;m+=2){const v=t[m]-e[0],A=e[3]-t[m+1];h.push(`${v},${A}`)}h=h.join(" ");const p=this.#e=this.svgFactory.createElement(this.svgElementName);return p.setAttribute("points",h),p.setAttribute("stroke-width",s.width||1),p.setAttribute("stroke","transparent"),p.setAttribute("fill","transparent"),u.append(p),this.container.append(u),!r&&this.hasPopupData&&this._createPopup(),this.container}getElementsToTriggerPopup(){return this.#e}addHighlightArea(){this.container.classList.add("highlightArea")}}class nE extends Zy{constructor(e){super(e),this.containerClassName="polygonAnnotation",this.svgElementName="svg:polygon"}}class iE extends nt{constructor(e){super(e,{isRenderable:!0,ignoreBorder:!0})}render(){return this.container.classList.add("caretAnnotation"),!this.data.popupRef&&this.hasPopupData&&this._createPopup(),this.container}}class rh extends nt{#e=null;#t=[];constructor(e){super(e,{isRenderable:!0,ignoreBorder:!0}),this.containerClassName="inkAnnotation",this.svgElementName="svg:polyline",this.annotationEditorType=this.data.it==="InkHighlight"?be.HIGHLIGHT:be.INK}#i(e,t){switch(e){case 90:return{transform:`rotate(90) translate(${-t[0]},${t[1]}) scale(1,-1)`,width:t[3]-t[1],height:t[2]-t[0]};case 180:return{transform:`rotate(180) translate(${-t[2]},${t[1]}) scale(1,-1)`,width:t[2]-t[0],height:t[3]-t[1]};case 270:return{transform:`rotate(270) translate(${-t[2]},${t[3]}) scale(1,-1)`,width:t[3]-t[1],height:t[2]-t[0]};default:return{transform:`translate(${-t[0]},${t[3]}) scale(1,-1)`,width:t[2]-t[0],height:t[3]-t[1]}}}render(){this.container.classList.add(this.containerClassName);const{data:{rect:e,rotation:t,inkLists:s,borderStyle:r,popupRef:o}}=this,{transform:l,width:u,height:h}=this.#i(t,e),p=this.svgFactory.create(u,h,!0),m=this.#e=this.svgFactory.createElement("svg:g");p.append(m),m.setAttribute("stroke-width",r.width||1),m.setAttribute("stroke-linecap","round"),m.setAttribute("stroke-linejoin","round"),m.setAttribute("stroke-miterlimit",10),m.setAttribute("stroke","transparent"),m.setAttribute("fill","transparent"),m.setAttribute("transform",l);for(let b=0,v=s.length;b<v;b++){const A=this.svgFactory.createElement(this.svgElementName);this.#t.push(A),A.setAttribute("points",s[b].join(",")),m.append(A)}return!o&&this.hasPopupData&&this._createPopup(),this.container.append(p),this._editOnDoubleClick(),this.container}updateEdited(e){super.updateEdited(e);const{thickness:t,points:s,rect:r}=e,o=this.#e;if(t>=0&&o.setAttribute("stroke-width",t||1),s)for(let l=0,u=this.#t.length;l<u;l++)this.#t[l].setAttribute("points",s[l].join(","));if(r){const{transform:l,width:u,height:h}=this.#i(this.data.rotation,r);o.parentElement.setAttribute("viewBox",`0 0 ${u} ${h}`),o.setAttribute("transform",l)}}getElementsToTriggerPopup(){return this.#t}addHighlightArea(){this.container.classList.add("highlightArea")}}class eb extends nt{constructor(e){super(e,{isRenderable:!0,ignoreBorder:!0,createQuadrilaterals:!0}),this.annotationEditorType=be.HIGHLIGHT}render(){const{data:{overlaidText:e,popupRef:t}}=this;if(!t&&this.hasPopupData&&this._createPopup(),this.container.classList.add("highlightAnnotation"),this._editOnDoubleClick(),e){const s=document.createElement("mark");s.classList.add("overlaidText"),s.textContent=e,this.container.append(s)}return this.container}}class sE extends nt{constructor(e){super(e,{isRenderable:!0,ignoreBorder:!0,createQuadrilaterals:!0})}render(){const{data:{overlaidText:e,popupRef:t}}=this;if(!t&&this.hasPopupData&&this._createPopup(),this.container.classList.add("underlineAnnotation"),e){const s=document.createElement("u");s.classList.add("overlaidText"),s.textContent=e,this.container.append(s)}return this.container}}class rE extends nt{constructor(e){super(e,{isRenderable:!0,ignoreBorder:!0,createQuadrilaterals:!0})}render(){const{data:{overlaidText:e,popupRef:t}}=this;if(!t&&this.hasPopupData&&this._createPopup(),this.container.classList.add("squigglyAnnotation"),e){const s=document.createElement("u");s.classList.add("overlaidText"),s.textContent=e,this.container.append(s)}return this.container}}class aE extends nt{constructor(e){super(e,{isRenderable:!0,ignoreBorder:!0,createQuadrilaterals:!0})}render(){const{data:{overlaidText:e,popupRef:t}}=this;if(!t&&this.hasPopupData&&this._createPopup(),this.container.classList.add("strikeoutAnnotation"),e){const s=document.createElement("s");s.classList.add("overlaidText"),s.textContent=e,this.container.append(s)}return this.container}}class tb extends nt{constructor(e){super(e,{isRenderable:!0,ignoreBorder:!0}),this.annotationEditorType=be.STAMP}render(){return this.container.classList.add("stampAnnotation"),this.container.setAttribute("role","img"),!this.data.popupRef&&this.hasPopupData&&this._createPopup(),this._editOnDoubleClick(),this.container}}class oE extends nt{#e=null;constructor(e){super(e,{isRenderable:!0});const{file:t}=this.data;this.filename=t.filename,this.content=t.content,this.linkService.eventBus?.dispatch("fileattachmentannotation",{source:this,...t})}render(){this.container.classList.add("fileAttachmentAnnotation");const{container:e,data:t}=this;let s;t.hasAppearance||t.fillAlpha===0?s=document.createElement("div"):(s=document.createElement("img"),s.src=`${this.imageResourcesPath}annotation-${/paperclip/i.test(t.name)?"paperclip":"pushpin"}.svg`,t.fillAlpha&&t.fillAlpha<1&&(s.style=`filter: opacity(${Math.round(t.fillAlpha*100)}%);`)),s.addEventListener("dblclick",this.#t.bind(this)),this.#e=s;const{isMac:r}=wt.platform;return e.addEventListener("keydown",o=>{o.key==="Enter"&&(r?o.metaKey:o.ctrlKey)&&this.#t()}),!t.popupRef&&this.hasPopupData?this._createPopup():s.classList.add("popupTriggerArea"),e.append(s),e}getElementsToTriggerPopup(){return this.#e}addHighlightArea(){this.container.classList.add("highlightArea")}#t(){this.downloadManager?.openOrDownloadData(this.content,this.filename)}}let ah=class nb{#e=null;#t=null;#i=null;#n=new Map;#a=null;#s=null;constructor({div:e,accessibilityManager:t,annotationCanvasMap:s,annotationEditorUIManager:r,page:o,viewport:l,structTreeLayer:u,commentManager:h,linkService:p,annotationStorage:m}){this.div=e,this.#e=t,this.#t=s,this.#a=u||null,this.#s=p||null,this.#i=m||new Qd,this.page=o,this.viewport=l,this.zIndex=0,this._annotationEditorUIManager=r,this._commentManager=h||null}hasEditableAnnotations(){return this.#n.size>0}async#r(e,t,s){const r=e.firstChild||e,o=r.id=`${Yd}${t}`,l=await this.#a?.getAriaAttributes(o);if(l)for(const[u,h]of l)r.setAttribute(u,h);s?s.at(-1).container.after(e):(this.div.append(e),this.#e?.moveElementInDOM(this.div,e,r,!1))}async render(e){const{annotations:t}=e,s=this.div;Ii(s,this.viewport);const r=new Map,o={data:null,layer:s,linkService:this.#s,downloadManager:e.downloadManager,imageResourcesPath:e.imageResourcesPath||"",renderForms:e.renderForms!==!1,svgFactory:new Oa,annotationStorage:this.#i,enableComment:e.enableComment===!0,enableScripting:e.enableScripting===!0,hasJSActions:e.hasJSActions,fieldObjects:e.fieldObjects,parent:this,elements:null};for(const l of t){if(l.noHTML)continue;const u=l.annotationType===ut.POPUP;if(u){const m=r.get(l.id);if(!m)continue;o.elements=m}else if(l.rect[2]===l.rect[0]||l.rect[3]===l.rect[1])continue;o.data=l;const h=Yg.create(o);if(!h.isRenderable)continue;if(!u&&l.popupRef){const m=r.get(l.popupRef);m?m.push(h):r.set(l.popupRef,[h])}const p=h.render();l.hidden&&(p.style.visibility="hidden"),await this.#r(p,l.id,o.elements),h.extraPopupElement?.popup?.renderCommentButton(),h._isEditable&&(this.#n.set(h.data.id,h),this._annotationEditorUIManager?.renderAnnotationElement(h))}this.#o()}async addLinkAnnotations(e){const t={data:null,layer:this.div,linkService:this.#s,svgFactory:new Oa,parent:this};for(const s of e){s.borderStyle||=nb._defaultBorderStyle,t.data=s;const r=Yg.create(t);if(!r.isRenderable)continue;const o=r.render();await this.#r(o,s.id,null)}}update({viewport:e}){const t=this.div;this.viewport=e,Ii(t,{rotation:e.rotation}),this.#o(),t.hidden=!1}#o(){if(!this.#t)return;const e=this.div;for(const[t,s]of this.#t){const r=e.querySelector(`[data-annotation-id="${t}"]`);if(!r)continue;s.className="annotationContent";const{firstChild:o}=r;o?o.nodeName==="CANVAS"?o.replaceWith(s):o.classList.contains("annotationContent")?o.after(s):o.before(s):r.append(s);const l=this.#n.get(t);l&&(l._hasNoCanvas?(this._annotationEditorUIManager?.setMissingCanvas(t,r.id,s),l._hasNoCanvas=!1):l.canvas=s)}this.#t.clear()}getEditableAnnotations(){return Array.from(this.#n.values())}getEditableAnnotation(e){return this.#n.get(e)}addFakeAnnotation(e){const{div:t}=this,{id:s,rotation:r}=e,o=new Vw({data:{id:s,rect:e.getPDFRect(),rotation:r},editor:e,layer:t,parent:this,enableComment:!!this._commentManager,linkService:this.#s,annotationStorage:this.#i}),l=o.render();return t.append(l),this.#e?.moveElementInDOM(t,l,l,!1),o.createOrUpdatePopup(),o}static get _defaultBorderStyle(){return Se(this,"_defaultBorderStyle",Object.freeze({width:1,rawWidth:1,style:tr.SOLID,dashArray:[3],horizontalCornerRadius:0,verticalCornerRadius:0}))}};const vl=/\r\n?|\n/g;class Ct extends ue{#e="";#t=`${this.id}-editor`;#i=null;#n;_colorPicker=null;static _freeTextDefaultContent="";static _internalPadding=0;static _defaultColor=null;static _defaultFontSize=10;static get _keyboardManager(){const e=Ct.prototype,t=o=>o.isEmpty(),s=ci.TRANSLATE_SMALL,r=ci.TRANSLATE_BIG;return Se(this,"_keyboardManager",new za([[["ctrl+s","mac+meta+s","ctrl+p","mac+meta+p"],e.commitOrRemove,{bubbles:!0}],[["ctrl+Enter","mac+meta+Enter","Escape","mac+Escape"],e.commitOrRemove],[["ArrowLeft","mac+ArrowLeft"],e._translateEmpty,{args:[-s,0],checker:t}],[["ctrl+ArrowLeft","mac+shift+ArrowLeft"],e._translateEmpty,{args:[-r,0],checker:t}],[["ArrowRight","mac+ArrowRight"],e._translateEmpty,{args:[s,0],checker:t}],[["ctrl+ArrowRight","mac+shift+ArrowRight"],e._translateEmpty,{args:[r,0],checker:t}],[["ArrowUp","mac+ArrowUp"],e._translateEmpty,{args:[0,-s],checker:t}],[["ctrl+ArrowUp","mac+shift+ArrowUp"],e._translateEmpty,{args:[0,-r],checker:t}],[["ArrowDown","mac+ArrowDown"],e._translateEmpty,{args:[0,s],checker:t}],[["ctrl+ArrowDown","mac+shift+ArrowDown"],e._translateEmpty,{args:[0,r],checker:t}]]))}static _type="freetext";static _editorType=be.FREETEXT;constructor(e){super({...e,name:"freeTextEditor"}),this.color=e.color||Ct._defaultColor||ue._defaultLineColor,this.#n=e.fontSize||Ct._defaultFontSize,this.annotationElementId||this._uiManager.a11yAlert("pdfjs-editor-freetext-added-alert")}static initialize(e,t){ue.initialize(e,t);const s=getComputedStyle(document.documentElement);this._internalPadding=parseFloat(s.getPropertyValue("--freetext-padding"))}static updateDefaultParams(e,t){switch(e){case _e.FREETEXT_SIZE:Ct._defaultFontSize=t;break;case _e.FREETEXT_COLOR:Ct._defaultColor=t;break}}updateParams(e,t){switch(e){case _e.FREETEXT_SIZE:this.#a(t);break;case _e.FREETEXT_COLOR:this.#s(t);break}}static get defaultPropertiesToUpdate(){return[[_e.FREETEXT_SIZE,Ct._defaultFontSize],[_e.FREETEXT_COLOR,Ct._defaultColor||ue._defaultLineColor]]}get propertiesToUpdate(){return[[_e.FREETEXT_SIZE,this.#n],[_e.FREETEXT_COLOR,this.color]]}get toolbarButtons(){return this._colorPicker||=new Pa(this),[["colorPicker",this._colorPicker]]}get colorType(){return _e.FREETEXT_COLOR}#a(e){const t=r=>{this.editorDiv.style.fontSize=`calc(${r}px * var(--total-scale-factor))`,this.translate(0,-(r-this.#n)*this.parentScale),this.#n=r,this.#o()},s=this.#n;this.addCommands({cmd:t.bind(this,e),undo:t.bind(this,s),post:this._uiManager.updateUI.bind(this._uiManager,this),mustExec:!0,type:_e.FREETEXT_SIZE,overwriteIfSameType:!0,keepUndo:!0})}onUpdatedColor(){this.editorDiv.style.color=this.color,this._colorPicker?.update(this.color),super.onUpdatedColor()}#s(e){const t=r=>{this.color=r,this.onUpdatedColor()},s=this.color;this.addCommands({cmd:t.bind(this,e),undo:t.bind(this,s),post:this._uiManager.updateUI.bind(this._uiManager,this),mustExec:!0,type:_e.FREETEXT_COLOR,overwriteIfSameType:!0,keepUndo:!0})}_translateEmpty(e,t){this._uiManager.translateSelectedEditors(e,t,!0)}getInitialTranslation(){const e=this.parentScale;return[-Ct._internalPadding*e,-(Ct._internalPadding+this.#n)*e]}rebuild(){this.parent&&(super.rebuild(),this.div!==null&&(this.isAttachedToDOM||this.parent.add(this)))}enableEditMode(){if(!super.enableEditMode())return!1;this.overlayDiv.classList.remove("enabled"),this.editorDiv.contentEditable=!0,this._isDraggable=!1,this.div.removeAttribute("aria-activedescendant"),this.#i=new AbortController;const e=this._uiManager.combinedSignal(this.#i);return this.editorDiv.addEventListener("keydown",this.editorDivKeydown.bind(this),{signal:e}),this.editorDiv.addEventListener("focus",this.editorDivFocus.bind(this),{signal:e}),this.editorDiv.addEventListener("blur",this.editorDivBlur.bind(this),{signal:e}),this.editorDiv.addEventListener("input",this.editorDivInput.bind(this),{signal:e}),this.editorDiv.addEventListener("paste",this.editorDivPaste.bind(this),{signal:e}),!0}disableEditMode(){return super.disableEditMode()?(this.overlayDiv.classList.add("enabled"),this.editorDiv.contentEditable=!1,this.div.setAttribute("aria-activedescendant",this.#t),this._isDraggable=!0,this.#i?.abort(),this.#i=null,this.div.focus({preventScroll:!0}),this.isEditing=!1,this.parent.div.classList.add("freetextEditing"),!0):!1}focusin(e){this._focusEventsAllowed&&(super.focusin(e),e.target!==this.editorDiv&&this.editorDiv.focus())}onceAdded(e){this.width||(this.enableEditMode(),e&&this.editorDiv.focus(),this._initialOptions?.isCentered&&this.center(),this._initialOptions=null)}isEmpty(){return!this.editorDiv||this.editorDiv.innerText.trim()===""}remove(){this.isEditing=!1,this.parent&&(this.parent.setEditingState(!0),this.parent.div.classList.add("freetextEditing")),super.remove()}#r(){const e=[];this.editorDiv.normalize();let t=null;for(const s of this.editorDiv.childNodes)t?.nodeType===Node.TEXT_NODE&&s.nodeName==="BR"||(e.push(Ct.#c(s)),t=s);return e.join(`
`)}#o(){const[e,t]=this.parentDimensions;let s;if(this.isAttachedToDOM)s=this.div.getBoundingClientRect();else{const{currentLayer:r,div:o}=this,l=o.style.display,u=o.classList.contains("hidden");o.classList.remove("hidden"),o.style.display="hidden",r.div.append(this.div),s=o.getBoundingClientRect(),o.remove(),o.style.display=l,o.classList.toggle("hidden",u)}this.rotation%180===this.parentRotation%180?(this.width=s.width/e,this.height=s.height/t):(this.width=s.height/e,this.height=s.width/t),this.fixAndSetPosition()}commit(){if(!this.isInEditMode())return;super.commit(),this.disableEditMode();const e=this.#e,t=this.#e=this.#r().trimEnd();if(e===t)return;const s=r=>{if(this.#e=r,!r){this.remove();return}this.#l(),this._uiManager.rebuild(this),this.#o()};this.addCommands({cmd:()=>{s(t)},undo:()=>{s(e)},mustExec:!1}),this.#o()}shouldGetKeyboardEvents(){return this.isInEditMode()}enterInEditMode(){this.enableEditMode(),this.editorDiv.focus()}keydown(e){e.target===this.div&&e.key==="Enter"&&(this.enterInEditMode(),e.preventDefault())}editorDivKeydown(e){Ct._keyboardManager.exec(this,e)}editorDivFocus(e){this.isEditing=!0}editorDivBlur(e){this.isEditing=!1}editorDivInput(e){this.parent.div.classList.toggle("freetextEditing",this.isEmpty())}disableEditing(){this.editorDiv.setAttribute("role","comment"),this.editorDiv.removeAttribute("aria-multiline")}enableEditing(){this.editorDiv.setAttribute("role","textbox"),this.editorDiv.setAttribute("aria-multiline",!0)}get canChangeContent(){return!0}render(){if(this.div)return this.div;let e,t;(this._isCopy||this.annotationElementId)&&(e=this.x,t=this.y),super.render(),this.editorDiv=document.createElement("div"),this.editorDiv.className="internal",this.editorDiv.setAttribute("id",this.#t),this.editorDiv.setAttribute("data-l10n-id","pdfjs-free-text2"),this.editorDiv.setAttribute("data-l10n-attrs","default-content"),this.enableEditing(),this.editorDiv.contentEditable=!0;const{style:s}=this.editorDiv;if(s.fontSize=`calc(${this.#n}px * var(--total-scale-factor))`,s.color=this.color,this.div.append(this.editorDiv),this.overlayDiv=document.createElement("div"),this.overlayDiv.classList.add("overlay","enabled"),this.div.append(this.overlayDiv),this._isCopy||this.annotationElementId){const[r,o]=this.parentDimensions;if(this.annotationElementId){const{position:l}=this._initialData;let[u,h]=this.getInitialTranslation();[u,h]=this.pageTranslationToScreen(u,h);const[p,m]=this.pageDimensions,[b,v]=this.pageTranslation;let A,x;switch(this.rotation){case 0:A=e+(l[0]-b)/p,x=t+this.height-(l[1]-v)/m;break;case 90:A=e+(l[0]-b)/p,x=t-(l[1]-v)/m,[u,h]=[h,-u];break;case 180:A=e-this.width+(l[0]-b)/p,x=t-(l[1]-v)/m,[u,h]=[-u,-h];break;case 270:A=e+(l[0]-b-this.height*m)/p,x=t+(l[1]-v-this.width*p)/m,[u,h]=[-h,u];break}this.setAt(A*r,x*o,u,h)}else this._moveAfterPaste(e,t);this.#l(),this._isDraggable=!0,this.editorDiv.contentEditable=!1}else this._isDraggable=!1,this.editorDiv.contentEditable=!0;return this.div}static#c(e){return(e.nodeType===Node.TEXT_NODE?e.nodeValue:e.innerText).replaceAll(vl,"")}editorDivPaste(e){const t=e.clipboardData||window.clipboardData,{types:s}=t;if(s.length===1&&s[0]==="text/plain")return;e.preventDefault();const r=Ct.#d(t.getData("text")||"").replaceAll(vl,`
`);if(!r)return;const o=window.getSelection();if(!o.rangeCount)return;this.editorDiv.normalize(),o.deleteFromDocument();const l=o.getRangeAt(0);if(!r.includes(`
`)){l.insertNode(document.createTextNode(r)),this.editorDiv.normalize(),o.collapseToStart();return}const{startContainer:u,startOffset:h}=l,p=[],m=[];if(u.nodeType===Node.TEXT_NODE){const A=u.parentElement;if(m.push(u.nodeValue.slice(h).replaceAll(vl,"")),A!==this.editorDiv){let x=p;for(const C of this.editorDiv.childNodes){if(C===A){x=m;continue}x.push(Ct.#c(C))}}p.push(u.nodeValue.slice(0,h).replaceAll(vl,""))}else if(u===this.editorDiv){let A=p,x=0;for(const C of this.editorDiv.childNodes)x++===h&&(A=m),A.push(Ct.#c(C))}this.#e=`${p.join(`
`)}${r}${m.join(`
`)}`,this.#l();const b=new Range;let v=Math.sumPrecise(p.map(A=>A.length));for(const{firstChild:A}of this.editorDiv.childNodes)if(A.nodeType===Node.TEXT_NODE){const x=A.nodeValue.length;if(v<=x){b.setStart(A,v),b.setEnd(A,v);break}v-=x}o.removeAllRanges(),o.addRange(b)}#l(){if(this.editorDiv.replaceChildren(),!!this.#e)for(const e of this.#e.split(`
`)){const t=document.createElement("div");t.append(e?document.createTextNode(e):document.createElement("br")),this.editorDiv.append(t)}}#h(){return this.#e.replaceAll(" "," ")}static#d(e){return e.replaceAll(" "," ")}get contentDiv(){return this.editorDiv}getPDFRect(){const e=Ct._internalPadding*this.parentScale;return this.getRect(e,e)}static async deserialize(e,t,s){let r=null;if(e instanceof Jy){const{data:{defaultAppearanceData:{fontSize:l,fontColor:u},rect:h,rotation:p,id:m,popupRef:b,richText:v,contentsObj:A,creationDate:x,modificationDate:C},textContent:T,textPosition:w,parent:{page:{pageNumber:_}}}=e;if(!T||T.length===0)return null;r=e={annotationType:be.FREETEXT,color:Array.from(u),fontSize:l,value:T.join(`
`),position:w,pageIndex:_-1,rect:h.slice(0),rotation:p,annotationElementId:m,id:m,deleted:!1,popupRef:b,comment:A?.str||null,richText:v,creationDate:x,modificationDate:C}}const o=await super.deserialize(e,t,s);return o.#n=e.fontSize,o.color=ie.makeHexColor(...e.color),o.#e=Ct.#d(e.value),o._initialData=r,e.comment&&o.setCommentData(e),o}serialize(e=!1){if(this.isEmpty())return null;if(this.deleted)return this.serializeDeleted();const t=ue._colorManager.convert(this.isAttachedToDOM?getComputedStyle(this.editorDiv).color:this.color),s=Object.assign(super.serialize(e),{color:t,fontSize:this.#n,value:this.#h()});return this.addComment(s),e?(s.isCopy=!0,s):this.annotationElementId&&!this.#f(s)?null:(s.id=this.annotationElementId,s)}#f(e){const{value:t,fontSize:s,color:r,pageIndex:o}=this._initialData;return this.hasEditedComment||this._hasBeenMoved||e.value!==t||e.fontSize!==s||e.color.some((l,u)=>l!==r[u])||e.pageIndex!==o}renderAnnotationElement(e){const t=super.renderAnnotationElement(e);if(!t)return null;const{style:s}=t;s.fontSize=`calc(${this.#n}px * var(--total-scale-factor))`,s.color=this.color,t.replaceChildren();for(const r of this.#e.split(`
`)){const o=document.createElement("div");o.append(r?document.createTextNode(r):document.createElement("br")),t.append(o)}return e.updateEdited({rect:this.getPDFRect(),popup:this._uiManager.hasCommentManager()||this.hasEditedComment?this.comment:{text:this.#e}}),t}resetAnnotationElement(e){super.resetAnnotationElement(e),e.resetEdited()}}class ne{static PRECISION=1e-4;toSVGPath(){qe("Abstract method `toSVGPath` must be implemented.")}get box(){qe("Abstract getter `box` must be implemented.")}serialize(e,t){qe("Abstract method `serialize` must be implemented.")}static _rescale(e,t,s,r,o,l){l||=new Float32Array(e.length);for(let u=0,h=e.length;u<h;u+=2)l[u]=t+e[u]*r,l[u+1]=s+e[u+1]*o;return l}static _rescaleAndSwap(e,t,s,r,o,l){l||=new Float32Array(e.length);for(let u=0,h=e.length;u<h;u+=2)l[u]=t+e[u+1]*r,l[u+1]=s+e[u]*o;return l}static _translate(e,t,s,r){r||=new Float32Array(e.length);for(let o=0,l=e.length;o<l;o+=2)r[o]=t+e[o],r[o+1]=s+e[o+1];return r}static svgRound(e){return Math.round(e*1e4)}static _normalizePoint(e,t,s,r,o){switch(o){case 90:return[1-t/s,e/r];case 180:return[1-e/s,1-t/r];case 270:return[t/s,1-e/r];default:return[e/s,t/r]}}static _normalizePagePoint(e,t,s){switch(s){case 90:return[1-t,e];case 180:return[1-e,1-t];case 270:return[t,1-e];default:return[e,t]}}static createBezierPoints(e,t,s,r,o,l){return[(e+5*s)/6,(t+5*r)/6,(5*s+o)/6,(5*r+l)/6,(s+o)/2,(r+l)/2]}}class rs{#e;#t=[];#i;#n;#a=[];#s=new Float32Array(18);#r;#o;#c;#l;#h;#d;#f=[];static#g=8;static#p=2;static#u=rs.#g+rs.#p;constructor({x:e,y:t},s,r,o,l,u=0){this.#e=s,this.#d=o*r,this.#n=l,this.#s.set([NaN,NaN,NaN,NaN,e,t],6),this.#i=u,this.#l=rs.#g*r,this.#c=rs.#u*r,this.#h=r,this.#f.push(e,t)}isEmpty(){return isNaN(this.#s[8])}#m(){const e=this.#s.subarray(4,6),t=this.#s.subarray(16,18),[s,r,o,l]=this.#e;return[(this.#r+(e[0]-t[0])/2-s)/o,(this.#o+(e[1]-t[1])/2-r)/l,(this.#r+(t[0]-e[0])/2-s)/o,(this.#o+(t[1]-e[1])/2-r)/l]}add({x:e,y:t}){this.#r=e,this.#o=t;const[s,r,o,l]=this.#e;let[u,h,p,m]=this.#s.subarray(8,12);const b=e-p,v=t-m,A=Math.hypot(b,v);if(A<this.#c)return!1;const x=A-this.#l,C=x/A,T=C*b,w=C*v;let _=u,R=h;u=p,h=m,p+=T,m+=w,this.#f?.push(e,t);const O=-w/x,k=T/x,j=O*this.#d,F=k*this.#d;return this.#s.set(this.#s.subarray(2,8),0),this.#s.set([p+j,m+F],4),this.#s.set(this.#s.subarray(14,18),12),this.#s.set([p-j,m-F],16),isNaN(this.#s[6])?(this.#a.length===0&&(this.#s.set([u+j,h+F],2),this.#a.push(NaN,NaN,NaN,NaN,(u+j-s)/o,(h+F-r)/l),this.#s.set([u-j,h-F],14),this.#t.push(NaN,NaN,NaN,NaN,(u-j-s)/o,(h-F-r)/l)),this.#s.set([_,R,u,h,p,m],6),!this.isEmpty()):(this.#s.set([_,R,u,h,p,m],6),Math.abs(Math.atan2(R-h,_-u)-Math.atan2(w,T))<Math.PI/2?([u,h,p,m]=this.#s.subarray(2,6),this.#a.push(NaN,NaN,NaN,NaN,((u+p)/2-s)/o,((h+m)/2-r)/l),[u,h,_,R]=this.#s.subarray(14,18),this.#t.push(NaN,NaN,NaN,NaN,((_+u)/2-s)/o,((R+h)/2-r)/l),!0):([_,R,u,h,p,m]=this.#s.subarray(0,6),this.#a.push(((_+5*u)/6-s)/o,((R+5*h)/6-r)/l,((5*u+p)/6-s)/o,((5*h+m)/6-r)/l,((u+p)/2-s)/o,((h+m)/2-r)/l),[p,m,u,h,_,R]=this.#s.subarray(12,18),this.#t.push(((_+5*u)/6-s)/o,((R+5*h)/6-r)/l,((5*u+p)/6-s)/o,((5*h+m)/6-r)/l,((u+p)/2-s)/o,((h+m)/2-r)/l),!0))}toSVGPath(){if(this.isEmpty())return"";const e=this.#a,t=this.#t;if(isNaN(this.#s[6])&&!this.isEmpty())return this.#y();const s=[];s.push(`M${e[4]} ${e[5]}`);for(let r=6;r<e.length;r+=6)isNaN(e[r])?s.push(`L${e[r+4]} ${e[r+5]}`):s.push(`C${e[r]} ${e[r+1]} ${e[r+2]} ${e[r+3]} ${e[r+4]} ${e[r+5]}`);this.#b(s);for(let r=t.length-6;r>=6;r-=6)isNaN(t[r])?s.push(`L${t[r+4]} ${t[r+5]}`):s.push(`C${t[r]} ${t[r+1]} ${t[r+2]} ${t[r+3]} ${t[r+4]} ${t[r+5]}`);return this.#v(s),s.join(" ")}#y(){const[e,t,s,r]=this.#e,[o,l,u,h]=this.#m();return`M${(this.#s[2]-e)/s} ${(this.#s[3]-t)/r} L${(this.#s[4]-e)/s} ${(this.#s[5]-t)/r} L${o} ${l} L${u} ${h} L${(this.#s[16]-e)/s} ${(this.#s[17]-t)/r} L${(this.#s[14]-e)/s} ${(this.#s[15]-t)/r} Z`}#v(e){const t=this.#t;e.push(`L${t[4]} ${t[5]} Z`)}#b(e){const[t,s,r,o]=this.#e,l=this.#s.subarray(4,6),u=this.#s.subarray(16,18),[h,p,m,b]=this.#m();e.push(`L${(l[0]-t)/r} ${(l[1]-s)/o} L${h} ${p} L${m} ${b} L${(u[0]-t)/r} ${(u[1]-s)/o}`)}newFreeDrawOutline(e,t,s,r,o,l){return new ib(e,t,s,r,o,l)}getOutlines(){const e=this.#a,t=this.#t,s=this.#s,[r,o,l,u]=this.#e,h=new Float32Array((this.#f?.length??0)+2);for(let b=0,v=h.length-2;b<v;b+=2)h[b]=(this.#f[b]-r)/l,h[b+1]=(this.#f[b+1]-o)/u;if(h[h.length-2]=(this.#r-r)/l,h[h.length-1]=(this.#o-o)/u,isNaN(s[6])&&!this.isEmpty())return this.#E(h);const p=new Float32Array(this.#a.length+24+this.#t.length);let m=e.length;for(let b=0;b<m;b+=2){if(isNaN(e[b])){p[b]=p[b+1]=NaN;continue}p[b]=e[b],p[b+1]=e[b+1]}m=this.#A(p,m);for(let b=t.length-6;b>=6;b-=6)for(let v=0;v<6;v+=2){if(isNaN(t[b+v])){p[m]=p[m+1]=NaN,m+=2;continue}p[m]=t[b+v],p[m+1]=t[b+v+1],m+=2}return this.#x(p,m),this.newFreeDrawOutline(p,h,this.#e,this.#h,this.#i,this.#n)}#E(e){const t=this.#s,[s,r,o,l]=this.#e,[u,h,p,m]=this.#m(),b=new Float32Array(36);return b.set([NaN,NaN,NaN,NaN,(t[2]-s)/o,(t[3]-r)/l,NaN,NaN,NaN,NaN,(t[4]-s)/o,(t[5]-r)/l,NaN,NaN,NaN,NaN,u,h,NaN,NaN,NaN,NaN,p,m,NaN,NaN,NaN,NaN,(t[16]-s)/o,(t[17]-r)/l,NaN,NaN,NaN,NaN,(t[14]-s)/o,(t[15]-r)/l],0),this.newFreeDrawOutline(b,e,this.#e,this.#h,this.#i,this.#n)}#x(e,t){const s=this.#t;return e.set([NaN,NaN,NaN,NaN,s[4],s[5]],t),t+=6}#A(e,t){const s=this.#s.subarray(4,6),r=this.#s.subarray(16,18),[o,l,u,h]=this.#e,[p,m,b,v]=this.#m();return e.set([NaN,NaN,NaN,NaN,(s[0]-o)/u,(s[1]-l)/h,NaN,NaN,NaN,NaN,p,m,NaN,NaN,NaN,NaN,b,v,NaN,NaN,NaN,NaN,(r[0]-o)/u,(r[1]-l)/h],t),t+=24}}class ib extends ne{#e;#t=new Float32Array(4);#i;#n;#a;#s;#r;constructor(e,t,s,r,o,l){super(),this.#r=e,this.#a=t,this.#e=s,this.#s=r,this.#i=o,this.#n=l,this.firstPoint=[NaN,NaN],this.lastPoint=[NaN,NaN],this.#o(l);const[u,h,p,m]=this.#t;for(let b=0,v=e.length;b<v;b+=2)e[b]=(e[b]-u)/p,e[b+1]=(e[b+1]-h)/m;for(let b=0,v=t.length;b<v;b+=2)t[b]=(t[b]-u)/p,t[b+1]=(t[b+1]-h)/m}toSVGPath(){const e=[`M${this.#r[4]} ${this.#r[5]}`];for(let t=6,s=this.#r.length;t<s;t+=6){if(isNaN(this.#r[t])){e.push(`L${this.#r[t+4]} ${this.#r[t+5]}`);continue}e.push(`C${this.#r[t]} ${this.#r[t+1]} ${this.#r[t+2]} ${this.#r[t+3]} ${this.#r[t+4]} ${this.#r[t+5]}`)}return e.push("Z"),e.join(" ")}serialize([e,t,s,r],o){const l=s-e,u=r-t;let h,p;switch(o){case 0:h=ne._rescale(this.#r,e,r,l,-u),p=ne._rescale(this.#a,e,r,l,-u);break;case 90:h=ne._rescaleAndSwap(this.#r,e,t,l,u),p=ne._rescaleAndSwap(this.#a,e,t,l,u);break;case 180:h=ne._rescale(this.#r,s,t,-l,u),p=ne._rescale(this.#a,s,t,-l,u);break;case 270:h=ne._rescaleAndSwap(this.#r,s,r,-l,-u),p=ne._rescaleAndSwap(this.#a,s,r,-l,-u);break}return{outline:Array.from(h),points:[Array.from(p)]}}#o(e){const t=this.#r;let s=t[4],r=t[5];const o=[s,r,s,r];let l=s,u=r,h=s,p=r;const m=e?Math.max:Math.min,b=new Float32Array(4);for(let A=6,x=t.length;A<x;A+=6){const C=t[A+4],T=t[A+5];isNaN(t[A])?(ie.pointBoundingBox(C,T,o),u>T?(l=C,u=T):u===T&&(l=m(l,C)),p<T?(h=C,p=T):p===T&&(h=m(h,C))):(b[0]=b[1]=1/0,b[2]=b[3]=-1/0,ie.bezierBoundingBox(s,r,...t.slice(A,A+6),b),ie.rectBoundingBox(b[0],b[1],b[2],b[3],o),u>b[1]?(l=b[0],u=b[1]):u===b[1]&&(l=m(l,b[0])),p<b[3]?(h=b[2],p=b[3]):p===b[3]&&(h=m(h,b[2]))),s=C,r=T}const v=this.#t;v[0]=o[0]-this.#i,v[1]=o[1]-this.#i,v[2]=o[2]-o[0]+2*this.#i,v[3]=o[3]-o[1]+2*this.#i,this.firstPoint=[l,u],this.lastPoint=[h,p]}get box(){return this.#t}newOutliner(e,t,s,r,o,l=0){return new rs(e,t,s,r,o,l)}getNewOutline(e,t){const[s,r,o,l]=this.#t,[u,h,p,m]=this.#e,b=o*p,v=l*m,A=s*p+u,x=r*m+h,C=this.newOutliner({x:this.#a[0]*b+A,y:this.#a[1]*v+x},this.#e,this.#s,e,this.#n,t??this.#i);for(let T=2;T<this.#a.length;T+=2)C.add({x:this.#a[T]*b+A,y:this.#a[T+1]*v+x});return C.getOutlines()}}class Md{#e;#t;#i;#n=[];#a=[];constructor(e,t=0,s=0,r=!0){const o=[1/0,1/0,-1/0,-1/0],l=10**-4;for(const{x:C,y:T,width:w,height:_}of e){const R=Math.floor((C-t)/l)*l,O=Math.ceil((C+w+t)/l)*l,k=Math.floor((T-t)/l)*l,j=Math.ceil((T+_+t)/l)*l,F=[R,k,j,!0],q=[O,k,j,!1];this.#n.push(F,q),ie.rectBoundingBox(R,k,O,j,o)}const u=o[2]-o[0]+2*s,h=o[3]-o[1]+2*s,p=o[0]-s,m=o[1]-s;let b=r?-1/0:1/0,v=1/0;const A=this.#n.at(r?-1:-2),x=[A[0],A[2]];for(const C of this.#n){const[T,w,_,R]=C;!R&&r?w<v?(v=w,b=T):w===v&&(b=Math.max(b,T)):R&&!r&&(w<v?(v=w,b=T):w===v&&(b=Math.min(b,T))),C[0]=(T-p)/u,C[1]=(w-m)/h,C[2]=(_-m)/h}this.#e=new Float32Array([p,m,u,h]),this.#t=[b,v],this.#i=x}getOutlines(){this.#n.sort((t,s)=>t[0]-s[0]||t[1]-s[1]||t[2]-s[2]);const e=[];for(const t of this.#n)t[3]?(e.push(...this.#l(t)),this.#o(t)):(this.#c(t),e.push(...this.#l(t)));return this.#s(e)}#s(e){const t=[],s=new Set;for(const l of e){const[u,h,p]=l;t.push([u,h,l],[u,p,l])}t.sort((l,u)=>l[1]-u[1]||l[0]-u[0]);for(let l=0,u=t.length;l<u;l+=2){const h=t[l][2],p=t[l+1][2];h.push(p),p.push(h),s.add(h),s.add(p)}const r=[];let o;for(;s.size>0;){const l=s.values().next().value;let[u,h,p,m,b]=l;s.delete(l);let v=u,A=h;for(o=[u,p],r.push(o);;){let x;if(s.has(m))x=m;else if(s.has(b))x=b;else break;s.delete(x),[u,h,p,m,b]=x,v!==u&&(o.push(v,A,u,A===h?h:p),v=u),A=A===h?p:h}o.push(v,A)}return new lE(r,this.#e,this.#t,this.#i)}#r(e){const t=this.#a;let s=0,r=t.length-1;for(;s<=r;){const o=s+r>>1,l=t[o][0];if(l===e)return o;l<e?s=o+1:r=o-1}return r+1}#o([,e,t]){const s=this.#r(e);this.#a.splice(s,0,[e,t])}#c([,e,t]){const s=this.#r(e);for(let r=s;r<this.#a.length;r++){const[o,l]=this.#a[r];if(o!==e)break;if(o===e&&l===t){this.#a.splice(r,1);return}}for(let r=s-1;r>=0;r--){const[o,l]=this.#a[r];if(o!==e)break;if(o===e&&l===t){this.#a.splice(r,1);return}}}#l(e){const[t,s,r]=e,o=[[t,s,r]],l=this.#r(r);for(let u=0;u<l;u++){const[h,p]=this.#a[u];for(let m=0,b=o.length;m<b;m++){const[,v,A]=o[m];if(!(p<=v||A<=h)){if(v>=h){if(A>p)o[m][1]=p;else{if(b===1)return[];o.splice(m,1),m--,b--}continue}o[m][2]=h,A>p&&o.push([t,p,A])}}}return o}}class lE extends ne{#e;#t;constructor(e,t,s,r){super(),this.#t=e,this.#e=t,this.firstPoint=s,this.lastPoint=r}toSVGPath(){const e=[];for(const t of this.#t){let[s,r]=t;e.push(`M${s} ${r}`);for(let o=2;o<t.length;o+=2){const l=t[o],u=t[o+1];l===s?(e.push(`V${u}`),r=u):u===r&&(e.push(`H${l}`),s=l)}e.push("Z")}return e.join(" ")}serialize([e,t,s,r],o){const l=[],u=s-e,h=r-t;for(const p of this.#t){const m=new Array(p.length);for(let b=0;b<p.length;b+=2)m[b]=e+p[b]*u,m[b+1]=r-p[b+1]*h;l.push(m)}return l}get box(){return this.#e}get classNamesForOutlining(){return["highlightOutline"]}}class kd extends rs{newFreeDrawOutline(e,t,s,r,o,l){return new cE(e,t,s,r,o,l)}}class cE extends ib{newOutliner(e,t,s,r,o,l=0){return new kd(e,t,s,r,o,l)}}class dt extends ue{#e=null;#t=0;#i;#n=null;#a=null;#s=null;#r=null;#o=0;#c=null;#l=null;#h=null;#d=!1;#f=null;#g=null;#p=null;#u="";#m;#y="";static _defaultColor=null;static _defaultOpacity=1;static _defaultThickness=12;static _type="highlight";static _editorType=be.HIGHLIGHT;static _freeHighlightId=-1;static _freeHighlight=null;static _freeHighlightClipId="";static get _keyboardManager(){const e=dt.prototype;return Se(this,"_keyboardManager",new za([[["ArrowLeft","mac+ArrowLeft"],e._moveCaret,{args:[0]}],[["ArrowRight","mac+ArrowRight"],e._moveCaret,{args:[1]}],[["ArrowUp","mac+ArrowUp"],e._moveCaret,{args:[2]}],[["ArrowDown","mac+ArrowDown"],e._moveCaret,{args:[3]}]]))}constructor(e){super({...e,name:"highlightEditor"}),this.color=e.color||dt._defaultColor,this.#m=e.thickness||dt._defaultThickness,this.opacity=e.opacity||dt._defaultOpacity,this.#i=e.boxes||null,this.#y=e.methodOfCreation||"",this.#u=e.text||"",this._isDraggable=!1,this.defaultL10nId="pdfjs-editor-highlight-editor",e.highlightId>-1?(this.#d=!0,this.#b(e),this.#C()):this.#i&&(this.#e=e.anchorNode,this.#t=e.anchorOffset,this.#r=e.focusNode,this.#o=e.focusOffset,this.#v(),this.#C(),this.rotate(this.rotation)),this.annotationElementId||this._uiManager.a11yAlert("pdfjs-editor-highlight-added-alert")}get telemetryInitialData(){return{action:"added",type:this.#d?"free_highlight":"highlight",color:this._uiManager.getNonHCMColorName(this.color),thickness:this.#m,methodOfCreation:this.#y}}get telemetryFinalData(){return{type:"highlight",color:this._uiManager.getNonHCMColorName(this.color)}}static computeTelemetryFinalData(e){return{numberOfColors:e.get("color").size}}#v(){const e=new Md(this.#i,.001);this.#l=e.getOutlines(),[this.x,this.y,this.width,this.height]=this.#l.box;const t=new Md(this.#i,.0025,.001,this._uiManager.direction==="ltr");this.#s=t.getOutlines();const{firstPoint:s}=this.#l;this.#f=[(s[0]-this.x)/this.width,(s[1]-this.y)/this.height];const{lastPoint:r}=this.#s;this.#g=[(r[0]-this.x)/this.width,(r[1]-this.y)/this.height]}#b({highlightOutlines:e,highlightId:t,clipPathId:s}){this.#l=e;const r=1.5;if(this.#s=e.getNewOutline(this.#m/2+r,.0025),t>=0)this.#h=t,this.#n=s,this.parent.drawLayer.finalizeDraw(t,{bbox:e.box,path:{d:e.toSVGPath()}}),this.#p=this.parent.drawLayer.drawOutline({rootClass:{highlightOutline:!0,free:!0},bbox:this.#s.box,path:{d:this.#s.toSVGPath()}},!0);else if(this.parent){const b=this.parent.viewport.rotation;this.parent.drawLayer.updateProperties(this.#h,{bbox:dt.#w(this.#l.box,(b-this.rotation+360)%360),path:{d:e.toSVGPath()}}),this.parent.drawLayer.updateProperties(this.#p,{bbox:dt.#w(this.#s.box,b),path:{d:this.#s.toSVGPath()}})}const[o,l,u,h]=e.box;switch(this.rotation){case 0:this.x=o,this.y=l,this.width=u,this.height=h;break;case 90:{const[b,v]=this.parentDimensions;this.x=l,this.y=1-o,this.width=u*v/b,this.height=h*b/v;break}case 180:this.x=1-o,this.y=1-l,this.width=u,this.height=h;break;case 270:{const[b,v]=this.parentDimensions;this.x=1-l,this.y=o,this.width=u*v/b,this.height=h*b/v;break}}const{firstPoint:p}=e;this.#f=[(p[0]-o)/u,(p[1]-l)/h];const{lastPoint:m}=this.#s;this.#g=[(m[0]-o)/u,(m[1]-l)/h]}static initialize(e,t){ue.initialize(e,t),dt._defaultColor||=t.highlightColors?.values().next().value||"#fff066"}static updateDefaultParams(e,t){switch(e){case _e.HIGHLIGHT_COLOR:dt._defaultColor=t;break;case _e.HIGHLIGHT_THICKNESS:dt._defaultThickness=t;break}}translateInPage(e,t){}get toolbarPosition(){return this.#g}get commentButtonPosition(){return this.#f}updateParams(e,t){switch(e){case _e.HIGHLIGHT_COLOR:this.#E(t);break;case _e.HIGHLIGHT_THICKNESS:this.#x(t);break}}static get defaultPropertiesToUpdate(){return[[_e.HIGHLIGHT_COLOR,dt._defaultColor],[_e.HIGHLIGHT_THICKNESS,dt._defaultThickness]]}get propertiesToUpdate(){return[[_e.HIGHLIGHT_COLOR,this.color||dt._defaultColor],[_e.HIGHLIGHT_THICKNESS,this.#m||dt._defaultThickness],[_e.HIGHLIGHT_FREE,this.#d]]}onUpdatedColor(){this.parent?.drawLayer.updateProperties(this.#h,{root:{fill:this.color,"fill-opacity":this.opacity}}),this.#a?.updateColor(this.color),super.onUpdatedColor()}#E(e){const t=(o,l)=>{this.color=o,this.opacity=l,this.onUpdatedColor()},s=this.color,r=this.opacity;this.addCommands({cmd:t.bind(this,e,dt._defaultOpacity),undo:t.bind(this,s,r),post:this._uiManager.updateUI.bind(this._uiManager,this),mustExec:!0,type:_e.HIGHLIGHT_COLOR,overwriteIfSameType:!0,keepUndo:!0}),this._reportTelemetry({action:"color_changed",color:this._uiManager.getNonHCMColorName(e)},!0)}#x(e){const t=this.#m,s=r=>{this.#m=r,this.#A(r)};this.addCommands({cmd:s.bind(this,e),undo:s.bind(this,t),post:this._uiManager.updateUI.bind(this._uiManager,this),mustExec:!0,type:_e.INK_THICKNESS,overwriteIfSameType:!0,keepUndo:!0}),this._reportTelemetry({action:"thickness_changed",thickness:e},!0)}get toolbarButtons(){return this._uiManager.highlightColors?[["colorPicker",this.#a=new an({editor:this})]]:super.toolbarButtons}disableEditing(){super.disableEditing(),this.div.classList.toggle("disabled",!0)}enableEditing(){super.enableEditing(),this.div.classList.toggle("disabled",!1)}fixAndSetPosition(){return super.fixAndSetPosition(this.#D())}getBaseTranslation(){return[0,0]}getRect(e,t){return super.getRect(e,t,this.#D())}onceAdded(e){this.annotationElementId||this.parent.addUndoableEditor(this),e&&this.div.focus()}remove(){this.#_(),this._reportTelemetry({action:"deleted"}),super.remove()}rebuild(){this.parent&&(super.rebuild(),this.div!==null&&(this.#C(),this.isAttachedToDOM||this.parent.add(this)))}setParent(e){let t=!1;this.parent&&!e?this.#_():e&&(this.#C(e),t=!this.parent&&this.div?.classList.contains("selectedEditor")),super.setParent(e),this.show(this._isVisible),t&&this.select()}#A(e){this.#d&&(this.#b({highlightOutlines:this.#l.getNewOutline(e/2)}),this.fixAndSetPosition(),this.setDims(this.width,this.height))}#_(){this.#h===null||!this.parent||(this.parent.drawLayer.remove(this.#h),this.#h=null,this.parent.drawLayer.remove(this.#p),this.#p=null)}#C(e=this.parent){this.#h===null&&({id:this.#h,clipPathId:this.#n}=e.drawLayer.draw({bbox:this.#l.box,root:{viewBox:"0 0 1 1",fill:this.color,"fill-opacity":this.opacity},rootClass:{highlight:!0,free:this.#d},path:{d:this.#l.toSVGPath()}},!1,!0),this.#p=e.drawLayer.drawOutline({rootClass:{highlightOutline:!0,free:this.#d},bbox:this.#s.box,path:{d:this.#s.toSVGPath()}},this.#d),this.#c&&(this.#c.style.clipPath=this.#n))}static#w([e,t,s,r],o){switch(o){case 90:return[1-t-r,e,r,s];case 180:return[1-e-s,1-t-r,s,r];case 270:return[t,1-e-s,r,s]}return[e,t,s,r]}rotate(e){const{drawLayer:t}=this.parent;let s;this.#d?(e=(e-this.rotation+360)%360,s=dt.#w(this.#l.box,e)):s=dt.#w([this.x,this.y,this.width,this.height],e),t.updateProperties(this.#h,{bbox:s,root:{"data-main-rotation":e}}),t.updateProperties(this.#p,{bbox:dt.#w(this.#s.box,e),root:{"data-main-rotation":e}})}render(){if(this.div)return this.div;const e=super.render();this.#u&&(e.setAttribute("aria-label",this.#u),e.setAttribute("role","mark")),this.#d?e.classList.add("free"):this.div.addEventListener("keydown",this.#M.bind(this),{signal:this._uiManager._signal});const t=this.#c=document.createElement("div");return e.append(t),t.setAttribute("aria-hidden","true"),t.className="internal",t.style.clipPath=this.#n,this.setDims(this.width,this.height),ky(this,this.#c,["pointerover","pointerleave"]),this.enableEditing(),e}pointerover(){this.isSelected||this.parent?.drawLayer.updateProperties(this.#p,{rootClass:{hovered:!0}})}pointerleave(){this.isSelected||this.parent?.drawLayer.updateProperties(this.#p,{rootClass:{hovered:!1}})}#M(e){dt._keyboardManager.exec(this,e)}_moveCaret(e){switch(this.parent.unselect(this),e){case 0:case 2:this.#R(!0);break;case 1:case 3:this.#R(!1);break}}#R(e){if(!this.#e)return;const t=window.getSelection();e?t.setPosition(this.#e,this.#t):t.setPosition(this.#r,this.#o)}select(){super.select(),this.#p&&this.parent?.drawLayer.updateProperties(this.#p,{rootClass:{hovered:!1,selected:!0}})}unselect(){super.unselect(),this.#p&&(this.parent?.drawLayer.updateProperties(this.#p,{rootClass:{selected:!1}}),this.#d||this.#R(!1))}get _mustFixPosition(){return!this.#d}show(e=this._isVisible){super.show(e),this.parent&&(this.parent.drawLayer.updateProperties(this.#h,{rootClass:{hidden:!e}}),this.parent.drawLayer.updateProperties(this.#p,{rootClass:{hidden:!e}}))}#D(){return this.#d?this.rotation:0}#j(){if(this.#d)return null;const[e,t]=this.pageDimensions,[s,r]=this.pageTranslation,o=this.#i,l=new Float32Array(o.length*8);let u=0;for(const{x:h,y:p,width:m,height:b}of o){const v=h*e+s,A=(1-p)*t+r;l[u]=l[u+4]=v,l[u+1]=l[u+3]=A,l[u+2]=l[u+6]=v+m*e,l[u+5]=l[u+7]=A-b*t,u+=8}return l}#L(e){return this.#l.serialize(e,this.#D())}static startHighlighting(e,t,{target:s,x:r,y:o}){const{x:l,y:u,width:h,height:p}=s.getBoundingClientRect(),m=new AbortController,b=e.combinedSignal(m),v=A=>{m.abort(),this.#B(e,A)};window.addEventListener("blur",v,{signal:b}),window.addEventListener("pointerup",v,{signal:b}),window.addEventListener("pointerdown",tt,{capture:!0,passive:!1,signal:b}),window.addEventListener("contextmenu",ln,{signal:b}),s.addEventListener("pointermove",this.#O.bind(this,e),{signal:b}),this._freeHighlight=new kd({x:r,y:o},[l,u,h,p],e.scale,this._defaultThickness/2,t,.001),{id:this._freeHighlightId,clipPathId:this._freeHighlightClipId}=e.drawLayer.draw({bbox:[0,0,1,1],root:{viewBox:"0 0 1 1",fill:this._defaultColor,"fill-opacity":this._defaultOpacity},rootClass:{highlight:!0,free:!0},path:{d:this._freeHighlight.toSVGPath()}},!0,!0)}static#O(e,t){this._freeHighlight.add(t)&&e.drawLayer.updateProperties(this._freeHighlightId,{path:{d:this._freeHighlight.toSVGPath()}})}static#B(e,t){this._freeHighlight.isEmpty()?e.drawLayer.remove(this._freeHighlightId):e.createAndAddNewEditor(t,!1,{highlightId:this._freeHighlightId,highlightOutlines:this._freeHighlight.getOutlines(),clipPathId:this._freeHighlightClipId,methodOfCreation:"main_toolbar"}),this._freeHighlightId=-1,this._freeHighlight=null,this._freeHighlightClipId=""}static async deserialize(e,t,s){let r=null;if(e instanceof eb){const{data:{quadPoints:x,rect:C,rotation:T,id:w,color:_,opacity:R,popupRef:O,richText:k,contentsObj:j,creationDate:F,modificationDate:q},parent:{page:{pageNumber:V}}}=e;r=e={annotationType:be.HIGHLIGHT,color:Array.from(_),opacity:R,quadPoints:x,boxes:null,pageIndex:V-1,rect:C.slice(0),rotation:T,annotationElementId:w,id:w,deleted:!1,popupRef:O,richText:k,comment:j?.str||null,creationDate:F,modificationDate:q}}else if(e instanceof rh){const{data:{inkLists:x,rect:C,rotation:T,id:w,color:_,borderStyle:{rawWidth:R},popupRef:O,richText:k,contentsObj:j,creationDate:F,modificationDate:q},parent:{page:{pageNumber:V}}}=e;r=e={annotationType:be.HIGHLIGHT,color:Array.from(_),thickness:R,inkLists:x,boxes:null,pageIndex:V-1,rect:C.slice(0),rotation:T,annotationElementId:w,id:w,deleted:!1,popupRef:O,richText:k,comment:j?.str||null,creationDate:F,modificationDate:q}}const{color:o,quadPoints:l,inkLists:u,opacity:h}=e,p=await super.deserialize(e,t,s);p.color=ie.makeHexColor(...o),p.opacity=h||1,u&&(p.#m=e.thickness),p._initialData=r,e.comment&&p.setCommentData(e);const[m,b]=p.pageDimensions,[v,A]=p.pageTranslation;if(l){const x=p.#i=[];for(let C=0;C<l.length;C+=8)x.push({x:(l[C]-v)/m,y:1-(l[C+1]-A)/b,width:(l[C+2]-l[C])/m,height:(l[C+1]-l[C+5])/b});p.#v(),p.#C(),p.rotate(p.rotation)}else if(u){p.#d=!0;const x=u[0],C={x:x[0]-v,y:b-(x[1]-A)},T=new kd(C,[0,0,m,b],1,p.#m/2,!0,.001);for(let R=0,O=x.length;R<O;R+=2)C.x=x[R]-v,C.y=b-(x[R+1]-A),T.add(C);const{id:w,clipPathId:_}=t.drawLayer.draw({bbox:[0,0,1,1],root:{viewBox:"0 0 1 1",fill:p.color,"fill-opacity":p._defaultOpacity},rootClass:{highlight:!0,free:!0},path:{d:T.toSVGPath()}},!0,!0);p.#b({highlightOutlines:T.getOutlines(),highlightId:w,clipPathId:_}),p.#C(),p.rotate(p.parentRotation)}return p}serialize(e=!1){if(this.isEmpty()||e)return null;if(this.deleted)return this.serializeDeleted();const t=ue._colorManager.convert(this._uiManager.getNonHCMColor(this.color)),s=super.serialize(e);return Object.assign(s,{color:t,opacity:this.opacity,thickness:this.#m,quadPoints:this.#j(),outlines:this.#L(s.rect)}),this.addComment(s),this.annotationElementId&&!this.#N(s)?null:(s.id=this.annotationElementId,s)}#N(e){const{color:t}=this._initialData;return this.hasEditedComment||e.color.some((s,r)=>s!==t[r])}renderAnnotationElement(e){return this.deleted?(e.hide(),null):(e.updateEdited({rect:this.getPDFRect(),popup:this.comment}),null)}static canCreateNewEmptyEditor(){return!1}}class sb{#e=Object.create(null);updateProperty(e,t){this[e]=t,this.updateSVGProperty(e,t)}updateProperties(e){if(e)for(const[t,s]of Object.entries(e))t.startsWith("_")||this.updateProperty(t,s)}updateSVGProperty(e,t){this.#e[e]=t}toSVGProperties(){const e=this.#e;return this.#e=Object.create(null),{root:e}}reset(){this.#e=Object.create(null)}updateAll(e=this){this.updateProperties(e)}clone(){qe("Not implemented")}}class me extends ue{#e=null;#t;_colorPicker=null;_drawId=null;static _currentDrawId=-1;static _currentParent=null;static#i=null;static#n=null;static#a=null;static#s=NaN;static#r=null;static#o=null;static#c=NaN;static _INNER_MARGIN=3;constructor(e){super(e),this.#t=e.mustBeCommitted||!1,this._addOutlines(e)}onUpdatedColor(){this._colorPicker?.update(this.color),super.onUpdatedColor()}_addOutlines(e){e.drawOutlines&&(this.#l(e),this.#f())}#l({drawOutlines:e,drawId:t,drawingOptions:s}){this.#e=e,this._drawingOptions||=s,this.annotationElementId||this._uiManager.a11yAlert(`pdfjs-editor-${this.editorType}-added-alert`),t>=0?(this._drawId=t,this.parent.drawLayer.finalizeDraw(t,e.defaultProperties)):this._drawId=this.#h(e,this.parent),this.#u(e.box)}#h(e,t){const{id:s}=t.drawLayer.draw(me._mergeSVGProperties(this._drawingOptions.toSVGProperties(),e.defaultSVGProperties),!1,!1);return s}static _mergeSVGProperties(e,t){const s=new Set(Object.keys(e));for(const[r,o]of Object.entries(t))s.has(r)?Object.assign(e[r],o):e[r]=o;return e}static getDefaultDrawingOptions(e){qe("Not implemented")}static get typesMap(){qe("Not implemented")}static get isDrawer(){return!0}static get supportMultipleDrawings(){return!1}static updateDefaultParams(e,t){const s=this.typesMap.get(e);s&&this._defaultDrawingOptions.updateProperty(s,t),this._currentParent&&(me.#i.updateProperty(s,t),this._currentParent.drawLayer.updateProperties(this._currentDrawId,this._defaultDrawingOptions.toSVGProperties()))}updateParams(e,t){const s=this.constructor.typesMap.get(e);s&&this._updateProperty(e,s,t)}static get defaultPropertiesToUpdate(){const e=[],t=this._defaultDrawingOptions;for(const[s,r]of this.typesMap)e.push([s,t[r]]);return e}get propertiesToUpdate(){const e=[],{_drawingOptions:t}=this;for(const[s,r]of this.constructor.typesMap)e.push([s,t[r]]);return e}_updateProperty(e,t,s){const r=this._drawingOptions,o=r[t],l=u=>{r.updateProperty(t,u);const h=this.#e.updateProperty(t,u);h&&this.#u(h),this.parent?.drawLayer.updateProperties(this._drawId,r.toSVGProperties()),e===this.colorType&&this.onUpdatedColor()};this.addCommands({cmd:l.bind(this,s),undo:l.bind(this,o),post:this._uiManager.updateUI.bind(this._uiManager,this),mustExec:!0,type:e,overwriteIfSameType:!0,keepUndo:!0})}_onResizing(){this.parent?.drawLayer.updateProperties(this._drawId,me._mergeSVGProperties(this.#e.getPathResizingSVGProperties(this.#p()),{bbox:this.#m()}))}_onResized(){this.parent?.drawLayer.updateProperties(this._drawId,me._mergeSVGProperties(this.#e.getPathResizedSVGProperties(this.#p()),{bbox:this.#m()}))}_onTranslating(e,t){this.parent?.drawLayer.updateProperties(this._drawId,{bbox:this.#m()})}_onTranslated(){this.parent?.drawLayer.updateProperties(this._drawId,me._mergeSVGProperties(this.#e.getPathTranslatedSVGProperties(this.#p(),this.parentDimensions),{bbox:this.#m()}))}_onStartDragging(){this.parent?.drawLayer.updateProperties(this._drawId,{rootClass:{moving:!0}})}_onStopDragging(){this.parent?.drawLayer.updateProperties(this._drawId,{rootClass:{moving:!1}})}commit(){super.commit(),this.disableEditMode(),this.disableEditing()}disableEditing(){super.disableEditing(),this.div.classList.toggle("disabled",!0)}enableEditing(){super.enableEditing(),this.div.classList.toggle("disabled",!1)}getBaseTranslation(){return[0,0]}get isResizable(){return!0}onceAdded(e){this.annotationElementId||this.parent.addUndoableEditor(this),this._isDraggable=!0,this.#t&&(this.#t=!1,this.commit(),this.parent.setSelected(this),e&&this.isOnScreen&&this.div.focus())}remove(){this.#d(),super.remove()}rebuild(){this.parent&&(super.rebuild(),this.div!==null&&(this.#f(),this.#u(this.#e.box),this.isAttachedToDOM||this.parent.add(this)))}setParent(e){let t=!1;this.parent&&!e?(this._uiManager.removeShouldRescale(this),this.#d()):e&&(this._uiManager.addShouldRescale(this),this.#f(e),t=!this.parent&&this.div?.classList.contains("selectedEditor")),super.setParent(e),t&&this.select()}#d(){this._drawId===null||!this.parent||(this.parent.drawLayer.remove(this._drawId),this._drawId=null,this._drawingOptions.reset())}#f(e=this.parent){if(!(this._drawId!==null&&this.parent===e)){if(this._drawId!==null){this.parent.drawLayer.updateParent(this._drawId,e.drawLayer);return}this._drawingOptions.updateAll(),this._drawId=this.#h(this.#e,e)}}#g([e,t,s,r]){const{parentDimensions:[o,l],rotation:u}=this;switch(u){case 90:return[t,1-e,s*(l/o),r*(o/l)];case 180:return[1-e,1-t,s,r];case 270:return[1-t,e,s*(l/o),r*(o/l)];default:return[e,t,s,r]}}#p(){const{x:e,y:t,width:s,height:r,parentDimensions:[o,l],rotation:u}=this;switch(u){case 90:return[1-t,e,s*(o/l),r*(l/o)];case 180:return[1-e,1-t,s,r];case 270:return[t,1-e,s*(o/l),r*(l/o)];default:return[e,t,s,r]}}#u(e){[this.x,this.y,this.width,this.height]=this.#g(e),this.div&&(this.fixAndSetPosition(),this.setDims()),this._onResized()}#m(){const{x:e,y:t,width:s,height:r,rotation:o,parentRotation:l,parentDimensions:[u,h]}=this;switch((o*4+l)/90){case 1:return[1-t-r,e,r,s];case 2:return[1-e-s,1-t-r,s,r];case 3:return[t,1-e-s,r,s];case 4:return[e,t-s*(u/h),r*(h/u),s*(u/h)];case 5:return[1-t,e,s*(u/h),r*(h/u)];case 6:return[1-e-r*(h/u),1-t,r*(h/u),s*(u/h)];case 7:return[t-s*(u/h),1-e-r*(h/u),s*(u/h),r*(h/u)];case 8:return[e-s,t-r,s,r];case 9:return[1-t,e-s,r,s];case 10:return[1-e,1-t,s,r];case 11:return[t-r,1-e,r,s];case 12:return[e-r*(h/u),t,r*(h/u),s*(u/h)];case 13:return[1-t-s*(u/h),e-r*(h/u),s*(u/h),r*(h/u)];case 14:return[1-e,1-t-s*(u/h),r*(h/u),s*(u/h)];case 15:return[t,1-e,s*(u/h),r*(h/u)];default:return[e,t,s,r]}}rotate(){this.parent&&this.parent.drawLayer.updateProperties(this._drawId,me._mergeSVGProperties({bbox:this.#m()},this.#e.updateRotation((this.parentRotation-this.rotation+360)%360)))}onScaleChanging(){this.parent&&this.#u(this.#e.updateParentDimensions(this.parentDimensions,this.parent.scale))}static onScaleChangingWhenDrawing(){}render(){if(this.div)return this.div;let e,t;this._isCopy&&(e=this.x,t=this.y);const s=super.render();s.classList.add("draw");const r=document.createElement("div");return s.append(r),r.setAttribute("aria-hidden","true"),r.className="internal",this.setDims(),this._uiManager.addShouldRescale(this),this.disableEditing(),this._isCopy&&this._moveAfterPaste(e,t),s}static createDrawerInstance(e,t,s,r,o){qe("Not implemented")}static startDrawing(e,t,s,r){const{target:o,offsetX:l,offsetY:u,pointerId:h,pointerType:p}=r;if(me.#r&&me.#r!==p)return;const{viewport:{rotation:m}}=e,{width:b,height:v}=o.getBoundingClientRect(),A=me.#n=new AbortController,x=e.combinedSignal(A);if(me.#s||=h,me.#r??=p,window.addEventListener("pointerup",C=>{me.#s===C.pointerId?this._endDraw(C):me.#o?.delete(C.pointerId)},{signal:x}),window.addEventListener("pointercancel",C=>{me.#s===C.pointerId?this._currentParent.endDrawingSession():me.#o?.delete(C.pointerId)},{signal:x}),window.addEventListener("pointerdown",C=>{me.#r===C.pointerType&&((me.#o||=new Set).add(C.pointerId),me.#i.isCancellable()&&(me.#i.removeLastElement(),me.#i.isEmpty()?this._currentParent.endDrawingSession(!0):this._endDraw(null)))},{capture:!0,passive:!1,signal:x}),window.addEventListener("contextmenu",ln,{signal:x}),o.addEventListener("pointermove",this._drawMove.bind(this),{signal:x}),o.addEventListener("touchmove",C=>{C.timeStamp===me.#c&&tt(C)},{signal:x}),e.toggleDrawing(),t._editorUndoBar?.hide(),me.#i){e.drawLayer.updateProperties(this._currentDrawId,me.#i.startNew(l,u,b,v,m));return}t.updateUIForDefaultProperties(this),me.#i=this.createDrawerInstance(l,u,b,v,m),me.#a=this.getDefaultDrawingOptions(),this._currentParent=e,{id:this._currentDrawId}=e.drawLayer.draw(this._mergeSVGProperties(me.#a.toSVGProperties(),me.#i.defaultSVGProperties),!0,!1)}static _drawMove(e){if(me.#c=-1,!me.#i)return;const{offsetX:t,offsetY:s,pointerId:r}=e;if(me.#s===r){if(me.#o?.size>=1){this._endDraw(e);return}this._currentParent.drawLayer.updateProperties(this._currentDrawId,me.#i.add(t,s)),me.#c=e.timeStamp,tt(e)}}static _cleanup(e){e&&(this._currentDrawId=-1,this._currentParent=null,me.#i=null,me.#a=null,me.#r=null,me.#c=NaN),me.#n&&(me.#n.abort(),me.#n=null,me.#s=NaN,me.#o=null)}static _endDraw(e){const t=this._currentParent;if(t){if(t.toggleDrawing(!0),this._cleanup(!1),e?.target===t.div&&t.drawLayer.updateProperties(this._currentDrawId,me.#i.end(e.offsetX,e.offsetY)),this.supportMultipleDrawings){const s=me.#i,r=this._currentDrawId,o=s.getLastElement();t.addCommands({cmd:()=>{t.drawLayer.updateProperties(r,s.setLastElement(o))},undo:()=>{t.drawLayer.updateProperties(r,s.removeLastElement())},mustExec:!1,type:_e.DRAW_STEP});return}this.endDrawing(!1)}}static endDrawing(e){const t=this._currentParent;if(!t)return null;if(t.toggleDrawing(!0),t.cleanUndoStack(_e.DRAW_STEP),!me.#i.isEmpty()){const{pageDimensions:[s,r],scale:o}=t,l=t.createAndAddNewEditor({offsetX:0,offsetY:0},!1,{drawId:this._currentDrawId,drawOutlines:me.#i.getOutlines(s*o,r*o,o,this._INNER_MARGIN),drawingOptions:me.#a,mustBeCommitted:!e});return this._cleanup(!0),l}return t.drawLayer.remove(this._currentDrawId),this._cleanup(!0),null}createDrawingOptions(e){}static deserializeDraw(e,t,s,r,o,l){qe("Not implemented")}static async deserialize(e,t,s){const{rawDims:{pageWidth:r,pageHeight:o,pageX:l,pageY:u}}=t.viewport,h=this.deserializeDraw(l,u,r,o,this._INNER_MARGIN,e),p=await super.deserialize(e,t,s);return p.createDrawingOptions(e),p.#l({drawOutlines:h}),p.#f(),p.onScaleChanging(),p.rotate(),p}serializeDraw(e){const[t,s]=this.pageTranslation,[r,o]=this.pageDimensions;return this.#e.serialize([t,s,r,o],e)}renderAnnotationElement(e){return e.updateEdited({rect:this.getPDFRect()}),null}static canCreateNewEmptyEditor(){return!1}}class uE{#e=new Float64Array(6);#t;#i;#n;#a;#s;#r="";#o=0;#c=new Va;#l;#h;constructor(e,t,s,r,o,l){this.#l=s,this.#h=r,this.#n=o,this.#a=l,[e,t]=this.#d(e,t);const u=this.#t=[NaN,NaN,NaN,NaN,e,t];this.#s=[e,t],this.#i=[{line:u,points:this.#s}],this.#e.set(u,0)}updateProperty(e,t){e==="stroke-width"&&(this.#a=t)}#d(e,t){return ne._normalizePoint(e,t,this.#l,this.#h,this.#n)}isEmpty(){return!this.#i||this.#i.length===0}isCancellable(){return this.#s.length<=10}add(e,t){[e,t]=this.#d(e,t);const[s,r,o,l]=this.#e.subarray(2,6),u=e-o,h=t-l;return Math.hypot(this.#l*u,this.#h*h)<=2?null:(this.#s.push(e,t),isNaN(s)?(this.#e.set([o,l,e,t],2),this.#t.push(NaN,NaN,NaN,NaN,e,t),{path:{d:this.toSVGPath()}}):(isNaN(this.#e[0])&&this.#t.splice(6,6),this.#e.set([s,r,o,l,e,t],0),this.#t.push(...ne.createBezierPoints(s,r,o,l,e,t)),{path:{d:this.toSVGPath()}}))}end(e,t){const s=this.add(e,t);return s||(this.#s.length===2?{path:{d:this.toSVGPath()}}:null)}startNew(e,t,s,r,o){this.#l=s,this.#h=r,this.#n=o,[e,t]=this.#d(e,t);const l=this.#t=[NaN,NaN,NaN,NaN,e,t];this.#s=[e,t];const u=this.#i.at(-1);return u&&(u.line=new Float32Array(u.line),u.points=new Float32Array(u.points)),this.#i.push({line:l,points:this.#s}),this.#e.set(l,0),this.#o=0,this.toSVGPath(),null}getLastElement(){return this.#i.at(-1)}setLastElement(e){return this.#i?(this.#i.push(e),this.#t=e.line,this.#s=e.points,this.#o=0,{path:{d:this.toSVGPath()}}):this.#c.setLastElement(e)}removeLastElement(){if(!this.#i)return this.#c.removeLastElement();this.#i.pop(),this.#r="";for(let e=0,t=this.#i.length;e<t;e++){const{line:s,points:r}=this.#i[e];this.#t=s,this.#s=r,this.#o=0,this.toSVGPath()}return{path:{d:this.#r}}}toSVGPath(){const e=ne.svgRound(this.#t[4]),t=ne.svgRound(this.#t[5]);if(this.#s.length===2)return this.#r=`${this.#r} M ${e} ${t} Z`,this.#r;if(this.#s.length<=6){const r=this.#r.lastIndexOf("M");this.#r=`${this.#r.slice(0,r)} M ${e} ${t}`,this.#o=6}if(this.#s.length===4){const r=ne.svgRound(this.#t[10]),o=ne.svgRound(this.#t[11]);return this.#r=`${this.#r} L ${r} ${o}`,this.#o=12,this.#r}const s=[];this.#o===0&&(s.push(`M ${e} ${t}`),this.#o=6);for(let r=this.#o,o=this.#t.length;r<o;r+=6){const[l,u,h,p,m,b]=this.#t.slice(r,r+6).map(ne.svgRound);s.push(`C${l} ${u} ${h} ${p} ${m} ${b}`)}return this.#r+=s.join(" "),this.#o=this.#t.length,this.#r}getOutlines(e,t,s,r){const o=this.#i.at(-1);return o.line=new Float32Array(o.line),o.points=new Float32Array(o.points),this.#c.build(this.#i,e,t,s,this.#n,this.#a,r),this.#e=null,this.#t=null,this.#i=null,this.#r=null,this.#c}get defaultSVGProperties(){return{root:{viewBox:"0 0 10000 10000"},rootClass:{draw:!0},bbox:[0,0,1,1]}}}class Va extends ne{#e;#t=0;#i;#n;#a;#s;#r;#o;#c;build(e,t,s,r,o,l,u){this.#a=t,this.#s=s,this.#r=r,this.#o=o,this.#c=l,this.#i=u??0,this.#n=e,this.#d()}get thickness(){return this.#c}setLastElement(e){return this.#n.push(e),{path:{d:this.toSVGPath()}}}removeLastElement(){return this.#n.pop(),{path:{d:this.toSVGPath()}}}toSVGPath(){const e=[];for(const{line:t}of this.#n){if(e.push(`M${ne.svgRound(t[4])} ${ne.svgRound(t[5])}`),t.length===6){e.push("Z");continue}if(t.length===12&&isNaN(t[6])){e.push(`L${ne.svgRound(t[10])} ${ne.svgRound(t[11])}`);continue}for(let s=6,r=t.length;s<r;s+=6){const[o,l,u,h,p,m]=t.subarray(s,s+6).map(ne.svgRound);e.push(`C${o} ${l} ${u} ${h} ${p} ${m}`)}}return e.join("")}serialize([e,t,s,r],o){const l=[],u=[],[h,p,m,b]=this.#h();let v,A,x,C,T,w,_,R,O;switch(this.#o){case 0:O=ne._rescale,v=e,A=t+r,x=s,C=-r,T=e+h*s,w=t+(1-p-b)*r,_=e+(h+m)*s,R=t+(1-p)*r;break;case 90:O=ne._rescaleAndSwap,v=e,A=t,x=s,C=r,T=e+p*s,w=t+h*r,_=e+(p+b)*s,R=t+(h+m)*r;break;case 180:O=ne._rescale,v=e+s,A=t,x=-s,C=r,T=e+(1-h-m)*s,w=t+p*r,_=e+(1-h)*s,R=t+(p+b)*r;break;case 270:O=ne._rescaleAndSwap,v=e+s,A=t+r,x=-s,C=-r,T=e+(1-p-b)*s,w=t+(1-h-m)*r,_=e+(1-p)*s,R=t+(1-h)*r;break}for(const{line:k,points:j}of this.#n)l.push(O(k,v,A,x,C,o?new Array(k.length):null)),u.push(O(j,v,A,x,C,o?new Array(j.length):null));return{lines:l,points:u,rect:[T,w,_,R]}}static deserialize(e,t,s,r,o,{paths:{lines:l,points:u},rotation:h,thickness:p}){const m=[];let b,v,A,x,C;switch(h){case 0:C=ne._rescale,b=-e/s,v=t/r+1,A=1/s,x=-1/r;break;case 90:C=ne._rescaleAndSwap,b=-t/r,v=-e/s,A=1/r,x=1/s;break;case 180:C=ne._rescale,b=e/s+1,v=-t/r,A=-1/s,x=1/r;break;case 270:C=ne._rescaleAndSwap,b=t/r+1,v=e/s+1,A=-1/r,x=-1/s;break}if(!l){l=[];for(const w of u){const _=w.length;if(_===2){l.push(new Float32Array([NaN,NaN,NaN,NaN,w[0],w[1]]));continue}if(_===4){l.push(new Float32Array([NaN,NaN,NaN,NaN,w[0],w[1],NaN,NaN,NaN,NaN,w[2],w[3]]));continue}const R=new Float32Array(3*(_-2));l.push(R);let[O,k,j,F]=w.subarray(0,4);R.set([NaN,NaN,NaN,NaN,O,k],0);for(let q=4;q<_;q+=2){const V=w[q],Q=w[q+1];R.set(ne.createBezierPoints(O,k,j,F,V,Q),(q-2)*3),[O,k,j,F]=[j,F,V,Q]}}}for(let w=0,_=l.length;w<_;w++)m.push({line:C(l[w].map(R=>R??NaN),b,v,A,x),points:C(u[w].map(R=>R??NaN),b,v,A,x)});const T=new this.prototype.constructor;return T.build(m,s,r,1,h,p,o),T}#l(e=this.#c){const t=this.#i+e/2*this.#r;return this.#o%180===0?[t/this.#a,t/this.#s]:[t/this.#s,t/this.#a]}#h(){const[e,t,s,r]=this.#e,[o,l]=this.#l(0);return[e+o,t+l,s-2*o,r-2*l]}#d(){const e=this.#e=new Float32Array([1/0,1/0,-1/0,-1/0]);for(const{line:r}of this.#n){if(r.length<=12){for(let u=4,h=r.length;u<h;u+=6)ie.pointBoundingBox(r[u],r[u+1],e);continue}let o=r[4],l=r[5];for(let u=6,h=r.length;u<h;u+=6){const[p,m,b,v,A,x]=r.subarray(u,u+6);ie.bezierBoundingBox(o,l,p,m,b,v,A,x,e),o=A,l=x}}const[t,s]=this.#l();e[0]=Ot(e[0]-t,0,1),e[1]=Ot(e[1]-s,0,1),e[2]=Ot(e[2]+t,0,1),e[3]=Ot(e[3]+s,0,1),e[2]-=e[0],e[3]-=e[1]}get box(){return this.#e}updateProperty(e,t){return e==="stroke-width"?this.#f(t):null}#f(e){const[t,s]=this.#l();this.#c=e;const[r,o]=this.#l(),[l,u]=[r-t,o-s],h=this.#e;return h[0]-=l,h[1]-=u,h[2]+=2*l,h[3]+=2*u,h}updateParentDimensions([e,t],s){const[r,o]=this.#l();this.#a=e,this.#s=t,this.#r=s;const[l,u]=this.#l(),h=l-r,p=u-o,m=this.#e;return m[0]-=h,m[1]-=p,m[2]+=2*h,m[3]+=2*p,m}updateRotation(e){return this.#t=e,{path:{transform:this.rotationTransform}}}get viewBox(){return this.#e.map(ne.svgRound).join(" ")}get defaultProperties(){const[e,t]=this.#e;return{root:{viewBox:this.viewBox},path:{"transform-origin":`${ne.svgRound(e)} ${ne.svgRound(t)}`}}}get rotationTransform(){const[,,e,t]=this.#e;let s=0,r=0,o=0,l=0,u=0,h=0;switch(this.#t){case 90:r=t/e,o=-e/t,u=e;break;case 180:s=-1,l=-1,u=e,h=t;break;case 270:r=-t/e,o=e/t,h=t;break;default:return""}return`matrix(${s} ${r} ${o} ${l} ${ne.svgRound(u)} ${ne.svgRound(h)})`}getPathResizingSVGProperties([e,t,s,r]){const[o,l]=this.#l(),[u,h,p,m]=this.#e;if(Math.abs(p-o)<=ne.PRECISION||Math.abs(m-l)<=ne.PRECISION){const C=e+s/2-(u+p/2),T=t+r/2-(h+m/2);return{path:{"transform-origin":`${ne.svgRound(e)} ${ne.svgRound(t)}`,transform:`${this.rotationTransform} translate(${C} ${T})`}}}const b=(s-2*o)/(p-2*o),v=(r-2*l)/(m-2*l),A=p/s,x=m/r;return{path:{"transform-origin":`${ne.svgRound(u)} ${ne.svgRound(h)}`,transform:`${this.rotationTransform} scale(${A} ${x}) translate(${ne.svgRound(o)} ${ne.svgRound(l)}) scale(${b} ${v}) translate(${ne.svgRound(-o)} ${ne.svgRound(-l)})`}}}getPathResizedSVGProperties([e,t,s,r]){const[o,l]=this.#l(),u=this.#e,[h,p,m,b]=u;if(u[0]=e,u[1]=t,u[2]=s,u[3]=r,Math.abs(m-o)<=ne.PRECISION||Math.abs(b-l)<=ne.PRECISION){const T=e+s/2-(h+m/2),w=t+r/2-(p+b/2);for(const{line:_,points:R}of this.#n)ne._translate(_,T,w,_),ne._translate(R,T,w,R);return{root:{viewBox:this.viewBox},path:{"transform-origin":`${ne.svgRound(e)} ${ne.svgRound(t)}`,transform:this.rotationTransform||null,d:this.toSVGPath()}}}const v=(s-2*o)/(m-2*o),A=(r-2*l)/(b-2*l),x=-v*(h+o)+e+o,C=-A*(p+l)+t+l;if(v!==1||A!==1||x!==0||C!==0)for(const{line:T,points:w}of this.#n)ne._rescale(T,x,C,v,A,T),ne._rescale(w,x,C,v,A,w);return{root:{viewBox:this.viewBox},path:{"transform-origin":`${ne.svgRound(e)} ${ne.svgRound(t)}`,transform:this.rotationTransform||null,d:this.toSVGPath()}}}getPathTranslatedSVGProperties([e,t],s){const[r,o]=s,l=this.#e,u=e-l[0],h=t-l[1];if(this.#a===r&&this.#s===o)for(const{line:p,points:m}of this.#n)ne._translate(p,u,h,p),ne._translate(m,u,h,m);else{const p=this.#a/r,m=this.#s/o;this.#a=r,this.#s=o;for(const{line:b,points:v}of this.#n)ne._rescale(b,u,h,p,m,b),ne._rescale(v,u,h,p,m,v);l[2]*=p,l[3]*=m}return l[0]=e,l[1]=t,{root:{viewBox:this.viewBox},path:{d:this.toSVGPath(),"transform-origin":`${ne.svgRound(e)} ${ne.svgRound(t)}`}}}get defaultSVGProperties(){const e=this.#e;return{root:{viewBox:this.viewBox},rootClass:{draw:!0},path:{d:this.toSVGPath(),"transform-origin":`${ne.svgRound(e[0])} ${ne.svgRound(e[1])}`,transform:this.rotationTransform||null},bbox:e}}}class Bl extends sb{constructor(e){super(),this._viewParameters=e,super.updateProperties({fill:"none",stroke:ue._defaultLineColor,"stroke-opacity":1,"stroke-width":1,"stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":10})}updateSVGProperty(e,t){e==="stroke-width"&&(t??=this["stroke-width"],t*=this._viewParameters.realScale),super.updateSVGProperty(e,t)}clone(){const e=new Bl(this._viewParameters);return e.updateAll(this),e}}class oh extends me{static _type="ink";static _editorType=be.INK;static _defaultDrawingOptions=null;constructor(e){super({...e,name:"inkEditor"}),this._willKeepAspectRatio=!0,this.defaultL10nId="pdfjs-editor-ink-editor"}static initialize(e,t){ue.initialize(e,t),this._defaultDrawingOptions=new Bl(t.viewParameters)}static getDefaultDrawingOptions(e){const t=this._defaultDrawingOptions.clone();return t.updateProperties(e),t}static get supportMultipleDrawings(){return!0}static get typesMap(){return Se(this,"typesMap",new Map([[_e.INK_THICKNESS,"stroke-width"],[_e.INK_COLOR,"stroke"],[_e.INK_OPACITY,"stroke-opacity"]]))}static createDrawerInstance(e,t,s,r,o){return new uE(e,t,s,r,o,this._defaultDrawingOptions["stroke-width"])}static deserializeDraw(e,t,s,r,o,l){return Va.deserialize(e,t,s,r,o,l)}static async deserialize(e,t,s){let r=null;if(e instanceof rh){const{data:{inkLists:l,rect:u,rotation:h,id:p,color:m,opacity:b,borderStyle:{rawWidth:v},popupRef:A,richText:x,contentsObj:C,creationDate:T,modificationDate:w},parent:{page:{pageNumber:_}}}=e;r=e={annotationType:be.INK,color:Array.from(m),thickness:v,opacity:b,paths:{points:l},boxes:null,pageIndex:_-1,rect:u.slice(0),rotation:h,annotationElementId:p,id:p,deleted:!1,popupRef:A,richText:x,comment:C?.str||null,creationDate:T,modificationDate:w}}const o=await super.deserialize(e,t,s);return o._initialData=r,e.comment&&o.setCommentData(e),o}get toolbarButtons(){return this._colorPicker||=new Pa(this),[["colorPicker",this._colorPicker]]}get colorType(){return _e.INK_COLOR}get color(){return this._drawingOptions.stroke}get opacity(){return this._drawingOptions["stroke-opacity"]}onScaleChanging(){if(!this.parent)return;super.onScaleChanging();const{_drawId:e,_drawingOptions:t,parent:s}=this;t.updateSVGProperty("stroke-width"),s.drawLayer.updateProperties(e,t.toSVGProperties())}static onScaleChangingWhenDrawing(){const e=this._currentParent;e&&(super.onScaleChangingWhenDrawing(),this._defaultDrawingOptions.updateSVGProperty("stroke-width"),e.drawLayer.updateProperties(this._currentDrawId,this._defaultDrawingOptions.toSVGProperties()))}createDrawingOptions({color:e,thickness:t,opacity:s}){this._drawingOptions=oh.getDefaultDrawingOptions({stroke:ie.makeHexColor(...e),"stroke-width":t,"stroke-opacity":s})}serialize(e=!1){if(this.isEmpty())return null;if(this.deleted)return this.serializeDeleted();const{lines:t,points:s}=this.serializeDraw(e),{_drawingOptions:{stroke:r,"stroke-opacity":o,"stroke-width":l}}=this,u=Object.assign(super.serialize(e),{color:ue._colorManager.convert(r),opacity:o,thickness:l,paths:{lines:t,points:s}});return this.addComment(u),e?(u.isCopy=!0,u):this.annotationElementId&&!this.#e(u)?null:(u.id=this.annotationElementId,u)}#e(e){const{color:t,thickness:s,opacity:r,pageIndex:o}=this._initialData;return this.hasEditedComment||this._hasBeenMoved||this._hasBeenResized||e.color.some((l,u)=>l!==t[u])||e.thickness!==s||e.opacity!==r||e.pageIndex!==o}renderAnnotationElement(e){if(this.deleted)return e.hide(),null;const{points:t,rect:s}=this.serializeDraw(!1);return e.updateEdited({rect:s,thickness:this._drawingOptions["stroke-width"],points:t,popup:this.comment}),null}}class Ld extends Va{toSVGPath(){let e=super.toSVGPath();return e.endsWith("Z")||(e+="Z"),e}}const Al=8,Ca=3;class ss{static#e={maxDim:512,sigmaSFactor:.02,sigmaR:25,kernelSize:16};static#t(e,t,s,r){return s-=e,r-=t,s===0?r>0?0:4:s===1?r+6:2-r}static#i=new Int32Array([0,1,-1,1,-1,0,-1,-1,0,-1,1,-1,1,0,1,1]);static#n(e,t,s,r,o,l,u){const h=this.#t(s,r,o,l);for(let p=0;p<8;p++){const m=(-p+h-u+16)%8,b=this.#i[2*m],v=this.#i[2*m+1];if(e[(s+b)*t+(r+v)]!==0)return m}return-1}static#a(e,t,s,r,o,l,u){const h=this.#t(s,r,o,l);for(let p=0;p<8;p++){const m=(p+h+u+16)%8,b=this.#i[2*m],v=this.#i[2*m+1];if(e[(s+b)*t+(r+v)]!==0)return m}return-1}static#s(e,t,s,r){const o=e.length,l=new Int32Array(o);for(let m=0;m<o;m++)l[m]=e[m]<=r?1:0;for(let m=1;m<s-1;m++)l[m*t]=l[m*t+t-1]=0;for(let m=0;m<t;m++)l[m]=l[t*s-1-m]=0;let u=1,h;const p=[];for(let m=1;m<s-1;m++){h=1;for(let b=1;b<t-1;b++){const v=m*t+b,A=l[v];if(A===0)continue;let x=m,C=b;if(A===1&&l[v-1]===0)u+=1,C-=1;else if(A>=1&&l[v+1]===0)u+=1,C+=1,A>1&&(h=A);else{A!==1&&(h=Math.abs(A));continue}const T=[b,m],w=C===b+1,_={isHole:w,points:T,id:u,parent:0};p.push(_);let R;for(const J of p)if(J.id===h){R=J;break}R?R.isHole?_.parent=w?R.parent:h:_.parent=w?h:R.parent:_.parent=w?h:0;const O=this.#n(l,t,m,b,x,C,0);if(O===-1){l[v]=-u,l[v]!==1&&(h=Math.abs(l[v]));continue}let k=this.#i[2*O],j=this.#i[2*O+1];const F=m+k,q=b+j;x=F,C=q;let V=m,Q=b;for(;;){const J=this.#a(l,t,V,Q,x,C,1);k=this.#i[2*J],j=this.#i[2*J+1];const le=V+k,de=Q+j;T.push(de,le);const ae=V*t+Q;if(l[ae+1]===0?l[ae]=-u:l[ae]===1&&(l[ae]=u),le===m&&de===b&&V===F&&Q===q){l[v]!==1&&(h=Math.abs(l[v]));break}else x=V,C=Q,V=le,Q=de}}}return p}static#r(e,t,s,r){if(s-t<=4){for(let F=t;F<s-2;F+=2)r.push(e[F],e[F+1]);return}const o=e[t],l=e[t+1],u=e[s-4]-o,h=e[s-3]-l,p=Math.hypot(u,h),m=u/p,b=h/p,v=m*l-b*o,A=h/u,x=1/p,C=Math.atan(A),T=Math.cos(C),w=Math.sin(C),_=x*(Math.abs(T)+Math.abs(w)),R=x*(1-_+_**2),O=Math.max(Math.atan(Math.abs(w+T)*R),Math.atan(Math.abs(w-T)*R));let k=0,j=t;for(let F=t+2;F<s-2;F+=2){const q=Math.abs(v-m*e[F+1]+b*e[F]);q>k&&(j=F,k=q)}k>(p*O)**2?(this.#r(e,t,j+2,r),this.#r(e,j,s,r)):r.push(o,l)}static#o(e){const t=[],s=e.length;return this.#r(e,0,s,t),t.push(e[s-2],e[s-1]),t.length<=4?null:t}static#c(e,t,s,r,o,l){const u=new Float32Array(l**2),h=-2*r**2,p=l>>1;for(let C=0;C<l;C++){const T=(C-p)**2;for(let w=0;w<l;w++)u[C*l+w]=Math.exp((T+(w-p)**2)/h)}const m=new Float32Array(256),b=-2*o**2;for(let C=0;C<256;C++)m[C]=Math.exp(C**2/b);const v=e.length,A=new Uint8Array(v),x=new Uint32Array(256);for(let C=0;C<s;C++)for(let T=0;T<t;T++){const w=C*t+T,_=e[w];let R=0,O=0;for(let j=0;j<l;j++){const F=C+j-p;if(!(F<0||F>=s))for(let q=0;q<l;q++){const V=T+q-p;if(V<0||V>=t)continue;const Q=e[F*t+V],J=u[j*l+q]*m[Math.abs(Q-_)];R+=Q*J,O+=J}}const k=A[w]=Math.round(R/O);x[k]++}return[A,x]}static#l(e){const t=new Uint32Array(256);for(const s of e)t[s]++;return t}static#h(e){const t=e.length,s=new Uint8ClampedArray(t>>2);let r=-1/0,o=1/0;for(let u=0,h=s.length;u<h;u++){const p=s[u]=e[u<<2];r=Math.max(r,p),o=Math.min(o,p)}const l=255/(r-o);for(let u=0,h=s.length;u<h;u++)s[u]=(s[u]-o)*l;return s}static#d(e){let t,s=-1/0,r=-1/0;const o=e.findIndex(h=>h!==0);let l=o,u=o;for(t=o;t<256;t++){const h=e[t];h>s&&(t-l>r&&(r=t-l,u=t-1),s=h,l=t)}for(t=u-1;t>=0&&!(e[t]>e[t+1]);t--);return t}static#f(e){const t=e,{width:s,height:r}=e,{maxDim:o}=this.#e;let l=s,u=r;if(s>o||r>o){let v=s,A=r,x=Math.log2(Math.max(s,r)/o);const C=Math.floor(x);x=x===C?C-1:C;for(let w=0;w<x;w++){l=Math.ceil(v/2),u=Math.ceil(A/2);const _=new OffscreenCanvas(l,u);_.getContext("2d").drawImage(e,0,0,v,A,0,0,l,u),v=l,A=u,e!==t&&e.close(),e=_.transferToImageBitmap()}const T=Math.min(o/l,o/u);l=Math.round(l*T),u=Math.round(u*T)}const p=new OffscreenCanvas(l,u).getContext("2d",{willReadFrequently:!0});p.fillStyle="white",p.fillRect(0,0,l,u),p.filter="grayscale(1)",p.drawImage(e,0,0,e.width,e.height,0,0,l,u);const m=p.getImageData(0,0,l,u).data;return[this.#h(m),l,u]}static extractContoursFromText(e,{fontFamily:t,fontStyle:s,fontWeight:r},o,l,u,h){let p=new OffscreenCanvas(1,1),m=p.getContext("2d",{alpha:!1});const b=200,v=m.font=`${s} ${r} ${b}px ${t}`,{actualBoundingBoxLeft:A,actualBoundingBoxRight:x,actualBoundingBoxAscent:C,actualBoundingBoxDescent:T,fontBoundingBoxAscent:w,fontBoundingBoxDescent:_,width:R}=m.measureText(e),O=1.5,k=Math.ceil(Math.max(Math.abs(A)+Math.abs(x)||0,R)*O),j=Math.ceil(Math.max(Math.abs(C)+Math.abs(T)||b,Math.abs(w)+Math.abs(_)||b)*O);p=new OffscreenCanvas(k,j),m=p.getContext("2d",{alpha:!0,willReadFrequently:!0}),m.font=v,m.filter="grayscale(1)",m.fillStyle="white",m.fillRect(0,0,k,j),m.fillStyle="black",m.fillText(e,k*(O-1)/2,j*(3-O)/2);const F=this.#h(m.getImageData(0,0,k,j).data),q=this.#l(F),V=this.#d(q),Q=this.#s(F,k,j,V);return this.processDrawnLines({lines:{curves:Q,width:k,height:j},pageWidth:o,pageHeight:l,rotation:u,innerMargin:h,mustSmooth:!0,areContours:!0})}static process(e,t,s,r,o){const[l,u,h]=this.#f(e),[p,m]=this.#c(l,u,h,Math.hypot(u,h)*this.#e.sigmaSFactor,this.#e.sigmaR,this.#e.kernelSize),b=this.#d(m),v=this.#s(p,u,h,b);return this.processDrawnLines({lines:{curves:v,width:u,height:h},pageWidth:t,pageHeight:s,rotation:r,innerMargin:o,mustSmooth:!0,areContours:!0})}static processDrawnLines({lines:e,pageWidth:t,pageHeight:s,rotation:r,innerMargin:o,mustSmooth:l,areContours:u}){r%180!==0&&([t,s]=[s,t]);const{curves:h,width:p,height:m}=e,b=e.thickness??0,v=[],A=Math.min(t/p,s/m),x=A/t,C=A/s,T=[];for(const{points:_}of h){const R=l?this.#o(_):_;if(!R)continue;T.push(R);const O=R.length,k=new Float32Array(O),j=new Float32Array(3*(O===2?2:O-2));if(v.push({line:j,points:k}),O===2){k[0]=R[0]*x,k[1]=R[1]*C,j.set([NaN,NaN,NaN,NaN,k[0],k[1]],0);continue}let[F,q,V,Q]=R;F*=x,q*=C,V*=x,Q*=C,k.set([F,q,V,Q],0),j.set([NaN,NaN,NaN,NaN,F,q],0);for(let J=4;J<O;J+=2){const le=k[J]=R[J]*x,de=k[J+1]=R[J+1]*C;j.set(ne.createBezierPoints(F,q,V,Q,le,de),(J-2)*3),[F,q,V,Q]=[V,Q,le,de]}}if(v.length===0)return null;const w=u?new Ld:new Va;return w.build(v,t,s,1,r,u?0:b,o),{outline:w,newCurves:T,areContours:u,thickness:b,width:p,height:m}}static async compressSignature({outlines:e,areContours:t,thickness:s,width:r,height:o}){let l=1/0,u=-1/0,h=0;for(const R of e){h+=R.length;for(let O=2,k=R.length;O<k;O++){const j=R[O]-R[O-2];l=Math.min(l,j),u=Math.max(u,j)}}let p;l>=-128&&u<=127?p=Int8Array:l>=-32768&&u<=32767?p=Int16Array:p=Int32Array;const m=e.length,b=Al+Ca*m,v=new Uint32Array(b);let A=0;v[A++]=b*Uint32Array.BYTES_PER_ELEMENT+(h-2*m)*p.BYTES_PER_ELEMENT,v[A++]=0,v[A++]=r,v[A++]=o,v[A++]=t?0:1,v[A++]=Math.max(0,Math.floor(s??0)),v[A++]=m,v[A++]=p.BYTES_PER_ELEMENT;for(const R of e)v[A++]=R.length-2,v[A++]=R[0],v[A++]=R[1];const x=new CompressionStream("deflate-raw"),C=x.writable.getWriter();await C.ready,C.write(v);const T=p.prototype.constructor;for(const R of e){const O=new T(R.length-2);for(let k=2,j=R.length;k<j;k++)O[k-2]=R[k]-R[k-2];C.write(O)}C.close();const w=await new Response(x.readable).arrayBuffer(),_=new Uint8Array(w);return wy(_)}static async decompressSignature(e){try{const t=Nx(e),{readable:s,writable:r}=new DecompressionStream("deflate-raw"),o=r.getWriter();await o.ready,o.write(t).then(async()=>{await o.ready,await o.close()}).catch(()=>{});let l=null,u=0;for await(const R of s)l||=new Uint8Array(new Uint32Array(R.buffer,0,4)[0]),l.set(R,u),u+=R.length;const h=new Uint32Array(l.buffer,0,l.length>>2),p=h[1];if(p!==0)throw new Error(`Invalid version: ${p}`);const m=h[2],b=h[3],v=h[4]===0,A=h[5],x=h[6],C=h[7],T=[],w=(Al+Ca*x)*Uint32Array.BYTES_PER_ELEMENT;let _;switch(C){case Int8Array.BYTES_PER_ELEMENT:_=new Int8Array(l.buffer,w);break;case Int16Array.BYTES_PER_ELEMENT:_=new Int16Array(l.buffer,w);break;case Int32Array.BYTES_PER_ELEMENT:_=new Int32Array(l.buffer,w);break}u=0;for(let R=0;R<x;R++){const O=h[Ca*R+Al],k=new Float32Array(O+2);T.push(k);for(let j=0;j<Ca-1;j++)k[j]=h[Ca*R+Al+j+1];for(let j=0;j<O;j++)k[j+2]=k[j]+_[u++]}return{areContours:v,thickness:A,outlines:T,width:m,height:b}}catch(t){return ve(`decompressSignature: ${t}`),null}}}class lh extends sb{constructor(){super(),super.updateProperties({fill:ue._defaultLineColor,"stroke-width":0})}clone(){const e=new lh;return e.updateAll(this),e}}class ch extends Bl{constructor(e){super(e),super.updateProperties({stroke:ue._defaultLineColor,"stroke-width":1})}clone(){const e=new ch(this._viewParameters);return e.updateAll(this),e}}class jn extends me{#e=!1;#t=null;#i=null;#n=null;static _type="signature";static _editorType=be.SIGNATURE;static _defaultDrawingOptions=null;constructor(e){super({...e,mustBeCommitted:!0,name:"signatureEditor"}),this._willKeepAspectRatio=!0,this.#i=e.signatureData||null,this.#t=null,this.defaultL10nId="pdfjs-editor-signature-editor1"}static initialize(e,t){ue.initialize(e,t),this._defaultDrawingOptions=new lh,this._defaultDrawnSignatureOptions=new ch(t.viewParameters)}static getDefaultDrawingOptions(e){const t=this._defaultDrawingOptions.clone();return t.updateProperties(e),t}static get supportMultipleDrawings(){return!1}static get typesMap(){return Se(this,"typesMap",new Map)}static get isDrawer(){return!1}get telemetryFinalData(){return{type:"signature",hasDescription:!!this.#t}}static computeTelemetryFinalData(e){const t=e.get("hasDescription");return{hasAltText:t.get(!0)??0,hasNoAltText:t.get(!1)??0}}get isResizable(){return!0}onScaleChanging(){this._drawId!==null&&super.onScaleChanging()}render(){if(this.div)return this.div;let e,t;const{_isCopy:s}=this;if(s&&(this._isCopy=!1,e=this.x,t=this.y),super.render(),this._drawId===null)if(this.#i){const{lines:r,mustSmooth:o,areContours:l,description:u,uuid:h,heightInPage:p}=this.#i,{rawDims:{pageWidth:m,pageHeight:b},rotation:v}=this.parent.viewport,A=ss.processDrawnLines({lines:r,pageWidth:m,pageHeight:b,rotation:v,innerMargin:jn._INNER_MARGIN,mustSmooth:o,areContours:l});this.addSignature(A,p,u,h)}else this.div.setAttribute("data-l10n-args",JSON.stringify({description:""})),this.div.hidden=!0,this._uiManager.getSignature(this);else this.div.setAttribute("data-l10n-args",JSON.stringify({description:this.#t||""}));return s&&(this._isCopy=!0,this._moveAfterPaste(e,t)),this.div}setUuid(e){this.#n=e,this.addEditToolbar()}getUuid(){return this.#n}get description(){return this.#t}set description(e){this.#t=e,this.div&&(this.div.setAttribute("data-l10n-args",JSON.stringify({description:e})),super.addEditToolbar().then(t=>{t?.updateEditSignatureButton(e)}))}getSignaturePreview(){const{newCurves:e,areContours:t,thickness:s,width:r,height:o}=this.#i,l=Math.max(r,o),u=ss.processDrawnLines({lines:{curves:e.map(h=>({points:h})),thickness:s,width:r,height:o},pageWidth:l,pageHeight:l,rotation:0,innerMargin:0,mustSmooth:!1,areContours:t});return{areContours:t,outline:u.outline}}get toolbarButtons(){return this._uiManager.signatureManager?[["editSignature",this._uiManager.signatureManager]]:super.toolbarButtons}addSignature(e,t,s,r){const{x:o,y:l}=this,{outline:u}=this.#i=e;this.#e=u instanceof Ld,this.description=s;let h;this.#e?h=jn.getDefaultDrawingOptions():(h=jn._defaultDrawnSignatureOptions.clone(),h.updateProperties({"stroke-width":u.thickness})),this._addOutlines({drawOutlines:u,drawingOptions:h});const[,p]=this.pageDimensions;let m=t/p;m=m>=1?.5:m,this.width*=m/this.height,this.width>=1&&(m*=.9/this.width,this.width=.9),this.height=m,this.setDims(),this.x=o,this.y=l,this.center(),this._onResized(),this.onScaleChanging(),this.rotate(),this._uiManager.addToAnnotationStorage(this),this.setUuid(r),this._reportTelemetry({action:"pdfjs.signature.inserted",data:{hasBeenSaved:!!r,hasDescription:!!s}}),this.div.hidden=!1}getFromImage(e){const{rawDims:{pageWidth:t,pageHeight:s},rotation:r}=this.parent.viewport;return ss.process(e,t,s,r,jn._INNER_MARGIN)}getFromText(e,t){const{rawDims:{pageWidth:s,pageHeight:r},rotation:o}=this.parent.viewport;return ss.extractContoursFromText(e,t,s,r,o,jn._INNER_MARGIN)}getDrawnSignature(e){const{rawDims:{pageWidth:t,pageHeight:s},rotation:r}=this.parent.viewport;return ss.processDrawnLines({lines:e,pageWidth:t,pageHeight:s,rotation:r,innerMargin:jn._INNER_MARGIN,mustSmooth:!1,areContours:!1})}createDrawingOptions({areContours:e,thickness:t}){e?this._drawingOptions=jn.getDefaultDrawingOptions():(this._drawingOptions=jn._defaultDrawnSignatureOptions.clone(),this._drawingOptions.updateProperties({"stroke-width":t}))}serialize(e=!1){if(this.isEmpty())return null;const{lines:t,points:s}=this.serializeDraw(e),{_drawingOptions:{"stroke-width":r}}=this,o=Object.assign(super.serialize(e),{isSignature:!0,areContours:this.#e,color:[0,0,0],thickness:this.#e?0:r});return this.addComment(o),e?(o.paths={lines:t,points:s},o.uuid=this.#n,o.isCopy=!0):o.lines=t,this.#t&&(o.accessibilityData={type:"Figure",alt:this.#t}),o}static deserializeDraw(e,t,s,r,o,l){return l.areContours?Ld.deserialize(e,t,s,r,o,l):Va.deserialize(e,t,s,r,o,l)}static async deserialize(e,t,s){const r=await super.deserialize(e,t,s);return r.#e=e.areContours,r.description=e.accessibilityData?.alt||"",r.#n=e.uuid,r}}class dE extends ue{#e=null;#t=null;#i=null;#n=null;#a=null;#s="";#r=null;#o=!1;#c=null;#l=!1;#h=!1;static _type="stamp";static _editorType=be.STAMP;constructor(e){super({...e,name:"stampEditor"}),this.#n=e.bitmapUrl,this.#a=e.bitmapFile,this.defaultL10nId="pdfjs-editor-stamp-editor"}static initialize(e,t){ue.initialize(e,t)}static isHandlingMimeForPasting(e){return Rl.includes(e)}static paste(e,t){t.pasteEditor({mode:be.STAMP},{bitmapFile:e.getAsFile()})}altTextFinish(){this._uiManager.useNewAltTextFlow&&(this.div.hidden=!1),super.altTextFinish()}get telemetryFinalData(){return{type:"stamp",hasAltText:!!this.altTextData?.altText}}static computeTelemetryFinalData(e){const t=e.get("hasAltText");return{hasAltText:t.get(!0)??0,hasNoAltText:t.get(!1)??0}}#d(e,t=!1){if(!e){this.remove();return}this.#e=e.bitmap,t||(this.#t=e.id,this.#l=e.isSvg),e.file&&(this.#s=e.file.name),this.#p()}#f(){if(this.#i=null,this._uiManager.enableWaiting(!1),!!this.#r){if(this._uiManager.useNewAltTextWhenAddingImage&&this._uiManager.useNewAltTextFlow&&this.#e){this.addEditToolbar().then(()=>{this._editToolbar.hide(),this._uiManager.editAltText(this,!0)});return}if(!this._uiManager.useNewAltTextWhenAddingImage&&this._uiManager.useNewAltTextFlow&&this.#e){this._reportTelemetry({action:"pdfjs.image.image_added",data:{alt_text_modal:!1,alt_text_type:"empty"}});try{this.mlGuessAltText()}catch{}}this.div.focus()}}async mlGuessAltText(e=null,t=!0){if(this.hasAltTextData())return null;const{mlManager:s}=this._uiManager;if(!s)throw new Error("No ML.");if(!await s.isEnabledFor("altText"))throw new Error("ML isn't enabled for alt text.");const{data:r,width:o,height:l}=e||this.copyCanvas(null,null,!0).imageData,u=await s.guess({name:"altText",request:{data:r,width:o,height:l,channels:r.length/(o*l)}});if(!u)throw new Error("No response from the AI service.");if(u.error)throw new Error("Error from the AI service.");if(u.cancel)return null;if(!u.output)throw new Error("No valid response from the AI service.");const h=u.output;return await this.setGuessedAltText(h),t&&!this.hasAltTextData()&&(this.altTextData={alt:h,decorative:!1}),h}#g(){if(this.#t){this._uiManager.enableWaiting(!0),this._uiManager.imageManager.getFromId(this.#t).then(s=>this.#d(s,!0)).finally(()=>this.#f());return}if(this.#n){const s=this.#n;this.#n=null,this._uiManager.enableWaiting(!0),this.#i=this._uiManager.imageManager.getFromUrl(s).then(r=>this.#d(r)).finally(()=>this.#f());return}if(this.#a){const s=this.#a;this.#a=null,this._uiManager.enableWaiting(!0),this.#i=this._uiManager.imageManager.getFromFile(s).then(r=>this.#d(r)).finally(()=>this.#f());return}const e=document.createElement("input");e.type="file",e.accept=Rl.join(",");const t=this._uiManager._signal;this.#i=new Promise(s=>{e.addEventListener("change",async()=>{if(!e.files||e.files.length===0)this.remove();else{this._uiManager.enableWaiting(!0);const r=await this._uiManager.imageManager.getFromFile(e.files[0]);this._reportTelemetry({action:"pdfjs.image.image_selected",data:{alt_text_modal:this._uiManager.useNewAltTextFlow}}),this.#d(r)}s()},{signal:t}),e.addEventListener("cancel",()=>{this.remove(),s()},{signal:t})}).finally(()=>this.#f()),e.click()}remove(){this.#t&&(this.#e=null,this._uiManager.imageManager.deleteId(this.#t),this.#r?.remove(),this.#r=null,this.#c&&(clearTimeout(this.#c),this.#c=null)),super.remove()}rebuild(){if(!this.parent){this.#t&&this.#g();return}super.rebuild(),this.div!==null&&(this.#t&&this.#r===null&&this.#g(),this.isAttachedToDOM||this.parent.add(this))}onceAdded(e){this._isDraggable=!0,e&&this.div.focus()}isEmpty(){return!(this.#i||this.#e||this.#n||this.#a||this.#t||this.#o)}get toolbarButtons(){return[["altText",this.createAltText()]]}get isResizable(){return!0}render(){if(this.div)return this.div;let e,t;return this._isCopy&&(e=this.x,t=this.y),super.render(),this.div.hidden=!0,this.createAltText(),this.#o||(this.#e?this.#p():this.#g()),this._isCopy&&this._moveAfterPaste(e,t),this._uiManager.addShouldRescale(this),this.div}setCanvas(e,t){const{id:s,bitmap:r}=this._uiManager.imageManager.getFromCanvas(e,t);t.remove(),s&&this._uiManager.imageManager.isValidId(s)&&(this.#t=s,r&&(this.#e=r),this.#o=!1,this.#p())}_onResized(){this.onScaleChanging()}onScaleChanging(){if(!this.parent)return;this.#c!==null&&clearTimeout(this.#c);const e=200;this.#c=setTimeout(()=>{this.#c=null,this.#m()},e)}#p(){const{div:e}=this;let{width:t,height:s}=this.#e;const[r,o]=this.pageDimensions,l=.75;if(this.width)t=this.width*r,s=this.height*o;else if(t>l*r||s>l*o){const h=Math.min(l*r/t,l*o/s);t*=h,s*=h}this._uiManager.enableWaiting(!1);const u=this.#r=document.createElement("canvas");u.setAttribute("role","img"),this.addContainer(u),this.width=t/r,this.height=s/o,this.setDims(),this._initialOptions?.isCentered?this.center():this.fixAndSetPosition(),this._initialOptions=null,(!this._uiManager.useNewAltTextWhenAddingImage||!this._uiManager.useNewAltTextFlow||this.annotationElementId)&&(e.hidden=!1),this.#m(),this.#h||(this.parent.addUndoableEditor(this),this.#h=!0),this._reportTelemetry({action:"inserted_image"}),this.#s&&this.div.setAttribute("aria-description",this.#s),this.annotationElementId||this._uiManager.a11yAlert("pdfjs-editor-stamp-added-alert")}copyCanvas(e,t,s=!1){e||(e=224);const{width:r,height:o}=this.#e,l=new Tn;let u=this.#e,h=r,p=o,m=null;if(t){if(r>t||o>t){const j=Math.min(t/r,t/o);h=Math.floor(r*j),p=Math.floor(o*j)}m=document.createElement("canvas");const v=m.width=Math.ceil(h*l.sx),A=m.height=Math.ceil(p*l.sy);this.#l||(u=this.#u(v,A));const x=m.getContext("2d");x.filter=this._uiManager.hcmFilter;let C="white",T="#cfcfd8";this._uiManager.hcmFilter!=="none"?T="black":Bx.isDarkMode&&(C="#8f8f9d",T="#42414d");const w=15,_=w*l.sx,R=w*l.sy,O=new OffscreenCanvas(_*2,R*2),k=O.getContext("2d");k.fillStyle=C,k.fillRect(0,0,_*2,R*2),k.fillStyle=T,k.fillRect(0,0,_,R),k.fillRect(_,R,_,R),x.fillStyle=x.createPattern(O,"repeat"),x.fillRect(0,0,v,A),x.drawImage(u,0,0,u.width,u.height,0,0,v,A)}let b=null;if(s){let v,A;if(l.symmetric&&u.width<e&&u.height<e)v=u.width,A=u.height;else if(u=this.#e,r>e||o>e){const T=Math.min(e/r,e/o);v=Math.floor(r*T),A=Math.floor(o*T),this.#l||(u=this.#u(v,A))}const C=new OffscreenCanvas(v,A).getContext("2d",{willReadFrequently:!0});C.drawImage(u,0,0,u.width,u.height,0,0,v,A),b={width:v,height:A,data:C.getImageData(0,0,v,A).data}}return{canvas:m,width:h,height:p,imageData:b}}#u(e,t){const{width:s,height:r}=this.#e;let o=s,l=r,u=this.#e;for(;o>2*e||l>2*t;){const h=o,p=l;o>2*e&&(o=o>=16384?Math.floor(o/2)-1:Math.ceil(o/2)),l>2*t&&(l=l>=16384?Math.floor(l/2)-1:Math.ceil(l/2));const m=new OffscreenCanvas(o,l);m.getContext("2d").drawImage(u,0,0,h,p,0,0,o,l),u=m.transferToImageBitmap()}return u}#m(){const[e,t]=this.parentDimensions,{width:s,height:r}=this,o=new Tn,l=Math.ceil(s*e*o.sx),u=Math.ceil(r*t*o.sy),h=this.#r;if(!h||h.width===l&&h.height===u)return;h.width=l,h.height=u;const p=this.#l?this.#e:this.#u(l,u),m=h.getContext("2d");m.filter=this._uiManager.hcmFilter,m.drawImage(p,0,0,p.width,p.height,0,0,l,u)}#y(e){if(e){if(this.#l){const r=this._uiManager.imageManager.getSvgUrl(this.#t);if(r)return r}const t=document.createElement("canvas");return{width:t.width,height:t.height}=this.#e,t.getContext("2d").drawImage(this.#e,0,0),t.toDataURL()}if(this.#l){const[t,s]=this.pageDimensions,r=Math.round(this.width*t*cs.PDF_TO_CSS_UNITS),o=Math.round(this.height*s*cs.PDF_TO_CSS_UNITS),l=new OffscreenCanvas(r,o);return l.getContext("2d").drawImage(this.#e,0,0,this.#e.width,this.#e.height,0,0,r,o),l.transferToImageBitmap()}return structuredClone(this.#e)}static async deserialize(e,t,s){let r=null,o=!1;if(e instanceof tb){const{data:{rect:C,rotation:T,id:w,structParent:_,popupRef:R,richText:O,contentsObj:k,creationDate:j,modificationDate:F},container:q,parent:{page:{pageNumber:V}},canvas:Q}=e;let J,le;Q?(delete e.canvas,{id:J,bitmap:le}=s.imageManager.getFromCanvas(q.id,Q),Q.remove()):(o=!0,e._hasNoCanvas=!0);const de=(await t._structTree.getAriaAttributes(`${Yd}${w}`))?.get("aria-label")||"";r=e={annotationType:be.STAMP,bitmapId:J,bitmap:le,pageIndex:V-1,rect:C.slice(0),rotation:T,annotationElementId:w,id:w,deleted:!1,accessibilityData:{decorative:!1,altText:de},isSvg:!1,structParent:_,popupRef:R,richText:O,comment:k?.str||null,creationDate:j,modificationDate:F}}const l=await super.deserialize(e,t,s),{rect:u,bitmap:h,bitmapUrl:p,bitmapId:m,isSvg:b,accessibilityData:v}=e;o?(s.addMissingCanvas(e.id,l),l.#o=!0):m&&s.imageManager.isValidId(m)?(l.#t=m,h&&(l.#e=h)):l.#n=p,l.#l=b;const[A,x]=l.pageDimensions;return l.width=(u[2]-u[0])/A,l.height=(u[3]-u[1])/x,v&&(l.altTextData=v),l._initialData=r,e.comment&&l.setCommentData(e),l.#h=!!r,l}serialize(e=!1,t=null){if(this.isEmpty())return null;if(this.deleted)return this.serializeDeleted();const s=Object.assign(super.serialize(e),{bitmapId:this.#t,isSvg:this.#l});if(this.addComment(s),e)return s.bitmapUrl=this.#y(!0),s.accessibilityData=this.serializeAltText(!0),s.isCopy=!0,s;const{decorative:r,altText:o}=this.serializeAltText(!1);if(!r&&o&&(s.accessibilityData={type:"Figure",alt:o}),this.annotationElementId){const u=this.#v(s);return u.isSame?null:(u.isSameAltText?delete s.accessibilityData:s.accessibilityData.structParent=this._initialData.structParent??-1,s.id=this.annotationElementId,delete s.bitmapId,s)}if(t===null)return s;t.stamps||=new Map;const l=this.#l?(s.rect[2]-s.rect[0])*(s.rect[3]-s.rect[1]):null;if(!t.stamps.has(this.#t))t.stamps.set(this.#t,{area:l,serialized:s}),s.bitmap=this.#y(!1);else if(this.#l){const u=t.stamps.get(this.#t);l>u.area&&(u.area=l,u.serialized.bitmap.close(),u.serialized.bitmap=this.#y(!1))}return s}#v(e){const{pageIndex:t,accessibilityData:{altText:s}}=this._initialData,r=e.pageIndex===t,o=(e.accessibilityData?.alt||"")===s;return{isSame:!this.hasEditedComment&&!this._hasBeenMoved&&!this._hasBeenResized&&r&&o,isSameAltText:o}}renderAnnotationElement(e){return this.deleted?(e.hide(),null):(e.updateEdited({rect:this.getPDFRect(),popup:this.comment}),null)}}class Fn{#e;#t=!1;#i=null;#n=null;#a=null;#s=new Map;#r=!1;#o=!1;#c=!1;#l=null;#h=null;#d=null;#f=null;#g=null;#p=-1;#u;static _initialized=!1;static#m=new Map([Ct,oh,dE,dt,jn].map(e=>[e._editorType,e]));constructor({uiManager:e,pageIndex:t,div:s,structTreeLayer:r,accessibilityManager:o,annotationLayer:l,drawLayer:u,textLayer:h,viewport:p,l10n:m}){const b=[...Fn.#m.values()];if(!Fn._initialized){Fn._initialized=!0;for(const v of b)v.initialize(m,e)}e.registerEditorTypes(b),this.#u=e,this.pageIndex=t,this.div=s,this.#e=o,this.#i=l,this.viewport=p,this.#d=h,this.drawLayer=u,this._structTree=r,this.#u.addLayer(this)}get isEmpty(){return this.#s.size===0}get isInvisible(){return this.isEmpty&&this.#u.getMode()===be.NONE}updateToolbar(e){this.#u.updateToolbar(e)}updateMode(e=this.#u.getMode()){switch(this.#A(),e){case be.NONE:this.div.classList.toggle("nonEditing",!0),this.disableTextSelection(),this.togglePointerEvents(!1),this.toggleAnnotationLayerPointerEvents(!0),this.disableClick();return;case be.INK:this.disableTextSelection(),this.togglePointerEvents(!0),this.enableClick();break;case be.HIGHLIGHT:this.enableTextSelection(),this.togglePointerEvents(!1),this.disableClick();break;default:this.disableTextSelection(),this.togglePointerEvents(!0),this.enableClick()}this.toggleAnnotationLayerPointerEvents(!1);const{classList:t}=this.div;if(t.toggle("nonEditing",!1),e===be.POPUP)t.toggle("commentEditing",!0);else{t.toggle("commentEditing",!1);for(const s of Fn.#m.values())t.toggle(`${s._type}Editing`,e===s._editorType)}this.div.hidden=!1}hasTextLayer(e){return e===this.#d?.div}setEditingState(e){this.#u.setEditingState(e)}addCommands(e){this.#u.addCommands(e)}cleanUndoStack(e){this.#u.cleanUndoStack(e)}toggleDrawing(e=!1){this.div.classList.toggle("drawing",!e)}togglePointerEvents(e=!1){this.div.classList.toggle("disabled",!e)}toggleAnnotationLayerPointerEvents(e=!1){this.#i?.div.classList.toggle("disabled",!e)}get#y(){return this.#s.size!==0?this.#s.values():this.#u.getEditors(this.pageIndex)}async enable(){this.#c=!0,this.div.tabIndex=0,this.togglePointerEvents(!0),this.div.classList.toggle("nonEditing",!1),this.#g?.abort(),this.#g=null;const e=new Set;for(const s of this.#y)s.enableEditing(),s.show(!0),s.annotationElementId&&(this.#u.removeChangedExistingAnnotation(s),e.add(s.annotationElementId));const t=this.#i;if(t)for(const s of t.getEditableAnnotations()){if(s.hide(),this.#u.isDeletedAnnotationElement(s.data.id)||e.has(s.data.id))continue;const r=await this.deserialize(s);r&&(this.addOrRebuild(r),r.enableEditing())}this.#c=!1,this.#u._eventBus.dispatch("editorsrendered",{source:this,pageNumber:this.pageIndex+1})}disable(){if(this.#o=!0,this.div.tabIndex=-1,this.togglePointerEvents(!1),this.div.classList.toggle("nonEditing",!0),this.#d&&!this.#g){this.#g=new AbortController;const s=this.#u.combinedSignal(this.#g);this.#d.div.addEventListener("pointerdown",r=>{const{clientX:l,clientY:u,timeStamp:h}=r,p=this.#p;if(h-p>500){this.#p=h;return}this.#p=-1;const{classList:m}=this.div;m.toggle("getElements",!0);const b=document.elementsFromPoint(l,u);if(m.toggle("getElements",!1),!this.div.contains(b[0]))return;let v;const A=new RegExp(`^${Da}[0-9]+$`);for(const C of b)if(A.test(C.id)){v=C.id;break}if(!v)return;const x=this.#s.get(v);x?.annotationElementId===null&&(r.stopPropagation(),r.preventDefault(),x.dblclick(r))},{signal:s,capture:!0})}const e=this.#i;if(e){const s=new Map,r=new Map;for(const l of this.#y){if(l.disableEditing(),!l.annotationElementId){l.updateFakeAnnotationElement(e);continue}if(l.serialize()!==null){s.set(l.annotationElementId,l);continue}else r.set(l.annotationElementId,l);this.getEditableAnnotation(l.annotationElementId)?.show(),l.remove()}const o=e.getEditableAnnotations();for(const l of o){const{id:u}=l.data;if(this.#u.isDeletedAnnotationElement(u)){l.updateEdited({deleted:!0});continue}let h=r.get(u);if(h){h.resetAnnotationElement(l),h.show(!1),l.show();continue}h=s.get(u),h&&(this.#u.addChangedExistingAnnotation(h),h.renderAnnotationElement(l)&&h.show(!1)),l.show()}}this.#A(),this.isEmpty&&(this.div.hidden=!0);const{classList:t}=this.div;for(const s of Fn.#m.values())t.remove(`${s._type}Editing`);this.disableTextSelection(),this.toggleAnnotationLayerPointerEvents(!0),this.#o=!1}getEditableAnnotation(e){return this.#i?.getEditableAnnotation(e)||null}setActiveEditor(e){this.#u.getActive()!==e&&this.#u.setActiveEditor(e)}enableTextSelection(){if(this.div.tabIndex=-1,this.#d?.div&&!this.#f){this.#f=new AbortController;const e=this.#u.combinedSignal(this.#f);this.#d.div.addEventListener("pointerdown",this.#v.bind(this),{signal:e}),this.#d.div.classList.add("highlighting")}}disableTextSelection(){this.div.tabIndex=0,this.#d?.div&&this.#f&&(this.#f.abort(),this.#f=null,this.#d.div.classList.remove("highlighting"))}#v(e){this.#u.unselectAll();const{target:t}=e;if(t===this.#d.div||(t.getAttribute("role")==="img"||t.classList.contains("endOfContent"))&&this.#d.div.contains(t)){const{isMac:s}=wt.platform;if(e.button!==0||e.ctrlKey&&s)return;this.#u.showAllEditors("highlight",!0,!0),this.#d.div.classList.add("free"),this.toggleDrawing(),dt.startHighlighting(this,this.#u.direction==="ltr",{target:this.#d.div,x:e.x,y:e.y}),this.#d.div.addEventListener("pointerup",()=>{this.#d.div.classList.remove("free"),this.toggleDrawing(!0)},{once:!0,signal:this.#u._signal}),e.preventDefault()}}enableClick(){if(this.#n)return;this.#n=new AbortController;const e=this.#u.combinedSignal(this.#n);this.div.addEventListener("pointerdown",this.pointerdown.bind(this),{signal:e});const t=this.pointerup.bind(this);this.div.addEventListener("pointerup",t,{signal:e}),this.div.addEventListener("pointercancel",t,{signal:e})}disableClick(){this.#n?.abort(),this.#n=null}attach(e){this.#s.set(e.id,e);const{annotationElementId:t}=e;t&&this.#u.isDeletedAnnotationElement(t)&&this.#u.removeDeletedAnnotationElement(e)}detach(e){this.#s.delete(e.id),this.#e?.removePointerInTextLayer(e.contentDiv),!this.#o&&e.annotationElementId&&this.#u.addDeletedAnnotationElement(e)}remove(e){this.detach(e),this.#u.removeEditor(e),e.div.remove(),e.isAttachedToDOM=!1}changeParent(e){e.parent!==this&&(e.parent&&e.annotationElementId&&(this.#u.addDeletedAnnotationElement(e.annotationElementId),ue.deleteAnnotationElement(e),e.annotationElementId=null),this.attach(e),e.parent?.detach(e),e.setParent(this),e.div&&e.isAttachedToDOM&&(e.div.remove(),this.div.append(e.div)))}add(e){if(!(e.parent===this&&e.isAttachedToDOM)){if(this.changeParent(e),this.#u.addEditor(e),this.attach(e),!e.isAttachedToDOM){const t=e.render();this.div.append(t),e.isAttachedToDOM=!0}e.fixAndSetPosition(),e.onceAdded(!this.#c),this.#u.addToAnnotationStorage(e),e._reportTelemetry(e.telemetryInitialData)}}moveEditorInDOM(e){if(!e.isAttachedToDOM)return;const{activeElement:t}=document;e.div.contains(t)&&!this.#a&&(e._focusEventsAllowed=!1,this.#a=setTimeout(()=>{this.#a=null,e.div.contains(document.activeElement)?e._focusEventsAllowed=!0:(e.div.addEventListener("focusin",()=>{e._focusEventsAllowed=!0},{once:!0,signal:this.#u._signal}),t.focus())},0)),e._structTreeParentId=this.#e?.moveElementInDOM(this.div,e.div,e.contentDiv,!0)}addOrRebuild(e){e.needsToBeRebuilt()?(e.parent||=this,e.rebuild(),e.show()):this.add(e)}addUndoableEditor(e){const t=()=>e._uiManager.rebuild(e),s=()=>{e.remove()};this.addCommands({cmd:t,undo:s,mustExec:!1})}getEditorByUID(e){for(const t of this.#s.values())if(t.uid===e)return t;return null}getNextId(){return this.#u.getId()}get#b(){return Fn.#m.get(this.#u.getMode())}combinedSignal(e){return this.#u.combinedSignal(e)}#E(e){const t=this.#b;return t?new t.prototype.constructor(e):null}canCreateNewEmptyEditor(){return this.#b?.canCreateNewEmptyEditor()}async pasteEditor(e,t){this.updateToolbar(e),await this.#u.updateMode(e.mode);const{offsetX:s,offsetY:r}=this.#x(),o=this.getNextId(),l=this.#E({parent:this,id:o,x:s,y:r,uiManager:this.#u,isCentered:!0,...t});l&&this.add(l)}async deserialize(e){return await Fn.#m.get(e.annotationType??e.annotationEditorType)?.deserialize(e,this,this.#u)||null}createAndAddNewEditor(e,t,s={}){const r=this.getNextId(),o=this.#E({parent:this,id:r,x:e.offsetX,y:e.offsetY,uiManager:this.#u,isCentered:t,...s});return o&&this.add(o),o}get boundingClientRect(){return this.div.getBoundingClientRect()}#x(){const{x:e,y:t,width:s,height:r}=this.boundingClientRect,o=Math.max(0,e),l=Math.max(0,t),u=Math.min(window.innerWidth,e+s),h=Math.min(window.innerHeight,t+r),p=(o+u)/2-e,m=(l+h)/2-t,[b,v]=this.viewport.rotation%180===0?[p,m]:[m,p];return{offsetX:b,offsetY:v}}addNewEditor(e={}){this.createAndAddNewEditor(this.#x(),!0,e)}setSelected(e){this.#u.setSelected(e)}toggleSelected(e){this.#u.toggleSelected(e)}unselect(e){this.#u.unselect(e)}pointerup(e){const{isMac:t}=wt.platform;if(e.button!==0||e.ctrlKey&&t||e.target!==this.div||!this.#r||(this.#r=!1,this.#b?.isDrawer&&this.#b.supportMultipleDrawings))return;if(!this.#t){this.#t=!0;return}const s=this.#u.getMode();if(s===be.STAMP||s===be.SIGNATURE){this.#u.unselectAll();return}this.createAndAddNewEditor(e,!1)}pointerdown(e){if(this.#u.getMode()===be.HIGHLIGHT&&this.enableTextSelection(),this.#r){this.#r=!1;return}const{isMac:t}=wt.platform;if(e.button!==0||e.ctrlKey&&t||e.target!==this.div)return;if(this.#r=!0,this.#b?.isDrawer){this.startDrawingSession(e);return}const s=this.#u.getActive();this.#t=!s||s.isEmpty()}startDrawingSession(e){if(this.div.focus({preventScroll:!0}),this.#l){this.#b.startDrawing(this,this.#u,!1,e);return}this.#u.setCurrentDrawingSession(this),this.#l=new AbortController;const t=this.#u.combinedSignal(this.#l);this.div.addEventListener("blur",({relatedTarget:s})=>{s&&!this.div.contains(s)&&(this.#h=null,this.commitOrRemove())},{signal:t}),this.#b.startDrawing(this,this.#u,!1,e)}pause(e){if(e){const{activeElement:t}=document;this.div.contains(t)&&(this.#h=t);return}this.#h&&setTimeout(()=>{this.#h?.focus(),this.#h=null},0)}endDrawingSession(e=!1){return this.#l?(this.#u.setCurrentDrawingSession(null),this.#l.abort(),this.#l=null,this.#h=null,this.#b.endDrawing(e)):null}findNewParent(e,t,s){const r=this.#u.findParent(t,s);return r===null||r===this?!1:(r.changeParent(e),!0)}commitOrRemove(){return this.#l?(this.endDrawingSession(),!0):!1}onScaleChanging(){this.#l&&this.#b.onScaleChangingWhenDrawing(this)}destroy(){this.commitOrRemove(),this.#u.getActive()?.parent===this&&(this.#u.commitOrRemove(),this.#u.setActiveEditor(null)),this.#a&&(clearTimeout(this.#a),this.#a=null);for(const e of this.#s.values())this.#e?.removePointerInTextLayer(e.contentDiv),e.setParent(null),e.isAttachedToDOM=!1,e.div.remove();this.div=null,this.#s.clear(),this.#u.removeLayer(this)}#A(){for(const e of this.#s.values())e.isEmpty()&&e.remove()}render({viewport:e}){this.viewport=e,Ii(this.div,e);for(const t of this.#u.getEditors(this.pageIndex))this.add(t),t.rebuild();this.updateMode()}update({viewport:e}){this.#u.commitOrRemove(),this.#A();const t=this.viewport.rotation,s=e.rotation;if(this.viewport=e,Ii(this.div,{rotation:s}),t!==s)for(const r of this.#s.values())r.rotate(s)}get pageDimensions(){const{pageWidth:e,pageHeight:t}=this.viewport.rawDims;return[e,t]}get scale(){return this.#u.viewParameters.realScale}}class xt{#e=null;#t=new Map;#i=new Map;static#n=0;constructor({pageIndex:e}){this.pageIndex=e}setParent(e){if(!this.#e){this.#e=e;return}if(this.#e!==e){if(this.#t.size>0)for(const t of this.#t.values())t.remove(),e.append(t);this.#e=e}}static get _svgFactory(){return Se(this,"_svgFactory",new Oa)}static#a(e,[t,s,r,o]){const{style:l}=e;l.top=`${100*s}%`,l.left=`${100*t}%`,l.width=`${100*r}%`,l.height=`${100*o}%`}#s(){const e=xt._svgFactory.create(1,1,!0);return this.#e.append(e),e.setAttribute("aria-hidden",!0),e}#r(e,t){const s=xt._svgFactory.createElement("clipPath");e.append(s);const r=`clip_${t}`;s.setAttribute("id",r),s.setAttribute("clipPathUnits","objectBoundingBox");const o=xt._svgFactory.createElement("use");return s.append(o),o.setAttribute("href",`#${t}`),o.classList.add("clip"),r}#o(e,t){for(const[s,r]of Object.entries(t))r===null?e.removeAttribute(s):e.setAttribute(s,r)}draw(e,t=!1,s=!1){const r=xt.#n++,o=this.#s(),l=xt._svgFactory.createElement("defs");o.append(l);const u=xt._svgFactory.createElement("path");l.append(u);const h=`path_p${this.pageIndex}_${r}`;u.setAttribute("id",h),u.setAttribute("vector-effect","non-scaling-stroke"),t&&this.#i.set(r,u);const p=s?this.#r(l,h):null,m=xt._svgFactory.createElement("use");return o.append(m),m.setAttribute("href",`#${h}`),this.updateProperties(o,e),this.#t.set(r,o),{id:r,clipPathId:`url(#${p})`}}drawOutline(e,t){const s=xt.#n++,r=this.#s(),o=xt._svgFactory.createElement("defs");r.append(o);const l=xt._svgFactory.createElement("path");o.append(l);const u=`path_p${this.pageIndex}_${s}`;l.setAttribute("id",u),l.setAttribute("vector-effect","non-scaling-stroke");let h;if(t){const b=xt._svgFactory.createElement("mask");o.append(b),h=`mask_p${this.pageIndex}_${s}`,b.setAttribute("id",h),b.setAttribute("maskUnits","objectBoundingBox");const v=xt._svgFactory.createElement("rect");b.append(v),v.setAttribute("width","1"),v.setAttribute("height","1"),v.setAttribute("fill","white");const A=xt._svgFactory.createElement("use");b.append(A),A.setAttribute("href",`#${u}`),A.setAttribute("stroke","none"),A.setAttribute("fill","black"),A.setAttribute("fill-rule","nonzero"),A.classList.add("mask")}const p=xt._svgFactory.createElement("use");r.append(p),p.setAttribute("href",`#${u}`),h&&p.setAttribute("mask",`url(#${h})`);const m=p.cloneNode();return r.append(m),p.classList.add("mainOutline"),m.classList.add("secondaryOutline"),this.updateProperties(r,e),this.#t.set(s,r),s}finalizeDraw(e,t){this.#i.delete(e),this.updateProperties(e,t)}updateProperties(e,t){if(!t)return;const{root:s,bbox:r,rootClass:o,path:l}=t,u=typeof e=="number"?this.#t.get(e):e;if(u){if(s&&this.#o(u,s),r&&xt.#a(u,r),o){const{classList:h}=u;for(const[p,m]of Object.entries(o))h.toggle(p,m)}if(l){const p=u.firstChild.firstChild;this.#o(p,l)}}}updateParent(e,t){if(t===this)return;const s=this.#t.get(e);s&&(t.#e.append(s),this.#t.delete(e),t.#t.set(e,s))}remove(e){this.#i.delete(e),this.#e!==null&&(this.#t.get(e).remove(),this.#t.delete(e))}destroy(){this.#e=null;for(const e of this.#t.values())e.remove();this.#t.clear(),this.#i.clear()}}globalThis._pdfjsTestingUtils={HighlightOutliner:Md};globalThis.pdfjsLib={AbortException:li,AnnotationEditorLayer:Fn,AnnotationEditorParamsType:_e,AnnotationEditorType:be,AnnotationEditorUIManager:ci,AnnotationLayer:ah,AnnotationMode:Un,AnnotationType:ut,applyOpacity:Dy,build:Ky,ColorPicker:an,createValidAbsoluteUrl:Gd,CSSConstants:Ry,DOMSVGFactory:Oa,DrawLayer:xt,FeatureTest:wt,fetchData:yr,findContrastColor:My,getDocument:th,getFilenameFromUrl:Ey,getPdfFilenameFromUrl:Ty,getRGB:br,getUuid:Vd,getXfaPageViewport:_y,GlobalWorkerOptions:Ni,ImageKind:Ta,InvalidPDFException:Tl,isDataScheme:Ha,isPdfFile:Il,isValidExplicitDest:Oy,MathClamp:Ot,noContextMenu:ln,normalizeUnicode:xy,OPS:dr,OutputScale:Tn,PasswordResponses:Sy,PDFDataRangeTransport:ih,PDFDateString:_l,PDFWorker:hr,PermissionFlag:Ay,PixelsPerInch:cs,RenderingCancelledException:Nl,renderRichText:Wd,ResponseException:Ma,setLayerDimensions:Ii,shadow:Se,SignatureExtractor:ss,stopEvent:tt,SupportedImageMimeTypes:Rl,TextLayer:La,TouchManager:Ga,updateUrlHash:qd,Util:ie,VerbosityLevel:Ba,version:$y,XfaLayer:Xd};const hE=Object.freeze(Object.defineProperty({__proto__:null,AbortException:li,AnnotationEditorLayer:Fn,AnnotationEditorParamsType:_e,AnnotationEditorType:be,AnnotationEditorUIManager:ci,AnnotationLayer:ah,AnnotationMode:Un,AnnotationType:ut,CSSConstants:Ry,ColorPicker:an,DOMSVGFactory:Oa,DrawLayer:xt,FeatureTest:wt,GlobalWorkerOptions:Ni,ImageKind:Ta,InvalidPDFException:Tl,MathClamp:Ot,OPS:dr,OutputScale:Tn,PDFDataRangeTransport:ih,PDFDateString:_l,PDFWorker:hr,PasswordResponses:Sy,PermissionFlag:Ay,PixelsPerInch:cs,RenderingCancelledException:Nl,ResponseException:Ma,SignatureExtractor:ss,SupportedImageMimeTypes:Rl,TextLayer:La,TouchManager:Ga,Util:ie,VerbosityLevel:Ba,XfaLayer:Xd,applyOpacity:Dy,build:Ky,createValidAbsoluteUrl:Gd,fetchData:yr,findContrastColor:My,getDocument:th,getFilenameFromUrl:Ey,getPdfFilenameFromUrl:Ty,getRGB:br,getUuid:Vd,getXfaPageViewport:_y,isDataScheme:Ha,isPdfFile:Il,isValidExplicitDest:Oy,noContextMenu:ln,normalizeUnicode:xy,renderRichText:Wd,setLayerDimensions:Ii,shadow:Se,stopEvent:tt,updateUrlHash:qd,version:$y},Symbol.toStringTag,{value:"Module"}));function rb(d){var e,t,s="";if(typeof d=="string"||typeof d=="number")s+=d;else if(typeof d=="object")if(Array.isArray(d)){var r=d.length;for(e=0;e<r;e++)d[e]&&(t=rb(d[e]))&&(s&&(s+=" "),s+=t)}else for(t in d)d[t]&&(s&&(s+=" "),s+=t);return s}function Fl(){for(var d,e,t=0,s="",r=arguments.length;t<r;t++)(d=arguments[t])&&(e=rb(d))&&(s&&(s+=" "),s+=e);return s}var Xg=Object.prototype.hasOwnProperty;function Wg(d,e,t){for(t of d.keys())if(lr(t,e))return t}function lr(d,e){var t,s,r;if(d===e)return!0;if(d&&e&&(t=d.constructor)===e.constructor){if(t===Date)return d.getTime()===e.getTime();if(t===RegExp)return d.toString()===e.toString();if(t===Array){if((s=d.length)===e.length)for(;s--&&lr(d[s],e[s]););return s===-1}if(t===Set){if(d.size!==e.size)return!1;for(s of d)if(r=s,r&&typeof r=="object"&&(r=Wg(e,r),!r)||!e.has(r))return!1;return!0}if(t===Map){if(d.size!==e.size)return!1;for(s of d)if(r=s[0],r&&typeof r=="object"&&(r=Wg(e,r),!r)||!lr(s[1],e.get(r)))return!1;return!0}if(t===ArrayBuffer)d=new Uint8Array(d),e=new Uint8Array(e);else if(t===DataView){if((s=d.byteLength)===e.byteLength)for(;s--&&d.getInt8(s)===e.getInt8(s););return s===-1}if(ArrayBuffer.isView(d)){if((s=d.byteLength)===e.byteLength)for(;s--&&d[s]===e[s];);return s===-1}if(!t||typeof d=="object"){s=0;for(t in d)if(Xg.call(d,t)&&++s&&!Xg.call(e,t)||!(t in e)||!lr(d[t],e[t]))return!1;return Object.keys(e).length===s}}return d!==d&&e!==e}function Ya(d){let e=!1;return{promise:new Promise((s,r)=>{d.then(o=>!e&&s(o)).catch(o=>!e&&r(o))}),cancel(){e=!0}}}const fE=["onCopy","onCut","onPaste"],pE=["onCompositionEnd","onCompositionStart","onCompositionUpdate"],mE=["onFocus","onBlur"],gE=["onInput","onInvalid","onReset","onSubmit"],yE=["onLoad","onError"],bE=["onKeyDown","onKeyPress","onKeyUp"],vE=["onAbort","onCanPlay","onCanPlayThrough","onDurationChange","onEmptied","onEncrypted","onEnded","onError","onLoadedData","onLoadedMetadata","onLoadStart","onPause","onPlay","onPlaying","onProgress","onRateChange","onSeeked","onSeeking","onStalled","onSuspend","onTimeUpdate","onVolumeChange","onWaiting"],AE=["onClick","onContextMenu","onDoubleClick","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp"],SE=["onDrag","onDragEnd","onDragEnter","onDragExit","onDragLeave","onDragOver","onDragStart","onDrop"],CE=["onSelect"],xE=["onTouchCancel","onTouchEnd","onTouchMove","onTouchStart"],wE=["onPointerDown","onPointerMove","onPointerUp","onPointerCancel","onGotPointerCapture","onLostPointerCapture","onPointerEnter","onPointerLeave","onPointerOver","onPointerOut"],EE=["onScroll"],TE=["onWheel"],_E=["onAnimationStart","onAnimationEnd","onAnimationIteration"],RE=["onTransitionEnd"],DE=["onToggle"],ME=["onChange"],kE=[...fE,...pE,...mE,...gE,...yE,...bE,...vE,...AE,...SE,...CE,...xE,...wE,...EE,...TE,..._E,...RE,...ME,...DE];function ab(d,e){const t={};for(const s of kE){const r=d[s];r&&(e?t[s]=(o=>r(o,e(s))):t[s]=r)}return t}var LE="Invariant failed";function Ge(d,e){if(!d)throw new Error(LE)}var Ad,$g;function PE(){if($g)return Ad;$g=1;var d=function(){};return Ad=d,Ad}var OE=PE();const Nt=ny(OE),ob=P.createContext(null),NE="noopener noreferrer nofollow";class IE{constructor(){this.externalLinkEnabled=!0,this.externalLinkRel=void 0,this.externalLinkTarget=void 0,this.isInPresentationMode=!1,this.pdfDocument=void 0,this.pdfViewer=void 0}setDocument(e){this.pdfDocument=e}setViewer(e){this.pdfViewer=e}setExternalLinkRel(e){this.externalLinkRel=e}setExternalLinkTarget(e){this.externalLinkTarget=e}setHash(){}setHistory(){}get pagesCount(){return this.pdfDocument?this.pdfDocument.numPages:0}get page(){return Ge(this.pdfViewer),this.pdfViewer.currentPageNumber||0}set page(e){Ge(this.pdfViewer),this.pdfViewer.currentPageNumber=e}get rotation(){return 0}set rotation(e){}addLinkAttributes(e,t,s){e.href=t,e.rel=this.externalLinkRel||NE,e.target=s?"_blank":this.externalLinkTarget||""}goToDestination(e){return new Promise(t=>{Ge(this.pdfDocument),Ge(e),typeof e=="string"?this.pdfDocument.getDestination(e).then(t):Array.isArray(e)?t(e):e.then(t)}).then(t=>{Ge(Array.isArray(t));const s=t[0];new Promise(r=>{Ge(this.pdfDocument),s instanceof Object?this.pdfDocument.getPageIndex(s).then(o=>{r(o)}).catch(()=>{Ge(!1)}):typeof s=="number"?r(s):Ge(!1)}).then(r=>{const o=r+1;Ge(this.pdfViewer),Ge(o>=1&&o<=this.pagesCount),this.pdfViewer.scrollPageIntoView({dest:t,pageIndex:r,pageNumber:o})})})}goToPage(e){const t=e-1;Ge(this.pdfViewer),Ge(e>=1&&e<=this.pagesCount),this.pdfViewer.scrollPageIntoView({pageIndex:t,pageNumber:e})}goToXY(){}cachePageRef(){}getDestinationHash(){return"#"}getAnchorUrl(){return"#"}executeNamedAction(){}executeSetOCGState(){}isPageVisible(){return!0}isPageCached(){return!0}navigateTo(e){this.goToDestination(e)}}function cr({children:d,type:e}){return g.jsx("div",{className:`react-pdf__message react-pdf__message--${e}`,children:d})}const Kg={NEED_PASSWORD:1,INCORRECT_PASSWORD:2};function jE(d,e){switch(e.type){case"RESOLVE":return{value:e.value,error:void 0};case"REJECT":return{value:!1,error:e.error};case"RESET":return{value:void 0,error:void 0};default:return d}}function fr(){return P.useReducer(jE,{value:void 0,error:void 0})}const Ul=typeof window<"u",lb=Ul&&window.location.protocol==="file:";function BE(d){return typeof d<"u"}function is(d){return BE(d)&&d!==null}function FE(d){return typeof d=="string"}function UE(d){return d instanceof ArrayBuffer}function HE(d){return Ge(Ul),d instanceof Blob}function Pd(d){return FE(d)&&/^data:/.test(d)}function Qg(d){Ge(Pd(d));const[e="",t=""]=d.split(",");return e.split(";").indexOf("base64")!==-1?atob(t):unescape(t)}function zE(){return Ul&&window.devicePixelRatio||1}const cb="On Chromium based browsers, you can use --allow-file-access-from-files flag for debugging purposes.";function Jg(){Nt(!lb,`Loading PDF as base64 strings/URLs may not work on protocols other than HTTP/HTTPS. ${cb}`)}function GE(){Nt(!lb,`Loading PDF.js worker may not work on protocols other than HTTP/HTTPS. ${cb}`)}function ds(d){d?.cancel&&d.cancel()}function Od(d,e){return Object.defineProperty(d,"width",{get(){return this.view[2]*e},configurable:!0}),Object.defineProperty(d,"height",{get(){return this.view[3]*e},configurable:!0}),Object.defineProperty(d,"originalWidth",{get(){return this.view[2]},configurable:!0}),Object.defineProperty(d,"originalHeight",{get(){return this.view[3]},configurable:!0}),d}function qE(d){return d.name==="RenderingCancelledException"}function VE(d){return new Promise((e,t)=>{const s=new FileReader;s.onload=()=>{if(!s.result)return t(new Error("Error while reading a file."));e(s.result)},s.onerror=r=>{if(!r.target)return t(new Error("Error while reading a file."));const{error:o}=r.target;if(!o)return t(new Error("Error while reading a file."));switch(o.code){case o.NOT_FOUND_ERR:return t(new Error("Error while reading a file: File not found."));case o.SECURITY_ERR:return t(new Error("Error while reading a file: Security error."));case o.ABORT_ERR:return t(new Error("Error while reading a file: Aborted."));default:return t(new Error("Error while reading a file."))}},s.readAsArrayBuffer(d)})}const{PDFDataRangeTransport:YE}=hE,XE=(d,e)=>{switch(e){case Kg.NEED_PASSWORD:{const t=prompt("Enter the password to open this PDF file.");d(t);break}case Kg.INCORRECT_PASSWORD:{const t=prompt("Invalid password. Please try again.");d(t);break}}};function Zg(d){return typeof d=="object"&&d!==null&&("data"in d||"range"in d||"url"in d)}const WE=P.forwardRef(function({children:e,className:t,error:s="Failed to load PDF file.",externalLinkRel:r,externalLinkTarget:o,file:l,inputRef:u,imageResourcesPath:h,loading:p="Loading PDF…",noData:m="No PDF file specified.",onItemClick:b,onLoadError:v,onLoadProgress:A,onLoadSuccess:x,onPassword:C=XE,onSourceError:T,onSourceSuccess:w,options:_,renderMode:R,rotate:O,scale:k,...j},F){const[q,V]=fr(),{value:Q,error:J}=q,[le,de]=fr(),{value:ae,error:ce}=le,N=P.useRef(new IE),G=P.useRef([]),ee=P.useRef(void 0),he=P.useRef(void 0);l&&l!==ee.current&&Zg(l)&&(Nt(!lr(l,ee.current),`File prop passed to <Document /> changed, but it's equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "file" prop.`),ee.current=l),_&&_!==he.current&&(Nt(!lr(_,he.current),`Options prop passed to <Document /> changed, but it's equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "options" prop.`),he.current=_);const M=P.useRef({scrollPageIntoView:De=>{const{dest:Ie,pageNumber:ot,pageIndex:ht=ot-1}=De;if(b){b({dest:Ie,pageIndex:ht,pageNumber:ot});return}const Et=G.current[ht];if(Et){Et.scrollIntoView();return}Nt(!1,`An internal link leading to page ${ot} was clicked, but neither <Document> was provided with onItemClick nor it was able to find the page within itself. Either provide onItemClick to <Document> and handle navigating by yourself or ensure that all pages are rendered within <Document>.`)}});P.useImperativeHandle(F,()=>({linkService:N,pages:G,viewer:M}),[]);function W(){w&&w()}function Z(){J&&(Nt(!1,J.toString()),T&&T(J))}function K(){V({type:"RESET"})}P.useEffect(K,[l,V]);const te=P.useCallback(async()=>{if(!l)return null;if(typeof l=="string")return Pd(l)?{data:Qg(l)}:(Jg(),{url:l});if(l instanceof YE)return{range:l};if(UE(l))return{data:l};if(Ul&&HE(l))return{data:await VE(l)};if(Ge(typeof l=="object"),Ge(Zg(l)),"url"in l&&typeof l.url=="string"){if(Pd(l.url)){const{url:De,...Ie}=l;return{data:Qg(De),...Ie}}Jg()}return l},[l]);P.useEffect(()=>{const De=Ya(te());return De.promise.then(Ie=>{V({type:"RESOLVE",value:Ie})}).catch(Ie=>{V({type:"REJECT",error:Ie})}),()=>{ds(De)}},[te,V]),P.useEffect(()=>{if(!(typeof Q>"u")){if(Q===!1){Z();return}W()}},[Q]);function ye(){ae&&(x&&x(ae),G.current=new Array(ae.numPages),N.current.setDocument(ae))}function re(){ce&&(Nt(!1,ce.toString()),v&&v(ce))}P.useEffect(function(){de({type:"RESET"})},[de,Q]),P.useEffect(function(){if(!Q)return;const Ie=_?{...Q,..._}:Q,ot=th(Ie);A&&(ot.onProgress=A),C&&(ot.onPassword=C);const ht=ot,Et=ht.promise.then(ji=>{de({type:"RESOLVE",value:ji})}).catch(ji=>{ht.destroyed||de({type:"REJECT",error:ji})});return()=>{Et.finally(()=>ht.destroy())}},[_,de,Q]),P.useEffect(()=>{if(!(typeof ae>"u")){if(ae===!1){re();return}ye()}},[ae]),P.useEffect(function(){N.current.setViewer(M.current),N.current.setExternalLinkRel(r),N.current.setExternalLinkTarget(o)},[r,o]);const Ce=P.useCallback((De,Ie)=>{G.current[De]=Ie},[]),Re=P.useCallback(De=>{delete G.current[De]},[]),We=P.useMemo(()=>({imageResourcesPath:h,linkService:N.current,onItemClick:b,pdf:ae,registerPage:Ce,renderMode:R,rotate:O,scale:k,unregisterPage:Re}),[h,b,ae,Ce,R,O,k,Re]),He=P.useMemo(()=>ab(j,()=>ae),[j,ae]);function Ut(){function De(ot){return!!ot?.pdf}if(!De(We))throw new Error("pdf is undefined");const Ie=typeof e=="function"?e(We):e;return g.jsx(ob.Provider,{value:We,children:Ie})}function Kt(){return l?ae==null?g.jsx(cr,{type:"loading",children:typeof p=="function"?p():p}):ae===!1?g.jsx(cr,{type:"error",children:typeof s=="function"?s():s}):Ut():g.jsx(cr,{type:"no-data",children:typeof m=="function"?m():m})}return g.jsx("div",{className:Fl("react-pdf__Document",t),ref:u,...He,children:Kt()})});function ub(){return P.useContext(ob)}function db(){for(var d=[],e=0;e<arguments.length;e++)d[e]=arguments[e];var t=d.filter(Boolean);if(t.length<=1){var s=t[0];return s||null}return function(o){for(var l=0,u=t;l<u.length;l++){var h=u[l];typeof h=="function"?h(o):h&&(h.current=o)}}}const hb=P.createContext(null);function Hl(){return P.useContext(hb)}function $E(){const d=ub(),e=Hl();Ge(e);const t={...d,...e},{imageResourcesPath:s,linkService:r,onGetAnnotationsError:o,onGetAnnotationsSuccess:l,onRenderAnnotationLayerError:u,onRenderAnnotationLayerSuccess:h,page:p,pdf:m,renderForms:b,rotate:v,scale:A=1}=t;Ge(m),Ge(p),Ge(r);const[x,C]=fr(),{value:T,error:w}=x,_=P.useRef(null);Nt(Number.parseInt(window.getComputedStyle(document.body).getPropertyValue("--react-pdf-annotation-layer"),10)===1,"AnnotationLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-annotations");function R(){T&&l&&l(T)}function O(){w&&(Nt(!1,w.toString()),o&&o(w))}P.useEffect(function(){C({type:"RESET"})},[C,p]),P.useEffect(function(){if(!p)return;const V=Ya(p.getAnnotations()),Q=V;return V.promise.then(J=>{C({type:"RESOLVE",value:J})}).catch(J=>{C({type:"REJECT",error:J})}),()=>{ds(Q)}},[C,p]),P.useEffect(()=>{if(T!==void 0){if(T===!1){O();return}R()}},[T]);function k(){h&&h()}function j(q){Nt(!1,`${q}`),u&&u(q)}const F=P.useMemo(()=>p.getViewport({scale:A,rotation:v}),[p,v,A]);return P.useEffect(function(){if(!m||!p||!r||!T)return;const{current:V}=_;if(!V)return;const Q=F.clone({dontFlip:!0}),J={accessibilityManager:null,annotationCanvasMap:null,annotationEditorUIManager:null,annotationStorage:m.annotationStorage,commentManager:null,div:V,l10n:null,linkService:r,page:p,structTreeLayer:null,viewport:Q},le={annotations:T,annotationStorage:m.annotationStorage,div:V,imageResourcesPath:s,linkService:r,page:p,renderForms:b,viewport:Q};V.innerHTML="";try{new ah(J).render(le),k()}catch(de){j(de)}return()=>{}},[T,s,r,p,m,b,F]),g.jsx("div",{className:Fl("react-pdf__Page__annotations","annotationLayer"),ref:_})}const fb={Document:null,DocumentFragment:null,Part:"group",Sect:"group",Div:"group",Aside:"note",NonStruct:"none",P:null,H:"heading",Title:null,FENote:"note",Sub:"group",Lbl:null,Span:null,Em:null,Strong:null,Link:"link",Annot:"note",Form:"form",Ruby:null,RB:null,RT:null,RP:null,Warichu:null,WT:null,WP:null,L:"list",LI:"listitem",LBody:null,Table:"table",TR:"row",TH:"columnheader",TD:"cell",THead:"columnheader",TBody:null,TFoot:null,Caption:null,Figure:"figure",Formula:null,Artifact:null},KE=/^H(\d+)$/;function QE(d){return d in fb}function zl(d){return"children"in d}function pb(d){return zl(d)?d.children.length===1&&0 in d.children&&"id"in d.children[0]:!1}function JE(d){const e={};if(zl(d)){const{role:t}=d,s=t.match(KE);if(s)e.role="heading",e["aria-level"]=Number(s[1]);else if(QE(t)){const r=fb[t];r&&(e.role=r)}}return e}function mb(d){const e={};if(zl(d)){if(d.alt!==void 0&&(e["aria-label"]=d.alt),d.lang!==void 0&&(e.lang=d.lang),pb(d)){const[t]=d.children;if(t){const s=mb(t);return{...e,...s}}}}else"id"in d&&(e["aria-owns"]=d.id);return e}function ZE(d){return d?{...JE(d),...mb(d)}:null}function gb({className:d,node:e}){const t=P.useMemo(()=>ZE(e),[e]),s=P.useMemo(()=>!zl(e)||pb(e)?null:e.children.map((r,o)=>g.jsx(gb,{node:r},o)),[e]);return g.jsx("span",{className:d,...t,children:s})}function eT(){const d=Hl();Ge(d);const{onGetStructTreeError:e,onGetStructTreeSuccess:t}=d,[s,r]=fr(),{value:o,error:l}=s,{customTextRenderer:u,page:h}=d;function p(){o&&t&&t(o)}function m(){l&&(Nt(!1,l.toString()),e&&e(l))}return P.useEffect(function(){r({type:"RESET"})},[r,h]),P.useEffect(function(){if(u||!h)return;const v=Ya(h.getStructTree()),A=v;return v.promise.then(x=>{r({type:"RESOLVE",value:x})}).catch(x=>{r({type:"REJECT",error:x})}),()=>ds(A)},[u,h,r]),P.useEffect(()=>{if(o!==void 0){if(o===!1){m();return}p()}},[o]),o?g.jsx(gb,{className:"react-pdf__Page__structTree structTree",node:o}):null}const ey=Un;function tT(d){const e=Hl();Ge(e);const t={...e,...d},{_className:s,canvasBackground:r,devicePixelRatio:o=zE(),onRenderError:l,onRenderSuccess:u,page:h,renderForms:p,renderTextLayer:m,rotate:b,scale:v}=t,{canvasRef:A}=d;Ge(h);const x=P.useRef(null);function C(){h&&u&&u(Od(h,v))}function T(O){qE(O)||(Nt(!1,O.toString()),l&&l(O))}const w=P.useMemo(()=>h.getViewport({scale:v*o,rotation:b}),[o,h,b,v]),_=P.useMemo(()=>h.getViewport({scale:v,rotation:b}),[h,b,v]);P.useEffect(function(){if(!h)return;h.cleanup();const{current:k}=x;if(!k)return;k.width=w.width,k.height=w.height,k.style.width=`${Math.floor(_.width)}px`,k.style.height=`${Math.floor(_.height)}px`,k.style.visibility="hidden";const j={annotationMode:p?ey.ENABLE_FORMS:ey.ENABLE,canvas:k,canvasContext:k.getContext("2d",{alpha:!1}),viewport:w};r&&(j.background=r);const F=h.render(j),q=F;return F.promise.then(()=>{k.style.visibility="",C()}).catch(T),()=>ds(q)},[r,h,p,w,_]);const R=P.useCallback(()=>{const{current:O}=x;O&&(O.width=0,O.height=0)},[]);return P.useEffect(()=>R,[R]),g.jsx("canvas",{className:`${s}__canvas`,dir:"ltr",ref:db(A,x),style:{display:"block",userSelect:"none"},children:m?g.jsx(eT,{}):null})}function nT(d){return"str"in d}function iT(){const d=Hl();Ge(d);const{customTextRenderer:e,onGetTextError:t,onGetTextSuccess:s,onRenderTextLayerError:r,onRenderTextLayerSuccess:o,page:l,pageIndex:u,pageNumber:h,rotate:p,scale:m}=d;Ge(l);const[b,v]=fr(),{value:A,error:x}=b,C=P.useRef(null);Nt(Number.parseInt(window.getComputedStyle(document.body).getPropertyValue("--react-pdf-text-layer"),10)===1,"TextLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-text-layer");function T(){A&&s&&s(A)}function w(){x&&(Nt(!1,x.toString()),t&&t(x))}P.useEffect(function(){v({type:"RESET"})},[l,v]),P.useEffect(function(){if(!l)return;const q=Ya(l.getTextContent()),V=q;return q.promise.then(Q=>{v({type:"RESOLVE",value:Q})}).catch(Q=>{v({type:"REJECT",error:Q})}),()=>ds(V)},[l,v]),P.useEffect(()=>{if(A!==void 0){if(A===!1){w();return}T()}},[A]);const _=P.useCallback(()=>{o&&o()},[o]),R=P.useCallback(F=>{Nt(!1,F.toString()),r&&r(F)},[r]);function O(){const F=C.current;F&&F.classList.add("selecting")}function k(){const F=C.current;F&&F.classList.remove("selecting")}const j=P.useMemo(()=>l.getViewport({scale:m,rotation:p}),[l,p,m]);return P.useLayoutEffect(function(){if(!l||!A)return;const{current:q}=C;if(!q)return;q.innerHTML="";const V=l.streamTextContent({includeMarkedContent:!0}),Q={container:q,textContentSource:V,viewport:j},J=new La(Q),le=J;return J.render().then(()=>{const de=document.createElement("div");de.className="endOfContent",q.append(de);const ae=q.querySelectorAll('[role="presentation"]');if(e){let ce=0;A.items.forEach((N,G)=>{if(!nT(N))return;const ee=ae[ce];if(!ee)return;const he=e({pageIndex:u,pageNumber:h,itemIndex:G,...N});ee.innerHTML=he,ce+=N.str&&N.hasEOL?2:1})}_()}).catch(R),()=>ds(le)},[e,R,_,l,u,h,A,j]),g.jsx("div",{className:Fl("react-pdf__Page__textContent","textLayer"),onMouseUp:k,onMouseDown:O,ref:C})}const ty=1;function sT(d){const t={...ub(),...d},{_className:s="react-pdf__Page",_enableRegisterUnregisterPage:r=!0,canvasBackground:o,canvasRef:l,children:u,className:h,customRenderer:p,customTextRenderer:m,devicePixelRatio:b,error:v="Failed to load the page.",height:A,inputRef:x,loading:C="Loading page…",noData:T="No page specified.",onGetAnnotationsError:w,onGetAnnotationsSuccess:_,onGetStructTreeError:R,onGetStructTreeSuccess:O,onGetTextError:k,onGetTextSuccess:j,onLoadError:F,onLoadSuccess:q,onRenderAnnotationLayerError:V,onRenderAnnotationLayerSuccess:Q,onRenderError:J,onRenderSuccess:le,onRenderTextLayerError:de,onRenderTextLayerSuccess:ae,pageIndex:ce,pageNumber:N,pdf:G,registerPage:ee,renderAnnotationLayer:he=!0,renderForms:M=!1,renderMode:W="canvas",renderTextLayer:Z=!0,rotate:K,scale:te=ty,unregisterPage:ye,width:re,...Ce}=t,[Re,We]=fr(),{value:He,error:Ut}=Re,Kt=P.useRef(null);Ge(G);const De=is(N)?N-1:ce??null,Ie=N??(is(ce)?ce+1:null),ot=K??(He?He.rotate:null),ht=P.useMemo(()=>{if(!He)return null;let it=1;const It=te??ty;if(re||A){const st=He.getViewport({scale:1,rotation:ot});re?it=re/st.width:A&&(it=A/st.height)}return It*it},[A,He,ot,te,re]);P.useEffect(function(){return()=>{is(De)&&r&&ye&&ye(De)}},[r,G,De,ye]);function Et(){if(q){if(!He||!ht)return;q(Od(He,ht))}if(r&&ee){if(!is(De)||!Kt.current)return;ee(De,Kt.current)}}function ji(){Ut&&(Nt(!1,Ut.toString()),F&&F(Ut))}P.useEffect(function(){We({type:"RESET"})},[We,G,De]),P.useEffect(function(){if(!G||!Ie)return;const It=Ya(G.getPage(Ie)),st=It;return It.promise.then(vr=>{We({type:"RESOLVE",value:vr})}).catch(vr=>{We({type:"REJECT",error:vr})}),()=>ds(st)},[We,G,Ie]),P.useEffect(()=>{if(He!==void 0){if(He===!1){ji();return}Et()}},[He,ht]);const ps=P.useMemo(()=>is(De)&&Ie&&is(ot)&&is(ht)?{_className:s,canvasBackground:o,customTextRenderer:m,devicePixelRatio:b,onGetAnnotationsError:w,onGetAnnotationsSuccess:_,onGetStructTreeError:R,onGetStructTreeSuccess:O,onGetTextError:k,onGetTextSuccess:j,onRenderAnnotationLayerError:V,onRenderAnnotationLayerSuccess:Q,onRenderError:J,onRenderSuccess:le,onRenderTextLayerError:de,onRenderTextLayerSuccess:ae,page:He,pageIndex:De,pageNumber:Ie,renderForms:M,renderTextLayer:Z,rotate:ot,scale:ht}:null,[s,o,m,b,w,_,R,O,k,j,V,Q,J,le,de,ae,He,De,Ie,M,Z,ot,ht]),Xa=P.useMemo(()=>ab(Ce,()=>He&&(ht?Od(He,ht):void 0)),[Ce,He,ht]),zn=`${De}@${ht}/${ot}`;function Gl(){switch(W){case"custom":return Ge(p),g.jsx(p,{},`${zn}_custom`);case"none":return null;case"canvas":default:return g.jsx(tT,{canvasRef:l},`${zn}_canvas`)}}function Wa(){return Z?g.jsx(iT,{},`${zn}_text`):null}function ql(){return he?g.jsx($E,{},`${zn}_annotations`):null}function Vl(){function it(st){return!!st?.page}if(!it(ps))throw new Error("page is undefined");const It=typeof u=="function"?u(ps):u;return g.jsxs(hb.Provider,{value:ps,children:[Gl(),Wa(),ql(),It]})}function Bi(){return Ie?G===null||He===void 0||He===null?g.jsx(cr,{type:"loading",children:typeof C=="function"?C():C}):G===!1||He===!1?g.jsx(cr,{type:"error",children:typeof v=="function"?v():v}):Vl():g.jsx(cr,{type:"no-data",children:typeof T=="function"?T():T})}return g.jsx("div",{className:Fl(s,h),"data-page-number":Ie,ref:db(x,Kt),style:{"--scale-round-x":"1px","--scale-round-y":"1px","--scale-factor":"1","--user-unit":`${ht}`,"--total-scale-factor":"calc(var(--scale-factor) * var(--user-unit))",backgroundColor:o||"white",position:"relative",minWidth:"min-content",minHeight:"min-content"},...Xa,children:Bi()})}GE();Ni.workerSrc="pdf.worker.mjs";Ni.workerSrc=new URL("/assets/pdf.worker.min-qwK7q_zL.mjs",import.meta.url).toString();const rT=()=>g.jsxs(g.Fragment,{children:[g.jsx("div",{children:"Khalid Ids"}),g.jsx("br",{}),g.jsx("label",{children:"Photo"}),g.jsx("br",{}),g.jsx("img",{src:"/KhalidIDs/PHOTO.jpg",width:"20%"}),g.jsx("br",{}),g.jsx("a",{href:"/KhalidIDs/Resume.pdf",target:"_blank",children:"Resume PDF"}),g.jsx("div",{style:{width:"30px"},children:g.jsx(WE,{file:"/KhalidIDs/Resume.pdf",children:g.jsx(sT,{pageNumber:1,width:500,height:500})})}),g.jsx("label",{children:"Khalid Aadhar"}),g.jsx("br",{}),g.jsx("img",{src:"/KhalidIDs/AadharI.jpeg",width:"20%"}),g.jsx("img",{src:"/KhalidIDs/AadharII.jpeg",width:"20%"}),g.jsx("br",{}),g.jsx("label",{children:"Driving Lisence"}),g.jsx("br",{}),g.jsx("img",{src:"/KhalidIDs/DLFront.jpeg",width:"20%"}),g.jsx("img",{src:"/KhalidIDs/DLBack.jpeg",width:"20%"}),g.jsx("br",{}),g.jsx("label",{children:"PAN"}),g.jsx("br",{}),g.jsx("img",{src:"/KhalidIDs/PAN.jpg",width:"20%"}),g.jsx("br",{}),g.jsx("br",{}),g.jsx("label",{children:"Passport"}),g.jsx("br",{}),g.jsx("img",{src:"/KhalidIDs/PassportI.jpeg",width:"20%"}),g.jsx("img",{src:"/KhalidIDs/PassportII.jpeg",width:"20%"}),g.jsx("br",{}),g.jsx("br",{}),g.jsx("label",{children:"Voter"}),g.jsx("br",{}),g.jsx("img",{src:"/KhalidIDs/VoterI.jpeg",width:"20%"}),g.jsx("img",{src:"/KhalidIDs/VoterII.jpeg",width:"20%"}),g.jsx("br",{}),g.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[g.jsx("thead",{children:g.jsxs("tr",{children:[g.jsx("th",{style:{border:"1px solid black",padding:"8px"},children:"Sl. No."}),g.jsx("th",{style:{border:"1px solid black",padding:"8px"},children:"Examination"}),g.jsx("th",{style:{border:"1px solid black",padding:"8px"},children:"Board / University"}),g.jsx("th",{style:{border:"1px solid black",padding:"8px"},children:"Year"}),g.jsx("th",{style:{border:"1px solid black",padding:"8px"},children:"% Obtained"})]})}),g.jsxs("tbody",{children:[g.jsxs("tr",{children:[g.jsx("td",{style:{border:"1px solid black",padding:"8px"},children:"1."}),g.jsx("td",{style:{border:"1px solid black",padding:"8px"},children:"MCA (Master of Computer Application)"}),g.jsx("td",{style:{border:"1px solid black",padding:"8px"},children:"University of North Bengal (W.B)"}),g.jsx("td",{style:{border:"1px solid black",padding:"8px"},children:"2000"}),g.jsx("td",{style:{border:"1px solid black",padding:"8px"},children:"75.42 %"})]}),g.jsxs("tr",{children:[g.jsx("td",{style:{border:"1px solid black",padding:"8px"},children:"2."}),g.jsx("td",{style:{border:"1px solid black",padding:"8px"},children:"Master of Science (Electronic)"}),g.jsx("td",{style:{border:"1px solid black",padding:"8px"},children:"BNMU (Madhepura)"}),g.jsx("td",{style:{border:"1px solid black",padding:"8px"},children:"1995"}),g.jsx("td",{style:{border:"1px solid black",padding:"8px"},children:"65.62 %"})]}),g.jsxs("tr",{children:[g.jsx("td",{style:{border:"1px solid black",padding:"8px"},children:"3."}),g.jsx("td",{style:{border:"1px solid black",padding:"8px"},children:"Bachelor of Science (Physics, Hons)"}),g.jsx("td",{style:{border:"1px solid black",padding:"8px"},children:"BNMU (Madhepura)"}),g.jsx("td",{style:{border:"1px solid black",padding:"8px"},children:"1991"}),g.jsx("td",{style:{border:"1px solid black",padding:"8px"},children:"64.26 %"})]}),g.jsxs("tr",{children:[g.jsx("td",{style:{border:"1px solid black",padding:"8px"},children:"4."}),g.jsx("td",{style:{border:"1px solid black",padding:"8px"},children:"Higher Secondary"}),g.jsx("td",{style:{border:"1px solid black",padding:"8px"},children:"B.I.E. Council (Patna)"}),g.jsx("td",{style:{border:"1px solid black",padding:"8px"},children:"88"}),g.jsx("td",{style:{border:"1px solid black",padding:"8px"},children:"48.11 %"})]}),g.jsxs("tr",{children:[g.jsx("td",{style:{border:"1px solid black",padding:"8px"},children:"5."}),g.jsx("td",{style:{border:"1px solid black",padding:"8px"},children:"Secondary"}),g.jsx("td",{style:{border:"1px solid black",padding:"8px"},children:"B.S.E.B. (Patna)"}),g.jsx("td",{style:{border:"1px solid black",padding:"8px"},children:"86"}),g.jsx("td",{style:{border:"1px solid black",padding:"8px"},children:"57.22 %"})]})]})]}),g.jsx("br",{}),g.jsx("br",{})]}),aT=()=>{const d=["Apple","Banana","Orange"],[e,t]=P.useState(""),s=["Apple2","Banana2","Orange2"],[r,o]=P.useState(""),l=[{name:"Alice",age:25,email:"alice@example.com"},{name:"Bob",age:30,email:"bob@example.com"}],u={India:["Karnataka","Maharashtra","Tamil Nadu"],USA:["California","Texas","New York"],Canada:["Ontario","Quebec","British Columbia"]},[h,p]=P.useState(""),[m,b]=P.useState([]),v=A=>{const x=A.target.value;p(x),b(u[x]||[])};return g.jsxs(g.Fragment,{children:[g.jsxs("div",{children:[g.jsx("h3",{children:"Select a Fruit:"}),d.map((A,x)=>g.jsxs("label",{children:[g.jsx("input",{type:"radio",name:"first",value:A,checked:e===A,onChange:C=>t(C.target.value)}),A]},x)),g.jsxs("p",{children:["Selected: ",e]})]}),g.jsxs("div",{children:[g.jsx("h3",{children:"Select a Fruit2:"}),s.map((A,x)=>g.jsxs("label",{style:{display:"block"},children:[g.jsx("input",{type:"radio",name:"second",value:A,checked:r===A,onChange:C=>o(C.target.value)}),A," ",x]},x)),g.jsxs("p",{children:["Selected2: ",r]})]}),g.jsx("br",{}),g.jsxs("div",{children:[g.jsx("h3",{children:"User List:"}),l.map((A,x)=>g.jsxs("div",{children:[g.jsxs("p",{children:["Name: ",A.name]}),g.jsxs("p",{children:["Age: ",A.age]}),g.jsxs("p",{children:["Email: ",A.email]}),g.jsx("hr",{})]},x))]}),g.jsx("br",{}),g.jsxs("div",{children:[g.jsx("h3",{children:"Select Country and State"}),g.jsxs("select",{onChange:v,value:h,children:[g.jsx("option",{value:"",children:"-- Select Country --"}),Object.keys(u).map(A=>g.jsx("option",{value:A,children:A},A))]}),g.jsxs("select",{disabled:!h,children:[g.jsx("option",{value:"",children:"-- Select State --"}),m.map(A=>g.jsx("option",{value:A,children:A},A))]})]}),g.jsx("br",{}),g.jsx("br",{})]})},oT=P.lazy(()=>VA(()=>import("./LazyLoading-zYCTvNb0.js"),[]));function lT(){const[d,e]=P.useState(!0),t=()=>{e(s=>!s)};return g.jsxs("div",{children:[g.jsx(pC,{onToggleSidebar:t}),g.jsx(gC,{isOpen:d}),g.jsx("main",{style:{marginLeft:d?"210px":"10px",padding:"5px",transition:"margin-left 0.3s ease"},children:g.jsx(P.Suspense,{fallback:g.jsx("h3",{style:{textAlign:"center"},children:"⏳ Loading Page..."}),children:g.jsxs(hy,{children:[g.jsx(Ye,{path:"login",element:g.jsx(vy,{})}),g.jsx(Ye,{path:"logout",element:g.jsx(xx,{})}),g.jsx(Ye,{path:"contact",element:g.jsx(bC,{})}),g.jsx(Ye,{path:"about",element:g.jsx(yC,{})}),g.jsx(Ye,{path:"lazy",element:g.jsx(oT,{})}),g.jsx(Ye,{path:"react",element:g.jsx(vC,{})}),g.jsx(Ye,{path:"somecode",element:g.jsx(AC,{})}),g.jsx(Ye,{path:"session3",element:g.jsx(SC,{})}),g.jsx(Ye,{path:"interview",element:g.jsx(CC,{})}),g.jsx(Ye,{path:"session4",element:g.jsx(xC,{})}),g.jsx(Ye,{path:"javascript",element:g.jsx(_C,{})}),g.jsx(Ye,{path:"usememo",element:g.jsx(RC,{})}),g.jsx(Ye,{path:"usecallback",element:g.jsx(LC,{})}),g.jsx(Ye,{path:"memo",element:g.jsx(OC,{})}),g.jsx(Ye,{path:"dml",element:g.jsx(NC,{})}),g.jsx(Ye,{path:"tvs",element:g.jsx(jC,{})}),g.jsx(Ye,{path:"appservice",element:g.jsx(GC,{})}),g.jsx(Ye,{path:"professional",element:g.jsx(v0,{})}),g.jsx(Ye,{path:"sql",element:g.jsx(j0,{})}),g.jsx(Ye,{path:"dotnetdata",element:g.jsx(Cx,{})}),g.jsx(Ye,{path:"fetchdata",element:g.jsx(Ex,{})}),g.jsx(Ye,{path:"khalid",element:g.jsx(rT,{})}),g.jsx(Ye,{path:"general",element:g.jsx(aT,{})})]})})}),g.jsx(mC,{})]})}const cT=({children:d})=>{const e=ui();let t=!1;try{t=!!localStorage.getItem("isAuth")}catch{t=!1}return t?d:g.jsx(OS,{to:"/",state:{from:e},replace:!0})};zA.createRoot(document.getElementById("root")).render(g.jsx(P.StrictMode,{children:g.jsx(sC,{children:g.jsxs(hy,{children:[g.jsx(Ye,{path:"/",element:g.jsx(vy,{})}),g.jsx(Ye,{path:"/app/*",element:g.jsx(cT,{children:g.jsx(lT,{})})})]})})}));export{g as j,P as r};
