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

import LogoScreen from '../../components/LogoScreen';

import LoginModal from '../../modals/LoginModal';
import MotdModal from '../../modals/MotdModal';

import {
    STEP_START,
    STEP_LOGIN,
    STEP_PLAY
} from "../../store/users/steps";

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

        this.props.dispatch(usersActions.setStep({ step: STEP_START }));

        this.login = this.login.bind(this);
        this.play = this.play.bind(this);
        this.reset = this.reset.bind(this);
    }

    componentDidMount () {
        this.props.dispatch(usersActions.testHostname({
            hostname: this.props.hostname,
            user_id: this.props.user_id
        }));
        // this.props.dispatch(usersActions.loadStats());
    }

    login () {
        this.props.dispatch(usersActions.setStep({ step: STEP_LOGIN }));
    }

    play () {
        this.props.dispatch(usersActions.setStep({ step: STEP_PLAY }));
        logEntry(this.props.user);
        talker(this.props.user);
    };

    reset () {
        this.props.dispatch(usersActions.setStep({ step: STEP_START }));
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
                { (this.props.step === STEP_START) && <Col xs={12}>
                    <LogoScreen>
                        <h3><CreatedTime time={this.props.stats.created} /></h3>
                        <h3><ElapsedTime time={this.props.stats.reset} /></h3>
                        <Button onClick={this.login}>Login</Button>
                    </LogoScreen>
                </Col> }
                { (this.props.step !== STEP_START) && <Col xs={12}>
                    <Button onClick={this.reset}>Reset</Button>
                </Col> }
                <LoginModal username={this.state.username} />
                <MotdModal user={this.props.user} {...this.props} />
            </Row>
       	</Container>;
    }
}

function mapStateToProps(state) {
    return {
        errors: errorsSelector.getErrors(state),
        step: usersSelector.getStep(state),
        stats: usersSelector.getStats(state),

        user: usersSelector.getUser(state)
    };
}

export default connect(mapStateToProps)(Index);
