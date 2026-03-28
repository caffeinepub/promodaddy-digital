import { motion } from "motion/react";
import { Navbar } from "../components/Navbar";
import { SiteFooter } from "../components/SiteFooter";

const YOUTUBE_VIDEOS = [
  { id: "hMy5za-m5Ew", title: "Brand Campaign" },
  { id: "7xNcMwyHQ6c", title: "YouTube Promotion" },
  { id: "qJ3fWRs8HMA", title: "Social Media Campaign" },
  { id: "j_zhxvJuE9c", title: "Digital Marketing" },
  { id: "bNtOvlT9ZCQ", title: "Content Strategy" },
  { id: "AQ2S9fKPM-M", title: "Brand Awareness" },
  { id: "cMJey2A0qLs", title: "Performance Ads" },
];

const CELEBRITIES = [
  {
    name: "Mohammad Shami",
    role: "Cricket - PR Management",
    photo: "https://www.promodaddy.in/_next/static/media/shami.524543e7.jpg",
  },
  {
    name: "Ebrahim Mhyn",
    role: "Influencer - Brand Collab",
    photo:
      "https://www.promodaddy.in/_next/static/media/ebrahimMhyn.7a74deb7.jpg",
  },
  {
    name: "Sonu Sood",
    role: "Actor - Celebrity Management",
    photo: "https://www.promodaddy.in/_next/static/media/scf.9bb6b262.jpeg",
  },
];

export function ProjectsPage() {
  return (
    <div className="font-space bg-[#080D1A] text-white min-h-screen">
      <Navbar onAdminClick={() => {}} isAdminView={false} />

      {/* Header */}
      <section className="pt-28 pb-16 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="text-[#FFBA08] text-sm font-semibold uppercase tracking-[0.2em] mb-4"
            data-ocid="projects.page"
          >
            Our Work
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-none mb-6">
            Project
          </h1>
          <p className="text-white/50 text-lg max-w-2xl">
            We work with you to transform your organization through
            best-in-class strategy, design, and technology — delivering
            campaigns that make real impact.
          </p>
        </motion.div>
      </section>

      {/* YouTube Promotion */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-[#FFBA08] text-xs font-semibold uppercase tracking-[0.25em] mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            Youtube Promotion
          </h2>
        </motion.div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          data-ocid="projects.list"
        >
          {YOUTUBE_VIDEOS.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              data-ocid={`projects.item.${i + 1}`}
              className="bg-[#0D1426] rounded-xl overflow-hidden border border-[rgba(255,186,8,0.08)] hover:border-[#FFBA08]/30 transition-colors group"
            >
              <div className="relative" style={{ aspectRatio: "16/9" }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="px-4 py-3">
                <p className="text-white/70 text-sm font-medium group-hover:text-white transition-colors">
                  {video.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PR Management */}
      <section className="py-16 px-6 max-w-7xl mx-auto border-t border-[rgba(255,186,8,0.08)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-[#FFBA08] text-xs font-semibold uppercase tracking-[0.25em] mb-3">
            Celebrities
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            PR Management
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {CELEBRITIES.map((celeb, i) => (
            <motion.div
              key={celeb.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              data-ocid={`projects.celebrity.item.${i + 1}`}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl bg-[#0D1426] border border-[rgba(255,186,8,0.08)] group-hover:border-[#FFBA08]/40 transition-all">
                <div style={{ aspectRatio: "4/5" }} className="overflow-hidden">
                  <img
                    src={celeb.photo}
                    alt={celeb.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    crossOrigin="anonymous"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent px-5 py-6">
                  <h3 className="text-white font-bold text-lg">{celeb.name}</h3>
                  <p className="text-[#FFBA08] text-xs font-semibold uppercase tracking-widest mt-1">
                    {celeb.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Expertise */}
      <section className="py-20 px-6 bg-[#0D1426] border-y border-[rgba(255,186,8,0.08)]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#FFBA08] text-xs font-semibold uppercase tracking-[0.25em] mb-4">
              Expertise
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Our Project
              <br />
              <span className="text-white/30">Expertise</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-white/60 text-base leading-relaxed">
              At PromoDaddy Digital, we have successfully delivered numerous
              projects across various domains. Our expertise spans web
              development, digital marketing, branding, PR management, and
              celebrity endorsements. We combine creative storytelling with
              data-driven performance strategies to deliver measurable results
              for every client.
            </p>
            <p className="text-white/50 text-base leading-relaxed mt-4">
              From growing YouTube channels to managing celebrity digital
              presence, from running high-ROI Google Ads campaigns to building
              iconic brands — our portfolio speaks for itself. We've helped
              businesses scale 10X in reach, generate millions of leads, and
              dominate their market categories.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { val: "5000+", label: "Projects Done" },
                { val: "1600+", label: "Happy Clients" },
                { val: "8+", label: "Years Active" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-black text-[#FFBA08]">
                    {s.val}
                  </div>
                  <div className="text-white/40 text-xs uppercase tracking-widest mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 px-6 text-center"
        data-ocid="projects.cta.section"
      >
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              Let's Create Something
              <br />
              <span className="text-[#FFBA08]">Great</span>
            </h2>
            <p className="text-white/50 text-lg mb-10">
              Ready to take your brand to the next level? Let's build something
              extraordinary together.
            </p>
            <a
              href="/#contact"
              data-ocid="projects.cta.button"
              className="inline-block bg-[#FFBA08] hover:bg-[#E0A800] text-white font-bold px-10 py-4 text-sm uppercase tracking-widest transition-colors"
            >
              Work With Us
            </a>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
