import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as usersActions from '../store/users/actions';
// import * as usersSelector from '../store/users/reducer';
// import ListView from '../components/ListView';


const MOTD = "MOTD";


function Listfl ({fl, ...props}) {
    return <div {...props}>Listfl {fl}</div>
}


class Motd extends Component {
    componentDidMount() {
        let {user} = this.props;
    }

    render () {
        return <div> 
	    <Listfl fl={MOTD} />
            { /* list the message of the day */ }
            <button>B</button>
            <br />
            <br />
        </div>
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

