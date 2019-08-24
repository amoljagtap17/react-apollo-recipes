import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import RecipeList from './modules/Recipe/containers'
import SignupFormikForm from './modules/Auth/containers/SignupFormikForm'

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>React Apollo Client</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <RecipeList />
        </Col>
      </Row>
      <Row>
        <Col>
          <SignupFormikForm />
        </Col>
      </Row>
    </Container>
  )
}

export default App
