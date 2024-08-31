import React from 'react';
import { motion } from 'framer-motion';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-gray-900 text-gray-300 py-1 px-6"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 "style={{
        padding:'20px',marginTop:'100px',
      }}>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.img
            src="../../public/logo.jpg"
            alt="IG Drones Logo"
            className="mb-2 w-32"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
          <p className="text-sm">
            DARHUB Drones provide specialist drone services at height and difficult to access areas across India. Technical end-to-end solution to help you ease your operation. Capture the smallest of details with ease. Raise your operational standards & Imagine more with us. Imagine Inspire Innovate.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="font-bold text-lg text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {['Home', 'About Us', 'Services', 'Blog', 'Partner With Us As Institution', 'Partner With Us As Company/Pilot', 'Careers', 'Contact Us', 'Privacy Policy'].map((link) => (
              <motion.li
                key={link}
                whileHover={{ x: 10, color: '#ffffff' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <a href="#" className="hover:underline flex items-center">
                  <i className="fas fa-chevron-right mr-2"></i>{link}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="font-bold text-lg text-white mb-4">Head Office</h3>
          <p className="text-sm mb-2">Unit No. 408, Tower B-4, Spaze I-Tech Park, Sohna Road, Sector 49, Gurugram-122018, Haryana</p>
          <p className="text-sm mb-2"><i className="fas fa-phone-alt mr-2"></i>+91 98532 48979</p>
          <p className="text-sm mb-4"><i className="fas fa-envelope mr-2"></i>rajendra.rpd.das@gmail.com</p>
          <div className="flex space-x-4 text-xl">
            {['linkedin-in', 'facebook-f', 'twitter', 'youtube'].map((icon) => (
              <motion.a
                key={icon}
                href="#"
                className="hover:text-white transition"
                whileHover={{ scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <i className={`fab fa-${icon}`}></i>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="md:col-span-2">
          <h3 className="font-bold text-lg text-white mb-4">Branch Offices</h3>
          <ul className="space-y-2 text-sm">
            <li><strong>Ahmedabad:</strong> Hub Gujarat, KCG Campus, Opp PRL, Navrangpura, Ahmedabad, Gujarat 380015</li>
            <li><strong>Mumbai:</strong> NASSCOM 10000 Startup Warehouse, 304, Building No. 2, Millenium Business Park, Sector 1, Mahape, Navi Mumbai, Maharashtra 400710</li>
            <li><strong>Kolkata:</strong> Sarada Bhavan, 2/2B, 2nd floor, Kalimuddin Sarkar Ln, Kulia, Beleghata, Kolkata, West Bengal 700010</li>
            <li><strong>Bhubaneswar:</strong> 517, Lane 7, Neeladri Vihar, Utkal Hospital Road, Bhubaneswar, Odisha 751021</li>
            <li><strong>Patna:</strong> Gola Rd, Ramjaipal Nagar, Danapur Nizamat, Danapur, Bihar 801503</li>
            <li><strong>Guwahati:</strong> 302, Juri Complex, Sweet Lane, House No 1, P.O. Panjabari Rd, Guwahati, Assam 781037</li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        className="text-center mt-10 border-t border-gray-700 pt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <p className="text-sm">Copyright © 2024. All Rights Reserved By DARHUB Drones</p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
