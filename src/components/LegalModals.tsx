import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-200 relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
              {isPrivacy ? <ShieldCheck className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}
              </h3>
              <p className="text-xs text-slate-500">
                Jay Jagannath Associates • {COMPANY_INFO.tagline}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 text-sm text-slate-700 space-y-4 leading-relaxed">
          {isPrivacy ? (
            <>
              <p>
                <strong>Jay Jagannath Associates</strong> (“we”, “our”, or “us”) values the privacy of its clients and website visitors. This Privacy Policy describes how we handle information submitted through our website and during professional consultations.
              </p>

              <h4 className="font-bold text-slate-900 text-sm pt-2">
                1. Information We Collect
              </h4>
              <p>
                When you request a consultation or submit an enquiry through our website, we may collect your name, business name, phone number, email address, and details of the required compliance service (such as Labour Law, Trade Licence, CLRA, FSSAI, Drug Licence, or GST).
              </p>

              <h4 className="font-bold text-slate-900 text-sm pt-2">
                2. Use of Information
              </h4>
              <p>
                The information provided is utilized strictly to:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600">
                <li>Evaluate your regulatory and compliance requirements</li>
                <li>Contact you regarding your requested consultation or filing assistance</li>
                <li>Prepare accurate statutory documentation as authorized by you</li>
              </ul>

              <h4 className="font-bold text-slate-900 text-sm pt-2">
                3. Data Confidentiality
              </h4>
              <p>
                We do not sell, rent, or share your business or personal details with any unauthorized third parties. Information is accessed solely by proprietor <strong>{COMPANY_INFO.proprietor}</strong> and our dedicated compliance personnel.
              </p>

              <h4 className="font-bold text-slate-900 text-sm pt-2">
                4. Contact Us
              </h4>
              <p className="text-xs text-slate-600">
                For questions regarding this policy, contact us at <strong>{COMPANY_INFO.email}</strong> or call <strong>{COMPANY_INFO.phoneFormatted}</strong>.
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to <strong>Jay Jagannath Associates</strong>. By browsing this website or engaging our compliance consulting services, you agree to these standard Terms & Conditions.
              </p>

              <h4 className="font-bold text-slate-900 text-sm pt-2">
                1. Nature of Services
              </h4>
              <p>
                Jay Jagannath Associates is an independent compliance facilitation consultancy. We provide documentation assistance, procedural guidance, and filing coordination for labour law compliance, statutory registrations, municipal licences, and GST filings.
              </p>

              <h4 className="font-bold text-slate-900 text-sm pt-2">
                2. Client Responsibility
              </h4>
              <p>
                Clients are responsible for ensuring that all documents, employee figures, financial invoices, and business information submitted for regulatory processing are authentic, accurate, and up to date.
              </p>

              <h4 className="font-bold text-slate-900 text-sm pt-2">
                3. Government Statutory Approvals
              </h4>
              <p>
                While Jay Jagannath Associates diligently compiles and files applications in accordance with applicable statutory standards, official approvals, registration certificates, and licence grants remain subject to the scrutiny, inspection, and decision of the respective government authorities.
              </p>

              <h4 className="font-bold text-slate-900 text-sm pt-2">
                4. Contact & Queries
              </h4>
              <p className="text-xs text-slate-600">
                For service engagements, reach out directly to <strong>{COMPANY_INFO.proprietor}</strong> at <strong>{COMPANY_INFO.phoneFormatted}</strong>.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-3.5 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
