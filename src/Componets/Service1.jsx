import React from 'react';
import { FaRobot, FaThermometerHalf, FaWarehouse } from 'react-icons/fa';
import { MdOutlineInventory } from 'react-icons/md';
import img from '../../public/young1.jpg';
import svdBackground from '../../public/triangle.jpg';

const ServicesPage = () => {
  return (
    <div className="bg-green-600 min-h-screen text-white">
      <div className="relative">
        <img 
          src={img} 
          alt="Banner" 
          className="w-full h-83 object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-64 bg-blue-900 opacity-0"></div>
        <div className="absolute top-0 left-0 w-full h-64 flex items-center justify-center">
        </div>
      </div>

      <div className="py-16 ">
        <div className="bg-green-500  w-[25rem] h-[19rem] rounded-sm shadow-lg absolute top-[26rem] left-[23%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
          <h1 className=" font-bold absolute top-[5rem] text-gray-100">Daruhub Aerospace</h1>
          <h2 className="text-6xl font-semibold">Services</h2>
        </div>

        <div className="bg-white rounded-lg shadow-lg text-black w-full" 
          style={{ backgroundImage: `url(${svdBackground})`, height: '64rem', }}>
          <div className="w-[70rem] h-[40rem] rounded-lg overflow-hidden relative left-[5rem] top-3" style={{
            marginTop:'70px'
          }}>
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/TUxzypMgl0Y"
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          <div className="relative top-[80px] px-[13rem]"> {/* Added px-10 class */}
            <p className="text-lg">
              Our company offers a comprehensive suite of industrial services, including drone-based thermal imaging, ultrasonic thickness testing, and inventory management, tailored for Industry 4.0 upgrades. With extensive experience, we've earned credibility, securing expedited approvals from DGCA and MOCA. Collaborations with leading R&D entities like IIT Kanpur and MIT bolster our capabilities. Explore our construction drone services and UAV industrial inspection for tailored industrial solutions. Find the ideal industrial drone considering factors like price, monitoring features, and camera specifications.
            </p>
          </div>
        </div>

        {/* <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-black flex items-center transform transition duration-300 hover:scale-105 hover:bg-blue-100 hover:shadow-xl">
            <FaRobot className="text-3xl text-blue-600 mr-4"/>
            <p className="text-lg">Drone-based thermal imaging</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-black flex items-center transform transition duration-300 hover:scale-105 hover:bg-blue-100 hover:shadow-xl">
            <FaThermometerHalf className="text-3xl text-blue-600 mr-4"/>
            <p className="text-lg">Ultrasonic thickness testing</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-black flex items-center transform transition duration-300 hover:scale-105 hover:bg-blue-100 hover:shadow-xl">
            <MdOutlineInventory className="text-3xl text-blue-600 mr-4"/>
            <p className="text-lg">Inventory management</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-black flex items-center transform transition duration-300 hover:scale-105 hover:bg-blue-100 hover:shadow-xl">
            <FaWarehouse className="text-3xl text-blue-600 mr-4"/>
            <p className="text-lg">Industry 4.0 upgrades</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ServicesPage;
