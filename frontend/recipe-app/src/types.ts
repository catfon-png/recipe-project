export interface IRecipeClass {
  uri: string;
  label: string;
  image: string;
  source: string;
  url: string;
  shareAs: string;
  yield: number;
  dietLabels: any[];
  healthLabels: any[];
  cautions: any[];
  ingredientLines: string[];
  ingredients: any[];
  calories: number;
  totalWeight: number;
  totalTime: number;
  cuisineType: any[];
  mealType: any[];
  dishType: any[];
  totalNutrients: Total;
  totalDaily: Total;
  digest: any[];
}
export interface ISavedRecipe {
  recipeId : string,
  label: string;
  image: string;
  source: string;
  shareAs: string;
  ingredientLines: string[];
  note? : string;
}

export interface IRecipe {
  recipes: IRecipeClass;
}

export interface IRecipes {
  recipes: IRecipeClass[];
}

export interface Total {}
