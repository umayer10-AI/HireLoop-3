"use client";

import { useEffect, useState } from "react";
import { companyJobs } from "@/lib/api/jobs";

const dummyApplications = [
  {
    name: "Julianne Moore",
    role: "Senior Product Designer",
    date: "Oct 24, 2023",
    exp: "6 years",
    status: "Interviewing",
    color: "bg-green-900/30 text-green-400",
  },
  {
    name: "Robert Downey",
    role: "Backend Engineer",
    date: "Oct 23, 2023",
    exp: "4 years",
    status: "New",
    color: "bg-gray-700 text-gray-300",
  },
];

export const RecentApplications = () => {
  const [applications, setApplications] = useState(dummyApplications);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await companyJobs('haha');
        console.log(data)
        setApplications(data);
      } catch (err) {
        console.log("Error loading applications:", err);
      }
    };

    fetchData();
  }, []);
  

  return (
    <div className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800">
      <div className="flex justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">
          Recent Applications
        </h2>
        <button className="text-sm text-gray-400">View all</button>
      </div>

      <div className="grid grid-cols-5 text-gray-500 text-sm mb-4">
        <span>Candidate Name</span>
        <span>Role</span>
        <span>Date Applied</span>
        <span>Experience</span>
        <span>Status</span>
      </div>

      {applications.map((app, i) => (
        <div
          key={app._id || i}
          className="grid grid-cols-5 items-center py-4 border-t border-gray-800 text-white"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-700" />
            <span className="font-medium">{app.companyName}</span>
          </div>

          <span>{app.jobType}</span>
          <span>{app.deadline}</span>
          <span>{app.industry}</span>

          <span
            className={`px-3 py-1 rounded-full text-xs w-fit ${app.color || "bg-gray-700 text-gray-300"}`}
          >
            {app.status}
          </span>
        </div>
      ))}
    </div>
  );
};