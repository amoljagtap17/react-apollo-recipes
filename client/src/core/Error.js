import React from 'react'
import { UncontrolledAlert } from 'reactstrap'

const Error = ({ error }) => (
  <UncontrolledAlert color="danger" className="mt-3">
    {error.message}
  </UncontrolledAlert>
)

export default Error
