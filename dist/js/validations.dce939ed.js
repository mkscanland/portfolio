(function(){"use strict";var e={519:function(e,a,t){var i=t(9242),s=t(3396);const n={class:"mainWrapper"},o={class:"mainContent"};function r(e,a,t,i,r,d){const l=(0,s.up)("NavBar"),c=(0,s.up)("LabValidations"),p=(0,s.up)("SiteFooter");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",n,[(0,s.Wm)(l),(0,s._)("div",o,[(0,s.Wm)(c)])]),(0,s.Wm)(p)],64)}const d={class:"navbar navbar-expand-lg navbar-dark bg-dark sticky-top"},l=(0,s.uE)('<div class="container-fluid"><a class="navbar-brand">Matthew Scanland</a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarNavDropdown"><ul class="navbar-nav"><li class="nav-item"><a class="nav-link active" aria-current="page" href="/">Home</a></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="/files/Scanland-Matthew_Resume.pdf" data-bs-toggle="dropdown"> Resume </a><div class="dropdown-menu"><a class="dropdown-item" href="/files/Scanland-Matthew_Resume.pdf">Resume (pdf)</a><a class="dropdown-item" href="/files/Scanland-Matthew_Resume.docx">Resume (docx)</a></div></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="/#significantProjects" data-bs-toggle="dropdown"> Portfolio </a><div class="dropdown-menu"><a class="dropdown-item" href="/rebuild">Internal Website Rebuild</a><a class="dropdown-item" href="/randomforest">Random Forest</a><a class="dropdown-item" href="/validations">Lab Validations</a><a class="dropdown-item" href="/webapps">Other Web Apps</a><a class="dropdown-item" href="/itsystems">IT Systems</a><a class="dropdown-item" href="https://github.com/mkscanland">GitHub</a></div></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="/#significantProjects" data-bs-toggle="dropdown"> Guides </a><div class="dropdown-menu"><a class="dropdown-item" href="/files/Azure-Data-Lake-Plan_Public Copy.pdf">Azure Data Lake Creation</a></div></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="/#contact" data-bs-toggle="dropdown"> Contact </a><div class="dropdown-menu"><a class="dropdown-item" href="https://www.linkedin.com/in/matthew-scanland/">LinkedIn</a><a class="dropdown-item" href="mailto:mkscanland@gmail.com">Email</a></div></li></ul></div></div>',1),c=[l];function p(e,a){return(0,s.wg)(),(0,s.iD)("nav",d,c)}var h=t(89);const u={},f=(0,h.Z)(u,[["render",p]]);var b=f,m=t(7005),v=t(7683),g=t(9205);const w=(0,s.uE)('<div class="wrapperSection bg-spotlight text-secondary px-4 text-center"><div class="py-5"><h1 class="display-5 fw-bold text-white">Lab Validations</h1><div class="col-lg-6 mx-auto"><p class="fs-5 mb-4"> Validating/Viewing students&#39; working hours and vacation. </p></div></div></div><div class="wrapperSection py-0 pb-5 bg-light position-relative text-secondary px-4"><div class="title">Main Information</div><div class="px-4 pt-5 mb-5 border-bottom"><div class="overflow-hidden" style="max-height:30vh;"><div class="container px-5 text-center"><img src="'+m+'" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" loading="lazy"></div></div><div class="col-lg-12 mx-auto"><p class="lead mb-4"> Lab validations serve as a way to validate hours that students have worked. This system was created as an easy way for students to confirm the days that they worked in the labs. Before 2016 CPES collected papers from students that detailed the number of days worked and any vacations that were taken. After 2016 a new PHP-based system was built by an external company.<br> When I arrived at CPES several staff approached me about improving the Lab Validation System. After a few meetings, mockups, and wireframes my coworkers seemed happy with what we had planned to create.<br></p></div></div><div class="row g-5"><div class="col-md-4"><div><div class="p-4 mb-3 bg-light rounded"><h4 class="fst-italic">Development</h4><p> The Lab Validation System interacts with the Support website MySQL database by using a custom REST API with several XMLHttpRequests. During the development cycle I used a bit of a Waterfall approach.<br> During the development of this system I modified a lot of the core back-end and querying abilities of the website to suit the new needs of the project. </p></div><div class="p-4 mb-3 bg-light rounded"><h4 class="fst-italic">The Team</h4><ol class="list-unstyled"><li><b>Matthew Scanland</b><br> In charge of planning, analysis, design, implementation, and maintenance. </li><li><b>Faculty and Staff</b><br> Clients - provide feedback on the prototypes and final system. </li></ol></div><div class="p-4 border-bottom bg-light rounded"><h4 class="fst-italic">Implementation Decisions</h4><p><b>Back-end</b><br> A MySQL database is ideal for this type of application. An ability to store and retrieve large sets of data within milliseconds was a requirement of the clients. Luckily, and with a lot of previous planning, for us the website already used a SQL database so minimal changes in the core mysqli functionality were needed. </p></div><div class="p-4 border-bottom bg-light rounded"><p><b>Front-end</b><br> The system needed to be consistent with other apps on the Support website. Given the large amount of data to be shown I decided to break the normal width constrictions and allow a full-width view.<br> Most statistics and data are stored in Bootstrap tables and are available to export to CSVs for external departments to review and parse when auditing. </p></div><div class="p-4 border-bottom bg-light rounded"><p><b>Ease-of-use</b><br> Good UX design is integral to any application but not many people think about the speed at which data needs to be retrieved and displayed. While there aren&#39;t complicated calculations going on in the background, there are thousands of rows of data queried and then parsed at a time.<br> Adding the ability to interact with and view this data as quickly as possible can make a huge difference over time for the user experience. </p></div><div class="p-4 border-bottom bg-light rounded"><p><b>Forward compatability</b><br> The system stores data in as few tables and columns as possible. The relational aspect of these tables allows other applications on the website to interact with the data. For example, overlapping Lab Validation Holidays and Internal Leave (a separate system on the website) is easily fixed with the click of a button. </p></div><div class="p-4 border-bottom bg-light rounded"><p><b>Future</b><br> The system in constantly being improved and modified to suit the always changing needs at CPES. As new systems are built they are almost always tied back to the Lab Validation system. </p></div></div></div><div class="col-md-8"><article class="blog-post"><h2 class="blog-post-title">The System</h2><div class="overflow-hidden" style="max-height:20vh;"><div class="container px-5 text-center"><img src="'+v+'" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" loading="lazy"></div></div><p> There are three views for Lab Validations; Students, Faculty, and Admin (Staff). Students see their calendar to confirm/edit any days worked. Faculty see their students, projects, and how many projected hours these Students and projects are expected to be charged. Staff see any statistics, projects tied to Students/Faculty, holidays, signatures, billing reports, etc. </p><p> The system begins with the end of a previously archived Lab Validation month. Data from the previous month is copied over using a multi-layered SQL query and some temporary tables. Any unneeded information is removed by Staff and any new information is added by Staff, using the <q>Modify Users</q> GUI. A call for approvals from Faculty is sent after the initial students, projects, holidays, etc. are inserted.<br> Faculty review how much their projects and students will be charged and sign on approval. This prompts Staff to send a request to Students for their actual hours. Students verify worked days and any days they have forgotten to submit an Internal Leave request for. After all students have signed the Lab Operations Director checks and approves the final results.<br> This process takes roughly 2-3 weeks to complete. After completion statistics on several facets are shown on the <q>Statistics/Sheets</q> section. </p><p> The Student and Faculty design/functionality is minimal so I will focus on the Staff side of things below. </p><hr><h3>Design</h3><p class="pt-4"> This application has a simple design. It&#39;s separated into sections based on the funcionality of each section.<br> There is a main navigational bar that allows the user to search for a specific student, input a previous month to view, find help, input any modifications for this month, and view reports/statistics. </p><hr><h3>Functionality</h3><div class="overflow-hidden" style="max-height:40vh;"><div class="container px-5 text-center"><img src="'+g+'" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" loading="lazy"></div></div><p class="pt-4"> A majority of the difficulty in creating this application comes from the back-end functionality. Lab Validations being the core of the financial and business department means it will interact with and query other application data regularly. Given that, Normalization was a priority in the design to provide the fastest possible queries.<br> A lot of the functionality wasn&#39;t requested by the Client and has been gradually added after the system was initially created. Overall the system has held up to the test of time and I haven&#39;t had to change any of the core structures. </p></article></div></div></div>',2);function y(e,a){return w}const S={},k=(0,h.Z)(S,[["render",y]]);var x=k;const L={class:"footer py-3 bg-dark border-top"},T=(0,s.uE)('<div class="container-fluid"><div class="row"><div class="col-md-8"><span class="text-muted small"><i>This website was built using Vue.js, and Bootstrap. It is hosted on AWS with an EC2 server. I plan to create web applications using AWS as well, hosted under a subdomain of matthewscanland.com.</i></span></div><div class="col-md-4 text-end"><span class="text-muted small"><i>Please contact me for any questions: <a href="mailto:mkscanland@gmail.com">mkscanland@gmail.com</a></i></span></div></div></div>',1),j=[T];function A(e,a){return(0,s.wg)(),(0,s.iD)("footer",L,j)}const I={},q=(0,h.Z)(I,[["render",A]]);var F=q,O={components:{NavBar:b,LabValidations:x,SiteFooter:F}};const P=(0,h.Z)(O,[["render",r]]);var D=P;t(9769);(0,i.ri)(D).mount("#app")},7683:function(e,a,t){e.exports=t.p+"img/lab-validations-help.163635ac.png"},7005:function(e,a,t){e.exports=t.p+"img/lab-validations-nav.e589390a.png"},9205:function(e,a,t){e.exports=t.p+"img/lab-validations-statistics.84d101b3.png"}},a={};function t(i){var s=a[i];if(void 0!==s)return s.exports;var n=a[i]={exports:{}};return e[i].call(n.exports,n,n.exports,t),n.exports}t.m=e,function(){var e=[];t.O=function(a,i,s,n){if(!i){var o=1/0;for(c=0;c<e.length;c++){i=e[c][0],s=e[c][1],n=e[c][2];for(var r=!0,d=0;d<i.length;d++)(!1&n||o>=n)&&Object.keys(t.O).every((function(e){return t.O[e](i[d])}))?i.splice(d--,1):(r=!1,n<o&&(o=n));if(r){e.splice(c--,1);var l=s();void 0!==l&&(a=l)}}return a}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[i,s,n]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var i in a)t.o(a,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:a[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e={645:0};t.O.j=function(a){return 0===e[a]};var a=function(a,i){var s,n,o=i[0],r=i[1],d=i[2],l=0;if(o.some((function(a){return 0!==e[a]}))){for(s in r)t.o(r,s)&&(t.m[s]=r[s]);if(d)var c=d(t)}for(a&&a(i);l<o.length;l++)n=o[l],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return t.O(c)},i=self["webpackChunkwebsite"]=self["webpackChunkwebsite"]||[];i.forEach(a.bind(null,0)),i.push=a.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(519)}));i=t.O(i)})();
//# sourceMappingURL=validations.dce939ed.js.map