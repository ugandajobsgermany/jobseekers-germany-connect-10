
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bookmark } from 'lucide-react';
import { Job } from '@/types/job';

interface JobSummaryProps {
  job: Job;
}

const JobSummary = ({ job }: JobSummaryProps) => {
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
          <Button className="bg-german-primary hover:bg-german-primary/90 w-full">
            Apply Now
          </Button>
          <Button variant="outline" className="w-full flex items-center justify-center gap-2">
            <Bookmark className="h-4 w-4" />
            <span>Save Job</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobSummary;
