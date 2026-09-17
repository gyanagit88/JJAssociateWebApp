import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  Scale,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  User,
  Clock,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { JagannathLogo } from './JagannathLogo';

interface NavbarProps {
  onOpenConsultation: (serviceId?: string) => void;
  onOpenOwnerChecklist: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenConsultation,
  onOpenOwnerChecklist,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Featured: Labour Law', href: '#featured-labour-law' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Compliance Finder', href: '#compliance-finder' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white shadow-xs">
      {/* Top Info Bar - Compact & Clean */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-3 sm:gap-5 text-[11px] sm:text-xs">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-1.5 text-slate-200 hover:text-emerald-400 transition-colors font-medium"
              id="topbar-phone-link"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Call: {COMPANY_INFO.phoneFormatted}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="hidden md:flex items-center gap-1.5 text-slate-300 hover:text-blue-300 transition-colors"
              id="topbar-email-link"
            >
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-3 text-[11px]">
            <span className="hidden lg:flex items-center gap-1 text-slate-400">
              <Clock className="w-3 h-3 text-slate-400" />
              <span>{COMPANY_INFO.operatingHours}</span>
            </span>
            <button
              onClick={onOpenOwnerChecklist}
              className="text-slate-400 hover:text-amber-300 underline decoration-slate-600 underline-offset-2"
              title="View Launch Confirmation Checklist (Section 31)"
            >
              Verification
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-200 ${
          isScrolled ? 'py-2 bg-white/95 backdrop-blur-md shadow-md' : 'py-2.5 bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#home"
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-lg p-1 group"
            id="brand-logo-link"
            aria-label="Jay Jagannath Associates - Home"
          >
            <JagannathLogo size="md" />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-blue-700 hover:bg-blue-50/80 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-blue-700 hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors"
              id="nav-call-btn"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Call Now</span>
            </a>

            <button
              onClick={() => onOpenConsultation()}
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 active:bg-blue-900 rounded-lg shadow-xs hover:shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              id="nav-consultation-btn"
            >
              <span>Get a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => onOpenConsultation()}
              className="sm:hidden px-3 py-1.5 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-md"
            >
              Consult
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle-btn"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-lg">
            <div className="p-3 bg-blue-50/70 rounded-lg border border-blue-100">
              <div className="text-xs font-semibold text-blue-900">
                {COMPANY_INFO.positioning}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-blue-700"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-slate-900 text-white font-medium text-sm"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call {COMPANY_INFO.phoneFormatted}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-medium text-sm"
              >
                <span>Request a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
