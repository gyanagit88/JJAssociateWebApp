import React, { useState, useMemo } from 'react';
import {
  ShieldCheck,
  Award,
  Receipt,
  Building2,
  FileCheck2,
  ArrowRight,
  Search,
  CheckCircle2,
  Scale,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { SERVICES_LIST } from '../data/companyData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenConsultation: (serviceId?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenConsultation,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All 9 Services' },
    { id: 'labour-law', label: 'Labour Law' },
    { id: 'licences', label: 'Licences & Certificates' },
    { id: 'registrations', label: 'Statutory Registrations' },
    { id: 'tax-filing', label: 'GST & Tax Filing' },
  ];

  const filteredServices = useMemo(() => {
    return SERVICES_LIST.filter((service) => {
      const matchesCategory =
        activeCategory === 'all' || service.category === activeCategory;
      const matchesSearch =
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.applicableFor.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'labour-law-compliance':
      case 'other-labour-law-activities':
        return <ShieldCheck className="w-5 h-5 text-blue-600" />;
      case 'trade-licence':
      case 'os-ce-certificate':
      case 'fssai-licence':
      case 'drug-licence':
        return <Award className="w-5 h-5 text-indigo-600" />;
      case 'clra-registration-renewal':
      case 'pt-ec-rc-registration':
        return <Building2 className="w-5 h-5 text-emerald-600" />;
      case 'gst-tax-filing':
        return <Receipt className="w-5 h-5 text-cyan-600" />;
      default:
        return <FileCheck2 className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider">
            <Scale className="w-3.5 h-3.5 text-blue-700" />
            <span>Comprehensive Compliance Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Statutory & Regulatory Services
          </h2>

          <p className="text-base text-slate-600 leading-relaxed">
            Professional assistance across labour laws, statutory registrations, municipal
            and commercial licences, and tax-related filing requirements.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-200/70 rounded-xl w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-white text-blue-800 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search services (e.g. FSSAI, CLRA, Tax)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-800 placeholder-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const isFeatured = service.id === 'labour-law-compliance';

            return (
              <div
                key={service.id}
                className={`flex flex-col justify-between bg-white rounded-2xl p-6 border transition-all duration-200 hover:shadow-lg hover:border-blue-300 relative group ${
                  isFeatured
                    ? 'border-blue-300 ring-1 ring-blue-500/20 bg-gradient-to-b from-blue-50/30 to-white'
                    : 'border-slate-200'
                }`}
              >
                <div>
                  {/* Card Header: Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-slate-100 group-hover:bg-blue-50 border border-slate-200/80 group-hover:border-blue-200 flex items-center justify-center transition-colors">
                      {getServiceIcon(service.id)}
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 group-hover:bg-blue-50 group-hover:text-blue-800 group-hover:border-blue-200 transition-colors">
                      {service.badge || 'Compliance'}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-2">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Assistance Includes:
                    </div>
                    {service.keyAspects.slice(0, 2).map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-xs text-slate-700"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectService(service)}
                    className="text-xs font-bold text-blue-700 hover:text-blue-800 flex items-center gap-1.5 group-hover:underline underline-offset-2"
                  >
                    <span>Learn More</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenConsultation(service.id)}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-slate-900 hover:bg-blue-700 transition-colors"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Search Fallback */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8 max-w-lg mx-auto">
            <Search className="w-8 h-8 text-slate-400 mx-auto mb-3" />
            <h4 className="text-base font-bold text-slate-900">
              No services match "{searchQuery}"
            </h4>
            <p className="text-xs text-slate-500 mt-1">
              Try searching with another keyword or explore our full list of 9 services.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-blue-700 bg-blue-50 rounded-lg hover:bg-blue-100"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-900 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold">
              Require assistance with multiple registrations or ongoing compliance?
            </h3>
            <p className="text-xs sm:text-sm text-blue-200">
              Jay Jagannath Associates coordinates multi-statute filings under a unified advisory umbrella.
            </p>
          </div>
          <button
            onClick={() => onOpenConsultation()}
            className="shrink-0 px-6 py-3 rounded-lg bg-white hover:bg-blue-50 text-blue-900 font-bold text-sm shadow-xs transition-colors flex items-center gap-2"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-4 h-4 text-blue-700" />
          </button>
        </div>
      </div>
    </section>
  );
};
