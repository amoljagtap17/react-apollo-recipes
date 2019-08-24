import React from 'react'
import { useMutation } from '@apollo/react-hooks'

const withMutation = (Component, mutationGQL) => props => {
  const [mutationFunc, { loading, error, data }] = useMutation(mutationGQL)

  return (
    <Component
      loading={loading}
      error={error}
      mutationFunc={mutationFunc}
      data={data}
      {...props}
    />
  )
}

export default withMutation
