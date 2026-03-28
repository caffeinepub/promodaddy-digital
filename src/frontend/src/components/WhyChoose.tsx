import { CheckCircle } from "lucide-react";
import { motion } from "motion/react";

const REASONS = [
  {
    title: "Results Not Promises",
    desc: "We measure everything. You get reports, ROI data, and transparent results every week.",
  },
  {
    title: "Celebrity-Level Expertise",
    desc: "We manage accounts of India's top celebrities — bringing that same quality to your brand.",
  },
  {
    title: "India-First Approach",
    desc: "Deep understanding of Indian consumers, trends, and regional nuances for better engagement.",
  },
  {
    title: "Transparent Reporting",
    desc: "Weekly & monthly detailed reports so you always know exactly what's happening with your campaign.",
  },
  {
    title: "Full-Service Agency",
    desc: "SEO, Ads, Social Media, Video, Branding — everything under one roof with coordinated strategy.",
  },
  {
    title: "Kota Ka Apna Agency",
    desc: "Proudly based in Kota, Rajasthan — serving local businesses and brands across all of India.",
  },
];

export function WhyChoose() {
  return (
    <section id="why-choose" className="py-20 bg-[#0D1426]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#FFBA08] font-semibold text-sm uppercase tracking-widest">
            Why Us
          </span>
          <h2 className="text-3xl font-bold text-[#F0F4FF] mt-2">
            Why Choose PromoDaddy?
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/assets/generated/why-choose-illustration.dim_600x500.png"
              alt="Digital Marketing Illustration"
              className="rounded-2xl w-full object-cover shadow-xl"
            />
          </motion.div>

          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {REASONS.map((r, i) => (
              <div
                key={r.title}
                className="flex gap-4 items-start"
                data-ocid={`why.item.${i + 1}`}
              >
                <CheckCircle
                  size={22}
                  className="text-[#FFBA08] mt-0.5 shrink-0"
                />
                <div>
                  <h3 className="font-semibold text-[#F0F4FF]">{r.title}</h3>
                  <p className="text-sm text-[rgba(240,244,255,0.5)] mt-0.5">
                    {r.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
