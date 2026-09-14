import React from 'react';
import {
  X,
  ShieldCheck,
  Award,
  Receipt,
  Building2,
  FileText,
  FileCheck2,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  PhoneCall,
  Clock,
} from 'lucide-react';
import { ServiceItem } from '../types';
import { COMPANY_INFO } from '../data/companyData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForConsultation: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectForConsultation,
}) => {
  if (!service) return null;

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'labour-law-compliance':
      case 'other-labour-law-activities':
        return <ShieldCheck className="w-6 h-6 text-blue-600" />;
      case 'trade-licence':
      case 'os-ce-certificate':
      case 'fssai-licence':
      case 'drug-licence':
        return <Award className="w-6 h-6 text-indigo-600" />;
      case 'clra-registration-renewal':
      case 'pt-ec-rc-registration':
        return <Building2 className="w-6 h-6 text-emerald-600" />;
      case 'gst-tax-filing':
        return <Receipt className="w-6 h-6 text-cyan-600" />;
      default:
        return <FileCheck2 className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center">
              {getServiceIcon(service.id)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-800 uppercase tracking-wide">
                  {service.badge || 'Service Details'}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                {service.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Main Description */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Service Overview
            </h4>
            <p className="text-base text-slate-700 leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          {/* Applicable For */}
          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100">
            <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-blue-700" />
              <span>Who Needs This Compliance?</span>
            </h4>
            <p className="text-sm text-slate-700 font-medium">
              {service.applicableFor}
            </p>
          </div>

          {/* Key Aspects / Scope */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Key Assistance Provided
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.keyAspects.map((aspect, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-150 text-sm text-slate-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{aspect}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process Overview */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Assistance & Filing Workflow
            </h4>
            <div className="space-y-2.5">
              {service.processOverview.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200"
                >
                  <span className="w-6 h-6 rounded-full bg-blue-700 text-white font-bold text-xs flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-sm text-slate-700 font-medium pt-0.5">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Document Checklist Guidelines */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-slate-500" />
              <span>Standard Document Checklist Guidelines</span>
            </h4>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                {service.documentChecklistGuidelines.map((doc, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
              <div className="text-[11px] text-slate-500 italic mt-3 pt-2 border-t border-slate-200">
                * Note: Exact document list will be customized based on your business type, jurisdiction, and entity structure during consultation.
              </div>
            </div>
          </div>

          {/* Owner / Content Note (if present) */}
          {service.ownerNote && (
            <div className="flex items-start gap-2.5 p-3 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong>Business Note:</strong> {service.ownerNote}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-slate-50 border-t border-slate-200 px-6 py-4 flex flex-wrap items-center justify-between gap-3">
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-700"
          >
            <PhoneCall className="w-4 h-4 text-emerald-600" />
            <span>Call: {COMPANY_INFO.phoneFormatted}</span>
          </a>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-200 rounded-lg transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onSelectForConsultation(service.id);
              }}
              className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-xs flex items-center gap-2 transition-colors"
            >
              <span>Enquire for {service.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
