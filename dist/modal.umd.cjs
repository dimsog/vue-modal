(function(f,o){typeof exports=="object"&&typeof module<"u"?o(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],o):(f=typeof globalThis<"u"?globalThis:f||self,o(f.Modal={},f.Vue))})(this,function(f,o){"use strict";const m=new Map,b=(n,t)=>{m.set(n,t)},y=n=>{const t=m.get(n);return t===void 0?null:t},E=n=>{m.delete(n)},v=(n,t,e)=>n-e.left>-10&&n-e.left<10&&t-e.top>-10&&t-e.top<10?"top-left":e.right-n>-10&&e.right-n<10&&t-e.top>-10&&t-e.top<10?"top-right":e.bottom-t>-10&&e.bottom-t<10&&n-e.left>-10&&n-e.left<10?"bottom-left":e.bottom-t>-10&&e.bottom-t<10&&e.right-n>-10&&e.right-n<10?"bottom-right":n-e.left>-5&&n-e.left<5?"left":e.right-n>-5&&e.right-n<5?"right":t-e.top>-5&&t-e.top<5?"top":e.bottom-t>-5&&e.bottom-t<5?"bottom":null,w=(n,t,e)=>{switch(v(n,t,e)){case"left":case"right":return"col-resize";case"top":case"bottom":return"row-resize";case"top-left":case"bottom-right":return"nwse-resize";case"top-right":case"bottom-left":return"nesw-resize";default:return""}},x=(n,t)=>{let e=!1;t.addEventListener("mousemove",l=>{if(e)return;const i=t.getBoundingClientRect();t.style.cursor=w(l.clientX,l.clientY,i)}),t.addEventListener("mousedown",l=>{if(e)return;const i=l.clientX,s=l.clientY,d=t.getBoundingClientRect();let c=v(i,s,d);if(c===null)return;const a=t.clientWidth,p=t.clientHeight;let h=a,u=p,g=d.top,_=d.left;t.style.userSelect="none",document.addEventListener("mousemove",r=>{c!==null&&(c==="left"&&(_=d.left+(r.clientX-i),h=a-(r.clientX-i)),c==="right"&&(h=a+(r.clientX-i)),c==="top"&&(g=d.top+(r.clientY-s),u=p-(r.clientY-s)),c==="bottom"&&(u=p+(r.clientY-s)),c=="top-left"&&(_=d.left+(r.clientX-i),h=a-(r.clientX-i),g=d.top+(r.clientY-s),u=p-(r.clientY-s)),c=="top-right"&&(h=a+(r.clientX-i),g=d.top+(r.clientY-s),u=p-(r.clientY-s)),c=="bottom-left"&&(_=d.left+(r.clientX-i),h=a-(r.clientX-i),u=p+(r.clientY-s)),c=="bottom-right"&&(h=a+(r.clientX-i),u=p+(r.clientY-s)),t.style.width=h+"px",t.style.height=u+"px",t.style.left=_+"px",t.style.top=g+"px")}),t.addEventListener("mouseup",()=>{c=null,t.style.userSelect=""})}),n.addEventListener("mousedown",l=>{let i=l.clientX-t.getBoundingClientRect().left,s=l.clientY-t.getBoundingClientRect().top;e=!0;const d=function(c){t.style.top=c.pageY-s+"px",t.style.left=c.pageX-i+"px"};document.addEventListener("mousemove",d),n.addEventListener("mouseup",()=>{document.removeEventListener("mousemove",d),e=!1})})},k=n=>(o.pushScopeId("data-v-5d073248"),n=n(),o.popScopeId(),n),M={class:"modal-header__title"},S={class:"modal-header__buttons"},V=["onClick"],N=[k(()=>o.createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-x",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[o.createElementVNode("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.createElementVNode("path",{d:"M18 6l-12 12"}),o.createElementVNode("path",{d:"M6 6l12 12"})],-1))],B={class:"modal-body__content"},C=o.defineComponent({__name:"Modal",props:{name:{type:String,required:!0},title:{type:String,required:!1,default:null},width:{type:String,default:"600px"},height:{type:String,default:"400px"}},setup(n){const t=n,e=o.ref(!1),l=o.ref(null),i=o.ref(null),s=o.ref(null),d=o.ref(null),c=()=>{e.value=!0,o.nextTick(()=>{l.value===null||s.value==null||(l.value.style.width=t.width,l.value.style.height=t.height,l.value.style.top=document.documentElement.clientHeight/2-l.value.clientHeight/2+"px",l.value.style.left=document.documentElement.clientWidth/2-l.value.clientWidth/2+"px",d.value.style.height=`calc(100% - ${i.value.clientHeight}px)`,x(s.value,l.value))})},a=()=>{e.value=!1};return o.onMounted(()=>{b(t.name,{open:c,close:a})}),o.onUnmounted(()=>{E(t.name)}),(p,h)=>(o.openBlock(),o.createElementBlock("div",null,[e.value?(o.openBlock(),o.createElementBlock("div",{key:0,ref_key:"$modal",ref:l,class:"modal"},[o.createElementVNode("div",{ref_key:"$headerWrapper",ref:i,class:"modal-header-wrapper"},[o.createElementVNode("div",{ref_key:"$header",ref:s,class:"modal-header"},[o.createElementVNode("div",M,o.toDisplayString(n.title),1),o.createElementVNode("div",S,[o.createElementVNode("button",{type:"button",onClick:o.withModifiers(a,["prevent"])},N,8,V)])],512)],512),o.createElementVNode("div",{ref_key:"$modalBody",ref:d,class:"modal-body"},[o.createElementVNode("div",B,[o.renderSlot(p.$slots,"default",{},void 0,!0)])],512)],512)):o.createCommentVNode("",!0)]))}}),T="",z=((n,t)=>{const e=n.__vccOpts||n;for(const[l,i]of t)e[l]=i;return e})(C,[["__scopeId","data-v-5d073248"]]),L=n=>{var t;(t=y(n))==null||t.open()},R=n=>{var t;(t=y(n))==null||t.close()};f.Modal=z,f.close=R,f.open=L,Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});
