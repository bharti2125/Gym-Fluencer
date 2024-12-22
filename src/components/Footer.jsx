import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container ">
        <div className=" text-center pt-5">
          <a href="/">
            <img
              src="https://framerusercontent.com/images/btsz5FjA3AvNFXvmH9iWv1xJd8.svg?scale-down-to=512"
              className="footer-logo"
              alt="logo"
            />
          </a>
          <p className="footer-links py-3">
            {" "}
            Where Fitness Meets Social
            <span style={{ display: "block" }}>Connection!</span>
          </p>
          <p
            className="col-lg-4 mx-auto d-flex align-items-center"
            style={{ gap: "8px", fontWeight: "500" }}
          >
            <i className="bi bi-envelope">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
              </svg>
            </i>
            hello@gym.birlaventures.com
          </p>
        </div>
      </div>
      <div>
        <ul className="navbar-links justify-content-center  py-5 mb-3">
          <li className="footer-links">
            <a href="/" className="nav-link px-2 ">
              Home
            </a>
          </li>
          <span className="footer-dot">.</span>
          <li className="footer-links">
            <a href="/workoutplan" className="nav-link px-2 ">
              Workout Plan
            </a>
          </li>
          <span className="footer-dot">.</span>
          <li className="footer-links">
            <a href="/dietplan" className="nav-link px-2 ">
              Diet Plan
            </a>
          </li>
          <span className="footer-dot">.</span>
          <li className="footer-links">
            <a href="#contacts" className="nav-link px-2">
              FAQ's
            </a>
          </li>
          <span className="footer-dot">.</span>
        </ul>
        <div className="d-flex border-top">
          <div className="col-md-4 d-flex ">
            <p className=" ">© 2024 GymFluencer. All rights reserved.</p>
          </div>
          <div className="col-md-4">
            <ul className="nav justify-content-end list-unstyled d-flex">
              <li className="ms-3">
                <a className="text-body-secondary" href="#">
                  <i className="bi bi-linkedin">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-linkedin"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg>
                  </i>
                </a>
              </li>
              <li className="ms-3">
                <a className="text-body-secondary" href="#">
                  <i className="bi bi-twitter-x">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-twitter-x"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                    </svg>
                  </i>
                </a>
              </li>
              <li className="ms-3">
                <a className="text-body-secondary" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .2 2.7.5.7.3 1.3.7 1.9 1.3s1 .9 1.3 1.6c.3.7.4 1.5.5 2.7.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 2-.5 2.7-.3.7-.7 1.3-1.3 1.9-.6.6-1.2 1-1.9 1.3-.7.3-1.5.4-2.7.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.2-2.7-.5-.7-.3-1.3-.7-1.9-1.3s-1-.9-1.3-1.6c-.3-.7-.4-1.5-.5-2.7-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.2-2 .5-2.7.3-.7.7-1.3 1.3-1.9s.9-1 1.6-1.3c.7-.3 1.5-.4 2.7-.5 1.3-.1 1.7-.1 4.9-.1m0-2.2c-3.3 0-3.7 0-5 .1-1.3.1-2.3.2-3.1.5-.9.3-1.6.7-2.4 1.5-.7.7-1.2 1.5-1.5 2.4-.3.8-.4 1.8-.5 3.1C0 8.4 0 8.8 0 12s0 3.7.1 5c.1 1.3.2 2.3.5 3.1.3.9.7 1.6 1.5 2.4.7.7 1.5 1.2 2.4 1.5.8.3 1.8.4 3.1.5 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3-.1 2.3-.2 3.1-.5.9-.3 1.6-.7 2.4-1.5.7-.7 1.2-1.5 1.5-2.4.3-.8.4-1.8.5-3.1.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.2-2.3-.5-3.1-.3-.9-.7-1.6-1.5-2.4-.7-.7-1.5-1.2-2.4-1.5-.8-.3-1.8-.4-3.1-.5C15.7 0 15.3 0 12 0zm0 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 10.3c-2.3 0-4.2-1.9-4.2-4.2S9.7 7.7 12 7.7s4.2 1.9 4.2 4.2-1.9 4.2-4.2 4.2zm6.6-11.5c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4 1.4.6 1.4 1.4-.6 1.4-1.4 1.4z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
