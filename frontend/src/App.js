import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'themify-icons/themify-icons/_themify-icons.scss';
import './css/dashboard.css';

import Sidebar from './Sidebar';
import MainNavbar from './MainNavbar';
import Main from './Main';

class App extends Component {
  render () {
    return (
      <div className="App">
	{/*
	<Container fluid={true}>
        <Row>
	<Col md={2}>
	*/}
        <Sidebar />
	{/*
        </Col>
        <Col>
	*/}
        <main>
          <MainNavbar />
          <Main />
        </main>
	{/*
        </Col>
	</Row>
        </Container>
	*/}
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
