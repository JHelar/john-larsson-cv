(function(e){function t(t){for(var i,r,s=t[0],c=t[1],l=t[2],d=0,p=[];d<s.length;d++)r=s[d],o[r]&&p.push(o[r][0]),o[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(i=!1)}i&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},o={app:0},a=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/john-larsson-cv/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"24e7":function(e,t,n){},"36c6":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cv",attrs:{id:"app"}},[n("cv-header",e._b({},"cv-header",Object.assign({},e.headerProps),!1)),n("main",{staticClass:"cv-content"},e._l(e.sections,(function(t){return n("cv-section",e._b({key:t.title},"cv-section",Object.assign({},t),!1))})),1)],1)},a=[],r=(n("7f7f"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"cv-header"},[n("h1",{staticClass:"cv-header__title"},[e._v(e._s(e.title))]),n("h2",{staticClass:"cv-header__sub-title"},[e._v(e._s(e.subTitle))]),n("div",{staticClass:"cv-header-contact"},e._l(e.contactInfo,(function(t,i){return n("div",{key:i+"info",staticClass:"cv-header-contact__info"},[n("span",{staticClass:"cv-header-contact__info-icon",class:t.icon,attrs:{"aria-hidden":"true"}}),t.link?n("a",{staticClass:"cv-header-contact__info-text",attrs:{href:t.link}},[e._v(e._s(t.text))]):n("p",{staticClass:"cv-header-contact__info-text"},[e._v(e._s(t.text))])])})),0)])}),s=[],c={props:{title:String,subTitle:String,contactInfo:Array}},l=c,u=(n("c526"),n("2877")),d=Object(u["a"])(l,r,s,!1,null,null,null),p=d.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"cv-section"},[n("header",{staticClass:"cv-section-header"},[n("span",{staticClass:"cv-section-header__icon",class:e.icon,attrs:{"aria-hidden":"true"}}),n("h2",{staticClass:"cv-section-header__title"},[e._v(e._s(e.title))])]),n("main",{staticClass:"cv-section-content"},[n("ul",{staticClass:"cv-section-rows"},e._l(e.rows,(function(t,i){return n("cv-section-row",e._b({key:i+e.title},"cv-section-row",Object.assign({},t),!1))})),1)])])},f=[],b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"cv-section-row"},[e.title?n("h3",{staticClass:"cv-section-row__title"},[e._v(e._s(e.title))]):e._e(),e.subTitle?n("h4",{staticClass:"cv-section-row__sub-title"},[e._v(e._s(e.subTitle))]):e._e(),n("p",{staticClass:"cv-section-row__content",domProps:{innerHTML:e._s(e.content)}})])},v=[],g={props:{title:String,subTitle:String,content:String}},m=g,w=(n("c1bf"),Object(u["a"])(m,b,v,!1,null,null,null)),_=w.exports,k={props:{icon:String,title:String,rows:Array},components:{CvSectionRow:_}},y=k,j=(n("c2e1"),Object(u["a"])(y,h,f,!1,null,null,null)),C=j.exports,T={name:"app",components:{CvHeader:p,CvSection:C},data:function(){return{name:"John",surname:"Larsson",workTitle:"Engineer / Frontend Developer",contactInfo:[{icon:"fas fa-map-marker-alt",text:"Ola Hanssonsgatan 9, 11252 Stockholm",link:void 0},{icon:"fas fa-phone",text:"+46 739 692 18",link:"tel:+4673969218"},{icon:"fas fa-envelope",text:"john.helarsson@gmail.com",link:"mailto:john.helarsson@gmail.com"},{icon:"fab fa-linkedin",text:"https://www.linkedin.com/in/john-larsson-8ba758b3/",link:"https://www.linkedin.com/in/john-larsson-8ba758b3/"}],sections:[{title:"Experience",icon:"fas fa-briefcase",rows:[{title:"Javascript Engineer (Level 3 - Senior), Klarna",subTitle:"2020 - ",content:"\n                Engineer in a team of 5 which handles all Klarna CRM channels, such as: in app messages, in app articles, native push notifications, sms and email.<br><br>\n                Enabeling and supporting marketeers with campaign setup and delivery.<br>\n                Writing and maintaining backend services in express, Node.js and Postgress. With an AWS tech stack. <br>\n                Writing the frontend for the production app on both web and native platforms using technologies such as react and react-native with a GraphQL/JSON-rest api. \n              "},{title:"Web Developer - Consultant, HiQ",subTitle:"2015 - 2020",content:"Involved in numerous web projects for both public and private sector, as a lead web developer and systems architect.<br>\nCreated an inhouse tool to increase the speed of development, deployment and most of all developer enjoyment of projects for the content management system, Sitevision."},{title:"Developer Intern, Digital Information",subTitle:"2015 - 2015",content:"University exam project.<br>\nResearched and surveyed existing users of a web booking platform.<br>\nWith the user data gathered from the surveys a new payment function was developed for the website."}]},{title:"Projects",icon:"fas fa-project-diagram",rows:[{title:"In app articles rework, Klarna",subTitle:"Engineer",content:"Lead engineer to the rework of the in app articles in the Klarna native and web app. Worked tighlty with designer to come up with and rework the existing articles.<br><br>\n              Project involved extending the existing CMS editor to be HEAD-less. Adding a graphql api to fetch data from to be later rendered within the app. Added native in app rendering of articles for both the native and web platform.<br><br>\n              <b>Released publicly October 2021.</b>"},{title:"In App Mesages, Klarna",subTitle:"Engineer",content:"\n                Lead engineer in the project to add natively rendered in app messages to the Klarna app on both native and web platforms.<br><br>\n                Enabeling marketeers to remotely render messages directly within the application it self without worrying about the visuals in the app.<br><br>\n                Project involved extending the allready existing native api's and pushing the data to the react-native frontend to be rendered using the applications visual components.<br><br>\n                <b>Released publicly Mars 2020.</b>\n              "},{title:"svhiq, HiQ",subTitle:"Engineer",content:'CLI tool for creation, development and deployment of Sitevision web projects. GitHub: <a href="https://github.com/JHelar/svb">https://github.com/JHelar/svb</a><br>Still heavily being used in projects.'},{title:"match-3",subTitle:"Personal",content:'A match-3 (candy crush inspired) game made for the web browser, GitHub: <a href="https://github.com/JHelar/match-3">https://github.com/JHelar/match-3</a>'}]},{title:"References",icon:"fas fa-user-tie",rows:[{title:"Matteo Pitassi",subTitle:"Klarna",content:'Cooworker, worked tighlty with on reworking the in app articles for Klarna: <a href="mailto:matteo.pitassi@klarna.com">matteo.pitassi@klarna.com</a>'},{title:"Viktor Söderström",subTitle:"HiQ",content:'Cooworker in the same team at HiQ: <a href="mailto:viktor.soderstrom@hiq.se">viktor.soderstrom@hiq.se</a>'},{title:"Johan Lundberg",subTitle:"HiQ",content:'Project and consultant manager at HiQ: <a href="mailto:johan.lundberg@hiq.se">johan.lundberg@hiq.se</a>'}]},{title:"Skills",icon:"fas fa-puzzle-piece",rows:[{title:void 0,subTitle:void 0,content:"Javascript, Typescript"},{title:void 0,subTitle:void 0,content:"Node.js"},{title:void 0,subTitle:void 0,content:"express.js"},{title:void 0,subTitle:void 0,content:"Postgress"},{title:void 0,subTitle:void 0,content:"React.js, Vue.js"},{title:void 0,subTitle:void 0,content:"Sass, Less, CSS"},{title:void 0,subTitle:void 0,content:"HTML"}]},{title:"Education",icon:"fas fa-graduation-cap",rows:[{title:"Bachelor: Computer Science",subTitle:"Örebro Universitet - Örebro",content:"Not completed"},{title:"Highschool: Nature Science",subTitle:"Östra Real - Stockholm",content:void 0}]}]}},computed:{headerProps:function(){return{title:"".concat(this.name," ").concat(this.surname),subTitle:this.workTitle,contactInfo:this.contactInfo}}}},S=T,x=(n("5c0b"),Object(u["a"])(S,o,a,!1,null,null,null)),O=x.exports,H=n("9483");Object(H["a"])("".concat("/john-larsson-cv/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(O)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var i=n("5e27"),o=n.n(i);o.a},"5e27":function(e,t,n){},a592:function(e,t,n){},c1bf:function(e,t,n){"use strict";var i=n("24e7"),o=n.n(i);o.a},c2e1:function(e,t,n){"use strict";var i=n("36c6"),o=n.n(i);o.a},c526:function(e,t,n){"use strict";var i=n("a592"),o=n.n(i);o.a}});
//# sourceMappingURL=app.89b60d68.js.map