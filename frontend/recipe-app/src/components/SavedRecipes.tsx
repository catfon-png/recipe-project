import axios from "axios";
import React, { useContext, useEffect } from "react";
import { AppContext } from "../AppContext";
import Recipe from "./Recipe";
import "../styles/SavedRecipes.css";

const SavedRecipes = () => {
  const {
    savedRecipes,
    setShowSavedRecipes,
    showSavedRecipes,
    setSavedRecipes,
    deleteRecipe,
  } = useContext(AppContext);
  const clickHandler = () => {
    setShowSavedRecipes(!showSavedRecipes);
  };
  const deleteHandler = () => {
    // setSavedRecipes(savedRecipes.filter((r) => r.label != label))
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
    <>
      <div className="saved-recipes">
        <h3>Or check out your saved recipes!</h3>
        <button className="saved-recipes__button" onClick={clickHandler}>
          Your saved Recipes
        </button>
      </div>
      <div className="saved-recipes__display">
        {showSavedRecipes == true &&
          savedRecipes.map((recipe: any, index: number) => {
            return (
              <div>
                <p key={index}>
                  <a href={recipe.shareAs} target="_blank">
                    {recipe.label}
                  </a>
                </p>
                <button
                  className="delete-recipes__button"
                  onClick={deleteHandler}
                >
                  Delete
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default SavedRecipes;