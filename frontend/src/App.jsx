import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import ManagerDashboard from './pages/ManagerDashboard';
import StaffDashboard from './pages/StaffDashboard';

const App = () => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/admin-dashboard" element={<AdminDashboard />} /> */}
        <Route
          path="/admin-dashboard"
          element={token && role === 'admin' ? <AdminDashboard /> : <Navigate to="/login" />}
        />
        <Route path="/manager-dashboard" element={<ManagerDashboard />} />
        <Route path="/staff-dashboard" element={<StaffDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
