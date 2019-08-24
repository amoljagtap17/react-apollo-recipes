import React from 'react'
import { Container, Row, Col } from 'reactstrap'
/* import RecipeList from './modules/Recipe/containers' */
import { SigninContainer } from './modules/Auth'

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>React Apollo Client</h1>
        </Col>
      </Row>
      {/* <Row>
        <Col>
          <RecipeList />
        </Col>
      </Row> */}
      <Row>
        <Col>
          <SigninContainer />
        </Col>
      </Row>
    </Container>
  )
}

export default App
