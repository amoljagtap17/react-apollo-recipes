import React from 'react'

const RecipeItem = ({ _id, name, category }) => (
  <li>
    <p>{name}</p>
    <h4>
      <strong>{category}</strong>
    </h4>
  </li>
)

export default RecipeItem
