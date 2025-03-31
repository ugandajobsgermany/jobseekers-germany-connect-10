
import React from 'react';
import { Button } from '@/components/ui/button';
import { ListFilter, X } from 'lucide-react';

interface MobileFilterToggleProps {
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
  activeFilterCount: number;
}

const MobileFilterToggle = ({ 
  showFilters, 
  setShowFilters, 
  activeFilterCount 
}: MobileFilterToggleProps) => {
  return (
    <Button 
      className="md:hidden mb-4 flex items-center gap-2"
      onClick={() => setShowFilters(!showFilters)}
      variant="outline"
    >
      {showFilters ? (
        <>
          <X className="h-4 w-4" />
          <span>Hide Filters</span>
        </>
      ) : (
        <>
          <ListFilter className="h-4 w-4" />
          <span>Show Filters</span>
          {activeFilterCount > 0 && (
            <span className="ml-1 inline-flex items-center justify-center w-5 h-5 text-xs bg-german-primary text-white rounded-full">
              {activeFilterCount}
            </span>
          )}
        </>
      )}
    </Button>
  );
};

export default MobileFilterToggle;
