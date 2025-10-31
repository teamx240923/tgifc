"use client";

import Image from "next/image";
import { assetPath } from "../utils/assetPath";
import HeroCarousel from "./HeroCarousel";


export default function HeroSection() {
  const slides = [
    { src: assetPath("/kids_running_field.png"), alt: "Kids running at TGIFC" },
    { src: assetPath("/tgr-logo.png"), alt: "TGIFC logo", contain: true },
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

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            {/* <button className="bg-[#81B622] hover:bg-[#6AA312] text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-md transition-all hover:scale-105">
              Register Now
            </button> */}
            <a
              href = "https://forms.gle/b2ygGepzqKt9EDi27"
              target = "_blank"
              rel="noopener noreferrer"
              className="bg-[#81B622] hover:bg-[#6AA312] text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-md transition-all hover:scale-105"
            > Register Now
            </a> 
            <a
              href = "https://forms.gle/KUXWK7RZ8NVnYapLA"
              target = "_blank"
              rel="noopener noreferrer"
              className="bg-[#FFD23F] hover:bg-[#FFC933] text-[#1C1C1C] text-lg font-semibold px-8 py-4 rounded-lg shadow-md transition-all hover:scale-105"
            >Sponsor TGIFC
            </a>
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
