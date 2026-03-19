import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
  BookOpen,
  Building2,
  ChevronRight,
  Gem,
  Home,
  Hospital,
  Landmark,
  Mail,
  MapPin,
  Phone,
  ShoppingBag,
  ShoppingCart,
  Star,
  TrendingUp,
  UtensilsCrossed,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { SiteFooter } from "../components/SiteFooter";

const INDUSTRIES = [
  {
    icon: BookOpen,
    name: "Coaching Institutes",
    desc: "IIT-JEE, NEET, and competitive exam coaching centers",
  },
  {
    icon: Hospital,
    name: "Hospitals & Healthcare",
    desc: "Clinics, hospitals, and healthcare providers in Kota",
  },
  {
    icon: Home,
    name: "Real Estate",
    desc: "Builders, developers, and property dealers",
  },
  {
    icon: ShoppingCart,
    name: "E-commerce",
    desc: "Online stores and D2C brands targeting Kota market",
  },
  {
    icon: UtensilsCrossed,
    name: "Restaurants & Food",
    desc: "Dhabas, restaurants, cafes, and food delivery brands",
  },
  {
    icon: Gem,
    name: "Jewellery",
    desc: "Gold, diamond, and silver jewellery showrooms",
  },
  {
    icon: ShoppingBag,
    name: "Retail",
    desc: "Fashion, electronics, and general retail stores",
  },
  {
    icon: Landmark,
    name: "Political Campaigns",
    desc: "Candidate digital presence and voter outreach",
  },
];

const SERVICES = [
  {
    name: "SEO Services",
    desc: "Rank #1 on Google for your target keywords in Kota and beyond",
  },
  {
    name: "Google Ads / PPC",
    desc: "High-ROI paid campaigns that bring ready-to-buy customers",
  },
  {
    name: "Meta Ads (Facebook & Instagram)",
    desc: "Social ads that generate leads for your Kota business",
  },
  {
    name: "YouTube Marketing",
    desc: "Video ads that build brand awareness and drive traffic",
  },
  {
    name: "Social Media Marketing",
    desc: "Consistent, engaging content across all major platforms",
  },
  {
    name: "Website Development",
    desc: "Fast, SEO-optimized websites that convert visitors to customers",
  },
  {
    name: "Content Marketing",
    desc: "Blog posts, articles, and content that builds authority",
  },
  {
    name: "Local SEO & Google Maps",
    desc: "Dominate Google Maps and local search results in Kota",
  },
  {
    name: "Celebrity PR & Branding",
    desc: "Celebrity partnerships for maximum brand credibility",
  },
  {
    name: "Lead Generation",
    desc: "Fill your pipeline with quality leads using multi-channel approach",
  },
];

const FAQS = [
  {
    q: "Why choose a digital marketing agency in Kota?",
    a: "A local agency understands Kota's competitive market (especially coaching sector) better than any outsider. We know the local audience, local competitors, and local seasonality — giving you an edge that a generic agency can't provide.",
  },
  {
    q: "How long does SEO take to show results?",
    a: "SEO typically shows meaningful results in 3-6 months with consistent effort. However, local SEO for Kota businesses can show improvements in Google Maps rankings within 4-8 weeks of optimization.",
  },
  {
    q: "Do you work with coaching institutes in Kota?",
    a: "Yes, coaching institute marketing is one of our core specialties in Kota. We've helped numerous coaching centers increase their student admissions through targeted digital campaigns.",
  },
  {
    q: "What is the cost of digital marketing in Kota?",
    a: "Packages start from ₹5,000/month. We customize based on your budget and goals. Whether you need basic social media management or a full-stack digital campaign, we have plans that fit every budget.",
  },
  {
    q: "Do you provide Google Maps / Local SEO in Kota?",
    a: "Yes, we specialize in Google Business Profile optimization and local SEO for Kota businesses. We help your business appear in the top 3 of Google Maps for relevant local searches.",
  },
];

const STATS = [
  { value: "80+", label: "SEO Websites" },
  { value: "500+", label: "Clients Served" },
  { value: "8+", label: "Years in Kota" },
  { value: "5.0", label: "Google Rating" },
];

interface KotaPageProps {
  onAdminClick: () => void;
  isAdminView: boolean;
}

export function KotaPage({ onAdminClick, isAdminView }: KotaPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    businessType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#0a0a0a] text-[#f5f5f0] min-h-screen">
      <Navbar onAdminClick={onAdminClick} isAdminView={isAdminView} />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center bg-[#0a0a0a] overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F26A21]/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F26A21]/3 rounded-full blur-[80px]" />
          </div>

          <div className="max-w-7xl mx-auto px-6 py-24 relative">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-12 bg-[#F26A21]" />
                <span className="text-[#F26A21] text-xs font-semibold uppercase tracking-[0.3em]">
                  Digital Marketing Agency in Kota
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Best Digital Marketing
                <br />
                <span className="text-[#F26A21]">Agency in Kota</span>
              </h1>

              <p className="text-white/60 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
                Trusted by 500+ businesses across Kota. Grow your brand with
                India's most result-driven digital marketing company.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <a
                  href="#kota-contact"
                  className="inline-flex items-center gap-2 bg-[#F26A21] hover:bg-[#d95b18] text-white font-bold px-8 py-4 transition-colors text-base"
                  data-ocid="kota.primary_button"
                >
                  Get Free Consultation <ChevronRight size={18} />
                </a>
                <a
                  href="tel:+918690522210"
                  className="inline-flex items-center gap-2 border border-white/20 hover:border-[#F26A21] text-white px-8 py-4 transition-colors text-base"
                  data-ocid="kota.secondary_button"
                >
                  <Phone size={16} /> Call Now
                </a>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/10">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-bold text-[#F26A21] mb-1">
                      {stat.value}
                    </div>
                    <div className="text-white/50 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-[#111]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-px w-12 bg-[#F26A21]" />
                  <span className="text-[#F26A21] text-xs font-semibold uppercase tracking-[0.3em]">
                    About Us
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  Your Digital Growth Partner in Kota
                </h2>
                <p className="text-white/60 leading-relaxed mb-8">
                  Promodaddy Digital is Kota's leading digital marketing agency.
                  We help coaching institutes, hospitals, real estate
                  businesses, restaurants, and local brands grow online with
                  data-driven SEO, high-ROI Google Ads, and powerful social
                  media marketing.{" "}
                  <span className="text-[#F26A21] font-semibold">
                    Kota ka apna agency
                  </span>{" "}
                  — jo samjhe aapka business.
                </p>
                <ul className="space-y-3">
                  {[
                    "Strong local Kota market expertise",
                    "Customized strategies for your business",
                    "Data-driven ROI tracking",
                    "Transparent weekly reports",
                    "Full-service under one roof",
                  ].map((usp) => (
                    <li key={usp} className="flex items-center gap-3 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F26A21] shrink-0" />
                      <span className="text-white/70">{usp}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { icon: TrendingUp, num: "500+", label: "Businesses Grown" },
                  { icon: Star, num: "5.0", label: "Google Rating" },
                  { icon: Building2, num: "80+", label: "SEO Websites" },
                  { icon: BookOpen, num: "8+", label: "Years Experience" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-[#0a0a0a] border border-white/10 p-6 hover:border-[#F26A21]/40 transition-colors"
                  >
                    <item.icon size={24} className="text-[#F26A21] mb-3" />
                    <div className="text-2xl font-bold text-white mb-1">
                      {item.num}
                    </div>
                    <div className="text-white/50 text-sm">{item.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Industries We Serve in{" "}
                <span className="text-[#F26A21]">Kota</span>
              </h2>
              <p className="text-white/50">
                Specialized digital marketing for every sector
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {INDUSTRIES.map((industry, i) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-[#111] border border-white/10 hover:border-[#F26A21]/40 p-5 group transition-all duration-300 hover:bg-[#F26A21]/5"
                  data-ocid={`kota.industries.item.${i + 1}`}
                >
                  <industry.icon
                    size={28}
                    className="text-[#F26A21] mb-3 group-hover:scale-110 transition-transform"
                  />
                  <h3 className="font-semibold text-white text-sm mb-1">
                    {industry.name}
                  </h3>
                  <p className="text-white/40 text-xs leading-relaxed">
                    {industry.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-[#111]">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Our Digital Marketing Services
                <br />
                <span className="text-[#F26A21]">in Kota</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICES.map((service, i) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-[#0a0a0a] border border-white/10 hover:border-[#F26A21]/50 p-6 group transition-all duration-300"
                  data-ocid={`kota.services.item.${i + 1}`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 bg-[#F26A21] rounded-sm" />
                    <h3 className="font-bold text-white text-sm">
                      {service.name}
                    </h3>
                  </div>
                  <p className="text-white/50 text-xs leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-[#0a0a0a]">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Frequently Asked{" "}
                <span className="text-[#F26A21]">Questions</span>
              </h2>
            </motion.div>

            <Accordion type="single" collapsible className="space-y-3">
              {FAQS.map((faq) => (
                <AccordionItem
                  key={faq.q}
                  value={faq.q}
                  className="border border-white/10 px-6 hover:border-[#F26A21]/30 transition-colors"
                  data-ocid="kota.faq.panel"
                >
                  <AccordionTrigger className="text-white font-semibold text-sm text-left py-5 hover:no-underline">
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

        {/* Contact Form Section */}
        <section id="kota-contact" className="py-20 bg-[#111]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-px w-12 bg-[#F26A21]" />
                  <span className="text-[#F26A21] text-xs font-semibold uppercase tracking-[0.3em]">
                    Contact Us
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Get Your Free Digital Marketing Consultation
                </h2>
                <p className="text-white/50 mb-10 leading-relaxed">
                  Talk to our Kota-based digital marketing experts. No
                  obligations — just honest advice for your business growth.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone size={18} className="text-[#F26A21] mt-1 shrink-0" />
                    <div>
                      <p className="text-white/40 text-xs mb-1">Phone</p>
                      <a
                        href="tel:+918690522210"
                        className="text-white hover:text-[#F26A21] transition-colors font-medium"
                      >
                        +91 86905 22210
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail size={18} className="text-[#F26A21] mt-1 shrink-0" />
                    <div>
                      <p className="text-white/40 text-xs mb-1">Email</p>
                      <a
                        href="mailto:info@promodaddy.in"
                        className="text-white hover:text-[#F26A21] transition-colors font-medium"
                      >
                        info@promodaddy.in
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin
                      size={18}
                      className="text-[#F26A21] mt-1 shrink-0"
                    />
                    <div>
                      <p className="text-white/40 text-xs mb-1">Address</p>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Plot No. 26, Mahaveer Nagar Vistar Yojana,
                        <br />
                        Kota, Rajasthan - 324005
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {submitted ? (
                  <div
                    className="bg-[#0a0a0a] border border-[#F26A21]/30 p-10 text-center"
                    data-ocid="kota.contact.success_state"
                  >
                    <div className="text-5xl mb-4">✅</div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Thank You!
                    </h3>
                    <p className="text-white/60">
                      We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="bg-[#0a0a0a] border border-white/10 p-8 space-y-5"
                    data-ocid="kota.contact.panel"
                  >
                    <div>
                      <label
                        htmlFor="kota-name"
                        className="block text-white/60 text-xs uppercase tracking-wider mb-2"
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
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#F26A21]"
                        data-ocid="kota.contact.input"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="kota-phone"
                        className="block text-white/60 text-xs uppercase tracking-wider mb-2"
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
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#F26A21]"
                        data-ocid="kota.contact.input"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="kota-business"
                        className="block text-white/60 text-xs uppercase tracking-wider mb-2"
                      >
                        Business Type
                      </label>
                      <Select
                        onValueChange={(v) =>
                          setFormData((p) => ({ ...p, businessType: v }))
                        }
                      >
                        <SelectTrigger
                          className="bg-white/5 border-white/10 text-white"
                          data-ocid="kota.contact.select"
                        >
                          <SelectValue placeholder="Select your business type" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#111] border-white/10">
                          {[
                            "Coaching",
                            "Hospital",
                            "Real Estate",
                            "E-commerce",
                            "Restaurant",
                            "Other",
                          ].map((opt) => (
                            <SelectItem
                              key={opt}
                              value={opt.toLowerCase()}
                              className="text-white hover:bg-white/10"
                            >
                              {opt}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label
                        htmlFor="kota-message"
                        className="block text-white/60 text-xs uppercase tracking-wider mb-2"
                      >
                        Message
                      </label>
                      <Textarea
                        id="kota-message"
                        placeholder="Tell us about your business goals..."
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData((p) => ({
                            ...p,
                            message: e.target.value,
                          }))
                        }
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#F26A21] resize-none"
                        data-ocid="kota.contact.textarea"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-[#F26A21] hover:bg-[#d95b18] text-white font-bold py-3 h-auto rounded-none"
                      data-ocid="kota.contact.submit_button"
                    >
                      Get Free Consultation
                    </Button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
