const express = require('express');
const router = express.Router();
const Ingredient = require('../models/Ingredient');

// Fetch all ingredients
router.get('/', async (req, res) => {
  try {
    const ingredients = await Ingredient.find();
    res.json(ingredients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add or update an ingredient
router.post('/', async (req, res) => {
  const { name, quantity, image } = req.body;

  try {
    let ingredient = await Ingredient.findOne({ name });

    if (ingredient) {
      // Update the ingredient quantity
      ingredient.quantity += quantity;
      ingredient.updatedAt = Date.now();
    } else {
      // Create a new ingredient
      ingredient = new Ingredient({ name, quantity, image });
    }

    const savedIngredient = await ingredient.save();
    res.status(201).json(savedIngredient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Patch request to update ingredient quantity
router.patch('/:name', async (req, res) => {
  const { name } = req.params;
  const { quantity } = req.body;

  try {
    let ingredient = await Ingredient.findOne({ name });

    if (!ingredient) {
      return res.status(404).json({ message: 'Ingredient not found' });
    }

    // Check if the resulting quantity would be negative
    if (ingredient.quantity + quantity < 0) {
      return res.status(400).json({ message: 'Insufficient quantity available' });
    }

    // Update the ingredient quantity
    ingredient.quantity += quantity;
    ingredient.updatedAt = Date.now();

    const updatedIngredient = await ingredient.save();
    res.json(updatedIngredient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
// Patch request to subtract ingredient quantity
router.patch('/subtract/:name', async (req, res) => {
  const { name } = req.params;
  const { quantity } = req.body;

  try {
    let ingredient = await Ingredient.findOne({ name });

    if (!ingredient) {
      return res.status(404).json({ message: 'Ingredient not found' });
    }

    // Check if the resulting quantity would be negative
    if (ingredient.quantity - quantity < 0) {
      return res.status(400).json({ message: 'Insufficient quantity available' });
    }

    // Subtract the ingredient quantity
    ingredient.quantity -= quantity;
    ingredient.updatedAt = Date.now(); // Update the updatedAt field with the current date

    const updatedIngredient = await ingredient.save();
    res.json(updatedIngredient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


module.exports = router;
