export default function Footer() {
  return (
    <footer className="bg-navy text-blue-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="text-white font-bold mb-3">Jay Computers</h3>
          <p className="text-xs leading-relaxed mb-4">
            Trusted computer, CCTV and office equipment sales, repair and rental in Ghatkopar, with same-day service and transparent pricing.
          </p>
          <p className="text-xs flex items-center gap-2 mb-2">📞 +91 95942 43527</p>
          <p className="text-xs flex items-center gap-2 mb-2">✉️ jaycomputers2014@gmail.com</p>
          <p className="text-xs flex items-center gap-2">📍 1+1 Laxmi Nivara Society, Patel Chowk, Ghatkopar East, Mumbai 400077</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#why-us" className="hover:text-white">About Us</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Our Services</h4>
          <ul className="space-y-2 text-xs">
            <li>Computer & Laptop Sales</li>
            <li>Repair & Servicing</li>
            <li>CCTV Installation</li>
            <li>Biometric Attendance</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Service Information</h4>
          <div className="border border-white/15 rounded-xl p-4">
            <p className="text-xs flex items-center gap-2 mb-1">📅 <span className="font-semibold text-white">Operating Hours</span></p>
            <div className="flex justify-between text-xs mb-3">
              <span>Mon – Sat</span>
              <span>9:00 AM – 6:00 PM</span>
            </div>
            <p className="text-xs flex items-center gap-2 mb-1">⭐ <span className="font-semibold text-white">Customer Rating</span></p>
            <div className="flex justify-between text-xs mb-1">
              <span>Google Rating</span>
              <span className="text-amber">★ 5.0/5</span>
            </div>
            <div className="flex justify-between text-xs">
              <span>Based on Reviews</span>
              <span className="text-amber">623 Reviews</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 max-w-7xl mx-auto px-6 lg:px-10 py-4 flex flex-col sm:flex-row justify-between gap-2 text-xs">
        <span>© {new Date().getFullYear()} Jay Computers — All Rights Reserved.</span>
        <span>
          Designed &amp; Developed by{" "}
          <a href="#" className="text-white font-medium hover:underline">Navkon Labs ↗</a>
        </span>
      </div>
    </footer>
  );
}