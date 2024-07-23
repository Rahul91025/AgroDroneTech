import React from 'react';

const VideoBackground = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        id="73c027c0-a703-6e71-83e4-d4c35e8d3a0c-video"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ backgroundImage: 'url(https://cdn.prod.website-files.com/5d3b17e74e1172272cd74eed/65ae981160afccc1e88803e1_banner_video-poster-00001.jpg)' }}
      >
        <source src="https://cdn.prod.website-files.com/5d3b17e74e1172272cd74eed/65ae981160afccc1e88803e1_banner_video-transcode.mp4" type="video/mp4" />
        <source src="https://cdn.prod.website-files.com/5d3b17e74e1172272cd74eed/65ae981160afccc1e88803e1_banner_video-transcode.webm" type="video/webm" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
        {/* Overlay Content */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Darubramha's AgroDrone</h1>
          <p className="text-lg mb-6">Revolutionizing agriculture with cutting-edge drone technology.</p>
        </div>
        {/* Learn More Link */}
        <a href="#" className="bg-white text-gray-800 px-6 py-2 rounded-full hover:bg-gray-300">Learn More</a>
      </div>
    </div>
  );
};

export default VideoBackground;
