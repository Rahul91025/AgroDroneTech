import React from "react";
import E1 from '../../../public/user.png';

import './OurTeam.css';

const EnterPricelist = [
  {
    image: E1,
    name: "Rajendra Prasad",
      },
  {
    image: E1,
    name: "User",
      },
  {
    image: E1,
    name: "User",
  },
  {
    image: E1,
    name: "User",
  
  },
  
];

const OurTeam = ({ image, name }) => {
  return (
    <div className="enterprice1">
      <div className="img-holder1">
        <img src={image} alt="Error Loading Image" />
      <h2>{name}</h2>
      </div>
      
    </div>
  );
};

const OurTeamList = () => {
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
      }}>Our Team</h1>
      <p style={{
        color:'black',
        textAlign:'center',
        fontSize:'17px',
        margin:'auto',
        width:'55%'
      
      }}><b style={{color:'blue'}}>Garuda Drones</b> has become possible due to our Hardworking Team who worked hard for providing the best drones to our customers</p>
    <div className="enter-price-list1">
      {EnterPricelist.map((item, index) => (
        <OurTeam key={index} image={item.image} name={item.name}  />
      ))}
    </div>
    </div>
  );
};

export default OurTeamList;
