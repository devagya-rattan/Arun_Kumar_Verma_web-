import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".navbar-container")) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <>
      <div className="navbar-container w-full px-6 pt-2 md:px-40 flex flex-col">
        <div className="flex flex-row h-14 justify-between items-center">
          <div className="flex-col">
            <h5 className="timesnowroman lg:text-5xl md:text-4xl text-3xl font-extrabold">
              Arun Verma
            </h5>
          </div>
          <div className="hidden xl:flex space-x-3">
            {/* Desktop Links */}
            <Link className="roberto text-base font-bold hover:opacity-40 cursor-pointer" to="/">Home</Link>
            <Link className="roberto text-base pl-2 font-bold hover:opacity-40 cursor-pointer" to="/blog">Blog</Link>
            <Link className="roberto text-base pl-2 font-bold hover:opacity-40 cursor-pointer" to="/blog">Phd/Interns</Link>
            <Link className="roberto text-base pl-2 font-bold hover:opacity-40 cursor-pointer" to="/publications">Publishments</Link>
            <Link className="roberto text-base pl-2 font-bold hover:opacity-40 cursor-pointer" to="/blog">Contact us</Link>
            <Link className="roberto text-base pl-2 font-bold hover:opacity-40 cursor-pointer" to="/about">About Me</Link>
          </div>

          <GiHamburgerMenu className="lg:hidden block cursor-pointer" onClick={toggle} />

          {/* Mobile menu */}
          <div
            className={`fixed inset-0 top-14 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform duration-300 ease-in-out ${
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
            }`}
          >
            {/* Mobile Links */}
            <li className="list-none w-full text-center p-4 cursor-pointer">
              <Link className="roberto text-base font-bold hover:opacity-40" to="/" onClick={toggle}>Home</Link>
            </li>
            <li className="list-none w-full text-center p-4 cursor-pointer">
              <Link className="roberto text-base pl-2 font-bold hover:opacity-40" to="/blog" onClick={toggle}>Blog</Link>
            </li>
            <li className="list-none w-full text-center p-4 cursor-pointer">
              <Link className="roberto text-base pl-2 font-bold hover:opacity-40" to="/blog" onClick={toggle}>Phd/Interns</Link>
            </li>
            <li className="list-none w-full text-center p-4 cursor-pointer">
              <Link className="roberto text-base pl-2 font-bold hover:opacity-40" to="/publications" onClick={toggle}>Publishments</Link>
            </li>
            <li className="list-none w-full text-center p-4 cursor-pointer">
              <Link className="roberto text-base pl-2 font-bold hover:opacity-40" to="/blog" onClick={toggle}>Contact us</Link>
            </li>
            <li className="list-none w-full text-center p-4 cursor-pointer">
              <Link className="roberto text-base pl-2 font-bold hover:opacity-40" to="/about" onClick={toggle}>About Me</Link>
            </li>
          </div>
        </div>
        <div className="flex-col lineend w-full bg-black"></div>
      </div>
    </>
  );
}

export default Navbar;
