import React, { useState, useEffect } from 'react';
import Navbar from "../Componets/Navbar";
import Banner from '../Componets/Banner';
import YouTube1 from '../Componets/Youtube1';
import Courses from '../Componets/Courses';
import Coe from '../Componets/Coe';
import Form1 from '../Componets/Form1';
import Fotter from '../Componets/Fotter';






const Training = () => {
  
  return (
    <>
      <Navbar bgColor="#4B5563"/>
      <Banner/>
      <YouTube1/>
      <Courses/>
      <Coe/>
      <Form1/>
      <Fotter/>
     
    </>
  );
};

export default Training;
