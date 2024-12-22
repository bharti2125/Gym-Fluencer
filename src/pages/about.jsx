import React from "react";

function About() {
  return (
    <section id="about" className="about-container">
      <div className="about-front">
        <h1>
          YOUR FITNESS.
          <span style={{ display: "block" }}>OUR MISSION.</span>
        </h1>
        <p>
          At GymFluencer, our mission is simple: to provide the tools and
          support you need to <br />
          reach your fitness goals. We combine innovative technology with
          personalized guidance
          <br /> to make fitness easier, more accessible, and more motivating.
          Join us as we help you <br />
          transform your fitness journey, one workout at a time.
        </p>
      </div>
      <div className="about-container-box">
        <div className="box">
          <h1>463K+</h1>
          <p>
            Workouts logged and progress tracked
            <br /> every month
          </p>
        </div>
        <div className="box">
          <h1>163K+</h1>
          <p>
            Fitness enthusiasts connected through <br /> our platform
          </p>
        </div>
        <div className="box">
          <h1>13+</h1>
          <p>
            Countries where GymFluencer is making <br />
            an impact
          </p>
        </div>
      </div>

      <div className="about-video">
        <img
          src="https://framerusercontent.com/images/4LUsGH18LoMVPIiR5vKLiJSic0.png?scale-down-to=1024"
          className="girl-video"
          alt="video-img"
        />
      </div>
      <div className="about-middle">
        <h1>OUR SERVICES</h1>
        <p>
          GymFluencer offers 5 essential services to help you
          <br /> achieve your fitness goals with ease and flexibility.
        </p>
      </div>
      <div className="image-row">
        <div className="image-container">
          <img
            src="https://framerusercontent.com/images/QCoTSMtHpimr9lp2CmaQOtriXU.png"
            alt="Image 1"
          />
          <h2>TRACK</h2>
        </div>
        <div className="image-container">
          <img
            src="https://framerusercontent.com/images/LqURARtPkDasnz8xNZRw6V7LVc.png"
            alt="Image 2"
          />
          <h2>ANALYZE</h2>
        </div>
        <div className="image-container">
          <img
            src="https://framerusercontent.com/images/ZiSz1ONCwWlZSSTVgpW4sZm1hI.png"
            alt="Image 3"
          />
          <h2>TRAIN</h2>
        </div>
        <div className="image-container">
          <img
            src="https://framerusercontent.com/images/H2mFADPlDeJZEZVhsqozg6Yc0.jpg"
            alt="Image 4"
          />
          <h2>CONNECT</h2>
        </div>
        <div className="image-container">
          <img
            src="	https://framerusercontent.com/images/JrDw3jtgKjcQOYfgKW5tggM5U.jpg"
            alt="Image 5"
          />
          <h2>CHALLENGE</h2>
        </div>
      </div>
    </section>
  );
}

export default About;
