"use client";

import Image from "next/image";
import { assetPath } from "../utils/assetPath";
import HeroCarousel from "./HeroCarousel";


export default function HeroSection() {
  const slides = [
    { src: assetPath("/kids_running_field.png"), alt: "Kids running at TGIFC", type: "image" as const },
    { src: assetPath("/tgr-logo.png"), alt: "TGIFC logo", contain: true, type: "image" as const },
    {src: assetPath("/Tabur_tickets.png"), alt: "Kids running at TGIFC", type: "image" as const },
    { src: assetPath("/TGIFC-teaser-video.mp4"), alt: "TGIFC teaser", contain: true, type: "video" as const, poster: assetPath("/kids_running_field.png") },
    {src: assetPath("/TGIFC_teaser.mp4"), alt: "TGIFC teaser", contain: true, type: "video" as const, poster: assetPath("/kids_running_field.png") },
  ];
  return (
    <section className="relative pt-32 md:pt-30 pb-16 px-6 md:px-16 bg-white overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-60">
            {/* Confetti effect */}
            {Array.from({ length: 80 }).map((_, i) => {
              const colors = [
                "#FFD23F", "#81B622", "#FF6B6B", "#4ECDC4",
                "#FF9F1C", "#6A4C93", "#1A936F", "#E63946",
                "#2EC4B6", "#FFB400",
              ];
              const color = colors[Math.floor(Math.random() * colors.length)];
              return (
                <div
                  key={i}
                  className="absolute rounded-sm"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    width: `${Math.random() * 3 + 2}px`,   // varied width (2–5px)
                    height: `${Math.random() * 10 + 4}px`, // varied height (4–14px)
                    backgroundColor: color,
                    transform: `rotate(${Math.random() * 360}deg)`,
                    opacity: Math.random() * 0.6 + 0.4,    // 0.4–1 opacity
                  }}
                />
              );
            })}
          </div>



      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-5xl font-extrabold leading-tight">
            <span className="text-[#D32F2F]">India's Biggest</span>
            <br />
            <span className="text-[#D32F2F]">Fitness Carnival</span>
            <br />
            <span className="text-[#1C1C1C]">for Kids!</span>
          </h1>

          <p className="text-lg md:text-xl text-[#1C1C1C] max-w-xl leading-relaxed">
            A full day of fun races, games, food, music & family entertainment - all celebrating fitness, togetherness, and joy.
          </p>

          {/* Event Dates & Timings */}
          <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl">
            {/* Gurgaon */}
            <div className="rounded-xl border-2 border-[#81B622] bg-white p-4 text-left shadow-sm">
              <div className="flex items-center gap-2 text-[#1C1C1C] font-semibold">
                <svg className="w-5 h-5 text-[#81B622]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 2a1 1 0 0 0-1 1v1H5a3 3 0 0 0-3 3v1h20V7a3 3 0 0 0-3-3h-1V3a1 1 0 1 0-2 0v1H8V3a1 1 0 0 0-1-1zM22 10H2v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-9z"/>
                </svg>
                Gurgaon — 01 Feb 2026
              </div>
              <div className="mt-2 flex items-start gap-2 text-[#1C1C1C]">
                <svg className="w-5 h-5 text-[#81B622] mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/>
                </svg>
                <p className="leading-snug">
                  Tau Devilal Stadium (near Medanta Hospital), Gurugram
                </p>
              </div>
              <div className="mt-2 flex items-center gap-2 text-[#1C1C1C]">
                <svg className="w-5 h-5 text-[#81B622]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1a11 11 0 1 0 11 11A11.012 11.012 0 0 0 12 1Zm1 12h-4V7h2v4h2Z"/>
                </svg>
                9:00 AM – 7:00 PM
              </div>

              {/* Book link */}
              <a
                href="https://www.taabur.com/in/the-great-indian-fitness-carnival-gurugram"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-[#81B622] px-5 py-2.5 font-semibold text-white transition-colors hover:bg-[#6AA312]"
                aria-label="Book tickets for Gurgaon"
              >
                Book Tickets — Gurgaon
              </a>
            </div>

            {/* Delhi */}
            <div className="rounded-xl border-2 border-[#FFD23F] bg-white p-4 text-left shadow-sm">
              <div className="flex items-center gap-2 text-[#1C1C1C] font-semibold">
                <svg className="w-5 h-5 text-[#FFD23F]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 2a1 1 0 0 0-1 1v1H5a3 3 0 0 0-3 3v1h20V7a3 3 0 0 0-3-3h-1V3a1 1 0 1 0-2 0v1H8V3a1 1 0 0 0-1-1zM22 10H2v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-9z"/>
                </svg>
                New Delhi — 08 Feb 2026
              </div>
              <div className="mt-2 flex items-start gap-2 text-[#1C1C1C]">
                <svg className="w-5 h-5 text-[#FFD23F] mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/>
                </svg>
                <p className="leading-snug">
                  Jawaharlal Nehru (JLN) Stadium, New Delhi
                </p>
              </div>
              <div className="mt-2 flex items-center gap-2 text-[#1C1C1C]">
                <svg className="w-5 h-5 text-[#FFD23F]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1a11 11 0 1 0 11 11A11.012 11.012 0 0 0 12 1Zm1 12h-4V7h2v4h2Z"/>
                </svg>
                9:00 AM – 7:00 PM
              </div>

              {/* Book link */}
              <a
                href="https://www.taabur.com/in/the-great-indian-fitness-carnival-delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-[#FFD23F] px-5 py-2.5 font-semibold text-[#1C1C1C] transition-colors hover:bg-[#FFC933]"
                aria-label="Book tickets for Delhi"
              >
                Book Tickets — Delhi
              </a>
            </div>
          </div>
        </div>

        {/* Right Image
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl ">
            <Image
              src={assetPath("/kids_running_field.png")}
              alt="Kids running at TGIFC"
              width={600}
              height={400}
              className="object-cover w-full h-auto transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div> */}
        {/* Right: Carousel */}
        <HeroCarousel slides={slides} />
      </div>
    </section>
  );
}
