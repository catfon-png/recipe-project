import React, {useEffect, useState} from "react";
import axios from 'axios'
import "./App.css";
import { AppContext } from "./AppContext";
import RecipeContainer from "./components/RecipeContainer";
import Search from "./components/Search";
import { IRecipe, IRecipes, ISavedRecipe } from "./types";
import Recipe from "./components/Recipe";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [savedRecipes, setSavedRecipes] = useState<ISavedRecipe[]>([{label: '', image: '', source: '', shareAs: '', ingredientLines: []}])

  const getRecipes = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/recipes/${query}`)
      console.log(response.data)
      setRecipes(response.data)
      
    } catch (error) {
      console.log('this is your error', error);
      setRecipes([]);
    }
    // console.log('a recipe ',typeof recipes)
  }

  useEffect(() => {
    getRecipes()
  }, [query])
  // useEffect(() => {
  //   setRecipes([])
  // }, [query])

  return (
    <div className="App">
      <p>{savedRecipes.map((item) => <p>{item.image}</p>)}</p>
      {/* <p>{recipes}</p> */}
      <AppContext.Provider value={{search, setSearch, query, setQuery, recipes, savedRecipes, setSavedRecipes}}>
        <Search />
        <RecipeContainer />
      </AppContext.Provider>
    </div>
  );
};

export default App;
