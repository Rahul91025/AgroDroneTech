import React from 'react';
import { MailIcon, PhoneIcon, LocationMarkerIcon } from '@heroicons/react/solid';

const Form1 = () => {
  return (
    <div className="bg-gray-800 min-h-screen flex flex-col items-center">
      <header className="bg-gray-700 text-white w-full py-4 relative">
        <h1 className="text-center text-3xl font-bold relative py-2 px-6 bg-green-500 rounded-3xl text-white mx-4">
          Drone Training Courses
        </h1>
      </header>
      <main className="flex flex-col md:flex-row bg-gray-800 text-white w-full flex-grow p-8">
        <section className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold">Interested in setting up a Center of Excellence (CoE)</h2>
          <p className="mt-4 text-lg">
            Learn from India’s highly qualified & most experienced drone training instructors.
            Nourishing excellence with a focus on every candidate. Well-equipped labs with the latest
            simulation software & tools.
          </p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-center">
              <MailIcon className="w-6 h-6 text-green-400 mr-2" />
              <span>Email us at info@dronetraining.com</span>
            </li>
            <li className="flex items-center">
              <PhoneIcon className="w-6 h-6 text-green-400 mr-2" />
              <span>Call us at +91-XXXXXXXXXX</span>
            </li>
            <li className="flex items-center">
              <LocationMarkerIcon className="w-6 h-6 text-green-400 mr-2" />
              <span>Visit us at 123 Drone St, Bhubaneswar, India</span>
            </li>
          </ul>
        </section>
        <section className="md:w-1/2 bg-gray-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Full Name</label>
              <input type="text" className="w-full px-3 py-2 bg-gray-600 text-white rounded" required />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input type="email" className="w-full px-3 py-2 bg-gray-600 text-white rounded" required />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input type="tel" className="w-full px-3 py-2 bg-gray-600 text-white rounded" required />
            </div>
            <div>
              <label className="block text-sm font-medium">City</label>
              <input type="text" className="w-full px-3 py-2 bg-gray-600 text-white rounded" required />
            </div>
            <div>
              <label className="block text-sm font-medium">Your Message (optional)</label>
              <textarea className="w-full px-3 py-2 bg-gray-600 text-white rounded"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full py-2 px-4 bg-green-500 text-white rounded font-bold hover:bg-green-400">Send</button>
            </div>
          </form>
        </section>
      </main>
      {/* Improved footer section */}
      
    </div>
  );
};

export default Form1;
