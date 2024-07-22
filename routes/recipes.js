const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

// Fetch all recipes
router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new recipe
router.post('/', async (req, res) => {
  const recipe = new Recipe({
    name: req.body.name,
    description: req.body.description,
    image: req.body.image,
    url: req.body.url // Added 'url' field here
  });

  try {
    const newRecipe = await recipe.save();
    res.status(201).json(newRecipe);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
