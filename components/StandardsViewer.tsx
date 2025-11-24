import React, { useState } from 'react';
import { DATA_ELEMENTS } from '../constants';
import { SectionType } from '../types';
import { Filter, Search } from 'lucide-react';

const StandardsViewer: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionType | 'All'>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = DATA_ELEMENTS.filter(item => {
    const matchesSection = activeSection === 'All' || item.section === activeSection;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.id.includes(searchTerm) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSection && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Data Element Standards</h2>
          <p className="text-slate-600">Definitions and consistency rules for ACF-801.</p>
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search elements..." 
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none w-full sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 pb-2">
        {['All', ...Object.values(SectionType)].map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section as SectionType | 'All')}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              activeSection === section 
                ? 'bg-blue-600 text-white shadow-sm' 
                : 'bg-white text-slate-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {section}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500 font-semibold">
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Size</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Requirement</th>
                <th className="px-6 py-4">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredData.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-mono text-blue-600 font-medium">{item.id}</td>
                  <td className="px-6 py-4 font-medium text-slate-900">{item.name}</td>
                  <td className="px-6 py-4 text-slate-600">{item.fieldSize}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-800">
                      {item.type}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                      item.required === 'Always' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {item.required}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 max-w-xs">{item.description}</td>
                </tr>
              ))}
              {filteredData.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                    No data elements found matching your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StandardsViewer;
