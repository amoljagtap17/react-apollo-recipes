import React, { Fragment } from 'react'
import { withQuery } from '../../../hoc'
import GET_ALL_RECIPES from '../providers/graphql/recipes.query'
import RecipeItem from '../components/RecipeItem'

const RecipeList = ({ loading, error, data }) => {
  return (
    <Fragment>
      <h1 className="text-center">Recipe List..</h1>
      <ul>
        {data &&
          data.getAllRecipes &&
          data.getAllRecipes.map(recipe => (
            <RecipeItem {...recipe} key={recipe._id} />
          ))}
      </ul>
    </Fragment>
  )
}

export default withQuery(RecipeList, GET_ALL_RECIPES)
