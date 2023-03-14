import { createContext } from "react";
import { IRecipe } from "./types";

interface IAppContext {
  search: string;
  setSearch: (recipe: string) => void;
  query: string;
  setQuery: (recipe: string) => void;
  recipes : IRecipe[]

}

export const AppContext = createContext<IAppContext>({
  search: "",
  setSearch: (recipe) => {},
  query: "",
  setQuery: (recipe) => {},
  recipes : []

});
