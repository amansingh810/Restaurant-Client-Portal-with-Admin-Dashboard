import React from 'react';
import bgImage from '../assets/close-up-delicious-chicken-meal.jpg';

const Hero = () => {
  const handleBookTable = () => {
    const reservationSection = document.getElementById('reservation-form');
    if (reservationSection) {
      reservationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div 
      className='relative h-[100vh] w-full bg-cover bg-center bg-no-repeat' 
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-10"></div>

      {/* Centered text content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 tracking-widest uppercase text-amber-300 font-light">
          Where Luxury Meets Diner
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 text-white leading-tight">
          Spice Craft
        </h1>
        <button 
          onClick={handleBookTable}
          className="bg-amber-400 text-black font-semibold text-base md:text-lg py-3 px-6 md:px-8 rounded-full hover:bg-amber-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          Book a Table
        </button>
      </div>
    </div>
  );
};

export default Hero;