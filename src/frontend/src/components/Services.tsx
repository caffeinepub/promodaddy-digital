import { motion } from "motion/react";
import { useServices } from "../hooks/useQueries";

export function Services() {
  const { data: services } = useServices();

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#2B6FEA] font-semibold text-sm uppercase tracking-widest">
            What We Do
          </span>
          <h2 className="text-3xl font-bold text-[#111827] mt-2">
            Our Services
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            End-to-end digital marketing solutions designed to grow your brand
            and deliver measurable results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(services ?? []).map((service, i) => (
            <motion.div
              key={service.id.toString()}
              className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-ocid={`services.item.${i + 1}`}
            >
              <div className="w-12 h-12 bg-[#EAF6FF] rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-[#2B6FEA]/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="font-semibold text-lg text-[#111827] mb-2">
                {service.name}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-4">
                <a
                  href="#contact"
                  className="text-[#2B6FEA] text-sm font-medium hover:underline"
                >
                  Learn more →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
