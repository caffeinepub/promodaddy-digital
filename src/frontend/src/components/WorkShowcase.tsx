import { motion } from "motion/react";
import { useRef } from "react";

const PROJECTS = [
  {
    id: "kyaa-baat",
    title: "Kyaa Baat Haii 2.0",
    tag: "YouTube Campaign",
    result: "93M+ Views Generated",
    bg: "from-orange-900/60",
  },
  {
    id: "sonu-sood",
    title: "Sonu Sood",
    tag: "Celebrity Brand Management",
    result: "National-Level Digital PR",
    bg: "from-blue-900/60",
  },
  {
    id: "shami",
    title: "Mohammad Shami",
    tag: "Sports Marketing",
    result: "Cricket Brand Growth",
    bg: "from-green-900/60",
  },
  {
    id: "kota-coaching",
    title: "Kota Coaching Campaign",
    tag: "Performance Ads",
    result: "10x Lead Increase",
    bg: "from-purple-900/60",
  },
  {
    id: "glamour-award",
    title: "Glamour Award 2024",
    tag: "PR Campaign",
    result: "Best Social Media PR",
    bg: "from-pink-900/60",
  },
  {
    id: "ecommerce",
    title: "E-commerce Brand",
    tag: "Full Digital Setup",
    result: "3M+ Leads Generated",
    bg: "from-teal-900/60",
  },
];

export function WorkShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="work" className="py-24 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[#F26A21] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our Latest Work
          </h2>
        </motion.div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto px-6 pb-4"
        style={{ scrollbarWidth: "none" }}
      >
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ scale: 1.02 }}
            className="flex-none w-72 md:w-80 bg-[#1a1a1a] rounded overflow-hidden group"
            data-ocid={`work.item.${i + 1}`}
          >
            <div
              className={`h-48 bg-gradient-to-b ${project.bg} to-[#1a1a1a] relative`}
            >
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
              <div className="absolute top-0 left-0 w-full h-0.5 bg-[#F26A21] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
            <div className="p-6">
              <span className="text-[#F26A21] text-xs font-semibold uppercase tracking-widest">
                {project.tag}
              </span>
              <h3 className="text-white font-bold text-xl mt-2 mb-3">
                {project.title}
              </h3>
              <p className="text-white/40 text-sm">{project.result}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
