
import React, { useState } from 'react';
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

const JobsPage = () => {
  const [filteredJobs, setFilteredJobs] = useState(mockJobs);
  const [showFilters, setShowFilters] = useState(false);
  
  // In a real app, this would filter the actual jobs based on search criteria
  const handleSearch = (criteria: any) => {
    console.log('Search criteria:', criteria);
    // For demonstration, just log the criteria but keep all jobs
    setFilteredJobs(mockJobs);
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
            <SearchBar onSearch={handleSearch} />
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
              <JobFilter />
            </div>
            
            {/* Jobs List */}
            <div className="md:w-3/4">
              <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex justify-between items-center">
                <p className="text-german-muted">Showing <span className="font-medium text-german-dark">{filteredJobs.length}</span> jobs</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-german-muted mr-2">Sort by:</span>
                  <select className="text-sm border rounded p-1">
                    <option>Most Relevant</option>
                    <option>Newest</option>
                    <option>Salary: High to Low</option>
                    <option>Salary: Low to High</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-4">
                {filteredJobs.map(job => (
                  <JobCard key={job.id} {...job} />
                ))}
              </div>
              
              {/* Pagination */}
              <div className="mt-8 flex justify-center">
                <nav className="flex items-center gap-1">
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8 bg-german-primary text-white hover:bg-german-primary/90">1</Button>
                  <Button variant="outline" size="sm" className="h-8 w-8">2</Button>
                  <Button variant="outline" size="sm" className="h-8 w-8">3</Button>
                  <span className="mx-2">...</span>
                  <Button variant="outline" size="sm" className="h-8 w-8">10</Button>
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JobsPage;
