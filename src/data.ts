import { Category, Recipe } from "./types";

export const INITIAL_CATEGORIES: Category[] = [
  {
    idCategory: "1",
    strCategory: "Chicken",
    strCategoryThumb: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=200&q=80",
  },
  {
    idCategory: "2",
    strCategory: "Beef",
    strCategoryThumb: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=200&q=80",
  },
  {
    idCategory: "3",
    strCategory: "Dessert",
    strCategoryThumb: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=200&q=80",
  },
  {
    idCategory: "4",
    strCategory: "Pasta",
    strCategoryThumb: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=200&q=80",
  },
  {
    idCategory: "5",
    strCategory: "Seafood",
    strCategoryThumb: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=200&q=80",
  },
  {
    idCategory: "6",
    strCategory: "Vegetarian",
    strCategoryThumb: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=200&q=80",
  },
  {
    idCategory: "7",
    strCategory: "Pork",
    strCategoryThumb: "https://images.unsplash.com/photo-1602410228300-a24a366cd528?auto=format&fit=crop&w=200&q=80",
  },
  {
    idCategory: "8",
    strCategory: "Salad",
    strCategoryThumb: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=200&q=80",
  },
  {
    idCategory: "9",
    strCategory: "Breakfast",
    strCategoryThumb: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=200&q=80",
  },
  {
    idCategory: "10",
    strCategory: "Soup",
    strCategoryThumb: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=200&q=80",
  }
];

export const INITIAL_RECIPES: Recipe[] = [
  // CHICKEN RECIPES
  {
    idFood: "c1",
    recipeName: "Butter Chicken (Murgh Makhani)",
    category: "Chicken",
    recipeImage: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
    recipeInstructions: "1. Marinate chicken pieces in ginger-garlic paste, yogurt, lemon juice, Kashmiri red chili powder, turmeric, and garam masala for 2 hours.\n2. Sear the chicken in hot butter in batches until browned. Set aside.\n3. In the same pan, cook onions, garlic, and ginger until soft. Add canned tomatoes, garam masala, ground cumin, and chili powder. Cook for 15 minutes, then blend into a smooth puree.\n4. Return sauce to the pan. Strir in heavy cream and butter. Slide back the seared chicken pieces and simmer for another 10 minutes until chicken is tender.\n5. Garnish with a drizzle of heavy cream and fresh cilantro leaves. Serve with fresh hot garlic naan.",
    ingredients: [
      { name: "Chicken Thighs (Cut into cubes)", measure: "800g" },
      { name: "Plain Yogurt", measure: "1/2 cup" },
      { name: "Ginger-Garlic Paste", measure: "2 tbsp" },
      { name: "Butter", measure: "100g" },
      { name: "Heavy Cream", measure: "1/2 cup" },
      { name: "Canned Tomato Puree", measure: "400g" },
      { name: "Kashmiri Red Chili", measure: "1 tbsp" },
      { name: "Garam Masala", measure: "1.5 tbsp" },
      { name: "Fresh Cilantro", measure: "Garnish" }
    ],
    prepTime: "35 mins",
    servings: 4,
    calories: 620,
    difficulty: "Medium"
  },
  {
    idFood: "c2",
    recipeName: "Lemon Garlic Herb Roasted Chicken",
    category: "Chicken",
    recipeImage: "https://images.unsplash.com/photo-1598103442097-8b74394b98c6?auto=format&fit=crop&w=600&q=80",
    recipeInstructions: "1. Preheat oven to 425°F (220°C).\n2. Pat whole chicken dry. Rub under the skin and inside cavity with butter mixed with minced garlic, chopped rosemary, thyme, lemon zest, salt, and black pepper.\n3. Stuff cavity with lemon halves, half a bulb of garlic, and fresh herb sprigs.\n4. Tie legs with kitchen twine. Roast for 1 hour 20 minutes, basting with juices occasionally, until internal temperature reaches 165°F (74°C).\n5. Let rest for 15 minutes before carving to preserve juicy tenderness.",
    ingredients: [
      { name: "Whole Chicken", measure: "1 (approx 2kg)" },
      { name: "Lemons", measure: "2" },
      { name: "Garlic", measure: "1 bulb" },
      { name: "Salted Butter", measure: "1/3 cup" },
      { name: "Fresh Rosemary", measure: "3 sprigs" },
      { name: "Fresh Thyme", measure: "5 sprigs" },
      { name: "Olive oil", measure: "2 tbsp" }
    ],
    prepTime: "90 mins",
    servings: 6,
    calories: 450,
    difficulty: "Medium"
  },

  // BEEF RECIPES
  {
    idFood: "b1",
    recipeName: "Classic Beef Cheeseburger",
    category: "Beef",
    recipeImage: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    recipeInstructions: "1. Shape ground chuck into patties, slightly wider than the buns. Season heavily with kosher salt and black pepper.\n2. Heat a cast iron skillet or grill until smoking hot. Cook patty for 3 minutes on one side to get a beautiful golden crust.\n3. Flip patty, place slice of cheddar cheese on top immediately, and cover skillet with lid for 2 minutes to melt the cheese.\n4. Lightly toast the buns with butter.\n5. Assemble: base bun, lettuce, tomato, beef patty with melted cheese, pickles, and burger sauce (mayo, ketchup, relish). Top with bun.",
    ingredients: [
      { name: "Ground Chuck (80/20 beef)", measure: "450g" },
      { name: "Cheddar Cheese Slices", measure: "2/4 slices" },
      { name: "Brioche Burger Buns", measure: "4" },
      { name: "Lettuce Leaves & Tomato Slices", measure: "To taste" },
      { name: "Pickles", measure: "4-8 slices" },
      { name: "Salt and Pepper", measure: "Generous pinch" }
    ],
    prepTime: "15 mins",
    servings: 4,
    calories: 540,
    difficulty: "Easy"
  },
  {
    idFood: "b2",
    recipeName: "Slow Cooked Ribeye Steak",
    category: "Beef",
    recipeImage: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
    recipeInstructions: "1. Season thick ribeye steak with coarse salt and freshly ground black pepper on all sides. Allow to sit at room temperature for 30 minutes.\n2. Heat oil in cast iron skillet on high heat until shimmering.\n3. Sear steak for about 2-3 minutes per side without moving to create an deep golden crust.\n4. Toss in butter, smashed garlic cloves, and rosemary. Tilt pan and spoon molten butter continuously over steak for 2 more minutes (basting).\n5. Remove, rest for 8 minutes, slice, and finish with flaky sea salt.",
    ingredients: [
      { name: "Ribeye Steak", measure: "500g" },
      { name: "Garlic Cloves", measure: "3" },
      { name: "Unsalted Butter", measure: "3 tbsp" },
      { name: "Fresh Rosemary", measure: "1 sprig" },
      { name: "Sea Salt & Black Pepper", measure: "To taste" }
    ],
    prepTime: "25 mins",
    servings: 2,
    calories: 710,
    difficulty: "Easy"
  },

  // DESSERT RECIPES
  {
    idFood: "d1",
    recipeName: "Decadent Chocolate Lava Cake",
    category: "Dessert",
    recipeImage: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
    recipeInstructions: "1. Preheat oven to 425°F (218°C). Butter and dust 4 ramekins with cocoa powder.\n2. Melt dark chocolate and butter together until silky smooth. Whisk well and let cool slightly.\n3. Whisk whole eggs, egg yolks, sugar, and salt together until pale and thickened.\n4. Fold the chocolate mixture and flour gently into the eggs until combined.\n5. Divide into ramekins and bake for 11-13 minutes. Edits must be firm while center soft. Invert onto plates, dust with powdered sugar, and serve hot.",
    ingredients: [
      { name: "High Quality Dark Chocolate", measure: "120g" },
      { name: "Unsalted Butter", measure: "1/2 cup" },
      { name: "Eggs (whole)", measure: "2" },
      { name: "Egg Yolks", measure: "2" },
      { name: "Granulated Sugar", measure: "1/4 cup" },
      { name: "All-Purpose Flour", measure: "3 tbsp" }
    ],
    prepTime: "20 mins",
    servings: 4,
    calories: 380,
    difficulty: "Medium"
  },

  // PASTA RECIPES
  {
    idFood: "p1",
    recipeName: "Authentic Carbonara",
    category: "Pasta",
    recipeImage: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=600&q=80",
    recipeInstructions: "1. Cook spaghetti in boiling salted water. Keep 1 cup pasta water.\n2. Crisp cubed guanciale in a dry pan until golden. Turn off heat.\n3. Whisk egg yolks, whole egg, and finely grated Pecorino Romano together with plenty of black pepper in a bowl.\n4. Drain pasta, quickly add to hot pan with guanciale off heat. Let cool slightly so eggs don't scramble.\n5. Pour egg mixture over pasta, add splash of pasta water, and toss vigorously to build a silky, glossy sauce of melted cheese and emulsified egg.",
    ingredients: [
      { name: "Spaghetti", measure: "400g" },
      { name: "Guanciale or Pancetta", measure: "150g" },
      { name: "Egg Yolks", measure: "4 large" },
      { name: "Whole Egg", measure: "1 large" },
      { name: "Pecorino Romano Cheese", measure: "75g" },
      { name: "Black Pepper", measure: "To taste" }
    ],
    prepTime: "20 mins",
    servings: 4,
    calories: 590,
    difficulty: "Hard"
  },

  // SEAFOOD RECIPES
  {
    idFood: "s1",
    recipeName: "Garlic Butter Lemon Salmon",
    category: "Seafood",
    recipeImage: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=80",
    recipeInstructions: "1. Season salmon fillets with salt, pepper, and garlic powder.\n2. Melt butter and oil in a skillet over medium-high heat. Sear salmon skin-side down for 4 minutes until crispy.\n3. Flip fillets and cook for 3-4 more minutes.\n4. Reduce heat, stir in garlic, juice of half a lemon, and fresh dill. Spoon garlic butter continuously over the salmon.\n5. Serve with lemon slices and steam roasted asparagus.",
    ingredients: [
      { name: "Salmon Fillets", measure: "4" },
      { name: "Unsalted Butter", measure: "3 tbsp" },
      { name: "Olive Oil", measure: "1 tbsp" },
      { name: "Garlic Minced", measure: "4 cloves" },
      { name: "Fresh Lemon Juice", measure: "2 tbsp" },
      { name: "Fresh chopped Dill", measure: "2 tbsp" }
    ],
    prepTime: "15 mins",
    servings: 4,
    calories: 410,
    difficulty: "Easy"
  },

  // VEGETARIAN RECIPES
  {
    idFood: "v1",
    recipeName: "Mediterranean Quinoa Salad",
    category: "Vegetarian",
    recipeImage: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    recipeInstructions: "1. Cook quinoa according to package instructions and let cool completely.\n2. In a large mixing bowl, toss together cooked quinoa, sliced cherry tomatoes, crisp chopped cucumbers, red onion rings, pitted kalamata olives, and crumbled feta cheese.\n3. Toast pine nuts until golden and add them.\n4. Whisk olive oil, red wine vinegar, dried oregano, salt, and pepper. Drizzle over salad and toss gently.",
    ingredients: [
      { name: "Uncooked Quinoa", measure: "1 cup" },
      { name: "Cherry Tomatoes halved", measure: "1 cup" },
      { name: "Cucumber diced", measure: "1 large" },
      { name: "Red Onion finely sliced", measure: "1/4 cup" },
      { name: "Kalamata Olives", measure: "1/2 cup" },
      { name: "Feta Cheese crumbled", measure: "100g" },
      { name: "Extra Virgin Olive Oil", measure: "3 tbsp" },
      { name: "Red Wine Vinegar", measure: "1.5 tbsp" }
    ],
    prepTime: "15 mins",
    servings: 3,
    calories: 290,
    difficulty: "Easy"
  },

  // PORK RECIPES
  {
    idFood: "k1",
    recipeName: "Honey Garlic Glazed Pork Chops",
    category: "Pork",
    recipeImage: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=600&q=80",
    recipeInstructions: "1. Season thick pork chops with salt, pepper, garlic powder, and paprika.\n2. Sear chops in a hot skillet with olive oil for 4 minutes per side until beautifully caramelized and golden.\n3. Add melted butter, minced garlic, raw honey, apple cider vinegar, and chicken broth to the skillet around the chops.\n4. Reduce heat to medium. Let sauce thicken and bubble into a rich caramel glaze. Spoon coating sauce generously onto pork chops to cook through.\n5. Rest for 5 minutes and garnish with fresh parsley.",
    ingredients: [
      { name: "Bone-in Pork Chops", measure: "4 thick-cut" },
      { name: "Garlic cloves minced", measure: "5" },
      { name: "Honey", measure: "1/3 cup" },
      { name: "Apple Cider Vinegar", measure: "1 tbsp" },
      { name: "Chicken Broth", measure: "2 tbsp" },
      { name: "Paprika", measure: "1 tsp" }
    ],
    prepTime: "20 mins",
    servings: 4,
    calories: 490,
    difficulty: "Medium"
  },

  // SALAD RECIPES
  {
    idFood: "l1",
    recipeName: "Grilled Chicken Caesar Salad",
    category: "Salad",
    recipeImage: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=600&q=80",
    recipeInstructions: "1. Season chicken breast with salt, garlic powder, black pepper, and olive oil. Grill for 6-7 minutes on each side until fully cooked. Slice into strips.\n2. Chop romaine lettuce leaves and wash/spin dry.\n3. Toss lettuce in a large bowl with creamy Caesar dressing, shredded parmesan, and crunchy baked croutons.\n4. Arrange chicken strips on top, garnish with shaved parm, and serve immediately.",
    ingredients: [
      { name: "Chicken Breasts", measure: "2" },
      { name: "Romaine Lettuce heads", measure: "2 large" },
      { name: "Creamy Caesar Dressing", measure: "1/2 cup" },
      { name: "Garlic Croûtons", measure: "1 cup" },
      { name: "Parmigiano-Reggiano shredded", measure: "1/2 cup" }
    ],
    prepTime: "20 mins",
    servings: 2,
    calories: 390,
    difficulty: "Easy"
  },

  // BREAKFAST
  {
    idFood: "fr1",
    recipeName: "Fluffy Blueberry Pancakes",
    category: "Breakfast",
    recipeImage: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=600&q=80",
    recipeInstructions: "1. Whisk together flour, sugar, baking powder, and salt in a bowl.\n2. In another container, blend buttermilk, melted butter, and eggs. Combine wet and dry ingredients gently, keeping small lumps.\n3. Heat stove grid or skillet, melt butter. Scoop batter onto skillet, press fresh blueberries into each pancake.\n4. Bubble for 3 minutes until steam holes appear, flip and bake for 2 more minutes.\n5. Serve with organic maple syrup and a dollop of butter.",
    ingredients: [
      { name: "All-Purpose Flour", measure: "2 cups" },
      { name: "Baking Powder", measure: "2 tsp" },
      { name: "Buttermilk", measure: "1.5 cups" },
      { name: "Fresh Blueberries", measure: "1 cup" },
      { name: "Granulated Sugar", measure: "2 tbsp" },
      { name: "Butter melted", measure: "3 tbsp" }
    ],
    prepTime: "20 mins",
    servings: 4,
    calories: 320,
    difficulty: "Easy"
  },

  // SOUP
  {
    idFood: "so1",
    recipeName: "Hearty Tuscan Tomato Soup",
    category: "Soup",
    recipeImage: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
    recipeInstructions: "1. Warm olive oil in stockpot. Cook diced onions, celery, and garlic until aromatic and soft.\n2. Add canned whole peeled tomatoes, crushing under spoon, along with vegetable stock, dried basil, and oregano.\n3. Simmer covered on medium-heat for 20 minutes to amalgamate elements.\n4. Puree in soup blender until perfectly creamy and emulsified.\n5. Swirl in heavy cream and hand-shredded fresh basil. Toast sourdough bread with cheese for dipping.",
    ingredients: [
      { name: "Canned San Marzano Tomatoes", measure: "800g" },
      { name: "Vegetable Stock", measure: "2 cups" },
      { name: "Yellow Onion, Celery stalk", measure: "1 each" },
      { name: "Garlic cloves mashed", measure: "4" },
      { name: "Heavy Cream", measure: "1/4 cup" },
      { name: "Fresh Sweet Basil leaves", measure: "10 pieces" }
    ],
    prepTime: "30 mins",
    servings: 4,
    calories: 240,
    difficulty: "Easy"
  }
];
