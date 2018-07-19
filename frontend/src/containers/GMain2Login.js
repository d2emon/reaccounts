import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as usersActions from '../store/users/actions';
// import * as usersSelector from '../store/users/reducer';
// import ListView from '../components/ListView';


class Login extends Component {
    componentDidMount() {
        let {user} = this.props;
	/* Does all the login stuff */
        this.props.dispatch(usersActions.beforeLogin({ user, ...this.props }));
    }

    validate ({user, payload}) {
	payload.namegiv = 0;
        /*
         * Check for legality of names
         */
        if (!user) return false;
        if (user.indexOf('.') > -1) crapup("\nIllegal characters in user name\n");
        user = user.trim();
        // scan(user, user, 0, " ", "");
        if (!user) return false;
        chkname(user);
        if (!user) return false;

	/* Gets name tidied up */
        let dat = user;
        let usrnam = user;
        if (!validname(usrnam)) crapup("Bye Bye");
        let a = logscan({dat});
        if (a == -1) {
            /* If he/she doesnt exist */
            console.log("\nDid I get the name right %s ?", user);
            fgets(a, 79, stdin);
            lowercase(a);
            c = a[0];
            if (c=='n')  {
                printf("\n");
	        return false;
	    }
            /* Check name */
        }
	return true;
    }

    render () {
        return <div> 
            <div>By what name shall I call you?</div>
            user = getkbd(15);
            <h1>Login</h1>
            <button>B</button>
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

export default connect(mapStateToProps)(Login);

