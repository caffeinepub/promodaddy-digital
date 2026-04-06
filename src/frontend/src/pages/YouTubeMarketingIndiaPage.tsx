import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Mail,
  Music,
  Phone,
  Play,
  Star,
  TrendingUp,
  Users,
  Video,
  Youtube,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Navbar } from "../components/Navbar";
import { SiteFooter } from "../components/SiteFooter";

const faqs = [
  {
    q: "How to get YouTube views fast in India?",
    a: "Promodaddy Digital delivers 10 to 20 million YouTube views within 24 hours using our proven campaign infrastructure — trusted by T-Series, Zee Music, and Sony Music. We combine targeted promotion and YouTube Ads for rapid, high-volume view delivery.",
  },
  {
    q: "Which is the best YouTube marketing agency in India?",
    a: "Promodaddy Digital is India's #1 choice for YouTube marketing — the only agency that has executed large-scale campaigns for T-Series, Zee Music, and Sony Music, while also serving businesses, real estate developers, and independent artists across India.",
  },
  {
    q: "Can you deliver 10 million YouTube views in 24 hours?",
    a: "Yes — we have delivered 10 to 20 million YouTube views within 24 hours for major campaigns including those for T-Series and Zee Music. This is our flagship capability and what sets us apart from every other YouTube agency in India.",
  },
  {
    q: "Do you run YouTube campaigns internationally and worldwide?",
    a: "Yes — Promodaddy Digital has executed both India and worldwide YouTube campaigns. Whether you need Indian audience views or international reach, we have the campaign infrastructure to deliver in both markets.",
  },
  {
    q: "How much does YouTube marketing cost in India?",
    a: "YouTube Ads management starts from ₹3,000/month. Channel growth packages start from ₹8,000/month. Views campaign pricing depends on volume — contact us for a custom quote based on your target views, timeline, and geographic reach.",
  },
  {
    q: "Can you promote an independent singer on YouTube?",
    a: "Yes — we help independent artists grow their YouTube channel with views campaigns, video SEO, channel optimization, and Shorts strategy. We have grown artists from zero visibility to viral reach in India.",
  },
  {
    q: "Is YouTube views promotion safe?",
    a: "We use platform-compliant methods and real audience targeting — no bot traffic or fake views. All our campaigns meet YouTube's Terms of Service. T-Series, Zee Music, and Sony Music trust our methods because they are safe and sustainable.",
  },
  {
    q: "Where is Promodaddy Digital based?",
    a: "Promodaddy Digital has offices in Kota, Rajasthan and Mumbai, Maharashtra — serving clients across India and internationally for YouTube marketing, digital advertising, and complete digital marketing services.",
  },
];

const services = [
  {
    icon: <Play className="w-7 h-7" />,
    title: "YouTube Views Campaign — 10M+ Views in 24 Hours",
    desc: "Our flagship service. We deliver high-volume, fast-turnaround YouTube view campaigns that T-Series, Zee Music, and Sony Music have trusted for their most important launches.",
    features: [
      "10–20 million views within 24 hours — India's fastest",
      "India and worldwide audience targeting",
      "New song launch campaigns — views from Hour 1",
      "Film trailer views — trend-driving campaigns",
      "Sustained view campaigns — 7 to 30 days delivery",
      "Independent artist campaigns — zero to viral",
    ],
  },
  {
    icon: <BarChart3 className="w-7 h-7" />,
    title: "YouTube Ads Management — India & Worldwide",
    desc: "Precision-targeted YouTube Ads for music labels, businesses, real estate, hotels, and coaching institutes — in India and internationally.",
    features: [
      "Skippable In-Stream, Non-Skippable & Bumper Ads",
      "Discovery Ads — appear in YouTube search results",
      "Shorts Ads — for younger Indian audiences",
      "Masthead Ads — YouTube homepage takeover",
      "Music genre and artist interest targeting",
      "Competitor channel targeting available",
    ],
  },
  {
    icon: <TrendingUp className="w-7 h-7" />,
    title: "YouTube SEO — Video Ranking India",
    desc: "Optimize your videos to rank in YouTube search and on Google — bringing organic views for months and years without paying per view.",
    features: [
      "Keyword research for YouTube India",
      "Video title optimization — search-friendly",
      "Description writing — 200–300 words, keyword-rich",
      "Tag strategy — broad, specific, competitor tags",
      "Chapter markers for improved watch time",
      "Closed captions for algorithm indexing",
    ],
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "YouTube Channel Growth India",
    desc: "We grow channels for independent artists, businesses, coaching institutes, real estate brands, and hotels using content strategy, SEO, and smart promotion.",
    features: [
      "Channel audit — full performance and gap analysis",
      "Channel optimization — banner, logo, about section",
      "Content strategy — topics that rank and grow",
      "Upload schedule — consistency plan for algorithm",
      "Playlist structure — improve session watch time",
      "Cross-platform promotion — YouTube + Instagram + Facebook",
    ],
  },
  {
    icon: <Video className="w-7 h-7" />,
    title: "YouTube Shorts Strategy India",
    desc: "India is the #1 market for Shorts globally. We build Shorts strategies that drive subscriber growth and brand awareness in weeks — organically.",
    features: [
      "Shorts content calendar — 3–5 Shorts per week",
      "Hook writing — first 1–2 seconds that hook viewers",
      "Trending audio and format research — weekly update",
      "Shorts for music — song teasers, lyrics clips",
      "Shorts for business — product demos, tips",
      "Shorts-to-subscriber funnel — convert views to followers",
    ],
  },
  {
    icon: <Music className="w-7 h-7" />,
    title: "Music Video Promotion — India & Worldwide",
    desc: "Our experience with T-Series, Zee Music, and Sony Music gives us deep expertise in music industry campaigns — speed, scale, and trending momentum globally.",
    features: [
      "New song launch — India + worldwide audience reach",
      "Music video trending campaigns — YouTube trending tab",
      "Singer personal branding and channel growth",
      "Lyric video and behind-the-scenes promotion",
      "Collaboration video cross-promotion",
      "Independent artist launch — zero to viral strategy",
    ],
  },
];

const industries = [
  {
    icon: "🎵",
    title: "Music Labels (Our #1 Specialty)",
    desc: "T-Series, Zee Music, Sony Music — large-scale song and music video campaigns. 10–20M views in 24 hours. India + worldwide promotion.",
    featured: true,
  },
  {
    icon: "🎬",
    title: "Bollywood Films",
    desc: "Movie trailer promotions, song releases, cast interview videos — rapid view delivery for launch week momentum across India.",
    featured: false,
  },
  {
    icon: "🎤",
    title: "Independent Singers & Artists",
    desc: "Complete YouTube growth — views, subscribers, video SEO, channel optimization. Help emerging artists get discovered in India.",
    featured: false,
  },
  {
    icon: "🏠",
    title: "Real Estate",
    desc: "Property walkthrough videos, project launch videos, site tour content — YouTube as trust-building lead generation for developers.",
    featured: false,
  },
  {
    icon: "🏨",
    title: "Hotels & Hospitality",
    desc: "Hotel room showcase videos, restaurant content, wedding venue walkthroughs, seasonal offer video campaigns.",
    featured: false,
  },
  {
    icon: "🎓",
    title: "Coaching & Education",
    desc: "Faculty lecture samples, result videos, admission campaign videos — YouTube for coaching institute credibility and student trust.",
    featured: false,
  },
];

const comparison = [
  {
    factor: "Music Label Experience",
    us: "T-Series, Zee Music, Sony Music — proven at India's highest level",
    them: "No major music label work",
  },
  {
    factor: "Speed",
    us: "10–20M views in 24 hours — fastest delivery in India",
    them: "Days or weeks for same result",
  },
  {
    factor: "India + Worldwide",
    us: "Campaigns executed in India and internationally",
    them: "India only or no global experience",
  },
  {
    factor: "Scale",
    us: "500+ YouTube campaigns across music, business, entertainment",
    them: "Limited campaign portfolio",
  },
  {
    factor: "Full YouTube Suite",
    us: "Views + Ads + SEO + Channel Growth + Shorts + Music Promo",
    them: "1–2 services only",
  },
  {
    factor: "Bollywood Experience",
    us: "Film trailer and song launch campaigns",
    them: "No entertainment industry experience",
  },
  {
    factor: "Independent Artist Growth",
    us: "Help emerging artists from zero to viral",
    them: "Only established clients",
  },
  {
    factor: "Transparent Reporting",
    us: "Daily reports for views, weekly for ads and SEO",
    them: "Monthly or no reporting",
  },
  {
    factor: "Based in India",
    us: "Kota & Mumbai — deep understanding of Indian audience",
    them: "Foreign agency or no local team",
  },
  {
    factor: "No Lock-in Contracts",
    us: "Flexible — per campaign or monthly retainer",
    them: "Long-term contracts mandatory",
  },
];

const process = [
  {
    step: "01",
    title: "Campaign Strategy",
    desc: "We understand your goal — views, trending, channel growth, or brand awareness. We define target audience, geography (India / worldwide), and success metrics.",
  },
  {
    step: "02",
    title: "Audience Targeting",
    desc: "We identify the right audience — music fans, regional demographics, age groups, interest clusters. India-specific or worldwide targeting as required.",
  },
  {
    step: "03",
    title: "Campaign Launch",
    desc: "Campaigns go live. For views campaigns — delivery begins within hours. For ads campaigns — live within 24 hours of approval. No delays.",
  },
  {
    step: "04",
    title: "Real-Time Optimization",
    desc: "We monitor performance hourly for fast campaigns. Underperforming segments paused, winning segments boosted. Speed + quality maintained.",
  },
  {
    step: "05",
    title: "Reporting",
    desc: "Daily report for views campaigns. Weekly report for ads and SEO. You see exactly what was delivered, where, and what the impact was.",
  },
];

const resultsData = [
  {
    client: "T-Series",
    about: "India's #1 YouTube channel — 260M+ subscribers",
    campaign: "Large-scale song campaign — India",
    result: "10M+ views in 24 hours",
  },
  {
    client: "Zee Music Company",
    about: "Major Bollywood music label",
    campaign: "Music video views — India",
    result: "Rapid delivery for new launch",
  },
  {
    client: "Sony Music India",
    about: "International music powerhouse",
    campaign: "YouTube promotion campaign",
    result: "High-volume fast-turnaround",
  },
  {
    client: "Bollywood Films",
    about: "Film production houses",
    campaign: "Trailer + song — India",
    result: "Trending week momentum",
  },
  {
    client: "Worldwide Campaigns",
    about: "International music & brand clients",
    campaign: "Global YouTube campaigns",
    result: "India + worldwide execution",
  },
  {
    client: "Independent Artists",
    about: "Emerging singers — India",
    campaign: "Channel growth + views",
    result: "Zero to viral growth",
  },
];

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatBar() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const views = useCountUp(10, 1800, visible);
  const labels = useCountUp(3, 1200, visible);
  const hours = useCountUp(24, 1500, visible);
  const campaigns = useCountUp(500, 2000, visible);
  return (
    <div ref={ref} className="bg-[#0D1526] border-y border-[#FFBA08]/20 py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { val: `${views}M+`, label: "Views Delivered in 24 Hours" },
          {
            val: `${labels}`,
            label: "Major Music Labels — T-Series, Zee Music, Sony",
          },
          { val: `${hours} Hrs`, label: "Campaign Live to Results Delivered" },
          {
            val: `${campaigns}+`,
            label: "YouTube Campaigns — India & Worldwide",
          },
        ].map((s) => (
          <div key={s.label}>
            <div className="text-3xl md:text-4xl font-black text-[#FFBA08] mb-2">
              {s.val}
            </div>
            <div className="text-sm text-[#A0AABF]">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function YouTubeMarketingIndiaPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [openService, setOpenService] = useState<string | null>(null);

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
    name: "YouTube Marketing Agency India",
    provider: {
      "@type": "Organization",
      name: "Promodaddy Digital",
      url: "https://www.promodaddy.in",
    },
    areaServed: "India",
    description:
      "India's #1 YouTube marketing agency trusted by T-Series, Zee Music, and Sony Music.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.promodaddy.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://www.promodaddy.in/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "YouTube Marketing",
        item: "https://www.promodaddy.in/services/youtube-marketing-agency-india",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#080D1A] text-[#F0F4FF] font-space">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD schema
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD schema
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD schema
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar onAdminClick={() => {}} isAdminView={false} />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#080D1A] via-[#0D1526] to-[#080D1A]" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 0%, #FF0000 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          {/* Breadcrumb */}
          <nav className="text-xs text-[#A0AABF] mb-6 flex items-center justify-center gap-2">
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
            <span className="text-[#FFBA08]">YouTube Marketing</span>
          </nav>

          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-[#FF0000]/10 border border-[#FF0000]/30 rounded-full px-5 py-2 text-sm text-[#FF6B6B] font-semibold mb-6">
            <Youtube className="w-4 h-4" />
            India's #1 YouTube Marketing Agency
          </div>

          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4">
            YouTube Marketing Agency India —{" "}
            <span className="text-[#FFBA08]">
              10 Million+ Views in 24 Hours.
            </span>
            <br />
            <span className="text-[#FF6B6B]">
              India's #1 Choice for Music Labels.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-[#A0AABF] italic mb-4 font-medium">
            Your video deserves to trend — not get lost.
          </p>

          <p className="text-base md:text-lg text-[#C0CADF] max-w-3xl mx-auto mb-3">
            Promodaddy Digital is one of India's most experienced YouTube
            marketing agencies — trusted by{" "}
            <span className="text-[#FFBA08] font-semibold">
              T-Series, Zee Music, Sony Music
            </span>
            , and leading Bollywood film productions. We have delivered 10 to 20
            million views within 24 hours and executed India and worldwide
            YouTube campaigns.
          </p>
          <p className="text-sm text-[#7A8499] mb-10">
            Based in{" "}
            <span className="text-[#FFBA08]">Kota, Rajasthan & Mumbai</span> —
            Serving India and Global Clients.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-[#FFBA08] text-[#080D1A] font-bold px-8 py-4 rounded-full text-lg hover:bg-[#FFD04D] transition-all shadow-[0_0_30px_rgba(255,186,8,0.4)] flex items-center gap-2 justify-center"
            >
              Start Your YouTube Campaign — Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/projects"
              className="border border-[#FFBA08]/40 text-[#FFBA08] font-semibold px-8 py-4 rounded-full text-lg hover:bg-[#FFBA08]/10 transition-all flex items-center gap-2 justify-center"
            >
              <Play className="w-5 h-5" /> See Our Work
            </Link>
          </div>

          {/* Trust Logos */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-[#A0AABF] text-sm">
            <span className="font-bold text-white">Trusted by:</span>
            {[
              "T-Series",
              "Zee Music",
              "Sony Music",
              "Bollywood Productions",
            ].map((b) => (
              <span
                key={b}
                className="border border-[#FFBA08]/30 rounded-full px-4 py-1 text-[#FFBA08] text-xs font-semibold"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST STATS BAR */}
      <StatBar />

      {/* WHY PROMODADDY #1 */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
            Why Promodaddy Digital Is{" "}
            <span className="text-[#FFBA08]">India's #1 Choice</span> for
            YouTube Marketing
          </h2>
          <p className="text-center text-[#A0AABF] max-w-3xl mx-auto mb-10">
            Most agencies treat YouTube marketing as a side service. For
            Promodaddy Digital — it is our core expertise and our strongest
            proof of capability.
          </p>
          <div className="bg-[#0D1526] border border-[#FFBA08]/20 rounded-2xl p-8 mb-8">
            <p className="text-[#C0CADF] text-lg leading-relaxed mb-6">
              We have been trusted by India's biggest music companies to execute
              their most critical YouTube campaigns — where speed, scale, and
              results are non-negotiable. When T-Series launches a new song,
              when Zee Music promotes a film track, when Sony Music needs a
              video to trend — they need a partner who delivers. That partner is
              Promodaddy Digital.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "10 to 20 million YouTube views delivered within 24 hours",
                "India and worldwide YouTube campaigns successfully executed",
                "Campaigns for T-Series — India's #1 YouTube channel (260M+ subscribers)",
                "Projects for Zee Music Company and Sony Music India",
                "Bollywood film trailer and song launch promotions",
                "Independent singer growth campaigns — from zero to viral",
                "500+ YouTube campaigns across music, entertainment and business",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FFBA08] flex-shrink-0 mt-0.5" />
                  <span className="text-[#C0CADF] text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5-STEP PROCESS */}
      <section className="py-20 px-4 bg-[#0D1526]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
            How Our YouTube Campaign Works —{" "}
            <span className="text-[#FFBA08]">5 Simple Steps</span>
          </h2>
          <p className="text-center text-[#A0AABF] mb-12 max-w-2xl mx-auto">
            When you see 10M views in 24hrs — you want to know HOW. Here's our
            proven process.
          </p>
          <div className="grid md:grid-cols-5 gap-6">
            {process.map((p, i) => (
              <div key={p.step} className="relative">
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#FFBA08]/40 to-transparent z-0" />
                )}
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-[#FFBA08] text-[#080D1A] font-black text-xl rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(255,186,8,0.3)]">
                    {p.step}
                  </div>
                  <h3 className="font-bold text-[#FFBA08] text-sm mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#A0AABF] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
            Industries We <span className="text-[#FFBA08]">Serve</span>
          </h2>
          <p className="text-center text-[#A0AABF] mb-12 max-w-2xl mx-auto">
            From India's biggest music labels to real estate developers and
            coaching institutes — we deliver results across all sectors.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <div
                key={ind.title}
                className={`rounded-2xl p-6 border transition-all ${
                  ind.featured
                    ? "bg-[#FFBA08]/10 border-[#FFBA08] shadow-[0_0_30px_rgba(255,186,8,0.15)]"
                    : "bg-[#0D1526] border-[#1E2D4A] hover:border-[#FFBA08]/40"
                }`}
              >
                <div className="text-3xl mb-3">{ind.icon}</div>
                <h3
                  className={`font-bold text-lg mb-2 ${ind.featured ? "text-[#FFBA08]" : "text-white"}`}
                >
                  {ind.title}{" "}
                  {ind.featured && (
                    <span className="text-xs bg-[#FFBA08] text-[#080D1A] px-2 py-0.5 rounded-full ml-2 font-black">
                      Our #1
                    </span>
                  )}
                </h3>
                <p className="text-sm text-[#A0AABF] leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 SERVICES */}
      <section className="py-20 px-4 bg-[#0D1526]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
            Our Complete YouTube Marketing Services —{" "}
            <span className="text-[#FFBA08]">India & Worldwide</span>
          </h2>
          <p className="text-center text-[#A0AABF] mb-12 max-w-2xl mx-auto">
            Every YouTube goal covered — views, ads, SEO, channel growth,
            Shorts, and music video promotion.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-[#080D1A] border border-[#1E2D4A] rounded-2xl overflow-hidden hover:border-[#FFBA08]/40 transition-all"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenService(openService === s.title ? null : s.title)
                  }
                  className="w-full flex items-center gap-4 p-6 text-left"
                >
                  <div className="w-14 h-14 bg-[#FFBA08]/10 border border-[#FFBA08]/30 rounded-xl flex items-center justify-center text-[#FFBA08] flex-shrink-0">
                    {s.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white text-base">
                      {s.title}
                    </h3>
                    <p className="text-sm text-[#A0AABF] mt-1 line-clamp-2">
                      {s.desc}
                    </p>
                  </div>
                  {openService === s.title ? (
                    <ChevronUp className="w-5 h-5 text-[#FFBA08] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#A0AABF] flex-shrink-0" />
                  )}
                </button>
                {openService === s.title && (
                  <div className="px-6 pb-6 border-t border-[#1E2D4A] pt-4">
                    <ul className="space-y-2">
                      {s.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-sm text-[#C0CADF]"
                        >
                          <CheckCircle className="w-4 h-4 text-[#FFBA08] flex-shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF OF RESULTS */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
            Real YouTube Campaigns We Have Delivered —{" "}
            <span className="text-[#FFBA08]">India & Worldwide</span>
          </h2>
          <p className="text-center text-[#A0AABF] mb-12 max-w-2xl mx-auto">
            T-Series + Zee Music + Sony Music + Worldwide = nobody in India can
            match this.
          </p>

          {/* Featured Result */}
          <div className="bg-gradient-to-r from-[#FFBA08]/10 to-[#FF0000]/10 border border-[#FFBA08] rounded-2xl p-8 mb-8 text-center">
            <div className="text-5xl font-black text-[#FFBA08] mb-2">
              10–20 Million Views
            </div>
            <div className="text-xl font-bold text-white mb-3">in 24 Hours</div>
            <p className="text-[#C0CADF] max-w-2xl mx-auto">
              Our fastest achievement — delivering 10 to 20 million YouTube
              views within a single 24-hour window for major song launches. We
              have executed these campaigns for India's biggest music labels and
              have the speed, infrastructure, and expertise to repeat this at
              scale.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#1E2D4A]">
            <table className="w-full">
              <thead>
                <tr className="bg-[#0D1526] border-b border-[#1E2D4A]">
                  {["Client", "About", "Campaign", "Result"].map((h) => (
                    <th
                      key={h}
                      className="text-left py-4 px-6 text-[#FFBA08] font-bold text-sm"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {resultsData.map((row) => (
                  <tr
                    key={row.client}
                    className="border-b border-[#1E2D4A] hover:bg-[#0D1526]/50 transition-colors"
                  >
                    <td className="py-4 px-6 font-bold text-white text-sm">
                      {row.client}
                    </td>
                    <td className="py-4 px-6 text-[#A0AABF] text-sm">
                      {row.about}
                    </td>
                    <td className="py-4 px-6 text-[#C0CADF] text-sm">
                      {row.campaign}
                    </td>
                    <td className="py-4 px-6">
                      <span className="bg-[#FFBA08]/10 border border-[#FFBA08]/30 text-[#FFBA08] text-xs font-semibold px-3 py-1 rounded-full">
                        {row.result}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-20 px-4 bg-[#0D1526]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
            Why Choose{" "}
            <span className="text-[#FFBA08]">Promodaddy Digital</span>
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-[#1E2D4A]">
            <table className="w-full">
              <thead>
                <tr className="bg-[#080D1A] border-b border-[#1E2D4A]">
                  <th className="text-left py-4 px-6 text-[#A0AABF] font-semibold text-sm">
                    Factor
                  </th>
                  <th className="text-left py-4 px-6 text-[#FFBA08] font-bold text-sm">
                    Promodaddy Digital ✅
                  </th>
                  <th className="text-left py-4 px-6 text-[#7A8499] font-semibold text-sm">
                    Other Agencies ❌
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr
                    key={row.factor}
                    className="border-b border-[#1E2D4A] hover:bg-[#080D1A]/50 transition-colors"
                  >
                    <td className="py-4 px-6 font-semibold text-white text-sm">
                      {row.factor}
                    </td>
                    <td className="py-4 px-6 text-[#C0CADF] text-sm">
                      {row.us}
                    </td>
                    <td className="py-4 px-6 text-[#7A8499] text-sm">
                      {row.them}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
            YouTube Marketing{" "}
            <span className="text-[#FFBA08]">Pricing Plans</span>
          </h2>
          <p className="text-center text-[#A0AABF] mb-12">
            Transparent pricing. No hidden fees. Cancel anytime.
          </p>

          {/* Views Campaign */}
          <h3 className="text-xl font-bold text-[#FFBA08] mb-4 text-center">
            YouTube Views Campaigns
          </h3>
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {[
              {
                plan: "Starter",
                views: "1L – 5L Views",
                best: "New artists, small launches",
                featured: false,
              },
              {
                plan: "Growth",
                views: "5L – 50L Views",
                best: "Mid-size music campaigns",
                featured: false,
              },
              {
                plan: "Premium",
                views: "50L – 1Cr Views",
                best: "Major label launches",
                featured: true,
              },
              {
                plan: "Enterprise",
                views: "1Cr+ Views",
                best: "T-Series scale — India + Worldwide",
                featured: false,
              },
            ].map((p) => (
              <div
                key={p.plan}
                className={`rounded-2xl p-6 border text-center ${
                  p.featured
                    ? "bg-[#FFBA08]/10 border-[#FFBA08] shadow-[0_0_30px_rgba(255,186,8,0.15)]"
                    : "bg-[#0D1526] border-[#1E2D4A]"
                }`}
              >
                {p.featured && (
                  <div className="text-xs bg-[#FFBA08] text-[#080D1A] font-black px-3 py-1 rounded-full inline-block mb-3">
                    MOST POPULAR
                  </div>
                )}
                <h4
                  className={`font-black text-xl mb-2 ${p.featured ? "text-[#FFBA08]" : "text-white"}`}
                >
                  {p.plan}
                </h4>
                <div className="text-[#FFBA08] font-bold text-lg mb-2">
                  {p.views}
                </div>
                <div className="text-[#A0AABF] text-sm mb-4">{p.best}</div>
                <Link
                  to="/"
                  className={`block py-2 px-4 rounded-full text-sm font-semibold transition-all ${
                    p.featured
                      ? "bg-[#FFBA08] text-[#080D1A] hover:bg-[#FFD04D]"
                      : "border border-[#FFBA08]/40 text-[#FFBA08] hover:bg-[#FFBA08]/10"
                  }`}
                >
                  Get Custom Quote
                </Link>
              </div>
            ))}
          </div>

          {/* Ads + Channel Growth */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-[#FFBA08] mb-4 text-center">
                YouTube Ads Management
              </h3>
              <div className="space-y-3">
                {[
                  {
                    plan: "Starter",
                    price: "₹3,000/month + ₹10,000 ad spend",
                    best: "Local businesses, single campaign",
                  },
                  {
                    plan: "Growth",
                    price: "₹6,000/month + ₹25,000 ad spend",
                    best: "Real estate, hotels, music ads",
                  },
                  {
                    plan: "Pro",
                    price: "₹12,000/month + ₹60,000 ad spend",
                    best: "Large brands, film promotions",
                  },
                ].map((p) => (
                  <div
                    key={p.plan}
                    className="bg-[#0D1526] border border-[#1E2D4A] rounded-xl p-4 flex items-center justify-between"
                  >
                    <div>
                      <div className="font-bold text-white">{p.plan}</div>
                      <div className="text-xs text-[#A0AABF]">{p.best}</div>
                    </div>
                    <div className="text-[#FFBA08] font-semibold text-sm text-right">
                      {p.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#FFBA08] mb-4 text-center">
                Channel Growth & SEO
              </h3>
              <div className="space-y-3">
                {[
                  {
                    plan: "Starter",
                    price: "₹8,000/month",
                    includes: "Channel audit + SEO + upload strategy",
                  },
                  {
                    plan: "Growth",
                    price: "₹15,000/month",
                    includes: "Growth + Shorts strategy + community",
                  },
                  {
                    plan: "Pro",
                    price: "₹25,000/month",
                    includes: "Full strategy + content + cross-platform",
                  },
                ].map((p) => (
                  <div
                    key={p.plan}
                    className="bg-[#0D1526] border border-[#1E2D4A] rounded-xl p-4 flex items-center justify-between"
                  >
                    <div>
                      <div className="font-bold text-white">{p.plan}</div>
                      <div className="text-xs text-[#A0AABF]">{p.includes}</div>
                    </div>
                    <div className="text-[#FFBA08] font-semibold text-sm">
                      {p.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-[#0D1526]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
            Frequently Asked Questions About{" "}
            <span className="text-[#FFBA08]">YouTube Marketing in India</span>
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-[#080D1A] border border-[#1E2D4A] rounded-xl overflow-hidden hover:border-[#FFBA08]/40 transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === faq.q ? null : faq.q)}
                  className="w-full flex items-center justify-between p-6 text-left gap-4"
                >
                  <span className="font-semibold text-white">{faq.q}</span>
                  {openFaq === faq.q ? (
                    <ChevronUp className="w-5 h-5 text-[#FFBA08] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#A0AABF] flex-shrink-0" />
                  )}
                </button>
                {openFaq === faq.q && (
                  <div className="px-6 pb-6 text-[#A0AABF] text-sm leading-relaxed border-t border-[#1E2D4A] pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#FFBA08]/10 to-[#FF0000]/10 border border-[#FFBA08]/30 rounded-3xl p-12">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              Ready to Launch India's Next Big{" "}
              <span className="text-[#FFBA08]">YouTube Campaign?</span>
            </h2>
            <p className="text-[#C0CADF] text-lg mb-4 max-w-2xl mx-auto">
              Whether you are a music label launching a new song, an artist
              building a YouTube channel, or a business using YouTube for leads
              — Promodaddy Digital has the speed, scale, and experience to
              deliver results.
            </p>
            <p className="text-[#FFBA08] font-semibold mb-8">
              Trusted by T-Series. Trusted by Zee Music. Trusted by Sony Music.
              <br />
              India + Worldwide Campaigns. Based in Kota & Mumbai.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link
                to="/"
                className="bg-[#FFBA08] text-[#080D1A] font-black px-10 py-4 rounded-full text-lg hover:bg-[#FFD04D] transition-all shadow-[0_0_30px_rgba(255,186,8,0.4)] flex items-center gap-2 justify-center"
              >
                START YOUR YOUTUBE CAMPAIGN
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
              <a
                href="tel:+919602089182"
                className="flex items-center gap-2 text-[#C0CADF] hover:text-[#FFBA08] transition-colors"
              >
                <Phone className="w-4 h-4" /> +91 96020 89182
              </a>
              <a
                href="tel:+918690522210"
                className="flex items-center gap-2 text-[#C0CADF] hover:text-[#FFBA08] transition-colors"
              >
                <Phone className="w-4 h-4" /> +91 86905 22210
              </a>
              <a
                href="mailto:promodaddydigital@gmail.com"
                className="flex items-center gap-2 text-[#C0CADF] hover:text-[#FFBA08] transition-colors"
              >
                <Mail className="w-4 h-4" /> promodaddydigital@gmail.com
              </a>
            </div>
            <p className="text-[#7A8499] text-sm mt-4">
              Offices: Kota, Rajasthan | Mumbai, Maharashtra
            </p>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <div className="py-8 bg-[#0D1526] border-t border-[#1E2D4A]">
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/services"
            className="text-[#A0AABF] hover:text-[#FFBA08] transition-colors text-sm flex items-center gap-1"
          >
            <ArrowRight className="w-4 h-4" /> View All Services
          </Link>
          <Link
            to="/projects"
            className="text-[#A0AABF] hover:text-[#FFBA08] transition-colors text-sm flex items-center gap-1"
          >
            <Star className="w-4 h-4" /> Our Projects
          </Link>
          <Link
            to="/kota"
            className="text-[#A0AABF] hover:text-[#FFBA08] transition-colors text-sm flex items-center gap-1"
          >
            <Zap className="w-4 h-4" /> Digital Marketing Kota
          </Link>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
