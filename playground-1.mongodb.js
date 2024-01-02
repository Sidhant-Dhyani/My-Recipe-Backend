
const database = 'Recipe';
use(database);
const recipes = [
    {
        name: "Palak Paneer",
        image: "https://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Palak-Paneer-khazana-of-indian-recipe.jpg",
        excerpt: 'Just the sight of white cubes of paneer peeping through the emerald green spinach puree will make your mouth water. Blanched and pureed spinach is cooked with select spices and the paneer is tossed in at the end. This is one of the most popular paneer recipes in India is really nutritious plus quick and simple to prepare',
        description: 'Palak Paneer is a quintessential North Indian vegetarian dish made with cottage cheese and fresh spinach. Just the sight of white cubes of paneer peeping through the emerald green spinach puree will make your mouth water. Blanched and pureed spinach is cooked with select spices and the paneer is tossed in at the end. This is one of the most popular paneer recipes in India is really nutritious plus quick and simple to prepare. A sprinkling of dried fenugreek or kasuri methi and fresh cream at the end is a must to give that restaurant style vibe to it.',
        ingredients: ['Spinach 900 grams',
            'Paneer (cottage cheese) 200 grams',
            'Green chillies 2-3',
            'Garlic chopped 8-10 cloves',
            'Oil 3 tablespoons',
            'Cumin seeds 1/2 teaspoon',
            'Salt to taste',
            'Lemon juice 1 tablespoon',
            'Fresh cream 4 tablespoons'],
        steps: ['Remove the stems and wash spinach thoroughly in running water. Blanch in salted boiling water for two minutes.', 'Refresh in chilled water. Squeeze out excess water. Grind into a fine paste along with green chillies.', 'Cut the paneer into one inch by one inch by half inch pieces. Heat oil in a pan.', 'Add cumin seeds. When they begin to change colour, add garlic and sauté for half a minute.', 'Add the spinach puree and stir. Check seasoning.', 'Add water if required. When the gravy comes to a boil, add the paneer and mix well. Stir in lemon juice.', 'Finally add fresh cream. Serve hot.', 'Serve with some fresh coriander leaves.']
    }
];
db.recipes.insertMany(recipes);