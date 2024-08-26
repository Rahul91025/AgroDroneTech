import React from 'react';
import image4 from '../../public/carrer.jpg';
import svdBackground from '../../public/bg1.jpg';

const Contact = () => {
  return (
    <div className="max-w-screen-full mx-auto  bg-white text-black pb-11 " style={{ backgroundImage: `url(${svdBackground})`}}>
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-purple-400 to-blue-400 text-white h-72 flex items-center justify-center">
        <img src={image4} alt="Contact" className="absolute inset-0 w-full h-full object-cover opacity-65" />
        <div className="relative text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="mt-10 px-4 md:px-20">
        <h2 className="text-3xl md:text-4xl text-center font-semibold mb-8">
          Let’s Start a Conversation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Ask how we can help you:</h3>
            <ul className="list-disc ml-6 text-gray-700">
              <li className="mb-2">
                <strong>See our platform in action:</strong> Request a personalized demo, or sign up for a 30-day free trial of DARHUB’s performance marketing platform.
              </li>
              <li className="mb-2">
                <strong>Master performance marketing:</strong> From DARHUB Academy courses to industry research and insights, learn the best practices to elevate your marketing strategies.
              </li>
            </ul>
            <h3 className="text-2xl font-bold mt-6 mb-4">Additional Information</h3>
            <p className="text-lg text-gray-700">
              We are committed to providing the best service and support to help your business grow. Reach out to us for any queries, and our team will get back to you as soon as possible.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Please note: all fields are required.</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="p-2 border border-gray-300 rounded" required />
                <input type="text" placeholder="Last Name" className="p-2 border border-gray-300 rounded" required />
              </div>
              <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded" required />
              <textarea placeholder="Message" className="w-full p-2 border border-gray-300 rounded h-32" required></textarea>
              <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-200">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
