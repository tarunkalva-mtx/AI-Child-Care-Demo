import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { PAIN_POINTS } from '../constants';
import { Zap, ShieldAlert, Cpu, Layers, CheckCircle2, Briefcase, Database } from 'lucide-react';
import { PainPoint, PainPointPriority } from '../types';

const data = [
  { name: 'Sync Processing', records: 10000, time: 45, success: 40, fail: 60 },
  { name: 'Micro-Batching', records: 10000, time: 12, success: 99, fail: 1 },
];

const PriorityBadge: React.FC<{ priority: PainPointPriority }> = ({ priority }) => {
  const colors = {
    Critical: 'bg-red-100 text-red-800 border-red-200 ring-red-500/20',
    High: 'bg-orange-100 text-orange-800 border-orange-200 ring-orange-500/20',
    Medium: 'bg-yellow-100 text-yellow-800 border-yellow-200 ring-yellow-500/20',
    Low: 'bg-blue-100 text-blue-800 border-blue-200 ring-blue-500/20',
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-bold border uppercase tracking-wide ring-1 ${colors[priority]}`}>
      {priority} Priority
    </span>
  );
};

const Architecture: React.FC = () => {
  const priorityOrder: Record<PainPointPriority, number> = { Critical: 0, High: 1, Medium: 2, Low: 3 };
  
  const technicalPoints = PAIN_POINTS.filter(p => p.category === 'Technical')
    .sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

  return (
    <div className="space-y-12">
      
      {/* Sales-Oriented Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-10 rounded-2xl shadow-xl text-white">
        <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-400/30 text-blue-300">
                <Database size={24} />
            </div>
            <h2 className="text-3xl font-bold">The Engine of Efficiency</h2>
        </div>
        <p className="text-xl text-slate-300 max-w-4xl leading-relaxed">
          While the dashboard shows the <em>results</em> (cost savings), this section reveals <em>how</em> we achieve them. 
          Our <strong>Micro-batching Architecture</strong> is the technical innovation that allows us to process massive data volumes without hitting Salesforce limits.
        </p>
      </div>

      {/* SECTION 1: VISUAL PROOF */}
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Chart */}
            <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h4 className="text-lg font-bold text-slate-900">Performance Benchmark</h4>
                        <p className="text-sm text-slate-500">Processing 10,000 Records: Legacy vs. Modern</p>
                    </div>
                    <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                        4x Faster
                    </span>
                </div>
                <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} layout="vertical" margin={{ left: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={true} stroke="#e2e8f0" />
                        <XAxis type="number" stroke="#64748b" fontSize={12} />
                        <YAxis dataKey="name" type="category" width={100} stroke="#64748b" fontSize={12} fontWeight={600} />
                        <Tooltip 
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                            cursor={{ fill: '#f1f5f9' }}
                        />
                        <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                        <Bar dataKey="success" name="Success Rate (%)" fill="#22c55e" radius={[0, 4, 4, 0]} barSize={24} />
                        <Bar dataKey="time" name="Time (Seconds)" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={24} />
                    </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
            
            {/* The "Secret Sauce" Card */}
            <div className="bg-indigo-900 p-8 rounded-xl text-white h-full flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Cpu size={120} />
                </div>
                <h3 className="text-xl font-bold mb-6 relative z-10 border-b border-indigo-700 pb-4">Why Legacy Fails</h3>
                
                <div className="space-y-6 relative z-10">
                    <div>
                        <div className="flex items-center gap-2 text-red-300 font-bold mb-1">
                            <ShieldAlert size={18} />
                            <span>Governor Limits</span>
                        </div>
                        <p className="text-sm text-indigo-200">
                             Salesforce enforces a <strong>10-second limit</strong> on processing time. Parsing a 50MB file synchronously hits this wall instantly, causing a crash.
                        </p>
                    </div>
                    <div>
                        <div className="flex items-center gap-2 text-green-300 font-bold mb-1">
                            <Zap size={18} />
                            <span>The Fix: Micro-batches</span>
                        </div>
                        <p className="text-sm text-indigo-200">
                            We chop the file into 200-record "chunks." Each chunk gets its own 10-second timer. This allows us to process <strong>infinite records</strong> by chaining jobs together.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* SECTION 2: SOLUTION FLOW */}
      <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
        <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center">
            <Layers className="mr-2 text-indigo-600" />
            How Data Flows (Architecture)
        </h3>
        
        <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-[29px] top-8 bottom-8 w-0.5 bg-gray-200 hidden md:block"></div>

            <div className="space-y-8">
                <div className="relative flex flex-col md:flex-row gap-6">
                    <div className="md:w-16 flex-shrink-0 flex flex-col items-center z-10">
                        <div className="w-14 h-14 bg-white border-2 border-indigo-600 rounded-full flex items-center justify-center font-bold text-indigo-600 text-lg shadow-sm">01</div>
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-xl p-6 border border-gray-100">
                        <strong className="text-slate-900 text-lg block mb-2">Ingestion & Trigger</strong>
                        <p className="text-slate-600 text-sm">User uploads raw `.txt` file. System stores as `ContentVersion`. A trigger fires but <span className="font-semibold text-red-500">does not</span> process data synchronously to avoid timeouts. Instead, it enqueues the first Queueable job.</p>
                    </div>
                </div>

                <div className="relative flex flex-col md:flex-row gap-6">
                    <div className="md:w-16 flex-shrink-0 flex flex-col items-center z-10">
                        <div className="w-14 h-14 bg-white border-2 border-indigo-600 rounded-full flex items-center justify-center font-bold text-indigo-600 text-lg shadow-sm">02</div>
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-xl p-6 border border-gray-100">
                        <strong className="text-slate-900 text-lg block mb-2">Chunking (The Magic Step)</strong>
                        <p className="text-slate-600 text-sm">
                            The job reads the file stream. It identifies `F` (Family) delimiters to safely group lines. 
                            It creates chunks (e.g., 200 families per chunk) to ensure each chunk stays within governor limits.
                        </p>
                    </div>
                </div>

                <div className="relative flex flex-col md:flex-row gap-6">
                    <div className="md:w-16 flex-shrink-0 flex flex-col items-center z-10">
                        <div className="w-14 h-14 bg-white border-2 border-green-500 rounded-full flex items-center justify-center font-bold text-green-600 text-lg shadow-sm">03</div>
                    </div>
                    <div className="flex-1 bg-green-50 rounded-xl p-6 border border-green-100">
                        <strong className="text-green-900 text-lg block mb-2">Fault-Tolerant Commit</strong>
                        <p className="text-green-800 text-sm">
                            Valid records are committed. If one record fails, it <strong>doesn't fail the batch</strong>. We log the error to a separate report and let the other 199 valid records succeed.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* SECTION 3: TECHNICAL CHALLENGES SOLVED */}
      <section>
        <h3 className="text-xl font-bold text-slate-900 mb-6">Technical Challenges & Solutions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technicalPoints.map((pp) => (
                <div key={pp.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col hover:border-blue-300 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                        <h4 className="font-bold text-slate-900 text-lg leading-tight">{pp.title}</h4>
                        <PriorityBadge priority={pp.priority} />
                    </div>
                    <p className="text-sm text-slate-600 mb-6 flex-grow">{pp.problem}</p>
                    <div className="mt-auto pt-4 border-t border-gray-100">
                        <span className="text-xs font-bold uppercase text-blue-600 tracking-wider flex items-center mb-2">
                            <CheckCircle2 size={14} className="mr-1" /> Solution
                        </span>
                        <p className="text-sm font-medium text-slate-800 bg-blue-50 p-3 rounded-lg border border-blue-100">{pp.solution}</p>
                    </div>
                </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Architecture;
