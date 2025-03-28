
import { FileCheck, MapPin, GraduationCap, Home, CreditCard, FileText, Building, FileBox, BookOpen, Globe } from 'lucide-react';

const resourceData = [
  {
    id: 'visa-guide',
    title: 'Visa Information',
    shortDescription: 'Work visa requirements and application process',
    Icon: FileCheck,
    iconColor: 'text-blue-600 bg-blue-100',
    content: [
      {
        heading: 'Overview of German Work Visas',
        paragraphs: [
          'Germany offers several types of visas for international professionals looking to work in the country. The type of visa you need depends on your qualifications, the job you\'re pursuing, and your country of origin.',
          'Citizens of EU countries, Iceland, Liechtenstein, Norway, and Switzerland don\'t need a visa to work in Germany. However, nationals from other countries typically need to apply for a work visa before they can start employment in Germany.'
        ]
      },
      {
        heading: 'Types of Work Visas',
        paragraphs: [
          'Germany offers several types of work visas for different professional situations:'
        ],
        bullets: [
          'EU Blue Card: For highly-qualified professionals with a university degree and a job offer with a minimum salary requirement',
          'Work Visa for Skilled Workers: For professionals with recognized vocational training or a university degree',
          'Job Seeker Visa: Allows qualified professionals to come to Germany for up to six months to look for a job',
          'Self-Employment Visa: For entrepreneurs planning to start a business in Germany',
          'Research Visa: For researchers with a hosting agreement from a recognized research institution'
        ]
      },
      {
        heading: 'Application Process',
        paragraphs: [
          'The general process for applying for a German work visa includes the following steps:'
        ],
        bullets: [
          'Secure a job offer from a German employer',
          'Gather all required documents, including your passport, job offer, proof of qualifications, and health insurance',
          'Schedule an appointment at the German embassy or consulate in your home country',
          'Submit your application and supporting documents',
          'Wait for processing, which typically takes 1-3 months',
          'Once approved, collect your visa and prepare for your move to Germany'
        ],
        callout: 'Important: Start your visa application process early, as it can take several months to complete. Many documents may need to be translated into German by certified translators.'
      }
    ],
    links: [
      {
        text: 'German Federal Foreign Office - Visa Information',
        url: 'https://www.auswaertiges-amt.de/en/visa-service',
        description: 'Official information on visa requirements and procedures'
      },
      {
        text: 'Make it in Germany - Visa Process',
        url: 'https://www.make-it-in-germany.com/en/visa/kinds-of-visa',
        description: 'Detailed guide to German visa types for skilled workers'
      }
    ],
    relatedResources: ['blue-card', 'relocation', 'recognition']
  },
  {
    id: 'blue-card',
    title: 'EU Blue Card Guide',
    shortDescription: 'Germany\'s work permit for highly skilled professionals',
    Icon: CreditCard,
    iconColor: 'text-blue-600 bg-blue-100',
    content: [
      {
        heading: 'What is the EU Blue Card?',
        paragraphs: [
          'The EU Blue Card is a work and residence permit for highly qualified non-EU citizens who want to work in Germany. It offers a streamlined immigration process for professionals with academic qualifications and a job offer that meets specific salary requirements.',
          'The Blue Card program was introduced to attract skilled workers to the European Union and address labor shortages in specific sectors.'
        ]
      },
      {
        heading: 'Requirements for the EU Blue Card',
        paragraphs: [
          'To be eligible for an EU Blue Card in Germany, you must meet the following criteria:'
        ],
        bullets: [
          'Have a university degree that is recognized in Germany or comparable to a German degree',
          'Have a job offer or employment contract with a German company',
          'Meet the minimum salary requirement (currently €58,400 gross per year, or €45,552 for shortage occupations like IT professionals, engineers, doctors, and scientists)',
          'For regulated professions (such as doctors, teachers, or engineers), you must have permission to practice your profession in Germany'
        ]
      },
      {
        heading: 'Advantages of the EU Blue Card',
        paragraphs: [
          'The EU Blue Card offers several advantages over other types of work permits:'
        ],
        bullets: [
          'Fast-track to permanent residence: Blue Card holders can apply for permanent residence after 33 months, or just 21 months with B1 level German language skills',
          'Family reunification: Your spouse and dependent children can join you in Germany without having to prove German language skills before arrival',
          'Your spouse will have immediate access to the German labor market',
          'Mobility within the EU: After 18 months, you can move to another EU country (subject to that country\'s Blue Card requirements)'
        ]
      }
    ],
    links: [
      {
        text: 'BAMF - EU Blue Card',
        url: 'https://www.bamf.de/EN/Themen/MigrationAufenthalt/ZuwandererDrittstaaten/BlaueKarte/blaue-karte-node.html',
        description: 'Official information from the Federal Office for Migration and Refugees'
      },
      {
        text: 'Blue Card EU - Germany',
        url: 'https://www.bluecard-eu.de/eu-blue-card-germany/',
        description: 'Comprehensive information portal about the EU Blue Card in Germany'
      }
    ],
    relatedResources: ['visa-guide', 'recognition', 'relocation']
  },
  {
    id: 'relocation',
    title: 'Relocation Guide',
    shortDescription: 'Step-by-step guide to relocating to Germany',
    Icon: MapPin,
    iconColor: 'text-red-600 bg-red-100',
    content: [
      {
        heading: 'Preparing for Your Move to Germany',
        paragraphs: [
          'Moving to a new country is a significant life change that requires careful planning. This guide will help you navigate the process of relocating to Germany, from preparation to settling in.',
          'The key to a successful relocation is starting early and being methodical about your preparation.'
        ]
      },
      {
        heading: 'Before You Leave',
        paragraphs: [
          'There are several important tasks to complete before you depart for Germany:'
        ],
        bullets: [
          'Secure your visa or residence permit',
          'Find temporary or permanent accommodation',
          'Arrange for health insurance coverage',
          'Gather important documents (passport, birth certificate, marriage certificate, educational diplomas, etc.)',
          'Have documents translated to German if necessary',
          'Research the cost of living in your destination city',
          'Open a German bank account (if possible before arrival)',
          'Arrange for the shipping of personal belongings',
          'Make travel arrangements',
          'Inform relevant authorities in your home country about your departure'
        ]
      },
      {
        heading: 'First Steps After Arrival',
        paragraphs: [
          'Once you arrive in Germany, there are several administrative tasks you should complete as soon as possible:'
        ],
        bullets: [
          'Register your address (Anmeldung) at the local registration office (Bürgeramt) within 14 days of finding accommodation',
          'Open a German bank account (if you haven\'t already)',
          'Apply for a tax ID (Steueridentifikationsnummer)',
          'Set up utilities for your apartment',
          'Get a German phone number',
          'Register for health insurance',
          'Apply for your residence permit at the local immigration office (Ausländerbehörde) if you entered with a visa'
        ],
        callout: 'Important: Address registration (Anmeldung) is a crucial first step, as you\'ll need your registration certificate for many other administrative processes.'
      }
    ],
    links: [
      {
        text: 'Make it in Germany - First Steps',
        url: 'https://www.make-it-in-germany.com/en/living-in-germany/housing/first-steps',
        description: 'Official guide for newcomers to Germany'
      },
      {
        text: 'How to Germany - Relocation Checklist',
        url: 'https://www.howtogermany.com/pages/relocation-checklist.html',
        description: 'Comprehensive checklist for relocating to Germany'
      }
    ],
    relatedResources: ['housing', 'banking', 'visa-guide']
  },
  {
    id: 'housing',
    title: 'Housing Guide',
    shortDescription: 'Tips for finding accommodation in German cities',
    Icon: Home,
    iconColor: 'text-purple-600 bg-purple-100',
    content: [
      {
        heading: 'Finding Accommodation in Germany',
        paragraphs: [
          'Finding suitable housing is one of the biggest challenges when moving to Germany, especially in major cities where the rental market can be competitive. This guide will help you navigate the German housing market and understand the rental process.',
          'Whether you\'re looking for temporary accommodation while you get settled or a long-term home, it\'s important to start your search early and be prepared.'
        ]
      },
      {
        heading: 'Types of Accommodation',
        paragraphs: [
          'Germany offers various types of housing options, each with its advantages and considerations:'
        ],
        bullets: [
          'Wohnung (Apartment): The most common type of rental, ranging from studio apartments (1-Zimmer) to larger units',
          'Möblierte Wohnung (Furnished Apartment): Apartments that come with basic furniture, often available for shorter-term rentals',
          'WG - Wohngemeinschaft (Shared Apartment): Popular among students and young professionals, where you rent a private room in a shared apartment',
          'Haus (House): Single-family homes, typically available in suburban or rural areas',
          'Temporäre Unterkunft (Temporary Accommodation): Including hotels, hostels, and serviced apartments for short stays'
        ]
      },
      {
        heading: 'Finding a Rental Property',
        paragraphs: [
          'There are several resources to help you find housing in Germany:'
        ],
        bullets: [
          'Online property portals: Immobilienscout24, Immowelt, and WG-Gesucht are popular websites for rental listings',
          'Local newspapers: Many include a real estate section (Immobilienteil)',
          'Real estate agents (Immobilienmakler): Can help find properties but typically charge a commission (Provision)',
          'Social media groups: Facebook and other platforms often have housing groups for specific cities',
          'University housing offices: For students and academics',
          'Employer assistance: Some companies offer relocation support'
        ],
        callout: 'Important: The rental market in major German cities like Munich, Berlin, Hamburg, and Frankfurt is highly competitive. Be prepared to act quickly when you find a suitable property and have all your documents ready.'
      }
    ],
    links: [
      {
        text: 'ImmobilienScout24',
        url: 'https://www.immobilienscout24.de/',
        description: 'Germany\'s largest real estate portal'
      },
      {
        text: 'WG-Gesucht',
        url: 'https://www.wg-gesucht.de/',
        description: 'Platform for shared apartments and temporary rentals'
      }
    ],
    relatedResources: ['relocation', 'banking']
  },
  {
    id: 'language-courses',
    title: 'German Language Courses',
    shortDescription: 'Resources to help you learn German',
    Icon: GraduationCap,
    iconColor: 'text-green-600 bg-green-100',
    content: [
      {
        heading: 'Learning German for Your Career',
        paragraphs: [
          'While many international companies in Germany use English as their working language, learning German will significantly enhance your career prospects and help you integrate into everyday life in Germany.',
          'There are numerous resources available to help you learn German, from traditional classroom settings to online platforms and language exchange opportunities.'
        ]
      },
      {
        heading: 'Language Course Options',
        paragraphs: [
          'Germany offers various types of language learning options to suit different needs and learning styles:'
        ],
        bullets: [
          'Goethe-Institut: The official German cultural institute offers courses worldwide and in Germany',
          'Volkshochschule (VHS): Adult education centers found in most German cities offering affordable language courses',
          'Private language schools: Including Berlitz, Inlingua, and many local options',
          'University language centers: Many universities offer German courses for international students and staff',
          'Integration courses: Subsidized by the German government for immigrants, combining language learning with cultural orientation',
          'Online platforms: Duolingo, Babbel, and Lingoda offer flexible learning options',
          'Language exchange meetups: Opportunities to practice with native speakers in an informal setting'
        ]
      },
      {
        heading: 'German Language Levels',
        paragraphs: [
          'German language proficiency is categorized according to the Common European Framework of Reference for Languages (CEFR):'
        ],
        bullets: [
          'A1 (Beginner): Basic phrases and everyday expressions',
          'A2 (Elementary): Simple, routine situations and basic personal information',
          'B1 (Intermediate): Main points on familiar matters, experiences, and events',
          'B2 (Upper Intermediate): Concrete and abstract topics, technical discussions in your field',
          'C1 (Advanced): Complex texts, implicit meaning, fluent and spontaneous expression',
          'C2 (Proficiency): Near-native fluency, understanding virtually everything heard or read'
        ],
        callout: 'Tip: For most professional positions, a B1 or B2 level is beneficial, while customer-facing roles or positions in public administration often require C1 level German.'
      }
    ],
    links: [
      {
        text: 'Goethe-Institut',
        url: 'https://www.goethe.de/en/index.html',
        description: 'Official German cultural institute offering language courses worldwide'
      },
      {
        text: 'Deutsche Welle - Learn German',
        url: 'https://learngerman.dw.com/',
        description: 'Free online German courses from Germany\'s international broadcaster'
      }
    ],
    relatedResources: ['integration-courses', 'language-tests', 'culture']
  },
  // Additional resources can be added following the same structure
  {
    id: 'banking',
    title: 'Banking & Finance',
    shortDescription: 'Setting up your finances in Germany',
    Icon: CreditCard,
    iconColor: 'text-yellow-600 bg-yellow-100',
    content: [
      {
        heading: 'Setting Up Your Finances in Germany',
        paragraphs: [
          'Establishing your financial presence in Germany is an essential early step when relocating. This guide covers the banking system, account options, and financial considerations for newcomers.',
          'Having a German bank account is necessary for receiving your salary, paying rent, and managing daily expenses in Germany.'
        ]
      },
      {
        heading: 'Types of Banks in Germany',
        paragraphs: [
          'Germany has several types of banking institutions to choose from:'
        ],
        bullets: [
          'Traditional banks (Filialbanken): Like Deutsche Bank, Commerzbank, and Sparkasse, offering extensive branch networks',
          'Online banks (Direktbanken): Such as N26, DKB, and ING, operating primarily online with few or no physical branches',
          'Cooperative banks (Genossenschaftsbanken): Including Volksbank and Raiffeisenbank, owned by their members',
          'Savings banks (Sparkassen): Locally operated public banks found throughout Germany'
        ]
      },
      {
        heading: 'Opening a Bank Account',
        paragraphs: [
          'To open a bank account in Germany, you typically need the following documents:'
        ],
        bullets: [
          'Valid passport or ID card',
          'Residence registration certificate (Meldebescheinigung)',
          'Residence permit or visa (for non-EU citizens)',
          'Proof of income or employment contract (for certain account types)',
          'Tax ID number (Steueridentifikationsnummer) - not always required initially'
        ],
        callout: 'Tip: Some online banks allow you to open an account before arriving in Germany, which can be very helpful for initial expenses. Research options that offer English-language service if your German language skills are limited.'
      }
    ],
    links: [
      {
        text: 'Expatica - Opening a Bank Account in Germany',
        url: 'https://www.expatica.com/de/finance/banking/opening-a-bank-account-in-germany-101934/',
        description: 'Comprehensive guide for expats'
      },
      {
        text: 'Consumer Protection Agency - Banking Comparison',
        url: 'https://www.verbraucherzentrale.de/wissen/geld-versicherungen/sparen-und-anlegen',
        description: 'Independent information about banking options (in German)'
      }
    ],
    relatedResources: ['relocation', 'housing']
  },
  {
    id: 'cv-templates',
    title: 'CV Templates',
    shortDescription: 'German-style CV and application templates',
    Icon: FileText,
    iconColor: 'text-indigo-600 bg-indigo-100',
    content: [
      {
        heading: 'German CV and Application Standards',
        paragraphs: [
          'German CVs (Lebenslauf) and job applications follow specific formats and conventions that may differ from what you\'re used to in your home country. Understanding these differences can significantly improve your chances of landing interviews.',
          'A German application package typically consists of a cover letter (Anschreiben), CV (Lebenslauf), and certificates or references (Zeugnisse).'
        ]
      },
      {
        heading: 'Key Features of a German CV',
        paragraphs: [
          'A German CV typically includes the following elements:'
        ],
        bullets: [
          'Personal information: Name, contact details, date and place of birth (optional), nationality (optional)',
          'Professional photo: A formal headshot is still common in German CVs, though it\'s becoming optional',
          'Education: Listed in reverse chronological order with dates, institutions, and qualifications',
          'Work experience: Detailed descriptions of responsibilities and achievements, again in reverse chronological order',
          'Skills: Language proficiency, technical skills, and other relevant abilities',
          'Additional qualifications: Certifications, workshops, and training programs',
          'Interests: Optional section for relevant hobbies or volunteer work'
        ],
        callout: 'Important: German CVs are typically 1-2 pages long, factual and precise, with a focus on relevant qualifications and experience. Avoid exaggeration and ensure all dates are accurate.'
      },
      {
        heading: 'Cover Letter Guidelines',
        paragraphs: [
          'The cover letter (Anschreiben) is a crucial part of your application and should:'
        ],
        bullets: [
          'Be addressed to the specific person handling recruitment when possible',
          'Reference the exact job title and where you found the listing',
          'Explain why you\'re interested in the position and the company',
          'Highlight how your skills and experience match the job requirements',
          'Be formal in tone and follow a standard business letter format',
          'Be concise – typically no more than one page'
        ]
      }
    ],
    links: [
      {
        text: 'Europass CV Template',
        url: 'https://europa.eu/europass/en/create-europass-cv',
        description: 'Standardized CV format recognized throughout Europe'
      },
      {
        text: 'Xing Profile Creator',
        url: 'https://www.xing.com/',
        description: 'Create a professional profile on the German business network'
      }
    ],
    relatedResources: ['job-interview', 'culture']
  },
  {
    id: 'job-interview',
    title: 'Job Interview Guide',
    shortDescription: 'How to prepare for and succeed in job interviews with German companies',
    Icon: Building,
    iconColor: 'text-blue-700 bg-blue-100',
    content: [
      {
        heading: 'Understanding German Job Interviews',
        paragraphs: [
          'Job interviews in Germany tend to be structured, formal occasions with specific expectations. Understanding the German interview culture can help you make a positive impression and demonstrate that you\'re a good fit for the organization.',
          'The interview process may consist of multiple rounds, including phone or video screenings, in-person interviews, and possibly assessment centers for more senior positions.'
        ]
      },
      {
        heading: 'Before the Interview',
        paragraphs: [
          'Thorough preparation is essential for a successful German job interview:'
        ],
        bullets: [
          'Research the company thoroughly: history, products/services, recent news, competitors, and corporate culture',
          'Understand the position and how your skills match the requirements',
          'Prepare answers to common questions, including specific examples from your experience',
          'Organize a professional outfit – Germans typically dress formally for interviews',
          'Bring multiple copies of your application documents',
          'Plan your journey to ensure punctuality – being late is viewed very negatively',
          'Practice introducing yourself in German, even if the interview will be conducted in English'
        ]
      },
      {
        heading: 'During the Interview',
        paragraphs: [
          'German interview etiquette has some distinct characteristics:'
        ],
        bullets: [
          'Arrive 5-10 minutes early, but not earlier',
          'Greet interviewers with a firm handshake and maintain good eye contact',
          'Wait to be invited to sit down',
          'Address interviewers formally using "Herr" or "Frau" plus their last name',
          'Be factual and precise in your answers – Germans value directness and honesty',
          'Avoid exaggeration or overly emotional responses',
          'Be prepared to discuss your weaknesses as well as your strengths',
          'Mention concrete achievements and back them up with numbers when possible',
          'Have thoughtful questions prepared about the company and position'
        ],
        callout: 'Tip: In Germany, it\'s acceptable and expected to ask about concrete details like working hours, vacation days, and benefits during the interview process, typically toward the end of the discussion.'
      }
    ],
    links: [
      {
        text: 'Make it in Germany - Job Interview Tips',
        url: 'https://www.make-it-in-germany.com/en/working-in-germany/job/application/interview',
        description: 'Official resource for international professionals'
      },
      {
        text: 'XING TalentManager Blog',
        url: 'https://recruiting.xing.com/en/resources/tips-articles',
        description: 'Insights from recruiters on the German job market'
      }
    ],
    relatedResources: ['cv-templates', 'culture']
  }
];

export default resourceData;
