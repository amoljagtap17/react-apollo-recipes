import React from 'react'
import { Form, FormGroup, Label, Button } from 'reactstrap'
import { Field } from 'formik'
import CustomInputForm from './CustomFormInput'

const SignupForm = ({ handleSubmit, isValid, isSubmitting }) => (
  <Form onSubmit={handleSubmit}>
    <FormGroup>
      <Label for="username">Username</Label>
      <Field name="username" type="text" component={CustomInputForm} />
    </FormGroup>
    <FormGroup>
      <Label for="email">Email Address</Label>
      <Field name="email" type="email" component={CustomInputForm} />
    </FormGroup>
    <FormGroup>
      <Label for="email">Password</Label>
      <Field name="password" type="password" component={CustomInputForm} />
    </FormGroup>
    <FormGroup>
      <Label for="passwordConfirmation">Confirm Password</Label>
      <Field
        name="passwordConfirmation"
        type="password"
        component={CustomInputForm}
      />
    </FormGroup>
    <Button type="submit" disabled={!isValid || isSubmitting}>
      Submit
    </Button>
  </Form>
)

export default SignupForm
