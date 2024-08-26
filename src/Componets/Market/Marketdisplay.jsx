import React from 'react'
import { drone_list } from '../../../public/assets'
import Market from './Market'
import './Marketdisplay.css'
// import { drone_list } from '../../../public/assets'

const Marketdisplay = () => {
  return (
    <div>
    <div className="drone-display" id="drone-display">
      <h2>CURRENT MARKET REACH IN DIFFERENT STATES OF INDIA</h2>
      <div className="drone-display-list">
          {
              drone_list.map((item)=>{

               
                  return <Market  image={item.img} name={item.name}/>
              })
          }

      </div>
    </div>
    <hr />
  </div>
  )
}

export default Marketdisplay
