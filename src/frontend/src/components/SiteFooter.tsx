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
    <footer className="bg-[#0B1F3A] text-white">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="text-2xl font-black mb-3">
              <span className="text-[#2B6FEA]">Promo</span>
              <span className="text-[#F26A21]">Daddy</span>
              <span className="text-white"> Digital</span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              India's #1 digital marketing agency based in Kota, Rajasthan. We
              help brands grow with data-driven SEO, Google Ads, and social
              media strategies.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                {
                  icon: SiFacebook,
                  href: "https://facebook.com",
                  label: "Facebook",
                },
                {
                  icon: SiInstagram,
                  href: "https://instagram.com",
                  label: "Instagram",
                },
                { icon: SiX, href: "https://x.com", label: "X" },
                {
                  icon: SiYoutube,
                  href: "https://youtube.com",
                  label: "YouTube",
                },
                {
                  icon: SiLinkedin,
                  href: "https://linkedin.com",
                  label: "LinkedIn",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 bg-white/10 hover:bg-[#2B6FEA] rounded-lg flex items-center justify-center transition-colors"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-4 text-blue-300">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                "Home",
                "About Us",
                "Services",
                "Projects",
                "Blog",
                "Contact",
              ].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-4 text-blue-300">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm">
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
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-4 text-blue-300">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={14} className="text-[#F26A21] mt-0.5 shrink-0" />
                <a
                  href="tel:+918690522210"
                  className="text-blue-200 hover:text-white"
                >
                  +91 86905 22210
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={14} className="text-[#F26A21] mt-0.5 shrink-0" />
                <a
                  href="mailto:info@promodaddy.in"
                  className="text-blue-200 hover:text-white"
                >
                  info@promodaddy.in
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-[#F26A21] mt-0.5 shrink-0" />
                <span className="text-blue-200">Kota, Rajasthan — 324001</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-blue-300">
          <span>© {year} PromoDaddy Digital. All rights reserved.</span>
          <span>
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2B6FEA] hover:underline"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
