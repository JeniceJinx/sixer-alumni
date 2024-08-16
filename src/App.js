import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Events from './components/Events'; // Import the Events component
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar appears on every page */}
        <Navbar />
        
        {/* Define routes for each page */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Events" element={<Events />} /> {/* Use the imported Events component */}
        </Routes>

        {<Footer />}
   
      </div>
    </Router>
  );
}

export default App;

