(function(p,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],t):(p=typeof globalThis<"u"?globalThis:p||self,t(p.modal={},p.Vue))})(this,function(p,t){"use strict";const k=t.defineComponent({__name:"ModalBackdrop",emits:["close"],setup(e,{emit:o}){const n=t.ref(null),l=o,i=()=>{n.value.style.width=document.documentElement.clientWidth+"px",n.value.style.height=document.documentElement.clientHeight+"px"},r=()=>{l("close"),document.body.style.overflow=""};return t.onMounted(()=>{i(),window.addEventListener("resize",i),document.body.style.overflow="hidden"}),t.onUnmounted(()=>{document.body.style.overflow="",window.removeEventListener("resize",i)}),(d,s)=>(t.openBlock(),t.createElementBlock("div",{ref_key:"$backdrop",ref:n,onClick:r,class:"backdrop"},null,512))}}),D="",_=(e,o)=>{const n=e.__vccOpts||e;for(const[l,i]of o)n[l]=i;return n},w=_(k,[["__scopeId","data-v-a9a01d98"]]),m=new Map,x=(e,o)=>{m.set(e,o)},g=e=>{const o=m.get(e);return o===void 0?null:o},M=e=>{m.delete(e)},b=(e,o,n)=>e-n.left>-10&&e-n.left<10&&o-n.top>-10&&o-n.top<10?"top-left":n.right-e>-10&&n.right-e<10&&o-n.top>-10&&o-n.top<10?"top-right":n.bottom-o>-10&&n.bottom-o<10&&e-n.left>-10&&e-n.left<10?"bottom-left":n.bottom-o>-10&&n.bottom-o<10&&n.right-e>-10&&n.right-e<10?"bottom-right":e-n.left>-5&&e-n.left<5?"left":n.right-e>-5&&n.right-e<5?"right":o-n.top>-5&&o-n.top<5?"top":n.bottom-o>-5&&n.bottom-o<5?"bottom":null,B=(e,o,n)=>{switch(b(e,o,n)){case"left":case"right":return"col-resize";case"top":case"bottom":return"row-resize";case"top-left":case"bottom-right":return"nwse-resize";case"top-right":case"bottom-left":return"nesw-resize";default:return""}},E=(e,o)=>{e.addEventListener("mousemove",n=>{const l=e.getBoundingClientRect();e.style.cursor=B(n.clientX,n.clientY,l)}),e.addEventListener("mousedown",n=>{const l=n.clientX,i=n.clientY,r=e.getBoundingClientRect();let d=b(l,i,r);if(d===null)return;const s=e.clientWidth,u=e.clientHeight;let a=s,f=u,h=r.top,y=r.left;document.body.style.userSelect="none",document.body.style.setProperty("-webkit-user-select","none"),document.addEventListener("mousemove",c=>{d!==null&&(d==="left"&&(y=r.left+(c.clientX-l),a=s-(c.clientX-l)),d==="right"&&(a=s+(c.clientX-l)),d==="top"&&(h=r.top+(c.clientY-i),f=u-(c.clientY-i)),d==="bottom"&&(f=u+(c.clientY-i)),d=="top-left"&&(y=r.left+(c.clientX-l),a=s-(c.clientX-l),h=r.top+(c.clientY-i),f=u-(c.clientY-i)),d=="top-right"&&(a=s+(c.clientX-l),h=r.top+(c.clientY-i),f=u-(c.clientY-i)),d=="bottom-left"&&(y=r.left+(c.clientX-l),a=s-(c.clientX-l),f=u+(c.clientY-i)),d=="bottom-right"&&(a=s+(c.clientX-l),f=u+(c.clientY-i)),e.style.width=a+"px",e.style.height=f+"px",e.style.left=y+"px",e.style.top=h+"px",o({x:e.getBoundingClientRect().x,y:e.getBoundingClientRect().y,width:e.clientWidth,height:e.clientHeight}))}),e.addEventListener("mouseup",()=>{d=null,document.body.style.userSelect="none",document.body.style.setProperty("-webkit-user-select","")})})},v=(e,o)=>{e.querySelector(".modal-header").addEventListener("mousedown",l=>{let i=l.clientX-e.getBoundingClientRect().left,r=l.clientY-e.getBoundingClientRect().top;const d=function(s){e.style.top=s.clientY-r+"px",e.style.left=s.clientX-i+"px",document.body.style.userSelect="none",document.body.style.setProperty("-webkit-user-select","none"),o({x:e.getBoundingClientRect().x,y:e.getBoundingClientRect().y,width:e.clientWidth,height:e.clientHeight})};document.addEventListener("mousemove",d),document.addEventListener("mouseup",()=>{document.removeEventListener("mousemove",d),document.body.style.userSelect="",document.body.style.setProperty("-webkit-user-select","")},{once:!0})})},S=(e,o)=>{e.style.width=o.width+"px",e.style.height=o.height+"px",e.style.top=o.y!==null?o.y+"px":document.documentElement.clientHeight/2-e.clientHeight/2+"px",e.style.left=o.x!==null?o.x+"px":document.documentElement.clientWidth/2-e.clientWidth/2+"px"},C=e=>(t.pushScopeId("data-v-d46a237b"),e=e(),t.popScopeId(),e),N={class:"modal-header__title"},z={class:"modal-header__buttons"},V=[C(()=>t.createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-x",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[t.createElementVNode("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),t.createElementVNode("path",{d:"M18 6l-12 12"}),t.createElementVNode("path",{d:"M6 6l12 12"})],-1))],W=t.defineComponent({__name:"Modal",props:{name:{type:String,required:!0},title:{type:String,required:!1,default:null},minWidth:{type:String,default:"200px"},width:{type:String,default:"600px"},minHeight:{type:String,default:"200px"},height:{type:String,default:"400px"},backdrop:{type:Boolean,default:!1},resize:{type:Boolean,default:!0}},setup(e){const o=t.ref(!1),n=e,l=t.ref(null),i=t.ref(null),r=t.ref(null);let d=null;const s=()=>{d=d||{x:document.documentElement.clientWidth/2-Number(n.width.replace("px",""))/2,y:window.innerHeight/2-Number(n.height.replace("px",""))/2,width:Number(n.width.replace("px","")),height:Number(n.height.replace("px",""))},o.value=!0,t.nextTick(async()=>{l.value===null||i.value===null||(l.value.style.minWidth=n.minWidth,l.value.style.minHeight=n.minHeight,S(l.value,d),n.resize&&E(l.value,a=>{d=a}),v(l.value,a=>{d=a}))})},u=()=>{o.value=!1};return t.onMounted(()=>{x(n.name,{open:s,close:u})}),t.onUnmounted(()=>{M(n.name)}),(a,f)=>(t.openBlock(),t.createElementBlock("div",null,[t.createElementVNode("div",{ref_key:"$modal",ref:l,class:t.normalizeClass(["modal",{"modal--hidden":!o.value}])},[t.createElementVNode("div",{ref_key:"$headerWrapper",ref:i,class:"modal-header-wrapper"},[t.createElementVNode("div",{ref_key:"$header",ref:r,class:"modal-header"},[t.createElementVNode("div",N,t.toDisplayString(e.title),1),t.createElementVNode("div",z,[t.createElementVNode("button",{type:"button",onClick:t.withModifiers(u,["prevent"])},V)])],512)],512),t.renderSlot(a.$slots,"default",{},void 0,!0)],2),n.backdrop&&o.value?(t.openBlock(),t.createBlock(w,{key:0,onClose:u})):t.createCommentVNode("",!0)]))}}),J="",H=_(W,[["__scopeId","data-v-d46a237b"]]),L=t.defineComponent({__name:"ModalFooter",setup(e){const o=t.ref(null);let n=!0;return t.onMounted(()=>{n=o.value!==null&&o.value.querySelectorAll("button").length>0}),(l,i)=>t.unref(n)?(t.openBlock(),t.createElementBlock("div",{key:0,ref_key:"$footerNode",ref:o,class:"modal-footer"},[t.renderSlot(l.$slots,"default",{},void 0,!0)],512)):t.createCommentVNode("",!0)}}),K="",R=_(L,[["__scopeId","data-v-0db79781"]]),Q="",I={},T={class:"modal-body"},q={class:"modal-body__content"};function F(e,o){return t.openBlock(),t.createElementBlock("div",T,[t.createElementVNode("div",q,[t.renderSlot(e.$slots,"default",{},void 0,!0)])])}const j=_(I,[["render",F],["__scopeId","data-v-dc47cc62"]]),Z="",O={},A={type:"button"};function P(e,o){return t.openBlock(),t.createElementBlock("button",A,[t.renderSlot(e.$slots,"default",{},void 0,!0)])}const U=_(O,[["render",P],["__scopeId","data-v-f7bd57cd"]]),X=e=>{var o;(o=g(e))==null||o.open()},Y=e=>{var o;(o=g(e))==null||o.close()};p.Modal=H,p.ModalButton=U,p.ModalContent=j,p.ModalFooter=R,p.close=Y,p.open=X,Object.defineProperty(p,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=modal.umd.cjs.map
