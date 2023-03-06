import React from "react";
import { Link } from "react-scroll";
import { BiHomeAlt } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import { BsClipboardData, BsBriefcase, BsChat } from "react-icons/bs";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div
          className="w-full bg-black/20 h-[70px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto
        px-5 flex justify-between items-center text-2xl text-white/50
        "
        >
          <Link
            className=" cursor-pointer h-[60px] w-[60px] flex items-center justify-center"
            to="home"
            smooth={true}
            activeClass="active"
            spy={true}
          >
            <BiHomeAlt />
          </Link>
          <Link
            className=" cursor-pointer h-[60px] w-[60px] flex items-center justify-center"
            to="about"
            smooth={true}
            activeClass="active"
            spy={true}
          >
            <GiSkills />
          </Link>
          <Link
            className=" cursor-pointer h-[60px] w-[60px] flex items-center justify-center"
            to="services"
            smooth={true}
            activeClass="active"
            spy={true}
          >
            <BsClipboardData />
          </Link>
          <Link
            className=" cursor-pointer h-[60px] w-[60px] flex items-center justify-center"
            to="work"
            smooth={true}
            activeClass="active"
            spy={true}
          >
            <BsBriefcase />
          </Link>

          <Link
            className=" cursor-pointer h-[60px] w-[60px] flex items-center justify-center"
            to="contact"
            smooth={true}
            activeClass="active"
            spy={true}
          >
            <BsChat />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
