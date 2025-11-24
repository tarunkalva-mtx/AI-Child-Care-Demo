import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import StandardsViewer from './components/StandardsViewer';
import FormatViewer from './components/FormatViewer';
import Architecture from './components/Architecture';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/standards" element={<StandardsViewer />} />
          <Route path="/format" element={<FormatViewer />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
