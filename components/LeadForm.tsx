"use client";
import { useState } from "react";

export default function LeadForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = new FormData(e.currentTarget);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(form)),
      });
      setStatus("sent");
    } catch {
      setStatus("idle");
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
