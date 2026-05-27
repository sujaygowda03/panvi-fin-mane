import React from "react";
import {
  FaShieldAlt,
  FaChartLine,
  FaUsers,
  FaHandshake,
} from "react-icons/fa";

function TrustSection() {
  const trustItems = [
    {
      icon: <FaShieldAlt />,
      title: "Trusted Advisory",
      description:
        "Professional financial consultation with transparency and trust.",
    },
    {
      icon: <FaChartLine />,
      title: "Growth Focused",
      description:
        "Helping clients build financial stability and long-term growth.",
    },
    {
      icon: <FaUsers />,
      title: "Client-Centered",
      description:
        "Personalized solutions for loans, investments, and properties.",
    },
    {
      icon: <FaHandshake />,
      title: "Reliable Support",
      description:
        "End-to-end guidance throughout your financial journey.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid md:grid-cols-4 gap-8">
          
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#F8FAFC] border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition"
            >
              
              <div className="text-5xl text-[#C89B3C] mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold text-[#0B1F3A] mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustSection;