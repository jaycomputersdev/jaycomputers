const services = [
  { title: "Laptop & Desktop Sales", desc: "New and refurbished PCs from HP, Dell, Lenovo, Acer." },
  { title: "Repair & Servicing", desc: "Hardware and software repair, on-site or in-shop." },
  { title: "Laptop Rental", desc: "Short and long-term rental for individuals and offices." },
  { title: "CCTV Installation", desc: "Hikvision & CP Plus camera supply and installation." },
  { title: "Video Door Phones", desc: "Supply and installation for homes and offices." },
  { title: "Biometric Attendance", desc: "Setup for offices, shops and institutions." },
];

export default function Services() {
  return (
    <section id="services" className="max-w-6xl mx-auto px-5 py-16">
      <div className="text-center mb-10">
        <h2 className="font-display text-3xl font-bold text-navy">What We Do</h2>
        <p className="text-slate mt-2">Everything your office or home needs in one shop.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="bg-white border border-line rounded-xl p-5">
            <div className="photo-slot h-32 mb-4 text-xs">Photo: {s.title.toLowerCase()}</div>
            <h3 className="font-semibold text-navy mb-1">{s.title}</h3>
            <p className="text-sm text-slate">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
