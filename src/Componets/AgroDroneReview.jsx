import React from 'react';

const drones = [
  {
    name: 'Spraying Drone',
    video: 'https://www.youtube.com/embed/zUwYQ7BU1vw',
    specs: ['Capacity: 16L', 'Range: 2km', 'Battery Life: 1hr'],
    price: '$2000',
    description: 'Perfect for spraying crops efficiently and effectively.',
    reviews: [
      { reviewer: 'Amit Sharma', review: 'This drone has significantly improved our spraying efficiency!' },
      { reviewer: 'Priya Singh', review: 'Highly recommend for large-scale farms.' }
    ]
  },
  {
    name: 'Surveillance Drone',
    video: 'https://www.youtube.com/embed/zUwYQ7BU1vw',
    specs: ['Resolution: 4K', 'Range: 5km', 'Battery Life: 2hrs'],
    price: '$2500',
    description: 'Ideal for monitoring large fields and livestock.',
    reviews: [
      { reviewer: 'Rajesh Kumar', review: 'Crystal clear images and long battery life. Great for surveillance.' },
      { reviewer: 'Anita Patel', review: 'A must-have for farm security.' }
    ]
  },
  {
    name: 'Drone Training',
    video: 'https://www.youtube.com/embed/zUwYQ7BU1vw',
    specs: ['Duration: 3 days', 'Skill Level: Beginner'],
    price: '$300',
    description: 'Comprehensive training program for drone operation.',
    reviews: [
      { reviewer: 'Vikram Joshi', review: 'Learned a lot in just three days!' },
      { reviewer: 'Neha Gupta', review: 'Great training program for beginners.' }
    ]
  },
  {
    name: 'Women Flying',
    video: 'https://www.youtube.com/embed/zUwYQ7BU1vw',
    specs: ['Capacity: 16L', 'Range: 2km', 'Battery Life: 1hr'],
    price: '$2200',
    description: 'Empowering women in the field of drone technology.',
    reviews: [
      { reviewer: 'Ritika Verma', review: 'A fantastic initiative to promote women in tech.' },
      { reviewer: 'Sunita Reddy', review: 'Inspiring and powerful.' }
    ]
  },
  {
    name: '16L Drone',
    video: 'https://www.youtube.com/embed/zUwYQ7BU1vw',
    specs: ['Capacity: 16L', 'Range: 2km', 'Battery Life: 1hr'],
    price: '$2100',
    description: 'Efficient and reliable drone with a 16L capacity.',
    reviews: [
      { reviewer: 'Manoj Nair', review: 'Excellent performance and easy to use.' },
      { reviewer: 'Rohit Agarwal', review: 'Great value for money.' }
    ]
  },
  {
    name: '25L Drone',
    video: 'https://www.youtube.com/embed/zUwYQ7BU1vw',
    specs: ['Capacity: 25L', 'Range: 3km', 'Battery Life: 1.5hrs'],
    price: '$3000',
    description: 'High-capacity drone suitable for larger farms.',
    reviews: [
      { reviewer: 'Ramesh Rao', review: 'Handles large areas with ease.' },
      { reviewer: 'Arjun Desai', review: 'Highly recommend for big farms.' }
    ]
  },
  {
    name: '30L Drone',
    video: 'https://www.youtube.com/embed/zUwYQ7BU1vw',
    specs: ['Capacity: 30L', 'Range: 3.5km', 'Battery Life: 2hrs'],
    price: '$3500',
    description: 'Top-of-the-line drone with maximum capacity and range.',
    reviews: [
      { reviewer: 'Sanjay Mehta', review: 'The best drone we’ve ever used.' },
      { reviewer: 'Kavita Rao', review: 'Unmatched performance and capacity.' }
    ]
  },
];

const AgroDroneReview = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-16 bg-gradient-to-r from-sky-200 via-gray-400 to-sky-300">
      <h2 className="text-4xl font-bold mb-12 text-center text-blue-600">AgroDrone Reviews & Specifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {drones.map((drone, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
            <div className="p-4">
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">{drone.name}</h3>
              <p className="text-gray-600 mb-2">{drone.description}</p>
              <iframe
                width="100%"
                height="200"
                src={drone.video}
                title={drone.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="mb-4"
              ></iframe>
              <ul className="mb-4">
                {drone.specs.map((spec, i) => (
                  <li key={i} className="text-gray-600 text-sm">{spec}</li>
                ))}
              </ul>
              <div className="text-xl font-bold text-gray-800 mb-4">{drone.price}</div>
              <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition duration-300">Buy Now</button>
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-gray-700">Client Reviews:</h4>
                {drone.reviews.map((review, i) => (
                  <div key={i} className="text-gray-600 text-sm mt-2 transition duration-500 transform translate-x-0 hover:translate-x-2">
                    <span className="font-bold">{review.reviewer}:</span> {review.review}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgroDroneReview;
