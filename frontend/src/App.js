import React, { Component } from 'react';
// import Logo from './svg/logo.svg';
import './css/App.css';

import Accounts from './Accounts';
/*
import Home from './views/home';
import {
  BrowserRouter,
  Switch,
  Link,
  Route
} from 'react-router-dom'
// import { AppContainer } from 'react-hot-loader';
import AppRouter from './routes';
*/

class Header extends Component {
  render () {
    return (
    <header className="App-header">
      <img src="/images/logo.svg" className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
      <ul>
	{ /* <li><Link to='/'>Home</Link></li> */ }
	{ /* <li><Link to='/roster/a'>Roster(a)</Link></li> */ }
	{ /* <li><Link to='/a-roster'>A::Roster</Link></li> */ }
      </ul>
    </header>
    )
  }
};

class Main extends Component {
  constructor () {
    super();
    let names = [
      "Kitty",
      "Bunny",
      "Author",
      "World"
    ];
    this.state = {
      name: names[0],
      names: names,
      nameId: 0
    };
    this.ClickHandler = this.clickHandler.bind(this);
  }

  clickHandler () {
    return () => {
      let nameId = this.state.nameId + 1;
      if (nameId >= this.state.names.length) {
        nameId = 0
      }
      this.setState({
        nameId: nameId,
        name: this.state.names[nameId]
      });
    }
  }

  render () {
    return (
    <main>
      <Accounts />
      { /* <Switch> */ }
      { /* <Route path='/' component={Home} /> */ }
      { /* <Route path='/roster' /> */ }
      { /* <Route exact path='/a-roster' /> */ }
      { /* </Switch> */ }
      <h1 onClick={this.clickHandler()}>
	{`Hello ${this.state.name}!`}
      </h1>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </main>
    )
  }
};

class App extends Component {
  render () {
    return (
      <div className="App">
	<Header />
        <Main />
      </div>
    );
  }
};

/*
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);
 */
export default App;
