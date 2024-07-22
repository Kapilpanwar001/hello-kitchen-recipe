import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-yellow-100 z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div>
          {/* Wrap the image with NavLink */}
          <NavLink to="/Image">
            <img src="https://i.pinimg.com/736x/48/cf/94/48cf94292a32633f7ef23b015a860ac9.jpg" alt="logo" className="h-12" />
          </NavLink>
        </div>
        <nav className="flex justify-end flex-1">
          <ul className="flex space-x-4 pr-6 md:pr-24 gap-4 md:gap-20 text-lg font-bold">
            <li>
              <NavLink to="/Open" className="text-green-700 hover:text-green-900 pl-5">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Igcard" className="text-green-700 hover:text-green-900">Ingredients</NavLink>
            </li>
            <li>
              <NavLink to="/Recicard" className="text-green-700 hover:text-green-900">Recipe</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
