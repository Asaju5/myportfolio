import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <header className="py-8 " id="home">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="">
            <h1 className="text-2xl font-bold">PORTFOLIO</h1>
          </a>
          <Link to="contact" smooth={true} activeClass="active" spy={true}>
            <button className="btn btn-sm">Contact Me</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
