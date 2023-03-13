import React, {useState} from "react";
import "./App.css";
import { AppContext } from "./AppContext";
import RecipeContainer from "./components/RecipeContainer";
import Search from "./components/Search";

const App = () => {
  const [recipe, setRecipe] = useState("");
  return (
    <div className="App">
      <AppContext.Provider value={{recipe, setRecipe}}>
        <Search />
        <RecipeContainer />
      </AppContext.Provider>
    </div>
  );
};

export default App;
