import React from 'react'
import { drone_list } from '../../../public/assets'
// import Market from './Market'
import './servicepackagedisplay.css'
import ServicePackage from './servicepackage'
// import { drone_list } from '../../../public/assets'
import agridrone from '../../../public/Agriculturedrone.png'
import ser2 from '../../../public/ser2.png'
import ser3 from '../../../public/ser3.png'
import ser4 from '../../../public/ser4.png'
import ser5 from '../../../public/ser5.png'
import ser6 from '../../../public/ser6.png'
import ser7 from '../../../public/ser7.png'
import ser8 from '../../../public/ser8.png'
const servicepackagelist = [
    {
    
       img:agridrone,
        name:'Agriculture Drone'
    },
    {
    
       img:ser2,
        name:'Surveillance Drone'
    },
    {
    
       img:ser3,
        name:'Customised Battery'
    },
    {
    
       img:ser4,
        name:'Soil Testing'
    },
    {
    
       img:ser8,
        name:'Drone  Transportation'
    },
    {
    
       img:ser5,
        name:'Soil Testing'
    },
    {
    
       img:ser6,
        name:'Water Tank'
    },
    {
    
       img:ser7,
        name:'Generator'
    },
]
const ServicePackageDisplay = () => {
  return (
    <div>
    <div className="drone-display" id="drone-display">
      <h2>SERVICE PACKAGE</h2>
      <div className="drone-display-list1">
          {
              servicepackagelist.map((item)=>{

               
                  return <ServicePackage image={item.img} name={item.name}/>
              })
          }

      </div>
    </div>
    <hr />
  </div>
  )
}

export default ServicePackageDisplay
