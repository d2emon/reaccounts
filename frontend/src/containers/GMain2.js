import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './TopicsScreen.css';
import * as usersActions from '../store/users/actions';
import * as usersSelector from '../store/users/reducer';
// import ListView from '../components/ListView';

import {CreatedTime, ElapsedTime} from './GMain2Time';
import Login from './GMain2Login';
import Motd from './GMain2Motd';


function getty() { console.log("getty"); }
function cuserid() { console.log("cuserid"); }
function talker(user) { console.log("talker", user); }
function crapup(text) { console.log("crapup", text); }


class GMain2 extends Component {
    constructor (props) {
        super(props);
        this.state = {
            // UNKNOWN
            ttyt: 0,

            // GLOBAL
            qnmrq: 0,
            namegt: '',
            namegiv: 0,

            // PROPS user: "",
            b: "",
            num: 0,
        }
    }

    componentDidMount() {
        // this.props.dispatch(topicsActions.fetchTopics());
        /* The initial routine */
    
        /*
         * Check we are running on the correct host
         * see the notes about the use of flock();
         * and the affects of lockf();
         */
        this.props.dispatch(usersActions.gethostname(33));
        this.props.dispatch(usersActions.testHostname({user: this.props.user}));

        /*
         * Check if there is a no logins file active
         */
        this.props.dispatch(usersActions.chknolog());
	
        let {args} = this.props;
        this.state.b = "";
        /*
         * Now check the option entries
         *
         * -n(name)
         */
        if (args.n !== undefined) {
            this.setState({
		qnmrq: 1,
		ttyt: 0,
		namegt: args.n,
		namegiv: 1
            });
        } else {
            getty();
        }
        this.setState({num: 0});

        this.props.dispatch(usersActions.loadStats());
    }

    afterMotd = () => {
	    let space = cuserid();
        console.log(`Game entry by ${this.props.user} : UID ${space}`);
	    /* Log entry */
	    talker(this.props.user);
	    /* Run system */
	    crapup("Bye Bye");
	    /* Exit */
    };

    render() {
        /*
         * Check for all the created at stuff
         *
         * We use stats for this which is a UN*X system call
         *
         */
        console.log(this.state);
        console.log(this.state.namegiv);
        return <div>
            { this.state.namegiv && <Fragment>
	        <br />
                <h1>A B E R  M U D</h1>
	        <br />
                <h2>By Alan Cox, Richard Acott Jim Finnis</h2>
	        <br />
	        <h3><CreatedTime time={this.props.stats.space} /></h3>
                <h3><ElapsedTime time={this.props.stats.a} /></h3>
            </Fragment> }

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
        stats: usersSelector.getStats(state)
    };
}

export default connect(mapStateToProps)(GMain2);
