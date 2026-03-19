import { motion } from "motion/react";

const STEPS = [
  {
    num: "01",
    label: "Free Consultation",
    desc: "Share your goals and challenges. We listen, analyse, and understand your brand's unique needs.",
  },
  {
    num: "02",
    label: "Custom Strategy",
    desc: "Our experts craft a tailor-made digital marketing plan designed specifically for your business.",
  },
  {
    num: "03",
    label: "Execution",
    desc: "Our team gets to work — launching campaigns, creating content, and driving performance.",
  },
  {
    num: "04",
    label: "Weekly Reports",
    desc: "Complete transparency with detailed weekly updates, analytics, and insights.",
  },
  {
    num: "05",
    label: "Growth & Scale",
    desc: "We continuously optimise and scale what works to maximise your ROI month over month.",
  },
];

export function HowWeWork() {
  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[#F26A21] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Our Process
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            How We Work
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-px bg-white/5">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#0a0a0a] p-8 hover:bg-[#111] transition-colors group"
              data-ocid={`process.step.item.${i + 1}`}
            >
              <div className="w-10 h-10 rounded-full border-2 border-[#F26A21] flex items-center justify-center text-[#F26A21] font-bold text-sm mb-6 group-hover:bg-[#F26A21] group-hover:text-black transition-colors">
                {step.num}
              </div>
              <h3 className="text-white font-bold text-lg mb-3">
                {step.label}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
