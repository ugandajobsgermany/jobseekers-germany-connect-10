
import { Job } from '@/types/job';

// Apply keyword search filter
export const applyKeywordFilter = (jobs: Job[], keywords: string): Job[] => {
  if (!keywords) return jobs;
  
  const searchTerm = keywords.toLowerCase();
  return jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm) || 
    job.company.toLowerCase().includes(searchTerm) || 
    job.description.toLowerCase().includes(searchTerm)
  );
};

// Apply category filter
export const applyCategoryFilter = (jobs: Job[], categories: string[]): Job[] => {
  if (!categories || categories.length === 0) return jobs;
  
  return jobs.filter(job => categories.includes(job.category));
};

// Apply location filter
export const applyLocationFilter = (jobs: Job[], locations: string[]): Job[] => {
  if (!locations || locations.length === 0) return jobs;
  
  return jobs.filter(job => 
    locations.some(location => job.location.toLowerCase() === location.toLowerCase())
  );
};

// Apply job type filter
export const applyJobTypeFilter = (jobs: Job[], jobTypes: string[]): Job[] => {
  if (!jobTypes || jobTypes.length === 0) return jobs;
  
  return jobs.filter(job => jobTypes.includes(job.jobType));
};

// Apply experience level filter (simplified as mock data might not include experience level)
export const applyExperienceLevelFilter = (jobs: Job[], experienceLevels: string[]): Job[] => {
  if (!experienceLevels || experienceLevels.length === 0) return jobs;
  
  // This is a simplified implementation as the mock job data might not include experience level
  return jobs;
};

// Apply salary range filter
export const applySalaryFilter = (jobs: Job[], salaryRange: number[]): Job[] => {
  if (!salaryRange || salaryRange.length !== 2) return jobs;
  
  const [minSalary, maxSalary] = salaryRange;
  if (minSalary === 0 && maxSalary === 120000) return jobs; // Default range, no filtering
  
  return jobs.filter(job => {
    // Extract numeric salary from string like "€50,000 - €70,000"
    const salaryText = job.salary;
    const salaryNumbers = salaryText.match(/\d+,\d+/g);
    if (salaryNumbers && salaryNumbers.length >= 1) {
      const avgSalary = parseInt(salaryNumbers[0].replace(',', ''));
      return avgSalary >= minSalary && avgSalary <= maxSalary;
    }
    return true; // Keep jobs with unparseable salary
  });
};

// Apply post date filter
export const applyPostDateFilter = (jobs: Job[], postDate: string): Job[] => {
  if (!postDate || postDate === 'any_time') return jobs;
  
  return jobs.filter(job => {
    // This is a simplified implementation as the mock data uses strings like "5 days ago"
    const postedText = job.postedAt;
    
    if (postDate === 'today' && postedText.includes('hour')) {
      return true;
    } else if (postDate === 'week' && 
              (postedText.includes('day') || postedText.includes('hour'))) {
      const days = parseInt(postedText.match(/\d+/)?.[0] || '0');
      return days <= 7;
    } else if (postDate === 'month') {
      const days = parseInt(postedText.match(/\d+/)?.[0] || '0');
      return days <= 30 || postedText.includes('hour');
    }
    return true;
  });
};

// Combine all filters
export const applyAllFilters = (
  jobs: Job[], 
  searchCriteria: {
    keywords: string;
    location: string;
    category: string;
  },
  filterCriteria: {
    jobTypes: string[];
    experienceLevels: string[];
    salary: number[];
    postDate: string;
    locations: string[];
    categories: string[];
  }
) => {
  let filteredJobs = [...jobs];
  
  // Apply search criteria
  filteredJobs = applyKeywordFilter(filteredJobs, searchCriteria.keywords);
  
  // Apply category filter from either search or sidebar
  if (filterCriteria.categories && filterCriteria.categories.length > 0) {
    filteredJobs = applyCategoryFilter(filteredJobs, filterCriteria.categories);
  } else if (searchCriteria.category !== 'all') {
    filteredJobs = applyCategoryFilter(filteredJobs, [searchCriteria.category]);
  }
  
  // Apply location filter from either search or sidebar
  if (filterCriteria.locations && filterCriteria.locations.length > 0) {
    filteredJobs = applyLocationFilter(filteredJobs, filterCriteria.locations);
  } else if (searchCriteria.location !== 'any') {
    filteredJobs = applyLocationFilter(filteredJobs, [searchCriteria.location]);
  }
  
  // Apply remaining filters
  filteredJobs = applyJobTypeFilter(filteredJobs, filterCriteria.jobTypes);
  filteredJobs = applyExperienceLevelFilter(filteredJobs, filterCriteria.experienceLevels);
  filteredJobs = applySalaryFilter(filteredJobs, filterCriteria.salary);
  filteredJobs = applyPostDateFilter(filteredJobs, filterCriteria.postDate);
  
  return filteredJobs;
};

// Calculate active filter count
export const getActiveFilterCount = (filterCriteria: {
  jobTypes: string[];
  experienceLevels: string[];
  salary: number[];
  postDate: string;
  locations: string[];
  categories: string[];
}) => {
  let count = 0;
  if (filterCriteria.jobTypes.length > 0) count++;
  if (filterCriteria.experienceLevels.length > 0) count++;
  if (filterCriteria.locations.length > 0) count++;
  if (filterCriteria.categories.length > 0) count++;
  if (filterCriteria.postDate !== 'any_time') count++;
  if (filterCriteria.salary[0] > 0 || filterCriteria.salary[1] < 120000) count++;
  return count;
};
