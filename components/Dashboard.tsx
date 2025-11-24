import React from 'react';
import { FileText, Database, AlertTriangle, ArrowRight, TrendingDown, Clock, CheckCircle, Zap, Activity, BookOpen, ShieldCheck, DollarSign, Users, User, Server } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { PAIN_POINTS, PERSONAS } from '../constants';

const comparisonData = [
  { metric: 'Cost of Correction', legacy: 100, modern: 10, label: '$$$' },
  { metric: 'Time to Submit', legacy: 90, modern: 5, label: 'Hours' },
  { metric: 'Compliance Risk', legacy: 85, modern: 2, label: 'Risk' },
];

const impactTableData = [
  { 
    metric: 'Processing Time', 
    legacy: '45+ Minutes (Timeout Risk)', 
    modern: '12 Seconds', 
    improvement: '99% Faster'
  },
  { 
    metric: 'Monthly Staff Hours', 
    legacy: '80+ Hours (Manual Fixes)', 
    modern: '< 5 Hours (Review)', 
    improvement: 'Reclaim 75 Hours'
  },
  { 
    metric: 'Full Population?', 
    legacy: 'No (Sample Only)', 
    modern: 'Yes (100% Data)', 
    improvement: 'Better Accuracy'
  }
];

const Dashboard: React.FC = () => {
  const businessPoints = PAIN_POINTS.filter(p => p.category === 'Business');

  return (
    <div className="space-y-12">
      
      {/* 1. HERO SECTION: The Value Proposition */}
      <div className="bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-10">
            <Zap size={300} />
        </div>
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-semibold mb-6">
            <CheckCircle size={16} />
            <span>Modernization Initiative</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Transform ACF-801 Reporting from a <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Monthly Crisis</span> into a <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">One-Click Success</span>.
          </h1>
          <p className="text-lg md:text-xl text-indigo-100 mb-8 leading-relaxed max-w-2xl">
            We replace fragile legacy scripts with an intelligent, micro-batched architecture that guarantees federal compliance, eliminates staff overtime, and scales to millions of records.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://mdccs--mtxqa.sandbox.my.salesforce.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-indigo-900 rounded-xl font-bold shadow-lg hover:bg-indigo-50 transition-all transform hover:-translate-y-1"
            >
              See the Solution
            </a>
            <Link to="/architecture" className="px-8 py-4 bg-transparent border-2 border-indigo-400 text-indigo-100 rounded-xl font-semibold hover:bg-indigo-900/50 transition-all">
              Technical Design
            </Link>
          </div>
        </div>
      </div>

      {/* 2. THE STORY: The Conflict (Personas) */}
      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        {PERSONAS.map((persona) => (
          <div key={persona.name} className={`rounded-2xl p-8 border-2 ${persona.name === 'Sarah' ? 'bg-white border-blue-100' : 'bg-slate-50 border-slate-200'} shadow-sm relative overflow-hidden`}>
             <div className={`absolute top-0 right-0 w-24 h-24 -mr-6 -mt-6 rounded-full opacity-10 ${persona.color === 'blue' ? 'bg-blue-600' : 'bg-slate-600'}`}></div>
             
             <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className={`p-4 rounded-full ${persona.color === 'blue' ? 'bg-blue-100 text-blue-700' : 'bg-slate-200 text-slate-700'}`}>
                  <persona.icon size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{persona.name}</h3>
                  <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">{persona.role}</p>
                </div>
             </div>
             
             <blockquote className="text-lg italic text-slate-700 mb-6 relative z-10">
               "{persona.quote}"
             </blockquote>

             <div className="space-y-3">
               <div className="flex items-start gap-3">
                 <AlertTriangle size={18} className="text-red-500 mt-1 flex-shrink-0" />
                 <div>
                   <strong className="block text-sm text-slate-900">Pain Point</strong>
                   <span className="text-sm text-slate-600">{persona.pain}</span>
                 </div>
               </div>
               <div className="flex items-start gap-3">
                 <CheckCircle size={18} className="text-green-600 mt-1 flex-shrink-0" />
                 <div>
                   <strong className="block text-sm text-slate-900">Goal</strong>
                   <span className="text-sm text-slate-600">{persona.goal}</span>
                 </div>
               </div>
             </div>
          </div>
        ))}
      </div>

      {/* 3. THE SOLUTION: Business Value (Metrics) */}
      <div id="solution" className="bg-white rounded-2xl shadow-md border border-gray-200 p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-gray-100 pb-6">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">The Modern Solution Impact</h2>
            <p className="text-slate-500 mt-2">Quantifiable results based on live deployments.</p>
          </div>
          <div className="flex gap-2">
             <div className="px-4 py-2 bg-green-50 text-green-700 rounded-lg font-bold border border-green-100 flex items-center gap-2">
                <TrendingDown size={18} /> Cost Reduced by 85%
             </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Chart */}
          <div className="lg:col-span-1 bg-slate-50 rounded-xl p-6 border border-slate-100 flex flex-col justify-center">
             <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-6 text-center">Efficiency Gains</h3>
             <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={comparisonData} margin={{ top: 20, right: 20, left: -20, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                        <XAxis dataKey="metric" tick={{fontSize: 10}} interval={0} />
                        <YAxis hide />
                        <Tooltip contentStyle={{borderRadius: '8px'}} />
                        <Legend />
                        <Bar dataKey="legacy" name="Legacy Cost" fill="#cbd5e1" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="modern" name="New Solution" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
             </div>
          </div>

          {/* Detailed Metrics Table */}
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-xl border border-gray-200">
                <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 text-gray-600 font-bold uppercase tracking-wider text-xs">
                        <tr>
                            <th className="px-6 py-4">Key Performance Indicator</th>
                            <th className="px-6 py-4">Before (Legacy)</th>
                            <th className="px-6 py-4">After (Modern)</th>
                            <th className="px-6 py-4 text-green-700 bg-green-50">Impact</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {impactTableData.map((row, idx) => (
                            <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-bold text-slate-800">{row.metric}</td>
                                <td className="px-6 py-4 text-slate-500">{row.legacy}</td>
                                <td className="px-6 py-4 text-blue-700 font-semibold">{row.modern}</td>
                                <td className="px-6 py-4 text-green-700 font-bold bg-green-50/30">{row.improvement}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Strategic Drivers */}
      <div className="grid md:grid-cols-3 gap-6">
        {businessPoints.map((pp, idx) => (
            <div key={pp.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold">
                        {idx + 1}
                    </div>
                    <h3 className="font-bold text-slate-900 leading-tight">{pp.title}</h3>
                </div>
                <p className="text-sm text-slate-600 mb-4">{pp.problem}</p>
                <div className="mt-auto pt-4 border-t border-gray-100 text-sm">
                    <strong className="text-green-600">Solution: </strong>
                    <span className="text-slate-700">{pp.solution}</span>
                </div>
            </div>
        ))}
      </div>

      {/* 5. Call to Technical Action */}
      <div className="bg-slate-900 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
            <h2 className="text-2xl font-bold text-white mb-2">How do we achieve this?</h2>
            <p className="text-slate-400">
                The secret lies in our <span className="text-blue-400 font-semibold">Micro-batching Architecture</span>. 
                We break massive files into small, manageable chunks that Salesforce processes asynchronously.
            </p>
        </div>
        <Link 
            to="/architecture" 
            className="flex-shrink-0 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-50 transition-colors flex items-center gap-2"
        >
            View Technical Architecture <ArrowRight size={18} />
        </Link>
      </div>
      
    </div>
  );
};

export default Dashboard;