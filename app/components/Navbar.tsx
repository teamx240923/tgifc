"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm py-4 px-6 md:px-16 flex justify-between items-center">
      <div className="flex items-center">
        <Image
          src="/tgifc-logo.png"
          alt="TGIFC Logo"
          width={80}
          height={80}
          className="object-contain"
        />
      </div>
      <div className="hidden md:flex gap-8 items-center text-base font-medium text-[#1C1C1C]">
        <a href="#about" className="hover:text-[#81B622] transition-colors">About</a>
        <a href="#zones" className="hover:text-[#81B622] transition-colors">Event Zones</a>
        <a href="#schedule" className="hover:text-[#81B622] transition-colors">Schedule</a>
        <a href="#gallery" className="hover:text-[#81B622] transition-colors">Gallery</a>
        <a href="#sponsors" className="hover:text-[#81B622] transition-colors">Sponsors</a>
        <button className="bg-[#81B622] hover:bg-[#6AA312] text-white px-6 py-2 rounded-lg font-semibold transition-colors">
          Register Now
        </button>
        <a href="#volunteer" className="hover:text-[#81B622] transition-colors">Volunteer</a>
      </div>
    </nav>
  );
}
