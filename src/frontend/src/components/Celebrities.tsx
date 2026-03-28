import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

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
    name: "Jaya Kishori",
    role: "Devotional Singer & Speaker",
    category: "Spiritual",
    collab: "Fan Engagement & Content",
    image: "/assets/generated/celebrity-jaya-kishori.dim_400x500.jpg",
  },
  {
    name: "Rashid Khan",
    role: "Afghanistan Cricket – Spinner",
    category: "Cricket",
    collab: "Digital Presence & PR",
    image: "/assets/generated/celebrity-rashid-khan.dim_400x500.jpg",
  },
  {
    name: "AB de Villiers",
    role: "South Africa Cricket – Batsman",
    category: "International",
    collab: "Global Brand Strategy",
    image: "/assets/generated/celebrity-ab-devilliers.dim_400x500.jpg",
  },
  {
    name: "Quinton de Kock",
    role: "South Africa Cricket – WK Batsman",
    category: "International",
    collab: "Digital Media & Growth",
    image: "/assets/generated/celebrity-quinton-decock.dim_400x500.jpg",
  },
];

const INTERVAL = 3500;

export function Celebrities() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = CELEBRITIES.length;

  const resetProgress = useCallback(() => {
    setProgress(0);
    if (progressRef.current) clearInterval(progressRef.current);
    progressRef.current = setInterval(() => {
      setProgress((p) => Math.min(p + 100 / (INTERVAL / 50), 100));
    }, 50);
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % total);
    resetProgress();
  }, [total, resetProgress]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + total) % total);
    resetProgress();
  }, [total, resetProgress]);

  const goTo = useCallback(
    (idx: number) => {
      setCurrent(idx);
      resetProgress();
    },
    [resetProgress],
  );

  useEffect(() => {
    resetProgress();
    timerRef.current = setInterval(next, INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [next, resetProgress]);

  const handleNav = (fn: () => void) => {
    if (timerRef.current) clearInterval(timerRef.current);
    fn();
    timerRef.current = setInterval(next, INTERVAL);
  };

  const onDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    dragStartX.current = "touches" in e ? e.touches[0].clientX : e.clientX;
  };
  const onDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    const endX =
      "changedTouches" in e ? e.changedTouches[0].clientX : e.clientX;
    const diff = dragStartX.current - endX;
    if (Math.abs(diff) > 50) {
      handleNav(diff > 0 ? next : prev);
    }
  };

  const getVisibleIndices = () => {
    const indices: number[] = [];
    for (let i = -2; i <= 2; i++) {
      indices.push((current + i + total) % total);
    }
    return indices;
  };

  const visibleIndices = getVisibleIndices();

  return (
    <section className="py-24 bg-[#080D1A] overflow-hidden" id="celebrities">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-[#FFBA08]" />
            <span className="text-[#FFBA08] text-xs font-semibold uppercase tracking-[0.3em]">
              Celebrity Partnerships
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
            Trusted by <span className="text-[#FFBA08]">India's Biggest</span>
            <br />
            Names
          </h2>
          <p className="text-white/50 text-lg max-w-2xl">
            When Bollywood stars, national cricketers, and international legends
            trust PromoDaddy — you know you're in the right hands.
          </p>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative select-none cursor-grab active:cursor-grabbing"
          onMouseDown={onDragStart}
          onMouseUp={onDragEnd}
          onTouchStart={onDragStart}
          onTouchEnd={onDragEnd}
          data-ocid="celebrities.panel"
        >
          <div className="flex items-center justify-center gap-4 md:gap-6 h-[480px] md:h-[560px]">
            {visibleIndices.map((celIdx, pos) => {
              const isActive = pos === 2;
              const isAdjacent = pos === 1 || pos === 3;
              const celebrity = CELEBRITIES[celIdx];
              return (
                <motion.div
                  key={CELEBRITIES[celIdx].name}
                  className={`relative overflow-hidden flex-shrink-0 transition-all duration-500 ${
                    isActive
                      ? "w-[260px] md:w-[300px] h-[420px] md:h-[480px] z-20"
                      : isAdjacent
                        ? "w-[200px] md:w-[240px] h-[360px] md:h-[420px] z-10"
                        : "w-[150px] md:w-[180px] h-[300px] md:h-[340px] z-0 hidden md:block"
                  }`}
                  style={{
                    opacity: isActive ? 1 : isAdjacent ? 0.65 : 0.35,
                    boxShadow: isActive
                      ? "0 0 40px rgba(255,186,8,0.5), 0 0 80px rgba(255,186,8,0.2)"
                      : "none",
                    transform: isActive ? "scale(1.05)" : "scale(1)",
                  }}
                  onClick={() => !isDragging && handleNav(() => goTo(celIdx))}
                  data-ocid={`celebrities.item.${pos + 1}`}
                >
                  <img
                    src={celebrity.image}
                    alt={celebrity.name}
                    className="w-full h-full object-cover"
                    draggable={false}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#FFBA08] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1">
                      {celebrity.category}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-base leading-tight">
                      {celebrity.name}
                    </h3>
                    <p className="text-white/60 text-xs mt-0.5">
                      {celebrity.role}
                    </p>
                    {isActive && (
                      <p className="text-[#FFBA08] text-xs font-semibold mt-1 uppercase tracking-wide">
                        {celebrity.collab}
                      </p>
                    )}
                  </div>
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10">
                      <div
                        className="h-full bg-[#FFBA08] transition-none"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => handleNav(prev)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-11 h-11 border border-[rgba(255,186,8,0.3)] hover:border-[#FFBA08] text-white/60 hover:text-[#FFBA08] flex items-center justify-center transition-all duration-300 bg-[#080D1A]/50 backdrop-blur-sm"
            data-ocid="celebrities.pagination_prev"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => handleNav(next)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-11 h-11 border border-[rgba(255,186,8,0.3)] hover:border-[#FFBA08] text-white/60 hover:text-[#FFBA08] flex items-center justify-center transition-all duration-300 bg-[#080D1A]/50 backdrop-blur-sm"
            data-ocid="celebrities.pagination_next"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {CELEBRITIES.map((_, i) => (
            <button
              type="button"
              key={CELEBRITIES[i].name}
              onClick={() => handleNav(() => goTo(i))}
              className={`transition-all duration-300 ${
                i === current
                  ? "w-8 h-1.5 bg-[#FFBA08]"
                  : "w-1.5 h-1.5 rounded-full bg-white/20 hover:bg-white/40"
              }`}
              data-ocid="celebrities.tab"
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-12 border-t border-[rgba(255,186,8,0.12)] flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-white/40 text-sm">
            Trusted by{" "}
            <span className="text-white font-semibold">5000+ brands</span> and{" "}
            <span className="text-[#FFBA08] font-semibold">
              India's biggest celebrities
            </span>
          </p>
          <a
            href="#contact"
            className="text-sm font-semibold text-[#FFBA08] border border-[#FFBA08] px-5 py-2 hover:bg-[#FFBA08] hover:text-white transition-all duration-300"
            data-ocid="celebrities.primary_button"
          >
            Work With Us →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
