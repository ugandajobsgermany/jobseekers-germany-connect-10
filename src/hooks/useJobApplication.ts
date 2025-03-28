
import { useState } from 'react';
import { Job } from '@/types/job';
import { useToast } from '@/hooks/use-toast';

export function useJobApplication() {
  const { toast } = useToast();
  const [appliedJobs, setAppliedJobs] = useState<Record<string, boolean>>(() => {
    const applied = localStorage.getItem('appliedJobs');
    return applied ? JSON.parse(applied) : {};
  });

  const applyForJob = (job: Job) => {
    const newAppliedJobs = { ...appliedJobs, [job.id]: true };
    setAppliedJobs(newAppliedJobs);
    localStorage.setItem('appliedJobs', JSON.stringify(newAppliedJobs));
    
    toast({
      title: "Application Submitted",
      description: `Your application for ${job.title} at ${job.company} has been successfully submitted.`,
    });
    
    return { ...job, isApplied: true };
  };

  const hasApplied = (jobId: string) => {
    return !!appliedJobs[jobId];
  };

  return {
    applyForJob,
    hasApplied
  };
}
