
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Job } from '@/types/job';
import { fetchJobsFromSupabase, seedJobsToSupabase } from '@/utils/jobOperations';
import { mockJobs } from '@/data/jobs';
import { toast } from 'sonner';

export const useSupabaseJobs = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [isInitializing, setIsInitializing] = useState(false);
  
  // Function to seed the database if needed
  const initializeJobs = async () => {
    if (isInitializing) return;
    
    try {
      setIsInitializing(true);
      await seedJobsToSupabase(mockJobs);
      setIsInitialized(true);
      toast.success('Job data initialized successfully');
    } catch (error) {
      console.error('Error initializing jobs:', error);
      toast.error('Failed to initialize job data');
    } finally {
      setIsInitializing(false);
    }
  };

  // Fetch jobs from Supabase
  const { data: jobs, isLoading, error, refetch } = useQuery({
    queryKey: ['supabaseJobs'],
    queryFn: fetchJobsFromSupabase,
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
  });

  // Initialize jobs on first load only if we don't have jobs
  useEffect(() => {
    const checkAndInitializeJobs = async () => {
      if (!isInitialized && !isInitializing && !jobs?.length) {
        await initializeJobs();
      } else if (jobs?.length) {
        // If we have jobs, mark as initialized
        setIsInitialized(true);
      }
    };
    
    checkAndInitializeJobs();
  }, [isInitialized, isInitializing, jobs]);

  return {
    jobs: jobs || [],
    isLoading: isLoading || isInitializing,
    error,
    refetch,
    initializeJobs
  };
};
