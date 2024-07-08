import React from 'react';
import { AcademicCapIcon, BriefcaseIcon, DesktopComputerIcon, GlobeAltIcon, ScaleIcon, UserGroupIcon } from '@heroicons/react/outline';

const features = [
  {
    icon: <DesktopComputerIcon className="w-12 h-12 mx-auto text-green-600" />,
    title: "Cutting-Edge Drone Technology",
    description: "Explore the latest advancements in drone technology through hands-on experience and industry-driven research.",
  },
  {
    icon: <UserGroupIcon className="w-12 h-12 mx-auto text-green-600" />,
    title: "Industry Experts Guidance",
    description: "Receive mentorship from industry experts to enhance your skills and navigate your entrepreneurial journey.",
  },
  {
    icon: <BriefcaseIcon className="w-12 h-12 mx-auto text-green-600" />,
    title: "Career-Focused Education",
    description: "Prepare for a successful career in the drone industry with practical training and comprehensive coursework.",
  },
  {
    icon: <GlobeAltIcon className="w-12 h-12 mx-auto text-green-600" />,
    title: "Global Research Collaboration",
    description: "Participate in global research initiatives and collaborations aimed at solving industry challenges with UAV technologies.",
  },
  {
    icon: <ScaleIcon className="w-12 h-12 mx-auto text-green-600" />,
    title: "Focus on Innovation",
    description: "Nurture your innovative spirit and contribute to groundbreaking advancements in drone applications and solutions.",
  },
  {
    icon: <AcademicCapIcon className="w-12 h-12 mx-auto text-green-600" />,
    title: "Academic Excellence",
    description: "Achieve academic excellence through rigorous curriculum and hands-on projects designed to enhance learning outcomes.",
  },
];

const Coe = () => {
  return (
    <div className="bg-gray-700 py-12"> {/* Changed bg-gray-100 to bg-gray-200 for a slightly darker background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-4xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Center of Excellence (COE)
        </h1>
        <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto text-center"> {/* Changed text-gray-500 to text-gray-400 for a lighter gray */}
          Our Center of Excellence (CoE) initiative aims to empower the youth by creating a vibrant drone ecosystem. At Higher Education Institutions (HEIs), we foster research and innovation in Unmanned Aerial Vehicles (UAVs), engaging students and faculty in solving industry challenges.
        </p>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="pt-6">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900 text-center">{feature.title}</h3>
                    <p className="mt-2 text-base text-gray-400">{feature.description}</p> {/* Changed text-gray-500 to text-gray-400 for a lighter gray */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coe;
