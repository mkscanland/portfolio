<template>
  <div class="wrapperSection bg-lightbulb text-secondary px-4 text-center position-relative">
    <div class="py-5">
      <div class="col-lg-6 mx-auto position-absolute bottom-20 start-50 translate-middle-x">
        <h1 class="display-5 fw-bold text-white">Web Applications</h1>
      </div>
    </div>
  </div>
  <div class="wrapperSection py-0 pb-5 bg-lightGrey position-relative text-secondary px-4">
    <div class="title">Projects</div>
    <div class="row pt-5 pb-3">
      <div class="col-lg-12 col-md-12 mx-auto text-center">
        <p>
          Please enjoy various web applications that I've created throughout the years! If you have any further questions please feel free to <a href="/#contact">Contact me</a>.
        </p>
      </div>
    </div>
    <div class="row py-0">
      <div class="col-lg-12 col-md-12 mx-auto">
        <div class="album py-5">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 text-dark">
            <div class="col">
              <div class="projectContainer hasMore" id="leave" data-bs-toggle="modal" data-bs-target="#infoModal">
                <img src="~@/assets/images/internal-leave-calendar.png" class="img-fluid rounded" alt="Internal Leave Calendar">
                <div class="overlay">
                  <p class="small">SQL, PHP, JS, JQuery</p>
                  <p class="h4 projectTitle">Internal Leave</p>
                  <p>
                    The Internal Leave system allows students to quickly input vacation and business travel requests for advisor approval. Once approved, staff can search, sort, modify, and delete any requests without page reloads. The system also calculates individual leave for each student and determines if they are over their maximum allowed leave for that leave period.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="projectContainer hasMore" id="checkout" data-bs-toggle="modal" data-bs-target="#infoModal">
                <img src="~@/assets/images/checkout-forms.png" class="img-fluid rounded" alt="Forms checkout tracker">
                <div class="overlay">
                  <p class="small">SQL, PHP, JS, JQuery</p>
                  <p class="h4 projectTitle">Checkout Tracker</p>
                  <p>
                    The Checkout Tracker allows staff and faculty an instant view of where a student is in the process of leaving CPES. Some necessary information from the student is collected upon submission. The system is simple and checks the latest status of a checkout to show which step it is on. A query to the model shows if a student has submitted their Thesis/Dissertation to the uploading system.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="projectContainer hasMore" id="purchasing" data-bs-toggle="modal" data-bs-target="#infoModal">
                <img src="~@/assets/images/purchasing-tracker.png" class="img-fluid rounded" alt="purchasing tracker">
                <div class="overlay">
                  <p class="small">SQL, PHP, JS, JQuery</p>
                  <p class="h4 projectTitle">Purchasing/Reimbursements</p>
                  <p>
                    The Purchasing system currently has three functionalities: Purchases, Reimbursements, and Travel Reimbursements. Each system is similarly built. The user inputs a request for one of the previously mentioned functions and that requests goes through a chain of approvals. The tracker for each function has several stages that a request can be at. These requests can be searched and sorted. The system processes over 10k requests a year.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="projectContainer hasMore" id="reservations" data-bs-toggle="modal" data-bs-target="#infoModal">
                <img src="~@/assets/images/room-reservations.png" class="img-fluid rounded" alt="reservations calendar">
                <div class="overlay">
                  <p class="small">SQL, PHP, JS, JQuery</p>
                  <p class="h4 projectTitle">Room/HPC Reservations</p>
                  <p>
                    Room Reservations and HPC Reservations both use the FullCalendar Event Calendar. Users can reserve a time in a conference room or time on our HPCs (High Performance Computers). A user can reserve a single day, or recurring days for a specific time period. All reservations are stored in the database and pulled dynamically depending on which date is selected. If the Zoom Room (143) is selected a meeting link is added to the Zoom Room Google Calendar to easily start the meeting.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="projectContainer hasMore" id="uploading" data-bs-toggle="modal" data-bs-target="#infoModal">
                <img src="~@/assets/images/upload-archives.png" class="img-fluid rounded" alt="upload archives">
                <div class="overlay">
                  <p class="small">SQL, PHP, JS, JQuery</p>
                  <p class="h4 projectTitle">Uploading System</p>
                  <p>
                    Students and Faculty can upload their publications to the uploading system for easy archiving. Once uploaded any user can view the archives by using the search functionality. Using a fuzzy search the user can select any date, category, or specific metadata to fine tune their search. If a user makes a mistake and needs to re-upload a document, that can be done on any individual archive page.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="projectContainer hasMore" id="documents" data-bs-toggle="modal" data-bs-target="#infoModal">
                <img src="~@/assets/images/documents-mariadb.png" class="img-fluid rounded" alt="upload archives">
                <div class="overlay">
                  <p class="small">SQL, PHP, JS, JQuery</p>
                  <p class="h4 projectTitle">Document Retrieval and Insertion</p>
                  <p>
                    Document info is uploaded via XMLHttpRequests which is handeled by common PHP and JS classes for all documents on the Support website. These documents are retrieved and served via PHP after checking user authentication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div class="modal fade" id="infoModal" tabindex="-1" aria-labelledby="infoModalTitle" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title" id="infoModalTitle"></h3>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" id="infoModalBody">
          <img class="img-fluid ulShadow mx-auto d-block">
          <p class="intro mt-5"></p>
          <b>Details:</b>
          <p class="details mt-1"></p>
        </div>
      </div>
    </div>
  </div>
</template>