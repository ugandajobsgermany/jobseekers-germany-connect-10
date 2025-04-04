
import { supabase } from '@/integrations/supabase/client';
import { Job } from '@/types/job';

// Fetch all jobs from Supabase
export const fetchJobsFromSupabase = async (): Promise<Job[]> => {
  const { data, error } = await supabase
    .from('jobs')
    .select('*');
  
  if (error) {
    console.error('Error fetching jobs:', error);
    return [];
  }

  return (data || []) as Job[];
};

// Fetch a single job by ID
export const fetchJobById = async (id: string): Promise<Job | null> => {
  const { data, error } = await supabase
    .from('jobs')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) {
    console.error('Error fetching job by ID:', error);
    return null;
  }

  return data as Job;
};

// Add initial job data to Supabase (used only once to seed the database)
export const seedJobsToSupabase = async (jobs: Job[]): Promise<void> => {
  // Check if jobs already exist to avoid duplicates
  const { count, error: countError } = await supabase
    .from('jobs')
    .select('*', { count: 'exact', head: true });
  
  if (countError) {
    console.error('Error checking existing jobs:', countError);
    return;
  }

  // If jobs already exist, don't seed
  if (count && count > 0) {
    console.log('Jobs already exist in the database. Skipping seed operation.');
    return;
  }

  // Insert jobs in batches to avoid request size limitations
  const batchSize = 50;
  for (let i = 0; i < jobs.length; i += batchSize) {
    const batch = jobs.slice(i, i + batchSize);
    const { error } = await supabase
      .from('jobs')
      .insert(batch);
    
    if (error) {
      console.error(`Error seeding jobs batch ${i}:`, error);
    } else {
      console.log(`Successfully seeded jobs batch ${i} to ${i + batch.length - 1}`);
    }
  }
};
