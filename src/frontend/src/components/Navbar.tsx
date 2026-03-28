import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { LayoutDashboard, LogIn, LogOut, Menu, X } from "lucide-react";
import { useState } from "react";
import { useInternetIdentity } from "../hooks/useInternetIdentity";
import { useIsAdmin } from "../hooks/useQueries";

const NAV_LINKS = [
  { label: "Home", href: "/", isRoute: true },
  { label: "Work", href: "#work", isRoute: false },
  { label: "Services", href: "#services", isRoute: false },
  { label: "About", href: "#about", isRoute: false },
  { label: "Projects", href: "/projects", isRoute: true },
  { label: "Kota", href: "/kota", isRoute: true },
  { label: "Contact", href: "#contact", isRoute: false },
];

interface NavbarProps {
  onAdminClick: () => void;
  isAdminView: boolean;
}

export function Navbar({ onAdminClick, isAdminView }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { login, clear, loginStatus, identity } = useInternetIdentity();
  const { data: isAdmin } = useIsAdmin();
  const isLoggedIn = loginStatus === "success" && !!identity;

  return (
    <nav className="bg-[#080D1A] sticky top-0 z-50 border-b border-[rgba(255,186,8,0.12)]">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-0.5 font-bold text-xl tracking-tight"
        >
          <span className="text-[#F0F4FF]">Promo</span>
          <span className="text-[#FFBA08]">D</span>
          <span className="text-[#F0F4FF]">addy</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) =>
            link.isRoute ? (
              <Link
                key={link.href}
                to={link.href}
                data-ocid={`nav.${link.label.toLowerCase()}.link`}
                className="text-sm font-medium text-white/60 hover:text-white transition-colors relative group"
                activeProps={{ className: "text-[#FFBA08]" }}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#FFBA08] transition-all duration-300 group-hover:w-full" />
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                data-ocid={`nav.${link.label.toLowerCase()}.link`}
                className="text-sm font-medium text-white/60 hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#FFBA08] transition-all duration-300 group-hover:w-full" />
              </a>
            ),
          )}
        </div>

        {/* CTA Area */}
        <div className="hidden lg:flex items-center gap-3">
          {isAdmin && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onAdminClick}
              data-ocid="nav.admin.button"
              className="text-white/60 hover:text-white gap-1"
            >
              <LayoutDashboard size={14} />
              {isAdminView ? "View Site" : "Admin"}
            </Button>
          )}
          {isLoggedIn ? (
            <Button
              variant="ghost"
              size="sm"
              onClick={clear}
              data-ocid="nav.logout.button"
              className="text-white/60 hover:text-white gap-1"
            >
              <LogOut size={14} /> Logout
            </Button>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              onClick={login}
              data-ocid="nav.login.button"
              disabled={loginStatus === "logging-in"}
              className="text-white/60 hover:text-white gap-1"
            >
              <LogIn size={14} /> Login
            </Button>
          )}
          <a
            href="#contact"
            data-ocid="nav.proposal.button"
            className="bg-[#FFBA08] hover:bg-[#E0A800] text-white font-semibold px-5 py-2 text-sm transition-colors"
          >
            Work With Us
          </a>
        </div>

        {/* Hamburger */}
        <button
          type="button"
          className="lg:hidden p-2 text-white/70 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          data-ocid="nav.menu.toggle"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0D1426] border-t border-[rgba(255,186,8,0.12)] px-6 pb-6 pt-4">
          {NAV_LINKS.map((link) =>
            link.isRoute ? (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-sm font-medium text-white/60 hover:text-white border-b border-[rgba(255,186,8,0.08)] last:border-0"
                activeProps={{
                  className:
                    "block py-3 text-sm font-medium text-[#FFBA08] border-b border-[rgba(255,186,8,0.08)] last:border-0",
                }}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-sm font-medium text-white/60 hover:text-white border-b border-[rgba(255,186,8,0.08)] last:border-0"
              >
                {link.label}
              </a>
            ),
          )}
          <div className="mt-4 flex flex-col gap-2">
            {isAdmin && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  onAdminClick();
                  setMenuOpen(false);
                }}
                data-ocid="nav.admin.mobile.button"
                className="text-white/60 hover:text-white justify-start"
              >
                {isAdminView ? "View Site" : "Admin Panel"}
              </Button>
            )}
            {isLoggedIn ? (
              <Button
                variant="ghost"
                size="sm"
                onClick={clear}
                className="text-white/60 justify-start"
              >
                <LogOut size={14} className="mr-2" /> Logout
              </Button>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                onClick={login}
                disabled={loginStatus === "logging-in"}
                className="text-white/60 justify-start"
              >
                <LogIn size={14} className="mr-2" /> Login
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setMenuOpen(false);
                window.location.href = "#contact";
              }}
              data-ocid="nav.proposal.mobile.button"
              className="bg-[#FFBA08] hover:bg-[#E0A800] text-white font-semibold justify-center"
            >
              Work With Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
