import { motion } from "motion/react";
import { useState } from "react";

const CELEBRITIES = [
  {
    name: "Sonu Sood",
    role: "Bollywood Actor",
    category: "Entertainment",
    collab: "Personal Branding & PR",
    image: "/assets/generated/celebrity-sonu-sood.dim_400x500.jpg",
  },
  {
    name: "Mohammad Shami",
    role: "Indian Cricket – Fast Bowler",
    category: "Cricket",
    collab: "Social Media & Branding",
    image: "/assets/generated/celebrity-shami.dim_400x500.jpg",
  },
  {
    name: "Rashid Khan",
    role: "Afghanistan Cricket – Spinner",
    category: "Cricket",
    collab: "Digital Presence & PR",
    image: "/assets/generated/celebrity-rashid-khan.dim_400x500.jpg",
  },
  {
    name: "Jaya Kishori",
    role: "Devotional Singer & Speaker",
    category: "Spiritual",
    collab: "Fan Engagement & Content",
    image: "/assets/generated/celebrity-jaya-kishori.dim_400x500.jpg",
  },
  {
    name: "Vivek Bindra",
    role: "Business Coach & Speaker",
    category: "Education",
    collab: "Brand Strategy & Growth",
    image: "/assets/generated/celebrity-vivek-bindra.dim_400x500.jpg",
  },
];

export function Celebrities() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#0a0a0a] overflow-hidden" id="celebrities">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-[#F26A21]" />
            <span className="text-[#F26A21] text-xs font-semibold uppercase tracking-[0.3em]">
              Celebrity Partnerships
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
            Trusted by <span className="text-[#F26A21]">India's Biggest</span>
            <br />
            Names
          </h2>
          <p className="text-white/50 text-lg max-w-2xl">
            When Bollywood stars and national cricketers trust PromoDaddy — you
            know you're in the right hands.
          </p>
        </motion.div>

        {/* Celebrity Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {CELEBRITIES.map((celebrity, index) => (
            <motion.div
              key={celebrity.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              data-ocid={`celebrities.item.${index + 1}`}
            >
              <div
                className="relative overflow-hidden aspect-[4/5] transition-all duration-500"
                style={{
                  boxShadow:
                    hovered === index
                      ? "0 0 30px rgba(242, 106, 33, 0.4), 0 0 60px rgba(242, 106, 33, 0.15)"
                      : "none",
                }}
              >
                {/* Image */}
                <img
                  src={celebrity.image}
                  alt={celebrity.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-[#F26A21] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1">
                    {celebrity.category}
                  </span>
                </div>

                {/* Collab Hover Overlay */}
                <div
                  className="absolute inset-0 bg-[#F26A21]/90 flex items-center justify-center transition-opacity duration-300"
                  style={{ opacity: hovered === index ? 1 : 0 }}
                >
                  <div className="text-center px-4">
                    <p className="text-white font-bold text-sm uppercase tracking-wider mb-1">
                      Collaboration
                    </p>
                    <p className="text-white/90 text-xs font-medium">
                      {celebrity.collab}
                    </p>
                  </div>
                </div>

                {/* Bottom Info */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-4 transition-opacity duration-300"
                  style={{ opacity: hovered === index ? 0 : 1 }}
                >
                  <h3 className="text-white font-bold text-sm leading-tight">
                    {celebrity.name}
                  </h3>
                  <p className="text-white/60 text-xs mt-0.5 line-clamp-2">
                    {celebrity.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Signal */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-white/40 text-sm">
            Trusted by{" "}
            <span className="text-white font-semibold">500+ brands</span> and{" "}
            <span className="text-[#F26A21] font-semibold">
              India's biggest celebrities
            </span>
          </p>
          <a
            href="#contact"
            className="text-sm font-semibold text-[#F26A21] border border-[#F26A21] px-5 py-2 hover:bg-[#F26A21] hover:text-white transition-all duration-300"
            data-ocid="celebrities.primary_button"
          >
            Work With Us →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
