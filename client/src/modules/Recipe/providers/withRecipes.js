import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_ALL_RECIPES } from './recipes.queries'

const withRecipes = Component => props => {
  const { loading, error, data } = useQuery(GET_ALL_RECIPES)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <Component
      loading={loading}
      error={error}
      recipes={data && data.getAllRecipes}
      {...props}
    />
  )
}

export default withRecipes
