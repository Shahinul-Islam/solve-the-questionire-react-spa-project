import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between p-4">
      <div>
        <img
          src="https://www.svgrepo.com/show/303149/creative-cloud-cc-logo.svg"
          className="h-20 w-20"
          alt=""
        />
      </div>
      <div>
        <div onClick={() => setOpen(!open)} className="h-12 w-12 sm:hidden">
          {open ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
        <ul
          className={`md:flex absolute p-6 font-bold bg-sky-400 md:bg-white  md:font-semibold md:static ${
            open ? "top-15 right-1 z-10" : "top-[-290px]"
          }`}
        >
          <li className="my-3 md:mr-3">
            <NavLink to="/qusetionire">Qusetionire</NavLink>
          </li>
          <li className="my-3 md:mr-3">
            <NavLink to="/statistics">Statistics</NavLink>
          </li>
          <li className="my-3 md:mr-3">
            <NavLink to="/blog">Blog</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
