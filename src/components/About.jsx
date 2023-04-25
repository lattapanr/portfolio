import React from "react";
import { DiHtml5, DiCss3, DiJavascript, DiReact } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { BsGit } from "react-icons/bs";

const About = () => {
    return (
        <div className=" w-full h-screen flex justify-center flex-col items-center">
            <div className="w-4/5 flex justify-center flex-col items-center">
                <h3 className="uppercase">About Me</h3>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Odio, consequatur iusto eveniet autem, pariatur ad tempora
                    illum, ratione laudantium dolorem deleniti quibusdam!
                    Quibusdam modi earum, dolore doloribus voluptates provident
                    praesentium!
                </p>
                <h4 className="uppercase">Skills</h4>
                <div className="flex">
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
