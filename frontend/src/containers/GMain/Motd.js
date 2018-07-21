import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
    Card,
    CardBody,
    CardText
} from 'reactstrap';

import { MOTD } from '../../config';


function Listfl ({fl, ...props}) {
    return <CardText {...props}>Listfl {fl}</CardText>
}


class Motd extends Component {
    constructor (props) {
        super(props);
	    this.state = {
            user: props.user
	    };
    }

    componentDidMount() {
        let {user} = this.props;
    }

    /* list the message of the day */
    render () {
        return <Card>
            <CardBody>
                <Listfl fl={MOTD} />
            </CardBody>
        </Card>
    }
}

// which props do we want to inject, given the global store state?
function mapStateToProps(state) {
    return {
        // args: usersSelector.getArgs(state),
        // user: usersSelector.getUser(state),
        // stats: usersSelector.getStats(state)
    };
}

export default connect(mapStateToProps)(Motd);

