/** @format */

import React from "react";
import MePhoto from "../assets/pisa.jpg";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full">
        <h1 className="text-[40px] md:text-[50px] xl:text-[60px] leading-[2.75rem] md:leading-[3.5rem] xl:leading-[4rem] uppercase tracking-widest animate-[fade-right_1.5s_ease-in-out]">
          Lattapan
        </h1>
        <h2 className="text-[35px] md:text-[45px] xl:text-[55px] leading-[2.75rem] md:leading-[3.5rem] xl:leading-[4rem] uppercase tracking-widest">
          Frontend
        </h2>
        <h2 className="text-[35px] md:text-[45px] xl:text-[55px] leading-[2.75rem] md:leading-[3.5rem] xl:leading-[4rem] uppercase tracking-widest animate-[fade-right_1.5s_ease-in-out]">
          Developer
        </h2>
        <img
          src={MePhoto}
          alt="my photo"
          className="h-[280px] w-[200px] object-cover xl:h-[350px] xl:w-[250px]"
        />
      </div>
    </div>
  );
};

export default Home;
