import React, { Component } from 'react';
import './css/App.css';

import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Sidebar />
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
