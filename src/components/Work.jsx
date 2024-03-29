import BeautyHive from "../assets/projects/beautyHive.webp";
import Portfolio from "../assets/projects/portfolio.webp";
import FitnessPal from "../assets/projects/fitnessPal.webp";
import TalkBack from "../assets/projects/talkBack.png";
import "../index.css";

const ProjectItem = ({ image, title, desc, demoLink, codeLink }) => (
  <div
    style={{ backgroundImage: `url(${image})` }}
    className="shadow-sm shadow-primary group container flex justify-center items-center mx-auto bg-cover bg-no-repeat bg-center h-[180px] sm:h-[240px] max-w-[310px] sm:max-w-[400px] content_div"
  >
    <div className="opacity-0 group-hover:opacity-100 transition group-hover:duration-500">
      <h3 className="text-xl text-center font-bold text-white tracking-wide">
        {title}
      </h3>
      <p className="text-white text-center text-xs sm:text-sm lg:text-md px-2 lg:px-6">
        {desc}
      </p>
      <div className="flex justify-center">
        <a href={demoLink} target="_blank">
          <button className="text-center text-sm font-bold lg:text-md text-primary px-2 py-2 m-2 bg-white">
            Demo
          </button>
        </a>
        <a href={codeLink} target="_blank">
          <button className="text-center text-sm font-bold lg:text-md text-primary px-2 py-2 m-2 bg-white">
            Code
          </button>
        </a>
      </div>
    </div>
  </div>
);

const Work = () => {
  return (
    <div
      id="work"
      className="w-full text-primary mb-[10rem] mt-[10rem] lg:mt-0 lg:mb-0"
    >
      <div className="max-w-[1000px] mx-auto w-[85%] sm:w-full p-4 flex flex-col justify-center h-screen">
        <div className="pb-10">
          <h3 className="uppercase text-3xl md:text-4xl text-primary dark:text-white font-bold">
            Featured Projects
          </h3>
        </div>

        <div id="work" className="grid lg:grid-cols-2 gap-8">
          <ProjectItem
            image={BeautyHive}
            title="Beauty Hive"
            desc="Beauty Hive: A modern React website showcasing MakeupAPI's products. Search by brand, explore face, eye, and lip categories. Developed with React, React Router, and optimized API calls."
            demoLink="https://beauty-hive.vercel.app/"
            codeLink="https://github.com/lattapanr/beauty-hive"
          />

          <ProjectItem
            image={TalkBack}
            title="TalkBack"
            desc="TalkBack is a React-based AI chat assistant that translates user input messages into various communication styles using OpenAI's text generation models."
            demoLink="https://talk-back-ten.vercel.app/"
            codeLink="https://github.com/lattapanr/talk-back"
          />

          <ProjectItem
            image={FitnessPal}
            title="Fitness Pal"
            desc="Fitness Pal is a web app using React, HTML/CSS, Axios, React Router, Material-UI. It integrates with YouTube Data API and RapidAPI for exercise data and video retrieval."
            demoLink="https://fitness-pal.vercel.app/"
            codeLink="https://github.com/lattapanr/fitness-pal"
          />

          <ProjectItem
            image={Portfolio}
            title="Portfolio Website"
            desc="This responsive portfolio website is built using React and Tailwind CSS. It showcases my work and provides a live contact form for easy communication. Also, it offers light and dark mode for visitor's visual themes preference"
            demoLink=""
            codeLink="https://github.com/lattapanr/portfolio"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
