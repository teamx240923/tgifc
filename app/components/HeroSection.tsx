"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 md:pt-30 pb-16 px-6 md:px-16 bg-white overflow-hidden">
      {/* Confetti decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {/* Scattered colored shapes for confetti effect */}
        <div className="absolute top-20 left-10 w-3 h-8 bg-[#FFD23F] rotate-45"></div>
        <div className="absolute top-32 left-32 w-3 h-8 bg-[#81B622] rotate-12"></div>
        <div className="absolute top-16 right-20 w-3 h-8 bg-[#FF6B6B] -rotate-45"></div>
        <div className="absolute top-40 right-40 w-3 h-8 bg-[#4ECDC4] rotate-90"></div>
        <div className="absolute bottom-40 left-20 w-3 h-8 bg-[#FFD23F] -rotate-12"></div>
        <div className="absolute bottom-32 right-32 w-3 h-8 bg-[#81B622] rotate-45"></div>
      </div>

      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            <span className="text-[#D32F2F]">India's Biggest</span>
            <br />
            <span className="text-[#D32F2F]">Fitness Carnival</span>
            <br />
            <span className="text-[#1C1C1C]">for Kids!</span>
          </h1>

          <p className="text-lg md:text-xl text-[#1C1C1C] max-w-xl leading-relaxed">
            A full day of fun races, games, food, music & family entertainment -- all celebrating fitness, togetherness, and joy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-[#81B622] hover:bg-[#6AA312] text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-md transition-all hover:scale-105">
              Register Now
            </button>
            <button className="bg-[#FFD23F] hover:bg-[#FFC933] text-[#1C1C1C] text-lg font-semibold px-8 py-4 rounded-lg shadow-md transition-all hover:scale-105">
              Sponsor TGIFC
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/kids_running_field.png"
              alt="Kids running at TGIFC"
              width={600}
              height={400}
              className="object-cover w-full h-auto"
            />
          </div>
          {/* More confetti around image */}
          <div className="absolute -top-4 -right-4 w-4 h-10 bg-[#FF6B6B] rotate-45"></div>
          <div className="absolute -bottom-4 -left-4 w-4 h-10 bg-[#4ECDC4] -rotate-45"></div>
        </div>
      </div>
    </section>
  );
}
