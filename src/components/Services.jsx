import React from "react";
import {
  FaBuilding,
  FaChartPie,
  FaHandHoldingUsd,
} from "react-icons/fa";

function Services() {
const services = [
  {
    icon: <FaHandHoldingUsd />,
    title: "Loan Advisory",
    description:
      "Housing loans, site purchase loans, construction loans, renovation loans, building purchase loans, and funding support within any Khata category.",
  },
  {
    icon: <FaBuilding />,
    title: "Property Consultation",
    description:
      "Property buying & selling, sales agent support, registration services, tax payment assistance, e-Khata, EC services, fresh Khata, and Khata transfer support.",
  },
  {
    icon: <FaChartPie />,
    title: "Mutual Fund Planning",
    description:
      "SIP, SWP, STP, balanced fund planning, monthly payout strategies, and long-term wealth growth consultation.",
  },
];

  return (
    <section
      id="services"
      className="py-28 bg-[#07111F]"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-20">
          
          <p className="text-[#C89B3C] font-semibold uppercase tracking-wide mb-4">
            Our Services
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Financial Solutions Designed for Growth
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto leading-8 text-lg">
            Panvi Fin Mane provides professional advisory services
            in loans, investments, and property consultation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-[30px] p-10 hover:border-[#C89B3C]/40 transition"
            >
              
              <div className="w-20 h-20 rounded-2xl bg-[#C89B3C]/10 flex items-center justify-center text-[#C89B3C] text-4xl mb-8">
                {service.icon}
              </div>

              <h3 className="text-3xl font-semibold text-white mb-6">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-8 text-lg">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;