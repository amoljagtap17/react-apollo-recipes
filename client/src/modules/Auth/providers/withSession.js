import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_CURRENT_USER } from './graphql/currentuser.query'

const withSession = Component => props => {
  const { loading, data, refetch } = useQuery(GET_CURRENT_USER)

  if (loading) return <p>loading..withSession.</p>

  console.log('session >> ', data)

  return <Component {...props} refetch={refetch} />
}

export default withSession
