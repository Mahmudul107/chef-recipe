import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-black text-white mx-ato">
        <div className=" mx-auto">
        <Link to='/' className="text-3xl text-white font-bold">Retro<span className="text-red-500">Food</span></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 gap-4">
            <li>
              <NavLink to='/' className={({ isActive }) => (isActive ? "active" : "default")}>Home</NavLink>
            </li>
            <li>
              <NavLink to='/blog' className={({ isActive }) => (isActive ? "active" : "default")}>Blog</NavLink>
            </li>
          </ul>
        </div>
        <div className="mx-auto">
          <Link to='/login'>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
