import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const STEPS = [
  { num: "01", label: "Free Consultation", desc: "Tell us about your goals" },
  { num: "02", label: "Custom Strategy", desc: "Tailored plan for your brand" },
  { num: "03", label: "Execution", desc: "Our experts get to work" },
  { num: "04", label: "Weekly Updates", desc: "Transparent reporting" },
  { num: "05", label: "Growth & Scale", desc: "Continuous optimization" },
];

export function HowWeWork() {
  return (
    <section className="py-20 bg-[#F5FAFF]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#2B6FEA] font-semibold text-sm uppercase tracking-widest">
            Our Process
          </span>
          <h2 className="text-3xl font-bold text-[#111827] mt-2">
            How We Work
          </h2>
          <p className="text-gray-500 mt-2">
            A simple, transparent process designed for your success
          </p>
        </motion.div>

        {/* Desktop horizontal steps */}
        <div className="hidden md:flex items-center justify-between">
          {STEPS.map((step, i) => (
            <div key={step.num} className="flex items-center">
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-ocid={`process.step.item.${i + 1}`}
              >
                <div className="w-14 h-14 rounded-full bg-[#2B6FEA] text-white flex items-center justify-center font-bold text-sm mb-3 shadow-lg">
                  {step.num}
                </div>
                <div className="text-center w-28">
                  <p className="font-semibold text-sm text-[#111827]">
                    {step.label}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{step.desc}</p>
                </div>
              </motion.div>
              {i < STEPS.length - 1 && (
                <ArrowRight
                  size={20}
                  className="text-[#2B6FEA] mx-3 mb-6 shrink-0"
                />
              )}
            </div>
          ))}
        </div>

        {/* Mobile vertical steps */}
        <div className="md:hidden space-y-6">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-10 h-10 rounded-full bg-[#2B6FEA] text-white flex items-center justify-center font-bold text-sm shrink-0">
                {step.num}
              </div>
              <div>
                <p className="font-semibold text-[#111827]">{step.label}</p>
                <p className="text-sm text-gray-500">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
