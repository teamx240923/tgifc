"use client";
import { useState } from "react";

const faqs = [
  {
    q: "What is The Great Indian Fitness Carnival (TGIFC)?",
    a: "TGIFC is India’s biggest kids’ fitness carnival — a full-day celebration of sports, wellness, and fun, bringing together families, schools, and communities to make fitness an exciting part of everyday life.",
  },
  {
    q: "Who can participate in TGIFC?",
    a: "Kids aged 4–16 years can participate in various games, fitness challenges and workshops. Kids aged 6–16 years can take part in The Grind Race. Parents and families are welcome to join the fun activities and workshops too!",
  },
  {
    q: "What is The Grind Race (TGR)?",
    a: "The Grind Race is a high-energy obstacle challenge for kids that tests strength, stamina, and agility — helping them experience fitness as a sport and earn recognition for their effort.",
  },
  {
    q: "When and where will TGIFC 2026 take place?",
    a: "TGIFC will be held on 1st February in Gurgaon and 8th February in Delhi at premium sports venues, welcoming over 10,000 participants in each city.",
  },
  {
    q: "How can I register my child?",
    a: "Registrations open online soon! You’ll be able to register through our website or partner platforms.",
  },
  {
    q: "Do parents need separate tickets?",
    a: "For The Grind Race, one parent or guardian can accompany each participant for free. For TGIFC entry, additional people can book tickets separately.",
  },
  {
    q: "What kind of activities will be there apart from races?",
    a: "The carnival includes fun games, stage shows, experience zones for multiple sports, wellness workshops, food stalls, and live music — ensuring entertainment and learning for the entire family.",
  },
  {
    q: "Is TGIFC a competitive or recreational event?",
    a: "It’s a mix of both — competitive races like The Grind Race and recreational zones that focus on fun, teamwork, and learning about health and wellness.",
  },
  {
    q: "Is safety ensured for kids during races?",
    a: "Absolutely. All activities are age-appropriate, supervised by trained coaches, and organized with medical and security support at the venue.",
  },
  {
    q: "Can schools or societies partner with TGIFC?",
    a: "Yes! Schools, academies, and RWAs can partner with us for group participation, pre-event activities, or to host TGIFC promotional workshops in their premises.",
  },
  {
    q: "How can brands collaborate with TGIFC?",
    a: "Brands can come onboard as sponsors, zone partners, or activity collaborators. For details, contact us at team@fitbuds.fit.",
  },
  {
    q: "Who is organizing TGIFC?",
    a: "TGIFC is organized by FitBuds, in collaboration with Fit India, to promote physical literacy, fitness, and family well-being across India.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-white text-center px-6 md:px-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#1C1C1C]">
        Frequently Asked Questions
      </h2>

      <div className="max-w-5xl mx-auto text-left space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg shadow-sm">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center p-5 text-left text-lg font-medium text-[#1C1C1C] hover:bg-[#F7FDF5] transition"
            >
              {faq.q}
              <span className="text-[#81B622]">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className="p-5 pt-0 text-gray-700">{faq.a}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
