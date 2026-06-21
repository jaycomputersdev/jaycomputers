const stats = [
  { value: "14+", label: "Years in Business" },
  { value: "500+", label: "Google Reviews" },
  { value: "7", label: "Days a Week" },
  { value: "6+", label: "Brands We Service" },
];

export default function StatsBar() {
  return (
    <section className="bg-navy">
      <div className="max-w-6xl mx-auto px-5 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-3xl font-bold text-white">{s.value}</div>
            <div className="text-sm text-blue-light mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
