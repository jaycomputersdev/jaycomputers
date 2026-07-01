"use client";
import { useState } from "react";

const CLIENT_WHATSAPP_NUMBER = "919594243527"; // no + or spaces, country code + number

export default function LeadForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form) as Record<string, string>;

    // Open a blank tab synchronously (inside the click handler) so browsers
    // don't treat it as a blocked popup. We fill in the real URL once we
    // know the Firestore save succeeded.
    const waWindow = window.open("", "_blank");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || "Failed to save lead");
      }

      setStatus("sent");

      const message =
        `New Lead from Website:\n` +
        `Name: ${data.name}\n` +
        `Phone: ${data.phone}\n` +
        `Service: ${data.service}\n` +
        `Location: ${data.location}\n` +
        `Message: ${data.message || "-"}`;

      const waUrl = `https://wa.me/${CLIENT_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

      if (waWindow) {
        waWindow.location.href = waUrl;
      } else {
        // Popup was blocked despite our workaround (rare) — fall back to
        // navigating the current tab isn't ideal, so just let the user know.
        console.warn("WhatsApp tab was blocked by the browser.");
      }
    } catch (error) {
      console.error("Lead submission error:", error);
      setStatus("idle");
      if (waWindow) waWindow.close();
    }
  }

  if (status === "sent") {
    return (
      <div className="bg-white border border-line rounded-xl p-6 text-center shadow-sm">
        <p className="text-navy font-semibold">Thanks! We&apos;ll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-line rounded-xl p-6 md:p-7 space-y-4 shadow-sm">
      <div>
        <label className="text-xs font-medium text-slate mb-1 block">Full Name</label>
        <input name="name" required placeholder="Enter your name" className="form-input" />
      </div>
      <div>
        <label className="text-xs font-medium text-slate mb-1 block">Phone Number</label>
        <input name="phone" required placeholder="Enter 10-digit number" className="form-input" />
      </div>
      <div>
        <label className="text-xs font-medium text-slate mb-1 block">Service Required</label>
        <select name="service" className="form-input">
          <option>Computer / Laptop Sales</option>
          <option>Repair & Servicing</option>
          <option>Rental</option>
          <option>CCTV Installation</option>
          <option>Video Door Phone</option>
          <option>Printer Sales & Service</option>
          <option>Biometric Attendance</option>
        </select>
      </div>
      <div>
        <label className="text-xs font-medium text-slate mb-1 block">Location</label>
        <input name="location" defaultValue="Ghatkopar" className="form-input" />
      </div>
      <div>
        <label className="text-xs font-medium text-slate mb-1 block">Issue Description</label>
        <textarea name="message" placeholder="Tell us what you need" rows={3} className="form-input" />
      </div>
      <button type="submit" disabled={status === "sending"} className="btn-primary w-full text-center">
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}