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
import ServicePackageDisplay from "../Componets/LandScape/servicepackagedisplay";
import EnterPrice from "../Componets/EnterPrice/EnterPrice";
import ArticleCard from "../Componets/Blogs/ArticleCard";
import ArticleCardDisplay from "../Componets/Blogs/ArticleCard";
import FAQSection from "../Componets/FAQs/FAQSection";

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
        {/* <Medical_drone/>
        <Thermo/> */}
        <Marketdisplay/>
        <LandScape/>
        <ServicePackageDisplay/>
        <EnterPrice/>
        <ArticleCardDisplay/>
        <Testimonials/>
        <FAQSection/>
        <Footer/>
        
        </>
    )
}