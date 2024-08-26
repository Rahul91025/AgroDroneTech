import React from 'react';
import pic1 from '../../../public/Thermo.jpeg';
import pic3 from '../../../public/hexa.jpg';
import Navbar from '../Navbar';

const Thermo = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <div className='relative flex flex-row items-start justify-center p-8 space-x-15 '>
        {/* Background Image */}
        <div className='absolute inset-0 z-[5]'>
          <img src={pic3} alt="Background" className='w-full h-full object-cover'/>
        </div>

        {/* Image Section */}
        

        {/* Content Section */}
        <div className='flex-1 relative z-[5] mt-[4rem] flex flex-col justify-center ml-[10rem] mb-[7rem]'>
          <h2 className="text-4xl font-semibold text-black mb-7">Thermography Drone</h2>
          <p className="text-black leading-relaxed mb-6 ">
          Thermography drone services offer a valuable tool for monitoring machine conditions through thermal imaging. These drones provide real-time thermal analysis, allowing for instant data acquisition and automated reporting, which helps in quickly identifying potential problems and defects within heat distribution. Cost-effective and efficient, drone-based thermal inspections reduce labor costs and minimize downtime by eliminating the need for extensive manpower and scaffolding. This approach also facilitates inspections in low-light and low-visibility environments, such as nighttime or foggy conditions, making it ideal for challenging situations where traditional methods might fail.  
          </p>
          <div className='flex justify-start ml-[9rem]'>
            <button className='bg-white text-green-500 py-2 px-4 rounded-3xl shadow-md hover:bg-green-700 transition duration-300'>
              Enquire Now
            </button>
            
          </div>
          
        </div>
        <div className='flex-1 relative left-[12rem] z-[5] mt-[4rem] mr-[16rem]'>
          <img src={pic1} alt="Service" className='w-[30rem] h-[25rem] rounded-lg shadow-lg'/>
        </div>
      </div>
    </>
  );
}

export default Thermo;