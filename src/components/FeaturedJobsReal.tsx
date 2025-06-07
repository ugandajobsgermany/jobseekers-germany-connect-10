
import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';
import JobListSchema from './SEO/JobListSchema';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Job } from '@/types/job';
import { sortJobs } from '@/utils/jobSorting';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

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
    .order('posted_at', { ascending: false })
    .limit(20);

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

const FeaturedJobsReal = () => {
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [featuredJobs, setFeaturedJobs] = useState<Job[]>([]);

  // Use React Query to fetch jobs
  const { data: jobs = [], isLoading } = useQuery({
    queryKey: ['featured-jobs'],
    queryFn: fetchJobsFromSupabase,
  });

  // Sort and prepare featured jobs
  useEffect(() => {
    if (jobs.length === 0) return;
    
    // Sort jobs based on selected sort order
    const sortedJobs = sortJobs(jobs, sortOrder);
    
    // Prioritize entry-level jobs in our featured section
    const entryLevelJobs = sortedJobs.filter(job => 
      job.category === 'Warehouse & Logistics' || 
      job.category === 'Transportation & Delivery' || 
      job.category === 'Food Service & Hospitality' ||
      job.category === 'Retail & Customer Service' ||
      job.category === 'Cleaning & Maintenance' ||
      job.category === 'Manufacturing' ||
      job.category === 'Customer Service' ||
      job.category === 'Security'
    );
    
    // Get top 6 jobs, prioritizing entry-level but mixing in others if needed
    let selectedJobs = entryLevelJobs.slice(0, 6);
    if (selectedJobs.length < 6) {
      // Fill remaining slots with other job types
      const otherJobs = sortedJobs.filter(job => !entryLevelJobs.includes(job));
      selectedJobs = [...selectedJobs, ...otherJobs.slice(0, 6 - selectedJobs.length)];
    }
    
    // Mark first 2 as featured
    setFeaturedJobs(selectedJobs.map((job, index) => ({
      ...job,
      isFeatured: index < 2
    })));
  }, [sortOrder, jobs]);

  if (isLoading) {
    return (
      <section className="container mx-auto py-8 md:py-10">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-german-dark mb-1">Featured Jobs</h2>
            <p className="text-german-muted text-sm">Loading opportunities...</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-gray-100 animate-pulse h-48 rounded-lg"></div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Add structured data for featured job listings */}
      <JobListSchema jobs={featuredJobs} />
      
      <section className="container mx-auto py-8 md:py-10">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-german-dark mb-1">Featured Jobs</h2>
            <p className="text-german-muted text-sm">Entry-level opportunities from top German companies</p>
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

export default FeaturedJobsReal;
