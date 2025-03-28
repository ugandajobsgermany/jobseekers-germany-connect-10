
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const JobNotFound = () => {
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
};

export default JobNotFound;
