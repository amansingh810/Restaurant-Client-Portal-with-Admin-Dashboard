import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleReservationsClick = (e) => {
    e.preventDefault();
    if (window.location.pathname !== '/') {
      navigate('/', { state: { scrollToReservation: true } });
    } else {
      const reservationSection = document.getElementById('reservation-form');
      if (reservationSection) {
        reservationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <nav className="flex justify-between items-center p-4 md:p-6 bg-black text-white sticky top-0 z-50">
      <div>
        <Link to="/" className="font-bold text-xl md:text-2xl hover:text-amber-400 transition">
          Spice Craft
        </Link>
      </div>
      <div>
        <ul className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
          <li>
            <a
              href="#reservation-form"
              onClick={handleReservationsClick}
              className="font-bold text-base md:text-lg cursor-pointer hover:text-amber-400 transition"
            >
              RESERVATIONS
            </a>
          </li>
          <li>
            <Link
              to="/"
              className="font-bold text-base md:text-lg cursor-pointer hover:text-amber-400 transition"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/menu"
              className="font-bold text-base md:text-lg cursor-pointer hover:text-amber-400 transition"
            >
              MENU
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="font-bold text-base md:text-lg cursor-pointer hover:text-amber-400 transition"
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;