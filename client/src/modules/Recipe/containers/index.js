import React from 'react'
import { withRecipes } from '../providers'

const RecipeListContainer = ({ loading, error, recipes }) => {
  console.log('data : ', recipes)

  return <div>Recipes!!</div>
}

export default withRecipes(RecipeListContainer)
