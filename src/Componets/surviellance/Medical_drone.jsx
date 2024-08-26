import React from 'react';
import pic1 from '../../../public/medical_drone.jpg';
import pic3 from '../../../public/hexa.jpg';
import Navbar from '../Navbar';

const Medical_drone = () => {
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
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">Medical Services</h2>
          <p className="text-gray-500 leading-relaxed mb-6">
          Medical drones are transforming healthcare by providing rapid <br/> and reliable transportation of essential medical supplies, especially <br/>to remote or inaccessible areas. These drones ensure swift delivery of <br/>life-saving medications, blood products, and vaccines, overcoming logistical<br/> challenges like poor infrastructure and difficult terrains. By reducing<br/> transportation costs and minimizing wastage of perishable medical items, <br/>drones offer a cost-effective solution to healthcare delivery. Equipped with<br/> advanced GPS and autonomous flight capabilities, medical drones ensure<br/> precise and timely deliveries, thereby enhancing healthcare accessibility<br/> and connecting healthcare networks even in the most challenging environments.
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

export default Medical_drone;