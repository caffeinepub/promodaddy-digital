import { animate, motion, useInView, useMotionValue } from "motion/react";
import { useEffect, useRef } from "react";

const STATS = [
  { raw: 93, suffix: "M+", label: "YouTube Views" },
  { raw: 1600, suffix: "+", label: "Five-Star Reviews" },
  { raw: 5000, suffix: "+", label: "Projects Delivered" },
];

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const motionVal = useMotionValue(0);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionVal, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate(latest) {
        if (ref.current) {
          ref.current.textContent =
            Math.round(latest).toLocaleString() + suffix;
        }
      },
    });
    return controls.stop;
  }, [inView, to, suffix, motionVal]);

  return (
    <div ref={ref} className="text-6xl md:text-7xl font-bold text-white">
      0{suffix}
    </div>
  );
}

export function RealResults() {
  return (
    <section
      id="results"
      className="py-24 bg-[#0D1426] border-t border-[rgba(255,186,8,0.08)]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#FFBA08] text-sm font-semibold uppercase tracking-[0.2em] mb-6">
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
              className="inline-block bg-[#FFBA08] hover:bg-[#E0A800] text-white font-bold px-8 py-4 text-sm uppercase tracking-widest transition-colors"
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
              <motion.div
                key={stat.label}
                className="bg-[#111B35] p-10 border-l-2 border-[#FFBA08]"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                data-ocid={`results.kpi.item.${i + 1}`}
              >
                <CountUp to={stat.raw} suffix={stat.suffix} />
                <div className="text-white/40 text-sm uppercase tracking-widest mt-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
