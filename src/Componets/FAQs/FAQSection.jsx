import React from 'react';
import FAQItem from './FAQItem';

const FAQSection = () => {
  const faqData = [
    {
      question: 'What services does your agriculture drone company provide?',
      answer:
        'We provide drone spraying services for precise pesticide and fertilizer application, high-quality drone sales, and personalized training programs for farmers.',
    },
    {
      question: 'How does drone spraying benefit my crops?',
      answer:
        'Drone spraying allows for precise application of pesticides and fertilizers, reducing waste and ensuring even coverage across your crops, which can lead to healthier plants and higher yields.',
    },
    {
      question: 'Can I purchase drones from your company?',
      answer:
        'Yes, we offer a range of high-quality drones that are specifically designed for agricultural use. Contact us for more details on the models available.',
    },
    {
      question: 'What makes your drones suitable for farming?',
      answer:
        'Our drones are designed with features like GPS guidance, variable rate application, and real-time data collection, making them ideal for modern farming practices.',
    },
    {
      question: 'Do you offer training for operating the drones?',
      answer:
        'Yes, we provide comprehensive training programs to ensure that you are fully equipped to operate our drones safely and effectively.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-8" style={{
      marginTop:'100px',marginBottom:'200px'
    }}>
      <h1 className="text-4xl font-bold text-black mb-8 text-center">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
