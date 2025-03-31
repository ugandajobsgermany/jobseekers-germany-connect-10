
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JobFilter from '@/components/JobFilter';
import JobCard from '@/components/JobCard';
import SearchBar from '@/components/SearchBar';
import { mockJobs } from '@/data/jobs';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ListFilter, X } from 'lucide-react';
import SEO from '@/components/SEO';
import JobListSchema from '@/components/SEO/JobListSchema';
import { Job } from '@/types/job';

const JobsPage = () => {
  const [allJobs, setAllJobs] = useState(mockJobs);
  const [filteredJobs, setFilteredJobs] = useState(mockJobs);
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState('relevant');
  const [searchCriteria, setSearchCriteria] = useState({
    keywords: '',
    location: 'any',
    category: 'all'
  });
  const [filterCriteria, setFilterCriteria] = useState({
    jobTypes: [] as string[],
    experienceLevels: [] as string[],
    salary: [0, 120000],
    postDate: 'any_time',
    locations: [] as string[]
  });
  
  const jobsPerPage = 10;
  
  // Handle search from SearchBar
  const handleSearch = (criteria: any) => {
    setSearchCriteria(criteria);
    setCurrentPage(1); // Reset to first page on new search
  };
  
  // Handle filters from JobFilter
  const handleFilterChange = (filters: any) => {
    setFilterCriteria(filters);
    setCurrentPage(1); // Reset to first page on new filter
  };
  
  // Handle sorting
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };
  
  // Apply all filtering logic
  useEffect(() => {
    let result = [...allJobs];
    
    // Apply keyword search
    if (searchCriteria.keywords) {
      const keywords = searchCriteria.keywords.toLowerCase();
      result = result.filter(job => 
        job.title.toLowerCase().includes(keywords) || 
        job.company.toLowerCase().includes(keywords) || 
        job.description.toLowerCase().includes(keywords)
      );
    }
    
    // Apply location filter from search bar
    if (searchCriteria.location !== 'any') {
      result = result.filter(job => 
        job.location.toLowerCase() === searchCriteria.location.toLowerCase()
      );
    }
    
    // Apply category filter from search bar
    if (searchCriteria.category !== 'all') {
      result = result.filter(job => 
        job.category.toLowerCase() === searchCriteria.category.toLowerCase()
      );
    }
    
    // Apply job type filter
    if (filterCriteria.jobTypes.length > 0) {
      result = result.filter(job => 
        filterCriteria.jobTypes.includes(job.jobType)
      );
    }
    
    // Apply experience level filter
    if (filterCriteria.experienceLevels.length > 0) {
      // This is a simplified implementation as the mock job data doesn't include experience level
      // In a real application, you would filter by job.experienceLevel
    }
    
    // Apply salary range filter
    const [minSalary, maxSalary] = filterCriteria.salary;
    result = result.filter(job => {
      // Extract numeric salary from string like "€50,000 - €70,000"
      const salaryText = job.salary;
      const salaryNumbers = salaryText.match(/\d+,\d+/g);
      if (salaryNumbers && salaryNumbers.length >= 1) {
        const avgSalary = parseInt(salaryNumbers[0].replace(',', ''));
        return avgSalary >= minSalary && avgSalary <= maxSalary;
      }
      return true; // Keep jobs with unparseable salary
    });
    
    // Apply post date filter
    if (filterCriteria.postDate !== 'any_time') {
      const now = new Date();
      result = result.filter(job => {
        // This is a simplified implementation as the mock data uses strings like "5 days ago"
        // In a real application, you would compare actual dates
        const postedText = job.postedAt;
        
        // Simple parsing logic
        if (filterCriteria.postDate === 'today' && postedText.includes('hour')) {
          return true;
        } else if (filterCriteria.postDate === 'week' && 
                  (postedText.includes('day') || postedText.includes('hour'))) {
          const days = parseInt(postedText.match(/\d+/)?.[0] || '0');
          return days <= 7;
        } else if (filterCriteria.postDate === 'month') {
          const days = parseInt(postedText.match(/\d+/)?.[0] || '0');
          return days <= 30 || postedText.includes('hour');
        }
        return true; // Default to showing all jobs
      });
    }
    
    // Apply location filters from sidebar
    if (filterCriteria.locations.length > 0) {
      result = result.filter(job => 
        filterCriteria.locations.some(location => 
          job.location.toLowerCase().includes(location.toLowerCase())
        )
      );
    }
    
    // Apply sorting
    result = sortJobs(result, sortOption);
    
    setFilteredJobs(result);
  }, [searchCriteria, filterCriteria, sortOption]);
  
  // Sort jobs based on selected option
  const sortJobs = (jobs: Job[], sortOption: string) => {
    const sorted = [...jobs];
    switch (sortOption) {
      case 'newest':
        // Simple sorting by "postedAt" text (in a real app, would use actual dates)
        return sorted.sort((a, b) => {
          if (a.postedAt.includes('hour') && !b.postedAt.includes('hour')) return -1;
          if (!a.postedAt.includes('hour') && b.postedAt.includes('hour')) return 1;
          const daysA = parseInt(a.postedAt.match(/\d+/)?.[0] || '999');
          const daysB = parseInt(b.postedAt.match(/\d+/)?.[0] || '999');
          return daysA - daysB;
        });
      case 'salary_high_low':
        return sorted.sort((a, b) => {
          // Extract and compare salary averages
          const extractAvgSalary = (salaryStr: string) => {
            const matches = salaryStr.match(/\d+,\d+/g);
            if (!matches || matches.length === 0) return 0;
            const sum = matches.reduce((acc, curr) => {
              return acc + parseInt(curr.replace(',', ''));
            }, 0);
            return sum / matches.length;
          };
          
          const avgA = extractAvgSalary(a.salary);
          const avgB = extractAvgSalary(b.salary);
          return avgB - avgA;
        });
      case 'salary_low_high':
        return sorted.sort((a, b) => {
          // Extract and compare salary averages
          const extractAvgSalary = (salaryStr: string) => {
            const matches = salaryStr.match(/\d+,\d+/g);
            if (!matches || matches.length === 0) return 0;
            const sum = matches.reduce((acc, curr) => {
              return acc + parseInt(curr.replace(',', ''));
            }, 0);
            return sum / matches.length;
          };
          
          const avgA = extractAvgSalary(a.salary);
          const avgB = extractAvgSalary(b.salary);
          return avgA - avgB;
        });
      default: // 'relevant' - default sorting
        return sorted;
    }
  };
  
  // Pagination logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  
  const paginate = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Browse Jobs in Germany for Ugandan Professionals"
        description="Explore job opportunities in Germany specifically curated for Ugandan professionals. Filter by industry, location, and experience level to find your ideal position."
        keywords="Germany jobs, Ugandan professionals Germany, work in Germany, international jobs, EU employment, career opportunities"
        canonical="https://ugandajobsgermany.online/jobs"
        ogType="website"
      />
      {/* Add structured data for job listings */}
      <JobListSchema jobs={filteredJobs.slice(0, 10)} />
      
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-german-dark mb-4">Find Your Perfect Job</h1>
            <SearchBar onSearch={handleSearch} initialValues={searchCriteria} />
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Mobile Filter Toggle */}
            <Button 
              className="md:hidden mb-4 flex items-center gap-2"
              onClick={() => setShowFilters(!showFilters)}
              variant="outline"
            >
              {showFilters ? (
                <>
                  <X className="h-4 w-4" />
                  <span>Hide Filters</span>
                </>
              ) : (
                <>
                  <ListFilter className="h-4 w-4" />
                  <span>Show Filters</span>
                </>
              )}
            </Button>
            
            {/* Filters Sidebar - hidden on mobile until toggled */}
            <div className={`md:w-1/4 ${showFilters ? 'block' : 'hidden md:block'}`}>
              <JobFilter onFilterChange={handleFilterChange} />
            </div>
            
            {/* Jobs List */}
            <div className="md:w-3/4">
              <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex justify-between items-center flex-wrap gap-4">
                <p className="text-german-muted">
                  Showing <span className="font-medium text-german-dark">{filteredJobs.length}</span> jobs
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-german-muted mr-2">Sort by:</span>
                  <select 
                    className="text-sm border rounded p-1"
                    value={sortOption}
                    onChange={handleSortChange}
                  >
                    <option value="relevant">Most Relevant</option>
                    <option value="newest">Newest</option>
                    <option value="salary_high_low">Salary: High to Low</option>
                    <option value="salary_low_high">Salary: Low to High</option>
                  </select>
                </div>
              </div>
              
              {/* Show message if no jobs found */}
              {filteredJobs.length === 0 ? (
                <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                  <h3 className="text-xl font-semibold mb-2">No jobs found</h3>
                  <p className="text-german-muted mb-4">
                    Try adjusting your search criteria or filters to see more results.
                  </p>
                  <Button 
                    onClick={() => {
                      setSearchCriteria({keywords: '', location: 'any', category: 'all'});
                      setFilterCriteria({
                        jobTypes: [],
                        experienceLevels: [],
                        salary: [0, 120000],
                        postDate: 'any_time',
                        locations: []
                      });
                    }} 
                    variant="outline"
                  >
                    Clear all filters
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {currentJobs.map(job => (
                    <JobCard key={job.id} {...job} />
                  ))}
                </div>
              )}
              
              {/* Pagination */}
              {filteredJobs.length > 0 && (
                <div className="mt-8 flex justify-center">
                  <nav className="flex items-center gap-1">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-8 w-8"
                      onClick={() => paginate(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    
                    {/* Generate page buttons */}
                    {Array.from({ length: Math.min(totalPages, 5) }).map((_, index) => {
                      let pageNum;
                      
                      // Logic to show correct page numbers based on current page
                      if (totalPages <= 5) {
                        pageNum = index + 1;
                      } else if (currentPage <= 3) {
                        pageNum = index + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + index;
                      } else {
                        pageNum = currentPage - 2 + index;
                      }
                      
                      return (
                        <Button 
                          key={pageNum}
                          variant="outline" 
                          size="sm" 
                          className={`h-8 w-8 ${
                            currentPage === pageNum 
                              ? 'bg-german-primary text-white hover:bg-german-primary/90' 
                              : ''
                          }`}
                          onClick={() => paginate(pageNum)}
                        >
                          {pageNum}
                        </Button>
                      );
                    })}
                    
                    {/* Show ellipsis if there are more pages */}
                    {totalPages > 5 && currentPage < totalPages - 2 && (
                      <span className="mx-2">...</span>
                    )}
                    
                    {/* Show last page if not visible in the current set */}
                    {totalPages > 5 && currentPage < totalPages - 2 && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="h-8 w-8"
                        onClick={() => paginate(totalPages)}
                      >
                        {totalPages}
                      </Button>
                    )}
                    
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-8 w-8"
                      onClick={() => paginate(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JobsPage;
