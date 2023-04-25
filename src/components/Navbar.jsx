/** @format */
import React, { useState } from "react";
import { AiFillHome, AiFillProject, AiFillMail } from "react-icons/ai";
import {
    BsFillMoonFill,
    BsPersonFill,
    BsFillFileEarmarkPersonFill,
} from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaGithub, FaLinkedin, FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div>
            <div className="fixed w-full h-[80px] flex justify-between items-center px-4 text-[#1C1918]">
                {/* Dark mode icon */}
                <div color={"#1C1918"} onClick={toggleDarkMode} className="">
                    <BsFillMoonFill size={21} />
                </div>

                {/* Desktop menu */}
                <ul className=" hidden w-[280px] justify-between text-xl  xl:w-[360px] xl:text-2xl italic md:flex">
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
            </div>
            {/* Hamburger */}
            {/* //TODO: Make the icon fixed on the top of the page (when moved into the main nav div, the icon stayed behind the background of the mobile menu) */}
            <div
                onClick={handleNav}
                className="fixed absolute top-8 right-4 z-[9999] md:hidden"
            >
                {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
            </div>
            {/* Mobile menu */}
            {nav ? (
                <div className="fixed w-full h-screen bg-white flex flex-col justify-center items-center z-20">
                    <a
                        onClick={handleNav}
                        href="#home"
                        className="w-[60%] flex justify-center items-center rounded-sm shadow-lg bg-white-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    >
                        <AiFillHome size={20} />
                        <span className="pl-4 font-header uppercase">Home</span>
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
                        <span className="pl-4 font-header uppercase">Work</span>
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
                    <li className="w-[120px] h-[50px] flex justify-between items-center ml-[-70px] hover:ml-[-5px] duration-300 bg-[#1C1918]">
                        <a
                            className="flex justify-between items-center w-full px-[13px]"
                            href="/"
                        >
                            <span className="text-white text-sm">Github</span>
                            <FaGithub size={25} color="white" />
                        </a>
                    </li>

                    {/* Linkedin icon */}
                    <li className="w-[120px] h-[50px] flex justify-between items-center ml-[-70px] hover:ml-[-5px] duration-300 bg-[#1C1918]">
                        <a
                            className="flex justify-between items-center w-full px-[13px]"
                            href="/"
                        >
                            <span className="text-white text-sm">Linkedin</span>
                            <FaLinkedin size={25} color="white" />
                        </a>
                    </li>

                    {/* Email icon */}
                    <li className="w-[120px] h-[50px] flex justify-between items-center ml-[-70px] hover:ml-[-5px] duration-300 bg-[#1C1918]">
                        <a
                            className="flex justify-between items-center w-full px-[13px]"
                            href="/"
                        >
                            <span className="text-white text-sm">Email</span>
                            <AiFillMail size={25} color="white" />
                        </a>
                    </li>

                    {/* Resume */}
                    <li className="w-[120px] h-[50px] flex justify-between items-center ml-[-70px] hover:ml-[-5px] duration-300 bg-[#1C1918]">
                        <a
                            className="flex justify-between items-center w-full px-[13px]"
                            href="/"
                        >
                            <span className="text-white text-sm">Resume</span>
                            <BsFillFileEarmarkPersonFill
                                size={25}
                                color="white"
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
