import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Sidebar from './containers/Sidebar';
import MainNavbar from './containers/MainNavbar';
import Main from './containers/Main';

import './css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './css/dashboard.css';

class App extends Component {
    render () {
        return (
            <div className="App">
                <Sidebar />
                <main>
                    <MainNavbar />
                    <Main />
                </main>
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
