import React from 'react';
import {
  Scale,
  Phone,
  Mail,
  User,
  Clock,
  ShieldCheck,
  ArrowUp,
  ExternalLink,
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_LIST } from '../data/companyData';
import { JagannathLogo } from './JagannathLogo';

interface FooterProps {
  onSelectService: (serviceId: string) => void;
  onOpenConsultation: () => void;
  onOpenLegalModal: (type: 'privacy' | 'terms') => void;
  onOpenOwnerChecklist: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectService,
  onOpenConsultation,
  onOpenLegalModal,
  onOpenOwnerChecklist,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <JagannathLogo size="lg" variant="light" />

            <p className="text-xs leading-relaxed text-slate-400">
              Professional assistance with labour law compliance, statutory registrations,
              municipal and trade licences, and GST/tax filing requirements.
            </p>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1">
              <div className="text-slate-300 font-semibold flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-blue-400" />
                <span>Proprietor: {COMPANY_INFO.proprietor}</span>
              </div>
              <div className="text-slate-400">{COMPANY_INFO.positioning}</div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  All Services
                </a>
              </li>
              <li>
                <a href="#featured-labour-law" className="hover:text-white transition-colors">
                  Labour Law Focus
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#compliance-finder" className="hover:text-white transition-colors">
                  Compliance Finder
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Statutory Services List */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Core Services
            </h4>
            <ul className="space-y-1.5 text-xs">
              {SERVICES_LIST.slice(0, 8).map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => onSelectService(service.id)}
                    className="hover:text-blue-300 text-left transition-colors flex items-center gap-1 text-slate-300"
                  >
                    <span>{service.title}</span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onSelectService('other-labour-law-activities')}
                  className="hover:text-blue-300 text-left transition-colors text-slate-400 italic"
                >
                  Other Labour Law Compliance
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Action */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs">
              <div className="text-slate-300">
                <span className="block text-slate-500 text-[11px]">Proprietor</span>
                <strong className="text-white text-sm">{COMPANY_INFO.proprietor}</strong>
              </div>

              <div>
                <span className="block text-slate-500 text-[11px]">Phone Support</span>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="text-emerald-400 font-bold hover:underline text-sm block"
                  id="footer-phone-link"
                >
                  {COMPANY_INFO.phoneFormatted}
                </a>
              </div>

              <div>
                <span className="block text-slate-500 text-[11px]">Email Address</span>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-blue-400 hover:underline break-all"
                  id="footer-email-link"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="pt-2 space-y-2">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-2 px-3 rounded-lg bg-blue-700 hover:bg-blue-600 text-white font-bold text-xs transition-colors"
                >
                  Request a Consultation
                </button>

                <a
                  href="/jay_jagannath_associates_v0.1.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg border border-emerald-500/50 bg-emerald-600/10 text-emerald-200 hover:bg-emerald-600/15 font-bold text-xs transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Download PDF Brochure
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-slate-400">
            © 2026 <strong className="text-slate-200">Jay Jagannath Associates</strong>. All Rights Reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <button
              onClick={() => onOpenLegalModal('privacy')}
              className="hover:text-slate-200 transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegalModal('terms')}
              className="hover:text-slate-200 transition-colors"
            >
              Terms & Conditions
            </button>
            <span>•</span>
            <button
              onClick={onOpenOwnerChecklist}
              className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
            >
              Launch Verification
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
