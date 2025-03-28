
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

interface JobDescriptionProps {
  job: any;
}

const JobDescription = ({ job }: JobDescriptionProps) => {
  return (
    <Card className="mb-8">
      <CardContent className="p-8">
        <h2 className="text-xl font-semibold mb-4">Job Description</h2>
        <p className="text-german-dark mb-6">{job.description}</p>
        
        <h3 className="text-lg font-semibold mb-3">Requirements</h3>
        <ul className="list-disc pl-5 mb-6 space-y-2">
          {job.requirements.map((req: string, index: number) => (
            <li key={index} className="text-german-dark">{req}</li>
          ))}
        </ul>
        
        <h3 className="text-lg font-semibold mb-3">Benefits</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 mb-6">
          {job.benefits.map((benefit: string, index: number) => (
            <li key={index} className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default JobDescription;
