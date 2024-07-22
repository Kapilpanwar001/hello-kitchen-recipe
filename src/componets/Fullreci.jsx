import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';

const API = "https://kitchenbackend.onrender.com/api/recipes";

function Fullreci() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipeName, setSelectedRecipeName] = useState("");
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  // Fetch all recipes on component mount
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch(API);
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        setRecipes(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching recipes:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  // Fetch selected recipe details when selectedRecipeName changes
  useEffect(() => {
    const selectedRecipe = recipes.find(rec => rec.name === selectedRecipeName);
    if (selectedRecipe) {
      setRecipe(selectedRecipe);
      setVideoUrl(selectedRecipe.url);
      setShowVideo(true);
    } else {
      setRecipe(null);
      setVideoUrl("");
      setShowVideo(false);
    }
  }, [selectedRecipeName, recipes]);

  const handleRecipeChange = (event) => {
    const recipeName = event.target.value;
    setSelectedRecipeName(recipeName);
  };

  const handleCloseVideo = () => {
    setShowVideo(false); // Close the video by setting showVideo to false
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className='bg-yellow-200 w-full h-screen'>
    <div className="container mx-auto pt-24 py-16 overflow-x-hidden">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/4 mb-4">
          <h1 className="text-2xl mb-2">Select a Recipe</h1>
          <select value={selectedRecipeName} onChange={handleRecipeChange} className="border border-gray-300 rounded-md p-2 m-2 w-full">
            <option value="">Select...</option>
            {recipes.map((rec) => (
              <option key={rec.name} value={rec.name}>
                {rec.name}
              </option>
            ))}
          </select>
        </div>
        <div className="lg:w-3/4">
          {recipe && (
            <div className="lg:flex lg:items-center lg:justify-between">
              <h1 className="text-2xl mb-2 lg:mb-0 pl-8">{recipe.name}</h1>
              <p className="p-2 m-2 pl-10 pr-10">{recipe.description}</p>
            </div>
          )}
        </div>
      </div>

      {showVideo && (
        <div className="mt-4 p-2 lg:px-48">
          <YouTube videoId={getYouTubeVideoId(videoUrl)} opts={{ width: '100%' }} />
          <button onClick={handleCloseVideo} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mt-4 m-2">Close Video</button>
        </div>
      )}
    </div>
    </div>
  );
}

function getYouTubeVideoId(url) {
  const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

export default Fullreci;
