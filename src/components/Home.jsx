import React from "react";
import MyPhoto from "../assets/profile.jpg";

const Home = () => {
  return (
    <div id="home" name="home" className="w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center items-center h-full font-tenor font-light leading-[2rem] md:leading-[3rem] xl:leading-[3.5rem] text-[2.25rem] md:text-[3.5rem] xl:text-[4rem] uppercase tracking-widest">
      <h1 className="mt-[90px] animate-[fade-right_1.5s_ease-in-out]">
  Lattapan
        </h1>
        <h2 className="animate-[fade-right_1.5s_ease-in-out] text-center text-4xl">Web Designer & Developer</h2>
        <img
          src={MyPhoto}
          alt="my photo"
          className="h-[280px] w-[200px] object-cover xl:h-[350px] xl:w-[250px] shadow-sm shadow-primary"
        />
      </div>
    </div>
  );
};

export default Home;
