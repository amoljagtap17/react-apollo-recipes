import React from 'react'
import { useMutation } from '@apollo/react-hooks'
import { SIGNUP_USER } from './signup.mutation'

const withSignupMutation = Component => props => {
  const [signupUser, { loading, error, data }] = useMutation(SIGNUP_USER)

  return (
    <Component
      loading={loading}
      error={error}
      signupUser={signupUser}
      data={data}
      {...props}
    />
  )
}

export default withSignupMutation
