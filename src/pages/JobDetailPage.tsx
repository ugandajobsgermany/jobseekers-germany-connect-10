
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JobNotFound from '@/components/job-detail/JobNotFound';
import JobHeader from '@/components/job-detail/JobHeader';
import JobDescription from '@/components/job-detail/JobDescription';
import JobApplication from '@/components/job-detail/JobApplication';
import JobSummary from '@/components/job-detail/JobSummary';
import SimilarJobs from '@/components/job-detail/SimilarJobs';
import { mockJobs } from '@/data/mockData';
import { Job } from '@/types/job';

const JobDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<Job | null>(null);
  
  useEffect(() => {
    // In a real app, this would be an API call
    const foundJob = mockJobs.find(job => job.id === id);
    setJob(foundJob || null);
  }, [id]);
  
  if (!job) {
    return <JobNotFound />;
  }
  
  const similarJobs = mockJobs
    .filter(j => j.category === job.category && j.id !== job.id)
    .slice(0, 3);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <JobHeader job={job} />
              <JobDescription job={job} />
              <JobApplication job={job} />
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              <JobSummary job={job} />
            </div>
          </div>
          
          <SimilarJobs job={job} similarJobs={similarJobs} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JobDetailPage;
