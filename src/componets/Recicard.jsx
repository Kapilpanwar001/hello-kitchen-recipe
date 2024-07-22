import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const API = "https://kitchenbackend.onrender.com/api/recipes";

function Recicard() {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.length > 0) {
        setRecipes(data);
      }
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchRecipes(API);
  }, []);

  const truncateDescription = (description) => {
    const words = description.split(' ');
    return words.length > 20 ? words.slice(0, 20).join(' ') + '...' : description;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 py-14 pt-20 bg-yellow-200">
      {recipes.map((recipe) => (
        <div key={recipe._id.$oid} className="recipe-card bg-indigo-200 rounded-lg overflow-hidden shadow-md">
          <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover object-center" />
          <div className="p-4">
            <h1 className="text-xl font-semibold">{recipe.name}</h1>
            <p className="mt-2 text-gray-600">{truncateDescription(recipe.description)}</p>
            <NavLink to='/Fullreci' className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">View</NavLink>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Recicard;
