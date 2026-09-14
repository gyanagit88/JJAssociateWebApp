import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { FeaturedService } from './components/FeaturedService';
import { ComplianceFinder } from './components/ComplianceFinder';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { OwnerConfigModal } from './components/OwnerConfigModal';
import { LegalModal } from './components/LegalModals';
import { MobileStickyBar } from './components/MobileStickyBar';
import { SERVICES_LIST } from './data/companyData';
import { ServiceItem } from './types';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [ownerChecklistOpen, setOwnerChecklistOpen] = useState<boolean>(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [contactServiceId, setContactServiceId] = useState<string | undefined>(undefined);
  const [contactCustomNote, setContactCustomNote] = useState<string | undefined>(undefined);

  const handleOpenConsultation = (serviceId?: string, customNote?: string) => {
    if (serviceId) {
      setContactServiceId(serviceId);
    }
    if (customNote) {
      setContactCustomNote(customNote);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenComplianceFinder = () => {
    const finderElem = document.getElementById('compliance-finder');
    if (finderElem) {
      finderElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceById = (serviceId: string) => {
    const found = SERVICES_LIST.find((s) => s.id === serviceId);
    if (found) {
      setSelectedService(found);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white pb-14 sm:pb-0">
      {/* Header & Navigation */}
      <Navbar
        onOpenConsultation={handleOpenConsultation}
        onOpenOwnerChecklist={() => setOwnerChecklistOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section & Trust Strip */}
        <Hero
          onOpenConsultation={handleOpenConsultation}
          onOpenComplianceFinder={handleOpenComplianceFinder}
          onSelectService={handleSelectServiceById}
        />

        {/* 2. About Us Section */}
        <AboutSection
          onOpenConsultation={handleOpenConsultation}
          onOpenComplianceFinder={handleOpenComplianceFinder}
        />

        {/* 3. Services Portfolio Grid */}
        <ServicesSection
          onSelectService={(svc) => setSelectedService(svc)}
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 4. Featured Primary Service: Labour Law Compliance */}
        <FeaturedService
          onOpenConsultation={handleOpenConsultation}
          onExploreServiceDetails={handleSelectServiceById}
        />

        {/* 5. Interactive Compliance Finder ("Which Compliance Do I Need?") */}
        <ComplianceFinder onOpenConsultation={handleOpenConsultation} />

        {/* 6. Why Choose Us & 4-Step Process */}
        <WhyChooseUs onOpenConsultation={handleOpenConsultation} />

        {/* 7. FAQs Accordion */}
        <FAQSection onOpenConsultation={handleOpenConsultation} />

        {/* 8. Contact & Consultation Form */}
        <ContactSection
          preselectedServiceId={contactServiceId}
          customNote={contactCustomNote}
        />
      </main>

      {/* Footer */}
      <Footer
        onSelectService={handleSelectServiceById}
        onOpenConsultation={handleOpenConsultation}
        onOpenLegalModal={(type) => setLegalModalType(type)}
        onOpenOwnerChecklist={() => setOwnerChecklistOpen(true)}
      />

      {/* Mobile Sticky Action Bar */}
      <MobileStickyBar onOpenConsultation={handleOpenConsultation} />

      {/* Service Details Deep-Dive Modal */}
      {selectedService && (
        <ServiceDetailModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onSelectForConsultation={(serviceId) => {
            setSelectedService(null);
            handleOpenConsultation(serviceId);
          }}
        />
      )}

      {/* Section 31 Owner Verification Modal */}
      <OwnerConfigModal
        isOpen={ownerChecklistOpen}
        onClose={() => setOwnerChecklistOpen(false)}
      />

      {/* Legal & Privacy Policy Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
