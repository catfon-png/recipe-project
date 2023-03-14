import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import "../styles/Recipe.css";
import { IRecipe, IRecipeClass, ISavedRecipe } from "../types";

type recipeProps = {
  recipe: IRecipeClass;
};

const Recipe = (props: recipeProps) => {
  const { label, image, source, shareAs, ingredientLines } = props.recipe;
  const { setSavedRecipes, savedRecipes } = useContext(AppContext);
  const saveHandler = () => {
    const newRecipes: ISavedRecipe = {
      label: label,
      image: image,
      source: source,
      shareAs: shareAs,
      ingredientLines: ingredientLines,
    };
    setSavedRecipes([...savedRecipes, newRecipes]);
    // console.log('hello')
  };
  return (
    <div className="recipe">
      <h3>{label}</h3>
      <img className="recipe__image" src={image} alt="" />
      <p className="recipe__image">Source:{source}</p>
      <p className="recipe__url">{shareAs}</p>
      {ingredientLines.map((ing: string, index: number) => (
        <li key={index}>{ing}</li>
      ))}
      <button onClick={saveHandler}>Save</button>
      {/* <button> Delete</button> */}
    </div>
  );
};

export default Recipe;
