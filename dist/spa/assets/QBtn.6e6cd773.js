import{c as s,h,V as ee,W as D,t as te,z as ne,x as Y,y as ae,g as G,r as I,a as re,X as ue,A as le,s as T,v as ie,l as se}from"./index.05142272.js";import{u as N,c as J,b as oe,f as ce,g as de,Q,e as fe}from"./QIcon.347d01c7.js";const ve={size:{type:[Number,String],default:"1em"},color:String};function ge(e){return{cSize:s(()=>e.size in N?`${N[e.size]}px`:e.size),classes:s(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var me=J({name:"QSpinner",props:{...ve,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:r}=ge(e);return()=>h("svg",{class:r.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[h("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function be(e,t){const r=e.style;for(const n in t)r[n]=t[n]}function je(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=ee(e);if(t)return t.$el||t}function he(e,t=250){let r=!1,n;return function(){return r===!1&&(r=!0,setTimeout(()=>{r=!1},t),n=e.apply(this,arguments)),n}}function V(e,t,r,n){r.modifiers.stop===!0&&Y(e);const l=r.modifiers.color;let m=r.modifiers.center;m=m===!0||n===!0;const f=document.createElement("span"),d=document.createElement("span"),E=ae(e),{left:y,top:v,width:$,height:u}=t.getBoundingClientRect(),k=Math.sqrt($*$+u*u),g=k/2,p=`${($-k)/2}px`,i=m?p:`${E.left-y-g}px`,b=`${(u-k)/2}px`,B=m?b:`${E.top-v-g}px`;d.className="q-ripple__inner",be(d,{height:`${k}px`,width:`${k}px`,transform:`translate3d(${i},${B},0) scale3d(.2,.2,1)`,opacity:0}),f.className=`q-ripple${l?" text-"+l:""}`,f.setAttribute("dir","ltr"),f.appendChild(d),t.appendChild(f);const P=()=>{f.remove(),clearTimeout(R)};r.abort.push(P);let R=setTimeout(()=>{d.classList.add("q-ripple__inner--enter"),d.style.transform=`translate3d(${p},${b},0) scale3d(1,1,1)`,d.style.opacity=.2,R=setTimeout(()=>{d.classList.remove("q-ripple__inner--enter"),d.classList.add("q-ripple__inner--leave"),d.style.opacity=0,R=setTimeout(()=>{f.remove(),r.abort.splice(r.abort.indexOf(P),1)},275)},250)},50)}function W(e,{modifiers:t,value:r,arg:n}){const l=Object.assign({},e.cfg.ripple,t,r);e.modifiers={early:l.early===!0,stop:l.stop===!0,center:l.center===!0,color:l.color||n,keyCodes:[].concat(l.keyCodes||13)}}var ye=oe({name:"ripple",beforeMount(e,t){const r=t.instance.$.appContext.config.globalProperties.$q.config||{};if(r.ripple===!1)return;const n={cfg:r,enabled:t.value!==!1,modifiers:{},abort:[],start(l){n.enabled===!0&&l.qSkipRipple!==!0&&l.type===(n.modifiers.early===!0?"pointerdown":"click")&&V(l,e,n,l.qKeyEvent===!0)},keystart:he(l=>{n.enabled===!0&&l.qSkipRipple!==!0&&D(l,n.modifiers.keyCodes)===!0&&l.type===`key${n.modifiers.early===!0?"down":"up"}`&&V(l,e,n,!0)},300)};W(n,t),e.__qripple=n,te(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const r=e.__qripple;r!==void 0&&(r.enabled=t.value!==!1,r.enabled===!0&&Object(t.value)===t.value&&W(r,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(r=>{r()}),ne(t,"main"),delete e._qripple)}});const Z={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},ke=Object.keys(Z),pe={align:{type:String,validator:e=>ke.includes(e)}};function qe(e){return s(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${Z[t]}`})}function xe(e){return e.appContext.config.globalProperties.$router!==void 0}function ze(e){return e.isUnmounted===!0||e.isDeactivated===!0}function H(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function U(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function $e(e,t){for(const r in t){const n=t[r],l=e[r];if(typeof n=="string"){if(n!==l)return!1}else if(Array.isArray(l)===!1||l.length!==n.length||n.some((m,f)=>m!==l[f]))return!1}return!0}function X(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((r,n)=>r===t[n]):e.length===1&&e[0]===t}function Ce(e,t){return Array.isArray(e)===!0?X(e,t):Array.isArray(t)===!0?X(t,e):e===t}function Le(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const r in e)if(Ce(e[r],t[r])===!1)return!1;return!0}const Se={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function Ee({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const r=G(),{props:n,proxy:l,emit:m}=r,f=xe(r),d=s(()=>n.disable!==!0&&n.href!==void 0),E=t===!0?s(()=>f===!0&&n.disable!==!0&&d.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):s(()=>f===!0&&d.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),y=s(()=>E.value===!0?B(n.to):null),v=s(()=>y.value!==null),$=s(()=>d.value===!0||v.value===!0),u=s(()=>n.type==="a"||$.value===!0?"a":n.tag||e||"div"),k=s(()=>d.value===!0?{href:n.href,target:n.target}:v.value===!0?{href:y.value.href,target:n.target}:{}),g=s(()=>{if(v.value===!1)return-1;const{matched:o}=y.value,{length:q}=o,C=o[q-1];if(C===void 0)return-1;const S=l.$route.matched;if(S.length===0)return-1;const w=S.findIndex(U.bind(null,C));if(w>-1)return w;const z=H(o[q-2]);return q>1&&H(C)===z&&S[S.length-1].path!==z?S.findIndex(U.bind(null,o[q-2])):w}),p=s(()=>v.value===!0&&g.value!==-1&&$e(l.$route.params,y.value.params)),i=s(()=>p.value===!0&&g.value===l.$route.matched.length-1&&Le(l.$route.params,y.value.params)),b=s(()=>v.value===!0?i.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":p.value===!0?` ${n.activeClass}`:"":"");function B(o){try{return l.$router.resolve(o)}catch{}return null}function P(o,{returnRouterError:q,to:C=n.to,replace:S=n.replace}={}){if(n.disable===!0)return o.preventDefault(),Promise.resolve(!1);if(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey||o.button!==void 0&&o.button!==0||n.target==="_blank")return Promise.resolve(!1);o.preventDefault();const w=l.$router[S===!0?"replace":"push"](C);return q===!0?w:w.then(()=>{}).catch(()=>{})}function R(o){if(v.value===!0){const q=C=>P(o,C);m("click",o,q),o.defaultPrevented!==!0&&q()}else m("click",o)}return{hasRouterLink:v,hasHrefLink:d,hasLink:$,linkTag:u,resolvedLink:y,linkIsActive:p,linkIsExactActive:i,linkClass:b,linkAttrs:k,getLink:B,navigateToRouterLink:P,navigateOnClick:R}}const F={none:0,xs:4,sm:8,md:16,lg:24,xl:32},we={xs:8,sm:10,md:14,lg:20,xl:24},Pe=["button","submit","reset"],Re=/[^\s]\/[^\s]/,Be=["flat","outline","push","unelevated"],Te=(e,t)=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t,_e={...ce,...Se,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...Be.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...pe.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function Ae(e){const t=de(e,we),r=qe(e),{hasRouterLink:n,hasLink:l,linkTag:m,linkAttrs:f,navigateOnClick:d}=Ee({fallbackTag:"button"}),E=s(()=>{const i=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},i,{padding:e.padding.split(/\s+/).map(b=>b in F?F[b]+"px":b).join(" "),minWidth:"0",minHeight:"0"}):i}),y=s(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),v=s(()=>e.disable!==!0&&e.loading!==!0),$=s(()=>v.value===!0?e.tabindex||0:-1),u=s(()=>Te(e,"standard")),k=s(()=>{const i={tabindex:$.value};return l.value===!0?Object.assign(i,f.value):Pe.includes(e.type)===!0&&(i.type=e.type),m.value==="a"?(e.disable===!0?i["aria-disabled"]="true":i.href===void 0&&(i.role="button"),n.value!==!0&&Re.test(e.type)===!0&&(i.type=e.type)):e.disable===!0&&(i.disabled="",i["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(i,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),i}),g=s(()=>{let i;e.color!==void 0?e.flat===!0||e.outline===!0?i=`text-${e.textColor||e.color}`:i=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(i=`text-${e.textColor}`);const b=e.round===!0?"round":`rectangle${y.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${u.value} q-btn--${b}`+(i!==void 0?" "+i:"")+(v.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),p=s(()=>r.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:g,style:E,innerClasses:p,attributes:k,hasLink:l,linkTag:m,navigateOnClick:d,isActionable:v}}const{passiveCapture:x}=se;let _=null,A=null,O=null;var Ke=J({name:"QBtn",props:{..._e,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:r}){const{proxy:n}=G(),{classes:l,style:m,innerClasses:f,attributes:d,hasLink:E,linkTag:y,navigateOnClick:v,isActionable:$}=Ae(e),u=I(null),k=I(null);let g=null,p,i=null;const b=s(()=>e.label!==void 0&&e.label!==null&&e.label!==""),B=s(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:E.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),P=s(()=>({center:e.round})),R=s(()=>{const a=Math.max(0,Math.min(100,e.percentage));return a>0?{transition:"transform 0.6s",transform:`translateX(${a-100}%)`}:{}}),o=s(()=>{if(e.loading===!0)return{onMousedown:j,onTouchstart:j,onClick:j,onKeydown:j,onKeyup:j};if($.value===!0){const a={onClick:C,onKeydown:S,onMousedown:z};if(n.$q.platform.has.touch===!0){const c=e.onTouchstart!==void 0?"":"Passive";a[`onTouchstart${c}`]=w}return a}return{onClick:T}}),q=s(()=>({ref:u,class:"q-btn q-btn-item non-selectable no-outline "+l.value,style:m.value,...d.value,...o.value}));function C(a){if(u.value!==null){if(a!==void 0){if(a.defaultPrevented===!0)return;const c=document.activeElement;if(e.type==="submit"&&c!==document.body&&u.value.contains(c)===!1&&c.contains(u.value)===!1){u.value.focus();const K=()=>{document.removeEventListener("keydown",T,!0),document.removeEventListener("keyup",K,x),u.value!==null&&u.value.removeEventListener("blur",K,x)};document.addEventListener("keydown",T,!0),document.addEventListener("keyup",K,x),u.value.addEventListener("blur",K,x)}}v(a)}}function S(a){u.value!==null&&(r("keydown",a),D(a,[13,32])===!0&&A!==u.value&&(A!==null&&M(),a.defaultPrevented!==!0&&(u.value.focus(),A=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("keyup",L,!0),u.value.addEventListener("blur",L,x)),T(a)))}function w(a){u.value!==null&&(r("touchstart",a),a.defaultPrevented!==!0&&(_!==u.value&&(_!==null&&M(),_=u.value,g=a.target,g.addEventListener("touchcancel",L,x),g.addEventListener("touchend",L,x)),p=!0,i!==null&&clearTimeout(i),i=setTimeout(()=>{i=null,p=!1},200)))}function z(a){u.value!==null&&(a.qSkipRipple=p===!0,r("mousedown",a),a.defaultPrevented!==!0&&O!==u.value&&(O!==null&&M(),O=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("mouseup",L,x)))}function L(a){if(u.value!==null&&!(a!==void 0&&a.type==="blur"&&document.activeElement===u.value)){if(a!==void 0&&a.type==="keyup"){if(A===u.value&&D(a,[13,32])===!0){const c=new MouseEvent("click",a);c.qKeyEvent=!0,a.defaultPrevented===!0&&ie(c),a.cancelBubble===!0&&Y(c),u.value.dispatchEvent(c),T(a),a.qKeyEvent=!0}r("keyup",a)}M()}}function M(a){const c=k.value;a!==!0&&(_===u.value||O===u.value)&&c!==null&&c!==document.activeElement&&(c.setAttribute("tabindex",-1),c.focus()),_===u.value&&(g!==null&&(g.removeEventListener("touchcancel",L,x),g.removeEventListener("touchend",L,x)),_=g=null),O===u.value&&(document.removeEventListener("mouseup",L,x),O=null),A===u.value&&(document.removeEventListener("keyup",L,!0),u.value!==null&&u.value.removeEventListener("blur",L,x),A=null),u.value!==null&&u.value.classList.remove("q-btn--active")}function j(a){T(a),a.qSkipRipple=!0}return re(()=>{M(!0)}),Object.assign(n,{click:C}),()=>{let a=[];e.icon!==void 0&&a.push(h(Q,{name:e.icon,left:e.stack===!1&&b.value===!0,role:"img","aria-hidden":"true"})),b.value===!0&&a.push(h("span",{class:"block"},[e.label])),a=fe(t.default,a),e.iconRight!==void 0&&e.round===!1&&a.push(h(Q,{name:e.iconRight,right:e.stack===!1&&b.value===!0,role:"img","aria-hidden":"true"}));const c=[h("span",{class:"q-focus-helper",ref:k})];return e.loading===!0&&e.percentage!==void 0&&c.push(h("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[h("span",{class:"q-btn__progress-indicator fit block",style:R.value})])),c.push(h("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+f.value},a)),e.loading!==null&&c.push(h(ue,{name:"q-transition--fade"},()=>e.loading===!0?[h("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[h(me)])]:null)),le(h(y.value,q.value,c),[[ye,B.value,void 0,P.value]])}}});export{Ke as Q,ye as R,ze as a,Ee as b,be as c,me as d,pe as e,qe as f,je as g,Se as u,xe as v};
