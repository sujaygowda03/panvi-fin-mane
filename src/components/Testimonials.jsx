import React from "react";
import { FaStar } from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Business Owner",
      review:
        "Panvi Fin Mane helped us secure business funding smoothly with professional guidance throughout the process.",
    },
    {
      name: "Priya Nair",
      role: "Investor",
      review:
        "Their investment consultation and SIP planning gave me clarity and confidence for long-term wealth growth.",
    },
    {
      name: "Arjun Kumar",
      role: "Property Investor",
      review:
        "Very professional property consultation service with transparent communication and reliable support.",
    },
  ];

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-20">
          
          <p className="text-[#C89B3C] uppercase tracking-wide font-semibold mb-4">
            Testimonials
          </p>

          <h2 className="text-5xl font-bold text-[#0B1F3A] mb-6">
            Trusted by Clients
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-8">
            Our clients trust us for reliable financial guidance,
            loan advisory, investment planning, and property consultation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-[#F8FAFC] border border-gray-100 rounded-[30px] p-10 hover:shadow-2xl transition"
            >
              
              {/* Stars */}
              <div className="flex gap-2 text-[#C89B3C] mb-6">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* Review */}
              <p className="text-gray-600 leading-8 text-lg mb-10">
                "{item.review}"
              </p>

              {/* User */}
              <div>
                <h3 className="text-2xl font-semibold text-[#0B1F3A]">
                  {item.name}
                </h3>

                <p className="text-gray-500 mt-2">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;