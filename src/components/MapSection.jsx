import React from "react";

function MapSection() {
  return (
    <section id="location" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">

          <p className="text-[#C89B3C] font-semibold mb-3 uppercase tracking-wide">
            OUR LOCATION
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A]">
            Visit Our Office
          </h2>

          <a
            href="https://maps.app.goo.gl/uhiUg4D8fNsN2Lca9"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#C89B3C] transition"
          >
            📍 Basaveshwar Nagar, Bengaluru
          </a>
        </div>

        {/* Map */}
        <div className="rounded-[35px] overflow-hidden shadow-2xl border border-gray-200">

          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=12.9881739,77.5357738&z=15&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="mt-8 text-center">
          <a
            href="https://maps.app.goo.gl/uhiUg4D8fNsN2Lca9"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-[#0B1F3A] hover:bg-[#07111F] text-white px-8 py-4 rounded-full font-semibold transition"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}

export default MapSection;