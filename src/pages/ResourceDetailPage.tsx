
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import resourceData from '@/data/resourceData';
import { ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema';

const ResourceDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [resource, setResource] = useState(resourceData.find(r => r.id === id));
  
  useEffect(() => {
    setResource(resourceData.find(r => r.id === id));
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!resource) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow container mx-auto py-16 px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Resource Not Found</h1>
            <p className="mb-6">The resource you're looking for doesn't exist or has been moved.</p>
            <Link to="/resources" className="text-german-primary hover:underline">
              Back to Resources
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  // Get resource type/category for SEO (safely)
  const resourceType = resource.content && resource.content.length > 0 && 'type' in resource.content[0] 
    ? resource.content[0].type 
    : 'guide';
  
  // Create breadcrumb items for structured data
  const breadcrumbItems = [
    { name: 'Home', url: 'https://ugandajobsgermany.online/' },
    { name: 'Resources', url: 'https://ugandajobsgermany.online/resources' },
    { name: resource.title, url: `https://ugandajobsgermany.online/resources/${resource.id}` }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={`${resource.title} - Resources`}
        description={resource.shortDescription}
        keywords={`${resourceType}, Germany resources, Ugandan professionals, work in Germany`}
        canonical={`https://ugandajobsgermany.online/resources/${id}`}
        ogType="article"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      
      <Header />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center text-sm mb-6">
            <Link to="/" className="text-german-muted hover:text-german-primary">Home</Link>
            <ChevronRight className="h-4 w-4 mx-1 text-german-muted" />
            <Link to="/resources" className="text-german-muted hover:text-german-primary">Resources</Link>
            <ChevronRight className="h-4 w-4 mx-1 text-german-muted" />
            <span className="text-german-dark font-medium">{resource.title}</span>
          </div>

          {/* Resource Content */}
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-8">
            <h1 className="text-3xl font-bold text-german-dark mb-4">{resource.title}</h1>
            <div className="prose max-w-none">
              {/* Resource content would be rendered here */}
              <p className="text-german-muted mb-6">{resource.shortDescription}</p>
              
              {/* Render dynamic content based on resource.content array */}
            </div>
          </div>
          
          {/* Related Resources */}
          {resource.relatedResources && resource.relatedResources.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-bold text-german-dark mb-4">Related Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {resourceData
                  .filter(r => resource.relatedResources.includes(r.id))
                  .map(relatedResource => (
                    <Link 
                      key={relatedResource.id}
                      to={`/resources/${relatedResource.id}`}
                      className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <h3 className="font-semibold text-german-dark mb-2">{relatedResource.title}</h3>
                      <p className="text-sm text-german-muted">{relatedResource.shortDescription}</p>
                    </Link>
                  ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResourceDetailPage;
