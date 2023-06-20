import AboutImage from "../assets/aboutImage.jpg";
import { DiHtml5, DiCss3, DiJavascript, DiReact } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { BsGit } from "react-icons/bs";

const About = () => {
  return (
    <div
      id="about"
      className=" w-full h-screen flex justify-center flex-col items-center md:flex-row md:max-w-[600px] mx-auto gap-14 lg:max-w-[850px] xl:max-w-5xl z-10 inset-0"
    >
      <div className="hidden w-[50%] xl:w-[40%] h-[300px] lg:flex flex-col gap-[50px] md:justify-center lg:justify-between ">
        <h3 className="hidden uppercase font-bold text-[35px] lg:text-[40px] leading-7 lg:flex justify-center">
          About Me
        </h3>
        <img
          src={AboutImage}
          alt="my photo"
          className="shadow-sm shadow-primary"
        />
      </div>
      <div className="w-[80%] lg:w-[65%] md:flex justify-center flex-col items-center gap-6 lg:h-[300px] md:justify-between">
        <h3 className="uppercase font-bold text-3xl text-center my-10 lg:hidden">
          About Me
        </h3>
        <p className="w-[100%] text-center  lg:text-lg pb-6 lg:pb-0">
          I'm Lattapan (or call me Noey), a frontend web developer. I'm
          experienced in HTML, CSS, JavaScript, React, and Tailwind. Currently
          exploring NextJS and learning about databases and user authentication.
          <br />
          <br />
          With previous experience in administration and customer service, I
          bring attention to detail, problem-solving, and communication skills
          to my work.
          <br />
          <br />
          Let's collaborate and create something amazing together!
        </p>
        <h4 className="uppercase pb-8 md:pb-0 font-bold mt-4 text-xl text-center">
          Skills
        </h4>

        <div className="flex items-center justify-between mx-auto w-full sm:w-[70%] sm:my-10 md:my-0">
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
        </div>
      </div>
    </div>
  );
};

export default About;
