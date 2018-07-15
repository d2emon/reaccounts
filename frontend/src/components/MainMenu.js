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
  DropdownItem
} from 'reactstrap';
import FaSliders from 'react-icons/lib/fa/sliders';
import FaBell from 'react-icons/lib/fa/bell';
import FaCog from 'react-icons/lib/fa/cog';

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

    renderSimpleItem (id, item) {
        return (
            <NavItem key={id}>
                <NavLink href="#">
                    { item.item }
                </NavLink>
            </NavItem>
	)
    }

    renderComplexItem (id, item) {
        return (
            <UncontrolledDropdown nav inNavbar key={id}>
                <DropdownToggle nav caret>
		    { item.item }
                </DropdownToggle>
                <DropdownMenu right>
                    { item.submenu.map((subitem, i) => subitem.item) }
                    <DropdownItem divider />
                    <DropdownItem>Another notification</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
	)
    }

    render () {
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
                        {this.props.items.map((item, i) => {
                            return item.submenu ?
	                        this.renderComplexItem(i, item) :
				this.renderSimpleItem(i, item);
			})}
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
};

export default MainNavbar;

