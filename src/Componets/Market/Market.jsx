import React from 'react'

import './Market.css'
import { drone_list } from '../../../public/assets';


const Market = ({image,name}) => {
  return (
    
 
    <div className='food-item'>
 
      <img src={image} alt="" className="food-item-image" />
      <p>{name}</p>
    
  </div>

  )
}

export default Market
