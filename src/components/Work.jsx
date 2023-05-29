import React from "react";
import EtchASketch from "../assets/projects/etch-a-sketch.png";
import Img1 from "../assets/image2.jpg";
import Img2 from "../assets/image3.jpg";
import FitnessPal from "../assets/projects/fitness-pal.png";
import "../index.css";

const ProjectItem = ({ image, title, demoLink, codeLink }) => (
    <div
        style={{ backgroundImage: `url(${image})` }}
        className="content-div shadow-sm shadow-primary group container flex justify-center items-center gap-4 mx-auto bg-cover bg-no-repeat bg-center h-[240px] w-full sm:h-[280px] sm:w-[360px] lg:h-[320px] lg:w-[420px]"
    >
        <div className="opacity-0 group-hover:opacity-100 transition group-hover:duration-500">
            <span className="text-2xl font-bold text-white tracking-wide">
                {title}
            </span>
            <div className="flex justify-center">
                <a href={demoLink} target="_blank">
                    <button
                        className="text-center
                                    px-4
                                    py-3
                                    m-2
                                    bg-white
                                    text-primary
                                    font-bold
                                    text-lg"
                    >
                        Demo
                    </button>
                </a>
                <a href={codeLink} target="_blank">
                    <button
                        className="text-center
                                    px-4
                                    py-3
                                    m-2
                                    bg-white
                                    text-primary
                                    font-bold
                                    text-lg"
                    >
                        Code
                    </button>
                </a>
            </div>
        </div>
    </div>
);

const Work = () => {
    return (
        <div name="work" className="w-full text-primary">
            <div className="max-w-[1000px] mx-auto w-[85%] sm:w-full flex flex-col justify-center h-full">
                <div className="pb-10">
                    <h3 className="uppercase text-4xl text-primary dark:text-white font-bold">
                        Featured Projects
                    </h3>
                </div>

                <div id="work" className="grid md:grid-cols-2 gap-8">
                    <ProjectItem
                        image={Img1}
                        title="React JS Application"
                        demoLink=""
                        codeLink=""
                    />

                    <ProjectItem
                        image={Img2}
                        title="React JS Application"
                        demoLink=""
                        codeLink=""
                    />

                    <ProjectItem
                        image={FitnessPal}
                        title="React JS Application"
                        demoLink=""
                        codeLink="https://github.com/lattapanr/fitness-pal"
                    />

                    <ProjectItem
                        image={EtchASketch}
                        title="Grid Drawing Game"
                        demoLink="https://etch-a-sketch-wheat.vercel.app/"
                        codeLink="https://github.com/lattapanr/etch-a-sketch"
                    />
                </div>
            </div>
        </div>
    );
};

export default Work;
