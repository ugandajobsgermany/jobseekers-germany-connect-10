
import { useState, useEffect } from 'react';
import { Job } from '@/types/job';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

export function useJobApplication() {
  const { toast } = useToast();
  const { user } = useAuth();
  const [appliedJobs, setAppliedJobs] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);

  // Load applied jobs from the database
  useEffect(() => {
    async function loadAppliedJobs() {
      if (!user) {
        setAppliedJobs({});
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('job_applications')
          .select('job_id')
          .eq('user_id', user.id);

        if (error) {
          console.error('Error loading applied jobs:', error);
          return;
        }

        const jobsMap: Record<string, boolean> = {};
        if (data) {
          data.forEach(app => {
            jobsMap[app.job_id] = true;
          });
        }
        setAppliedJobs(jobsMap);
      } catch (err) {
        console.error('Error in loadAppliedJobs:', err);
      } finally {
        setLoading(false);
      }
    }

    loadAppliedJobs();
  }, [user]);

  const applyForJob = async (job: Job) => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to apply for jobs.",
        variant: "destructive",
      });
      return job;
    }

    try {
      // Insert job application into the database
      const { error } = await supabase
        .from('job_applications')
        .insert({
          user_id: user.id,
          job_id: job.id,
          status: 'pending',
          notes: `Applied for ${job.title} at ${job.company}`
        });

      if (error) {
        if (error.code === '23505') { // Unique violation error code
          toast({
            title: "Already Applied",
            description: `You have already applied for this job.`,
            variant: "destructive",
          });
        } else {
          console.error('Error applying for job:', error);
          toast({
            title: "Application Failed",
            description: `There was a problem submitting your application. Please try again.`,
            variant: "destructive",
          });
        }
        return job;
      }

      // Update local state
      setAppliedJobs(prev => ({ ...prev, [job.id]: true }));
      
      toast({
        title: "Application Submitted",
        description: `Your application for ${job.title} at ${job.company} has been successfully submitted.`,
      });
      
      return { ...job, isApplied: true };
    } catch (err) {
      console.error('Error in applyForJob:', err);
      toast({
        title: "Application Failed",
        description: `There was a problem submitting your application. Please try again.`,
        variant: "destructive",
      });
      return job;
    }
  };

  const hasApplied = (jobId: string) => {
    return !!appliedJobs[jobId];
  };

  return {
    applyForJob,
    hasApplied,
    loading
  };
}
