
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const companies = [
  {
    id: 1,
    name: 'Deutsche Bank',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Deutsche_Bank_logo_without_wordmark.svg',
    jobCount: 34,
    industry: 'Finance'
  },
  {
    id: 2,
    name: 'Siemens',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg',
    jobCount: 47,
    industry: 'Engineering'
  },
  {
    id: 3,
    name: 'SAP',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg',
    jobCount: 52,
    industry: 'Technology'
  },
  {
    id: 4,
    name: 'BMW Group',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/BMW_logo_%28gray%29.svg',
    jobCount: 28,
    industry: 'Automotive'
  },
  {
    id: 5,
    name: 'Allianz',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Allianz_logo.svg',
    jobCount: 19,
    industry: 'Insurance'
  }
];

const CompanySection = () => {
  // Handle image loading errors with a more robust fallback
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const initial = e.currentTarget.alt.charAt(0).toUpperCase();
    e.currentTarget.src = `https://ui-avatars.com/api/?name=${initial}&background=607d8b&color=ffffff&size=48`;
  };

  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-german-dark mb-1">Top Companies Hiring</h2>
            <p className="text-german-muted text-sm">Find jobs in leading German companies</p>
          </div>
          <Link to="/companies">
            <Button variant="outline" className="hidden md:flex items-center gap-2 text-sm py-1 px-3 h-8">
              <span>View All Companies</span>
              <ArrowRight className="h-3 w-3" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {companies.map((company) => (
            <Link to={`/company/${company.id}`} key={company.id}>
              <Card className="cursor-pointer card-hover h-full border-none shadow-none">
                <CardContent className="p-3 flex flex-col items-center text-center">
                  <div className="h-12 w-12 mb-2 flex items-center justify-center">
                    {company.logo ? (
                      <img 
                        src={company.logo} 
                        alt={`${company.name} logo`} 
                        className="max-h-full max-w-full object-contain" 
                        onError={handleImageError}
                        loading="lazy"
                      />
                    ) : (
                      <Building className="h-8 w-8 text-gray-400" />
                    )}
                  </div>
                  <h3 className="font-semibold text-sm text-german-dark">{company.name}</h3>
                  <p className="text-german-muted mt-0.5 text-xs">{company.industry}</p>
                  <p className="text-xs mt-1.5 text-german-primary font-medium">
                    {company.jobCount} Open Jobs
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="mt-6 flex justify-center md:hidden">
          <Link to="/companies">
            <Button className="bg-german-primary hover:bg-german-primary/90 text-sm py-1 px-3 h-8">
              View All Companies
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
