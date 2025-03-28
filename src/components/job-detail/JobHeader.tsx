
import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Bookmark, Share2, MapPin, Euro, Briefcase, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface JobHeaderProps {
  job: any;
}

const JobHeader = ({ job }: JobHeaderProps) => {
  return (
    <Card className="mb-8">
      <CardContent className="p-8">
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          <div className="w-16 h-16 bg-white border rounded-lg flex items-center justify-center flex-shrink-0">
            {job.companyLogo ? (
              <img 
                src={job.companyLogo} 
                alt={`${job.company} logo`} 
                className="max-w-full max-h-full object-contain p-1" 
              />
            ) : (
              <Building className="h-8 w-8 text-gray-400" />
            )}
          </div>
          
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <h1 className="text-2xl md:text-3xl font-bold text-german-dark">{job.title}</h1>
              <div className="flex gap-2 mt-2 md:mt-0">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Bookmark className="h-4 w-4" />
                  <span className="hidden md:inline">Save</span>
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Share2 className="h-4 w-4" />
                  <span className="hidden md:inline">Share</span>
                </Button>
              </div>
            </div>
            
            <Link to={`/company/${job.company}`} className="text-lg text-german-primary font-medium hover:underline mb-4 inline-block">
              {job.company}
            </Link>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 mt-4">
              <div className="flex items-center text-german-muted">
                <MapPin className="h-5 w-5 mr-2 text-german-muted" />
                <span>{job.location}</span>
              </div>
              
              <div className="flex items-center text-german-muted">
                <Euro className="h-5 w-5 mr-2 text-german-muted" />
                <span>{job.salary}</span>
              </div>
              
              <div className="flex items-center text-german-muted">
                <Briefcase className="h-5 w-5 mr-2 text-german-muted" />
                <span>{job.jobType}</span>
              </div>
              
              <div className="flex items-center text-german-muted">
                <Clock className="h-5 w-5 mr-2 text-german-muted" />
                <span>Posted {job.postedAt}</span>
              </div>
            </div>
            
            <div className="mt-6">
              <Badge className="bg-german-light text-german-dark border-german-muted mr-2">
                {job.category}
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobHeader;
