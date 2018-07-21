import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './TopicsScreen.css';
import * as usersActions from '../store/users/actions';
import * as usersSelector from '../store/users/reducer';
// import ListView from '../components/ListView';

import {CreatedTime, ElapsedTime} from './GMain2Time';
import Login from './GMain2Login';
import Motd from './GMain2Motd';

import LogoScreen from  '../components/LogoScreen'


function cuserid() { console.log("cuserid"); }
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
	    const space = cuserid();

        /* Log entry */
        console.log(`Game entry by ${this.props.user} : UID ${space}`);
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
        return <div>
            { this.props.name && <LogoScreen stats={this.props.stats}>
                <h3><CreatedTime time={this.props.stats.space} /></h3>
                <h3><ElapsedTime time={this.props.stats.r} /></h3>
            </LogoScreen> }
    	    <Login user={this.props.user} {...this.props} {...this.state} />
            { (!this.state.qnmrq) && <Motd user={this.props.user} {...this.props} {...this.state}/> }
            <button onClick={this.afterMotd}>Ok</button>
       	</div>
    }
}

// which props do we want to inject, given the global store state?
function mapStateToProps(state) {
    return {
        args: usersSelector.getArgs(state),
        user: usersSelector.getUser(state),
        stats: usersSelector.getStats(state),
        name: usersSelector.getName(state)
    };
}

export default connect(mapStateToProps)(GMain2);
