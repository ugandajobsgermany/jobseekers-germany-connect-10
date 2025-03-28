
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
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-german-dark mb-3">Helpful Resources</h2>
        <p className="text-german-muted max-w-2xl mx-auto">
          Essential guides and resources to help you navigate working and living in Germany
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {resources.map((resource) => (
          <Link to={`/resources/${resource.id}`} key={resource.id}>
            <Card className="cursor-pointer card-hover h-full">
              <CardContent className="p-3">
                <div className={`p-2 rounded-lg ${resource.color} w-fit mb-2`}>
                  <resource.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-sm text-german-dark mb-1">{resource.title}</h3>
                <p className="text-german-muted text-xs">{resource.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      
      <div className="mt-8 text-center">
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
