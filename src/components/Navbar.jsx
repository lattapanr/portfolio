/** @format */
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsFillMoonFill } from "react-icons/bs";

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
      <BsFillMoonFill
        onClick={toggleDarkMode}
        className="absolute size={'4em'} top-4 left-4 z-[99]"
      />
      <RxHamburgerMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden"
      />

      {nav ? (
        <div>
          <a href="#main">
            <RxHamburgerMenu />
          </a>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
