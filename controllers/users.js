
const User = require('../models/Users');
const RecipeModel = require('../models/UserRecipe');
const GetUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ user });
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const GetAllUserRecipes = async (req, res) => {
    try {
        const recipes = await RecipeModel.find();
        res.status(200).json({ recipes });
    } catch (error) {
        console.error('Error fetching recipes:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const GetAllByUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const recipes = await RecipeModel.find({ userId });
        res.status(200).json({ recipes });
    } catch (error) {
        console.error('Error fetching recipes:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const GetOneByUser = async (req, res) => {
    try {
        const userRecipeId = req.params.userRecipeId;
        const recipes = await RecipeModel.find({ _id: userRecipeId });
        res.status(200).json({ recipes });
    } catch (error) {
        console.error('Error fetching recipes:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

const AddRecipe = async (req, res) => {
    try {

        const {
            name,
            image,
            excerpt,
            description,
            ingredients,
            steps,
            category,
            tags,
            userId
        } = req.body;


        const newRecipe = new RecipeModel({
            name,
            image,
            excerpt,
            description,
            ingredients,
            steps,
            category,
            tags,
            userId,
        });

        const savedRecipe = await newRecipe.save();

        res.status(201).json({
            message: 'Recipe added successfully',
            recipe: savedRecipe,
        });
    } catch (error) {
        console.error('Error adding recipe:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const EditRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.body.userId;
        const updatedRecipe = req.body;

        const existingRecipe = await RecipeModel.findOne({ _id: id, userId: userId });

        if (!existingRecipe) {
            return res.status(404).json({ message: 'Recipe not found or unauthorized' });
        }

        const result = await RecipeModel.findByIdAndUpdate(id, updatedRecipe, { new: true });
        res.status(200).json({ message: 'Recipe updated successfully', recipe: result });
    } catch (error) {
        console.error('Error editing recipe:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const RemoveRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.body.userId;

        const existingRecipe = await RecipeModel.findOne({ _id: id, userId: userId });

        if (!existingRecipe) {
            return res.status(404).json({ message: 'Recipe not found or unauthorized' });
        }

        await RecipeModel.findByIdAndDelete(id);
        res.status(200).json({ message: 'Recipe removed successfully' });
    } catch (error) {
        console.error('Error removing recipe:', error);
        res.status(500).json({ message: error.message });
    }
};


module.exports = { GetUser, AddRecipe, RemoveRecipe, EditRecipe, GetAllByUser, GetOneByUser, GetAllUserRecipes };