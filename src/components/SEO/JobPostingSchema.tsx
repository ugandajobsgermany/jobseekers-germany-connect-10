
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Job } from '@/types/job';

interface JobPostingSchemaProps {
  job: Job;
}

/**
 * Component that adds structured data (JSON-LD) for job postings
 * following the schema.org JobPosting format
 */
const JobPostingSchema = ({ job }: JobPostingSchemaProps) => {
  // Extract salary range if possible
  const salaryMatch = job.salary.match(/(\d+)[k]?\s*-\s*(\d+)k?/);
  const minSalary = salaryMatch ? parseInt(salaryMatch[1]) * 1000 : null;
  const maxSalary = salaryMatch ? parseInt(salaryMatch[2]) * 1000 : null;
  
  // Format date to ISO format (simplified as we don't have actual dates)
  const datePosted = (() => {
    const currentDate = new Date();
    if (job.postedAt.includes('day')) {
      const days = parseInt(job.postedAt);
      currentDate.setDate(currentDate.getDate() - days);
    } else if (job.postedAt.includes('week')) {
      const weeks = parseInt(job.postedAt);
      currentDate.setDate(currentDate.getDate() - (weeks * 7));
    } else if (job.postedAt.includes('month')) {
      const months = parseInt(job.postedAt);
      currentDate.setMonth(currentDate.getMonth() - months);
    }
    return currentDate.toISOString();
  })();
  
  // Set validity period (30 days from posting date by default)
  const validThrough = (() => {
    const date = new Date(datePosted);
    date.setDate(date.getDate() + 30);
    return date.toISOString();
  })();

  // Build structured data object
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": job.title,
    "description": job.description,
    "datePosted": datePosted,
    "validThrough": validThrough,
    "employmentType": job.jobType,
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
    "occupationalCategory": job.category,
    "industry": job.category,
    "skills": job.requirements.join(", "),
    "jobBenefits": job.benefits.join(", ")
  };

  // Add salary if available
  if (minSalary && maxSalary) {
    Object.assign(structuredData, {
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "EUR",
        "value": {
          "@type": "QuantitativeValue",
          "minValue": minSalary,
          "maxValue": maxSalary,
          "unitText": "YEAR"
        }
      }
    });
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default JobPostingSchema;
