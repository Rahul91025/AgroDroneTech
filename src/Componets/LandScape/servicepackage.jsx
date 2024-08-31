import React from 'react'

import './servicepackage.css'
import { drone_list } from '../../../public/assets';


const ServicePackage = ({image,name}) => {
  return (
    <div class="work">
    <img src={image} alt="Error Loading Image" />
      {/* <h3>{name}</h3> */}
    <div class="layer">
      <p>
  {name}
      </p>
      
    </div>
  </div>
 
  

  )
}

export default ServicePackage
