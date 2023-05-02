import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-4">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center">
          <h2 className="text-lg text-white font-bold">Retro<span className="text-red-400">Food</span></h2>
          <p className="text-sm">Bringing back the flavors of the past</p>
        </div>
        <nav>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <li>
              <Link to="/" className="hover:text-white">Home</Link>
            </li>
            <li>
              <Link to="/menu" className="hover:text-white">Menu</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} RetroFood. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
