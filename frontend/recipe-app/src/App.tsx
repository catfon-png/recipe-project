import React, {useEffect, useState} from "react";
import axios from 'axios'
import "./App.css";
import { AppContext } from "./AppContext";
import RecipeContainer from "./components/RecipeContainer";
import Search from "./components/Search";
import { IRecipe, IRecipes } from "./types";
import Recipe from "./components/Recipe";

const App = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

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
      <AppContext.Provider value={{search, setSearch, query, setQuery, recipes}}>
        <Search />
        <RecipeContainer />
      </AppContext.Provider>
      {/* <p>{recipes}</p> */}
    </div>
  );
};

export default App;
