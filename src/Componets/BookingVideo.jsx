import React from 'react';
import svdBackground from '../../public/hexa.jpg';
import { FiCheckCircle } from 'react-icons/fi';

const BookingVideo = () => {
  return (
    <div className="container mx-auto px-4 py-8 relative clear-both">
      {/* Outer container with background image and border */}
      <div 
        className="relative rounded-lg bg-cover bg-center"
        style={{ 

          backgroundImage: `url(${svdBackground})`,
          backgroundRepeat:'no-repeat',
          minHeight: '190vh', // Allows the component to expand as needed
          paddingBottom: '2rem', // Adds space at the bottom to prevent overlap
          backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent white background
          backgroundBlendMode: 'multiply', // Blends the image with the white background
        }}
      >
        <div className="absolute inset-0 p-8"
        >
          <h2 className="text-4xl font-bold text-center text-black">Client Booking Experience</h2>
          <div className="relative overflow-hidden mt-3" style={{ paddingTop: '40.25%',
             boxShadow:` 0 4px 15px rgba(0, 0, 0, 0.2)`,
             borderRadius:'15px',
             margin:'10px'
          }}>
            <iframe
              className="absolute top-[30px] left-[50%] transform -translate-x-1/2 w-[800px] h-[430px]"
              src="https://www.youtube.com/embed/45XG7shHHpQ"
              title="Client Booking Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            style={
              {
                borderRadius:'10px',
               
                width:'100%',
                height:'100%'
              }
            }></iframe>
          </div>
          <div className="p-4 bg-opacity-75 rounded-lg mt-8"
          style={{
            backgroundColor: ` #ffffff`,
            boxShadow:` 0 4px 15px rgba(0, 0, 0, 0.2)`,
            borderRadius:'15px',
            padding:'50px'
        
        
        
                }}>
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">How to Book Your Drone and Spraying Service</h3>
            <p className="text-gray-600 mb-4">
              Watch this video to understand the complete booking process, from logging in to booking your drone, tracking your order, and getting advice from our scientist advisors.
            </p>
            <div className="mb-4"
            >
              <h4 className="text-lg font-semibold text-gray-700">Booking Steps:</h4>
              <ul className="list-disc pl-5 text-gray-600">
                <li className="flex items-start">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full  mr-2">
                    <FiCheckCircle className="text-green-500 w-3 h-3" />
                  </div>
                  Log in to your account
                </li>
                <li className="flex items-start">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-green-500 mr-2">
                    <FiCheckCircle className="text-green-500 w-3 h-3" />
                  </div>
                  Select the drone and service you need
                </li>
                <li className="flex items-start">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-green-500 mr-2">
                    <FiCheckCircle className="text-green-500 w-3 h-3" />
                  </div>
                  Complete the booking process
                </li>
                <li className="flex items-start">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-green-500 mr-2">
                    <FiCheckCircle className="text-green-500 w-3 h-3" />
                  </div>
                  Track your order status
                </li>
                <li className="flex items-start">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-green-500 mr-2">
                    <FiCheckCircle className="text-green-500 w-3 h-3" />
                  </div>
                  Contact our scientist advisor for assistance
                </li>
              </ul>
            </div>
            <div className="text-center">
              <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition duration-300">
                Book Your Drone Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingVideo;
