(function(h,n){typeof exports=="object"&&typeof module!="undefined"?n(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],n):(h=typeof globalThis!="undefined"?globalThis:h||self,n(h.modal={},h.Vue))})(this,function(h,n){"use strict";const b=new Map,C=(e,t)=>{b.set(e,t)},k=e=>{const t=b.get(e);return t===void 0?null:t},E=e=>{b.delete(e)},w=()=>b,B=(e,t,o)=>e-o.left>-10&&e-o.left<10&&t-o.top>-10&&t-o.top<10?"top-left":o.right-e>-10&&o.right-e<10&&t-o.top>-10&&t-o.top<10?"top-right":o.bottom-t>-10&&o.bottom-t<10&&e-o.left>-10&&e-o.left<10?"bottom-left":o.bottom-t>-10&&o.bottom-t<10&&o.right-e>-10&&o.right-e<10?"bottom-right":e-o.left>-5&&e-o.left<5?"left":o.right-e>-5&&o.right-e<5?"right":t-o.top>-5&&t-o.top<5?"top":o.bottom-t>-5&&o.bottom-t<5?"bottom":null,S=(e,t,o)=>{switch(B(e,t,o)){case"left":case"right":return"col-resize";case"top":case"bottom":return"row-resize";case"top-left":case"bottom-right":return"nwse-resize";case"top-right":case"bottom-left":return"nesw-resize";default:return""}},z=(e,t)=>{e.addEventListener("pointermove",o=>{const i=e.getBoundingClientRect();e.style.cursor=S(o.clientX,o.clientY,i)}),e.addEventListener("pointerdown",o=>{const i=o.clientX,l=o.clientY,r=e.getBoundingClientRect();let a=B(i,l,r);if(a===null)return;const s=e.clientWidth,c=e.clientHeight;let u=s,f=c,m=r.top,y=r.left;document.body.style.userSelect="none",document.body.style.setProperty("-webkit-user-select","none"),document.addEventListener("pointermove",d=>{a!==null&&(d.stopPropagation(),a==="left"&&(u=Math.max(s-(d.clientX-i),t.minWidth),y=r.left+(s-u)),a==="right"&&(u=Math.max(s+(d.clientX-i),t.minWidth)),a==="top"&&(f=Math.max(c-(d.clientY-l),t.minHeight),m=r.top+(c-f)),a==="bottom"&&(f=Math.max(c+(d.clientY-l),t.minHeight)),a=="top-left"&&(u=Math.max(s-(d.clientX-i),t.minWidth),y=r.left+(s-u),f=Math.max(c-(d.clientY-l),t.minHeight),m=r.top+(c-f)),a=="top-right"&&(u=Math.max(s+(d.clientX-i),t.minWidth),f=Math.max(c-(d.clientY-l),t.minHeight),m=r.top+(c-f)),a=="bottom-left"&&(u=Math.max(s-(d.clientX-i),t.minWidth),f=Math.max(c+(d.clientY-l),t.minHeight),y=r.left+(s-u)),a=="bottom-right"&&(u=Math.max(s+(d.clientX-i),t.minWidth),f=Math.max(c+(d.clientY-l),t.minHeight)),u=Math.round(u),f=Math.round(f),m=Math.round(m),y=Math.round(y),e.style.width=u+"px",e.style.left=y+"px",d.clientY>=0&&(e.style.height=f+"px",e.style.top=m+"px"),t.resize({x:e.getBoundingClientRect().x,y:e.getBoundingClientRect().y,width:e.clientWidth,height:e.clientHeight}))}),document.addEventListener("pointerup",()=>{a=null,document.body.style.userSelect="none",document.body.style.setProperty("-webkit-user-select","")})})},I=(e,t)=>{const o=e.querySelector(".modal-header");o==null||o.addEventListener("pointerdown",i=>{const l=i.clientX-e.getBoundingClientRect().left,r=i.clientY-e.getBoundingClientRect().top,a=function(s){let c=s.clientY-r;c<0&&(c=0),e.style.top=c+"px",e.style.left=s.clientX-l+"px",document.body.style.userSelect="none",document.body.style.setProperty("-webkit-user-select","none"),t.move({x:e.getBoundingClientRect().x,y:e.getBoundingClientRect().y,width:e.clientWidth,height:e.clientHeight})};document.addEventListener("pointermove",a),document.addEventListener("pointerup",()=>{document.removeEventListener("pointermove",a),document.body.style.userSelect="",document.body.style.setProperty("-webkit-user-select","")},{once:!0})})},W=(e,t)=>{e.style.width=t.width+"px",e.style.height=t.height+"px",e.style.top=t.y!==null?t.y+"px":document.documentElement.clientHeight/2-e.clientHeight/2+"px",e.style.left=t.x!==null?t.x+"px":document.documentElement.clientWidth/2-e.clientWidth/2+"px"},H=n.defineComponent({__name:"ModalBackdrop",emits:["close"],setup(e,{emit:t}){const o=n.ref(null),i=t,l=()=>{o.value.style.width=document.documentElement.clientWidth+"px",o.value.style.height=document.documentElement.clientHeight+"px"},r=()=>{i("close")};return n.onMounted(()=>{l(),window.addEventListener("resize",l)}),n.onUnmounted(()=>{window.removeEventListener("resize",l)}),(a,s)=>(n.openBlock(),n.createElementBlock("div",{ref_key:"$backdrop",ref:o,onClick:r,class:"backdrop"},null,512))}}),re="",g=(e,t)=>{const o=e.__vccOpts||e;for(const[i,l]of t)o[i]=l;return o},N=g(H,[["__scopeId","data-v-d7a9ea5b"]]),V=[(e=>(n.pushScopeId("data-v-6fa6eada"),e=e(),n.popScopeId(),e))(()=>n.createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-x",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[n.createElementVNode("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),n.createElementVNode("path",{d:"M18 6l-12 12"}),n.createElementVNode("path",{d:"M6 6l12 12"})],-1))],R=n.defineComponent({__name:"ModalCloseButton",emits:["close"],setup(e,{emit:t}){const o=t,i=()=>{o("close")};return(l,r)=>(n.openBlock(),n.createElementBlock("button",{type:"button",onClick:n.withModifiers(i,["prevent"])},V))}}),ae="",L=g(R,[["__scopeId","data-v-6fa6eada"]]),T=e=>Math.round(document.documentElement.clientWidth/2-e/2),P=e=>{let t=Math.round(window.innerHeight/2-e/2);return t<0&&(t=5),t},M=e=>Number(e.replace("px","")),F=(e,t)=>({x:T(e),y:P(t),width:e,height:t}),v=()=>{let e=1e3;for(const t of w().values()){const o=t.getZIndex();o>e&&(e=o)}return e},O=()=>window.innerWidth-document.documentElement.clientWidth,q={class:"modal-header__title"},A={class:"modal-header__buttons"},Z=n.defineComponent({__name:"Modal",props:{name:{type:String,required:!0},title:{type:String,required:!1,default:null},minWidth:{type:String,default:"200px"},width:{type:String,default:"600px"},minHeight:{type:String,default:"200px"},height:{type:String,default:"400px"},backdrop:{type:Boolean,default:!1},staticBackdrop:{type:Boolean,default:!1},resize:{type:Boolean,default:!0},theme:{type:String,default:"white"}},setup(e){const t=n.ref(!1),o=n.ref(!1),i=n.ref(!1),l=e,r=n.ref(),a=n.ref(),s=n.ref();let c=F(M(l.width),M(l.height));const u=p=>()=>{const _=O();_>0&&(document.body.style.paddingRight=_+"px"),document.body.style.overflow="hidden",t.value=!0,setTimeout(()=>o.value=!0,10),n.nextTick(async()=>{m(p)(),p.style.zIndex=(v()+1).toString(),p.style.minWidth=l.minWidth,p.style.minHeight=l.minHeight,W(p,c),l.resize&&z(p,{minWidth:M(l.minWidth),minHeight:M(l.minHeight),resize:x=>{c=x}}),I(p,{move:x=>{c=x}})})},f=p=>()=>{var _;return Number((_=p.style.zIndex)!=null?_:1e3)},m=p=>()=>{if(i.value===!0)return;for(const x of w().values())x.deactivate();let _=v()+1;i.value=!0,p.style.zIndex=_.toString()},y=p=>()=>{i.value=!1;let _=Number(p.style.zIndex)-1;_<1e3&&(_=1e3),p.style.setProperty("z-index",_.toString())},d=()=>{o.value=!1,document.body.style.paddingRight="",document.body.style.overflow="",setTimeout(()=>{t.value=!1},150)},le=()=>{l.staticBackdrop||d()},ie=()=>{m(r.value)()};return n.onMounted(()=>{C(l.name,{open:u(r.value),close:d,activate:m(r.value),deactivate:y(r.value),getZIndex:f(r.value)})}),n.onUnmounted(()=>{E(l.name)}),(p,_)=>(n.openBlock(),n.createElementBlock("div",null,[n.createElementVNode("div",{onPointerdown:ie,ref_key:"$modal",ref:r,class:n.normalizeClass(["modal",{"modal--hidden":!t.value,"modal-visible":o.value,"modal--theme-black":l.theme==="black"}])},[n.createElementVNode("div",{ref_key:"$headerWrapper",ref:a,class:"modal-header-wrapper"},[n.createElementVNode("div",{ref_key:"$header",ref:s,class:"modal-header"},[n.createElementVNode("div",q,n.toDisplayString(e.title),1),n.createElementVNode("div",A,[n.createVNode(L,{onClose:d})])],512)],512),n.renderSlot(p.$slots,"default",{},void 0,!0)],34),n.createVNode(n.Transition,null,{default:n.withCtx(()=>[l.backdrop&&t.value?(n.openBlock(),n.createBlock(N,{key:0,onClose:le})):n.createCommentVNode("",!0)]),_:1})]))}}),se="",j=g(Z,[["__scopeId","data-v-bca8c524"]]),U=n.defineComponent({__name:"ModalFooter",setup(e){const t=n.ref(null);let o=!0;return n.onMounted(()=>{o=t.value!==null&&t.value.querySelectorAll("button").length>0}),(i,l)=>n.unref(o)?(n.openBlock(),n.createElementBlock("div",{key:0,ref_key:"$footerNode",ref:t,class:"modal-footer"},[n.renderSlot(i.$slots,"default",{},void 0,!0)],512)):n.createCommentVNode("",!0)}}),pe="",D=g(U,[["__scopeId","data-v-9f703cbb"]]),ue="",Y={},G={class:"modal-body"},J={class:"modal-body__content"};function K(e,t){return n.openBlock(),n.createElementBlock("div",G,[n.createElementVNode("div",J,[n.renderSlot(e.$slots,"default",{},void 0,!0)])])}const Q=g(Y,[["render",K],["__scopeId","data-v-dc47cc62"]]),fe="",X={},$={type:"button"};function ee(e,t){return n.openBlock(),n.createElementBlock("button",$,[n.renderSlot(e.$slots,"default",{},void 0,!0)])}const te=g(X,[["render",ee],["__scopeId","data-v-eff1971f"]]),ne=e=>{var t;(t=k(e))==null||t.open()},oe=e=>{var t;(t=k(e))==null||t.close()};h.Modal=j,h.ModalButton=te,h.ModalContent=Q,h.ModalFooter=D,h.close=oe,h.open=ne,Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=modal.umd.cjs.map
