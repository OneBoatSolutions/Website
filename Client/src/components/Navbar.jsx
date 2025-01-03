import React from "react";
import { Mail } from "lucide-react";
import "../css/Components/NavBar.css";
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className=" glassmorphic-container navbar h-1 sticky top-4 mx-auto w-[90%] rounded-lg bg-white/30  shadow-lg">
      {/* Navbar Start */}
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl font-bold">OneBoat</a>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="text-lg font-semibold">Home</a>
          </li>
          <li>
            <a className="text-lg font-semibold">About</a>
          </li>
          <li>
            <a className="text-lg font-semibold" href="/Zverse" ><Link to='/Zverse'>Zverse</Link></a>
          </li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <div className="dropdown nav-drop-down">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-white/80 p-2 text-left shadow backdrop-blur-lg right-0"
            style={{ zIndex: 1000 }}
          >
            <li>
              <a className="text-xl">Home</a>
            </li>
            <li>
              <a className="text-xl">About</a>
            </li>
            <li>
              <a className="text-xl">ZVerse</a>
            </li>
            <li>
              <a className="flex items-center gap-2 btn btn-primary">
                <Mail className="h-5 w-5" />
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <a className="hidden lg:flex items-center gap-2 btn btn-primary">
          <Mail className="h-5 w-5" />
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Navbar;
