import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle2,
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  XCircle,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { SiteFooter } from "../components/SiteFooter";

// ─── Data ─────────────────────────────────────────────────────────────────────

const STATS = [
  { value: "500+", label: "Satisfied Clients" },
  { value: "80+", label: "SEO Optimized Websites" },
  { value: "150+", label: "Campaigns Delivered" },
  { value: "₹2Cr+", label: "Ad Spend Managed" },
];

const BEST_BULLETS = [
  { icon: "🏆", text: "Campaigns for Sonu Sood, Mohammad Shami & T-Series" },
  { icon: "📍", text: "Office in Kota — we know this market personally" },
  { icon: "📊", text: "Weekly transparent reports — no hidden numbers" },
  {
    icon: "🎓",
    text: "Specialists in Coaching Institute admission lead generation",
  },
  {
    icon: "💰",
    text: "Packages starting Rs.8,000/month — no long-term lock-in",
  },
  { icon: "🚀", text: "Google Ads campaigns live within 7 working days" },
];

const INDUSTRIES = [
  {
    name: "E-Commerce",
    desc: "Helping online stores increase traffic, conversions, and sales through SEO, Google Ads, and performance marketing.",
    featured: false,
  },
  {
    name: "Healthcare",
    desc: "Driving patient inquiries and visibility for clinics, hospitals, and healthcare professionals in Kota.",
    featured: false,
  },
  {
    name: "Real Estate",
    desc: "Generating high-quality property leads using targeted ads and location-based SEO strategies.",
    featured: false,
  },
  {
    name: "Education & Coaching",
    desc: "Kota is India's coaching capital. We help coaching institutes get more admissions through Google Ads, YouTube, and local SEO — at the lowest cost per lead.",
    featured: true,
  },
  {
    name: "Hospitality",
    desc: "Boosting bookings and brand visibility for hotels and restaurants through digital marketing.",
    featured: false,
  },
  {
    name: "Political Campaigns",
    desc: "End-to-end digital election campaigns — social media, video content, ground surveys, and targeted ads.",
    featured: false,
  },
];

const SERVICES = [
  {
    num: "01",
    name: "SEO Services",
    desc: "Rank on Google when Kota customers search for your business. We offer complete SEO services in Kota — keyword research, on-page optimization, technical SEO, and Google My Business (GMB) management. Long-term organic growth, zero paid traffic dependency.",
  },
  {
    num: "02",
    name: "Google Ads / PPC",
    desc: "Get instant leads with our Google Ads management in Kota. We create high-conversion PPC campaigns for local businesses, coaching institutes, and real estate brands — with full transparency, weekly reports, and guaranteed ROI tracking. Every rupee is accounted for.",
  },
  {
    num: "03",
    name: "Meta Ads (Facebook & Instagram)",
    desc: "Reach your exact target audience in Kota and across India with precision-targeted Meta Ads. We run Facebook and Instagram ad campaigns for lead generation, brand awareness, and product sales — optimized for the lowest cost per lead.",
  },
  {
    num: "04",
    name: "YouTube Marketing",
    desc: "YouTube is India's #1 video platform. We help Kota businesses and coaching institutes grow their YouTube channel, rank videos on search, and run YouTube ad campaigns that build authority and drive qualified traffic to your website.",
  },
  {
    num: "05",
    name: "Social Media Marketing",
    desc: "Build a loyal audience on Instagram, Facebook, and LinkedIn with our social media marketing services in Kota. We handle content creation, posting strategy, community management, and paid promotions — so your brand stays active and relevant 24/7.",
  },
  {
    num: "06",
    name: "Website Development",
    desc: "Your website is your #1 sales tool. We design fast, mobile-friendly, SEO-optimized websites for businesses in Kota — built to rank on Google and convert visitors into paying customers. E-commerce, service pages, and landing pages included.",
  },
  {
    num: "07",
    name: "Celebrity PR & Personal Branding",
    desc: "Stand out with powerful personal branding and PR campaigns. Having worked with Sonu Sood, Mohammad Shami, and political leaders, we know how to build public trust and media presence — for both individuals and business brands across India.",
  },
  {
    num: "08",
    name: "Influencer Marketing",
    desc: "Partner with the right influencers to reach your target audience authentically. We connect Kota businesses with local and national influencers — from micro-influencers for niche reach to large creators for mass brand awareness. Real followers, real results.",
  },
  {
    num: "09",
    name: "Content Marketing",
    desc: "Good content builds trust before a customer even calls you. We create SEO-optimized blogs, landing page content, and social media copy for Kota businesses — content that ranks on Google, educates your audience, and generates inbound leads organically.",
  },
  {
    num: "10",
    name: "Local SEO",
    desc: 'When someone in Kota searches "best [your business] near me" — are you showing up? Our Local SEO service optimizes your Google Maps listing, GMB profile, and location-based keywords so your business ranks at the top for Kota-specific searches.',
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    label: "FREE AUDIT",
    desc: "We analyze your website, competitors, and current digital presence — at zero cost to you.",
  },
  {
    step: "02",
    label: "CUSTOM STRATEGY",
    desc: "We build a tailored plan for your Kota business — SEO, Ads, social, or all three.",
  },
  {
    step: "03",
    label: "EXECUTE",
    desc: "Campaigns go live within 7 working days. No delays, no excuses.",
  },
  {
    step: "04",
    label: "REPORT",
    desc: "Weekly transparent reports with real numbers — leads, clicks, rankings, and ROI.",
  },
];

const COMPARISON = [
  {
    factor: "Pan-India Experience",
    us: "Mumbai + Kota offices",
    them: "Only local presence",
  },
  {
    factor: "Celebrity Campaigns",
    us: "Sonu Sood, Shami, T-Series",
    them: "No celebrity work",
  },
  {
    factor: "Transparent Reporting",
    us: "Weekly reports with numbers",
    them: "Monthly, vague updates",
  },
  {
    factor: "Performance Marketing",
    us: "ROI-focused, CPL tracking",
    them: "Impression-focused",
  },
  {
    factor: "Dedicated Account Manager",
    us: "Always assigned",
    them: "Sometimes assigned",
  },
  {
    factor: "Pricing Transparency",
    us: "From Rs.8,000/month",
    them: "Hidden charges common",
  },
  {
    factor: "Contract Lock-in",
    us: "No lock-in, flexible plans",
    them: "6–12 month contracts",
  },
];

const CASE_STUDIES = [
  {
    client: "Coaching Institute, Kota",
    bigNum: "47",
    bigLabel: "Admission Leads",
    detail: "in 30 days at Rs.340 CPL via Google Ads",
    color: "from-orange-500/20 to-orange-500/5",
  },
  {
    client: "Real Estate Developer, Kota",
    bigNum: "62",
    bigLabel: "Property Inquiries",
    detail: "in 45 days via Meta + Google campaigns",
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    client: "Local Clinic, Kota",
    bigNum: "Top 3",
    bigLabel: "Google Maps Ranking",
    detail: "in 60 days via GMB + Local SEO",
    color: "from-green-500/20 to-green-500/5",
  },
];

const FAQS = [
  {
    q: "How much does digital marketing cost in Kota?",
    a: "Our packages start from Rs.8,000/month. Pricing depends on services chosen — SEO, Google Ads, or social media. We offer flexible plans with absolutely no long-term lock-in.",
  },
  {
    q: "Can you generate admissions for coaching institutes in Kota?",
    a: "Yes — we specialize in admission lead generation for coaching institutes using Google Ads, Meta Ads, and local SEO strategies built specifically for the Kota market.",
  },
  {
    q: "How long does it take to rank on Google in Kota?",
    a: "Local SEO results typically start showing in 45-90 days. Google Ads campaigns deliver results from Day 1.",
  },
  {
    q: "Is Promodaddy Digital a local Kota agency?",
    a: "Yes — our office is at Mahaveer Nagar Vistar Yojana, Kota, Rajasthan. We also operate from Mumbai for pan-India campaigns.",
  },
  {
    q: "Do you manage Google My Business (GMB) in Kota?",
    a: "Yes — GMB optimization and Google Maps ranking is a core part of our Local SEO service.",
  },
  {
    q: "Do you offer social media marketing in Kota?",
    a: "Yes — Instagram, Facebook, YouTube, and LinkedIn management with content strategy and paid campaigns.",
  },
  {
    q: "Can I get a free consultation before signing up?",
    a: "Absolutely. We offer a free digital marketing audit with zero commitment. Call us or fill the contact form.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

interface KotaPageProps {
  onAdminClick: () => void;
  isAdminView: boolean;
}

export function KotaPage({ onAdminClick, isAdminView }: KotaPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    businessType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Meta tags
    document.title = "Digital Marketing Agency in Kota | Promodaddy Digital";
    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector(
        `meta[${attr}="${name}"]`,
      ) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };
    setMeta(
      "description",
      "Promodaddy Digital — top-rated Digital Marketing Agency in Kota. SEO, Google Ads & social media for coaching institutes, businesses & brands. Real results, local expertise.",
    );
    setMeta(
      "og:title",
      "Digital Marketing Agency in Kota | Promodaddy Digital",
      true,
    );
    setMeta(
      "og:description",
      "Top-rated digital marketing agency in Kota. SEO, Google Ads, social media for coaching, real estate & businesses. Real results.",
      true,
    );
    setMeta("og:type", "website", true);
    setMeta("twitter:card", "summary");
    setMeta(
      "twitter:title",
      "Digital Marketing Agency in Kota | Promodaddy Digital",
    );

    // FAQ Schema
    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.id = "faq-schema-kota";
    faqScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
    document.head.appendChild(faqScript);

    // LocalBusiness Schema
    const bizScript = document.createElement("script");
    bizScript.type = "application/ld+json";
    bizScript.id = "localbiz-schema-kota";
    bizScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Promodaddy Digital",
      description:
        "Top-rated digital marketing agency in Kota, Rajasthan. SEO, Google Ads, social media, and performance marketing.",
      url: "https://www.promodaddy.in",
      telephone: "+919602089182",
      email: "promodaddydigital@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Mahaveer Nagar Vistar Yojana",
        addressLocality: "Kota",
        addressRegion: "Rajasthan",
        postalCode: "324005",
        addressCountry: "IN",
      },
      geo: { "@type": "GeoCoordinates", latitude: 25.1472, longitude: 75.8527 },
      openingHours: "Mo-Sa 10:00-19:00",
      priceRange: "₹₹",
      sameAs: ["https://www.promodaddy.in"],
    });
    document.head.appendChild(bizScript);

    return () => {
      document.getElementById("faq-schema-kota")?.remove();
      document.getElementById("localbiz-schema-kota")?.remove();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#080D1A] text-[#F0F4FF] min-h-screen">
      <Navbar onAdminClick={onAdminClick} isAdminView={isAdminView} />

      <main>
        {/* ── Section 1 + 2: Hero + Stats ───────────────────────────────── */}
        <section
          id="kota-hero"
          className="relative min-h-screen flex items-center overflow-hidden bg-[#080D1A]"
        >
          {/* BG decorations */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#FFBA08]/6 rounded-full blur-[140px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FFBA08]/4 rounded-full blur-[100px]" />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(255,186,8,0.06) 1px, transparent 0)",
                backgroundSize: "48px 48px",
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 py-28 w-full relative">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              {/* Left: Hero text */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-px w-10 bg-[#FFBA08]" />
                  <span className="text-[#FFBA08] text-xs font-bold uppercase tracking-[0.35em]">
                    #1 Digital Marketing Agency in Kota
                  </span>
                </div>

                <h1
                  className="text-3xl md:text-5xl lg:text-[3.2rem] font-black text-white leading-tight mb-6"
                  style={{ lineHeight: 1.15 }}
                >
                  #1 Digital Marketing Agency in Kota, Rajasthan —{" "}
                  <span className="text-[#FFBA08]">
                    Where Local Businesses Come to Grow Online
                  </span>
                </h1>

                <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                  From coaching institutes to real estate brands — we run SEO,
                  Google Ads & social media campaigns that bring actual leads,
                  not just traffic. Local team. Proven results. No lock-in
                  contracts.
                </p>

                <a
                  href="#kota-contact"
                  className="inline-flex items-center gap-2 bg-[#FFBA08] hover:bg-[#E0A800] text-white font-black px-8 py-4 transition-colors text-base"
                  data-ocid="kota.primary_button"
                >
                  Get Your FREE Audit Today <ChevronRight size={18} />
                </a>

                {/* Stats bar */}
                <div className="grid grid-cols-2 gap-5 mt-12 pt-10 border-t border-[rgba(255,186,8,0.12)]">
                  {STATS.map((s) => (
                    <div key={s.label}>
                      <div className="text-3xl font-black text-[#FFBA08] mb-1">
                        {s.value}
                      </div>
                      <div className="text-white/50 text-xs uppercase tracking-wider">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right: Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                {submitted ? (
                  <div
                    className="bg-[#0D1426] border border-[#FFBA08]/30 p-10 text-center"
                    data-ocid="kota.contact.success_state"
                  >
                    <div className="text-6xl mb-4">✅</div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Thank You!
                    </h3>
                    <p className="text-white/60">
                      We'll contact you within 24 hours with your FREE audit.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="bg-[#0D1426] border border-[rgba(255,186,8,0.12)] p-8 space-y-5"
                    data-ocid="kota.contact.panel"
                  >
                    <h3 className="text-white font-bold text-lg mb-2">
                      Get Your FREE Consultation
                    </h3>
                    <p className="text-white/40 text-xs mb-4">
                      No commitment. Zero cost. Real advice.
                    </p>

                    <div>
                      <label
                        htmlFor="kota-name"
                        className="block text-white/50 text-xs uppercase tracking-wider mb-2"
                      >
                        Full Name *
                      </label>
                      <Input
                        id="kota-name"
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData((p) => ({ ...p, name: e.target.value }))
                        }
                        className="bg-[rgba(255,186,8,0.04)] border-[rgba(255,186,8,0.12)] text-white placeholder:text-white/30 focus:border-[#FFBA08]"
                        data-ocid="kota.contact.input"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="kota-phone"
                        className="block text-white/50 text-xs uppercase tracking-wider mb-2"
                      >
                        Phone Number *
                      </label>
                      <Input
                        id="kota-phone"
                        required
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData((p) => ({ ...p, phone: e.target.value }))
                        }
                        className="bg-[rgba(255,186,8,0.04)] border-[rgba(255,186,8,0.12)] text-white placeholder:text-white/30 focus:border-[#FFBA08]"
                        data-ocid="kota.contact.input"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="kota-email"
                        className="block text-white/50 text-xs uppercase tracking-wider mb-2"
                      >
                        Email
                      </label>
                      <Input
                        id="kota-email"
                        type="email"
                        placeholder="you@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((p) => ({ ...p, email: e.target.value }))
                        }
                        className="bg-[rgba(255,186,8,0.04)] border-[rgba(255,186,8,0.12)] text-white placeholder:text-white/30 focus:border-[#FFBA08]"
                        data-ocid="kota.contact.input"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="kota-btype"
                        className="block text-white/50 text-xs uppercase tracking-wider mb-2"
                      >
                        Business Type
                      </label>
                      <Select
                        onValueChange={(v) =>
                          setFormData((p) => ({ ...p, businessType: v }))
                        }
                      >
                        <SelectTrigger
                          className="bg-[rgba(255,186,8,0.04)] border-[rgba(255,186,8,0.12)] text-white"
                          data-ocid="kota.contact.select"
                        >
                          <SelectValue placeholder="Select business type" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0D1426] border-[rgba(255,186,8,0.12)]">
                          {[
                            "Coaching Institute",
                            "Healthcare / Clinic",
                            "Real Estate",
                            "E-Commerce",
                            "Restaurant / Hotel",
                            "Political Campaign",
                            "Other",
                          ].map((o) => (
                            <SelectItem
                              key={o}
                              value={o.toLowerCase()}
                              className="text-white hover:bg-white/10"
                            >
                              {o}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label
                        htmlFor="kota-message"
                        className="block text-white/50 text-xs uppercase tracking-wider mb-2"
                      >
                        Message
                      </label>
                      <Textarea
                        id="kota-message"
                        placeholder="Tell us about your business goals..."
                        rows={3}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData((p) => ({
                            ...p,
                            message: e.target.value,
                          }))
                        }
                        className="bg-[rgba(255,186,8,0.04)] border-[rgba(255,186,8,0.12)] text-white placeholder:text-white/30 focus:border-[#FFBA08] resize-none"
                        data-ocid="kota.contact.textarea"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-[#FFBA08] hover:bg-[#E0A800] text-white font-black py-3 h-auto rounded-none text-base"
                      data-ocid="kota.contact.submit_button"
                    >
                      GET FREE AUDIT NOW →
                    </Button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Section 3: About ──────────────────────────────────────────── */}
        <section id="kota-about" className="py-20 bg-[#0D1426]">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-10 bg-[#FFBA08]" />
                <span className="text-[#FFBA08] text-xs font-bold uppercase tracking-[0.35em]">
                  About Promodaddy
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
                Boost Your Brand With the Best{" "}
                <span className="text-[#FFBA08]">
                  Digital Marketing Company in Kota
                </span>
              </h2>
              <div className="space-y-5 text-white/60 text-base leading-relaxed">
                <p>
                  Promodaddy Digital is a trusted digital marketing company in
                  Kota, helping local businesses, coaching institutes, clinics,
                  and brands build a powerful online presence and generate
                  high-quality leads.
                </p>
                <p>
                  Our team combines local Kota market knowledge with pan-India
                  campaign experience — from Google Ads and SEO to social media
                  and performance marketing. We don't just run campaigns. We
                  deliver measurable business growth.
                </p>
                <p>
                  Whether you run a coaching institute, healthcare clinic, real
                  estate business, e-commerce store, or local service in Kota —
                  we focus on one thing:{" "}
                  <span className="text-white font-semibold">
                    results that matter to your business.
                  </span>
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Section 4: What Makes Us Best ────────────────────────────── */}
        <section id="kota-best" className="py-20 bg-[#080D1A]">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-14"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-10 bg-[#FFBA08]" />
                <span className="text-[#FFBA08] text-xs font-bold uppercase tracking-[0.35em]">
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white max-w-3xl leading-tight">
                What Makes Promodaddy the Best Digital Marketing Agency in Kota
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {BEST_BULLETS.map((b, i) => (
                <motion.div
                  key={b.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex gap-4 items-start bg-[#0D1426] border border-[rgba(255,186,8,0.12)] hover:border-[#FFBA08]/40 p-6 transition-colors"
                >
                  <span className="text-3xl shrink-0 mt-0.5">{b.icon}</span>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {b.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 5: Trusted Partner ───────────────────────────────── */}
        <section id="kota-partner" className="py-20 bg-[#0D1426]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="h-px w-10 bg-[#FFBA08]" />
                  <span className="text-[#FFBA08] text-xs font-bold uppercase tracking-[0.35em]">
                    Trusted Partner
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-8 leading-tight">
                  Your Trusted Digital Marketing Partner in Kota
                </h2>
                <div className="space-y-5 text-white/60 text-sm leading-relaxed">
                  <p>
                    Kota is known for its fast-growing education sector,
                    coaching institutes, and emerging businesses. In such a
                    competitive market, having a strong digital presence is no
                    longer optional — it is essential.
                  </p>
                  <p>
                    As a leading digital marketing company in Kota, we help
                    brands stand out with strategic SEO, high-performing Google
                    Ads campaigns, conversion-focused website development, and
                    powerful social media marketing strategies.
                  </p>
                  <p className="text-white/80 border-l-2 border-[#FFBA08] pl-4 italic">
                    Kota mein sirf coaching nahi hoti — yahan real estate,
                    healthcare, retail aur hospitality bhi tezi se grow kar raha
                    hai. Promodaddy Digital in har sector mein kaam karta hai.
                    Hamare paas Kota ka local knowledge hai aur Mumbai jaisi
                    pan-India execution capability — yeh combination kisi aur
                    agency ke paas nahi.
                  </p>
                  <p>
                    Our goal is simple — generate qualified leads, increase
                    brand authority, and deliver measurable business growth
                    through data-backed marketing solutions.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-[#080D1A] border border-[rgba(255,186,8,0.12)] p-8"
              >
                <div className="text-[#FFBA08] font-black text-5xl leading-none mb-2">
                  Kota
                </div>
                <div className="text-white text-xl font-bold mb-6">
                  is our home market.
                </div>
                <div className="space-y-4">
                  {[
                    ["Local Office", "Mahaveer Nagar Vistar Yojana, Kota"],
                    ["Pan-India Reach", "Mumbai + Kota operations"],
                    [
                      "Markets Served",
                      "Education, Real Estate, Healthcare, Retail",
                    ],
                    ["Reporting", "Weekly transparent numbers"],
                    ["Min. Engagement", "No lock-in from Rs.8,000/month"],
                  ].map(([label, val]) => (
                    <div
                      key={label}
                      className="flex justify-between items-start border-b border-[rgba(255,186,8,0.08)] pb-3 last:border-0"
                    >
                      <span className="text-white/40 text-xs uppercase tracking-wider shrink-0 mr-4">
                        {label}
                      </span>
                      <span className="text-white text-xs text-right">
                        {val}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Section 6: Industries ─────────────────────────────────────── */}
        <section id="kota-industries" className="py-20 bg-[#080D1A]">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                Industries We Serve{" "}
                <span className="text-[#FFBA08]">in Kota</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {INDUSTRIES.map((ind, i) => (
                <motion.div
                  key={ind.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className={`relative p-6 border transition-all duration-300 ${
                    ind.featured
                      ? "border-[#FFBA08] bg-[#FFBA08]/8 shadow-[0_0_40px_rgba(255,186,8,0.2)] lg:col-span-1"
                      : "border-[rgba(255,186,8,0.12)] bg-[#0D1426] hover:border-[#FFBA08]/30"
                  }`}
                  data-ocid={`kota.industries.item.${i + 1}`}
                >
                  {ind.featured && (
                    <Badge className="absolute top-4 right-4 bg-[#FFBA08] text-white text-[10px] font-black tracking-widest rounded-none px-2 py-1">
                      KOTA SPECIALITY
                    </Badge>
                  )}
                  <h3
                    className={`font-black mb-3 ${ind.featured ? "text-[#FFBA08] text-xl" : "text-white text-base"}`}
                  >
                    {ind.name}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {ind.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 7: Services ───────────────────────────────────────── */}
        <section id="kota-services" className="py-20 bg-[#0D1426]">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                Our Digital Marketing Services{" "}
                <span className="text-[#FFBA08]">in Kota</span>
              </h2>
              <p className="text-white/40 text-sm">
                10 services. One agency. Zero compromise.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICES.map((svc, i) => (
                <motion.div
                  key={svc.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="bg-[#080D1A] border border-[rgba(255,186,8,0.12)] hover:border-[#FFBA08]/50 p-6 group transition-all duration-300 hover:bg-[#FFBA08]/4"
                  data-ocid={`kota.services.item.${i + 1}`}
                >
                  <div className="text-[#FFBA08]/40 font-black text-3xl leading-none mb-3">
                    {svc.num}
                  </div>
                  <h3 className="text-white font-bold text-sm mb-2 group-hover:text-[#FFBA08] transition-colors">
                    {svc.name}
                  </h3>
                  <p className="text-white/50 text-xs leading-relaxed">
                    {svc.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 8: Process ────────────────────────────────────────── */}
        <section id="kota-process" className="py-20 bg-[#080D1A]">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                How We Work —{" "}
                <span className="text-[#FFBA08]">Simple 4-Step Process</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0">
              {PROCESS_STEPS.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative p-8 border border-[rgba(255,186,8,0.12)] hover:border-[#FFBA08]/40 bg-[#0D1426] transition-colors"
                >
                  <div className="text-[#FFBA08]/20 font-black text-7xl leading-none absolute top-4 right-4 select-none">
                    {step.step}
                  </div>
                  <div className="inline-block bg-[#FFBA08] text-white text-xs font-black px-3 py-1 mb-4 tracking-widest">
                    {step.label}
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed relative z-10">
                    {step.desc}
                  </p>
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 text-[#FFBA08] text-xl z-20">
                      ›
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 9: Comparison Table ───────────────────────────────── */}
        <section id="kota-compare" className="py-20 bg-[#0D1426]">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Why Choose Promodaddy Over{" "}
                <span className="text-[#FFBA08]">Other Kota Agencies?</span>
              </h2>
            </motion.div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm" data-ocid="kota.compare.table">
                <thead>
                  <tr>
                    <th className="text-left text-white/40 font-medium text-xs uppercase tracking-wider py-4 px-4 border-b border-[rgba(255,186,8,0.12)] w-1/3">
                      Factor
                    </th>
                    <th className="text-center py-4 px-4 border-b border-[#FFBA08]/50 bg-[#FFBA08]/8 font-black text-[#FFBA08]">
                      Promodaddy Digital ✅
                    </th>
                    <th className="text-center py-4 px-4 border-b border-[rgba(255,186,8,0.12)] text-white/40 font-medium">
                      Other Local Agencies
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, i) => (
                    <tr
                      key={row.factor}
                      className={i % 2 === 0 ? "bg-[#080D1A]/50" : ""}
                    >
                      <td className="py-4 px-4 text-white/70 font-medium border-b border-[rgba(255,186,8,0.08)]">
                        {row.factor}
                      </td>
                      <td className="py-4 px-4 text-center border-b border-[#FFBA08]/20 bg-[#FFBA08]/4">
                        <div className="flex items-center justify-center gap-2">
                          <CheckCircle2
                            size={14}
                            className="text-green-400 shrink-0"
                          />
                          <span className="text-white text-xs">{row.us}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center border-b border-[rgba(255,186,8,0.08)]">
                        <div className="flex items-center justify-center gap-2">
                          <XCircle
                            size={14}
                            className="text-red-400/60 shrink-0"
                          />
                          <span className="text-white/40 text-xs">
                            {row.them}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Section 10: Case Studies ──────────────────────────────────── */}
        <section id="kota-results" className="py-20 bg-[#080D1A]">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                Real Results{" "}
                <span className="text-[#FFBA08]">We Have Delivered</span>
              </h2>
              <p className="text-white/40 text-sm">
                Numbers don't lie. Here's proof.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {CASE_STUDIES.map((cs, i) => (
                <motion.div
                  key={cs.client}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative bg-gradient-to-b ${cs.color} border border-[rgba(255,186,8,0.12)] p-8 overflow-hidden`}
                  data-ocid={`kota.results.item.${i + 1}`}
                >
                  <div className="text-6xl font-black text-white leading-none mb-2">
                    {cs.bigNum}
                  </div>
                  <div className="text-[#FFBA08] font-bold text-lg mb-4">
                    {cs.bigLabel}
                  </div>
                  <p className="text-white/60 text-sm mb-6">{cs.detail}</p>
                  <div className="text-white/30 text-xs uppercase tracking-widest border-t border-[rgba(255,186,8,0.12)] pt-4">
                    {cs.client}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 11: FAQ ───────────────────────────────────────────── */}
        <section id="kota-faq" className="py-20 bg-[#0D1426]">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                FAQs —{" "}
                <span className="text-[#FFBA08]">
                  Digital Marketing Agency in Kota
                </span>
              </h2>
            </motion.div>

            <Accordion type="single" collapsible className="space-y-3">
              {FAQS.map((faq, i) => (
                <AccordionItem
                  key={faq.q}
                  value={`faq-${i}`}
                  className="border border-[rgba(255,186,8,0.12)] px-6 hover:border-[#FFBA08]/30 transition-colors"
                  data-ocid="kota.faq.panel"
                >
                  <AccordionTrigger className="text-white font-semibold text-sm text-left py-5 hover:no-underline hover:text-[#FFBA08] transition-colors">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/60 text-sm leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* ── Section 12: Final CTA ─────────────────────────────────────── */}
        <section
          id="kota-cta"
          className="py-24 bg-[#080D1A] relative overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[#FFBA08]/5" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#FFBA08]/10 rounded-full blur-[120px]" />
          </div>

          <div className="max-w-4xl mx-auto px-6 text-center relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-block border border-[#FFBA08]/40 text-[#FFBA08] text-xs font-bold uppercase tracking-widest px-4 py-2 mb-8">
                Limited Slots Available — Book Now
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                Kota mein apna business{" "}
                <span className="text-[#FFBA08]">grow karna chahte ho?</span>
              </h2>
              <p className="text-white/60 text-lg mb-10">
                Get Your FREE Digital Marketing Audit Today — No Cost. No
                Commitment. Just Results.
              </p>
              <a
                href="#kota-contact"
                className="inline-flex items-center gap-3 bg-[#FFBA08] hover:bg-[#E0A800] text-white font-black px-10 py-5 text-base transition-colors"
                data-ocid="kota.cta.primary_button"
              >
                BOOK FREE CONSULTATION <ChevronRight size={20} />
              </a>

              {/* Contact info */}
              <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm">
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-[#FFBA08] shrink-0" />
                  <span className="text-white/50">
                    Mahaveer Nagar Vistar Yojana, Kota, Rajasthan - 324005
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-[#FFBA08] shrink-0" />
                  <a
                    href="tel:+919602089182"
                    className="text-white/70 hover:text-[#FFBA08] transition-colors"
                  >
                    +91 9602089182
                  </a>
                  <span className="text-white/20">|</span>
                  <a
                    href="tel:+918690522210"
                    className="text-white/70 hover:text-[#FFBA08] transition-colors"
                  >
                    +91 8690522210
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-[#FFBA08] shrink-0" />
                  <a
                    href="mailto:promodaddydigital@gmail.com"
                    className="text-white/70 hover:text-[#FFBA08] transition-colors"
                  >
                    promodaddydigital@gmail.com
                  </a>
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
