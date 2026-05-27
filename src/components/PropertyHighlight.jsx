import React from "react";

function PropertyHighlight() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        
        {/* Left */}
        <div>
          
          <p className="text-[#C89B3C] font-semibold uppercase tracking-wide mb-4">
            Property Advisory
          </p>

          <h2 className="text-5xl font-bold text-[#0B1F3A] leading-tight mb-8">
            Buy, Sell & Invest in Properties with Confidence
          </h2>

          <p className="text-gray-600 text-lg leading-8 mb-10">
            We assist clients in identifying valuable property opportunities,
            resale transactions, investment properties, and commercial real estate consultation.
          </p>

          <button className="bg-[#0B1F3A] hover:bg-[#07111F] text-white px-8 py-4 rounded-full font-semibold transition">
            Explore Property Services
          </button>
        </div>

        {/* Right */}
        <div className="relative">
          
          <div className="bg-gradient-to-br from-[#0B1F3A] to-[#07111F] rounded-[40px] p-16 text-center shadow-2xl">
            
            <h3 className="text-6xl font-bold text-[#C89B3C] mb-6">
              ₹10Cr+
            </h3>

            <p className="text-white text-2xl font-semibold mb-4">
              High Value Financial Assistance
            </p>

            <p className="text-gray-300 leading-8">
              Funding support based on valuation,
              income profile, and financial eligibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PropertyHighlight;