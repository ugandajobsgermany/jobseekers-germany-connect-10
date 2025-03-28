
import React from 'react';
import JobCard from '@/components/JobCard';

interface SimilarJobsProps {
  job: any;
  similarJobs: any[];
}

const SimilarJobs = ({ job, similarJobs }: SimilarJobsProps) => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold mb-6">Similar Jobs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {similarJobs.map(similarJob => (
          <JobCard key={similarJob.id} {...similarJob} />
        ))}
      </div>
    </div>
  );
};

export default SimilarJobs;
