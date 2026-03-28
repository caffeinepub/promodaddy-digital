import { motion } from "motion/react";
import { useEffect, useRef } from "react";

const TICKER_ITEMS = [
  "SEO",
  "GOOGLE ADS",
  "YOUTUBE ADS",
  "SOCIAL MEDIA",
  "BRANDING",
  "CONTENT",
  "LEAD GENERATION",
  "PR",
  "WEBSITE DEVELOPMENT",
];

const ALL_TICKER = [
  ...TICKER_ITEMS.map((t) => ({ id: `a-${t}`, text: t })),
  ...TICKER_ITEMS.map((t) => ({ id: `b-${t}`, text: t })),
];

const STATS = [
  { value: "5000+", label: "Projects" },
  { value: "1600+", label: "Reviews" },
  { value: "5.0", label: "Google Rating" },
  { value: "8+", label: "Years" },
];

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    type Particle = {
      x: number;
      y: number;
      r: number;
      vx: number;
      vy: number;
      opacity: number;
      color: string;
    };

    const particles: Particle[] = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -(Math.random() * 0.4 + 0.1),
      opacity: Math.random() * 0.2 + 0.05,
      color:
        Math.random() > 0.8
          ? "100, 130, 255"
          : Math.random() > 0.5
            ? "255, 186, 8"
            : "255, 255, 255",
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.y < -5) p.y = canvas.height + 5;
        if (p.x < -5) p.x = canvas.width + 5;
        if (p.x > canvas.width + 5) p.x = -5;
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "none" }}
    />
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-[#080D1A]"
    >
      {/* Animated background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <ParticleCanvas />

        {/* Blurred gradient orbs */}
        <div
          className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,186,8,0.12) 0%, transparent 70%)",
            filter: "blur(60px)",
            animation: "orbDrift1 12s ease-in-out infinite alternate",
          }}
        />
        <div
          className="absolute top-[20%] right-[-10%] w-[35vw] h-[35vw] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(80,100,255,0.08) 0%, transparent 70%)",
            filter: "blur(80px)",
            animation: "orbDrift2 15s ease-in-out infinite alternate",
          }}
        />
        <div
          className="absolute bottom-[10%] left-[30%] w-[30vw] h-[30vw] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,160,60,0.07) 0%, transparent 70%)",
            filter: "blur(70px)",
            animation: "orbDrift3 18s ease-in-out infinite alternate",
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-[#FFBA08] text-sm font-semibold uppercase tracking-[0.2em] mb-6">
            India's #1 Digital Marketing Agency
          </p>
          <h1
            className="font-black text-white leading-[0.9] tracking-tight mb-8"
            style={{
              fontSize: "clamp(3.5rem, 10vw, 9rem)",
              textShadow:
                "0 0 60px rgba(255,186,8,0.25), 0 0 120px rgba(255,186,8,0.1)",
            }}
          >
            We Make,
            <br />
            <span className="text-white/30">Creative Things</span>
            <br />
            Everyday
          </h1>
          <p className="text-white/60 text-lg max-w-xl mb-10">
            Trusted by Sonu Sood, Mohammad Shami &amp; 5000+ brands across India
          </p>
          <a
            href="#contact"
            data-ocid="hero.consultation.button"
            className="inline-block bg-[#FFBA08] hover:bg-[#E0A800] text-white font-bold px-8 py-4 text-sm uppercase tracking-widest transition-colors"
          >
            Get Free Consultation
          </a>
        </motion.div>
      </div>

      {/* Stats strip */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {STATS.map((stat, i) => (
          <div key={stat.label} data-ocid={`hero.stat.item.${i + 1}`}>
            <div
              className="text-4xl md:text-5xl font-bold text-white"
              style={{ textShadow: "0 0 20px rgba(255,186,8,0.3)" }}
            >
              {stat.value}
            </div>
            <div className="text-white/40 text-sm mt-1 uppercase tracking-widest">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Ticker */}
      <div className="relative z-10 border-t border-[rgba(255,186,8,0.12)] py-4 overflow-hidden bg-[#080D1A]/40 backdrop-blur-sm">
        <div className="marquee-track-fast">
          {ALL_TICKER.map((item) => (
            <span
              key={item.id}
              className="text-sm font-semibold tracking-widest text-white/40 mx-8 whitespace-nowrap"
            >
              {item.text} <span className="text-[#FFBA08] mx-2">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
