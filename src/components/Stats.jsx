import { number } from "framer-motion";
import React from "react";

function Stats() {
  const stats = [
    {
      number: "500+",
      title: "Happy Clients",
    },
    {
      number: "₹250Cr+",
      title: "Loans Assisted",
    },
    {
      number: "50+",
      title: "Property Deals",
    },
    {
      number: "14+",
      title: "Years of Experience",
    }
  ];

  return (
    <section className="py-20 bg-yellow-500">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
        
        {stats.map((item, index) => (
          <div key={index}>
            <h2 className="text-5xl font-bold text-blue-950 mb-3">
              {item.number}
            </h2>

            <p className="text-lg font-medium text-blue-950">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;