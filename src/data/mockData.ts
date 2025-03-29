import { Job } from '@/types/job';

export const mockJobs: Job[] = [
  {
    id: "1",
    title: "Senior Software Engineer",
    company: "SAP",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
    location: "Berlin",
    salary: "€70,000 - €90,000",
    jobType: "Full-time",
    category: "IT & Technology",
    postedAt: "2 days ago",
    description: "We are looking for an experienced Software Engineer to join our team in Berlin. You will be responsible for developing high-quality software solutions, collaborating with cross-functional teams, and participating in code reviews.",
    requirements: [
      "5+ years of experience in software development",
      "Proficiency in Java, Spring Boot, and microservices architecture",
      "Experience with cloud platforms (AWS, Azure, or GCP)",
      "Strong problem-solving skills and attention to detail",
      "Excellent communication and teamwork abilities",
      "B2 level German language skills preferred"
    ],
    benefits: [
      "Competitive salary and bonus program",
      "Flexible working hours and remote work options",
      "Professional development opportunities",
      "Comprehensive health insurance",
      "Relocation assistance for international candidates",
      "Company pension plan"
    ]
  },
  {
    id: "2",
    title: "Marketing Manager",
    company: "Adidas",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.svg",
    location: "Munich",
    salary: "€60,000 - €75,000",
    jobType: "Full-time",
    category: "Marketing",
    postedAt: "1 week ago",
    description: "Adidas is seeking a creative and strategic Marketing Manager to lead marketing campaigns for our sports apparel line. You will develop marketing strategies, coordinate with agencies, and analyze campaign performance.",
    requirements: [
      "Bachelor's degree in Marketing or related field",
      "3+ years of experience in marketing, preferably in retail or fashion",
      "Strong project management and leadership skills",
      "Experience with digital marketing channels and analytics",
      "Creative thinking and excellent communication skills",
      "Fluent English required, German language skills are an advantage"
    ],
    benefits: [
      "Employee discount on Adidas products",
      "Sports facilities and fitness programs",
      "International work environment",
      "Career advancement opportunities",
      "Relocation package available",
      "Work-life balance initiatives"
    ]
  },
  {
    id: "3",
    title: "Financial Analyst",
    company: "Deutsche Bank",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Deutsche_Bank_logo_without_wordmark.svg",
    location: "Frankfurt",
    salary: "€55,000 - €70,000",
    jobType: "Full-time",
    category: "Finance",
    postedAt: "3 days ago",
    description: "Deutsche Bank is looking for a detail-oriented Financial Analyst to join our team in Frankfurt. You will be responsible for financial reporting, budgeting, forecasting, and providing insights to support business decisions.",
    requirements: [
      "Bachelor's degree in Finance, Accounting, or related field",
      "2+ years of experience in financial analysis",
      "Proficiency in Excel and financial modeling",
      "Knowledge of financial reporting standards",
      "Analytical mindset and problem-solving skills",
      "German language skills (B1 level minimum)"
    ],
    benefits: [
      "Competitive compensation package",
      "Extensive training and development programs",
      "Banking benefits and products",
      "Health and wellness programs",
      "International career opportunities",
      "Subsidized lunch"
    ]
  },
  {
    id: "4",
    title: "Mechanical Engineer",
    company: "Bosch",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Bosch-logo.svg",
    location: "Stuttgart",
    salary: "€65,000 - €80,000",
    jobType: "Full-time",
    category: "Engineering",
    postedAt: "5 days ago",
    description: "Bosch is seeking a skilled Mechanical Engineer to join our product development team. You will design mechanical components, create prototypes, and collaborate with multidisciplinary teams to develop innovative products.",
    requirements: [
      "Master's degree in Mechanical Engineering",
      "3+ years of experience in mechanical design",
      "Proficiency in CAD software (preferably SolidWorks)",
      "Knowledge of manufacturing processes and materials",
      "Experience with product development lifecycle",
      "Good communication skills in English, German language skills are a plus"
    ],
    benefits: [
      "Innovative work environment",
      "Continuous learning opportunities",
      "Flexible working models",
      "Company pension plan",
      "Health and sports programs",
      "International project opportunities"
    ]
  },
  {
    id: "5",
    title: "HR Specialist",
    company: "Siemens",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg",
    location: "Munich",
    salary: "€50,000 - €60,000",
    jobType: "Full-time",
    category: "Human Resources",
    postedAt: "1 week ago",
    description: "Siemens is looking for an HR Specialist to support our talent acquisition and employee development initiatives. You will manage recruitment processes, conduct interviews, and implement HR policies.",
    requirements: [
      "Bachelor's degree in Human Resources or related field",
      "2+ years of experience in HR, preferably in recruitment",
      "Knowledge of German labor laws and regulations",
      "Strong interpersonal and communication skills",
      "Experience with HRIS systems",
      "Fluent in German and English"
    ],
    benefits: [
      "Professional development programs",
      "Flexible working arrangements",
      "Employee assistance program",
      "Subsidized cafeteria",
      "Public transport subsidy",
      "Corporate events and team activities"
    ]
  },
  {
    id: "6",
    title: "Data Scientist",
    company: "Zalando",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Zalando_logo.svg",
    location: "Berlin",
    salary: "€75,000 - €95,000",
    jobType: "Full-time",
    category: "IT & Technology",
    postedAt: "4 days ago",
    description: "Zalando is seeking a talented Data Scientist to join our analytics team. You will analyze large datasets, develop machine learning models, and provide insights to drive business decisions in our e-commerce platform.",
    requirements: [
      "Master's or PhD in Data Science, Statistics, Computer Science, or related field",
      "3+ years of experience in data science or analytics",
      "Proficiency in Python, R, and SQL",
      "Experience with machine learning frameworks and big data technologies",
      "Strong analytical and problem-solving skills",
      "Fluent in English, German is a plus"
    ],
    benefits: [
      "Competitive salary and bonus structure",
      "Flexible working hours",
      "Remote work options",
      "Professional development budget",
      "Regular team events and activities",
      "Zalando discount"
    ]
  },
  {
    id: "7",
    title: "Product Manager",
    company: "Delivery Hero",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/5/59/Delivery_Hero_logo.svg",
    location: "Berlin",
    salary: "€65,000 - €85,000",
    jobType: "Full-time",
    category: "Product Management",
    postedAt: "3 days ago",
    description: "Delivery Hero is looking for a Product Manager to join our team in Berlin. You will be responsible for defining product strategy, prioritizing features, and working closely with development teams to deliver exceptional user experiences.",
    requirements: [
      "Bachelor's degree in Business, Computer Science, or related field",
      "3+ years of experience in product management",
      "Strong understanding of user-centered design principles",
      "Experience with agile development methodologies",
      "Excellent communication and stakeholder management skills",
      "Fluent English required, German is a plus"
    ],
    benefits: [
      "Competitive compensation package",
      "Stock options",
      "Flexible working hours",
      "Regular team events and activities",
      "Modern office in central Berlin",
      "Professional development opportunities"
    ]
  },
  {
    id: "8",
    title: "Frontend Developer",
    company: "N26",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/N26_logo.svg",
    location: "Berlin",
    salary: "€60,000 - €80,000",
    jobType: "Full-time",
    category: "IT & Technology",
    postedAt: "6 days ago",
    description: "N26 is seeking a talented Frontend Developer to join our engineering team. You will be responsible for implementing responsive user interfaces, working with designers, and ensuring high performance and quality code.",
    requirements: [
      "3+ years of experience in frontend development",
      "Proficiency in JavaScript, React, and modern frontend technologies",
      "Experience with responsive design and CSS frameworks",
      "Knowledge of testing frameworks and best practices",
      "Good problem-solving skills and attention to detail",
      "Fluent English required"
    ],
    benefits: [
      "Competitive salary and benefits",
      "Flexible working hours",
      "Home office options",
      "Regular team events",
      "Professional development budget",
      "Modern office in central Berlin"
    ]
  },
  {
    id: "9",
    title: "Operations Manager",
    company: "HelloFresh",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/0/05/HelloFresh_logo.svg",
    location: "Berlin",
    salary: "€55,000 - €70,000",
    jobType: "Full-time",
    category: "Operations",
    postedAt: "1 week ago",
    description: "HelloFresh is looking for an Operations Manager to oversee our logistics and delivery processes. You will be responsible for optimizing operations, managing teams, and ensuring efficient and timely delivery of our meal kits.",
    requirements: [
      "Bachelor's degree in Supply Chain, Business, or related field",
      "3+ years of experience in operations or logistics",
      "Strong leadership and team management skills",
      "Experience with process optimization and KPI tracking",
      "Problem-solving mindset and ability to work under pressure",
      "Fluent English required, German is a plus"
    ],
    benefits: [
      "Competitive salary",
      "Free HelloFresh boxes",
      "Company events and team activities",
      "Professional development opportunities",
      "Modern office space",
      "Flexible working hours"
    ]
  },
  {
    id: "10",
    title: "Sales Representative",
    company: "BMW Group",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/f/f4/BMW_logo_%28gray%29.svg",
    location: "Munich",
    salary: "€45,000 - €60,000 + Commission",
    jobType: "Full-time",
    category: "Sales",
    postedAt: "2 days ago",
    description: "BMW Group is seeking an enthusiastic Sales Representative to join our team in Munich. You will be responsible for presenting and selling BMW vehicles, providing excellent customer service, and meeting sales targets.",
    requirements: [
      "Bachelor's degree in Business, Marketing, or related field",
      "1+ years of experience in sales, preferably in automotive",
      "Strong communication and negotiation skills",
      "Customer-oriented mindset",
      "Valid driver's license",
      "Fluent German and good English skills required"
    ],
    benefits: [
      "Competitive base salary plus commission",
      "Employee car program",
      "Comprehensive training and development",
      "Career advancement opportunities",
      "Employee discount on BMW products",
      "Company pension plan"
    ]
  },
  {
    id: "11",
    title: "Hotel Manager",
    company: "Marriott International",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Marriott_logo.svg",
    location: "Berlin",
    salary: "€65,000 - €85,000",
    jobType: "Full-time",
    category: "Hospitality",
    postedAt: "3 days ago",
    description: "Marriott International is seeking an experienced Hotel Manager to oversee the daily operations of our 5-star property in Berlin. You will be responsible for maintaining high standards of guest service, managing staff, and ensuring the hotel meets its financial goals.",
    requirements: [
      "Bachelor's degree in Hotel Management or related field",
      "5+ years of experience in hotel management roles",
      "Strong leadership and staff development skills",
      "Financial acumen and budget management experience",
      "Excellent communication and guest relations abilities",
      "Fluent in German and English"
    ],
    benefits: [
      "Competitive salary and performance bonuses",
      "Accommodation discounts at Marriott properties worldwide",
      "Health insurance and retirement plans",
      "Professional development opportunities",
      "Meals during shifts",
      "Relocation assistance if needed"
    ]
  },
  {
    id: "12",
    title: "Front Desk Receptionist",
    company: "Hilton Hotels",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Hilton_logo.svg",
    location: "Munich",
    salary: "€32,000 - €38,000",
    jobType: "Full-time",
    category: "Hospitality",
    postedAt: "1 week ago",
    description: "Hilton Hotels is looking for a friendly and professional Front Desk Receptionist to join our team in Munich. You will be the first point of contact for our guests, handling check-ins/check-outs, responding to inquiries, and ensuring exceptional guest satisfaction.",
    requirements: [
      "Previous experience in hotel reception or customer service",
      "Excellent verbal and written communication skills",
      "Proficiency in hotel management software",
      "Ability to work flexible hours including evenings, weekends, and holidays",
      "Problem-solving skills and attention to detail",
      "Fluent in German and English, additional languages are a plus"
    ],
    benefits: [
      "Competitive salary and benefits",
      "Discounted stays at Hilton properties",
      "Career advancement opportunities",
      "Training and development programs",
      "Employee recognition programs",
      "Team outings and events"
    ]
  },
  {
    id: "13",
    title: "Executive Chef",
    company: "Kempinski Hotels",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Logo_Hotel_Kempinski.svg",
    location: "Hamburg",
    salary: "€70,000 - €90,000",
    jobType: "Full-time",
    category: "Hospitality",
    postedAt: "2 days ago",
    description: "Kempinski Hotels is seeking a talented Executive Chef to lead our culinary team in our 5-star property in Hamburg. You will oversee all food preparation, menu planning, and kitchen operations while maintaining high standards of quality and presentation.",
    requirements: [
      "Culinary degree or equivalent professional training",
      "10+ years of experience in luxury hotel restaurants, with at least 3 years in a leadership role",
      "Strong knowledge of international cuisines and current food trends",
      "Experience in menu development and food cost control",
      "Team leadership and staff development skills",
      "Fluent in English, German language skills are preferred"
    ],
    benefits: [
      "Competitive salary and performance-based bonuses",
      "Health insurance and pension plan",
      "Accommodations at Kempinski properties worldwide at employee rates",
      "Professional development opportunities",
      "Meals during shifts",
      "Relocation assistance"
    ]
  },
  {
    id: "14",
    title: "Housekeeping Supervisor",
    company: "Radisson Hotel Group",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Radisson_Hotels_logo.svg",
    location: "Frankfurt",
    salary: "€38,000 - €45,000",
    jobType: "Full-time",
    category: "Hospitality",
    postedAt: "5 days ago",
    description: "Radisson Hotel Group is looking for a detail-oriented Housekeeping Supervisor to ensure the cleanliness and presentation of our hotel rooms and public areas. You will manage a team of housekeepers, schedule shifts, and maintain the high standards of cleanliness our guests expect.",
    requirements: [
      "2+ years of experience in hotel housekeeping, with supervisory experience preferred",
      "Strong attention to detail and organizational skills",
      "Knowledge of cleaning procedures and safety regulations",
      "Team management and training abilities",
      "Problem-solving skills and ability to work under pressure",
      "Good communication skills in German and English"
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Discounted stays at Radisson properties",
      "Career advancement opportunities",
      "Staff meals",
      "Uniform provided"
    ]
  },
  {
    id: "15",
    title: "Food and Beverage Manager",
    company: "Steigenberger Hotels",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/4/47/Steigenberger_logo.svg",
    location: "Dresden",
    salary: "€55,000 - €65,000",
    jobType: "Full-time",
    category: "Hospitality",
    postedAt: "1 week ago",
    description: "Steigenberger Hotels is seeking an experienced Food and Beverage Manager to oversee all food service operations in our luxury hotel in Dresden. You will be responsible for restaurant management, banquet operations, and ensuring high-quality dining experiences for our guests.",
    requirements: [
      "Bachelor's degree in Hospitality Management or related field",
      "5+ years of experience in food and beverage management, preferably in luxury hotels",
      "Strong knowledge of food and wine pairings",
      "Budget management and cost control experience",
      "Team leadership and staff development skills",
      "Fluent German and English required"
    ],
    benefits: [
      "Competitive salary and performance bonuses",
      "Health and dental insurance",
      "Discounted accommodation at Steigenberger Hotels",
      "Professional development opportunities",
      "Staff meals",
      "Relocation package for qualified candidates"
    ]
  }
];
