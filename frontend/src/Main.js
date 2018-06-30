import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
import Accounts from './Accounts';
import {
    GraphWidget,
    SmallWidget
} from './Widget';

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
	      <SmallWidget icon="Icon" title="Capacity" value="105GB" stats="Updated now" />
          </Col>
          <Col lg={3} xs={6}>
	      <SmallWidget icon="Icon" title="Revenue" value="$1,345" stats="last day" />
          </Col>
          <Col lg={3} xs={6}>
	      <SmallWidget icon="Icon" title="Errors" value="23" stats="In the last hour" />
          </Col>
          <Col lg= {3} xs={6}>
	      <SmallWidget icon="Icon" title="Followers" value="+45" stats="Updated now" />
          </Col>
      </Row>
      <Row>
          <Col md={12}>
	      <GraphWidget
	          title="Users Behavior"
                  category="24 hour performance"
                  legend={`
                  Open
                  Click
                  Click Second Time
	          `}
	          stats="Updated 3 minutes ago"
	      />
          </Col>
      </Row>
      <Row>
          <Col md={6}>
	      <GraphWidget
	          title="Email Statistics"
                  category="Last Campaign Perfomance"
                  legend={`
                  Open
                  Bounce
                  Unsubscripe
	          `}
	          stats="Campaign set 2 days ago"
	      />
          </Col>
          <Col md={6}>
	      <GraphWidget
	          title="2015 Sales"
                  category="All produxt including Taxes"
                  legend={`
                  Tesla Model S
                  BMW S Series
	          `}
	          stats="Data information certified"
	      />
          </Col>
      </Row>
      <Row>
          <Col xs={12}>
	      <GraphWidget
	      />
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
