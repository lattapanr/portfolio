/** @format */

import React from "react";
import MePhoto from "../assets/pisa.jpg";

const Home = () => {
  return (
    <div id="home" name="home" className="w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center items-center h-full font-tenor font-light leading-[3.5rem] md:leading-[4rem] xl:leading-[5rem] text-[55px] md:text-[65px] xl:text-[75px] uppercase tracking-widest">
        <h1 className="mt-[90px] animate-[fade-right_1.5s_ease-in-out]">
          Lattapan
        </h1>
        <h2>Frontend</h2>
        <h2 className="animate-[fade-right_1.5s_ease-in-out]">Developer</h2>
        <img
          src={MePhoto}
          alt="my photo"
          className="h-[280px] w-[200px] object-cover xl:h-[350px] xl:w-[250px] shadow-sm shadow-primary "
        />
      </div>
    </div>
  );
};

export default Home;
