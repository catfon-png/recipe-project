import axios from "axios";
// import { v4 as uuidv4 } from 'uuid'
import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import "../styles/Recipe.css";
import { IRecipe, IRecipeClass, ISavedRecipe } from "../types";
const { v4: uuidv4 } = require('uuid');

type recipeProps = {
  recipe: IRecipeClass;
};
const generateCartId = () => uuidv4();

const Recipe = (props: recipeProps) => {
  const { label, image, source, shareAs, ingredientLines } = props.recipe;
  const { setSavedRecipes, savedRecipes } = useContext(AppContext);
  const saveHandler = () => {
    const newRecipes: ISavedRecipe = {
    recipeId: generateCartId(),
      label: label,
      image: image,
      source: source,
      shareAs: shareAs,
      ingredientLines: ingredientLines,
    };
    setSavedRecipes([...savedRecipes, newRecipes]);
    // console.log('hello')
    axios.post("http://localhost:5000/api/recipes/", newRecipes)
        .then((response) => {console.log(response)})
};
  
  return (
    <div className="recipe">
      <h2>{label}</h2>
      <img className="recipe__image" src={image} alt="" />
      <h4>Ingredients:</h4>
      {ingredientLines.map((ing: string, index: number) => (
        <li key={index}>{ing}</li>
      ))}
      <p className="recipe__image">Source: {source}</p>
      <p className="recipe__url"><a href={shareAs}>Check the full recipe here</a></p>
      <button onClick={saveHandler}>Save</button>
      {/* <button> Delete</button> */}
    </div>
  );
};

export default Recipe;
