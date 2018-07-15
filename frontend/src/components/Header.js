import React, { Component } from 'react';
import Logo from './Logo';

const Header = ({children, ...props}) => {
    return (
        <header className="App-header" {...props}>
            <Logo />
            <h1 className="App-title">Welcome to React</h1>
            {/*<ul>*/}
	          { /* <li><Link to='/'>Home</Link></li> */ }
	          { /* <li><Link to='/roster/a'>Roster(a)</Link></li> */ }
	          { /* <li><Link to='/a-roster'>A::Roster</Link></li> */ }
            {/*</ul>*/}
            { children }
        </header>
    )
};

export default Header;
