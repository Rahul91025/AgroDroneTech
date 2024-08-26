import React from 'react';
import './surviellance.css';
import khetiamge from '../../../public/anish-drone.png';
import bgvideo from '../../../public/videos.mp4';

function Survillance() {
  return (
    <div className="surv">
      <video autoPlay muted loop className="background-video" style={{
    
      }}>
        <source src={bgvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1 style={{
        }}>Surveillance Technology Drones in Agriculture:</h1>
        <div className="box">
          <img src={khetiamge} alt="Drone Image" className="drone-image" />
        
          <div className="drone-info">
            <div className="drone-text">
              <div className='texts'>
                <p>
                  Drones equipped with advanced sensors and imaging capabilities provide real-time data on crop health, soil conditions, and other essential metrics. They help farmers make informed decisions, optimize resource usage, and improve crop yields. Key benefits include:
                </p>
                <ul>
                  <li>
                    <strong>Real-Time Monitoring:</strong> Drones can cover large areas quickly, providing real-time data on crop health, growth stages, and potential issues.
                  </li>
                  <li>
                    <strong>Precision Agriculture:</strong> By identifying specific areas needing attention, drones help in applying treatments like fertilizers, pesticides, or water precisely where needed.
                  </li>
                  <li>
                    <strong>Soil and Field Analysis:</strong> Multispectral and thermal sensors on drones can analyze soil conditions, detect irrigation issues, and monitor plant health.
                  </li>
                  <li>
                    <strong>Efficient Resource Management:</strong> By pinpointing areas of concern, drones help farmers use resources more efficiently, reducing waste and costs.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Survillance;
