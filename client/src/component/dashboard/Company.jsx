import React from 'react';
import { MapPin, Users, Globe } from 'lucide-react';

// তোমার কোম্পানির ডেটা এখানে
const companies = [
  {
    name: 'Vercel',
    category: 'Technology',
    description: 'Vercel is the platform for frontend developers, providing speed and reliability.',
    location: 'San Francisco',
    range: '201-500 range',
    status: 'Pending'
  },
  {
    name: 'Figma',
    category: 'Technology',
    description: 'Figma is the collaborative interface design tool — design, prototype, and gather feedback.',
    location: 'San Francisco',
    range: '501-1000 range',
    status: 'Approved'
  },
  {
    name: 'Enosis Solutions',
    category: 'Technology',
    description: 'ENOSIS - Your trusted Software Development Partner. A top tier software development team.',
    location: 'Dhaka, Bangladesh',
    range: '51-200 range',
    status: 'Pending'
  }
];

// মেইন কম্পোনেন্ট
export const MyCompanies = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {companies.map((company, index) => (
        <div key={index} className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800">
          {/* Header */}
          <div className="flex justify-between items-start mb-4">
            <div className="flex gap-3">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-white font-bold">
                {company.name[0]}
              </div>
              <div>
                <h3 className="text-white font-semibold">{company.name}</h3>
                <p className="text-gray-500 text-sm">{company.category}</p>
              </div>
            </div>
            {/* Status Badge */}
            <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider border rounded ${
              company.status === 'Approved' ? 'text-green-400 border-green-900 bg-green-900/20' : 'text-amber-400 border-amber-900 bg-amber-900/20'
            }`}>
              {company.status}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm mb-6 h-12 line-clamp-3">
            {company.description}
          </p>

          {/* Footer Metrics */}
          <div className="border-t border-gray-800 pt-4 space-y-3">
            <div className="flex gap-4 text-gray-500 text-xs">
              <div className="flex items-center gap-1.5"><MapPin size={14} /> {company.location}</div>
              <div className="flex items-center gap-1.5"><Users size={14} /> {company.range}</div>
            </div>
            <button className="flex items-center gap-2 text-white text-xs hover:text-gray-300">
              <Globe size={14} /> Visit Website
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};