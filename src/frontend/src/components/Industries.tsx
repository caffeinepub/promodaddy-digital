const INDUSTRIES = [
  { icon: "🎓", label: "Coaching" },
  { icon: "🏥", label: "Hospitals" },
  { icon: "🛒", label: "E-commerce" },
  { icon: "🏠", label: "Real Estate" },
  { icon: "⭐", label: "Celebrities" },
  { icon: "🗳️", label: "Political" },
  { icon: "🏢", label: "B2B" },
  { icon: "🍕", label: "Food & Restaurant" },
  { icon: "🚀", label: "Startups" },
  { icon: "💊", label: "Healthcare" },
  { icon: "🎬", label: "Entertainment" },
  { icon: "📚", label: "EdTech" },
];

export function Industries() {
  const items = [...INDUSTRIES, ...INDUSTRIES];

  return (
    <section className="py-20 bg-[#080D1A] border-t border-[rgba(255,186,8,0.08)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <p className="text-[#FFBA08] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
          Our Reach
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Industries We Serve
        </h2>
      </div>
      <div className="relative overflow-hidden">
        <div className="marquee-track">
          {items.map((industry, i) => (
            <div
              key={`${industry.label}-${i}`}
              className="flex items-center gap-3 border border-[rgba(255,186,8,0.12)] rounded px-6 py-3 mx-3 whitespace-nowrap"
            >
              <span className="text-xl">{industry.icon}</span>
              <span className="font-medium text-white/60">
                {industry.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
