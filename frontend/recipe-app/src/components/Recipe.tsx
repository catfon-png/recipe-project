import React, {useContext} from 'react'
import { AppContext } from '../AppContext'
import '../styles/Recipe.css'
import { IRecipe, IRecipeClass } from '../types'

// type recipeProps = {
//     recipe: RecipeClass
// }

const Recipe = () => {
    const {recipes} = useContext(AppContext);
    // if (!Array.isArray(recipes)) {
    //     return <div>No recipes found</div>;
    //   }
    // const {label, image, source, shareAs, ingredientLines} = props.recipe;
  return (
    <div className='recipe'>
        <p>This is a recipe</p>
        {/* <p>{title}</p> */}
        
        {/* {recipes.map((rec, index) => <li key={index}>{rec.recipes.calories}</li> )} */}
        
        {/* {recipe.map(rec => (
            <h3 className='recipe__title'>{rec.label}</h3>

        ))}
        <ol className='recipe__ingredients'>
            {recipe.ingredientLines.map((ing : any) => <li>{ing.text}</li>)}
        </ol>
        <img className='recipe__image' src={recipes.image} alt=''/>
        <p className='recipe__image'>Source:{source}</p>
        <p className='recipe__url'>{shareAs}</p> */}

    </div>
  )
}

export default Recipe
