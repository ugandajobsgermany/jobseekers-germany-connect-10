
import { supabase } from '@/integrations/supabase/client';
import { mockJobs } from '@/data/jobs';

// Company data to be migrated
const companies = [
  {
    name: 'SAP SE',
    logo_url: '/lovable-uploads/c352d4a0-b547-4a99-ade6-3620c5333eb2.png',
    description: 'Enterprise software company',
    website: 'https://sap.com',
    location: 'Walldorf',
    industry: 'Technology',
    size_range: '100,000+'
  },
  {
    name: 'Siemens AG',
    logo_url: null,
    description: 'Industrial manufacturing company',
    website: 'https://siemens.com',
    location: 'Munich',
    industry: 'Manufacturing',
    size_range: '50,000-100,000'
  },
  {
    name: 'Deutsche Bank',
    logo_url: null,
    description: 'Investment bank and financial services company',
    website: 'https://db.com',
    location: 'Frankfurt',
    industry: 'Finance',
    size_range: '50,000-100,000'
  },
  {
    name: 'BMW Group',
    logo_url: null,
    description: 'Luxury vehicle manufacturer',
    website: 'https://bmw.com',
    location: 'Munich',
    industry: 'Automotive',
    size_range: '100,000+'
  },
  {
    name: 'Volkswagen AG',
    logo_url: null,
    description: 'Automotive manufacturer',
    website: 'https://volkswagen.com',
    location: 'Wolfsburg',
    industry: 'Automotive',
    size_range: '500,000+'
  }
];

// Testimonials data to be migrated
const testimonials = [
  {
    name: 'Sarah Namukasa',
    role: 'Software Engineer',
    company: 'SAP SE',
    avatar_url: null,
    content: 'UgandaJobsGermany helped me land my dream job at SAP. The visa support was incredible!',
    rating: 5,
    is_featured: true,
    is_approved: true
  },
  {
    name: 'David Okello',
    role: 'Manufacturing Technician',
    company: 'Siemens AG',
    avatar_url: null,
    content: 'From Kampala to Munich - this platform made my German career journey smooth and successful.',
    rating: 5,
    is_featured: true,
    is_approved: true
  },
  {
    name: 'Grace Acheng',
    role: 'Financial Analyst',
    company: 'Deutsche Bank',
    avatar_url: null,
    content: 'The job matching was perfect. I found exactly what I was looking for in Frankfurt.',
    rating: 5,
    is_featured: false,
    is_approved: true
  },
  {
    name: 'John Wasswa',
    role: 'Automotive Engineer',
    company: 'BMW Group',
    avatar_url: null,
    content: 'Amazing platform! Got my work visa and job offer within 3 months.',
    rating: 5,
    is_featured: false,
    is_approved: true
  },
  {
    name: 'Mary Nalongo',
    role: 'Quality Control Specialist',
    company: 'Volkswagen AG',
    avatar_url: null,
    content: 'Professional service and excellent job matching. Highly recommended!',
    rating: 5,
    is_featured: false,
    is_approved: true
  },
  {
    name: 'Peter Kiprotich',
    role: 'IT Support Specialist',
    company: 'Various Tech Companies',
    avatar_url: null,
    content: 'Found multiple job opportunities. The platform really understands the German job market.',
    rating: 5,
    is_featured: false,
    is_approved: true
  }
];

// Resources data to be migrated
const resources = [
  {
    title: 'Complete Guide to German Work Visas',
    slug: 'german-work-visa-guide',
    content: 'A comprehensive guide to obtaining work visas for Germany, including requirements, application process, and timelines.',
    excerpt: 'Everything you need to know about German work visas for Ugandans.',
    category_slug: 'visa-info',
    meta_title: 'German Work Visa Guide for Ugandans',
    meta_description: 'Complete guide to German work visas for Ugandans including requirements and application process.',
    is_published: true,
    is_featured: true,
    read_time: 15
  },
  {
    title: 'Finding Accommodation in Germany',
    slug: 'finding-accommodation-germany',
    content: 'A detailed guide on finding and securing accommodation in Germany, from temporary housing to permanent rentals.',
    excerpt: 'Tips and strategies for finding housing in German cities.',
    category_slug: 'housing-relocation',
    meta_title: 'Finding Accommodation in Germany',
    meta_description: 'Guide to finding and securing accommodation in Germany for international workers.',
    is_published: true,
    is_featured: true,
    read_time: 12
  },
  {
    title: 'Learning German: Essential Language Skills',
    slug: 'learning-german-essential-skills',
    content: 'Essential German language skills needed for working and living in Germany, with practical tips and resources.',
    excerpt: 'Master essential German language skills for professional success.',
    category_slug: 'german-language',
    meta_title: 'Learning German for Work',
    meta_description: 'Essential German language skills for working professionals in Germany.',
    is_published: true,
    is_featured: false,
    read_time: 10
  }
];

export const migrateCompanies = async () => {
  try {
    console.log('Migrating companies...');
    const { data, error } = await supabase
      .from('companies')
      .insert(companies)
      .select();
    
    if (error) throw error;
    console.log('Companies migrated successfully:', data?.length);
    return data;
  } catch (error) {
    console.error('Error migrating companies:', error);
    throw error;
  }
};

export const migrateTestimonials = async () => {
  try {
    console.log('Migrating testimonials...');
    const { data, error } = await supabase
      .from('testimonials')
      .insert(testimonials)
      .select();
    
    if (error) throw error;
    console.log('Testimonials migrated successfully:', data?.length);
    return data;
  } catch (error) {
    console.error('Error migrating testimonials:', error);
    throw error;
  }
};

export const migrateResources = async () => {
  try {
    console.log('Migrating resources...');
    
    // First get category IDs
    const { data: categories, error: categoriesError } = await supabase
      .from('resource_categories')
      .select('id, slug');
    
    if (categoriesError) throw categoriesError;
    
    // Map resources to include category_id
    const resourcesWithCategoryIds = resources.map(resource => {
      const category = categories?.find(cat => cat.slug === resource.category_slug);
      const { category_slug, ...resourceData } = resource;
      return {
        ...resourceData,
        category_id: category?.id,
        published_at: new Date().toISOString()
      };
    });
    
    const { data, error } = await supabase
      .from('resources')
      .insert(resourcesWithCategoryIds)
      .select();
    
    if (error) throw error;
    console.log('Resources migrated successfully:', data?.length);
    return data;
  } catch (error) {
    console.error('Error migrating resources:', error);
    throw error;
  }
};

export const migrateJobs = async () => {
  try {
    console.log('Migrating jobs...');
    
    // First get company IDs for mapping
    const { data: companies, error: companiesError } = await supabase
      .from('companies')
      .select('id, name');
    
    if (companiesError) throw companiesError;
    
    // Transform mock jobs to match database schema
    const jobsToInsert = mockJobs.slice(0, 50).map(job => {
      // Try to match company name
      const company = companies?.find(comp => comp.name === job.company);
      
      return {
        title: job.title,
        company: job.company,
        company_logo: job.companyLogo,
        location: job.location,
        salary: job.salary,
        job_type: job.jobType,
        category: job.category,
        description: job.description,
        requirements: job.requirements,
        benefits: job.benefits,
        is_featured: job.isFeatured || false,
        company_id: company?.id || null,
        status: 'active',
        posted_at: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
        is_remote: job.jobType === 'Remote' || false,
        experience_level: 'Entry Level'
      };
    });
    
    const { data, error } = await supabase
      .from('jobs')
      .insert(jobsToInsert)
      .select();
    
    if (error) throw error;
    console.log('Jobs migrated successfully:', data?.length);
    return data;
  } catch (error) {
    console.error('Error migrating jobs:', error);
    throw error;
  }
};

export const runFullMigration = async () => {
  try {
    console.log('Starting full data migration...');
    
    await migrateCompanies();
    await migrateTestimonials();
    await migrateResources();
    await migrateJobs();
    
    console.log('Full migration completed successfully!');
  } catch (error) {
    console.error('Migration failed:', error);
    throw error;
  }
};
