import AgroDroneReview from "../Componets/AgroDroneReview";
import BookingVideo from "../Componets/BookingVideo";
import DroneComponent from "../Componets/DroneComponent";
import Fotter from "../Componets/Fotter";
import HomeBanner from "../Componets/HomeBanner";
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
        
        
        </>
    )
}