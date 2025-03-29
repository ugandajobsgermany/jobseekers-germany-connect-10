
import React from 'react';
import { Helmet } from 'react-helmet-async';
import WebsiteSchema from './SEO/WebsiteSchema';
import OrganizationSchema from './SEO/OrganizationSchema';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  canonical?: string;
  noIndex?: boolean;
  schemaType?: 'website' | 'organization' | 'both' | 'none';
}

const SEO = ({
  title = "UgandajobsGermany - Connect with Top German Employers",
  description = "UgandajobsGermany connects Ugandan talents with top employers in Germany. Find your dream job, visa information, and relocation resources.",
  keywords = "Uganda jobs Germany, German jobs, work in Germany, Ugandan professionals, visa information, relocation to Germany",
  ogImage = "/lovable-uploads/c352d4a0-b547-4a99-ade6-3620c5333eb2.png",
  ogType = "website",
  canonical = "https://ugandajobsgermany.online",
  noIndex = false,
  schemaType = "both"
}: SEOProps) => {
  const siteTitle = title.includes("UgandajobsGermany") ? title : `${title} | UgandajobsGermany`;
  
  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{siteTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        {canonical && <link rel="canonical" href={canonical} />}
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content={ogType} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={canonical} />
        <meta property="og:site_name" content="UgandajobsGermany" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* Favicon Tags - Multiple sizes for different devices */}
        <link rel="icon" href="/custom-favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        <meta name="theme-color" content="#1e40af" />
        
        {/* No index if specified */}
        {noIndex && <meta name="robots" content="noindex, nofollow" />}
      </Helmet>

      {/* Include structured data based on schemaType prop */}
      {(schemaType === 'website' || schemaType === 'both') && <WebsiteSchema />}
      {(schemaType === 'organization' || schemaType === 'both') && <OrganizationSchema />}
    </>
  );
};

export default SEO;
