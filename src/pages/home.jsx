import React from "react";

function Home() {
  return (
    <section id="home" className="cover-container">
      <div className="content">
        <span className="badge d-flex align-items-center p-1 pe-2   border rounded-pill">
          <div className="image-stack">
            <img
              className="stacked-image rounded-circle"
              width="24"
              height="24"
              src="	https://framerusercontent.com/images/zA7hg7OUnSahgBJcsn7HpCAtY.png"
              alt="third"
            />
            <img
              className="stacked-image rounded-circle"
              width="24"
              height="24"
              src="	https://framerusercontent.com/images/FW7gdHyIJZUqRX0WLmQwCo53YI4.png"
              alt="first"
            />
            <img
              className="rounded-circle"
              width="24"
              height="24"
              src="	https://framerusercontent.com/images/Bwgwwe4qJCF29kCrDg7c4NMzek.png"
              alt="second"
            />
          </div>
          <span className="badge-text">Trusted by 3+ million users</span>
        </span>
        <h1>
          Track Your Fitness
          <span style={{ display: "block" }}>Journey</span>
        </h1>
        <p className="lead">
          Discover the ultimate fitness companion with GymFluencer. Effortlessly
          log your workouts, count reps, and track calories burned. Stay
          motivated and achieve your goals with ease.
        </p>
      </div>
      <div className="container-animation">
        <p className="carousel-paragraph-1">
          TRANSFORMATION / FITNESS / MOTIVATION / PROGRESS /{" "}
        </p>
        <p className="carousel-paragraph-2">
          Communitty / Strength / Progress / WORK /{" "}
        </p>
      </div>
    </section>
  );
}

export default Home;
