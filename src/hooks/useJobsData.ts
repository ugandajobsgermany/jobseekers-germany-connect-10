
import { useState, useEffect } from 'react';
import { Job } from '@/types/job';
import { applyAllFilters } from '@/utils/jobFilters';
import { sortJobs } from '@/utils/jobSorting';
import { useQuery } from '@tanstack/react-query';

// Function to fetch jobs
const fetchJobs = async (): Promise<Job[]> => {
  // In a real implementation, this would be an API call
  const { mockJobs } = await import('@/data/jobs');
  return mockJobs;
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

export const useJobsData = () => {
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
  
  // Use React Query to fetch jobs
  const { data: allJobs = [] } = useQuery({
    queryKey: ['jobs'],
    queryFn: fetchJobs,
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
    resetFilters
  };
};
