
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search } from 'lucide-react';

const SearchBar = ({ onSearch }: { onSearch?: (criteria: any) => void }) => {
  const [keywords, setKeywords] = useState('');
  const [location, setLocation] = useState('any');
  const [category, setCategory] = useState('all');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({
        keywords,
        location,
        category
      });
    }
  };
  
  return (
    <form 
      onSubmit={handleSearch}
      className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-2">
          <Label htmlFor="keywords" className="mb-1 block">Keywords</Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              id="keywords"
              placeholder="Job title, skills, or company"
              className="pl-10"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
            />
          </div>
        </div>
        
        <div>
          <Label htmlFor="location" className="mb-1 block">Location</Label>
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger id="location">
              <SelectValue placeholder="Any Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Location</SelectItem>
              <SelectItem value="berlin">Berlin</SelectItem>
              <SelectItem value="munich">Munich</SelectItem>
              <SelectItem value="hamburg">Hamburg</SelectItem>
              <SelectItem value="frankfurt">Frankfurt</SelectItem>
              <SelectItem value="cologne">Cologne</SelectItem>
              <SelectItem value="stuttgart">Stuttgart</SelectItem>
              <SelectItem value="dusseldorf">Düsseldorf</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="category" className="mb-1 block">Category</Label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger id="category">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="it">IT & Technology</SelectItem>
              <SelectItem value="engineering">Engineering</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="healthcare">Healthcare</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
              <SelectItem value="education">Education</SelectItem>
              <SelectItem value="sales">Sales</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="mt-6 flex justify-center">
        <Button 
          type="submit" 
          className="bg-german-primary hover:bg-german-primary/90 px-8"
        >
          Find Jobs
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;
