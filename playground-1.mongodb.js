
const database = 'Recipe';
use(database);
const recipes = [
    {
        name: "Palak Paneer",
        image: "https://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Palak-Paneer-khazana-of-indian-recipe.jpg",
        excerpt: 'Just the sight of white cubes of paneer peeping through the emerald green spinach puree will make your mouth water. Blanched and pureed spinach is cooked with select spices and the paneer is tossed in at the end. This is one of the most popular paneer recipes in India is really nutritious plus quick and simple to prepare.',
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
        steps: ['Remove the stems and wash spinach thoroughly in running water. Blanch in salted boiling water for two minutes.', 'Refresh in chilled water. Squeeze out excess water. Grind into a fine paste along with green chillies.', 'Cut the paneer into one inch by one inch by half inch pieces. Heat oil in a pan.', 'Add cumin seeds. When they begin to change colour, add garlic and sauté for half a minute.', 'Add the spinach puree and stir. Check seasoning.', 'Add water if required. When the gravy comes to a boil, add the paneer and mix well. Stir in lemon juice.', 'Finally add fresh cream. Serve hot.', 'Serve with some fresh coriander leaves.'],
        category: "veg",
        tags: ['Paneer Palak']
    },
    {
        name: "Chickpea Curry",
        image: "https://i0.wp.com/chefsavvy.com/wp-content/uploads/vegetarian-chickpea-curry.jpg?w=665&ssl=1",
        excerpt: "This Chickpea Curry Recipe is full of flavor! All you need is 45 minutes and one pot to make this easy chickpea curry! This recipe is vegan, gluten free and vegetarian. Serve over rice with a side of garlic naan bread!",
        description: 'This chickpea curry is loaded with pantry staples like coconut milk, canned chickpeas and curry powder. The coconut milk gives this dish a bit of sweetness and the curry powder brings a little heat. This chickpea curry recipe is by no means overly spicy. If you want to add a bit more heat add a drizzle of Sriracha sauce or crushed red pepper flakes before serving. To tamp down the heat omit the jalapeno from the recipe.',
        ingredients: ['Use your favorite cooking oil.',
            ' I love using whole cloves in this recipe. If you do not have whole cloves you can substitute 3/4 teaspoon ground cloves.',
            'You can also use 1/2 tsp ground cinnamon.',
            'Has a great citrusy flavor and adds a bunch of flavor to this curry. I get my green cardamom at my local farmers market. You can also find it in the International isle of the grocery store or online! If you do not have green cardamom you can substitute 1/2 teaspoon of ground all spice.',
            'Ground turmeric, bay leaves, garam masala, cumin and curry powder are used.',
            'Is added for some heat. You can omit if you would like the curry more mild.',
            ' Diced onion, garlic and fresh ginger are added.',
            'Are added to give the chickpea coconut curry a subtle sweetness and acidity.',
            'Always make sure to give your can of coconut milk a good shake before opening!'
        ],
        steps: ['Add oil to a large saute pan and heat over medium high heat. Add in cloves, bay leaf, cinnamon stick and green cardamom. Heat 1-2 minutes or until fragrant. Keep an eye on them so they do not burn.',
            'Add onion and salt and cook over medium heat until golden brown and caramelized, about 5-6 minutes. Add ginger, garlic and jalapeno and saute for one minute.',
            'Next add in turmeric, cumin, garam masala, curry powder and diced tomato. Cook tomatoes down to a thick paste over medium heat, about 15 minutes.',
            'Add water, coconut milk, chick peas. Bring to a boil then simmer for 5 minutes.',
            'Take off of the heat and add in the fresh cilantro. Serve immediately with lime wedges if desired.'
        ],
        category: "veg",
        tags: ['Chickpea Curry']
    },
    {
        name: 'Mutton Ghee Roast Recipe',
        image: 'https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2019/Mangalore_Mutton_Ghee_Roast_Recipe_15_1600.jpg',
        excerpt: 'Mutton Ghee Roast Recipe is a finger licking good mutton roast recipe, made with rich ghee, the Mangalorean way. A dish that can be served with dosas or neer dosas or just as is, as an appetizer.',
        description: 'Mutton Ghee Roast Recipe is a masaledar preparation of mutton tossed in a fiery blend of spices with the added goodness of jaggery and tangy tamarind that balance out the flavours.Whole spices are dry roasted and ground along with garlic, and cooked in ghee with some marinated mutton to make this absolutely delectable mutton roast. There is no substitute for ghee in this recipe. Using ghee really brings out all the flavours out.',
        ingredients: ['1/2 cup Curd (Dahi / Yogurt)', '1/2 teaspoon Turmeric powder (Haldi)', '1 tablespoon Lemon juice', 'Salt , to taste', '6 Dry Red Chillies', '2 Cloves (Laung)', '1 teaspoon Whole Black Peppercorns', '1 teaspoon Methi Seeds (Fenugreek Seeds)', '2 teaspoon Coriander (Dhania) Seeds', '1 teaspoon Cumin seeds (Jeera)', '6 cloves Garlic'],
        steps: ['In a mixing bowl, combine the mutton, along with the yogurt, turmeric powder, salt and lemon juice. ', 'Mix well and massage the marinade onto the mutton pieces, set aside for a minimum of 30 minutes or even overnight.', 'Heat a skillet on medium heat, to this add the dry red chillies, peppercorns, cloves, methi seeds, coriander seeds and cumin seeds. ', 'Dry roast for about 4-6 minutes, or until the aroma of the spices wafts in the air. ', 'Turn off the flame and allow the spices to cool down. ', 'Into the mixer jar, add the roasted spices, garlic cloves, and tamarind paste, grind into a smooth paste, using some water. ', 'Transfer the ghee roast masala into a bowl and set aside. ', 'Into a pressure cooker, add the marinated mutton with 1/4 cup of water and close the lid. ', 'Pressure cook for about 3-4 whistles, or till it is about 80% done. ', 'Turn off the flame and allow the pressure to release naturally. ', 'Once done, transfer the mutton to a bowl and set aside. ', 'Heat a kadai, on medium flame, to this add the ghee. Once the ghee is hot add the curry leaves. ', 'When the curry leaves splutter, add in the the freshly ground ghee roast masala, and cook until the ghee comes up to the surface. This will take about 4-6 minutes on medium heat. ', 'To this cooked ghee roast masala, add the pre cooked mutton along with 1/4 cup of the stock from the pressure cooker. ', 'We want our mutton ghee roast to be of a thick coating consistency, so do not add too much of the stock unless you are looking to make the the mutton ghee roast to be a gravy dish. Now add in the jaggery and adjust salt. ', 'Continue to cover and cook the Mutton Ghee Roast Masala for about 8-10 minutes on low heat. Turn off the flame once done. Check the salt and spices and adjust according to taste.', 'Transfer the Mutton Ghee Roast Masala to a serving bowl and serve hot.', 'Serve Mutton Ghee Roast Recipe along with Ghee Roast Dosa Recipe  or Cucumber Neer Dosa for a hearty Sunday brunch.'],
        category: 'non-veg',
        tags: ['Mutton', 'Ghee', 'Roast']
    },
    {
        name: 'Pepper Chicken',
        image: 'https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2020/Andhra_Pepper_Chicken_Recipe_1_1600.jpg',
        excerpt: 'Give this delicious Andhra Pepper Chicken Recipe a try. It is not just simple to make but is packed with authentic flavours from black pepper and spicy just the way you will get in an Andhra Restaurant. Serve it along with Rasam and hot steamed or even as an appetizer for parties.',
        description: 'Andhra Pepper Chicken Recipe is a delicious chicken recipe famous across most Andhra Non Veg Restaurants. which you can serve either as a starter or as a side dish along with your meal. Andhra Pepper Chicken Recipe is packed with flavours from black pepper pepper providing the delicious taste that will leave you wanting for more. ',
        ingredients: ['2 Onion , thinly sliced', '4 cloves Garlic , finely chopped', '1 inch Ginger , finely chopped', '2 Green Chillies , slit', 'Salt , to taste', '3 sprig Curry leaves , roughly torn', '2-1/2 tablespoons Whole Black Peppercorns , coarsely pounded', '2 teaspoons Coriander Powder (Dhania)', '4 tablespoons Oil , to cook'],
        steps: ['To begin making Andhra Pepper Chicken Recipe, prep all the ingredients and keep ready. ', 'For the marination, make the paste of the ginger and garlic. You can use the mixer grinder or a pestle and mortar to make the paste. ', 'Into a large mixing now, add the chicken pieces along with bones, turmeric powder, ginger garlic paste, lemon juice and salt. Mix well to combine. Cover the pan, place it in the refrigerator and marinate the chicken for 30 minutes.', 'To make the Andhra Pepper Chicken, in a large wok or a kadai or a deep pan preheat the oil over medium heat.', 'Add the sliced onion, sliced green chillies, chopped ginger and chopped garlic and saute until the onion softens and turns slightly brown. Stir in the curry leaves. ', 'Once the onions start to brown, add the marinated chicken and saute for about 2 minutes with the onion ginger garlic masala. ', 'After couple of minutes, add the coriander powder and crushed pepper.  Stir well, cover the pan and cook on low heat until the Andhra Pepper Chicken comes together from sides of the pan.', 'Keep stirring intermittently and sprinkle water as and when required to cook the chicken.', 'Cook until the Andhra Pepper Chicken until it is tender and cooked. Once the chicken is soft cooked, open the lid and stir on medium heat until the moisture evaporated to make it dry.', 'Just before you are ready to serve add another 1 teaspoon crushed pepper, 1 teaspoon lemon juice and chopped coriander leaves and give it a stir.', 'Serve Andhra Pepper Chicken Recipe along with Steamed rice and Andhra Style Pappu Charu Recipe for a delicious lunch or dinner.'],
        category: 'non-veg',
        tags: ['Chicken', 'Pepper Chicken', 'Dry Chicken']
    },
    {
        name: 'Jeera Rice',
        image: 'https://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Jeera--Rice.jpg',
        excerpt: 'Jeera rice is the side dish you need if you’re feeling extra hungry.This hearty dish is made of fluffy, starchy basmati rice flavored with aromatic spices.Jeera, which is Indian for cumin, gives the rice a nice earthy taste.Ghee or butter adds a rich flavor, while cinnamon, cloves, and bay leaf give it spice.The best part? The dish only takes less than 10 minutes to make!',
        description: 'Its versatility is unsung. There is not a dish that doesn’t taste great with a side of jeera rice. Cumin seeds and select whole spices sautéed in ghee add plenty of flavour to plain rice when cooked together. With a final garnish of fresh coriander leaves a plate of jeera rice served piping hot is the ideal form of comfort food. Have it with dal, sabzi, curry or just some yogurt and pickle – a jeera rice will always come through in satisfying your taste buds.',
        ingredients: ['Basmati Rice 1 1/2 cups', 'Cumin Seeds 2 teaspoons', 'Ghee 1 1/2 tablespoons', 'Bay leaf 1', 'Black cardamom 1', 'Cinnamon 2 two inch to cook', 'Salt to taste'],
        steps: ['Wash rice thoroughly and soak in water for half an hour. Drain.', 'Heat ghee in a pan. Add cumin seeds, bay leaf, cardamom and cinnamon.When cumin seeds crackle, add the rice. Add salt to taste.', 'Stir till ghee coats every grain of rice and it looks glossy. Add three cups of water. Bring to a boil. Stir once. Reduce heat to minimum and cover the pan with a lid. Leave a little gap, otherwise water will boil over.', 'Rice will be done when holes appear on the surface and water has been completely absorbed. Fork the rice out onto a serving dish. This will separate each grain. Serve hot with any curry.'],
        category: 'veg',
        tags: ['Rice', 'Jeera Rice', 'Dry Rice']
    },
    {
        name: 'Grilled Chicken',
        image: 'https://www.ndtv.com/cooks/images/grilled-chicken-620.jpg',
        excerpt: 'Chicken marinated in home-made spice powder and green paste. This recipe is grilled to perfection and served with a fresh salsa of grapes, spring onion and cherry tomatoes.',
        description: 'Chicken marinated in home-made spice powder and green paste. This recipe is grilled to perfection and served with a fresh salsa of grapes, spring onion and cherry tomatoes.',
        ingredients: ['1 chicken breast (skinless, boneless)', '1 tbsp olive oil', '1 tsp ginger garlic paste', '1 tsp spices powder', '1 cup mix of parsley, coriander, green spring onion', 'to taste salt and pepper', '1/2 cup spring onion (white part), chopped', '1 cup cherry tomatoes', '1/2 cup green/black grapes', '1 tsp green chilli, chopped', '1 yellow bell pepper, chopped', '1 tsp parsley, chopped', '1 tsp coriander, chopped', '2 Basil leaves', '1 tsp lemon juice', '2 tsp olive oil', 'to taste salt and pepper'],
        steps: ['Add fennel, pepper, cinnamon powder, star anise, roast and grind to a powder.', 'Store in air tight container cool dry place.', 'Blend parsley, the green part of the spring onion and coriander into a smooth green paste.', 'Marinate the chicken breast with salt, pepper, spice powder and green paste (for about half an hour).', 'Cook in a nice hot pan/ grill or bake.'],
        category: 'non-veg',
        tags: ['chicken', 'grilled chicken']
    },
    {
        name: 'Fish Biryani',
        image: 'https://www.ndtv.com/cooks/images/biryani.4.jpg',
        excerpt: 'This classic Malabar Fish Biryani can be devoured at all times. Enjoy the delicious taste of this ever-charming dish. Pair it with delicious raita and mint chutney and savour!.',
        description: 'This classic Malabar Fish Biryani can be devoured at all times. Enjoy the delicious taste of this ever-charming dish. Pair it with delicious raita and mint chutney and savour!.',
        ingredients: ['1 kg seer fish', '1 kg onions', '100 gm green chillies', '70 gm garlic', '70 gm ginger', 'Juice of 2 lemons', '1 cup coriander leaves', '1 cup yoghurt', 'Salt to taste', '1 kg rice (kaima rice is best)', '3 Tbsp ghee', '1 cup cooking oil', '½ kg tomatoes', '1 tsp turmeric powder', '2 Tbsp cashew nuts broken', '2 Tbsp raisins', '4 glasses water (in proportion to the number of cups of rice)', '3 pods cardamom', '3 cinnamon sticks', 'A pinch of garam masala'],
        steps: ['Take 250 gm onions and cut them into thin slices. Heat oil and 1/2 cup ghee in a pan, and fry the onion till golden brown. Fry cashew nuts and raisins and keep aside.', 'Apply turmeric powder with enough salt and little water on the fish.', 'Heat 2 tablespoons oil in a frying pan. Lightly fry the fish till half done and keep aside.', 'In a heavy-bottomed vessel, heat 3 tablespoons of oil. Grind the remaining onion in a blender with 1/2 cup water. Add this onion mixture to the hot oil.', 'Meanwhile crush ginger, garlic and chillies. Add this paste to the onion mixture. Stir well for 3-4 minutes.', 'Add tomatoes, yoghurt and salt. Cook for some time till the water evaporates. Add the fried fish pieces, coriander leaves and the juice from the lemons. Keep aside.', 'Heat ghee in a non-stick vessel. Add 1/2 chopped onion, cardamoms and cinnamon. Immediately add the washed rice (drain without any water).', 'Add boiled water (1:2 ratio) and salt and cook on high flame till the water is absorbed by the rice.', 'Keep the rice covered for 10 minutes. Sprinkle garam masala powder over the rice.', 'Now take a heavy bottomed vessel and add the cooked rice in one layer at the bottom. Add a few spoons of the fish masala. Toss some fried onion, nuts and raisins and a little garam masala powder and cover with a rice layer.', 'Layer it up, finishing with the garnishes on top.', 'Take a napkin (radius of the vessel), dampen it with water and a little rose water, and cover the vessel.', 'Put the biryani on dum for 1 hour with light heat for the flavours to develop. Serve hot.'],
        category: 'non-veg',
        tags: ['fish biryani', 'biryani']
    },
    {
        name: 'Aloo Chaat',
        image: 'https://www.greedygourmet.com/wp-content/uploads/2020/10/aloochaat.jpg',
        excerpt: 'One of the most delicious Indian street food dishes, aloo chaat is so simple to make you can easily make your own at home.',
        description: 'Aloo Chaat is a classic Indian street food recipe comprising potatoes fried in spices and topped with yogurt and various chutneys.',
        ingredients: ['1kg (2lbs) potatoes, peeled and cubed', '30ml (2 tbsp) oil', '4 garlic cloves, peeled and chopped finely', '2.5cm (1in) fresh ginger, peeled and grated', '1 green chilli, topped and chopped finely', '2g (½ tsp) ground cumin', '2g (½ tsp) chaat masala', '1g (¼ tsp) salt', '2g (½ tsp) red chilli powder', '60g (4 tbsp) nylon sev', '60g (4 tbsp) green chutney', '60g (4 tbsp) mango chutney', '60g (4 tbsp) plain yogurt', '10g (½ cup) cilantro/coriander leaves, washed and chopped', '½ pomegranate, arils only'],
        steps: ['Blanch the potato cubes by placing them in a pot full of salted water and bringing it to a boil.', 'Once boiling point is reached, drain the potatoes and set to one side to steam dry.', 'Add the oil to a large frying pan and bring a medium temperature.', 'Add the garlic, ginger and chilli and fry for 30 seconds.', 'Tip in the potato cubes and fry until they turn golden, which takes about 3-5 minutes, stirring constantly.', 'Sprinkle the cumin, chaat masala, salt and chilli powder on top of the potatoes and stir.', 'Stir for 2 minutes, check that the potatoes are now cooked. If not, continue frying until they are until desired texture is achieved.', 'When potatoes are cooked, remove from heat and tip into a serving bowl.', 'Sprinkle with nylon sev, green chutney, mango chutney, yogurt, cilantro and pomegranate.', 'Serve immediately. Enjoy!'],
        category: 'veg',
        tags: ['veg chaat', 'chaat', 'aloo chaat']
    }
];
db.recipes.insertMany(recipes);