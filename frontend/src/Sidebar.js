import React, { Component } from 'react';

import {
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
import Header from './Header';

class Sidebar extends Component {
    render () {
        const items = [
	    { title: "Dashboard" },
	    { title: "User Profile" },
	    { title: "Table List" },
	    { title: "Typography" },
	    { title: "Icons" },
	    { title: "Maps" },
	    { title: "Notifications" }
	];
        return (
            <aside>
	        <Header />
		<Nav>
	            {items.map((item, i) => (
                        <NavItem key={i}>
                            <NavLink href="#">
                                <p>{item.title}</p>
                            </NavLink>
                        </NavItem>
		    ))}
		</Nav>
            </aside>
        )
    }
};

export default Sidebar;
