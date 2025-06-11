import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleNewsletterChange = (e) => {
    setNewsletterEmail(e.target.value);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:demo@gmail.com?subject=Newsletter Subscription&body=Please subscribe ${newsletterEmail} to the newsletter.`;
    setNewsletterEmail('');
  };

  return (
    <div className="flex flex-col gap-12 px-4 sm:px-8 md:px-16 py-16 bg-white">
      {/* Query Section */}
      <div className="grid place-content-center gap-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Have a Question?</h2>
        <p className="text-base md:text-lg text-gray-600">
          Click the button below to send us an email!
        </p>
        <a
          href="mailto:demo@gmail.com?subject=Website%20Query&body=Hello%20Spice%20Craft,%0D%0A%0D%0AI have a query regarding..."
          className="bg-amber-500 text-white px-6 py-2 rounded-md hover:bg-amber-600 inline-block"
        >
          Send Email
        </a>
      </div>

      {/* Newsletter Subscription Section */}
      <div className="grid place-content-center gap-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Need Updates on Latest Offers?</h2>
        <p className="text-base md:text-lg text-gray-600">
          Subscribe to our newsletter to get frequent updates
        </p>
        <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row items-center justify-center max-w-xl mx-auto gap-4">
          <input
            type="email"
            value={newsletterEmail}
            onChange={handleNewsletterChange}
            placeholder="Enter your email address"
            required
            className="border border-gray-300 px-4 py-2 rounded-md w-full max-w-sm"
          />
          <button
            type="submit"
            className="bg-amber-500 text-white px-6 py-2 rounded-md hover:bg-amber-600"
          >
            Send Now
          </button>
        </form>
      </div>

      {/* Footer Navigation & Social Media */}
      <div className="grid gap-8 text-center">
        <h2 className="text-2xl font-semibold">Spice Craft</h2>
        <div className="flex gap-6 justify-center text-2xl text-gray-700">
          <FaFacebook className="cursor-pointer hover:text-amber-500" />
          <FaInstagram className="cursor-pointer hover:text-amber-500" />
          <FaYoutube className="cursor-pointer hover:text-amber-500" />
        </div>
        <ul className="flex flex-wrap gap-4 sm:gap-6 justify-center text-sm text-gray-500">
          <li className="cursor-pointer hover:text-gray-800">Home</li>
          <li className="cursor-pointer hover:text-gray-800">Menu</li>
          <li className="cursor-pointer hover:text-gray-800">About Us</li>
          <li className="cursor-pointer hover:text-gray-800">Privacy Policy</li>
        </ul>
      </div>
      <p className="text-center text-sm text-gray-500 mt-4">@ 2025 Spice Craft. All rights reserved</p>
    </div>
  );
};

export default Footer;
