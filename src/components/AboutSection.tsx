import React from 'react';
import {
  Shield,
  FileCheck2,
  Users,
  Compass,
  ArrowRight,
  Phone,
  CheckCircle,
  Scale,
  Sparkles,
  Building,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { JagannathLogo } from './JagannathLogo';

interface AboutSectionProps {
  onOpenConsultation: () => void;
  onOpenComplianceFinder: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenConsultation,
  onOpenComplianceFinder,
}) => {
  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Positioning */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider">
              <Scale className="w-3.5 h-3.5 text-blue-700" />
              <span>About Jay Jagannath Associates</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Your Business Deserves the Right <br className="hidden sm:inline" />
              <span className="text-blue-700">Compliance Support</span>
            </h2>

            <p className="text-base text-slate-700 leading-relaxed">
              <strong>Jay Jagannath Associates</strong> is a professional compliance service
              provider focused on helping businesses navigate labour law compliance, statutory
              registrations, municipal and state licences, and tax-related filing requirements.
            </p>

            <p className="text-base text-slate-600 leading-relaxed">
              Operating under the guiding philosophy{' '}
              <span className="text-blue-900 font-bold">
                “{COMPANY_INFO.tagline}”
              </span>
              , we believe that compliance should never be an impediment to business growth.
              Instead of wrestling with scattered forms, multiple department portals, and
              shifting regulatory notifications, business owners can rely on our specialized
              assistance to keep their operations systematically organized and fully compliant.
            </p>

            {/* Core Values / Strengths Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2.5 text-blue-800 font-bold text-sm mb-1.5">
                  <Shield className="w-4 h-4 text-blue-600" />
                  <span>Compliance-Focused</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dedicated specifically to statutory labour laws, establishment licences, and business registrations.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2.5 text-blue-800 font-bold text-sm mb-1.5">
                  <Compass className="w-4 h-4 text-blue-600" />
                  <span>Simplifying Regulatory Processes</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Translating complicated statutory codes into clear, step-by-step procedural requirements.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2.5 text-blue-800 font-bold text-sm mb-1.5">
                  <FileCheck2 className="w-4 h-4 text-blue-600" />
                  <span>Comprehensive Filings</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  One-stop coordination for Trade Licences, CLRA, FSSAI, Drug Licences, and GST returns.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2.5 text-blue-800 font-bold text-sm mb-1.5">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span>Personalized Assistance</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Direct, requirement-focused communication tailored to your commercial scope.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm flex items-center gap-2 shadow-xs transition-colors"
              >
                <span>Discuss Your Compliance Requirement</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenComplianceFinder}
                className="px-5 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-colors"
              >
                Find Applicable Licences
              </button>
            </div>
          </div>

          {/* Right Column: Proprietor & Credibility Card */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-2xl p-7 sm:p-8 shadow-xl border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>

              {/* Header with Jagannath + Labour Law Scales Logo */}
              <div className="border-b border-slate-800 pb-4 mb-6">
                <JagannathLogo size="lg" variant="light" />
              </div>

              {/* Proprietor Box */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80">
                  <div className="text-xs text-slate-400 font-medium">Proprietor</div>
                  <div className="text-lg font-bold text-white mt-0.5">
                    {COMPANY_INFO.proprietor}
                  </div>
                  <div className="text-xs text-blue-300 font-medium mt-1">
                    Labour Law & Statutory Compliance Consultant
                  </div>
                </div>

                {/* Direct Contact Links */}
                <div className="space-y-2.5">
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-slate-850 hover:bg-slate-800 border border-slate-700 text-slate-200 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400">Direct Phone</div>
                        <div className="text-sm font-semibold text-white group-hover:text-blue-300">
                          {COMPANY_INFO.phoneFormatted}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-emerald-400 font-semibold">Call Now →</span>
                  </a>

                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-slate-850 hover:bg-slate-800 border border-slate-700 text-slate-200 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                        <Scale className="w-4 h-4" />
                      </div>
                      <div className="truncate max-w-[200px] sm:max-w-xs">
                        <div className="text-xs text-slate-400">Email Address</div>
                        <div className="text-sm font-semibold text-white group-hover:text-blue-300 truncate">
                          {COMPANY_INFO.email}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-blue-400 font-semibold shrink-0">Email →</span>
                  </a>
                </div>

                {/* Statutory Focus Checklist */}
                <div className="pt-2 border-t border-slate-800/80">
                  <div className="text-xs font-semibold text-slate-300 mb-2.5 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
                    <span>Key Service Domains Handled:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 rounded text-xs bg-slate-800 text-slate-300 border border-slate-700">
                      Labour Law
                    </span>
                    <span className="px-2.5 py-1 rounded text-xs bg-slate-800 text-slate-300 border border-slate-700">
                      Trade Licences
                    </span>
                    <span className="px-2.5 py-1 rounded text-xs bg-slate-800 text-slate-300 border border-slate-700">
                      CLRA RC & Licence
                    </span>
                    <span className="px-2.5 py-1 rounded text-xs bg-slate-800 text-slate-300 border border-slate-700">
                      OS & CE
                    </span>
                    <span className="px-2.5 py-1 rounded text-xs bg-slate-800 text-slate-300 border border-slate-700">
                      FSSAI Food Licence
                    </span>
                    <span className="px-2.5 py-1 rounded text-xs bg-slate-800 text-slate-300 border border-slate-700">
                      Drug / Durg Licence
                    </span>
                    <span className="px-2.5 py-1 rounded text-xs bg-slate-800 text-slate-300 border border-slate-700">
                      GST & Tax Filing
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
