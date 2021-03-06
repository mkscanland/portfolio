<template>
  <div class="wrapperSection bg-spotlight text-secondary px-4 text-center">
    <div class="py-5">
      <h1 class="display-5 fw-bold text-white">Matthew Scanland</h1>
      <div class="col-lg-6 mx-auto">
        <p class="fs-5 mb-4">
          Welcome to my portfolio website. Please take a look around. I'm currently still building the website so some functionality will be diminished.
        </p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <a class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold" href="#significantProjects">My Portfolio</a>
          <a class="btn btn-outline-light btn-lg px-4" href="/files/Matthew-Scanland_Resume.pdf">Resume</a>
        </div>
      </div>
    </div>
  </div>
  <div class="wrapperSection bg-orange position-relative text-white px-4 text-center">
    <div class="title">Career</div>
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto whiteBox">
        <h1>Full-stack Developer and IT Specialist</h1>
        <p>
          <span class="small">Bachelor's of Computer Science from Virginia Tech</span>
        </p>
        <a class="btn btn-outline-light btn-lg px-4" href="/files/Matthew-Scanland_Resume.pdf">Resume</a>
      </div>
    </div>
  </div>
  <div class="wrapperSection bg-light position-relative text-dark px-4 text-center">
    <div class="title">About Me</div>
    <div class="row py-lg-5">
      <div class="col-lg-8 col-md-10 mx-auto">
        <img src="~@/assets/images/scanland_matthew.jpg" class="img-fluid rounded" alt="Picture of me at a farm">
        <p class="lead text-muted pt-3">
          I received my BA of Computer Science from Virginia Tech in January 2019, specializing in Human Computer Interaction. My favorite hobbies are reading, gaming, hiking, and relaxing with my family and their dogs. At the moment I am working for Virginia Tech under the research organization 'Center for Power Electronics Systems' as a Full-Stack Developer and IT Specialist.<br>
          During my time at CPES I have designed and implemented several large projects. While implementing these projects I work with a team of students and faculty to create programs when needed.<br>
          I specialize in back-end engineering and enjoy website development. I am well versed in Java, Javascript/JQuery, CSS, HTML, PHP, and SQL with an understanding of C, scheme, and python.<br>
          While working on projects I believe in focusing on effecient and readable designs to maximize positive user and programmer experience. 
        </p>
      </div>
    </div>
  </div>
  <a id="significantProjects"></a>
  <div class="wrapperSection bg-grey position-relative text-dark px-4 pb-0">
    <div class="title">Significant Projects</div>
    <div class="row py-lg-5">
      <div class="col-lg-8 col-md-10 mx-auto">
        <div class="container px-4">
          <h2 class="pb-2 border-bottom">Wed Applications</h2>
          <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div class="col d-flex align-items-start">
              <div class="icon-square text-dark flex-shrink-0 me-3">
              </div>
              <div>
                <h2>Internal Website Rebuild</h2>
                <p>
                  <span class="small">Sep 2019 – Now</span><br>
                  A complete overhaul of a previous version of the internal support website and continued development. This website is designed to help our students, faculty, staff, and visiting scholars access information and communicate with eachother more efficiently. It houses several web apps that help coordinate purchases, internal leave, help, and many other aspects.
                </p>
                <a href="/rebuild" class="btn btn-info">
                  Read More
                </a>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <div class="icon-square text-dark flex-shrink-0 me-3">
                <svg class="bi" width="1em" height="1em"><use xlink:href="#toggles2"></use></svg>
              </div>
              <div>
                <h2>Lab Validation System</h2>
                <p>
                  <span class="small">Aug 2019 – Dec 2019</span><br>
                  Complete build of the internal Lab Validation System. This system tracks student hours, accounts, holidays, vacations, and other facets. An interface for admin staff allows the manipulation of data, view of statistics, export of data, etc.
                </p>
                <a href="/validations" class="btn btn-info">
                  Read More
                </a>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <div class="icon-square text-dark flex-shrink-0 me-3">
                <svg class="bi" width="1em" height="1em"><use xlink:href="#toggles2"></use></svg>
              </div>
              <div>
                <h2>Other Web Applications</h2>
                <p>
                  Throughout my time at CPES I have created several requested web apps. These include; Purchasing, Lab Reservations, Internal Vacations, Conference Room Reservations, and more.
                </p>
                <a href="/webapps" class="btn btn-info">
                  See all other Support Website applications
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-lightGrey position-relative text-dark px-4 pb-5">
    <div class="row py-lg-5">
      <div class="col-lg-8 col-md-10 mx-auto">
        <div class="container px-4">
          <h2 class="pb-2 border-bottom">Current Projects</h2>
          <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div class="col d-flex align-items-start">
              <div class="icon-square text-dark flex-shrink-0 me-3">
                <svg class="bi" width="1em" height="1em"><use xlink:href="#toggles2"></use></svg>
              </div>
              <div>
                <h2>Self Improvement</h2>
                <p>
                  This website is a pet project to learn AWS and Vue. I'll be updating it when I have the time.<br>
                  I also research various subjects for my job. Most of the time I need to learn best practices before I'm able to work on another application for the CPES websites and IT systems.
                </p>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <div class="icon-square text-dark flex-shrink-0 me-3">
                <svg class="bi" width="1em" height="1em"><use xlink:href="#toggles2"></use></svg>
              </div>
              <div>
                <h2>Tie the Support Back-end Together</h2>
                <p>
                  As I develop more applications on the support, CPES internal, website the back-end is beginning to grow exponentially. While designing these applications I have been accounting for this growth by looking for ways to tie these systems together when applicable.
                </p>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <div class="icon-square text-dark flex-shrink-0 me-3">
                <svg class="bi" width="1em" height="1em"><use xlink:href="#toggles2"></use></svg>
              </div>
              <div>
                <h2>ML Automated Categorization</h2>
                <p>
                  I'm in the analysis stage of creating a way to automatically categorize papers on the main CPES website. I plan to use Python and a pre-built Spatie Crawler to parse and categorize papers based on select features. This will automate the process and save valuable human work hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-dark position-relative text-light px-4 pb-5">
    <div class="title">Important Practices &amp; Goals</div>
    <div class="row py-lg-5">
      <div class="col-lg-8 col-md-10 mx-auto">
        <div class="container px-4 py-5">
          <h2 class="pb-2 border-bottom">Practices</h2>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-4 py-5">
            <div class="col d-flex align-items-start">
              <svg class="bi text-muted flex-shrink-0 me-4" width="1.75em" height="1.75em"><use xlink:href="#bootstrap"></use></svg>
              <div>
                <h4 class="fw-bold mb-0">Radability</h4>
                <p>
                  Writing code that others are able to understand and read easily is one of my biggest goals. With my code I can ensure future updates are more easily implemented and bugs are fixed quickly.
                </p>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <svg class="bi text-muted flex-shrink-0 me-4" width="1.75em" height="1.75em"><use xlink:href="#cpu-fill"></use></svg>
              <div>
                <h4 class="fw-bold mb-0">Project Management</h4>
                <p>
                  Two of the most important practices to have a project run smoothly is coordination and organization. Having these two skills will make or break a project.
                </p>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <svg class="bi text-muted flex-shrink-0 me-4" width="1.75em" height="1.75em"><use xlink:href="#calendar3"></use></svg>
              <div>
                <h4 class="fw-bold mb-0">Communication</h4>
                <p>
                  Working with a team comes into play in nearly every aspect of Software Development. Great communication skills drastically improve morale, coordination, direction, engagement, and productivity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row py-0">
      <div class="col-lg-8 col-md-10 mx-auto">
        <div class="container px-4">
          <h2 class="pb-2 border-bottom">Goals</h2>
          <div class="album py-5">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 text-dark">
              <div class="col">
                <div class="card shadow-sm">
                  <img src="~@/assets/images/problem-solving.png" class="img-fluid">
                  <div class="card-body">
                    <p class="card-text">
                      <b>Problem Solving</b><br>
                      Finding a solution can be easy but finding a solution that works well, fits the constraints of the project, and is efficient takes a lot of knowledge and/or skill. Problem solving is used in nearly every aspect of Engineering. Without problems there wouldn't be a need for any new applications or software. I do all I can to ensure that my code is concise but solves the problem at its core.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card shadow-sm">
                  <img src="~@/assets/images/marble.png" class="img-fluid">
                  <div class="card-body">
                    <p class="card-text">
                      <b>Attention to Detail</b><br>
                      When working on a project I am sure to be thorough and accurate while handling complex code and documents. Writing, whether that is code or documents, should be as clear as possible. If I am not around to explain any of my writing the person reading it should be able to know precisely what is meant to be conveyed.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card shadow-sm">
                  <img src="~@/assets/images/analysis.png" class="img-fluid">
                  <div class="card-body">
                    <p class="card-text">
                      <b>Analysis</b><br>
                      Analyzing and predicting the requirements of a project and understanding those requirements is critical to the success of the team. Information should be examined to determine, recommend, and plan the correct course of action in any situation. A proper analysis is an investment of time that will pay off greatly in the end.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card shadow-sm">
                  <img src="~@/assets/images/reactiveness-hand.png" class="img-fluid">
                  <div class="card-body">
                    <p class="card-text">
                      <b>Usability</b><br>
                      Programs should be simple enough to use without being forced to read a manual.<br>
                      Users should be able to become familiar with the product, but they should also be able to use the product easily right away. There's nothing more frustrating than trying to reach a specific part of an application or website, only to have to click through buttons for three minutes. Shortcuts should be present while not being intrusive. I ensure that my programs are intuitive throughout their usage.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card shadow-sm">
                  <img src="~@/assets/images/ux-feeling.png" class="img-fluid">
                  <div class="card-body">
                    <p class="card-text">
                      <b>Feel</b><br>
                      The looks and usability of a product have a large affect on user experience and the feel arguably has the largest impact on that user's experience.<br>
                      When someone uses a product their final judgement is based on how they felt after accomplishing their task. Although functionality is very important providing a pleasurable experience should be a large goal. I try to provide this by focusing on the users feel of the product as well as the functionality.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card shadow-sm">
                  <img src="~@/assets/images/usability-coming-together.png" class="img-fluid">
                  <div class="card-body">
                    <p class="card-text">
                      <b>Responsiveness</b><br>
                      Responding to user input is critical in developing easy-to-use applications. Working with the user rather than for the user can improve their experience. For example, users should be able to see when the application is processing data or when a button has been clicked. Showing that the program is working through a task can help with impatience and has a calming effect.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <a id="contact"></a>
  <div class="wrapperSection bg-grey position-relative text-dark px-4 pb-0">
    <div class="title">Contact Info</div>
    <div class="row py-lg-5">
      <div class="col-lg-8 col-md-10 mx-auto">
        <div class="container px-4 py-5">
          <h2 class="pb-2 border-bottom">Feel Free to Use Any!</h2>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4 g-4 py-5">
            <div class="col d-flex align-items-start">
              <svg class="bi text-muted flex-shrink-0 me-4" width="1.75em" height="1.75em"><use xlink:href="#bootstrap"></use></svg>
              <div>
                <h4 class="fw-bold mb-0"><a href="https://www.linkedin.com/in/matthew-scanland/">LinkedIn</a></h4>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <svg class="bi text-muted flex-shrink-0 me-4" width="1.75em" height="1.75em"><use xlink:href="#bootstrap"></use></svg>
              <div>
                <h4 class="fw-bold mb-0">Email</h4>
                <p>
                  <a href="mailto:mkscanland@gmail.com">mkscanland@gmail.com</a>
                </p>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <svg class="bi text-muted flex-shrink-0 me-4" width="1.75em" height="1.75em"><use xlink:href="#cpu-fill"></use></svg>
              <div>
                <h4 class="fw-bold mb-0">Phone</h4>
                <p>
                  (540) 267-5538
                </p>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <svg class="bi text-muted flex-shrink-0 me-4" width="1.75em" height="1.75em"><use xlink:href="#calendar3"></use></svg>
              <div>
                <h4 class="fw-bold mb-0">Carrier Pigeon</h4>
                <p>
                  Send to <q>The Bird Man</q>. He will relay the message shortly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}*/
</script>
