
export interface Job {
  id: string;
  title: string;
  company: string;
  companyLogo?: string;
  location: string;
  salary: string;
  jobType: string;
  category: string;
  postedAt: string;
  description: string;
  requirements: string[];
  benefits: string[];
  isSaved?: boolean;
  isApplied?: boolean;
  isFeatured?: boolean;
  experienceLevel?: string;
  isRemote?: boolean;
  views?: number;
  status?: string;
}
