import React from 'react';
import {
  ShieldCheck,
  FileSpreadsheet,
  CalendarCheck,
  Scale,
  Users2,
  ArrowRight,
  CheckCircle2,
  FileText,
  AlertTriangle,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface FeaturedServiceProps {
  onOpenConsultation: (serviceId?: string) => void;
  onExploreServiceDetails: (serviceId: string) => void;
}

export const FeaturedService: React.FC<FeaturedServiceProps> = ({
  onOpenConsultation,
  onExploreServiceDetails,
}) => {
  return (
    <section
      id="featured-labour-law"
      className="py-20 bg-white border-b border-slate-200 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl text-white p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden border border-slate-800">
          {/* Subtle Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>Featured Primary Service</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Labour Law Compliance
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Managing labour law requirements can be complex and time-consuming.
                <strong> Jay Jagannath Associates</strong> provides professional assistance
                for labour law compliance-related activities, helping businesses stay organized
                and address their regulatory requirements.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white text-sm font-semibold">
                      Statutory Registers & Records:
                    </strong>
                    <p className="text-xs sm:text-sm text-slate-300">
                      Assistance with Muster Roll, Wage Registers, Overtime Registers, Deduction & Fine Registers under relevant state and central rules.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white text-sm font-semibold">
                      Periodic Returns & Documentation:
                    </strong>
                    <p className="text-xs sm:text-sm text-slate-300">
                      Guidance and documentation for timely submission of half-yearly, annual returns, and statutory intimations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white text-sm font-semibold">
                      Regulatory Scrutiny & Notice Clarifications:
                    </strong>
                    <p className="text-xs sm:text-sm text-slate-300">
                      Professional guidance to compile necessary records and prepare structured responses for labour authority queries.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => onOpenConsultation('labour-law-compliance')}
                  className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm sm:text-base flex items-center gap-2 shadow-lg shadow-blue-900/40 transition-colors"
                >
                  <span>Discuss Your Compliance Requirement</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onExploreServiceDetails('labour-law-compliance')}
                  className="px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-semibold text-sm transition-colors"
                >
                  View Full Labour Law Scope
                </button>
              </div>
            </div>

            {/* Right Card / Interactive Overview */}
            <div className="lg:col-span-5">
              <div className="bg-slate-850/90 rounded-2xl p-6 border border-slate-700 space-y-5">
                <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-200">
                    <FileSpreadsheet className="w-4 h-4 text-blue-400" />
                    <span>Statutory Labour Coverage</span>
                  </div>
                  <span className="text-xs text-slate-400">Regular Advisory</span>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-700/60">
                    <div className="text-xs font-bold text-blue-300">
                      Shops & Commercial Establishments Act
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      Working hours, leave policies, statutory holidays & registers
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-700/60">
                    <div className="text-xs font-bold text-blue-300">
                      Contract Labour (CLRA) Facilitation
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      Registration Certificates for Principal Employers & Contractor Licences
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-700/60">
                    <div className="text-xs font-bold text-blue-300">
                      Minimum Wages & Bonus Calculations
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      Statutory wage rate checks, overtime tracking & annual bonus schedules
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-700/60">
                    <div className="text-xs font-bold text-blue-300">
                      Other Statutory Labour Regulations
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      Gratuity, Maternity Benefit & POSH documentation support
                    </div>
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
