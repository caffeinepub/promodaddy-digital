import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "motion/react";
import { useState } from "react";
import { useServices } from "../hooks/useQueries";

export function Services() {
  const { data: services } = useServices();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="py-24 bg-[#0D1426] border-t border-[rgba(255,186,8,0.08)]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[#FFBA08] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our Services
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="w-full">
          {(services ?? []).map((service, i) => (
            <AccordionItem
              key={service.id.toString()}
              value={service.id.toString()}
              className="border-b border-[rgba(255,186,8,0.12)] last:border-b transition-all duration-300"
              style={{
                boxShadow:
                  hoveredIdx === i
                    ? "0 0 20px rgba(255,186,8,0.2), inset 0 0 20px rgba(255,186,8,0.05)"
                    : "none",
              }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              data-ocid={`services.item.${i + 1}`}
            >
              <AccordionTrigger className="py-7 hover:no-underline group">
                <div className="flex items-center gap-6 w-full">
                  <span className="text-[#FFBA08] text-sm font-mono w-8 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#FFBA08] transition-colors text-left">
                    {service.name}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="pl-14 pb-6">
                  <p className="text-white/50 text-lg leading-relaxed max-w-2xl">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    className="inline-block mt-5 text-[#FFBA08] text-sm font-semibold hover:underline"
                  >
                    Get Started →
                  </a>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
