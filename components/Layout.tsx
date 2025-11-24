import React, { useState } from 'react';
import { FileText, Database, LayoutDashboard, Menu, X, ChevronRight, Briefcase, Zap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Solution Overview', path: '/', icon: <LayoutDashboard size={20} /> },
    { name: 'Strategic Architecture', path: '/architecture', icon: <Zap size={20} /> },
    { name: 'File Specifications', path: '/format', icon: <FileText size={20} /> },
    { name: 'Data Standards', path: '/standards', icon: <Database size={20} /> },
  ];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed lg:static inset-y-0 left-0 z-30 w-64 bg-slate-900 text-white transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex items-center justify-between h-16 px-6 bg-slate-800 border-b border-slate-700">
          <div className="flex items-center gap-2 font-bold text-lg tracking-tight">
            <Database className="text-blue-400" />
            <span>ACF-801 Solution</span>
          </div>
          <button 
            onClick={() => setSidebarOpen(false)} 
            className="lg:hidden text-slate-400 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' 
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.name}</span>
                {isActive && <ChevronRight size={16} className="ml-auto opacity-75" />}
              </Link>
            );
          })}
        </nav>
        
        <div className="absolute bottom-0 w-full p-6 border-t border-slate-800">
           <p className="text-xs text-slate-500">Sales Enablement & Tech Demo</p>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 lg:px-8">
          <button 
            onClick={() => setSidebarOpen(true)}
            className="p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-lg lg:hidden"
          >
            <Menu size={24} />
          </button>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-500">Child Care Data Reporting Modernization</span>
            <div className="h-4 w-px bg-gray-300 hidden sm:block"></div>
            <span className="text-sm font-semibold text-blue-600 hidden sm:block">Executive Summary</span>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
