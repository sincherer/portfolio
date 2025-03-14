import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="w-full flex justify-center py-4">
      <div className="bg-white shadow-md rounded-full px-6 py-2 flex space-x-6">
        {["Home","About", "Projects", "Articles", ].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase()}`}
            className={`relative px-3 py-1 text-gray-600  transition ${
              location.pathname === `/${item.toLowerCase()}`
                ? "font-semibold text-black"
                : "hover:text-white, hover:bg-gray-200 hover:font-semibold, hover:scale-110, hover:duration-300 rounded-full"
            }`}
          >
            {item}
            {location.pathname === `/${item.toLowerCase()}` && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-black rounded-full"></span> 
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
