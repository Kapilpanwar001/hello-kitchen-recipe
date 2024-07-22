import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const API = "https://kitchenbackend.onrender.com/api/ingredients";

function Igcard() {
  const [ingredients, setIngredients] = useState([]);

  const fetchIngredients = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.length > 0) {
        setIngredients(data);
      }
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchIngredients(API);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 py-16 pt-24 overflow-y-hidden bg-yellow-200">
      {ingredients.map((ingredient) => (
        <div key={ingredient.id} className="ingredient-card bg-indigo-300 rounded-lg overflow-hidden shadow-md flex">
          <div className="w-1/3">
            <img src={ingredient.image} alt={ingredient.name} className="w-full h-auto" />
          </div>
          <div className="w-2/3 p-4">
            <h1 className="text-xl font-semibold">{ingredient.name}</h1>
            <h1>Available Quantity: {ingredient.quantity}gm</h1>
            <div className="mt-4">
              <NavLink to='/Addhere' className="mr-2 inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">Add</NavLink>
              <NavLink to='/Removehere' className="inline-block bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded">Remove</NavLink>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Igcard;
