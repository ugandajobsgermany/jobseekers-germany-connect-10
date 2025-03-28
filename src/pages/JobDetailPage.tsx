
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JobCard from '@/components/JobCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Clock, 
  Euro, 
  Briefcase, 
  Building, 
  Share2, 
  Bookmark, 
  Calendar, 
  CheckCircle2
} from 'lucide-react';
import { mockJobs } from '@/data/mockData';

const JobDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<any | null>(null);
  
  useEffect(() => {
    // In a real app, this would be an API call
    const foundJob = mockJobs.find(job => job.id === id);
    setJob(foundJob || null);
  }, [id]);
  
  if (!job) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto py-16 text-center">
          <h1 className="text-2xl font-semibold mb-4">Job Not Found</h1>
          <p className="mb-8">The job listing you're looking for doesn't exist or has been removed.</p>
          <Link to="/jobs">
            <Button className="bg-german-primary hover:bg-german-primary/90">
              Browse All Jobs
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
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
              
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h2 className="text-xl font-semibold mb-4">Job Description</h2>
                  <p className="text-german-dark mb-6">{job.description}</p>
                  
                  <h3 className="text-lg font-semibold mb-3">Requirements</h3>
                  <ul className="list-disc pl-5 mb-6 space-y-2">
                    {job.requirements.map((req: string, index: number) => (
                      <li key={index} className="text-german-dark">{req}</li>
                    ))}
                  </ul>
                  
                  <h3 className="text-lg font-semibold mb-3">Benefits</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 mb-6">
                    {job.benefits.map((benefit: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-xl font-semibold mb-6">How to Apply</h2>
                  <p className="mb-6">
                    Ready to apply for this {job.title} position at {job.company}? Click the button below to submit your application. Make sure your resume is up to date and highlights relevant experience.
                  </p>
                  <Button size="lg" className="bg-german-primary hover:bg-german-primary/90 w-full md:w-auto">
                    Apply for this Job
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              <Card className="mb-8 sticky top-24">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Job Summary</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between border-b pb-3">
                      <span className="text-german-muted">Job ID:</span>
                      <span className="font-medium">{job.id}</span>
                    </div>
                    
                    <div className="flex justify-between border-b pb-3">
                      <span className="text-german-muted">Location:</span>
                      <span className="font-medium">{job.location}</span>
                    </div>
                    
                    <div className="flex justify-between border-b pb-3">
                      <span className="text-german-muted">Job Type:</span>
                      <span className="font-medium">{job.jobType}</span>
                    </div>
                    
                    <div className="flex justify-between border-b pb-3">
                      <span className="text-german-muted">Salary:</span>
                      <span className="font-medium">{job.salary}</span>
                    </div>
                    
                    <div className="flex justify-between border-b pb-3">
                      <span className="text-german-muted">Category:</span>
                      <span className="font-medium">{job.category}</span>
                    </div>
                    
                    <div className="flex justify-between pb-3">
                      <span className="text-german-muted">Posted:</span>
                      <span className="font-medium">{job.postedAt}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex flex-col gap-3">
                    <Button className="bg-german-primary hover:bg-german-primary/90 w-full">
                      Apply Now
                    </Button>
                    <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                      <Bookmark className="h-4 w-4" />
                      <span>Save Job</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Similar Jobs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockJobs.filter(j => j.category === job.category && j.id !== job.id)
               .slice(0, 3)
               .map(similarJob => (
                 <JobCard key={similarJob.id} {...similarJob} />
               ))
              }
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JobDetailPage;
