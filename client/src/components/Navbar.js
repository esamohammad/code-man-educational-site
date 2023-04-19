import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">Courses</a>
            </li>
            <li>
              <a>Faq</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Login</a>
            </li>
            <li>
              <a>Register</a>
            </li>
          </ul>
        </div>
        <a className="normal-case text-base sm:ms-8 xl:text-2xl ">
          CodeMan
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li tabIndex={0}>
            <a>Courses</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <a className="btn me-4">Login</a>
        <a className="btn">Register</a>
      </div>
    </div>
  );
};

export default Navbar;
