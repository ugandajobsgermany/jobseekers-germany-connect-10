
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Send } from 'lucide-react';
import { Job } from '@/types/job';
import { useJobApplication } from '@/hooks/useJobApplication';

interface JobApplicationProps {
  job: Job;
  onJobUpdate?: (updatedJob: Job) => void;
}

const JobApplication = ({ job, onJobUpdate }: JobApplicationProps) => {
  const { applyForJob, hasApplied } = useJobApplication();
  
  const handleApply = () => {
    const updatedJob = applyForJob(job);
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
        {applied ? (
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
      </CardContent>
    </Card>
  );
};

export default JobApplication;
