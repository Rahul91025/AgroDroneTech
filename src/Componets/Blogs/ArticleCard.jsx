import React from 'react';
import './ArticleCard.css';
import b1 from '../../../public/b1.jpg';
import b2 from '../../../public/b2.jpg';
import b3 from '../../../public/b3.jpg';
import b4 from '../../../public/b4.jpg';
import b5 from '../../../public/b5.jpg';
import b6 from '../../../public/b6.jpg';

const blogsList = [
    {
      image: b1,
      title: "The Critical Need for Forestation in India: How Garuda Drones SABUJA Could Be a Game Changer",
      date: "22 - Aug - 24",
      description: "Discover how Garuda Drones SABUJA is transforming reforestation in India with cutting-edge technology. At a time when restoring our forests is more crucial than ever, this innovative approach could be the game changer we need to combat climate change and secure a sustainable future.",
      linkText: "VIEW MORE"
    },
    {
      image: b2,
      title: "Enhancing Mining Safety: Garuda Drones Advanced Technology for Surveying and Inspection",
      date: "21 - Sep - 23",
      description: "Garuda Drones technology has emerged as an efficient solution to enhance safety in mining operations. These drones offer a cost-effective and efficient means of accessing hazardous or hard-to-reach areas, eliminating the need for personnel to be physically present during surveying. Garuda Drones provide more accurate data compared to traditional surveying methods, leading to more effective and targeted rehabilitation efforts. By leveraging these drones for inspection, surveying, and MCDR compliance, mining companies can prioritize worker well-being and sustainable mining practices.",
      linkText: "VIEW MORE"
    },
    {
      image: b3,
      title: "Road Survey in Myanmar Border for BRO",
      date: "21 - Sep - 22",
      description: "Recently, Garuda Drones got an opportunity to conduct drone surveys in 3 major roadways near the Myanmar border; Chakpikarong to Khongtal, Chakpikarong to Joupi & Saibol Joupi to L.Bongjoi, for The Border Roads Organisation. Let us have a look at the services we aim to provide and learn how drones have changed the scenario of civil engineering & surveying.",
      linkText: "VIEW MORE"
    },
    {
      image: b4,
      title: "Simplifying Vegetation Management for Power Lines with Drones",
      date: "15 - Mar - 22",
      description: "Do you remember the aftermath of cyclone Fani? It brushed past a trail of destruction by adversely affecting the state of Odisha. The storm’s rushing speed of 250 kilometres per hour had a devastating effect on lives, property, trees and other basic amenities. The effect of the cyclone was observed even after months as several rural areas continued to be in darkness due to lack of electricity.",
      linkText: "VIEW MORE"
    },
    {
      image: b5,
      title: "Drones for Construction Monitoring",
      date: "08 - Mar - 22",
      description: "Since their adoption by civil and commercial groups in 2016, the use of drones in the construction industry has increased significantly. Drones have now become a valuable asset to construction and engineering firms looking forward to streamlining their operations, increasing employee safety, monitor the progress regularly even in tough-to-access areas.",
      linkText: "VIEW MORE"
    },
    {
      image:b6,
      title: "Making India the Drone Superpower by 2025",
      date: "01 - Mar - 22",
      description: "The export revenue of the IT industry is estimated at US$ 150 billion in FY21; way higher than the oil exports from Saudi which depicts the capability of India being a technology superpower in the field of IT services.",
      linkText: "VIEW MORE"
    },
];

const ArticleCard = ({ image, title, date, desc }) => {
  return (
    <div className="article-card">
      <img src={image} alt={title} className="article-image" />
      <div className="article-content">
        <h3 className="article-title">{title}</h3>
        <div className="article-date">
          <span>{date}</span>
        </div>
        <p className="article-description">{desc}</p>
        <a href="#" className="article-link">VIEW MORE</a>
      </div>
    </div>
  );
};

const ArticleCardDisplay = () => {
  return (
    <>
      <h1 style={{
        color:'black',
        textAlign:'center',
        fontSize:'45px',
        margin:'30px',
        fontWeight:'bold'
      }}>Blogs</h1>
      <p style={{
        color:'black',
        textAlign:'center',
        fontSize:'17px',
        margin:'auto',
        width:'55%'
      }}>
  Explore the latest insights and success stories from <b style={{color:'blue'}}>Garuda Drones</b>, where cutting-edge drone technology meets real-world applications, driving innovation and efficiency across various industries.
</p>

    <div className="blog-list">
      {blogsList.map((blog, key) => (
        <ArticleCard
          key={key}
          image={blog.image}
          title={blog.title}
          date={blog.date}
          desc={blog.description}
        />
      ))}
    </div>
    </>
  );
};

export default ArticleCardDisplay;
