import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class MainNavbar extends Component {
  render () {
    let notifications = [];
    for(let i=0; i<5; i++){
      notifications.push({
        id: i + 1,
        title: `Notification ${i + 1}`,
        item: <DropdownItem eventKey={i + 1}>Notification {i + 1}</DropdownItem>
      });
    }

    return (
    <Navbar color="light" light expand="md">
      <Navbar.Header>
        <NavbarToggler onClick={this.toggle} />
        <Navbar.Brand>
          <a href="#home">Accounts</a>
        </Navbar.Brand>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
      </Navbar.Header>
      <Collapse isOpen={this.state.isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem eventKey={1} href="#">
            <p>Stats</p>
          </NavItem>
          <DropdownMenu eventKey={2} title="Dropdown" id="basic-nav-dropdown">
	    {notifications.map((notification, i) => notification.item)}
            <DropdownItem divider />
            <DropdownItem eventKey={2.9}>Separated link</DropdownItem>
          </DropdownMenu>
          <NavItem eventKey={3} href="#">
            <p>Settings</p>
          </NavItem>

              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
    )
  }
};

export default MainNavbar;

