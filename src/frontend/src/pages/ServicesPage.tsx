import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  CheckCircle,
  ChevronDown,
  FileText,
  Globe,
  GraduationCap,
  Heart,
  Home,
  Landmark,
  Mail,
  MapPin,
  Megaphone,
  MousePointerClick,
  Phone,
  Search,
  Share2,
  ShoppingBag,
  Star,
  TrendingUp,
  Trophy,
  Users,
  Utensils,
  Youtube,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Navbar } from "../components/Navbar";
import { SiteFooter } from "../components/SiteFooter";

interface ServicesPageProps {
  onAdminClick?: () => void;
  isAdminView?: boolean;
}

// ─── DATA ───────────────────────────────────────────────────────────────────

const quickNavServices = [
  {
    id: "seo",
    icon: Search,
    title: "SEO Services",
    desc: "Rank higher on Google organically",
  },
  {
    id: "google-ads",
    icon: MousePointerClick,
    title: "Google Ads / PPC",
    desc: "Instant leads from Day 1",
  },
  {
    id: "meta-ads",
    icon: Megaphone,
    title: "Meta Ads",
    desc: "Facebook & Instagram campaigns",
  },
  {
    id: "social-media",
    icon: Share2,
    title: "Social Media Marketing",
    desc: "Build loyal brand community",
  },
  {
    id: "youtube",
    icon: Youtube,
    title: "YouTube Marketing",
    desc: "Grow channel & run video ads",
  },
  {
    id: "website",
    icon: Globe,
    title: "Website Development",
    desc: "SEO-ready mobile-first sites",
  },
  {
    id: "content",
    icon: FileText,
    title: "Content Marketing",
    desc: "Content that ranks & converts",
  },
  {
    id: "local-seo",
    icon: MapPin,
    title: "Local SEO",
    desc: "Dominate Google Maps results",
  },
  {
    id: "celebrity-pr",
    icon: Star,
    title: "Celebrity PR & Branding",
    desc: "Media presence & reputation",
  },
  {
    id: "influencer",
    icon: Users,
    title: "Influencer Marketing",
    desc: "Authentic brand collaborations",
  },
];

const services = [
  {
    id: "01",
    anchor: "seo",
    icon: Search,
    title: "SEO Services",
    heading:
      "SEO Services in India — Rank Higher, Get More Customers Organically",
    description:
      "Rank on Google when Kota customers search for your business. We offer complete SEO services in Kota — keyword research, on-page optimization, technical SEO, and Google My Business (GMB) management. Long-term organic growth, zero paid traffic dependency.",
    features: [
      "Keyword Research",
      "On-Page SEO",
      "Technical SEO",
      "Local SEO & GMB",
      "Link Building",
      "Monthly Reports",
      "E-commerce SEO",
    ],
    cta: "Get Free SEO Audit",
    link: "/services/seo-services-india",
  },
  {
    id: "02",
    anchor: "google-ads",
    icon: MousePointerClick,
    title: "Google Ads / PPC",
    heading: "Google Ads Management in India — High-Converting PPC Campaigns",
    description:
      "Get instant leads with our Google Ads management in Kota. We create high-conversion PPC campaigns for local businesses, coaching institutes, and real estate brands — with full transparency, weekly reports, and guaranteed ROI tracking. Every rupee is accounted for.",
    features: [
      "Search Ads",
      "Display & Remarketing",
      "Shopping Ads",
      "Performance Max",
      "Landing Page Optimization",
      "Weekly Reports",
      "Budget from Rs.10,000/month",
    ],
    cta: "Start Your Google Ads Campaign",
    link: "/services/google-ads-india",
  },
  {
    id: "03",
    anchor: "meta-ads",
    icon: Megaphone,
    title: "Meta Ads (Facebook & Instagram)",
    heading:
      "Meta Ads Agency India — Facebook & Instagram Ads That Generate Leads",
    description:
      "Reach your exact target audience in Kota and across India with precision-targeted Meta Ads. We run Facebook and Instagram ad campaigns for lead generation, brand awareness, and product sales — optimized for the lowest cost per lead.",
    features: [
      "Facebook Lead Ads",
      "Instagram Ads (Reels/Stories/Feed)",
      "Audience Targeting",
      "Retargeting",
      "Vernacular Creatives",
      "Festive Campaigns",
      "Weekly Reports",
    ],
    cta: "Launch My Meta Ads Campaign",
    link: "/services/meta-ads-india",
  },
  {
    id: "04",
    anchor: "social-media",
    icon: Share2,
    title: "Social Media Marketing",
    heading:
      "Social Media Marketing Services in India — Build Your Brand Online",
    description:
      "Build a loyal audience on Instagram, Facebook, and LinkedIn with our social media marketing services in Kota. We handle content creation, posting strategy, community management, and paid promotions — so your brand stays active and relevant 24/7.",
    features: [
      "Platform Management",
      "Content Strategy",
      "Creative Design",
      "Caption Writing",
      "Community Management",
      "Competitor Analysis",
      "Monthly Analytics",
    ],
    cta: "Get Social Media Plan",
    link: "/",
  },
  {
    id: "05",
    anchor: "youtube",
    icon: Youtube,
    title: "YouTube Marketing",
    heading:
      "YouTube Marketing Agency India — Grow Your Channel & Get More Views",
    description:
      "YouTube is India's #1 video platform. We help Kota businesses and coaching institutes grow their YouTube channel, rank videos on search, and run YouTube ad campaigns that build authority and drive qualified traffic to your website.",
    features: [
      "Channel Setup & Optimization",
      "Video SEO",
      "YouTube Ads",
      "Thumbnail Design",
      "Shorts Strategy",
      "Subscriber Growth",
      "Monthly Analytics",
    ],
    cta: "Grow My YouTube Channel",
    link: "/",
  },
  {
    id: "06",
    anchor: "website",
    icon: Globe,
    title: "Website Development",
    heading:
      "Website Development Company in India — Fast, SEO-Ready, Mobile-Friendly Sites",
    description:
      "Your website is your #1 sales tool. We design fast, mobile-friendly, SEO-optimized websites for businesses in Kota — built to rank on Google and convert visitors into paying customers. E-commerce, service pages, and landing pages included.",
    features: [
      "Business Websites",
      "E-Commerce",
      "Landing Pages",
      "Mobile-First Design",
      "SEO-Optimized",
      "Fast Loading (Core Web Vitals)",
      "Post-launch Support",
    ],
    cta: "Get Website Quote",
    link: "/",
  },
  {
    id: "07",
    anchor: "content",
    icon: FileText,
    title: "Content Marketing",
    heading:
      "Content Marketing Services India — Content That Ranks and Converts",
    description:
      "Good content builds trust before a customer even calls you. We create SEO-optimized blogs, landing page content, and social media copy for Kota businesses — content that ranks on Google, educates your audience, and generates inbound leads organically.",
    features: [
      "SEO Blog Writing",
      "Website Copywriting",
      "Social Media Content",
      "Email Marketing Copy",
      "Content Strategy",
      "Keyword Research",
      "Performance Tracking",
    ],
    cta: "Get Content Strategy Plan",
    link: "/",
  },
  {
    id: "08",
    anchor: "local-seo",
    icon: MapPin,
    title: "Local SEO",
    heading: "Local SEO Services India — Rank on Google Maps & Local Search",
    description:
      'When someone in Kota searches "best [your business] near me" — are you showing up? Our Local SEO service optimizes your Google Maps listing, GMB profile, and location-based keywords so your business ranks at the top for Kota-specific searches.',
    features: [
      "GMB Setup & Optimization",
      "Google Maps Ranking",
      "Local Keyword Optimization",
      "NAP Consistency",
      "Citation Building",
      "Review Management",
      "Local SEO Reports",
    ],
    cta: "Improve My Local SEO",
    link: "/",
  },
  {
    id: "09",
    anchor: "celebrity-pr",
    icon: Star,
    title: "Celebrity PR & Personal Branding",
    heading:
      "Celebrity PR & Personal Branding Agency India — Build Your Public Image",
    description:
      "Stand out with powerful personal branding and PR campaigns. Having worked with Sonu Sood, Mohammad Shami, and political leaders, we know how to build public trust and media presence — for both individuals and business brands across India.",
    features: [
      "Personal Brand Strategy",
      "Media Coverage & Press Release",
      "Social Media Brand Management",
      "Google Knowledge Panel",
      "Reputation Management",
      "Crisis Communication",
      "Wikipedia & Digital Presence",
    ],
    cta: "Discuss My PR Strategy",
    link: "/",
  },
  {
    id: "10",
    anchor: "influencer",
    icon: Users,
    title: "Influencer Marketing",
    heading:
      "Influencer Marketing Agency India — Authentic Brand Collaborations",
    description:
      "Partner with the right influencers to reach your target audience authentically. We connect Kota businesses with local and national influencers — from micro-influencers for niche reach to large creators for mass brand awareness. Real followers, real results.",
    features: [
      "Influencer Discovery",
      "Micro-Influencer Campaigns",
      "Macro & Celebrity Campaigns",
      "Instagram Reels & YouTube Collab",
      "Campaign Brief Writing",
      "Performance Tracking",
      "Vernacular Influencer Marketing",
    ],
    cta: "Plan Influencer Campaign",
    link: "/",
  },
];

const processSteps = [
  {
    num: "01",
    icon: Search,
    title: "Discovery",
    desc: "We audit your business, competitors & goals",
  },
  {
    num: "02",
    icon: TrendingUp,
    title: "Strategy",
    desc: "Custom digital marketing strategy tailored for you",
  },
  {
    num: "03",
    icon: Zap,
    title: "Execute",
    desc: "Launch campaigns across chosen channels",
  },
  {
    num: "04",
    icon: Trophy,
    title: "Optimize",
    desc: "Real-time data analysis & continuous improvement",
  },
  {
    num: "05",
    icon: FileText,
    title: "Report",
    desc: "Transparent weekly/monthly reports with clear ROI",
  },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "Rs.8,000",
    period: "/month",
    tagline: "Perfect for small businesses",
    popular: false,
    features: ["1 Platform", "Basic SEO", "Monthly report", "Email support"],
  },
  {
    name: "Growth",
    price: "Rs.15,000",
    period: "/month",
    tagline: "For growing businesses",
    popular: true,
    features: [
      "3 Platforms",
      "Advanced SEO",
      "Google Ads (up to Rs.25k budget)",
      "Weekly reports",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: " pricing",
    tagline: "For established brands",
    popular: false,
    features: [
      "All Platforms",
      "Full SEO Suite",
      "Celebrity PR",
      "Influencer campaigns",
      "Daily reports",
      "Dedicated manager",
    ],
  },
];

const industries = [
  { icon: GraduationCap, name: "Coaching Institutes & EdTech" },
  { icon: Home, name: "Real Estate & Construction" },
  { icon: Heart, name: "Healthcare & Clinics" },
  { icon: ShoppingBag, name: "E-Commerce & Retail" },
  { icon: Utensils, name: "Restaurants & Food" },
  { icon: Landmark, name: "Political Campaigns" },
  { icon: Trophy, name: "Sports & Entertainment" },
  { icon: BookOpen, name: "Finance & Fintech" },
];

const statsData = [
  { value: 5000, suffix: "+", label: "Projects Delivered" },
  { value: 1600, suffix: "+", label: "Five-Star Reviews" },
  { value: 100, suffix: "Cr+", label: "Ad Spend Managed" },
  { value: 50, suffix: "+", label: "Celebrity Campaigns" },
];

const comparisonData = [
  {
    service: "SEO Services",
    bestFor: "Long-term organic traffic & rankings",
    timeline: "45–90 days",
  },
  {
    service: "Google Ads / PPC",
    bestFor: "Instant leads & sales",
    timeline: "From Day 1",
  },
  {
    service: "Meta Ads",
    bestFor: "Lead generation & brand awareness",
    timeline: "From Day 1",
  },
  {
    service: "Social Media Marketing",
    bestFor: "Brand building & community growth",
    timeline: "30–60 days",
  },
  {
    service: "YouTube Marketing",
    bestFor: "Video reach & channel authority",
    timeline: "60–90 days",
  },
  {
    service: "Website Development",
    bestFor: "Professional online presence",
    timeline: "2–4 weeks",
  },
  {
    service: "Content Marketing",
    bestFor: "Organic traffic & thought leadership",
    timeline: "60–120 days",
  },
  {
    service: "Local SEO",
    bestFor: "Local customers & Google Maps ranking",
    timeline: "45–90 days",
  },
  {
    service: "Celebrity PR & Branding",
    bestFor: "Public image & media authority",
    timeline: "30–60 days",
  },
  {
    service: "Influencer Marketing",
    bestFor: "Mass reach & authentic brand trust",
    timeline: "1–4 weeks",
  },
];

const faqs = [
  {
    q: "Which digital marketing service is best for my business?",
    a: "Depends on your goal. For instant leads: Google Ads or Meta Ads. For long-term growth: SEO. For brand building: Social Media + Content Marketing. We recommend a free audit.",
  },
  {
    q: "How much do digital marketing services cost in India?",
    a: "Packages start from Rs.8,000/month. Depends on services and scale. Flexible plans, no long-term contracts.",
  },
  {
    q: "How long to see results from digital marketing?",
    a: "Google Ads and Meta Ads: from Day 1. SEO and content: 45-90 days.",
  },
  {
    q: "Do you work with small businesses?",
    a: "Yes — flexible packages for small businesses, startups, and local businesses.",
  },
  {
    q: "Can I bundle multiple services together?",
    a: "Absolutely. Bundled packages like SEO + Google Ads + Social Media available at better pricing.",
  },
  {
    q: "Do you provide reports and performance tracking?",
    a: "Yes — weekly or monthly reports with leads, rankings, traffic, CTR, ROAS metrics.",
  },
  {
    q: "Do you work outside Kota?",
    a: "Yes — pan-India from offices in Kota and Mumbai.",
  },
  {
    q: "What makes Promodaddy Digital different?",
    a: "We have worked with national celebrities like Sonu Sood and Mohammad Shami. Real results, not vanity metrics. Full transparency with every campaign.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

// ─── ANIMATED COUNTER ───────────────────────────────────────────────────────

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

// ─── PAGE COMPONENT ─────────────────────────────────────────────────────────

export function ServicesPage({ onAdminClick, isAdminView }: ServicesPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Digital Marketing Services in India | Promodaddy Digital";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute(
        "content",
        "Promodaddy Digital offers SEO, Google Ads, Meta Ads, Social Media, YouTube Marketing, Website Development & more. Real results for Indian businesses. Get a free audit today.",
      );
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle)
      ogTitle.setAttribute(
        "content",
        "Digital Marketing Services in India | Promodaddy Digital",
      );
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl)
      ogUrl.setAttribute("content", `${window.location.origin}/services`);

    const existing = document.getElementById("services-faq-schema");
    if (!existing) {
      const script = document.createElement("script");
      script.id = "services-faq-schema";
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(faqSchema);
      document.head.appendChild(script);
    }
    return () => {
      document.getElementById("services-faq-schema")?.remove();
    };
  }, []);

  const scrollToService = (anchor: string) => {
    const el = document.getElementById(anchor);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#080D1A] text-white">
      <Navbar
        onAdminClick={onAdminClick ?? (() => {})}
        isAdminView={isAdminView ?? false}
      />

      <main>
        {/* ── 1. HERO SECTION ─────────────────────────────────────── */}
        <section
          className="relative overflow-hidden py-28 md:py-36"
          data-ocid="services.section"
        >
          {/* Animated gold glow */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#FFBA08]/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-16 right-1/4 w-[400px] h-[250px] bg-indigo-600/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-[#FFBA08] mb-5 border border-[#FFBA08]/30 px-4 py-1.5">
                Our Services
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
                Grow Your Brand.
                <br />
                <span className="text-[#FFBA08]">Dominate Your Market.</span>
              </h1>
              <p className="text-lg text-white/55 max-w-3xl mx-auto mb-10 leading-relaxed">
                End-to-end digital marketing services that deliver real,
                measurable business growth — for Indian businesses of all sizes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link
                  to="/"
                  data-ocid="services.primary_button"
                  className="inline-flex items-center justify-center gap-2 bg-[#FFBA08] text-[#080D1A] font-bold px-8 py-4 hover:bg-[#FFBA08]/90 transition-all text-base shadow-lg shadow-[#FFBA08]/20"
                >
                  Get Free Audit
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  type="button"
                  onClick={() => scrollToService("seo")}
                  data-ocid="services.secondary_button"
                  className="inline-flex items-center justify-center gap-2 border border-[#FFBA08]/50 text-[#FFBA08] font-semibold px-8 py-4 hover:border-[#FFBA08] hover:bg-[#FFBA08]/5 transition-all text-base"
                >
                  View All Services
                </button>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                {[
                  { val: "5000+", label: "Projects" },
                  { val: "1600+", label: "Reviews" },
                  { val: "10+", label: "Services" },
                  { val: "Pan-India", label: "Coverage" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-white/5 border border-white/10 px-4 py-4"
                  >
                    <div className="text-2xl font-black text-[#FFBA08]">
                      {s.val}
                    </div>
                    <div className="text-xs text-white/50 mt-0.5 uppercase tracking-wider">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── 2. QUICK NAV GRID ───────────────────────────────────── */}
        <section className="py-16 border-t border-white/5 bg-[#060B16]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold">
                All <span className="text-[#FFBA08]">10 Services</span> — Quick
                Overview
              </h2>
              <p className="text-white/45 text-sm mt-2">
                Click any service to jump to details below
              </p>
            </motion.div>
            <div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3"
              data-ocid="services.list"
            >
              {quickNavServices.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.button
                    key={s.id}
                    type="button"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => scrollToService(s.id)}
                    data-ocid={`services.item.${i + 1}`}
                    className="group flex flex-col items-center gap-3 bg-white/[0.03] border border-white/8 p-5 hover:border-[#FFBA08]/50 hover:bg-[#FFBA08]/5 transition-all text-center cursor-pointer"
                  >
                    <div className="w-10 h-10 border border-[#FFBA08]/30 group-hover:border-[#FFBA08] flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5 text-[#FFBA08]" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white leading-tight">
                        {s.title}
                      </div>
                      <div className="text-xs text-white/40 mt-1 leading-tight">
                        {s.desc}
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 3. DETAILED SERVICES SECTION ────────────────────────── */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                All <span className="text-[#FFBA08]">10 Services</span> —
                Explained
              </h2>
              <p className="text-white/50 mt-4">
                Deep-dive into what we deliver and how it grows your business
              </p>
            </div>

            <div className="space-y-10">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isEven = index % 2 === 1;
                return (
                  <motion.div
                    key={service.id}
                    id={service.anchor}
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    data-ocid={`services.item.${index + 1}`}
                    className={`flex flex-col md:flex-row ${isEven ? "md:flex-row-reverse" : ""} gap-8 bg-white/[0.025] border border-white/8 p-8 md:p-10 hover:border-[#FFBA08]/25 transition-all group scroll-mt-24`}
                  >
                    {/* Number + Icon side */}
                    <div className="flex-shrink-0 flex flex-col items-center justify-start md:w-44 gap-4">
                      <span className="text-8xl font-black text-[#FFBA08]/10 leading-none select-none group-hover:text-[#FFBA08]/20 transition-colors">
                        {service.id}
                      </span>
                      <div className="bg-[#FFBA08]/10 border border-[#FFBA08]/30 p-4">
                        <Icon className="w-7 h-7 text-[#FFBA08]" />
                      </div>
                      <span className="text-xs font-bold text-[#FFBA08]/60 uppercase tracking-widest text-center">
                        {service.title}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold mb-4 leading-snug">
                        {service.heading}
                      </h3>
                      <p className="text-white/55 mb-7 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-7">
                        {service.features.map((f) => (
                          <div
                            key={f}
                            className="flex items-start gap-2 text-sm text-white/65"
                          >
                            <CheckCircle className="w-4 h-4 text-[#FFBA08] flex-shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                      <Link
                        to={service.link}
                        data-ocid="services.secondary_button"
                        className="inline-flex items-center gap-2 border border-[#FFBA08] text-[#FFBA08] font-semibold px-6 py-2.5 hover:bg-[#FFBA08] hover:text-[#080D1A] transition-all text-sm"
                      >
                        {service.cta}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 4. PROCESS SECTION ──────────────────────────────────── */}
        <section className="py-24 border-t border-white/5 bg-[#060B16]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                Our <span className="text-[#FFBA08]">5-Step Process</span>
              </h2>
              <p className="text-white/45 mt-4">
                From first meeting to measurable results
              </p>
            </motion.div>

            <div className="relative">
              {/* Connecting line (desktop) */}
              <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#FFBA08]/30 to-transparent" />

              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {processSteps.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={step.num}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      data-ocid={`services.item.${i + 1}`}
                      className="flex flex-col items-center text-center gap-4"
                    >
                      <div className="relative w-24 h-24 border border-[#FFBA08]/30 bg-[#080D1A] flex flex-col items-center justify-center gap-1 group hover:border-[#FFBA08] hover:bg-[#FFBA08]/5 transition-all">
                        <span className="text-xs font-black text-[#FFBA08]/40 tracking-wider">
                          {step.num}
                        </span>
                        <Icon className="w-6 h-6 text-[#FFBA08]" />
                      </div>
                      <div>
                        <div className="font-bold text-white mb-1">
                          {step.title}
                        </div>
                        <div className="text-sm text-white/45 leading-relaxed">
                          {step.desc}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. PRICING TIERS ────────────────────────────────────── */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                Transparent Pricing.
                <span className="text-[#FFBA08]"> No Hidden Charges.</span>
              </h2>
              <p className="text-white/45 mt-4">
                Choose a plan that fits your growth stage
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {pricingTiers.map((tier, i) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  data-ocid={"services.card"}
                  className={`relative flex flex-col p-8 border ${
                    tier.popular
                      ? "border-[#FFBA08] bg-[#FFBA08]/5"
                      : "border-white/10 bg-white/[0.025]"
                  } transition-all hover:border-[#FFBA08]/60`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="bg-[#FFBA08] text-[#080D1A] text-xs font-black px-4 py-1 uppercase tracking-widest">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="mb-6">
                    <div className="text-sm font-bold text-[#FFBA08] uppercase tracking-widest mb-2">
                      {tier.name}
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black text-white">
                        {tier.price}
                      </span>
                      <span className="text-white/40 text-sm">
                        {tier.period}
                      </span>
                    </div>
                    <div className="text-white/50 text-sm mt-2">
                      {tier.tagline}
                    </div>
                  </div>
                  <ul className="space-y-3 flex-1 mb-8">
                    {tier.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-white/65"
                      >
                        <CheckCircle className="w-4 h-4 text-[#FFBA08] flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/"
                    data-ocid="services.primary_button"
                    className={`w-full text-center font-bold py-3 text-sm transition-all ${
                      tier.popular
                        ? "bg-[#FFBA08] text-[#080D1A] hover:bg-[#FFBA08]/90"
                        : "border border-[#FFBA08]/50 text-[#FFBA08] hover:border-[#FFBA08] hover:bg-[#FFBA08]/5"
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-10 text-white/45 text-sm"
            >
              Not sure which plan fits?{" "}
              <Link
                to="/"
                className="text-[#FFBA08] hover:underline font-semibold"
              >
                Get a free consultation.
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── 6. INDUSTRIES ───────────────────────────────────────── */}
        <section className="py-24 border-t border-white/5 bg-[#060B16]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                Industries <span className="text-[#FFBA08]">We Serve</span>
              </h2>
              <p className="text-white/45 mt-4">
                Deep domain expertise across 8+ verticals
              </p>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {industries.map((ind, i) => {
                const Icon = ind.icon;
                return (
                  <motion.div
                    key={ind.name}
                    initial={{ opacity: 0, scale: 0.93 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    data-ocid={`services.item.${i + 1}`}
                    className="flex flex-col items-center gap-3 bg-white/[0.03] border border-white/8 p-6 hover:border-[#FFBA08]/40 hover:bg-[#FFBA08]/5 transition-all text-center group"
                  >
                    <div className="w-12 h-12 bg-[#FFBA08]/10 border border-[#FFBA08]/20 flex items-center justify-center group-hover:border-[#FFBA08]/50 transition-colors">
                      <Icon className="w-6 h-6 text-[#FFBA08]" />
                    </div>
                    <span className="text-sm font-semibold text-white/80 leading-tight">
                      {ind.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 7. RESULTS STATS BANNER ─────────────────────────────── */}
        <section className="py-20 border-t border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFBA08]/5 via-transparent to-indigo-900/10 pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {statsData.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  data-ocid={`services.item.${i + 1}`}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-black text-[#FFBA08] mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-white/50 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 8. COMPARISON TABLE ─────────────────────────────────── */}
        <section
          className="py-20 border-t border-white/5 bg-[#060B16]"
          data-ocid="services.table"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                Digital Marketing Services —{" "}
                <span className="text-[#FFBA08]">At a Glance</span>
              </h2>
            </motion.div>
            <div className="overflow-x-auto border border-white/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#FFBA08]">
                    <th className="text-left py-4 px-6 text-[#080D1A] font-bold text-xs uppercase tracking-wider">
                      Service
                    </th>
                    <th className="text-left py-4 px-6 text-[#080D1A] font-bold text-xs uppercase tracking-wider">
                      Best For
                    </th>
                    <th className="text-left py-4 px-6 text-[#080D1A] font-bold text-xs uppercase tracking-wider">
                      Result Timeline
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr
                      key={row.service}
                      className={`border-t border-white/5 hover:bg-[#FFBA08]/5 transition-colors ${
                        i % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"
                      }`}
                    >
                      <td className="py-4 px-6 font-medium text-white">
                        {row.service}
                      </td>
                      <td className="py-4 px-6 text-white/60">{row.bestFor}</td>
                      <td className="py-4 px-6">
                        <span className="bg-[#FFBA08]/10 text-[#FFBA08] text-xs font-semibold px-3 py-1">
                          {row.timeline}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── 9. FAQ SECTION ──────────────────────────────────────── */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                Frequently Asked{" "}
                <span className="text-[#FFBA08]">Questions</span>
              </h2>
              <p className="text-white/50 mt-3">
                About Our Digital Marketing Services
              </p>
            </motion.div>
            <div className="space-y-3" data-ocid="services.panel">
              {faqs.map((faq, i) => (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="border border-white/10 overflow-hidden"
                  data-ocid={`services.item.${i + 1}`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    type="button"
                    className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/5 transition-colors"
                    data-ocid="services.toggle"
                    aria-expanded={openFaq === i}
                  >
                    <span className="font-semibold text-sm md:text-base pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#FFBA08] flex-shrink-0 transition-transform duration-300 ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 text-white/60 text-sm leading-relaxed border-t border-white/5 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 10. FINAL CTA ───────────────────────────────────────── */}
        <section
          className="py-24 border-t border-white/5 bg-[#060B16]"
          data-ocid="services.card"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden border border-[#FFBA08]/30 bg-gradient-to-br from-[#FFBA08]/10 via-[#FFBA08]/5 to-transparent p-12 md:p-16 text-center"
            >
              <div className="absolute -top-20 right-0 w-72 h-72 bg-[#FFBA08]/8 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-56 h-56 bg-indigo-600/8 rounded-full blur-[60px] pointer-events-none" />

              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-black mb-4">
                  Ready to{" "}
                  <span className="text-[#FFBA08]">Grow Your Business?</span>
                </h2>
                <p className="text-white/60 mb-2 max-w-2xl mx-auto leading-relaxed text-lg">
                  Get a{" "}
                  <strong className="text-white">
                    FREE Digital Marketing Audit
                  </strong>
                </p>
                <p className="text-white/45 text-sm mb-10 max-w-xl mx-auto">
                  No Cost. No Commitment. Just Honest Advice.
                </p>
                <Link
                  to="/"
                  data-ocid="services.primary_button"
                  className="inline-flex items-center gap-2 bg-[#FFBA08] text-[#080D1A] font-black px-12 py-5 hover:bg-[#FFBA08]/90 transition-all text-base tracking-widest shadow-2xl shadow-[#FFBA08]/20 uppercase"
                >
                  Book Free Audit
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5 text-sm text-white/40">
                  <a
                    href="tel:+918690522210"
                    className="flex items-center gap-2 hover:text-[#FFBA08] transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    +91 86905 22210
                  </a>
                  <span className="hidden sm:block">·</span>
                  <a
                    href="mailto:info@promodaddy.in"
                    className="flex items-center gap-2 hover:text-[#FFBA08] transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    info@promodaddy.in
                  </a>
                  <span className="hidden sm:block">·</span>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Kota &amp; Mumbai Offices
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
