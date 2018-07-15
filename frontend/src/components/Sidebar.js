import React from 'react';
import {
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import Header from './Header';

const Aside = ({children, items, ...props}) => {
        console.log(this, props);
        return (
            <aside
		{...props}
            >
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
		{children}
            </aside>
        )
};

export default Aside
