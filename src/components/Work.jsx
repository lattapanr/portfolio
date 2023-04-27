import React from "react";
import EtchASketch from "../assets/etch-a-sketch.png";
import Img1 from "../assets/image2.jpg";
import Img2 from "../assets/image3.jpg";
import Img3 from "../assets/image4.jpg";
import "../index.css";

const Work = () => {
    return (
        <div name="work" className="w-full md:h-screen text-primary">
            <div className="max-w-[1000px] mx-auto w-[85%] sm:w-full p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-10">
                    <h3 className="uppercase text-4xl font-bold">
                        Featured Projects
                    </h3>
                </div>

                {/* Container */}
                <div className="grid sm:grid-cols-2 gap-8">
                    {/* Grid item 1*/}
                    <div
                        style={{ backgroundImage: `url(${Img1})` }}
                        className="shadow-sm shadow-primary group container flex justify-center items-center mx-auto content-div"
                    >
                        {/* Hover effects */}
                        <div className="opacity-0 group-hover:opacity-100 ">
                            <span className="text-2xl font-bold text-white tracking-wide">
                                React JS Application
                            </span>
                            <div className="flex justify-center">
                                <a href="">
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

                                <a href="">
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

                    {/* Grid item 2*/}
                    <div
                        style={{ backgroundImage: `url(${Img2})` }}
                        className="shadow-sm shadow-primary group container flex justify-center items-center mx-auto content-div"
                    >
                        {/* Hover effects */}
                        <div className="opacity-0 group-hover:opacity-90">
                            <span className="text-2xl font-bold text-white ">
                                React JS Application
                            </span>
                            <div className="flex justify-center">
                                <a href="">
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

                                <a href="">
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

                    {/* Grid item 3*/}
                    <div
                        style={{ backgroundImage: `url(${Img3})` }}
                        className="shadow-sm shadow-primary group container flex justify-center items-center mx-auto content-div"
                    >
                        {/* Hover effects */}
                        <div className="opacity-0 group-hover:opacity-90">
                            <span className="text-2xl font-bold text-white tracking-wide">
                                React JS Application
                            </span>
                            <div className="flex justify-center">
                                <a href="">
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

                                <a href="">
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

                    {/* Grid item 4*/}
                    <div
                        style={{ backgroundImage: `url(${EtchASketch})` }}
                        className="shadow-sm shadow-primary group container flex justify-center items-center mx-auto content-div"
                    >
                        {/* Hover effects */}
                        <div className="opacity-0 group-hover:opacity-90">
                            <span className="text-2xl font-bold text-white tracking-wide">
                                React JS Application
                            </span>
                            <div className="flex justify-center">
                                <a href="">
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

                                <a href="">
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
                </div>
            </div>
        </div>
    );
};

export default Work;
