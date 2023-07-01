import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './pages/Dashboard';
import Properties from './pages/Properties';
import Tenants from './pages/Tenants';
import Payments from './pages/Payments';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className='flex'>
        <Sidebar />
        <div className="flex-grow p-4 p">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/tenants" element={<Tenants />} />
            <Route path="/payments" element={<Payments />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
        </div>
        
      </div>
    </Router>
  );
};

export default App;
