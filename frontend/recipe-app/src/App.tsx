import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { AppContext } from "./AppContext";
import RecipeContainer from "./components/RecipeContainer";
import Search from "./components/Search";
import { IRecipe, IRecipes, ISavedRecipe } from "./types";
import Recipe from "./components/Recipe";
import SavedRecipes from "./components/SavedRecipes";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [showSavedRecipes, setShowSavedRecipes] = useState(false);
  const [savedRecipes, setSavedRecipes] = useState<ISavedRecipe[]>([
    {recipeId : "", label: "", image: "", source: "", shareAs: "", ingredientLines: [] },
  ]);

  const getRecipes = async () => {
    try {
      if (query.length != 0) {
        const response = await axios.get(
          `http://localhost:5000/api/recipes/${query}`
        );
        console.log(response.data);
        setRecipes(response.data);
      }
    } catch (error) {
      console.log("this is your error", error);
      setRecipes([]);
    }
    // console.log('a recipe ',typeof recipes)
  };

  useEffect(() => {
    getRecipes();
  }, [query]);

    const deleteRecipe = async () => {

    }
  return (
    <div className="App">
      {/* <p>{savedRecipes.map((item) => <p>{item.image}</p>)}</p> */}
      {/* <p>{recipes}</p> */}
      <AppContext.Provider
        value={{
          search,
          setSearch,
          query,
          setQuery,
          recipes,
          savedRecipes,
          setSavedRecipes,
          showSavedRecipes,
          setShowSavedRecipes,
          deleteRecipe
        }}
      >
        <Search />
        <SavedRecipes />
        <RecipeContainer />
      </AppContext.Provider>
    </div>
  );
};

export default App;
