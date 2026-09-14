import React from 'react';
import { Phone, Mail, Send } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface MobileStickyBarProps {
  onOpenConsultation: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  onOpenConsultation,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 p-2 sm:hidden shadow-2xl">
      <div className="grid grid-cols-3 gap-1.5">
        {/* Call Button */}
        <a
          href={`tel:${COMPANY_INFO.phone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-400 font-bold text-[11px] transition-colors border border-slate-700"
          id="mobile-sticky-call-btn"
        >
          <Phone className="w-4 h-4 mb-0.5" />
          <span>Call</span>
        </a>

        {/* Email Button */}
        <a
          href={`mailto:${COMPANY_INFO.email}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-800 hover:bg-slate-700 text-blue-300 font-bold text-[11px] transition-colors border border-slate-700"
          id="mobile-sticky-email-btn"
        >
          <Mail className="w-4 h-4 mb-0.5" />
          <span>Email</span>
        </a>

        {/* Enquire Button */}
        <button
          onClick={onOpenConsultation}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-[11px] transition-colors shadow-sm"
          id="mobile-sticky-enquire-btn"
        >
          <Send className="w-4 h-4 mb-0.5" />
          <span>Enquire</span>
        </button>
      </div>
    </div>
  );
};
