import React, { useEffect, useState } from 'react';
import image1 from '../../public/image1.png';
import image2 from '../../public/image2.png';
import image3 from '../../public/image3.png';
import image4 from '../../public/image4.png';

import specialImage from '../../public/image5.png'; // The new special image

// Example SVG icons (replace with actual SVG icons or use a library like React Icons)
import { FiCheckCircle } from 'react-icons/fi';

const images = [
  image1,
  image2,
  image3,
  image4,
];

const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full mx-auto overflow-hidden mt-10 max-w-full bg-slate-500">
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold text-green-500 mb-4">Awards And Recognitions</h1>
        <p className="text-lg text-gray-300">Owned by Rajendra Das</p>
      </div>

      <div className="flex flex-row items-center justify-center mb-11">
        <div className="text-gray-800 relative top-[-80px] left-8">
          <p className="text-lg mb-4">
            The initiatives supported include:
          </p>
          <ul className="list-disc pl-6">
            <li className="flex items-center mb-2">
              <FiCheckCircle className="text-green-500 mr-2" /> Youth Innovation Fund from Startup Odisha
            </li>
            <li className="flex items-center mb-2">
              <FiCheckCircle className="text-green-500 mr-2" /> Grant received from Startup Odisha
            </li>
            <li className="flex items-center mb-2">
              <FiCheckCircle className="text-green-500 mr-2" /> Nidhi Eir from DST
            </li>
            <li className="flex items-center mb-2">
              <FiCheckCircle className="text-green-500 mr-2" /> Certificate From Brinc
            </li>
            <li className="flex items-center mb-2">
              <FiCheckCircle className="text-green-500 mr-2" /> ASIIM Grant
            </li>
            <li className="flex items-center mb-2">
              <FiCheckCircle className="text-green-500 mr-2" /> Various collaborations with industry leaders and academic institutions
            </li>
            <li className="flex items-center">
              <FiCheckCircle className="text-green-500 mr-2" /> Recognition for sustainable agricultural practices
            </li>
          </ul>
        </div>
        <div className="relative w-[400px] h-[300px] mx-auto overflow-hidden rounded-lg shadow-lg mr-12 mb-12">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full flex-shrink-0"
                style={{ minWidth: '100%', height: '300px', objectFit: 'cover' }}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={specialImage}
            alt="Special Image"
            className="h-[500px] w-[250px] object-cover rounded-lg shadow-lg mr-10 mb-10"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
