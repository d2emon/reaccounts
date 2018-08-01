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
import * as errorsSelector from '../../store/errors/reducer';

import {CreatedTime, ElapsedTime} from './GMain2Time';
import Login from './Login';
import Motd from './Motd';

import LogoScreen from '../../components/LogoScreen'

/* Log entry */
function logEntry (user) {console.log(`Game entry by ${user.username} : UID ${user.id}`);}
/* Run system */
function talker (user) { console.log("talker", user); }

/**
 * The initial routine
 */
class Index extends Component {
    constructor (props) {
        super(props);
        this.state = {
            username: props.username
        };
        this.play = this.play.bind(this);
    }

    componentDidMount () {
        this.props.dispatch(usersActions.testHostname({
            hostname: this.props.hostname,
            user_id: this.props.user_id
        }));
        // this.props.dispatch(usersActions.loadStats());
    }

    play = () => {
        logEntry(this.props.user);
        talker(this.props.user);
    };

    /**
     * Check for all the created at stuff
     * We use stats for this which is a UN*X system call
     * @returns {*}
     */
    render() {
        console.log(this.props, this.state);

        /* if (this.props.errors.length > 0) return <h2>{this.props.errors}</h2>; */

        return <Container>
            <Row>
                { (!this.state.username) && <Col xs={12}>
                    <LogoScreen>
                        <h3><CreatedTime time={this.props.stats.created} /></h3>
                        <h3><ElapsedTime time={this.props.stats.reset} /></h3>
                    </LogoScreen>
                </Col> }

                <Col xs={6}>
                    <Login username={this.state.username} />
                </Col>

                { (!this.state.username) && <Col xs={6} >
                    <Motd user={this.props.user} {...this.props} />
                </Col> }
                <Col xs={12}><Button onClick={this.play}>Ok</Button></Col>
            </Row>
       	</Container>;
    }
}

function mapStateToProps(state) {
    return {
        errors: errorsSelector.getErrors(state),
        stats: usersSelector.getStats(state),

        user: usersSelector.getUser(state)
    };
}

export default connect(mapStateToProps)(Index);
