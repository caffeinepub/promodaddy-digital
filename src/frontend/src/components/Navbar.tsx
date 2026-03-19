import { Button } from "@/components/ui/button";
import { LayoutDashboard, LogIn, LogOut, Menu, X } from "lucide-react";
import { useState } from "react";
import { useInternetIdentity } from "../hooks/useInternetIdentity";
import { useIsAdmin } from "../hooks/useQueries";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#results" },
  { label: "Clients", href: "#trusted" },
  { label: "About", href: "#why-choose" },
  { label: "Contact", href: "#contact" },
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

  const handleMobileProposal = () => {
    setMenuOpen(false);
    window.location.hash = "#contact";
  };

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-1 text-[#0B1F3A] font-black text-xl"
        >
          <span className="text-[#2B6FEA] text-2xl">P</span>romo
          <span className="text-[#F26A21]">Daddy</span>
          <span className="text-sm font-semibold text-gray-500 hidden sm:block ml-1">
            Digital
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid={`nav.${link.label.toLowerCase()}.link`}
              className="text-sm font-medium text-gray-700 hover:text-[#2B6FEA] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Area */}
        <div className="hidden lg:flex items-center gap-2">
          {isAdmin && (
            <Button
              variant="outline"
              size="sm"
              onClick={onAdminClick}
              data-ocid="nav.admin.button"
              className="gap-1"
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
              className="gap-1"
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
              className="gap-1"
            >
              <LogIn size={14} /> Login
            </Button>
          )}
          <Button
            className="bg-[#F26A21] hover:bg-[#d95b18] text-white font-semibold px-5 rounded-full"
            size="sm"
            asChild
            data-ocid="nav.proposal.button"
          >
            <a href="#contact">Request a Proposal</a>
          </Button>
        </div>

        {/* Hamburger */}
        <button
          type="button"
          className="lg:hidden p-2 rounded-md"
          onClick={() => setMenuOpen(!menuOpen)}
          data-ocid="nav.menu.toggle"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-border px-4 pb-4 pt-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-sm font-medium text-gray-700 hover:text-[#2B6FEA]"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 flex flex-col gap-2">
            {isAdmin && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  onAdminClick();
                  setMenuOpen(false);
                }}
                data-ocid="nav.admin.mobile.button"
              >
                {isAdminView ? "View Site" : "Admin Panel"}
              </Button>
            )}
            {isLoggedIn ? (
              <Button variant="ghost" size="sm" onClick={clear}>
                Logout
              </Button>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                onClick={login}
                disabled={loginStatus === "logging-in"}
              >
                Login
              </Button>
            )}
            <Button
              className="bg-[#F26A21] hover:bg-[#d95b18] text-white rounded-full"
              size="sm"
              onClick={handleMobileProposal}
              data-ocid="nav.proposal.mobile.button"
            >
              Request a Proposal
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
