import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function Faq() {
  const faqs = [
    {
      question: "What types of loans do you assist with?",
      answer:
        "We assist with business loans, mortgage loans, LAP, commercial funding, and high-value financial solutions.",
    },
    {
      question: "Do you provide investment guidance?",
      answer:
        "Yes, we provide mutual fund consultation, SIP planning, and wealth growth strategies.",
    },
    {
      question: "Can you assist with property transactions?",
      answer:
        "Yes, we provide consultation for buying, selling, resale, and investment properties.",
    },
    {
      question: "How is loan eligibility determined?",
      answer:
        "Eligibility depends on income profile, taxation records, property valuation, and financial history.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-28 bg-[#07111F]"
    >
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-20">
          
          <p className="text-[#C89B3C] uppercase tracking-wide font-semibold mb-4">
            FAQs
          </p>

          <h2 className="text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-400 text-lg leading-8">
            Everything you need to know about our financial,
            investment, and property advisory services.
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="space-y-6">
          
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-[25px] overflow-hidden backdrop-blur-lg"
            >
              
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-8 py-6 text-left"
              >
                
                <h3 className="text-xl font-semibold text-white">
                  {faq.question}
                </h3>

                <FaChevronDown
                  className={`text-[#C89B3C] transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-8 pb-8 text-gray-400 leading-8 text-lg">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;