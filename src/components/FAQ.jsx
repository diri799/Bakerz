import React from 'react';
import '../styles/FAQ.css';

const FAQ = () => {
  const faqs = [
    {
      question: "What are your opening hours?",
      answer: "We are open Monday through Friday from 7 AM to 7 PM, and weekends from 8 AM to 6 PM."
    },
    {
      question: "Do you offer custom orders?",
      answer: "Yes! We accept custom orders for special occasions. Please contact us at least 48 hours in advance."
    },
    {
      question: "Are your products made fresh daily?",
      answer: "Yes, all our products are baked fresh every day using premium ingredients."
    },
    {
      question: "Do you offer delivery?",
      answer: "Yes, we offer local delivery within a 10-mile radius. Delivery fees may apply."
    }
  ];

  return (
    <div className="faq-page">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-content">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ; 