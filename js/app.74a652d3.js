(function(e){function t(t){for(var o,s,c=t[0],a=t[1],l=t[2],f=0,d=[];f<c.length;f++)s=c[f],i[s]&&d.push(i[s][0]),i[s]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,c=1;c<n.length;c++){var a=n[c];0!==i[a]&&(o=!1)}o&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},i={app:0},r=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/<cv-resume>/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=a;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"24e7":function(e,t,n){},"36c6":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cv",attrs:{id:"app"}},[n("cv-header",e._b({},"cv-header",Object.assign({},e.headerProps),!1)),n("main",{staticClass:"cv-content"},e._l(e.sections,function(t){return n("cv-section",e._b({key:t.title},"cv-section",Object.assign({},t),!1))}),1)],1)},r=[],s=(n("7f7f"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"cv-header"},[n("h1",{staticClass:"cv-header__title"},[e._v(e._s(e.title))]),n("h2",{staticClass:"cv-header__sub-title"},[e._v(e._s(e.subTitle))]),n("div",{staticClass:"cv-header-contact"},e._l(e.contactInfo,function(t,o){return n("div",{key:o+"info",staticClass:"cv-header-contact__info"},[n("span",{staticClass:"cv-header-contact__info-icon",class:t.icon,attrs:{"aria-hidden":"true"}}),t.link?n("a",{staticClass:"cv-header-contact__info-text",attrs:{href:t.link}},[e._v(e._s(t.text))]):n("p",{staticClass:"cv-header-contact__info-text"},[e._v(e._s(t.text))])])}),0)])}),c=[],a={props:{title:String,subTitle:String,contactInfo:Array}},l=a,u=(n("c526"),n("2877")),f=Object(u["a"])(l,s,c,!1,null,null,null),d=f.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"cv-section"},[n("header",{staticClass:"cv-section-header"},[n("span",{staticClass:"cv-section-header__icon",class:e.icon,attrs:{"aria-hidden":"true"}}),n("h2",{staticClass:"cv-section-header__title"},[e._v(e._s(e.title))])]),n("main",{staticClass:"cv-section-content"},[n("ul",{staticClass:"cv-section-rows"},e._l(e.rows,function(t,o){return n("cv-section-row",e._b({key:o+e.title},"cv-section-row",Object.assign({},t),!1))}),1)])])},p=[],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"cv-section-row"},[e.title?n("h3",{staticClass:"cv-section-row__title"},[e._v(e._s(e.title))]):e._e(),e.subTitle?n("h4",{staticClass:"cv-section-row__sub-title"},[e._v(e._s(e.subTitle))]):e._e(),n("p",{staticClass:"cv-section-row__content",domProps:{innerHTML:e._s(e.content)}})])},b=[],m={props:{title:String,subTitle:String,content:String}},_=m,g=(n("c1bf"),Object(u["a"])(_,h,b,!1,null,null,null)),w=g.exports,y={props:{icon:String,title:String,rows:Array},components:{CvSectionRow:w}},j=y,C=(n("c2e1"),Object(u["a"])(j,v,p,!1,null,null,null)),k=C.exports,T={name:"app",components:{CvHeader:d,CvSection:k},data:function(){return{name:"John",surname:"Larsson",workTitle:"Frontend / Web Developer",contactInfo:[{icon:"fas fa-map-marker-alt",text:"Oskarstorget 16D Örebro, 70214",link:void 0},{icon:"fas fa-phone",text:"+46 739 692 18",link:"tel:+4673969218"},{icon:"fas fa-envelope",text:"john.helarsson@gmail.com",link:"mailto:john.helarsson@gmail.com"},{icon:"fab fa-linkedin",text:"https://www.linkedin.com/in/john-larsson-8ba758b3/",link:"https://www.linkedin.com/in/john-larsson-8ba758b3/"}],sections:[{title:"Skills",icon:"fas fa-puzzle-piece",rows:[{title:void 0,subTitle:void 0,content:"Javascript, Typescript"},{title:void 0,subTitle:void 0,content:"Node.js"},{title:void 0,subTitle:void 0,content:"React.js, Vue.js"},{title:void 0,subTitle:void 0,content:"Sass, Less, CSS"},{title:void 0,subTitle:void 0,content:"HTML"}]},{title:"Experience",icon:"fas fa-briefcase",rows:[{title:"Web Developer, Consultant",subTitle:"HiQ Örebro, Örebro",content:"Involved in numerous web projects for both public and private sector, as a lead web developer and systems architect.<br>\nCreated an inhouse tool to increase the speed of development, deployment and most of all developer enjoyment of projects for the content management system, Sitevision."},{title:"Developer Intern",subTitle:"Digital Information, Örebro",content:"University exam project.<br>\nResearched and surveyed existing users of a web booking platform.<br>\nWith the user data gathered from the surveys a new payment function was developed for the website."}]},{title:"Projects",icon:"fas fa-project-diagram",rows:[{title:void 0,subTitle:void 0,content:'svhiq, CLI tool for creation, development and deployment of Sitevision web projects. GitHub: <a href="https://github.com/JHelar/svb">https://github.com/JHelar/svb</a>'},{title:void 0,subTitle:void 0,content:'match-3, a match-3 (candy crush inspired) game made for the web browser, GitHub: <a href="https://github.com/JHelar/match-3">https://github.com/JHelar/match-3</a>'}]},{title:"Certifications",icon:"fas fa-award",rows:[{title:void 0,subTitle:void 0,content:"Sitevision certified Website Developer"}]},{title:"Education",icon:"fas fa-graduation-cap",rows:[{title:"Bachelor: Computer Science",subTitle:"Örebro Universitet - Örebro",content:void 0},{title:"Highschool: Nature Science",subTitle:"Östra Real - Stockholm",content:void 0}]}]}},computed:{headerProps:function(){return{title:"".concat(this.name," ").concat(this.surname),subTitle:this.workTitle,contactInfo:this.contactInfo}}}},S=T,x=(n("5c0b"),Object(u["a"])(S,i,r,!1,null,null,null)),O=x.exports,H=n("9483");Object(H["a"])("".concat("/<cv-resume>/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(O)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("5e27"),i=n.n(o);i.a},"5e27":function(e,t,n){},a592:function(e,t,n){},c1bf:function(e,t,n){"use strict";var o=n("24e7"),i=n.n(o);i.a},c2e1:function(e,t,n){"use strict";var o=n("36c6"),i=n.n(o);i.a},c526:function(e,t,n){"use strict";var o=n("a592"),i=n.n(o);i.a}});
//# sourceMappingURL=app.74a652d3.js.map