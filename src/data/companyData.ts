import { FAQItem, ProcessStep, ServiceItem, WhyChoosePillar } from '../types';

export const COMPANY_INFO = {
  name: 'Jay Jagannath Associates',
  shortName: 'JJ Associates',
  tagline: 'We Value Your Business',
  positioning: 'Your Trusted Partner for Labour Law & Business Compliance',
  businessType: 'Labour Law Compliance & Business Compliance Services',
  proprietor: 'JHARASHREE ROUTRAY',
  phone: '7683943583',
  phoneFormatted: '+91 76839 43583',
  email: 'labourlawcompliance01@gmail.com',
  operatingHours: 'Monday – Saturday: 9:30 AM – 6:30 PM (IST)',
  // Location placeholders requiring owner confirmation prior to final launch
  location: {
    addressPlaceholder: 'Office Address to be confirmed by owner',
    cityPlaceholder: 'Operating City',
    statePlaceholder: 'Operating State',
  },
  disclaimer:
    'Jay Jagannath Associates is an independent professional compliance consultancy providing facilitation and guidance for statutory filings, registrations, licences, and labour law documentation. We assist clients in navigating regulatory procedures diligently.',
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'labour-law-compliance',
    title: 'Labour Law Compliance',
    badge: 'Core Expertise',
    category: 'labour-law',
    shortDescription:
      'End-to-end professional assistance with labour law compliance, statutory registers, filings, and regulatory documentation.',
    fullDescription:
      'Managing labour law requirements can be complex and time-consuming. Jay Jagannath Associates provides professional assistance for labour law compliance-related activities, helping businesses stay organized, adhere to statutory mandates, and address their regulatory requirements with confidence.',
    keyAspects: [
      'Statutory compliance advisory and regular review',
      'Assistance with maintenance of mandatory registers & records',
      'Guidance on periodic filings and returns under labour legislation',
      'Assistance during compliance inspections and department communications',
      'Advisory on minimum wages, working hours, leave rules, and employee benefits',
    ],
    applicableFor:
      'Commercial establishments, factories, service sector firms, contractors, and organizations with employed staff.',
    processOverview: [
      'Initial compliance audit of existing records and workforce structure',
      'Identification of applicable labour statutes and register formats',
      'Systematic preparation and update of statutory documentation',
      'Routine review and assistance for timely submission of periodic returns',
    ],
    documentChecklistGuidelines: [
      'Establishment registration details',
      'Employee master roll & attendance records',
      'Wage registers & payment proof',
      'Previous inspection remarks or statutory notices (if any)',
    ],
  },
  {
    id: 'os-ce-certificate',
    title: 'OS & CE Certificate',
    badge: 'Statutory Certification',
    category: 'licences',
    shortDescription:
      'Professional assistance with application, verification, and documentation for OS & CE Certificates.',
    fullDescription:
      'We provide dedicated professional support for obtaining and renewing OS & CE (Establishment / Commercial Operations) Certification. Our team coordinates the necessary application paperwork and procedural formalities required by regulatory authorities.',
    keyAspects: [
      'Verification of establishment details and business nature',
      'Preparation and submission of OS & CE certificate applications',
      'Liaison and follow-up with jurisdictional authorities',
      'Assistance with certificate renewals and address/partner amendments',
    ],
    applicableFor:
      'Offices, shops, commercial institutions, establishments, and enterprises operating under relevant establishment acts.',
    processOverview: [
      'Document review and application drafting',
      'Filing with the appropriate licensing department',
      'Tracking department scrutiny and addressing queries',
      'Delivery of finalized certificate copy',
    ],
    documentChecklistGuidelines: [
      'Proof of business ownership / lease agreement of premises',
      'PAN card and ID proof of proprietor / partners / directors',
      'Utility bill / electricity bill of commercial premise',
      'Entity registration certificate / partnership deed / incorporation certificate',
    ],
    ownerNote: 'Displayed as OS & CE Certificate as per supplied business document.',
  },
  {
    id: 'trade-licence',
    title: 'Trade Licence',
    badge: 'Municipal Compliance',
    category: 'licences',
    shortDescription:
      'Comprehensive assistance with Trade Licence fresh applications, renewals, and municipal compliance support.',
    fullDescription:
      'A Trade Licence is mandatory for conducting specific businesses or commercial activities within municipal limits. Jay Jagannath Associates helps enterprises handle the entire application process, documentation, renewals, and compliance requirements seamlessly.',
    keyAspects: [
      'Determining specific municipal trade classification and fee structure',
      'Compilation of premise proof, ownership papers, and partner KYC',
      'Online and offline application filing with municipal corporations',
      'Timely renewal management to prevent penalties and operational disruption',
    ],
    applicableFor:
      'Retailers, traders, service businesses, workshops, hospitality units, and corporate offices.',
    processOverview: [
      'Review of trade activity classification and municipal jurisdiction',
      'Preparation of formal application along with supporting attachments',
      'Submission and liaison during municipal inspector verification',
      'Obtaining and handing over the official Trade Licence document',
    ],
    documentChecklistGuidelines: [
      'Premises ownership deed or registered rent agreement with NOC from landlord',
      'Latest Property Tax receipt or electricity bill',
      'Applicant ID and Address proof (Aadhaar, PAN, Voter ID)',
      'Business incorporation / firm constitution documents',
    ],
  },
  {
    id: 'pt-ec-rc-registration',
    title: 'PT / EC / RC Registration',
    badge: 'Statutory Registration',
    category: 'registrations',
    shortDescription:
      'Professional guidance and application handling for PT (Professional Tax), EC, and RC registrations.',
    fullDescription:
      'Ensure your organization holds all required statutory registrations. We provide end-to-end guidance for PT (Professional Tax / Enrolment Certificate / Registration Certificate), EC, and RC, assisting with application submission, department queries, and certificate generation.',
    keyAspects: [
      'Eligibility determination based on employee count and business nature',
      'Professional Tax Enrolment Certificate (PTEC) & Registration Certificate (PTRC) filing',
      'Registration Certificate (RC) processing under relevant state statutory bodies',
      'Guidance on periodic return schedules and payment deadlines',
    ],
    applicableFor:
      'Employers, business proprietors, corporate entities, and self-employed professionals.',
    processOverview: [
      'Assessment of entity structure and employee payroll thresholds',
      'Online application drafting with state commercial tax portals',
      'Uploading attested supporting documents and verification tracking',
      'Certificate generation and compliance calendar briefing',
    ],
    documentChecklistGuidelines: [
      'PAN card of business entity and authorized signatory',
      'Certificate of Incorporation / Partnership Deed / Shop Act',
      'Bank account statement / cancelled cheque',
      'List of employees and salary structure details',
    ],
    ownerNote:
      'Abbreviations (PT / EC / RC) kept configurable as per owner requirement.',
  },
  {
    id: 'clra-registration-renewal',
    title: 'CLRA Registration / Renewal',
    badge: 'Contract Labour Act',
    category: 'labour-law',
    shortDescription:
      'Dedicated support for Principal Employer RC and Contractor Licence registration and renewal under CLRA.',
    fullDescription:
      'Under the Contract Labour (Regulation and Abolition) Act, both Principal Employers and Contractors must hold valid Registration Certificates (RC) and Labour Licences. Jay Jagannath Associates specializes in handling fresh CLRA applications, amendments, and timely renewals.',
    keyAspects: [
      'CLRA Registration Certificate (RC) for Principal Employers engaging contract labour',
      'CLRA Labour Licence application and renewal for Manpower Contractors',
      'Preparation of Form I, Form IV, Form V (Form-5), and statutory intimations',
      'Assistance with register maintenance under CLRA rules and statutory returns',
    ],
    applicableFor:
      'Principal employers (factories, infrastructure, IT/ITES, corporate parks) and labour supply/facility management contractors.',
    processOverview: [
      'Evaluating threshold of contract workers engaged (statutory limits)',
      'Issuance / collection of Form V from Principal Employer',
      'Online portal submission to the Labour Commissioner Office / licensing officer',
      'Inspection facilitation and issuance of CLRA RC / Licence',
    ],
    documentChecklistGuidelines: [
      'Work order / contract agreement between Principal Employer and Contractor',
      'Form V signed by authorized Principal Employer representative',
      'Premise registration details & Factory / Commercial licence',
      'Security deposit challan and statutory fee payment receipts',
    ],
  },
  {
    id: 'fssai-licence',
    title: 'FSSAI Licence',
    badge: 'Food Safety Compliance',
    category: 'licences',
    shortDescription:
      'Professional assistance with FSSAI Basic Registration, State Licence, and Central Licence for food businesses.',
    fullDescription:
      'Operating any food-related enterprise requires compliance under the Food Safety and Standards Authority of India (FSSAI). We guide food business operators through the entire FoSCoS registration and licensing hierarchy with straightforward, business-friendly assistance.',
    keyAspects: [
      'FSSAI Basic Registration (for micro/small operators and traders)',
      'FSSAI State Licence & Central Licence for manufacturers, distributors, and cloud kitchens',
      'Food safety compliance documentation, water test reports, and layout plan guidance',
      'Renewal management and modification of existing food licences',
    ],
    applicableFor:
      'Restaurants, cafes, caterers, food manufacturers, packaged food distributors, cloud kitchens, grocery stores, and food transporters.',
    processOverview: [
      'Determination of food business capacity, turnover, and applicable licence category',
      'Documentation review including food category selection and premises verification',
      'Online filing on the FoSCoS portal and coordination with Food Safety Officers',
      'Delivery of digital FSSAI 14-digit Licence / Registration certificate',
    ],
    documentChecklistGuidelines: [
      'Photo ID & address proof of proprietor / authorized signatory',
      'Premises rent agreement / electricity bill / NOC',
      'List of food product categories to be handled or manufactured',
      'Premise layout plan & equipment list (for manufacturing/processing units)',
    ],
  },
  {
    id: 'drug-licence',
    title: 'Drug / Durg Licence',
    badge: 'Pharmaceutical Compliance',
    category: 'licences',
    shortDescription:
      'Expert assistance with Retail, Wholesale, and Manufacturing Drug Licences from State Drug Control departments.',
    fullDescription:
      'Assistance with obtaining and renewing Drug Licences required for storing, selling, distributing, or manufacturing pharmaceutical products. Jay Jagannath Associates coordinates statutory paperwork, registered pharmacist documentation, and premise compliance requirements.',
    keyAspects: [
      'Retail Drug Licence (Form 20 & 21) for pharmacies and medical shops',
      'Wholesale Drug Licence (Form 20B & 21B) for pharmaceutical distributors and stockists',
      'Guidance on mandatory premises area, storage facilities (refrigeration), and pharmacist documentation',
      'Assistance with licence renewals, endorsements, and pharmacist changes',
    ],
    applicableFor:
      'Retail pharmacies, medical stores, pharmaceutical distributors, surgical goods dealers, and cosmetics/ayurvedic trade establishments.',
    processOverview: [
      'Verification of premise compliance (carpet area, storage, refrigeration setup)',
      'Compilation of qualified pharmacist / competent person credentials and consent',
      'Application filing with the State Licensing Authority / Drug Controller Office',
      'Inspection facilitation and receipt of valid Drug Licence',
    ],
    documentChecklistGuidelines: [
      'Registered Pharmacist / Competent Person registration certificate and qualification proof',
      'Premises ownership proof / rent agreement with blue-print / key plan',
      'Proof of cold storage equipment (refrigerator purchase invoice)',
      'Affidavit of proprietor / partner and entity constitution records',
    ],
    ownerNote:
      'Listed as Drug / Durg Licence in alignment with provided business source document.',
  },
  {
    id: 'gst-tax-filing',
    title: 'GST & Tax Filing',
    badge: 'Tax Compliance',
    category: 'tax-filing',
    shortDescription:
      'Reliable assistance with GST registration, periodic GST return filing, and related business tax compliance.',
    fullDescription:
      'Stay updated with your indirect tax obligations and statutory reporting. Jay Jagannath Associates assists business owners with GST registration, regular monthly/quarterly return filings (GSTR-1, GSTR-3B), reconciliation, and tax-related documentation support.',
    keyAspects: [
      'Fresh GST registration application and verification handling',
      'Timely preparation and filing of monthly & quarterly GST returns',
      'Input Tax Credit (ITC) tracking and purchase-sales invoice reconciliation',
      'Assistance with GST amendments, revocation of cancellation, and basic tax filing guidance',
    ],
    applicableFor:
      'Sole proprietorships, partnerships, LLPs, private limited companies, traders, and service providers.',
    processOverview: [
      'Review of sales/purchase invoices and bank transaction summaries',
      'Reconciliation of GSTR-2B with internal purchase records',
      'Computation of tax liability and utilization of available credits',
      'Timely submission and acknowledgment generation on the GST portal',
    ],
    documentChecklistGuidelines: [
      'PAN card and Aadhaar of applicant / firm PAN',
      'Bank account statement / cancelled cheque with IFSC',
      'Business address proof (electricity bill / rent agreement)',
      'Sales and purchase registers / invoice summaries for the filing period',
    ],
  },
  {
    id: 'other-labour-law-activities',
    title: 'Other Labour Law Compliance Activities',
    badge: 'Bespoke Advisory',
    category: 'labour-law',
    shortDescription:
      'Customized statutory compliance assistance for specialized labour law needs, registrations, and department notices.',
    fullDescription:
      'Every enterprise possesses unique operational dimensions. Jay Jagannath Associates handles a broad spectrum of additional labour law and statutory compliance requirements, allowing businesses to address regulatory procedures with customized, requirement-focused support.',
    keyAspects: [
      'Assistance with statutory notice replies and department clarifications',
      'Statutory register maintenance under Factories Act, Maternity Benefit Act, Payment of Bonus Act',
      'Advisory on POSH (Prevention of Sexual Harassment) internal committee documentation',
      'Customized compliance health-checks for growing enterprises and contractors',
    ],
    applicableFor:
      'Businesses requiring bespoke regulatory advisory, statutory record restoration, or specialized compliance support.',
    processOverview: [
      'Detailed discussion to understand the unique compliance challenge',
      'Identification of relevant legal provisions and documentation needs',
      'Formulation of structured action plan and documentation assistance',
      'Ongoing support and periodic monitoring',
    ],
    documentChecklistGuidelines: [
      'Current organizational profile and operational structure',
      'Existing statutory registrations and history of past filings',
      'Specific regulatory notice or requirement document (if applicable)',
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Understand',
    description:
      'We begin with a detailed discussion to understand your business nature, headcount, and specific regulatory obligations.',
    highlight: 'Requirement Analysis',
  },
  {
    stepNumber: '02',
    title: 'Identify',
    description:
      'We pinpoint the exact statutory registrations, licences, or periodic compliance schedules applicable to your enterprise.',
    highlight: 'Statutory Mapping',
  },
  {
    stepNumber: '03',
    title: 'Assist',
    description:
      'Our team provides end-to-end assistance with document compilation, drafting, portal filings, and procedural submissions.',
    highlight: 'Professional Filing',
  },
  {
    stepNumber: '04',
    title: 'Support',
    description:
      'We provide continuous follow-up support, periodic renewal alerts, and guidance to keep your business compliance-ready.',
    highlight: 'Ongoing Advisory',
  },
];

export const WHY_CHOOSE_US: WhyChoosePillar[] = [
  {
    title: 'Compliance-Focused',
    description:
      'Our core services are centered specifically around labour laws, statutory registrations, and business regulatory obligations.',
    benefit: 'Specialized regulatory focus rather than generic consultancy.',
  },
  {
    title: 'Business-Friendly Approach',
    description:
      'We break down intricate legal jargon and multi-tiered government processes into clear, actionable, and manageable steps.',
    benefit: 'Save time, reduce stress, and prevent costly operational delays.',
  },
  {
    title: 'Multiple Services Under One Roof',
    description:
      'From Labour Law and CLRA to Trade Licences, FSSAI, Drug Licences, and GST filing, obtain coordinated assistance from a single trusted point of contact.',
    benefit: 'Unified coordination across varied municipal, state, and tax portals.',
  },
  {
    title: 'Personalized Assistance',
    description:
      'We treat every business requirement with direct attention, tailoring documentation and procedural guidance to your exact operational scale.',
    benefit: 'Direct accessibility to experienced compliance professionals.',
  },
  {
    title: 'Reliable Support',
    description:
      'We emphasize prompt communication, diligent follow-ups, and proactive support to help you manage compliance responsibilities smoothly.',
    benefit: 'Dependable long-term partnership as your business expands.',
  },
];

export const TRUST_STRIP_ITEMS = [
  {
    title: 'Labour Law',
    subtitle: 'Compliance Support',
    icon: 'ShieldCheck',
    desc: 'Statutory registers, returns & regulatory guidance',
  },
  {
    title: 'Licences',
    subtitle: 'Registration & Renewal',
    icon: 'Award',
    desc: 'Trade Licence, FSSAI, Drug Licence & OS/CE',
  },
  {
    title: 'GST & Tax',
    subtitle: 'Filing Assistance',
    icon: 'Receipt',
    desc: 'Registration, monthly returns & reconciliation',
  },
  {
    title: 'Business Compliance',
    subtitle: 'End-to-End Support',
    icon: 'Briefcase',
    desc: 'CLRA RC/Licence, PT/EC/RC & statutory advisory',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What services does Jay Jagannath Associates provide?',
    answer:
      'Jay Jagannath Associates provides professional assistance with labour law compliance, statutory registrations, licences (such as Trade Licence, FSSAI Licence, Drug/Durg Licence, OS & CE Certificate), CLRA registration/renewal, PT/EC/RC registration, GST & tax filing, and other compliance-related activities.',
    category: 'general',
  },
  {
    question: 'Can you help with Trade Licence requirements?',
    answer:
      'Yes, Trade Licence assistance is one of our primary listed services. We assist with fresh applications, renewals, document preparation, and municipal compliance coordination.',
    category: 'services',
  },
  {
    question: 'Do you provide CLRA registration and renewal assistance?',
    answer:
      'Yes. CLRA registration/renewal of Registration Certificate (RC) for Principal Employers and Labour Licences for Contractors under the Contract Labour (Regulation and Abolition) Act is a dedicated core service.',
    category: 'services',
  },
  {
    question: 'Do you assist with FSSAI Licence?',
    answer:
      'Yes. We provide complete guidance and documentation assistance for FSSAI Basic Registration as well as State and Central Food Licences for food business operators.',
    category: 'services',
  },
  {
    question: 'Do you assist with GST and tax filing?',
    answer:
      'Yes, GST registration, regular tax return filings, and related indirect tax compliance assistance are part of our listed services for businesses.',
    category: 'services',
  },
  {
    question: 'How can I discuss my business requirement?',
    answer:
      'You can contact Jay Jagannath Associates directly by phone at 7683943583, send an email to labourlawcompliance01@gmail.com, or submit the consultation enquiry form on this website. Our team will review your requirement and reach out promptly.',
    category: 'consultation',
  },
  {
    question: 'What is the OS & CE Certificate?',
    answer:
      'The OS & CE Certificate pertains to establishment and commercial operational certification under relevant statutory establishment frameworks. We provide complete application and renewal support as per your jurisdictional requirements.',
    category: 'services',
  },
  {
    question: 'How do I know which compliances apply to my new business?',
    answer:
      'You can use our interactive Compliance Finder tool on this website or reach out directly for a consultation. Based on your business nature, headcount, location, and operational model, we will identify all mandatory registrations and licences.',
    category: 'process',
  },
];

export const OWNER_CONFIRMATION_CHECKLIST = [
  {
    id: 'address',
    label: 'Business Office Address',
    status: 'Pending Confirmation',
    note: 'Exact street, building, and landmark address to be provided by proprietor.',
  },
  {
    id: 'operating-region',
    label: 'Operating City & State',
    status: 'Pending Confirmation',
    note: 'Specific district/state jurisdiction for local municipal SEO.',
  },
  {
    id: 'office-hours',
    label: 'Office Hours & Availability',
    status: 'Default Set (Mon-Sat 9:30 AM - 6:30 PM)',
    note: 'Proprietor can verify or adjust standard consultation hours.',
  },
  {
    id: 'whatsapp-status',
    label: 'WhatsApp Connectivity on 7683943583',
    status: 'Pending Confirmation',
    note: 'Direct WhatsApp link is configured with phone 7683943583 once confirmed.',
  },
  {
    id: 'term-os-ce',
    label: 'Terminology Verification: OS & CE Certificate',
    status: 'Displayed as supplied in document',
    note: 'Kept verbatim as per scanned document.',
  },
  {
    id: 'term-pt-ec-rc',
    label: 'Terminology Verification: PT / EC / RC',
    status: 'Displayed as supplied in document',
    note: 'Professional Tax, Enrolment Certificate, Registration Certificate.',
  },
  {
    id: 'term-drug-licence',
    label: 'Terminology Verification: Drug / Durg Licence',
    status: 'Displayed as Drug / Durg Licence',
    note: 'Clarified in UI as business content item pending proprietor final signoff.',
  },
];
