
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bookmark, CheckCircle, Send, Loader } from 'lucide-react';
import { Job } from '@/types/job';
import { useJobActions } from '@/hooks/useJobActions';
import { useJobApplication } from '@/hooks/useJobApplication';
import { useAuth } from '@/contexts/AuthContext';

interface JobSummaryProps {
  job: Job;
  onJobUpdate?: (updatedJob: Job) => void;
}

const JobSummary = ({ job, onJobUpdate }: JobSummaryProps) => {
  const { toggleSaveJob, isJobSaved } = useJobActions();
  const { applyForJob, hasApplied, loading } = useJobApplication();
  const { user } = useAuth();
  
  const handleSaveJob = () => {
    const updatedJob = toggleSaveJob(job);
    if (onJobUpdate) {
      onJobUpdate(updatedJob);
    }
  };
  
  const handleApply = async () => {
    const updatedJob = await applyForJob(job);
    if (onJobUpdate) {
      onJobUpdate(updatedJob);
    }
  };

  const applied = hasApplied(job.id);

  return (
    <Card className="mb-8 sticky top-24">
      <CardContent className="p-6">
        <h3 className="font-semibold text-lg mb-4">Job Summary</h3>
        
        <div className="space-y-4">
          <div className="flex justify-between border-b pb-3">
            <span className="text-german-muted">Job ID:</span>
            <span className="font-medium">{job.id}</span>
          </div>
          
          <div className="flex justify-between border-b pb-3">
            <span className="text-german-muted">Location:</span>
            <span className="font-medium">{job.location}</span>
          </div>
          
          <div className="flex justify-between border-b pb-3">
            <span className="text-german-muted">Job Type:</span>
            <span className="font-medium">{job.jobType}</span>
          </div>
          
          <div className="flex justify-between border-b pb-3">
            <span className="text-german-muted">Salary:</span>
            <span className="font-medium">{job.salary}</span>
          </div>
          
          <div className="flex justify-between border-b pb-3">
            <span className="text-german-muted">Category:</span>
            <span className="font-medium">{job.category}</span>
          </div>
          
          <div className="flex justify-between pb-3">
            <span className="text-german-muted">Posted:</span>
            <span className="font-medium">{job.postedAt}</span>
          </div>
        </div>
        
        <div className="mt-6 flex flex-col gap-3">
          {loading ? (
            <Button className="bg-gray-400 hover:bg-gray-500 w-full" disabled>
              <Loader className="mr-2 h-4 w-4 animate-spin" />
              <span>Loading...</span>
            </Button>
          ) : applied ? (
            <Button className="bg-green-600 hover:bg-green-700 w-full" disabled>
              <CheckCircle className="mr-2 h-4 w-4" />
              <span>Application Submitted</span>
            </Button>
          ) : (
            <Button 
              className="bg-german-primary hover:bg-german-primary/90 w-full" 
              onClick={handleApply}
            >
              <Send className="mr-2 h-4 w-4" />
              <span>Apply Now</span>
            </Button>
          )}
          <Button 
            variant="outline" 
            className={`w-full flex items-center justify-center gap-2 ${isJobSaved(job.id) ? 'bg-german-light text-german-primary' : ''}`}
            onClick={handleSaveJob}
          >
            <Bookmark className={`h-4 w-4 ${isJobSaved(job.id) ? 'fill-german-primary' : ''}`} />
            <span>{isJobSaved(job.id) ? 'Saved' : 'Save Job'}</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobSummary;
