import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Home/Home";
import Product1 from "./Product/Product1";
import About1 from "./About/About1";
import Carrers1 from "./Carrers/Carrers1.jsx";
import Training from "./Training/Training";
import Service from "./Service/Service.jsx";
import Contact from "./Contact/Contact1.jsx";
import WhatsAppIcon from "./Componets/Whatsapp/Whatsapp.jsx";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product1" element={<Product1 />} />
        <Route path="/about" element={<About1 />} />
        <Route path="/carrers1" element={<Carrers1 />} />
        <Route path="/training" element={<Training />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <WhatsAppIcon/> 
      
      {/* <Fotter/> */}
    </>
  );
}

export default App;
