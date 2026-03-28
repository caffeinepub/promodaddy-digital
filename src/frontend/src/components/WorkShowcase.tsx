import { motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

const PROJECTS = [
  {
    id: "kyaa-baat",
    title: "Kyaa Baat Haii 2.0",
    tag: "YouTube Campaign",
    resultBig: "93M+",
    resultLabel: "VIEWS GENERATED",
    accent: "#FFBA08",
    image: "/assets/generated/celebrity-sonu-sood.dim_400x500.jpg",
    client: "Entertainment",
  },
  {
    id: "sonu-sood",
    title: "Sonu Sood",
    tag: "Celebrity Brand Management",
    resultBig: "10X",
    resultLabel: "REACH GROWTH",
    accent: "#ffffff",
    image: "/assets/generated/celebrity-sonu-sood.dim_400x500.jpg",
    client: "Celebrity",
  },
  {
    id: "kota-coaching",
    title: "Kota Coaching Drive",
    tag: "Performance Ads",
    resultBig: "3M+",
    resultLabel: "LEADS GENERATED",
    accent: "#FFBA08",
    image: "/assets/generated/celebrity-rashid-khan.dim_400x500.jpg",
    client: "Education",
  },
  {
    id: "shami",
    title: "Mohammad Shami",
    tag: "Sports Marketing",
    resultBig: "50X",
    resultLabel: "ENGAGEMENT BOOST",
    accent: "#ffffff",
    image: "/assets/generated/celebrity-shami.dim_400x500.jpg",
    client: "Cricket",
  },
  {
    id: "ecommerce",
    title: "E-commerce Brand",
    tag: "Full Digital Setup",
    resultBig: "5X",
    resultLabel: "SALES INCREASE",
    accent: "#FFBA08",
    image: "/assets/generated/celebrity-ab-devilliers.dim_400x500.jpg",
    client: "E-commerce",
  },
];

function ProjectCard({
  project,
  isActive,
  onCardClick,
}: {
  project: (typeof PROJECTS)[0];
  isActive: boolean;
  onCardClick: () => void;
}) {
  return (
    <div
      className={`flex-none transition-all duration-500 ${
        isActive
          ? "w-[55vw] max-w-[580px]"
          : "w-[26vw] max-w-[280px] cursor-pointer opacity-50 hover:opacity-70"
      }`}
      onClick={!isActive ? onCardClick : undefined}
      onKeyDown={
        !isActive
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") onCardClick();
            }
          : undefined
      }
      role={!isActive ? "button" : undefined}
      tabIndex={!isActive ? 0 : undefined}
    >
      <div
        className="relative bg-[#0D1426] overflow-hidden"
        style={{ aspectRatio: "9/16", maxHeight: "70vh" }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {isActive && (
          <div className="absolute top-4 left-4">
            <span className="bg-[#FFBA08] text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1">
              {project.tag}
            </span>
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-white/60 text-[10px] uppercase tracking-widest font-bold mb-1">
            @promodaddy.in
          </p>
          <p className="text-white font-bold text-sm">{project.title}</p>
        </div>
      </div>
      {isActive && (
        <p className="mt-3 text-[#FFBA08] text-xs font-semibold uppercase tracking-widest">
          {project.tag}
        </p>
      )}
    </div>
  );
}

export function WorkShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % PROJECTS.length);
    }, 3500);
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [startAutoPlay]);

  const goNext = () => {
    setActiveIndex((i) => (i + 1) % PROJECTS.length);
    startAutoPlay();
  };
  const goPrev = () => {
    setActiveIndex((i) => (i - 1 + PROJECTS.length) % PROJECTS.length);
    startAutoPlay();
  };

  const prev = PROJECTS[(activeIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const curr = PROJECTS[activeIndex];
  const next = PROJECTS[(activeIndex + 1) % PROJECTS.length];

  return (
    <section
      id="work"
      className="py-24 bg-[#080D1A] border-t border-[rgba(255,186,8,0.08)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[#FFBA08] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-none">
            Our Latest
            <br />
            Work
          </h2>
        </motion.div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={goPrev}
            className="w-12 h-12 border border-[rgba(255,186,8,0.3)] flex items-center justify-center text-white hover:border-[#FFBA08] hover:text-[#FFBA08] transition-colors"
            aria-label="Previous"
          >
            &#8592;
          </button>
          <button
            type="button"
            onClick={goNext}
            className="w-12 h-12 border border-[rgba(255,186,8,0.3)] flex items-center justify-center text-white hover:border-[#FFBA08] hover:text-[#FFBA08] transition-colors"
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>
      </div>

      <div className="relative flex items-center justify-center gap-8 px-8">
        <motion.div
          key={`left-${activeIndex}`}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex flex-col items-start flex-none w-40 select-none"
        >
          <span
            className="text-7xl lg:text-8xl font-black leading-none"
            style={{ color: prev.accent }}
          >
            {prev.resultBig}
          </span>
          <span className="text-white font-black text-2xl lg:text-3xl leading-tight mt-1">
            {prev.resultLabel}
          </span>
        </motion.div>

        <div className="flex items-center gap-4 overflow-hidden">
          <div className="transition-all duration-500">
            <ProjectCard project={prev} isActive={false} onCardClick={goPrev} />
          </div>

          <motion.div
            key={`active-${activeIndex}`}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <ProjectCard
              project={curr}
              isActive={true}
              onCardClick={() => {}}
            />
          </motion.div>

          <div className="transition-all duration-500">
            <ProjectCard project={next} isActive={false} onCardClick={goNext} />
          </div>
        </div>

        <motion.div
          key={`right-${activeIndex}`}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex flex-col items-start flex-none w-40 select-none"
        >
          <span
            className="text-7xl lg:text-8xl font-black leading-none"
            style={{ color: next.accent }}
          >
            {next.resultBig}
          </span>
          <span className="text-white font-black text-2xl lg:text-3xl leading-tight mt-1">
            {next.resultLabel}
          </span>
        </motion.div>
      </div>

      <div className="flex justify-center gap-2 mt-10">
        {PROJECTS.map((p, i) => (
          <button
            key={p.id}
            type="button"
            onClick={() => {
              setActiveIndex(i);
              startAutoPlay();
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === activeIndex ? "bg-[#FFBA08] w-8" : "bg-white/20 w-2"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <a
          href="/projects"
          data-ocid="work.projects.link"
          className="border border-[#FFBA08] text-[#FFBA08] hover:bg-[#FFBA08] hover:text-white font-semibold px-8 py-3 text-sm uppercase tracking-widest transition-all"
        >
          View All Projects →
        </a>
      </div>
    </section>
  );
}
