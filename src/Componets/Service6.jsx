import React from 'react';
import pic1 from '../../public/Warehouse.jpeg';
import pic3 from '../../public/hexa.jpg';
import Navbar from './Navbar';

const Service6 = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <div className='relative flex flex-row items-start justify-center p-8 space-x-15 mb-[3rem]'>
        {/* Background Image */}
        <div className='absolute inset-0 z-[5]'>
          <img src={pic3} alt="Background" className='w-full h-full object-cover'/>
        </div>

        {/* Image Section */}
        <div className='flex-1 relative left-[9rem] z-[5] mt-[2rem]'>
          <img src={pic1} alt="Service" className='w-[33rem] h-[27rem] rounded-lg shadow-lg'/>
        </div>

        {/* Content Section */}
        <div className='flex-1 relative z-[5] mt-[2rem] flex flex-col justify-center'>
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">Warehouse Management</h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Agricultural drones equipped with advanced technology such <br />
            as field soil analysis, crop scouting, and precision farming<br />
            solutions enable farmers to make informed decisions and <br />
            adapt to diverse conditions. These drones play a crucial role <br />
            in crop health assessment, treatment, irrigation management,<br />
            and damage evaluation. By leveraging the capabilities of<br />
            agricultural drone technology, farmers can enhance crop <br />
            yields while reducing time and costs. Garuda’s agricultural <br />
            drones, with their precision farming solutions and digital <br />
            imaging capabilities, provide accurate data for optimizing <br />
            agricultural operations and monitoring crop growth. The use <br />
            of these drones not only increases efficiency but also ensures<br />
            crop safety and enables timely actions to improve overall <br />
            agricultural productivity.
          </p>
          <div className='flex justify-start ml-[9rem]'>
            <button className='bg-green-600 text-white py-2 px-4 rounded-3xl shadow-md hover:bg-green-700 transition duration-300'>
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service6;
