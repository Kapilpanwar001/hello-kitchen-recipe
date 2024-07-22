import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import Kitchenlogo from './photo/Kitchenlogo.jpg';
import home1 from './photo/home1.jpg';
import home2 from './photo/home2.jpg';
import home3 from './photo/home3.jpg';
import home4 from './photo/home4.jpg';
import home11 from './photo/home11.jpeg';
import home6 from './photo/home6.jpg';
import home7 from './photo/home7.jpg';
import home8 from './photo/home8.jpeg';
import home9 from './photo/home9.jpeg';
import home10 from './photo/home10.jpeg';

function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-yellow-200">
      {/* Navbar */}
      <div className="flex items-center justify-between p-4 bg-yellow-100 text-white fixed w-full z-10 shadow-md">
        <div className="flex items-center space-x-4">
          <img src={Kitchenlogo} alt="logo" className="h-12 rounded-full shadow-lg" />
        </div>
        <div className="space-x-4">
          <button className="bg-yellow-500 text-zinc-800 px-4 py-2 rounded-full hover:bg-red-200 transition duration-300">
            <NavLink to="/Login" className="text-lg font-semibold">Login</NavLink>
          </button>
          <button className="bg-yellow-500 text-zinc-800 px-4 py-2 rounded-full hover:bg-red-200 transition duration-300">
            <NavLink to="/Signup" className="text-lg font-semibold">Register</NavLink>
          </button>
        </div>
      </div>

      {/* Main Image */}
      <div className="flex justify-center items-center mt-20 mb-4 p-4">
        <img src={home2} alt="homeimage" className="w-full max-h-[40vh] object-cover px-12 shadow-lg" />
      </div>

      <h1 className="text-center px-12 py-4 text-cyan-700 text-pretty">
        The kitchen is the heart of any home, central to daily life and family connections. It’s where meals are prepared, fostering health and nutrition. Beyond cooking, it’s a space for creativity, conversation, and bonding. A well-organized kitchen promotes efficiency, comfort, and joy, enriching overall living quality.
      </h1>

      {/* Image Slider */}
      <div className="relative overflow-hidden w-full py-4 bg-yellow-200">
        <div className="whitespace-nowrap flex animate-slide hover:pause-slide">
          {[home1, home2, home3, home4, home11, home6, home7, home8, home9, home10].map((image, index) => (
            <div key={index} className="px-2">
              <img
                src={image}
                alt={`homeimage${index}`}
                className="h-40 w-60 md:h-40 md:w-60 sm:h-24 sm:w-36 object-cover transform transition-transform duration-500 hover:scale-105 hover:rotate-3 shadow-lg cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-yellow-300 py-8 mt-12">
        <div className="container mx-auto px-6">
          <div className="flex justify-around items-center">
            <div className="flex flex-col items-center">
              <FaFacebook className="text-3xl mb-2 hover:text-blue-600" />
              <h1 className="text-lg font-semibold">Facebook</h1>
            </div>
            <div className="flex flex-col items-center">
              <FaInstagram className="text-3xl mb-2 hover:text-pink-600" />
              <h1 className="text-lg font-semibold">Instagram</h1>
            </div>
            <div className="flex flex-col items-center">
              <FaYoutube className="text-3xl mb-2 hover:text-red-600" />
              <h1 className="text-lg font-semibold">YouTube</h1>
            </div>
          </div>
          <div className="flex justify-around items-center mt-4">
            <h1 className="text-lg font-semibold">About</h1>
            <h1 className="text-lg font-semibold">Career</h1>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-slide {
          animation: slide 20s linear infinite;
        }
        .hover\\:pause-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

export default Home;
