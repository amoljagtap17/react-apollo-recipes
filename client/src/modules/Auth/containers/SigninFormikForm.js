import React from 'react'
import { Formik } from 'formik'
import { Container, Row, Col } from 'reactstrap'
import { SigninValidations } from './SigninValidations'
import SigninForm from '../components/SigninForm'
import Error from '../../../core/Error'

const initialValues = {
  username: '',
  password: ''
}

const SigninFormikForm = ({ mutationFunc, loading, error }) => (
  <Container>
    <Row>
      <Col>
        <h1>Sign In</h1>
      </Col>
    </Row>
    <Row>
      <Col>
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
              .then(({ data: { signinUser } }) => {
                // console.log('Signin', signinUser)
                localStorage.setItem('token', signinUser.token)
              })
              .catch(() => {})

            if (!loading || error !== undefined) {
              actions.setSubmitting(false)
              actions.resetForm(initialValues)
            }
          }}
          component={SigninForm}
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

export default SigninFormikForm
