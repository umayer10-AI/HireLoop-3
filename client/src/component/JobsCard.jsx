import { getJobsData } from '@/lib/jobData';
import React from 'react';
import Jobs from './Jobs';

export default async function JobDashboard() {
  const jobsData = await getJobsData();

  return (
    <div>
      <Jobs jobsData={jobsData}></Jobs>
    </div>
  );
}