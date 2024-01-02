const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    excerpt: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    ingredients: {
        type: [],
        required: true,
    },
    steps: {
        type: [],
        required: true,
    },
});

const RecipeModel = mongoose.model('Recipe', RecipeSchema);
module.exports = RecipeModel;