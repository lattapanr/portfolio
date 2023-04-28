import React from "react";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";

const Footer = ({ darkMode }) => {
    return (
        <footer
            className={`bg-white shadow dark:bg-primary ${
                darkMode ? "dark" : ""
            }`}
        >
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="mb-5">
                        <span className="uppercase self-center text:xl sm:text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Lattapan
                        </span>
                    </div>
                    <ul className="flex flex-wrap items-center justify-between w-[250px] mb-6 sm:mb-0 cursor-pointer">
                        <li className="group flex relative">
                            <a href="#" target="blank">
                                <FaGithub size={30} />
                            </a>
                            <span
                                className="group-hover:opacity-100 transition-opacity px-1 text-sm text-primary absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto"
                            >
                                @lattapanr
                            </span>
                        </li>
                        <li className="group flex relative">
                            <a href="#" target="blank">
                                <FaLinkedin size={30} />
                            </a>
                            <span
                                className="group-hover:opacity-100 transition-opacity px-1 text-sm text-primary absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto"
                            >
                                linkedin.com/in/lattapan
                            </span>
                        </li>
                        <li className="group flex relative">
                            <a href="#" target="blank">
                                <IoMdMail size={30} />
                            </a>
                            <span
                                className="group-hover:opacity-100 transition-opacity px-1 text-sm text-primary absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto"
                            >
                                lattapanr@gmail.com
                            </span>
                        </li>
                        <li className="group flex relative">
                            <a href="#" target="blank">
                                <BsFillFileEarmarkPersonFill size={30} />
                            </a>
                            <span
                                className="group-hover:opacity-100 transition-opacity px-1 text-sm text-primary absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto"
                            >
                                Resume
                            </span>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2023{" "}
                    <a href="https://flowbite.com/" className="hover:underline">
                        Lattapan™
                    </a>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
