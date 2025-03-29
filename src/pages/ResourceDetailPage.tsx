
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import resourceData from '@/data/resourceData';
import SEO from '@/components/SEO';

const ResourceDetailPage = () => {
  const { id } = useParams();
  const resource = resourceData.find(r => r.id === id);

  if (!resource) {
    return (
      <div className="min-h-screen flex flex-col">
        <SEO 
          title="Resource Not Found"
          description="The requested resource could not be found. Browse our other resources for information on working and living in Germany."
          canonical="https://ugandajobsgermany.online/resources"
          noIndex={true}
        />
        <Header />
        <main className="flex-grow container mx-auto py-12 px-4">
          <Link to="/resources" className="inline-flex items-center text-german-primary mb-8">
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to Resources
          </Link>
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold mb-4">Resource Not Found</h1>
            <p className="mb-8">The resource you're looking for does not exist or has been moved.</p>
            <Link to="/resources">
              <Button className="bg-german-primary hover:bg-german-primary/90">
                Browse All Resources
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={`${resource.title} - UgandajobsGermany Resource`}
        description={`Detailed information about ${resource.title.toLowerCase()} for Ugandans planning to work and live in Germany.`}
        keywords={`${resource.title.toLowerCase()}, Germany resources, Ugandan professionals, ${resource.category}`}
        canonical={`https://ugandajobsgermany.online/resources/${id}`}
        ogType="article"
      />
      <Header />
      <main className="flex-grow">
        <div className="bg-german-primary text-white py-8">
          <div className="container mx-auto px-4">
            <Link to="/resources" className="inline-flex items-center text-white mb-4">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to Resources
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold">{resource.title}</h1>
          </div>
        </div>

        <div className="container mx-auto py-8 px-4">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
            <div className={`p-3 rounded-lg ${resource.iconColor} w-fit mb-6 md:mb-8`}>
              <resource.Icon className="h-8 w-8" />
            </div>

            <div className="prose max-w-none">
              {resource.content.map((section, index) => (
                <div key={index} className="mb-8">
                  {section.heading && (
                    <h2 className="text-2xl font-bold mb-4">{section.heading}</h2>
                  )}
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="mb-4">{paragraph}</p>
                  ))}
                  {section.bullets && (
                    <ul className="list-disc pl-5 mb-4">
                      {section.bullets.map((bullet, bIndex) => (
                        <li key={bIndex} className="mb-2">{bullet}</li>
                      ))}
                    </ul>
                  )}
                  {section.callout && (
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                      <p className="text-blue-700">{section.callout}</p>
                    </div>
                  )}
                </div>
              ))}

              {resource.links && (
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Useful Links</h3>
                  <ul className="list-disc pl-5">
                    {resource.links.map((link, index) => (
                      <li key={index} className="mb-2">
                        <a 
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-german-primary hover:underline"
                        >
                          {link.text}
                        </a>
                        {link.description && (
                          <span className="text-german-muted"> - {link.description}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">Related Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {resource.relatedResources && resource.relatedResources.map((relatedId) => {
                const relatedResource = resourceData.find(r => r.id === relatedId);
                if (!relatedResource) return null;
                
                return (
                  <Link 
                    to={`/resources/${relatedResource.id}`} 
                    key={relatedResource.id}
                    className="bg-white p-4 rounded shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="font-semibold mb-1">{relatedResource.title}</div>
                    <div className="text-sm text-german-muted">{relatedResource.shortDescription}</div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResourceDetailPage;
