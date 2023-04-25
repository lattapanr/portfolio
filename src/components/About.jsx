/** @format */

import React from "react";
import AboutPhoto from "../assets/me2.jpg";
import { DiHtml5, DiCss3, DiJavascript, DiReact } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { BsGit } from "react-icons/bs";

const About = () => {
  return (
    <div className=" w-full h-screen flex justify-center flex-col items-center  md:flex-row max-w-[600px] mx-auto md:gap-8 lg:max-w-[750px] xl:max-w-[1000px]">
      <div className="hidden w-[300px] h-[250px] md:flex flex-col gap-[50px] md:justify-between lg:w-[400px] ">
        <img src={AboutPhoto} alt="" className=" xl:w-[300px]" />
        <h3 className="hidden uppercase text-[32px] leading-6 md:flex text-center ">
          About Me
        </h3>
      </div>
      <div className="w-4/5 flex justify-center flex-col items-start gap-6 md:h-[300px] md:justify-between">
        <h3 className="uppercase text-xl md:hidden">About Me</h3>
        <p className="max-w-lg md:text-md lg:text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio,
          consequatur iusto eveniet autem, pariatur ad tempora illum, ratione
          laudantium dolorem deleniti quibusdam! Quibusdam modi earum, dolore
          doloribus voluptates provident praesentium!
        </p>
        <h4 className="uppercase mt-8 lg:text-xl">Skills</h4>
        <div className="flex justify-between w-[330px]">
          <DiHtml5 size={30} />
          <DiCss3 size={30} />
          <DiJavascript size={30} />
          <BsGit size={28} />
          <DiReact size={30} />
          <SiTailwindcss size={30} />
        </div>
      </div>
    </div>
  );
};

export default About;
