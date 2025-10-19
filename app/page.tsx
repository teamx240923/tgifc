"use client";

import HeroSection from "./components/HeroSection";
import HighlightsSection from "./components/HighlightsSection";
import EventZones from "./components/EventZones";
import AboutOrganiser from "./components/AboutOrganiser";
import GlimpseSection from "./components/GlimpseSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

import { useState, useEffect } from "react";

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
      <AboutOrganiser />
      <GlimpseSection />
      <Footer />
    </main>
  );
}
