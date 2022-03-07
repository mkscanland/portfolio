<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand">Matthew Scanland</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/files/2022-03-01_Matthew_Scanland_resume.pdf">Resume</a>
          </li>
          <li class="nav-item">
            <a class="nav-link dropdown-toggle" href="/#significantProjects" aria-expanded="false">
              Portfolio
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/rebuild">Internal Website Rebuild</a></li>
              <li><a class="dropdown-item" href="/validations">Lab Validations</a></li>
              <li><a class="dropdown-item" href="/webapps">Other Web Apps</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="/#contact" aria-expanded="false">
              Contact
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="https://www.linkedin.com/in/matthew-scanland/">LinkedIn</a></li>
              <li><a class="dropdown-item" href="mailto:mkscanland@gmail.com">Email</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>