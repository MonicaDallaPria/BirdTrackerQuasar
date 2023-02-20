import{a as J,Q as K}from"./QItemLabel.2164b035.js";import{a as X,Q as A,b as Y}from"./QItem.7447ca8f.js";import{u as Z,a as E,Q as z}from"./QCard.55526fb9.js";import{c as v,r as d,w as ee,a as te,h as _,X as ae,g as le,F as ie,G as w,O as Q,T as y,K as i,J as n,S as ne,Q as se,V as N,L as F,M as x,I as P,A as re,N as q}from"./index.05142272.js";import{d as oe,e as ue,f as ce,Q as $,R as de}from"./QBtn.6e6cd773.js";import{c as D,h as W}from"./QIcon.347d01c7.js";import{u as ve,a as fe}from"./use-dark.f083aa67.js";const me={ratio:[String,Number]};function ge(e,o){return v(()=>{const c=Number(e.ratio||(o!==void 0?o.value:void 0));return isNaN(c)!==!0&&c>0?{paddingBottom:`${100/c}%`}:null})}const he=16/9;var M=D({name:"QImg",props:{...me,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:he},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:o,emit:c}){const u=d(e.initialRatio),f=ge(e,u);let a=null,m=!1;const r=[d(null),d(C())],l=d(0),S=d(!1),g=d(!1),I=v(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),k=v(()=>({width:e.width,height:e.height})),b=v(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),h=v(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));ee(()=>s(),L);function s(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function C(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function L(t){a!==null&&(clearTimeout(a),a=null),g.value=!1,t===null?(S.value=!1,r[l.value^1].value=C()):S.value=!0,r[l.value].value=t}function H({target:t}){m!==!0&&(a!==null&&(clearTimeout(a),a=null),u.value=t.naturalHeight===0?.5:t.naturalWidth/t.naturalHeight,R(t,1))}function R(t,T){m===!0||T===1e3||(t.complete===!0?U(t):a=setTimeout(()=>{a=null,R(t,T+1)},50))}function U(t){m!==!0&&(l.value=l.value^1,r[l.value].value=null,S.value=!1,g.value=!1,c("load",t.currentSrc||t.src))}function G(t){a!==null&&(clearTimeout(a),a=null),S.value=!1,g.value=!0,r[l.value].value=null,r[l.value^1].value=C(),c("error",t)}function V(t){const T=r[t].value,B={key:"img_"+t,class:b.value,style:h.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...T};return l.value===t?(B.class+=" q-img__image--waiting",Object.assign(B,{onLoad:H,onError:G})):B.class+=" q-img__image--loaded",_("div",{class:"q-img__container absolute-full",key:"img"+t},_("img",B))}function p(){return S.value!==!0?_("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},W(o[g.value===!0?"error":"default"])):_("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},o.loading!==void 0?o.loading():e.noSpinner===!0?void 0:[_(oe,{color:e.spinnerColor,size:e.spinnerSize})])}return L(s()),te(()=>{m=!0,a!==null&&(clearTimeout(a),a=null)}),()=>{const t=[];return f.value!==null&&t.push(_("div",{key:"filler",style:f.value})),g.value!==!0&&(r[0].value!==null&&t.push(V(0)),r[1].value!==null&&t.push(V(1))),t.push(_(ae,{name:"q-transition--fade"},p)),_("div",{class:I.value,style:k.value,role:"img","aria-label":e.alt},t)}}});const _e={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},O={xs:2,sm:4,md:8,lg:16,xl:24};var Se=D({name:"QSeparator",props:{...ve,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const o=le(),c=fe(e,o.proxy.$q),u=v(()=>e.vertical===!0?"vertical":"horizontal"),f=v(()=>` q-separator--${u.value}`),a=v(()=>e.inset!==!1?`${f.value}-${_e[e.inset]}`:""),m=v(()=>`q-separator${f.value}${a.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(c.value===!0?" q-separator--dark":"")),r=v(()=>{const l={};if(e.size!==void 0&&(l[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const S=e.spaced===!0?`${O.md}px`:e.spaced in O?`${O[e.spaced]}px`:e.spaced,g=e.vertical===!0?["Left","Right"]:["Top","Bottom"];l[`margin${g[0]}`]=l[`margin${g[1]}`]=S}return l});return()=>_("hr",{class:m.value,style:r.value,"aria-orientation":u.value})}}),j=D({name:"QCardActions",props:{...ue,vertical:Boolean},setup(e,{slots:o}){const c=ce(e),u=v(()=>`q-card__actions ${c.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>_("div",{class:u.value},W(o.default))}});const ye={class:"flex-container"},Ce={class:"flex-parent-element"},be={class:"q-pa-md",style:{"max-width":"350px"}},we=["src"],xe={key:0,class:"flex-child"},qe={class:"q-pa-md row items-start q-gutter-md"},ke={class:"text-overline"},Te={class:"text-h5 q-mt-sm q-mb-xs"},Be={class:"text-caption text-grey"},Qe={key:1,class:"flex-child"},$e={class:"absolute-bottom"},Ie={class:"text-h6"},Ae=ie({__name:"BirdsToWatch",setup(e){const o=Z(),c=v(()=>o.birdsOnWatchlist),u=d(""),f=d(""),a=d(""),m=d("");let r=d(!1),l=d(!1);function S(b,h,s,C){u.value=b,f.value=h,a.value=s,m.value=C.toLocaleUpperCase(),l.value=!0,r.value=!1}function g(){r.value=!0,l.value=!1}function I(){r.value=!1,l.value=!0}function k(b,h,s,C){o.birdHasBeenSpottedFromList(b,h,s,C)}return(b,h)=>(w(),Q("div",ye,[y("div",Ce,[y("div",be,[i(J,null,{default:n(()=>[i(K,{header:""},{default:n(()=>[x("Current search list")]),_:1})]),_:1}),(w(!0),Q(ne,null,se(N(c),s=>(w(),P(Y,{bordered:"",key:s.title},{default:n(()=>[re((w(),P(X,{clickable:"",onClick:C=>S(s.title,s.image,s.text,s.country)},{default:n(()=>[i(A,null,{default:n(()=>[x(q(s.title),1)]),_:2},1024),i(A,{thumbnail:""},{default:n(()=>[y("img",{src:s.image},null,8,we)]),_:2},1024)]),_:2},1032,["onClick"])),[[de]])]),_:2},1024))),128))])]),N(l)?(w(),Q("div",xe,[y("div",qe,[i(E,{class:"my-card",flat:"",bordered:""},{default:n(()=>[i(z,{horizontal:""},{default:n(()=>[i(z,{class:"q-pt-xs"},{default:n(()=>[y("div",ke,q(m.value),1),y("div",Te,q(u.value),1),y("div",Be,q(a.value),1)]),_:1}),i(z,{class:"col- flex flex-center"},{default:n(()=>[i(M,{class:"rounded-borders",src:f.value},null,8,["src"])]),_:1})]),_:1}),i(Se),i(j,null,{default:n(()=>[i($,{flat:"",onClick:g},{default:n(()=>[x(" IMAGE ")]),_:1}),i($,{flat:"",color:"primary",onClick:h[0]||(h[0]=s=>k(u.value,a.value,f.value,m.value))},{default:n(()=>[x(" SPOTTED ")]),_:1})]),_:1})]),_:1})])])):F("",!0),N(r)?(w(),Q("div",Qe,[i(E,{class:"q-pa-md row items-start q-gutter-md"},{default:n(()=>[i(M,{src:f.value},{default:n(()=>[y("div",$e,[y("div",Ie,q(u.value),1)])]),_:1},8,["src"]),i(j,null,{default:n(()=>[i($,{flat:"",onClick:I},{default:n(()=>[x("INFO")]),_:1}),i($,{flat:"",onClick:h[1]||(h[1]=s=>k(u.value,a.value,f.value,m.value))},{default:n(()=>[x("SPOTTED")]),_:1})]),_:1})]),_:1})])):F("",!0)]))}});export{Ae as default};
