"use client";
import { useState } from "react";

const tabs = [
  {
    label: "Business & Gaming PCs",
    title: "Business & Gaming Computer Sales",
    body: "Desktop builds for office use or gaming, sourced and supported locally with genuine parts and after-sales service.",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=700&q=80",
  },
  {
    label: "Laptop Sales & Service",
    title: "Computer & Laptop Sales & Service",
    body: "Laptop and computer repair including chip-level repair and laptop body fabrication, plus sales of new and refurbished machines.",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=700&q=80",
  },
  {
    label: "CCTV Camera",
    title: "CCTV Camera Sales & Service",
    body: "Complete CCTV solutions for societies and offices, plus WiFi cameras for home security.",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=700&q=80",
  },
  {
    label: "Video Door Security",
    title: "Video Door Security System",
    body: "VDP (Video Door Phone) installation for added entry security at homes and offices.",
    image: "https://images.unsplash.com/photo-1588316395516-9e0ceca92d3a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    label: "Printers",
    title: "Printer Sales & Service",
    body: "Sales and servicing for office and home printers, with printers also available on rent for short-term needs.",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=700&q=80",
  },
  {
    label: "Biometric Attendance",
    title: "Biometric Attendance Machine",
    body: "Biometric attendance machine setup for offices, shops and institutions, plus all licence software available on request.",
    image: "https://plus.unsplash.com/premium_photo-1674582744373-c0805c281744?q=80&w=1781&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Expertise() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section id="services" className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
      <h2 className="font-display text-3xl font-bold text-navy text-center mb-8">Our Expertise</h2>
      <div className="flex flex-wrap justify-center gap-6 border-b border-line mb-8 text-sm font-medium">
        {tabs.map((t, i) => (
          <button
            key={t.label}
            onClick={() => setActive(i)}
            className={`pb-3 -mb-px border-b-2 transition-colors ${
              active === i ? "border-blue text-blue" : "border-transparent text-slate hover:text-ink"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="bg-navy rounded-2xl overflow-hidden grid md:grid-cols-2">
        <div className="p-8 md:p-10 text-white">
          <h3 className="font-display text-2xl font-bold mb-4">{tab.title}</h3>
          <p className="text-blue-light text-sm leading-relaxed mb-6">{tab.body}</p>
          <a href="#contact" className="btn-primary inline-block">Explore More</a>
        </div>
        <div className="photo-slot h-64 md:h-105 rounded-none border-0 p-0 overflow-hidden">
          <img
            src={tab.image}
            alt={tab.label}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}