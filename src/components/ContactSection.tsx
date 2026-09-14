import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  User,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Building2,
  Scale,
  Sparkles,
  PhoneCall,
  Copy,
  Check,
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_LIST } from '../data/companyData';
import { ConsultationEnquiry } from '../types';

interface ContactSectionProps {
  preselectedServiceId?: string;
  customNote?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  preselectedServiceId,
  customNote,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    serviceRequired: preselectedServiceId || 'Labour Law Compliance',
    message: customNote || '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedEnquiry, setSubmittedEnquiry] = useState<ConsultationEnquiry | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (preselectedServiceId) {
      const match = SERVICES_LIST.find((s) => s.id === preselectedServiceId);
      if (match) {
        setFormData((prev) => ({
          ...prev,
          serviceRequired: match.title,
        }));
      }
    }
  }, [preselectedServiceId]);

  useEffect(() => {
    if (customNote) {
      setFormData((prev) => ({
        ...prev,
        message: customNote,
      }));
    }
  }, [customNote]);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (!/^[0-9+ -]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number (min 8 digits)';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.serviceRequired) {
      newErrors.serviceRequired = 'Please select the service required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your compliance requirement';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const enquiry: ConsultationEnquiry = {
        id: `JJA-${Date.now().toString().slice(-6)}`,
        name: formData.name.trim(),
        businessName: formData.businessName.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        serviceRequired: formData.serviceRequired,
        message: formData.message.trim(),
        createdAt: new Date().toISOString(),
        status: 'new',
      };

      // Save to localStorage for demo persistence
      try {
        const existing = JSON.parse(localStorage.getItem('jj_enquiries') || '[]');
        localStorage.setItem('jj_enquiries', JSON.stringify([enquiry, ...existing]));
      } catch (err) {
        console.error('Storage error', err);
      }

      setSubmittedEnquiry(enquiry);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleCopyDetails = () => {
    if (!submittedEnquiry) return;
    const text = `Enquiry Ref: ${submittedEnquiry.id}\nName: ${submittedEnquiry.name}\nBusiness: ${submittedEnquiry.businessName || 'N/A'}\nPhone: ${submittedEnquiry.phone}\nService: ${submittedEnquiry.serviceRequired}\nMessage: ${submittedEnquiry.message}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      businessName: '',
      phone: '',
      email: '',
      serviceRequired: 'Labour Law Compliance',
      message: '',
    });
    setIsSubmitted(false);
    setSubmittedEnquiry(null);
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Business Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider">
              <Scale className="w-3.5 h-3.5 text-blue-700" />
              <span>Direct Consultation & Enquiry</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Get in Touch with <br />
              <span className="text-blue-700">Jay Jagannath Associates</span>
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Reach out to discuss your labour law compliance, statutory registrations,
              licences, or GST filing requirements. We are committed to providing
              prompt and dedicated assistance for your business.
            </p>

            {/* Business Contact Cards */}
            <div className="space-y-3.5 pt-2">
              {/* Proprietor Box */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center shrink-0">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Proprietor</div>
                  <div className="text-base font-bold text-slate-900">
                    {COMPANY_INFO.proprietor}
                  </div>
                  <div className="text-xs text-blue-700 font-semibold mt-0.5">
                    Lead Statutory & Compliance Consultant
                  </div>
                </div>
              </div>

              {/* Phone Link */}
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="p-4 rounded-xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200 hover:border-blue-300 transition-colors flex items-start gap-3.5 group"
                id="contact-section-phone-card"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-slate-500 font-medium">Direct Phone</div>
                  <div className="text-base font-bold text-slate-900 group-hover:text-blue-700">
                    {COMPANY_INFO.phoneFormatted}
                  </div>
                  <div className="text-xs text-emerald-600 font-semibold mt-0.5">
                    Click to call directly on 7683943583
                  </div>
                </div>
              </a>

              {/* Email Link */}
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="p-4 rounded-xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200 hover:border-blue-300 transition-colors flex items-start gap-3.5 group"
                id="contact-section-email-card"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-slate-500 font-medium">Email Address</div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-blue-700 truncate">
                    {COMPANY_INFO.email}
                  </div>
                  <div className="text-xs text-blue-600 font-semibold mt-0.5">
                    Click to compose message
                  </div>
                </div>
              </a>

              {/* Operating Hours */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-800 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Office Hours</div>
                  <div className="text-sm font-bold text-slate-900">
                    {COMPANY_INFO.operatingHours}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Sunday by appointment
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Note on Location */}
            <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600">
              <strong className="text-slate-900 block mb-1">Business Engagement:</strong>
              Providing remote and on-site regulatory compliance facilitation for commercial establishments, contractors, retailers, and corporate entities.
            </div>
          </div>

          {/* Right Column: Contact & Consultation Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-lg relative">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="border-b border-slate-200 pb-4 mb-2">
                    <h3 className="text-xl font-bold text-slate-900">
                      Request a Consultation
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Fill out the form below to receive professional guidance from Jay Jagannath Associates.
                    </p>
                  </div>

                  {/* Name and Business Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Full Name <span className="text-rose-600">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                          errors.name ? 'border-rose-400' : 'border-slate-300'
                        }`}
                        id="form-name-input"
                      />
                      {errors.name && (
                        <p className="text-xs text-rose-600 mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Business / Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Apex Enterprises"
                        value={formData.businessName}
                        onChange={(e) =>
                          setFormData({ ...formData, businessName: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        id="form-business-input"
                      />
                    </div>
                  </div>

                  {/* Phone and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Phone Number <span className="text-rose-600">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                          errors.phone ? 'border-rose-400' : 'border-slate-300'
                        }`}
                        id="form-phone-input"
                      />
                      {errors.phone && (
                        <p className="text-xs text-rose-600 mt-1">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. contact@apex.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                          errors.email ? 'border-rose-400' : 'border-slate-300'
                        }`}
                        id="form-email-input"
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-600 mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Service Required Dropdown */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Service Required <span className="text-rose-600">*</span>
                    </label>
                    <select
                      value={formData.serviceRequired}
                      onChange={(e) =>
                        setFormData({ ...formData, serviceRequired: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      id="form-service-dropdown"
                    >
                      <option value="Labour Law Compliance">
                        Labour Law Compliance
                      </option>
                      <option value="OS & CE Certificate">OS & CE Certificate</option>
                      <option value="Trade Licence">Trade Licence</option>
                      <option value="PT / EC / RC Registration">
                        PT / EC / RC Registration
                      </option>
                      <option value="CLRA Registration / Renewal">
                        CLRA Registration / Renewal
                      </option>
                      <option value="FSSAI Licence">FSSAI Licence</option>
                      <option value="Drug / Durg Licence">
                        Drug / Durg Licence
                      </option>
                      <option value="GST & Tax Filing">GST & Tax Filing</option>
                      <option value="Other Labour Law Compliance Activities">
                        Other Labour Law Compliance Activities
                      </option>
                      <option value="Multiple Compliance Services">
                        Multiple Compliance Services
                      </option>
                    </select>
                    {errors.serviceRequired && (
                      <p className="text-xs text-rose-600 mt-1">
                        {errors.serviceRequired}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Message / Specific Requirements <span className="text-rose-600">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please specify your establishment nature, workforce count, or specific registration needed..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none ${
                        errors.message ? 'border-rose-400' : 'border-slate-300'
                      }`}
                      id="form-message-textarea"
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-600 mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white font-bold text-base flex items-center justify-center gap-2 shadow-md transition-colors disabled:opacity-70 cursor-pointer"
                    id="form-submit-btn"
                  >
                    {isSubmitting ? (
                      <span>Submitting Enquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Request a Consultation</span>
                      </>
                    )}
                  </button>

                  <div className="text-[11px] text-center text-slate-500">
                    Your details are treated confidentially for regulatory consultation purposes only.
                  </div>
                </form>
              ) : (
                /* Submission Confirmation */
                <div className="text-center py-6 space-y-5 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-slate-900">
                      Thank you. We have received your enquiry and will get back to you.
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Proprietor <strong>{COMPANY_INFO.proprietor}</strong> and our compliance
                      team at <strong>Jay Jagannath Associates</strong> will review your requirement.
                    </p>
                  </div>

                  {submittedEnquiry && (
                    <div className="p-4 rounded-2xl bg-white border border-slate-200 text-left text-xs space-y-2 max-w-md mx-auto shadow-xs">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                        <span className="font-bold text-slate-500">Enquiry Ref ID</span>
                        <span className="font-mono font-bold text-blue-700">
                          {submittedEnquiry.id}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-slate-600">
                        <div>
                          <span className="block text-slate-400">Name</span>
                          <strong className="text-slate-800">{submittedEnquiry.name}</strong>
                        </div>
                        <div>
                          <span className="block text-slate-400">Phone</span>
                          <strong className="text-slate-800">{submittedEnquiry.phone}</strong>
                        </div>
                        <div className="col-span-2">
                          <span className="block text-slate-400">Service</span>
                          <strong className="text-slate-800">
                            {submittedEnquiry.serviceRequired}
                          </strong>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                      onClick={handleCopyDetails}
                      className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Copied to Clipboard</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Enquiry Details</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>Call Now ({COMPANY_INFO.phoneFormatted})</span>
                    </a>

                    <button
                      onClick={handleResetForm}
                      className="px-4 py-2 rounded-lg text-slate-500 hover:text-slate-800 text-xs font-semibold underline underline-offset-2"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
