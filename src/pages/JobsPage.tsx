
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JobFilter from '@/components/JobFilter';
import SEO from '@/components/SEO';
import JobListSchema from '@/components/SEO/JobListSchema';
import { useJobsData } from '@/hooks/useJobsData';
import { getActiveFilterCount } from '@/utils/jobFilters';
import JobsHeader from '@/components/jobs/JobsHeader';
import MobileFilterToggle from '@/components/jobs/MobileFilterToggle';
import JobsListHeader from '@/components/jobs/JobsListHeader';
import JobsList from '@/components/jobs/JobsList';
import JobsPagination from '@/components/jobs/JobsPagination';

const JobsPage = () => {
  const [showFilters, setShowFilters] = useState(false);
  const {
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
  } = useJobsData();
  
  // Pagination logic
  const jobsPerPage = 10;
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  
  // Handle page change
  const paginate = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo(0, 0);
    }
  };

  // Get the active filter count for the mobile button
  const activeFilterCount = getActiveFilterCount(filterCriteria);

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
          {/* Search and page title */}
          <JobsHeader onSearch={handleSearch} initialValues={searchCriteria} />
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Mobile Filter Toggle */}
            <MobileFilterToggle 
              showFilters={showFilters} 
              setShowFilters={setShowFilters} 
              activeFilterCount={activeFilterCount}
            />
            
            {/* Filters Sidebar - hidden on mobile until toggled */}
            <div className={`md:w-1/4 ${showFilters ? 'block' : 'hidden md:block'}`}>
              <JobFilter 
                onFilterChange={handleFilterChange}
                initialFilters={filterCriteria}
                categories={uniqueCategories} 
                jobTypes={uniqueJobTypes}
                locations={uniqueLocations}
              />
            </div>
            
            {/* Jobs List */}
            <div className="md:w-3/4">
              {/* Jobs list header with count and sorting */}
              <JobsListHeader 
                totalJobs={filteredJobs.length}
                activeFilterCount={activeFilterCount}
                sortOption={sortOption}
                onSortChange={(e) => handleSortChange(e.target.value)}
              />
              
              {/* List of jobs or empty state */}
              <JobsList 
                jobs={filteredJobs} 
                currentJobs={currentJobs}
                resetFilters={resetFilters} 
              />
              
              {/* Pagination */}
              {filteredJobs.length > 0 && (
                <JobsPagination 
                  currentPage={currentPage} 
                  totalPages={totalPages} 
                  onPageChange={paginate} 
                />
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
