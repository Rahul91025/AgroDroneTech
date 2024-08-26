import React from 'react';
import pic3 from '../../public/hexa.jpg'; // Import the background image
import contentImage from '../../public/Armed-Tactical-Drone.jpeg'; // Replace with your content image

const Service4 = () => {
    return (
        <div className="bg-cover bg-center p-8 rounded-lg" style={{ backgroundImage: `url(${pic3})` }}>
            <div className="flex flex-col md:flex-row justify-between items-center bg-white bg-opacity-80 p-6 rounded-lg relative top-[10rem]]">
            <div className="flex-1 p-4">
                    <img src={contentImage} alt="Anti-Drone System" className="w-[80%] rounded-lg" />
                </div>
                <div className="flex-1 p-2 relative top-[-1rem]">
                    <h2 className="text-5xl font-bold mb-4 text-black">Anti-Drone System</h2>
                    <p className="text-xl text-gray-400 mb-6">
                        Anti-drone systems, also known as counter-drone systems or anti-UAV systems, are designed to detect, track, and mitigate the threat posed by unauthorized or malicious drones. These systems employ various technologies and methods to identify and neutralize drones in order to protect sensitive areas, critical infrastructure, and public safety.
                    </p>
                    <button className="px-6 py-2 bg-green-600 text-white text-sm font-semibold rounded hover:bg-green-700 transition  border-blue-50  mt-[1rem]">
                        Enquire Now
                    </button>
                </div>
                
            </div>

            <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 mx-4 mt-[-1rem]">
                <div>
                    <h3 className="text-lg font-semibold mb-2">Detection:</h3>
                    <ul className="text-sm list-disc list-inside mb-4">
                        <li>Radar Systems: Anti-drone systems often utilize radar technology to detect drones by detecting their presence, speed, and trajectory.</li>
                        <li>Radio Frequency (RF) Detection: RF sensors can identify drones by detecting their communication signals.</li>
                        <li>Acoustic Sensors: Acoustic sensors can detect the distinct sound signatures produced by drones.</li>
                        <li>Visual Detection: Visual detection systems use cameras or optical sensors to visually identify drones.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-2">Tracking and Identification:</h3>
                    <ul className="text-sm list-disc list-inside mb-4">
                        <li>Sensor Fusion: Anti-drone systems often combine multiple detection technologies.</li>
                        <li>Machine Learning and AI: Advanced anti-drone systems employ machine learning algorithms.</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-2">Mitigation and Countermeasures:</h3>
                    <ul className="text-sm list-disc list-inside mb-4">
                        <li>Radio Frequency (RF) Jamming: Anti-drone systems may use RF jamming techniques.</li>
                        <li>GPS Spoofing: By broadcasting false GPS signals, anti-drone systems can manipulate the drone's navigation system.</li>
                        <li>Drone Netting: Some anti-drone systems deploy nets or projectiles to physically capture or disable drones.</li>
                        <li>Laser Systems: High-powered lasers can be used to disable drones.</li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-2">Legal and Ethical Considerations:</h3>
                    <p className="text-sm">It's crucial to note that the use of anti-drone systems should comply with local regulations and laws.</p>
                </div>
            </div>

            <div className="pt-8 text-sm text-gray-700 mx-4">
                <p>
                    The deployment of anti-drone systems requires careful consideration of the potential impact on innocent bystanders, neighbouring airspace, and other operational activities. Responsible use of anti-drone systems includes comprehensive risk assessment, coordination with authorities, and adherence to legal and ethical guidelines.
                </p>
            </div>
        </div>
    );
};

export default Service4;
