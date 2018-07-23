import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Row,
    Col,
    Button
} from  'reactstrap';

import * as usersActions from '../../store/users/actions';
import * as usersSelector from '../../store/users/reducer';

import {CreatedTime, ElapsedTime} from './GMain2Time';
import Login from './Login';
import Motd from './Motd';

import LogoScreen from '../../components/LogoScreen'


function talker(user) { console.log("talker", user); }


const hostname = "HOST-MACHINE";


/* The initial routine */
class Index extends Component {
    componentDidMount() {
        this.props.dispatch(usersActions.testHostname({hostname}));
        this.props.dispatch(usersActions.getArgs(this.props.args));
        // this.props.dispatch(usersActions.loadStats());
    }

    afterMotd = () => {
        /* Log entry */
        console.log(`Game entry by ${this.props.user} : UID ${this.props.uid}`);
	    /* Run system */
        talker(this.props.user);
    };

    render() {
        /*
         * Check for all the created at stuff
         * We use stats for this which is a UN*X system call
         */
        console.log(this.props);

        if (this.props.error) return <h2>{this.props.error}</h2>;

        return <Container>
            <Row>
                { this.props.name && <Col xs={12}>
                    <LogoScreen stats={this.props.stats}>
                        <h3><CreatedTime time={this.props.stats.created} /></h3>
                        <h3><ElapsedTime time={this.props.stats.reset} /></h3>
                    </LogoScreen>
                </Col> }
                <Col xs={6}>
                    <Login username={this.props.username} {...this.props} />
                </Col>
                { (!this.props.qnmrq) && <Col xs={6} >
                    <Motd user={this.props.user} {...this.props} />
                </Col> }
                <Col xs={12}><Button onClick={this.afterMotd}>Ok</Button></Col>
            </Row>
       	</Container>
    }
}

// which props do we want to inject, given the global store state?
function mapStateToProps(state) {
    return {
        error: usersSelector.getError(state),

        args: usersSelector.getArgs(state),

        name: usersSelector.getName(state),

        user: usersSelector.getUser(state),
        stats: usersSelector.getStats(state),
        uid: usersSelector.getUid(state),

        qnmrq: 0
    };
}

export default connect(mapStateToProps)(Index);
