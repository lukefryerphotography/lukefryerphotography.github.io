(function(e){function t(t){for(var n,o,g=t[0],c=t[1],s=t[2],d=0,u=[];d<g.length;d++)o=g[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&u.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(u.length)u.shift()();return i.push.apply(i,s||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,g=1;g<a.length;g++){var c=a[g];0!==r[c]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},i=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var g=window["webpackJsonp"]=window["webpackJsonp"]||[],c=g.push.bind(g);g.push=t,g=g.slice();for(var s=0;s<g.length;s++)t(g[s]);var l=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:["app",{"transitions-active":e.transitionsActive}],attrs:{id:"app"}},[a("router-view",{key:e.$route.path,attrs:{dataFetched:e.dataFetched,data:e.data,categories:e.categories}})],1)},i=[],o=(a("d3b7"),a("ddb0"),a("b85c")),g=new n["a"],c={name:"App",data:function(){return{transitionsActive:!1,categories:["crete","scotland","devon","croatia","fuerteventura","lviv","scafell-pike","austria","gdansk","bulgaria","carpathians","amsterdam","formula-1","scarborough","nature","fireworks","macro","astrophotography"],data:[],dataFetched:!1}},created:function(){var e,t=this,a=this.categories.values(),n=0,r=this.categories.length,i=Object(o["a"])(a);try{for(i.s();!(e=i.n()).done;){var g=e.value;fetch("/data/categories/".concat(g,".json")).then((function(e){return e.json().catch((function(e){return console.error("'".concat(e,"' happened!")),{}}))})).then((function(e){t.data.push(e),n++,n===r&&(t.dataFetched=!0)}))}}catch(c){i.e(c)}finally{i.f()}},mounted:function(){var e=this;g.$on("transitionsActive",(function(t){e.transitionsActive=!!t}))}},s=c,l=a("2877"),d=Object(l["a"])(s,r,i,!1,null,null,null),u=d.exports,m=(a("b0c0"),a("8c4f")),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.dataFetched?a("div",{staticClass:"home"},[a("BannerComponent",{attrs:{data:e.data,dataFetched:e.dataFetched,categories:e.categories}}),a("CategoriesComponent",{ref:"categories",attrs:{data:e.data}})],1):e._e()},h=[],y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.dataFetched?a("header",{staticClass:"banner"},[e.selectCategory?a("img",{staticClass:"banner__img",attrs:{sizes:"(max-width: 2560px) 100vw, 2560px",srcset:"/img/photography/"+e.selectCategory+"/"+e.data[e.getSelectCategoryIndex].images[0].file+"-2560.jpg 2560w,\n      /img/photography/"+e.selectCategory+"/"+e.data[e.getSelectCategoryIndex].images[0].file+"-1920.jpg 1920w,\n      /img/photography/"+e.selectCategory+"/"+e.data[e.getSelectCategoryIndex].images[0].file+"-1440.jpg 1440w,\n      /img/photography/"+e.selectCategory+"/"+e.data[e.getSelectCategoryIndex].images[0].file+"-1080.jpg 1080w",src:"/img/photography/"+e.selectCategory+"/"+e.data[e.getSelectCategoryIndex].images[0].file+"-1920.jpg",alt:e.data[e.getSelectCategoryIndex].images[0].alt}}):e._e(),"HomePage"===e.currentRouteName?a("img",{class:["banner__img",{"banner__img--fade-out":e.selectCategory}],attrs:{sizes:"(max-width: 2560px) 100vw, 2560px",srcset:"/img/photography/austria/austria-03-2560.jpg 2560w, /img/photography/austria/austria-03-1920.jpg 1920w, /img/photography/austria/austria-03-1440.jpg 1440w, /img/photography/austria/austria-03-1080.jpg 1080w",src:"/img/photography/austria/austria-03-1920.jpg",alt:"Austria"}}):a("img",{class:["banner__img",{"banner__img--fade-out":e.selectCategory}],attrs:{sizes:"(max-width: 2560px) 100vw, 2560px",srcset:"/img/photography/"+e.activeCategory+"/"+e.data[e.getActiveCategoryIndex].images[0].file+"-2560.jpg 2560w,\n      /img/photography/"+e.activeCategory+"/"+e.data[e.getActiveCategoryIndex].images[0].file+"-1920.jpg 1920w,\n      /img/photography/"+e.activeCategory+"/"+e.data[e.getActiveCategoryIndex].images[0].file+"-1440.jpg 1440w,\n      /img/photography/"+e.activeCategory+"/"+e.data[e.getActiveCategoryIndex].images[0].file+"-1080.jpg 1080w",src:"/img/photography/"+e.activeCategory+"/"+e.data[e.getActiveCategoryIndex].images[0].file+"-1920.jpg",alt:e.data[e.getActiveCategoryIndex].images[0].alt}}),"HomePage"===e.currentRouteName?a("h1",{staticClass:"banner__heading"},[a("span",{staticClass:"banner__large-text"},[e._v(e._s(e.largeText))]),a("span",{staticClass:"banner__small-text"},[e._v(e._s(e.smallText))])]):a("h1",{staticClass:"banner__heading"},[a("span",{staticClass:"banner__large-text"},[e._v(e._s(e.data[e.getActiveCategoryIndex].largeHeading))]),a("span",{staticClass:"banner__small-text"},[e._v(e._s(e.data[e.getActiveCategoryIndex].smallHeading))])])]):e._e()},f=[],x=(a("c975"),{name:"BannerComponent",props:["category","data","categories","dataFetched"],data:function(){return{selectCategory:"",activeCategory:"austria",largeText:"",smallText:""}},mounted:function(){var e=this;this.dataFetched&&(this.largeText="Luke Fryer",this.smallText="Photographer",window.addEventListener("load",(function(){e.$nextTick((function(){g.$emit("transitionsActive",!0)}))}))),this.category&&(this.activeCategory=this.category,this.$nextTick((function(){g.$emit("transitionsActive",!0)}))),g.$on("categorySelected",(function(t){e.selectCategory=t,e.selectCategoryIndex=e.categories.indexOf(e.selectCategory),e.transitionsActive=!1})),g.$on("categoryActive",(function(t){e.selectCategory=t,e.transitionsActive=!1}))},computed:{getActiveCategoryIndex:function(){return this.categories.indexOf(this.activeCategory)},getSelectCategoryIndex:function(){return this.categories.indexOf(this.selectCategory)},currentRouteName:function(){return this.$route.name}}}),v=x,I=Object(l["a"])(v,y,f,!1,null,null,null),C=I.exports,_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"categories grid"},[e._l(e.data,(function(t){return[a("router-link",{key:t.index,class:["grid__item grid__item--"+t.images[0].layout],attrs:{tag:"button",to:t.name}},[a("img",{staticClass:"grid__img",attrs:{sizes:"(max-width: 2560px) 100vw, 2560px",srcset:"/img/photography/"+t.name+"/"+t.images[0].file+"-2560.jpg 2560w,\n      /img/photography/"+t.name+"/"+t.images[0].file+"-1920.jpg 1920w,\n      /img/photography/"+t.name+"/"+t.images[0].file+"-1440.jpg 1440w,\n      /img/photography/"+t.name+"/"+t.images[0].file+"-1080.jpg 1080w",src:"/img/photography/"+t.name+"/"+t.images[0].file+"-1920.jpg",loading:"lazy",alt:"placeholder"}}),a("div",{staticClass:"grid__heading"},[a("span",{staticClass:"grid__text"},[e._v(e._s(t.largeHeading))])])])]}))],2)},w=[],b={name:"CategoriesComponent",props:["data"]},j=b,A=Object(l["a"])(j,_,w,!1,null,null,null),O=A.exports;function $(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"linear",n=arguments.length>3?arguments[3]:void 0,r={linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}},i=window.pageYOffset,o="now"in window.performance?performance.now():(new Date).getTime(),g=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),c=window.innerHeight||document.documentElement.clientHeight||document.getElementsByTagName("body")[0].clientHeight,s="number"===typeof e?e:e.offsetTop,l=Math.round(g-s<c?g-c:s);if("requestAnimationFrame"in window===!1)return window.scroll(0,l),void(n&&n());function d(){var e="now"in window.performance?performance.now():(new Date).getTime(),g=Math.min(1,(e-o)/t),c=r[a](g);window.scroll(0,Math.ceil(c*(l-i)+i)),window.pageYOffset!==l?requestAnimationFrame(d):n&&n()}d()}var k={name:"HomePage",props:["data","dataFetched","categories"],components:{BannerComponent:C,CategoriesComponent:O},beforeRouteLeave:function(e,t,a){var n=function(){g.$emit("categorySelected",e.params.category)};$(0,600,"easeOutCubic",n),setTimeout((function(){g.$emit("transitionsActive",!1)}),0),setTimeout((function(){a()}),1e3)}},F=k,S=Object(l["a"])(F,p,h,!1,null,null,null),T=S.exports,H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.dataFetched?a("main",{staticClass:"category"},[a("BannerComponent",{attrs:{data:e.data,category:e.category,categories:e.categories,dataFetched:e.dataFetched}}),a("section",{staticClass:"grid"},[e._l(e.data[e.getActiveCategoryIndex].images,(function(t,n){return[a("button",{key:n,class:["grid__item grid__item--"+t.layout],on:{click:function(t){return e.activateGallery(e.galleryActive,n)}}},[a("img",{staticClass:"grid__img",attrs:{sizes:"(max-width: 2560px) 100vw, 2560px",srcset:"/img/photography/"+e.category+"/"+t.file+"-2560.jpg 2560w,\n      /img/photography/"+e.category+"/"+t.file+"-1920.jpg 1920w,\n      /img/photography/"+e.category+"/"+t.file+"-1440.jpg 1440w,\n      /img/photography/"+e.category+"/"+t.file+"-1080.jpg 1080w",src:"/img/photography/"+e.category+"/"+t.file+"-2560.jpg",loading:"lazy",alt:"alt"}})])]}))],2),a("keep-alive",[a("GalleryComponent",{attrs:{category:e.category,categories:e.categories,data:e.data,galleryActive:e.galleryActive,selectedImgIndex:e.selectedImgIndex}})],1)],1):e._e()},P=[],z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{class:["gallery",{active:e.galleryActive}],on:{click:function(t){return t.target!==t.currentTarget?null:e.closeGallery(t)}}},[a("img",{staticClass:"gallery__img",attrs:{sizes:"(max-width: 2560px) 100vw, 2560px",srcset:"/img/photography/"+e.category+"/"+e.data[e.getActiveCategoryIndex].images[e.currentImageIndex].file+"-2560.jpg 2560w,\n      /img/photography/"+e.category+"/"+e.data[e.getActiveCategoryIndex].images[e.currentImageIndex].file+"-1920.jpg 1920w,\n      /img/photography/"+e.category+"/"+e.data[e.getActiveCategoryIndex].images[e.currentImageIndex].file+"-1440.jpg 1440w,\n      /img/photography/"+e.category+"/"+e.data[e.getActiveCategoryIndex].images[e.currentImageIndex].file+"-1080.jpg 1080w",src:"/img/photography/"+e.category+"/"+e.data[e.getActiveCategoryIndex].images[e.currentImageIndex].file+"-2560.jpg",loading:"lazy",alt:"placeholder"}}),0!==e.currentImageIndex?a("img",{staticClass:"gallery__img--hide",attrs:{sizes:"(max-width: 2560px) 100vw, 2560px",srcset:"/img/photography/"+e.category+"/"+e.data[e.getActiveCategoryIndex].images[e.currentImageIndex].file+"-2560.jpg 2560w,\n      /img/photography/"+e.category+"/"+e.data[e.getActiveCategoryIndex].images[e.currentImageIndex].file+"-1920.jpg 1920w,\n      /img/photography/"+e.category+"/"+e.data[e.getActiveCategoryIndex].images[e.currentImageIndex].file+"-1440.jpg 1440w,\n      /img/photography/"+e.category+"/"+e.data[e.getActiveCategoryIndex].images[e.currentImageIndex].file+"-1080.jpg 1080w",src:"/img/photography/"+e.category+"/"+e.data[e.getActiveCategoryIndex].images[e.currentImageIndex-1].file+"-2560.jpg",loading:"lazy",alt:"first"}}):e._e(),e.currentImageIndex!==e.getCategoryImagesLength?a("img",{staticClass:"gallery__img--hide",attrs:{sizes:"(max-width: 2560px) 100vw, 2560px",srcset:"/img/photography/"+e.category+"/"+e.data[e.getActiveCategoryIndex].images[e.currentImageIndex].file+"-2560.jpg 2560w,\n      /img/photography/"+e.category+"/"+e.data[e.getActiveCategoryIndex].images[e.currentImageIndex].file+"-1920.jpg 1920w,\n      /img/photography/"+e.category+"/"+e.data[e.getActiveCategoryIndex].images[e.currentImageIndex].file+"-1440.jpg 1440w,\n      /img/photography/"+e.category+"/"+e.data[e.getActiveCategoryIndex].images[e.currentImageIndex].file+"-1080.jpg 1080w",src:"/img/photography/"+e.category+"/"+e.data[e.getActiveCategoryIndex].images[e.currentImageIndex+1].file+"-2560.jpg",loading:"lazy",alt:"last"}}):e._e(),0!==e.currentImageIndex?a("button",{staticClass:"gallery__btn gallery__btn--prev",on:{click:e.prevImg}}):e._e(),e.currentImageIndex!==e.getCategoryImagesLength?a("button",{staticClass:"gallery__btn gallery__btn--next",on:{click:e.nextImg}}):e._e(),a("button",{staticClass:"gallery__btn-close",on:{click:e.closeGallery}})])},E=[],G={name:"GalleryComponent",props:["category","categories","data","galleryActive","selectedImgIndex"],data:function(){return{currentImageIndex:0}},methods:{prevImg:function(){var e=this.currentImageIndex-1;this.getSelectedImgIndex(e)},nextImg:function(){var e=this.currentImageIndex+1;this.getSelectedImgIndex(e)},getSelectedImgIndex:function(e){this.currentImageIndex=e,g.$emit("updateImageIndex",e)},closeGallery:function(){g.$emit("closeGallery"),this.$router.go(-1)}},computed:{getActiveCategoryIndex:function(){return this.categories.indexOf(this.category)},getCategoryImagesLength:function(){var e=this.categories.indexOf(this.category);return this.data[e].images.length-1}},watch:{selectedImgIndex:function(e){this.currentImageIndex=e}}},Q=G,M=Object(l["a"])(Q,z,E,!1,null,null,null),B=M.exports,L={name:"categoryPage",props:["data","category","categories","dataFetched"],components:{BannerComponent:C,GalleryComponent:B},data:function(){return{galleryActive:!1,selectedImgIndex:0}},mounted:function(){var e=this;this.activeCategoryIndex=this.categories.indexOf(this.category),g.$emit("categorySelected",this.category),g.$on("updateImageIndex",(function(t){e.selectedImgIndex=t})),g.$on("closeGallery",(function(t){e.galleryActive=!1}))},methods:{activateGallery:function(e,t){this.$router.push({query:{gallery:"active"}}),this.selectedImgIndex=t,this.galleryActive=!e}},computed:{getActiveCategoryIndex:function(){return this.categories.indexOf(this.category)}},beforeRouteUpdate:function(e,t,a){this.galleryActive&&(this.galleryActive=!1),a()}},R=L,N=Object(l["a"])(R,H,P,!1,null,null,null),q=N.exports;n["a"].use(m["a"]);var D=new m["a"]({mode:"history",base:"/",routes:[{path:"/",name:"HomePage",props:!0,component:T},{path:"/:category",name:"CategoryPage",props:!0,component:q}]});D.afterEach((function(e,t){"CategoryPage"===t.name&&g.$emit("transitionsActive",!0),e.name}));var J=D;a("f27b");n["a"].config.productionTip=!1,new n["a"]({router:J,render:function(e){return e(u)}}).$mount("#app")},f27b:function(e,t,a){}});
//# sourceMappingURL=app.b991fd55.js.map