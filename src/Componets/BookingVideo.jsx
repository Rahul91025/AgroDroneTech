import React from 'react';

const BookingVideo = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h2 className="text-4xl font-bold mb-12 text-center text-blue-600">Client Booking Experience</h2>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
        <div className="relative overflow-hidden" style={{ paddingTop: '40.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/IXYEBCaCmWI"
            title="Client Booking Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-4">
          <h3 className="text-2xl font-semibold mb-2 text-gray-800">How to Book Your Drone and Spraying Service</h3>
          <p className="text-gray-600 mb-4">
            Watch this video to understand the complete booking process, from logging in to booking your drone, tracking your order, and getting advice from our scientist advisors.
          </p>
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-gray-700">Booking Steps:</h4>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Log in to your account</li>
              <li>Select the drone and service you need</li>
              <li>Complete the booking process</li>
              <li>Track your order status</li>
              <li>Contact our scientist advisor for assistance</li>
            </ul>
          </div>
          <div className="text-center">
            <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
              Book Your Drone Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingVideo;
