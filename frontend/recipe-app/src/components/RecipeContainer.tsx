import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import Recipe from "./Recipe";
import "../styles/RecipeContainer.css";

const RecipeContainer = () => {
  const { search } = useContext(AppContext);
  const { recipes } = useContext(AppContext);
  return (
    <>
      {/* <h2 className="recipe-container__heading">{search}</h2> */}
      <div className="recipe-container">
        {recipes.map((recipe: any, index: number) => (
          <Recipe key={index} recipe={recipe.recipe} />
        ))}
      </div>
    </>
  );
};

export default RecipeContainer;
