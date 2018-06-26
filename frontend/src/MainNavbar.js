import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class MainNavbar extends Component {
  render () {
    let notifications = [];
    for(let i=0; i<5; i++){
      notifications.push({
        id: i + 1,
        title: `Notification ${i + 1}`,
        item: <MenuItem eventKey={i + 1}>Notification {i + 1}</MenuItem>
      });
    }

    return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Toggle />
        <Navbar.Brand>
          <a href="#home">Accounts</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            <p>Stats</p>
          </NavItem>
          <NavDropdown eventKey={2} title="Dropdown" id="basic-nav-dropdown">
	    {notifications.map((notification, i) => notification.item)}
            <MenuItem divider />
            <MenuItem eventKey={2.9}>Separated link</MenuItem>
          </NavDropdown>
          <NavItem eventKey={3} href="#">
            <p>Settings</p>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
  }
};

export default MainNavbar;

