import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Share2,
  TrendingUp,
  Users,
  Video,
  Youtube,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { SiteFooter } from "../components/SiteFooter";

const faqs = [
  {
    q: "How many posts per month do you create?",
    a: "Starter plan: 12 posts/month. Growth: 20 posts/month. Pro: 35 posts/month. This includes a mix of feed posts, Stories, and Reels across your chosen platforms.",
  },
  {
    q: "Do you create Reels content for Instagram?",
    a: "Yes — Reels scripting, trending audio suggestions, structure, and editing guidance are included. As a dedicated Reels marketing agency in India, we prioritize this format because it gets 2-3x more reach than static posts.",
  },
  {
    q: "How long does it take to grow followers on Instagram?",
    a: "Organic follower growth takes 3-6 months of consistent posting. In the first 60 days, focus is on content quality and engagement rate. Followers grow naturally as Reels and content reach wider audiences.",
  },
  {
    q: "Can you manage social media for my real estate business?",
    a: "Yes — real estate is our #1 specialty. Project launch campaigns, property tour Reels, construction updates, buyer testimonials — we create content that generates site visit inquiries and builds developer brand trust.",
  },
  {
    q: "Do you handle social media for hotels and restaurants?",
    a: "Yes — room showcase Reels, food photography posts, wedding venue promotion, seasonal offers — we manage complete hotel and restaurant social media to drive direct bookings and footfall.",
  },
  {
    q: "Can you create Hindi content for Rajasthan markets?",
    a: "Absolutely. Hindi content for Rajasthan, UP, MP, and Hindi-belt markets consistently delivers 2x higher engagement than English content. We create bilingual social media content as part of Growth and Pro plans.",
  },
  {
    q: "Do you manage LinkedIn for B2B companies?",
    a: "Yes — LinkedIn marketing agency India B2B service is part of our Growth and Pro plans. Thought leadership content, company page management, and LinkedIn Lead Gen campaigns for professional service businesses.",
  },
];

const pricingPlans = [
  {
    plan: "Starter",
    price: "Rs.8,000/month",
    platforms: "2 platforms",
    posts: "12 posts/month",
    best: "Local businesses, new brands, small business social media",
    highlight: false,
  },
  {
    plan: "Growth",
    price: "Rs.15,000/month",
    platforms: "3 platforms",
    posts: "20 posts/month",
    best: "Real estate, hotels, coaching institutes, SMBs",
    highlight: true,
  },
  {
    plan: "Pro",
    price: "Rs.25,000/month",
    platforms: "5 platforms",
    posts: "35 posts/month",
    best: "Growing brands, enterprises, multi-location businesses",
    highlight: false,
  },
  {
    plan: "Custom",
    price: "Contact Us",
    platforms: "Any",
    posts: "Custom",
    best: "Large brands, celebrities, national campaigns",
    highlight: false,
  },
];

const smmServices = [
  {
    title: "Instagram Marketing Agency India — Reels, Feed & Stories",
    icon: Instagram,
    desc: "Instagram is India's most engaged social platform for brands. Our Instagram marketing strategy combines consistent feed posts, engaging Stories, and data-driven Reels to grow your following and convert followers into customers.",
    features: [
      "Profile optimization — bio, highlights, link in bio strategy",
      "Content calendar — 15-20 posts/month across feed, Stories, Reels",
      "Instagram growth agency strategy — trending audio, hooks, scripts",
      "Hashtag research — 20-30 targeted hashtags per post",
      "Community management — reply to comments and DMs within 24hrs",
      "Monthly analytics report — reach, engagement, follower growth",
    ],
  },
  {
    title: "Reels Marketing Agency India — India's #1 Growth Format",
    icon: Video,
    desc: "Reels is the fastest growing content format in India — delivering 2-3x more reach than static posts at zero extra cost. We create scroll-stopping short video content that builds brand awareness and drives engagement.",
    features: [
      "Reels content calendar — 8-12 Reels/month",
      "Hook scripting — first 1-3 seconds decide everything",
      "Trending audio research — weekly update on viral sounds",
      "Real Estate Reels — property tour format, before/after reveals",
      "Hotel Reels — room showcase, food videos, event highlights",
      "Performance tracking — views, shares, profile visits from Reels",
    ],
  },
  {
    title: "Facebook Marketing Agency India — Page Management & Growth",
    icon: Share2,
    desc: "Facebook remains India's largest social network with 400M+ users. Our Facebook marketing service covers complete page management for local businesses, real estate developers, hotels, and B2C brands.",
    features: [
      "Facebook Page complete setup and optimization",
      "Regular post schedule — 10-15 posts/month",
      "Facebook Group management (if applicable)",
      "Event promotion — property launches, hotel events, admission drives",
      "Facebook Shop setup for e-commerce brands",
      "Audience engagement and comment management",
    ],
  },
  {
    title: "LinkedIn Marketing Agency India B2B — Lead Generation",
    icon: Linkedin,
    desc: "For B2B companies, real estate developers, hotel chains, and founders — LinkedIn is India's most powerful professional platform. Our LinkedIn B2B service generates quality leads and builds executive authority.",
    features: [
      "LinkedIn Company Page optimization",
      "Thought leadership content — articles and posts for founders/CEOs",
      "Founder personal brand content strategy",
      "LinkedIn Lead Gen Form campaigns",
      "B2B connection and outreach strategy",
      "Monthly LinkedIn analytics report",
    ],
  },
  {
    title: "YouTube Channel Management India",
    icon: Youtube,
    desc: "YouTube is India's #1 video platform. For real estate developers, hotels, and coaching institutes — YouTube builds long-term organic trust and drives free qualified traffic.",
    features: [
      "Channel setup and branding",
      "Video SEO — titles, descriptions, tags, thumbnails",
      "Shorts strategy — India's fastest growing format",
      "Community tab management",
      "Subscriber growth strategy",
      "Monthly analytics report",
    ],
  },
  {
    title: "Content Creation — Graphics, Hindi/Vernacular & Captions",
    icon: BarChart3,
    desc: "Our in-house content team creates on-trend, brand-aligned content in English and Hindi — stopping the scroll and driving engagement for businesses across Tier 1, 2, and 3 cities in India.",
    features: [
      "Graphic design — posts, carousels, infographics",
      "Reels scripting and editing guidance",
      "Caption writing with strategic hashtags",
      "Brand guideline adherence — consistent look and feel",
      "Festive content — IPL, Diwali, Holi, Eid, New Year",
      "Hindi/vernacular content for Rajasthan + Hindi belt markets",
    ],
  },
];

const industries = [
  {
    emoji: "🏠",
    name: "Real Estate",
    priority: "Priority #1",
    featured: true,
    desc: "Project launch posts, property tour Reels, testimonial videos, sold-out announcements, site visit CTAs, construction update posts, area guide content, festive property offers.",
    strategy: [
      "Project launch campaigns — Instagram + Facebook + YouTube",
      "Property tour Reels — virtual walkthrough format (highest engagement)",
      "Construction progress update posts — builds buyer confidence",
      "Buyer testimonial videos — real experiences shared on social",
      "Sold-out and milestone announcements — creates FOMO",
      "Site visit invitation content — 'Visit this weekend' CTA posts",
      "Festive property offers — Diwali, New Year, special discount campaigns",
    ],
  },
  {
    emoji: "🏨",
    name: "Hotels & Hospitality",
    priority: "Priority #2",
    featured: false,
    desc: "Room showcase Reels, restaurant food photography, event & wedding promotion, seasonal offer graphics, guest review sharing, travel influencer collabs.",
    strategy: [
      "Room showcase Reels — cinematic property tours",
      "Restaurant food photography posts — menu highlights, chef specials",
      "Event & wedding venue promotion — banquet hall showcases",
      "Seasonal offer graphics — summer, monsoon, festive packages",
      "Guest experience sharing — review reposts and testimonials",
      "Travel influencer collaboration content",
    ],
  },
  {
    emoji: "🎓",
    name: "Coaching & Education",
    priority: "Priority #3",
    featured: false,
    desc: "Result celebration posts, faculty introduction Reels, student testimonials, exam tips content, admission season campaigns, campus tour videos.",
    strategy: [
      "Result celebration posts — rank announcements, percentages",
      "Faculty introduction Reels — teacher personality builds parent trust",
      "Student testimonial videos — real students sharing success stories",
      "Daily exam tips content — builds organic reach and authority",
      "Admission season campaigns — deadline reminders, inquiry CTAs",
      "Campus tour Reels — facilities, classrooms, library showcase",
    ],
  },
  {
    emoji: "🛒",
    name: "E-Commerce / D2C",
    priority: "",
    featured: false,
    desc: "Product Reels, unboxing content, offer announcements, customer testimonial posts, festive sale campaigns.",
    strategy: [],
  },
  {
    emoji: "🏥",
    name: "Healthcare",
    priority: "",
    featured: false,
    desc: "Doctor tips content, patient testimonials, clinic awareness posts, health awareness Reels.",
    strategy: [],
  },
];

const processSteps = [
  {
    step: "Step 1",
    title: "FREE AUDIT",
    desc: "We analyze your current social media profiles, competitor accounts, and audience insights — at zero cost.",
  },
  {
    step: "Step 2",
    title: "STRATEGY",
    desc: "Custom content strategy for your brand — platform selection, content types, posting schedule, tone of voice.",
  },
  {
    step: "Step 3",
    title: "EXECUTE",
    desc: "Content creation and posting begins within 7 working days. Consistent, on-brand content every week.",
  },
  {
    step: "Step 4",
    title: "REPORT & GROW",
    desc: "Monthly analytics report — reach, engagement, follower growth, leads. We optimize every month based on data.",
  },
];

const comparisonRows = [
  {
    factor: "Industry Expertise",
    promodaddy:
      "Real estate, hotels, coaching — we know your industry's content needs",
    others: "Generic one-size-fits-all content",
  },
  {
    factor: "Reels Specialists",
    promodaddy: "Dedicated Reels strategy — India's highest reach format",
    others: "Basic static posts only",
  },
  {
    factor: "Hindi Content",
    promodaddy: "Vernacular content for Tier 2/3 markets — 2x engagement",
    others: "English-only content",
  },
  {
    factor: "Transparent Pricing",
    promodaddy: "Clear packages from Rs.8,000/month — no hidden charges",
    others: "Hidden pricing, vague quotes",
  },
  {
    factor: "No Lock-in",
    promodaddy: "Month-to-month — cancel with 30 days notice",
    others: "6-12 month mandatory contracts",
  },
  {
    factor: "Celebrity Experience",
    promodaddy:
      "Worked with Sonu Sood, Mohammad Shami — national scale campaigns",
    others: "No notable client experience",
  },
  {
    factor: "Multi-Platform",
    promodaddy:
      "Instagram + Facebook + LinkedIn + YouTube — all managed together",
    others: "Usually 1-2 platforms only",
  },
  {
    factor: "Weekly Reports",
    promodaddy: "Regular updates — you always know what's happening",
    others: "Monthly only, often vague",
  },
];

export function SocialMediaIndiaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [expandedIndustry, setExpandedIndustry] = useState<number | null>(0);

  useEffect(() => {
    document.title =
      "Social Media Marketing Services India | Promodaddy Digital";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Promodaddy Digital — top social media agency in India. Instagram, Facebook, LinkedIn & YouTube management, Reels strategy & content for real estate, hotels & businesses. Free audit.",
      );
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
      serviceType: "Social Media Marketing Services India",
      provider: {
        "@type": "Organization",
        name: "Promodaddy Digital",
        url: "https://promodaddy.in",
      },
      areaServed: "India",
      description:
        "Complete social media marketing services in India — Instagram, Facebook, LinkedIn, YouTube, Reels strategy & content creation.",
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
          name: "Social Media Marketing",
          item: "https://promodaddy.in/social-media-marketing",
        },
      ],
    };
    const orgSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Promodaddy Digital",
      url: "https://promodaddy.in",
      telephone: "+919602089182",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kota",
        addressRegion: "Rajasthan",
        addressCountry: "IN",
      },
    };

    const scripts: HTMLScriptElement[] = [];
    for (const schema of [
      faqSchema,
      serviceSchema,
      breadcrumbSchema,
      orgSchema,
    ]) {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.text = JSON.stringify(schema);
      document.head.appendChild(s);
      scripts.push(s);
    }
    return () => {
      for (const s of scripts) {
        if (document.head.contains(s)) document.head.removeChild(s);
      }
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
          <span className="text-[#FFBA08]">Social Media Marketing</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-[#FFBA08]/10 border border-[#FFBA08]/30 rounded-full px-4 py-2 text-[#FFBA08] text-sm font-medium mb-6">
            <Share2 size={14} /> Social Media Marketing Services India
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
            Social Media Marketing Services in India —{" "}
            <span className="text-[#FFBA08]">
              Build Your Brand, Grow Your Audience, Generate Leads
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
            India has 450+ million social media users spending 3-4 hours daily
            on platforms. As a leading social media marketing services agency in
            India, Promodaddy Digital manages complete social media for real
            estate brands, hotel chains, coaching institutes, and businesses —
            from content strategy and Reels creation to community management —
            so your brand grows every single day.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/"
              className="bg-[#FFBA08] text-[#080D1A] font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors flex items-center gap-2"
            >
              Get Your Social Media Plan — Free Consultation{" "}
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/projects"
              className="border border-[#FFBA08]/40 text-white px-8 py-4 rounded-lg hover:border-[#FFBA08] hover:bg-[#FFBA08]/5 transition-colors flex items-center gap-2"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 px-6 bg-[#0D1526] border-y border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { val: "450M+", label: "Social Media Users in India" },
            { val: "3.5 hrs", label: "Avg. Daily Time on Social" },
            { val: "2-3x", label: "More Reach with Reels" },
            { val: "67%", label: "Discover Brands on Instagram" },
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

      {/* Why SMM is Non-Negotiable */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-black mb-4">
          Why Social Media Marketing Is Non-Negotiable for Indian Businesses
        </h2>
        <p className="text-gray-300 mb-8 max-w-3xl">
          In 2025, social media is not just a marketing channel — it is where
          your customers spend most of their time. Whether you are a real estate
          developer showcasing a new project, a hotel promoting weekend
          packages, or a local business building brand awareness, social media
          marketing services in India deliver unmatched reach at a fraction of
          traditional advertising cost.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            "India has 450+ million social media users — 3rd largest in the world",
            "Average Indian spends 3.5 hours daily on social platforms",
            "67% of Indian consumers discover new brands on Instagram",
            "Reels on Instagram get 2-3x more reach than static posts in India",
            "87% of B2B decision makers in India use LinkedIn for professional research",
            "YouTube is India's #1 platform for product research before purchase",
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
        <div className="bg-[#0D1526] rounded-xl p-6 border border-white/5">
          <h3 className="font-bold text-lg mb-3 text-[#FFBA08]">
            Why Choose a Social Media Agency in India Over Managing It Yourself
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Many businesses try to manage social media in-house — and struggle
            with consistency, creative quality, and strategy. A dedicated social
            media agency in India brings platform expertise, content production,
            and data-driven strategy that in-house teams cannot match. Complete
            social media management in India means more than posting. It
            includes strategy, graphic design, caption writing, hashtag
            research, community management, paid promotion, and monthly
            analytics — all coordinated for maximum growth.
          </p>
        </div>
      </section>

      {/* 6 SMM Services */}
      <section className="py-16 px-6 bg-[#0D1526]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black mb-2">
            Our Social Media Marketing Services in India
          </h2>
          <p className="text-gray-400 mb-10">
            Complete platform management — from content strategy to community
            building
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {smmServices.map((svc) => (
              <div
                key={svc.title}
                className="bg-[#080D1A] rounded-xl p-6 border border-white/5 hover:border-[#FFBA08]/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FFBA08]/10 flex items-center justify-center mb-4">
                  <svc.icon size={20} className="text-[#FFBA08]" />
                </div>
                <h3 className="font-bold text-base mb-2 leading-snug">
                  {svc.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{svc.desc}</p>
                <ul className="space-y-1">
                  {svc.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-xs text-gray-300"
                    >
                      <CheckCircle
                        size={12}
                        className="text-[#FFBA08] shrink-0 mt-0.5"
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-black mb-2">
          Industry-Specific Social Media Strategy
        </h2>
        <p className="text-gray-400 mb-10 max-w-3xl">
          We don't use generic templates. Every industry gets a dedicated
          content strategy built around what actually works for their audience.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <div
              key={ind.name}
              className={`rounded-xl border transition-all ${
                ind.featured
                  ? "bg-[#080D1A] border-[#FFBA08] shadow-[0_0_20px_rgba(255,186,8,0.1)] relative"
                  : "bg-[#0D1526] border-white/5 hover:border-[#FFBA08]/30"
              }`}
            >
              {ind.featured && (
                <div className="absolute -top-3 left-5 bg-[#FFBA08] text-[#080D1A] text-xs font-black px-3 py-1 rounded-full">
                  PRIORITY #1
                </div>
              )}
              <div className="p-6">
                <div className="text-4xl mb-3">{ind.emoji}</div>
                <div className="flex items-center gap-2 mb-2">
                  <h3
                    className={`font-black text-lg ${ind.featured ? "text-[#FFBA08]" : "text-white"}`}
                  >
                    {ind.name}
                  </h3>
                  {ind.priority && !ind.featured && (
                    <span className="text-xs bg-[#FFBA08]/10 text-[#FFBA08] border border-[#FFBA08]/20 px-2 py-0.5 rounded-full font-semibold">
                      {ind.priority}
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-sm mb-3">{ind.desc}</p>
                {ind.strategy.length > 0 && (
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedIndustry(expandedIndustry === i ? null : i)
                    }
                    className="flex items-center gap-1 text-[#FFBA08] text-xs font-semibold hover:underline"
                  >
                    {expandedIndustry === i ? "Hide strategy" : "Show strategy"}
                    {expandedIndustry === i ? (
                      <ChevronUp size={14} />
                    ) : (
                      <ChevronDown size={14} />
                    )}
                  </button>
                )}
                {expandedIndustry === i && ind.strategy.length > 0 && (
                  <ul className="mt-3 space-y-1">
                    {ind.strategy.map((s) => (
                      <li
                        key={s}
                        className="flex items-start gap-2 text-xs text-gray-300"
                      >
                        <CheckCircle
                          size={11}
                          className="text-[#FFBA08] shrink-0 mt-0.5"
                        />
                        {s}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-6 bg-[#0D1526]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black mb-2">Packages & Pricing</h2>
          <p className="text-gray-400 mb-2">
            Transparent pricing — Indian clients want to see pricing before
            contacting.
          </p>
          <p className="text-gray-500 text-sm mb-10">
            No hidden fees. No lock-in. Cancel anytime with 30 days notice.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
                  className={`font-black text-xl mb-2 ${p.highlight ? "text-[#FFBA08]" : "text-white"}`}
                >
                  {p.plan}
                </h3>
                <div className="text-2xl font-black mb-1">{p.price}</div>
                <div className="text-sm text-gray-400 mb-1">{p.platforms}</div>
                <div className="text-sm text-gray-400 mb-3">{p.posts}</div>
                <p className="text-xs text-gray-400">{p.best}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#080D1A] rounded-xl p-5 border border-[#FFBA08]/20">
            <p className="text-sm text-gray-300 font-semibold mb-2">
              ✅ All Plans Include:
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Content calendar",
                "Graphic design",
                "Caption writing",
                "Hashtag research",
                "Community management",
                "Monthly analytics report",
                "Dedicated account manager",
              ].map((item) => (
                <span
                  key={item}
                  className="text-xs bg-[#FFBA08]/10 text-[#FFBA08] border border-[#FFBA08]/20 px-3 py-1 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-black mb-2">Our Process — How We Work</h2>
        <p className="text-gray-400 mb-10">
          From first meeting to measurable results in 4 clear steps
        </p>
        <div className="grid md:grid-cols-4 gap-6">
          {processSteps.map((step, _i) => (
            <div
              key={step.step}
              className="bg-[#0D1526] rounded-xl p-6 border border-white/5 relative"
            >
              <div className="absolute -top-3 left-5 bg-[#FFBA08] text-[#080D1A] text-xs font-black px-3 py-1 rounded-full">
                {step.step}
              </div>
              <h3 className="font-black text-[#FFBA08] text-sm mt-2 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Promodaddy Comparison */}
      <section className="py-16 px-6 bg-[#0D1526]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black mb-2">
            Why Choose Promodaddy Digital as Your Social Media Agency in India?
          </h2>
          <p className="text-gray-400 mb-10">
            Here's what separates us from generic digital marketing vendors
          </p>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#080D1A] border-b border-white/10">
                  <th className="px-5 py-4 text-left text-gray-400 font-semibold">
                    Factor
                  </th>
                  <th className="px-5 py-4 text-left text-[#FFBA08] font-bold">
                    Promodaddy Digital ✅
                  </th>
                  <th className="px-5 py-4 text-left text-gray-400 font-semibold">
                    Other Agencies ❌
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.factor}
                    className={i % 2 === 0 ? "bg-[#080D1A]/60" : "bg-[#0D1526]"}
                  >
                    <td className="px-5 py-4 font-semibold text-white">
                      {row.factor}
                    </td>
                    <td className="px-5 py-4 text-gray-200">
                      <span className="flex items-start gap-2">
                        <CheckCircle
                          size={14}
                          className="text-[#FFBA08] shrink-0 mt-0.5"
                        />
                        {row.promodaddy}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-gray-400">{row.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {[
              { icon: TrendingUp, label: "5000+ Projects Delivered" },
              { icon: Users, label: "1600+ Five-Star Reviews" },
              { icon: Zap, label: "Worked with Sonu Sood, Mohammad Shami" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-3 bg-[#080D1A] rounded-lg p-4 border border-white/5"
              >
                <div className="w-8 h-8 bg-[#FFBA08]/10 rounded-lg flex items-center justify-center shrink-0">
                  <stat.icon size={16} className="text-[#FFBA08]" />
                </div>
                <span className="text-sm font-semibold">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-4">
          <Link
            to="/services/meta-ads-india"
            className="bg-[#0D1526] rounded-xl p-5 border border-white/5 hover:border-[#FFBA08]/30 transition-colors group"
          >
            <div className="text-[#FFBA08] text-xs font-semibold mb-1 uppercase tracking-wide">
              Related Service
            </div>
            <div className="font-bold group-hover:text-[#FFBA08] transition-colors flex items-center gap-2">
              Meta Ads India <ArrowRight size={14} />
            </div>
            <div className="text-gray-400 text-xs mt-1">
              Organic vs paid social — combine for best results
            </div>
          </Link>
          <Link
            to="/services/seo-services-india"
            className="bg-[#0D1526] rounded-xl p-5 border border-white/5 hover:border-[#FFBA08]/30 transition-colors group"
          >
            <div className="text-[#FFBA08] text-xs font-semibold mb-1 uppercase tracking-wide">
              Related Service
            </div>
            <div className="font-bold group-hover:text-[#FFBA08] transition-colors flex items-center gap-2">
              Content Marketing <ArrowRight size={14} />
            </div>
            <div className="text-gray-400 text-xs mt-1">
              Content creation that ranks and converts
            </div>
          </Link>
          <Link
            to="/services"
            className="bg-[#0D1526] rounded-xl p-5 border border-white/5 hover:border-[#FFBA08]/30 transition-colors group"
          >
            <div className="text-[#FFBA08] text-xs font-semibold mb-1 uppercase tracking-wide">
              Explore More
            </div>
            <div className="font-bold group-hover:text-[#FFBA08] transition-colors flex items-center gap-2">
              View All Services <ArrowRight size={14} />
            </div>
            <div className="text-gray-400 text-xs mt-1">
              YouTube, SEO, Website Development & more
            </div>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-black mb-10 text-center">
          Frequently Asked Questions About Social Media Marketing in India
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
            Ready to Build a Social Media Presence That{" "}
            <span className="text-[#FFBA08]">Grows Your Business?</span>
          </h2>
          <p className="text-gray-300 mb-4">
            Get a FREE social media audit — we will analyze your current
            profiles, compare competitors, and show you exactly what content
            strategy will grow your followers and generate real leads. No cost.
            No commitment. Just honest advice.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              to="/"
              className="bg-[#FFBA08] text-[#080D1A] font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors flex items-center gap-2"
            >
              GET FREE SOCIAL MEDIA AUDIT <ArrowRight size={18} />
            </Link>
            <a
              href="tel:+919602089182"
              className="border border-white/20 text-white px-8 py-4 rounded-lg hover:border-[#FFBA08]/50 transition-colors flex items-center gap-2"
            >
              <Phone size={16} /> +91 96020 89182
            </a>
            <a
              href="mailto:promodaddydigital@gmail.com"
              className="border border-white/20 text-white px-8 py-4 rounded-lg hover:border-[#FFBA08]/50 transition-colors flex items-center gap-2"
            >
              <Mail size={16} /> Email Us
            </a>
          </div>
          <p className="mt-4 text-gray-500 text-sm">
            Offices: Kota, Rajasthan | Mumbai, Maharashtra
          </p>
          <div className="mt-6">
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
