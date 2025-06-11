import React, { useEffect } from 'react';
import Navbar from './Components/Navbar';
import { Routes, Route, useLocation } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const backendUrl = 'http://localhost:4000';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollToReservation) {
      const reservationSection = document.getElementById('reservation-form');
      if (reservationSection) {
        reservationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  return (
    <div>
      <Navbar />
      <ToastContainer position="top-center" autoClose={3000} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Footer />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;