import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import RecipeList from './modules/Recipe/containers'
import SignupContainer from './modules/Auth/containers/SignupContainer'

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
          <SignupContainer />
        </Col>
      </Row>
    </Container>
  )
}

export default App
