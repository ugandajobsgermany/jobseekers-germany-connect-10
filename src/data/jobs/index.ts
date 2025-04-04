
import { Job } from '@/types/job';

// Creating a simplified mock jobs array - all centralized in one place
// In a real application, this would be replaced with API calls
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
    description: "We are looking for an experienced Software Engineer to join our team in Berlin.",
    requirements: [
      "5+ years of experience in software development",
      "Proficiency in Java, Spring Boot, and microservices architecture",
      "Experience with cloud platforms (AWS, Azure, or GCP)"
    ],
    benefits: [
      "Competitive salary and bonus program",
      "Flexible working hours and remote work options",
      "Professional development opportunities"
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
    description: "Adidas is seeking a creative and strategic Marketing Manager to lead marketing campaigns for our sports apparel line.",
    requirements: [
      "Bachelor's degree in Marketing or related field",
      "3+ years of experience in marketing, preferably in retail or fashion",
      "Strong project management and leadership skills"
    ],
    benefits: [
      "Employee discount on Adidas products",
      "Sports facilities and fitness programs",
      "International work environment"
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
    description: "Deutsche Bank is looking for a detail-oriented Financial Analyst to join our team in Frankfurt.",
    requirements: [
      "Bachelor's degree in Finance, Accounting, or related field",
      "2+ years of experience in financial analysis",
      "Proficiency in Excel and financial modeling"
    ],
    benefits: [
      "Competitive compensation package",
      "Extensive training and development programs",
      "Banking benefits and products"
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
    description: "Bosch is seeking a skilled Mechanical Engineer to join our product development team.",
    requirements: [
      "Master's degree in Mechanical Engineering",
      "3+ years of experience in mechanical design",
      "Proficiency in CAD software (preferably SolidWorks)"
    ],
    benefits: [
      "Innovative work environment",
      "Continuous learning opportunities",
      "Flexible working models"
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
    description: "Siemens is looking for an HR Specialist to support our talent acquisition and employee development initiatives.",
    requirements: [
      "Bachelor's degree in Human Resources or related field",
      "2+ years of experience in HR, preferably in recruitment",
      "Knowledge of German labor laws and regulations"
    ],
    benefits: [
      "Professional development programs",
      "Flexible working arrangements",
      "Employee assistance program"
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
    description: "Zalando is seeking a talented Data Scientist to join our analytics team.",
    requirements: [
      "Master's or PhD in Data Science, Statistics, Computer Science, or related field",
      "3+ years of experience in data science or analytics",
      "Proficiency in Python, R, and SQL"
    ],
    benefits: [
      "Competitive salary and bonus structure",
      "Flexible working hours",
      "Remote work options"
    ]
  },
  {
    id: "7",
    title: "Hotel Manager",
    company: "Marriott International",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Marriott_logo.svg",
    location: "Berlin",
    salary: "€65,000 - €85,000",
    jobType: "Full-time",
    category: "Hospitality",
    postedAt: "3 days ago",
    description: "Marriott International is seeking an experienced Hotel Manager to oversee the daily operations of our 5-star property in Berlin.",
    requirements: [
      "Bachelor's degree in Hotel Management or related field",
      "5+ years of experience in hotel management roles",
      "Strong leadership and staff development skills"
    ],
    benefits: [
      "Competitive salary and performance bonuses",
      "Accommodation discounts at Marriott properties worldwide",
      "Health insurance and retirement plans"
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
    description: "N26 is seeking a talented Frontend Developer to join our engineering team.",
    requirements: [
      "3+ years of experience in frontend development",
      "Proficiency in JavaScript, React, and modern frontend technologies",
      "Experience with responsive design and CSS frameworks"
    ],
    benefits: [
      "Competitive salary and benefits",
      "Flexible working hours",
      "Home office options"
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
    description: "HelloFresh is looking for an Operations Manager to oversee our logistics and delivery processes.",
    requirements: [
      "Bachelor's degree in Supply Chain, Business, or related field",
      "3+ years of experience in operations or logistics",
      "Strong leadership and team management skills"
    ],
    benefits: [
      "Competitive salary",
      "Free HelloFresh boxes",
      "Company events and team activities"
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
    description: "BMW Group is seeking an enthusiastic Sales Representative to join our team in Munich.",
    requirements: [
      "Bachelor's degree in Business, Marketing, or related field",
      "1+ years of experience in sales, preferably in automotive",
      "Strong communication and negotiation skills"
    ],
    benefits: [
      "Competitive base salary plus commission",
      "Employee car program",
      "Comprehensive training and development"
    ]
  },
  {
    id: "11",
    title: "University Professor",
    company: "Technical University of Munich",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Logo_of_the_Technical_University_of_Munich.svg",
    location: "Munich",
    salary: "€65,000 - €85,000",
    jobType: "Full-time",
    category: "Education",
    postedAt: "2 weeks ago",
    description: "The Technical University of Munich is seeking a Professor in Computer Science to join our faculty.",
    requirements: [
      "PhD in Computer Science or related field",
      "Significant research contributions and publications",
      "Teaching experience at university level"
    ],
    benefits: [
      "Competitive salary according to German public service pay scale",
      "Research funding opportunities",
      "Sabbatical options"
    ]
  },
  {
    id: "12",
    title: "Warehouse Worker",
    company: "Amazon Deutschland",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    location: "Berlin",
    salary: "€12 - €14 per hour",
    jobType: "Full-time",
    category: "General Labor",
    postedAt: "2 days ago",
    description: "Amazon Deutschland is looking for motivated Warehouse Workers to join our logistics team in Berlin.",
    requirements: [
      "Physical stamina to stand for long periods and lift up to 20kg",
      "Basic German language skills (A2 level)",
      "Ability to work in shifts (including nights and weekends)"
    ],
    benefits: [
      "Competitive hourly wage with night and weekend shift premiums",
      "Health insurance coverage",
      "Employee discount on Amazon purchases"
    ]
  }
];
