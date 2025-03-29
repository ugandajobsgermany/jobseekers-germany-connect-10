
import { itJobs } from './itJobs';
import { marketingJobs } from './marketingJobs';
import { financeJobs } from './financeJobs';
import { engineeringJobs } from './engineeringJobs';
import { hospitalityJobs } from './hospitalityJobs'; 
import { salesJobs } from './salesJobs';
import { educationJobs } from './educationJobs';
import { operationsJobs } from './operationsJobs';
import { hrJobs } from './hrJobs';
import { Job } from '@/types/job';

// Combine all job categories into a single array
export const mockJobs: Job[] = [
  ...itJobs,
  ...marketingJobs,
  ...financeJobs,
  ...engineeringJobs,
  ...hospitalityJobs,
  ...salesJobs,
  ...educationJobs,
  ...operationsJobs,
  ...hrJobs
];
