import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Pagination, Navigation,Autoplay } from "swiper";
import thermo from '../../public/Thermo.jpeg'
import './Testimonials.css'

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback: "This service is amazing! Highly recommended.Great experience, I will definitely use this againl .Great experience, I will definitely use this againl Great experience, I will definitely use this againl Great experience, I will definitely use this againl Great experience, I will definitely use this againl Great experience, I will definitely use this againl Great experience, I will definitely use this againl ",
      image: thermo, // replace with actual image URLs
    },
    {
      name: "Jane Smith",
      feedback: "Great experience, I will definitely use this againl .Great experience, I will definitely use this againl Great experience, I will definitely use this againl Great experience, I will definitely use this againl Great experience, I will definitely use this againl Great experience, I will definitely use this againl Great experience, I will definitely use this againl ",
      image: thermo,    },
    {
      name: "Mark Wilson",
      feedback: "This service is amazing! Highly recommended.Great experience, I will definitely use this againl .Great experience, I will definitely use this againl Great experience, I will definitely use this againl Great experience, I will definitely use this againl Great experience, I will definitely use this againl Great experience, I will definitely use this againl Great experience, I will definitely use this againl ",
      image: thermo,    },
    {
      name: "Mark Wilson",
      feedback:"This service is amazing! Highly recommended.Great experience, I will definitely use this againl .Great experience, I will definitely use this againl Great experience, I will definitely use this againl Great experience, I will definitely use this againl Great experience, I will definitely use this againl Great experience, I will definitely use this againl Great experience, I will definitely use this againl ",
      image: thermo,    },
    {
      name: "Mark Wilson",
      feedback:"This service is amazing! Highly recommended.Great experience, I will definitely use this againl .Great experience, I will definitely use this againl Great experience, I will definitely use this againl Great experience, I will definitely use this againl Great experience, I will definitely use this againl Great experience, I will definitely use this againl Great experience, I will definitely use this againl ",
      image: thermo,    },
    {
      name: "Mark Wilson",
      feedback: "This service is amazing! Highly recommended.Great experience, I will definitely use this againl .Great experience, I will definitely use this againl Great experience, I will definitely use this againl Great experience, I will definitely use this againl Great experience, I will definitely use this againl Great experience, I will definitely use this againl Great experience, I will definitely use this againl ",
      image: thermo,    },
  ];

  return (
    <div className="Testimonial"
   > 
      <h1 style={{
        color:'black',
        textAlign:'center',
        fontSize:'45px',
        margin:'20px',
        fontWeight:'bold',
      }}>Testimonials</h1>
      <p style={{
        color:'black',
        textAlign:'center',
        fontSize:'17px',
        margin:'auto',
        width:'55%',
        marginBottom:'30px',
      
      }}><b style={{color:'blue'}}>Garuda Drones</b>  is dedicated to excellence, as proven by our clients' success. Hear from those who've benefited from our precise, efficient, and safe mapping and surveying solutions</p>
  
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      loop={true} 
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3000, // Time in milliseconds before the next slide
        disableOnInteraction: false, // Keep autoplay active after user interaction
      }}
      navigation={true}
      modules={[Pagination, Navigation,Autoplay]}
      className="mySwiper"
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <div className="testimonial-card">
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            <img
              src={testimonial.image}
              alt={`${testimonial.name}'s testimonial`}
              className="testimonial-image"
            />
            <h4 className="testimonial-name">- {testimonial.name}</h4>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default Testimonials;
