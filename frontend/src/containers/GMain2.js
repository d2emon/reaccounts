import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Row,
    Col,
    Button
} from  'reactstrap';

import * as usersActions from '../store/users/actions';
import * as usersSelector from '../store/users/reducer';

import {CreatedTime, ElapsedTime} from './GMain2Time';
import Login from './GMain/Login';
import Motd from './GMain/Motd';

import LogoScreen from  '../components/LogoScreen'


function talker(user) { console.log("talker", user); }
function crapup(text) { console.log("crapup", text); }


/* The initial routine */
class GMain2 extends Component {
    constructor (props) {
        super(props);
        this.state = {
            // PROPS user: "",
            b: "",
            num: 0,
        }
    }

    componentDidMount() {
        this.setState({b: ""});

        this.props.dispatch(usersActions.testHostname({user: this.props.user}));
        this.props.dispatch(usersActions.chknolog());
        this.props.dispatch(usersActions.getArgs({args: this.props.args}));

        this.setState({num: 0});

        this.props.dispatch(usersActions.loadStats());
    }

    afterMotd = () => {
        /* Log entry */
        console.log(`Game entry by ${this.props.user} : UID ${this.props.uid}`);
	    /* Run system */
        talker(this.props.user);
	    /* Exit */
        crapup("Bye Bye");
    };

    render() {
        /*
         * Check for all the created at stuff
         *
         * We use stats for this which is a UN*X system call
         *
         */
        console.log(this.state, this.props);
        return <Container>
            <Row>
                { this.props.name && <Col xs={12}>
                    <LogoScreen stats={this.props.stats}>
                        <h3><CreatedTime time={this.props.stats.created} /></h3>
                        <h3><ElapsedTime time={this.props.stats.elapsed} /></h3>
                    </LogoScreen>
                </Col> }
                <Col xs={6}>
                    <Login user={this.props.user} {...this.props} {...this.state} />
                </Col>
                { (!this.state.qnmrq) && <Col xs={6} >
                    <Motd user={this.props.user} {...this.props} {...this.state}/>
                </Col> }
                <Col xs={12}><Button onClick={this.afterMotd}>Ok</Button></Col>
            </Row>
       	</Container>
    }
}

// which props do we want to inject, given the global store state?
function mapStateToProps(state) {
    return {
        args: usersSelector.getArgs(state),
        user: usersSelector.getUser(state),
        stats: usersSelector.getStats(state),
        name: usersSelector.getName(state),
        uid: usersSelector.getUid(state)
    };
}

export default connect(mapStateToProps)(GMain2);
