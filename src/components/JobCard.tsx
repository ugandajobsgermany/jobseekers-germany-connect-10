
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, EuroIcon, Briefcase } from 'lucide-react';

interface JobCardProps {
  id: string;
  title: string;
  company: string;
  companyLogo?: string; // Changed to optional to match Job interface
  location: string;
  salary: string;
  jobType: string;
  category: string;
  postedAt: string;
  isFeatured?: boolean;
  isSaved?: boolean;
}

const JobCard = ({
  id,
  title,
  company,
  companyLogo,
  location,
  salary,
  jobType,
  category,
  postedAt,
  isFeatured = false,
  isSaved = false
}: JobCardProps) => {
  // Handle image loading errors
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = 'https://via.placeholder.com/48?text=' + company.charAt(0);
  };

  return (
    <Link to={`/job/${id}`}>
      <Card className={`cursor-pointer card-hover ${isFeatured ? 'border-german-secondary border-2' : ''}`}>
        <CardContent className="p-6">
          {isFeatured && (
            <Badge className="bg-german-secondary text-german-dark mb-3">
              Featured
            </Badge>
          )}
          
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-md overflow-hidden flex items-center justify-center">
              {companyLogo ? (
                <img 
                  src={companyLogo} 
                  alt={`${company} logo`} 
                  className="w-full h-full object-contain p-1" 
                  onError={handleImageError}
                />
              ) : (
                <Briefcase className="h-6 w-6 text-gray-400" />
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-german-dark truncate">{title}</h3>
              <p className="text-german-muted mb-2">{company}</p>
              
              <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm text-german-muted mt-3">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1 text-german-muted" />
                  <span>{location}</span>
                </div>
                
                <div className="flex items-center">
                  <EuroIcon className="h-4 w-4 mr-1 text-german-muted" />
                  <span>{salary}</span>
                </div>
                
                <div className="flex items-center">
                  <Briefcase className="h-4 w-4 mr-1 text-german-muted" />
                  <span>{jobType}</span>
                </div>
                
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1 text-german-muted" />
                  <span>{postedAt}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4">
            <Badge variant="outline" className="bg-german-light">
              {category}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default JobCard;
