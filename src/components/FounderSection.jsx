import React from "react";
import logo from "../assets/founder.png";

function FounderSection() {
    return (
        <section id="founder" className="py-28 bg-white">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

                {/* Left */}
                <div className="relative">

                    <div className="bg-gradient-to-br from-[#0B1F3A] to-[#07111F] rounded-[40px] h-[500px] p-6 flex items-center justify-center text-white text-3xl font-semibold">
                        <img
                            src={logo}
                            alt="Founder"
                            className="max-h-full max-w-full object-contain shadow-lg"
                        />
                    </div>
                </div>

                {/* Right */}
                <div>

                    <p className="text-[#C89B3C] uppercase tracking-wide font-semibold mb-4">
                        Founder & Leadership
                    </p>
                   <h1 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] leading-tight mb-8">
                        Vijay Kumar M
                    </h1>


                    <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] leading-tight mb-8">
                        15+ Years of Trusted Financial Advisory Excellence
                    </h2>

                    <p className="text-gray-600 text-lg leading-8 mb-8">
                        Panvi Fin Mane has been committed to helping individuals,
                        investors, and businesses achieve financial growth through
                        professional loan consultation, investment planning,
                        and property advisory services.
                    </p>

                    <p className="text-gray-600 text-lg leading-8 mb-10">
                        With years of industry expertise and trusted client relationships,
                        we focus on transparency, strategic guidance,
                        and long-term financial success.
                    </p>

                    <div className="flex flex-wrap gap-8">

                        <div>
                            <h3 className="text-4xl font-bold text-[#C89B3C]">
                                14+
                            </h3>

                            <p className="text-gray-600 mt-2">
                                Years Experience
                            </p>
                        </div>

                        <div>
                            <h3 className="text-4xl font-bold text-[#C89B3C]">
                                500+
                            </h3>

                            <p className="text-gray-600 mt-2">
                                Happy Clients
                            </p>
                        </div>

                        <div>
                            <h3 className="text-4xl font-bold text-[#C89B3C]">
                                ₹250Cr+
                            </h3>

                            <p className="text-gray-600 mt-2">
                                Loan Assistance
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FounderSection;