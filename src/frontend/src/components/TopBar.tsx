import {
  SiFacebook,
  SiInstagram,
  SiLinkedin,
  SiX,
  SiYoutube,
} from "react-icons/si";

export function TopBar() {
  return (
    <div className="bg-[#0B1F3A] text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
        <span className="hidden sm:block font-medium tracking-wide">
          🏆 India's #1 Digital Marketing Agency — Based in Kota, Rajasthan
        </span>
        <span className="block sm:hidden font-medium text-xs">
          India's #1 Digital Marketing Agency
        </span>
        <div className="flex items-center gap-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-400 transition-colors"
          >
            <SiFacebook size={14} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-400 transition-colors"
          >
            <SiInstagram size={14} />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X/Twitter"
            className="hover:text-sky-400 transition-colors"
          >
            <SiX size={14} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-red-400 transition-colors"
          >
            <SiYoutube size={14} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-300 transition-colors"
          >
            <SiLinkedin size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
