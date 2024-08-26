import React from "react";
import Prod from "./Prod";
import { proddrone } from "../../../public/assets";
import "./proddisplay.scss";

const Proddisplay = () => {
  return (
    <div>
        <hr style={{color:"gray",height:"1px"}}/> 
        <h1 style={{textAlign:"center",margin:"20px",fontSize:"20px",fontStyle:"bold"}}>More Products</h1>
    <div className="prod-display-list">
      {proddrone.map((item,id) => {
        return (
          <Prod droneimage={item.img} desc={item.desc} price={item.price} />
        );
      })}
    </div>
    </div>
  );
};

export default Proddisplay;
