
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Send, Loader } from 'lucide-react';
import { Job } from '@/types/job';
import { useJobApplication } from '@/hooks/useJobApplication';
import { useAuth } from '@/contexts/AuthContext';

interface JobApplicationProps {
  job: Job;
  onJobUpdate?: (updatedJob: Job) => void;
}

const JobApplication = ({ job, onJobUpdate }: JobApplicationProps) => {
  const { applyForJob, hasApplied, loading } = useJobApplication();
  const { user } = useAuth();
  
  const handleApply = async () => {
    const updatedJob = await applyForJob(job);
    if (onJobUpdate) {
      onJobUpdate(updatedJob);
    }
  };

  const applied = hasApplied(job.id);

  return (
    <Card>
      <CardContent className="p-8">
        <h2 className="text-xl font-semibold mb-6">How to Apply</h2>
        <p className="mb-6">
          Ready to apply for this {job.title} position at {job.company}? 
          {applied 
            ? " We've received your application and will be in touch soon!"
            : " Click the button below to submit your application. Make sure your resume is up to date and highlights relevant experience."
          }
        </p>
        {loading ? (
          <Button 
            size="lg" 
            className="bg-gray-400 hover:bg-gray-500 w-full md:w-auto"
            disabled
          >
            <Loader className="mr-2 h-4 w-4 animate-spin" />
            Loading...
          </Button>
        ) : applied ? (
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 w-full md:w-auto"
            disabled
          >
            <CheckCircle className="mr-2 h-4 w-4" />
            Application Submitted
          </Button>
        ) : (
          <Button 
            size="lg" 
            className="bg-german-primary hover:bg-german-primary/90 w-full md:w-auto"
            onClick={handleApply}
          >
            <Send className="mr-2 h-4 w-4" />
            Apply for this Job
          </Button>
        )}
        {!user && !loading && (
          <p className="mt-4 text-sm text-german-muted">
            You need to be logged in to apply for jobs.
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default JobApplication;
