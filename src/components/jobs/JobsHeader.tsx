
import React from 'react';
import SearchBar from '@/components/SearchBar';
import { SearchCriteria } from '@/hooks/useJobsData';

interface JobsHeaderProps {
  onSearch: (criteria: SearchCriteria) => void;
  initialValues: SearchCriteria;
}

const JobsHeader = ({ onSearch, initialValues }: JobsHeaderProps) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-german-dark mb-4">Find Your Perfect Job</h1>
      <SearchBar onSearch={onSearch} initialValues={initialValues} />
    </div>
  );
};

export default JobsHeader;
