import React, { Fragment } from 'react'
import { withRecipes } from '../providers'
import RecipeItem from '../components/RecipeItem'

const RecipeList = ({ loading, error, recipes }) => {
  return (
    <Fragment>
      <h1 className="text-center">Recipe List..</h1>
      <ul>
        {recipes.map(recipe => (
          <RecipeItem {...recipe} key={recipe._id} />
        ))}
      </ul>
    </Fragment>
  )
}

export default withRecipes(RecipeList)
