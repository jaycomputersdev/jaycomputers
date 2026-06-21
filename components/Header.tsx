"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const services = [
  "Computer & Laptop Sales",
  "Repair & Servicing",
  "Laptop Rental",
  "CCTV Installation",
  "Video Door Phones",
  "Biometric Attendance",
];

export default function Header() {
  const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL || "#";
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [logoOpen, setLogoOpen] = useState(false);

  function closeMobile() {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }

  useEffect(() => {
    if (!logoOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLogoOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [logoOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-line">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 py-3 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <button
            type="button"
            onClick={() => setLogoOpen(true)}
            aria-label="View larger logo"
            className="shrink-0 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue"
          >
            <Image
              src="/JC_Logo-removebg.png"
              alt="Jay Computers logo"
              width={44}
              height={44}
              className="h-8 w-8 sm:h-10 sm:w-10 object-contain cursor-pointer"
              priority
            />
          </button>
          <div className="min-w-0">
            <div className="font-bold text-navy text-base sm:text-lg leading-tight truncate">Jay Computers</div>
            <div className="text-[10px] sm:text-[11px] text-slate leading-tight truncate">Computer, CCTV &amp; Office Solutions</div>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-ink">
          <a href="#" className="text-blue">Home</a>
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-blue">
              Services <span className="text-xs">▾</span>
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 bg-white border border-line rounded-lg shadow-lg py-2 w-56">
                {services.map((s) => (
                  <a key={s} href="#services" className="block px-4 py-2 text-sm hover:bg-blue-pale hover:text-blue">
                    {s}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a href="#why-us" className="hover:text-blue">About Us</a>
          <a href="#contact" className="hover:text-blue">Contact Us</a>
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <a href={adminUrl} className="text-sm font-medium text-slate hover:text-blue hidden lg:inline">Staff login</a>
          <a
            href="tel:+919594243527"
            className="btn-pill !px-3 sm:!px-5 !py-2 text-xs sm:text-sm whitespace-nowrap"
          >
            📞 <span className="hidden min-[380px]:inline">Call Now</span>
          </a>
          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg border border-line text-navy shrink-0"
          >
            {mobileOpen ? (
              <span className="text-xl leading-none">✕</span>
            ) : (
              <span className="text-xl leading-none">☰</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-line bg-white px-3 sm:px-6 py-4 flex flex-col gap-1 text-sm font-medium text-ink">
          <a href="#" onClick={closeMobile} className="py-2 text-blue">Home</a>
          <button
            onClick={() => setMobileServicesOpen((v) => !v)}
            className="py-2 flex items-center justify-between"
          >
            Services <span className="text-xs">{mobileServicesOpen ? "▴" : "▾"}</span>
          </button>
          {mobileServicesOpen && (
            <div className="pl-3 flex flex-col gap-1 border-l border-line ml-1 mb-1">
              {services.map((s) => (
                <a key={s} href="#services" onClick={closeMobile} className="py-1.5 text-slate hover:text-blue">
                  {s}
                </a>
              ))}
            </div>
          )}
          <a href="#why-us" onClick={closeMobile} className="py-2">About Us</a>
          <a href="#contact" onClick={closeMobile} className="py-2">Contact Us</a>
          <a href={adminUrl} onClick={closeMobile} className="py-2 text-slate">Staff login</a>
        </nav>
      )}
      {/* Logo modal */}
      {logoOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4"
          onClick={() => setLogoOpen(false)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-xl p-6 sm:p-10 max-w-sm w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setLogoOpen(false)}
              className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full text-navy hover:bg-blue-pale"
            >
              <span className="text-xl leading-none">✕</span>
            </button>
            <Image
              src="/JC_Logo-removebg.png"
              alt="Jay Computers logo"
              width={280}
              height={280}
              className="w-48 h-48 sm:w-64 sm:h-64 object-contain"
            />
            <div className="mt-4 font-bold text-navy text-xl text-center">Jay Computers</div>
            <div className="text-sm text-slate text-center">Computer, CCTV &amp; Office Solutions</div>
          </div>
        </div>
      )}
    </header>
  );
}