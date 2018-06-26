import React, { Component } from 'react';
// import Logo from './svg/logo.svg';

class Header extends Component {
  render () {
    return (
    <header className="App-header">
      <img src="//localhost:3000/images/logo.svg" className="App-logo" alt="logo" />
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
