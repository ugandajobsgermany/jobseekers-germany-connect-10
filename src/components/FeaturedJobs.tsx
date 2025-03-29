
import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockJobs } from '@/data/jobs';
import { Job } from '@/types/job';

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');

  // Sort and prepare jobs
  useEffect(() => {
    // Convert "postedAt" strings to sortable values
    const getPostDays = (postedString: string): number => {
      if (postedString.includes('day')) {
        return parseInt(postedString.split(' ')[0]);
      } else if (postedString.includes('week')) {
        return parseInt(postedString.split(' ')[0]) * 7;
      } else if (postedString.includes('month')) {
        return parseInt(postedString.split(' ')[0]) * 30;
      }
      return 0;
    };

    const sortedJobs = [...mockJobs].sort((a, b) => {
      const daysA = getPostDays(a.postedAt);
      const daysB = getPostDays(b.postedAt);
      
      return sortOrder === 'newest' ? daysA - daysB : daysB - daysA;
    });

    // Get top 6 jobs and mark first 2 as featured
    setJobs(sortedJobs.slice(0, 6).map((job, index) => ({
      ...job,
      isFeatured: index < 2
    })));
  }, [sortOrder]);

  return (
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
        {jobs.map((job) => (
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
  );
};

export default FeaturedJobs;
