import React from "react";

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <a href="/" className="navbar-left">
          <img
            src="https://framerusercontent.com/images/btsz5FjA3AvNFXvmH9iWv1xJd8.svg?scale-down-to=512"
            alt="Logo"
            className="navbar-logo"
          />
        </a>
        <ul className="navbar-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li className="dropdown">
            <a
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Our Services
              <span className="dropdown-arrow">
                <img src="https://framerusercontent.com/images/h8Xw3k0BxpKrikQD5WQQiQ5Es.svg" />
              </span>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="/workoutplan">WorkOut Plan</a>
              </li>
              <li>
                <a href="/dietplan">Diet Plan</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#benifits">Benifits</a>
          </li>
          <li>
            <a href="#blogs">Blogs</a>
          </li>
          <li>
            <a href="#contacts">Contact</a>
          </li>
        </ul>
        <button href="#" className="login-button">
          Join us now
        </button>
      </nav>
    </header>
  );
}

export default Header;

