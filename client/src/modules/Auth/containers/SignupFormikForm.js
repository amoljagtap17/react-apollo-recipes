import React from 'react'
import { Formik } from 'formik'
import { Container, Row, Col } from 'reactstrap'
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
  <Container>
    <Row>
      <Col>
        <h1>Sign Up</h1>
      </Col>
    </Row>
    <Row>
      <Col>
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
      </Col>
    </Row>
    {error && (
      <Row>
        <Col>
          <Error error={error} />
        </Col>
      </Row>
    )}
  </Container>
)

export default SignupFormikForm
