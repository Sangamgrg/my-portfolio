import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-primary text-gray-300">
      <div>
        <img src={Logo} alt="Logo image" className="w-1/3" />
      </div>
      {/* menu items */}

      <ul className="hidden md:flex">
        <li>
          <Link to="hero" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            MyWork
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            ContactMe
          </Link>
        </li>
      </ul>

      {/* Hamburger menu */}
      <div onClick={handleClick} className="md:hidden">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <div
        className={`space-y-4 px-4 mt-16 py-7 bg-base ${
          !nav ? "hidden" : "block fixed top-0 right-0 left-0"
        }`}>
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="block text-base text-gray-300 hover:text-primary">
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="block text-base text-gray-300 hover:text-primary ">
          About
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          className="block text-base text-gray-300 hover:text-primary ">
          Skills
        </Link>
        <Link
          to="work"
          smooth={true}
          duration={500}
          className="block text-base text-gray-300 hover:text-primary ">
          MyWork
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="block text-base text-gray-300 hover:text-primary ">
          ContactMe
        </Link>
      </div>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center -ml-[100px] hover:-ml-[10px] transition-all duration-300 bg-blue-600">
            <a
              href="https://www.linkedin.com/in/sangam-gurung-537977141"
              className="flex justify-between items-center w-full text-gray-300">
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center -ml-[100px] hover:-ml-[10px] transition-all duration-300 bg-[#333333]">
            <a
              href="https://github.com/Sangamgrg"
              className="flex justify-between items-center w-full text-gray-300">
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center -ml-[100px] hover:-ml-[10px] transition-all duration-300 bg-[#6fc2b0]">
            <a
              href="mailto:sangamgrg89@gmail.com?subject = Feedback&body = Message"
              className="flex justify-between items-center w-full text-gray-300">
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center -ml-[100px] hover:-ml-[10px] transition-all duration-300 bg-[#565f69]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300">
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
