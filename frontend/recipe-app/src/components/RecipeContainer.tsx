import { useContext } from "react";
import { AppContext } from "../AppContext";
import Recipe from "./Recipe";
import "../styles/RecipeContainer.css";

const RecipeContainer = () => {
  const { recipes } = useContext(AppContext);
  return (
    <>
      <div className="recipe-container">
        {recipes.map((recipe: any, index: number) => (
          <Recipe key={index} recipe={recipe.recipe} />
        ))}
      </div>
    </>
  );
};

export default RecipeContainer;
