import React, { useState } from "react";
import "./Navbar.css";
import { Menu, X } from "react-feather";
import { Link } from "react-router-dom";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="w-full md:pl-40 pl-6 pt-2  md:pr-40 pr-6 flex flex-col">
        <div className={`flex flex-row h-14 justify-between items-center`}>
          <div className="flex-col">
            <h5 className="timesnowroman text-2xl md:text-4xl font-extrabold">
              Arun Verma
            </h5>
          </div>
          <div className="hidden md:block md:flex-col space-x-3">
            <Link className="roberto text-lg font-bold hover:opacity-40" to="/">
              Home
            </Link>
            <Link
              className="roberto text-lg pl-2 font-bold hover:opacity-40"
              to="/publications"
            >
              Publications
            </Link>
            <Link
              className="roberto text-lg pl-2 font-bold hover:opacity-40"
              to="/blog"
            >
              Blog
            </Link>
            <Link
              className="roberto text-lg pl-2 font-bold hover:opacity-40"
              to="/about"
            >
              About Me
            </Link>
          </div>

          <div className="md:hidden sm:block">
            <button onClick={toggle}>
              {isOpen ? (
                <X size={30} color="black" />
              ) : (
                <Menu className="text-lg text-black" />
              )}
            </button>
          </div>

          {/* //mobile screen k liye */}
          {isOpen && (
            <div className="flex flex-col space-y-3 mt-4 md:hidden">
              <Link
                className="roberto text-lg font-bold hover:opacity-40"
                to="/"
                onClick={toggle}
              >
                Home
              </Link>
              <Link
                className="roberto text-lg font-bold hover:opacity-40"
                to="/blog"
                onClick={toggle}
              >
                Blog
              </Link>
              <Link
                className="roberto text-lg font-bold hover:opacity-40"
                to="/about"
                onClick={toggle}
              >
                About Me
              </Link>
            </div>
          )}
        </div>
        <div className="flex-col lineend w-full bg-black"></div>
      </div>
    </>
  );
}

export default Navbar;
