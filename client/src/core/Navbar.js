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

import { Signout } from '../modules/Auth'

const NavbarComponent = ({ location, session }) => {
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
          {session && session.getCurrentUser ? (
            <NavbarAuth pathname={location.pathname} />
          ) : (
            <NavbarUnAuth pathname={location.pathname} />
          )}
        </Nav>
        {session && session.getCurrentUser && (
          <h4 className="ml-auto text-dark">
            Welcome, <strong>{session.getCurrentUser.username}</strong>
          </h4>
        )}
      </Collapse>
    </Navbar>
  )
}

const NavbarAuth = ({ pathname }) => (
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
      <NavLink tag={Link} to="/recipe/add" active={pathname === '/recipe/add'}>
        Add Recipe
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink tag={Link} to="/profile" active={pathname === '/profile'}>
        Profile
      </NavLink>
    </NavItem>
    <NavItem>
      <Signout />
    </NavItem>
  </Fragment>
)

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
