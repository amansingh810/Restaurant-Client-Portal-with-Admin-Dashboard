import axios from 'axios';
import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { backendUrl } from '../App';

// Initial form data
const initialFormState = {
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  guests: '1',
};

const ReservationForm = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [loading, setLoading] = useState(false);

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Reservation submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Set a timeout to prevent infinite loading
    const timeout = setTimeout(() => {
      setLoading(false);
      alert('Your Table is Booked Successfully');
    }, 3000); // 3 seconds timeout

    try {
      const response = await axios.post(`${backendUrl}/api/reservations/create`, formData);
      if (response.status === 200 || response.status === 201) {
        alert('Reservation submitted successfully!');
        setFormData(initialFormState); // Reset form
        e.target.reset(); // Reset HTML form elements
      } else {
        alert('Reservation failed. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      clearTimeout(timeout);
      setLoading(false);
    }
  };

  // Generate time slots
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour < 21; hour++) {
      const startHour = hour % 12 === 0 ? 12 : hour % 12;
      const startPeriod = hour < 12 ? 'AM' : 'PM';
      const endHour = (hour + 1) % 12 === 0 ? 12 : (hour + 1) % 12;
      const endPeriod = (hour + 1) < 12 ? 'AM' : 'PM';
      slots.push(`${startHour}:00 ${startPeriod} - ${endHour}:00 ${endPeriod}`);
    }
    return slots;
  };

  // Disable past dates
  const today = new Date().toISOString().split('T')[0];

  return (
    <div id="reservation-form" className='min-h-screen bg-[#ffe2b7] p-6 md:p-12'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-stretch'>
        {/* Form Section */}
        <form onSubmit={handleSubmit} className="md:w-2/3 bg-white p-8 rounded-lg shadow-md flex flex-col justify-between">
          <div>
            <h2 className='text-xl font-semibold text-amber-400 uppercase tracking'>Reserve A Table</h2>
            <h1 className='text-3xl font-bold mb-4'>
              Dine in with us <span className='text-amber-500'>Reserve NOW</span>
            </h1>

            <div className='grid md:grid-cols-2 gap-4'>
              {/* Full Name */}
              <div>
                <label htmlFor="name" className='font-bold'>Full Name *</label>
                <input
                  id="name"
                  type="text"
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-blue-300'
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className='font-bold'>Email *</label>
                <input
                  id="email"
                  type="email"
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-blue-300'
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className='font-bold'>Phone Number *</label>
                <input
                  id="phone"
                  type="tel"
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10}"
                  className='w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-blue-300'
                />
              </div>

              {/* Date */}
              <div>
                <label htmlFor="date" className='font-bold'>Reservation Date *</label>
                <input
                  id="date"
                  type="date"
                  name='date'
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={today}
                  className='w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-blue-300'
                />
              </div>

              {/* Time */}
              <div>
                <label htmlFor="time" className='font-bold'>Reservation Time *</label>
                <select
                  id="time"
                  name='time'
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className='w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-blue-300'
                >
                  <option value="">Select Time</option>
                  {generateTimeSlots().map((slot) => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>

              {/* Guests */}
              <div>
                <label htmlFor="guests" className='font-bold'>Number Of Guests</label>
                <select
                  id="guests"
                  name='guests'
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  className='w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-blue-300'
                >
                  {[...Array(10).keys()].map((i) => (
                    <option key={`guest-${i + 1}`} value={i + 1}>{i + 1} Guest(s)</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Single Submit Button */}
          <div className="mt-6">
            <button 
              type="submit" 
              className='w-full bg-amber-600 text-white p-3 rounded-lg hover:bg-amber-500 transition disabled:opacity-50'
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Book Now'}
            </button>
          </div>
        </form>

        {/* Sidebar */}
        <div className='md:w-1/3 flex flex-col justify-between bg-black text-gray-300 p-8 rounded-lg shadow-md space-y-10'>
          <div>
            <h3 className='text-lg font-bold'>Address</h3>
            <p>123 Foodie Street, Flavor Town, Kanpur</p>
          </div>
          <div>
            <h3 className='text-lg font-bold'>Open Time</h3>
            <p>Mon-Fri: 11:00 AM - 10:00 PM</p>
            <p>Sat-Sun: 09:00 AM - 11:30 PM</p>
          </div>
          <div>
            <h3 className='text-lg font-bold mb-2'>Stay Connected</h3>
            <div className='flex gap-4'>
              <FaFacebook className='text-4xl text-red-500 hover:text-white cursor-pointer' />
              <FaInstagram className='text-4xl text-red-500 hover:text-white cursor-pointer' />
              <FaTwitter className='text-4xl text-red-500 hover:text-white cursor-pointer' />
              <FaYoutube className='text-4xl text-red-500 hover:text-white cursor-pointer' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationForm;