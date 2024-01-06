
const Recipe = require('../models/Recipes');

const GETALL = async (req, res) => {
    try {
        const filter = {};
        if (req.query.category) {
            filter.category = filter.category;
        }
        const recipes = await Recipe.find(filter);
        res.status(200).json({ recipes });
    } catch (error) {
        console.log(error.message);
    }
}

const GETONE = async (req, res) => {
    try {
        const { id } = req.params;

        const recipe = await Recipe.findById(id);

        if (!recipe) {
            return res.status(404).json({ error: 'Recipe not found' });
        }

        res.status(200).json({ recipe });
    } catch (error) {
        console.error('Error fetching recipe:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { GETALL, GETONE };
