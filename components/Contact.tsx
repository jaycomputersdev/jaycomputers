import LeadForm from "./LeadForm";

export default function Contact() {
  return (
    <section id="contact" className="bg-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <h2 className="font-display text-3xl font-bold text-navy text-center mb-10">Send Us a Message</h2>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <span className="text-amber font-semibold text-xs tracking-wide uppercase">We&apos;re Here to Help</span>
            <h3 className="font-display text-2xl font-bold text-navy mt-2 mb-4">
              Book Trusted Computer &amp; Office Solutions
            </h3>
            <p className="text-slate mb-6 max-w-sm">
              Jay Computers provides reliable computer, CCTV, printer and biometric sales, repair and rental across Ghatkopar for both residential and commercial clients.
            </p>
            <ul className="space-y-3 text-ink text-sm">
              <li>✉️ jaycomputers2014@gmail.com</li>
              <li>📞 +91 95942 43527 / +91 96646 46413</li>
            </ul>
          </div>
          <LeadForm />
        </div>
      </div>
    </section>
  );
}