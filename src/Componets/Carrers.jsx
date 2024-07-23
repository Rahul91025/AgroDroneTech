import React from 'react';
import image4 from '../../public/carrer.jpg'; // Update with the correct path for AgroDrone's image
import innovationImg from '../../public/carrer.jpg'; // Update with the correct paths
import collaborationImg from '../../public/carrer.jpg';
import growthImg from '../../public/carrer.jpg';
import balanceImg from '../../public/carrer.jpg';

const CareersPage = () => {
  const jobs = [
    { title: 'Drone Engineer - Project Agro', location: 'Bhubaneswar, Odisha' },
    { title: 'Remote Pilot - Project Agro', location: 'Cuttack, Odisha' },
    { title: 'AI Specialist - Project Drone', location: 'Sambalpur, Odisha' },
    { title: 'Field Operations Manager - Project Agro', location: 'Remote' },
    { title: 'Software Developer - Project Drone', location: 'Bhubaneswar, Odisha' },
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-green-800 text-white p-8"
        style={{ 
          backgroundImage: `url(${image4})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <nav className="flex justify-end space-x-4 mt-[90px]">
          {/* <a href="#perks" className="hover:underline">Perks</a>
          <a href="#locations" className="hover:underline">Locations</a>
          <a href="#main-site" className="hover:underline">Main Site</a> */}
        </nav>
        <div className="text-center mt-10">
          <h1 className="text-4xl md:text-6xl font-bold">Join AgroDrone</h1>
          <p className="text-lg md:text-2xl mt-4">Innovate with Us, Drive the Future of Agriculture...</p>
        </div>
      </header>

      {/* Available Jobs */}
      <section className="text-center py-12">
        <h2 className="text-2xl font-bold mb-6">Available Jobs</h2>
        <div className="mb-8">
          <select className="p-2 border border-gray-400 rounded">
            <option value="all-locations">All Locations</option>
            <option value="bhubaneswar">Bhubaneswar, Odisha</option>
            <option value="cuttack">Cuttack, Odisha</option>
            <option value="sambalpur">Sambalpur, Odisha</option>
            <option value="remote">Remote</option>
          </select>
        </div>
        <div className="flex flex-wrap justify-center">
          {jobs.map((job, index) => (
            <div key={index} className="border border-gray-300 p-4 m-2 w-72 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <p className="mt-2">{job.location}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Content */}
      <section className="text-center py-12 bg-gray-200">
        <h2 className="text-2xl font-bold mb-6">Why Work With AgroDrone?</h2>
        <p className="mb-8">At AgroDrone, we’re committed to advancing agricultural technology. Join us in our mission to revolutionize farming with cutting-edge drone technology.</p>
        <div className="flex justify-center space-x-8">
          <div className="text-center">
            <img src={innovationImg} alt="Innovation" className="w-16 h-16 mx-auto mb-2 rounded-full" />
            <p>Innovation</p>
          </div>
          <div className="text-center">
            <img src={collaborationImg} alt="Collaboration" className="w-16 h-16 mx-auto mb-2 rounded-full" />
            <p>Collaboration</p>
          </div>
          <div className="text-center">
            <img src={growthImg} alt="Growth" className="w-16 h-16 mx-auto mb-2 rounded-full" />
            <p>Growth</p>
          </div>
          <div className="text-center">
            <img src={balanceImg} alt="Balance" className="w-16 h-16 mx-auto mb-2 rounded-full" />
            <p>Balance</p>
          </div>
        </div>
      </section>

      {/* Perks Section */}
      <section id="perks" className="text-center py-12">
        <h2 className="text-2xl font-bold mb-6">Perks and Benefits</h2>
        <div className="flex flex-wrap justify-center">
          <div className="border border-gray-300 p-4 m-2 w-72 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Health Insurance</h3>
            <p className="mt-2">Comprehensive health coverage for you and your family.</p>
          </div>
          <div className="border border-gray-300 p-4 m-2 w-72 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Flexible Hours</h3>
            <p className="mt-2">Work-life balance is important to us.</p>
          </div>
          <div className="border border-gray-300 p-4 m-2 w-72 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Learning Opportunities</h3>
            <p className="mt-2">Access to courses and conferences.</p>
          </div>
          <div className="border border-gray-300 p-4 m-2 w-72 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Remote Work</h3>
            <p className="mt-2">Option to work remotely from anywhere.</p>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="text-center py-12 bg-gray-200">
        <h2 className="text-2xl font-bold mb-6">Our Locations</h2>
        <div className="flex flex-wrap justify-center">
          <div className="border border-gray-300 p-4 m-2 w-72 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Bhubaneswar, Odisha</h3>
            <p className="mt-2">Our headquarters and main office.</p>
          </div>
          <div className="border border-gray-300 p-4 m-2 w-72 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Cuttack, Odisha</h3>
            <p className="mt-2">Our operational base for eastern India.</p>
          </div>
          <div className="border border-gray-300 p-4 m-2 w-72 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Sambalpur, Odisha</h3>
            <p className="mt-2">Key location for field operations.</p>
          </div>
          <div className="border border-gray-300 p-4 m-2 w-72 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Remote</h3>
            <p className="mt-2">Flexible work-from-home opportunities.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
