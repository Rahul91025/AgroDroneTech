import React from 'react'
import { useState,useEffect } from 'react';

import drone1 from '../../public/drone.jpg';
import drone2 from '../../public/drone2.jpg';
import drone3 from '../../public/drone3.jpg';

const Banner = () => {
    const images = [drone1, drone2, drone3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('next'); // 'next' or 'prev'

  const nextImage = () => {
    setSlideDirection('next');
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setSlideDirection('prev');
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
     <div
        className="min-h-screen relative overflow-hidden"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: slideDirection === 'next' ? '100% 50%' : '-100% 50%', // Start positions for sliding effect
          transition: 'background-position 0.9s ease', // Slide duration and easing
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
          <div className="border rounded-2xl p-7 bg-opacity-100 hover:bg-green-600">
            <div className="border border-white rounded-2xl p-6">
              <h1 className="text-[#e7f1f1] text-4xl font-bold mb-4 text-center">
                Drone Piloting Training
              </h1>
              <p className="text-white text-lg text-center max-w-2xl">
                Darubramha empowers farmers with essential drone training, enabling
                precision agriculture for enhanced productivity and sustainability.
                Join us to revolutionize your farming practices with cutting-edge
                technology.
              </p>
            </div>
          </div>
        </div>
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full text-gray-800"
          onClick={prevImage}
        >
          &lt;
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full text-gray-800"
          onClick={nextImage}
        >
          &gt;
        </button>
      </div>
      
    </>
  )
}

export default Banner
