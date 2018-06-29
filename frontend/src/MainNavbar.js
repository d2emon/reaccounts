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
import Logo from './Logo';

class MainNavbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render () {
    let notifications = [];
    for(let i=0; i<5; i++){
      notifications.push({
        id: i + 1,
        title: `Notification ${i + 1}`,
        item: <DropdownItem key={i}>Notification {i + 1}</DropdownItem>
      });
    }

    return (
    <Navbar color="light" light expand="md">
      {/*<Navbar.Header>*/}
      <NavbarToggler onClick={this.toggle} />
      <NavbarBrand href="#home">
        <Logo
          style={{
            width: "30px",
	    height: "30px"
	  }}
        />
        Accounts
      </NavbarBrand>
      {/*</Navbar.Header>*/}
      <Collapse isOpen={this.state.isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
	    <NavLink href="#">
              <p>Stats</p>
	    </NavLink>
          </NavItem>
	  <UncontrolledDropdown nav inNavbar>
	    <DropdownToggle nav caret>
              <span className="notification">{notifications.length}</span> Notifications
            </DropdownToggle>
	    <DropdownMenu right>
	      {notifications.map((notification, i) => notification.item)}
              <DropdownItem divider />
              <DropdownItem>Another notification</DropdownItem>
	    </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
	    <NavLink href="#">
	      <p>Settings</p>
	    </NavLink>
          </NavItem>
	</Nav>
      </Collapse>
    </Navbar>
    )
  }
};

export default MainNavbar;

