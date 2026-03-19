import { motion } from "motion/react";

const TICKER_ITEMS = [
  "SEO",
  "GOOGLE ADS",
  "YOUTUBE ADS",
  "SOCIAL MEDIA",
  "BRANDING",
  "CONTENT",
  "LEAD GENERATION",
  "PR",
  "WEBSITE DEVELOPMENT",
];

// Duplicate for seamless loop
const ALL_TICKER = [
  ...TICKER_ITEMS.map((t) => ({ id: `a-${t}`, text: t })),
  ...TICKER_ITEMS.map((t) => ({ id: `b-${t}`, text: t })),
];

const STATS = [
  { value: "500+", label: "Projects" },
  { value: "160+", label: "Reviews" },
  { value: "5.0", label: "Google Rating" },
  { value: "8+", label: "Years" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#0a0a0a] flex flex-col justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#F26A21] text-sm font-semibold uppercase tracking-[0.2em] mb-6">
            India's #1 Digital Marketing Agency
          </p>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-[#f5f5f0] leading-[0.95] tracking-tight mb-8">
            We Make,
            <br />
            <span className="text-white/30">Creative Things</span>
            <br />
            Everyday
          </h1>
          <p className="text-white/50 text-lg max-w-xl mb-10">
            Trusted by Sonu Sood, Mohammad Shami &amp; 500+ brands across India
          </p>
          <a
            href="#contact"
            data-ocid="hero.consultation.button"
            className="inline-block bg-[#F26A21] hover:bg-[#d95b18] text-white font-bold px-8 py-4 text-sm uppercase tracking-widest transition-colors"
          >
            Get Free Consultation
          </a>
        </motion.div>
      </div>

      {/* Ticker */}
      <div className="mt-10 border-t border-b border-white/10 py-4 overflow-hidden">
        <div className="marquee-track-fast">
          {ALL_TICKER.map((item) => (
            <span
              key={item.id}
              className="text-sm font-semibold tracking-widest text-white/40 mx-8 whitespace-nowrap"
            >
              {item.text} <span className="text-[#F26A21] mx-2">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* Stats strip */}
      <motion.div
        className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {STATS.map((stat, i) => (
          <div key={stat.label} data-ocid={`hero.stat.item.${i + 1}`}>
            <div className="text-4xl md:text-5xl font-bold text-white">
              {stat.value}
            </div>
            <div className="text-white/40 text-sm mt-1 uppercase tracking-widest">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
