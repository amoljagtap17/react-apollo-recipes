import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_CURRENT_USER } from '../modules/Auth'

const withSession = Component => props => {
  const { loading, data, refetch } = useQuery(GET_CURRENT_USER)

  if (loading) return <p>loading..withSession.</p>

  // console.log('data -- ', data)

  return <Component {...props} refetch={refetch} session={data} />
}

export default withSession
