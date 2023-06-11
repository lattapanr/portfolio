/** @format */

import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <div className={`bg-[#f2f4f3] ${darkMode ? "dark" : ""}`}>
        <Navbar toggleDarkMode={toggleDarkMode} />
        <Home />
        <About />
        <Work />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
