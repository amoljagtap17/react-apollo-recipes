import React from 'react'
import { Formik } from 'formik'
import { SignupValidations } from './SignupValidations'
import SignupForm from '../components/SignupForm'
import Error from '../../../core/Error'

const initialValues = {
  username: '',
  email: '',
  password: '',
  passwordConfirmation: ''
}

const SignupFormikForm = ({ mutationFunc, loading, error }) => (
  <>
    <Formik
      initialValues={initialValues}
      validationSchema={SignupValidations}
      onSubmit={(values, actions) => {
        mutationFunc({
          variables: {
            username: values.username,
            email: values.email,
            password: values.password
          }
        })
          .then(data => console.log('Signup', data))
          .catch(() => {})

        if (!loading || error !== undefined) {
          actions.setSubmitting(false)
          actions.resetForm(initialValues)
        }
      }}
      component={SignupForm}
    />
    {error && <Error error={error} />}
  </>
)

export default SignupFormikForm
