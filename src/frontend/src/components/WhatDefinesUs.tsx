import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

const DEFINE_STATS = [
  { value: "500+", label: "Clients" },
  { value: "12+", label: "Years" },
  { value: "12+", label: "Industries" },
  { value: "3M+", label: "Leads Generated" },
];

export function WhatDefinesUs() {
  return (
    <section
      id="about"
      className="py-24 bg-[#0D1426] border-t border-[rgba(255,186,8,0.08)]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#FFBA08] text-sm font-semibold uppercase tracking-[0.2em] mb-6">
              What Defines Us
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
              We're brand builders at heart, digital experts by design, and
              performance-driven at our core.
            </h2>
            <p className="text-white/50 leading-relaxed text-lg">
              From Kota to the whole of India — we're on a mission to take
              PromoDaddy to the world. Driven by a ferocious hunger to create
              tangible impact, we combine strategy, creativity, and data to put
              your brand in front of the right audience.
            </p>
            <Link
              to="/projects"
              className="inline-block mt-8 text-[#FFBA08] font-semibold hover:text-white transition-colors"
            >
              Explore our work →
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid grid-cols-2 gap-px bg-white/10">
              {DEFINE_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#0D1426] p-10"
                  data-ocid={`about.stat.item.${DEFINE_STATS.indexOf(stat) + 1}`}
                >
                  <div className="text-5xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/40 text-sm uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
