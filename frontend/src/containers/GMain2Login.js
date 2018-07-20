import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as usersActions from '../store/users/actions';
import * as usersSelector from '../store/users/reducer';


const chkname = (args) => { console.log("CHKNAME", args); }
const validname = (args) => { console.log("VALIDNAME", args); return true; }
const logscan = (args) => { console.log("LOGSCAN", args); }
const logpass = (args) => { console.log("LOGPASS", args); }


class PromptUserExists extends Component { 
    render () {
        let user = this.props.user;
        let a = logscan({user});
        if (a == undefined) {
            /* If he/she doesnt exist */
            return <div>
                <p>Did I get the name right {user} ?</p>
                <button>Yes</button> <button>No</button>
            </div>
            // if (a[0] =='n') return "Username is required";
            /* Check name */
        } else {
            return '';
        }
    }
}


const FormErrors = ({errors}) => 
    <div className='formErrors'>
	{ Object.keys(errors).map((fieldName, i) => {
            if (errors[fieldName].length > 0){
                return (
                    <p key={i}>{fieldName} {errors[fieldName]}</p>
                )
            } else {
                return '';
            }
        })}
    </div>


class Login extends Component {
    constructor (props) {
        super(props);
        console.log(props);
        this.state = {
            namegiv: 0,

	    username: props.user,
            password: '',
            formErrors: {username: '', password:''},
            valid: {username: false, password: false}
	};
    }
    
    componentDidMount() {
        let {user} = this.props;
	/* Does all the login stuff */
        this.props.dispatch(usersActions.beforeLogin({ user, ...this.props }));

	if (this.state.username) {
            console.log(this.state.username);
	    this.validateField('username', this.state.username);
	}
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, () => { this.validateField(name, value) });
    }

    validateUsername = (value) => {
        // user = getkbd(15);
	this.state.namegiv = 0;
        /*
         * Check for legality of names
         */
        if (!value) throw Error("Username is required");
        if (value.indexOf('.') > -1) throw Error("Illegal characters in user name");
        value = value.trim();
        // scan(user, user, 0, " ", "");
        if (!value) throw Error("Username is required");
        chkname(value);
        if (!value) throw Error("Username is required");

	/* Gets name tidied up */
        if (!validname(value)) throw Error("Bye Bye");
        return true;
    }

    validatePassword = (value) => {
        logpass(this.state.username);
	/* Password checking */
        return true;
    }

    validateField (fieldName, value) {
	let fieldValidationErrors = this.state.formErrors;
        let valid = this.state.valid;
	let validator = undefined;
        switch (fieldName) {
            case 'username':
		validator = this.validateUsername;
		break;
            case 'password':
		validator = this.validatePassword;
		break;
            default:
		break;
	}
	if (!validator) return;
        try {
            valid[fieldName] = validator(value);
            fieldValidationErrors[fieldName] = '';
	} catch (e) {
	    // console.error(e);
            valid[fieldName] = false;
            fieldValidationErrors[fieldName] = e.message;
	}
	this.setState({
	    [fieldName]: value,
	    formErrors: fieldValidationErrors,
            valid: valid
	});
    }

    errorClass (error) {
        return (error.length === 0 ? '' : 'has-error');
    }

    formValid () {
	return this.state.valid.username && this.state.valid.password;
    }

    render () {
	if (this.props.is_banned) {
	    return <h3>I'm sorry- that userid has been banned from the Game</h3>
	}
        return <div>
	    <form className="loginForm">
                <h2>Sign Up</h2>
                <div className="panel panel-default">
		    <FormErrors errors={this.state.formErrors} />
                </div>
		{ this.state.valid.username 
	            ? <PromptUserExists user={this.state.username} />
                    : <div className={`form-group ${this.errorClass(this.state.formErrors.username)}`}>
                          <label htmlFor="username">By what name shall I call you?</label>
		          <input type="text" className="form-control" name="username" defaultValue={this.state.username} onChange={this.handleUserInput} />
                      </div> }
                <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" onChange={this.handleUserInput}/>
                </div>
                <button type="submit" className="btn btn-primary" disabled={!this.formValid()} onClick={this.login}>
                    Sign up
                </button>
            </form>
        </div>
    }
}

// which props do we want to inject, given the global store state?
function mapStateToProps(state) {
    return {
        user: usersSelector.getUser(state),
        is_banned: usersSelector.isBanned(state)
    };
}

export default connect(mapStateToProps)(Login);

