
import { Job } from '@/types/job';

export const salesJobs: Job[] = [
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
    id: "sales2",
    title: "Key Account Manager",
    company: "Adidas",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
    location: "Herzogenaurach",
    salary: "€60,000 - €75,000",
    jobType: "Full-time",
    category: "Sales",
    postedAt: "1 week ago",
    description: "Adidas is looking for an experienced Key Account Manager to maintain and expand relationships with our major retail partners. You will develop strategic account plans, negotiate contracts, and drive sales growth.",
    requirements: [
      "Bachelor's degree in Business, Marketing or related field",
      "5+ years in key account management, preferably in retail or fashion",
      "Strong negotiation and presentation skills",
      "Strategic thinking and analytical capabilities",
      "Experience with CRM systems",
      "Fluent in German and English"
    ],
    benefits: [
      "Competitive salary package",
      "Performance-based bonus",
      "Employee discount on Adidas products",
      "Sports facilities on campus",
      "Flexible working arrangements",
      "International career opportunities"
    ]
  },
  {
    id: "sales3",
    title: "B2B Sales Manager",
    company: "SAP",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
    location: "Berlin",
    salary: "€70,000 - €90,000 + Bonus",
    jobType: "Full-time",
    category: "Sales",
    postedAt: "5 days ago",
    description: "SAP is seeking a B2B Sales Manager to develop and execute sales strategies for our enterprise software solutions. You will identify new business opportunities, manage the sales pipeline, and close deals with enterprise clients.",
    requirements: [
      "Bachelor's degree in Computer Science, Business or related field",
      "3+ years of B2B sales experience in software or IT services",
      "Understanding of enterprise software solutions",
      "Proven track record of achieving sales targets",
      "Strong networking and relationship-building skills",
      "Fluent in German and English"
    ],
    benefits: [
      "Attractive base salary plus commission structure",
      "Annual performance bonus",
      "Comprehensive benefits package",
      "Professional development and learning opportunities",
      "Flexible working arrangements",
      "Dynamic and innovative work environment"
    ]
  }
];
