import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

import SignupForm from '../components/SignupForm'

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email is invalid!!')
    .required('Email is required!!')
})

const initialValues = {
  username: '',
  email: '',
  password: '',
  passwordConfirmation: ''
}

const SignupFormikForm = ({ signupUser, loading, error }) => (
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
      }).then(data => console.log('dd', data))

      if (!loading || error !== undefined) {
        actions.setSubmitting(false)
        actions.resetForm(initialValues)
      }
    }}
    component={SignupForm}
  />
)

export default SignupFormikForm
