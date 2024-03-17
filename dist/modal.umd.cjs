(function(f,n){typeof exports=="object"&&typeof module<"u"?n(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],n):(f=typeof globalThis<"u"?globalThis:f||self,n(f.modal={},f.Vue))})(this,function(f,n){"use strict";const b=new Map,B=(e,t)=>{b.set(e,t)},k=e=>{const t=b.get(e);return t===void 0?null:t},C=e=>{b.delete(e)},M=()=>b,v=(e,t,o)=>e-o.left>-10&&e-o.left<10&&t-o.top>-10&&t-o.top<10?"top-left":o.right-e>-10&&o.right-e<10&&t-o.top>-10&&t-o.top<10?"top-right":o.bottom-t>-10&&o.bottom-t<10&&e-o.left>-10&&e-o.left<10?"bottom-left":o.bottom-t>-10&&o.bottom-t<10&&o.right-e>-10&&o.right-e<10?"bottom-right":e-o.left>-5&&e-o.left<5?"left":o.right-e>-5&&o.right-e<5?"right":t-o.top>-5&&t-o.top<5?"top":o.bottom-t>-5&&o.bottom-t<5?"bottom":null,E=(e,t,o)=>{switch(v(e,t,o)){case"left":case"right":return"col-resize";case"top":case"bottom":return"row-resize";case"top-left":case"bottom-right":return"nwse-resize";case"top-right":case"bottom-left":return"nesw-resize";default:return""}},S=e=>Math.round(document.documentElement.clientWidth/2-e/2),z=e=>{let t=Math.round(window.innerHeight/2-e/2);return t<0&&(t=5),t},x=e=>Number(e.replace("px","")),I=(e,t)=>({x:S(e),y:z(t),width:e,height:t}),w=()=>{let e=1e3;for(const t of M().values()){const o=t.getZIndex();o>e&&(e=o)}return e},N=(e,t)=>{e.addEventListener("pointermove",o=>{const i=e.getBoundingClientRect();e.style.cursor=E(o.clientX,o.clientY,i)}),e.addEventListener("pointerdown",o=>{const i=o.clientX,l=o.clientY,d=e.getBoundingClientRect();let s=v(i,l,d);if(s===null)return;const a=e.clientWidth,p=e.clientHeight,m=x(e.style.minWidth??""),y=x(e.style.minHeight??"");let _=a,u=p,g=d.top,r=d.left;document.body.style.userSelect="none",document.body.style.setProperty("-webkit-user-select","none"),document.addEventListener("pointermove",c=>{s!==null&&(s==="left"&&(r=d.left+(c.clientX-i),_=a-(c.clientX-i)),s==="right"&&(_=a+(c.clientX-i)),s==="top"&&(u=p-(c.clientY-l),u>y&&(g=d.top+(c.clientY-l))),s==="bottom"&&(u=p+(c.clientY-l)),s=="top-left"&&(_=a-(c.clientX-i),_>m&&(r=d.left+(c.clientX-i)),u=p-(c.clientY-l),u>y&&(g=d.top+(c.clientY-l))),s=="top-right"&&(_=a+(c.clientX-i),_>m&&(g=d.top+(c.clientY-l),u=p-(c.clientY-l))),s=="bottom-left"&&(_=a-(c.clientX-i),u=p+(c.clientY-l),_>m&&(r=d.left+(c.clientX-i))),s=="bottom-right"&&(_=a+(c.clientX-i),u=p+(c.clientY-l)),e.style.width=_+"px",e.style.left=r+"px",c.clientY>=0&&(e.style.height=u+"px",e.style.top=g+"px"),t.resize({x:e.getBoundingClientRect().x,y:e.getBoundingClientRect().y,width:e.clientWidth,height:e.clientHeight}))}),document.addEventListener("pointerup",()=>{s=null,document.body.style.userSelect="none",document.body.style.setProperty("-webkit-user-select","")})})},W=(e,t)=>{const o=e.querySelector(".modal-header");o==null||o.addEventListener("pointerdown",i=>{const l=i.clientX-e.getBoundingClientRect().left,d=i.clientY-e.getBoundingClientRect().top,s=function(a){let p=a.clientY-d;p<0&&(p=0),e.style.top=p+"px",e.style.left=a.clientX-l+"px",document.body.style.userSelect="none",document.body.style.setProperty("-webkit-user-select","none"),t.move({x:e.getBoundingClientRect().x,y:e.getBoundingClientRect().y,width:e.clientWidth,height:e.clientHeight})};document.addEventListener("pointermove",s),document.addEventListener("pointerup",()=>{document.removeEventListener("pointermove",s),document.body.style.userSelect="",document.body.style.setProperty("-webkit-user-select","")},{once:!0})})},H=(e,t)=>{e.style.width=t.width+"px",e.style.height=t.height+"px",e.style.top=t.y!==null?t.y+"px":document.documentElement.clientHeight/2-e.clientHeight/2+"px",e.style.left=t.x!==null?t.x+"px":document.documentElement.clientWidth/2-e.clientWidth/2+"px"},V=n.defineComponent({__name:"ModalBackdrop",emits:["close"],setup(e,{emit:t}){const o=n.ref(null),i=t,l=()=>{o.value.style.width=document.documentElement.clientWidth+"px",o.value.style.height=document.documentElement.clientHeight+"px"},d=()=>{i("close"),document.body.style.overflow=""};return n.onMounted(()=>{l(),window.addEventListener("resize",l),document.body.style.overflow="hidden"}),n.onUnmounted(()=>{document.body.style.overflow="",window.removeEventListener("resize",l)}),(s,a)=>(n.openBlock(),n.createElementBlock("div",{ref_key:"$backdrop",ref:o,onClick:d,class:"backdrop"},null,512))}}),ne="",h=(e,t)=>{const o=e.__vccOpts||e;for(const[i,l]of t)o[i]=l;return o},L=h(V,[["__scopeId","data-v-a9a01d98"]]),R=[(e=>(n.pushScopeId("data-v-6fa6eada"),e=e(),n.popScopeId(),e))(()=>n.createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-x",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[n.createElementVNode("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),n.createElementVNode("path",{d:"M18 6l-12 12"}),n.createElementVNode("path",{d:"M6 6l12 12"})],-1))],F=n.defineComponent({__name:"ModalCloseButton",emits:["close"],setup(e,{emit:t}){const o=t,i=()=>{o("close")};return(l,d)=>(n.openBlock(),n.createElementBlock("button",{type:"button",onClick:n.withModifiers(i,["prevent"])},R))}}),ie="",O=h(F,[["__scopeId","data-v-6fa6eada"]]),P={class:"modal-header__title"},T={class:"modal-header__buttons"},q=n.defineComponent({__name:"Modal",props:{name:{type:String,required:!0},title:{type:String,required:!1,default:null},minWidth:{type:String,default:"200px"},width:{type:String,default:"600px"},minHeight:{type:String,default:"200px"},height:{type:String,default:"400px"},backdrop:{type:Boolean,default:!1},staticBackdrop:{type:Boolean,default:!1},resize:{type:Boolean,default:!0}},setup(e){const t=n.ref(!1),o=n.ref(!1),i=e,l=n.ref(null),d=n.ref(null),s=n.ref(null);let a;const p=()=>{a=a||I(x(i.width),x(i.height)),t.value=!0,n.nextTick(async()=>{l.value===null||d.value===null||(y(),l.value.style.zIndex=(w()+1).toString(),l.value.style.minWidth=i.minWidth,l.value.style.minHeight=i.minHeight,H(l.value,a),i.resize&&N(l.value,{resize:r=>{a=r}}),W(l.value,{move:r=>{a=r}}))})},m=()=>{var r;return Number(((r=l.value)==null?void 0:r.style.zIndex)??1e3)},y=()=>{if(l.value===null||o.value===!0)return;for(const c of M().values())c.deactivate();let r=w()+1;o.value=!0,l.value.style.zIndex=r.toString()},_=()=>{if(o.value=!1,l.value!==null){let r=Number(l.value.style.zIndex)-1;r<1e3&&(r=1e3),l.value.style.setProperty("z-index",r.toString())}},u=()=>{t.value=!1},g=()=>{i.staticBackdrop||u()};return n.onMounted(()=>{B(i.name,{open:p,close:u,activate:y,deactivate:_,getZIndex:m})}),n.onUnmounted(()=>{C(i.name)}),(r,c)=>(n.openBlock(),n.createElementBlock("div",null,[n.createElementVNode("div",{onPointerdown:y,ref_key:"$modal",ref:l,class:n.normalizeClass(["modal",{"modal--hidden":!t.value}])},[n.createElementVNode("div",{ref_key:"$headerWrapper",ref:d,class:"modal-header-wrapper"},[n.createElementVNode("div",{ref_key:"$header",ref:s,class:"modal-header"},[n.createElementVNode("div",P,n.toDisplayString(e.title),1),n.createElementVNode("div",T,[n.createVNode(O,{onClose:u})])],512)],512),n.renderSlot(r.$slots,"default",{},void 0,!0)],34),i.backdrop&&t.value?(n.openBlock(),n.createBlock(L,{key:0,onClose:g})):n.createCommentVNode("",!0)]))}}),ce="",Y=h(q,[["__scopeId","data-v-56a6b28c"]]),j=n.defineComponent({__name:"ModalFooter",setup(e){const t=n.ref(null);let o=!0;return n.onMounted(()=>{o=t.value!==null&&t.value.querySelectorAll("button").length>0}),(i,l)=>n.unref(o)?(n.openBlock(),n.createElementBlock("div",{key:0,ref_key:"$footerNode",ref:t,class:"modal-footer"},[n.renderSlot(i.$slots,"default",{},void 0,!0)],512)):n.createCommentVNode("",!0)}}),re="",A=h(j,[["__scopeId","data-v-0db79781"]]),de="",X={},Z={class:"modal-body"},U={class:"modal-body__content"};function D(e,t){return n.openBlock(),n.createElementBlock("div",Z,[n.createElementVNode("div",U,[n.renderSlot(e.$slots,"default",{},void 0,!0)])])}const G=h(X,[["render",D],["__scopeId","data-v-dc47cc62"]]),se="",J={},K={type:"button"};function Q(e,t){return n.openBlock(),n.createElementBlock("button",K,[n.renderSlot(e.$slots,"default",{},void 0,!0)])}const $=h(J,[["render",Q],["__scopeId","data-v-f7bd57cd"]]),ee=e=>{var t;(t=k(e))==null||t.open()},te=e=>{var t;(t=k(e))==null||t.close()};f.Modal=Y,f.ModalButton=$,f.ModalContent=G,f.ModalFooter=A,f.close=te,f.open=ee,Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=modal.umd.cjs.map
