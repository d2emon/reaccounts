import React, { Component } from 'react';
import {
    Row,
    Col,
    Card,
    CardBody,
    CardHeader,
    CardText,
    CardFooter } from 'reactstrap';

class Clicker extends Component {
  constructor () {
    super();
    let names = [
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

export const Widget = ({
    header,
    legend,
    stats,
    children,
    ...props
}) => {
    return (
	<Card {...props}>
	    {header}
	    <CardBody>
	        {children}
                <CardFooter>
	            {legend && (
                    <div className="chart-legend">
                        {legend}
	                <hr />
	            </div>
                    )}
	            <div className="stats">
	                {stats}
                    </div> 
                </CardFooter>
	    </CardBody>
	</Card>
    );
}

export const GraphWidget =({
    title,
    category,
    ...props
}) => {
    return (
	<Widget
	    header={(
	    <CardHeader>
	        <h4>{title}</h4>
	        <p className="category">{category}</p>
	    </CardHeader>
	    )}
            {...props}
	>
            <Clicker />
	</Widget>
    );
}

export const SmallWidget = ({
    icon,
    title,
    value,
    ...props
}) => {
    /* {props.children} */
    return (
	<Widget
            {...props}
	>
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
	</Widget>
    );
}
