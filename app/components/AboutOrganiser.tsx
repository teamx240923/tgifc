"use client";

import Image from "next/image";

export default function AboutOrganiser() {
  return (
    <section id="about" className="py-20 bg-white text-center px-6 md:px-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#1C1C1C]">
        About the Organiser
      </h2>

      <div className="max-w-5xl mx-auto">
        <div className="bg-[#FFD23F] rounded-2xl p-8 md:p-12">
          <p className="text-lg md:text-xl text-[#1C1C1C] leading-relaxed mb-8">
            Founded by <span className="font-bold">Aditya Kedia</span>, <span className="font-bold">FitBuds</span> combines sports science and child psychology to make fitness engaging for kids. Backed by <span className="font-bold">IIM Lucknow EIC</span> and <span className="font-bold">Fit India Movement</span>, TGIFC 2026 continues to inspire families toward an active lifestyle.
          </p>

          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                <span className="text-2xl font-bold">IIM</span>
              </div>
              <span className="font-semibold text-[#1C1C1C]">IIM</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                <span className="text-2xl font-bold">IB</span>
              </div>
              <span className="font-semibold text-[#1C1C1C]">IB</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                <span className="text-xl font-bold">I.I.T</span>
              </div>
              <span className="font-semibold text-[#1C1C1C]">I.I.T INDIA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
