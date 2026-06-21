export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-pale to-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="font-display text-4xl md:text-[2.75rem] font-bold leading-tight mb-5">
            <span className="text-navy">Trusted Computer, CCTV </span>
            <span className="text-blue">& Office Solutions in </span>
            <span className="text-navy">Ghatkopar</span>
          </h1>
          <p className="text-slate text-base mb-7 max-w-md">
            Jay Computers in Ghatkopar offers fast, reliable, and affordable{" "}
            <strong className="text-ink">computer & laptop sales, repair, and rental</strong>, along with{" "}
            <strong className="text-ink">CCTV installation, video door phones, printers, and biometric attendance systems</strong>{" "}
            — trusted by residential and commercial clients since 2014.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+919594243527" className="btn-primary">📞 Call Now</a>
            <a href="#contact" className="btn-outline">Get Free Quote</a>
          </div>
        </div>
        <div className="photo-slot h-72 md:h-96 p-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80"
            alt="PC, laptop, CCTV, printer & biometric devices laid out"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}