/** @format */

import React from "react";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-primary">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex items-center justify-between">
          <div>
            <span className="uppercase sm:text-2xl font-semibold whitespace-nowrap dark:text-white">
              <a href="https://github.com/lattapanr" target="_blank">
                Lattapan
              </a>
            </span>
          </div>
          <ul className="flex flex-wrap items-center justify-between w-[180px] sm:w-[250px]  cursor-pointer">
            <li className="group flex relative">
              <a href="#" target="_blank">
                <FaGithub size={30} />
              </a>
              <span
                className="group-hover:opacity-100 transition-opacity px-1 text-sm text-primary absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto dark:text-white"
              >
                @lattapanr
              </span>
            </li>
            <li className="group flex relative">
              <a href="https://linkedin.com/in/lattapan" target="_blank">
                <FaLinkedin size={30} />
              </a>
              <span
                className="group-hover:opacity-100 transition-opacity px-1 text-sm text-primary absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto dark:text-white"
              >
                linkedin.com/in/lattapan
              </span>
            </li>
            <li className="group flex relative">
              <a href="#" target="_blank">
                <IoMdMail size={30} />
              </a>
              <span
                className="group-hover:opacity-100 transition-opacity px-1 text-sm text-primary absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto dark:text-white"
              >
                lattapanr@gmail.com
              </span>
            </li>
            <li className="group flex relative">
              <a href="#" target="_blank">
                <BsFillFileEarmarkPersonFill size={30} />
              </a>
              <span
                className="group-hover:opacity-100 transition-opacity px-1 text-sm text-primary absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto dark:text-white"
              >
                Resume
              </span>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
          © 2023{" "}
          <a
            href="https://github.com/lattapanr"
            target="_blank"
            className="hover:underline"
          >
            Lattapan™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
