(function(e,r){typeof exports=="object"&&typeof module<"u"?module.exports=r(require("vue"),require("lkt-string-tools"),require("lkt-events")):typeof define=="function"&&define.amd?define(["vue","lkt-string-tools","lkt-events"],r):(e=typeof globalThis<"u"?globalThis:e||self,e.LktFieldText=r(e.Vue,e.LktStringTools,e.LktEvents))})(this,function(e,r,s){"use strict";const L=["data-show-ui","data-labeled"],N=["for","innerHTML"],T={key:2,class:"lkt-field-text__main"},P=["value","type","name","id","disabled","readonly","placeholder","tabindex","autocomplete"],F=["value","type","name","id","disabled","readonly","tabindex","autocomplete"],I={key:2,class:"lkt-field__state"},K=["title"],$=["title"],D=["title"],R=["title"],H=["title"],U=["title"],q={key:3,class:"lkt-field-text__read"},j=["innerHTML","title"],z={key:0,class:"lkt-field__state"},A=["title"],O={name:"LktFieldText",inheritAttrs:!1},G=e.defineComponent({...O,props:{modelValue:{type:[String,Number],default:""},placeholder:{type:String,default:""},label:{type:String,default:""},palette:{type:String,default:""},name:{type:String,default:r.generateRandomString(16)},valid:{type:Boolean,default:!1},autocomplete:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},readMode:{type:Boolean,default:!1},allowReadModeSwitch:{type:Boolean,default:!1},tabindex:{type:Number,default:void 0},mandatory:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},reset:{type:Boolean,default:!1},resetMessage:{type:String,default:""},mandatoryMessage:{type:String,default:""},infoMessage:{type:String,default:""},errorMessage:{type:String,default:""},showPasswordMessage:{type:String,default:""},switchEditionMessage:{type:String,default:""},isTel:{type:Boolean,default:!1},isEmail:{type:Boolean,default:!1},isPassword:{type:Boolean,default:!1},isSearch:{type:Boolean,default:!1}},emits:["update:modelValue","keyup","keydown","focus","blur","click","click-info","click-error"],setup(o,{expose:J,emit:Q}){const i=Q,p=e.useSlots(),t=o,n=r.generateRandomString(16),u=e.ref(null),w=e.ref(t.modelValue),a=e.ref(t.modelValue),f=e.ref(!1),y=e.ref(!1),c=e.ref(!t.readMode),W=e.computed(()=>typeof t.valid=="function"?t.valid():t.valid),X=e.computed(()=>a.value!==w.value),B=e.computed(()=>t.reset||t.infoMessage!==""||t.errorMessage!==""||t.isPassword&&t.showPassword),g=e.computed(()=>{let l=0;return t.reset&&++l,t.infoMessage&&++l,t.isPassword&&t.showPassword&&++l,l}),Y=e.computed(()=>t.resetMessage!==""?t.resetMessage:""),Z=e.computed(()=>f.value===!0?"lkt-field__hide-password-icon":"lkt-field__show-password-icon"),_=e.computed(()=>t.autocomplete===!0?"on":"off"),M=e.computed(()=>a.value!==""),m=e.computed(()=>t.isPassword&&f.value===!0?"text":t.isEmail?"email":t.isPassword?"password":t.isTel?"tel":t.isSearch?"search":"text"),ee=e.computed(()=>{const l=["lkt-field","lkt-field-text"];return t.palette&&l.push(`lkt-field--${t.palette}`),m&&l.push(`is-${m.value}`),X.value&&l.push("is-changed"),t.disabled&&l.push("is-disabled"),y.value&&l.push("has-focus"),g.value>0&&l.push("has-icons",`has-icons-${g.value}`),l.push(W.value?"is-valid":"is-error"),l.push(t.modelValue?"is-filled":"is-empty"),l.join(" ")}),te=e.computed(()=>typeof a.value=="number"?a.value.toString():a.value),b=()=>{e.nextTick(()=>{u.value&&u.value.focus()})};e.watch(()=>t.readMode,l=>c.value=!l),e.watch(()=>t.modelValue,l=>a.value=l),e.watch(a,l=>i("update:modelValue",l));const h=()=>a.value=w.value,le=()=>a.value,V=l=>i("keyup",l,s.createLktEvent(n,{value:a.value})),C=l=>i("keydown",l,s.createLktEvent(n,{value:a.value})),E=l=>(y.value=!0)&&i("focus",l,s.createLktEvent(n,{value:a.value})),x=l=>(y.value=!1)&&i("blur",l,s.createLktEvent(n,{value:a.value})),S=l=>i("click",l,s.createLktEvent(n,{value:a.value})),ae=l=>i("click-info",l,s.createLktEvent(n,{value:a.value})),oe=l=>i("click-error",l,s.createLktEvent(n,{value:a.value})),ne=l=>f.value=!f.value,v=l=>{c.value=!c.value,c.value&&b()};return J({Identifier:n,reset:h,focus:b,value:le,isMandatory:()=>t.mandatory}),h(),(l,k)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(ee.value),"data-show-ui":B.value,"data-labeled":!e.unref(p).label},[e.unref(p).label?e.renderSlot(l.$slots,"label",{key:0}):e.createCommentVNode("",!0),e.unref(p).label?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("label",{key:1,for:e.unref(n),innerHTML:o.label},null,8,N)),c.value?(e.openBlock(),e.createElementBlock("div",T,[o.placeholder?e.withDirectives((e.openBlock(),e.createElementBlock("input",{key:0,"onUpdate:modelValue":k[0]||(k[0]=d=>a.value=d),ref:d=>u.value=d,value:a.value,type:m.value,name:o.name,id:e.unref(n),disabled:o.disabled,readonly:o.readonly,placeholder:o.placeholder,tabindex:o.tabindex,autocomplete:_.value,onKeyup:V,onKeydown:C,onFocus:E,onBlur:x,onClick:S},null,40,P)),[[e.vModelDynamic,a.value]]):e.withDirectives((e.openBlock(),e.createElementBlock("input",{key:1,"onUpdate:modelValue":k[1]||(k[1]=d=>a.value=d),ref:d=>u.value=d,value:a.value,type:m.value,name:o.name,id:e.unref(n),disabled:o.disabled,readonly:o.readonly,tabindex:o.tabindex,autocomplete:_.value,onKeyup:V,onKeydown:C,onFocus:E,onBlur:x,onClick:S},null,40,F)),[[e.vModelDynamic,a.value]]),B.value?(e.openBlock(),e.createElementBlock("div",I,[t.errorMessage?(e.openBlock(),e.createElementBlock("i",{key:0,class:"lkt-field__error-icon",title:t.errorMessage,onClick:oe},null,8,K)):e.createCommentVNode("",!0),t.infoMessage?(e.openBlock(),e.createElementBlock("i",{key:1,class:"lkt-field__info-icon",title:t.infoMessage,onClick:ae},null,8,$)):e.createCommentVNode("",!0),t.isPassword&&t.showPassword&&M.value?(e.openBlock(),e.createElementBlock("i",{key:2,class:e.normalizeClass(Z.value),title:t.showPasswordMessage,onClick:ne},null,10,D)):e.createCommentVNode("",!0),t.reset&&M.value?(e.openBlock(),e.createElementBlock("i",{key:3,class:"lkt-field__reset-icon",title:Y.value,onClick:h},null,8,R)):e.createCommentVNode("",!0),t.mandatory?(e.openBlock(),e.createElementBlock("i",{key:4,class:"lkt-field__mandatory-icon",title:t.mandatoryMessage},null,8,H)):e.createCommentVNode("",!0),o.allowReadModeSwitch?(e.openBlock(),e.createElementBlock("i",{key:5,class:"lkt-field__edit-icon",title:t.switchEditionMessage,onClick:v},null,8,U)):e.createCommentVNode("",!0)])):e.createCommentVNode("",!0)])):e.createCommentVNode("",!0),c.value?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("div",q,[e.createElementVNode("div",{class:"lkt-field-text__read-value",innerHTML:a.value,title:te.value},null,8,j),o.allowReadModeSwitch?(e.openBlock(),e.createElementBlock("div",z,[e.createElementVNode("i",{class:"lkt-field__edit-icon",title:t.switchEditionMessage,onClick:v},null,8,A)])):e.createCommentVNode("",!0)]))],10,L))}});return{install:o=>{o.component("lkt-field-text",G)}}});
