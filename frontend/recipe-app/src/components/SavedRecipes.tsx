import { useContext } from "react";
import { AppContext } from "../AppContext";
import "../styles/SavedRecipes.css";
import { ISavedRecipe } from "../types";
import SavedRecipe from "./SavedRecipe";

const SavedRecipes = () => {
  const {
    savedRecipes,
    setShowSavedRecipes,
    showSavedRecipes,
  } = useContext(AppContext);
  const clickHandler = () => {
    setShowSavedRecipes(!showSavedRecipes);
  };

  return (
    <>
      <div className="saved-recipes">
        <h3 className="saved-recipes__heading">Or check out your saved recipes!</h3>
        <button className="saved-recipes__button" onClick={clickHandler}>
          Your saved Recipes
        </button>
      </div>
      <div className="saved-recipes__display">
        {showSavedRecipes == true && savedRecipes.map((recipe: ISavedRecipe, index: number) => <SavedRecipe key={index} recipe={recipe}/>)}
      </div>
    </>
  );
};

export default SavedRecipes;
