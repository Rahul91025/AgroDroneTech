import React, { useState } from 'react';
import { MenuIcon } from '@heroicons/react/outline';

const Navbar = ({bgColor}) => {
  const menuItems = ['Home', 'About', 'Booking', 'Services', 'Product', 'Accessories', 'Training', 'Careers', 'Contact'];
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const handleClick = (item) => {
    setActiveMenuItem(item);
  };

  return (
    <div className="bg-gray-800 shadow-md fixed w-full z-10 top-0 style={{ backgroundColor: bgColor }}">
      <nav className="bg-gray-800 max-w-screen-2xl mx-auto px-6 flex justify-between items-center py-4">
        <div className="flex items-center">
          <MenuIcon className="h-6 w-6 text-white mr-8 cursor-pointer" />
          <a href="#" className="text-white text-2xl font-bold">Darubramha</a>
        </div>
        <ul className="flex space-x-4">
          {menuItems.map((item) => (
            <li key={item} className="group relative">
              <a
                href="#"
                className={`text-white hover:text-black hover:bg-gray-700 hover:bg-opacity-25 px-3 py-2 rounded-md text-sm font-medium ${activeMenuItem === item ? 'text-black' : ''}`}
                onClick={() => handleClick(item)}
                style={{ textDecoration: 'none' }} // Inline style to remove underline
              >
                {item}
              </a>
              {activeMenuItem === item && (
               <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-100 transition-all duration-300 group-hover:w-full"></span>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
