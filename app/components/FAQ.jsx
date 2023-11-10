'use client'
import React, { useState } from 'react';
import { faqData } from '../constants/data';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState();

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-full mx-auto my-8  p-8 rounded shadow-md">
      <h2 className="lg:text-h2 sm:text-h4 md:text-h3 text-center font-bold mb-4 text-hColor ">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="mb-4 bg-faqBg p-2 rounded-2xl">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <h3 className="text-xl font-semibold text-hColor">{item.question}</h3>
            <span className="text-2xl text-faqP">{openIndex === index ? '-' : '+'}</span>
          </div>
          {openIndex === index && (
            <p className="mt-2 text-gray-700">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
