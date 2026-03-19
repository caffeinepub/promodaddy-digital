import { Button } from "@/components/ui/button";
import { Award, Briefcase, Clock, Star } from "lucide-react";
import { motion } from "motion/react";
import { useStats } from "../hooks/useQueries";

const STAT_ICONS = [Briefcase, Star, Award, Clock];

export function Hero() {
  const { data: stats } = useStats();

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/generated/hero-bg.dim_1440x700.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F3A]/85 via-[#1a3a6e]/75 to-[#2B6FEA]/60" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block bg-[#F26A21]/20 text-[#F26A21] border border-[#F26A21]/40 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            🏆 India's #1 Digital Marketing Agency
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            We Make Creative Things
            <br />
            <span className="text-[#2B6FEA] drop-shadow-lg">Everyday</span>
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            From Kota to the whole of India — PromoDaddy Digital powers brands
            with cutting-edge SEO, Google Ads, YouTube campaigns, and social
            media strategies that deliver real growth.
          </p>
          <Button
            size="lg"
            className="bg-[#2B6FEA] hover:bg-[#1a5bd4] text-white font-bold px-10 py-6 text-base rounded-full shadow-2xl"
            asChild
            data-ocid="hero.consultation.button"
          >
            <a href="#contact">GET FREE CONSULTATION</a>
          </Button>
        </motion.div>

        {/* Stat cards */}
        <motion.div
          className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {(stats ?? []).slice(0, 4).map((stat, i) => {
            const Icon = STAT_ICONS[i % STAT_ICONS.length];
            return (
              <div
                key={stat.id.toString()}
                className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-2xl p-5 text-white"
                data-ocid={`hero.stat.item.${i + 1}`}
              >
                <Icon size={22} className="text-[#F26A21] mb-2 mx-auto" />
                <div className="text-3xl font-black">{stat.value}</div>
                <div className="text-sm text-blue-200 mt-1">
                  {stat.textLabel}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
