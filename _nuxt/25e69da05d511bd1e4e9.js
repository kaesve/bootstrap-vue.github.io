(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{322:function(t,e,n){"use strict";var r=n(18);e.a={data:function(){return{scrollTimout:null}},computed:{content:function(){return this.$route.params.slug&&this._content[this.$route.params.slug]||{}}},head:function(){return{title:(this.meta&&this.meta.title||"Docs")+" - BootstrapVue"}},mounted:function(){clearTimeout(this.scrollTimeout),this.scrollTimeout=null,this.focusScroll(),this.$root.$emit("setTOC",this.readme)},updated:function(){clearTimeout(this.scrollTimeout),this.scrollTimeout=null,this.focusScroll()},beforeDestroy:function(){this.$root.$emit("setTOC","")},methods:{focusScroll:function(){var t=this,e=this.$route.hash;this.$nextTick(function(){var n=void 0;e&&(n=t.$el.querySelector('[id="'+e.replace("#","")+'"]'),t.scrollIntoView(n)),n||(n=t.$el.querySelector("h1")),n&&(n.tabIndex=-1,n.focus())})},scrollIntoView:function(t){var e=this;if(t){var n=document.scrollingElement||document.documentElement||document.body;this.scrollTimeout=setTimeout(function(){Object(r.d)(n,Object(r.c)(t)-70,100),e.scrollTimeout=null},100)}}}}},349:function(t,e,n){var r={"./color-variants/README.md":[430,64],"./images/README.md":[429,63],"./router-links/README.md":[428,62],"./size-props/README.md":[427,61],"./spacing-classes/README.md":[426,60],"./starter-templates/README.md":[425,59],"./utility-classes/README.md":[424,58],"./validation/README.md":[423,57]};function o(t){var e=r[t];return e?n.e(e[1]).then(function(){var t=n(e[0]);return"object"==typeof t&&t&&t.__esModule?t:Object.assign({},"object"==typeof t&&t,{default:t})}):Promise.resolve().then(function(){var e=new Error('Cannot find module "'+t+'".');throw e.code="MODULE_NOT_FOUND",e})}o.keys=function(){return Object.keys(r)},o.id=349,t.exports=o},350:function(t,e,n){t.exports=n(578)},435:function(t,e,n){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{directives:[{name:"play",rawName:"v-play"}],staticClass:"bd-content",domProps:{innerHTML:this._s(this.readme)}})])},o=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})},578:function(t,e,n){"use strict";n.r(e);var r=n(4),o=n.n(r),s=n(9),i=n.n(s),u=n(38),a=n(322);e.default={mixins:[a.a],layout:"docs",validate:function(t){var e=t.params;return Boolean(u.e[e.slug])},asyncData:function(){var t=i()(o.a.mark(function t(e){var r,s,i=e.params;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e=i.slug,n(349)("./"+e+"/README.md");case 2:return r=t.sent,s=u.e[i.slug],t.abrupt("return",{readme:r.default,meta:s});case 5:case"end":return t.stop()}var e},t,this)}));return function(e){return t.apply(this,arguments)}}()}},593:function(t,e,n){"use strict";n.r(e);var r=n(435),o=n(350),s=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);var u=n(7),a=Object(u.a)(s.a,r.a,r.b,!1,null,null,null);e.default=a.exports}}]);