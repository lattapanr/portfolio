import EtchASketch from "../assets/projects/etch-a-sketch.png";
import Img1 from "../assets/image2.jpg";
import Img2 from "../assets/image3.jpg";
import FitnessPal from "../assets/projects/fitness-pal.png";
import "../index.css";

const ProjectItem = ({ image, title, demoLink, codeLink }) => (
    <div
        style={{ backgroundImage: `url(${image})` }}
        className="shadow-sm shadow-primary group container flex justify-center items-center mx-auto content-div bg-cover bg-no-repeat bg-center h-[22vh] sm:h-[30vh] max-w-xs md:max-w-[26rem]  lg:max-w-md"
    >
        <div className="opacity-0 group-hover:opacity-100 transition group-hover:duration-500">
            <span className="text-2xl font-bold text-white tracking-wide">
                {title}
            </span>
            <div className="flex justify-center">
                <a href={demoLink} target="_blank">
                    <button className="text-center px-4 py-3  m-2 bg-white text-primary font-bold text-lg">
                        Demo
                    </button>
                </a>
                <a href={codeLink} target="_blank">
                    <button className="text-center px-4 py-3  m-2 bg-white text-primary font-bold text-lg">
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
            className="w-[75%] h-screen text-primary max-w-[1000px] mx-auto flex flex-col justify-center my-32 lg:my-0"
        >
            <div className="pb-10">
                <h3 className="uppercase text-3xl lg:text-4xl text-primary dark:text-white font-bold">
                    Featured Projects
                </h3>
            </div>

            <div id="work" className="grid lg:grid-cols-2 gap-8">
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
    );
};

export default Work;
