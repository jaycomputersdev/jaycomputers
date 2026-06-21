const highlights = [
  "Computer & laptop repair, chip-level repair",
  "Laptop body fabrication",
  "CCTV camera for society & office",
  "WiFi camera for home security",
  "VDP installation (video door phone)",
  "Biometric attendance machine",
  "All licence software available",
  "Laptop & computer parts",
];

export function Highlights() {
  return (
    <section className="bg-ink py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-amber">
          On the counter
        </p>
        <h2 className="mt-3 max-w-lg font-display text-2xl font-bold leading-tight text-paper sm:text-3xl">
          If it&apos;s on this list, we stock it, fix it, or install it.
        </h2>

        <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-3 border-b border-line py-2.5">
              <span aria-hidden className="mt-1 text-amber">
                &#9733;
              </span>
              <span className="text-sm leading-relaxed text-slate-on-dark sm:text-base">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
