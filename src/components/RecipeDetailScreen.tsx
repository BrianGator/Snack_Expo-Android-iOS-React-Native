import React, { useState } from "react";
import { Recipe, Review } from "../types";
import {
  ArrowLeft,
  Heart,
  Clock,
  Flame,
  Users,
  Compass,
  CheckCircle,
  HelpCircle,
  ChevronRight,
  BookOpen,
  MessageSquare,
  Send
} from "lucide-react";

interface RecipeDetailScreenProps {
  recipe: Recipe;
  isFavorite: boolean;
  onToggleFavorite: (idFood: string) => void;
  onBack: () => void;
  reviews: Review[];
  onAddReview: (review: Review) => void;
  hasViewed: boolean;
}

export default function RecipeDetailScreen({
  recipe,
  isFavorite,
  onToggleFavorite,
  onBack,
  reviews = [],
  onAddReview,
  hasViewed,
}: RecipeDetailScreenProps) {
  // Let user cross out ingredients as they cook! This is incredibly handy and highly polished!
  const [completedIngredients, setCompletedIngredients] = useState<Record<string, boolean>>({});

  const [userName, setUserName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [reviewError, setReviewError] = useState("");
  const [reviewSuccess, setReviewSuccess] = useState(false);

  const averageRating = reviews.length > 0
    ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)
    : "0.0";
  const numReviews = reviews.length;

  const toggleIngredient = (name: string) => {
    setCompletedIngredients((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <div className="flex flex-col h-full bg-brand-bg relative select-none">
      {/* Absolute Transparent Header with Actions */}
      <div className="absolute top-0 inset-x-0 z-30 flex items-center justify-between p-4 bg-gradient-to-b from-black/60 to-transparent">
        <button
          onClick={onBack}
          className="w-10 h-10 rounded-full bg-white/95 backdrop-blur-xs flex items-center justify-center text-slate-800 shadow-md hover:bg-white active:scale-95 transition"
          aria-label="Back to main feed"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => onToggleFavorite(recipe.idFood)}
          className="w-10 h-10 rounded-full bg-white/95 backdrop-blur-xs flex items-center justify-center text-rose-500 shadow-md hover:scale-105 active:scale-95 transition"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart className={`w-5 h-5 ${isFavorite ? "fill-rose-500 stroke-rose-500" : "text-rose-500"}`} />
        </button>
      </div>

      {/* Main Flow Grid */}
      <div className="flex-1 overflow-y-auto no-scrollbar pb-6">
        {/* Header Hero Graphic */}
        <div className="relative aspect-video w-full bg-slate-200 shadow-inner overflow-hidden">
          <img
            src={recipe.recipeImage}
            alt={recipe.recipeName}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src =
                "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80";
            }}
          />
          {/* Subtle gradient overlay at the base of the image */}
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-brand-bg to-transparent" />
        </div>

        {/* Content Container */}
        <div className="px-5 pt-3 space-y-5">
          {/* Headline Metadata */}
          <div>
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="px-2.5 py-0.5 bg-orange-100 text-brand-orange text-[10px] uppercase font-bold rounded-md tracking-wider">
                {recipe.category}
              </span>
              <span className="px-2 py-0.5 bg-yellow-105 text-amber-600 border border-amber-200/50 text-[10px] uppercase font-extrabold rounded-md flex items-center gap-0.5 shadow-2xs">
                ★ {averageRating} ({numReviews} review{numReviews === 1 ? '' : 's'})
              </span>
            </div>
            <h2 className="text-2xl font-extrabold text-slate-800 mt-1.5 font-display tracking-tight">
              {recipe.recipeName}
            </h2>
          </div>

          {/* Core Metrics Grid - Ingredients, Instructions, Preparation time, Number of servings, Calories, Difficulty level */}
          <div className="grid grid-cols-4 gap-2 bg-white p-3.5 rounded-2xl border border-slate-100 shadow-xs">
            {/* Prep Time */}
            <div className="flex flex-col items-center text-center justify-center p-1.5 bg-slate-50 rounded-xl">
              <Clock className="w-4 h-4 text-emerald-500 mb-1" />
              <span className="text-[10px] text-slate-400 font-medium uppercase font-mono">Time</span>
              <span className="text-xs font-bold text-slate-700 mt-0.5 line-clamp-1">{recipe.prepTime}</span>
            </div>

            {/* Servings */}
            <div className="flex flex-col items-center text-center justify-center p-1.5 bg-slate-50 rounded-xl">
              <Users className="w-4 h-4 text-brand-orange mb-1" />
              <span className="text-[10px] text-slate-400 font-medium uppercase font-mono">Yield</span>
              <span className="text-xs font-bold text-slate-700 mt-0.5 line-clamp-1">{recipe.servings} serving{recipe.servings > 1 ? 's' : ''}</span>
            </div>

            {/* Calories */}
            <div className="flex flex-col items-center text-center justify-center p-1.5 bg-slate-50 rounded-xl">
              <Flame className="w-4 h-4 text-orange-500 mb-1" />
              <span className="text-[10px] text-slate-400 font-medium uppercase font-mono">Cal</span>
              <span className="text-xs font-bold text-slate-700 mt-0.5 line-clamp-1">{recipe.calories} kcal</span>
            </div>

            {/* Difficulty */}
            <div className="flex flex-col items-center text-center justify-center p-1.5 bg-slate-50 rounded-xl">
              <Compass className="w-4 h-4 text-sky-500 mb-1" />
              <span className="text-[10px] text-slate-400 font-medium uppercase font-mono">Level</span>
              <span className="text-xs font-bold text-slate-700 mt-0.5 line-clamp-1">{recipe.difficulty}</span>
            </div>
          </div>

          {/* Ingredients Section */}
          <div className="bg-white p-4 rounded-3xl border border-slate-100 shadow-xs space-y-3">
            <div className="flex items-center gap-1.5 text-slate-800">
              <BookOpen className="w-4 h-4 text-brand-orange" />
              <h3 className="font-display font-extrabold text-slate-800 text-base">
                Required Ingredients
              </h3>
            </div>
            <p className="text-[11px] text-slate-400">
              Tap items to cross them off as you gather or mix them:
            </p>

            <div className="divide-y divide-slate-100">
              {recipe.ingredients.map((ing, index) => {
                const isCrossed = !!completedIngredients[ing.name];
                return (
                  <div
                    key={index}
                    onClick={() => toggleIngredient(ing.name)}
                    className="flex justify-between items-center py-2.5 cursor-pointer hover:bg-slate-50/50 rounded-lg px-2 -mx-2 transition"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-md border flex items-center justify-center transition-colors ${
                        isCrossed
                          ? "bg-brand-orange border-brand-orange text-white"
                          : "border-slate-300"
                      }`}>
                        {isCrossed && <CheckCircle className="w-3.5 h-3.5 stroke-[3px]" />}
                      </div>
                      <span className={`text-sm text-slate-700 transition ${isCrossed ? "line-through text-slate-400" : ""}`}>
                        {ing.name}
                      </span>
                    </div>
                    <span className={`text-xs font-mono font-bold ${isCrossed ? "text-slate-300" : "text-brand-orange"}`}>
                      {ing.measure}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Preparation Instructions Section */}
          <div className="bg-white p-4 rounded-3xl border border-slate-100 shadow-xs space-y-3">
            <h3 className="font-display font-extrabold text-slate-800 text-base">
              Preparation Instructions
            </h3>

            {/* Formatted list or readable plain text */}
            <div className="space-y-3">
              {recipe.recipeInstructions.split("\n").map((line, idx) => {
                if (!line.trim()) return null;
                return (
                  <p
                    key={idx}
                    className="text-slate-600 text-sm leading-relaxed"
                  >
                    {line}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Ratings & Written Reviews Section */}
          <div id="recipe-ratings-reviews-card" className="bg-white p-4 rounded-3xl border border-slate-100 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
              <div className="flex items-center gap-1.5">
                <MessageSquare className="w-4 h-4 text-brand-orange" />
                <h3 className="font-display font-extrabold text-slate-800 text-base leading-tight">
                  Ratings & Reviews
                </h3>
              </div>
              <span className="text-[11px] font-extrabold font-mono text-amber-500 bg-amber-50 px-2 py-0.5 rounded border border-amber-100">
                ★ {averageRating} / 5.0 ({numReviews})
              </span>
            </div>

            {/* List of Reviews */}
            {reviews.length === 0 ? (
              <div className="py-4 text-center">
                <p className="text-slate-400 text-xs italic">
                  No reviews yet. Be the first to leave a review!
                </p>
              </div>
            ) : (
              <div className="space-y-2.5 max-h-[220px] overflow-y-auto pr-1 no-scrollbar flex flex-col">
                {reviews.map((rev) => (
                  <div key={rev.reviewId} className="bg-slate-50/50 p-3 rounded-2xl border border-slate-100/60 flex flex-col space-y-1 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-slate-700">{rev.userName}</span>
                      <div className="flex gap-0.5 text-amber-500">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i} className="text-[11px] leading-none">
                            {i < rev.rating ? "★" : "☆"}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed font-normal whitespace-pre-wrap">{rev.comment}</p>
                    <p className="text-[9px] text-slate-400 font-mono text-left">{rev.createdAt}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Submit a Review Form */}
            <div className="pt-3.5 border-t border-slate-100 space-y-3">
              <div className="bg-emerald-50/70 border border-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-2 rounded-xl flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="text-[10px] leading-tight flex-1">🔓 Session Verified: You are viewing this recipe, granting rating access!</span>
              </div>

              {reviewSuccess ? (
                <div role="status" className="p-3 bg-emerald-50 text-emerald-800 rounded-2xl text-xs font-bold text-center border border-emerald-100 animate-pulse">
                  🎉 Review submitted successfully!
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!userName.trim()) {
                      setReviewError("Please enter your name.");
                      return;
                    }
                    if (!comment.trim()) {
                      setReviewError("Please write a review comment.");
                      return;
                    }
                    if (!hasViewed) {
                      setReviewError("You must view this recipe before submitting.");
                      return;
                    }

                    // Assemble the review payload
                    const newReview: Review = {
                      reviewId: "rev_" + Math.random().toString(36).substr(2, 9),
                      recipeId: recipe.idFood,
                      userName: userName.trim(),
                      rating,
                      comment: comment.trim(),
                      createdAt: new Date().toISOString().split("T")[0],
                    };

                    onAddReview(newReview);
                    setUserName("");
                    setComment("");
                    setRating(5);
                    setReviewError("");
                    setReviewSuccess(true);
                    setTimeout(() => setReviewSuccess(false), 3000);
                  }}
                  className="space-y-3"
                >
                  <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase font-mono">
                    How was your experience?
                  </p>

                  <div className="grid grid-cols-5 gap-1.5 items-center">
                    <span className="col-span-2 text-[11px] font-bold text-slate-600">Your Stars:</span>
                    <div className="col-span-3 flex justify-end gap-1 bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5">
                      {[1, 2, 3, 4, 5].map((starValue) => (
                        <button
                          key={starValue}
                          type="button"
                          onClick={() => setRating(starValue)}
                          className="text-amber-500 hover:scale-115 transition duration-100 focus:outline-hidden"
                          aria-label={`Rate ${starValue} Stars`}
                        >
                          <span className="text-base font-sans">
                            {starValue <= rating ? "★" : "☆"}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="Your Name (e.g. Master Chef)"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-orange focus:bg-white focus:outline-hidden transition text-slate-700 font-semibold"
                    />

                    <textarea
                      placeholder="Leave a rating and describe how other cooks can replicate your success..."
                      value={comment}
                      rows={2}
                      onChange={(e) => setComment(e.target.value)}
                      className="w-full text-xs px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-orange focus:bg-white focus:outline-hidden transition resize-none leading-relaxed text-slate-700 font-medium"
                    />
                  </div>

                  {reviewError && (
                    <p className="text-[10px] text-rose-500 font-bold border-l-2 border-rose-500 pl-1.5">{reviewError}</p>
                  )}

                  <button
                    type="submit"
                    className="w-full py-3 bg-brand-orange text-white font-extrabold text-xs rounded-xl shadow-md hover:bg-orange-650 active:scale-[0.98] transition duration-150 flex items-center justify-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Score & Review</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
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
