import { motion } from "motion/react";
import { useState } from "react";

const TESTIMONIALS = [
  {
    id: "rahul",
    quote:
      "PromoDaddy transformed our digital presence completely. The ROI we got from their Google Ads campaigns was beyond expectations. They truly understand performance marketing.",
    name: "Rahul Sharma",
    role: "E-commerce Brand Owner",
  },
  {
    id: "priya",
    quote:
      "Their understanding of Indian audiences and local markets is unmatched. Our coaching institute saw 10x lead growth in just 6 months. Highly recommend to anyone serious about growth.",
    name: "Priya Gupta",
    role: "Kota Coaching Director",
  },
  {
    id: "amit",
    quote:
      "Working with PromoDaddy for my social media management has been a game-changer. Professional, creative, and results-driven. The team genuinely cares about your brand.",
    name: "Amit Verma",
    role: "Local Business Owner, Delhi",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const t = TESTIMONIALS[active];

  return (
    <section className="py-24 bg-[#0f0f0f] border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[#F26A21] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            What Clients Say
          </h2>
        </motion.div>

        <div className="text-center">
          <span className="text-8xl text-[#F26A21] leading-none font-serif">
            &ldquo;
          </span>
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-white/80 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto -mt-4 mb-10">
              {t.quote}
            </p>
            <p className="text-white font-bold text-lg">{t.name}</p>
            <p className="text-white/40 text-sm mt-1">{t.role}</p>
          </motion.div>

          <div className="flex justify-center gap-3 mt-10">
            {TESTIMONIALS.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(i)}
                data-ocid="testimonials.tab"
                className={`w-8 h-1 transition-colors ${i === active ? "bg-[#F26A21]" : "bg-white/20"}`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
