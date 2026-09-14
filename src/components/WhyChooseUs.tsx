import React from 'react';
import {
  ShieldCheck,
  Smile,
  Layers,
  UserCheck,
  Clock,
  ArrowRight,
  CheckCircle,
  HelpCircle,
} from 'lucide-react';
import { PROCESS_STEPS, WHY_CHOOSE_US, COMPANY_INFO } from '../data/companyData';

interface WhyChooseUsProps {
  onOpenConsultation: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenConsultation }) => {
  return (
    <section id="why-us" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Top Part: Why Businesses Choose Us */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
              <span>Core Operational Strengths</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Businesses Choose Us
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              At <strong>Jay Jagannath Associates</strong>, our mission is to simplify
              compliance so you can focus on building your enterprise with absolute peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. Compliance-Focused */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-blue-300 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-100/80 text-blue-700 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Compliance-Focused
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                Our services are centered specifically around labour laws, statutory registrations, and business regulatory obligations.
              </p>
              <div className="text-xs font-semibold text-blue-800 bg-blue-50/70 p-2.5 rounded-lg border border-blue-100">
                Specialized focus on documentation & regulatory mandates.
              </div>
            </div>

            {/* 2. Business-Friendly Approach */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-blue-300 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-indigo-100/80 text-indigo-700 flex items-center justify-center mb-4">
                <Smile className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Business-Friendly Approach
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                We simplify complex compliance requirements into understandable, step-by-step processes without unnecessary technical jargon.
              </p>
              <div className="text-xs font-semibold text-indigo-800 bg-indigo-50/70 p-2.5 rounded-lg border border-indigo-100">
                Clear communication and transparent procedural guidance.
              </div>
            </div>

            {/* 3. Multiple Services */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-blue-300 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-100/80 text-emerald-700 flex items-center justify-center mb-4">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Multiple Services Under One Roof
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                Businesses can obtain coordinated assistance with different registration, licensing, and filing requirements through one trusted service partner.
              </p>
              <div className="text-xs font-semibold text-emerald-800 bg-emerald-50/70 p-2.5 rounded-lg border border-emerald-100">
                Eliminates juggling multiple uncoordinated vendors.
              </div>
            </div>

            {/* 4. Personalized Assistance */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-blue-300 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-cyan-100/80 text-cyan-700 flex items-center justify-center mb-4">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Personalized Assistance
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                Provide direct, requirement-focused support to businesses tailored to their specific operational scale and commercial jurisdiction.
              </p>
              <div className="text-xs font-semibold text-cyan-800 bg-cyan-50/70 p-2.5 rounded-lg border border-cyan-100">
                Direct accessibility to proprietor JHARASHREE ROUTRAY.
              </div>
            </div>

            {/* 5. Reliable Support */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-blue-300 hover:shadow-md transition-all lg:col-span-2">
              <div className="w-12 h-12 rounded-xl bg-blue-100/80 text-blue-700 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Reliable Support
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                We focus on helping clients manage their compliance-related responsibilities effectively, maintaining consistency, timely follow-ups, and organized documentation.
              </p>
              <div className="text-xs font-semibold text-blue-800 bg-blue-50/70 p-2.5 rounded-lg border border-blue-100">
                Dependable compliance partner as your operations expand.
              </div>
            </div>
          </div>
        </div>

        {/* Section 13: How We Help (4-Step Process) */}
        <div className="pt-10 border-t border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-300 text-slate-800 text-xs font-bold uppercase tracking-wider">
              <span>Structured Workflow</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              How We Help
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              A transparent, four-stage engagement model designed to deliver prompt and compliant outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.stepNumber}
                className="relative bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-extrabold text-blue-700 font-mono">
                      {step.stepNumber}
                    </span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                      {step.highlight}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    {step.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] text-slate-400 font-semibold">
                  Stage {idx + 1} of 4
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm shadow-xs transition-colors"
            >
              <span>Begin Your Compliance Process</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
