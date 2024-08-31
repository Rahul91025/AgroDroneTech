import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppIcon = () => {
  const phoneNumber = '919853248979'; // Replace with the desired phone number
  const whatsappLink = 'https://api.whatsapp.com/send/?phone=+919853248979&text=Hello&type=phone_number&app_absent=0';

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 ease-in-out"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
};

export default WhatsAppIcon;
