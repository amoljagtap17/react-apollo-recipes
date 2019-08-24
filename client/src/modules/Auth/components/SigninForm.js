import React from 'react'
import { Form, FormGroup, Label, Button } from 'reactstrap'
import { Field } from 'formik'
import CustomInputForm from './CustomFormInput'

const SigninForm = ({ handleSubmit, isValid, isSubmitting }) => (
  <Form onSubmit={handleSubmit}>
    <FormGroup>
      <Label for="username">Username</Label>
      <Field name="username" type="text" component={CustomInputForm} />
    </FormGroup>
    <FormGroup>
      <Label for="password">Password</Label>
      <Field name="password" type="password" component={CustomInputForm} />
    </FormGroup>
    <Button type="submit" disabled={!isValid || isSubmitting}>
      Submit
    </Button>
  </Form>
)

export default SigninForm
