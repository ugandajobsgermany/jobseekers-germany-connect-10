
import { useState } from 'react';
import { Job } from '@/types/job';
import { useToast } from '@/hooks/use-toast';

export function useJobActions() {
  const { toast } = useToast();
  const [savedJobs, setSavedJobs] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem('savedJobs');
    return saved ? JSON.parse(saved) : {};
  });

  const toggleSaveJob = (job: Job) => {
    const newSavedJobs = { ...savedJobs };
    
    if (savedJobs[job.id]) {
      delete newSavedJobs[job.id];
      toast({
        title: "Job removed",
        description: `${job.title} has been removed from saved jobs`,
      });
    } else {
      newSavedJobs[job.id] = true;
      toast({
        title: "Job saved",
        description: `${job.title} has been saved to your profile`,
      });
    }
    
    setSavedJobs(newSavedJobs);
    localStorage.setItem('savedJobs', JSON.stringify(newSavedJobs));
    
    return { ...job, isSaved: newSavedJobs[job.id] || false };
  };

  const isJobSaved = (jobId: string) => {
    return !!savedJobs[jobId];
  };

  const shareJob = (job: Job) => {
    const shareData = {
      title: `Job Opportunity: ${job.title} at ${job.company}`,
      text: `Check out this job: ${job.title} at ${job.company}`,
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare(shareData)) {
      navigator.share(shareData)
        .then(() => {
          toast({
            title: "Shared successfully",
            description: "Job has been shared",
          });
        })
        .catch((error) => {
          console.error('Error sharing:', error);
          copyToClipboard(window.location.href);
        });
    } else {
      copyToClipboard(window.location.href);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        toast({
          title: "Link copied",
          description: "Job link copied to clipboard",
        });
      })
      .catch((error) => {
        console.error('Error copying to clipboard:', error);
        toast({
          title: "Sharing failed",
          description: "Could not share or copy job link",
          variant: "destructive",
        });
      });
  };

  return {
    toggleSaveJob,
    isJobSaved,
    shareJob,
  };
}
