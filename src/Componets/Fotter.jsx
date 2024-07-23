import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import GooglePlayBadge from '../../public/play_store.png'; // Update with the correct path
import AppStoreBadge from '../../public/app_store.png'; // Update with the correct path

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Download App Section */}
      <div className="bg-white text-black py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">
          For Better Experience Download
          <br />
          DARHUB App
        </h2>
        <div className="flex justify-center items-center space-x-4">
          <a href="https://play.google.com/store/apps/details?id=com.example.tomato" target="_blank" rel="noopener noreferrer">
            <img src={GooglePlayBadge} alt="Google Play Store" className="h-12" />
          </a>
          <a href="https://apps.apple.com/app/id123456789" target="_blank" rel="noopener noreferrer">
            <img src={AppStoreBadge} alt="Apple App Store" className="h-12" />
          </a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 md:px-12 py-10">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-green-600">DARHUB.</h2>
            <p className="mt-4 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nihil accusamus suscipit veniam dolor perspiciatis deleniti consectetur laudantium necessitatibus sed reprehenderit omnis magnam, odio, minima perferendis assumenda nesciunt itaque placeat.
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-green-400 hover:text-gray-100">
                <div className="bg-gray-700 p-3 rounded-full">
                  <FaFacebookF />
                </div>
              </a>
              <a href="#" className="text-green-400 hover:text-gray-100">
                <div className="bg-gray-700 p-3 rounded-full">
                  <FaTwitter />
                </div>
              </a>
              <a href="#" className="text-green-400 hover:text-gray-100">
                <div className="bg-gray-700 p-3 rounded-full">
                  <FaLinkedinIn />
                </div>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/6 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-gray-100">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-100">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-100">Delivery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-100">Privacy policy</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold text-white">Get In Touch</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-400">+1-234-567-890</li>
              <li className="text-gray-400">contact@darhub.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400">Copyright 2024 © Darhub.com - All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
