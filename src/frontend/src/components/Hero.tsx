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
  { value: "5000+", label: "Successful Projects" },
  { value: "1600+", label: "Google Reviews" },
  { value: "5.0 ⭐", label: "Google Rating" },
  { value: "12+", label: "Years Experience" },
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

    const particles: Particle[] = Array.from({ length: 90 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -(Math.random() * 0.4 + 0.1),
      opacity: Math.random() * 0.25 + 0.05,
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

function WhatsAppIcon() {
  return (
    <svg
      role="img"
      aria-label="WhatsApp"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <title>WhatsApp</title>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-[#080D1A]"
    >
      {/* Gold shimmer keyframes */}
      <style>{`
        @keyframes goldShimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .gold-shimmer {
          background: linear-gradient(
            90deg,
            #FFBA08 0%,
            #FFE066 30%,
            #FFF0A0 50%,
            #FFE066 70%,
            #FFBA08 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: goldShimmer 3.5s linear infinite;
        }
        @keyframes pulseGold {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,186,8,0.3); }
          50% { box-shadow: 0 0 0 8px rgba(255,186,8,0); }
        }
        .pulse-gold {
          animation: pulseGold 2.5s ease-in-out infinite;
        }
      `}</style>

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
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#FFBA08] pulse-gold inline-block" />
            <p className="text-[#FFBA08] text-sm font-semibold uppercase tracking-[0.2em]">
              India's #1 Digital Marketing Agency
            </p>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="font-black text-white leading-[1.05] tracking-tight mb-6"
            style={{
              fontSize: "clamp(2.4rem, 6.5vw, 7rem)",
              textShadow:
                "0 0 60px rgba(255,186,8,0.2), 0 0 120px rgba(255,186,8,0.08)",
            }}
          >
            Digital Marketing Agency
            <br />
            in India
            <br />
            <span className="gold-shimmer">
              Trusted by Bollywood Stars &amp; Cricketers
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white/65 text-lg md:text-xl max-w-2xl mb-5 leading-relaxed"
          >
            From Kota to the whole of India, we deliver results-driven digital
            marketing services that generate real leads, real revenue, and
            scalable growth.
          </motion.p>

          {/* Location tag */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <span
              className="text-sm text-[#FFBA08]/90 font-medium px-4 py-1.5 rounded-full border border-[#FFBA08]/30"
              style={{ background: "rgba(255,186,8,0.07)" }}
            >
              📍 Serving: Kota | Jaipur | Delhi | Mumbai | Pan India
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-wrap gap-4 items-center mb-4"
          >
            <a
              href="#contact"
              data-ocid="hero.primary_button"
              className="inline-flex items-center gap-2 bg-[#FFBA08] hover:bg-[#E0A800] text-[#080D1A] font-bold px-8 py-4 text-sm uppercase tracking-widest transition-all duration-200 hover:scale-105 active:scale-100"
              style={{ boxShadow: "0 4px 24px rgba(255,186,8,0.35)" }}
            >
              Get Free Consultation
            </a>
            <a
              href="https://wa.me/918690522210"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="hero.secondary_button"
              className="inline-flex items-center gap-2 border border-[#FFBA08]/60 text-white hover:border-[#FFBA08] hover:text-[#FFBA08] font-bold px-8 py-4 text-sm uppercase tracking-widest transition-all duration-200 hover:scale-105 active:scale-100"
              style={{ background: "rgba(255,186,8,0.05)" }}
            >
              <WhatsAppIcon />
              WhatsApp Us Now
            </a>
          </motion.div>

          {/* Trust line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-white/40 text-sm"
          >
            Trusted by Sonu Sood, Mohammad Shami &amp; 5000+ brands across India
          </motion.p>
        </motion.div>
      </div>

      {/* Stats strip */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            data-ocid={`hero.stat.item.${i + 1}`}
            className="group"
          >
            <div
              className="text-3xl md:text-5xl font-black text-white group-hover:text-[#FFBA08] transition-colors duration-300"
              style={{ textShadow: "0 0 20px rgba(255,186,8,0.3)" }}
            >
              {stat.value}
            </div>
            <div className="text-white/40 text-xs mt-1 uppercase tracking-widest">
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
