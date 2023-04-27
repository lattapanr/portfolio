/** @format */

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";

function App() {
    return (
        <div className="bg-[#f2f4f3]">
            <Navbar />
            <Home />
            <About />
            <Work />
        </div>
    );
}

export default App;
