
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface JobsPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const JobsPagination = ({ currentPage, totalPages, onPageChange }: JobsPaginationProps) => {
  if (totalPages <= 1) return null;
  
  return (
    <div className="mt-8 flex justify-center">
      <nav className="flex items-center gap-1">
        <Button 
          variant="outline" 
          size="icon" 
          className="h-8 w-8"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        {/* Generate page buttons */}
        {Array.from({ length: Math.min(totalPages, 5) }).map((_, index) => {
          let pageNum;
          
          // Logic to show correct page numbers based on current page
          if (totalPages <= 5) {
            pageNum = index + 1;
          } else if (currentPage <= 3) {
            pageNum = index + 1;
          } else if (currentPage >= totalPages - 2) {
            pageNum = totalPages - 4 + index;
          } else {
            pageNum = currentPage - 2 + index;
          }
          
          return (
            <Button 
              key={pageNum}
              variant="outline" 
              size="sm" 
              className={`h-8 w-8 ${
                currentPage === pageNum 
                  ? 'bg-german-primary text-white hover:bg-german-primary/90' 
                  : ''
              }`}
              onClick={() => onPageChange(pageNum)}
            >
              {pageNum}
            </Button>
          );
        })}
        
        {/* Show ellipsis if there are more pages */}
        {totalPages > 5 && currentPage < totalPages - 2 && (
          <span className="mx-2">...</span>
        )}
        
        {/* Show last page if not visible in the current set */}
        {totalPages > 5 && currentPage < totalPages - 2 && (
          <Button 
            variant="outline" 
            size="sm" 
            className="h-8 w-8"
            onClick={() => onPageChange(totalPages)}
          >
            {totalPages}
          </Button>
        )}
        
        <Button 
          variant="outline" 
          size="icon" 
          className="h-8 w-8"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </nav>
    </div>
  );
};

export default JobsPagination;
