
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

// Sort jobs based on selected option
export const sortJobs = (jobs: Job[], sortOption: string): Job[] => {
  const sorted = [...jobs];
  
  switch (sortOption) {
    case 'newest':
      // Simple sorting by "postedAt" text (in a real app, would use actual dates)
      return sorted.sort((a, b) => {
        if (a.postedAt.includes('hour') && !b.postedAt.includes('hour')) return -1;
        if (!a.postedAt.includes('hour') && b.postedAt.includes('hour')) return 1;
        const daysA = parseInt(a.postedAt.match(/\d+/)?.[0] || '999');
        const daysB = parseInt(b.postedAt.match(/\d+/)?.[0] || '999');
        return daysA - daysB;
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
