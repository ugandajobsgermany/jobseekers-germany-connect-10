
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, MapPin, GraduationCap, Home, CreditCard, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const resources = [
  {
    id: 'visa',
    title: 'Visa Information',
    description: 'Everything you need to know about work visas for Germany',
    icon: FileCheck,
    color: 'text-blue-600 bg-blue-100'
  },
  {
    id: 'relocation',
    title: 'Relocation Guide',
    description: 'Step-by-step guide to relocating to Germany',
    icon: MapPin,
    color: 'text-red-600 bg-red-100'
  },
  {
    id: 'language',
    title: 'German Language',
    description: 'Resources to help you learn German for your career',
    icon: GraduationCap,
    color: 'text-green-600 bg-green-100'
  },
  {
    id: 'housing',
    title: 'Housing Guide',
    description: 'Tips for finding accommodation in German cities',
    icon: Home,
    color: 'text-purple-600 bg-purple-100'
  },
  {
    id: 'banking',
    title: 'Banking & Finance',
    description: 'Setting up your finances in Germany',
    icon: CreditCard,
    color: 'text-yellow-600 bg-yellow-100'
  },
  {
    id: 'cv',
    title: 'CV Templates',
    description: 'German-style CV and application templates',
    icon: FileText,
    color: 'text-indigo-600 bg-indigo-100'
  }
];

const ResourcesSection = () => {
  return (
    <section className="container mx-auto section-padding">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-german-dark mb-4">Helpful Resources</h2>
        <p className="text-german-muted max-w-2xl mx-auto">
          Essential guides and resources to help you navigate working and living in Germany
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <Link to={`/resources/${resource.id}`} key={resource.id}>
            <Card className="cursor-pointer card-hover h-full">
              <CardContent className="p-6">
                <div className={`p-3 rounded-lg ${resource.color} w-fit mb-4`}>
                  <resource.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg text-german-dark mb-2">{resource.title}</h3>
                <p className="text-german-muted">{resource.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Link to="/resources">
          <Button className="bg-german-primary hover:bg-german-primary/90">
            View All Resources
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ResourcesSection;
