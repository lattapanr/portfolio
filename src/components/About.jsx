/** @format */

import React from "react";
import Img1 from "../assets/image1.jpg";
import { DiHtml5, DiCss3, DiJavascript, DiReact } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { TbBrandNextjs } from "react-icons/tb";

const About = () => {
  return (
    <div
      id="about"
      className=" w-full h-screen flex justify-center flex-col items-center md:flex-row md:max-w-[600px] mx-auto gap-8 lg:max-w-[850px] xl:max-w-[1000px] z-10 inset-0"
    >
      <div className="hidden w-[50%] xl:w-[40%] h-[300px] md:flex flex-col gap-[50px] md:justify-center lg:justify-between ">
        <h3 className="hidden uppercase font-bold text-[35px] lg:text-[40px] leading-7 md:flex justify-center">
          About Me
        </h3>
        <img src={Img1} alt="my photo" />
      </div>
      <div className="w-[80%] md:w-[60%] lg:w-[65%] md:flex justify-center flex-col items-center gap-6 md:h-[300px] md:justify-between">
        <h3 className="uppercase font-bold pb-10 text-4xl text-center sm:my-10 md:hidden">
          About Me
        </h3>
        <p className="w-[100%] text-justify pb-6 md:pb-0 lg:text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio,
          consequatur iusto eveniet autem, pariatur ad tempora illum, ratione
          laudantium dolorem deleniti quibusdam! Quibusdam modi earum, dolore
          doloribus voluptates provident praesentium! ratione laudantium dolorem
          deleniti quibusdam! Quibusdam modi earum, dolore doloribus voluptates
          provident praesentium!
        </p>
        <h4 className="uppercase pb-8 md:pb-0 font-bold mt-4 text-xl text-center">
          Skills
        </h4>

        <div className="flex items-center justify-between mx-auto w-[80%] md:w-full lg:w-[80%] sm:my-10 md:my-0">
          <div className="group flex relative">
            <DiHtml5 size={35} />
            <span className="group-hover:opacity-100 transition-opacity px-1 text-md text-primary absolute right-1 -translate-y-5 translate-x-1/3 opacity-0 m-1 mx-auto dark:text-darkText">
              HTML5
            </span>
          </div>

          <div className="group flex relative">
            <DiCss3 size={35} />
            <span className="group-hover:opacity-100 transition-opacity px-1 text-md text-primary absolute right-1 -translate-y-5 translate-x-1/4 opacity-0 m-1 mx-auto dark:text-darkText">
              CSS3
            </span>
          </div>

          <div className="group flex relative">
            <DiJavascript size={35} />
            <span className="group-hover:opacity-100 transition-opacity px-1 text-md text-primary absolute right-1 -translate-y-5 translate-x-1/3 opacity-0 m-1 mx-auto dark:text-darkText">
              JavaScript
            </span>
          </div>

          <div className="group flex relative">
            <BsGit size={32} />
            <span className="group-hover:opacity-100 transition-opacity px-1 text-md text-primary absolute right-1 -translate-y-6 translate-x-1 opacity-0 m-1 mx-auto dark:text-darkText">
              Git
            </span>
          </div>

          <div className="group flex relative">
            <DiReact size={35} />
            <span className="group-hover:opacity-100 transition-opacity px-1 text-md text-primary absolute right-1 -translate-y-5 translate-x-1/3 opacity-0 m-1 mx-auto dark:text-darkText">
              React
            </span>
          </div>

          <div className="group flex relative">
            <SiTailwindcss size={35} />
            <span className="group-hover:opacity-100 transition-opacity px-1 text-md text-primary absolute right-1 -translate-y-5 translate-x-1/3 opacity-0 m-1 mx-auto dark:text-darkText">
              Tailwind
            </span>
          </div>

          <div className="group flex relative">
            <TbBrandNextjs size={35} />
            <span className="group-hover:opacity-100 transition-opacity px-1 text-md text-primary absolute right-1 -translate-y-5 translate-x-1/3 opacity-0 m-1 mx-auto dark:text-darkText">
              NextJS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
