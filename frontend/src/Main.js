import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardText,
    CardFooter } from 'reactstrap';
import Accounts from './Accounts';

class Clicker extends Component {
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
          <h1 onClick={this.clickHandler()}>
              {`Hello ${this.state.name}!`}
          </h1>
      );
  }
}

const Widget = ({icon, title, value, ...props}) => {
    console.log(props);
    /* {props.children} */
    return (
        <Card>
	    <CardBody {...props} >
	        <Row>
                    <Col xs={5}>
                        {icon}
                    </Col>
                    <Col xs={7}>
                        <div className="numbers">
	                    <p>{title}</p>
                            {value}
                        </div>
                    </Col>
                </Row>
                {props.children}
	        <CardFooter>
                    <Clicker />
	        </CardFooter>
	    </CardBody>
        </Card>
    );
}

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
    <Container fluid={true}>
      <Row>
          <Col lg={3} xs={6}>
	    <Widget icon="Icon" title="Capacity" value="105GB">
	        12345
	    </Widget>
          </Col>
          <Col lg={3} xs={6}>
	    <Widget icon="Icon" title="Revenue" value="$1,345">
	      <Clicker />
	    </Widget>
          </Col>
          <Col lg={3} xs={6}>
	    <Widget icon="Icon" title="Errors" value="23">
	      <Clicker />
	    </Widget>
          </Col>
          <Col lg= {3} xs={6}>
	    <Widget icon="Icon" title="Followers" value="+45">
	      <Clicker />
	    </Widget>
          </Col>
      </Row>
      <Row>
          <Col md={12}>
            <h1 onClick={this.clickHandler()}>
              {`Hello ${this.state.name}!`}
            </h1>
          </Col>
      </Row>
      <Row>
          <Col md={6}>
            <h1 onClick={this.clickHandler()}>
              {`Hello ${this.state.name}!`}
            </h1>
          </Col>
          <Col md={6}>
            <h1 onClick={this.clickHandler()}>
              {`Hello ${this.state.name}!`}
            </h1>
          </Col>
      </Row>
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
          <Col md={4}>
            <code>&lt;{'Col xsHidden md={4}'} /&gt;</code>
          </Col>
      </Row>

      <Row className="show-grid">
          <Col xs={{ size: 6, offse: 6 }}>
            <code>&lt;{'Col xs={6} xsOffset={6}'} /&gt;</code>
          </Col>
      </Row>

      <Row className="show-grid">
          <Col md={6}>
            <code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code>
          </Col>
          <Col md={6}>
            <code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code>
          </Col>
      </Row>
    </Container>
    )
  }
};

export default Main;
