import React from 'react'
import { landScape } from '../../../public/assets'
import './prod.scss'
import { FaShoppingCart } from 'react-icons/fa'


const Prod = ({droneimage,desc,price}) => {
  return (
    <div>
      <div className="container-anish">
        <div className="image">
            <img src={droneimage} alt="" />
        </div>
        <div className='prod-info'>
            <h1>{desc}</h1>
        </div>
        <div className="price">
            <p>{price}</p>
            <button className='btn'>Add to Cart <FaShoppingCart  /></button>
        </div>
      </div>
    </div>
  )
}

export default Prod
