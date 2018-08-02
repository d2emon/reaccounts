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

import LogoScreen from '../../components/GMain/LogoScreen';

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
            username: props.username,
            showMotd: false
        };

        this.props.dispatch(usersActions.setStep({ step: STEP_START }));

        this.login = this.login.bind(this);
        this.play = this.play.bind(this);
        this.reset = this.reset.bind(this);
    }

    componentDidMount () {
        this.props.dispatch(usersActions.fetchStats({
            hostname: this.props.hostname,
            user_id: this.props.user_id
        }));
        // this.props.dispatch(usersActions.loadStats());
    }

    componentWillReceiveProps (nextProps) {
        this.setState({
            showMotd: nextProps.step > STEP_LOGIN
        }, () => {
            // console.log(nextProps, this.state);
            if (nextProps.step > STEP_LOGIN) this.play();
        })
    }

    login () {
        this.props.dispatch(usersActions.setStep({ step: STEP_LOGIN }));
    }

    play () {
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
                <LoginModal username={this.state.username} />
                <MotdModal {...this.props} isOpen={this.state.showMotd} motd={this.props.motd} />
                <Col xs={12}>
                    <LogoScreen>
                        <h3><CreatedTime time={this.props.created_time} /></h3>
                        <h3><ElapsedTime time={this.props.reset_time} /></h3>
                        { (this.props.step === STEP_START)
                            ? <Button onClick={this.login}>Login</Button>
                            : <Button onClick={this.reset}>Reset</Button> }
                    </LogoScreen>
                </Col>
            </Row>
       	</Container>;
    }
}

function mapStateToProps(state) {
    return {
        errors: errorsSelector.getErrors(state),
        step: usersSelector.getStep(state),

        // Stats
        created_time: usersSelector.getCreatedTime(state),
        reset_time: usersSelector.getResetTime(state),
        motd: usersSelector.getMotd(state) + 'MotD',

        user: usersSelector.getUser(state)
    };
}

export default connect(mapStateToProps)(Index);
