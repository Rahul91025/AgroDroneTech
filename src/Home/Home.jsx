import AgroDroneReview from "../Componets/AgroDroneReview";
import BookingVideo from "../Componets/BookingVideo";
import DroneComponent from "../Componets/DroneComponent";
import LandScape from "../Componets/LandScape/LandScape";
import Marketdisplay from "../Componets/Market/Marketdisplay";
import Navbar from "../Componets/Navbar";
import ScientistAdvise from "../Componets/scientistAdvise";
import Survillance from "../Componets/surviellance/survillance";
import VideoBackground from "../Componets/VideoBackgroud";

export default function Home(){
    return(
        <>
        <Navbar/>
        <VideoBackground/>
        <DroneComponent/>
        <AgroDroneReview/>
        <BookingVideo/>
        <ScientistAdvise/>
        <Survillance/>
        <Marketdisplay/>
        <LandScape/>
        
        </>
    )
}