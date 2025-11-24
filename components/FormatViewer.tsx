import React from 'react';
import { FILE_STRUCTURE } from '../constants';

const FormatViewer: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">File Format Specification</h2>
        <p className="text-slate-600 mt-2">
            The ACF-801 submission is a flat file with variable length records using specific delimiters to define hierarchy.
        </p>
      </div>

      {/* Visual Hierarchy */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-slate-800 mb-6">Record Hierarchy Visualizer</h3>
        
        <div className="space-y-4 font-mono text-sm">
            <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 border border-blue-300 rounded font-bold text-blue-800">M</div>
                <div className="h-0.5 w-8 bg-gray-300"></div>
                <span className="text-gray-500 italic">Header Record</span>
            </div>

            <div className="ml-8 pl-4 border-l-2 border-gray-200 space-y-4">
                 <div className="flex items-center">
                    <div className="w-12 h-12 flex items-center justify-center bg-green-100 border border-green-300 rounded font-bold text-green-800">F</div>
                    <div className="h-0.5 w-8 bg-gray-300"></div>
                    <span className="text-gray-500 italic">Family Record 1</span>
                </div>
                
                <div className="ml-8 pl-4 border-l-2 border-dashed border-gray-200 space-y-4">
                    <div className="flex items-center">
                        <div className="w-10 h-10 flex items-center justify-center bg-purple-100 border border-purple-300 rounded font-bold text-purple-800">C</div>
                        <div className="h-0.5 w-8 bg-gray-300"></div>
                        <span className="text-gray-500 italic">Child 1</span>
                    </div>
                    <div className="ml-12 space-y-2">
                         <div className="flex items-center">
                            <div className="w-8 h-8 flex items-center justify-center bg-orange-100 border border-orange-300 rounded font-bold text-orange-800 text-xs">S</div>
                             <span className="ml-2 text-xs text-gray-400">Setting 1</span>
                        </div>
                         <div className="flex items-center">
                            <div className="w-8 h-8 flex items-center justify-center bg-orange-100 border border-orange-300 rounded font-bold text-orange-800 text-xs">S</div>
                             <span className="ml-2 text-xs text-gray-400">Setting 2</span>
                        </div>
                    </div>

                    <div className="flex items-center mt-4">
                        <div className="w-10 h-10 flex items-center justify-center bg-purple-100 border border-purple-300 rounded font-bold text-purple-800">C</div>
                        <div className="h-0.5 w-8 bg-gray-300"></div>
                        <span className="text-gray-500 italic">Child 2</span>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="w-8 h-8 flex items-center justify-center bg-gray-200 border border-gray-400 rounded font-bold text-gray-700">$</div>
                    <span className="ml-2 text-xs text-gray-400">End Family</span>
                </div>
            </div>

            <div className="flex items-center mt-6">
                <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 border border-indigo-300 rounded font-bold text-indigo-800">P</div>
                <div className="h-0.5 w-8 bg-gray-300"></div>
                <span className="text-gray-500 italic">Provider Records (after all families)</span>
            </div>
             <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-red-100 border border-red-300 rounded font-bold text-red-800">&</div>
                <div className="h-0.5 w-8 bg-gray-300"></div>
                <span className="text-gray-500 italic">End of File</span>
            </div>
        </div>
      </div>

      {/* Delimiter Reference */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {FILE_STRUCTURE.map((seg) => (
          <div key={seg.delimiter} className={`p-4 rounded-lg border ${seg.color}`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl font-bold font-mono">{seg.delimiter}</span>
              <span className="text-xs uppercase font-bold tracking-wider opacity-60">Delimiter</span>
            </div>
            <h4 className="font-semibold mb-1">{seg.name}</h4>
            <p className="text-sm opacity-80">{seg.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormatViewer;
