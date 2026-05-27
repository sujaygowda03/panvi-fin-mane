import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import LoanEligibility from "../components/LoanEligibility";
import Stats from "../components/Stats";
import EmiCalculator from "../components/EmiCalculator";
import Contact from "../components/Contact";
import Faq from "../components/Faq";
import MapSection from "../components/MapSection";
import Footer from "../components/Footer";
import FloatingWhatsapp from "../components/FloatingWhatsapp";
import ScrollProgress from "../components/ScrollProgress";
import TrustSection from "../components/TrustSection";
import PropertyHighlight from "../components/PropertyHighlight";
import Testimonials from "../components/Testimonials";
import ScrollToTop from "../components/ScrollToTop";
import FounderSection from "../components/FounderSection";

function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <TrustSection />
      <Services />
      <WhyChooseUs />
      <FounderSection />
      <PropertyHighlight />
      <Stats />
      <Testimonials />
      <LoanEligibility />
      <EmiCalculator />
      <Faq />
      <Contact />
      <MapSection />
      <Footer />
      <FloatingWhatsapp />
      <ScrollToTop />
    </>
  );
}

export default Home;