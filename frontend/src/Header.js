import React, { Component } from 'react';
import Logo from './Logo';

class Header extends Component {
  render () {
    return (
    <header className="App-header">
      <Logo width="300px" height="300px" />
      <h1 className="App-title">Welcome to React</h1>
      {/*<ul>*/}
	{ /* <li><Link to='/'>Home</Link></li> */ }
	{ /* <li><Link to='/roster/a'>Roster(a)</Link></li> */ }
	{ /* <li><Link to='/a-roster'>A::Roster</Link></li> */ }
      {/*</ul>*/}
    </header>
    )
  }
};

export default Header;
