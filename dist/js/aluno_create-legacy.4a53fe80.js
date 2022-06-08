"use strict";(self["webpackChunkapi_go_gin"]=self["webpackChunkapi_go_gin"]||[]).push([[113],{2421:function(t,e,i){i.r(e),i.d(e,{default:function(){return Nt}});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"12",md:"4"}},[i("v-text-field",{attrs:{rules:t.nameRules,label:"Nome",required:""},model:{value:t.nome,callback:function(e){t.nome=e},expression:"nome"}})],1),i("v-col",{attrs:{cols:"12",md:"4"}},[i("v-text-field",{attrs:{rules:t.rules.rgRules,counter:9,label:"RG",required:""},model:{value:t.rg,callback:function(e){t.rg=e},expression:"rg"}})],1),i("v-col",{attrs:{cols:"12",md:"4"}},[i("v-text-field",{attrs:{rules:[function(){return!!t.cpf||"Informe o CPF"},function(){return 11==t.cpf.length||"CPF deve ter 11 caracteres!"},function(){return!t.cpf.match(/[A-Za-z]/g)||"Este campo pode conter somente números!"}],counter:11,label:"CPF",required:""},model:{value:t.cpf,callback:function(e){t.cpf=e},expression:"cpf"}})],1),i("v-btn",{attrs:{color:"primary"},on:{click:t.submitForm}},[t._v("Gravar")])],1)],1),i("error-component",{attrs:{errors:t.errors}}),i("success-component",{attrs:{aluno:t.aluno}}),Object.entries(t.aluno).length?i("p",[t._v("Redireciona em "+t._s(t.redireciona)+"s")]):t._e(),i("overlay-component",{attrs:{show:t.showOverlay}})],1)},s=[],r=(i(4916),i(4723),i(7601),i(1539),i(9669)),o=i.n(r),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.errors?i("div",{staticClass:"container"},t._l(t.errors,(function(e,n){return i("v-alert",{key:n,staticClass:"mt-5",attrs:{color:"red",type:"error"}},[t._v(t._s(e))])})),1):t._e()},l=[],u={props:{errors:{type:Array,required:!0}}},h=u,c=i(1001),d=i(3453),f=i.n(d),p=i(4367),g=i(3796),v=(i(6699),i(5648)),m=i(3150),b=m.Z,y=i(172),$=i(2936),S=i(8085),C=i(144),_=C["default"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),B=i(3325),x=i(1824),V=(0,B.Z)(v.Z,$.Z,_).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var t={staticClass:"v-alert__border",class:(0,g.Z)({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(b,{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(y.Z,{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(y.Z,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=(0,p.Z)((0,p.Z)({},v.Z.options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||S.Z.options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&(0,x.fK)("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}}),k=(0,c.Z)(h,a,l,!1,null,null,null),I=k.exports;f()(k,{VAlert:V});var Z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return Object.entries(t.aluno).length?i("div",{staticClass:"container"},[i("v-alert",{staticClass:"mt-5",attrs:{color:"green",type:"success"}},[t._v("O aluno "+t._s(t.aluno.nome)+" foi criado com sucesso com o ID="+t._s(t.aluno.ID))])],1):t._e()},w=[],E={props:{aluno:{type:Object,required:!0}}},D=E,z=(0,c.Z)(D,Z,w,!1,null,null,null),M=z.exports;f()(z,{VAlert:V});var F=i(3298),A={components:{ErrorComponent:I,SuccessComponent:M,OverlayComponent:F.Z},name:"AlunosCreateComponent",data:function(){return{showOverlay:!1,redireciona:5,aluno:{},errors:[],valid:!1,nome:"JOSE MANOEL SILVEIRA",rg:"321654311",cpf:"32165432166",nameRules:[function(t){return!!t||"Informe o nome"},function(t){return t.length>=10||"O nome precisa ter no mínimo 10 caracterez"}],rules:{rgRules:[function(t){return!!t||"Informe o RG"},function(t){return 9==t.length||"RG deve ser igual a 9 caracteres!"},function(t){return!t.match(/[A-Za-z]/g)||"Este campo pode conter somente números!"}],cpfRules:[function(t){return!!t||"Informe o CPF"},function(t){return 11==t.length||"CPF deve ter 11 caracteres!"}]},email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}]}},methods:{submitForm:function(){var t=this;if(this.showOverlay=!0,console.log("Submiting: ",this.nome,this.rg,this.cpf),!this.valid)return this.errors=["Verifique os campos com erro!"],void setTimeout((function(){return t.errors=[]}),5e3);o().post("/alunos",{nome:this.nome,rg:this.rg,cpf:this.cpf}).then((function(e){console.log("Result post: ",e),t.aluno=e.data.aluno})).catch((function(e){console.log("Error: ",e.response.data.error),t.errors=e.response.data})).finally((function(){t.showOverlay=!1;var e=setInterval((function(){return t.redireciona--}),1e3);setTimeout((function(){clearInterval(e),t.$router.push("/")}),5e3)}))}}},L=A,O=(i(9653),i(7941),i(5306),i(1532),i(8783),i(3948),i(4747),i(6755),i(7273),i(6290)),P=i(4589),R=["sm","md","lg","xl"],T=function(){return R.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),W=function(){return R.reduce((function(t,e){return t["offset"+(0,P.jC)(e)]={type:[String,Number],default:null},t}),{})}(),j=function(){return R.reduce((function(t,e){return t["order"+(0,P.jC)(e)]={type:[String,Number],default:null},t}),{})}(),N={col:Object.keys(T),offset:Object.keys(W),order:Object.keys(j)};function q(t,e,i){var n=t;if(null!=i&&!1!==i){if(e){var s=e.replace(t,"");n+="-".concat(s)}return"col"!==t||""!==i&&!0!==i?(n+="-".concat(i),n.toLowerCase()):n.toLowerCase()}}var G=new Map,H=C["default"].extend({name:"v-col",functional:!0,props:(0,p.Z)((0,p.Z)((0,p.Z)((0,p.Z)({cols:{type:[Boolean,String,Number],default:!1}},T),{},{offset:{type:[String,Number],default:null}},W),{},{order:{type:[String,Number],default:null}},j),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var i=e.props,n=e.data,s=e.children,r=(e.parent,"");for(var o in i)r+=String(i[o]);var a=G.get(r);return a||function(){var t,e;for(e in a=[],N)N[e].forEach((function(t){var n=i[t],s=q(e,t,n);s&&a.push(s)}));var n=a.some((function(t){return t.startsWith("col-")}));a.push((t={col:!n||!i.cols},(0,g.Z)(t,"col-".concat(i.cols),i.cols),(0,g.Z)(t,"offset-".concat(i.offset),i.offset),(0,g.Z)(t,"order-".concat(i.order),i.order),(0,g.Z)(t,"align-self-".concat(i.alignSelf),i.alignSelf),t)),G.set(r,a)}(),t(i.tag,(0,O.ZP)(n,{class:a}),s)}}),K=i(9846),U=(i(2023),i(2479),i(7327),i(9826),i(6210)),X=i(6257),J=(0,B.Z)(U.Z,(0,X.J)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",(function(i){e.$set(e.errorBag,t._uid,i)}),{immediate:!0})},n={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(function(s){s&&(e.errorBag.hasOwnProperty(t._uid)||(n.valid=i(t)))})):n.valid=i(t),n},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var i=this.watchers.find((function(t){return t._uid===e._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:(0,p.Z)({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}}),Q=(i(2222),["sm","md","lg","xl"]),Y=["start","end","center"];function tt(t,e){return Q.reduce((function(i,n){return i[t+(0,P.jC)(n)]=e(),i}),{})}var et=function(t){return[].concat(Y,["baseline","stretch"]).includes(t)},it=tt("align",(function(){return{type:String,default:null,validator:et}})),nt=function(t){return[].concat(Y,["space-between","space-around"]).includes(t)},st=tt("justify",(function(){return{type:String,default:null,validator:nt}})),rt=function(t){return[].concat(Y,["space-between","space-around","stretch"]).includes(t)},ot=tt("alignContent",(function(){return{type:String,default:null,validator:rt}})),at={align:Object.keys(it),justify:Object.keys(st),alignContent:Object.keys(ot)},lt={align:"align",justify:"justify",alignContent:"align-content"};function ut(t,e,i){var n=lt[t];if(null!=i){if(e){var s=e.replace(t,"");n+="-".concat(s)}return n+="-".concat(i),n.toLowerCase()}}var ht=new Map,ct=C["default"].extend({name:"v-row",functional:!0,props:(0,p.Z)((0,p.Z)((0,p.Z)({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:et}},it),{},{justify:{type:String,default:null,validator:nt}},st),{},{alignContent:{type:String,default:null,validator:rt}},ot),render:function(t,e){var i=e.props,n=e.data,s=e.children,r="";for(var o in i)r+=String(i[o]);var a=ht.get(r);return a||function(){var t,e;for(e in a=[],at)at[e].forEach((function(t){var n=i[t],s=ut(e,t,n);s&&a.push(s)}));a.push((t={"no-gutters":i.noGutters,"row--dense":i.dense},(0,g.Z)(t,"align-".concat(i.align),i.align),(0,g.Z)(t,"justify-".concat(i.justify),i.justify),(0,g.Z)(t,"align-content-".concat(i.alignContent),i.alignContent),t)),ht.set(r,a)}(),t(i.tag,(0,O.ZP)(n,{staticClass:"row",class:a}),s)}}),dt=i(3274),ft=i(8932),pt=(i(4944),i(3792),i(9714),i(3304),i(1249),i(3123),i(6952)),gt=(0,B.Z)(S.Z).extend({name:"v-label",functional:!0,props:{absolute:Boolean,color:{type:String,default:"primary"},disabled:Boolean,focused:Boolean,for:String,left:{type:[Number,String],default:0},right:{type:[Number,String],default:"auto"},value:Boolean},render:function(t,e){var i=e.children,n=e.listeners,s=e.props,r={staticClass:"v-label",class:(0,p.Z)({"v-label--active":s.value,"v-label--is-disabled":s.disabled},(0,S.X)(e)),attrs:{for:s.for,"aria-hidden":!s.for},on:n,style:{left:(0,P.kb)(s.left),right:(0,P.kb)(s.right),position:s.absolute?"absolute":"relative"},ref:"label"};return t("label",pt.Z.options.methods.setTextColor(s.focused&&s.color,r),i)}}),vt=gt,mt=(0,B.Z)(pt.Z,S.Z).extend({name:"v-messages",props:{value:{type:Array,default:function(){return[]}}},methods:{genChildren:function(){return this.$createElement("transition-group",{staticClass:"v-messages__wrapper",attrs:{name:"message-transition",tag:"div"}},this.value.map(this.genMessage))},genMessage:function(t,e){return this.$createElement("div",{staticClass:"v-messages__message",key:e},(0,P.z9)(this,"default",{message:t,key:e})||[t])}},render:function(t){return t("div",this.setTextColor(this.color,{staticClass:"v-messages",class:this.themeClasses}),[this.genChildren()])}}),bt=mt,yt=i(9726),$t=(i(7042),(0,B.Z)(pt.Z,(0,X.f)("form"),S.Z)),St=$t.extend({name:"validatable",props:{disabled:Boolean,error:Boolean,errorCount:{type:[Number,String],default:1},errorMessages:{type:[String,Array],default:function(){return[]}},messages:{type:[String,Array],default:function(){return[]}},readonly:Boolean,rules:{type:Array,default:function(){return[]}},success:Boolean,successMessages:{type:[String,Array],default:function(){return[]}},validateOnBlur:Boolean,value:{required:!1}},data:function(){return{errorBucket:[],hasColor:!1,hasFocused:!1,hasInput:!1,isFocused:!1,isResetting:!1,lazyValue:this.value,valid:!1}},computed:{computedColor:function(){if(!this.isDisabled)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},hasError:function(){return this.internalErrorMessages.length>0||this.errorBucket.length>0||this.error},hasSuccess:function(){return this.internalSuccessMessages.length>0||this.success},externalError:function(){return this.internalErrorMessages.length>0||this.error},hasMessages:function(){return this.validationTarget.length>0},hasState:function(){return!this.isDisabled&&(this.hasSuccess||this.shouldValidate&&this.hasError)},internalErrorMessages:function(){return this.genInternalMessages(this.errorMessages)},internalMessages:function(){return this.genInternalMessages(this.messages)},internalSuccessMessages:function(){return this.genInternalMessages(this.successMessages)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("input",t)}},isDisabled:function(){return this.disabled||!!this.form&&this.form.disabled},isInteractive:function(){return!this.isDisabled&&!this.isReadonly},isReadonly:function(){return this.readonly||!!this.form&&this.form.readonly},shouldValidate:function(){return!!this.externalError||!this.isResetting&&(this.validateOnBlur?this.hasFocused&&!this.isFocused:this.hasInput||this.hasFocused)},validations:function(){return this.validationTarget.slice(0,Number(this.errorCount))},validationState:function(){if(!this.isDisabled)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":this.hasColor?this.computedColor:void 0},validationTarget:function(){return this.internalErrorMessages.length>0?this.internalErrorMessages:this.successMessages&&this.successMessages.length>0?this.internalSuccessMessages:this.messages&&this.messages.length>0?this.internalMessages:this.shouldValidate?this.errorBucket:[]}},watch:{rules:{handler:function(t,e){(0,P.vZ)(t,e)||this.validate()},deep:!0},internalValue:function(){this.hasInput=!0,this.validateOnBlur||this.$nextTick(this.validate)},isFocused:function(t){t||this.isDisabled||(this.hasFocused=!0,this.validateOnBlur&&this.$nextTick(this.validate))},isResetting:function(){var t=this;setTimeout((function(){t.hasInput=!1,t.hasFocused=!1,t.isResetting=!1,t.validate()}),0)},hasError:function(t){this.shouldValidate&&this.$emit("update:error",t)},value:function(t){this.lazyValue=t}},beforeMount:function(){this.validate()},created:function(){this.form&&this.form.register(this)},beforeDestroy:function(){this.form&&this.form.unregister(this)},methods:{genInternalMessages:function(t){return t?Array.isArray(t)?t:[t]:[]},reset:function(){this.isResetting=!0,this.internalValue=Array.isArray(this.internalValue)?[]:null},resetValidation:function(){this.isResetting=!0},validate:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0,i=[];e=e||this.internalValue,t&&(this.hasInput=this.hasFocused=!0);for(var n=0;n<this.rules.length;n++){var s=this.rules[n],r="function"===typeof s?s(e):s;!1===r||"string"===typeof r?i.push(r||""):"boolean"!==typeof r&&(0,x.N6)("Rules should return a string or boolean, received '".concat((0,yt.Z)(r),"' instead"),this)}return this.errorBucket=i,this.valid=0===i.length,this.valid}}}),Ct=(0,B.Z)(U.Z,St),_t=Ct.extend().extend({name:"v-input",inheritAttrs:!1,props:{appendIcon:String,backgroundColor:{type:String,default:""},dense:Boolean,height:[Number,String],hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,id:String,label:String,loading:Boolean,persistentHint:Boolean,prependIcon:String,value:null},data:function(){return{lazyValue:this.value,hasMouseDown:!1}},computed:{classes:function(){return(0,p.Z)({"v-input--has-state":this.hasState,"v-input--hide-details":!this.showDetails,"v-input--is-label-active":this.isLabelActive,"v-input--is-dirty":this.isDirty,"v-input--is-disabled":this.isDisabled,"v-input--is-focused":this.isFocused,"v-input--is-loading":!1!==this.loading&&null!=this.loading,"v-input--is-readonly":this.isReadonly,"v-input--dense":this.dense,"v-input--hide-spin-buttons":this.hideSpinButtons},this.themeClasses)},computedId:function(){return this.id||"input-".concat(this._uid)},hasDetails:function(){return this.messagesToDisplay.length>0},hasHint:function(){return!this.hasMessages&&!!this.hint&&(this.persistentHint||this.isFocused)},hasLabel:function(){return!(!this.$slots.label&&!this.label)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit(this.$_modelEvent,t)}},isDirty:function(){return!!this.lazyValue},isLabelActive:function(){return this.isDirty},messagesToDisplay:function(){var t=this;return this.hasHint?[this.hint]:this.hasMessages?this.validations.map((function(e){if("string"===typeof e)return e;var i=e(t.internalValue);return"string"===typeof i?i:""})).filter((function(t){return""!==t})):[]},showDetails:function(){return!1===this.hideDetails||"auto"===this.hideDetails&&this.hasDetails}},watch:{value:function(t){this.lazyValue=t}},beforeCreate:function(){this.$_modelEvent=this.$options.model&&this.$options.model.event||"input"},methods:{genContent:function(){return[this.genPrependSlot(),this.genControl(),this.genAppendSlot()]},genControl:function(){return this.$createElement("div",{staticClass:"v-input__control",attrs:{title:this.attrs$.title}},[this.genInputSlot(),this.genMessages()])},genDefaultSlot:function(){return[this.genLabel(),this.$slots.default]},genIcon:function(t,e){var i=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=this["".concat(t,"Icon")],r="click:".concat((0,P.GL)(t)),o=!(!this.listeners$[r]&&!e),a=(0,O.ZP)({attrs:{"aria-label":o?(0,P.GL)(t).split("-")[0]+" icon":void 0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,light:this.light},on:o?{click:function(t){t.preventDefault(),t.stopPropagation(),i.$emit(r,t),e&&e(t)},mouseup:function(t){t.preventDefault(),t.stopPropagation()}}:void 0},n);return this.$createElement("div",{staticClass:"v-input__icon",class:t?"v-input__icon--".concat((0,P.GL)(t)):void 0},[this.$createElement(y.Z,a,s)])},genInputSlot:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor,{staticClass:"v-input__slot",style:{height:(0,P.kb)(this.height)},on:{click:this.onClick,mousedown:this.onMouseDown,mouseup:this.onMouseUp},ref:"input-slot"}),[this.genDefaultSlot()])},genLabel:function(){return this.hasLabel?this.$createElement(vt,{props:{color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:this.hasState,for:this.computedId,light:this.light}},this.$slots.label||this.label):null},genMessages:function(){var t=this;return this.showDetails?this.$createElement(bt,{props:{color:this.hasHint?"":this.validationState,dark:this.dark,light:this.light,value:this.messagesToDisplay},attrs:{role:this.hasMessages?"alert":null},scopedSlots:{default:function(e){return(0,P.z9)(t,"message",e)}}}):null},genSlot:function(t,e,i){if(!i.length)return null;var n="".concat(t,"-").concat(e);return this.$createElement("div",{staticClass:"v-input__".concat(n),ref:n},i)},genPrependSlot:function(){var t=[];return this.$slots.prepend?t.push(this.$slots.prepend):this.prependIcon&&t.push(this.genIcon("prepend")),this.genSlot("prepend","outer",t)},genAppendSlot:function(){var t=[];return this.$slots.append?t.push(this.$slots.append):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","outer",t)},onClick:function(t){this.$emit("click",t)},onMouseDown:function(t){this.hasMouseDown=!0,this.$emit("mousedown",t)},onMouseUp:function(t){this.hasMouseDown=!1,this.$emit("mouseup",t)}},render:function(t){return t("div",this.setTextColor(this.validationState,{staticClass:"v-input",class:this.classes}),this.genContent())}}),Bt=_t,xt=(0,B.Z)(S.Z).extend({name:"v-counter",functional:!0,props:{value:{type:[Number,String],default:""},max:[Number,String]},render:function(t,e){var i=e.props,n=parseInt(i.max,10),s=parseInt(i.value,10),r=n?"".concat(s," / ").concat(n):String(i.value),o=n&&s>n;return t("div",{staticClass:"v-counter",class:(0,p.Z)({"error--text":o},(0,S.X)(e))},r)}}),Vt=xt,kt=i(8083);function It(t){return C["default"].extend({name:"intersectable",data:function(){return{isIntersecting:!1}},mounted:function(){kt.Z.inserted(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},destroyed:function(){kt.Z.unbind(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},methods:{onObserve:function(e,i,n){if(this.isIntersecting=n,n)for(var s=0,r=t.onVisible.length;s<r;s++){var o=this[t.onVisible[s]];"function"!==typeof o?(0,x.Kd)(t.onVisible[s]+" method is not available on the instance but referenced in intersectable mixin options"):o()}}}})}i(9253);var Zt=i(5827),wt=i(3536),Et=i(1431),Dt=(0,B.Z)(pt.Z,(0,wt.d)(["absolute","fixed","top","bottom"]),Et.Z,S.Z),zt=Dt.extend({name:"v-progress-linear",directives:{intersect:kt.Z},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:(0,P.kb)(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:(0,P.kb)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t,e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return t={opacity:e},(0,g.Z)(t,this.isReversed?"right":"left",(0,P.kb)(this.normalizedValue,"%")),(0,g.Z)(t,"width",(0,P.kb)(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")),t},classes:function(){return(0,p.Z)({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible},this.themeClasses)},computedTransition:function(){return this.indeterminate?Zt.Z5:Zt.Qn},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=(0,P.kb)(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var t=(0,P.z9)(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:(0,g.Z)({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect(),i=e.width;this.internalValue=t.offsetX/i*100}},onObserve:function(t,e,i){this.isVisible=i},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){var e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?(0,P.kb)(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),Mt=zt,Ft=C["default"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(Mt,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),At=i(549),Lt=i(6286),Ot=i(1706),Pt=["title"],Rt=(0,B.Z)(Bt,It({onVisible:["onResize","tryAutofocus"]}),Ft),Tt=["color","file","time","date","datetime-local","week","month"],Wt=Rt.extend().extend({name:"v-text-field",directives:{resize:At.Z,ripple:Lt.Z},inheritAttrs:!1,props:{appendOuterIcon:String,autofocus:Boolean,clearable:Boolean,clearIcon:{type:String,default:"$clear"},counter:[Boolean,Number,String],counterValue:Function,filled:Boolean,flat:Boolean,fullWidth:Boolean,label:String,outlined:Boolean,placeholder:String,prefix:String,prependInnerIcon:String,persistentPlaceholder:Boolean,reverse:Boolean,rounded:Boolean,shaped:Boolean,singleLine:Boolean,solo:Boolean,soloInverted:Boolean,suffix:String,type:{type:String,default:"text"}},data:function(){return{badInput:!1,labelWidth:0,prefixWidth:0,prependWidth:0,initialValue:null,isBooted:!1,isClearing:!1}},computed:{classes:function(){return(0,p.Z)((0,p.Z)({},Bt.options.computed.classes.call(this)),{},{"v-text-field":!0,"v-text-field--full-width":this.fullWidth,"v-text-field--prefix":this.prefix,"v-text-field--single-line":this.isSingle,"v-text-field--solo":this.isSolo,"v-text-field--solo-inverted":this.soloInverted,"v-text-field--solo-flat":this.flat,"v-text-field--filled":this.filled,"v-text-field--is-booted":this.isBooted,"v-text-field--enclosed":this.isEnclosed,"v-text-field--reverse":this.reverse,"v-text-field--outlined":this.outlined,"v-text-field--placeholder":this.placeholder,"v-text-field--rounded":this.rounded,"v-text-field--shaped":this.shaped})},computedColor:function(){var t=St.options.computed.computedColor.call(this);return this.soloInverted&&this.isFocused?this.color||"primary":t},computedCounterValue:function(){return"function"===typeof this.counterValue?this.counterValue(this.internalValue):(0,ft.Z)((this.internalValue||"").toString()).length},hasCounter:function(){return!1!==this.counter&&null!=this.counter},hasDetails:function(){return Bt.options.computed.hasDetails.call(this)||this.hasCounter},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("input",this.lazyValue)}},isDirty:function(){var t;return(null==(t=this.lazyValue)?void 0:t.toString().length)>0||this.badInput},isEnclosed:function(){return this.filled||this.isSolo||this.outlined},isLabelActive:function(){return this.isDirty||Tt.includes(this.type)},isSingle:function(){return this.isSolo||this.singleLine||this.fullWidth||this.filled&&!this.hasLabel},isSolo:function(){return this.solo||this.soloInverted},labelPosition:function(){var t=this.prefix&&!this.labelValue?this.prefixWidth:0;return this.labelValue&&this.prependWidth&&(t-=this.prependWidth),this.$vuetify.rtl===this.reverse?{left:t,right:"auto"}:{left:"auto",right:t}},showLabel:function(){return this.hasLabel&&!(this.isSingle&&this.labelValue)},labelValue:function(){return this.isFocused||this.isLabelActive||this.persistentPlaceholder}},watch:{outlined:"setLabelWidth",label:function(){this.$nextTick(this.setLabelWidth)},prefix:function(){this.$nextTick(this.setPrefixWidth)},isFocused:"updateValue",value:function(t){this.lazyValue=t}},created:function(){this.$attrs.hasOwnProperty("box")&&(0,x.fK)("box","filled",this),this.$attrs.hasOwnProperty("browser-autocomplete")&&(0,x.fK)("browser-autocomplete","autocomplete",this),this.shaped&&!(this.filled||this.outlined||this.isSolo)&&(0,x.Kd)("shaped should be used with either filled or outlined",this)},mounted:function(){var t=this;this.$watch((function(){return t.labelValue}),this.setLabelWidth),this.autofocus&&this.tryAutofocus(),requestAnimationFrame((function(){t.isBooted=!0,requestAnimationFrame((function(){t.isIntersecting||t.onResize()}))}))},methods:{focus:function(){this.onFocus()},blur:function(t){var e=this;window.requestAnimationFrame((function(){e.$refs.input&&e.$refs.input.blur()}))},clearableCallback:function(){var t=this;this.$refs.input&&this.$refs.input.focus(),this.$nextTick((function(){return t.internalValue=null}))},genAppendSlot:function(){var t=[];return this.$slots["append-outer"]?t.push(this.$slots["append-outer"]):this.appendOuterIcon&&t.push(this.genIcon("appendOuter")),this.genSlot("append","outer",t)},genPrependInnerSlot:function(){var t=[];return this.$slots["prepend-inner"]?t.push(this.$slots["prepend-inner"]):this.prependInnerIcon&&t.push(this.genIcon("prependInner")),this.genSlot("prepend","inner",t)},genIconSlot:function(){var t=[];return this.$slots.append?t.push(this.$slots.append):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","inner",t)},genInputSlot:function(){var t=Bt.options.methods.genInputSlot.call(this),e=this.genPrependInnerSlot();return e&&(t.children=t.children||[],t.children.unshift(e)),t},genClearIcon:function(){return this.clearable?this.isDirty?this.genSlot("append","inner",[this.genIcon("clear",this.clearableCallback)]):this.genSlot("append","inner",[this.$createElement("div")]):null},genCounter:function(){var t,e,i;if(!this.hasCounter)return null;var n=!0===this.counter?this.attrs$.maxlength:this.counter,s={dark:this.dark,light:this.light,max:n,value:this.computedCounterValue};return null!=(t=null==(e=(i=this.$scopedSlots).counter)?void 0:e.call(i,{props:s}))?t:this.$createElement(Vt,{props:s})},genControl:function(){return Bt.options.methods.genControl.call(this)},genDefaultSlot:function(){return[this.genFieldset(),this.genTextFieldSlot(),this.genClearIcon(),this.genIconSlot(),this.genProgress()]},genFieldset:function(){return this.outlined?this.$createElement("fieldset",{attrs:{"aria-hidden":!0}},[this.genLegend()]):null},genLabel:function(){if(!this.showLabel)return null;var t={props:{absolute:!0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:!this.isSingle&&(this.isFocused||!!this.validationState),for:this.computedId,left:this.labelPosition.left,light:this.light,right:this.labelPosition.right,value:this.labelValue}};return this.$createElement(vt,t,this.$slots.label||this.label)},genLegend:function(){var t=this.singleLine||!this.labelValue&&!this.isDirty?0:this.labelWidth,e=this.$createElement("span",{domProps:{innerHTML:"&#8203;"},staticClass:"notranslate"});return this.$createElement("legend",{style:{width:this.isSingle?void 0:(0,P.kb)(t)}},[e])},genInput:function(){var t=Object.assign({},this.listeners$);delete t.change;var e=this.attrs$,i=(e.title,(0,dt.Z)(e,Pt));return this.$createElement("input",{style:{},domProps:{value:"number"===this.type&&Object.is(this.lazyValue,-0)?"-0":this.lazyValue},attrs:(0,p.Z)((0,p.Z)({},i),{},{autofocus:this.autofocus,disabled:this.isDisabled,id:this.computedId,placeholder:this.persistentPlaceholder||this.isFocused||!this.hasLabel?this.placeholder:void 0,readonly:this.isReadonly,type:this.type}),on:Object.assign(t,{blur:this.onBlur,input:this.onInput,focus:this.onFocus,keydown:this.onKeyDown}),ref:"input",directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]})},genMessages:function(){if(!this.showDetails)return null;var t=Bt.options.methods.genMessages.call(this),e=this.genCounter();return this.$createElement("div",{staticClass:"v-text-field__details"},[t,e])},genTextFieldSlot:function(){return this.$createElement("div",{staticClass:"v-text-field__slot"},[this.genLabel(),this.prefix?this.genAffix("prefix"):null,this.genInput(),this.suffix?this.genAffix("suffix"):null])},genAffix:function(t){return this.$createElement("div",{class:"v-text-field__".concat(t),ref:t},this[t])},onBlur:function(t){var e=this;this.isFocused=!1,t&&this.$nextTick((function(){return e.$emit("blur",t)}))},onClick:function(){this.isFocused||this.isDisabled||!this.$refs.input||this.$refs.input.focus()},onFocus:function(t){if(this.$refs.input){var e=(0,Ot.e)(this.$el);if(e)return e.activeElement!==this.$refs.input?this.$refs.input.focus():void(this.isFocused||(this.isFocused=!0,t&&this.$emit("focus",t)))}},onInput:function(t){var e=t.target;this.internalValue=e.value,this.badInput=e.validity&&e.validity.badInput},onKeyDown:function(t){t.keyCode===P.Do.enter&&this.lazyValue!==this.initialValue&&(this.initialValue=this.lazyValue,this.$emit("change",this.initialValue)),this.$emit("keydown",t)},onMouseDown:function(t){t.target!==this.$refs.input&&(t.preventDefault(),t.stopPropagation()),Bt.options.methods.onMouseDown.call(this,t)},onMouseUp:function(t){this.hasMouseDown&&this.focus(),Bt.options.methods.onMouseUp.call(this,t)},setLabelWidth:function(){this.outlined&&(this.labelWidth=this.$refs.label?Math.min(.75*this.$refs.label.scrollWidth+6,this.$el.offsetWidth-24):0)},setPrefixWidth:function(){this.$refs.prefix&&(this.prefixWidth=this.$refs.prefix.offsetWidth)},setPrependWidth:function(){this.outlined&&this.$refs["prepend-inner"]&&(this.prependWidth=this.$refs["prepend-inner"].offsetWidth)},tryAutofocus:function(){if(!this.autofocus||"undefined"===typeof document||!this.$refs.input)return!1;var t=(0,Ot.e)(this.$el);return!(!t||t.activeElement===this.$refs.input)&&(this.$refs.input.focus(),!0)},updateValue:function(t){this.hasColor=t,t?this.initialValue=this.lazyValue:this.initialValue!==this.lazyValue&&this.$emit("change",this.lazyValue)},onResize:function(){this.setLabelWidth(),this.setPrefixWidth(),this.setPrependWidth()}}}),jt=(0,c.Z)(L,n,s,!1,null,null,null),Nt=jt.exports;f()(jt,{VBtn:m.Z,VCol:H,VContainer:K.Z,VForm:J,VRow:ct,VTextField:Wt})}}]);
//# sourceMappingURL=aluno_create-legacy.4a53fe80.js.map