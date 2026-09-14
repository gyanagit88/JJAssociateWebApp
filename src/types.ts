export interface ServiceItem {
  id: string;
  title: string;
  badge?: string;
  category: 'labour-law' | 'licences' | 'registrations' | 'tax-filing';
  shortDescription: string;
  fullDescription: string;
  keyAspects: string[];
  applicableFor: string;
  processOverview: string[];
  documentChecklistGuidelines: string[];
  ownerNote?: string;
}

export interface ConsultationEnquiry {
  id: string;
  name: string;
  businessName?: string;
  phone: string;
  email?: string;
  serviceRequired: string;
  message: string;
  createdAt: string;
  status: 'new' | 'reviewed';
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'services' | 'process' | 'consultation';
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  highlight: string;
}

export interface WhyChoosePillar {
  title: string;
  description: string;
  benefit: string;
}
