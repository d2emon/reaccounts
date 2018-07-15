import React, { Fragment } from 'react';
import {
    Container,
    Row,
    Col,
} from 'reactstrap';

const TestComponent = ({children, ...props}) => {
    return (
	<Fragment>    
            <Row>
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
		
            { children }
	</Fragment>    
    )
};

export default TestComponent;

