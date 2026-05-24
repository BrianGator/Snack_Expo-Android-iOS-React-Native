import React from "react";
import { Recipe } from "../types";
import { ArrowLeft, Trash2, Heart, ExternalLink } from "lucide-react";

interface FavoriteScreenProps {
  favorites: string[];
  allRecipes: Recipe[];
  onSelectRecipe: (recipe: Recipe) => void;
  onBack: () => void;
  onToggleFavorite: (idFood: string) => void;
}

export default function FavoriteScreen({
  favorites,
  allRecipes,
  onSelectRecipe,
  onBack,
  onToggleFavorite,
}: FavoriteScreenProps) {
  // Find all recipes that are favorited
  const favoriteRecipesList = allRecipes.filter((r) => favorites.includes(r.idFood));

  return (
    <div className="flex flex-col h-full bg-brand-bg relative select-none">
      {/* Header Container */}
      <div className="flex items-center justify-between bg-white px-4 py-4 border-b border-slate-100 shadow-sm">
        <button
          onClick={onBack}
          className="p-2 -ml-2 rounded-full hover:bg-slate-100 text-slate-700 transition"
          aria-label="Go back"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="font-display font-bold text-slate-800 text-lg">
          My Favorites
        </span>
        <div className="w-9" /> {/* Spacer */}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
        {favoriteRecipesList.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center px-4">
            <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center text-rose-500 mb-4 animate-pulse">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="font-display font-semibold text-slate-700 text-lg">
              No Favorite Recipes Yet
            </h3>
            <p className="text-slate-400 text-sm mt-1 max-w-xs">
              Go to the main feed, select a recipe that sounds appetizing, and tap the heart icon to save it here!
            </p>
            <button
              onClick={onBack}
              className="mt-6 px-6 py-2.5 bg-brand-orange text-white font-medium text-sm rounded-full shadow-md hover:bg-orange-600 transition"
            >
              Discover Recipes
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {favoriteRecipesList.map((recipe) => (
              <div
                key={recipe.idFood}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition duration-200 flex flex-col group relative"
              >
                {/* Heart Toggle Badge */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleFavorite(recipe.idFood);
                  }}
                  className="absolute top-2 right-2 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-rose-500 hover:scale-110 shadow-sm active:scale-95 transition"
                >
                  <Heart className="w-4 h-4 fill-rose-500" />
                </button>
 
                {/* Recipe Image Trigger */}
                <div
                  className="relative aspect-square overflow-hidden cursor-pointer bg-slate-200"
                  onClick={() => onSelectRecipe(recipe)}
                >
                  <img
                    src={recipe.recipeImage}
                    alt={recipe.recipeName}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=400&q=80";
                    }}
                  />
                  {/* Category overlay */}
                  <span className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/60 text-white text-[10px] font-semibold rounded-md backdrop-blur-xs">
                    {recipe.category}
                  </span>
                </div>

                {/* Info and Click */}
                <div className="p-3 flex-1 flex flex-col justify-between">
                  <div
                    className="cursor-pointer"
                    onClick={() => onSelectRecipe(recipe)}
                  >
                    <h4 className="font-display font-bold text-slate-800 text-sm line-clamp-1 group-hover:text-brand-orange transition">
                      {recipe.recipeName}
                    </h4>
                    <p className="text-slate-400 text-[10px] uppercase font-mono mt-0.5">
                      {recipe.difficulty} • {recipe.prepTime}
                    </p>
                  </div>
                  <button
                    onClick={() => onSelectRecipe(recipe)}
                    className="mt-3 flex items-center gap-1 text-[11px] font-semibold text-brand-orange hover:text-orange-600 transition"
                  >
                    <span>View Recipe</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Written By footer always present on every page */}
      <div className="bg-white py-3 border-t border-slate-100 flex items-center justify-center">
        <span className="text-[11px] font-semibold text-slate-400 tracking-wide">
          Written by Brian McCarthy
        </span>
      </div>
    </div>
  );
}
