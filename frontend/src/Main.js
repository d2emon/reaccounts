import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import MainNavbar from './MainNavbar';
import Accounts from './Accounts';

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
      <MainNavbar />
      <Grid>
        <Row>
          <Col xs={12}>
            <h1 onClick={this.clickHandler()}>
              {`Hello ${this.state.name}!`}
            </h1>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <h1 onClick={this.clickHandler()}>
              {`Hello ${this.state.name}!`}
            </h1>
          </Col>
          <Col xs={6}>
            <h1 onClick={this.clickHandler()}>
              {`Hello ${this.state.name}!`}
            </h1>
          </Col>
          <Col xs={6}>
            <h1 onClick={this.clickHandler()}>
              {`Hello ${this.state.name}!`}
            </h1>
          </Col>
          <Col xs={6}>
            <h1 onClick={this.clickHandler()}>
              {`Hello ${this.state.name}!`}
            </h1>
          </Col>
          <Col xs={6}>
            <h1 onClick={this.clickHandler()}>
              {`Hello ${this.state.name}!`}
            </h1>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <h1 onClick={this.clickHandler()}>
              {`Hello ${this.state.name}!`}
            </h1>
          </Col>
          <Col xs={6}>
            <h1 onClick={this.clickHandler()}>
              {`Hello ${this.state.name}!`}
            </h1>
          </Col>
        <Row>
          <Col xs={12}>
            <h1 onClick={this.clickHandler()}>
              {`Hello ${this.state.name}!`}
            </h1>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <Accounts />
          </Col>
          <Col xs={8}>
            { /* <Switch> */ }
            { /* <Route path='/' component={Home} /> */ }
            { /* <Route path='/roster' /> */ }
            { /* <Route exact path='/a-roster' /> */ }
            { /* </Switch> */ }
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col xs={12} md={8}>
            <code>&lt;{'Col xs={12} md={8}'} /&gt;</code>
          </Col>
          <Col xs={6} md={4}>
            <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
          </Col>
        </Row>

        <Row className="show-grid">
          <Col xs={6} md={4}>
            <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
          </Col>
          <Col xs={6} md={4}>
            <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
          </Col>
          <Col xsHidden md={4}>
            <code>&lt;{'Col xsHidden md={4}'} /&gt;</code>
          </Col>
        </Row>

        <Row className="show-grid">
          <Col xs={6} xsOffset={6}>
            <code>&lt;{'Col xs={6} xsOffset={6}'} /&gt;</code>
          </Col>
        </Row>

        <Row className="show-grid">
          <Col md={6} mdPush={6}>
            <code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code>
          </Col>
          <Col md={6} mdPull={6}>
            <code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code>
          </Col>
        </Row>
      </Grid>
    </main>
    )
  }
};

export default Main;
