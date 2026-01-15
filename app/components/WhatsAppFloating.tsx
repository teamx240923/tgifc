"use client";

import Link from "next/link";

type Props = {
  phone?: string;          // in international format, e.g. "919876543210"
  message?: string;        // prefilled message
  bottomClass?: string;    // e.g. "bottom-4 md:bottom-6"
  rightClass?: string;     // e.g. "right-4 md:right-6"
  showLabelOnMobile?: boolean; // set true to show label even on xs screens
};

export default function WhatsAppFloating({
  phone = "919773700541",
  message = "Hi! Can I get more info on this.",
  bottomClass = "bottom-4 md:bottom-6",
  rightClass = "right-4 md:right-6",
  showLabelOnMobile = false,
}: Props) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div className={`fixed ${bottomClass} ${rightClass} z-50`}>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Talk to me on WhatsApp"
        className="group flex items-center gap-2"
      >
        {/* Label on the LEFT */}
        <span
          className={[
            "px-3 py-2 rounded-lg bg-[#25D366] text-white font-semibold shadow-md",
            "transition-all group-hover:-translate-x-0.5 group-hover:bg-[#1ebe57]",
            "whitespace-nowrap",
            showLabelOnMobile ? "" : "hidden sm:inline-block", // hide on xs if false
          ].join(" ")}
        >
          Talk to me on WhatsApp
        </span>

        {/* Round icon on the RIGHT */}
        <span className="inline-flex w-14 h-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl transition group-hover:bg-[#1ebe57]">
            <svg
                className="w-7 h-7 block text-white"              // block removes baseline weirdness
                viewBox="0 0 24 24"                     // clean, centered viewBox
                preserveAspectRatio="xMidYMid meet"
                fill="currentColor"
                aria-hidden="true"
            >
                {/* Simple Icons – WhatsApp glyph (centered) */}
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.1-.472-.149-.672.15-.197.297-.768.966-.94 1.166-.173.199-.347.224-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.173.199-.298.298-.497.1-.199.05-.373-.025-.522-.075-.149-.672-1.614-.922-2.204-.242-.58-.487-.502-.672-.512l-.573-.01c-.199 0-.522.075-.796.373-.273.298-1.046 1.022-1.046 2.493 0 1.47 1.071 2.891 1.22 3.09.149.199 2.112 3.223 5.113 4.518.715.309 1.27.494 1.704.632.716.228 1.368.196 1.884.119.575-.086 1.758-.718 2.007-1.412.248-.695.248-1.29.173-1.412-.074-.123-.273-.198-.571-.347zM12.042 2c-5.51 0-9.98 4.47-9.98 9.98 0 1.76.46 3.39 1.26 4.82L2 22l5.34-1.39c1.38.75 2.96 1.17 4.7 1.17 5.51 0 9.98-4.47 9.98-9.98S17.552 2 12.042 2zm0 18.1c-1.57 0-3.03-.42-4.28-1.15l-.3-.18-3.16.82.84-3.08-.2-.32c-.77-1.27-1.21-2.76-1.21-4.27 0-4.6 3.74-8.34 8.34-8.34s8.34 3.74 8.34 8.34-3.74 8.34-8.34 8.34z"/>
            </svg>
        </span>
      </Link>
    </div>
  );
}