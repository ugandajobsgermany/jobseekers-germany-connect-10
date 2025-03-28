
import React from 'react';
import JobCard from './JobCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockJobs } from '@/data/mockData';

const FeaturedJobs = () => {
  // Just get first 6 jobs and mark first 2 as featured
  const featuredJobs = mockJobs.slice(0, 6).map((job, index) => ({
    ...job,
    isFeatured: index < 2
  }));

  return (
    <section className="container mx-auto section-padding">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-3xl font-bold text-german-dark mb-2">Featured Jobs</h2>
          <p className="text-german-muted">Handpicked opportunities from top German companies</p>
        </div>
        <Link to="/jobs">
          <Button variant="outline" className="hidden md:flex items-center gap-2">
            <span>View All Jobs</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredJobs.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </div>
      
      <div className="mt-10 flex justify-center md:hidden">
        <Link to="/jobs">
          <Button className="bg-german-primary hover:bg-german-primary/90">
            View All Jobs
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedJobs;
