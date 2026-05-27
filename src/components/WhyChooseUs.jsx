import React from "react";

function WhyChooseUs() {
  const points = [
    "Fast Documentation Support",
    "Trusted Financial Guidance",
    "End-to-End Loan Assistance",
    "Investment Planning Experts",
    "Transparent Process",
    "Professional Property Consultation",
  ];

  return (
    <section id="about" className="py-24 bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left */}
        <div>
          <p className="text-yellow-400 font-semibold mb-3">
            WHY CHOOSE US
          </p>

          <h2 className="text-5xl font-bold leading-tight mb-6">
            Helping You Build Financial Confidence
          </h2>

          <p className="text-gray-300 leading-8">
            We assist individuals and businesses in securing loans,
            planning investments, and handling property transactions
            with professional guidance and transparency.
          </p>
        </div>

        {/* Right */}
        <div className="grid sm:grid-cols-2 gap-6">
          {points.map((point, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg border border-white/10 p-6 rounded-2xl"
            >
              <h3 className="text-lg font-semibold">
                {point}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;