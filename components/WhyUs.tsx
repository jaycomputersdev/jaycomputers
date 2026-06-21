const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "600+", label: "Happy Customers" },
  { value: "100%", label: "Satisfaction Rate" },
];

const features = [
  { icon: "🛠️", title: "Computer Laptop Repair", desc: "Hardware and chip-level repair for computers and laptops." },
  { icon: "🔩", title: "Laptop Body Fabrication", desc: "Repair and rebuild of damaged laptop bodies." },
  { icon: "📷", title: "CCTV Camera For Society & Office", desc: "CCTV installation for societies, offices and commercial spaces." },
  { icon: "📡", title: "WiFi Camera for Home Security", desc: "Wireless camera setup for home security." },
  { icon: "🚪", title: "VDP Installation (Video Door Phone)", desc: "Video door phone supply and installation." },
  { icon: "🖐️", title: "Biometric Attendance Machine", desc: "Setup for offices, shops and institutions." },
  { icon: "💿", title: "All Licence Software Available", desc: "Genuine licensed software for all your systems." },
  { icon: "🧩", title: "Laptop & Computer Parts", desc: "Genuine spare parts for laptops and computers." },
];

const commitments = [
  "Genuine parts on all repairs",
  "Free inspection & upfront cost estimate",
  "Flexible computer, laptop & printer rental",
  "Local technicians who know Ghatkopar",
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-linear-to-b from-blue-pale to-[#DCE9FB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <h2 className="font-display text-3xl font-bold text-navy text-center mb-2">Why Choose Jay Computers?</h2>
        <p className="text-slate text-center mb-10 max-w-xl mx-auto">
          We are Ghatkopar&apos;s trusted partner for computer, CCTV and office equipment services, delivering excellence with every visit.
        </p>

        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-xl p-5 text-center shadow-sm">
              <div className="text-2xl font-bold text-navy">{s.value}</div>
              <div className="text-xs text-slate mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-xl p-5 shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-blue-pale flex items-center justify-center text-lg mb-3">{f.icon}</div>
              <h3 className="font-semibold text-navy mb-1 text-sm">{f.title}</h3>
              <p className="text-xs text-slate leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue rounded-2xl p-8 md:p-10 text-white mb-10">
          <h3 className="font-display text-xl font-bold mb-5">Our Commitment to Excellence</h3>
          <ul className="grid sm:grid-cols-2 gap-3 text-sm">
            {commitments.map((c) => (
              <li key={c} className="flex items-start gap-2">
                <span>✓</span> {c}
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center">
          <h3 className="font-display text-2xl font-bold text-navy mb-5">Ready for Professional Service?</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:+919594243527" className="btn-primary">📞 Call Now for Instant Help</a>
            <a href="#contact" className="btn-outline">Get Free Quote</a>
          </div>
        </div>
      </div>
    </section>
  );
}