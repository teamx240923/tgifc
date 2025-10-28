"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutOrganiser() {
  return (
    <section id="about" className="py-20 bg-white text-center px-6 md:px-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#1C1C1C]">
        About the Organiser
      </h2>

      <div className="max-w-5xl mx-auto">
        <div className="bg-white border-4 border-[#81B622] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-10">
          
          {/* ✅ FitBuds Logo on Left (Smaller + Linked) */}
          <Link
            href="https://fitbuds.fit"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-32 h-32 flex-shrink-0 mx-auto md:mx-0 transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/fitbuds logo.png"
              alt="FitBuds Logo"
              fill
              className="object-contain"
            />
          </Link>

          {/* ✅ Text + Partner Logos */}
          <div className="flex-1 text-left">
            <p className="text-lg md:text-xl text-[#1C1C1C] leading-relaxed mb-8">
              Founded by{" "}
              <span className="font-bold">Aditya Kedia</span>,{" "}
              <Link
                href="https://fitbuds.fit"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text hover:text-[#1C1C1C]"
              >
                FitBuds
              </Link>{" "}
              combines sports science and child psychology to make fitness
              engaging for kids. Backed by{" "}
              <span className="font-bold">
                IIM Lucknow EIC, I-Venture @ISB Hyderabad
              </span>{" "}
              and{" "}
              <span className="font-bold">Fit India Movement</span>, TGIFC 2026
              continues to inspire families toward an active lifestyle.
            </p>

            {/* ✅ Partner Logos */}
            <div className="flex justify-center md:justify-start items-center gap-8 flex-wrap">
              <a
                href="https://www.iimleic.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-48 h-16 md:w-56 md:h-20"
              >
                <Image
                  src="/iiml-logo.png"
                  alt="IIM Lucknow EIC Logo"
                  fill
                  className="object-contain transition-transform duration-300 hover:scale-105"
                />
              </a>

              <a
                href="https://i-venture.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-56 h-14 md:w-64 md:h-16"
              >
                <Image
                  src="/isb-logo.png"
                  alt="I-Venture @ISB Hyderabad Logo"
                  fill
                  className="object-contain transition-transform duration-300 hover:scale-105"
                />
              </a>

              <a
                href="https://fitindia.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-24 h-28 md:w-28 md:h-32"
              >
                <Image
                  src="/fit-india-logo.png"
                  alt="Fit India Movement Logo"
                  fill
                  className="object-contain transition-transform duration-300 hover:scale-105"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
