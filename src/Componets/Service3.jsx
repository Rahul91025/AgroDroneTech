import React from 'react';
import pic3 from '../../public/hexa.jpg'; // Path to your background image
import droneImage from '../../public/Fire-Fighting-Drone.jpeg'; // Path to your drone image

const Service3 = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${pic3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '50px 20px',
        color: '#fff',
      }} 
    >
      <div style={{ maxWidth: '900px', margin: '5rem auto' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px' }}>Disaster Management</h2>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '30px' }}>
          {/* Text Section */}
          <div style={{ flex: 1, paddingRight: '20px' }}>
            <p>
              A disaster management drone, also known as an emergency response drone or disaster relief drone, 
              is an unmanned aerial vehicle (UAV) specifically designed to assist in disaster management and 
              emergency response operations. These drones play a crucial role in providing situational awareness, 
              assessing damages, and supporting rescue and relief efforts in disaster-stricken areas.
            </p>
            <button 
              style={{ 
                marginTop: '20px', 
                padding: '10px 20px', 
                backgroundColor: '#fff', 
                color: '#000', 
                border: 'none', 
                cursor: 'pointer',
                borderRadius: '5px',
                fontWeight: 'bold',
              }}
            >
              Enquire Now
            </button>
          </div>

          {/* Image Section */}
          <div style={{ flex: 1, textAlign: 'center' }} className='relative left-[10rem] bottom-[5rem]'>
            <img src={droneImage} alt="Disaster Management Drone" style={{ width: '100%', height: '23rem', borderRadius: '10px' }} />
          </div>
        </div>

        {/* Features and Applications Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
          {/* Features */}
          <div style={{ flex: 1, paddingRight: '20px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>Features:</h3>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
              <li>Rapid Deployment: Designed for quick deployment in emergency situations.</li>
              <li>Aerial Surveillance and Imaging: Equipped with high-resolution cameras and sensors.</li>
              <li>Live Video Transmission: Real-time video feeds to the ground station.</li>
              <li>Thermal Imaging and Sensor Capabilities: Detects heat signatures and locates survivors.</li>
              <li>Autonomous Flight and GPS Navigation: Pre-determined routes and search patterns.</li>
              
            </ul>
          </div>

          {/* Applications */}
          <div style={{ flex: 1, paddingLeft: '10rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>Applications:</h3>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
              <li>Damage Assessment: Assist in assessing damages after natural disasters.</li>
              <li>Search and Rescue Operations: Support in locating survivors and guiding teams.</li>
              <li>Hazard Mapping and Monitoring: Monitor hazardous areas and assess risks.</li>
              <li>Communication and Connectivity: Establish temporary communication networks.</li>
              <li>Situational Awareness and Incident Management: Provide real-time information.</li>
            </ul>
          </div>
        </div>

        {/* Conclusion */}
        <p>
          Disaster management drones are invaluable tools in emergency response operations. 
          They optimize resource allocation during crises and coordinate with relevant authorities 
          when deploying drones in disaster management scenarios.
        </p>
      </div>
    </div>
  );
};

export default Service3;
