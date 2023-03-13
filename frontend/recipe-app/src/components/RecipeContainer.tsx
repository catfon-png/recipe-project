import React, {useContext} from 'react'
import { AppContext } from '../AppContext'
import Recipe from './Recipe'

const RecipeContainer = () => {
    const {recipe} = useContext(AppContext);

  return (
    <div>
      {/* This is a recipe container */}
      <h3>{recipe}</h3>
      <Recipe />

    </div>
  )
}

export default RecipeContainer
