import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  CheckCircle,
  ChevronRight,
  FileText,
  Globe,
  Link2,
  Mail,
  MapPin,
  Phone,
  Search,
  Settings,
  ShoppingCart,
  XCircle,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { Navbar } from "../components/Navbar";
import { SiteFooter } from "../components/SiteFooter";

const faqs = [
  {
    q: "How long does SEO take to show results in India?",
    a: "Local SEO results typically start showing in 45-90 days. For competitive national keywords like 'SEO services India', expect 4-6 months for significant rankings. SEO is a long-term investment — results compound month over month and don't stop when you stop paying.",
  },
  {
    q: "How much does professional SEO cost in India?",
    a: "Professional SEO services in India start from Rs.8,000/month for basic local SEO. Growth plans range from Rs.15,000-25,000/month. We offer fully transparent pricing with no hidden charges, no setup fees, and no long-term lock-in contracts.",
  },
  {
    q: "What is the difference between SEO and Google Ads?",
    a: "Google Ads delivers instant results but you pay for every click — traffic stops immediately when your budget stops. SEO takes 3-6 months to build but then delivers free organic traffic permanently. The best strategy for Indian businesses combines both: ads for immediate leads, SEO for long-term organic growth.",
  },
  {
    q: "Can SEO work for my coaching institute in Kota?",
    a: "Absolutely — we have helped coaching institutes in Kota rank in Google's Top 3 for admission-related searches within 90 days. The coaching market is highly competitive online, but most institutes have weak SEO — giving a significant opportunity to rank quickly with the right strategy.",
  },
  {
    q: "Do you offer SEO for e-commerce websites in India?",
    a: "Yes — we specialize in e-commerce SEO including product page optimization, category page SEO, Google Shopping feed optimization, and schema markup for Indian e-commerce brands. We understand platforms like Shopify, WooCommerce, and custom builds.",
  },
  {
    q: "What reports do you provide with your SEO service?",
    a: "Every client receives monthly detailed reports showing keyword rankings (all target keywords), organic traffic growth, backlinks acquired, technical issues resolved, and next month's action plan. Growth and Pro clients get weekly ranking updates. Full transparency always.",
  },
  {
    q: "Can I cancel the SEO service if I am not satisfied?",
    a: "Yes — we have zero lock-in contracts. You can cancel with 30 days written notice at any time. We believe in earning your business every single month through results — not locking you into a contract you can't exit.",
  },
];

const services = [
  {
    icon: Search,
    title: "Keyword Research & Competitor Analysis",
    description:
      "The foundation of every successful SEO campaign is knowing exactly what your customers are searching for. We conduct in-depth keyword research to find high-intent, low-competition keywords that your business can realistically rank for on Google India. We also analyze your top 5 competitors.",
    included: [
      "Find high-value keywords with buyer intent specific to Indian market",
      "Identify long-tail keywords with low competition",
      "Map keywords to right pages",
      "Track competitor keyword gaps",
      "Build 6-month keyword targeting roadmap",
      "Search volume analysis in Indian metro + Tier 2/3 cities",
    ],
  },
  {
    icon: FileText,
    title: "On-Page SEO Optimization",
    description:
      "On-page SEO means optimizing every element on your website pages so Google clearly understands what each page is about and ranks it higher. We audit every page systematically and fix what is holding your rankings back.",
    included: [
      "Title tag and meta description optimization",
      "H1, H2, H3 heading structure",
      "Keyword placement naturally within content",
      "Image optimization — compression, WebP format, ALT text",
      "Internal linking structure",
      "URL structure cleanup",
      "Content optimization aligned to search intent",
    ],
  },
  {
    icon: Settings,
    title: "Technical SEO",
    description:
      "Technical SEO ensures that Google can crawl, index, and understand your website properly. Many Indian websites lose significant rankings because of technical problems invisible to the naked eye but very visible to Google.",
    included: [
      "Website speed optimization — Core Web Vitals (LCP, CLS, FID)",
      "Mobile-friendliness audit and fixes",
      "XML sitemap creation and Google Search Console submission",
      "Robots.txt configuration",
      "Canonical tags — fixing duplicate content",
      "Broken link audit",
      "HTTPS security verification",
      "Schema markup implementation",
      "Crawl error identification and resolution",
    ],
  },
  {
    icon: MapPin,
    title: "Local SEO & Google My Business Optimization",
    description:
      "If you run a local business in Kota, Jaipur, Mumbai, Delhi, or anywhere across India — Local SEO is the single most powerful tool to get more customers calling your phone or walking through your door.",
    included: [
      "Google My Business (GMB) complete setup and full optimization",
      "Google Maps Top 3 Local Pack targeting",
      "Local keyword optimization — city + service combinations",
      "NAP consistency across Justdial, Sulekha, IndiaMART",
      "Local citation building on 30+ Indian directories",
      "Google review management",
      "Location-specific landing pages for multi-city businesses",
    ],
  },
  {
    icon: Link2,
    title: "Link Building",
    description:
      "Backlinks are one of Google's top 3 ranking signals. The more high-quality, relevant websites that link to you, the more Google trusts your site. We only build genuine, white-hat backlinks from relevant Indian and international websites.",
    included: [
      "Guest posting on relevant Indian industry websites",
      "Indian business directory submissions",
      "Broken link building outreach",
      "Resource page link building",
      "Competitor backlink gap analysis",
      "PR-based link acquisition",
      "Monthly backlink report with domain authority tracking",
    ],
  },
  {
    icon: Globe,
    title: "Content SEO",
    description:
      "Google's core mission is to show users the most helpful, relevant content. We create content that is written for humans first and optimized for Google second — because that is exactly what Google's Helpful Content Update rewards.",
    included: [
      "SEO blog strategy — topics that rank AND convert",
      "Long-form pillar content targeting high-volume keywords",
      "Service page content optimization",
      "FAQ content targeting People Also Ask",
      "Content refresh strategy",
      "Monthly content calendar with keyword targets",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce SEO",
    description:
      "E-commerce SEO is a specialized discipline — optimizing hundreds of product pages so they rank on Google and bring in buyers actively ready to purchase. India's e-commerce market is growing at 27% annually.",
    included: [
      "Product page optimization — titles, descriptions, structured data",
      "Category page SEO",
      "Google Shopping feed optimization",
      "Schema markup for products",
      "E-commerce site speed optimization for mobile-first indexing",
      "Duplicate content fixes for filters and pagination",
    ],
  },
];

const timelineData = [
  {
    period: "Month 1-2",
    phase: "Foundation",
    what: "Technical fixes, on-page optimization, keyword mapping, GMB setup, initial content creation",
  },
  {
    period: "Month 3-4",
    phase: "Early Growth",
    what: "Long-tail keyword rankings start improving, organic traffic increases 20-40%, Google starts recognizing authority",
  },
  {
    period: "Month 4-6",
    phase: "Momentum",
    what: "Top 10 rankings for target keywords, significant organic traffic increase, leads start coming from organic search",
  },
  {
    period: "Month 6-12",
    phase: "Dominance",
    what: "Page 1 rankings for primary keywords, consistent monthly lead generation, ROI clearly visible",
  },
  {
    period: "Month 12+",
    phase: "Compounding",
    what: "Rankings strengthen, traffic compounds, organic leads become primary growth channel",
  },
];

const caseStudies = [
  {
    client: "Coaching Institute, Kota",
    challenge: "Zero online visibility",
    solution: "Google Ads + Local SEO",
    result: "Top 3 for 'coaching institute Kota' in 90 days, 47 leads/month",
  },
  {
    client: "Real Estate Developer, Kota",
    challenge: "No organic traffic",
    solution: "SEO + Content Marketing",
    result: "340% organic traffic increase in 6 months",
  },
  {
    client: "Local Clinic, Kota",
    challenge: "Not visible on Google Maps",
    solution: "GMB + Local SEO",
    result: "Google Maps Top 3 achieved in 60 days",
  },
];

const comparisonRows = [
  {
    factor: "Transparent Reporting",
    us: "Weekly keyword ranking updates + monthly full report",
    them: "Monthly, often vague, no ranking data",
  },
  {
    factor: "Custom Strategy",
    us: "Built specifically for your business + industry",
    them: "Same template for every client",
  },
  {
    factor: "India Market Expertise",
    us: "Deep knowledge of Indian search behavior + market",
    them: "Generic global strategies applied to India",
  },
  {
    factor: "Local SEO Strength",
    us: "Kota, Jaipur, Mumbai — we rank local businesses",
    them: "Limited local expertise",
  },
  {
    factor: "Content Included",
    us: "Blog writing included in Growth + Pro plans",
    them: "Content charged separately",
  },
  {
    factor: "Technical SEO",
    us: "Full audit + implementation included",
    them: "Audit only — fixes extra charge",
  },
  {
    factor: "No Lock-in",
    us: "Month-to-month — cancel with 30 days notice",
    them: "6-12 month contracts mandatory",
  },
  {
    factor: "Pricing",
    us: "From Rs.8,000/month — fully transparent",
    them: "Hidden charges revealed after signing",
  },
  {
    factor: "E-E-A-T Focus",
    us: "Named team, real case studies, verified results",
    them: "Anonymous agency, vague testimonials",
  },
  {
    factor: "Celebrity Experience",
    us: "Sonu Sood, Mohammad Shami — proven at national scale",
    them: "No notable client work",
  },
];

const pricingPlans = [
  {
    name: "STARTER",
    price: "Rs.8,000",
    period: "/month",
    bestFor: "Local businesses, small websites, new startups",
    includes: [
      "On-page SEO",
      "GMB optimization",
      "5-8 keywords",
      "Monthly report",
      "Basic technical fixes",
    ],
    highlight: false,
  },
  {
    name: "GROWTH",
    price: "Rs.15,000",
    period: "/month",
    bestFor: "SMBs, coaching institutes, clinics, e-commerce",
    includes: [
      "Everything in Starter",
      "Link building",
      "2 SEO blogs/month",
      "15-20 keywords",
      "Weekly updates",
      "Technical SEO",
    ],
    highlight: true,
  },
  {
    name: "PRO",
    price: "Rs.25,000",
    period: "/month",
    bestFor: "Competitive markets, large websites, e-commerce stores",
    includes: [
      "Everything in Growth",
      "4 blogs/month",
      "30+ keywords",
      "Competitor tracking",
      "Full technical audit",
      "Priority support",
    ],
    highlight: false,
  },
  {
    name: "CUSTOM",
    price: "Contact Us",
    period: "",
    bestFor: "Enterprises, pan-India multi-location, aggressive growth",
    includes: [
      "Fully custom scope",
      "Based on your goals",
      "Timeline & market analysis",
      "Dedicated team",
      "Custom reporting",
      "Executive account manager",
    ],
    highlight: false,
  },
];

const steps = [
  {
    num: "01",
    title: "FREE SEO AUDIT",
    desc: "We analyze your entire website — current rankings, technical issues, on-page problems, backlink profile, and top 5 competitor comparison. Delivered within 48 hours. Zero cost, no obligation.",
  },
  {
    num: "02",
    title: "CUSTOM STRATEGY",
    desc: "Based on your audit, business goals, and budget, we build a tailored SEO roadmap — target keywords, content plan, technical fix list, and link building timeline. Month-by-month action plan.",
  },
  {
    num: "03",
    title: "EXECUTE",
    desc: "Our team implements the full strategy — on-page optimization, technical fixes, content creation, and link building. Campaigns active within 7 working days of strategy approval.",
  },
  {
    num: "04",
    title: "REPORT & OPTIMIZE",
    desc: "Every month you receive a detailed report showing keyword rankings, organic traffic, backlinks acquired, leads generated, and next month's plan. We optimize continuously based on data.",
  },
];

const coachingPoints = [
  "Rank for 'best [subject] coaching in [city]' keyword combinations",
  "Google Maps Top 3 optimization for 'coaching near me' searches",
  "Faculty profile pages — build individual teacher authority",
  "Student result pages — powerful trust signal for Google",
  "YouTube SEO for faculty lecture videos — India's #1 study platform",
  "WhatsApp integration — convert organic traffic to direct inquiries",
  "Admission season content strategy — peak traffic in March-May",
];

export function SeoServicesIndiaPage() {
  useEffect(() => {
    document.title = "SEO Services in India | Promodaddy Digital";
    const metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Promodaddy Digital offers expert SEO services in India — keyword research, on-page SEO, technical SEO, local SEO & link building. Get your free SEO audit today.",
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Promodaddy Digital offers expert SEO services in India — keyword research, on-page SEO, technical SEO, local SEO & link building. Get your free SEO audit today.";
      document.head.appendChild(meta);
    }

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "SEO Services in India",
      provider: { "@type": "Organization", name: "Promodaddy Digital" },
      description: "Expert SEO services in India",
    };
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://promodaddy-digital-30a.caffeine.xyz/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://promodaddy-digital-30a.caffeine.xyz/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "SEO Services",
          item: "https://promodaddy-digital-30a.caffeine.xyz/services/seo-services-india",
        },
      ],
    };

    const scripts: HTMLScriptElement[] = [];
    for (const schema of [faqSchema, serviceSchema, breadcrumbSchema]) {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.text = JSON.stringify(schema);
      document.head.appendChild(s);
      scripts.push(s);
    }
    return () => {
      for (const s of scripts) document.head.removeChild(s);
    };
  }, []);

  return (
    <div className="bg-[#080D1A] text-[#F0F4FF] min-h-screen font-sans">
      <Navbar onAdminClick={() => {}} isAdminView={false} />

      {/* Breadcrumb */}
      <div className="pt-20 pb-2 px-4 md:px-8 max-w-7xl mx-auto">
        <nav
          className="flex items-center gap-1 text-sm text-[#F0F4FF]/50"
          aria-label="breadcrumb"
        >
          <Link to="/" className="hover:text-[#FFBA08] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link
            to="/services"
            className="hover:text-[#FFBA08] transition-colors"
          >
            Services
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#FFBA08]">SEO Services</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28 px-4 md:px-8">
        {/* Particle/gradient bg */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#080D1A] via-[#0D1426] to-[#080D1A]" />
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#FFBA08]/5 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-indigo-600/10 blur-3xl" />
          <HeroParticles />
        </div>
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Badge className="mb-6 bg-[#FFBA08]/10 text-[#FFBA08] border border-[#FFBA08]/30 text-sm px-4 py-1">
              🚀 India's #1 SEO Agency
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              SEO Services in India —{" "}
              <span className="text-[#FFBA08]">Rank Higher on Google,</span> Get
              More Customers Organically
            </h1>
            <p className="text-lg md:text-xl text-[#F0F4FF]/70 max-w-3xl mx-auto mb-8 leading-relaxed">
              In a country with 900+ million internet users, being on Google's
              first page is not optional — it is survival. Promodaddy Digital
              offers data-driven SEO services in India that help businesses rank
              for high-intent keywords, attract real customers, and grow revenue
              without depending on paid ads.
            </p>
            <a
              href="/contact"
              data-ocid="seo.primary_button"
              className="inline-flex items-center gap-2 bg-[#FFBA08] text-[#080D1A] font-bold px-8 py-4 rounded-lg text-lg hover:bg-[#FFBA08]/90 transition-all shadow-lg shadow-[#FFBA08]/20 hover:shadow-[#FFBA08]/40 hover:-translate-y-1"
            >
              Get Your Free SEO Audit — Zero Cost{" "}
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Section 1 — What Is SEO */}
      <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            What Is SEO and{" "}
            <span className="text-[#FFBA08]">
              Why Does Your Business Need It?
            </span>
          </h2>
          <div className="space-y-4 text-[#F0F4FF]/75 text-base md:text-lg leading-relaxed">
            <p>
              SEO (Search Engine Optimization) is the process of improving your
              website so it appears at the top of Google search results when
              potential customers search for your products or services.
            </p>
            <p>
              Think about it — when was the last time you went to Page 2 of
              Google? Almost never. And your customers don't either. If your
              business is not on Page 1, you are invisible to thousands of
              potential buyers every single day.
            </p>
            <p>
              SEO is not a one-time task. It is a long-term investment that
              keeps delivering results 24 hours a day, 7 days a week, without
              paying for every single click. Unlike Google Ads where traffic
              stops the moment you stop spending, SEO builds a permanent
              foundation of organic traffic that grows over time and compounds
              month after month.
            </p>
            <p className="bg-[#FFBA08]/10 border-l-4 border-[#FFBA08] pl-4 py-2 rounded-r-lg text-[#F0F4FF]">
              According to industry data,{" "}
              <strong className="text-[#FFBA08]">
                53% of all website traffic comes from organic search.
              </strong>{" "}
              For Indian businesses, this means millions of potential customers
              are searching for your services every day — the question is, are
              they finding you or your competitor?
            </p>
          </div>
        </motion.div>
      </section>

      {/* Section 2 — 7 SEO Services */}
      <section className="py-16 px-4 md:px-8 bg-[#0D1426]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Our Complete{" "}
              <span className="text-[#FFBA08]">SEO Services in India</span>
            </h2>
            <p className="text-[#F0F4FF]/65 max-w-3xl mx-auto text-lg">
              We offer end-to-end SEO services covering every aspect of search
              engine optimization — from technical fixes to content strategy to
              link building. Whether you are a local business in Kota or a brand
              targeting pan-India customers, we have the right solution.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                data-ocid={`seo.service.item.${i + 1}`}
                className="bg-[#080D1A] border border-[#FFBA08]/15 rounded-xl p-6 hover:border-[#FFBA08]/50 transition-all hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 bg-[#FFBA08]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#FFBA08]/20 transition-colors">
                  <svc.icon className="w-6 h-6 text-[#FFBA08]" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-[#F0F4FF]">
                  {svc.title}
                </h3>
                <p className="text-[#F0F4FF]/60 text-sm mb-4 leading-relaxed">
                  {svc.description}
                </p>
                <div className="border-t border-[#FFBA08]/10 pt-4">
                  <p className="text-[#FFBA08] text-xs font-semibold uppercase tracking-wider mb-2">
                    What's Included
                  </p>
                  <ul className="space-y-1">
                    {svc.included.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs text-[#F0F4FF]/60"
                      >
                        <CheckCircle className="w-3 h-3 text-[#FFBA08] mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Mid-page CTA */}
          <div className="mt-12 text-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 border border-[#FFBA08]/50 text-[#FFBA08] px-6 py-3 rounded-lg hover:bg-[#FFBA08]/10 transition-all"
            >
              Not sure which plan? Talk to us <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Section 3 — 4-Step Process */}
      <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold">
            How We Work — Our{" "}
            <span className="text-[#FFBA08]">4-Step SEO Process</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#0D1426] border border-[#FFBA08]/15 rounded-xl p-6 flex gap-4"
            >
              <div className="text-4xl font-black text-[#FFBA08]/20 leading-none flex-shrink-0 w-12">
                {step.num}
              </div>
              <div>
                <h3 className="text-[#FFBA08] font-bold text-sm tracking-widest uppercase mb-2">
                  {step.title}
                </h3>
                <p className="text-[#F0F4FF]/65 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 4 — Results & Timeline */}
      <section className="py-16 px-4 md:px-8 bg-[#0D1426]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-4"
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-2">
              What SEO Results Can You{" "}
              <span className="text-[#FFBA08]">Realistically Expect?</span>
            </h2>
            <p className="text-[#F0F4FF]/50 italic">
              We Believe in Honest Timelines — No Fake Promises
            </p>
          </motion.div>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#FFBA08]/10 border border-[#FFBA08]/20">
                  <th className="text-[#FFBA08] font-bold px-4 py-3 text-left">
                    Timeline
                  </th>
                  <th className="text-[#FFBA08] font-bold px-4 py-3 text-left">
                    Phase
                  </th>
                  <th className="text-[#FFBA08] font-bold px-4 py-3 text-left">
                    What Happens
                  </th>
                </tr>
              </thead>
              <tbody>
                {timelineData.map((row, i) => (
                  <tr
                    key={row.period}
                    className={`border-b border-[#FFBA08]/10 ${i % 2 === 0 ? "bg-[#080D1A]/50" : ""}`}
                  >
                    <td className="px-4 py-3 text-[#FFBA08] font-semibold whitespace-nowrap">
                      {row.period}
                    </td>
                    <td className="px-4 py-3 font-medium">{row.phase}</td>
                    <td className="px-4 py-3 text-[#F0F4FF]/65">{row.what}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Case Studies */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={cs.client}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#080D1A] border border-[#FFBA08]/20 rounded-xl p-5"
              >
                <p className="text-[#FFBA08] font-bold text-sm mb-3">
                  {cs.client}
                </p>
                <div className="space-y-2 text-xs">
                  <div>
                    <span className="text-[#F0F4FF]/40 uppercase tracking-wider">
                      Challenge:{" "}
                    </span>
                    <span className="text-[#F0F4FF]/70">{cs.challenge}</span>
                  </div>
                  <div>
                    <span className="text-[#F0F4FF]/40 uppercase tracking-wider">
                      Solution:{" "}
                    </span>
                    <span className="text-[#F0F4FF]/70">{cs.solution}</span>
                  </div>
                  <div className="bg-[#FFBA08]/10 border border-[#FFBA08]/20 rounded-lg p-2 mt-2">
                    <span className="text-[#FFBA08] font-semibold">
                      ✅ Result:{" "}
                    </span>
                    <span className="text-[#F0F4FF]">{cs.result}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Coaching Institutes SEO */}
      <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Specialized SEO for{" "}
            <span className="text-[#FFBA08]">Coaching Institutes in India</span>
          </h2>
          <div className="space-y-4 text-[#F0F4FF]/70 text-base leading-relaxed mb-8">
            <p>
              Kota is India's coaching capital. But Allen, Resonance, and Bansal
              are not your only competition — thousands of small and mid-size
              coaching institutes across India are fighting for the same
              students online. Most of them are invisible on Google.
            </p>
            <p>
              Promodaddy Digital has worked extensively in the Kota education
              market. We understand the coaching institute admission cycle, the
              parent's search journey, and exactly what it takes to rank when
              someone searches 'best IIT coaching in Kota' or 'NEET coaching
              near me'.
            </p>
          </div>
          <div className="bg-[#0D1426] border border-[#FFBA08]/20 rounded-xl p-6">
            <h3 className="text-[#FFBA08] font-bold text-lg mb-4">
              Our Coaching Institute SEO Strategy
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {coachingPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FFBA08] mt-0.5 flex-shrink-0" />
                  <span className="text-[#F0F4FF]/75 text-sm">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section 6 — Why Choose Promodaddy */}
      <section className="py-16 px-4 md:px-8 bg-[#0D1426]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-4xl font-bold">
              Why Choose{" "}
              <span className="text-[#FFBA08]">Promodaddy Digital</span> for SEO
              in India?
            </h2>
          </motion.div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#FFBA08]/10 border border-[#FFBA08]/20">
                  <th className="text-[#FFBA08] font-bold px-4 py-3 text-left">
                    Factor
                  </th>
                  <th className="text-[#FFBA08] font-bold px-4 py-3 text-left">
                    Promodaddy Digital ✅
                  </th>
                  <th className="text-red-400 font-bold px-4 py-3 text-left">
                    Other Agencies ❌
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.factor}
                    className={`border-b border-[#FFBA08]/10 ${i % 2 === 0 ? "bg-[#080D1A]/40" : ""}`}
                  >
                    <td className="px-4 py-3 font-semibold text-[#F0F4FF]/80">
                      {row.factor}
                    </td>
                    <td className="px-4 py-3 text-[#F0F4FF]/70">
                      <span className="inline-flex items-center gap-1">
                        <CheckCircle className="w-4 h-4 text-[#FFBA08] flex-shrink-0" />{" "}
                        {row.us}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-[#F0F4FF]/50">
                      <span className="inline-flex items-center gap-1">
                        <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" />{" "}
                        {row.them}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 7 — Pricing */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-3">
            SEO Pricing in India —{" "}
            <span className="text-[#FFBA08]">
              Transparent, No Hidden Charges
            </span>
          </h2>
          <p className="text-[#F0F4FF]/55">
            We believe pricing should be clear upfront. No surprises. No lock-in
            contracts. No hidden charges.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              data-ocid={`seo.pricing.item.${i + 1}`}
              className={`relative bg-[#0D1426] rounded-xl p-6 flex flex-col ${
                plan.highlight
                  ? "border-2 border-[#FFBA08] shadow-lg shadow-[#FFBA08]/15"
                  : "border border-[#FFBA08]/15"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-[#FFBA08] text-[#080D1A] font-bold text-xs px-3">
                    Most Popular
                  </Badge>
                </div>
              )}
              <h3 className="text-[#FFBA08] font-black tracking-widest text-sm mb-3">
                {plan.name}
              </h3>
              <div className="mb-1">
                <span className="text-2xl font-black text-[#F0F4FF]">
                  {plan.price}
                </span>
                <span className="text-[#F0F4FF]/40 text-sm">{plan.period}</span>
              </div>
              <p className="text-[#F0F4FF]/50 text-xs mb-4 leading-relaxed">
                {plan.bestFor}
              </p>
              <ul className="space-y-2 flex-1">
                {plan.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-[#F0F4FF]/70"
                  >
                    <CheckCircle className="w-4 h-4 text-[#FFBA08] mt-0.5 flex-shrink-0" />{" "}
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                data-ocid={`seo.pricing.button.${i + 1}`}
                className={`mt-6 block text-center py-3 rounded-lg font-bold text-sm transition-all ${
                  plan.highlight
                    ? "bg-[#FFBA08] text-[#080D1A] hover:bg-[#FFBA08]/90"
                    : "border border-[#FFBA08]/40 text-[#FFBA08] hover:bg-[#FFBA08]/10"
                }`}
              >
                {plan.name === "CUSTOM" ? "Contact Us" : "Get Started"}
              </a>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center bg-[#0D1426] border border-[#FFBA08]/15 rounded-xl p-4">
          <p className="text-[#F0F4FF]/65 text-sm">
            ✅ <strong className="text-[#FFBA08]">All Plans Include:</strong> No
            lock-in contract | Cancel with 30 days notice | Weekly/monthly
            transparent reporting | Dedicated account manager
          </p>
        </div>
      </section>

      {/* Section 8 — FAQ */}
      <section className="py-16 px-4 md:px-8 bg-[#0D1426]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-4xl font-bold">
              Frequently Asked Questions About{" "}
              <span className="text-[#FFBA08]">SEO Services in India</span>
            </h2>
          </motion.div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`faq-${i}`}
                data-ocid={`seo.faq.item.${i + 1}`}
                className="bg-[#080D1A] border border-[#FFBA08]/15 rounded-xl px-4 overflow-hidden"
              >
                <AccordionTrigger className="text-[#F0F4FF] hover:text-[#FFBA08] text-left font-semibold py-4 [&>svg]:text-[#FFBA08]">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#F0F4FF]/65 pb-4 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFBA08]/5 to-indigo-900/10" />
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Ready to <span className="text-[#FFBA08]">Rank on Page 1</span> of
              Google?
            </h2>
            <p className="text-[#F0F4FF]/65 text-lg mb-8 leading-relaxed">
              Get your FREE SEO Audit today — we will analyze your website,
              identify exactly what is holding back your rankings, and tell you
              what needs to be done to rank higher on Google. No cost. No
              commitment. No sales pressure. Just honest advice.
            </p>
            <a
              href="/contact"
              data-ocid="seo.cta.primary_button"
              className="inline-flex items-center gap-2 bg-[#FFBA08] text-[#080D1A] font-black px-10 py-5 rounded-lg text-xl hover:bg-[#FFBA08]/90 transition-all shadow-lg shadow-[#FFBA08]/25 hover:shadow-[#FFBA08]/50 hover:-translate-y-1 uppercase tracking-wide mb-10"
            >
              GET FREE SEO AUDIT <ArrowRight className="w-6 h-6" />
            </a>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-sm text-[#F0F4FF]/60">
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 text-[#FFBA08]" />
                <div>
                  <div>+91 9602089182</div>
                  <div>+91 8690522210</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4 text-[#FFBA08]" />
                <span>promodaddydigital@gmail.com</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Building2 className="w-4 h-4 text-[#FFBA08]" />
                <div>
                  <div>Kota, Rajasthan</div>
                  <div>Mumbai, Maharashtra</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

// Lightweight canvas particle animation
function HeroParticles() {
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

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      color: Math.random() > 0.5 ? "255,186,8" : "99,102,241",
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},0.8)`;
        ctx.fill();
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
      className="absolute inset-0 w-full h-full opacity-30"
    />
  );
}
