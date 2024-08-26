import AgroDroneReview from "../Componets/AgroDroneReview";
import BookingVideo from "../Componets/BookingVideo";
import DroneComponent from "../Componets/DroneComponent";
import LandScape from "../Componets/LandScape/LandScape";
import Marketdisplay from "../Componets/Market/Marketdisplay";
import Navbar from "../Componets/Navbar";
import Survillance from "../Componets/surviellance/survillance";
import Thermo from "../Componets/surviellance/Thermo";
import Footer from "../Componets/Fotter"

import VideoBackground from "../Componets/VideoBackgroud";
import Medical_drone from "../Componets/surviellance/Medical_drone";
import Testimonials from "../Testimonials/Testimonials";

export default function Home(){
    return(
        <>
        <Navbar/>
        <VideoBackground/>
        <DroneComponent/>
        <AgroDroneReview/>
        <BookingVideo/>
        
       

        {/* <ScientistAdvise/> */}
        <Survillance/>
        <Medical_drone/>
        <Thermo/>
        <Marketdisplay/>
        <LandScape/>
        <Testimonials/>
        <Footer/>
        
        </>
    )
}