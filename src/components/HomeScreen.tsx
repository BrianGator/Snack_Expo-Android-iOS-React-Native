import React, { useState } from "react";
import { Category, Recipe } from "../types";
import { INITIAL_CATEGORIES } from "../data";
import {
  Heart,
  Plus,
  Search,
  BookOpen,
  PlusCircle,
  Edit,
  Trash2,
  ListFilter,
  Users,
  Compass,
  ArrowRight,
  Flame,
  ChefHat
} from "lucide-react";

interface HomeScreenProps {
  allRecipes: Recipe[];
  customRecipes: Recipe[];
  favorites: string[];
  activeCategory: string;
  onChangeCategory: (category: string) => void;
  onSelectRecipe: (recipe: Recipe) => void;
  onAddRecipe: () => void;
  onEditRecipe: (recipe: Recipe, index: number) => void;
  onDeleteRecipe: (recipeId: string) => void;
  onToggleFavorite: (recipeId: string) => void;
  onToggleFavoritesView: () => void;
}

export default function HomeScreen({
  allRecipes,
  customRecipes,
  favorites,
  activeCategory,
  onChangeCategory,
  onSelectRecipe,
  onAddRecipe,
  onEditRecipe,
  onDeleteRecipe,
  onToggleFavorite,
  onToggleFavoritesView,
}: HomeScreenProps) {
  const [searchQuery, setSearchQuery] = useState("");

  // Categories list with My Food added
  const displayedCategories = [
    ...INITIAL_CATEGORIES,
    {
      idCategory: "my_food",
      strCategory: "My Food",
      strCategoryThumb: "placeholder" // Handled with custom user icon
    }
  ];

  // Filter recipes based on category & search Query (can search by recipe name or any ingredient name)
  const filteredRecipes = allRecipes.filter((recipe) => {
    const matchesCategory = recipe.category === activeCategory;
    const matchesSearch = recipe.recipeName
      .toLowerCase()
      .includes(searchQuery.toLowerCase()) ||
      recipe.ingredients.some((ing) =>
        ing.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const filteredMyRecipes = customRecipes.filter((recipe) => {
    return recipe.recipeName
      .toLowerCase()
      .includes(searchQuery.toLowerCase()) ||
      recipe.ingredients.some((ing) =>
        ing.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
  });

  return (
    <div className="flex flex-col h-full bg-brand-bg relative select-none">
      
      {/* Mini App Bar (Header) */}
      <div className="flex items-center justify-between bg-white px-5 py-3.5 border-b border-slate-100 shadow-xs shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-brand-orange flex items-center justify-center text-white font-extrabold shadow-sm">
            <ChefHat className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider leading-none">
              Welcome
            </p>
            <h3 className="font-display font-extrabold text-slate-800 text-sm">
              Hello, User!
            </h3>
          </div>
        </div>

        {/* Favorites button shortcut with counter badge */}
        <button
          onClick={onToggleFavoritesView}
          className="relative w-9 h-9 rounded-full bg-rose-50 flex items-center justify-center text-[#FF5C00] hover:scale-105 active:scale-95 transition shadow-xs"
          aria-label="View Favorites"
        >
          <Heart className="w-5 h-5 fill-[#FF5C00] stroke-[#FF5C00]" />
          {favorites.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-brand-orange text-white font-bold text-[9px] rounded-full w-5 h-5 flex items-center justify-center border-2 border-white shadow-xs">
              {favorites.length}
            </span>
          )}
        </button>
      </div>

      {/* Main Scrollable Area */}
      <div className="flex-1 overflow-y-auto p-5 space-y-6 no-scrollbar">
        
        {/* Title greeting container */}
        <div className="space-y-1">
          <h2 className="text-2xl font-extrabold text-slate-800 tracking-tight font-display leading-tight">
            Make your own food,
          </h2>
          <p className="text-slate-400 text-sm font-medium">
            stay at home and feel healthy.
          </p>
        </div>

        {/* Search bar input */}
        <div className="relative">
          <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder={`Search cooking recipes...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 text-sm bg-white border border-slate-200/80 rounded-2xl focus:border-brand-orange focus:outline-hidden focus:ring-1 focus:ring-brand-orange shadow-xs transition"
          />
        </div>

        {/* Horizontal scrollable categories select list *at least 10 categories* */}
        <div className="space-y-2">
          <div className="flex justify-between items-center px-0.5">
            <h4 className="text-xs font-bold font-mono text-slate-600 tracking-wider uppercase">
              Recipe Categories
            </h4>
            <span className="text-[10px] text-slate-400 font-semibold uppercase font-mono">
              {displayedCategories.length} options
            </span>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar -mx-5 px-5">
            {displayedCategories.map((cat) => {
              const isSelected = activeCategory === cat.strCategory;
              const isMyFood = cat.strCategory === "My Food";
              return (
                <button
                  key={cat.idCategory}
                  onClick={() => onChangeCategory(cat.strCategory)}
                  className={`flex flex-col items-center gap-1.5 p-2 rounded-2xl transition duration-150 shrink-0 text-center select-none ${
                    isSelected
                      ? "bg-brand-orange text-white shadow-md shadow-orange-500/20"
                      : "bg-white hover:bg-slate-100/50 border border-slate-100 text-slate-600 shadow-xs"
                  }`}
                  style={{ width: "76px" }}
                >
                  <div className={`w-12 h-12 rounded-full overflow-hidden flex items-center justify-center ${
                    isSelected ? "bg-white/25" : "bg-slate-100"
                  }`}>
                    {isMyFood ? (
                      <ChefHat className={`w-6 h-6 ${isSelected ? "text-white" : "text-brand-orange"}`} />
                    ) : (
                      <img
                        src={cat.strCategoryThumb}
                        alt={cat.strCategory}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    )}
                  </div>
                  <span className="text-[11px] font-extrabold tracking-tight line-clamp-1">
                    {cat.strCategory}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Conditional Page Feed */}
        {activeCategory === "My Food" ? (
          /* MY FOOD SCREEN */
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-display font-extrabold text-slate-800 text-lg">
                My Recipes
              </h3>
              <span className="text-xs font-bold text-brand-orange font-mono bg-orange-50 px-2 py-0.5 rounded-sm">
                {customRecipes.length} custom card{customRecipes.length === 1 ? '' : 's'}
              </span>
            </div>

            {/* Glowing CTA Button to create/add recipe */}
            <button
              onClick={onAddRecipe}
              className="flex items-center justify-between w-full p-4 bg-brand-orange text-white rounded-2xl shadow-md hover:bg-orange-600 transition active:scale-[0.99]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white">
                  <Plus className="w-6 h-6 stroke-[3px]" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-sm">Add New Recipe</p>
                  <p className="text-orange-100 text-[11px]">Save custom ingredients & setup</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 opacity-80" />
            </button>

            {/* Custom Recipes Grid */}
            {customRecipes.length === 0 ? (
              <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-slate-200 rounded-3xl bg-white text-center">
                <p className="text-sm font-semibold text-slate-700">No custom recipes yet</p>
                <p className="text-xs text-slate-400 mt-1 max-w-[200px]">
                  Take credit for your own signature delicious plates here!
                </p>
                <button
                  type="button"
                  onClick={onAddRecipe}
                  className="mt-4 px-4 py-2 bg-orange-100 hover:bg-orange-200 text-brand-orange text-xs font-bold rounded-lg transition"
                >
                  Write Your First One
                </button>
              </div>
            ) : filteredMyRecipes.length === 0 ? (
              <div className="flex flex-col items-center justify-center p-8 text-center bg-white border border-slate-100 rounded-3xl">
                <p className="text-sm font-semibold text-slate-700">No results found</p>
                <p className="text-xs text-slate-400 mt-1">Try typing a different name or ingredient!</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                {filteredMyRecipes.map((recipe, index) => (
                  <div
                    key={recipe.idFood}
                    className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm flex flex-col group relative"
                  >
                    {/* Action Layer Overlays - Edit & Delete Buttons inside card */}
                    <div className="absolute top-2 right-2 z-10 flex gap-1.5">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onEditRecipe(recipe, index);
                        }}
                        className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-slate-700 hover:text-brand-orange hover:bg-slate-50 shadow-sm transition active:scale-90"
                        title="Edit recipe"
                      >
                        <Edit className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (confirm("Are you sure you want to delete this recipe?")) {
                            onDeleteRecipe(recipe.idFood);
                          }
                        }}
                        className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-rose-500 hover:bg-slate-50 shadow-sm transition active:scale-90"
                        title="Delete recipe"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Image */}
                    <div
                      onClick={() => onSelectRecipe(recipe)}
                      className="relative aspect-video overflow-hidden cursor-pointer"
                    >
                      <img
                        src={recipe.recipeImage}
                        alt={recipe.recipeName}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Details content */}
                    <div className="p-3 flex-1 flex flex-col justify-between">
                      <div
                        onClick={() => onSelectRecipe(recipe)}
                        className="cursor-pointer"
                      >
                        <h4 className="font-display font-medium text-slate-800 text-sm line-clamp-1 group-hover:text-brand-orange transition">
                          {recipe.recipeName}
                        </h4>
                        <p className="text-[10px] text-slate-400 mt-1 line-clamp-2">
                          {recipe.recipeInstructions}
                        </p>
                      </div>

                      {/* Info and button */}
                      <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-slate-50">
                        <span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-500 font-mono font-bold capitalize">
                          {recipe.difficulty}
                        </span>
                        <button
                          onClick={() => onSelectRecipe(recipe)}
                          className="text-[11px] font-bold text-brand-orange hover:text-orange-600 transition"
                        >
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* PRESET RECIPES */
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-display font-extrabold text-slate-800 text-lg">
                Our Top Recipes
              </h3>
              <span className="text-xs font-semibold text-slate-400 font-mono">
                {filteredRecipes.length} dish{filteredRecipes.length === 1 ? '' : 'es'}
              </span>
            </div>

            {filteredRecipes.length === 0 ? (
              <div className="flex flex-col items-center justify-center p-12 text-center bg-white border border-slate-100 rounded-3xl">
                <p className="text-sm font-semibold text-slate-700">No results found</p>
                <p className="text-xs text-slate-400 mt-1">Try searching for other ingredients or categories!</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                {filteredRecipes.map((recipe) => {
                  const isFav = favorites.includes(recipe.idFood);
                  return (
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
                        className="absolute top-2.5 right-2.5 z-10 w-7.5 h-7.5 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-rose-500 hover:scale-110 shadow-sm active:scale-95 transition"
                        aria-label="Toggle Favorite"
                      >
                        <Heart className={`w-4 h-4 ${isFav ? "fill-rose-500 stroke-rose-500" : "text-rose-500"}`} />
                      </button>

                      {/* Recipe Image Trigger */}
                      <div
                        className="relative aspect-video overflow-hidden cursor-pointer bg-slate-200"
                        onClick={() => onSelectRecipe(recipe)}
                      >
                        <img
                          src={recipe.recipeImage}
                          alt={recipe.recipeName}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                          referrerPolicy="no-referrer"
                        />
                        {/* Preparation time badge */}
                        <span className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/60 text-white text-[9px] font-bold rounded-md backdrop-blur-xs">
                          {recipe.prepTime}
                        </span>
                      </div>

                      {/* Info and Click */}
                      <div className="p-3 flex-1 flex flex-col justify-between">
                        <div
                          className="cursor-pointer"
                          onClick={() => onSelectRecipe(recipe)}
                        >
                          <h4 className="font-display font-extrabold text-slate-800 text-xs sm:text-sm line-clamp-1 group-hover:text-brand-orange transition">
                            {recipe.recipeName}
                          </h4>
                          <p className="text-slate-400 text-[10px] mt-0.5">
                            Level: {recipe.difficulty} • {recipe.calories} kcal
                          </p>
                        </div>
                        <button
                          onClick={() => onSelectRecipe(recipe)}
                          className="mt-3 text-left flex items-center gap-1 text-[11px] font-bold text-brand-orange hover:text-orange-600 transition"
                        >
                          <span>Cook Detail</span>
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Written By footer always present on every page */}
      <div className="bg-white py-3 border-t border-slate-100 flex items-center justify-center shrink-0">
        <span className="text-[11px] font-semibold text-slate-400 tracking-wide">
          Written by Brian McCarthy
        </span>
      </div>
    </div>
  );
}
