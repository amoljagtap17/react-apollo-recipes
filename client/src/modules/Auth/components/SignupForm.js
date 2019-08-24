import React from 'react'
import { Form, FormGroup, Label, Button } from 'reactstrap'
import { Field } from 'formik'
import CustomInputForm from './CustomFormInput'

const SignupForm = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <FormGroup>
      <Label for="email">Email</Label>
      <Field name="email" type={'email'} component={CustomInputForm} />
    </FormGroup>
    <Button type="submit">Submit</Button>
  </Form>
)

export default SignupForm
