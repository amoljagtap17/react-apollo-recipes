import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

import SignupForm from '../components/SignupForm'
import Error from '../../../core/Error'

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email is invalid!!')
    .required('Email is required!!'),
  username: Yup.string().required('Username is required!!'),
  password: Yup.string().required('Password is required!!'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required!!')
})

const initialValues = {
  username: '',
  email: '',
  password: '',
  passwordConfirmation: ''
}

const SignupFormikForm = ({ signupUser, loading, error }) => (
  <>
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        console.log('values', values)
        signupUser({
          variables: {
            username: values.username,
            email: values.email,
            password: values.password
          }
        })
          .then(data => console.log('dd', data))
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
