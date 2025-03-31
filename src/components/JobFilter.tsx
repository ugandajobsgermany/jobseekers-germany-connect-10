
import React, { useState, useEffect } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { FilterX, Check } from 'lucide-react';

interface JobFilterProps {
  onFilterChange?: (filters: any) => void;
  initialFilters?: any;
  categories?: string[];
  jobTypes?: string[];
  experienceLevels?: string[];
  locations?: string[];
}

const JobFilter = ({ 
  onFilterChange, 
  initialFilters,
  categories = ["IT & Technology", "Engineering", "Finance", "Healthcare", "Marketing", "Education", "Sales"],
  jobTypes = ["Full-time", "Part-time", "Contract", "Internship", "Remote"],
  experienceLevels = ["Entry Level", "Mid Level", "Senior Level", "Manager", "Executive"],
  locations = ["Berlin", "Munich", "Hamburg", "Frankfurt", "Cologne", "Stuttgart", "Düsseldorf"]
}: JobFilterProps) => {
  const [filters, setFilters] = useState({
    jobTypes: [] as string[],
    experienceLevels: [] as string[],
    salary: [30000, 70000],
    postDate: 'any_time',
    locations: [] as string[],
    categories: [] as string[],
  });
  
  // Update local filters when initialFilters prop changes
  useEffect(() => {
    if (initialFilters) {
      setFilters(prevFilters => ({
        ...prevFilters,
        ...initialFilters
      }));
    }
  }, [initialFilters]);

  // Handle checkbox changes for array filter types
  const handleCheckboxChange = (filterType: 'jobTypes' | 'experienceLevels' | 'locations' | 'categories', value: string) => {
    setFilters(prevFilters => {
      const currentValues = [...prevFilters[filterType]];
      const index = currentValues.indexOf(value);
      
      if (index >= 0) {
        currentValues.splice(index, 1);
      } else {
        currentValues.push(value);
      }
      
      return {
        ...prevFilters,
        [filterType]: currentValues
      };
    });
  };
  
  // Handle slider changes for salary range
  const handleSalaryChange = (values: number[]) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      salary: values
    }));
  };
  
  // Handle select changes for date posted
  const handleDateChange = (value: string) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      postDate: value
    }));
  };
  
  const handleApplyFilters = () => {
    if (onFilterChange) {
      onFilterChange(filters);
    }
  };
  
  const handleResetFilters = () => {
    const resetFilters = {
      jobTypes: [],
      experienceLevels: [],
      salary: [30000, 70000],
      postDate: 'any_time',
      locations: [],
      categories: [],
    };
    
    setFilters(resetFilters);
    
    if (onFilterChange) {
      onFilterChange({
        ...resetFilters,
        salary: [0, 120000], // Full salary range for reset
      });
    }
  };
  
  // Format currency values for display
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0
    }).format(value);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">Filter Jobs</h2>
      
      <Accordion type="multiple" defaultValue={["category", "jobType", "salary", "experience", "postDate"]}>
        <AccordionItem value="category">
          <AccordionTrigger className="text-base font-medium">Job Category</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`category-${category}`} 
                    checked={filters.categories.includes(category)}
                    onCheckedChange={() => handleCheckboxChange('categories', category)}
                  />
                  <Label htmlFor={`category-${category}`} className="text-sm cursor-pointer">
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="jobType">
          <AccordionTrigger className="text-base font-medium">Job Type</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-2">
              {jobTypes.map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`jobType-${type}`} 
                    checked={filters.jobTypes.includes(type)}
                    onCheckedChange={() => handleCheckboxChange('jobTypes', type)}
                  />
                  <Label htmlFor={`jobType-${type}`} className="text-sm cursor-pointer">
                    {type}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="salary">
          <AccordionTrigger className="text-base font-medium">Salary Range</AccordionTrigger>
          <AccordionContent>
            <div className="pt-2">
              <Slider 
                value={filters.salary} 
                min={0} 
                max={120000} 
                step={5000} 
                onValueChange={handleSalaryChange}
              />
              <div className="flex justify-between mt-2 text-sm text-gray-500">
                <span>€0</span>
                <span>€120k+</span>
              </div>
              <div className="text-center mt-3 text-sm">
                {formatCurrency(filters.salary[0])} - {formatCurrency(filters.salary[1])}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="experience">
          <AccordionTrigger className="text-base font-medium">Experience Level</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-2">
              {experienceLevels.map((level) => (
                <div key={level} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`exp-${level}`} 
                    checked={filters.experienceLevels.includes(level)}
                    onCheckedChange={() => handleCheckboxChange('experienceLevels', level)}
                  />
                  <Label htmlFor={`exp-${level}`} className="text-sm cursor-pointer">
                    {level}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="postDate">
          <AccordionTrigger className="text-base font-medium">Date Posted</AccordionTrigger>
          <AccordionContent>
            <div className="pt-2">
              <Select 
                value={filters.postDate}
                onValueChange={handleDateChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Any time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any_time">Any time</SelectItem>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="week">Past week</SelectItem>
                  <SelectItem value="month">Past month</SelectItem>
                  <SelectItem value="quarter">Past 3 months</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="location">
          <AccordionTrigger className="text-base font-medium">Location</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-2">
              {locations.map((city) => (
                <div key={city} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`city-${city}`} 
                    checked={filters.locations.includes(city)}
                    onCheckedChange={() => handleCheckboxChange('locations', city)}
                  />
                  <Label htmlFor={`city-${city}`} className="text-sm cursor-pointer">
                    {city}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <div className="mt-6 space-y-3">
        <Button 
          onClick={handleApplyFilters}
          className="w-full bg-german-primary hover:bg-german-primary/90 flex items-center justify-center gap-2"
        >
          <Check className="h-4 w-4" />
          Apply Filters
        </Button>
        
        <Button 
          onClick={handleResetFilters}
          variant="outline" 
          className="w-full flex items-center justify-center gap-2"
        >
          <FilterX className="h-4 w-4" />
          Reset Filters
        </Button>
      </div>
    </div>
  );
};

export default JobFilter;
