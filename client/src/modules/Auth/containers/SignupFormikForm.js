import React from 'react'
import { withRouter } from 'react-router-dom'
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

const SignupFormikForm = ({
  mutationFunc,
  loading,
  error,
  history,
  refetch
}) => (
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
              .then(async ({ data: { signupUser } }) => {
                console.log('Signup', signupUser)
                localStorage.setItem('token', signupUser.token)
                await refetch()
                history.push('/')
              })
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

export default withRouter(SignupFormikForm)
