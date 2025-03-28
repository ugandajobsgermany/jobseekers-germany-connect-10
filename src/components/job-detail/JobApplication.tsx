
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Job } from '@/types/job';

interface JobApplicationProps {
  job: Job;
}

const JobApplication = ({ job }: JobApplicationProps) => {
  return (
    <Card>
      <CardContent className="p-8">
        <h2 className="text-xl font-semibold mb-6">How to Apply</h2>
        <p className="mb-6">
          Ready to apply for this {job.title} position at {job.company}? Click the button below to submit your application. Make sure your resume is up to date and highlights relevant experience.
        </p>
        <Button size="lg" className="bg-german-primary hover:bg-german-primary/90 w-full md:w-auto">
          Apply for this Job
        </Button>
      </CardContent>
    </Card>
  );
};

export default JobApplication;
