/** @format */

import React from "react";
import ContactImage from "../assets/contactimage.jpg";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-[75%] h-screen max-w-[1000px] mx-auto flex justify-center items-center md:justify-between gap-8"
    >
      <div className="max-w-[500px]">
        <div className="mb-8">
          <p className="text-xl">Lattapan</p>
          <h3 className="uppercase w-full text-[45px] lg:text-[55px] leading-[3rem]">
            Let's work together
          </h3>
        </div>

        <form className="">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="name"
              id="contactName"
              className="block py-2 px-0 w-full text-base text-primary bg-transparent border-0 border-b-2 border-primary appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:primary peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="contactName"
              className="peer-focus:font-medium absolute text-lg text-primary dark:text-white duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="email"
              id="email"
              className="block py-2 px-0 w-full text-base text-primary bg-transparent border-0 border-b-2 border-primary appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:primary peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-lg text-primary dark:text-white duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="subject"
              id="subject"
              className="block py-2 px-0 w-full text-base text-primary bg-transparent border-0 border-b-2 border-primary appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:primary peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="subject"
              className="peer-focus:font-medium absolute text-lg text-primary dark:text-white duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Subject
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <textarea
              type="text"
              name="message"
              id="message"
              className="block py-3 px-0 w-full text-base text-primary whitespace-pre-line bg-transparent border-0 border-b-2 border-primary appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:primary peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="message"
              className="peer-focus:font-medium absolute text-lg text-primary dark:text-white duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Message
            </label>
          </div>

          <button
            type="submit"
            className="text-white bg-primary hover:bg-white hover:text-primary focus:ring-4 focus:outline-none focus:ring-primary font-extrabold rounded-sm text-base w-full sm:w-auto px-5 py-2.5 text-center dark:text-primary dark:font-extrabold dark:bg-white dark:hover:bg-primary dark:hover:text-white dark:focus:ring-white"
          >
            Submit
          </button>
        </form>
      </div>
      <img
        src={ContactImage}
        alt=""
        className="hidden md:flex h-[350px] w-[230px] lg:h-[430px] lg:w-[300px] shadow-primary shadow-sm"
      />
    </div>
  );
};

export default Contact;
