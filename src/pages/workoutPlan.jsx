import React from "react";

function WorkoutPlan() {
  return (
    <div className="workout-container">
      <div className="workout-front">
        <h1>WHAT IS THE WORKOUT PLAN</h1>
        <p>
          A workout plan is a structured schedule of exercises designed to help
          <br /> you reach your fitness goals, stay active, and improve your
          health.
        </p>
      </div>
      <div className="workout-middle">
        <h1>WHAT WE OFFER</h1>
        <div className="workout-container-box">
          <div className="workout-box">
            <div className="workout-icon">
              <i className="bi bi-person-add custom-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  className="bi bi-person-add"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                  <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                </svg>
              </i>
            </div>
            <p>Customized Workout Plans</p>
          </div>
          <div className="workout-box">
            <div className="workout-icon">
              <i className="bi bi-person-add custom-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  className="bi bi-person-add"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                  <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                </svg>
              </i>
            </div>
            <p>Professional Guidance</p>
          </div>
          <div className="workout-box">
            <div className="workout-icon">
              <i className="bi bi-person-add custom-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  className="bi bi-person-add"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                  <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                </svg>
              </i>
            </div>
            <p>Holistic Approach</p>
          </div>
        </div>
      </div>
      <div className="workout-front">
        <h1>SELECT YOUR WORKOUT PLAN</h1>
        <p>
          Choose a workout plan that fits your goals, whether
          <br /> it’s building strength, losing weight, or staying active.{" "}
          <br />
          Find the perfect plan for you!
        </p>
      </div>
      <div className="workout-image-row">
        <div className="workout-image-container">
          <img
            src="https://framerusercontent.com/images/A7pdLQOKkfozfphlzB5zvvzUSbg.jpg?scale-down-to=1024"
            alt="Image 1"
          />
          <h2>BEGINNER</h2>
          <p>
            Start your fitness <br />
            journey with simple and
            <br /> effective exercises.
          </p>
        </div>
        <div className="workout-image-container">
          <img
            src="	https://framerusercontent.com/images/KdiY7dNkalDnlUrQOJuxJen0fq4.jpg?scale-down-to=1024"
            className="down-img"
            alt="Image 2"
          />
          <h2>INTERMEDIATE</h2>
          <p>
            Start your fitness
            <br /> journey with simple and <br />
            effective exercises.
          </p>
        </div>
        <div className="workout-image-container">
          <img
            src="https://framerusercontent.com/images/WRmaXFrPEq17Lyab8nqbUFOL1O8.jpg?scale-down-to=1024"
            alt="Image 3"
          />
          <h2>ADVANCED</h2>
          <p>
            Push your limits with high-
            <br />
            intensity and complex movements.
          </p>
        </div>
        <div className="workout-image-container">
          <img
            src="	https://framerusercontent.com/images/TGaCkXYXttk4cqQM2LYZqA4ZL3o.jpg?scale-down-to=1024"
            className="down-img"
            alt="Image 4"
          />
          <h2>
            Personalized
            <span style={{ display: "block" }}>Workout Plan</span>
          </h2>
          <p>Create your own workout plan.</p>
        </div>
      </div>
      <div className="backgroundImage-container col-xl-12 col-xxl-12 px-4 mt-5 py-5">
        <div className="row align-items-center g-lg-3 mt-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold mb-3">
              Kickstart Your Fitness Journey with Gymfluencer
            </h1>
            <p className="col-lg-10">
              Experience all that GymFluencer has to offer with a free trial.
              Explore our world-class amenities, personalized diet plans, and
              professional training programs—absolutely free.
            </p>
            <div>
              <a href="/">
                <img
                  src="https://framerusercontent.com/images/btsz5FjA3AvNFXvmH9iWv1xJd8.svg?scale-down-to=512"
                  className="footer-logo"
                  alt="logo"
                />
              </a>
            </div>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Sign up
              </button>
              <hr className="my-4" />
              <small className="text-body-secondary">
                By clicking Sign up, you agree to the terms of use.
              </small>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkoutPlan;

