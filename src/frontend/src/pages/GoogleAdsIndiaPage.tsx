import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BarChart3,
  Bed,
  Building2,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { SiteFooter } from "../components/SiteFooter";

const faqs = [
  {
    q: "How much does Google Ads management cost in India?",
    a: "Management fees start from Rs.3,000/month plus your ad spend budget. We recommend a minimum ad spend of Rs.10,000/month to see meaningful results. Total monthly investment starting from Rs.13,000/month all-inclusive.",
  },
  {
    q: "How long does it take to see results from Google Ads?",
    a: "Google Ads delivers results from Day 1 — as soon as campaigns go live, your ads appear. However, optimal performance typically takes 30-60 days of data collection and optimization. Month 2 onwards campaigns run at peak efficiency.",
  },
  {
    q: "What is a good ROAS for Google Ads in India?",
    a: "A healthy ROAS for Indian businesses is 4x-6x for e-commerce and lead gen. Coaching institutes typically target Rs.300-500 cost per admission lead. We set realistic targets based on your industry and competition.",
  },
  {
    q: "Can you run Google Ads for coaching institutes in Kota?",
    a: "Yes — this is one of our specializations. We have run admission campaigns for education clients in Kota's competitive market. Average CPL achieved: Rs.340. We understand the admission season cycle and parent-student targeting.",
  },
  {
    q: "Do you provide weekly reports for Google Ads?",
    a: "Yes — every client gets weekly performance reports showing impressions, clicks, CTR, CPC, conversions, cost per lead, and ROAS. Monthly strategy reviews included. You always know exactly where your money is going.",
  },
  {
    q: "What is the difference between Google Ads and SEO?",
    a: "Google Ads: Instant visibility, pay per click, stops when budget stops. SEO: Takes 3-6 months, free organic traffic, permanent results. We recommend combining both — Ads for immediate leads, SEO for long-term organic growth.",
  },
  {
    q: "Can I cancel Google Ads management anytime?",
    a: "Yes — no lock-in contracts. Cancel with 30 days notice. Your Google Ads account belongs to you and can be transferred if you choose to leave. We believe in earning your business monthly through results.",
  },
];

const pricingPlans = [
  {
    plan: "Starter",
    fee: "Rs.3,000/month",
    adSpend: "Rs.10,000/month",
    best: "Local businesses, single campaign",
    highlight: false,
  },
  {
    plan: "Growth",
    fee: "Rs.6,000/month",
    adSpend: "Rs.25,000/month",
    best: "SMBs, coaching institutes, multiple campaigns",
    highlight: true,
  },
  {
    plan: "Pro",
    fee: "Rs.12,000/month",
    adSpend: "Rs.60,000/month",
    best: "E-commerce, competitive markets, full funnel",
    highlight: false,
  },
  {
    plan: "Enterprise",
    fee: "Custom",
    adSpend: "Rs.1,50,000+",
    best: "National brands, multi-location businesses",
    highlight: false,
  },
];

const adServices = [
  {
    title: "Google Search Ads",
    icon: Target,
    desc: "Appear when users type exactly what you offer. Highest purchase intent targeting. We target buyer-intent keywords, write compelling ad copy, and optimize bids for maximum conversions at the lowest cost.",
    features: [
      "Keyword research — buyer intent only",
      "Ad copy writing & A/B testing",
      "Bid strategy optimization (Target CPA, ROAS)",
      "Negative keyword management",
      "Quality Score optimization",
    ],
  },
  {
    title: "Display & Remarketing Ads",
    icon: TrendingUp,
    desc: "Reach people who visited your website but didn't convert, or reach new audiences on 2 million+ Google partner websites across India.",
    features: [
      "Remarketing campaigns — past website visitors",
      "Custom audience creation",
      "Display banner design coordination",
      "Frequency capping to avoid ad fatigue",
      "Cross-device tracking across mobile and desktop",
    ],
  },
  {
    title: "Google Shopping Ads (E-Commerce)",
    icon: BarChart3,
    desc: "For Indian e-commerce brands — Shopping Ads show your product image, price, and store name directly in search results. Highest ROI format for product-based businesses.",
    features: [
      "Google Merchant Center setup & optimization",
      "Product feed creation and management",
      "Shopping campaign structure",
      "Performance Max for e-commerce",
      "Competitor price monitoring",
    ],
  },
  {
    title: "Performance Max Campaigns",
    icon: Zap,
    desc: "Google's newest and most powerful campaign type. Uses AI to show your ads across Search, Display, YouTube, Gmail, and Maps — automatically finding the best converting placements.",
    features: [
      "Asset group creation — images, videos, headlines",
      "Audience signal setup for faster learning",
      "Conversion tracking setup",
      "Weekly optimization and reporting",
      "Integration with Google Analytics 4",
    ],
  },
  {
    title: "Google Ads for Real Estate India",
    icon: Building2,
    desc: "Real estate is one of India's highest-value Google Ads categories. We create RERA-compliant property inquiry campaigns targeting active buyers searching for flats, plots, and commercial properties in your target city. Site visit bookings, project launch awareness, and builder brand campaigns — all managed with full transparency.",
    features: [
      "Property inquiry campaigns — 'flats in [city]', 'plots near me'",
      "RERA-compliant ad copy creation",
      "Site visit invitation landing pages with map + WhatsApp",
      "Project launch awareness campaigns — Display + Search",
      "Remarketing to website visitors who viewed property pages",
      "CPL target: Rs.800-1,500 per qualified property inquiry",
    ],
  },
  {
    title: "Google Ads for Hotels & Hospitality",
    icon: Bed,
    desc: "Hotels in India pay 20-30% OTA commission per booking. Google Ads helps you capture direct bookings from travelers searching for hotels in your city — at zero commission. We also run restaurant footfall campaigns and banquet/event lead generation ads.",
    features: [
      "Google Hotel Ads — appear directly in Google search for hotels",
      "Direct booking campaigns — reduce MakeMyTrip/OYO dependency",
      "Restaurant footfall ads — 'best restaurant near me' targeting",
      "Banquet & wedding venue lead generation campaigns",
      "Corporate booking campaigns for business travelers",
      "Seasonal offer promotion — IPL, Diwali, New Year packages",
    ],
  },
  {
    title: "Google Ads for Coaching Institutes",
    icon: Award,
    desc: "Coaching institutes have a unique admission cycle — peak season March-June, specific parent and student personas, and a competitive market. Our team has hands-on experience running admission campaigns for education clients across India.",
    features: [
      "Admission lead generation campaigns — Rs.300-500 CPL target",
      "Seasonal campaign strategy — peak admission season focus",
      "Parent vs student targeting — different messaging",
      "WhatsApp number lead capture integration",
      "Course-specific campaigns — IIT, NEET, Foundation",
      "Competitor conquest campaigns",
    ],
  },
];

const industries = [
  {
    name: "Real Estate",
    emoji: "🏠",
    featured: true,
    desc: "Property inquiry campaigns, site visit bookings, project launch ads, RERA-compliant ad copies. Target keywords: 'flats in [city]', 'property dealer near me'. CPL target: Rs.800-1,500.",
  },
  {
    name: "Hotels & Hospitality",
    emoji: "🏨",
    featured: false,
    desc: "Direct room booking campaigns, restaurant footfall ads, banquet & wedding event lead generation. Reduce OTA commission dependency with targeted Google Search Ads for direct bookings.",
  },
  {
    name: "Coaching & Education",
    emoji: "🎓",
    featured: false,
    desc: "Admission lead generation campaigns, course promotion, peak exam season targeting. CPL target: Rs.300-500 per admission inquiry. IIT, NEET, Foundation course campaigns.",
  },
  {
    name: "E-Commerce",
    emoji: "🛒",
    featured: false,
    desc: "Shopping Ads, Performance Max, product visibility campaigns for Indian online stores.",
  },
  {
    name: "Healthcare",
    emoji: "🏥",
    featured: false,
    desc: "Patient inquiry campaigns for clinics, hospitals, and doctors in India.",
  },
];

const timeline = [
  {
    period: "Week 1",
    desc: "Campaign setup, keyword research, ad copy creation, conversion tracking",
  },
  {
    period: "Week 2",
    desc: "Campaigns go live. Initial data collection begins.",
  },
  {
    period: "Week 3-4",
    desc: "First optimization — remove underperforming keywords, boost winners",
  },
  {
    period: "Month 2",
    desc: "Significant improvement in CTR and CPC. Leads start flowing consistently",
  },
  {
    period: "Month 3+",
    desc: "Fully optimized — ROAS improves, CPL decreases, budget efficiency at peak",
  },
];

export function GoogleAdsIndiaPage() {
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
      serviceType: "Google Ads Management",
      provider: {
        "@type": "Organization",
        name: "Promodaddy Digital",
        url: "https://promodaddy.in",
      },
      areaServed: "India",
      description:
        "Expert Google Ads management in India — Search, Display, Shopping & Performance Max campaigns.",
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
          name: "Google Ads / PPC",
          item: "https://promodaddy.in/services/google-ads-india",
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
          <span className="text-[#FFBA08]">Google Ads / PPC</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-[#FFBA08]/10 border border-[#FFBA08]/30 rounded-full px-4 py-2 text-[#FFBA08] text-sm font-medium mb-6">
            <Target size={14} /> Google Ads Management India
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
            Google Ads Management in India —{" "}
            <span className="text-[#FFBA08]">
              High-Converting PPC Campaigns
            </span>{" "}
            That Deliver Real ROI
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
            Google Ads is the fastest way to get in front of customers who are
            actively searching for your product or service right now. Promodaddy
            Digital manages Google Ads campaigns for Indian businesses of all
            sizes — from local shops in Kota to national brands. Every rupee you
            invest is tracked, optimized, and reported with full transparency.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/"
              className="bg-[#FFBA08] text-[#080D1A] font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors flex items-center gap-2"
            >
              Start Your Google Ads Campaign — Free Audit{" "}
              <ArrowRight size={18} />
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
            { val: "95%", label: "Google's India Search Share" },
            { val: "4x–8x", label: "Average ROAS Achieved" },
            { val: "Rs.340", label: "Avg CPL for Coaching Institutes" },
            { val: "Day 1", label: "Leads Start Flowing" },
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

      {/* Industries We Serve */}
      <section className="py-16 px-6 bg-[#080D1A]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-3">
              Industries We Serve
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Specialized Google Ads campaigns for India's key growth sectors
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className={`rounded-xl p-6 border transition-all ${
                  ind.featured
                    ? "bg-[#FFBA08]/5 border-[#FFBA08] shadow-[0_0_20px_rgba(255,186,8,0.15)]"
                    : "bg-[#0D1526] border-white/5 hover:border-[#FFBA08]/30"
                }`}
              >
                {ind.featured && (
                  <div className="inline-flex items-center gap-1 bg-[#FFBA08] text-[#080D1A] text-xs font-bold px-2 py-0.5 rounded-full mb-3">
                    ⭐ Priority Sector
                  </div>
                )}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{ind.emoji}</span>
                  <h3
                    className={`font-black text-lg ${
                      ind.featured ? "text-[#FFBA08]" : "text-white"
                    }`}
                  >
                    {ind.name}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Google Ads */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-black mb-4">
          Why Google Ads Is India's Most Powerful Lead Generation Tool
        </h2>
        <p className="text-gray-300 mb-8 max-w-3xl">
          With over 95% search engine market share in India, Google is where
          your customers are looking. Google Ads places your business at the
          exact top of search results when someone searches for your product or
          service — before all organic results. Unlike SEO which takes months,
          Google Ads delivers leads from Day 1.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "900+ million Indian internet users search on Google daily",
            "Top 3 Google Ads positions get 46% of all clicks for commercial searches",
            "Indian businesses spend over Rs.25,000 crore on Google Ads annually",
            "Average ROAS for well-managed campaigns: 4x-8x in India",
            "Coaching institutes: Average CPL Rs.300-500 with proper targeting",
            "Instant visibility — campaigns go live within 24 hours",
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
            Our Google Ads Services in India
          </h2>
          <p className="text-gray-400 mb-10">
            Full-funnel PPC management — from search to shopping to performance
            max
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
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-black mb-2">
          Realistic Results — What You Can Expect
        </h2>
        <p className="text-gray-400 mb-10">
          Month-by-month progress when you start with Promodaddy
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

      {/* Pricing */}
      <section className="py-16 px-6 bg-[#0D1526]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black mb-2">
            Transparent Google Ads Pricing
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
          Frequently Asked Questions About Google Ads / PPC in India
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
            <span className="text-[#FFBA08]">Google Ads?</span>
          </h2>
          <p className="text-gray-300 mb-8">
            Get a FREE Google Ads audit — we'll analyze your current campaigns
            (or show you what's possible for your business) and recommend the
            exact strategy to maximize your ROI.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="bg-[#FFBA08] text-[#080D1A] font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors flex items-center gap-2"
            >
              Start Your Google Ads Campaign — Free Audit{" "}
              <ArrowRight size={18} />
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
