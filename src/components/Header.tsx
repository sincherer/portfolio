import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname.replace('/portfolio', '');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full flex justify-center py-4">
      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-lg bg-white hover:bg-gray-100 focus:outline-none"
        >
          <div className="w-6 h-0.5 bg-gray-600 mb-1.5"></div>
          <div className="w-6 h-0.5 bg-gray-600 mb-1.5"></div>
          <div className="w-6 h-0.5 bg-gray-600"></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {["Home", "About", "Projects", "Articles"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className={`text-xl px-6 py-2 ${currentPath === `/${item.toLowerCase()}` ? 'font-semibold text-black' : 'text-gray-600 hover:text-black'}`}
            >
              {item}
              {currentPath === `/${item.toLowerCase()}` && (
                <span className="block h-0.5 bg-black mt-1"></span>
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex bg-white shadow-md rounded-full px-6 py-2 space-x-6">
        {["Home", "About", "Projects", "Articles"].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase()}`}
            className={`relative px-3 py-1 text-gray-600 transition ${currentPath === `/${item.toLowerCase()}` ? "font-semibold text-black" : "hover:text-black hover:bg-gray-200 hover:font-semibold hover:scale-110 hover:duration-300 rounded-full"}`}
          >
            {item}
            {currentPath === `/${item.toLowerCase()}` && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-black rounded-full"></span>
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Header;
