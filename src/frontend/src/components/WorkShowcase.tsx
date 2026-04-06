import { motion } from "motion/react";

const CASE_STUDIES = [
  {
    id: "kyaa-baat",
    gradient: "from-[#0D1426] to-[#1a1400]",
    category: "YouTube Marketing",
    categoryColor: "#FFBA08",
    metric: "93M+",
    metricLabel: "VIEWS IN 24 HOURS",
    industry: "Entertainment Industry",
    title: "Kyaa Baat Haii 2.0",
    description:
      "Viral launch campaign achieving 93M+ views in the first 24 hours — record-breaking organic reach.",
    accentBorder: "rgba(255,186,8,0.4)",
    large: true,
  },
  {
    id: "shami",
    gradient: "from-[#0D1426] to-[#0d1a14]",
    category: "Celebrity PR",
    categoryColor: "#4ade80",
    metric: "50X",
    metricLabel: "ENGAGEMENT BOOST",
    industry: "Cricket / Sports",
    title: "Mohammad Shami",
    description:
      "End-to-end celebrity PR strategy driving 50X engagement across social platforms during IPL season.",
    accentBorder: "rgba(74,222,128,0.3)",
    large: true,
  },
  {
    id: "kota-coaching",
    gradient: "from-[#0D1426] to-[#1a0d2e]",
    category: "Google Ads",
    categoryColor: "#a78bfa",
    metric: "3M+",
    metricLabel: "LEADS GENERATED",
    industry: "Education",
    title: "Kota Coaching Drive",
    description:
      "Performance Google Ads campaign for Kota coaching institutes generating 3M+ qualified student leads.",
    accentBorder: "rgba(167,139,250,0.3)",
    large: false,
  },
  {
    id: "real-estate",
    gradient: "from-[#0D1426] to-[#1a1000]",
    category: "Meta Ads",
    categoryColor: "#fb923c",
    metric: "5X",
    metricLabel: "SALES GROWTH",
    industry: "Real Estate",
    title: "Real Estate Brand",
    description:
      "Hyper-targeted Meta Ads delivering 5X sales growth within 90 days for a premium real estate developer.",
    accentBorder: "rgba(251,146,60,0.3)",
    large: false,
  },
  {
    id: "sonu-sood",
    gradient: "from-[#0D1426] to-[#1a1400]",
    category: "Celebrity Brand Mgmt",
    categoryColor: "#FFBA08",
    metric: "10X",
    metricLabel: "REACH GROWTH",
    industry: "Celebrity",
    title: "Sonu Sood Campaign",
    description:
      "360° digital brand management for Sonu Sood resulting in 10X organic reach and brand recall across India.",
    accentBorder: "rgba(255,186,8,0.35)",
    large: false,
  },
  {
    id: "ecom-launch",
    gradient: "from-[#0D1426] to-[#0a1a1a]",
    category: "Social Media",
    categoryColor: "#22d3ee",
    metric: "2X",
    metricLabel: "REVENUE IN 3 MONTHS",
    industry: "E-commerce",
    title: "E-commerce Launch",
    description:
      "Full-funnel social media strategy doubling e-commerce revenue within 3 months of launch.",
    accentBorder: "rgba(34,211,238,0.3)",
    large: false,
  },
];

function CaseStudyCard({
  study,
  index,
}: {
  study: (typeof CASE_STUDIES)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      whileHover={{ scale: 1.02 }}
      className={`group relative bg-gradient-to-br ${study.gradient} rounded-2xl overflow-hidden cursor-default ${
        study.large ? "md:col-span-1 md:row-span-2" : ""
      }`}
      style={{
        border: `1px solid ${study.accentBorder}`,
        boxShadow: `0 0 0 0 ${study.accentBorder}`,
        transition: "box-shadow 0.3s ease",
      }}
      data-ocid={`work.item.${index + 1}`}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          `0 0 30px ${study.accentBorder}, 0 0 60px ${study.accentBorder.replace("0.4", "0.15").replace("0.3", "0.1").replace("0.35", "0.12")}`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          `0 0 0 0 ${study.accentBorder}`;
      }}
    >
      {/* Top section */}
      <div className={`p-6 ${study.large ? "pb-4" : "pb-3"}`}>
        {/* Category badge */}
        <div className="flex items-center justify-between mb-4">
          <span
            className="text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full"
            style={{
              color: study.categoryColor,
              background: `${study.categoryColor}15`,
              border: `1px solid ${study.categoryColor}35`,
            }}
          >
            {study.category}
          </span>
          <span className="text-white/20 text-xs font-mono">
            #{String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Big metric */}
        <div className={`${study.large ? "mb-3" : "mb-2"}`}>
          <span
            className={`font-black leading-none block ${
              study.large ? "text-6xl md:text-7xl" : "text-5xl md:text-6xl"
            }`}
            style={{ color: study.categoryColor }}
          >
            {study.metric}
          </span>
          <span className="text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase mt-1 block">
            {study.metricLabel}
          </span>
        </div>

        {/* Industry + title */}
        <div className="mb-3">
          <p
            className="text-[11px] font-semibold uppercase tracking-widest mb-1"
            style={{ color: study.categoryColor }}
          >
            {study.industry}
          </p>
          <h3 className="text-white font-black text-lg md:text-xl leading-tight">
            {study.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-white/45 text-sm leading-relaxed line-clamp-2">
          {study.description}
        </p>
      </div>

      {/* Gold accent line at bottom */}
      <div
        className="h-[2px] w-full"
        style={{
          background: `linear-gradient(90deg, ${study.categoryColor} 0%, transparent 100%)`,
          opacity: 0.5,
        }}
      />

      {/* Hover shimmer overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at top left, ${study.categoryColor}08 0%, transparent 60%)`,
        }}
      />
    </motion.div>
  );
}

export function WorkShowcase() {
  return (
    <section
      id="work"
      className="py-24 bg-[#080D1A] border-t border-[rgba(255,186,8,0.08)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-4"
        >
          <span
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.25em] text-[#FFBA08] px-4 py-2 rounded-full mb-6"
            style={{
              background: "rgba(255,186,8,0.08)",
              border: "1px solid rgba(255,186,8,0.25)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFBA08] inline-block" />
            Our Latest Work
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-none tracking-tight">
              Results That
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #FFBA08 0%, #FFE47A 50%, #FFBA08 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Speak
              </span>
            </h2>
          </div>
          <p className="text-white/45 text-base md:text-lg max-w-sm md:text-right leading-relaxed">
            5000+ campaigns.{" "}
            <span className="text-white/70 font-semibold">Real brands.</span>{" "}
            Measurable outcomes.
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-auto">
          {/* Large card 1 - spans 2 rows on desktop */}
          <div className="md:row-span-2">
            <CaseStudyCard study={CASE_STUDIES[0]} index={0} />
          </div>

          {/* Small cards 3, 4 in column 2 */}
          <CaseStudyCard study={CASE_STUDIES[2]} index={2} />
          <CaseStudyCard study={CASE_STUDIES[3]} index={3} />

          {/* Large card 2 - spans 2 rows on desktop in column 3 */}
          <div className="md:row-span-2 md:col-start-3 md:row-start-1">
            <CaseStudyCard study={CASE_STUDIES[1]} index={1} />
          </div>

          {/* Small cards 5, 6 in column 2 row 2 */}
          <CaseStudyCard study={CASE_STUDIES[4]} index={4} />
          <CaseStudyCard study={CASE_STUDIES[5]} index={5} />
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-12 pt-10 border-t border-[rgba(255,186,8,0.1)]"
        >
          <p className="text-white/40 text-sm">
            Every campaign is tracked, measured, and optimized for maximum ROI.
          </p>
          <a
            href="/projects"
            data-ocid="work.projects.link"
            className="group inline-flex items-center gap-3 border border-[#FFBA08] text-[#FFBA08] hover:bg-[#FFBA08] hover:text-[#080D1A] font-black px-8 py-4 text-sm uppercase tracking-widest transition-all duration-200 hover:scale-105"
            style={{ boxShadow: "0 0 0 0 rgba(255,186,8,0.4)" }}
          >
            View All Projects
            <span className="text-lg group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
