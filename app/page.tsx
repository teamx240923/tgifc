"use client";

import HeroSection from "./components/HeroSection";
import FAQSection from "./components/FAQSection";
import HighlightsSection from "./components/HighlightsSection";
import EventZones from "./components/EventZones";
import AboutOrganiser from "./components/AboutOrganiser";
import GlimpseSection from "./components/GlimpseSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

import { useState, useEffect } from "react";
import JoinTheMovementSection from "./components/JoinTheMovementSection";
import SponsorsSection from "./components/SponsorsSection";


export default function HomePage() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection />
      <HighlightsSection />
      <EventZones />
      <div className="-mt-16">
        <AboutOrganiser />
      </div>
      <div className="-mt-16">
        <JoinTheMovementSection />
      </div>
      {/* <GlimpseSection /> */}
      <div className="-mt-16">
        <SponsorsSection />
      </div>
      <div className="-mt-16">
        <FAQSection />
      </div>
      
      <Footer />
    </main>
  );
}
