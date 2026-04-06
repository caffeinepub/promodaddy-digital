import { motion } from "motion/react";

const ROW_ONE_BASE = [
  "Adidas",
  "Reliance Industries",
  "Hyundai",
  "Amazon India",
  "Tata Group",
  "HDFC Bank",
  "Zomato",
  "Dream11",
  "Nykaa",
  "boAt",
  "Byju's",
  "OYO",
];

const ROW_TWO_BASE = [
  "Nike",
  "Paytm",
  "MakeMyTrip",
  "Flipkart",
  "Asian Paints",
  "Airtel",
  "Amul",
  "Maruti Suzuki",
  "ICICI Bank",
  "Jio",
  "PhonePe",
  "Meesho",
];

const ROW_ONE = [
  ...ROW_ONE_BASE.map((n, i) => ({ id: `r1a-${i}`, name: n })),
  ...ROW_ONE_BASE.map((n, i) => ({ id: `r1b-${i}`, name: n })),
  ...ROW_ONE_BASE.map((n, i) => ({ id: `r1c-${i}`, name: n })),
];

const ROW_TWO = [
  ...ROW_TWO_BASE.map((n, i) => ({ id: `r2a-${i}`, name: n })),
  ...ROW_TWO_BASE.map((n, i) => ({ id: `r2b-${i}`, name: n })),
  ...ROW_TWO_BASE.map((n, i) => ({ id: `r2c-${i}`, name: n })),
];

export function OurPartners() {
  return (
    <section
      id="partners"
      className="py-20 relative overflow-hidden"
      style={{ background: "#060b16" }}
      data-ocid="partners.section"
    >
      {/* Diagonal line pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            #FFBA08 0px,
            #FFBA08 1px,
            transparent 1px,
            transparent 40px
          )`,
        }}
      />

      {/* Gold border top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,186,8,0.4) 30%, rgba(255,186,8,0.4) 70%, transparent 100%)",
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[30vw] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,186,8,0.04) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p
            className="text-[#FFBA08] text-xs font-bold uppercase tracking-[0.35em] mb-4"
            style={{ letterSpacing: "0.35em" }}
          >
            ✦ Clients &amp; Partners ✦
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
            Brands That{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #FFBA08 0%, #FFE066 50%, #FFBA08 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Trust Us
            </span>
          </h2>
          <p className="text-white/40 mt-3 text-sm md:text-base max-w-xl mx-auto">
            India's fastest-growing brands partner with PromoDaddy for
            performance-driven growth.
          </p>
        </motion.div>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative overflow-hidden mb-4">
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(90deg, #060b16 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(270deg, #060b16 0%, transparent 100%)",
          }}
        />
        <div className="marquee-track">
          {ROW_ONE.map((item) => (
            <span
              key={item.id}
              className="group inline-flex items-center border border-[rgba(255,186,8,0.2)] bg-[rgba(255,186,8,0.03)] px-6 py-3 rounded-full text-white/60 font-bold text-sm tracking-wider whitespace-nowrap mx-3 transition-all duration-300 hover:border-[#FFBA08] hover:text-white hover:bg-[rgba(255,186,8,0.07)] cursor-default"
              style={{ backdropFilter: "blur(4px)" }}
            >
              {item.name}
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative overflow-hidden">
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(90deg, #060b16 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(270deg, #060b16 0%, transparent 100%)",
          }}
        />
        <div className="marquee-track-reverse">
          {ROW_TWO.map((item) => (
            <span
              key={item.id}
              className="group inline-flex items-center border border-[rgba(255,186,8,0.15)] bg-[rgba(255,186,8,0.02)] px-6 py-3 rounded-full text-white/50 font-bold text-sm tracking-wider whitespace-nowrap mx-3 transition-all duration-300 hover:border-[#FFBA08] hover:text-white hover:bg-[rgba(255,186,8,0.06)] cursor-default"
              style={{ backdropFilter: "blur(4px)" }}
            >
              {item.name}
            </span>
          ))}
        </div>
      </div>

      {/* Gold border bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,186,8,0.3) 30%, rgba(255,186,8,0.3) 70%, transparent 100%)",
        }}
      />
    </section>
  );
}
