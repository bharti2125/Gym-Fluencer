import React from "react";
import Blogs from "./blogs";
import About from "./about";
import Benifits from "./benifits";
import Contact from "./contacts";
import Home from "./home";

function Cover() {
  return (
    <div className="cover-page">
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>

      <section id="benifits">
        <Benifits />
      </section>

      <section id="blogs">
        <Blogs />
      </section>

      <section id="contacts">
        <Contact />
      </section>
    </div>
  );
}

export default Cover;
