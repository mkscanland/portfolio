(function(){"use strict";var a={420:function(a,e,t){var o=t(9242),i=t(3396);const s={class:"mainWrapper"},n={class:"mainContent"};function r(a,e,t,o,r,l){const d=(0,i.up)("NavBar"),c=(0,i.up)("ITSystems"),p=(0,i.up)("SiteFooter");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",s,[(0,i.Wm)(d),(0,i._)("div",n,[(0,i.Wm)(c)])]),(0,i.Wm)(p)],64)}const l={class:"navbar navbar-expand-lg navbar-dark bg-dark sticky-top"},d=(0,i.uE)('<div class="container-fluid"><a class="navbar-brand">Matthew Scanland</a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarNavDropdown"><ul class="navbar-nav"><li class="nav-item"><a class="nav-link active" aria-current="page" href="/">Home</a></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="/files/Scanland-Matthew_Resume.pdf" data-bs-toggle="dropdown"> Resume </a><div class="dropdown-menu"><a class="dropdown-item" href="/files/Scanland-Matthew_Resume.pdf">Resume (pdf)</a><a class="dropdown-item" href="/files/Scanland-Matthew_Resume.docx">Resume (docx)</a><a class="dropdown-item" href="/files/Scanland-Matthew_CV.docx">CV (docx)</a></div></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="/#significantProjects" data-bs-toggle="dropdown"> Portfolio </a><div class="dropdown-menu"><a class="dropdown-item" href="/rebuild">Internal Website Rebuild</a><a class="dropdown-item" href="/randomforest">Random Forest</a><a class="dropdown-item" href="/validations">Lab Validations</a><a class="dropdown-item" href="/webapps">Other Web Apps</a><a class="dropdown-item" href="/itsystems">IT Systems</a><a class="dropdown-item" href="https://github.com/mkscanland">GitHub</a></div></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="/#significantProjects" data-bs-toggle="dropdown"> Guides </a><div class="dropdown-menu"><a class="dropdown-item" href="/files/Azure-Data-Lake-Plan_Public Copy.pdf">Azure Data Lake Creation</a></div></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="/#contact" data-bs-toggle="dropdown"> Contact </a><div class="dropdown-menu"><a class="dropdown-item" href="https://www.linkedin.com/in/matthew-scanland/">LinkedIn</a><a class="dropdown-item" href="mailto:mkscanland@gmail.com">Email</a></div></li></ul></div></div>',1),c=[d];function p(a,e){return(0,i.wg)(),(0,i.iD)("nav",l,c)}var u=t(89);const v={},m=(0,u.Z)(v,[["render",p]]);var f=m,b=t(1482),h=t(1057),g=t(1715);const w=(0,i.uE)('<div class="wrapperSection bg-computer text-secondary px-4 text-center position-relative"><div class="py-5"><div class="col-lg-6 mx-auto position-absolute bottom-20 start-50 translate-middle-x"><h1 class="display-5 fw-bold text-white">IT Systems</h1></div></div></div><div class="wrapperSection py-0 pb-5 bg-lightGrey position-relative text-secondary px-4"><div class="title">Projects</div><div class="row pt-5 pb-3"><div class="col-lg-12 col-md-12 mx-auto text-center"><p> This page lists various IT Systems that I&#39;ve worked on over the years. If you have any further questions please feel free to <a href="/#contact">Contact me</a>. </p></div></div><div class="row py-0"><div class="col-lg-12 col-md-12 mx-auto"><div class="album py-5"><div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 text-dark"><div class="col"><div class="projectContainer" id="azure"><img src="'+b+'" class="img-fluid rounded" alt="Internal Leave Calendar"><div class="overlay"><p class="h4 projectTitle">Microsoft Azure</p><p> An Azure Data Lake resource is used for CPES archival. This system is built underneath a Virginia Tech Azure subscription and uses the simple Data Lake storage for Azure File Storage. Using the Azure REST API a table on the Support website is updated periodically to provide a simple view for all files contained in this archive. </p></div></div></div><div class="col"><div class="projectContainer" id="xibo"><img src="'+h+'" class="img-fluid rounded" alt="Forms checkout tracker"><div class="overlay"><p class="h4 projectTitle">Docker/Xibo</p><p> The <a href="https://xibosignage.com/">Xibo Digital Signage</a> CMS for CPES is built on a Windows machine loaded with Docker Desktop. This system uses a simple docker container that includes NGINX for a reverse proxy. With this CMS CPES can quickly control any digital signage that we use. </p></div></div></div><div class="col"><div class="projectContainer" id="servers"><img src="'+g+'" class="img-fluid rounded" alt="purchasing tracker"><div class="overlay"><p class="h4 projectTitle">Web Servers</p><p> CPES has two main web servers; the Support site, and the <a href="https://cpes.vt.edu/">main CPES website</a>. The Support website uses a PHPCas login system to restrict login to only CPES personell. The main website is open to the public but several files and pages are locked behind a login wall for our member companies.<br><a href="/rebuild">Internal Website Rebuild</a></p></div></div></div></div></div></div></div></div><div class="modal fade" id="infoModal" tabindex="-1" aria-labelledby="infoModalTitle" aria-hidden="true"><div class="modal-dialog modal-xl modal-dialog-centered"><div class="modal-content"><div class="modal-header"><h3 class="modal-title" id="infoModalTitle"></h3><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body" id="infoModalBody"><img class="img-fluid ulShadow mx-auto d-block"><p class="mt-5"></p></div></div></div></div>',3);function y(a,e){return w}const k={},S=(0,u.Z)(k,[["render",y]]);var x=S;const C={class:"footer py-3 bg-dark border-top"},T=(0,i.uE)('<div class="container-fluid"><div class="row"><div class="col-md-8"><span class="text-muted small"><i>This website was built using Vue.js, and Bootstrap. It is hosted on AWS with an EC2 server. I plan to create web applications using AWS as well, hosted under a subdomain of matthewscanland.com.</i></span></div><div class="col-md-4 text-end"><span class="text-muted small"><i>Please contact me for any questions: <a href="mailto:mkscanland@gmail.com">mkscanland@gmail.com</a></i></span></div></div></div>',1),P=[T];function j(a,e){return(0,i.wg)(),(0,i.iD)("footer",C,P)}const I={},M=(0,u.Z)(I,[["render",j]]);var D=M,O={components:{NavBar:f,ITSystems:x,SiteFooter:D}};const E=(0,u.Z)(O,[["render",r]]);var A=E;t(9769);(0,o.ri)(A).mount("#app")},1482:function(a,e,t){a.exports=t.p+"img/azure-datalake.78c8177d.jpg"},1715:function(a,e,t){a.exports=t.p+"img/cpes-site.b688d4c8.png"},1057:function(a,e,t){a.exports=t.p+"img/xibo-docker.7766b042.png"}},e={};function t(o){var i=e[o];if(void 0!==i)return i.exports;var s=e[o]={exports:{}};return a[o].call(s.exports,s,s.exports,t),s.exports}t.m=a,function(){var a=[];t.O=function(e,o,i,s){if(!o){var n=1/0;for(c=0;c<a.length;c++){o=a[c][0],i=a[c][1],s=a[c][2];for(var r=!0,l=0;l<o.length;l++)(!1&s||n>=s)&&Object.keys(t.O).every((function(a){return t.O[a](o[l])}))?o.splice(l--,1):(r=!1,s<n&&(n=s));if(r){a.splice(c--,1);var d=i();void 0!==d&&(e=d)}}return e}s=s||0;for(var c=a.length;c>0&&a[c-1][2]>s;c--)a[c]=a[c-1];a[c]=[o,i,s]}}(),function(){t.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return t.d(e,{a:e}),e}}(),function(){t.d=function(a,e){for(var o in e)t.o(e,o)&&!t.o(a,o)&&Object.defineProperty(a,o,{enumerable:!0,get:e[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){t.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){t.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var a={100:0};t.O.j=function(e){return 0===a[e]};var e=function(e,o){var i,s,n=o[0],r=o[1],l=o[2],d=0;if(n.some((function(e){return 0!==a[e]}))){for(i in r)t.o(r,i)&&(t.m[i]=r[i]);if(l)var c=l(t)}for(e&&e(o);d<n.length;d++)s=n[d],t.o(a,s)&&a[s]&&a[s][0](),a[s]=0;return t.O(c)},o=self["webpackChunkwebsite"]=self["webpackChunkwebsite"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(420)}));o=t.O(o)})();
//# sourceMappingURL=itsystems.90fa9409.js.map