
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Job } from '@/types/job';
import { applyAllFilters } from '@/utils/jobFilters';
import { sortJobs } from '@/utils/jobSorting';

// Function to fetch jobs from Supabase
const fetchJobsFromSupabase = async (): Promise<Job[]> => {
  const { data, error } = await supabase
    .from('jobs')
    .select(`
      *,
      companies (
        name,
        logo_url,
        location
      )
    `)
    .eq('status', 'active')
    .order('posted_at', { ascending: false });

  if (error) throw error;

  // Transform the data to match our Job interface
  return (data || []).map(job => ({
    id: job.id,
    title: job.title,
    company: job.companies?.name || job.company,
    companyLogo: job.companies?.logo_url || job.company_logo,
    location: job.companies?.location || job.location,
    salary: job.salary,
    jobType: job.job_type,
    category: job.category,
    postedAt: formatPostedDate(job.posted_at),
    description: job.description,
    requirements: job.requirements || [],
    benefits: job.benefits || [],
    isFeatured: job.is_featured
  }));
};

// Helper function to format posted date
const formatPostedDate = (dateString: string): string => {
  const postedDate = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - postedDate.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffWeeks = Math.floor(diffDays / 7);
  const diffMonths = Math.floor(diffDays / 30);

  if (diffHours < 24) {
    return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
  } else if (diffDays < 7) {
    return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
  } else if (diffWeeks < 4) {
    return `${diffWeeks} week${diffWeeks !== 1 ? 's' : ''} ago`;
  } else {
    return `${diffMonths} month${diffMonths !== 1 ? 's' : ''} ago`;
  }
};

// Search criteria type
export interface SearchCriteria {
  keywords: string;
  location: string;
  category: string;
}

// Filter criteria type
export interface FilterCriteria {
  jobTypes: string[];
  experienceLevels: string[];
  salary: number[];
  postDate: string;
  locations: string[];
  categories: string[];
}

export const useJobsDataReal = () => {
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [searchCriteria, setSearchCriteria] = useState<SearchCriteria>({
    keywords: '',
    location: 'any',
    category: 'all'
  });
  const [filterCriteria, setFilterCriteria] = useState<FilterCriteria>({
    jobTypes: [],
    experienceLevels: [],
    salary: [0, 120000],
    postDate: 'any_time',
    locations: [],
    categories: []
  });
  const [sortOption, setSortOption] = useState('relevant');
  const [currentPage, setCurrentPage] = useState(1);
  
  // Use React Query to fetch jobs from Supabase
  const { data: allJobs = [], isLoading, error } = useQuery({
    queryKey: ['jobs-real'],
    queryFn: fetchJobsFromSupabase,
  });
  
  // Extract unique values for filters
  const uniqueCategories = [...new Set(allJobs.map(job => job.category))];
  const uniqueJobTypes = [...new Set(allJobs.map(job => job.jobType))];
  const uniqueLocations = [...new Set(allJobs.map(job => job.location))];
  
  // Handle search from SearchBar
  const handleSearch = (criteria: SearchCriteria) => {
    setSearchCriteria(criteria);
    
    // Update filter criteria based on search
    setFilterCriteria(prev => ({
      ...prev,
      // If specific location is selected in search, update locations filter
      locations: criteria.location !== 'any' 
        ? [criteria.location] 
        : prev.locations,
      // If specific category is selected in search, update categories filter
      categories: criteria.category !== 'all' 
        ? [criteria.category] 
        : prev.categories
    }));
    
    setCurrentPage(1); // Reset to first page on new search
  };
  
  // Handle filters from JobFilter
  const handleFilterChange = (filters: FilterCriteria) => {
    setFilterCriteria(filters);
    setCurrentPage(1); // Reset to first page on new filter
  };
  
  // Handle sorting
  const handleSortChange = (option: string) => {
    setSortOption(option);
  };
  
  // Reset all filters
  const resetFilters = () => {
    setSearchCriteria({
      keywords: '', 
      location: 'any', 
      category: 'all'
    });
    setFilterCriteria({
      jobTypes: [],
      experienceLevels: [],
      salary: [0, 120000],
      postDate: 'any_time',
      locations: [],
      categories: []
    });
  };
  
  // Apply filters and sort when criteria changes
  useEffect(() => {
    // First apply all filters
    let result = applyAllFilters(allJobs, searchCriteria, filterCriteria);
    
    // Then sort the filtered results
    result = sortJobs(result, sortOption);
    
    setFilteredJobs(result);
  }, [searchCriteria, filterCriteria, sortOption, allJobs]);
  
  return {
    allJobs,
    filteredJobs,
    searchCriteria,
    filterCriteria,
    sortOption,
    currentPage,
    uniqueCategories,
    uniqueJobTypes,
    uniqueLocations,
    handleSearch,
    handleFilterChange,
    handleSortChange,
    setCurrentPage,
    resetFilters,
    isLoading,
    error
  };
};
