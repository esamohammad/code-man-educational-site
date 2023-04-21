import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="mb-  navbar md:bg-yellow-300">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn-ghost btn lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li tabIndex={0}>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/login" className="btn mb-2 text-white">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="btn  text-white">
                Register
              </Link>
            </li>
          </ul>
        </div>
        <Link
          to="./"
          className="ms-0 text-lg font-black normal-case  sm:ms-4 sm:text-2xl "
        >
          CodeMan
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1">
          <li className="font-bold md:text-xl ">
            <Link to="/">Home</Link>
          </li>
          <li className="font-bold md:text-xl ">
            <Link to="/courses">Courses</Link>
          </li>
          <li className="font-bold md:text-xl ">
            <Link to="/faq">FAQ</Link>
          </li>
          <li className="font-bold md:text-xl ">
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <Link to="/login" className="md:mr-15 btn me-2">
          {user?.displayName}
        </Link>
        <Link to="/register" className="btn me-2  md:mr-10">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
