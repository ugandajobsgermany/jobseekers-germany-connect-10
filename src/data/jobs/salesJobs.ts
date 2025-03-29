
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
  }
];
