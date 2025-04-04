
import { Job } from '@/types/job';
import { itJobs } from './itJobs';
import { marketingJobs } from './marketingJobs';
import { financeJobs } from './financeJobs';
import { engineeringJobs } from './engineeringJobs';
import { hrJobs } from './hrJobs';
import { operationsJobs } from './operationsJobs';
import { salesJobs } from './salesJobs';
import { educationJobs } from './educationJobs';
import { hospitalityJobs } from './hospitalityJobs';
import { generalLaborJobs } from './generalLaborJobs';
import { careSupportJobs } from './careSupportJobs';
import { retailCustomerServiceJobs } from './retailCustomerServiceJobs';
import { hospitalityServiceJobs } from './hospitalityServiceJobs'; 
import { entryLevelJobs } from './entryLevelJobs';

// Creating a consolidated mock jobs array
export const mockJobs: Job[] = [
  ...entryLevelJobs,
  ...itJobs,
  ...marketingJobs,
  ...financeJobs,
  ...engineeringJobs,
  ...hrJobs,
  ...operationsJobs,
  ...salesJobs,
  ...educationJobs,
  ...hospitalityJobs,
  ...generalLaborJobs,
  ...careSupportJobs,
  ...retailCustomerServiceJobs,
  ...hospitalityServiceJobs
];
