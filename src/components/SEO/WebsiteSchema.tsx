
import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Component that adds structured data (JSON-LD) for the website
 */
const WebsiteSchema = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "UgandajobsGermany",
    "url": "https://ugandajobsgermany.online",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://ugandajobsgermany.online/jobs?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "description": "UgandajobsGermany connects Ugandan talents with top employers in Germany. Find your dream job, visa information, and relocation resources."
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default WebsiteSchema;
