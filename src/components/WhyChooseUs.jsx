import React from "react";

function WhyChooseUs() {
  const pillars = [
    {
      num: "01",
      title: "Fast Documentation Support",
      desc: "Streamlined processing and paperwork layout structure to eliminate processing delays.",
    },
    {
      num: "02",
      title: "Trusted Financial Guidance",
      desc: "Tailored consulting modeled around regulatory frameworks and clear wealth optimization.",
    },
    {
      num: "03",
      title: "End-to-End Loan Assistance",
      desc: "Complete processing coverage from initial documentation validation through final disbursement.",
    },
    {
      num: "04",
      title: "Investment Planning Experts",
      desc: "Data-backed asset mapping engineered for sustainable, compounding capital growth.",
    },
    {
      num: "05",
      title: "Transparent Process",
      desc: "Zero hidden criteria or unexpected broker fees—absolute clarity across every lifecycle phase.",
    },
    {
      num: "06",
      title: "Professional Property Consultation",
      desc: "Comprehensive assessment covering asset acquisition legalities and regional Khata frameworks.",
    },
  ];

  return (
    // Switched to a premium, subtle off-white/cream gradient background
    <section id="about" className="py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 text-[#0B1F3A] relative overflow-hidden">
      {/* Structural Backdrop Radial Accent - Soft Gold instead of Dark Blue */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C89B3C]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 lg:gap-20 items-center relative z-10">
        
        {/* Left Informational Anchor (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Tag token adjusted for light layout contrast */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-[#C89B3C]/10 border border-[#C89B3C]/20 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C89B3C]" />
            <span className="text-[#C89B3C] text-xs font-bold uppercase tracking-widest">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#0B1F3A] leading-[1.15]">
            Helping You Build Financial Confidence
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed font-normal">
            We assist individuals and corporate entities in securing credit parameters, 
            structuring reliable investment maps, and executing property operations 
            with professional-grade transparency.
          </p>
          
          {/* Quick Highlight Footer - Adjusted borders and text styles */}
          <div className="pt-6 border-t border-gray-200 flex items-center gap-6">
            <div>
              <p className="text-[#C89B3C] text-2xl font-black">100%</p>
              <p className="text-gray-500 text-xs mt-0.5">Compliant Advisory</p>
            </div>
            <div className="w-px h-8 bg-gray-200" />
            <div>
              <p className="text-[#C89B3C] text-2xl font-black">Zero</p>
              <p className="text-gray-500 text-xs mt-0.5">Hidden Fees</p>
            </div>
          </div>
        </div>

        {/* Right Pillars Grid Array (7 Cols) */}
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5 w-full">
          {pillars.map((item, index) => (
            <div
              key={index}
              // Changed card design to clean solid white card with subtle shadows and border lines
              className="group bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:border-[#C89B3C]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[160px]"
            >
              <div>
                {/* Numeric Indicator Tag */}
                <div className="text-xs font-bold text-[#C89B3C]/70 tracking-widest mb-3 group-hover:text-[#C89B3C] transition-colors">
                  // {item.num}
                </div>
                
                {/* Pillar Heading */}
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-2 tracking-tight group-hover:text-[#C89B3C] transition-colors">
                  {item.title}
                </h3>
              </div>
              
              {/* Contextual Value Subtext Description */}
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-normal pt-2 border-t border-gray-100 group-hover:text-gray-700 transition-colors">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;