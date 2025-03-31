
import React from 'react';
import JobCard from '@/components/JobCard';
import { Button } from '@/components/ui/button';
import { Job } from '@/types/job';

interface JobsListProps {
  jobs: Job[];
  currentJobs: Job[];
  resetFilters: () => void;
}

const JobsList = ({ jobs, currentJobs, resetFilters }: JobsListProps) => {
  if (jobs.length === 0) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-sm text-center">
        <h3 className="text-xl font-semibold mb-2">No jobs found</h3>
        <p className="text-german-muted mb-4">
          Try adjusting your search criteria or filters to see more results.
        </p>
        <Button 
          onClick={resetFilters} 
          variant="outline"
        >
          Clear all filters
        </Button>
      </div>
    );
  }
  
  return (
    <div className="space-y-4">
      {currentJobs.map(job => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
};

export default JobsList;
