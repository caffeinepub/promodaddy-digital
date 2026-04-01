import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Eye,
  Mail,
  Phone,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { SiteFooter } from "../components/SiteFooter";

const faqs = [
  {
    q: "How much does Meta Ads management cost in India?",
    a: "Meta Ads management fees start from Rs.3,000/month plus your ad spend. Minimum recommended ad spend is Rs.8,000-10,000/month to gather enough data for optimization. Total monthly starting investment: Rs.11,000-13,000/month.",
  },
  {
    q: "What is a good Cost Per Lead (CPL) for Meta Ads in India?",
    a: "CPL varies by industry. For coaching institutes: Rs.150–350/lead. Real estate: Rs.400–800/lead. E-commerce: Rs.80–200/order. Healthcare: Rs.200–500/lead. We set realistic CPL targets based on your vertical and competition before starting campaigns.",
  },
  {
    q: "Facebook Ads vs Google Ads — which is better for my business?",
    a: "Both serve different purposes. Google Ads = high intent (people searching for your product). Meta Ads = demand generation (reach people who don't know you yet). For most Indian businesses we recommend running both. If budget is limited: Google Ads for B2B/high-ticket, Meta Ads for B2C/impulse purchases.",
  },
  {
    q: "Can you run Instagram Ads specifically for product-based businesses?",
    a: "Yes — Instagram Shopping Ads and Reels Ads are our specialty for product brands. We set up Instagram Shopping catalogue, create scroll-stopping creative briefs, and run conversion-optimised campaigns targeting the right interest and lookalike audiences.",
  },
  {
    q: "How do you target the right audience on Facebook & Instagram?",
    a: "We use a 3-layer targeting approach: (1) Interest & Behavioral targeting — people interested in competitors, relevant topics; (2) Lookalike Audiences — cloned from your existing customers/website visitors; (3) Retargeting — warm audiences who engaged with your brand. This combination dramatically reduces wasted ad spend.",
  },
  {
    q: "Do you create the ad creatives (images/videos) as well?",
    a: "Yes — our team handles creative briefs, static graphic design guidance, and ad copy writing. For video ads, we provide scripted storyboards and work with your existing footage. High-quality creatives are the #1 factor in Meta Ads success.",
  },
  {
    q: "How long before I see results from Meta Ads?",
    a: "Meta's algorithm needs a learning phase of 7–14 days per ad set. You'll see initial data in Week 1. By end of Month 1 we have enough data to optimize. Month 2 onwards, costs decrease and conversions improve as the algorithm learns your ideal customer.",
  },
];

const pricingPlans = [
  {
    plan: "Starter",
    fee: "Rs.3,500/month",
    adSpend: "Rs.8,000/month",
    best: "Local businesses, brand awareness",
    highlight: false,
  },
  {
    plan: "Growth",
    fee: "Rs.7,000/month",
    adSpend: "Rs.20,000/month",
    best: "E-commerce, coaching institutes, lead gen",
    highlight: true,
  },
  {
    plan: "Pro",
    fee: "Rs.14,000/month",
    adSpend: "Rs.50,000/month",
    best: "D2C brands, real estate, multi-product",
    highlight: false,
  },
  {
    plan: "Enterprise",
    fee: "Custom",
    adSpend: "Rs.1,00,000+",
    best: "National brands, large-scale campaigns",
    highlight: false,
  },
];

const adServices = [
  {
    title: "Facebook Lead Generation Ads",
    icon: Target,
    desc: "Capture high-quality leads directly on Facebook without a landing page. Users fill a pre-populated form in 2 taps — ideal for coaching institutes, real estate, healthcare, and service businesses targeting Indian consumers.",
    features: [
      "Instant Form setup & optimization",
      "CRM / WhatsApp integration for instant lead alerts",
      "Lookalike audience from existing customers",
      "A/B testing — audience, creative, headline",
      "CPL tracking and weekly reporting",
    ],
  },
  {
    title: "Instagram Shopping & Catalogue Ads",
    icon: BarChart3,
    desc: "For product-based businesses — run dynamic catalogue ads that automatically show the right products to users most likely to buy. Highest ROI format for Indian D2C and e-commerce brands on Instagram.",
    features: [
      "Facebook / Instagram catalogue setup",
      "Dynamic Product Ads (DPA) — auto-personalized",
      "Collection & Carousel ad formats",
      "Instagram Shopping integration",
      "Purchase conversion optimization",
    ],
  },
  {
    title: "Reels & Video Ads",
    icon: Eye,
    desc: "Instagram and Facebook Reels are India's highest-reach ad format in 2024–25. We craft scroll-stopping video ad concepts, write scripts, and set up campaigns optimized for video views and website clicks.",
    features: [
      "Reel ad concept & scripting",
      "Aspect ratio optimization (9:16, 1:1, 16:9)",
      "Hook + CTA copywriting",
      "Reach & frequency campaign setup",
      "Brand awareness + retargeting funnel",
    ],
  },
  {
    title: "Retargeting & Remarketing Campaigns",
    icon: TrendingUp,
    desc: "Re-engage users who visited your website, watched your videos, or interacted with your Facebook/Instagram page but didn't convert. Retargeting delivers 3–5x higher conversion rates at lower costs.",
    features: [
      "Facebook Pixel / CAPI setup & verification",
      "Website visitor retargeting segmentation",
      "Video view retargeting (25%, 50%, 75%)",
      "Page engager audience campaigns",
      "Multi-step warm audience funnel",
    ],
  },
  {
    title: "WhatsApp Ads & Click-to-Message",
    icon: Users,
    desc: "India's most popular communication platform — Meta Ads can drive users directly to WhatsApp chat with your business. Perfect for coaching institutes, real estate, and local service businesses.",
    features: [
      "Click-to-WhatsApp campaign setup",
      "WhatsApp Business API integration guidance",
      "Automated welcome message templates",
      "Lead qualification chatbot coordination",
      "Cost per conversation tracking",
    ],
  },
  {
    title: "Meta Ads for Coaching Institutes (Kota Specialty)",
    icon: Zap,
    desc: "Coaching institutes in Kota and across India need hyper-targeted Meta campaigns that reach both students and parents. Our team has managed admission-season campaigns with CPLs as low as Rs.180.",
    features: [
      "Student vs parent audience segmentation",
      "Admission season burst campaigns (Jan–May)",
      "Competitor audience targeting",
      "WhatsApp lead capture + follow-up sequence",
      "Free counselling session CTA campaigns",
    ],
  },
];

const cplBenchmarks = [
  {
    industry: "Real Estate",
    avgCpl: "Rs.800–1,800",
    bestFormat: "Lead Ads + WhatsApp",
    ourTarget: "Rs.700–1,200",
    featured: true,
  },
  {
    industry: "Hotels & Hospitality",
    avgCpl: "Rs.400–900",
    bestFormat: "Lead Ads + Reels",
    ourTarget: "Rs.350–800",
    featured: false,
  },
  {
    industry: "Coaching Institutes",
    avgCpl: "Rs.300–600",
    bestFormat: "Lead Ads + Reels",
    ourTarget: "Rs.280–400",
    featured: false,
  },
  {
    industry: "Healthcare / Clinics",
    avgCpl: "Rs.200–500",
    bestFormat: "Lead Ads + Stories",
    ourTarget: "Rs.180–400",
    featured: false,
  },
  {
    industry: "E-Commerce",
    avgCpl: "Rs.150–400",
    bestFormat: "Catalog + Reels",
    ourTarget: "Rs.120–300",
    featured: false,
  },
  {
    industry: "Local Services",
    avgCpl: "Rs.100–300",
    bestFormat: "Lead Ads + WhatsApp",
    ourTarget: "Rs.80–250",
    featured: false,
  },
];

const industries = [
  {
    emoji: "🏠",
    name: "Real Estate",
    priority: "Priority #1",
    desc: "Property lead generation, site visit campaigns, project launch awareness, WhatsApp click-to-chat inquiry ads. Target property buyers by income, location, and interest.",
    cpl: "CPL target: Rs.800–1,500",
    featured: true,
  },
  {
    emoji: "🏨",
    name: "Hotels & Hospitality",
    priority: "Priority #2",
    desc: "Room booking campaigns, restaurant promotion, wedding banquet lead generation, staycation packages, seasonal offers (IPL, Diwali, New Year). Reduce OTA dependency with direct Meta Ads.",
    cpl: "",
    featured: false,
  },
  {
    emoji: "🎓",
    name: "Coaching & Education",
    priority: "Priority #3",
    desc: "Admission lead generation, parent-focused ads for foundation courses, WhatsApp integration for instant inquiry. Specialists in Kota coaching institute campaigns.",
    cpl: "CPL target: Rs.300–500 per admission lead",
    featured: false,
  },
  {
    emoji: "🛒",
    name: "E-Commerce / D2C",
    priority: "",
    desc: "Product catalog ads, Reels product demos, retargeting abandoned carts, festive sale campaigns. Drive purchases at the lowest cost per order.",
    cpl: "",
    featured: false,
  },
  {
    emoji: "🏥",
    name: "Healthcare",
    priority: "",
    desc: "Patient inquiry campaigns, clinic awareness, doctor consultation booking campaigns. Compliant healthcare advertising with precise audience targeting.",
    cpl: "",
    featured: false,
  },
];

const timeline = [
  {
    period: "Week 1",
    desc: "Pixel setup, audience research, creative brief, campaign architecture planning",
  },
  {
    period: "Week 2",
    desc: "Campaigns go live. Learning phase begins. Initial impressions and clicks collected.",
  },
  {
    period: "Week 3–4",
    desc: "First optimization round — pause underperformers, scale winners, refine audiences",
  },
  {
    period: "Month 2",
    desc: "CPL improves 20–40%, lookalike audiences refining, retargeting funnel active",
  },
  {
    period: "Month 3+",
    desc: "Fully optimized — stable CPL, scaling budget on best performing ad sets",
  },
];

const comparisonRows = [
  {
    param: "Best for",
    promodaddy: "B2C, local & national brands",
    generic: "Generic approach",
  },
  {
    param: "Audience Targeting",
    promodaddy: "3-layer: Interest + Lookalike + Retargeting",
    generic: "Basic interest only",
  },
  {
    param: "Creative Strategy",
    promodaddy: "Full brief, copy + concept",
    generic: "Generic templates",
  },
  {
    param: "Pixel / CAPI Setup",
    promodaddy: "Full technical setup included",
    generic: "Often skipped",
  },
  {
    param: "WhatsApp Integration",
    promodaddy: "Included for lead campaigns",
    generic: "Not offered",
  },
  {
    param: "Reporting",
    promodaddy: "Weekly transparent reports",
    generic: "Monthly summary only",
  },
  {
    param: "Contract",
    promodaddy: "No lock-in, cancel anytime",
    generic: "6–12 month contracts",
  },
];

export function MetaAdsIndiaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
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
      serviceType: "Meta Ads Management — Facebook & Instagram Advertising",
      provider: {
        "@type": "Organization",
        name: "Promodaddy Digital",
        url: "https://promodaddy.in",
      },
      areaServed: "India",
      description:
        "Expert Meta Ads management in India — Facebook Ads, Instagram Ads, Lead Generation, Retargeting & WhatsApp campaigns.",
    };
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://promodaddy.in",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://promodaddy.in/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Meta Ads India",
          item: "https://promodaddy.in/services/meta-ads-india",
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
    <div className="min-h-screen bg-[#080D1A] text-white">
      <Navbar onAdminClick={() => {}} isAdminView={false} />

      {/* Breadcrumb */}
      <div className="pt-24 pb-2 px-6 max-w-6xl mx-auto">
        <nav className="text-sm text-gray-400 flex items-center gap-2">
          <Link to="/" className="hover:text-[#FFBA08] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            to="/services"
            className="hover:text-[#FFBA08] transition-colors"
          >
            Services
          </Link>
          <span>/</span>
          <span className="text-[#FFBA08]">Meta Ads India</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-[#FFBA08]/10 border border-[#FFBA08]/30 rounded-full px-4 py-2 text-[#FFBA08] text-sm font-medium mb-6">
            <Target size={14} /> Meta Ads Management India
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
            Meta Ads Agency India —{" "}
            <span className="text-[#FFBA08]">
              Facebook & Instagram Ads That Generate Real Leads
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
            With 400+ million Facebook users and 250+ million Instagram users in
            India, Meta advertising is one of the most powerful ways to reach
            your exact target audience. Promodaddy Digital creates
            precision-targeted Meta Ad campaigns that speak to your audience in
            their language, at the right time, on the right platform — at the
            lowest possible cost per lead.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/"
              className="bg-[#FFBA08] text-[#080D1A] font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors flex items-center gap-2"
            >
              Start Your Meta Ads Campaign — Free Audit <ArrowRight size={18} />
            </Link>
            <a
              href="tel:+918690522210"
              className="border border-[#FFBA08]/40 text-white px-8 py-4 rounded-lg hover:border-[#FFBA08] hover:bg-[#FFBA08]/5 transition-colors flex items-center gap-2"
            >
              <Phone size={16} /> +91 86905 22210
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 px-6 bg-[#0D1526] border-y border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { val: "400M+", label: "Facebook Users in India" },
            { val: "250M+", label: "Instagram Users in India" },
            { val: "3x–5x", label: "Higher Conversions with Retargeting" },
            { val: "14 Days", label: "Algorithm Learning Phase" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-black text-[#FFBA08] mb-1">
                {s.val}
              </div>
              <div className="text-sm text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Meta Ads */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-black mb-4">
          Why Meta Ads Is India's Most Powerful Brand & Lead Generation Platform
        </h2>
        <p className="text-gray-300 mb-8 max-w-3xl">
          India has the world's largest Facebook user base and one of the
          fastest-growing Instagram audiences. Meta's advertising platform gives
          you unmatched ability to reach specific demographics, interests, and
          lookalike audiences — making it the go-to platform for B2C brand
          building and lead generation at scale.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "India has 400 million+ Facebook users — largest in the world",
            "Instagram India: 250 million+ active users, growing 20% YoY",
            "Meta Ads reach 65%+ of Indian internet users aged 18–45",
            "Average CPM for India: Rs.80–200 — highly cost-efficient",
            "Lead gen ads: 60% lower CPL vs landing page campaigns",
            "Reels Ads now reach 40%+ more audience than regular video ads",
          ].map((pt) => (
            <div
              key={pt}
              className="flex items-start gap-3 bg-[#0D1526] rounded-lg p-4 border border-white/5"
            >
              <CheckCircle
                size={18}
                className="text-[#FFBA08] mt-0.5 shrink-0"
              />
              <span className="text-gray-200 text-sm">{pt}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-[#0D1526]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black mb-2">
            Our Meta Ads Services in India
          </h2>
          <p className="text-gray-400 mb-10">
            Full-funnel Facebook & Instagram advertising — from awareness to
            conversion
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adServices.map((svc) => (
              <div
                key={svc.title}
                className="bg-[#080D1A] rounded-xl p-6 border border-white/5 hover:border-[#FFBA08]/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FFBA08]/10 flex items-center justify-center mb-4">
                  <svc.icon size={20} className="text-[#FFBA08]" />
                </div>
                <h3 className="font-bold text-lg mb-2">{svc.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{svc.desc}</p>
                <ul className="space-y-1">
                  {svc.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-xs text-gray-300"
                    >
                      <CheckCircle
                        size={12}
                        className="text-[#FFBA08] shrink-0"
                      />{" "}
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CPL Benchmarks Table */}
          <div className="mt-14">
            <h3 className="text-2xl font-black mb-2">
              India-Specific CPL Benchmarks
            </h3>
            <p className="text-gray-400 mb-6 text-sm">
              Average Cost Per Lead across industries in India — and what we
              target for you
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#080D1A] border-b border-white/10">
                    <th className="px-5 py-4 text-left text-gray-400 font-semibold">
                      Industry
                    </th>
                    <th className="px-5 py-4 text-left text-gray-400 font-semibold">
                      Average CPL (India)
                    </th>
                    <th className="px-5 py-4 text-left text-gray-400 font-semibold">
                      Best Ad Format
                    </th>
                    <th className="px-5 py-4 text-left text-[#FFBA08] font-bold">
                      Our Target CPL
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cplBenchmarks.map((row, i) => (
                    <tr
                      key={row.industry}
                      className={`${
                        row.featured
                          ? "bg-[#FFBA08]/5 border-l-2 border-l-[#FFBA08]"
                          : i % 2 === 0
                            ? "bg-[#080D1A]/60"
                            : "bg-[#0D1526]"
                      }`}
                    >
                      <td className="px-5 py-4 font-semibold text-white">
                        {row.featured && (
                          <span className="inline-block bg-[#FFBA08] text-[#080D1A] text-xs font-bold px-2 py-0.5 rounded mr-2">
                            #1
                          </span>
                        )}
                        {row.industry}
                      </td>
                      <td className="px-5 py-4 text-gray-300">{row.avgCpl}</td>
                      <td className="px-5 py-4 text-gray-300">
                        {row.bestFormat}
                      </td>
                      <td className="px-5 py-4 text-[#FFBA08] font-bold">
                        {row.ourTarget}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-black mb-2">
          Realistic Results — What You Can Expect
        </h2>
        <p className="text-gray-400 mb-10">
          Month-by-month progress when you start Meta Ads with Promodaddy
        </p>
        <div className="space-y-4">
          {timeline.map((t) => (
            <div
              key={t.period}
              className="flex items-start gap-6 bg-[#0D1526] rounded-xl p-5 border border-white/5"
            >
              <div className="w-24 shrink-0">
                <span className="text-[#FFBA08] font-bold text-sm">
                  {t.period}
                </span>
              </div>
              <p className="text-gray-300 text-sm">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 px-6 bg-[#0D1526]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black mb-2">Industries We Serve</h2>
          <p className="text-gray-400 mb-10 max-w-3xl">
            From real estate developers in Rajasthan to coaching institutes in
            Kota — we run Meta Ads for India's most results-driven industries
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className={`rounded-xl p-6 border transition-colors ${
                  ind.featured
                    ? "bg-[#080D1A] border-[#FFBA08] shadow-[0_0_20px_rgba(255,186,8,0.15)] relative"
                    : "bg-[#080D1A] border-white/5 hover:border-[#FFBA08]/30"
                }`}
              >
                {ind.featured && (
                  <div className="absolute -top-3 left-5 bg-[#FFBA08] text-[#080D1A] text-xs font-black px-3 py-1 rounded-full">
                    PRIORITY #1
                  </div>
                )}
                <div className="text-4xl mb-3">{ind.emoji}</div>
                <div className="flex items-center gap-2 mb-2">
                  <h3
                    className={`font-black text-lg ${
                      ind.featured ? "text-[#FFBA08]" : "text-white"
                    }`}
                  >
                    {ind.name}
                  </h3>
                  {ind.priority && !ind.featured && (
                    <span className="text-xs bg-[#FFBA08]/10 text-[#FFBA08] border border-[#FFBA08]/20 px-2 py-0.5 rounded-full font-semibold">
                      {ind.priority}
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  {ind.desc}
                </p>
                {ind.cpl && (
                  <div
                    className={`text-xs font-bold px-3 py-1.5 rounded-lg inline-block ${
                      ind.featured
                        ? "bg-[#FFBA08] text-[#080D1A]"
                        : "bg-[#FFBA08]/10 text-[#FFBA08]"
                    }`}
                  >
                    {ind.cpl}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Promodaddy — Comparison */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-black mb-2">
          Why Promodaddy vs Other Meta Ads Agencies
        </h2>
        <p className="text-gray-400 mb-10">
          Here's what separates us from generic digital marketing vendors
        </p>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#080D1A] border-b border-white/10">
                <th className="px-6 py-4 text-left text-gray-400 font-semibold">
                  Parameter
                </th>
                <th className="px-6 py-4 text-left text-[#FFBA08] font-bold">
                  Promodaddy Digital
                </th>
                <th className="px-6 py-4 text-left text-gray-400 font-semibold">
                  Generic Agency
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr
                  key={row.param}
                  className={i % 2 === 0 ? "bg-[#080D1A]/60" : "bg-[#0D1526]"}
                >
                  <td className="px-6 py-4 text-gray-300 font-medium">
                    {row.param}
                  </td>
                  <td className="px-6 py-4 text-white">
                    <span className="flex items-center gap-2">
                      <CheckCircle
                        size={14}
                        className="text-[#FFBA08] shrink-0"
                      />
                      {row.promodaddy}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-400">{row.generic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-6 bg-[#0D1526]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black mb-2">
            Transparent Meta Ads Pricing
          </h2>
          <p className="text-gray-400 mb-10">
            No hidden fees. No lock-in. Cancel anytime with 30 days notice.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((p) => (
              <div
                key={p.plan}
                className={`rounded-xl p-6 border ${
                  p.highlight
                    ? "bg-[#FFBA08]/10 border-[#FFBA08] relative"
                    : "bg-[#080D1A] border-white/5"
                }`}
              >
                {p.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FFBA08] text-[#080D1A] text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <h3
                  className={`font-black text-xl mb-1 ${
                    p.highlight ? "text-[#FFBA08]" : "text-white"
                  }`}
                >
                  {p.plan}
                </h3>
                <div className="text-2xl font-black mb-1">{p.fee}</div>
                <div className="text-sm text-gray-400 mb-3">
                  Ad Spend: {p.adSpend}
                </div>
                <p className="text-xs text-gray-400">{p.best}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-black mb-10 text-center">
          Frequently Asked Questions About Meta Ads / Facebook & Instagram
          Advertising in India
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              className="bg-[#0D1526] rounded-xl border border-white/5 overflow-hidden"
            >
              <button
                type="button"
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="font-semibold text-sm md:text-base">
                  {faq.q}
                </span>
                {openFaq === i ? (
                  <ChevronUp size={18} className="text-[#FFBA08] shrink-0" />
                ) : (
                  <ChevronDown size={18} className="text-gray-400 shrink-0" />
                )}
              </button>
              {openFaq === i && (
                <div className="px-6 pb-5 text-gray-300 text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#FFBA08]/10 to-[#080D1A] border-t border-[#FFBA08]/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Ready to Get More Leads Through{" "}
            <span className="text-[#FFBA08]">Meta Ads?</span>
          </h2>
          <p className="text-gray-300 mb-8">
            Get a FREE Meta Ads audit — we'll review your existing campaigns (or
            map out what's possible for your business) and recommend a
            data-driven strategy to maximize your ROI on Facebook & Instagram.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="bg-[#FFBA08] text-[#080D1A] font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors flex items-center gap-2"
            >
              Get Free Meta Ads Audit <ArrowRight size={18} />
            </Link>
            <a
              href="tel:+918690522210"
              className="border border-white/20 text-white px-8 py-4 rounded-lg hover:border-[#FFBA08]/50 transition-colors flex items-center gap-2"
            >
              <Phone size={16} /> Call Us Now
            </a>
            <a
              href="mailto:info@promodaddy.in"
              className="border border-white/20 text-white px-8 py-4 rounded-lg hover:border-[#FFBA08]/50 transition-colors flex items-center gap-2"
            >
              <Mail size={16} /> Email Us
            </a>
          </div>
          <div className="mt-8">
            <Link
              to="/services"
              className="text-[#FFBA08] hover:underline text-sm flex items-center justify-center gap-2"
            >
              ← View All Services
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
