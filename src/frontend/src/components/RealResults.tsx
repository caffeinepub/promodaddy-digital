import { Button } from "@/components/ui/button";
import { Briefcase, Star, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

const KPI_CARDS = [
  {
    icon: TrendingUp,
    value: "93M+",
    label: "YouTube Views Generated",
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    icon: Star,
    value: "160+",
    label: "5-Star Google Reviews",
    color: "text-yellow-500",
    bg: "bg-yellow-50",
  },
  {
    icon: Briefcase,
    value: "500+",
    label: "Projects Delivered",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
];

export function RealResults() {
  return (
    <section id="results" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#F26A21] font-semibold text-sm uppercase tracking-widest">
              Real Impact
            </span>
            <h2 className="text-3xl font-bold text-[#111827] mt-2 mb-4">
              Delivering Real Impact
              <br />
              for Real Businesses
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              We don't just run campaigns — we build growth engines. Every
              project at PromoDaddy is backed by data, strategy, and a
              relentless focus on results that actually matter to your business.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              From Kota-based coaching institutes to national brands, we've
              helped 500+ businesses achieve their digital marketing goals with
              proven, scalable strategies.
            </p>
            <Button
              className="bg-[#F26A21] hover:bg-[#d95b18] text-white font-semibold rounded-full px-8"
              asChild
              data-ocid="results.learnmore.button"
            >
              <a href="#contact">Learn More</a>
            </Button>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {KPI_CARDS.map((kpi, i) => {
              const Icon = kpi.icon;
              return (
                <div
                  key={kpi.label}
                  className={`${kpi.bg} rounded-2xl p-6 flex items-center gap-5`}
                  data-ocid={`results.kpi.item.${i + 1}`}
                >
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <Icon size={24} className={kpi.color} />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-[#111827]">
                      {kpi.value}
                    </div>
                    <div className="text-sm text-gray-600 mt-0.5">
                      {kpi.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
