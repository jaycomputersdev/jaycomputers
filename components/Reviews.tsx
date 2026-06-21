const reviews = [
  { name: "Sheetal Sanghavi", time: "3 months ago", text: "Compared a few shops before buying a laptop here. The team explained specs in plain language, suggested options without pushing the priciest one, and set everything up before I left." },
  { name: "Kalpesh Shelar", time: "8 months ago", text: "My desktop kept crashing and two other shops couldn't fix it. Jay Computers ran a proper diagnostic, found the real cause, and the system has run fine since." },
  { name: "Yash Pawar", time: "1 year ago", text: "Rented 8 laptops here for a corporate training session — all clean, fast, and delivered on time with help setting up." },
  { name: "Sarfaraz Chaudhary", time: "10 months ago", text: "Our company has used Jay Computers for about 9 years now. The staff is polite and always explains the problem before fixing it." },
];

function GoogleIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} width="18" height="18">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.25 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.85A11 11 0 0 0 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.1A6.6 6.6 0 0 1 5.5 12c0-.73.13-1.44.34-2.1V7.05H2.18A11 11 0 0 0 1 12c0 1.77.43 3.45 1.18 4.95l3.66-2.85z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.05l3.66 2.85C6.71 7.3 9.14 5.38 12 5.38z" />
    </svg>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="max-w-7xl mx-auto px-6 lg:px-10 py-16 text-center">
      <h2 className="font-display text-3xl font-bold text-navy mb-4">Trusted Experiences from Our Customers</h2>
      <div className="inline-flex items-center gap-2 mb-10">
        <span className="font-bold text-navy text-lg">5.0</span>
        <span className="text-amber">★★★★★</span>
        <GoogleIcon />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {reviews.map((r) => (
          <div key={r.name} className="bg-white border border-line rounded-xl p-5 text-left">
            <div className="flex items-center justify-between mb-3">
              <span className="text-amber text-sm">★★★★★</span>
              <GoogleIcon />
            </div>
            <p className="text-xs text-slate mb-4 leading-relaxed">{r.text}</p>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-blue-pale text-blue flex items-center justify-center text-xs font-semibold">
                {r.name[0]}
              </div>
              <div>
                <div className="text-xs font-semibold text-ink">{r.name}</div>
                <div className="text-[11px] text-slate">{r.time}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <a
        href="https://share.google/ie37nXLU7XBfwbvUV"
        className="inline-flex items-center gap-2 text-blue text-sm font-medium hover:underline"
      >
        <GoogleIcon /> View more reviews on Google
      </a>
    </section>
  );
}