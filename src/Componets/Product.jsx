import React, { useEffect, useState } from 'react';
import { FaStar, FaStarHalfAlt, FaShoppingCart, FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaPinterest } from 'react-icons/fa';

import Proddisplay from './ProductAnish/Proddisplay';

const Product = () => {
  const [imgId, setImgId] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const slideImage = () => {
      const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
      document.querySelector('.img-showcase').style.transform = `translateX(${-(imgId - 1) * displayWidth}px)`;
    };
    window.addEventListener('resize', slideImage);
    slideImage();

    return () => window.removeEventListener('resize', slideImage);
  }, [imgId]);

  const handleImageClick = (id) => {
    setImgId(id);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="max-w-5xl mx-auto bg-white p-2 shadow-sm mt-[80px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* card left */}
        <div>
          <div className="overflow-hidden">
            <div className="img-showcase flex transition-all duration-500">
              <img src="drone5.jpg" alt="drone" className="h-70 w-auto" />
              <img src="drone5.jpg" alt="drone" className="h-70 w-auto" />
              <img src="drone5.jpg" alt="drone" className="h-70 w-auto" />
              <img src="drone5.jpg" alt="drone" className="h-70 w-auto" />
            </div>
          </div>
          <div className="flex mt-4">
            {['drone5', 'drone5', 'drone5', 'drone5'].map((shoe, index) => (
              <div className="mx-1" key={index}>
                <a href="#" onClick={(e) => { e.preventDefault(); handleImageClick(index + 1); }} data-id={index + 1}>
                  <img src={`${shoe}.jpg`} alt="drone" className="w-20 h-20 object-cover shadow-md" />
                </a>
              </div>
            ))}
          </div>
        </div>
        {/* card right */}
        <div className="p-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Agro Drone</h2>
          <a href="#" className="text-blue-600 uppercase font-medium text-sm mb-2 inline-block">Visit Our Drone Store</a>
          <div className="flex items-center text-yellow-500 mb-4">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
            <span className="ml-2 text-gray-700 font-semibold">4.7 (21)</span>
          </div>

          <div className="text-lg font-bold mb-4">
            <p className="text-gray-500">Old Price: <span className="line-through">$257.00</span></p>
            <p className="text-blue-600">New Price: <span>$249.00 (5%)</span></p>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">About this item:</h2>
            <p className="text-sm text-gray-600 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
            <p className="text-sm text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
              {['Color: Black', 'Available: In stock', 'Category: Shoes', 'Shipping Area: All over the world', 'Shipping Fee: Free'].map((item, index) => (
                <li key={index} className="flex items-center">
                  <label>
                    <input
                      type="radio"
                      name="option"
                      value={index}
                      checked={selectedOption === index}
                      onChange={() => handleOptionChange(index)}
                      className={`mr-2 ${selectedOption === index ? 'bg-green-200' : ''}`}
                    />
                    {item}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <input type="number" min="0" defaultValue="1" className="border border-gray-700 rounded-full w-16 text-center p-2 mr-2 text-green-600" />
            <button className="bg-blue-600 text-white py-2 px-4 rounded-full mr-2">Add to Cart <FaShoppingCart className="inline" /></button>
            <button className="bg-red-600 text-white py-2 px-4 rounded-full">Compare</button>
          </div>

          <div className="flex items-center">
            <p className="mr-2">Share At:</p>
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-full mr-2 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-full mr-2 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-full mr-2 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-full mr-2 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors">
              <FaWhatsapp />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-full text-gray-800 hover:bg-gray-800 hover:text-white transition-colors">
              <FaPinterest />
            </a>
          </div>
        </div>
      </div>
      <div className="prod-sugg">
        <Proddisplay/>
      </div>
    </div>
  );
}

export default Product;
