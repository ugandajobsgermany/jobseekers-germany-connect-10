
import { Job } from '@/types/job';

// Extract average salary from salary string
const extractAvgSalary = (salaryStr: string): number => {
  const matches = salaryStr.match(/\d+,\d+/g);
  if (!matches || matches.length === 0) return 0;
  const sum = matches.reduce((acc, curr) => {
    return acc + parseInt(curr.replace(',', ''));
  }, 0);
  return sum / matches.length;
};

// Convert posted time string to sortable value (in days)
export const getPostDays = (postedString: string): number => {
  if (postedString.includes('hour')) {
    return 0;
  } else if (postedString.includes('day')) {
    return parseInt(postedString.split(' ')[0]);
  } else if (postedString.includes('week')) {
    return parseInt(postedString.split(' ')[0]) * 7;
  } else if (postedString.includes('month')) {
    return parseInt(postedString.split(' ')[0]) * 30;
  }
  return 999; // Default for unknown format
};

// Sort jobs based on selected option
export const sortJobs = (jobs: Job[], sortOption: string): Job[] => {
  const sorted = [...jobs];
  
  switch (sortOption) {
    case 'newest':
      // Sort by post date (lowest days = newest)
      return sorted.sort((a, b) => {
        const daysA = getPostDays(a.postedAt);
        const daysB = getPostDays(b.postedAt);
        return daysA - daysB;
      });

    case 'oldest':
      // Sort by post date (highest days = oldest)
      return sorted.sort((a, b) => {
        const daysA = getPostDays(a.postedAt);
        const daysB = getPostDays(b.postedAt);
        return daysB - daysA;
      });
      
    case 'salary_high_low':
      return sorted.sort((a, b) => {
        const avgA = extractAvgSalary(a.salary);
        const avgB = extractAvgSalary(b.salary);
        return avgB - avgA;
      });
      
    case 'salary_low_high':
      return sorted.sort((a, b) => {
        const avgA = extractAvgSalary(a.salary);
        const avgB = extractAvgSalary(b.salary);
        return avgA - avgB;
      });
      
    default: // 'relevant' - default sorting
      return sorted;
  }
};
