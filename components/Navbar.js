import React from "react";

const Navbar = () => {
  const resume = () => {
    window.open(
      "https://docs.google.com/document/d/1uuZMl2GD2WiLdRLAI9QmDrDZJVNp0Q9dLb3-rNynBL0/edit#heading=h.ca0awj8022e2"
    );
  };
  return (
    <header className="py-8 " id="home">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="">
            <h1 className="text-2xl font-bold">PORTFOLIO</h1>
          </a>

          <button className="btn btn-sm" onClick={resume}>
            RESUME
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
