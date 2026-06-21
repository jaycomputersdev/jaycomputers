const BRANDS = ["HP", "Dell", "Lenovo", "Acer", "Hikvision", "CP Plus", "Quick Heal"];

export function TrustStrip() {
  return (
    <section className="border-y border-line bg-paper-dim py-5">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 text-center sm:flex-row sm:justify-between sm:text-left sm:px-8">
        <p className="text-sm font-medium text-ink">
          <span className="font-display font-bold text-amber-dim">Since 2014</span> — sales,
          service &amp; rentals in Ghatkopar East
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5">
          <span className="text-xs uppercase tracking-wide text-slate">Brands we deal in</span>
          <span className="flex flex-wrap justify-center gap-x-3 gap-y-1 font-mono text-xs text-ink">
            {BRANDS.map((b) => (
              <span key={b}>{b}</span>
            ))}
          </span>
        </div>
      </div>
    </section>
  );
}
