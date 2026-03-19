import { Mail, MapPin, Phone } from "lucide-react";
import {
  SiFacebook,
  SiInstagram,
  SiLinkedin,
  SiX,
  SiYoutube,
} from "react-icons/si";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "promodaddy.in";

  return (
    <footer className="bg-[#000] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold mb-4">
              <span className="text-white">Promo</span>
              <span className="text-[#F26A21]">D</span>
              <span className="text-white">addy</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              India's premier digital marketing agency from Kota, Rajasthan.
              Building brands, generating leads, driving real results since
              2016.
            </p>
            <div className="flex gap-3">
              {[
                {
                  icon: SiInstagram,
                  href: "https://instagram.com",
                  label: "Instagram",
                },
                {
                  icon: SiLinkedin,
                  href: "https://linkedin.com",
                  label: "LinkedIn",
                },
                {
                  icon: SiFacebook,
                  href: "https://facebook.com",
                  label: "Facebook",
                },
                {
                  icon: SiYoutube,
                  href: "https://youtube.com",
                  label: "YouTube",
                },
                { icon: SiX, href: "https://x.com", label: "X" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 border border-white/10 hover:border-[#F26A21] hover:text-[#F26A21] flex items-center justify-center transition-colors text-white/50"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-[0.2em] mb-6 text-white/40">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {["Home", "Work", "Services", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white/50 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-[0.2em] mb-6 text-white/40">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                "SEO Optimization",
                "Google Ads",
                "YouTube Ads",
                "Social Media",
                "Brand Building",
                "Lead Generation",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-white/50 hover:text-white transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Local Presence */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-[0.2em] mb-6 text-white/40">
              Our Local Presence
            </h4>
            <ul className="space-y-3 text-sm mb-6">
              <li>
                <a
                  href="/kota"
                  className="text-[#F26A21] hover:text-[#F26A21]/80 transition-colors font-medium flex items-center gap-1"
                >
                  📍 Digital Marketing in Kota
                </a>
              </li>
              <li className="text-white/40 text-xs leading-relaxed">
                Serving coaching institutes, hospitals, real estate &amp; local
                businesses in Kota, Rajasthan
              </li>
            </ul>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-[#F26A21] mt-0.5 shrink-0" />
                <a
                  href="tel:+918690522210"
                  className="text-white/50 hover:text-white transition-colors"
                >
                  +91 86905 22210
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={14} className="text-[#F26A21] mt-0.5 shrink-0" />
                <a
                  href="mailto:info@promodaddy.in"
                  className="text-white/50 hover:text-white transition-colors"
                >
                  info@promodaddy.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-[#F26A21] mt-0.5 shrink-0" />
                <span className="text-white/50">
                  Plot No. 26, Mahaveer Nagar,
                  <br />
                  Kota, Rajasthan - 324005
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/30">
          <span>© {year} PromoDaddy Digital. All rights reserved.</span>
          <span>
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F26A21] hover:underline"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
