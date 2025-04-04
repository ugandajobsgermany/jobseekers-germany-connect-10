
import { supabase } from '@/integrations/supabase/client';
import { Job } from '@/types/job';

// Fetch all jobs from Supabase
export const fetchJobsFromSupabase = async (): Promise<Job[]> => {
  const { data, error } = await supabase
    .from('jobs')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error('Error fetching jobs:', error);
    return [];
  }

  // Map the data to our Job type, converting arrays correctly
  return (data || []).map(job => ({
    ...job,
    requirements: Array.isArray(job.requirements) ? job.requirements : [],
    benefits: Array.isArray(job.benefits) ? job.benefits : [],
    postedAt: getTimeAgo(job.created_at)
  })) as Job[];
};

// Helper function to convert timestamps to "X time ago" format
export const getTimeAgo = (timestamp: string): string => {
  const now = new Date();
  const postDate = new Date(timestamp);
  const diffMs = now.getTime() - postDate.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);
  const diffWeek = Math.floor(diffDay / 7);
  const diffMonth = Math.floor(diffDay / 30);
  
  if (diffMonth > 0) {
    return `${diffMonth} month${diffMonth > 1 ? 's' : ''} ago`;
  }
  if (diffWeek > 0) {
    return `${diffWeek} week${diffWeek > 1 ? 's' : ''} ago`;
  }
  if (diffDay > 0) {
    return `${diffDay} day${diffDay > 1 ? 's' : ''} ago`;
  }
  if (diffHour > 0) {
    return `${diffHour} hour${diffHour > 1 ? 's' : ''} ago`;
  }
  if (diffMin > 0) {
    return `${diffMin} minute${diffMin > 1 ? 's' : ''} ago`;
  }
  
  return 'just now';
};

// Fetch a single job by ID
export const fetchJobById = async (id: string): Promise<Job | null> => {
  const { data, error } = await supabase
    .from('jobs')
    .select('*')
    .eq('id', id)
    .maybeSingle();
  
  if (error) {
    console.error('Error fetching job by ID:', error);
    return null;
  }

  if (!data) return null;

  // Transform timestamp to human-readable format
  return {
    ...data,
    requirements: Array.isArray(data.requirements) ? data.requirements : [],
    benefits: Array.isArray(data.benefits) ? data.benefits : [],
    postedAt: getTimeAgo(data.created_at)
  } as Job;
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
    
    // Prepare jobs for insertion (format timestamps appropriately)
    const formattedBatch = batch.map(job => ({
      title: job.title,
      company: job.company,
      companyLogo: job.companyLogo,
      location: job.location,
      salary: job.salary,
      jobType: job.jobType,
      category: job.category,
      description: job.description,
      requirements: job.requirements,
      benefits: job.benefits
    }));
    
    const { error } = await supabase
      .from('jobs')
      .insert(formattedBatch);
    
    if (error) {
      console.error(`Error seeding jobs batch ${i}:`, error);
    } else {
      console.log(`Successfully seeded jobs batch ${i} to ${i + batch.length - 1}`);
    }
  }
};
