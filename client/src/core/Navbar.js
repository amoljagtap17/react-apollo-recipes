import React, { Fragment, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

const NavbarComponent = ({ location }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(prevIsOpen => !prevIsOpen)

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand tag={Link} to="/">
        React Apollo
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavbarUnAuth pathname={location.pathname} />
        </Nav>
      </Collapse>
    </Navbar>
  )
}

const NavbarUnAuth = ({ pathname }) => (
  <Fragment>
    <NavItem>
      <NavLink tag={Link} to="/" active={pathname === '/'}>
        Home
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink tag={Link} to="/search" active={pathname === '/search'}>
        Search
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink tag={Link} to="/signin" active={pathname === '/signin'}>
        Signin
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink tag={Link} to="/signup" active={pathname === '/signup'}>
        Signup
      </NavLink>
    </NavItem>
  </Fragment>
)

export default withRouter(NavbarComponent)
