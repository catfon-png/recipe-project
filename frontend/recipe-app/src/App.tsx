import React, {useEffect, useState} from "react";
import axios from 'axios'
import "./App.css";
import { AppContext } from "./AppContext";
import RecipeContainer from "./components/RecipeContainer";
import Search from "./components/Search";
import { Recipe } from "./types";

const App = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  const getRecipes = async () => {
    const response = await axios.get(`http://localhost:5000/api/recipes/${query}`)
    console.log(response.data)
    setRecipes(response.data)
  }

  useEffect(() => {getRecipes()}, [query])

  return (
    <div className="App">
      <AppContext.Provider value={{search, setSearch, query, setQuery, recipes}}>
        <Search />
        <RecipeContainer />
      </AppContext.Provider>
    </div>
  );
};

export default App;
