import React from "react";

function Blogs() {
  return (
    <section id="blogs" className="blog-container">
      <h1 className="page-title">OUR LATEST BLOGS</h1>
      <div className="blog-content">
        <div className="big-div">
          <div className="big-div-content">
            <button className="big-div-button">Exercise</button>
            <h1 className="blog-h1">
              CONQUERING CONSISTENCY: HOW TO MAKE EXERCISE A HABIT YOU LOVE
            </h1>
            <div className="big-div-footer">
              <span className="calendar-icon">
                <i className="bi bi-calendar">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="white"
                    class="bi bi-calendar"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                  </svg>
                </i>
              </span>
              <span className="date">June 28, 2024</span>
              <span className="ver-line">|</span>
              <div className="author">
                <img
                  src="https://framerusercontent.com/images/HH8KrojyxZx6X20z1r13CSwiiWE.jpg?scale-down-to=512"
                  alt="Author"
                  className="author-photo"
                />
                <span className="author-name">Benjamin</span>
              </div>
            </div>
          </div>
        </div>
        <div className="small-div-container">
          <div className="small-div-top">
            <div className="small-div-content">
              <button className="small-div-button" id="small-btn">
                Weight loss
              </button>
              <h2 className="blog-h2">
                WEIGHT LOSS: A SUSTAINABLE APPROACH FOR A HEALTHIER YOU
              </h2>
              <div className="big-div-footer">
                <span className="calendar-icon">
                  <i className="bi bi-calendar">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="white"
                      class="bi bi-calendar"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                    </svg>
                  </i>
                </span>
                <span className="date">June 26, 2024</span>
                <span className="ver-line">|</span>
                <div className="author">
                  <img
                    src="https://framerusercontent.com/images/5P0eN6qtSxQg8Lrk6rw2GR9e7eI.jpg?scale-down-to=1024"
                    alt="Author"
                    className="author-photo"
                  />
                  <span className="author-name">Jessica</span>
                </div>
              </div>
            </div>
          </div>
          <div className="small-div-bottom">
            <div className="small-div-content">
              <button className="small-div-button">Nutrition</button>
              <h2 className="blog-h2">
                FUELYOUR FITNESS: A GUIDE TO NUTRITION FOR PEAK PERFORMANCE
              </h2>
              <div className="big-div-footer">
                <span className="calendar-icon">
                  <i className="bi bi-calendar">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="white"
                      class="bi bi-calendar"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                    </svg>
                  </i>
                </span>
                <span className="date">June 23, 2024</span>
                <span className="ver-line">|</span>
                <div className="author">
                  <img
                    src="	https://framerusercontent.com/images/G1bC6MQnKLl8c7ZyjwpJlVGuw.jpg?scale-down-to=512"
                    alt="Author"
                    className="author-photo"
                  />
                  <span className="author-name">David</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
