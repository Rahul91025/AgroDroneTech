// src/components/DroneComponent.jsx

import React from 'react';
import banner from '../../public/drone3.jpg';

const DroneComponent = () => {
  const drones = [
    { 
      title: "Spraying Drone", 
      imageSrc: banner,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales."
    },
    { 
      title: "Surveillance Drone", 
      imageSrc: banner,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales."
    },
    { 
      title: "Drone Training", 
      imageSrc: banner,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales."
    },
    { 
      title: "Women Flying Drone", 
      imageSrc:banner,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales."
    },
    { 
      title: "16L Drone", 
      imageSrc: banner,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales."
    },
    { 
      title: "25L Drone", 
      imageSrc:banner,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales."
    },
    { 
      title: "30L Drone", 
      imageSrc: banner,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales."
    }
  ];

  return (
    <div className="mt-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-8 text-center">Explore Our Drones</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
        {drones.map((drone, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl hover:bg-gray-100"
            style={{ transitionProperty: 'height, width' }}
          >
            <img 
              src={drone.imageSrc} 
              alt={drone.title} 
              className="w-full h-40 sm:h-48 object-cover object-center rounded-t-lg transition duration-300 ease-in-out transform hover:scale-105"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{drone.title}</h3>
              <p className="text-gray-600">{drone.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DroneComponent;