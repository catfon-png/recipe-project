import React, {useContext} from 'react'
import { AppContext } from '../AppContext'
import '../styles/Recipe.css'
import { IRecipe, IRecipeClass } from '../types'

type recipeProps = {
    recipe: IRecipeClass
}

const Recipe = (props : recipeProps) => {
    // const {recipes} = useContext(AppContext);
    // if (!Array.isArray(recipes)) {
    //     return <div>No recipes found</div>;
    //   }
    const {label, image, source, shareAs, ingredientLines} = props.recipe;
  return (
    <div className='recipe'> 
        {/* <p>This is a recipe</p> */}
        <h3>{label}</h3>
        <img className='recipe__image' src={image} alt=''/>
        <p className='recipe__image'>Source:{source}</p>
        <p className='recipe__url'>{shareAs}</p>
        <button>Save</button>
        {/* <button> Delete</button> */}
        {ingredientLines.map((ing: string, index: number) => (<li key={index}>{ing}</li>))}
        
        {/* {recipes.map((rec, index) => (<li key={index}>{rec.recipes.healthLabels}</li>))} */}
        
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
