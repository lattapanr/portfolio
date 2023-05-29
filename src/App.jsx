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

<<<<<<< HEAD
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
=======
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`bg-[#f2f4f3] ${darkMode ? "dark" : ""}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div>
        <Home darkMode={darkMode} />
        <About />
        <Work />
        <Contact />
        <Footer />
      </div>
    </div>
  );
>>>>>>> 6d4d4f02c0e7682b393d6b06e6674d5e55ed2a32
}

export default App;
