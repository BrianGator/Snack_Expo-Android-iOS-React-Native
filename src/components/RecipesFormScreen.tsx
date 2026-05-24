import React, { useState, useEffect } from "react";
import { Recipe, Ingredient } from "../types";
import { ArrowLeft, Plus, Trash2, Save, Sparkles } from "lucide-react";

interface RecipesFormScreenProps {
  recipeToEdit: Recipe | null;
  onSave: (recipe: Recipe) => void;
  onCancel: () => void;
}

// Beautiful preset image choices if users don't have a URL handy!
const PRESET_IMAGES = [
  { name: "Pasta", url: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=400&q=80" },
  { name: "Salad", url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80" },
  { name: "Steak", url: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80" },
  { name: "Dessert", url: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80" },
];

export default function RecipesFormScreen({
  recipeToEdit,
  onSave,
  onCancel,
}: RecipesFormScreenProps) {
  const [recipeName, setRecipeName] = useState("");
  const [recipeImage, setRecipeImage] = useState("");
  const [recipeInstructions, setRecipeInstructions] = useState("");
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { name: "", measure: "" },
  ]);
  const [prepTime, setPrepTime] = useState("25 mins");
  const [servings, setServings] = useState(4);
  const [calories, setCalories] = useState(350);
  const [difficulty, setDifficulty] = useState<'Easy' | 'Medium' | 'Hard'>("Easy");

  // Load existing recipe data if we are in Edit mode
  useEffect(() => {
    if (recipeToEdit) {
      setRecipeName(recipeToEdit.recipeName);
      setRecipeImage(recipeToEdit.recipeImage);
      setRecipeInstructions(recipeToEdit.recipeInstructions);
      setIngredients(
        recipeToEdit.ingredients.length > 0
          ? [...recipeToEdit.ingredients]
          : [{ name: "", measure: "" }]
      );
      setPrepTime(recipeToEdit.prepTime || "25 mins");
      setServings(recipeToEdit.servings || 4);
      setCalories(recipeToEdit.calories || 350);
      setDifficulty(recipeToEdit.difficulty || "Easy");
    }
  }, [recipeToEdit]);

  const addIngredientField = () => {
    setIngredients([...ingredients, { name: "", measure: "" }]);
  };

  const removeIngredientField = (index: number) => {
    if (ingredients.length === 1) return; // Keep at least one row
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };

  const handleIngredientChange = (
    index: number,
    field: keyof Ingredient,
    value: string
  ) => {
    const newIngredients = [...ingredients];
    newIngredients[index][field] = value;
    setIngredients(newIngredients);
  };

  const handlePresetSelect = (url: string) => {
    setRecipeImage(url);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic Validation
    if (!recipeName.trim()) {
      alert("Please provide a recipe name!");
      return;
    }

    const filteredIngredients = ingredients.filter(
      (ing) => ing.name.trim() !== ""
    );
    if (filteredIngredients.length === 0) {
      alert("Please add at least one ingredient with a name!");
      return;
    }

    if (!recipeInstructions.trim()) {
      alert("Please enter step-by-step preparation instructions!");
      return;
    }

    const finalImage = recipeImage.trim() || PRESET_IMAGES[0].url;

    const finalRecipe: Recipe = {
      idFood: recipeToEdit ? recipeToEdit.idFood : "custom_" + Date.now().toString(),
      recipeName: recipeName.trim(),
      category: "My Food", // Saved in My Food category
      recipeImage: finalImage,
      recipeInstructions: recipeInstructions.trim(),
      ingredients: filteredIngredients,
      prepTime,
      servings,
      calories,
      difficulty,
      isCustom: true,
    };

    onSave(finalRecipe);
  };

  return (
    <div className="flex flex-col h-full bg-brand-bg select-none">
      {/* Header Bar */}
      <div className="flex items-center justify-between bg-white px-4 py-4 border-b border-slate-100 shadow-sm shrink-0">
        <button
          onClick={onCancel}
          className="p-2 -ml-2 rounded-full hover:bg-slate-100 text-slate-700 transition"
          type="button"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="font-display font-extrabold text-slate-800 text-lg">
          {recipeToEdit ? "Edit Custom Recipe" : "Add New Recipe"}
        </span>
        <div className="w-9" />
      </div>

      {/* Scrollable Form Body */}
      <form
        onSubmit={handleSubmit}
        className="flex-1 overflow-y-auto no-scrollbar p-5 space-y-6"
      >
        {/* Section 1: Basic Info */}
        <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs space-y-4">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">
            Basic Information
          </h3>

          {/* Recipe Name */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">
              Recipe Name *
            </label>
            <input
              type="text"
              required
              value={recipeName}
              onChange={(e) => setRecipeName(e.target.value)}
              placeholder="e.g. Grandma's Famous Lasagna"
              className="w-full text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-orange focus:bg-white focus:outline-hidden transition"
            />
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">
                Prep Time
              </label>
              <input
                type="text"
                value={prepTime}
                onChange={(e) => setPrepTime(e.target.value)}
                placeholder="e.g. 25 mins"
                className="w-full text-sm px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-orange focus:outline-hidden focus:bg-white text-center transition font-semibold"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">
                Servings
              </label>
              <input
                type="number"
                min="1"
                value={servings}
                onChange={(e) => setServings(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full text-sm px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-orange focus:outline-hidden focus:bg-white text-center transition font-semibold"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">
                Calories (kcal)
              </label>
              <input
                type="number"
                min="0"
                value={calories}
                onChange={(e) => setCalories(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-full text-sm px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-orange focus:outline-hidden focus:bg-white text-center transition font-semibold"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">
                Difficulty Level
              </label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value as any)}
                className="w-full text-sm px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-orange focus:outline-hidden focus:bg-white text-center transition font-semibold"
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
          </div>
        </div>

        {/* Section 2: Image Media Selection */}
        <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">
              Recipe Photograph / Image
            </h3>
            <span className="text-[10px] text-brand-orange font-semibold flex items-center gap-0.5">
              <Sparkles className="w-3 h-3" /> Preset Available
            </span>
          </div>

          {/* URL Input */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">
              Image URL Link
            </label>
            <input
              type="text"
              value={recipeImage}
              onChange={(e) => setRecipeImage(e.target.value)}
              placeholder="Paste any food image address (HTTPS)..."
              className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-orange focus:bg-white focus:outline-hidden transition text-slate-700"
            />
          </div>

          {/* Preset Grid Choices */}
          <div className="space-y-1.5">
            <p className="text-[11px] font-medium text-slate-400">
              Or tap a high-quality preset for your recipe card:
            </p>
            <div className="grid grid-cols-4 gap-2">
              {PRESET_IMAGES.map((preset) => (
                <button
                  key={preset.name}
                  type="button"
                  onClick={() => handlePresetSelect(preset.url)}
                  className={`relative aspect-square rounded-lg overflow-hidden border-2 transition duration-200 hover:brightness-105 active:scale-95 ${
                    recipeImage === preset.url
                      ? "border-brand-orange ring-2 ring-brand-orange/20"
                      : "border-slate-100"
                  }`}
                >
                  <img src={preset.url} alt={preset.name} className="w-full h-full object-cover" />
                  <span className="absolute bottom-0 inset-x-0 bg-black/50 text-[9px] text-white py-0.5 text-center font-bold font-sans">
                    {preset.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Render real-time Image Preview */}
          <div className="pt-2">
            <p className="text-xs font-semibold text-slate-600 mb-1">Preview Image</p>
            {recipeImage ? (
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                <img
                  src={recipeImage}
                  alt="Recipe Preview"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=400&q=80";
                  }}
                />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50 text-center">
                <p className="text-xs text-slate-400 font-medium">
                  Provide an image URL or choose a preset above to preview your dish.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Section 3: Ingredients Editor */}
        <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">
              Ingredients *
            </h3>
            <button
              type="button"
              onClick={addIngredientField}
              className="text-xs font-bold text-brand-orange hover:text-orange-600 flex items-center gap-1 bg-orange-55 px-3 py-1.5 rounded-full transition"
            >
              <Plus className="w-3.5 h-3.5" /> Add Ingredient
            </button>
          </div>

          <div className="space-y-3">
            {ingredients.map((ingredient, idx) => (
              <div key={idx} className="flex gap-2 items-center">
                <input
                  type="text"
                  required
                  value={ingredient.name}
                  onChange={(e) =>
                    handleIngredientChange(idx, "name", e.target.value)
                  }
                  placeholder="Ingredient (e.g. Milk)"
                  className="flex-1 text-sm px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-orange focus:outline-hidden focus:bg-white transition"
                />
                <input
                  type="text"
                  required
                  value={ingredient.measure}
                  onChange={(e) =>
                    handleIngredientChange(idx, "measure", e.target.value)
                  }
                  placeholder="Measure (e.g. 2 cups)"
                  className="w-[120px] text-sm px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-orange focus:outline-hidden focus:bg-white transition text-center"
                />
                <button
                  type="button"
                  disabled={ingredients.length === 1}
                  onClick={() => removeIngredientField(idx)}
                  className={`p-2 rounded-lg transition ${
                    ingredients.length === 1
                      ? "text-slate-200 cursor-not-allowed"
                      : "text-rose-500 hover:bg-rose-50"
                  }`}
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Step-by-Step Instructions */}
        <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs space-y-3">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">
            Preparation Instructions *
          </h3>
          <textarea
            required
            rows={5}
            value={recipeInstructions}
            onChange={(e) => setRecipeInstructions(e.target.value)}
            placeholder="1. Boil the water in a pan.&#10;2. Mix in the dry seasoning.&#10;3. Add pasta and stir continuously till cook."
            className="w-full text-sm px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-orange focus:outline-hidden focus:bg-white resize-none transition leading-relaxed"
          />
        </div>

        {/* Save Button */}
        <button
          type="submit"
          className="w-full py-4.5 bg-brand-orange text-white font-extrabold text-base rounded-2xl shadow-md hover:bg-orange-600 active:scale-[0.98] transition flex items-center justify-center gap-2"
        >
          <Save className="w-5 h-5" />
          <span>Save Recipe</span>
        </button>
      </form>

      {/* Written By footer always present on every page */}
      <div className="bg-white py-3 border-t border-slate-100 flex items-center justify-center shrink-0">
        <span className="text-[11px] font-semibold text-slate-400 tracking-wide">
          Written by Brian McCarthy
        </span>
      </div>
    </div>
  );
}
