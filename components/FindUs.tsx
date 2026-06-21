export default function FindUs() {
  return (
    <section className="bg-blue-pale">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 text-center">
        <h2 className="font-display text-3xl font-bold text-navy mb-3">📍 Find Us</h2>
        <p className="text-slate max-w-xl mx-auto mb-8">
          Visit Jay Computers in Ghatkopar East for computer, laptop, CCTV, printer and biometric sales, service and rental.
        </p>
        <div className="photo-slot h-80 max-w-4xl mx-auto overflow-hidden rounded-xl">
          <iframe
            src="https://www.google.com/maps?q=JAY+COMPUTERS,+1%2B1+Laxmi+Nivara+Society,+Patel+Chowk,+Ghatkopar+East,+Mumbai+400077&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Jay Computers location on Google Maps"
          />
        </div>
        <a
          href="https://maps.app.goo.gl/xCC6sVDPo17e3WaG6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-5 text-sm font-medium text-blue hover:underline"
        >
          📍 Get Directions on Google Maps
        </a>
      </div>
    </section>
  );
}