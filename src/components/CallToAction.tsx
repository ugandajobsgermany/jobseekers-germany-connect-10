
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="bg-german-primary py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Find Your Next Career Opportunity?
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
          Join thousands of professionals who have found their dream jobs in Germany. Start your journey today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
          <Link to="/jobs" className="w-full sm:w-auto">
            <Button size="lg" className="w-full bg-white text-german-primary hover:bg-gray-100">
              Browse Jobs
            </Button>
          </Link>
          <Link to="/register" className="w-full sm:w-auto">
            <Button size="lg" className="w-full bg-german-secondary text-german-dark hover:bg-german-secondary/90">
              Create Account
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
