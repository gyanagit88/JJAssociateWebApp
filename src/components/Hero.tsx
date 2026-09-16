import React from 'react';
import {
  ShieldCheck,
  Award,
  Receipt,
  Briefcase,
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  FileText,
  FileCheck,
  Building2,
  HelpCircle,
  Clock,
  Sparkles,
} from 'lucide-react';
import { COMPANY_INFO, TRUST_STRIP_ITEMS } from '../data/companyData';

interface HeroProps {
  onOpenConsultation: () => void;
  onOpenComplianceFinder: () => void;
  onSelectService: (serviceId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenConsultation,
  onOpenComplianceFinder,
  onSelectService,
}) => {
  return (
    <section
      id="home"
      className="relative pt-24 sm:pt-28 pb-12 lg:pt-32 lg:pb-16 bg-gradient-to-b from-slate-900 via-slate-850 to-slate-900 text-white overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-5 text-left">
            {/* Category Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-semibold tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Regulatory & Statutory Compliance Consultancy</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              Simplifying Labour Law & <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-200 to-indigo-300">
                Business Compliance
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              Professional assistance for statutory registers, commercial registrations, 
              trade licences, and periodic GST tax filing.
            </p>

            {/* Key Service Highlights in Hero */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Labour Law Registers & Statutory Returns</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>CLRA Registration / Licence Renewal</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Trade Licence & OS / CE Certificates</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>FSSAI, Drug Licence, GST & Tax Filing</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-4 sm:pt-6">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-blue-900/40 transition-all hover:translate-y-[-1px]"
                id="hero-get-consultation-btn"
              >
                <span>Get a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#services"
                className="px-6 py-3.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-colors"
                id="hero-explore-services-btn"
              >
                <span>Explore Our Services</span>
              </a>

              <button
                onClick={onOpenComplianceFinder}
                className="px-4 py-3.5 rounded-lg bg-blue-950/90 hover:bg-blue-900/90 border border-blue-600/40 text-blue-300 font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
                id="hero-compliance-finder-btn"
              >
                <HelpCircle className="w-4 h-4 text-blue-400" />
                <span>Which Compliance Do I Need?</span>
              </button>

              <a
                href="/jay_jagannath_associates_v0.1.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3.5 rounded-lg border border-emerald-500/50 bg-emerald-600/15 hover:bg-emerald-600/25 text-emerald-200 font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
                id="hero-pdf-download-btn"
              >
                <FileText className="w-4 h-4 text-emerald-300" />
                <span>Download Company PDF</span>
              </a>
            </div>

            {/* Direct Contact Callout */}
            <div className="pt-2 flex items-center gap-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-1.5 text-slate-300">
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>Direct Proprietor Contact:</span>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="text-white font-bold hover:underline"
                >
                  {COMPANY_INFO.phoneFormatted}
                </a>
              </div>
              <span className="text-slate-600">|</span>
              <span className="text-slate-300">
                Proprietor: <strong className="text-white">{COMPANY_INFO.proprietor}</strong>
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Compliance Overview Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-800/90 backdrop-blur-md rounded-2xl p-6 border border-slate-700/80 shadow-2xl space-y-5 relative">
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-700/70 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-blue-300">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white uppercase tracking-wider">
                      Compliance Services Overview
                    </h2>
                    <p className="text-xs text-slate-400">
                      Jay Jagannath Associates • {COMPANY_INFO.positioning}
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded text-[11px] font-semibold bg-emerald-950 text-emerald-300 border border-emerald-700/60">
                  Active Support
                </span>
              </div>

              {/* Service Cards Micro-List */}
              <div className="space-y-2.5">
                {/* 1. Labour Law */}
                <div
                  onClick={() => onSelectService('labour-law-compliance')}
                  className="group p-3 rounded-xl bg-slate-900/70 border border-slate-700/60 hover:border-blue-500/60 transition-all cursor-pointer flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-blue-500/20 text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                        Labour Law Compliance
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Registers, statutory filings & regulatory advisory
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-blue-400 font-medium group-hover:translate-x-0.5 transition-transform">
                    View →
                  </span>
                </div>

                {/* 2. Licences & Certificates */}
                <div
                  onClick={() => onSelectService('trade-licence')}
                  className="group p-3 rounded-xl bg-slate-900/70 border border-slate-700/60 hover:border-blue-500/60 transition-all cursor-pointer flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                        Trade Licence & OS / CE
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Municipal applications, establishment certificates
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-blue-400 font-medium group-hover:translate-x-0.5 transition-transform">
                    View →
                  </span>
                </div>

                {/* 3. CLRA & Registrations */}
                <div
                  onClick={() => onSelectService('clra-registration-renewal')}
                  className="group p-3 rounded-xl bg-slate-900/70 border border-slate-700/60 hover:border-blue-500/60 transition-all cursor-pointer flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                        CLRA RC & Licence Renewal
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Principal Employer RC & Contractor Labour Licences
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-blue-400 font-medium group-hover:translate-x-0.5 transition-transform">
                    View →
                  </span>
                </div>

                {/* 4. GST & Tax Filing */}
                <div
                  onClick={() => onSelectService('gst-tax-filing')}
                  className="group p-3 rounded-xl bg-slate-900/70 border border-slate-700/60 hover:border-blue-500/60 transition-all cursor-pointer flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                      <Receipt className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                        GST & Tax Filing
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Registration, monthly/quarterly returns & compliance
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-blue-400 font-medium group-hover:translate-x-0.5 transition-transform">
                    View →
                  </span>
                </div>
              </div>

              {/* Card Footer Banner */}
              <div className="p-3 bg-blue-950/60 rounded-xl border border-blue-700/40 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <span className="text-xs text-blue-200">
                    Need professional compliance guidance?
                  </span>
                </div>
                <button
                  onClick={onOpenConsultation}
                  className="text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 px-3 py-1.5 rounded-lg transition-colors"
                >
                  Ask Us
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Section 8: Trust Strip */}
        <div className="mt-16 pt-10 border-t border-slate-800">
          <div className="text-center mb-6">
            <h2 className="text-xs font-bold tracking-widest text-slate-400 uppercase">
              Professional Compliance Assistance
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TRUST_STRIP_ITEMS.map((item, index) => {
              return (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-slate-850/80 border border-slate-800 hover:border-slate-700 transition-colors flex items-start gap-3.5"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-900/40 border border-blue-700/40 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                    {index === 0 && <ShieldCheck className="w-5 h-5" />}
                    {index === 1 && <Award className="w-5 h-5" />}
                    {index === 2 && <Receipt className="w-5 h-5" />}
                    {index === 3 && <Briefcase className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-blue-300 mt-0.5">
                      {item.subtitle}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
