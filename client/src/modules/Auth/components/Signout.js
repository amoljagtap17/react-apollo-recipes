import React from 'react'
import { useApolloClient } from '@apollo/react-hooks'
import { withRouter } from 'react-router-dom'
import { Button } from 'reactstrap'

const Signout = ({ history }) => {
  const client = useApolloClient()

  // console.log('client', client)

  const handleSignout = () => {
    localStorage.setItem('token', '')
    client.resetStore()
    history.push('/')
  }

  return (
    <Button outline color="secondary" onClick={() => handleSignout()}>
      Signout
    </Button>
  )
}

export default withRouter(Signout)
