import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex justify-between item-center h-16 bg-white text-black relative shadow-sm font-mono">
      <Link to="/" className="p-4 text-4xl animate-pulse">
        sCrapbook
      </Link>
      <div className="p-4 md:block hidden">
        <Link className="p-4 text-lg" to="/">
          Home
        </Link>
        <Link className="p-4 text-lg" to="/menu">
          Menu
        </Link>
        <Link className="p-4 text-lg" to="/trips">
          Trips
        </Link>
        <Link className="p-4 text-lg" to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
