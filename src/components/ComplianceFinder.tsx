import React, { useState } from 'react';
import {
  HelpCircle,
  Building,
  Users,
  CheckSquare,
  Square,
  ArrowRight,
  PhoneCall,
  Sparkles,
  CheckCircle2,
  FileCheck,
  RotateCcw,
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_LIST } from '../data/companyData';

interface ComplianceFinderProps {
  onOpenConsultation: (serviceId?: string, customNote?: string) => void;
}

export const ComplianceFinder: React.FC<ComplianceFinderProps> = ({
  onOpenConsultation,
}) => {
  const [businessType, setBusinessType] = useState<string>('commercial');
  const [employeeCount, setEmployeeCount] = useState<string>('1-9');
  const [engagedContractLabour, setEngagedContractLabour] = useState<boolean>(false);
  const [dealsInFood, setDealsInFood] = useState<boolean>(false);
  const [dealsInPharma, setDealsInPharma] = useState<boolean>(false);
  const [requiresTaxFiling, setRequiresTaxFiling] = useState<boolean>(true);

  // Derive recommended compliances
  const recommendedCompliances = [];

  // General commercial / office
  if (businessType === 'commercial' || businessType === 'service' || businessType === 'retail') {
    recommendedCompliances.push(
      SERVICES_LIST.find((s) => s.id === 'trade-licence')!,
      SERVICES_LIST.find((s) => s.id === 'os-ce-certificate')!,
      SERVICES_LIST.find((s) => s.id === 'pt-ec-rc-registration')!
    );
  }

  // Factory / Industrial
  if (businessType === 'factory') {
    recommendedCompliances.push(
      SERVICES_LIST.find((s) => s.id === 'labour-law-compliance')!,
      SERVICES_LIST.find((s) => s.id === 'trade-licence')!,
      SERVICES_LIST.find((s) => s.id === 'pt-ec-rc-registration')!
    );
  }

  // Contractor / Labour supplier
  if (businessType === 'contractor' || engagedContractLabour) {
    recommendedCompliances.push(
      SERVICES_LIST.find((s) => s.id === 'clra-registration-renewal')!,
      SERVICES_LIST.find((s) => s.id === 'labour-law-compliance')!
    );
  }

  // Food
  if (dealsInFood || businessType === 'food') {
    recommendedCompliances.push(
      SERVICES_LIST.find((s) => s.id === 'fssai-licence')!,
      SERVICES_LIST.find((s) => s.id === 'trade-licence')!
    );
  }

  // Pharma
  if (dealsInPharma || businessType === 'pharma') {
    recommendedCompliances.push(
      SERVICES_LIST.find((s) => s.id === 'drug-licence')!,
      SERVICES_LIST.find((s) => s.id === 'trade-licence')!
    );
  }

  // GST & Tax
  if (requiresTaxFiling) {
    recommendedCompliances.push(SERVICES_LIST.find((s) => s.id === 'gst-tax-filing')!);
  }

  // Always include Labour Law if employee count > 10
  if (employeeCount !== '1-9' && !recommendedCompliances.some((s) => s.id === 'labour-law-compliance')) {
    recommendedCompliances.push(
      SERVICES_LIST.find((s) => s.id === 'labour-law-compliance')!
    );
  }

  // Deduplicate
  const uniqueRecommendations = Array.from(
    new Map(recommendedCompliances.filter(Boolean).map((item) => [item.id, item])).values()
  );

  const handleReset = () => {
    setBusinessType('commercial');
    setEmployeeCount('1-9');
    setEngagedContractLabour(false);
    setDealsInFood(false);
    setDealsInPharma(false);
    setRequiresTaxFiling(true);
  };

  const handleConsultForRecommendations = () => {
    const summaryNote = `Business Type: ${businessType}, Headcount: ${employeeCount}, Recommended Services: ${uniqueRecommendations
      .map((s) => s.title)
      .join(', ')}`;
    onOpenConsultation('multiple-compliance', summaryNote);
  };

  return (
    <section id="compliance-finder" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-blue-700" />
            <span>Interactive Compliance Guide</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Not Sure Which Compliance Applies to Your Business?
          </h2>

          <p className="text-base text-slate-600 leading-relaxed">
            Tell us about your operational requirement and <strong>Jay Jagannath Associates</strong> can
            help you understand the appropriate compliance, registration, or licensing requirement.
          </p>
        </div>

        {/* Interactive Wizard Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Input Selection Form */}
            <div className="lg:col-span-7 space-y-6">
              {/* Step 1: Business Nature */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                  1. Select Nature of Your Business / Establishment
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: 'commercial', label: 'Shop / Commercial Office' },
                    { id: 'factory', label: 'Factory / Manufacturing' },
                    { id: 'food', label: 'Restaurant / Food Unit' },
                    { id: 'contractor', label: 'Contractor / Manpower' },
                    { id: 'pharma', label: 'Pharmacy / Drug Dealer' },
                    { id: 'service', label: 'Service / Consulting Firm' },
                  ].map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => {
                        setBusinessType(type.id);
                        if (type.id === 'food') setDealsInFood(true);
                        if (type.id === 'pharma') setDealsInPharma(true);
                        if (type.id === 'contractor') setEngagedContractLabour(true);
                      }}
                      className={`p-3 rounded-xl text-left border text-xs sm:text-sm font-semibold transition-all ${
                        businessType === type.id
                          ? 'border-blue-600 bg-blue-50/80 text-blue-900 shadow-xs'
                          : 'border-slate-200 bg-slate-50/70 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Employee Count */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                  2. Number of Workers / Employees
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { id: '1-9', label: '1 – 9 Employees' },
                    { id: '10-19', label: '10 – 19 Employees' },
                    { id: '20-49', label: '20 – 49 Employees' },
                    { id: '50+', label: '50+ Employees' },
                  ].map((count) => (
                    <button
                      key={count.id}
                      type="button"
                      onClick={() => setEmployeeCount(count.id)}
                      className={`p-2.5 rounded-xl text-center border text-xs sm:text-sm font-semibold transition-all ${
                        employeeCount === count.id
                          ? 'border-blue-600 bg-blue-50/80 text-blue-900 shadow-xs'
                          : 'border-slate-200 bg-slate-50/70 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {count.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Specific Operational Checkboxes */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                  3. Select Applicable Operational Dimensions
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer hover:bg-slate-100/80 transition-colors">
                    <input
                      type="checkbox"
                      checked={engagedContractLabour}
                      onChange={(e) => setEngagedContractLabour(e.target.checked)}
                      className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                    />
                    <div className="text-xs sm:text-sm">
                      <strong className="text-slate-800">
                        Engaging / Supplying Contract Labour
                      </strong>
                      <span className="text-slate-500 block text-xs">
                        Requires CLRA Registration Certificate (RC) or Contractor Licence
                      </span>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer hover:bg-slate-100/80 transition-colors">
                    <input
                      type="checkbox"
                      checked={dealsInFood}
                      onChange={(e) => setDealsInFood(e.target.checked)}
                      className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                    />
                    <div className="text-xs sm:text-sm">
                      <strong className="text-slate-800">
                        Manufacturing, Handling, or Serving Food Products
                      </strong>
                      <span className="text-slate-500 block text-xs">
                        Requires FSSAI Food Safety Licence / Registration
                      </span>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer hover:bg-slate-100/80 transition-colors">
                    <input
                      type="checkbox"
                      checked={dealsInPharma}
                      onChange={(e) => setDealsInPharma(e.target.checked)}
                      className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                    />
                    <div className="text-xs sm:text-sm">
                      <strong className="text-slate-800">
                        Selling / Distributing Pharmaceuticals or Drugs
                      </strong>
                      <span className="text-slate-500 block text-xs">
                        Requires State Retail / Wholesale Drug / Durg Licence
                      </span>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer hover:bg-slate-100/80 transition-colors">
                    <input
                      type="checkbox"
                      checked={requiresTaxFiling}
                      onChange={(e) => setRequiresTaxFiling(e.target.checked)}
                      className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                    />
                    <div className="text-xs sm:text-sm">
                      <strong className="text-slate-800">
                        GST Registration & Regular Tax Return Filings
                      </strong>
                      <span className="text-slate-500 block text-xs">
                        Assistance with monthly GSTR-1, GSTR-3B filings and reconciliation
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Selection</span>
                </button>
              </div>
            </div>

            {/* Right: Dynamic Recommended Compliance Breakdown */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-slate-900 text-white rounded-2xl p-6 sm:p-7 border border-slate-800">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-400" />
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                      Applicable Compliances
                    </h3>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded bg-blue-900/60 text-blue-300 border border-blue-700/50">
                    {uniqueRecommendations.length} Services Identified
                  </span>
                </div>

                <div className="text-xs text-slate-300 leading-relaxed">
                  Based on your business profile, <strong>Jay Jagannath Associates</strong>{' '}
                  recommends the following statutory services:
                </div>

                {/* List of recommended items */}
                <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                  {uniqueRecommendations.map((svc) => (
                    <div
                      key={svc.id}
                      className="p-3 rounded-xl bg-slate-850 border border-slate-700/80 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-bold text-white">
                          {svc.title}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                          {svc.shortDescription}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Box */}
              <div className="mt-6 pt-4 border-t border-slate-800 space-y-3">
                <button
                  type="button"
                  onClick={handleConsultForRecommendations}
                  className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-colors"
                >
                  <span>Talk to Us About These Compliances</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="text-center">
                  <span className="text-xs text-slate-400">or call directly: </span>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="text-xs text-emerald-400 font-bold hover:underline"
                  >
                    Call {COMPANY_INFO.phoneFormatted}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
