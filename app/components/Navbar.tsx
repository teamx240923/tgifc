"use client";

import Image from "next/image";
import Link from "next/link";
import { assetPath } from "../utils/assetPath";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm py-4 px-6 md:px-16 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="flex-shrink-0">
        <Link href="/" aria-label="Go to homepage">
          <Image
            src={assetPath("/tgifc-logo.svg")}
            alt="TGIFC Logo"
            width={80}
            height={80}
            className="object-contain cursor-pointer"
          />
        </Link>
      </div>

      {/* Center: Menu */}
      <div className="hidden md:flex gap-8 items-center text-base font-medium text-[#1C1C1C] absolute left-1/2 transform -translate-x-1/2">
        <a href="/#about" className="hover:text-[#81B622] transition-colors">About</a>
        <a href="/#zones" className="hover:text-[#81B622] transition-colors">Event Zones</a>
        <a href="/schedule" className="hover:text-[#81B622] transition-colors">Schedule</a>
        {/* <a href="/#glimpses" className="hover:text-[#81B622] transition-colors">Gallery</a> */}
        <a href="/#sponsors" className="hover:text-[#81B622] transition-colors">Sponsors</a>
      </div>

      {/* Right: CTA Buttons */}
      <div className="hidden md:flex gap-4 items-center">
        <a
          href="https://forms.gle/7hsjxp4wu1uKz3Ch9"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#81B622] hover:bg-[#6AA312] text-white px-6 py-2 rounded-lg font-semibold transition-colors"
        > Register Now
        </a>

        {/* <button className="bg-[#81B622] hover:bg-[#6AA312] text-white px-6 py-2 rounded-lg font-semibold transition-colors">
          Register Now
        </button> */}
        <a 
          href="https://forms.gle/VQoaNzFa6vn26Mt87" 
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#81B622] font-medium transition-colors">
          Volunteer
        </a>
      </div>
    </nav>
  );
}
