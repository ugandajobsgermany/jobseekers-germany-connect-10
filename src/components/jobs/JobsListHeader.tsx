
import React from 'react';

interface JobsListHeaderProps {
  totalJobs: number;
  activeFilterCount: number;
  sortOption: string;
  onSortChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const JobsListHeader = ({ 
  totalJobs, 
  activeFilterCount,
  sortOption,
  onSortChange
}: JobsListHeaderProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex justify-between items-center flex-wrap gap-4">
      <p className="text-german-muted">
        Showing <span className="font-medium text-german-dark">{totalJobs}</span> jobs
        {activeFilterCount > 0 && (
          <span className="ml-2">
            with <span className="font-medium text-german-dark">{activeFilterCount}</span> active filters
          </span>
        )}
      </p>
      <div className="flex items-center gap-2">
        <span className="text-sm text-german-muted mr-2">Sort by:</span>
        <select 
          className="text-sm border rounded p-1"
          value={sortOption}
          onChange={onSortChange}
        >
          <option value="relevant">Most Relevant</option>
          <option value="newest">Newest</option>
          <option value="salary_high_low">Salary: High to Low</option>
          <option value="salary_low_high">Salary: Low to High</option>
        </select>
      </div>
    </div>
  );
};

export default JobsListHeader;
