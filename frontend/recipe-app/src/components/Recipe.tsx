import React, {useContext} from 'react'
import { AppContext } from '../AppContext'
import '../styles/Recipe.css'
import { Recipe, RecipeClass } from '../types'

// type recipeProps = {
//     recipe: RecipeClass
// }
const Recipe = () => {
    // const {recipes} = useContext(AppContext);
    // const {label, image, source, shareAs, ingredientLines} = props.recipe;
  return (
    <div className='recipe'>
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
