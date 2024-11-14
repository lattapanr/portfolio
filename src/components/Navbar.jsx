import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ResumeFile from "../assets/Resume_Lattapan.pdf";

import { AiFillHome, AiFillProject, AiFillMail } from "react-icons/ai";
import {
  BsFillMoonFill,
  BsFillSunFill,
  BsPersonFill,
  BsFillFileEarmarkPersonFill,
} from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaGithub, FaLinkedin, FaTimes, FaBars } from "react-icons/fa";

const SocialIcon = ({ icon, link, title, target = "_self", rel = "noopener noreferrer" }) => (
  <li className="w-[120px] h-[50px] flex justify-between items-center ml-[-70px] hover:ml-[-5px] duration-300 bg-primary">
    <a
      className="flex justify-between items-center w-full px-[13px]"
      href={link}
      target={target}
      rel={rel}
    >
      <span className="text-white text-sm">{title}</span>
      {icon}
    </a>
  </li>
);

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="fixed bg-white/90 dark:bg-primary/90 w-full z-[1000]">
      <div className="max-w-screen-xl mx-auto text-primary dark:text-darkText px-4">
        <div className="h-[80px] flex justify-between items-center">
          <div>
            <span className="uppercase text-xl md:text-2xl font-semibold whitespace-nowrap dark:text-white">
              <a href="/">Lattapan</a>
            </span>
          </div>

          <div className="flex items-center gap-6">
            {/* Desktop menu */}
            <ul className="hidden w-[300px] justify-between text-xl xl:w-[360px] xl:text-2xl md:flex">
              <li className="hover:underline">
                <AnchorLink href="#home">Home</AnchorLink>
              </li>
              <li className="hover:underline">
                <AnchorLink href="#about">About</AnchorLink>
              </li>
              <li className="hover:underline">
                <AnchorLink href="#work">Work</AnchorLink>
              </li>
              <li className="hover:underline">
                <AnchorLink href="#contact">Contact</AnchorLink>
              </li>
            </ul>

            {/* Dark mode icon */}
            <div
              color={"#1C1918"}
              onClick={toggleDarkMode}
              className="cursor-pointer"
            >
              {!darkMode ? (
                <BsFillMoonFill size={18} />
              ) : (
                <BsFillSunFill size={18} />
              )}
            </div>
          </div>

          {/* Hamburger */}
          <div
            onClick={handleNav}
            className="absolute top-8 right-11 z-[9999] md:hidden"
          >
            {!nav ? <FaBars size={18} /> : <FaTimes size={20} />}
          </div>
        </div>

        {/* Mobile menu */}
        {nav ? (
          <div>
            <div className="fixed w-full h-full bg-white flex flex-col justify-center items-center dark:bg-darkBg opacity-100 z-50 inset-0">
              <AnchorLink
                onClick={handleNav}
                href="#home"
                className="mobile-nav"
              >
                <AiFillHome size={20} />
                <span className="pl-4 font-header uppercase">Home</span>
              </AnchorLink>

              <AnchorLink
                onClick={handleNav}
                href="#about"
                className="mobile-nav"
              >
                <BsPersonFill size={20} />
                <span className="pl-4 font-header uppercase">About</span>
              </AnchorLink>

              <AnchorLink
                onClick={handleNav}
                href="#work"
                className="mobile-nav"
              >
                <AiFillProject size={20} />
                <span className="pl-4 font-header uppercase">Work</span>
              </AnchorLink>

              <AnchorLink
                onClick={handleNav}
                href="#contact"
                className="mobile-nav"
              >
                <IoMdMail size={20} />
                <span className="pl-4 font-header uppercase">Contact</span>
              </AnchorLink>
            </div>
          </div>
        ) : (
          ""
        )}

        {/* Social icons */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
          <ul>
            {/* Github icon */}
            <SocialIcon
              icon={<FaGithub size={25} color="white" />}
              link="https://github.com/lattapanr"
              title="GitHub"
              target="_blank"
            />

            {/* Linkedin icon */}
            <SocialIcon
              icon={<FaLinkedin size={25} color="white" />}
              link="https://linkedin.com/in/lattapan"
              title="LinkedIn"
              target="_blank"
            />

            {/* Email icon */}
            <SocialIcon
              icon={<AiFillMail size={25} color="white" />}
              link="#contact"
              title="Email"
            />

            {/* Resume */}
            <SocialIcon
              icon={<BsFillFileEarmarkPersonFill size={25} color="white" />}
              link={ResumeFile}
              title="Resume"
              target="_blank"
            />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
