import React, { PropTypes } from 'react'
import { Navbar as BSNavbar, Nav, NavItem } from 'react-bootstrap'
import { Technologies, Projects, Organizations, Attachments } from '../../resources/icons'
import { LinkContainer } from 'react-router-bootstrap'
const Link = ({
  to,
  eventKey,
  iconElement,
  label
}) => (
  <LinkContainer to={to} activeClassName="active">
  <NavItem eventKey={eventKey}>
    {React.cloneElement(iconElement, {
      style: {marginRight: 6, width: 14, height: 14}
    })}
    <span>{label}</span>
  </NavItem>
  </LinkContainer>
)
const Navbar = ({

}) => {
  return (
      <BSNavbar className="navbar-static-top" role="navigation" fluid>
        <BSNavbar.Header>
          <BSNavbar.Brand>
            <LinkContainer to="/">
                <a className="navbar-brand">TDB</a>
            </LinkContainer>

          </BSNavbar.Brand>
        </BSNavbar.Header>
          <Nav>
            <Link eventKey={1} to="/t" label="Technologies" iconElement={<Technologies />} />
            <Link eventKey={1} to="/o" label="Organizations" iconElement={<Organizations />} />
            <Link eventKey={1} to="/p" label="Projects" iconElement={<Projects />} />
            <Link eventKey={1} to="/a" label="Attachments" iconElement={<Attachments />} />
          </Nav>
          {/*<ul className="nav navbar-nav">
            <li className="{{isActiveRoute regex='search'}}">
              <a href="{{pathFor 'search'}}"><i className="fa fa-search"></i> <span className="nav-label">Search</span></a>
            </li>
            <li className="{{isActiveRoute regex='technologies'}}">
              <a href="{{pathFor 'technologies.dashboard'}}"><i className="fa fa-gear"></i> <span className="nav-label">Technologies</span></a>
            </li>
            <li className="{{isActiveRoute regex='projects'}}">
              <a href="{{pathFor 'projects.dashboard'}}"><i className="fa fa-folder"></i> <span className="nav-label">Projects</span></a>
            </li>
            <li className="{{isActiveRoute regex='organizations'}}">
              <a href="{{pathFor 'organizations.dashboard'}}"><i className="fa fa-building"></i> <span className="nav-label">Organizations</span></a>
            </li>
            <li className="{{isActiveRoute regex='attachments'}}">
              <a href="{{pathFor 'attachments.dashboard'}}"><i className="fa fa-paperclip"></i> <span className="nav-label">Attachments</span></a>
            </li>
            <li className="{{isActiveRoute regex='users'}}">
              <a href="{{pathFor 'users.dashboard'}}"><i className="fa fa-users"></i> <span className="nav-label">Users</span></a>
            </li>
          </ul>*/}
          {/*<Nav pullRight>
            <li className="user">
                <a data-toggle="dropdown" className="dropdown-toggle" href="#" aria-expanded="true">
                  <img src="https://placehold.it/35x35" />
                  <b className="caret"></b>
                </a>
                <ul className="dropdown-menu m-t-xs">
                    <li><a href="#">Profile</a></li>
                    <li className="divider"></li>
                    <li><a id="logout" href="#">Logout</a></li>
                </ul>
              </li>
          </Nav>*/}
      </BSNavbar>
  )
}

export default Navbar
