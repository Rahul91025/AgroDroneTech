import React from 'react';
import banner from '../../public/khet.jpg';
import { FaLeaf, FaTractor, FaSeedling, FaGlobe, FaUser, FaCog } from 'react-icons/fa';

const About = () => {
  return (
    <div className="relative overflow-hidden mt-9 z-0">
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})`, zIndex: '-3', marginTop: '120px', height: '520px' }}
      ></div>
      <div className="bg-white bg-opacity-0 p-6 shadow-sm mt-10 max-w-6xl mx-auto relative z-10">
        <h1 className="text-4xl font-bold text-green-500 mb-8 transition-transform transform hover:scale-105 text-center">
          About AgroDrone
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col items-center transition-transform transform hover:scale-105">
            <FaLeaf className="text-green-600 mb-4 text-5xl" />
            <h2 className="text-3xl font-semibold text-gray-300 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-100 text-center">
              Providing cutting-edge drones to enhance agricultural productivity and sustainability.
            </p>
          </div>
          <div className="flex flex-col items-center transition-transform transform hover:scale-105">
            <FaTractor className="text-blue-600 mb-4 text-5xl" />
            <h2 className="text-3xl font-semibold text-gray-300 mb-4">About Darubramha</h2>
            <p className="text-lg text-gray-100 text-center">
              Visionary company dedicated to innovative solutions for various industries, focusing on technology and sustainability.
            </p>
          </div>
          <div className="flex flex-col items-center transition-transform transform hover:scale-105">
            <FaSeedling className="text-yellow-600 mb-4 text-5xl" />
            <h2 className="text-3xl font-semibold text-gray-300 mb-4">Our Products</h2>
            <p className="text-lg text-gray-100 text-center">
              Drones tailored for crop monitoring, spraying, soil analysis, and irrigation management.
            </p>
          </div>
          <div className="flex flex-col items-center transition-transform transform hover:scale-105">
            <FaGlobe className="text-red-600 mb-4 text-5xl" />
            <h2 className="text-3xl font-semibold text-gray-300 mb-4">Why Choose Us?</h2>
            <p className="text-lg text-gray-100 text-center">
              At AgroDrone, we are committed to providing innovative technology solutions that are comprehensive, sustainable, and efficient.
            </p>
          </div>
          <div className="flex flex-col items-center transition-transform transform hover:scale-105">
            <FaUser className="text-purple-600 mb-4 text-5xl" />
            <h2 className="text-3xl font-semibold text-gray-300 mb-4">Our Team</h2>
            <p className="text-lg text-gray-100 text-center">
              A diverse team of experts dedicated to advancing agricultural technology and providing exceptional support.
            </p>
          </div>
          <div className="flex flex-col items-center transition-transform transform hover:scale-105">
            <FaCog className="text-gray-600 mb-4 text-5xl" />
            <h2 className="text-3xl font-semibold text-gray-300 mb-4">Technology</h2>
            <p className="text-lg text-gray-100 text-center">
              Cutting-edge drone technology designed to meet the unique needs of modern agriculture.
            </p>
          </div>
        </div>

        {/* YouTube Video Section */}
        <div className="my-12 text-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/NKW-O09j-7E"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="shadow-lg rounded-lg ml-[290px]"
          ></iframe>
          <p className="text-lg text-gray-500 mt-4">
            Watch our video to learn more about AgroDrone and our innovative solutions.
          </p>
        </div>

        <p className="text-lg text-gray-600 mt-8 text-center">
          Join us on our journey to transform agriculture with cutting-edge drone technology. Together, we can build a more sustainable and efficient future for farming.
        </p>
      </div>
    </div>
  );
};

export default About;
