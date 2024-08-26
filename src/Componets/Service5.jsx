import React from 'react';
import pic1 from '../../public/Ippo-Drone.jpeg';
import pic3 from '../../public/hexa-blue-copy.jpg';
import Navbar from './Navbar';

const Service5 = () => {
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
          <h2 className="text-4xl font-semibold text-white mb-7">Delivery / Load Carrying</h2>
          <p className="text-white leading-relaxed mb-6 ">
          Load-carrying UAVs can be deployed as emergency supply <br/> drones in calamitous situations. In instances where disaster <br/>strikes and disrupts infrastructure supply lines, these drones <br/>serve as critical components of disaster relief logistics.<br/> By utilizing drone delivery services, rescue personnel can <br/>efficiently transport supplies, bolster infrastructure support,<br/> and establish communication networks, ultimately mitigating <br/>suffering and preventing further damage. The advantages <br/>include minimized transportation times, reduced traffic<br/> congestion, enhanced safety due to decreased vehicle miles<br/> traveled and fewer at-grade rail crossings, lower greenhouse<br/> gas emissions, and increased route flexibility.
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

export default Service5;
