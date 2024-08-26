import React from "react";

import Training from "./Training/Training";
import Home from "./Home/Home";
import Product from "./Componets/Product";
import Product1 from "./Product/Product1";
import About1 from "./About/About1";
import AwardsAndRecognitions from "./Componets/Awards";
import CareersPage from "./Componets/Carrers";
import Contact from "./Contact/Contact1.jsx"

import Carrers1 from "./Carrers/Carrers1.jsx";
import { Route, Routes } from "react-router-dom";
import Service from "./Service/Service.jsx";

function App() {
  return (
    <>
   
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/product1" element={<Product1/>}/>
    <Route path="/about" element={<About1/>}/>
    <Route path="/carrers1" element={<Carrers1/>}/>
    <Route path="/training" element={<Training/>}/>
    <Route path="/services" element={<Service/>}/>
    <Route path="/contact" element={<Contact/>}/>
    </Routes>
    {/* <Fotter/> */}
      
    </>
  );
}
export default App;
