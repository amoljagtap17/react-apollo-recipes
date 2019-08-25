import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { RecipeList } from './modules/Recipe'

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <RecipeList />
        </Col>
      </Row>
    </Container>
  )
}

export default App
