import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, MapPin, GraduationCap, Home, CreditCard, FileCheck, Building, FileBox, BookOpen, GraduationCap as GraduationCapIcon, Globe, LightbulbIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';

const resourceCategories = [
  {
    id: 'all',
    name: 'All Resources',
  },
  {
    id: 'visa',
    name: 'Visa & Immigration',
  },
  {
    id: 'living',
    name: 'Living in Germany',
  },
  {
    id: 'language',
    name: 'Language',
  },
  {
    id: 'career',
    name: 'Career Development',
  }
];

const resources = [
  {
    id: 'visa-guide',
    title: 'Visa Information',
    description: 'Everything you need to know about work visas for Germany, including requirements, application process, and timelines.',
    icon: FileCheck,
    color: 'text-blue-600 bg-blue-100',
    category: 'visa',
    link: '/resources/visa-guide'
  },
  {
    id: 'blue-card',
    title: 'EU Blue Card Guide',
    description: 'Comprehensive guide to the EU Blue Card - Germany\'s work permit for highly skilled professionals.',
    icon: CreditCard,
    color: 'text-blue-600 bg-blue-100',
    category: 'visa',
    link: '/resources/blue-card'
  },
  {
    id: 'relocation',
    title: 'Relocation Guide',
    description: 'Step-by-step guide to relocating to Germany, including preparation, arrival, and settling in.',
    icon: MapPin,
    color: 'text-red-600 bg-red-100',
    category: 'living',
    link: '/resources/relocation'
  },
  {
    id: 'language-courses',
    title: 'German Language Courses',
    description: 'Resources to help you learn German, including online courses, apps, and in-person classes.',
    icon: GraduationCap,
    color: 'text-green-600 bg-green-100',
    category: 'language',
    link: '/resources/language-courses'
  },
  {
    id: 'housing',
    title: 'Housing Guide',
    description: 'Tips for finding accommodation in German cities, understanding rental agreements, and tenant rights.',
    icon: Home,
    color: 'text-purple-600 bg-purple-100',
    category: 'living',
    link: '/resources/housing'
  },
  {
    id: 'banking',
    title: 'Banking & Finance',
    description: 'Setting up your finances in Germany - bank accounts, taxes, insurance, and more.',
    icon: CreditCard,
    color: 'text-yellow-600 bg-yellow-100',
    category: 'living',
    link: '/resources/banking'
  },
  {
    id: 'cv-templates',
    title: 'CV Templates',
    description: 'German-style CV and application templates optimized for the German job market.',
    icon: FileText,
    color: 'text-indigo-600 bg-indigo-100',
    category: 'career',
    link: '/resources/cv-templates'
  },
  {
    id: 'integration-courses',
    title: 'Integration Courses',
    description: 'Information about integration courses required for new residents in Germany.',
    icon: GraduationCapIcon,
    color: 'text-green-600 bg-green-100',
    category: 'language',
    link: '/resources/integration-courses'
  },
  {
    id: 'job-interview',
    title: 'Job Interview Guide',
    description: 'How to prepare for and succeed in job interviews with German companies.',
    icon: Building,
    color: 'text-blue-700 bg-blue-100',
    category: 'career',
    link: '/resources/job-interview'
  },
  {
    id: 'recognition',
    title: 'Qualification Recognition',
    description: 'Guide to getting your foreign qualifications recognized in Germany.',
    icon: FileBox,
    color: 'text-orange-600 bg-orange-100',
    category: 'career',
    link: '/resources/qualification-recognition'
  },
  {
    id: 'culture',
    title: 'German Work Culture',
    description: 'Insights into German business culture, etiquette, and workplace expectations.',
    icon: Globe,
    color: 'text-teal-600 bg-teal-100',
    category: 'career',
    link: '/resources/german-work-culture'
  },
  {
    id: 'language-tests',
    title: 'German Language Tests',
    description: 'Information about official German language tests like TestDaF, telc, and Goethe-Institut exams.',
    icon: BookOpen,
    color: 'text-green-700 bg-green-100',
    category: 'language',
    link: '/resources/language-tests'
  }
];

const ResourcesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Resources for Ugandans Moving to Germany"
        description="Comprehensive resources for Ugandans planning to relocate to Germany. Find guides on visas, housing, language learning, and more to make your transition smoother."
        keywords="Germany relocation resources, moving to Germany, visa guides, German housing, language resources, expat support Uganda"
        canonical="https://ugandajobsgermany.online/resources"
        ogType="website"
      />
      <Header />
      <main className="flex-grow">
        <section className="bg-german-primary text-white py-12">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Resources for Germany</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Everything you need to know about working and living in Germany as an international professional
            </p>
          </div>
        </section>

        <section className="container mx-auto py-12">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="flex flex-wrap justify-center">
                {resourceCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="text-base px-4 py-2">
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {resourceCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {resources
                    .filter(resource => category.id === 'all' || resource.category === category.id)
                    .map((resource) => (
                      <Link to={resource.link} key={resource.id}>
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
              </TabsContent>
            ))}
          </Tabs>
        </section>
        
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Need More Information?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Our team is here to help you with any questions about working and living in Germany.
            </p>
            <Button className="bg-german-primary hover:bg-german-primary/90">
              Contact Us
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ResourcesPage;
