import BeautyHive from "../assets/projects/beautyHive.webp";
import Portfolio from "../assets/projects/portfolio.webp";
import GBAC from "../assets/projects/gbac.png";
import TalkBack from "../assets/projects/talkBack.png";
import "../index.css";

const ProjectItem = ({ image, title, desc, demoLink, codeLink }) => (
  <div
    style={{ backgroundImage: `url(${image})` }}
    className="shadow-sm shadow-primary group container flex justify-center items-center mx-auto bg-cover bg-no-repeat bg-center h-[200px] sm:h-[250px] w-full max-w-[340px] sm:max-w-[400px] content_div"
  >
    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black bg-opacity-50 p-4 rounded-md">
      <h3 className="text-lg sm:text-xl text-center font-bold text-white tracking-wide">
        {title}
      </h3>
      <p className="text-white text-center text-xs sm:text-sm lg:text-base px-2 lg:px-4">
        {desc}
      </p>
      <div className="flex justify-center mt-4">
        {demoLink && (
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            <button className="text-center text-sm font-bold lg:text-md text-primary px-4 py-2 mx-2 bg-white rounded-lg">
              Demo
            </button>
          </a>
        )}
        {codeLink && (
          <a href={codeLink} target="_blank" rel="noopener noreferrer">
            <button className="text-center text-sm font-bold lg:text-md text-primary px-4 py-2 mx-2 bg-white rounded-lg">
              Code
            </button>
          </a>
        )}
      </div>
    </div>
  </div>
);

const Work = () => {
  return (
    <div
      id="work"
      className="w-full text-primary mb-[5rem] mt-[5rem] lg:mt-0 lg:mb-0"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 flex flex-col justify-center">
        <div className="pb-8">
          <h3 className="uppercase text-3xl md:text-4xl text-primary dark:text-white font-bold text-center">
            Featured Projects
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          <ProjectItem
            image={BeautyHive}
            title="Beauty Hive"
            desc="A modern React website showcasing MakeupAPI's products with search functionality and optimized API calls."
            demoLink="https://beauty-hive.vercel.app/"
            codeLink="https://github.com/lattapanr/beauty-hive"
          />

          <ProjectItem
            image={TalkBack}
            title="TalkBack"
            desc="A React-based AI chat assistant that translates user input messages using OpenAI's text generation models."
            demoLink="https://talk-back-ten.vercel.app/"
            codeLink="https://github.com/lattapanr/talk-back"
          />

          <ProjectItem
            image={GBAC}
            title="GBAC Website"
            desc="The official platform for the Greater Bangkok Athletics Conference. Built with React, Vite, Tailwind CSS, and Google Maps API."
            demoLink="https://gbacsports.com"
          />

          <ProjectItem
            image={Portfolio}
            title="Portfolio Website"
            desc="A responsive portfolio website built with React and Tailwind CSS. Features a live contact form and theme toggle."
            demoLink="https://github.com/lattapanr/portfolio"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;