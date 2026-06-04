import { getJobsData } from '@/lib/jobData';
import React from 'react';
// const jobsData = [
//   {
//     id: 1,
//     title: "Frontend Developer",
//     description: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
//     location: "New York, USA",
//     type: "Hybrid",
//     salary: "€25–€40/hour",
//     applyLink: "#"
//   },
//   {
//     id: 1,
//     title: "Frontend Developer",
//     description: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
//     location: "New York, USA",
//     type: "Hybrid",
//     salary: "€25–€40/hour",
//     applyLink: "#"
//   },

// ];

export default async function JobDashboard() {

    const jobsData = await getJobsData()

  return (
    <div className="flex flex-wrap justify-center items-center gap-6 min-h-screen bg-gray-950 p-6 font-sans">
      
      {jobsData.map((job) => (
        <div 
          key={job._id} 
          className="w-full max-w-sm bg-[#121212] h-full rounded-3xl p-6 text-white shadow-xl border border-neutral-800 transition-all duration-300 hover:border-neutral-700"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-50 mb-3">
            {job.title}
          </h2>
          
          <p className="text-neutral-400 text-sm leading-relaxed mb-6">
            {job.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {job.location && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900 text-xs font-medium text-neutral-200 border border-neutral-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {job.location}
              </span>
            )}

            {job.type && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900 text-xs font-medium text-neutral-200 border border-neutral-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {job.type}
              </span>
            )}

            {job.salary && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900 text-xs font-medium text-neutral-200 border border-neutral-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {job.salary}
              </span>
            )}
          </div>
          
          <a 
            href={job.applyLink} 
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-200 hover:text-white transition-colors duration-200 group mt-2"
          >
            Apply Now
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      ))}

    </div>
  );
}