import React from "react";
import { landScape } from "../../../public/assets";
import "./LandScape.css";
const LandScape = () => {
  return (
    <div className="containers-land">
  <h1>AGRICULTURE LANDSCAPE & SERVICE PACKAGE</h1>
    <div className="box-land">
    
      <div className="images">
      
    
      </div>
      <div class="vertical-line"></div>
      <div className="images-land">
        <img className="img2" src={landScape.landscape2} alt=""  />
        <p style={{
    // boxShadow: '0px 0px 10px #00000015',
    borderRadius:'10px',
    padding:'50px',
    fontSize:'20px',
    // height:'400px',
    width:'50%'
  
    


        }}>
          Our primary customer segments are medium-to-large sized farmers and
          co-operative organization. We plan to partner with known brands and
          providers in the agricultural industry.
        </p>
      </div>
    </div>
    </div>

  );
};

export default LandScape;
