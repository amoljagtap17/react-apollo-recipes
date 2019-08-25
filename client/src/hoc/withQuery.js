import React from 'react'
import { useQuery } from '@apollo/react-hooks'

const withQuery = (Component, queryGQL) => props => {
  const { loading, error, data } = useQuery(queryGQL)

  return <Component loading={loading} error={error} data={data} {...props} />
}

export default withQuery
