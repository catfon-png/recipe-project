import { createContext } from "react";
import { IRecipe, ISavedRecipe } from "./types";

interface IAppContext {
  search: string;
  setSearch: (recipe: string) => void;
  query: string;
  setQuery: (recipe: string) => void;
  recipes : IRecipe[];
  savedRecipes: ISavedRecipe[];
  setSavedRecipes: (recipe : ISavedRecipe[]) => void;
  showSavedRecipes: boolean;
  setShowSavedRecipes: (recipe : boolean) => void;
  deleteRecipe: (recipe : ISavedRecipe) => void;
}

export const AppContext = createContext<IAppContext>({
  search: "",
  setSearch: (recipe) => {},
  query: "",
  setQuery: (recipe) => {},
  recipes : [],
  savedRecipes: [],
  setSavedRecipes: (recipe) => {}, 
  showSavedRecipes : false,
  setShowSavedRecipes: (recipe) => {},
  deleteRecipe: (recipe) => {}
});
