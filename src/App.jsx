import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import GalleryDetails from './pages/GalleryDetails';
import ServiceDetails from './pages/ServiceDetails';
import BlogDetails from './pages/BlogDetails';
import './index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery/:id" element={<GalleryDetails />} />
        <Route path="/service/:id" element={<ServiceDetails />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
