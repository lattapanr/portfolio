/** @format */
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiFillHome, AiFillProject } from "react-icons/ai";
import { BsFillMoonFill, BsPersonFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

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
            {/* Dark mode icon */}
            <BsFillMoonFill
                size={20}
                onClick={toggleDarkMode}
                className="absolute size={'4em'} top-4 left-4 z-[99]"
            />

            {/* Hamburger */}
            <RxHamburgerMenu
                size={25}
                onClick={handleNav}
                className="absolute top-4 right-4 z-[99] md:hidden"
            />

            {/* Mobile menu */}
            {nav ? (
                <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
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
                        <span className="pl-4 font-header uppercase">
                            Projects
                        </span>
                    </a>

                    <a
                        onClick={handleNav}
                        href="#contact"
                        className="w-[60%] flex justify-center items-center rounded-sm shadow-lg bg-white-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    >
                        <IoMdMail size={20} />
                        <span className="pl-4 font-header uppercase text-blue-500">
                            Contact
                        </span>
                    </a>
                </div>
            ) : (
                ""
            )}

            {/* Social icons */}
            <div className="flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1C1918]">
                        <a
                            className="flex justify-between items-center w-full px-5"
                            href="/"
                        >
                            <span className="text-white">Github</span>
                            <FaGithub size={30} color="white" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
