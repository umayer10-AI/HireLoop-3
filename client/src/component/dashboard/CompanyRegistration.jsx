"use client"
import React, { useState } from 'react';
import { X, Upload, Plus } from 'lucide-react';

const RegisterCompanyModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
      >
        <Plus size={16} />
        Register a company
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-[#1a1a1a] text-white w-full max-w-lg rounded-xl p-6 relative shadow-2xl">
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-semibold">Register New Company</h2>
                <p className="text-gray-400 text-sm mt-1">Enter your business details to start hiring on HireLoop.</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                <X size={24} />
              </button>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm">Company Name</label>
                <input type="text" placeholder="e.g. Acme Corp" className="w-full bg-[#2a2a2a] p-3 rounded-lg border border-gray-700 focus:outline-none" />
              </div>
              <div className="space-y-1">
                <label className="text-sm">Industry / Category</label>
                <select className="w-full bg-[#2a2a2a] p-3 rounded-lg border border-gray-700">
                  <option>Technology</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-sm">Website URL</label>
                <div className="flex bg-[#2a2a2a] rounded-lg border border-gray-700">
                  <span className="p-3 text-gray-500 border-r border-gray-700">https://</span>
                  <input type="text" placeholder="www.company.com" className="bg-transparent p-3 w-full focus:outline-none" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-sm">Location</label>
                <input type="text" placeholder="City, Country" className="w-full bg-[#2a2a2a] p-3 rounded-lg border border-gray-700" />
              </div>
              <div className="space-y-1">
                <label className="text-sm">Employee Count Range</label>
                <select className="w-full bg-[#2a2a2a] p-3 rounded-lg border border-gray-700">
                  <option>1-10 employees</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-sm">Company Logo</label>
                <div className="border border-dashed border-gray-600 rounded-lg p-3 flex flex-col items-center justify-center cursor-pointer hover:border-gray-400">
                  <Upload size={20} className="mb-1" />
                  <span className="text-xs text-gray-400">Upload image</span>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <label className="text-sm">Brief Description</label>
              <textarea className="w-full bg-[#2a2a2a] p-3 rounded-lg border border-gray-700 mt-1 h-24" placeholder="Tell us about your company's mission and culture..."></textarea>
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-end gap-3 mt-6">
              <button onClick={() => setIsOpen(false)} className="px-6 py-2 rounded-lg hover:bg-[#2a2a2a]">Cancel</button>
              <button className="bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-200">Register Company</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RegisterCompanyModal;