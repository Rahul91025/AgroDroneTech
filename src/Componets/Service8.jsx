import React from 'react';
import pic1 from '../../public/Surveillance-Drone.jpeg';
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
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">Highway Monitoring / <br/> Traffic Monitoring</h2>
          <p className="text-gray-500 leading-relaxed mb-6">
          Utilizing UAVs for highway infrastructure management  <br/> showcases an advanced and impeccable symbol of efficiency <br/>and performance. Bridge inspection conducted through<br/> drones represents another facet of this cutting-edge<br/> technology. Efficient traffic management is achieved through <br/>the utilization of drones, providing real-time traffic <br/>monitoring capabilities that capture detailed images and<br/> videos of traffic flow and congestion. Furthermore, drone <br/>technology plays a crucial role in road construction <br/>operations, offering advantages such as covering a larger area<br/> in less time and improving overall traffic management strategies.
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
