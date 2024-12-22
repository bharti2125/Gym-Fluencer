import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home";
import About from "./pages/about";
import WorkoutPlan from "./pages/workoutPlan";
import Blogs from "./pages/blogs";
import Contacts from "./pages/contacts";
import DietPlan from "./pages/dietPlan";
import Benifits from "./pages/benifits";
import Cover from "./pages/cover";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cover />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/benifits" element={<Benifits />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/dietplan" element={<DietPlan />} />
          <Route path="/workoutplan" element={<WorkoutPlan />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
