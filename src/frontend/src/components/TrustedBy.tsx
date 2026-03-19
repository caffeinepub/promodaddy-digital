import { motion } from "motion/react";

const CELEBRITIES = [
  {
    name: "Sonu Sood",
    role: "Actor & Philanthropist",
    initials: "SS",
    color: "bg-blue-100 text-blue-700",
  },
  {
    name: "Mohammad Shami",
    role: "Indian Cricket Star",
    initials: "MS",
    color: "bg-green-100 text-green-700",
  },
  {
    name: "Rashid Khan",
    role: "Afghan Cricket Legend",
    initials: "RK",
    color: "bg-purple-100 text-purple-700",
  },
  {
    name: "Pradeep Mishra",
    role: "Katha Speaker",
    initials: "PM",
    color: "bg-orange-100 text-orange-700",
  },
  {
    name: "Jaya Kishori",
    role: "Motivational Speaker",
    initials: "JK",
    color: "bg-pink-100 text-pink-700",
  },
  {
    name: "Vivek Bindra",
    role: "Business Coach",
    initials: "VB",
    color: "bg-red-100 text-red-700",
  },
];

export function TrustedBy() {
  return (
    <section id="trusted" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#2B6FEA] font-semibold text-sm uppercase tracking-widest">
            Celebrity Trust
          </span>
          <h2 className="text-3xl font-bold text-[#111827] mt-2">
            Trusted by India's Biggest Names
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            From Bollywood actors to cricket legends — India's biggest
            celebrities trust PromoDaddy Digital to manage and grow their
            personal brands online.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {CELEBRITIES.map((celeb, i) => (
            <motion.div
              key={celeb.name}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-ocid={`trusted.item.${i + 1}`}
            >
              <div
                className={`w-16 h-16 rounded-full ${celeb.color} flex items-center justify-center text-xl font-bold mx-auto mb-3 ring-2 ring-offset-2 ring-gray-200`}
              >
                {celeb.initials}
              </div>
              <p className="font-semibold text-sm text-[#111827]">
                {celeb.name}
              </p>
              <p className="text-xs text-gray-500 mt-0.5">{celeb.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
