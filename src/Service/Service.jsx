import React from 'react'
import ServicesPage from '../Componets/Service1'
import Navbar from '../Componets/Navbar'
import Service2 from '../Componets/Service2'
import Service3 from '../Componets/Service3'
import Service4 from '../Componets/Service4'
import Service5 from '../Componets/Service5'
import Footer from '../Componets/Fotter'
import Service6 from '../Componets/Service6'
import Service7 from '../Componets/Service7'
import Service8 from '../Componets/Service8'
import Servillance from '../Componets/surviellance/survillance'
import Medical from '../Componets/surviellance/Medical_drone'
import Thermo from '../Componets/surviellance/Thermo'


const Service = () => {
  return (
    <div>
       <Navbar/> 
      <ServicesPage/>
      <Servillance/>
      <Medical/>
      <Thermo/>
      <Service2/>
      <Service3/>
      <Service4/>
      <Service5/>
      <Service6/>
      <Service7/>
      <Service8/>
      <Footer/>
    </div>
  )
}

export default Service
