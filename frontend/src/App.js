import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './css/App.css';

import Sidebar from './Sidebar';
import MainNavbar from './MainNavbar';
import Header from './Header';
import Main from './Main';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Container fluid={true}>
        <Row>
	<Col md={2}>
        <Sidebar />
        </Col>
        <Col>
        <main>
          <MainNavbar />
	  <Header />
          <Main />
        </main>
        </Col>
	</Row>
        </Container>
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
