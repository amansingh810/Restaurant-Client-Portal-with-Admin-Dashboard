import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  IoIosLogOut,
  IoMdAddCircleOutline
} from 'react-icons/io';
import { MdFormatListBulletedAdd } from 'react-icons/md';
import { PiListBulletsFill } from 'react-icons/pi';

const Sidebar = ({ setToken }) => {
  const logoutHandler = () => {
    setToken('');
    localStorage.removeItem('token');
  };

  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col py-6 px-4 space-y-6 shadow-lg">
      <div className="text-center text-2xl font-bold text-yellow-400">
        Spice Craft
      </div>

      <NavLink
        to="/add"
        className="flex items-center space-x-3 p-3 rounded hover:bg-gray-700"
      >
        <IoMdAddCircleOutline size={20} />
        <p>Add Menu</p>
      </NavLink>

      <NavLink
        to="/list"
        className="flex items-center space-x-3 p-3 rounded hover:bg-gray-700"
      >
        <MdFormatListBulletedAdd size={20} />
        <p>Menu List</p>
      </NavLink>

      <NavLink
        to="/table"
        className="flex items-center space-x-3 p-3 rounded hover:bg-gray-700"
      >
        <PiListBulletsFill size={20} />
        <p>Reservation</p>
      </NavLink>

      <button
        onClick={logoutHandler}
        className="flex items-center space-x-3 p-3 mt-auto text-red-400 hover:text-red-500 hover:bg-gray-700 rounded"
      >
        <IoIosLogOut size={20} />
        <p>Logout</p>
      </button>
    </div>
  );
};

export default Sidebar;
