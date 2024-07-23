import React from "react";
import { landScape } from "../../../public/assets";
import "./LandScape.css";
const LandScape = () => {
  return (
    <div className="container">
  <h1>AGRICULTURE LANDSCAPE & SERVICE PACKAGE</h1>
    <div className="box">
    
      <div className="images">
        <h2>Service Package</h2>
        <img src={landScape.landscape1} alt="" />
      </div>
      <div class="vertical-line"></div>
      <div className="images">
        <p>
          Our primary customer segments are medium-to-large sized farmers and
          co-operative organization. We plan to partner with known brands and
          providers in the agricultural industry.
        </p>
        <img className="img2" src={landScape.landscape2} alt="" />
      </div>
    </div>
    </div>

  );
};

export default LandScape;
