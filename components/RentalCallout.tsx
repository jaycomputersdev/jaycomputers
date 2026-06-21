export function RentalCallout() {
  return (
    <section id="rentals" className="bg-ink py-12 sm:py-14">
      <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-amber">
          Rentals
        </p>
        <h2 className="mt-2 font-display text-xl font-bold leading-tight text-paper sm:text-2xl">
          कॉम्प्युटर लॅपटॉप प्रिंटर भाड्याने मिळतील
        </h2>
        <p className="mt-1.5 text-sm text-slate-on-dark sm:text-base">
          Computers, laptops and printers available on rent — short or long term.
        </p>
        <a
          href="#contact"
          className="mt-5 inline-block rounded-sm bg-amber px-6 py-2.5 font-display text-sm font-semibold text-ink transition-transform hover:translate-y-[-1px]"
        >
          Ask about rental rates
        </a>
      </div>
    </section>
  );
}
