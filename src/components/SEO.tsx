
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  canonical?: string;
  noIndex?: boolean;
}

const SEO = ({
  title = "UgandajobsGermany - Connect with Top German Employers",
  description = "UgandajobsGermany connects Ugandan talents with top employers in Germany. Find your dream job, visa information, and relocation resources.",
  keywords = "Uganda jobs Germany, German jobs, work in Germany, Ugandan professionals, visa information, relocation to Germany",
  ogImage = "/lovable-uploads/c352d4a0-b547-4a99-ade6-3620c5333eb2.png",
  ogType = "website",
  canonical = "https://ugandajobsgermany.online",
  noIndex = false
}: SEOProps) => {
  const siteTitle = title.includes("UgandajobsGermany") ? title : `${title} | UgandajobsGermany`;
  
  return (
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
      
      {/* No index if specified */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
    </Helmet>
  );
};

export default SEO;
