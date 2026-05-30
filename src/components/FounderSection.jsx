import React from "react";

function FounderSection() {
    return (
        // Switched to the signature midnight blue canvas to isolate it from the light sections
        <section id="founder" className="py-24 bg-[#07111F] relative overflow-hidden">
            
            {/* Subtle premium background glow accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C89B3C]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-20 items-start relative z-10">
                
                {/* Left Column: Premium Credential Spotlight (5 Cols) */}
                <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
                    {/* Glassmorphism executive profile card */}
                    <div className="p-8 md:p-10 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl text-white shadow-2xl relative overflow-hidden group">
                        
                        {/* Interactive hover glow */}
                        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#C89B3C]/10 rounded-full blur-2xl transition-all duration-500 group-hover:scale-150" />
                        
                        <p className="text-xs font-bold tracking-widest text-[#C89B3C] uppercase mb-6 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C89B3C]"></span>
                            Leadership Profile
                        </p>
                        
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2 text-white">
                            Vijay Kumar M
                        </h2>
                        
                        <p className="text-[#C89B3C] font-semibold text-md tracking-wide mb-8">
                            Mutual Funds Advisor, Karnataka Bank
                        </p>
                        
                        <div className="space-y-4 pt-6 border-t border-white/10 text-sm text-gray-300">
                            <div className="flex items-start gap-3">
                                <span className="text-[#C89B3C] mt-0.5">✓</span>
                                <p>Secured over <strong className="text-white">₹250 Crores</strong> in strategic asset funding.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-[#C89B3C] mt-0.5">✓</span>
                                <p>Empowering <strong className="text-white">500+ investors</strong> with structured portfolio management.</p>
                            </div>
                        </div>
                    </div>
                    
                    <p className="text-xs text-gray-500 px-4 text-center lg:text-left">
                        * Certified financial advisory adhering strictly to regulatory transparency and client-first wealth building.
                    </p>
                </div>

                {/* Right Column: Narrative & Metrics (7 Cols) */}
                <div className="lg:col-span-7 lg:pt-4">
                    <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 text-[#C89B3C] text-xs font-bold tracking-wider uppercase rounded-full mb-4">
                        Legacy & Vision
                    </span>
                    
                    <h3 className="text-3xl md:text-4xl font-black text-white leading-tight mb-6">
                        15+ Years of Trusted Financial Advisory Excellence.
                    </h3>
                    
                    <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-normal">
                        <p>
                            Panvi Fin Mane has been committed to helping individuals, 
                            investors, and businesses achieve financial growth through 
                            professional loan consultation, investment planning, 
                            and property advisory services.
                        </p>
                        <p className="border-l-4 border-[#C89B3C] bg-white/[0.02] py-3 pr-4 pl-4 italic text-gray-400 text-base md:text-lg rounded-r-xl">
                            "True wealth management isn’t just about numbers; it's about engineering financial peace of mind through absolute clarity and strategic execution."
                        </p>
                        <p>
                            With years of industry expertise and trusted client relationships, 
                            we focus on transparency, strategic guidance, and long-term financial success.
                        </p>
                    </div>

                    {/* Dark Premium Metric Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-12 mt-12 border-t border-white/5">
                        <div className="p-5 bg-white/[0.02] rounded-2xl border border-white/5 transition-all duration-300 hover:border-[#C89B3C]/30 hover:-translate-y-1">
                            <p className="text-3xl md:text-4xl font-black text-[#C89B3C]">15+</p>
                            <p className="text-xs font-bold uppercase tracking-wider text-white mt-2">Years Experience</p>
                            <p className="text-gray-500 text-xs mt-1">Market Expertise</p>
                        </div>
                        
                        <div className="p-5 bg-white/[0.02] rounded-2xl border border-white/5 transition-all duration-300 hover:border-[#C89B3C]/30 hover:-translate-y-1">
                            <p className="text-3xl md:text-4xl font-black text-[#C89B3C]">500+</p>
                            <p className="text-xs font-bold uppercase tracking-wider text-white mt-2">Happy Clients</p>
                            <p className="text-gray-500 text-xs mt-1">Retained Portfolios</p>
                        </div>
                        
                        <div className="p-5 bg-white/[0.02] rounded-2xl border border-white/5 transition-all duration-300 hover:border-[#C89B3C]/30 hover:-translate-y-1">
                            <p className="text-3xl md:text-4xl font-black text-[#C89B3C]">₹250Cr+</p>
                            <p className="text-xs font-bold uppercase tracking-wider text-white mt-2">Loan Assistance</p>
                            <p className="text-gray-500 text-xs mt-1">Disbursed Volume</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default FounderSection;