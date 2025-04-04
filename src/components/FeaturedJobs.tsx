
import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';
import JobListSchema from './SEO/JobListSchema';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Job } from '@/types/job';
import { sortJobs } from '@/utils/jobSorting';
import { useQuery } from '@tanstack/react-query';

// Function to fetch jobs (replacing mock data)
const fetchJobs = async (): Promise<Job[]> => {
  // In a real implementation, this would be an API call
  // For now, we'll import from a central location
  const { mockJobs } = await import('@/data/jobs');
  return mockJobs;
};

const FeaturedJobs = () => {
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [featuredJobs, setFeaturedJobs] = useState<Job[]>([]);

  // Use React Query to fetch jobs
  const { data: jobs = [] } = useQuery({
    queryKey: ['jobs'],
    queryFn: fetchJobs,
  });

  // Sort and prepare featured jobs
  useEffect(() => {
    if (jobs.length === 0) return;
    
    // Sort jobs based on selected sort order
    const sortedJobs = sortJobs(jobs, sortOrder);
    
    // Get top 6 jobs and mark first 2 as featured
    setFeaturedJobs(sortedJobs.slice(0, 6).map((job, index) => ({
      ...job,
      isFeatured: index < 2
    })));
  }, [sortOrder, jobs]);

  return (
    <>
      {/* Add structured data for featured job listings */}
      <JobListSchema jobs={featuredJobs} />
      
      <section className="container mx-auto py-8 md:py-10">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-german-dark mb-1">Featured Jobs</h2>
            <p className="text-german-muted text-sm">Handpicked opportunities from top German companies</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex">
              <Button 
                variant="ghost" 
                size="sm" 
                className={`text-sm ${sortOrder === 'newest' ? 'bg-german-light' : ''}`}
                onClick={() => setSortOrder('newest')}
              >
                Newest
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className={`text-sm ${sortOrder === 'oldest' ? 'bg-german-light' : ''}`}
                onClick={() => setSortOrder('oldest')}
              >
                Oldest
              </Button>
            </div>
            <Link to="/jobs">
              <Button variant="outline" className="hidden md:flex items-center gap-2 text-sm py-1 px-3 h-8">
                <span>View All Jobs</span>
                <ArrowRight className="h-3 w-3" />
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {featuredJobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
        
        <div className="mt-6 flex justify-center md:hidden">
          <Link to="/jobs">
            <Button className="bg-german-primary hover:bg-german-primary/90 text-sm py-1 px-3 h-8">
              View All Jobs
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default FeaturedJobs;
