import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

class App extends Component {
  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <Navbar fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/" id="brand-area">
              <span id="brand-text">Community Announcer</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav activeKey={1} id="navigation">
            <IndexLinkContainer className="nav-item" to="/home">
              <NavItem eventKey={1}>Home</NavItem>
            </IndexLinkContainer>
            <LinkContainer className="nav-item" to="/otherpage">
              <NavItem eventKey={2}>Other Page</NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            {
              !isAuthenticated() && (
                <NavItem eventKey={1} onClick={this.login.bind(this)}>
                  Log In
                </NavItem>
              )
            }
            {
              isAuthenticated() && (
                <NavItem eventKey={1} onClick={this.logout.bind(this)}>
                  Log Out
                </NavItem>
              )
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default App;
