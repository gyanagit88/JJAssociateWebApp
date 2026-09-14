import React from 'react';
import {
  X,
  CheckCircle,
  AlertCircle,
  Clock,
  Settings,
  HelpCircle,
  Phone,
  Mail,
  ShieldAlert,
} from 'lucide-react';
import { OWNER_CONFIRMATION_CHECKLIST, COMPANY_INFO } from '../data/companyData';

interface OwnerConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OwnerConfigModal: React.FC<OwnerConfigModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900 uppercase tracking-wide">
                Section 31
              </span>
              <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                Owner Confirmation & Verification Checklist
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200 text-xs text-slate-700 space-y-1.5">
            <div className="font-bold text-blue-950 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-blue-700" />
              <span>Authoritative Business Baseline</span>
            </div>
            <p>
              In accordance with project guidelines, all business information has been
              sourced strictly from the verified scanned document for{' '}
              <strong>Jay Jagannath Associates</strong>. No fake client counts, artificial years of
              experience, or unverified claims have been fabricated.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Items for Final Proprietor Review (JHARASHREE ROUTRAY)
            </h4>
            <div className="space-y-3">
              {OWNER_CONFIRMATION_CHECKLIST.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
                >
                  <div>
                    <strong className="text-slate-900 block text-sm">
                      {item.label}
                    </strong>
                    <span className="text-slate-500 mt-0.5 block">{item.note}</span>
                  </div>
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-full font-semibold shrink-0 ${
                      item.status.includes('Default') || item.status.includes('Displayed')
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-amber-100 text-amber-900'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600 space-y-2">
            <strong className="text-slate-900 block">Current Live Contact Details:</strong>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
              <div>
                <strong>Proprietor:</strong> {COMPANY_INFO.proprietor}
              </div>
              <div>
                <strong>Tagline:</strong> “{COMPANY_INFO.tagline}”
              </div>
              <div>
                <strong>Phone:</strong> {COMPANY_INFO.phoneFormatted}
              </div>
              <div>
                <strong>Email:</strong> {COMPANY_INFO.email}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-3.5 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
          >
            Close Checklist
          </button>
        </div>
      </div>
    </div>
  );
};
