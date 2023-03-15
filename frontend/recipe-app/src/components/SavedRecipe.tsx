import { ChangeEvent, useContext, useEffect } from "react";
import axios from "axios";
import { AppContext } from "../AppContext";
import { ISavedRecipe } from "../types";
import "../styles/SavedRecipe.css";

type savedRecProps = {
  recipe: ISavedRecipe;
};

const SavedRecipe = (props: savedRecProps) => {
  const { status, setStatus } = useContext(AppContext);
  const { recipeId, label, image, shareAs, source, ingredientLines } =
    props.recipe;
  const { savedRecipes, setSavedRecipes } = useContext(AppContext);
  const updateData = async () => {
    axios
      .put("http://localhost:5000/api/recipes/", status)
      .then((response) => {
        console.log(response);
      });
  };
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.checked);
    updateData();
    // setSavedRecipes(updatedRecipe)
  };
//   const updatedRecipe: ISavedRecipe = {
//     recipeId: recipeId,
//     label: label,
//     image: image,
//     source: source,
//     shareAs: shareAs,
//     ingredientLines: ingredientLines,
//     status: status,
//   };
  
  //   const updateDb
  const deleteHandler = (recipe: ISavedRecipe) => {
    const id = recipe.recipeId;
    setSavedRecipes(savedRecipes.filter((rec) => rec.recipeId != id));
    axios.delete(`http://localhost:5000/api/recipes/${recipe.recipeId}`);
  };
  useEffect(() => {
    const gdata = async () => {
      const res = await axios.get("http://localhost:5000/api/recipes/");
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
        <label className="saved-recipe__status">
          <p>Cooked?</p>
          <input
            className="saved-recipe__status__checked"
            type="checkbox"
            onChange={changeHandler}
          />
        </label>
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
