import React, { useState, useRef } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg mb-4">
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={toggleOpen}
      >
        <h2 className="text-lg font-semibold text-green-700">{question}</h2>
        <span className="text-gray-600">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0px',
        }}
      >
        <div className="p-4 text-gray-700">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
