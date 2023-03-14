import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import Recipe from "./Recipe";

const RecipeContainer = () => {
  const { search } = useContext(AppContext);
  const { recipes } = useContext(AppContext);
  // ^ need to loop over this

  return (
    <>
      <div className="recipe-container">
        {/* This is a recipe container */}
        <h3>{search}</h3>
        {/* <ol>{recipes.map((rec, index) => <li key={index}>{rec.recipes.label}</li> )}</ol> */}

        {/* <p>{recipes}</p> */}
        <ol>
          {/* {recipes.map((recipe, index) => <li key={index}> {recipe.recipes.calories}</li>)} */}
          {/* {recipes.recipes.calories} */}
        </ol>
        {/* {recipes.map((recipe, index) => <Recipe key={index} recipe={recipe.recipes}/>)} */}
      <Recipe />
      </div>
        {recipes.map((recipe, index) => (<li key={index}>{JSON.stringify(recipe)}</li>))}
    </>
  );
};

export default RecipeContainer;
