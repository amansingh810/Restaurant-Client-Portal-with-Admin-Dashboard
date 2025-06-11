import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Login from './Components/Login';
import Sidebar from './Components/Sidebar';
import Addmenu from './pages/AddMenu';
import Listmenu from './pages/ListMenu';
import AdminTable from './pages/AdminTable';

export const backendUrl = 'http://localhost:4000';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    localStorage.setItem('token', token);
  }, [token]);

  return (
    <div>
      <ToastContainer />
      {token === '' ? (
        <Login setToken={setToken} />
      ) : (
        <div className="flex min-h-screen">
          <Sidebar setToken={setToken} />
          <div className="flex-1 p-6">
            <Routes>
              <Route path="/add" element={<Addmenu token={token} />} />
              <Route path="/list" element={<Listmenu token={token} />} />
              <Route path="/table" element={<AdminTable token={token} />} />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
