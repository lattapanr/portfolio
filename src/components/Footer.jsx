import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ResumeFile from "../assets/Resume_Lattapan.pdf";

const SocialIcon = ({ icon, link, hoverText, target = "_self", rel = "noopener noreferrer" }) => (
  <li className="group flex relative">
    <a href={link} target={target} rel={rel}>
      {icon}
    </a>
    <span className="group-hover:opacity-100 transition-opacity px-1 text-sm text-primary absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto dark:text-white">
      {hoverText}
    </span>
  </li>
);

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-primary">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex items-center justify-between">
          <div>
            <span className="uppercase sm:text-2xl font-semibold whitespace-nowrap dark:text-white">
              <a href="#home">Lattapan</a>
            </span>
          </div>

          <ul className="flex flex-wrap items-center justify-between w-[180px] sm:w-[250px] cursor-pointer">
            <SocialIcon
              icon={<FaGithub size={30} />}
              link="https://github.com/lattapanr"
              hoverText="@lattapanr"
              target="_blank"
            />
            <SocialIcon
              icon={<FaLinkedin size={30} />}
              link="https://linkedin.com/in/lattapan"
              hoverText="linkedin.com/in/lattapan"
              target="_blank"
            />
            <SocialIcon
              icon={<IoMdMail size={30} />}
              link="#contact"
              hoverText="lattapanr@gmail.com"
            />
            <SocialIcon
              icon={<BsFillFileEarmarkPersonFill size={30} />}
              link={ResumeFile}
              hoverText="Resume"
              target="_blank"
            />
          </ul>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
          © 2024{" "}
          <a
            href="https://github.com/lattapanr"
            target="_blank"
            rel="noopener noreferrer"
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
