
import { supabase } from '@/integrations/supabase/client';
import { mockJobs } from '@/data/jobs';

// Helper function to generate a random date within the last 90 days
const generateRandomDate = (): string => {
  const now = new Date();
  const daysAgo = Math.floor(Math.random() * 90);
  const randomDate = new Date(now.getTime() - (daysAgo * 24 * 60 * 60 * 1000));
  return randomDate.toISOString();
};

// Migration function for companies
export const migrateCompanies = async () => {
  console.log('Starting companies migration...');
  
  // Extract unique companies from mock jobs
  const companiesMap = new Map();
  
  mockJobs.forEach(job => {
    if (!companiesMap.has(job.company)) {
      companiesMap.set(job.company, {
        name: job.company,
        logo_url: job.companyLogo || null,
        location: job.location,
        industry: job.category,
        description: `${job.company} is a leading company in ${job.category}.`,
        size_range: Math.random() > 0.5 ? '50-200 employees' : '200+ employees',
        website: `https://${job.company.toLowerCase().replace(/\s+/g, '')}.com`
      });
    }
  });

  const companies = Array.from(companiesMap.values());
  
  const { data, error } = await supabase
    .from('companies')
    .insert(companies)
    .select();

  if (error) {
    console.error('Error migrating companies:', error);
    throw error;
  }

  console.log(`Successfully migrated ${companies.length} companies`);
  return data;
};

// Migration function for jobs
export const migrateJobs = async () => {
  console.log('Starting jobs migration...');
  
  // First get all companies to map names to IDs
  const { data: companies, error: companiesError } = await supabase
    .from('companies')
    .select('id, name');

  if (companiesError) {
    console.error('Error fetching companies:', companiesError);
    throw companiesError;
  }

  const companyMap = new Map(companies?.map(c => [c.name, c.id]) || []);
  
  // Transform mock jobs to database format
  const jobsToInsert = mockJobs.map(job => ({
    title: job.title,
    company: job.company,
    company_id: companyMap.get(job.company) || null,
    company_logo: job.companyLogo || null,
    location: job.location,
    salary: job.salary,
    job_type: job.jobType,
    category: job.category,
    description: job.description,
    requirements: job.requirements || [],
    benefits: job.benefits || [],
    posted_at: generateRandomDate(),
    status: 'active',
    is_featured: job.isFeatured || Math.random() > 0.8, // 20% chance to be featured if not specified
    is_remote: job.isRemote || Math.random() > 0.7, // 30% chance to be remote if not specified
    experience_level: job.experienceLevel || (Math.random() > 0.5 ? 'Entry Level' : 'Mid Level'),
    views: Math.floor(Math.random() * 1000)
  }));

  // Insert jobs in batches to avoid timeout
  const batchSize = 50;
  const batches = [];
  
  for (let i = 0; i < jobsToInsert.length; i += batchSize) {
    batches.push(jobsToInsert.slice(i, i + batchSize));
  }

  let totalInserted = 0;
  
  for (const batch of batches) {
    const { data, error } = await supabase
      .from('jobs')
      .insert(batch)
      .select();

    if (error) {
      console.error('Error migrating jobs batch:', error);
      throw error;
    }

    totalInserted += batch.length;
    console.log(`Migrated batch: ${totalInserted}/${jobsToInsert.length} jobs`);
  }

  console.log(`Successfully migrated ${totalInserted} jobs`);
  return totalInserted;
};

// Migration function for testimonials
export const migrateTestimonials = async () => {
  console.log('Starting testimonials migration...');
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Developer",
      company: "Tech Solutions GmbH",
      content: "Uganda Jobs Germany helped me find my dream job in Berlin. The platform is user-friendly and the job listings are always up-to-date.",
      rating: 5,
      is_featured: true,
      is_approved: true,
      avatar_url: "https://images.unsplash.com/photo-1494790108755-2616b612b1c5?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "James Mukasa",
      role: "Mechanical Engineer",
      company: "BMW Group",
      content: "Thanks to this platform, I secured a position at BMW. The visa guidance was particularly helpful throughout the process.",
      rating: 5,
      is_featured: true,
      is_approved: true,
      avatar_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Grace Nakamura",
      role: "Nurse",
      company: "University Hospital Munich",
      content: "The healthcare job opportunities here are amazing. I found a nursing position that sponsors my visa. Highly recommended!",
      rating: 5,
      is_featured: true,
      is_approved: true,
      avatar_url: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "David Ssekandi",
      role: "Project Manager",
      company: "Siemens AG",
      content: "Professional growth opportunities in Germany are incredible. This platform connected me with the right employer.",
      rating: 5,
      is_featured: false,
      is_approved: true,
      avatar_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const { data, error } = await supabase
    .from('testimonials')
    .insert(testimonials)
    .select();

  if (error) {
    console.error('Error migrating testimonials:', error);
    throw error;
  }

  console.log(`Successfully migrated ${testimonials.length} testimonials`);
  return data;
};

// Migration function for resources
export const migrateResources = async () => {
  console.log('Starting resources migration...');
  
  // First get resource categories
  const { data: categories, error: categoriesError } = await supabase
    .from('resource_categories')
    .select('id, name, slug');

  if (categoriesError) {
    console.error('Error fetching resource categories:', categoriesError);
    throw categoriesError;
  }

  const categoryMap = new Map(categories?.map(c => [c.slug, c.id]) || []);
  
  const resources = [
    {
      title: "Complete Guide to German Work Visa",
      slug: "complete-guide-german-work-visa",
      content: "This comprehensive guide covers everything you need to know about obtaining a work visa for Germany...",
      excerpt: "Learn about different types of German work visas and application requirements.",
      category_id: categoryMap.get('visa-info'),
      is_published: true,
      is_featured: true,
      read_time: 15,
      meta_title: "German Work Visa Guide 2024 - Complete Application Process",
      meta_description: "Complete guide to German work visa application process, requirements, and tips for success.",
      published_at: new Date().toISOString()
    },
    {
      title: "Finding Accommodation in German Cities",
      slug: "finding-accommodation-german-cities",
      content: "Housing search in Germany can be challenging. Here's your complete guide to finding the perfect place...",
      excerpt: "Tips and strategies for finding rental accommodation in major German cities.",
      category_id: categoryMap.get('housing-relocation'),
      is_published: true,
      is_featured: true,
      read_time: 12,
      meta_title: "Finding Accommodation in Germany - Housing Guide 2024",
      meta_description: "Complete guide to finding rental accommodation in German cities with practical tips.",
      published_at: new Date().toISOString()
    },
    {
      title: "Essential German Phrases for Work",
      slug: "essential-german-phrases-work",
      content: "Master these essential German phrases to communicate effectively in your German workplace...",
      excerpt: "Key German phrases every professional should know for workplace communication.",
      category_id: categoryMap.get('german-language'),
      is_published: true,
      is_featured: false,
      read_time: 8,
      meta_title: "Essential German Phrases for Work - Professional Communication",
      meta_description: "Learn essential German phrases for professional workplace communication.",
      published_at: new Date().toISOString()
    }
  ];

  const { data, error } = await supabase
    .from('resources')
    .insert(resources)
    .select();

  if (error) {
    console.error('Error migrating resources:', error);
    throw error;
  }

  console.log(`Successfully migrated ${resources.length} resources`);
  return data;
};

// Main migration function
export const runFullMigration = async () => {
  try {
    console.log('Starting full data migration...');
    
    // Run migrations in order
    await migrateCompanies();
    await migrateJobs();
    await migrateTestimonials();
    await migrateResources();
    
    console.log('Full migration completed successfully!');
  } catch (error) {
    console.error('Migration failed:', error);
    throw error;
  }
};
