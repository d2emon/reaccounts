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
import UserInfo from './Accounts/UserInfo';
import UserList from './Accounts/UserList';
import AddUser from './Accounts/AddUser';

import TestComponent from '../components/TestComponent';
import TopicsScreen from './TopicsScreen';
import GMain2 from './GMain/index';

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
          <Col xs={12}>
              <GMain2 username="gmain2" />
          </Col>
      </Row>
      <Row>
          <Col xs={12}>
	      <UserInfo />
          </Col>
      </Row>
      <Row>
          <Col xs={6}>
              <UserList />
          </Col>
          <Col xs={6}>
              <AddUser />
          </Col>
      </Row>
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
	      <GraphWidget />
          </Col>
      </Row>
      <Row>
          <Col xs={12}>
              <TopicsScreen />
          </Col>
      </Row>
      <Row>
          <Col xs={12}>
              <TestComponent />
          </Col>
      </Row>
    </Container>
    )
  }
};

export default Main;
