const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  url: { type: String, required: true } // Added new field 'url' as required
});

module.exports = mongoose.model('Recipe', RecipeSchema);
