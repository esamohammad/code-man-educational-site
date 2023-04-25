import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { FaUser } from 'react-icons/fa';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }


    return (
        <div className="mb-  navbar cursor-auto">
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
                <Link to="" className="md:mr-15 md:me-2">
                    {user?.photoURL ?


                        // ! avatar
                        <div className="avatar online mt-2">
                            <div className="w-8 lg:w-12 rounded-full ring ring-white ring-offset-yellow-500 ring-offset-4">
                                <img src={user?.photoURL} alt="" />
                            </div>
                        </div>
                        // ! avatar enb
                        : <span className="text-xl lg:text-2xl"><FaUser></FaUser></span>
                    }
                </Link>


                <div className="font-bold md:text-xl md:mr-15 md:me-4 ">
                    {
                        user?.uid ?
                            <>
                                <span className="lg:me-2 hidden lg:inline-block">{user?.displayName}</span>
                                <button className="btn " onClick={handleLogOut}>Log out</button>
                            </>
                            :
                            <>
                                <span className="btn">
                                    <Link to='/login'>Login</Link>
                                </span>

                            </>
                    }
                </div>



                {/* <Link to="/login" className="btn me-2  md:mr-10">
                    Login
                </Link> */}
            </div>
        </div>
    );
};

export default Navbar;
