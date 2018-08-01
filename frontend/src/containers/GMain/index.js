'use strict';
import React, { Component } from 'react';
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

/**
 * The initial routine
 */
class Index extends Component {
    componentDidMount() {
        this.props.dispatch(usersActions.testHostname({ hostname: this.props.hostname }));
        this.props.dispatch(usersActions.getArgs(this.props.args));
        // this.props.dispatch(usersActions.loadStats());
    }

    afterMotd = () => {
        let {username, id} = this.props.user;
        /* Log entry */
        console.log(`Game entry by ${username} : UID ${id}`);
	    /* Run system */
        talker(this.props.user);
    };

    /**
     * Check for all the created at stuff
     * We use stats for this which is a UN*X system call
     * @returns {*}
     */
    render() {
        console.log(this.props);

        /* if (this.props.errors.length > 0) return <h2>{this.props.errors}</h2>; */

        return <Container>
            <Row>
                { (!this.props.username) && <Col xs={12}>
                    <LogoScreen>
                        <h3><CreatedTime time={this.props.stats.created} /></h3>
                        <h3><ElapsedTime time={this.props.stats.reset} /></h3>
                    </LogoScreen>
                </Col> }

                <Col xs={6}>
                    <Login username={this.props.username} />
                </Col>

                { (!this.props.qnmrq) && <Col xs={6} >
                    <Motd user={this.props.user} {...this.props} />
                </Col> }
                <Col xs={12}><Button onClick={this.afterMotd}>Ok</Button></Col>
            </Row>
       	</Container>;
    }
}

function mapStateToProps(state) {
    return {
        errors: usersSelector.getErrors(state),

        args: usersSelector.getArgs(state),

        name: usersSelector.getName(state),

        user: usersSelector.getUser(state),
        stats: usersSelector.getStats(state),

        qnmrq: 0
    };
}

export default connect(mapStateToProps)(Index);
