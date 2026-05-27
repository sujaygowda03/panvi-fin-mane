import React from "react";

function Partners() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-14">
          
          <p className="text-[#C89B3C] uppercase tracking-wide font-semibold mb-4">
            Financial Network
          </p>

          <h2 className="text-4xl font-bold text-[#0B1F3A]">
            Trusted Financial & Property Ecosystem
          </h2>
        </div>

        {/* Logos */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 items-center">
          
          {["BANK", "NBFC", "INVEST", "REALTY", "FINANCE"].map(
            (item, index) => (
              <div
                key={index}
                className="bg-[#F8FAFC] border border-gray-100 rounded-2xl h-28 flex items-center justify-center text-[#0B1F3A] font-bold text-xl"
              >
                {item}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Partners;