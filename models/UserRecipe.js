
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
    category: {
        type: String,
        required: true
    },
    tags: {
        type: [],
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true,
    },
});

const RecipeModel = mongoose.model('UserRecipe', RecipeSchema);
module.exports = RecipeModel;