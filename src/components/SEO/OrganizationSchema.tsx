
import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Component that adds structured data (JSON-LD) for the organization
 */
const OrganizationSchema = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "UgandajobsGermany",
    "url": "https://ugandajobsgermany.online",
    "logo": "https://ugandajobsgermany.online/lovable-uploads/c352d4a0-b547-4a99-ade6-3620c5333eb2.png",
    "description": "UgandajobsGermany connects Ugandan talents with top employers in Germany. Find your dream job, visa information, and relocation resources.",
    "sameAs": [
      "https://facebook.com/ugandajobsgermany",
      "https://twitter.com/ugandajobsgermany",
      "https://linkedin.com/company/ugandajobsgermany"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+49-000-000-0000",
      "contactType": "customer service",
      "email": "info@ugandajobsgermany.online",
      "availableLanguage": ["English", "German"]
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default OrganizationSchema;
