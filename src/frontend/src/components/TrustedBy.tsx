import { motion } from "motion/react";

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
  ...ROW_ONE_BASE.map((n, i) => ({ id: `r1a-${i}`, name: n })),
  ...ROW_ONE_BASE.map((n, i) => ({ id: `r1b-${i}`, name: n })),
  ...ROW_ONE_BASE.map((n, i) => ({ id: `r1c-${i}`, name: n })),
];

const ROW_TWO = [
  ...ROW_TWO_BASE.map((n, i) => ({ id: `r2a-${i}`, name: n })),
  ...ROW_TWO_BASE.map((n, i) => ({ id: `r2b-${i}`, name: n })),
  ...ROW_TWO_BASE.map((n, i) => ({ id: `r2c-${i}`, name: n })),
];

export function TrustedBy() {
  return (
    <section id="trusted" className="py-20 bg-[#080D1A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#FFBA08] text-xs font-bold uppercase tracking-[0.3em] mb-4">
            ✦ Celebrity Trust
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Trusted by India's
            <br />
            <span
              style={{
                display: "inline-block",
                position: "relative",
              }}
            >
              Biggest Names
              <span
                className="absolute -bottom-2 left-0 right-0 h-[3px] rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, #FFBA08 0%, rgba(255,186,8,0.3) 60%, transparent 100%)",
                }}
              />
            </span>
          </h2>
        </motion.div>
      </div>

      <div className="space-y-5">
        {/* Row 1 — Celebrity names — scrolls left */}
        <div className="relative overflow-hidden">
          <div
            className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, #080D1A 0%, transparent 100%)",
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(270deg, #080D1A 0%, transparent 100%)",
            }}
          />
          <div className="marquee-track">
            {ROW_ONE.map((item, i) => (
              <span
                key={item.id}
                className="inline-flex items-center gap-2.5 border border-[rgba(255,186,8,0.35)] px-6 py-3 rounded-full text-sm text-white/80 font-semibold whitespace-nowrap mx-3 transition-all duration-300 hover:border-[#FFBA08] hover:text-white cursor-default"
                style={{ background: "rgba(255,186,8,0.04)" }}
                data-ocid={`trusted.item.${(i % ROW_ONE_BASE.length) + 1}`}
              >
                <span className="text-[#FFBA08] text-xs">✦</span>
                {item.name}
              </span>
            ))}
          </div>
        </div>

        {/* Row 2 — Industry names — scrolls right */}
        <div className="relative overflow-hidden">
          <div
            className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, #080D1A 0%, transparent 100%)",
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(270deg, #080D1A 0%, transparent 100%)",
            }}
          />
          <div className="marquee-track-reverse">
            {ROW_TWO.map((item) => (
              <span
                key={item.id}
                className="inline-flex items-center border border-[rgba(255,255,255,0.08)] px-6 py-3 rounded-full text-sm text-white/35 whitespace-nowrap mx-3 transition-all duration-300 hover:border-[rgba(255,255,255,0.18)] hover:text-white/55 cursor-default"
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
