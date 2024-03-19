// Faq.jsx

import React, { useState } from 'react';
import '../assets/css/FAQ.css';
import Footer from './Footer';
import Home from './Home';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'What types of senior care services do you offer?',
      answer: 'We offer a range of services tailored to meet the diverse needs of our senior residents, including assisted living, memory care, skilled nursing, respite care, and rehabilitation services.',
    },
    {
      question: 'How do you ensure the safety and security of residents?',
      answer: 'Our facilities are equipped with state-of-the-art security systems, including secure entryways and 24/7 monitoring. Additionally, our staff undergoes rigorous training to handle emergency situations and ensure the well-being of residents at all times.',
    },
    {
      question: 'What amenities are available to residents?',
      answer: 'Our amenities may vary depending on the location, but they often include spacious living accommodations, delicious and nutritious meals prepared by professional chefs, recreational activities, fitness programs, transportation services, and more.',
    },
    {
      question: 'How is medication management handled?',
      answer: 'Our trained staff members assist residents with medication management, including medication reminders, assistance with administering medications, and coordination with healthcare providers to ensure proper medication protocols are followed.',
    },
    {
      question: 'Can residents personalize their living spaces?',
      answer: 'Yes, residents are encouraged to personalize their living spaces with their own furniture, decor, and personal belongings to create a comfortable and familiar environment.',
    },
    {
      question: 'What social and recreational activities are available for residents?',
      answer: 'We offer a wide range of social and recreational activities designed to promote engagement, stimulation, and socialization among residents. These may include exercise classes, arts and crafts, musical performances, outings to local attractions, and more.',
    },
    {
      question: 'How are dietary needs and preferences accommodated?',
      answer: 'Our culinary team works closely with residents to accommodate dietary needs, preferences, and restrictions. We offer a variety of nutritious and delicious meal options, and special dietary requirements are always taken into consideration.',
    },
    {
      question: 'Is transportation provided for medical appointments and outings?',
      answer: 'Yes, we provide transportation services for medical appointments, as well as outings and excursions to local attractions, shopping centers, and community events.',
    },
    {
      question: 'How does your staff support residents with memory care needs?',
      answer: 'Our staff undergo specialized training in dementia care and employ person-centered approaches to support residents with memory care needs. We focus on maintaining dignity, promoting independence, and providing a supportive environment for residents with memory impairment.',
    },
    {
      question: 'How do families stay informed about their loved ones well-being and care?',
      answer: 'We believe in transparent communication and keep families informed about their loved ones well-being and care through regular updates,care conferences, open communication channels with staff members and management.',
    },
  ];
  

  return (
    <div><Home/>
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      {faqData.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => handleToggle(index)}>
            <h2>{faq.question}</h2>
            <span className={`arrow ${activeIndex === index ? 'active' : ''}`}>&#x25BC;</span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
    <Footer/>
    </div>
  );
}

export default FAQ;
