import React from "react";
import E1 from '../../../public/E1.png';
import E2 from '../../../public/E2.png';
import E3 from '../../../public/E3.png';
import E4 from '../../../public/E4.png';
import E5 from '../../../public/E5.png';
import E6 from '../../../public/E6.png';
import './EnterPrice.css';

const EnterPricelist = [
  {
    image: E1,
    name: "Accurate and Reliable Data",
    desc: "IG Drones uses cutting-edge technology to capture highly accurate data for enterprises, ensuring that their needs are met with precision.",
  },
  {
    image: E2,
    name: "Time and Cost-Effective",
    desc: "IG Drones mapping and surveying is faster and more cost-effective than traditional methods, making it a popular choice for enterprises.",
  },
  {
    image: E3,
    name: "Increased Efficiency",
    desc: "Streamlined processes and cutting-edge drone technology reduce the time required for mapping and surveying projects, increasing overall efficiency.",
  },
  {
    image: E4,
    name: "Experienced Team",
    desc: "The team at IG Drones has extensive experience in the field, ensuring that you receive the best possible results for your project.",
  },
  {
    image: E5,
    name: "Commitment to Quality",
    desc: "We are committed to delivering high-quality results that meet and exceed customer expectations.",
  },
  {
    image: E6,
    name: "Enhanced Safety",
    desc: "IG Drones mapping and surveying eliminates the need for workers to access dangerous or hazardous areas, improving safety.",
  }
];

const EnterPrice = ({ image, name, desc }) => {
  return (
    <div className="enterprice">
      <div className="img-holder">

      <img src={image} alt="Error Loading Image" />
      <h2>{name}</h2>
      </div>
      <p>{desc}</p>
    </div>
  );
};

const EnterPriceList = () => {
  return (
    <div style={{
      marginTop:'100px'
    }}>
      <h1 style={{
        color:'black',
        textAlign:'center',
        fontSize:'45px',
        margin:'30px',
        fontWeight:'bold'
      }}>Why Enterprises Choose Us</h1>
      <p style={{
        color:'black',
        textAlign:'center',
        fontSize:'17px',
        margin:'auto',
        width:'55%'
      
      }}><b style={{color:'blue'}}>Garuda Drones</b> offers enterprises a cost-effective, efficient, and safe solution for their mapping and surveying needs, providing them with accurate and reliable data that meets their business objectives.</p>
    <div className="enter-price-list">
      {EnterPricelist.map((item, index) => (
        <EnterPrice key={index} image={item.image} name={item.name} desc={item.desc} />
      ))}
    </div>
    </div>
  );
};

export default EnterPriceList;
