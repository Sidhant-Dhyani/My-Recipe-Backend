const express = require('express');
const router = express.Router();

const { GetUser, GetAllByUser, GetOneByUser, GetAllUserRecipes, AddRecipe, EditRecipe, RemoveRecipe } = require('../controllers/users');

router.get('/getUser/:id', GetUser);
router.get('/recipeByUser/:userId', GetAllByUser); // Get All By logged In user
router.get('/getOneByUser/:userRecipeId', GetOneByUser);
router.get('/allUserRecipes', GetAllUserRecipes); // Get All by All the users
router.post('/addrecipe', AddRecipe);
router.patch('/editUserRecipe/:id', EditRecipe);
router.delete('/removeYourRecipe/:id', RemoveRecipe);

module.exports = router;