const ROW_ONE_BASE = [
  "Sonu Sood",
  "Mohammad Shami",
  "Rashid Khan",
  "Jaya Kishori",
  "Pradeep Mishra",
  "AB de Villiers",
  "Quinton de Kock",
];

const ROW_TWO_BASE = [
  "Kota Coaching",
  "Hospital Brands",
  "E-commerce",
  "Real Estate",
  "Political Campaigns",
  "B2B Companies",
  "Food Brands",
  "Startups",
];

const ROW_ONE = [
  ...ROW_ONE_BASE.map((n) => ({ id: `r1a-${n}`, name: n })),
  ...ROW_ONE_BASE.map((n) => ({ id: `r1b-${n}`, name: n })),
];

const ROW_TWO = [
  ...ROW_TWO_BASE.map((n) => ({ id: `r2a-${n}`, name: n })),
  ...ROW_TWO_BASE.map((n) => ({ id: `r2b-${n}`, name: n })),
];

export function TrustedBy() {
  return (
    <section id="trusted" className="py-20 bg-[#080D1A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <p className="text-[#FFBA08] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
          Celebrity Trust
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Trusted by India's
          <br />
          Biggest Names
        </h2>
      </div>

      <div className="space-y-4">
        <div className="relative overflow-hidden">
          <div className="marquee-track">
            {ROW_ONE.map((item, i) => (
              <span
                key={item.id}
                className="border border-[rgba(255,186,8,0.3)] px-5 py-2.5 rounded-full text-sm text-white/70 whitespace-nowrap mx-2"
                data-ocid={`trusted.item.${(i % ROW_ONE_BASE.length) + 1}`}
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="marquee-track-reverse">
            {ROW_TWO.map((item) => (
              <span
                key={item.id}
                className="border border-[rgba(255,186,8,0.12)] px-5 py-2.5 rounded-full text-sm text-white/40 whitespace-nowrap mx-2"
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
