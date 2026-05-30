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
      tagline: "Funding solutions across any property category.",
      features: [
        "Housing & Site Purchase Loans",
        "Construction & Renovation Funding",
        "Building Purchase Loans",
        "Support for any Khata Category"
      ],
    },
    {
      icon: <FaBuilding />,
      title: "Property Consultation",
      tagline: "End-to-end legal and administrative support.",
      features: [
        "Property Buying & Selling Assistance",
        "Registration & Tax Payment Services",
        "e-Khata, Fresh Khata & Khata Transfers",
        "Encumbrance Certificate (EC) Services"
      ],
    },
    {
      icon: <FaChartPie />,
      title: "Mutual Fund Planning",
      tagline: "Tailored wealth creation and income strategies.",
      features: [
        "SIP, SWP, & STP Portfolio Mapping",
        "Balanced Fund Allocation Strategies",
        "Monthly Payout Financial Structures",
        "Long-Term Capital Appreciation"
      ],
    },
  ];

  return (
    <section id="services" className="py-28 bg-[#07111F] relative overflow-hidden">
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C89B3C]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Heading */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 bg-[#C89B3C]/10 text-[#C89B3C] font-bold uppercase tracking-widest text-xs rounded-full mb-4">
            Our Expertise
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
            Financial Solutions Designed for Growth
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
            Panvi Fin Mane provides specialized, executive-grade advisory structures 
            across credit mechanisms, strategic investments, and real estate assets.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-md border border-white/10 rounded-[2rem] p-8 lg:p-10 hover:border-[#C89B3C]/40 hover:shadow-2xl hover:shadow-[#C89B3C]/5 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                {/* Icon Box */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C89B3C]/20 to-[#C89B3C]/5 border border-[#C89B3C]/20 flex items-center justify-center text-[#C89B3C] text-3xl mb-8 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Header Title */}
                <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-2 tracking-tight group-hover:text-[#C89B3C] transition-colors">
                  {service.title}
                </h3>
                
                {/* Structural Short Tagline */}
                <p className="text-gray-400 text-sm font-medium mb-6">
                  {service.tagline}
                </p>

                {/* Dynamic Feature List Breakdown */}
                <ul className="space-y-3.5 border-t border-white/5 pt-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm lg:text-base leading-snug">
                      <span className="text-[#C89B3C] text-xs mt-1 shrink-0">✦</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative Card Footer Subtle Anchor */}
              <div className="pt-8 mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C89B3C]/60 group-hover:text-[#C89B3C] transition-colors cursor-pointer">
                Learn More Scope <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;