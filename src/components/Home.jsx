/** @format */

import React from "react";
import MePhoto from "../assets/pisa.jpg";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full">
        <h1 className="text-[45px] leading-[3.25rem] uppercase">Lattapan</h1>
        <h2 className="text-[45px] leading-[3.25rem] uppercase">Frontend</h2>
        <h2 className="text-[45px] leading-[3.25rem] uppercase">Developer</h2>
        {/* Make text scalable/responsive */}
        <img
          src={MePhoto}
          alt="my photo"
          className="h-[350px] w-[250px] object-cover"
          //   make the text overlap the photo as mockup
        />
      </div>
    </div>
  );
};

export default Home;
