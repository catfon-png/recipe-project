import React, {useContext} from 'react'
import { AppContext } from '../AppContext'
import Recipe from './Recipe'

const RecipeContainer = () => {
    const {search} = useContext(AppContext);
    const {recipes} = useContext(AppContext);
    // ^ need to loop over this

  return (
    <>
    <div>
      {/* This is a recipe container */}
      <h3>{search}</h3>
      {/* <p>{recipes[0]}</p> */}
      {/* {recipes.map((recipe, index) => <Recipe key={index} recipe={recipe}/>)} */}

    </div>
    </>
  )
}

export default RecipeContainer
