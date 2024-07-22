import React from 'react';
import Navbar from './Navbar';
import open1 from './photo/open1.jpeg';
import open2 from './photo/open2.jpeg';
import open3 from './photo/open3.jpeg';
import open4 from './photo/open4.jpeg';
import open5 from './photo/open5.jpg';
import open6 from './photo/open6.jpeg';

import blinkit from './photo/blinkit.jpeg';
import country from './photo/country.jpeg';
import swiggy1 from './photo/swiggy1.jpeg';
import Zepto from './photo/Zepto.jpeg';
import milk from './photo/milk.jpeg';
import bigbasket from './photo/bigbasket.jpeg';

function Open() {
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap md:flex-nowrap justify-between items-start bg-yellow-200 pt-16">
        {/* Slider Section */}
        <div className="w-full md:w-1/6 h-screen overflow-hidden pt-24 md:pt-32 px-4 md:px-0 relative">
          <h1 className="text-xl font-bold mb-4">Available Offers</h1>
          <div className="grid grid-cols-1 gap-4">
            {[open1, open2, open3, open4, open5, open6].map((image, index) => (
              <div key={index} className="slider-image-container">
                <img
                  src={image}
                  alt={`slider image ${index}`}
                  className="slider-image w-full h-32 object-cover rounded-sm"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-5/6 p-8">
          <div className="w-full h-auto pt-32 md:pt-0">
            <h1 className="text-xl font-bold mb-4">
              Welcome to New World Kitchen
            </h1>
            <p className="mb-8 text-green-700">
              Discover a world where culinary artistry and innovation unite. At New World Kitchen, we celebrate the heart of the home with premium kitchenware and gourmet essentials designed to ignite your culinary passion. Our collection is meticulously curated to bring you the finest tools and ingredients, transforming your cooking experience into a true delight. Whether you’re an experienced chef or a kitchen novice, New World Kitchen is your go-to destination for top-quality products, expert guidance, and a community that loves food as much as you do. Step into New World Kitchen and create unforgettable culinary masterpieces every day.
            </p>
          </div>

          {/* Purchase Online Grocery Section */}
          <div className="w-full h-screen overflow-y-auto grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10 pr-4 md:pr-16">
            <h1 className="text-xl font-bold col-span-2 md:col-span-3 mb-4 pt-20">Purchase Online Grocery</h1>
            {[blinkit, country, swiggy1, Zepto, bigbasket, milk].map((image, index) => (
              <div key={index} className="w-full h-64">
                <img
                  src={image}
                  alt={`card image ${index}`}
                  className="w-full h-full object-cover rounded-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:bg-gray-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider-image-container {
          animation: slideAnimation 10s linear infinite;
        }

        .slider-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: translateY(100%);
          transition: transform 0.3s ease-in-out;
        }

        .slider-image:hover {
          transform: translateY(0%) scale(1.05) rotate(3deg);
        }

        @keyframes slideAnimation {
          0% { transform: translateY(100%); }
          100% { transform: translateY(-100%); }
        }
      `}</style>
    </>
  );
}

export default Open;
