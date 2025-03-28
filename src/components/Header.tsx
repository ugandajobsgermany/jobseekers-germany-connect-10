
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, User, BriefcaseBusiness } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <BriefcaseBusiness className="h-8 w-8 text-german-primary" />
            <span className="text-xl font-bold text-german-primary">JobseekerGermany</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-german-dark hover:text-german-primary font-medium">
              Home
            </Link>
            <Link to="/jobs" className="text-german-dark hover:text-german-primary font-medium">
              Browse Jobs
            </Link>
            <Link to="/about" className="text-german-dark hover:text-german-primary font-medium">
              About Us
            </Link>
            <Link to="/resources" className="text-german-dark hover:text-german-primary font-medium">
              Resources
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>Login</span>
            </Button>
            <Link to="/post-job">
              <Button className="bg-german-primary hover:bg-german-primary/90" size="sm">
                Post a Job
              </Button>
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-german-dark p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white p-4 shadow-md animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-german-dark hover:text-german-primary font-medium py-2 px-4">
              Home
            </Link>
            <Link to="/jobs" className="text-german-dark hover:text-german-primary font-medium py-2 px-4">
              Browse Jobs
            </Link>
            <Link to="/about" className="text-german-dark hover:text-german-primary font-medium py-2 px-4">
              About Us
            </Link>
            <Link to="/resources" className="text-german-dark hover:text-german-primary font-medium py-2 px-4">
              Resources
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" className="w-full justify-start">
                <User className="h-4 w-4 mr-2" />
                Login
              </Button>
              <Link to="/post-job" className="w-full">
                <Button className="bg-german-primary hover:bg-german-primary/90 w-full justify-start">
                  Post a Job
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
