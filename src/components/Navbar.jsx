/** @format */
import React, { useState } from "react";
import { AiFillHome, AiFillProject, AiFillMail } from "react-icons/ai";
import {
    BsFillMoonFill,
    BsFillSunFill,
    BsPersonFill,
    BsFillFileEarmarkPersonFill,
} from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaGithub, FaLinkedin, FaTimes, FaBars } from "react-icons/fa";

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <nav className="fixed bg-white/90 dark:bg-primary/90 w-full">
            <div className="max-w-screen-xl mx-auto text-primary dark:text-darkText px-4">
                <div className="h-[80px] flex justify-between items-center">
                    {/* Dark mode icon */}
                    <div
                        color={"#1C1918"}
                        onClick={toggleDarkMode}
                        className="cursor-pointer"
                    >
                        {!darkMode ? (
                            <BsFillMoonFill size={22} />
                        ) : (
                            <BsFillSunFill size={22} />
                        )}
                    </div>

                    {/* Desktop menu */}
                    <ul className=" hidden w-[300px] justify-between text-xl  xl:w-[360px] xl:text-2xl md:flex">
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#work">Work</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>

                    {/* Hamburger */}
                    <div
                        onClick={handleNav}
                        className="absolute top-8 right-4 z-[9999] md:hidden"
                    >
                        {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
                    </div>
                </div>

                {/* Mobile menu */}
                {nav ? (
                    <div className="fixed w-full h-[90%] bg-white flex flex-col justify-center items-center z-20 mt-[80px] dark:bg-darkBg">
                        <a
                            onClick={handleNav}
                            href="#home"
                            className="w-[60%] flex justify-center items-center rounded-sm shadow-lg bg-white-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                        >
                            <AiFillHome size={20} />
                            <span className="pl-4 font-header uppercase">
                                Home
                            </span>
                        </a>

                        <a
                            onClick={handleNav}
                            href="#about"
                            className="w-[60%] flex justify-center items-center rounded-sm shadow-lg bg-white-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                        >
                            <BsPersonFill size={20} />
                            <span className="pl-4 font-header uppercase">
                                About
                            </span>
                        </a>

                        <a
                            onClick={handleNav}
                            href="#work"
                            className="w-[60%] flex justify-center items-center rounded-sm shadow-lg bg-white-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                        >
                            <AiFillProject size={20} />
                            <span className="pl-4 font-header uppercase">
                                Work
                            </span>
                        </a>

                        <a
                            onClick={handleNav}
                            href="#contact"
                            className="w-[60%] flex justify-center items-center rounded-sm shadow-lg bg-white-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                        >
                            <IoMdMail size={20} />
                            <span className="pl-4 font-header uppercase">
                                Contact
                            </span>
                        </a>
                    </div>
                ) : (
                    ""
                )}
                {/* Social icons */}
                <div className="hidden md:flex fixed flex-col top-[35%] left-0">
                    <ul>
                        {/* Github icon */}
                        <li className="w-[120px] h-[50px] flex justify-between items-center ml-[-70px] hover:ml-[-5px] duration-300 bg-primary">
                            <a
                                className="flex justify-between items-center w-full px-[13px]"
                                href="https://github.com/lattapanr"
                                target="blank"
                            >
                                <span className="text-white text-sm">
                                    Github
                                </span>
                                <FaGithub size={25} color="white" />
                            </a>
                        </li>

                        {/* Linkedin icon */}
                        <li className="w-[120px] h-[50px] flex justify-between items-center ml-[-70px] hover:ml-[-5px] duration-300 bg-primary">
                            <a
                                className="flex justify-between items-center w-full px-[13px]"
                                href="/"
                                target="blank"
                            >
                                <span className="text-sm text-white">
                                    Linkedin
                                </span>
                                <FaLinkedin size={25} color="white" />
                            </a>
                        </li>

                        {/* Email icon */}
                        <li className="w-[120px] h-[50px] flex justify-between items-center ml-[-70px] hover:ml-[-5px] duration-300 bg-primary">
                            <a
                                className="flex justify-between items-center w-full px-[13px]"
                                href="/"
                                target="blank"
                            >
                                <span className="text-white text-sm">
                                    Email
                                </span>
                                <AiFillMail size={25} color="white" />
                            </a>
                        </li>

                        {/* Resume */}
                        <li className="w-[120px] h-[50px] flex justify-between items-center ml-[-70px] hover:ml-[-5px] duration-300 bg-primary">
                            <a
                                className="flex justify-between items-center w-full px-[13px]"
                                href="/"
                                target="blank"
                            >
                                <span className="text-white text-sm">
                                    Resume
                                </span>
                                <BsFillFileEarmarkPersonFill
                                    size={25}
                                    color="white"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
