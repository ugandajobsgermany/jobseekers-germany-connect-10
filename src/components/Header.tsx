
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from '@/components/ui/sheet';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-german-primary">UgandajobsGermany</span>
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
            {user ? (
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center gap-2"
                onClick={handleSignOut}
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </Button>
            ) : (
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center gap-1"
                onClick={() => navigate('/auth')}
              >
                <User className="h-4 w-4" />
                <span>Login</span>
              </Button>
            )}
          </div>
          
          <div className="md:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-german-dark">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>UgandajobsGermany</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 mt-8">
                  <Link to="/" className="text-german-dark hover:text-german-primary font-medium py-2">
                    Home
                  </Link>
                  <Link to="/jobs" className="text-german-dark hover:text-german-primary font-medium py-2">
                    Browse Jobs
                  </Link>
                  <Link to="/about" className="text-german-dark hover:text-german-primary font-medium py-2">
                    About Us
                  </Link>
                  <Link to="/resources" className="text-german-dark hover:text-german-primary font-medium py-2">
                    Resources
                  </Link>
                  <div className="pt-2">
                    {user ? (
                      <Button 
                        variant="outline" 
                        className="w-full justify-start"
                        onClick={handleSignOut}
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Logout
                      </Button>
                    ) : (
                      <Button 
                        variant="outline" 
                        className="w-full justify-start"
                        onClick={() => navigate('/auth')}
                      >
                        <User className="h-4 w-4 mr-2" />
                        Login
                      </Button>
                    )}
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
