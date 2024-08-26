import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = ({ bgColor }) => {
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Booking', path: '/booking' }, // Add paths as needed
    { name: 'Services', path: '/services' },
    { name: 'Product', path: '/product1' },
    { name: 'Accessories', path: '/accessories' },
    { name: 'Training', path: '/training' },
    { name: 'Careers', path: '/carrers1' },
    { name: 'Contact', path: '/contact' },
  ];

  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsNavbarScrolled(scrollY > 10); // Adjust threshold as needed
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array to run effect only once

  const handleClick = (item) => {
    setActiveMenuItem(item);
  };

  const getNavbarColor = () => {
    return isNavbarScrolled ? '#4B5563' : bgColor; // Adjust gray shade
  };

  return (
    <div className={`opacity-4 shadow-md fixed w-full z-10 top-0 transition-all duration-300 ease-in-out`} style={{ backgroundColor: getNavbarColor() }}>
      <nav className="max-w-screen-2xl mx-auto px-6 flex justify-between items-center py-4">
        <div className="flex items-center">
          <svg
            className="h-10 w-10 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="10" y="32" width="44" height="12" className="fill-current text-gray-300"></rect>
            <rect x="18" y="22" width="28" height="10" className="fill-current text-gray-200"></rect>
            <circle cx="18" cy="46" r="6" className="fill-current text-white"></circle>
            <circle cx="46" cy="46" r="6" className="fill-current text-white"></circle>
            <line x1="18" y1="22" x2="18" y2="12" className="stroke-current text-gray-200"></line>
            <line x1="18" y1="12" x2="28" y2="12" className="stroke-current text-gray-200"></line>
            <line x1="28" y1="12" x2="28" y2="22" className="stroke-current text-gray-200"></line>
            <line x1="18" y1="12" x2="28" y2="12" className="stroke-current text-gray-200"></line>
            <line x1="28" y1="12" x2="28" y2="22" className="stroke-current text-gray-200"></line>
          </svg>

          <Link to="/" className="text-gray-200 text-2xl font-bold font-orbitron">DARHUB</Link>
        </div>
        <ul className="flex space-x-4">
          {menuItems.map((item) => (
            <li key={item.name} className="group relative">
              <Link
                to={item.path}
                className={`text-white hover:text-black hover:bg-gray-700 hover:bg-opacity-25 px-3 py-2 rounded-md text-sm font-medium ${activeMenuItem === item.name ? 'text-black' : ''}`}
                onClick={() => handleClick(item.name)}
                style={{ textDecoration: 'none' }}
              >
                {item.name}
              </Link>
              {activeMenuItem === item.name && (
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-100 transition-all duration-300 group-hover:w-full"></span>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
