
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Job } from '@/types/job';

interface JobListSchemaProps {
  jobs: Job[];
}

/**
 * Component that adds structured data (JSON-LD) for a list of jobs
 */
const JobListSchema = ({ jobs }: JobListSchemaProps) => {
  // Build structured data object
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": jobs.map((job, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "JobPosting",
        "title": job.title,
        "description": job.description.substring(0, 150) + '...',
        "datePosted": "2023-01-01T00:00:00Z", // Simplified date
        "hiringOrganization": {
          "@type": "Organization",
          "name": job.company,
          "logo": job.companyLogo || `https://ugandajobsgermany.online/logo-placeholder.png`
        },
        "jobLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": job.location,
            "addressCountry": "DE"
          }
        },
        "employmentType": job.jobType,
        "industry": job.category,
        "url": `https://ugandajobsgermany.online/job/${job.id}`
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default JobListSchema;
