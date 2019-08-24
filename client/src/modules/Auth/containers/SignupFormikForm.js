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
  email: ''
}

const SignupFormikForm = () => (
  <Formik
    initialValues={initialValues}
    validationSchema={SignupSchema}
    onSubmit={(values, actions) => {
      console.log('values', values, actions)
      actions.setSubmitting(false)
      actions.resetForm(initialValues)
    }}
    component={SignupForm}
  />
)

export default SignupFormikForm
