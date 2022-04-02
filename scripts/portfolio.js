// get HTML Elements as JS objects

const aboutButton = document.getElementById("about");
const blogsButton = document.getElementById("blogs");
const contactButton = document.getElementById("contact");
const projectButton = document.getElementById("project");

//Add event listener to button with callback function
// animate__animated animate__hinge animate__delay-3s
// WELCOME;
document.getElementById(
  "space"
).innerHTML = `<h1 class='welcome2 d-none d-md-block animate__animated animate__flash '>Welcome! </h1> `;

//ABOUT
aboutButton.addEventListener("click", function () {
  document.getElementById("space").innerHTML = `
  <h1 class="display-4 p-1 welcome animate__animated animate__fadeIn text-center"> About Me </h1>
  <p class='text-center animate__animated animate__fadeIn animate__delay-10s p-3 text-justify '> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus elit, sollicitudin non tellus sed, vestibulum dictum risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam sed dolor sit amet sapien volutpat porta vel ut augue. Vestibulum eu orci magna. Maecenas posuere erat quis suscipit scelerisque. Curabitur hendrerit erat risus, at sagittis magna faucibus aliquam. Integer bibendum, augue at hendrerit blandit, tellus nisl pretium nunc, eget maximus neque odio vel lectus. Aliquam dolor quam, scelerisque vel faucibus at, convallis sit amet sem. Nam nec tortor tincidunt, dictum dolor eu, sodales mi. In eget facilisis nunc. Nullam in ex congue, dictum erat egestas, dignissim justo. Ut ultricies ornare mi, eget ornare nibh dapibus ut. Integer et accumsan dui.

  </p>`;

  //if you want sectionB to have a white background
  //   document.getElementById("sectionB").style.backgroundColor = "#ffffff";

  //   document.getElementById("space").style.color = "black"
});

contactButton.addEventListener("click", function () {
  document.getElementById("space").innerHTML = `
  
      <h1 class="display-1 p-2 welcome text-center"> Contact Me </h1>
      
      <div class="container">
      <form>  
          <div class="mb-3 row animate__animated animate__fadeInDown">
              <label class="col-sm-2 col-form-label"> Name: </label>
              <div class="col-sm-9"> <input class="form-control" type="text" id="name" placeholder=""></div>
             
          </div>
          <div class="mb-3 row animate__animated animate__fadeInDown animate__delay-1s">
              <label class=" col-sm-2 col-form-label"> Email: </label>
              <div class="col-sm-9"> <input class="form-control" type="text" id="name" placeholder=""></div>
             
          </div>
          <div class="mb-3 row animate__animated animate__fadeInDown animate__delay-2s">
              <label class=" col-sm-2 col-form-label"> Mobile: </label>
              <div class="col-sm-9"> <input class="form-control" type="text" id="name" placeholder=""></div>
             
          </div>
          <div class="mb-3 row animate__animated animate__fadeInDown animate__delay-3s">
              <label class=" col-sm-2 col-form-label"> Message: </label>
              <div class="col-sm-9">  <textarea class="form-control" rows="3" id="message" placeholder=""> </textarea></div>
             
          </div>
          <div class="d-flex flex-column align-items-center">
          <button type="submit" class=" text-center btn btn-outline-secondary text-light animate__animated animate__fadeInDown animate__delay-4s"> submit </button>
          </div>
      </form>
    </div>

  `;
});

projectButton.addEventListener("click", function () {
  document.getElementById("space").innerHTML = ` 
  <h1 class="p-3 welcome ">Projects</h1>
  <div class="row box animate__animated animate__fadeIn">
    <!-- start of col-md- 12 -->
    <div class="col-md-12 p-2 ">
      <div class="card-group gap-3">
        <div class="card bg-dark border-white">
          <div class="card-body">
            <img
              class="float-start img-thumbnail"
              src="assets/thumbnail.jpeg"
            />
            <h5 class="card-title pt-5">Interactive Story</h5>
            <p clas="text-box">
              Some quick example text to build on the card title and
              make up the bulk of the card's content.
            </p>
            <button class="btn btn-primary">Go somewhere</button>
          </div>
        </div>
      </div>
    </div>
    <!--end of col-md-12-->
    <!-- start of col-md- 12 -->
    <div class="col-md-12 p-2">
      <div class="card-group gap-3">
        <div class="card bg-dark border-white">
          <div class="card-body">
            <img
              class="float-start img-thumbnail"
              src="assets/thumbnail3.png"
            />
            <h5 class="card-title pt-5">Mini Goals</h5>
            <p clas="card-text">
              Some quick example text to build on the card title and
              make up the bulk of the card's content.
            </p>
            <button class="btn btn-primary">Go somewhere</button>
          </div>
        </div>
      </div>
    </div>
    <!--end of col-md-12-->
    <!-- start of col-md- 12 -->
    <div class="col-md-12 p-2">
      <div class="card-group gap-3">
        <div class="card bg-dark border-white">
          <div class="card-body">
            <img
              class="float-start img-thumbnail"
              src="assets/thumbnail4.png"
            />
            <h5 class="card-title pt-5">Trivia Quiz</h5>
            <p clas="card-text">
              Some quick example text to build on the card title and
              make up the bulk of the card's content.
            </p>
            <button class="btn btn-primary">Go somewhere</button>
          </div>
        </div>
      </div>
    </div>
    <!--end of col-md-12-->
    <div class="col-md-12 p-2">
      <div class="card-group gap-3">
        <div class="card bg-dark border-white">
          <div class="card-body">
            <img
              class="float-start img-thumbnail"
              src="assets/thumbnail4.png"
            />
            <h5 class="card-title pt-5">Trivia Quiz</h5>
            <p clas="card-text">
              Some quick example text to build on the card title and
              make up the bulk of the card's content.
            </p>
            <button class="btn btn-primary">Go somewhere</button>
          </div>
        </div>
      </div>
    </div>
    <!--end of col-md-12-->
    <div class="col-md-12 p-2">
      <div class="card-group gap-3">
        <div class="card bg-dark border-white">
          <div class="card-body">
            <img
              class="float-start img-thumbnail"
              src="assets/thumbnail4.png"
            />
            <h5 class="card-title pt-5">Trivia Quiz</h5>
            <p clas="card-text">
              Some quick example text to build on the card title and
              make up the bulk of the card's content.
            </p>
            <button class="btn btn-primary">Go somewhere</button>
          </div>
        </div>
      </div>
    </div>
    <!--end of col-md-12-->
  </div>
  <!-- end of first div -->
  `;
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    document.getElementById(
      "space"
    ).innerHTML = `<h1 class='welcome2 d-none d-md-block animate__animated animate__fadeIn '>Welcome! </h1> `;
  }
});
