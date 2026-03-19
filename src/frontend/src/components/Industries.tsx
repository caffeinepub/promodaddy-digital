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
  const items = [...INDUSTRIES, ...INDUSTRIES]; // duplicate for seamless loop

  return (
    <section className="py-16 bg-[#EAF6FF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <span className="text-[#2B6FEA] font-semibold text-sm uppercase tracking-widest">
          Our Reach
        </span>
        <h2 className="text-3xl font-bold text-[#111827] mt-2">
          Industries We Serve
        </h2>
        <p className="text-gray-500 mt-2">
          Delivering digital excellence across diverse sectors
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="marquee-track">
          {items.map((industry, i) => (
            <div
              key={`${industry.label}-${i}`}
              className="flex items-center gap-3 bg-white border border-border rounded-full px-6 py-3 mx-3 whitespace-nowrap shadow-sm"
            >
              <span className="text-xl">{industry.icon}</span>
              <span className="font-medium text-[#111827]">
                {industry.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
