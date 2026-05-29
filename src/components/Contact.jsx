import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          alert("Inquiry Submitted Successfully!");
        },
        () => {
          alert("Something went wrong!");
        }
      );

    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-[#07111F] rounded-[40px] overflow-hidden grid md:grid-cols-2">

          {/* Left */}
          <div className="p-14">

            <p className="text-[#C89B3C] uppercase tracking-wide font-semibold mb-5">
              Contact Us
            </p>

            <h2 className="text-5xl font-bold text-white leading-tight mb-8">
              Let’s Discuss Your Financial Goals
            </h2>

            <p className="text-gray-400 text-lg leading-8 mb-10">
              Get professional consultation for loans,
              investments, and property advisory services.
            </p>

            <div className="space-y-5 text-gray-300">

              <a
                href="tel:+917892805183"
                className="hover:text-[#C89B3C] transition"
              >
                📞 +91 7892805183
              </a>
<p>
              <a
                href="mailto:support@panvifinmane.com"
                className="hover:text-[#C89B3C] transition"
              >
                📧support@panvifinmane.com
              </a></p>

              <p>📍 10-1, 1st Main Rd, 4th Block, Sharada Colony, West of Chord Road 3rd Stage opposite to karnataka bank, Basaveshwar Nagar, Bengaluru, Karnataka 560079</p>
            </div>
          </div>

          {/* Right */}
          <div className="bg-white p-14">

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6"
            >

              <input
                type="text"
                name="from_name"
                placeholder="Full Name"
                required
                className="w-full border border-gray-200 rounded-2xl p-5 outline-none focus:border-[#C89B3C]"
              />

              <input
                type="email"
                name="from_email"
                placeholder="Email Address"
                required
                className="w-full border border-gray-200 rounded-2xl p-5 outline-none focus:border-[#C89B3C]"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full border border-gray-200 rounded-2xl p-5 outline-none focus:border-[#C89B3C]"
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Your Requirement"
                required
                className="w-full border border-gray-200 rounded-2xl p-5 outline-none focus:border-[#C89B3C]"
              ></textarea>

              <button className="w-full bg-[#C89B3C] hover:bg-yellow-600 text-black py-5 rounded-2xl font-semibold transition">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;