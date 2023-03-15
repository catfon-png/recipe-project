import React, { useContext, useEffect } from "react";
import axios from "axios";
import { AppContext } from "../AppContext";
import { ISavedRecipe } from "../types";
import "../styles/SavedRecipe.css";

type savedRecProps = {
  recipe: ISavedRecipe;
};

const SavedRecipe = (props: savedRecProps) => {
  const { label, image, shareAs } = props.recipe;
  const { savedRecipes, setSavedRecipes } = useContext(AppContext);
  const deleteHandler = (recipe: ISavedRecipe) => {
    const id = recipe.recipeId;
    setSavedRecipes(savedRecipes.filter((rec) => rec.recipeId != id));
    axios.delete(`http://localhost:5000/api/recipes/${recipe.recipeId}`);
  };
  useEffect(() => {
    const gdata = async () => {
      const res = await axios.get("http://localhost:5000/api/recipes/");
      console.log(res);
      setSavedRecipes(res.data);
    };
    gdata();
  }, []);

  return (
    <div className="saved-recipe">
      <div className="saved-recipe__text">
        <h4 className="saved-recipe__heading">{label}</h4>
        <p className="saved-recipe__source">
          <a href={shareAs} target="_blank">
            Full recipe
          </a>
        </p>
        <button
          className="delete-recipes__button"
          onClick={() => deleteHandler(props.recipe)}
        >
          Remove
        </button>
      </div>
      <img className="saved-recipe__image" src={image} alt="" />
    </div>
  );
};

export default SavedRecipe;
