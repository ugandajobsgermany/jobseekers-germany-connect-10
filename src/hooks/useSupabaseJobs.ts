
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Job } from '@/types/job';
import { fetchJobsFromSupabase, seedJobsToSupabase } from '@/utils/jobOperations';
import { mockJobs } from '@/data/jobs';
import { toast } from 'sonner';

export const useSupabaseJobs = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  
  // Function to seed the database if needed
  const initializeJobs = async () => {
    try {
      await seedJobsToSupabase(mockJobs);
      setIsInitialized(true);
    } catch (error) {
      console.error('Error initializing jobs:', error);
      toast.error('Failed to initialize job data');
    }
  };

  // Initialize jobs on first load
  useEffect(() => {
    if (!isInitialized) {
      initializeJobs();
    }
  }, [isInitialized]);

  // Fetch jobs from Supabase
  const { data: jobs, isLoading, error, refetch } = useQuery({
    queryKey: ['supabaseJobs'],
    queryFn: fetchJobsFromSupabase,
    // Only start fetching after initialization attempt
    enabled: true,
  });

  return {
    jobs: jobs || [],
    isLoading,
    error,
    refetch
  };
};
