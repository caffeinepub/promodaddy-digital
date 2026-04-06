import { motion } from "motion/react";

const AWARDS = [
  {
    id: "glamour-2024",
    year: "2024",
    title: "Glamour & Lifestyle Award",
    subtitle: "Best Social Media PR",
  },
  {
    id: "youtube-93m",
    year: "2023",
    title: "93M+ YouTube Views",
    subtitle: "Kyaa Baat Haii 2.0 Campaign",
  },
  {
    id: "reviews-1600",
    year: "2024",
    title: "1600+ Five-Star Reviews",
    subtitle: "Consistent 5.0 Google Rating",
  },
  {
    id: "projects-5000",
    year: "2016",
    title: "5000+ Projects Delivered",
    subtitle: "Since 2016",
  },
  {
    id: "celebrity-clients",
    year: "2024",
    title: "National-Level Celebrity Clients",
    subtitle: "Sonu Sood, Mohammad Shami, Rashid Khan",
  },
  {
    id: "india-no1",
    year: "2024",
    title: "India's #1 Digital Agency from Kota",
    subtitle: "12+ Years Experience",
  },
];

export function Awards() {
  return (
    <section className="py-24 bg-[#080D1A] border-t border-[rgba(255,186,8,0.08)]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[#FFBA08] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Recognition
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Awards &amp; Achievements
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(255,186,8,0.04)]">
          {AWARDS.map((award, i) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              className="bg-[#080D1A] p-8 group hover:bg-[#0D1426] transition-all duration-300"
              style={{ cursor: "default" }}
              whileHover={{
                boxShadow:
                  "0 0 30px rgba(255,186,8,0.15), inset 0 0 30px rgba(255,186,8,0.03)",
              }}
              data-ocid={`awards.item.${i + 1}`}
            >
              <div className="h-0.5 w-8 bg-[#FFBA08] mb-6 group-hover:w-16 transition-all duration-300" />
              <span className="text-[#FFBA08] text-xs font-semibold uppercase tracking-widest">
                {award.year}
              </span>
              <h3 className="text-white font-bold text-xl mt-3 mb-2 group-hover:text-[#FFBA08] transition-colors">
                {award.title}
              </h3>
              <p className="text-white/40 text-sm">{award.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
