import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItem = (
      <>
      <li>
        <Link to={"/"} className="font-semibold">Home</Link>
      </li>
      <li>
        <Link className="font-semibold" >Blog</Link>
     </li>
      <li>
        <Link className="font-semibold">Docs</Link>
      </li>
      </>
    )
    return (
      <>
        <div className="navbar sticky top-0 z-10 bg-[#854f39] backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200 px-10">
          <div className="navbar-start">
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
                {menuItem}
              </ul>
            </div>
            <p className="btn btn-ghost normal-case text-xl"><span className="text-orange-500 text-3xl flex items-center gap-2 font-extrabold animate-bounce">King'S</span><span className="text-xl ml-1 font-bold">Coffee</span></p>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {menuItem}
            </ul>
          </div>
        </div>
      </>
    );
  };
  
  export default Navbar;