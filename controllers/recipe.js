
const Recipe = require('../models/Recipes');

const GETALL = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.status(200).json({ recipes });
        console.log(recipes);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = { GETALL };