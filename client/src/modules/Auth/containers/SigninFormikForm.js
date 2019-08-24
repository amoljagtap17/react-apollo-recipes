import React from 'react'
import { Formik } from 'formik'
import { SigninValidations } from './SigninValidations'
import SigninForm from '../components/SigninForm'
import Error from '../../../core/Error'

const initialValues = {
  username: '',
  password: ''
}

const SigninFormikForm = ({ mutationFunc, loading, error }) => (
  <>
    <Formik
      initialValues={initialValues}
      validationSchema={SigninValidations}
      enableReinitialize={true}
      onSubmit={(values, actions) => {
        mutationFunc({
          variables: {
            username: values.username,
            password: values.password
          }
        })
          .then(data => console.log('Signin', data))
          .catch(() => {})

        if (!loading || error !== undefined) {
          actions.setSubmitting(false)
          actions.resetForm(initialValues)
        }
      }}
      component={SigninForm}
    />
    {error && <Error error={error} />}
  </>
)

export default SigninFormikForm
