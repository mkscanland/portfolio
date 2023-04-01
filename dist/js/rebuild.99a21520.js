(function(){"use strict";var e={8521:function(e,t,a){var i=a(9242),n=a(3396);const o={class:"mainWrapper"},s={class:"mainContent"};function r(e,t,a,i,r,l){const d=(0,n.up)("NavBar"),c=(0,n.up)("InternalRebuild"),p=(0,n.up)("SiteFooter");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",o,[(0,n.Wm)(d),(0,n._)("div",s,[(0,n.Wm)(c)])]),(0,n.Wm)(p)],64)}const l={class:"navbar navbar-expand-lg navbar-dark bg-dark sticky-top"},d=(0,n.uE)('<div class="container-fluid"><a class="navbar-brand">Matthew Scanland</a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarNavDropdown"><ul class="navbar-nav"><li class="nav-item"><a class="nav-link active" aria-current="page" href="/">Home</a></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="/files/Scanland-Matthew_Resume.pdf" data-bs-toggle="dropdown"> Resume </a><div class="dropdown-menu"><a class="dropdown-item" href="/files/Scanland-Matthew_Resume.pdf">Resume (pdf)</a><a class="dropdown-item" href="/files/Scanland-Matthew_Resume.docx">Resume (docx)</a></div></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="/#significantProjects" data-bs-toggle="dropdown"> Portfolio </a><div class="dropdown-menu"><a class="dropdown-item" href="/rebuild">Internal Website Rebuild</a><a class="dropdown-item" href="/randomforest">Random Forest</a><a class="dropdown-item" href="/validations">Lab Validations</a><a class="dropdown-item" href="/webapps">Other Web Apps</a><a class="dropdown-item" href="/itsystems">IT Systems</a><a class="dropdown-item" href="https://github.com/mkscanland">GitHub</a></div></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="/#significantProjects" data-bs-toggle="dropdown"> Guides </a><div class="dropdown-menu"><a class="dropdown-item" href="/files/Azure-Data-Lake-Plan_Public Copy.pdf">Azure Data Lake Creation</a></div></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="/#contact" data-bs-toggle="dropdown"> Contact </a><div class="dropdown-menu"><a class="dropdown-item" href="https://www.linkedin.com/in/matthew-scanland/">LinkedIn</a><a class="dropdown-item" href="mailto:mkscanland@gmail.com">Email</a></div></li></ul></div></div>',1),c=[d];function p(e,t){return(0,n.wg)(),(0,n.iD)("nav",l,c)}var u=a(89);const h={},m=(0,u.Z)(h,[["render",p]]);var v=m,b=a(5434),f=a(4005),g=a(7683);const w=(0,n.uE)('<div class="wrapperSection bg-spotlight text-secondary px-4 text-center"><div class="py-5"><h1 class="display-5 fw-bold text-white">Internal Website Rebuild</h1><div class="col-lg-6 mx-auto"><p class="fs-5 mb-4"> Helping the staff, students, and Faculty </p></div></div></div><div class="wrapperSection py-0 pb-5 bg-light position-relative text-secondary px-4"><div class="title">Main Information</div><div class="px-4 pt-5 mb-5 border-bottom"><div class="overflow-hidden" style="max-height:30vh;"><div class="container px-5 text-center"><img src="'+b+'" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" loading="lazy"></div></div><div class="col-lg-12 mx-auto"><p class="lead mb-4"> The internal support site at CPES started from a simple html website to house forms. In 2016 the former CPES webmaster improved upon it by adding in Google Script functionality. The website and CPES personnel evolved more needs and she began adding simple programs.<br> After I took over thier position at CPES I imported the main website (cpes.vt.edu) core code and modified it to suit our needs for the support website. I implemented a MySQL database along with PHP, JQuery, and javascript. I then re-built the previous code to suit the new site. To keep everything under our control I also removed all Google Script functionality.<br> As things usually go, CPES personnel&#39;s needs continued to grow and I enjoy coding so my supervisor gave the green light to do whatever I wanted. With the help from students, faculty, and some staff I found several weak points in our operations and created some web apps to solve those needs.<br> To increase security I implemented a 2-factor PHPCas system that is tied into Virginia Tech. The support site is now an interconnected web application that is tied together on various levels. I continue to work with some fantastic coworkers to add new functionality and hopefully make everyone&#39;s job easier. </p></div></div><div class="row g-5"><div class="col-md-4"><div><div class="p-4 mb-3 bg-light rounded"><h4 class="fst-italic">Development</h4><p> The internal support website is currently developed on an Apache server using a MySQL database that interacts with a PHP sql connection. Design is left to a base Bootstrap 3 css and some custom elements that the team created. UI elements are controlled by JQuery and Javascript. </p></div><div class="p-4 mb-3 bg-light rounded"><h4 class="fst-italic">The Team</h4><ol class="list-unstyled"><li><b>Matthew Scanland</b><br> In charge of planning, analysis, design, implementation, and maintenance. </li><li><b>Students, Faculty, and Staff</b><br> In charge of planning, analysis, design, implementation, and maintenance. </li></ol></div><div class="p-4 border-bottom bg-light rounded"><h4 class="fst-italic">Implementation Decisions</h4><p><b>Back-end</b><br> MySQL can handle large datasets and has fast query processing. The main website was built on PHP so importing the core functionality was simple. PHP is also very simple to use and is fairly reliable. phpCAS was used for extra security. It required little setup since Virginia Tech already provides the 2-factor authentication. </p></div><div class="p-4 border-bottom bg-light rounded"><p><b>Front-end</b><br> Bootstrap, JQuery, and Javascript is free and we already had a rough custom-built website around it&#39;s design. I greatly improved the imported functionality so that web applications could be created with ease. </p></div><div class="p-4 border-bottom bg-light rounded"><p><b>Ease-of-use</b><br> Designing the web applications to be easy to use is a primary goal. These applications are meant to make life easier, not harder. </p></div><div class="p-4 border-bottom bg-light rounded"><p><b>Forward compatability</b><br> I&#39;ve kept in mind that many systems will change over time. I hope that the systems will be able to last as long as we need them with few modifications. </p></div><div class="p-4 border-bottom bg-light rounded"><p><b>Future</b><br> The future of the support website seems bright. I will continue to add functionality and tie the systems together. </p></div></div></div><div class="col-md-8"><article class="blog-post"><h2 class="blog-post-title">Reformatting</h2><p> In order to easily add various applications I removed all pre-existing Google Apps Script code. I also modified the main website MVC (model, view, controller) design pattern to fit a more on-demand query structure. </p><hr><h3>Design</h3><div class="overflow-hidden" style="max-height:40vh;"><div class="container px-5 text-center"><img src="'+f+'" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" loading="lazy"></div></div><p class="pt-4"> The website is built similar to any other, see the censored image above. It has a navigational menu at the top that will take you to different sections. Under each page there are different applications or information. The design was made to be simple and intuitive while also providing a powerful functionality for each page. </p><hr><h3>Functionality</h3><div class="overflow-hidden" style="max-height:40vh;"><div class="container px-5 text-center"><img src="'+g+'" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" loading="lazy"></div></div><p class="pt-4"> The functionality of an application is just as important, if not moreso, than the design. The internal website is designed to function as a set of separate systems that can be tied together if needed.<br> The main goal of the site is to make life easier for everyone. This could be inputting a vacation, clocking time into the labs, making a purchase, or many other things. To have all of these function in a reasonable time there has to be a lot of planning put into their implementation. </p><hr><h3>Applications</h3><p> You can see more information about the support website (and other) applications in other pages on the <a href="/webapps">Web Apps Page</a>. </p></article></div></div></div>',2);function y(e,t){return w}const x={},k=(0,u.Z)(x,[["render",y]]);var I=k;const S={class:"footer py-3 bg-dark border-top"},T=(0,n.uE)('<div class="container-fluid"><div class="row"><div class="col-md-8"><span class="text-muted small"><i>This website was built using Vue.js, and Bootstrap. It is hosted on AWS with an EC2 server. I plan to create web applications using AWS as well, hosted under a subdomain of matthewscanland.com.</i></span></div><div class="col-md-4 text-end"><span class="text-muted small"><i>Please contact me for any questions: <a href="mailto:mkscanland@gmail.com">mkscanland@gmail.com</a></i></span></div></div></div>',1),P=[T];function j(e,t){return(0,n.wg)(),(0,n.iD)("footer",S,P)}const C={},E=(0,u.Z)(C,[["render",j]]);var O=E,D={components:{NavBar:v,InternalRebuild:I,SiteFooter:O}};const M=(0,u.Z)(D,[["render",r]]);var A=M;a(9769);(0,i.ri)(A).mount("#app")},7683:function(e,t,a){e.exports=a.p+"img/lab-validations-help.163635ac.png"},4005:function(e,t,a){e.exports=a.p+"img/support-site-home.6e675078.png"},5434:function(e,t,a){e.exports=a.p+"img/support-site-navbar.e5b9779a.png"}},t={};function a(i){var n=t[i];if(void 0!==n)return n.exports;var o=t[i]={exports:{}};return e[i].call(o.exports,o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,i,n,o){if(!i){var s=1/0;for(c=0;c<e.length;c++){i=e[c][0],n=e[c][1],o=e[c][2];for(var r=!0,l=0;l<i.length;l++)(!1&o||s>=o)&&Object.keys(a.O).every((function(e){return a.O[e](i[l])}))?i.splice(l--,1):(r=!1,o<s&&(s=o));if(r){e.splice(c--,1);var d=n();void 0!==d&&(t=d)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[i,n,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var e={667:0};a.O.j=function(t){return 0===e[t]};var t=function(t,i){var n,o,s=i[0],r=i[1],l=i[2],d=0;if(s.some((function(t){return 0!==e[t]}))){for(n in r)a.o(r,n)&&(a.m[n]=r[n]);if(l)var c=l(a)}for(t&&t(i);d<s.length;d++)o=s[d],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(c)},i=self["webpackChunkwebsite"]=self["webpackChunkwebsite"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(8521)}));i=a.O(i)})();
//# sourceMappingURL=rebuild.99a21520.js.map