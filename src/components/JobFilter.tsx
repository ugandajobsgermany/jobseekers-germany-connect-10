
import React from 'react';
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

interface JobFilterProps {
  onFilterChange?: (filters: any) => void;
}

const JobFilter = ({ onFilterChange }: JobFilterProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">Filter Jobs</h2>
      
      <Accordion type="multiple" defaultValue={["category", "jobType", "salary", "experience", "postDate"]}>
        <AccordionItem value="category">
          <AccordionTrigger className="text-base font-medium">Job Category</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-2">
              {["IT & Technology", "Engineering", "Finance", "Healthcare", "Marketing", "Education", "Sales"].map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox id={`category-${category}`} />
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
              {["Full-time", "Part-time", "Contract", "Internship", "Remote"].map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox id={`jobType-${type}`} />
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
              <Slider defaultValue={[30000, 70000]} min={0} max={120000} step={5000} />
              <div className="flex justify-between mt-2 text-sm text-gray-500">
                <span>€0</span>
                <span>€120k+</span>
              </div>
              <div className="text-center mt-3 text-sm">
                €30,000 - €70,000
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="experience">
          <AccordionTrigger className="text-base font-medium">Experience Level</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-2">
              {["Entry Level", "Mid Level", "Senior Level", "Manager", "Executive"].map((level) => (
                <div key={level} className="flex items-center space-x-2">
                  <Checkbox id={`exp-${level}`} />
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
              <Select>
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
              {["Berlin", "Munich", "Hamburg", "Frankfurt", "Cologne", "Stuttgart", "Düsseldorf"].map((city) => (
                <div key={city} className="flex items-center space-x-2">
                  <Checkbox id={`city-${city}`} />
                  <Label htmlFor={`city-${city}`} className="text-sm cursor-pointer">
                    {city}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default JobFilter;
