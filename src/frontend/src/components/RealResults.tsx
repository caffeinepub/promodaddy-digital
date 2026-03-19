import { motion } from "motion/react";

const STATS = [
  { value: "93M+", label: "YouTube Views" },
  { value: "160+", label: "Five-Star Reviews" },
  { value: "500+", label: "Projects Delivered" },
];

export function RealResults() {
  return (
    <section
      id="results"
      className="py-24 bg-[#0f0f0f] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#F26A21] text-sm font-semibold uppercase tracking-[0.2em] mb-6">
              Real Impact
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
              Real Results.
              <br />
              <span className="text-white/40">Real Impact.</span>
              <br />
              Across India.
            </h2>
            <p className="text-white/50 leading-relaxed text-lg mb-8">
              We don't just run campaigns — we build growth engines. Every
              project at PromoDaddy is backed by data, strategy, and a
              relentless focus on results that actually matter to your business.
            </p>
            <a
              href="#contact"
              data-ocid="results.learnmore.button"
              className="inline-block bg-[#F26A21] hover:bg-[#d95b18] text-white font-bold px-8 py-4 text-sm uppercase tracking-widest transition-colors"
            >
              Start Your Growth
            </a>
          </motion.div>

          <motion.div
            className="space-y-px"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="bg-[#141414] p-10 border-l-2 border-[#F26A21]"
                data-ocid={`results.kpi.item.${i + 1}`}
              >
                <div className="text-6xl md:text-7xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-white/40 text-sm uppercase tracking-widest mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
