export interface Ingredient {
  name: string;
  measure: string;
}

export interface Recipe {
  idFood: string;
  recipeName: string;
  category: string;
  recipeImage: string;
  recipeInstructions: string;
  ingredients: Ingredient[];
  prepTime: string;      // Preparation time
  servings: number;      // Number of servings
  calories: number;      // Calories
  difficulty: 'Easy' | 'Medium' | 'Hard'; // Difficulty level
  isCustom?: boolean;
}

export interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
}

export interface Review {
  reviewId: string;
  recipeId: string;
  userName: string;
  rating: number; // 1-5 stars
  comment: string;
  createdAt: string;
}

