import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '/Users/jenicemcdaniel/Desktop/SixerProject/sixer-alumni/src/Components/Navbar.js';
import Home from './Components/Home';
import AboutUs from '/Users/jenicemcdaniel/Desktop/SixerProject/sixer-alumni/src/Components/AboutUs.js';
import Events from './Components/Events';
import Shop from './Components/Shop';
import AdminLogin from './Components/AdminLogin';
import AdminDashboard from './Components/AdminDashboard';
import RequireAdminAuth from './Components/RequireAdminAuth';
import Gallery from './Components/Gallery';
import AuthPage from './Components/AuthPage';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/auth" component={AuthPage} />

        {/* Protected Admin Route */}
        <Route
          path="/admin/dashboard"
          element={
            <RequireAdminAuth>
              <AdminDashboard />
            </RequireAdminAuth>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
