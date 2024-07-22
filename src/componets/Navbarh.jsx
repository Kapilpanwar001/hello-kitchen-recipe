import React from 'react';
import Kitchenlogo from './photo/Kitchenlogo.jpg';
import { NavLink } from 'react-router-dom';

function Navbarh() {
  return (
    <div className="bg-yellow-100 text-white fixed top-0 left-0 w-full z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <NavLink to="/Image">
            <img src={Kitchenlogo} alt="logo" className="h-12 rounded-full shadow-lg" />
          </NavLink>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-yellow-300 text-green-600 px-4 py-2 rounded-full hover:bg-green-200 transition duration-300">
            <NavLink to="/Login" className="text-lg font-semibold">Login</NavLink>
          </button>
          <button className="bg-yellow-300 text-green-600 px-4 py-2 rounded-full hover:bg-green-200 transition duration-300">
            <NavLink to="/Signup" className="text-lg font-semibold">Register</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbarh;
