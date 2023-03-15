import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { AppContext } from "./AppContext";
import RecipeContainer from "./components/RecipeContainer";
import Search from "./components/Search";
import { ISavedRecipe } from "./types";
import SavedRecipes from "./components/SavedRecipes";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [showSavedRecipes, setShowSavedRecipes] = useState(false);
  const [status, setStatus] = useState(false)
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
  };

  useEffect(() => {
    getRecipes();
  }, [query]);

    
  return (
    <div className="App">
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
          status,
          setStatus
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
